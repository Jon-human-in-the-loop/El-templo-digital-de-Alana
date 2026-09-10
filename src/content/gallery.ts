import type { ArtworkImage, GalleryCategory } from '@/types/content'

/**
 * GALERÍA — portada de la sección.
 *
 * Es la imagen de fondo que abre la página, con el título y el botón de
 * consultas encima, como en la referencia de Kim Rose. Para cambiarla, basta
 * con apuntar a otro archivo.
 */
export const GALLERY_COVER: ArtworkImage = {
  src: '/images/artist/para.poner.en.portada.en.galeria.jpg',
  alt: 'Alana Zarza Iraeta con su obra',
}

/**
 * Secciones de la Galería, en el orden en que se muestran. «Acuarelas
 * originales» ya está publicada aunque todavía no tenga obra: se completa
 * cargando fichas con `category: 'acuarelas-originales'` en artworks.ts.
 */
export const GALLERY_CATEGORIES: GalleryCategory[] = [
  {
    slug: 'obras-originales',
    title: { es: 'Obras originales', en: 'Original works', pt: 'Obras originais' },
  },
  {
    slug: 'acuarelas-originales',
    title: { es: 'Acuarelas originales', en: 'Original watercolours', pt: 'Aguarelas originais' },
  },
]
