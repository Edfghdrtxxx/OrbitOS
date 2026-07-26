---
version: alpha
name: MATE-academic-slides
description: A restrained academic conference-slide system for physics group-meeting and defense decks. The system anchors on a white canvas with a full-bleed navy header band, Times New Roman throughout, and diagram-first content — schematic pipelines, booktabs-style result tables, and matplotlib figures rather than bullet walls. Brand voltage comes from the navy band + serif-only typography — it reads as a physics preprint projected onto a screen, deliberately not as a corporate SaaS template. Every slide carries the same chrome (band, title, bottom rule, footer, "n / N" page number), so the deck reads as one continuous document.

colors:
  primary: "#174994"
  primary-deep: "#1F3A5F"
  primary-tint: "#E8EEF7"
  ink: "#1F2933"
  body: "#404040"
  muted: "#5F6B73"
  muted-soft: "#888888"
  hairline: "#DDDDDD"
  canvas: "#FFFFFF"
  on-primary: "#FFFFFF"
  alert: "#C00000"
  accent-teal: "#7B9EA8"
  accent-brick: "#C75146"
  accent-graphite: "#444444"

typography:
  display-stat:
    fontFamily: "Times New Roman, Tinos, Liberation Serif, serif"
    fontSize: 44px
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: 0
  display-title:
    fontFamily: "Times New Roman, Tinos, Liberation Serif, serif"
    fontSize: 40px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: 0
  slide-title:
    fontFamily: "Times New Roman, Tinos, Liberation Serif, serif"
    fontSize: 28px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0
  heading:
    fontFamily: "Times New Roman, Tinos, Liberation Serif, serif"
    fontSize: 20px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  heading-soft:
    fontFamily: "Times New Roman, Tinos, Liberation Serif, serif"
    fontSize: 20px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0
  body:
    fontFamily: "Times New Roman, Tinos, Liberation Serif, serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.35
    letterSpacing: 0
  body-strong:
    fontFamily: "Times New Roman, Tinos, Liberation Serif, serif"
    fontSize: 16px
    fontWeight: 700
    lineHeight: 1.35
    letterSpacing: 0
  caption:
    fontFamily: "Times New Roman, Tinos, Liberation Serif, serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: 0
  caption-strong:
    fontFamily: "Times New Roman, Tinos, Liberation Serif, serif"
    fontSize: 14px
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: 0
  micro:
    fontFamily: "Times New Roman, Tinos, Liberation Serif, serif"
    fontSize: 12px
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: 0
  fine:
    fontFamily: "Times New Roman, Tinos, Liberation Serif, serif"
    fontSize: 10px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: 0

rounded:
  none: 0px
  sm: 4px
  md: 8px

spacing:
  xxs: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  margin: 48px
  gutter: 64px

components:
  header-band:
    backgroundColor: "{colors.primary}"
    width: 960px
    height: 56px
    padding: 0px 48px
  header-title:
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    typography: "{typography.slide-title}"
    height: 56px
    width: 864px
  bottom-rule:
    backgroundColor: "{colors.primary}"
    width: 888px
    height: 2px
  footer-label:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.caption}"
    height: 24px
    width: 720px
  page-number:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.fine}"
    height: 24px
    width: 72px
  cover-title:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.display-title}"
    width: 864px
    height: 112px
  cover-subtitle:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.heading-soft}"
    width: 768px
    height: 56px
  stat-number:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.display-stat}"
    width: 272px
    height: 64px
  stat-label:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.body}"
    width: 272px
    height: 40px
  section-heading:
    backgroundColor: transparent
    textColor: "{colors.primary}"
    typography: "{typography.heading}"
    width: 400px
    height: 40px
  bullet-list:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: 0px 0px 0px 18px
  caption-block:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    padding: 0px 0px 0px 18px
  objective-line:
    backgroundColor: transparent
    textColor: "{colors.alert}"
    typography: "{typography.caption-strong}"
    padding: 8px 0px 0px 18px
  pipeline-step:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.heading}"
    rounded: "{rounded.md}"
    padding: 8px 12px
    width: 400px
    height: 56px
  pipeline-step-descriptor:
    backgroundColor: transparent
    textColor: "{colors.body}"
    typography: "{typography.heading-soft}"
  pipeline-step-terminal:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.heading}"
    rounded: "{rounded.md}"
    padding: 8px 12px
    width: 400px
    height: 56px
  pipeline-arrow:
    backgroundColor: "{colors.primary}"
    width: 40px
    height: 16px
  variant-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary}"
    typography: "{typography.heading}"
    rounded: "{rounded.md}"
    padding: 8px 12px
    width: 400px
    height: 88px
  column-divider:
    backgroundColor: "{colors.primary-deep}"
    width: 1px
    height: 416px
  schematic-box:
    backgroundColor: "{colors.primary-tint}"
    textColor: "{colors.primary-deep}"
    typography: "{typography.caption}"
    rounded: "{rounded.none}"
    padding: 4px 8px
    height: 40px
  schematic-output-chip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.primary-deep}"
    typography: "{typography.micro}"
    rounded: "{rounded.none}"
    padding: 4px 8px
    width: 88px
    height: 40px
  schematic-annotation:
    backgroundColor: transparent
    textColor: "{colors.primary-deep}"
    typography: "{typography.fine}"
  diagram-annotation:
    backgroundColor: transparent
    textColor: "{colors.muted-soft}"
    typography: "{typography.fine}"
  diagram-chip-teal:
    backgroundColor: "{colors.accent-teal}"
    height: 8px
  diagram-chip-brick:
    backgroundColor: "{colors.accent-brick}"
    height: 8px
  diagram-chip-graphite:
    backgroundColor: "{colors.accent-graphite}"
    height: 8px
  figure-frame:
    backgroundColor: "{colors.canvas}"
    rounded: "{rounded.sm}"
    padding: 4px
  table-cell:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    height: 36px
  table-cell-key:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-strong}"
    width: 112px
    height: 36px
  table-cell-reference:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    width: 280px
    height: 36px
  table-rule-top:
    backgroundColor: "{colors.ink}"
    width: 864px
    height: 2px
  table-rule-header:
    backgroundColor: "{colors.ink}"
    width: 864px
    height: 1px
  table-rule-row:
    backgroundColor: "{colors.hairline}"
    width: 864px
    height: 1px
---

## Overview

This is a **physics group-meeting and defense deck** system, extracted from three generations of the TRK energy-regression decks (2026-05-18, 2026-06-14, 2026-07-01). Its governing idea: a slide is a **figure with a caption**, not a bulleted argument. Text exists to label and qualify the visual; it never carries the argument alone.

The base atmosphere is a **white canvas** (`{colors.canvas}`) with a **full-bleed navy header band** (`{colors.primary}` — #174994) pinned to the top of *every* slide, cover included. Type is **Times New Roman at every level** — cover title to page number. There is no display/body split, no sans-serif anywhere. That single-family discipline is what makes the deck read as an extension of the paper rather than as marketing collateral.

Brand voltage comes from the **navy band against white**, and from the restraint everywhere else. The palette outside the chrome is nearly monochrome: dark ink for text, warm gray for metadata, and a *small* categorical accent set (`{colors.accent-teal}`, `{colors.accent-brick}`, `{colors.accent-graphite}`) reserved exclusively for distinguishing tracks, methods, or series inside diagrams. Red (`{colors.alert}`) appears roughly once per deck.

The system has three content modes that a slide picks exactly one of:
1. **Figure slides** — one to four matplotlib PNGs on the content floor, with short overlay labels. The most common slide by far.
2. **Schematic slides** — hand-built vector diagrams: `{components.pipeline-step}` stacks, `{components.schematic-box}` chains, arrows, and a `{components.column-divider}` splitting a comparison.
3. **Table slides** — a booktabs-style results table with three rule weights and a literature-reference column.

**Key Characteristics:**
- Fixed 960 × 540 px canvas (= 10 × 5.625 in at 96 DPI, 16:9). Every dimension in this document converts exactly; see *PowerPoint Implementation*.
- Persistent chrome on all slides: `{components.header-band}` + `{components.header-title}` at top; `{components.bottom-rule}`, `{components.footer-label}`, and `{components.page-number}` at bottom. The chrome never varies between slides, and the cover is *not* exempt.
- Times New Roman only, at eight sizes. Emphasis is carried by **weight and color**, never by a second family.
- Navy is structural, not decorative. `{colors.primary}` paints chrome and diagram containers; it is never used as a highlight on running text.
- Diagram containers use a two-tone convention: `{colors.primary-tint}` fill with `{colors.primary-deep}` stroke and label. Pipeline containers use white fill with a `{colors.primary}` stroke, and the **terminal step inverts to solid navy** — that inversion is the only "emphasis" device in the schematic vocabulary.
- Results tables follow LaTeX `booktabs`: heavy top rule, medium below-header rule, hairline row rules. No vertical rules, no fills, no zebra striping.
- Border radius is binary: `{rounded.none}` for diagram boxes and all chrome, `{rounded.md}` for pipeline and variant cards. `{rounded.sm}` is reserved for figure frames.
- The page number reads `n / N` — total-aware, so the audience always knows how much is left.

## Colors

### Brand & Structural
- **Primary / Navy** (`{colors.primary}` — #174994): The header band, the bottom rule, the cover title, pipeline container strokes and the inverted terminal step. The single identity color. Used structurally at large area, never as an inline text highlight.
- **Primary Deep** (`{colors.primary-deep}` — #1F3A5F): Diagram ink — schematic box strokes, schematic labels, arrow fills inside dense diagrams, and the vertical `{components.column-divider}`. Darker and more desaturated than `{colors.primary}` so that fine 10–12 px diagram type stays legible against `{colors.primary-tint}`.
- **Primary Tint** (`{colors.primary-tint}` — #E8EEF7): The fill of `{components.schematic-box}`. The only tinted surface in the system.

### Text
- **Ink** (`{colors.ink}` — #1F2933): All running text, table cells, and table rules. Cool near-black; not pure #000000.
- **Body** (`{colors.body}` — #404040): Descriptor text that trails a bold label inside a container — the "— MATEROOT platform" half of a `{components.pipeline-step}`. One step lighter than `{colors.ink}` so the bold navy label leads.
- **Muted** (`{colors.muted}` — #5F6B73): All metadata — footer, page number, cover subtitle, `{components.stat-label}`. Warm gray, the system's second-most-used color.
- **Muted Soft** (`{colors.muted-soft}` — #888888): Incidental diagram annotations ("alpha source") that must not compete with the diagram itself.
- **On Primary** (`{colors.on-primary}` — #FFFFFF): Text on the navy band and on the inverted terminal pipeline step.

### Surface & Line
- **Canvas** (`{colors.canvas}` — #FFFFFF): The page floor, and the fill of pipeline/variant cards and schematic output chips. Pure white — a projector's white point is the cheapest contrast available, and unlike a screen-first system there is nothing to gain from tinting it.
- **Hairline** (`{colors.hairline}` — #DDDDDD): Table row rules and figure frames only.

### Semantic
- **Alert** (`{colors.alert}` — #C00000): Reserved for the "Objective:" line and for genuine warnings. Deep red, never #FF0000. Budget roughly one use per deck; a second use halves the value of the first.

### Categorical Accents
Used **only** to distinguish members of a series inside a diagram — tracks, methods, energy channels. The chip color and its matching label color are always the same value, which is what lets the audience map label to object without a legend.
- **Accent Teal** (`{colors.accent-teal}` — #7B9EA8)
- **Accent Brick** (`{colors.accent-brick}` — #C75146)
- **Accent Graphite** (`{colors.accent-graphite}` — #444444)

Three is the ceiling. A fourth series means the diagram should become a table.

### Retired Values

The source decks accumulated near-duplicate hexes. These are **drift, not tokens** — rewrite them on contact:

| Retired | Where it appeared | Replace with |
|---|---|---|
| `#1F4E8C` | Cover title, some headings | `{colors.primary}` |
| `#1F4E79` | Theme accent1, pipeline strokes | `{colors.primary}` |
| `#002060` | Ad-hoc "Normal" overlay labels | `{colors.primary}` |
| `#5E6B73` | Metadata (one-character typo of the real value) | `{colors.muted}` |
| `#222222` | Table top and below-header rules | `{colors.ink}` |
| `#444444` as *text* | Diagram series label | `{colors.accent-graphite}` (keep as a series color only) |
| `#FF0000` | Ad-hoc "Abnormal" overlay labels | `{colors.alert}` |
| `#BBBBBB` | One figure frame | `{colors.hairline}` |

## Typography

### Font Family
**Times New Roman** at every level, with the fallback stack `Tinos, Liberation Serif, serif` — Tinos is metrically compatible, so a deck rendered on Linux or in a browser preview keeps its line breaks. There is no secondary family: no sans for labels, no monospace for code or parameter names. Parameter strings like `inlier_dist_mm = 3.0` are set in `{typography.body}` like ordinary prose.

This is the system's strongest constraint and its main identity carrier. Introducing Arial or Calibri for "UI-ish" labels would immediately make the deck read as a generic PowerPoint.

Emphasis ladder, in order of preference:
1. **Weight** — 700 for labels, headings, and the leading half of a two-part container label.
2. **Color** — `{colors.primary}` for the label, `{colors.body}` for its descriptor.
3. *Italic* — sub-annotations inside schematic boxes and the cover subtitle only.
4. Size — a last resort; the eight steps below are already the full vocabulary.

### Hierarchy

| Token | px | pt | Weight | Use |
|---|---|---|---|---|
| `{typography.display-stat}` | 44px | 33pt | 700 | Cover headline metrics — the three-up stat row |
| `{typography.display-title}` | 40px | 30pt | 700 | Cover main title, up to two lines |
| `{typography.slide-title}` | 28px | 21pt | 700 | The header-band title. **The signature size** — appears on every slide |
| `{typography.heading}` | 20px | 15pt | 700 | Column headings, pipeline/variant card labels, diagram callouts |
| `{typography.heading-soft}` | 20px | 15pt | 400 | The descriptor half of a container label; cover subtitle (italic) |
| `{typography.body}` | 16px | 12pt | 400 | Bullets, stat labels, table cells |
| `{typography.body-strong}` | 16px | 12pt | 700 | Table key column (method names) |
| `{typography.caption}` | 14px | 10.5pt | 400 | Caption strips, footer, schematic box labels, table reference column |
| `{typography.caption-strong}` | 14px | 10.5pt | 700 | The "Objective:" line (bold + italic + `{colors.alert}`) |
| `{typography.micro}` | 12px | 9pt | 700 | Schematic output-chip labels |
| `{typography.fine}` | 10px | 7.5pt | 400 | Page number, schematic sub-annotations, diagram annotations |

### Principles
Nothing on a slide is smaller than `{typography.fine}` (10px / 7.5pt). At a 3 m projection distance that is already at the legibility floor, and it is only acceptable because everything set at that size is a *sub-annotation* — a value the audience reads if they lean in, never a value the argument depends on.

Bullets use the Wingdings `Ø` glyph at an 18 px hanging indent. Bullet nesting stops at one level; a second level means the slide is carrying too much text and should become a diagram or a table.

Line height stays tight (1.2–1.35). Slides are dense by design, and the whitespace budget goes to the gaps *between* blocks rather than between lines.

## Layout

### Canvas
**960 × 540 px** — exactly 10 × 5.625 in at 96 DPI, the PowerPoint 16:9 on-screen show. All measurements below are px; every one converts to a clean inch or point value (see *PowerPoint Implementation*).

### Spacing System
- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 16px · `{spacing.md}` 24px · `{spacing.lg}` 32px · `{spacing.margin}` 48px · `{spacing.gutter}` 64px.
- **Outer margin:** `{spacing.margin}` (48px) on all four sides. The content column is therefore 864 px wide.
- **Two-column gutter:** `{spacing.gutter}` (64px), with the `{components.column-divider}` on the exact center axis at x = 480.

### The Chrome Frame

Fixed on every slide, cover included:

| Element | x | y | w | h |
|---|---|---|---|---|
| `{components.header-band}` | 0 | 0 | 960 | 56 |
| `{components.header-title}` | 48 | 0 | 864 | 56 (vertically centered) |
| `{components.bottom-rule}` | 36 | 492 | 888 | 2 |
| `{components.footer-label}` | 48 | 504 | 720 | 24 |
| `{components.page-number}` | 840 | 504 | 72 | 24 (right-aligned) |

The bottom rule insets to 36 px rather than the 48 px margin — it reads as a page rule underlining the whole content area, not as another content block.

### Content Zone
**y = 64 → 480, height 416 px.** The 8 px clearance below the band and the 12 px above the bottom rule are the only fixed vertical padding in the system; everything else is placed by archetype.

### Grids

| Grid | Column width | Gutter | x positions |
|---|---|---|---|
| Two-column (comparison) | 400 | 64 | 48, 512 — divider at 480 |
| Three-up (cover stats) | 272 | 24 | 48, 344, 640 |
| Four-column (results table) | 112 / 224 / 224 / 280 | 8 | 48, 168, 400, 632 |
| Schematic output chips | 88 | 8 | 96 pitch |

### Vertical Rhythm Inside Stacks
- `{components.pipeline-step}`: 56 px tall on a **72 px pitch** — 16 px of gap, exactly filled by a 40 × 16 px `{components.pipeline-arrow}` centered in the gap. Six steps fit the content zone.
- `{components.variant-card}`: 88 px tall on a **136 px pitch**. Three cards fit.
- `{components.schematic-box}`: 40 px tall on a **48 px pitch**, with an 8 px arrow in the gap. Denser than the pipeline stack because schematic boxes carry a label plus an italic sub-annotation.
- Table rows: 36 px tall on a **44 px pitch**, with the row rule sitting on the pitch boundary.

### Whitespace Philosophy
This system is **dense on purpose**. It is built for an audience that is reading the figures, not skimming a headline. The discipline is not "leave more space" — it is *alignment*: every block starts at x = 48, 512, or a declared grid position, and nothing is nudged by eye. A slide reads as calm because its edges line up, not because it is empty.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Everything by default — text, figures, chrome |
| Hairline frame | 1 px `{colors.hairline}` | `{components.figure-frame}`, table row rules |
| Stroked container | 1 px `{colors.primary}` or `{colors.primary-deep}` | Pipeline cards, variant cards, schematic boxes |
| Filled container | `{colors.primary-tint}` fill, stroked | `{components.schematic-box}` |
| Inverted | Solid `{colors.primary}` fill, `{colors.on-primary}` text | `{components.header-band}`, `{components.pipeline-step-terminal}` |

**Shadows do not exist in this system.** Not on cards, not on figures, not on the band. Depth is carried entirely by stroke weight and fill inversion. A drop shadow on a projected slide reads as blur, and it is the single fastest way to make an academic deck look like a template.

### Rule Weights
The table rules are a deliberate three-step ladder borrowed from LaTeX `booktabs`, and they are the most information-dense use of depth in the deck:

| Rule | Weight | Color |
|---|---|---|
| `{components.table-rule-top}` | 2px | `{colors.ink}` |
| `{components.table-rule-header}` | 1px | `{colors.ink}` |
| `{components.table-rule-row}` | 1px | `{colors.hairline}` |

No vertical rules. No cell fills. No zebra striping. The eye groups rows by the hairlines and reads the header break from the darker rule.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.none}` | 0px | All chrome, all schematic boxes, all rules, figure crops |
| `{rounded.sm}` | 4px | `{components.figure-frame}` only |
| `{rounded.md}` | 8px | `{components.pipeline-step}`, `{components.pipeline-step-terminal}`, `{components.variant-card}` |

The split is semantic, not decorative: **rounded = a step you move through; square = a thing you read.** Pipeline and variant cards are rounded because they represent stages in a flow. Schematic boxes are square because they represent tensors, layers, and fixed quantities.

### Geometry Vocabulary
The system uses five PowerPoint preset geometries and no others:
- `rect` — bands, rules, schematic boxes, chips
- `roundRect` — pipeline steps, variant cards
- `downArrow` — vertical flow between stacked steps (40 × 16 px, or 16 px in dense schematics)
- `rightArrow` — the bridge from a pipeline stack to the comparison column (80 × 28 px)
- `line` — the column divider and table rules
- `ellipse` — a single-purpose source marker in physical-layout diagrams

### Figures
Figures are **matplotlib PNG exports**, placed at native aspect ratio and never stretched. They are the primary content of the deck; the chrome exists to frame them.

- Placed flush to the content grid, or bled to the slide edge (x = 0) when the figure's own whitespace supplies the margin. Bleeding is preferred over shrinking — a figure that has to be scaled below legibility should be its own slide.
- Overlay labels ("Normal", "Abnormal") sit directly on the figure in `{typography.heading}`, colored `{colors.primary}` for the reference case and `{colors.alert}` for the anomalous case.
- `{components.figure-frame}` is optional and used only when a figure's own background is white and would otherwise dissolve into the canvas.

Plot-internal styling (axes, fonts, series colors, DPI) is **out of scope for this document** and owned by the `academic-draw` skill. See *Known Gaps*.

## Components

### Chrome

**`header-band`** — Full-bleed navy rectangle, 960 × 56 px at the origin, fill `{colors.primary}`. Present on every slide including the cover. No radius, no stroke, no gradient.

**`header-title`** — The slide title, `{typography.slide-title}` (28px / 700) in `{colors.on-primary}`, left-aligned at x = 48, vertically centered in the band. Bullets suppressed. One line; a title that wraps to two means it should be shortened, not shrunk. On the cover this repeats the cover title verbatim.

**`bottom-rule`** — 888 × 2 px navy rule at y = 492, inset 36 px from each edge.

**`footer-label`** — The running deck topic ("Energy regression") in `{typography.caption}` / `{colors.muted}`, left-aligned at x = 48. Constant across the whole deck; it is a running head, not a per-slide caption.

**`page-number`** — `n / N` in `{typography.fine}` / `{colors.muted}`, right-aligned at the right margin. The `/ N` is required — a bare number tells the audience nothing about pacing.

### Cover

**`cover-title`** — `{typography.display-title}` (40px / 700) in `{colors.primary}`, x = 48, y = 112, width 864. Two lines maximum, broken at a colon: subject on line 1, comparison or method on line 2.

**`cover-subtitle`** — `{typography.heading-soft}` italic in `{colors.muted}`, x = 96, y = 264, width 768. One sentence stating what was held constant and what was varied.

**`stat-number`** + **`stat-label`** — A three-up headline-results row: `{typography.display-stat}` (44px / 700) in `{colors.primary}` at y = 352, with `{typography.body}` / `{colors.muted}` labels at y = 420. Columns at x = 48 / 344 / 640, each 272 px wide.

This row is the system's most distinctive move: **the cover states the result.** A headline metric, a comparison delta, and a scope count — so the audience knows the conclusion before slide 2 and spends the talk evaluating it rather than waiting for it.

### Schematic

**`pipeline-step`** — 400 × 56 px `roundRect`, white fill, 1 px `{colors.primary}` stroke, radius `{rounded.md}`. Text is centered and always two-part: a bold `{typography.heading}` label in `{colors.primary}` ("3. Fit"), an em-dash, then a `{components.pipeline-step-descriptor}` in `{colors.body}` ("— track fitting"). Steps are numbered.

**`pipeline-step-descriptor`** — The trailing half of that label: `{typography.heading-soft}` in `{colors.body}`. Never a separate shape; it is a second run in the same paragraph.

**`pipeline-step-terminal`** — The final step of a pipeline, inverted: solid `{colors.primary}` fill, `{colors.on-primary}` text, same geometry. The inversion marks the output of the chain and is the only emphasis device in the schematic vocabulary.

**`pipeline-arrow`** — 40 × 16 px `downArrow`, solid `{colors.primary}`, horizontally centered on the stack, sitting in the 16 px gap between steps.

**`variant-card`** — 400 × 88 px `roundRect`, same fill and stroke as `{components.pipeline-step}`, on a 136 px pitch. Two centered lines: a bold lettered label ("A. LiLu Converter") in `{colors.primary}`, then a `{typography.heading-soft}` gloss in `{colors.body}`. Used for ablation arms and method variants — the right-hand column of a comparison slide.

**`column-divider`** — 1 px vertical line in `{colors.primary-deep}` on the center axis (x = 480), spanning the content zone. Separates a pipeline stack from the variants it feeds. A `rightArrow` (80 × 28 px, `{colors.primary}`) may cross it to show the hand-off.

**`schematic-box`** — 40 px tall `rect`, `{colors.primary-tint}` fill, 0.75 px `{colors.primary-deep}` stroke, square corners, centered text. Two lines: a `{typography.caption}` bold label in `{colors.primary-deep}` ("Linear (512 → 128)") and an optional `{components.schematic-annotation}`. This is the network-architecture vocabulary — one box per layer, stacked on a 48 px pitch with small arrows between.

**`schematic-output-chip`** — 88 × 40 px white `rect` with a `{colors.accent-teal}` stroke, on a 96 px pitch. A bold `{typography.micro}` slot name ("out_2") over an italic `{typography.fine}` value ("−1.39 MeV"). The row of chips terminates an architecture diagram with concrete numbers, which is what makes the diagram credible rather than generic.

**`schematic-annotation`** — Italic `{typography.fine}` in `{colors.primary-deep}`, inside a schematic box. Carries the implementation detail a specialist will ask about ("num_classes = 4 per-track energy slots").

**`diagram-annotation`** — Italic `{typography.fine}` in `{colors.muted-soft}`, floating on a physical-layout diagram. Deliberately the quietest text in the system.

**`diagram-chip-teal`** / **`diagram-chip-brick`** / **`diagram-chip-graphite`** — Small solid rectangles marking members of a series (individual tracks, methods, channels). Each chip's color **must** match the color of its own label text elsewhere on the slide; that pairing replaces a legend.

### Figures

**`figure-frame`** — Optional 1 px `{colors.hairline}` frame with 4 px padding and `{rounded.sm}` corners, used only when a white-background figure would otherwise dissolve into the canvas.

### Results Table

**`table-cell`** — 36 px row, `{typography.body}` in `{colors.ink}`, on a 44 px pitch.

**`table-cell-key`** — The first column (method name), 112 px wide, `{typography.body-strong}`. Bold is the only marker of the key column; there is no fill and no vertical rule.

**`table-cell-reference`** — The last column, 280 px wide, `{typography.caption}`. Carries the literature citation for the method in the row ("Ayyad et al., NIM A 880 (2018) 166–173."). Building the citation into the table rather than a footnote is a defining habit of this system: every baseline is attributable *in place*.

**`table-rule-top`** / **`table-rule-header`** / **`table-rule-row`** — The three-weight booktabs ladder described under *Elevation & Depth*. Full content width, 864 px.

## Do's and Don'ts

### Do
- Put the chrome on every slide, cover included. The constant band is what makes seven slides read as one document.
- Set everything in Times New Roman. Carry emphasis with weight and color.
- State the result on the cover with the three-up `{components.stat-number}` row. Give the audience the conclusion first.
- Number pipeline steps and letter variant cards. A schematic the audience can *point at* ("step 4", "variant B") is worth more than a prettier one they can't reference.
- Invert the terminal step of a pipeline to solid `{colors.primary}`. That is the emphasis mechanism — use it once per stack.
- Pair every categorical chip color with an identically-colored label. Kill legends.
- Put the citation in the table row, in `{components.table-cell-reference}`.
- End architecture diagrams with concrete numbers in `{components.schematic-output-chip}`. Real values make a diagram an argument.
- Align to x = 48 / 512 or a declared grid position. Nothing placed by eye.
- Use `n / N` page numbers.

### Don't
- Don't introduce a second font family. No Calibri, no Arial, no monospace for parameter names. This is the one rule that, broken, changes what the deck *is*.
- Don't add shadows, gradients, glows, or bevels to anything.
- Don't invent a fourth navy. `{colors.primary}` for chrome, `{colors.primary-deep}` for diagram ink, `{colors.primary-tint}` for diagram fill — that is the whole ramp. See *Retired Values*.
- Don't use `#FF0000` or `#002060`. Ad-hoc overlay labels typed straight onto a figure are how the drift got in; route them through `{colors.alert}` and `{colors.primary}`.
- Don't leave a text box without an explicit font. An unstyled box inherits the theme and will silently drift on another machine.
- Don't add vertical rules, cell fills, or zebra striping to tables. The three-weight horizontal ladder is the entire table system.
- Don't nest bullets past one level. A second level means the slide should be a diagram or a table.
- Don't scale a figure below legibility to make it fit. Bleed it to the slide edge, or give it its own slide.
- Don't spend `{colors.alert}` more than about once per deck.
- Don't exceed three categorical accents in one diagram.
- Don't let a `{components.header-title}` wrap to two lines. Shorten the title.

## Slide Archetypes

Six recurring layouts. A new slide should be one of these before it is anything new.

| Archetype | Structure |
|---|---|
| **Cover** | Chrome + `{components.cover-title}` + `{components.cover-subtitle}` + three-up stat row. States the result immediately. |
| **Figure pair** | Two figures side by side on the content floor, overlay labels in `{typography.heading}`. The comparison workhorse. |
| **Figure grid** | Three or four figures, some bled to the slide edge, with `{colors.primary}` / `{colors.alert}` overlay labels marking reference vs. anomalous cases. |
| **Setup / schematic** | Left: a physical-layout diagram with `{components.diagram-chip-teal}`-family series markers. Right: a `{components.schematic-box}` architecture stack terminating in `{components.schematic-output-chip}` values. A `{components.caption-block}` carries the framing, closed by an `{components.objective-line}`. |
| **Pipeline vs. variants** | Left column: numbered `{components.pipeline-step}` stack ending in `{components.pipeline-step-terminal}`. `{components.column-divider}` on the center axis. Right column: `{components.section-heading}` + three `{components.variant-card}`s. |
| **Results table** | Booktabs table, four columns, one row per method, citation in the final column. |

Notably absent: an agenda slide, a section-divider slide, and a summary slide. For a 5–17 slide group-meeting deck the `n / N` page number does the pacing work an agenda would, and the cover stat row does the work a summary would.

## PowerPoint Implementation

### Unit Conversion
Token values are px because the `DESIGN.md` schema accepts only `px`, `em`, and `rem`. At **96 DPI the mapping to PowerPoint units is exact**:

`1 px = 1/96 in = 0.75 pt = 9525 EMU`

| px | in | pt | EMU |
|---|---|---|---|
| 960 | 10 | 720 | 9144000 |
| 540 | 5.625 | 405 | 5143500 |
| 56 | 0.5833 | 42 | 533400 |
| 48 | 0.5 | 36 | 457200 |
| 44 | 0.4583 | 33 | 419100 |
| 40 | 0.4167 | 30 | 381000 |
| 28 | 0.2917 | 21 | 266700 |
| 20 | 0.2083 | 15 | 190500 |
| 16 | 0.1667 | 12 | 152400 |
| 14 | 0.1458 | 10.5 | 133350 |
| 12 | 0.125 | 9 | 114300 |
| 10 | 0.1042 | 7.5 | 95250 |

Font sizes in the OOXML `sz` attribute are hundredths of a point: `{typography.slide-title}` at 28 px → `sz="2100"`.

### Rounding Applied
Two source measurements were nudged to land on the grid. Both are sub-pixel at projection scale:

| Element | Source | Normalized |
|---|---|---|
| Header band height | 0.57 in (54.7 px) | **56 px** / 0.5833 in / 42 pt |
| Stat number size | 32 pt (42.7 px) | **44 px** / 33 pt |

Everything else in this document converts exactly from the source decks.

### Theme Setup
Set the presentation theme's major and minor fonts to Times New Roman so that any box created without explicit run properties still inherits correctly. Set `accent1` to `{colors.primary}` and `accent2` to `{colors.alert}`. The source decks left `accent1` at `#1F4E79`, which is the origin of one of the retired navies.

### Shape Naming Convention
The source decks use structural shape names, and keeping them is what makes a deck scriptable — a generator or a later edit pass can locate chrome by name instead of by position:

| Pattern | Element |
|---|---|
| `HeaderBand`, `HeaderTitle`, `BottomRule`, `Footer`, `PageNum` | Chrome, identical on every slide |
| `MainTitle`, `TitleSubtitle`, `Stat<n>Num`, `Stat<n>Lbl` | Cover |
| `PipeBox<n>`, `PipeArrow<n>`, `VariantCard<n>`, `Divider<n>`, `BridgeArrow<n>` | Pipeline archetype |
| `SchemBox<n>`, `Arrow<n>` | Architecture schematic |
| `R_<method>_<field>`, `Rule_<row>`, `HeaderRule`, `BelowHeader` | Results table |

Numbering is by band — 1xx cover, 3xx schematic, 4xx pipeline, 5xx variants — so a shape's name locates it in the deck's structure, not just on its slide.

## Known Gaps

- **Figure-internal styling is deliberately out of scope.** Axis fonts, tick sizes, series colors, and export DPI for the embedded matplotlib PNGs are owned by the `academic-draw` skill. If those figures do not use Times New Roman and a palette compatible with `{colors.accent-teal}` / `{colors.accent-brick}` / `{colors.accent-graphite}`, the deck will read as two design systems stacked. Worth reconciling separately.
- **The reference screenshots for this extraction were unavailable**, so every value here was read from the OOXML of `trk_energy_regression_20260518.pptx` (17 slides), `20260614.pptx` (5 slides), and `20260701.pptx` (7 slides). No rendered slide was visually inspected — LibreOffice is not installed on this machine, so `thumbnail.py` could not run. Values are structurally exact but visually unverified.
- **No dark-background variant exists.** The system is white-canvas only. A dark theme would need the whole navy ramp re-derived for contrast.
- **Bullet indentation is only partially specified.** The source uses `marL = 171450 EMU` (18 px) with a matching hanging indent at level 1; deeper levels were never used, so their spec is undefined — which is consistent with the one-level rule under *Don'ts*.
- **Animation, transitions, and build order are not covered.** The source decks use none.
- **Speaker-notes formatting is not specified**, though all seven slides of the most recent deck carry notes.
- **`{spacing.md}` (24px) and `{spacing.lg}` (32px)** are declared for grid arithmetic (the cover stat gutter and general block separation) but are not referenced by any component's padding, since PowerPoint text insets are set per shape rather than by token.
