# Content to verify before publication

**Read this before the site goes live.** Everything on this website was written to
be defensible under institutional due diligence, and nothing was invented — no
partners, no donors, no UN relationships, no offices, no testimonials, no
fabricated statistics. But a number of items are **supplied figures or
forward-looking statements that MMT Impact must confirm** before they are
published under the organisation's name.

They are listed here in priority order, with the exact file to edit.

---

## 1. HIGH PRIORITY — the impact figures

**File:** `src/data/impact.ts`

The four headline figures currently published come from the MMT Impact brief:

| Figure | Value | Where it appears |
|---|---|---|
| People reached | 10,000+ | Homepage, `/impact`, `/where-we-work/south-sudan`, organisational profile |
| Communities supported | 25+ | Same |
| People trained | 1,500+ | Same |
| Women & youth empowered | 500+ | Same |

**Confirm three things:**

1. **Are these reported results, or targets?** The site currently presents them as
   reported results. If they are targets, change `impactBasis` and `impactAsAt` in
   the same file — one edit, and the framing changes everywhere.
2. **Can each be evidenced?** A UN or INGO due diligence process will ask for the
   definition, the disaggregation and the source. The site publicly commits to
   providing these (`/impact` methodology section).
3. **What is the "as at" date?** Currently `Reported position, 2026`.

**If any figure cannot be substantiated, set its `value` to `null`.** The
component renders an em-dash and "In reporting" automatically — that is a
designed, credible state, not a gap. It is far safer than a number that cannot
be defended in the room.

---

## 2. HIGH PRIORITY — the project record

**Files:** `src/content/projects/*.md`

| Project | Status published | Needs confirming |
|---|---|---|
| `education-skills-juba` | **Active**, 500 beneficiaries, 2026–2027 | From the brief. Confirm it is genuinely active and that 500 is evidenced. |
| `womens-enterprise-juba` | In design | Confirm this is a real pipeline item. |
| `community-resilience-juba` | In design | Confirm. |
| `livelihoods-market-linkage` | Planned, Central Equatoria | Confirm the location and that it is a genuine plan. |
| `institutional-strengthening` | In design | Confirm. |

The four non-active projects are written as **pipeline** — clearly labelled "in
design" or "planned", with `beneficiaries: null` and no partners or donors named.
That is an honest representation of a new organisation's portfolio. **If any of
them is not actually planned, delete the file** — the project index, filters,
programme pages and organisational profile all update automatically.

---

## 3. HIGH PRIORITY — the three news articles

**Files:** `src/content/news/*.md`

These are organisational statements written in MMT Impact's voice. They make no
claim about partners, donors or delivered results, but they do commit the
organisation to things:

- **`programme-priorities-2026-2028`** — commits to publishing disaggregated
  results, targeting methodology, and findings where a programme underperformed.
- **`governance-framework-published`** — states the Safeguarding Focal Point
  reports directly to the Board, and that twelve policies exist.
- **`partnership-supplier-registration-open`** — states registration is open and
  free, and that due diligence is conducted on partners.

**Confirm each commitment is one the organisation will honour, and correct the
dates.** If the governance framework has not been adopted, either move that date
or set `draft: true` in the frontmatter to unpublish it.

---

## 4. Organisational details

**File:** `src/data/site.ts`

- [ ] **Domain.** Site is built for `mmtimpact.org`. Set `PUBLIC_SITE_URL` in
      `.env`. Every canonical URL, the sitemap and the OG tags follow it.
- [ ] **Email addresses.** Eight addresses are published
      (`info@`, `partnerships@`, `programs@`, `southsudan@`, `careers@`,
      `finance@`, `procurement@`, `media@`). **These must all exist and be
      monitored before launch** — a UN contact who emails `partnerships@` and gets
      a bounce is the worst possible outcome of this project.
- [ ] **Phone number.** Currently empty, so no phone is rendered anywhere. Add it
      to `contact.phone` when a published line exists.
- [ ] **Street address.** Currently empty; the contact page says the address is
      confirmed directly with visitors. Add `headquarters.street` when ready.
- [ ] **Social profiles.** All four are empty, so the footer social block is
      hidden entirely. Add URLs to `socials` and it appears. LinkedIn first.
- [ ] **Founded year.** `site.founded` is set to `2026`.

---

## 5. Leadership and governance

**File:** `src/data/organisation.ts`

- [ ] **No individuals are named.** `/who-we-are/leadership` publishes six
      accountable roles with remits and reporting lines, each marked "Appointment
      in progress". This reads as governance discipline rather than a gap — but
      **add real names as appointments are confirmed** (`name` and `bio` fields on
      each role) and the page renders people instead.
- [ ] **Twelve policies are listed** with summaries. Confirm each exists or is
      genuinely in adoption. Policies show "On request" until you add a `file`
      path pointing at a PDF in `public/documents/`.
- [ ] **Governance bodies** — Board plus three committees, with stated meeting
      cadences. Confirm these match the actual constitution.

---

## 6. The MMT Group relationship — legal review recommended

**File:** `src/data/group.ts`

This is the highest legal-risk content on the site, and it has been written
conservatively throughout:

- MMT Impact is described only as a **member of the wider MMT Group**, never as an
  owner, parent or subsidiary.
- Every entity carries an `attribution` line that renders **wherever that entity
  appears**, stating it is a separate legal entity.
- `/institutional-capacity` includes an explicit table of what is and is not
  attributable to MMT Impact.
- Group capability is described as **access to expertise**, never as MMT Impact's
  own track record.

**Have this reviewed against the actual legal structure.** Two specific checks:

1. Is "member of the wider MMT Group" accurate, or is a different formulation
   required (e.g. "affiliated with")? Change `groupIntro` and it updates
   site-wide.
2. Are MMT Alliance's stated locations correct — Kenya HQ, South Sudan, Somalia,
   UAE? These appear on the presence map and in the footer.

---

## 7. Not yet published — deliberately empty

These sections render **designed empty states** rather than invented content. Each
explains why it is empty, which reads as discipline rather than absence:

| Section | State | To populate |
|---|---|---|
| `/impact/stories` | Empty | Add files to `src/content/stories/` — see `_TEMPLATE.md`. Requires a recorded consent status. |
| `/careers` | No open roles | Add files to `src/content/jobs/` — see `_TEMPLATE.md`. |
| `/partnerships/current-opportunities` | Nothing open | Add entries to `openOpportunities` in `src/data/partnerships.ts`. |
| Partner logos | None shown anywhere | Only add a logo where the relationship exists **and** written permission to use the mark is held. |
| Annual reports, financial statements | Listed as pending | Publish after the first audited cycle. |

**Resist the temptation to fill these before launch.** An empty newsroom is
recoverable. A fabricated one discovered during due diligence is not.

---

## 8. Before the meeting — 20-minute checklist

- [ ] Set `PUBLIC_SITE_URL` in `.env`.
- [ ] Confirm or nullify the four impact figures (`src/data/impact.ts`).
- [ ] Confirm the five projects, or delete the ones that are not real.
- [ ] Confirm the three news articles, or set `draft: true`.
- [ ] Add the LinkedIn URL (`src/data/site.ts` → `socials`).
- [ ] Verify all eight email addresses resolve.
- [ ] Open `/resources/organisational-profile`, print to PDF, read it end to end —
      this is the document you will most likely be asked for.
- [ ] Drop in any real photography you have (`public/images/README.md`).
- [ ] Run `npm run build` and confirm 47 pages build clean.

---

## Standing rule

Everything published on this site should survive the question:
**"Can you evidence that?"**

Where the answer is no, the site is built to say so — `null` figures render as
"in reporting", unbuilt sections render as designed empty states, and unnamed
partners render as "None currently named". Use those states. They cost far less
than a claim that does not hold up.
