---
phase: 04-projects-data-integration
plan: 01
subsystem: ui
tags: next.js, tailwind, motion, data-layer

# Dependency graph
requires:
  - phase: 03-motion-interactions
    provides: Motion system and StaggerContainer
provides:
  - Data-driven Projects section
  - Reusable ProjectCard component with linear-dark styling
affects: future CMS integration

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Smart Parent (Layout) / Dumb Child (Visuals) for Project cards"
    - "MotionLink pattern for Next.js Link with Framer Motion"

key-files:
  created: []
  modified:
    - src/data/projects.ts
    - src/components/ui/ProjectCard.tsx
    - src/components/sections/Projects.tsx

key-decisions:
  - "Moved card styling from parent grid to ProjectCard component for reusability"
  - "Utilized motion.create(Link) to combine Next.js navigation with Motion hover effects"
  - "Maintained StaggerContainer in parent to orchestrate entrance animations"

# Metrics
duration: 10m
completed: 2026-02-06
---

# Phase 04 Plan 01: Refactor Projects to Data-Driven Implementation Summary

**Refactored Projects section to be fully data-driven with a reusable ProjectCard component, matching original design 1:1.**

## Performance

- **Duration:** 10m
- **Started:** 2026-02-06T06:28:00Z
- **Completed:** 2026-02-06T06:38:18Z
- **Tasks:** 3
- **Files modified:** 3

## Accomplishments
- Extracted hardcoded project data into `src/data/projects.ts`
- Ported complex "linear-dark" styling (gradients, borders, glows) to `ProjectCard.tsx`
- Refactored `Projects.tsx` to map over data, significantly reducing code duplication

## Task Commits

1. **Task 1: Sync Data Layer** - `c039afd` (feat)
2. **Task 2: Port Styling to ProjectCard** - `29a5af3` (feat)
3. **Task 3: Wire Projects Section** - `591fb4e` (refactor)

## Files Created/Modified
- `src/data/projects.ts` - Source of truth for project content
- `src/components/ui/ProjectCard.tsx` - Self-contained card component with motion interactions
- `src/components/sections/Projects.tsx` - Layout container handling data mapping and entrance stagger

## Decisions Made
- **MotionLink Pattern:** Wrapped `next/link` with `motion.create()` to enable `whileHover` props directly on the interactive element, ensuring smooth scaling and border effects.
- **Style Porting:** Moved all specific card styling (bg-card-dark, gradients, borders) into the component to ensure consistency and DRY code.
- **Entrance vs Interaction:** Separated concerns - `Projects.tsx` handles entrance animation (FADE_UP), while `ProjectCard.tsx` handles interaction animation (hover scale).

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered
None

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Phase 4 complete.
- Ready for any future CMS integration or content updates via `data/projects.ts`.

---
*Phase: 04-projects-data-integration*
*Completed: 2026-02-06*
