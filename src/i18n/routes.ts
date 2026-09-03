export const LOCALES = ['en', 'hr'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';

/**
 * Canonical page keys mapped to their localized paths.
 * Croatian uses localized slugs — this map is the single source of truth for
 * navigation, the language switcher and hreflang alternates.
 */
export const ROUTES = {
  home:     { en: '/',           hr: '/hr' },
  services: { en: '/services',   hr: '/hr/usluge' },
  about:    { en: '/about',      hr: '/hr/o-nama' },
  team:     { en: '/team',       hr: '/hr/tim' },
  mission:  { en: '/mission',    hr: '/hr/misija' },
  clients:  { en: '/clients',    hr: '/hr/klijenti' },
  contact:  { en: '/contact',    hr: '/hr/kontakt' },
  insights: { en: '/insights',   hr: '/hr/clanci' },
  privacy:  { en: '/privacy',    hr: '/hr/privatnost' },
  terms:    { en: '/terms',      hr: '/hr/uvjeti' },
} as const;

export type RouteKey = keyof typeof ROUTES;

/** Path for a page key in a given locale. */
export function path(key: RouteKey, locale: Locale): string {
  return ROUTES[key][locale];
}

/** Path for a single insight article. */
export function articlePath(slug: string, locale: Locale): string {
  return `${ROUTES.insights[locale]}/${slug}`;
}

/** Every locale variant of a page, for hreflang. */
export function alternates(key: RouteKey): Array<{ locale: Locale; path: string }> {
  return LOCALES.map((locale) => ({ locale, path: ROUTES[key][locale] }));
}

/** Main navigation order. */
export const NAV_KEYS: RouteKey[] = [
  'services',
  'about',
  'team',
  'mission',
  'clients',
  'insights',
];
