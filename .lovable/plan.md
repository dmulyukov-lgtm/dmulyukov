
## Goal

Build the foundation of Danis's personal site: a cohesive design system (light + dark), a sticky scaffold of 11 placeholder sections, and a working role switcher (QA Lead ↔ Delivery / Engineering Manager) wired via URL + localStorage + React context. No real copy yet.

## Design system

- Palette: warm off-white neutrals in light, deep charcoal (not pure black) in dark. Single confident accent — a muted indigo/violet (e.g. oklch around 0.55 0.18 275), used only for interactive emphasis (toggle active state, links, primary button).
- Type: headings in a modern slightly-distinctive sans (Instrument Sans or Space Grotesk), body in Inter. Loaded via `<link>` in `__root.tsx`, registered as `--font-display` / `--font-sans` in `@theme`.
- Tokens defined in `src/styles.css` (`@theme inline` + `:root` / `.dark`): background, foreground, muted, card, border, accent, accent-foreground, ring. Medium radius (`--radius: 0.75rem`). Soft shadow tokens.
- Theme toggle: class-based `.dark` on `<html>`, initialized from `localStorage` → system preference. Stored in a small `ThemeProvider`.
- Motion: a tiny `FadeIn` wrapper using IntersectionObserver for on-scroll reveal, and a 200ms crossfade for role-driven content swaps. No heavy libraries.

## Role switcher architecture

- `RoleProvider` (React context) at the root, exposing `{ role, setRole }` where `role` is `'qa' | 'em'`.
- Init order on mount: `?role=` query param → `localStorage.role` → default `'qa'`. Validate against allowed values.
- On change: update state, write `localStorage`, and replace URL search param via TanStack Router's `useNavigate({ search: prev => ({ ...prev, role }) })` (no full reload).
- Root route declares `validateSearch` with `zod` + `fallback` so `role` is typed.
- `<RoleSwitch />` segmented control component used in the hero and in the sticky nav. Active state uses the accent color; transitions are 150ms.
- A `<RoleFade>` helper crossfades children keyed on `role` so any section can show role-specific text smoothly.

## Page scaffold (one component per section, in `src/components/sections/`)

Order in `src/routes/index.tsx`:

1. `<SiteNav />` — sticky, blurred background, name on left, anchor links (About, Approach, Career, Projects, Skills, Writing, Contact), compact role switch, theme toggle, Email + LinkedIn buttons.
2. `<Hero />` — name, role label (from context), one-line pitch placeholder that swaps per role via `RoleFade`, primary buttons (LinkedIn, Email, Download CV), large role switch.
3. `<StatBand />` — 4 metric placeholders, set differs per role.
4. `<LeadershipApproach />` — 3–4 principle cards.
5. `<CareerTimeline />` — vertical timeline, ~6 entries, each an expandable disclosure (`<details>`-based for a11y) with bullet placeholders.
6. `<SideProjects />` — 3 project cards (title, description, stack tag chips, CTA).
7. `<AINativePractice />` — single feature block.
8. `<SkillsMap />` — ~6 grouped skill clusters with tag chips.
9. `<Writing />` — list of article placeholders.
10. `<Contact />` — LinkedIn, email, Download CV button.
11. `<SiteFooter />` — minimal.

All section text is obvious placeholders ("Placeholder headline — QA angle", "Lorem-ish bullet 1"). Each section uses `id` anchors matching the nav.

## Accessibility & responsiveness

- Semantic landmarks: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`.
- Role switch is a `role="radiogroup"` with two `role="radio"` buttons; theme toggle is a `button` with `aria-label` and `aria-pressed`.
- Visible focus ring using accent color.
- Mobile-first Tailwind utilities; nav collapses to a compact bar with a sheet/disclosure for anchors on small screens.

## Technical notes

- Files created:
  - `src/styles.css` (updated tokens + fonts)
  - `src/routes/__root.tsx` (font link, providers)
  - `src/routes/index.tsx` (composes sections, declares `validateSearch`)
  - `src/lib/role-context.tsx`, `src/lib/theme-context.tsx`
  - `src/components/role-switch.tsx`, `theme-toggle.tsx`, `role-fade.tsx`, `fade-in.tsx`
  - `src/components/sections/*.tsx` (11 files)
- Dependencies to add: `zod`, `@tanstack/zod-adapter` (for typed search param).
- No backend, no Cloud needed for this step.

## Out of scope (intentionally)

- Real biography, metrics, project copy, CV file.
- Per-role variant of every section beyond hero pitch + stat band labels (just enough to prove wiring).
- Analytics, SEO beyond a sensible `<title>` / meta description.
