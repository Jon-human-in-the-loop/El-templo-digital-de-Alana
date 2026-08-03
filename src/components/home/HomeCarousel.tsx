'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'

import { CAROUSEL_INTERVAL_MS, CAROUSEL_SLIDES } from '@/content/home'

/**
 * Home cover: full-bleed carousel with the site name laid over it.
 *
 * Layering (low → high): images (z-0) · darkening veil (z-10) · name (z-20) ·
 * controls (z-30). The name always reads above the artwork.
 */
export default function HomeCarousel() {
  const t = useTranslations('hero')
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const total = CAROUSEL_SLIDES.length

  const goTo = useCallback((next: number) => {
    setIndex(((next % total) + total) % total)
  }, [total])

  useEffect(() => {
    if (paused || total < 2) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total)
    }, CAROUSEL_INTERVAL_MS)
    return () => window.clearInterval(timer)
  }, [paused, total])

  const slide = CAROUSEL_SLIDES[index]
  if (!slide) return null

  return (
    <section
      className="relative w-full h-[72vh] md:h-[84vh] overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={slide.src}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority={index === 0}
          />
        </motion.div>
      </AnimatePresence>

      {/* Veil so the name stays legible over any image */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.55) 100%)',
        }}
      />

      {/* Site name — on top of everything */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 pointer-events-none text-center">
        <h1
          className="font-heading uppercase text-white leading-none select-none"
          style={{ fontSize: 'clamp(2.6rem, 11vw, 10rem)', lineHeight: 0.88 }}
        >
          El Templo Digital
          <br />
          de Alana
        </h1>
      </div>

      {/* Bajada: pegada al borde inferior, justo encima de los puntos */}
      <p className="absolute bottom-12 md:bottom-14 left-1/2 -translate-x-1/2 z-20 w-full px-6 text-center font-sans text-white/80 text-xs md:text-sm tracking-[0.3em] uppercase pointer-events-none">
        {t('brandSubtitle')}
      </p>

      {/* Controls */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            aria-label={t('previousSlide')}
            className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 p-3 text-white/70 hover:text-white transition-colors"
          >
            <ChevronLeft size={32} strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            aria-label={t('nextSlide')}
            className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 p-3 text-white/70 hover:text-white transition-colors"
          >
            <ChevronRight size={32} strokeWidth={1.5} />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5">
            {CAROUSEL_SLIDES.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => goTo(i)}
                aria-label={t('goToSlide', { number: i + 1 })}
                aria-current={i === index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === index ? 'w-8 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
