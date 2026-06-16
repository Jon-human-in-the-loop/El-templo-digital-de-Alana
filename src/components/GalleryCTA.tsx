import Image from 'next/image'
import { Link } from '@/i18n/routing'

/** Imagen-CTA al final de la home que deriva a la Galería. */
export default function GalleryCTA() {
  return (
    <section className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden bg-black border-t border-black">
      <Image
        src="/images/portfolio/fluid-art/se-ondula-el-eter.webp"
        alt=""
        fill
        className="object-cover opacity-60"
        sizes="100vw"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black/30">
        <p className="font-sans uppercase tracking-[0.3em] text-white/70 text-xs mb-4">Obra disponible</p>
        <h2 className="font-heading uppercase leading-none text-white mb-8" style={{ fontSize: 'clamp(2.5rem, 9vw, 7rem)' }}>
          Galería
        </h2>
        <Link
          href="/gallery"
          className="inline-flex items-center gap-3 font-heading uppercase text-lg border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
        >
          Ver galería
          <span className="text-2xl">→</span>
        </Link>
      </div>
    </section>
  )
}
