# Design System: 🍀 Acme Design System
**Figma file:** `crNeWRJ3sJVbmeGg1SpHIr` — https://www.figma.com/design/crNeWRJ3sJVbmeGg1SpHIr
**Reference screen:** `pages/dashboard.html` ("Overview" — Acme Dashboard)

This file documents the semantic design language observed on the Dashboard screen, synthesized from the actual token and component CSS (`src/tokens/*`, `src/components/*`) rather than guessed from pixels. Every value below traces to a CSS custom property — nothing here is hardcoded in the implementation.

---

## 1. Visual Theme & Atmosphere

The Dashboard reads as **calm, dense, and utilitarian** — a data-first admin surface, not a marketing page. The mood is:

- **Airy-but-efficient.** A neutral gray canvas (`background/secondary`) recedes so white card surfaces (`background/primary`) pop forward as distinct, scannable units. Generous 24px card padding keeps dense data from feeling cramped, but the layout as a whole packs a KPI row, a chart, two side panels, and a full data table into a single unscrolled viewport — this is an information-dense "cockpit," not a spacious landing page.
- **Quiet and structured.** Borders are hairline (1px, `border/default` — a very light `gray/200`) and shadows are whisper-soft (`Shadow/Subtle`), so hierarchy comes from spacing and typography weight, not heavy chrome or saturated color blocking.
- **Confident single-accent branding.** Blue (`blue/600`, `#2563eb`) is the *only* brand color and is used sparingly — primary buttons, the active nav item, the logo mark, chart's current-period bar, progress fill. Everything else is grayscale, so blue reads as a clear "this is actionable / this is the primary metric" signal rather than decoration.
- **Semantic, not decorative, color.** Red/yellow/green/cyan only ever appear to mean something (trend direction, order status, activity type) — never as background theming or flourish.

---

## 2. Color Palette & Roles

All colors are consumed via **Theme tokens**, which alias a **Primitive** palette (`src/tokens/colors.css`). Components never reference primitives directly. Light mode is the Dashboard's default; Dark mode is fully defined in parallel (see §6).

### Neutrals — Structure & Text
| Role | Token | Hex (Light) | Used for |
|---|---|---|---|
| Page canvas | `background/secondary` (`gray/100`) | `#f3f4f6` | App shell background behind cards |
| Card surface | `background/primary` (`gray/50`) | `#f9fafb` | Cards, header bar, sidebar, table header hover state |
| Muted fill | `background/tertiary` (`gray/200`) | `#e5e7eb` | Progress-bar track, table header row |
| Primary text | `text/primary` (`gray/900`) | `#111827` | KPI values, headings, table IDs |
| Secondary text | `text/secondary` (`gray/600`) | `#4b5563` | KPI labels, table body cells |
| Tertiary text | `text/tertiary` (`gray/400`) | `#9ca3af` | Meta text ("vs last month", timestamps, chart axes) |
| Inverse text | `text/inverse` (`gray/50`) | `#f9fafb` | Text on filled blue/red surfaces (buttons, avatar, logo mark) |
| Hairline border | `border/default` (`gray/200`) | `#e5e7eb` | Card outlines, header/sidebar dividers, table row rules |

### Brand — "Deep Actionable Blue"
| Role | Token | Hex (Light) | Used for |
|---|---|---|---|
| Brand regular | `button/brand/regular` (`blue/600`) | `#2563eb` | Primary button, active nav item, logo mark, avatar fill, progress bar default fill, "current" chart bar, link accents |
| Brand hover | `button/brand/hover` (`blue/700`) | `#1d4ed8` | Hover state on the above |
| Brand active | `button/brand/active` (`blue/800`) | `#1e40af` | Pressed state |
| Brand muted | `blue/200` primitive | `#bfdbfe` | Non-current chart bars (a lighter tint, not a theme token — chart-specific) |

### Semantic — Meaning-Bearing Accents
Each has a `background` (very light tint) + `foreground` (saturated) pairing, used together as badge/pill fill+text or icon dot fill+icon color.

| Role | Foreground token | Hex | Background token | Hex | Used for |
|---|---|---|---|---|---|
| Success | `semantic/success/foreground` (`green/600`) | `#16a34a` | `semantic/success/background` (`green/50`) | `#f0fdf4` | "Completed" status badge, upward trend badge, payment/signup activity dots, best-performing progress bar |
| Error | `semantic/error/foreground` (`red/600`) | `#dc2626` | `semantic/error/background` (`red/50`) | `#fef2f2` | "Failed" status badge, downward trend badge, refund/alert activity dot, lowest-share progress bar |
| Warning | `semantic/warning/foreground` (`yellow/600`) | `#d97706` | `semantic/warning/background` (`yellow/50`) | `#fffbeb` | "Pending" status badge, mid-tier progress bar |
| Info | `semantic/info/foreground` (`info/600`) | `#0284c7` | `semantic/info/background` (`info/50`) | `#f0f9ff` | "Processing" status badge, order-activity icon dot |

**Design rule this encodes:** color pairs are never used loose — a foreground color always appears on top of its matching light background, never on white or on a different semantic's background. This is what keeps four separate semantic colors from feeling like a rainbow.

---

## 3. Typography Rules

**Single family throughout: Inter** (`400/500/600/700`), loaded via Google Fonts, with a `system-ui` fallback stack. No secondary/display font — hierarchy is built entirely with size + weight, not typeface switching.

Two coexisting scales:

**1. The marketing/base scale** (`typography/*` tokens, 11 steps from Caption 12px to Display Large 57px) — used for structural chrome: the page title (`H4`, 20px/600), sidebar brand name (`Body Large`, 18px), nav items and inputs (`Body Small`, 14px/400).

**2. The dashboard density scale** — a documented *extension*, not part of the core Figma Typography collection, added specifically because dense data surfaces (KPI numbers, table cells, chart axis labels, nav section eyebrows) needed sizes the 11-step marketing scale doesn't cover:

| Token | Size / line-height | Used for |
|---|---|---|
| `--dashboard-text-2xs` | 11px / 16px | Table header uppercase labels, activity meta/timestamps, sidebar section eyebrows |
| `--dashboard-text-xs` | 12px / 16px | Trend badges, tab-group chips |
| `--dashboard-text-sm` | 13px / 20px | KPI labels, table body cells, date filter, progress row labels |
| `--dashboard-text-md` | 15px / 22px | Card titles ("Revenue Trend", "Top Products") |
| KPI value (inline) | 28px / 36px, weight 700 | The one deliberately oversized number per card — the dashboard's only "display-scale" text outside the base scale |

**Character:** letter-spacing is essentially neutral (0 to +0.4px) at body sizes — nothing is tightly tracked except two dashboard-specific eyebrow treatments: table column headers (+0.5px, uppercase) and sidebar section titles (+0.8px, uppercase), which is what gives those small caps labels their "quiet label" read rather than shouting.

**Weight hierarchy is consistent and predictable:** 400 for body/meta text → 500 for labels, nav items, and secondary emphasis → 600 for card titles, KPI labels-in-context, active states → 700 reserved almost exclusively for the KPI numbers and H1/H2 headings, i.e. the single most important number in a block.

---

## 4. Geometry & Shape

Corner radius is used as a **legibility signal tied to component size**, not a single global rounding value:

- **Sharp-ish, structural** — `radius/sm` (4px): trend badges, progress-bar track/fill, chart bars. Small elements stay crisp.
- **Subtly rounded, primary surface language** — `radius/md` (8px): cards, buttons, sidebar nav items, logo mark. This is the dominant, "default" roundness of the system.
- **Distinct field roundness** — `--radius-field` (6px): a deliberate *in-between* value used only for form-adjacent chips — input fields, the date-filter pill, the tab-group track. It's documented in the code as intentionally not reusing 4px or 8px, so inputs read as a slightly different, tactile family from cards/buttons.
- **Fully pill-shaped** — `radius/full` (9999px): status badges, avatars, activity-feed icon dots. Reserved for small circular/pill affordances that represent an identity or state at a glance.

Nothing uses sharp 0px corners or a large 16px radius (`radius/lg`) on the Dashboard — that value exists in the token set but isn't exercised here, implying it's reserved for larger surfaces (modals/dialogs) not present on this screen.

---

## 5. Depth & Elevation

Elevation is **flat and whisper-soft** — this is a low-drama system that uses shadow only to lift a card barely off the page, never to create a floating/overlay feel on static content:

- Every card (KPI, chart, side panels, table) uses exactly one effect style: **`Shadow/Subtle`** — a double-layered drop shadow (`0px 1px 3px rgba(17,24,39,.06)` + `0px 1px 2px rgba(17,24,39,.1)`) built from `gray/900` at very low opacity. It's barely perceptible against the light gray canvas; its job is just to separate the white card edge from the gray background, not to imply "floating."
- Heavier shadow levels exist in the token set (`Shadow/Low`, `Medium`, `High`, up to `20px/25px` blur at 18% opacity) but are **not used anywhere on the Dashboard** — they're reserved for genuinely overlaid UI (the mobile sidebar drawer uses `Shadow/High` when it slides over content, and presumably modals/popovers elsewhere in the system). This confirms elevation scales with genuine z-axis displacement, not decoration.
- Borders do more elevation work than shadows do: the 1px `border/default` hairline is what actually defines most edges (cards, header, sidebar, table rows) — shadow is a secondary, almost subliminal cue layered on top.

---

## 6. Light / Dark Theming

Every Theme token has a Dark-mode value, resolved either by `prefers-color-scheme: dark` or an explicit `[data-theme="dark"]` attribute (explicit always wins). The pattern is a **structural gray inversion + brand desaturation-by-lightening**:

- Grays invert directly (`background/primary` swaps `gray/50` ↔ `gray/900`, etc.) — the same 9-step gray ramp is reused in both directions, so there's no separate "dark palette," just a different point of entry into the same scale.
- Brand blue and reject red **shift toward the light end** of their ramps in dark mode (`blue/600→blue/400` for regular, `blue/700→blue/300` for hover) rather than staying saturated — this keeps brand color from looking muddy or over-saturated against a dark background, and inverts the hover/active direction (hover gets *lighter*, not darker, in dark mode).
- **Input tokens are the one deliberate exception**: they're identical in Light and Dark, because inputs are documented as always sitting on a white field regardless of page theme.

---

## 7. Component Stylings

* **Buttons** — 8px-rounded rectangles, 1.5px border (transparent unless Secondary). Four types: Primary (solid blue, white text), Secondary (white fill + gray border), Tertiary (transparent, text-only), Reject (solid red, white text — destructive actions). Two heights: Compact 32px / Cozy 40px. A `--accent` modifier recolors a Secondary/Tertiary button's label to brand blue without changing its fill (used for "Export" on the Dashboard header — a lower-emphasis action that still reads as brand-related).
* **Cards** — the shared surface for every dashboard block: white (`background/primary`) fill, 1px `border/default`, 8px radius, `Shadow/Subtle`, 24px padding. A `card__header` flex row (title + optional control, e.g. the chart's tab group) is the standard top-of-card pattern.
* **Inputs** — 1.5px bordered field at a distinct 6px radius, `gray/50` background, gray-600 placeholder. Hover lightens the border, focus turns it brand blue and adds a soft 3px blue focus ring (30%-opacity color-mix). Value states (negative/critical/positive/information) recolor only the border and icon, never the fill — keeping error states legible without being alarming.
* **KPI cards** — label (13px/500, secondary text) → oversized value (28px/700, primary text) → trend badge (pill-cornered, semantic success/error color pair) + light meta caption. This label→value→delta stacking is the system's core "single metric" pattern, reused nowhere else but instantly recognizable.
* **Status badges** — fully pill-shaped, 11px/500 text, semantic background+foreground pairing, no border. Compact enough to sit inline in a table cell.
* **Progress bars** — 6px-tall, fully-rounded-corner track (`background/tertiary`) with a colored fill; default fill is brand blue, with success/warning/error modifiers for ranked/comparative rows (e.g. Top Products).
* **Data table** — semantic `<table>` markup. Uppercase, letter-spaced, tertiary-gray header row on a light gray background; body rows separated by hairline borders (last row borderless); the ID column is bolded/primary-colored to anchor the leftmost scan column.
* **Activity feed** — vertical timeline of icon-dot + title/meta + timestamp rows, separated by hairline dividers. The icon dot reuses the same semantic background/foreground pill pattern as badges, just circular instead of pill-shaped, tying "activity type" visually to "order status" elsewhere on the page.
* **Sidebar nav** — 240px fixed rail, `background/primary` on `background/secondary` page, active item gets a light gray fill + bold brand-blue text/icon; collapses to an off-canvas drawer with a `Shadow/High` slide-in below 1024px.
* **Bar chart** — minimal axis-labeled column chart; all bars use a light `blue/200` tint except the current/latest period, which is called out in full-saturation `blue/600` — the chart's only use of the "one bar tells the story" emphasis pattern.

---

## 8. Layout Principles

- **Fixed-rail + fluid-content shell.** A 240px sidebar is `position: sticky` at full viewport height; the main column flexes to fill remaining width. Below 1024px the sidebar becomes an off-canvas drawer with a scrim backdrop.
- **Consistent spacing scale, never hardcoded px.** All gaps/padding come from the Dimensions token scale (`spacing/4` through `spacing/96`); the Dashboard's dominant rhythm is 16px (card-row gaps, KPI internal gaps) and 24px (card padding, table cell padding).
- **Content grid narrows progressively, not abruptly.** KPI row: 4 columns → 2 columns at ≤1024px → 1 column at ≤560px. This graceful regrouping (rather than a single mobile breakpoint) is characteristic of the system's density-first philosophy — it holds onto multi-column layout as long as legibly possible.
- **Full-bleed table breaks the card-grid pattern intentionally.** Unlike the KPI/chart/side-panel cards which sit in fixed-width grid tracks, the Recent Orders table card is explicitly `width: 100%` — the one place the layout says "this content needs all the horizontal room it can get," and gains its own horizontal scroll container below 720px rather than compressing columns.
- **Alignment is strictly left-to-right reading order.** Labels sit above values, values sit left of deltas/actions, and every card title left-aligns with an optional right-aligned control (tab group, "View all" link) — there is no centered content anywhere on the screen.
