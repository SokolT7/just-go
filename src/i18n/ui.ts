import type { Locale } from './routes';

/* =============================================================================
   Interface strings.

   ⚠️  CROATIAN COPY IS A FIRST DRAFT AND IS NOT APPROVED.
   Per IMPLEMENTATION_PLAN.md §5, Berislav must rewrite — not correct — the
   Croatian in his own voice before launch. Translated-sounding sales copy is
   where credibility leaks with a domestic buyer.
   ============================================================================= */

const en = {
  /* --- Navigation ---------------------------------------------------- */
  'nav.home': 'Home',
  'nav.services': 'Services',
  'nav.about': 'About',
  'nav.team': 'Team',
  'nav.mission': 'Mission',
  'nav.clients': 'Clients',
  'nav.insights': 'Insights',
  'nav.contact': 'Contact',
  'nav.privacy': 'Privacy',
  'nav.terms': 'Terms',
  'nav.menu': 'Menu',
  'nav.close': 'Close',
  'nav.skip': 'Skip to content',
  'nav.langLabel': 'Change language',
  'nav.primary': 'Primary',

  /* --- Calls to action ------------------------------------------------ */
  'cta.primary': "Tell us what you're working on",
  'cta.short': 'Start the conversation',
  'cta.services': 'See how we work',
  'cta.readMore': 'Read more',
  'cta.meet': 'Meet Berislav and Odin',
  'cta.allInsights': 'All insights',

  /* --- Response promise ----------------------------------------------- */
  'promise.sameDay': 'You will hear back the same working day.',
  'promise.noCharge': 'A 30-minute call, no charge, no pitch.',

  /* --- Form ------------------------------------------------------------ */
  'form.name': 'Your name',
  'form.email': 'Email',
  'form.company': 'Company',
  'form.message': 'What are you trying to fix?',
  'form.messagePlaceholder':
    'A sentence or two is plenty. Let’s discuss your new boost.',
  'form.submit': 'Send',
  'form.sending': 'Sending…',
  'form.required': 'Required',
  'form.errorName': 'Please tell us your name.',
  'form.errorEmail': 'Please enter a valid email address.',
  'form.errorMessage': 'Please tell us briefly what you need.',
  'form.errorSend':
    'That did not send — nothing has been lost. Try again, or copy your message to bero.sokac@gmail.com.',
  'form.successTitle': 'Message sent.',
  'form.successBody':
    'Thank you — Berislav has it. You will hear back the same working day.',
  'form.orEmail': 'Or email directly:',

  /* --- What happens next ---------------------------------------------- */
  'next.title': 'What happens next',
  'next.step1Title': 'You send this',
  'next.step1Body': 'Four fields. No forms after the form.',
  'next.step2Title': 'Berislav replies',
  'next.step2Body': 'Personally, the same working day.',
  'next.step3Title': 'A 30-minute call',
  'next.step3Body': 'No charge. If we are not the right fit, we will say so.',

  /* --- Section furniture ----------------------------------------------- */
  'label.services': 'What we do',
  'label.people': 'Who you work with',
  'label.proof': 'Track record',
  'label.mission': 'Why we do it',
  'label.contact': 'Get in touch',
  'label.insights': 'Insights',
  'label.milestones': 'Milestones',

  /* --- Footer ----------------------------------------------------------- */
  'footer.tagline': 'Sales and business development consultancy. Zagreb, worldwide.',
  'footer.rights': 'All rights reserved.',
  'footer.nav': 'Pages',
  'footer.elsewhere': 'Elsewhere',
  'footer.contact': 'Contact',
  'footer.based': 'Zagreb, Croatia · Central European Time',

  /* --- Misc -------------------------------------------------------------- */
  'meta.readingTime': 'min read',
  'error.404Title': 'That page is not here.',
  'error.404Body':
    'The link may be out of date. Everything else is one click away.',
  'error.404Cta': 'Back to the homepage',
} as const;

export type UIKey = keyof typeof en;

const hr: Record<UIKey, string> = {
  /* --- Navigacija ------------------------------------------------------ */
  'nav.home': 'Početna',
  'nav.services': 'Usluge',
  'nav.about': 'O nama',
  'nav.team': 'Tim',
  'nav.mission': 'Misija',
  'nav.clients': 'Klijenti',
  'nav.insights': 'Članci',
  'nav.contact': 'Kontakt',
  'nav.privacy': 'Privatnost',
  'nav.terms': 'Uvjeti',
  'nav.menu': 'Izbornik',
  'nav.close': 'Zatvori',
  'nav.skip': 'Prijeđi na sadržaj',
  'nav.langLabel': 'Promijeni jezik',
  'nav.primary': 'Glavna',

  /* --- Pozivi na akciju ------------------------------------------------ */
  'cta.primary': 'Recite nam na čemu radite',
  'cta.short': 'Započnite razgovor',
  'cta.services': 'Pogledajte kako radimo',
  'cta.readMore': 'Pročitajte više',
  'cta.meet': 'Upoznajte Berislava i Odina',
  'cta.allInsights': 'Svi članci',

  /* --- Obećanje odgovora ------------------------------------------------ */
  'promise.sameDay': 'Javljamo se isti radni dan.',
  'promise.noCharge': 'Poziv od 30 minuta, bez naplate i bez prodaje.',

  /* --- Obrazac ---------------------------------------------------------- */
  'form.name': 'Vaše ime',
  'form.email': 'Email',
  'form.company': 'Tvrtka',
  'form.message': 'Što želite riješiti?',
  'form.messagePlaceholder':
    'Dovoljna je rečenica ili dvije. Razgovarajmo o vašem novom zaletu.',
  'form.submit': 'Pošalji',
  'form.sending': 'Šaljem…',
  'form.required': 'Obavezno',
  'form.errorName': 'Molimo upišite svoje ime.',
  'form.errorEmail': 'Molimo upišite ispravnu email adresu.',
  'form.errorMessage': 'Molimo ukratko opišite što trebate.',
  'form.errorSend':
    'Slanje nije uspjelo — ništa nije izgubljeno. Pokušajte ponovno ili poruku pošaljite na bero.sokac@gmail.com.',
  'form.successTitle': 'Poruka je poslana.',
  'form.successBody':
    'Hvala — Berislav je zaprimio poruku. Javljamo se isti radni dan.',
  'form.orEmail': 'Ili pišite izravno:',

  /* --- Što slijedi ------------------------------------------------------ */
  'next.title': 'Što slijedi',
  'next.step1Title': 'Pošaljete poruku',
  'next.step1Body': 'Četiri polja. Bez dodatnih obrazaca.',
  'next.step2Title': 'Berislav odgovara',
  'next.step2Body': 'Osobno, isti radni dan.',
  'next.step3Title': 'Poziv od 30 minuta',
  'next.step3Body': 'Bez naplate. Ako nismo pravi izbor, reći ćemo vam.',

  /* --- Oznake sekcija --------------------------------------------------- */
  'label.services': 'Čime se bavimo',
  'label.people': 'S kim radite',
  'label.proof': 'Iskustvo',
  'label.mission': 'Zašto to radimo',
  'label.contact': 'Javite nam se',
  'label.insights': 'Članci',
  'label.milestones': 'Prekretnice',

  /* --- Podnožje --------------------------------------------------------- */
  'footer.tagline': 'Konzalting za prodaju i razvoj poslovanja. Zagreb, svijet.',
  'footer.rights': 'Sva prava pridržana.',
  'footer.nav': 'Stranice',
  'footer.elsewhere': 'Drugdje',
  'footer.contact': 'Kontakt',
  'footer.based': 'Zagreb, Hrvatska · Srednjoeuropsko vrijeme',

  /* --- Ostalo ----------------------------------------------------------- */
  'meta.readingTime': 'min čitanja',
  'error.404Title': 'Ove stranice nema.',
  'error.404Body': 'Poveznica je možda zastarjela. Sve ostalo je jedan klik dalje.',
  'error.404Cta': 'Natrag na početnu',
};

export const ui: Record<Locale, Record<UIKey, string>> = { en, hr };
