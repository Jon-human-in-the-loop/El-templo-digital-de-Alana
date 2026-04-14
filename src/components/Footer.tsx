import { Link } from '@/i18n/routing'
import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'

export default function Footer() {
  const t = useTranslations('footer')
  const tNav = useTranslations('nav')
  const locale = useLocale()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full bg-black text-white/80 mt-0">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand Logo */}
          <div className="flex flex-col gap-4">
            <Image
              src="/images/brand/logo.png"
              alt="El Templo Digital de Alana"
              width={160}
              height={80}
              className="object-contain invert"
            />
            <p className="text-sm text-white/40 font-sans leading-relaxed max-w-xs italic">
              {t('tagline')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-white uppercase text-xl mb-5">
              {t('quickLinks')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm font-sans text-white/50 hover:text-white transition-colors duration-300">
                  {tNav('home')}
                </Link>
              </li>
              <li>
                <Link href="/gift-packs" className="text-sm font-sans text-white/50 hover:text-white transition-colors duration-300">
                  {tNav('giftPacks')}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm font-sans text-white/50 hover:text-white transition-colors duration-300">
                  {tNav('about')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-sans text-white/50 hover:text-white transition-colors duration-300">
                  {tNav('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Instagram QR */}
          <div>
            <h4 className="font-heading text-white uppercase text-xl mb-5">
              {t('contact')}
            </h4>
            <p className="text-sm font-sans text-white/50 mb-6">{t('email')}</p>
            <div className="flex items-center gap-4">
              <Image
                src="/images/brand/qr-instagram.png"
                alt="Instagram QR"
                width={72}
                height={72}
                className="invert opacity-60"
              />
              <div>
                <p className="text-xs font-sans text-white/30 uppercase tracking-widest">Instagram</p>
                <p className="font-sans text-white/60 text-sm">@alanazarzairaeta</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs font-sans text-white/25 tracking-wider">
            © {currentYear} Alana Zarzairaeta. {t('copyright')}
          </p>
          <p className="text-xs font-sans text-white/25">
            {locale === 'es' ? 'Desarrollado por' : locale === 'pt' ? 'Desenvolvido por' : 'Developed by'}{' '}
            <a
              href="https://www.vanguardcrux.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 font-medium transition-colors"
            >
              Vanguard Crux
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
