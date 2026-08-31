export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export interface NavGroup {
  label: string;
  href: string;
  /** Short line shown at the head of the mega panel. */
  intro?: string;
  columns?: { heading?: string; links: NavLink[] }[];
  /** Optional promoted item shown in the panel's right rail. */
  feature?: { eyebrow: string; title: string; body: string; href: string; cta: string };
}

export const primaryNav: NavGroup[] = [
  {
    label: 'Who We Are',
    href: '/who-we-are',
    intro:
      'A development and humanitarian organisation built on local presence, institutional discipline and long-term partnership.',
    columns: [
      {
        heading: 'The organisation',
        links: [
          { label: 'About MMT Impact', href: '/who-we-are', description: 'Our story and mandate' },
          { label: 'Mission & Vision', href: '/who-we-are/mission', description: 'What we exist to do' },
          { label: 'Our Values', href: '/who-we-are/values', description: 'Five commitments' },
          { label: 'How We Work', href: '/who-we-are/approach', description: 'Our six-stage method' },
        ],
      },
      {
        heading: 'Governance',
        links: [
          { label: 'Leadership', href: '/who-we-are/leadership', description: 'Executive and country team' },
          { label: 'Governance', href: '/who-we-are/governance', description: 'Board, oversight, controls' },
          { label: 'Transparency & Accountability', href: '/transparency', description: 'Policies and safeguards' },
          { label: 'Institutional Capacity', href: '/institutional-capacity', description: 'What sits behind delivery' },
        ],
      },
      {
        heading: 'The wider group',
        links: [
          { label: 'MMT Group', href: '/who-we-are/mmt-group', description: 'Care · Alliance · Impact' },
        ],
      },
    ],
    feature: {
      eyebrow: 'Due diligence',
      title: 'Organisational Profile',
      body: 'Our full institutional profile, formatted for submission and download.',
      href: '/resources/organisational-profile',
      cta: 'Open the profile',
    },
  },
  {
    label: 'What We Do',
    href: '/what-we-do',
    intro: 'Six programme areas, delivered through local teams and institutional partnerships.',
    columns: [
      {
        heading: 'Programme areas',
        links: [
          { label: 'Education & Skills Development', href: '/what-we-do/education' },
          { label: 'Community Support', href: '/what-we-do/community-support' },
          { label: 'Women & Youth Empowerment', href: '/what-we-do/women-youth' },
        ],
      },
      {
        heading: ' ',
        links: [
          { label: 'Livelihoods & Economic Empowerment', href: '/what-we-do/livelihoods' },
          { label: 'Humanitarian & Resilience', href: '/what-we-do/humanitarian' },
          { label: 'Institutional Development & Consultancy', href: '/what-we-do/consultancy' },
        ],
      },
      {
        heading: 'Delivery',
        links: [
          { label: 'All programmes', href: '/what-we-do' },
          { label: 'Projects', href: '/impact/projects' },
          { label: 'How We Work', href: '/who-we-are/approach' },
        ],
      },
    ],
  },
  {
    label: 'Where We Work',
    href: '/where-we-work',
    intro: 'South Sudan is our operating base. The wider MMT Group extends the reach behind it.',
    columns: [
      {
        heading: 'MMT Impact',
        links: [
          { label: 'South Sudan', href: '/where-we-work/south-sudan', description: 'Country office — Juba' },
          { label: 'Where We Work', href: '/where-we-work', description: 'Interactive presence map' },
        ],
      },
      {
        heading: 'MMT Group presence',
        links: [
          { label: 'Global Group Presence', href: '/where-we-work#group-presence' },
          { label: 'MMT Group', href: '/who-we-are/mmt-group' },
        ],
      },
    ],
  },
  {
    label: 'Our Impact',
    href: '/impact',
    intro: 'Measured, documented and open to scrutiny.',
    columns: [
      {
        heading: 'Evidence',
        links: [
          { label: 'Impact Dashboard', href: '/impact', description: 'Reach, sector and geography' },
          { label: 'Projects', href: '/impact/projects', description: 'Structured project record' },
          { label: 'Impact Stories', href: '/impact/stories', description: 'Outcomes from the field' },
        ],
      },
      {
        heading: 'Reporting',
        links: [
          { label: 'Reports & Publications', href: '/resources', description: 'Our documentation room' },
          { label: 'Transparency', href: '/transparency', description: 'Policies and accountability' },
        ],
      },
    ],
  },
  {
    label: 'Partners & Opportunities',
    href: '/partnerships',
    intro: 'Working with UN agencies, governments, INGOs, foundations and the private sector.',
    columns: [
      {
        heading: 'Partner with us',
        links: [
          { label: 'Partner With Us', href: '/partnerships', description: 'How partnerships work' },
          { label: 'UN & Development Partners', href: '/partnerships#un-development' },
          { label: 'Areas of Expertise', href: '/partnerships#expertise' },
        ],
      },
      {
        heading: 'Register',
        links: [
          { label: 'Supplier Registration', href: '/partnerships/supplier-registration' },
          { label: 'Consultant Registration', href: '/partnerships/consultant-registration' },
          { label: 'Current Opportunities', href: '/partnerships/current-opportunities' },
        ],
      },
    ],
    feature: {
      eyebrow: 'Open',
      title: 'Institutional Capacity',
      body: 'What stands behind MMT Impact — locally, and across the wider MMT Group.',
      href: '/institutional-capacity',
      cta: 'Read the assessment',
    },
  },
  {
    label: 'News & Stories',
    href: '/news',
    intro: 'Announcements, field reporting and documented outcomes.',
    columns: [
      {
        heading: 'Newsroom',
        links: [
          { label: 'All News & Stories', href: '/news' },
          { label: 'News', href: '/news?category=news' },
          { label: 'Field Stories', href: '/news?category=field-story' },
          { label: 'Impact Stories', href: '/impact/stories' },
        ],
      },
      {
        heading: 'Media',
        links: [
          { label: 'Media enquiries', href: '/contact#media' },
          { label: 'Resources', href: '/resources' },
        ],
      },
    ],
  },
  {
    label: 'Get Involved',
    href: '/get-involved',
    intro: 'Four ways to work with MMT Impact.',
    columns: [
      {
        heading: 'Pathways',
        links: [
          { label: 'Partner', href: '/get-involved/partner', description: 'Institutions and funders' },
          { label: 'Support Our Work', href: '/get-involved/support', description: 'Fund a programme' },
          { label: 'Volunteer', href: '/get-involved/volunteer', description: 'Give time and expertise' },
          { label: 'Careers', href: '/careers', description: 'Roles and consultancies' },
        ],
      },
    ],
  },
];

/** Compact links that sit in the utility row above the main navigation. */
export const utilityNav: NavLink[] = [
  { label: 'Resources', href: '/resources' },
  { label: 'Transparency', href: '/transparency' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export const footerNav: { heading: string; links: NavLink[] }[] = [
  {
    heading: 'Who We Are',
    links: [
      { label: 'About MMT Impact', href: '/who-we-are' },
      { label: 'Mission & Vision', href: '/who-we-are/mission' },
      { label: 'Our Values', href: '/who-we-are/values' },
      { label: 'How We Work', href: '/who-we-are/approach' },
      { label: 'Leadership', href: '/who-we-are/leadership' },
      { label: 'Governance', href: '/who-we-are/governance' },
    ],
  },
  {
    heading: 'What We Do',
    links: [
      { label: 'Education & Skills', href: '/what-we-do/education' },
      { label: 'Community Support', href: '/what-we-do/community-support' },
      { label: 'Women & Youth', href: '/what-we-do/women-youth' },
      { label: 'Livelihoods', href: '/what-we-do/livelihoods' },
      { label: 'Humanitarian & Resilience', href: '/what-we-do/humanitarian' },
      { label: 'Consultancy', href: '/what-we-do/consultancy' },
    ],
  },
  {
    heading: 'Our Presence',
    links: [
      { label: 'South Sudan', href: '/where-we-work/south-sudan' },
      { label: 'Where We Work', href: '/where-we-work' },
      { label: 'MMT Group', href: '/who-we-are/mmt-group' },
      { label: 'Institutional Capacity', href: '/institutional-capacity' },
    ],
  },
  {
    heading: 'Evidence',
    links: [
      { label: 'Impact Dashboard', href: '/impact' },
      { label: 'Projects', href: '/impact/projects' },
      { label: 'Impact Stories', href: '/impact/stories' },
      { label: 'Reports & Publications', href: '/resources' },
      { label: 'Transparency', href: '/transparency' },
      { label: 'Organisational Profile', href: '/resources/organisational-profile' },
    ],
  },
  {
    heading: 'Get Involved',
    links: [
      { label: 'Partner With Us', href: '/get-involved/partner' },
      { label: 'Support Our Work', href: '/get-involved/support' },
      { label: 'Volunteer', href: '/get-involved/volunteer' },
      { label: 'Supplier Registration', href: '/partnerships/supplier-registration' },
      { label: 'Consultant Registration', href: '/partnerships/consultant-registration' },
      { label: 'Careers', href: '/careers' },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: 'Privacy Notice', href: '/legal/privacy' },
  { label: 'Terms of Use', href: '/legal/terms' },
  { label: 'Cookies', href: '/legal/cookies' },
  { label: 'Safeguarding & PSEA', href: '/transparency#safeguarding' },
  { label: 'Report a concern', href: '/transparency#whistleblowing' },
];
