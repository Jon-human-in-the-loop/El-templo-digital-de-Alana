'use client'

import { motion, useInView } from 'framer-motion'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useRef } from 'react'

import ArtworkList from '@/components/gallery/ArtworkList'
import { artworksByCategory } from '@/content/artworks'
import { localize } from '@/content/locale'
import { Link } from '@/i18n/routing'
import type { PortfolioCategory } from '@/types/content'

interface CategorySectionProps {
  category: PortfolioCategory
}

/**
 * One portfolio category: cover image acting as a section front page, the
 * category description, the grid of works and their sheets.
 *
 * La grilla es el índice visual y las fichas viven debajo, en esta misma
 * página: al tocar una obra se salta a `#obra-<slug>`, que es el ancla de su
 * ficha y la abre.
 */
export default function CategorySection({ category }: CategorySectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const locale = useLocale()
  const t = useTranslations('portfolio')

  const works = artworksByCategory(category.slug)
  // La grilla es de imágenes: una obra anunciada sin fotografiar no entra, pero
  // sí aparece abajo, en su ficha.
  const conFoto = works.filter((work) => work.wallImage)
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
            {localize(category.title, locale)}
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
      {/*
        Tres columnas con aire alrededor: a pantalla completa, dos columnas a
        sangre hacían que cada obra ocupara media pantalla y la grilla se
        recorriera de a dos. Más chicas y separadas por blanco, la sección se
        lee de un vistazo y el blanco hace de marco.
      */}
      <div
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 px-6 md:px-12 py-12 md:py-16"
      >
        {conFoto.map((work, i) => (
          <motion.div
            key={work.slug}
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.06 }}
          >
            <Link
              href={`/portfolio#obra-${work.slug}`}
              className="group relative block h-[320px] md:h-[360px] lg:h-[420px] overflow-hidden"
            >
              <Image
                src={work.wallImage!.src}
                alt={work.wallImage!.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-500 flex flex-col justify-end p-5 md:p-6">
                <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <h3
                    className="font-heading uppercase text-white"
                    style={{ fontSize: 'clamp(1.1rem, 2vw, 1.6rem)' }}
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

      {/* Fichas de las obras de la sección */}
      {works.length > 0 && <ArtworkList artworks={works} />}
    </section>
  )
}
