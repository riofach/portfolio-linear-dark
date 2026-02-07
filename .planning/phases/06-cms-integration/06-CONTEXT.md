# Phase 6: CMS Integration - Context

**Gathered:** 2026-02-07
**Status:** Ready for planning

<domain>
## Phase Boundary

Transition content management from static files to Sanity CMS. Focus is on data modeling, Studio configuration, and fetching content. Email/Contact logic is Phase 8.

</domain>

<decisions>
## Implementation Decisions

### Project Schema Details
- **Description:** Simple Text only (no rich text/markdown complexity needed yet).
- **Images:** Single Hero Image per project.
- **Skills:** Simple Tags (array of strings) for easier entry.
- **Ordering:** Manual Rank field to control specific sort order.

### Blog & Portable Text
- **Code Blocks:** Supported, simple syntax highlighting only.
- **Images:** Flexible (Claude's discretion for implementation), likely standard portable text image support.
- **Author:** Implicit (hardcoded site owner), no author field needed.
- **Custom Components:** None (keep it simple: text, images, code).

### Studio Organization
- **Settings:** Singleton pattern (one document for global site config).
- **Grouping:** Claude to organize sidebar for best usability.
- **Previews:** No live "Draft Mode" link yet (Studio preview is sufficient).
- **Icons:** Custom icons for visual clarity in sidebar.

### Migration Strategy
- **Data Entry:** Manual Entry (clean slate).
- **Assets:** Upload to Sanity (leverage free tier auto-compression/WebP).
- **Legacy Data:** Keep local files as backup (`legacy/` or commented out).
- **Dev Approach:** Hard Switch (replace components directly, acceptable temporary breakage in dev).

### Claude's Discretion
- Exact schema field names (e.g., `publishedAt` vs `date`).
- Internal Studio code structure (`deskStructure.js` config).
- Image hotspot/crop settings defaults.

</decisions>

<specifics>
## Specific Ideas

- Use Sanity's image pipeline for automatic WebP conversion and optimization.
- "Linear-dark" aesthetic should be preserved in the frontend rendering.

</specifics>

<deferred>
## Deferred Ideas

- **Contact Form Email Routing:** Cloudflare email routing `hello@rioraditya.click` -> Gmail (Phase 8).
- **Draft Mode:** Live URL previews (Phase 9 or later).

</deferred>

---

*Phase: 06-cms-integration*
*Context gathered: 2026-02-07*
