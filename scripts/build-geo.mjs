/**
 * Builds the map's basemap data.
 *
 * The presence map deliberately uses NO tile provider. There is no API key, no
 * third-party request at runtime, no usage quota and nothing extra to allow in
 * the CSP — the basemap is a GeoJSON file we ship. That is the right trade for
 * an institutional site whose map shows six countries, not street detail.
 *
 * Run: npm run geo
 */
import { feature } from 'topojson-client';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const topoPath = require.resolve('world-atlas/countries-110m.json');
const topo = JSON.parse(await readFile(topoPath, 'utf8'));
const geo = feature(topo, topo.objects.countries);

/** Numeric ISO 3166-1 → alpha-3, for the countries we highlight. */
const ISO_N3_TO_A3 = {
  728: 'SSD', // South Sudan
  404: 'KEN', // Kenya
  706: 'SOM', // Somalia
  784: 'ARE', // United Arab Emirates
  36: 'AUS', // Australia
};

let matched = 0;
for (const f of geo.features) {
  const a3 = ISO_N3_TO_A3[Number(f.id)];
  f.properties = f.properties || {};
  f.properties.iso3 = a3 ?? '';
  f.properties.hl = a3 ? 1 : 0;
  if (a3) matched++;
}

// Trim coordinate precision: 3 decimals is ~110m, far beyond what a country
// fill at this zoom can resolve, and it roughly halves the payload.
const round = (v) =>
  Array.isArray(v) ? v.map(round) : typeof v === 'number' ? Math.round(v * 1000) / 1000 : v;
for (const f of geo.features) f.geometry.coordinates = round(f.geometry.coordinates);

await mkdir(join(root, 'public/geo'), { recursive: true });
const out = join(root, 'public/geo/world.geo.json');
const json = JSON.stringify(geo);
await writeFile(out, json, 'utf8');

console.log(
  `world.geo.json — ${geo.features.length} features, ${matched}/5 highlight countries matched, ${(
    json.length / 1024
  ).toFixed(0)} kB`
);
