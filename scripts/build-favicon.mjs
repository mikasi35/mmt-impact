/**
 * Builds the favicon and touch-icon set from the real brand mark.
 *
 * Source: public/images/logo/favicon-badge.png — a tight, circularly-masked
 * crop of the supplied favicon.jpg, produced once by hand (see git history /
 * CONTENT-TO-VERIFY.md) and checked in. This script only resizes it.
 *
 * Run: node scripts/build-favicon.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(root, 'public/images/logo/favicon-badge.png');
const NAVY = '#071827';

await mkdir(join(root, 'public/icons'), { recursive: true });

// Transparent-background favicons — correct for a tab bar in any theme.
for (const size of [16, 32, 48, 192, 512]) {
  const out =
    size <= 48
      ? join(root, `public/favicon-${size}.png`)
      : join(root, `public/icons/icon-${size}.png`);
  await sharp(SRC).resize(size, size).png().toFile(out);
}

// Apple touch icon: iOS tiles it on a solid background, so composite onto
// brand navy rather than leaving it transparent (which iOS renders on white,
// producing a washed-out tile with a hard-edged circle).
const badge = await sharp(SRC).resize(152, 152).toBuffer();
await sharp({
  create: { width: 180, height: 180, channels: 4, background: NAVY },
})
  .composite([{ input: badge, gravity: 'center' }])
  .png()
  .toFile(join(root, 'public/icons/apple-touch-icon.png'));

console.log('Favicon set built: favicon-16/32/48.png, icons/icon-192/512.png, icons/apple-touch-icon.png');
