# Just Go — website

Bilingual (EN/HR) marketing site for Just Go, a sales and business development
consultancy in Zagreb. Astro 5, static output, Tailwind 4.

See [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md) for the full spec and
[the blueprint](https://claude.ai/code/artifact/644c7697-4513-4277-ae16-59014ca2099d)
for the strategy behind it.

## Running it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → dist/
npm run preview  # serve the built output
npx astro check  # type check
```

## How it is put together

- **`src/views/*.astro`** — one file per page, taking a `locale` prop. The files
  in `src/pages/` are thin route stubs that render a view; this is what keeps the
  two languages from drifting apart structurally.
- **`src/i18n/routes.ts`** — the single source of truth for URLs. Croatian uses
  localized slugs (`/hr/usluge`, `/hr/o-nama`), so navigation, the language
  switcher and hreflang all read from this one map.
- **`src/i18n/ui.ts`** — interface strings. **The Croatian is a first draft and
  is not approved** — see the note at the top of the file.
- **`src/data/proof.ts`** — every proof surface on the site reads from here.
  Each consuming component renders a considered fallback rather than an empty
  shell. Adding a real testimonial or logo is a data edit in this one file and
  nothing else.
- **`public/logos/`** — artwork for the firm row under the home-page numbers,
  taken from each firm's own site. The row flattens every mark to one ink, both
  so twelve brand palettes do not fight and because several of these firms
  publish only a reversed, white-on-transparent lockup that would otherwise
  disappear. Adding a firm means a file here plus a line in `proof.ts` — and
  re-checking the grid's column counts, which are chosen to divide the number
  of firms exactly. See the comments in `LogoWall.astro`.
- **`src/styles/global.css`** — design tokens, all sampled from
  `Hero-background.avif`. No invented brand colours.

## Two rules worth not breaking

**The accent never carries white text.** `--horizon` (#C87F35) with white is
3.4:1 and fails WCAG AA. Primary buttons are amber ground with navy text
(5.4:1). Use `--horizon-text` for accent-coloured text on light grounds.

**Proof components must never render an empty shell.** If you add a proof
surface, give it a fallback. Populating `src/data/proof.ts` should require zero
layout work — that is the acceptance test.

## Image provenance

The home hero is `src/assets/images/hero-road-porsche-v2.jpg`, an edit (Porsche
added) of `hero-road.jpg` — Fabrizio Coco on Unsplash (`nieN2PuH_eY`), 5891×3927,
licensed for commercial use. The edit was exported at 1264×842 and upscaled 4x
to 5056×3368. The original photo replaced a 495px
thumbnail that was neither sharp enough nor ours to publish. Keep a licensed
original for anything that runs full-bleed; the hero is the one image on this
site that cannot hide a bad source.

The firm logos in `public/logos/` are third-party trademarks, used to show where
the experience was earned. That is ordinary practice, but these are former
employers rather than clients of Just Go, and nobody has given written
permission. **Still worth a decision before launch.**

## Deploying

**Netlify**, from `netlify.toml` — build `npm run build`, publish `dist`, Node
pinned to 22. Nothing else needs configuring; Netlify reads that file.

The host is not incidental. This site's contact forms are Netlify Forms, which
is a platform feature, not a standard: `data-netlify="true"` is an instruction
to Netlify's build step and is inert HTML anywhere else. On a host without it
there is no code in this project that receives a submission, and messages are
silently lost. If this ever moves off Netlify, the forms need a real endpoint
first — see the last paragraph of this section.

### Moving here from somewhere else

The project was briefly deployed on Vercel, where the forms could not work and
the `netlify.toml` headers were ignored. If any of that is still live:

1. Create the Netlify site from the GitHub repo and let the first deploy run.
2. Point `justgo.hr` at Netlify, and set `site` in `astro.config.mjs` to match.
3. **Delete the old deployment.** Two live copies of the same site will get
   indexed as duplicates, and the one without working forms is the one people
   will eventually find.

### Forms and where the mail goes

Delivery is Netlify Forms. The markup is done — `data-netlify`, the hidden
`form-name`, and a honeypot on each of the four forms (`contact-en`,
`contact-hr`, `short-en`, `short-hr`). Netlify registers a form by parsing the
*deployed* HTML, so none of this can be tested against `localhost`.

Submissions land in the Netlify dashboard by default. Emailing them to a person
is a per-site setting that does not live in this repo and cannot be committed:

1. Deploy, then open **Site configuration → Forms** and check all four forms are
   listed. If they are not, nothing else below will work.
2. **Forms → Form notifications → Add notification → Email notification.**
3. Send to `bero.sokac@gmail.com`. Repeat per form, or use the any-form option.
4. Submit one of each for real and confirm arrival — check Spam and Promotions
   on the first one.

Each form has a field named `email`, which Netlify uses as the reply-to, so
replying in Gmail goes to the sender rather than to Netlify. Confirm that on the
first test.

The free tier caps submissions per month; check the current limit against
expected volume. Past it, or if the mail needs to come **from** justgo.hr rather
than from Netlify, move delivery to a Netlify Function calling a mail API
(Resend, Postmark) — the forms themselves would not need to change.

## Before launch

Set the real domain in `astro.config.mjs` (`site`) and `public/robots.txt` —
canonicals, hreflang, sitemap and OG URLs are all derived from it.

The remaining open items are listed in IMPLEMENTATION_PLAN.md §15.
