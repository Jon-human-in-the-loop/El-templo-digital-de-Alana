/**
 * Contenido editorial de "Sobre mí" — fuente: documento de la artista.
 * Idioma fuente: español (principal). Pendiente de traducción EN/PT.
 */

/** Statement completo de la artista (un elemento por párrafo). */
export const statement: string[] = [
  'Alana es una artista multidisciplinar. A través de sus diferentes facetas explota su concepción de autenticidad, fluidez y valentía, sosteniendo su propósito espiritual de alentar a otros a abrazar su identidad única e irrepetible.',
  'Oscila entre el estallido de color que alberga en su interior y personalidad, altamente visible en su obra, y su gusto por lo oscuro, siendo portadora del binomio luz-sombra que la describe.',
  'Conecta con innumerables vías de expresión, siendo esta última su mayor virtud. Pintura acrílica, acuarelas, combinaciones muy diversas de materiales tales como lápices, fibras, glitter, entrelazado con su poética, todo aquello que consiga maximizar las emociones que plasma en los diferentes soportes.',
  'Su obra carece de simplicidad. Viene de un alma que siente toda la vida con profundidad.',
  'Su mirada onírica del mundo la lleva a crear escenas con personajes que existen en otras dimensiones. Su obra está viva, sus muñecas portan energía ancestral y se comunican con ella desde tiempos inmemoriales.',
  'Toda su obra está cargada de mensajes esotéricos autorreferenciales, explorando la materialidad e inmaterialidad, y a su vez, la materialización de lo inmaterial, personificando aquellas energías que percibe y se comunican con ella.',
  'Medium.',
  'Su arte es para ella lo más sagrado y se percibe indivisible de él, porque sin su expresar no sería nadie.',
]

export interface CvMilestone {
  /** Periodo o año, p. ej. "2012 — 2019". */
  period: string
  /** Título del hito (opcional). */
  title?: string
  /** Descripción del hito. */
  description: string
}

/** Currículum completo, en orden cronológico. */
export const cv: CvMilestone[] = [
  {
    period: '1993 — actualidad',
    description:
      'Una argentina residiendo en Europa. Aunque en su mayor parte fue autodidacta, se formó en diversos talleres artísticos durante su infancia y juventud.',
  },
  {
    period: '2012 — 2019',
    title: 'Arquitectura y Urbanismo',
    description:
      'Obtuvo el título de Arquitecta y Urbanista en la Universidad Nacional de Córdoba en 2019. Otorga especial importancia a su formación profesional, ya que le ha permitido construir otra visión del arte, desde la diagramación y composición de una obra hasta el hilado del conocimiento de la historia del arte. Pero más importancia le da al hecho de que la arquitectura le enseñó cuán opresiva puede ser para sí misma y cuán libre en realidad vino a ser: esa represión que sintió en su profesión la llevó a discernir su camino en el mundo, un camino amable y de fe.',
  },
  {
    period: '2018 — 2019',
    title: 'La Otra Cara',
    description:
      'Formó parte del colectivo de artistas autogestionado "La Otra Cara" en la ciudad de Córdoba, siendo partícipe de exposiciones colectivas en varias oportunidades.',
  },
  {
    period: '2020 — 2022',
    title: 'Posadas',
    description:
      'Colaboró en espectáculos en vivo y talleres de pintura en la ciudad de Posadas. Formó parte del grupo orquestal femenino "Casa 11" en 2021, como intérprete y poeta.',
  },
  {
    period: '2022',
    title: 'Generazion 00',
    description:
      'Directora de arte en la microserie "Generazion 00", dirigida por Victoria Cáceres: caracterización estética de los personajes, elección y recreación de locaciones, vestuario y escenografía.',
  },
  {
    period: '2022',
    title: 'Ciclo Humedales',
    description:
      'Artista visual en la edición 2022 del documental "Ciclo Humedales", donde desarrolla la obra "Se ondula el éter que ata las superficies", pieza de fluid art con acrílico sobre bastidor entelado. La miniserie busca generar conciencia sobre la importancia de la Ley de Humedales para preservar la biodiversidad.',
  },
  {
    period: '2022',
    title: 'Mural Melchora Caburú',
    description:
      'Participó en la reinterpretación del rostro de Melchora Caburú, compañera de Andresito Guacurarí y figura clave en la historia del Litoral argentino. Ante la falta de registros gráficos de su rostro, se encargó un mural que reinterpretara sus rasgos, inmortalizado en la "Costanera" de Posadas junto a Andrea Herrera (PITU).',
  },
  {
    period: '2022 — 2025',
    title: 'Album Covers',
    description:
      'Creadora de portadas para EP, sencillos, álbumes, videoclips y visuales de espectáculos de Saudade, Rodrigo Bobadilla Oliva, Sabina Belén y Liyah Dalani.',
  },
  {
    period: '2023 — 2024',
    title: 'Libro Sonoro',
    description:
      'Ilustradora y creadora de videos en "Libro Sonoro", junto a Rodrigo Bobadilla Oliva (música y efectos de sonido) y Rocío Laria (poesía y voz). Un dispositivo multisensorial y multidisciplinario que reúne lo visual, lo literario y lo auditivo, permitiendo al usuario transportarse a otro espacio-tiempo.',
  },
  {
    period: '2023 — actualidad',
    title: 'Tatuadora · The Inky Club',
    description:
      'Se desarrolla como tatuadora en el estudio "The Inky Club" en Porto, donde explora estilos como black work y engraving con un toque autoral y temáticas espirituales. Desarrolló "el talismán de poder", un tatuaje canalizado con registros akáshicos y cargado con energía reiki para sanar.',
  },
  {
    period: '2025 — actualidad',
    title: 'Ferias, eventos y exposiciones',
    description:
      'Participa de numerosas ferias, eventos, flash days, exposiciones y mercados de arte.',
  },
]

/** Frase de disponibilidad para colaboraciones (también usada en Home/Contacto). */
export const collaborationNote =
  'I am open to exciting projects and creative collaborations, feel free to get in touch.'
