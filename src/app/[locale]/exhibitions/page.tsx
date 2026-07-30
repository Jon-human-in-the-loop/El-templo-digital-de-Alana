import { getTranslations } from 'next-intl/server'

import PageHeader from '@/components/PageHeader'

export default async function ExhibitionsPage() {
  const t = await getTranslations('exhibitions')

  return (
    <main className="w-full bg-white">
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} />

      {/* El listado se carga en la fase 6 desde src/content/exhibitions.ts */}
      <section className="px-6 md:px-12 py-24 md:py-32">
        <p className="max-w-2xl font-sans text-lg md:text-xl text-black/70 leading-relaxed italic">
          {t('empty')}
        </p>
      </section>
    </main>
  )
}
