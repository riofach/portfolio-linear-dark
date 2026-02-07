# Technology Stack

**Project:** Portfolio Linear Dark
**Researched:** February 7, 2026
**Context:** Full stack specification including Backend, Security, and SEO.

## Recommended Stack

### Core Frontend (Validated)
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Next.js** | `^16.1.0` | Framework | Turbopack default, stabilized Cache Components, built-in MCP. |
| **React** | `^19.0.0` | UI Library | Actions, server components, and new hooks. |
| **Tailwind CSS** | `^4.0.0` | Styling | Zero-config "Oxide" engine, CSS-first configuration. |
| **Motion** | `^12.0.0` | Animation | Essential for "Linear-style" micro-interactions. |
| **TypeScript** | `^5.7.0` | Language | Standard for type safety. |

### Backend & CMS (New)
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Sanity** | `^5.8.0` | Headless CMS | Best App Router integration, generous free tier (Content Lake), built-in image optimization. |
| `next-sanity` | `latest` | CMS Client | Official helper for fetching/previews. |
| **Resend** | `^6.9.0` | Email API | Modern, typed email API. Replaces Nodemailer. |
| `@react-email/components` | `latest` | Email Templates | Write emails in React. |

### Internationalization (New)
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **next-intl** | `^4.8.0` | i18n | Native App Router support, RSC compatible, lightweight. |

### Validation & Forms (New)
| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| **Zod** | `^4.3.0` | Schema Validation | Standard for form/API validation. |
| `react-hook-form` | `^7.50.0` | Form State | Client-side form handling. |

### Supporting Libraries
| Library | Version | Purpose | Notes |
|---------|---------|---------|-------|
| `shadcn/ui` | Latest | UI Components | Accessible, unstyled bases. |
| `lucide-react` | Latest | Icons | Clean SVG icons. |
| `clsx` / `tailwind-merge` | Latest | Class Utils | Tailwind class management. |
| `next-themes` | Latest | Dark Mode | Theme switching. |
| `nuqs` | Latest | URL State | Search param management. |
| `biome` | Latest | Linting | Fast lint/format. |

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| CMS | **Sanity** | Strapi | Strapi requires self-hosting or paid cloud ($29/mo). Sanity's managed free tier is better for portfolios. |
| Email | **Resend** | Nodemailer | Nodemailer requires managing SMTP credentials and lacks a modern SDK. |
| i18n | **next-intl** | next-i18next | `next-i18next` is heavier and designed for Pages Router. |
| SEO | **Metadata API** | next-sitemap | Built-in `sitemap.ts` in App Router removes need for external plugins for simple use cases. |

## Integration Strategy

### CMS (Sanity)
- **Pattern:** `npm create sanity@latest` in `studio/` or embedded route.
- **Data:** Fetch with `next-sanity` in Server Components.
- **Images:** Use `next-sanity-image` or Sanity's image builder with `next/image`.

### Email (Resend)
- **Pattern:** Server Action `actions/send-email.ts` calls Resend API.
- **Security:** API Key in `.env.local` (server-side only).

### i18n (next-intl)
- **Routing:** `[locale]/layout.tsx` wrapper.
- **Middleware:** `src/middleware.ts` matcher for locale detection.

## Installation

```bash
# Core (Existing)
npm install next@latest react@latest react-dom@latest motion
npm install tailwindcss@next @tailwindcss/postcss postcss

# Backend & Security (New)
npm install next-sanity @portabletext/react
npm install resend @react-email/components @react-email/render
npm install next-intl
npm install zod react-hook-form @hookform/resolvers
```

## Sources
- [Sanity Next.js App Router](https://www.sanity.io/docs/next-js-app-router)
- [Resend Documentation](https://resend.com/docs/intro)
- [next-intl Docs](https://next-intl-docs.vercel.app/)
