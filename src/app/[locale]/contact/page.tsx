'use client'

import { Loader2, Send } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

import CollaborationNote from '@/components/CollaborationNote'
import PageHeader from '@/components/PageHeader'

export default function ContactPage() {
  const t = useTranslations()
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
          setErrorMessage(data.errors.map((error: { message: string }) => error.message).join(', '))
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

  const fieldClasses =
    'w-full px-4 py-3.5 bg-white border border-black/20 font-sans text-base text-black placeholder:text-black/30 focus:border-black focus:outline-none transition-colors duration-300'
  const labelClasses =
    'block text-[11px] font-sans font-semibold text-black/50 mb-2 uppercase tracking-[0.2em]'

  return (
    <main className="w-full bg-white">
      <PageHeader eyebrow={t('pages.contact')} title={t('pages.contactTitle')}>
        <p className="font-sans text-base md:text-lg text-black/70 leading-relaxed">
          {t('pages.contactDescription')}
        </p>
      </PageHeader>

      {/* Frase de colaboración — sin CTA, ya estamos en contacto */}
      <CollaborationNote withCta={false} className="border-b border-black/10" />

      <section className="px-6 md:px-12 py-16 md:py-20">
        <div className="mx-auto max-w-xl">
          {status === 'success' && (
            <div className="mb-8 p-5 border border-black/20 bg-alana-grey">
              <p className="font-sans text-sm text-black">{t('form.success')}</p>
            </div>
          )}

          {status === 'error' && errorMessage && (
            <div className="mb-8 p-5 border border-red-300 bg-red-50">
              <p className="font-sans text-sm text-red-700">{errorMessage}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className={labelClasses}>
                {t('form.name')}
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={fieldClasses}
                placeholder={t('form.namePlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="email" className={labelClasses}>
                {t('form.email')}
              </label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={fieldClasses}
                placeholder={t('form.emailPlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="message" className={labelClasses}>
                {t('form.message')}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className={`${fieldClasses} resize-none`}
                placeholder={t('form.messagePlaceholder')}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full flex items-center justify-center gap-2 font-heading uppercase tracking-widest text-base border border-black bg-black text-white px-7 py-4 hover:bg-white hover:text-black transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed"
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
    </main>
  )
}
