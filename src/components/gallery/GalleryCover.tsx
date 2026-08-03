import Image from 'next/image'

import ArtInquiriesButton from '@/components/ArtInquiriesButton'
import { GALLERY_COVER } from '@/content/gallery'

interface GalleryCoverProps {
  eyebrow: string
  title: string
}

/**
 * Portada de la Galería: imagen a sangre con el título y el botón de consultas
 * encima, como en la referencia (kimroseart.com/art).
 */
export default function GalleryCover({ eyebrow, title }: GalleryCoverProps) {
  return (
    <section className="relative w-full h-[62vh] md:h-[82vh] overflow-hidden bg-black">
      <Image
        src={GALLERY_COVER.src}
        alt={GALLERY_COVER.alt}
        fill
        className="object-cover object-center"
        sizes="100vw"
        priority
      />

      {/* Velo para que el texto se lea sobre la foto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.15) 40%, rgba(0,0,0,0.60) 100%)',
        }}
      />

      {/* Anclado abajo: centrado, el título tapaba la cara */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-6 pb-12 md:pb-16">
        <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/70 mb-4">
          {eyebrow}
        </p>
        <h1
          className="font-heading uppercase text-white leading-none"
          style={{ fontSize: 'clamp(2.5rem, 9vw, 8rem)' }}
        >
          {title}
        </h1>
        <div className="mt-8 md:mt-10">
          <ArtInquiriesButton tone="light" />
        </div>
      </div>
    </section>
  )
}
