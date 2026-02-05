# Requirements

## v1 Requirements

### Architecture
- [ ] **ARCH-01**: Initialize Next.js 16 project with App Router, TypeScript, and ESLint.
- [ ] **ARCH-02**: Configure Tailwind CSS v4 with the "linear-dark" theme variables (colors, fonts) from `code1.html`.
- [ ] **ARCH-03**: Install and configure `motion` (Motion.dev v12) for animations.
- [ ] **ARCH-04**: Create data configuration files (`data/experience.ts`, `data/skills.ts`, `data/projects.ts`) for separated content management.

### Navigation
- [ ] **NAV-01**: Implement a sticky header with glassmorphism effect (`backdrop-blur`).
- [ ] **NAV-02**: Create smooth scroll navigation links to sections (#about, #work, #skills, #contact).
- [ ] **NAV-03**: Build a responsive mobile menu with a hamburger toggle.

### Hero Section
- [ ] **SEC-01**: Implement Hero section with "text glow" effects and background grid pattern.
- [ ] **MOT-01**: Add staggered fade-in entrance animations for Hero text and buttons.

### About Section
- [ ] **SEC-02**: Build About section with a responsive grid layout (Text + Image).
- [ ] **MOT-02**: Add scroll reveal animation (fade-up) for the About section content.

### Skills Section (Expertise & Tools)
- [ ] **SEC-03**: Render skills grid dynamically from `data/skills.ts`.
- [ ] **MOT-03**: Add subtle hover glow effects to skill cards.

### Work Section
- [ ] **SEC-04**: Render project cards dynamically from `data/projects.ts` (simulating API structure).
- [ ] **MOT-04**: Add hover effects to project cards (scale up, border glow).

### Experience Section
- [ ] **SEC-05**: Build vertical timeline layout rendering data from `data/experience.ts`.
- [ ] **MOT-05**: Add sequential fade-in animation for timeline items.

### Contact & Footer
- [ ] **SEC-06**: Implement Contact section UI (Form + Info) and Footer.
- [ ] **SEC-07**: Ensure Contact form has accessible inputs (visual only for v1, no backend).

## v2 Requirements (Deferred)
- [ ] **BE-01**: Connect Contact form to an email service (Resend/Nodemailer).
- [ ] **BE-02**: Integrate a CMS (Sanity/Strapi) for managing Projects and Blog posts.
- [ ] **INT-01**: Add multi-language support (Bahasa Indonesia).
- [ ] **SEO-01**: Implement comprehensive SEO meta tags and Open Graph images.

## Out of Scope
- **User Auth**: No user login required for a portfolio.
- **Blog**: Full blog system is out of scope for v1 (focus is on portfolio).

## Traceability
| Requirement | Phase | Status |
|-------------|-------|--------|
| ARCH-01 | Phase 1 | Pending |
| ARCH-02 | Phase 1 | Pending |
| ARCH-03 | Phase 1 | Pending |
| ARCH-04 | Phase 1 | Pending |
| NAV-01 | Phase 1 | Pending |
| NAV-02 | Phase 1 | Pending |
| NAV-03 | Phase 1 | Pending |
| SEC-01 | Phase 2 | Pending |
| MOT-01 | Phase 3 | Pending |
| SEC-02 | Phase 2 | Pending |
| MOT-02 | Phase 3 | Pending |
| SEC-03 | Phase 2 | Pending |
| MOT-03 | Phase 3 | Pending |
| SEC-04 | Phase 2 | Pending |
| MOT-04 | Phase 3 | Pending |
| SEC-05 | Phase 2 | Pending |
| MOT-05 | Phase 3 | Pending |
| SEC-06 | Phase 2 | Pending |
| SEC-07 | Phase 2 | Pending |
