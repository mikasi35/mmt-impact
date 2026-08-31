/**
 * MMT IMPACT — organisation-level constants.
 *
 * Everything an editor is likely to change without a developer lives here or
 * in `src/content/`. Nothing in this file is inferred: fields that have not
 * been confirmed by MMT Impact are left empty and components omit them rather
 * than render a guess. See CONTENT-TO-VERIFY.md.
 */

export const site = {
  name: 'MMT Impact',
  legalName: 'MMT Impact',
  tagline: 'Building Stronger Communities.',
  shortDescription:
    'MMT Impact is a development and humanitarian organisation working with communities, governments, development partners and international organisations to create sustainable opportunities, strengthen livelihoods and improve lives.',
  url: import.meta.env.PUBLIC_SITE_URL || 'https://www.mmtimpact.org',
  locale: 'en',
  founded: '2026',
} as const;

/** Primary operating presence. MMT Impact's own footprint only. */
export const headquarters = {
  label: 'South Sudan Country Office',
  city: 'Juba',
  country: 'South Sudan',
  countryCode: 'SS',
  /** Juba, South Sudan. Used for the geographic label device. */
  coordinates: { lat: 4.8594, lon: 31.5713 },
  coordinateLabel: '04°51′N 31°36′E',
  /** Street address not yet confirmed for publication — see CONTENT-TO-VERIFY.md */
  street: '',
  postal: '',
} as const;

export const contact = {
  general: 'info@mmtimpact.org',
  partnerships: 'partnerships@mmtimpact.org',
  programmes: 'programs@mmtimpact.org',
  southSudan: 'southsudan@mmtimpact.org',
  careers: 'careers@mmtimpact.org',
  finance: 'finance@mmtimpact.org',
  procurement: 'procurement@mmtimpact.org',
  media: 'media@mmtimpact.org',
  /** Leave empty until a published line is confirmed. */
  phone: '' as string,
} as const;

export const contactDirectory = [
  { label: 'General enquiries', email: contact.general },
  { label: 'Partnerships & funding', email: contact.partnerships },
  { label: 'Programmes', email: contact.programmes },
  { label: 'South Sudan country office', email: contact.southSudan },
  { label: 'Careers & consultancies', email: contact.careers },
  { label: 'Procurement & suppliers', email: contact.procurement },
  { label: 'Finance', email: contact.finance },
  { label: 'Media & communications', email: contact.media },
] as const;

/**
 * Social profiles. Add the live URL and the channel appears in the footer.
 * Empty entries are never rendered — no dead links.
 */
export const socials = [
  { label: 'LinkedIn', url: '' },
  { label: 'Facebook', url: '' },
  { label: 'Instagram', url: '' },
  { label: 'YouTube', url: '' },
] as const;

export const activeSocials = socials.filter((s) => s.url.length > 0);

/**
 * Forms delivery. When PUBLIC_FORM_ENDPOINT is unset the forms fall back to a
 * client-side mail handoff so nothing is silently swallowed. See README.
 */
export const formEndpoint = import.meta.env.PUBLIC_FORM_ENDPOINT || '';

export const analytics = {
  domain: import.meta.env.PUBLIC_ANALYTICS_DOMAIN || '',
  src: import.meta.env.PUBLIC_ANALYTICS_SRC || '',
} as const;

/** SEO defaults. Individual pages override. */
export const seoDefaults = {
  titleTemplate: '%s — MMT Impact',
  defaultTitle: 'MMT Impact — Building Stronger Communities',
  description: site.shortDescription,
  ogImage: '/og/mmt-impact-og.png',
} as const;
