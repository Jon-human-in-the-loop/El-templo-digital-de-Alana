import type { Artwork, ArtworkCategorySlug } from '@/types/content'

/**
 * ─────────────────────────────────────────────────────────────────────────────
 * CATÁLOGO DE OBRA — editable
 * ─────────────────────────────────────────────────────────────────────────────
 * Cada entrada es una ficha de obra. Los campos `year`, `dimensions`,
 * `technique`, `description` y `notes` se pueden dejar vacíos: la ficha sólo
 * muestra los datos que existen, así que la galería se puede publicar y
 * completar después.
 *
 * Cómo cargar una obra:
 *   1. `title`     → nombre de la obra.
 *   2. `wallImage` → foto de la obra en pared (imagen principal de la ficha).
 *   3. `detailImages` → fotos de detalle, en el orden en que deben mostrarse.
 *   4. `year` / `dimensions` → texto libre, p. ej. '2024' y '70 × 100 cm'.
 *   5. `technique` / `description` → un texto por idioma (es / en / pt).
 *   6. `notes` → acotaciones sueltas, también por idioma.
 *
 * Las medidas ya cargadas provienen del nombre de archivo de la foto.
 * ─────────────────────────────────────────────────────────────────────────────
 */

const EMPTY = { es: '', en: '', pt: '' }

export const ARTWORKS: Artwork[] = [
  /* ── Galería · Obras originales ─────────────────────────────────────────── */
  {
    slug: 'puedo-alzar-mi-voz-alto',
    title: 'Puedo alzar mi voz alto',
    category: 'obras-originales',
    wallImage: {
      src: '/images/portfolio/obras de la galeria/Puedo alzar mi voz alto/01-Puedo-alzar-mi-voz-alto.webp',
      alt: 'Puedo alzar mi voz alto',
    },
    detailImages: [
      {
        src: '/images/portfolio/obras de la galeria/Puedo alzar mi voz alto/02-Puedo-alzar-mi-voz-alto.webp',
        alt: 'Puedo alzar mi voz alto — detalle',
      },
      {
        src: '/images/portfolio/obras de la galeria/Puedo alzar mi voz alto/03-Puedo-alzar-mi-voz-alto.webp',
        alt: 'Puedo alzar mi voz alto — detalle',
      },
      {
        src: '/images/portfolio/obras de la galeria/Puedo alzar mi voz alto/04-Puedo-alzar-mi-voz-alto.webp',
        alt: 'Puedo alzar mi voz alto — detalle',
      },
      {
        src: '/images/portfolio/obras de la galeria/Puedo alzar mi voz alto/05-Puedo-alzar-mi-voz-alto.webp',
        alt: 'Puedo alzar mi voz alto — detalle',
      },
      {
        src: '/images/portfolio/obras de la galeria/Puedo alzar mi voz alto/06-Puedo-alzar-mi-voz-alto.webp',
        alt: 'Puedo alzar mi voz alto — detalle',
      },
      {
        src: '/images/portfolio/obras de la galeria/Puedo alzar mi voz alto/07-Puedo-alzar-mi-voz-alto.webp',
        alt: 'Puedo alzar mi voz alto — detalle',
      },
    ],
    year: '2024',
    dimensions: '120 × 120 cm',
    technique: {
      es: 'Acrílico sobre bastidor entelado',
      en: 'Acrylic on stretched canvas',
      pt: 'Acrílico sobre tela em bastidor',
    },
    description: {
      es: `Este cuadro lo pinté simplemente, fluí, deje que ella se manifieste ante mi y luego lo supe, era mi versión más rígida, pero también era mi versión mejor plantada en su poder. En ella había una paradoja bellísima. Dentro de ella estaba contenido todo mi potencial para hacer tantas cosas.
Siempre me dijeron que soy un montón, siempre me dijeron que llamó mucho la atención, que hablo muy alto, que me calle la boca, que me ría más bajo, que me vista distinto, que sea más discreta.
Este cuadro lo pinté cuando exploté, estallé, me cansé.
Hablé con mi cuadro y le pregunté qué mensaje quería dar(me) y estas son sus palabras:

“A lo largo de los años, has pasado por tanto, pero la verdad de tu corazón es no sólo amorosa, sino que respetable. Aprendiste a amoldarte, pero ya no más, ya no más.
Dios sostiene tus susurros y los amplifica. Podés ser de la manera que quieras ser, porque esa es la única cosa que Él quiere para vos.
Si supieras lo orgulloso que está, si supieras lo bien que lo estás haciendo, estarías más relajada y absorta, de hecho, por el poder del cual sos parte.
Todo camino tiene piedritas y tus pies se acostumbraron demasiado al disconfort. Si esto es así, ¿por qué no eres capaz de alentar a otros a atravesarlo?
Me refiero a que si alguien siente disconfort a tu lado, tiene la posibilidad de atravesarlo. Porque si vos sos capaz, otros también. Todos somos parte de lo mismo. ¿Por qué eres tan amable? Ocuparte demasiado en suavizarte, poniendo plumas en los pies de los demás, solamente te hará que las yemas de tus dedos y las plantas de tus pies exuden sangre que no merece ser derramada.
Suaviza tus propias pisadas. Tu energía no es para todos. Ocupa tu energía en conocer tu verdad y en entregarla al mundo. Ocupa tu vida al servicio del Creador, siendo tu yo más poderoso todos los días.
Aquellos que no están preparados para tu grandeza se irán. No te apenes por ellos. Solo los merecedores pueden quedarse.”`,
      en: `I painted this one simply, I flowed, I let her show herself to me and then I knew: she was my most rigid version, but she was also my version best planted in her power. There was a beautiful paradox in her. Inside her was held all my potential to do so many things.
They always told me I am too much, they always told me I draw too much attention, that I speak too loudly, that I should keep my mouth shut, laugh more quietly, dress differently, be more discreet.
I painted this one when I blew up, when I burst, when I had had enough.
I spoke with my painting and asked it what message it wanted to give (me), and these are its words:

“Over the years you have been through so much, but the truth of your heart is not only loving, it is worthy of respect. You learned to mould yourself, but no more, no more.
God holds your whispers and amplifies them. You can be any way you want to be, because that is the only thing He wants for you.
If you knew how proud He is, if you knew how well you are doing it, you would be more at ease, and absorbed, in fact, by the power you are part of.
Every road has its stones and your feet grew far too used to discomfort. If that is so, why are you not able to encourage others to walk through it?
What I mean is that if someone feels discomfort beside you, they have the chance to walk through it. Because if you are able to, so are others. We are all part of the same thing. Why are you so kind? Busying yourself too much with softening yourself, laying feathers under other people's feet, will only make your fingertips and the soles of your feet ooze blood that does not deserve to be spilled.
Soften your own steps. Your energy is not for everyone. Spend your energy on knowing your truth and giving it to the world. Spend your life in the service of the Creator, being your most powerful self every day.
Those who are not ready for your greatness will leave. Do not grieve for them. Only the deserving can stay.”`,
      pt: `Este quadro pintei-o simplesmente, fluí, deixei que ela se manifestasse diante de mim e depois soube-o: era a minha versão mais rígida, mas também era a minha versão melhor plantada no seu poder. Nela havia um paradoxo belíssimo. Dentro dela estava contido todo o meu potencial para fazer tantas coisas.
Sempre me disseram que sou de mais, sempre me disseram que chamo muito a atenção, que falo muito alto, que me calasse, que me risse mais baixo, que me vestisse de outra maneira, que fosse mais discreta.
Este quadro pintei-o quando explodi, rebentei, cansei-me.
Falei com o meu quadro e perguntei-lhe que mensagem queria dar(-me), e estas são as suas palavras:

«Ao longo dos anos passaste por tanto, mas a verdade do teu coração não é só amorosa, é respeitável. Aprendeste a moldar-te, mas nunca mais, nunca mais.
Deus sustém os teus sussurros e amplifica-os. Podes ser da maneira que quiseres ser, porque essa é a única coisa que Ele quer para ti.
Se soubesses o orgulho que Ele tem, se soubesses como o estás a fazer bem, estarias mais descansada e absorta, de facto, pelo poder de que fazes parte.
Todo o caminho tem pedrinhas e os teus pés habituaram-se demasiado ao desconforto. Se assim é, porque não és capaz de encorajar outros a atravessá-lo?
Quero dizer que, se alguém sente desconforto ao teu lado, tem a possibilidade de o atravessar. Porque se tu és capaz, outros também são. Todos somos parte do mesmo. Porque és tão amável? Ocupares-te demasiado em suavizar-te, pondo plumas nos pés dos outros, só fará com que as pontas dos teus dedos e as plantas dos teus pés exsudem sangue que não merece ser derramado.
Suaviza as tuas próprias passadas. A tua energia não é para todos. Ocupa a tua energia em conhecer a tua verdade e em entregá-la ao mundo. Ocupa a tua vida ao serviço do Criador, sendo o teu eu mais poderoso todos os dias.
Aqueles que não estão preparados para a tua grandeza partirão. Não te apoquentes por eles. Só os merecedores podem ficar.»`,
    },
    notes: { es: 'Porto, Portugal', en: 'Porto, Portugal', pt: 'Porto, Portugal' },
  },
  {
    slug: 'el-destino-inexorable',
    title: 'El destino inexorable',
    category: 'obras-originales',
    wallImage: {
      src: '/images/portfolio/obras de la galeria/El destino inexorable/1_Cuadro El destino inexorable.webp',
      alt: 'El destino inexorable',
    },
    detailImages: [
      {
        src: '/images/portfolio/obras de la galeria/El destino inexorable/2_El destino inexorable.webp',
        alt: 'El destino inexorable — detalle',
      },
      {
        src: '/images/portfolio/obras de la galeria/El destino inexorable/3_El destino inexorable.webp',
        alt: 'El destino inexorable — detalle',
      },
      {
        src: '/images/portfolio/obras de la galeria/El destino inexorable/4_El destino inexorable.webp',
        alt: 'El destino inexorable — detalle',
      },
      {
        src: '/images/portfolio/obras de la galeria/El destino inexorable/5_El destino inexorable.webp',
        alt: 'El destino inexorable — detalle',
      },
      {
        src: '/images/portfolio/obras de la galeria/El destino inexorable/6_El destino inexorable.webp',
        alt: 'El destino inexorable — detalle',
      },
      {
        src: '/images/portfolio/obras de la galeria/El destino inexorable/7_El destino inexorable.webp',
        alt: 'El destino inexorable — detalle',
      },
    ],
    year: '2026',
    dimensions: '50 × 100 cm',
    technique: {
      es: 'Acrílico sobre bastidor entelado',
      en: 'Acrylic on stretched canvas',
      pt: 'Acrílico sobre tela em bastidor',
    },
    description: {
      es: `Como la mayoría de mis obras son autoreferenciales, me siento muy reflejada en esta obra, donde vuelco toda mi certeza en que lo único que me va a durar para toda la vida es mi #propósito artístico. Mi arte, mi creatividad y mi expresión son lo único que jamás va a dejar de ser la razón de mi existir. Así que, definitivamente me casé con mi propósito y estoy comprometida con cumplirle a Dios.

Esta imagen vino un día que estaba sola en el estudio, me senté a conectar con mi ángel de la guarda y los guías empezaron a susurrarme.
Me puse a escribir y sentí esta imagen. Sentí como estaba siendo coronada con mi destino.
La corona es pesada. Es el peso de lo que no se puede cambiar. Pero a su vez es brillante, hermosa y abundante.

En el cuadro, la mujer llora en su coronación... El dolor de lo inevitable, la aceptación y la entrega. No es que no quiera, sino que sabe que el deber traerá cosas buenas y cosas malas, y que bajo ningun criterio traicionará dicha misión, cueste lo que cueste.
Aún así, hablé con ella y estás fueron sus palabras para mi:

“No me puedo mover.

No todo es lo que parece ser. No todo es dolor.
Jesús murió en la cruz para llevarse el dolor. Jesús murió y con él murió el dolor de esta tierra.
El sufrimiento es simplemente un recordatorio de que estamos vivos, y estar vivos es tener la capacidad para elegir.
Si elegiste mal, te matás a ti mismo. Te clavás una estaca una y otra vez. Pero no hace falta elegir mal para siempre o infinitamente. Es cuestión de meditar, cambiar y elegir bien.
Elegir ver bien. Elegir otra forma de ver. Ver mejor. Ver realmente.

Somos seres humanos y, al elegir, crecemos. Crecemos sea como sea. Crecemos en todas las situaciones. Crecemos siempre, desde adentro hacia afuera.
Las elecciones de los demás le afectan a los demás, y las particulares solo a nosotros. Este es el único fin de la separación que pretendemos en esta vida. Ya que no estamos separados, pero estamos bendecidos con este comodín: la separación pretendida.

Lo que hacés, te lo hacés a vos mismo. Es esto una gran verdad. Y las elecciones de la visión sobre las cosas también.
Sufrir es elegir.
Llorar es elegir.
Aguantar es elegir.
Elige mejor. Elige expansión. Elige lujo. Elige felicidad. Elige redención. Elige la luz.
Elígelo a Dios.
Tú sabrás hacerlo cuando sea el momento.

Saber elegir es el privilegio más grande, pero también el momento más cercano a Dios, que te hizo libre y pura y te entregó a la vida con paciencia para que la disfrutes.
¿Qué esperás?
El tiempo se acaba. Todos los días estás muriendo. Es tiempo de dejar de sobrevivir para empezar a vivir.

No vas a volver a ser la misma. No desperdicies la vida en la queja y la penumbra.
La vida es para los valientes. Te amo. Sos fuerte, mantente fuertemente en la dicha instead.”`,
      en: `As most of my works are self-referential, I feel very much reflected in this one, where I pour in all my certainty that the only thing that will last me a whole lifetime is my artistic #purpose. My art, my creativity and my expression are the only thing that will never stop being the reason for my existing. So I have definitely married my purpose, and I am committed to keeping my promise to God.

This image came one day when I was alone in the studio; I sat down to connect with my guardian angel and the guides began to whisper to me.
I started to write and I felt this image. I felt how I was being crowned with my destiny.
The crown is heavy. It is the weight of what cannot be changed. And yet it is also brilliant, beautiful and abundant.

In the painting, the woman weeps at her coronation... The pain of the inevitable, the acceptance and the surrender. It is not that she does not want to, but that she knows duty will bring good things and bad things, and that under no circumstance will she betray that mission, whatever it costs.
Even so, I spoke with her, and these were her words to me:

“I cannot move.

Not everything is what it seems to be. Not everything is pain.
Jesus died on the cross to take the pain away. Jesus died and with him died the pain of this earth.
Suffering is simply a reminder that we are alive, and being alive is having the capacity to choose.
If you chose badly, you kill yourself. You drive a stake into yourself again and again. But there is no need to choose badly for ever, or infinitely. It is a matter of meditating, changing and choosing well.
Choosing to see well. Choosing another way of seeing. Seeing better. Seeing truly.

We are human beings and, in choosing, we grow. We grow no matter what. We grow in every situation. We always grow, from the inside outwards.
Other people's choices affect other people, and our own affect only us. This is the only purpose of the separation we pretend to in this life. For we are not separate, but we are blessed with this wild card: the pretended separation.

What you do, you do to yourself. This is a great truth. And so are the choices of how we see things.
To suffer is to choose.
To weep is to choose.
To endure is to choose.
Choose better. Choose expansion. Choose luxury. Choose happiness. Choose redemption. Choose the light.
Choose God.
You will know how to do it when the moment comes.

Knowing how to choose is the greatest privilege, but also the moment closest to God, who made you free and pure and handed you over to life with patience so that you would enjoy it.
What are you waiting for?
Time is running out. Every day you are dying. It is time to stop surviving and start living.

You will never be the same again. Do not waste your life on complaint and gloom.
Life is for the brave. I love you. You are strong, hold yourself strongly in joy instead.”`,
      pt: `Como a maioria das minhas obras são autorreferenciais, sinto-me muito refletida nesta obra, onde deposito toda a minha certeza de que a única coisa que me vai durar para toda a vida é o meu #propósito artístico. A minha arte, a minha criatividade e a minha expressão são a única coisa que jamais deixará de ser a razão do meu existir. Por isso casei-me definitivamente com o meu propósito e estou comprometida a cumprir com Deus.

Esta imagem veio num dia em que estava sozinha no estúdio, sentei-me a ligar-me ao meu anjo da guarda e os guias começaram a sussurrar-me.
Pus-me a escrever e senti esta imagem. Senti como estava a ser coroada com o meu destino.
A coroa é pesada. É o peso do que não se pode mudar. Mas, ao mesmo tempo, é brilhante, formosa e abundante.

No quadro, a mulher chora na sua coroação... A dor do inevitável, a aceitação e a entrega. Não é que não queira, mas sabe que o dever trará coisas boas e coisas más, e que sob nenhum critério trairá essa missão, custe o que custar.
Ainda assim, falei com ela e estas foram as suas palavras para mim:

«Não me consigo mexer.

Nem tudo é o que parece ser. Nem tudo é dor.
Jesus morreu na cruz para levar a dor. Jesus morreu e com ele morreu a dor desta terra.
O sofrimento é simplesmente um lembrete de que estamos vivos, e estar vivos é ter a capacidade de escolher.
Se escolheste mal, matas-te a ti mesmo. Cravas uma estaca uma e outra vez. Mas não é preciso escolher mal para sempre ou infinitamente. É questão de meditar, mudar e escolher bem.
Escolher ver bem. Escolher outra forma de ver. Ver melhor. Ver realmente.

Somos seres humanos e, ao escolher, crescemos. Crescemos seja como for. Crescemos em todas as situações. Crescemos sempre, de dentro para fora.
As escolhas dos outros afetam os outros, e as nossas só a nós. Este é o único fim da separação que pretendemos nesta vida. Já que não estamos separados, mas estamos abençoados com este trunfo: a separação pretendida.

O que fazes, fá-lo a ti mesmo. É esta uma grande verdade. E as escolhas da visão sobre as coisas também.
Sofrer é escolher.
Chorar é escolher.
Aguentar é escolher.
Escolhe melhor. Escolhe expansão. Escolhe luxo. Escolhe felicidade. Escolhe redenção. Escolhe a luz.
Escolhe-O a Deus.
Tu saberás fazê-lo quando for o momento.

Saber escolher é o privilégio maior, mas também o momento mais próximo de Deus, que te fez livre e pura e te entregou à vida com paciência para que a desfrutes.
De que estás à espera?
O tempo acaba-se. Todos os dias estás a morrer. É tempo de deixar de sobreviver para começar a viver.

Não voltarás a ser a mesma. Não desperdices a vida na queixa e na penumbra.
A vida é para os valentes. Amo-te. És forte, mantém-te fortemente na dita instead.»`,
    },
    notes: { es: 'Porto, Portugal', en: 'Porto, Portugal', pt: 'Porto, Portugal' },
  },

  /* ── Portfolio · Figurativo ─────────────────────────────────────────────── */
  {
    slug: 'la-luz-y-la-sombra',
    title: 'La luz y la sombra equilibran la mente y el espíritu',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100-vertical.webp',
      alt: 'La luz y la sombra equilibran la mente y el espíritu',
    },
    detailImages: [
      {
        src: '/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100.webp',
        alt: 'La luz y la sombra equilibran la mente y el espíritu — detalle',
      },
    ],
    year: '',
    dimensions: '70 × 100 cm',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'el-llanto-del-rey-expectante',
    title: 'El llanto del rey expectante',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/el-llanto-del-rey-expectante-2-100x80.webp',
      alt: 'El llanto del rey expectante',
    },
    detailImages: [
      {
        src: '/images/portfolio/fluid-art/el-llanto-rey.webp',
        alt: 'El llanto del rey expectante — detalle',
      },
    ],
    year: '',
    dimensions: '70 × 30 cm',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'el-registro-del-poder-heredado',
    title: 'El registro del poder heredado',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/el-registro-del-poder-heredado-1.webp',
      alt: 'El registro del poder heredado',
    },
    detailImages: [
      {
        src: '/images/portfolio/figurativo/el-registro-del-poder-heredado-2.webp',
        alt: 'El registro del poder heredado — detalle',
      },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'la-ceguera-que-viene-por-encandilarse',
    title: 'La ceguera que viene por encandilarse',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/la-ceguera-que-viene-por-encandilarse-50x30-1.webp',
      alt: 'La ceguera que viene por encandilarse',
    },
    detailImages: [
      {
        src: '/images/portfolio/figurativo/la-ceguera-que-viene-por-encandilarse-2.webp',
        alt: 'La ceguera que viene por encandilarse — detalle',
      },
    ],
    year: '',
    dimensions: '50 × 30 cm',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'unibesos',
    title: 'Unibesos',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/unibesos-1.webp',
      alt: 'Unibesos',
    },
    detailImages: [
      { src: '/images/portfolio/figurativo/unibesos-2.webp', alt: 'Unibesos — detalle' },
      { src: '/images/portfolio/figurativo/unibesos-3.webp', alt: 'Unibesos — detalle' },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },

  /* ── Fluid Art ──────────────────────────────────────────────────────────── */
  {
    slug: 'premonicion',
    title: 'Premonición',
    category: 'fluid-art',
    wallImage: { src: '/images/portfolio/fluid-art/premonicion.webp', alt: 'Premonición' },
    detailImages: [],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 're-suscito',
    title: 'RE-suscito',
    category: 'fluid-art',
    wallImage: { src: '/images/portfolio/fluid-art/re-suscito.webp', alt: 'RE-suscito' },
    detailImages: [],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'como-es-arriba-es-abajo',
    title: 'Como es arriba es abajo',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/como-es-arriba.webp',
      alt: 'Como es arriba es abajo',
    },
    detailImages: [
      {
        src: '/images/portfolio/acuarela/como-es-arriba.webp',
        alt: 'Como es arriba es abajo — detalle',
      },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'se-ondula-el-eter',
    title: 'Se ondula el éter que ata las superficies',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/se-ondula-el-eter.webp',
      alt: 'Se ondula el éter que ata las superficies',
    },
    detailImages: [],
    year: '2022',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'las-aguas-de-la-resurreccion',
    title: 'Las aguas de la resurrección',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/las-aguas-resurreccion.webp',
      alt: 'Las aguas de la resurrección',
    },
    detailImages: [
      { src: '/images/portfolio/fluid-art/las-aguas-2.webp', alt: 'Las aguas de la resurrección — detalle' },
      { src: '/images/portfolio/fluid-art/las-aguas-3.webp', alt: 'Las aguas de la resurrección — detalle' },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'las-olas-que-se-espejaban',
    title: 'Las olas que se esperaban en las nubes',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/las-olas.webp',
      alt: 'Las olas que se esperaban en las nubes',
    },
    detailImages: [],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'la-raiz',
    title: 'La raíz',
    category: 'fluid-art',
    wallImage: { src: '/images/portfolio/fluid-art/la-raiz-1.webp', alt: 'La raíz' },
    detailImages: [
      { src: '/images/portfolio/fluid-art/la-raiz-2.webp', alt: 'La raíz — detalle' },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'en-el-oceano-divise-al-inframundo',
    title: 'En el océano divisé al inframundo',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/en-el-oceano-1.webp',
      alt: 'En el océano divisé al inframundo',
    },
    detailImages: [
      {
        src: '/images/portfolio/fluid-art/en-el-oceano-2.webp',
        alt: 'En el océano divisé al inframundo — detalle',
      },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'it-might-be-a-mess',
    title: 'It might be a mess',
    category: 'figurativo',
    wallImage: { src: '/images/portfolio/fluid-art/mess-mine-1.webp', alt: 'It might be a mess' },
    detailImages: [
      { src: '/images/portfolio/fluid-art/mess-mine-2.webp', alt: 'It might be a mess — detalle' },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'ya-no-se-oye-el-ultimo-suspiro',
    title: 'Ya no se oye el último suspiro',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/ya-no-se-oye-1.webp',
      alt: 'Ya no se oye el último suspiro',
    },
    detailImages: [
      { src: '/images/portfolio/fluid-art/ya-no-se-oye-2.webp', alt: 'Ya no se oye el último suspiro — detalle' },
      { src: '/images/portfolio/fluid-art/ya-no-se-oye-3.webp', alt: 'Ya no se oye el último suspiro — detalle' },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
  {
    slug: 'un-petalo-un-mensaje-y-una-chispa',
    title: 'Un pétalo, un mensaje y una chispa',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/un-petalo-1.webp',
      alt: 'Un pétalo, un mensaje y una chispa — panel I',
    },
    detailImages: [
      {
        src: '/images/portfolio/fluid-art/un-petalo-2.webp',
        alt: 'Un pétalo, un mensaje y una chispa — panel II',
      },
      {
        src: '/images/portfolio/fluid-art/un-petalo-3.webp',
        alt: 'Un pétalo, un mensaje y una chispa — panel III',
      },
    ],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },
]

export function artworksByCategory(category: ArtworkCategorySlug): Artwork[] {
  return ARTWORKS.filter((artwork) => artwork.category === category)
}

export function artworkBySlug(slug: string): Artwork | undefined {
  return ARTWORKS.find((artwork) => artwork.slug === slug)
}
