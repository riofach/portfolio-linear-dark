# Requirements: Portfolio Linear Dark

**Defined:** 2026-02-06
**Core Value:** A polished, high-performance, and visually engaging online presence showcasing skills/projects.

## v1 Requirements

### Projects Archive (v1.1)

- [ ] **PROJ-01**: Create `/allprojects` route using Next.js App Router conventions.
- [ ] **PROJ-02**: Implement grid layout matching `_reference/projects.html` (2 columns on lg, consistent card styles).
- [ ] **PROJ-03**: Implement "Load More" button UI (visual only if no backend yet).
- [ ] **PROJ-04**: Ensure page title/header section matches reference (Title + Counter + Subtitle).
- [ ] **PROJ-05**: Use existing global `Header` and `Footer` components (do NOT use reference implementation).
- [ ] **PROJ-06**: Remove category filter tabs (Development, Design, Writing) from the UI.
- [ ] **NAV-04**: Update "View all projects" button on Home page to navigate to `/allprojects`.

## v1.2 Backend & Security (Planned)

### Backend

- [ ] **BE-01**: Connect Contact form to an email service (Resend/Nodemailer).
- [ ] **BE-02**: Integrate a CMS (Sanity/Strapi) for managing Projects and Blog posts.

### Internationalization

- [ ] **INT-01**: Add multi-language support (Bahasa Indonesia).

### SEO

- [ ] **SEO-01**: Implement comprehensive SEO meta tags and Open Graph images.

## Out of Scope

| Feature | Reason |
|---------|--------|
| User Auth | No user login required for a portfolio. |
| Blog System | Focus is on portfolio for v1. |
| Admin Panel | Headless CMS preferred. |
| Project Filters | Explicitly requested to remove for v1.1. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| PROJ-01 | Phase 5 | Pending |
| PROJ-02 | Phase 5 | Pending |
| PROJ-03 | Phase 5 | Pending |
| PROJ-04 | Phase 5 | Pending |
| PROJ-05 | Phase 5 | Pending |
| PROJ-06 | Phase 5 | Pending |
| NAV-04 | Phase 5 | Pending |

**Coverage:**
- v1.1 requirements: 7 total
- Mapped to phases: 7
- Unmapped: 0 ✓

---
*Requirements defined: 2026-02-06*
*Last updated: 2026-02-06 after v1.1 definition*
