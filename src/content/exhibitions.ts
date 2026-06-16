/**
 * Exhibiciones de la artista — fuente: documento de la artista.
 * Orden cronológico ascendente.
 */

export interface Exhibition {
  /** Título de la muestra o evento. */
  title: string
  /** Colectivo / contexto, si aplica. */
  collective?: string
  /** Fecha en texto, p. ej. "11 de noviembre de 2018". */
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
    date: '11 de noviembre de 2018',
    year: '2018',
    venue: 'Centro Cultural Paseo de las Artes',
    city: 'Córdoba Capital, Argentina',
  },
  {
    title: '¿Cuándo fue la última vez que te sentiste libre?',
    collective: 'La Otra Cara · Comunidad LOC',
    date: '13 de diciembre de 2018',
    year: '2018',
    venue: 'Centro Cultural Paseo de las Artes',
    city: 'Córdoba Capital, Argentina',
  },
  {
    title: 'Happening UGD',
    date: '23 de abril de 2022',
    year: '2022',
    venue: 'Campus Urbano de la Universidad Gastón Dachary',
    city: 'Posadas, Misiones, Argentina',
  },
  {
    title: 'Arte Impronta Misionera',
    date: '22 de marzo de 2024',
    year: '2024',
    venue: 'Salas 1 y 3 del Centro de Arte del Centro del Conocimiento',
    city: 'Posadas, Misiones, Argentina',
  },
  {
    title: 'Skateboard Gallery',
    collective: 'Tattoo Art Gallery · Além da pele',
    date: '16 de agosto de 2025',
    year: '2025',
    venue: 'Lucky Tattoo Porto',
    city: 'Porto, Portugal',
  },
  {
    title: 'The World Battle',
    collective: 'Tattoo Art Gallery · Além da pele',
    date: '25 de agosto de 2025',
    year: '2025',
    venue: 'MXM Art Center',
    city: 'Porto, Portugal',
  },
  {
    title: 'Exposición Internacional de Arte Além da pele',
    collective: 'Tattoo Art Gallery',
    date: '25 de junio de 2026',
    year: '2026',
    venue: 'Galeria Geraldes da Silva',
    city: 'Porto, Portugal',
  },
]
