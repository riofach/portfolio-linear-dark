# Phase 01: Foundation & Navigation - Research

**Researched:** 2026-02-05
**Domain:** Next.js 16 Architecture, Styling & Animation
**Confidence:** HIGH

## Summary

Phase 01 focuses on establishing a "Bleeding Edge" foundation using the absolute latest versions of core libraries. The research confirms significant architectural shifts in **Tailwind CSS v4** (CSS-first configuration), **Motion v12** (renamed from `framer-motion` to `motion`), and **React Lenis** (consolidated into the `lenis` package).

The standard approach for this phase involves a "Zero-Config" mentality where possible. Tailwind v4 removes `tailwind.config.js` in favor of CSS variables. Motion v12 introduces a new import strategy (`motion/react`) and specific patterns for React Server Components (RSC). React Lenis now lives within the main `lenis` package and requires specific `layout.tsx` integration to prevent hydration mismatches.

**Primary recommendation:** Adopt the "CSS-First" configuration for Tailwind v4 and the new `motion/react` import paths immediately to avoid technical debt.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `next` | 16.x | Framework | App Router, RSC, Server Actions |
| `tailwindcss` | v4.x | Styling | Performance, CSS-first config, @property support |
| `motion` | v12.x | Animation | The new home of Framer Motion, smaller bundle |
| `lenis` | latest | Smooth Scroll | Momentum scrolling, consolidated React wrapper |
| `clsx`, `tailwind-merge` | latest | Utilities | Standard for dynamic class merging |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `@tailwindcss/postcss` | v4.x | Build Tool | Required for Next.js integration with v4 |
| `postcss` | latest | CSS Processor | Required peer dependency |
| `lucide-react` | latest | Icons | Standard icon set |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `framer-motion` | `motion` | `motion` is the v12 upgrade; `framer-motion` is legacy/deprecated |
| `@studio-freight/react-lenis` | `lenis` | Package was renamed and moved to `@darkroom.engineering` scope (archived) then to `lenis` |

**Installation:**
```bash
npm install tailwindcss @tailwindcss/postcss postcss motion lenis clsx tailwind-merge lucide-react
```

## Architecture Patterns

### Recommended Project Structure
```
src/
├── app/
│   ├── layout.tsx       # Root layout with Lenis & Fonts
│   ├── globals.css      # Tailwind v4 setup & Theme Variables
│   └── page.tsx         # Landing page
├── components/
│   ├── ui/              # Reusable UI components
│   └── layout/          # Header, Footer, Navigation
├── lib/
│   └── utils.ts         # cn() utility
└── data/
    └── config.ts        # Global site data
```

### Pattern 1: Tailwind v4 Setup (CSS-First)
**What:** Configuring Tailwind directly in CSS instead of JS.
**When to use:** Always for v4.
**Example:**
```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --font-sans: var(--font-geist-sans);
  --color-zinc-950: #09090b;
  
  /* Linear-Dark Theme Config */
  --color-background: var(--color-zinc-950);
  --color-foreground: #ffffff;
}
```

### Pattern 2: Motion v12 Imports
**What:** Using the new package entry points.
**When to use:** All animations.
**Example:**
```typescript
// Client Component
import { motion } from "motion/react"

// Server Component (if needed, though usually you wrap)
import * as motion from "motion/react-client"
```

### Pattern 3: React Lenis Layout Wrapper
**What:** Global smooth scrolling wrapper.
**When to use:** In `app/layout.tsx`.
**Example:**
```typescript
// app/layout.tsx
import { ReactLenis } from 'lenis/react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis root>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ReactLenis>
  )
}
```

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Smooth Scroll | Custom `wheel` listener | `lenis` | Accessibility, performance, touch support |
| Scroll Animations | `useEffect` + `window.scrollY` | `useScroll` (Motion) | Optimized, runs off main thread where possible |
| Class Merging | Template literals | `cn()` (clsx + tw-merge) | Handles Tailwind conflicts correctly |

## Common Pitfalls

### Pitfall 1: Legacy Tailwind Directives
**What goes wrong:** Using `@tailwind base;` etc. in v4.
**Why it happens:** Old tutorials.
**How to avoid:** Use `@import "tailwindcss";` only.
**Warning signs:** CSS build errors or unstyled pages.

### Pitfall 2: Hydration Mismatch with Lenis
**What goes wrong:** Console errors about extra attributes on `html` or `body`.
**Why it happens:** Lenis injects classes/styles.
**How to avoid:** Use `suppressHydrationWarning` on `html` tag if necessary, or ensure `ReactLenis` is configured with `root` prop correctly wrapping the html/body.

### Pitfall 3: Importing `framer-motion`
**What goes wrong:** Bloated bundle or version conflicts.
**Why it happens:** Habits.
**How to avoid:** Uninstall `framer-motion` if present. Only use `motion`.

## Code Examples

### Smart Header (Hide on Scroll)
```typescript
"use client"
import { useState } from "react"
import { motion, useScroll, useMotionValueEvent } from "motion/react"

export function Header() {
  const [hidden, setHidden] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
  })

  return (
    <motion.header
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 w-full z-50 glass-effect"
    >
      {/* Content */}
    </motion.header>
  )
}
```

### Geist Font Setup
```typescript
// app/layout.tsx
import { Geist } from "next/font/google"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={geist.variable}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
```

## Sources

### Primary (HIGH confidence)
- Tailwind CSS v4 Official Blog/Docs (CSS-first config)
- Motion.dev Documentation (v12 upgrade guide)
- Lenis GitHub/NPM (Package consolidation to `lenis`)
- Next.js Docs (Font optimization)

### Secondary (MEDIUM confidence)
- Community tutorials for "Next.js 16 + Tailwind v4" setups.
