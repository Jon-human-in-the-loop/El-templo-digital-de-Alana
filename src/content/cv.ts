import type { Localized } from '@/types/content'

export type CvMilestone = {
  /** Años. Localizado porque «actualidad» cambia de idioma. */
  year: Localized
  label: Localized
  /** Puede tener varios párrafos, separados por una línea en blanco. */
  description: Localized
}

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CURRICULUM VITAE — editable
 * ─────────────────────────────────────────────────────────────────────────────
 * Textos completos del documento de Alana. Cada hito lleva su versión en los
 * tres idiomas; si falta una traducción se muestra el español.
 *
 * Para agregar un hito, copiá una entrada y respetá el orden cronológico.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const CV_MILESTONES: CvMilestone[] = [
  {
    year: { es: '1993 — actualidad', en: '1993 — present', pt: '1993 — atualidade' },
    label: {
      es: 'Una argentina residiendo en Europa',
      en: 'An Argentine living in Europe',
      pt: 'Uma argentina a viver na Europa',
    },
    description: {
      es: 'Aunque en su mayor parte fue autodidacta, se formó en diversos talleres artísticos durante su infancia y juventud.',
      en: 'Largely self-taught, she also trained in a number of art workshops during her childhood and youth.',
      pt: 'Ainda que em grande parte autodidata, formou-se em diversos ateliês artísticos durante a infância e a juventude.',
    },
  },
  {
    year: { es: '2012 — 2019', en: '2012 — 2019', pt: '2012 — 2019' },
    label: {
      es: 'Arquitectura y Urbanismo',
      en: 'Architecture and Urbanism',
      pt: 'Arquitetura e Urbanismo',
    },
    description: {
      es: `Obtuvo el título de Arquitecta y Urbanista en la Universidad Nacional de Córdoba en 2019. Otorga especial importancia a su formación profesional, ya que le ha permitido construir otra visión del arte, desde la diagramación y composición de una obra hasta el hilado del conocimiento de la historia del arte que viene por añadidura.

Pero más importancia le da al hecho de que la arquitectura le enseñó cuán opresiva puede ser para sí misma y cuán libre en realidad vino a ser: esta enorme represión que sintió en su profesión la llevó a discernir su camino en el mundo, un camino amable y de fe.`,
      en: `She earned her degree as an Architect and Urban Planner at the Universidad Nacional de Córdoba in 2019. She gives particular importance to that professional training, as it allowed her to build another vision of art, from the layout and composition of a piece to the thread of art history knowledge that comes with it.

But she gives even more importance to the fact that architecture taught her how oppressive she can be towards herself and how free she actually came to be: the enormous repression she felt in her profession led her to discern her path in the world, a kind path built on faith.`,
      pt: `Obteve o título de Arquiteta e Urbanista na Universidad Nacional de Córdoba em 2019. Dá especial importância à sua formação profissional, já que lhe permitiu construir outra visão da arte, desde a diagramação e composição de uma obra até ao fio do conhecimento da história da arte que vem por acréscimo.

Mas dá ainda mais importância ao facto de a arquitetura lhe ter ensinado quão opressiva pode ser consigo mesma e quão livre na verdade veio a ser: essa enorme repressão que sentiu na profissão levou-a a discernir o seu caminho no mundo, um caminho amável e de fé.`,
    },
  },
  {
    year: { es: '2018 — 2019', en: '2018 — 2019', pt: '2018 — 2019' },
    label: { es: 'La Otra Cara', en: 'La Otra Cara', pt: 'La Otra Cara' },
    description: {
      es: 'Formó parte del colectivo de artistas autogestionado «La Otra Cara» en la ciudad de Córdoba, siendo partícipe de exposiciones colectivas en varias oportunidades.',
      en: 'She was part of the self-managed artist collective "La Otra Cara" in the city of Córdoba, taking part in group exhibitions on several occasions.',
      pt: 'Fez parte do coletivo de artistas autogerido «La Otra Cara», na cidade de Córdoba, participando em exposições coletivas em várias ocasiões.',
    },
  },
  {
    year: { es: '2020 — 2022', en: '2020 — 2022', pt: '2020 — 2022' },
    label: { es: 'Posadas', en: 'Posadas', pt: 'Posadas' },
    description: {
      es: 'Colaboró en espectáculos en vivo y talleres de pintura en la ciudad de Posadas. Formó parte del grupo orquestal femenino «Casa 11» en 2021, como intérprete y poeta.',
      en: 'She collaborated on live shows and painting workshops in the city of Posadas. In 2021 she was part of the all-female orchestral group "Casa 11", as performer and poet.',
      pt: 'Colaborou em espetáculos ao vivo e ateliês de pintura na cidade de Posadas. Em 2021 fez parte do grupo orquestral feminino «Casa 11», como intérprete e poeta.',
    },
  },
  {
    year: { es: '2022', en: '2022', pt: '2022' },
    label: { es: 'Generazion 00', en: 'Generazion 00', pt: 'Generazion 00' },
    description: {
      es: 'Participó como directora de arte en la microserie «Generazion 00», dirigida por Victoria Cáceres, realizando la caracterización estética de los personajes, la elección y recreación de locaciones, vestuario y escenografía.',
      en: 'She worked as art director on the micro-series "Generazion 00", directed by Victoria Cáceres, handling the aesthetic characterisation of the cast, the choice and recreation of locations, costume and set design.',
      pt: 'Participou como diretora de arte na microssérie «Generazion 00», dirigida por Victoria Cáceres, realizando a caracterização estética das personagens, a escolha e recriação de locações, guarda-roupa e cenografia.',
    },
  },
  {
    year: { es: '2022', en: '2022', pt: '2022' },
    label: { es: 'Ciclo Humedales', en: 'Ciclo Humedales', pt: 'Ciclo Humedales' },
    description: {
      es: 'Participó como artista visual en la edición 2022 del documental «Ciclo Humedales», donde desarrolla la obra «Se ondula el éter que ata las superficies», pieza de fluid art con acrílico sobre bastidor entelado. La miniserie de cuatro capítulos está hoy en circulación en festivales, pero aún no ha salido a plataformas por falta de presupuesto. El documental intenta generar conciencia de la importancia que tiene la Ley de Humedales para preservar la biodiversidad.',
      en: 'She took part as a visual artist in the 2022 edition of the documentary "Ciclo Humedales", where she developed the piece "Se ondula el éter que ata las superficies", a fluid art work in acrylic on stretched canvas. The four-episode miniseries is currently circulating in festivals, but has not yet been released on platforms for lack of budget. The documentary seeks to raise awareness of how important the Wetlands Act is for preserving biodiversity.',
      pt: 'Participou como artista visual na edição de 2022 do documentário «Ciclo Humedales», onde desenvolve a obra «Se ondula el éter que ata las superficies», peça de fluid art com acrílico sobre bastidor entelado. A minissérie de quatro capítulos está hoje em circulação em festivais, mas ainda não saiu em plataformas por falta de orçamento. O documentário procura gerar consciência sobre a importância da Lei das Zonas Húmidas para preservar a biodiversidade.',
    },
  },
  {
    year: { es: '2022', en: '2022', pt: '2022' },
    label: {
      es: 'Mural Melchora Caburú',
      en: 'Melchora Caburú mural',
      pt: 'Mural Melchora Caburú',
    },
    description: {
      es: `Participó en la reinterpretación del rostro de Melchora Caburú, compañera de Andresito Guacurarí, una mujer de gran fortaleza y figura clave en la historia del Litoral argentino. Ante la falta de registros gráficos de su rostro, y con el deseo de visibilizarla, se encargó la realización de un mural que reinterpretara sus rasgos, con textos históricos y la colaboración de un equipo.

Las artistas que llevaron a cabo la inmortalización en la «Costanera» de la ciudad de Posadas fueron Alana Zarza Iraeta y Andrea Herrera, alias PITU.`,
      en: `She took part in the reinterpretation of the face of Melchora Caburú, companion of Andresito Guacurarí, a woman of great strength and a key figure in the history of Argentina's Litoral region. With no graphic records of her face and a wish to make her visible, a mural was commissioned to reinterpret her features, drawing on historical texts and the collaboration of a team.

The artists who carried out this immortalisation on the "Costanera" of the city of Posadas were Alana Zarza Iraeta and Andrea Herrera, alias PITU.`,
      pt: `Participou na reinterpretação do rosto de Melchora Caburú, companheira de Andresito Guacurarí, uma mulher de grande força e figura chave na história do Litoral argentino. Face à falta de registos gráficos do seu rosto, e com o desejo de a tornar visível, foi encomendado um mural que reinterpretasse os seus traços, com textos históricos e a colaboração de uma equipa.

As artistas que levaram a cabo esta imortalização na «Costanera» da cidade de Posadas foram Alana Zarza Iraeta e Andrea Herrera, alias PITU.`,
    },
  },
  {
    year: { es: '2022 — 2025', en: '2022 — 2025', pt: '2022 — 2025' },
    label: { es: 'Portadas de discos', en: 'Album covers', pt: 'Capas de discos' },
    description: {
      es: 'Participó como creadora de portadas para varios EP, sencillos, álbumes y videoclips, y también de visuales para espectáculos de Saudade, Rodrigo Bobadilla Oliva, Sabina Belén y Liyah Dalani.',
      en: 'She created covers for several EPs, singles, albums and music videos, as well as visuals for live shows by Saudade, Rodrigo Bobadilla Oliva, Sabina Belén and Liyah Dalani.',
      pt: 'Participou como criadora de capas para vários EP, singles, álbuns e videoclipes, e também de visuais para espetáculos de Saudade, Rodrigo Bobadilla Oliva, Sabina Belén e Liyah Dalani.',
    },
  },
  {
    year: { es: '2023 — 2024', en: '2023 — 2024', pt: '2023 — 2024' },
    label: { es: 'Libro Sonoro', en: 'Libro Sonoro', pt: 'Libro Sonoro' },
    description: {
      es: `Participa en el proyecto «Libro Sonoro» como ilustradora y creadora de videos, junto con Rodrigo Bobadilla Oliva (música y efectos de sonido) y Rocío Laria (poesía y voz).

El «Libro Sonoro» es un dispositivo multisensorial y multidisciplinario que reúne la esencia de tres tipologías artísticas: la visual, la literaria y la auditiva, impregnando cada capítulo de significado y permitiendo al usuario transportarse a otro espacio-tiempo. Espacio. Tiempo. Épocas. Momentos. Vibraciones. ¿Qué evoca una palabra, dos palabras? ¿Adónde te lleva un concepto? ¿Adónde te lleva el déjà vu?`,
      en: `She takes part in the project "Libro Sonoro" as illustrator and video maker, together with Rodrigo Bobadilla Oliva (music and sound effects) and Rocío Laria (poetry and voice).

"Libro Sonoro" is a multisensory, multidisciplinary device that brings together the essence of three artistic typologies — the visual, the literary and the auditory — filling each chapter with meaning and letting the listener travel to another space-time. Space. Time. Eras. Moments. Vibrations. What does one word evoke, or two? Where does a concept take you? Where does déjà vu take you?`,
      pt: `Participa no projeto «Libro Sonoro» como ilustradora e criadora de vídeos, juntamente com Rodrigo Bobadilla Oliva (música e efeitos sonoros) e Rocío Laria (poesia e voz).

O «Libro Sonoro» é um dispositivo multissensorial e multidisciplinar que reúne a essência de três tipologias artísticas — a visual, a literária e a auditiva — impregnando cada capítulo de significado e permitindo ao utilizador transportar-se para outro espaço-tempo. Espaço. Tempo. Épocas. Momentos. Vibrações. O que evoca uma palavra, duas palavras? Para onde te leva um conceito? Para onde te leva o déjà vu?`,
    },
  },
  {
    year: { es: '2023 — actualidad', en: '2023 — present', pt: '2023 — atualidade' },
    label: {
      es: 'Tatuadora · The Inky Club',
      en: 'Tattoo artist · The Inky Club',
      pt: 'Tatuadora · The Inky Club',
    },
    description: {
      es: 'Se desarrolla como tatuadora en el estudio «The Inky Club», en la ciudad de Porto, donde explora estilos como black work y engraving, dándole un toque autoral a sus diseños y ahondando en temáticas espirituales, como todo en su obra. Ha desarrollado «el talismán de poder», un tatuaje canalizado con registros akáshicos y cargado con energía reiki para sanar.',
      en: 'She works as a tattoo artist at the studio "The Inky Club" in Porto, where she explores styles such as black work and engraving, giving her designs an authorial touch and digging into spiritual themes, as in everything she makes. She has developed "el talismán de poder", a tattoo channelled through the akashic records and charged with reiki energy for healing.',
      pt: 'Desenvolve-se como tatuadora no estúdio «The Inky Club», na cidade do Porto, onde explora estilos como black work e engraving, dando um toque autoral aos seus desenhos e aprofundando temáticas espirituais, como tudo na sua obra. Desenvolveu «el talismán de poder», uma tatuagem canalizada com registos akáshicos e carregada com energia reiki para curar.',
    },
  },
  {
    year: { es: '2025 — actualidad', en: '2025 — present', pt: '2025 — atualidade' },
    label: {
      es: 'Ferias, eventos y exposiciones',
      en: 'Fairs, events and exhibitions',
      pt: 'Feiras, eventos e exposições',
    },
    description: {
      es: 'Participa de muchas ferias, eventos, flash days, exposiciones y mercados de arte.',
      en: 'She takes part in many fairs, events, flash days, exhibitions and art markets.',
      pt: 'Participa em muitas feiras, eventos, flash days, exposições e mercados de arte.',
    },
  },
]

export function cvParagraphs(description: string): string[] {
  return description.split('\n\n').map((paragraph) => paragraph.trim()).filter(Boolean)
}
