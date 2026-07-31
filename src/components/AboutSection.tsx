'use client'

import { motion, useInView } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRef } from 'react'

import { CV_MILESTONES } from '@/content/cv'
import { localize } from '@/content/locale'
import { STATEMENT, statementParagraphs } from '@/content/statement'

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const locale = useLocale()
  const t = useTranslations('about')

  const paras = statementParagraphs(localize(STATEMENT, locale))

  return (
    <section ref={ref} id="sobre-mi" className="w-full" style={{ backgroundColor: '#F0EEED' }}>

      {/* ── Row 1: image left / statement right — mirrors Canva reference ── */}
      <div id="statement" className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh] scroll-mt-24">

        {/* Left: key artwork */}
        <motion.div
          className="relative overflow-hidden"
          style={{ minHeight: '55vw', maxHeight: '700px' }}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src="/images/portfolio/figurativo/la-ceguera-que-viene-por-encandilarse-2.webp"
            alt="Alana — La Ceguera"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Right: statement text */}
        <div className="flex flex-col justify-center px-10 md:px-16 lg:px-20 py-16">
          <motion.p
            className="font-sans text-[10px] uppercase tracking-[0.3em] text-black/40 mb-6"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            {t('statement')}
          </motion.p>

          {paras.map((para, i) => (
            <motion.p
              key={i}
              className="font-sans text-base md:text-lg text-black/75 leading-relaxed mb-5 last:mb-0 italic"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.12 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>

      {/* ── Row 2: Curriculum Vitae — text left, images right ── */}
      <CVSection />
    </section>
  )
}

function CVSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const locale = useLocale()
  const t = useTranslations('about')

  return (
    <div
      ref={ref}
      id="cv"
      className="grid grid-cols-1 md:grid-cols-2 border-t border-black/10 scroll-mt-24"
    >
      {/* Left: cv list */}
      <div className="px-10 md:px-16 lg:px-20 py-16">
        <motion.p
          className="font-heading uppercase text-sm tracking-[0.3em] mb-8"
          style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          {t('cv')}
        </motion.p>
        <ul className="space-y-6">
          {CV_MILESTONES.map((milestone, i) => (
            <motion.li
              key={milestone.year}
              className="border-t border-black/10 pt-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <p className="font-sans text-xs text-black/40 uppercase tracking-widest mb-1">
                {milestone.year}
              </p>
              <p className="font-heading uppercase" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>
                {localize(milestone.label, locale)}
              </p>
              <p className="font-sans text-sm text-black/60 italic mt-1">
                {localize(milestone.description, locale)}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Right: stacked images */}
      <div className="grid grid-rows-2 gap-0">
        <div className="relative overflow-hidden" style={{ minHeight: '300px' }}>
          <Image
            src="/images/portfolio/fluid-art/re-suscito.webp"
            alt="Alana — Re-Suscito"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="relative overflow-hidden" style={{ minHeight: '300px' }}>
          <Image
            src="/images/portfolio/fluid-art/premonicion.webp"
            alt="Alana — Premonición"
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  )
}
