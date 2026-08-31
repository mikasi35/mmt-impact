/** Mission, vision, values, governance and leadership structure. */

export const mission =
  'To strengthen communities and create sustainable opportunities through education, empowerment, social support, livelihoods and inclusive development.';

export const vision = 'A world where every community has the opportunity to thrive.';

export const positioning =
  'MMT Impact is a development and humanitarian organisation focused on creating practical, sustainable solutions for communities and vulnerable populations.';

export interface Value {
  number: string;
  name: string;
  statement: string;
  body: string;
}

export const values: Value[] = [
  {
    number: '01',
    name: 'Integrity',
    statement: 'We do what we said we would do, and we report it accurately.',
    body: 'Funds are accounted for. Results are reported as they are. Where a programme underperforms, that is what the report says. Integrity is a control system, not a sentiment.',
  },
  {
    number: '02',
    name: 'Impact',
    statement: 'We measure change, not activity.',
    body: 'Counting workshops is not evidence. We define what should change for a participant, set indicators before we begin, and hold ourselves to the outcome rather than the output.',
  },
  {
    number: '03',
    name: 'Inclusion',
    statement: 'The people most often left out are the reason the programme exists.',
    body: 'Women, young people, people with disabilities and displaced and host communities are designed into programmes from the start — through access, participation and decision-making, not as a reporting category.',
  },
  {
    number: '04',
    name: 'Partnership',
    statement: 'We work through institutions that will outlast us.',
    body: 'Government, UN agencies, international and national NGOs and community structures are partners in delivery. We are one contributor to a system, and we are explicit about which part we are accountable for.',
  },
  {
    number: '05',
    name: 'Sustainability',
    statement: 'We design for the day the funding ends.',
    body: 'Handover, local ownership and cost realism are part of programme design, not an afterthought at closure. The measure of a programme is what remains eighteen months later.',
  },
];

/**
 * LEADERSHIP
 *
 * We do not publish names or biographies that have not been confirmed by the
 * individual. The structure below sets out the accountable roles; profiles are
 * published as each appointment is confirmed. See CONTENT-TO-VERIFY.md.
 */
export interface RoleSlot {
  role: string;
  remit: string;
  reportsTo: string;
  /** Populate `name` and `bio` when confirmed; the card then renders a person. */
  name?: string;
  bio?: string;
  location: string;
}

export const executiveRoles: RoleSlot[] = [
  {
    role: 'Executive Director',
    remit: 'Overall leadership, strategy, institutional representation and accountability to the Board.',
    reportsTo: 'Board of Directors',
    location: 'Juba, South Sudan',
  },
  {
    role: 'Country Director — South Sudan',
    remit: 'Country programme leadership, government and partner relations, security and duty of care.',
    reportsTo: 'Executive Director',
    location: 'Juba, South Sudan',
  },
  {
    role: 'Director of Programmes',
    remit: 'Programme design and quality, technical standards, and delivery across the six programme areas.',
    reportsTo: 'Executive Director',
    location: 'Juba, South Sudan',
  },
  {
    role: 'Director of Finance & Operations',
    remit: 'Financial management, grant compliance, procurement, logistics, HR and administration.',
    reportsTo: 'Executive Director',
    location: 'Juba, South Sudan',
  },
  {
    role: 'Head of Monitoring, Evaluation & Learning',
    remit: 'Results frameworks, data quality, evaluation, reporting and organisational learning.',
    reportsTo: 'Director of Programmes',
    location: 'Juba, South Sudan',
  },
  {
    role: 'Safeguarding & PSEA Focal Point',
    remit: 'Safeguarding policy, PSEA obligations, training, case handling and independent reporting to the Board.',
    reportsTo: 'Board of Directors (direct reporting line)',
    location: 'Juba, South Sudan',
  },
];

export const leadershipNote =
  'MMT Impact publishes leadership profiles only once an appointment is confirmed and the individual has consented to publication. The roles and reporting lines above describe the accountable structure the organisation operates under.';

/** GOVERNANCE ------------------------------------------------------------- */

export const governanceBodies = [
  {
    name: 'Board of Directors',
    remit: 'Strategic direction, appointment and oversight of the Executive Director, approval of budgets and annual accounts, risk appetite, and ultimate accountability for safeguarding.',
    cadence: 'Meets quarterly',
  },
  {
    name: 'Finance, Audit & Risk Committee',
    remit: 'Financial oversight, internal controls, external audit, fraud and corruption risk, and the organisational risk register.',
    cadence: 'Meets quarterly, reports to the Board',
  },
  {
    name: 'Programme & Safeguarding Committee',
    remit: 'Programme quality, evaluation findings, safeguarding and PSEA case oversight, and beneficiary feedback and complaints.',
    cadence: 'Meets quarterly, reports to the Board',
  },
  {
    name: 'Senior Management Team',
    remit: 'Day-to-day operational management, delivery performance, staff welfare and duty of care, and implementation of Board decisions.',
    cadence: 'Meets monthly',
  },
];

export interface PolicyItem {
  name: string;
  summary: string;
  category: 'Safeguarding' | 'Financial integrity' | 'Operations' | 'People' | 'Data';
  /** Path under /documents once the signed PDF is published. Empty = on request. */
  file: string;
}

export const policies: PolicyItem[] = [
  {
    name: 'Safeguarding Policy',
    summary: 'Protection of adults and children who come into contact with MMT Impact, including reporting duties, investigation procedure and disciplinary consequences.',
    category: 'Safeguarding',
    file: '',
  },
  {
    name: 'Child Protection Policy',
    summary: 'Specific obligations relating to children, including consent for photography, information handling and contact standards.',
    category: 'Safeguarding',
    file: '',
  },
  {
    name: 'PSEA Policy',
    summary: 'Protection from Sexual Exploitation and Abuse. Zero-tolerance standard applied to all personnel, partners, contractors and volunteers.',
    category: 'Safeguarding',
    file: '',
  },
  {
    name: 'Code of Conduct',
    summary: 'Standards of behaviour required of all personnel and representatives, including conflict of interest and acceptance of gifts.',
    category: 'People',
    file: '',
  },
  {
    name: 'Anti-Fraud, Bribery & Corruption Policy',
    summary: 'Prohibited conduct, controls, due diligence on partners and suppliers, and mandatory reporting of suspected fraud.',
    category: 'Financial integrity',
    file: '',
  },
  {
    name: 'Whistleblowing Policy',
    summary: 'Confidential reporting channels for staff, partners and community members, with protection against retaliation.',
    category: 'Financial integrity',
    file: '',
  },
  {
    name: 'Conflict of Interest Policy',
    summary: 'Declaration, registration and management of personal, financial and organisational conflicts, including within the wider MMT Group.',
    category: 'Financial integrity',
    file: '',
  },
  {
    name: 'Procurement Policy',
    summary: 'Competitive procurement thresholds, segregation of duties, supplier due diligence, and documentation requirements.',
    category: 'Operations',
    file: '',
  },
  {
    name: 'Financial Management & Controls',
    summary: 'Delegated authorities, banking and cash handling, grant accounting, and audit trail requirements.',
    category: 'Financial integrity',
    file: '',
  },
  {
    name: 'Data Protection & Privacy Policy',
    summary: 'How personal data — including beneficiary and applicant data — is collected, stored, retained and destroyed.',
    category: 'Data',
    file: '',
  },
  {
    name: 'Health, Safety & Security Policy',
    summary: 'Duty of care to personnel, security risk management, travel and incident procedures.',
    category: 'Operations',
    file: '',
  },
  {
    name: 'Accountability to Affected Populations',
    summary: 'Community information, participation, feedback and complaints mechanisms, and how feedback changes programming.',
    category: 'Safeguarding',
    file: '',
  },
];

export const transparencyNote =
  'MMT Impact publishes its governance framework in full. Signed policy documents and audited financial statements are released as each reporting cycle completes, and are available to institutional partners on request during due diligence in the interim.';
