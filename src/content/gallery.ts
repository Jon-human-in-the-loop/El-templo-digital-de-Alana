/**
 * Galería — obra disponible con ficha detallada.
 *
 * ⚠️ DATOS DE EJEMPLO (placeholder) para mostrar el formato de la ficha.
 * Reemplazar título, año, medidas, técnica, descripción, simbolismo, precio,
 * estado e imágenes (principal / en pared / detalles) con las obras reales.
 */

import type { Locale } from './locale'

export type GalleryCategory = 'originales' | 'acuarelas' | 'merch'

export interface GalleryWork {
  id: string
  title: string
  category: GalleryCategory
  year?: string
  dimensions?: string
  technique?: Record<Locale, string>
  description?: Record<Locale, string>
  symbolism?: Record<Locale, string>
  /** Imagen principal de la obra. */
  image: string
  /** Foto de la obra montada en pared (contexto). */
  wallImage?: string
  /** Fotos de detalle / extras. */
  details?: string[]
  status: 'available' | 'reserved' | 'sold'
  price?: string
}

export const galleryCategories: { id: GalleryCategory; description: Record<Locale, string> }[] = [
  {
    id: 'originales',
    description: {
      es: 'Obra original única, pintada a mano.',
      en: 'Unique original work, hand-painted.',
      pt: 'Obra original única, pintada à mão.',
    },
  },
  {
    id: 'acuarelas',
    description: {
      es: 'Acuarelas sobre papel.',
      en: 'Watercolours on paper.',
      pt: 'Aguarelas sobre papel.',
    },
  },
  {
    id: 'merch',
    description: {
      es: 'Prints, indumentaria y objetos.',
      en: 'Prints, apparel and objects.',
      pt: 'Prints, vestuário e objetos.',
    },
  },
]

const PLACEHOLDER_DESC: Record<Locale, string> = {
  es: 'Descripción de la obra (placeholder). Reemplazar con el texto real.',
  en: 'Artwork description (placeholder). Replace with the real text.',
  pt: 'Descrição da obra (placeholder). Substituir pelo texto real.',
}
const PLACEHOLDER_SYMB: Record<Locale, string> = {
  es: 'Simbolismo de la obra (placeholder). Reemplazar con el texto real.',
  en: 'Symbolism of the work (placeholder). Replace with the real text.',
  pt: 'Simbolismo da obra (placeholder). Substituir pelo texto real.',
}
const PLACEHOLDER_PRINT: Record<Locale, string> = {
  es: 'Print de alta calidad (placeholder). Reemplazar con el texto real.',
  en: 'High-quality print (placeholder). Replace with the real text.',
  pt: 'Print de alta qualidade (placeholder). Substituir pelo texto real.',
}
const ACRYLIC_CANVAS: Record<Locale, string> = {
  es: 'Acrílico sobre lienzo',
  en: 'Acrylic on canvas',
  pt: 'Acrílico sobre tela',
}
const WATERCOLOUR_PAPER: Record<Locale, string> = {
  es: 'Acuarela sobre papel',
  en: 'Watercolour on paper',
  pt: 'Aguarela sobre papel',
}
const GICLEE: Record<Locale, string> = {
  es: 'Impresión giclée, edición abierta',
  en: 'Giclée print, open edition',
  pt: 'Impressão giclée, edição aberta',
}

export const galleryWorks: GalleryWork[] = [
  // ── Originales ──────────────────────────────────────────────
  {
    id: 'la-luz-y-la-sombra',
    title: 'La Luz y la Sombra',
    category: 'originales',
    year: '2024',
    dimensions: '70 × 100 cm',
    technique: ACRYLIC_CANVAS,
    description: PLACEHOLDER_DESC,
    symbolism: PLACEHOLDER_SYMB,
    image: '/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100.webp',
    wallImage: '/images/portfolio/figurativo/el-registro-del-poder-heredado-1.webp',
    details: ['/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100-vertical.webp'],
    status: 'available',
  },
  {
    id: 'el-llanto-del-rey',
    title: 'El Llanto del Rey Expectante',
    category: 'originales',
    year: '2023',
    dimensions: '100 × 80 cm',
    technique: ACRYLIC_CANVAS,
    description: PLACEHOLDER_DESC,
    symbolism: PLACEHOLDER_SYMB,
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
    technique: WATERCOLOUR_PAPER,
    description: PLACEHOLDER_DESC,
    image: '/images/portfolio/fluid-art/las-aguas-resurreccion.webp',
    details: ['/images/portfolio/fluid-art/las-aguas-2.webp'],
    status: 'available',
  },
  {
    id: 'la-raiz',
    title: 'La Raíz',
    category: 'acuarelas',
    year: '2024',
    dimensions: '30 × 40 cm',
    technique: WATERCOLOUR_PAPER,
    description: PLACEHOLDER_DESC,
    image: '/images/portfolio/fluid-art/la-raiz-1.webp',
    details: ['/images/portfolio/fluid-art/la-raiz-2.webp'],
    status: 'reserved',
  },

  // ── Merch ───────────────────────────────────────────────────
  {
    id: 'print-premonicion',
    title: 'Print — Premonición',
    category: 'merch',
    technique: GICLEE,
    dimensions: 'A3 (29,7 × 42 cm)',
    description: PLACEHOLDER_PRINT,
    image: '/images/portfolio/fluid-art/premonicion.webp',
    status: 'available',
    price: '€25',
  },
  {
    id: 'print-como-es-arriba',
    title: 'Print — Como es Arriba es Abajo',
    category: 'merch',
    technique: GICLEE,
    dimensions: 'A3 (29,7 × 42 cm)',
    description: PLACEHOLDER_PRINT,
    image: '/images/portfolio/fluid-art/como-es-arriba.webp',
    status: 'available',
    price: '€25',
  },
]
