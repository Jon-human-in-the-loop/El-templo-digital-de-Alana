import Image from 'next/image'
import { getLocale, getTranslations } from 'next-intl/server'
import { categories, worksByCategory } from '@/content/portfolio'
import { asLocale } from '@/content/locale'
import PortfolioGrid from '@/components/PortfolioGrid'

const NAV_KEY: Record<string, string> = {
  figurativo: 'figurative',
  'fluid-art': 'fluidArt',
  acuarelas: 'watercolours',
  murales: 'murals',
}

export default async function PortfolioPage() {
  const locale = asLocale(await getLocale())
  const tNav = await getTranslations('nav')
  const tPages = await getTranslations('pages')

  return (
    <div>
      {/* Hero */}
      <section className="w-full px-6 pt-20 md:pt-28 pb-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-black/40 mb-4">{tPages('portfolio')}</p>
          <h1 className="font-heading uppercase leading-none text-black" style={{ fontSize: 'clamp(3rem, 11vw, 9rem)' }}>
            {tPages('portfolioWork')}
          </h1>
        </div>
      </section>

      {categories.map((cat) => {
        const items = worksByCategory(cat.id)
        const title = tNav(NAV_KEY[cat.id])
        const desc = cat.description[locale]
        return (
          <section key={cat.id} id={cat.id} className="w-full scroll-mt-24 border-t border-black">
            {/* Portada de la sección */}
            {cat.cover ? (
              <div className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden bg-black">
                <Image src={cat.cover} alt={title} fill className="object-cover opacity-70" sizes="100vw" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <h2 className="font-heading uppercase leading-none text-white" style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}>
                    {title}
                  </h2>
                  {desc && (
                    <p className="font-sans text-white/80 italic max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
                      {desc}
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <div className="w-full bg-black px-6 md:px-12 py-16 md:py-24">
                <h2 className="font-heading uppercase leading-none text-white" style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}>
                  {title}
                </h2>
                {desc && (
                  <p className="font-sans text-white/80 italic max-w-2xl mt-4 text-sm md:text-base leading-relaxed">
                    {desc}
                  </p>
                )}
              </div>
            )}

            {/* Grilla de obras */}
            <PortfolioGrid works={items} />
          </section>
        )
      })}
    </div>
  )
}
