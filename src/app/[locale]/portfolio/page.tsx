import { getTranslations } from 'next-intl/server'

import PageHeader from '@/components/PageHeader'
import CategorySection from '@/components/portfolio/CategorySection'
import { PORTFOLIO_CATEGORIES } from '@/content/portfolio'

export default async function PortfolioPage() {
  const t = await getTranslations('portfolio')

  return (
    <main className="w-full bg-white">
      <PageHeader eyebrow={t('eyebrow')} title={t('title')} />

      {/* Orden del array = orden en pantalla: Figurativo primero, Fluid Art después */}
      {PORTFOLIO_CATEGORIES.map((category) => (
        <CategorySection key={category.slug} category={category} />
      ))}
    </main>
  )
}
