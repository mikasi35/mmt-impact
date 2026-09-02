/**
 * Downsizes and re-compresses the dropped-in photography under public/images.
 *
 * Run once after new photos land: `npm run images:optimize`.
 *
 * Source files arrived at native camera resolution (up to 6336×9504, several
 * over 2MB, one at 6.1MB) — serving those as-is would blow the site's stated
 * LCP budget on first paint. This resizes in place to a sane web ceiling and
 * re-encodes as mozjpeg, keeping filenames and paths identical so nothing
 * that already references them needs to change.
 */
import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'node:fs/promises';
import { join, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const imagesDir = join(root, 'public/images');

// Anything with "hero" in the filename is shown large/full-bleed; everything
// else is a portrait, square or band crop shown smaller — give it a lower
// ceiling since it never needs to fill a viewport width.
const HERO_MAX = 2400;
// Lowered from 1800: at the widest a non-hero crop is ever shown (a grid
// column inside the 1440px .wrap ceiling), 1200 already covers 2x retina —
// Lighthouse flagged the who-are-we.jpg crop as 3.2x its displayed size.
const STANDARD_MAX = 1200;
// A second, small tier for mobile — the largest either a hero or a standard
// crop is ever shown on a phone viewport (~430px) at 2x retina. Written as
// `name-sm.jpg` alongside the existing `name.jpg`; Plate.astro references
// both via srcset so mobile never downloads the desktop-sized original.
const SMALL_MAX = 800;
const QUALITY = 80;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

// Only the page/section subfolders — NOT loose files sitting directly in
// public/images (mmt-impact-logo.png, favicon.jpg, symbol.jpg), and NOT
// logo/. Those are brand marks with alpha transparency a JPEG re-encode
// would destroy (flattened to an opaque background, breaking the footer's
// colour-invert filter and any other non-white placement) — resize those by
// hand, keeping the PNG format, instead of running them through this script.
const EXCLUDED_SUBFOLDERS = new Set(['logo']);

async function* pageSubfolders(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && !EXCLUDED_SUBFOLDERS.has(entry.name)) {
      yield* walk(join(dir, entry.name));
    }
  }
}

let processed = 0;
let beforeTotal = 0;
let afterTotal = 0;

for await (const file of pageSubfolders(imagesDir)) {
  const ext = extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;
  // A `-sm.jpg` is this script's own small-tier OUTPUT, not a source photo —
  // without this guard, re-running the script treats every previous small
  // tier as a new source and generates a `-sm-sm.jpg` on top of it.
  if (/-sm\.jpe?g$/i.test(file)) continue;

  const before = (await stat(file)).size;
  const maxEdge = /hero/i.test(file) ? HERO_MAX : STANDARD_MAX;

  // JPEG output regardless of source extension — every image in these
  // subfolders is photographic (no flat-colour logos here), so JPEG is the
  // right call, and it lets every path stay a predictable .jpg.
  const outPath = file.replace(/\.(png|jpeg)$/i, '.jpg');
  const tmpPath = outPath + '.tmp';

  // Read fully into a buffer first, THEN write — writing straight back to a
  // path sharp just streamed a read from (same-file in-place edit) trips
  // "unable to open for write" on Windows. Buffer-then-rename sidesteps it.
  const buffer = await sharp(file)
    .rotate() // apply EXIF orientation, then strip metadata on encode
    .resize({ width: maxEdge, height: maxEdge, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();

  await sharp(buffer).toFile(tmpPath);
  if (outPath !== file) await unlink(file);
  await rename(tmpPath, outPath);

  // Small tier, downsampled from the buffer above rather than re-reading the
  // original — it's already been through rotate/strip, and this is strictly
  // a further downscale so there's no quality reason to start over.
  const smallPath = outPath.replace(/\.jpg$/i, '-sm.jpg');
  const smallBuffer = await sharp(buffer)
    .resize({ width: SMALL_MAX, height: SMALL_MAX, fit: 'inside', withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true })
    .toBuffer();
  await sharp(smallBuffer).toFile(smallPath + '.tmp');
  await rename(smallPath + '.tmp', smallPath);

  const after = (await stat(outPath)).size;
  const afterSmall = (await stat(smallPath)).size;
  beforeTotal += before;
  afterTotal += after + afterSmall;
  processed++;

  const rel = outPath.replace(root + '\\', '').replace(root + '/', '');
  console.log(
    `${(before / 1024).toFixed(0).padStart(6)} KB -> ${(after / 1024).toFixed(0).padStart(5)} KB  ${rel}  (+${(afterSmall / 1024).toFixed(0)} KB small tier)`
  );
}

console.log(
  `\n${processed} images optimised. ${(beforeTotal / 1024 / 1024).toFixed(1)} MB -> ${(afterTotal / 1024 / 1024).toFixed(1)} MB.`
);
