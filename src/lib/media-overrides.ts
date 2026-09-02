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

/**
 * A second, distinct image per sector — used for a programme page's own
 * in-depth/body slot, so it doesn't just repeat PROGRAMME_IMAGE (already
 * shown in that same page's hero) a second time.
 */
export const PROGRAMME_IMAGE_SECONDARY: Record<string, string> = {
  education: '/images/what-we-do-page/education-secondary.jpg',
  'community-support': '/images/what-we-do-page/community-support-secondary.jpg',
  'women-youth': '/images/what-we-do-page/women-youth-secondary.jpg',
  livelihoods: '/images/what-we-do-page/livelihoods-secondary.jpg',
  humanitarian: '/images/what-we-do-page/humanitarian-secondary.jpg',
  consultancy: '/images/what-we-do-page/consultancy-secondary.jpg',
};

/**
 * Per-project images, keyed by content id — distinct from PROGRAMME_IMAGE so
 * a project card or project page doesn't show the same photo as every other
 * project in its sector (or the programme page it belongs to).
 */
export const PROJECT_IMAGE: Record<string, string> = {
  'community-resilience-juba': '/images/impact-page/project-community-resilience.jpg',
  'education-skills-juba': '/images/impact-page/project-education-skills.jpg',
  'institutional-strengthening': '/images/impact-page/project-institutional-strengthening.jpg',
  'livelihoods-market-linkage': '/images/impact-page/project-livelihoods-market.jpg',
  'womens-enterprise-juba': '/images/impact-page/project-womens-enterprise.jpg',
};

export const NEWS_IMAGE: Record<string, string> = {
  'programme-priorities-2026-2028': '/images/index/news-stories-section/south-sudan-blog-image.jpg',
  'governance-framework-published': '/images/index/news-stories-section/governance-blog-image.jpg',
  'partnership-supplier-registration-open':
    '/images/index/news-stories-section/partnership-blog-image.jpg',
};
