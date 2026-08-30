import type { Artwork, PortfolioCategorySlug } from '@/types/content'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CATÁLOGO DE OBRA — editable
 * ─────────────────────────────────────────────────────────────────────────────
 * Cada entrada es una ficha de obra. Los campos `year`, `dimensions`,
 * `technique`, `description` y `notes` se pueden dejar vacíos: la ficha sólo
 * muestra los datos que existen, así que la galería se puede publicar y
 * completar después.
 *
 * Cómo cargar una obra:
 *   1. `title`     → nombre de la obra.
 *   2. `wallImage` → foto de la obra en pared (imagen principal de la ficha).
 *   3. `detailImages` → fotos de detalle, en el orden en que deben mostrarse.
 *   4. `year` / `dimensions` → texto libre, p. ej. '2024' y '70 × 100 cm'.
 *   5. `technique` / `description` → un texto por idioma (es / en / pt).
 *   6. `notes` → acotaciones sueltas, también por idioma.
 *
 * Las medidas ya cargadas provienen del nombre de archivo de la foto.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const EMPTY = { es: '', en: '', pt: '' }

export const ARTWORKS: Artwork[] = [
  /* ── Figurativo ─────────────────────────────────────────────────────────── */
  {
    slug: 'la-luz-y-la-sombra',
    title: 'La luz y la sombra equilibran la mente y el espíritu',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100-vertical.webp',
      alt: 'La luz y la sombra equilibran la mente y el espíritu',
    },
    detailImages: [
      {
        src: '/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100.webp',
        alt: 'La luz y la sombra equilibran la mente y el espíritu — detalle',
      },
    ],
    year: '',
    dimensions: '70 × 100 cm',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'el-llanto-del-rey-expectante',
    title: 'El llanto del rey expectante',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/el-llanto-del-rey-expectante-2-100x80.webp',
      alt: 'El llanto del rey expectante',
    },
    detailImages: [
      {
        src: '/images/portfolio/fluid-art/el-llanto-rey.webp',
        alt: 'El llanto del rey expectante — detalle',
      },
    ],
    year: '',
    dimensions: '70 × 30 cm',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'el-registro-del-poder-heredado',
    title: 'El registro del poder heredado',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/el-registro-del-poder-heredado-1.webp',
      alt: 'El registro del poder heredado',
    },
    detailImages: [
      {
        src: '/images/portfolio/figurativo/el-registro-del-poder-heredado-2.webp',
        alt: 'El registro del poder heredado — detalle',
      },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'la-ceguera-que-viene-por-encandilarse',
    title: 'La ceguera que viene por encandilarse',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/la-ceguera-que-viene-por-encandilarse-50x30-1.webp',
      alt: 'La ceguera que viene por encandilarse',
    },
    detailImages: [
      {
        src: '/images/portfolio/figurativo/la-ceguera-que-viene-por-encandilarse-2.webp',
        alt: 'La ceguera que viene por encandilarse — detalle',
      },
    ],
    year: '',
    dimensions: '50 × 30 cm',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'unibesos',
    title: 'Unibesos',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/unibesos-1.webp',
      alt: 'Unibesos',
    },
    detailImages: [
      { src: '/images/portfolio/figurativo/unibesos-2.webp', alt: 'Unibesos — detalle' },
      { src: '/images/portfolio/figurativo/unibesos-3.webp', alt: 'Unibesos — detalle' },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },

  /* ── Fluid Art ──────────────────────────────────────────────────────────── */
  {
    slug: 'premonicion',
    title: 'Premonición',
    category: 'fluid-art',
    wallImage: { src: '/images/portfolio/fluid-art/premonicion.webp', alt: 'Premonición' },
    detailImages: [],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 're-suscito',
    title: 'RE-suscito',
    category: 'fluid-art',
    wallImage: { src: '/images/portfolio/fluid-art/re-suscito.webp', alt: 'RE-suscito' },
    detailImages: [],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'como-es-arriba-es-abajo',
    title: 'Como es arriba es abajo',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/como-es-arriba.webp',
      alt: 'Como es arriba es abajo',
    },
    detailImages: [
      {
        src: '/images/portfolio/acuarela/como-es-arriba.webp',
        alt: 'Como es arriba es abajo — detalle',
      },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'se-ondula-el-eter',
    title: 'Se ondula el éter que ata las superficies',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/se-ondula-el-eter.webp',
      alt: 'Se ondula el éter que ata las superficies',
    },
    detailImages: [],
    year: '2022',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'las-aguas-de-la-resurreccion',
    title: 'Las aguas de la resurrección',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/las-aguas-resurreccion.webp',
      alt: 'Las aguas de la resurrección',
    },
    detailImages: [
      { src: '/images/portfolio/fluid-art/las-aguas-2.webp', alt: 'Las aguas de la resurrección — detalle' },
      { src: '/images/portfolio/fluid-art/las-aguas-3.webp', alt: 'Las aguas de la resurrección — detalle' },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'las-olas-que-se-espejaban',
    title: 'Las olas que se esperaban en las nubes',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/las-olas.webp',
      alt: 'Las olas que se esperaban en las nubes',
    },
    detailImages: [],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'la-raiz',
    title: 'La raíz',
    category: 'fluid-art',
    wallImage: { src: '/images/portfolio/fluid-art/la-raiz-1.webp', alt: 'La raíz' },
    detailImages: [
      { src: '/images/portfolio/fluid-art/la-raiz-2.webp', alt: 'La raíz — detalle' },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'en-el-oceano-divise-al-inframundo',
    title: 'En el océano divisé al inframundo',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/en-el-oceano-1.webp',
      alt: 'En el océano divisé al inframundo',
    },
    detailImages: [
      {
        src: '/images/portfolio/fluid-art/en-el-oceano-2.webp',
        alt: 'En el océano divisé al inframundo — detalle',
      },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'it-might-be-a-mess',
    title: 'It might be a mess',
    category: 'figurativo',
    wallImage: { src: '/images/portfolio/fluid-art/mess-mine-1.webp', alt: 'It might be a mess' },
    detailImages: [
      { src: '/images/portfolio/fluid-art/mess-mine-2.webp', alt: 'It might be a mess — detalle' },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'ya-no-se-oye-el-ultimo-suspiro',
    title: 'Ya no se oye el último suspiro',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/ya-no-se-oye-1.webp',
      alt: 'Ya no se oye el último suspiro',
    },
    detailImages: [
      { src: '/images/portfolio/fluid-art/ya-no-se-oye-2.webp', alt: 'Ya no se oye el último suspiro — detalle' },
      { src: '/images/portfolio/fluid-art/ya-no-se-oye-3.webp', alt: 'Ya no se oye el último suspiro — detalle' },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'un-petalo-un-mensaje-y-una-chispa',
    title: 'Un pétalo, un mensaje y una chispa',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/un-petalo-1.webp',
      alt: 'Un pétalo, un mensaje y una chispa — panel I',
    },
    detailImages: [
      {
        src: '/images/portfolio/fluid-art/un-petalo-2.webp',
        alt: 'Un pétalo, un mensaje y una chispa — panel II',
      },
      {
        src: '/images/portfolio/fluid-art/un-petalo-3.webp',
        alt: 'Un pétalo, un mensaje y una chispa — panel III',
      },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
]

export function artworksByCategory(category: PortfolioCategorySlug): Artwork[] {
  return ARTWORKS.filter((artwork) => artwork.category === category)
}

export function artworkBySlug(slug: string): Artwork | undefined {
  return ARTWORKS.find((artwork) => artwork.slug === slug)
}
