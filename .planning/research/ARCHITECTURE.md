# Architecture Research

**Domain:** Personal Portfolio Website
**Researched:** 2026-02-05
**Confidence:** HIGH

## Standard Architecture

### System Overview

For a modern personal portfolio, the architecture is a **Single Page Application (SPA) hybrid** using Next.js App Router. It leans heavily on Server Components for initial load performance and SEO, while utilizing Client Components for interactive elements (Motion animations, form handling).

```
┌─────────────────────────────────────────────────────────────┐
│                       Browser / Client                       │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐     │
│  │    Layout    │───│   Template   │───│     Page     │     │
│  │ (Persistent) │   │ (Animations) │   │   (Content)  │     │
│  └──────┬───────┘   └──────┬───────┘   └──────┬───────┘     │
│         │                  │                  │             │
│   ┌─────▼──────┐     ┌─────▼──────┐     ┌─────▼──────┐      │
│   │ Navigation │     │ Framer Motion│   │  Sections  │      │
│   └────────────┘     └────────────┘     └────────────┘      │
├─────────────────────────────────────────────────────────────┤
│                        Next.js Server                        │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐   ┌──────────────┐   ┌──────────────┐     │
│  │    Render    │   │ Server Action│   │  Static Gen  │     │
│  │     Tree     │   │   (Email)    │   │    (SSG)     │     │
│  └──────────────┘   └──────┬───────┘   └──────────────┘     │
│                            │                                │
│                     ┌──────▼───────┐                        │
│                     │ Email Service│                        │
│                     │(Resend/SMTP) │                        │
│                     └──────────────┘                        │
└─────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| **Root Layout** | Global styles, fonts, metadata, providers | `app/layout.tsx` with `<html>` and `<body>` tags. |
| **Motion Template** | Page transition orchestration | `app/template.tsx` wrapping children in `<AnimatePresence>`. |
| **Section Components** | Content blocks (Hero, About, Projects) | Client Components (if animated) or Server Components (if static text). |
| **UI Primitives** | Reusable atoms (Buttons, Cards, Inputs) | `components/ui/` (often standard shadcn/ui patterns). |
| **Contact Action** | Handling form submission security | `app/actions.ts` (Next.js Server Action). |

## Recommended Project Structure

We follow a **Feature-Sliced/Modular** hybrid standard for Next.js 15+ portfolios.

```
src/
├── app/
│   ├── layout.tsx         # Global layout (Providers, Metadata)
│   ├── template.tsx       # Page transitions (Framer Motion wrapper)
│   ├── page.tsx           # Main single-page scroll entry
│   ├── globals.css        # Tailwind directives & global variables
│   └── actions.ts         # Server Actions (Contact form logic)
├── components/
│   ├── ui/                # Generic UI primitives (Button, Input, Card)
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── layout/            # Layout-specific (Header, Footer, Nav)
│   │   ├── navbar.tsx
│   │   └── footer.tsx
│   └── sections/          # Major homepage sections
│       ├── hero.tsx
│       ├── about.tsx
│       ├── projects.tsx
│       ├── skills.tsx
│       └── contact.tsx
├── lib/
│   ├── utils.ts           # cn() helper for Tailwind
│   └── animations.ts      # Shared Framer Motion variants
├── hooks/
│   └── use-scroll-spy.ts  # For active nav link highlighting
└── public/
    ├── images/            # Project screenshots
    └── resume.pdf         # Downloadable assets
```

### Structure Rationale

- **`src/app`**: Keeps routing logic separate from business logic.
- **`components/sections`**: Portfolios are "Section-heavy". Grouping big blocks like `Hero` or `About` makes the `page.tsx` clean and readable (just a composition of sections).
- **`components/ui`**: Separates reusable "atoms" from specific "organisms". This is critical if using shadcn/ui.
- **`lib/animations.ts`**: Centralizing motion variants (`fadeIn`, `slideUp`) ensures consistency across the site and reduces code duplication.

## Architectural Patterns

### Pattern 1: The Motion Template Wrapper

**What:** Using `template.tsx` instead of `layout.tsx` for transitions.
**When to use:** When you need animations that trigger on route navigation (or in a single-page app, when mounting distinct views).
**Trade-offs:** `template.tsx` remounts on every navigation, which is perfect for exit/enter animations but bad if you want to preserve state (like a chat window). For a portfolio, it's usually desired.

**Example:**
```typescript
// src/app/template.tsx
'use client'

import { motion } from 'framer-motion'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ ease: 'easeInOut', duration: 0.5 }}
    >
      {children}
    </motion.div>
  )
}
```

### Pattern 2: Component-Level Animation Composition

**What:** Defining animation "variants" in a separate file and passing them to components.
**When to use:** To avoid cluttering JSX with complex `initial={{...}} animate={{...}}` objects.

**Example:**
```typescript
// src/lib/animations.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

// src/components/sections/Hero.tsx
import { motion } from 'framer-motion'
import { fadeInUp } from '@/lib/animations'

export const Hero = () => (
  <motion.section {...fadeInUp}>
    <h1>Hello</h1>
  </motion.section>
)
```

## Data Flow

### Contact Form Flow (Server Actions)

Portfolios rarely have complex data, but the "Contact" form is the dynamic exception. We use Next.js Server Actions for this to avoid creating a separate API route.

```
[User] -> [ContactForm (Client Component)]
               ↓ (onSubmit)
        [Server Action (app/actions.ts)]
               ↓ (Validates with Zod)
        [Email Service (Resend/NodeMailer)]
               ↓ (Returns success/error)
        [ContactForm] -> [Toast Notification]
```

## Scaling Considerations

For a personal portfolio, scaling is rarely about "millions of users" and more about "content maintainability."

| Scale | Architecture Adjustments |
|-------|--------------------------|
| **Simple (MVP)** | Hardcoded content directly in components (`<p>I build apps...</p>`). |
| **Maintainable** | Extract data to JSON/TS constants (`src/data/projects.ts`). Recommended for most portfolios. |
| **Dynamic** | Fetch content from a CMS (Sanity, Notion) or Markdown files (`content/projects/*.md`). Overkill for a simple "About Me" but good if you blog frequently. |

## Anti-Patterns

### Anti-Pattern 1: "Use Client" Everywhere

**What people do:** Marking the root `layout.tsx` or `page.tsx` as `'use client'` to make animations work easily.
**Why it's wrong:** It forces the entire application to be a client-side bundle, losing Next.js optimization benefits (SEO, initial load speed).
**Do this instead:** Isolate animated parts into smaller components (e.g., `<AnimatedHeading />`) or use `template.tsx` for page-level transitions.

### Anti-Pattern 2: Prop-Drilling Configuration

**What people do:** Passing `theme`, `links`, or `authorName` down through 5 layers of components.
**Why it's wrong:** Makes refactoring painful.
**Do this instead:** Use specific constants files (e.g., `src/config/site.ts`) and import them directly where needed.

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| **Resend / SendGrid** | Server Action | Never expose API keys in client-side code. Use env vars on server. |
| **Google Analytics** | `next/third-parties` | Use the optimized package provided by Next.js. |

## Sources

- [Next.js App Router Documentation](https://nextjs.org/docs)
- [Framer Motion Guide for Next.js](https://www.framer.com/motion/nextjs/)
- [Best Practices for Organizing Next.js](https://dev.to/bajrayejoon/best-practices-for-organizing-your-nextjs-15-2025-53ji)
- [Common Framer Motion Pitfalls](https://www.imcorfitz.com/posts/adding-framer-motion-page-transitions-to-next-js-app-router)

---
*Architecture research for: Personal Portfolio Website*
*Researched: 2026-02-05*
