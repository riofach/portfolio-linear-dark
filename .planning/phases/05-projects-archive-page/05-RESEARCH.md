# Phase 05: Projects Archive Page - Research

**Researched:** 2026-02-06
**Domain:** Next.js App Router, Tailwind CSS, Component Reusability
**Confidence:** HIGH

## Summary

This phase focuses on creating a dedicated archive page `/allprojects` that lists all projects in a grid layout. The implementation relies heavily on existing components (`Header`, `Footer`, `ProjectCard`) and data (`projects.ts`). Key work involves creating the new page structure, replicating the specific "archive" visual style (background patterns, header glow), and ensuring global navigation works correctly from this new subpage.

**Primary recommendation:** Create `src/app/allprojects/page.tsx` reusing `ProjectCard` and `projects.ts`, and patch `NavLinks` to handle cross-page navigation.

## Standard Stack

The established libraries/tools for this domain:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Next.js | 15+ (App Router) | Routing & Page Structure | Project standard |
| Tailwind CSS | v4 | Styling | Project standard |
| Framer Motion | 12+ | Animations | Project standard |

## Architecture Patterns

### Recommended Project Structure
```
src/
├── app/
│   └── allprojects/
│       └── page.tsx        # The new archive page
├── components/
│   ├── ui/
│   │   └── ProjectCard.tsx # Existing component to reuse
│   └── layout/
│       ├── Header.tsx      # Global header
│       └── NavLinks.tsx    # Needs update for cross-page nav
└── data/
    └── projects.ts         # Source of truth for project data
```

### Visual Replication
The reference `_reference/projects.html` uses specific background utility classes that need to be ported to the new page or `globals.css`:
- `bg-grid-pattern`: A CSS pattern likely missing from current global config.
- `bg-noise`: Matches `--image-noise` in `globals.css`.
- `hero-glow`: Radial gradient for the header section.

**Code Example (Page Background):**
```tsx
// src/app/allprojects/page.tsx
<main className="relative min-h-screen pt-24 pb-16 px-6 lg:px-8">
  {/* Background Elements */}
  <div className="absolute inset-0 bg-[image:var(--image-noise)] opacity-20 pointer-events-none"></div>
  <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] pointer-events-none"></div>
  <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[400px] w-[600px] rounded-full bg-primary/10 blur-[100px] pointer-events-none"></div>
  
  {/* Content */}
  <div className="mx-auto max-w-7xl relative z-10">
    {/* Header & Grid */}
  </div>
</main>
```

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Pagination | Complex server-side pagination | Client-side "Load More" (Visual) | Requirement is "visual only" for now; data set is small (4 items). |
| Card Component | New Card Component | `ProjectCard.tsx` | Existing component is 95% match; consistency is key. |
| Icons | SVG paths | `lucide-react` / `material-symbols` | Project uses Lucide; reference uses Material Symbols. Stick to Lucide for consistency unless strict visual match required. |

## Common Pitfalls

### Pitfall 1: Broken Navigation from Subpage
**What goes wrong:** The `NavLinks` component currently uses `document.getElementById` and `e.preventDefault()`, assuming all sections exist on the current page.
**Why it happens:** Clicking "About" on `/allprojects` will look for `#about` (which doesn't exist) and do nothing.
**How to avoid:** Update `NavLinks.tsx` to detect `pathname`. If `pathname !== '/'`, links should either:
1. Navigate to `/#section` (letting Next.js handle the hash jump).
2. Programmatically push to `/`.

### Pitfall 2: Missing Global Styles
**What goes wrong:** The grid background pattern from reference isn't in `globals.css`.
**How to avoid:** Add the `bg-grid-pattern` utility to `src/app/globals.css`:
```css
@utility bg-grid-pattern {
  background-image: linear-gradient(to right, #1E2029 1px, transparent 1px), linear-gradient(to bottom, #1E2029 1px, transparent 1px);
  background-size: 40px 40px;
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| HTML Reference | Next.js Page | Phase 05 | Dynamic, reusable, type-safe |
| `<a>` tags | `Link` component | Next.js 13+ | Client-side navigation, prefetching |

## Open Questions

1. **"Load More" Logic:**
   - **Recommendation:** Since we have ~4 projects, the "Load More" button should be static (visual only) or show a toast "No more projects" when clicked, satisfying the "visual only" requirement.

## Sources

### Primary (HIGH confidence)
- `_reference/projects.html` - Visual layout and classes.
- `src/components/layout/NavLinks.tsx` - Navigation logic verification.
- `src/data/projects.ts` - Data structure verification.

### Secondary (MEDIUM confidence)
- `src/app/globals.css` - Theme variables check.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Existing project structure is clear.
- Architecture: HIGH - Simple page addition.
- Pitfalls: HIGH - Identified specific navigation issue.

**Research date:** 2026-02-06
