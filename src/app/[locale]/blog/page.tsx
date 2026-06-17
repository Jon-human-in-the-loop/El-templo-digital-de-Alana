import { getLocale, getTranslations } from 'next-intl/server'
import { blogIntro } from '@/content/blog'
import { asLocale } from '@/content/locale'

export default async function BlogPage() {
  const locale = asLocale(await getLocale())
  const t = await getTranslations('pages')

  return (
    <div>
      {/* Intro fija */}
      <section className="w-full px-6 py-20 md:py-28 bg-alana-grey">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-black/40 mb-4">{t('blog')}</p>
          <h1 className="text-5xl md:text-7xl font-heading uppercase leading-none text-black mb-8">{t('blog')}</h1>
          {blogIntro[locale].map((p, i) => (
            <p
              key={i}
              className="font-sans text-base md:text-lg text-black/70 italic leading-relaxed mb-5 last:mb-0"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Posts (próximamente) */}
      <section className="w-full px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-black/40 italic">{t('blogComingSoon')}</p>
        </div>
      </section>
    </div>
  )
}
