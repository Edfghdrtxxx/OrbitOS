# Doppler broadening in nuclear reactor fuel

## Export metadata (verbatim)

```json
{
  "uuid": "8ab96a40-8691-4449-9bd2-72a915f21e58",
  "name": "Doppler broadening in nuclear reactor fuel",
  "summary": "**Conversation Overview**\n\nThe person engaged in a deep, exploratory study session on nuclear reactor physics, specifically focused on Doppler broadening of ²³⁸U resonance absorption cross-section peaks. The conversation began with the person having answered a multiple-choice question incorrectly (choosing option D — that resonance peaks shift to higher energies with temperature) and asking Claude to explain the correct answer (option B — peaks broaden and lower while area is conserved). Claude explained the distinction between quantum nuclear energy levels (which are fixed by nuclear structure) and the distribution of relative collision energies (which spreads with temperature via thermal motion), establishing the Doppler broadening mechanism and its role as a negative feedback safety feature in reactors.\n\nThe person then asked two follow-up conceptual questions: the origin of resonance peaks themselves, and the physical meaning of area conservation under the cross-section curve. Claude explained resonance peaks through the compound nucleus model (²³⁸U + n → ²³⁹U*), where discrete excited nuclear states produce absorption spikes described by the Breit-Wigner formula. Area conservation was explained as reflecting the invariance of the resonance strength integral — a property of the nuclear transition matrix element, not temperature — with temperature only redistributing absorption across energy via a normalized Gaussian convolution. The person also raised a conceptual confusion about ²³⁸U being consumed as fuel, which Claude clarified by distinguishing fertile (²³⁸U) from fissile (²³⁵U) material, explaining that ²³⁸U resonance capture diverts neutrons away from fission rather than consuming fissile fuel.\n\nThe session concluded with the person asking to \"dive deeper\" into the underlying mechanism, prompting Claude to explain nuclear level density using the Fermi gas model. The core explanation covered why heavy nuclei (large A) have exponentially denser, lower-energy resonances than light nuclei — rooted in the combinatorial explosion of quantum states available when more nucleons share a fixed excitation energy, quantified by ρ(E*) ∝ exp(2√(aE*)) with a ∝ A. The person demonstrated a pattern of seeking conceptual depth and mechanistic understanding rather than surface-level answers, pushing past each explanation toward the next layer of physics. Claude used interactive SVG visualizations throughout to illustrate peak broadening, the compound nucleus level ladder, and the heavy-vs-light nucleus level density comparison with a slider.",
  "created_at": "2026-04-11T13:05:05.265635Z",
  "updated_at": "2026-04-11T14:26:48.342312Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-11T13:05:05.649654Z

<problem>
4.
As the temperature of a nuclear reactor fuel increases, what happens to the resonance absorption cross-section peaks of 238U due to Doppler broadening?

* A.
The total area under the resonance curve decreases dramatically, preventing neutron capture.
* B.
The peaks become broader and lower, but the total area under the resonance curve remains roughly constant.
Right answer
Thermal motion of target nuclei causes a spread in the relative collision energies, widening the resonance peak and lowering its maximum value, reducing self-shielding.
* C.
The peaks become narrower and higher, increasing the maximum absorption probability.
* D.
The peaks shift to significantly higher energies without changing shape.
Not quite
While relative kinetic energy changes slightly, the actual quantum resonance levels of the nucleus remain at the same energy; the shape changes, not the fundamental position.
<problem>

I choose the wrong answer d. Explain this problem to me

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7ca5-59cc-75be-b2f9-2e23549495a6",
  "updated_at": "2026-04-11T13:05:05.649654Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-11T13:05:55.501656Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user chose D and wants an explanation of Doppler broadening in nuclear reactors.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T13:05:07.844817Z",
  "stop_timestamp": "2026-04-11T13:05:08.219782Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01UPb9p4sry2dWYCAJ6Y4Yb2",
  "name": "view",
  "input": {
    "description": "Load concept-visualizer skill",
    "path": "/mnt/skills/user/concept-visualizer/SKILL.md"
  },
  "message": "Load concept-visualizer skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Load concept-visualizer skill"
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
  "tool_use_id": "toolu_01UPb9p4sry2dWYCAJ6Y4Yb2",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: concept-visualizer\n     3\tdescription: \"Generate inline visual metaphor illustrations for general concepts using the Visualizer (show_widget). Turns abstract ideas into concrete, memorable SVG scenes — stick figures interacting with everyday objects to embody how a concept works. Use this skill whenever a user asks to 'visualize a concept', 'draw me a diagram of how X works', 'illustrate this idea', 'show me visually', 'make a visual explanation', or any phrasing requesting a pictorial/diagrammatic explanation of an abstract concept. Also trigger when another skill (e.g., Feynman-Technique) needs a visual aid for a concept it is explaining. Works for any domain: physics, math, CS, biology, economics, philosophy, ML, engineering, or everyday ideas. Do NOT use for data charts, UI mockups, word comparisons (use vocabulary-visualization instead), or file-based deliverables.\"\n     4\t---\n     5\t\n     6\t# Concept Visualizer\n     7\t\n     8\tTurn abstract concepts into concrete, memorable visual metaphors rendered inline via the Visualizer.\n     9\t\n    10\t## Core principle\n    11\t\n    12\tEvery concept has a **mechanism** — something it *does*. The job is to find an everyday object or situation that does the same thing visibly, then draw that.\n    13\t\n    14\t## Workflow\n    15\t\n    16\t### 1. Extract the mechanism\n    17\t\n    18\tAsk: *what does this concept actually do?* Strip away domain jargon and find the verb.\n    19\t\n    20\t| Concept | Mechanism |\n    21\t|---|---|\n    22\t| Entropy | Things spread out / get disordered over time |\n    23\t| Gradient descent | Feel which way is downhill, step that way, repeat |\n    24\t| Nuclear fission | One split triggers more splits (chain reaction) |\n    25\t| Recursion | Do the same task on a smaller version of itself |\n    26\t| Natural selection | Variants compete; survivors pass traits forward |\n    27\t| Opportunity cost | Choosing one path locks out another |\n    28\t\n    29\tOne sentence. If you can't state the mechanism simply, break the concept into sub-concepts and visualize each.\n    30\t\n    31\t### 2. Find the metaphor object\n    32\t\n    33\tPick ONE concrete, universally familiar object or situation whose behavior mirrors the mechanism. The metaphor must be:\n    34\t\n    35\t- **Physical and visible** — something you can draw (not another abstraction)\n    36\t- **Universally known** — no culture/domain-specific objects\n    37\t- **Structurally honest** — the metaphor's behavior genuinely parallels the concept, not just superficially\n    38\t\n    39\tGood sources: water, balls, stairs, rooms, doors, ropes/knots, trees, paths/forks, dominoes, containers, springs, seesaws, conveyor belts, pulleys, mirrors, sandcastles, crowds of people.\n    40\t\n    41\t**Honesty check**: where does the metaphor break down? Note this internally — you'll flag it in the prose after the visual.\n    42\t\n    43\t### 3. Decompose into 2–5 panels\n    44\t\n    45\tBreak the concept into sequential stages or contrasting states. Each panel = one moment/aspect.\n    46\t\n    47\tPanel types:\n    48\t- **Sequential** (A → B → C): for processes, transformations, chains of cause-and-effect\n    49\t- **Contrast** (A vs B): for comparisons, with/without, before/after\n    50\t- **Zoom** (whole → part → detail): for hierarchical or nested concepts\n    51\t\n    52\tEach panel gets:\n    53\t- A **scene**: the metaphor object + a stick figure in a specific posture/action\n    54\t- A **label**: 2–5 words naming the stage (e.g., \"Energy spreads out\")\n    55\t- A **reveal caption**: 1–2 sentences mapping the scene back to the real concept (shown on click)\n    56\t\n    57\t### 4. Render via Visualizer\n    58\t\n    59\tCall `visualize:read_me` with module `[\"diagram\"]` before the first `show_widget` call.\n    60\t\n    61\t**SVG structure:**\n    62\t\n    63\t- Panels arranged **left-to-right** in a single SVG, separated by subtle vertical dividers\n    64\t- Consistent canvas: each panel is a square cell within a wide strip\n    65\t- The metaphor object is **visually identical** across panels — only the figure's relationship to it changes\n    66\t- Stick figures communicate through **posture and spatial relationship**, not detail\n    67\t- Distinct muted color per panel stage; CSS-variable-aware for dark mode\n    68\t- Arrow or flow indicator between sequential panels\n    69\t- Click a panel → reveal caption fades in below the scene\n    70\t\n    71\t**Visual rules:**\n    72\t\n    73\t- Stick figures, not icons. Simple geometric shapes. No clip-art.\n    74\t- Maximum 5 panels — if the concept needs more, split into multiple visualizations\n    75\t- Labels use a clean sans-serif; captions in italic\n    76\t- No decorative elements that don't carry meaning\n    77\t- Consistent ground line across panels for visual continuity\n    78\t- Panel width: at least 140px each; total SVG viewBox width ≤ 800\n    79\t\n    80\t**Interactivity:**\n    81\t\n    82\t- Click/tap a panel to toggle its reveal caption\n    83\t- Subtle hover highlight on panels (opacity shift)\n    84\t- Active panel gets a gentle border highlight\n    85\t\n    86\t### 5. Prose after the visual\n    87\t\n    88\tDo NOT restate what the visual shows. Instead:\n    89\t\n    90\t- **Map it back**: one sentence explicitly connecting the metaphor to the real concept (\"The messy room is entropy — energy states spreading into less organized configurations.\")\n    91\t- **Flag the break**: where the metaphor stops working (\"Unlike a real room, entropy in physics is about *probability* of microstates, not just messiness.\")\n    92\t- **Extend an invitation**: a question or nudge to go deeper (\"Want to see why some processes *reverse* entropy? That's where it gets interesting.\")\n    93\t\n    94\t## Integration with other skills\n    95\t\n    96\tThis skill is designed to be called by other skills. When invoked from another skill's context:\n    97\t\n    98\t- Accept the concept and any analogy already established by the calling skill\n    99\t- If the calling skill (e.g., Feynman-Technique) has already chosen an analogy, **use that analogy** as the metaphor object — don't invent a competing one\n   100\t- If no analogy is provided, select one using step 2 above\n   101\t- Return the visual inline; the calling skill handles surrounding prose\n   102\t\n   103\t## Constraints\n   104\t\n   105\t- Metaphors must be structurally honest — don't force a visual that misrepresents the concept\n   106\t- All text in the SVG must be readable at default zoom (≥12px effective)\n   107\t- Use the Visualizer tool (`show_widget`), not file artifacts\n   108\t- One concept per visualization; compound concepts get multiple visuals\n   109\t",
      "uuid": "f739902c-bedb-4c59-972c-5f91dbaf0209"
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

Let me now read the visualizer module and then explain Doppler broadening clearly with a visualization.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T13:05:14.658720Z",
  "stop_timestamp": "2026-04-11T13:05:14.745975Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01T9hSQNArvT4X6a7dD2RyNP",
  "name": "visualize:read_me",
  "input": {
    "modules": [
      "diagram"
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
  "tool_use_id": "toolu_01T9hSQNArvT4X6a7dD2RyNP",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "# Imagine — Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` — SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` — UI mockups, forms, cards, dashboards\n- `interactive` — interactive explainers with controls\n- `chart` — charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` — illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget — hard limits:**\n- Box subtitles: ≤5 words. Detail goes in click-through (`sendPrompt`) or the prose below — not the box.\n- Colors: ≤2 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: ≤4 boxes at full width (~140px each). 5+ boxes → shrink to ≤110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing \"click to learn more\" in prose, the diagram itself must ACTUALLY be sparse. Don't promise brevity then front-load everything.\n\n**Accessibility:** For HTML widgets, begin with a visually-hidden `<h2 class=\"sr-only\">` containing a one-sentence summary of the visualization for screen-reader users. (SVG widgets use `role=\"img\"` with `<title>` and `<desc>` instead — see SVG setup.)\n\nYou create rich visual content — SVG diagrams/illustrations and HTML interactive widgets — that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn't notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** — All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks \"explain X\", write the explanation in your response and use the tool only for the visual that accompanies it. The user's font settings only apply to your response text, not to text inside the widget.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) → content HTML → `<script>` last.\n- **SVG**: `<defs>` (markers) → visual elements immediately.\n- Prefer inline `style=\"...\"` over `<style>` blocks — inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules — that's fine, but don't bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji — use CSS shapes or SVG paths\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only — host provides the bg)\n- **Typography**: The default font is Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-serif)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px — all `font-weight: 500`. Heading color is pre-set to `var(--color-text-primary)` — don't override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 — they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally — no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` — the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style=\"min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;\">` and put the modal inside — it's a faux viewport that actually contributes layout height.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` — just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text — never plain black or generic gray.\n- **Corners**: use `border-radius: var(--border-radius-md)` (or `-lg` for cards) in HTML. In SVG, `rx=\"4\"` is the default — larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** — if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** — see Philosophy above.\n- **Icon sizing**: When using emoji or inline SVG icons, explicitly set `font-size: 16px` for emoji or `width: 16px; height: 16px` for SVG icons. Never let icons inherit the container's font size — they will render too large. For larger decorative icons, use 24px max.\n- No tabs, carousels, or `display: none` sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)\n- No nested scrolling — auto-fit height.\n- Scripts execute after streaming — load libraries via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` (UMD globals), then use the global in a plain `<script>` that follows.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`. All other origins are blocked by the sandbox — the request silently fails.\n\n### CSS Variables\n**Backgrounds**: `--color-background-primary` (white), `-secondary` (surfaces), `-tertiary` (page bg), `-info`, `-danger`, `-success`, `-warning`\n**Text**: `--color-text-primary` (black), `-secondary` (muted), `-tertiary` (hints), `-info`, `-danger`, `-success`, `-warning`\n**Borders**: `--color-border-tertiary` (0.15α, default), `-secondary` (0.3α, hover), `-primary` (0.4α), semantic `-info/-danger/-success/-warning`\n**Typography**: `--font-sans`, `--font-serif`, `--font-mono`\n**Layout**: `--border-radius-md` (8px), `--border-radius-lg` (12px — preferred for most components), `--border-radius-xl` (16px)\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** — every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes — they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) — never omit fill or use `fill=\"inherit\"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--color-text-primary, --color-text-secondary) for text. Never hardcode colors like color: #333 — invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user's next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href=\"https://...\">` just works — clicks are intercepted and open the host's link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n\n\n## Color palette\n\n9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.\n\n| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |\n|-------|------|------|-----|-----|-----|-----|-----|------|\n| `c-purple` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |\n| `c-teal` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |\n| `c-coral` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |\n| `c-pink` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |\n| `c-gray` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |\n| `c-blue` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |\n| `c-green` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |\n| `c-amber` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |\n| `c-red` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |\n\n**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:\n- Group nodes by **category** — all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.\n- For illustrative diagrams, map colors to **physical properties** — warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.\n- Use **gray for neutral/structural** nodes (start, end, generic steps).\n- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.\n- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept — those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)\n\n**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --color-text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** — title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.\n\n**Light/dark mode quick pick** — use only stops from the table, never off-table hex values:\n- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**\n- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**\n- Apply `c-{ramp}` to a `<g>` wrapping shape+text, or directly to a `<rect>`/`<circle>`/`<ellipse>`. Never to `<path>` — paths don't get ramp fill. For colored connector strokes use inline `stroke=\"#...\"` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.\n\nFor status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.\n\n\n## SVG setup\n\n**ViewBox safety checklist** — before finalizing any SVG, verify:\n1. Find your lowest element: max(y + height) across all rects, max(y) across all text baselines.\n2. Set viewBox height = that value + 40px buffer.\n3. Find your rightmost element: max(x + width) across all rects. All content must stay within x=0 to x=680.\n4. For text with text-anchor=\"end\", the text extends LEFT from x. If x=118 and text is 200px wide, it starts at x=-82 — outside the viewBox. Increase x or use text-anchor=\"start\".\n5. Never use negative x or y coordinates. The viewBox starts at 0,0.\n6. Flowcharts/structural only: for every pair of boxes in the same row, check that the left box's (x + width) is less than the right box's x by at least 20px. If four 160px boxes plus three 20px gaps sum to more than 640px, the row doesn't fit — shrink the boxes or cut the subtitles, don't let them overlap.\n\n**SVG setup**: `<svg width=\"100%\" viewBox=\"0 0 680 H\" role=\"img\"><title>…</title><desc>…</desc>…` — 680px wide, flexible height. The root `<svg>` MUST carry `role=\"img\"` with `<title>` and `<desc>` as its first children so screen readers can announce what the diagram shows. Set H to fit content tightly — the last element's bottom edge + 40px padding. Don't leave excess empty space below the content. Safe area: x=40 to x=640, y=40 to y=(H-40). Background transparent. **Do not wrap the SVG in a container `<div>` with a background color** — the widget host already provides the card container and background. Output the raw `<svg>` element directly.\n\n**The 680 in viewBox is load-bearing — do not change it.** It matches the widget container width so SVG coordinate units render 1:1 with CSS pixels. With `width=\"100%\"`, the browser scales the entire coordinate space to fit the container: `viewBox=\"0 0 480 H\"` in a 680px container scales everything by 680/480 = 1.42×, so your `class=\"th\"` 14px text renders at ~20px. The font calibration table below and all \"text fits in box\" math assume 1:1. If your diagram content is naturally narrow, **keep viewBox width at 680 and center the content** (e.g. content spans x=180..500) — do not shrink the viewBox to hug the content. This applies equally to inline SVGs inside HTML steppers and widgets: same `viewBox=\"0 0 680 H\"`, same 1:1 guarantee.\n\n**viewBox height:** After layout, find max_y (bottom-most point of any shape, including text baselines + 4px descent). Set viewBox height = max_y + 20. Don't guess.\n\n**text-anchor='end' at x<60 is risky** — the longest label will extend left past x=0. Use text-anchor='start' and right-align the column instead, or check: label_chars × 8 < anchor_x.\n\n**One SVG per tool call** — each call must contain exactly one <svg> element. Never leave an abandoned or partial SVG in the output. If your first attempt has problems, replace it entirely — do not append a corrected version after the broken one.\n\n**Style rules for all diagrams**:\n- Every `<text>` element must carry one of the pre-built classes (`t`, `ts`, `th`). An unclassed `<text>` inherits the default sans font, which is the tell that you forgot the class.\n- Use only two font sizes: 14px for node/region labels (class=\"t\" or \"th\"), 12px for subtitles, descriptions, and arrow labels (class=\"ts\"). No other sizes.\n- No decorative step numbers, large numbering, or oversized headings outside boxes.\n- No icons or illustrations inside boxes — text only. (Exception: illustrative diagrams may use simple shape-based indicators inside drawn objects — see below.)\n- Sentence case on all labels.\n\n**Font size calibration for diagram text labels** - Here's csv table to give you better sense of the Anthropic Sans font rendering width:\n```csv\ntext, chars length, font-weight, font-size, rendered width\nAuthentication Service, chars: 22, font-weight: 500, font-size: 14px, width: 167px\nBackground Job Processor, chars: 24, font-weight: 500, font-size: 14px, width: 201px\nDetects and validates incoming tokens, chars: 37, font-weight: 400, font-size: 14px, width: 279px\nforwards request to, chars: 19, font-weight: 400, font-size: 12px, width: 123px\nデータベースサーバー接続, chars: 12, font-weight: 400, font-size: 14px, width: 181px\n```\n\nBefore placing text in a box, check: does (text width + 2×padding) fit the container?\n\n**SVG `<text>` never auto-wraps.** Every line break needs an explicit `<tspan x=\"...\" dy=\"1.2em\">`. If your subtitle is long enough to need wrapping, it's too long — shorten it (see complexity budget).\n\n**Example check**: You want to put \"Glucose (C₆H₁₂O₆)\" in a rounded rect. The text is 20 characters at 14px ≈ 180px wide. Add 2×24px padding = 228px minimum box width. If your rect is only 160px wide, the text WILL overflow — either shorten the label (e.g. just \"Glucose\") or widen the box. Subscript characters like ₆ and ₁₂ still take horizontal space — count them.\n\n**Pre-built classes** (already loaded in SVG widget):\n- `class=\"t\"` = sans 14px primary, `class=\"ts\"` = sans 12px secondary, `class=\"th\"` = sans 14px medium (500)\n- `class=\"box\"` = neutral rect (bg-secondary fill, border stroke)\n- `class=\"node\"` = clickable group with hover effect (cursor pointer, slight dim on hover)\n- `class=\"arr\"` = arrow line (1.5px, open chevron head)\n- `class=\"leader\"` = dashed leader line (tertiary stroke, 0.5px, dashed)\n- `class=\"c-{ramp}\"` = colored node (c-blue, c-teal, c-amber, c-green, c-red, c-purple, c-coral, c-pink, c-gray). Apply to `<g>` or shape element (rect/circle/ellipse), NOT to paths. Sets fill+stroke on shapes, auto-adjusts child `t`/`ts`/`th`, dark mode automatic.\n\n**c-{ramp} nesting:** These classes use direct-child selectors (`>`). Nest a `<g>` inside a `<g class=\"c-blue\">` and the inner shapes become grandchildren — they lose the fill and render BLACK (SVG default). Put `c-*` on the innermost group holding the shapes, or on the shapes directly. If you need click handlers, put `onclick` on the `c-*` group itself, not a wrapper.\n\n- Short aliases: `var(--p)`, `var(--s)`, `var(--t)`, `var(--bg2)`, `var(--b)`\n- Arrow marker: always include this `<defs>` at the start of every SVG:\n  `<defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker></defs>`\n  Then use `marker-end=\"url(#arrow)\"` on lines. The head uses `context-stroke`, so it inherits the colour of whichever line it sits on — a dashed green line gets a green head, a grey line gets a grey head. Never a colour mismatch. Do not add filters or extra markers to `<defs>`. `<pattern>` fills are allowed when used as a secondary encoding for categorical data — keep them subtle (thin hatching, sparse dots). Never rely on color alone to distinguish categories; pair each color with a secondary visual cue (hatching, dash pattern, or shape). Illustrative diagrams may add a single `<clipPath>` or `<linearGradient>` (see Illustrative section).\n\n**Minimize standalone labels.** Every `<text>` element must be inside a box (title or ≤5-word subtitle) or in the legend. Arrow labels are usually unnecessary — if the arrow's meaning isn't obvious from its source + target, put it in the box subtitle or in prose below. Labels floating in space collide with things and are ambiguous.\n\n**Stroke width:** Use 0.5px strokes for diagram borders and edges — not 1px or 2px. Thin strokes feel more refined.\n\n**Connector paths need `fill=\"none\"`.** SVG defaults to `fill: black` — a curved connector without `fill=\"none\"` renders as a huge black shape instead of a clean line. Every `<path>` or `<polyline>` used as a connector/arrow MUST have `fill=\"none\"`. Only set fill on shapes meant to be filled (rects, circles, polygons).\n\n**Rect rounding:** `rx=\"4\"` for subtle corners. `rx=\"8\"` max for emphasized rounding. `rx` ≥ half the height = pill shape — deliberate only.\n\n**Schematic containers use dashed rects with a label.** Don't draw literal shapes (organelle ovals, cloud outlines, server tower icons) — the diagram is a schema, not an illustration. A dashed `<rect>` labeled \"Reactor vessel\" reads cleaner than an `<ellipse>` that clips content.\n\n**Lines stop at component edges.** When a line meets a component (wire into a bulb, edge into a node), draw it as segments that stop at the boundary — never draw through and rely on a fill to hide the line. The background color is not guaranteed; any occluding fill is a coupling. Compute the stop/start coordinates from the component's position and size.\n\n**Physical-color scenes (sky, water, grass, skin, materials):** Use ALL hardcoded hex — never mix with `c-*` theme classes. The scene should not invert in dark mode. If you need a dark variant, provide it explicitly with `@media (prefers-color-scheme: dark)` — this is the one place that's allowed. Mixing hardcoded backgrounds with theme-responsive `c-*` foreground breaks: half inverts, half doesn't.\n\n**No rotated text**. `<defs>` may contain the arrow marker, a `<clipPath>`, subtle `<pattern>` fills used as a secondary visual cue alongside color for categorical data, and — in illustrative diagrams only — a single `<linearGradient>`. Nothing else: no filters, no extra markers.\n\n\n## Diagram types\n*\"Explain how compound interest works\" / \"How does a process scheduler work\"*\n\n**Two rules that cause most diagram failures — check these before writing each arrow and each box:**\n1. **Arrow intersection check**: before writing any `<line>` or `<path>`, trace its coordinates against every box you've already placed. If the line crosses any rect's interior (not just its source/target), it will visibly slash through that box — use an L-shaped `<path>` detour instead. This applies to arrows crossing labels too.\n2. **Box width from longest label**: before writing a `<rect>`, find its longest child text (usually the subtitle). `rect_width = max(title_chars × 8, subtitle_chars × 7) + 24`. A 100px-wide box holds at most a 10-char subtitle. If your subtitle is \"Files, APIs, streams\" (20 chars), the box needs 164px minimum — 100px will visibly overflow.\n\n**Tier packing:** Compute total width BEFORE placing. Example — 4 pub/sub consumer boxes:\n- WRONG: x=40,160,260,360 w=160 → 40-60px overlaps (4×160=640 > 480 available)\n- RIGHT: x=50,200,350,500 w=130 gap=20 → fits (4×130 + 3×20 = 580 ≤ 590 safe width; right edge at 630 ≤ 640)\nWork bottom-up for trees: size leaf tier first, parent width ≥ sum of children.\n\n**Diagrams are the hardest use case** — they have the highest failure rate due to precise coordinate math. Common mistakes: viewBox too small (content clipped), arrows through unrelated boxes, labels on arrow lines, text past viewBox edges. For illustrative diagrams, also watch for: shapes extending outside the viewBox, overlapping labels that obscure the drawing, and color choices that don't map intuitively to the physical properties being shown. Double-check coordinates before finalizing.\n\nUse SVG for diagrams. The widget automatically wraps SVG output in a card.\n\n**Pick the right diagram type.** The decision is about *intent*, not subject matter. Ask: is the user trying to *document* this, or *understand* it?\n\n**Reference diagrams** — the user wants a map they can point at. Precision matters more than feeling. Boxes, labels, arrows, containment. These are the diagrams you'd find in documentation.\n- **Flowchart** — steps in sequence, decisions branching, data transforming. Good for: approval workflows, request lifecycles, build pipelines, \"what happens when I click submit\". Trigger phrases: *\"walk me through the process\"*, *\"what are the steps\"*, *\"what's the flow\"*.\n- **Structural diagram** — things inside other things. Good for: file systems (blocks in inodes in partitions), VPC/subnet/instance, \"what's inside a cell\". Trigger phrases: *\"what's the architecture\"*, *\"how is this organised\"*, *\"where does X live\"*.\n\n**Intuition diagrams** — the user wants to *feel* how something works. The goal isn't a correct map, it's the right mental model. These should look nothing like a flowchart. The subject doesn't need a physical form — it needs a *visual metaphor*.\n- **Illustrative diagram** — draw the mechanism. Physical things get cross-sections (water heaters, engines, lungs). Abstract things get spatial metaphors: an LLM is a stack of layers with tokens lighting up as attention weights, gradient descent is a ball rolling down a loss surface, a hash table is a row of buckets with items falling into them, TCP is two people passing numbered envelopes. Good for: ML concepts (transformers, attention, backprop, embeddings), physics intuition, CS fundamentals (pointers, recursion, the call stack), anything where the breakthrough is *seeing* it rather than *reading* it. Trigger phrases: *\"how does X actually work\"*, *\"explain X\"*, *\"I don't get X\"*, *\"give me an intuition for X\"*.\n\n**Route on the verb, not the noun.** Same subject, different diagram depending on what was asked:\n\n| User says | Type | What to draw |\n|---|---|---|\n| \"how do LLMs work\" | **Illustrative** | Token row, stacked layer slabs, attention threads glowing warm between tokens. Go interactive if you can. |\n| \"transformer architecture\" | Structural | Labelled boxes: embedding, attention heads, FFN, layer norm. |\n| \"how does attention work\" | **Illustrative** | One query token, a fan of lines to every key, line opacity = weight. |\n| \"how does gradient descent work\" | **Illustrative** | Contour surface, a ball, a trail of steps. Slider for learning rate. |\n| \"what are the training steps\" | Flowchart | Forward → loss → backward → update. Boxes and arrows. |\n| \"how does TCP work\" | **Illustrative** | Two endpoints, numbered packets in flight, an ACK returning. |\n| \"TCP handshake sequence\" | Flowchart | SYN → SYN-ACK → ACK. Three boxes. |\n| \"explain the Krebs cycle\" / \"how does the event loop work\" | **HTML stepper** | Click through stages. Never a ring. |\n| \"how does a hash map work\" | **Illustrative** | Key falling through a funnel into one of N buckets. |\n| \"draw the database schema\" / \"show me the ERD\" | **mermaid.js** | `erDiagram` syntax. Not SVG. |\n\nThe illustrative route is the default for *\"how does X work\"* with no further qualification. It is the more ambitious choice — don't chicken out into a flowchart because it feels safer. Claude draws these well.\n\nDon't mix families in one diagram. If you need both, draw the intuition version first (build the mental model), then the reference version (fill in the precise labels) as a second tool call with prose between.\n\n**For complex topics, use multiple SVG calls** — break the explanation into a series of smaller diagrams rather than one dense diagram. Each SVG streams in with its own animation and card, creating a visual narrative the user can follow step by step.\n\n**Always add prose between diagrams** — never stack multiple SVG calls back-to-back without text. Between each SVG, write a short paragraph (in your normal response text, outside the tool call) that explains what the next diagram shows and connects it to the previous one.\n\n**Promise only what you deliver** — if your response text says \"here are three diagrams\", you must include all three tool calls. Never promise a follow-up diagram and omit it. If you can only fit one diagram, adjust your text to match. One complete diagram is better than three promised and one delivered.\n\n#### Flowchart\n\nFor sequential processes, cause-and-effect, decision trees.\n\n**Planning**: Size boxes to fit their text generously. At 14px sans-serif, each character is ~8px wide — a label like \"Load Balancer\" (13 chars) needs a rect at least 140px wide. When in doubt, make boxes wider and leave more space between them. Cramped diagrams are the most common failure mode.\n\n**Special characters are wider**: Chemical formulas (C₆H₁₂O₆), math notation (∑, ∫, √), subscripts/superscripts via <tspan> with dy/baseline-shift, and Unicode symbols all render wider than plain Latin characters. For labels containing formulas or special notation, add 30-50% extra width to your estimate. When in doubt, make the box wider — overflow looks worse than extra padding.\n\n**Spacing**: 60px minimum between boxes, 24px padding inside boxes, 12px between text and edges. Leave 10px gap between arrowheads and box edges. Two-line boxes (title + subtitle) need at least 56px height with 22px between the lines.\n\n**Vertical text placement**: Every `<text>` inside a box needs `dominant-baseline=\"central\"`, with y set to the *centre* of the slot it sits in. Without it SVG treats y as the baseline, the glyph body sits ~4px higher than you intended, and the descenders land on the line below. Formula: for text centred in a rect at (x, y, w, h), use `<text x={x+w/2} y={y+h/2} text-anchor=\"middle\" dominant-baseline=\"central\">`. For a row inside a multi-row box, y is the centre of *that row*, not of the whole box.\n\n**Layout**: Prefer single-direction flows (all top-down or all left-right). Keep diagrams simple — max 4-5 nodes per diagram. The widget is narrow (~680px) so complex layouts break.\n\n**When the prompt itself is over budget**: if the user lists 6+ components (\"draw me auth, products, orders, payments, gateway, queue\"), don't draw all of them in one pass — you'll get overlapping boxes and arrows through text, every time. Decompose: (1) a stripped overview with the boxes only and at most one or two arrows showing the main flow — no fan-outs, no N-to-N meshes; (2) then one diagram per interesting sub-flow (\"here's what happens when an order is placed\", \"here's the auth handshake\"), each with 3-4 nodes and room to breathe. Count the nouns before you draw. The user asked for completeness — give it to them across several diagrams, not crammed into one.\n\n**Cycles don't get drawn as rings.** If the last stage feeds back into the first (Krebs cycle, event loop, GC mark-and-sweep, TCP retransmit), your instinct is to place the stages around a circle. Don't. Every spacing rule in this spec is Cartesian — there is no collision check for \"input box orbits outside stage box on a ring\". You will get satellite boxes overlapping the stages they feed, labels sitting on the dashed circle, and tangential arrows that point nowhere. The ring is decoration; the loop is conveyed by the return arrow.\n\nBuild a stepper in HTML. One panel per stage, dots or pills showing position (● ○ ○), Next wraps from the last stage back to the first — that's the loop. Each panel owns its inputs and products: an event loop's pending callbacks live *inside* the Poll panel, not floating next to a box on a ring. Nothing collides because nothing shares the canvas. Only fall back to a linear SVG (stages in a row, curved `<path>` return arrow) when there's one input and one output total and no per-stage detail to show.\n\n**Feedback loops in linear flows:** Don't draw a physical arrow traversing the layout (it fights the flow direction and clips edges). Instead:\n- Small `↻` glyph + text near the cycle point: `<text>↻ returns to start</text>`\n- Or restructure the whole diagram as a circle if the cycle IS the point\n\n**Arrows:** A line from A to B must not cross any other box or label. If the direct path crosses something, route around with an L-bend: `<path d=\"M x1 y1 L x1 ymid L x2 ymid L x2 y2\"/>`. Place arrow labels in clear space, not on the midpoint.\n\nKeep all nodes the same height when they have the same content type (e.g. all single-line boxes = 44px, all two-line boxes = 56px).\n\n**Flowchart components** — use these patterns consistently:\n\n*Single-line node* (44px tall): title only. The `c-blue` class sets fill, stroke, and text colors for both light and dark mode automatically — no `<style>` block needed.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about T-cells')\">\n  <rect x=\"100\" y=\"20\" width=\"180\" height=\"44\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"190\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"central\">T-cells</text>\n</g>\n```\n\n*Two-line node* (56px tall): bold title + muted subtitle.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about dendritic cells')\">\n  <rect x=\"100\" y=\"20\" width=\"200\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"200\" y=\"38\" text-anchor=\"middle\" dominant-baseline=\"central\">Dendritic cells</text>\n  <text class=\"ts\" x=\"200\" y=\"56\" text-anchor=\"middle\" dominant-baseline=\"central\">Detect foreign antigens</text>\n</g>\n```\n\n*Connector* (no label — meaning is clear from source + target):\n```svg\n<line x1=\"200\" y1=\"76\" x2=\"200\" y2=\"120\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n*Neutral node* (gray, for start/end/generic steps): use `class=\"box\"` for auto-themed fill/stroke, and default text classes.\n\nMake all nodes clickable by default — wrap in `<g class=\"node\" onclick=\"sendPrompt('...')\">`. The hover effect is built in.\n\n#### Structural diagram\n\nFor concepts where physical or logical containment matters — things inside other things.\n\n**When to use**: The explanation depends on *where* processes happen. Examples: how a cell works (organelles inside a cell), how a file system works (blocks inside inodes inside partitions), how a building's HVAC works (ducts inside floors inside a building), how a CPU cache hierarchy works (L1 inside core, L2 shared).\n\n**Core idea**: Large rounded rects are containers. Smaller rects inside them are regions or sub-structures. Text labels describe what happens in each region. Arrows show flow between regions or from external inputs/outputs.\n\n**Container rules**:\n- Outermost container: large rounded rect, rx=20-24, lightest fill (50 stop), 0.5px stroke (600 stop). Label at top-left inside, 14px bold.\n- Inner regions: medium rounded rects, rx=8-12, next shade fill (100-200 stop). Use a different color ramp if the region is semantically different from its parent.\n- 20px minimum padding inside every container — text and inner regions must not touch the container edges.\n- Max 2-3 nesting levels. Deeper nesting gets unreadable at 680px width.\n\n**Layout**:\n- Place inner regions side by side within the container, with 16px+ gap between them.\n- External inputs (sunlight, water, data, requests) sit outside the container with arrows pointing in.\n- External outputs sit outside with arrows pointing out.\n- Keep external labels short — one word or a short phrase. Details go in the prose between diagrams.\n\n**What goes inside regions**: Text only — the region name (14px bold) and a short description of what happens there (12px). Don't put flowchart-style boxes inside regions. Don't draw illustrations or icons inside.\n\n**Structural container example** (library branch with two side-by-side regions, an internal labeled arrow, and an external input). ViewBox 700x320, horizontal layout, color classes handle both light and dark mode — no `<style>` block:\n```svg\n<defs>\n  <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n<!-- Outer container -->\n<g class=\"c-green\">\n  <rect x=\"120\" y=\"30\" width=\"560\" height=\"260\" rx=\"20\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"400\" y=\"62\" text-anchor=\"middle\">Library branch</text>\n  <text class=\"ts\" x=\"400\" y=\"80\" text-anchor=\"middle\">Main floor</text>\n</g>\n<!-- Inner: Circulation desk -->\n<g class=\"c-teal\">\n  <rect x=\"150\" y=\"100\" width=\"220\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"260\" y=\"130\" text-anchor=\"middle\">Circulation desk</text>\n  <text class=\"ts\" x=\"260\" y=\"148\" text-anchor=\"middle\">Checkouts, returns</text>\n</g>\n<!-- Inner: Reading room -->\n<g class=\"c-amber\">\n  <rect x=\"450\" y=\"100\" width=\"210\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"555\" y=\"130\" text-anchor=\"middle\">Reading room</text>\n  <text class=\"ts\" x=\"555\" y=\"148\" text-anchor=\"middle\">Seating, reference</text>\n</g>\n<!-- Arrow between inner boxes with label -->\n<text class=\"ts\" x=\"410\" y=\"175\" text-anchor=\"middle\">Books</text>\n<line x1=\"370\" y1=\"185\" x2=\"448\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n<!-- External input: New acq. — text vertically aligned with arrow -->\n<text class=\"ts\" x=\"40\" y=\"185\" text-anchor=\"middle\">New acq.</text>\n<line x1=\"75\" y1=\"185\" x2=\"118\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n**Color in structural diagrams**: Nested regions need distinct ramps — `c-{ramp}` classes resolve to fixed fill/stroke stops, so the same class on parent and child gives identical fills and flattens the hierarchy. Pick a *related* ramp for inner structures (e.g. Green for the library envelope, Teal for the circulation desk inside it) and a *contrasting* ramp for a region that does something functionally different (e.g. Amber for the reading room). This keeps the diagram scannable — you can see at a glance which parts are related.\n\n**Database schemas / ERDs — use mermaid.js, not SVG.** A schema table is a header plus N field rows plus typed columns plus crow's-foot connectors. That is a text-layout problem and hand-placing it in SVG fails the same way every time. mermaid.js `erDiagram` does layout, cardinality, and connector routing for free. ERDs only; everything else stays in SVG.\n\n```\nerDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has\n  USERS {\n    uuid id PK\n    string email\n    timestamp created_at\n  }\n  POSTS {\n    uuid id PK\n    uuid user_id FK\n    string title\n  }\n```\n\nUse HTML for ERDs. Import and initialize in a `<script type=\"module\">`. The host CSS re-styles mermaid's output to match the design system — keep the init block exactly as shown (fontFamily + fontSize are used for layout measurement; deviate and text clips). After rendering, replace sharp-cornered entity `<path>` elements with rounded `<rect rx=\"8\">` to match the design system, and strip borders from attribute rows (only the outer container and header row keep visible borders — alternating fill colors separate the rows):\n```html\n<style>\n#erd svg.erDiagram .divider path { stroke-opacity: 0.5; }\n#erd svg.erDiagram .row-rect-odd path,\n#erd svg.erDiagram .row-rect-odd rect,\n#erd svg.erDiagram .row-rect-even path,\n#erd svg.erDiagram .row-rect-even rect { stroke: none !important; }\n</style>\n<div id=\"erd\"></div>\n<script type=\"module\">\nimport mermaid from 'https://esm.sh/mermaid@11/dist/mermaid.esm.min.mjs';\nconst dark = matchMedia('(prefers-color-scheme: dark)').matches;\nawait document.fonts.ready;\nmermaid.initialize({\n  startOnLoad: false,\n  theme: 'base',\n  fontFamily: '\"Anthropic Sans\", sans-serif',\n  themeVariables: {\n    darkMode: dark,\n    fontSize: '13px',\n    fontFamily: '\"Anthropic Sans\", sans-serif',\n    lineColor: dark ? '#9c9a92' : '#73726c',\n    textColor: dark ? '#c2c0b6' : '#3d3d3a',\n  },\n});\nconst { svg } = await mermaid.render('erd-svg', `erDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has`);\ndocument.getElementById('erd').innerHTML = svg;\n\n// Round only the outermost entity box corners (not internal row stripes)\ndocument.querySelectorAll('#erd svg.erDiagram .node').forEach(node => {\n  const firstPath = node.querySelector('path[d]');\n  if (!firstPath) return;\n  const d = firstPath.getAttribute('d');\n  const nums = d.match(/-?[\\d.]+/g)?.map(Number);\n  if (!nums || nums.length < 8) return;\n  const xs = [nums[0], nums[2], nums[4], nums[6]];\n  const ys = [nums[1], nums[3], nums[5], nums[7]];\n  const x = Math.min(...xs), y = Math.min(...ys);\n  const w = Math.max(...xs) - x, h = Math.max(...ys) - y;\n  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');\n  rect.setAttribute('x', x); rect.setAttribute('y', y);\n  rect.setAttribute('width', w); rect.setAttribute('height', h);\n  rect.setAttribute('rx', '8');\n  for (const a of ['fill', 'stroke', 'stroke-width', 'class', 'style']) {\n    if (firstPath.hasAttribute(a)) rect.setAttribute(a, firstPath.getAttribute(a));\n  }\n  firstPath.replaceWith(rect);\n});\n\n// Strip borders from attribute rows (mermaid v11: .row-rect-odd / .row-rect-even)\ndocument.querySelectorAll('#erd svg.erDiagram .row-rect-odd path, #erd svg.erDiagram .row-rect-even path').forEach(p => {\n  p.setAttribute('stroke', 'none');\n});\n</script>\n```\n\nWorks identically for `classDiagram` — swap the diagram source; init stays the same.\n\n#### Illustrative diagram\n\nFor building *intuition*. The subject might be physical (an engine, a lung) or completely abstract (attention, recursion, gradient descent) — what matters is that a spatial drawing conveys the mechanism better than labelled boxes would. These are the diagrams that make someone go \"oh, *that's* what it's doing.\"\n\n**Two flavours, same rules:**\n- **Physical subjects** get drawn as simplified versions of themselves. Cross-sections, cutaways, schematics. A water heater is a tank with a burner underneath. A lung is a branching tree in a cavity. You're drawing *the thing*, stylised.\n- **Abstract subjects** get drawn as *spatial metaphors*. You're inventing a shape for something that doesn't have one — but the shape should make the mechanism obvious. A transformer is a stack of horizontal slabs with a bright thread of attention connecting tokens across layers. A hash function is a funnel scattering items into a row of buckets. The call stack is literally a stack of frames growing and shrinking. Embeddings are dots clustering in space. The metaphor *is* the explanation.\n\nThis is the most ambitious diagram type and the one Claude is best at. Lean into it. Use colour for intensity (a hot attention weight glows amber, a cold one stays gray). Use repetition for scale (many small circles = many parameters).\n\n**Prefer interactive over static.** A static cross-section is a good answer; a cross-section you can *operate* is a great one. The decision rule: if the real-world system has a control, give the diagram that control. A water heater has a thermostat — so give the user a slider that shifts the hot/cold boundary, a toggle that fires the burner and animates convection currents. An LLM has input tokens — let the user click one and watch the attention weights re-fan. A cache has a hit rate — let them drag it and watch latency change. Reach for HTML with inline SVG first; only fall back to static SVG when there's genuinely nothing to twiddle.\n\n**When NOT to use**: The user is asking for a *reference*, not an *intuition*. \"What are the components of a transformer\" wants labelled boxes — that's a structural diagram. \"Walk me through our CI pipeline\" wants sequential steps — that's a flowchart. Also skip this when the metaphor would be arbitrary rather than revealing: drawing \"the cloud\" as a cloud shape or \"microservices\" as little houses doesn't teach anything about how they work. If the drawing doesn't make the *mechanism* clearer, don't draw it.\n\n**Fidelity ceiling**: These are schematics, not illustrations. Every shape should read at a glance. If a `<path>` needs more than ~6 segments to draw, simplify it. A tank is a rounded rect, not a Bézier portrait of a tank. A flame is three triangles, not a fire. Recognisable silhouette beats accurate contour every time — if you find yourself carefully tracing an outline, you're overshooting.\n\n**Core principle**: Draw the mechanism, not a diagram *about* the mechanism. Spatial arrangement carries the meaning; labels annotate. A good illustrative diagram works with the labels removed.\n\n**What changes from flowchart/structural rules**:\n\n- **Shapes are freeform.** Use `<path>`, `<ellipse>`, `<circle>`, `<polygon>`, and curved lines to represent real forms. A water tank is a tall rect with rounded bottom. A heart valve is a pair of curved paths. A circuit trace is a thin polyline. You are not limited to rounded rects.\n- **Layout follows the subject's geometry**, not a grid. If the thing is tall and narrow (a water heater, a thermometer), the diagram is tall and narrow. If it's wide and flat (a PCB, a geological cross-section), the diagram is wide. Let the subject dictate proportions within the 680px viewBox width.\n- **Color encodes intensity**, not category. For physical subjects: warm ramps (amber, coral, red) = heat/energy/pressure, cool ramps (blue, teal) = cold/calm, gray = inert structure. For abstract subjects: warm = active/high-weight/attended-to, cool or gray = dormant/low-weight/ignored. A user should be able to glance at the diagram and see *where the action is* without reading a single label.\n- **Layering and overlap are encouraged — for shapes.** Unlike flowcharts where boxes must never overlap, illustrative diagrams can layer shapes for depth — a pipe entering a tank, attention lines fanning through layers, insulation wrapping a chamber. Use z-ordering (later in source = on top) deliberately.\n- **Text is the exception — never let a stroke cross it.** The overlap permission is for shapes only. Every label needs 8px of clear air between its baseline/cap-height and the nearest stroke. Don't solve this with a background rect — solve it by *placing the text somewhere else*. Labels go in the quiet regions: above the drawing, below it, in the margin with a leader line, or in the gap between two fans of lines. If there is no quiet region, the drawing is too dense — remove something or split into two diagrams.\n- **Small shape-based indicators are allowed** when they communicate physical state. Triangles for flames. Circles for bubbles or particles. Wavy lines for steam or heat radiation. Parallel lines for vibration. These aren't decoration — they tell the user what's happening physically. Keep them simple: basic SVG primitives, not detailed illustrations.\n- **One gradient per diagram is permitted** — the only exception to the global no-gradients rule — and only to show a *continuous* physical property across a region (temperature stratification in a tank, pressure drop along a pipe, concentration in a solution). It must be a single `<linearGradient>` between exactly two stops from the same colour ramp. No radial gradients, no multi-stop fades, no gradient-as-aesthetic. If two stacked flat-fill rects communicate the same thing, do that instead.\n- **Animation is permitted for interactive HTML versions.** Use CSS `@keyframes` animating only `transform` and `opacity`. Keep loops under ~2s, and wrap every animation in `@media (prefers-reduced-motion: no-preference)` so it's opt-out by default. Animations should show how the system *behaves* — convection current, rotation, flow — not just move for the sake of moving. No physics engines or heavy libraries.\n\nAll core rules still apply (viewBox 680px, dark mode mandatory, 14/12px text, pre-built classes, arrow marker, clickable nodes).\n\n**Label placement**:\n- Place labels *outside* the drawn object when possible, with a thin leader line (0.5px dashed, `var(--t)` stroke) pointing to the relevant part. This keeps the illustration uncluttered.\n- For large internal zones (like temperature regions in a tank), labels can sit inside if there's ample clear space — minimum 20px from any edge.\n- External labels sit in the margin area or above/below the object. **Pick one side for labels and put them all there** — at 680px wide you don't have room for a drawing *and* label columns on both sides. Reserve at least 140px of horizontal margin on the label side. Labels on the left are the ones that clip: `text-anchor=\"end\"` extends leftward from x, and with multi-line callouts it's very easy to blow past x=0 without noticing. Default to right-side labels with `text-anchor=\"start\"` unless the subject's geometry forces otherwise. Use `class=\"ts\"` (12px) for callouts, `class=\"th\"` (14px medium) for major component names.\n\n**Composition approach**:\n1. Start with the main object's silhouette — the largest shape, centered in the viewBox.\n2. Add internal structure: chambers, pipes, membranes, mechanical parts.\n3. Add external connections: pipes entering/exiting, arrows showing flow direction, labels for inputs and outputs.\n4. Add state indicators last: color fills showing temperature/pressure/concentration, small animated elements showing movement or energy.\n5. Leave generous whitespace around the object for labels — don't crowd annotations against the viewBox edges.\n\n**Static vs interactive**: Static cutaways and cross-sections work best as pure SVG. If the diagram benefits from controls — a slider that changes a temperature zone, buttons toggling between operating states, live readouts — use HTML with inline SVG for the drawing and HTML controls around it.\n\n**Illustrative diagram example** — interactive water heater cross-section with vivid physical-realism colors, animated convection currents, and controls. Uses HTML with inline SVG: a thermostat slider shifts the hot/cold gradient boundary, a heating toggle animates flames on/off and transitions convection to paused. viewBox is 680x560; tank occupies x=180..440, leaving 140px+ of right margin for labels. Smooth convection paths use `stroke-dasharray:5 5` at ~1.6s for a gentle flow feel. A warm-glow overlay on the hot zone pulses subtly when heating is on. Flame shapes use warm gradient fills and clean opacity transitions. Labels sit along the right margin with leader lines.\n```html\n<style>\n  @keyframes conv { to { stroke-dashoffset: -20; } }\n  @keyframes flicker { 0%,100%{opacity:1} 50%{opacity:.82} }\n  @keyframes glow { 0%,100%{opacity:.3} 50%{opacity:.6} }\n  .conv { stroke-dasharray:5 5; animation: conv var(--dur,1.6s) linear infinite; transition: opacity .5s; }\n  .conv.off { opacity:0; animation-play-state:paused; }\n  #flames path { transition: opacity .5s; }\n  #flames.off path { opacity:0; animation:none; }\n  #flames path:nth-child(odd)  { animation: flicker .6s ease-in-out infinite; }\n  #flames path:nth-child(even) { animation: flicker .8s ease-in-out infinite .15s; }\n  #warm-glow { animation: glow 3s ease-in-out infinite; transition: opacity .5s; }\n  #warm-glow.off { opacity:0; animation:none; }\n  .toggle-track { position:relative;width:32px;height:18px;background:var(--color-border-secondary);border-radius:9px;transition:background .2s;display:inline-block; }\n  .toggle-track:has(input:checked) { background:var(--color-text-info); }\n  #heat-toggle:checked + span { transform:translateX(14px); }\n</style>\n<svg width=\"100%\" viewBox=\"0 0 680 560\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker>\n    <linearGradient id=\"tg\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop id=\"gh\" offset=\"40%\" stop-color=\"#E8593C\" stop-opacity=\"0.45\"/>\n      <stop id=\"gc\" offset=\"40%\" stop-color=\"#3B8BD4\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n    <linearGradient id=\"fg1\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#E85D24\"/><stop offset=\"60%\" stop-color=\"#F2A623\"/><stop offset=\"100%\" stop-color=\"#FCDE5A\"/></linearGradient>\n    <linearGradient id=\"fg2\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#D14520\"/><stop offset=\"50%\" stop-color=\"#EF8B2C\"/><stop offset=\"100%\" stop-color=\"#F9CB42\"/></linearGradient>\n    <linearGradient id=\"pipe-h\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#D05538\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#D05538\" stop-opacity=\".08\"/></linearGradient>\n    <linearGradient id=\"pipe-c\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#3B8BD4\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#3B8BD4\" stop-opacity=\".08\"/></linearGradient>\n    <clipPath id=\"tc\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\"/></clipPath>\n  </defs>\n  <!-- Tank fill -->\n  <g clip-path=\"url(#tc)\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" fill=\"url(#tg)\"/></g>\n  <!-- Warm glow overlay (pulses when heating) -->\n  <g clip-path=\"url(#tc)\"><rect id=\"warm-glow\" x=\"180\" y=\"55\" width=\"260\" height=\"160\" fill=\"#E8593C\" opacity=\".3\"/></g>\n  <!-- Tank shell (double stroke for solidity) -->\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"2.5\" opacity=\".25\"/>\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"1\"/>\n  <!-- Hot pipe out (top right) -->\n  <rect x=\"370\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-h)\"/>\n  <path d=\"M378 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <!-- Cold pipe in + dip tube (top left) -->\n  <rect x=\"234\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-c)\"/>\n  <path d=\"M242 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <path d=\"M242 55V395\" stroke=\"var(--t)\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\".5\"/>\n  <!-- Convection currents (curved paths at different speeds) -->\n  <path class=\"conv\" style=\"--dur:1.6s\" fill=\"none\" stroke=\"#D05538\" stroke-width=\"1\" opacity=\".5\" d=\"M350 380C355 320,365 240,358 140Q355 110,340 100\"/>\n  <path class=\"conv\" style=\"--dur:2.1s\" fill=\"none\" stroke=\"#C04828\" stroke-width=\".8\" opacity=\".35\" d=\"M300 390C308 340,320 260,315 170Q312 130,298 115\"/>\n  <path class=\"conv\" style=\"--dur:2.6s\" fill=\"none\" stroke=\"#B05535\" stroke-width=\".7\" opacity=\".3\" d=\"M380 370C382 310,388 230,382 150Q378 120,365 110\"/>\n  <!-- Burner bar -->\n  <rect x=\"188\" y=\"454\" width=\"244\" height=\"5\" rx=\"2\" fill=\"var(--t)\" opacity=\".6\"/>\n  <rect x=\"220\" y=\"462\" width=\"180\" height=\"6\" rx=\"3\" fill=\"var(--t)\" opacity=\".3\"/>\n  <!-- Flames (gradient-filled organic shapes) -->\n  <g id=\"flames\">\n    <path d=\"M240,454Q248,430 252,438Q256,424 260,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M278,454Q285,426 290,434Q295,418 300,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M320,454Q328,428 333,436Q338,420 342,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M360,454Q367,430 371,438Q375,422 380,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M398,454Q404,434 408,440Q412,428 416,454Z\" fill=\"url(#fg1)\"/>\n  </g>\n  <!-- Labels (right margin) -->\n  <g class=\"node\" onclick=\"sendPrompt('How does hot water exit the tank?')\">\n    <line class=\"leader\" x1=\"386\" y1=\"34\" x2=\"468\" y2=\"70\"/><circle cx=\"386\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"74\">Hot water outlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the cold water inlet work?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"34\" x2=\"468\" y2=\"140\"/><circle cx=\"250\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"144\">Cold water inlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the dip tube do?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"260\" x2=\"468\" y2=\"220\"/><circle cx=\"250\" cy=\"260\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"224\">Dip tube</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the thermostat control?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"250\" x2=\"468\" y2=\"300\"/><circle cx=\"440\" cy=\"250\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"304\">Thermostat</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What material is the tank made of?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"380\" x2=\"468\" y2=\"380\"/><circle cx=\"440\" cy=\"380\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"384\">Tank wall</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the gas burner heat water?')\">\n    <line class=\"leader\" x1=\"432\" y1=\"454\" x2=\"468\" y2=\"454\"/><circle cx=\"432\" cy=\"454\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"458\">Heating element</text></g>\n</svg>\n<div style=\"display:flex;align-items:center;gap:16px;margin:12px 0 0;font-size:13px;color:var(--color-text-secondary)\">\n  <label style=\"display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none\">\n    <span class=\"toggle-track\">\n      <input type=\"checkbox\" id=\"heat-toggle\" checked onchange=\"toggleHeat(this.checked)\" style=\"position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;margin:0\">\n      <span style=\"position:absolute;top:2px;left:2px;width:14px;height:14px;background:#fff;border-radius:50%;transition:transform .2s;pointer-events:none\"></span>\n    </span>\n    Heating\n  </label>\n  <span>Thermostat</span>\n  <input type=\"range\" id=\"temp-slider\" min=\"10\" max=\"90\" value=\"40\" style=\"flex:1\" oninput=\"setTemp(this.value)\">\n  <span id=\"temp-label\" style=\"min-width:36px;text-align:right\">40%</span>\n</div>\n<script>\nfunction setTemp(v) {\n  document.getElementById('gh').setAttribute('offset', v+'%');\n  document.getElementById('gc').setAttribute('offset', v+'%');\n  document.getElementById('temp-label').textContent = v+'%';\n}\nfunction toggleHeat(on) {\n  document.getElementById('flames').classList.toggle('off', !on);\n  document.getElementById('warm-glow').classList.toggle('off', !on);\n  document.querySelectorAll('.conv').forEach(p => p.classList.toggle('off', !on));\n}\n</script>\n```\n\n**Illustrative example — abstract subject** (attention in a transformer). Same rules, no physical object. A row of tokens at the bottom, one query token highlighted, weight-scaled lines fanning to every other token. Caption sits below the fan — clear of every stroke — not inside it.\n```svg\n<rect class=\"c-purple\" x=\"60\" y=\"40\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"80\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"120\" width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<text class=\"ts\" x=\"72\" y=\"57\" >Layer 3</text>\n<text class=\"ts\" x=\"72\" y=\"97\" >Layer 2</text>\n<text class=\"ts\" x=\"72\" y=\"137\">Layer 1</text>\n\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"116\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.25\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"228\" y2=\"146\" stroke-width=\"1.5\" opacity=\"0.4\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"340\" y2=\"146\" stroke-width=\"4\"   opacity=\"1.0\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"452\" y2=\"146\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"564\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.2\"/>\n\n<g class=\"node\" onclick=\"sendPrompt('What do the attention weights mean?')\">\n  <rect class=\"c-gray\"  x=\"80\"  y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"192\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-amber\" x=\"304\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"1\"/>\n  <rect class=\"c-gray\"  x=\"416\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"528\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <text class=\"ts\" x=\"116\" y=\"252\" text-anchor=\"middle\">the</text>\n  <text class=\"ts\" x=\"228\" y=\"252\" text-anchor=\"middle\">cat</text>\n  <text class=\"th\" x=\"340\" y=\"252\" text-anchor=\"middle\">sat</text>\n  <text class=\"ts\" x=\"452\" y=\"252\" text-anchor=\"middle\">on</text>\n  <text class=\"ts\" x=\"564\" y=\"252\" text-anchor=\"middle\">the</text>\n</g>\n\n<text class=\"ts\" x=\"340\" y=\"300\" text-anchor=\"middle\">Line thickness = attention weight from \"sat\" to each token</text>\n```\n\nNote what's *not* here: no boxes labelled \"multi-head attention\", no arrows labelled \"Q/K/V\". Those belong in the structural diagram. This one is about the *feeling* of attention — one token looking at every other token with varying intensity.\n\nThese are starting points, not ceilings. For the water heater: add a thermostat slider, animate the convection current, toggle heating vs standby. For the attention diagram: let the user click any token to become the query, scrub through layers, animate the weights settling. The goal is always to *show* how the thing works, not just *label* it.\n",
      "uuid": "7d58a0a6-baa6-4bbc-977d-e9a26bbf9200"
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

Now let me create a clear explanation with a visualization of Doppler broadening in nuclear reactors.

</details>

Your intuition for D was reasonable — when kinetic energy increases, it seems like "things shift to higher energies." But this conflates two distinct things: the *energy of the quantum state* vs. the *distribution of collision energies*. Here's the key distinction.

**Why D is wrong**

The resonance peaks of ²³⁸U are quantum mechanical properties — they arise from discrete nuclear energy levels (compound nucleus states). These levels are fixed by nuclear structure, not by temperature. Doppler broadening does not shift them. What changes is the *relative kinetic energy* between a neutron and a moving nucleus at the moment of collision. Because nuclei are vibrating thermally in all directions, some collisions happen with slightly higher effective energy, some slightly lower. The result is a *smearing* of the collision energy distribution around the resonance, not a displacement of the resonance itself.

**Why B is correct**

The mechanism: thermal motion broadens the effective cross-section peak (the Doppler-broadened Breit-Wigner profile). The peak becomes wider and shorter, but area is conserved — this follows from the normalization of the cross-section profile. The integral over energy stays constant because the same total number of resonance interactions occur; they're just redistributed across a wider energy band.

**Why this matters for reactor safety (the practical punchline)**

This is the Doppler coefficient — one of the most important prompt negative feedback mechanisms in reactors. When fuel temperature rises:

1. ²³⁸U resonance peaks broaden
2. Neutrons that previously "slipped past" the resonance (because they had energies just off-peak) are now more likely to be captured
3. More capture → fewer neutrons available for fission → reactor power drops

This is an *inherent* safety feature — no external control system needed.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T13:05:29.373830Z",
  "stop_timestamp": "2026-04-11T13:05:50.300152Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_017giYZquk8fQJyYdZ7Gk3Ce",
  "name": "visualize:show_widget",
  "input": {
    "title": "doppler_broadening_238U",
    "loading_messages": [
      "Drawing the resonance peaks",
      "Adding temperature effects"
    ],
    "widget_code": "\n<svg width=\"100%\" viewBox=\"0 0 680 420\" role=\"img\">\n  <title>Doppler broadening of 238U resonance peaks</title>\n  <desc>Two panels comparing a cold and hot reactor fuel cross-section peak. Cold: narrow tall peak. Hot: broader, shorter peak with same area. Annotations explain self-shielding and the Doppler feedback mechanism.</desc>\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </marker>\n  </defs>\n\n  <!-- ── Left panel: cold fuel ── -->\n  <text class=\"th\" x=\"170\" y=\"30\" text-anchor=\"middle\">Cold fuel</text>\n  <text class=\"ts\" x=\"170\" y=\"48\" text-anchor=\"middle\">low temperature</text>\n\n  <!-- axes -->\n  <line x1=\"44\" y1=\"340\" x2=\"310\" y2=\"340\" stroke=\"var(--s)\" stroke-width=\"1\" marker-end=\"url(#arrow)\"/>\n  <line x1=\"60\" y1=\"355\" x2=\"60\" y2=\"60\" stroke=\"var(--s)\" stroke-width=\"1\" marker-end=\"url(#arrow)\"/>\n  <text class=\"ts\" x=\"186\" y=\"370\" text-anchor=\"middle\">Neutron energy</text>\n  <text class=\"ts\" x=\"28\" y=\"205\" text-anchor=\"middle\" transform=\"rotate(-90,28,205)\">σ (cross-section)</text>\n\n  <!-- narrow tall Breit-Wigner peak (cold) -->\n  <!-- baseline at y=340, peak at y=80, center at x=170 -->\n  <path d=\"M60,340 Q80,340 100,340 Q120,340 135,320 Q148,290 155,240 Q162,180 165,140 Q168,100 170,80 Q172,100 175,140 Q178,180 185,240 Q192,290 205,320 Q220,340 235,340 Q260,340 290,340\"\n        fill=\"none\" stroke=\"#185FA5\" stroke-width=\"2.5\"/>\n  <!-- fill area under cold peak -->\n  <path d=\"M60,340 Q80,340 100,340 Q120,340 135,320 Q148,290 155,240 Q162,180 165,140 Q168,100 170,80 Q172,100 175,140 Q178,180 185,240 Q192,290 205,320 Q220,340 235,340 Q260,340 290,340 Z\"\n        fill=\"#185FA5\" fill-opacity=\"0.12\"/>\n\n  <!-- peak height annotation -->\n  <line x1=\"170\" y1=\"80\" x2=\"170\" y2=\"340\" stroke=\"#185FA5\" stroke-width=\"0.8\" stroke-dasharray=\"4 3\" opacity=\"0.5\"/>\n  <text class=\"ts\" x=\"200\" y=\"78\" fill=\"#185FA5\">σ_max (high)</text>\n\n  <!-- width annotation -->\n  <line x1=\"155\" y1=\"210\" x2=\"185\" y2=\"210\" stroke=\"#185FA5\" stroke-width=\"1\" marker-end=\"url(#arrow)\" marker-start=\"url(#arrow)\"/>\n  <text class=\"ts\" x=\"190\" y=\"214\" fill=\"#185FA5\">Γ narrow</text>\n\n  <!-- ── Right panel: hot fuel ── -->\n  <text class=\"th\" x=\"510\" y=\"30\" text-anchor=\"middle\">Hot fuel</text>\n  <text class=\"ts\" x=\"510\" y=\"48\" text-anchor=\"middle\">high temperature</text>\n\n  <!-- axes -->\n  <line x1=\"384\" y1=\"340\" x2=\"650\" y2=\"340\" stroke=\"var(--s)\" stroke-width=\"1\" marker-end=\"url(#arrow)\"/>\n  <line x1=\"400\" y1=\"355\" x2=\"400\" y2=\"60\" stroke=\"var(--s)\" stroke-width=\"1\" marker-end=\"url(#arrow)\"/>\n  <text class=\"ts\" x=\"526\" y=\"370\" text-anchor=\"middle\">Neutron energy</text>\n  <text class=\"ts\" x=\"368\" y=\"205\" text-anchor=\"middle\" transform=\"rotate(-90,368,205)\">σ (cross-section)</text>\n\n  <!-- broad short Breit-Wigner peak (hot) — same area, wider, lower -->\n  <path d=\"M400,340 Q415,340 430,340 Q445,339 455,334 Q465,325 472,308 Q480,286 487,258 Q494,228 500,206 Q506,190 510,185 Q514,190 520,206 Q526,228 533,258 Q540,286 548,308 Q555,325 565,334 Q575,339 585,340 Q610,340 630,340\"\n        fill=\"none\" stroke=\"#A32D2D\" stroke-width=\"2.5\"/>\n  <!-- fill area under hot peak -->\n  <path d=\"M400,340 Q415,340 430,340 Q445,339 455,334 Q465,325 472,308 Q480,286 487,258 Q494,228 500,206 Q506,190 510,185 Q514,190 520,206 Q526,228 533,258 Q540,286 548,308 Q555,325 565,334 Q575,339 585,340 Q610,340 630,340 Z\"\n        fill=\"#A32D2D\" fill-opacity=\"0.12\"/>\n\n  <!-- peak height annotation -->\n  <line x1=\"510\" y1=\"185\" x2=\"510\" y2=\"340\" stroke=\"#A32D2D\" stroke-width=\"0.8\" stroke-dasharray=\"4 3\" opacity=\"0.5\"/>\n  <text class=\"ts\" x=\"540\" y=\"183\" fill=\"#A32D2D\">σ_max (lower)</text>\n\n  <!-- width annotation -->\n  <line x1=\"472\" y1=\"265\" x2=\"548\" y2=\"265\" stroke=\"#A32D2D\" stroke-width=\"1\" marker-end=\"url(#arrow)\" marker-start=\"url(#arrow)\"/>\n  <text class=\"ts\" x=\"475\" y=\"256\" fill=\"#A32D2D\">Γ broader</text>\n\n  <!-- ── \"Area conserved\" bridge label ── -->\n  <line x1=\"305\" y1=\"200\" x2=\"378\" y2=\"200\" stroke=\"var(--t)\" stroke-width=\"0.8\" stroke-dasharray=\"3 3\" opacity=\"0.5\"/>\n  <text class=\"ts\" x=\"341\" y=\"194\" text-anchor=\"middle\">same area</text>\n  <text class=\"ts\" x=\"341\" y=\"210\" text-anchor=\"middle\">≈ conserved</text>\n\n  <!-- ── Bottom note: Doppler feedback ── -->\n  <rect x=\"44\" y=\"388\" width=\"612\" height=\"22\" rx=\"4\" fill=\"var(--bg2)\" opacity=\"0.5\"/>\n  <text class=\"ts\" x=\"350\" y=\"403\" text-anchor=\"middle\">Broader peak → more neutrons captured → fewer available for fission → self-limiting power increase (Doppler feedback)</text>\n</svg>\n"
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
  "tool_use_id": "toolu_017giYZquk8fQJyYdZ7Gk3Ce",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "d263463d-16ef-4056-bfc9-fb0aa9628f31"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "6266df98-545b-431c-82fa-93f2c7c9bfba"
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

The metaphor break worth noting: the area-conservation is only approximate in practice. The integrated cross-section is strictly conserved for an isolated Lorentzian line shape (Breit-Wigner), but real resonances can overlap at higher temperatures, causing slight departures. For the purposes of reactor physics, the approximation holds well.

Want to go deeper on the Breit-Wigner formula itself, or how this Doppler coefficient is quantified in reactor design?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7ca5-59cc-7dd3-8a3d-d2c964a63066",
  "updated_at": "2026-04-11T13:05:55.501656Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7ca5-59cc-75be-b2f9-2e23549495a6"
}
```

</details>

### 3. human — 2026-04-11T13:17:23.299412Z

1. How do these resonance peaks come
2. How to connect between temparture increasing and resonance absorption cross-section peaks in the problem?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7cb0-96bd-7cb1-bfb9-8d3ad71350b3",
  "updated_at": "2026-04-11T13:17:23.299412Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7ca5-59cc-7dd3-8a3d-d2c964a63066"
}
```

</details>

### 4. assistant — 2026-04-11T13:18:54.836355Z

 

<details>
<summary>Thinking (verbatim)</summary>

Two questions: (1) origin of resonance peaks in nuclear cross-sections, and (2) the physical chain connecting temperature → Doppler broadening → cross-section peak shape change. Let me read the feynman-technique skill since these are conceptual explanations.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T13:17:27.222548Z",
  "stop_timestamp": "2026-04-11T13:17:27.748901Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_0188mh5K4oWrFwyjcPry3EU4",
  "name": "view",
  "input": {
    "description": "Load feynman-technique skill",
    "path": "/mnt/skills/user/feynman-technique/SKILL.md"
  },
  "message": "Load feynman-technique skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Load feynman-technique skill"
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
  "tool_use_id": "toolu_0188mh5K4oWrFwyjcPry3EU4",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: feynman-technique\n     3\tdescription: \"Explain concepts using the Feynman Technique, treating the user as a 12-year-old non-native English speaker, with optional inline visual metaphor illustrations via concept-visualizer. Use this skill whenever the user says \\\"Feynman\\\", \\\"explain like I'm 12\\\", \\\"ELI12\\\", \\\"simple explanation\\\", \\\"teach me like a kid\\\", \\\"feynman-style\\\", \\\"explain it simply\\\", or any phrasing that requests a beginner-friendly, jargon-free breakdown of a concept. Works for any subject — physics, math, CS, machine learning, or everyday topics. Do NOT use for tasks like writing code, generating files, or editing documents.\"\n     4\t---\n     5\t\n     6\t# Feynman Technique Explainer\n     7\t\n     8\tExplain concepts to a smart, curious 12-year-old who speaks English as a second language. The goal is real understanding, not simplified words.\n     9\t\n    10\t## Explanation flow\n    11\t\n    12\tFor every explanation, follow these six steps in order:\n    13\t\n    14\t1. **Name it plainly.** One sentence saying what the thing *is* or *does*. No jargon yet.\n    15\t2. **One analogy.** Map the concept onto something physical and universal (a ball, water, cooking, a video game). Pick the best analogy and commit — don't list alternatives. If it breaks down somewhere, say so.\n    16\t3. **Show it.** Use the `concept-visualizer` skill to render the analogy as an inline visual. Pass the analogy object you chose in step 2 so the picture and the prose share the same metaphor. The visual appears here — between the analogy introduction and the detailed walkthrough — so the learner sees the whole shape before the parts. If the concept is too simple for a multi-panel visual (e.g., a single definition), skip this step.\n    17\t4. **Step-by-step logic.** Connect the analogy back to the real concept. One idea per sentence. Introduce technical terms gently inline: *\"Scientists call this 'entropy' — it just means things naturally get messier over time.\"*\n    18\t5. **Flag the tricky part.** Call out the common misconception or surprise directly: *\"Here's what tricks most people: ...\"*\n    19\t6. **Ask them to explain it back.** Low-pressure, not a test. E.g.: *\"If your friend asked you what [concept] is, what would you say?\"* If their answer has gaps, re-explain only that part. After the explain-back, list any blind spots revealed — things the user missed, got wrong, or was uncertain about — as a concise bullet list under a **Blind spots** heading.\n    20\t\n    21\tNever skip step 6 — it's the core of the technique.\n    22\t\n    23\t## Language rules\n    24\t\n    25\t- No idioms or slang (\"piece of cake\", \"ball is in your court\").\n    26\t- Expand acronyms on first use: \"CPU (the 'brain' of a computer)\".\n    27\t- Address the reader as \"you\" / \"we\".\n    28\t- Describe math in words first.\n    29\t- Don't open with a formal definition or Wikipedia-style paragraph.\n    30\t\n    31\t## Tone\n    32\t\n    33\tWarm and a little playful — like a favorite teacher. Never condescending: the *topic* is hard, not the person.\n    34\t\n    35\t## Follow-ups\n    36\t\n    37\tExtend the existing analogy if possible. Otherwise build a new small one. Always end with a gentle check: *\"Does that make sense?\"*\n    38\t\n    39\t## Broad topics\n    40\t\n    41\tBreak into small pieces. Teach one, check understanding, then move to the next. Stairs, not elevators.",
      "uuid": "25d65c55-0f2f-42d1-bf7c-b706354fcd79"
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

Good. Now let me address both questions clearly. I'll use the Feynman approach but these are physics grad-level questions, so I'll adapt the depth. Let me plan:

**Q1: How do resonance peaks arise?**
- Compound nucleus model: neutron + ²³⁸U → excited ²³⁹U* 
- Discrete quantum energy levels of the compound nucleus
- When neutron energy matches exactly the gap needed to excite a compound nuclear state → resonance → huge cross-section spike
- Breit-Wigner formula

**Q2: Temperature → resonance peak shape?**


At finite temperature, the ²³⁸U nuclei are in thermal motion with a Maxwell-Boltzmann velocity distribution, so neutrons encounter nuclei moving toward or away from them. This Doppler shift spreads the effective neutron energy across a range, which convolves the sharp Breit-Wigner resonance with a Gaussian distribution—broadening the peak and reducing its height. Now I'll create visuals to illustrate both effects.

</details>

Two separate mechanisms — let me take them one at a time.

---

## 1. Where resonance peaks come from

Think of the nucleus as a building with specific floors.

When a neutron flies into ²³⁸U, they merge and form a new nucleus: ²³⁹U\*. This compound nucleus is in an *excited state* — it has absorbed extra energy. Now, a quantum nucleus only exists stably at specific discrete energy levels (its "floors"). If the neutron arrives with just the right kinetic energy to bring the compound nucleus to exactly one of those floors, the neutron is captured with enormous probability. That exact energy is the **resonance**.

At energies between floors, the neutron mostly passes through. At a resonance energy, it gets almost perfectly absorbed — the cross-section spikes.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T13:17:42.625012Z",
  "stop_timestamp": "2026-04-11T13:18:03.788067Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_014WSVZSGio2n8TbHBaMVNjM",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": [
      "Building the compound nucleus floors",
      "Placing the neutron on the elevator"
    ],
    "title": "resonance_peak_origin",
    "widget_code": "\n<svg width=\"100%\" viewBox=\"0 0 680 400\" role=\"img\">\n  <title>Origin of resonance peaks: compound nucleus energy levels</title>\n  <desc>Left side shows a neutron approaching U-238 at three different energies. Right side shows the corresponding cross-section response — only the resonance energy gives a spike.</desc>\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </marker>\n  </defs>\n\n  <!-- ===== LEFT: energy level diagram ===== -->\n  <!-- Ground state box -->\n  <g class=\"c-blue\">\n    <rect x=\"40\" y=\"310\" width=\"120\" height=\"40\" rx=\"6\" stroke-width=\"0.5\"/>\n    <text class=\"th\" x=\"100\" y=\"330\" text-anchor=\"middle\" dominant-baseline=\"central\">²³⁸U ground</text>\n  </g>\n\n  <!-- Energy levels of compound nucleus ²³⁹U* -->\n  <!-- Level 1 (low) -->\n  <line x1=\"200\" y1=\"295\" x2=\"310\" y2=\"295\" stroke=\"var(--s)\" stroke-width=\"1.5\"/>\n  <text class=\"ts\" x=\"318\" y=\"299\">Level 1  (E₁)</text>\n\n  <!-- Level 2 (mid — the resonance we match) -->\n  <line x1=\"200\" y1=\"215\" x2=\"310\" y2=\"215\" stroke=\"#185FA5\" stroke-width=\"2\"/>\n  <text class=\"ts\" x=\"318\" y=\"219\" fill=\"#185FA5\">Level 2  (E₂) ← resonance</text>\n\n  <!-- Level 3 (high) -->\n  <line x1=\"200\" y1=\"135\" x2=\"310\" y2=\"135\" stroke=\"var(--s)\" stroke-width=\"1.5\"/>\n  <text class=\"ts\" x=\"318\" y=\"139\">Level 3  (E₃)</text>\n\n  <!-- Compound nucleus label -->\n  <text class=\"ts\" x=\"255\" y=\"60\" text-anchor=\"middle\">²³⁹U* compound nucleus</text>\n  <text class=\"ts\" x=\"255\" y=\"76\" text-anchor=\"middle\">energy levels</text>\n  <rect x=\"196\" y=\"88\" width=\"118\" height=\"270\" rx=\"4\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"0.8\" stroke-dasharray=\"4 3\" opacity=\"0.4\"/>\n\n  <!-- Neutron arrows at 3 energies -->\n  <!-- Too low -->\n  <circle cx=\"50\" cy=\"295\" r=\"7\" fill=\"var(--t)\" opacity=\"0.3\"/>\n  <text class=\"ts\" x=\"50\" y=\"275\" text-anchor=\"middle\" opacity=\"0.5\">E &lt; E₁</text>\n  <line x1=\"60\" y1=\"295\" x2=\"188\" y2=\"295\" stroke=\"var(--t)\" stroke-width=\"1\" stroke-dasharray=\"4 3\" opacity=\"0.35\" marker-end=\"url(#arrow)\"/>\n  <text class=\"ts\" x=\"120\" y=\"315\" text-anchor=\"middle\" opacity=\"0.4\">misses</text>\n\n  <!-- Resonance match -->\n  <circle cx=\"50\" cy=\"215\" r=\"8\" fill=\"#185FA5\"/>\n  <text class=\"ts\" x=\"50\" y=\"195\" text-anchor=\"middle\" fill=\"#185FA5\">E = E₂</text>\n  <line x1=\"60\" y1=\"215\" x2=\"188\" y2=\"215\" stroke=\"#185FA5\" stroke-width=\"2\" marker-end=\"url(#arrow)\"/>\n  <text class=\"ts\" x=\"120\" y=\"236\" text-anchor=\"middle\" fill=\"#185FA5\">captured!</text>\n\n  <!-- Too high -->\n  <circle cx=\"50\" cy=\"135\" r=\"7\" fill=\"var(--t)\" opacity=\"0.3\"/>\n  <text class=\"ts\" x=\"50\" y=\"115\" text-anchor=\"middle\" opacity=\"0.5\">E &gt; E₃</text>\n  <line x1=\"60\" y1=\"135\" x2=\"188\" y2=\"135\" stroke=\"var(--t)\" stroke-width=\"1\" stroke-dasharray=\"4 3\" opacity=\"0.35\" marker-end=\"url(#arrow)\"/>\n  <text class=\"ts\" x=\"120\" y=\"155\" text-anchor=\"middle\" opacity=\"0.4\">passes through</text>\n\n  <!-- ===== RIGHT: cross-section curve ===== -->\n  <!-- axes -->\n  <line x1=\"500\" y1=\"340\" x2=\"660\" y2=\"340\" stroke=\"var(--s)\" stroke-width=\"1\" marker-end=\"url(#arrow)\"/>\n  <line x1=\"510\" y1=\"355\" x2=\"510\" y2=\"60\" stroke=\"var(--s)\" stroke-width=\"1\" marker-end=\"url(#arrow)\"/>\n  <text class=\"ts\" x=\"590\" y=\"370\" text-anchor=\"middle\">Neutron energy</text>\n  <text class=\"ts\" x=\"488\" y=\"200\" text-anchor=\"middle\" transform=\"rotate(-90,488,200)\">σ</text>\n\n  <!-- cross section curve with two small bumps and one big spike at resonance -->\n  <path d=\"M510,335 L520,334 L525,332 L528,325 L530,310 L531,290 L532,270 L533,240 L534,200 L535,175 L536,160 L537,230 L538,290 L540,320 L545,332 L555,334 L570,335 L580,334 L583,332 L585,325 L587,310 L588,290 L589,270 L590,240 L591,210 L592,195 L593,220 L594,265 L596,305 L600,328 L610,333 L630,335 L650,335\"\n        fill=\"none\" stroke=\"#185FA5\" stroke-width=\"2\"/>\n  <!-- shade under the big spike -->\n  <path d=\"M530,340 L531,290 L532,270 L533,240 L534,200 L535,175 L536,160 L537,230 L538,290 L540,320 L545,340 Z\"\n        fill=\"#185FA5\" fill-opacity=\"0.2\"/>\n\n  <!-- energy tick marks -->\n  <line x1=\"532\" y1=\"338\" x2=\"532\" y2=\"342\" stroke=\"var(--s)\" stroke-width=\"1\"/>\n  <text class=\"ts\" x=\"532\" y=\"356\" text-anchor=\"middle\">E₂</text>\n  <line x1=\"591\" y1=\"338\" x2=\"591\" y2=\"342\" stroke=\"var(--s)\" stroke-width=\"1\"/>\n  <text class=\"ts\" x=\"591\" y=\"356\" text-anchor=\"middle\">E₃</text>\n\n  <!-- label on spike -->\n  <text class=\"ts\" x=\"555\" y=\"155\" fill=\"#185FA5\">resonance peak</text>\n  <line x1=\"548\" y1=\"160\" x2=\"540\" y2=\"175\" stroke=\"#185FA5\" stroke-width=\"0.8\" marker-end=\"url(#arrow)\"/>\n\n  <!-- divider -->\n  <line x1=\"460\" y1=\"40\" x2=\"460\" y2=\"390\" stroke=\"var(--t)\" stroke-width=\"0.5\" stroke-dasharray=\"4 3\" opacity=\"0.3\"/>\n</svg>\n"
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
  "tool_use_id": "toolu_014WSVZSGio2n8TbHBaMVNjM",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "5b6f1b13-9136-42e9-b08c-069c504bb871"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "16665ad7-f898-47e7-99fd-d562f2f85621"
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

The shape of each peak is described by the **Breit-Wigner formula**:

$$\sigma(E) \propto \frac{\Gamma^2/4}{(E - E_0)^2 + \Gamma^2/4}$$

where $E_0$ is the resonance energy and $\Gamma$ is the natural width (determined by the lifetime of that compound nuclear state via the uncertainty principle: $\Gamma \cdot \tau \sim \hbar$). For ²³⁸U, these resonances are densely packed in the keV range — hundreds of them.

---

## 2. The chain from temperature → peak shape

Here is the exact causal chain, step by step.

**Step 1 — nuclei vibrate thermally.** At temperature $T$, ²³⁸U nuclei in the fuel crystal lattice have random thermal velocities. The distribution of speeds follows a Maxwell-Boltzmann distribution. Higher $T$ → wider spread of velocities.

**Step 2 — Doppler shift of relative energy.** What matters for absorption is not the neutron's energy in the lab frame, but the *relative kinetic energy* between neutron and nucleus at the moment of collision. A nucleus moving *toward* the neutron makes the collision effectively higher-energy; one moving *away* makes it lower-energy. This is the same Doppler effect as sound from a moving source.

**Step 3 — the effective cross-section is a convolution.** Because nuclei move in all directions with a spread of speeds, a neutron of fixed lab-frame energy $E$ "sees" a smeared distribution of relative energies. The observed cross-section becomes the Breit-Wigner profile *convolved* with a Gaussian whose width grows as $\sqrt{T}$:

$$\sigma_{\text{eff}}(E, T) = \frac{1}{\sqrt{\pi}\Delta} \int_{-\infty}^{\infty} \sigma_{\text{BW}}(E') \, e^{-(E-E')^2/\Delta^2} \, dE'$$

where $\Delta \propto \sqrt{T}$. This is the **Doppler-broadened Breit-Wigner** (also called the Voigt profile in spectroscopy).

**Step 4 — peak broadens, height drops, area conserved.** The Gaussian convolution redistributes the cross-section across a wider energy interval, so the peak maximum falls. But because the Gaussian is normalized, the integral over energy is conserved.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T13:18:18.393158Z",
  "stop_timestamp": "2026-04-11T13:18:47.162989Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_016EeZt62vXjy2NuFQJGXEVt",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": [
      "Animating thermal motion",
      "Convolving the profiles"
    ],
    "title": "doppler_broadening_mechanism",
    "widget_code": "\n<svg width=\"100%\" viewBox=\"0 0 680 430\" role=\"img\">\n  <title>Mechanism: temperature to Doppler broadening in three steps</title>\n  <desc>Three-panel diagram showing: panel 1 — Maxwell-Boltzmann velocity distribution widening with temperature; panel 2 — Doppler shift of relative energy for individual collisions; panel 3 — resulting cross-section broadening.</desc>\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </marker>\n  </defs>\n\n  <!-- ── Step labels ── -->\n  <text class=\"th\" x=\"110\" y=\"25\" text-anchor=\"middle\">Step 1</text>\n  <text class=\"ts\" x=\"110\" y=\"42\" text-anchor=\"middle\">Nuclear thermal speeds</text>\n  <text class=\"th\" x=\"340\" y=\"25\" text-anchor=\"middle\">Step 2</text>\n  <text class=\"ts\" x=\"340\" y=\"42\" text-anchor=\"middle\">Doppler shift per collision</text>\n  <text class=\"th\" x=\"570\" y=\"25\" text-anchor=\"middle\">Step 3</text>\n  <text class=\"ts\" x=\"570\" y=\"42\" text-anchor=\"middle\">Effective cross-section</text>\n\n  <!-- dividers -->\n  <line x1=\"228\" y1=\"15\" x2=\"228\" y2=\"400\" stroke=\"var(--t)\" stroke-width=\"0.5\" stroke-dasharray=\"4 3\" opacity=\"0.25\"/>\n  <line x1=\"456\" y1=\"15\" x2=\"456\" y2=\"400\" stroke=\"var(--t)\" stroke-width=\"0.5\" stroke-dasharray=\"4 3\" opacity=\"0.25\"/>\n\n  <!-- arrows between steps -->\n  <line x1=\"234\" y1=\"210\" x2=\"252\" y2=\"210\" stroke=\"var(--t)\" stroke-width=\"1.2\" marker-end=\"url(#arrow)\" opacity=\"0.6\"/>\n  <line x1=\"462\" y1=\"210\" x2=\"480\" y2=\"210\" stroke=\"var(--t)\" stroke-width=\"1.2\" marker-end=\"url(#arrow)\" opacity=\"0.6\"/>\n\n  <!-- ══ PANEL 1: Maxwell-Boltzmann distributions ══ -->\n  <!-- axes -->\n  <line x1=\"30\" y1=\"340\" x2=\"216\" y2=\"340\" stroke=\"var(--s)\" stroke-width=\"1\" marker-end=\"url(#arrow)\"/>\n  <line x1=\"44\" y1=\"355\" x2=\"44\" y2=\"80\" stroke=\"var(--s)\" stroke-width=\"1\" marker-end=\"url(#arrow)\"/>\n  <text class=\"ts\" x=\"130\" y=\"368\" text-anchor=\"middle\">nuclear speed  v</text>\n  <text class=\"ts\" x=\"22\" y=\"210\" text-anchor=\"middle\" transform=\"rotate(-90,22,210)\">P(v)</text>\n\n  <!-- Cold distribution (narrow, tall) — blue -->\n  <path d=\"M44,340 Q60,340 75,338 Q85,332 92,315 Q96,298 99,275 Q102,250 104,225 Q106,200 107,185 Q108,170 109,162 Q110,155 111,162 Q112,170 113,185 Q114,200 116,225 Q118,250 121,275 Q124,298 128,315 Q135,332 145,338 Q160,340 180,340\"\n        fill=\"none\" stroke=\"#185FA5\" stroke-width=\"2\"/>\n  <text class=\"ts\" x=\"88\" y=\"148\" fill=\"#185FA5\">cold  T₁</text>\n\n  <!-- Hot distribution (wide, short) — red -->\n  <path d=\"M44,340 Q55,340 62,339 Q70,337 77,330 Q83,320 88,305 Q93,286 97,262 Q101,238 105,218 Q108,203 111,195 Q113,190 115,188 Q117,190 119,195 Q122,203 125,218 Q129,238 133,262 Q137,286 142,305 Q147,320 153,330 Q160,337 168,339 Q178,340 210,340\"\n        fill=\"none\" stroke=\"#A32D2D\" stroke-width=\"2\"/>\n  <text class=\"ts\" x=\"152\" y=\"176\" fill=\"#A32D2D\">hot  T₂</text>\n\n  <!-- ── PANEL 2: Doppler shift per collision ── -->\n  <!-- neutron (fixed lab energy) -->\n  <circle cx=\"270\" cy=\"200\" r=\"9\" fill=\"#185FA5\"/>\n  <text class=\"ts\" x=\"270\" y=\"225\" text-anchor=\"middle\" fill=\"#185FA5\">neutron</text>\n  <text class=\"ts\" x=\"270\" y=\"238\" text-anchor=\"middle\" fill=\"#185FA5\">E_lab</text>\n  <line x1=\"281\" y1=\"200\" x2=\"310\" y2=\"200\" stroke=\"#185FA5\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n\n  <!-- Nucleus moving toward -->\n  <circle cx=\"370\" cy=\"155\" r=\"13\" fill=\"#185FA5\" fill-opacity=\"0.15\" stroke=\"#185FA5\" stroke-width=\"1.5\"/>\n  <text class=\"ts\" x=\"370\" y=\"152\" text-anchor=\"middle\">U</text>\n  <line x1=\"356\" y1=\"155\" x2=\"330\" y2=\"165\" stroke=\"#185FA5\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n  <text class=\"ts\" x=\"405\" y=\"148\" fill=\"#185FA5\">toward</text>\n  <text class=\"ts\" x=\"405\" y=\"161\" fill=\"#185FA5\">E_rel ↑ higher</text>\n\n  <!-- Nucleus at rest -->\n  <circle cx=\"370\" cy=\"210\" r=\"13\" fill=\"var(--bg2)\" stroke=\"var(--s)\" stroke-width=\"1.5\"/>\n  <text class=\"ts\" x=\"370\" y=\"207\" text-anchor=\"middle\">U</text>\n  <text class=\"ts\" x=\"405\" y=\"207\" fill=\"var(--t)\">at rest</text>\n  <text class=\"ts\" x=\"405\" y=\"220\" fill=\"var(--t)\">E_rel = E_lab</text>\n\n  <!-- Nucleus moving away -->\n  <circle cx=\"370\" cy=\"265\" r=\"13\" fill=\"#A32D2D\" fill-opacity=\"0.1\" stroke=\"#A32D2D\" stroke-width=\"1.5\"/>\n  <text class=\"ts\" x=\"370\" y=\"262\" text-anchor=\"middle\">U</text>\n  <line x1=\"384\" y1=\"265\" x2=\"412\" y2=\"255\" stroke=\"#A32D2D\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n  <text class=\"ts\" x=\"405\" y=\"282\" fill=\"#A32D2D\">away</text>\n  <text class=\"ts\" x=\"405\" y=\"295\" fill=\"#A32D2D\">E_rel ↓ lower</text>\n\n  <!-- bracket label -->\n  <line x1=\"260\" y1=\"140\" x2=\"260\" y2=\"310\" stroke=\"var(--t)\" stroke-width=\"0.8\" opacity=\"0.4\"/>\n  <text class=\"ts\" x=\"248\" y=\"228\" text-anchor=\"middle\" transform=\"rotate(-90,248,228)\" opacity=\"0.6\">many collisions</text>\n\n  <!-- ══ PANEL 3: Resulting cross-section ══ -->\n  <!-- axes -->\n  <line x1=\"476\" y1=\"340\" x2=\"655\" y2=\"340\" stroke=\"var(--s)\" stroke-width=\"1\" marker-end=\"url(#arrow)\"/>\n  <line x1=\"490\" y1=\"355\" x2=\"490\" y2=\"80\" stroke=\"var(--s)\" stroke-width=\"1\" marker-end=\"url(#arrow)\"/>\n  <text class=\"ts\" x=\"572\" y=\"368\" text-anchor=\"middle\">neutron energy  E</text>\n  <text class=\"ts\" x=\"470\" y=\"210\" text-anchor=\"middle\" transform=\"rotate(-90,470,210)\">σ_eff</text>\n\n  <!-- Cold: narrow tall peak (blue) -->\n  <path d=\"M490,340 Q510,340 525,339 Q530,336 534,325 Q537,310 539,285 Q541,255 542,225 Q543,195 544,168 Q545,145 546,130 Q547,145 548,168 Q549,195 550,225 Q551,255 553,285 Q555,310 558,325 Q562,336 567,339 Q580,340 610,340\"\n        fill=\"none\" stroke=\"#185FA5\" stroke-width=\"2\"/>\n  <text class=\"ts\" x=\"536\" y=\"118\" fill=\"#185FA5\">cold</text>\n\n  <!-- Hot: broad short peak (red) -->\n  <path d=\"M490,340 Q500,340 510,339 Q520,338 526,333 Q530,326 533,313 Q536,295 538,270 Q540,248 542,228 Q543,213 545,202 Q546,196 547,193 Q548,196 549,202 Q550,213 552,228 Q554,248 556,270 Q558,295 561,313 Q564,326 568,333 Q574,338 584,339 Q600,340 640,340\"\n        fill=\"none\" stroke=\"#A32D2D\" stroke-width=\"2\"/>\n  <text class=\"ts\" x=\"575\" y=\"188\" fill=\"#A32D2D\">hot</text>\n\n  <!-- area-conserved annotation -->\n  <path d=\"M490,340 Q510,340 525,339 Q530,336 534,325 Q537,310 539,285 Q541,255 542,225 Q543,195 544,168 Q545,145 546,130 Q547,145 548,168 Q549,195 550,225 Q551,255 553,285 Q555,310 558,325 Q562,336 567,339 Q580,340 610,340 Z\"\n        fill=\"#185FA5\" fill-opacity=\"0.08\"/>\n  <path d=\"M490,340 Q500,340 510,339 Q520,338 526,333 Q530,326 533,313 Q536,295 538,270 Q540,248 542,228 Q543,213 545,202 Q546,196 547,193 Q548,196 549,202 Q550,213 552,228 Q554,248 556,270 Q558,295 561,313 Q564,326 568,333 Q574,338 584,339 Q600,340 640,340 Z\"\n        fill=\"#A32D2D\" fill-opacity=\"0.08\"/>\n\n  <!-- equal area annotation -->\n  <text class=\"ts\" x=\"572\" y=\"395\" text-anchor=\"middle\">shaded areas ≈ equal  (∫σ dE conserved)</text>\n</svg>\n"
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
  "tool_use_id": "toolu_016EeZt62vXjy2NuFQJGXEVt",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "a39b31f1-01bc-443e-b9ad-eb1f06d351ca"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "bc386547-bcea-4b92-a0bd-dff55faadbfa"
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

**The key insight to hold together:**

The resonance level $E_0$ of ²³⁹U\* does not move — it is a quantum fact about the nucleus. What changes with temperature is the *distribution of relative kinetic energies* that neutrons effectively experience. A hotter fuel means nuclei move faster in more directions, so the same neutron beam "sees" a wider smear of effective energies around $E_0$. That smear is exactly what Doppler-broadens the measured peak.

So the full chain is:

$$T \uparrow \;\longrightarrow\; \text{wider MB distribution} \;\longrightarrow\; \text{wider spread of } E_\text{rel} \;\longrightarrow\; \text{broader, lower peak} \;\longrightarrow\; \text{more neutrons captured off-peak} \;\longrightarrow\; \text{power self-limits}$$

Want to go into the Breit-Wigner formula in more detail, or the Voigt convolution integral explicitly?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7cb0-96bd-767f-983c-325720ac5a93",
  "updated_at": "2026-04-11T13:18:54.836355Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7cb0-96bd-7cb1-bfb9-8d3ad71350b3"
}
```

</details>

### 5. human — 2026-04-11T13:36:42.478604Z

1. Therefore, most of the compound nuclears have resonance state to some extent. Resonance state is a general property.
2. Plz explain why the area of the peak is same further? What is the underlying connotation of it? Like, what does the integral over enery mean from the curve?
3. However, to my understanding, the uranium 238 is the fuel itself. You consume more fuels to give fewer reaction nutrients available for fission, which is strange

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7cc2-478c-7557-8c6a-64d73a78f5f3",
  "updated_at": "2026-04-11T13:36:42.478604Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7cb0-96bd-767f-983c-325720ac5a93"
}
```

</details>

### 6. assistant — 2026-04-11T13:37:10.796625Z

 

<details>
<summary>Thinking (verbatim)</summary>

Three good questions. Let me address each:

1. Yes, resonance states are general - all compound nuclei have them. This is correct.

2. Area conservation - the integral ∫σ dE has physical meaning. It relates to the "resonance integral" and is tied to the strength of the transition (the partial widths). The area is proportional to Γ_n × Γ_γ / Γ (from Breit-Wigner). Temperature just redistributes the cross-section over energy via Doppler, but doesn't change the fundamental nuclear matrix element. The area represents something like the total "absorption strength" at that resonance.


3. Ah, I see the confusion now - ²³⁸U is the fertile material making up 99.3% of natural uranium, not the fissile fuel. When it captures a neutron through resonance absorption, it doesn't fission but instead transmutes into ²³⁹Pu. The Doppler broadening of ²³⁸U resonances actually removes neutrons from the pool available for ²³⁵U fission, which is the key safety mechanism.

</details>

Three sharp observations. Let me take each in turn.

---

**1. Yes — resonance states are universal**

Correct. Any nucleus can form a compound nucleus when it absorbs a neutron, and every compound nucleus has discrete excited states. So resonance peaks appear for essentially all nuclides. What varies enormously is:

- **Density of resonances** — heavy nuclei (like ²³⁸U) have hundreds of tightly-spaced resonances in the eV–keV range; light nuclei (like ¹²C) have sparse, widely-separated ones at much higher energies
- **Peak height** — depends on how strongly the compound state couples to both the neutron-in and gamma-out channels
- **Width Γ** — set by the lifetime of that compound state

So you are right: resonance absorption is a general nuclear phenomenon. ²³⁸U is just a particularly important case because its resonances sit right in the energy range where neutrons slow down during moderation.

---

**2. Why the area is conserved — and what it means physically**

The integral $\int \sigma(E)\, dE$ over a single resonance peak is called the **resonance strength**, and from the Breit-Wigner formula it evaluates to:

$$\int_{-\infty}^{\infty} \sigma_\text{BW}(E)\, dE = \frac{\pi}{2} \lambda^2 \cdot \frac{g \Gamma_n \Gamma_\gamma}{\Gamma}$$

Every factor here — $\lambda$ (de Broglie wavelength at $E_0$), $g$ (spin statistical factor), $\Gamma_n$ (neutron width), $\Gamma_\gamma$ (gamma width), $\Gamma$ (total width) — is a property of the nuclear state, not of temperature. Temperature only enters through the Doppler convolution, which is a normalized Gaussian ($\int G \, dE = 1$). Convolving $\sigma_\text{BW}$ with a normalized function cannot change the integral.

**What the integral means physically:** $\int \sigma(E)\, dE$ measures the total *absorption strength* of that resonance — how "potent" the nuclear transition is, integrated over all energies. It encodes the quantum mechanical matrix element connecting the neutron+²³⁸U entrance channel to the compound state. Temperature redistributes *where* in energy the absorption happens, but cannot change the strength of the underlying nuclear interaction. That would require changing the nuclear structure itself.

A useful analogy: imagine spreading butter over bread. Whether you pile it thick on a small region or spread it thin over a large region, the *total amount of butter* is the same. Temperature broadens the spread but conserves the butter.

---

**3. ²³⁸U is not the fissile fuel — this is the crucial distinction**

This is the most important clarification. In a typical reactor fuel:

| Isotope | Fraction | Role |
|---|---|---|
| ²³⁵U | ~3–5% (enriched) | **Fissile** — splits when it absorbs a neutron at almost any energy |
| ²³⁸U | ~95–97% | **Fertile** — absorbs neutrons but does *not* fission (mostly) |

When ²³⁸U captures a neutron, the reaction chain is:

$$^{238}\text{U} + n \;\longrightarrow\; ^{239}\text{U} \xrightarrow{\beta^-} \; ^{239}\text{Np} \xrightarrow{\beta^-} \; ^{239}\text{Pu}$$

It transmutes into plutonium — not fission, no chain reaction contribution. So ²³⁸U resonance absorption **removes neutrons from the pool** without contributing fission neutrons back. It is a neutron sink.

Now the safety logic becomes clear:

$$T \uparrow \;\longrightarrow\; \text{²³⁸U resonance peaks broaden} \;\longrightarrow\; \text{more neutrons captured by ²³⁸U} \;\longrightarrow\; \text{fewer neutrons reach ²³⁵U} \;\longrightarrow\; \text{less fission} \;\longrightarrow\; T \downarrow$$

You are not consuming *fissile* fuel faster — you are diverting neutrons away from the fissile fuel into the fertile ²³⁸U. The Doppler coefficient is negative precisely because ²³⁸U is the dominant neutron absorber by mass, and its resonances are well-placed to intercept slowing-down neutrons before they reach ²³⁵U.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7cc2-478d-70f2-b9bc-37fc83460e62",
  "updated_at": "2026-04-11T13:37:10.796625Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7cc2-478c-7557-8c6a-64d73a78f5f3"
}
```

</details>

### 7. human — 2026-04-11T13:44:26.148881Z

I remember it has an underlying mechanism. Let's dive deeper

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7cc9-5dfb-73a2-b0f1-83a92906e301",
  "updated_at": "2026-04-11T13:44:26.148881Z",
  "attachments": [
    {
      "file_name": "excerpt_from_previous_claude_message.txt",
      "file_size": 205,
      "file_type": "txt",
      "extracted_content": "Density of resonances — heavy nuclei (like ²³⁸U) have hundreds of tightly-spaced resonances in the eV–keV range; light nuclei (like ¹²C) have sparse, widely-separated ones at much higher energies"
    }
  ],
  "files": [
    {
      "file_uuid": "3fa1d7f2-e4e5-4f82-9a14-6f511a2e992a",
      "file_name": "excerpt_from_previous_claude_message.txt"
    }
  ],
  "parent_message_uuid": "019d7cc2-478d-70f2-b9bc-37fc83460e62"
}
```

</details>

### 8. assistant — 2026-04-11T13:45:44.837118Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants to understand why heavy nuclei have dense, low-energy resonances while light nuclei have sparse, high-energy ones. This is about nuclear level density and the physics behind it.

Key points:
1. **Nuclear level density** — goes as exp(√E) roughly, increases rapidly with excitation energy and with mass number A. Heavy nuclei have exponentially more states at a given excitation energy.
2. **Excitation energy deposited** — when a neutron of energy E_n is captured, the compound nucleus is excited by E_n + S_n (neutron separation energy). For heavy nuclei, S_n ~ 5-7 MeV. 

At those excitation energies in heavy nuclei, the level density becomes so high that you get hundreds of resonances packed into each eV — the available energy gets distributed among so many possible quantum states that levels become incredibly dense. Light nuclei, with fewer nucleons and fewer ways to partition excitation energy, have much sparser level structures, so you need to go to higher neutron energies to populate the next available level. The root cause is statistical mechanics: as you add more particles and more excitation energy, the number of accessible quantum states grows exponentially, following something like the Fermi gas model where level density scales with exp(2√(aE*)).

</details>

Good instinct. The mechanism is **nuclear level density**, rooted in combinatorics of many-body quantum states.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T13:44:36.569159Z",
  "stop_timestamp": "2026-04-11T13:44:36.569159Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01SMe4TraT1VEMPnhPJCxqpM",
  "name": "visualize:read_me",
  "input": {
    "modules": [
      "diagram"
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
  "tool_use_id": "toolu_01SMe4TraT1VEMPnhPJCxqpM",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "# Imagine — Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` — SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` — UI mockups, forms, cards, dashboards\n- `interactive` — interactive explainers with controls\n- `chart` — charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` — illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget — hard limits:**\n- Box subtitles: ≤5 words. Detail goes in click-through (`sendPrompt`) or the prose below — not the box.\n- Colors: ≤2 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: ≤4 boxes at full width (~140px each). 5+ boxes → shrink to ≤110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing \"click to learn more\" in prose, the diagram itself must ACTUALLY be sparse. Don't promise brevity then front-load everything.\n\n**Accessibility:** For HTML widgets, begin with a visually-hidden `<h2 class=\"sr-only\">` containing a one-sentence summary of the visualization for screen-reader users. (SVG widgets use `role=\"img\"` with `<title>` and `<desc>` instead — see SVG setup.)\n\nYou create rich visual content — SVG diagrams/illustrations and HTML interactive widgets — that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn't notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** — All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks \"explain X\", write the explanation in your response and use the tool only for the visual that accompanies it. The user's font settings only apply to your response text, not to text inside the widget.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) → content HTML → `<script>` last.\n- **SVG**: `<defs>` (markers) → visual elements immediately.\n- Prefer inline `style=\"...\"` over `<style>` blocks — inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules — that's fine, but don't bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji — use CSS shapes or SVG paths\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only — host provides the bg)\n- **Typography**: The default font is Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-serif)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px — all `font-weight: 500`. Heading color is pre-set to `var(--color-text-primary)` — don't override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 — they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally — no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` — the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style=\"min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;\">` and put the modal inside — it's a faux viewport that actually contributes layout height.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` — just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text — never plain black or generic gray.\n- **Corners**: use `border-radius: var(--border-radius-md)` (or `-lg` for cards) in HTML. In SVG, `rx=\"4\"` is the default — larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** — if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** — see Philosophy above.\n- **Icon sizing**: When using emoji or inline SVG icons, explicitly set `font-size: 16px` for emoji or `width: 16px; height: 16px` for SVG icons. Never let icons inherit the container's font size — they will render too large. For larger decorative icons, use 24px max.\n- No tabs, carousels, or `display: none` sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)\n- No nested scrolling — auto-fit height.\n- Scripts execute after streaming — load libraries via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` (UMD globals), then use the global in a plain `<script>` that follows.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`. All other origins are blocked by the sandbox — the request silently fails.\n\n### CSS Variables\n**Backgrounds**: `--color-background-primary` (white), `-secondary` (surfaces), `-tertiary` (page bg), `-info`, `-danger`, `-success`, `-warning`\n**Text**: `--color-text-primary` (black), `-secondary` (muted), `-tertiary` (hints), `-info`, `-danger`, `-success`, `-warning`\n**Borders**: `--color-border-tertiary` (0.15α, default), `-secondary` (0.3α, hover), `-primary` (0.4α), semantic `-info/-danger/-success/-warning`\n**Typography**: `--font-sans`, `--font-serif`, `--font-mono`\n**Layout**: `--border-radius-md` (8px), `--border-radius-lg` (12px — preferred for most components), `--border-radius-xl` (16px)\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** — every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes — they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) — never omit fill or use `fill=\"inherit\"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--color-text-primary, --color-text-secondary) for text. Never hardcode colors like color: #333 — invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user's next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href=\"https://...\">` just works — clicks are intercepted and open the host's link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n\n\n## Color palette\n\n9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.\n\n| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |\n|-------|------|------|-----|-----|-----|-----|-----|------|\n| `c-purple` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |\n| `c-teal` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |\n| `c-coral` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |\n| `c-pink` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |\n| `c-gray` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |\n| `c-blue` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |\n| `c-green` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |\n| `c-amber` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |\n| `c-red` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |\n\n**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:\n- Group nodes by **category** — all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.\n- For illustrative diagrams, map colors to **physical properties** — warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.\n- Use **gray for neutral/structural** nodes (start, end, generic steps).\n- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.\n- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept — those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)\n\n**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --color-text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** — title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.\n\n**Light/dark mode quick pick** — use only stops from the table, never off-table hex values:\n- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**\n- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**\n- Apply `c-{ramp}` to a `<g>` wrapping shape+text, or directly to a `<rect>`/`<circle>`/`<ellipse>`. Never to `<path>` — paths don't get ramp fill. For colored connector strokes use inline `stroke=\"#...\"` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.\n\nFor status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.\n\n\n## SVG setup\n\n**ViewBox safety checklist** — before finalizing any SVG, verify:\n1. Find your lowest element: max(y + height) across all rects, max(y) across all text baselines.\n2. Set viewBox height = that value + 40px buffer.\n3. Find your rightmost element: max(x + width) across all rects. All content must stay within x=0 to x=680.\n4. For text with text-anchor=\"end\", the text extends LEFT from x. If x=118 and text is 200px wide, it starts at x=-82 — outside the viewBox. Increase x or use text-anchor=\"start\".\n5. Never use negative x or y coordinates. The viewBox starts at 0,0.\n6. Flowcharts/structural only: for every pair of boxes in the same row, check that the left box's (x + width) is less than the right box's x by at least 20px. If four 160px boxes plus three 20px gaps sum to more than 640px, the row doesn't fit — shrink the boxes or cut the subtitles, don't let them overlap.\n\n**SVG setup**: `<svg width=\"100%\" viewBox=\"0 0 680 H\" role=\"img\"><title>…</title><desc>…</desc>…` — 680px wide, flexible height. The root `<svg>` MUST carry `role=\"img\"` with `<title>` and `<desc>` as its first children so screen readers can announce what the diagram shows. Set H to fit content tightly — the last element's bottom edge + 40px padding. Don't leave excess empty space below the content. Safe area: x=40 to x=640, y=40 to y=(H-40). Background transparent. **Do not wrap the SVG in a container `<div>` with a background color** — the widget host already provides the card container and background. Output the raw `<svg>` element directly.\n\n**The 680 in viewBox is load-bearing — do not change it.** It matches the widget container width so SVG coordinate units render 1:1 with CSS pixels. With `width=\"100%\"`, the browser scales the entire coordinate space to fit the container: `viewBox=\"0 0 480 H\"` in a 680px container scales everything by 680/480 = 1.42×, so your `class=\"th\"` 14px text renders at ~20px. The font calibration table below and all \"text fits in box\" math assume 1:1. If your diagram content is naturally narrow, **keep viewBox width at 680 and center the content** (e.g. content spans x=180..500) — do not shrink the viewBox to hug the content. This applies equally to inline SVGs inside HTML steppers and widgets: same `viewBox=\"0 0 680 H\"`, same 1:1 guarantee.\n\n**viewBox height:** After layout, find max_y (bottom-most point of any shape, including text baselines + 4px descent). Set viewBox height = max_y + 20. Don't guess.\n\n**text-anchor='end' at x<60 is risky** — the longest label will extend left past x=0. Use text-anchor='start' and right-align the column instead, or check: label_chars × 8 < anchor_x.\n\n**One SVG per tool call** — each call must contain exactly one <svg> element. Never leave an abandoned or partial SVG in the output. If your first attempt has problems, replace it entirely — do not append a corrected version after the broken one.\n\n**Style rules for all diagrams**:\n- Every `<text>` element must carry one of the pre-built classes (`t`, `ts`, `th`). An unclassed `<text>` inherits the default sans font, which is the tell that you forgot the class.\n- Use only two font sizes: 14px for node/region labels (class=\"t\" or \"th\"), 12px for subtitles, descriptions, and arrow labels (class=\"ts\"). No other sizes.\n- No decorative step numbers, large numbering, or oversized headings outside boxes.\n- No icons or illustrations inside boxes — text only. (Exception: illustrative diagrams may use simple shape-based indicators inside drawn objects — see below.)\n- Sentence case on all labels.\n\n**Font size calibration for diagram text labels** - Here's csv table to give you better sense of the Anthropic Sans font rendering width:\n```csv\ntext, chars length, font-weight, font-size, rendered width\nAuthentication Service, chars: 22, font-weight: 500, font-size: 14px, width: 167px\nBackground Job Processor, chars: 24, font-weight: 500, font-size: 14px, width: 201px\nDetects and validates incoming tokens, chars: 37, font-weight: 400, font-size: 14px, width: 279px\nforwards request to, chars: 19, font-weight: 400, font-size: 12px, width: 123px\nデータベースサーバー接続, chars: 12, font-weight: 400, font-size: 14px, width: 181px\n```\n\nBefore placing text in a box, check: does (text width + 2×padding) fit the container?\n\n**SVG `<text>` never auto-wraps.** Every line break needs an explicit `<tspan x=\"...\" dy=\"1.2em\">`. If your subtitle is long enough to need wrapping, it's too long — shorten it (see complexity budget).\n\n**Example check**: You want to put \"Glucose (C₆H₁₂O₆)\" in a rounded rect. The text is 20 characters at 14px ≈ 180px wide. Add 2×24px padding = 228px minimum box width. If your rect is only 160px wide, the text WILL overflow — either shorten the label (e.g. just \"Glucose\") or widen the box. Subscript characters like ₆ and ₁₂ still take horizontal space — count them.\n\n**Pre-built classes** (already loaded in SVG widget):\n- `class=\"t\"` = sans 14px primary, `class=\"ts\"` = sans 12px secondary, `class=\"th\"` = sans 14px medium (500)\n- `class=\"box\"` = neutral rect (bg-secondary fill, border stroke)\n- `class=\"node\"` = clickable group with hover effect (cursor pointer, slight dim on hover)\n- `class=\"arr\"` = arrow line (1.5px, open chevron head)\n- `class=\"leader\"` = dashed leader line (tertiary stroke, 0.5px, dashed)\n- `class=\"c-{ramp}\"` = colored node (c-blue, c-teal, c-amber, c-green, c-red, c-purple, c-coral, c-pink, c-gray). Apply to `<g>` or shape element (rect/circle/ellipse), NOT to paths. Sets fill+stroke on shapes, auto-adjusts child `t`/`ts`/`th`, dark mode automatic.\n\n**c-{ramp} nesting:** These classes use direct-child selectors (`>`). Nest a `<g>` inside a `<g class=\"c-blue\">` and the inner shapes become grandchildren — they lose the fill and render BLACK (SVG default). Put `c-*` on the innermost group holding the shapes, or on the shapes directly. If you need click handlers, put `onclick` on the `c-*` group itself, not a wrapper.\n\n- Short aliases: `var(--p)`, `var(--s)`, `var(--t)`, `var(--bg2)`, `var(--b)`\n- Arrow marker: always include this `<defs>` at the start of every SVG:\n  `<defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker></defs>`\n  Then use `marker-end=\"url(#arrow)\"` on lines. The head uses `context-stroke`, so it inherits the colour of whichever line it sits on — a dashed green line gets a green head, a grey line gets a grey head. Never a colour mismatch. Do not add filters or extra markers to `<defs>`. `<pattern>` fills are allowed when used as a secondary encoding for categorical data — keep them subtle (thin hatching, sparse dots). Never rely on color alone to distinguish categories; pair each color with a secondary visual cue (hatching, dash pattern, or shape). Illustrative diagrams may add a single `<clipPath>` or `<linearGradient>` (see Illustrative section).\n\n**Minimize standalone labels.** Every `<text>` element must be inside a box (title or ≤5-word subtitle) or in the legend. Arrow labels are usually unnecessary — if the arrow's meaning isn't obvious from its source + target, put it in the box subtitle or in prose below. Labels floating in space collide with things and are ambiguous.\n\n**Stroke width:** Use 0.5px strokes for diagram borders and edges — not 1px or 2px. Thin strokes feel more refined.\n\n**Connector paths need `fill=\"none\"`.** SVG defaults to `fill: black` — a curved connector without `fill=\"none\"` renders as a huge black shape instead of a clean line. Every `<path>` or `<polyline>` used as a connector/arrow MUST have `fill=\"none\"`. Only set fill on shapes meant to be filled (rects, circles, polygons).\n\n**Rect rounding:** `rx=\"4\"` for subtle corners. `rx=\"8\"` max for emphasized rounding. `rx` ≥ half the height = pill shape — deliberate only.\n\n**Schematic containers use dashed rects with a label.** Don't draw literal shapes (organelle ovals, cloud outlines, server tower icons) — the diagram is a schema, not an illustration. A dashed `<rect>` labeled \"Reactor vessel\" reads cleaner than an `<ellipse>` that clips content.\n\n**Lines stop at component edges.** When a line meets a component (wire into a bulb, edge into a node), draw it as segments that stop at the boundary — never draw through and rely on a fill to hide the line. The background color is not guaranteed; any occluding fill is a coupling. Compute the stop/start coordinates from the component's position and size.\n\n**Physical-color scenes (sky, water, grass, skin, materials):** Use ALL hardcoded hex — never mix with `c-*` theme classes. The scene should not invert in dark mode. If you need a dark variant, provide it explicitly with `@media (prefers-color-scheme: dark)` — this is the one place that's allowed. Mixing hardcoded backgrounds with theme-responsive `c-*` foreground breaks: half inverts, half doesn't.\n\n**No rotated text**. `<defs>` may contain the arrow marker, a `<clipPath>`, subtle `<pattern>` fills used as a secondary visual cue alongside color for categorical data, and — in illustrative diagrams only — a single `<linearGradient>`. Nothing else: no filters, no extra markers.\n\n\n## Diagram types\n*\"Explain how compound interest works\" / \"How does a process scheduler work\"*\n\n**Two rules that cause most diagram failures — check these before writing each arrow and each box:**\n1. **Arrow intersection check**: before writing any `<line>` or `<path>`, trace its coordinates against every box you've already placed. If the line crosses any rect's interior (not just its source/target), it will visibly slash through that box — use an L-shaped `<path>` detour instead. This applies to arrows crossing labels too.\n2. **Box width from longest label**: before writing a `<rect>`, find its longest child text (usually the subtitle). `rect_width = max(title_chars × 8, subtitle_chars × 7) + 24`. A 100px-wide box holds at most a 10-char subtitle. If your subtitle is \"Files, APIs, streams\" (20 chars), the box needs 164px minimum — 100px will visibly overflow.\n\n**Tier packing:** Compute total width BEFORE placing. Example — 4 pub/sub consumer boxes:\n- WRONG: x=40,160,260,360 w=160 → 40-60px overlaps (4×160=640 > 480 available)\n- RIGHT: x=50,200,350,500 w=130 gap=20 → fits (4×130 + 3×20 = 580 ≤ 590 safe width; right edge at 630 ≤ 640)\nWork bottom-up for trees: size leaf tier first, parent width ≥ sum of children.\n\n**Diagrams are the hardest use case** — they have the highest failure rate due to precise coordinate math. Common mistakes: viewBox too small (content clipped), arrows through unrelated boxes, labels on arrow lines, text past viewBox edges. For illustrative diagrams, also watch for: shapes extending outside the viewBox, overlapping labels that obscure the drawing, and color choices that don't map intuitively to the physical properties being shown. Double-check coordinates before finalizing.\n\nUse SVG for diagrams. The widget automatically wraps SVG output in a card.\n\n**Pick the right diagram type.** The decision is about *intent*, not subject matter. Ask: is the user trying to *document* this, or *understand* it?\n\n**Reference diagrams** — the user wants a map they can point at. Precision matters more than feeling. Boxes, labels, arrows, containment. These are the diagrams you'd find in documentation.\n- **Flowchart** — steps in sequence, decisions branching, data transforming. Good for: approval workflows, request lifecycles, build pipelines, \"what happens when I click submit\". Trigger phrases: *\"walk me through the process\"*, *\"what are the steps\"*, *\"what's the flow\"*.\n- **Structural diagram** — things inside other things. Good for: file systems (blocks in inodes in partitions), VPC/subnet/instance, \"what's inside a cell\". Trigger phrases: *\"what's the architecture\"*, *\"how is this organised\"*, *\"where does X live\"*.\n\n**Intuition diagrams** — the user wants to *feel* how something works. The goal isn't a correct map, it's the right mental model. These should look nothing like a flowchart. The subject doesn't need a physical form — it needs a *visual metaphor*.\n- **Illustrative diagram** — draw the mechanism. Physical things get cross-sections (water heaters, engines, lungs). Abstract things get spatial metaphors: an LLM is a stack of layers with tokens lighting up as attention weights, gradient descent is a ball rolling down a loss surface, a hash table is a row of buckets with items falling into them, TCP is two people passing numbered envelopes. Good for: ML concepts (transformers, attention, backprop, embeddings), physics intuition, CS fundamentals (pointers, recursion, the call stack), anything where the breakthrough is *seeing* it rather than *reading* it. Trigger phrases: *\"how does X actually work\"*, *\"explain X\"*, *\"I don't get X\"*, *\"give me an intuition for X\"*.\n\n**Route on the verb, not the noun.** Same subject, different diagram depending on what was asked:\n\n| User says | Type | What to draw |\n|---|---|---|\n| \"how do LLMs work\" | **Illustrative** | Token row, stacked layer slabs, attention threads glowing warm between tokens. Go interactive if you can. |\n| \"transformer architecture\" | Structural | Labelled boxes: embedding, attention heads, FFN, layer norm. |\n| \"how does attention work\" | **Illustrative** | One query token, a fan of lines to every key, line opacity = weight. |\n| \"how does gradient descent work\" | **Illustrative** | Contour surface, a ball, a trail of steps. Slider for learning rate. |\n| \"what are the training steps\" | Flowchart | Forward → loss → backward → update. Boxes and arrows. |\n| \"how does TCP work\" | **Illustrative** | Two endpoints, numbered packets in flight, an ACK returning. |\n| \"TCP handshake sequence\" | Flowchart | SYN → SYN-ACK → ACK. Three boxes. |\n| \"explain the Krebs cycle\" / \"how does the event loop work\" | **HTML stepper** | Click through stages. Never a ring. |\n| \"how does a hash map work\" | **Illustrative** | Key falling through a funnel into one of N buckets. |\n| \"draw the database schema\" / \"show me the ERD\" | **mermaid.js** | `erDiagram` syntax. Not SVG. |\n\nThe illustrative route is the default for *\"how does X work\"* with no further qualification. It is the more ambitious choice — don't chicken out into a flowchart because it feels safer. Claude draws these well.\n\nDon't mix families in one diagram. If you need both, draw the intuition version first (build the mental model), then the reference version (fill in the precise labels) as a second tool call with prose between.\n\n**For complex topics, use multiple SVG calls** — break the explanation into a series of smaller diagrams rather than one dense diagram. Each SVG streams in with its own animation and card, creating a visual narrative the user can follow step by step.\n\n**Always add prose between diagrams** — never stack multiple SVG calls back-to-back without text. Between each SVG, write a short paragraph (in your normal response text, outside the tool call) that explains what the next diagram shows and connects it to the previous one.\n\n**Promise only what you deliver** — if your response text says \"here are three diagrams\", you must include all three tool calls. Never promise a follow-up diagram and omit it. If you can only fit one diagram, adjust your text to match. One complete diagram is better than three promised and one delivered.\n\n#### Flowchart\n\nFor sequential processes, cause-and-effect, decision trees.\n\n**Planning**: Size boxes to fit their text generously. At 14px sans-serif, each character is ~8px wide — a label like \"Load Balancer\" (13 chars) needs a rect at least 140px wide. When in doubt, make boxes wider and leave more space between them. Cramped diagrams are the most common failure mode.\n\n**Special characters are wider**: Chemical formulas (C₆H₁₂O₆), math notation (∑, ∫, √), subscripts/superscripts via <tspan> with dy/baseline-shift, and Unicode symbols all render wider than plain Latin characters. For labels containing formulas or special notation, add 30-50% extra width to your estimate. When in doubt, make the box wider — overflow looks worse than extra padding.\n\n**Spacing**: 60px minimum between boxes, 24px padding inside boxes, 12px between text and edges. Leave 10px gap between arrowheads and box edges. Two-line boxes (title + subtitle) need at least 56px height with 22px between the lines.\n\n**Vertical text placement**: Every `<text>` inside a box needs `dominant-baseline=\"central\"`, with y set to the *centre* of the slot it sits in. Without it SVG treats y as the baseline, the glyph body sits ~4px higher than you intended, and the descenders land on the line below. Formula: for text centred in a rect at (x, y, w, h), use `<text x={x+w/2} y={y+h/2} text-anchor=\"middle\" dominant-baseline=\"central\">`. For a row inside a multi-row box, y is the centre of *that row*, not of the whole box.\n\n**Layout**: Prefer single-direction flows (all top-down or all left-right). Keep diagrams simple — max 4-5 nodes per diagram. The widget is narrow (~680px) so complex layouts break.\n\n**When the prompt itself is over budget**: if the user lists 6+ components (\"draw me auth, products, orders, payments, gateway, queue\"), don't draw all of them in one pass — you'll get overlapping boxes and arrows through text, every time. Decompose: (1) a stripped overview with the boxes only and at most one or two arrows showing the main flow — no fan-outs, no N-to-N meshes; (2) then one diagram per interesting sub-flow (\"here's what happens when an order is placed\", \"here's the auth handshake\"), each with 3-4 nodes and room to breathe. Count the nouns before you draw. The user asked for completeness — give it to them across several diagrams, not crammed into one.\n\n**Cycles don't get drawn as rings.** If the last stage feeds back into the first (Krebs cycle, event loop, GC mark-and-sweep, TCP retransmit), your instinct is to place the stages around a circle. Don't. Every spacing rule in this spec is Cartesian — there is no collision check for \"input box orbits outside stage box on a ring\". You will get satellite boxes overlapping the stages they feed, labels sitting on the dashed circle, and tangential arrows that point nowhere. The ring is decoration; the loop is conveyed by the return arrow.\n\nBuild a stepper in HTML. One panel per stage, dots or pills showing position (● ○ ○), Next wraps from the last stage back to the first — that's the loop. Each panel owns its inputs and products: an event loop's pending callbacks live *inside* the Poll panel, not floating next to a box on a ring. Nothing collides because nothing shares the canvas. Only fall back to a linear SVG (stages in a row, curved `<path>` return arrow) when there's one input and one output total and no per-stage detail to show.\n\n**Feedback loops in linear flows:** Don't draw a physical arrow traversing the layout (it fights the flow direction and clips edges). Instead:\n- Small `↻` glyph + text near the cycle point: `<text>↻ returns to start</text>`\n- Or restructure the whole diagram as a circle if the cycle IS the point\n\n**Arrows:** A line from A to B must not cross any other box or label. If the direct path crosses something, route around with an L-bend: `<path d=\"M x1 y1 L x1 ymid L x2 ymid L x2 y2\"/>`. Place arrow labels in clear space, not on the midpoint.\n\nKeep all nodes the same height when they have the same content type (e.g. all single-line boxes = 44px, all two-line boxes = 56px).\n\n**Flowchart components** — use these patterns consistently:\n\n*Single-line node* (44px tall): title only. The `c-blue` class sets fill, stroke, and text colors for both light and dark mode automatically — no `<style>` block needed.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about T-cells')\">\n  <rect x=\"100\" y=\"20\" width=\"180\" height=\"44\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"190\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"central\">T-cells</text>\n</g>\n```\n\n*Two-line node* (56px tall): bold title + muted subtitle.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about dendritic cells')\">\n  <rect x=\"100\" y=\"20\" width=\"200\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"200\" y=\"38\" text-anchor=\"middle\" dominant-baseline=\"central\">Dendritic cells</text>\n  <text class=\"ts\" x=\"200\" y=\"56\" text-anchor=\"middle\" dominant-baseline=\"central\">Detect foreign antigens</text>\n</g>\n```\n\n*Connector* (no label — meaning is clear from source + target):\n```svg\n<line x1=\"200\" y1=\"76\" x2=\"200\" y2=\"120\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n*Neutral node* (gray, for start/end/generic steps): use `class=\"box\"` for auto-themed fill/stroke, and default text classes.\n\nMake all nodes clickable by default — wrap in `<g class=\"node\" onclick=\"sendPrompt('...')\">`. The hover effect is built in.\n\n#### Structural diagram\n\nFor concepts where physical or logical containment matters — things inside other things.\n\n**When to use**: The explanation depends on *where* processes happen. Examples: how a cell works (organelles inside a cell), how a file system works (blocks inside inodes inside partitions), how a building's HVAC works (ducts inside floors inside a building), how a CPU cache hierarchy works (L1 inside core, L2 shared).\n\n**Core idea**: Large rounded rects are containers. Smaller rects inside them are regions or sub-structures. Text labels describe what happens in each region. Arrows show flow between regions or from external inputs/outputs.\n\n**Container rules**:\n- Outermost container: large rounded rect, rx=20-24, lightest fill (50 stop), 0.5px stroke (600 stop). Label at top-left inside, 14px bold.\n- Inner regions: medium rounded rects, rx=8-12, next shade fill (100-200 stop). Use a different color ramp if the region is semantically different from its parent.\n- 20px minimum padding inside every container — text and inner regions must not touch the container edges.\n- Max 2-3 nesting levels. Deeper nesting gets unreadable at 680px width.\n\n**Layout**:\n- Place inner regions side by side within the container, with 16px+ gap between them.\n- External inputs (sunlight, water, data, requests) sit outside the container with arrows pointing in.\n- External outputs sit outside with arrows pointing out.\n- Keep external labels short — one word or a short phrase. Details go in the prose between diagrams.\n\n**What goes inside regions**: Text only — the region name (14px bold) and a short description of what happens there (12px). Don't put flowchart-style boxes inside regions. Don't draw illustrations or icons inside.\n\n**Structural container example** (library branch with two side-by-side regions, an internal labeled arrow, and an external input). ViewBox 700x320, horizontal layout, color classes handle both light and dark mode — no `<style>` block:\n```svg\n<defs>\n  <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n<!-- Outer container -->\n<g class=\"c-green\">\n  <rect x=\"120\" y=\"30\" width=\"560\" height=\"260\" rx=\"20\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"400\" y=\"62\" text-anchor=\"middle\">Library branch</text>\n  <text class=\"ts\" x=\"400\" y=\"80\" text-anchor=\"middle\">Main floor</text>\n</g>\n<!-- Inner: Circulation desk -->\n<g class=\"c-teal\">\n  <rect x=\"150\" y=\"100\" width=\"220\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"260\" y=\"130\" text-anchor=\"middle\">Circulation desk</text>\n  <text class=\"ts\" x=\"260\" y=\"148\" text-anchor=\"middle\">Checkouts, returns</text>\n</g>\n<!-- Inner: Reading room -->\n<g class=\"c-amber\">\n  <rect x=\"450\" y=\"100\" width=\"210\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"555\" y=\"130\" text-anchor=\"middle\">Reading room</text>\n  <text class=\"ts\" x=\"555\" y=\"148\" text-anchor=\"middle\">Seating, reference</text>\n</g>\n<!-- Arrow between inner boxes with label -->\n<text class=\"ts\" x=\"410\" y=\"175\" text-anchor=\"middle\">Books</text>\n<line x1=\"370\" y1=\"185\" x2=\"448\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n<!-- External input: New acq. — text vertically aligned with arrow -->\n<text class=\"ts\" x=\"40\" y=\"185\" text-anchor=\"middle\">New acq.</text>\n<line x1=\"75\" y1=\"185\" x2=\"118\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n**Color in structural diagrams**: Nested regions need distinct ramps — `c-{ramp}` classes resolve to fixed fill/stroke stops, so the same class on parent and child gives identical fills and flattens the hierarchy. Pick a *related* ramp for inner structures (e.g. Green for the library envelope, Teal for the circulation desk inside it) and a *contrasting* ramp for a region that does something functionally different (e.g. Amber for the reading room). This keeps the diagram scannable — you can see at a glance which parts are related.\n\n**Database schemas / ERDs — use mermaid.js, not SVG.** A schema table is a header plus N field rows plus typed columns plus crow's-foot connectors. That is a text-layout problem and hand-placing it in SVG fails the same way every time. mermaid.js `erDiagram` does layout, cardinality, and connector routing for free. ERDs only; everything else stays in SVG.\n\n```\nerDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has\n  USERS {\n    uuid id PK\n    string email\n    timestamp created_at\n  }\n  POSTS {\n    uuid id PK\n    uuid user_id FK\n    string title\n  }\n```\n\nUse HTML for ERDs. Import and initialize in a `<script type=\"module\">`. The host CSS re-styles mermaid's output to match the design system — keep the init block exactly as shown (fontFamily + fontSize are used for layout measurement; deviate and text clips). After rendering, replace sharp-cornered entity `<path>` elements with rounded `<rect rx=\"8\">` to match the design system, and strip borders from attribute rows (only the outer container and header row keep visible borders — alternating fill colors separate the rows):\n```html\n<style>\n#erd svg.erDiagram .divider path { stroke-opacity: 0.5; }\n#erd svg.erDiagram .row-rect-odd path,\n#erd svg.erDiagram .row-rect-odd rect,\n#erd svg.erDiagram .row-rect-even path,\n#erd svg.erDiagram .row-rect-even rect { stroke: none !important; }\n</style>\n<div id=\"erd\"></div>\n<script type=\"module\">\nimport mermaid from 'https://esm.sh/mermaid@11/dist/mermaid.esm.min.mjs';\nconst dark = matchMedia('(prefers-color-scheme: dark)').matches;\nawait document.fonts.ready;\nmermaid.initialize({\n  startOnLoad: false,\n  theme: 'base',\n  fontFamily: '\"Anthropic Sans\", sans-serif',\n  themeVariables: {\n    darkMode: dark,\n    fontSize: '13px',\n    fontFamily: '\"Anthropic Sans\", sans-serif',\n    lineColor: dark ? '#9c9a92' : '#73726c',\n    textColor: dark ? '#c2c0b6' : '#3d3d3a',\n  },\n});\nconst { svg } = await mermaid.render('erd-svg', `erDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has`);\ndocument.getElementById('erd').innerHTML = svg;\n\n// Round only the outermost entity box corners (not internal row stripes)\ndocument.querySelectorAll('#erd svg.erDiagram .node').forEach(node => {\n  const firstPath = node.querySelector('path[d]');\n  if (!firstPath) return;\n  const d = firstPath.getAttribute('d');\n  const nums = d.match(/-?[\\d.]+/g)?.map(Number);\n  if (!nums || nums.length < 8) return;\n  const xs = [nums[0], nums[2], nums[4], nums[6]];\n  const ys = [nums[1], nums[3], nums[5], nums[7]];\n  const x = Math.min(...xs), y = Math.min(...ys);\n  const w = Math.max(...xs) - x, h = Math.max(...ys) - y;\n  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');\n  rect.setAttribute('x', x); rect.setAttribute('y', y);\n  rect.setAttribute('width', w); rect.setAttribute('height', h);\n  rect.setAttribute('rx', '8');\n  for (const a of ['fill', 'stroke', 'stroke-width', 'class', 'style']) {\n    if (firstPath.hasAttribute(a)) rect.setAttribute(a, firstPath.getAttribute(a));\n  }\n  firstPath.replaceWith(rect);\n});\n\n// Strip borders from attribute rows (mermaid v11: .row-rect-odd / .row-rect-even)\ndocument.querySelectorAll('#erd svg.erDiagram .row-rect-odd path, #erd svg.erDiagram .row-rect-even path').forEach(p => {\n  p.setAttribute('stroke', 'none');\n});\n</script>\n```\n\nWorks identically for `classDiagram` — swap the diagram source; init stays the same.\n\n#### Illustrative diagram\n\nFor building *intuition*. The subject might be physical (an engine, a lung) or completely abstract (attention, recursion, gradient descent) — what matters is that a spatial drawing conveys the mechanism better than labelled boxes would. These are the diagrams that make someone go \"oh, *that's* what it's doing.\"\n\n**Two flavours, same rules:**\n- **Physical subjects** get drawn as simplified versions of themselves. Cross-sections, cutaways, schematics. A water heater is a tank with a burner underneath. A lung is a branching tree in a cavity. You're drawing *the thing*, stylised.\n- **Abstract subjects** get drawn as *spatial metaphors*. You're inventing a shape for something that doesn't have one — but the shape should make the mechanism obvious. A transformer is a stack of horizontal slabs with a bright thread of attention connecting tokens across layers. A hash function is a funnel scattering items into a row of buckets. The call stack is literally a stack of frames growing and shrinking. Embeddings are dots clustering in space. The metaphor *is* the explanation.\n\nThis is the most ambitious diagram type and the one Claude is best at. Lean into it. Use colour for intensity (a hot attention weight glows amber, a cold one stays gray). Use repetition for scale (many small circles = many parameters).\n\n**Prefer interactive over static.** A static cross-section is a good answer; a cross-section you can *operate* is a great one. The decision rule: if the real-world system has a control, give the diagram that control. A water heater has a thermostat — so give the user a slider that shifts the hot/cold boundary, a toggle that fires the burner and animates convection currents. An LLM has input tokens — let the user click one and watch the attention weights re-fan. A cache has a hit rate — let them drag it and watch latency change. Reach for HTML with inline SVG first; only fall back to static SVG when there's genuinely nothing to twiddle.\n\n**When NOT to use**: The user is asking for a *reference*, not an *intuition*. \"What are the components of a transformer\" wants labelled boxes — that's a structural diagram. \"Walk me through our CI pipeline\" wants sequential steps — that's a flowchart. Also skip this when the metaphor would be arbitrary rather than revealing: drawing \"the cloud\" as a cloud shape or \"microservices\" as little houses doesn't teach anything about how they work. If the drawing doesn't make the *mechanism* clearer, don't draw it.\n\n**Fidelity ceiling**: These are schematics, not illustrations. Every shape should read at a glance. If a `<path>` needs more than ~6 segments to draw, simplify it. A tank is a rounded rect, not a Bézier portrait of a tank. A flame is three triangles, not a fire. Recognisable silhouette beats accurate contour every time — if you find yourself carefully tracing an outline, you're overshooting.\n\n**Core principle**: Draw the mechanism, not a diagram *about* the mechanism. Spatial arrangement carries the meaning; labels annotate. A good illustrative diagram works with the labels removed.\n\n**What changes from flowchart/structural rules**:\n\n- **Shapes are freeform.** Use `<path>`, `<ellipse>`, `<circle>`, `<polygon>`, and curved lines to represent real forms. A water tank is a tall rect with rounded bottom. A heart valve is a pair of curved paths. A circuit trace is a thin polyline. You are not limited to rounded rects.\n- **Layout follows the subject's geometry**, not a grid. If the thing is tall and narrow (a water heater, a thermometer), the diagram is tall and narrow. If it's wide and flat (a PCB, a geological cross-section), the diagram is wide. Let the subject dictate proportions within the 680px viewBox width.\n- **Color encodes intensity**, not category. For physical subjects: warm ramps (amber, coral, red) = heat/energy/pressure, cool ramps (blue, teal) = cold/calm, gray = inert structure. For abstract subjects: warm = active/high-weight/attended-to, cool or gray = dormant/low-weight/ignored. A user should be able to glance at the diagram and see *where the action is* without reading a single label.\n- **Layering and overlap are encouraged — for shapes.** Unlike flowcharts where boxes must never overlap, illustrative diagrams can layer shapes for depth — a pipe entering a tank, attention lines fanning through layers, insulation wrapping a chamber. Use z-ordering (later in source = on top) deliberately.\n- **Text is the exception — never let a stroke cross it.** The overlap permission is for shapes only. Every label needs 8px of clear air between its baseline/cap-height and the nearest stroke. Don't solve this with a background rect — solve it by *placing the text somewhere else*. Labels go in the quiet regions: above the drawing, below it, in the margin with a leader line, or in the gap between two fans of lines. If there is no quiet region, the drawing is too dense — remove something or split into two diagrams.\n- **Small shape-based indicators are allowed** when they communicate physical state. Triangles for flames. Circles for bubbles or particles. Wavy lines for steam or heat radiation. Parallel lines for vibration. These aren't decoration — they tell the user what's happening physically. Keep them simple: basic SVG primitives, not detailed illustrations.\n- **One gradient per diagram is permitted** — the only exception to the global no-gradients rule — and only to show a *continuous* physical property across a region (temperature stratification in a tank, pressure drop along a pipe, concentration in a solution). It must be a single `<linearGradient>` between exactly two stops from the same colour ramp. No radial gradients, no multi-stop fades, no gradient-as-aesthetic. If two stacked flat-fill rects communicate the same thing, do that instead.\n- **Animation is permitted for interactive HTML versions.** Use CSS `@keyframes` animating only `transform` and `opacity`. Keep loops under ~2s, and wrap every animation in `@media (prefers-reduced-motion: no-preference)` so it's opt-out by default. Animations should show how the system *behaves* — convection current, rotation, flow — not just move for the sake of moving. No physics engines or heavy libraries.\n\nAll core rules still apply (viewBox 680px, dark mode mandatory, 14/12px text, pre-built classes, arrow marker, clickable nodes).\n\n**Label placement**:\n- Place labels *outside* the drawn object when possible, with a thin leader line (0.5px dashed, `var(--t)` stroke) pointing to the relevant part. This keeps the illustration uncluttered.\n- For large internal zones (like temperature regions in a tank), labels can sit inside if there's ample clear space — minimum 20px from any edge.\n- External labels sit in the margin area or above/below the object. **Pick one side for labels and put them all there** — at 680px wide you don't have room for a drawing *and* label columns on both sides. Reserve at least 140px of horizontal margin on the label side. Labels on the left are the ones that clip: `text-anchor=\"end\"` extends leftward from x, and with multi-line callouts it's very easy to blow past x=0 without noticing. Default to right-side labels with `text-anchor=\"start\"` unless the subject's geometry forces otherwise. Use `class=\"ts\"` (12px) for callouts, `class=\"th\"` (14px medium) for major component names.\n\n**Composition approach**:\n1. Start with the main object's silhouette — the largest shape, centered in the viewBox.\n2. Add internal structure: chambers, pipes, membranes, mechanical parts.\n3. Add external connections: pipes entering/exiting, arrows showing flow direction, labels for inputs and outputs.\n4. Add state indicators last: color fills showing temperature/pressure/concentration, small animated elements showing movement or energy.\n5. Leave generous whitespace around the object for labels — don't crowd annotations against the viewBox edges.\n\n**Static vs interactive**: Static cutaways and cross-sections work best as pure SVG. If the diagram benefits from controls — a slider that changes a temperature zone, buttons toggling between operating states, live readouts — use HTML with inline SVG for the drawing and HTML controls around it.\n\n**Illustrative diagram example** — interactive water heater cross-section with vivid physical-realism colors, animated convection currents, and controls. Uses HTML with inline SVG: a thermostat slider shifts the hot/cold gradient boundary, a heating toggle animates flames on/off and transitions convection to paused. viewBox is 680x560; tank occupies x=180..440, leaving 140px+ of right margin for labels. Smooth convection paths use `stroke-dasharray:5 5` at ~1.6s for a gentle flow feel. A warm-glow overlay on the hot zone pulses subtly when heating is on. Flame shapes use warm gradient fills and clean opacity transitions. Labels sit along the right margin with leader lines.\n```html\n<style>\n  @keyframes conv { to { stroke-dashoffset: -20; } }\n  @keyframes flicker { 0%,100%{opacity:1} 50%{opacity:.82} }\n  @keyframes glow { 0%,100%{opacity:.3} 50%{opacity:.6} }\n  .conv { stroke-dasharray:5 5; animation: conv var(--dur,1.6s) linear infinite; transition: opacity .5s; }\n  .conv.off { opacity:0; animation-play-state:paused; }\n  #flames path { transition: opacity .5s; }\n  #flames.off path { opacity:0; animation:none; }\n  #flames path:nth-child(odd)  { animation: flicker .6s ease-in-out infinite; }\n  #flames path:nth-child(even) { animation: flicker .8s ease-in-out infinite .15s; }\n  #warm-glow { animation: glow 3s ease-in-out infinite; transition: opacity .5s; }\n  #warm-glow.off { opacity:0; animation:none; }\n  .toggle-track { position:relative;width:32px;height:18px;background:var(--color-border-secondary);border-radius:9px;transition:background .2s;display:inline-block; }\n  .toggle-track:has(input:checked) { background:var(--color-text-info); }\n  #heat-toggle:checked + span { transform:translateX(14px); }\n</style>\n<svg width=\"100%\" viewBox=\"0 0 680 560\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker>\n    <linearGradient id=\"tg\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop id=\"gh\" offset=\"40%\" stop-color=\"#E8593C\" stop-opacity=\"0.45\"/>\n      <stop id=\"gc\" offset=\"40%\" stop-color=\"#3B8BD4\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n    <linearGradient id=\"fg1\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#E85D24\"/><stop offset=\"60%\" stop-color=\"#F2A623\"/><stop offset=\"100%\" stop-color=\"#FCDE5A\"/></linearGradient>\n    <linearGradient id=\"fg2\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#D14520\"/><stop offset=\"50%\" stop-color=\"#EF8B2C\"/><stop offset=\"100%\" stop-color=\"#F9CB42\"/></linearGradient>\n    <linearGradient id=\"pipe-h\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#D05538\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#D05538\" stop-opacity=\".08\"/></linearGradient>\n    <linearGradient id=\"pipe-c\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#3B8BD4\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#3B8BD4\" stop-opacity=\".08\"/></linearGradient>\n    <clipPath id=\"tc\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\"/></clipPath>\n  </defs>\n  <!-- Tank fill -->\n  <g clip-path=\"url(#tc)\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" fill=\"url(#tg)\"/></g>\n  <!-- Warm glow overlay (pulses when heating) -->\n  <g clip-path=\"url(#tc)\"><rect id=\"warm-glow\" x=\"180\" y=\"55\" width=\"260\" height=\"160\" fill=\"#E8593C\" opacity=\".3\"/></g>\n  <!-- Tank shell (double stroke for solidity) -->\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"2.5\" opacity=\".25\"/>\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"1\"/>\n  <!-- Hot pipe out (top right) -->\n  <rect x=\"370\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-h)\"/>\n  <path d=\"M378 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <!-- Cold pipe in + dip tube (top left) -->\n  <rect x=\"234\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-c)\"/>\n  <path d=\"M242 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <path d=\"M242 55V395\" stroke=\"var(--t)\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\".5\"/>\n  <!-- Convection currents (curved paths at different speeds) -->\n  <path class=\"conv\" style=\"--dur:1.6s\" fill=\"none\" stroke=\"#D05538\" stroke-width=\"1\" opacity=\".5\" d=\"M350 380C355 320,365 240,358 140Q355 110,340 100\"/>\n  <path class=\"conv\" style=\"--dur:2.1s\" fill=\"none\" stroke=\"#C04828\" stroke-width=\".8\" opacity=\".35\" d=\"M300 390C308 340,320 260,315 170Q312 130,298 115\"/>\n  <path class=\"conv\" style=\"--dur:2.6s\" fill=\"none\" stroke=\"#B05535\" stroke-width=\".7\" opacity=\".3\" d=\"M380 370C382 310,388 230,382 150Q378 120,365 110\"/>\n  <!-- Burner bar -->\n  <rect x=\"188\" y=\"454\" width=\"244\" height=\"5\" rx=\"2\" fill=\"var(--t)\" opacity=\".6\"/>\n  <rect x=\"220\" y=\"462\" width=\"180\" height=\"6\" rx=\"3\" fill=\"var(--t)\" opacity=\".3\"/>\n  <!-- Flames (gradient-filled organic shapes) -->\n  <g id=\"flames\">\n    <path d=\"M240,454Q248,430 252,438Q256,424 260,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M278,454Q285,426 290,434Q295,418 300,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M320,454Q328,428 333,436Q338,420 342,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M360,454Q367,430 371,438Q375,422 380,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M398,454Q404,434 408,440Q412,428 416,454Z\" fill=\"url(#fg1)\"/>\n  </g>\n  <!-- Labels (right margin) -->\n  <g class=\"node\" onclick=\"sendPrompt('How does hot water exit the tank?')\">\n    <line class=\"leader\" x1=\"386\" y1=\"34\" x2=\"468\" y2=\"70\"/><circle cx=\"386\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"74\">Hot water outlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the cold water inlet work?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"34\" x2=\"468\" y2=\"140\"/><circle cx=\"250\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"144\">Cold water inlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the dip tube do?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"260\" x2=\"468\" y2=\"220\"/><circle cx=\"250\" cy=\"260\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"224\">Dip tube</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the thermostat control?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"250\" x2=\"468\" y2=\"300\"/><circle cx=\"440\" cy=\"250\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"304\">Thermostat</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What material is the tank made of?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"380\" x2=\"468\" y2=\"380\"/><circle cx=\"440\" cy=\"380\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"384\">Tank wall</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the gas burner heat water?')\">\n    <line class=\"leader\" x1=\"432\" y1=\"454\" x2=\"468\" y2=\"454\"/><circle cx=\"432\" cy=\"454\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"458\">Heating element</text></g>\n</svg>\n<div style=\"display:flex;align-items:center;gap:16px;margin:12px 0 0;font-size:13px;color:var(--color-text-secondary)\">\n  <label style=\"display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none\">\n    <span class=\"toggle-track\">\n      <input type=\"checkbox\" id=\"heat-toggle\" checked onchange=\"toggleHeat(this.checked)\" style=\"position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;margin:0\">\n      <span style=\"position:absolute;top:2px;left:2px;width:14px;height:14px;background:#fff;border-radius:50%;transition:transform .2s;pointer-events:none\"></span>\n    </span>\n    Heating\n  </label>\n  <span>Thermostat</span>\n  <input type=\"range\" id=\"temp-slider\" min=\"10\" max=\"90\" value=\"40\" style=\"flex:1\" oninput=\"setTemp(this.value)\">\n  <span id=\"temp-label\" style=\"min-width:36px;text-align:right\">40%</span>\n</div>\n<script>\nfunction setTemp(v) {\n  document.getElementById('gh').setAttribute('offset', v+'%');\n  document.getElementById('gc').setAttribute('offset', v+'%');\n  document.getElementById('temp-label').textContent = v+'%';\n}\nfunction toggleHeat(on) {\n  document.getElementById('flames').classList.toggle('off', !on);\n  document.getElementById('warm-glow').classList.toggle('off', !on);\n  document.querySelectorAll('.conv').forEach(p => p.classList.toggle('off', !on));\n}\n</script>\n```\n\n**Illustrative example — abstract subject** (attention in a transformer). Same rules, no physical object. A row of tokens at the bottom, one query token highlighted, weight-scaled lines fanning to every other token. Caption sits below the fan — clear of every stroke — not inside it.\n```svg\n<rect class=\"c-purple\" x=\"60\" y=\"40\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"80\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"120\" width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<text class=\"ts\" x=\"72\" y=\"57\" >Layer 3</text>\n<text class=\"ts\" x=\"72\" y=\"97\" >Layer 2</text>\n<text class=\"ts\" x=\"72\" y=\"137\">Layer 1</text>\n\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"116\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.25\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"228\" y2=\"146\" stroke-width=\"1.5\" opacity=\"0.4\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"340\" y2=\"146\" stroke-width=\"4\"   opacity=\"1.0\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"452\" y2=\"146\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"564\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.2\"/>\n\n<g class=\"node\" onclick=\"sendPrompt('What do the attention weights mean?')\">\n  <rect class=\"c-gray\"  x=\"80\"  y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"192\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-amber\" x=\"304\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"1\"/>\n  <rect class=\"c-gray\"  x=\"416\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"528\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <text class=\"ts\" x=\"116\" y=\"252\" text-anchor=\"middle\">the</text>\n  <text class=\"ts\" x=\"228\" y=\"252\" text-anchor=\"middle\">cat</text>\n  <text class=\"th\" x=\"340\" y=\"252\" text-anchor=\"middle\">sat</text>\n  <text class=\"ts\" x=\"452\" y=\"252\" text-anchor=\"middle\">on</text>\n  <text class=\"ts\" x=\"564\" y=\"252\" text-anchor=\"middle\">the</text>\n</g>\n\n<text class=\"ts\" x=\"340\" y=\"300\" text-anchor=\"middle\">Line thickness = attention weight from \"sat\" to each token</text>\n```\n\nNote what's *not* here: no boxes labelled \"multi-head attention\", no arrows labelled \"Q/K/V\". Those belong in the structural diagram. This one is about the *feeling* of attention — one token looking at every other token with varying intensity.\n\nThese are starting points, not ceilings. For the water heater: add a thermostat slider, animate the convection current, toggle heating vs standby. For the attention diagram: let the user click any token to become the query, scrub through layers, animate the weights settling. The goal is always to *show* how the thing works, not just *label* it.\n",
      "uuid": "5ed886b1-c1c6-4a07-8bac-2a0e8847eaf7"
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

The underlying mechanism for why heavy nuclei have denser, lower-energy resonances is nuclear level density. Let me explain this clearly.

The key physics:
1. **Nuclear level density** grows exponentially with both mass number A and excitation energy E*. The back-shifted Fermi gas model gives ρ(E*) ∝ exp(2√(aE*)) where a ≈ A/8–A/10 MeV⁻¹.

2. **Why**: more nucleons = more degrees of freedom = combinatorially more ways to distribute a fixed excitation energy among the nucleons. 

Think of it like distributing energy among quantum harmonic oscillators — add more oscillators and you get exponentially more possible microstates.

3. **The excitation energy deposited**: when a thermal neutron is captured, the compound nucleus gets excited by roughly the neutron separation energy Sn (~6-7 MeV for ²³⁹U, ~4-5 MeV for lighter nuclei). For ²³⁹U* at E* ≈ 6.5 MeV with a ≈ 30 MeV⁻¹, I'm calculating the level density using the exponential formula.

The density of states explodes — roughly exp(28) — which means the average spacing between levels drops to the eV range. For ¹³C* under similar conditions with a ≈ 1.6 MeV⁻¹, the density is much more modest at exp(6.5), leaving level spacings in the MeV range.

The key insight is that heavier nuclei pack far more levels into the same energy window because they have more degrees of freedom, while lighter nuclei have sparser spectra. Even if both absorbed the same excitation energy, you'd need a much higher neutron energy to bridge to the next level in a light nucleus.

Now I'm building an interactive visualization with two side-by-side energy ladders — one showing the dense level structure of a heavy nucleus and the other showing the sparse levels of a light nucleus.

</details>

The mechanism is **nuclear level density**, and it is fundamentally a combinatorics argument — statistical mechanics applied to a quantum many-body system. Two effects combine.

---

**Effect 1 — More nucleons = exponentially more ways to distribute energy**

When a neutron is captured, it deposits excitation energy $E^* \approx S_n$ (the neutron separation energy, ~6–7 MeV for heavy nuclei) into the compound nucleus. That energy must be shared among all the nucleons. The number of quantum states available at excitation energy $E^*$ is given by the Fermi gas level density formula:

$$\rho(E^*) \propto \exp\!\left(2\sqrt{a E^*}\right), \quad a \approx \frac{A}{8\text{–}10} \;\text{MeV}^{-1}$$

The level density parameter $a$ scales with mass number $A$. More nucleons → more degrees of freedom → combinatorially more ways to partition the excitation energy. The mean spacing between levels is $D = 1/\rho$, which collapses exponentially as $A$ grows.

Concretely, for a neutron capture depositing $E^* = 6.5$ MeV:

| Nucleus | $A$ | $a$ (MeV⁻¹) | $\rho \propto e^{2\sqrt{aE^*}}$ | typical $D$ |
|---|---|---|---|---|
| ²³⁹U* | 239 | ~30 | $\sim e^{28}$ | ~1 eV |
| ¹³C* | 13 | ~1.6 | $\sim e^{6.5}$ | ~MeV |

The difference is not linear — it is exponential. This is why ²³⁸U has hundreds of resolved resonances per keV, while ¹²C has only a handful across several MeV.

**Effect 2 — The neutron energy range where resonances appear**

For ²³⁸U, the dense levels happen to fall in the eV–keV range of *neutron kinetic energy* — precisely the energy range where reactor neutrons spend most time while moderating. This is partly coincidence of nuclear structure, but it makes ²³⁸U uniquely important for reactor physics.

For light nuclei, the next available compound-nucleus level sits MeV above the ground state threshold, so the neutron must arrive with MeV-scale kinetic energy to hit a resonance at all.

---

Here is an interactive diagram. The left column is a heavy nucleus (²³⁸U), the right is a light nucleus (¹²C). Drag the neutron energy slider and watch which resonances get hit.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-11T13:45:02.648913Z",
  "stop_timestamp": "2026-04-11T13:45:37.178773Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01W38RHTN5WLuodJbYA77R5W",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": [
      "Filling the level ladder",
      "Spacing out the light nucleus",
      "Wiring the slider"
    ],
    "title": "nuclear_level_density_interactive",
    "widget_code": "\n<style>\n  @media (prefers-reduced-motion: no-preference) {\n    .hit-glow { animation: pulse 0.4s ease-out forwards; }\n  }\n  @keyframes pulse { 0%{opacity:0;transform:scaleX(0.5)} 40%{opacity:1;transform:scaleX(1.15)} 100%{opacity:1;transform:scaleX(1)} }\n  .level-line { transition: stroke 0.15s, stroke-width 0.15s, opacity 0.15s; }\n</style>\n<svg id=\"lds\" width=\"100%\" viewBox=\"0 0 680 480\" role=\"img\">\n  <title>Nuclear level density: heavy vs light nucleus</title>\n  <desc>Side-by-side energy level diagrams. Left: 238U compound nucleus with densely packed levels in the eV-keV range. Right: 12C compound nucleus with sparse levels separated by MeV. A slider controls incoming neutron energy.</desc>\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </marker>\n  </defs>\n\n  <text class=\"th\" x=\"190\" y=\"28\" text-anchor=\"middle\">²³⁸U  (heavy,  A=238)</text>\n  <text class=\"ts\" x=\"190\" y=\"44\" text-anchor=\"middle\">dense levels, eV spacing</text>\n  <text class=\"th\" x=\"500\" y=\"28\" text-anchor=\"middle\">¹²C  (light,  A=12)</text>\n  <text class=\"ts\" x=\"500\" y=\"44\" text-anchor=\"middle\">sparse levels, MeV spacing</text>\n\n  <line x1=\"340\" y1=\"20\" x2=\"340\" y2=\"470\" stroke=\"var(--t)\" stroke-width=\"0.5\" stroke-dasharray=\"4 3\" opacity=\"0.2\"/>\n\n  <line x1=\"100\" y1=\"60\" x2=\"100\" y2=\"430\" stroke=\"var(--s)\" stroke-width=\"1\" marker-end=\"url(#arrow)\"/>\n  <text class=\"ts\" x=\"86\" y=\"250\" text-anchor=\"middle\" transform=\"rotate(-90,86,250)\">excitation energy  E*</text>\n  <line x1=\"410\" y1=\"60\" x2=\"410\" y2=\"430\" stroke=\"var(--s)\" stroke-width=\"1\" marker-end=\"url(#arrow)\"/>\n  <text class=\"ts\" x=\"396\" y=\"250\" text-anchor=\"middle\" transform=\"rotate(-90,396,250)\">excitation energy  E*</text>\n\n  <g id=\"heavy-levels\"></g>\n  <g id=\"light-levels\"></g>\n\n  <line id=\"neutron-line-l\" x1=\"100\" y1=\"200\" x2=\"280\" y2=\"200\" stroke=\"#185FA5\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\" opacity=\"0.7\" marker-end=\"url(#arrow)\"/>\n  <line id=\"neutron-line-r\" x1=\"410\" y1=\"200\" x2=\"590\" y2=\"200\" stroke=\"#185FA5\" stroke-width=\"1.5\" stroke-dasharray=\"5 3\" opacity=\"0.7\" marker-end=\"url(#arrow)\"/>\n  <text id=\"neutron-label-l\" class=\"ts\" x=\"152\" y=\"194\" fill=\"#185FA5\" text-anchor=\"middle\">neutron  E</text>\n  <text id=\"neutron-label-r\" class=\"ts\" x=\"462\" y=\"194\" fill=\"#185FA5\" text-anchor=\"middle\">neutron  E</text>\n\n  <text id=\"hit-label-l\" class=\"ts\" x=\"310\" y=\"250\" text-anchor=\"end\" fill=\"#A32D2D\" opacity=\"0\"></text>\n  <text id=\"hit-label-r\" class=\"ts\" x=\"620\" y=\"250\" text-anchor=\"end\" fill=\"#A32D2D\" opacity=\"0\"></text>\n\n  <text class=\"ts\" x=\"190\" y=\"448\" text-anchor=\"middle\" opacity=\"0.5\">a ≈ 30 MeV⁻¹,  D ~ eV</text>\n  <text class=\"ts\" x=\"500\" y=\"448\" text-anchor=\"middle\" opacity=\"0.5\">a ≈ 1.6 MeV⁻¹,  D ~ MeV</text>\n</svg>\n\n<div style=\"display:flex;align-items:center;gap:12px;padding:10px 0 4px;font-size:13px;color:var(--color-text-secondary)\">\n  <span style=\"white-space:nowrap\">Neutron energy</span>\n  <input type=\"range\" id=\"e-slider\" min=\"0\" max=\"100\" value=\"30\" style=\"flex:1\">\n  <span id=\"e-label\" style=\"min-width:80px;text-align:right;color:var(--color-text-primary)\">low eV range</span>\n</div>\n<div id=\"explain-box\" style=\"font-size:12px;color:var(--color-text-secondary);padding:4px 0 8px;min-height:36px;line-height:1.5\"></div>\n\n<script>\nconst svg = document.getElementById('lds');\nconst W = 680, topY = 60, botY = 420, midX_l = 190, midX_r = 500, axX_l = 100, axX_r = 410;\nconst halfW = 80;\n\nfunction energyToY(frac) { return botY - (botY - topY) * frac; }\n\nconst heavyLevels = [];\n{ let y = botY - 10; while(y > topY + 5) { heavyLevels.push(y); const gap = 5 + Math.random()*18; y -= gap; } }\n\nconst lightLevels = [];\n{ const gaps = [80, 110, 95, 120, 85, 100, 70, 115]; let y = botY - 30; for(const g of gaps) { if(y-g < topY+5) break; y -= g; lightLevels.push(y); } }\n\nfunction drawLevels() {\n  const gl = document.getElementById('heavy-levels');\n  const gr = document.getElementById('light-levels');\n  gl.innerHTML = ''; gr.innerHTML = '';\n  heavyLevels.forEach((y,i) => {\n    const l = document.createElementNS('http://www.w3.org/2000/svg','line');\n    l.setAttribute('x1', axX_l+12); l.setAttribute('x2', axX_l+12+halfW*2);\n    l.setAttribute('y1', y); l.setAttribute('y2', y);\n    l.setAttribute('stroke','var(--s)'); l.setAttribute('stroke-width','1');\n    l.setAttribute('class','level-line'); l.setAttribute('id','hl'+i);\n    gl.appendChild(l);\n  });\n  lightLevels.forEach((y,i) => {\n    const l = document.createElementNS('http://www.w3.org/2000/svg','line');\n    l.setAttribute('x1', axX_r+12); l.setAttribute('x2', axX_r+12+halfW*2);\n    l.setAttribute('y1', y); l.setAttribute('y2', y);\n    l.setAttribute('stroke','var(--s)'); l.setAttribute('stroke-width','1.5');\n    l.setAttribute('class','level-line'); l.setAttribute('id','ll'+i);\n    gr.appendChild(l);\n  });\n}\ndrawLevels();\n\nfunction findNearest(levels, y) {\n  let best = null, bestD = 999;\n  levels.forEach((ly,i) => { const d = Math.abs(ly-y); if(d<bestD){bestD=d;best=i;} });\n  return {idx: best, dist: bestD};\n}\n\nfunction update(v) {\n  const frac = v/100;\n  const neutronY = energyToY(frac * 0.85 + 0.05);\n  document.getElementById('neutron-line-l').setAttribute('y1', neutronY);\n  document.getElementById('neutron-line-l').setAttribute('y2', neutronY);\n  document.getElementById('neutron-line-r').setAttribute('y1', neutronY);\n  document.getElementById('neutron-line-r').setAttribute('y2', neutronY);\n  document.getElementById('neutron-label-l').setAttribute('y', neutronY - 6);\n  document.getElementById('neutron-label-r').setAttribute('y', neutronY - 6);\n\n  const tolH = 8, tolL = 22;\n  const nh = findNearest(heavyLevels, neutronY);\n  const nl = findNearest(lightLevels, neutronY);\n\n  heavyLevels.forEach((_,i) => {\n    const el = document.getElementById('hl'+i);\n    if(i===nh.idx && nh.dist<tolH) { el.setAttribute('stroke','#A32D2D'); el.setAttribute('stroke-width','2.5'); el.setAttribute('opacity','1'); }\n    else { el.setAttribute('stroke','var(--s)'); el.setAttribute('stroke-width','1'); el.setAttribute('opacity','0.8'); }\n  });\n  lightLevels.forEach((_,i) => {\n    const el = document.getElementById('ll'+i);\n    if(i===nl.idx && nl.dist<tolL) { el.setAttribute('stroke','#A32D2D'); el.setAttribute('stroke-width','3'); el.setAttribute('opacity','1'); }\n    else { el.setAttribute('stroke','var(--s)'); el.setAttribute('stroke-width','1.5'); el.setAttribute('opacity','0.8'); }\n  });\n\n  const hitL = nh.dist < tolH;\n  const hitR = nl.dist < tolL;\n  document.getElementById('hit-label-l').setAttribute('opacity', hitL ? '1' : '0');\n  document.getElementById('hit-label-l').setAttribute('y', neutronY - 8);\n  document.getElementById('hit-label-l').textContent = hitL ? 'resonance hit!' : '';\n  document.getElementById('hit-label-r').setAttribute('opacity', hitR ? '1' : '0');\n  document.getElementById('hit-label-r').setAttribute('y', neutronY - 8);\n  document.getElementById('hit-label-r').textContent = hitR ? 'resonance hit!' : '';\n\n  const eLabel = document.getElementById('e-label');\n  const explain = document.getElementById('explain-box');\n  if(v < 30) {\n    eLabel.textContent = 'low eV range';\n    explain.textContent = 'In this range, 238U has dozens of available levels. Any neutron energy finds a nearby resonance. 12C has none — the neutron passes through.';\n  } else if(v < 65) {\n    eLabel.textContent = 'mid keV range';\n    explain.textContent = '238U resonances remain dense throughout. 12C still has no level here — light nuclei require MeV-scale energy to reach their first few compound states.';\n  } else {\n    eLabel.textContent = 'high MeV range';\n    explain.textContent = 'At MeV energies, even 12C begins to show resonances. 238U resonances are now so dense they start to overlap — the resolved resonance region ends and the statistical region begins.';\n  }\n}\n\ndocument.getElementById('e-slider').addEventListener('input', e => update(+e.target.value));\nupdate(30);\n</script>\n"
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
  "tool_use_id": "toolu_01W38RHTN5WLuodJbYA77R5W",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "6468bf63-8e60-4046-a221-21b1e54ac686"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "b320ce9e-fe8c-4078-815e-c79b19e7ecfe"
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

**The combinatorics intuition, made concrete:**

Imagine distributing 6 units of energy among $N$ quantum oscillators. With $N=3$ (light nucleus), there are only a handful of ways. With $N=30$ (heavy nucleus), the number of arrangements explodes combinatorially. Each distinct arrangement is a distinct energy level of the compound nucleus. This is why level density scales as $e^{2\sqrt{aE^*}}$ rather than polynomially — it is the same origin as the exponential growth of entropy in statistical mechanics, because it *is* entropy: $\rho \propto e^{S/k_B}$.

One caveat worth noting: the Fermi gas formula I quoted is an approximation. Real level densities are better described by models that account for shell effects and pairing (e.g. the back-shifted Fermi gas, or the Gilbert-Cameron composite formula), but the exponential-in-$\sqrt{A}$ behavior captures the dominant trend correctly.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7cc9-5dfb-76ac-8a61-98175de9cfc8",
  "updated_at": "2026-04-11T13:45:44.837118Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7cc9-5dfb-73a2-b0f1-83a92906e301"
}
```

</details>
