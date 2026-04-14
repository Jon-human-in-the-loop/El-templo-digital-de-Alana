'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useTranslations } from 'next-intl'

export default function HeroSection() {
  const t = useTranslations('hero')
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden bg-white"
    >
      {/* Parallax background image — full width */}
      <motion.div className="absolute inset-0 z-0" style={{ y }}>
        <Image
          src="/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100.webp"
          alt="Obra de Alana Zarzairaeta"
          fill
          className="object-cover object-center"
          sizes="100vw"
          priority
        />
      </motion.div>

      {/* White gradient overlay — bottom */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.0) 30%, rgba(255,255,255,0.85) 80%, rgba(255,255,255,1) 100%)',
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-20 flex flex-col min-h-screen"
        style={{ opacity }}
      >
        {/* Spacer for header */}
        <div className="pt-24 md:pt-32 flex-1" />

        {/* Big editorial title — bottom aligned */}
        <div className="px-6 md:px-12 pb-12 md:pb-16">
          <motion.h1
            className="font-heading uppercase leading-none text-black select-none"
            style={{ fontSize: 'clamp(3.5rem, 13vw, 12rem)', lineHeight: 0.88 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.1 }}
          >
            EL TEMPLO
            <br />
            <span className="text-black/30">DIGITAL</span>
            <br />
            DE ALANA
          </motion.h1>

          <motion.p
            className="font-sans text-base md:text-lg text-black/70 mt-4 max-w-md italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.55 }}
          >
            {t('description')}
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
