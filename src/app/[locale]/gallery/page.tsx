import { Link } from '@/i18n/routing'

const sections = [
  { id: 'originales', title: 'Originales' },
  { id: 'acuarelas', title: 'Acuarelas' },
  { id: 'merch', title: 'Merch' },
]

export default function GalleryPage() {
  return (
    <div>
      {/* Hero */}
      <section className="w-full px-6 py-20 md:py-28 bg-alana-grey">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-black/40 mb-4">Galería</p>
          <h1 className="text-5xl md:text-7xl font-heading uppercase leading-none text-black mb-6">Galería</h1>
          <p className="text-base md:text-lg text-black/60 font-sans italic max-w-xl">
            Obra disponible. Para consultas y pedidos,{' '}
            <Link href="/contact" className="underline underline-offset-4 hover:opacity-60 transition-opacity">
              escríbeme
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Subsecciones (estructura — la grilla de obras se carga después) */}
      {sections.map((s) => (
        <section
          key={s.id}
          id={s.id}
          className="w-full px-6 py-20 md:py-28 border-t border-black/10 scroll-mt-24"
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="font-heading uppercase leading-none mb-8" style={{ fontSize: 'clamp(2rem, 6vw, 4.5rem)' }}>
              {s.title}
            </h2>
            <p className="font-sans text-black/40 italic">Próximamente: obras disponibles en esta sección.</p>
          </div>
        </section>
      ))}
    </div>
  )
}
