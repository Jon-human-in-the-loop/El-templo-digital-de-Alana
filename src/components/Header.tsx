'use client'

import { ChevronDown, Menu, X } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useEffect, useState } from 'react'

import { usePathname, Link } from '@/i18n/routing'
import { NAV_ITEMS, type NavItem } from '@/lib/navigation'

import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const pathname = usePathname()
  const t = useTranslations('nav')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  /** The home page shows the full menu under the carousel, so it needs no burger. */
  const isHome = pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close everything when navigating.
  useEffect(() => {
    setMobileMenuOpen(false)
    setOpenMobileGroup(null)
    setOpenDropdown(null)
  }, [pathname])

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [])

  const isActive = (href: string) => {
    const path = href.split('#')[0]
    if (path === '/') return pathname === '/'
    return pathname === path || pathname.startsWith(`${path}/`)
  }

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Announcement bar */}
      <div className="bg-black text-white text-center py-2.5 px-4">
        <p className="text-xs font-sans font-medium tracking-widest uppercase">
          {t('announcement')}
        </p>
      </div>

      <div
        className={`transition-colors duration-500 ${
          scrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-white/80 backdrop-blur-[2px]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6 h-20">
          {/* Logo — sits above the page content, never under the carousel */}
          <Link href="/" className="relative z-10 shrink-0 transition-opacity hover:opacity-80">
            <img
              src="/images/brand/logo.png"
              alt="El Templo Digital de Alana"
              className="w-[120px] md:w-[150px] lg:w-[180px] h-auto object-contain"
            />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-8">
            {NAV_ITEMS.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                active={isActive(item.href)}
                open={openDropdown === item.label}
                onOpen={() => setOpenDropdown(item.label)}
                onClose={() => setOpenDropdown((current) => (current === item.label ? null : current))}
                onToggle={() =>
                  setOpenDropdown((current) => (current === item.label ? null : item.label))
                }
              />
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2 xl:gap-3 shrink-0">
            <LanguageSwitcher />

            {!isHome && (
              <button
                type="button"
                className="lg:hidden p-2.5 hover:bg-alana-grey rounded-lg transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? t('closeMenu') : t('openMenu')}
                onClick={() => setMobileMenuOpen((open) => !open)}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && !isHome && (
        <nav className="lg:hidden border-t border-black/10 bg-white">
          <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="border-b border-black/5 pb-4 last:border-b-0">
                <div className="flex items-center justify-between gap-4">
                  <Link
                    href={item.href}
                    className={`text-2xl font-heading uppercase tracking-wide transition-colors ${
                      isActive(item.href) ? 'text-black' : 'text-black/60 hover:text-black'
                    }`}
                  >
                    {t(item.label)}
                  </Link>

                  {item.children && (
                    <button
                      type="button"
                      className="p-2 -mr-2"
                      aria-expanded={openMobileGroup === item.label}
                      aria-label={t(item.label)}
                      onClick={() =>
                        setOpenMobileGroup((current) =>
                          current === item.label ? null : item.label
                        )
                      }
                    >
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          openMobileGroup === item.label ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  )}
                </div>

                {item.children && openMobileGroup === item.label && (
                  <ul className="mt-3 ml-1 flex flex-col gap-2">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="font-sans text-base text-black/60 hover:text-black transition-colors"
                        >
                          {t(child.label)}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

interface DesktopNavItemProps {
  item: NavItem
  active: boolean
  open: boolean
  onOpen: () => void
  onClose: () => void
  onToggle: () => void
}

function DesktopNavItem({ item, active, open, onOpen, onClose, onToggle }: DesktopNavItemProps) {
  const t = useTranslations('nav')

  const linkClasses = `text-[13px] whitespace-nowrap font-heading font-medium tracking-wide uppercase transition-colors duration-300 ${
    active ? 'text-black' : 'text-black/60 hover:text-black'
  }`

  if (!item.children) {
    return (
      <Link href={item.href} className={linkClasses}>
        {t(item.label)}
        {active && <span className="block h-0.5 w-full bg-black mt-1 rounded-full" />}
      </Link>
    )
  }

  return (
    <div
      className="relative"
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onFocus={onOpen}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) onClose()
      }}
    >
      <div className="flex items-center gap-1">
        <Link href={item.href} className={linkClasses}>
          {t(item.label)}
        </Link>
        <button
          type="button"
          className="p-1 -mr-1 text-black/60 hover:text-black transition-colors"
          aria-expanded={open}
          aria-label={t(item.label)}
          onClick={onToggle}
        >
          <ChevronDown
            size={14}
            className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          />
        </button>
      </div>
      {active && <span className="block h-0.5 w-full bg-black mt-1 rounded-full" />}

      {open && (
        <div className="absolute left-0 top-full pt-3 min-w-[190px] z-50">
          <ul className="section-dropdown border border-black/10 shadow-lg py-3">
            {item.children.map((child) => (
              <li key={child.href}>
                <Link
                  href={child.href}
                  className="block px-5 py-2 font-sans text-sm text-black/70 hover:text-black hover:bg-black/5 transition-colors"
                >
                  {t(child.label)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
