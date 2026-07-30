import type { ArtworkImage, CarouselSlide } from '@/types/content'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * HOME — carrusel de portada, retrato y cierre
 * ─────────────────────────────────────────────────────────────────────────────
 * IMÁGENES PENDIENTES: la carpeta «Carrusel» todavía no está en el repositorio.
 * Mientras no esté, el carrusel y el retrato usan obra ya publicada para que la
 * home no quede con imágenes rotas.
 *
 * Cuando subas la carpeta a `public/images/carrusel/`, reemplazá los `src` de
 * `CAROUSEL_SLIDES` y de `ARTIST_PHOTO` por los archivos nuevos — no hay que
 * tocar ningún componente.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const CAROUSEL_SLIDES: CarouselSlide[] = [
  {
    src: '/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100.webp',
    alt: 'La luz y la sombra equilibran la mente y el espíritu',
  },
  {
    src: '/images/portfolio/fluid-art/las-aguas-resurreccion.webp',
    alt: 'Las aguas de la resurrección',
  },
  {
    src: '/images/portfolio/figurativo/el-llanto-del-rey-expectante-2-100x80.webp',
    alt: 'El llanto del rey expectante',
  },
  {
    src: '/images/portfolio/fluid-art/como-es-arriba.webp',
    alt: 'Como es arriba es abajo',
  },
  {
    src: '/images/portfolio/fluid-art/premonicion.webp',
    alt: 'Premonición',
  },
]

/** «About the artist» — retrato de Alana. */
export const ARTIST_PHOTO: ArtworkImage = {
  src: '/images/portfolio/figurativo/la-ceguera-que-viene-por-encandilarse-2.webp',
  alt: 'Alana Zarzairaeta',
}

/** Imagen de cierre de la home: deriva a la Galería. */
export const GALLERY_TEASER_IMAGE: ArtworkImage = {
  src: '/images/portfolio/fluid-art/se-ondula-el-eter.webp',
  alt: 'Se ondula el éter que ata las superficies',
}

/** Milliseconds between carousel slides. */
export const CAROUSEL_INTERVAL_MS = 6000
