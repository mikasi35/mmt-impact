/**
 * Presence map.
 *
 * Deliberately tile-provider-free. The style below reads a single GeoJSON file
 * we build ourselves (`npm run geo`), so there is no API key to leak, no usage
 * quota to breach, no third-party origin to allow through the CSP, and no
 * outage in someone else's service that takes the map down during a meeting.
 * For a map that shows six countries rather than street detail, that is the
 * correct trade.
 *
 * The module is dynamically imported and only initialises when the container
 * scrolls into view — MapLibre never loads on pages without a map.
 */

import 'maplibre-gl/dist/maplibre-gl.css';

export interface MapLocation {
  id: string;
  city: string;
  country: string;
  coords: [number, number];
  entity: string;
  role: string;
  primary: boolean;
  coordinateLabel: string;
  href?: string;
}

const COLOURS = {
  water: '#04101b',
  land: '#0b2235',
  landHighlight: '#16394f',
  border: '#1c465f',
  highlight: '#c99a45',
};

export async function initPresenceMap(container: HTMLElement, locations: MapLocation[]) {
  const maplibregl = (await import('maplibre-gl')).default;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const map = new maplibregl.Map({
    container,
    style: {
      version: 8,
      sources: {
        world: { type: 'geojson', data: '/geo/world.geo.json' },
      },
      layers: [
        { id: 'water', type: 'background', paint: { 'background-color': COLOURS.water } },
        {
          id: 'land',
          type: 'fill',
          source: 'world',
          paint: {
            'fill-color': ['case', ['==', ['get', 'hl'], 1], COLOURS.landHighlight, COLOURS.land],
          },
        },
        {
          id: 'land-border',
          type: 'line',
          source: 'world',
          paint: { 'line-color': COLOURS.border, 'line-width': 0.6, 'line-opacity': 0.85 },
        },
        {
          id: 'land-highlight',
          type: 'line',
          source: 'world',
          filter: ['==', ['get', 'hl'], 1],
          paint: { 'line-color': COLOURS.highlight, 'line-width': 1.3 },
        },
      ],
    },
    center: [34, 6],
    zoom: 2.4,
    minZoom: 1.2,
    maxZoom: 7,
    attributionControl: false,
    // The canvas is a visual aid; the list beside it is the accessible route.
    // Dragging stays available, but the page must never trap a scrolling user.
    scrollZoom: false,
    cooperativeGestures: true,
  });

  map.addControl(new maplibregl.NavigationControl({ showCompass: false }), 'bottom-right');
  map.addControl(
    new maplibregl.AttributionControl({
      compact: true,
      customAttribution: 'Boundaries: Natural Earth (public domain)',
    }),
    'bottom-left'
  );

  const markers = new Map<string, any>();

  map.on('load', () => {
    for (const loc of locations) {
      const el = document.createElement('button');
      el.type = 'button';
      el.className = `mkr ${loc.primary ? 'mkr--primary' : ''}`;
      el.setAttribute('aria-label', `${loc.city}, ${loc.country} — ${loc.entity}, ${loc.role}`);
      el.innerHTML = `<span class="mkr__dot"></span><span class="mkr__label">${loc.city}</span>`;

      el.addEventListener('click', () => {
        container.dispatchEvent(new CustomEvent('marker:select', { detail: loc.id }));
        map.flyTo({
          center: loc.coords,
          zoom: Math.max(map.getZoom(), 4),
          duration: reduced ? 0 : 1200,
        });
      });

      const marker = new maplibregl.Marker({ element: el }).setLngLat(loc.coords).addTo(map);
      markers.set(loc.id, marker);
    }

    container.dispatchEvent(new CustomEvent('map:ready'));
  });

  map.on('error', () => {
    container.dispatchEvent(new CustomEvent('map:error'));
  });

  return {
    focus(id: string) {
      const loc = locations.find((l) => l.id === id);
      if (!loc) return;
      map.flyTo({ center: loc.coords, zoom: 4.2, duration: reduced ? 0 : 1200 });
      markers.forEach((m, key) => {
        m.getElement().classList.toggle('is-selected', key === id);
      });
    },
    reset() {
      map.flyTo({ center: [34, 6], zoom: 2.4, duration: reduced ? 0 : 1000 });
      markers.forEach((m) => m.getElement().classList.remove('is-selected'));
    },
    destroy() {
      map.remove();
    },
  };
}
