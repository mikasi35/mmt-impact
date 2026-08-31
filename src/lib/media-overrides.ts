/**
 * Content-id → real photograph overrides.
 *
 * The plate system (`lib/plates.ts`) is the default for every media slot on
 * the site; these maps are the exception list of slots that now have real,
 * consented photography dropped into `public/images/`. Centralised here so
 * the same photo shows wherever that programme or article appears, rather
 * than being wired into one component and forgotten in the next.
 *
 * Add to these maps as more photography lands — nothing else needs to change.
 */

export const PROGRAMME_IMAGE: Record<string, string> = {
  education: '/images/index/what-we-do-section/education.jpg',
  'community-support': '/images/index/what-we-do-section/community-support.jpg',
  'women-youth': '/images/index/what-we-do-section/women-youth.jpg',
  livelihoods: '/images/index/what-we-do-section/livelihood.jpg',
  humanitarian: '/images/index/what-we-do-section/humanitary.jpg',
  consultancy: '/images/index/what-we-do-section/consultancy.jpg',
};

export const NEWS_IMAGE: Record<string, string> = {
  'programme-priorities-2026-2028': '/images/index/news-stories-section/south-sudan-blog-image.jpg',
  'governance-framework-published': '/images/index/news-stories-section/governance-blog-image.jpg',
  'partnership-supplier-registration-open':
    '/images/index/news-stories-section/partnership-blog-image.jpg',
};
