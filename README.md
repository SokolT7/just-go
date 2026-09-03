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
  The arrays are empty, and each consuming component renders a considered
  fallback rather than an empty shell. Adding a real testimonial or logo is a
  data edit in this one file and nothing else.
- **`src/styles/global.css`** — design tokens, all sampled from
  `Hero-background.avif`. No invented brand colours.

## Two rules worth not breaking

**The accent never carries white text.** `--horizon` (#C87F35) with white is
3.4:1 and fails WCAG AA. Primary buttons are amber ground with navy text
(5.4:1). Use `--horizon-text` for accent-coloured text on light grounds.

**Proof components must never render an empty shell.** If you add a proof
surface, give it a fallback. Populating `src/data/proof.ts` should require zero
layout work — that is the acceptance test.

## Deploying

Netlify, from `netlify.toml`. Build `npm run build`, publish `dist`.

Forms are handled by Netlify Forms and are only detected once deployed —
they cannot be tested against `localhost`. After the first deploy, submit each
of the four forms (`contact-en`, `contact-hr`, `short-en`, `short-hr`) and
confirm delivery.

## Before launch

Set the real domain in `astro.config.mjs` (`site`) and `public/robots.txt` —
canonicals, hreflang, sitemap and OG URLs are all derived from it.

The remaining open items are listed in IMPLEMENTATION_PLAN.md §15.
