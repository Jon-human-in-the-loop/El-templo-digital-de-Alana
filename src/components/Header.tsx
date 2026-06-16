'use client'

import { usePathname, Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import LanguageSwitcher from './LanguageSwitcher'
import { useState, useEffect } from 'react'

interface NavChild {
  label: string
  href: string
}
interface NavNode {
  label: string
  href: string
  children?: NavChild[]
}

export default function Header() {
  const pathname = usePathname()
  const t = useTranslations('nav')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Bloquear el scroll del body cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const nav: NavNode[] = [
    {
      label: t('gallery'),
      href: '/gallery',
      children: [
        { label: t('originals'), href: '/gallery#originales' },
        { label: t('watercolours'), href: '/gallery#acuarelas' },
        { label: t('merch'), href: '/gallery#merch' },
      ],
    },
    {
      label: t('portfolio'),
      href: '/portfolio',
      children: [
        { label: t('figurative'), href: '/portfolio#figurativo' },
        { label: t('fluidArt'), href: '/portfolio#fluid-art' },
        { label: t('watercolours'), href: '/portfolio#acuarelas' },
        { label: t('murals'), href: '/portfolio#murales' },
      ],
    },
    { label: t('about'), href: '/about' },
    { label: t('exhibitions'), href: '/exhibitions' },
    { label: t('blog'), href: '/blog' },
    { label: t('contact'), href: '/contact' },
  ]

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}
    >
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2.5 px-4">
        <p className="text-xs font-sans font-medium tracking-widest uppercase">
          {t('announcement')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-20">
        {/* Wordmark — el nombre como marca */}
        <Link
          href="/"
          className="shrink-0 font-heading uppercase tracking-tight leading-none text-black hover:opacity-70 transition-opacity"
          style={{ fontSize: 'clamp(1.1rem, 2.2vw, 1.6rem)' }}
        >
          Alana Zarzairaeta
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-9">
          {nav.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={`flex items-center gap-1 text-[13px] whitespace-nowrap font-heading font-medium tracking-wide uppercase transition-colors duration-300 ${
                  isActive(item.href) ? 'text-black' : 'text-black/60 hover:text-black'
                }`}
              >
                {item.label}
                {item.children && <span className="text-[8px] leading-none mt-0.5">▾</span>}
              </Link>
              {isActive(item.href) && <span className="block h-0.5 w-full bg-black mt-1" />}

              {/* Dropdown (hover) */}
              {item.children && (
                <div className="absolute left-0 top-full pt-3 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200">
                  <div className="bg-white shadow-lg border border-black/5 min-w-[190px] py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-5 py-2 text-xs font-sans uppercase tracking-wider text-black/60 hover:text-black hover:bg-alana-grey transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3 shrink-0">
          <LanguageSwitcher />
          <button
            onClick={() => setMobileOpen(true)}
            className="lg:hidden font-heading uppercase text-sm tracking-widest text-black hover:opacity-60 transition-opacity"
            aria-label="Abrir menú"
          >
            Menú
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-white flex flex-col">
          <div className="flex items-center justify-between px-6 h-20 border-b border-black/10 shrink-0">
            <span className="font-heading uppercase tracking-tight text-lg">Alana Zarzairaeta</span>
            <button
              onClick={() => setMobileOpen(false)}
              className="font-heading uppercase text-sm tracking-widest hover:opacity-60 transition-opacity"
              aria-label="Cerrar menú"
            >
              Cerrar
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-7">
            {nav.map((item) => (
              <div key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-heading uppercase leading-none text-black block"
                  style={{ fontSize: 'clamp(2rem, 9vw, 3rem)' }}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-3 flex flex-col gap-2 pl-1">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="font-sans uppercase tracking-wider text-sm text-black/50 hover:text-black transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
