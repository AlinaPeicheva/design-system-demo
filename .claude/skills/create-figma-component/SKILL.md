---
name: create-figma-component
description: Use whenever the user wants a new UI component added to the 🍀 Design System Figma file (crNeWRJ3sJVbmeGg1SpHIr) — e.g. "create button", "create card", "build input component", "add a new component", "make a new Figma component", "I need a dropdown/badge/tooltip in Figma", "extend the design system with X". Trigger this even when the request sounds small or one-off ("just quickly add a...") — every component added to this file needs to go through the analyze-first, reuse-first, token-only workflow below, or it'll drift from the rest of the system and someone has to redo it later.
---

# Create Figma Component

Governs how new components get added to the 🍀 Design System Figma file (`crNeWRJ3sJVbmeGg1SpHIr`). The goal is a component that looks and behaves like it was built by the same team that built Button, Input, and Form — never a one-off.

Load `figma:figma-use` and `figma:figma-generate-library` alongside this skill before making any `use_figma` calls — they cover the mechanics of the Plugin API and library construction order. This skill governs the *process and gate-checks* around that mechanical work.

Treat every step below as a gate: do not move to the next step until the current one is satisfied. Do not skip a step because the request "seems simple."

## Step 1 — Analyze the existing design system first

Before writing anything, re-derive current state — do not rely on memory of a past session:

- Read this repo's `CLAUDE.md` for the canonical reference (pages, variable collection/IDs, theme tokens, effect styles, existing component specs, naming conventions, accessibility notes).
- Call `mcp__plugin_figma_figma__get_variable_defs` and `mcp__plugin_figma_figma__search_design_system` to confirm the token/variable/component inventory is still accurate — CLAUDE.md can drift from the live file.
- Call `mcp__plugin_figma_figma__get_metadata` on the relevant page(s) to see current structure, layer names, and any existing annotation frames.

Do not proceed to design work until you can state, in your own words, which tokens, variants, and structural conventions the new component must inherit.

## Step 2 — Ask before assuming

A component's variant axes, once built into Figma with real instances and bound properties, are expensive to restructure — it's much cheaper to ask up front than to rebuild after the fact. So if any of the following are unclear or unstated, stop and use `AskUserQuestion` before creating anything, rather than filling the gap with a guess:

- What variants/sizes/states does it need (does it need to mirror Button's Compact/Cozy + Regular/Hover/Down/Disabled pattern, or something else)?
- What content/props does it need (text, icons, booleans) and which should be wired vs. static?
- Where does it live (new page vs. existing page) and does a component set already partially cover this?
- Any interaction/behavior requirements not inferable from "create X" (e.g. does a "card" need a clickable state, a media slot, an overflow menu)?

This system's existing variant axes (see Button/Input/Form in CLAUDE.md) were each deliberately chosen for that component — they aren't a generic template to copy onto an unfamiliar component type, so resist defaulting to "whatever seems reasonable" without confirming.

## Step 3 — Check for an existing or overlapping component

Every parallel component that duplicates something already in the file is a second source of truth someone else now has to reconcile — in code, in Code Connect mappings, and in future design decisions. Before creating anything new:

- Search the component list in CLAUDE.md and the live `search_design_system` / `get_metadata` results for anything with overlapping purpose (e.g. a request for "menu item" may already be covered by a variant of an existing set, or an "icon button" may just be Button's `Layout=Icon only`).
- If a close match exists, prefer **extending** it (new variant, new property) over creating a parallel component. Explain the reuse decision before building.
- Only create a net-new component set when nothing in the file reasonably covers the need. State why reuse wasn't possible.

## Step 4 — Tokens only, no hardcoded values

CLAUDE.md is explicit that this system has no hardcoded values anywhere — that's what makes light/dark theming and future rebrands a one-place change instead of a hunt-and-replace. A hardcoded value on a new component quietly breaks that guarantee. Every value bound to the new component should come from an existing variable, style, or grid already defined in this file:

- Colors → Theme tokens (`VariableCollectionId:7:83`), not Primitive Colors directly, not raw hex.
- Padding/gap/spacing/radius → Dimensions tokens (`VariableCollectionId:7:63`).
- Text → Typography variables (`VariableCollectionId:7:120`) via `setBoundVariable`, not manual font properties.
- Shadows → existing Effect Styles (`Shadow/Subtle|Low|Medium|High`) via `effectStyleId`, not ad hoc `DROP_SHADOW` paints.
- If the component needs a value with no existing token (e.g. a new spacing increment), that's a signal the token set itself may need to grow — flag it and ask whether a new token should be added to the appropriate collection, rather than inventing or hardcoding a one-off.

## Step 5 — Build following existing conventions

- Component set name: PascalCase.
- Variant property names: Title Case with spaces (`Type`, `Size`, `State`, matching the axis vocabulary already used, e.g. reuse "Size: Compact/Cozy" rather than inventing "Small/Large" if this component sits alongside Button/Input).
- Layer names: kebab-case, structurally descriptive (`field`, `label-row`, `button-submit` style).
- Component property keys: `Label#`, `Show X#`, `X Icon#` etc. matching the `#id`-suffixed pattern used by Button/Input/Form.
- Place the component on an appropriately named page; if it belongs conceptually with an existing page, add it there rather than fragmenting the file.

## Step 6 — Full variant/state/property coverage

- Build every variant combination the confirmed requirements call for (sizes × states × layouts, as applicable) — not just the default/regular state.
- Wire component properties per CLAUDE.md's rules: TEXT via `componentPropertyReferences = { characters: propKey }`, visibility via `{ visible: propKey }`, INSTANCE_SWAP for icon slots. Remember nested-instance properties can't be wired this way — only top-level TEXT/BOOLEAN nodes.
- Disabled/error/critical/etc. states must bind to the matching semantic or state tokens (e.g. `input/border/negative`, `button/*/disabled`), not a manually darkened/lightened color.

## Step 7 — Structural correctness

- Auto Layout throughout, no absolute positioning: hug (`AUTO`) on outer containers where width should be content-driven, fixed (`FIXED`) where a known width/height is required, `FILL` on inner rows that should stretch.
- Constraints and resizing behavior consistent with sibling components (e.g. Input's fixed 240px field width, Button's hug-to-content).
- Verify every color/spacing/radius/typography property actually has a bound variable (not just a matching literal value) before considering the node done.

## Step 8 — Accessibility and consistency pass

- Check contrast for any new text/icon-on-fill pairing against WCAG AA (4.5:1 text, 3:1 non-text) using the resolved Theme token values in both Light and Dark modes.
- Disabled-state exemption applies only where CLAUDE.md already documents it (WCAG 1.4.3) — don't extend that exemption to new states without justification.
- Confirm the component reads correctly in both Light (`7:2`) and Dark (`7:3`) modes before finishing.

## Step 9 — Documentation annotation

Add documentation next to the new component, matching the format, layout, and visual style of any existing annotation frames already in the file (check via `get_metadata`/`get_screenshot` near Button/Input/Form — do not invent a new documentation style). If no annotation convention exists yet in the file, establish one plainly (simple text frame, using the same typography/color tokens as everything else) and apply it consistently. Cover:

- Purpose — one or two lines on what the component is for and when to use it.
- Anatomy — labeled breakdown of the component's parts (mirror the "Layer structure" tree style used in CLAUDE.md for Input/Form).
- Properties — table of component properties, types, defaults.
- Variants — table of variant axes and options.
- Do's and Don'ts — concrete, paired (e.g. "Do use Primary for the single most important action" / "Don't use more than one Primary button per view").

## Step 10 — Validate before finishing

- Re-check every fill, stroke, text style, spacing, and radius on the new component resolves to a bound variable or style — zero hardcoded values.
- Confirm naming (component set, variants, layers, properties) matches Steps 5's conventions exactly.
- Confirm the component (and its variants) render correctly in both Light and Dark mode.
- Confirm the annotation is present, complete, and stylistically consistent with the rest of the file.
- Fix any inconsistency found during this pass before reporting the component as done — a component with known gaps isn't finished, it's just handed off with the gaps intact.
