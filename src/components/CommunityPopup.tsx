'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

/**
 * Popup "Únete a la comunidad" — invita al canal de difusión de Instagram.
 * Aparece una vez (se recuerda con localStorage).
 */
export default function CommunityPopup() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    let seen = false
    try {
      seen = localStorage.getItem('community-popup-seen') === '1'
    } catch {
      seen = false
    }
    if (seen) return
    const timer = setTimeout(() => setOpen(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const close = () => {
    setOpen(false)
    try {
      localStorage.setItem('community-popup-seen', '1')
    } catch {
      /* ignore */
    }
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center px-6 bg-black/60"
      onClick={close}
    >
      <div
        className="relative bg-white max-w-md w-full p-8 md:p-10 text-center"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          className="absolute top-3 right-3 p-1 text-black/50 hover:text-black transition-colors"
          aria-label="Cerrar"
        >
          <X size={20} />
        </button>
        <p className="font-sans uppercase tracking-[0.3em] text-black/40 text-xs mb-3">Comunidad</p>
        <h3
          className="font-heading uppercase leading-none text-black mb-4"
          style={{ fontSize: 'clamp(1.8rem, 6vw, 2.6rem)' }}
        >
          Únete a la comunidad
        </h3>
        <p className="font-sans text-black/70 italic mb-7 leading-relaxed">
          Sumate al canal de difusión de Instagram: acompañá el proceso, conocé la obra nueva antes
          que nadie y recibí novedades.
        </p>
        <a
          href="https://www.instagram.com/alanazarzairaeta/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={close}
          className="inline-flex items-center gap-3 font-heading uppercase text-sm border border-black px-8 py-4 hover:bg-black hover:text-white transition-all duration-300"
        >
          Unirme en Instagram
          <span className="text-xl">→</span>
        </a>
      </div>
    </div>
  )
}
