# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Svelte 5 + Vite project set up using the official starter template. It's a simple, lean frontend application without a framework layer like SvelteKit. The project uses ES modules, modern JavaScript, and has type checking enabled via `jsconfig.json`.

## Key Commands

### Development
- `npm run dev` — Start the Vite dev server with HMR (usually on http://localhost:5173)
- `npm run build` — Build for production (outputs to `dist/`)
- `npm run preview` — Preview the production build locally

## Project Structure

- **`src/`** — Source code directory
  - **`App.svelte`** — Root component, entry point of the application
  - **`main.js`** — Initializes and mounts the App component to the DOM
  - **`lib/`** — Reusable component library (e.g., Counter.svelte)
  - **`assets/`** — Static images and SVGs
  - **`app.css`** — Global application styles

- **`public/`** — Static assets served at the root (icons.svg, favicon, etc.)
- **`index.html`** — HTML entry point
- **`vite.config.js`** — Vite configuration with @sveltejs/vite-plugin-svelte
- **`svelte.config.js`** — Svelte compiler configuration
- **`jsconfig.json`** — JavaScript/type checking configuration with `checkJs: true` enabled

## Development Notes

- **Type Checking**: JS type checking is enabled (`checkJs: true`), so use JSDoc comments for type hints or enable TypeScript if preferred
- **HMR State Preservation**: HMR is disabled for state preservation by default (see README.md for details). Store important state in Svelte stores if you need it to persist across HMR updates
- **No SvelteKit**: This uses plain Svelte with Vite, not the SvelteKit framework. If routing or server-side capabilities are needed later, migration to SvelteKit is possible since the project follows a similar structure
- **Svelte 5 Runes**: The project uses Svelte 5 runes (e.g., `$state()`) for reactivity. Avoid legacy reactive declarations if migrating old code

## Common Tasks

- **Add a new component**: Create a `.svelte` file in `src/lib/` and import it where needed
- **Style a component**: Add a `<style>` block in the `.svelte` file (scoped by default) or use `src/app.css` for global styles
- **Test during development**: Run `npm run dev` and manually test in the browser while editing files
