import type { Exhibition } from '@/types/content'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * EXHIBICIONES — editable
 * ─────────────────────────────────────────────────────────────────────────────
 * Son nueve en total. De momento están cargados el año y la ciudad de cada una;
 * `title` y `venue` quedan vacíos hasta que se carguen desde el documento (los
 * campos vacíos simplemente no se muestran).
 *
 * Una exhibición aparece en la página cuando tiene `year` y `city`. Las tres
 * últimas están todavía sin datos a propósito: completá año y ciudad y se
 * publican solas.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const EXHIBITIONS: Exhibition[] = [
  {
    id: 'cordoba-2018',
    year: '2018',
    title: '',
    venue: '',
    city: 'Córdoba',
    country: 'Argentina',
    note: { es: '', en: '', pt: '' },
  },
  {
    id: 'posadas-2022',
    year: '2022',
    title: '',
    venue: '',
    city: 'Posadas',
    country: 'Argentina',
    note: { es: '', en: '', pt: '' },
  },
  {
    id: 'posadas-2024',
    year: '2024',
    title: '',
    venue: '',
    city: 'Posadas',
    country: 'Argentina',
    note: { es: '', en: '', pt: '' },
  },
  {
    id: 'porto-2025-i',
    year: '2025',
    title: '',
    venue: '',
    city: 'Porto',
    country: 'Portugal',
    note: { es: '', en: '', pt: '' },
  },
  {
    id: 'porto-2025-ii',
    year: '2025',
    title: '',
    venue: '',
    city: 'Porto',
    country: 'Portugal',
    note: { es: '', en: '', pt: '' },
  },
  {
    id: 'porto-2026',
    year: '2026',
    title: '',
    venue: '',
    city: 'Porto',
    country: 'Portugal',
    note: { es: '', en: '', pt: '' },
  },
  // ── Pendientes: cargar año y ciudad para que se publiquen ──────────────────
  {
    id: 'pendiente-1',
    year: '',
    title: '',
    venue: '',
    city: '',
    country: '',
    note: { es: '', en: '', pt: '' },
  },
  {
    id: 'pendiente-2',
    year: '',
    title: '',
    venue: '',
    city: '',
    country: '',
    note: { es: '', en: '', pt: '' },
  },
  {
    id: 'pendiente-3',
    year: '',
    title: '',
    venue: '',
    city: '',
    country: '',
    note: { es: '', en: '', pt: '' },
  },
]

/** Only exhibitions with at least a year and a city are shown. */
export function publishedExhibitions(): Exhibition[] {
  return EXHIBITIONS.filter((exhibition) => exhibition.year && exhibition.city)
}
