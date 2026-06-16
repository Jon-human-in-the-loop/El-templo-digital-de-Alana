# PROJECT.md: El Templo Digital de Alana

## Context

El Templo Digital de Alana is the digital portfolio of **Alana Zarzairaeta** — an Argentine multidisciplinary artist based in Porto, Portugal. The site is a window into her creative universe: painting, fluid art, illustration, tattoo and performance, all explored under the concept of "fluidity" and the materiality–immateriality binomial.

It is a **content / portfolio site** (not an e-commerce store): its purpose is to present her work, tell her story, and let people reach out.

## Goals

1. **Tell the artist's story** — communicate Alana's vision and the concept of "fluidity".
2. **Showcase the portfolio** — present her works (figurative, fluid art, watercolour) in an editorial, gallery-like layout.
3. **Build presence** — a multilingual (ES / PT / EN) online home for her practice.
4. **Enable contact** — a simple contact form plus direct WhatsApp and social links for inquiries and collaborations.

## Audience

- Art collectors, galleries and curators.
- People interested in tattoo work, commissions and collaborations.
- A Portuguese and international audience (hence ES / PT / EN).

## Visual & Aesthetic Direction

Minimalist editorial. White, black and warm grey, with large typographic formats, generous whitespace, and the artwork itself as the protagonist. Inspired directly by Alana's Canva portfolio.

### Brand Palette (Tailwind tokens)
- `alana-white` `#FFFFFF` — main backgrounds
- `alana-black` `#000000` — text and detail
- `alana-grey` `#F0EEED` — section backgrounds

### Typography
- **`font-heading`** → Helvetica LT Ultra Compressed (local) — titles and nav, uppercase.
- **`font-sans`** → Cormorant Garamond (Google Fonts) — body copy and editorial italics.

## Pages

- `/` — Home (hero, portfolio grid, about preview)
- `/about` — About Alana + statement / CV
- `/portfolio` — Full portfolio
- `/blog` — Blog / creative universe
- `/contact` — Contact form

All routes are localized under `/[locale]` for `es`, `pt` and `en`.

## Technical Architecture

| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript 5 (strict mode) |
| UI | React 18, functional components |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion |
| i18n | next-intl (ES / PT / EN) |
| Email | Resend (contact form) |
| Deployment | Vercel |

### Architectural notes
- **App Router** with React Server Components; client components only where interactivity is required.
- **Styling**: Tailwind utility-first; CSS custom properties live in `src/styles/variables.css`; no per-component CSS files.
- **i18n**: messages in `src/i18n/messages/{es,pt,en}.json`, locale routing via the `next-intl` middleware.
- **Contact**: `POST /api/contact` validates the form and sends an email through Resend.

### Development philosophy
- Functional components only.
- `async/await` over `.then()` chains.
- ESM imports exclusively.
- TypeScript strict mode; no implicit `any`.
- Accessibility: semantic HTML, WCAG compliance as a target.

## Local Development

```bash
npm install
npm run dev        # http://localhost:3000
```

**Quality checks**
```bash
npx tsc --noEmit   # Type checking
npm run lint       # ESLint
npm run build      # Production build
```

**Environment** (`.env.local`)
```env
RESEND_API_KEY=...
FROM_EMAIL=onboarding@resend.dev
TO_EMAIL=zarzairaetaalana@gmail.com
NEXT_PUBLIC_BASE_URL=https://el-templo-digital.vercel.app
```

## Deployment

Vercel, with automatic deployments from GitHub. The framework is auto-detected as Next.js. Add the environment variables above in the Vercel dashboard.

## Performance Targets
- Lighthouse 90+ across Performance, Accessibility, Best Practices and SEO.
- Optimized images via `next/image`.
- Static generation where possible; minimal client-side JavaScript.

## Possible Future Work
- Richer blog / CMS for posts.
- Newsletter signup.
- Analytics (e.g. GA4 or Vercel Analytics).
- SEO refinements (structured data, sitemap, per-work Open Graph images).

---

**Project Owner**: Alana Zarzairaeta
**Status**: Active — portfolio site
