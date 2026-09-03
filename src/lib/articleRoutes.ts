import { getCollection, type CollectionEntry } from 'astro:content';
import { LOCALES, type Locale } from '@/i18n/routes';

/** Rough reading time: 200 wpm, minimum one minute. */
export function readingMinutes(body: string): number {
  const words = body.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export interface ArticleRoute {
  params: { slug: string };
  props: {
    entry: CollectionEntry<'insights'>;
    locale: Locale;
    slugByLocale: Record<Locale, string | undefined>;
    readingMinutes: number;
  };
}

/**
 * Static paths for one locale. Each entry's counterpart in the other locales is
 * resolved via `translationKey`, so hreflang and the language switcher land on
 * the equivalent article rather than dumping the reader on the index.
 */
export async function articleRoutes(locale: Locale): Promise<ArticleRoute[]> {
  const all = await getCollection('insights');
  const slugOf = (e: CollectionEntry<'insights'>) => e.id.split('/').slice(1).join('/');

  const byKey = new Map<string, Partial<Record<Locale, string>>>();
  for (const entry of all) {
    const entryLocale = entry.id.split('/')[0] as Locale;
    if (!LOCALES.includes(entryLocale)) continue;
    const bucket = byKey.get(entry.data.translationKey) ?? {};
    bucket[entryLocale] = slugOf(entry);
    byKey.set(entry.data.translationKey, bucket);
  }

  return all
    .filter((entry) => entry.id.startsWith(`${locale}/`))
    .map((entry) => {
      const siblings = byKey.get(entry.data.translationKey) ?? {};
      return {
        params: { slug: slugOf(entry) },
        props: {
          entry,
          locale,
          slugByLocale: { en: siblings.en, hr: siblings.hr } as Record<Locale, string | undefined>,
          readingMinutes: readingMinutes(entry.body ?? ''),
        },
      };
    });
}
