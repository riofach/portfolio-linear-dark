# Phase 02: Content Structure & Layout - Research

**Researched:** 2026-02-05
**Domain:** Frontend Engineering / UI Layout
**Confidence:** HIGH

## Summary

This phase focuses on constructing the static visual hierarchy of the portfolio. The primary technical challenge is implementing the specific "3D perspective grid" and "glassmorphism" effects using Tailwind CSS v4 while maintaining a responsive structure.

The research confirms that Tailwind v4 natively supports 3D transforms (`perspective`, `rotate-x`), eliminating the need for custom CSS classes. The layout will follow a "Hybrid SPA" model where content is statically defined in `data/*.ts` files and rendered via Server Components, while interactive elements (like the mobile menu) are Client Components.

**Primary recommendation:** Use Tailwind v4's native `perspective` and `backdrop-filter` utilities for all visual effects, avoiding custom CSS files unless absolutely necessary for complex animations.

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| **Tailwind CSS** | v4.0+ | Styling & Layout | Project standard, zero-runtime, native 3D transforms. |
| **Lucide React** | Latest | Icons | Clean, consistent SVG icons standard in modern React apps. |
| **clsx / tailwind-merge** | Latest | Class Management | Essential for conditional styling in reusable components. |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| **Next/Image** | 16.0+ | Image Optimization | Required for `public/foto.png` and project thumbnails. |

**Installation:**
```bash
npm install lucide-react clsx tailwind-merge
```

## Architecture Patterns

### Recommended Project Structure
```
src/
├── app/
│   ├── page.tsx            # Main composition (Single Page)
│   ├── layout.tsx          # Root layout with Header/Footer
│   └── globals.css         # Tailwind directives
├── components/
│   ├── sections/           # Large section containers (Hero, About, etc.)
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   └── ui/                 # Atomic components
│       ├── Section.tsx     # Standard padding/container wrapper
│       ├── Card.tsx        # Glassmorphism card base
│       └── Button.tsx      # Primary/Secondary actions
└── data/                   # Content definitions
    ├── experience.ts
    ├── projects.ts
    └── skills.ts
```

### Pattern 1: 3D Perspective Grid ("The Floor")
**What:** A grid pattern that recedes into the distance to create depth.
**When to use:** Hero section background.
**Implementation:**
Use Tailwind v4 `perspective` on the container and `rotate-x` on the inner grid element.
```tsx
// Container
<div className="relative h-screen w-full overflow-hidden bg-black perspective-dramatic">
  {/* Grid Plane */}
  <div className="absolute inset-0 origin-top transform-3d rotate-x-[60deg] bg-grid-pattern opacity-20" />
  {/* Fog Mask to fade out the top */}
  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
</div>
```

### Pattern 2: Single-Sided Vertical Timeline
**What:** A clean vertical list with a connecting line.
**When to use:** Experience section.
**Implementation:**
Use a CSS Grid `grid-cols-[auto_1fr]` to keep the timeline line aligned with the content.
- **Left Col:** Relative container with a centered vertical border (`border-l`).
- **Right Col:** Content card.
- **Marker:** Absolute positioned circle on the left column line.

### Pattern 3: Glassmorphism Card
**What:** Translucent cards that blur the background.
**When to use:** Skills cards, Project details, Floating navbar.
**Code Example:**
```tsx
<div className="backdrop-blur-md bg-white/5 border border-white/10 shadow-lg rounded-xl">
  {/* Content */}
</div>
```

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| **Icons** | Custom SVGs | **Lucide React** | Consistent stroke width, size, and accessible ARIA labels out of the box. |
| **Class Merging** | String template literals | **tailwind-merge** | Handling conflicting Tailwind classes (e.g., `p-4` vs `p-6` override) is complex manually. |
| **Grid Background** | Complex SVG/Canvas | **CSS Gradients** | `bg-[linear-gradient(...)]` is lighter and easier to animate if needed. |

## Common Pitfalls

### Pitfall 1: Z-Index Wars with 3D Transforms
**What goes wrong:** The 3D grid plane covers interactive elements (buttons/text) because `transform` creates a new stacking context.
**How to avoid:** Ensure the content container has `relative z-10` and the grid background has `z-0` or `pointer-events-none`.

### Pitfall 2: Mobile Overflow
**What goes wrong:** The About section's "Text Left, Image Right" layout squeezes content on mobile.
**How to avoid:** Use `flex-col-reverse` (Image top) or `flex-col` (Image bottom) on mobile, switching to `md:grid-cols-2` on desktop.
**Decision:** User context requested "Responsive stacking order for mobile (usually Content > Image)". So `flex-col` (Content first, Image second) or hidden image on very small screens if needed.

### Pitfall 3: Glassmorphism Readability
**What goes wrong:** Low contrast text on blurred backgrounds.
**How to avoid:** Always use a slight background opacity (`bg-black/40`) combined with the blur, rather than just blur. Ensure text is `text-white` or `text-gray-200`.

## Data Structure Definitions

To support the UI requirements, the data files must follow these schemas:

### `data/experience.ts`
```typescript
export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string; // e.g., "2023 - Present"
  description: string;
}
```

### `data/projects.ts`
```typescript
export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string; // URL
  image: string; // Path to public/ image
}
```

### `data/skills.ts`
```typescript
export interface SkillItem {
  name: string;
  icon: React.ElementType; // Lucide icon component
  category: "Language" | "Framework" | "Tool"; // Optional grouping
}
```

## Sources

### Primary (HIGH confidence)
- **Tailwind CSS v4 Docs:** Confirmed `perspective`, `rotate`, `backdrop-blur` utilities.
- **Context:** Project requirements (`public/foto.png`, 3D grid request).

### Secondary (MEDIUM confidence)
- **WebSearch:** Standard patterns for "Vertical Timeline Tailwind" and "CSS 3D Floor".

## Metadata
**Confidence breakdown:**
- Standard stack: HIGH (Standard Next.js/Tailwind stack)
- Architecture: HIGH (Clear separation of concerns)
- Pitfalls: HIGH (Common CSS issues)

**Research date:** 2026-02-05
