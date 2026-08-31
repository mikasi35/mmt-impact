/**
 * PLATES — the media substrate.
 *
 * MMT Impact's design is photography-led. Until commissioned, consented field
 * photography is in place, every image slot renders a deterministic
 * cartographic/data plate drawn in the brand palette rather than a grey box or
 * a generic stock image.
 *
 * Two rules make this work:
 *   1. Deterministic. A given `seed` always draws the same plate, so builds are
 *      reproducible and pages don't shimmer between deploys.
 *   2. Drop-in replaceable. `<Plate>` renders a real <img> the moment a `src`
 *      is supplied, at the same aspect ratio and with the same caption — so
 *      swapping in photography is a file copy, not a redesign.
 *
 * See public/images/README.md for the drop-in manifest.
 */

export type PlateVariant =
  | 'terrain'
  | 'graticule'
  | 'cohort'
  | 'horizon'
  | 'network'
  | 'strata';

export type PlateTone = 'navy' | 'ochre' | 'green' | 'sand';

const W = 1200;
const H = 800;

/* ---- deterministic PRNG (mulberry32 over an FNV-1a string hash) ---------- */

function hash(str: string): number {
  let h = 2166136261;
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

function rng(seed: string): () => number {
  let a = hash(seed);
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

interface Palette {
  bg0: string;
  bg1: string;
  line: string;
  lineSoft: string;
  accent: string;
  accentSoft: string;
  field: string;
}

const PALETTES: Record<PlateTone, Palette> = {
  navy: {
    bg0: '#04101b',
    bg1: '#0e2b3f',
    line: '#2b5b78',
    lineSoft: '#1c465f',
    accent: '#c99a45',
    accentSoft: '#8a6a34',
    field: '#0b2235',
  },
  ochre: {
    bg0: '#241a09',
    bg1: '#5b4318',
    line: '#a8813a',
    lineSoft: '#7a5d28',
    accent: '#e5c78f',
    accentSoft: '#b88932',
    field: '#3a2b0f',
  },
  green: {
    bg0: '#101f17',
    bg1: '#24402f',
    line: '#4b7057',
    lineSoft: '#365b46',
    accent: '#d7af64',
    accentSoft: '#7c9a78',
    field: '#1a3023',
  },
  sand: {
    bg0: '#ddd5c3',
    bg1: '#f0ece1',
    line: '#a89d84',
    lineSoft: '#c5bba4',
    accent: '#b88932',
    accentSoft: '#8d8570',
    field: '#e9e4d8',
  },
};

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/* ------------------------------------------------------------------------ */

function terrain(r: () => number, p: Palette, uid: string): string {
  const rows = 16;
  let out = '';
  for (let i = 0; i < rows; i++) {
    const t = i / (rows - 1);
    const baseY = 120 + t * (H + 60);
    const amp = 26 + r() * 66 * (1 - t * 0.4);
    const f1 = 1.1 + r() * 1.9;
    const f2 = 2.4 + r() * 3.4;
    const ph1 = r() * Math.PI * 2;
    const ph2 = r() * Math.PI * 2;

    let d = `M -40 ${H + 80} L -40 ${baseY.toFixed(1)}`;
    for (let x = -40; x <= W + 40; x += 56) {
      const u = x / W;
      const y =
        baseY +
        Math.sin(u * Math.PI * f1 + ph1) * amp +
        Math.sin(u * Math.PI * f2 + ph2) * amp * 0.38;
      d += ` L ${x} ${y.toFixed(1)}`;
    }
    d += ` L ${W + 40} ${H + 80} Z`;

    const isAccent = i > 3 && i % 7 === 3;
    const fillOpacity = 0.1 + t * 0.5;
    out += `<path d="${d}" fill="${p.field}" fill-opacity="${fillOpacity.toFixed(3)}" stroke="${
      isAccent ? p.accent : p.line
    }" stroke-opacity="${isAccent ? 0.75 : (0.16 + t * 0.34).toFixed(3)}" stroke-width="${
      isAccent ? 1.6 : 1
    }" vector-effect="non-scaling-stroke"/>`;
  }
  return `<g mask="url(#fade-${uid})">${out}</g>`;
}

function graticule(r: () => number, p: Palette, uid: string): string {
  let out = '';
  // parallels
  for (let i = 1; i < 9; i++) {
    const y = (i / 9) * H;
    const bow = 34 * Math.sin((i / 9) * Math.PI);
    out += `<path d="M -30 ${y.toFixed(1)} Q ${W / 2} ${(y - bow).toFixed(1)} ${W + 30} ${y.toFixed(
      1
    )}" fill="none" stroke="${p.line}" stroke-opacity="0.3" stroke-width="1" vector-effect="non-scaling-stroke"/>`;
  }
  // meridians
  for (let i = 1; i < 13; i++) {
    const x = (i / 13) * W;
    const bow = 46 * Math.sin((i / 13) * Math.PI);
    out += `<path d="M ${x.toFixed(1)} -30 Q ${(x + bow).toFixed(1)} ${H / 2} ${x.toFixed(1)} ${
      H + 30
    }" fill="none" stroke="${p.line}" stroke-opacity="0.22" stroke-width="1" vector-effect="non-scaling-stroke"/>`;
  }
  // scattered survey points
  for (let i = 0; i < 26; i++) {
    const x = 60 + r() * (W - 120);
    const y = 60 + r() * (H - 120);
    const big = r() > 0.86;
    out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${big ? 3.4 : 1.7}" fill="${
      big ? p.accent : p.line
    }" fill-opacity="${big ? 0.95 : 0.5}"/>`;
  }
  // primary crosshair
  const cx = W * (0.34 + r() * 0.3);
  const cy = H * (0.36 + r() * 0.26);
  out += `<g stroke="${p.accent}" stroke-width="1.2" vector-effect="non-scaling-stroke">
    <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="46" fill="none" stroke-opacity="0.85"/>
    <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="94" fill="none" stroke-opacity="0.34"/>
    <line x1="${(cx - 74).toFixed(1)}" y1="${cy.toFixed(1)}" x2="${(cx - 54).toFixed(1)}" y2="${cy.toFixed(1)}"/>
    <line x1="${(cx + 54).toFixed(1)}" y1="${cy.toFixed(1)}" x2="${(cx + 74).toFixed(1)}" y2="${cy.toFixed(1)}"/>
    <line x1="${cx.toFixed(1)}" y1="${(cy - 74).toFixed(1)}" x2="${cx.toFixed(1)}" y2="${(cy - 54).toFixed(1)}"/>
    <line x1="${cx.toFixed(1)}" y1="${(cy + 54).toFixed(1)}" x2="${cx.toFixed(1)}" y2="${(cy + 74).toFixed(1)}"/>
  </g>
  <circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="6" fill="${p.accent}"/>`;
  return `<g mask="url(#fade-${uid})">${out}</g>`;
}

function cohort(r: () => number, p: Palette, uid: string): string {
  const cols = 26;
  const rows = 16;
  const gx = W / (cols + 1);
  const gy = H / (rows + 1);
  const fx = 0.2 + r() * 0.6;
  const fy = 0.25 + r() * 0.5;
  let out = '';
  for (let i = 1; i <= cols; i++) {
    for (let j = 1; j <= rows; j++) {
      const x = i * gx;
      const y = j * gy;
      const dx = (i / cols - fx) * 1.9;
      const dy = (j / rows - fy) * 1.9;
      const d = Math.sqrt(dx * dx + dy * dy);
      const density = Math.max(0, 1 - d);
      const on = r() < density * 1.15;
      if (!on) {
        out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.4" fill="${p.line}" fill-opacity="0.24"/>`;
        continue;
      }
      const hot = density > 0.62 && r() > 0.55;
      out += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${hot ? 5 : 3.2}" fill="${
        hot ? p.accent : p.line
      }" fill-opacity="${hot ? 0.92 : (0.32 + density * 0.5).toFixed(3)}"/>`;
    }
  }
  return `<g mask="url(#fade-${uid})">${out}</g>`;
}

function horizon(r: () => number, p: Palette, uid: string): string {
  const hy = H * (0.56 + r() * 0.14);
  const sunX = W * (0.2 + r() * 0.55);
  const sunR = 76 + r() * 54;
  let out = '';

  out += `<circle cx="${sunX.toFixed(1)}" cy="${(hy - sunR * 0.34).toFixed(
    1
  )}" r="${sunR.toFixed(1)}" fill="none" stroke="${p.accent}" stroke-opacity="0.55" stroke-width="1.4" vector-effect="non-scaling-stroke"/>`;
  out += `<circle cx="${sunX.toFixed(1)}" cy="${(hy - sunR * 0.34).toFixed(1)}" r="${(
    sunR * 0.42
  ).toFixed(1)}" fill="${p.accent}" fill-opacity="0.14"/>`;

  // atmosphere bands above the horizon
  for (let i = 0; i < 16; i++) {
    const y = hy - (i + 1) * (hy / 17);
    out += `<line x1="-20" y1="${y.toFixed(1)}" x2="${W + 20}" y2="${y.toFixed(
      1
    )}" stroke="${p.line}" stroke-opacity="${(0.34 - i * 0.019).toFixed(3)}" stroke-width="${(
      7 - i * 0.32
    ).toFixed(2)}"/>`;
  }

  out += `<line x1="-20" y1="${hy.toFixed(1)}" x2="${W + 20}" y2="${hy.toFixed(
    1
  )}" stroke="${p.accent}" stroke-opacity="0.7" stroke-width="1.4" vector-effect="non-scaling-stroke"/>`;

  // ground ridges
  for (let i = 0; i < 5; i++) {
    const baseY = hy + 26 + i * ((H - hy) / 5);
    const amp = 14 + r() * 34;
    const ph = r() * Math.PI * 2;
    let d = `M -40 ${H + 40} L -40 ${baseY.toFixed(1)}`;
    for (let x = -40; x <= W + 40; x += 62) {
      const y = baseY + Math.sin((x / W) * Math.PI * (1.6 + i * 0.5) + ph) * amp;
      d += ` L ${x} ${y.toFixed(1)}`;
    }
    d += ` L ${W + 40} ${H + 40} Z`;
    out += `<path d="${d}" fill="${p.bg0}" fill-opacity="${(0.35 + i * 0.14).toFixed(
      2
    )}" stroke="${p.lineSoft}" stroke-opacity="0.4" stroke-width="1" vector-effect="non-scaling-stroke"/>`;
  }
  return `<g mask="url(#fade-${uid})">${out}</g>`;
}

function network(r: () => number, p: Palette, uid: string): string {
  const n = 26;
  const pts: { x: number; y: number; hub: boolean }[] = [];
  for (let i = 0; i < n; i++) {
    pts.push({
      x: 70 + r() * (W - 140),
      y: 70 + r() * (H - 140),
      hub: false,
    });
  }
  const hubCount = 3;
  for (let i = 0; i < hubCount; i++) {
    pts[Math.floor(r() * pts.length)]!.hub = true;
  }

  let edges = '';
  for (let i = 0; i < pts.length; i++) {
    for (let j = i + 1; j < pts.length; j++) {
      const a = pts[i]!;
      const b = pts[j]!;
      const d = Math.hypot(a.x - b.x, a.y - b.y);
      if (d > 250) continue;
      const strong = a.hub || b.hub;
      edges += `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(
        1
      )}" y2="${b.y.toFixed(1)}" stroke="${strong ? p.accent : p.line}" stroke-opacity="${
        strong ? 0.42 : 0.2
      }" stroke-width="1" vector-effect="non-scaling-stroke"/>`;
    }
  }

  let nodes = '';
  for (const pt of pts) {
    if (pt.hub) {
      nodes += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(
        1
      )}" r="26" fill="none" stroke="${p.accent}" stroke-opacity="0.5" stroke-width="1" vector-effect="non-scaling-stroke"/>`;
      nodes += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="6.5" fill="${p.accent}"/>`;
    } else {
      nodes += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="3.4" fill="${
        p.line
      }" fill-opacity="0.8"/>`;
    }
  }
  return `<g mask="url(#fade-${uid})">${edges}${nodes}</g>`;
}

function strata(r: () => number, p: Palette, uid: string): string {
  let out = '';
  let y = 0;
  let i = 0;
  const tones = [p.field, p.lineSoft, p.bg1, p.field, p.line];
  while (y < H) {
    const h = 22 + r() * 96;
    const tone = tones[i % tones.length]!;
    const isAccent = i % 6 === 4;
    out += `<rect x="-20" y="${y.toFixed(1)}" width="${W + 40}" height="${h.toFixed(1)}" fill="${
      isAccent ? p.accent : tone
    }" fill-opacity="${isAccent ? 0.3 : (0.2 + (y / H) * 0.5).toFixed(3)}"/>`;
    // hairline separator
    out += `<line x1="-20" y1="${y.toFixed(1)}" x2="${W + 20}" y2="${y.toFixed(
      1
    )}" stroke="${p.line}" stroke-opacity="0.4" stroke-width="1" vector-effect="non-scaling-stroke"/>`;
    y += h;
    i++;
  }
  // vertical core-sample marker
  const cx = W * (0.62 + r() * 0.2);
  out += `<line x1="${cx.toFixed(1)}" y1="0" x2="${cx.toFixed(
    1
  )}" y2="${H}" stroke="${p.accent}" stroke-opacity="0.8" stroke-width="1.4" vector-effect="non-scaling-stroke"/>`;
  return `<g mask="url(#fade-${uid})">${out}</g>`;
}

const RENDERERS: Record<PlateVariant, (r: () => number, p: Palette, uid: string) => string> = {
  terrain,
  graticule,
  cohort,
  horizon,
  network,
  strata,
};

export interface PlateOptions {
  variant?: PlateVariant;
  tone?: PlateTone;
  seed: string;
  /** Small mono label burned into the plate, e.g. a coordinate. */
  marker?: string;
}

/** Pick a variant deterministically when the author has no preference. */
export function pickVariant(seed: string): PlateVariant {
  const order: PlateVariant[] = ['terrain', 'graticule', 'cohort', 'horizon', 'network', 'strata'];
  return order[hash(seed) % order.length]!;
}

export function renderPlate({ variant, tone = 'navy', seed, marker }: PlateOptions): string {
  const v = variant ?? pickVariant(seed);
  const p = PALETTES[tone];
  const r = rng(seed + ':' + v);
  const uid = hash(seed + v).toString(36);

  const body = RENDERERS[v](r, p, uid);

  const markerEl = marker
    ? `<g transform="translate(48 ${H - 44})">
        <line x1="0" y1="-9" x2="26" y2="-9" stroke="${p.accent}" stroke-width="2"/>
        <text x="36" y="-4" font-family="IBM Plex Mono, ui-monospace, monospace" font-size="19" letter-spacing="3.4" fill="${p.accent}" fill-opacity="0.92">${esc(
          marker
        )}</text>
      </g>`
    : '';

  return `<svg class="plate-svg" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg" role="presentation" focusable="false" aria-hidden="true">
  <defs>
    <linearGradient id="bg-${uid}" x1="0" y1="0" x2="0.65" y2="1">
      <stop offset="0%" stop-color="${p.bg1}"/>
      <stop offset="100%" stop-color="${p.bg0}"/>
    </linearGradient>
    <radialGradient id="glow-${uid}" cx="0.32" cy="0.28" r="0.85">
      <stop offset="0%" stop-color="${p.accent}" stop-opacity="0.16"/>
      <stop offset="100%" stop-color="${p.accent}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="fadeg-${uid}" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="#fff" stop-opacity="1"/>
      <stop offset="70%" stop-color="#fff" stop-opacity="0.8"/>
      <stop offset="100%" stop-color="#fff" stop-opacity="0.45"/>
    </linearGradient>
    <mask id="fade-${uid}">
      <rect width="${W}" height="${H}" fill="url(#fadeg-${uid})"/>
    </mask>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg-${uid})"/>
  ${body}
  <rect width="${W}" height="${H}" fill="url(#glow-${uid})"/>
  ${markerEl}
</svg>`;
}
