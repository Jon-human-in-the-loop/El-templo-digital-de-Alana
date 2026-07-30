'use client'

import { useLocale } from 'next-intl'

import { localize } from '@/content/locale'
import { COLLABORATION_NOTE } from '@/content/site'

import ArtInquiriesButton from './ArtInquiriesButton'

interface CollaborationNoteProps {
  /** Hide the CTA when the block already sits on the contact page. */
  withCta?: boolean
  className?: string
}

/** Open call for collaborations — used on the home and contact pages. */
export default function CollaborationNote({ withCta = true, className }: CollaborationNoteProps) {
  const locale = useLocale()

  return (
    <div className={`w-full px-6 md:px-12 py-16 md:py-20 text-center ${className ?? ''}`}>
      <p
        className="mx-auto max-w-3xl font-sans italic text-black/75 leading-snug"
        style={{ fontSize: 'clamp(1.15rem, 2.6vw, 1.9rem)' }}
      >
        {localize(COLLABORATION_NOTE, locale)}
      </p>
      {withCta && (
        <div className="mt-10">
          <ArtInquiriesButton />
        </div>
      )}
    </div>
  )
}
