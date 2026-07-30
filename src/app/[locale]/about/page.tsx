import { getTranslations } from 'next-intl/server'

import AboutSection from '@/components/AboutSection'
import ExhibitionsList from '@/components/ExhibitionsList'
import PageHeader from '@/components/PageHeader'

export default async function AboutPage() {
  const t = await getTranslations('about')
  const tExhibitions = await getTranslations('exhibitions')

  return (
    <main className="w-full bg-white">
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} />
      <AboutSection />

      {/* Exhibiciones junto al CV — mismo listado que /exhibitions */}
      <section id="exhibitions" className="px-6 md:px-12 py-16 md:py-20 scroll-mt-24">
        <h2
          className="font-heading uppercase leading-none mb-8"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
        >
          {tExhibitions('title')}
        </h2>
        <ExhibitionsList />
      </section>
    </main>
  )
}
