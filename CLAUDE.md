# Design System — Reference for Claude

**Figma file:** `crNeWRJ3sJVbmeGg1SpHIr`
**File name:** 🍀 Design System
**URL:** https://www.figma.com/design/crNeWRJ3sJVbmeGg1SpHIr/%F0%9F%8D%80-Design-System

---

## Pages

| Page | ID | Contents |
|---|---|---|
| Iconography | `0:1` | 124 Lucide icon components (16×16) in a single "Icons" frame |
| Button | `5:260` | Button component set (160 variants) |
| Input | `33:162` | Input component set (50 variants) |
| Form | `55:303` | Form component set (4 variants) |

---

## Variable Collections

Four collections — no hardcoded values anywhere in the system.

| Collection | ID | Modes | Variable count |
|---|---|---|---|
| Primitive Colors | `VariableCollectionId:7:2` | Value | 60 |
| Dimensions | `VariableCollectionId:7:63` | Value | 20 |
| Theme | `VariableCollectionId:7:83` | Light / Dark | 70 |
| Typography | `VariableCollectionId:7:120` | Value | 55 |

---

## Primitive Colors

Raw palette — never apply these directly to components. Always use Theme tokens instead.

### Gray
| Token | ID | Hex |
|---|---|---|
| `gray/50` | `VariableID:7:3` | `#f9fafb` |
| `gray/100` | `VariableID:7:4` | `#f3f4f6` |
| `gray/200` | `VariableID:7:5` | `#e5e7eb` |
| `gray/300` | `VariableID:7:6` | `#d1d5db` |
| `gray/400` | `VariableID:7:7` | `#9ca3af` |
| `gray/500` | `VariableID:7:8` | `#6b7280` |
| `gray/600` | `VariableID:7:9` | `#4b5563` |
| `gray/700` | `VariableID:7:10` | `#374151` |
| `gray/800` | `VariableID:7:11` | `#1f2937` |
| `gray/900` | `VariableID:7:12` | `#111827` |

### Blue
| Token | ID | Hex |
|---|---|---|
| `blue/50` | `VariableID:7:13` | `#eff6ff` |
| `blue/100` | `VariableID:7:14` | `#dbeafe` |
| `blue/200` | `VariableID:7:15` | `#bfdbfe` |
| `blue/300` | `VariableID:7:16` | `#93c5fd` |
| `blue/400` | `VariableID:7:17` | `#60a5fa` |
| `blue/500` | `VariableID:7:18` | `#3b82f6` |
| `blue/600` | `VariableID:7:19` | `#2563eb` |
| `blue/700` | `VariableID:7:20` | `#1d4ed8` |
| `blue/800` | `VariableID:7:21` | `#1e40af` |
| `blue/900` | `VariableID:7:22` | `#1e3a8a` |

### Red
| Token | ID | Hex |
|---|---|---|
| `red/50` | `VariableID:7:23` | `#fef2f2` |
| `red/100` | `VariableID:7:24` | `#fee2e2` |
| `red/200` | `VariableID:7:25` | `#fecaca` |
| `red/300` | `VariableID:7:26` | `#fca5a5` |
| `red/400` | `VariableID:7:27` | `#f87171` |
| `red/500` | `VariableID:7:28` | `#ef4444` |
| `red/600` | `VariableID:7:29` | `#dc2626` |
| `red/700` | `VariableID:7:30` | `#b91c1c` |
| `red/800` | `VariableID:7:31` | `#991b1b` |
| `red/900` | `VariableID:7:32` | `#7f1d1d` |

### Yellow
| Token | ID | Hex |
|---|---|---|
| `yellow/50` | `VariableID:7:33` | `#fffbeb` |
| `yellow/100` | `VariableID:7:34` | `#fef3c7` |
| `yellow/200` | `VariableID:7:35` | `#fde68a` |
| `yellow/300` | `VariableID:7:36` | `#fcd34d` |
| `yellow/400` | `VariableID:7:37` | `#fbbf24` |
| `yellow/500` | `VariableID:7:38` | `#f59e0b` |
| `yellow/600` | `VariableID:7:39` | `#d97706` |
| `yellow/700` | `VariableID:7:40` | `#b45309` |
| `yellow/800` | `VariableID:7:41` | `#92400e` |
| `yellow/900` | `VariableID:7:42` | `#78350f` |

### Green
| Token | ID | Hex |
|---|---|---|
| `green/50` | `VariableID:7:43` | `#f0fdf4` |
| `green/100` | `VariableID:7:44` | `#dcfce7` |
| `green/200` | `VariableID:7:45` | `#bbf7d0` |
| `green/300` | `VariableID:7:46` | `#86efac` |
| `green/400` | `VariableID:7:47` | `#4ade80` |
| `green/500` | `VariableID:7:48` | `#22c55e` |
| `green/600` | `VariableID:7:49` | `#16a34a` |
| `green/700` | `VariableID:7:50` | `#15803d` |
| `green/800` | `VariableID:7:51` | `#166534` |
| `green/900` | `VariableID:7:52` | `#14532d` |

### Info (Cyan)
| Token | ID | Hex |
|---|---|---|
| `info/50` | `VariableID:7:53` | `#f0f9ff` |
| `info/100` | `VariableID:7:54` | `#e0f2fe` |
| `info/200` | `VariableID:7:55` | `#bae6fd` |
| `info/300` | `VariableID:7:56` | `#7dd3fc` |
| `info/400` | `VariableID:7:57` | `#38bdf8` |
| `info/500` | `VariableID:7:58` | `#0ea5e9` |
| `info/600` | `VariableID:7:59` | `#0284c7` |
| `info/700` | `VariableID:7:60` | `#0369a1` |
| `info/800` | `VariableID:7:61` | `#075985` |
| `info/900` | `VariableID:7:62` | `#0c4a6e` |

---

## Theme Tokens

Two modes: **Light** (modeId `7:2`) and **Dark** (modeId `7:3`).
All values alias Primitive Colors — the table shows resolved hex.

### Background
| Token | ID | Light | Dark |
|---|---|---|---|
| `background/primary` | `VariableID:7:84` | `#f9fafb` | `#111827` |
| `background/secondary` | `VariableID:7:85` | `#f3f4f6` | `#1f2937` |
| `background/tertiary` | `VariableID:7:86` | `#e5e7eb` | `#374151` |

### Foreground
| Token | ID | Light | Dark |
|---|---|---|---|
| `foreground/primary` | `VariableID:7:87` | `#111827` | `#f9fafb` |
| `foreground/secondary` | `VariableID:7:88` | `#374151` | `#e5e7eb` |
| `foreground/tertiary` | `VariableID:7:89` | `#6b7280` | `#9ca3af` |

### Text
| Token | ID | Light | Dark |
|---|---|---|---|
| `text/primary` | `VariableID:7:90` | `#111827` | `#f9fafb` |
| `text/secondary` | `VariableID:7:91` | `#4b5563` | `#d1d5db` |
| `text/tertiary` | `VariableID:7:92` | `#9ca3af` | `#6b7280` |
| `text/disabled` | `VariableID:7:93` | `#d1d5db` | `#4b5563` |
| `text/inverse` | `VariableID:7:94` | `#f9fafb` | `#111827` |

### Icon
| Token | ID | Light | Dark |
|---|---|---|---|
| `icon/primary` | `VariableID:7:95` | `#111827` | `#f9fafb` |
| `icon/secondary` | `VariableID:7:96` | `#4b5563` | `#d1d5db` |
| `icon/tertiary` | `VariableID:7:97` | `#9ca3af` | `#6b7280` |
| `icon/disabled` | `VariableID:7:98` | `#d1d5db` | `#4b5563` |
| `icon/inverse` | `VariableID:7:99` | `#f9fafb` | `#111827` |

### Border
| Token | ID | Light | Dark |
|---|---|---|---|
| `border/default` | `VariableID:7:100` | `#e5e7eb` | `#374151` |
| `border/secondary` | `VariableID:7:101` | `#d1d5db` | `#4b5563` |
| `border/tertiary` | `VariableID:7:102` | `#f3f4f6` | `#1f2937` |
| `border/disabled` | `VariableID:7:103` | `#e5e7eb` | `#374151` |

### Semantic
| Token | ID | Light | Dark |
|---|---|---|---|
| `semantic/error/background` | `VariableID:7:108` | `#fef2f2` | `#7f1d1d` |
| `semantic/error/foreground` | `VariableID:7:109` | `#dc2626` | `#fca5a5` |
| `semantic/error/border` | `VariableID:7:110` | `#fca5a5` | `#b91c1c` |
| `semantic/warning/background` | `VariableID:7:111` | `#fffbeb` | `#78350f` |
| `semantic/warning/foreground` | `VariableID:7:112` | `#d97706` | `#fcd34d` |
| `semantic/warning/border` | `VariableID:7:113` | `#fcd34d` | `#b45309` |
| `semantic/success/background` | `VariableID:7:114` | `#f0fdf4` | `#14532d` |
| `semantic/success/foreground` | `VariableID:7:115` | `#16a34a` | `#86efac` |
| `semantic/success/border` | `VariableID:7:116` | `#86efac` | `#15803d` |
| `semantic/info/background` | `VariableID:7:117` | `#f0f9ff` | `#0c4a6e` |
| `semantic/info/foreground` | `VariableID:7:118` | `#0284c7` | `#7dd3fc` |
| `semantic/info/border` | `VariableID:7:119` | `#7dd3fc` | `#0369a1` |

### Button
| Token | ID | Light | Dark |
|---|---|---|---|
| `button/brand/regular` | `VariableID:11:7` | `#2563eb` | `#60a5fa` |
| `button/brand/hover` | `VariableID:11:8` | `#1d4ed8` | `#93c5fd` |
| `button/brand/active` | `VariableID:11:9` | `#1e40af` | `#bfdbfe` |
| `button/brand/disabled` | `VariableID:11:10` | `#bfdbfe` | `#1e40af` |
| `button/reject/regular` | `VariableID:11:2` | `#dc2626` | `#f87171` |
| `button/reject/hover` | `VariableID:11:3` | `#b91c1c` | `#fca5a5` |
| `button/reject/active` | `VariableID:11:4` | `#991b1b` | `#fecaca` |
| `button/reject/disabled` | `VariableID:11:5` | `#fecaca` | `#991b1b` |

### Input
| Token | ID | Light | Dark |
|---|---|---|---|
| `input/background/default` | `VariableID:37:2` | `#f9fafb` | `#f9fafb` |
| `input/background/disabled` | `VariableID:37:3` | `#f3f4f6` | `#f3f4f6` |
| `input/background/readonly` | `VariableID:37:4` | `#f3f4f6` | `#f3f4f6` |
| `input/border/default` | `VariableID:37:5` | `#d1d5db` | `#d1d5db` |
| `input/border/hover` | `VariableID:37:6` | `#6b7280` | `#6b7280` |
| `input/border/focus` | `VariableID:37:7` | `#2563eb` | `#2563eb` |
| `input/border/active` | `VariableID:37:8` | `#2563eb` | `#2563eb` |
| `input/border/disabled` | `VariableID:37:9` | `#e5e7eb` | `#e5e7eb` |
| `input/border/negative` | `VariableID:37:10` | `#dc2626` | `#dc2626` |
| `input/border/critical` | `VariableID:37:11` | `#b45309` | `#d97706` |
| `input/border/positive` | `VariableID:37:12` | `#16a34a` | `#16a34a` |
| `input/border/information` | `VariableID:37:13` | `#0284c7` | `#0284c7` |
| `input/border/focus-ring` | `VariableID:37:27` | `#2563eb` | `#2563eb` |
| `input/border/hover-negative` | `VariableID:50:2` | `#b91c1c` | `#f87171` |
| `input/border/hover-critical` | `VariableID:50:3` | `#92400e` | `#fbbf24` |
| `input/border/hover-positive` | `VariableID:50:4` | `#15803d` | `#4ade80` |
| `input/border/hover-information` | `VariableID:50:5` | `#0369a1` | `#38bdf8` |
| `input/text/placeholder` | `VariableID:37:14` | `#4b5563` | `#4b5563` |
| `input/text/value` | `VariableID:37:15` | `#111827` | `#111827` |
| `input/text/disabled` | `VariableID:37:16` | `#d1d5db` | `#d1d5db` |
| `input/text/readonly` | `VariableID:37:17` | `#4b5563` | `#4b5563` |
| `input/text/label` | `VariableID:37:18` | `#111827` | `#111827` |
| `input/text/helper` | `VariableID:37:19` | `#4b5563` | `#4b5563` |
| `input/text/required` | `VariableID:37:20` | `#dc2626` | `#dc2626` |
| `input/icon/default` | `VariableID:37:21` | `#4b5563` | `#4b5563` |
| `input/icon/disabled` | `VariableID:37:22` | `#d1d5db` | `#d1d5db` |
| `input/icon/negative` | `VariableID:37:23` | `#dc2626` | `#dc2626` |
| `input/icon/critical` | `VariableID:37:24` | `#d97706` | `#d97706` |
| `input/icon/positive` | `VariableID:37:25` | `#16a34a` | `#16a34a` |
| `input/icon/information` | `VariableID:37:26` | `#0284c7` | `#0284c7` |

---

## Dimensions

### Spacing
Scopes: `WIDTH_HEIGHT`, `GAP` — use for padding, gap, margin.

| Token | ID | Value |
|---|---|---|
| `spacing/0` | `VariableID:7:64` | 0px |
| `spacing/2` | `VariableID:7:65` | 2px |
| `spacing/4` | `VariableID:7:66` | 4px |
| `spacing/6` | `VariableID:11:6` | 6px |
| `spacing/8` | `VariableID:7:67` | 8px |
| `spacing/12` | `VariableID:7:68` | 12px |
| `spacing/16` | `VariableID:7:69` | 16px |
| `spacing/20` | `VariableID:7:70` | 20px |
| `spacing/24` | `VariableID:7:71` | 24px |
| `spacing/32` | `VariableID:7:72` | 32px |
| `spacing/40` | `VariableID:7:73` | 40px |
| `spacing/48` | `VariableID:7:74` | 48px |
| `spacing/64` | `VariableID:7:75` | 64px |
| `spacing/80` | `VariableID:7:76` | 80px |
| `spacing/96` | `VariableID:7:77` | 96px |

### Radius
Scope: `CORNER_RADIUS`.

| Token | ID | Value |
|---|---|---|
| `radius/none` | `VariableID:7:78` | 0px |
| `radius/sm` | `VariableID:7:79` | 4px |
| `radius/md` | `VariableID:7:80` | 8px |
| `radius/lg` | `VariableID:7:81` | 16px |
| `radius/full` | `VariableID:7:82` | 9999px |

---

## Typography

All scales use **Inter**. Variables live in the Typography collection (modeId `7:4`).

| Scale | Token prefix | Size | Weight | Line-height | Letter-spacing |
|---|---|---|---|---|---|
| Display Large | *(root level)* | 57px | 400 | 64px | −0.25px |
| Display Medium | `typography/display/medium` | 45px | 400 | 52px | 0 |
| Heading 1 | `typography/heading/h1` | 36px | 700 | 44px | −0.5px |
| Heading 2 | `typography/heading/h2` | 30px | 700 | 40px | −0.25px |
| Heading 3 | `typography/heading/h3` | 24px | 600 | 32px | 0 |
| Heading 4 | `typography/heading/h4` | 20px | 600 | 28px | 0 |
| Body Large | `typography/body/large` | 18px | 400 | 28px | 0 |
| Body Medium | `typography/body/medium` | 16px | 400 | 24px | +0.15px |
| Body Small | `typography/body/small` | 14px | 400 | 20px | +0.10px |
| Body Link | `typography/body/link` | 16px | 500 | 24px | +0.15px |
| Caption | `typography/caption` | 12px | 400 | 16px | +0.40px |

Each scale has 5 variables: `font-family`, `font-size`, `font-weight`, `line-height`, `letter-spacing`.

### Variable IDs by scale

| Scale | font-family | font-size | font-weight | line-height | letter-spacing |
|---|---|---|---|---|---|
| Display Large | `7:121` | `7:122` | `7:123` | `7:124` | `7:125` |
| Display Medium | `7:126` | `7:127` | `7:128` | `7:129` | `7:130` |
| H1 | `7:131` | `7:132` | `7:133` | `7:134` | `7:135` |
| H2 | `7:136` | `7:137` | `7:138` | `7:139` | `7:140` |
| H3 | `7:141` | `7:142` | `7:143` | `7:144` | `7:145` |
| H4 | `7:146` | `7:147` | `7:148` | `7:149` | `7:150` |
| Body Large | `7:151` | `7:152` | `7:153` | `7:154` | `7:155` |
| Body Medium | `7:156` | `7:157` | `7:158` | `7:159` | `7:160` |
| Body Small | `7:161` | `7:162` | `7:163` | `7:164` | `7:165` |
| Body Link | `7:166` | `7:167` | `7:168` | `7:169` | `7:170` |
| Caption | `7:171` | `7:172` | `7:173` | `7:174` | `7:175` |

All IDs above are `VariableID:X` — prepend `VariableID:` when using in Plugin API calls.

---

## Effect Styles (Shadows)

Four levels. All use double-layered `DROP_SHADOW` with `gray/900` at low opacity.

| Style name | Style ID | y / blur / spread (outer) | y / blur / spread (inner) | Use case |
|---|---|---|---|---|
| `Shadow/Subtle` | `S:cfdf68b5dc40b663cc7e0ac92075557e72584a6f,` | 1 / 3 / 0 | 1 / 2 / 0 | Cards, form containers, dropdowns |
| `Shadow/Low` | `S:adfe09ec77256fade4108287babc974613581e2a,` | 4 / 6 / −2 | 2 / 4 / −1 | Popovers, menus, sticky headers |
| `Shadow/Medium` | `S:7d5f0e42a24601d85914182db07df6d230ac46d3,` | 10 / 15 / −3 | 4 / 6 / −2 | Modals, dialogs, floating panels |
| `Shadow/High` | `S:81c732e98a15890cc878471a60c7a542188f02a6,` | 20 / 25 / −5 | 8 / 10 / −3 | Overlays, command palettes, drawers |

Shadow color formula: `rgba(17, 24, 39, α)` where α = 0.06–0.18 (outer lighter, inner darker).

---

## Components

### Button

**Page:** `5:260` | **Component set ID:** `13:546` | **160 variants**

#### Variant axes

| Property | Options |
|---|---|
| `Type` | Primary, Secondary, Tertiary, Reject |
| `Size` | Compact (32px height), Cozy (40px height) |
| `State` | Regular, Hover, Down, Disabled |
| `Layout` | Label only, Leading icon + Label, Label + Trailing icon, Icon only, Leading icon + Label + Trailing icon |

#### Component properties

| Key prefix | Type | Default |
|---|---|---|
| `Label#` | TEXT | "Button" |
| `Show Leading Icon#` | BOOLEAN | true |
| `Show Trailing Icon#` | BOOLEAN | true |
| `Leading Icon#` | INSTANCE_SWAP | `5:190` (plus icon) |
| `Trailing Icon#` | INSTANCE_SWAP | `5:190` (plus icon) |

#### Variant naming pattern
`Type=Primary, Size=Compact, State=Regular, Layout=Label only`

#### Key variant IDs
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

### Input

**Page:** `33:162` | **Component set ID:** `41:944` | **50 variants**

#### Variant axes

| Property | Options |
|---|---|
| `Size` | Compact (32px field height), Cozy (40px field height) |
| `State` | Default, Hover, Focus, Active, Disabled, Read-only |
| `Value State` | None, Negative, Critical, Positive, Information |

#### Component properties

| Key prefix | Type | Default |
|---|---|---|
| `Label#` | TEXT | — |
| `Placeholder#` | TEXT | — |
| `Value#` | TEXT | — |
| `Helper Text#` | TEXT | — |
| `Show Label#` | BOOLEAN | true |
| `Show Helper Text#` | BOOLEAN | true |
| `Required#` | BOOLEAN | false |
| `Leading Icon#` | BOOLEAN | false |
| `Trailing Icon#` | BOOLEAN | false |
| `Leading Icon Instance#` | INSTANCE_SWAP | `5:196` (search) |
| `Trailing Icon Instance#` | INSTANCE_SWAP | `5:251` (x) |

#### Layer structure
```
Input [COMPONENT]
├── label-row
│   ├── label [TEXT — Caption, input/text/label]
│   └── required [TEXT — Caption, input/text/required] — visible when Required=true
├── field [FRAME — FIXED 240×32/40px, radius 6px, stroke 1.5px inside]
│   ├── leading-icon [INSTANCE — visible when Leading Icon=true]
│   ├── input-text [TEXT — Body Small, input/text/placeholder or input/text/value]
│   └── trailing-icon [INSTANCE — visible when Trailing Icon=true]
└── helper-row
    └── helper-text [TEXT — Caption, input/text/helper]
```

#### Field dimensions
- Compact: 240×32px, corner radius 6px, stroke 1.5px
- Cozy: 240×40px, corner radius 6px, stroke 1.5px
- Focus/Active state adds a blue drop-shadow focus ring (`input/border/focus-ring`)

#### Key variant IDs
| Variant | ID |
|---|---|
| Compact / Default / None | `41:2` |
| Compact / Default / Negative | `41:14` |
| Compact / Default / Critical | `41:26` |
| Compact / Default / Positive | `41:38` |
| Cozy / Default / None | *(first Cozy child)* |

---

### Form

**Page:** `55:303` | **Component set ID:** `74:358` | **4 variants**

#### Variant axes

| Property | Options |
|---|---|
| `Layout` | Vertical, Horizontal |
| `Size` | Compact, Cozy |

#### Component properties

| Key prefix | Type | Default |
|---|---|---|
| `Form Title#text` | TEXT | "Form Title" |
| `Form Description#text` | TEXT | "Provide context for this form and its purpose." |
| `Primary Action Label#text` | TEXT | "Submit" |
| `Secondary Action Label#text` | TEXT | "Cancel" |
| `Field 1 Label#text` | TEXT | "Full Name" |
| `Field 2 Label#text` | TEXT | "Email Address" |
| `Field 3 Label#text` | TEXT | "Message" |
| `Show Description#bool` | BOOLEAN | true |
| `Show Divider#bool` | BOOLEAN | true |
| `Show Secondary Action#bool` | BOOLEAN | true |
| `Field 3 Required#bool` | BOOLEAN | false |

#### Layer structure
```
Form [COMPONENT]
├── header [FRAME VERTICAL, FILL]
│   ├── form-title [TEXT — H3, text/primary]        ← characters wired to Form Title prop
│   └── form-description [TEXT — Body Medium, text/secondary]  ← wired + visible prop
├── divider [LINE — border/secondary]               ← visible wired to Show Divider prop
├── field-group [FRAME VERTICAL or HORIZONTAL, FILL]
│   ├── input-full-name [INSTANCE of Input]
│   ├── input-email-address [INSTANCE of Input]
│   └── input-message [INSTANCE of Input]
└── actions [FRAME HORIZONTAL, FILL]
    ├── button-submit [INSTANCE of Button — Type=Primary]
    └── button-cancel [INSTANCE of Button — Type=Secondary]   ← visible wired to Show Secondary Action
```

#### Token bindings on root
| Property | Token |
|---|---|
| fill | `background/primary` |
| stroke | `border/default` (1px inside) |
| corner radius | `radius/md` (8px) |
| padding (Compact) | `spacing/20` (20px all sides) |
| padding (Cozy) | `spacing/24` (24px all sides) |
| section gap (Compact) | `spacing/20` |
| section gap (Cozy) | `spacing/24` |
| field gap (Compact) | `spacing/12` |
| field gap (Cozy) | `spacing/16` |
| actions gap | `spacing/8` |

#### Effect style applied
All 4 Form variants use `Shadow/Subtle` (`effectStyleId`).

#### Dimensions
| Variant | Width | Height |
|---|---|---|
| Vertical / Compact | 480px | ~372px |
| Vertical / Cozy | 480px | ~432px |
| Horizontal / Compact | 800px | ~244px |
| Horizontal / Cozy | 800px | ~280px |

---

## Icon Library

**Page:** `0:1` | **Frame:** `Icons` (`5:7`) | **124 icons** | All 16×16px COMPONENT nodes

Source: [Lucide Icons](https://lucide.dev). All icons are standalone components (not in a component set).

### Full icon list with IDs

| Name | ID | | Name | ID |
|---|---|---|---|---|
| align-center-horizontal | `5:8` | | panel-left-close | `5:172` |
| arrow-down | `5:10` | | panel-left-open | `5:174` |
| arrow-left | `5:12` | | panel-right | `5:176` |
| arrow-right | `5:14` | | panel-right-close | `5:178` |
| arrow-up | `5:16` | | panel-right-open | `5:180` |
| audio-lines | `5:18` | | panel-top | `5:182` |
| ban | `5:20` | | pause | `5:184` |
| battery | `5:22` | | phone | `5:186` |
| bell | `5:24` | | play | `5:188` |
| bell-dot | `5:26` | | plus | `5:190` |
| bluetooth | `5:28` | | refresh-cw | `5:192` |
| bold | `5:30` | | save | `5:194` |
| bookmark | `5:32` | | search | `5:196` |
| box | `5:34` | | send | `5:198` |
| boxes | `5:36` | | settings | `5:200` |
| braces | `5:38` | | share | `5:202` |
| brackets | `5:40` | | shield | `5:204` |
| calendar | `5:42` | | shield-check | `5:206` |
| calendar-days | `5:44` | | shopping-bag | `5:208` |
| camera | `5:46` | | shopping-cart | `5:210` |
| chart-no-axes-combined | `5:48` | | smartphone | `5:212` |
| chart-pie | `5:50` | | sparkles | `5:214` |
| chart-scatter | `5:52` | | square-arrow-out-up-right | `5:216` |
| chart-spline | `5:55` | | star | `5:218` |
| check | `5:57` | | sun | `5:220` |
| chevron-down | `5:59` | | tag | `5:222` |
| chevron-left | `5:61` | | thumbs-down | `5:225` |
| chevron-right | `5:63` | | thumbs-up | `5:227` |
| chevron-up | `5:65` | | trash | `5:229` |
| circle-alert | `5:67` | | trash-2 | `5:231` |
| circle-check | `5:69` | | type | `5:233` |
| circle-minus | `5:71` | | underline | `5:235` |
| circle-plus | `5:73` | | upload | `5:237` |
| circle-x | `5:75` | | user | `5:239` |
| clock | `5:77` | | users | `5:241` |
| cloud | `5:79` | | video | `5:243` |
| code | `5:81` | | volume-2 | `5:245` |
| code-xml | `5:83` | | wand-sparkles | `5:247` |
| command | `5:85` | | wifi | `5:249` |
| compass | `5:87` | | x | `5:251` |
| component | `5:89` | | zap | `5:253` |
| copy | `5:91` | | zoom-in | `5:255` |
| credit-card | `5:93` | | zoom-out | `5:257` |
| download | `5:95` | | eye | `5:103` |
| ellipsis | `5:97` | | eye-closed | `5:105` |
| expand | `5:99` | | eye-off | `5:107` |
| external-link | `5:101` | | file | `5:109` |
| file-code-corner | `5:111` | | flag | `5:113` |
| folder | `5:115` | | funnel | `5:117` |
| globe | `5:119` | | grid-2x2 | `5:121` |
| heart | `5:123` | | house | `5:125` |
| image | `5:127` | | info | `5:129` |
| italic | `5:131` | | layers | `5:133` |
| link | `5:135` | | list | `5:137` |
| loader | `5:139` | | lock | `5:141` |
| log-in | `5:143` | | log-out | `5:145` |
| mail | `5:147` | | map | `5:149` |
| map-pin | `5:151` | | menu | `5:153` |
| message-circle | `5:155` | | message-square | `5:157` |
| mic | `5:159` | | minus | `5:161` |
| monitor | `5:163` | | moon | `5:165` |
| navigation | `5:167` | | palette | `5:169` |

---

## Design Rules

### Token usage
- **Always** bind values via variables — never use hardcoded colors, spacing, or radii.
- Use **Theme tokens** for all color assignments (fills, strokes, text). Primitive tokens are source-of-truth only.
- Use **Dimensions tokens** for all `padding`, `gap`, `itemSpacing`, `cornerRadius`.
- Use **Typography variables** (`setBoundVariable`) for `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, `letterSpacing`.

### Light / Dark theming
- All Theme token values resolve differently in Light vs Dark mode.
- Switch mode on any frame via `figma.variables.setVariableForFrame` or by changing the frame's variable mode to the Dark modeId (`7:3`).
- Input tokens (`input/*`) are currently identical in both modes — this is intentional; they sit on a white field regardless of page background.

### Auto Layout
- All components use Auto Layout throughout — no absolute positioning.
- `primaryAxisSizingMode = 'AUTO'` (hug), `counterAxisSizingMode = 'FIXED'` (known width) on outermost frames.
- Inner rows use `layoutSizingHorizontal = 'FILL'` to stretch within their parent.

### Accessibility (verified)
- Input placeholder: 7.23:1 / 12.04:1 contrast ratio (Light/Dark) — passes WCAG AA (min 4.5:1)
- Input value: 16.98:1 in both modes — passes WCAG AAA
- Critical/warning border uses `yellow/700` in Light (3.05:1 for non-text boundary) — passes WCAG 3:1
- Disabled state is intentionally low contrast — exempt per WCAG 1.4.3

### Component property wiring (Plugin API)
- Text nodes: set `node.componentPropertyReferences = { characters: propKey }` where `propKey` is the full key including `#id` suffix.
- Visibility: set `node.componentPropertyReferences = { visible: propKey }`.
- Nested instance properties cannot be wired via `componentPropertyReferences` on the instance — only top-level TEXT and BOOLEAN nodes support this.
- Use `figma.variables.setBoundVariableForPaint(paint, 'color', variable)` — it returns a **new** paint object; capture and reassign the array.

### Naming conventions
- Component set names: PascalCase (`Button`, `Input`, `Form`)
- Variant property names: Title Case with spaces (`Type`, `Size`, `Value State`)
- Layer names: kebab-case (`form-title`, `field-group`, `button-submit`)
- Variable tokens: slash-separated lowercase (`background/primary`, `spacing/16`)
- Effect styles: `Shadow/Subtle`, `Shadow/Low`, `Shadow/Medium`, `Shadow/High`
