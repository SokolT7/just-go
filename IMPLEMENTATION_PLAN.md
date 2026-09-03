# Just Go — Implementation Plan

**Project:** Marketing website for Just Go, a sales & business development consultancy
**Principals:** Berislav Sokač (Founder, CEO — Sales & BD Consultant) · Odin Sokač (Co-Founder, Brand & Creative)
**Base:** Zagreb, Croatia · Clients worldwide
**Status:** Built — phases 1–7 complete, pending client inputs and deploy (see §16)
**Companion document:** [Just Go Website Blueprint](https://claude.ai/code/artifact/644c7697-4513-4277-ae16-59014ca2099d) (research, strategy, page architecture)

This document is the build spec. The blueprint says *what* and *why*; this says *how*.

---

## 1. Locked decisions

| Decision | Choice | Consequence |
|---|---|---|
| Client proof | None available yet | Proof components ship fallback-aware; real proof is a data edit later |
| CMS | None | Markdown in repo; both languages diffable side by side |
| Contact method | Form only, no calendar | Form gets 4 mitigations; appears site-wide, not just on Contact |
| Languages | English + Croatian at launch | Dedicated localization phase; ~40% of remaining effort |
| Framework | Astro 5, static output | Best default Core Web Vitals; near-zero JS |
| Hosting | Netlify | Netlify Forms removes the need for a backend |

### Positioning decisions carried from the blueprint

- **Brand thesis:** *Most sales problems are not strategy problems — they are starting problems.* Grounded in Berislav's 3 km → six World Marathon Majors arc and Odin's guitar-at-twelve → Memphis arc.
- **Service list cut from 10 to 3** productized engagements. Remainder becomes a single "also engaged for" line.
- **Odin framed explicitly** as Co-Founder, Brand & Creative — credentials led, age not hidden.
- **Eighth page added:** Insights, for rankable content beyond the brand name.

---

## 2. Stack

| Layer | Choice | Notes |
|---|---|---|
| Framework | Astro 5 (`output: 'static'`) | Islands only where genuinely interactive |
| Styling | Tailwind + CSS custom properties | Tokens defined once in `styles/tokens.css` |
| Images | `astro:assets` | Auto AVIF/WebP, responsive srcset, dimensions set |
| Fonts | `@fontsource-variable/*` | Self-hosted, subset, preloaded — no third-party request |
| Content | Content collections (Markdown + Zod) | Type-safe, per-locale |
| i18n | Astro built-in i18n routing | `defaultLocale: 'en'`, `prefixDefaultLocale: false` |
| Forms | Netlify Forms + honeypot | No backend, spam filtering, email notification |
| Sitemap | `@astrojs/sitemap` with i18n config | Emits hreflang alternates |
| Analytics | Plausible | Cookieless → no consent banner required |
| Hosting | Netlify | CDN, auto HTTPS, deploy previews |

**Explicitly not used:** Next.js (over-tooled for 8 content pages), any chatbot, any carousel library, any scroll-animation library.

---

## 3. Project structure

```
just-go/
├── public/
│   ├── robots.txt
│   ├── llms.txt
│   ├── favicon.svg
│   └── og/                          # generated share images, per page per locale
├── src/
│   ├── assets/
│   │   └── images/
│   │       ├── hero-mountains.avif  # existing 3000×1875 source
│   │       ├── people/
│   │       ├── run-croatia/
│   │       └── odin/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.astro         # sticky, with CTA button
│   │   │   ├── Nav.astro
│   │   │   ├── LangSwitch.astro     # maps to equivalent page, not homepage
│   │   │   └── Footer.astro
│   │   ├── sections/
│   │   │   ├── Hero.astro
│   │   │   ├── ProofBar.astro
│   │   │   ├── ProblemNamed.astro
│   │   │   ├── EngagementCards.astro
│   │   │   ├── FoundersSplit.astro
│   │   │   ├── DayInTheLife.astro
│   │   │   ├── Milestones.astro
│   │   │   ├── RunCroatiaPanel.astro
│   │   │   └── CtaBand.astro        # carries the inline short form
│   │   ├── proof/
│   │   │   ├── LogoWall.astro       # falls back to StatRow
│   │   │   ├── StatRow.astro        # the always-available fallback
│   │   │   ├── TestimonialCard.astro
│   │   │   └── CaseStudy.astro
│   │   ├── forms/
│   │   │   ├── ContactForm.astro    # 4 fields, full version
│   │   │   ├── ShortForm.astro      # 2 fields, for CtaBand
│   │   │   ├── WhatHappensNext.astro
│   │   │   └── SuccessState.astro   # inline, no redirect
│   │   ├── ui/
│   │   │   ├── Button.astro
│   │   │   ├── PullQuote.astro
│   │   │   ├── SectionHeading.astro
│   │   │   ├── Faq.astro            # renders + emits FAQPage schema
│   │   │   └── Strata.astro         # ridgeline divider motif
│   │   └── seo/
│   │       ├── BaseHead.astro
│   │       ├── Schema.astro
│   │       └── Hreflang.astro
│   ├── content/
│   │   ├── config.ts
│   │   ├── engagements/{en,hr}/*.md
│   │   ├── people/{en,hr}/*.md
│   │   └── insights/{en,hr}/*.md
│   ├── data/
│   │   ├── proof.ts                 # single source for every proof slot
│   │   ├── milestones.ts
│   │   └── dayInTheLife.ts
│   ├── i18n/
│   │   ├── ui.ts                    # interface strings
│   │   ├── routes.ts                # EN↔HR slug map
│   │   └── utils.ts                 # getLocale, t(), localizePath, getAlternate
│   ├── layouts/
│   │   ├── Base.astro
│   │   ├── Page.astro
│   │   └── Article.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── services.astro
│   │   ├── about.astro
│   │   ├── team.astro
│   │   ├── mission.astro
│   │   ├── clients.astro
│   │   ├── contact.astro
│   │   ├── privacy.astro
│   │   ├── terms.astro
│   │   ├── 404.astro
│   │   ├── insights/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   └── hr/                      # mirror, localized slugs
│   └── styles/
│       ├── tokens.css
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
└── netlify.toml
```

---

## 4. Design tokens

All colour sampled from `Hero-background.avif`. No invented brand colours.

```css
:root {
  /* Palette — from the photograph */
  --dawn-navy:  #0E1C26;   /* sky at top of frame — grounds, headers, footers */
  --ridge:      #2E4657;   /* mid-ground ridgelines — secondary surfaces */
  --mist:       #93AEC0;   /* valley haze — rules, muted type */
  --horizon:    #C87F35;   /* the warm glow — THE accent, CTAs only */
  --snowlight:  #F2F5F7;   /* snow-lit peaks — page ground */
  --surface:    #FFFFFF;

  /* Derived */
  --ink-mid:    #2E4657;
  --ink-soft:   #5A7080;
  --rule:       #CFDBE2;
  --horizon-text: #8F5A21;  /* AA-safe accent text on light grounds */
  --horizon-wash: #F6EADC;
}
```

**Contrast rule for the accent — non-negotiable:**
`--horizon` (#C87F35) with white text is 3.4:1 and **fails** WCAG AA for body text.
Primary buttons are therefore **amber background + dawn-navy text** (#0E1C26 on #C87F35 = 5.0:1, passes AA).
Never white-on-amber. Use `--horizon-text` for accent-coloured text on light grounds.

Dark theme redefines the same token names — never define a colour only inside a media query.

### Type scale

| Role | Face | Size |
|---|---|---|
| Display XL (hero) | Archivo 700 | `clamp(2.75rem, 6vw, 4.5rem)` |
| Display L | Archivo 700 | `clamp(2rem, 4vw, 3rem)` |
| H2 | Archivo 700 | `clamp(1.6rem, 3vw, 2.25rem)` |
| H3 | Archivo 600 | `1.25rem` |
| Body large | Newsreader 400 | `1.1875rem` / 1.65 |
| Body | Newsreader 400 | `1.0625rem` / 1.7 |
| Small | Newsreader 400 | `0.9375rem` |
| Label / data | IBM Plex Mono 500 | `0.75rem`, uppercase, `0.14em` tracking |

Measure capped at 68ch for running text. `text-wrap: balance` on all headings.

### Motion

Restrained. A single orchestrated hero load sequence; hover states with intent; nothing animating in from `opacity: 0` on scroll — the page must be fully readable the instant it lands. Full `prefers-reduced-motion` support.

---

## 5. Bilingual architecture

### Config

```js
// astro.config.mjs
i18n: {
  defaultLocale: 'en',
  locales: ['en', 'hr'],
  routing: { prefixDefaultLocale: false }
}
```

English at root, Croatian at `/hr/`.

### Slug map — `src/i18n/routes.ts`

| English | Croatian |
|---|---|
| `/` | `/hr/` |
| `/services` | `/hr/usluge` |
| `/about` | `/hr/o-nama` |
| `/team` | `/hr/tim` |
| `/mission` | `/hr/misija` |
| `/clients` | `/hr/klijenti` |
| `/contact` | `/hr/kontakt` |
| `/insights` | `/hr/clanci` |
| `/insights/[slug]` | `/hr/clanci/[slug]` |
| `/privacy` | `/hr/privatnost` |
| `/terms` | `/hr/uvjeti` |

> **Open item:** Berislav to confirm these Croatian slugs before Phase 1.

### Rules

- Interface strings (nav, buttons, form labels, form errors) live in `i18n/ui.ts`, keyed by locale.
- Long-form copy lives as per-locale Markdown in `content/*/{en,hr}/`.
- Each content pair shares a `translationKey` in frontmatter so hreflang and the language switcher can resolve equivalents.
- **The language switcher navigates to the equivalent page, never the homepage.** This is wrong on most bilingual sites; it is a hard requirement here.
- Every page emits reciprocal `hreflang` for `en` and `hr` plus `x-default` → English.
- Schema is emitted per locale with `inLanguage` set correctly.
- Sitemap carries alternates for both locales.

### Croatian copy process

I draft. **Berislav rewrites in his own voice — not corrects.** We implement his version. Translated-sounding sales copy is where credibility leaks with a domestic buyer, and this is the task most likely to delay launch.

---

## 6. Content model

```ts
// src/content/config.ts (shape, not final code)

engagements: {
  title, slug, order, translationKey,
  forWho, whatWeFix,
  howItRuns: [{ phase, description, duration }],
  outcomes: string[],
  timeline, proofRef?
}

people: {
  name, role, slug, order, translationKey,
  photo, linkedin, externalSite?,
  shortBio, longBio,       // longBio in body
  credentials: string[],
  pullQuote?
}

insights: {
  title, description, publishDate, author,
  tags, translationKey, ogImage?
}
```

---

## 7. Proof slot architecture

Because there is no client proof yet, every proof surface reads from one file and degrades gracefully.

```ts
// src/data/proof.ts
export const logos: Logo[] = [];              // empty → LogoWall renders <StatRow />
export const testimonials: Testimonial[] = []; // empty → testimonial blocks omitted entirely
export const caseStudies: CaseStudy[] = [];    // empty → Clients page leads with Run Croatia

export const stats: Stat[] = [                 // ALWAYS populated — the fallback
  { value: '25+',  label: 'years in sales & business development' },
  { value: '25+',  label: 'clients advised' },        // CONFIRM: 20+ or 25+
  { value: '120',  label: 'events delivered in 10 years' },
  { value: '6/6',  label: 'World Marathon Majors completed' },
];
```

**Rules:**
- A proof component never renders an empty shell. Empty data means the fallback, or the section is omitted.
- `Review`/`Testimonial` schema is emitted **only** when `testimonials.length > 0`. Never fabricate.
- Adding real proof later must be a data edit only — zero layout work. This is the acceptance test for the component design.

---

## 8. Forms

Netlify Forms, two variants, both with a honeypot field.

**`ContactForm` (Contact page) — 4 fields, no more:**
1. Name
2. Email
3. Company
4. What are you trying to fix? *(textarea)*

**`ShortForm` (CtaBand, every page) — 2 fields:** Email + one-line question.

### Requirements

- Directly above the fields: `LogoWall` (or `StatRow` fallback) + one testimonial when available. This placement is the documented 3% → 5% capture lift — it is a mechanism, not decoration.
- Beside the form: `WhatHappensNext` — *you send this → Berislav replies the same working day → 30-minute call, no charge.* With no calendar, this block does the reassuring.
- Submit button says what happens: **"Tell us what you're working on"** — never "Submit".
- Response promise stated **at the button**, not in the footer.
- On success: inline `SuccessState` replaces the form in place. **No redirect to a thank-you page.**
- Separate named Netlify forms per locale so enquiries arrive tagged by language.
- Client-side validation with accessible inline errors; server-side spam filtering via Netlify.
- Plain `mailto:` and both LinkedIn profiles visible on Contact — some senior buyers will not fill in a form.

---

## 9. SEO & AEO

### Per page, per locale
- Unique hand-written `<title>` and meta description — written for click-through, not keyword density
- One `<h1>`, genuine heading hierarchy beneath
- Descriptive alt text on every image
- Open Graph + Twitter card with a per-page, per-locale share image

### Schema set

| Type | Where | Condition |
|---|---|---|
| `Organization` | Site-wide | `sameAs` → both LinkedIn profiles, odins.show, runcroatia.hr |
| `ProfessionalService` | Home, Services | `areaServed: Worldwide`, Zagreb address |
| `Person` ×2 | About, Team | Credentials, roles, profile links |
| `Service` ×3 | Services | One per engagement |
| `FAQPage` | Services, Contact | The block AI Overviews and PAA quote |
| `Article` + `BreadcrumbList` | Insights | Author, dates |
| `Review` | Clients | **Only once real attributed testimonials exist** |

### Answer-engine optimisation
- Open key sections with a direct, self-contained answer sentence before elaborating
- FAQ answers written as complete standalone statements
- Consistent entity language across site, both LinkedIn profiles, and Google Business Profile
- `llms.txt` summarising who Just Go is and what it does
- **Google Business Profile for Zagreb — non-negotiable**, strongest single input to local AI search

### Files
`sitemap.xml` (with alternates) · `robots.txt` · `llms.txt` · canonical tags on every page

---

## 10. Performance budget

| Metric | Target |
|---|---|
| Lighthouse (all 4 categories, mobile) | ≥ 95 |
| LCP (mobile, 4G) | < 2.0s |
| CLS | < 0.05 |
| INP | < 200ms |
| JS shipped, Home | ≤ 15 KB gzipped |
| Total page weight, Home | < 500 KB |

**Hero image handling** — it is the LCP element on the most important page:
- Responsive AVIF + WebP at 640 / 1024 / 1600 / 2400 widths
- Explicit `width`/`height` to eliminate layout shift
- `fetchpriority="high"` + `<link rel="preload">`
- Everything below the fold lazy-loaded

Fonts self-hosted, subset to Latin + Latin Extended-A (Croatian diacritics: č, ć, š, ž, đ), preloaded, `font-display: swap`.

---

## 11. Accessibility

Target **WCAG 2.2 AA**.

- All text ≥ 4.5:1 (see the accent contrast rule in §4)
- Fully keyboard navigable with visible focus states
- Semantic landmarks, skip link
- Form errors announced, labels correctly associated
- `prefers-reduced-motion` respected throughout
- `lang` attribute set correctly per locale — including on the language switcher links (`hreflang` + `lang`)

---

## 12. Build phases

### Phase 0 — Kickoff *(blocks nothing technical, blocks launch)*
- [ ] Domain confirmed and registered (`.com` primary, `.hr` redirect)
- [x] Photography — first three supplied and placed; gaps listed in §16
- [ ] Croatian slugs signed off
- [ ] Client count settled: 20+ or 25+
- [ ] Run Croatia figures confirmed current (120 events / 10 years)
- [ ] Site email address decided (domain address strongly preferred over gmail)
- [ ] Testimonial collection started as a parallel workstream

### Phase 1 — Foundation
- [x] Astro 5 + Tailwind + TypeScript scaffold
- [x] `tokens.css` from the hero photograph; type scale; global styles
- [x] i18n routing skeleton — both locales resolving, slug map wired
- [x] `Base` / `Page` layouts
- [x] `Header` (sticky, with CTA), `Nav`, `LangSwitch`, `Footer`
- [x] Hero image pipeline + `Strata` divider motif
- [ ] Netlify deploy live with holding page — *not deployed yet*
- [ ] Plausible installed — *needs an account + the real domain*

### Phase 2 — Home (English)
- [x] Hero — mountain photograph, headline formula, primary CTA
- [x] `ProofBar` (StatRow fallback)
- [x] "The problem, named" — three recognisable symptoms
- [x] Three engagement cards
- [x] `FoundersSplit`
- [x] `DayInTheLife` strip
- [x] Testimonial slot + Run Croatia panel
- [x] `CtaBand` with inline `ShortForm`

*This page establishes every pattern the rest of the site reuses. Build it properly, not quickly.*

### Phase 3 — Services + Contact (English)
- [x] Services intro + anchor nav
- [x] Three engagement blocks, identical structure
- [x] "Also engaged for" line
- [x] "How engagements start" — 3 steps
- [x] `Faq` component + FAQPage schema
- [x] `ContactForm`, `WhatHappensNext`, `SuccessState`
- [x] Proof placement above form verified

### Phase 4 — About, Team, Mission (English)

**About is about the FIRM. Team is about the PEOPLE.** The founders' personal
lives belong on Team under "away from the business" — do not let biography drift
back onto About.

- [x] About: what the firm does, who we work with, how the firm came about
- [x] About: industries, engagement model, at-a-glance facts
- [x] About: short "and the name" note pointing to Team, not the biography itself
- [x] Team: professional profile per person — remit, right-for, not-for, credentials
- [x] Team: "away from the business" per person — Berislav's running, Odin's music
- [x] Team: `Milestones` interleaved timeline (biographical, so it lives here)
- [x] Team: extended bench + direct contact
- [x] Odin: link to odins.show — *track embed pending; needs Odin's pick (§16.5)*
- [x] Mission: thesis, four principles, "what we say no to"

### Phase 5 — Clients + Insights (English)
- [x] `LogoWall` with `StatRow` fallback
- [x] `CaseStudy` component (empty state → Run Croatia leads)
- [x] Testimonials section
- [x] Run Croatia as portfolio
- [x] Insights index + `Article` template
- [x] 3–4 launch articles with answer-first openings

### Phase 6 — Croatian localisation
- [x] All interface strings translated in `i18n/ui.ts`
- [x] Every page mirrored under `/hr/` with localised slugs
- [x] All long-form content translated — **drafted; Berislav's rewrite still outstanding**
- [x] Per-locale schema with correct `inLanguage`
- [x] hreflang validated in both directions + `x-default`
- [x] Language switcher tested on every page pair
- [x] Croatian diacritics rendering correctly in all faces

*Roughly 40% of remaining effort. Cannot be compressed by working harder on our side.*

### Phase 7 — Technical SEO
- [x] Full schema set, both locales
- [x] `sitemap.xml` with alternates, `robots.txt`, `llms.txt`
- [ ] OG images per page per locale — *site-wide default generated; per-page pending*
- [x] Titles + meta descriptions hand-written — *29 pages, all unique, verified*
- [ ] Google Search Console verified — *needs the live domain*
- [ ] Google Business Profile for Zagreb created — *client action*

### Phase 8 — Polish & launch
- [x] Accessibility audit against §11
- [ ] Lighthouse + Core Web Vitals on mobile — *needs a deployed URL to measure honestly*
- [x] Cross-browser and real-device checks
- [ ] Analytics events wired — *blocked on Plausible*
- [ ] Form tested end-to-end — *Netlify Forms only work once deployed*
- [x] 404, privacy, terms pages (GDPR — Croatia is EU)
- [ ] Launch

---

## 13. Definition of done

- [ ] Lighthouse ≥ 95 on all four categories — *measure after deploy*
- [x] No layout shift on hero; LCP preloaded with `fetchpriority="high"` — *field CWV after deploy*
- [x] Every page has a unique, hand-written title and meta description in both locales
- [x] hreflang validates both directions, `x-default` present
- [ ] All schema passes the Rich Results Test — *29/29 emit valid JSON-LD locally; confirm on the live URL*
- [ ] Form delivers from both locales and shows the inline success state
- [x] Fully keyboard navigable, visible focus, `prefers-reduced-motion` respected
- [x] Accent contrast rule honoured everywhere (no white-on-amber)
- [x] Zero stock photography
- [x] No proof component renders an empty shell

---

## 14. What was built

29 pages, both locales, 0 TypeScript errors.

| Measure | Result |
|---|---|
| Pages | 29 (13 EN, 13 HR, plus 404 / thanks / legal) |
| Homepage HTML + CSS | ~17.9 KB gzipped |
| JavaScript | 1.4 KB, inlined — no separate request |
| Hero (LCP) | AVIF, 5 widths, 11–81 KB; ~23 KB at 1280px |
| Horizontal overflow | none, across 22 pages × 375/768/1280 px |
| WCAG AA contrast | no failures, 22 pages, both locales |
| Titles / descriptions | 29 unique, no duplicates |
| `<h1>` per page | exactly one, every page |
| JSON-LD | valid on all 29 pages |
| Schema types | Organization+ProfessionalService, WebSite, Person ×2, Service ×3, FAQPage, Article, BreadcrumbList |
| Review schema | correctly withheld — no real testimonials yet |
| About page | 0 personal-life mentions, 43 business mentions |
| Team page | 38 business + 26 personal-life mentions, cleanly separated |

A `/code-review high` pass found six issues, all fixed and re-verified: a Review
schema node emitting an object instead of a localized string; contradictory
Tailwind border utilities in `StatRow`; `novalidate` stripping form validation
for no-JS visitors; `noindex` pages appearing in the sitemap; an unwired
"Sending…" string; and a doubled accessible name on the proof bar.

## 15. Risks

| Risk | Impact | Mitigation |
|---|---|---|
| Croatian copy review stalls | Delays launch | Drafts ready before Phase 6 starts; Berislav briefed in Phase 0 that this is his critical path |
| Photography not booked | Site cannot look expensive | Briefed in Phase 0, the earliest possible point |
| No client proof at launch | Site converts below its ceiling | Fallback-aware components; testimonial collection as a parallel workstream from Phase 0 |
| Form-only depresses call bookings | Fewer qualified calls | Four mitigations built in (§8); measure post-launch and revisit a calendar if enquiries are healthy but calls aren't |
| Service list creeps back to 10 | Positioning dilutes, conversion drops | "Also engaged for" line is the agreed release valve |

---

## 16. Open items

### Photography — what is still missing

Three photographs are in and placed: Berislav's profile, Odin's (a black-and-white
stage shot), and one of the two of them at the International Sound & Film Music
Festival. Cropped head-and-shoulders versions were generated for the avatar slots,
because the originals are full-frame squares and the faces read as tiny at 64px.

Three gaps remain, in order of how much they cost:

1. **A portrait of Berislav where you can see his eyes.** Both supplied photos
   have him in sunglasses. On the page whose entire job is answering *"who am I
   trusting with this engagement?"*, hidden eyes work directly against the trust
   signal that real photography exists to provide. This is the single highest-value
   photo still outstanding.
2. **Resolution.** Berislav's original is 400×400, which caps it at roughly 200px
   on screen. It is fine at the 64px and 112px sizes used now, and cannot be used
   any larger — so a bigger portrait treatment is not available until a new file
   arrives.
3. **A running photograph of Berislav.** Odin's "away from the business" section
   has a striking stage photo; Berislav's has text and a facts panel only. The
   asymmetry is visible, and a shot from Sljeme or a start line would close it.

Still worth having from the original shot list: a working shot (client session,
whiteboard), two or three Run Croatia event photos including an Advent Run start
line, and a few Zagreb or mountain frames for section breaks.


1. **Croatian slugs** — confirm the §5 table.
2. **Client count** — 20+ or 25+. Becomes a site-wide fact in schema, meta and the hero.
3. **Run Croatia figures** — is "120 events in 10 years" current?
4. **Site email** — domain address vs `bero.sokac@gmail.com`.
5. **Odin's remit in his own words**, and which track to embed.
6. **Extended bench** — are specialists brought in for larger engagements? Answers a real objection on the Team page.
7. **Pricing posture** — LinkedIn currently says "contact for pricing". A stated range or "from" figure qualifies leads hard and saves calls.
8. **Existing brand assets** — any logo or wordmark, including Run Croatia materials.
