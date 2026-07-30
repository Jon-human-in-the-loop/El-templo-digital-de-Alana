import { getTranslations } from 'next-intl/server'

import PageHeader from '@/components/PageHeader'

export default async function GalleryPage() {
  const t = await getTranslations('gallery')

  return (
    <main className="w-full bg-white">
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} />

      {/* Las fichas de obra se cargan en la fase 5 desde src/content/artworks.ts */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <p className="max-w-2xl font-sans text-lg md:text-xl text-black/70 leading-relaxed italic">
          {t('empty')}
        </p>
      </section>
    </main>
  )
}
