'use client'

import { motion, useInView } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRef } from 'react'

import { ARTIST_PHOTO } from '@/content/home'
import { localize } from '@/content/locale'
import { STATEMENT, statementParagraphs } from '@/content/statement'
import { Link } from '@/i18n/routing'

/** Home «about the artist» block: portrait + opening of the statement. */
export default function AboutTheArtist() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const locale = useLocale()
  const t = useTranslations('home')

  const paragraphs = statementParagraphs(localize(STATEMENT, locale)).slice(0, 2)

  return (
    <section
      ref={ref}
      id="about-the-artist"
      className="w-full border-t border-black/10"
      style={{ backgroundColor: '#F0EEED' }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Portrait */}
        <motion.div
          className="relative overflow-hidden min-h-[70vw] md:min-h-[600px]"
          initial={{ opacity: 0, x: -24 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <Image
            src={ARTIST_PHOTO.src}
            alt={ARTIST_PHOTO.alt}
            fill
            /* object-top: el retrato es vertical y la cara está arriba; centrado la recortaba */
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Copy */}
        <div className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16">
          <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-black/40 mb-4">
            {t('aboutEyebrow')}
          </p>
          <h2
            className="font-heading uppercase leading-none mb-8"
            style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
          >
            {t('aboutTitle')}
          </h2>

          {paragraphs.map((paragraph, i) => (
            <motion.p
              key={paragraph.slice(0, 24)}
              className="font-sans text-base md:text-lg text-black/75 leading-relaxed mb-5 last:mb-0 italic"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.15 + i * 0.12 }}
            >
              {paragraph}
            </motion.p>
          ))}

          <Link
            href="/about"
            className="mt-10 self-start font-heading uppercase text-lg border-b-2 border-black pb-0.5 hover:opacity-40 transition-opacity tracking-widest"
          >
            {t('aboutCta')} →
          </Link>
        </div>
      </div>
    </section>
  )
}
