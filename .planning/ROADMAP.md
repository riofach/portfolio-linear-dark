# Roadmap: Portfolio Linear Dark

**Phase Structure:** 4 Phases
**Depth:** Standard
**Coverage:** 100% (19/19 requirements mapped)

## Overview

This roadmap delivers the Portfolio Linear Dark as a high-performance Single Page Application (SPA). It prioritizes a solid technical foundation, followed by a complete content layout pass, and concludes with a dedicated phase for high-end motion design to ensure the "Linear" aesthetic is achieved without compromising performance.

## Phase 1: Foundation & Navigation
**Goal:** Initialize the project architecture and global navigation shell.

**Plans:** 3 plans

Plans:
- [x] 01-01-PLAN.md — Foundation Setup (Tailwind v4, Motion v12, Data Layer)
- [x] 01-02-PLAN.md — Navigation Shell (Smart Header, Mobile Menu, Scroll Spy)
- [x] 01-03-PLAN.md — Fix Font Rendering (Gap Closure)

| Requirement | Description |
|-------------|-------------|
| **ARCH-01** | Initialize Next.js 16 project with App Router, TypeScript, and ESLint. |
| **ARCH-02** | Configure Tailwind CSS v4 with "linear-dark" theme variables. |
| **ARCH-03** | Install and configure `motion` (Motion.dev v12). |
| **ARCH-04** | Create data configuration files (`data/*.ts`) for separated content. |
| **NAV-01** | Implement sticky header with glassmorphism effect. |
| **NAV-02** | Create smooth scroll navigation links to sections. |
| **NAV-03** | Build responsive mobile menu with hamburger toggle. |

**Success Criteria:**
1. Developer can start the app with Next.js 16, Tailwind v4, and Motion ready.
2. User can view the sticky header with glassmorphism (blur) effect while scrolling.
3. User can navigate to section anchors (#about, #work) using the header links.
4. User can open and close the mobile menu on smartphone viewports.
5. Developer sees `data/` files established for Skills, Experience, and Projects.

## Phase 2: Content Structure & Layout
**Goal:** Build all page sections with static or config-driven content to establish visual hierarchy.

**Dependencies:** Phase 1
**Plans:** 7 plans

Plans:
- [x] 02-01-PLAN.md — Hero Section (3D Grid)
- [x] 02-02-PLAN.md — About & Skills (Data-driven Grid)
- [x] 02-03-PLAN.md — Projects & Experience (Timeline & Cards)
- [x] 02-04-PLAN.md — Contact & Footer (Visuals)
- [x] 02-05-PLAN.md — Page Composition (Assembly & Responsive Check)
- [x] 02-06-PLAN.md — Refactor (Structure Cleanup)
- [x] 02-07-PLAN.md — Layout Finalization (Gap Closure)

| Requirement | Description |
|-------------|-------------|
| **SEC-01** | Implement Hero section with "text glow" and background grid. |
| **SEC-02** | Build About section with responsive grid layout. |
| **SEC-03** | Render skills grid dynamically from `data/skills.ts`. |
| **SEC-04** | Render project cards dynamically from `data/projects.ts`. |
| **SEC-05** | Build vertical timeline layout for Experience section. |
| **SEC-06** | Implement Contact section UI and Footer. |
| **SEC-07** | Ensure Contact form has accessible inputs (visual only). |

**Success Criteria:**
1. User sees the Hero section with "text glow" effects and background grid.
2. User can view the Skills grid populated correctly from the data file.
3. User can view Project cards rendering data from the simulated API structure.
4. User can read the Experience timeline in a vertical layout.
5. User can see the Contact form with proper input fields and styling.

## Phase 3: Motion & Interactions
**Goal:** Apply the "linear-dark" motion language to create a polished, immersive experience.

**Dependencies:** Phase 2
**Plans:** 5 plans

Plans:
- [x] 03-01-PLAN.md — Foundation & Page Transitions (Config, Template)
- [x] 03-02-PLAN.md — Section Reveals (Hero Stagger, Scroll Fade-up)
- [x] 03-03-PLAN.md — Micro-interactions (Hover Cards, Timeline)
- [x] 03-04-PLAN.md — Contact Form Logic (Validation, State)
- [x] 03-05-PLAN.md — Final Polish & Performance (SEO, Lighthouse)
- [x] 03-06-PLAN.md — Technical SEO & Identity (Gap Closure)

| Requirement | Description |
|-------------|-------------|
| **MOT-01** | Add staggered fade-in entrance animations for Hero. |
| **MOT-02** | Add scroll reveal animation (fade-up) for About section. |
| **MOT-03** | Add subtle hover glow effects to skill cards. |
| **MOT-04** | Add hover effects to project cards (scale/glow). |
| **MOT-05** | Add sequential fade-in animation for timeline items. |

**Success Criteria:**
1. User sees smooth, staggered entrance animations for Hero text on load.
2. User sees content reveal gently (fade-up) as they scroll down the page.
3. User sees sequential fade-in effects for Experience timeline items.
4. User sees interactive hover glows on Skill and Project cards.
5. User experiences a fluid interface with no layout shifts or performance jank.

## Phase 4: Projects Data Integration
**Goal:** Connect the Projects section to the data layer to fully satisfy SEC-04.
**Requirements:** SEC-04
**Gap Closure:** Closes gaps from audit

**Plans:** 1 plans

Plans:
- [ ] 04-01-PLAN.md — Refactor Projects to Data-Driven Implementation

| Requirement | Description |
|-------------|-------------|
| **SEC-04** | Render project cards dynamically from `data/projects.ts`. |

**Success Criteria:**
1. User sees the Projects section rendered dynamically from `data/projects.ts`.
2. All visual styles (gradients, borders, glows) match the approved v1 design.
3. Codebase has no hardcoded project content in `Projects.tsx`.

## Progress

| Phase | Status |
|-------|--------|
| **1. Foundation & Navigation** | **Complete** |
| **2. Content Structure & Layout** | **Complete** |
| **3. Motion & Interactions** | **Complete** |
| **4. Projects Data Integration** | **Pending** |
