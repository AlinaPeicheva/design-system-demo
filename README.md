# 🍀 Design System

This is a demo project built for the SoftUni Creative seminar **"Новият дизайн процес с Figma MCP и Claude Code"**.

It shows an end-to-end design system workflow between **Figma** and **code**: tokens, components, and icons defined in Figma are synced into CSS/HTML via the Figma MCP server and Claude Code, and a sample dashboard is built entirely from those design-system primitives.

## Figma file

All the source design work — components, variants, tokens, and prompts used to generate them — lives in the Figma file:

**🍀 Design System**
https://www.figma.com/design/crNeWRJ3sJVbmeGg1SpHIr/%F0%9F%8D%80-Design-System?node-id=76-266

> All the prompts used during the seminar can be found on that Figma page.

## What's in this repo

| Path | Contents |
|---|---|
| [`CLAUDE.md`](CLAUDE.md) | Full reference of the Figma file: pages, variable collections, tokens, components, and design rules |
| [`DESIGN.md`](DESIGN.md) | Synthesized design system documentation |
| [`docs/`](docs) | Component-level docs (e.g. [`Button.md`](docs/Button.md)) |
| [`src/tokens/`](src/tokens) | Design tokens as CSS custom properties — colors, typography, dimensions, shadows, theme (light/dark) |
| [`src/components/`](src/components) | Component styles: button, input, card, avatar, badges, tabs, data table, sidebar nav, top header, KPI cards, charts, progress bars, activity feed, dashboard layout |
| [`src/icons/`](src/icons) | Lucide-based SVG icon set + icon sprite |
| [`src/base.css`](src/base.css) | Base/reset styles |
| [`pages/dashboard.html`](pages/dashboard.html) | Example dashboard page assembled from the design system components |
| [`src/js/dashboard.js`](src/js/dashboard.js) | Behavior for the dashboard example |

## How it works

1. Design tokens (colors, spacing, radii, typography, shadows) and components (Button, Input, Form) are defined as variables and variant components in the Figma file.
2. Using the Figma MCP server + Claude Code, those tokens and components are read out of Figma and translated into CSS and HTML.
3. The `pages/dashboard.html` example demonstrates the resulting system in a real UI, built purely from the generated tokens and components — no hardcoded values.
