'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Minus, Plus } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import { localize } from '@/content/locale'
import type { Artwork } from '@/types/content'

interface ArtworkListProps {
  artworks: Artwork[]
}

/**
 * Cuánto tarda una ficha en plegarse o desplegarse, en segundos.
 *
 * Lo comparten la animación y el scroll: si el scroll no sabe cuánto dura el
 * pliegue, apunta a un sitio que todavía se está moviendo.
 */
const DURACION_PLIEGUE = 0.45

/**
 * Gallery list: one collapsible sheet per artwork.
 * Fields with no content yet are simply not rendered, so the skeleton can be
 * published and filled in later from src/content/artworks.ts.
 */
export default function ArtworkList({ artworks }: ArtworkListProps) {
  const [openSlug, setOpenSlug] = useState<string | null>(null)
  const detener = useRef<(() => void) | null>(null)

  const cancelarScroll = () => {
    detener.current?.()
    detener.current = null
  }

  /**
   * Subir la ficha recién abierta al tope de la pantalla.
   *
   * La ficha se despliega hacia abajo y el scroll se queda donde estaba, así
   * que si la obra estaba a media pantalla su imagen quedaba debajo del
   * pliegue: se abría mostrando la descripción y había que scrollear hacia
   * arriba para ver el cuadro. El `scroll-mt-28` del <li> deja el sitio del
   * header fijo.
   *
   * Lo delicado es cuando ya había otra ficha abierta: esa ficha se pliega al
   * mismo tiempo, y al encogerse arrastra hacia arriba todo lo que tiene
   * debajo. Un `scrollIntoView` apunta a donde la obra está *ahora* y, para
   * cuando el pliegue termina, la obra ya subió esos cientos de píxeles: ese
   * era el salto. Y pedir un scroll suave y esperar tampoco alcanza, porque
   * el navegador lo cancela al ver que el documento cambia de alto debajo.
   *
   * Así que movemos el scroll nosotros, cuadro a cuadro y a la par del
   * pliegue: en cada cuadro volvemos a medir dónde está la obra y avanzamos
   * un poco hacia ahí. Como la medición es siempre fresca, da igual cuánto se
   * encoja lo de arriba: al terminar el pliegue la obra está en su sitio.
   */
  const subirAlAbrir = (slug: string) => {
    cancelarScroll()
    const destino = document.getElementById(`obra-${slug}`)
    if (!destino) return

    const margen = parseFloat(window.getComputedStyle(destino).scrollMarginTop) || 0
    const sitio = () => destino.getBoundingClientRect().top + window.scrollY - margen
    const desde = window.scrollY
    // Lo que hay que recorrer, medido antes de que nada se mueva.
    const trecho = sitio() - desde
    const inicio = performance.now()
    const pliegue = DURACION_PLIEGUE * 1000
    // Unos cuadros de más: el pliegue puede asentarse justo después del final.
    const cola = 150
    let cuadro = 0

    const paso = (ahora: number) => {
      const transcurrido = ahora - inicio
      const t = Math.min(1, transcurrido / pliegue)
      // Curva parecida a la del pliegue, para ir a su paso y no adelantarse.
      const suave = t < 0.5 ? 4 * t * t * t : 1 - (-2 * t + 2) ** 3 / 2
      // Medido desde donde la obra está *en este cuadro*: lo que falta es sólo
      // lo que falta del viaje, sin arrastrar lo que la obra se movió sola al
      // plegarse la ficha de arriba.
      const top = sitio() - trecho * (1 - suave)
      // `instant` es necesario: globals.css pone scroll-behavior: smooth, y sin
      // esto cada cuadro pediría su propia animación y el scroll se arrastraría.
      window.scrollTo({ top: Math.max(0, top), behavior: 'instant' })
      if (transcurrido < pliegue + cola) cuadro = window.requestAnimationFrame(paso)
      else cancelarScroll()
    }

    // Si la persona scrollea mientras tanto, mandan sus dedos.
    const interrumpir = () => cancelarScroll()
    detener.current = () => {
      window.cancelAnimationFrame(cuadro)
      window.removeEventListener('wheel', interrumpir)
      window.removeEventListener('touchmove', interrumpir)
    }
    window.addEventListener('wheel', interrumpir, { passive: true })
    window.addEventListener('touchmove', interrumpir, { passive: true })
    cuadro = window.requestAnimationFrame(paso)
  }

  useEffect(() => cancelarScroll, [])

  // Deep links from the portfolio (/gallery#obra-<slug>) open that sheet.
  useEffect(() => {
    const openFromHash = () => {
      const hash = window.location.hash.replace('#obra-', '')
      if (hash && artworks.some((artwork) => artwork.slug === hash)) {
        setOpenSlug(hash)
        subirAlAbrir(hash)
      }
    }
    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artworks])

  /**
   * Abrir una ficha queda anotado en la URL.
   *
   * Es lo que hace que cambiar de idioma no pierda la lectura: la página se
   * vuelve a montar en el idioma nuevo y el efecto de arriba reabre la ficha
   * que dice el hash. De paso, el enlace a una obra abierta se puede copiar
   * y compartir. `replaceState` no navega ni dispara `hashchange`, así que no
   * llena el historial ni se pisa con el efecto.
   */
  const toggle = (slug: string) => {
    const siguiente = openSlug === slug ? null : slug
    setOpenSlug(siguiente)
    if (siguiente) subirAlAbrir(siguiente)
    else cancelarScroll()
    const { pathname, search } = window.location
    window.history.replaceState(null, '', siguiente ? `#obra-${siguiente}` : `${pathname}${search}`)
  }

  return (
    <ul className="w-full border-t border-black/10">
      {artworks.map((artwork) => (
        <ArtworkSheet
          key={artwork.slug}
          artwork={artwork}
          open={openSlug === artwork.slug}
          onToggle={() => toggle(artwork.slug)}
        />
      ))}
    </ul>
  )
}

interface ArtworkSheetProps {
  artwork: Artwork
  open: boolean
  onToggle: () => void
}

function ArtworkSheet({ artwork, open, onToggle }: ArtworkSheetProps) {
  const t = useTranslations('gallery')
  const locale = useLocale()

  const technique = localize(artwork.technique, locale)
  const description = localize(artwork.description, locale)
  const notes = localize(artwork.notes, locale)

  const facts = [
    { label: t('year'), value: artwork.year },
    { label: t('dimensions'), value: artwork.dimensions },
    { label: t('technique'), value: technique },
  ].filter((fact) => fact.value)

  /**
   * Una obra sin fotografiar puede tener ficha igual: las acuarelas llegaron
   * con técnica, medidas y descripción antes que sus imágenes. Sólo cuando no
   * hay ni imagen ni datos la ficha se reduce al aviso de «Próximamente».
   */
  const hasSheet = facts.length > 0 || Boolean(description) || Boolean(notes)
  const onlyComingSoon = !artwork.wallImage && !hasSheet

  return (
    <li id={`obra-${artwork.slug}`} className="border-b border-black/10 scroll-mt-28">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="w-full flex items-center justify-between gap-6 px-6 md:px-12 py-6 md:py-8 text-left hover:bg-black/[0.03] transition-colors"
      >
        <span className="flex flex-col md:flex-row md:items-baseline md:gap-5">
          <span
            className="font-heading uppercase leading-none"
            style={{ fontSize: 'clamp(1.3rem, 3.4vw, 2.6rem)' }}
          >
            {artwork.title}
          </span>
          {artwork.year && (
            <span className="font-sans text-sm text-black/40 tracking-widest mt-1 md:mt-0">
              {artwork.year}
            </span>
          )}
        </span>
        <span className="shrink-0 text-black/50" aria-hidden="true">
          {open ? <Minus size={24} strokeWidth={1.5} /> : <Plus size={24} strokeWidth={1.5} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: DURACION_PLIEGUE, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            {/* Anunciada, sin fotografiar y sin ficha todavía */}
            {onlyComingSoon ? (
              <div className="px-6 md:px-12 pb-16 pt-4">
                <p className="font-sans text-sm uppercase tracking-[0.3em] text-black/40">
                  {t('comingSoon')}
                </p>
              </div>
            ) : (
            <div className="px-6 md:px-12 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Imagen en pared; si todavía no hay foto, el aviso ocupa su lugar */}
              {artwork.wallImage ? (
                <div className="relative w-full h-[60vh] lg:h-[70vh] bg-alana-grey">
                  <Image
                    src={artwork.wallImage.src}
                    alt={artwork.wallImage.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              ) : (
                <div className="flex min-h-[12rem] items-center justify-center bg-alana-grey">
                  <p className="font-sans text-sm uppercase tracking-[0.3em] text-black/40">
                    {t('comingSoon')}
                  </p>
                </div>
              )}

              {/* Ficha */}
              <div className="flex flex-col">
                <p className="font-sans text-[10px] uppercase tracking-[0.3em] text-black/40 mb-6">
                  {t('details')}
                </p>

                {facts.length > 0 && (
                  <dl className="mb-8">
                    {facts.map((fact) => (
                      <div key={fact.label} className="flex gap-4 border-t border-black/10 py-3">
                        <dt className="w-32 shrink-0 font-sans text-xs uppercase tracking-widest text-black/40">
                          {fact.label}
                        </dt>
                        <dd className="font-sans text-base text-black/80">{fact.value}</dd>
                      </div>
                    ))}
                  </dl>
                )}

                {description && (
                  <p className="font-sans text-base md:text-lg text-black/75 leading-relaxed italic whitespace-pre-line">
                    {description}
                  </p>
                )}

                {notes && (
                  <div className="mt-6 border-t border-black/10 pt-4">
                    <p className="font-sans text-xs uppercase tracking-widest text-black/40 mb-2">
                      {t('notes')}
                    </p>
                    <p className="font-sans text-base text-black/70 leading-relaxed italic">
                      {notes}
                    </p>
                  </div>
                )}

                {/* Imágenes de detalle */}
                {artwork.detailImages.length > 0 && (
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    {artwork.detailImages.map((image) => (
                      <div key={image.src} className="relative h-40 md:h-52 bg-alana-grey">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </li>
  )
}
