import { getTranslations } from 'next-intl/server'

import PageHeader from '@/components/PageHeader'

export default async function BlogPage() {
  const t = await getTranslations('blog')

  return (
    <main className="w-full bg-white">
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} />

      {/* Página vacía a propósito: las entradas se cargan más adelante. */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <p className="max-w-2xl font-sans text-lg md:text-xl text-black/70 leading-relaxed italic">
          {t('comingSoon')}
        </p>
      </section>
    </main>
  )
}
