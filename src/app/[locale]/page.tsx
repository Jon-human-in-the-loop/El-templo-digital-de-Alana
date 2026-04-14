import HeroSection from '@/components/HeroSection'
import PortfolioSection from '@/components/PortfolioSection'
import AboutSection from '@/components/AboutSection'

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
    </main>
  )
}
