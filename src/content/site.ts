import type { Localized } from '@/types/content'

/**
 * Short standing phrases that appear in more than one place.
 * Kept verbatim in the language they were written in and translated for the rest.
 */

/**
 * Home — centred under the carousel.
 * The quotation marks are part of the text so each language can use its own.
 */
export const VOICE_QUOTE: Localized = {
  es: '«Puedo alzar mi voz alto porque Dios la sostiene»',
  en: '“I can raise my voice loud because God sustains it”',
  pt: '«Posso erguer a minha voz alto porque Deus a sustenta»',
}

/** Home + Contact — open call for collaborations. */
export const COLLABORATION_NOTE: Localized = {
  en: 'I am open to exciting projects and creative collaborations, feel free to get in touch',
  es: 'Estoy abierta a proyectos entusiasmantes y colaboraciones creativas, no dudes en escribirme',
  pt: 'Estou aberta a projetos entusiasmantes e colaborações criativas, não hesites em escrever-me',
}

/** CTA that routes to the contact page. */
export const ART_INQUIRIES_CTA: Localized = {
  en: 'Click here for art inquiries',
  es: 'Consultas sobre obra: haz clic aquí',
  pt: 'Consultas sobre obra: clica aqui',
}

export const INSTAGRAM_HANDLE = '@alanazarzairaeta'
export const INSTAGRAM_URL = 'https://www.instagram.com/alanazarzairaeta/'
