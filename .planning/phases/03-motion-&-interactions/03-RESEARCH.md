# Phase 03: Motion & Interactions - Research

**Researched:** 2026-02-06
**Domain:** Animation & Micro-interactions
**Confidence:** HIGH

## Summary

This phase focuses on applying the "linear-dark" motion language to the existing portfolio. The goal is to enhance the experience with subtle, physics-based animations without modifying the static layout. The implementation will use `motion` (formerly framer-motion) v12+.

**Crucial findings:**
1.  **Scroll Engine Conflict:** The project currently uses `lenis` in `src/app/layout.tsx`. This **MUST** be removed to satisfy the "Native browser scroll" constraint.
2.  **Next.js App Router Transitions:** Standard `layout.tsx` does not trigger exit animations. We must use `src/app/template.tsx` to handle page transitions (`/allprojects` future-proofing).
3.  **Motion v12:** The library has been renamed. Imports should use `motion/react`.

**Primary recommendation:** Implement a centralized `motion.ts` config for "Linear" physics and use a `template.tsx` strategy for page transitions.

## Standard Stack

The established libraries for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `motion` | ^12.31.0 | Animation Primitives | **Existing Dependency.** The gold standard for React animation. |
| `clsx` / `tailwind-merge` | Existing | Class utilities | For conditional styling of motion components. |

### Configuration (To Be Added)
| File | Purpose |
|------|---------|
| `src/lib/motion.ts` | Centralized constants for springs, durations, and staggers. |
| `src/app/template.tsx` | Page transition wrapper (Next.js App Router specific). |

### Libraries to REMOVE
| Library | Reason |
|---------|--------|
| `lenis` | **Constraint Violation:** The requirements explicitly state "Native browser scroll". Current usage in `layout.tsx` must be removed. |

**Installation:**
```bash
# motion is already installed.
# If newer features needed:
npm install motion@latest
```

## Architecture Patterns

### Recommended Project Structure
```
src/
├── app/
│   ├── template.tsx       # Handles page crossfade transitions
│   └── layout.tsx         # Remove <ReactLenis> wrapper
├── components/
│   ├── ui/
│   │   ├── motion-wrapper.tsx # Reusable <FadeIn>, <Stagger> components
│   │   └── hero-text.tsx      # Specific hero animation logic
├── lib/
│   └── motion.ts          # Shared animation constants
```

### Pattern 1: Page Transitions (App Router)
**What:** Using `template.tsx` to ensure unique key mounting on route change.
**When to use:** For the requested crossfade transitions.
**Example:**
```typescript
// src/app/template.tsx
"use client"
import { motion } from "motion/react"

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  )
}
```

### Pattern 2: "Play Once" Scroll Reveal
**What:** Elements fade up when entering viewport, but don't replay.
**Config:** `viewport={{ once: true, margin: "-10%" }}` (10% from bottom).
**Example:**
```typescript
// src/components/ui/fade-in.tsx
"use client"
import { motion } from "motion/react"
import { SPRING_LOW } from "@/lib/motion"

export const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ ...SPRING_LOW, delay }}
  >
    {children}
  </motion.div>
)
```

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| **Intersection Observer** | Custom `useEffect` hooks | `whileInView` prop | Built-in, optimized, handles disconnects. |
| **Physics Math** | Manual spring calculations | `type: "spring"` | Motion's physics engine is battle-tested. |
| **Smooth Scroll** | Custom scroll jacking | **Native Scroll** | Requirement is native; avoid Lenis or custom implementations. |

## Common Pitfalls

### Pitfall 1: Layout Thrashing with `layout.tsx`
**What goes wrong:** Wrapping page content in `layout.tsx` for transitions doesn't work because layouts don't remount on navigation.
**How to avoid:** Use `template.tsx` which remounts on every navigation.

### Pitfall 2: Lenis Conflict
**What goes wrong:** `Lenis` intercepts scroll events. The requirement specifies "Native browser scroll".
**How to avoid:** **Action:** Remove `ReactLenis` from `src/app/layout.tsx`.

### Pitfall 3: FOUC (Flash of Unstyled Content)
**What goes wrong:** Content flashes before animation starts.
**How to avoid:** Set `initial` styles in `motion.div`. Next.js 16 + Motion v12 usually handles SSR hydration well, but ensure components are `"use client"`.

## Code Examples

### "Linear" Physics Config
The "Subtle Spring" signature of Linear.
```typescript
// src/lib/motion.ts
export const SPRING_SUBTLE = {
  type: "spring",
  stiffness: 300,
  damping: 30,
  mass: 1
}

export const STAGGER_CHILDREN = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05
    }
  }
}
```

### Glow Card Hover
A performant border glow without layout shifts.
```typescript
<motion.div
  className="relative p-[1px] rounded-xl overflow-hidden bg-transparent"
  whileHover="hover"
>
  {/* Gradient Border Layer */}
  <motion.div
    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0"
    variants={{ hover: { opacity: 1 } }}
  />
  {/* Content Layer */}
  <div className="relative bg-[#0a0a0a] rounded-xl h-full w-full p-4">
    {children}
  </div>
</motion.div>
```

## State of the Art

| Old Approach | Current Approach (Motion v12) | Impact |
|--------------|-------------------------------|--------|
| `import { motion } from "framer-motion"` | `import { motion } from "motion/react"` | Unified package name. |
| Manual cleanup of `AnimatePresence` | `template.tsx` | Native Next.js App Router support. |
| `useViewportScroll` | `useScroll` | Simplified hooks API. |

## Open Questions

1.  **Lenis Removal Scope**
    *   **What we know:** It's in `layout.tsx`.
    *   **Recommendation:** Remove the import and wrapper. Verify `package.json` cleanup later.

2.  **Reduced Motion**
    *   **Recommendation:** Use `useReducedMotion` hook or `motion.div`'s `transition={{ duration: 0 }}` for users who prefer reduced motion.

## Sources

### Primary (HIGH confidence)
- **Local Codebase:** Verified `lenis` usage in `src/app/layout.tsx`.
- **Motion Docs:** Verified v12 import syntax and `whileInView` API.

### Secondary (MEDIUM confidence)
- **Community Patterns:** "Linear" spring settings typically fall in the `stiffness: 200-400`, `damping: 20-40` range.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Existing dependencies confirmed.
- Architecture: HIGH - Next.js App Router patterns are well-defined.
- Pitfalls: HIGH - Lenis conflict is concrete.

**Research date:** 2026-02-06
