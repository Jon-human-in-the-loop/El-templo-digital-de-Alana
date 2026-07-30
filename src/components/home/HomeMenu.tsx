'use client'

import { useTranslations } from 'next-intl'

import { Link } from '@/i18n/routing'
import { NAV_ITEMS } from '@/lib/navigation'

/**
 * Home menu — sits right under the carousel, in large type, always open.
 * This is what replaces the burger on the home page (see Header: `isHome`).
 */
export default function HomeMenu() {
  const t = useTranslations('nav')

  return (
    <nav className="w-full border-b border-black bg-white">
      <ul className="flex flex-col md:flex-row md:flex-wrap md:justify-center items-stretch md:items-center">
        {NAV_ITEMS.map((item) => (
          <li
            key={item.label}
            className="border-b border-black/10 md:border-b-0 md:border-r md:border-black/10 last:border-none"
          >
            <Link
              href={item.href}
              className="block px-6 md:px-7 py-5 md:py-6 font-heading uppercase text-black/70 hover:text-black transition-colors duration-300 tracking-wide"
              style={{ fontSize: 'clamp(1.5rem, 3.4vw, 2.6rem)' }}
            >
              {t(item.label)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
