import { getLocale, getTranslations } from 'next-intl/server'
import { exhibitions } from '@/content/exhibitions'
import { asLocale } from '@/content/locale'

const LOCALE_TAG: Record<string, string> = { es: 'es-ES', en: 'en-GB', pt: 'pt-PT' }

export default async function ExhibitionsPage() {
  const locale = asLocale(await getLocale())
  const t = await getTranslations('pages')
  const fmt = new Intl.DateTimeFormat(LOCALE_TAG[locale], { dateStyle: 'long' })

  return (
    <div>
      {/* Hero */}
      <section className="w-full px-6 py-20 md:py-28 bg-alana-grey">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-black/40 mb-4">{t('exhibitions')}</p>
          <h1 className="text-5xl md:text-7xl font-heading uppercase leading-none text-black">{t('exhibitions')}</h1>
        </div>
      </section>

      {/* List */}
      <section className="w-full px-6 py-20 md:py-28">
        <ul className="mx-auto max-w-4xl">
          {exhibitions.map((ex, i) => (
            <li
              key={`${ex.title}-${i}`}
              className="border-t border-black/10 py-8 first:border-t-0 grid grid-cols-1 md:grid-cols-[7rem_1fr] gap-2 md:gap-10"
            >
              <p className="font-heading uppercase text-3xl text-black/25 leading-none">{ex.year}</p>
              <div>
                <h2 className="font-heading uppercase text-2xl md:text-3xl leading-tight">{ex.title}</h2>
                {ex.collective && (
                  <p className="font-sans text-sm text-black/50 italic mt-1">{ex.collective}</p>
                )}
                <p className="font-sans text-sm text-black/70 mt-3">{ex.venue}</p>
                <p className="font-sans text-sm text-black/50">{ex.city}</p>
                <p className="font-sans text-xs text-black/40 uppercase tracking-wider mt-2">
                  {fmt.format(new Date(`${ex.date}T12:00:00`))}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
