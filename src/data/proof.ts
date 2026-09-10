import type { Locale } from '@/i18n/routes';

type L = Record<Locale, string>;

export interface Logo { name: string; src: string; alt: string; }
export interface Testimonial { quote: L; name: string; role: L; company: string; photo?: string; }
export interface CaseStudy { title: L; sector: L; situation: L; action: L; result: L; metric: string; metricLabel: L; }
export interface Stat { value: string; label: L; }

/* =============================================================================
   PROOF DATA — the single source for every proof surface on the site.

   No client proof has been supplied yet (IMPLEMENTATION_PLAN.md §7). Empty
   arrays are intentional: every consuming component renders a considered
   fallback rather than an empty shell.

   Adding real proof later must be a data edit ONLY — zero layout work. That is
   the acceptance test for the proof components.
   ============================================================================= */

/** Client logos we have written permission to display. */
export const logos: Logo[] = [];

/** Attributed testimonials. Review schema is emitted only when this is non-empty. */
export const testimonials: Testimonial[] = [];

/** Case studies. Anonymised is fine; a real number is not optional. */
export const caseStudies: CaseStudy[] = [];

/** Always populated. This is what stands in while the arrays above are empty. */
export const stats: Stat[] = [
  {
    value: '25+',
    label: { en: 'years in sales & business development', hr: 'godina u prodaji i razvoju poslovanja' },
  },
  {
    // CONFIRM: LinkedIn says 25+ in one place and 20+ in another (PLAN §15.2).
    value: '25+',
    label: { en: 'clients advised', hr: 'klijenata savjetovano' },
  },
  {
    value: '130+',
    label: { en: 'events delivered with Run Croatia', hr: 'događaja s Run Croatia' },
  },
  {
    // Not '7★': U+2605 is outside every loaded font subset, so it would fall
    // back to a system face mid-number (or render as a colour emoji).
    value: '7/7',
    label: {
      en: 'World Marathon Majors — a Seven Star finisher',
      hr: 'World Marathon Majors — Seven Star finisher',
    },
  },
];

export const hasLogos = logos.length > 0;
export const hasTestimonials = testimonials.length > 0;
export const hasCaseStudies = caseStudies.length > 0;
