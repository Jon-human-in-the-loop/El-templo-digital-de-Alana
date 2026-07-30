import CollaborationNote from '@/components/CollaborationNote'
import AboutTheArtist from '@/components/home/AboutTheArtist'
import GalleryTeaser from '@/components/home/GalleryTeaser'
import HomeCarousel from '@/components/home/HomeCarousel'
import HomeMenu from '@/components/home/HomeMenu'
import HomeQuote from '@/components/home/HomeQuote'

export default function Home() {
  return (
    <main className="w-full">
      <HomeCarousel />
      <HomeMenu />
      <HomeQuote />
      <AboutTheArtist />
      <CollaborationNote className="bg-white border-t border-black" />
      <GalleryTeaser />
    </main>
  )
}
