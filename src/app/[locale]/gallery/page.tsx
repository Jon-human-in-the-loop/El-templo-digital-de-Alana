import { getLocale, getTranslations } from 'next-intl/server'

import ArtworkList from '@/components/gallery/ArtworkList'
import PageHeader from '@/components/PageHeader'
import { artworksByCategory } from '@/content/artworks'
import { localize } from '@/content/locale'
import { PORTFOLIO_CATEGORIES } from '@/content/portfolio'

export default async function GalleryPage() {
  const t = await getTranslations('gallery')
  const locale = await getLocale()

  return (
    <main className="w-full bg-white">
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} />

      {/* Una sección por categoría; las fichas viven en src/content/artworks.ts */}
      {PORTFOLIO_CATEGORIES.map((category) => {
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
