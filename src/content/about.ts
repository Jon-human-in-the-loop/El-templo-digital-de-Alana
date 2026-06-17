/**
 * Contenido editorial de "Sobre mí" — fuente: documento de la artista.
 * Texto disponible en ES (fuente), EN y PT.
 */

import type { Locale } from './locale'

/** Statement completo de la artista (un elemento por párrafo). */
export const statement: Record<Locale, string[]> = {
  es: [
    'Alana es una artista multidisciplinar. A través de sus diferentes facetas explota su concepción de autenticidad, fluidez y valentía, sosteniendo su propósito espiritual de alentar a otros a abrazar su identidad única e irrepetible.',
    'Oscila entre el estallido de color que alberga en su interior y personalidad, altamente visible en su obra, y su gusto por lo oscuro, siendo portadora del binomio luz-sombra que la describe.',
    'Conecta con innumerables vías de expresión, siendo esta última su mayor virtud. Pintura acrílica, acuarelas, combinaciones muy diversas de materiales tales como lápices, fibras, glitter, entrelazado con su poética, todo aquello que consiga maximizar las emociones que plasma en los diferentes soportes.',
    'Su obra carece de simplicidad. Viene de un alma que siente toda la vida con profundidad.',
    'Su mirada onírica del mundo la lleva a crear escenas con personajes que existen en otras dimensiones. Su obra está viva, sus muñecas portan energía ancestral y se comunican con ella desde tiempos inmemoriales.',
    'Toda su obra está cargada de mensajes esotéricos autorreferenciales, explorando la materialidad e inmaterialidad, y a su vez, la materialización de lo inmaterial, personificando aquellas energías que percibe y se comunican con ella.',
    'Médium.',
    'Su arte es para ella lo más sagrado y se percibe indivisible de él, porque sin su expresar no sería nadie.',
  ],
  en: [
    'Alana is a multidisciplinary artist. Through her different facets she explores her conception of authenticity, fluidity and courage, holding to her spiritual purpose of encouraging others to embrace their unique, unrepeatable identity.',
    'She oscillates between the burst of colour she holds within her interior and personality — highly visible in her work — and her taste for the dark, carrying the light-shadow binomial that describes her.',
    'She connects with countless avenues of expression, this being her greatest virtue. Acrylic painting, watercolours, wildly diverse combinations of materials such as pencils, markers and glitter, interwoven with her poetics — everything that manages to maximise the emotions she pours onto her different supports.',
    'Her work lacks simplicity. It comes from a soul that feels all of life deeply.',
    'Her oneiric gaze upon the world leads her to create scenes with characters that exist in other dimensions. Her work is alive; her dolls carry ancestral energy and have communicated with her since time immemorial.',
    'All of her work is charged with self-referential esoteric messages, exploring materiality and immateriality and, in turn, the materialisation of the immaterial — personifying those energies she perceives and that communicate with her.',
    'Medium.',
    'Her art is the most sacred thing to her, and she perceives herself as indivisible from it, because without her expression she would be no one.',
  ],
  pt: [
    'Alana é uma artista multidisciplinar. Através das suas diferentes facetas explora a sua conceção de autenticidade, fluidez e coragem, sustentando o seu propósito espiritual de encorajar os outros a abraçar a sua identidade única e irrepetível.',
    'Oscila entre a explosão de cor que guarda no seu interior e personalidade — altamente visível na sua obra — e o seu gosto pelo escuro, sendo portadora do binómio luz-sombra que a descreve.',
    'Conecta-se com inúmeras vias de expressão, sendo esta a sua maior virtude. Pintura acrílica, aguarelas, combinações muito diversas de materiais como lápis, canetas e glitter, entrelaçados com a sua poética — tudo aquilo que consiga maximizar as emoções que plasma nos diferentes suportes.',
    'A sua obra carece de simplicidade. Vem de uma alma que sente toda a vida com profundidade.',
    'O seu olhar onírico sobre o mundo leva-a a criar cenas com personagens que existem noutras dimensões. A sua obra está viva; as suas bonecas carregam energia ancestral e comunicam com ela desde tempos imemoriais.',
    'Toda a sua obra está carregada de mensagens esotéricas autorreferenciais, explorando a materialidade e a imaterialidade e, por sua vez, a materialização do imaterial — personificando aquelas energias que percebe e que comunicam com ela.',
    'Médium.',
    'A sua arte é para ela o mais sagrado e percebe-se indivisível dela, porque sem o seu expressar não seria ninguém.',
  ],
}

export interface CvMilestone {
  /** Periodo o año (localizado por la palabra "actualidad"). */
  period: Record<Locale, string>
  /** Título del hito (opcional). */
  title?: Record<Locale, string>
  /** Descripción del hito. */
  description: Record<Locale, string>
}

/** Currículum completo, en orden cronológico. */
export const cv: CvMilestone[] = [
  {
    period: { es: '1993 — actualidad', en: '1993 — present', pt: '1993 — atualidade' },
    description: {
      es: 'Una argentina residiendo en Europa. Aunque en su mayor parte fue autodidacta, se formó en diversos talleres artísticos durante su infancia y juventud.',
      en: 'An Argentine living in Europe. Though largely self-taught, she trained in various art workshops during her childhood and youth.',
      pt: 'Uma argentina a residir na Europa. Embora maioritariamente autodidata, formou-se em diversos ateliês artísticos durante a infância e a juventude.',
    },
  },
  {
    period: { es: '2012 — 2019', en: '2012 — 2019', pt: '2012 — 2019' },
    title: { es: 'Arquitectura y Urbanismo', en: 'Architecture & Urban Planning', pt: 'Arquitetura e Urbanismo' },
    description: {
      es: 'Obtuvo el título de Arquitecta y Urbanista en la Universidad Nacional de Córdoba en 2019. Otorga especial importancia a su formación profesional, ya que le ha permitido construir otra visión del arte, desde la diagramación y composición de una obra hasta el hilado del conocimiento de la historia del arte. Pero más importancia le da al hecho de que la arquitectura le enseñó cuán opresiva puede ser para sí misma y cuán libre en realidad vino a ser: esa represión que sintió en su profesión la llevó a discernir su camino en el mundo, un camino amable y de fe.',
      en: 'She earned her degree as an Architect and Urban Planner from the National University of Córdoba in 2019. She places special value on her professional training, as it allowed her to build another vision of art — from the layout and composition of a work to weaving together a knowledge of art history. But she values even more the fact that architecture taught her how oppressive it could be for her, and how free she actually came to be: the repression she felt in her profession led her to discern her path in the world, a gentle path of faith.',
      pt: 'Obteve o título de Arquiteta e Urbanista na Universidade Nacional de Córdoba em 2019. Dá especial importância à sua formação profissional, pois permitiu-lhe construir outra visão da arte — desde a diagramação e composição de uma obra até ao tecer do conhecimento da história da arte. Mas dá ainda mais importância ao facto de a arquitetura lhe ter ensinado quão opressiva podia ser para si e quão livre veio realmente a ser: essa repressão que sentiu na sua profissão levou-a a discernir o seu caminho no mundo, um caminho amável e de fé.',
    },
  },
  {
    period: { es: '2018 — 2019', en: '2018 — 2019', pt: '2018 — 2019' },
    title: { es: 'La Otra Cara', en: 'La Otra Cara', pt: 'La Otra Cara' },
    description: {
      es: 'Formó parte del colectivo de artistas autogestionado "La Otra Cara" en la ciudad de Córdoba, siendo partícipe de exposiciones colectivas en varias oportunidades.',
      en: 'She was part of the self-managed artists collective "La Otra Cara" in the city of Córdoba, taking part in group exhibitions on several occasions.',
      pt: 'Fez parte do coletivo de artistas autogerido "La Otra Cara" na cidade de Córdoba, participando em exposições coletivas em várias ocasiões.',
    },
  },
  {
    period: { es: '2020 — 2022', en: '2020 — 2022', pt: '2020 — 2022' },
    title: { es: 'Posadas', en: 'Posadas', pt: 'Posadas' },
    description: {
      es: 'Colaboró en espectáculos en vivo y talleres de pintura en la ciudad de Posadas. Formó parte del grupo orquestal femenino "Casa 11" en 2021, como intérprete y poeta.',
      en: 'She collaborated on live shows and painting workshops in the city of Posadas. In 2021 she was part of the all-female orchestral group "Casa 11" as a performer and poet.',
      pt: 'Colaborou em espetáculos ao vivo e ateliês de pintura na cidade de Posadas. Em 2021 fez parte do grupo orquestral feminino "Casa 11" como intérprete e poeta.',
    },
  },
  {
    period: { es: '2022', en: '2022', pt: '2022' },
    title: { es: 'Generazion 00', en: 'Generazion 00', pt: 'Generazion 00' },
    description: {
      es: 'Directora de arte en la microserie "Generazion 00", dirigida por Victoria Cáceres: caracterización estética de los personajes, elección y recreación de locaciones, vestuario y escenografía.',
      en: 'Art director on the micro-series "Generazion 00", directed by Victoria Cáceres: aesthetic characterisation of the characters, selection and recreation of locations, wardrobe and set design.',
      pt: 'Diretora de arte na microsérie "Generazion 00", realizada por Victoria Cáceres: caracterização estética das personagens, escolha e recriação de locações, guarda-roupa e cenografia.',
    },
  },
  {
    period: { es: '2022', en: '2022', pt: '2022' },
    title: { es: 'Ciclo Humedales', en: 'Ciclo Humedales', pt: 'Ciclo Humedales' },
    description: {
      es: 'Artista visual en la edición 2022 del documental "Ciclo Humedales", donde desarrolla la obra "Se ondula el éter que ata las superficies", pieza de fluid art con acrílico sobre bastidor entelado. La miniserie busca generar conciencia sobre la importancia de la Ley de Humedales para preservar la biodiversidad.',
      en: 'Visual artist in the 2022 edition of the documentary "Ciclo Humedales", where she created the piece "Se ondula el éter que ata las superficies", a fluid-art work in acrylic on stretched canvas. The mini-series seeks to raise awareness of the importance of the Wetlands Law in preserving biodiversity.',
      pt: 'Artista visual na edição de 2022 do documentário "Ciclo Humedales", onde desenvolve a obra "Se ondula el éter que ata las superficies", peça de fluid art em acrílico sobre tela. A minissérie procura sensibilizar para a importância da Lei das Zonas Húmidas na preservação da biodiversidade.',
    },
  },
  {
    period: { es: '2022', en: '2022', pt: '2022' },
    title: { es: 'Mural Melchora Caburú', en: 'Melchora Caburú Mural', pt: 'Mural Melchora Caburú' },
    description: {
      es: 'Participó en la reinterpretación del rostro de Melchora Caburú, compañera de Andresito Guacurarí y figura clave en la historia del Litoral argentino. Ante la falta de registros gráficos de su rostro, se encargó un mural que reinterpretara sus rasgos, inmortalizado en la "Costanera" de Posadas junto a Andrea Herrera (PITU).',
      en: 'She took part in the reinterpretation of the face of Melchora Caburú, companion of Andresito Guacurarí and a key figure in the history of the Argentine Litoral. Given the lack of graphic records of her face, a mural was commissioned to reinterpret her features, immortalised on the "Costanera" of Posadas alongside Andrea Herrera (PITU).',
      pt: 'Participou na reinterpretação do rosto de Melchora Caburú, companheira de Andresito Guacurarí e figura-chave na história do Litoral argentino. Perante a falta de registos gráficos do seu rosto, foi encomendado um mural que reinterpretasse os seus traços, imortalizado na "Costanera" de Posadas, em conjunto com Andrea Herrera (PITU).',
    },
  },
  {
    period: { es: '2022 — 2025', en: '2022 — 2025', pt: '2022 — 2025' },
    title: { es: 'Album Covers', en: 'Album Covers', pt: 'Capas de Álbuns' },
    description: {
      es: 'Creadora de portadas para EP, sencillos, álbumes, videoclips y visuales de espectáculos de Saudade, Rodrigo Bobadilla Oliva, Sabina Belén y Liyah Dalani.',
      en: 'Creator of covers for EPs, singles, albums, music videos and live-show visuals for Saudade, Rodrigo Bobadilla Oliva, Sabina Belén and Liyah Dalani.',
      pt: 'Criadora de capas para EP, singles, álbuns, videoclipes e visuais de espetáculos de Saudade, Rodrigo Bobadilla Oliva, Sabina Belén e Liyah Dalani.',
    },
  },
  {
    period: { es: '2023 — 2024', en: '2023 — 2024', pt: '2023 — 2024' },
    title: { es: 'Libro Sonoro', en: 'Libro Sonoro (Sound Book)', pt: 'Libro Sonoro (Livro Sonoro)' },
    description: {
      es: 'Ilustradora y creadora de videos en "Libro Sonoro", junto a Rodrigo Bobadilla Oliva (música y efectos de sonido) y Rocío Laria (poesía y voz). Un dispositivo multisensorial y multidisciplinario que reúne lo visual, lo literario y lo auditivo, permitiendo al usuario transportarse a otro espacio-tiempo.',
      en: 'Illustrator and video creator on "Libro Sonoro", together with Rodrigo Bobadilla Oliva (music and sound effects) and Rocío Laria (poetry and voice). A multisensory, multidisciplinary device that brings together the visual, the literary and the auditory, allowing the user to be transported to another space-time.',
      pt: 'Ilustradora e criadora de vídeos em "Libro Sonoro", juntamente com Rodrigo Bobadilla Oliva (música e efeitos sonoros) e Rocío Laria (poesia e voz). Um dispositivo multissensorial e multidisciplinar que reúne o visual, o literário e o auditivo, permitindo ao utilizador transportar-se para outro espaço-tempo.',
    },
  },
  {
    period: { es: '2023 — actualidad', en: '2023 — present', pt: '2023 — atualidade' },
    title: { es: 'Tatuadora · The Inky Club', en: 'Tattoo Artist · The Inky Club', pt: 'Tatuadora · The Inky Club' },
    description: {
      es: 'Se desarrolla como tatuadora en el estudio "The Inky Club" en Porto, donde explora estilos como black work y engraving con un toque autoral y temáticas espirituales. Desarrolló "el talismán de poder", un tatuaje canalizado con registros akáshicos y cargado con energía reiki para sanar.',
      en: 'She works as a tattoo artist at "The Inky Club" studio in Porto, where she explores styles such as black work and engraving with an authorial touch and spiritual themes. She developed "the talisman of power", a tattoo channelled through the Akashic records and charged with reiki energy to heal.',
      pt: 'Desenvolve-se como tatuadora no estúdio "The Inky Club" no Porto, onde explora estilos como black work e engraving com um toque autoral e temáticas espirituais. Desenvolveu "o talismã de poder", uma tatuagem canalizada com registos akáshicos e carregada com energia reiki para curar.',
    },
  },
  {
    period: { es: '2025 — actualidad', en: '2025 — present', pt: '2025 — atualidade' },
    title: { es: 'Ferias, eventos y exposiciones', en: 'Fairs, events & exhibitions', pt: 'Feiras, eventos e exposições' },
    description: {
      es: 'Participa de numerosas ferias, eventos, flash days, exposiciones y mercados de arte.',
      en: 'She takes part in numerous fairs, events, flash days, exhibitions and art markets.',
      pt: 'Participa em inúmeras feiras, eventos, flash days, exposições e mercados de arte.',
    },
  },
]

/** Frase de disponibilidad para colaboraciones (también usada en Home/Contacto). */
export const collaborationNote: Record<Locale, string> = {
  es: 'Estoy abierta a proyectos y colaboraciones creativas; no dudes en escribirme.',
  en: "I'm open to exciting projects and creative collaborations — feel free to get in touch.",
  pt: 'Estou aberta a projetos e colaborações criativas; não hesites em escrever-me.',
}
