import type { GiftPack } from '@/types'

export const BRAND = {
  name: 'El Templo Digital de Alana',
  tagline: 'Universo Creativo & Arte Multidisciplinar',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://el-templo-digital.vercel.app',
} as const

export const GIFT_PACKS: GiftPack[] = [
  {
    id: 'fluidez-i',
    slug: 'fluidez-i',
    name: 'Lámina: Fluidez I',
    pieces: 1,
    price: 4500, // En céntimos
    available: true,
    isFeatured: true,
    description: 'Reproducción en papel de alta calidad de la serie Fluidez.',
    longDescription: 'Una pieza que explora el movimiento y la energía vibrante a través de trazos orgánicos y colores profundos.',
    image: '/images/portfolio/fluid-art/premonicion.webp',
    weight: 'A3 (29.7 x 42 cm)',
    ingredients: 'Papel Fine Art 300g, tintas pigmentadas.',
    flavors: [
      { id: 'tecnica', name: 'Giclée', description: 'Impresión de alta calidad', isSignature: true },
    ],
  },
  {
    id: 'la-luz',
    slug: 'la-luz',
    name: 'Original: La Luz',
    pieces: 1,
    price: 25000,
    available: true,
    isFeatured: true,
    description: 'Obra original técnica mixta sobre lienzo.',
    longDescription: 'Exploración de la luz y el contraste en gran formato. Materia e inmaterialidad se dan la mano.',
    image: '/images/portfolio/figurativo/La-luz-y-la-sombra-equilibran-la-mente-y-el-espiritu-70x100.webp',
    weight: '70 x 100 cm',
    ingredients: 'Acrílico, óleo y texturas sobre lienzo.',
    flavors: [
      { id: 'tecnica-mixta', name: 'Técnica Mixta', description: 'Múltiples capas de expresión' },
    ],
  },
  {
    id: 'porto-mystic',
    slug: 'porto-mystic',
    name: 'Lámina: Porto Mystic',
    pieces: 1,
    price: 3500,
    available: true,
    isFeatured: true,
    badge: 'premium',
    description: 'Serie limitada inspirada en el misticismo de Oporto.',
    longDescription: 'Un homenaje a las raíces y la influencia local. El misticismo gallego-portugués envuelto en trazos contemporáneos.',
    image: '/images/portfolio/fluid-art/las-aguas-resurreccion.webp',
    weight: 'A4 (21 x 29.7 cm)',
    ingredients: 'Papel texturizado premium.',
    flavors: [
      { id: 'misticismo', name: 'Esoterismo', description: 'Trazos cargados de significado', isSignature: true },
    ],
  },
]

export const NAVIGATION = [
  { label: 'home', href: '/' },
  { label: 'giftPacks', href: '/shop' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
] as const
