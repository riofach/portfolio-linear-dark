# Context: Phase 1 - Foundation & Navigation

## 1. Navigation UX & Aesthetics
**Decision:** High-end "Smart" behavior with "Linear-style" minimalism.
- **Header Behavior:** "Smart" sticky. Hides on scroll *down* to maximize viewing area, reveals immediately on scroll *up* for access.
- **Visual Style:** "Subtle Frost". Use a low-opacity background (e.g., `bg-black/50` or `bg-zinc-950/70`) with a high blur value (`backdrop-blur-md` or `lg`) to keep it legible but airy.
- **Mobile Interaction:** **Dropdown** menu. Animated height expansion or a simple motion dropdown from the header bar, rather than a side-drawer or full-screen takeover.
- **Branding:** **Text-only**. Clean, bold typography (using the chosen font) for the name/logo. No SVG icon required initially.

## 2. Data Schema Definition
**Decision:** Rich metadata support to enable future "portfolio-quality" displays.
- **Project Structure:** 
  - Mandatory fields: `Title`, `Description`, `TechStack` (array), `DemoURL`, `RepoURL`, `Thumbnail` (image path).
  - *Note:* Ensure types support optionality if a private repo doesn't have a link, but the schema should encourage completeness.
- **Skills:** **Flat List**. A simple, tag-cloud-like array of strings. No complex categorization (Frontend/Backend) required for now.
- **Experience:** **Full Precision**. Date strings should support "Month Year" format (e.g., "Jan 2022 - Present"). 
- **Socials:** Explicit support for: **GitHub, LinkedIn, Instagram, Threads, Dribbble**.

## 3. Theme System & Typography
**Decision:** "Linear-Dark" Aesthetic — Premium, high-contrast but not harsh.
- **Background:** **Rich Dark Gray**. Avoid pure `#000000`. Use Tailwind's `zinc-950` or a custom slate-950 equivalent to give depth.
- **Accents:** **Mixed Glow**. 
  - Primary UI elements: Neutral (White/Silver) glow.
  - Featured/Highlight elements: **Violet** glow.
- **Typography:** **Geist Sans**. Use Vercel's Geist font family for that technical, modern, geometric look.
- **Borders:** **Subtle & Fading**. Use gradients for borders (mask-image or border-image) rather than solid 1px lines, creating a "light separation" effect.

## 4. Routing & Scroll Architecture
**Decision:** "Luxury" SPA feel with momentum scrolling.
- **Scroll Engine:** **React Lenis**. Implement this library to override native scroll with smoothed, momentum-based scrolling.
- **Navigation State:**
  - **Scroll Spy:** **Active**. Header links must highlight automatically as the user reaches the corresponding section.
  - **Progress Bar:** **Enabled**. A subtle loading/progress bar at the top of the viewport indicating scroll depth.
  - **URL Sync:** **Active**. The URL hash (`/#about`) should update dynamically as the user scrolls into new sections.
