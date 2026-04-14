'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

/* ──────────────────────────────────────────────
   Data: obras del portfolio de Alana
   ────────────────────────────────────────────── */
const WORKS = [
  // ── Fluid Art ──────────────────────────────────────────────────────
  {
    src: '/images/portfolio/fluid-art/premonicion.webp',
    title: 'Premonición',
    category: 'Fluid Art',
    size: 'large',
  },
  {
    src: '/images/portfolio/fluid-art/re-suscito.webp',
    title: 'Re-Suscito',
    category: 'Fluid Art',
    size: 'medium',
  },
  {
    src: '/images/portfolio/fluid-art/como-es-arriba.webp',
    title: 'Como es Arriba es Abajo',
    category: 'Fluid Art',
    size: 'large',
  },
  {
    src: '/images/portfolio/fluid-art/se-ondula-el-eter.webp',
    title: 'Se Ondula el Éter',
    category: 'Fluid Art',
    size: 'medium',
  },
  {
    src: '/images/portfolio/fluid-art/las-aguas-resurreccion.webp',
    title: 'Las Aguas de la Resurrección',
    category: 'Fluid Art',
    size: 'large',
  },
  {
    src: '/images/portfolio/fluid-art/las-aguas-2.webp',
    title: 'Las Aguas de la Resurrección II',
    category: 'Fluid Art',
    size: 'medium',
  },
  {
    src: '/images/portfolio/fluid-art/las-aguas-3.webp',
    title: 'Las Aguas de la Resurrección III',
    category: 'Fluid Art',
    size: 'small',
  },
  {
    src: '/images/portfolio/fluid-art/las-olas.webp',
    title: 'Las Olas que se Espejaban',
    category: 'Fluid Art',
    size: 'medium',
  },
  {
    src: '/images/portfolio/fluid-art/la-raiz-1.webp',
    title: 'La Raíz',
    category: 'Fluid Art',
    size: 'large',
  },
  {
    src: '/images/portfolio/fluid-art/la-raiz-2.webp',
    title: 'La Raíz II',
    category: 'Fluid Art',
    size: 'medium',
  },
  {
    src: '/images/portfolio/fluid-art/en-el-oceano-1.webp',
    title: 'En el Océano Divisé al Inframundo',
    category: 'Fluid Art',
    size: 'small',
  },
  {
    src: '/images/portfolio/fluid-art/en-el-oceano-2.webp',
    title: 'En el Océano Divisé al Inframundo II',
    category: 'Fluid Art',
    size: 'medium',
  },
  {
    src: '/images/portfolio/fluid-art/mess-mine-1.webp',
    title: 'It Might Be a Mess',
    category: 'Fluid Art',
    size: 'large',
  },
  {
    src: '/images/portfolio/fluid-art/mess-mine-2.webp',
    title: 'It Might Be a Mess II',
    category: 'Fluid Art',
    size: 'medium',
  },
  {
    src: '/images/portfolio/fluid-art/un-petalo-1.webp',
    title: 'Un Pétalo, Un Mensaje y Una Chispa',
    category: 'Fluid Art',
    size: 'medium',
  },
  {
    src: '/images/portfolio/fluid-art/un-petalo-2.webp',
    title: 'Un Pétalo, Un Mensaje y Una Chispa II',
    category: 'Fluid Art',
    size: 'small',
  },
  {
    src: '/images/portfolio/fluid-art/un-petalo-3.webp',
    title: 'Un Pétalo, Un Mensaje y Una Chispa III',
    category: 'Fluid Art',
    size: 'small',
  },
  {
    src: '/images/portfolio/fluid-art/ya-no-se-oye-1.webp',
    title: 'Ya No Se Oye el Último Suspiro',
    category: 'Fluid Art',
    size: 'medium',
  },
  {
    src: '/images/portfolio/fluid-art/ya-no-se-oye-2.webp',
    title: 'Ya No Se Oye el Último Suspiro II',
    category: 'Fluid Art',
    size: 'large',
  },
  {
    src: '/images/portfolio/fluid-art/ya-no-se-oye-3.webp',
    title: 'Ya No Se Oye el Último Suspiro III',
    category: 'Fluid Art',
    size: 'medium',
  },
  {
    src: '/images/portfolio/fluid-art/unibesos-2.webp',
    title: 'Unibesos II',
    category: 'Fluid Art',
    size: 'medium',
  },
  {
    src: '/images/portfolio/fluid-art/unibesos-3.webp',
    title: 'Unibesos III',
    category: 'Fluid Art',
    size: 'medium',
  },
  // ── Figurativo ─────────────────────────────────────────────────────
  {
    src: '/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100-vertical.webp',
    title: 'La Luz y la Sombra',
    category: 'Figurativo',
    size: 'large',
  },
  {
    src: '/images/portfolio/figurativo/el-registro-del-poder-heredado-1.webp',
    title: 'El Registro del Poder Heredado',
    category: 'Figurativo',
    size: 'medium',
  },
  {
    src: '/images/portfolio/figurativo/el-registro-del-poder-heredado-2.webp',
    title: 'El Registro del Poder Heredado II',
    category: 'Figurativo',
    size: 'medium',
  },
  {
    src: '/images/portfolio/figurativo/el-llanto-del-rey-expectante-2-100x80.webp',
    title: 'El Llanto del Rey Expectante',
    category: 'Figurativo',
    size: 'large',
  },
  {
    src: '/images/portfolio/figurativo/la-ceguera-que-viene-por-encandilarse-2.webp',
    title: 'La Ceguera',
    category: 'Figurativo',
    size: 'medium',
  },
  {
    src: '/images/portfolio/figurativo/la-ceguera-que-viene-por-encandilarse-50x30-1.webp',
    title: 'La Ceguera I',
    category: 'Figurativo',
    size: 'small',
  },
  {
    src: '/images/portfolio/figurativo/unibesos-1.webp',
    title: 'Unibesos',
    category: 'Figurativo',
    size: 'small',
  },
  {
    src: '/images/portfolio/figurativo/unibesos-2.webp',
    title: 'Unibesos II',
    category: 'Figurativo',
    size: 'medium',
  },
  {
    src: '/images/portfolio/figurativo/unibesos-3.webp',
    title: 'Unibesos III',
    category: 'Figurativo',
    size: 'large',
  },
]

interface WorkCardProps {
  work: (typeof WORKS)[0]
  index: number
}

function WorkCard({ work, index }: WorkCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const heightClass =
    work.size === 'large'
      ? 'h-[500px] md:h-[600px]'
      : work.size === 'medium'
      ? 'h-[380px] md:h-[450px]'
      : 'h-[280px] md:h-[320px]'

  return (
    <motion.div
      ref={ref}
      className={`relative group overflow-hidden ${heightClass}`}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut', delay: index * 0.06 }}
    >
      <Image
        src={work.src}
        alt={work.title}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex flex-col justify-end p-5 md:p-7">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
          <p className="font-sans text-xs text-white/60 uppercase tracking-widest mb-1">
            {work.category}
          </p>
          <h3 className="font-heading text-white uppercase" style={{ fontSize: 'clamp(1.4rem, 3vw, 2.2rem)' }}>
            {work.title}
          </h3>
        </div>
      </div>
    </motion.div>
  )
}

export default function PortfolioSection() {
  const titleRef = useRef<HTMLDivElement>(null)
  const titleInView = useInView(titleRef, { once: true })

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
          Portfolio
        </motion.p>
        <motion.h2
          className="font-heading uppercase leading-none"
          style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Obra
        </motion.h2>
      </div>

      {/* Masonry-style grid */}
      <div className="grid grid-cols-1 md:grid-cols-2">
        {WORKS.map((work, i) => (
          <WorkCard key={work.src} work={work} index={i} />
        ))}
      </div>

      {/* CTA */}
      <div className="px-6 md:px-12 py-16 border-t border-black flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <h2
          className="font-heading uppercase leading-none"
          style={{ fontSize: 'clamp(2rem, 6vw, 5rem)' }}
        >
          Ver todo el Portfolio
        </h2>
        <a
          href="/es/portfolio"
          className="inline-flex items-center gap-3 font-heading uppercase text-xl border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
        >
          Explorar
          <span className="text-2xl">→</span>
        </a>
      </div>
    </section>
  )
}
