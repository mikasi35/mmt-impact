/**
 * MMT IMPACT — impact figures.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  EDITORIAL RULE
 *  Every figure on this site is rendered from this file. Nothing is hard-coded
 *  into a component. A figure with `value: null` renders as an em-dash and the
 *  metric is shown as "in reporting" — it is never invented, rounded up or
 *  filled in with a placeholder number.
 *
 *  `basis` is printed beneath the dashboard so a reader always knows whether a
 *  number is a reported result or a programme target. Change `basis` and the
 *  disclosure line changes site-wide.
 *
 *  Figures below are as supplied in the MMT Impact brief. Confirm and date
 *  them before publication — see CONTENT-TO-VERIFY.md.
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface Metric {
  /** null = not yet reported. Renders as an em-dash, never as a guess. */
  value: number | null;
  suffix?: string;
  label: string;
  note?: string;
  /** Sector or country this metric rolls up from, where applicable. */
  scope?: string;
}

/** How the headline figures should be read. Printed under the dashboard. */
export const impactBasis =
  'Figures reported by MMT Impact across its programme portfolio. Methodology, definitions and disaggregation are available to partners on request.';

export const impactAsAt = 'Reported position, 2026';

export const headlineMetrics: Metric[] = [
  { value: 10000, suffix: '+', label: 'People reached', note: 'Direct and indirect programme participants' },
  { value: 25, suffix: '+', label: 'Communities supported', note: 'Community units engaged through programmes' },
  { value: 1500, suffix: '+', label: 'People trained', note: 'Completed skills, vocational or professional training' },
  { value: 500, suffix: '+', label: 'Women & youth empowered', note: 'Participants in targeted empowerment pathways' },
];

/** Structural facts about the organisation — not performance claims. */
export const structuralFacts: Metric[] = [
  { value: 6, label: 'Programme areas', note: 'Education · Community · Women & Youth · Livelihoods · Humanitarian · Consultancy' },
  { value: 1, label: 'Country office', note: 'Juba, South Sudan' },
  { value: 3, label: 'Organisations in the MMT Group', note: 'MMT Care · MMT Alliance · MMT Impact' },
];

/**
 * Sector breakdown. `value: null` where the disaggregated figure has not been
 * verified for publication — the dashboard shows the sector as in reporting.
 */
export const impactBySector: Metric[] = [
  { value: null, label: 'Education & Skills Development', scope: 'education' },
  { value: null, label: 'Community Support', scope: 'community-support' },
  { value: null, label: 'Women & Youth Empowerment', scope: 'women-youth' },
  { value: null, label: 'Livelihoods & Economic Empowerment', scope: 'livelihoods' },
  { value: null, label: 'Humanitarian & Resilience', scope: 'humanitarian' },
  { value: null, label: 'Institutional Development & Consultancy', scope: 'consultancy' },
];

export interface CountryImpact {
  country: string;
  code: string;
  status: 'operational' | 'group-presence';
  peopleReached: number | null;
  communities: number | null;
  note: string;
}

export const impactByCountry: CountryImpact[] = [
  {
    country: 'South Sudan',
    code: 'SS',
    status: 'operational',
    peopleReached: 10000,
    communities: 25,
    note: 'MMT Impact country office and full programme portfolio.',
  },
];

/**
 * Programme phasing — a plan, explicitly labelled as such. This is not a
 * record of delivered results and must never be presented as one.
 */
export interface PhaseEntry {
  period: string;
  title: string;
  body: string;
}

export const programmePhasing: PhaseEntry[] = [
  {
    period: '2026',
    title: 'Establish',
    body: 'Country office consolidation in Juba, governance and policy framework adoption, community needs assessment, and first programme design cycle across education and livelihoods.',
  },
  {
    period: '2027',
    title: 'Deliver',
    body: 'Scale delivery across the six programme areas, formalise monitoring and evaluation reporting, and expand institutional partnerships with government, UN agencies and international NGOs.',
  },
  {
    period: '2028',
    title: 'Sustain',
    body: 'Transition mature programmes to community and institutional ownership, publish independent evaluation, and extend regional programming where a mandate and funding base exist.',
  },
];

/** Utility: display a metric value without ever fabricating a missing one. */
export function formatMetric(m: Metric): string {
  if (m.value === null) return '—';
  return m.value.toLocaleString('en-GB') + (m.suffix ?? '');
}
