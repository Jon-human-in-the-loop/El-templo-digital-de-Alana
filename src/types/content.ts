/**
 * Content types for the editable content layer (src/content).
 *
 * Everything Alana needs to update by hand lives in `src/content/*` and is typed
 * here. Text that must appear in the three site languages uses `Localized`.
 */

export type Locale = 'en' | 'pt' | 'es'

export type Localized<T = string> = Record<Locale, T>

export type PortfolioCategorySlug = 'figurativo' | 'fluid-art'

/** A single image of an artwork: either the piece on a wall or a close-up detail. */
export type ArtworkImage = {
  src: string
  alt: string
}

/**
 * One artwork sheet ("ficha de obra").
 *
 * `year`, `dimensions`, `technique` and `description` are intentionally allowed
 * to be empty: the sheet renders the fields it has and hides the rest, so the
 * skeleton can be published before Alana fills the texts in.
 */
export type Artwork = {
  slug: string
  title: string
  category: PortfolioCategorySlug
  /** Main image — the piece hanging on a wall. */
  wallImage: ArtworkImage
  /** Close-ups and secondary shots. */
  detailImages: ArtworkImage[]
  year: string
  dimensions: string
  technique: Localized
  description: Localized
  /** Acotaciones sueltas de la obra. Vacío no se muestra. */
  notes: Localized
}

/** A portfolio category cover + intro copy (Portfolio page). */
export type PortfolioCategory = {
  slug: PortfolioCategorySlug
  title: Localized
  /** Full-bleed cover image, used as the section background. */
  cover: ArtworkImage
  description: Localized
}

export type Exhibition = {
  id: string
  year: string
  /** Fecha completa, localizada porque el mes cambia de idioma. */
  date: Localized
  title: string
  venue: string
  city: string
  country: string
  /** Optional note ("colectiva", "residencia", …). Empty string hides it. */
  note: Localized
}

export type CarouselSlide = {
  src: string
  alt: string
  /**
   * Vertical focal point for the `object-cover` crop, 0-100 (percent from the
   * top). Omit to keep the default center crop. Portrait photos where the
   * subject's face sits in the upper part of the frame need this set — on a
   * wide desktop viewport the hero section is much wider than it is tall, so
   * a plain center crop of a tall photo can cut the face off entirely.
   */
  focusY?: number
}
