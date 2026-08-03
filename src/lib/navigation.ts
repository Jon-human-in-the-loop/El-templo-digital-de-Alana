/**
 * Site navigation — las seis entradas del machete, en su orden: Galería,
 * Portfolio, Sobre mí, Exhibiciones, Blog y Contacto. A la home se vuelve por
 * el nombre del sitio en el header, así que no lleva entrada propia.
 *
 * `label` and `children[].label` are keys of the `nav` namespace in
 * src/i18n/messages/*.json. Shared by the header and by the home menu that sits
 * under the carousel, so both stay in sync.
 */
export type NavChild = {
  label: string
  href: string
}

export type NavItem = {
  label: string
  href: string
  children?: NavChild[]
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'gallery', href: '/gallery' },
  {
    label: 'portfolio',
    href: '/portfolio',
    children: [
      { label: 'figurativo', href: '/portfolio#figurativo' },
      { label: 'fluidArt', href: '/portfolio#fluid-art' },
    ],
  },
  {
    label: 'about',
    href: '/about',
    children: [
      { label: 'statement', href: '/about#statement' },
      { label: 'cv', href: '/about#cv' },
    ],
  },
  { label: 'exhibitions', href: '/exhibitions' },
  { label: 'blog', href: '/blog' },
  { label: 'contact', href: '/contact' },
]
