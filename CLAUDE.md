# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start Vite dev server
- `npm run build` — production build
- `npm run preview` — preview built output
- `npm run lint` — ESLint over the repo

No test runner is configured.

## Architecture

Vite + React 18 SPA (logistics company site) using `react-router-dom` v6. Entry: `src/main.jsx` → `src/App.jsx`, which mounts `NavbarCom`, a `<Routes>` block, and `FooterCom`. Routes (`/`, `/about`, `/apply`, `/contact`, `/trucks`, `/services`, `/privacy`, 404) map to page components under `src/Pages/`. Reusable layout/UI lives under `src/components/` (e.g. `NavbarCom`, `FooterCom`, `Construction` — a maintenance overlay currently commented out in `App.jsx`). `src/Pages/Scroll To Top/ScrollToTop.jsx` resets scroll on navigation.

Global state: `src/Context.jsx` exposes `BlogProvider` / `useBlog`, fetching `https://midnight-sec-back.onrender.com/api/products/` into an `array` consumed by pages that render dynamic content. Note: the provider is defined but not currently wrapping `<App/>` in `main.jsx` — wire it in there if a page needs `useBlog`.

UI stack mixes MUI (`@mui/material`, `@mui/icons-material`), Emotion, styled-components, FontAwesome, `react-icons`, and plain CSS (`index.css` plus per-component CSS). Phone inputs use `react-phone-input-2` + `libphonenumber-js`; HTTP via `axios` or `fetch`.

Build uses `@vitejs/plugin-react-swc`. Path conventions are case-sensitive folder names like `Pages/`, `Image/` — keep imports matching exactly for Linux/CI builds.
