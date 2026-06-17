/**
 * Exhibiciones de la artista — fuente: documento de la artista.
 * Orden cronológico ascendente. `date` en ISO (YYYY-MM-DD) para localizar el
 * formato por idioma; los nombres propios (título, espacio, ciudad) no se traducen.
 */

export interface Exhibition {
  /** Título de la muestra o evento. */
  title: string
  /** Colectivo / contexto, si aplica. */
  collective?: string
  /** Fecha en ISO (YYYY-MM-DD). */
  date: string
  /** Año, para agrupar/ordenar visualmente. */
  year: string
  /** Espacio / galería. */
  venue: string
  /** Ciudad y país. */
  city: string
}

export const exhibitions: Exhibition[] = [
  {
    title: 'Muy Lunaides',
    collective: 'La Otra Cara · Comunidad LOC',
    date: '2018-11-11',
    year: '2018',
    venue: 'Centro Cultural Paseo de las Artes',
    city: 'Córdoba Capital, Argentina',
  },
  {
    title: '¿Cuándo fue la última vez que te sentiste libre?',
    collective: 'La Otra Cara · Comunidad LOC',
    date: '2018-12-13',
    year: '2018',
    venue: 'Centro Cultural Paseo de las Artes',
    city: 'Córdoba Capital, Argentina',
  },
  {
    title: 'Happening UGD',
    date: '2022-04-23',
    year: '2022',
    venue: 'Campus Urbano de la Universidad Gastón Dachary',
    city: 'Posadas, Misiones, Argentina',
  },
  {
    title: 'Arte Impronta Misionera',
    date: '2024-03-22',
    year: '2024',
    venue: 'Salas 1 y 3 del Centro de Arte del Centro del Conocimiento',
    city: 'Posadas, Misiones, Argentina',
  },
  {
    title: 'Skateboard Gallery',
    collective: 'Tattoo Art Gallery · Além da pele',
    date: '2025-08-16',
    year: '2025',
    venue: 'Lucky Tattoo Porto',
    city: 'Porto, Portugal',
  },
  {
    title: 'The World Battle',
    collective: 'Tattoo Art Gallery · Além da pele',
    date: '2025-08-25',
    year: '2025',
    venue: 'MXM Art Center',
    city: 'Porto, Portugal',
  },
  {
    title: 'Exposición Internacional de Arte Além da pele',
    collective: 'Tattoo Art Gallery',
    date: '2026-06-25',
    year: '2026',
    venue: 'Galeria Geraldes da Silva',
    city: 'Porto, Portugal',
  },
]
