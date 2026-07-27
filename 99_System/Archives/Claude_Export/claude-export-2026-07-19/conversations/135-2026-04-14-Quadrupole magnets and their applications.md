# Quadrupole magnets and their applications

## Export metadata (verbatim)

```json
{
  "uuid": "532ab44f-36f2-4abb-a610-f9037906240b",
  "name": "Quadrupole magnets and their applications",
  "summary": "**Conversation overview**\n\nThe person engaged in a technical discussion about accelerator and beam optics physics, asking a series of progressively deeper questions about quadrupole magnets, FODO lattices, and beam stability. The conversation covered the fundamental field geometry of quadrupole magnets (the linear field law B_x = G·y, B_y = G·x), the physical reason why focusing in one transverse plane necessarily produces defocusing in the perpendicular plane, and how alternating-gradient (strong) focusing in a FODO cell achieves bounded beam envelopes in both planes despite this constraint.\n\nClaude provided interactive visualizations with three tabs — a field map showing hyperbolic equipotential lines and B-field vectors, a beam trajectory simulator with adjustable gradient and divergence, and a FODO lattice envelope display. The person observed an unstable beam configuration in the visualization (exponentially diverging y-envelope at high gradient and long quad length) and asked why this occurs, which led to discussion of the phase advance stability condition |½ Tr(M)| ≤ 1 and the 0°–180° phase advance window. The person then asked a conceptually sharp follow-up about whether a FODO lattice ever achieves a true simultaneous focus in both planes, prompting Claude to clarify the distinction between bounded transport (FODO) and true point focus (triplet/doublet), explicitly connecting this to the role of quadrupole triplets at intermediate focal planes in fragment separators like RIBLL for momentum selection via Bρ slits.\n\nThe person also identified an imprecision in Claude's initial claim that the focusing-defocusing asymmetry follows from ∇·B = 0 alone; Claude corrected this, showing that ∇×B = 0 in a current-free region directly enforces k_x + k_y = 0 through the paraxial equations of motion, while ∇·B = 0 contributes to establishing the Laplace structure of the transverse field. The discussion used standard accelerator physics terminology throughout: Bρ magnetic rigidity, transfer matrices, betatron oscillations, phase advance per cell, FODO cells, triplets, and the necktie stability diagram.",
  "created_at": "2026-04-14T13:17:38.601281Z",
  "updated_at": "2026-04-15T14:28:51.089383Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-14T13:17:39.473291Z

What is quadrople magnet? Why we need this?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8c23-ea9c-7626-9b1b-3ca50f83335a",
  "updated_at": "2026-04-14T13:17:39.473291Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-14T13:19:57.970376Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about a "quadrupole magnet" (they wrote "quadrople" which is a typo). Given Reid's background in experimental nuclear physics at HIRFL-RIBLL, this is a directly relevant technical topic. I should read the concept-visualizer skill and provide a good interactive visualization.

Let me provide a direct, technical response with a nice interactive visualization since Reid is a grad student in nuclear/particle physics and this is directly relevant to his work with beam optics at RIBLL.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-14T13:17:44.743125Z",
  "stop_timestamp": "2026-04-14T13:17:44.823672Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01YLRypTtpQqHGSCK87ts2Uf",
  "name": "visualize:read_me",
  "input": {
    "modules": [
      "diagram",
      "interactive"
    ]
  },
  "message": "read_me",
  "integration_name": "visualize",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": false,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01YLRypTtpQqHGSCK87ts2Uf",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "# Imagine — Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` — SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` — UI mockups, forms, cards, dashboards\n- `interactive` — interactive explainers with controls\n- `chart` — charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` — illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget — hard limits:**\n- Box subtitles: ≤5 words. Detail goes in click-through (`sendPrompt`) or the prose below — not the box.\n- Colors: ≤2 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: ≤4 boxes at full width (~140px each). 5+ boxes → shrink to ≤110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing \"click to learn more\" in prose, the diagram itself must ACTUALLY be sparse. Don't promise brevity then front-load everything.\n\n**Accessibility:** For HTML widgets, begin with a visually-hidden `<h2 class=\"sr-only\">` containing a one-sentence summary of the visualization for screen-reader users. (SVG widgets use `role=\"img\"` with `<title>` and `<desc>` instead — see SVG setup.)\n\nYou create rich visual content — SVG diagrams/illustrations and HTML interactive widgets — that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn't notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** — All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks \"explain X\", write the explanation in your response and use the tool only for the visual that accompanies it. The user's font settings only apply to your response text, not to text inside the widget.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) → content HTML → `<script>` last.\n- **SVG**: `<defs>` (markers) → visual elements immediately.\n- Prefer inline `style=\"...\"` over `<style>` blocks — inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules — that's fine, but don't bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji — use CSS shapes or SVG paths\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only — host provides the bg)\n- **Typography**: The default font is Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-serif)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px — all `font-weight: 500`. Heading color is pre-set to `var(--color-text-primary)` — don't override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 — they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally — no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` — the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style=\"min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;\">` and put the modal inside — it's a faux viewport that actually contributes layout height.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` — just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text — never plain black or generic gray.\n- **Corners**: use `border-radius: var(--border-radius-md)` (or `-lg` for cards) in HTML. In SVG, `rx=\"4\"` is the default — larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** — if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** — see Philosophy above.\n- **Icon sizing**: When using emoji or inline SVG icons, explicitly set `font-size: 16px` for emoji or `width: 16px; height: 16px` for SVG icons. Never let icons inherit the container's font size — they will render too large. For larger decorative icons, use 24px max.\n- No tabs, carousels, or `display: none` sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)\n- No nested scrolling — auto-fit height.\n- Scripts execute after streaming — load libraries via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` (UMD globals), then use the global in a plain `<script>` that follows.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`. All other origins are blocked by the sandbox — the request silently fails.\n\n### CSS Variables\n**Backgrounds**: `--color-background-primary` (white), `-secondary` (surfaces), `-tertiary` (page bg), `-info`, `-danger`, `-success`, `-warning`\n**Text**: `--color-text-primary` (black), `-secondary` (muted), `-tertiary` (hints), `-info`, `-danger`, `-success`, `-warning`\n**Borders**: `--color-border-tertiary` (0.15α, default), `-secondary` (0.3α, hover), `-primary` (0.4α), semantic `-info/-danger/-success/-warning`\n**Typography**: `--font-sans`, `--font-serif`, `--font-mono`\n**Layout**: `--border-radius-md` (8px), `--border-radius-lg` (12px — preferred for most components), `--border-radius-xl` (16px)\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** — every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes — they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) — never omit fill or use `fill=\"inherit\"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--color-text-primary, --color-text-secondary) for text. Never hardcode colors like color: #333 — invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user's next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href=\"https://...\">` just works — clicks are intercepted and open the host's link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n\n\n## Color palette\n\n9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.\n\n| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |\n|-------|------|------|-----|-----|-----|-----|-----|------|\n| `c-purple` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |\n| `c-teal` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |\n| `c-coral` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |\n| `c-pink` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |\n| `c-gray` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |\n| `c-blue` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |\n| `c-green` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |\n| `c-amber` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |\n| `c-red` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |\n\n**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:\n- Group nodes by **category** — all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.\n- For illustrative diagrams, map colors to **physical properties** — warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.\n- Use **gray for neutral/structural** nodes (start, end, generic steps).\n- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.\n- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept — those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)\n\n**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --color-text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** — title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.\n\n**Light/dark mode quick pick** — use only stops from the table, never off-table hex values:\n- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**\n- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**\n- Apply `c-{ramp}` to a `<g>` wrapping shape+text, or directly to a `<rect>`/`<circle>`/`<ellipse>`. Never to `<path>` — paths don't get ramp fill. For colored connector strokes use inline `stroke=\"#...\"` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.\n\nFor status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.\n\n\n## SVG setup\n\n**ViewBox safety checklist** — before finalizing any SVG, verify:\n1. Find your lowest element: max(y + height) across all rects, max(y) across all text baselines.\n2. Set viewBox height = that value + 40px buffer.\n3. Find your rightmost element: max(x + width) across all rects. All content must stay within x=0 to x=680.\n4. For text with text-anchor=\"end\", the text extends LEFT from x. If x=118 and text is 200px wide, it starts at x=-82 — outside the viewBox. Increase x or use text-anchor=\"start\".\n5. Never use negative x or y coordinates. The viewBox starts at 0,0.\n6. Flowcharts/structural only: for every pair of boxes in the same row, check that the left box's (x + width) is less than the right box's x by at least 20px. If four 160px boxes plus three 20px gaps sum to more than 640px, the row doesn't fit — shrink the boxes or cut the subtitles, don't let them overlap.\n\n**SVG setup**: `<svg width=\"100%\" viewBox=\"0 0 680 H\" role=\"img\"><title>…</title><desc>…</desc>…` — 680px wide, flexible height. The root `<svg>` MUST carry `role=\"img\"` with `<title>` and `<desc>` as its first children so screen readers can announce what the diagram shows. Set H to fit content tightly — the last element's bottom edge + 40px padding. Don't leave excess empty space below the content. Safe area: x=40 to x=640, y=40 to y=(H-40). Background transparent. **Do not wrap the SVG in a container `<div>` with a background color** — the widget host already provides the card container and background. Output the raw `<svg>` element directly.\n\n**The 680 in viewBox is load-bearing — do not change it.** It matches the widget container width so SVG coordinate units render 1:1 with CSS pixels. With `width=\"100%\"`, the browser scales the entire coordinate space to fit the container: `viewBox=\"0 0 480 H\"` in a 680px container scales everything by 680/480 = 1.42×, so your `class=\"th\"` 14px text renders at ~20px. The font calibration table below and all \"text fits in box\" math assume 1:1. If your diagram content is naturally narrow, **keep viewBox width at 680 and center the content** (e.g. content spans x=180..500) — do not shrink the viewBox to hug the content. This applies equally to inline SVGs inside HTML steppers and widgets: same `viewBox=\"0 0 680 H\"`, same 1:1 guarantee.\n\n**viewBox height:** After layout, find max_y (bottom-most point of any shape, including text baselines + 4px descent). Set viewBox height = max_y + 20. Don't guess.\n\n**text-anchor='end' at x<60 is risky** — the longest label will extend left past x=0. Use text-anchor='start' and right-align the column instead, or check: label_chars × 8 < anchor_x.\n\n**One SVG per tool call** — each call must contain exactly one <svg> element. Never leave an abandoned or partial SVG in the output. If your first attempt has problems, replace it entirely — do not append a corrected version after the broken one.\n\n**Style rules for all diagrams**:\n- Every `<text>` element must carry one of the pre-built classes (`t`, `ts`, `th`). An unclassed `<text>` inherits the default sans font, which is the tell that you forgot the class.\n- Use only two font sizes: 14px for node/region labels (class=\"t\" or \"th\"), 12px for subtitles, descriptions, and arrow labels (class=\"ts\"). No other sizes.\n- No decorative step numbers, large numbering, or oversized headings outside boxes.\n- No icons or illustrations inside boxes — text only. (Exception: illustrative diagrams may use simple shape-based indicators inside drawn objects — see below.)\n- Sentence case on all labels.\n\n**Font size calibration for diagram text labels** - Here's csv table to give you better sense of the Anthropic Sans font rendering width:\n```csv\ntext, chars length, font-weight, font-size, rendered width\nAuthentication Service, chars: 22, font-weight: 500, font-size: 14px, width: 167px\nBackground Job Processor, chars: 24, font-weight: 500, font-size: 14px, width: 201px\nDetects and validates incoming tokens, chars: 37, font-weight: 400, font-size: 14px, width: 279px\nforwards request to, chars: 19, font-weight: 400, font-size: 12px, width: 123px\nデータベースサーバー接続, chars: 12, font-weight: 400, font-size: 14px, width: 181px\n```\n\nBefore placing text in a box, check: does (text width + 2×padding) fit the container?\n\n**SVG `<text>` never auto-wraps.** Every line break needs an explicit `<tspan x=\"...\" dy=\"1.2em\">`. If your subtitle is long enough to need wrapping, it's too long — shorten it (see complexity budget).\n\n**Example check**: You want to put \"Glucose (C₆H₁₂O₆)\" in a rounded rect. The text is 20 characters at 14px ≈ 180px wide. Add 2×24px padding = 228px minimum box width. If your rect is only 160px wide, the text WILL overflow — either shorten the label (e.g. just \"Glucose\") or widen the box. Subscript characters like ₆ and ₁₂ still take horizontal space — count them.\n\n**Pre-built classes** (already loaded in SVG widget):\n- `class=\"t\"` = sans 14px primary, `class=\"ts\"` = sans 12px secondary, `class=\"th\"` = sans 14px medium (500)\n- `class=\"box\"` = neutral rect (bg-secondary fill, border stroke)\n- `class=\"node\"` = clickable group with hover effect (cursor pointer, slight dim on hover)\n- `class=\"arr\"` = arrow line (1.5px, open chevron head)\n- `class=\"leader\"` = dashed leader line (tertiary stroke, 0.5px, dashed)\n- `class=\"c-{ramp}\"` = colored node (c-blue, c-teal, c-amber, c-green, c-red, c-purple, c-coral, c-pink, c-gray). Apply to `<g>` or shape element (rect/circle/ellipse), NOT to paths. Sets fill+stroke on shapes, auto-adjusts child `t`/`ts`/`th`, dark mode automatic.\n\n**c-{ramp} nesting:** These classes use direct-child selectors (`>`). Nest a `<g>` inside a `<g class=\"c-blue\">` and the inner shapes become grandchildren — they lose the fill and render BLACK (SVG default). Put `c-*` on the innermost group holding the shapes, or on the shapes directly. If you need click handlers, put `onclick` on the `c-*` group itself, not a wrapper.\n\n- Short aliases: `var(--p)`, `var(--s)`, `var(--t)`, `var(--bg2)`, `var(--b)`\n- Arrow marker: always include this `<defs>` at the start of every SVG:\n  `<defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker></defs>`\n  Then use `marker-end=\"url(#arrow)\"` on lines. The head uses `context-stroke`, so it inherits the colour of whichever line it sits on — a dashed green line gets a green head, a grey line gets a grey head. Never a colour mismatch. Do not add filters or extra markers to `<defs>`. `<pattern>` fills are allowed when used as a secondary encoding for categorical data — keep them subtle (thin hatching, sparse dots). Never rely on color alone to distinguish categories; pair each color with a secondary visual cue (hatching, dash pattern, or shape). Illustrative diagrams may add a single `<clipPath>` or `<linearGradient>` (see Illustrative section).\n\n**Minimize standalone labels.** Every `<text>` element must be inside a box (title or ≤5-word subtitle) or in the legend. Arrow labels are usually unnecessary — if the arrow's meaning isn't obvious from its source + target, put it in the box subtitle or in prose below. Labels floating in space collide with things and are ambiguous.\n\n**Stroke width:** Use 0.5px strokes for diagram borders and edges — not 1px or 2px. Thin strokes feel more refined.\n\n**Connector paths need `fill=\"none\"`.** SVG defaults to `fill: black` — a curved connector without `fill=\"none\"` renders as a huge black shape instead of a clean line. Every `<path>` or `<polyline>` used as a connector/arrow MUST have `fill=\"none\"`. Only set fill on shapes meant to be filled (rects, circles, polygons).\n\n**Rect rounding:** `rx=\"4\"` for subtle corners. `rx=\"8\"` max for emphasized rounding. `rx` ≥ half the height = pill shape — deliberate only.\n\n**Schematic containers use dashed rects with a label.** Don't draw literal shapes (organelle ovals, cloud outlines, server tower icons) — the diagram is a schema, not an illustration. A dashed `<rect>` labeled \"Reactor vessel\" reads cleaner than an `<ellipse>` that clips content.\n\n**Lines stop at component edges.** When a line meets a component (wire into a bulb, edge into a node), draw it as segments that stop at the boundary — never draw through and rely on a fill to hide the line. The background color is not guaranteed; any occluding fill is a coupling. Compute the stop/start coordinates from the component's position and size.\n\n**Physical-color scenes (sky, water, grass, skin, materials):** Use ALL hardcoded hex — never mix with `c-*` theme classes. The scene should not invert in dark mode. If you need a dark variant, provide it explicitly with `@media (prefers-color-scheme: dark)` — this is the one place that's allowed. Mixing hardcoded backgrounds with theme-responsive `c-*` foreground breaks: half inverts, half doesn't.\n\n**No rotated text**. `<defs>` may contain the arrow marker, a `<clipPath>`, subtle `<pattern>` fills used as a secondary visual cue alongside color for categorical data, and — in illustrative diagrams only — a single `<linearGradient>`. Nothing else: no filters, no extra markers.\n\n\n## Diagram types\n*\"Explain how compound interest works\" / \"How does a process scheduler work\"*\n\n**Two rules that cause most diagram failures — check these before writing each arrow and each box:**\n1. **Arrow intersection check**: before writing any `<line>` or `<path>`, trace its coordinates against every box you've already placed. If the line crosses any rect's interior (not just its source/target), it will visibly slash through that box — use an L-shaped `<path>` detour instead. This applies to arrows crossing labels too.\n2. **Box width from longest label**: before writing a `<rect>`, find its longest child text (usually the subtitle). `rect_width = max(title_chars × 8, subtitle_chars × 7) + 24`. A 100px-wide box holds at most a 10-char subtitle. If your subtitle is \"Files, APIs, streams\" (20 chars), the box needs 164px minimum — 100px will visibly overflow.\n\n**Tier packing:** Compute total width BEFORE placing. Example — 4 pub/sub consumer boxes:\n- WRONG: x=40,160,260,360 w=160 → 40-60px overlaps (4×160=640 > 480 available)\n- RIGHT: x=50,200,350,500 w=130 gap=20 → fits (4×130 + 3×20 = 580 ≤ 590 safe width; right edge at 630 ≤ 640)\nWork bottom-up for trees: size leaf tier first, parent width ≥ sum of children.\n\n**Diagrams are the hardest use case** — they have the highest failure rate due to precise coordinate math. Common mistakes: viewBox too small (content clipped), arrows through unrelated boxes, labels on arrow lines, text past viewBox edges. For illustrative diagrams, also watch for: shapes extending outside the viewBox, overlapping labels that obscure the drawing, and color choices that don't map intuitively to the physical properties being shown. Double-check coordinates before finalizing.\n\nUse SVG for diagrams. The widget automatically wraps SVG output in a card.\n\n**Pick the right diagram type.** The decision is about *intent*, not subject matter. Ask: is the user trying to *document* this, or *understand* it?\n\n**Reference diagrams** — the user wants a map they can point at. Precision matters more than feeling. Boxes, labels, arrows, containment. These are the diagrams you'd find in documentation.\n- **Flowchart** — steps in sequence, decisions branching, data transforming. Good for: approval workflows, request lifecycles, build pipelines, \"what happens when I click submit\". Trigger phrases: *\"walk me through the process\"*, *\"what are the steps\"*, *\"what's the flow\"*.\n- **Structural diagram** — things inside other things. Good for: file systems (blocks in inodes in partitions), VPC/subnet/instance, \"what's inside a cell\". Trigger phrases: *\"what's the architecture\"*, *\"how is this organised\"*, *\"where does X live\"*.\n\n**Intuition diagrams** — the user wants to *feel* how something works. The goal isn't a correct map, it's the right mental model. These should look nothing like a flowchart. The subject doesn't need a physical form — it needs a *visual metaphor*.\n- **Illustrative diagram** — draw the mechanism. Physical things get cross-sections (water heaters, engines, lungs). Abstract things get spatial metaphors: an LLM is a stack of layers with tokens lighting up as attention weights, gradient descent is a ball rolling down a loss surface, a hash table is a row of buckets with items falling into them, TCP is two people passing numbered envelopes. Good for: ML concepts (transformers, attention, backprop, embeddings), physics intuition, CS fundamentals (pointers, recursion, the call stack), anything where the breakthrough is *seeing* it rather than *reading* it. Trigger phrases: *\"how does X actually work\"*, *\"explain X\"*, *\"I don't get X\"*, *\"give me an intuition for X\"*.\n\n**Route on the verb, not the noun.** Same subject, different diagram depending on what was asked:\n\n| User says | Type | What to draw |\n|---|---|---|\n| \"how do LLMs work\" | **Illustrative** | Token row, stacked layer slabs, attention threads glowing warm between tokens. Go interactive if you can. |\n| \"transformer architecture\" | Structural | Labelled boxes: embedding, attention heads, FFN, layer norm. |\n| \"how does attention work\" | **Illustrative** | One query token, a fan of lines to every key, line opacity = weight. |\n| \"how does gradient descent work\" | **Illustrative** | Contour surface, a ball, a trail of steps. Slider for learning rate. |\n| \"what are the training steps\" | Flowchart | Forward → loss → backward → update. Boxes and arrows. |\n| \"how does TCP work\" | **Illustrative** | Two endpoints, numbered packets in flight, an ACK returning. |\n| \"TCP handshake sequence\" | Flowchart | SYN → SYN-ACK → ACK. Three boxes. |\n| \"explain the Krebs cycle\" / \"how does the event loop work\" | **HTML stepper** | Click through stages. Never a ring. |\n| \"how does a hash map work\" | **Illustrative** | Key falling through a funnel into one of N buckets. |\n| \"draw the database schema\" / \"show me the ERD\" | **mermaid.js** | `erDiagram` syntax. Not SVG. |\n\nThe illustrative route is the default for *\"how does X work\"* with no further qualification. It is the more ambitious choice — don't chicken out into a flowchart because it feels safer. Claude draws these well.\n\nDon't mix families in one diagram. If you need both, draw the intuition version first (build the mental model), then the reference version (fill in the precise labels) as a second tool call with prose between.\n\n**For complex topics, use multiple SVG calls** — break the explanation into a series of smaller diagrams rather than one dense diagram. Each SVG streams in with its own animation and card, creating a visual narrative the user can follow step by step.\n\n**Always add prose between diagrams** — never stack multiple SVG calls back-to-back without text. Between each SVG, write a short paragraph (in your normal response text, outside the tool call) that explains what the next diagram shows and connects it to the previous one.\n\n**Promise only what you deliver** — if your response text says \"here are three diagrams\", you must include all three tool calls. Never promise a follow-up diagram and omit it. If you can only fit one diagram, adjust your text to match. One complete diagram is better than three promised and one delivered.\n\n#### Flowchart\n\nFor sequential processes, cause-and-effect, decision trees.\n\n**Planning**: Size boxes to fit their text generously. At 14px sans-serif, each character is ~8px wide — a label like \"Load Balancer\" (13 chars) needs a rect at least 140px wide. When in doubt, make boxes wider and leave more space between them. Cramped diagrams are the most common failure mode.\n\n**Special characters are wider**: Chemical formulas (C₆H₁₂O₆), math notation (∑, ∫, √), subscripts/superscripts via <tspan> with dy/baseline-shift, and Unicode symbols all render wider than plain Latin characters. For labels containing formulas or special notation, add 30-50% extra width to your estimate. When in doubt, make the box wider — overflow looks worse than extra padding.\n\n**Spacing**: 60px minimum between boxes, 24px padding inside boxes, 12px between text and edges. Leave 10px gap between arrowheads and box edges. Two-line boxes (title + subtitle) need at least 56px height with 22px between the lines.\n\n**Vertical text placement**: Every `<text>` inside a box needs `dominant-baseline=\"central\"`, with y set to the *centre* of the slot it sits in. Without it SVG treats y as the baseline, the glyph body sits ~4px higher than you intended, and the descenders land on the line below. Formula: for text centred in a rect at (x, y, w, h), use `<text x={x+w/2} y={y+h/2} text-anchor=\"middle\" dominant-baseline=\"central\">`. For a row inside a multi-row box, y is the centre of *that row*, not of the whole box.\n\n**Layout**: Prefer single-direction flows (all top-down or all left-right). Keep diagrams simple — max 4-5 nodes per diagram. The widget is narrow (~680px) so complex layouts break.\n\n**When the prompt itself is over budget**: if the user lists 6+ components (\"draw me auth, products, orders, payments, gateway, queue\"), don't draw all of them in one pass — you'll get overlapping boxes and arrows through text, every time. Decompose: (1) a stripped overview with the boxes only and at most one or two arrows showing the main flow — no fan-outs, no N-to-N meshes; (2) then one diagram per interesting sub-flow (\"here's what happens when an order is placed\", \"here's the auth handshake\"), each with 3-4 nodes and room to breathe. Count the nouns before you draw. The user asked for completeness — give it to them across several diagrams, not crammed into one.\n\n**Cycles don't get drawn as rings.** If the last stage feeds back into the first (Krebs cycle, event loop, GC mark-and-sweep, TCP retransmit), your instinct is to place the stages around a circle. Don't. Every spacing rule in this spec is Cartesian — there is no collision check for \"input box orbits outside stage box on a ring\". You will get satellite boxes overlapping the stages they feed, labels sitting on the dashed circle, and tangential arrows that point nowhere. The ring is decoration; the loop is conveyed by the return arrow.\n\nBuild a stepper in HTML. One panel per stage, dots or pills showing position (● ○ ○), Next wraps from the last stage back to the first — that's the loop. Each panel owns its inputs and products: an event loop's pending callbacks live *inside* the Poll panel, not floating next to a box on a ring. Nothing collides because nothing shares the canvas. Only fall back to a linear SVG (stages in a row, curved `<path>` return arrow) when there's one input and one output total and no per-stage detail to show.\n\n**Feedback loops in linear flows:** Don't draw a physical arrow traversing the layout (it fights the flow direction and clips edges). Instead:\n- Small `↻` glyph + text near the cycle point: `<text>↻ returns to start</text>`\n- Or restructure the whole diagram as a circle if the cycle IS the point\n\n**Arrows:** A line from A to B must not cross any other box or label. If the direct path crosses something, route around with an L-bend: `<path d=\"M x1 y1 L x1 ymid L x2 ymid L x2 y2\"/>`. Place arrow labels in clear space, not on the midpoint.\n\nKeep all nodes the same height when they have the same content type (e.g. all single-line boxes = 44px, all two-line boxes = 56px).\n\n**Flowchart components** — use these patterns consistently:\n\n*Single-line node* (44px tall): title only. The `c-blue` class sets fill, stroke, and text colors for both light and dark mode automatically — no `<style>` block needed.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about T-cells')\">\n  <rect x=\"100\" y=\"20\" width=\"180\" height=\"44\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"190\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"central\">T-cells</text>\n</g>\n```\n\n*Two-line node* (56px tall): bold title + muted subtitle.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about dendritic cells')\">\n  <rect x=\"100\" y=\"20\" width=\"200\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"200\" y=\"38\" text-anchor=\"middle\" dominant-baseline=\"central\">Dendritic cells</text>\n  <text class=\"ts\" x=\"200\" y=\"56\" text-anchor=\"middle\" dominant-baseline=\"central\">Detect foreign antigens</text>\n</g>\n```\n\n*Connector* (no label — meaning is clear from source + target):\n```svg\n<line x1=\"200\" y1=\"76\" x2=\"200\" y2=\"120\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n*Neutral node* (gray, for start/end/generic steps): use `class=\"box\"` for auto-themed fill/stroke, and default text classes.\n\nMake all nodes clickable by default — wrap in `<g class=\"node\" onclick=\"sendPrompt('...')\">`. The hover effect is built in.\n\n#### Structural diagram\n\nFor concepts where physical or logical containment matters — things inside other things.\n\n**When to use**: The explanation depends on *where* processes happen. Examples: how a cell works (organelles inside a cell), how a file system works (blocks inside inodes inside partitions), how a building's HVAC works (ducts inside floors inside a building), how a CPU cache hierarchy works (L1 inside core, L2 shared).\n\n**Core idea**: Large rounded rects are containers. Smaller rects inside them are regions or sub-structures. Text labels describe what happens in each region. Arrows show flow between regions or from external inputs/outputs.\n\n**Container rules**:\n- Outermost container: large rounded rect, rx=20-24, lightest fill (50 stop), 0.5px stroke (600 stop). Label at top-left inside, 14px bold.\n- Inner regions: medium rounded rects, rx=8-12, next shade fill (100-200 stop). Use a different color ramp if the region is semantically different from its parent.\n- 20px minimum padding inside every container — text and inner regions must not touch the container edges.\n- Max 2-3 nesting levels. Deeper nesting gets unreadable at 680px width.\n\n**Layout**:\n- Place inner regions side by side within the container, with 16px+ gap between them.\n- External inputs (sunlight, water, data, requests) sit outside the container with arrows pointing in.\n- External outputs sit outside with arrows pointing out.\n- Keep external labels short — one word or a short phrase. Details go in the prose between diagrams.\n\n**What goes inside regions**: Text only — the region name (14px bold) and a short description of what happens there (12px). Don't put flowchart-style boxes inside regions. Don't draw illustrations or icons inside.\n\n**Structural container example** (library branch with two side-by-side regions, an internal labeled arrow, and an external input). ViewBox 700x320, horizontal layout, color classes handle both light and dark mode — no `<style>` block:\n```svg\n<defs>\n  <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n<!-- Outer container -->\n<g class=\"c-green\">\n  <rect x=\"120\" y=\"30\" width=\"560\" height=\"260\" rx=\"20\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"400\" y=\"62\" text-anchor=\"middle\">Library branch</text>\n  <text class=\"ts\" x=\"400\" y=\"80\" text-anchor=\"middle\">Main floor</text>\n</g>\n<!-- Inner: Circulation desk -->\n<g class=\"c-teal\">\n  <rect x=\"150\" y=\"100\" width=\"220\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"260\" y=\"130\" text-anchor=\"middle\">Circulation desk</text>\n  <text class=\"ts\" x=\"260\" y=\"148\" text-anchor=\"middle\">Checkouts, returns</text>\n</g>\n<!-- Inner: Reading room -->\n<g class=\"c-amber\">\n  <rect x=\"450\" y=\"100\" width=\"210\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"555\" y=\"130\" text-anchor=\"middle\">Reading room</text>\n  <text class=\"ts\" x=\"555\" y=\"148\" text-anchor=\"middle\">Seating, reference</text>\n</g>\n<!-- Arrow between inner boxes with label -->\n<text class=\"ts\" x=\"410\" y=\"175\" text-anchor=\"middle\">Books</text>\n<line x1=\"370\" y1=\"185\" x2=\"448\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n<!-- External input: New acq. — text vertically aligned with arrow -->\n<text class=\"ts\" x=\"40\" y=\"185\" text-anchor=\"middle\">New acq.</text>\n<line x1=\"75\" y1=\"185\" x2=\"118\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n**Color in structural diagrams**: Nested regions need distinct ramps — `c-{ramp}` classes resolve to fixed fill/stroke stops, so the same class on parent and child gives identical fills and flattens the hierarchy. Pick a *related* ramp for inner structures (e.g. Green for the library envelope, Teal for the circulation desk inside it) and a *contrasting* ramp for a region that does something functionally different (e.g. Amber for the reading room). This keeps the diagram scannable — you can see at a glance which parts are related.\n\n**Database schemas / ERDs — use mermaid.js, not SVG.** A schema table is a header plus N field rows plus typed columns plus crow's-foot connectors. That is a text-layout problem and hand-placing it in SVG fails the same way every time. mermaid.js `erDiagram` does layout, cardinality, and connector routing for free. ERDs only; everything else stays in SVG.\n\n```\nerDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has\n  USERS {\n    uuid id PK\n    string email\n    timestamp created_at\n  }\n  POSTS {\n    uuid id PK\n    uuid user_id FK\n    string title\n  }\n```\n\nUse HTML for ERDs. Import and initialize in a `<script type=\"module\">`. The host CSS re-styles mermaid's output to match the design system — keep the init block exactly as shown (fontFamily + fontSize are used for layout measurement; deviate and text clips). After rendering, replace sharp-cornered entity `<path>` elements with rounded `<rect rx=\"8\">` to match the design system, and strip borders from attribute rows (only the outer container and header row keep visible borders — alternating fill colors separate the rows):\n```html\n<style>\n#erd svg.erDiagram .divider path { stroke-opacity: 0.5; }\n#erd svg.erDiagram .row-rect-odd path,\n#erd svg.erDiagram .row-rect-odd rect,\n#erd svg.erDiagram .row-rect-even path,\n#erd svg.erDiagram .row-rect-even rect { stroke: none !important; }\n</style>\n<div id=\"erd\"></div>\n<script type=\"module\">\nimport mermaid from 'https://esm.sh/mermaid@11/dist/mermaid.esm.min.mjs';\nconst dark = matchMedia('(prefers-color-scheme: dark)').matches;\nawait document.fonts.ready;\nmermaid.initialize({\n  startOnLoad: false,\n  theme: 'base',\n  fontFamily: '\"Anthropic Sans\", sans-serif',\n  themeVariables: {\n    darkMode: dark,\n    fontSize: '13px',\n    fontFamily: '\"Anthropic Sans\", sans-serif',\n    lineColor: dark ? '#9c9a92' : '#73726c',\n    textColor: dark ? '#c2c0b6' : '#3d3d3a',\n  },\n});\nconst { svg } = await mermaid.render('erd-svg', `erDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has`);\ndocument.getElementById('erd').innerHTML = svg;\n\n// Round only the outermost entity box corners (not internal row stripes)\ndocument.querySelectorAll('#erd svg.erDiagram .node').forEach(node => {\n  const firstPath = node.querySelector('path[d]');\n  if (!firstPath) return;\n  const d = firstPath.getAttribute('d');\n  const nums = d.match(/-?[\\d.]+/g)?.map(Number);\n  if (!nums || nums.length < 8) return;\n  const xs = [nums[0], nums[2], nums[4], nums[6]];\n  const ys = [nums[1], nums[3], nums[5], nums[7]];\n  const x = Math.min(...xs), y = Math.min(...ys);\n  const w = Math.max(...xs) - x, h = Math.max(...ys) - y;\n  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');\n  rect.setAttribute('x', x); rect.setAttribute('y', y);\n  rect.setAttribute('width', w); rect.setAttribute('height', h);\n  rect.setAttribute('rx', '8');\n  for (const a of ['fill', 'stroke', 'stroke-width', 'class', 'style']) {\n    if (firstPath.hasAttribute(a)) rect.setAttribute(a, firstPath.getAttribute(a));\n  }\n  firstPath.replaceWith(rect);\n});\n\n// Strip borders from attribute rows (mermaid v11: .row-rect-odd / .row-rect-even)\ndocument.querySelectorAll('#erd svg.erDiagram .row-rect-odd path, #erd svg.erDiagram .row-rect-even path').forEach(p => {\n  p.setAttribute('stroke', 'none');\n});\n</script>\n```\n\nWorks identically for `classDiagram` — swap the diagram source; init stays the same.\n\n#### Illustrative diagram\n\nFor building *intuition*. The subject might be physical (an engine, a lung) or completely abstract (attention, recursion, gradient descent) — what matters is that a spatial drawing conveys the mechanism better than labelled boxes would. These are the diagrams that make someone go \"oh, *that's* what it's doing.\"\n\n**Two flavours, same rules:**\n- **Physical subjects** get drawn as simplified versions of themselves. Cross-sections, cutaways, schematics. A water heater is a tank with a burner underneath. A lung is a branching tree in a cavity. You're drawing *the thing*, stylised.\n- **Abstract subjects** get drawn as *spatial metaphors*. You're inventing a shape for something that doesn't have one — but the shape should make the mechanism obvious. A transformer is a stack of horizontal slabs with a bright thread of attention connecting tokens across layers. A hash function is a funnel scattering items into a row of buckets. The call stack is literally a stack of frames growing and shrinking. Embeddings are dots clustering in space. The metaphor *is* the explanation.\n\nThis is the most ambitious diagram type and the one Claude is best at. Lean into it. Use colour for intensity (a hot attention weight glows amber, a cold one stays gray). Use repetition for scale (many small circles = many parameters).\n\n**Prefer interactive over static.** A static cross-section is a good answer; a cross-section you can *operate* is a great one. The decision rule: if the real-world system has a control, give the diagram that control. A water heater has a thermostat — so give the user a slider that shifts the hot/cold boundary, a toggle that fires the burner and animates convection currents. An LLM has input tokens — let the user click one and watch the attention weights re-fan. A cache has a hit rate — let them drag it and watch latency change. Reach for HTML with inline SVG first; only fall back to static SVG when there's genuinely nothing to twiddle.\n\n**When NOT to use**: The user is asking for a *reference*, not an *intuition*. \"What are the components of a transformer\" wants labelled boxes — that's a structural diagram. \"Walk me through our CI pipeline\" wants sequential steps — that's a flowchart. Also skip this when the metaphor would be arbitrary rather than revealing: drawing \"the cloud\" as a cloud shape or \"microservices\" as little houses doesn't teach anything about how they work. If the drawing doesn't make the *mechanism* clearer, don't draw it.\n\n**Fidelity ceiling**: These are schematics, not illustrations. Every shape should read at a glance. If a `<path>` needs more than ~6 segments to draw, simplify it. A tank is a rounded rect, not a Bézier portrait of a tank. A flame is three triangles, not a fire. Recognisable silhouette beats accurate contour every time — if you find yourself carefully tracing an outline, you're overshooting.\n\n**Core principle**: Draw the mechanism, not a diagram *about* the mechanism. Spatial arrangement carries the meaning; labels annotate. A good illustrative diagram works with the labels removed.\n\n**What changes from flowchart/structural rules**:\n\n- **Shapes are freeform.** Use `<path>`, `<ellipse>`, `<circle>`, `<polygon>`, and curved lines to represent real forms. A water tank is a tall rect with rounded bottom. A heart valve is a pair of curved paths. A circuit trace is a thin polyline. You are not limited to rounded rects.\n- **Layout follows the subject's geometry**, not a grid. If the thing is tall and narrow (a water heater, a thermometer), the diagram is tall and narrow. If it's wide and flat (a PCB, a geological cross-section), the diagram is wide. Let the subject dictate proportions within the 680px viewBox width.\n- **Color encodes intensity**, not category. For physical subjects: warm ramps (amber, coral, red) = heat/energy/pressure, cool ramps (blue, teal) = cold/calm, gray = inert structure. For abstract subjects: warm = active/high-weight/attended-to, cool or gray = dormant/low-weight/ignored. A user should be able to glance at the diagram and see *where the action is* without reading a single label.\n- **Layering and overlap are encouraged — for shapes.** Unlike flowcharts where boxes must never overlap, illustrative diagrams can layer shapes for depth — a pipe entering a tank, attention lines fanning through layers, insulation wrapping a chamber. Use z-ordering (later in source = on top) deliberately.\n- **Text is the exception — never let a stroke cross it.** The overlap permission is for shapes only. Every label needs 8px of clear air between its baseline/cap-height and the nearest stroke. Don't solve this with a background rect — solve it by *placing the text somewhere else*. Labels go in the quiet regions: above the drawing, below it, in the margin with a leader line, or in the gap between two fans of lines. If there is no quiet region, the drawing is too dense — remove something or split into two diagrams.\n- **Small shape-based indicators are allowed** when they communicate physical state. Triangles for flames. Circles for bubbles or particles. Wavy lines for steam or heat radiation. Parallel lines for vibration. These aren't decoration — they tell the user what's happening physically. Keep them simple: basic SVG primitives, not detailed illustrations.\n- **One gradient per diagram is permitted** — the only exception to the global no-gradients rule — and only to show a *continuous* physical property across a region (temperature stratification in a tank, pressure drop along a pipe, concentration in a solution). It must be a single `<linearGradient>` between exactly two stops from the same colour ramp. No radial gradients, no multi-stop fades, no gradient-as-aesthetic. If two stacked flat-fill rects communicate the same thing, do that instead.\n- **Animation is permitted for interactive HTML versions.** Use CSS `@keyframes` animating only `transform` and `opacity`. Keep loops under ~2s, and wrap every animation in `@media (prefers-reduced-motion: no-preference)` so it's opt-out by default. Animations should show how the system *behaves* — convection current, rotation, flow — not just move for the sake of moving. No physics engines or heavy libraries.\n\nAll core rules still apply (viewBox 680px, dark mode mandatory, 14/12px text, pre-built classes, arrow marker, clickable nodes).\n\n**Label placement**:\n- Place labels *outside* the drawn object when possible, with a thin leader line (0.5px dashed, `var(--t)` stroke) pointing to the relevant part. This keeps the illustration uncluttered.\n- For large internal zones (like temperature regions in a tank), labels can sit inside if there's ample clear space — minimum 20px from any edge.\n- External labels sit in the margin area or above/below the object. **Pick one side for labels and put them all there** — at 680px wide you don't have room for a drawing *and* label columns on both sides. Reserve at least 140px of horizontal margin on the label side. Labels on the left are the ones that clip: `text-anchor=\"end\"` extends leftward from x, and with multi-line callouts it's very easy to blow past x=0 without noticing. Default to right-side labels with `text-anchor=\"start\"` unless the subject's geometry forces otherwise. Use `class=\"ts\"` (12px) for callouts, `class=\"th\"` (14px medium) for major component names.\n\n**Composition approach**:\n1. Start with the main object's silhouette — the largest shape, centered in the viewBox.\n2. Add internal structure: chambers, pipes, membranes, mechanical parts.\n3. Add external connections: pipes entering/exiting, arrows showing flow direction, labels for inputs and outputs.\n4. Add state indicators last: color fills showing temperature/pressure/concentration, small animated elements showing movement or energy.\n5. Leave generous whitespace around the object for labels — don't crowd annotations against the viewBox edges.\n\n**Static vs interactive**: Static cutaways and cross-sections work best as pure SVG. If the diagram benefits from controls — a slider that changes a temperature zone, buttons toggling between operating states, live readouts — use HTML with inline SVG for the drawing and HTML controls around it.\n\n**Illustrative diagram example** — interactive water heater cross-section with vivid physical-realism colors, animated convection currents, and controls. Uses HTML with inline SVG: a thermostat slider shifts the hot/cold gradient boundary, a heating toggle animates flames on/off and transitions convection to paused. viewBox is 680x560; tank occupies x=180..440, leaving 140px+ of right margin for labels. Smooth convection paths use `stroke-dasharray:5 5` at ~1.6s for a gentle flow feel. A warm-glow overlay on the hot zone pulses subtly when heating is on. Flame shapes use warm gradient fills and clean opacity transitions. Labels sit along the right margin with leader lines.\n```html\n<style>\n  @keyframes conv { to { stroke-dashoffset: -20; } }\n  @keyframes flicker { 0%,100%{opacity:1} 50%{opacity:.82} }\n  @keyframes glow { 0%,100%{opacity:.3} 50%{opacity:.6} }\n  .conv { stroke-dasharray:5 5; animation: conv var(--dur,1.6s) linear infinite; transition: opacity .5s; }\n  .conv.off { opacity:0; animation-play-state:paused; }\n  #flames path { transition: opacity .5s; }\n  #flames.off path { opacity:0; animation:none; }\n  #flames path:nth-child(odd)  { animation: flicker .6s ease-in-out infinite; }\n  #flames path:nth-child(even) { animation: flicker .8s ease-in-out infinite .15s; }\n  #warm-glow { animation: glow 3s ease-in-out infinite; transition: opacity .5s; }\n  #warm-glow.off { opacity:0; animation:none; }\n  .toggle-track { position:relative;width:32px;height:18px;background:var(--color-border-secondary);border-radius:9px;transition:background .2s;display:inline-block; }\n  .toggle-track:has(input:checked) { background:var(--color-text-info); }\n  #heat-toggle:checked + span { transform:translateX(14px); }\n</style>\n<svg width=\"100%\" viewBox=\"0 0 680 560\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker>\n    <linearGradient id=\"tg\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop id=\"gh\" offset=\"40%\" stop-color=\"#E8593C\" stop-opacity=\"0.45\"/>\n      <stop id=\"gc\" offset=\"40%\" stop-color=\"#3B8BD4\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n    <linearGradient id=\"fg1\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#E85D24\"/><stop offset=\"60%\" stop-color=\"#F2A623\"/><stop offset=\"100%\" stop-color=\"#FCDE5A\"/></linearGradient>\n    <linearGradient id=\"fg2\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#D14520\"/><stop offset=\"50%\" stop-color=\"#EF8B2C\"/><stop offset=\"100%\" stop-color=\"#F9CB42\"/></linearGradient>\n    <linearGradient id=\"pipe-h\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#D05538\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#D05538\" stop-opacity=\".08\"/></linearGradient>\n    <linearGradient id=\"pipe-c\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#3B8BD4\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#3B8BD4\" stop-opacity=\".08\"/></linearGradient>\n    <clipPath id=\"tc\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\"/></clipPath>\n  </defs>\n  <!-- Tank fill -->\n  <g clip-path=\"url(#tc)\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" fill=\"url(#tg)\"/></g>\n  <!-- Warm glow overlay (pulses when heating) -->\n  <g clip-path=\"url(#tc)\"><rect id=\"warm-glow\" x=\"180\" y=\"55\" width=\"260\" height=\"160\" fill=\"#E8593C\" opacity=\".3\"/></g>\n  <!-- Tank shell (double stroke for solidity) -->\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"2.5\" opacity=\".25\"/>\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"1\"/>\n  <!-- Hot pipe out (top right) -->\n  <rect x=\"370\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-h)\"/>\n  <path d=\"M378 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <!-- Cold pipe in + dip tube (top left) -->\n  <rect x=\"234\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-c)\"/>\n  <path d=\"M242 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <path d=\"M242 55V395\" stroke=\"var(--t)\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\".5\"/>\n  <!-- Convection currents (curved paths at different speeds) -->\n  <path class=\"conv\" style=\"--dur:1.6s\" fill=\"none\" stroke=\"#D05538\" stroke-width=\"1\" opacity=\".5\" d=\"M350 380C355 320,365 240,358 140Q355 110,340 100\"/>\n  <path class=\"conv\" style=\"--dur:2.1s\" fill=\"none\" stroke=\"#C04828\" stroke-width=\".8\" opacity=\".35\" d=\"M300 390C308 340,320 260,315 170Q312 130,298 115\"/>\n  <path class=\"conv\" style=\"--dur:2.6s\" fill=\"none\" stroke=\"#B05535\" stroke-width=\".7\" opacity=\".3\" d=\"M380 370C382 310,388 230,382 150Q378 120,365 110\"/>\n  <!-- Burner bar -->\n  <rect x=\"188\" y=\"454\" width=\"244\" height=\"5\" rx=\"2\" fill=\"var(--t)\" opacity=\".6\"/>\n  <rect x=\"220\" y=\"462\" width=\"180\" height=\"6\" rx=\"3\" fill=\"var(--t)\" opacity=\".3\"/>\n  <!-- Flames (gradient-filled organic shapes) -->\n  <g id=\"flames\">\n    <path d=\"M240,454Q248,430 252,438Q256,424 260,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M278,454Q285,426 290,434Q295,418 300,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M320,454Q328,428 333,436Q338,420 342,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M360,454Q367,430 371,438Q375,422 380,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M398,454Q404,434 408,440Q412,428 416,454Z\" fill=\"url(#fg1)\"/>\n  </g>\n  <!-- Labels (right margin) -->\n  <g class=\"node\" onclick=\"sendPrompt('How does hot water exit the tank?')\">\n    <line class=\"leader\" x1=\"386\" y1=\"34\" x2=\"468\" y2=\"70\"/><circle cx=\"386\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"74\">Hot water outlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the cold water inlet work?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"34\" x2=\"468\" y2=\"140\"/><circle cx=\"250\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"144\">Cold water inlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the dip tube do?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"260\" x2=\"468\" y2=\"220\"/><circle cx=\"250\" cy=\"260\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"224\">Dip tube</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the thermostat control?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"250\" x2=\"468\" y2=\"300\"/><circle cx=\"440\" cy=\"250\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"304\">Thermostat</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What material is the tank made of?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"380\" x2=\"468\" y2=\"380\"/><circle cx=\"440\" cy=\"380\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"384\">Tank wall</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the gas burner heat water?')\">\n    <line class=\"leader\" x1=\"432\" y1=\"454\" x2=\"468\" y2=\"454\"/><circle cx=\"432\" cy=\"454\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"458\">Heating element</text></g>\n</svg>\n<div style=\"display:flex;align-items:center;gap:16px;margin:12px 0 0;font-size:13px;color:var(--color-text-secondary)\">\n  <label style=\"display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none\">\n    <span class=\"toggle-track\">\n      <input type=\"checkbox\" id=\"heat-toggle\" checked onchange=\"toggleHeat(this.checked)\" style=\"position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;margin:0\">\n      <span style=\"position:absolute;top:2px;left:2px;width:14px;height:14px;background:#fff;border-radius:50%;transition:transform .2s;pointer-events:none\"></span>\n    </span>\n    Heating\n  </label>\n  <span>Thermostat</span>\n  <input type=\"range\" id=\"temp-slider\" min=\"10\" max=\"90\" value=\"40\" style=\"flex:1\" oninput=\"setTemp(this.value)\">\n  <span id=\"temp-label\" style=\"min-width:36px;text-align:right\">40%</span>\n</div>\n<script>\nfunction setTemp(v) {\n  document.getElementById('gh').setAttribute('offset', v+'%');\n  document.getElementById('gc').setAttribute('offset', v+'%');\n  document.getElementById('temp-label').textContent = v+'%';\n}\nfunction toggleHeat(on) {\n  document.getElementById('flames').classList.toggle('off', !on);\n  document.getElementById('warm-glow').classList.toggle('off', !on);\n  document.querySelectorAll('.conv').forEach(p => p.classList.toggle('off', !on));\n}\n</script>\n```\n\n**Illustrative example — abstract subject** (attention in a transformer). Same rules, no physical object. A row of tokens at the bottom, one query token highlighted, weight-scaled lines fanning to every other token. Caption sits below the fan — clear of every stroke — not inside it.\n```svg\n<rect class=\"c-purple\" x=\"60\" y=\"40\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"80\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"120\" width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<text class=\"ts\" x=\"72\" y=\"57\" >Layer 3</text>\n<text class=\"ts\" x=\"72\" y=\"97\" >Layer 2</text>\n<text class=\"ts\" x=\"72\" y=\"137\">Layer 1</text>\n\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"116\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.25\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"228\" y2=\"146\" stroke-width=\"1.5\" opacity=\"0.4\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"340\" y2=\"146\" stroke-width=\"4\"   opacity=\"1.0\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"452\" y2=\"146\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"564\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.2\"/>\n\n<g class=\"node\" onclick=\"sendPrompt('What do the attention weights mean?')\">\n  <rect class=\"c-gray\"  x=\"80\"  y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"192\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-amber\" x=\"304\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"1\"/>\n  <rect class=\"c-gray\"  x=\"416\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"528\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <text class=\"ts\" x=\"116\" y=\"252\" text-anchor=\"middle\">the</text>\n  <text class=\"ts\" x=\"228\" y=\"252\" text-anchor=\"middle\">cat</text>\n  <text class=\"th\" x=\"340\" y=\"252\" text-anchor=\"middle\">sat</text>\n  <text class=\"ts\" x=\"452\" y=\"252\" text-anchor=\"middle\">on</text>\n  <text class=\"ts\" x=\"564\" y=\"252\" text-anchor=\"middle\">the</text>\n</g>\n\n<text class=\"ts\" x=\"340\" y=\"300\" text-anchor=\"middle\">Line thickness = attention weight from \"sat\" to each token</text>\n```\n\nNote what's *not* here: no boxes labelled \"multi-head attention\", no arrows labelled \"Q/K/V\". Those belong in the structural diagram. This one is about the *feeling* of attention — one token looking at every other token with varying intensity.\n\nThese are starting points, not ceilings. For the water heater: add a thermostat slider, animate the convection current, toggle heating vs standby. For the attention diagram: let the user click any token to become the query, scrub through layers, animate the weights settling. The goal is always to *show* how the thing works, not just *label* it.\n\n\n## UI components\n\n### Aesthetic\nFlat, clean, white surfaces. Minimal 0.5px borders. Generous whitespace. No gradients, no shadows (except functional focus rings). Everything should feel native to claude.ai — like it belongs on the page, not embedded from somewhere else.\n\n### Tokens\n- Borders: always `0.5px solid var(--color-border-tertiary)` (or `-secondary` for emphasis)\n- Corner radius: `var(--border-radius-md)` for most elements, `var(--border-radius-lg)` for cards\n- Cards: white bg (`var(--color-background-primary)`), 0.5px border, radius-lg, padding 1rem 1.25rem\n- Form elements (input, select, textarea, button, range slider) are pre-styled — write bare tags. Text inputs are 36px with hover/focus built in; range sliders have 4px track + 18px thumb; buttons have outline style with hover/active. Only add inline styles to override (e.g., different width).\n- Buttons: pre-styled with transparent bg, 0.5px border-secondary, hover bg-secondary, active scale(0.98). If it triggers sendPrompt, append a ↗ arrow.\n- **Round every displayed number.** JS float math leaks artifacts — `0.1 + 0.2` gives `0.30000000000000004`, `7 * 1.1` gives `7.700000000000001`. Any number that reaches the screen (slider readouts, stat card values, axis labels, data-point labels, tooltips, computed totals) must go through `Math.round()`, `.toFixed(n)`, or `Intl.NumberFormat`. Pick the precision that makes sense for the context — integers for counts, 1–2 decimals for percentages, `toLocaleString()` for currency. For range sliders, also set `step=\"1\"` (or step=\"0.1\" etc.) so the input itself emits round values.\n- Spacing: use rem for vertical rhythm (1rem, 1.5rem, 2rem), px for component-internal gaps (8px, 12px, 16px)\n- Box-shadows: none, except `box-shadow: 0 0 0 Npx` focus rings on inputs\n\n### Metric cards\nFor summary numbers (revenue, count, percentage) — surface card with muted 13px label above, 24px/500 number below. `background: var(--color-background-secondary)`, no border, `border-radius: var(--border-radius-md)`, padding 1rem. Use in grids of 2-4 with `gap: 12px`. Distinct from raised cards (which have white bg + border).\n\n### Layout\n- Editorial (explanatory content): no card wrapper, prose flows naturally\n- Card (bounded objects like a contact record, receipt): single raised card wraps the whole thing\n- Don't put tables here — output them as markdown in your response text\n\n**Grid overflow:** `grid-template-columns: 1fr` has `min-width: auto` by default — children with large min-content push the column past the container. Use `minmax(0, 1fr)` to clamp.\n\n**Table overflow:** Tables with many columns auto-expand past `width: 100%` if cell contents exceed it. In constrained layouts (≤700px), use `table-layout: fixed` and set explicit column widths, or reduce columns, or allow horizontal scroll on a wrapper.\n\n### Mockup presentation\nContained mockups — mobile screens, chat threads, single cards, modals, small UI components — should sit on a background surface (`var(--color-background-secondary)` container with `border-radius: var(--border-radius-lg)` and padding, or a device frame) so they don't float naked on the widget canvas. Full-width mockups like dashboards, settings pages, or data tables that naturally fill the viewport do not need an extra wrapper.\n\n### 1. Interactive explainer — learn how something works\n*\"Explain how compound interest works\" / \"Teach me about sorting algorithms\"*\n\nUse HTML for the interactive controls — sliders, buttons, live state displays, charts. Keep prose explanations in your normal response text (outside the tool call), not embedded in the HTML. No card wrapper. Whitespace is the container.\n\n```html\n<div style=\"display: flex; align-items: center; gap: 12px; margin: 0 0 1.5rem;\">\n  <label style=\"font-size: 14px; color: var(--color-text-secondary);\">Years</label>\n  <input type=\"range\" min=\"1\" max=\"40\" value=\"20\" id=\"years\" style=\"flex: 1;\" />\n  <span style=\"font-size: 14px; font-weight: 500; min-width: 24px;\" id=\"years-out\">20</span>\n</div>\n\n<div style=\"display: flex; align-items: baseline; gap: 8px; margin: 0 0 1.5rem;\">\n  <span style=\"font-size: 14px; color: var(--color-text-secondary);\">£1,000 →</span>\n  <span style=\"font-size: 24px; font-weight: 500;\" id=\"result\">£3,870</span>\n</div>\n\n<div style=\"margin: 2rem 0; position: relative; height: 240px;\">\n  <canvas id=\"chart\"></canvas>\n</div>\n```\n\nUse `sendPrompt()` to let users ask follow-ups: `sendPrompt('What if I increase the rate to 10%?')`\n\n### 2. Compare options — decision making\n*\"Compare pricing and features of these products\" / \"Help me choose between React and Vue\"*\n\nUse HTML. Side-by-side card grid for options. Highlight differences with semantic colors. Interactive elements for filtering or weighting.\n\n- Use `repeat(auto-fit, minmax(160px, 1fr))` for responsive columns\n- Each option in a card. Use badges for key differentiators.\n- Add `sendPrompt()` buttons: `sendPrompt('Tell me more about the Pro plan')`\n- Don't put comparison tables inside this tool — output them as regular markdown tables in your response text instead. The tool is for the visual card grid only.\n- When one option is recommended or \"most popular\", accent its card with `border: 2px solid var(--color-border-info)` only (2px is deliberate — the only exception to the 0.5px rule, used to accent featured items) — keep the same background and border as the other cards. Add a small badge (e.g. \"Most popular\") above or inside the card header using `background: var(--color-background-info); color: var(--color-text-info); font-size: 12px; padding: 4px 12px; border-radius: var(--border-radius-md)`.\n\n### 3. Data record — bounded UI object\n*\"Show me a Salesforce contact card\" / \"Create a receipt for this order\"*\n\nUse HTML. Wrap the entire thing in a single raised card. All content is sans-serif since it's pure UI. Use an avatar/initials circle for people (see example below).\n\n```html\n<div style=\"background: var(--color-background-primary); border-radius: var(--border-radius-lg); border: 0.5px solid var(--color-border-tertiary); padding: 1rem 1.25rem;\">\n  <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 16px;\">\n    <div style=\"width: 44px; height: 44px; border-radius: 50%; background: var(--color-background-info); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 14px; color: var(--color-text-info);\">MR</div>\n    <div>\n      <p style=\"font-weight: 500; font-size: 15px; margin: 0;\">Maya Rodriguez</p>\n      <p style=\"font-size: 13px; color: var(--color-text-secondary); margin: 0;\">VP of Engineering</p>\n    </div>\n  </div>\n  <div style=\"border-top: 0.5px solid var(--color-border-tertiary); padding-top: 12px;\">\n    <table style=\"width: 100%; font-size: 13px;\">\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Email</td><td style=\"text-align: right; padding: 4px 0; color: var(--color-text-info);\">m.rodriguez@acme.com</td></tr>\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Phone</td><td style=\"text-align: right; padding: 4px 0;\">+1 (415) 555-0172</td></tr>\n    </table>\n  </div>\n</div>\n```\n",
      "uuid": "5708a744-2953-435d-a404-1f45d5fcc8e2"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": "visualize",
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": null,
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about a quadrupole magnet. Given Reid's background in experimental nuclear physics at HIRFL-RIBLL, where beam optics with magnetic elements is directly relevant, I should give a direct technical explanation. Let me build an interactive visualization of a quadrupole magnet showing the field pattern and focusing/defocusing effect.

Key facts about quadrupole magnets:
- Consist of 4 magnetic poles arranged alternately N-S-N-S
- Magnetic field is zero at the center and increases linearly with distance from axis: B_x = G·y, B_y = G·x, where G is the gradient (T/m)


- They focus in one plane while defocusing in the perpendicular plane—a consequence of Maxwell's equations—which is why they're used in pairs or triplets to achieve net focusing in both directions
- At HIRFL-RIBLL, quadrupoles are essential for beam transport, momentum selection, and particle identification through the Bρ-ΔE-ToF method

Now I'll create an interactive visualization showing the quadrupole field pattern with field lines and component vectors, plus a demonstration of how the focusing and defocusing effects work on a particle beam.

Building the interactive visualization...

</details>

A quadrupole magnet is a magnetic device with four poles arranged alternately N–S–N–S. The key physics: the field is exactly zero on axis and grows *linearly* with transverse displacement — $B_x = G \cdot y$, $B_y = G \cdot x$ — where $G$ (T/m) is the field gradient. This linear restoring (or anti-restoring) force is precisely what's needed for beam optics.

The fundamental problem is this: a beam of charged particles traveling down a beamline naturally diverges (Coulomb repulsion + initial spread in angles). Dipoles bend; they don't focus. A quadrupole focuses in one transverse plane but — unavoidably, by Maxwell's equations ($\nabla \cdot \mathbf{B} = 0$) — defocuses in the perpendicular plane. Net focusing in both planes requires at least two quads (a doublet or FODO cell).

At HIRFL-RIBLL, they appear everywhere: beam transport, momentum selection slits, and setting up the $B\rho$ for your particle identification chain.

Here's a fully interactive visualization of the field geometry, trajectory focusing, and the FODO lattice:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-14T13:18:03.525144Z",
  "stop_timestamp": "2026-04-14T13:19:41.366492Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Ug2UNXwDx3aJoYZHB3q3r9",
  "name": "visualize:show_widget",
  "input": {
    "title": "quadrupole_magnet_interactive",
    "loading_messages": [
      "Winding the coils...",
      "Setting up the pole tips...",
      "Launching test particles..."
    ],
    "widget_code": "\n<style>\n*{box-sizing:border-box;margin:0;padding:0}\nbody{font-family:var(--font-sans,sans-serif)}\n.tabs{display:flex;gap:6px;margin-bottom:14px}\n.tab{padding:5px 14px;font-size:13px;border:0.5px solid var(--color-border-secondary);border-radius:6px;cursor:pointer;background:transparent;color:var(--color-text-secondary);transition:.15s}\n.tab.active{background:var(--color-background-secondary);color:var(--color-text-primary);border-color:var(--color-border-primary)}\n.panel{display:none}.panel.active{display:block}\n.ctrl{display:flex;align-items:center;gap:10px;margin-bottom:10px;font-size:13px;color:var(--color-text-secondary)}\n.ctrl label{min-width:110px}\n.ctrl input[type=range]{flex:1}\n.ctrl span{min-width:44px;text-align:right;color:var(--color-text-primary)}\ncanvas{width:100%;border:0.5px solid var(--color-border-tertiary);border-radius:8px;display:block}\n.legend{display:flex;gap:16px;margin-top:8px;flex-wrap:wrap}\n.li{display:flex;align-items:center;gap:5px;font-size:12px;color:var(--color-text-secondary)}\n.lc{width:18px;height:3px;border-radius:2px}\nh3{font-size:13px;font-weight:500;margin-bottom:10px;color:var(--color-text-primary)}\n.info-box{background:var(--color-background-secondary);border-radius:8px;padding:10px 14px;font-size:12px;color:var(--color-text-secondary);margin-top:10px;line-height:1.7}\n.info-box strong{color:var(--color-text-primary);font-weight:500}\n</style>\n\n<div class=\"tabs\">\n  <button class=\"tab active\" onclick=\"setTab(0)\">Field map</button>\n  <button class=\"tab\" onclick=\"setTab(1)\">Beam trajectories</button>\n  <button class=\"tab\" onclick=\"setTab(2)\">FODO lattice</button>\n</div>\n\n<div id=\"p0\" class=\"panel active\">\n  <div class=\"ctrl\"><label>Gradient G (T/m)</label><input type=\"range\" id=\"G\" min=\"1\" max=\"20\" value=\"8\" step=\"1\" oninput=\"drawField()\"><span id=\"Gv\">8 T/m</span></div>\n  <canvas id=\"cField\" height=\"380\"></canvas>\n  <div class=\"legend\">\n    <div class=\"li\"><div class=\"lc\" style=\"background:#378ADD\"></div>B field vectors</div>\n    <div class=\"li\"><div class=\"lc\" style=\"background:#D85A30\"></div>Force on proton (QF: focusing x)</div>\n    <div class=\"li\"><div class=\"lc\" style=\"background:#1D9E75\"></div>Equipotential lines</div>\n  </div>\n  <div class=\"info-box\">\n    <strong>Field rule:</strong> B<sub>x</sub> = G·y &nbsp;|&nbsp; B<sub>y</sub> = G·x &nbsp;|&nbsp; B<sub>z</sub> = 0 &nbsp;(on axis: <strong>B = 0</strong>).\n    A particle displaced by x feels a force F<sub>x</sub> = qv<sub>z</sub>B<sub>y</sub> = qv<sub>z</sub>Gx — restoring in x (QF), defocusing in y.\n  </div>\n</div>\n\n<div id=\"p1\" class=\"panel\">\n  <div class=\"ctrl\"><label>Gradient G (T/m)</label><input type=\"range\" id=\"G2\" min=\"2\" max=\"25\" value=\"10\" step=\"1\" oninput=\"drawTraj()\"><span id=\"G2v\">10 T/m</span></div>\n  <div class=\"ctrl\"><label>Beam divergence</label><input type=\"range\" id=\"div\" min=\"2\" max=\"30\" value=\"10\" step=\"1\" oninput=\"drawTraj()\"><span id=\"divv\">10 mrad</span></div>\n  <div class=\"ctrl\"><label>Show plane</label>\n    <select id=\"plane\" onchange=\"drawTraj()\" style=\"flex:1;padding:4px 8px;border:0.5px solid var(--color-border-secondary);border-radius:6px;background:transparent;color:var(--color-text-primary);font-size:13px\">\n      <option value=\"x\">Horizontal x (focusing: QF)</option>\n      <option value=\"y\">Vertical y (defocusing: QF)</option>\n    </select>\n  </div>\n  <canvas id=\"cTraj\" height=\"320\"></canvas>\n  <div class=\"legend\">\n    <div class=\"li\"><div class=\"lc\" style=\"background:#378ADD;height:2px\"></div>Particle trajectories</div>\n    <div class=\"li\"><div class=\"lc\" style=\"background:#D85A30;opacity:.4;height:8px\"></div>Quadrupole region</div>\n  </div>\n  <div class=\"info-box\" id=\"trajInfo\"></div>\n</div>\n\n<div id=\"p2\" class=\"panel\">\n  <div class=\"ctrl\"><label>Gradient G (T/m)</label><input type=\"range\" id=\"G3\" min=\"2\" max=\"20\" value=\"8\" step=\"1\" oninput=\"drawFODO()\"><span id=\"G3v\">8 T/m</span></div>\n  <div class=\"ctrl\"><label>Quad length (cm)</label><input type=\"range\" id=\"QL\" min=\"10\" max=\"60\" value=\"25\" step=\"5\" oninput=\"drawFODO()\"><span id=\"QLv\">25 cm</span></div>\n  <canvas id=\"cFODO\" height=\"360\"></canvas>\n  <div class=\"legend\">\n    <div class=\"li\"><div class=\"lc\" style=\"background:#378ADD\"></div>x envelope</div>\n    <div class=\"li\"><div class=\"lc\" style=\"background:#D85A30\"></div>y envelope</div>\n    <div class=\"li\"><div class=\"lc\" style=\"background:#1D9E75;opacity:.5;height:10px\"></div>QF (focus x)</div>\n    <div class=\"li\"><div class=\"lc\" style=\"background:#BA7517;opacity:.5;height:10px\"></div>QD (focus y)</div>\n  </div>\n  <div class=\"info-box\">\n    <strong>FODO cell:</strong> QF – drift – QD – drift – QF … Net effect: <strong>alternating-gradient focusing</strong> (strong focusing). Both x and y stay confined. Used throughout HIRFL-RIBLL beam transport lines.\n  </div>\n</div>\n\n<script>\nconst dark = matchMedia('(prefers-color-scheme:dark)').matches;\nconst fg = dark?'rgba(255,255,255,0.8)':'rgba(0,0,0,0.75)';\nconst fgm = dark?'rgba(255,255,255,0.35)':'rgba(0,0,0,0.2)';\n\nfunction px(c){return c.getBoundingClientRect().width * devicePixelRatio || 640}\n\nfunction setTab(i){\n  document.querySelectorAll('.tab').forEach((t,j)=>t.classList.toggle('active',i===j));\n  document.querySelectorAll('.panel').forEach((p,j)=>p.classList.toggle('active',i===j));\n  if(i===0)drawField();\n  if(i===1)drawTraj();\n  if(i===2)drawFODO();\n}\n\nfunction drawField(){\n  const canvas=document.getElementById('cField');\n  const G=+document.getElementById('G').value;\n  document.getElementById('Gv').textContent=G+' T/m';\n  const W=canvas.getBoundingClientRect().width||560, H=380;\n  canvas.width=W*devicePixelRatio; canvas.height=H*devicePixelRatio;\n  canvas.style.width=W+'px'; canvas.style.height=H+'px';\n  const ctx=canvas.getContext('2d'); ctx.scale(devicePixelRatio,devicePixelRatio);\n  ctx.clearRect(0,0,W,H);\n  const cx=W/2, cy=H/2, scale=90;\n\n  // Pole regions (4 poles, colored)\n  const poleR=38, poleOff=135;\n  const poles=[\n    {x:cx-poleOff,y:cy-poleOff,col:'rgba(55,138,221,0.18)',label:'N'},\n    {x:cx+poleOff,y:cy+poleOff,col:'rgba(55,138,221,0.18)',label:'N'},\n    {x:cx+poleOff,y:cy-poleOff,col:'rgba(216,90,48,0.18)',label:'S'},\n    {x:cx-poleOff,y:cy+poleOff,col:'rgba(216,90,48,0.18)',label:'S'},\n  ];\n  poles.forEach(p=>{\n    ctx.beginPath(); ctx.arc(p.x,p.y,poleR,0,2*Math.PI);\n    ctx.fillStyle=p.col; ctx.fill();\n    ctx.strokeStyle=dark?'rgba(255,255,255,0.15)':'rgba(0,0,0,0.15)'; ctx.lineWidth=0.5; ctx.stroke();\n    ctx.fillStyle=fg; ctx.font='500 14px var(--font-sans,sans-serif)';\n    ctx.textAlign='center'; ctx.textBaseline='middle';\n    ctx.fillText(p.label,p.x,p.y);\n  });\n\n  // Equipotential lines: φ = G*x*y = const\n  const potLevels=[-3,-2,-1.5,-1,-.5,.5,1,1.5,2,3];\n  ctx.save();\n  potLevels.forEach(lv=>{\n    ctx.beginPath();\n    for(let xi=-2.2;xi<=2.2;xi+=0.004){\n      if(Math.abs(xi)<0.01)continue;\n      const yi=lv/xi;\n      if(Math.abs(yi)>2.2)continue;\n      const sx=cx+xi*scale, sy=cy-yi*scale;\n      if(Math.abs(xi-(-2.2))<0.01)ctx.moveTo(sx,sy);\n      else ctx.lineTo(sx,sy);\n    }\n    ctx.strokeStyle='rgba(29,158,117,0.35)'; ctx.lineWidth=0.8; ctx.stroke();\n  });\n  ctx.restore();\n\n  // B field vectors: Bx=G*y, By=G*x\n  const GRID=8;\n  for(let ix=0;ix<=GRID;ix++){\n    for(let iy=0;iy<=GRID;iy++){\n      const xv=(ix/GRID*2-1)*1.6;\n      const yv=(iy/GRID*2-1)*1.6;\n      const Bx=G*yv, By=G*xv;\n      const Bmag=Math.sqrt(Bx*Bx+By*By);\n      if(Bmag<0.1)continue;\n      const norm=Math.min(Bmag/25,1);\n      const len=12+norm*16;\n      const nx=Bx/Bmag, ny=By/Bmag;\n      const sx=cx+xv*scale, sy=cy-yv*scale;\n      ctx.beginPath();\n      ctx.moveTo(sx-nx*len/2, sy+ny*len/2);\n      ctx.lineTo(sx+nx*len/2, sy-ny*len/2);\n      const alpha=0.3+norm*0.6;\n      ctx.strokeStyle=`rgba(55,138,221,${alpha})`; ctx.lineWidth=1.2;\n      ctx.stroke();\n      // arrowhead\n      const ax=sx+nx*len/2, ay=sy-ny*len/2;\n      const tx=-ny, ty=-nx;\n      ctx.beginPath();\n      ctx.moveTo(ax,ay);\n      ctx.lineTo(ax-nx*5+tx*3,ay+ny*5+ty*3);\n      ctx.lineTo(ax-nx*5-tx*3,ay+ny*5-ty*3);\n      ctx.closePath();\n      ctx.fillStyle=`rgba(55,138,221,${alpha})`; ctx.fill();\n    }\n  }\n\n  // Force arrows on sample particles\n  const pts=[{x:.6,y:0},{x:-.6,y:0},{x:0,y:.6},{x:0,y:-.6}];\n  pts.forEach(p=>{\n    const Fy=G*p.x; const Fx=G*p.y;\n    const fx=-Fy, fy=Fx; // F = q*v_z × B = q*vz*(By x_hat - Bx y_hat)\n    const fmag=Math.sqrt(fx*fx+fy*fy);\n    if(fmag<0.01)return;\n    const fnx=fx/fmag, fny=fy/fmag;\n    const flen=30;\n    const sx=cx+p.x*scale, sy=cy-p.y*scale;\n    ctx.beginPath(); ctx.moveTo(sx,sy); ctx.lineTo(sx+fnx*flen,sy-fny*flen);\n    ctx.strokeStyle='rgba(216,90,48,0.9)'; ctx.lineWidth=2; ctx.stroke();\n    ctx.beginPath();\n    ctx.moveTo(sx+fnx*flen,sy-fny*flen);\n    ctx.lineTo(sx+fnx*flen-fnx*7+(-fny)*4,sy-fny*flen+fny*7+(-fnx)*4);\n    ctx.lineTo(sx+fnx*flen-fnx*7-(-fny)*4,sy-fny*flen+fny*7-(- fnx)*4);\n    ctx.closePath(); ctx.fillStyle='rgba(216,90,48,0.9)'; ctx.fill();\n  });\n\n  // Axis lines\n  ctx.strokeStyle=fgm; ctx.lineWidth=0.5; ctx.setLineDash([4,4]);\n  ctx.beginPath(); ctx.moveTo(40,cy); ctx.lineTo(W-40,cy); ctx.stroke();\n  ctx.beginPath(); ctx.moveTo(cx,30); ctx.lineTo(cx,H-30); ctx.stroke();\n  ctx.setLineDash([]);\n  ctx.fillStyle=fg; ctx.font='12px var(--font-sans,sans-serif)';\n  ctx.textAlign='left'; ctx.fillText('x',W-50,cy-6);\n  ctx.textAlign='center'; ctx.fillText('y',cx+8,42);\n  ctx.fillText('B = 0 on axis',cx,cy+18);\n}\n\nfunction drawTraj(){\n  const canvas=document.getElementById('cTraj');\n  const G=+document.getElementById('G2').value;\n  const divmrad=+document.getElementById('div').value;\n  const plane=document.getElementById('plane').value;\n  document.getElementById('G2v').textContent=G+' T/m';\n  document.getElementById('divv').textContent=divmrad+' mrad';\n\n  const W=canvas.getBoundingClientRect().width||560, H=320;\n  canvas.width=W*devicePixelRatio; canvas.height=H*devicePixelRatio;\n  canvas.style.width=W+'px'; canvas.style.height=H+'px';\n  const ctx=canvas.getContext('2d'); ctx.scale(devicePixelRatio,devicePixelRatio);\n  ctx.clearRect(0,0,W,H);\n\n  const margin={l:50,r:20,t:20,b:40};\n  const pw=W-margin.l-margin.r, ph=H-margin.t-margin.b;\n  const cx=margin.l, cy=margin.t;\n\n  // Layout: drift | QUAD | drift\n  const totalZ=3.0; // meters\n  const quadStart=1.0, quadEnd=2.0, quadLen=quadEnd-quadStart;\n  const rigidity=3.0; // Bρ ~ 3 T·m (rough 200 MeV/u heavy ion)\n  // k² = G/Bρ (focusing strength)\n  const k=Math.sqrt(G/rigidity);\n  const sign=plane==='x'?1:-1; // QF: focus x, defocus y\n\n  // Quad transfer matrix (thin-lens-ish; use matrix optics)\n  // M_drift(L) = [[1,L],[0,1]]\n  // M_quad(L) = [[cos(kL), sin(kL)/k],[-k*sin(kL), cos(kL)]] focusing\n  //           = [[cosh(kL), sinh(kL)/k],[k*sinh(kL), cosh(kL)]] defocusing\n  const kL=k*quadLen;\n  let Mqxx, Mqxp, Mqpx, Mqpp;\n  if(sign>0){\n    Mqxx=Math.cos(kL); Mqxp=Math.sin(kL)/k; Mqpx=-k*Math.sin(kL); Mqpp=Math.cos(kL);\n  }else{\n    Mqxx=Math.cosh(kL); Mqxp=Math.sinh(kL)/k; Mqpx=k*Math.sinh(kL); Mqpp=Math.cosh(kL);\n  }\n\n  const nRays=9;\n  const maxX0=0.025; // 25 mm\n  const divRad=divmrad*1e-3;\n\n  function propagate(x0,xp0,z){\n    if(z<=quadStart){\n      return {x:x0+xp0*z, xp:xp0};\n    } else if(z<=quadEnd){\n      const d1=quadStart;\n      const x1=x0+xp0*d1, xp1=xp0;\n      const dz=z-quadStart;\n      const kz=k*dz;\n      let xq,xpq;\n      if(sign>0){xq=x1*Math.cos(kz)+xp1*Math.sin(kz)/k; xpq=-x1*k*Math.sin(kz)+xp1*Math.cos(kz);}\n      else{xq=x1*Math.cosh(kz)+xp1*Math.sinh(kz)/k; xpq=x1*k*Math.sinh(kz)+xp1*Math.cosh(kz);}\n      return {x:xq,xp:xpq};\n    } else {\n      const d1=quadStart; const x1=x0+xp0*d1, xp1=xp0;\n      const xq=x1*Mqxx+xp1*Mqxp, xpq=x1*Mqpx+xp1*Mqpp;\n      const d2=z-quadEnd;\n      return {x:xq+xpq*d2, xp:xpq};\n    }\n  }\n\n  const zArr=[], xArr=[];\n  const NZ=200;\n  for(let i=0;i<=NZ;i++)zArr.push(i/NZ*totalZ);\n\n  function mapZ(z){return cx+z/totalZ*pw}\n  function mapX(x){\n    const range=0.045;\n    return cy+ph/2 - x/range*(ph/2-10);\n  }\n\n  // Quad fill\n  ctx.fillStyle=sign>0?'rgba(29,158,117,0.12)':'rgba(186,117,23,0.12)';\n  ctx.fillRect(mapZ(quadStart),cy,mapZ(quadEnd)-mapZ(quadStart),ph);\n  ctx.fillStyle=sign>0?'rgba(29,158,117,0.6)':'rgba(186,117,23,0.6)';\n  ctx.font='500 11px var(--font-sans,sans-serif)'; ctx.textAlign='center';\n  ctx.fillText(sign>0?'QF (focusing)':'QD (defocusing)',mapZ((quadStart+quadEnd)/2),cy+16);\n\n  // Rays\n  ctx.save();\n  ctx.beginPath(); ctx.rect(cx,cy,pw,ph); ctx.clip();\n  for(let ri=0;ri<nRays;ri++){\n    const x0=(ri/(nRays-1)*2-1)*maxX0;\n    const xp0=0;\n    ctx.beginPath();\n    let first=true;\n    for(let zi=0;zi<=NZ;zi++){\n      const z=zArr[zi];\n      const {x}=propagate(x0,xp0,z);\n      const px2=mapZ(z), py2=mapX(x);\n      if(first){ctx.moveTo(px2,py2);first=false;}else ctx.lineTo(px2,py2);\n    }\n    const alpha=0.25+0.6*(1-Math.abs(ri-Math.floor(nRays/2))/(nRays/2));\n    ctx.strokeStyle=`rgba(55,138,221,${alpha})`; ctx.lineWidth=1.4; ctx.stroke();\n  }\n  ctx.restore();\n\n  // Axis beam\n  ctx.beginPath(); ctx.moveTo(mapZ(0),mapX(0)); ctx.lineTo(mapZ(totalZ),mapX(0));\n  ctx.strokeStyle=fgm; ctx.lineWidth=0.5; ctx.setLineDash([4,4]); ctx.stroke(); ctx.setLineDash([]);\n\n  // Border\n  ctx.strokeStyle=fgm; ctx.lineWidth=0.5;\n  ctx.strokeRect(cx,cy,pw,ph);\n\n  // z-axis labels\n  ctx.fillStyle=fg; ctx.font='11px var(--font-sans,sans-serif)'; ctx.textAlign='center';\n  [0,0.5,1,1.5,2,2.5,3].forEach(z=>{\n    ctx.fillText(z.toFixed(1)+'m',mapZ(z),cy+ph+16);\n  });\n  ctx.fillText('z',W-16,cy+ph+16);\n\n  // x-axis label\n  ctx.save(); ctx.translate(cx-20,cy+ph/2); ctx.rotate(-Math.PI/2);\n  ctx.textAlign='center'; ctx.fillText(plane+' (mm)',0,0); ctx.restore();\n  [-20,-10,0,10,20].forEach(xmm=>{\n    const range=45;\n    const y2=cy+ph/2-xmm/range*(ph/2-10);\n    ctx.fillText(xmm,cx-28,y2+4);\n  });\n\n  const focused=sign>0;\n  document.getElementById('trajInfo').innerHTML=\n    `<strong>${plane==='x'?'QF in horizontal (x)':'QF in vertical (y)'}</strong>: ${focused\n      ?'The quadrupole <strong>focuses</strong> this plane — particles displaced from axis are bent back toward center. Focal length ≈ <strong>'+(1/(k*Math.sin(kL))).toFixed(2)+' m</strong> for this gradient and length.'\n      :'The quadrupole <strong>defocuses</strong> this plane — particles displaced from axis diverge further. This is unavoidable: ∇·B=0 requires opposite action in the perpendicular plane.'}`;\n}\n\nfunction drawFODO(){\n  const canvas=document.getElementById('cFODO');\n  const G=+document.getElementById('G3').value;\n  const QL=+document.getElementById('QL').value*0.01;\n  document.getElementById('G3v').textContent=G+' T/m';\n  document.getElementById('QLv').textContent=(QL*100).toFixed(0)+' cm';\n\n  const W=canvas.getBoundingClientRect().width||560, H=360;\n  canvas.width=W*devicePixelRatio; canvas.height=H*devicePixelRatio;\n  canvas.style.width=W+'px'; canvas.style.height=H+'px';\n  const ctx=canvas.getContext('2d'); ctx.scale(devicePixelRatio,devicePixelRatio);\n  ctx.clearRect(0,0,W,H);\n\n  const margin={l:50,r:20,t:80,b:40};\n  const pw=W-margin.l-margin.r, ph=H-margin.t-margin.b;\n  const cx=margin.l, cy=margin.t;\n\n  const rigidity=3.0;\n  const k=Math.sqrt(G/rigidity);\n  const driftLen=0.5;\n  const cell=[\n    {type:'QF',len:QL},{type:'drift',len:driftLen},\n    {type:'QD',len:QL},{type:'drift',len:driftLen},\n  ];\n  const nCells=3;\n  const totalZ=(2*QL+2*driftLen)*nCells;\n\n  function transferMatrix(type,len){\n    if(type==='drift') return [[1,len],[0,1]];\n    const kl=k*len;\n    if(type==='QF') return [[Math.cos(kl),Math.sin(kl)/k],[-k*Math.sin(kl),Math.cos(kl)]];\n    return [[Math.cosh(kl),Math.sinh(kl)/k],[k*Math.sinh(kl),Math.cosh(kl)]];\n  }\n  function matmul(A,B){\n    return [[A[0][0]*B[0][0]+A[0][1]*B[1][0], A[0][0]*B[0][1]+A[0][1]*B[1][1]],\n            [A[1][0]*B[0][0]+A[1][1]*B[1][0], A[1][0]*B[0][1]+A[1][1]*B[1][1]]];\n  }\n\n  function trace(x0,xp0,plane){\n    let state=[x0,xp0];\n    const pts=[{z:0,x:x0}];\n    let z=0;\n    const dz=0.005;\n    for(let ci=0;ci<nCells;ci++){\n      for(const seg of cell){\n        const segType=plane==='x'?seg.type:(seg.type==='QF'?'QD':seg.type==='QD'?'QF':seg.type);\n        const Nsteps=Math.max(1,Math.round(seg.len/dz));\n        const dl=seg.len/Nsteps;\n        for(let si=0;si<Nsteps;si++){\n          const M=transferMatrix(segType,dl);\n          const nx=M[0][0]*state[0]+M[0][1]*state[1];\n          const nxp=M[1][0]*state[0]+M[1][1]*state[1];\n          state=[nx,nxp];\n          z+=dl;\n          pts.push({z,x:state[0]});\n        }\n      }\n    }\n    return pts;\n  }\n\n  function mapZ(z){return cx+z/totalZ*pw}\n  function mapX(x,planeH){\n    const range=0.035;\n    const midY=planeH?cy+ph*0.25:cy+ph*0.75;\n    return midY-x/range*(ph/4-8);\n  }\n\n  // Draw quad/drift regions\n  let zAcc=0;\n  for(let ci=0;ci<nCells;ci++){\n    for(const seg of cell){\n      if(seg.type!=='drift'){\n        const col=seg.type==='QF'?'rgba(29,158,117,0.15)':'rgba(186,117,23,0.15)';\n        ctx.fillStyle=col;\n        const x1=mapZ(zAcc), x2=mapZ(zAcc+seg.len);\n        ctx.fillRect(x1,cy,x2-x1,ph);\n        if(ci===0){\n          ctx.fillStyle=seg.type==='QF'?'rgba(29,158,117,0.7)':'rgba(186,117,23,0.7)';\n          ctx.font='500 10px var(--font-sans,sans-serif)'; ctx.textAlign='center';\n          ctx.fillText(seg.type,(x1+x2)/2,cy+14);\n        }\n      }\n      zAcc+=seg.len;\n    }\n  }\n\n  // Axis lines\n  ctx.strokeStyle=fgm; ctx.lineWidth=0.5; ctx.setLineDash([4,4]);\n  ctx.beginPath(); ctx.moveTo(cx,cy+ph*0.25); ctx.lineTo(cx+pw,cy+ph*0.25); ctx.stroke();\n  ctx.beginPath(); ctx.moveTo(cx,cy+ph*0.75); ctx.lineTo(cx+pw,cy+ph*0.75); ctx.stroke();\n  ctx.setLineDash([]);\n\n  // Label planes\n  ctx.fillStyle=fg; ctx.font='500 12px var(--font-sans,sans-serif)'; ctx.textAlign='left';\n  ctx.fillText('x (horizontal)',cx+4,cy+10);\n  ctx.fillText('y (vertical)',cx+4,cy+ph*0.5+10);\n\n  // Border lines between panels\n  ctx.strokeStyle=fgm; ctx.lineWidth=0.5;\n  ctx.beginPath(); ctx.moveTo(cx,cy+ph*0.5); ctx.lineTo(cx+pw,cy+ph*0.5); ctx.stroke();\n\n  const nRays=5;\n  const maxX0=0.015;\n  ['x','y'].forEach((plane,pi)=>{\n    ctx.save(); ctx.beginPath(); ctx.rect(cx,cy+pi*ph*0.5,pw,ph*0.5); ctx.clip();\n    for(let ri=0;ri<nRays;ri++){\n      const x0=(ri/(nRays-1)*2-1)*maxX0;\n      const pts=trace(x0,0,plane);\n      ctx.beginPath();\n      pts.forEach((p,i)=>{\n        const px2=mapZ(p.z);\n        const py2=mapX(p.x, plane==='x');\n        if(i===0)ctx.moveTo(px2,py2); else ctx.lineTo(px2,py2);\n      });\n      const alpha=0.3+0.6*(1-Math.abs(ri-Math.floor(nRays/2))/(nRays/2));\n      ctx.strokeStyle=plane==='x'?`rgba(55,138,221,${alpha})`:`rgba(216,90,48,${alpha})`;\n      ctx.lineWidth=1.4; ctx.stroke();\n    }\n    ctx.restore();\n  });\n\n  // z-axis\n  ctx.fillStyle=fg; ctx.font='11px var(--font-sans,sans-serif)'; ctx.textAlign='center';\n  for(let i=0;i<=6;i++){\n    const z=i/6*totalZ;\n    ctx.fillText(z.toFixed(1)+'m',mapZ(z),cy+ph+16);\n  }\n}\n\ndrawField();\n</script>\n"
  },
  "message": "show_widget",
  "integration_name": "visualize",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": true,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01Ug2UNXwDx3aJoYZHB3q3r9",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "c1c018e8-d85f-4b10-9913-b28231a8af0e"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "4b52d280-fe76-4b34-9c95-81ec972f5a54"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": "visualize",
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": null,
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Good visualization. Now let me provide a clear technical explanation.

</details>

**Tab 1 (Field map)** shows the hyperbolic field geometry. The equipotential lines $\phi = Gxy = \text{const}$ are rectangular hyperbolas — which is also why quadrupole pole tips are machined to that shape. Drag the gradient slider to see how field strength scales.

**Tab 2 (Beam trajectories)** lets you switch between the x and y planes to directly see the focusing/defocusing asymmetry. The focal length for a thick quad is $f^{-1} = k \sin(kL)$ — you'll see it change as you adjust $G$.

**Tab 3 (FODO lattice)** shows what happens when you alternate QF–QD–QF–QD: both the x (blue) and y (red) envelopes stay bounded. This is **alternating-gradient (strong) focusing** — the Courant–Snyder principle, which is the backbone of every modern accelerator and every beam transport line including RIBLL.

---

A few things worth internalizing for your experimental context:

The **$B\rho$-selection** at RIBLL relies on the beam being well-collimated at the intermediate focal plane. That collimation is entirely the work of the quadrupole triplets — if a quad current drifts, your momentum resolution (and thus your $A/q$ separation for PID) degrades directly.

The **transfer matrix formalism** (what the simulation uses under the hood) is also what LISE++ is solving when you set up a fragment separator — each optical element is a $2\times2$ matrix in $(x, x')$ phase space, and LISE multiplies them in sequence to compute the beam envelope and the resolving power at each slit.

Want to go deeper on any aspect — the thin-lens approximation, the Courant–Snyder $\beta$-function, or how misalignment of quads introduces betatron coupling in your separator?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8c23-ea9c-7eb4-85f1-a5d378b81206",
  "updated_at": "2026-04-14T13:19:57.970376Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d8c23-ea9c-7626-9b1b-3ca50f83335a"
}
```

</details>

### 3. human — 2026-04-14T13:32:54.018432Z

Explain the logic of this for me

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8c31-dbe1-7018-9b23-824ec095b252",
  "updated_at": "2026-04-14T13:32:54.018432Z",
  "attachments": [
    {
      "file_name": "excerpt_from_previous_claude_message.txt",
      "file_size": 160,
      "file_type": "txt",
      "extracted_content": "A quadrupole focuses in one transverse plane but — unavoidably, by Maxwell's equations (\n∇\n⋅\n𝐵\n=\n0\n∇⋅B=0) — defocuses in the perpendicular plane."
    }
  ],
  "files": [
    {
      "file_uuid": "9d0d8563-9c1b-4e5f-964e-e0c7c3b69d13",
      "file_name": "excerpt_from_previous_claude_message.txt"
    }
  ],
  "parent_message_uuid": "019d8c23-ea9c-7eb4-85f1-a5d378b81206"
}
```

</details>

### 4. assistant — 2026-04-14T13:33:46.918554Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants me to explain why ∇·B = 0 forces defocusing in the perpendicular plane when focusing in one plane. This is a graduate-level physics question relevant to their work. Let me give a direct, technical explanation.

The argument is clean:

In the paraxial approximation, for a quadrupole with field gradient G:
- B_x = G·y
- B_y = G·x  
- B_z = 0

Maxwell's equation ∇·B = 0 means:


∂B_x/∂x + ∂B_y/∂y + ∂B_z/∂z = 0

Since B_x has no x-dependence and B_y has no y-dependence, the first two terms vanish, leaving ∂B_z/∂z = 0. But the real insight is that if you want a field that focuses in one transverse direction—say, creating a gradient in B_y that increases with x—then the divergence-free constraint forces a compensating gradient in B_x that increases with y, which defocuses in the perpendicular direction.

Quadrupoles break this symmetry by having opposite gradients in orthogonal directions, so they can focus in one plane while defocusing in the other. The key constraint comes from the equations of motion: the transverse acceleration depends on the field gradients, and those gradients are linked through Maxwell's equations. )/∂x = -(q/p) · ∂B_y/∂x
The focusing gradient in y is: ∂(y'')/∂y = (q/p) · ∂B_x/∂y

From ∇×B = 0: ∂B_y/∂x = ∂B_x/∂y (= G for a quadrupole)

So the sum of the focusing gradients:
∂(x'')/∂x + ∂(y'')/∂y = -(q/p)·∂B_y/∂x + (q/p)·∂B_x/∂y = -(q/p)[∂B_y/∂x - ∂B_x/∂y] = 0

This follows from ∇×B = 0 

Now I'm realizing ∇·B = 0 plays a different role. In three dimensions, if the magnetic field components B_x and B_y vary slowly in z, then the divergence constraint ∂B_x/∂x + ∂B_y/∂y ≈ 0 relates the transverse field gradients, which connects to how the focusing strength depends on the field derivatives.

So the key insight is that ∇×B = 0 directly enforces the alternating focusing-defocusing pattern in a quadrupole, while ∇·B = 0 constrains the overall field structure in the transverse plane. I'm seeing how the divergence-free and curl-free conditions in vacuum work together to enforce this constraint — it's not just one Maxwell equation but their combination that forces the focusing and defocusing strengths to cancel out. Now I need to lay out the core argument cleanly, starting with the equations of motion. I need to reconsider the signs here. If k_x represents a focusing strength, then x'' = -k_x · x gives a restoring force, which means ∂(x'')/∂x = -k_x. Working backward from the Lorentz force equations, this gives me k_x = (q/p)∂B_y/∂x and k_y = -(q/p)∂B_x/∂y. Adding these together, the sum k_x + k_y relates to the curl of the magnetic field through (q/p) times the difference of those partial derivatives.

Now I'm realizing the constraint comes from ∇×B = 0 in vacuum, not directly from ∇·B = 0 as I initially thought. The z-component of the curl gives exactly ∂B_y/∂x - ∂B_x/∂y = 0, which is what appears in my sum. Different textbooks emphasize different Maxwell equations, but in the transverse plane where B_z = 0, the curl condition is what actually constrains the focusing strengths. ∂x - ∂B_x/∂y = 0 (in vacuum)

So the 2D transverse field is both divergence-free and curl-free — it's a potential field satisfying Laplace's equation. For linear fields like quadrupoles, the only solutions have opposite signs in x and y directions.

This connects to Earnshaw's theorem: you can't have a local extremum of magnetic field magnitude in current-free space, which means static fields can't provide stable equilibrium in all three dimensions at once. In 2D you can focus along one axis but not both simultaneously.

My earlier point to Reid was correct — in a current-free region where both ∇·B = 0 and ∇×B = 0 hold, the transverse field components satisfy Laplace's equation, which fundamentally constrains what field configurations are possible.

I should clarify for Reid that this isn't just about ∇·B = 0 alone, but rather the full set of Maxwell's equations in vacuum. The key insight is deriving how the focusing strengths must sum to zero — that's the real constraint preventing stable 3D magnetic confinement, and it's worth walking through that derivation cleanly to show why his question highlights an important distinction.

</details>

Good catch — the attribution to $\nabla \cdot \mathbf{B} = 0$ alone is actually a slight shorthand. The precise argument uses **both** Maxwell equations in vacuum. Here's the clean derivation.

---

**Equations of motion** (paraxial, $v \approx v_z \hat{z}$):

$$x'' = -\frac{q}{p} B_y(x,y), \qquad y'' = +\frac{q}{p} B_x(x,y)$$

Define the **focusing gradients** as the coefficients of the linear restoring/anti-restoring terms:

$$k_x \equiv \frac{q}{p}\frac{\partial B_y}{\partial x}, \qquad k_y \equiv -\frac{q}{p}\frac{\partial B_x}{\partial y}$$

so that $x'' = -k_x \cdot x$ (focusing if $k_x > 0$) and $y'' = -k_y \cdot y$. Now look at their **sum**:

$$k_x + k_y = \frac{q}{p}\left(\frac{\partial B_y}{\partial x} - \frac{\partial B_x}{\partial y}\right) = \frac{q}{p}\,(\nabla \times \mathbf{B})_z$$

In a current-free region, $\nabla \times \mathbf{B} = 0$, so:

$$\boxed{k_x + k_y = 0}$$

If $k_x = +k^2 > 0$ (focus in $x$), then $k_y = -k^2 < 0$ (defocus in $y$). **Unavoidably.**

---

So the direct constraint comes from $\nabla \times \mathbf{B} = 0$, not $\nabla \cdot \mathbf{B} = 0$. Where does $\nabla \cdot \mathbf{B} = 0$ enter? It's needed to establish that the 2D transverse field $\mathbf{B}_\perp$ satisfies **Laplace's equation** — the pair of conditions $\nabla \cdot \mathbf{B}_\perp = 0$ and $\nabla \times \mathbf{B}_\perp = 0$ make it a 2D potential field, which constrains the allowed multipole solutions (dipole, quadrupole, sextupole…) and ensures the focusing sum rule holds to all orders.

The underlying physics is **Earnshaw's theorem** generalized to magnetism: a static magnetic field in free space cannot have a local energy minimum in all three dimensions simultaneously. A particle *cannot* be stably trapped by a static $\mathbf{B}$ field alone — you always trade focusing in one plane for defocusing in another.

The original phrasing I used was common shorthand in accelerator physics texts (both Maxwell equations are in the background), but you're right to press on it — $\nabla \times \mathbf{B} = 0$ is doing the direct work.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8c31-dbe1-7118-85f5-b81947d712bb",
  "updated_at": "2026-04-14T13:33:46.918554Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d8c31-dbe1-7018-9b23-824ec095b252"
}
```

</details>

### 5. human — 2026-04-15T14:23:22.170174Z

What is FODO lattice?
Why we need it?
Why sometimes the beam appears to look like the this?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d9186-7197-7383-9bdd-b7edf8155c18",
  "updated_at": "2026-04-15T14:23:22.170174Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "019d9184-c7dc-7522-a9c7-91829916a472",
      "file_name": "1776262890609_image.png"
    }
  ],
  "parent_message_uuid": "019d8c31-dbe1-7118-85f5-b81947d712bb"
}
```

</details>

### 6. assistant — 2026-04-15T14:23:41.430167Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about the FODO lattice, why it's needed, and why the beam looks diverging/unstable at G=15 T/m, quad length=50 cm (as shown in the screenshot where the y-plane rays are clearly blowing up).

Let me explain all three questions clearly.

The image shows an unstable lattice — the y-plane (red) is clearly diverging. This happens when the phase advance per cell exceeds 180°, i.e., the stability condition μ = arccos(½ Tr M) is violated.

</details>

Great observation — and that screenshot is actually showing an **unstable** operating point. Let me address all three questions.

---

## What is a FODO lattice?

It's the simplest repeating magnetic cell in accelerator optics:

**QF — drift — QD — drift — (repeat)**

where QF focuses horizontally and defocuses vertically, QD does the opposite. One full QF-to-QF span is one **cell**. The entire RIBLL separator is a chain of such cells (plus bending dipoles).

---

## Why do we need it?

Without any focusing, a beam diverges freely — particles with even a tiny transverse angle walk away from the axis and are lost. A single quadrupole fixes one plane but ruins the other. The FODO cell solves this by **alternating the gradient sign** so that both planes see a net restoring effect over one full cell, even though each individual quad defocuses one of them.

The key quantity is the **phase advance per cell** $\mu$, governed by the stability condition derived from the one-turn transfer matrix $M$:

$$\left|\frac{1}{2}\,\text{Tr}(M)\right| \leq 1 \quad \Longleftrightarrow \quad 0° < \mu < 180°$$

Inside that window, both planes execute bounded oscillations (betatron oscillations). Outside it, the motion is exponentially unstable.

---

## Why does the beam look like that in your screenshot?

At **G = 15 T/m, L = 50 cm**, the stability condition is being **violated** — the phase advance per cell has exceeded 180°. Look at the two planes:

- **x (blue)**: barely stable, converging to a thin waist then holding
- **y (red)**: clearly **exponentially diverging** — each crossing gets larger, not smaller

This is the lattice going **unstable in y**. The QD is so strong at that length that the defocusing kick per cell overwhelms the net restoring effect.

In practice at RIBLL this means **beam loss** — particles hit the vacuum pipe wall within a few cells. The way to recover stability is to either reduce $G$, shorten the quads, or lengthen the drift spaces to reduce the phase advance back below 180°.

---

The stability boundary forms a **stability diagram** (sometimes called a "necktie diagram") in the space of QF and QD strengths. Your screenshot is sitting just outside one edge of that necktie. If you drag the gradient slider down to around 8–10 T/m at 50 cm length, you should see both envelopes become properly bounded again.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d9186-7197-70d9-beee-ea59d61f4e98",
  "updated_at": "2026-04-15T14:23:41.430167Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d9186-7197-7383-9bdd-b7edf8155c18"
}
```

</details>

### 7. human — 2026-04-15T14:28:32.561418Z

Can this pattern finally focus the beam? Will it always have a dimension diverged?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d918b-2e3f-7d6f-b418-5464e2e6b4aa",
  "updated_at": "2026-04-15T14:28:32.561418Z",
  "attachments": [
    {
      "file_name": "excerpt_from_previous_claude_message.txt",
      "file_size": 76,
      "file_type": "txt",
      "extracted_content": "where QF focuses horizontally and defocuses vertically, QD does the opposite"
    }
  ],
  "files": [
    {
      "file_uuid": "4ee12856-4574-4244-9fce-bfec8bb1c840",
      "file_name": "excerpt_from_previous_claude_message.txt"
    }
  ],
  "parent_message_uuid": "019d9186-7197-70d9-beee-ea59d61f4e98"
}
```

</details>

### 8. assistant — 2026-04-15T14:28:51.089383Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking a really good conceptual question: if QF focuses x but defocuses y, and QD focuses y but defocuses x, does the beam ever truly "focus" in both planes simultaneously? Or is one plane always diverging?

This gets at the heart of alternating-gradient focusing. The answer is nuanced:

1. In a FODO lattice, the beam is never simultaneously focused in both planes at the same point. There are waists in x and y at different longitudinal positions.
2. However, the beam envelope is BOUNDED - it oscillates but doesn't grow. This is what "stable" means.
3. A true point focus in both planes simultaneously requires a different configuration - like a triplet (QF-QD-QF or QD-QF-QD).


4. The real distinction is between "focused" as a point minimum versus "focused" as confined—FODO achieves the latter in both planes even though the x and y waists are spatially separated, while configurations like triplets or doublets can achieve simultaneous minima at intermediate focal planes like those used in RIBLL.

</details>

This is exactly the right question to ask, and the answer reveals an important distinction.

---

## The FODO lattice does NOT produce a simultaneous point focus in both planes

At any given longitudinal position $z$, the beam is **never at minimum size in both planes at once**. The x-waist and y-waist occur at **different locations** along the beamline — x is smallest near the center of QD, y is smallest near the center of QF. They are half a cell apart.

What the FODO *does* achieve is that both envelopes remain **bounded** — they oscillate but never grow. This is what "stable" means in the lattice sense. The beam is always *somewhere* between its maximum and minimum size in each plane, alternately.

---

## To get a true simultaneous focus, you need a triplet or doublet

At a **focal plane** (like the intermediate image plane at RIBLL where your momentum slits sit), the beam transport uses a **quadrupole triplet**: typically QF–QD–QF or QD–QF–QD with individually tuned strengths. By adjusting the three gradients, you can arrange for both the x and y waists to coincide at the same $z$ — a true point focus in both planes simultaneously.

This is precisely why RIBLL has triplets at the image points rather than FODO cells — you need both planes small and co-located at the slits to get clean $B\rho$ momentum selection. A FODO cell alone cannot deliver that.

---

## Summary of the distinction

| Configuration | Both planes bounded? | Simultaneous waist? |
|---|---|---|
| Single quad | No — one plane diverges | No |
| FODO lattice | **Yes** (if stable) | No — waists alternate |
| Triplet/doublet | Yes | **Yes** — tunable |

So the FODO is the right tool for **transporting** a beam over long distances without losing it. A triplet is the right tool at a **focal point** where you need both planes small simultaneously — for slits, targets, or detectors.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d918b-2e3f-7f8c-85d5-fb239c8f636c",
  "updated_at": "2026-04-15T14:28:51.089383Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d918b-2e3f-7d6f-b418-5464e2e6b4aa"
}
```

</details>
