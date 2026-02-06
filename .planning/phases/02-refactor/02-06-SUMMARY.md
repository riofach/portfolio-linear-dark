---
phase: 02-refactor
plan: 02-06
subsystem: content
tags: experience, refactor, typescript, lucide
requires:
  - phase: 02-05
    provides: skills-data-refactor
provides:
  - experience-data-refactor
affects:
  - ui-polish
tech-stack:
  added: []
  patterns:
    - data-component-separation
    - dynamic-rendering-with-icon-mapping
key-files:
  created: []
  modified:
    - src/data/experience.ts
    - src/components/sections/Experience.tsx
key-decisions:
  - "Used string identifiers for icons in data file to keep it pure TypeScript (mostly)"
  - "Mapped string identifiers to Lucide components in the React component"
  - "Preserved specific styling for the first/current role using index checking"
patterns-established:
  - "Data files export raw data, Components handle presentation logic and assets (icons)"
duration: 5min
completed: 2026-02-06
---

# Phase 2 Plan 06: Refactor Experience Data Summary

**Extracted Experience section content into structured data file with dynamic icon mapping.**

## Performance
- **Duration:** 5 min
- **Started:** 2026-02-06
- **Completed:** 2026-02-06
- **Tasks:** 1
- **Files modified:** 2

## Accomplishments
- Moved hardcoded experience data from component to `src/data/experience.ts`.
- Refactored `Experience.tsx` to render the timeline dynamically using `.map()`.
- Implemented icon mapping strategy (`"terminal"` -> `<Terminal />`) to maintain separation of concerns.
- Preserved complex visual details (gradients, active state highlighting) within the dynamic loop.

## Task Commits
1. **Task 1: Refactor Experience Data** - `(hash will be generated)` (refactor)

## Files Created/Modified
- `src/data/experience.ts` - Added `Experience` interface and populated with real data.
- `src/components/sections/Experience.tsx` - Replaced static JSX with dynamic rendering logic.

## Deviations from Plan
None - plan executed exactly as written.

## Issues Encountered
None.

## Next Phase Readiness
- Experience section is now data-driven and ready for easy updates.
- Refactor phase complete.
