'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { localize } from '@/content/locale'
import type { Artwork } from '@/types/content'

interface ArtworkListProps {
  artworks: Artwork[]
}

/**
 * Gallery list: one collapsible sheet per artwork.
 * Fields with no content yet are simply not rendered, so the skeleton can be
 * published and filled in later from src/content/artworks.ts.
 */
export default function ArtworkList({ artworks }: ArtworkListProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(null)

  // Deep links from the portfolio (/gallery#obra-<slug>) open that sheet.
  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace('#obra-', '')
      if (hash && artworks.some((artwork) => artwork.slug === hash)) setOpenSlug(hash)
    }
    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
  }, [artworks])

  return (
    <ul className="w-full border-t border-black/10">
      {artworks.map((artwork) => (
        <ArtworkSheet
          key={artwork.slug}
          artwork={artwork}
          open={openSlug === artwork.slug}
          onToggle={() =>
            setOpenSlug((current) => (current === artwork.slug ? null : artwork.slug))
          }
        />
      ))}
    </ul>
  )
}

interface ArtworkSheetProps {
  artwork: Artwork
  open: boolean
  onToggle: () => void
}

function ArtworkSheet({ artwork, open, onToggle }: ArtworkSheetProps) {
  const t = useTranslations('gallery')
  const locale = useLocale()

  const technique = localize(artwork.technique, locale)
  const description = localize(artwork.description, locale)

  const facts = [
    { label: t('year'), value: artwork.year },
    { label: t('dimensions'), value: artwork.dimensions },
    { label: t('technique'), value: technique },
  ].filter((fact) => fact.value)

  return (
    <li id={`obra-${artwork.slug}`} className="border-b border-black/10 scroll-mt-28">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 px-6 md:px-12 py-6 md:py-8 text-left hover:bg-black/[0.03] transition-colors"
      >
        <span className="flex flex-col md:flex-row md:items-baseline md:gap-5">
          <span
            className="font-heading uppercase leading-none"
            style={{ fontSize: 'clamp(1.3rem, 3.4vw, 2.6rem)' }}
          >
            {artwork.title}
          </span>
          {artwork.year && (
            <span className="font-sans text-sm text-black/40 tracking-widest mt-1 md:mt-0">
              {artwork.year}
            </span>
          )}
        </span>
        <span className="shrink-0 text-black/50" aria-hidden="true">
          {open ? <Minus size={24} strokeWidth={1.5} /> : <Plus size={24} strokeWidth={1.5} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-6 md:px-12 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Imagen en pared */}
              <div className="relative w-full h-[60vh] lg:h-[70vh] bg-alana-grey">
                <Image
                  src={artwork.wallImage.src}
                  alt={artwork.wallImage.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Ficha */}
              <div className="flex flex-col">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-black/40 mb-6">
                  {t('details')}
                </p>

                {facts.length > 0 && (
                  <dl className="mb-8">
                    {facts.map((fact) => (
                      <div key={fact.label} className="flex gap-4 border-t border-black/10 py-3">
                        <dt className="w-32 shrink-0 font-sans text-xs uppercase tracking-widest text-black/40">
                          {fact.label}
                        </dt>
                        <dd className="font-sans text-base text-black/80">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {description && (
                  <p className="font-sans text-base md:text-lg text-black/75 leading-relaxed italic">
                    {description}
                  </p>
                )}

                {/* Imágenes de detalle */}
                {artwork.detailImages.length > 0 && (
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {artwork.detailImages.map((image) => (
                      <div key={image.src} className="relative h-40 md:h-52 bg-alana-grey">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}
