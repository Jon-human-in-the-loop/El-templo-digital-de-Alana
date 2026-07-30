'use client'

import { useLocale, useTranslations } from 'next-intl'

import { publishedExhibitions } from '@/content/exhibitions'
import { localize } from '@/content/locale'

/** Exhibition list — shared by the exhibitions page and the about page. */
export default function ExhibitionsList() {
  const t = useTranslations('exhibitions')
  const locale = useLocale()

  const exhibitions = publishedExhibitions()

  if (exhibitions.length === 0) {
    return <p className="font-sans text-black/50 italic">{t('empty')}</p>
  }

  return (
    <ul className="w-full">
      {exhibitions.map((exhibition) => {
        const place = [exhibition.city, exhibition.country].filter(Boolean).join(', ')
        const note = localize(exhibition.note, locale)

        return (
          <li
            key={exhibition.id}
            className="border-t border-black/10 py-6 flex flex-col md:flex-row md:items-baseline md:gap-10"
          >
            <span className="font-sans text-sm tracking-[0.2em] text-black/40 md:w-24 shrink-0">
              {exhibition.year}
            </span>

            <div className="mt-2 md:mt-0">
              {exhibition.title && (
                <p
                  className="font-heading uppercase leading-none"
                  style={{ fontSize: 'clamp(1.2rem, 2.6vw, 2rem)' }}
                >
                  {exhibition.title}
                </p>
              )}
              <p className="font-sans text-base text-black/70 mt-1">
                {[exhibition.venue, place].filter(Boolean).join(' · ')}
              </p>
              {note && <p className="font-sans text-sm text-black/50 italic mt-1">{note}</p>}
            </div>
          </li>
        )
      })}
    </ul>
  )
}
