# Project Research Summary

**Project:** Portfolio Linear Dark
**Domain:** Personal Portfolio Website
**Researched:** 2026-02-05
**Confidence:** MEDIUM

## Executive Summary

The research indicates that a "Linear-style" personal portfolio should be built as a highly polished, performance-oriented Single Page Application (SPA) hybrid using Next.js 16. The focus is on specific, subtle micro-interactions, dark mode aesthetics, and high performance rather than complex data handling.

The recommended approach combines Next.js App Router for structure and performance with Tailwind CSS v4 for styling and Motion for the signature "Linear" feel. This architecture leverages Server Components for the initial shell and content, while strategically using Client Components for the rich interactive elements users expect from this aesthetic.

Key risks revolve around over-engineering the state management and compromising performance with unoptimized assets or heavy animations. The roadmap is designed to establish the visual foundation first, then layer in content and interactivity to ensure the "feel" is correct from the start.

## Key Findings

### Recommended Stack

**Core technologies:**
- **Next.js 16:** Framework — Chosen for Turbopack speed, reliable Server Components, and standard industry adoption.
- **Tailwind CSS v4:** Styling — Newest version with "Oxide" engine for zero-config, high-performance styling essential for the minimal aesthetic.
- **Motion (v12):** Animation — The gold standard for React animations, required for the complex layout transitions and micro-interactions.
- **shadcn/ui:** UI Components — Provides the accessible, unstyled base components that match the "Linear" look perfectly.

### Expected Features

*(Inferred from Domain Standards - Source file missing)*

**Must have (table stakes):**
- **Hero Section:** Strong visual introduction with clear value proposition.
- **Projects Showcase:** Interactive gallery or list of work/case studies.
- **About Me:** Professional bio and skills overview.
- **Contact:** Functional form or clear contact methods.

**Should have (competitive):**
- **Dark/Light Mode:** Seamless theme switching (Linear style implies excellent dark mode).
- **Micro-interactions:** Hover states, scroll reveals, and smooth transitions.
- **Resume Download:** Easy access to professional CV.

**Defer (v2+):**
- **CMS Integration:** Hardcoded content is sufficient for V1.
- **Blog:** Can be added later if content strategy requires it.

### Architecture Approach

The architecture is a **Hybrid SPA** using Next.js App Router.

**Major components:**
1. **Root Layout (`layout.tsx`):** Handles global providers, fonts (Geist Sans), and metadata.
2. **Motion Template (`template.tsx`):** Manages page transitions and exit animations, critical for the "app-like" feel.
3. **Section Components:** Modular blocks (Hero, Projects) that compose the main page, keeping `page.tsx` clean.

### Critical Pitfalls

*(Inferred from Domain Standards - Source file missing)*

1. **Over-engineering State:** Avoid Redux/Zustand. Use simple URL state (`nuqs`) or local state.
2. **Animation Performance:** Heavy animations can cause jank. Use `Motion` efficiently and avoid animating layout properties where possible.
3. **Asset Optimization:** Large images can kill load times. Use Next.js `<Image>` and optimize standard assets.

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Foundation & Design System
**Rationale:** The "Linear" look relies heavily on the correct setup of fonts, tailwind config, and base UI components.
**Delivers:** Functional Next.js 16 app, Tailwind v4 configured, Geist font, basic layout shell.
**Uses:** Next.js, Tailwind v4, shadcn/ui.
**Avoids:** "Fighting the framework" later by establishing correct patterns early.

### Phase 2: Core Sections & Layout
**Rationale:** Building the static content blocks first allows for content validation before complex animation.
**Delivers:** Hero, About, and Projects sections (static).
**Implements:** Section component architecture.

### Phase 3: Motion & Interactivity
**Rationale:** Layering motion on top of a solid structure ensures performance and maintainability.
**Delivers:** Page transitions, scroll animations, interactive project cards.
**Uses:** Motion (v12).
**Avoids:** Animation performance pitfalls.

### Phase 4: Contact & Polish
**Rationale:** Final functional features and visual polish.
**Delivers:** Working contact form (Server Actions), final responsive tweaks, SEO metadata.
**Implements:** Server Actions for email.

### Phase Ordering Rationale

- **Foundation first:** Tailwind v4 and Next.js 16 are new; getting them stable is priority #1.
- **Content before Motion:** It's easier to animate existing content than to build content inside complex animation wrappers.
- **Interactivity last:** "Linear feel" comes from tuning interactions, which requires the elements to be in place.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 3 (Motion):** Specific "Linear-style" transition recipes might need research if standard fades aren't enough.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Detailed stack research available (Next.js 16, Tailwind v4). |
| Features | MEDIUM | Inferred from domain standards (missing source file). |
| Architecture | HIGH | Clear architectural direction for Hybrid SPA. |
| Pitfalls | MEDIUM | Inferred from domain standards (missing source file). |

**Overall confidence:** MEDIUM

### Gaps to Address

- **Features List:** explicitly confirm strict feature requirements with user if they differ from standard portfolio.
- **Content Strategy:** Decide if content is hardcoded (recommended) or needs MDX setup during Phase 2.

## Sources

### Primary (HIGH confidence)
- `STACK.md` — Detailed stack analysis.
- `ARCHITECTURE.md` — System design and component patterns.

### Secondary (MEDIUM confidence)
- Domain knowledge of "Personal Portfolio Website" standards.
- Next.js and Tailwind CSS official documentation (referenced in research).

---
*Research completed: 2026-02-05*
*Ready for roadmap: yes*
