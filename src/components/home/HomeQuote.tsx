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
    <div ref={ref} className="w-full bg-white px-6 pt-10 pb-12 md:pt-12 md:pb-16">
      <motion.blockquote
        className="mx-auto max-w-5xl text-center font-sans uppercase text-black/80 leading-tight tracking-[0.06em]"
        style={{ fontSize: 'clamp(1.15rem, 2.9vw, 2.25rem)' }}
        initial={{ opacity: 0, y: 24 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {localize(VOICE_QUOTE, locale)}
      </motion.blockquote>
    </div>
  )
}
