import type { Localized } from '@/types/content'

/**
 * Artist statement. Spanish is the original; EN/PT are translations.
 * Paragraphs are separated by a blank line and split at render time.
 */
export const STATEMENT: Localized = {
  es: `Alana es una artista de espectro completo. Canaliza, a través de sus diferentes facetas, la concepción del mundo que ve bajo el concepto de «fluidez».

En la pintura, el tatuaje, la escritura y la performance da a conocer al mundo su visión holístico-espiritual de las cosas. Trabaja sobre el binomio «materialidad-inmaterialidad», donde la energía se diluye o se condensa, pero siempre permanece: energía.

Su obra está cargada de mensajes esotéricos autorreferenciales que exploran la materialidad y la inmaterialidad, personificando las energías que percibe y que se comunican con ella.

Médium.`,

  en: `Alana is a full spectrum artist. She channels, through her different facets, the conception of the world she sees under the concept of "fluidity".

In painting, tattoo, writing and performance art, she makes her holistic-spiritual view of things known to the world. She works on the "materiality-immateriality" binomial, where energy is diluted or condensed, but it always remains: energy.

Her work is charged with esoteric self-referential messages exploring materiality and immateriality, personifying the energies she perceives and that communicate with her.

Medium.`,

  pt: `Alana é uma artista de espectro completo. Canaliza, através das suas diferentes facetas, a conceção do mundo que vê sob o conceito de «fluidez».

Na pintura, na tatuagem, na escrita e na performance dá a conhecer ao mundo a sua visão holístico-espiritual das coisas. Trabalha sobre o binómio «materialidade-imaterialidade», onde a energia se dilui ou se condensa, mas permanece sempre: energia.

A sua obra está carregada de mensagens esotéricas autorreferenciais que exploram a materialidade e a imaterialidade, personificando as energias que percebe e que comunicam com ela.

Médium.`,
}

export function statementParagraphs(statement: string): string[] {
  return statement.split('\n\n').map((paragraph) => paragraph.trim()).filter(Boolean)
}
