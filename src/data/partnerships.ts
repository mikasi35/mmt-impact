/** Partnership model, areas of expertise and registration pathways. */

export const partnershipIntro =
  'MMT Impact welcomes engagement with UN agencies, government ministries, international and national NGOs, development finance institutions, foundations, academic institutions, the private sector and community organisations.';

export interface PartnerCategory {
  number: string;
  title: string;
  body: string;
  modes: string[];
}

export const partnerCategories: PartnerCategory[] = [
  {
    number: '01',
    title: 'UN agencies & development institutions',
    body: 'Implementation partnerships, sub-grants, service contracts and consortium participation across humanitarian and development programming.',
    modes: ['Implementing partner agreements', 'Service and framework contracts', 'Consortium membership', 'Technical assessments and studies'],
  },
  {
    number: '02',
    title: 'Government ministries & public institutions',
    body: 'Alignment with national and state priorities, delivery in support of public services, and capacity development for public institutions.',
    modes: ['Memoranda of understanding', 'Joint programme delivery', 'Institutional capacity building', 'Technical advisory'],
  },
  {
    number: '03',
    title: 'International & national NGOs',
    body: 'Complementary delivery where our local presence, sectoral focus or operational reach strengthens a shared programme.',
    modes: ['Consortium and sub-award arrangements', 'Referral pathways', 'Shared assessment and monitoring', 'Localisation partnerships'],
  },
  {
    number: '04',
    title: 'Foundations & philanthropic funders',
    body: 'Multi-year programme funding for education, empowerment and livelihoods work, with reporting matched to the funder’s framework.',
    modes: ['Programme grants', 'Restricted and unrestricted funding', 'Co-designed initiatives', 'Impact reporting'],
  },
  {
    number: '05',
    title: 'Private sector',
    body: 'Skills, employment pathways, supply chain participation and corporate social investment structured around measurable community outcomes.',
    modes: ['Skills and employment programmes', 'Enterprise development', 'Corporate social investment', 'Shared-value initiatives'],
  },
  {
    number: '06',
    title: 'Community organisations',
    body: 'Community-based organisations, women’s groups, youth groups and faith-based structures as delivery partners and as the first point of accountability.',
    modes: ['Local partner agreements', 'Community-led delivery', 'Capacity development', 'Feedback and accountability mechanisms'],
  },
];

export const expertiseAreas = [
  {
    title: 'Education & skills',
    body: 'Access to education, vocational and technical training, youth skills, digital literacy, professional training and scholarship administration.',
  },
  {
    title: 'Community development',
    body: 'Community-based services, social support, disability inclusion, protection and community resilience.',
  },
  {
    title: 'Livelihoods',
    body: 'Small business development, agriculture, market access, financial literacy and employment pathways.',
  },
  {
    title: 'Empowerment',
    body: 'Women’s economic empowerment, youth development, entrepreneurship and leadership.',
  },
  {
    title: 'Capacity building',
    body: 'Organisational development, training, project management, monitoring and evaluation, research and advisory services.',
  },
  {
    title: 'Humanitarian response',
    body: 'Emergency response, vulnerability support, recovery programming and disaster preparedness.',
  },
  {
    title: 'Consultancy',
    body: 'Assessments, evaluations, feasibility studies, institutional reviews and technical advisory work.',
  },
];

export const partnershipTypes = [
  'Implementing partnership',
  'Funding or grant',
  'Consortium participation',
  'Service or framework contract',
  'Technical collaboration',
  'Government or public institution partnership',
  'Corporate or private sector partnership',
  'Research or academic collaboration',
  'Supplier or vendor',
  'Other',
];

export const supplierCategories = [
  'Goods — general supply',
  'Goods — education and training materials',
  'Goods — food and nutrition',
  'Goods — shelter, WASH and non-food items',
  'Goods — medical and health supplies',
  'Goods — ICT and equipment',
  'Services — logistics and transport',
  'Services — construction and rehabilitation',
  'Services — printing, media and communications',
  'Services — training and facilitation',
  'Services — professional and financial',
  'Other',
];

export const consultantDisciplines = [
  'Monitoring, evaluation and learning',
  'Programme design and proposal development',
  'Education and skills',
  'Livelihoods and economic development',
  'Gender, protection and inclusion',
  'Humanitarian response and preparedness',
  'Research and assessment',
  'Organisational development and training',
  'Finance, audit and compliance',
  'Safeguarding and PSEA',
  'Other',
];

/**
 * OPPORTUNITIES
 * Published only when live. An empty array renders the designed empty state —
 * never a fabricated tender.
 */
export interface Opportunity {
  reference: string;
  title: string;
  type: 'RFP' | 'EOI' | 'RFQ' | 'Consultancy' | 'Partnership';
  location: string;
  published: string;
  closes: string;
  summary: string;
  file?: string;
}

export const openOpportunities: Opportunity[] = [];

export const opportunitiesNote =
  'Requests for proposals, expressions of interest, consultancy assignments and partnership calls are published on this page when open. Register as a supplier or consultant to be notified directly when an opportunity matches your profile.';
