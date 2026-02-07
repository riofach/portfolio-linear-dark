# Requirements: Portfolio Linear Dark (v1.2)

**Defined:** 2026-02-07
**Core Value:** A polished, high-performance, and visually engaging online presence showcasing skills/projects with "linear-dark" aesthetic and subtle motion.

## v1.2 Requirements (Backend & Security)

### Content Management (CMS)

- [x] **CMS-01:** Integrate Sanity CMS with Next.js App Router (next-sanity).
- [x] **CMS-02:** Define schemas for Projects (title, slug, description, tags, images, links).
- [x] **CMS-03:** Define schemas for Experience (role, company, date, description).
- [x] **CMS-04:** Define schemas for Skills (name, category, icon/image).
- [x] **CMS-05:** Define schemas for Blog Posts (title, slug, content/portable text, date).
- [x] **CMS-06:** Define schemas for Site Metadata (SEO title, description, social links).
- [ ] **CMS-07:** Enable "Draft Mode" for previewing content before publishing.

### Internationalization (i18n)

- [ ] **I18N-01:** Configure `next-intl` with middleware for locale routing (`/en`, `/id`).
- [ ] **I18N-02:** Implement locale switcher in Header/Footer.
- [ ] **I18N-03:** Translate static UI text (Nav, Hero, Buttons, Contact form).
- [ ] **I18N-04:** Support localized content fetching from Sanity (field-level translation).

### Contact & Email

- [ ] **CONT-01:** Create Server Action for sending emails using Resend.
- [ ] **CONT-02:** Validate Contact Form inputs with Zod (server-side).
- [ ] **CONT-03:** Implement rate limiting for form submissions.
- [ ] **CONT-04:** Send auto-reply email to the sender (confirmation).
- [ ] **CONT-05:** Show success/error toast notifications.

### SEO & Performance

- [ ] **SEO-01:** Implement `generateMetadata` for all dynamic pages (Projects, Blog).
- [ ] **SEO-02:** Generate dynamic `sitemap.xml` including CMS routes.
- [ ] **SEO-03:** Configure `robots.txt` to allow indexing.
- [ ] **SEO-04:** Add JSON-LD structured data for Person and Portfolio/Blog.

## v2 Requirements (Deferred)

### Advanced Features

- **CMS-08:** Portable Text serializers for complex blog layouts (code blocks, embeds).
- **CONT-06:** Save contact messages to database (Supabase/Sanity) for backup.
- **AUTH-01:** Admin login (handled by Sanity Studio, no custom auth needed).

## Out of Scope

| Feature | Reason |
|---------|--------|
| Comments | High moderation effort, not core for portfolio. |
| User Accounts | Portfolio is read-only for visitors. |
| E-commerce | Not selling products. |
| Analytics Dashboard | Use Vercel Analytics or Google Analytics (setup only). |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| CMS-01 | Phase 6 | Complete |
| CMS-02 | Phase 6 | Complete |
| CMS-03 | Phase 6 | Complete |
| CMS-04 | Phase 6 | Complete |
| CMS-05 | Phase 6 | Complete |
| CMS-06 | Phase 6 | Complete |
| CMS-07 | Phase 9 | Pending |
| I18N-01 | Phase 7 | Pending |
| I18N-02 | Phase 7 | Pending |
| I18N-03 | Phase 7 | Pending |
| I18N-04 | Phase 7 | Pending |
| CONT-01 | Phase 8 | Pending |
| CONT-02 | Phase 8 | Pending |
| CONT-03 | Phase 8 | Pending |
| CONT-04 | Phase 8 | Pending |
| CONT-05 | Phase 8 | Pending |
| SEO-01 | Phase 9 | Pending |
| SEO-02 | Phase 9 | Pending |
| SEO-03 | Phase 9 | Pending |
| SEO-04 | Phase 9 | Pending |

**Coverage:**
- v1.2 requirements: 20 total
- Mapped to phases: 20
- Unmapped: 0 ✓

---
*Requirements defined: 2026-02-07*
*Last updated: 2026-02-07 after roadmap creation*
