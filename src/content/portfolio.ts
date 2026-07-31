import type { PortfolioCategory } from '@/types/content'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * PORTFOLIO — dos secciones, Figurativo primero
 * ─────────────────────────────────────────────────────────────────────────────
 * El orden del array es el orden en que se muestran las secciones.
 *
 * Las descripciones son las del documento de Alana (una por sección) y el
 * español es el original. `cover` es la imagen de fondo que hace de portada:
 * son las que señala el machete, tomadas de la obra ya publicada. Se pueden
 * cambiar por otras sin tocar ningún componente.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  {
    slug: 'figurativo',
    title: { es: 'Figurativo', en: 'Figurative', pt: 'Figurativo' },
    cover: {
      src: '/images/portfolio/figurativo/unibesos-2.webp',
      alt: 'Figurativo — obra de Alana Zarzairaeta',
    },
    description: {
      es: 'Siempre mi arte se comunicó primero conmigo. Es como si seres que están en otro lugar toquen la puerta de mi ser para darme su mensaje sagrado. Estos seres existen. No sé cómo se ven. Mi misión es traducir su brillante energía en una imagen que haga perdurar su mensaje por los siglos de los siglos. Todas mis pinturas tienen una energía viva que habita en ellas y no muere jamás. Estos personajes son parte mía, parte de mi vida. Son un diario íntimo de sanación.',
      en: 'My art always spoke to me first. It is as if beings from somewhere else knocked on the door of my being to give me their sacred message. These beings exist. I do not know what they look like. My mission is to translate their shining energy into an image that keeps their message alive for ever and ever. All my paintings hold a living energy that dwells in them and never dies. These characters are part of me, part of my life. They are an intimate diary of healing.',
      pt: 'A minha arte sempre comunicou primeiro comigo. É como se seres que estão noutro lugar batessem à porta do meu ser para me dar a sua mensagem sagrada. Estes seres existem. Não sei como se veem. A minha missão é traduzir a sua energia brilhante numa imagem que faça perdurar a sua mensagem pelos séculos dos séculos. Todas as minhas pinturas têm uma energia viva que habita nelas e nunca morre. Estas personagens são parte de mim, parte da minha vida. São um diário íntimo de cura.',
    },
  },
  {
    // «Fluid Art» se usa igual en los tres idiomas: es el nombre de la serie.
    slug: 'fluid-art',
    title: { es: 'Fluid Art', en: 'Fluid Art', pt: 'Fluid Art' },
    cover: {
      src: '/images/portfolio/fluid-art/re-suscito.webp',
      alt: 'Fluid Art — obra de Alana Zarzairaeta',
    },
    description: {
      es: 'En estas obras me descubro, descubro la naturaleza de lo potencial. La pintura está viva porque su medio es el agua, y el agua es lo más cercano a Dios. El agua, lo líquido, carga un comportamiento propio, que puedo guiar pero no controlar. Estas obras son el resultado en conjunto con Dios (como toda mi obra), siendo muy gráfica nuestra colaboración a lo largo de esta colección.',
      en: 'In these works I discover myself, I discover the nature of the potential. The painting is alive because its medium is water, and water is the closest thing to God. Water, the liquid, carries a behaviour of its own, which I can guide but not control. These works are the result of working together with God (as is all my work), and our collaboration is very plain to see across this collection.',
      pt: 'Nestas obras descubro-me, descubro a natureza do potencial. A pintura está viva porque o seu meio é a água, e a água é o que há de mais próximo de Deus. A água, o líquido, carrega um comportamento próprio, que posso guiar mas não controlar. Estas obras são o resultado em conjunto com Deus (como toda a minha obra), sendo muito gráfica a nossa colaboração ao longo desta coleção.',
    },
  },
]

export function portfolioCategory(slug: string): PortfolioCategory | undefined {
  return PORTFOLIO_CATEGORIES.find((category) => category.slug === slug)
}
