import type { Locale } from '@/i18n/routes';

type L = Record<Locale, string>;

export interface DayEntry {
  time: string;
  title: L;
  body: L;
}

/* =============================================================================
   ⚠️  PLACEHOLDER — NEEDS BERISLAV'S SIGN-OFF BEFORE LAUNCH.

   This section is presented to visitors as a real day. The entries below are
   plausible and drawn from published interviews (the morning run is documented:
   "running is part of my daily hygiene"), but they have not been confirmed by
   Berislav. Replace with a real day, or have him approve these as written.
   Do not launch this section unverified.

   Scope note: this strip is about the WORK. The founders' personal lives live on
   the Team page under "away from the business" — keep them there.
   ============================================================================= */

export const dayInTheLife: DayEntry[] = [
  {
    time: '06:10',
    title: { en: 'Sljeme, before the city wakes', hr: 'Sljeme, prije nego se grad probudi' },
    body: {
      en: 'Running is not a hobby here, it is scheduling. "If I run in the morning, I enter the day full of energy."',
      hr: 'Trčanje ovdje nije hobi, nego raspored. „Ako trčim ujutro, u dan ulazim pun energije.”',
    },
  },
  {
    time: '09:30',
    title: { en: 'A pipeline review', hr: 'Pregled prodajnog lijevka' },
    body: {
      en: 'Someone’s forecast and someone’s reality, side by side. Usually the gap is not effort — it is which conversations never got started.',
      hr: 'Nečija prognoza i nečija stvarnost, jedna uz drugu. Razlika obično nije u trudu — nego u razgovorima koji nikad nisu započeti.',
    },
  },
  {
    time: '13:00',
    title: { en: 'A sponsor conversation', hr: 'Razgovor sa sponzorom' },
    body: {
      en: 'Ten years of asking companies for money teaches you exactly how a partnership has to be framed to get a yes.',
      hr: 'Deset godina traženja sredstava od tvrtki nauči vas točno kako partnerstvo mora biti postavljeno da bi dobilo „da”.',
    },
  },
  {
    time: '16:00',
    title: { en: 'Odin rewrites the deck', hr: 'Odin prepisuje prezentaciju' },
    body: {
      en: 'A sound proposition that reads like everyone else’s wins nothing. The brand work is not decoration — it decides whether the offer earns a second meeting.',
      hr: 'Dobra ponuda koja zvuči kao i svaka druga ne dobiva ništa. Rad na brendu nije ukras — on odlučuje hoće li ponuda zaraditi drugi sastanak.',
    },
  },
  {
    time: '17:30',
    title: { en: 'Proposal, written not templated', hr: 'Ponuda, pisana a ne šablonska' },
    body: {
      en: 'Scope, price, and what success looks like — on one page, before anyone signs anything.',
      hr: 'Opseg, cijena i kako izgleda uspjeh — na jednoj stranici, prije nego itko išta potpiše.',
    },
  },
];
