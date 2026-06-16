/**
 * Obras y categorías del Portfolio — fuente única de datos.
 * Las imágenes viven en /public/images/portfolio/<categoria>/.
 * El orden de `categories` define el orden en la página (Figurativo → Fluid Art).
 */

export type CategoryId = 'figurativo' | 'fluid-art' | 'acuarelas' | 'murales'

export interface Work {
  src: string
  title: string
  category: CategoryId
  size: 'small' | 'medium' | 'large'
}

export interface CategoryInfo {
  id: CategoryId
  /** Etiqueta visible (anclas del menú usan el id). */
  title: string
  /** Descripción editorial de la sección (portada). */
  description: string
  /** Imagen de "portada" a todo lo ancho (placeholder hasta recibir las de Drive). */
  cover?: string
}

export const categories: CategoryInfo[] = [
  {
    id: 'figurativo',
    title: 'Figurativo',
    description:
      'Siempre mi arte se comunicó primero conmigo. Es como si seres que están en otro lugar tocaran la puerta de mi ser para darme su mensaje sagrado. Estos seres existen. No sé cómo se ven. Mi misión es traducir su brillante energía en una imagen que haga perdurar su mensaje por los siglos de los siglos. Todas mis pinturas tienen una energía viva que habita en ellas y no muere jamás. Estos personajes son parte mía, parte de mi vida. Son un diario íntimo de sanación.',
    cover: '/images/portfolio/figurativo/el-llanto-del-rey-expectante-2-100x80.webp',
  },
  {
    id: 'fluid-art',
    title: 'Fluid Art',
    description:
      'En estas obras me descubro, descubro la naturaleza de lo potencial. La pintura está viva porque su medio es el agua, y el agua es lo más cercano a Dios. El agua, lo líquido, carga un comportamiento propio, que puedo guiar pero no controlar. Estas obras son el resultado en conjunto con Dios (como toda mi obra), siendo muy gráfica nuestra colaboración a lo largo de esta colección.',
    cover: '/images/portfolio/fluid-art/como-es-arriba.webp',
  },
  {
    id: 'acuarelas',
    title: 'Acuarelas',
    description: '',
  },
  {
    id: 'murales',
    title: 'Murales',
    description: '',
  },
]

export const works: Work[] = [
  // ── Figurativo ──────────────────────────────────────────────
  { src: '/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100-vertical.webp', title: 'La Luz y la Sombra', category: 'figurativo', size: 'large' },
  { src: '/images/portfolio/figurativo/el-registro-del-poder-heredado-1.webp', title: 'El Registro del Poder Heredado', category: 'figurativo', size: 'medium' },
  { src: '/images/portfolio/figurativo/el-registro-del-poder-heredado-2.webp', title: 'El Registro del Poder Heredado II', category: 'figurativo', size: 'medium' },
  { src: '/images/portfolio/figurativo/el-llanto-del-rey-expectante-2-100x80.webp', title: 'El Llanto del Rey Expectante', category: 'figurativo', size: 'large' },
  { src: '/images/portfolio/figurativo/la-ceguera-que-viene-por-encandilarse-2.webp', title: 'La Ceguera', category: 'figurativo', size: 'medium' },
  { src: '/images/portfolio/figurativo/la-ceguera-que-viene-por-encandilarse-50x30-1.webp', title: 'La Ceguera I', category: 'figurativo', size: 'small' },
  { src: '/images/portfolio/figurativo/unibesos-1.webp', title: 'Unibesos', category: 'figurativo', size: 'small' },
  { src: '/images/portfolio/figurativo/unibesos-2.webp', title: 'Unibesos II', category: 'figurativo', size: 'medium' },
  { src: '/images/portfolio/figurativo/unibesos-3.webp', title: 'Unibesos III', category: 'figurativo', size: 'large' },

  // ── Fluid Art ───────────────────────────────────────────────
  { src: '/images/portfolio/fluid-art/premonicion.webp', title: 'Premonición', category: 'fluid-art', size: 'large' },
  { src: '/images/portfolio/fluid-art/re-suscito.webp', title: 'Re-Suscito', category: 'fluid-art', size: 'medium' },
  { src: '/images/portfolio/fluid-art/como-es-arriba.webp', title: 'Como es Arriba es Abajo', category: 'fluid-art', size: 'large' },
  { src: '/images/portfolio/fluid-art/se-ondula-el-eter.webp', title: 'Se Ondula el Éter', category: 'fluid-art', size: 'medium' },
  { src: '/images/portfolio/fluid-art/las-aguas-resurreccion.webp', title: 'Las Aguas de la Resurrección', category: 'fluid-art', size: 'large' },
  { src: '/images/portfolio/fluid-art/las-aguas-2.webp', title: 'Las Aguas de la Resurrección II', category: 'fluid-art', size: 'medium' },
  { src: '/images/portfolio/fluid-art/las-aguas-3.webp', title: 'Las Aguas de la Resurrección III', category: 'fluid-art', size: 'small' },
  { src: '/images/portfolio/fluid-art/las-olas.webp', title: 'Las Olas que se Espejaban', category: 'fluid-art', size: 'medium' },
  { src: '/images/portfolio/fluid-art/la-raiz-1.webp', title: 'La Raíz', category: 'fluid-art', size: 'large' },
  { src: '/images/portfolio/fluid-art/la-raiz-2.webp', title: 'La Raíz II', category: 'fluid-art', size: 'medium' },
  { src: '/images/portfolio/fluid-art/en-el-oceano-1.webp', title: 'En el Océano Divisé al Inframundo', category: 'fluid-art', size: 'small' },
  { src: '/images/portfolio/fluid-art/en-el-oceano-2.webp', title: 'En el Océano Divisé al Inframundo II', category: 'fluid-art', size: 'medium' },
  { src: '/images/portfolio/fluid-art/un-petalo-1.webp', title: 'Un Pétalo, Un Mensaje y Una Chispa I', category: 'fluid-art', size: 'medium' },
  { src: '/images/portfolio/fluid-art/un-petalo-2.webp', title: 'Un Pétalo, Un Mensaje y Una Chispa II', category: 'fluid-art', size: 'medium' },
  { src: '/images/portfolio/fluid-art/un-petalo-3.webp', title: 'Un Pétalo, Un Mensaje y Una Chispa III', category: 'fluid-art', size: 'medium' },
  { src: '/images/portfolio/fluid-art/mess-mine-1.webp', title: 'It Might Be a Mess', category: 'fluid-art', size: 'large' },
  { src: '/images/portfolio/fluid-art/mess-mine-2.webp', title: 'It Might Be a Mess II', category: 'fluid-art', size: 'medium' },
  { src: '/images/portfolio/fluid-art/ya-no-se-oye-1.webp', title: 'Ya No Se Oye el Último Suspiro', category: 'fluid-art', size: 'medium' },
  { src: '/images/portfolio/fluid-art/ya-no-se-oye-2.webp', title: 'Ya No Se Oye el Último Suspiro II', category: 'fluid-art', size: 'large' },
  { src: '/images/portfolio/fluid-art/ya-no-se-oye-3.webp', title: 'Ya No Se Oye el Último Suspiro III', category: 'fluid-art', size: 'medium' },
  { src: '/images/portfolio/fluid-art/unibesos-2.webp', title: 'Unibesos II', category: 'fluid-art', size: 'medium' },
  { src: '/images/portfolio/fluid-art/unibesos-3.webp', title: 'Unibesos III', category: 'fluid-art', size: 'medium' },
]

/** Devuelve las obras de una categoría, en el orden del array. */
export function worksByCategory(category: CategoryId): Work[] {
  return works.filter((w) => w.category === category)
}
