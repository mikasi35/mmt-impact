import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * CONTENT ARCHITECTURE
 *
 * Every entity the organisation publishes is modelled here with a validated
 * schema. Two consequences that matter beyond today:
 *
 *  1. Structure over prose. A project's sector, status, dates, location and
 *     beneficiary count are FIELDS, not sentences buried in a paragraph. That
 *     is what makes the project record usable for institutional due diligence,
 *     and what makes a later CMS migration a mapping exercise rather than a
 *     rewrite.
 *
 *  2. Honesty is enforced by the type system. Unverifiable figures are
 *     `.nullable()`, not `.default(0)`. A missing beneficiary count renders as
 *     "In reporting" — the schema makes fabrication the harder path.
 *
 * Files or folders prefixed with `_` are ignored by the loader. `_examples/`
 * therefore ships templates that are not published until renamed.
 */

const PLATE_VARIANTS = ['terrain', 'graticule', 'cohort', 'horizon', 'network', 'strata'] as const;
const PLATE_TONES = ['navy', 'ochre', 'green', 'sand'] as const;

/** Shared media block: a real image when supplied, a generated plate until then. */
const media = z.object({
  src: z.string().optional(),
  alt: z.string().optional(),
  caption: z.string().optional(),
  credit: z.string().optional(),
  variant: z.enum(PLATE_VARIANTS).optional(),
  tone: z.enum(PLATE_TONES).optional(),
});

const SECTORS = [
  'education',
  'community-support',
  'women-youth',
  'livelihoods',
  'humanitarian',
  'consultancy',
] as const;

/* ---------------------------------------------------------------- PROGRAMMES */

const programmes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/programmes' }),
  schema: z.object({
    title: z.string(),
    /** Short form used in navigation and indexes. */
    shortTitle: z.string(),
    order: z.number(),
    sector: z.enum(SECTORS),
    summary: z.string(),
    /** One-line statement used on the homepage focus index. */
    statement: z.string(),
    /** The need this programme answers. Required — no programme without a why. */
    problem: z.string(),
    approach: z.string(),
    activities: z.array(z.string()).min(1),
    whoWeServe: z.array(z.string()).min(1),
    geographicFocus: z.array(z.string()).min(1),
    outcomes: z.array(z.string()).min(1),
    media: media.optional(),
    seoDescription: z.string(),
    draft: z.boolean().default(false),
  }),
});

/* ------------------------------------------------------------------ PROJECTS */

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    country: z.string(),
    location: z.string(),
    sector: z.enum(SECTORS),
    /** `in-design` and `planned` are first-class states, not embarrassments. */
    status: z.enum(['active', 'in-design', 'planned', 'completed']),
    startDate: z.coerce.date().nullable().default(null),
    endDate: z.coerce.date().nullable().default(null),
    /** null until verified for publication. Renders as "In reporting". */
    beneficiaries: z.number().nullable().default(null),
    /** Only named where the relationship exists and permission is held. */
    partners: z.array(z.string()).default([]),
    donors: z.array(z.string()).default([]),
    /** Only published where the organisation has agreed disclosure. */
    budget: z.string().nullable().default(null),
    objectives: z.array(z.string()).default([]),
    activities: z.array(z.string()).default([]),
    outcomes: z.array(z.string()).default([]),
    coordinates: z.tuple([z.number(), z.number()]).optional(),
    media: media.optional(),
    gallery: z.array(media).default([]),
    documents: z.array(z.object({ label: z.string(), file: z.string() })).default([]),
    featured: z.boolean().default(false),
    seoDescription: z.string(),
    draft: z.boolean().default(false),
  }),
});

/* ---------------------------------------------------------------------- NEWS */

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    category: z.enum(['news', 'field-story', 'event']),
    location: z.string().optional(),
    summary: z.string(),
    relatedProgramme: z.enum(SECTORS).optional(),
    relatedProject: z.string().optional(),
    author: z.string().default('MMT Impact'),
    media: media.optional(),
    /** Events only. */
    eventDate: z.coerce.date().optional(),
    eventLocation: z.string().optional(),
    featured: z.boolean().default(false),
    seoDescription: z.string(),
    draft: z.boolean().default(false),
  }),
});

/* ------------------------------------------------------------- IMPACT STORIES */

const stories = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/stories' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    location: z.string(),
    summary: z.string(),
    relatedProgramme: z.enum(SECTORS),
    relatedProject: z.string().optional(),
    /** Outcome claims attached to a story must be attributable. */
    outcome: z.string(),
    /** Consent status for any identifiable person shown or named. */
    consent: z.enum(['obtained', 'anonymised', 'not-applicable']),
    media: media.optional(),
    featured: z.boolean().default(false),
    seoDescription: z.string(),
    draft: z.boolean().default(false),
  }),
});

/* ------------------------------------------------------------------- REPORTS */

const reports = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/reports' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.enum([
      'annual-report',
      'programme-report',
      'policy',
      'research',
      'capability-statement',
      'strategic-plan',
      'financial-report',
      'publication',
    ]),
    summary: z.string(),
    /** Path under /public/documents. Empty = available on request. */
    file: z.string().default(''),
    fileSize: z.string().optional(),
    pages: z.number().optional(),
    version: z.string().optional(),
    owner: z.string().optional(),
    relatedProgramme: z.enum(SECTORS).optional(),
    seoDescription: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/* ---------------------------------------------------------------------- JOBS */

const jobs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/jobs' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['vacancy', 'consultancy', 'internship', 'volunteer']),
    department: z.string(),
    location: z.string(),
    contract: z.string(),
    posted: z.coerce.date(),
    closes: z.coerce.date().nullable().default(null),
    summary: z.string(),
    responsibilities: z.array(z.string()).default([]),
    requirements: z.array(z.string()).default([]),
    descriptionFile: z.string().default(''),
    reportsTo: z.string().optional(),
    seoDescription: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { programmes, projects, news, stories, reports, jobs };
export { SECTORS };
export type Sector = (typeof SECTORS)[number];
