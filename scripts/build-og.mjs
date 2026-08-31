/**
 * Generates the Open Graph card and PWA icons from the brand lockup.
 *
 * Run: node scripts/build-og.mjs
 * These are committed outputs — regenerate only when the brand changes.
 */
import sharp from 'sharp';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const NAVY = '#071827';
const NAVY_MID = '#0e2b3f';
const OCHRE = '#c99a45';
const PAPER = '#f5f4f0';

/* ---- graticule used across the brand as a cartographic signature ---- */
function graticule(w, h, step, opacity) {
  let out = '';
  for (let x = step; x < w; x += step) {
    out += `<line x1="${x}" y1="0" x2="${x}" y2="${h}" stroke="#ffffff" stroke-opacity="${opacity}" stroke-width="1"/>`;
  }
  for (let y = step; y < h; y += step) {
    out += `<line x1="0" y1="${y}" x2="${w}" y2="${y}" stroke="#ffffff" stroke-opacity="${opacity}" stroke-width="1"/>`;
  }
  return out;
}

const ogSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="0.7" y2="1">
      <stop offset="0%" stop-color="${NAVY_MID}"/>
      <stop offset="100%" stop-color="${NAVY}"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.2" cy="0.15" r="0.9">
      <stop offset="0%" stop-color="${OCHRE}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${OCHRE}" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <g opacity="0.55">${graticule(1200, 630, 75, 0.05)}</g>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <!-- contour band -->
  <g opacity="0.5" fill="none" stroke="${OCHRE}" stroke-width="1.2">
    <path d="M-20 470 Q 200 420 420 462 T 860 448 T 1220 480"/>
    <path d="M-20 512 Q 220 458 440 505 T 880 490 T 1220 522" stroke-opacity="0.6"/>
    <path d="M-20 556 Q 240 498 460 549 T 900 534 T 1220 566" stroke-opacity="0.35"/>
  </g>

  <!-- mark composited in after render, see below — this leaves the space for it -->

  <text x="176" y="112" font-family="IBM Plex Sans, Helvetica, Arial, sans-serif" font-size="34" font-weight="600" letter-spacing="2.4" fill="${PAPER}">MMT</text>
  <text x="278" y="112" font-family="IBM Plex Sans, Helvetica, Arial, sans-serif" font-size="34" font-weight="300" letter-spacing="7.5" fill="${PAPER}">IMPACT</text>

  <line x1="84" y1="190" x2="150" y2="190" stroke="${OCHRE}" stroke-width="3"/>
  <text x="84" y="168" font-family="IBM Plex Mono, monospace" font-size="17" letter-spacing="4.2" fill="${OCHRE}">SOUTH SUDAN / DEVELOPMENT / HUMANITARIAN ACTION</text>

  <text x="84" y="300" font-family="Georgia, Times New Roman, serif" font-size="88" fill="${PAPER}">Building</text>
  <text x="84" y="382" font-family="Georgia, Times New Roman, serif" font-size="88" fill="${PAPER}">Stronger</text>
  <text x="84" y="464" font-family="Georgia, Times New Roman, serif" font-size="88" fill="${OCHRE}">Communities.</text>

  <text x="84" y="562" font-family="IBM Plex Mono, monospace" font-size="16" letter-spacing="3.4" fill="${PAPER}" fill-opacity="0.55">JUBA  04°51′N 31°36′E</text>
  <text x="1116" y="562" text-anchor="end" font-family="IBM Plex Mono, monospace" font-size="16" letter-spacing="3.4" fill="${PAPER}" fill-opacity="0.55">MMTIMPACT.ORG</text>
</svg>`;

await mkdir(join(root, 'public/og'), { recursive: true });

// Composite the real brand mark onto the rendered card — favicons and touch
// icons are handled separately by scripts/build-favicon.mjs, which is the
// authoritative source for those; this script owns the OG social card only.
const markPath = join(root, 'public/images/logo/mark.png');
const mark = await sharp(markPath).resize(74, 74, { fit: 'contain' }).toBuffer();

await sharp(Buffer.from(ogSvg))
  .composite([{ input: mark, left: 84, top: 76 }])
  .png({ quality: 92 })
  .toFile(join(root, 'public/og/mmt-impact-og.png'));

// Keep the source SVG alongside the raster so the card can be re-cut later.
await writeFile(join(root, 'public/og/mmt-impact-og.svg'), ogSvg, 'utf8');

console.log('Generated: og/mmt-impact-og.png (mark composited from images/logo/mark.png)');
