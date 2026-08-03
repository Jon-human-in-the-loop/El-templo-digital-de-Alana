import type { Localized } from '@/types/content'

/**
 * BLOG — descripción fija que va arriba, antes de las entradas.
 * Texto del documento de Alana; el español es el original.
 * Los párrafos se separan con una línea en blanco.
 */
export const BLOG_INTRO: Localized = {
  es: `Bienvenidos a mi blog. Estoy muy emocionada por empezar a compartir aquí parte del Universo que compone mi mente y mis ideas, ambas muy mezcladas con mi plano onírico y espiritual.

Me caracterizo por ser una persona que analiza (una persona importante lo llamó «alanizar») todo en su vida: convierto cada conversación, bajada astral, meditación o experiencia en un aprendizaje, duela o no… Y eso me mantiene en un constante crecimiento y una mutación sin fin. Mucho de esto sucede por escrito, y siento que crear este espacio me permitirá compartir un poquito de lo que Dios me ayuda a comprender del Universo, o al menos, del mío. Espero que te sirva.`,

  en: `Welcome to my blog. I am very excited to start sharing here part of the Universe that makes up my mind and my ideas, both of them deeply mixed with my dreamlike and spiritual plane.

I am the kind of person who analyses (someone important to me called it "alanising") everything in her life: I turn every conversation, astral descent, meditation or experience into a lesson, whether it hurts or not… And that keeps me in constant growth and endless mutation. A lot of this happens in writing, and I feel that creating this space will let me share a little of what God helps me understand about the Universe, or at least about mine. I hope it serves you.`,

  pt: `Bem-vindos ao meu blog. Estou muito animada por começar a partilhar aqui parte do Universo que compõe a minha mente e as minhas ideias, ambas muito misturadas com o meu plano onírico e espiritual.

Caracterizo-me por ser uma pessoa que analisa (uma pessoa importante chamou-lhe «alanizar») tudo na sua vida: converto cada conversa, descida astral, meditação ou experiência numa aprendizagem, doa ou não… E isso mantém-me em constante crescimento e numa mutação sem fim. Muito disto acontece por escrito, e sinto que criar este espaço me vai permitir partilhar um pouco daquilo que Deus me ajuda a compreender do Universo, ou pelo menos do meu. Espero que te sirva.`,
}

export function blogIntroParagraphs(intro: string): string[] {
  return intro.split('\n\n').map((paragraph) => paragraph.trim()).filter(Boolean)
}
