import { routing } from '@/i18n/routing'

import type { Locale, Localized } from '@/types/content'

/** Narrows an arbitrary locale string coming from the router to a known locale. */
export function toLocale(locale: string): Locale {
  return (routing.locales as readonly string[]).includes(locale)
    ? (locale as Locale)
    : (routing.defaultLocale as Locale)
}

/**
 * Reads a localized value, falling back to Spanish (the language Alana writes
 * in) and then to any language that has content, so a half-translated entry
 * never renders as an empty block.
 */
export function localize(value: Localized, locale: string): string {
  const key = toLocale(locale)
  return value[key] || value.es || value.en || value.pt || ''
}
