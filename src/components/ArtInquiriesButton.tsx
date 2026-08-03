'use client'

import { useLocale } from 'next-intl'

import { localize } from '@/content/locale'
import { ART_INQUIRIES_CTA } from '@/content/site'
import { Link } from '@/i18n/routing'

interface ArtInquiriesButtonProps {
  /** `light` para cuando va sobre una imagen oscura. */
  tone?: 'dark' | 'light'
  className?: string
}

const TONES = {
  dark: 'border-black text-black hover:bg-black hover:text-white',
  light: 'border-white/80 text-white hover:bg-white hover:text-black',
} as const

/** «Click here for art inquiries» — always routes to the contact page. */
export default function ArtInquiriesButton({
  tone = 'dark',
  className,
}: ArtInquiriesButtonProps) {
  const locale = useLocale()

  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-3 font-heading uppercase text-base md:text-lg border px-7 py-4 transition-colors duration-300 ${TONES[tone]} ${className ?? ''}`}
    >
      {localize(ART_INQUIRIES_CTA, locale)}
      <span aria-hidden="true">→</span>
    </Link>
  )
}
