<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Project conventions

- **i18n is hand-rolled**, not next-intl. Locales are `en` and `zh`, declared via `generateStaticParams` in `app/[locale]/layout.tsx` and served from the `EN`/`ZH` configs assembled under `lib/config/` (types in `lib/config/types.ts`, messages split into `lib/config/{en,zh}/`). `app/page.tsx` redirects to the locale hinted by the `Accept-Language` header (defaults to `en`). Add new locales by extending `lib/config/` and the static params. Locale-specific content is modeled as optional fields on `Config` (e.g. `dedication`, `closing` are zh-only).
- `app/layout.tsx` returns `children` directly (no wrapping `<html>`/`<body>`); the per-locale `<html lang>` is emitted by `app/[locale]/layout.tsx`, and `app/not-found.tsx` renders its own `<html>` since it sits outside the locale layout. Keep this split.
- Locale is provided to client components through `ConfigProvider`/`useConfig()` from `components/i18n.tsx`; the language switcher in `components/navbar.tsx` rewrites the locale segment of the current pathname.
