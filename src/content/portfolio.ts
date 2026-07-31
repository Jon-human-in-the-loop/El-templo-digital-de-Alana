import type { PortfolioCategory } from '@/types/content'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * PORTFOLIO — dos secciones, Figurativo primero
 * ─────────────────────────────────────────────────────────────────────────────
 * El orden del array es el orden en que se muestran las secciones.
 *
 * PENDIENTE DE CONTENIDO: las descripciones de Figurativo y Fluid Art están
 * redactadas en la página 5 del documento de Alana. Todavía no están cargadas
 * acá — pegá cada texto en `description` (es / en / pt). Mientras el campo esté
 * vacío la página no muestra ningún párrafo, así que no se publica texto de
 * relleno.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    slug: 'figurativo',
    title: { es: 'Figurativo', en: 'Figurative', pt: 'Figurativo' },
    cover: {
      src: '/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100.webp',
      alt: 'Figurativo — obra de Alana Zarzairaeta',
    },
    description: { es: '', en: '', pt: '' },
  },
  {
    // «Fluid Art» se usa igual en los tres idiomas: es el nombre de la serie.
    slug: 'fluid-art',
    title: { es: 'Fluid Art', en: 'Fluid Art', pt: 'Fluid Art' },
    cover: {
      src: '/images/portfolio/fluid-art/las-aguas-resurreccion.webp',
      alt: 'Fluid Art — obra de Alana Zarzairaeta',
    },
    description: { es: '', en: '', pt: '' },
  },
]

export function portfolioCategory(slug: string): PortfolioCategory | undefined {
  return PORTFOLIO_CATEGORIES.find((category) => category.slug === slug)
}
