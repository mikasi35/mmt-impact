# Photography — drop-in manifest

The site is designed to be **photography-led**. Until commissioned, consented field
photography exists, every image slot renders a generated brand plate (a
cartographic/data composition in the MMT Impact palette) at exactly the same
aspect ratio, with exactly the same caption treatment.

**Swapping in a real photograph is a one-line change, never a layout change.**

---

## How to add a photograph

1. Drop the optimised file into `public/images/` using the filename below.
2. Add `src` (and `alt`) to the relevant `media:` block in `src/content/…`, or to
   the `<Plate>` call in the page.

```yaml
# Before — renders a generated plate
media:
  variant: strata
  tone: navy
  caption: Education & skills development

# After — renders the photograph, same ratio, same caption
media:
  src: /images/programme-education.jpg
  alt: Trainees at a vocational skills session in Juba
  caption: Education & skills development
  credit: Photograph by …
```

Nothing else changes. The frame, ratio, caption rule, grain overlay, parallax and
hover behaviour are identical either way.

---

## Priority order — the eight images that change the most

| Filename | Where it appears | Ratio | Min width | Subject |
|---|---|---|---|---|
| `home-hero.jpg` | Homepage hero (LCP) | 16:9, full-bleed | 2400px | Community, education or field activity. Leaves room on the left for type — the scrim darkens that side. |
| `south-sudan.jpg` | Homepage geographic band, South Sudan page | 16:9, full-bleed | 2400px | Landscape or community setting that reads as South Sudan without stereotype. |
| `who-we-are.jpg` | Homepage "Who we are" | 4:5 portrait | 1400px | Community consultation or meeting. People in conversation, not posed to camera. |
| `programme-education.jpg` | Education programme | 3:4 | 1400px | Training, classroom or workshop. |
| `programme-livelihoods.jpg` | Livelihoods programme | 3:4 | 1400px | Agriculture, market, enterprise. |
| `programme-women-youth.jpg` | Women & Youth programme | 3:4 | 1400px | Women or young people working, trading or leading. |
| `featured-project.jpg` | Homepage featured project | 3:2 | 2000px | The Juba education programme in delivery. |
| `partner-cta.jpg` | Closing call to action, most pages | 16:9, full-bleed | 2400px | Wide, calm, forward-looking. |

Then, as available: `programme-community-support.jpg`,
`programme-humanitarian.jpg`, `programme-consultancy.jpg`, and per-project images
named `project-<slug>.jpg`.

---

## Technical requirements

- **Format:** supply JPEG or WebP. AVIF is ideal where your tooling supports it.
- **Colour:** sRGB. Strip EXIF, including GPS coordinates.
- **Weight:** under 400 KB for full-bleed, under 200 KB for portrait crops.
- **Focal point:** keep the subject away from the extreme left on full-bleed
  images — the scrim and headline occupy that area on desktop.
- **Do not** upscale. A sharp 1600px image beats a soft 2400px one.

---

## Consent and dignity — non-negotiable

These are requirements, not guidance. A photograph that does not meet them does
not go on the site, however good it is.

- **Informed consent** from any identifiable adult, given in a language they use
  fluently, with the intended use explained — including that it will appear on a
  public website indefinitely.
- **Parental/guardian consent plus the child's own assent** for any identifiable
  child, and a higher bar for whether the image is needed at all. Default to no.
- **The right to withdraw**, and a process that actually removes the image when
  someone exercises it. Keep a consent record against every file.
- **Anonymise by default** where a photograph relates to protection,
  safeguarding, displacement, or anything that could expose someone to risk.
- **Participation is never conditional** on agreeing to be photographed.

### What not to use

- Images that trade a person's dignity for a stronger emotional appeal.
- Staged "grateful beneficiary" compositions.
- Generic corporate stock — smiling teams around laptops, handshakes, globes.
- Any image sourced without a clear licence and a consent record.

If you have no photograph that meets this standard, **leave the plate in place.**
A designed graphic is a better representation of this organisation than a stock
photograph of somebody else's programme.

---

## Generated plates — reference

Six variants, four tones, all deterministic from a `seed` string. Set them in
`media:` frontmatter or on the `<Plate>` component.

| Variant | Reads as | Used for |
|---|---|---|
| `terrain` | Layered topographic relief | Heroes, landscape, livelihoods |
| `graticule` | Survey grid with coordinate crosshair | Geography, governance, method |
| `cohort` | Dot-matrix density field | People reached, community, impact |
| `horizon` | Banded horizon with sun disc | Openings, section breaks |
| `network` | Connected nodes | Partnership, the MMT Group |
| `strata` | Horizontal strata with a core sample | Education, documents, structure |

Tones: `navy` (default), `ochre`, `green`, `sand`.

Because plates are seeded, the same slot always draws the same artwork — builds
are reproducible and pages do not shimmer between deploys.
