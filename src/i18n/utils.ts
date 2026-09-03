import { DEFAULT_LOCALE, LOCALES, type Locale } from './routes';
import { ui, type UIKey } from './ui';

/** Resolve the active locale from the request URL. */
export function getLocale(url: URL): Locale {
  const segment = url.pathname.split('/').filter(Boolean)[0];
  return LOCALES.includes(segment as Locale) ? (segment as Locale) : DEFAULT_LOCALE;
}

/**
 * Translator bound to a locale. Falls back to English rather than rendering a
 * raw key, so a missing Croatian string degrades to readable English.
 */
export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[DEFAULT_LOCALE][key] ?? key;
  };
}

/** BCP-47 tag for the `lang` attribute. */
export const htmlLang: Record<Locale, string> = {
  en: 'en',
  hr: 'hr',
};

/** Locale label shown in the language switcher. */
export const localeLabel: Record<Locale, string> = {
  en: 'EN',
  hr: 'HR',
};

/** Full locale name, for the switcher's accessible label. */
export const localeName: Record<Locale, string> = {
  en: 'English',
  hr: 'Hrvatski',
};
