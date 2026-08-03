import { getLocale, getTranslations } from 'next-intl/server'

import PageHeader from '@/components/PageHeader'
import { BLOG_INTRO, blogIntroParagraphs } from '@/content/blog'
import { localize } from '@/content/locale'

export default async function BlogPage() {
  const t = await getTranslations('blog')
  const locale = await getLocale()

  const paragraphs = blogIntroParagraphs(localize(BLOG_INTRO, locale))

  return (
    <main className="w-full bg-white">
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} />

      {/* Descripción fija — src/content/blog.ts */}
      <section className="px-6 md:px-12 py-14 md:py-20">
        <div className="max-w-3xl">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph.slice(0, 32)}
              className="font-sans text-base md:text-lg text-black/75 leading-relaxed mb-5 last:mb-0 italic"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Las entradas se cargan más adelante */}
      <section className="px-6 md:px-12 pb-24 md:pb-32 border-t border-black/10 pt-10">
        <p className="font-sans text-black/50 italic">{t('comingSoon')}</p>
      </section>
    </main>
  )
}
