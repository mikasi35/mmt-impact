/**
 * Geographic presence.
 *
 * `entity` records WHICH organisation is present. MMT Impact's own footprint
 * is South Sudan only; every other pin is explicitly attributed to another
 * MMT Group member so the map can never be read as an MMT Impact office list.
 */

export interface PresenceLocation {
  id: string;
  country: string;
  code: string;
  city: string;
  /** [lon, lat] — GeoJSON order. */
  coords: [number, number];
  coordinateLabel: string;
  entity: 'MMT Impact' | 'MMT Alliance' | 'MMT Care';
  role: string;
  detail: string;
  href?: string;
  /** MMT Impact's own presence gets primary visual weight. */
  primary: boolean;
}

export const presence: PresenceLocation[] = [
  {
    id: 'ss-juba',
    country: 'South Sudan',
    code: 'SS',
    city: 'Juba',
    coords: [31.5713, 4.8594],
    coordinateLabel: '04°51′N 31°36′E',
    entity: 'MMT Impact',
    role: 'Country Office',
    detail:
      'MMT Impact’s operating base and the centre of its programme portfolio: education and skills, community support, women and youth empowerment, livelihoods, humanitarian response and institutional development.',
    href: '/where-we-work/south-sudan',
    primary: true,
  },
  {
    id: 'ke-nairobi',
    country: 'Kenya',
    code: 'KE',
    city: 'Nairobi',
    coords: [36.8219, -1.2921],
    coordinateLabel: '01°17′S 36°49′E',
    entity: 'MMT Alliance',
    role: 'Group Headquarters',
    detail:
      'MMT Alliance headquarters. Procurement, supply and consultancy operations for the wider region. MMT Impact does not hold an office in Kenya.',
    primary: false,
  },
  {
    id: 'ss-alliance',
    country: 'South Sudan',
    code: 'SS',
    city: 'Juba',
    coords: [31.6013, 4.8894],
    coordinateLabel: '04°53′N 31°36′E',
    entity: 'MMT Alliance',
    role: 'Operations',
    detail:
      'MMT Alliance procurement and supply operations in South Sudan, alongside MMT Impact’s development and humanitarian programming.',
    primary: false,
  },
  {
    id: 'so-mogadishu',
    country: 'Somalia',
    code: 'SO',
    city: 'Mogadishu',
    coords: [45.3182, 2.0469],
    coordinateLabel: '02°02′N 45°19′E',
    entity: 'MMT Alliance',
    role: 'Operations',
    detail:
      'MMT Alliance operations in Somalia. MMT Impact does not hold an office in Somalia.',
    primary: false,
  },
  {
    id: 'ae-dubai',
    country: 'United Arab Emirates',
    code: 'AE',
    city: 'Dubai',
    coords: [55.2708, 25.2048],
    coordinateLabel: '25°12′N 55°16′E',
    entity: 'MMT Alliance',
    role: 'Operations',
    detail:
      'MMT Alliance operations in the United Arab Emirates, supporting international sourcing and logistics. MMT Impact does not hold an office in the UAE.',
    primary: false,
  },
  {
    id: 'au-care',
    country: 'Australia',
    code: 'AU',
    city: 'Australia',
    coords: [149.1287, -35.2809],
    coordinateLabel: '35°17′S 149°08′E',
    entity: 'MMT Care',
    role: 'Care & Support Services',
    detail:
      'MMT Care delivers care and support services in Australia. MMT Impact does not operate in Australia.',
    primary: false,
  },
];

export const impactPresence = presence.filter((p) => p.entity === 'MMT Impact');
export const groupPresence = presence.filter((p) => p.entity !== 'MMT Impact');

export const mapDisclosure =
  'This map shows the presence of MMT Group organisations. MMT Impact’s own operating presence is South Sudan. Locations attributed to MMT Alliance or MMT Care are the presence of those organisations and do not indicate an MMT Impact office.';

/** ISO A3 codes used to highlight countries on the GeoJSON basemap. */
export const highlightedISO3: Record<string, 'impact' | 'group'> = {
  SSD: 'impact',
  KEN: 'group',
  SOM: 'group',
  ARE: 'group',
  AUS: 'group',
};
