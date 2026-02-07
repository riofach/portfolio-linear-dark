# Research Summary: Backend & Security Integration

**Project:** Portfolio Linear Dark
**Researched:** February 7, 2026
**Overall confidence:** HIGH

## Executive Summary

To transform the portfolio from a static showcase into a dynamic, global platform, we will integrate **Sanity (CMS)**, **Resend (Email)**, and **next-intl (i18n)**. This stack leverages Next.js 16's App Router capabilities (Server Actions, Metadata API) to minimize client-side JavaScript while delivering a robust editing experience and secure communication channel.

The research confirms that **Sanity v5** and **next-intl v4** are the optimal choices for 2026, offering native support for React Server Components and "Visual Editing" which aligns perfectly with the project's high-polish "Linear-style" aesthetic.

## Key Findings

**Stack:** Sanity (CMS), Resend (Email), next-intl (i18n), Zod (Validation).
**Architecture:** Move from static `src/data` to a **Service Layer** pattern fetching from Sanity.
**Critical pitfall:** Unprotected Server Actions (spam risk) and improper i18n middleware configuration (blocking static assets).

## Implications for Roadmap

Based on research, suggested phase structure for this milestone:

1.  **Phase 2.1: CMS Foundation** - Setup Sanity Studio and `next-sanity`.
    -   *Rationale:* Content drives the schema. We need the CMS ready before we can migrate data.
    -   *Addresses:* Dynamic Project Content (Features).

2.  **Phase 2.2: Content Migration & Fetching** - Replace `src/data/*.ts` with Sanity fetches.
    -   *Rationale:* Validates the CMS integration without changing the UI structure yet.
    -   *Avoids:* Mixed data sources (Pitfall).

3.  **Phase 2.3: Internationalization (i18n)** - Implement `next-intl` routing.
    -   *Rationale:* This changes the URL structure (`/[locale]`). Doing this *after* data is ready makes testing easier.
    -   *Addresses:* Localized Content (Features).

4.  **Phase 2.4: Contact & Security** - Server Actions with Resend & Zod.
    -   *Rationale:* Independent feature. Needs the API keys and server-side logic.
    -   *Avoids:* Spam/Abuse (Pitfall).

5.  **Phase 2.5: SEO & Polish** - Dynamic Metadata, Sitemap, Robots.
    -   *Rationale:* The "cherry on top". Depends on final URL structure and content.
    -   *Addresses:* Discoverability.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Sanity v5, Resend v6, next-intl v4 are all stable and well-documented for Next.js 16. |
| Features | HIGH | Requirements are standard for a portfolio (Form, CMS, SEO). |
| Architecture | HIGH | App Router patterns (Server Actions, Layouts) are mature. |
| Pitfalls | HIGH | Common issues (middleware, spam) are well-understood with clear mitigations. |

## Gaps to Address

-   **Deep Localization:** We are assuming "UI strings" are enough for MVP. Full content localization (translating every project description) is a content task, not just tech.
-   **Rate Limiting:** We need to pick a specific strategy (e.g., Upstash) or just use a simple in-memory/database check if traffic is low.
