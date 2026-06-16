import createIntlMiddleware from 'next-intl/middleware'
import { routing } from '@/i18n/routing'

export default createIntlMiddleware(routing)

export const config = {
  matcher: [
    // Locale routes (next-intl) — skip api, next internals and static files
    '/((?!api|_next|_vercel|.*\\..*).*)',
  ],
}
