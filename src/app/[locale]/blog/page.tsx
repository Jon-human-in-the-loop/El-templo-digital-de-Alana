const intro: string[] = [
  'Bienvenidos a mi blog. Estoy muy emocionada por empezar a compartir aquí parte del Universo que compone mi mente y mis ideas, ambas muy mezcladas con mi plano onírico y espiritual.',
  'Me caracterizo por ser una persona que analiza (una persona importante lo llamó "alanizar") todo en su vida; convierto cada conversación, bajada astral, meditación o experiencia en un aprendizaje, duela o no… Y eso me mantiene en un constante crecimiento y una mutación sin fin. Mucho de esto sucede por escrito, y siento que crear este espacio me permitirá compartir un poquito de lo que Dios me ayuda a comprender del Universo, o al menos, del mío. Espero que te sirva.',
]

export default function BlogPage() {
  return (
    <div>
      {/* Intro fija */}
      <section className="w-full px-6 py-20 md:py-28 bg-alana-grey">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-sans uppercase tracking-[0.3em] text-black/40 mb-4">Blog</p>
          <h1 className="text-5xl md:text-7xl font-heading uppercase leading-none text-black mb-8">Blog</h1>
          {intro.map((p, i) => (
            <p
              key={i}
              className="font-sans text-base md:text-lg text-black/70 italic leading-relaxed mb-5 last:mb-0"
            >
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Posts (próximamente) */}
      <section className="w-full px-6 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-sans text-black/40 italic">Próximamente: las primeras entradas del blog.</p>
        </div>
      </section>
    </div>
  )
}
