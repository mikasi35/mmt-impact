# MMT Impact — Design System

The brief was explicit: this must not look like a generic NGO template, a
WordPress theme, or a Tailwind starter. It must read as a serious international
institution that a UNDP, UNICEF or World Bank contact can take seriously within
thirty seconds.

This document records what was decided and, more usefully, **why** — so that the
next person editing it does not quietly undo the decisions.

---

## 1. The organising idea: the field record

The site is designed as an **institutional field record** — the visual language
of a country survey or a UN situation report, held to an editorial standard.

Three devices carry it, and they recur on every page:

**The section index.** Every major section is numbered and named in mono
uppercase, with a gold rule: `— 03  OUR IMPACT`. It signals a document rather
than a marketing page, and gives the reader a sense of position without a
progress bar.

**The coordinate.** `JUBA · 04°51′N 31°36′E` appears in the header utility strip,
the hero, the South Sudan section, the contact page and the 404. It is
geographic, precise and quietly futuristic — and it says *we are a real
organisation in a real place* more efficiently than a paragraph.

**The hairline rule.** Structure comes from 1px borders and an editorial grid,
not from shadowed containers. This is the single decision that most separates the
site from a card-grid template.

---

## 2. Surfaces, not props

The most consequential architectural decision in the CSS.

A section declares a surface:

```html
<section class="surface-dark section">
```

That sets semantic tokens — `--ink`, `--ink-muted`, `--surface`, `--rule`,
`--accent`, `--focus-ring`. Every component below reads **only** those tokens,
never a raw brand colour.

Five surfaces: `light` (off-white, default), `paper` (white), `sand`, `dark`
(navy), `forest` (green).

**Why it matters.** The spec requires alternating light and dark sections. The
obvious implementation is a `theme` prop threaded through every component, which
becomes unmaintainable at about the third level of nesting. With surfaces, the
same `<ProjectCard>` renders correctly on navy, sand or white with no prop and no
conditional. Adding a sixth surface is one CSS block.

**The rule:** a component must never hard-code `--color-navy-950`. If it needs a
colour, that colour is a semantic token.

---

## 3. Colour

Deep navy primary, warm ochre accent, earthy green, sand and off-white.

```
--color-navy-950  #071827   Dark surfaces, the base of the whole palette
--color-navy-900  #0B2235   Raised dark surfaces
--color-navy-800  #12344A

--color-ochre-600 #B88932   Accent on light surfaces
--color-ochre-500 #C99A45   Plate accents
--color-ochre-400 #D7AF64   Accent on dark surfaces (contrast-corrected)

--color-green-800 #24402F   The forest surface
--color-green-700 #365B46   Sustainability, livelihoods

--color-off-white #F5F4F0   Default light surface
--color-sand      #E9E4D8   The third surface — stops light sections repeating
```

### Gold is an accent. This is a hard rule.

The brief says do not build a gold-heavy site, and gold is the easiest colour in
this palette to overuse. It appears as: section-index rules, metadata labels,
active states, the primary CTA, and single accented lines in display headings.

**It is never a surface, never a large fill, never body text.**

Note that the accent *changes value* by surface — `ochre-600` on light,
`ochre-400` on dark — so contrast holds in both directions. That is why
components read `--accent` rather than picking a shade.

---

## 4. Typography

Three families, one job each. The pairing is the site's strongest signal.

| Role | Family | Used for |
|---|---|---|
| Display | **Instrument Serif** 400 | Every heading above H3. High-contrast editorial serif. |
| Text | **IBM Plex Sans** 300/400/500/600 | Body, UI, navigation. Institutional without being cold. |
| Meta | **IBM Plex Mono** 400/500 | Indices, coordinates, statuses, labels, dates. |

**Why not Inter.** Inter is excellent and it is on a very large share of the web.
IBM Plex Sans has a humanist, slightly institutional character that suits a
development organisation, and pairs with Plex Mono as a designed system.

**Why the mono matters most.** Mono uppercase with wide tracking is what makes
the site read as a *record*. Used for anything longer than a short label it
becomes unreadable, so it is capped at ~11px and never used for sentences.

Scale is fluid `clamp()` throughout — `--text-mega` reaches 11rem on a large
display and drops to 3.5rem on a phone without a single breakpoint.

**Display headings take authored line breaks.** `lines={['Building', 'Stronger',
'Communities.']}` rather than relying on wrapping. On a page built around
typography, the line break is a compositional decision.

---

## 5. Layout

12 / 8 / 4 column editorial grid. `--container-max: 1440px`, with `.wrap-wide`
at 1760px for full-bleed media.

**Asymmetry is deliberate and specific:**

- Homepage "Who we are": text 1.32fr, image 0.68fr, image offset 4.5rem below the
  baseline.
- Featured project: media bleeds past the container to the viewport edge.
- Values page: the media column alternates side down the list, so the register
  never reads as a table.
- Programme index: 1.45fr list against a 0.55fr sticky media panel.

**Spacing is fluid.** `--spacing-section: clamp(4.5rem, 10vw, 11rem)`. Whitespace
is an active element — sections are not compressed to fit more above the fold.

---

## 6. Motion

Restrained, and load-conscious.

**Reveals are not GSAP.** They are the most frequent motion on the site, and an
IntersectionObserver plus a CSS transition costs no library weight. The
`html.js` guard in `utilities.css` means content is visible by default if
JavaScript never arrives.

**GSAP earns its place in exactly four situations,** and is dynamically imported
only when one is present on the page:

| Feature | Why GSAP |
|---|---|
| Hero sequence | Coordinated timeline across media, eyebrow, lines and CTAs. |
| Impact counters | Eased interpolation with a ScrollTrigger `once`. |
| Parallax | `scrub` on transform, staying on the compositor. |
| "How We Work" timeline | Pinned horizontal scrub with `matchMedia` — genuinely not reasonable in CSS. |

A page with none of these ships **zero animation library code**.

**Counters never lie.** The real figure is rendered in the HTML. The animation
only interpolates toward it. If JavaScript fails, the correct number is already
on screen — an impact statistic must not depend on a script to be truthful.

**Reduced motion is a real path, not a disable switch.** Parallax, pinning and
transforms are removed; the pinned timeline becomes a vertical list carrying
identical information. Nothing is communicated by animation alone.

---

## 7. The plate system

Photography is the primary design element, and at build time there was none.

The answer is `<Plate>`: pass `src` and it renders an optimised `<img>`; omit it
and it draws a deterministic SVG composition in the brand palette at the same
aspect ratio, with the same caption treatment.

Six variants — `terrain`, `graticule`, `cohort`, `horizon`, `network`, `strata` —
each seeded from a string, so a given slot always draws the same artwork and
builds stay reproducible.

**Why generate rather than use stock.** Generic stock photography actively
damages an organisation of this kind: a UN reader recognises it instantly, and it
signals that the programmes may be as generic as the imagery. A cartographic
plate reads as a deliberate graphic system, sits inside the brand, and — because
it is on-theme with the coordinate and graticule devices — looks intentional
rather than temporary.

**They are scaffolding, not the destination.** `public/images/README.md` carries
the drop-in manifest, the priority order, and the consent standard.

---

## 8. Radius and shadow

`--radius-sm: 2px` on interactive controls. Media frames are square. Shadows
appear in exactly one place: the mega-navigation panel, where elevation is real.

No `border-radius: 24px; box-shadow: …` anywhere. Strength comes from typography
and rules.

---

## 9. Empty states are designed

A new organisation has sections with nothing in them. The site treats that as a
design problem rather than something to paper over with invented content.

`/impact/stories`, `/careers` and `/partnerships/current-opportunities` render a
designed empty state that explains *why* it is empty and offers a route onward.

**This reads as discipline.** "No stories are published yet — deliberately"
followed by the consent standard is a stronger due-diligence signal than three
fabricated case studies, and it cannot be discovered and held against the
organisation later.

---

## 10. The anti-generic test

From the brief. Applied to every page before it was considered done.

| Question | How the site answers |
|---|---|
| Could this appear on 500 other Tailwind sites? | Instrument Serif + Plex Mono, coordinate device, numbered section indices, generative plates. |
| More than three consecutive card sections? | Homepage runs hero → editorial split → full-bleed geography → sticky index → dark metrics → group diagram → pinned timeline → bleeding case study → asymmetric story grid. |
| Heading / paragraph / cards / button everywhere? | Each section has its own composition. |
| Is the page mostly centred? | Asymmetric grids throughout; content deliberately breaks the container. |
| Are typography and photography doing the work? | Display type to 11rem; media at full bleed. |
| Are animations decorative? | Four GSAP uses, each tied to meaning. |
| Does it feel like a serious international organisation? | Governance framework, published methodology, printable profile, stated basis on every figure. |

---

## 11. Content governance in the design

Three places where design carries a legal or ethical obligation:

**Group attribution travels with the content.** Every MMT Group entity has an
`attribution` string in `src/data/group.ts` that renders wherever the entity
appears. It cannot be dropped by using the component somewhere new.

**Impact figures carry their basis.** `impactBasis` renders beneath every
dashboard. Change the field, and the framing changes site-wide.

**Nullable figures render honestly.** `value: null` produces an em-dash and "In
reporting". The type system makes fabrication the harder path — which is the
point.

---

## 12. Extending it

**Adding a section type.** Compose from `SectionLabel`, `DisplayHeading`,
`EditorialSplit`, `NumberedGrid` and `Plate` before writing new CSS. Pick a
surface that differs from the section above it.

**Adding a colour.** Add the raw value to `@theme` in `tokens.css`, then map it
into each surface as a semantic token. Never reference a raw brand colour from a
component.

**Adding motion.** Ask whether CSS can do it. If yes, use CSS. If it needs GSAP,
put it in `src/lib/animations/` with its own module and a `matchMedia` guard, and
give it a reduced-motion path that still communicates the information.

**Adding content.** Add the schema to `src/content.config.ts` first. Make
unverifiable fields nullable.
