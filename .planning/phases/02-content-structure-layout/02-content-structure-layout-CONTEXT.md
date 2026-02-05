# Phase 2: Content Structure & Layout - Context

**Gathered:** 2026-02-05
**Status:** Ready for planning

<domain>
## Phase Boundary

Build all page sections (Hero, About, Skills, Projects, Experience, Contact) with static or config-driven content to establish visual hierarchy. Focus is on layout, composition, and static styling. Motion and backend integrations are separate phases.

</domain>

<decisions>
## Implementation Decisions

### Hero Section
- **Composition:** Centered statement (text-focused) layout.
- **Background:** Grid pattern (reference style) with added 3D perspective ("floor" effect).
- **Effects:** "Subtle diffusion" text glow + background "glowing orb" element.
- **Actions:** Dual CTA — "View My Work" (Primary) and "Contact Me" (Secondary/Glass).

### Experience Timeline
- **Structure:** Single-sided vertical layout (not zig-zag).
- **Columns:** Left column for Icon/Connector line; Right column for Content (Role, Company, Date).
- **Hierarchy:** Role Title > Company > Date > Description.

### About Section
- **Layout:** Split layout (Text Left, Image Right) on desktop.
- **Image:** Use local file `public/foto.png` (verified existence).

### Cards & Grids
- **Skills:** Grid of individual cards (Icon + Name), glassmorphism style, hover glow.
- **Projects:** "Hero Image" style — Large 16:9 thumbnail top, content (Tags, Title, Desc, Link) bottom.

### Contact & Footer
- **Form:** Visual structure only (build inputs/labels), non-functional button.
- **Socials:** Use placeholder links (#) in the footer.
- **Footer Layout:** Simple 3-column style (Logo, Socials, Copyright/Links).

### Claude's Discretion
- Exact CSS implementation of the "3D perspective grid".
- Responsive stacking order for mobile (usually Content > Image).
- Specific placeholder text/data if files are empty.

</decisions>

<specifics>
## Specific Ideas

- **Reference:** Heavily rely on `_reference/code1.html` for visual styling (glassmorphism, border colors, gradients).
- **Grid:** User specifically requested adding "3D perspective" to the background grid (vs the flat one in reference).
- **Profile:** Use the real user photo available at `public/foto.png`.

</specifics>

<deferred>
## Deferred Ideas

- Contact form backend/email sending (Future Phase).
- Complex scroll-triggered animations (Phase 3).
- Updating placeholder social links to real URLs (User task later).

</deferred>

---

*Phase: 02-content-structure-layout*
*Context gathered: 2026-02-05*
