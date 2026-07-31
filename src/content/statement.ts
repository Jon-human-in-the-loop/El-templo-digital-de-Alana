import type { Localized } from '@/types/content'

/**
 * Artist statement — texto completo, tal cual el documento de Alana.
 * El español es el original; inglés y portugués son traducciones.
 * Los párrafos se separan con una línea en blanco y se dividen al renderizar.
 */
export const STATEMENT: Localized = {
  es: `Alana es una artista multidisciplinar. A través de sus diferentes facetas explota su concepción de autenticidad, fluidez y valentía, sosteniendo su propósito espiritual de alentar a otros a abrazar su identidad única e irrepetible.

Oscila entre el estallido de color que alberga en su interior y personalidad, altamente visible en su obra, y su gusto por lo oscuro, siendo portadora del binomio luz-sombra que la describe.

Conecta con innumerables vías de expresión, siendo esta última su mayor virtud. Pintura acrílica, acuarelas, combinaciones muy diversas de materiales tales como lápices, fibras, glitter, entrelazado con su poética, todo aquello que consiga maximizar las emociones que plasma en los diferentes soportes.

Su obra carece de simplicidad. Viene de un alma que siente toda la vida con profundidad.

Su mirada onírica del mundo la lleva a crear escenas con personajes que existen en otras dimensiones. Su obra está viva, sus muñecas portan energía ancestral y se comunican con ella desde tiempos inmemoriales.

Toda su obra está cargada de mensajes esotéricos autorreferenciales, explorando la materialidad e inmaterialidad, y a su vez, la materialización de lo inmaterial, personificando aquellas energías que percibe y se comunican con ella.

Medium.

Su arte es para ella lo más sagrado y se percibe indivisible de él, porque sin su expresar no sería nadie.`,

  en: `Alana is a multidisciplinary artist. Through her different facets she unleashes her idea of authenticity, fluidity and courage, holding to her spiritual purpose of encouraging others to embrace their unique, unrepeatable identity.

She moves between the burst of colour she holds inside her — highly visible in her work — and her taste for the dark, carrying the light-shadow binomial that describes her.

She connects with countless ways of expressing herself, and that is her greatest virtue. Acrylic paint, watercolours, wildly diverse combinations of materials such as pencils, markers and glitter, interwoven with her poetry: anything that maximises the emotions she lays down on each surface.

Her work lacks simplicity. It comes from a soul that feels all of life deeply.

Her dreamlike view of the world leads her to create scenes with characters that exist in other dimensions. Her work is alive; her dolls carry ancestral energy and have been communicating with her since time immemorial.

All of her work is charged with esoteric self-referential messages, exploring materiality and immateriality and, in turn, the materialisation of the immaterial, personifying those energies she perceives and that communicate with her.

Medium.

Her art is the most sacred thing she has, and she sees herself as indivisible from it, because without her expression she would be nobody.`,

  pt: `Alana é uma artista multidisciplinar. Através das suas diferentes facetas explora a sua conceção de autenticidade, fluidez e coragem, sustentando o seu propósito espiritual de encorajar outros a abraçar a sua identidade única e irrepetível.

Oscila entre a explosão de cor que guarda no seu interior e na sua personalidade, muito visível na sua obra, e o seu gosto pelo escuro, sendo portadora do binómio luz-sombra que a descreve.

Liga-se a inúmeras vias de expressão, e essa é a sua maior virtude. Pintura acrílica, aquarelas, combinações muito diversas de materiais como lápis, marcadores e glitter, entrelaçados com a sua poética: tudo aquilo que consiga maximizar as emoções que deixa nos diferentes suportes.

A sua obra carece de simplicidade. Vem de uma alma que sente toda a vida com profundidade.

O seu olhar onírico sobre o mundo leva-a a criar cenas com personagens que existem noutras dimensões. A sua obra está viva; as suas bonecas carregam energia ancestral e comunicam com ela desde tempos imemoriais.

Toda a sua obra está carregada de mensagens esotéricas autorreferenciais, explorando a materialidade e a imaterialidade e, por sua vez, a materialização do imaterial, personificando aquelas energias que percebe e que comunicam com ela.

Medium.

A sua arte é para ela o mais sagrado e percebe-se indivisível dela, porque sem o seu expressar não seria ninguém.`,
}

export function statementParagraphs(statement: string): string[] {
  return statement.split('\n\n').map((paragraph) => paragraph.trim()).filter(Boolean)
}
