# Architecture Patterns: Backend & Security Integration

**Domain:** Portfolio Website (Next.js 16)
**Researched:** 2026-02-07
**Context:** Integration of Headless CMS, Email, and i18n into existing App Router architecture.

## Recommended Architecture

The architecture shifts from **Static Data (Client Import)** to **Dynamic/ISR Data (Server Fetch)**.

```mermaid
graph TD
    User[User Browser]
    
    subgraph "Next.js 16 App Router"
        Middleware[Middleware (i18n routing)]
        Layout[RootLayout / [locale] Layout]
        Page[Page (Server Component)]
        Action[Server Action (Email)]
        ClientComp[Client Components (UI)]
    end
    
    subgraph "External Services"
        CMS[Headless CMS (Sanity)]
        Email[Email Service (Resend)]
    end

    User --> Middleware
    Middleware --> Layout
    Layout --> Page
    Page -- "1. Fetch Content" --> CMS
    Page -- "2. Pass Data (Props)" --> ClientComp
    ClientComp -- "3. Submit Form" --> Action
    Action -- "4. Send API Req" --> Email
```

### Component Boundaries

| Component Type | Responsibility | New Behavior |
|----------------|----------------|--------------|
| **Page (Server)** | Data Fetching, Metadata | Fetches from CMS, generates Metadata, passes data to Client Components. |
| **Client Component** | UI Interaction, Animation | Receives data as props. No direct imports from `src/data`. |
| **Server Action** | Form Handling, Mutations | Validates input (Zod), interacts with external APIs (Resend). |
| **Middleware** | Routing, Locale Detection | Redirects to `/[locale]` paths based on headers/cookie. |

---

## 1. CMS Integration (Headless)

**Recommendation:** **Sanity.io** (or similar Headless CMS like Contentful/Strapi)
**Why:**
- Excellent Next.js 16 integration (`next-sanity`).
- "Visual Editing" capabilities (overlays on live site).
- Free tier suffices for portfolio.
- Flexible schema matches current `src/data` structure easily.

### Integration Strategy: Repository Pattern
Avoid coupling components directly to Sanity SDK. Use a service layer.

**New Structure:**
- `src/services/cms/client.ts` -> configured Sanity client.
- `src/services/cms/queries.ts` -> GROQ queries.
- `src/services/cms/types.ts` -> Types generated from schema.
- `src/services/cms/index.ts` -> Exported functions (e.g., `getProjects()`, `getAbout()`).

**Data Flow:**
1. **Define Schema:** Replicate `src/data/projects.ts` interface in Sanity.
2. **Fetch:** In `src/app/[locale]/page.tsx`:
   ```typescript
   import { getProjects } from "@/services/cms";
   
   export default async function Home({ params }: { params: { locale: string } }) {
     const projects = await getProjects(params.locale); // Pass locale for localized content
     return <ProjectsSection data={projects} />;
   }
   ```
3. **Caching:** Use `unstable_cache` or `fetch` tags in the service layer for ISR.

### Migration Steps
1. Create Sanity project.
2. Define schemas for `Project`, `Experience`, `Skill`, `GeneralConfig`.
3. Create `src/services/cms`.
4. Refactor `src/components/sections/Projects.tsx` to accept `data` prop instead of importing.

---

## 2. Internationalization (i18n)

**Recommendation:** **next-intl**
**Why:**
- Built for App Router (Server Components support).
- Type-safe messages.
- Middleware-based routing is standard for SEO.

### Architecture Changes

1. **Routing:**
   - Move `src/app/page.tsx` → `src/app/[locale]/page.tsx`
   - Move `src/app/layout.tsx` → `src/app/[locale]/layout.tsx`
   - Create new `src/app/layout.tsx` (Root) that just renders children (required by Next.js) or handles redirects.

2. **Middleware:**
   - Create `src/middleware.ts` to handle `en`, `id`, etc.
   
3. **Content Strategy:**
   - **Static UI Text (Nav, Buttons):** Store in `messages/en.json`, `messages/id.json`.
   - **Dynamic Content (Projects, Bio):** Store in **CMS** with localized fields (e.g., `title` vs `title_id`).

4. **Component Usage:**
   - **Server Components:** `useTranslations` from `next-intl`.
   - **Client Components:** Wrap tree in `NextIntlClientProvider` in `[locale]/layout.tsx`.

---

## 3. Email Integration

**Recommendation:** **Resend** + **React Email**
**Why:**
- Industry standard for Next.js.
- Developer-friendly SDK.
- High deliverability.

### Integration Strategy: Server Actions

**Current:** `src/components/sections/Contact.tsx` uses `onSubmit` with `setTimeout`.
**New:**
1. Create `src/actions/send-email.ts`:
   ```typescript
   "use server";
   import { Resend } from 'resend';
   import { formSchema } from '@/lib/schemas'; // Move Zod schema here
   
   export async function sendEmail(formData: FormData) {
     // 1. Validate with Zod
     // 2. Rate limit (optional)
     // 3. Send via Resend
     // 4. Return success/error
   }
   ```
2. Update `Contact.tsx` to use `useTransition` or `useFormStatus` (if using native forms) or keep `react-hook-form` and call the server action in `onSubmit`.

---

## 4. SEO Architecture

**Strategy:** Dynamic Metadata & Sitemap

1. **Metadata:**
   - In `src/app/[locale]/layout.tsx`: Define base metadata (title template, open graph).
   - In `src/app/[locale]/page.tsx`:
     ```typescript
     export async function generateMetadata({ params }) {
       const homeData = await getHomeData(params.locale);
       return {
         title: homeData.title,
         description: homeData.summary,
         alternates: {
           languages: {
             'en': '/en',
             'id': '/id',
           },
         },
       };
     }
     ```

2. **Sitemap (`src/app/sitemap.ts`):**
   - Must now be `async`.
   - Fetch all dynamic routes (if any, e.g., blog posts) from CMS.
   - Generate entries for all locales.

---

## Build Order & Dependencies

To minimize breakage, follow this order:

1.  **Foundation (CMS):**
    *   Set up CMS schemas.
    *   Create `src/services/cms`.
    *   Refactor components to accept props (dumb components).
    *   *Result:* App still works, but data comes from CMS.

2.  **Structure (i18n):**
    *   Install `next-intl`.
    *   Move pages to `[locale]`.
    *   Add middleware.
    *   *Result:* URLs change to `/en`, content is still English (mostly).

3.  **Integration (Email):**
    *   Implement Server Action.
    *   Connect Contact form.
    *   *Result:* Working contact form.

4.  **Optimization (SEO):**
    *   Add dynamic metadata.
    *   Add sitemap/robots.
    *   *Result:* Production ready.

## Pitfalls to Avoid

*   **Mixed Data Sources:** Don't keep some projects in `data.ts` and some in CMS. Migrate 100%.
*   **Client-Side Fetching:** Avoid `useEffect` for CMS data. Use Server Components.
*   **Middleware Bloat:** Keep middleware simple (matcher regex). Don't fetch CMS data in middleware.
*   **Deep Prop Drilling:** If prop drilling becomes annoying with i18n/CMS data, use Context (for global settings) or Composition (passing slots).

## Sources
*   Next.js 16 Docs (Server Actions, Metadata)
*   next-intl Documentation (App Router Setup)
*   Sanity.io Next.js Toolkit Documentation
*   Resend Documentation
