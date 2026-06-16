# CLAUDE.md: Development Guidelines for El Templo Digital de Alana

This document outlines development patterns, code style, and conventions for El Templo Digital de Alana. It's designed for both Claude (AI assistant) and human developers to maintain consistency and quality.

## 1. Project Stack Overview

**Core Technology Stack:**
- **Framework**: Next.js 14+ with TypeScript 5 (strict mode)
- **UI Framework**: React 18 with functional components
- **Styling**: Tailwind CSS 3 with a custom brand palette (white / black / grey)
- **Animation**: Framer Motion
- **Type Safety**: TypeScript with strict mode enforced
- **Module System**: ESM imports exclusively
- **Node Version**: 18+ (minimum)

## 2. Code Style & Conventions

### 2.1 Formatting & Structure

**Indentation & Whitespace:**
- **2-space indentation** enforced via `.editorconfig`
- No tabs; spaces only
- Trailing whitespace removed
- Files end with newline
- Line length: prefer readable lengths (aim for ~120 chars where possible)

**File Naming:**
- Components: PascalCase (e.g., `Header.tsx`, `PortfolioSection.tsx`)
- Utilities/helpers: camelCase (e.g., `formatPrice.ts`, `validateEmail.ts`)
- Types/interfaces: PascalCase (e.g., `User.ts`, `ProductProps.ts`)
- CSS/Style files: kebab-case (e.g., `brand-colors.css`)
- Pages/Routes: kebab-case (e.g., `portfolio.tsx`, `about.tsx`)

**Import Organization:**
- External imports first (React, Next.js, dependencies)
- Relative imports second (@/ paths)
- Import order: modules → utils → types → components
- Alphabetical within groups
- Blank line between groups

### 2.2 Component Patterns

**Functional Components Only:**
- All components are functional components
- Use React hooks for state and effects
- No class components
- Use `async` for server components

**Component Structure:**
```typescript
import type { ReactNode } from 'react'

interface ComponentNameProps {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function ComponentName({
  children,
  className,
  onClick,
}: ComponentNameProps) {
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}
```

### 2.3 TypeScript Practices

**Strict Mode Enforced:**
- All files must compile with `strict: true`
- No implicit `any` types
- Proper typing for all React components
- Path aliases configured for clean imports

**Type Definitions:**
- Define types in `src/types/` directory
- Export common types from `src/types/index.ts`
- Use interfaces for object shapes
- Use types for unions and complex shapes
- Avoid `any`; use `unknown` with type guards if necessary

### 2.4 Styling Approach

**Tailwind CSS:**
- Utility-first approach for all styling
- No component-specific CSS files
- Use custom colors defined in `src/styles/variables.css`
- Responsive design via Tailwind breakpoints

**Brand Colors (Tailwind tokens):**
- `alana-white` (#FFFFFF): Primary background
- `alana-black` (#000000): Text and detail
- `alana-grey` (#F0EEED): Section backgrounds

Additional design tokens (spacing, shadows, transitions) live as CSS custom
properties in `src/styles/variables.css`.

### 2.5 Async/Await Pattern

- Prefer async/await over .then() chains
- Server components use async by default
- Handle errors with try/catch blocks
- Use proper error messages and logging

## 3. Project Structure

```
src/
├── app/               # Next.js App Router pages
├── components/        # React components
├── lib/              # Utilities and constants
├── types/            # TypeScript types
└── styles/           # CSS variables and globals
```

## 4. Git Workflow

- Create new branches for each feature: `feature/name`
- Never push directly to main
- Atomic, descriptive commits
- PRs with clear summaries
- TypeScript and ESLint must pass

## 5. Common Commands

```bash
npm run dev           # Development server
npm run build         # Production build
npm run start         # Run production build
npx tsc --noEmit      # Type check
npm run lint          # ESLint
```

## 6. Brand Aesthetic

- **Feeling**: Minimalist, editorial, artistic, spiritual
- **Colors**: White, black and warm grey
- **Typography**: Helvetica LT Ultra Compressed (headings), Cormorant Garamond (body)
- **Spacing**: Generous whitespace, large typographic formats
- **Reference**: Alana's Canva portfolio

## 7. Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [TypeScript](https://www.typescriptlang.org)
- See PROJECT.md for project context

---

**Version**: 1.0 | **Last Updated**: 2024
