import { getLocale, getTranslations } from 'next-intl/server'

import ArtworkList from '@/components/gallery/ArtworkList'
import GalleryCover from '@/components/gallery/GalleryCover'
import { artworksByCategory } from '@/content/artworks'
import { localize } from '@/content/locale'
import { GALLERY_CATEGORIES } from '@/content/gallery'

export default async function GalleryPage() {
  const t = await getTranslations('gallery')
  const locale = await getLocale()

  return (
    <main className="w-full bg-white">
      <GalleryCover eyebrow={t('eyebrow')} title={t('title')} />

      {/* Aviso de que las obras de la galería están a la venta */}
      <section className="w-full px-6 md:px-12 pt-16 md:pt-20 text-center">
        <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-black/50 mb-4">
          {t('availableLabel')}
        </p>
        <p
          className="font-heading leading-snug max-w-3xl mx-auto"
          style={{ fontSize: 'clamp(1.25rem, 2.6vw, 2rem)' }}
        >
          {t('availableText')}
        </p>
      </section>

      {/* Una sección por categoría de galería; las fichas viven en src/content/artworks.ts */}
      {GALLERY_CATEGORIES.map((category) => {
        const artworks = artworksByCategory(category.slug)

        return (
          <section key={category.slug} id={category.slug} className="w-full scroll-mt-24">
            <h2
              className="font-heading uppercase leading-none px-6 md:px-12 pt-16 pb-6"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
            >
              {localize(category.title, locale)}
            </h2>

            {artworks.length > 0 ? (
              <ArtworkList artworks={artworks} />
            ) : (
              <p className="px-6 md:px-12 pb-16 font-sans text-black/50 italic">{t('empty')}</p>
            )}
          </section>
        )
      })}
    </main>
  )
}
