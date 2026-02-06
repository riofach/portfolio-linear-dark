# Phase 04: Projects Data Integration - Research

**Researched:** 2026-02-06
**Domain:** Next.js Component Architecture & Data Integration
**Confidence:** HIGH

## Summary

This phase focuses on refactoring the `Projects` section to be data-driven. The research confirms that the necessary infrastructure (`data/projects.ts`, `lib/motion.ts`, `ProjectCard.tsx`) exists but is currently disconnected or misaligned. The current `Projects.tsx` section uses hardcoded JSX with superior styling that must be ported to the reusable `ProjectCard.tsx` component before connecting the data.

**Primary recommendation:** Port the visual styles from `Projects.tsx` into `ProjectCard.tsx`, then map over `data/projects.ts` to render the grid.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `motion/react` | latest | Animation | Used globally for `StaggerContainer` and `FADE_UP`. |
| `lucide-react` | latest | Icons | Project standard for UI icons (`ArrowUpRight`). |
| `next/image` | 14+ | Images | Automatic optimization for project screenshots. |

## Architecture Patterns

### Component Composition
The "Smart Parent, Dumb Child" pattern is recommended here, but with Motion intelligence distributed:

1.  **Parent (`Projects.tsx`)**:
    *   **Responsibility**: Layout, Data Fetching (import), Entrance Orchestration.
    *   **Motion**: Wraps cards in `motion.div` with `FADE_UP` variant to hook into `StaggerContainer`.
2.  **Child (`ProjectCard.tsx`)**:
    *   **Responsibility**: Visual rendering, Hover interactions.
    *   **Motion**: Handles `whileHover` scaling and border effects internally.

### Recommended Structure
```tsx
// src/components/sections/Projects.tsx
<StaggerContainer className="grid...">
  {projects.map((project) => (
    <motion.div key={project.title} variants={FADE_UP}>
      <ProjectCard project={project} />
    </motion.div>
  ))}
</StaggerContainer>
```

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Entrance Stagger | Custom timeouts | `StaggerContainer` + `variants` | Already implemented in `ui/motion-wrapper` and `lib/motion` |
| Image Optimization | `<img>` tag | `next/image` | Performance, LCP optimization, automatic resizing |

## Common Pitfalls

### Pitfall 1: Style Regression
**What goes wrong:** The current `ProjectCard.tsx` has outdated styling (Zinc theme) compared to the hardcoded cards in `Projects.tsx` (Card Dark theme, Gradients).
**How to avoid:** Explicitly copy the classNames from `Projects.tsx` (lines 36-114) into `ProjectCard.tsx` during the refactor.
**Specific Styles to Preserve:**
*   `bg-card-dark` (not `bg-zinc-900`)
*   `border-white/10`
*   `hover:shadow-[0_0_30px_rgba(91,19,236,0.1)]`
*   Gradient overlay on images (`bg-gradient-to-t`)

### Pitfall 2: Client/Server Boundary
**What goes wrong:** Passing functions or non-serializable data to `ProjectCard`.
**How to avoid:** `data/projects.ts` is static JSON-serializable data. `ProjectCard` should remain a pure component (can be Server Component if no hooks used, but likely Client due to `whileHover` if using motion inside it).
**Note:** `Projects.tsx` is already `"use client"`, so `ProjectCard` will render on client regardless.

## Code Examples

### Target Style (To Port)
The `ProjectCard` must be updated to match this structure found in `Projects.tsx`:

```tsx
<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card-dark transition-colors hover:border-primary/50 hover:shadow-[0_0_30px_rgba(91,19,236,0.1)]">
  <div className="aspect-video w-full overflow-hidden bg-gray-900 relative">
     {/* Gradient Overlay - CRITICAL for text contrast */}
    <div className="absolute inset-0 bg-gradient-to-t from-card-dark to-transparent z-10 opacity-60"></div>
    <Image ... className="group-hover:scale-105" />
  </div>
  <div className="relative z-20 -mt-12 p-8 pt-0">
     {/* Content sits ON TOP of image via negative margin */}
     {/* Tags, Title, Description */}
  </div>
</div>
```

### Data Structure Compliance
Ensure `src/data/projects.ts` aligns with the UI needs.
*   **Tags:** Array of strings (e.g., `["React", "Tailwind"]`).
*   **Links:** `link` (Live) and `repoUrl` (Code - optional).
*   **Images:** Local paths in `public/` or remote URLs.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Verified in codebase.
- Architecture: HIGH - Verified against existing Motion patterns.
- Pitfalls: HIGH - Detected by diffing `Projects.tsx` and `ProjectCard.tsx`.

**Research date:** 2026-02-06
