import type { Locale } from '@/i18n/routes';

type L = Record<Locale, string>;

export interface Milestone {
  year: string;
  who: 'berislav' | 'odin' | 'both';
  title: L;
  body: L;
}

/* Two lives on one dated axis. The sequence carries the argument, so the
   chronology is real information rather than decoration.
   CONFIRM dates marked ~ with Berislav before launch (PLAN §15). */

export const milestones: Milestone[] = [
  {
    year: '2004',
    who: 'berislav',
    title: { en: 'Oracle', hr: 'Oracle' },
    body: {
      en: 'Joins Oracle after selling data warehouse systems at BusinessObjects. Over eleven years he becomes Sales Director for 17 European countries.',
      hr: 'Dolazi u Oracle nakon prodaje sustava skladištenja podataka u BusinessObjectsu. Kroz jedanaest godina postaje direktor prodaje za 17 europskih zemalja.',
    },
  },
  {
    year: '2010',
    who: 'berislav',
    title: { en: 'New York, the first marathon', hr: 'New York, prvi maraton' },
    body: {
      en: 'Earlier that year he could not run three kilometres. In November he finishes the New York City Marathon.',
      hr: 'Početkom te godine nije mogao istrčati ni tri kilometra. U studenom završava njujorški maraton.',
    },
  },
  {
    year: '2013',
    who: 'berislav',
    title: { en: 'The Majors', hr: 'Majorsi' },
    body: {
      en: 'Boston, London, Berlin, Chicago, Tokyo and New York inside two and a half years. He goes on to complete every World Marathon Major — a Seven Star finisher.',
      hr: 'Boston, London, Berlin, Chicago, Tokio i New York u dvije i pol godine. Kasnije istrčava svaku World Marathon Majors utrku — Seven Star finisher.'
    },
  },
  {
    year: '2015',
    who: 'berislav',
    title: { en: 'Run Croatia', hr: 'Run Croatia' },
    body: {
      en: 'Leaves a corporate career to co-found Run Croatia — a platform built around health, lifestyle and community.',
      hr: 'Napušta korporativnu karijeru i suosniva Run Croatia — platformu okupljenu oko zdravlja, načina života i zajednice.',
    },
  },
  {
    year: '2016',
    who: 'berislav',
    title: { en: 'The first Zagreb Advent Run', hr: 'Prvi Zagreb Advent Run' },
    body: {
      en: 'A costumed December race through the decorated city. It becomes the largest event of its kind in Europe.',
      hr: 'Kostimirana prosinačka utrka kroz ukrašeni grad. Postat će najveći događaj te vrste u Europi.',
    },
  },
  {
    year: '2020',
    who: 'odin',
    title: { en: 'A guitar, at twelve', hr: 'Gitara, s dvanaest' },
    body: {
      en: 'Odin picks up a guitar. In his own words: "I didn’t discover the Blues — it discovered me."',
      hr: 'Odin uzima gitaru u ruke. Njegovim riječima: „Nisam ja otkrio blues — on je otkrio mene.”',
    },
  },
  {
    year: '2023',
    who: 'odin',
    title: { en: 'Notodden and Clarksdale', hr: 'Notodden i Clarksdale' },
    body: {
      en: 'European Blues Union scholarships take him to Little Steven’s Blues School in Norway and the Pinetop Perkins Foundation workshop in Mississippi.',
      hr: 'Stipendije European Blues Uniona vode ga u Blues School Little Stevena u Norveškoj i na radionicu Zaklade Pinetop Perkins u Mississippiju.',
    },
  },
  {
    year: '2024',
    who: 'odin',
    title: { en: 'Memphis', hr: 'Memphis' },
    body: {
      en: 'Represents Croatia at the International Blues Challenge. By sixteen he has played twelve cities across three continents.',
      hr: 'Predstavlja Hrvatsku na International Blues Challengeu. Sa šesnaest godina odsvirao je dvanaest gradova na tri kontinenta.',
    },
  },
  {
    year: '2025',
    who: 'berislav',
    title: { en: 'Ten years of Advent Run', hr: 'Deset godina Advent Runa' },
    body: {
      en: 'The tenth edition. More than 130 events delivered across a decade.',
      hr: 'Deseto izdanje. Više od 130 događaja kroz desetljeće.',
    },
  },
  {
    year: '2026',
    who: 'both',
    title: { en: 'Just Go', hr: 'Just Go' },
    body: {
      en: '"Bottom of the Circle" is released, produced by Fabrizio Grossi. And the consultancy takes the name of the thing both careers were built on.',
      hr: 'Izlazi „Bottom of the Circle” u produkciji Fabrizija Grossija. A konzalting dobiva ime po onome na čemu su obje karijere izgrađene.',
    },
  },
];
