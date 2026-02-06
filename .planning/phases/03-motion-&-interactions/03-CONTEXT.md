# Phase 3: Motion & Interactions - Context

**Gathered:** 2026-02-06
**Status:** Ready for planning

<domain>
## Phase Boundary

Apply the "linear-dark" motion language to the existing static layout using Motion.dev (framer-motion).
**Constraint:** Enhance with animation ONLY. Do NOT modify existing layout, spacing, or design elements.

</domain>

<decisions>
## Implementation Decisions

### Scroll Reveals
- **Entry:** Fade Up (Translate Y + Opacity).
- **Stagger:** Cascading/Waterflow stagger for grids (Skills, Projects).
- **Trigger:** Early (when element reaches bottom 10-20% of viewport).
- **Re-trigger:** Play ONCE only (no replay on scroll back).

### Micro-interactions
- **Card Hover:** Glow/Border highlight effect.
- **Buttons/Links/Inputs:** Preserve existing implementations (User explicitly stated these are already done).

### Hero Entrance
- **Text Sequence:** Staggered Fade Up (Headline -> Subtext -> CTA).
- **Constraint:** Must NOT shift layout; use simple opacity/transform.
- **Background:** Instant appearance (no fade-in/zoom).
- **Timing:** Slight delay (200-300ms) after load before starting.
- **Reduced Motion:** Instant appearance (disable animations entirely).

### Transition Physics
- **Feel:** Subtle Spring (The "Linear" signature bounce) - applied to transforms only.
- **Scroll Engine:** Native browser scroll (No external libraries like Lenis).
- **Page Transitions:** Crossfade (opacity out/in) for route changes (e.g., future /allprojects).
- **Performance:** Balanced strategy (standard optimizations).

### Claude's Discretion
- Exact spring damping/stiffness values (to achieve the "Subtle Spring" feel).
- Animation duration (standard vs slow).

</decisions>

<specifics>
## Specific Ideas

- **CRITICAL:** "Jangan merubah layout dan apapun itu yang sudah diterapkan" (Do not change layout or any applied design). Animations must be purely additive.
- "Fade up animation only" for Hero text.
- Future proofing: Crossfade page transitions needed for planned routes like `/allprojects`.

</specifics>

<deferred>
## Deferred Ideas

- Backend integration for Contact Form (Phase 4+).
- `/allprojects` page implementation (Future Phase).

</deferred>

---

*Phase: 03-motion-&-interactions*
*Context gathered: 2026-02-06*
