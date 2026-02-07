# Project Roadmap: Portfolio Linear Dark

**Milestone:** v1.2 Backend & Security
**Status:** Planning
**Start Date:** 2026-02-07

## Overview

This roadmap transitions the portfolio from a static single-page application to a dynamic, content-driven platform. The focus is on integrating Sanity CMS for content management, enabling internationalization (English/Indonesian), adding secure contact capabilities, and optimizing for search engines.

**Phase Structure:**
- **Phase 6:** CMS Integration (Data Layer)
- **Phase 7:** Internationalization (i18n)
- **Phase 8:** Contact & Interaction (Backend)
- **Phase 9:** Optimization & SEO (Polish)

---

## Phase 6: CMS Integration

**Goal:** Transition content management from static files to Sanity CMS to enable real-time updates without code deployment.

| Requirement | Description |
|-------------|-------------|
| **CMS-01** | Integrate Sanity CMS with Next.js App Router (next-sanity). |
| **CMS-02** | Define schemas for Projects (title, slug, description, tags, images, links). |
| **CMS-03** | Define schemas for Experience (role, company, date, description). |
| **CMS-04** | Define schemas for Skills (name, category, icon/image). |
| **CMS-05** | Define schemas for Blog Posts (title, slug, content/portable text, date). |
| **CMS-06** | Define schemas for Site Metadata (SEO title, description, social links). |

**Success Criteria:**
1. Projects, Experience, and Skills sections render content dynamically fetched from Sanity.
2. Studio accessible locally for content editing.
3. Site metadata (title, description) loads from global CMS settings.
4. No hardcoded content remains in `src/data` for core sections.

---

## Phase 7: Internationalization

**Goal:** Enable multi-language support to reach a broader audience (English & Indonesian).

**Dependencies:** Phase 6 (Content structure must exist to be localized)

| Requirement | Description |
|-------------|-------------|
| **I18N-01** | Configure `next-intl` with middleware for locale routing (`/en`, `/id`). |
| **I18N-02** | Implement locale switcher in Header/Footer. |
| **I18N-03** | Translate static UI text (Nav, Hero, Buttons, Contact form). |
| **I18N-04** | Support localized content fetching from Sanity. |

**Success Criteria:**
1. User can switch languages via a visible toggle in the navigation.
2. URL reflects the active locale (e.g., `/en/...`, `/id/...`).
3. Static UI elements (navigation, buttons) display in the selected language.
4. CMS content updates to the selected language automatically.

---

## Phase 8: Contact & Interaction

**Goal:** Enable secure, reliable user communication with validation and feedback.

**Dependencies:** None (can be parallel, but better after i18n for localized messages)

| Requirement | Description |
|-------------|-------------|
| **CONT-01** | Create Server Action for sending emails using Resend. |
| **CONT-02** | Validate Contact Form inputs with Zod (server-side). |
| **CONT-03** | Implement rate limiting for form submissions. |
| **CONT-04** | Send auto-reply email to the sender (confirmation). |
| **CONT-05** | Show success/error toast notifications. |

**Success Criteria:**
1. Submitting the form sends an email to the admin and a confirmation to the user.
2. Invalid inputs trigger visible, localized error messages.
3. Rapid-fire submissions are blocked by rate limiting.
4. UI provides immediate feedback (loading state, success toast) upon submission.

---

## Phase 9: Optimization & SEO

**Goal:** Maximize discoverability and content manageability for production.

**Dependencies:** Phase 6 (CMS), Phase 7 (i18n routes)

| Requirement | Description |
|-------------|-------------|
| **SEO-01** | Implement `generateMetadata` for all dynamic pages (Projects, Blog). |
| **SEO-02** | Generate dynamic `sitemap.xml` including CMS routes. |
| **SEO-03** | Configure `robots.txt` to allow indexing. |
| **SEO-04** | Add JSON-LD structured data for Person and Portfolio/Blog. |
| **CMS-07** | Enable "Draft Mode" for previewing content before publishing. |

**Success Criteria:**
1. All dynamic project pages have unique, content-specific meta tags (Title, Desc, OG Image).
2. `sitemap.xml` lists all active routes and languages.
3. Search engines can see structured data (JSON-LD) for the portfolio owner.
4. Admin can preview unpublished CMS content using Draft Mode.

---

## Progress

| Phase | Goal | Status |
|-------|------|--------|
| **6** | CMS Integration | **Pending** |
| **7** | Internationalization | **Pending** |
| **8** | Contact & Interaction | **Pending** |
| **9** | Optimization & SEO | **Pending** |
