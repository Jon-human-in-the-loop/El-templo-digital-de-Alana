import type { GiftPack } from '@/types'

export const BRAND = {
  name: 'El Templo Digital de Alana',
  tagline: 'Universo Creativo & Arte Multidisciplinar',
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || 'https://el-templo-digital.vercel.app',
} as const

/**
 * TIENDA — despublicada.
 *
 * El catálogo quedó vacío a propósito: lo que había era contenido heredado del
 * proyecto de alfajores y los precios de obra todavía no están definidos.
 * Mientras el array esté vacío, `/shop` muestra un aviso de «próximamente» y no
 * se genera ninguna página de producto. Para reabrir la tienda, cargá acá las
 * piezas reales con su precio.
 */
export const GIFT_PACKS: GiftPack[] = []
