export const BRAND = {
  name: 'El Templo Digital de Alana',
  tagline: 'Universo Creativo & Arte Multidisciplinar',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://el-templo-digital.vercel.app',
} as const

export const NAVIGATION = [
  { label: 'home', href: '/' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
] as const
