/** Idiomas soportados por el sitio (coincide con i18n/routing). */
export type Locale = 'es' | 'en' | 'pt'

export const LOCALES: Locale[] = ['es', 'en', 'pt']

/** Normaliza un string de locale a un Locale válido (fallback 'es'). */
export function asLocale(value: string): Locale {
  return (LOCALES as string[]).includes(value) ? (value as Locale) : 'es'
}
