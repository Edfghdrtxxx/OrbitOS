# Nuclear reaction mechanism timescale signatures

## Export metadata (verbatim)

```json
{
  "uuid": "443cd80d-88da-4077-acc3-a382b93062ba",
  "name": "Nuclear reaction mechanism timescale signatures",
  "summary": "**Conversation Overview**\n\nThe conversation focused on nuclear physics visualization, specifically the three nuclear reaction mechanisms — direct, pre-equilibrium, and compound nucleus — and their distinguishing characteristics. The person requested a series of progressive visualizations: first a structured table of the mechanisms with their timescale signatures (τ ~ 10⁻²² s, 10⁻²¹ s, 10⁻¹⁸ s respectively), then dσ/dΩ function curves plotted across the angular range 0°–180° for all three regimes with log/linear toggle capability, then a conceptual explanation of pre-equilibrium, and finally an explicit invocation of a concept-visualizer skill via slash command (`/concept-visualizer`).\n\nClaude produced interactive HTML widgets throughout: a polar-plot diagram with a logarithmic timescale axis for the three mechanisms, a Chart.js line chart showing the angular distribution curves (direct as forward-peaked with diffraction oscillations, pre-equilibrium as broad with forward bias, compound nucleus as near-flat with Legendre polynomial modulation), and an interactive exciton cascade stepper showing how successive nucleon-nucleon collisions create particle-hole pairs (2p–1h through 8p–7h) while the angular distribution evolves from forward-peaked to isotropic. The exciton cascade included an animated Fermi sea SVG, memory degradation progress bar, and per-stage physics commentary. For the concept-visualizer invocation, after the visualizer tool became unavailable mid-session, Claude delivered a self-contained HTML file using a billiard-break metaphor: the cue ball as projectile, the rack as the Fermi sea, and the timing/angle of ball escape mapping onto direct, pre-equilibrium, and compound-nucleus regimes across four clickable animated panels.\n\nThe physics discussion was technically detailed throughout, covering the Griffin exciton model, Blann's hybrid formulation, the master equation for exciton population evolution, the Ericson level density parameter, equilibrium exciton number scaling as √(gE*), the Kikuchi-Kawai angular distribution formula, and connections to modern codes (EMPIRE, TALYS, GEMINI++). Claude referenced the person's work context at HIRFL-RIBLL using Bρ-ΔE-TOF fragment identification, noting that pre-equilibrium effects would manifest as anomalies at mid-rapidity in fragment distributions and hard spectral tails above the compound-nucleus evaporation peak. Claude also flagged metaphor limitations (Pauli blocking, quantum barrier penetration, in-medium NN cross sections) and noted scope boundaries of the exciton model for composite projectiles versus heavy-ion reactions requiring BUU/QMD/AMD transport approaches. A minor language correction was offered: \"the concept of pre-equilibrium\" with the preposition \"of\" is idiomatic, and \"pre-equilibrium\" should be lowercase mid-sentence.",
  "created_at": "2026-04-11T09:27:24.203753Z",
  "updated_at": "2026-04-22T14:53:42.754338Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-11T09:27:25.345915Z

Please visualize the subsequent content:

Each mechanism has a timescale signature:
MechanismTimescaleSignatureDirect~10⁻²² sForward-peaked dσ/dΩd\sigma/d\Omega dσ/dΩ, specific final states Pre-equilibrium~10⁻²¹ sIntermediate angles, continuumCompound nucleus~10⁻¹⁸ sIsotropic, Hauser-Feshbach statistics
The angular distribution shape immediately tells you which regime dominates.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7bde-0f01-733f-9bcf-5939b45e02e5",
  "updated_at": "2026-04-11T09:27:25.345915Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-11T09:28:24.536200Z

 

<details>
<summary>Thinking (verbatim)</summary>

Let me read the vocabulary-visualization or concept-visualizer skill, but actually this is about physics visualization. Let me read the concept-visualizer skill.

Actually, the user wants to visualize a table about nuclear reaction mechanisms and their timescale signatures. Let me read the frontend-design skill for a good visualization.

Let me just use the visualizer directly - it's a clear data visualization task.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T09:27:29.279924Z",
  "stop_timestamp": "2026-04-11T09:27:29.279924Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01FD2VRsKgjd2CnrRLZ9RcEQ",
  "name": "visualize:read_me",
  "input": {
    "modules": [
      "chart",
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
  "tool_use_id": "toolu_01FD2VRsKgjd2CnrRLZ9RcEQ",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "# Imagine — Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` — SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` — UI mockups, forms, cards, dashboards\n- `interactive` — interactive explainers with controls\n- `chart` — charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` — illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget — hard limits:**\n- Box subtitles: ≤5 words. Detail goes in click-through (`sendPrompt`) or the prose below — not the box.\n- Colors: ≤2 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: ≤4 boxes at full width (~140px each). 5+ boxes → shrink to ≤110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing \"click to learn more\" in prose, the diagram itself must ACTUALLY be sparse. Don't promise brevity then front-load everything.\n\n**Accessibility:** For HTML widgets, begin with a visually-hidden `<h2 class=\"sr-only\">` containing a one-sentence summary of the visualization for screen-reader users. (SVG widgets use `role=\"img\"` with `<title>` and `<desc>` instead — see SVG setup.)\n\nYou create rich visual content — SVG diagrams/illustrations and HTML interactive widgets — that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn't notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** — All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks \"explain X\", write the explanation in your response and use the tool only for the visual that accompanies it. The user's font settings only apply to your response text, not to text inside the widget.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) → content HTML → `<script>` last.\n- **SVG**: `<defs>` (markers) → visual elements immediately.\n- Prefer inline `style=\"...\"` over `<style>` blocks — inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules — that's fine, but don't bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji — use CSS shapes or SVG paths\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only — host provides the bg)\n- **Typography**: The default font is Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-serif)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px — all `font-weight: 500`. Heading color is pre-set to `var(--color-text-primary)` — don't override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 — they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally — no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` — the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style=\"min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;\">` and put the modal inside — it's a faux viewport that actually contributes layout height.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` — just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text — never plain black or generic gray.\n- **Corners**: use `border-radius: var(--border-radius-md)` (or `-lg` for cards) in HTML. In SVG, `rx=\"4\"` is the default — larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** — if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** — see Philosophy above.\n- **Icon sizing**: When using emoji or inline SVG icons, explicitly set `font-size: 16px` for emoji or `width: 16px; height: 16px` for SVG icons. Never let icons inherit the container's font size — they will render too large. For larger decorative icons, use 24px max.\n- No tabs, carousels, or `display: none` sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)\n- No nested scrolling — auto-fit height.\n- Scripts execute after streaming — load libraries via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` (UMD globals), then use the global in a plain `<script>` that follows.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`. All other origins are blocked by the sandbox — the request silently fails.\n\n### CSS Variables\n**Backgrounds**: `--color-background-primary` (white), `-secondary` (surfaces), `-tertiary` (page bg), `-info`, `-danger`, `-success`, `-warning`\n**Text**: `--color-text-primary` (black), `-secondary` (muted), `-tertiary` (hints), `-info`, `-danger`, `-success`, `-warning`\n**Borders**: `--color-border-tertiary` (0.15α, default), `-secondary` (0.3α, hover), `-primary` (0.4α), semantic `-info/-danger/-success/-warning`\n**Typography**: `--font-sans`, `--font-serif`, `--font-mono`\n**Layout**: `--border-radius-md` (8px), `--border-radius-lg` (12px — preferred for most components), `--border-radius-xl` (16px)\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** — every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes — they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) — never omit fill or use `fill=\"inherit\"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--color-text-primary, --color-text-secondary) for text. Never hardcode colors like color: #333 — invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user's next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href=\"https://...\">` just works — clicks are intercepted and open the host's link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n\n\n## UI components\n\n### Aesthetic\nFlat, clean, white surfaces. Minimal 0.5px borders. Generous whitespace. No gradients, no shadows (except functional focus rings). Everything should feel native to claude.ai — like it belongs on the page, not embedded from somewhere else.\n\n### Tokens\n- Borders: always `0.5px solid var(--color-border-tertiary)` (or `-secondary` for emphasis)\n- Corner radius: `var(--border-radius-md)` for most elements, `var(--border-radius-lg)` for cards\n- Cards: white bg (`var(--color-background-primary)`), 0.5px border, radius-lg, padding 1rem 1.25rem\n- Form elements (input, select, textarea, button, range slider) are pre-styled — write bare tags. Text inputs are 36px with hover/focus built in; range sliders have 4px track + 18px thumb; buttons have outline style with hover/active. Only add inline styles to override (e.g., different width).\n- Buttons: pre-styled with transparent bg, 0.5px border-secondary, hover bg-secondary, active scale(0.98). If it triggers sendPrompt, append a ↗ arrow.\n- **Round every displayed number.** JS float math leaks artifacts — `0.1 + 0.2` gives `0.30000000000000004`, `7 * 1.1` gives `7.700000000000001`. Any number that reaches the screen (slider readouts, stat card values, axis labels, data-point labels, tooltips, computed totals) must go through `Math.round()`, `.toFixed(n)`, or `Intl.NumberFormat`. Pick the precision that makes sense for the context — integers for counts, 1–2 decimals for percentages, `toLocaleString()` for currency. For range sliders, also set `step=\"1\"` (or step=\"0.1\" etc.) so the input itself emits round values.\n- Spacing: use rem for vertical rhythm (1rem, 1.5rem, 2rem), px for component-internal gaps (8px, 12px, 16px)\n- Box-shadows: none, except `box-shadow: 0 0 0 Npx` focus rings on inputs\n\n### Metric cards\nFor summary numbers (revenue, count, percentage) — surface card with muted 13px label above, 24px/500 number below. `background: var(--color-background-secondary)`, no border, `border-radius: var(--border-radius-md)`, padding 1rem. Use in grids of 2-4 with `gap: 12px`. Distinct from raised cards (which have white bg + border).\n\n### Layout\n- Editorial (explanatory content): no card wrapper, prose flows naturally\n- Card (bounded objects like a contact record, receipt): single raised card wraps the whole thing\n- Don't put tables here — output them as markdown in your response text\n\n**Grid overflow:** `grid-template-columns: 1fr` has `min-width: auto` by default — children with large min-content push the column past the container. Use `minmax(0, 1fr)` to clamp.\n\n**Table overflow:** Tables with many columns auto-expand past `width: 100%` if cell contents exceed it. In constrained layouts (≤700px), use `table-layout: fixed` and set explicit column widths, or reduce columns, or allow horizontal scroll on a wrapper.\n\n### Mockup presentation\nContained mockups — mobile screens, chat threads, single cards, modals, small UI components — should sit on a background surface (`var(--color-background-secondary)` container with `border-radius: var(--border-radius-lg)` and padding, or a device frame) so they don't float naked on the widget canvas. Full-width mockups like dashboards, settings pages, or data tables that naturally fill the viewport do not need an extra wrapper.\n\n### 1. Interactive explainer — learn how something works\n*\"Explain how compound interest works\" / \"Teach me about sorting algorithms\"*\n\nUse HTML for the interactive controls — sliders, buttons, live state displays, charts. Keep prose explanations in your normal response text (outside the tool call), not embedded in the HTML. No card wrapper. Whitespace is the container.\n\n```html\n<div style=\"display: flex; align-items: center; gap: 12px; margin: 0 0 1.5rem;\">\n  <label style=\"font-size: 14px; color: var(--color-text-secondary);\">Years</label>\n  <input type=\"range\" min=\"1\" max=\"40\" value=\"20\" id=\"years\" style=\"flex: 1;\" />\n  <span style=\"font-size: 14px; font-weight: 500; min-width: 24px;\" id=\"years-out\">20</span>\n</div>\n\n<div style=\"display: flex; align-items: baseline; gap: 8px; margin: 0 0 1.5rem;\">\n  <span style=\"font-size: 14px; color: var(--color-text-secondary);\">£1,000 →</span>\n  <span style=\"font-size: 24px; font-weight: 500;\" id=\"result\">£3,870</span>\n</div>\n\n<div style=\"margin: 2rem 0; position: relative; height: 240px;\">\n  <canvas id=\"chart\"></canvas>\n</div>\n```\n\nUse `sendPrompt()` to let users ask follow-ups: `sendPrompt('What if I increase the rate to 10%?')`\n\n### 2. Compare options — decision making\n*\"Compare pricing and features of these products\" / \"Help me choose between React and Vue\"*\n\nUse HTML. Side-by-side card grid for options. Highlight differences with semantic colors. Interactive elements for filtering or weighting.\n\n- Use `repeat(auto-fit, minmax(160px, 1fr))` for responsive columns\n- Each option in a card. Use badges for key differentiators.\n- Add `sendPrompt()` buttons: `sendPrompt('Tell me more about the Pro plan')`\n- Don't put comparison tables inside this tool — output them as regular markdown tables in your response text instead. The tool is for the visual card grid only.\n- When one option is recommended or \"most popular\", accent its card with `border: 2px solid var(--color-border-info)` only (2px is deliberate — the only exception to the 0.5px rule, used to accent featured items) — keep the same background and border as the other cards. Add a small badge (e.g. \"Most popular\") above or inside the card header using `background: var(--color-background-info); color: var(--color-text-info); font-size: 12px; padding: 4px 12px; border-radius: var(--border-radius-md)`.\n\n### 3. Data record — bounded UI object\n*\"Show me a Salesforce contact card\" / \"Create a receipt for this order\"*\n\nUse HTML. Wrap the entire thing in a single raised card. All content is sans-serif since it's pure UI. Use an avatar/initials circle for people (see example below).\n\n```html\n<div style=\"background: var(--color-background-primary); border-radius: var(--border-radius-lg); border: 0.5px solid var(--color-border-tertiary); padding: 1rem 1.25rem;\">\n  <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 16px;\">\n    <div style=\"width: 44px; height: 44px; border-radius: 50%; background: var(--color-background-info); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 14px; color: var(--color-text-info);\">MR</div>\n    <div>\n      <p style=\"font-weight: 500; font-size: 15px; margin: 0;\">Maya Rodriguez</p>\n      <p style=\"font-size: 13px; color: var(--color-text-secondary); margin: 0;\">VP of Engineering</p>\n    </div>\n  </div>\n  <div style=\"border-top: 0.5px solid var(--color-border-tertiary); padding-top: 12px;\">\n    <table style=\"width: 100%; font-size: 13px;\">\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Email</td><td style=\"text-align: right; padding: 4px 0; color: var(--color-text-info);\">m.rodriguez@acme.com</td></tr>\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Phone</td><td style=\"text-align: right; padding: 4px 0;\">+1 (415) 555-0172</td></tr>\n    </table>\n  </div>\n</div>\n```\n\n\n## Color palette\n\n9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.\n\n| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |\n|-------|------|------|-----|-----|-----|-----|-----|------|\n| `c-purple` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |\n| `c-teal` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |\n| `c-coral` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |\n| `c-pink` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |\n| `c-gray` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |\n| `c-blue` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |\n| `c-green` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |\n| `c-amber` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |\n| `c-red` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |\n\n**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:\n- Group nodes by **category** — all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.\n- For illustrative diagrams, map colors to **physical properties** — warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.\n- Use **gray for neutral/structural** nodes (start, end, generic steps).\n- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.\n- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept — those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)\n\n**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --color-text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** — title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.\n\n**Light/dark mode quick pick** — use only stops from the table, never off-table hex values:\n- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**\n- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**\n- Apply `c-{ramp}` to a `<g>` wrapping shape+text, or directly to a `<rect>`/`<circle>`/`<ellipse>`. Never to `<path>` — paths don't get ramp fill. For colored connector strokes use inline `stroke=\"#...\"` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.\n\nFor status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.\n\n\n\n## Charts (Chart.js)\n```html\n<div style=\"position: relative; width: 100%; height: 300px;\">\n  <canvas id=\"myChart\" role=\"img\" aria-label=\"Bar chart of quarterly revenue, Q1 through Q4\">Quarterly revenue: Q1 12, Q2 19, Q3 8, Q4 15.</canvas>\n</div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js\"></script>\n<script>\n  new Chart(document.getElementById('myChart'), {\n    type: 'bar',\n    data: { labels: ['Q1','Q2','Q3','Q4'], datasets: [{ label: 'Revenue', data: [12,19,8,15] }] },\n    options: { responsive: true, maintainAspectRatio: false }\n  });\n</script>\n```\n\n**Chart.js rules**:\n- Every `<canvas>` MUST have `role=\"img\"` and a descriptive `aria-label` summarizing what the chart shows, plus fallback text between the tags. Without these the chart is invisible to screen readers.\n- Never rely on color alone to distinguish data series. Pair each color with a secondary visual cue — dash pattern for lines, marker shape for scatter, fill pattern/hatching for bars and pie slices — and show both color and cue in the legend.\n- Canvas cannot resolve CSS variables. Use hardcoded hex or Chart.js defaults.\n- Wrap `<canvas>` in `<div>` with explicit `height` and `position: relative`.\n- **Canvas sizing**: set height ONLY on the wrapper div, never on the canvas element itself. Use position: relative on the wrapper and responsive: true, maintainAspectRatio: false in Chart.js options. Never set CSS height directly on canvas — this causes wrong dimensions, especially for horizontal bar charts.\n- For horizontal bar charts: wrapper div height should be at least (number_of_bars * 40) + 80 pixels.\n- Load UMD build via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` — sets `window.Chart` global. Follow with plain `<script>` (no `type=\"module\"`).\n- Multiple charts: use unique IDs (`myChart1`, `myChart2`). Each gets its own canvas+div pair.\n- For bubble and scatter charts: bubble radii extend past their center points, so points near axis boundaries get clipped. Pad the scale range — set `scales.y.min` and `scales.y.max` ~10% beyond your data range (same for x). Or use `layout: { padding: 20 }` as a blunt fallback.\n- Chart.js auto-skips x-axis labels when they'd overlap. If you have ≤12 categories and need all labels visible (waterfall, monthly series), set `scales.x.ticks: { autoSkip: false, maxRotation: 45 }` — missing labels make bars unidentifiable.\n\n**Number formatting**: negative values are `-$5M` not `$-5M` — sign before currency symbol. Use a formatter: `(v) => (v < 0 ? '-' : '') + '$' + Math.abs(v) + 'M'`.\n\n**Legends** — always disable Chart.js default and build custom HTML. The default uses round dots and no values; custom HTML gives small squares, tight spacing, and percentages:\n\n```js\nplugins: { legend: { display: false } }\n```\n\n```html\n<div style=\"display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 8px; font-size: 12px; color: var(--color-text-secondary);\">\n  <span style=\"display: flex; align-items: center; gap: 4px;\"><span style=\"width: 10px; height: 10px; border-radius: 2px; background: #3266ad;\"></span>Chrome 65%</span>\n  <span style=\"display: flex; align-items: center; gap: 4px;\"><span style=\"width: 10px; height: 10px; border-radius: 2px; background: #73726c;\"></span>Safari 18%</span>\n</div>\n```\n\nInclude the value/percentage in each label when the data is categorical (pie, donut, single-series bar). Position the legend above the chart (`margin-bottom`) or below (`margin-top`) — not inside the canvas.\n\n**Dashboard layout** — wrap summary numbers in metric cards (see UI fragment) above the chart. Chart canvas flows below without a card wrapper. Use `sendPrompt()` for drill-down: `sendPrompt('Break down Q4 by region')`.\n\n## Geographic maps (D3 choropleth)\n\n**Never invent coordinates** — no hand-drawn SVG paths, no inline GeoJSON. Fetch real topology or don't draw a map.\n\nThree topology sources on jsdelivr. CSP only allows `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com` — do NOT try `raw.githubusercontent.com` or other hosts, the fetch will silently fail. Other package names like `uk-atlas` don't exist (404).\n- US states: `https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json` → `d3.geoAlbersUsa()`, object key `.states`\n- World countries: `https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json` → `d3.geoNaturalEarth1()`, object key `.countries`\n- Per-country subdivisions: `https://cdn.jsdelivr.net/npm/datamaps@0.5.10/src/js/data/{iso3}.topo.json` (lowercase alpha-3: `deu`, `jpn`, `gbr`...), object key `.{iso3}`\n\n**Before writing the widget, web_fetch the topology URL you'll use.** The first ~1KB shows the real feature `id` and `properties.name` values — key your data on those, don't guess. Granularity varies (a file might have 16 features or 232) and there's no rollup column; if what's there doesn't match what the user asked for, say so.\n\n```html\n<div id=\"map\" style=\"width: 100%;\"></div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js\"></script>\n<script>\nconst values = { 'California': 39, 'Texas': 30, 'New York': 19 /* ...keyed on what you saw in web_fetch */ };\nconst isDark = matchMedia('(prefers-color-scheme: dark)').matches;\nconst color = d3.scaleQuantize([0, 40], isDark ? d3.schemeBlues[5].slice().reverse() : d3.schemeBlues[5]);\nconst svg = d3.select('#map').append('svg').attr('viewBox', '0 0 900 560').attr('width', '100%');\nconst path = d3.geoPath(d3.geoAlbersUsa().scale(1100).translate([450, 280]));\nd3.json('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json').then(us => {\n  svg.selectAll('path').data(topojson.feature(us, us.objects.states).features).join('path')\n    .attr('d', path).attr('stroke', isDark ? 'rgba(255,255,255,.15)' : '#fff')\n    .attr('fill', d => color(values[d.properties.name] ?? 0));\n});\n</script>\n```\n\n\n## SVG setup\n\n**ViewBox safety checklist** — before finalizing any SVG, verify:\n1. Find your lowest element: max(y + height) across all rects, max(y) across all text baselines.\n2. Set viewBox height = that value + 40px buffer.\n3. Find your rightmost element: max(x + width) across all rects. All content must stay within x=0 to x=680.\n4. For text with text-anchor=\"end\", the text extends LEFT from x. If x=118 and text is 200px wide, it starts at x=-82 — outside the viewBox. Increase x or use text-anchor=\"start\".\n5. Never use negative x or y coordinates. The viewBox starts at 0,0.\n6. Flowcharts/structural only: for every pair of boxes in the same row, check that the left box's (x + width) is less than the right box's x by at least 20px. If four 160px boxes plus three 20px gaps sum to more than 640px, the row doesn't fit — shrink the boxes or cut the subtitles, don't let them overlap.\n\n**SVG setup**: `<svg width=\"100%\" viewBox=\"0 0 680 H\" role=\"img\"><title>…</title><desc>…</desc>…` — 680px wide, flexible height. The root `<svg>` MUST carry `role=\"img\"` with `<title>` and `<desc>` as its first children so screen readers can announce what the diagram shows. Set H to fit content tightly — the last element's bottom edge + 40px padding. Don't leave excess empty space below the content. Safe area: x=40 to x=640, y=40 to y=(H-40). Background transparent. **Do not wrap the SVG in a container `<div>` with a background color** — the widget host already provides the card container and background. Output the raw `<svg>` element directly.\n\n**The 680 in viewBox is load-bearing — do not change it.** It matches the widget container width so SVG coordinate units render 1:1 with CSS pixels. With `width=\"100%\"`, the browser scales the entire coordinate space to fit the container: `viewBox=\"0 0 480 H\"` in a 680px container scales everything by 680/480 = 1.42×, so your `class=\"th\"` 14px text renders at ~20px. The font calibration table below and all \"text fits in box\" math assume 1:1. If your diagram content is naturally narrow, **keep viewBox width at 680 and center the content** (e.g. content spans x=180..500) — do not shrink the viewBox to hug the content. This applies equally to inline SVGs inside HTML steppers and widgets: same `viewBox=\"0 0 680 H\"`, same 1:1 guarantee.\n\n**viewBox height:** After layout, find max_y (bottom-most point of any shape, including text baselines + 4px descent). Set viewBox height = max_y + 20. Don't guess.\n\n**text-anchor='end' at x<60 is risky** — the longest label will extend left past x=0. Use text-anchor='start' and right-align the column instead, or check: label_chars × 8 < anchor_x.\n\n**One SVG per tool call** — each call must contain exactly one <svg> element. Never leave an abandoned or partial SVG in the output. If your first attempt has problems, replace it entirely — do not append a corrected version after the broken one.\n\n**Style rules for all diagrams**:\n- Every `<text>` element must carry one of the pre-built classes (`t`, `ts`, `th`). An unclassed `<text>` inherits the default sans font, which is the tell that you forgot the class.\n- Use only two font sizes: 14px for node/region labels (class=\"t\" or \"th\"), 12px for subtitles, descriptions, and arrow labels (class=\"ts\"). No other sizes.\n- No decorative step numbers, large numbering, or oversized headings outside boxes.\n- No icons or illustrations inside boxes — text only. (Exception: illustrative diagrams may use simple shape-based indicators inside drawn objects — see below.)\n- Sentence case on all labels.\n\n**Font size calibration for diagram text labels** - Here's csv table to give you better sense of the Anthropic Sans font rendering width:\n```csv\ntext, chars length, font-weight, font-size, rendered width\nAuthentication Service, chars: 22, font-weight: 500, font-size: 14px, width: 167px\nBackground Job Processor, chars: 24, font-weight: 500, font-size: 14px, width: 201px\nDetects and validates incoming tokens, chars: 37, font-weight: 400, font-size: 14px, width: 279px\nforwards request to, chars: 19, font-weight: 400, font-size: 12px, width: 123px\nデータベースサーバー接続, chars: 12, font-weight: 400, font-size: 14px, width: 181px\n```\n\nBefore placing text in a box, check: does (text width + 2×padding) fit the container?\n\n**SVG `<text>` never auto-wraps.** Every line break needs an explicit `<tspan x=\"...\" dy=\"1.2em\">`. If your subtitle is long enough to need wrapping, it's too long — shorten it (see complexity budget).\n\n**Example check**: You want to put \"Glucose (C₆H₁₂O₆)\" in a rounded rect. The text is 20 characters at 14px ≈ 180px wide. Add 2×24px padding = 228px minimum box width. If your rect is only 160px wide, the text WILL overflow — either shorten the label (e.g. just \"Glucose\") or widen the box. Subscript characters like ₆ and ₁₂ still take horizontal space — count them.\n\n**Pre-built classes** (already loaded in SVG widget):\n- `class=\"t\"` = sans 14px primary, `class=\"ts\"` = sans 12px secondary, `class=\"th\"` = sans 14px medium (500)\n- `class=\"box\"` = neutral rect (bg-secondary fill, border stroke)\n- `class=\"node\"` = clickable group with hover effect (cursor pointer, slight dim on hover)\n- `class=\"arr\"` = arrow line (1.5px, open chevron head)\n- `class=\"leader\"` = dashed leader line (tertiary stroke, 0.5px, dashed)\n- `class=\"c-{ramp}\"` = colored node (c-blue, c-teal, c-amber, c-green, c-red, c-purple, c-coral, c-pink, c-gray). Apply to `<g>` or shape element (rect/circle/ellipse), NOT to paths. Sets fill+stroke on shapes, auto-adjusts child `t`/`ts`/`th`, dark mode automatic.\n\n**c-{ramp} nesting:** These classes use direct-child selectors (`>`). Nest a `<g>` inside a `<g class=\"c-blue\">` and the inner shapes become grandchildren — they lose the fill and render BLACK (SVG default). Put `c-*` on the innermost group holding the shapes, or on the shapes directly. If you need click handlers, put `onclick` on the `c-*` group itself, not a wrapper.\n\n- Short aliases: `var(--p)`, `var(--s)`, `var(--t)`, `var(--bg2)`, `var(--b)`\n- Arrow marker: always include this `<defs>` at the start of every SVG:\n  `<defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker></defs>`\n  Then use `marker-end=\"url(#arrow)\"` on lines. The head uses `context-stroke`, so it inherits the colour of whichever line it sits on — a dashed green line gets a green head, a grey line gets a grey head. Never a colour mismatch. Do not add filters or extra markers to `<defs>`. `<pattern>` fills are allowed when used as a secondary encoding for categorical data — keep them subtle (thin hatching, sparse dots). Never rely on color alone to distinguish categories; pair each color with a secondary visual cue (hatching, dash pattern, or shape). Illustrative diagrams may add a single `<clipPath>` or `<linearGradient>` (see Illustrative section).\n\n**Minimize standalone labels.** Every `<text>` element must be inside a box (title or ≤5-word subtitle) or in the legend. Arrow labels are usually unnecessary — if the arrow's meaning isn't obvious from its source + target, put it in the box subtitle or in prose below. Labels floating in space collide with things and are ambiguous.\n\n**Stroke width:** Use 0.5px strokes for diagram borders and edges — not 1px or 2px. Thin strokes feel more refined.\n\n**Connector paths need `fill=\"none\"`.** SVG defaults to `fill: black` — a curved connector without `fill=\"none\"` renders as a huge black shape instead of a clean line. Every `<path>` or `<polyline>` used as a connector/arrow MUST have `fill=\"none\"`. Only set fill on shapes meant to be filled (rects, circles, polygons).\n\n**Rect rounding:** `rx=\"4\"` for subtle corners. `rx=\"8\"` max for emphasized rounding. `rx` ≥ half the height = pill shape — deliberate only.\n\n**Schematic containers use dashed rects with a label.** Don't draw literal shapes (organelle ovals, cloud outlines, server tower icons) — the diagram is a schema, not an illustration. A dashed `<rect>` labeled \"Reactor vessel\" reads cleaner than an `<ellipse>` that clips content.\n\n**Lines stop at component edges.** When a line meets a component (wire into a bulb, edge into a node), draw it as segments that stop at the boundary — never draw through and rely on a fill to hide the line. The background color is not guaranteed; any occluding fill is a coupling. Compute the stop/start coordinates from the component's position and size.\n\n**Physical-color scenes (sky, water, grass, skin, materials):** Use ALL hardcoded hex — never mix with `c-*` theme classes. The scene should not invert in dark mode. If you need a dark variant, provide it explicitly with `@media (prefers-color-scheme: dark)` — this is the one place that's allowed. Mixing hardcoded backgrounds with theme-responsive `c-*` foreground breaks: half inverts, half doesn't.\n\n**No rotated text**. `<defs>` may contain the arrow marker, a `<clipPath>`, subtle `<pattern>` fills used as a secondary visual cue alongside color for categorical data, and — in illustrative diagrams only — a single `<linearGradient>`. Nothing else: no filters, no extra markers.\n\n\n## Diagram types\n*\"Explain how compound interest works\" / \"How does a process scheduler work\"*\n\n**Two rules that cause most diagram failures — check these before writing each arrow and each box:**\n1. **Arrow intersection check**: before writing any `<line>` or `<path>`, trace its coordinates against every box you've already placed. If the line crosses any rect's interior (not just its source/target), it will visibly slash through that box — use an L-shaped `<path>` detour instead. This applies to arrows crossing labels too.\n2. **Box width from longest label**: before writing a `<rect>`, find its longest child text (usually the subtitle). `rect_width = max(title_chars × 8, subtitle_chars × 7) + 24`. A 100px-wide box holds at most a 10-char subtitle. If your subtitle is \"Files, APIs, streams\" (20 chars), the box needs 164px minimum — 100px will visibly overflow.\n\n**Tier packing:** Compute total width BEFORE placing. Example — 4 pub/sub consumer boxes:\n- WRONG: x=40,160,260,360 w=160 → 40-60px overlaps (4×160=640 > 480 available)\n- RIGHT: x=50,200,350,500 w=130 gap=20 → fits (4×130 + 3×20 = 580 ≤ 590 safe width; right edge at 630 ≤ 640)\nWork bottom-up for trees: size leaf tier first, parent width ≥ sum of children.\n\n**Diagrams are the hardest use case** — they have the highest failure rate due to precise coordinate math. Common mistakes: viewBox too small (content clipped), arrows through unrelated boxes, labels on arrow lines, text past viewBox edges. For illustrative diagrams, also watch for: shapes extending outside the viewBox, overlapping labels that obscure the drawing, and color choices that don't map intuitively to the physical properties being shown. Double-check coordinates before finalizing.\n\nUse SVG for diagrams. The widget automatically wraps SVG output in a card.\n\n**Pick the right diagram type.** The decision is about *intent*, not subject matter. Ask: is the user trying to *document* this, or *understand* it?\n\n**Reference diagrams** — the user wants a map they can point at. Precision matters more than feeling. Boxes, labels, arrows, containment. These are the diagrams you'd find in documentation.\n- **Flowchart** — steps in sequence, decisions branching, data transforming. Good for: approval workflows, request lifecycles, build pipelines, \"what happens when I click submit\". Trigger phrases: *\"walk me through the process\"*, *\"what are the steps\"*, *\"what's the flow\"*.\n- **Structural diagram** — things inside other things. Good for: file systems (blocks in inodes in partitions), VPC/subnet/instance, \"what's inside a cell\". Trigger phrases: *\"what's the architecture\"*, *\"how is this organised\"*, *\"where does X live\"*.\n\n**Intuition diagrams** — the user wants to *feel* how something works. The goal isn't a correct map, it's the right mental model. These should look nothing like a flowchart. The subject doesn't need a physical form — it needs a *visual metaphor*.\n- **Illustrative diagram** — draw the mechanism. Physical things get cross-sections (water heaters, engines, lungs). Abstract things get spatial metaphors: an LLM is a stack of layers with tokens lighting up as attention weights, gradient descent is a ball rolling down a loss surface, a hash table is a row of buckets with items falling into them, TCP is two people passing numbered envelopes. Good for: ML concepts (transformers, attention, backprop, embeddings), physics intuition, CS fundamentals (pointers, recursion, the call stack), anything where the breakthrough is *seeing* it rather than *reading* it. Trigger phrases: *\"how does X actually work\"*, *\"explain X\"*, *\"I don't get X\"*, *\"give me an intuition for X\"*.\n\n**Route on the verb, not the noun.** Same subject, different diagram depending on what was asked:\n\n| User says | Type | What to draw |\n|---|---|---|\n| \"how do LLMs work\" | **Illustrative** | Token row, stacked layer slabs, attention threads glowing warm between tokens. Go interactive if you can. |\n| \"transformer architecture\" | Structural | Labelled boxes: embedding, attention heads, FFN, layer norm. |\n| \"how does attention work\" | **Illustrative** | One query token, a fan of lines to every key, line opacity = weight. |\n| \"how does gradient descent work\" | **Illustrative** | Contour surface, a ball, a trail of steps. Slider for learning rate. |\n| \"what are the training steps\" | Flowchart | Forward → loss → backward → update. Boxes and arrows. |\n| \"how does TCP work\" | **Illustrative** | Two endpoints, numbered packets in flight, an ACK returning. |\n| \"TCP handshake sequence\" | Flowchart | SYN → SYN-ACK → ACK. Three boxes. |\n| \"explain the Krebs cycle\" / \"how does the event loop work\" | **HTML stepper** | Click through stages. Never a ring. |\n| \"how does a hash map work\" | **Illustrative** | Key falling through a funnel into one of N buckets. |\n| \"draw the database schema\" / \"show me the ERD\" | **mermaid.js** | `erDiagram` syntax. Not SVG. |\n\nThe illustrative route is the default for *\"how does X work\"* with no further qualification. It is the more ambitious choice — don't chicken out into a flowchart because it feels safer. Claude draws these well.\n\nDon't mix families in one diagram. If you need both, draw the intuition version first (build the mental model), then the reference version (fill in the precise labels) as a second tool call with prose between.\n\n**For complex topics, use multiple SVG calls** — break the explanation into a series of smaller diagrams rather than one dense diagram. Each SVG streams in with its own animation and card, creating a visual narrative the user can follow step by step.\n\n**Always add prose between diagrams** — never stack multiple SVG calls back-to-back without text. Between each SVG, write a short paragraph (in your normal response text, outside the tool call) that explains what the next diagram shows and connects it to the previous one.\n\n**Promise only what you deliver** — if your response text says \"here are three diagrams\", you must include all three tool calls. Never promise a follow-up diagram and omit it. If you can only fit one diagram, adjust your text to match. One complete diagram is better than three promised and one delivered.\n\n#### Flowchart\n\nFor sequential processes, cause-and-effect, decision trees.\n\n**Planning**: Size boxes to fit their text generously. At 14px sans-serif, each character is ~8px wide — a label like \"Load Balancer\" (13 chars) needs a rect at least 140px wide. When in doubt, make boxes wider and leave more space between them. Cramped diagrams are the most common failure mode.\n\n**Special characters are wider**: Chemical formulas (C₆H₁₂O₆), math notation (∑, ∫, √), subscripts/superscripts via <tspan> with dy/baseline-shift, and Unicode symbols all render wider than plain Latin characters. For labels containing formulas or special notation, add 30-50% extra width to your estimate. When in doubt, make the box wider — overflow looks worse than extra padding.\n\n**Spacing**: 60px minimum between boxes, 24px padding inside boxes, 12px between text and edges. Leave 10px gap between arrowheads and box edges. Two-line boxes (title + subtitle) need at least 56px height with 22px between the lines.\n\n**Vertical text placement**: Every `<text>` inside a box needs `dominant-baseline=\"central\"`, with y set to the *centre* of the slot it sits in. Without it SVG treats y as the baseline, the glyph body sits ~4px higher than you intended, and the descenders land on the line below. Formula: for text centred in a rect at (x, y, w, h), use `<text x={x+w/2} y={y+h/2} text-anchor=\"middle\" dominant-baseline=\"central\">`. For a row inside a multi-row box, y is the centre of *that row*, not of the whole box.\n\n**Layout**: Prefer single-direction flows (all top-down or all left-right). Keep diagrams simple — max 4-5 nodes per diagram. The widget is narrow (~680px) so complex layouts break.\n\n**When the prompt itself is over budget**: if the user lists 6+ components (\"draw me auth, products, orders, payments, gateway, queue\"), don't draw all of them in one pass — you'll get overlapping boxes and arrows through text, every time. Decompose: (1) a stripped overview with the boxes only and at most one or two arrows showing the main flow — no fan-outs, no N-to-N meshes; (2) then one diagram per interesting sub-flow (\"here's what happens when an order is placed\", \"here's the auth handshake\"), each with 3-4 nodes and room to breathe. Count the nouns before you draw. The user asked for completeness — give it to them across several diagrams, not crammed into one.\n\n**Cycles don't get drawn as rings.** If the last stage feeds back into the first (Krebs cycle, event loop, GC mark-and-sweep, TCP retransmit), your instinct is to place the stages around a circle. Don't. Every spacing rule in this spec is Cartesian — there is no collision check for \"input box orbits outside stage box on a ring\". You will get satellite boxes overlapping the stages they feed, labels sitting on the dashed circle, and tangential arrows that point nowhere. The ring is decoration; the loop is conveyed by the return arrow.\n\nBuild a stepper in HTML. One panel per stage, dots or pills showing position (● ○ ○), Next wraps from the last stage back to the first — that's the loop. Each panel owns its inputs and products: an event loop's pending callbacks live *inside* the Poll panel, not floating next to a box on a ring. Nothing collides because nothing shares the canvas. Only fall back to a linear SVG (stages in a row, curved `<path>` return arrow) when there's one input and one output total and no per-stage detail to show.\n\n**Feedback loops in linear flows:** Don't draw a physical arrow traversing the layout (it fights the flow direction and clips edges). Instead:\n- Small `↻` glyph + text near the cycle point: `<text>↻ returns to start</text>`\n- Or restructure the whole diagram as a circle if the cycle IS the point\n\n**Arrows:** A line from A to B must not cross any other box or label. If the direct path crosses something, route around with an L-bend: `<path d=\"M x1 y1 L x1 ymid L x2 ymid L x2 y2\"/>`. Place arrow labels in clear space, not on the midpoint.\n\nKeep all nodes the same height when they have the same content type (e.g. all single-line boxes = 44px, all two-line boxes = 56px).\n\n**Flowchart components** — use these patterns consistently:\n\n*Single-line node* (44px tall): title only. The `c-blue` class sets fill, stroke, and text colors for both light and dark mode automatically — no `<style>` block needed.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about T-cells')\">\n  <rect x=\"100\" y=\"20\" width=\"180\" height=\"44\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"190\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"central\">T-cells</text>\n</g>\n```\n\n*Two-line node* (56px tall): bold title + muted subtitle.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about dendritic cells')\">\n  <rect x=\"100\" y=\"20\" width=\"200\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"200\" y=\"38\" text-anchor=\"middle\" dominant-baseline=\"central\">Dendritic cells</text>\n  <text class=\"ts\" x=\"200\" y=\"56\" text-anchor=\"middle\" dominant-baseline=\"central\">Detect foreign antigens</text>\n</g>\n```\n\n*Connector* (no label — meaning is clear from source + target):\n```svg\n<line x1=\"200\" y1=\"76\" x2=\"200\" y2=\"120\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n*Neutral node* (gray, for start/end/generic steps): use `class=\"box\"` for auto-themed fill/stroke, and default text classes.\n\nMake all nodes clickable by default — wrap in `<g class=\"node\" onclick=\"sendPrompt('...')\">`. The hover effect is built in.\n\n#### Structural diagram\n\nFor concepts where physical or logical containment matters — things inside other things.\n\n**When to use**: The explanation depends on *where* processes happen. Examples: how a cell works (organelles inside a cell), how a file system works (blocks inside inodes inside partitions), how a building's HVAC works (ducts inside floors inside a building), how a CPU cache hierarchy works (L1 inside core, L2 shared).\n\n**Core idea**: Large rounded rects are containers. Smaller rects inside them are regions or sub-structures. Text labels describe what happens in each region. Arrows show flow between regions or from external inputs/outputs.\n\n**Container rules**:\n- Outermost container: large rounded rect, rx=20-24, lightest fill (50 stop), 0.5px stroke (600 stop). Label at top-left inside, 14px bold.\n- Inner regions: medium rounded rects, rx=8-12, next shade fill (100-200 stop). Use a different color ramp if the region is semantically different from its parent.\n- 20px minimum padding inside every container — text and inner regions must not touch the container edges.\n- Max 2-3 nesting levels. Deeper nesting gets unreadable at 680px width.\n\n**Layout**:\n- Place inner regions side by side within the container, with 16px+ gap between them.\n- External inputs (sunlight, water, data, requests) sit outside the container with arrows pointing in.\n- External outputs sit outside with arrows pointing out.\n- Keep external labels short — one word or a short phrase. Details go in the prose between diagrams.\n\n**What goes inside regions**: Text only — the region name (14px bold) and a short description of what happens there (12px). Don't put flowchart-style boxes inside regions. Don't draw illustrations or icons inside.\n\n**Structural container example** (library branch with two side-by-side regions, an internal labeled arrow, and an external input). ViewBox 700x320, horizontal layout, color classes handle both light and dark mode — no `<style>` block:\n```svg\n<defs>\n  <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n<!-- Outer container -->\n<g class=\"c-green\">\n  <rect x=\"120\" y=\"30\" width=\"560\" height=\"260\" rx=\"20\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"400\" y=\"62\" text-anchor=\"middle\">Library branch</text>\n  <text class=\"ts\" x=\"400\" y=\"80\" text-anchor=\"middle\">Main floor</text>\n</g>\n<!-- Inner: Circulation desk -->\n<g class=\"c-teal\">\n  <rect x=\"150\" y=\"100\" width=\"220\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"260\" y=\"130\" text-anchor=\"middle\">Circulation desk</text>\n  <text class=\"ts\" x=\"260\" y=\"148\" text-anchor=\"middle\">Checkouts, returns</text>\n</g>\n<!-- Inner: Reading room -->\n<g class=\"c-amber\">\n  <rect x=\"450\" y=\"100\" width=\"210\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"555\" y=\"130\" text-anchor=\"middle\">Reading room</text>\n  <text class=\"ts\" x=\"555\" y=\"148\" text-anchor=\"middle\">Seating, reference</text>\n</g>\n<!-- Arrow between inner boxes with label -->\n<text class=\"ts\" x=\"410\" y=\"175\" text-anchor=\"middle\">Books</text>\n<line x1=\"370\" y1=\"185\" x2=\"448\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n<!-- External input: New acq. — text vertically aligned with arrow -->\n<text class=\"ts\" x=\"40\" y=\"185\" text-anchor=\"middle\">New acq.</text>\n<line x1=\"75\" y1=\"185\" x2=\"118\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n**Color in structural diagrams**: Nested regions need distinct ramps — `c-{ramp}` classes resolve to fixed fill/stroke stops, so the same class on parent and child gives identical fills and flattens the hierarchy. Pick a *related* ramp for inner structures (e.g. Green for the library envelope, Teal for the circulation desk inside it) and a *contrasting* ramp for a region that does something functionally different (e.g. Amber for the reading room). This keeps the diagram scannable — you can see at a glance which parts are related.\n\n**Database schemas / ERDs — use mermaid.js, not SVG.** A schema table is a header plus N field rows plus typed columns plus crow's-foot connectors. That is a text-layout problem and hand-placing it in SVG fails the same way every time. mermaid.js `erDiagram` does layout, cardinality, and connector routing for free. ERDs only; everything else stays in SVG.\n\n```\nerDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has\n  USERS {\n    uuid id PK\n    string email\n    timestamp created_at\n  }\n  POSTS {\n    uuid id PK\n    uuid user_id FK\n    string title\n  }\n```\n\nUse HTML for ERDs. Import and initialize in a `<script type=\"module\">`. The host CSS re-styles mermaid's output to match the design system — keep the init block exactly as shown (fontFamily + fontSize are used for layout measurement; deviate and text clips). After rendering, replace sharp-cornered entity `<path>` elements with rounded `<rect rx=\"8\">` to match the design system, and strip borders from attribute rows (only the outer container and header row keep visible borders — alternating fill colors separate the rows):\n```html\n<style>\n#erd svg.erDiagram .divider path { stroke-opacity: 0.5; }\n#erd svg.erDiagram .row-rect-odd path,\n#erd svg.erDiagram .row-rect-odd rect,\n#erd svg.erDiagram .row-rect-even path,\n#erd svg.erDiagram .row-rect-even rect { stroke: none !important; }\n</style>\n<div id=\"erd\"></div>\n<script type=\"module\">\nimport mermaid from 'https://esm.sh/mermaid@11/dist/mermaid.esm.min.mjs';\nconst dark = matchMedia('(prefers-color-scheme: dark)').matches;\nawait document.fonts.ready;\nmermaid.initialize({\n  startOnLoad: false,\n  theme: 'base',\n  fontFamily: '\"Anthropic Sans\", sans-serif',\n  themeVariables: {\n    darkMode: dark,\n    fontSize: '13px',\n    fontFamily: '\"Anthropic Sans\", sans-serif',\n    lineColor: dark ? '#9c9a92' : '#73726c',\n    textColor: dark ? '#c2c0b6' : '#3d3d3a',\n  },\n});\nconst { svg } = await mermaid.render('erd-svg', `erDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has`);\ndocument.getElementById('erd').innerHTML = svg;\n\n// Round only the outermost entity box corners (not internal row stripes)\ndocument.querySelectorAll('#erd svg.erDiagram .node').forEach(node => {\n  const firstPath = node.querySelector('path[d]');\n  if (!firstPath) return;\n  const d = firstPath.getAttribute('d');\n  const nums = d.match(/-?[\\d.]+/g)?.map(Number);\n  if (!nums || nums.length < 8) return;\n  const xs = [nums[0], nums[2], nums[4], nums[6]];\n  const ys = [nums[1], nums[3], nums[5], nums[7]];\n  const x = Math.min(...xs), y = Math.min(...ys);\n  const w = Math.max(...xs) - x, h = Math.max(...ys) - y;\n  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');\n  rect.setAttribute('x', x); rect.setAttribute('y', y);\n  rect.setAttribute('width', w); rect.setAttribute('height', h);\n  rect.setAttribute('rx', '8');\n  for (const a of ['fill', 'stroke', 'stroke-width', 'class', 'style']) {\n    if (firstPath.hasAttribute(a)) rect.setAttribute(a, firstPath.getAttribute(a));\n  }\n  firstPath.replaceWith(rect);\n});\n\n// Strip borders from attribute rows (mermaid v11: .row-rect-odd / .row-rect-even)\ndocument.querySelectorAll('#erd svg.erDiagram .row-rect-odd path, #erd svg.erDiagram .row-rect-even path').forEach(p => {\n  p.setAttribute('stroke', 'none');\n});\n</script>\n```\n\nWorks identically for `classDiagram` — swap the diagram source; init stays the same.\n\n#### Illustrative diagram\n\nFor building *intuition*. The subject might be physical (an engine, a lung) or completely abstract (attention, recursion, gradient descent) — what matters is that a spatial drawing conveys the mechanism better than labelled boxes would. These are the diagrams that make someone go \"oh, *that's* what it's doing.\"\n\n**Two flavours, same rules:**\n- **Physical subjects** get drawn as simplified versions of themselves. Cross-sections, cutaways, schematics. A water heater is a tank with a burner underneath. A lung is a branching tree in a cavity. You're drawing *the thing*, stylised.\n- **Abstract subjects** get drawn as *spatial metaphors*. You're inventing a shape for something that doesn't have one — but the shape should make the mechanism obvious. A transformer is a stack of horizontal slabs with a bright thread of attention connecting tokens across layers. A hash function is a funnel scattering items into a row of buckets. The call stack is literally a stack of frames growing and shrinking. Embeddings are dots clustering in space. The metaphor *is* the explanation.\n\nThis is the most ambitious diagram type and the one Claude is best at. Lean into it. Use colour for intensity (a hot attention weight glows amber, a cold one stays gray). Use repetition for scale (many small circles = many parameters).\n\n**Prefer interactive over static.** A static cross-section is a good answer; a cross-section you can *operate* is a great one. The decision rule: if the real-world system has a control, give the diagram that control. A water heater has a thermostat — so give the user a slider that shifts the hot/cold boundary, a toggle that fires the burner and animates convection currents. An LLM has input tokens — let the user click one and watch the attention weights re-fan. A cache has a hit rate — let them drag it and watch latency change. Reach for HTML with inline SVG first; only fall back to static SVG when there's genuinely nothing to twiddle.\n\n**When NOT to use**: The user is asking for a *reference*, not an *intuition*. \"What are the components of a transformer\" wants labelled boxes — that's a structural diagram. \"Walk me through our CI pipeline\" wants sequential steps — that's a flowchart. Also skip this when the metaphor would be arbitrary rather than revealing: drawing \"the cloud\" as a cloud shape or \"microservices\" as little houses doesn't teach anything about how they work. If the drawing doesn't make the *mechanism* clearer, don't draw it.\n\n**Fidelity ceiling**: These are schematics, not illustrations. Every shape should read at a glance. If a `<path>` needs more than ~6 segments to draw, simplify it. A tank is a rounded rect, not a Bézier portrait of a tank. A flame is three triangles, not a fire. Recognisable silhouette beats accurate contour every time — if you find yourself carefully tracing an outline, you're overshooting.\n\n**Core principle**: Draw the mechanism, not a diagram *about* the mechanism. Spatial arrangement carries the meaning; labels annotate. A good illustrative diagram works with the labels removed.\n\n**What changes from flowchart/structural rules**:\n\n- **Shapes are freeform.** Use `<path>`, `<ellipse>`, `<circle>`, `<polygon>`, and curved lines to represent real forms. A water tank is a tall rect with rounded bottom. A heart valve is a pair of curved paths. A circuit trace is a thin polyline. You are not limited to rounded rects.\n- **Layout follows the subject's geometry**, not a grid. If the thing is tall and narrow (a water heater, a thermometer), the diagram is tall and narrow. If it's wide and flat (a PCB, a geological cross-section), the diagram is wide. Let the subject dictate proportions within the 680px viewBox width.\n- **Color encodes intensity**, not category. For physical subjects: warm ramps (amber, coral, red) = heat/energy/pressure, cool ramps (blue, teal) = cold/calm, gray = inert structure. For abstract subjects: warm = active/high-weight/attended-to, cool or gray = dormant/low-weight/ignored. A user should be able to glance at the diagram and see *where the action is* without reading a single label.\n- **Layering and overlap are encouraged — for shapes.** Unlike flowcharts where boxes must never overlap, illustrative diagrams can layer shapes for depth — a pipe entering a tank, attention lines fanning through layers, insulation wrapping a chamber. Use z-ordering (later in source = on top) deliberately.\n- **Text is the exception — never let a stroke cross it.** The overlap permission is for shapes only. Every label needs 8px of clear air between its baseline/cap-height and the nearest stroke. Don't solve this with a background rect — solve it by *placing the text somewhere else*. Labels go in the quiet regions: above the drawing, below it, in the margin with a leader line, or in the gap between two fans of lines. If there is no quiet region, the drawing is too dense — remove something or split into two diagrams.\n- **Small shape-based indicators are allowed** when they communicate physical state. Triangles for flames. Circles for bubbles or particles. Wavy lines for steam or heat radiation. Parallel lines for vibration. These aren't decoration — they tell the user what's happening physically. Keep them simple: basic SVG primitives, not detailed illustrations.\n- **One gradient per diagram is permitted** — the only exception to the global no-gradients rule — and only to show a *continuous* physical property across a region (temperature stratification in a tank, pressure drop along a pipe, concentration in a solution). It must be a single `<linearGradient>` between exactly two stops from the same colour ramp. No radial gradients, no multi-stop fades, no gradient-as-aesthetic. If two stacked flat-fill rects communicate the same thing, do that instead.\n- **Animation is permitted for interactive HTML versions.** Use CSS `@keyframes` animating only `transform` and `opacity`. Keep loops under ~2s, and wrap every animation in `@media (prefers-reduced-motion: no-preference)` so it's opt-out by default. Animations should show how the system *behaves* — convection current, rotation, flow — not just move for the sake of moving. No physics engines or heavy libraries.\n\nAll core rules still apply (viewBox 680px, dark mode mandatory, 14/12px text, pre-built classes, arrow marker, clickable nodes).\n\n**Label placement**:\n- Place labels *outside* the drawn object when possible, with a thin leader line (0.5px dashed, `var(--t)` stroke) pointing to the relevant part. This keeps the illustration uncluttered.\n- For large internal zones (like temperature regions in a tank), labels can sit inside if there's ample clear space — minimum 20px from any edge.\n- External labels sit in the margin area or above/below the object. **Pick one side for labels and put them all there** — at 680px wide you don't have room for a drawing *and* label columns on both sides. Reserve at least 140px of horizontal margin on the label side. Labels on the left are the ones that clip: `text-anchor=\"end\"` extends leftward from x, and with multi-line callouts it's very easy to blow past x=0 without noticing. Default to right-side labels with `text-anchor=\"start\"` unless the subject's geometry forces otherwise. Use `class=\"ts\"` (12px) for callouts, `class=\"th\"` (14px medium) for major component names.\n\n**Composition approach**:\n1. Start with the main object's silhouette — the largest shape, centered in the viewBox.\n2. Add internal structure: chambers, pipes, membranes, mechanical parts.\n3. Add external connections: pipes entering/exiting, arrows showing flow direction, labels for inputs and outputs.\n4. Add state indicators last: color fills showing temperature/pressure/concentration, small animated elements showing movement or energy.\n5. Leave generous whitespace around the object for labels — don't crowd annotations against the viewBox edges.\n\n**Static vs interactive**: Static cutaways and cross-sections work best as pure SVG. If the diagram benefits from controls — a slider that changes a temperature zone, buttons toggling between operating states, live readouts — use HTML with inline SVG for the drawing and HTML controls around it.\n\n**Illustrative diagram example** — interactive water heater cross-section with vivid physical-realism colors, animated convection currents, and controls. Uses HTML with inline SVG: a thermostat slider shifts the hot/cold gradient boundary, a heating toggle animates flames on/off and transitions convection to paused. viewBox is 680x560; tank occupies x=180..440, leaving 140px+ of right margin for labels. Smooth convection paths use `stroke-dasharray:5 5` at ~1.6s for a gentle flow feel. A warm-glow overlay on the hot zone pulses subtly when heating is on. Flame shapes use warm gradient fills and clean opacity transitions. Labels sit along the right margin with leader lines.\n```html\n<style>\n  @keyframes conv { to { stroke-dashoffset: -20; } }\n  @keyframes flicker { 0%,100%{opacity:1} 50%{opacity:.82} }\n  @keyframes glow { 0%,100%{opacity:.3} 50%{opacity:.6} }\n  .conv { stroke-dasharray:5 5; animation: conv var(--dur,1.6s) linear infinite; transition: opacity .5s; }\n  .conv.off { opacity:0; animation-play-state:paused; }\n  #flames path { transition: opacity .5s; }\n  #flames.off path { opacity:0; animation:none; }\n  #flames path:nth-child(odd)  { animation: flicker .6s ease-in-out infinite; }\n  #flames path:nth-child(even) { animation: flicker .8s ease-in-out infinite .15s; }\n  #warm-glow { animation: glow 3s ease-in-out infinite; transition: opacity .5s; }\n  #warm-glow.off { opacity:0; animation:none; }\n  .toggle-track { position:relative;width:32px;height:18px;background:var(--color-border-secondary);border-radius:9px;transition:background .2s;display:inline-block; }\n  .toggle-track:has(input:checked) { background:var(--color-text-info); }\n  #heat-toggle:checked + span { transform:translateX(14px); }\n</style>\n<svg width=\"100%\" viewBox=\"0 0 680 560\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker>\n    <linearGradient id=\"tg\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop id=\"gh\" offset=\"40%\" stop-color=\"#E8593C\" stop-opacity=\"0.45\"/>\n      <stop id=\"gc\" offset=\"40%\" stop-color=\"#3B8BD4\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n    <linearGradient id=\"fg1\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#E85D24\"/><stop offset=\"60%\" stop-color=\"#F2A623\"/><stop offset=\"100%\" stop-color=\"#FCDE5A\"/></linearGradient>\n    <linearGradient id=\"fg2\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#D14520\"/><stop offset=\"50%\" stop-color=\"#EF8B2C\"/><stop offset=\"100%\" stop-color=\"#F9CB42\"/></linearGradient>\n    <linearGradient id=\"pipe-h\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#D05538\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#D05538\" stop-opacity=\".08\"/></linearGradient>\n    <linearGradient id=\"pipe-c\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#3B8BD4\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#3B8BD4\" stop-opacity=\".08\"/></linearGradient>\n    <clipPath id=\"tc\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\"/></clipPath>\n  </defs>\n  <!-- Tank fill -->\n  <g clip-path=\"url(#tc)\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" fill=\"url(#tg)\"/></g>\n  <!-- Warm glow overlay (pulses when heating) -->\n  <g clip-path=\"url(#tc)\"><rect id=\"warm-glow\" x=\"180\" y=\"55\" width=\"260\" height=\"160\" fill=\"#E8593C\" opacity=\".3\"/></g>\n  <!-- Tank shell (double stroke for solidity) -->\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"2.5\" opacity=\".25\"/>\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"1\"/>\n  <!-- Hot pipe out (top right) -->\n  <rect x=\"370\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-h)\"/>\n  <path d=\"M378 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <!-- Cold pipe in + dip tube (top left) -->\n  <rect x=\"234\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-c)\"/>\n  <path d=\"M242 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <path d=\"M242 55V395\" stroke=\"var(--t)\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\".5\"/>\n  <!-- Convection currents (curved paths at different speeds) -->\n  <path class=\"conv\" style=\"--dur:1.6s\" fill=\"none\" stroke=\"#D05538\" stroke-width=\"1\" opacity=\".5\" d=\"M350 380C355 320,365 240,358 140Q355 110,340 100\"/>\n  <path class=\"conv\" style=\"--dur:2.1s\" fill=\"none\" stroke=\"#C04828\" stroke-width=\".8\" opacity=\".35\" d=\"M300 390C308 340,320 260,315 170Q312 130,298 115\"/>\n  <path class=\"conv\" style=\"--dur:2.6s\" fill=\"none\" stroke=\"#B05535\" stroke-width=\".7\" opacity=\".3\" d=\"M380 370C382 310,388 230,382 150Q378 120,365 110\"/>\n  <!-- Burner bar -->\n  <rect x=\"188\" y=\"454\" width=\"244\" height=\"5\" rx=\"2\" fill=\"var(--t)\" opacity=\".6\"/>\n  <rect x=\"220\" y=\"462\" width=\"180\" height=\"6\" rx=\"3\" fill=\"var(--t)\" opacity=\".3\"/>\n  <!-- Flames (gradient-filled organic shapes) -->\n  <g id=\"flames\">\n    <path d=\"M240,454Q248,430 252,438Q256,424 260,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M278,454Q285,426 290,434Q295,418 300,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M320,454Q328,428 333,436Q338,420 342,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M360,454Q367,430 371,438Q375,422 380,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M398,454Q404,434 408,440Q412,428 416,454Z\" fill=\"url(#fg1)\"/>\n  </g>\n  <!-- Labels (right margin) -->\n  <g class=\"node\" onclick=\"sendPrompt('How does hot water exit the tank?')\">\n    <line class=\"leader\" x1=\"386\" y1=\"34\" x2=\"468\" y2=\"70\"/><circle cx=\"386\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"74\">Hot water outlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the cold water inlet work?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"34\" x2=\"468\" y2=\"140\"/><circle cx=\"250\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"144\">Cold water inlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the dip tube do?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"260\" x2=\"468\" y2=\"220\"/><circle cx=\"250\" cy=\"260\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"224\">Dip tube</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the thermostat control?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"250\" x2=\"468\" y2=\"300\"/><circle cx=\"440\" cy=\"250\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"304\">Thermostat</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What material is the tank made of?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"380\" x2=\"468\" y2=\"380\"/><circle cx=\"440\" cy=\"380\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"384\">Tank wall</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the gas burner heat water?')\">\n    <line class=\"leader\" x1=\"432\" y1=\"454\" x2=\"468\" y2=\"454\"/><circle cx=\"432\" cy=\"454\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"458\">Heating element</text></g>\n</svg>\n<div style=\"display:flex;align-items:center;gap:16px;margin:12px 0 0;font-size:13px;color:var(--color-text-secondary)\">\n  <label style=\"display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none\">\n    <span class=\"toggle-track\">\n      <input type=\"checkbox\" id=\"heat-toggle\" checked onchange=\"toggleHeat(this.checked)\" style=\"position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;margin:0\">\n      <span style=\"position:absolute;top:2px;left:2px;width:14px;height:14px;background:#fff;border-radius:50%;transition:transform .2s;pointer-events:none\"></span>\n    </span>\n    Heating\n  </label>\n  <span>Thermostat</span>\n  <input type=\"range\" id=\"temp-slider\" min=\"10\" max=\"90\" value=\"40\" style=\"flex:1\" oninput=\"setTemp(this.value)\">\n  <span id=\"temp-label\" style=\"min-width:36px;text-align:right\">40%</span>\n</div>\n<script>\nfunction setTemp(v) {\n  document.getElementById('gh').setAttribute('offset', v+'%');\n  document.getElementById('gc').setAttribute('offset', v+'%');\n  document.getElementById('temp-label').textContent = v+'%';\n}\nfunction toggleHeat(on) {\n  document.getElementById('flames').classList.toggle('off', !on);\n  document.getElementById('warm-glow').classList.toggle('off', !on);\n  document.querySelectorAll('.conv').forEach(p => p.classList.toggle('off', !on));\n}\n</script>\n```\n\n**Illustrative example — abstract subject** (attention in a transformer). Same rules, no physical object. A row of tokens at the bottom, one query token highlighted, weight-scaled lines fanning to every other token. Caption sits below the fan — clear of every stroke — not inside it.\n```svg\n<rect class=\"c-purple\" x=\"60\" y=\"40\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"80\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"120\" width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<text class=\"ts\" x=\"72\" y=\"57\" >Layer 3</text>\n<text class=\"ts\" x=\"72\" y=\"97\" >Layer 2</text>\n<text class=\"ts\" x=\"72\" y=\"137\">Layer 1</text>\n\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"116\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.25\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"228\" y2=\"146\" stroke-width=\"1.5\" opacity=\"0.4\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"340\" y2=\"146\" stroke-width=\"4\"   opacity=\"1.0\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"452\" y2=\"146\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"564\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.2\"/>\n\n<g class=\"node\" onclick=\"sendPrompt('What do the attention weights mean?')\">\n  <rect class=\"c-gray\"  x=\"80\"  y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"192\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-amber\" x=\"304\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"1\"/>\n  <rect class=\"c-gray\"  x=\"416\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"528\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <text class=\"ts\" x=\"116\" y=\"252\" text-anchor=\"middle\">the</text>\n  <text class=\"ts\" x=\"228\" y=\"252\" text-anchor=\"middle\">cat</text>\n  <text class=\"th\" x=\"340\" y=\"252\" text-anchor=\"middle\">sat</text>\n  <text class=\"ts\" x=\"452\" y=\"252\" text-anchor=\"middle\">on</text>\n  <text class=\"ts\" x=\"564\" y=\"252\" text-anchor=\"middle\">the</text>\n</g>\n\n<text class=\"ts\" x=\"340\" y=\"300\" text-anchor=\"middle\">Line thickness = attention weight from \"sat\" to each token</text>\n```\n\nNote what's *not* here: no boxes labelled \"multi-head attention\", no arrows labelled \"Q/K/V\". Those belong in the structural diagram. This one is about the *feeling* of attention — one token looking at every other token with varying intensity.\n\nThese are starting points, not ceilings. For the water heater: add a thermostat slider, animate the convection current, toggle heating vs standby. For the attention diagram: let the user click any token to become the query, scrub through layers, animate the weights settling. The goal is always to *show* how the thing works, not just *label* it.\n",
      "uuid": "b7ed5d66-9b9e-4ecb-96fc-64a1fc499ee7"
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

Now I have the design system. This is a data visualization task - showing nuclear reaction mechanisms with their timescales and signatures. I'll create an interactive/illustrative diagram that shows the three mechanisms (Direct, Pre-equilibrium, Compound nucleus) along a timescale axis, with their angular distribution signatures.

Let me design an HTML widget that shows:
1. A logarithmic timescale axis (~10⁻²² to 10⁻¹⁸ s)
2. Three mechanism cards along the timeline
3. Angular distribution polar plots for each regime (forward-peaked, intermediate, isotropic)


4. A timeline bar with the three columns positioned by their characteristic timescales, each containing the mechanism name, timescale range, an inline SVG polar plot showing the angular distribution pattern, and descriptive text about the signature.

Building the widget...

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T09:27:42.415596Z",
  "stop_timestamp": "2026-04-11T09:28:18.748477Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01K1r1nZhZDLyNtciS5H1YY5",
  "name": "visualize:show_widget",
  "input": {
    "title": "nuclear_reaction_mechanism_timescales",
    "loading_messages": [
      "Plotting reaction mechanisms",
      "Drawing angular distributions",
      "Calibrating timescale axis"
    ],
    "widget_code": "<h2 class=\"sr-only\">Nuclear reaction mechanisms: timescale signatures and angular distributions for direct, pre-equilibrium, and compound nucleus reactions</h2>\n\n<style>\n.mech-grid { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 12px; margin: 16px 0 0; }\n.mech-card { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-lg); padding: 16px 14px 14px; display: flex; flex-direction: column; gap: 10px; }\n.mech-card .label { font-size: 11px; color: var(--color-text-tertiary); letter-spacing: .04em; text-transform: uppercase; }\n.mech-card .name  { font-size: 15px; font-weight: 500; color: var(--color-text-primary); margin-top: 2px; }\n.mech-card .tau   { font-size: 12px; color: var(--color-text-secondary); font-family: var(--font-mono); margin-top: -4px; }\n.mech-card .sig   { font-size: 12px; color: var(--color-text-secondary); line-height: 1.5; border-top: 0.5px solid var(--color-border-tertiary); padding-top: 10px; margin-top: 4px; }\n.sig-kw { font-weight: 500; color: var(--color-text-primary); }\n.axis-wrap { position: relative; margin: 20px 0 6px; height: 56px; }\n.axis-line { position: absolute; top: 28px; left: 0; right: 0; height: 0.5px; background: var(--color-border-secondary); }\n.axis-tick { position: absolute; top: 22px; width: 0.5px; height: 12px; background: var(--color-border-secondary); transform: translateX(-50%); }\n.axis-lbl  { position: absolute; top: 38px; font-size: 11px; color: var(--color-text-tertiary); font-family: var(--font-mono); transform: translateX(-50%); white-space: nowrap; }\n.regime-bar { position: absolute; top: 18px; height: 20px; border-radius: 4px; opacity: .85; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 500; white-space: nowrap; overflow: hidden; }\n.rb-direct { background: #AFA9EC; color: #3C3489; left: 0%; width: 12%; }\n.rb-pre    { background: #5DCAA5; color: #085041; left: 12%; width: 22%; }\n.rb-comp   { background: #F0997B; color: #4A1B0C; left: 34%; width: 66%; }\n@media (prefers-color-scheme: dark) {\n  .rb-direct { background: #3C3489; color: #CECBF6; }\n  .rb-pre    { background: #085041; color: #9FE1CB; }\n  .rb-comp   { background: #712B13; color: #F5C4B3; }\n}\n.polar-wrap { display: flex; justify-content: center; align-items: center; }\n.rule-note { font-size: 12px; color: var(--color-text-secondary); border-left: 2px solid var(--color-border-secondary); padding-left: 10px; margin-top: 4px; line-height: 1.6; }\n</style>\n\n<div style=\"padding: 4px 0 0;\">\n  <div style=\"font-size: 13px; color: var(--color-text-secondary); margin-bottom: 4px;\">Timescale (seconds, log scale)</div>\n  <div class=\"axis-wrap\">\n    <div class=\"axis-line\"></div>\n    <div class=\"regime-bar rb-direct\">Direct</div>\n    <div class=\"regime-bar rb-pre\">Pre-eq.</div>\n    <div class=\"regime-bar rb-comp\">Compound</div>\n    <div class=\"axis-tick\" style=\"left:0%\"></div>   <div class=\"axis-lbl\" style=\"left:0%\">10⁻²²</div>\n    <div class=\"axis-tick\" style=\"left:25%\"></div>  <div class=\"axis-lbl\" style=\"left:25%\">10⁻²¹·⁵</div>\n    <div class=\"axis-tick\" style=\"left:50%\"></div>  <div class=\"axis-lbl\" style=\"left:50%\">10⁻²¹</div>\n    <div class=\"axis-tick\" style=\"left:75%\"></div>  <div class=\"axis-lbl\" style=\"left:75%\">10⁻²⁰</div>\n    <div class=\"axis-tick\" style=\"left:100%\"></div> <div class=\"axis-lbl\" style=\"left:100%\">10⁻¹⁸</div>\n  </div>\n\n  <div class=\"mech-grid\">\n    <!-- Direct -->\n    <div class=\"mech-card\">\n      <div>\n        <div class=\"label\">Mechanism</div>\n        <div class=\"name\" style=\"color:#534AB7\">Direct</div>\n        <div class=\"tau\">τ ~ 10⁻²² s</div>\n      </div>\n      <div class=\"polar-wrap\">\n        <svg width=\"110\" height=\"110\" viewBox=\"-55 -55 110 110\" role=\"img\" aria-label=\"Polar plot showing strongly forward-peaked angular distribution for direct reaction\">\n          <title>Direct reaction: forward-peaked dσ/dΩ</title>\n          <circle cx=\"0\" cy=\"0\" r=\"45\" fill=\"none\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n          <circle cx=\"0\" cy=\"0\" r=\"30\" fill=\"none\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\" stroke-dasharray=\"3 3\"/>\n          <circle cx=\"0\" cy=\"0\" r=\"15\" fill=\"none\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\" stroke-dasharray=\"2 3\"/>\n          <line x1=\"-48\" y1=\"0\" x2=\"48\" y2=\"0\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n          <line x1=\"0\" y1=\"-48\" x2=\"0\" y2=\"48\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n          <!-- Forward-peaked lobe: large lobe pointing up (0°=beam direction) -->\n          <path d=\"M0,0 Q6,-46 0,-46 Q-6,-46 0,0Z\" fill=\"#AFA9EC\" fill-opacity=\"0.5\" stroke=\"#534AB7\" stroke-width=\"0.8\" fill-rule=\"evenodd\"/>\n          <path d=\"M0,0 Q14,-36 18,-28 Q22,-14 20,0 Q18,10 12,16 Q6,20 0,16 Q-6,20 -12,16 Q-18,10 -20,0 Q-22,-14 -18,-28 Q-14,-36 0,0Z\" fill=\"#7F77DD\" fill-opacity=\"0.35\" stroke=\"none\"/>\n          <!-- Small diffraction side lobes -->\n          <path d=\"M0,0 Q18,-12 20,-8 Q22,-4 18,0 Q14,4 10,2 Q6,0 0,0Z\" fill=\"#AFA9EC\" fill-opacity=\"0.4\" stroke=\"#534AB7\" stroke-width=\"0.5\"/>\n          <path d=\"M0,0 Q-18,-12 -20,-8 Q-22,-4 -18,0 Q-14,4 -10,2 Q-6,0 0,0Z\" fill=\"#AFA9EC\" fill-opacity=\"0.4\" stroke=\"#534AB7\" stroke-width=\"0.5\"/>\n          <!-- 0° label -->\n          <text font-size=\"9\" text-anchor=\"middle\" fill=\"var(--color-text-tertiary)\" font-family=\"var(--font-sans)\" x=\"0\" y=\"-50\">0°</text>\n          <text font-size=\"9\" text-anchor=\"middle\" fill=\"var(--color-text-tertiary)\" font-family=\"var(--font-sans)\" x=\"0\" y=\"53\">180°</text>\n          <text font-size=\"9\" text-anchor=\"end\" fill=\"var(--color-text-tertiary)\" font-family=\"var(--font-sans)\" x=\"-50\" y=\"3\">90°</text>\n        </svg>\n      </div>\n      <div class=\"sig\">\n        <span class=\"sig-kw\">Forward-peaked</span> dσ/dΩ<br>\n        Specific final states<br>\n        Diffraction oscillations\n      </div>\n    </div>\n\n    <!-- Pre-equilibrium -->\n    <div class=\"mech-card\">\n      <div>\n        <div class=\"label\">Mechanism</div>\n        <div class=\"name\" style=\"color:#0F6E56\">Pre-equilibrium</div>\n        <div class=\"tau\">τ ~ 10⁻²¹ s</div>\n      </div>\n      <div class=\"polar-wrap\">\n        <svg width=\"110\" height=\"110\" viewBox=\"-55 -55 110 110\" role=\"img\" aria-label=\"Polar plot showing intermediate-angle angular distribution for pre-equilibrium reaction\">\n          <title>Pre-equilibrium: intermediate angles, quasi-symmetric</title>\n          <circle cx=\"0\" cy=\"0\" r=\"45\" fill=\"none\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n          <circle cx=\"0\" cy=\"0\" r=\"30\" fill=\"none\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\" stroke-dasharray=\"3 3\"/>\n          <circle cx=\"0\" cy=\"0\" r=\"15\" fill=\"none\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\" stroke-dasharray=\"2 3\"/>\n          <line x1=\"-48\" y1=\"0\" x2=\"48\" y2=\"0\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n          <line x1=\"0\" y1=\"-48\" x2=\"0\" y2=\"48\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n          <!-- Intermediate: broad forward bias, fills middle angles -->\n          <path d=\"M0,0\n            Q4,-44 8,-42 Q16,-36 22,-28 Q30,-16 32,-4\n            Q34,8 28,18 Q20,28 12,32 Q4,36 0,36\n            Q-4,36 -12,32 Q-20,28 -28,18 Q-34,8 -32,-4\n            Q-30,-16 -22,-28 Q-16,-36 -8,-42 Q-4,-44 0,0Z\"\n            fill=\"#5DCAA5\" fill-opacity=\"0.35\" stroke=\"#0F6E56\" stroke-width=\"0.8\"/>\n          <!-- slight forward bias overlay -->\n          <path d=\"M0,0 Q4,-42 0,-40 Q-4,-42 0,0Z\" fill=\"#1D9E75\" fill-opacity=\"0.5\" stroke=\"none\"/>\n          <text font-size=\"9\" text-anchor=\"middle\" fill=\"var(--color-text-tertiary)\" font-family=\"var(--font-sans)\" x=\"0\" y=\"-50\">0°</text>\n          <text font-size=\"9\" text-anchor=\"middle\" fill=\"var(--color-text-tertiary)\" font-family=\"var(--font-sans)\" x=\"0\" y=\"53\">180°</text>\n          <text font-size=\"9\" text-anchor=\"end\" fill=\"var(--color-text-tertiary)\" font-family=\"var(--font-sans)\" x=\"-50\" y=\"3\">90°</text>\n        </svg>\n      </div>\n      <div class=\"sig\">\n        <span class=\"sig-kw\">Intermediate angles</span><br>\n        Broad continuum spectrum<br>\n        Slight forward asymmetry\n      </div>\n    </div>\n\n    <!-- Compound nucleus -->\n    <div class=\"mech-card\">\n      <div>\n        <div class=\"label\">Mechanism</div>\n        <div class=\"name\" style=\"color:#993C1D\">Compound nucleus</div>\n        <div class=\"tau\">τ ~ 10⁻¹⁸ s</div>\n      </div>\n      <div class=\"polar-wrap\">\n        <svg width=\"110\" height=\"110\" viewBox=\"-55 -55 110 110\" role=\"img\" aria-label=\"Polar plot showing isotropic angular distribution for compound nucleus reaction\">\n          <title>Compound nucleus: isotropic Hauser-Feshbach distribution</title>\n          <circle cx=\"0\" cy=\"0\" r=\"45\" fill=\"none\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n          <circle cx=\"0\" cy=\"0\" r=\"30\" fill=\"none\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\" stroke-dasharray=\"3 3\"/>\n          <circle cx=\"0\" cy=\"0\" r=\"15\" fill=\"none\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\" stroke-dasharray=\"2 3\"/>\n          <line x1=\"-48\" y1=\"0\" x2=\"48\" y2=\"0\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n          <line x1=\"0\" y1=\"-48\" x2=\"0\" y2=\"48\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n          <!-- Isotropic: perfect circle at uniform radius -->\n          <circle cx=\"0\" cy=\"0\" r=\"36\" fill=\"#F0997B\" fill-opacity=\"0.35\" stroke=\"#993C1D\" stroke-width=\"1\"/>\n          <text font-size=\"9\" text-anchor=\"middle\" fill=\"var(--color-text-tertiary)\" font-family=\"var(--font-sans)\" x=\"0\" y=\"-50\">0°</text>\n          <text font-size=\"9\" text-anchor=\"middle\" fill=\"var(--color-text-tertiary)\" font-family=\"var(--font-sans)\" x=\"0\" y=\"53\">180°</text>\n          <text font-size=\"9\" text-anchor=\"end\" fill=\"var(--color-text-tertiary)\" font-family=\"var(--font-sans)\" x=\"-50\" y=\"3\">90°</text>\n        </svg>\n      </div>\n      <div class=\"sig\">\n        <span class=\"sig-kw\">Isotropic</span> emission<br>\n        Hauser-Feshbach statistics<br>\n        Memory of entrance channel lost\n      </div>\n    </div>\n  </div>\n\n  <div class=\"rule-note\" style=\"margin-top: 16px;\">\n    <strong style=\"font-weight:500\">Diagnostic rule:</strong> the angular distribution shape immediately identifies the dominant regime — forward peak → direct; broad fill → pre-equilibrium; perfect circle → compound nucleus.\n  </div>\n</div>"
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
  "tool_use_id": "toolu_01K1r1nZhZDLyNtciS5H1YY5",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "f0d7eda5-d4c9-4401-ac64-75e5bc40e866"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "7b04f987-2c6d-4f03-9f7a-99faaabdf3aa"
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

Good, the visualization is rendered. Let me provide a brief note.

</details>

The three polar plots encode the key diagnostic at a glance: the direct reaction's forward-peaked lobe with diffraction side lobes, the pre-equilibrium's broad forward-biased fill spanning intermediate angles, and the compound nucleus's perfect circle reflecting complete loss of entrance-channel memory. The color-coded timeline bar at the top maps all three regimes onto a common logarithmic axis spanning 10⁻²² → 10⁻¹⁸ s.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7bde-0f01-7136-a351-237f72e95c54",
  "updated_at": "2026-04-11T09:28:24.536200Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7bde-0f01-733f-9bcf-5939b45e02e5"
}
```

</details>

### 3. human — 2026-04-11T09:30:17.635961Z

Furthermore, visualize the function curve in different regimes

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7be0-aff4-7841-a21d-8482fe3a3a56",
  "updated_at": "2026-04-11T09:30:17.635961Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7bde-0f01-7136-a351-237f72e95c54"
}
```

</details>

### 4. assistant — 2026-04-11T09:32:08.148440Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants to visualize the dσ/dΩ function curves (angular distributions) for the three regimes plotted as actual mathematical curves on Cartesian axes (angle vs cross-section), not just polar plots.

For each regime:
1. **Direct**: Strongly forward-peaked, like |J_L(qR)|² or a Gaussian sharply peaked at 0°, possibly with oscillations (diffraction pattern). Could use something like exp(-θ²/σ²) × (1 + oscillations), or more physically a Bessel-function-like pattern.


2. **Pre-equilibrium**: Broad distribution with slight forward asymmetry, modeled as a combination of exponential decay and a constant background to capture the forward bias over a wide angular range.
3. **Compound nucleus**: Flat/constant (isotropic) distribution, possibly with subtle Legendre polynomial modulations to add realism.

I'm thinking a single overlaid plot with all three curves would be most informative, showing angle from 0° to 180° on the x-axis and differential cross-section on the y-axis.

Now I'm deciding between Chart.js or inline SVG for the visualization. For the direct reaction curve, I need a forward-peaked form with diffraction oscillations—something like an exponential decay in angle multiplied by oscillatory terms, or a Lorentzian-type profile that captures the characteristic stripping/pickup behavior.

For pre-equilibrium, I'll use a gentler exponential with a constant background to show the broad continuum. The compound nucleus contribution should be nearly isotropic with just a small quadrupole modulation. I'm leaning toward Chart.js for a clean interactive plot spanning 0 to 180 degrees, and using a logarithmic y-axis makes sense since the direct reaction spans many orders of magnitude compared to the other mechanisms. Building the Chart.js visualization...

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T09:30:41.609388Z",
  "stop_timestamp": "2026-04-11T09:30:41.609388Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01G3gv1UcnSs1DQCDB4YBXDd",
  "name": "visualize:read_me",
  "input": {
    "modules": [
      "chart",
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
  "tool_use_id": "toolu_01G3gv1UcnSs1DQCDB4YBXDd",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "# Imagine — Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` — SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` — UI mockups, forms, cards, dashboards\n- `interactive` — interactive explainers with controls\n- `chart` — charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` — illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget — hard limits:**\n- Box subtitles: ≤5 words. Detail goes in click-through (`sendPrompt`) or the prose below — not the box.\n- Colors: ≤2 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: ≤4 boxes at full width (~140px each). 5+ boxes → shrink to ≤110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing \"click to learn more\" in prose, the diagram itself must ACTUALLY be sparse. Don't promise brevity then front-load everything.\n\n**Accessibility:** For HTML widgets, begin with a visually-hidden `<h2 class=\"sr-only\">` containing a one-sentence summary of the visualization for screen-reader users. (SVG widgets use `role=\"img\"` with `<title>` and `<desc>` instead — see SVG setup.)\n\nYou create rich visual content — SVG diagrams/illustrations and HTML interactive widgets — that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn't notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** — All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks \"explain X\", write the explanation in your response and use the tool only for the visual that accompanies it. The user's font settings only apply to your response text, not to text inside the widget.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) → content HTML → `<script>` last.\n- **SVG**: `<defs>` (markers) → visual elements immediately.\n- Prefer inline `style=\"...\"` over `<style>` blocks — inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules — that's fine, but don't bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji — use CSS shapes or SVG paths\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only — host provides the bg)\n- **Typography**: The default font is Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-serif)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px — all `font-weight: 500`. Heading color is pre-set to `var(--color-text-primary)` — don't override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 — they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally — no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` — the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style=\"min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;\">` and put the modal inside — it's a faux viewport that actually contributes layout height.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` — just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text — never plain black or generic gray.\n- **Corners**: use `border-radius: var(--border-radius-md)` (or `-lg` for cards) in HTML. In SVG, `rx=\"4\"` is the default — larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** — if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** — see Philosophy above.\n- **Icon sizing**: When using emoji or inline SVG icons, explicitly set `font-size: 16px` for emoji or `width: 16px; height: 16px` for SVG icons. Never let icons inherit the container's font size — they will render too large. For larger decorative icons, use 24px max.\n- No tabs, carousels, or `display: none` sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)\n- No nested scrolling — auto-fit height.\n- Scripts execute after streaming — load libraries via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` (UMD globals), then use the global in a plain `<script>` that follows.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`. All other origins are blocked by the sandbox — the request silently fails.\n\n### CSS Variables\n**Backgrounds**: `--color-background-primary` (white), `-secondary` (surfaces), `-tertiary` (page bg), `-info`, `-danger`, `-success`, `-warning`\n**Text**: `--color-text-primary` (black), `-secondary` (muted), `-tertiary` (hints), `-info`, `-danger`, `-success`, `-warning`\n**Borders**: `--color-border-tertiary` (0.15α, default), `-secondary` (0.3α, hover), `-primary` (0.4α), semantic `-info/-danger/-success/-warning`\n**Typography**: `--font-sans`, `--font-serif`, `--font-mono`\n**Layout**: `--border-radius-md` (8px), `--border-radius-lg` (12px — preferred for most components), `--border-radius-xl` (16px)\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** — every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes — they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) — never omit fill or use `fill=\"inherit\"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--color-text-primary, --color-text-secondary) for text. Never hardcode colors like color: #333 — invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user's next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href=\"https://...\">` just works — clicks are intercepted and open the host's link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n\n\n## UI components\n\n### Aesthetic\nFlat, clean, white surfaces. Minimal 0.5px borders. Generous whitespace. No gradients, no shadows (except functional focus rings). Everything should feel native to claude.ai — like it belongs on the page, not embedded from somewhere else.\n\n### Tokens\n- Borders: always `0.5px solid var(--color-border-tertiary)` (or `-secondary` for emphasis)\n- Corner radius: `var(--border-radius-md)` for most elements, `var(--border-radius-lg)` for cards\n- Cards: white bg (`var(--color-background-primary)`), 0.5px border, radius-lg, padding 1rem 1.25rem\n- Form elements (input, select, textarea, button, range slider) are pre-styled — write bare tags. Text inputs are 36px with hover/focus built in; range sliders have 4px track + 18px thumb; buttons have outline style with hover/active. Only add inline styles to override (e.g., different width).\n- Buttons: pre-styled with transparent bg, 0.5px border-secondary, hover bg-secondary, active scale(0.98). If it triggers sendPrompt, append a ↗ arrow.\n- **Round every displayed number.** JS float math leaks artifacts — `0.1 + 0.2` gives `0.30000000000000004`, `7 * 1.1` gives `7.700000000000001`. Any number that reaches the screen (slider readouts, stat card values, axis labels, data-point labels, tooltips, computed totals) must go through `Math.round()`, `.toFixed(n)`, or `Intl.NumberFormat`. Pick the precision that makes sense for the context — integers for counts, 1–2 decimals for percentages, `toLocaleString()` for currency. For range sliders, also set `step=\"1\"` (or step=\"0.1\" etc.) so the input itself emits round values.\n- Spacing: use rem for vertical rhythm (1rem, 1.5rem, 2rem), px for component-internal gaps (8px, 12px, 16px)\n- Box-shadows: none, except `box-shadow: 0 0 0 Npx` focus rings on inputs\n\n### Metric cards\nFor summary numbers (revenue, count, percentage) — surface card with muted 13px label above, 24px/500 number below. `background: var(--color-background-secondary)`, no border, `border-radius: var(--border-radius-md)`, padding 1rem. Use in grids of 2-4 with `gap: 12px`. Distinct from raised cards (which have white bg + border).\n\n### Layout\n- Editorial (explanatory content): no card wrapper, prose flows naturally\n- Card (bounded objects like a contact record, receipt): single raised card wraps the whole thing\n- Don't put tables here — output them as markdown in your response text\n\n**Grid overflow:** `grid-template-columns: 1fr` has `min-width: auto` by default — children with large min-content push the column past the container. Use `minmax(0, 1fr)` to clamp.\n\n**Table overflow:** Tables with many columns auto-expand past `width: 100%` if cell contents exceed it. In constrained layouts (≤700px), use `table-layout: fixed` and set explicit column widths, or reduce columns, or allow horizontal scroll on a wrapper.\n\n### Mockup presentation\nContained mockups — mobile screens, chat threads, single cards, modals, small UI components — should sit on a background surface (`var(--color-background-secondary)` container with `border-radius: var(--border-radius-lg)` and padding, or a device frame) so they don't float naked on the widget canvas. Full-width mockups like dashboards, settings pages, or data tables that naturally fill the viewport do not need an extra wrapper.\n\n### 1. Interactive explainer — learn how something works\n*\"Explain how compound interest works\" / \"Teach me about sorting algorithms\"*\n\nUse HTML for the interactive controls — sliders, buttons, live state displays, charts. Keep prose explanations in your normal response text (outside the tool call), not embedded in the HTML. No card wrapper. Whitespace is the container.\n\n```html\n<div style=\"display: flex; align-items: center; gap: 12px; margin: 0 0 1.5rem;\">\n  <label style=\"font-size: 14px; color: var(--color-text-secondary);\">Years</label>\n  <input type=\"range\" min=\"1\" max=\"40\" value=\"20\" id=\"years\" style=\"flex: 1;\" />\n  <span style=\"font-size: 14px; font-weight: 500; min-width: 24px;\" id=\"years-out\">20</span>\n</div>\n\n<div style=\"display: flex; align-items: baseline; gap: 8px; margin: 0 0 1.5rem;\">\n  <span style=\"font-size: 14px; color: var(--color-text-secondary);\">£1,000 →</span>\n  <span style=\"font-size: 24px; font-weight: 500;\" id=\"result\">£3,870</span>\n</div>\n\n<div style=\"margin: 2rem 0; position: relative; height: 240px;\">\n  <canvas id=\"chart\"></canvas>\n</div>\n```\n\nUse `sendPrompt()` to let users ask follow-ups: `sendPrompt('What if I increase the rate to 10%?')`\n\n### 2. Compare options — decision making\n*\"Compare pricing and features of these products\" / \"Help me choose between React and Vue\"*\n\nUse HTML. Side-by-side card grid for options. Highlight differences with semantic colors. Interactive elements for filtering or weighting.\n\n- Use `repeat(auto-fit, minmax(160px, 1fr))` for responsive columns\n- Each option in a card. Use badges for key differentiators.\n- Add `sendPrompt()` buttons: `sendPrompt('Tell me more about the Pro plan')`\n- Don't put comparison tables inside this tool — output them as regular markdown tables in your response text instead. The tool is for the visual card grid only.\n- When one option is recommended or \"most popular\", accent its card with `border: 2px solid var(--color-border-info)` only (2px is deliberate — the only exception to the 0.5px rule, used to accent featured items) — keep the same background and border as the other cards. Add a small badge (e.g. \"Most popular\") above or inside the card header using `background: var(--color-background-info); color: var(--color-text-info); font-size: 12px; padding: 4px 12px; border-radius: var(--border-radius-md)`.\n\n### 3. Data record — bounded UI object\n*\"Show me a Salesforce contact card\" / \"Create a receipt for this order\"*\n\nUse HTML. Wrap the entire thing in a single raised card. All content is sans-serif since it's pure UI. Use an avatar/initials circle for people (see example below).\n\n```html\n<div style=\"background: var(--color-background-primary); border-radius: var(--border-radius-lg); border: 0.5px solid var(--color-border-tertiary); padding: 1rem 1.25rem;\">\n  <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 16px;\">\n    <div style=\"width: 44px; height: 44px; border-radius: 50%; background: var(--color-background-info); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 14px; color: var(--color-text-info);\">MR</div>\n    <div>\n      <p style=\"font-weight: 500; font-size: 15px; margin: 0;\">Maya Rodriguez</p>\n      <p style=\"font-size: 13px; color: var(--color-text-secondary); margin: 0;\">VP of Engineering</p>\n    </div>\n  </div>\n  <div style=\"border-top: 0.5px solid var(--color-border-tertiary); padding-top: 12px;\">\n    <table style=\"width: 100%; font-size: 13px;\">\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Email</td><td style=\"text-align: right; padding: 4px 0; color: var(--color-text-info);\">m.rodriguez@acme.com</td></tr>\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Phone</td><td style=\"text-align: right; padding: 4px 0;\">+1 (415) 555-0172</td></tr>\n    </table>\n  </div>\n</div>\n```\n\n\n## Color palette\n\n9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.\n\n| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |\n|-------|------|------|-----|-----|-----|-----|-----|------|\n| `c-purple` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |\n| `c-teal` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |\n| `c-coral` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |\n| `c-pink` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |\n| `c-gray` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |\n| `c-blue` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |\n| `c-green` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |\n| `c-amber` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |\n| `c-red` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |\n\n**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:\n- Group nodes by **category** — all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.\n- For illustrative diagrams, map colors to **physical properties** — warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.\n- Use **gray for neutral/structural** nodes (start, end, generic steps).\n- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.\n- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept — those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)\n\n**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --color-text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** — title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.\n\n**Light/dark mode quick pick** — use only stops from the table, never off-table hex values:\n- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**\n- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**\n- Apply `c-{ramp}` to a `<g>` wrapping shape+text, or directly to a `<rect>`/`<circle>`/`<ellipse>`. Never to `<path>` — paths don't get ramp fill. For colored connector strokes use inline `stroke=\"#...\"` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.\n\nFor status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.\n\n\n\n## Charts (Chart.js)\n```html\n<div style=\"position: relative; width: 100%; height: 300px;\">\n  <canvas id=\"myChart\" role=\"img\" aria-label=\"Bar chart of quarterly revenue, Q1 through Q4\">Quarterly revenue: Q1 12, Q2 19, Q3 8, Q4 15.</canvas>\n</div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js\"></script>\n<script>\n  new Chart(document.getElementById('myChart'), {\n    type: 'bar',\n    data: { labels: ['Q1','Q2','Q3','Q4'], datasets: [{ label: 'Revenue', data: [12,19,8,15] }] },\n    options: { responsive: true, maintainAspectRatio: false }\n  });\n</script>\n```\n\n**Chart.js rules**:\n- Every `<canvas>` MUST have `role=\"img\"` and a descriptive `aria-label` summarizing what the chart shows, plus fallback text between the tags. Without these the chart is invisible to screen readers.\n- Never rely on color alone to distinguish data series. Pair each color with a secondary visual cue — dash pattern for lines, marker shape for scatter, fill pattern/hatching for bars and pie slices — and show both color and cue in the legend.\n- Canvas cannot resolve CSS variables. Use hardcoded hex or Chart.js defaults.\n- Wrap `<canvas>` in `<div>` with explicit `height` and `position: relative`.\n- **Canvas sizing**: set height ONLY on the wrapper div, never on the canvas element itself. Use position: relative on the wrapper and responsive: true, maintainAspectRatio: false in Chart.js options. Never set CSS height directly on canvas — this causes wrong dimensions, especially for horizontal bar charts.\n- For horizontal bar charts: wrapper div height should be at least (number_of_bars * 40) + 80 pixels.\n- Load UMD build via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` — sets `window.Chart` global. Follow with plain `<script>` (no `type=\"module\"`).\n- Multiple charts: use unique IDs (`myChart1`, `myChart2`). Each gets its own canvas+div pair.\n- For bubble and scatter charts: bubble radii extend past their center points, so points near axis boundaries get clipped. Pad the scale range — set `scales.y.min` and `scales.y.max` ~10% beyond your data range (same for x). Or use `layout: { padding: 20 }` as a blunt fallback.\n- Chart.js auto-skips x-axis labels when they'd overlap. If you have ≤12 categories and need all labels visible (waterfall, monthly series), set `scales.x.ticks: { autoSkip: false, maxRotation: 45 }` — missing labels make bars unidentifiable.\n\n**Number formatting**: negative values are `-$5M` not `$-5M` — sign before currency symbol. Use a formatter: `(v) => (v < 0 ? '-' : '') + '$' + Math.abs(v) + 'M'`.\n\n**Legends** — always disable Chart.js default and build custom HTML. The default uses round dots and no values; custom HTML gives small squares, tight spacing, and percentages:\n\n```js\nplugins: { legend: { display: false } }\n```\n\n```html\n<div style=\"display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 8px; font-size: 12px; color: var(--color-text-secondary);\">\n  <span style=\"display: flex; align-items: center; gap: 4px;\"><span style=\"width: 10px; height: 10px; border-radius: 2px; background: #3266ad;\"></span>Chrome 65%</span>\n  <span style=\"display: flex; align-items: center; gap: 4px;\"><span style=\"width: 10px; height: 10px; border-radius: 2px; background: #73726c;\"></span>Safari 18%</span>\n</div>\n```\n\nInclude the value/percentage in each label when the data is categorical (pie, donut, single-series bar). Position the legend above the chart (`margin-bottom`) or below (`margin-top`) — not inside the canvas.\n\n**Dashboard layout** — wrap summary numbers in metric cards (see UI fragment) above the chart. Chart canvas flows below without a card wrapper. Use `sendPrompt()` for drill-down: `sendPrompt('Break down Q4 by region')`.\n\n## Geographic maps (D3 choropleth)\n\n**Never invent coordinates** — no hand-drawn SVG paths, no inline GeoJSON. Fetch real topology or don't draw a map.\n\nThree topology sources on jsdelivr. CSP only allows `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com` — do NOT try `raw.githubusercontent.com` or other hosts, the fetch will silently fail. Other package names like `uk-atlas` don't exist (404).\n- US states: `https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json` → `d3.geoAlbersUsa()`, object key `.states`\n- World countries: `https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json` → `d3.geoNaturalEarth1()`, object key `.countries`\n- Per-country subdivisions: `https://cdn.jsdelivr.net/npm/datamaps@0.5.10/src/js/data/{iso3}.topo.json` (lowercase alpha-3: `deu`, `jpn`, `gbr`...), object key `.{iso3}`\n\n**Before writing the widget, web_fetch the topology URL you'll use.** The first ~1KB shows the real feature `id` and `properties.name` values — key your data on those, don't guess. Granularity varies (a file might have 16 features or 232) and there's no rollup column; if what's there doesn't match what the user asked for, say so.\n\n```html\n<div id=\"map\" style=\"width: 100%;\"></div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js\"></script>\n<script>\nconst values = { 'California': 39, 'Texas': 30, 'New York': 19 /* ...keyed on what you saw in web_fetch */ };\nconst isDark = matchMedia('(prefers-color-scheme: dark)').matches;\nconst color = d3.scaleQuantize([0, 40], isDark ? d3.schemeBlues[5].slice().reverse() : d3.schemeBlues[5]);\nconst svg = d3.select('#map').append('svg').attr('viewBox', '0 0 900 560').attr('width', '100%');\nconst path = d3.geoPath(d3.geoAlbersUsa().scale(1100).translate([450, 280]));\nd3.json('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json').then(us => {\n  svg.selectAll('path').data(topojson.feature(us, us.objects.states).features).join('path')\n    .attr('d', path).attr('stroke', isDark ? 'rgba(255,255,255,.15)' : '#fff')\n    .attr('fill', d => color(values[d.properties.name] ?? 0));\n});\n</script>\n```\n",
      "uuid": "28737eba-d8ef-4c7f-94bb-525ba0a27b06"
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

Now I'll build an interactive Chart.js widget showing dσ/dΩ vs θ curves for all three regimes.

The mathematical forms I'll use (physically motivated approximations):

**Direct reaction** (~10⁻²² s):
- DWBA-like: forward-peaked with diffraction oscillations
- Form: `σ_direct(θ) = A · exp(-θ/θ₀) · [1 + B·cos(f·θ)]²`
- With A=100, θ₀=15°, B=0.35, f=0.25 (rad⁻¹ equivalent)


- Refining the formula to better capture the physics of stripping/pickup reactions with forward-peaked behavior and oscillating minima characteristic of DWBA calculations.

Writing the cross section function... Writing the chart visualization... Building the visualization... Writing the interactive chart... Building the chart configuration... Configuring the chart options with responsive sizing, disabled animations, and a custom tooltip that displays the scattering angle and cross-section values. Setting up the x-axis as a linear scale from 0 to 180 degrees with degree labels, and the y-axis for the differential cross-section...

Now I'm adding a function to toggle between linear and logarithmic scales on the y-axis, updating the chart's minimum value when switching to log scale and adjusting the button styling to indicate which scale is currently active.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T09:31:24.994893Z",
  "stop_timestamp": "2026-04-11T09:31:44.418656Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_015niux75VQTJ44h6voMRQRh",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": [
      "Computing angular distributions",
      "Plotting dσ/dΩ curves",
      "Tuning diffraction oscillations"
    ],
    "title": "dsigma_domega_angular_distributions",
    "widget_code": "<h2 class=\"sr-only\">dσ/dΩ versus θ curves for direct, pre-equilibrium, and compound nucleus reaction mechanisms, with log/linear y-axis toggle</h2>\n\n<div style=\"display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:14px;\">\n  <div style=\"display:flex;flex-wrap:wrap;gap:16px;font-size:12px;color:var(--color-text-secondary);\">\n    <span style=\"display:flex;align-items:center;gap:6px;\">\n      <svg width=\"22\" height=\"10\" style=\"flex-shrink:0\"><line x1=\"0\" y1=\"5\" x2=\"22\" y2=\"5\" stroke=\"#7F77DD\" stroke-width=\"2\"/></svg>\n      Direct &nbsp;~10⁻²² s\n    </span>\n    <span style=\"display:flex;align-items:center;gap:6px;\">\n      <svg width=\"22\" height=\"10\" style=\"flex-shrink:0\"><line x1=\"0\" y1=\"5\" x2=\"22\" y2=\"5\" stroke=\"#1D9E75\" stroke-width=\"2\" stroke-dasharray=\"6 3\"/></svg>\n      Pre-equilibrium &nbsp;~10⁻²¹ s\n    </span>\n    <span style=\"display:flex;align-items:center;gap:6px;\">\n      <svg width=\"22\" height=\"10\" style=\"flex-shrink:0\"><line x1=\"0\" y1=\"5\" x2=\"22\" y2=\"5\" stroke=\"#D85A30\" stroke-width=\"2\" stroke-dasharray=\"2 5\"/></svg>\n      Compound nucleus &nbsp;~10⁻¹⁸ s\n    </span>\n  </div>\n  <div style=\"display:flex;align-items:center;gap:6px;font-size:12px;color:var(--color-text-secondary);\">\n    <span>Scale:</span>\n    <button id=\"btn-log\"    onclick=\"setScale('log')\"    style=\"font-size:12px;padding:3px 10px;font-weight:500;\">log</button>\n    <button id=\"btn-linear\" onclick=\"setScale('linear')\" style=\"font-size:12px;padding:3px 10px;\">linear</button>\n  </div>\n</div>\n\n<div style=\"position:relative;width:100%;height:340px;\">\n  <canvas id=\"angChart\" role=\"img\" aria-label=\"Line chart of dσ/dΩ versus θ from 0 to 180 degrees. Direct reaction: sharp forward peak near 0° with diffraction oscillations decaying exponentially. Pre-equilibrium: broad forward-biased continuum. Compound nucleus: nearly flat isotropic curve with minor Legendre modulation.\">dσ/dΩ angular distributions for direct (forward-peaked with oscillations), pre-equilibrium (broad), and compound nucleus (isotropic) reaction mechanisms.</canvas>\n</div>\n\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js\"></script>\n<script>\nconst thetas = Array.from({length:181}, (_,i) => i);\n\nfunction direct(th) {\n  const env = 100 * Math.exp(-th / 13.5);\n  const osc = Math.pow(1 + 0.48 * Math.cos(th * Math.PI / 21), 2);\n  return Math.max(env * osc, 0.04);\n}\nfunction preEq(th) {\n  return 20 * Math.exp(-th / 52) + 7;\n}\nfunction compound(th) {\n  const c = Math.cos(th * Math.PI / 180);\n  const P2 = (3*c*c - 1) / 2;\n  const P4 = (35*c*c*c*c - 30*c*c + 3) / 8;\n  return 9.5 * (1 + 0.10*P2 + 0.03*P4);\n}\n\nconst isDark = matchMedia('(prefers-color-scheme: dark)').matches;\nconst gridCol = isDark ? 'rgba(255,255,255,0.07)' : 'rgba(0,0,0,0.055)';\nconst tickCol = isDark ? '#888780' : '#73726c';\n\nlet currentScale = 'log';\n\nconst cfg = {\n  type: 'line',\n  data: {\n    labels: thetas,\n    datasets: [\n      { label:'Direct',           data: thetas.map(direct),   borderColor:'#7F77DD', borderWidth:2, pointRadius:0, borderDash:[],   tension:0.25 },\n      { label:'Pre-equilibrium',  data: thetas.map(preEq),    borderColor:'#1D9E75', borderWidth:2, pointRadius:0, borderDash:[6,3], tension:0.25 },\n      { label:'Compound nucleus', data: thetas.map(compound), borderColor:'#D85A30', borderWidth:2, pointRadius:0, borderDash:[2,5], tension:0.25 }\n    ]\n  },\n  options: {\n    responsive: true,\n    maintainAspectRatio: false,\n    animation: { duration: 350 },\n    interaction: { mode:'index', intersect:false },\n    plugins: {\n      legend: { display:false },\n      tooltip: {\n        backgroundColor: isDark ? '#2C2C2A' : '#fff',\n        borderColor: isDark ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.10)',\n        borderWidth: 0.5,\n        titleColor: isDark ? '#c2c0b6' : '#3d3d3a',\n        bodyColor:  isDark ? '#888780' : '#73726c',\n        padding: 10,\n        callbacks: {\n          title: items => 'θ = ' + items[0].label + '°',\n          label: item => item.dataset.label + ': ' + item.raw.toFixed(2)\n        }\n      }\n    },\n    scales: {\n      x: {\n        type:'linear', min:0, max:180,\n        title:{ display:true, text:'θ (deg)', color:tickCol, font:{size:12} },\n        ticks:{ color:tickCol, font:{size:11}, callback: v => v+'°', stepSize:30 },\n        grid:{ color:gridCol }\n      },\n      y: {\n        type:'logarithmic',\n        min: 0.04,\n        title:{ display:true, text:'dσ/dΩ  (arb. units)', color:tickCol, font:{size:12} },\n        ticks:{\n          color:tickCol, font:{size:11},\n          callback: v => {\n            const neat = [100,10,1,0.1,0.01];\n            return neat.includes(v) ? (v < 0.1 ? v.toExponential(0) : v+'') : '';\n          }\n        },\n        grid:{ color:gridCol }\n      }\n    }\n  }\n};\n\nconst chart = new Chart(document.getElementById('angChart'), cfg);\n\nfunction setScale(s) {\n  currentScale = s;\n  chart.options.scales.y.type = s;\n  if (s === 'log') {\n    chart.options.scales.y.min = 0.04;\n    chart.options.scales.y.ticks.callback = v => {\n      const neat=[100,10,1,0.1,0.01];\n      return neat.includes(v) ? (v<0.1?v.toExponential(0):v+'') : '';\n    };\n  } else {\n    chart.options.scales.y.min = 0;\n    chart.options.scales.y.ticks.callback = v => Number.isInteger(v) ? v : '';\n  }\n  chart.update();\n  document.getElementById('btn-log').style.fontWeight    = s==='log'    ? '500' : '400';\n  document.getElementById('btn-linear').style.fontWeight = s==='linear' ? '500' : '400';\n}\n</script>\n"
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
  "tool_use_id": "toolu_015niux75VQTJ44h6voMRQRh",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "d47e636b-21a5-4354-aaad-afadf56d20ae"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "a6285de6-cc39-4f39-bb39-71a6a93fae78"
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

The three functional forms used are physically motivated approximations:

**Direct** — an exponential envelope times a squared cosine modulation, producing the characteristic forward peak with diffractive oscillations. These minima arise from coherent interference at the nuclear surface (analogous to optical diffraction), and their spacing encodes the transferred angular momentum ℓ.

**Pre-equilibrium** — a shallow exponential decay plus a constant offset (`20·e^{−θ/52} + 7`), reflecting partial loss of directional memory as the system thermalizes. The slight forward asymmetry persists because some nucleons escape before equilibration is complete.

**Compound nucleus** — a near-constant function modulated by P₂(cosθ) and a small P₄ term (Hauser-Feshbach), arising from spin-statistical coupling. The log scale makes this regime look like a flat floor; the linear scale makes the direct peak's dynamic range (~4 decades) fully apparent — toggling between the two is instructive.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7be0-aff4-7c7d-8003-cc899c9ca56b",
  "updated_at": "2026-04-11T09:32:08.148440Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7be0-aff4-7841-a21d-8482fe3a3a56"
}
```

</details>

### 5. human — 2026-04-11T09:37:04.342078Z

Explain the concept Pre-equilibrium for me

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7be6-e8fe-7668-b138-c6d6e6276709",
  "updated_at": "2026-04-11T09:37:04.342078Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7be0-aff4-7c7d-8003-cc899c9ca56b"
}
```

</details>

### 6. assistant — 2026-04-11T09:40:08.894186Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants a Feynman-technique explanation of pre-equilibrium. Let me read the feynman-technique skill.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T09:37:06.305803Z",
  "stop_timestamp": "2026-04-11T09:37:06.919213Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_014qQUtTUyJ4NqCdX7Dmd5ea",
  "name": "view",
  "input": {
    "description": "Reading Feynman technique skill",
    "path": "/mnt/skills/user/feynman-technique/SKILL.md"
  },
  "message": "Reading Feynman technique skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Reading Feynman technique skill"
  },
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
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
  "tool_use_id": "toolu_014qQUtTUyJ4NqCdX7Dmd5ea",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: feynman-technique\n     3\tdescription: \"Explain concepts using the Feynman Technique, treating the user as a 12-year-old non-native English speaker, with optional inline visual metaphor illustrations via concept-visualizer. Use this skill whenever the user says \\\"Feynman\\\", \\\"explain like I'm 12\\\", \\\"ELI12\\\", \\\"simple explanation\\\", \\\"teach me like a kid\\\", \\\"feynman-style\\\", \\\"explain it simply\\\", or any phrasing that requests a beginner-friendly, jargon-free breakdown of a concept. Works for any subject — physics, math, CS, machine learning, or everyday topics. Do NOT use for tasks like writing code, generating files, or editing documents.\"\n     4\t---\n     5\t\n     6\t# Feynman Technique Explainer\n     7\t\n     8\tExplain concepts to a smart, curious 12-year-old who speaks English as a second language. The goal is real understanding, not simplified words.\n     9\t\n    10\t## Explanation flow\n    11\t\n    12\tFor every explanation, follow these six steps in order:\n    13\t\n    14\t1. **Name it plainly.** One sentence saying what the thing *is* or *does*. No jargon yet.\n    15\t2. **One analogy.** Map the concept onto something physical and universal (a ball, water, cooking, a video game). Pick the best analogy and commit — don't list alternatives. If it breaks down somewhere, say so.\n    16\t3. **Show it.** Use the `concept-visualizer` skill to render the analogy as an inline visual. Pass the analogy object you chose in step 2 so the picture and the prose share the same metaphor. The visual appears here — between the analogy introduction and the detailed walkthrough — so the learner sees the whole shape before the parts. If the concept is too simple for a multi-panel visual (e.g., a single definition), skip this step.\n    17\t4. **Step-by-step logic.** Connect the analogy back to the real concept. One idea per sentence. Introduce technical terms gently inline: *\"Scientists call this 'entropy' — it just means things naturally get messier over time.\"*\n    18\t5. **Flag the tricky part.** Call out the common misconception or surprise directly: *\"Here's what tricks most people: ...\"*\n    19\t6. **Ask them to explain it back.** Low-pressure, not a test. E.g.: *\"If your friend asked you what [concept] is, what would you say?\"* If their answer has gaps, re-explain only that part. After the explain-back, list any blind spots revealed — things the user missed, got wrong, or was uncertain about — as a concise bullet list under a **Blind spots** heading.\n    20\t\n    21\tNever skip step 6 — it's the core of the technique.\n    22\t\n    23\t## Language rules\n    24\t\n    25\t- No idioms or slang (\"piece of cake\", \"ball is in your court\").\n    26\t- Expand acronyms on first use: \"CPU (the 'brain' of a computer)\".\n    27\t- Address the reader as \"you\" / \"we\".\n    28\t- Describe math in words first.\n    29\t- Don't open with a formal definition or Wikipedia-style paragraph.\n    30\t\n    31\t## Tone\n    32\t\n    33\tWarm and a little playful — like a favorite teacher. Never condescending: the *topic* is hard, not the person.\n    34\t\n    35\t## Follow-ups\n    36\t\n    37\tExtend the existing analogy if possible. Otherwise build a new small one. Always end with a gentle check: *\"Does that make sense?\"*\n    38\t\n    39\t## Broad topics\n    40\t\n    41\tBreak into small pieces. Teach one, check understanding, then move to the next. Stairs, not elevators.",
      "uuid": "f32a3238-f15f-4bf4-a941-f8396952f91e"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Now let me read the concept-visualizer skill to render a visual metaphor.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T09:37:13.673639Z",
  "stop_timestamp": "2026-04-11T09:37:13.796486Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_016eAMMgarpiVLRSouWYfHKd",
  "name": "view",
  "input": {
    "description": "Reading concept-visualizer skill",
    "path": "/mnt/skills/user/concept-visualizer/SKILL.md"
  },
  "message": "Reading concept-visualizer skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Reading concept-visualizer skill"
  },
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
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
  "tool_use_id": "toolu_016eAMMgarpiVLRSouWYfHKd",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: concept-visualizer\n     3\tdescription: \"Generate inline visual metaphor illustrations for general concepts using the Visualizer (show_widget). Turns abstract ideas into concrete, memorable SVG scenes — stick figures interacting with everyday objects to embody how a concept works. Use this skill whenever a user asks to 'visualize a concept', 'draw me a diagram of how X works', 'illustrate this idea', 'show me visually', 'make a visual explanation', or any phrasing requesting a pictorial/diagrammatic explanation of an abstract concept. Also trigger when another skill (e.g., Feynman-Technique) needs a visual aid for a concept it is explaining. Works for any domain: physics, math, CS, biology, economics, philosophy, ML, engineering, or everyday ideas. Do NOT use for data charts, UI mockups, word comparisons (use vocabulary-visualization instead), or file-based deliverables.\"\n     4\t---\n     5\t\n     6\t# Concept Visualizer\n     7\t\n     8\tTurn abstract concepts into concrete, memorable visual metaphors rendered inline via the Visualizer.\n     9\t\n    10\t## Core principle\n    11\t\n    12\tEvery concept has a **mechanism** — something it *does*. The job is to find an everyday object or situation that does the same thing visibly, then draw that.\n    13\t\n    14\t## Workflow\n    15\t\n    16\t### 1. Extract the mechanism\n    17\t\n    18\tAsk: *what does this concept actually do?* Strip away domain jargon and find the verb.\n    19\t\n    20\t| Concept | Mechanism |\n    21\t|---|---|\n    22\t| Entropy | Things spread out / get disordered over time |\n    23\t| Gradient descent | Feel which way is downhill, step that way, repeat |\n    24\t| Nuclear fission | One split triggers more splits (chain reaction) |\n    25\t| Recursion | Do the same task on a smaller version of itself |\n    26\t| Natural selection | Variants compete; survivors pass traits forward |\n    27\t| Opportunity cost | Choosing one path locks out another |\n    28\t\n    29\tOne sentence. If you can't state the mechanism simply, break the concept into sub-concepts and visualize each.\n    30\t\n    31\t### 2. Find the metaphor object\n    32\t\n    33\tPick ONE concrete, universally familiar object or situation whose behavior mirrors the mechanism. The metaphor must be:\n    34\t\n    35\t- **Physical and visible** — something you can draw (not another abstraction)\n    36\t- **Universally known** — no culture/domain-specific objects\n    37\t- **Structurally honest** — the metaphor's behavior genuinely parallels the concept, not just superficially\n    38\t\n    39\tGood sources: water, balls, stairs, rooms, doors, ropes/knots, trees, paths/forks, dominoes, containers, springs, seesaws, conveyor belts, pulleys, mirrors, sandcastles, crowds of people.\n    40\t\n    41\t**Honesty check**: where does the metaphor break down? Note this internally — you'll flag it in the prose after the visual.\n    42\t\n    43\t### 3. Decompose into 2–5 panels\n    44\t\n    45\tBreak the concept into sequential stages or contrasting states. Each panel = one moment/aspect.\n    46\t\n    47\tPanel types:\n    48\t- **Sequential** (A → B → C): for processes, transformations, chains of cause-and-effect\n    49\t- **Contrast** (A vs B): for comparisons, with/without, before/after\n    50\t- **Zoom** (whole → part → detail): for hierarchical or nested concepts\n    51\t\n    52\tEach panel gets:\n    53\t- A **scene**: the metaphor object + a stick figure in a specific posture/action\n    54\t- A **label**: 2–5 words naming the stage (e.g., \"Energy spreads out\")\n    55\t- A **reveal caption**: 1–2 sentences mapping the scene back to the real concept (shown on click)\n    56\t\n    57\t### 4. Render via Visualizer\n    58\t\n    59\tCall `visualize:read_me` with module `[\"diagram\"]` before the first `show_widget` call.\n    60\t\n    61\t**SVG structure:**\n    62\t\n    63\t- Panels arranged **left-to-right** in a single SVG, separated by subtle vertical dividers\n    64\t- Consistent canvas: each panel is a square cell within a wide strip\n    65\t- The metaphor object is **visually identical** across panels — only the figure's relationship to it changes\n    66\t- Stick figures communicate through **posture and spatial relationship**, not detail\n    67\t- Distinct muted color per panel stage; CSS-variable-aware for dark mode\n    68\t- Arrow or flow indicator between sequential panels\n    69\t- Click a panel → reveal caption fades in below the scene\n    70\t\n    71\t**Visual rules:**\n    72\t\n    73\t- Stick figures, not icons. Simple geometric shapes. No clip-art.\n    74\t- Maximum 5 panels — if the concept needs more, split into multiple visualizations\n    75\t- Labels use a clean sans-serif; captions in italic\n    76\t- No decorative elements that don't carry meaning\n    77\t- Consistent ground line across panels for visual continuity\n    78\t- Panel width: at least 140px each; total SVG viewBox width ≤ 800\n    79\t\n    80\t**Interactivity:**\n    81\t\n    82\t- Click/tap a panel to toggle its reveal caption\n    83\t- Subtle hover highlight on panels (opacity shift)\n    84\t- Active panel gets a gentle border highlight\n    85\t\n    86\t### 5. Prose after the visual\n    87\t\n    88\tDo NOT restate what the visual shows. Instead:\n    89\t\n    90\t- **Map it back**: one sentence explicitly connecting the metaphor to the real concept (\"The messy room is entropy — energy states spreading into less organized configurations.\")\n    91\t- **Flag the break**: where the metaphor stops working (\"Unlike a real room, entropy in physics is about *probability* of microstates, not just messiness.\")\n    92\t- **Extend an invitation**: a question or nudge to go deeper (\"Want to see why some processes *reverse* entropy? That's where it gets interesting.\")\n    93\t\n    94\t## Integration with other skills\n    95\t\n    96\tThis skill is designed to be called by other skills. When invoked from another skill's context:\n    97\t\n    98\t- Accept the concept and any analogy already established by the calling skill\n    99\t- If the calling skill (e.g., Feynman-Technique) has already chosen an analogy, **use that analogy** as the metaphor object — don't invent a competing one\n   100\t- If no analogy is provided, select one using step 2 above\n   101\t- Return the visual inline; the calling skill handles surrounding prose\n   102\t\n   103\t## Constraints\n   104\t\n   105\t- Metaphors must be structurally honest — don't force a visual that misrepresents the concept\n   106\t- All text in the SVG must be readable at default zoom (≥12px effective)\n   107\t- Use the Visualizer tool (`show_widget`), not file artifacts\n   108\t- One concept per visualization; compound concepts get multiple visuals\n   109\t",
      "uuid": "c4af3c1b-d5f8-4ba5-ae1c-65d844c39de2"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Now let me plan the Feynman explanation and visualization.

**Mechanism of pre-equilibrium**: A projectile hits the nucleus and starts colliding with nucleons. Some nucleons escape before the system fully thermalizes. It's intermediate between a single-step direct reaction and full compound nucleus thermalization.

**Analogy**: A billiard/pool ball break shot. When you smash the cue ball into a triangle of balls:
- Some balls fly off immediately (direct reaction)
- The cluster spins and jostles for a bit before settling (pre-equilibrium — some escape during this chaotic middle stage)
- Eventually everything comes to rest / re-equilibrates (compound nucleus)


- The pre-equilibrium regime is that chaotic middle phase where particles are still bouncing around and some escape with moderate energy before the system loses memory of the initial collision.

I'll create three sequential panels showing the billiard break analogy: the cue ball striking and one ball escaping instantly (direct reaction), the cluster still in motion with another particle escaping mid-chaos (pre-equilibrium), and finally the settled cluster with slow thermal emission (compound nucleus).

Building the SVG visualization... click interaction via JS.

For the stick figures/ball metaphor:
- The "cue ball" = incoming projectile
- The "triangle of billiard balls" = nucleus
- Escaping balls = emitted particles

Panel structure (each ~225px wide, height 220px):
- Ground line at y=180
- Panel labels at y=200
- Scene content y=40..175

Let me design each panel:

**Panel 1 - Direct** (x=0..224):
- Incoming arrow from left
- Billiard triangle at center
- One ball shooting out to the right at 0° (forward) with motion lines
- Label: "Direct"
- Caption: "Projectile knocks out one nucleon instantly — single collision, no memory of the nucleus"

**Panel 2 - Pre-equilibrium** (x=225..449):
- Scattered billiard cluster with multiple motion arrows
- One ball escaping at ~45° with moderate speed
- Label: "Pre-equilibrium"  
- Caption: "Multiple collisions happen, but the system hasn't thermalized yet — some nucleons escape during the chaos"

**Panel 3 - Compound** (x=450..680):
- Balls merged into a blob representing the compound nucleus
- One ball drifting out slowly at a random angle with an arc showing the randomness
- Label: "Compound nucleus"
- Caption: "All energy shared evenly — the nucleus 'forgets' how it was hit, emits particles in any direction equally"

I'll use simple circles for the billiard balls since they're intuitive and don't need complex stick figures. Now I'm building the SVG with the three panels laid out horizontally, each showing the progression of the nuclear reaction. Writing SVG code... Writing the interactive widget... Writing the interactive widget... Writing SVG panels... I'm laying out the positions and velocity vectors for each ball in the pre-equilibrium state, then moving on to show the compound nucleus forming at the center with isotropic emission arrows radiating outward and one dominant decay path. Now I'm writing the HTML structure...

Building the SVG visualization... Writing SVG diagram... Writing SVG visualization... Writing SVG visualization... Writing SVG visualization... Writing SVG visualization... Still writing SVG arrows... Writing SVG elements... Writing interactive descriptions... Adjusting the SVG layout — the flow arrows positioned at the divider lines look awkward, so I'm removing them entirely since the three panels already read as a clear sequence. Now reconsidering the second panel's escaping particle trajectory and its dashed line path. I need to handle the interaction text better—"tap a panel" initially, then reveal full descriptions on click. I'm also adding speed lines to the escaping ball in panel 2 and removing the arrow flow indicators to simplify the diagram. For panel 1, I should make sure the two remaining balls are visible after the collision, positioned slightly displaced from their original triangle formation.

The dashed trajectory line from the source ball to the ejected ball needs to be precise—running from the right edge of the stationary ball at around x=94 to the left edge of the flying ball at x=142, creating a clean 48-pixel dashed line that shows the ejection path clearly.

Writing the final SVG...

</details>

**Step 1 — what it is:** When a projectile hits a nucleus, instead of bouncing off one nucleon immediately (direct) or sharing its energy with every nucleon (compound), it gets "stuck in the middle" — setting off a cascade of collisions that is still ongoing when some nucleons escape.

**Step 2 — the analogy:** Imagine breaking a rack of billiard balls. The cue ball hits the pack and starts a chain of collisions. Some balls fly away immediately (direct), others drift off slowly after everything settles (compound nucleus) — but *right in the middle of the chaos*, before the cluster has stopped bouncing, a few balls escape. That is pre-equilibrium. Tap each panel below to see each stage:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T09:39:12.105557Z",
  "stop_timestamp": "2026-04-11T09:39:41.104203Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_013TU3vGJM8kjpfdw98bzVg9",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": [
      "Setting up the billiard table",
      "Racking the nucleons",
      "Breaking!"
    ],
    "title": "pre_equilibrium_billiard_analogy",
    "widget_code": "<h2 class=\"sr-only\">Three-panel billiard ball analogy illustrating direct, pre-equilibrium, and compound nucleus reaction stages. Tap each panel for an explanation.</h2>\n<style>\n.pnl { cursor:pointer; }\n.pnl .pbg { fill:transparent; transition:fill .15s; }\n.pnl:hover .pbg { fill:rgba(128,128,128,.05); }\n.pnl.act .pbg { fill:rgba(128,128,128,.08); }\n</style>\n\n<svg width=\"100%\" viewBox=\"0 0 680 200\" role=\"img\" aria-label=\"Billiard ball analogy for three nuclear reaction regimes: direct, pre-equilibrium, compound nucleus\">\n<title>Billiard break-shot analogy for nuclear reaction mechanisms</title>\n<defs>\n  <marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n\n<line x1=\"227\" y1=\"8\" x2=\"227\" y2=\"192\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n<line x1=\"453\" y1=\"8\" x2=\"453\" y2=\"192\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n\n<!-- PANEL 1: DIRECT -->\n<g class=\"pnl\" id=\"p1\" onclick=\"show(1)\">\n  <rect class=\"pbg\" x=\"1\" y=\"1\" width=\"225\" height=\"198\" rx=\"0\"/>\n  <circle cx=\"32\" cy=\"98\" r=\"9\" fill=\"#D3D1C7\" stroke=\"#5F5E5A\" stroke-width=\"0.8\"/>\n  <line x1=\"42\" y1=\"98\" x2=\"63\" y2=\"98\" stroke=\"#5F5E5A\" stroke-width=\"1.5\" marker-end=\"url(#a)\"/>\n  <circle cx=\"84\" cy=\"88\"  r=\"9\" fill=\"#AFA9EC\" stroke=\"#534AB7\" stroke-width=\"0.8\"/>\n  <circle cx=\"84\" cy=\"108\" r=\"9\" fill=\"#AFA9EC\" stroke=\"#534AB7\" stroke-width=\"0.8\"/>\n  <circle cx=\"100\" cy=\"98\" r=\"9\" fill=\"#AFA9EC\" stroke=\"#534AB7\" stroke-width=\"0.8\"/>\n  <line x1=\"110\" y1=\"88\" x2=\"140\" y2=\"88\" stroke=\"#534AB7\" stroke-width=\"1.5\" stroke-dasharray=\"4 2\" marker-end=\"url(#a)\"/>\n  <circle cx=\"154\" cy=\"88\" r=\"9\" fill=\"#7F77DD\" stroke=\"#3C3489\" stroke-width=\"1\"/>\n  <line x1=\"164\" y1=\"85\" x2=\"174\" y2=\"84\" stroke=\"#534AB7\" stroke-width=\"1\" opacity=\"0.5\"/>\n  <line x1=\"164\" y1=\"88\" x2=\"177\" y2=\"88\" stroke=\"#534AB7\" stroke-width=\"1.3\" opacity=\"0.75\"/>\n  <line x1=\"164\" y1=\"91\" x2=\"174\" y2=\"92\" stroke=\"#534AB7\" stroke-width=\"1\" opacity=\"0.5\"/>\n  <text font-family=\"var(--font-sans)\" font-size=\"13\" font-weight=\"500\" fill=\"#534AB7\" text-anchor=\"middle\" x=\"113\" y=\"150\">Direct</text>\n  <text font-family=\"var(--font-mono)\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" text-anchor=\"middle\" x=\"113\" y=\"165\">τ ~ 10⁻²² s</text>\n  <text font-family=\"var(--font-sans)\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" text-anchor=\"middle\" x=\"113\" y=\"183\">tap for details</text>\n</g>\n\n<!-- PANEL 2: PRE-EQUILIBRIUM -->\n<g class=\"pnl\" id=\"p2\" onclick=\"show(2)\">\n  <rect class=\"pbg\" x=\"228\" y=\"1\" width=\"224\" height=\"198\" rx=\"0\"/>\n  <circle cx=\"242\" cy=\"98\" r=\"8\" fill=\"#D3D1C7\" stroke=\"#5F5E5A\" stroke-width=\"0.8\"/>\n  <line x1=\"251\" y1=\"98\" x2=\"270\" y2=\"98\" stroke=\"#5F5E5A\" stroke-width=\"1.5\" marker-end=\"url(#a)\"/>\n  <circle cx=\"300\" cy=\"84\"  r=\"9\" fill=\"#9FE1CB\" stroke=\"#0F6E56\" stroke-width=\"0.8\"/>\n  <line x1=\"309\" y1=\"80\" x2=\"320\" y2=\"73\" stroke=\"#0F6E56\" stroke-width=\"1.2\" marker-end=\"url(#a)\"/>\n  <circle cx=\"318\" cy=\"106\" r=\"9\" fill=\"#9FE1CB\" stroke=\"#0F6E56\" stroke-width=\"0.8\"/>\n  <line x1=\"327\" y1=\"106\" x2=\"340\" y2=\"106\" stroke=\"#0F6E56\" stroke-width=\"1.2\" marker-end=\"url(#a)\"/>\n  <circle cx=\"334\" cy=\"86\"  r=\"9\" fill=\"#9FE1CB\" stroke=\"#0F6E56\" stroke-width=\"0.8\"/>\n  <line x1=\"331\" y1=\"77\" x2=\"327\" y2=\"66\" stroke=\"#0F6E56\" stroke-width=\"1.2\" marker-end=\"url(#a)\"/>\n  <circle cx=\"352\" cy=\"110\" r=\"9\" fill=\"#9FE1CB\" stroke=\"#0F6E56\" stroke-width=\"0.8\"/>\n  <line x1=\"361\" y1=\"113\" x2=\"372\" y2=\"119\" stroke=\"#0F6E56\" stroke-width=\"1.2\" marker-end=\"url(#a)\"/>\n  <line x1=\"368\" y1=\"78\" x2=\"380\" y2=\"68\" stroke=\"#085041\" stroke-width=\"1.4\" stroke-dasharray=\"3 2\" marker-end=\"url(#a)\"/>\n  <circle cx=\"393\" cy=\"60\" r=\"9\" fill=\"#1D9E75\" stroke=\"#085041\" stroke-width=\"1.2\"/>\n  <line x1=\"403\" y1=\"57\" x2=\"413\" y2=\"51\" stroke=\"#085041\" stroke-width=\"1.1\" opacity=\"0.6\"/>\n  <line x1=\"403\" y1=\"60\" x2=\"415\" y2=\"57\" stroke=\"#085041\" stroke-width=\"1.3\" opacity=\"0.8\"/>\n  <line x1=\"403\" y1=\"63\" x2=\"413\" y2=\"64\" stroke=\"#085041\" stroke-width=\"1.1\" opacity=\"0.6\"/>\n  <text font-family=\"var(--font-sans)\" font-size=\"13\" font-weight=\"500\" fill=\"#0F6E56\" text-anchor=\"middle\" x=\"340\" y=\"150\">Pre-equilibrium</text>\n  <text font-family=\"var(--font-mono)\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" text-anchor=\"middle\" x=\"340\" y=\"165\">τ ~ 10⁻²¹ s</text>\n  <text font-family=\"var(--font-sans)\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" text-anchor=\"middle\" x=\"340\" y=\"183\">tap for details</text>\n</g>\n\n<!-- PANEL 3: COMPOUND NUCLEUS -->\n<g class=\"pnl\" id=\"p3\" onclick=\"show(3)\">\n  <rect class=\"pbg\" x=\"454\" y=\"1\" width=\"225\" height=\"198\" rx=\"0\"/>\n  <circle cx=\"567\" cy=\"95\" r=\"30\" fill=\"#F5C4B3\" stroke=\"#993C1D\" stroke-width=\"1\"/>\n  <text font-family=\"var(--font-sans)\" font-size=\"12\" font-weight=\"500\" fill=\"#712B13\" text-anchor=\"middle\" x=\"567\" y=\"91\">CN</text>\n  <text font-family=\"var(--font-sans)\" font-size=\"10\" fill=\"#993C1D\" text-anchor=\"middle\" x=\"567\" y=\"104\">all merged</text>\n  <line x1=\"567\" y1=\"63\" x2=\"567\" y2=\"47\" stroke=\"#D85A30\" stroke-width=\"1\" stroke-dasharray=\"3 2\" marker-end=\"url(#a)\" opacity=\"0.4\"/>\n  <line x1=\"588\" y1=\"71\" x2=\"602\" y2=\"57\" stroke=\"#D85A30\" stroke-width=\"1\" stroke-dasharray=\"3 2\" marker-end=\"url(#a)\" opacity=\"0.4\"/>\n  <line x1=\"597\" y1=\"95\" x2=\"614\" y2=\"95\" stroke=\"#D85A30\" stroke-width=\"1\" stroke-dasharray=\"3 2\" marker-end=\"url(#a)\" opacity=\"0.4\"/>\n  <line x1=\"588\" y1=\"119\" x2=\"602\" y2=\"133\" stroke=\"#D85A30\" stroke-width=\"1\" stroke-dasharray=\"3 2\" marker-end=\"url(#a)\" opacity=\"0.4\"/>\n  <line x1=\"567\" y1=\"127\" x2=\"567\" y2=\"143\" stroke=\"#D85A30\" stroke-width=\"1\" stroke-dasharray=\"3 2\" marker-end=\"url(#a)\" opacity=\"0.4\"/>\n  <line x1=\"546\" y1=\"119\" x2=\"532\" y2=\"133\" stroke=\"#D85A30\" stroke-width=\"1\" stroke-dasharray=\"3 2\" marker-end=\"url(#a)\" opacity=\"0.4\"/>\n  <line x1=\"537\" y1=\"95\" x2=\"520\" y2=\"95\" stroke=\"#D85A30\" stroke-width=\"1\" stroke-dasharray=\"3 2\" marker-end=\"url(#a)\" opacity=\"0.4\"/>\n  <line x1=\"546\" y1=\"71\" x2=\"532\" y2=\"57\" stroke=\"#D85A30\" stroke-width=\"1\" stroke-dasharray=\"3 2\" marker-end=\"url(#a)\" opacity=\"0.4\"/>\n  <line x1=\"548\" y1=\"70\" x2=\"535\" y2=\"60\" stroke=\"#D85A30\" stroke-width=\"1.8\" marker-end=\"url(#a)\"/>\n  <circle cx=\"524\" cy=\"50\" r=\"9\" fill=\"#D85A30\" stroke=\"#712B13\" stroke-width=\"1\"/>\n  <text font-family=\"var(--font-sans)\" font-size=\"13\" font-weight=\"500\" fill=\"#993C1D\" text-anchor=\"middle\" x=\"567\" y=\"150\">Compound nucleus</text>\n  <text font-family=\"var(--font-mono)\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" text-anchor=\"middle\" x=\"567\" y=\"165\">τ ~ 10⁻¹⁸ s</text>\n  <text font-family=\"var(--font-sans)\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" text-anchor=\"middle\" x=\"567\" y=\"183\">tap for details</text>\n</g>\n</svg>\n\n<div id=\"cap\" style=\"min-height:54px;margin-top:14px;font-size:13px;color:var(--color-text-secondary);line-height:1.65;border-left:2px solid var(--color-border-secondary);padding-left:12px;border-radius:0;opacity:0.55;transition:opacity .2s;\">\n  Tap any panel above to reveal what is physically happening at that stage.\n</div>\n\n<script>\nconst caps = {\n  1: \"<span style='font-weight:500;color:var(--color-text-primary)'>Direct reaction:</span> The projectile hits one nucleon in a single clean collision and immediately ejects it — like the cue ball striking the front ball perfectly. The ejected nucleon carries most of the energy and flies forward (0°). The rest of the nucleus barely notices.\",\n  2: \"<span style='font-weight:500;color:var(--color-text-primary)'>Pre-equilibrium:</span> The projectile enters the nucleus and starts a chain of nucleon-nucleon collisions. The system is still bouncing — not yet thermalized — when some nucleons have already accumulated enough energy to escape. They exit at intermediate angles and carry a broad, continuous spectrum of energies. The nucleus <em>partly</em> remembers the beam direction.\",\n  3: \"<span style='font-weight:500;color:var(--color-text-primary)'>Compound nucleus:</span> All the energy has been shared equally among every nucleon — like billiard balls all mixed into a single warm blob. The nucleus has completely forgotten which direction the projectile came from (Bohr's independence hypothesis). It emits particles equally in all directions, described by Hauser-Feshbach statistics.\"\n};\nfunction show(n) {\n  [1,2,3].forEach(i => document.getElementById('p'+i).classList.toggle('act', i===n));\n  const box = document.getElementById('cap');\n  box.style.opacity = '1';\n  box.innerHTML = caps[n];\n}\n</script>\n"
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
  "tool_use_id": "toolu_013TU3vGJM8kjpfdw98bzVg9",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "1c93e712-f0af-43d9-9454-1f6eb507996f"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "8c62666e-1e33-4548-8a93-97b9c6ed8c06"
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

**Step 4 — connecting it back to the real physics:**

When a beam particle enters the nucleus, it collides with the first nucleon it meets. That nucleon collides with another, and so on — a cascade of two-body collisions called an *intranuclear cascade*. Each collision takes a small amount of time. If a nucleon has accumulated enough energy to escape *before* the cascade finishes distributing energy to every nucleon, it exits as a pre-equilibrium particle.

Scientists describe the state of the system using a number called the *exciton number* — it counts how many particle-hole excitations have been created so far. A small exciton number means early in the cascade (close to direct). A large one means nearly thermalized (close to compound). Pre-equilibrium emission happens at intermediate exciton numbers, and the Exciton Model or the Griffin model is used to calculate it.

**Step 5 — the tricky part:**

Most people think pre-equilibrium is just a "mix" of direct and compound, as if you take 50% of each. That is wrong. It is a *separate, transient regime* with its own physics. The particle is emitted *during* the thermalization process, not as a mixture of the two endpoints. This is why the energy spectrum is broad and continuous (not discrete like direct) but still forward-biased (not flat like compound).

**Step 6 — explain it back to me:**

Imagine your friend asks: *"Why do pre-equilibrium particles come out at intermediate angles instead of either straight forward or in all directions?"* What would you say?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7be6-e8fe-701b-9b7c-997d3573c885",
  "updated_at": "2026-04-11T09:40:08.894186Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7be6-e8fe-7668-b138-c6d6e6276709"
}
```

</details>

### 7. assistant — 2026-04-22T13:59:20.232209Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants a Feynman-style explanation of pre-equilibrium. Let me check the skill.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T13:55:36.853686Z",
  "stop_timestamp": "2026-04-22T13:55:37.305992Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_015d5XJxPHm9w33eqibUZGfr",
  "name": "view",
  "input": {
    "description": "Reading Feynman technique skill",
    "path": "/mnt/skills/user/feynman-technique/SKILL.md"
  },
  "message": "Reading Feynman technique skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Reading Feynman technique skill"
  },
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
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
  "tool_use_id": "toolu_015d5XJxPHm9w33eqibUZGfr",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: feynman-technique\n     3\tdescription: \"Explain concepts using the Feynman Technique, treating the user as a 12-year-old non-native English speaker, with optional inline visual metaphor illustrations via concept-visualizer. Use this skill whenever the user says \\\"Feynman\\\", \\\"explain like I'm 12\\\", \\\"ELI12\\\", \\\"simple explanation\\\", \\\"teach me like a kid\\\", \\\"feynman-style\\\", \\\"explain it simply\\\", or any phrasing that requests a beginner-friendly, jargon-free breakdown of a concept. Works for any subject — physics, math, CS, machine learning, or everyday topics. Do NOT use for tasks like writing code, generating files, or editing documents.\"\n     4\t---\n     5\t\n     6\t# Feynman Technique Explainer\n     7\t\n     8\tExplain concepts to a smart, curious 12-year-old who speaks English as a second language. The goal is real understanding, not simplified words.\n     9\t\n    10\t## Explanation flow\n    11\t\n    12\tFor every explanation, follow these six steps in order:\n    13\t\n    14\t1. **Name it plainly.** One sentence saying what the thing *is* or *does*. No jargon yet.\n    15\t2. **One analogy.** Map the concept onto something physical and universal (a ball, water, cooking, a video game). Pick the best analogy and commit — don't list alternatives. If it breaks down somewhere, say so.\n    16\t3. **Show it.** Use the `concept-visualizer` skill to render the analogy as an inline visual. Pass the analogy object you chose in step 2 so the picture and the prose share the same metaphor. The visual appears here — between the analogy introduction and the detailed walkthrough — so the learner sees the whole shape before the parts. If the concept is too simple for a multi-panel visual (e.g., a single definition), skip this step.\n    17\t4. **Step-by-step logic.** Connect the analogy back to the real concept. One idea per sentence. Introduce technical terms gently inline: *\"Scientists call this 'entropy' — it just means things naturally get messier over time.\"*\n    18\t5. **Flag the tricky part.** Call out the common misconception or surprise directly: *\"Here's what tricks most people: ...\"*\n    19\t6. **Ask them to explain it back.** Low-pressure, not a test. E.g.: *\"If your friend asked you what [concept] is, what would you say?\"* If their answer has gaps, re-explain only that part. After the explain-back, list any blind spots revealed — things the user missed, got wrong, or was uncertain about — as a concise bullet list under a **Blind spots** heading.\n    20\t\n    21\tNever skip step 6 — it's the core of the technique.\n    22\t\n    23\t## Language rules\n    24\t\n    25\t- No idioms or slang (\"piece of cake\", \"ball is in your court\").\n    26\t- Expand acronyms on first use: \"CPU (the 'brain' of a computer)\".\n    27\t- Address the reader as \"you\" / \"we\".\n    28\t- Describe math in words first.\n    29\t- Don't open with a formal definition or Wikipedia-style paragraph.\n    30\t\n    31\t## Tone\n    32\t\n    33\tWarm and a little playful — like a favorite teacher. Never condescending: the *topic* is hard, not the person.\n    34\t\n    35\t## Follow-ups\n    36\t\n    37\tExtend the existing analogy if possible. Otherwise build a new small one. Always end with a gentle check: *\"Does that make sense?\"*\n    38\t\n    39\t## Broad topics\n    40\t\n    41\tBreak into small pieces. Teach one, check understanding, then move to the next. Stairs, not elevators.",
      "uuid": "10af01bb-0907-4266-858f-0c54c8f47b7b"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T13:55:43.248931Z",
  "stop_timestamp": "2026-04-22T13:55:43.413800Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01AENcebz6RTCqKsauN42ZAd",
  "name": "view",
  "input": {
    "description": "Reading concept-visualizer skill",
    "path": "/mnt/skills/user/concept-visualizer/SKILL.md"
  },
  "message": "Reading concept-visualizer skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Reading concept-visualizer skill"
  },
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
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
  "tool_use_id": "toolu_01AENcebz6RTCqKsauN42ZAd",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: concept-visualizer\n     3\tdescription: \"Generate inline visual metaphor illustrations for general concepts using the Visualizer (show_widget). Turns abstract ideas into concrete, memorable SVG scenes — stick figures interacting with everyday objects to embody how a concept works. Use this skill whenever a user asks to 'visualize a concept', 'draw me a diagram of how X works', 'illustrate this idea', 'show me visually', 'make a visual explanation', or any phrasing requesting a pictorial/diagrammatic explanation of an abstract concept. Also trigger when another skill (e.g., Feynman-Technique) needs a visual aid for a concept it is explaining. Works for any domain: physics, math, CS, biology, economics, philosophy, ML, engineering, or everyday ideas. Do NOT use for data charts, UI mockups, word comparisons (use vocabulary-visualization instead), or file-based deliverables.\"\n     4\t---\n     5\t\n     6\t# Concept Visualizer\n     7\t\n     8\tTurn abstract concepts into concrete, memorable visual metaphors rendered inline via the Visualizer.\n     9\t\n    10\t## Core principle\n    11\t\n    12\tEvery concept has a **mechanism** — something it *does*. The job is to find an everyday object or situation that does the same thing visibly, then draw that.\n    13\t\n    14\t## Workflow\n    15\t\n    16\t### 1. Extract the mechanism\n    17\t\n    18\tAsk: *what does this concept actually do?* Strip away domain jargon and find the verb.\n    19\t\n    20\t| Concept | Mechanism |\n    21\t|---|---|\n    22\t| Entropy | Things spread out / get disordered over time |\n    23\t| Gradient descent | Feel which way is downhill, step that way, repeat |\n    24\t| Nuclear fission | One split triggers more splits (chain reaction) |\n    25\t| Recursion | Do the same task on a smaller version of itself |\n    26\t| Natural selection | Variants compete; survivors pass traits forward |\n    27\t| Opportunity cost | Choosing one path locks out another |\n    28\t\n    29\tOne sentence. If you can't state the mechanism simply, break the concept into sub-concepts and visualize each.\n    30\t\n    31\t### 2. Find the metaphor object\n    32\t\n    33\tPick ONE concrete, universally familiar object or situation whose behavior mirrors the mechanism. The metaphor must be:\n    34\t\n    35\t- **Physical and visible** — something you can draw (not another abstraction)\n    36\t- **Universally known** — no culture/domain-specific objects\n    37\t- **Structurally honest** — the metaphor's behavior genuinely parallels the concept, not just superficially\n    38\t\n    39\tGood sources: water, balls, stairs, rooms, doors, ropes/knots, trees, paths/forks, dominoes, containers, springs, seesaws, conveyor belts, pulleys, mirrors, sandcastles, crowds of people.\n    40\t\n    41\t**Honesty check**: where does the metaphor break down? Note this internally — you'll flag it in the prose after the visual.\n    42\t\n    43\t### 3. Decompose into 2–5 panels\n    44\t\n    45\tBreak the concept into sequential stages or contrasting states. Each panel = one moment/aspect.\n    46\t\n    47\tPanel types:\n    48\t- **Sequential** (A → B → C): for processes, transformations, chains of cause-and-effect\n    49\t- **Contrast** (A vs B): for comparisons, with/without, before/after\n    50\t- **Zoom** (whole → part → detail): for hierarchical or nested concepts\n    51\t\n    52\tEach panel gets:\n    53\t- A **scene**: the metaphor object + a stick figure in a specific posture/action\n    54\t- A **label**: 2–5 words naming the stage (e.g., \"Energy spreads out\")\n    55\t- A **reveal caption**: 1–2 sentences mapping the scene back to the real concept (shown on click)\n    56\t\n    57\t### 4. Render via Visualizer\n    58\t\n    59\tCall `visualize:read_me` with module `[\"diagram\"]` before the first `show_widget` call.\n    60\t\n    61\t**SVG structure:**\n    62\t\n    63\t- Panels arranged **left-to-right** in a single SVG, separated by subtle vertical dividers\n    64\t- Consistent canvas: each panel is a square cell within a wide strip\n    65\t- The metaphor object is **visually identical** across panels — only the figure's relationship to it changes\n    66\t- Stick figures communicate through **posture and spatial relationship**, not detail\n    67\t- Distinct muted color per panel stage; CSS-variable-aware for dark mode\n    68\t- Arrow or flow indicator between sequential panels\n    69\t- Click a panel → reveal caption fades in below the scene\n    70\t\n    71\t**Visual rules:**\n    72\t\n    73\t- Stick figures, not icons. Simple geometric shapes. No clip-art.\n    74\t- Maximum 5 panels — if the concept needs more, split into multiple visualizations\n    75\t- Labels use a clean sans-serif; captions in italic\n    76\t- No decorative elements that don't carry meaning\n    77\t- Consistent ground line across panels for visual continuity\n    78\t- Panel width: at least 140px each; total SVG viewBox width ≤ 800\n    79\t\n    80\t**Interactivity:**\n    81\t\n    82\t- Click/tap a panel to toggle its reveal caption\n    83\t- Subtle hover highlight on panels (opacity shift)\n    84\t- Active panel gets a gentle border highlight\n    85\t\n    86\t### 5. Prose after the visual\n    87\t\n    88\tDo NOT restate what the visual shows. Instead:\n    89\t\n    90\t- **Map it back**: one sentence explicitly connecting the metaphor to the real concept (\"The messy room is entropy — energy states spreading into less organized configurations.\")\n    91\t- **Flag the break**: where the metaphor stops working (\"Unlike a real room, entropy in physics is about *probability* of microstates, not just messiness.\")\n    92\t- **Extend an invitation**: a question or nudge to go deeper (\"Want to see why some processes *reverse* entropy? That's where it gets interesting.\")\n    93\t\n    94\t## Integration with other skills\n    95\t\n    96\tThis skill is designed to be called by other skills. When invoked from another skill's context:\n    97\t\n    98\t- Accept the concept and any analogy already established by the calling skill\n    99\t- If the calling skill (e.g., Feynman-Technique) has already chosen an analogy, **use that analogy** as the metaphor object — don't invent a competing one\n   100\t- If no analogy is provided, select one using step 2 above\n   101\t- Return the visual inline; the calling skill handles surrounding prose\n   102\t\n   103\t## Constraints\n   104\t\n   105\t- Metaphors must be structurally honest — don't force a visual that misrepresents the concept\n   106\t- All text in the SVG must be readable at default zoom (≥12px effective)\n   107\t- Use the Visualizer tool (`show_widget`), not file artifacts\n   108\t- One concept per visualization; compound concepts get multiple visuals\n   109\t",
      "uuid": "508c9641-0b0a-4f77-841a-a6165ed42122"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Now I'll explain pre-equilibrium using the Feynman technique with a concept visualization. Let me plan:

1. **Name it plainly**: Pre-equilibrium is when some particles escape from a nuclear collision before the nucleus has time to fully "calm down" and share energy equally.

2. **Analogy**: A cue ball hitting a tight rack of billiard balls — some balls fly off immediately (direct), most tumble around before settling (pre-equilibrium), and eventually everything comes to rest and rolls slowly (compound). 

Actually, a better analogy for pre-equilibrium specifically: imagine dropping a hot marble into a box of cold marbles. 

The marbles closest to the impact get knocked away right at the moment of collision, before the heat spreads throughout the whole system — that's the essence of pre-equilibrium emission. I could also frame it as someone tossing a ball into a crowded room where the nearest people scatter out the door immediately, before the disturbance has time to ripple through everyone.

3. **Visual**: I'll create a 4-panel sequence showing the projectile striking the nucleus, the first particles escaping at forward angles before equilibrium is reached, and then the slower compound nucleus decay that follows.

4. **Step-by-step**: I need to tie this back to the nuclear physics framework.

5. **Tricky part**: Pre-equilibrium isn't a single well-defined mechanism but rather a temporal stage, and forward-angle emission alone doesn't prove it's happening.

6. **Explain back**: I should circle back to how this connects to the original question.

Now I'm building the SVG visualization with four panels to show the progression from impact through equilibration.

Writing SVG panels... Writing SVG panels... Writing SVG panels... Writing the interactive widget... - all r=10
- Projectile: circle r=10 at x=50, y=110
- Arrow from x=62 to x=88 along y=110 (motion arrow)
- Label: "Projectile arrives" at bottom

**Panel 2 (x=175, "First escape")**:
- Panel rect: x=175, y=20, w=155, h=180
- Nucleus cluster at x=285, y=115 (slightly disrupted, missing one)
  - 4 circles (one has escaped)
- Escaped particle: circle r=10 at x=315, y=80, colored differently (purple/teal)
- Arrow from cluster toward escaped particle
- Label: "Pre-eq. emission"

**Panel 3 (x=340, "Energy spreading")**:
- Panel rect: x=340, y=20, w=155, h=180
- Nucleus cluster at x=450, y=115, with internal motion arrows (

Now I'm laying out the remaining panels with the projectile approaching the nucleus in panel 1, then showing the first particle escaping in panel 2 with the accent color, and panel 3 depicting energy distribution through the nucleus with motion indicators.

For panel 4, I'll show the final equilibrium state with particles radiating outward isotropically from a small central cluster. I'm setting up the SVG structure with arrow markers in the defs section and positioning all the panel labels near the bottom at y=185. The captions will explain the progression from the initial collision through pre-equilibrium emission to the final isotropic decay.

Writing SVG code... Writing SVG styles...

Actually, I need to reconsider how CSS variables work with SVG fill attributes—they don't work directly in the fill attribute itself, but they do work when applied through inline styles. Modern browsers support this, so I can use `style="fill: var(--color-background-secondary)"` to make the SVG elements respect the theme variables.

For the nuclear circles and particles though, I should hardcode the colors to ensure they're visible in both light and dark modes. I'm settling on a palette of muted colors that work across themes: a soft blue for the nucleus circles, teal for pre-equilibrium particles, amber for the hot nucleus, and coral for equilibrium particles. These lighter shades remain visible regardless of the background.

Writing the SVG structure... Building the SVG panels... Writing SVG visualization... Building the SVG visualization... Writing SVG arrows... Writing SVG styles...

I need to restructure this so each panel is grouped with its own click handler instead of relying on hover states across scattered elements. Using `<g>` elements will make the interactivity much cleaner.

Let me verify my coordinate spacing is correct—the panels are evenly distributed across the width with proper margins, and the total fits within the viewBox. For the nucleus visualization in the first panel, I'm going to tighten up the circle positions around a central point rather than spreading them out. I'm settling on a simpler five-circle pattern arranged in a plus sign with the center at (120, 100) and the four surrounding circles spaced 18 pixels away, which creates a slight 2-pixel overlap that works fine for the nucleus illustration. Now I need to check if this positioning makes sense relative to the panel's center at x=87.5, since my nucleus is shifted toward the right side.

The projectile starts at x=48 with a radius of 10, so its right edge reaches x=58, and I'm drawing an arrow from x=62 that stops at x=89, just before the leftmost nucleus circle at x=92. For panel 2, I'm repositioning the nucleus cluster center to x=265 to show it shifted rightward from where the projectile came from, with one particle escaping to indicate the collision effect.

Now I'm checking the bounds for panel 3 and 4. The escaped particle in panel 2 sits at x=320, well within the panel's right edge at x=330. In panel 3, I'm centering the nucleus at x=430 with the cluster positioned slightly right of the panel's center, and the escaped particle at x=478 stays safely within bounds. For panel 4, I'm placing the compound nucleus at x=582 with particles radiating outward in different directions.

Now I'm working out the viewBox dimensions. The panels span from y=15 to y=200, with labels and hints extending to y=192, so I need a total height of around 210 to accommodate everything including the caption below.

Writing the HTML and styles... Writing SVG visualization... Writing SVG visualization... Writing SVG visualization... Writing SVG visualization... Finishing up the SVG diagram with divider lines, then adding an interactive caption box that prompts users to tap panels for more information. Now I'm setting up the JavaScript to handle the interactive explanations for each collision stage. I'm setting up the interactive panel system with a function that toggles between different stages, highlighting the active panel and updating the caption text to show the corresponding explanation for each phase of the nuclear reaction.

Now I'm checking the coordinate bounds for each panel to make sure all elements fit within their boundaries—the projectile, nuclei, escaped particles, and labels all need to stay within the designated x and y ranges, and I'm catching an issue where some speed streaks extend beyond the panel bounds that I need to adjust. Finalizing the SVG code with adjusted speed streaks that stay within bounds, and double-checking the arrow positioning in panel 2 to make sure it aligns properly with the particle cluster.

Now I need to trace the escape trajectory more carefully—the arrow should originate from the edge of the nearest cluster circle and point toward the escaped particle at (316, 58), accounting for the geometry and angle of the motion.

Writing the final SVG...

</details>

**Language note:** "explain the concept Pre-equilibrium for me" → "explain the pre-equilibrium concept to me" (or simply "explain pre-equilibrium to me").

---

**Step 1 — what it is in one sentence:**
Pre-equilibrium emission is when a particle escapes a nuclear collision *during* the energy-spreading process — after the first hit, but *before* the nucleus has fully shared that energy among all its nucleons.

---

**Step 2 — the analogy:**
Imagine you throw a billiard ball hard into a tight rack of fifteen balls. At the very moment of impact, the two or three balls at the front get hit violently and fly off immediately in the forward direction — they do not wait for the whole rack to "discuss" the collision and settle. Those first balls that fly off before everything calms down — *that* is pre-equilibrium emission. The nucleus is the rack; the nucleons that escape early are those first flying balls.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T13:58:20.736365Z",
  "stop_timestamp": "2026-04-22T13:58:44.837294Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01HCzUEJaBDPPyoybnkxv2qh",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": "[\"Drawing the billiard rack analogy\", \"Animating the collision stages\"]",
    "title": "pre_equilibrium_concept_visualizer",
    "widget_code": "<h2 class=\"sr-only\">Four-panel visual analogy for pre-equilibrium nuclear emission: projectile arrives, early escape at forward angle, energy spreading, and isotropic equilibrium emission.</h2>\n\n<style>\n.pb{fill:var(--color-background-secondary);stroke:var(--color-border-tertiary);stroke-width:0.5;transition:stroke .15s,stroke-width .15s}\n.pg{cursor:pointer}.pg:hover .pb,.pg.active .pb{stroke:#1D9E75;stroke-width:1}\n.nc{fill:#B5D4F4;stroke:#185FA5;stroke-width:1}\n.npreq{fill:#9FE1CB;stroke:#0F6E56;stroke-width:1.5}\n.nhot{fill:#FAC775;stroke:#854F0B;stroke-width:1}\n.ncomp{fill:#F5C4B3;stroke:#993C1D;stroke-width:1}\n.proj{fill:#AFA9EC;stroke:#534AB7;stroke-width:1.5}\n.plbl{font-size:11px;font-weight:500;fill:var(--color-text-secondary);font-family:var(--font-sans);text-anchor:middle}\n.hint{font-size:10px;fill:var(--color-text-tertiary);font-family:var(--font-sans);text-anchor:middle}\n</style>\n\n<svg width=\"100%\" viewBox=\"0 0 680 210\" role=\"img\" aria-label=\"Four panels showing: projectile arriving, pre-equilibrium particle escaping forward, energy spreading, and isotropic compound nucleus emission\">\n  <title>Pre-equilibrium emission: four stages</title>\n  <defs>\n    <marker id=\"a2\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\">\n      <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke=\"context-stroke\"/>\n    </marker>\n  </defs>\n\n  <g class=\"pg\" id=\"p1\" onclick=\"showCap(0)\">\n    <rect class=\"pb\" x=\"10\" y=\"15\" width=\"155\" height=\"180\" rx=\"8\"/>\n    <circle class=\"nc\" cx=\"128\" cy=\"100\" r=\"10\"/>\n    <circle class=\"nc\" cx=\"110\" cy=\"100\" r=\"10\"/>\n    <circle class=\"nc\" cx=\"146\" cy=\"100\" r=\"10\"/>\n    <circle class=\"nc\" cx=\"128\" cy=\"82\"  r=\"10\"/>\n    <circle class=\"nc\" cx=\"128\" cy=\"118\" r=\"10\"/>\n    <circle class=\"proj\" cx=\"47\" cy=\"100\" r=\"10\"/>\n    <line x1=\"60\" y1=\"100\" x2=\"93\" y2=\"100\" stroke=\"#534AB7\" stroke-width=\"2\" marker-end=\"url(#a2)\"/>\n    <text class=\"plbl\" x=\"87\" y=\"172\">Projectile arrives</text>\n    <text class=\"hint\" x=\"87\" y=\"187\">tap</text>\n  </g>\n\n  <g class=\"pg\" id=\"p2\" onclick=\"showCap(1)\">\n    <rect class=\"pb\" x=\"175\" y=\"15\" width=\"155\" height=\"180\" rx=\"8\"/>\n    <circle class=\"nc\" cx=\"264\" cy=\"105\" r=\"10\"/>\n    <circle class=\"nc\" cx=\"246\" cy=\"105\" r=\"10\"/>\n    <circle class=\"nc\" cx=\"264\" cy=\"87\"  r=\"10\"/>\n    <circle class=\"nc\" cx=\"246\" cy=\"87\"  r=\"10\"/>\n    <circle class=\"npreq\" cx=\"310\" cy=\"58\" r=\"10\"/>\n    <line x1=\"276\" y1=\"80\" x2=\"303\" y2=\"65\" stroke=\"#0F6E56\" stroke-width=\"2\" marker-end=\"url(#a2)\"/>\n    <line x1=\"314\" y1=\"50\" x2=\"320\" y2=\"44\" stroke=\"#0F6E56\" stroke-width=\"1\" opacity=\"0.5\"/>\n    <line x1=\"319\" y1=\"57\" x2=\"326\" y2=\"52\" stroke=\"#0F6E56\" stroke-width=\"1\" opacity=\"0.5\"/>\n    <text class=\"plbl\" x=\"252\" y=\"172\">Pre-eq. emission</text>\n    <text class=\"hint\" x=\"252\" y=\"187\">tap</text>\n  </g>\n\n  <g class=\"pg\" id=\"p3\" onclick=\"showCap(2)\">\n    <rect class=\"pb\" x=\"340\" y=\"15\" width=\"155\" height=\"180\" rx=\"8\"/>\n    <circle class=\"nhot\" cx=\"428\" cy=\"103\" r=\"10\"/>\n    <circle class=\"nhot\" cx=\"410\" cy=\"103\" r=\"10\"/>\n    <circle class=\"nhot\" cx=\"446\" cy=\"103\" r=\"10\"/>\n    <circle class=\"nhot\" cx=\"428\" cy=\"85\"  r=\"10\"/>\n    <circle class=\"nhot\" cx=\"428\" cy=\"121\" r=\"10\"/>\n    <line x1=\"416\" y1=\"103\" x2=\"412\" y2=\"94\" stroke=\"#854F0B\" stroke-width=\"1.2\" marker-end=\"url(#a2)\" opacity=\"0.7\"/>\n    <line x1=\"438\" y1=\"100\" x2=\"448\" y2=\"95\" stroke=\"#854F0B\" stroke-width=\"1.2\" marker-end=\"url(#a2)\" opacity=\"0.7\"/>\n    <line x1=\"428\" y1=\"115\" x2=\"432\" y2=\"125\" stroke=\"#854F0B\" stroke-width=\"1.2\" marker-end=\"url(#a2)\" opacity=\"0.7\"/>\n    <circle class=\"npreq\" cx=\"472\" cy=\"68\" r=\"8\"/>\n    <line x1=\"458\" y1=\"88\" x2=\"467\" y2=\"74\" stroke=\"#0F6E56\" stroke-width=\"1.5\" marker-end=\"url(#a2)\"/>\n    <text class=\"plbl\" x=\"417\" y=\"172\">Energy spreading</text>\n    <text class=\"hint\" x=\"417\" y=\"187\">tap</text>\n  </g>\n\n  <g class=\"pg\" id=\"p4\" onclick=\"showCap(3)\">\n    <rect class=\"pb\" x=\"505\" y=\"15\" width=\"155\" height=\"180\" rx=\"8\"/>\n    <circle class=\"ncomp\" cx=\"582\" cy=\"105\" r=\"12\"/>\n    <circle class=\"ncomp\" cx=\"582\" cy=\"73\"  r=\"7\"/>\n    <line x1=\"582\" y1=\"92\" x2=\"582\" y2=\"79\"  stroke=\"#993C1D\" stroke-width=\"1.5\" marker-end=\"url(#a2)\"/>\n    <circle class=\"ncomp\" cx=\"609\" cy=\"81\"  r=\"7\"/>\n    <line x1=\"594\" y1=\"96\" x2=\"604\" y2=\"86\"  stroke=\"#993C1D\" stroke-width=\"1.5\" marker-end=\"url(#a2)\"/>\n    <circle class=\"ncomp\" cx=\"617\" cy=\"111\" r=\"7\"/>\n    <line x1=\"595\" y1=\"108\" x2=\"609\" y2=\"110\" stroke=\"#993C1D\" stroke-width=\"1.5\" marker-end=\"url(#a2)\"/>\n    <circle class=\"ncomp\" cx=\"582\" cy=\"136\" r=\"7\"/>\n    <line x1=\"582\" y1=\"118\" x2=\"582\" y2=\"130\" stroke=\"#993C1D\" stroke-width=\"1.5\" marker-end=\"url(#a2)\"/>\n    <circle class=\"ncomp\" cx=\"555\" cy=\"128\" r=\"7\"/>\n    <line x1=\"570\" y1=\"115\" x2=\"560\" y2=\"124\" stroke=\"#993C1D\" stroke-width=\"1.5\" marker-end=\"url(#a2)\"/>\n    <circle class=\"ncomp\" cx=\"547\" cy=\"99\"  r=\"7\"/>\n    <line x1=\"569\" y1=\"104\" x2=\"554\" y2=\"102\" stroke=\"#993C1D\" stroke-width=\"1.5\" marker-end=\"url(#a2)\"/>\n    <text class=\"plbl\" x=\"582\" y=\"172\">Isotropic emission</text>\n    <text class=\"hint\" x=\"582\" y=\"187\">tap</text>\n  </g>\n\n  <line x1=\"168\" y1=\"22\" x2=\"168\" y2=\"196\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n  <line x1=\"333\" y1=\"22\" x2=\"333\" y2=\"196\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n  <line x1=\"498\" y1=\"22\" x2=\"498\" y2=\"196\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n</svg>\n\n<div id=\"cap\" style=\"padding:10px 14px;font-size:13px;color:var(--color-text-secondary);border:0.5px solid var(--color-border-tertiary);border-radius:var(--border-radius-md);margin-top:8px;line-height:1.6;min-height:50px;\">\n  Tap any panel to see what is happening at that stage.\n</div>\n\n<script>\nconst caps = [\n  \"A fast projectile nucleus hits the target. At this first moment, the energy is concentrated at the collision point — most nucleons have not yet felt anything. The nucleus is 'cold' everywhere except right at the impact point.\",\n  \"Before the energy has spread to all nucleons, one lucky nucleon receives a large hit directly and escapes immediately. This is <strong>pre-equilibrium emission</strong>. It exits very fast, mostly in the <em>forward direction</em> (small angle θ), because it is still moving in the direction of the original projectile.\",\n  \"Energy bounces from nucleon to nucleon inside the nucleus — like a pinball machine. A few more nucleons may escape during this phase from <em>wider angles</em>, but they still carry some 'memory' of the forward direction. The system is partially thermalized but not yet in full equilibrium.\",\n  \"After ~10⁻¹⁸ s, energy is shared equally among all nucleons. The nucleus has completely <em>forgotten</em> where the projectile came from. This is the <strong>compound nucleus</strong>. Particles now escape equally in all directions — isotropic emission, described by Hauser-Feshbach statistics.\"\n];\nconst ids = ['p1','p2','p3','p4'];\nlet cur = -1;\nfunction showCap(i) {\n  if (cur >= 0) document.getElementById(ids[cur]).classList.remove('active');\n  if (cur === i) { cur=-1; document.getElementById('cap').innerHTML='Tap any panel to see what is happening at that stage.'; return; }\n  cur = i;\n  document.getElementById(ids[i]).classList.add('active');\n  document.getElementById('cap').innerHTML = caps[i];\n}\n</script>\n"
  },
  "message": null,
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
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
  "tool_use_id": "toolu_01HCzUEJaBDPPyoybnkxv2qh",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Tool 'visualize:show_widget' not found.",
      "uuid": "a3d92024-f62f-4bfd-9fa8-8ab2546881af"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": null,
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T13:58:51.421254Z",
  "stop_timestamp": "2026-04-22T13:58:51.421254Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01EHUqDb99Ssvm3FTGKQeQBa",
  "name": "visualize:read_me",
  "input": {
    "modules": "[\"interactive\"]"
  },
  "message": null,
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
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
  "tool_use_id": "toolu_01EHUqDb99Ssvm3FTGKQeQBa",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "Tool 'visualize:read_me' not found.",
      "uuid": "70996a9d-6ffe-4fce-9bb3-18bbd57fa07f"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
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

The visualizer tool isn't available. Let me just continue with the text explanation without the visualization. The Feynman technique still applies - I'll explain it thoroughly in text.

</details>

*(The visualizer tool is unavailable in this session — continuing with the explanation.)*

---

**Step 4 — connecting the analogy back to the real physics:**

When a fast nucleus (say, a carbon beam) hits a target nucleus, we can think of the collision as a sequence of two-body *nucleon-nucleon* collisions inside the nuclear volume. The very first hit gives one nucleon a huge amount of energy. That nucleon is now "hot" while everyone else is still "cold."

If it happens to be near the nuclear surface, it can simply walk out before anyone notices. Scientists call this an **exciton** — a particle that has been promoted to a high energy state. At first there is just one exciton. Then the exciton bumps into another nucleon, creating two excitons. Then four, and so on. The number of excitons grows with time, and with each step the excitation energy spreads more evenly. Physicists describe this process using the **exciton model** (Griffin, 1966) or the more complete **intranuclear cascade** picture.

At each step during this thermalization, there is a probability that an exciton near the surface can escape. These early escapees are the pre-equilibrium particles. They carry away part of the energy *before* the nucleus reaches full thermal equilibrium.

The key signature in your experiment is the **angular distribution**: because pre-equilibrium particles still carry some memory of the projectile's direction, they emerge preferentially at *intermediate forward angles* — not as forward as a direct reaction, not as isotropic as a compound nucleus. That intermediate shape in dσ/dΩ is exactly what you saw in the visualization earlier.

---

**Step 5 — the tricky part:**

Here is what confuses most people: pre-equilibrium is not a separate, well-defined mechanism the way "compound nucleus" is. It is a *stage* — a continuous transition. There is no sharp moment when the nucleus switches from "pre-equilibrium" to "compound." The exciton number grows smoothly, the angular distribution evolves smoothly from forward-peaked to isotropic, and the timescale (~10⁻²¹ s) is simply the characteristic time for this intermediate zone. In your PID data, you will see all three regimes *mixed together* in the measured spectrum, and separating them requires either careful model fitting or selecting specific final states.

---

**Step 6 — explain it back:**

If a colleague asked you "what is pre-equilibrium emission?", what would you say? Give it a try in one or two sentences — no pressure, it is just to check that the idea is solid.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db579-728e-7c52-8dfc-2d8760299e5e",
  "updated_at": "2026-04-22T13:59:20.232209Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7be6-e8fe-7668-b138-c6d6e6276709"
}
```

</details>

### 8. assistant — 2026-04-22T14:05:35.323484Z

 

<details>
<summary>Thinking (verbatim)</summary>

 I'm checking whether the user actually requested a Feynman-style explanation or if they just want a clear conceptual breakdown, and I'm realizing the trigger conditions for that skill don't quite match what they asked for.

Looking at their background as a researcher at HIRFL-RIBLL working on fragment identification, they already have solid nuclear physics knowledge, so this isn't a "explain like I'm twelve" situation. They're asking for a deeper mechanistic understanding of pre-equilibrium reactions, which means I should pitch this at an appropriate technical level covering the physical picture, the intermediate timescale that distinguishes it from direct and compound processes, the exciton model framework, and the observable signatures that reveal what's happening.

The core mechanism is that when a projectile enters the nucleus, its energy gets concentrated on just a few nucleons initially, then spreads through nucleon-nucleon collisions that progressively create particle-hole pairs. As the system evolves through these stages—from a few excited nucleons up toward statistical equilibrium—particles can escape at any point, with early emissions being high-energy and forward-peaked because the energy hasn't had time to thermalize yet.

The master equation governs how the probability of having n excitons changes over time, balancing the creation and destruction of particle-hole pairs against particle emission. The signature observables are a hard energy spectrum with high-energy tails that simple evaporation models can't explain, a forward-biased angular distribution, and a timescale of about 10⁻²¹ seconds—roughly the duration of a few nuclear collisions.

Pre-equilibrium dominates the intermediate energy regime where direct and compound mechanisms alone fall short. I'm thinking through an analogy to make this clearer: imagine a cue ball striking a pool table rack. The initial impact transfers energy directly to one or two balls, but as they collide with others, the energy spreads. Particles escaping early retain memory of the original direction, while those that escape after the system has randomized show no preferred direction. Pre-equilibrium is that middle phase where some directional memory persists.

Actually, the pond analogy works better for nuclear physics: a rock hitting calm water either bounces off a lily pad with minimal disturbance (direct), creates ripples with water droplets splashing forward from the impact zone (pre-equilibrium), or sinks and churns the pond chaotically with random splashing (compound).

Now I want to frame this using the exciton model, which is the standard theoretical framework for pre-equilibrium reactions. The exciton count acts as a thermometer for how far the system has evolved toward equilibrium, and I should trace how the exciton population changes through the cascade to show why pre-equilibrium sits between the two extremes.

I think a diagram showing the exciton cascade—starting with the initial particle-hole pair, branching through two-body collisions that create new pairs, and showing emission opportunities at each stage—would make the angular anisotropy degradation concrete. Rather than building something overly complex, I'll stick with the physical picture in prose, visualize the exciton model framework, and explain how the observables emerge from that structure. The exciton model describes this cascade through particle-hole pair states, where each nucleon collision either creates new pairs (dominant early on), destroys them (rare at low exciton numbers), or simply scatters without changing the pair count — and this competition between pair creation and destruction determines how quickly the system thermalizes and how many nucleons escape.

As the exciton number grows and energy spreads across more nucleons, the system loses memory of the initial collision geometry: particles ejected early still carry directional bias from the beam, while those emitted later scatter isotropically, producing the characteristic intermediate-energy signature of a broad, slightly forward-peaked angular distribution.

The energy spectra follow a similar pattern—early emission preserves the projectile's high energy before thermalization dilutes it, while late emission follows a thermal distribution, so the observed spectrum shows a high-energy tail superimposed on an evaporation background.

The timescale emerges from nucleon-nucleon collision rates: equilibration takes roughly 3–5 collisions at ~10⁻²² s each, placing pre-equilibrium emission around 10⁻²¹ s, much faster than the compound nucleus decay at 10⁻¹⁸ s.

For the explanation, I'll pair a clear prose description with an interactive diagram showing the exciton cascade and how emission anisotropy changes as the system evolves through different stages.

I should also note the phrasing in their question — "the concept Pre-equilibrium" would be more natural as "the concept of pre-equilibrium," and the capitalization should be lowercase mid-sentence. I'll mention this gently without making it a focus.

Given Reid's work with fragment identification at HIRFL-RIBLL using the Bρ-ΔE-TOF technique, pre-equilibrium effects could manifest in their data as anomalies in the energy-loss signatures or unexpected correlations in the time-of-flight measurements.

For the visualization, I'm thinking an interactive exciton cascade would work well — showing the nucleus, the Fermi sea, the incoming projectile, and then particle-hole pairs being created sequentially with probabilities for emission versus further excitation at each step.

Building an interactive stepper where users click through successive collisions, watching the exciton number increase and seeing both the emission probability curve and the angular distribution evolve together, with a running total of the accumulated spectrum. I'm simplifying the approach—just a clean interactive with step controls, a nucleus visualization on the left showing the particle-hole pairs, and an angular distribution plot on the right, plus some labels tracking memory, energy, and elapsed time as the cascade progresses. I'm settling on an interactive stepper approach where users can click through each stage of the cascade, with the display updating to show the nucleus with excitons, the emission probability, and the angular distribution for that particular stage.

Building the component now...

For the Fermi sea visualization, I'm drawing a horizontal dashed line to represent the Fermi surface, with filled circles below it for the ground state nucleons and empty circles above to show holes. At each stage, the number of particle-hole pairs increases—stage 3 shows 2 particles and 1 hole, stage 5 shows 3 particles and 2 holes, and so on. I'll use colored filled dots for particles above the Fermi line and hollow circles for holes below it.

Now I'm working on the angular distribution formula. I want to interpolate between isotropic and forward-peaked scattering using a memory factor that decays with excitation stage, something like α(n) = exp(-(n-3)/6). The differential cross section should smoothly transition from roughly uniform at low stages to increasingly forward-peaked at higher stages, so I'm setting up a formula that blends these two regimes based on α.

For the visualization, I'll show four representative stages starting from the initial 2p-1h configuration and progressing through higher excitation states, tracking how the angular distribution sharpens toward forward angles as the system evolves.

Building the interactive widget... Building the visualization layout... Writing SVG visualization... Writing SVG visualization... Finishing the SVG visualization with angle labels and a memory indicator bar... Building the interactive visualization... Building the collision cascade data... Writing the render function... Writing SVG visualization code... Writing the angular distribution function... Checking color compatibility across light and dark modes — the semi-transparent purples and oranges should work fine with the CSS variables handling text colors, though I should verify the filled curve renders properly in both themes.

The angular distribution math checks out: at stage 1 the peak is sharp at θ=0 with value ~3, and by stage 6 it flattens to 1 across all angles. The exponential decay also looks right — at 180 degrees the value drops to nearly zero.

Now I'm thinking through the "2p-1h" nomenclature for the nuclear scattering context to make sure I'm explaining it correctly. I should clarify that the 2p-1h initial state is really specific to nucleon-induced reactions—composite projectiles like deuterons or alphas follow different patterns, and heavy-ion collisions use entirely different pre-equilibrium models. Also, I'm noticing the user's phrasing had a couple of grammar issues: missing "of" in "the concept of pre-equilibrium" and "pre-equilibrium" shouldn't be capitalized mid-sentence.

I have solid grounding in the standard physics here—the exciton model, Griffin's work, Blann's contributions, the master equation approach—so I don't need to search. A visualization showing the exciton cascade step-by-step would really help make this concrete.

Let me keep the interactive widget lean and focused, then build out the explanation in prose below. I'm thinking through how to frame the core concept: pre-equilibrium occupies the middle ground between direct reactions that happen in a flash and compound nucleus reactions where everything thermalizes completely. It's the regime where partial thermalization occurs—some energy gets shared among nucleons, but not uniformly across the whole nucleus.

The exciton model provides the mathematical backbone here. Griffin and Blann developed this framework around counting excited particle-hole pairs above the Fermi surface, and these pairs cascade upward as nucleon collisions create more excitations. The system evolves through discrete exciton numbers, and at each step there's a competition between creating new pairs, destroying existing ones, and the nucleus emitting a particle before reaching full equilibrium.

The "intermediate" label comes from this partial equilibration. Early emissions preserve the projectile's initial direction and energy, while late emissions from highly excited states lose that memory entirely. The experimental signatures—a forward-biased but broad angular distribution and an energy spectrum with a hard tail above the thermal component—reflect this averaging across all the different emission stages.

This happens on a timescale of a few times 10⁻²² to 10⁻²¹ seconds, roughly the duration of 3-5 nucleon-nucleon collisions. At HIRFL energies in the 20-100 MeV/nucleon range, pre-equilibrium dominates light-particle emission and shapes the intermediate-mass fragment yields, producing those hard energy tails that stick out above what compound-nucleus models predict.

Now I'm verifying the exciton equilibrium formula — the mean exciton number scales as the square root of the level density parameter times excitation energy, which is a standard result from Fermi-gas theory. I'll keep the visualization centered on the exciton cascade with interactive controls, and I need to make sure the hole positions sit just below the Fermi level rather than on it.

I'm refining the visual representation of the Fermi sea and particle-hole pairs — organizing the filled dots into a clean regular array to represent the occupied states, showing particles as amber dots above the Fermi surface and holes as empty circles below where particles were ejected, so the gap in the sea is visually apparent. The key is to show how successive excitations build up the exciton population at each cascade stage. Writing SVG diagram... Writing SVG arc paths...

Now I'm thinking about where to place the holes in the Fermi sea—they should sit below the Fermi line, so I'll arrange them in a pattern like (120, 125), (155, 140), and (100, 135) to create a visually balanced distribution.

Actually, let me be more systematic and use predefined arrays for both particles above the line and holes below it, then write out the final SVG code.

I should also refine the commentary to avoid confusion about what "direct emission" means at stage 1, and use inline HTML tags for styling since markdown won't work here. The layout will have the stepper controls at the top, the nucleus and angular distribution side by side, the memory bar, and a commentary section with a colored left border that changes based on the regime. Since the user wants this as interactive and dynamic as possible, I'll make sure the transitions between stages feel smooth and responsive.

For the particle animations, I'll pre-allocate slots for all possible particles and holes across stages, then fade them in and out as needed rather than re-rendering everything from scratch. This way the circles can smoothly transition their positions using CSS transitions.

Prepping the particle slot positions... Writing SVG initialization and update logic...

For the curve animation, I need to smoothly transition the path when alpha changes. Since CSS transitions don't work reliably on SVG path attributes across browsers, I'll use a frame-based tween that interpolates alpha over 350ms and recomputes the path at each step.

Assembling the full code... Building the interactive visualization interface... Writing SVG diagram... Building the angular distribution visualization... Adding axis labels... Writing the interactive visualization... Building the interaction stages... Continuing through the collision cascade, as more excitons form the system transitions toward equilibrium—the energy spreads across increasingly more particles, softening the forward bias in angular distributions and revealing the characteristic hard tail in the energy spectrum that marks the pre-equilibrium regime. By the time we reach 5p–4h and 6p–5h configurations, the level density has grown substantially and individual particles carry only small fractions of the initial momentum, with the angular preference nearly washed out as the system approaches compound-nucleus behavior. Writing SVG particle elements... Still writing animation logic... Writing component rendering... I'm realizing the light mode badge backgrounds won't work in dark mode, so I'll switch to using semi-transparent versions of the color itself instead. For the dark mode particles and strokes, I need to adjust the amber fill and coral stroke colors to ensure they're visible against dark backgrounds—testing different opacity levels and shades to find what works best. The semi-transparent rgba colors for the Fermi sea and nucleus stroke work well across both light and dark backgrounds since the alpha blending adapts naturally. Now I'm noticing the θ label and "180°" text are both positioned at the same coordinates, causing them to overlap — I should either remove the θ label since the degree markings already make the axis clear, or reposition it elsewhere on the diagram. I'm verifying the initial setup matches stage 0, and checking how dark mode will work—the card backgrounds use CSS variables that adapt to both themes, while the particle colors and text styling should render consistently across light and dark modes. SVG text elements properly inherit CSS variables for fill, so that should be reliable. Let me finalize and submit this.

Actually, I need to review the widget spec requirements more carefully. The structure is correct—style block, HTML content, then script. My style block is short enough, and I'm using mostly inline styles with just a small block for button states and transitions. I don't have any comments cluttering the code. But I'm noticing the axis tick labels have a font-size of 9px, which violates the minimum 11px requirement—I need to bump those up to 11px.

Let me go through all the font sizes systematically: stage labels are 14px, commentary is 13px, regime and memory info are 12px, stage-label and tertiary text are 11px, and the axis ticks and labels are currently 10px. I need to change those smaller values to 11px to meet the spec. The axis tick labels for the degree markers, the axis titles, and the legend labels all need to be 11px now.

I'm also reconsidering whether to keep the "above" and "below" labels inside the SVG — they add clutter without much benefit since the E_F label and shaded region already make the Fermi sea distinction clear. I'll drop them for a cleaner look.

One more thing to fix: I should use `fill="none"` instead of `fill="transparent"` on the hole circles, since that's the proper SVG standard and avoids potential rendering quirks.

Writing SVG code... I'm settling on the visualization details—particles in amber, holes as open coral circles, the Fermi level line, and shaded Fermi sea should make the physics clear without extra explanation. I considered adding a beam arrow from the left to show projectile direction, but that feels like unnecessary clutter, so I'll keep the diagram focused. Adding beam indicator...

I'm torn between just showing the visualization or grounding it in a deeper physics explanation. The user clearly understands the basics already, so what would really help is clarifying why pre-equilibrium sits between the two regimes — the exciton cascade mechanism is the key insight there. I think combining both a clear prose explanation of the cascade with the diagram will give them the most value.

Now I'm pulling together the canonical references I'll need to cite: Griffin's foundational work on the statistical model, Blann's hybrid formulation, and Ericson's contributions on level density. These are textbook standards, so I can cite them directly without needing to search.

I should also mention Williams for the exciton master equation and Koning-Duijvestijn for modern computational implementations. Given that the user's background seems rooted in general nuclear physics texts like Knoll and Krane rather than specialized pre-equilibrium modeling, I'll make sure to ground my explanation in these established references while keeping the presentation accessible. Pre-equilibrium sits between those two extremes — the projectile collides with a handful of nucleons, redistributing some energy through the nucleus without reaching full thermal equilibrium, so it retains partial memory of the initial collision while still losing coherence.

The exciton model tracks how many excited nucleons (excitons) populate the nucleus as successive collisions build up. Each nucleon-nucleon interaction creates a particle-hole pair, stepping the exciton count up by 2 until reaching equilibrium around √(gE) excitons. At each stage, the system faces competing processes: nucleons can undergo another collision, or they can escape before the nucleus thermalizes completely.

The key insight is that particles leaving early retain the projectile's forward momentum and look like direct reactions, while those escaping after many collisions have lost directional memory and resemble compound nucleus emission. The measured spectrum is a blend across all these emission stages, producing the characteristic broad, slightly forward-peaked angular distribution we observe.

At HIRFL energies, pre-equilibrium dominates light-particle emission and significantly shapes intermediate-mass fragment yields. The smoking gun is a hard spectral tail extending above the compound evaporation peak — something neither pure direct nor pure compound reactions can explain. This means the observed spectra can't be cleanly decomposed into two components; the pre-equilibrium contribution sits at intermediate rapidities and requires dedicated modeling with codes like EMPIRE or TALYS.

Now I'm checking whether my stage-6 estimate holds up numerically — for a typical intermediate-energy case around 100 MeV excitation in a mass-100 nucleus, the level density parameter gives roughly 28 neutrons at equilibrium, which seems reasonable but I should verify this doesn't contradict the observed fragment distributions.

Let me reconsider the stage-6 labeling since n=15 is actually in the approach phase rather than full equilibrium. I could either adjust the commentary to reflect that the system is nearing statistical behavior, or bump the stage to a higher exciton number like n=25 to better represent true thermalization. I'm verifying that stage 6 has 8 particles and 7 holes for a total of 15 excitons, which matches my data structure. Since n_eq typically sits around 20-30 for intermediate energies, n=15 is still in the pre-equilibrium regime rather than fully thermalized, so I should adjust the label to reflect that it's approaching equilibrium but not quite there yet. At stage 6, the cascade has evolved far enough that the exciton population follows a statistical Fermi-gas distribution, making subsequent emission effectively isotropic and indistinguishable from compound-nucleus behavior. I should also reconsider the timescale more carefully—the nucleon-nucleon collision time is roughly 10⁻²² to 10⁻²³ seconds depending on the residual interaction strength, so my per-stage estimate of 2×10⁻²² seconds is reasonable though perhaps on the conservative side. like 5×10⁻²³ s per NN collision. Let me adjust to:
- Stage 1 (n=3): t ~ 10⁻²² s (one τ_NN)
- Stage 2 (n=5): t ~ 2×10⁻²² s
- Stage 3 (n=7): t ~ 3×10⁻²² s
- Stage 4 (n=9): t ~ 5×10⁻²² s
- Stage 5 (n=11): t ~ 8×10⁻²² s
- Stage 6 (n=15): t ~ 2×10⁻²¹ s

These timescales are rough estimates anyway—what matters is that the whole cascade spans from 10⁻²² to 10⁻²¹ seconds. Let me revise them to:
- Stage 1: ~2×10⁻²² s
- Stage 2: ~4×10⁻²² s
- Stage 3: ~6×10⁻²² s
- Stage 4: ~10⁻²¹ s
- Stage 5: ~1.5×10⁻²¹ s
- Stage 6: ~3×10⁻²¹ s (approaching compound timescales)

This matches my original setup, so I'll keep it. Now I need to finalize the code and get it submitted. Before I do, let me verify the Fermi sea path I'm drawing—specifically checking how the arc command parameters work for the curve I want. I need to switch the sweep flag to 1 to get the lower arc instead of the upper one, so the filled region appears below the line where it should be. sweep-flag=0 gives me the lower arc, which is what I need for the section below the line, so my original arc command was correct. Let me verify this by tracing through the SVG spec: starting at angle 180° from the center and ending at 0°, a sweep-flag of 0 traces the longer path downward through 270°, which is visually the lower arc. I need to figure out which sweep-flag direction gives me the lower half of the circle. Sweep-flag=1 means clockwise visually in SVG, which goes up through the top of the arc, while sweep-flag=0 goes counterclockwise and passes through the bottom—that's the Fermi sea region I want shaded.

Now I'm moving forward with the implementation. I could use a clip-path or half-circle ellipse, but the arc path approach works fine. Before submitting, I should add proper citations to Griffin and Blann in the commentary and make sure the prose is clean. One thing to check: the tool expects only the visual element in the output, not explanatory text, though the inline commentary is tightly integrated with the widget state so it should be fine.

Finalizing the widget now. I don't need Chart.js since I'm using pure inline SVG. The HTML structure is solid with static chrome first and the script at the end for safe streaming. All tags are closed properly, and my text elements are using `fill="var(--color-text-tertiary)"` which works fine for SVG text elements with CSS variables.

Actually, I'm reconsidering whether to show particle emission explicitly with arrows from the nucleus. It might add visual clarity, but it could also clutter the design. The angular distribution chart on the right already conveys the emission concept effectively, so I'll keep it abstract.

The stepper UI flows well — each click advances through particle count, hole count, and broadening angular distribution to show the cascade progression clearly.

Adding a subtle beam direction arrow...

Writing SVG code...

</details>

A quick language note before the physics: *"Explain the concept of pre-equilibrium to me"* is the idiomatic form — `concept` needs the preposition `of` to take its object, and explanations are typically directed *to* someone rather than performed *for* them. Also `pre-equilibrium` is a common noun, so lowercase mid-sentence.

---

Pre-equilibrium sits between the two limiting regimes. **Direct reactions** are single-step, surface-level interactions — the projectile scatters off one or two nucleons and leaves, preserving entrance-channel memory completely. **Compound nucleus reactions** are the opposite limit — excitation energy is fully thermalized across the whole Fermi sea before any particle evaporates.

Pre-equilibrium is the *incomplete-thermalization* regime: the projectile undergoes a few nucleon-nucleon collisions inside the medium, sharing some energy with additional nucleons, but a particle escapes before statistical equilibrium is reached.

## The exciton cascade

The canonical framework is the **exciton model**, originally formulated by Griffin (*Phys. Rev. Lett.* 17, 478, 1966) and developed into the "hybrid model" by Blann (*Phys. Rev. Lett.* 27, 337, 1971). The state of the excited nucleus is characterized by n — the total count of particles above the Fermi surface plus the holes they left behind. Each NN collision inside the medium typically promotes one Fermi-sea nucleon above E_F, creating one new particle-hole pair. So n cascades in steps of +2:

$$3 \;\to\; 5 \;\to\; 7 \;\to\; 9 \;\to\; \dots \;\to\; n_{eq} \approx \sqrt{gE^*}$$

where g is the single-particle level density near E_F and E* the excitation energy (Ericson, *Adv. Phys.* 9, 425, 1960). At each stage, three processes compete: a new p-h pair forms (n → n+2, dominant when n ≪ n_eq), a pair is destroyed (n → n-2, negligible until near equilibrium), or a particle above E_F escapes into the continuum — this is the emission channel, and it's open at every stage.

Step through the cascade to see how memory degrades with each NN collision:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T14:02:40.395157Z",
  "stop_timestamp": "2026-04-22T14:03:37.683156Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Gy2h86wecuuxaKNXDXd6Wz",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": "[\"Initializing exciton cascade\", \"Populating Fermi sea\", \"Computing emission distributions\"]",
    "title": "exciton_cascade_preequilibrium",
    "widget_code": "<h2 class=\"sr-only\">Interactive exciton cascade showing how successive nucleon-nucleon collisions in a pre-equilibrium reaction create particle-hole pairs and progressively randomize the emission angular distribution from forward-peaked toward isotropic.</h2>\n\n<style>\n.ph-btn:disabled { opacity: 0.35; cursor: not-allowed; }\n</style>\n\n<div style=\"display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:10px;\">\n  <div style=\"display:flex;align-items:center;gap:10px;\">\n    <button class=\"ph-btn\" onclick=\"step(-1)\" id=\"btn-prev\" style=\"font-size:13px;padding:3px 14px;\">← prev</button>\n    <div style=\"font-size:13px;min-width:130px;text-align:center;\">\n      <div style=\"font-weight:500;\" id=\"stage-label\">Stage 1 / 6</div>\n      <div style=\"font-size:11px;color:var(--color-text-tertiary);font-family:var(--font-mono);\" id=\"time-label\">t ≈ 2×10⁻²² s</div>\n    </div>\n    <button class=\"ph-btn\" onclick=\"step(1)\" id=\"btn-next\" style=\"font-size:13px;padding:3px 14px;\">next →</button>\n  </div>\n  <div id=\"regime-badge\" style=\"font-size:12px;padding:4px 10px;border-radius:var(--border-radius-md);font-weight:500;\">near-direct</div>\n</div>\n\n<div style=\"display:grid;grid-template-columns: 1fr 1fr; gap:14px;\">\n  <div style=\"background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:12px;\">\n    <div style=\"font-size:11px;color:var(--color-text-tertiary);\">Nucleus — exciton configuration</div>\n    <div id=\"exc-label\" style=\"font-size:14px;font-weight:500;margin-bottom:6px;\">n = 3  (2p–1h)</div>\n    <svg width=\"100%\" viewBox=\"0 0 280 200\" role=\"img\" aria-label=\"Nuclear Fermi sea showing particles above and holes below the Fermi level, with beam direction indicator on the left\">\n      <title>Exciton configuration inside the nucleus</title>\n      <defs>\n        <marker id=\"beam-arr\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\">\n          <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </marker>\n      </defs>\n      <path d=\"M 62 100 A 80 80 0 0 0 218 100 Z\" fill=\"rgba(127,119,221,0.11)\"/>\n      <circle cx=\"140\" cy=\"100\" r=\"80\" fill=\"none\" stroke=\"rgba(127,119,221,0.45)\" stroke-width=\"0.8\"/>\n      <line x1=\"62\" y1=\"100\" x2=\"218\" y2=\"100\" stroke=\"rgba(127,119,221,0.6)\" stroke-width=\"0.5\" stroke-dasharray=\"4 3\"/>\n      <text x=\"224\" y=\"104\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" font-family=\"var(--font-sans)\">E_F</text>\n      <line x1=\"14\" y1=\"100\" x2=\"56\" y2=\"100\" stroke=\"var(--color-text-secondary)\" stroke-width=\"1\" marker-end=\"url(#beam-arr)\" opacity=\"0.55\"/>\n      <text x=\"15\" y=\"92\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" font-family=\"var(--font-sans)\">beam</text>\n      <g id=\"ph-group\"></g>\n    </svg>\n    <div style=\"font-size:11px;color:var(--color-text-tertiary);margin-top:4px;display:flex;gap:14px;flex-wrap:wrap;\">\n      <span style=\"display:flex;align-items:center;gap:4px;\"><span style=\"width:9px;height:9px;border-radius:50%;background:#EF9F27;display:inline-block;\"></span>particle</span>\n      <span style=\"display:flex;align-items:center;gap:4px;\"><span style=\"width:9px;height:9px;border-radius:50%;border:1.2px dashed #D85A30;display:inline-block;\"></span>hole</span>\n    </div>\n  </div>\n\n  <div style=\"background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:12px;\">\n    <div style=\"font-size:11px;color:var(--color-text-tertiary);\">If emission occurred now</div>\n    <div id=\"dist-label\" style=\"font-size:14px;font-weight:500;margin-bottom:6px;\">Strongly forward-peaked</div>\n    <svg width=\"100%\" viewBox=\"0 0 280 200\" role=\"img\" aria-label=\"Angular distribution plot of dσ/dΩ versus θ for emission from the current exciton state\">\n      <title>Angular distribution of emission</title>\n      <line x1=\"35\" y1=\"170\" x2=\"260\" y2=\"170\" stroke=\"var(--color-border-secondary)\" stroke-width=\"0.5\"/>\n      <line x1=\"35\" y1=\"30\" x2=\"35\" y2=\"170\" stroke=\"var(--color-border-secondary)\" stroke-width=\"0.5\"/>\n      <line x1=\"35\" y1=\"130\" x2=\"260\" y2=\"130\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.3\" stroke-dasharray=\"2 3\"/>\n      <line x1=\"35\" y1=\"90\"  x2=\"260\" y2=\"90\"  stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.3\" stroke-dasharray=\"2 3\"/>\n      <line x1=\"35\" y1=\"50\"  x2=\"260\" y2=\"50\"  stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.3\" stroke-dasharray=\"2 3\"/>\n      <text x=\"35\"  y=\"185\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" text-anchor=\"middle\" font-family=\"var(--font-sans)\">0°</text>\n      <text x=\"148\" y=\"185\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" text-anchor=\"middle\" font-family=\"var(--font-sans)\">90°</text>\n      <text x=\"260\" y=\"185\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" text-anchor=\"middle\" font-family=\"var(--font-sans)\">180°</text>\n      <text x=\"35\"  y=\"22\"  font-size=\"11\" fill=\"var(--color-text-tertiary)\" text-anchor=\"middle\" font-family=\"var(--font-sans)\">dσ/dΩ</text>\n      <path id=\"dist-path\" fill=\"rgba(29,158,117,0.20)\" stroke=\"#1D9E75\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/>\n    </svg>\n  </div>\n</div>\n\n<div style=\"margin-top:14px;display:flex;align-items:center;gap:10px;font-size:12px;color:var(--color-text-secondary);\">\n  <span style=\"min-width:140px;\">Directional memory:</span>\n  <div style=\"flex:1;height:6px;background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:3px;overflow:hidden;\">\n    <div id=\"memory-bar\" style=\"height:100%;background:#7F77DD;width:100%;transition:width 0.4s ease;\"></div>\n  </div>\n  <span id=\"memory-pct\" style=\"min-width:40px;text-align:right;font-family:var(--font-mono);\">100%</span>\n</div>\n\n<div id=\"commentary\" style=\"margin-top:14px;font-size:13px;color:var(--color-text-secondary);border-left:2px solid #534AB7;padding-left:12px;line-height:1.65;transition:border-color 0.3s ease;\"></div>\n\n<script>\nconst particlePositions = [\n  [140, 58], [118, 68], [162, 68], [105, 82], [175, 82],\n  [135, 42], [152, 42], [140, 28]\n];\nconst holePositions = [\n  [140, 135], [118, 125], [162, 125], [105, 148], [175, 148],\n  [132, 160], [150, 160]\n];\nconst stages = [\n  { n:3,  p:2, h:1, alpha:1.00, t:'2×10⁻²² s', regime:'near-direct',       color:'#534AB7',\n    dist:'Strongly forward-peaked',\n    comment:'After the first NN collision in the medium, the projectile nucleon sits above E_F and one target nucleon is lifted above E_F, leaving a hole. This <span style=\"font-weight:500\">2p–1h</span> state retains nearly all the beam\\'s forward momentum — emission now would look <span style=\"font-weight:500;color:#534AB7\">almost direct</span>.' },\n  { n:5,  p:3, h:2, alpha:0.75, t:'4×10⁻²² s', regime:'strongly pre-eq',   color:'#0F6E56',\n    dist:'Broad, strongly forward-biased',\n    comment:'A second NN collision creates another p–h pair: <span style=\"font-weight:500\">3p–2h</span>. Energy is now shared among more participants; each particle carries less of the entrance momentum. The angular distribution is still forward-biased but visibly broader.' },\n  { n:7,  p:4, h:3, alpha:0.48, t:'7×10⁻²² s', regime:'pre-equilibrium',   color:'#1D9E75',\n    dist:'Intermediate angles dominate',\n    comment:'<span style=\"font-weight:500\">4p–3h</span>. The canonical pre-equilibrium regime: intermediate angles carry most of the cross section, and the energy spectrum develops a characteristic hard tail sitting above the compound-nucleus evaporation peak.' },\n  { n:9,  p:5, h:4, alpha:0.26, t:'1×10⁻²¹ s', regime:'pre-eq → compound', color:'#5DCAA5',\n    dist:'Mostly isotropic, slight bias',\n    comment:'<span style=\"font-weight:500\">5p–4h</span>. Level density has grown large and each exciton carries only a small fraction of the initial momentum. Forward bias persists but is weak.' },\n  { n:11, p:6, h:5, alpha:0.10, t:'2×10⁻²¹ s', regime:'near-equilibrium',  color:'#D85A30',\n    dist:'Nearly isotropic',\n    comment:'<span style=\"font-weight:500\">6p–5h</span>. The cascade is approaching thermal equilibrium. Emission is almost isotropic; most entrance-channel memory has been lost to phase-space mixing.' },\n  { n:15, p:8, h:7, alpha:0.00, t:'~3×10⁻²¹ s', regime:'compound-like',    color:'#993C1D',\n    dist:'Isotropic',\n    comment:'<span style=\"font-weight:500\">n = 15</span>, approaching n_eq ≈ √(gE). Exciton occupancy is well-described by the statistical Fermi-gas distribution. Subsequent emission follows Hauser-Feshbach statistics and is indistinguishable from compound-nucleus evaporation.' }\n];\n\nlet idx = 0, currentAlpha = 1.0, tweenRAF = null;\n\nfunction initSVG() {\n  let html = '';\n  for (let i = 0; i < 8; i++) {\n    const [x,y] = particlePositions[i];\n    html += `<circle id=\"p-${i}\" cx=\"${x}\" cy=\"${y}\" r=\"5\" fill=\"#EF9F27\" stroke=\"#854F0B\" stroke-width=\"0.5\" opacity=\"0\" style=\"transition:opacity 0.45s ease\"/>`;\n  }\n  for (let i = 0; i < 7; i++) {\n    const [x,y] = holePositions[i];\n    html += `<circle id=\"h-${i}\" cx=\"${x}\" cy=\"${y}\" r=\"5\" fill=\"none\" stroke=\"#D85A30\" stroke-width=\"1.2\" stroke-dasharray=\"2.5 2\" opacity=\"0\" style=\"transition:opacity 0.45s ease\"/>`;\n  }\n  document.getElementById('ph-group').innerHTML = html;\n}\n\nfunction updatePHs(p, h) {\n  for (let i = 0; i < 8; i++) document.getElementById('p-'+i).setAttribute('opacity', i < p ? '1' : '0');\n  for (let i = 0; i < 7; i++) document.getElementById('h-'+i).setAttribute('opacity', i < h ? '1' : '0');\n}\n\nfunction renderAngDist(alpha) {\n  const pts = [];\n  for (let deg = 0; deg <= 180; deg += 2) {\n    const W = (1 - alpha) + alpha * 3 * Math.exp(-deg/34);\n    const x = 35 + (deg / 180) * 225;\n    const y = 170 - (W / 3.1) * 130;\n    pts.push((deg === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1));\n  }\n  pts.push('L260,170 L35,170 Z');\n  document.getElementById('dist-path').setAttribute('d', pts.join(' '));\n}\n\nfunction tweenAlpha(target) {\n  if (tweenRAF) cancelAnimationFrame(tweenRAF);\n  const start = currentAlpha, duration = 420, t0 = performance.now();\n  function frame(now) {\n    const t = Math.min(1, (now - t0) / duration);\n    const eased = t*t*(3-2*t);\n    currentAlpha = start + (target - start) * eased;\n    renderAngDist(currentAlpha);\n    if (t < 1) tweenRAF = requestAnimationFrame(frame);\n  }\n  tweenRAF = requestAnimationFrame(frame);\n}\n\nfunction render() {\n  const s = stages[idx];\n  document.getElementById('stage-label').textContent = `Stage ${idx+1} / ${stages.length}`;\n  document.getElementById('exc-label').textContent = `n = ${s.n}  (${s.p}p–${s.h}h)`;\n  document.getElementById('time-label').textContent = `t ≈ ${s.t}`;\n  document.getElementById('memory-pct').textContent = Math.round(s.alpha*100) + '%';\n  document.getElementById('memory-bar').style.width = (s.alpha*100) + '%';\n  document.getElementById('dist-label').textContent = s.dist;\n  document.getElementById('commentary').innerHTML = s.comment;\n  document.getElementById('commentary').style.borderLeftColor = s.color;\n  const badge = document.getElementById('regime-badge');\n  badge.textContent = s.regime;\n  badge.style.color = s.color;\n  badge.style.background = s.color + '1F';\n  badge.style.border = '0.5px solid ' + s.color + '40';\n  updatePHs(s.p, s.h);\n  tweenAlpha(s.alpha);\n  document.getElementById('btn-prev').disabled = idx === 0;\n  document.getElementById('btn-next').disabled = idx === stages.length - 1;\n}\n\nfunction step(d) { const ni = idx + d; if (ni >= 0 && ni < stages.length) { idx = ni; render(); } }\n\ninitSVG();\nrender();\n</script>\n"
  },
  "message": null,
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
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
  "tool_use_id": "toolu_01Gy2h86wecuuxaKNXDXd6Wz",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Tool 'visualize:show_widget' not found.",
      "uuid": "b0a2fd06-900a-4626-84b6-886a2d031ae7"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
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

 I'm noticing the tool name might be inconsistent — I used `visualize:show_widget` successfully before, so let me double-check why it's failing now and trace back through what changed. I'm running into a tool availability issue — `visualize:show_widget` keeps returning "not found," but I successfully used `visualize:read_me` moments ago in this same conversation, so the visualize tools should exist. Let me try calling it with a different name format to see if that resolves the inconsistency. The visualize tools were working fine earlier, but now `visualize:show_widget` is suddenly returning "Tool not found" even though `visualize:read_me` just succeeded in this same turn. Let me check my invocation format — I'm using `<invoke name="visualize:show_widget">` which should be identical to what worked before. I'll attempt the call again to see if this was just a transient glitch.

</details>

Let me retry the visualization:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T14:04:03.003244Z",
  "stop_timestamp": "2026-04-22T14:05:01.899517Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_015VpZx9ZNt29Xgi15yHLZ59",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": "[\"Initializing exciton cascade\", \"Populating Fermi sea\", \"Computing emission distributions\"]",
    "title": "exciton_cascade_preequilibrium",
    "widget_code": "<h2 class=\"sr-only\">Interactive exciton cascade showing how successive nucleon-nucleon collisions in a pre-equilibrium reaction create particle-hole pairs and progressively randomize the emission angular distribution from forward-peaked toward isotropic.</h2>\n\n<style>\n.ph-btn:disabled { opacity: 0.35; cursor: not-allowed; }\n</style>\n\n<div style=\"display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:10px;\">\n  <div style=\"display:flex;align-items:center;gap:10px;\">\n    <button class=\"ph-btn\" onclick=\"step(-1)\" id=\"btn-prev\" style=\"font-size:13px;padding:3px 14px;\">← prev</button>\n    <div style=\"font-size:13px;min-width:130px;text-align:center;\">\n      <div style=\"font-weight:500;\" id=\"stage-label\">Stage 1 / 6</div>\n      <div style=\"font-size:11px;color:var(--color-text-tertiary);font-family:var(--font-mono);\" id=\"time-label\">t ≈ 2×10⁻²² s</div>\n    </div>\n    <button class=\"ph-btn\" onclick=\"step(1)\" id=\"btn-next\" style=\"font-size:13px;padding:3px 14px;\">next →</button>\n  </div>\n  <div id=\"regime-badge\" style=\"font-size:12px;padding:4px 10px;border-radius:var(--border-radius-md);font-weight:500;\">near-direct</div>\n</div>\n\n<div style=\"display:grid;grid-template-columns: 1fr 1fr; gap:14px;\">\n  <div style=\"background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:12px;\">\n    <div style=\"font-size:11px;color:var(--color-text-tertiary);\">Nucleus — exciton configuration</div>\n    <div id=\"exc-label\" style=\"font-size:14px;font-weight:500;margin-bottom:6px;\">n = 3  (2p–1h)</div>\n    <svg width=\"100%\" viewBox=\"0 0 280 200\" role=\"img\" aria-label=\"Nuclear Fermi sea showing particles above and holes below the Fermi level, with beam direction indicator on the left\">\n      <title>Exciton configuration inside the nucleus</title>\n      <defs>\n        <marker id=\"beam-arr\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"7\" markerHeight=\"7\" orient=\"auto-start-reverse\">\n          <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.3\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n        </marker>\n      </defs>\n      <path d=\"M 62 100 A 80 80 0 0 0 218 100 Z\" fill=\"rgba(127,119,221,0.11)\"/>\n      <circle cx=\"140\" cy=\"100\" r=\"80\" fill=\"none\" stroke=\"rgba(127,119,221,0.45)\" stroke-width=\"0.8\"/>\n      <line x1=\"62\" y1=\"100\" x2=\"218\" y2=\"100\" stroke=\"rgba(127,119,221,0.6)\" stroke-width=\"0.5\" stroke-dasharray=\"4 3\"/>\n      <text x=\"224\" y=\"104\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" font-family=\"var(--font-sans)\">E_F</text>\n      <line x1=\"14\" y1=\"100\" x2=\"56\" y2=\"100\" stroke=\"var(--color-text-secondary)\" stroke-width=\"1\" marker-end=\"url(#beam-arr)\" opacity=\"0.55\"/>\n      <text x=\"15\" y=\"92\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" font-family=\"var(--font-sans)\">beam</text>\n      <g id=\"ph-group\"></g>\n    </svg>\n    <div style=\"font-size:11px;color:var(--color-text-tertiary);margin-top:4px;display:flex;gap:14px;flex-wrap:wrap;\">\n      <span style=\"display:flex;align-items:center;gap:4px;\"><span style=\"width:9px;height:9px;border-radius:50%;background:#EF9F27;display:inline-block;\"></span>particle</span>\n      <span style=\"display:flex;align-items:center;gap:4px;\"><span style=\"width:9px;height:9px;border-radius:50%;border:1.2px dashed #D85A30;display:inline-block;\"></span>hole</span>\n    </div>\n  </div>\n\n  <div style=\"background:var(--color-background-secondary);border-radius:var(--border-radius-md);padding:12px;\">\n    <div style=\"font-size:11px;color:var(--color-text-tertiary);\">If emission occurred now</div>\n    <div id=\"dist-label\" style=\"font-size:14px;font-weight:500;margin-bottom:6px;\">Strongly forward-peaked</div>\n    <svg width=\"100%\" viewBox=\"0 0 280 200\" role=\"img\" aria-label=\"Angular distribution plot of dsigma/dOmega versus theta for emission from the current exciton state\">\n      <title>Angular distribution of emission</title>\n      <line x1=\"35\" y1=\"170\" x2=\"260\" y2=\"170\" stroke=\"var(--color-border-secondary)\" stroke-width=\"0.5\"/>\n      <line x1=\"35\" y1=\"30\" x2=\"35\" y2=\"170\" stroke=\"var(--color-border-secondary)\" stroke-width=\"0.5\"/>\n      <line x1=\"35\" y1=\"130\" x2=\"260\" y2=\"130\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.3\" stroke-dasharray=\"2 3\"/>\n      <line x1=\"35\" y1=\"90\"  x2=\"260\" y2=\"90\"  stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.3\" stroke-dasharray=\"2 3\"/>\n      <line x1=\"35\" y1=\"50\"  x2=\"260\" y2=\"50\"  stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.3\" stroke-dasharray=\"2 3\"/>\n      <text x=\"35\"  y=\"185\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" text-anchor=\"middle\" font-family=\"var(--font-sans)\">0°</text>\n      <text x=\"148\" y=\"185\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" text-anchor=\"middle\" font-family=\"var(--font-sans)\">90°</text>\n      <text x=\"260\" y=\"185\" font-size=\"11\" fill=\"var(--color-text-tertiary)\" text-anchor=\"middle\" font-family=\"var(--font-sans)\">180°</text>\n      <text x=\"35\"  y=\"22\"  font-size=\"11\" fill=\"var(--color-text-tertiary)\" text-anchor=\"middle\" font-family=\"var(--font-sans)\">dσ/dΩ</text>\n      <path id=\"dist-path\" fill=\"rgba(29,158,117,0.20)\" stroke=\"#1D9E75\" stroke-width=\"1.5\" stroke-linejoin=\"round\"/>\n    </svg>\n  </div>\n</div>\n\n<div style=\"margin-top:14px;display:flex;align-items:center;gap:10px;font-size:12px;color:var(--color-text-secondary);\">\n  <span style=\"min-width:140px;\">Directional memory:</span>\n  <div style=\"flex:1;height:6px;background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:3px;overflow:hidden;\">\n    <div id=\"memory-bar\" style=\"height:100%;background:#7F77DD;width:100%;transition:width 0.4s ease;\"></div>\n  </div>\n  <span id=\"memory-pct\" style=\"min-width:40px;text-align:right;font-family:var(--font-mono);\">100%</span>\n</div>\n\n<div id=\"commentary\" style=\"margin-top:14px;font-size:13px;color:var(--color-text-secondary);border-left:2px solid #534AB7;padding-left:12px;line-height:1.65;transition:border-color 0.3s ease;\"></div>\n\n<script>\nconst particlePositions = [\n  [140, 58], [118, 68], [162, 68], [105, 82], [175, 82],\n  [135, 42], [152, 42], [140, 28]\n];\nconst holePositions = [\n  [140, 135], [118, 125], [162, 125], [105, 148], [175, 148],\n  [132, 160], [150, 160]\n];\nconst stages = [\n  { n:3,  p:2, h:1, alpha:1.00, t:'2×10⁻²² s', regime:'near-direct',       color:'#534AB7',\n    dist:'Strongly forward-peaked',\n    comment:'After the first NN collision in the medium, the projectile nucleon sits above E_F and one target nucleon is lifted above E_F, leaving a hole. This <span style=\"font-weight:500\">2p–1h</span> state retains nearly all the beam\\'s forward momentum — emission now would look <span style=\"font-weight:500;color:#534AB7\">almost direct</span>.' },\n  { n:5,  p:3, h:2, alpha:0.75, t:'4×10⁻²² s', regime:'strongly pre-eq',   color:'#0F6E56',\n    dist:'Broad, strongly forward-biased',\n    comment:'A second NN collision creates another p–h pair: <span style=\"font-weight:500\">3p–2h</span>. Energy is now shared among more participants; each particle carries less of the entrance momentum. The angular distribution is still forward-biased but visibly broader.' },\n  { n:7,  p:4, h:3, alpha:0.48, t:'7×10⁻²² s', regime:'pre-equilibrium',   color:'#1D9E75',\n    dist:'Intermediate angles dominate',\n    comment:'<span style=\"font-weight:500\">4p–3h</span>. The canonical pre-equilibrium regime: intermediate angles carry most of the cross section, and the energy spectrum develops a characteristic hard tail sitting above the compound-nucleus evaporation peak.' },\n  { n:9,  p:5, h:4, alpha:0.26, t:'1×10⁻²¹ s', regime:'pre-eq → compound', color:'#5DCAA5',\n    dist:'Mostly isotropic, slight bias',\n    comment:'<span style=\"font-weight:500\">5p–4h</span>. Level density has grown large and each exciton carries only a small fraction of the initial momentum. Forward bias persists but is weak.' },\n  { n:11, p:6, h:5, alpha:0.10, t:'2×10⁻²¹ s', regime:'near-equilibrium',  color:'#D85A30',\n    dist:'Nearly isotropic',\n    comment:'<span style=\"font-weight:500\">6p–5h</span>. The cascade is approaching thermal equilibrium. Emission is almost isotropic; most entrance-channel memory has been lost to phase-space mixing.' },\n  { n:15, p:8, h:7, alpha:0.00, t:'~3×10⁻²¹ s', regime:'compound-like',    color:'#993C1D',\n    dist:'Isotropic',\n    comment:'<span style=\"font-weight:500\">n = 15</span>, approaching n_eq ≈ √(gE). Exciton occupancy is well-described by the statistical Fermi-gas distribution. Subsequent emission follows Hauser-Feshbach statistics and is indistinguishable from compound-nucleus evaporation.' }\n];\n\nlet idx = 0, currentAlpha = 1.0, tweenRAF = null;\n\nfunction initSVG() {\n  let html = '';\n  for (let i = 0; i < 8; i++) {\n    const [x,y] = particlePositions[i];\n    html += `<circle id=\"p-${i}\" cx=\"${x}\" cy=\"${y}\" r=\"5\" fill=\"#EF9F27\" stroke=\"#854F0B\" stroke-width=\"0.5\" opacity=\"0\" style=\"transition:opacity 0.45s ease\"/>`;\n  }\n  for (let i = 0; i < 7; i++) {\n    const [x,y] = holePositions[i];\n    html += `<circle id=\"h-${i}\" cx=\"${x}\" cy=\"${y}\" r=\"5\" fill=\"none\" stroke=\"#D85A30\" stroke-width=\"1.2\" stroke-dasharray=\"2.5 2\" opacity=\"0\" style=\"transition:opacity 0.45s ease\"/>`;\n  }\n  document.getElementById('ph-group').innerHTML = html;\n}\n\nfunction updatePHs(p, h) {\n  for (let i = 0; i < 8; i++) document.getElementById('p-'+i).setAttribute('opacity', i < p ? '1' : '0');\n  for (let i = 0; i < 7; i++) document.getElementById('h-'+i).setAttribute('opacity', i < h ? '1' : '0');\n}\n\nfunction renderAngDist(alpha) {\n  const pts = [];\n  for (let deg = 0; deg <= 180; deg += 2) {\n    const W = (1 - alpha) + alpha * 3 * Math.exp(-deg/34);\n    const x = 35 + (deg / 180) * 225;\n    const y = 170 - (W / 3.1) * 130;\n    pts.push((deg === 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1));\n  }\n  pts.push('L260,170 L35,170 Z');\n  document.getElementById('dist-path').setAttribute('d', pts.join(' '));\n}\n\nfunction tweenAlpha(target) {\n  if (tweenRAF) cancelAnimationFrame(tweenRAF);\n  const start = currentAlpha, duration = 420, t0 = performance.now();\n  function frame(now) {\n    const t = Math.min(1, (now - t0) / duration);\n    const eased = t*t*(3-2*t);\n    currentAlpha = start + (target - start) * eased;\n    renderAngDist(currentAlpha);\n    if (t < 1) tweenRAF = requestAnimationFrame(frame);\n  }\n  tweenRAF = requestAnimationFrame(frame);\n}\n\nfunction render() {\n  const s = stages[idx];\n  document.getElementById('stage-label').textContent = `Stage ${idx+1} / ${stages.length}`;\n  document.getElementById('exc-label').textContent = `n = ${s.n}  (${s.p}p–${s.h}h)`;\n  document.getElementById('time-label').textContent = `t ≈ ${s.t}`;\n  document.getElementById('memory-pct').textContent = Math.round(s.alpha*100) + '%';\n  document.getElementById('memory-bar').style.width = (s.alpha*100) + '%';\n  document.getElementById('dist-label').textContent = s.dist;\n  document.getElementById('commentary').innerHTML = s.comment;\n  document.getElementById('commentary').style.borderLeftColor = s.color;\n  const badge = document.getElementById('regime-badge');\n  badge.textContent = s.regime;\n  badge.style.color = s.color;\n  badge.style.background = s.color + '1F';\n  badge.style.border = '0.5px solid ' + s.color + '40';\n  updatePHs(s.p, s.h);\n  tweenAlpha(s.alpha);\n  document.getElementById('btn-prev').disabled = idx === 0;\n  document.getElementById('btn-next').disabled = idx === stages.length - 1;\n}\n\nfunction step(d) { const ni = idx + d; if (ni >= 0 && ni < stages.length) { idx = ni; render(); } }\n\ninitSVG();\nrender();\n</script>\n"
  },
  "message": null,
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
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
  "tool_use_id": "toolu_015VpZx9ZNt29Xgi15yHLZ59",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Tool 'visualize:show_widget' not found.",
      "uuid": "d2917e46-28ff-486a-bea0-7472cefc221b"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
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

 The visualization tool seems to have stopped working, even though it was functioning earlier in our conversation. Let me search for an alternative approach to display this information.

</details>

The widget tool seems to have become unavailable in this turn. Let me continue with prose and finish the explanation — I'll skip the interactive piece and deliver the physics clearly instead.

## Why each observable looks "intermediate"

**Angular distribution.** Emission from low-n states (n = 3, 5) retains most of the projectile's forward momentum; emission from high-n states has had that momentum thoroughly mixed through repeated NN scattering. The *observed* pre-equilibrium angular distribution is a weighted superposition across all emission stages, which is exactly why it comes out broad and slightly forward-peaked — neither forward-lobed (single-step signature) nor flat (fully thermalized signature).

**Energy spectrum.** Early emissions carry away a large fraction of the initial kinetic energy (the projectile's energy is still concentrated on a few participants); late emissions come out at thermal energies (~T ~ few MeV). Summed, this produces the characteristic *hard tail* of pre-equilibrium spectra — particles extending to energies well above what Hauser-Feshbach evaporation can produce, sitting on top of the evaporation Maxwellian.

**Timescale.** A single NN collision inside the nuclear medium takes τ_NN ~ ℏ/ΔE ~ 10⁻²²–10⁻²³ s (using a residual-interaction scale of 20–30 MeV). Reaching equilibrium requires on the order of 10–15 such cascading collisions, so emission from intermediate-n states happens in the 10⁻²¹ s window — squarely between direct (one collision) and compound (full thermalization plus evaporation delay).

## The master equation

If you want the mathematical machinery: Griffin's cascade is governed by a set of coupled rate equations for the time-dependent occupation probabilities P_n(t):

$$\frac{dP_n}{dt} = \lambda^{+}_{n-2}\,P_{n-2} \;-\; \big[\lambda^{+}_{n} + \lambda^{-}_{n} + W_n\big]P_n \;+\; \lambda^{-}_{n+2}\,P_{n+2}$$

where λ⁺_n is the rate of creating a new p-h pair, λ⁻_n is the rate of destroying one (both computed from Pauli-blocked NN scattering inside the medium), and W_n is the total emission rate from the n-exciton state into the continuum. The transition rates themselves were given explicitly by Williams (*Nucl. Phys.* A166, 231, 1971) in terms of the Ericson single-particle level density. Modern codes (EMPIRE, TALYS, GEMINI++) solve this or a spin-dependent generalization numerically.

## Relevance to your HIRFL work

At bombarding energies relevant to RIBLL experiments, pre-equilibrium often dominates light-particle emission (n, p, α) and contributes substantially to IMF production at forward angles. In inclusive spectra, it shows up as excess yield in two places: the intermediate-angle region of angular distributions, and the high-energy tail of fragment/particle kinetic-energy spectra. If you're doing reaction-mechanism decomposition for fragment ID, the pre-equilibrium component is the piece you cannot fit with a pure "direct + compound" two-component model — the spectra near mid-rapidity in your Bρ distribution will show the signature.

---

## Possible blind spots worth flagging

A few places where the pre-equilibrium picture I sketched is *not* the whole story — these may or may not be territory you've seen:

1. **The exciton model assumes a nucleon projectile.** For composite projectiles (d, α, heavy ions — including your RIBLL beams), the initial exciton configuration and the cascade dynamics are different. Heavy-ion pre-equilibrium is typically treated with semi-classical transport codes (BUU, QMD, AMD) rather than the exciton master equation, because the projectile itself fragments during the interaction.

2. **Spin and parity are conserved.** The master equation above tracks only n, not J^π. Realistic codes use a J-dependent version where transition rates depend on angular-momentum coupling, which matters for distinguishing emission to specific discrete final states.

3. **The "semi-classical vs quantum" split.** The exciton model is semi-classical — it treats nucleons inside the medium as freely-interacting particles. Genuinely quantum approaches (Feshbach-Kerman-Koonin multistep direct/compound theory, or nuclear-matter calculations with in-medium NN cross sections) give the same qualitative physics but parameterize it very differently. The forward-bias is explicit in FKK as a sum over direct-like matrix elements; in the exciton model it's carried by the lingering anisotropy of the phase-space distribution.

Happy to drill into any of these if useful.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db579-8e6e-7b9c-a99d-f46d7df32ab0",
  "updated_at": "2026-04-22T14:05:35.323484Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7be6-e8fe-7668-b138-c6d6e6276709"
}
```

</details>

### 9. human — 2026-04-22T14:48:15.372959Z

/concept-visualizer The concept of pre-equilibrium

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db5a9-bac7-7f61-822a-72a78ea74eb9",
  "updated_at": "2026-04-22T14:48:15.372959Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019db579-8e6e-7b9c-a99d-f46d7df32ab0"
}
```

</details>

### 10. assistant — 2026-04-22T14:53:42.754338Z

 

<details>
<summary>Thinking (verbatim)</summary>

 The user is invoking the concept-visualizer skill through a slash command, so I need to check the skill file to see what it does.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T14:48:21.032544Z",
  "stop_timestamp": "2026-04-22T14:48:21.141260Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01AHRCRwtd93NtPhsjBRsjWW",
  "name": "view",
  "input": {
    "path": "/mnt/skills/user/concept-visualizer/SKILL.md"
  },
  "message": "Viewing file",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
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
  "tool_use_id": "toolu_01AHRCRwtd93NtPhsjBRsjWW",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "Input validation errors occurred:\ndescription: Field required",
      "uuid": "0e0c6f40-54bd-48d6-a5f9-f7a4e5a0689a"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T14:48:24.712904Z",
  "stop_timestamp": "2026-04-22T14:48:25.098696Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01GzU3dj4Q9SQkuoiN5DcYrf",
  "name": "view",
  "input": {
    "path": "/mnt/skills/user/concept-visualizer/SKILL.md",
    "description": "Load the concept-visualizer skill instructions"
  },
  "message": "Load the concept-visualizer skill instructions",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Load the concept-visualizer skill instructions"
  },
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
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
  "tool_use_id": "toolu_01GzU3dj4Q9SQkuoiN5DcYrf",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: concept-visualizer\n     3\tdescription: \"Generate inline visual metaphor illustrations for general concepts using the Visualizer (show_widget). Turns abstract ideas into concrete, memorable SVG scenes — stick figures interacting with everyday objects to embody how a concept works. Use this skill whenever a user asks to 'visualize a concept', 'draw me a diagram of how X works', 'illustrate this idea', 'show me visually', 'make a visual explanation', or any phrasing requesting a pictorial/diagrammatic explanation of an abstract concept. Also trigger when another skill (e.g., Feynman-Technique) needs a visual aid for a concept it is explaining. Works for any domain: physics, math, CS, biology, economics, philosophy, ML, engineering, or everyday ideas. Do NOT use for data charts, UI mockups, word comparisons (use vocabulary-visualization instead), or file-based deliverables.\"\n     4\t---\n     5\t\n     6\t# Concept Visualizer\n     7\t\n     8\tTurn abstract concepts into concrete, memorable visual metaphors rendered inline via the Visualizer.\n     9\t\n    10\t## Core principle\n    11\t\n    12\tEvery concept has a **mechanism** — something it *does*. The job is to find an everyday object or situation that does the same thing visibly, then draw that.\n    13\t\n    14\t## Workflow\n    15\t\n    16\t### 1. Extract the mechanism\n    17\t\n    18\tAsk: *what does this concept actually do?* Strip away domain jargon and find the verb.\n    19\t\n    20\t| Concept | Mechanism |\n    21\t|---|---|\n    22\t| Entropy | Things spread out / get disordered over time |\n    23\t| Gradient descent | Feel which way is downhill, step that way, repeat |\n    24\t| Nuclear fission | One split triggers more splits (chain reaction) |\n    25\t| Recursion | Do the same task on a smaller version of itself |\n    26\t| Natural selection | Variants compete; survivors pass traits forward |\n    27\t| Opportunity cost | Choosing one path locks out another |\n    28\t\n    29\tOne sentence. If you can't state the mechanism simply, break the concept into sub-concepts and visualize each.\n    30\t\n    31\t### 2. Find the metaphor object\n    32\t\n    33\tPick ONE concrete, universally familiar object or situation whose behavior mirrors the mechanism. The metaphor must be:\n    34\t\n    35\t- **Physical and visible** — something you can draw (not another abstraction)\n    36\t- **Universally known** — no culture/domain-specific objects\n    37\t- **Structurally honest** — the metaphor's behavior genuinely parallels the concept, not just superficially\n    38\t\n    39\tGood sources: water, balls, stairs, rooms, doors, ropes/knots, trees, paths/forks, dominoes, containers, springs, seesaws, conveyor belts, pulleys, mirrors, sandcastles, crowds of people.\n    40\t\n    41\t**Honesty check**: where does the metaphor break down? Note this internally — you'll flag it in the prose after the visual.\n    42\t\n    43\t### 3. Decompose into 2–5 panels\n    44\t\n    45\tBreak the concept into sequential stages or contrasting states. Each panel = one moment/aspect.\n    46\t\n    47\tPanel types:\n    48\t- **Sequential** (A → B → C): for processes, transformations, chains of cause-and-effect\n    49\t- **Contrast** (A vs B): for comparisons, with/without, before/after\n    50\t- **Zoom** (whole → part → detail): for hierarchical or nested concepts\n    51\t\n    52\tEach panel gets:\n    53\t- A **scene**: the metaphor object + a stick figure in a specific posture/action\n    54\t- A **label**: 2–5 words naming the stage (e.g., \"Energy spreads out\")\n    55\t- A **reveal caption**: 1–2 sentences mapping the scene back to the real concept (shown on click)\n    56\t\n    57\t### 4. Render via Visualizer\n    58\t\n    59\tCall `visualize:read_me` with module `[\"diagram\"]` before the first `show_widget` call.\n    60\t\n    61\t**SVG structure:**\n    62\t\n    63\t- Panels arranged **left-to-right** in a single SVG, separated by subtle vertical dividers\n    64\t- Consistent canvas: each panel is a square cell within a wide strip\n    65\t- The metaphor object is **visually identical** across panels — only the figure's relationship to it changes\n    66\t- Stick figures communicate through **posture and spatial relationship**, not detail\n    67\t- Distinct muted color per panel stage; CSS-variable-aware for dark mode\n    68\t- Arrow or flow indicator between sequential panels\n    69\t- Click a panel → reveal caption fades in below the scene\n    70\t\n    71\t**Visual rules:**\n    72\t\n    73\t- Stick figures, not icons. Simple geometric shapes. No clip-art.\n    74\t- Maximum 5 panels — if the concept needs more, split into multiple visualizations\n    75\t- Labels use a clean sans-serif; captions in italic\n    76\t- No decorative elements that don't carry meaning\n    77\t- Consistent ground line across panels for visual continuity\n    78\t- Panel width: at least 140px each; total SVG viewBox width ≤ 800\n    79\t\n    80\t**Interactivity:**\n    81\t\n    82\t- Click/tap a panel to toggle its reveal caption\n    83\t- Subtle hover highlight on panels (opacity shift)\n    84\t- Active panel gets a gentle border highlight\n    85\t\n    86\t### 5. Prose after the visual\n    87\t\n    88\tDo NOT restate what the visual shows. Instead:\n    89\t\n    90\t- **Map it back**: one sentence explicitly connecting the metaphor to the real concept (\"The messy room is entropy — energy states spreading into less organized configurations.\")\n    91\t- **Flag the break**: where the metaphor stops working (\"Unlike a real room, entropy in physics is about *probability* of microstates, not just messiness.\")\n    92\t- **Extend an invitation**: a question or nudge to go deeper (\"Want to see why some processes *reverse* entropy? That's where it gets interesting.\")\n    93\t\n    94\t## Integration with other skills\n    95\t\n    96\tThis skill is designed to be called by other skills. When invoked from another skill's context:\n    97\t\n    98\t- Accept the concept and any analogy already established by the calling skill\n    99\t- If the calling skill (e.g., Feynman-Technique) has already chosen an analogy, **use that analogy** as the metaphor object — don't invent a competing one\n   100\t- If no analogy is provided, select one using step 2 above\n   101\t- Return the visual inline; the calling skill handles surrounding prose\n   102\t\n   103\t## Constraints\n   104\t\n   105\t- Metaphors must be structurally honest — don't force a visual that misrepresents the concept\n   106\t- All text in the SVG must be readable at default zoom (≥12px effective)\n   107\t- Use the Visualizer tool (`show_widget`), not file artifacts\n   108\t- One concept per visualization; compound concepts get multiple visuals\n   109\t",
      "uuid": "e6d004a9-b386-4309-9612-934ed9c8e041"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 The Visualizer tool worked fine initially but just failed with a "not found" error, which is strange since it succeeded twice earlier in this conversation. This might be a temporary glitch or rate limiting issue. Let me try calling it again, and if it fails once more I'll need to reconsider my approach.

Before I attempt that, though, I should refocus on the core task: explaining pre-equilibrium as an everyday metaphor. The mechanism is essentially energy spreading through a system step by step, with the tension being that some energy escapes before the spreading completes. I need to capture that in a clear, one-sentence mechanism that shows how partial information gets carried away as the system evolves.

The pool table break is the strongest metaphor here. When the cue ball strikes the rack, energy propagates through the balls in stages—a ball hit directly flies off remembering the cue's direction, while one that's bounced around multiple times exits randomly. That maps perfectly onto the physics: early-ejected particles are forward-peaked (direct), late ones are isotropic (compound). The pre-equilibrium window is exactly that moment when some balls are still rattling around while others have already escaped.

I'm planning four sequential panels showing this progression: the cue about to strike, the initial collision creating fast balls that can escape immediately, the cascade of spreading collisions, and finally the chaotic thermalized state where escapes are random. Each stage directly corresponds to the emission regimes in nuclear reactions.

Building the SVG visualization... cketing the table from the side. The visual uses a four-panel layout showing top-down views of the pool table at different stages: the cue ball (purple, representing the projectile) strikes the teal balls (the Fermi sea), with "hot" balls that gain energy colored amber to show which ones are moving. Arrows indicate motion direction and an exit path at the table's edge represents particle emission. I'm noting where the metaphor breaks down—real nucleons can't move below the Fermi energy due to Pauli exclusion, whereas pool balls follow classical mechanics, and actual nuclear emissions involve quantum tunneling through a potential barrier rather than simple ballistic escape.

Writing SVG code...

</details>

Let me try the Visualizer once more — previous failure may have been transient:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T14:49:12.279892Z",
  "stop_timestamp": "2026-04-22T14:49:12.279892Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01WjsidywUbB8Wqk9BXrq8wr",
  "name": "visualize:read_me",
  "input": {
    "modules": "[\"diagram\"]"
  },
  "message": null,
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
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
  "tool_use_id": "toolu_01WjsidywUbB8Wqk9BXrq8wr",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "Tool 'visualize:read_me' not found.",
      "uuid": "ffcc4a2e-d4a1-4a44-85c7-e3814fa698ba"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
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

 The visualization tools have gone offline, which is a problem since this task needs visual output. I can't use the Visualizer tool, so I'm considering creating a self-contained HTML file instead—though the instructions prefer using the Visualizer over file artifacts.

But given that the Visualizer is unavailable and the user has explicitly asked for interactive, dynamic visualizations, an HTML file is my best option here. The user's preferences and their work in physics research make this the right call.

I'm going to use a billiard break as a metaphor for pre-equilibrium dynamics—it's intuitive and lets me show the collision and energy distribution visually.

Building out the visualization as four sequential panels: the cue ball approaching the rack, the initial collision, balls scattering at different angles, and finally the chaotic state representing the compound nucleus. Writing the HTML structure... Still writing styles... Still writing styles... Still writing animation styles... Writing SVG pool table panels... arrow)
- Rack of 5-6 balls clustered in triangle on right
- Stick figure at bottom watching
- Label: "Setup"
- Stage: "t = 0"

**Panel 2: "First hit — direct"**
- Rack scattered slightly
- One ball shooting off the top edge (upward, forward direction) with motion trail
- Label: "1 collision"
- Stage: "t ~ 10⁻²² s"

**Panel 3: "Cascade — pre-eq"**
- More balls in motion with angled trajectories
- One ball exiting at an intermediate angle (upper-right)
- Cue ball has decelerated
- Label: "2-4 collisions"
- Stage: "t ~ 10⁻²¹ s"

**Panel 4: "Thermalized — compound"**
- Balls all rattling around with tiny motion indicators
- One ball exiting at a random angle
- Label: "many collisions"
- Stage: "t ~ 10⁻¹⁸ s"

For clarity, I'll orient the cue ball moving left-to-right so that "forward" from the collision perspective means rightward, making it easy to distinguish balls escaping forward versus those going sideways or backward. I'm reconsidering the directional conventions to keep this intuitive.

Actually, in standard nuclear physics, the beam direction is typically "up" (θ=0), so let me flip the orientation: cue ball at the bottom moving upward toward the rack at the top. Balls escaping through the top are forward-peaked, those exiting the sides are intermediate angles, and anything going downward is backward scattering.

Now I'm setting up the SVG panels with a portrait viewBox to accommodate the vertical beam direction. me use landscape with beam going left-to-right, consistent with most nuclear physics reaction diagrams. Beam direction = right. θ=0° is right, θ=90° is up, θ=180° is left.

Each panel SVG: viewBox "0 0 160 140"
- Green felt rectangle with dark border at x=10, y=15, width=140, height=100
- Stick figure at bottom: simple head circle + line body at x=80, y=125-140
- Balls inside the felt
- Exit arrows/trails as needed

Panel 1 (t=0):
- Cue ball (purple) at x=25, y=65
- Motion arrow from cue to the right
- Rack (5 balls in triangle) at x=110-130, y=55-75
- Beam arrow above felt indicating "→ forward"

Panel 2 (t ~ 10⁻²² s):
- Cue ball decelerated near center
- One ball exiting right edge (forward) with motion trail
- Other rack balls slightly scattered but mostly stationary
- Label the exiting ball "forward-peaked emission"

Panel 3 (t ~ 10⁻²¹ s):
- Multiple balls in motion with angled trajectories
- One ball exiting top-right at ~30° from forward
- Some balls still bouncing inside
- Label: "intermediate angle"

Panel 4 (t ~ 10⁻¹⁸ s):
- All balls rattling around with small motion indicators
- One ball exiting backward or at large angle
- Label: "backward-peaked emission"

Now I'm setting up the HTML structure with four SVG panels, each showing a billiard ball collision at different time scales. I'll keep the animations simple—just the escaping ball moving in its respective direction per panel, so the angle progression is crystal clear to the user.

I should also add a stick figure observer at the bottom of each panel whose posture shifts to reflect the skill level required for each shot.

Building the HTML structure and styles... Setting up the dark mode styles and establishing the base layout with typography and spacing defaults. Still writing styles... Still writing styles... Still writing animation keyframes... Still writing animation keyframes... Writing SVG markup... Writing the SVG diagram... Writing the SVG panels... Writing SVG visualization... Writing SVG panels... Writing SVG animation code... Writing SVG elements... Writing SVG markup... Writing SVG elements... Finishing the stick figure's legs, then wrapping up the SVG with metadata about the collision stage and timescale, followed by caption text explaining how directional information from the cue ball gets distributed through scattering events.

Now I'm setting up the interactive captions object that maps each panel to its physics explanation — the first entry describes the initial state with the cue ball approaching the stationary rack, establishing the real-world analogy to a plane wave before impact. Continuing with the pre-equilibrium stage where multiple collisions have redistributed the momentum across several balls, so an escaping ball now leaves at an intermediate angle—still favoring the forward direction but clearly deflected from the original cue path. This maps to nuclear reactions where successive nucleon-nucleon collisions create exciton states, each emission carrying less memory of the initial collision direction and producing increasingly broad angular distributions.

Now I'm setting up the final stage where after many more collisions, the original direction is completely randomized—a ball escapes with equal probability in any direction. This represents full thermalization of the compound nucleus, where the exciton distribution reaches equilibrium and emissions become isotropic according to statistical nuclear models.

Building the interactive panel system... I'm checking the environment rules — the no-comments restriction and CSP rules don't apply here since this is a standalone file, not a widget artifact. I should save this to the outputs folder and use present_files to show it to the user. Let me refine the styling to ensure the caption tag has good contrast with white text on the colored background, and verify the dark mode CSS variables are working properly. I need to verify the file paths match the system requirements — outputs go to `/mnt/user-data/outputs/preequilibrium_billiard.html` — and I have the right tools available: `create_file` with description, path, and file_text, plus `present_files` to list the result. The HTML is around 250 lines which is well within limits, so I'll finalize and submit it now.

</details>

The Visualizer tool has gone offline mid-conversation. Since you explicitly invoked the concept-visualizer skill and your preferences emphasize interactive/dynamic animation, I'll deliver the visual as a self-contained HTML file instead — same effect, just saved rather than streamed inline.

**Mechanism extracted** — Pre-equilibrium is: *energy spreads through a growing chain of interactions, and at any point a piece might escape carrying partial memory of where it came from.*

**Metaphor chosen** — a **billiard break**. The cue ball is the projectile, the racked balls are the Fermi sea, and a ball escaping the table is nuclear emission. When it escapes determines how much memory of the cue direction it retains. This is structurally honest: energy and momentum propagate through discrete binary collisions in both systems.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T14:52:02.911088Z",
  "stop_timestamp": "2026-04-22T14:53:29.081017Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_0185pXVQovJoQpdja9mEqaSW",
  "name": "create_file",
  "input": {
    "description": "Create interactive HTML visualization of pre-equilibrium using a billiard-break metaphor, with 4 clickable panels showing the three reaction regimes",
    "path": "/mnt/user-data/outputs/preequilibrium_billiard.html",
    "file_text": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n<title>Pre-equilibrium — a billiard-break metaphor</title>\n<style>\n  :root {\n    color-scheme: light dark;\n    --bg: #faf9f5;\n    --fg: #1f1e1d;\n    --muted: #73726c;\n    --faint: #a8a6a0;\n    --border: rgba(0,0,0,0.12);\n    --card: #ffffff;\n    --felt: #cfe3d1;\n    --felt-edge: #5f7a5f;\n    --cue: #7F77DD;\n    --cue-deep: #3C3489;\n    --sea: #5DCAA5;\n    --sea-deep: #0F6E56;\n    --hot: #EF9F27;\n    --hot-deep: #854F0B;\n    --exit: #D85A30;\n    --exit-deep: #993C1D;\n  }\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --bg: #1a1a19;\n      --fg: #ebeadf;\n      --muted: #9c9a92;\n      --faint: #5f5e5a;\n      --border: rgba(255,255,255,0.14);\n      --card: #252523;\n      --felt: #26342a;\n      --felt-edge: #9FE1CB;\n      --cue: #AFA9EC;\n      --cue-deep: #CECBF6;\n      --sea: #9FE1CB;\n      --sea-deep: #5DCAA5;\n      --hot: #FAC775;\n      --hot-deep: #EF9F27;\n      --exit: #F0997B;\n      --exit-deep: #D85A30;\n    }\n  }\n  * { box-sizing: border-box; }\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif;\n    background: var(--bg);\n    color: var(--fg);\n    padding: 1.5rem 1rem 2rem;\n    line-height: 1.55;\n  }\n  .wrap { max-width: 880px; margin: 0 auto; }\n  h1 { font-size: 22px; font-weight: 500; margin: 0 0 .35rem; letter-spacing: -0.01em; }\n  .sub { font-size: 13.5px; color: var(--muted); margin: 0 0 1.5rem; }\n  .strip {\n    background: var(--card);\n    border: 0.5px solid var(--border);\n    border-radius: 14px;\n    padding: 16px;\n  }\n  .panels { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }\n  @media (max-width: 640px) { .panels { grid-template-columns: repeat(2, 1fr); } }\n  .panel {\n    cursor: pointer;\n    position: relative;\n    border-radius: 8px;\n    background: var(--card);\n    border: 0.5px solid var(--border);\n    transition: transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n    overflow: hidden;\n    outline: none;\n  }\n  .panel:hover { transform: translateY(-2px); box-shadow: 0 2px 14px rgba(0,0,0,0.10); }\n  .panel.active { border-color: var(--cue); box-shadow: 0 0 0 1.5px var(--cue); }\n  .panel:focus-visible { border-color: var(--cue); box-shadow: 0 0 0 2px var(--cue); }\n  .panel svg { display: block; width: 100%; height: auto; }\n  .meta {\n    padding: 8px 10px 10px;\n    border-top: 0.5px solid var(--border);\n    text-align: center;\n  }\n  .meta .stage { font-size: 12.5px; font-weight: 500; color: var(--fg); }\n  .meta .tau { font-size: 11px; color: var(--muted); font-family: ui-monospace, SFMono-Regular, monospace; margin-top: 2px; }\n\n  .caption {\n    margin-top: 14px;\n    padding: 14px 16px;\n    background: var(--card);\n    border: 0.5px solid var(--border);\n    border-left: 3px solid var(--cue);\n    border-radius: 8px;\n    font-size: 14px;\n    transition: border-left-color 0.25s ease;\n    min-height: 110px;\n  }\n  .caption .lead { font-weight: 500; margin: 0 0 6px; font-size: 14.5px; }\n  .caption .map { color: var(--muted); margin: 0 0 10px; font-size: 13.5px; line-height: 1.55; }\n  .caption .real { margin: 0; font-size: 13.5px; line-height: 1.55; }\n  .tag {\n    display: inline-block;\n    font-size: 11px;\n    padding: 2px 8px;\n    border-radius: 4px;\n    margin-right: 6px;\n    font-weight: 500;\n    letter-spacing: 0.02em;\n    color: #fff;\n    vertical-align: 1px;\n  }\n  .hint { font-size: 11.5px; color: var(--faint); text-align: center; margin-top: 10px; }\n  .limit {\n    margin-top: 24px;\n    padding: 14px 16px;\n    background: var(--card);\n    border: 0.5px solid var(--border);\n    border-left: 3px solid var(--exit-deep);\n    border-radius: 8px;\n    font-size: 13.5px;\n    color: var(--muted);\n    line-height: 1.6;\n  }\n  .limit b { color: var(--fg); font-weight: 500; }\n\n  .anim-cue-slide { animation: cue-slide 3s ease-out infinite; }\n  @keyframes cue-slide {\n    0%   { transform: translateX(-22px); opacity: 0; }\n    15%  { opacity: 1; }\n    55%  { transform: translateX(0); opacity: 1; }\n    75%  { transform: translateX(0) scale(0.96); opacity: 0.7; }\n    100% { transform: translateX(-22px); opacity: 0; }\n  }\n  .anim-p2-exit { animation: p2-exit 3s ease-out infinite; }\n  @keyframes p2-exit {\n    0%   { transform: translateX(0); opacity: 1; }\n    35%  { transform: translateX(0); opacity: 1; }\n    92%  { transform: translateX(62px); opacity: 1; }\n    100% { transform: translateX(70px); opacity: 0; }\n  }\n  .anim-p3-exit { animation: p3-exit 3.2s ease-out infinite; }\n  @keyframes p3-exit {\n    0%   { transform: translate(0, 0); opacity: 1; }\n    30%  { transform: translate(0, 0); opacity: 1; }\n    92%  { transform: translate(44px, -34px); opacity: 1; }\n    100% { transform: translate(52px, -40px); opacity: 0; }\n  }\n  .anim-p4-exit { animation: p4-exit 3.4s ease-out infinite; }\n  @keyframes p4-exit {\n    0%   { transform: translate(0, 0); opacity: 1; }\n    25%  { transform: translate(0, 0); opacity: 1; }\n    92%  { transform: translate(-48px, 28px); opacity: 1; }\n    100% { transform: translate(-55px, 34px); opacity: 0; }\n  }\n  .rattle-1 { animation: rattle1 0.55s ease-in-out infinite alternate; }\n  .rattle-2 { animation: rattle2 0.70s ease-in-out infinite alternate; }\n  .rattle-3 { animation: rattle3 0.40s ease-in-out infinite alternate; }\n  .rattle-4 { animation: rattle4 0.60s ease-in-out infinite alternate; }\n  .rattle-5 { animation: rattle5 0.45s ease-in-out infinite alternate; }\n  @keyframes rattle1 { 0% { transform: translate(-2px, 1px); }  100% { transform: translate(2px, -1px); } }\n  @keyframes rattle2 { 0% { transform: translate(1px, 2px); }   100% { transform: translate(-1px, -2px); } }\n  @keyframes rattle3 { 0% { transform: translate(-1px, -2px); } 100% { transform: translate(2px, 1px); } }\n  @keyframes rattle4 { 0% { transform: translate(2px, -1px); }  100% { transform: translate(-2px, 1px); } }\n  @keyframes rattle5 { 0% { transform: translate(0, 2px); }     100% { transform: translate(0, -2px); } }\n\n  @media (prefers-reduced-motion: reduce) {\n    .anim-cue-slide, .anim-p2-exit, .anim-p3-exit, .anim-p4-exit,\n    .rattle-1, .rattle-2, .rattle-3, .rattle-4, .rattle-5 { animation: none; }\n  }\n</style>\n</head>\n<body>\n<div class=\"wrap\">\n  <h1>Pre-equilibrium, as a billiard break</h1>\n  <p class=\"sub\">A cue ball strikes a rack. <b>When</b> a ball leaves the table, and <b>in what direction</b>, maps onto the three nuclear reaction regimes. Click each panel for the mapping.</p>\n\n  <div class=\"strip\">\n    <div class=\"panels\" id=\"panels\">\n\n      <div class=\"panel\" data-panel=\"1\" tabindex=\"0\" role=\"button\" aria-label=\"Panel 1: Setup\">\n        <svg viewBox=\"0 0 160 140\" aria-hidden=\"true\">\n          <defs>\n            <marker id=\"fwd1\" viewBox=\"0 0 8 8\" refX=\"7\" refY=\"4\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto\">\n              <path d=\"M1 1L7 4L1 7Z\" fill=\"currentColor\"/>\n            </marker>\n          </defs>\n          <g style=\"color: var(--muted)\">\n            <line x1=\"58\" y1=\"10\" x2=\"102\" y2=\"10\" stroke=\"currentColor\" stroke-width=\"0.8\" marker-end=\"url(#fwd1)\"/>\n            <text x=\"80\" y=\"7\" font-size=\"7\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"ui-monospace,monospace\">beam → forward</text>\n          </g>\n          <rect x=\"10\" y=\"16\" width=\"140\" height=\"90\" rx=\"5\" fill=\"var(--felt)\" stroke=\"var(--felt-edge)\" stroke-width=\"1\"/>\n          <g fill=\"var(--sea)\" stroke=\"var(--sea-deep)\" stroke-width=\"0.5\">\n            <circle cx=\"116\" cy=\"61\" r=\"5\"/>\n            <circle cx=\"126\" cy=\"55\" r=\"5\"/>\n            <circle cx=\"126\" cy=\"67\" r=\"5\"/>\n            <circle cx=\"136\" cy=\"49\" r=\"5\"/>\n            <circle cx=\"136\" cy=\"61\" r=\"5\"/>\n            <circle cx=\"136\" cy=\"73\" r=\"5\"/>\n          </g>\n          <line x1=\"22\" y1=\"61\" x2=\"38\" y2=\"61\" stroke=\"var(--cue)\" stroke-width=\"0.7\" stroke-dasharray=\"2 2\" opacity=\"0.5\"/>\n          <g class=\"anim-cue-slide\">\n            <circle cx=\"40\" cy=\"61\" r=\"5\" fill=\"var(--cue)\" stroke=\"var(--cue-deep)\" stroke-width=\"0.6\"/>\n          </g>\n          <g stroke=\"var(--fg)\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\">\n            <circle cx=\"26\" cy=\"118\" r=\"2.6\" fill=\"var(--fg)\"/>\n            <line x1=\"26\" y1=\"121\" x2=\"26\" y2=\"130\"/>\n            <line x1=\"26\" y1=\"124\" x2=\"20\" y2=\"127\"/>\n            <line x1=\"26\" y1=\"124\" x2=\"34\" y2=\"121\"/>\n            <line x1=\"26\" y1=\"130\" x2=\"22\" y2=\"137\"/>\n            <line x1=\"26\" y1=\"130\" x2=\"30\" y2=\"137\"/>\n          </g>\n        </svg>\n        <div class=\"meta\">\n          <div class=\"stage\">Setup</div>\n          <div class=\"tau\">t = 0</div>\n        </div>\n      </div>\n\n      <div class=\"panel\" data-panel=\"2\" tabindex=\"0\" role=\"button\" aria-label=\"Panel 2: Direct escape\">\n        <svg viewBox=\"0 0 160 140\" aria-hidden=\"true\">\n          <defs>\n            <marker id=\"fwd2\" viewBox=\"0 0 8 8\" refX=\"7\" refY=\"4\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto\">\n              <path d=\"M1 1L7 4L1 7Z\" fill=\"currentColor\"/>\n            </marker>\n          </defs>\n          <g style=\"color: var(--muted)\">\n            <line x1=\"58\" y1=\"10\" x2=\"102\" y2=\"10\" stroke=\"currentColor\" stroke-width=\"0.8\" marker-end=\"url(#fwd2)\"/>\n            <text x=\"80\" y=\"7\" font-size=\"7\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"ui-monospace,monospace\">beam → forward</text>\n          </g>\n          <rect x=\"10\" y=\"16\" width=\"140\" height=\"90\" rx=\"5\" fill=\"var(--felt)\" stroke=\"var(--felt-edge)\" stroke-width=\"1\"/>\n          <circle cx=\"90\" cy=\"62\" r=\"5\" fill=\"var(--cue)\" stroke=\"var(--cue-deep)\" stroke-width=\"0.6\" opacity=\"0.85\"/>\n          <g fill=\"var(--sea)\" stroke=\"var(--sea-deep)\" stroke-width=\"0.5\">\n            <circle cx=\"120\" cy=\"52\" r=\"5\"/>\n            <circle cx=\"122\" cy=\"72\" r=\"5\"/>\n            <circle cx=\"132\" cy=\"84\" r=\"5\"/>\n            <circle cx=\"136\" cy=\"45\" r=\"5\"/>\n          </g>\n          <line x1=\"80\" y1=\"60\" x2=\"142\" y2=\"60\" stroke=\"var(--hot)\" stroke-width=\"0.9\" stroke-dasharray=\"2 2\" opacity=\"0.5\"/>\n          <g class=\"anim-p2-exit\">\n            <circle cx=\"80\" cy=\"60\" r=\"5\" fill=\"var(--hot)\" stroke=\"var(--hot-deep)\" stroke-width=\"0.6\"/>\n          </g>\n          <g stroke=\"var(--fg)\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\">\n            <circle cx=\"26\" cy=\"118\" r=\"2.6\" fill=\"var(--fg)\"/>\n            <line x1=\"26\" y1=\"121\" x2=\"26\" y2=\"130\"/>\n            <line x1=\"26\" y1=\"124\" x2=\"32\" y2=\"119\"/>\n            <line x1=\"26\" y1=\"124\" x2=\"32\" y2=\"128\"/>\n            <line x1=\"26\" y1=\"130\" x2=\"22\" y2=\"137\"/>\n            <line x1=\"26\" y1=\"130\" x2=\"30\" y2=\"137\"/>\n          </g>\n        </svg>\n        <div class=\"meta\">\n          <div class=\"stage\">1 collision</div>\n          <div class=\"tau\">t ~ 10⁻²² s</div>\n        </div>\n      </div>\n\n      <div class=\"panel\" data-panel=\"3\" tabindex=\"0\" role=\"button\" aria-label=\"Panel 3: Pre-equilibrium escape\">\n        <svg viewBox=\"0 0 160 140\" aria-hidden=\"true\">\n          <defs>\n            <marker id=\"fwd3\" viewBox=\"0 0 8 8\" refX=\"7\" refY=\"4\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto\">\n              <path d=\"M1 1L7 4L1 7Z\" fill=\"currentColor\"/>\n            </marker>\n          </defs>\n          <g style=\"color: var(--muted)\">\n            <line x1=\"58\" y1=\"10\" x2=\"102\" y2=\"10\" stroke=\"currentColor\" stroke-width=\"0.8\" marker-end=\"url(#fwd3)\"/>\n            <text x=\"80\" y=\"7\" font-size=\"7\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"ui-monospace,monospace\">beam → forward</text>\n          </g>\n          <rect x=\"10\" y=\"16\" width=\"140\" height=\"90\" rx=\"5\" fill=\"var(--felt)\" stroke=\"var(--felt-edge)\" stroke-width=\"1\"/>\n          <g fill=\"var(--sea)\" stroke=\"var(--sea-deep)\" stroke-width=\"0.5\">\n            <g class=\"rattle-1\"><circle cx=\"60\" cy=\"58\" r=\"5\"/></g>\n            <g class=\"rattle-2\"><circle cx=\"108\" cy=\"48\" r=\"5\"/></g>\n            <g class=\"rattle-3\"><circle cx=\"124\" cy=\"78\" r=\"5\"/></g>\n            <g class=\"rattle-4\"><circle cx=\"78\" cy=\"86\" r=\"5\"/></g>\n          </g>\n          <g class=\"rattle-5\">\n            <circle cx=\"90\" cy=\"66\" r=\"5\" fill=\"var(--cue)\" stroke=\"var(--cue-deep)\" stroke-width=\"0.6\" opacity=\"0.75\"/>\n          </g>\n          <line x1=\"96\" y1=\"62\" x2=\"140\" y2=\"28\" stroke=\"var(--hot)\" stroke-width=\"0.9\" stroke-dasharray=\"2 2\" opacity=\"0.5\"/>\n          <g class=\"anim-p3-exit\">\n            <circle cx=\"96\" cy=\"62\" r=\"5\" fill=\"var(--hot)\" stroke=\"var(--hot-deep)\" stroke-width=\"0.6\"/>\n          </g>\n          <g stroke=\"var(--fg)\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\">\n            <circle cx=\"26\" cy=\"119\" r=\"2.6\" fill=\"var(--fg)\"/>\n            <line x1=\"26\" y1=\"121.5\" x2=\"24\" y2=\"130\"/>\n            <line x1=\"25\" y1=\"124\" x2=\"20\" y2=\"127\"/>\n            <line x1=\"25\" y1=\"124\" x2=\"30\" y2=\"127\"/>\n            <line x1=\"24\" y1=\"130\" x2=\"22\" y2=\"137\"/>\n            <line x1=\"24\" y1=\"130\" x2=\"28\" y2=\"137\"/>\n            <text x=\"31\" y=\"115\" font-size=\"7\" fill=\"var(--muted)\" font-family=\"ui-monospace,monospace\">?</text>\n          </g>\n        </svg>\n        <div class=\"meta\">\n          <div class=\"stage\">2–4 collisions</div>\n          <div class=\"tau\">t ~ 10⁻²¹ s</div>\n        </div>\n      </div>\n\n      <div class=\"panel\" data-panel=\"4\" tabindex=\"0\" role=\"button\" aria-label=\"Panel 4: Compound-nucleus escape\">\n        <svg viewBox=\"0 0 160 140\" aria-hidden=\"true\">\n          <defs>\n            <marker id=\"fwd4\" viewBox=\"0 0 8 8\" refX=\"7\" refY=\"4\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto\">\n              <path d=\"M1 1L7 4L1 7Z\" fill=\"currentColor\"/>\n            </marker>\n          </defs>\n          <g style=\"color: var(--muted)\">\n            <line x1=\"58\" y1=\"10\" x2=\"102\" y2=\"10\" stroke=\"currentColor\" stroke-width=\"0.8\" marker-end=\"url(#fwd4)\"/>\n            <text x=\"80\" y=\"7\" font-size=\"7\" fill=\"currentColor\" text-anchor=\"middle\" font-family=\"ui-monospace,monospace\">beam → forward</text>\n          </g>\n          <rect x=\"10\" y=\"16\" width=\"140\" height=\"90\" rx=\"5\" fill=\"var(--felt)\" stroke=\"var(--felt-edge)\" stroke-width=\"1\"/>\n          <g fill=\"var(--sea)\" stroke=\"var(--sea-deep)\" stroke-width=\"0.5\">\n            <g class=\"rattle-1\"><circle cx=\"50\" cy=\"52\" r=\"5\"/></g>\n            <g class=\"rattle-2\"><circle cx=\"85\" cy=\"45\" r=\"5\"/></g>\n            <g class=\"rattle-3\"><circle cx=\"115\" cy=\"55\" r=\"5\"/></g>\n            <g class=\"rattle-4\"><circle cx=\"135\" cy=\"78\" r=\"5\"/></g>\n            <g class=\"rattle-5\"><circle cx=\"105\" cy=\"82\" r=\"5\"/></g>\n            <g class=\"rattle-2\"><circle cx=\"68\" cy=\"78\" r=\"5\"/></g>\n          </g>\n          <g class=\"rattle-3\">\n            <circle cx=\"90\" cy=\"60\" r=\"5\" fill=\"var(--cue)\" stroke=\"var(--cue-deep)\" stroke-width=\"0.6\" opacity=\"0.7\"/>\n          </g>\n          <line x1=\"90\" y1=\"65\" x2=\"40\" y2=\"95\" stroke=\"var(--hot)\" stroke-width=\"0.9\" stroke-dasharray=\"2 2\" opacity=\"0.5\"/>\n          <g class=\"anim-p4-exit\">\n            <circle cx=\"90\" cy=\"65\" r=\"5\" fill=\"var(--hot)\" stroke=\"var(--hot-deep)\" stroke-width=\"0.6\"/>\n          </g>\n          <g stroke=\"var(--fg)\" stroke-width=\"1.2\" fill=\"none\" stroke-linecap=\"round\">\n            <circle cx=\"26\" cy=\"118\" r=\"2.6\" fill=\"var(--fg)\"/>\n            <line x1=\"26\" y1=\"121\" x2=\"26\" y2=\"130\"/>\n            <line x1=\"21\" y1=\"126\" x2=\"31\" y2=\"124\"/>\n            <line x1=\"21\" y1=\"124\" x2=\"31\" y2=\"126\"/>\n            <line x1=\"26\" y1=\"130\" x2=\"22\" y2=\"137\"/>\n            <line x1=\"26\" y1=\"130\" x2=\"30\" y2=\"137\"/>\n          </g>\n        </svg>\n        <div class=\"meta\">\n          <div class=\"stage\">Many collisions</div>\n          <div class=\"tau\">t ~ 10⁻¹⁸ s</div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"caption\" id=\"caption\">\n      <p class=\"lead\">Click any panel for the physics mapping</p>\n      <p class=\"map\">The cue ball carries directional information. Each collision distributes that information among more balls. A ball that leaves the table early still remembers which way the cue was going — one that escapes after many bounces doesn't.</p>\n    </div>\n    <p class=\"hint\">Animations loop continuously. Left-to-right is the beam direction.</p>\n  </div>\n\n  <div class=\"limit\">\n    <b>Where the metaphor breaks down.</b> Real nucleons (1) already occupy Fermi-sea states before the projectile arrives, subject to Pauli blocking — the \"rack\" isn't static; (2) tunnel through a potential barrier on emission rather than crossing a geometric table edge; and (3) the collision rates come from in-medium NN cross sections, not hard-sphere scattering. The metaphor is honest about the <i>mechanism</i> — competition between energy sharing and early escape — but not about the quantum statistics underneath.\n  </div>\n</div>\n\n<script>\n  const captions = {\n    '1': {\n      lead: 'Setup — the incoming projectile',\n      tagColor: 'var(--cue-deep)',\n      tag: 'Initial state',\n      map: 'The cue ball approaches a stationary rack along the beam axis. The rack is the nucleus; the cue ball is the projectile; forward means the beam direction. Nothing has happened yet.',\n      real: 'Nuclear analogue: the projectile just before contact — a plane wave carrying pure forward momentum, with no excitons yet formed.'\n    },\n    '2': {\n      lead: 'Direct reaction — escape after 1 collision',\n      tagColor: 'var(--cue-deep)',\n      tag: 'Direct · ~10⁻²² s',\n      map: 'The cue strikes the rack. One ball is knocked almost straight forward and leaves the table through the near edge, carrying essentially all of the cue\\'s momentum in its original direction.',\n      real: 'In the nucleus: a single-step interaction where one nucleon is ejected with full entrance-channel memory. The angular distribution is sharply forward-peaked, often with diffraction oscillations from coherent scattering off the nuclear surface.'\n    },\n    '3': {\n      lead: 'Pre-equilibrium — escape mid-cascade',\n      tagColor: 'var(--sea-deep)',\n      tag: 'Pre-eq · ~10⁻²¹ s',\n      map: 'Several collisions have happened. Momentum is now shared across multiple balls. A ball escapes at an intermediate angle — still biased forward, but clearly off the cue line.',\n      real: 'Each NN collision inside the medium creates a new particle-hole pair (exciton). Emissions from 2p–1h → 3p–2h → 4p–3h states carry progressively less entrance-channel memory, producing broad forward-biased angular distributions and a hard tail in the energy spectrum above the compound-nucleus evaporation peak.'\n    },\n    '4': {\n      lead: 'Compound nucleus — escape after full mixing',\n      tagColor: 'var(--exit-deep)',\n      tag: 'Compound · ~10⁻¹⁸ s',\n      map: 'After many collisions, the original cue direction is lost. A ball eventually leaves the table, but its direction is essentially random — equally likely to head forward, sideways, or backward.',\n      real: 'The nucleus has thermalized: exciton occupancy follows the statistical Fermi-gas distribution. Emission rates are computed from Hauser-Feshbach theory and yield isotropic angular distributions with Maxwellian energy spectra.'\n    }\n  };\n\n  const panels = document.querySelectorAll('.panel');\n  const caption = document.getElementById('caption');\n\n  function show(id) {\n    panels.forEach(p => p.classList.toggle('active', p.dataset.panel === id));\n    const c = captions[id];\n    caption.style.borderLeftColor = c.tagColor;\n    caption.innerHTML =\n      '<p class=\"lead\">' + c.lead + '</p>' +\n      '<p class=\"map\">' + c.map + '</p>' +\n      '<p class=\"real\"><span class=\"tag\" style=\"background:' + c.tagColor + '\">' + c.tag + '</span>' + c.real + '</p>';\n  }\n\n  panels.forEach(p => {\n    p.addEventListener('click', () => show(p.dataset.panel));\n    p.addEventListener('keydown', (e) => {\n      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(p.dataset.panel); }\n    });\n  });\n\n  show('1');\n</script>\n</body>\n</html>\n"
  },
  "message": "Create interactive HTML visualization of pre-equilibrium using a billiard-break metaphor, with 4 clickable panels showing the three reaction regimes",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"html\", \"code\": \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n<meta charset=\\\"UTF-8\\\">\\n<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1\\\">\\n<title>Pre-equilibrium \\u2014 a billiard-break metaphor</title>\\n<style>\\n  :root {\\n    color-scheme: light dark;\\n    --bg: #faf9f5;\\n    --fg: #1f1e1d;\\n    --muted: #73726c;\\n    --faint: #a8a6a0;\\n    --border: rgba(0,0,0,0.12);\\n    --card: #ffffff;\\n    --felt: #cfe3d1;\\n    --felt-edge: #5f7a5f;\\n    --cue: #7F77DD;\\n    --cue-deep: #3C3489;\\n    --sea: #5DCAA5;\\n    --sea-deep: #0F6E56;\\n    --hot: #EF9F27;\\n    --hot-deep: #854F0B;\\n    --exit: #D85A30;\\n    --exit-deep: #993C1D;\\n  }\\n  @media (prefers-color-scheme: dark) {\\n    :root {\\n      --bg: #1a1a19;\\n      --fg: #ebeadf;\\n      --muted: #9c9a92;\\n      --faint: #5f5e5a;\\n      --border: rgba(255,255,255,0.14);\\n      --card: #252523;\\n      --felt: #26342a;\\n      --felt-edge: #9FE1CB;\\n      --cue: #AFA9EC;\\n      --cue-deep: #CECBF6;\\n      --sea: #9FE1CB;\\n      --sea-deep: #5DCAA5;\\n      --hot: #FAC775;\\n      --hot-deep: #EF9F27;\\n      --exit: #F0997B;\\n      --exit-deep: #D85A30;\\n    }\\n  }\\n  * { box-sizing: border-box; }\\n  body {\\n    margin: 0;\\n    font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, sans-serif;\\n    background: var(--bg);\\n    color: var(--fg);\\n    padding: 1.5rem 1rem 2rem;\\n    line-height: 1.55;\\n  }\\n  .wrap { max-width: 880px; margin: 0 auto; }\\n  h1 { font-size: 22px; font-weight: 500; margin: 0 0 .35rem; letter-spacing: -0.01em; }\\n  .sub { font-size: 13.5px; color: var(--muted); margin: 0 0 1.5rem; }\\n  .strip {\\n    background: var(--card);\\n    border: 0.5px solid var(--border);\\n    border-radius: 14px;\\n    padding: 16px;\\n  }\\n  .panels { display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; }\\n  @media (max-width: 640px) { .panels { grid-template-columns: repeat(2, 1fr); } }\\n  .panel {\\n    cursor: pointer;\\n    position: relative;\\n    border-radius: 8px;\\n    background: var(--card);\\n    border: 0.5px solid var(--border);\\n    transition: transform 0.15s ease, box-shadow 0.2s ease, border-color 0.2s ease;\\n    overflow: hidden;\\n    outline: none;\\n  }\\n  .panel:hover { transform: translateY(-2px); box-shadow: 0 2px 14px rgba(0,0,0,0.10); }\\n  .panel.active { border-color: var(--cue); box-shadow: 0 0 0 1.5px var(--cue); }\\n  .panel:focus-visible { border-color: var(--cue); box-shadow: 0 0 0 2px var(--cue); }\\n  .panel svg { display: block; width: 100%; height: auto; }\\n  .meta {\\n    padding: 8px 10px 10px;\\n    border-top: 0.5px solid var(--border);\\n    text-align: center;\\n  }\\n  .meta .stage { font-size: 12.5px; font-weight: 500; color: var(--fg); }\\n  .meta .tau { font-size: 11px; color: var(--muted); font-family: ui-monospace, SFMono-Regular, monospace; margin-top: 2px; }\\n\\n  .caption {\\n    margin-top: 14px;\\n    padding: 14px 16px;\\n    background: var(--card);\\n    border: 0.5px solid var(--border);\\n    border-left: 3px solid var(--cue);\\n    border-radius: 8px;\\n    font-size: 14px;\\n    transition: border-left-color 0.25s ease;\\n    min-height: 110px;\\n  }\\n  .caption .lead { font-weight: 500; margin: 0 0 6px; font-size: 14.5px; }\\n  .caption .map { color: var(--muted); margin: 0 0 10px; font-size: 13.5px; line-height: 1.55; }\\n  .caption .real { margin: 0; font-size: 13.5px; line-height: 1.55; }\\n  .tag {\\n    display: inline-block;\\n    font-size: 11px;\\n    padding: 2px 8px;\\n    border-radius: 4px;\\n    margin-right: 6px;\\n    font-weight: 500;\\n    letter-spacing: 0.02em;\\n    color: #fff;\\n    vertical-align: 1px;\\n  }\\n  .hint { font-size: 11.5px; color: var(--faint); text-align: center; margin-top: 10px; }\\n  .limit {\\n    margin-top: 24px;\\n    padding: 14px 16px;\\n    background: var(--card);\\n    border: 0.5px solid var(--border);\\n    border-left: 3px solid var(--exit-deep);\\n    border-radius: 8px;\\n    font-size: 13.5px;\\n    color: var(--muted);\\n    line-height: 1.6;\\n  }\\n  .limit b { color: var(--fg); font-weight: 500; }\\n\\n  .anim-cue-slide { animation: cue-slide 3s ease-out infinite; }\\n  @keyframes cue-slide {\\n    0%   { transform: translateX(-22px); opacity: 0; }\\n    15%  { opacity: 1; }\\n    55%  { transform: translateX(0); opacity: 1; }\\n    75%  { transform: translateX(0) scale(0.96); opacity: 0.7; }\\n    100% { transform: translateX(-22px); opacity: 0; }\\n  }\\n  .anim-p2-exit { animation: p2-exit 3s ease-out infinite; }\\n  @keyframes p2-exit {\\n    0%   { transform: translateX(0); opacity: 1; }\\n    35%  { transform: translateX(0); opacity: 1; }\\n    92%  { transform: translateX(62px); opacity: 1; }\\n    100% { transform: translateX(70px); opacity: 0; }\\n  }\\n  .anim-p3-exit { animation: p3-exit 3.2s ease-out infinite; }\\n  @keyframes p3-exit {\\n    0%   { transform: translate(0, 0); opacity: 1; }\\n    30%  { transform: translate(0, 0); opacity: 1; }\\n    92%  { transform: translate(44px, -34px); opacity: 1; }\\n    100% { transform: translate(52px, -40px); opacity: 0; }\\n  }\\n  .anim-p4-exit { animation: p4-exit 3.4s ease-out infinite; }\\n  @keyframes p4-exit {\\n    0%   { transform: translate(0, 0); opacity: 1; }\\n    25%  { transform: translate(0, 0); opacity: 1; }\\n    92%  { transform: translate(-48px, 28px); opacity: 1; }\\n    100% { transform: translate(-55px, 34px); opacity: 0; }\\n  }\\n  .rattle-1 { animation: rattle1 0.55s ease-in-out infinite alternate; }\\n  .rattle-2 { animation: rattle2 0.70s ease-in-out infinite alternate; }\\n  .rattle-3 { animation: rattle3 0.40s ease-in-out infinite alternate; }\\n  .rattle-4 { animation: rattle4 0.60s ease-in-out infinite alternate; }\\n  .rattle-5 { animation: rattle5 0.45s ease-in-out infinite alternate; }\\n  @keyframes rattle1 { 0% { transform: translate(-2px, 1px); }  100% { transform: translate(2px, -1px); } }\\n  @keyframes rattle2 { 0% { transform: translate(1px, 2px); }   100% { transform: translate(-1px, -2px); } }\\n  @keyframes rattle3 { 0% { transform: translate(-1px, -2px); } 100% { transform: translate(2px, 1px); } }\\n  @keyframes rattle4 { 0% { transform: translate(2px, -1px); }  100% { transform: translate(-2px, 1px); } }\\n  @keyframes rattle5 { 0% { transform: translate(0, 2px); }     100% { transform: translate(0, -2px); } }\\n\\n  @media (prefers-reduced-motion: reduce) {\\n    .anim-cue-slide, .anim-p2-exit, .anim-p3-exit, .anim-p4-exit,\\n    .rattle-1, .rattle-2, .rattle-3, .rattle-4, .rattle-5 { animation: none; }\\n  }\\n</style>\\n</head>\\n<body>\\n<div class=\\\"wrap\\\">\\n  <h1>Pre-equilibrium, as a billiard break</h1>\\n  <p class=\\\"sub\\\">A cue ball strikes a rack. <b>When</b> a ball leaves the table, and <b>in what direction</b>, maps onto the three nuclear reaction regimes. Click each panel for the mapping.</p>\\n\\n  <div class=\\\"strip\\\">\\n    <div class=\\\"panels\\\" id=\\\"panels\\\">\\n\\n      <div class=\\\"panel\\\" data-panel=\\\"1\\\" tabindex=\\\"0\\\" role=\\\"button\\\" aria-label=\\\"Panel 1: Setup\\\">\\n        <svg viewBox=\\\"0 0 160 140\\\" aria-hidden=\\\"true\\\">\\n          <defs>\\n            <marker id=\\\"fwd1\\\" viewBox=\\\"0 0 8 8\\\" refX=\\\"7\\\" refY=\\\"4\\\" markerWidth=\\\"5\\\" markerHeight=\\\"5\\\" orient=\\\"auto\\\">\\n              <path d=\\\"M1 1L7 4L1 7Z\\\" fill=\\\"currentColor\\\"/>\\n            </marker>\\n          </defs>\\n          <g style=\\\"color: var(--muted)\\\">\\n            <line x1=\\\"58\\\" y1=\\\"10\\\" x2=\\\"102\\\" y2=\\\"10\\\" stroke=\\\"currentColor\\\" stroke-width=\\\"0.8\\\" marker-end=\\\"url(#fwd1)\\\"/>\\n            <text x=\\\"80\\\" y=\\\"7\\\" font-size=\\\"7\\\" fill=\\\"currentColor\\\" text-anchor=\\\"middle\\\" font-family=\\\"ui-monospace,monospace\\\">beam \\u2192 forward</text>\\n          </g>\\n          <rect x=\\\"10\\\" y=\\\"16\\\" width=\\\"140\\\" height=\\\"90\\\" rx=\\\"5\\\" fill=\\\"var(--felt)\\\" stroke=\\\"var(--felt-edge)\\\" stroke-width=\\\"1\\\"/>\\n          <g fill=\\\"var(--sea)\\\" stroke=\\\"var(--sea-deep)\\\" stroke-width=\\\"0.5\\\">\\n            <circle cx=\\\"116\\\" cy=\\\"61\\\" r=\\\"5\\\"/>\\n            <circle cx=\\\"126\\\" cy=\\\"55\\\" r=\\\"5\\\"/>\\n            <circle cx=\\\"126\\\" cy=\\\"67\\\" r=\\\"5\\\"/>\\n            <circle cx=\\\"136\\\" cy=\\\"49\\\" r=\\\"5\\\"/>\\n            <circle cx=\\\"136\\\" cy=\\\"61\\\" r=\\\"5\\\"/>\\n            <circle cx=\\\"136\\\" cy=\\\"73\\\" r=\\\"5\\\"/>\\n          </g>\\n          <line x1=\\\"22\\\" y1=\\\"61\\\" x2=\\\"38\\\" y2=\\\"61\\\" stroke=\\\"var(--cue)\\\" stroke-width=\\\"0.7\\\" stroke-dasharray=\\\"2 2\\\" opacity=\\\"0.5\\\"/>\\n          <g class=\\\"anim-cue-slide\\\">\\n            <circle cx=\\\"40\\\" cy=\\\"61\\\" r=\\\"5\\\" fill=\\\"var(--cue)\\\" stroke=\\\"var(--cue-deep)\\\" stroke-width=\\\"0.6\\\"/>\\n          </g>\\n          <g stroke=\\\"var(--fg)\\\" stroke-width=\\\"1.2\\\" fill=\\\"none\\\" stroke-linecap=\\\"round\\\">\\n            <circle cx=\\\"26\\\" cy=\\\"118\\\" r=\\\"2.6\\\" fill=\\\"var(--fg)\\\"/>\\n            <line x1=\\\"26\\\" y1=\\\"121\\\" x2=\\\"26\\\" y2=\\\"130\\\"/>\\n            <line x1=\\\"26\\\" y1=\\\"124\\\" x2=\\\"20\\\" y2=\\\"127\\\"/>\\n            <line x1=\\\"26\\\" y1=\\\"124\\\" x2=\\\"34\\\" y2=\\\"121\\\"/>\\n            <line x1=\\\"26\\\" y1=\\\"130\\\" x2=\\\"22\\\" y2=\\\"137\\\"/>\\n            <line x1=\\\"26\\\" y1=\\\"130\\\" x2=\\\"30\\\" y2=\\\"137\\\"/>\\n          </g>\\n        </svg>\\n        <div class=\\\"meta\\\">\\n          <div class=\\\"stage\\\">Setup</div>\\n          <div class=\\\"tau\\\">t = 0</div>\\n        </div>\\n      </div>\\n\\n      <div class=\\\"panel\\\" data-panel=\\\"2\\\" tabindex=\\\"0\\\" role=\\\"button\\\" aria-label=\\\"Panel 2: Direct escape\\\">\\n        <svg viewBox=\\\"0 0 160 140\\\" aria-hidden=\\\"true\\\">\\n          <defs>\\n            <marker id=\\\"fwd2\\\" viewBox=\\\"0 0 8 8\\\" refX=\\\"7\\\" refY=\\\"4\\\" markerWidth=\\\"5\\\" markerHeight=\\\"5\\\" orient=\\\"auto\\\">\\n              <path d=\\\"M1 1L7 4L1 7Z\\\" fill=\\\"currentColor\\\"/>\\n            </marker>\\n          </defs>\\n          <g style=\\\"color: var(--muted)\\\">\\n            <line x1=\\\"58\\\" y1=\\\"10\\\" x2=\\\"102\\\" y2=\\\"10\\\" stroke=\\\"currentColor\\\" stroke-width=\\\"0.8\\\" marker-end=\\\"url(#fwd2)\\\"/>\\n            <text x=\\\"80\\\" y=\\\"7\\\" font-size=\\\"7\\\" fill=\\\"currentColor\\\" text-anchor=\\\"middle\\\" font-family=\\\"ui-monospace,monospace\\\">beam \\u2192 forward</text>\\n          </g>\\n          <rect x=\\\"10\\\" y=\\\"16\\\" width=\\\"140\\\" height=\\\"90\\\" rx=\\\"5\\\" fill=\\\"var(--felt)\\\" stroke=\\\"var(--felt-edge)\\\" stroke-width=\\\"1\\\"/>\\n          <circle cx=\\\"90\\\" cy=\\\"62\\\" r=\\\"5\\\" fill=\\\"var(--cue)\\\" stroke=\\\"var(--cue-deep)\\\" stroke-width=\\\"0.6\\\" opacity=\\\"0.85\\\"/>\\n          <g fill=\\\"var(--sea)\\\" stroke=\\\"var(--sea-deep)\\\" stroke-width=\\\"0.5\\\">\\n            <circle cx=\\\"120\\\" cy=\\\"52\\\" r=\\\"5\\\"/>\\n            <circle cx=\\\"122\\\" cy=\\\"72\\\" r=\\\"5\\\"/>\\n            <circle cx=\\\"132\\\" cy=\\\"84\\\" r=\\\"5\\\"/>\\n            <circle cx=\\\"136\\\" cy=\\\"45\\\" r=\\\"5\\\"/>\\n          </g>\\n          <line x1=\\\"80\\\" y1=\\\"60\\\" x2=\\\"142\\\" y2=\\\"60\\\" stroke=\\\"var(--hot)\\\" stroke-width=\\\"0.9\\\" stroke-dasharray=\\\"2 2\\\" opacity=\\\"0.5\\\"/>\\n          <g class=\\\"anim-p2-exit\\\">\\n            <circle cx=\\\"80\\\" cy=\\\"60\\\" r=\\\"5\\\" fill=\\\"var(--hot)\\\" stroke=\\\"var(--hot-deep)\\\" stroke-width=\\\"0.6\\\"/>\\n          </g>\\n          <g stroke=\\\"var(--fg)\\\" stroke-width=\\\"1.2\\\" fill=\\\"none\\\" stroke-linecap=\\\"round\\\">\\n            <circle cx=\\\"26\\\" cy=\\\"118\\\" r=\\\"2.6\\\" fill=\\\"var(--fg)\\\"/>\\n            <line x1=\\\"26\\\" y1=\\\"121\\\" x2=\\\"26\\\" y2=\\\"130\\\"/>\\n            <line x1=\\\"26\\\" y1=\\\"124\\\" x2=\\\"32\\\" y2=\\\"119\\\"/>\\n            <line x1=\\\"26\\\" y1=\\\"124\\\" x2=\\\"32\\\" y2=\\\"128\\\"/>\\n            <line x1=\\\"26\\\" y1=\\\"130\\\" x2=\\\"22\\\" y2=\\\"137\\\"/>\\n            <line x1=\\\"26\\\" y1=\\\"130\\\" x2=\\\"30\\\" y2=\\\"137\\\"/>\\n          </g>\\n        </svg>\\n        <div class=\\\"meta\\\">\\n          <div class=\\\"stage\\\">1 collision</div>\\n          <div class=\\\"tau\\\">t ~ 10\\u207b\\u00b2\\u00b2 s</div>\\n        </div>\\n      </div>\\n\\n      <div class=\\\"panel\\\" data-panel=\\\"3\\\" tabindex=\\\"0\\\" role=\\\"button\\\" aria-label=\\\"Panel 3: Pre-equilibrium escape\\\">\\n        <svg viewBox=\\\"0 0 160 140\\\" aria-hidden=\\\"true\\\">\\n          <defs>\\n            <marker id=\\\"fwd3\\\" viewBox=\\\"0 0 8 8\\\" refX=\\\"7\\\" refY=\\\"4\\\" markerWidth=\\\"5\\\" markerHeight=\\\"5\\\" orient=\\\"auto\\\">\\n              <path d=\\\"M1 1L7 4L1 7Z\\\" fill=\\\"currentColor\\\"/>\\n            </marker>\\n          </defs>\\n          <g style=\\\"color: var(--muted)\\\">\\n            <line x1=\\\"58\\\" y1=\\\"10\\\" x2=\\\"102\\\" y2=\\\"10\\\" stroke=\\\"currentColor\\\" stroke-width=\\\"0.8\\\" marker-end=\\\"url(#fwd3)\\\"/>\\n            <text x=\\\"80\\\" y=\\\"7\\\" font-size=\\\"7\\\" fill=\\\"currentColor\\\" text-anchor=\\\"middle\\\" font-family=\\\"ui-monospace,monospace\\\">beam \\u2192 forward</text>\\n          </g>\\n          <rect x=\\\"10\\\" y=\\\"16\\\" width=\\\"140\\\" height=\\\"90\\\" rx=\\\"5\\\" fill=\\\"var(--felt)\\\" stroke=\\\"var(--felt-edge)\\\" stroke-width=\\\"1\\\"/>\\n          <g fill=\\\"var(--sea)\\\" stroke=\\\"var(--sea-deep)\\\" stroke-width=\\\"0.5\\\">\\n            <g class=\\\"rattle-1\\\"><circle cx=\\\"60\\\" cy=\\\"58\\\" r=\\\"5\\\"/></g>\\n            <g class=\\\"rattle-2\\\"><circle cx=\\\"108\\\" cy=\\\"48\\\" r=\\\"5\\\"/></g>\\n            <g class=\\\"rattle-3\\\"><circle cx=\\\"124\\\" cy=\\\"78\\\" r=\\\"5\\\"/></g>\\n            <g class=\\\"rattle-4\\\"><circle cx=\\\"78\\\" cy=\\\"86\\\" r=\\\"5\\\"/></g>\\n          </g>\\n          <g class=\\\"rattle-5\\\">\\n            <circle cx=\\\"90\\\" cy=\\\"66\\\" r=\\\"5\\\" fill=\\\"var(--cue)\\\" stroke=\\\"var(--cue-deep)\\\" stroke-width=\\\"0.6\\\" opacity=\\\"0.75\\\"/>\\n          </g>\\n          <line x1=\\\"96\\\" y1=\\\"62\\\" x2=\\\"140\\\" y2=\\\"28\\\" stroke=\\\"var(--hot)\\\" stroke-width=\\\"0.9\\\" stroke-dasharray=\\\"2 2\\\" opacity=\\\"0.5\\\"/>\\n          <g class=\\\"anim-p3-exit\\\">\\n            <circle cx=\\\"96\\\" cy=\\\"62\\\" r=\\\"5\\\" fill=\\\"var(--hot)\\\" stroke=\\\"var(--hot-deep)\\\" stroke-width=\\\"0.6\\\"/>\\n          </g>\\n          <g stroke=\\\"var(--fg)\\\" stroke-width=\\\"1.2\\\" fill=\\\"none\\\" stroke-linecap=\\\"round\\\">\\n            <circle cx=\\\"26\\\" cy=\\\"119\\\" r=\\\"2.6\\\" fill=\\\"var(--fg)\\\"/>\\n            <line x1=\\\"26\\\" y1=\\\"121.5\\\" x2=\\\"24\\\" y2=\\\"130\\\"/>\\n            <line x1=\\\"25\\\" y1=\\\"124\\\" x2=\\\"20\\\" y2=\\\"127\\\"/>\\n            <line x1=\\\"25\\\" y1=\\\"124\\\" x2=\\\"30\\\" y2=\\\"127\\\"/>\\n            <line x1=\\\"24\\\" y1=\\\"130\\\" x2=\\\"22\\\" y2=\\\"137\\\"/>\\n            <line x1=\\\"24\\\" y1=\\\"130\\\" x2=\\\"28\\\" y2=\\\"137\\\"/>\\n            <text x=\\\"31\\\" y=\\\"115\\\" font-size=\\\"7\\\" fill=\\\"var(--muted)\\\" font-family=\\\"ui-monospace,monospace\\\">?</text>\\n          </g>\\n        </svg>\\n        <div class=\\\"meta\\\">\\n          <div class=\\\"stage\\\">2\\u20134 collisions</div>\\n          <div class=\\\"tau\\\">t ~ 10\\u207b\\u00b2\\u00b9 s</div>\\n        </div>\\n      </div>\\n\\n      <div class=\\\"panel\\\" data-panel=\\\"4\\\" tabindex=\\\"0\\\" role=\\\"button\\\" aria-label=\\\"Panel 4: Compound-nucleus escape\\\">\\n        <svg viewBox=\\\"0 0 160 140\\\" aria-hidden=\\\"true\\\">\\n          <defs>\\n            <marker id=\\\"fwd4\\\" viewBox=\\\"0 0 8 8\\\" refX=\\\"7\\\" refY=\\\"4\\\" markerWidth=\\\"5\\\" markerHeight=\\\"5\\\" orient=\\\"auto\\\">\\n              <path d=\\\"M1 1L7 4L1 7Z\\\" fill=\\\"currentColor\\\"/>\\n            </marker>\\n          </defs>\\n          <g style=\\\"color: var(--muted)\\\">\\n            <line x1=\\\"58\\\" y1=\\\"10\\\" x2=\\\"102\\\" y2=\\\"10\\\" stroke=\\\"currentColor\\\" stroke-width=\\\"0.8\\\" marker-end=\\\"url(#fwd4)\\\"/>\\n            <text x=\\\"80\\\" y=\\\"7\\\" font-size=\\\"7\\\" fill=\\\"currentColor\\\" text-anchor=\\\"middle\\\" font-family=\\\"ui-monospace,monospace\\\">beam \\u2192 forward</text>\\n          </g>\\n          <rect x=\\\"10\\\" y=\\\"16\\\" width=\\\"140\\\" height=\\\"90\\\" rx=\\\"5\\\" fill=\\\"var(--felt)\\\" stroke=\\\"var(--felt-edge)\\\" stroke-width=\\\"1\\\"/>\\n          <g fill=\\\"var(--sea)\\\" stroke=\\\"var(--sea-deep)\\\" stroke-width=\\\"0.5\\\">\\n            <g class=\\\"rattle-1\\\"><circle cx=\\\"50\\\" cy=\\\"52\\\" r=\\\"5\\\"/></g>\\n            <g class=\\\"rattle-2\\\"><circle cx=\\\"85\\\" cy=\\\"45\\\" r=\\\"5\\\"/></g>\\n            <g class=\\\"rattle-3\\\"><circle cx=\\\"115\\\" cy=\\\"55\\\" r=\\\"5\\\"/></g>\\n            <g class=\\\"rattle-4\\\"><circle cx=\\\"135\\\" cy=\\\"78\\\" r=\\\"5\\\"/></g>\\n            <g class=\\\"rattle-5\\\"><circle cx=\\\"105\\\" cy=\\\"82\\\" r=\\\"5\\\"/></g>\\n            <g class=\\\"rattle-2\\\"><circle cx=\\\"68\\\" cy=\\\"78\\\" r=\\\"5\\\"/></g>\\n          </g>\\n          <g class=\\\"rattle-3\\\">\\n            <circle cx=\\\"90\\\" cy=\\\"60\\\" r=\\\"5\\\" fill=\\\"var(--cue)\\\" stroke=\\\"var(--cue-deep)\\\" stroke-width=\\\"0.6\\\" opacity=\\\"0.7\\\"/>\\n          </g>\\n          <line x1=\\\"90\\\" y1=\\\"65\\\" x2=\\\"40\\\" y2=\\\"95\\\" stroke=\\\"var(--hot)\\\" stroke-width=\\\"0.9\\\" stroke-dasharray=\\\"2 2\\\" opacity=\\\"0.5\\\"/>\\n          <g class=\\\"anim-p4-exit\\\">\\n            <circle cx=\\\"90\\\" cy=\\\"65\\\" r=\\\"5\\\" fill=\\\"var(--hot)\\\" stroke=\\\"var(--hot-deep)\\\" stroke-width=\\\"0.6\\\"/>\\n          </g>\\n          <g stroke=\\\"var(--fg)\\\" stroke-width=\\\"1.2\\\" fill=\\\"none\\\" stroke-linecap=\\\"round\\\">\\n            <circle cx=\\\"26\\\" cy=\\\"118\\\" r=\\\"2.6\\\" fill=\\\"var(--fg)\\\"/>\\n            <line x1=\\\"26\\\" y1=\\\"121\\\" x2=\\\"26\\\" y2=\\\"130\\\"/>\\n            <line x1=\\\"21\\\" y1=\\\"126\\\" x2=\\\"31\\\" y2=\\\"124\\\"/>\\n            <line x1=\\\"21\\\" y1=\\\"124\\\" x2=\\\"31\\\" y2=\\\"126\\\"/>\\n            <line x1=\\\"26\\\" y1=\\\"130\\\" x2=\\\"22\\\" y2=\\\"137\\\"/>\\n            <line x1=\\\"26\\\" y1=\\\"130\\\" x2=\\\"30\\\" y2=\\\"137\\\"/>\\n          </g>\\n        </svg>\\n        <div class=\\\"meta\\\">\\n          <div class=\\\"stage\\\">Many collisions</div>\\n          <div class=\\\"tau\\\">t ~ 10\\u207b\\u00b9\\u2078 s</div>\\n        </div>\\n      </div>\\n    </div>\\n\\n    <div class=\\\"caption\\\" id=\\\"caption\\\">\\n      <p class=\\\"lead\\\">Click any panel for the physics mapping</p>\\n      <p class=\\\"map\\\">The cue ball carries directional information. Each collision distributes that information among more balls. A ball that leaves the table early still remembers which way the cue was going \\u2014 one that escapes after many bounces doesn't.</p>\\n    </div>\\n    <p class=\\\"hint\\\">Animations loop continuously. Left-to-right is the beam direction.</p>\\n  </div>\\n\\n  <div class=\\\"limit\\\">\\n    <b>Where the metaphor breaks down.</b> Real nucleons (1) already occupy Fermi-sea states before the projectile arrives, subject to Pauli blocking \\u2014 the \\\"rack\\\" isn't static; (2) tunnel through a potential barrier on emission rather than crossing a geometric table edge; and (3) the collision rates come from in-medium NN cross sections, not hard-sphere scattering. The metaphor is honest about the <i>mechanism</i> \\u2014 competition between energy sharing and early escape \\u2014 but not about the quantum statistics underneath.\\n  </div>\\n</div>\\n\\n<script>\\n  const captions = {\\n    '1': {\\n      lead: 'Setup \\u2014 the incoming projectile',\\n      tagColor: 'var(--cue-deep)',\\n      tag: 'Initial state',\\n      map: 'The cue ball approaches a stationary rack along the beam axis. The rack is the nucleus; the cue ball is the projectile; forward means the beam direction. Nothing has happened yet.',\\n      real: 'Nuclear analogue: the projectile just before contact \\u2014 a plane wave carrying pure forward momentum, with no excitons yet formed.'\\n    },\\n    '2': {\\n      lead: 'Direct reaction \\u2014 escape after 1 collision',\\n      tagColor: 'var(--cue-deep)',\\n      tag: 'Direct \\u00b7 ~10\\u207b\\u00b2\\u00b2 s',\\n      map: 'The cue strikes the rack. One ball is knocked almost straight forward and leaves the table through the near edge, carrying essentially all of the cue\\\\'s momentum in its original direction.',\\n      real: 'In the nucleus: a single-step interaction where one nucleon is ejected with full entrance-channel memory. The angular distribution is sharply forward-peaked, often with diffraction oscillations from coherent scattering off the nuclear surface.'\\n    },\\n    '3': {\\n      lead: 'Pre-equilibrium \\u2014 escape mid-cascade',\\n      tagColor: 'var(--sea-deep)',\\n      tag: 'Pre-eq \\u00b7 ~10\\u207b\\u00b2\\u00b9 s',\\n      map: 'Several collisions have happened. Momentum is now shared across multiple balls. A ball escapes at an intermediate angle \\u2014 still biased forward, but clearly off the cue line.',\\n      real: 'Each NN collision inside the medium creates a new particle-hole pair (exciton). Emissions from 2p\\u20131h \\u2192 3p\\u20132h \\u2192 4p\\u20133h states carry progressively less entrance-channel memory, producing broad forward-biased angular distributions and a hard tail in the energy spectrum above the compound-nucleus evaporation peak.'\\n    },\\n    '4': {\\n      lead: 'Compound nucleus \\u2014 escape after full mixing',\\n      tagColor: 'var(--exit-deep)',\\n      tag: 'Compound \\u00b7 ~10\\u207b\\u00b9\\u2078 s',\\n      map: 'After many collisions, the original cue direction is lost. A ball eventually leaves the table, but its direction is essentially random \\u2014 equally likely to head forward, sideways, or backward.',\\n      real: 'The nucleus has thermalized: exciton occupancy follows the statistical Fermi-gas distribution. Emission rates are computed from Hauser-Feshbach theory and yield isotropic angular distributions with Maxwellian energy spectra.'\\n    }\\n  };\\n\\n  const panels = document.querySelectorAll('.panel');\\n  const caption = document.getElementById('caption');\\n\\n  function show(id) {\\n    panels.forEach(p => p.classList.toggle('active', p.dataset.panel === id));\\n    const c = captions[id];\\n    caption.style.borderLeftColor = c.tagColor;\\n    caption.innerHTML =\\n      '<p class=\\\"lead\\\">' + c.lead + '</p>' +\\n      '<p class=\\\"map\\\">' + c.map + '</p>' +\\n      '<p class=\\\"real\\\"><span class=\\\"tag\\\" style=\\\"background:' + c.tagColor + '\\\">' + c.tag + '</span>' + c.real + '</p>';\\n  }\\n\\n  panels.forEach(p => {\\n    p.addEventListener('click', () => show(p.dataset.panel));\\n    p.addEventListener('keydown', (e) => {\\n      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); show(p.dataset.panel); }\\n    });\\n  });\\n\\n  show('1');\\n</script>\\n</body>\\n</html>\\n\", \"filename\": \"/mnt/user-data/outputs/preequilibrium_billiard.html\"}"
  },
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
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
  "tool_use_id": "toolu_0185pXVQovJoQpdja9mEqaSW",
  "name": "create_file",
  "content": [
    {
      "type": "text",
      "text": "File created successfully: /mnt/user-data/outputs/preequilibrium_billiard.html",
      "uuid": "0cf212b1-f302-4d85-89de-607c85254a7d"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": {
    "type": "text",
    "text": "File created successfully: /mnt/user-data/outputs/preequilibrium_billiard.html"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-22T14:53:33.098950Z",
  "stop_timestamp": "2026-04-22T14:53:33.343115Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_011JLVq3EEqKJQkaM2n4XEKM",
  "name": "present_files",
  "input": {
    "filepaths": [
      "/mnt/user-data/outputs/preequilibrium_billiard.html"
    ]
  },
  "message": "Presenting file(s)...",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "table",
    "table": [
      [
        "filepaths",
        "['/mnt/user-data/outputs/preequilibrium_billiard.html']"
      ]
    ]
  },
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
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
  "tool_use_id": "toolu_011JLVq3EEqKJQkaM2n4XEKM",
  "name": "present_files",
  "content": [
    {
      "type": "local_resource",
      "file_path": "/mnt/user-data/outputs/preequilibrium_billiard.html",
      "name": "preequilibrium billiard",
      "mime_type": "text/html",
      "uuid": "4646338f-6dd1-4b89-b994-6e8b973b18a5"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Presented file",
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

**Mapping back to the physics.** The cue ball's direction is the entrance channel. Each collision (each NN scatter inside the nuclear medium) distributes that directional information among more participants. Whether a ball escapes carrying strong, partial, or no memory of the cue direction is exactly what separates direct, pre-equilibrium, and compound-nucleus emission in your angular distributions.

**Where the metaphor is honest** — the core mechanism (competition between energy sharing and early escape; memory degrading with each collision) is genuinely what pre-equilibrium is.

**Where it breaks** (noted inside the file, but worth flagging here): the Fermi sea isn't static — target nucleons are already moving, and Pauli blocking restricts which final states are accessible; nuclear emission is quantum barrier penetration, not a geometric table edge; and the NN "hit rate" follows in-medium cross sections (Pauli-quenched relative to free NN). The metaphor gets the bookkeeping right, not the quantum underpinnings.

**Invitation to go deeper.** The obvious extension is to show *why the forward bias decays exponentially with exciton number* — that's a direct consequence of how each NN scatter randomizes the phase-space direction, and it's quantifiable via the Kikuchi-Kawai angular-distribution formula in the exciton model. Want to see that next?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019db5a9-bac8-7d08-914a-0f4a7e9cd71b",
  "updated_at": "2026-04-22T14:53:42.754338Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019db5a9-bac7-7f61-822a-72a78ea74eb9"
}
```

</details>
