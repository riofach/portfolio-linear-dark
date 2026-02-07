# Phase 06: CMS Integration - Research

**Researched:** Sat Feb 07 2026
**Domain:** Headless CMS Integration (Sanity) with Next.js App Router
**Confidence:** HIGH

## Summary

This phase integrates Sanity CMS to replace static JSON files for content management. The critical requirement is supporting future internationalization (Indonesian/English) without refactoring later. Research confirms that **Field-level Internationalization** using `sanity-plugin-internationalized-array` is the standard and most robust approach for this portfolio use case, allowing shared assets (images, tags) and localized text side-by-side.

**Primary recommendation:** Use `next-sanity` for integration and `sanity-plugin-internationalized-array` for bilingual fields (English + Indonesian) from day one.

## Standard Stack

The established libraries for Sanity + Next.js App Router (v16) + React 19:

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| `next-sanity` | ^9.0.0 | Toolkit for Next.js + Sanity | Official wrapper, handles Draft Mode, Visual Editing, and Caching. |
| `sanity` | ^3.0.0 | The CMS Studio | The core Studio application. |
| `@sanity/image-url` | Latest | Image helper | Generates optimized image URLs from Sanity asset references. |
| `@portabletext/react` | Latest | Rich Text renderer | Renders Portable Text (Sanity's block content) to React components. |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `sanity-plugin-internationalized-array` | Latest | I18n UI | **CRITICAL:** Provides the best UI for field-level translations (en/id). |
| `sanity-plugin-lucide-icon-picker` | Latest | Icon Picker | Matches the project's `lucide-react` icon set, ensuring safe icon names. |
| `@sanity/vision` | Latest | GROQ Playground | Essential for testing queries inside the Studio. |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| `internationalized-array` | `document-internationalization` | Document-level creates separate docs for each language. Harder to maintain parity for simple portfolios. |
| `lucide-icon-picker` | String field | String field is error-prone; pickers prevent typos in icon names. |

**Installation:**
```bash
npm install next-sanity sanity @sanity/image-url @portabletext/react styled-components
npm install sanity-plugin-internationalized-array sanity-plugin-lucide-icon-picker @sanity/vision
```
*(Note: `styled-components` is often a peer dependency for Sanity Studio even if the main app uses Tailwind)*

## Architecture Patterns

### Recommended Project Structure
```
src/
├── sanity/
│   ├── client.ts        # export const client = createClient(...)
│   ├── env.ts           # Environment variable validation
│   ├── lib/             # Helper functions (image url builder, etc)
│   ├── queries.ts       # GROQ queries
│   └── schemaTypes/     # Schema definitions
│       ├── project.ts
│       ├── experience.ts
│       └── ...
├── app/
│   ├── (sanity)/        # Route group to exclude Studio from main layout
│   │   └── studio/
│   │       └── [[...tool]]/
│   │           └── page.tsx # Embedded Studio
│   └── api/
│       └── draft/
│           └── route.ts # Draft Mode handler
```

### Pattern 1: Field-Level Internationalization
**What:** Storing translations in a single document field using an array of values keyed by language.
**Why:** Keeps "Project" entities unified. You don't want 2 separate "Project A" documents where the image or link might accidentally drift.
**Example:**
```typescript
// src/sanity/schemaTypes/objects/localizedString.ts
import { defineType } from 'sanity'

export default defineType({
  name: 'localizedString',
  title: 'Localized String',
  type: 'internationalizedArrayString', // provided by plugin
  options: {
    languages: [
      { id: 'en', title: 'English' },
      { id: 'id', title: 'Indonesian' }
    ],
    defaultItem: { _key: 'en' }
  }
})

// Usage in Project schema
defineField({
  name: 'description',
  title: 'Description',
  type: 'localizedString', // Use the custom type
})
```

### Pattern 2: Draft Mode (Next.js 15/16)
**What:** Using `draftMode()` from `next/headers` instead of the old API routes.
**Example:**
```typescript
// app/api/draft/route.ts
import { draftMode } from 'next/headers'
import { redirect } from 'next/navigation'
import { validatePreviewUrl } from '@sanity/preview-url-secret'
import { client } from '@/sanity/client'
import { token } from '@/sanity/token'

export async function GET(request: Request) {
  const { isValid, redirectTo = '/' } = await validatePreviewUrl(
    client.withConfig({ token }),
    request.url
  )
  if (!isValid) return new Response('Invalid secret', { status: 401 })

  const draft = await draftMode()
  draft.enable()

  redirect(redirectTo)
}
```

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| I18n Input | Custom object `{en: string, id: string}` | `sanity-plugin-internationalized-array` | The plugin handles UI for adding/removing languages and visual consistency. |
| Icon Selection | Text input for "terminal" | `sanity-plugin-lucide-icon-picker` | Ensures the string matches exactly with `lucide-react` names. |
| Image URL building | String concatenation | `@sanity/image-url` | Handles cropping, resizing, hotspots, and CDN optimization automatically. |

## Common Pitfalls

### Pitfall 1: GROQ Query Complexity with I18n
**What goes wrong:** Frontend receives the full internationalized array (`[{_key: 'en', value: 'Hi'}, ...]`) instead of a simple string.
**Why it happens:** Fetching raw fields.
**How to avoid:** Use GROQ projection to select the language *at query time*.
```groq
// Query
*[_type == "project"]{
  title,
  "description": description[_key == $lang][0].value
}
```
**Or:** Fetch everything and use a lightweight helper function on the frontend to pick the string.

### Pitfall 2: Environment Variables
**What goes wrong:** Studio fails to load or API requests fail.
**Why it happens:** Sanity needs `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET` to be available to the client bundle.
**How to avoid:** Prefix variables with `NEXT_PUBLIC_`.

### Pitfall 3: React 19 Compatibility
**What goes wrong:** Some older Sanity plugins might have strict peer dependencies on React 18.
**How to avoid:** `next-sanity` v9+ and `sanity` v3.50+ are React 19 ready. Ensure plugins are updated.

## Code Examples

### Querying with Type Safety (sanity-typegen recommended but optional for now)
For this phase, manual typing matching the `src/data` interfaces is simpler.

```typescript
// src/sanity/queries.ts
import { groq } from 'next-sanity'

export const PROJECTS_QUERY = groq`*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  "description": description[_key == $lang][0].value, // Select language
  tags,
  link,
  "image": image.asset->url
}`
```

## Sources

### Primary (HIGH confidence)
- `next-sanity` GitHub/NPM - Verified v9.0.0 supports App Router & React 19.
- Sanity Docs (Localization) - Verified `internationalized-array` as best practice for field-level.

### Secondary (MEDIUM confidence)
- `sanity-plugin-lucide-icon-picker` - Verified via search, matches stack.

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - `next-sanity` is the de-facto standard.
- Architecture: HIGH - App Router patterns are well-documented.
- Pitfalls: HIGH - I18n complexity is a known common issue.

**Research date:** Sat Feb 07 2026
