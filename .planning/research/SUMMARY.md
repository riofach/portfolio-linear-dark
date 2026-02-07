# Research Synthesis

**Date:** February 07, 2026
**Synthesized from:**
- STACK.md
- FEATURES.md
- ARCHITECTURE.md
- PITFALLS.md

## Executive Summary

The research recommends evolving the portfolio from a static Next.js site to a **dynamic, content-driven application** powered by **Next.js 16 (App Router)** and **Sanity (Headless CMS)**. This architecture allows for real-time content updates, multi-language support, and professional communication features without redeploying code.

The proposed stack leverages the latest React 19 ecosystem, using **Server Components** for performance and SEO, **Server Actions** for secure form handling (integrated with **Resend**), and **next-intl** for robust internationalization. This approach balances "enterprise-grade" best practices with the simplicity needed for a personal portfolio.

Key risks center around the complexity of moving from static imports to async data fetching and the security implications of exposing Server Actions. However, these are manageable with a strict "Repository Pattern" architecture and proper input validation.

## Key Findings

### Technology Stack
- **Core:** Next.js 16.1 (App Router), React 19, TypeScript 5.7, Tailwind 4.
- **CMS:** Sanity v5 (Headless) + `next-sanity`. Best-in-class App Router integration.
- **Email:** Resend + React Email (replaces Nodemailer).
- **i18n:** `next-intl` (Middleware-based routing).
- **Validation:** Zod + React Hook Form.

### Feature Priorities
- **Must-Have (MVP):**
  1. **CMS Integration:** Project showcase and experience data managed via Sanity Studio.
  2. **Contact Form:** Functional server-side email sending with validation.
  3. **i18n Routing:** `/en` and `/id` structure with localized UI shells.
  4. **SEO:** Dynamic sitemap and metadata generation.
- **Defer:** Dynamic OpenGraph generation, complex email templates, and full content localization (start with UI strings only).

### Architecture
- **Shift to Dynamic:** Move from `src/data/*.ts` imports to `src/services/cms/*.ts` async fetches.
- **Repository Pattern:** Decouple UI components from Sanity SDK using a service layer.
- **Component Boundaries:**
  - **Pages:** Fetch data, define metadata.
  - **Components:** Receive data as props (dumb/pure).
  - **Server Actions:** Handle mutations (email sending) with Zod validation.

### Critical Pitfalls
- **Security:** Server Actions are public endpoints; they require explicit Zod validation and rate limiting.
- **Performance:** i18n Middleware must be configured to ignore static assets (`_next`, images) to prevent 404s and latency.
- **Data Fetching:** Avoid calling Route Handlers from Server Components; use direct service function calls instead.

## Implications for Roadmap

The research suggests a 4-phase execution plan to handle the architectural shift systematically.

### Phase 1: Foundation & CMS
**Goal:** Establish the data layer and migrate content.
- **Tasks:** Initialize Sanity, define schemas (Project, Experience), create the `src/services/cms` layer, and refactor main components to accept dynamic data.
- **Research Flag:** None (Standard Sanity patterns).

### Phase 2: Internationalization (i18n)
**Goal:** Restructure routing for multi-language support.
- **Tasks:** Install `next-intl`, implement Middleware, move pages to `[locale]` directory, and translate static UI text.
- **Pitfall Prevention:** Carefully configure middleware matchers to avoid blocking static assets.

### Phase 3: Interactive Features
**Goal:** Enable user interaction.
- **Tasks:** Implement `sendEmail` Server Action with Resend, build the Contact Form, and add Zod validation/Rate limiting.
- **Research Flag:** Rate limiting strategy (simple KV vs. Upstash).

### Phase 4: Optimization & SEO
**Goal:** Optimize for visibility and performance.
- **Tasks:** Implement `generateMetadata` for dynamic routes, build `sitemap.ts`, and finalize "Draft Mode" for CMS previews.
- **Confidence:** High.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| **Stack** | High | Next.js 16 + Sanity is a well-documented, "golden path" combination. |
| **Features** | High | Table stakes are clear; scope is well-defined. |
| **Architecture** | High | The Repository Pattern effectively mitigates the risk of tight coupling. |
| **Pitfalls** | High | Specific, actionable preventions identified for the most common issues. |

**Gaps:**
- Specific localization strategy for rich text content in Sanity (field-level vs. document-level translation) needs a quick decision during Phase 1.

## Sources
- Next.js 16 Documentation
- Sanity.io Next.js Patterns
- Resend & React Email Docs
- next-intl Documentation
