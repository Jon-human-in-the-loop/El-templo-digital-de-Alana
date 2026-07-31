import type { Localized } from '@/types/content'

export type CvMilestone = {
  /** Años, tal cual se muestran. No se traduce. */
  year: string
  label: Localized
  description: Localized
}

/**
 * CURRICULUM VITAE — editable.
 *
 * Cada hito tiene su texto en los tres idiomas. Si falta una traducción se
 * muestra el español.
 */
export const CV_MILESTONES: CvMilestone[] = [
  {
    year: '2012 — 2019',
    label: {
      es: 'Arquitectura y Urbanismo',
      en: 'Architecture and Urbanism',
      pt: 'Arquitetura e Urbanismo',
    },
    description: {
      es: 'Universidad Nacional de Córdoba. Arquitecta y Urbanista.',
      en: 'Universidad Nacional de Córdoba. Architect and Urban Planner.',
      pt: 'Universidad Nacional de Córdoba. Arquiteta e Urbanista.',
    },
  },
  {
    year: '2018 — 2019',
    label: {
      es: 'La Otra Cara',
      en: 'La Otra Cara',
      pt: 'La Otra Cara',
    },
    description: {
      es: 'Colectivo de artistas autogestionado en Córdoba.',
      en: 'Self-managed artist collective in Córdoba.',
      pt: 'Coletivo de artistas autogerido em Córdoba.',
    },
  },
  {
    year: '2022',
    label: {
      es: 'Ciclo Humedales',
      en: 'Ciclo Humedales',
      pt: 'Ciclo Humedales',
    },
    description: {
      es: 'Artista visual en el documental — «Se ondula el éter que ata las superficies».',
      en: 'Visual artist for the documentary — "Se ondula el éter que ata las superficies".',
      pt: 'Artista visual no documentário — «Se ondula el éter que ata las superficies».',
    },
  },
  {
    year: '2022 — 2025',
    label: {
      es: 'Portadas de discos',
      en: 'Album covers',
      pt: 'Capas de discos',
    },
    description: {
      es: 'Portadas para Saudade, Rodrigo Bobadilla Oliva, Sabina Belén y Liyah Dalani.',
      en: 'Covers for Saudade, Rodrigo Bobadilla Oliva, Sabina Belén and Liyah Dalani.',
      pt: 'Capas para Saudade, Rodrigo Bobadilla Oliva, Sabina Belén e Liyah Dalani.',
    },
  },
  {
    year: '2023 — 2024',
    label: {
      es: 'Libro Sonoro',
      en: 'Libro Sonoro',
      pt: 'Libro Sonoro',
    },
    description: {
      es: 'Ilustradora y creadora de video · Con Rodrigo Bobadilla Oliva y Rocío Laria.',
      en: 'Illustrator and video maker · With Rodrigo Bobadilla Oliva and Rocío Laria.',
      pt: 'Ilustradora e criadora de vídeo · Com Rodrigo Bobadilla Oliva e Rocío Laria.',
    },
  },
  {
    year: '2023 — hoy',
    label: {
      es: 'Tatuadora · The Inky Club',
      en: 'Tattoo artist · The Inky Club',
      pt: 'Tatuadora · The Inky Club',
    },
    description: {
      es: 'Porto. Black work y grabado con temáticas espirituales. «El talismán de poder».',
      en: 'Porto. Black work and engraving with spiritual themes. "El talismán de poder".',
      pt: 'Porto. Black work e gravura com temáticas espirituais. «El talismán de poder».',
    },
  },
  {
    year: '2025 — hoy',
    label: {
      es: 'Ferias, flash days y exposiciones',
      en: 'Fairs, flash days and exhibitions',
      pt: 'Feiras, flash days e exposições',
    },
    description: {
      es: 'Activa en el circuito de arte de Porto y Europa.',
      en: 'Active in the Porto and European art circuit.',
      pt: 'Ativa no circuito de arte do Porto e da Europa.',
    },
  },
]
