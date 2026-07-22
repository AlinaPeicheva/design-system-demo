# Button

Single source of truth for the `Button` component. If code and this document
disagree, this document wins — update the code (or flag the discrepancy)
rather than trusting the implementation.

**Figma:** [Button page](https://www.figma.com/design/crNeWRJ3sJVbmeGg1SpHIr/%F0%9F%8D%80-Design-System?node-id=13-546)
**Page ID:** `5:260` · **Component set ID:** `13:546` · **160 variants**

---

## Purpose

Button triggers a single, immediate action — submitting a form, confirming or
canceling a dialog, navigating, or performing a destructive operation. It is
the primary interactive affordance in the system; every other actionable
control (links styled as buttons, icon-only triggers, form submit/cancel
pairs) should compose this component rather than reinvent button styling.

Use Button when the user's click/tap causes something to happen *now*. If the
control instead reveals more UI (a menu, a panel) without side effects,
prefer a different pattern — but if no such pattern exists yet, Tertiary or
Secondary Button is the closest approved fallback.

---

## Anatomy

```
Button [COMPONENT]
├── leading-icon [INSTANCE]  — optional
├── label [TEXT]              — optional (icon-only layouts omit it)
└── trailing-icon [INSTANCE]  — optional
```

At least one of `label` / `leading-icon` / `trailing-icon` must be visible —
an empty button is invalid.

---

## Variant axes

| Property | Options | Notes |
|---|---|---|
| `Type` | Primary, Secondary, Tertiary, Reject | Visual weight / semantic intent |
| `Size` | Compact (32px height), Cozy (40px height) | Pick one per surface; don't mix in the same row |
| `State` | Regular, Hover, Down, Disabled | Hover/Down are interaction states, not authored choices |
| `Layout` | Label only, Leading icon + Label, Label + Trailing icon, Icon only, Leading icon + Label + Trailing icon | Determines which icon slots render |

Total combinations: 4 × 2 × 4 × 5 = 160 variants.

### Type — when to use each

| Type | Intent | Typical count per view |
|---|---|---|
| **Primary** | The single most important action on the screen/surface (e.g. "Save", "Submit", "Continue") | Exactly one visible at a time |
| **Secondary** | A supporting action alongside Primary (e.g. "Cancel", "Back") | One or more |
| **Tertiary** | Low-emphasis action, often inline or in dense UI (e.g. table row actions, "Learn more") | Many, freely |
| **Reject** | Destructive or negative-consequence action (e.g. "Delete", "Revoke access") | Sparingly, always with confirmation for irreversible actions |

### Size

- **Compact (32px):** dense UI — tables, toolbars, inline forms.
- **Cozy (40px):** default marketing/app surfaces, primary forms, dialogs.

### Layout

- **Label only** — default; use unless the icon adds real meaning.
- **Leading icon + Label** — icon reinforces the action (e.g. `plus` for "Add item").
- **Label + Trailing icon** — icon indicates direction/consequence (e.g. `chevron-right` for "Next", `external-link` for leaving the app).
- **Icon only** — toolbars and constrained spaces only; **must** have an accessible label via `aria-label` (see Accessibility).
- **Leading icon + Label + Trailing icon** — rare; only when both icons carry distinct meaning (e.g. status icon + label + external-link).

---

## Component properties

| Key prefix | Type | Default | Purpose |
|---|---|---|---|
| `Label#` | TEXT | "Button" | Button text |
| `Show Leading Icon#` | BOOLEAN | true | Toggles leading icon slot |
| `Show Trailing Icon#` | BOOLEAN | true | Toggles trailing icon slot |
| `Leading Icon#` | INSTANCE_SWAP | `5:190` (plus) | Swaps leading icon component |
| `Trailing Icon#` | INSTANCE_SWAP | `5:190` (plus) | Swaps trailing icon component |

Swap icon instances only with components from the [Icon Library](../CLAUDE.md#icon-library) (page `0:1`). Never insert a custom or non-library icon.

---

## Variant naming pattern

```
Type=Primary, Size=Compact, State=Regular, Layout=Label only
```

### Key variant IDs

| Variant | ID |
|---|---|
| Primary / Compact / Regular / Label only | `12:2` |
| Primary / Cozy / Regular / Label only | `12:10` |
| Secondary / Compact / Regular / Label only | `12:18` |
| Secondary / Cozy / Regular / Label only | `12:26` |
| Tertiary / Compact / Regular / Label only | `12:34` |
| Tertiary / Cozy / Regular / Label only | `12:42` |
| Reject / Compact / Regular / Label only | `12:50` |
| Reject / Cozy / Regular / Label only | `12:58` |

---

## States

| State | Trigger | Notes |
|---|---|---|
| Regular | Default resting state | — |
| Hover | Pointer over the button | Not applicable to touch-only contexts |
| Down | Pressed/active | Momentary; visual feedback only |
| Disabled | Action currently unavailable | Never remove a button to disable it — keep it visible and disabled so users understand the action exists but isn't available yet |

State is never an authored design choice on a screen — always start from `Regular` and let interaction (or a disabled condition in code) drive the other states.

---

## Design tokens

All values are bound via variables — no hardcoded colors, spacing, or radii ([Design Rules](../CLAUDE.md#design-rules)).

### Color — `button/*` theme tokens

| Type | Regular | Hover | Active/Down | Disabled |
|---|---|---|---|---|
| Primary (brand) | `button/brand/regular` | `button/brand/hover` | `button/brand/active` | `button/brand/disabled` |
| Reject | `button/reject/regular` | `button/reject/hover` | `button/reject/active` | `button/reject/disabled` |
| Secondary | `border/default` (stroke) + `background/primary` (fill) + `text/primary` (label) | `background/secondary` | `background/tertiary` | `text/disabled` / `border/disabled` |
| Tertiary | transparent fill + `text/primary` (label) | `background/secondary` | `background/tertiary` | `text/disabled` |

Icon color inside the button follows the label's text color token (`icon/primary`, `icon/inverse`, etc. as appropriate to Type).

### Spacing

| Property | Token |
|---|---|
| Horizontal padding | `spacing/12` (Compact) / `spacing/16` (Cozy) |
| Icon-label gap | `spacing/8` |
| Icon-only padding | `spacing/8` (Compact) / `spacing/12` (Cozy) — kept square |

### Radius

| Token | Value |
|---|---|
| `radius/md` | 8px — applied to all Button variants |

### Typography

| Size | Scale |
|---|---|
| Compact | `typography/body/small` |
| Cozy | `typography/body/medium` |

---

## Accessibility

- **Icon-only buttons must have an `aria-label`** (or equivalent) describing the action — the visual icon alone is not sufficient for screen readers.
- Minimum touch target is 32px (Compact) / 40px (Cozy); don't shrink below Compact.
- Disabled buttons must remain focusable-adjacent (i.e., discoverable) — don't use `display:none`. Use native `disabled` semantics so assistive tech announces the unavailable state, not just a visual dim.
- Reject-type buttons that perform an irreversible action (delete, revoke) must be paired with a confirmation step (dialog, undo window) — the button itself is not a confirmation.
- Color is never the only signal for Reject vs. other types — label text ("Delete", "Remove") must also convey the destructive intent.
- Focus state must be visible (browser default focus ring or an equivalent token-driven ring) — do not suppress `:focus-visible` styling.

---

## Usage

### Do

- Use exactly **one Primary button per view or modal** — it should be visually obvious which action is the "main" one.
- Pair Primary + Secondary for the common confirm/cancel pattern (e.g. "Save" + "Cancel").
- Use Reject only for destructive/negative actions, and always pair with confirmation for irreversible ones.
- Match `Size` to the surrounding density — don't mix Compact and Cozy buttons in the same toolbar or action row.
- Use icons only when they add meaning (direction, object type, external navigation) — not as decoration.
- Keep labels short, verb-first ("Save changes", "Delete project", "Continue").

### Don't

- Don't use more than one Primary button in the same view — it defeats the purpose of visual hierarchy.
- Don't use Button for navigation-only links that don't trigger an action — use a text link (`typography/body/link`) instead.
- Don't hardcode colors, radii, or spacing — always bind to the tokens listed above.
- Don't ship an Icon only button without an accessible label.
- Don't disable a button silently without indicating why (pair with helper text or a tooltip when the reason isn't obvious).
- Don't use Reject styling for a merely secondary or low-priority action — reserve the red treatment for genuinely destructive actions.
- Don't nest interactive elements (links, other buttons) inside a Button.
- Don't swap in icons that aren't part of the [Icon Library](../CLAUDE.md#icon-library).

---

## Related

- [Icon Library](../CLAUDE.md#icon-library) — approved icon set for `Leading Icon#` / `Trailing Icon#`
- [Theme Tokens](../CLAUDE.md#theme-tokens) — `button/*`, `text/*`, `icon/*`, `border/*`
- [Dimensions](../CLAUDE.md#dimensions) — `spacing/*`, `radius/*`
- [Typography](../CLAUDE.md#typography) — `typography/body/small`, `typography/body/medium`
- Form component uses Button internally for `button-submit` (Primary) and `button-cancel` (Secondary) — see [Form](../CLAUDE.md#form)
