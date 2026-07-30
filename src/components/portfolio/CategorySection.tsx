'use client'

import { motion, useInView } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRef } from 'react'

import { artworksByCategory } from '@/content/artworks'
import { localize } from '@/content/locale'
import { Link } from '@/i18n/routing'
import type { PortfolioCategory } from '@/types/content'

interface CategorySectionProps {
  category: PortfolioCategory
}

/**
 * One portfolio category: cover image acting as a section front page, the
 * category description, and the works it contains.
 */
export default function CategorySection({ category }: CategorySectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const locale = useLocale()
  const t = useTranslations('portfolio')

  const works = artworksByCategory(category.slug)
  const description = localize(category.description, locale)

  return (
    <section id={category.slug} className="w-full scroll-mt-24">
      {/* Cover — portada de la sección */}
      <div className="relative w-full h-[55vh] md:h-[75vh] overflow-hidden border-t border-black">
        <Image
          src={category.cover.src}
          alt={category.cover.alt}
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute inset-0 flex items-end">
          <h2
            className="font-heading uppercase text-white leading-none px-6 md:px-12 pb-10 md:pb-14"
            style={{ fontSize: 'clamp(2.4rem, 9vw, 8rem)' }}
          >
            {category.title}
          </h2>
        </div>
      </div>

      {/* Descripción — vacía hasta que se cargue desde el documento */}
      {description && (
        <div className="px-6 md:px-12 py-14 md:py-20 border-t border-black/10">
          <p className="max-w-3xl font-sans text-base md:text-xl text-black/75 leading-relaxed italic">
            {description}
          </p>
        </div>
      )}

      {/* Obras de la categoría */}
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2">
        {works.map((work, i) => (
          <motion.div
            key={work.slug}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.06 }}
          >
            <Link
              href={`/gallery#obra-${work.slug}`}
              className="group relative block h-[380px] md:h-[520px] overflow-hidden"
            >
              <Image
                src={work.wallImage.src}
                alt={work.wallImage.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex flex-col justify-end p-6 md:p-8">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3
                    className="font-heading uppercase text-white"
                    style={{ fontSize: 'clamp(1.3rem, 3vw, 2.2rem)' }}
                  >
                    {work.title}
                  </h3>
                  <p className="font-sans text-xs text-white/70 uppercase tracking-widest mt-2">
                    {t('viewWorks')}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
