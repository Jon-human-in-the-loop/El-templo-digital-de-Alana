'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect } from 'react'
import type { ReactNode } from 'react'

interface PopupShellProps {
  title: string
  closeLabel: string
  onClose: () => void
  children: ReactNode
}

/** Centred modal used by the newsletter and Instagram popups. */
export default function PopupShell({ title, closeLabel, onClose, children }: PopupShellProps) {
  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-5">
      <button
        type="button"
        aria-label={closeLabel}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="relative w-full max-w-md bg-white border border-black shadow-2xl px-7 py-9"
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute top-3 right-3 p-2 text-black/50 hover:text-black transition-colors"
        >
          <X size={20} />
        </button>

        <h2
          className="font-heading uppercase leading-none mb-4"
          style={{ fontSize: 'clamp(1.6rem, 5vw, 2.4rem)' }}
        >
          {title}
        </h2>

        {children}
      </motion.div>
    </div>
  )
}
