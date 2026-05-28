# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Environment

Before running any build or deploy command, set:

```bash
export NODE_OPTIONS=--openssl-legacy-provider
```

This is required due to OpenSSL compatibility with the CRA toolchain.

## Commands

- `npm start` — dev server at localhost:3000
- `npm run build` — production build (rimraf → react-scripts build → react-snap for static pre-rendering)
- `npm run deploy` — push `build/` to GitHub Pages (`gh-pages` branch)

No separate lint or format scripts; CRA's built-in ESLint (`react-app` preset) runs during build.

## Deployment

The site deploys to `yanruyu126.github.io` via the `gh-pages` branch. Workflow: commit to `main`, then run `npm run deploy`.

Uses `HashRouter` (`#/` prefix) because GitHub Pages doesn't support client-side routing.

## Content

All site content is data-driven. Update these files to add or change entries:

| File | Content |
|------|---------|
| `src/data/publications.ts` | Papers — schema: `title`, `figure`, `authors[]`, `conference`, `year`, `paperLink`, `projectLink`, `codeLink?`, `desc` |
| `src/data/projects.tsx` | Research/software projects |
| `src/data/project-hightlight.ts` | Featured items on the home page |
| `src/data/contact.ts` | Contact links |

For authors with equal contribution, append `*` to the name (e.g., `"Ruyu Yan*"`).

## Tech Stack

TypeScript (strict) + React 18 + MUI v5 + SCSS (Skel grid framework). Styles live in `src/static/css/` with breakpoints: `xlarge` 1680px → `xsmall` 480px.
