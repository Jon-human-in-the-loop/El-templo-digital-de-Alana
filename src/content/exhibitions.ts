import type { Exhibition } from '@/types/content'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * EXHIBICIONES — editable
 * ─────────────────────────────────────────────────────────────────────────────
 * Las siete del documento, en orden cronológico. `note` guarda el colectivo o
 * la muestra que las organizó.
 *
 * Una exhibición se publica cuando tiene año y ciudad: para agregar una nueva,
 * copiá una entrada y completá los campos.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'muy-lunaides-2018',
    year: '2018',
    date: {
      es: '11 de noviembre de 2018',
      en: '11 November 2018',
      pt: '11 de novembro de 2018',
    },
    title: 'Muy Lunaides',
    venue: 'Centro Cultural Paseo de las Artes',
    city: 'Córdoba Capital',
    country: 'Argentina',
    note: {
      es: 'La Otra Cara, Comunidad LOC',
      en: 'La Otra Cara, Comunidad LOC',
      pt: 'La Otra Cara, Comunidad LOC',
    },
  },
  {
    id: 'cuando-fue-la-ultima-vez-2018',
    year: '2018',
    date: {
      es: '13 de diciembre de 2018',
      en: '13 December 2018',
      pt: '13 de dezembro de 2018',
    },
    title: '¿Cuándo fue la última vez que te sentiste libre?',
    venue: 'Centro Cultural Paseo de las Artes',
    city: 'Córdoba Capital',
    country: 'Argentina',
    note: {
      es: 'La Otra Cara, Comunidad LOC',
      en: 'La Otra Cara, Comunidad LOC',
      pt: 'La Otra Cara, Comunidad LOC',
    },
  },
  {
    id: 'happening-ugd-2022',
    year: '2022',
    date: {
      es: '23 de abril de 2022',
      en: '23 April 2022',
      pt: '23 de abril de 2022',
    },
    title: 'Happening UGD',
    venue: 'Campus Urbano de la Universidad Gastón Dachary',
    city: 'Posadas, Misiones',
    country: 'Argentina',
    note: { es: '', en: '', pt: '' },
  },
  {
    id: 'arte-impronta-misionera-2024',
    year: '2024',
    date: {
      es: '22 de marzo de 2024',
      en: '22 March 2024',
      pt: '22 de março de 2024',
    },
    title: 'Arte Impronta Misionera',
    venue: 'Salas 1 y 3 del Centro de Arte del Centro del Conocimiento',
    city: 'Posadas, Misiones',
    country: 'Argentina',
    note: { es: '', en: '', pt: '' },
  },
  {
    id: 'skateboard-gallery-2025',
    year: '2025',
    date: {
      es: '16 de agosto de 2025',
      en: '16 August 2025',
      pt: '16 de agosto de 2025',
    },
    title: 'Skateboard Gallery',
    venue: 'Lucky Tattoo',
    city: 'Porto',
    country: 'Portugal',
    note: {
      es: 'Tattoo Art Gallery, Além da pele',
      en: 'Tattoo Art Gallery, Além da pele',
      pt: 'Tattoo Art Gallery, Além da pele',
    },
  },
  {
    id: 'the-world-battle-2025',
    year: '2025',
    date: {
      es: '25 de agosto de 2025',
      en: '25 August 2025',
      pt: '25 de agosto de 2025',
    },
    title: 'The World Battle',
    venue: 'MXM Art Center',
    city: 'Porto',
    country: 'Portugal',
    note: {
      es: 'Tattoo Art Gallery, Além da pele',
      en: 'Tattoo Art Gallery, Além da pele',
      pt: 'Tattoo Art Gallery, Além da pele',
    },
  },
  {
    id: 'alem-da-pele-2026',
    year: '2026',
    date: {
      es: '25 de junio de 2026',
      en: '25 June 2026',
      pt: '25 de junho de 2026',
    },
    title: 'Exposición Internacional de Arte Além da pele',
    venue: 'Galería Geraldes da Silva',
    city: 'Porto',
    country: 'Portugal',
    note: {
      es: 'Tattoo Art Gallery',
      en: 'Tattoo Art Gallery',
      pt: 'Tattoo Art Gallery',
    },
  },
]

/** Only exhibitions with at least a year and a city are shown. */
export function publishedExhibitions(): Exhibition[] {
  return EXHIBITIONS.filter((exhibition) => exhibition.year && exhibition.city)
}
