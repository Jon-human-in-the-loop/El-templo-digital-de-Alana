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
      src: '/images/galeria/obras originales/Puedo alzar mi voz alto/01-Puedo-alzar-mi-voz-alto.webp',
      alt: 'Puedo alzar mi voz alto',
    },
    detailImages: [
      {
        src: '/images/galeria/obras originales/Puedo alzar mi voz alto/02-Puedo-alzar-mi-voz-alto.webp',
        alt: 'Puedo alzar mi voz alto — detalle',
      },
      {
        src: '/images/galeria/obras originales/Puedo alzar mi voz alto/03-Puedo-alzar-mi-voz-alto.webp',
        alt: 'Puedo alzar mi voz alto — detalle',
      },
      {
        src: '/images/galeria/obras originales/Puedo alzar mi voz alto/04-Puedo-alzar-mi-voz-alto.webp',
        alt: 'Puedo alzar mi voz alto — detalle',
      },
      {
        src: '/images/galeria/obras originales/Puedo alzar mi voz alto/05-Puedo-alzar-mi-voz-alto.webp',
        alt: 'Puedo alzar mi voz alto — detalle',
      },
      {
        src: '/images/galeria/obras originales/Puedo alzar mi voz alto/06-Puedo-alzar-mi-voz-alto.webp',
        alt: 'Puedo alzar mi voz alto — detalle',
      },
      {
        src: '/images/galeria/obras originales/Puedo alzar mi voz alto/07-Puedo-alzar-mi-voz-alto.webp',
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
      src: '/images/galeria/obras originales/El destino inexorable/1_Cuadro El destino inexorable.webp',
      alt: 'El destino inexorable',
    },
    detailImages: [
      {
        src: '/images/galeria/obras originales/El destino inexorable/2_El destino inexorable.webp',
        alt: 'El destino inexorable — detalle',
      },
      {
        src: '/images/galeria/obras originales/El destino inexorable/3_El destino inexorable.webp',
        alt: 'El destino inexorable — detalle',
      },
      {
        src: '/images/galeria/obras originales/El destino inexorable/4_El destino inexorable.webp',
        alt: 'El destino inexorable — detalle',
      },
      {
        src: '/images/galeria/obras originales/El destino inexorable/5_El destino inexorable.webp',
        alt: 'El destino inexorable — detalle',
      },
      {
        src: '/images/galeria/obras originales/El destino inexorable/6_El destino inexorable.webp',
        alt: 'El destino inexorable — detalle',
      },
      {
        src: '/images/galeria/obras originales/El destino inexorable/7_El destino inexorable.webp',
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

  {
    // Anunciada antes de estar fotografiada: sin `wallImage`, la ficha se abre
    // mostrando sólo «Próximamente». Al cargar sus fotos y su texto queda como
    // cualquier otra.
    slug: 'la-somba',
    title: 'La sombra',
    category: 'obras-originales',
    detailImages: [],
    year: '',
    dimensions: '',
    technique: { ...EMPTY },
    description: { ...EMPTY },
    notes: { ...EMPTY },
  },

  /* ── Galería · Acuarelas originales ─────────────────────────────────────── */
  /*
   * Llegaron con su ficha antes que sus fotos: hasta que se carguen las
   * imágenes, la ficha se abre con el aviso de «Próximamente» en el lugar del
   * cuadro y el texto debajo.
   */
  {
    slug: 'al-fin-y-al-cabo-esa-es-la-chispa',
    title: 'Al fin y al cabo, esa es la chispa',
    category: 'acuarelas-originales',
    wallImage: {
      src: '/images/galeria/acuarelas originales/01 Al fin y al cabo, esa es la chispa/IMG_9168.webp',
      alt: 'Al fin y al cabo, esa es la chispa',
    },
    detailImages: [
      {
        src: '/images/galeria/acuarelas originales/01 Al fin y al cabo, esa es la chispa/IMG_9171.webp',
        alt: 'Al fin y al cabo, esa es la chispa — detalle',
      },
      {
        src: '/images/galeria/acuarelas originales/01 Al fin y al cabo, esa es la chispa/IMG_9172.webp',
        alt: 'Al fin y al cabo, esa es la chispa — detalle',
      },
    ],
    year: '',
    dimensions: '18 × 23,8 cm',
    technique: {
      es: 'Acuarela y lápiz',
      en: 'Watercolour and pencil',
      pt: 'Aguarela e lápis',
    },
    description: {
      es: `Ella en realidad siempre fue poderosa. Su interior albergaba semejante fulgor, su fuego interno era su superpoder. La verdadera fuerza estaba tan solo detrás de elegir ser ella misma.
Al fin y al cabo, esa es la chispa.`,
      en: `She was in fact always powerful. Her insides held such a glow; her inner fire was her superpower. True strength lay only behind choosing to be herself.
After all, that is the spark.`,
      pt: `Ela na verdade sempre foi poderosa. O seu interior albergava tamanho fulgor, o seu fogo interno era o seu superpoder. A verdadeira força estava apenas atrás de escolher ser ela mesma.
No fim de contas, essa é a faísca.`,
    },
    notes: {
      es: 'Papel texturado 300 gr',
      en: 'Textured paper, 300 gsm',
      pt: 'Papel texturado 300 gr',
    },
  },
  {
    slug: 'el-primer-verdadero-amor',
    title: 'El primer verdadero amor',
    category: 'acuarelas-originales',
    wallImage: {
      src: '/images/galeria/acuarelas originales/02 El primer verdadero amor/IMG_9139.webp',
      alt: 'El primer verdadero amor',
    },
    detailImages: [
      {
        src: '/images/galeria/acuarelas originales/02 El primer verdadero amor/IMG_9140.webp',
        alt: 'El primer verdadero amor — detalle',
      },
      {
        src: '/images/galeria/acuarelas originales/02 El primer verdadero amor/IMG_9141.webp',
        alt: 'El primer verdadero amor — detalle',
      },
    ],
    year: '',
    dimensions: '14,5 × 21 cm (A5)',
    technique: {
      es: 'Acuarela y lápiz',
      en: 'Watercolour and pencil',
      pt: 'Aguarela e lápis',
    },
    description: {
      es: `El primer verdadero amor que enciende la chispa del alma más nostálgica.
El primer verdadero amor que ablanda hasta el temperamento más terco. El primer verdadero amor que le da sentido a todo otra vez.`,
      en: `The first true love that lights the spark of the most wistful soul.
The first true love that softens even the most stubborn temper. The first true love that gives everything meaning again.`,
      pt: `O primeiro amor verdadeiro que acende a faísca da alma mais nostálgica.
O primeiro amor verdadeiro que abranda até o temperamento mais teimoso. O primeiro amor verdadeiro que dá sentido a tudo outra vez.`,
    },
    notes: {
      es: 'Papel texturado 300 gr',
      en: 'Textured paper, 300 gsm',
      pt: 'Papel texturado 300 gr',
    },
  },
  {
    slug: 'la-ilusion-de-un-futuro-prometedor',
    title: 'La ilusion de un futuro prometedor',
    category: 'acuarelas-originales',
    wallImage: {
      src: '/images/galeria/acuarelas originales/03 La ilusion de un futuro prometedor/IMG_9144.webp',
      alt: 'La ilusion de un futuro prometedor',
    },
    detailImages: [
      {
        src: '/images/galeria/acuarelas originales/03 La ilusion de un futuro prometedor/IMG_9145.webp',
        alt: 'La ilusion de un futuro prometedor — detalle',
      },
      {
        src: '/images/galeria/acuarelas originales/03 La ilusion de un futuro prometedor/IMG_9151.webp',
        alt: 'La ilusion de un futuro prometedor — detalle',
      },
      {
        src: '/images/galeria/acuarelas originales/03 La ilusion de un futuro prometedor/IMG_9152.webp',
        alt: 'La ilusion de un futuro prometedor — detalle',
      },
    ],
    year: '',
    dimensions: '18 × 23,8 cm',
    technique: {
      es: 'Acuarela y lápiz',
      en: 'Watercolour and pencil',
      pt: 'Aguarela e lápis',
    },
    description: {
      es: `Un futuro prometedor.
La ternura que anida en los nuevos comienzos.
La expectativa, el puro deseo de progresar, la fe y la esperanza. La ilusión.`,
      en: `A promising future.
The tenderness that nests in new beginnings.
The expectation, the pure wish to move forward, faith and hope. The longing.`,
      pt: `Um futuro promissor.
A ternura que se aninha nos novos começos.
A expectativa, o puro desejo de progredir, a fé e a esperança. A ilusão.`,
    },
    notes: {
      es: 'Papel texturado 300 gr',
      en: 'Textured paper, 300 gsm',
      pt: 'Papel texturado 300 gr',
    },
  },
  {
    slug: 'mi-templo',
    title: 'Mi templo',
    category: 'acuarelas-originales',
    wallImage: {
      src: '/images/galeria/acuarelas originales/04 Mi templo/IMG_9135.webp',
      alt: 'Mi templo',
    },
    detailImages: [
      {
        src: '/images/galeria/acuarelas originales/04 Mi templo/IMG_9136.webp',
        alt: 'Mi templo — detalle',
      },
      {
        src: '/images/galeria/acuarelas originales/04 Mi templo/IMG_9137.webp',
        alt: 'Mi templo — detalle',
      },
    ],
    year: '',
    dimensions: '14,5 × 21 cm (A5)',
    technique: {
      es: 'Acuarela y lápiz',
      en: 'Watercolour and pencil',
      pt: 'Aguarela e lápis',
    },
    description: {
      es: `El Templo
La certeza de haber dejado atrás todas las realidades donde fuimos oprimidas y ya no nos dejaban florecer. Elegirse es entender que en vos, en tu propio cuerpo, está el cobijo que necesitamos sin importar qué espacio habitamos.
El templo.
La casa, el cuerpo es el árbol mejor plantado en la tierra.
Solo mi presencia es suficientemente válida.
Todo el resto es un paisaje difuso e insignificante. Me sostengo con alegría, seguridad y amor.`,
      en: `The Temple
The certainty of having left behind every reality where we were oppressed and were no longer allowed to bloom. To choose yourself is to understand that in you, in your own body, is the shelter we need no matter what space we inhabit.
The temple.
The home, the body is the tree best planted in the earth.
My presence alone is valid enough.
All the rest is a blurred, insignificant landscape. I hold myself up with joy, safety and love.`,
      pt: `O Templo
A certeza de ter deixado para trás todas as realidades onde fomos oprimidas e já não nos deixavam florescer. Escolher-se é entender que em ti, no teu próprio corpo, está o abrigo de que precisamos, não importa que espaço habitemos.
O templo.
A casa, o corpo é a árvore melhor plantada na terra.
Só a minha presença é suficientemente válida.
Todo o resto é uma paisagem difusa e insignificante. Sustento-me com alegria, segurança e amor.`,
    },
    notes: {
      es: 'Papel texturado 300 gr',
      en: 'Textured paper, 300 gsm',
      pt: 'Papel texturado 300 gr',
    },
  },
  {
    slug: 'the-one-who-wasnt-meant-to-be',
    title: 'The one who wasn´t meant to be',
    category: 'acuarelas-originales',
    wallImage: {
      src: '/images/galeria/acuarelas originales/05 The one who wasnt meant to be/IMG_9162.webp',
      alt: 'The one who wasn´t meant to be',
    },
    detailImages: [
      {
        src: '/images/galeria/acuarelas originales/05 The one who wasnt meant to be/IMG_9164.webp',
        alt: 'The one who wasn´t meant to be — detalle',
      },
      {
        src: '/images/galeria/acuarelas originales/05 The one who wasnt meant to be/IMG_9165.webp',
        alt: 'The one who wasn´t meant to be — detalle',
      },
    ],
    year: '',
    dimensions: '18 × 23,8 cm',
    technique: {
      es: 'Acuarela y lápiz',
      en: 'Watercolour and pencil',
      pt: 'Aguarela e lápis',
    },
    description: {
      es: `El Alma más pura.
Su misión fue no venir.`,
      en: `The purest Soul.
Its mission was not to come.`,
      pt: `A Alma mais pura.
A sua missão foi não vir.`,
    },
    notes: {
      es: 'Papel texturado 300 gr',
      en: 'Textured paper, 300 gsm',
      pt: 'Papel texturado 300 gr',
    },
  },
  {
    slug: 'vemos-a-dios-al-permanecer',
    title: 'Vemos a Dios al permanecer',
    category: 'acuarelas-originales',
    wallImage: {
      src: '/images/galeria/acuarelas originales/06 Vemos a Dios al permanecer/IMG_9154.webp',
      alt: 'Vemos a Dios al permanecer',
    },
    detailImages: [
      {
        src: '/images/galeria/acuarelas originales/06 Vemos a Dios al permanecer/IMG_9155.webp',
        alt: 'Vemos a Dios al permanecer — detalle',
      },
      {
        src: '/images/galeria/acuarelas originales/06 Vemos a Dios al permanecer/IMG_9156.webp',
        alt: 'Vemos a Dios al permanecer — detalle',
      },
      {
        src: '/images/galeria/acuarelas originales/06 Vemos a Dios al permanecer/IMG_9159.webp',
        alt: 'Vemos a Dios al permanecer — detalle',
      },
    ],
    year: '',
    dimensions: '18 × 23,8 cm',
    technique: {
      es: 'Acuarela y lápiz',
      en: 'Watercolour and pencil',
      pt: 'Aguarela e lápis',
    },
    description: {
      es: `La quietud de la simpleza.
La verdadera vida reside en el existir.
Solo con existir, respirar, estar… Dios nos bendice.
La simpleza de respirar. La simpleza de permanecer. La magia de permanecer.
Permanecer, un poco más, en cada momento devela la magia detrás de la vida.
Detrás de cada momento que evadimos está Dios. Vemos a Dios al permanecer.`,
      en: `The stillness of simplicity.
True life resides in existing.
Just by existing, breathing, being… God blesses us.
The simplicity of breathing. The simplicity of staying. The magic of staying.
Staying, a little longer, in each moment unveils the magic behind life.
Behind every moment we dodge is God. We see God by staying.`,
      pt: `A quietude da simplicidade.
A verdadeira vida reside no existir.
Só com existir, respirar, estar… Deus abençoa-nos.
A simplicidade de respirar. A simplicidade de permanecer. A magia de permanecer.
Permanecer, um pouco mais, em cada momento revela a magia por detrás da vida.
Por detrás de cada momento que evitamos está Deus. Vemos Deus ao permanecer.`,
    },
    notes: {
      es: 'Papel texturado 300 gr',
      en: 'Textured paper, 300 gsm',
      pt: 'Papel texturado 300 gr',
    },
  },

  /* ── Portfolio · Figurativo ─────────────────────────────────────────────── */
  /*
   * En el orden del machete. El español de cada descripción es el texto de
   * Alana, transcrito literal; en/pt son traducciones.
   */
  {
    slug: 'el-registro-del-poder-heredado',
    title: 'El registro del poder heredado',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/01 El registro del poder heredado/PORTADA-EN-PORTFOLIO.webp',
      alt: 'El registro del poder heredado',
    },
    detailImages: [
      {
        src: '/images/portfolio/figurativo/01 El registro del poder heredado/el-registro-del-poder-heredado-1.webp',
        alt: 'El registro del poder heredado — detalle',
      },
      {
        src: '/images/portfolio/figurativo/01 El registro del poder heredado/el-registro-del-poder-heredado-2.webp',
        alt: 'El registro del poder heredado — detalle',
      },
    ],
    year: '2016',
    dimensions: '120 × 120 cm',
    technique: {
      es: 'Acrílico sobre bastidor entelado',
      en: 'Acrylic on stretched canvas',
      pt: 'Acrílico sobre tela esticada',
    },
    description: {
      es: `Por casi toda mi carrera, este fue el único hombre que pinté. Y por casi toda mi carrera no pude confirmar por qué, pero hoy estoy segura que es mi papá.

De hecho, cuando él vió por primera vez este cuadro, me suplicó que se lo diese a él, y aún está en la sala de espera de su consultorio.

En aquella época no pensaba en nada cuando pintaba, me dejaba ser y fluir. Siento que era más fácil en aquel entonces.

Hoy tengo el poder de ver las traducciones que hice y veo en el cuadro a un hombre encendido. Con el rojo muy presente y todos los colores que le pude poner, está realmente vivo.

Tiene fuerza, pero su expresión es levemente divertida. Se toma la vida con ligereza y respeto. Vino a aprovecharla.`,
      en: `For almost my whole career, this was the only man I painted. And for almost my whole career I could not confirm why, but today I am sure it is my dad.

In fact, when he first saw this painting he begged me to give it to him, and it is still in the waiting room of his practice.

Back then I thought of nothing while I painted, I let myself be and flow. I feel it was easier in those days.

Today I have the power to see the translations I made, and in the painting I see a man alight. With the red very present and every colour I was able to give him, he is truly alive.

He has strength, but his expression is slightly amused. He takes life with lightness and respect. He came to make the most of it.`,
      pt: `Durante quase toda a minha carreira, este foi o único homem que pintei. E durante quase toda a minha carreira não consegui confirmar porquê, mas hoje tenho a certeza de que é o meu pai.

De facto, quando ele viu este quadro pela primeira vez, suplicou-me que lho desse, e ainda está na sala de espera do seu consultório.

Naquela época não pensava em nada quando pintava, deixava-me ser e fluir. Sinto que era mais fácil naquele tempo.

Hoje tenho o poder de ver as traduções que fiz e vejo no quadro um homem aceso. Com o vermelho muito presente e todas as cores que lhe consegui pôr, está realmente vivo.

Tem força, mas a sua expressão é levemente divertida. Leva a vida com leveza e respeito. Veio para a aproveitar.`,
    },
    notes: {
      es: 'Posadas, Misiones, Argentina',
      en: 'Posadas, Misiones, Argentina',
      pt: 'Posadas, Misiones, Argentina',
    },
  },
  {
    slug: 'la-luz-y-la-sombra',
    title: 'La luz y la sombra equilibran la mente y el espíritu',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/02 La luz y la sombra equilibran la mente y el espiritu/PORTADA-EN-PORTFOLIO.webp',
      alt: 'La luz y la sombra equilibran la mente y el espíritu',
    },
    detailImages: [
      {
        src: '/images/portfolio/figurativo/02 La luz y la sombra equilibran la mente y el espiritu/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100-vertical.webp',
        alt: 'La luz y la sombra equilibran la mente y el espíritu — detalle',
      },
    ],
    year: '2016',
    dimensions: '70 × 100 cm',
    technique: {
      es: 'Acrílico sobre bastidor entelado',
      en: 'Acrylic on stretched canvas',
      pt: 'Acrílico sobre tela esticada',
    },
    description: {
      es: `En aquel entonces pintaba de manera muy intuitiva. Estaba encontrando mi estilo, amaba y odiaba pintar flores.

Este cuadro tiene a una mujer que integra todas sus partes con fortaleza, su cabeza florece y equilibra el conjunto.

Está bien despierta y atenta. Es consciente.

Integra su totalidad de manera neutral y balanceada y no sé esfuerza por florecer. Está en su eje. Esa es una consecuencia.`,
      en: `Back then I painted very intuitively. I was finding my style; I loved and hated painting flowers.

This painting holds a woman who integrates all her parts with strength; her head blossoms and balances the whole.

She is wide awake and attentive. She is aware.

She integrates her totality in a neutral, balanced way and does not strain to blossom. She is on her axis. That is a consequence.`,
      pt: `Naquele tempo pintava de maneira muito intuitiva. Estava a encontrar o meu estilo, adorava e odiava pintar flores.

Este quadro tem uma mulher que integra todas as suas partes com fortaleza; a sua cabeça floresce e equilibra o conjunto.

Está bem desperta e atenta. É consciente.

Integra a sua totalidade de maneira neutra e equilibrada e não se esforça por florescer. Está no seu eixo. Isso é uma consequência.`,
    },
    notes: {
      es: 'Posadas, Misiones, Argentina',
      en: 'Posadas, Misiones, Argentina',
      pt: 'Posadas, Misiones, Argentina',
    },
  },
  {
    slug: 'la-ceguera-que-viene-por-encandilarse',
    title: 'La ceguera que viene por encandilarse',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/03 La ceguera que viene por encandilarse/PORTADA-EN-PORTFOLIO.webp',
      alt: 'La ceguera que viene por encandilarse',
    },
    detailImages: [
      {
        src: '/images/portfolio/figurativo/03 La ceguera que viene por encandilarse/la-ceguera-que-viene-por-encandilarse-50x30-1.webp',
        alt: 'La ceguera que viene por encandilarse — detalle',
      },
      {
        src: '/images/portfolio/figurativo/03 La ceguera que viene por encandilarse/la-ceguera-que-viene-por-encandilarse-2.webp',
        alt: 'La ceguera que viene por encandilarse — detalle',
      },
    ],
    year: '2017',
    dimensions: '50 × 30 cm',
    technique: {
      es: 'Acrílico sobre bastidor entelado',
      en: 'Acrylic on stretched canvas',
      pt: 'Acrílico sobre tela esticada',
    },
    description: {
      es: `Este cuadro se lo pinté a una de mis amigas cuando iba a la facultad. Y, si bien nuevamente no pensé en nada en aquel entonces, como todo mi arte más inconsciente, el cuadro lo dice todo porque es la descripción perfecta de la versión de mi amiga a los 23/24 años.

Naive, se dejaba llevar por las apariencias y los encantamientos. Yo ni siquiera era tan consciente de ello, pero mi alma siempre lo supo.

Era(MOS) inmadura(S), quería(MOS) lo que todas las jóvenes querían, pero a ella le ganaba lo que veía y no paraba de decepcionarse, siendo alguien que se guiaba por la cabeza y no por su intuición.

De nublaba por los ojos que no ven y tenía cerrados los ojos de la visión real.`,
      en: `I painted this one for one of my friends when I was at university. And although once again I thought of nothing back then, as with all my most unconscious art, the painting says it all, because it is the perfect description of my friend's version of herself at 23 or 24.

Naive, she let herself be carried away by appearances and by spells. I was not even that aware of it, but my soul always knew.

I (WE) was (WERE) immature, I (WE) wanted what all young women wanted, but what she saw got the better of her and she never stopped being disappointed, being someone guided by her head and not by her intuition.

She was clouded by the eyes that do not see, and the eyes of real vision she kept closed.`,
      pt: `Este quadro pintei-o para uma das minhas amigas quando andava na faculdade. E, embora mais uma vez não tenha pensado em nada naquele tempo, como toda a minha arte mais inconsciente, o quadro diz tudo, porque é a descrição perfeita da versão da minha amiga aos 23/24 anos.

Naive, deixava-se levar pelas aparências e pelos encantamentos. Eu nem sequer tinha assim tanta consciência disso, mas a minha alma sempre soube.

Era(MOS) imatura(S), queria(MOS) o que todas as jovens queriam, mas a ela ganhava-lhe o que via e não parava de se desiludir, sendo alguém que se guiava pela cabeça e não pela intuição.

Toldava-se pelos olhos que não veem e mantinha fechados os olhos da visão real.`,
    },
    notes: {
      es: 'Córdoba Capital, Argentina',
      en: 'Córdoba Capital, Argentina',
      pt: 'Córdoba Capital, Argentina',
    },
  },
  {
    slug: 'unibesos',
    title: 'Unibesos',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/04 Unibesos/PORTADA-EN-PORTFOLIO.webp',
      alt: 'Unibesos',
    },
    detailImages: [
      {
        src: '/images/portfolio/figurativo/04 Unibesos/unibesos-1.webp',
        alt: 'Unibesos — detalle',
      },
      {
        src: '/images/portfolio/figurativo/04 Unibesos/unibesos-2.webp',
        alt: 'Unibesos — detalle',
      },
      {
        src: '/images/portfolio/figurativo/04 Unibesos/unibesos-3.webp',
        alt: 'Unibesos — detalle',
      },
    ],
    year: '2018',
    dimensions: '100 × 70 cm',
    technique: {
      es: 'Acrílico sobre bastidor entelado, con glitter y barniz brillante',
      en: 'Acrylic on stretched canvas, with glitter and gloss varnish',
      pt: 'Acrílico sobre tela esticada, com glitter e verniz brilhante',
    },
    description: {
      es: `Esta fue la magnífica obra que presenté para la exposición “Muy Lunaides” de la agrupación “La Otra Cara” en la ciudad de Córdoba.

La consigna era hacer una obra basada en una poesía de una de nuestras compañeras, Sol Donaire.

El cuadro refleja el sentimiento en su poema. La abrumadora y grandemente intensa sensación del amor. La pérdida de la individualidad y la entrega al único momento existente, el presente.`,
      en: `This was the magnificent work I presented for the exhibition “Muy Lunaides” by the group “La Otra Cara” in the city of Córdoba.

The brief was to make a work based on a poem by one of our companions, Sol Donaire.

The painting reflects the feeling in her poem. The overwhelming and hugely intense sensation of love. The loss of individuality and the surrender to the only existing moment, the present.`,
      pt: `Esta foi a magnífica obra que apresentei para a exposição “Muy Lunaides” do coletivo “La Otra Cara”, na cidade de Córdoba.

O mote era fazer uma obra baseada num poema de uma das nossas companheiras, Sol Donaire.

O quadro reflete o sentimento do seu poema. A avassaladora e grandemente intensa sensação do amor. A perda da individualidade e a entrega ao único momento existente, o presente.`,
    },
    notes: {
      es: 'Córdoba Capital, Argentina',
      en: 'Córdoba Capital, Argentina',
      pt: 'Córdoba Capital, Argentina',
    },
  },
  {
    slug: 'de-cuando-fuimos-pantera-con-obsidiana',
    title: 'De cuando fuimos pantera con Obsidiana',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/05 De cuando fuimos pantera con Obsidiana/PORTADA EN PORTFOLIO.webp',
      alt: 'De cuando fuimos pantera con Obsidiana',
    },
    detailImages: [
      {
        src: '/images/portfolio/figurativo/05 De cuando fuimos pantera con Obsidiana/IMG_7762.webp',
        alt: 'De cuando fuimos pantera con Obsidiana — detalle',
      },
      {
        src: '/images/portfolio/figurativo/05 De cuando fuimos pantera con Obsidiana/IMG_7764.webp',
        alt: 'De cuando fuimos pantera con Obsidiana — detalle',
      },
    ],
    year: '2021',
    dimensions: '100 × 80 cm',
    technique: {
      es: 'Acrílico sobre bastidor entelado',
      en: 'Acrylic on stretched canvas',
      pt: 'Acrílico sobre tela esticada',
    },
    description: {
      es: `Obsidiana es mi compañera astral. Ella no es mi animal de poder, pero me acompañó en todas las vidas hasta ahora. En esta vida, vino en forma de gatito, pero su verdadera forma es como la de una pantera dragón alada.
Un día entendí que la pantera era mi animal de poder, y hablamos largo y tendido acerca de esta diferencia espiritual y sus poderes.
Mi relación con Dianita es tan fuerte que muchas veces sentí la sensación de que la gesté y la di a luz, siendo esto terrestremente imposible pero astralmente verdadero.
Este cuadro fue creado en el año 2021, cuando tuve uno de mis mayores despertares espirituales, coincidiendo con el nacimiento de Dianita y a su vez mi estudio del tarot.
Cuando me compre mi primer mazo y lo barajé, este “escupió” una carta que definitivamente me representaba, era la Reina de bastos, la Reina del fuego.
Esta es una Reina sensual, llena de fuego y empoderamiento. Tiene en su regazo un gato negro.
Era yo.
Parada en mi poder, acompañada por mi compañera peligrosa y protectora. Hermoso. A partir de ahí se convirtió en mi carta de cabecera y posteriormente en este cuadro, donde ambas fuimos panteras.`,
      en: `Obsidiana is my astral companion. She is not my power animal, but she has been with me in every life until now. In this life she came in the form of a kitten, but her true form is like that of a winged dragon panther.
One day I understood that the panther was my power animal, and we talked at length about this spiritual difference and about her powers.
My bond with Dianita is so strong that many times I have felt as though I carried her and gave birth to her, which is earthly impossible but astrally true.
This painting was made in 2021, when I had one of my greatest spiritual awakenings, coinciding with Dianita's birth and, at the same time, with my study of the tarot.
When I bought my first deck and shuffled it, it “spat out” a card that definitely represented me: it was the Queen of Wands, the Queen of fire.
She is a sensual Queen, full of fire and empowerment. She has a black cat in her lap.
It was me.
Standing in my power, accompanied by my dangerous and protective companion. Beautiful. From then on it became my touchstone card and later this painting, where we were both panthers.`,
      pt: `A Obsidiana é a minha companheira astral. Ela não é o meu animal de poder, mas acompanhou-me em todas as vidas até agora. Nesta vida veio em forma de gatinha, mas a sua verdadeira forma é como a de uma pantera dragão alada.
Um dia percebi que a pantera era o meu animal de poder, e falámos longamente sobre esta diferença espiritual e sobre os seus poderes.
A minha relação com a Dianita é tão forte que muitas vezes senti que a gerei e a dei à luz, sendo isso terrestremente impossível mas astralmente verdadeiro.
Este quadro foi criado em 2021, quando tive um dos meus maiores despertares espirituais, coincidindo com o nascimento da Dianita e, ao mesmo tempo, com o meu estudo do tarot.
Quando comprei o meu primeiro baralho e o baralhei, ele “cuspiu” uma carta que definitivamente me representava: era a Rainha de paus, a Rainha do fogo.
Esta é uma Rainha sensual, cheia de fogo e de empoderamento. Tem ao colo um gato preto.
Era eu.
De pé no meu poder, acompanhada pela minha companheira perigosa e protetora. Lindo. A partir daí tornou-se a minha carta de cabeceira e, mais tarde, este quadro, onde ambas fomos panteras.`,
    },
    notes: {
      es: 'Posadas, Misiones, Argentina',
      en: 'Posadas, Misiones, Argentina',
      pt: 'Posadas, Misiones, Argentina',
    },
  },
  {
    slug: 'el-llanto-del-rey-expectante',
    title: 'El llanto del rey expectante',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/06 El llanto del rey expectante/PORTADA-EN-PORTFOLIO.webp',
      alt: 'El llanto del rey expectante',
    },
    detailImages: [
      {
        src: '/images/portfolio/figurativo/06 El llanto del rey expectante/el-llanto-del-rey-expectante-1-100x80.webp',
        alt: 'El llanto del rey expectante — detalle',
      },
      {
        src: '/images/portfolio/figurativo/06 El llanto del rey expectante/el-llanto-del-rey-expectante-2-100x80.webp',
        alt: 'El llanto del rey expectante — detalle',
      },
    ],
    year: '2022',
    dimensions: '70 × 30 cm',
    technique: {
      es: 'Acrílico sobre bastidor entelado',
      en: 'Acrylic on stretched canvas',
      pt: 'Acrílico sobre tela esticada',
    },
    description: {
      es: `Este cuadro habla del dolor profundo de la traición. Mi herida aún sigue abierta, me ha cambiado y fortalecido.

En aquel entonces estaba en uno de mis procesos de despertar espiritual. Me gusta decir que tuve varios “despertares” que, en realidad, se podrían interpretar como evoluciones de mi estado de conciencia.

Aquel fue el año donde empecé a tener visiones, mucho insomnio, me visitaban seres de todo tipo durante la noche, mi canal estaba muy abierto. Fue ahí, en ese contexto, cuando me vi.

Mi alma me dió mucha información, pero la más preciada en aquel entonces fue saber si forma. Hasta el día de hoy siento que mis alas son así. No sé los detalles, sus colores o patrones, van cambiando.

Aquel día murió mi inocencia, nunca volví a ser la misma. Me endurecí.

No dudo en que, quizás, se haya generado una herida kármica.`,
      en: `This painting speaks of the deep pain of betrayal. My wound is still open; it has changed me and made me stronger.

Back then I was in one of my spiritual awakening processes. I like to say that I had several “awakenings” that could really be read as evolutions of my state of consciousness.

That was the year I began to have visions, a great deal of insomnia; beings of every kind visited me at night, my channel was wide open. It was there, in that context, that I saw myself.

My soul gave me a great deal of information, but the most precious of all back then was to know its form. To this day I feel that my wings are like that. I do not know the details, their colours or patterns, they keep changing.

That day my innocence died; I was never the same again. I hardened.

I do not doubt that, perhaps, a karmic wound was created.`,
      pt: `Este quadro fala da dor profunda da traição. A minha ferida ainda continua aberta, mudou-me e fortaleceu-me.

Naquele tempo estava num dos meus processos de despertar espiritual. Gosto de dizer que tive vários “despertares” que, na verdade, se poderiam interpretar como evoluções do meu estado de consciência.

Aquele foi o ano em que comecei a ter visões, muita insónia; visitavam-me seres de todo o tipo durante a noite, o meu canal estava muito aberto. Foi aí, nesse contexto, que me vi.

A minha alma deu-me muita informação, mas a mais preciosa naquele tempo foi saber a sua forma. Até hoje sinto que as minhas asas são assim. Não sei os detalhes, as suas cores ou padrões, vão mudando.

Naquele dia morreu a minha inocência, nunca mais voltei a ser a mesma. Endureci.

Não duvido de que, talvez, se tenha gerado uma ferida cármica.`,
    },
    notes: {
      es: 'Posadas, Misiones, Argentina',
      en: 'Posadas, Misiones, Argentina',
      pt: 'Posadas, Misiones, Argentina',
    },
  },
  {
    slug: 'it-might-be-a-mess',
    title: 'It might be a mess',
    category: 'figurativo',
    wallImage: {
      src: '/images/portfolio/figurativo/07 It might be a mess/PORTADA-EN-PORTFOLIO.webp',
      alt: 'It might be a mess',
    },
    detailImages: [
      {
        src: '/images/portfolio/figurativo/07 It might be a mess/mess-mine-1.webp',
        alt: 'It might be a mess — detalle',
      },
      {
        src: '/images/portfolio/figurativo/07 It might be a mess/mess-mine-2.webp',
        alt: 'It might be a mess — detalle',
      },
    ],
    year: '2022',
    // El machete deja las medidas en blanco: la ficha no muestra el dato.
    dimensions: '',
    technique: {
      es: 'Acrílico sobre bastidor entelado y fibra',
      en: 'Acrylic on stretched canvas, and marker pen',
      pt: 'Acrílico sobre tela esticada e marcador',
    },
    description: {
      es: `…But at least it's mine.
Este cuadro lo pinté para una de mis hermanas de la vida. Nos acompañamos en este camino desde los cuatro años y este cuadro refleja toda la belleza de lo que ella es, caótica y empoderada en el sentido más noble.

Su vida es un sinfín de cambios, espirales, vueltas inesperadas y búsqueda de amor y contención. Es la mujer más fuerte que conozco.

Ella es preciosa en su manera única, su corazón NO tiene maldad, es tan auténtica y honorable.
Vivió cosas que nunca mereció y lo que construyó… es admirable.

Me hace acordar a mi mamá, ambas me enseñaron que con amor todo florece y que cualquiera tiene una oportunidad porque nada está perdido.

“It's my party and I cry if I want to”.`,
      en: `…But at least it's mine.
I painted this one for one of my sisters in life. We have walked this road together since we were four, and this painting reflects all the beauty of what she is: chaotic and empowered in the noblest sense.

Her life is an endless run of changes, spirals, unexpected turns and a search for love and for holding. She is the strongest woman I know.

She is lovely in her own unique way, her heart has NO malice, she is so authentic and honourable.
She went through things she never deserved, and what she built… is admirable.

She reminds me of my mum; they both taught me that with love everything blossoms and that anyone has a chance, because nothing is lost.

“It's my party and I cry if I want to”.`,
      pt: `…But at least it's mine.
Pintei este quadro para uma das minhas irmãs da vida. Acompanhamo-nos neste caminho desde os quatro anos e este quadro reflete toda a beleza do que ela é: caótica e empoderada no sentido mais nobre.

A vida dela é um sem-fim de mudanças, espirais, voltas inesperadas e procura de amor e de amparo. É a mulher mais forte que conheço.

Ela é preciosa à sua maneira única, o seu coração NÃO tem maldade, é tão autêntica e honrada.
Viveu coisas que nunca mereceu e o que construiu… é admirável.

Faz-me lembrar a minha mãe; ambas me ensinaram que com amor tudo floresce e que qualquer pessoa tem uma oportunidade, porque nada está perdido.

“It's my party and I cry if I want to”.`,
    },
    notes: {
      es: 'Posadas, Misiones, Argentina',
      en: 'Posadas, Misiones, Argentina',
      pt: 'Posadas, Misiones, Argentina',
    },
  },

  /* ── Portfolio · Fluid Art ──────────────────────────────────────────────── */
  /*
   * En el orden del machete. El español de cada descripción es el mensaje tal
   * como lo canalizó Alana, transcrito literal; en/pt son traducciones.
   */
  {
    slug: 'las-olas-que-se-espejaban',
    title: 'Las olas que se esperaban en las nubes',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/01 Las olas que se esperaban en las nubes/PORTADA EN PORTFOLIO.webp',
      alt: 'Las olas que se esperaban en las nubes',
    },
    detailImages: [
      {
        src: '/images/portfolio/fluid-art/01 Las olas que se esperaban en las nubes/OBRA comparativa 1.webp',
        alt: 'Las olas que se esperaban en las nubes — detalle',
      },
      {
        src: '/images/portfolio/fluid-art/01 Las olas que se esperaban en las nubes/PhotoGrid_1548531682150.webp',
        alt: 'Las olas que se esperaban en las nubes — detalle',
      },
      {
        src: '/images/portfolio/fluid-art/01 Las olas que se esperaban en las nubes/PhotoGrid_1548598351956.webp',
        alt: 'Las olas que se esperaban en las nubes — detalle',
      },
    ],
    year: '2018',
    dimensions: '100 × 100 cm',
    technique: {
      es: 'Acrílico y cola vinílica sobre bastidor entelado',
      en: 'Acrylic and PVA glue on stretched canvas',
      pt: 'Acrílico e cola vinílica sobre tela esticada',
    },
    description: {
      es: `Mi primera obra de fluid art, y por mucho tiempo, la más hermosa y verdadera.

¿Qué mensaje te gustaría dar al mundo?
“Admirar la grandeza de la Creación que los rodea, no pierdan el tiempo pensando que aquellos que ya no logran ver se han marchado, mi fuero interno, mi vientre sagrado los alberga a todos.
Es una danza de almas “remolinosas” que circunda el abismo de esta Creación nadando al unísono por un bien mayor, generando un enorme cúmulo de energía purificadora sobre esta tierra.
La lucha contra las mareas no es más que explosiones de energía purificadora, descargas de grandes cúmulos de energía que debían ser liberadas.
El balance de la Creación está, siempre estuvo y siempre estará en las tormentas chocando con los océanos.
Esta es la verdadera verdad de Dios.”`,
      en: `My first fluid art work, and for a long time the most beautiful and the truest.

What message would you like to give the world?
“Admire the greatness of the Creation around you, do not waste time thinking that those you can no longer see have gone away; my innermost self, my sacred womb holds them all.
It is a dance of “swirling” souls that circles the abyss of this Creation, swimming in unison towards a greater good, gathering an enormous mass of purifying energy over this earth.
The struggle against the tides is nothing but bursts of purifying energy, discharges of great masses of energy that had to be released.
The balance of Creation is, always was and always will be in the storms crashing into the oceans.
This is the true truth of God.”`,
      pt: `A minha primeira obra de fluid art e, durante muito tempo, a mais bela e a mais verdadeira.

Que mensagem gostarias de dar ao mundo?
“Admirem a grandeza da Criação que vos rodeia, não percam tempo a pensar que aqueles que já não conseguem ver partiram; o meu foro íntimo, o meu ventre sagrado alberga-os a todos.
É uma dança de almas “rodopiantes” que circunda o abismo desta Criação, nadando em uníssono por um bem maior, gerando um enorme cúmulo de energia purificadora sobre esta terra.
A luta contra as marés não é mais do que explosões de energia purificadora, descargas de grandes cúmulos de energia que tinham de ser libertados.
O equilíbrio da Criação está, sempre esteve e sempre estará nas tempestades a chocar com os oceanos.
Esta é a verdadeira verdade de Deus.”`,
    },
    notes: {
      es: 'Posadas, Misiones, Argentina',
      en: 'Posadas, Misiones, Argentina',
      pt: 'Posadas, Misiones, Argentina',
    },
  },
  {
    slug: 'premonicion',
    title: 'Premonición',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/02 Premonicion/PORTADA EN PORTFOLIO.webp',
      alt: 'Premonición',
    },
    detailImages: [
      {
        src: '/images/portfolio/fluid-art/02 Premonicion/premonicion.webp',
        alt: 'Premonición — detalle',
      },
    ],
    year: '2018',
    dimensions: '100 × 100 cm',
    technique: {
      es: 'Acrílico y cola vinílica sobre bastidor entelado',
      en: 'Acrylic and PVA glue on stretched canvas',
      pt: 'Acrílico e cola vinílica sobre tela esticada',
    },
    description: {
      es: `¿Qué mensaje te gustaría dar al mundo?
“El eje está en saber que Dios sabe lo que hace.
La esperanza es la clave en esta tierra.
No hay nada sin esperanza y sin fé.
¿Qué te queda si esperas lo peor cada día?
¡¿Qué?! ¿Qué te espera si no esperas nada de tu día?
No habrá destino para un alma que olvida vivir, no habrá regalos para aquel que no extiende sus brazos para tomarlos.
No habrá consuelo cuando alguien se caiga y se raspe las rodillas y las manos.
No habrá nada sin la certeza del mañana feliz.
No habrá destino ni regalos.
Solo aquellos que tienen la certeza de la buena vida pueden recibir las buenas nuevas de su destino.
Confía”`,
      en: `What message would you like to give the world?
“It all turns on knowing that God knows what He is doing.
Hope is the key on this earth.
There is nothing without hope and without faith.
What is left for you if you expect the worst every day?
What?! What awaits you if you expect nothing of your day?
There will be no destiny for a soul that forgets to live, no gifts for the one who does not reach out their arms to take them.
There will be no comfort when someone falls and scrapes their knees and their hands.
There will be nothing without the certainty of a happy tomorrow.
There will be no destiny and no gifts.
Only those who hold the certainty of the good life can receive the good news of their destiny.
Trust”`,
      pt: `Que mensagem gostarias de dar ao mundo?
“O eixo está em saber que Deus sabe o que faz.
A esperança é a chave nesta terra.
Não há nada sem esperança e sem fé.
O que te resta se esperas o pior todos os dias?
O quê?! O que te espera se não esperas nada do teu dia?
Não haverá destino para uma alma que se esquece de viver, não haverá presentes para aquele que não estende os braços para os receber.
Não haverá consolo quando alguém cair e esfolar os joelhos e as mãos.
Não haverá nada sem a certeza do amanhã feliz.
Não haverá destino nem presentes.
Só aqueles que têm a certeza da boa vida podem receber as boas novas do seu destino.
Confia”`,
    },
    notes: {
      es: 'Posadas, Misiones, Argentina',
      en: 'Posadas, Misiones, Argentina',
      pt: 'Posadas, Misiones, Argentina',
    },
  },
  {
    slug: 'la-raiz',
    title: 'La raíz',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/03 La raiz/PORTADA EN PORTFOLIO.webp',
      alt: 'La raíz',
    },
    detailImages: [
      {
        src: '/images/portfolio/fluid-art/03 La raiz/la-raiz-1.webp',
        alt: 'La raíz — detalle',
      },
      {
        src: '/images/portfolio/fluid-art/03 La raiz/la-raiz-2.webp',
        alt: 'La raíz — detalle',
      },
    ],
    year: '2018',
    dimensions: '100 × 100 cm',
    technique: {
      es: 'Acrílico y cola vinílica sobre bastidor entelado',
      en: 'Acrylic and PVA glue on stretched canvas',
      pt: 'Acrílico e cola vinílica sobre tela esticada',
    },
    description: {
      es: `¿Qué mensaje te gustaría dar al mundo?
“El destino, la vida, se van a encargar de tejer tu camino en la dirección que den tus pasos.
Tú decides cuándo se abren las puertas. Tú decides cuándo te abrirás a los acontecimientos, no puedes apresurar la vida porque eso es apresurar la propia muerte y… ¿quién quiere eso?
La vida se trata de vivir.
La vida se trata de aprender.
La vida se trata de estar.
Si no puedes hacer esto, ¿qué estás esperando?
La magia se da cuando tus pies se animan a dar el paso, el paso que abrirá lo predestinado. Respira.”`,
      en: `What message would you like to give the world?
“Destiny, life, will take care of weaving your path in the direction your steps take.
You decide when the doors open. You decide when you will open yourself to what happens; you cannot hurry life, because that is hurrying your own death and… who wants that?
Life is about living.
Life is about learning.
Life is about being here.
If you cannot do this, what are you waiting for?
The magic happens when your feet dare to take the step, the step that will open what is destined. Breathe.”`,
      pt: `Que mensagem gostarias de dar ao mundo?
“O destino, a vida, vão encarregar-se de tecer o teu caminho na direção que derem os teus passos.
És tu que decides quando se abrem as portas. És tu que decides quando te abrirás aos acontecimentos; não podes apressar a vida, porque isso é apressar a própria morte e… quem é que quer isso?
A vida é para viver.
A vida é para aprender.
A vida é para estar.
Se não consegues fazer isto, de que estás à espera?
A magia acontece quando os teus pés se atrevem a dar o passo, o passo que abrirá o que está predestinado. Respira.”`,
    },
    notes: {
      es: 'Posadas, Misiones, Argentina',
      en: 'Posadas, Misiones, Argentina',
      pt: 'Posadas, Misiones, Argentina',
    },
  },
  {
    slug: 're-suscito',
    title: 'RE-suscito',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/04 RE-suscito/PORTADA EN PORTFOLIO.jpg',
      alt: 'RE-suscito',
    },
    detailImages: [
      {
        src: '/images/portfolio/fluid-art/04 RE-suscito/cuadro.webp',
        alt: 'RE-suscito — detalle',
      },
      {
        src: '/images/portfolio/fluid-art/04 RE-suscito/ALANA ZARZA IRAETA-  RE-SUSCITO 1.jpg',
        alt: 'RE-suscito — detalle',
      },
      {
        src: '/images/portfolio/fluid-art/04 RE-suscito/ALANA ZARZA IRAETA-  RE-SUSCITO 2.jpg',
        alt: 'RE-suscito — detalle',
      },
    ],
    year: '2020',
    // El machete deja las medidas en blanco: la ficha no muestra el dato.
    dimensions: '',
    technique: {
      es: 'Flotter medium, acrílico y cola vinílica sobre bastidor entelado y cola glitter',
      en: 'Flotter medium, acrylic and PVA glue on stretched canvas, and glitter glue',
      pt: 'Flotter medium, acrílico e cola vinílica sobre tela esticada e cola com glitter',
    },
    description: {
      es: `¿Qué mensaje te gustaría dar al mundo?
“La evolución y la transgresión de límites no es negociable, hay que cruzar todas las barreras que limitan el existir.
Existir se trata de expresar tu versión más poderosa. Viniste a darlo todo. ¿Qué estás haciendo con este aturdimiento?
La reinvención es la clave para encontrar la versión más original, la más real, el adulto está destinado a individualizarse dentro de su manada para encontrar el respeto real de sus pares. ¿Qué quiero decir con esto? Tu rol es único y hay que ganarse ese lugar empoderándote.
No hay como ocupar el lugar que te es propio si no te enpoderás en tu verdad primero.
Dicho esto, es menester buscar todas las mentiras y derribarlas. Para esto hay que gestar la verdadera valentía.
La audacia de hablar en voz alta, fuerte y claro tu creencia y tu verdad está más allá de discusión.
Solo los cobardes se esconden en las modas, son aquellos que no saben que en sí mismos está todo lo que es preciso.
Vuela”.`,
      en: `What message would you like to give the world?
“Evolution and the crossing of limits are not negotiable, every barrier that limits existing has to be crossed.
To exist is to express your most powerful version. You came here to give everything. What are you doing with this daze?
Reinvention is the key to finding the most original version, the most real one; the adult is meant to become an individual within the pack in order to earn the real respect of their peers. What do I mean by this? Your role is unique and that place has to be won by empowering yourself.
There is no way to occupy the place that is yours if you do not empower yourself in your truth first.
That said, it is necessary to seek out every lie and bring it down. For that, true courage has to be brought into being.
The daring to speak your belief and your truth out loud, loud and clear, is beyond discussion.
Only cowards hide in fashions, they are the ones who do not know that everything needed is within themselves.
Fly”.`,
      pt: `Que mensagem gostarias de dar ao mundo?
“A evolução e a transgressão de limites não são negociáveis, é preciso atravessar todas as barreiras que limitam o existir.
Existir é exprimir a tua versão mais poderosa. Vieste para dar tudo. O que estás a fazer com este atordoamento?
A reinvenção é a chave para encontrar a versão mais original, a mais real; o adulto está destinado a individualizar-se dentro da sua alcateia para encontrar o respeito real dos seus pares. O que quero dizer com isto? O teu papel é único e esse lugar ganha-se com o teu próprio poder.
Não há como ocupar o lugar que te é próprio se não te apoderares primeiro da tua verdade.
Dito isto, é mister procurar todas as mentiras e derrubá-las. Para isso é preciso gerar a verdadeira coragem.
A ousadia de dizer em voz alta, forte e clara a tua crença e a tua verdade está para além de discussão.
Só os cobardes se escondem nas modas, são aqueles que não sabem que dentro de si está tudo o que é preciso.
Voa”.`,
    },
    notes: {
      es: 'Posadas, Misiones, Argentina',
      en: 'Posadas, Misiones, Argentina',
      pt: 'Posadas, Misiones, Argentina',
    },
  },
  {
    slug: 'un-petalo-un-mensaje-y-una-chispa',
    title: 'Un pétalo, un mensaje y una chispa',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/05 Un petalo, un mensaje y una chispa/PORTADA EN PORTFOLIO.webp',
      alt: 'Un pétalo, un mensaje y una chispa',
    },
    detailImages: [
      {
        src: '/images/portfolio/fluid-art/05 Un petalo, un mensaje y una chispa/cuadro.webp',
        alt: 'Un pétalo, un mensaje y una chispa — detalle',
      },
      {
        src: '/images/portfolio/fluid-art/05 Un petalo, un mensaje y una chispa/un-petalo-1.webp',
        alt: 'Un pétalo, un mensaje y una chispa — detalle',
      },
      {
        src: '/images/portfolio/fluid-art/05 Un petalo, un mensaje y una chispa/un-petalo-3.webp',
        alt: 'Un pétalo, un mensaje y una chispa — detalle',
      },
    ],
    year: '2020',
    dimensions: '60 × 80 cm',
    technique: {
      es: 'Flotter medium, acrílico y cola vinílica sobre bastidor entelado y cola glitter',
      en: 'Flotter medium, acrylic and PVA glue on stretched canvas, and glitter glue',
      pt: 'Flotter medium, acrílico e cola vinílica sobre tela esticada e cola com glitter',
    },
    description: {
      es: `¿Qué mensaje quieres darle al mundo?
“Hagamos esto fácil.
2+2=4 no? Bueno, así de simple es la vida. Dios te ama y estás protegido, no hay más de qué preocuparse.
Levantaros cada mañana y repetidlo en sus cabezas “Dios me ama y no hay más remedio que amar en su favor”.
¿Qué puedes perder? Si lo más importante ya está cubierto? Dios te ama y no hay nada más importante que aquello. Dios te guía y te abraza, al final del día, siente y agradece, ese calor es Dios dándote aliento para mañana.
Se feliz.”`,
      en: `What message do you want to give the world?
“Let us make this easy.
2+2=4, right? Well, life is that simple. God loves you and you are protected, there is nothing more to worry about.
Rise every morning and repeat it in your heads “God loves me and there is nothing for it but to love in His favour”.
What can you lose? If the most important thing is already covered? God loves you and there is nothing more important than that. God guides you and holds you, and at the end of the day, feel it and give thanks: that warmth is God giving you heart for tomorrow.
Be happy.”`,
      pt: `Que mensagem queres dar ao mundo?
“Vamos tornar isto fácil.
2+2=4, não é? Pois bem, a vida é assim tão simples. Deus ama-te e estás protegido, não há mais com que te preocupares.
Levantai-vos todas as manhãs e repeti-o nas vossas cabeças “Deus ama-me e não há outro remédio senão amar a Seu favor”.
O que podes perder? Se o mais importante já está garantido? Deus ama-te e não há nada mais importante do que isso. Deus guia-te e abraça-te, e ao fim do dia, sente e agradece: esse calor é Deus a dar-te alento para amanhã.
Sê feliz.”`,
    },
    notes: {
      es: 'Posadas, Misiones, Argentina',
      en: 'Posadas, Misiones, Argentina',
      pt: 'Posadas, Misiones, Argentina',
    },
  },
  {
    slug: 'se-ondula-el-eter',
    title: 'Se ondula el éter que ata las superficies',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/06 Se ondula el eter que ata las superficies/PORTADA EN PORTFOLIO.webp',
      alt: 'Se ondula el éter que ata las superficies',
    },
    detailImages: [
      {
        src: '/images/portfolio/fluid-art/06 Se ondula el eter que ata las superficies/cuadro.webp',
        alt: 'Se ondula el éter que ata las superficies — detalle',
      },
      {
        src: '/images/portfolio/fluid-art/06 Se ondula el eter que ata las superficies/IMG_20220604_090558_715-01.webp',
        alt: 'Se ondula el éter que ata las superficies — detalle',
      },
      {
        src: '/images/portfolio/fluid-art/06 Se ondula el eter que ata las superficies/IMG_20220604_125358_012-01.webp',
        alt: 'Se ondula el éter que ata las superficies — detalle',
      },
      {
        src: '/images/portfolio/fluid-art/06 Se ondula el eter que ata las superficies/IMG_20220604_125410_428-01.webp',
        alt: 'Se ondula el éter que ata las superficies — detalle',
      },
      {
        src: '/images/portfolio/fluid-art/06 Se ondula el eter que ata las superficies/IMG_20220604_134901_057-01.webp',
        alt: 'Se ondula el éter que ata las superficies — detalle',
      },
    ],
    year: '2022',
    dimensions: '80 × 100 cm',
    technique: {
      es: 'Acrílico sobre bastidor entelado y cola glitter',
      en: 'Acrylic on stretched canvas, and glitter glue',
      pt: 'Acrílico sobre tela esticada e cola com glitter',
    },
    description: {
      es: `¿Cuál es el mensaje que querés darle al mundo?
“Que todos somos uno, somos parte de un mismo ecosistema hermoso que no distingue o sabe de razas y colores.
Que el apoyo mutuo es lo que nos va a llevar lejos como sociedad, que las ramificaciones de los humanos son las interrelaciones personales y que eso es mucho más poderoso de lo que creemos.
Tenemos un potencial hermoso al alcance de nuestras manos, fuera de las pantallas, que es La Presencia.
Hacer presencia, allá donde vayamos, estar presentes, habitar los espacios por donde pasamos, hacer raíz en el momento que vivimos, estar vivos, eso emana una energía curativa de enorme poder que no solo que es válida, sino también necesaria.
Relacionarnos es posible solo estando presentes en este plano, escalar es insano y es en vano. Nadie puede escapar de lo que de verdad le toca. Lo que toca toca y estar vivos es hacerse responsables.
Gracias por mis palabras, los amo.”`,
      en: `What is the message you want to give the world?
“That we are all one, that we are part of one same beautiful ecosystem that does not tell apart or know of races and colours.
That mutual support is what will take us far as a society, that the branches of human beings are personal relationships, and that this is far more powerful than we believe.
We have a beautiful potential within reach of our hands, away from the screens, and it is Presence.
To be present, wherever we go, to inhabit the spaces we pass through, to take root in the moment we are living, to be alive: that gives off a healing energy of enormous power that is not only valid but also necessary.
Relating to one another is only possible by being present on this plane; climbing is unhealthy and it is in vain. No one can escape what truly falls to them. What falls to you falls to you, and being alive means taking responsibility.
Thank you for my words, I love you.”`,
      pt: `Qual é a mensagem que queres dar ao mundo?
“Que todos somos um, somos parte de um mesmo ecossistema lindíssimo que não distingue nem sabe de raças e cores.
Que o apoio mútuo é o que nos vai levar longe como sociedade, que as ramificações dos humanos são as relações pessoais e que isso é muito mais poderoso do que julgamos.
Temos um potencial lindíssimo ao alcance das nossas mãos, fora dos ecrãs, que é A Presença.
Fazer presença, onde quer que vamos, estar presentes, habitar os espaços por onde passamos, criar raiz no momento que vivemos, estar vivos: isso emana uma energia curativa de enorme poder que não só é válida como também necessária.
Relacionarmo-nos só é possível estando presentes neste plano; escalar é insano e é em vão. Ninguém pode escapar ao que verdadeiramente lhe cabe. O que cabe, cabe, e estar vivo é tornar-se responsável.
Obrigada pelas minhas palavras, amo-vos.”`,
    },
    notes: {
      es: 'Colonia Pellegrini, Corrientes, Argentina — Marco del Ciclo Humedales',
      en: 'Colonia Pellegrini, Corrientes, Argentina — part of the Ciclo Humedales',
      pt: 'Colonia Pellegrini, Corrientes, Argentina — no âmbito do Ciclo Humedales',
    },
  },
  {
    slug: 'ya-no-se-oye-el-ultimo-suspiro',
    title: 'Ya no se oye el último suspiro',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/07 Ya no se oye el ultimo suspiro/PORTADA EN PORTFOLIO.webp',
      alt: 'Ya no se oye el último suspiro',
    },
    detailImages: [
      {
        src: '/images/portfolio/fluid-art/07 Ya no se oye el ultimo suspiro/ya-no-se-oye-1.webp',
        alt: 'Ya no se oye el último suspiro — detalle',
      },
      {
        src: '/images/portfolio/fluid-art/07 Ya no se oye el ultimo suspiro/ya-no-se-oye-2.webp',
        alt: 'Ya no se oye el último suspiro — detalle',
      },
      {
        src: '/images/portfolio/fluid-art/07 Ya no se oye el ultimo suspiro/ya-no-se-oye-3.webp',
        alt: 'Ya no se oye el último suspiro — detalle',
      },
    ],
    year: '2022',
    dimensions: '30 × 30 cm',
    technique: {
      es: 'Flotter medium, acrílico y cola vinílica sobre bastidor entelado',
      en: 'Flotter medium, acrylic and PVA glue on stretched canvas',
      pt: 'Flotter medium, acrílico e cola vinílica sobre tela esticada',
    },
    description: {
      es: `¿Qué mensajes les gustaría dar al mundo?
“Hay sombras y hay fuerzas perversas. Pero todo se puede contrarrestar con la energía de la vida.
No permitan que las austeridades del existir apaguen las llamas que se les han sido otorgadas.
La vida está para ser vivida, disfrutada, expandida, habitada. Todo sugiere conectar con la chispa de la creación.
Un paso en falso te traslada por el mal camino, la queja, la falta de gratitud que te ancla al presente y al disfrute.
Contempla a solas en algún rincón y percibirás su verdad elocuente.”`,
      en: `What messages would you like to give the world?
“There are shadows and there are perverse forces. But everything can be countered with the energy of life.
Do not let the austerities of existing put out the flames that have been granted to you.
Life is there to be lived, enjoyed, expanded, inhabited. Everything points to connecting with the spark of creation.
One false step carries you down the wrong road: the complaint, the lack of gratitude that anchors you to the present and to enjoyment.
Contemplate alone in some corner and you will perceive its eloquent truth.”`,
      pt: `Que mensagens gostariam de dar ao mundo?
“Há sombras e há forças perversas. Mas tudo se pode contrariar com a energia da vida.
Não permitam que as austeridades do existir apaguem as chamas que vos foram outorgadas.
A vida está para ser vivida, desfrutada, expandida, habitada. Tudo sugere ligar-se à faísca da criação.
Um passo em falso leva-te pelo mau caminho: a queixa, a falta de gratidão que te ancora ao presente e ao desfrute.
Contempla a sós nalgum canto e perceberás a sua verdade eloquente.”`,
    },
    notes: {
      es: 'Posadas, Misiones, Argentina',
      en: 'Posadas, Misiones, Argentina',
      pt: 'Posadas, Misiones, Argentina',
    },
  },
  {
    slug: 'en-el-oceano-divise-al-inframundo',
    title: 'En el océano divisé al inframundo',
    category: 'fluid-art',
    wallImage: {
      src: '/images/portfolio/fluid-art/08 En el oceano divise al inframundo/portada para portfolio.webp',
      alt: 'En el océano divisé al inframundo',
    },
    detailImages: [
      {
        src: '/images/portfolio/fluid-art/08 En el oceano divise al inframundo/en-el-oceano-1.webp',
        alt: 'En el océano divisé al inframundo — detalle',
      },
      {
        src: '/images/portfolio/fluid-art/08 En el oceano divise al inframundo/en-el-oceano-2.webp',
        alt: 'En el océano divisé al inframundo — detalle',
      },
    ],
    year: '2023',
    dimensions: '30 × 30 cm',
    technique: {
      es: 'Flotter medium, acrílico y cola vinílica sobre bastidor entelado',
      en: 'Flotter medium, acrylic and PVA glue on stretched canvas',
      pt: 'Flotter medium, acrílico e cola vinílica sobre tela esticada',
    },
    description: {
      es: `“Ay, ay, la espera… la espera que desespera.
Somos la unión de las fuerzas ancestrales, lo que muchos creen que es luz es sombra y tinieblas y viceversa.
Todo se entremezcla, es difuso, pero eso está bien, jeje. Los humanos han de entender que los opuestos son dos polos de lo mismo y son indivisibles, no contrarios.
Los vivos mueren, los muertos están vivos.
El agua está viva ¿Tú lo estás?”`,
      en: `“Oh, oh, the waiting… the waiting that drives you to despair.
We are the union of the ancestral forces, what many believe to be light is shadow and darkness and the other way round.
Everything mingles, it is blurred, but that is all right, hehe. Humans must understand that opposites are two poles of the same thing and are indivisible, not contrary.
The living die, the dead are alive.
The water is alive. Are you?”`,
      pt: `“Ai, ai, a espera… a espera que desespera.
Somos a união das forças ancestrais, aquilo que muitos julgam ser luz é sombra e trevas e vice-versa.
Tudo se entremeia, é difuso, mas isso está bem, hehe. Os humanos hão de entender que os opostos são dois polos do mesmo e são indivisíveis, não contrários.
Os vivos morrem, os mortos estão vivos.
A água está viva. E tu, estás?”`,
    },
    notes: {
      es: 'Posadas, Misiones, Argentina',
      en: 'Posadas, Misiones, Argentina',
      pt: 'Posadas, Misiones, Argentina',
    },
  },
]

export function artworksByCategory(category: ArtworkCategorySlug): Artwork[] {
  return ARTWORKS.filter((artwork) => artwork.category === category)
}

export function artworkBySlug(slug: string): Artwork | undefined {
  return ARTWORKS.find((artwork) => artwork.slug === slug)
}
