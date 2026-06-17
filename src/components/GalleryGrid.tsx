'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { X } from 'lucide-react'
import type { GalleryWork } from '@/content/gallery'

const STATUS_LABEL: Record<GalleryWork['status'], string> = {
  available: 'Disponible',
  reserved: 'Reservada',
  sold: 'Vendida',
}

export default function GalleryGrid({ works }: { works: GalleryWork[] }) {
  const [selected, setSelected] = useState<GalleryWork | null>(null)
  const [activeImg, setActiveImg] = useState<string>('')

  useEffect(() => {
    document.body.style.overflow = selected ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selected])

  const open = (w: GalleryWork) => {
    setSelected(w)
    setActiveImg(w.image)
  }

  if (works.length === 0) {
    return (
      <p className="font-sans text-black/40 italic">Próximamente: obras disponibles en esta sección.</p>
    )
  }

  const thumbs = selected
    ? ([selected.image, selected.wallImage, ...(selected.details ?? [])].filter(Boolean) as string[])
    : []

  return (
    <>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-px bg-black/10">
        {works.map((w) => (
          <button
            key={w.id}
            onClick={() => open(w)}
            className="group relative bg-white aspect-[3/4] overflow-hidden text-left"
          >
            <Image
              src={w.image}
              alt={w.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 50vw, 33vw"
            />
            {w.status !== 'available' && (
              <span className="absolute top-3 left-3 bg-black text-white text-[10px] uppercase tracking-widest px-2 py-1">
                {STATUS_LABEL[w.status]}
              </span>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex flex-col justify-end p-4">
              <div className="opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                <h3 className="font-heading uppercase text-white text-lg leading-none">{w.title}</h3>
                {w.dimensions && <p className="font-sans text-white/70 text-xs mt-1">{w.dimensions}</p>}
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal — ficha de la obra */}
      {selected && (
        <div className="fixed inset-0 z-[70] bg-black/70 overflow-y-auto" onClick={() => setSelected(null)}>
          <div className="min-h-full flex items-start md:items-center justify-center p-4 md:p-8">
            <div
              className="relative bg-white max-w-5xl w-full grid grid-cols-1 md:grid-cols-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-3 z-10 p-2 bg-white/80 hover:bg-white text-black transition-colors"
                aria-label="Cerrar"
              >
                <X size={20} />
              </button>

              {/* Imágenes */}
              <div className="bg-alana-grey">
                <div className="relative w-full aspect-[3/4]">
                  <Image src={activeImg} alt={selected.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                </div>
                {thumbs.length > 1 && (
                  <div className="flex gap-2 p-3 overflow-x-auto">
                    {thumbs.map((src) => (
                      <button
                        key={src}
                        onClick={() => setActiveImg(src)}
                        className={`relative w-16 h-16 shrink-0 overflow-hidden border ${
                          activeImg === src ? 'border-black' : 'border-transparent'
                        }`}
                        aria-label="Ver imagen"
                      >
                        <Image src={src} alt="" fill className="object-cover" sizes="64px" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Datos */}
              <div className="p-6 md:p-10 flex flex-col">
                <p className="font-sans uppercase tracking-[0.3em] text-black/40 text-xs mb-3">
                  {STATUS_LABEL[selected.status]}
                  {selected.price ? ` · ${selected.price}` : ''}
                </p>
                <h2
                  className="font-heading uppercase leading-none text-black mb-4"
                  style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
                >
                  {selected.title}
                </h2>
                <ul className="font-sans text-sm text-black/60 space-y-1 mb-6">
                  {selected.year && <li>{selected.year}</li>}
                  {selected.technique && <li>{selected.technique}</li>}
                  {selected.dimensions && <li>{selected.dimensions}</li>}
                </ul>
                {selected.description && (
                  <p className="font-sans text-black/75 italic leading-relaxed mb-4">{selected.description}</p>
                )}
                {selected.symbolism && (
                  <div className="mb-6">
                    <p className="font-sans uppercase tracking-wider text-black/40 text-xs mb-1">Simbolismo</p>
                    <p className="font-sans text-black/75 italic leading-relaxed">{selected.symbolism}</p>
                  </div>
                )}
                <div className="mt-auto pt-4">
                  <Link
                    href="/contact"
                    onClick={() => setSelected(null)}
                    className="inline-flex items-center gap-3 font-heading uppercase text-sm border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
                  >
                    {selected.status === 'available' ? 'Consultar esta obra' : 'Consultar'}
                    <span className="text-xl">→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
