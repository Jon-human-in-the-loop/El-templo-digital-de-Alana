'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'
import { useTranslations } from 'next-intl'
import type { Work } from '@/content/portfolio'

const HEIGHT: Record<Work['size'], string> = {
  large: 'h-[500px] md:h-[600px]',
  medium: 'h-[380px] md:h-[450px]',
  small: 'h-[280px] md:h-[320px]',
}

function WorkCard({ work, index }: { work: Work; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      className={`relative group overflow-hidden ${HEIGHT[work.size]}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut', delay: (index % 6) * 0.06 }}
    >
      <Image
        src={work.src}
        alt={work.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex flex-col justify-end p-5 md:p-7">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <h3 className="font-heading text-white uppercase" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
            {work.title}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

/** Grilla de obras a dos columnas. */
export default function PortfolioGrid({ works }: { works: Work[] }) {
  const t = useTranslations('gallery')
  if (works.length === 0) {
    return (
      <p className="px-6 md:px-12 font-sans text-black/40 italic">
        {t('comingSoon')}
      </p>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {works.map((work, i) => (
        <WorkCard key={work.src} work={work} index={i} />
      ))}
    </div>
  )
}
