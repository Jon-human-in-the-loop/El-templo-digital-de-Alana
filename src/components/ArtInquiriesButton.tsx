'use client'

import { useLocale } from 'next-intl'

import { localize } from '@/content/locale'
import { ART_INQUIRIES_CTA } from '@/content/site'
import { Link } from '@/i18n/routing'

interface ArtInquiriesButtonProps {
  className?: string
}

/** «Click here for art inquiries» — always routes to the contact page. */
export default function ArtInquiriesButton({ className }: ArtInquiriesButtonProps) {
  const locale = useLocale()

  return (
    <Link
      href="/contact"
      className={`inline-flex items-center gap-3 font-heading uppercase text-base md:text-lg border border-black px-7 py-4 hover:bg-black hover:text-white transition-colors duration-300 ${className ?? ''}`}
    >
      {localize(ART_INQUIRIES_CTA, locale)}
      <span aria-hidden="true">→</span>
    </Link>
  )
}
