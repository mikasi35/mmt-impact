/**
 * MMT GROUP — relationship model.
 *
 * ─────────────────────────────────────────────────────────────────────────
 *  LEGAL SAFETY RULE
 *  MMT Impact is presented as a MEMBER of the wider MMT Group. Nothing on
 *  this site states or implies that MMT Impact owns, controls, or inherits
 *  the revenue, headcount, contracts, certifications or delivery history of
 *  MMT Care or MMT Alliance.
 *
 *  Each entity below carries its own `capabilities` and its own `attribution`
 *  note. The `attribution` line is rendered wherever the entity appears, so
 *  the distinction travels with the content.
 * ─────────────────────────────────────────────────────────────────────────
 */

export interface GroupEntity {
  id: 'care' | 'alliance' | 'impact';
  name: string;
  descriptor: string;
  geography: string;
  locations: string[];
  capabilities: string[];
  summary: string;
  /** Rendered wherever the entity is shown. Non-negotiable. */
  attribution: string;
  accent: 'navy' | 'ochre' | 'green';
  /** External site, when one is confirmed for linking. Empty = no link. */
  url: string;
}

export const groupName = 'MMT Group';

export const groupIntro =
  'MMT Impact is part of the wider MMT Group — a group of separately constituted organisations working across care and support services, international procurement and supply, consultancy, and community development. Each organisation is distinct, with its own mandate, governance and legal identity.';

export const groupEntities: GroupEntity[] = [
  {
    id: 'care',
    name: 'MMT Care',
    descriptor: 'Care & Support Services',
    geography: 'Australia',
    locations: ['Australia'],
    capabilities: [
      'Care and support services',
      'Person-centred service delivery',
      'Workforce management',
      'Quality and compliance systems',
    ],
    summary:
      'An established Australian care and support organisation with operational experience in regulated service delivery, workforce management and quality assurance.',
    attribution:
      'MMT Care is a separate legal entity. Its operational history, contracts and certifications are its own and are not attributed to MMT Impact.',
    accent: 'navy',
    url: '',
  },
  {
    id: 'alliance',
    name: 'MMT Alliance',
    descriptor: 'Procurement · Supply · Logistics · Consultancy',
    geography: 'Global — headquartered in Kenya',
    locations: ['Kenya', 'South Sudan', 'Somalia', 'United Arab Emirates'],
    capabilities: [
      'International procurement',
      'Supply chain and logistics',
      'Consultancy and advisory',
      'Multi-market operations',
    ],
    summary:
      'An international procurement, supply and consultancy platform operating across multiple markets, headquartered in Kenya with operations spanning East Africa, the Horn and the Gulf.',
    attribution:
      'MMT Alliance is a separate legal entity. Its presence in a country does not mean MMT Impact holds an office there.',
    accent: 'ochre',
    url: '',
  },
  {
    id: 'impact',
    name: 'MMT Impact',
    descriptor: 'Development · Humanitarian · Community Impact',
    geography: 'South Sudan',
    locations: ['South Sudan'],
    capabilities: [
      'Education and skills development',
      'Community support and protection',
      'Women and youth empowerment',
      'Livelihoods and economic empowerment',
      'Humanitarian response and resilience',
      'Institutional development and consultancy',
    ],
    summary:
      'A development and humanitarian organisation working to strengthen communities through education, social support, economic empowerment, skills development and sustainable development.',
    attribution:
      'MMT Impact operates under its own governance and reports on its own results.',
    accent: 'green',
    url: '',
  },
];

/**
 * The institutional-capacity argument: what MMT Impact can legitimately draw
 * on, stated as access to expertise rather than inherited track record.
 */
export const capacityPillars = [
  {
    number: '01',
    title: 'Local presence and community mandate',
    body: 'MMT Impact operates from a country office in Juba. Programme design begins with community consultation, and delivery runs through local teams and local partners who remain accountable to the communities they serve.',
    owner: 'MMT Impact',
  },
  {
    number: '02',
    title: 'Access to procurement and supply expertise',
    body: 'Through the wider MMT Group, MMT Impact can draw on established international procurement, supply chain and logistics expertise — a decisive advantage in operating environments where the constraint is rarely funding alone.',
    owner: 'Via MMT Alliance',
  },
  {
    number: '03',
    title: 'Access to regulated service-delivery discipline',
    body: 'The Group includes an established care and support organisation operating under Australian regulatory requirements. That brings familiarity with quality frameworks, safeguarding practice, workforce compliance and audit readiness.',
    owner: 'Via MMT Care',
  },
  {
    number: '04',
    title: 'Governance, finance and operational management',
    body: 'MMT Impact applies a governance and financial-control framework proportionate to institutional donor requirements, with policies covering safeguarding, PSEA, anti-fraud, procurement and conflict of interest.',
    owner: 'MMT Impact',
  },
];

export const capacityDisclaimer =
  'MMT Care, MMT Alliance and MMT Impact are separate organisations. MMT Impact does not claim the turnover, workforce, contracts, certifications or delivery history of any other Group member as its own. Where Group expertise is drawn on for a specific engagement, the arrangement is set out in the relevant proposal or contract.';
