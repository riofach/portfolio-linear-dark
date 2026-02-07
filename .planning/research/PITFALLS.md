# Domain Pitfalls: Backend & Security Integration

**Domain:** Next.js App Router (CMS, Email, i18n, SEO)
**Researched:** 2025-02-07

## Critical Pitfalls

Mistakes that cause security breaches, broken features, or major performance regressions.

### Pitfall 1: Unprotected Server Actions (The "Public Function" Trap)
**What goes wrong:** Developers treat Server Actions (`'use server'`) like internal private functions. In reality, **every Server Action is a public HTTP endpoint**. Attackers can invoke them with arbitrary data, bypassing UI-level validation.
**Why it happens:** The "RPC-like" syntax masks the fact that a network request is happening.
**Consequences:** Spam floods via contact forms, unauthorized data mutations, or database injection.
**Prevention:**
1.  **Always** validate input with Zod *inside* the Server Action (not just on the client).
2.  Implement rate limiting (e.g., via `@upstash/ratelimit` or simple KV) for public actions like "Send Email".
3.  Use honeypot fields to catch bots.
**Detection:** Review `actions.ts` files. If there is no `z.parse()` or authentication check at the very top, it's vulnerable.

### Pitfall 2: i18n Middleware Blocking Static Assets
**What goes wrong:** The middleware matcher for internationalization (`middleware.ts`) is too broad, intercepting requests for images, fonts, or `_next` chunks.
**Why it happens:** Copy-pasting default middleware config without excluding static paths.
**Consequences:** 404s on images, broken styles, or massive performance degradation as static assets bypass the CDN and hit the Node.js server.
**Prevention:** Use a negative lookahead in the matcher to exclude internal paths.
```typescript
export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};
```
**Detection:** Check network tab for 404s on `.css` or `.png` files, or high latency on static asset requests.

### Pitfall 3: Calling Route Handlers from Server Components
**What goes wrong:** A Server Component fetches data by calling its own internal API Route (e.g., `fetch('http://localhost:3000/api/posts')`).
**Why it happens:** trying to reuse logic intended for the client-side.
**Consequences:** unnecessary network round-trip, potential timeouts during build, and "fetch failed" errors in production environments.
**Prevention:** Extract the logic into a shared controller/service function and call it directly in the Server Component.
**Instead:**
```typescript
// db/posts.ts
export async function getPosts() { ... }

// app/page.tsx
const posts = await getPosts(); // Direct call
```

## Moderate Pitfalls

Mistakes that hurt UX, SEO, or Developer Experience.

### Pitfall 4: Broken "Draft Mode" Implementation
**What goes wrong:** Editors cannot preview changes from the CMS.
**Why it happens:** The `DraftMode` cookie is not set correctly, or the data fetching logic doesn't switch between `published` and `draft` datasets based on `draftMode().isEnabled`.
**Prevention:**
1.  Ensure the Route Handler (`app/api/draft/route.ts`) correctly calls `draftMode().enable()`.
2.  In your fetch utility, check `isEnabled` and pass the correct "preview" token to your CMS client.
3.  **Crucial:** Bypass the Next.js Data Cache when in draft mode (`{ cache: 'no-store' }` or `next: { revalidate: 0 }`).

### Pitfall 5: "Metadata" Generation Mismatches
**What goes wrong:** Dynamic pages share the same title/description, or open graph images are missing.
**Prevention:** Use `generateMetadata` for dynamic routes. Ensure `canonical` URLs in `metadata.alternates` handle the i18n prefixes correctly (e.g., `/en/about`, `/es/about`).
**Detection:** Use the "SEO Meta in 1 Click" extension or inspect `<head>` tags on dynamic routes.

### Pitfall 6: Sitemap Exclusion of Dynamic Routes
**What goes wrong:** `sitemap.ts` only lists static pages (`/`, `/about`), ignoring CMS-generated blog posts.
**Prevention:** Inside `sitemap.ts`, fetch the list of slugs from the CMS and map them to XML entries.
```typescript
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts();
  return posts.map(post => ({ url: `${baseUrl}/blog/${post.slug}` }));
}
```

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| **CMS Integration** | Stale Content | Implement **Route Handlers** for CMS webhooks to call `revalidateTag` immediately on publish. |
| **Email/Forms** | Spam & Abuse | Add **Server-Side Validation** (Zod) and **Rate Limiting** immediately. Do not rely on client-side HTML5 validation. |
| **i18n Setup** | Routing Loops | Carefully configure `next-intl` or middleware to handle the root `/` redirect without causing infinite loops. |
| **SEO** | Duplicate Content | Ensure `hreflang` tags are generated automatically by the i18n library or manually in `generateMetadata`. |

## Sources

- Next.js Docs: [Server Actions Security](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#security)
- Next.js Docs: [Internationalization](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
- Common Pitfalls: [Vercel Blog](https://vercel.com/blog/common-mistakes-with-the-next-js-app-router-and-how-to-fix-them)
