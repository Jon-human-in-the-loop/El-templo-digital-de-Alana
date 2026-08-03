import { getTranslations } from 'next-intl/server'

import AboutSection from '@/components/AboutSection'
import PageHeader from '@/components/PageHeader'

/**
 * Sobre mí: statement y Curriculum Vitae.
 * Las exhibiciones tienen su propia entrada en el menú, así que no se repiten
 * acá: el listado vive en /exhibitions.
 */
export default async function AboutPage() {
  const t = await getTranslations('about')

  return (
    <main className="w-full bg-white">
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} />
      <AboutSection />
    </main>
  )
}
