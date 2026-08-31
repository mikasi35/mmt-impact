# MMT IMPACT — MASTER WEBSITE DESIGN & TECHNICAL SPECIFICATION

**Project:** MMT Impact  
**Website:** MMT Impact  
**Primary domain preference:** `mmtimpact.org` (subject to availability and final decision)  
**Organisation type:** Development and humanitarian organisation  
**Initial geographic focus:** South Sudan  
**Design direction:** Premium international institution × editorial design × subtle futurism × human-centred storytelling  
**Framework:** Astro  
**Language:** TypeScript  
**Styling:** Tailwind CSS + design tokens  
**Animation:** GSAP + ScrollTrigger, with Astro View Transitions for page navigation  
**Interactive geography:** MapLibre GL JS  
**Content:** CMS-ready / structured content architecture  
**Deployment target:** Static-first / edge-friendly hosting such as Vercel, Cloudflare Pages, Netlify, or equivalent  
**Status:** Master build specification

---

# 1. PROJECT PURPOSE

MMT Impact requires a premium institutional website that can represent the organisation to:

- UN agencies
- Government ministries
- International NGOs
- Development institutions
- Foundations
- Private-sector partners
- Community organisations
- Donors
- Prospective employees and consultants
- Communities and programme participants

The website must communicate within approximately 30 seconds:

1. Who MMT Impact is.
2. What MMT Impact does.
3. Where MMT Impact operates.
4. Why MMT Impact can deliver.
5. How MMT Impact is governed.
6. How MMT Impact measures impact.
7. How an organisation can partner with MMT Impact.

The website must feel credible enough for institutional due diligence while remaining human, contemporary and visually distinctive.

---

# 2. NON-NEGOTIABLE DESIGN DIRECTION

## The website must NOT look like:

- A generic African NGO website.
- A WordPress NGO template.
- A generic Tailwind starter.
- A SaaS landing page.
- A technology startup.
- A charity donation website.
- A dashboard.
- A collection of identical cards.
- A generic corporate consulting website.
- An AI-generated website with predictable rounded cards and gradients.

## The website SHOULD feel like:

**UN institutional credibility**

combined with

**premium international development organisation**

combined with

**modern editorial publication**

combined with

**subtle digital/futuristic interaction**

combined with

**authentic African/community storytelling**.

The visual language should communicate:

- Trust
- Capability
- Humanity
- International credibility
- Transparency
- Local knowledge
- Progress
- Partnership
- Sustainability
- Institutional maturity

---

# 3. DESIGN CONSTITUTION

Before implementing any page, the developer/AI agent MUST follow these principles.

## 3.1 Editorial before template

The layout should feel art-directed.

Do not automatically create:

```text
Heading
Paragraph
Three cards
Button
```

for every section.

Instead alternate between:

- Full-bleed photography
- Oversized typography
- Asymmetric editorial layouts
- Data-led sections
- Interactive maps
- Horizontal timelines
- Project storytelling
- Image/text compositions
- Dark/light transitions
- Large numerical displays
- Interactive programme navigation
- Layered photography
- Geographic storytelling

Every major section should have its own visual identity.

## 3.2 Photography-led

Photography is a primary design element, not decoration.

Use:

- Communities
- Children and education
- Women
- Youth
- Training
- Entrepreneurs
- Community meetings
- Field workers
- South Sudan landscapes
- Programme activities
- Local environments

Avoid generic corporate stock photography whenever authentic imagery is available.

All identifiable beneficiaries must have appropriate consent, particularly children.

## 3.3 Typography-led hierarchy

Typography must carry substantial visual weight.

Use dramatic scale differences.

Example:

```text
MMT IMPACT
SOUTH SUDAN / 2026

BUILDING
STRONGER
COMMUNITIES.
```

Use large display typography for major statements and restrained supporting typography for explanations.

Do not put every text element inside a card.

## 3.4 Asymmetry

Not every element needs to align to the same centre axis.

Use:

- Offset images
- Split grids
- Overlapping typography
- Unequal columns
- Vertical labels
- Large whitespace
- Full-width sections
- Edge-to-edge imagery
- Content that intentionally breaks the container

Asymmetry must remain accessible and functional.

## 3.5 Negative space

Whitespace is an active design element.

Do not compress sections simply to fit more content above the fold.

## 3.6 Subtle futurism

Futuristic elements must support the institutional story.

Good examples:

- Geographic coordinates
- Animated lines
- Data counters
- Map movement
- Digital grid overlays
- Geographic connection lines
- Project timelines
- Scroll-linked transitions
- Kinetic typography
- Image reveals
- Subtle data visualisation

Avoid:

- Cyberpunk styling
- Neon overload
- Sci-fi HUD interfaces
- Excessive glassmorphism
- AI purple gradients
- Decorative animations with no purpose

---

# 4. BRAND POSITIONING

## Brand

MMT IMPACT

## Primary statement

**Building Stronger Communities.**

## Core positioning

MMT Impact is a development and humanitarian organisation working to strengthen communities through:

- Education
- Social support
- Economic empowerment
- Skills development
- Sustainable development
- Humanitarian action
- Community resilience
- Institutional capacity development

## Brand attributes

Professional  
International  
Transparent  
Humanitarian  
Capable  
Local  
Inclusive  
Sustainable  
Evidence-informed  
Partnership-oriented

---

# 5. BRAND COLOUR SYSTEM

## Primary

Deep Navy

Suggested token:

```css
--color-navy-950: #071827;
--color-navy-900: #0B2235;
--color-navy-800: #12344A;
```

## Secondary

Warm Ochre / Gold

Suggested token:

```css
--color-ochre-600: #B88932;
--color-ochre-500: #C99A45;
--color-ochre-400: #D7AF64;
```

Gold MUST remain an accent.

Do not create a gold-heavy website.

## Supporting

```css
--color-white: #FFFFFF;
--color-off-white: #F5F4F0;
--color-sand: #E9E4D8;
--color-grey-100: #F1F2F1;
--color-grey-300: #D6D9D7;
--color-grey-700: #4A5255;
```

## Earthy green

```css
--color-green-700: #365B46;
--color-green-600: #4B7057;
--color-green-400: #7C9A78;
```

Use green selectively for sustainability, livelihoods and environmental/community themes.

---

# 6. TYPOGRAPHY

Typography must feel premium and institutional.

Recommended system:

## Display

Use a sophisticated editorial serif or high-quality display face.

Potential direction:

- Instrument Serif
- DM Serif Display
- Fraunces
- Cormorant Garamond

Do not automatically use a serif everywhere.

## Sans

Use a modern neutral sans-serif:

- Inter
- Manrope
- Geist
- IBM Plex Sans
- Source Sans 3

## Typography hierarchy

Example:

```text
Display:
clamp(4rem, 9vw, 10rem)

H1:
clamp(3.5rem, 7vw, 7rem)

H2:
clamp(2.5rem, 5vw, 5rem)

H3:
clamp(1.5rem, 2.5vw, 2.5rem)

Body:
1rem–1.25rem

Small metadata:
0.7rem–0.85rem
```

Do not blindly use these exact values; tune them visually.

---

# 7. GRID SYSTEM

Use a responsive editorial grid.

Desktop:

```text
12 columns
```

Tablet:

```text
8 columns
```

Mobile:

```text
4 columns
```

Recommended maximum content width:

```css
--container-max: 1440px;
```

Allow selected imagery and visual elements to escape the normal container.

Use fluid spacing with `clamp()` rather than excessive breakpoint-specific values.

---

# 8. RADIUS AND SHADOW PHILOSOPHY

Avoid excessive rounded UI.

The design should use:

- Small radius where appropriate
- Square editorial image frames
- Slight radius for interactive controls
- Strong typography instead of container decoration

Avoid making every component:

```css
border-radius: 24px;
box-shadow: ...
```

Use shadows only where they communicate elevation.

---

# 9. TECHNOLOGY STACK

## Core

```text
Astro
TypeScript
Tailwind CSS
```

Astro is the primary framework because the website is primarily content-driven and should remain fast, SEO-friendly and HTML-first.

Astro supports component-based pages, islands architecture, type-safe content collections and CMS integrations. citeturn0search14turn1search4turn1search6

## Animation

```text
GSAP
GSAP ScrollTrigger
```

ScrollTrigger should be used for intentional scroll-based effects such as:

- reveal animations
- pinned storytelling
- progress sequences
- image movement
- timeline animation
- section transitions

ScrollTrigger supports scrub, pin, snap, callbacks, responsive matchMedia and optimized scroll handling. citeturn1search0

## Page transitions

Use:

```text
Astro View Transitions
```

for subtle navigation continuity.

Astro supports animated page transitions, custom transition directives and reduced-motion handling. citeturn0search3

## Interactive map

Use:

```text
MapLibre GL JS
```

MapLibre is an open-source TypeScript/WebGL mapping library suitable for interactive maps and geographic visualisation. citeturn0search0turn0search12

Use it for:

- Country presence
- Programme locations
- Project locations
- MMT Group geographic presence
- Interactive country selection
- Geographic storytelling

MapLibre supports vector-tile rendering, custom styles, feature interaction and animated camera movement. citeturn0search0turn0search1

## Icons

Use a restrained icon system.

Possible:

```text
Lucide
```

Do not use icons to decorate every card.

## Image processing

Use Astro's image tooling and optimized image formats.

Preferred:

```text
AVIF
WebP
responsive srcsets
lazy loading
explicit dimensions
```

Hero images may use priority loading.

---

# 10. ASTRO ARCHITECTURE

Recommended structure:

```text
src/
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── hero/
│   ├── sections/
│   ├── impact/
│   ├── projects/
│   ├── programmes/
│   ├── geography/
│   ├── forms/
│   ├── media/
│   ├── typography/
│   └── ui/
│
├── content/
│   ├── programmes/
│   ├── projects/
│   ├── stories/
│   ├── news/
│   ├── reports/
│   ├── jobs/
│   ├── team/
│   └── countries/
│
├── layouts/
│   ├── BaseLayout.astro
│   ├── PageLayout.astro
│   ├── ArticleLayout.astro
│   ├── ProjectLayout.astro
│   └── ProgrammeLayout.astro
│
├── pages/
│   ├── index.astro
│   ├── who-we-are/
│   ├── what-we-do/
│   ├── where-we-work/
│   ├── impact/
│   ├── partnerships/
│   ├── news/
│   ├── get-involved/
│   ├── resources/
│   ├── careers/
│   └── contact/
│
├── styles/
│   ├── global.css
│   ├── tokens.css
│   ├── typography.css
│   └── utilities.css
│
├── lib/
│   ├── content.ts
│   ├── seo.ts
│   ├── analytics.ts
│   └── utils.ts
│
└── data/
    ├── navigation.ts
    ├── impact.ts
    ├── countries.ts
    └── group.ts
```

---

# 11. COMPONENT ARCHITECTURE

Create reusable components.

Examples:

```text
SiteHeader
MegaNavigation
MobileNavigation
SiteFooter
PageIntro
SectionLabel
DisplayHeading
EditorialSplit
FullBleedImage
ImageReveal
ImpactMetric
ImpactGrid
ProgrammeIndex
ProgrammeFeature
ProjectCard
ProjectHero
ProjectMeta
ProjectTimeline
StoryCard
NewsCard
CountryMap
CountryMarker
GroupEcosystem
PartnerCTA
ContactForm
ApplicationForm
DocumentList
ReportCard
JobCard
```

Components must remain composable.

Do not create enormous monolithic `.astro` files.

---

# 12. CONTENT ARCHITECTURE

The site must be structured around content entities.

Recommended entities:

```text
Programme
Project
Country
Impact Metric
News Article
Field Story
Impact Story
Report
Policy
Job
Team Member
Partner
Event
Opportunity
```

Astro Content Collections can provide schema validation and TypeScript type safety for local structured content. citeturn1search4turn1search10

The architecture should remain CMS-compatible so local Markdown/MDX content can later be replaced or supplemented by a headless CMS.

---

# 13. CMS REQUIREMENT

The production website must not be locked into hard-coded content.

Administrators should eventually be able to manage:

- News
- Projects
- Programmes
- Jobs
- Reports
- Events
- Impact statistics
- Countries
- Team members
- Partners
- Opportunities
- Documents

The original organisational requirement explicitly calls for CMS-driven management rather than requiring a developer for ordinary content updates.

Recommended architecture:

```text
Astro frontend
      ↓
Headless CMS
      ↓
Structured content API
      ↓
Astro build / server rendering
      ↓
CDN
```

Potential CMS options:

- Sanity
- Storyblok
- Directus
- Strapi
- WordPress as a headless CMS

Do not select a CMS solely because it is familiar. Evaluate:

- Editorial usability
- Structured content
- Media management
- Roles
- Permissions
- API support
- Webhooks
- Preview
- Security
- Cost
- Hosting model

---

# 14. HOMEPAGE EXPERIENCE

The homepage should not be a sequence of generic cards.

## Section 01 — Hero

Full-screen or near-full-screen documentary image/video.

Content:

```text
MMT IMPACT
SOUTH SUDAN / DEVELOPMENT / HUMANITARIAN ACTION

BUILDING
STRONGER
COMMUNITIES.
```

Supporting copy:

MMT Impact works with communities, governments, development partners and international organisations to create sustainable opportunities, strengthen livelihoods and improve lives.

CTAs:

```text
Our Work
Partner With Us
```

Possible visual details:

- Location coordinate
- Scroll indicator
- Animated line
- Subtle image movement
- Small geographic label

---

# 15. HOMEPAGE SECTION 02 — WHO WE ARE

Use a strong editorial composition.

Headline:

```text
Development that begins
with communities.
```

Supporting statement:

MMT Impact is a development and humanitarian organisation focused on creating practical, sustainable solutions for communities and vulnerable populations.

Focus words:

```text
EDUCATION
EMPOWERMENT
COMMUNITY SUPPORT
LIVELIHOODS
HUMANITARIAN ACTION
```

Use typography and imagery rather than six cards.

---

# 16. HOMEPAGE SECTION 03 — SOUTH SUDAN

Create a geographic storytelling section.

Example:

```text
SOUTH SUDAN

JUBA
04°51′N 31°36′E

Local knowledge.
Regional perspective.
Sustainable impact.
```

Use a large image or map.

The section should establish the organisation's initial geographic identity.

---

# 17. HOMEPAGE SECTION 04 — FOCUS AREAS

Six focus areas:

1. Education & Skills Development
2. Community Support
3. Women & Youth Empowerment
4. Livelihoods & Economic Empowerment
5. Humanitarian & Resilience
6. Institutional Development & Consultancy

Interaction idea:

- Large numbered list
- Hover/focus changes image
- Description appears dynamically
- Subtle image movement
- Mobile becomes accessible accordion/list

Do not use six identical cards.

---

# 18. HOMEPAGE SECTION 05 — IMPACT

Create a large editorial impact display.

Example:

```text
OUR IMPACT

10,000+
People reached

25+
Communities supported

1,500+
People trained

500+
Women & youth empowered
```

Only display substantiated figures.

Future functionality:

- Impact by country
- Impact by sector
- Impact over time
- Project-level metrics

---

# 19. HOMEPAGE SECTION 06 — MMT GROUP ECOSYSTEM

Present the relationship between organisations carefully.

Structure:

```text
MMT GROUP

MMT CARE
Australia
Care & Support Services

MMT ALLIANCE
Global
Procurement • Supply • Consultancy

MMT IMPACT
South Sudan
Development • Humanitarian • Community Impact
```

Important:

Do not imply that MMT Impact owns MMT Care or MMT Alliance unless legally accurate.

Use language such as:

- Part of the wider MMT Group
- A member of the MMT Group

only where legally appropriate.

Do not attribute:

- Revenue
- Employees
- Contracts
- Historical experience
- Capabilities
- Certifications

from one organisation to another unless the legal and contractual basis supports the claim.

---

# 20. HOMEPAGE SECTION 07 — HOW WE WORK

Use a visual process.

```text
01 — LISTEN
Understand local needs.

02 — PARTNER
Work with governments, UN agencies, NGOs,
institutions and communities.

03 — DESIGN
Develop evidence-based and locally appropriate solutions.

04 — DELIVER
Implement programmes through qualified teams and partners.

05 — MEASURE
Monitor outcomes, transparency and impact.

06 — SUSTAIN
Focus on solutions that continue beyond the initial project.
```

Use an animated horizontal timeline on desktop.

Use a vertical timeline on mobile.

---

# 21. HOMEPAGE SECTION 08 — FEATURED PROJECT

Show one major project as an editorial case study.

Structure:

```text
FEATURED PROJECT

Education & Skills Programme
Juba, South Sudan

SECTOR
Education

STATUS
Active

BENEFICIARIES
[verified number]

2026–2027
```

Use large photography.

CTA:

```text
View Project
```

---

# 22. HOMEPAGE SECTION 09 — STORIES

Three content categories:

```text
News
Field Stories
Impact Stories
```

Use editorial cards, but do not make them visually identical to every other site.

---

# 23. HOMEPAGE SECTION 10 — PARTNER CTA

Strong closing statement:

```text
LET'S BUILD
WHAT COMES NEXT.
```

CTA:

```text
Partner With Us
```

Secondary:

```text
Explore Our Work
```

---

# 24. NAVIGATION

Primary navigation:

```text
HOME

WHO WE ARE

WHAT WE DO

WHERE WE WORK

OUR IMPACT

PARTNERS & OPPORTUNITIES

NEWS & STORIES

GET INVOLVED

CONTACT
```

Primary CTA:

```text
Partner With Us
```

Desktop navigation should feel institutional and minimal.

Avoid excessive pill-shaped navigation.

Mobile navigation must be full-featured and accessible.

---

# 25. WHO WE ARE

Subpages:

```text
About MMT Impact
Mission & Vision
Our Values
Our Approach
Leadership
Governance
MMT Group
```

Content:

## Mission

To strengthen communities and create sustainable opportunities through education, empowerment, social support, livelihoods and inclusive development.

## Vision

A world where every community has the opportunity to thrive.

## Values

```text
Integrity
Impact
Inclusion
Partnership
Sustainability
```

---

# 26. WHAT WE DO

Pages:

```text
/programmes/education
/programmes/community-support
/programmes/women-youth
/programmes/livelihoods
/programmes/humanitarian
/programmes/consultancy
```

Every programme page should contain:

```text
Problem
Our approach
What we do
Who we serve
Geographic focus
Expected outcomes
Current projects
Impact numbers
Partners
CTA
```

---

# 27. WHERE WE WORK

Create an interactive map.

Initial MMT Impact presence:

```text
South Sudan
Country Office — Juba
```

Wider MMT Group presence:

```text
Australia — MMT Care
Kenya — MMT Alliance HQ
South Sudan — MMT Alliance / MMT Impact
Somalia — MMT Alliance
UAE — MMT Alliance
Other global locations
```

Do not imply that MMT Impact itself has offices in all locations.

## Map behaviour

Desktop:

- Interactive map
- Hover states
- Clickable countries
- Project markers
- Programme markers
- Country detail panel

Mobile:

- Map remains usable
- Provide list alternative
- Never make map the only way to access information

MapLibre can support interactive maps, feature querying, custom styles and camera movement. citeturn0search0turn0search1

---

# 28. SOUTH SUDAN PAGE

URL:

```text
/where-we-work/south-sudan
```

Hero:

```text
Building Stronger Communities
in South Sudan
```

Supporting copy:

MMT Impact's South Sudan work focuses on education, community support, livelihoods, youth and women empowerment, skills development, humanitarian action and institutional capacity building.

Sections:

```text
Our Presence
Our Programmes
Our Partners
Our Communities
Current Projects
Impact
Contact Our South Sudan Team
```

---

# 29. OUR IMPACT

URL:

```text
/impact
```

Create an actual impact dashboard.

Sections:

```text
Impact Overview
Impact by Country
Impact by Sector
Impact Over Time
Featured Projects
Impact Stories
Reports
```

Use data visualisation carefully.

Never create fake statistics.

---

# 30. PROJECT DATABASE

Every project should have a dedicated page.

Example:

```text
/projects/education-skills-juba
```

Project fields:

```text
Title
Country
Location
Sector
Donor / Partner
Start Date
End Date
Status
Budget (only where appropriate/public)
Beneficiaries
Description
Objectives
Activities
Outcomes
Gallery
Documents
Impact
Partners
```

Project metadata should be structured rather than embedded only in prose.

---

# 31. PROJECT PAGE DESIGN

Recommended layout:

```text
PROJECT HERO

Project title
Location
Sector
Status

↓
Project overview

↓
Large image

↓
Objectives

↓
Activities

↓
Timeline

↓
Results

↓
Impact metrics

↓
Gallery

↓
Partners

↓
Related projects

↓
Partner CTA
```

Use visual storytelling.

---

# 32. PARTNERS & OPPORTUNITIES

Primary URL:

```text
/partnerships
```

Sections:

```text
UN & Development Partnerships
Areas of Expertise
Supplier / Partner Registration
Current Opportunities
Consultancy Opportunities
Employment
Volunteer Opportunities
```

Areas of expertise:

- Education
- Community development
- Livelihoods
- Empowerment
- Capacity building
- Humanitarian response
- Consultancy

---

# 33. PARTNER APPLICATION

Form fields:

```text
Organisation
Country
Name
Position
Email
Partnership Type
Message
Upload capability/profile
```

Form security requirements:

- Server-side validation
- File-type validation
- File-size limits
- Malware scanning where available
- Rate limiting
- CAPTCHA/anti-bot protection
- Secure storage
- Access controls
- Audit logging
- Privacy notice
- Explicit consent where required

Do not store sensitive application information in public spreadsheets.

---

# 34. TRANSPARENCY & ACCOUNTABILITY

URL:

```text
/transparency
```

Include:

```text
Governance
Annual Reports
Financial Information
Policies
Safeguarding
Code of Conduct
Anti-Fraud & Anti-Corruption
Whistleblowing
Conflict of Interest
Procurement
Privacy
PSEA
Child Protection
```

As documents become available, provide downloadable PDFs.

---

# 35. RESOURCES

URL:

```text
/resources
```

Categories:

```text
Annual Reports
Programme Reports
Policy Documents
Research
Capability Statements
Strategic Plans
Financial Reports
Publications
```

This should function as an online institutional due-diligence room.

---

# 36. NEWS & STORIES

URL:

```text
/news
```

Categories:

```text
News
Field Stories
Impact Stories
Events
```

Each story should contain:

```text
Professional photography
Location
Date
Programme
Story
Impact
Related projects
Related programme
Author
```

SEO metadata must be generated automatically.

---

# 37. GET INVOLVED

Four primary pathways:

```text
Partner With Us
Support Our Work
Work With Us
Volunteer
```

Do not make donations the dominant call to action.

The strategic positioning is:

```text
Partner
Collaborate
Implement
Impact
```

rather than:

```text
Donate Now
```

---

# 38. CAREERS

URL:

```text
/careers
```

Categories:

```text
Current Vacancies
Internships
Consultancies
Volunteer Opportunities
```

Job fields:

```text
Position
Location
Department
Contract Type
Closing Date
Job Description PDF
Application
```

Application fields:

```text
CV
Cover Letter
Supporting Documents
```

Applications must be securely processed.

---

# 39. CONTACT

URL:

```text
/contact
```

Initial details:

```text
MMT Impact
South Sudan Country Office
Juba, South Sudan
```

Email structure:

```text
info@
partnerships@
programs@
southsudan@
careers@
finance@
procurement@
media@
```

Contact page:

- Address
- Email
- Phone
- Social links
- Contact form
- Map where appropriate

---

# 40. FOOTER

Footer should be substantial.

Columns:

```text
MMT IMPACT

Who We Are
About
Mission & Vision
Leadership
Governance
Our Approach

What We Do
Education
Community Support
Empowerment
Livelihoods
Humanitarian
Consultancy

Our Presence
South Sudan
MMT Group
Global Presence

Resources
Annual Reports
Publications
Policies
News
Careers

Get Involved
Partner With Us
Support Our Work
Volunteer
Careers

Contact
```

Footer statement:

```text
MMT Impact is part of the wider MMT Group.
```

Links:

```text
MMT Care
MMT Alliance
```

---

# 41. MMT GROUP PAGE

URL:

```text
/mmt-group
```

Visual concept:

```text
MMT GROUP

       │
 ┌─────┼─────┐
 │     │     │
CARE ALLIANCE IMPACT
 │     │     │
AU   GLOBAL  SOUTH SUDAN
```

Organisation profiles:

## MMT Care

Australia

Care & Support Services

## MMT Alliance

Kenya HQ / South Sudan / Somalia / UAE / Global

Procurement / Supply / Logistics / Consultancy

## MMT Impact

South Sudan

Development / Humanitarian / Empowerment

---

# 42. INSTITUTIONAL CAPACITY PAGE

URL:

```text
/institutional-capacity
```

Headline:

```text
Strengthened by a wider ecosystem of expertise.
```

Explain:

MMT Impact combines local knowledge and community presence with access to wider expertise across the MMT Group in care and support services, procurement, supply chain, consultancy, finance, governance and operational management.

Carefully distinguish the legal identities and capabilities of each organisation.

---

# 43. ANIMATION SYSTEM

Animations should be intentional.

## Hero

- Slow image scale
- Text reveal
- Coordinate fade
- CTA reveal

## Section reveals

Use:

- Fade + translate
- Clip-path image reveal
- Text mask reveal
- Small directional movement

## Statistics

Animate numbers when entering viewport.

## Programme section

Use:

- Hover image transitions
- Typography movement
- Active indicator

## Timeline

Use:

- Progress line
- Step activation
- Scroll-linked progression

## Map

Use:

- Camera fly-to
- Marker reveal
- Country highlight

## Navigation

Use:

- Subtle transition
- Active section indicator
- Smooth menu animation

Do not animate every element.

---

# 44. GSAP RULES

Use GSAP only where CSS cannot reasonably achieve the desired result.

Preferred:

```text
GSAP
ScrollTrigger
```

Avoid animation logic spread throughout components.

Create central animation utilities:

```text
src/lib/animations/
├── reveal.ts
├── hero.ts
├── parallax.ts
├── counters.ts
├── timeline.ts
└── page-transitions.ts
```

Always clean up animations when necessary.

Respect:

```css
prefers-reduced-motion
```

ScrollTrigger supports responsive setups through matchMedia and optimized scroll handling, making it suitable for this type of responsive storytelling. citeturn1search0

---

# 45. ASTRO VIEW TRANSITIONS

Use Astro's view transition system for:

- Page navigation
- Shared image transitions
- Project → project navigation
- News → article navigation
- Programme → project navigation

Do not turn the entire website into a heavy SPA.

The default architecture should remain Astro's HTML-first multi-page model.

---

# 46. PERFORMANCE

Target:

```text
LCP < 2.5s
CLS < 0.1
INP < 200ms
```

Targets should be measured rather than assumed.

Rules:

- Optimise all images.
- Avoid shipping large JS bundles.
- Keep most components server-rendered.
- Use islands only where interaction requires JavaScript.
- Lazy-load below-the-fold media.
- Preload critical hero media selectively.
- Avoid unnecessary third-party scripts.
- Avoid autoplay video on constrained mobile connections.
- Use responsive image sizes.
- Avoid layout shifts.
- Reserve image dimensions.
- Compress fonts.
- Subset fonts where appropriate.

---

# 47. RESPONSIVE DESIGN

Do not simply stack desktop components.

Design separately for:

```text
Mobile
Tablet
Desktop
Large Desktop
```

## Mobile priorities

- Clear navigation
- Strong typography
- Fast imagery
- Readable content
- Touch targets
- Accessible forms
- Map alternative
- No horizontal overflow

## Desktop priorities

- Editorial compositions
- Asymmetric grids
- Large imagery
- Scroll storytelling
- Interactive map
- Large typography

---

# 48. ACCESSIBILITY

Target WCAG 2.2 AA.

Requirements:

- Semantic HTML
- Proper heading hierarchy
- Keyboard navigation
- Visible focus states
- Accessible forms
- ARIA only where necessary
- Alternative text
- Captions/transcripts for meaningful video
- Sufficient colour contrast
- Reduced-motion support
- No keyboard traps
- Accessible mobile navigation
- Accessible map alternative
- Screen-reader labels
- Descriptive links
- Error messaging
- Accessible PDFs where possible

Animations must never be the only way to communicate information.

---

# 49. SEO

Build SEO from day one.

Target themes include:

```text
Development organisation South Sudan
NGO South Sudan
Humanitarian organisation South Sudan
Community development South Sudan
Education programs South Sudan
Youth empowerment South Sudan
Women empowerment South Sudan
Livelihood programs South Sudan
Development consultancy South Sudan
Humanitarian programs Juba
```

Do not keyword stuff.

Every page should have:

```text
Unique title
Unique meta description
Canonical URL
Open Graph metadata
Twitter/X metadata
Structured data where appropriate
Semantic headings
Optimised images
Descriptive alt text
Internal links
Breadcrumbs where useful
```

---

# 50. STRUCTURED DATA

Use schema.org where appropriate.

Potential types:

```text
Organization
NGO
Article
NewsArticle
Event
JobPosting
BreadcrumbList
Person
WebSite
WebPage
```

Do not create structured data for facts that are not actually present.

---

# 51. URL STRUCTURE

Recommended:

```text
/
 /who-we-are
 /who-we-are/mission
 /who-we-are/values
 /who-we-are/approach
 /who-we-are/leadership
 /who-we-are/governance
 /who-we-are/mmt-group

 /what-we-do
 /what-we-do/education
 /what-we-do/community-support
 /what-we-do/women-youth
 /what-we-do/livelihoods
 /what-we-do/humanitarian
 /what-we-do/consultancy

 /where-we-work
 /where-we-work/south-sudan

 /impact
 /impact/projects
 /impact/projects/[slug]
 /impact/stories

 /partnerships
 /partnerships/current-opportunities
 /partnerships/supplier-registration
 /partnerships/consultant-registration

 /news
 /news/[slug]

 /get-involved
 /get-involved/partner
 /get-involved/support
 /get-involved/volunteer

 /careers
 /careers/[slug]

 /resources
 /resources/reports
 /resources/policies
 /resources/publications

 /contact
```

---

# 52. SITEMAP

Final sitemap:

```text
HOME
│
├── WHO WE ARE
│   ├── About MMT Impact
│   ├── Mission & Vision
│   ├── Our Values
│   ├── Our Approach
│   ├── Leadership
│   ├── Governance
│   └── MMT Group
│
├── WHAT WE DO
│   ├── Education & Skills
│   ├── Community Support
│   ├── Women & Youth Empowerment
│   ├── Livelihoods & Economic Empowerment
│   ├── Humanitarian & Resilience
│   └── Institutional Development & Consultancy
│
├── WHERE WE WORK
│   ├── South Sudan
│   ├── Country Programmes
│   └── Global MMT Group Presence
│
├── OUR IMPACT
│   ├── Impact Dashboard
│   ├── Projects
│   ├── Impact Stories
│   └── Reports
│
├── PARTNERS & OPPORTUNITIES
│   ├── Partner With Us
│   ├── UN & Development Partners
│   ├── Supplier Registration
│   ├── Consultant Registration
│   └── Current Opportunities
│
├── NEWS & STORIES
│   ├── News
│   ├── Field Stories
│   └── Events
│
├── GET INVOLVED
│   ├── Partner
│   ├── Support Our Work
│   ├── Volunteer
│   └── Careers
│
├── RESOURCES
│   ├── Annual Reports
│   ├── Policies
│   ├── Publications
│   └── Downloads
│
└── CONTACT
```

---

# 53. SECURITY

Treat the website as an institutional system.

Requirements:

```text
HTTPS
Secure hosting
Firewall / WAF
Strong admin authentication
2FA for CMS users
Role-based access
Secure forms
Rate limiting
Bot protection
Secure file uploads
Malware scanning
Regular backups
Dependency updates
Security headers
CSP
HSTS
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
```

Do not expose secrets in the frontend.

Environment variables:

```text
.env
.env.local
```

must never be committed.

---

# 54. CONTENT SECURITY POLICY

Implement a restrictive CSP appropriate to the actual integrations.

Do not blindly copy a permissive CSP.

Review:

- Map provider
- CMS
- analytics
- forms
- fonts
- images
- video
- API endpoints

Only allow required origins.

---

# 55. FORMS AND APPLICATION SECURITY

Forms include:

```text
Contact
Partnership
Supplier registration
Consultant registration
Careers
Volunteer
General enquiry
```

Requirements:

- CSRF protection where applicable
- Rate limiting
- Validation
- Sanitisation
- File validation
- File size limits
- Secure object storage
- Access controls
- Privacy notice
- Consent
- Audit trail
- Email notifications
- Structured backend storage

Never expose uploaded CVs publicly.

---

# 56. ANALYTICS

Implement privacy-conscious analytics.

Track:

```text
Page views
Traffic source
Country
Programme views
Project views
Partner CTA clicks
Contact submissions
Job application starts
Resource downloads
Report downloads
Map interactions
```

Avoid collecting unnecessary personal information.

---

# 57. ADMIN DASHBOARD / FUTURE BACKEND

Leadership should eventually see:

```text
Website visitors
Countries
Most viewed programmes
Partnership enquiries
Job applications
Supplier registrations
Newsletter subscribers

Projects
News
Reports
Jobs
Leads
Partners
Donors
NGOs
UN
Government
Suppliers
```

---

# 58. CRM FLOW

Future integration:

```text
WEBSITE
   ↓
CRM
   ↓
PARTNERSHIP LEAD
   ↓
MMT IMPACT TEAM
   ↓
OPPORTUNITY
   ↓
PROPOSAL
   ↓
PROJECT
   ↓
IMPACT REPORTING
```

Partnership enquiries should not disappear into individual inboxes without organisational tracking.

---

# 59. EMAIL STRUCTURE

Recommended:

```text
info@mmtimpact.org
partnerships@mmtimpact.org
programs@mmtimpact.org
southsudan@mmtimpact.org
careers@mmtimpact.org
finance@mmtimpact.org
procurement@mmtimpact.org
media@mmtimpact.org
```

Exact domain and addresses must be confirmed before implementation.

---

# 60. SOCIAL MEDIA

Prioritise:

```text
LinkedIn
Facebook
Instagram
YouTube
```

LinkedIn should receive particular attention because the organisation's target audience includes institutional partners, governments, NGOs and development organisations.

---

# 61. DOCUMENT MANAGEMENT

Resources should support:

- PDF uploads
- Versioning
- Publication date
- Category
- Author/owner
- Description
- Download
- Related programme
- Related project

Potential categories:

```text
Annual Reports
Programme Reports
Policies
Research
Capability Statements
Strategic Plans
Financial Reports
Publications
```

---

# 62. CONTENT GOVERNANCE

Every published claim should have an owner.

Sensitive claims include:

- Beneficiary counts
- Project budgets
- Donor relationships
- UN relationships
- Government relationships
- Certifications
- Locations
- Staff numbers
- Financial information
- Organisational history
- MMT Group capabilities

Do not invent or extrapolate institutional credentials.

---

# 63. LEGAL / BRAND SAFETY

Never imply:

- A partnership that does not exist.
- UN affiliation without evidence.
- Government endorsement without evidence.
- Donor support without evidence.
- Ownership relationships without legal confirmation.
- Group-wide experience as MMT Impact experience without legal basis.

Partner logos should only be displayed when the relationship exists and permission/usage rights are established.

---

# 64. PHOTOGRAPHY RULES

Prefer:

1. Authentic MMT Impact imagery.
2. Properly licensed documentary imagery.
3. High-quality stock only when necessary.

Avoid:

- Overly staged corporate photos
- Generic smiling office teams
- Artificial "African poverty" imagery
- Exploitative photography
- Images without appropriate consent

Images should preserve dignity.

---

# 65. FUTURE INTERNATIONALISATION

Initial:

```text
English
```

Future:

```text
Arabic
```

Potentially add local-language content for programme-specific needs later.

Architecture should allow:

```text
/i18n/
```

or CMS-localised fields.

Do not launch with unnecessary languages.

---

# 66. DEVELOPMENT WORKFLOW

## Phase 1 — Foundation

Create:

- Astro project
- TypeScript
- Tailwind
- Design tokens
- Base layouts
- Global typography
- Header
- Footer
- SEO utilities
- Image system

## Phase 2 — Visual system

Create:

- Hero
- Editorial sections
- Image reveal
- Typography system
- Impact metrics
- CTA system
- Dark sections
- Grid system

## Phase 3 — Homepage

Build complete homepage.

## Phase 4 — Core pages

Build:

- Who We Are
- What We Do
- Where We Work
- Impact
- Partnerships
- News
- Careers
- Resources
- Contact

## Phase 5 — Interactive systems

Build:

- Map
- Project filtering
- Programme navigation
- Impact visualisation
- Search if required

## Phase 6 — CMS

Connect structured content.

## Phase 7 — Security

Implement:

- Headers
- CSP
- Forms
- Rate limiting
- Secure uploads
- Authentication

## Phase 8 — SEO

Implement:

- Metadata
- Sitemap
- Robots
- Schema
- Canonicals
- Open Graph
- Internal linking

## Phase 9 — Performance

Run:

- Lighthouse
- PageSpeed
- WebPageTest
- Accessibility checks
- Mobile testing

## Phase 10 — Launch

Validate:

- DNS
- SSL
- Analytics
- Forms
- Search indexing
- Sitemap
- Robots
- 404
- Redirects
- Social previews

---

# 67. DESIGN QA — ANTI-GENERIC TEST

Before completing a page, ask:

### Question 1

Could this page appear on 500 other Tailwind websites?

If yes:

**REDESIGN IT.**

### Question 2

Are more than three consecutive sections using cards?

If yes:

**REDESIGN IT.**

### Question 3

Does every section have:

```text
Heading
Paragraph
Cards
Button
```

If yes:

**REDESIGN IT.**

### Question 4

Is the page mostly centred?

If yes:

**Introduce stronger editorial composition.**

### Question 5

Are typography and photography doing enough visual work?

If no:

**REDESIGN IT.**

### Question 6

Are animations decorative rather than meaningful?

If yes:

**REMOVE THEM.**

### Question 7

Does it feel like a serious international organisation?

If no:

**REDESIGN IT.**

---

# 68. DESIGN QUALITY SCORE

Every major page should be evaluated:

```text
Visual originality              /10
Typography                      /10
Composition                     /10
Photography                     /10
Spacing                         /10
Hierarchy                       /10
Animation                       /10
Responsive design               /10
Institutional credibility      /10
Accessibility                   /10
Performance                     /10
```

Minimum target:

```text
Average ≥ 8/10
```

Any category below 7 should trigger review.

---

# 69. AI DEVELOPMENT RULES

If an AI coding agent is building this website:

## DO

- Study the design constitution before coding.
- Build the design system first.
- Create reusable components.
- Think visually before implementing sections.
- Use the actual MMT Impact content.
- Preserve institutional accuracy.
- Use real data only.
- Keep content and presentation separate.
- Test mobile independently.
- Review the entire page visually after implementation.
- Refactor repetitive components.
- Maintain accessibility.
- Maintain performance.

## DO NOT

- Generate a generic template.
- Add random gradients.
- Use excessive rounded cards.
- Invent statistics.
- Invent partners.
- Invent donors.
- Invent UN relationships.
- Invent offices.
- Invent projects.
- Attribute MMT Group credentials incorrectly.
- Add animation everywhere.
- Make everything a card.
- Use filler text.
- Replace real content with lorem ipsum.
- Create fake testimonials.
- Create fake impact metrics.

---

# 70. RECOMMENDED PROJECT FILES

```text
/
├── .astro/
├── .github/
│   └── workflows/
├── public/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   └── documents/
├── src/
│   ├── components/
│   ├── content/
│   ├── data/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
├── scripts/
├── astro.config.mjs
├── tailwind.config.*
├── tsconfig.json
├── package.json
├── README.md
└── DESIGN_SYSTEM.md
```

---

# 71. RECOMMENDED NPM DEPENDENCIES

Core:

```bash
npm install astro
npm install typescript
npm install tailwindcss
```

Animation:

```bash
npm install gsap
```

Map:

```bash
npm install maplibre-gl
```

Icons:

```bash
npm install lucide
```

Additional dependencies should only be added when they solve a real requirement.

Avoid dependency bloat.

---

# 72. MAP IMPLEMENTATION NOTES

MapLibre is client-side and should therefore be isolated as an Astro island/component.

Suggested:

```text
src/components/geography/CountryMap.astro
src/components/geography/CountryMap.ts
```

Load the map only when required.

Avoid loading MapLibre on pages that do not contain the map.

For strict CSP deployments, handle MapLibre's worker configuration appropriately.

MapLibre's current documentation notes that its v6 distribution is ESM-based and provides specific worker configuration guidance for bundlers and CSP environments. citeturn0search8turn0search0

---

# 73. SEO PAGE TEMPLATE

Each page should define:

```ts
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: string;
}
```

Generate:

```html
<title>
<meta name="description">
<link rel="canonical">
<meta property="og:title">
<meta property="og:description">
<meta property="og:image">
<meta property="og:type">
<meta name="twitter:card">
```

---

# 74. IMAGE COMPONENT REQUIREMENT

Create one central image component.

It should handle:

```text
src
alt
width
height
sizes
loading
decoding
priority
focal point
caption
credit
```

Never use large original images directly without optimisation.

---

# 75. ACCESSIBLE INTERACTIVE STATES

Every interactive component needs:

```text
Default
Hover
Focus
Active
Disabled
Loading
Error
```

Do not rely exclusively on hover.

All important interactions must work with:

- Keyboard
- Touch
- Screen readers

---

# 76. MOBILE NAVIGATION

Mobile menu should:

- Trap focus appropriately.
- Provide clear close control.
- Support Escape.
- Maintain scroll behaviour.
- Prevent background interaction when open.
- Have large touch targets.
- Preserve the Partner With Us CTA.
- Maintain hierarchy of primary and secondary navigation.

---

# 77. 404 PAGE

Create a designed 404 experience.

Example concept:

```text
THIS PATH
DOESN'T EXIST.

But the work continues.

Back to MMT Impact
Explore Our Work
```

Use a subtle geographic visual.

Do not use a generic framework 404 page.

---

# 78. ERROR STATES

Create designed states for:

- Form error
- Form success
- Search empty state
- Project not found
- News not found
- CMS unavailable
- Map unavailable

Provide text alternatives.

---

# 79. LOADING STATES

Avoid excessive skeleton loaders.

Use:

- Image placeholders
- Subtle fades
- Progressive content
- Minimal loading indicators

Do not delay useful content simply to show an animation.

---

# 80. PERFORMANCE BUDGET

Set practical budgets.

Example:

```text
Initial JS:
Keep as low as reasonably possible.

Third-party scripts:
Minimal.

Images:
Optimised and responsive.

Fonts:
Limited families and weights.

Animations:
GPU-friendly transforms/opacity where possible.

Maps:
Lazy-loaded.

Video:
Lazy-loaded unless critical.
```

---

# 81. LAZY LOADING

Lazy-load:

- Below-fold images
- Maps
- Video
- Heavy interactive components
- Non-critical third-party scripts

Do not lazy-load the primary hero image if it is the LCP element.

---

# 82. PREFERS-REDUCED-MOTION

All major animations must have a reduced-motion path.

For reduced motion:

```text
Remove parallax
Remove aggressive transforms
Remove pinned sequences
Reduce transition duration
Keep essential state changes visible
```

Astro's transition system also accounts for reduced-motion preferences. citeturn0search3

---

# 83. CONTENT PRINCIPLES

The website must communicate with confidence without exaggeration.

Use:

- Clear language
- Evidence
- Specificity
- Human stories
- Geographic context
- Measurable outcomes
- Transparent documentation

Avoid:

- Empty corporate jargon
- "Changing the world" clichés
- Unsupported superlatives
- Fake impact
- Excessive emotional manipulation

---

# 84. FINAL USER EXPERIENCE

The desired visitor journey:

```text
LAND

↓

WHO ARE THEY?

MMT IMPACT

↓

WHAT DO THEY DO?

Development
Humanitarian
Education
Empowerment
Livelihoods
Community Support

↓

WHERE?

South Sudan

↓

CAN THEY DELIVER?

Programmes
Projects
Teams
Partners
Institutional Capacity

↓

DO THEY MEASURE IMPACT?

Impact Dashboard
Projects
Reports

↓

ARE THEY TRANSPARENT?

Governance
Policies
Reports
Safeguarding
Accountability

↓

CAN WE WORK WITH THEM?

PARTNER WITH US
```

---

# 85. FINAL DEVELOPER DIRECTIVE

Build MMT Impact as a **premium institutional digital experience**, not as a generic NGO website.

The visual identity must be:

```text
HUMAN
+
INSTITUTIONAL
+
EDITORIAL
+
AFRICAN
+
INTERNATIONAL
+
DIGITAL
+
RESTRAINED
+
CONFIDENT
```

The website should feel contemporary without becoming trendy.

It should feel futuristic without becoming sci-fi.

It should feel African without relying on stereotypes.

It should feel humanitarian without becoming visually predictable.

It should feel institutional without becoming cold.

It should feel premium without becoming inaccessible.

The most important design principle is:

> **Do not let the technology become the visual identity.**

Astro, GSAP, MapLibre and Tailwind are implementation tools.

The final product should be judged by:

**storytelling + visual hierarchy + institutional credibility + usability + performance + accessibility.**

---

# 86. ACCEPTANCE CRITERIA

The project is not complete until:

- [ ] Homepage is fully responsive.
- [ ] Navigation is accessible.
- [ ] Mobile navigation is complete.
- [ ] Design system is implemented.
- [ ] Typography is consistent.
- [ ] Brand colours are implemented.
- [ ] Hero is visually distinctive.
- [ ] No generic card-grid sections dominate.
- [ ] Photography is optimised.
- [ ] Impact section is data-driven.
- [ ] Map is interactive.
- [ ] Map has an accessible alternative.
- [ ] Projects are structured.
- [ ] Programmes are structured.
- [ ] News is structured.
- [ ] Reports are structured.
- [ ] Careers are structured.
- [ ] Forms are secure.
- [ ] CMS architecture is ready.
- [ ] SEO metadata is implemented.
- [ ] Sitemap is generated.
- [ ] Robots.txt is configured.
- [ ] Canonicals are implemented.
- [ ] Open Graph metadata works.
- [ ] Structured data is implemented where appropriate.
- [ ] 404 page is designed.
- [ ] Error states are designed.
- [ ] Reduced motion is supported.
- [ ] Keyboard navigation works.
- [ ] Lighthouse/performance testing completed.
- [ ] Accessibility testing completed.
- [ ] Mobile testing completed.
- [ ] No fabricated statistics.
- [ ] No fabricated partnerships.
- [ ] No unsupported institutional claims.
- [ ] MMT Care / MMT Alliance / MMT Impact relationships are represented accurately.
- [ ] Final visual review passes the Anti-Generic Test.

---

# 87. SOURCE / BUSINESS REQUIREMENT BASIS

This specification is based on the supplied MMT Impact website blueprint, including the requested brand positioning, sitemap, programme architecture, MMT Group relationship, South Sudan presence, impact dashboard, project system, partnerships, governance, resources, careers, forms, security, SEO, photography and design direction.

The supplied blueprint specifically calls for a premium international organisation aesthetic rather than a basic NGO template, with large photography, whitespace, strong typography, subtle animations, interactive mapping, impact statistics and professional project pages.

All factual organisational claims must be validated against the final legal and operational structure before publication.

---

# END OF MASTER SPECIFICATION
