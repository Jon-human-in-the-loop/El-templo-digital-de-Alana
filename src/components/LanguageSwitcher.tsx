'use client'

import { useLocale } from 'next-intl'
import { useRouter, usePathname } from '@/i18n/routing'

export default function LanguageSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const currentLocale = useLocale()

  /**
   * Cambiar de idioma no debería costar el lugar donde se estaba leyendo.
   *
   * `router.replace(pathname)` perdía dos cosas: el scroll, porque Next sube
   * al tope en cada navegación, y el hash, que es lo que recuerda qué ficha
   * de obra estaba abierta. Se conservan los dos y la lectura sigue donde
   * estaba.
   */
  const handleLanguageChange = (locale: 'en' | 'pt' | 'es') => {
    const { search, hash } = window.location
    router.replace(`${pathname}${search}${hash}`, { locale, scroll: false })
  }

  const locales = [
    { code: 'en' as const, label: 'EN' },
    { code: 'pt' as const, label: 'PT' },
    { code: 'es' as const, label: 'ES' },
  ]

  return (
    <div className="flex bg-cream/80 rounded-pill p-1 gap-0.5">
      {locales.map((loc) => (
        <button
          key={loc.code}
          onClick={() => handleLanguageChange(loc.code)}
          className={`px-3 py-1.5 rounded-pill text-sm font-sans font-semibold tracking-wider uppercase transition-all duration-300 ${
            currentLocale === loc.code
              ? 'bg-dark-brown text-cream shadow-sm'
              : 'text-earth-brown hover:text-dark-brown hover:bg-honey/40'
          }`}
        >
          {loc.label}
        </button>
      ))}
    </div>
  )
}
