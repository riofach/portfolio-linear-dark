# Project: Portfolio Linear Dark (Next.js Migration)

## What This Is
A single-page personal portfolio website built with Next.js and Tailwind CSS, converted from an existing static HTML design. It features a "linear-dark" aesthetic and is enhanced with subtle, professional animations using Motion.dev (Framer Motion).

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
(None yet — ship to validate)

### Active
- [ ] **Setup:** Initialize Next.js project with Tailwind CSS and Framer Motion.
- [ ] **Architecture:** Implement SPA layout with sticky glassmorphism navigation.
- [ ] **Hero Section:** Port Hero section with subtle entrance animations.
- [ ] **About Section:** Port About section text and layout.
- [ ] **Skills Section:** Componentize "Expertise & Tools" with data separated in a config file.
- [ ] **Work Section:** Componentize "Selected Work" with a data structure ready for future backend integration.
- [ ] **Experience Section:** Componentize "Experience" timeline with data separated in a config file.
- [ ] **Contact Section:** Port Contact form UI and footer.
- [ ] **Animation:** Apply subtle scroll reveals and hover effects using Motion.dev.

### Out of Scope
- **Backend:** Real database connection for projects (v2).
- **Internationalization:** Multi-language support (English only for v1).
- **CMS:** Admin panel for content editing.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| **Single Page Architecture** | Request to keep simplicity of the original design. | User navigates via scroll; no separate page loads. |
| **Separated Data Configs** | To improve maintainability for Experience and Skills. | Content is edited in `data/*.ts` files, not deep in JSX. |
| **Future-Proof Projects** | "Selected Work" needs to be dynamic later. | Projects data will use a structured array simulating an API response. |
| **Subtle Motion** | User requested "professional" feel over "bold" effects. | Animations will focus on fade-ins, gentle slides, and micro-interactions. |

---
*Last updated: Thu Feb 05 2026 after initialization*
