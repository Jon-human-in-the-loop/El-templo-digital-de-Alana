'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { works } from '@/content/portfolio'
import PortfolioGrid from './PortfolioGrid'

export default function PortfolioSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true })
  const t = useTranslations('pages')

  // Preview para la home — la obra completa vive en /portfolio
  const preview = works.slice(0, 12)

  return (
    <section id="portfolio" className="w-full bg-white">
      {/* Section header */}
      <div ref={titleRef} className="px-6 md:px-12 pt-20 pb-10 border-t border-black">
        <motion.p
          className="font-sans text-xs uppercase tracking-[0.25em] text-black/40 mb-3"
          initial={{ opacity: 0 }}
          animate={titleInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {t('portfolio')}
        </motion.p>
        <motion.h2
          className="font-heading uppercase leading-none"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {t('portfolioWork')}
        </motion.h2>
      </div>

      {/* Preview grid */}
      <PortfolioGrid works={preview} />

      {/* CTA */}
      <div className="px-6 md:px-12 py-16 border-t border-black flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <h2 className="font-heading uppercase leading-none" style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}>
          {t('portfolioSeeAll')}
        </h2>
        <Link
          href="/portfolio"
          className="inline-flex items-center gap-3 font-heading uppercase text-xl border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
        >
          {t('portfolioExplore')}
          <span className="text-2xl">→</span>
        </Link>
      </div>
    </section>
  )
}
