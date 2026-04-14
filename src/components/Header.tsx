'use client'

import { usePathname, Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import CartIndicator from './cart/CartIndicator'
import LanguageSwitcher from './LanguageSwitcher'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const pathname = usePathname()
  const t = useTranslations('nav')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: t('home'), href: '/' as const },
    { label: t('giftPacks'), href: '/gift-packs' as const },
    { label: t('about'), href: '/about' as const },
    { label: t('contact'), href: '/contact' as const },
  ]

  const isActive = (href: string) =>
    pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ease-luxe ${
        scrolled
          ? 'header-glass shadow-sm'
          : 'bg-warm-white/0'
      }`}
    >
      {/* Announcement Bar */}
      <div className="bg-black text-white text-center py-2.5 px-4">
        <p className="text-xs font-sans font-medium tracking-widest uppercase">
          {t('announcement')}
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-18">
        {/* Logo */}
        <Link href="/" className="shrink-0 transition-opacity hover:opacity-80">
          <img src="/images/brand/logo.png" alt="El Templo Digital de Alana" className="w-[120px] md:w-[150px] lg:w-[180px] h-auto object-contain" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-[13px] whitespace-nowrap font-heading font-medium tracking-wide uppercase transition-all duration-300 ${
                isActive(item.href)
                  ? 'text-black'
                  : 'text-black/60 hover:text-black'
              }`}
            >
              {item.label}
              {isActive(item.href) && (
                <span className="block h-0.5 w-full bg-black mt-1 rounded-full" />
              )}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 xl:gap-3 shrink-0">
          <Link
            href="/gift-packs"
            className="hidden md:flex items-center justify-center whitespace-nowrap font-heading font-normal text-[14px] tracking-[0.05em] uppercase bg-black text-white px-4 py-2 rounded-full hover:bg-black/80 transition-all duration-300 shadow-sm"
          >
            {t('buyNow')}
          </Link>
          <LanguageSwitcher />
          <CartIndicator />

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2.5 hover:bg-cream rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X size={22} className="text-dark-brown" />
            ) : (
              <Menu size={22} className="text-dark-brown" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="lg:hidden border-t border-border bg-warm-white animate-fade-in-up">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xl font-heading font-normal uppercase tracking-wide transition-colors ${
                  isActive(item.href)
                    ? 'text-black'
                    : 'text-black/60 hover:text-black'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
