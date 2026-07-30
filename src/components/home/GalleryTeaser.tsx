'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { GALLERY_TEASER_IMAGE } from '@/content/home'
import { Link } from '@/i18n/routing'

/** Closing image of the home page — the whole block routes to the gallery. */
export default function GalleryTeaser() {
  const t = useTranslations('home')

  return (
    <Link
      href="/gallery"
      className="group relative block w-full h-[60vh] md:h-[80vh] overflow-hidden border-t border-black"
    >
      <Image
        src={GALLERY_TEASER_IMAGE.src}
        alt={GALLERY_TEASER_IMAGE.alt}
        fill
        className="object-cover object-center transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/45 transition-colors duration-700" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <p className="font-sans text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/70 mb-4">
          {t('galleryEyebrow')}
        </p>
        <h2
          className="font-heading uppercase text-white leading-none"
          style={{ fontSize: 'clamp(2rem, 7vw, 6rem)' }}
        >
          {t('galleryTitle')}
        </h2>
        <span className="mt-8 inline-flex items-center gap-3 font-heading uppercase text-base md:text-lg text-white border border-white/70 px-7 py-4 group-hover:bg-white group-hover:text-black transition-colors duration-300">
          {t('galleryCta')}
          <span aria-hidden="true">→</span>
        </span>
      </div>
    </Link>
  )
}
