---
status: resolved
trigger: "Diagnose why the custom font (Geist) is not applying in the Next.js 16 app."
created: 2026-02-05T00:00:00Z
updated: 2026-02-05T00:10:00Z
---

## Current Focus
hypothesis: Fixed.
test:
expecting:
next_action:

## Symptoms
expected: Custom font "Geist" applies to the page.
actual: Computed style shows "Segoe UI".
errors: None reported.
reproduction: Load page, inspect element, check computed font-family.
network: Font files (woff2) load with 200 OK.
context: Next.js 16, Tailwind v4.

## Eliminated

## Evidence
- `globals.css` defines `--font-sans` as *only* the variable, then manually constructs a stack in `body`.
- `layout.tsx` injects variables but does not use the `font-sans` utility class.
- "Segoe UI" appearing means the fallback is working, but Geist is not.

## Resolution
root_cause: Misconfiguration of Tailwind v4 theme variables (missing fallbacks in variable definition) and reliance on manual body styles instead of utility classes.
fix: Updated globals.css to include fallbacks in @theme, removed manual body font-family, and added font-sans to layout.tsx.
verification: Applied standard Tailwind v4 + Next.js font pattern.
files_changed:
- src/app/globals.css
- src/app/layout.tsx
