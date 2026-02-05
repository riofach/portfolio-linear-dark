# Stack Research

**Domain:** Personal Portfolio Website
**Researched:** 2026-02-05
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Next.js | ^16.1.0 | Framework | The standard for React applications in 2025. Version 16 brings Turbopack as default (faster builds), stabilized Cache Components, and built-in MCP support for better tooling. |
| React | ^19.0.0 | UI Library | Required by Next.js 16. Introduces Actions and new hooks that simplify data mutation and state management, reducing the need for external state libraries in simple portfolios. |
| Tailwind CSS | ^4.0.0 | Styling | Version 4 is a ground-up rewrite (Oxide engine) with zero-config setup, CSS-first configuration, and significant performance improvements. It is the industry standard for utility-first CSS. |
| Motion | ^12.0.0 | Animation | Formerly `framer-motion`. The gold standard for declarative animations in React. Essential for the "Linear-style" micro-interactions and layout transitions. |
| TypeScript | ^5.7.0 | Language | Essential for type safety and developer experience. Standard in the Next.js ecosystem. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| shadcn/ui | Latest | UI Components | For accessible, unstyled, copy-paste components. It has full support for Tailwind v4 and is perfect for building a "Linear-like" aesthetic quickly. |
| lucide-react | Latest | Icons | The default icon set for shadcn/ui. Clean, consistent SVG icons that match the minimal aesthetic. |
| clsx / tailwind-merge | Latest | Class Utilities | Essential for conditionally joining Tailwind classes and resolving conflicts, especially when creating reusable components. |
| next-themes | Latest | Dark Mode | The standard solution for theme switching (light/dark/system) in Next.js applications. |
| nuqs | Latest | URL State | Excellent for managing state in the URL (e.g., portfolio filters) without complex context or effect chains. |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| Biome | Linting/Formatting | A faster, unified alternative to ESLint + Prettier. Gaining significant traction in 2025 for its speed and zero-config philosophy. |
| Vercel | Deployment | The native platform for Next.js. Offers zero-config deployment, edge networks, and seamless integration with Next.js features like PPR. |

## Installation

```bash
# Core
npm install next@latest react@latest react-dom@latest motion

# Tailwind v4 (CSS-first configuration)
npm install tailwindcss@next @tailwindcss/postcss postcss

# Utilities
npm install clsx tailwind-merge lucide-react next-themes

# Dev dependencies
npm install -D typescript @types/react @types/node @types/react-dom
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Tailwind CSS v4 | Tailwind CSS v3 | If you rely on legacy plugins that haven't been updated for v4 yet. However, v4 is highly recommended for new projects. |
| Motion | GSAP | If you need extremely complex, timeline-based sequencing that goes beyond UI transitions. Motion is better for React component lifecycle animations. |
| Biome | ESLint + Prettier | If you need very specific linting rules that Biome doesn't support yet, or if you are working in a legacy codebase with established configs. |
| Content Collections | MDXRemote | If you want type-safe content management for your portfolio projects without a full CMS. |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| `framer-motion` (old package) | The package has been renamed to `motion`. Using the old package misses out on v12 performance updates and new features. | `motion` |
| Create React App (CRA) | Deprecated and lacks modern features like SSR, RSC, and optimized builds. | Next.js (via `create-next-app`) |
| CSS-in-JS (styled-components) | Adds runtime overhead and doesn't work well with React Server Components (RSC) in Next.js app router. | Tailwind CSS |
| Redux / Zustand | Overkill for a personal portfolio. Most state should be local or URL-based. | React State / URL State (`nuqs`) |

## Stack Patterns by Variant

**If building a content-heavy portfolio (blog/case studies):**
- Use **MDX** with **Content Collections** (or similar type-safe wrapper).
- Because it provides better DX and type safety for your content than raw MDX.

**If aiming for "Linear" aesthetic:**
- Use **Geist Sans** (font).
- Use **Motion** for layout animations (`layout` prop).
- Use subtle border colors (e.g., `border-white/10` in dark mode) and glassmorphism (backdrops).

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| Next.js 16 | React 19 | Next.js 16 relies on React 19 features. |
| shadcn/ui | Tailwind v4 | Ensure you follow the specific Tailwind v4 installation guide for shadcn/ui. |
| motion | React 18+ | Works best with React 18/19 concurrent features. |

## Sources

- [Next.js Blog] — Verified Next.js 16 release and features.
- [Tailwind CSS Blog] — Verified Tailwind CSS v4.0 release and "Oxide" engine.
- [Motion.dev Changelog] — Verified rename from `framer-motion` to `motion` and v12 release.
- [shadcn/ui Docs] — Verified Tailwind v4 support and "May 2025" updates.

---
*Stack research for: Personal Portfolio Website*
*Researched: 2026-02-05*
