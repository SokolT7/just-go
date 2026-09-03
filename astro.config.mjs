// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// NOTE: `site` must be the real production origin before launch — it is used for
// canonical URLs, hreflang, sitemap and Open Graph absolute URLs.
export const SITE = 'https://justgo.hr';

export default defineConfig({
  site: SITE,
  trailingSlash: 'never',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'hr'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      // Pages that serve `noindex` must not also be submitted in the sitemap —
      // the two are contradictory signals and Search Console flags them.
      filter: (page) => !/\/(thanks|hr\/hvala)\/?$/.test(new URL(page).pathname),
    }),
  ],
  image: {
    // Widths used across the site; the hero requests the largest.
    responsiveStyles: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
