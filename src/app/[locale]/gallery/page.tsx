import { Link } from '@/i18n/routing'
import { getLocale, getTranslations } from 'next-intl/server'
import { galleryCategories, galleryWorks } from '@/content/gallery'
import { asLocale } from '@/content/locale'
import GalleryGrid from '@/components/GalleryGrid'
import CommunityPopup from '@/components/CommunityPopup'

const NAV_KEY: Record<string, string> = {
  originales: 'originals',
  acuarelas: 'watercolours',
  merch: 'merch',
}

export default async function GalleryPage() {
  const locale = asLocale(await getLocale())
  const tNav = await getTranslations('nav')
  const tPages = await getTranslations('pages')

  return (
    <div>
      <CommunityPopup />

      {/* Hero */}
      <section className="w-full px-6 py-20 md:py-28 bg-alana-grey">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-black/40 mb-4">{tPages('gallery')}</p>
          <h1 className="text-5xl md:text-7xl font-heading uppercase leading-none text-black mb-6">{tPages('gallery')}</h1>
          <p className="text-base md:text-lg text-black/60 font-sans italic max-w-xl">
            {tPages('galleryIntro')}{' '}
            <Link href="/contact" className="underline underline-offset-4 hover:opacity-60 transition-opacity">
              {tPages('galleryInquiry')}
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Secciones por categoría */}
      {galleryCategories.map((cat) => {
        const items = galleryWorks.filter((w) => w.category === cat.id)
        return (
          <section
            key={cat.id}
            id={cat.id}
            className="w-full px-6 md:px-10 py-16 md:py-24 border-t border-black/10 scroll-mt-24"
          >
            <div className="mx-auto max-w-6xl">
              <div className="mb-8">
                <h2 className="font-heading uppercase leading-none mb-2" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)' }}>
                  {tNav(NAV_KEY[cat.id])}
                </h2>
                <p className="font-sans text-black/50 italic text-sm">{cat.description[locale]}</p>
              </div>
              <GalleryGrid works={items} />
            </div>
          </section>
        )
      })}
    </div>
  )
}
