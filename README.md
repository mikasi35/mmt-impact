# MMT Impact

**Building Stronger Communities.**

The institutional website for MMT Impact — a development and humanitarian
organisation operating in South Sudan and a member of the wider MMT Group.

Built to be credible under UN, government, INGO and foundation due diligence:
47 pages, structured content, a published governance framework, an impact
dashboard that states the basis of every figure, and a printable organisational
profile.

---

## Quick start

```bash
npm install
npm run dev          # http://localhost:4321
```

```bash
npm run build        # type-check + build to dist/
npm run build:fast   # build without type-checking
npm run preview      # serve the production build locally
npm run check        # Astro + TypeScript diagnostics
npm run geo          # regenerate the map basemap (rarely needed)
```

**Before anything else, read [`CONTENT-TO-VERIFY.md`](./CONTENT-TO-VERIFY.md).**
It lists every figure and statement that MMT Impact must confirm before the site
goes live.

---

## Stack

| Concern | Choice | Why |
|---|---|---|
| Framework | **Astro 5** | Content-driven, HTML-first, near-zero JS by default. |
| Language | **TypeScript** (strict) | Content schemas are type-checked at build. |
| Styling | **Tailwind 4** + design tokens | Tokens in CSS, not a config file. |
| Animation | **GSAP + ScrollTrigger** | Dynamically imported, only on pages that need it. |
| Map | **MapLibre GL** | Keyless — see below. |
| Images | Central `<Plate>` component | Generated brand plates until photography lands. |
| Deploy | Static — Vercel / Netlify / Cloudflare Pages | Configs included. |

**Total JavaScript on a content page: ~4 kB gzipped.** GSAP (~19 kB gz) loads
only where a counter, parallax, pinned timeline or hero sequence exists.
MapLibre loads only on `/where-we-work`, and only once the map scrolls into view.

---

## Project structure

```
src/
├── components/
│   ├── forms/          EnquiryForm (6 variants), Field
│   ├── geography/       PresenceMap + MapLibre island
│   ├── hero/            HomeHero
│   ├── impact/          ImpactMetric, ImpactSection
│   ├── layout/          SiteFooter, Breadcrumbs
│   ├── media/           Plate — the one image component
│   ├── navigation/      SiteHeader (mega nav + mobile)
│   ├── programmes/      ProgrammeIndex
│   ├── projects/        ProjectCard, FeaturedProject
│   ├── sections/        Reusable page sections
│   ├── typography/      SectionLabel, DisplayHeading
│   └── ui/              Logo, EmptyState
├── content/             Markdown, schema-validated
│   ├── programmes/      6 programme areas
│   ├── projects/        5 projects
│   ├── news/            3 articles
│   ├── reports/         4 documents
│   ├── stories/         empty + _TEMPLATE.md
│   └── jobs/            empty + _TEMPLATE.md
├── data/                Everything an editor changes without a developer
├── layouts/             BaseLayout, PageLayout
├── lib/
│   ├── animations/      reveal, hero, counters, parallax, timeline
│   ├── plates.ts        Deterministic generative artwork
│   ├── seo.ts           Metadata + schema.org
│   └── utils.ts
├── pages/               47 routes
└── styles/              tokens · typography · utilities · print · global
```

---

## Editing content

### Without touching a component

| To change | Edit |
|---|---|
| Impact figures and their basis | `src/data/impact.ts` |
| Mission, vision, values, governance, policies, leadership | `src/data/organisation.ts` |
| Contact details, emails, socials, domain | `src/data/site.ts` |
| MMT Group entities and attribution wording | `src/data/group.ts` |
| Map pins and presence | `src/data/countries.ts` |
| Navigation and footer | `src/data/navigation.ts` |
| Partner categories, expertise, open opportunities | `src/data/partnerships.ts` |
| The six-stage delivery method | `src/data/approach.ts` |

### Adding a project, article, vacancy or report

Drop a Markdown file into the matching `src/content/` folder. The schema in
`src/content.config.ts` validates it at build time — a missing required field
fails the build rather than shipping a broken page.

Indexes, filters, related lists, the RSS feed and the organisational profile all
pick it up automatically.

`_TEMPLATE.md` files in `stories/` and `jobs/` are working templates. Files and
folders prefixed with `_` are ignored by the loader; rename to publish.

### Honesty is enforced by the schema

Unverifiable numbers are `.nullable()`, never `.default(0)`:

```ts
beneficiaries: z.number().nullable().default(null),   // renders "In reporting"
partners: z.array(z.string()).default([]),            // renders "None currently named"
```

Set an impact metric's `value` to `null` and it renders an em-dash with an "in
reporting" label. **Fabrication is deliberately the harder path.**

---

## Design system

Full rationale in [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md). In short:

- **Surfaces, not props.** A section picks `.surface-dark`, `.surface-sand`,
  `.surface-paper`, `.surface-light` or `.surface-forest`; every component below
  reads semantic tokens (`--ink`, `--surface`, `--rule`, `--accent`) and adapts.
  No theme prop-drilling anywhere.
- **Rules, not cards.** Hairline borders and an editorial grid. No shadowed
  rounded card grids.
- **Three typefaces, one job each.** Instrument Serif (display), IBM Plex Sans
  (text), IBM Plex Mono (the metadata voice — indices, coordinates, statuses).
- **Gold is an accent.** Never a surface, never a large field.

---

## Images

Every image slot renders a **generated brand plate** until a photograph is
supplied — deterministic cartographic/data artwork in the brand palette, at the
correct aspect ratio, with the same caption treatment.

Adding a real photograph is a one-line frontmatter change and never a layout
change. See [`public/images/README.md`](./public/images/README.md) for the
prioritised manifest, technical requirements, and the **consent standard**, which
is a requirement rather than guidance.

---

## The map

`/where-we-work` uses MapLibre GL with **no tile provider**. The basemap is a
GeoJSON file built from public-domain Natural Earth data (`npm run geo`).

That means: no API key, no usage quota, no third-party origin to allow through
the CSP, no request that discloses a visitor's IP to anyone, and nothing to fail
during a presentation.

The map is progressive enhancement. The **presence register beside it carries
every location, every attribution and every detail**, and works with no
JavaScript at all.

---

## Forms

Six variants of one accessible component: partnership, supplier, consultant,
volunteer, contact, application.

- Client-side validation with per-field errors and an `aria-live` status region;
  constraint attributes stay on the elements so the browser and any server
  enforce the same rules.
- Honeypot field, file type and 10 MB size validation.
- Explicit consent checkbox linking the privacy notice.

**Delivery.** Set `PUBLIC_FORM_ENDPOINT` in `.env` and forms POST there. **When
it is unset, forms do not fake a success** — they compose a pre-filled mail draft
and say plainly that this is what happened. A silently swallowed partnership
enquiry is worse than an honest handoff.

If you point the endpoint at an external host, add that origin to `form-action`
and `connect-src` in `public/_headers` and `vercel.json`.

---

## Deployment

Static output. `dist/` deploys anywhere.

| Host | Config | Notes |
|---|---|---|
| Vercel | `vercel.json` | Headers + clean URLs. |
| Netlify | `netlify.toml` + `public/_headers` | Includes legacy-path redirects. |
| Cloudflare Pages | `public/_headers` | Build `npm run build`, output `dist`. |

Security headers ship configured: CSP, HSTS, `X-Frame-Options: DENY`,
`X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, COOP/CORP.

**One CSP caveat:** `script-src` currently allows `'unsafe-inline'` for a single
inline script — the no-JS class flip in `<head>`, which must run before first
paint. To tighten it, hash that script and swap the hash in. Notes are in
`public/_headers`. Verify in a browser before deploying a stricter policy.

---

## Accessibility

Targets WCAG 2.2 AA.

- Semantic landmarks, ordered headings, skip link.
- Mega nav: hover on pointer devices, activation on keyboard/touch, Escape
  closes and restores focus.
- Mobile nav: real focus trap, scroll lock, Escape to close.
- Visible focus rings on every interactive element.
- `prefers-reduced-motion` removes parallax, pinning and transforms across the
  whole animation system.
- The map has a complete non-map alternative.
- Impact figures render their real value in HTML; the counter only animates
  toward it. **A statistic never depends on JavaScript to be truthful.**

---

## CMS readiness

Content is already modelled as validated entities — Programme, Project, News,
Story, Report, Job — with typed fields rather than prose. Moving to Sanity,
Storyblok, Directus or Strapi means mapping those schemas and swapping the
content loader in `src/content.config.ts`. Pages and components do not change.

---

## Licence

© 2026 MMT Impact. All rights reserved.
