# Organick — E-commerce SPA

**Live demo:** [https://ogranic-ts.vercel.app](https://ogranic-ts.vercel.app)

## Core stack

- React 19
- TypeScript
- Vite
- Zustand
- Tailwind CSS

## Infrastructure

Production image: multi-stage **Docker** build (Node → static `dist`) served by **nginx**. `try_files` routes all non-file requests to `index.html`, so **client-side (React Router) URLs work on refresh and deep links**—required for SPA hosting.

## Key features

- **Cart:** React Context with `localStorage` sync for persistence across sessions.
- **Catalog:** REST data via Axios (MockAPI).
- **Routing:** `react-router-dom` with layout-level **Framer Motion** (`AnimatePresence` / `motion`) for route transitions.
- **Styling:** Tailwind CSS plus SCSS where module-scoped styles are needed.

## Getting started

**npm**

```bash
npm install
npm run dev
```

**Docker Compose** (builds and serves on [http://localhost:8080](http://localhost:8080))

```bash
docker compose up --build
```
