/**
 * Galería — obra disponible con ficha detallada.
 *
 * ⚠️ DATOS DE EJEMPLO (placeholder) para mostrar el formato de la ficha.
 * Reemplazar título, año, medidas, técnica, descripción, simbolismo, precio,
 * estado e imágenes (principal / en pared / detalles) con las obras reales.
 * Idioma fuente: español. Pendiente de traducción EN/PT.
 */

export type GalleryCategory = 'originales' | 'acuarelas' | 'merch'

export interface GalleryWork {
  id: string
  title: string
  category: GalleryCategory
  year?: string
  dimensions?: string
  technique?: string
  description?: string
  symbolism?: string
  /** Imagen principal de la obra. */
  image: string
  /** Foto de la obra montada en pared (contexto). */
  wallImage?: string
  /** Fotos de detalle / extras. */
  details?: string[]
  status: 'available' | 'reserved' | 'sold'
  price?: string
}

export const galleryCategories: { id: GalleryCategory; title: string; description: string }[] = [
  { id: 'originales', title: 'Originales', description: 'Obra original única, pintada a mano.' },
  { id: 'acuarelas', title: 'Acuarelas', description: 'Acuarelas sobre papel.' },
  { id: 'merch', title: 'Merch', description: 'Prints, indumentaria y objetos.' },
]

export const galleryWorks: GalleryWork[] = [
  // ── Originales ──────────────────────────────────────────────
  {
    id: 'la-luz-y-la-sombra',
    title: 'La Luz y la Sombra',
    category: 'originales',
    year: '2024',
    dimensions: '70 × 100 cm',
    technique: 'Acrílico sobre lienzo',
    description: 'Descripción de la obra (placeholder). Reemplazar con el texto real.',
    symbolism: 'Simbolismo de la obra (placeholder). Reemplazar con el texto real.',
    image: '/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100.webp',
    wallImage: '/images/portfolio/figurativo/el-registro-del-poder-heredado-1.webp',
    details: ['/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100-vertical.webp'],
    status: 'available',
    price: 'Consultar',
  },
  {
    id: 'el-llanto-del-rey',
    title: 'El Llanto del Rey Expectante',
    category: 'originales',
    year: '2023',
    dimensions: '100 × 80 cm',
    technique: 'Acrílico sobre lienzo',
    description: 'Descripción de la obra (placeholder). Reemplazar con el texto real.',
    symbolism: 'Simbolismo de la obra (placeholder). Reemplazar con el texto real.',
    image: '/images/portfolio/figurativo/el-llanto-del-rey-expectante-2-100x80.webp',
    status: 'sold',
  },

  // ── Acuarelas ───────────────────────────────────────────────
  {
    id: 'las-aguas-resurreccion',
    title: 'Las Aguas de la Resurrección',
    category: 'acuarelas',
    year: '2024',
    dimensions: '30 × 40 cm',
    technique: 'Acuarela sobre papel',
    description: 'Descripción de la obra (placeholder). Reemplazar con el texto real.',
    image: '/images/portfolio/fluid-art/las-aguas-resurreccion.webp',
    details: ['/images/portfolio/fluid-art/las-aguas-2.webp'],
    status: 'available',
    price: 'Consultar',
  },
  {
    id: 'la-raiz',
    title: 'La Raíz',
    category: 'acuarelas',
    year: '2024',
    dimensions: '30 × 40 cm',
    technique: 'Acuarela sobre papel',
    description: 'Descripción de la obra (placeholder). Reemplazar con el texto real.',
    image: '/images/portfolio/fluid-art/la-raiz-1.webp',
    details: ['/images/portfolio/fluid-art/la-raiz-2.webp'],
    status: 'reserved',
    price: 'Consultar',
  },

  // ── Merch ───────────────────────────────────────────────────
  {
    id: 'print-premonicion',
    title: 'Print — Premonición',
    category: 'merch',
    technique: 'Impresión giclée, edición abierta',
    dimensions: 'A3 (29,7 × 42 cm)',
    description: 'Print de alta calidad (placeholder). Reemplazar con el texto real.',
    image: '/images/portfolio/fluid-art/premonicion.webp',
    status: 'available',
    price: '€25',
  },
  {
    id: 'print-como-es-arriba',
    title: 'Print — Como es Arriba es Abajo',
    category: 'merch',
    technique: 'Impresión giclée, edición abierta',
    dimensions: 'A3 (29,7 × 42 cm)',
    description: 'Print de alta calidad (placeholder). Reemplazar con el texto real.',
    image: '/images/portfolio/fluid-art/como-es-arriba.webp',
    status: 'available',
    price: '€25',
  },
]
