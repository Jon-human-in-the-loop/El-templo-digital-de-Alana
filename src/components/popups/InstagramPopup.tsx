'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'

import { INSTAGRAM_HANDLE, INSTAGRAM_URL } from '@/content/site'

import PopupShell from './PopupShell'

interface InstagramPopupProps {
  onClose: () => void
}

/** Invitation to join the Instagram community. */
export default function InstagramPopup({ onClose }: InstagramPopupProps) {
  const t = useTranslations('instagram')

  return (
    <PopupShell title={t('title')} closeLabel={t('dismiss')} onClose={onClose}>
      <p className="font-sans text-base text-black/70 leading-relaxed mb-6">{t('description')}</p>

      <div className="flex items-center gap-5">
        <Image
          src="/images/brand/qr-instagram.png"
          alt={`Instagram ${INSTAGRAM_HANDLE}`}
          width={96}
          height={96}
          className="border border-black/10"
        />
        <div>
          <p className="font-sans text-sm text-black/60">{INSTAGRAM_HANDLE}</p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-2 font-heading uppercase tracking-widest text-sm border border-black px-5 py-3 hover:bg-black hover:text-white transition-colors duration-300"
          >
            {t('cta')}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </PopupShell>
  )
}
