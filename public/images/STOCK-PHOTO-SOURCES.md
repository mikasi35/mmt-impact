# Stock photo sources

Every file listed here is a Pexels stock photo, downloaded under the [Pexels
License](https://www.pexels.com/license/) (free for commercial use, no
attribution required, may not be resold unaltered or used to imply endorsement).
None of these depict MMT Impact staff, programmes or beneficiaries — they are a
time-boxed stand-in, authorised by the client on 2026-09-02 ahead of an urgent
meeting. See the note in `README.md` in this folder.

**When real MMT Impact photography exists for a slot below, replace the file at
the same path** — nothing else needs to change (same filename, same aspect
ratio handling via `Plate.astro`).

| File | Pexels photo | Used on |
|---|---|---|
| `get-involved-page/volunteer-hero.jpg` | [photo 18449721](https://www.pexels.com/photo/18449721/) | Get Involved / Volunteer — hero |
| `get-involved-page/support-hero.jpg` | [photo 6646880](https://www.pexels.com/photo/6646880/) | Get Involved / Support — hero |
| `get-involved-page/index-hero.jpg` | [photo 12079506](https://www.pexels.com/photo/12079506/) | Get Involved — hero |
| `get-involved-page/partner-hero.jpg` | [photo 30677596](https://www.pexels.com/photo/30677596/) | Get Involved / Partner — hero |
| `contact-page/hero.jpg` | [photo 30677713](https://www.pexels.com/photo/30677713/) | Contact — hero |
| `partnerships-page/index-hero.jpg` | [photo 9301860](https://www.pexels.com/photo/9301860/) | Partners & Opportunities — hero |
| `partnerships-page/consultant-hero.jpg` | [photo 30688909](https://www.pexels.com/photo/30688909/) | Consultant registration — hero |
| `partnerships-page/supplier-hero.jpg` | [photo 1797428](https://www.pexels.com/photo/1797428/) | Supplier registration — hero |
| `partnerships-page/opportunities-hero.jpg` | [photo 30689320](https://www.pexels.com/photo/30689320/) | Current opportunities — hero |
| `institutional-capacity-page/hero.jpg` | [photo 30689114](https://www.pexels.com/photo/30689114/) | Institutional Capacity — hero |
| `transparency-page/hero.jpg` | [photo 7731348](https://www.pexels.com/photo/7731348/) | Transparency & Accountability — hero |
| `who-we-are-governance-page/hero.jpg` | [photo 30688596](https://www.pexels.com/photo/30688596/) | Governance — hero |
| `who-we-are-leadership-page/hero.jpg` | [photo 9489091](https://www.pexels.com/photo/9489091/) | Leadership — hero |
| `who-we-are-group-page/hero.jpg` | [photo 8761674](https://www.pexels.com/photo/8761674/) | MMT Group — hero |
| `who-we-are-approach-page/hero.jpg` | [photo 5439481](https://www.pexels.com/photo/5439481/) | How We Work — hero |
| `who-we-are-approach-page/method.jpg` | [photo 7581110](https://www.pexels.com/photo/7581110/) | How We Work — "why publish it" body image |
| `news-page/hero.jpg` | [photo 39128402](https://www.pexels.com/photo/39128402/) | News & Stories — hero |
| `resources-page/hero.jpg` | [photo 8353764](https://www.pexels.com/photo/8353764/) | Resources — hero |
| `legal-page/terms-hero.jpg` | [photo 15616259](https://www.pexels.com/photo/15616259/) | Terms of Use — hero |
| `legal-page/privacy-hero.jpg` | [photo 7681334](https://www.pexels.com/photo/7681334/) | Privacy Notice — hero |
| `legal-page/cookies-hero.jpg` | [photo 10347152](https://www.pexels.com/photo/10347152/) | Cookies — hero |
| `where-we-work-page/index-hero.jpg` | [photo 33749782](https://www.pexels.com/photo/33749782/) | Where We Work — hero |
| `where-we-work-page/south-sudan-hero.jpg` | [photo 34222337](https://www.pexels.com/photo/34222337/) | South Sudan — hero |
| `impact-page/index-hero.jpg` | [photo 7658352](https://www.pexels.com/photo/7658352/) | Our Impact — hero |
| `impact-page/projects-hero.jpg` | [photo 34249568](https://www.pexels.com/photo/34249568/) | Projects — hero |
| `impact-page/stories-hero.jpg` | [photo 9090746](https://www.pexels.com/photo/9090746/) | Impact Stories — hero |
| `careers-page/hero.jpg` | [photo 7654401](https://www.pexels.com/photo/7654401/) | Careers — hero (index and every job listing) |
| `what-we-do-page/index-hero.jpg` | [photo 30689321](https://www.pexels.com/photo/30689321/) | What We Do — hero |

## Deliberately left as the generated plate, not given a stock photo

These carry a specific, named claim (an individual project's location caption,
or an identified impact story with a recorded consent status) that a generic
stock photo would misrepresent:

- Individual project pages' media band (`impact/projects/[slug].astro`) —
  carries a caption naming the specific project and location.
- Individual impact story pages (`impact/stories/[slug].astro`) — every story
  on this site carries a recorded consent status for anyone identifiable in it;
  a stock photo of an unrelated, non-consenting person cannot stand in for that.

## Reused existing real photography, not new stock

Programme pages (`what-we-do/[slug].astro`), the project detail hero, and every
project card (`ProjectCard.astro`) reuse the **real** MMT Impact photography
already sourced for the six programme areas (`PROGRAMME_IMAGE` in
`src/lib/media-overrides.ts`) — not stock. No new sourcing needed there.
