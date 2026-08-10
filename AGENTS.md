# Repository Instructions

## What this repo actually is

This is **not just a portfolio site**. It's Hieu's personal Vercel deployment (hieule.ca) that hosts several unrelated things behind one build/deploy pipeline:

- **The portfolio SPA** (`src/`) - the public-facing React site: home page, projects, experience. This is what recruiters/clients see.
- **`/notes`** - a route in the same SPA (`src/pages/NotesPage.jsx`, content in `src/data/notes.js`) that is intentionally **unlinked** from any nav/footer. It's Hieu's private setup/config log, not portfolio content. Do not add it to navigation, sitemaps, or link it from anywhere - that would defeat the point.
- **`api/tiktok-images.js`** - a standalone Vercel serverless function (image proxy for a Supabase bucket, allowlisted to one hostname). Unrelated to the React app; it's just co-deployed here.
- **`public/hydro-ai/`** - static, standalone HTML pages (`support.html`, `privacy.html`) for a separate mobile app called "Hydro AI". Plain HTML/CSS, no build step, no relation to the React app or its Tailwind theme.

Because of this, changes to one area (e.g. portfolio styling) should not leak into or assume anything about the others. When asked to work on "the site," clarify/infer which of these four surfaces is actually meant.

## Commands

- `npm run dev` - start Vite dev server
- `npm run build` - production build (outputs to `dist/`)
- `npm run preview` - preview the production build locally
- `npm run lint` - ESLint over `.js`/`.jsx` (max-warnings 0)

No test suite exists in this repo.

## Routing / deployment shape (`vercel.json`)

Vercel rewrites everything **except** `/api/*` and `/hydro-ai/*` to `/index.html`, so:
- Anything under `api/` is a serverless function, not routed through React Router.
- Anything under `public/hydro-ai/` is served as static files, also bypassing React Router.
- Every other path is handled client-side by `src/App.jsx`'s `<Routes>`.

## Portfolio app architecture (`src/`)

- `App.jsx` owns the top-level layout: fixed nav, `<Routes>` for pages, and a shared footer (social links) rendered outside the routed content on every page.
- `pages/` are route-level screens (`Home`, `ProjectsPage`, `NotesPage`); `components/` are the reusable pieces `Home` composes (`HeroSection`, `ExperienceSection`, `ProjectsSection`, etc.).
- Content is data-driven: `data/projects.js`, `data/experiences.js`, `data/notes.js` are plain arrays consumed by the corresponding page/section. Adding a project, experience entry, or note means editing these files, not JSX.
- Theming is centralized in `constants/colors.js` (single source of truth for light/dark palettes) and applied via Tailwind CSS variables + a `dark` class toggled by `context/ThemeContext.jsx` (persisted to `localStorage`, defaults to system preference). `index.html` has an inline pre-hydration script that sets the `dark` class before React mounts, to avoid a flash of the wrong theme - keep that in sync with `ThemeContext.jsx`'s logic if theme defaulting ever changes.
- In-page section links (`#experience`) are handled specially in `App.jsx` (`handleNavClick`) to support navigating to a hash from a different route, then scrolling.
