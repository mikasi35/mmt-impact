import { site, seoDefaults, headquarters, contact } from '@data/site';

export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile';
  /** Suppress from search engines (thank-you pages, print views). */
  noindex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
}

export function buildTitle(title: string): string {
  if (!title || title === site.name) return seoDefaults.defaultTitle;
  return seoDefaults.titleTemplate.replace('%s', title);
}

export function absoluteUrl(path: string, origin = site.url): string {
  if (/^https?:\/\//.test(path)) return path;
  return new URL(path, origin.endsWith('/') ? origin : origin + '/').toString();
}

/** schema.org Organization / NGO. Only asserts facts held in `src/data`. */
export function organisationSchema() {
  const emails = [contact.general, contact.partnerships, contact.programmes];
  return {
    '@context': 'https://schema.org',
    '@type': 'NGO',
    '@id': absoluteUrl('/#organisation'),
    name: site.name,
    alternateName: 'MMT Impact — Building Stronger Communities',
    url: site.url,
    slogan: site.tagline,
    description: site.shortDescription,
    email: contact.general,
    foundingDate: site.founded,
    areaServed: { '@type': 'Country', name: 'South Sudan' },
    address: {
      '@type': 'PostalAddress',
      addressLocality: headquarters.city,
      addressCountry: 'SS',
    },
    contactPoint: emails.map((email, i) => ({
      '@type': 'ContactPoint',
      email,
      contactType: ['general enquiries', 'partnerships', 'programmes'][i],
      availableLanguage: ['English'],
    })),
    memberOf: {
      '@type': 'Organization',
      name: 'MMT Group',
      description:
        'A group of separately constituted organisations working across care and support services, procurement and supply, consultancy, and community development.',
    },
    knowsAbout: [
      'International development',
      'Humanitarian response',
      'Education and skills development',
      'Livelihoods and economic empowerment',
      'Women and youth empowerment',
      'Community development',
      'Monitoring and evaluation',
    ],
  };
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': absoluteUrl('/#website'),
    url: site.url,
    name: site.name,
    description: site.shortDescription,
    inLanguage: 'en',
    publisher: { '@id': absoluteUrl('/#organisation') },
  };
}

export interface Crumb {
  label: string;
  href: string;
}

export function breadcrumbSchema(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.label,
      item: absoluteUrl(c.href),
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  published: Date;
  updated?: Date;
  section?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: absoluteUrl(opts.url),
    ...(opts.image ? { image: [absoluteUrl(opts.image)] } : {}),
    datePublished: opts.published.toISOString(),
    dateModified: (opts.updated ?? opts.published).toISOString(),
    ...(opts.section ? { articleSection: opts.section } : {}),
    publisher: { '@id': absoluteUrl('/#organisation') },
    author: { '@type': 'Organization', name: site.name },
  };
}

export function jobPostingSchema(opts: {
  title: string;
  description: string;
  posted: Date;
  closes?: Date;
  location: string;
  employmentType: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'JobPosting',
    title: opts.title,
    description: opts.description,
    datePosted: opts.posted.toISOString(),
    ...(opts.closes ? { validThrough: opts.closes.toISOString() } : {}),
    employmentType: opts.employmentType,
    hiringOrganization: { '@id': absoluteUrl('/#organisation') },
    jobLocation: {
      '@type': 'Place',
      address: { '@type': 'PostalAddress', addressLocality: opts.location, addressCountry: 'SS' },
    },
  };
}
