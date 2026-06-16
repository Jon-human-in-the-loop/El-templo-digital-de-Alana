'use client'

import Image from 'next/image'
import { useState, useEffect, useCallback } from 'react'

/** Slides de portada — placeholder con obras hasta recibir el carrusel de Drive. */
const SLIDES = [
  '/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100.webp',
  '/images/portfolio/fluid-art/como-es-arriba.webp',
  '/images/portfolio/figurativo/el-llanto-del-rey-expectante-2-100x80.webp',
  '/images/portfolio/fluid-art/las-aguas-resurreccion.webp',
  '/images/portfolio/fluid-art/premonicion.webp',
]

export default function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const go = useCallback((i: number) => setIndex((i + SLIDES.length) % SLIDES.length), [])

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % SLIDES.length), 5000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative w-full h-[80vh] md:h-[88vh] overflow-hidden bg-black">
      {SLIDES.map((src, i) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={src}
            alt="Obra de Alana Zarzairaeta"
            fill
            priority={i === 0}
            className="object-cover"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            aria-label={`Ir a la imagen ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-white' : 'w-1.5 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  )
}
