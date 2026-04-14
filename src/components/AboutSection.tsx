'use client'

import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import { useRef } from 'react'

const STATEMENT_EN = `Alana is a full spectrum artist. She channels, through her different facets, the conception of the world she sees under the concept of "fluidity".

In painting, tattoo, writing and performance art, she makes her holistic-spiritual view of things known to the world. She works on the "materiality-immateriality" binomial, where energy is diluted or condensed, but it always remains, energy.

Her work is charged with esoteric self-referential messages, exploring materiality and immateriality — personifying the energies she perceives and that communicate with her.

Medium.`

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const paras = STATEMENT_EN.split('\n\n')

  return (
    <section ref={ref} id="sobre-mi" className="w-full" style={{ backgroundColor: '#F0EEED' }}>

      {/* ── Row 1: image left / statement right — mirrors Canva reference ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">

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
            Statement
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

      {/* ── Row 3: full-width elegance CTA ── */}
      <div className="border-t border-black/10 px-8 md:px-16 py-14 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2
          className="font-heading uppercase leading-none tracking-wider"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 4rem)' }}
        >
          Sobre Mí
        </h2>
        <a
          href="/es/about"
          className="font-heading uppercase text-lg border-b-2 border-black pb-0.5 hover:opacity-40 transition-opacity tracking-widest"
        >
          Leer más →
        </a>
      </div>
    </section>
  )
}

function CVSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const milestones = [
    { year: '2012 — 2019', label: 'Arquitectura y Urbanismo', desc: 'Universidad Nacional de Córdoba. Arquitecta y Urbanista.' },
    { year: '2018 — 2019', label: 'La Otra Cara', desc: 'Colectivo de artistas autogestionado en Córdoba.' },
    { year: '2022', label: 'Ciclo Humedales', desc: 'Artista visual en el documental — "Se ondula el éter que ata las superficies".' },
    { year: '2022 — 2025', label: 'Album Covers', desc: 'Portadas para Saudade, Rodrigo Bobadilla Oliva, Sabina Belén y Liyah Dalani.' },
    { year: '2023 — 2024', label: 'Libro Sonoro', desc: 'Ilustradora y creadora de video · Con Rodrigo Bobadilla Oliva y Rocío Laria.' },
    { year: '2023 — hoy', label: 'Tatuadora · The Inky Club', desc: 'Porto. Black work & engraving con temáticas espirituales. "El talismán de poder".' },
    { year: '2025 — hoy', label: 'Ferias, Flash Days & Exposiciones', desc: 'Activa en el circuito de arte de Porto y Europa.' },
  ]

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 border-t border-black/10">
      {/* Left: cv list */}
      <div className="px-10 md:px-16 lg:px-20 py-16">
        <motion.p
          className="font-heading uppercase text-sm tracking-[0.3em] mb-8"
          style={{ fontSize: 'clamp(0.8rem, 2vw, 1rem)' }}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
        >
          Curriculum Vitae.
        </motion.p>
        <ul className="space-y-6">
          {milestones.map((m, i) => (
            <motion.li
              key={m.year}
              className="border-t border-black/10 pt-4"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
            >
              <p className="font-sans text-xs text-black/40 uppercase tracking-widest mb-1">{m.year}</p>
              <p className="font-heading uppercase" style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}>{m.label}</p>
              <p className="font-sans text-sm text-black/60 italic mt-1">{m.desc}</p>
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
