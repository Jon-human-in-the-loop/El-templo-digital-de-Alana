'use client'

import { motion, useInView } from 'framer-motion'
import { useLocale } from 'next-intl'
import { useRef } from 'react'

import { localize } from '@/content/locale'
import { VOICE_QUOTE } from '@/content/site'

/** Centred quote directly under the carousel. */
export default function HomeQuote() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const locale = useLocale()

  return (
    <div ref={ref} className="w-full bg-white px-6 py-16 md:py-24">
      <motion.blockquote
        className="mx-auto max-w-4xl text-center font-sans italic text-black/80 leading-snug"
        style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        «{localize(VOICE_QUOTE, locale)}»
      </motion.blockquote>
    </div>
  )
}
