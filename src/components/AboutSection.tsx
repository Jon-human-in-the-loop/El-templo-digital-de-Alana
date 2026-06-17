'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { statement, cv, collaborationNote } from '@/content/about'
import { asLocale } from '@/content/locale'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const locale = asLocale(useLocale())
  const t = useTranslations('aboutPage')

  return (
    <section ref={ref} id="sobre-mi" className="w-full" style={{ backgroundColor: '#F0EEED' }}>

      {/* ── Row 1: portrait left / statement right ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">

        {/* Left: "about the artist" portrait (vertical — placeholder hasta recibir el de Drive) */}
        <motion.div
          className="relative overflow-hidden"
          style={{ minHeight: '55vw', maxHeight: '760px' }}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src="/images/portfolio/figurativo/la-ceguera-que-viene-por-encandilarse-2.webp"
            alt="Alana Zarzairaeta"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right: full statement */}
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-16">
          <motion.p
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-black/40 mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {t('statementLabel')}
          </motion.p>

          {statement[locale].map((para, i) => (
            <motion.p
              key={i}
              className="font-sans text-base md:text-lg text-black/75 leading-relaxed mb-5 last:mb-0 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.06 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>

      {/* ── Row 2: Curriculum Vitae ── */}
      <CVSection />

      {/* ── Row 3: collaboration note + CTA ── */}
      <div className="border-t border-black/10 px-8 md:px-16 py-14 flex flex-col gap-8">
        <p className="font-sans italic text-black/70 text-lg md:text-xl max-w-3xl">
          {collaborationNote[locale]}
        </p>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2
            className="font-heading uppercase leading-none tracking-wider"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)' }}
          >
            {t('talkTitle')}
          </h2>
          <Link
            href="/contact"
            className="font-heading uppercase text-lg border-b-2 border-black pb-0.5 hover:opacity-40 transition-opacity tracking-widest"
          >
            {t('contactCta')} →
          </Link>
        </div>
      </div>
    </section>
  )
}

function CVSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const locale = asLocale(useLocale())
  const t = useTranslations('aboutPage')

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 border-t border-black/10">
      {/* Left: CV list */}
      <div className="px-10 md:px-16 lg:px-20 py-16">
        <motion.p
          className="font-heading uppercase tracking-[0.3em] mb-8"
          style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {t('cvLabel')}
        </motion.p>
        <ul className="space-y-6">
          {cv.map((m, i) => (
            <motion.li
              key={`${m.period.es}-${i}`}
              className="border-t border-black/10 pt-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.06 + i * 0.05 }}
            >
              <p className="font-sans text-xs text-black/40 uppercase tracking-widest mb-1">{m.period[locale]}</p>
              {m.title && (
                <p className="font-heading uppercase" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
                  {m.title[locale]}
                </p>
              )}
              <p className="font-sans text-sm text-black/60 italic mt-1">{m.description[locale]}</p>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Right: stacked images (placeholder — CV images from Drive go here) */}
      <div className="grid grid-rows-2 gap-0">
        <div className="relative overflow-hidden" style={{ minHeight: '300px' }}>
          <Image
            src="/images/portfolio/fluid-art/re-suscito.webp"
            alt="Obra de Alana Zarzairaeta"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative overflow-hidden" style={{ minHeight: '300px' }}>
          <Image
            src="/images/portfolio/fluid-art/premonicion.webp"
            alt="Obra de Alana Zarzairaeta"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  )
}
