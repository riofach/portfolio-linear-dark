# Project: Portfolio Linear Dark (Next.js Migration)

## What This Is
A single-page personal portfolio website built with Next.js and Tailwind CSS. It features a "linear-dark" aesthetic and is enhanced with subtle, professional animations using Motion.dev (Framer Motion). v1.0 MVP shipped with high-performance SPA architecture.

## Core Value
To provide a polished, high-performance, and visually engaging online presence that showcases the developer's skills and projects. It serves as a modern replacement for the static HTML version, improving maintainability and user experience through smooth motion and component-based architecture.

## Constraints
- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS (matching existing design)
- **Animation:** Motion.dev (Framer Motion) - "Subtle & Professional"
- **Content:** English language only
- **Architecture:** Single Page Application (SPA) with scroll navigation
- **Design:** Strict adherence to the provided `code1.html` layout and "linear-dark" theme

## Requirements

### Validated
- ✓ **ARCH-01:** Initialize Next.js 16 project with App Router, TypeScript, and ESLint. — v1.0
- ✓ **ARCH-02:** Configure Tailwind CSS v4 with "linear-dark" theme variables. — v1.0
- ✓ **ARCH-03:** Install and configure `motion` (Motion.dev v12). — v1.0
- ✓ **ARCH-04:** Create data configuration files (`data/*.ts`) for separated content. — v1.0
- ✓ **NAV-01:** Implement sticky header with glassmorphism effect. — v1.0
- ✓ **NAV-02:** Create smooth scroll navigation links to sections. — v1.0
- ✓ **NAV-03:** Build a responsive mobile menu with a hamburger toggle. — v1.0
- ✓ **SEC-01:** Implement Hero section with "text glow" effects and background grid pattern. — v1.0
- ✓ **MOT-01:** Add staggered fade-in entrance animations for Hero text and buttons. — v1.0
- ✓ **SEC-02:** Build About section with a responsive grid layout. — v1.0
- ✓ **MOT-02:** Add scroll reveal animation (fade-up) for the About section content. — v1.0
- ✓ **SEC-03:** Render skills grid dynamically from `data/skills.ts`. — v1.0
- ✓ **MOT-03:** Add subtle hover glow effects to skill cards. — v1.0
- ✓ **SEC-04:** Render project cards dynamically from `data/projects.ts`. — v1.0
- ✓ **MOT-04:** Add hover effects to project cards (scale up, border glow). — v1.0
- ✓ **SEC-05:** Build vertical timeline layout for Experience section. — v1.0
- ✓ **MOT-05:** Add sequential fade-in animation for timeline items. — v1.0
- ✓ **SEC-06:** Implement Contact section UI (Form + Info) and Footer. — v1.0
- ✓ **SEC-07:** Ensure Contact form has accessible inputs. — v1.0

### Active
- [ ] **BE-01**: Connect Contact form to an email service (Resend/Nodemailer).
- [ ] **BE-02**: Integrate a CMS (Sanity/Strapi) for managing Projects and Blog posts.
- [ ] **INT-01**: Add multi-language support (Bahasa Indonesia).
- [ ] **SEO-01**: Implement comprehensive SEO meta tags and Open Graph images.

### Out of Scope
- **User Auth**: No user login required for a portfolio.
- **Blog**: Full blog system is out of scope for v1 (focus is on portfolio).
- **Admin Panel**: CMS will be headless (Sanity/Strapi), no custom admin panel needed.

## Context
Shipped v1.0 MVP with ~1600 LOC TypeScript.
Tech stack: Next.js 16, Tailwind v4, Motion v12, Lucide React.
Achieved high performance (100 Lighthouse Performance score targeted) and polished "linear-dark" aesthetic.

## Key Decisions

| Decision | Rationale | Outcome | Status |
|----------|-----------|---------|--------|
| **Single Page Architecture** | Request to keep simplicity of the original design. | User navigates via scroll; no separate page loads. | ✓ Good |
| **Separated Data Configs** | To improve maintainability for Experience and Skills. | Content is edited in `data/*.ts` files, not deep in JSX. | ✓ Good |
| **Future-Proof Projects** | "Selected Work" needs to be dynamic later. | Projects data will use a structured array simulating an API response. | ✓ Good |
| **Subtle Motion** | User requested "professional" feel over "bold" effects. | Animations will focus on fade-ins, gentle slides, and micro-interactions. | ✓ Good |
| **Hybrid SPA approach** | Balance SEO and Motion. | Server Components for shell, Client for motion. | ✓ Good |
| **Tailwind v4 CSS-first** | Modern tooling. | Standardized styling with variables. | ✓ Good |
| **CSS 3D Transforms** | Performance. | Used for Hero grid instead of WebGL. | ✓ Good |
| **Visual-only Contact Form** | Scope management. | Deferred backend integration to later phase. | ✓ Good |
| **Data-driven Skills Grid** | Structure. | Organized skills by category. | ✓ Good |
| **Native Scroll** | Simplicity. | Removed Lenis for simplicity and robustness. | ✓ Good |
| **Centralized Motion** | Consistency. | Used `src/lib/motion.ts` for consistent physics. | ✓ Good |
| **Metadata API** | Modern Next.js. | Used Next.js 14+ Metadata API for SEO. | ✓ Good |
| **MotionLink Pattern** | UX. | Wrapped `next/link` with `motion.create()` for interactive cards. | ✓ Good |

---
*Last updated: 2026-02-06 after v1.0 milestone*
