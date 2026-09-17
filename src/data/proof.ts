import type { Locale } from '@/i18n/routes';

type L = Record<Locale, string>;

export interface Logo {
  name: string;
  /* Artwork under public/logos/. Without it the entry renders as a wordmark in
     our own display face — a considered fallback, not an empty slot. */
  src?: string;
  /* Defaults to `name`. Set it only where the mark says something the name
     does not, e.g. an acquirer's endorsement line. */
  alt?: string;
  /* Optical size, not measured size. Marks are normalised to one HEIGHT, which
     is the only thing that makes a mixed row sit on one line — but height is a
     poor proxy for how big a mark reads. A square icon at the same height as a
     long wordmark looks oversized, and a stacked two-line lockup looks
     undersized because half its height is the second line. This is the
     per-mark correction; 1 is the wordmark baseline. */
  scale?: number;
  /* The row flattens every mark to a single ink so thirteen brand palettes do
     not fight each other. Set false for a mark that is BUILT on internal
     contrast — a knocked-out counter goes solid and the mark turns to mush.
     Such a file must already be dark enough to stand on a light ground. */
  flatten?: boolean;
}
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

/*
  Firms the practice has worked in or for, taken from Berislav's career record.
  Artwork was sourced from each firm's own site (has·to·be from an archived
  snapshot — the brand was retired into ChargePoint after the acquisition).

  Several of these ship only a reversed lockup, drawn white for a dark header.
  Those are invisible on this page's ground, which is the other reason the row
  flattens rather than trusting each file to behave.
*/
export const logos: Logo[] = [
  { name: 'Oracle', src: '/logos/oracle.svg' },
  { name: 'EasyPark Group', src: '/logos/easypark.png', alt: 'EasyPark Group' },
  { name: 'Q agency', src: '/logos/q-agency.svg', scale: 1.0 },
  { name: 'Byte Lab', src: '/logos/byte-lab.png', scale: 0.96 },
  { name: 'Ignit Group', src: '/logos/ignit.svg', scale: 0.96 },
  { name: 'Ingemark', src: '/logos/ingemark.svg', scale: 1.04 },
  { name: 'Omnizon Networks', src: '/logos/omnizon.png', scale: 1.16 },
  { name: 'Megatrend', src: '/logos/megatrend.svg', scale: 0.88 },
  { name: 'has\u00b7to\u00b7be', src: '/logos/has-to-be.svg', scale: 1.1 },
  { name: 'Logic Information Systems', src: '/logos/logic.svg', alt: 'Logic Information Systems, part of Accenture', scale: 1.06 },
  { name: 'InSky Solutions', src: '/logos/insky.svg', scale: 1.14, flatten: false },
  { name: 'Alfatec', src: '/logos/alfatec.svg' },
];


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
