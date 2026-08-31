export interface ApproachStep {
  number: string;
  title: string;
  short: string;
  body: string;
  detail: string[];
}

export const approachIntro =
  'MMT Impact runs a defined delivery method. It exists so that a partner can see, before any commitment is made, how a programme moves from a community conversation to a measured and documented result — and who is accountable at each stage.';

export const approachSteps: ApproachStep[] = [
  {
    number: '01',
    title: 'Listen',
    short: 'We engage communities and understand local needs.',
    body: 'Every programme starts with the people it is meant to serve. We consult community leaders, women’s groups, youth groups, local authorities and existing service providers before a single activity is designed.',
    detail: [
      'Community consultation and needs assessment',
      'Stakeholder and power mapping',
      'Review of existing provision to avoid duplication',
      'Identification of who is being missed, and why',
    ],
  },
  {
    number: '02',
    title: 'Partner',
    short: 'We work with governments, UN agencies, NGOs, institutions and communities.',
    body: 'We do not deliver in isolation. Programmes are built with the ministries, agencies, international organisations and community structures that will still be there after the funding cycle ends.',
    detail: [
      'Alignment with national and sub-national priorities',
      'Coordination with UN clusters and NGO forums',
      'Formal agreements with implementing and referral partners',
      'Clear division of roles, risk and reporting',
    ],
  },
  {
    number: '03',
    title: 'Design',
    short: 'We develop evidence-based and locally appropriate solutions.',
    body: 'Programme design is written against evidence and against the operating reality — access, seasonality, security, cost and capacity — not against an ideal case.',
    detail: [
      'Theory of change and results framework',
      'Baseline data and indicator definition',
      'Risk assessment, including safeguarding and protection risk',
      'Budgeting, procurement planning and value-for-money analysis',
    ],
  },
  {
    number: '04',
    title: 'Deliver',
    short: 'We implement programmes through qualified teams and local partners.',
    body: 'Delivery runs through people who live in and understand the context, working to defined standards, defined controls and defined lines of accountability.',
    detail: [
      'Local recruitment and staff capability development',
      'Documented procurement and financial controls',
      'Safeguarding and PSEA obligations applied to all personnel',
      'Field supervision and issue escalation',
    ],
  },
  {
    number: '05',
    title: 'Measure',
    short: 'We monitor outcomes, transparency and impact.',
    body: 'Monitoring is designed in at the start, not retrofitted for a donor report. We report what happened — including what did not work.',
    detail: [
      'Routine monitoring against agreed indicators',
      'Disaggregation by sex, age and vulnerability',
      'Participant feedback and complaints mechanisms',
      'Independent evaluation where scale and funding permit',
    ],
  },
  {
    number: '06',
    title: 'Sustain',
    short: 'We focus on solutions that continue beyond the initial project.',
    body: 'A programme that collapses when the contract closes has not succeeded. Transition and ownership are planned from the design stage.',
    detail: [
      'Capacity transfer to local institutions and community structures',
      'Exit and handover planning from inception',
      'Support for local income generation and cost recovery where viable',
      'Documentation and open sharing of what was learned',
    ],
  },
];
