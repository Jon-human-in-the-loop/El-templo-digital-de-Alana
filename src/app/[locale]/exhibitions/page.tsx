import { getTranslations } from 'next-intl/server'

import CollaborationNote from '@/components/CollaborationNote'
import ExhibitionsList from '@/components/ExhibitionsList'
import PageHeader from '@/components/PageHeader'

export default async function ExhibitionsPage() {
  const t = await getTranslations('exhibitions')

  return (
    <main className="w-full bg-white">
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} />

      {/* Listado editable en src/content/exhibitions.ts */}
      <section className="px-6 md:px-12 py-16 md:py-20">
        <ExhibitionsList />
      </section>

      <CollaborationNote className="border-t border-black" />
    </main>
  )
}
