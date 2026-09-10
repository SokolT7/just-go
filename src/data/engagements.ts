import type { Locale } from '@/i18n/routes';

type L = Record<Locale, string>;
type LA = Record<Locale, string[]>;

export interface Engagement {
  id: string;
  order: number;
  name: L;
  /** Outcome-led heading, not a service-category noun. */
  headline: L;
  forWho: L;
  whatWeFix: L;
  howItRuns: Array<{ phase: L; duration: L }>;
  outcomes: LA;
  timeline: L;
  proofNote: L;
}

/* The service list cut from ten to three (PLAN §1). The remainder becomes the
   "also engaged for" line on the Services page — nothing is lost, the hierarchy
   just tells the truth about what to lead with. */

export const engagements: Engagement[] = [
  {
    id: 'strategy',
    order: 1,
    name: { en: 'Sales Strategy & Go-to-Market', hr: 'Prodajna strategija i izlazak na tržište' },
    headline: {
      en: 'Growth has stalled, or a new market is about to swallow a budget',
      hr: 'Rast je stao ili novo tržište upravo guta budžet',
    },
    forWho: {
      en: 'Founders and CEOs of companies between roughly €1M and €50M, entering a new market or watching a once-reliable growth curve flatten.',
      hr: 'Osnivači i direktori tvrtki otprilike između 1 i 50 milijuna eura prihoda, koji ulaze na novo tržište ili gledaju kako se nekad pouzdana krivulja rasta izravnava.',
    },
    whatWeFix: {
      en: 'Who you sell to, what you charge, how the offer is framed, and which channels actually deserve the budget. Most stalled growth is a positioning problem wearing a sales problem’s clothes.',
      hr: 'Kome prodajete, koliko naplaćujete, kako je ponuda postavljena i koji kanali stvarno zaslužuju budžet. Većina zaustavljenog rasta problem je pozicioniranja prerušen u problem prodaje.',
    },
    howItRuns: [
      { phase: { en: 'Diagnostic — pipeline, pricing, lost-deal review', hr: 'Dijagnostika — lijevak, cijene, analiza izgubljenih poslova' }, duration: { en: '2 weeks', hr: '2 tjedna' } },
      { phase: { en: 'Strategy — segments, offer, channels, targets', hr: 'Strategija — segmenti, ponuda, kanali, ciljevi' }, duration: { en: '3–4 weeks', hr: '3–4 tjedna' } },
      { phase: { en: 'Rollout — with your team, not at them', hr: 'Provedba — s vašim timom, a ne nad njim' }, duration: { en: '4–8 weeks', hr: '4–8 tjedana' } },
    ],
    outcomes: {
      en: [
        'A written go-to-market plan your team can execute without you in the room',
        'Segment and pricing decisions with the reasoning attached',
        'A pipeline model with honest conversion assumptions',
        'The first quarter’s targets, and how they will be measured',
      ],
      hr: [
        'Pisani plan izlaska na tržište koji vaš tim može provesti i bez vas u prostoriji',
        'Odluke o segmentima i cijenama s obrazloženjem',
        'Model prodajnog lijevka s poštenim pretpostavkama konverzije',
        'Ciljevi za prvo tromjesečje i način na koji će se mjeriti',
      ],
    },
    timeline: { en: 'Typically 8–14 weeks', hr: 'Obično 8–14 tjedana' },
    proofNote: {
      en: 'Built on eleven years at Oracle as Sales Director for 17 European countries.',
      hr: 'Temeljeno na jedanaest godina u Oracleu na poziciji direktora prodaje za 17 europskih zemalja.',
    },
  },
  {
    id: 'enablement',
    order: 2,
    name: { en: 'Sales Team Enablement', hr: 'Osnaživanje prodajnog tima' },
    headline: {
      en: 'The team is busy, the calendar is full, and the deals still are not closing',
      hr: 'Tim je zauzet, kalendar pun, a poslovi se i dalje ne zatvaraju',
    },
    forWho: {
      en: 'Sales teams of three to thirty who work hard and convert badly — usually because the process is improvised and the hard conversations get avoided.',
      hr: 'Prodajni timovi od tri do trideset ljudi koji naporno rade i slabo konvertiraju — najčešće zato što je proces improviziran, a teški razgovori se izbjegavaju.',
    },
    whatWeFix: {
      en: 'Pipeline discipline, qualification, negotiation, and the specific moments where deals quietly die: the follow-up not sent, the discount given away, the decision-maker never asked for.',
      hr: 'Disciplina lijevka, kvalifikacija, pregovaranje i konkretni trenuci u kojima poslovi tiho umiru: neposlan follow-up, olako dan popust, odluka koja se nikad nije zatražila od prave osobe.',
    },
    howItRuns: [
      { phase: { en: 'Shadowing — real calls, real pipeline', hr: 'Praćenje — stvarni pozivi, stvarni lijevak' }, duration: { en: '1–2 weeks', hr: '1–2 tjedna' } },
      { phase: { en: 'Training — negotiation and qualification, on your own deals', hr: 'Trening — pregovaranje i kvalifikacija, na vašim poslovima' }, duration: { en: '2–4 sessions', hr: '2–4 sesije' } },
      { phase: { en: 'Embedding — cadence, reviews, coaching the managers', hr: 'Usađivanje — ritam, pregledi, rad s voditeljima' }, duration: { en: '4–12 weeks', hr: '4–12 tjedana' } },
    ],
    outcomes: {
      en: [
        'A qualification standard the whole team applies the same way',
        'Negotiation training run on your live deals, not case studies',
        'A weekly pipeline cadence that survives after we leave',
        'Managers who can coach, rather than only report',
      ],
      hr: [
        'Standard kvalifikacije koji cijeli tim primjenjuje jednako',
        'Trening pregovaranja na vašim aktivnim poslovima, ne na studijama slučaja',
        'Tjedni ritam pregleda lijevka koji preživi naš odlazak',
        'Voditelji koji znaju voditi ljude, a ne samo izvještavati',
      ],
    },
    timeline: { en: 'Typically 6–16 weeks', hr: 'Obično 6–16 tjedana' },
    proofNote: {
      en: 'A Quota Club record, and teams built across financial services, telco, retail and the public sector.',
      hr: 'Quota Club rezultati i timovi izgrađeni u financijama, telekomima, maloprodaji i javnom sektoru.',
    },
  },
  {
    id: 'partnerships',
    order: 3,
    name: { en: 'Partnerships & Sponsorship', hr: 'Partnerstva i sponzorstva' },
    headline: {
      en: 'You need somebody to say yes who has no obligation to',
      hr: 'Treba vam „da” od nekoga tko vam ništa ne duguje',
    },
    forWho: {
      en: 'Organisations that need corporate partners, sponsors or channel relationships — and keep hearing polite no’s, or keep signing partners who never renew.',
      hr: 'Organizacije kojima trebaju korporativni partneri, sponzori ili partnerski kanali — a stalno dobivaju pristojna odbijanja ili potpisuju partnere koji se nikad ne obnove.',
    },
    whatWeFix: {
      en: 'How the offer is packaged, who it goes to, what it is worth, and how the relationship is renewed. The unglamorous half — reporting and follow-through — is usually where sponsorship money is actually lost.',
      hr: 'Kako je ponuda zapakirana, kome ide, koliko vrijedi i kako se odnos obnavlja. Neatraktivna polovica — izvještavanje i praćenje — obično je mjesto gdje se sponzorski novac zapravo gubi.',
    },
    howItRuns: [
      { phase: { en: 'Asset audit — what you actually have to sell', hr: 'Revizija — što zapravo imate za prodati' }, duration: { en: '1–2 weeks', hr: '1–2 tjedna' } },
      { phase: { en: 'Packaging and pricing the tiers', hr: 'Pakiranje i određivanje cijena paketa' }, duration: { en: '2–3 weeks', hr: '2–3 tjedna' } },
      { phase: { en: 'Outreach — with you, or on your behalf', hr: 'Kontaktiranje — s vama ili u vaše ime' }, duration: { en: 'Ongoing', hr: 'Kontinuirano' } },
    ],
    outcomes: {
      en: [
        'A partnership offer priced against what it is genuinely worth',
        'A qualified target list with the reasoning for each name',
        'The pitch, the deck and the objection handling',
        'A renewal process, so year two is not a fresh start',
      ],
      hr: [
        'Partnerska ponuda s cijenom koja odgovara stvarnoj vrijednosti',
        'Kvalificirana lista ciljanih tvrtki s obrazloženjem za svako ime',
        'Prezentacija, materijali i odgovori na prigovore',
        'Proces obnove, da druga godina ne kreće ispočetka',
      ],
    },
    timeline: { en: 'Typically 3–9 months', hr: 'Obično 3–9 mjeseci' },
    proofNote: {
      en: 'This is the Run Croatia engine, productised — ten years and 130+ events of securing premium sponsors for races nobody had heard of yet.',
      hr: 'Ovo je Run Croatia motor, pretvoren u uslugu — deset godina i 130+ događaja osiguravanja vrhunskih sponzora za utrke za koje još nitko nije čuo.',
    },
  },
];
