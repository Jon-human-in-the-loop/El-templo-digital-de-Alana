'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  const handleLanguageChange = (locale: 'en' | 'pt' | 'es') => {
    router.replace(pathname, { locale })
  }

  const locales = [
    { code: 'en' as const, label: 'EN' },
    { code: 'pt' as const, label: 'PT' },
    { code: 'es' as const, label: 'ES' },
  ]

  return (
    <div className="flex bg-alana-grey rounded-full p-1 gap-0.5">
      {locales.map((loc) => (
        <button
          key={loc.code}
          onClick={() => handleLanguageChange(loc.code)}
          className={`px-3 py-1.5 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300 ${
            currentLocale === loc.code
              ? 'bg-black text-white shadow-sm'
              : 'text-black/50 hover:text-black hover:bg-white/70'
          }`}
        >
          {loc.label}
        </button>
      ))}
    </div>
  )
}
