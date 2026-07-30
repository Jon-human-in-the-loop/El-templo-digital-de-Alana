'use client'

import { Loader2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import PopupShell from './PopupShell'

interface NewsletterPopupProps {
  onClose: () => void
}

export default function NewsletterPopup({ onClose }: NewsletterPopupProps) {
  const t = useTranslations('newsletter')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) {
        setStatus('error')
        return
      }

      setStatus('success')
      setEmail('')
      window.setTimeout(onClose, 2500)
    } catch {
      setStatus('error')
    }
  }

  return (
    <PopupShell title={t('title')} closeLabel={t('dismiss')} onClose={onClose}>
      <p className="font-sans text-base text-black/70 leading-relaxed mb-6">{t('description')}</p>

      {status === 'success' ? (
        <p className="font-sans text-base text-black">{t('success')}</p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <label htmlFor="newsletter-email" className="sr-only">
            {t('placeholder')}
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={t('placeholder')}
            className="w-full px-4 py-3.5 bg-white border border-black/20 font-sans text-base text-black placeholder:text-black/30 focus:border-black focus:outline-none transition-colors"
          />

          {status === 'error' && (
            <p className="font-sans text-sm text-red-700">{t('error')}</p>
          )}

          <button
            type="submit"
            disabled={status === 'submitting'}
            className="w-full flex items-center justify-center gap-2 font-heading uppercase tracking-widest text-base border border-black bg-black text-white px-6 py-3.5 hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {status === 'submitting' && <Loader2 size={16} className="animate-spin" />}
            {t('submit')}
          </button>
        </form>
      )}
    </PopupShell>
  )
}
