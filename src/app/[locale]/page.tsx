import { getTranslations } from 'next-intl/server'
import HeroCarousel from '@/components/HeroCarousel'
import PortfolioSection from '@/components/PortfolioSection'
import AboutSection from '@/components/AboutSection'
import GalleryCTA from '@/components/GalleryCTA'

export default async function Home() {
  const t = await getTranslations('home')

  return (
    <main className="w-full">
      <HeroCarousel />

      {/* Frase de la artista */}
      <section className="w-full px-6 py-20 md:py-28 bg-white">
        <p
          className="mx-auto max-w-3xl text-center font-sans italic text-black/80 leading-relaxed"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
        >
          {t('artistQuote')}
        </p>
      </section>

      <PortfolioSection />
      <AboutSection />
      <GalleryCTA />
    </main>
  )
}
