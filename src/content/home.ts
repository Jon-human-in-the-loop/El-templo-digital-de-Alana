import type { ArtworkImage, CarouselSlide } from '@/types/content'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * HOME — carrusel de portada, retrato y cierre
 * ─────────────────────────────────────────────────────────────────────────────
 * El carrusel usa exactamente las fotos de `public/images/carrucel/`, en este
 * orden. Para cambiarlo: subí o quitá archivos de esa carpeta y actualizá esta
 * lista; no hay que tocar ningún componente.
 * ─────────────────────────────────────────────────────────────────────────────
 */
const STUDIO_ALT = 'Alana Zarzairaeta en su taller'

export const CAROUSEL_SLIDES: CarouselSlide[] = [
  { src: '/images/carrucel/1.jpg', alt: STUDIO_ALT },
  { src: '/images/carrucel/2.jpg', alt: STUDIO_ALT },
  { src: '/images/carrucel/2.1.jpg', alt: STUDIO_ALT },
  { src: '/images/carrucel/3.jpg', alt: STUDIO_ALT },
  { src: '/images/carrucel/4.jpg', alt: STUDIO_ALT },
  { src: '/images/carrucel/4.1.jpg', alt: STUDIO_ALT },
  { src: '/images/carrucel/5.jpg', alt: STUDIO_ALT },
  { src: '/images/carrucel/5.1.jpg', alt: STUDIO_ALT },
  { src: '/images/carrucel/6.jpg', alt: STUDIO_ALT },
  { src: '/images/carrucel/6.1.jpg', alt: STUDIO_ALT },
  { src: '/images/carrucel/6.2.jpg', alt: STUDIO_ALT },
]

/**
 * «About the artist» — retrato vertical que acompaña al statement.
 * Vive en `public/images/artist/`.
 */
export const ARTIST_PHOTO: ArtworkImage = {
  src: '/images/artist/about the artist.jpg',
  alt: STUDIO_ALT,
}

/**
 * Curriculum Vitae — dos fotos horizontales, una encima de la otra.
 * Viven en `public/images/cv/`.
 */
export const CV_PHOTOS: ArtworkImage[] = [
  { src: '/images/cv/CV1.jpg', alt: 'Alana Zarzairaeta pintando en su taller' },
  { src: '/images/cv/CV2.jpg', alt: 'Alana Zarzairaeta pintando en su taller' },
]

/** Imagen de cierre de la home: deriva a la Galería. Acá sí va obra. */
export const GALLERY_TEASER_IMAGE: ArtworkImage = {
  src: '/images/portfolio/fluid-art/se-ondula-el-eter.webp',
  alt: 'Se ondula el éter que ata las superficies',
}

/** Milliseconds between carousel slides. */
export const CAROUSEL_INTERVAL_MS = 6000
