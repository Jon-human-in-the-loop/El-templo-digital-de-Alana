'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Loader2, Send } from 'lucide-react'
import { collaborationNote } from '@/content/about'
import { asLocale } from '@/content/locale'

export default function ContactPage() {
  const t = useTranslations()
  const locale = asLocale(useLocale())
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        if (data.errors) {
          setErrorMessage(data.errors.map((e: any) => e.message).join(', '))
        } else {
          setErrorMessage(data.error || t('form.error'))
        }
        setStatus('error')
        return
      }

      setStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch {
      setErrorMessage(t('form.error'))
      setStatus('error')
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="w-full px-6 py-20 md:py-28 bg-alana-grey">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-black/40 mb-4">
            {t('pages.contact')}
          </p>
          <h1 className="text-5xl md:text-7xl font-heading uppercase leading-none text-black mb-6">
            {t('pages.contactTitle')}
          </h1>
          <p className="text-base md:text-lg text-black/60 font-sans italic max-w-xl mx-auto">
            {t('pages.contactDescription')}
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full px-6 py-20 md:py-28">
        <div className="mx-auto max-w-xl">
          {status === 'success' && (
            <div className="mb-8 p-5 bg-alana-grey border border-black/10 rounded-lg">
              <p className="text-black font-sans font-semibold text-sm">{t('form.success')}</p>
            </div>
          )}

          {status === 'error' && errorMessage && (
            <div className="mb-8 p-5 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-600 font-sans text-sm">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-xs font-sans font-semibold text-black mb-2 uppercase tracking-wider">
                {t('form.name')}
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 bg-white border border-black/15 rounded-lg font-sans text-sm text-black placeholder:text-black/40 focus:border-black focus:outline-none transition-all duration-300"
                placeholder={t('form.namePlaceholder')}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-xs font-sans font-semibold text-black mb-2 uppercase tracking-wider">
                {t('form.email')}
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-5 py-3.5 bg-white border border-black/15 rounded-lg font-sans text-sm text-black placeholder:text-black/40 focus:border-black focus:outline-none transition-all duration-300"
                placeholder={t('form.emailPlaceholder')}
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-xs font-sans font-semibold text-black mb-2 uppercase tracking-wider">
                {t('form.message')}
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-5 py-3.5 bg-white border border-black/15 rounded-lg font-sans text-sm text-black placeholder:text-black/40 focus:border-black focus:outline-none resize-none transition-all duration-300"
                placeholder={t('form.messagePlaceholder')}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-black text-white font-heading uppercase tracking-wider py-4 text-sm flex items-center justify-center gap-2 hover:bg-black/80 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  {t('form.sending')}
                </>
              ) : (
                <>
                  <Send size={15} />
                  {t('form.send')}
                </>
              )}
            </button>
          </form>
        </div>
      </section>

      {/* Canales directos */}
      <section className="w-full px-6 pb-20 md:pb-28">
        <div className="mx-auto max-w-xl border-t border-black/10 pt-10">
          <p className="font-sans italic text-black/70 text-lg mb-8">{collaborationNote[locale]}</p>
          <ul className="space-y-4 font-sans text-sm">
            <li>
              <span className="block text-black/40 uppercase tracking-wider text-xs mb-0.5">Email</span>
              <a className="text-black hover:opacity-60 transition-opacity" href="mailto:zarzairaetaalana@gmail.com">
                zarzairaetaalana@gmail.com
              </a>
            </li>
            <li>
              <span className="block text-black/40 uppercase tracking-wider text-xs mb-0.5">WhatsApp</span>
              <a className="text-black hover:opacity-60 transition-opacity" href="https://wa.me/351968493165" target="_blank" rel="noopener noreferrer">
                +351 968 493 165
              </a>
            </li>
            <li>
              <span className="block text-black/40 uppercase tracking-wider text-xs mb-0.5">Instagram</span>
              <a className="text-black hover:opacity-60 transition-opacity" href="https://www.instagram.com/alanazarzairaeta/" target="_blank" rel="noopener noreferrer">
                @alanazarzairaeta
              </a>
            </li>
            <li>
              <span className="block text-black/40 uppercase tracking-wider text-xs mb-0.5">YouTube</span>
              <a className="text-black hover:opacity-60 transition-opacity" href="https://www.youtube.com/@alanazarzairaeta" target="_blank" rel="noopener noreferrer">
                @alanazarzairaeta
              </a>
            </li>
            <li>
              <span className="block text-black/40 uppercase tracking-wider text-xs mb-0.5">TikTok</span>
              <a className="text-black hover:opacity-60 transition-opacity" href="https://www.tiktok.com/@alanazarzairaeta" target="_blank" rel="noopener noreferrer">
                @alanazarzairaeta
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
