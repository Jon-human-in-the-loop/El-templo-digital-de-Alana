import type { ReactNode } from 'react'

interface PageHeaderProps {
  eyebrow: string
  title: string
  children?: ReactNode
}

/** Editorial page header shared by all inner pages. */
export default function PageHeader({ eyebrow, title, children }: PageHeaderProps) {
  return (
    <section className="px-6 md:px-12 pt-16 md:pt-24 pb-10 border-b border-black">
      <p className="font-sans text-xs uppercase tracking-[0.25em] text-black/40 mb-3">{eyebrow}</p>
      <h1 className="font-heading uppercase leading-none" style={{ fontSize: 'clamp(2.5rem, 8vw, 7rem)' }}>
        {title}
      </h1>
      {children && <div className="mt-6 max-w-2xl">{children}</div>}
    </section>
  )
}
