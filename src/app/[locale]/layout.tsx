import type { Metadata, Viewport } from 'next'
import '../globals.css'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import { notFound } from 'next/navigation'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import { CartProvider } from '@/context/CartContext'
import { Cormorant_Garamond } from 'next/font/google'
import localFont from 'next/font/local'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const helveticaUltra = localFont({
  src: '../../../public/fonts/Helvetica-LT-Ultra-Compressed.ttf',
  variable: '--font-helvetica-ultra',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'El Templo Digital de Alana',
  description: 'Universo Creativo, Portfolio y Tienda Virtual de Alana Zarzairaeta.',
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: 'El Templo Digital de Alana',
    description: 'Universo Creativo, Portfolio y Tienda Virtual de Alana Zarzairaeta.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { children, params } = props;
  const resolvedParams = await params;
  
  if (!routing.locales.includes(resolvedParams.locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={resolvedParams.locale} className={`${cormorant.variable} ${helveticaUltra.variable}`}>
      <body className="antialiased font-sans">
        <NextIntlClientProvider messages={messages}>
          <CartProvider>
            <Header />
            <div className="min-h-[calc(100vh-200px)]">
              {children}
            </div>
            <WhatsAppButton phoneNumber="351968493165" />
            <Footer />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
