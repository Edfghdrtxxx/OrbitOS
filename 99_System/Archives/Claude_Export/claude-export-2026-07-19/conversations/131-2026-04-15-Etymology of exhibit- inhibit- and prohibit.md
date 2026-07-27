# Etymology of exhibit, inhibit, and prohibit

## Export metadata (verbatim)

```json
{
  "uuid": "3e30a652-0b4a-4e67-9e16-62a4f7be3b16",
  "name": "Etymology of exhibit, inhibit, and prohibit",
  "summary": "**Conversation Overview**\n\nThe person engaged Claude in a focused etymology and semantics discussion centered on three English words sharing the Latin root *habēre* (\"to hold\"): *exhibit*, *inhibit*, and *prohibit*. Claude explained how the prefixes *ex-* (out), *in-* (in/against), and *pro-* (before/in front) each determine the directional meaning of the hold, and organized the three words along two axes: direction of force (inward vs. outward) and source of agency (personal/biological vs. institutional/legal). Claude also attempted to render interactive SVG visualizations using a vocabulary visualization skill, though the tool was unresponsive and the analysis was delivered in prose and table format instead.\n\nIn a follow-up, the person proposed that *suppress* implies a binary outcome, inviting comparison with *inhibit* and *prohibit*. Claude refined this by positioning *suppress* (Latin *sub-* + *premere*, \"to press down\") on a shared intensity continuum between *inhibit* and *prohibit*: *inhibit* implies partial functional dampening, *suppress* implies strong near-elimination but remains scalar, and *prohibit* alone carries true binary force due to its legal/normative nature. The person demonstrated interest in precise semantic and etymological distinctions, including register differences and domain-specific usage (e.g., biology favoring *inhibit* over *prohibit*).",
  "created_at": "2026-04-15T07:04:34.970320Z",
  "updated_at": "2026-04-15T08:39:33.249880Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-15T07:04:35.647570Z

The etymology of "exhibit" , " inhibit" and "prohibit"

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8ff4-beff-7f45-b9a4-6656d94daec1",
  "updated_at": "2026-04-15T07:04:35.647570Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-15T07:26:43.273739Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants etymology of "exhibit", "inhibit", and "prohibit". This is a vocabulary/etymology request. Let me read the vocabulary-visualization skill first.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-15T07:04:39.771101Z",
  "stop_timestamp": "2026-04-15T07:04:40.075009Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_011GkMYvknsbZd1Ur3XswgaZ",
  "name": "view",
  "input": {
    "description": "Reading vocabulary visualization skill",
    "path": "/mnt/skills/user/vocabulary-visualization/SKILL.md"
  },
  "message": "Reading vocabulary visualization skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Reading vocabulary visualization skill"
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
  "tool_use_id": "toolu_011GkMYvknsbZd1Ur3XswgaZ",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: vocabulary-visualization\n     3\tdescription: \"Visualize the semantic differences between near-synonym English words using interactive diagrams, scatter plots, and concrete scenario comparisons. Use this skill whenever the user provides a set of 2+ English words or phrases that are near-synonyms and wants to understand how they differ — especially when the user says 'compare these words', 'what's the difference between X and Y', 'visualize the difference', lists multiple quoted words together, or asks for help distinguishing similar vocabulary. Also trigger when the user explicitly references this skill by name. Works for verbs, nouns, adjectives, adverbs, and phrasal verbs. Do NOT use for single-word definition lookups, translation tasks, grammar correction, or writing tasks.\"\n     4\t---\n     5\t\n     6\t# Phase 0 — EVOLVE\n     7\t\n     8\tRead the subsequent <Evolution Log> carefully. Apply any accumulated lessons as additional constraints for this execution.\n     9\t\n    10\t## Evolution Log\n    11\t\n    12\t## #2026-03-23\n    13\t- Positional map alone is incomplete — must also produce a metaphor illustration showing what each word feels like\n    14\t- Skill must mandate two visuals (positional map + metaphor illustration) to prevent scatter-plot-only output\n    15\t- A shared metaphor object (derived from etymology when possible) is the anchor for the illustration\n    16\t\n    17\t# Vocabulary visualization\n    18\t\n    19\tMake semantic differences between near-synonyms visible and felt. Two complementary visuals required: a positional map (where each word sits) and a metaphor illustration (what each word feels like).\n    20\t\n    21\t## Analysis workflow\n    22\t\n    23\t### 1. Identify distinguishing axes\n    24\t\n    25\tFind dimensions that create the most spread for this cluster.\n    26\t\n    27\tCandidates: depth/completeness, energy/agency, resolution, formality, emotional temperature, scope, certainty of outcome, duration. Use 1–3 axes — let the words dictate.\n    28\t\n    29\t### 2. Extract etymology\n    30\t\n    31\tRoot language + original meaning, compactly: \"L. solvere 'to loosen'\". Grounds why the word feels the way it does. Omit when uncertain. Well-established roots only (Latin, OE, OF, Greek).\n    32\t\n    33\t### 3. Compose concrete scenarios\n    34\t\n    35\tOne vivid scenario per word (2–4 sentences) where only that word is the natural choice. Must make the reader think \"yes, that's exactly when I'd say this.\"\n    36\t\n    37\t### 4. Assign a compact gist\n    38\t\n    39\t2–4 word gist per word: \"Endure, adapt\" or \"Fully eliminate.\"\n    40\t\n    41\t### 5. Find the shared metaphor\n    42\t\n    43\tIdentify one concrete object or situation that all the words can relate to differently. The metaphor should emerge from the cluster's semantics — ideally from an etymology (e.g., solvere = \"untie\" → a knot). Each word becomes a distinct posture/relationship to that object.\n    44\t\n    45\tTest: can you draw N figures each doing something visibly different with the same object? If yes, the metaphor works.\n    46\t\n    47\t### 6. Build both visuals\n    48\t\n    49\tAlways produce two `show_widget` calls with prose between them. Call `visualize:read_me` before the first.\n    50\t\n    51\t**Visual 1 — Positional map.** Shows *where* each word sits on the semantic axes.\n    52\t\n    53\tFormat by word count and axis count:\n    54\t- 2–3 words, 1–2 axes → Side-by-side panels with gradient spectrum\n    55\t- 3–6 words, 2 axes → Interactive 2D scatter (clickable dots, click reveals scenario)\n    56\t- 3–6 words, 3 axes → Interactive 3D scatter via Three.js (fall back to 2D if 3rd axis adds negligible separation)\n    57\t- 6+ words → Grouped card layout by primary dimension\n    58\t\n    59\t**Visual 2 — Metaphor illustration.** Shows *what* each word feels like via the shared metaphor from step 5.\n    60\t\n    61\tDraw the same object N times (once per word). Each scene shows a stick figure (or equivalent agent) relating to the object differently — the posture embodies the word's meaning. Scenes are side-by-side in one SVG, separated by subtle dividers. Click a scene to reveal the etymological story.\n    62\t\n    63\tKey rules:\n    64\t- The metaphor object must be visually identical across scenes; only the figure's relationship to it changes.\n    65\t- Resolution axis runs left-to-right (least resolved → most resolved).\n    66\t- Stick figures, not icons. Simple shapes. The drawing communicates through posture and spatial relationship, not detail.\n    67\t\n    68\t### Design principles\n    69\t\n    70\t- Distinct muted color per word; theme-aware for dark mode.\n    71\t- Etymology as small italic text beside each label.\n    72\t- Click to reveal scenario — don't dump all at once.\n    73\t- Visualizations should be self-contained: core distinction readable without prose.\n    74\t\n    75\t### Prose after the visuals\n    76\t\n    77\tNot a restatement — add connections and traps:\n    78\t- 1–2 key relationships (\"You can address and fail to solve, but can't solve without addressing.\")\n    79\t- Common confusion pairs and why they trip people up.\n    80\t- Register restrictions (\"You wouldn't tackle a bereavement — wrong energy.\")\n    81\t\n    82\t## Constraints\n    83\t\n    84\t- Etymologies must be accurate.\n    85\t- Scenarios must feel natural to a native speaker.\n    86\t- Use the Visualizer tool (show_widget), not artifacts.",
      "uuid": "eeab0973-e296-4c40-ac26-bed1075c2a7d"
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

Now let me read the read_me for the visualizer before building the visuals. Let me plan the analysis first.

**exhibit** — L. *exhibēre* = ex- ("out") + habēre ("to hold") → "to hold out"
**inhibit** — L. *inhibēre* = in- ("in/into/against") + habēre ("to hold") → "to hold in/back"
**prohibit** — L. *prohibēre* = pro- ("before/in front") + habēre ("to hold") → "to hold before/in front" → to prevent


The shared root *habēre* "to hold" creates a perfect visual metaphor — a hand moving in different directions. Exhibit extends outward to show, inhibit presses inward to restrain, and prohibit stands in front as a barrier. I can map these three words onto spatial axes based on their directional meanings.

I'm thinking about the best way to organize this: direction of force (inward versus outward) on one axis, and the source of constraint (internal versus external authority) on the other. But I could also frame it as visibility versus agency, or directionality versus formality. The key distinction is that exhibit is about making something visible to others, inhibit is usually self-directed restraint, and prohibit is formal external authority. Let me use a 2D scatter plot with directionality on the x-axis and the source of the constraint on the y-axis.

Now I'm going to load the readme and start building the visual.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-15T07:04:58.488918Z",
  "stop_timestamp": "2026-04-15T07:04:58.691631Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Nc5CNGBEw9nsh1QgC2owRv",
  "name": "visualize:read_me",
  "input": {
    "modules": [
      "diagram",
      "interactive",
      "mockup"
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
  "tool_use_id": "toolu_01Nc5CNGBEw9nsh1QgC2owRv",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "# Imagine — Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` — SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` — UI mockups, forms, cards, dashboards\n- `interactive` — interactive explainers with controls\n- `chart` — charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` — illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget — hard limits:**\n- Box subtitles: ≤5 words. Detail goes in click-through (`sendPrompt`) or the prose below — not the box.\n- Colors: ≤2 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: ≤4 boxes at full width (~140px each). 5+ boxes → shrink to ≤110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing \"click to learn more\" in prose, the diagram itself must ACTUALLY be sparse. Don't promise brevity then front-load everything.\n\n**Accessibility:** For HTML widgets, begin with a visually-hidden `<h2 class=\"sr-only\">` containing a one-sentence summary of the visualization for screen-reader users. (SVG widgets use `role=\"img\"` with `<title>` and `<desc>` instead — see SVG setup.)\n\nYou create rich visual content — SVG diagrams/illustrations and HTML interactive widgets — that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn't notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** — All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks \"explain X\", write the explanation in your response and use the tool only for the visual that accompanies it. The user's font settings only apply to your response text, not to text inside the widget.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) → content HTML → `<script>` last.\n- **SVG**: `<defs>` (markers) → visual elements immediately.\n- Prefer inline `style=\"...\"` over `<style>` blocks — inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules — that's fine, but don't bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji — use CSS shapes or SVG paths\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only — host provides the bg)\n- **Typography**: The default font is Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-serif)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px — all `font-weight: 500`. Heading color is pre-set to `var(--color-text-primary)` — don't override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 — they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally — no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` — the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style=\"min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;\">` and put the modal inside — it's a faux viewport that actually contributes layout height.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` — just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text — never plain black or generic gray.\n- **Corners**: use `border-radius: var(--border-radius-md)` (or `-lg` for cards) in HTML. In SVG, `rx=\"4\"` is the default — larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** — if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** — see Philosophy above.\n- **Icon sizing**: When using emoji or inline SVG icons, explicitly set `font-size: 16px` for emoji or `width: 16px; height: 16px` for SVG icons. Never let icons inherit the container's font size — they will render too large. For larger decorative icons, use 24px max.\n- No tabs, carousels, or `display: none` sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)\n- No nested scrolling — auto-fit height.\n- Scripts execute after streaming — load libraries via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` (UMD globals), then use the global in a plain `<script>` that follows.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`. All other origins are blocked by the sandbox — the request silently fails.\n\n### CSS Variables\n**Backgrounds**: `--color-background-primary` (white), `-secondary` (surfaces), `-tertiary` (page bg), `-info`, `-danger`, `-success`, `-warning`\n**Text**: `--color-text-primary` (black), `-secondary` (muted), `-tertiary` (hints), `-info`, `-danger`, `-success`, `-warning`\n**Borders**: `--color-border-tertiary` (0.15α, default), `-secondary` (0.3α, hover), `-primary` (0.4α), semantic `-info/-danger/-success/-warning`\n**Typography**: `--font-sans`, `--font-serif`, `--font-mono`\n**Layout**: `--border-radius-md` (8px), `--border-radius-lg` (12px — preferred for most components), `--border-radius-xl` (16px)\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** — every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes — they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) — never omit fill or use `fill=\"inherit\"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--color-text-primary, --color-text-secondary) for text. Never hardcode colors like color: #333 — invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user's next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href=\"https://...\">` just works — clicks are intercepted and open the host's link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n\n\n## Color palette\n\n9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.\n\n| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |\n|-------|------|------|-----|-----|-----|-----|-----|------|\n| `c-purple` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |\n| `c-teal` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |\n| `c-coral` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |\n| `c-pink` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |\n| `c-gray` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |\n| `c-blue` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |\n| `c-green` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |\n| `c-amber` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |\n| `c-red` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |\n\n**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:\n- Group nodes by **category** — all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.\n- For illustrative diagrams, map colors to **physical properties** — warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.\n- Use **gray for neutral/structural** nodes (start, end, generic steps).\n- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.\n- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept — those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)\n\n**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --color-text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** — title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.\n\n**Light/dark mode quick pick** — use only stops from the table, never off-table hex values:\n- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**\n- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**\n- Apply `c-{ramp}` to a `<g>` wrapping shape+text, or directly to a `<rect>`/`<circle>`/`<ellipse>`. Never to `<path>` — paths don't get ramp fill. For colored connector strokes use inline `stroke=\"#...\"` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.\n\nFor status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.\n\n\n## SVG setup\n\n**ViewBox safety checklist** — before finalizing any SVG, verify:\n1. Find your lowest element: max(y + height) across all rects, max(y) across all text baselines.\n2. Set viewBox height = that value + 40px buffer.\n3. Find your rightmost element: max(x + width) across all rects. All content must stay within x=0 to x=680.\n4. For text with text-anchor=\"end\", the text extends LEFT from x. If x=118 and text is 200px wide, it starts at x=-82 — outside the viewBox. Increase x or use text-anchor=\"start\".\n5. Never use negative x or y coordinates. The viewBox starts at 0,0.\n6. Flowcharts/structural only: for every pair of boxes in the same row, check that the left box's (x + width) is less than the right box's x by at least 20px. If four 160px boxes plus three 20px gaps sum to more than 640px, the row doesn't fit — shrink the boxes or cut the subtitles, don't let them overlap.\n\n**SVG setup**: `<svg width=\"100%\" viewBox=\"0 0 680 H\" role=\"img\"><title>…</title><desc>…</desc>…` — 680px wide, flexible height. The root `<svg>` MUST carry `role=\"img\"` with `<title>` and `<desc>` as its first children so screen readers can announce what the diagram shows. Set H to fit content tightly — the last element's bottom edge + 40px padding. Don't leave excess empty space below the content. Safe area: x=40 to x=640, y=40 to y=(H-40). Background transparent. **Do not wrap the SVG in a container `<div>` with a background color** — the widget host already provides the card container and background. Output the raw `<svg>` element directly.\n\n**The 680 in viewBox is load-bearing — do not change it.** It matches the widget container width so SVG coordinate units render 1:1 with CSS pixels. With `width=\"100%\"`, the browser scales the entire coordinate space to fit the container: `viewBox=\"0 0 480 H\"` in a 680px container scales everything by 680/480 = 1.42×, so your `class=\"th\"` 14px text renders at ~20px. The font calibration table below and all \"text fits in box\" math assume 1:1. If your diagram content is naturally narrow, **keep viewBox width at 680 and center the content** (e.g. content spans x=180..500) — do not shrink the viewBox to hug the content. This applies equally to inline SVGs inside HTML steppers and widgets: same `viewBox=\"0 0 680 H\"`, same 1:1 guarantee.\n\n**viewBox height:** After layout, find max_y (bottom-most point of any shape, including text baselines + 4px descent). Set viewBox height = max_y + 20. Don't guess.\n\n**text-anchor='end' at x<60 is risky** — the longest label will extend left past x=0. Use text-anchor='start' and right-align the column instead, or check: label_chars × 8 < anchor_x.\n\n**One SVG per tool call** — each call must contain exactly one <svg> element. Never leave an abandoned or partial SVG in the output. If your first attempt has problems, replace it entirely — do not append a corrected version after the broken one.\n\n**Style rules for all diagrams**:\n- Every `<text>` element must carry one of the pre-built classes (`t`, `ts`, `th`). An unclassed `<text>` inherits the default sans font, which is the tell that you forgot the class.\n- Use only two font sizes: 14px for node/region labels (class=\"t\" or \"th\"), 12px for subtitles, descriptions, and arrow labels (class=\"ts\"). No other sizes.\n- No decorative step numbers, large numbering, or oversized headings outside boxes.\n- No icons or illustrations inside boxes — text only. (Exception: illustrative diagrams may use simple shape-based indicators inside drawn objects — see below.)\n- Sentence case on all labels.\n\n**Font size calibration for diagram text labels** - Here's csv table to give you better sense of the Anthropic Sans font rendering width:\n```csv\ntext, chars length, font-weight, font-size, rendered width\nAuthentication Service, chars: 22, font-weight: 500, font-size: 14px, width: 167px\nBackground Job Processor, chars: 24, font-weight: 500, font-size: 14px, width: 201px\nDetects and validates incoming tokens, chars: 37, font-weight: 400, font-size: 14px, width: 279px\nforwards request to, chars: 19, font-weight: 400, font-size: 12px, width: 123px\nデータベースサーバー接続, chars: 12, font-weight: 400, font-size: 14px, width: 181px\n```\n\nBefore placing text in a box, check: does (text width + 2×padding) fit the container?\n\n**SVG `<text>` never auto-wraps.** Every line break needs an explicit `<tspan x=\"...\" dy=\"1.2em\">`. If your subtitle is long enough to need wrapping, it's too long — shorten it (see complexity budget).\n\n**Example check**: You want to put \"Glucose (C₆H₁₂O₆)\" in a rounded rect. The text is 20 characters at 14px ≈ 180px wide. Add 2×24px padding = 228px minimum box width. If your rect is only 160px wide, the text WILL overflow — either shorten the label (e.g. just \"Glucose\") or widen the box. Subscript characters like ₆ and ₁₂ still take horizontal space — count them.\n\n**Pre-built classes** (already loaded in SVG widget):\n- `class=\"t\"` = sans 14px primary, `class=\"ts\"` = sans 12px secondary, `class=\"th\"` = sans 14px medium (500)\n- `class=\"box\"` = neutral rect (bg-secondary fill, border stroke)\n- `class=\"node\"` = clickable group with hover effect (cursor pointer, slight dim on hover)\n- `class=\"arr\"` = arrow line (1.5px, open chevron head)\n- `class=\"leader\"` = dashed leader line (tertiary stroke, 0.5px, dashed)\n- `class=\"c-{ramp}\"` = colored node (c-blue, c-teal, c-amber, c-green, c-red, c-purple, c-coral, c-pink, c-gray). Apply to `<g>` or shape element (rect/circle/ellipse), NOT to paths. Sets fill+stroke on shapes, auto-adjusts child `t`/`ts`/`th`, dark mode automatic.\n\n**c-{ramp} nesting:** These classes use direct-child selectors (`>`). Nest a `<g>` inside a `<g class=\"c-blue\">` and the inner shapes become grandchildren — they lose the fill and render BLACK (SVG default). Put `c-*` on the innermost group holding the shapes, or on the shapes directly. If you need click handlers, put `onclick` on the `c-*` group itself, not a wrapper.\n\n- Short aliases: `var(--p)`, `var(--s)`, `var(--t)`, `var(--bg2)`, `var(--b)`\n- Arrow marker: always include this `<defs>` at the start of every SVG:\n  `<defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker></defs>`\n  Then use `marker-end=\"url(#arrow)\"` on lines. The head uses `context-stroke`, so it inherits the colour of whichever line it sits on — a dashed green line gets a green head, a grey line gets a grey head. Never a colour mismatch. Do not add filters or extra markers to `<defs>`. `<pattern>` fills are allowed when used as a secondary encoding for categorical data — keep them subtle (thin hatching, sparse dots). Never rely on color alone to distinguish categories; pair each color with a secondary visual cue (hatching, dash pattern, or shape). Illustrative diagrams may add a single `<clipPath>` or `<linearGradient>` (see Illustrative section).\n\n**Minimize standalone labels.** Every `<text>` element must be inside a box (title or ≤5-word subtitle) or in the legend. Arrow labels are usually unnecessary — if the arrow's meaning isn't obvious from its source + target, put it in the box subtitle or in prose below. Labels floating in space collide with things and are ambiguous.\n\n**Stroke width:** Use 0.5px strokes for diagram borders and edges — not 1px or 2px. Thin strokes feel more refined.\n\n**Connector paths need `fill=\"none\"`.** SVG defaults to `fill: black` — a curved connector without `fill=\"none\"` renders as a huge black shape instead of a clean line. Every `<path>` or `<polyline>` used as a connector/arrow MUST have `fill=\"none\"`. Only set fill on shapes meant to be filled (rects, circles, polygons).\n\n**Rect rounding:** `rx=\"4\"` for subtle corners. `rx=\"8\"` max for emphasized rounding. `rx` ≥ half the height = pill shape — deliberate only.\n\n**Schematic containers use dashed rects with a label.** Don't draw literal shapes (organelle ovals, cloud outlines, server tower icons) — the diagram is a schema, not an illustration. A dashed `<rect>` labeled \"Reactor vessel\" reads cleaner than an `<ellipse>` that clips content.\n\n**Lines stop at component edges.** When a line meets a component (wire into a bulb, edge into a node), draw it as segments that stop at the boundary — never draw through and rely on a fill to hide the line. The background color is not guaranteed; any occluding fill is a coupling. Compute the stop/start coordinates from the component's position and size.\n\n**Physical-color scenes (sky, water, grass, skin, materials):** Use ALL hardcoded hex — never mix with `c-*` theme classes. The scene should not invert in dark mode. If you need a dark variant, provide it explicitly with `@media (prefers-color-scheme: dark)` — this is the one place that's allowed. Mixing hardcoded backgrounds with theme-responsive `c-*` foreground breaks: half inverts, half doesn't.\n\n**No rotated text**. `<defs>` may contain the arrow marker, a `<clipPath>`, subtle `<pattern>` fills used as a secondary visual cue alongside color for categorical data, and — in illustrative diagrams only — a single `<linearGradient>`. Nothing else: no filters, no extra markers.\n\n\n## Diagram types\n*\"Explain how compound interest works\" / \"How does a process scheduler work\"*\n\n**Two rules that cause most diagram failures — check these before writing each arrow and each box:**\n1. **Arrow intersection check**: before writing any `<line>` or `<path>`, trace its coordinates against every box you've already placed. If the line crosses any rect's interior (not just its source/target), it will visibly slash through that box — use an L-shaped `<path>` detour instead. This applies to arrows crossing labels too.\n2. **Box width from longest label**: before writing a `<rect>`, find its longest child text (usually the subtitle). `rect_width = max(title_chars × 8, subtitle_chars × 7) + 24`. A 100px-wide box holds at most a 10-char subtitle. If your subtitle is \"Files, APIs, streams\" (20 chars), the box needs 164px minimum — 100px will visibly overflow.\n\n**Tier packing:** Compute total width BEFORE placing. Example — 4 pub/sub consumer boxes:\n- WRONG: x=40,160,260,360 w=160 → 40-60px overlaps (4×160=640 > 480 available)\n- RIGHT: x=50,200,350,500 w=130 gap=20 → fits (4×130 + 3×20 = 580 ≤ 590 safe width; right edge at 630 ≤ 640)\nWork bottom-up for trees: size leaf tier first, parent width ≥ sum of children.\n\n**Diagrams are the hardest use case** — they have the highest failure rate due to precise coordinate math. Common mistakes: viewBox too small (content clipped), arrows through unrelated boxes, labels on arrow lines, text past viewBox edges. For illustrative diagrams, also watch for: shapes extending outside the viewBox, overlapping labels that obscure the drawing, and color choices that don't map intuitively to the physical properties being shown. Double-check coordinates before finalizing.\n\nUse SVG for diagrams. The widget automatically wraps SVG output in a card.\n\n**Pick the right diagram type.** The decision is about *intent*, not subject matter. Ask: is the user trying to *document* this, or *understand* it?\n\n**Reference diagrams** — the user wants a map they can point at. Precision matters more than feeling. Boxes, labels, arrows, containment. These are the diagrams you'd find in documentation.\n- **Flowchart** — steps in sequence, decisions branching, data transforming. Good for: approval workflows, request lifecycles, build pipelines, \"what happens when I click submit\". Trigger phrases: *\"walk me through the process\"*, *\"what are the steps\"*, *\"what's the flow\"*.\n- **Structural diagram** — things inside other things. Good for: file systems (blocks in inodes in partitions), VPC/subnet/instance, \"what's inside a cell\". Trigger phrases: *\"what's the architecture\"*, *\"how is this organised\"*, *\"where does X live\"*.\n\n**Intuition diagrams** — the user wants to *feel* how something works. The goal isn't a correct map, it's the right mental model. These should look nothing like a flowchart. The subject doesn't need a physical form — it needs a *visual metaphor*.\n- **Illustrative diagram** — draw the mechanism. Physical things get cross-sections (water heaters, engines, lungs). Abstract things get spatial metaphors: an LLM is a stack of layers with tokens lighting up as attention weights, gradient descent is a ball rolling down a loss surface, a hash table is a row of buckets with items falling into them, TCP is two people passing numbered envelopes. Good for: ML concepts (transformers, attention, backprop, embeddings), physics intuition, CS fundamentals (pointers, recursion, the call stack), anything where the breakthrough is *seeing* it rather than *reading* it. Trigger phrases: *\"how does X actually work\"*, *\"explain X\"*, *\"I don't get X\"*, *\"give me an intuition for X\"*.\n\n**Route on the verb, not the noun.** Same subject, different diagram depending on what was asked:\n\n| User says | Type | What to draw |\n|---|---|---|\n| \"how do LLMs work\" | **Illustrative** | Token row, stacked layer slabs, attention threads glowing warm between tokens. Go interactive if you can. |\n| \"transformer architecture\" | Structural | Labelled boxes: embedding, attention heads, FFN, layer norm. |\n| \"how does attention work\" | **Illustrative** | One query token, a fan of lines to every key, line opacity = weight. |\n| \"how does gradient descent work\" | **Illustrative** | Contour surface, a ball, a trail of steps. Slider for learning rate. |\n| \"what are the training steps\" | Flowchart | Forward → loss → backward → update. Boxes and arrows. |\n| \"how does TCP work\" | **Illustrative** | Two endpoints, numbered packets in flight, an ACK returning. |\n| \"TCP handshake sequence\" | Flowchart | SYN → SYN-ACK → ACK. Three boxes. |\n| \"explain the Krebs cycle\" / \"how does the event loop work\" | **HTML stepper** | Click through stages. Never a ring. |\n| \"how does a hash map work\" | **Illustrative** | Key falling through a funnel into one of N buckets. |\n| \"draw the database schema\" / \"show me the ERD\" | **mermaid.js** | `erDiagram` syntax. Not SVG. |\n\nThe illustrative route is the default for *\"how does X work\"* with no further qualification. It is the more ambitious choice — don't chicken out into a flowchart because it feels safer. Claude draws these well.\n\nDon't mix families in one diagram. If you need both, draw the intuition version first (build the mental model), then the reference version (fill in the precise labels) as a second tool call with prose between.\n\n**For complex topics, use multiple SVG calls** — break the explanation into a series of smaller diagrams rather than one dense diagram. Each SVG streams in with its own animation and card, creating a visual narrative the user can follow step by step.\n\n**Always add prose between diagrams** — never stack multiple SVG calls back-to-back without text. Between each SVG, write a short paragraph (in your normal response text, outside the tool call) that explains what the next diagram shows and connects it to the previous one.\n\n**Promise only what you deliver** — if your response text says \"here are three diagrams\", you must include all three tool calls. Never promise a follow-up diagram and omit it. If you can only fit one diagram, adjust your text to match. One complete diagram is better than three promised and one delivered.\n\n#### Flowchart\n\nFor sequential processes, cause-and-effect, decision trees.\n\n**Planning**: Size boxes to fit their text generously. At 14px sans-serif, each character is ~8px wide — a label like \"Load Balancer\" (13 chars) needs a rect at least 140px wide. When in doubt, make boxes wider and leave more space between them. Cramped diagrams are the most common failure mode.\n\n**Special characters are wider**: Chemical formulas (C₆H₁₂O₆), math notation (∑, ∫, √), subscripts/superscripts via <tspan> with dy/baseline-shift, and Unicode symbols all render wider than plain Latin characters. For labels containing formulas or special notation, add 30-50% extra width to your estimate. When in doubt, make the box wider — overflow looks worse than extra padding.\n\n**Spacing**: 60px minimum between boxes, 24px padding inside boxes, 12px between text and edges. Leave 10px gap between arrowheads and box edges. Two-line boxes (title + subtitle) need at least 56px height with 22px between the lines.\n\n**Vertical text placement**: Every `<text>` inside a box needs `dominant-baseline=\"central\"`, with y set to the *centre* of the slot it sits in. Without it SVG treats y as the baseline, the glyph body sits ~4px higher than you intended, and the descenders land on the line below. Formula: for text centred in a rect at (x, y, w, h), use `<text x={x+w/2} y={y+h/2} text-anchor=\"middle\" dominant-baseline=\"central\">`. For a row inside a multi-row box, y is the centre of *that row*, not of the whole box.\n\n**Layout**: Prefer single-direction flows (all top-down or all left-right). Keep diagrams simple — max 4-5 nodes per diagram. The widget is narrow (~680px) so complex layouts break.\n\n**When the prompt itself is over budget**: if the user lists 6+ components (\"draw me auth, products, orders, payments, gateway, queue\"), don't draw all of them in one pass — you'll get overlapping boxes and arrows through text, every time. Decompose: (1) a stripped overview with the boxes only and at most one or two arrows showing the main flow — no fan-outs, no N-to-N meshes; (2) then one diagram per interesting sub-flow (\"here's what happens when an order is placed\", \"here's the auth handshake\"), each with 3-4 nodes and room to breathe. Count the nouns before you draw. The user asked for completeness — give it to them across several diagrams, not crammed into one.\n\n**Cycles don't get drawn as rings.** If the last stage feeds back into the first (Krebs cycle, event loop, GC mark-and-sweep, TCP retransmit), your instinct is to place the stages around a circle. Don't. Every spacing rule in this spec is Cartesian — there is no collision check for \"input box orbits outside stage box on a ring\". You will get satellite boxes overlapping the stages they feed, labels sitting on the dashed circle, and tangential arrows that point nowhere. The ring is decoration; the loop is conveyed by the return arrow.\n\nBuild a stepper in HTML. One panel per stage, dots or pills showing position (● ○ ○), Next wraps from the last stage back to the first — that's the loop. Each panel owns its inputs and products: an event loop's pending callbacks live *inside* the Poll panel, not floating next to a box on a ring. Nothing collides because nothing shares the canvas. Only fall back to a linear SVG (stages in a row, curved `<path>` return arrow) when there's one input and one output total and no per-stage detail to show.\n\n**Feedback loops in linear flows:** Don't draw a physical arrow traversing the layout (it fights the flow direction and clips edges). Instead:\n- Small `↻` glyph + text near the cycle point: `<text>↻ returns to start</text>`\n- Or restructure the whole diagram as a circle if the cycle IS the point\n\n**Arrows:** A line from A to B must not cross any other box or label. If the direct path crosses something, route around with an L-bend: `<path d=\"M x1 y1 L x1 ymid L x2 ymid L x2 y2\"/>`. Place arrow labels in clear space, not on the midpoint.\n\nKeep all nodes the same height when they have the same content type (e.g. all single-line boxes = 44px, all two-line boxes = 56px).\n\n**Flowchart components** — use these patterns consistently:\n\n*Single-line node* (44px tall): title only. The `c-blue` class sets fill, stroke, and text colors for both light and dark mode automatically — no `<style>` block needed.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about T-cells')\">\n  <rect x=\"100\" y=\"20\" width=\"180\" height=\"44\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"190\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"central\">T-cells</text>\n</g>\n```\n\n*Two-line node* (56px tall): bold title + muted subtitle.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about dendritic cells')\">\n  <rect x=\"100\" y=\"20\" width=\"200\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"200\" y=\"38\" text-anchor=\"middle\" dominant-baseline=\"central\">Dendritic cells</text>\n  <text class=\"ts\" x=\"200\" y=\"56\" text-anchor=\"middle\" dominant-baseline=\"central\">Detect foreign antigens</text>\n</g>\n```\n\n*Connector* (no label — meaning is clear from source + target):\n```svg\n<line x1=\"200\" y1=\"76\" x2=\"200\" y2=\"120\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n*Neutral node* (gray, for start/end/generic steps): use `class=\"box\"` for auto-themed fill/stroke, and default text classes.\n\nMake all nodes clickable by default — wrap in `<g class=\"node\" onclick=\"sendPrompt('...')\">`. The hover effect is built in.\n\n#### Structural diagram\n\nFor concepts where physical or logical containment matters — things inside other things.\n\n**When to use**: The explanation depends on *where* processes happen. Examples: how a cell works (organelles inside a cell), how a file system works (blocks inside inodes inside partitions), how a building's HVAC works (ducts inside floors inside a building), how a CPU cache hierarchy works (L1 inside core, L2 shared).\n\n**Core idea**: Large rounded rects are containers. Smaller rects inside them are regions or sub-structures. Text labels describe what happens in each region. Arrows show flow between regions or from external inputs/outputs.\n\n**Container rules**:\n- Outermost container: large rounded rect, rx=20-24, lightest fill (50 stop), 0.5px stroke (600 stop). Label at top-left inside, 14px bold.\n- Inner regions: medium rounded rects, rx=8-12, next shade fill (100-200 stop). Use a different color ramp if the region is semantically different from its parent.\n- 20px minimum padding inside every container — text and inner regions must not touch the container edges.\n- Max 2-3 nesting levels. Deeper nesting gets unreadable at 680px width.\n\n**Layout**:\n- Place inner regions side by side within the container, with 16px+ gap between them.\n- External inputs (sunlight, water, data, requests) sit outside the container with arrows pointing in.\n- External outputs sit outside with arrows pointing out.\n- Keep external labels short — one word or a short phrase. Details go in the prose between diagrams.\n\n**What goes inside regions**: Text only — the region name (14px bold) and a short description of what happens there (12px). Don't put flowchart-style boxes inside regions. Don't draw illustrations or icons inside.\n\n**Structural container example** (library branch with two side-by-side regions, an internal labeled arrow, and an external input). ViewBox 700x320, horizontal layout, color classes handle both light and dark mode — no `<style>` block:\n```svg\n<defs>\n  <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n<!-- Outer container -->\n<g class=\"c-green\">\n  <rect x=\"120\" y=\"30\" width=\"560\" height=\"260\" rx=\"20\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"400\" y=\"62\" text-anchor=\"middle\">Library branch</text>\n  <text class=\"ts\" x=\"400\" y=\"80\" text-anchor=\"middle\">Main floor</text>\n</g>\n<!-- Inner: Circulation desk -->\n<g class=\"c-teal\">\n  <rect x=\"150\" y=\"100\" width=\"220\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"260\" y=\"130\" text-anchor=\"middle\">Circulation desk</text>\n  <text class=\"ts\" x=\"260\" y=\"148\" text-anchor=\"middle\">Checkouts, returns</text>\n</g>\n<!-- Inner: Reading room -->\n<g class=\"c-amber\">\n  <rect x=\"450\" y=\"100\" width=\"210\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"555\" y=\"130\" text-anchor=\"middle\">Reading room</text>\n  <text class=\"ts\" x=\"555\" y=\"148\" text-anchor=\"middle\">Seating, reference</text>\n</g>\n<!-- Arrow between inner boxes with label -->\n<text class=\"ts\" x=\"410\" y=\"175\" text-anchor=\"middle\">Books</text>\n<line x1=\"370\" y1=\"185\" x2=\"448\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n<!-- External input: New acq. — text vertically aligned with arrow -->\n<text class=\"ts\" x=\"40\" y=\"185\" text-anchor=\"middle\">New acq.</text>\n<line x1=\"75\" y1=\"185\" x2=\"118\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n**Color in structural diagrams**: Nested regions need distinct ramps — `c-{ramp}` classes resolve to fixed fill/stroke stops, so the same class on parent and child gives identical fills and flattens the hierarchy. Pick a *related* ramp for inner structures (e.g. Green for the library envelope, Teal for the circulation desk inside it) and a *contrasting* ramp for a region that does something functionally different (e.g. Amber for the reading room). This keeps the diagram scannable — you can see at a glance which parts are related.\n\n**Database schemas / ERDs — use mermaid.js, not SVG.** A schema table is a header plus N field rows plus typed columns plus crow's-foot connectors. That is a text-layout problem and hand-placing it in SVG fails the same way every time. mermaid.js `erDiagram` does layout, cardinality, and connector routing for free. ERDs only; everything else stays in SVG.\n\n```\nerDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has\n  USERS {\n    uuid id PK\n    string email\n    timestamp created_at\n  }\n  POSTS {\n    uuid id PK\n    uuid user_id FK\n    string title\n  }\n```\n\nUse HTML for ERDs. Import and initialize in a `<script type=\"module\">`. The host CSS re-styles mermaid's output to match the design system — keep the init block exactly as shown (fontFamily + fontSize are used for layout measurement; deviate and text clips). After rendering, replace sharp-cornered entity `<path>` elements with rounded `<rect rx=\"8\">` to match the design system, and strip borders from attribute rows (only the outer container and header row keep visible borders — alternating fill colors separate the rows):\n```html\n<style>\n#erd svg.erDiagram .divider path { stroke-opacity: 0.5; }\n#erd svg.erDiagram .row-rect-odd path,\n#erd svg.erDiagram .row-rect-odd rect,\n#erd svg.erDiagram .row-rect-even path,\n#erd svg.erDiagram .row-rect-even rect { stroke: none !important; }\n</style>\n<div id=\"erd\"></div>\n<script type=\"module\">\nimport mermaid from 'https://esm.sh/mermaid@11/dist/mermaid.esm.min.mjs';\nconst dark = matchMedia('(prefers-color-scheme: dark)').matches;\nawait document.fonts.ready;\nmermaid.initialize({\n  startOnLoad: false,\n  theme: 'base',\n  fontFamily: '\"Anthropic Sans\", sans-serif',\n  themeVariables: {\n    darkMode: dark,\n    fontSize: '13px',\n    fontFamily: '\"Anthropic Sans\", sans-serif',\n    lineColor: dark ? '#9c9a92' : '#73726c',\n    textColor: dark ? '#c2c0b6' : '#3d3d3a',\n  },\n});\nconst { svg } = await mermaid.render('erd-svg', `erDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has`);\ndocument.getElementById('erd').innerHTML = svg;\n\n// Round only the outermost entity box corners (not internal row stripes)\ndocument.querySelectorAll('#erd svg.erDiagram .node').forEach(node => {\n  const firstPath = node.querySelector('path[d]');\n  if (!firstPath) return;\n  const d = firstPath.getAttribute('d');\n  const nums = d.match(/-?[\\d.]+/g)?.map(Number);\n  if (!nums || nums.length < 8) return;\n  const xs = [nums[0], nums[2], nums[4], nums[6]];\n  const ys = [nums[1], nums[3], nums[5], nums[7]];\n  const x = Math.min(...xs), y = Math.min(...ys);\n  const w = Math.max(...xs) - x, h = Math.max(...ys) - y;\n  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');\n  rect.setAttribute('x', x); rect.setAttribute('y', y);\n  rect.setAttribute('width', w); rect.setAttribute('height', h);\n  rect.setAttribute('rx', '8');\n  for (const a of ['fill', 'stroke', 'stroke-width', 'class', 'style']) {\n    if (firstPath.hasAttribute(a)) rect.setAttribute(a, firstPath.getAttribute(a));\n  }\n  firstPath.replaceWith(rect);\n});\n\n// Strip borders from attribute rows (mermaid v11: .row-rect-odd / .row-rect-even)\ndocument.querySelectorAll('#erd svg.erDiagram .row-rect-odd path, #erd svg.erDiagram .row-rect-even path').forEach(p => {\n  p.setAttribute('stroke', 'none');\n});\n</script>\n```\n\nWorks identically for `classDiagram` — swap the diagram source; init stays the same.\n\n#### Illustrative diagram\n\nFor building *intuition*. The subject might be physical (an engine, a lung) or completely abstract (attention, recursion, gradient descent) — what matters is that a spatial drawing conveys the mechanism better than labelled boxes would. These are the diagrams that make someone go \"oh, *that's* what it's doing.\"\n\n**Two flavours, same rules:**\n- **Physical subjects** get drawn as simplified versions of themselves. Cross-sections, cutaways, schematics. A water heater is a tank with a burner underneath. A lung is a branching tree in a cavity. You're drawing *the thing*, stylised.\n- **Abstract subjects** get drawn as *spatial metaphors*. You're inventing a shape for something that doesn't have one — but the shape should make the mechanism obvious. A transformer is a stack of horizontal slabs with a bright thread of attention connecting tokens across layers. A hash function is a funnel scattering items into a row of buckets. The call stack is literally a stack of frames growing and shrinking. Embeddings are dots clustering in space. The metaphor *is* the explanation.\n\nThis is the most ambitious diagram type and the one Claude is best at. Lean into it. Use colour for intensity (a hot attention weight glows amber, a cold one stays gray). Use repetition for scale (many small circles = many parameters).\n\n**Prefer interactive over static.** A static cross-section is a good answer; a cross-section you can *operate* is a great one. The decision rule: if the real-world system has a control, give the diagram that control. A water heater has a thermostat — so give the user a slider that shifts the hot/cold boundary, a toggle that fires the burner and animates convection currents. An LLM has input tokens — let the user click one and watch the attention weights re-fan. A cache has a hit rate — let them drag it and watch latency change. Reach for HTML with inline SVG first; only fall back to static SVG when there's genuinely nothing to twiddle.\n\n**When NOT to use**: The user is asking for a *reference*, not an *intuition*. \"What are the components of a transformer\" wants labelled boxes — that's a structural diagram. \"Walk me through our CI pipeline\" wants sequential steps — that's a flowchart. Also skip this when the metaphor would be arbitrary rather than revealing: drawing \"the cloud\" as a cloud shape or \"microservices\" as little houses doesn't teach anything about how they work. If the drawing doesn't make the *mechanism* clearer, don't draw it.\n\n**Fidelity ceiling**: These are schematics, not illustrations. Every shape should read at a glance. If a `<path>` needs more than ~6 segments to draw, simplify it. A tank is a rounded rect, not a Bézier portrait of a tank. A flame is three triangles, not a fire. Recognisable silhouette beats accurate contour every time — if you find yourself carefully tracing an outline, you're overshooting.\n\n**Core principle**: Draw the mechanism, not a diagram *about* the mechanism. Spatial arrangement carries the meaning; labels annotate. A good illustrative diagram works with the labels removed.\n\n**What changes from flowchart/structural rules**:\n\n- **Shapes are freeform.** Use `<path>`, `<ellipse>`, `<circle>`, `<polygon>`, and curved lines to represent real forms. A water tank is a tall rect with rounded bottom. A heart valve is a pair of curved paths. A circuit trace is a thin polyline. You are not limited to rounded rects.\n- **Layout follows the subject's geometry**, not a grid. If the thing is tall and narrow (a water heater, a thermometer), the diagram is tall and narrow. If it's wide and flat (a PCB, a geological cross-section), the diagram is wide. Let the subject dictate proportions within the 680px viewBox width.\n- **Color encodes intensity**, not category. For physical subjects: warm ramps (amber, coral, red) = heat/energy/pressure, cool ramps (blue, teal) = cold/calm, gray = inert structure. For abstract subjects: warm = active/high-weight/attended-to, cool or gray = dormant/low-weight/ignored. A user should be able to glance at the diagram and see *where the action is* without reading a single label.\n- **Layering and overlap are encouraged — for shapes.** Unlike flowcharts where boxes must never overlap, illustrative diagrams can layer shapes for depth — a pipe entering a tank, attention lines fanning through layers, insulation wrapping a chamber. Use z-ordering (later in source = on top) deliberately.\n- **Text is the exception — never let a stroke cross it.** The overlap permission is for shapes only. Every label needs 8px of clear air between its baseline/cap-height and the nearest stroke. Don't solve this with a background rect — solve it by *placing the text somewhere else*. Labels go in the quiet regions: above the drawing, below it, in the margin with a leader line, or in the gap between two fans of lines. If there is no quiet region, the drawing is too dense — remove something or split into two diagrams.\n- **Small shape-based indicators are allowed** when they communicate physical state. Triangles for flames. Circles for bubbles or particles. Wavy lines for steam or heat radiation. Parallel lines for vibration. These aren't decoration — they tell the user what's happening physically. Keep them simple: basic SVG primitives, not detailed illustrations.\n- **One gradient per diagram is permitted** — the only exception to the global no-gradients rule — and only to show a *continuous* physical property across a region (temperature stratification in a tank, pressure drop along a pipe, concentration in a solution). It must be a single `<linearGradient>` between exactly two stops from the same colour ramp. No radial gradients, no multi-stop fades, no gradient-as-aesthetic. If two stacked flat-fill rects communicate the same thing, do that instead.\n- **Animation is permitted for interactive HTML versions.** Use CSS `@keyframes` animating only `transform` and `opacity`. Keep loops under ~2s, and wrap every animation in `@media (prefers-reduced-motion: no-preference)` so it's opt-out by default. Animations should show how the system *behaves* — convection current, rotation, flow — not just move for the sake of moving. No physics engines or heavy libraries.\n\nAll core rules still apply (viewBox 680px, dark mode mandatory, 14/12px text, pre-built classes, arrow marker, clickable nodes).\n\n**Label placement**:\n- Place labels *outside* the drawn object when possible, with a thin leader line (0.5px dashed, `var(--t)` stroke) pointing to the relevant part. This keeps the illustration uncluttered.\n- For large internal zones (like temperature regions in a tank), labels can sit inside if there's ample clear space — minimum 20px from any edge.\n- External labels sit in the margin area or above/below the object. **Pick one side for labels and put them all there** — at 680px wide you don't have room for a drawing *and* label columns on both sides. Reserve at least 140px of horizontal margin on the label side. Labels on the left are the ones that clip: `text-anchor=\"end\"` extends leftward from x, and with multi-line callouts it's very easy to blow past x=0 without noticing. Default to right-side labels with `text-anchor=\"start\"` unless the subject's geometry forces otherwise. Use `class=\"ts\"` (12px) for callouts, `class=\"th\"` (14px medium) for major component names.\n\n**Composition approach**:\n1. Start with the main object's silhouette — the largest shape, centered in the viewBox.\n2. Add internal structure: chambers, pipes, membranes, mechanical parts.\n3. Add external connections: pipes entering/exiting, arrows showing flow direction, labels for inputs and outputs.\n4. Add state indicators last: color fills showing temperature/pressure/concentration, small animated elements showing movement or energy.\n5. Leave generous whitespace around the object for labels — don't crowd annotations against the viewBox edges.\n\n**Static vs interactive**: Static cutaways and cross-sections work best as pure SVG. If the diagram benefits from controls — a slider that changes a temperature zone, buttons toggling between operating states, live readouts — use HTML with inline SVG for the drawing and HTML controls around it.\n\n**Illustrative diagram example** — interactive water heater cross-section with vivid physical-realism colors, animated convection currents, and controls. Uses HTML with inline SVG: a thermostat slider shifts the hot/cold gradient boundary, a heating toggle animates flames on/off and transitions convection to paused. viewBox is 680x560; tank occupies x=180..440, leaving 140px+ of right margin for labels. Smooth convection paths use `stroke-dasharray:5 5` at ~1.6s for a gentle flow feel. A warm-glow overlay on the hot zone pulses subtly when heating is on. Flame shapes use warm gradient fills and clean opacity transitions. Labels sit along the right margin with leader lines.\n```html\n<style>\n  @keyframes conv { to { stroke-dashoffset: -20; } }\n  @keyframes flicker { 0%,100%{opacity:1} 50%{opacity:.82} }\n  @keyframes glow { 0%,100%{opacity:.3} 50%{opacity:.6} }\n  .conv { stroke-dasharray:5 5; animation: conv var(--dur,1.6s) linear infinite; transition: opacity .5s; }\n  .conv.off { opacity:0; animation-play-state:paused; }\n  #flames path { transition: opacity .5s; }\n  #flames.off path { opacity:0; animation:none; }\n  #flames path:nth-child(odd)  { animation: flicker .6s ease-in-out infinite; }\n  #flames path:nth-child(even) { animation: flicker .8s ease-in-out infinite .15s; }\n  #warm-glow { animation: glow 3s ease-in-out infinite; transition: opacity .5s; }\n  #warm-glow.off { opacity:0; animation:none; }\n  .toggle-track { position:relative;width:32px;height:18px;background:var(--color-border-secondary);border-radius:9px;transition:background .2s;display:inline-block; }\n  .toggle-track:has(input:checked) { background:var(--color-text-info); }\n  #heat-toggle:checked + span { transform:translateX(14px); }\n</style>\n<svg width=\"100%\" viewBox=\"0 0 680 560\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker>\n    <linearGradient id=\"tg\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop id=\"gh\" offset=\"40%\" stop-color=\"#E8593C\" stop-opacity=\"0.45\"/>\n      <stop id=\"gc\" offset=\"40%\" stop-color=\"#3B8BD4\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n    <linearGradient id=\"fg1\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#E85D24\"/><stop offset=\"60%\" stop-color=\"#F2A623\"/><stop offset=\"100%\" stop-color=\"#FCDE5A\"/></linearGradient>\n    <linearGradient id=\"fg2\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#D14520\"/><stop offset=\"50%\" stop-color=\"#EF8B2C\"/><stop offset=\"100%\" stop-color=\"#F9CB42\"/></linearGradient>\n    <linearGradient id=\"pipe-h\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#D05538\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#D05538\" stop-opacity=\".08\"/></linearGradient>\n    <linearGradient id=\"pipe-c\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#3B8BD4\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#3B8BD4\" stop-opacity=\".08\"/></linearGradient>\n    <clipPath id=\"tc\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\"/></clipPath>\n  </defs>\n  <!-- Tank fill -->\n  <g clip-path=\"url(#tc)\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" fill=\"url(#tg)\"/></g>\n  <!-- Warm glow overlay (pulses when heating) -->\n  <g clip-path=\"url(#tc)\"><rect id=\"warm-glow\" x=\"180\" y=\"55\" width=\"260\" height=\"160\" fill=\"#E8593C\" opacity=\".3\"/></g>\n  <!-- Tank shell (double stroke for solidity) -->\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"2.5\" opacity=\".25\"/>\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"1\"/>\n  <!-- Hot pipe out (top right) -->\n  <rect x=\"370\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-h)\"/>\n  <path d=\"M378 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <!-- Cold pipe in + dip tube (top left) -->\n  <rect x=\"234\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-c)\"/>\n  <path d=\"M242 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <path d=\"M242 55V395\" stroke=\"var(--t)\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\".5\"/>\n  <!-- Convection currents (curved paths at different speeds) -->\n  <path class=\"conv\" style=\"--dur:1.6s\" fill=\"none\" stroke=\"#D05538\" stroke-width=\"1\" opacity=\".5\" d=\"M350 380C355 320,365 240,358 140Q355 110,340 100\"/>\n  <path class=\"conv\" style=\"--dur:2.1s\" fill=\"none\" stroke=\"#C04828\" stroke-width=\".8\" opacity=\".35\" d=\"M300 390C308 340,320 260,315 170Q312 130,298 115\"/>\n  <path class=\"conv\" style=\"--dur:2.6s\" fill=\"none\" stroke=\"#B05535\" stroke-width=\".7\" opacity=\".3\" d=\"M380 370C382 310,388 230,382 150Q378 120,365 110\"/>\n  <!-- Burner bar -->\n  <rect x=\"188\" y=\"454\" width=\"244\" height=\"5\" rx=\"2\" fill=\"var(--t)\" opacity=\".6\"/>\n  <rect x=\"220\" y=\"462\" width=\"180\" height=\"6\" rx=\"3\" fill=\"var(--t)\" opacity=\".3\"/>\n  <!-- Flames (gradient-filled organic shapes) -->\n  <g id=\"flames\">\n    <path d=\"M240,454Q248,430 252,438Q256,424 260,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M278,454Q285,426 290,434Q295,418 300,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M320,454Q328,428 333,436Q338,420 342,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M360,454Q367,430 371,438Q375,422 380,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M398,454Q404,434 408,440Q412,428 416,454Z\" fill=\"url(#fg1)\"/>\n  </g>\n  <!-- Labels (right margin) -->\n  <g class=\"node\" onclick=\"sendPrompt('How does hot water exit the tank?')\">\n    <line class=\"leader\" x1=\"386\" y1=\"34\" x2=\"468\" y2=\"70\"/><circle cx=\"386\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"74\">Hot water outlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the cold water inlet work?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"34\" x2=\"468\" y2=\"140\"/><circle cx=\"250\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"144\">Cold water inlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the dip tube do?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"260\" x2=\"468\" y2=\"220\"/><circle cx=\"250\" cy=\"260\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"224\">Dip tube</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the thermostat control?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"250\" x2=\"468\" y2=\"300\"/><circle cx=\"440\" cy=\"250\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"304\">Thermostat</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What material is the tank made of?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"380\" x2=\"468\" y2=\"380\"/><circle cx=\"440\" cy=\"380\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"384\">Tank wall</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the gas burner heat water?')\">\n    <line class=\"leader\" x1=\"432\" y1=\"454\" x2=\"468\" y2=\"454\"/><circle cx=\"432\" cy=\"454\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"458\">Heating element</text></g>\n</svg>\n<div style=\"display:flex;align-items:center;gap:16px;margin:12px 0 0;font-size:13px;color:var(--color-text-secondary)\">\n  <label style=\"display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none\">\n    <span class=\"toggle-track\">\n      <input type=\"checkbox\" id=\"heat-toggle\" checked onchange=\"toggleHeat(this.checked)\" style=\"position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;margin:0\">\n      <span style=\"position:absolute;top:2px;left:2px;width:14px;height:14px;background:#fff;border-radius:50%;transition:transform .2s;pointer-events:none\"></span>\n    </span>\n    Heating\n  </label>\n  <span>Thermostat</span>\n  <input type=\"range\" id=\"temp-slider\" min=\"10\" max=\"90\" value=\"40\" style=\"flex:1\" oninput=\"setTemp(this.value)\">\n  <span id=\"temp-label\" style=\"min-width:36px;text-align:right\">40%</span>\n</div>\n<script>\nfunction setTemp(v) {\n  document.getElementById('gh').setAttribute('offset', v+'%');\n  document.getElementById('gc').setAttribute('offset', v+'%');\n  document.getElementById('temp-label').textContent = v+'%';\n}\nfunction toggleHeat(on) {\n  document.getElementById('flames').classList.toggle('off', !on);\n  document.getElementById('warm-glow').classList.toggle('off', !on);\n  document.querySelectorAll('.conv').forEach(p => p.classList.toggle('off', !on));\n}\n</script>\n```\n\n**Illustrative example — abstract subject** (attention in a transformer). Same rules, no physical object. A row of tokens at the bottom, one query token highlighted, weight-scaled lines fanning to every other token. Caption sits below the fan — clear of every stroke — not inside it.\n```svg\n<rect class=\"c-purple\" x=\"60\" y=\"40\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"80\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"120\" width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<text class=\"ts\" x=\"72\" y=\"57\" >Layer 3</text>\n<text class=\"ts\" x=\"72\" y=\"97\" >Layer 2</text>\n<text class=\"ts\" x=\"72\" y=\"137\">Layer 1</text>\n\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"116\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.25\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"228\" y2=\"146\" stroke-width=\"1.5\" opacity=\"0.4\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"340\" y2=\"146\" stroke-width=\"4\"   opacity=\"1.0\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"452\" y2=\"146\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"564\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.2\"/>\n\n<g class=\"node\" onclick=\"sendPrompt('What do the attention weights mean?')\">\n  <rect class=\"c-gray\"  x=\"80\"  y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"192\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-amber\" x=\"304\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"1\"/>\n  <rect class=\"c-gray\"  x=\"416\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"528\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <text class=\"ts\" x=\"116\" y=\"252\" text-anchor=\"middle\">the</text>\n  <text class=\"ts\" x=\"228\" y=\"252\" text-anchor=\"middle\">cat</text>\n  <text class=\"th\" x=\"340\" y=\"252\" text-anchor=\"middle\">sat</text>\n  <text class=\"ts\" x=\"452\" y=\"252\" text-anchor=\"middle\">on</text>\n  <text class=\"ts\" x=\"564\" y=\"252\" text-anchor=\"middle\">the</text>\n</g>\n\n<text class=\"ts\" x=\"340\" y=\"300\" text-anchor=\"middle\">Line thickness = attention weight from \"sat\" to each token</text>\n```\n\nNote what's *not* here: no boxes labelled \"multi-head attention\", no arrows labelled \"Q/K/V\". Those belong in the structural diagram. This one is about the *feeling* of attention — one token looking at every other token with varying intensity.\n\nThese are starting points, not ceilings. For the water heater: add a thermostat slider, animate the convection current, toggle heating vs standby. For the attention diagram: let the user click any token to become the query, scrub through layers, animate the weights settling. The goal is always to *show* how the thing works, not just *label* it.\n\n\n## UI components\n\n### Aesthetic\nFlat, clean, white surfaces. Minimal 0.5px borders. Generous whitespace. No gradients, no shadows (except functional focus rings). Everything should feel native to claude.ai — like it belongs on the page, not embedded from somewhere else.\n\n### Tokens\n- Borders: always `0.5px solid var(--color-border-tertiary)` (or `-secondary` for emphasis)\n- Corner radius: `var(--border-radius-md)` for most elements, `var(--border-radius-lg)` for cards\n- Cards: white bg (`var(--color-background-primary)`), 0.5px border, radius-lg, padding 1rem 1.25rem\n- Form elements (input, select, textarea, button, range slider) are pre-styled — write bare tags. Text inputs are 36px with hover/focus built in; range sliders have 4px track + 18px thumb; buttons have outline style with hover/active. Only add inline styles to override (e.g., different width).\n- Buttons: pre-styled with transparent bg, 0.5px border-secondary, hover bg-secondary, active scale(0.98). If it triggers sendPrompt, append a ↗ arrow.\n- **Round every displayed number.** JS float math leaks artifacts — `0.1 + 0.2` gives `0.30000000000000004`, `7 * 1.1` gives `7.700000000000001`. Any number that reaches the screen (slider readouts, stat card values, axis labels, data-point labels, tooltips, computed totals) must go through `Math.round()`, `.toFixed(n)`, or `Intl.NumberFormat`. Pick the precision that makes sense for the context — integers for counts, 1–2 decimals for percentages, `toLocaleString()` for currency. For range sliders, also set `step=\"1\"` (or step=\"0.1\" etc.) so the input itself emits round values.\n- Spacing: use rem for vertical rhythm (1rem, 1.5rem, 2rem), px for component-internal gaps (8px, 12px, 16px)\n- Box-shadows: none, except `box-shadow: 0 0 0 Npx` focus rings on inputs\n\n### Metric cards\nFor summary numbers (revenue, count, percentage) — surface card with muted 13px label above, 24px/500 number below. `background: var(--color-background-secondary)`, no border, `border-radius: var(--border-radius-md)`, padding 1rem. Use in grids of 2-4 with `gap: 12px`. Distinct from raised cards (which have white bg + border).\n\n### Layout\n- Editorial (explanatory content): no card wrapper, prose flows naturally\n- Card (bounded objects like a contact record, receipt): single raised card wraps the whole thing\n- Don't put tables here — output them as markdown in your response text\n\n**Grid overflow:** `grid-template-columns: 1fr` has `min-width: auto` by default — children with large min-content push the column past the container. Use `minmax(0, 1fr)` to clamp.\n\n**Table overflow:** Tables with many columns auto-expand past `width: 100%` if cell contents exceed it. In constrained layouts (≤700px), use `table-layout: fixed` and set explicit column widths, or reduce columns, or allow horizontal scroll on a wrapper.\n\n### Mockup presentation\nContained mockups — mobile screens, chat threads, single cards, modals, small UI components — should sit on a background surface (`var(--color-background-secondary)` container with `border-radius: var(--border-radius-lg)` and padding, or a device frame) so they don't float naked on the widget canvas. Full-width mockups like dashboards, settings pages, or data tables that naturally fill the viewport do not need an extra wrapper.\n\n### 1. Interactive explainer — learn how something works\n*\"Explain how compound interest works\" / \"Teach me about sorting algorithms\"*\n\nUse HTML for the interactive controls — sliders, buttons, live state displays, charts. Keep prose explanations in your normal response text (outside the tool call), not embedded in the HTML. No card wrapper. Whitespace is the container.\n\n```html\n<div style=\"display: flex; align-items: center; gap: 12px; margin: 0 0 1.5rem;\">\n  <label style=\"font-size: 14px; color: var(--color-text-secondary);\">Years</label>\n  <input type=\"range\" min=\"1\" max=\"40\" value=\"20\" id=\"years\" style=\"flex: 1;\" />\n  <span style=\"font-size: 14px; font-weight: 500; min-width: 24px;\" id=\"years-out\">20</span>\n</div>\n\n<div style=\"display: flex; align-items: baseline; gap: 8px; margin: 0 0 1.5rem;\">\n  <span style=\"font-size: 14px; color: var(--color-text-secondary);\">£1,000 →</span>\n  <span style=\"font-size: 24px; font-weight: 500;\" id=\"result\">£3,870</span>\n</div>\n\n<div style=\"margin: 2rem 0; position: relative; height: 240px;\">\n  <canvas id=\"chart\"></canvas>\n</div>\n```\n\nUse `sendPrompt()` to let users ask follow-ups: `sendPrompt('What if I increase the rate to 10%?')`\n\n### 2. Compare options — decision making\n*\"Compare pricing and features of these products\" / \"Help me choose between React and Vue\"*\n\nUse HTML. Side-by-side card grid for options. Highlight differences with semantic colors. Interactive elements for filtering or weighting.\n\n- Use `repeat(auto-fit, minmax(160px, 1fr))` for responsive columns\n- Each option in a card. Use badges for key differentiators.\n- Add `sendPrompt()` buttons: `sendPrompt('Tell me more about the Pro plan')`\n- Don't put comparison tables inside this tool — output them as regular markdown tables in your response text instead. The tool is for the visual card grid only.\n- When one option is recommended or \"most popular\", accent its card with `border: 2px solid var(--color-border-info)` only (2px is deliberate — the only exception to the 0.5px rule, used to accent featured items) — keep the same background and border as the other cards. Add a small badge (e.g. \"Most popular\") above or inside the card header using `background: var(--color-background-info); color: var(--color-text-info); font-size: 12px; padding: 4px 12px; border-radius: var(--border-radius-md)`.\n\n### 3. Data record — bounded UI object\n*\"Show me a Salesforce contact card\" / \"Create a receipt for this order\"*\n\nUse HTML. Wrap the entire thing in a single raised card. All content is sans-serif since it's pure UI. Use an avatar/initials circle for people (see example below).\n\n```html\n<div style=\"background: var(--color-background-primary); border-radius: var(--border-radius-lg); border: 0.5px solid var(--color-border-tertiary); padding: 1rem 1.25rem;\">\n  <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 16px;\">\n    <div style=\"width: 44px; height: 44px; border-radius: 50%; background: var(--color-background-info); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 14px; color: var(--color-text-info);\">MR</div>\n    <div>\n      <p style=\"font-weight: 500; font-size: 15px; margin: 0;\">Maya Rodriguez</p>\n      <p style=\"font-size: 13px; color: var(--color-text-secondary); margin: 0;\">VP of Engineering</p>\n    </div>\n  </div>\n  <div style=\"border-top: 0.5px solid var(--color-border-tertiary); padding-top: 12px;\">\n    <table style=\"width: 100%; font-size: 13px;\">\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Email</td><td style=\"text-align: right; padding: 4px 0; color: var(--color-text-info);\">m.rodriguez@acme.com</td></tr>\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Phone</td><td style=\"text-align: right; padding: 4px 0;\">+1 (415) 555-0172</td></tr>\n    </table>\n  </div>\n</div>\n```\n",
      "uuid": "2801afb2-a086-4255-b7e7-c54cef75ac39"
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

Now I have all I need. Let me plan the analysis carefully.

**The three words:**
- **exhibit** — L. *exhibēre* = *ex-* ("out") + *habēre* ("to hold") → "to hold out/forth" → to display, present
- **inhibit** — L. *inhibēre* = *in-* ("in, into, against") + *habēre* ("to hold") → "to hold in/back" → to restrain, suppress
- **prohibit** — L. *prohibēre* = *pro-* ("before, in front of") + *habēre* ("to hold") → "to hold before" → to prevent, forbid officially
  
The root *habēre* means "to hold," and these three prefixes create distinct directional meanings. I can map them on two axes: direction of force running from inward to outward, and authority level ranging from personal/psychological to institutional/legal. This positions exhibit on the far right (outward), inhibit as inward with personal restraint, and prohibit as inward but with formal authority.

I'm picturing this through a shared hand metaphor—the same holding gesture but oriented differently. Exhibit is an open hand extending outward to present something, inhibit is a hand pressing inward to restrain oneself, and prohibit is a raised palm blocking others. Now I'm working through concrete examples: exhibit showing anxiety manifesting as perfectionism or a museum displaying artifacts, inhibit capturing how fear prevents someone from acting despite wanting to.

The key distinction is that inhibit works on internal suppression while prohibit is external authority—you can feel inhibited by shyness but you can't be prohibited by it. And when laws are involved, inhibit suggests dampening while prohibit means an outright ban.

Now I'm setting up two visuals to anchor these differences.

For the first one, I'm creating an interactive scatter plot with two axes—direction ranging from inward to outward, and authority from personal to institutional—where clicking on each of the three word dots reveals specific usage scenarios.

For the second visual, I'm sketching out three side-by-side panels with hand and figure illustrations that show the metaphorical difference: one figure extending their hand outward to present something, another pulling inward against themselves, and a third being blocked by an external force.

Building the interactive elements now... Writing SVG metaphor panels... Writing SVG code... Writing the interactive visualization... Now I'm visualizing the hand metaphor panels—each one showing a different gesture to represent the three words, with clickable areas that reveal the etymology. I'm setting up the coordinate system for the scatter plot with specific pixel positions for each word based on their normalized axis values, calculating the layout dimensions and margins to fit everything cleanly. I'm setting up the axis labels to frame the conceptual space—institutional versus personal on the vertical axis, inward versus outward on the horizontal. Now I'm building an interactive HTML widget where clicking each dot opens a panel with etymology and contextual information, using the color scheme I've established for each category.

For the second visual, I'm creating an SVG with three gesture panels showing how the hand physically embodies each concept—exhibit as an open palm extending outward, inhibit as fingers curling inward to restrain, and prohibit as a blocking gesture. I'll make these clickable too to reveal the etymological breakdown. I'm settling on the hand gesture approach for the three panels—exhibit showing an open palm with a circle, inhibit with a hand pressing down on a resisting circle, and prohibit with a stop gesture blocking passage. Now I'll write the code to render these visuals along with the positional map and usage guidance.

Building the SVG scatter plot... Writing the SVG visualization... Writing SVG coordinates... Writing the SVG structure... Writing SVG nodes... Writing the info cards... I'm deciding between a pure SVG approach with foreignObject or keeping HTML separate from the SVG plot. HTML with an SVG for the visualization and div cards below feels cleaner. Now I'm working through the label placement — the etymology labels need to avoid overlapping with the axis line, so I'll conditionally position them above the dots when they're in the bottom half and below when they're in the top half.

For the axis labels themselves, I'm simplifying to directional indicators at the cardinal points: "↑ institutional / legal" at the top, "personal / biological" at the bottom, "outward →" on the right, and "← inward" on the left. I'll keep everything horizontal and within the safe viewing area, then finalize the SVG coordinates.

Writing SVG layout... I'm concerned the top label might get clipped at y=18, but checking the viewBox starting at 0, it should have enough space. Let me recalibrate the entire layout to be more consistent—adjusting the SVG height to 380, repositioning the plot area with proper margins, and placing the axis labels more carefully so "institutional / legal" sits at the top of the Y axis and "personal / biological" extends below it. Now I'm calculating the exact positions for each word on the plot—exhibit lands around x=572 which might push it too far right, so I need to check if the text will overflow the viewBox boundary.

Writing the SVG markup... Writing the diagram nodes... Writing SVG diagram nodes... Building the info cards... Building the interactive card display...

I'm working through the positioning of the inhibit label and circle on the plot — the circle sits at y=237 with a 16px radius, the label text below at y=259, and I need to make sure everything fits properly above the axis at y=285. I'm refining the vertical positioning with baseline considerations—accounting for text ascenders and descenders, I'll place "inhibit" at y=214 for about 7px clearance above the circle, and "hold IN" at y=262 for 9px below the circle edge. Now checking the "prohibit" label positioning with its circle centered at y=69. I'm running into spacing conflicts with the labels overlapping the circles, so I need to expand the canvas. Let me increase the SVG viewBox to 360 pixels tall and recalculate the axis positions to give everything more breathing room.

Now I'm positioning the three words across the plot area and checking their clearance from the circles—the prohibit label at y=57 is still too tight with only a 1-pixel gap, so I'll either shrink the circles to r=12 or push the labels further away.

With smaller circles at r=12 and prohibit moved to y=65, I get better spacing for that word, but the secondary labels like "hold BEFORE" still overlap the circles by about 5 pixels. Rather than keep fighting with overlapping text, I should simplify the design—just place the word names directly on the dots in the SVG and skip the additional gist text, letting users discover that information elsewhere.

For positioning, I'll adapt based on vertical space: put prohibit's label below its dot since it's near the top, inhibit's label above since it's near the bottom, and exhibit's label above in the middle. Let me recalculate the spacing with this single-label approach to make sure the gaps work out. I've settled on a radius of 10 for the circles, which gives better spacing. Now I'm locking in the final coordinates for the visualization: the SVG viewBox, axis positions, and the exact placements for each word label relative to its circle. I'm also checking that the Y-axis label at the top won't overlap with the prohibit circle. I'm moving on to the second visual now—a three-panel illustration showing hands holding a ball in different ways to represent the three word meanings. Each panel will be about 220 pixels wide within a 680-pixel viewbox, with the first showing an extended arm and rightward arrow for "exhibit," the second depicting a hand pressing down on the ball for "inhibit," and the third showing a raised arm for "prohibit." Each panel gets its own title in color, an etymology breakdown, and a drawing that visually reinforces the Latin root meaning.

Now I'm sketching out the hand and arm shapes using simple SVG elements—rounded rectangles for the arms, small ovals for the palms, and circles for the balls themselves. I'm positioning the exhibit hand to extend rightward with the ball resting on the palm, then adding an arrow pointing right to show the outward motion.

Building the SVG hand elements... Writing SVG shapes... I'm simplifying this to three core elements per panel: a colored circle representing the object being held, an arm or hand showing the direction of interaction, and a directional arrow indicating the action. For the exhibit panel, the ball extends outward to the right, while the inhibit panel shows a hand pressing down from above onto the circle.

Writing SVG code... Writing the SVG panels... I'm laying out the second panel with a stick figure pressing down on an object to represent inhibition—the arm extends straight down toward a purple circle at hip level, with a hand shape making contact and an arrow indicating downward force being resisted. visual might be: the figure holds the ball AGAINST the body (clutching it in), preventing it from escaping. Or: the figure with one arm stretched back, holding back the ball.

You know what? Let me just draw it cleanly:

Panel 2 inhibit: The figure is pressing a ball down onto the ground. Arrows show the ball trying to escape (up) but being pushed down.

- Arm: from (340, 85) to (340, 125) (straight down)
- Hand: a small rounded rect at y=120..130 
- Ball: cx=340, cy=140, r=10, fill=purple
- Ground: line at y=152
- Arrow: upward from ball (cx=340, y=125 to y=105) with arrow at top - showing what the ball WANTS to do but is prevented

Panel 3 prohibit: The figure raises an arm as a barrier with palm flat facing right to block something. I'll position the arm horizontally with a vertical palm on the right side, and place a blocked ball on the far right with an arrow pointing left to show it's being stopped. This creates that classic bouncer-at-a-door visual where the body itself acts as the barrier placed before the action can happen.

Alright, I'm going to stop planning and just write the SVG code now. the sides holding it in place. Arrow pointing inward from both sides.

**prohibit**: A flat hand/barrier in the middle. Object on the right side. Arm extending from the left through the barrier. Arrow on object pointing away (blocked).

Actually, I'm realizing the root HABĒRE means "to hold," and the prefixes show the direction of that hold—ex- means outward, in- means inward or against, and pro- means before or in front. So I'll use a box as the person and a ball as the object to show how each prefix changes the holding action: **exhibit** has the ball being held out and presented from the box going rightward, **inhibit** has the ball trapped inside the box, and **prohibit** has a barrier blocking the ball from moving forward.

Let me just sketch this out with stick figures in three clean panels using basic shapes—circles for heads, lines for bodies and limbs, and a ball to represent the object being held or blocked.

Writing SVG code... Writing SVG code... I'm continuing to map out the stick figures for each state. The INHIBIT figure has both arms wrapped inward holding a ball at the chest, with compression arrows pointing inward from both sides to show the restraining force. Now I'm positioning the PROHIBIT figure on the right side of the diagram. I need to rethink the stop gesture—the arm should raise up and out to create that classic palm-forward blocking position. Let me adjust the arm to go from the shoulder horizontally to the right, then position the palm as a vertical barrier at the end, creating a clear "stop" gesture with the ball blocked on the right side.

Now I'm refining the visual details: positioning the palm as a flat rectangle at the wrist, placing the blocked ball to the right of it, and drawing an arrow pointing leftward to show the ball's blocked motion toward its destination.

I'm reconsidering the approach—maybe I should drop the arrow entirely and let the palm itself serve as the visual barrier, but then I realize arrows could actually clarify the semantic differences across all three panels: outward arrows for exhibit (extending the hold), inward arrows for inhibit (pressing inward), and leftward arrows for prohibit (blocking from the palm). This directional distinction makes the concept immediately clear visually.

Writing the SVG code... I'm deciding between HTML with embedded SVG for the first visual versus pure SVG for the second, since the illustration benefits from clickable panels that reveal scenario text below. Now I'm checking the layout spacing—the "institutional / legal" label at 168 pixels wide won't visually collide with the prohibit circle since they're separated vertically, even though their horizontal ranges overlap slightly. I need to use HTML mode for both widgets so I can embed SVG and add JavaScript interactivity with onclick handlers—the show_widget tool auto-detects the format based on whether the code starts with `<svg>` or HTML, so wrapping everything in HTML gives me the flexibility to show and hide text elements on click.

For the metaphor illustration, I'll keep the shared object simple: a white circle with a colored stroke that matches each word, repeated identically across three side-by-side panels in one SVG.

Building the first widget now...

Writing SVG code... Writing the interactive visualization... Writing SVG elements...

I'm noticing some spacing issues with the text labels—the word labels and etymology text are sitting too close to their circles, with only a few pixels of clearance in some cases like the exhibit element. I need to adjust the vertical positioning to ensure there's proper breathing room between the text and the circular elements. I'm verifying the spacing works for all three words—prohibit, exhibit, and inhibit—with the smaller circles and adjusted label positions, and checking that the etymology text doesn't overlap with the plot boundaries or other elements. line dashed guide is at y=155 (half of 30 to 280 → 155). Prohibit circle is at y=68. So between prohibit (y=68..76) and the midline (y=155) there's 79px. Fine.

But wait: the "institutional / legal" axis label at y=18 — and prohibit circle top at y=60. Gap: 42px. Fine.

What about the "inhibit" word label at y=222 overlapping with the axis? The axis is at y=280. The inhibit etymology at y=264 has its bottom at about y=278 (264+14 for text height). The axis is at y=280. Gap: 2px. Cutting it extremely close.

Let me move inhibit up to cy=235:
- Word label: y=215, circle top: 227, circle bottom: 243
- Etymology: y=257, text bottom: ~271. Axis: y=280. Gap: 9px. Much better.

So my final circle positions are exhibit at (590, 155), prohibit at (188, 68), and inhibit at (188, 235). For the click-state feedback, I'm adding a larger semi-transparent halo circle that appears on selection. I also need to fix the axis alignment — the X axis arrow extends to x=645 with "outward" text at x=648, which could overlap, so I'll shift "outward" to x=650 with left-aligned text. And I should make the Y and X axis endpoints consistent since they're currently at different y-values. The viewBox height of 320 gives me about 22px of padding below the lowest content at y=298, which works fine. I'm also accounting for the info cards that sit below the SVG in the HTML, so the total widget height spans both. The exhibit circle sits intentionally on the midline at y=155 to represent its neutral position on the authority axis, with the etymology label positioned below it without overlapping the guide line. I've decided to drop the horizontal midpoint guide since the exhibit dot itself already signals the neutral Y position, keeping only the vertical guide at x=395 to distinguish the inward and outward halves. Now I'm writing the SVG code... Writing SVG axes and labels... Writing SVG elements... Setting up the interactive info cards... Writing the interactive card display... I'm noticing a positioning issue with the axis labels — "inward" is correctly placed to the left of the Y axis, but "outward" might be extending too far to the right past the X axis endpoint.

Let me recalculate the placement: if I use text-anchor="end" at x=638, the "outward" label would fit within the 680px viewBox width while staying positioned after the arrow endpoint. the right of the text, which clearly shows the direction continues rightward. I'm reconsidering the label placement though — conventionally the axis label should come after the arrowhead to read "→ outward", but positioning it there would push the text beyond the viewBox boundary. Instead, I'll place "outward" above the axis line at x=638, y=272 with right-alignment, keeping it visually associated with the arrow while staying within bounds.

For the opposite end, "inward" goes to the right of the Y axis and above the X axis at x=162, y=272. Now I'm checking the vertical spacing of the other labels — "institutional / legal" is quite tight at the top of the viewBox, so I'll shift it down slightly to y=20 for better breathing room, while "personal / biological" sits comfortably below the axis at y=293.

Looking at the overall dimensions, I need the viewBox height to accommodate everything from the top labels down through the axis and text below it, so I'll set it to 305 for some padding. I'm also verifying the gaps around the inhibit etymology text — there's adequate space between the circle, the text at y=254, and the axis at y=275.

Now I'm ready to write out the SVG, but I'm noticing a potential overlap issue where the "institutional / legal" label at y=20 sits above the prohibit circle, and I need to make sure the positioning across different x coordinates doesn't create visual conflicts.

Writing SVG code... I'm adjusting the spacing to avoid overlaps—moving the etymology text down slightly and repositioning the inhibit circle higher to create proper gaps between the labels, the circles, and the axis line. Now I'm checking the positioning for prohibit—at cy=62, the word label would sit at y=44, but that's too close to the "institutional/legal" axis label above it. Moving the label down to y=46 creates an overlap with the circle, so I need to find the right balance where the label sits above the circle without crowding the axis text.

With prohibit at y=46, the text occupies roughly y=32 to y=50, leaving a 3px gap to the circle top at y=53—that works. For the etymology label at y=86, there's a 5px gap between the circle bottom and the text, which is acceptable spacing.

Now checking the vertical midline guide at x=395: exhibit sits at x=590 (outward/right), while inhibit and prohibit are at x=188 (inward/left), which correctly positions them on opposite sides. The guide line spans y=30 to y=273, so I need to verify it doesn't overlap with any labels. I'm placing the remaining dots for prohibit and inhibit with their labels and etymologies positioned carefully to avoid overlap. The vertical spacing works out perfectly—exhibit sits exactly at the midpoint between the prohibit and inhibit etymologies, which creates a nice symmetry. Now I need to verify the halos around each dot won't cause any collisions.

Writing SVG code... Writing SVG arm and hand shapes... I'm sketching out the geometry differently now—an arm line angling slightly upward from left to right, a horizontal line representing the palm surface, and a ball positioned above it. I'll add an arrow pointing outward from the ball to show the "hold out" direction.

For the inhibit diagram, I'm thinking about how to visually represent restraint: a ball with an upward arrow showing its intended movement, an arm coming down from above to press it, and a downward arrow from the hand to emphasize the suppressing force.

Now working on the prohibit section...

the ball sits at the center, with an arm extending horizontally from the left side like a stop gesture, its palm facing right to block the ball's path. A blocked arrow shows the ball being prevented from moving toward the palm.

These three diagrams should clearly show the progression: exhibit with forward extension, inhibit with downward pressure, and prohibit with a barrier standing between source and target.

Writing SVG code... Writing SVG arm and palm...

I'm realizing the hand anatomy is overcomplicating this. I'll strip it back to the essentials: each panel just needs a simple arm shape, a clear directional indicator, and the ball object. For the exhibit case, the arm extends horizontally to the ball with an outward arrow showing the force direction. For inhibit, the arm comes down vertically from above, pressing onto the ball with compression arrows. For prohibit, I'm working on the horizontal arm variant.

Now I'm setting up the SVG layout with three panels positioned at specific x-coordinates, and I'm starting to place the exhibit panel elements—the arm as a rounded stroke line, the ball as a filled circle, and positioning everything within the y-range for the drawings.

Writing SVG code... Writing SVG diagram elements... , I need to verify the arm connects visually to the ball without overlapping awkwardly. Let me adjust the arm endpoint to (90, 112) and place the ball center at (102, 103) with radius 12—that puts the arm tip about 2.4 pixels from the ball surface, which should read as connected.

Actually, I want tighter contact. Moving the ball to (92, 100) puts it almost directly above the arm tip at (90, 112), creating just 0.2 pixels of gap—the arm clearly supports the ball from below. But I'm worried this might make it look like the arm passes through the ball, so I'll offset slightly: arm tip at (85, 115) and ball at (95, 103) gives me about 3 pixels of separation, which should look like the arm is approaching the ball from below-left without penetrating it.

Now I'm setting up the final coordinates for both panels. The Exhibit side has the arm angled from lower-left to upper-right, the ball positioned where the arm tip nearly touches it, and an arrow extending rightward from the ball's edge. The Inhibit side mirrors this with a vertical arm coming down from above toward the ball.

Continuing with the Prohibit panel...

I need to position the blocked arrow carefully so it doesn't overlap with the palm barrier. The ball is at x=592, and the palm surface extends to around x=558, so I'll draw the arrow from the ball's left edge at x=580 pointing left toward x=567, stopping just short of the palm. That gives me a 13-pixel arrow, which feels a bit short—I should extend it further to make the blocking action more visually clear. The arrowhead positioning works well—it sits right at the palm's edge to convey the blocking effect. Now I'm mapping out the panel structure: the arm line spans from x=475 to x=552, starting 15px inside the left panel boundary. I'm also setting up the vertical dividers at x=220 and x=460, then positioning the text labels at the center of each panel (x=110, x=340, and x=570).

I'm laying out the text hierarchy: titles in bold at y=20 with their respective colors (teal, purple, coral), etymologies in italics below at y=36, and the conceptual summaries at y=195 that capture the essence of each word. There's also an instruction prompt at the bottom centered on the canvas.

Now I'm setting up the visual structure with vertical divider lines to separate the three panels, and I'm checking the proportions of the inhibit illustration—specifically making sure the arm extends down to touch the ball surface rather than floating above it, so the pressing-down gesture reads clearly. I'm settling on positioning the arm to end right at the ball's top, which creates a 5px visual overlap due to the stroke width—this gives the impression of the arm pressing firmly into the ball. Now I need to figure out where the dashed arrow indicating the thwarted upward motion should start. For prohibit, the blocked arrow on the left shows the ball being stopped by the palm. For inhibit, I'm adding a dashed upward arrow to show what the ball wants to do, plus a downward arrow on the arm itself to visualize the pressing force — together these create that "force versus thwarted force" dynamic. Now I'm ready to build out the SVG code for this visual.

I need to set up the arrow marker definitions since this is a standalone widget, and I'll use the same marker approach from the skill diagram — the line direction determines where the arrowhead points, so an upward line gets the arrowhead at the top, and a leftward line gets it at the left end.

Writing SVG code... Writing SVG layout... Writing SVG markup... Writing SVG visualization... Writing SVG diagram... Writing SVG layout... me adjust: move arm and ball rightward.
- Arm: from (30, 132) to (98, 118)
- Ball: cx=110, cy=106, r=12
- Arrow: from (124, 106) to (148, 106)

Now content spans x=30..148, centered around x=89. Still a bit left of panel center (113). Let me try:
- Arm: from (35, 133) to (102, 119)  
- Ball: cx=115, cy=107, r=12
- Arrow: (129, 107) to (155, 107)

Content: x=35..155, center ≈95. Still left of 113. Hmm.

Actually, the point is that the ball is presented OUTWARD (to the right). The arm should come from the left, and the ball should be roughly centered, with arrow going off to the right. Let me reposition so the arm extends from the left side toward a centered ball, checking that the arm tip actually connects to the ball surface rather than leaving a gap.

Adjusting arm coordinates...

Now I'm finalizing the positions: arm coming from the left at (15, 133) angling up to meet the ball at (115, 107), with a small gap of about 2.4 pixels between the arm tip and ball surface. The arrow extends rightward from the ball into whitespace, creating a sense of outward motion. The leftward bias of the composition actually reinforces the directional push—the arm on the left drives the ball rightward. I'll lock in these coordinates and set up the clickable interaction for each panel.

For the interactivity, I need to switch to HTML mode so I can layer the SVG with JavaScript-controlled info cards below it. Each panel group in the SVG will have an onclick handler that reveals the corresponding scenario details in a hidden div, toggling visibility as the user clicks through the different exhibits and inhibits.

Now I'm setting up the panel highlight effect when a scenario is selected.  I'll add a semi-transparent background rectangle behind each panel that fades in on click, then I need to flesh out the etymology and scenario content for the exhibit card — specifically how the Latin prefix and root combine to create the modern English meaning, plus a concrete example sentence showing the word in context.

Now I'm ready to stop planning and actually write the implementation code. Writing SVG code... the middle of the chart. That empty space between the prohibit and inhibit regions really emphasizes the conceptual divide. Now I'm checking the positioning of the exhibit label and its etymology—the text fits comfortably within the viewBox boundaries, and I'm verifying the remaining labels fit as well.

Writing SVG code... I see that CSS classes have higher specificity than SVG fill attributes, so my custom fills won't work if I'm relying on the `ts` class. I should either use inline `style="fill: ..."` to override the class, or just let the class handle the color entirely. Looking at the examples in the spec, they don't use custom fill attributes — the classes manage the styling, so I'll follow that pattern.

For my colored text in specific ramp colors, I'll use inline styles instead of fill attributes. For secondary text that should be muted, I'll stick with the `ts` class and let it use the default secondary text color variable.

Looking at the spec more carefully, every text element needs one of the pre-built classes (`t`, `ts`, or `th`). For colored text, I can layer both the class and an inline style override—the style will take precedence. So I'll use `class="th"` with `style="fill:#1D9E75"` for word labels, `class="ts"` for axis labels, and `class="ts"` with custom fill and italic styling for etymology lines.

Applying this pattern throughout...

Now I'm writing the actual code. I'll set up the SVG with proper marker definitions—using `id="arr"` for the arrowhead since each widget is a separate SVG element with no ID conflicts. Let me build out the complete HTML for both visualizations concisely.

Building the SVG structure... Building the interactive diagram... Writing the interactive visualization... Writing the interactive card logic... Finishing the event handler logic and checking the marker reference for the arrow styling...

I need to add the `marker-end` attribute to the axis lines so they display the arrow heads correctly. The lines already have the right stroke color set to the tertiary text variable, and the marker inherits that context properly. For the opacity changes in the JavaScript, I'm using `setAttribute` to update the fill-opacity on the circle element and CSS opacity on the group, both of which should work fine in SVG.

The spacing looks correct for both etymologies—prohibit has a 5-pixel gap between its circle and the text, and inhibit also has proper clearance from both its circle and the axis line below. Now I'm moving on to build the second widget showing the metaphor illustration with its three-panel layout.

Setting up the panels across the viewBox with titles, etymologies, and a drawing area for each concept. The first panel shows exhibit with an arm extending toward a ball and an arrow indicating outward motion. The second panel depicts inhibit with a vertical arm, a ball below it, and arrows showing both the blocking action and the inward pressure. The third panel illustrates prohibit with an arm extended horizontally and a palm line, with the ball positioned further out.

Now I'm wrapping each panel in a clickable group so users can interact with the concepts, making sure the groups themselves don't have any fill that would interfere with the background or the drawings. Still writing the panel styles...

Actually, I should keep this simpler—the existing `node` class already handles hover effects with cursor and dimming, so I don't need to over-engineer additional CSS for the word selection in the first widget.

For both widgets, I can leverage the `node` class on the group elements. In Widget 2, I'll pair it with an invisible rectangle that spans the full panel area to ensure the entire clickable region responds to events, not just the visible content. I'm settling on `fill="transparent"` for the invisible rect since it reliably catches pointer events without the complexity of explicit pointer-events attributes, and it should work fine regardless of the host's background color. Now I need to reconsider the SVG layout for the prohibit panel—specifically the positioning of the ball, palm line, arm line, and the blocked arrow that points left from the ball.

The arrow's head sits at x=563, just 8 pixels to the right of the palm's right edge, creating a small gap that visually suggests the ball is pressing against the palm but hasn't broken through. The arrow direction is correct: it represents the ball's blocked intention to move left, with the head pointing toward the palm and the tail near the ball itself.

Still working through marker positioning... the dashed upward arrow and press-down arrow don't overlap since they occupy different y-ranges (75–88 versus 98–134), though they're only 10 pixels apart vertically at the same x-position. The thick purple arm line spans the full range and covers both arrows.

I'm realizing the small press-down arrow gets visually lost on top of the thicker arm, so it's not reading clearly. The arm itself already communicates the inhibiting force through its direction and position, while the dashed upward arrow is what really matters—it shows the ball's thwarted intent to move up. I'll simplify by removing the press-down arrow entirely and keeping just the arm and the dashed arrow.

Now I'm checking the positioning more carefully. The dashed arrow starting at y=134 would actually sit inside the arm's stroke boundaries, which creates visual confusion. I should start the dashed arrow from the ball itself instead to make the relationship clearer. I'm reconsidering the arrow placement — having it pass through solid objects looks awkward, so I'll offset the dashed arrow to the left of the centerline instead, positioning it at x=330 to show the ball's intended upward movement without visual interference.

Actually, a cleaner approach might be to skip the arrow entirely and instead represent the constraint visually by drawing the ball slightly compressed, making it appear squished downward.

Modifying the ball shape... Adjusting the ellipse position and arm length so they overlap slightly — the arm's stroke visually presses into the squished ball, reinforcing that compression effect.

Now I'm reconsidering whether exhibit should mirror this with a vertically elongated ellipse to suggest lifting or extension, contrasting with inhibit's horizontal squish. But maybe I'm overcomplicating it — keeping all three as simple circles might be cleaner and more consistent.

Actually, the design brief says the object needs to stay visually identical across all three scenes, so I should stick with circles for all of them. The meaning comes from the arm's position and direction, not from deforming the ball itself. I'll drop the ellipse idea and go back to circles, using the arm pressing down from above for inhibit and adding small downward chevrons on the arm to reinforce the pressing motion.

Hmm, but those chevrons might make it feel too busy. Let me try putting an arrowhead at the bottom of the arm instead, right where it meets the ball, to show the downward force more cleanly.

Actually, a custom arrowhead for a thick arm line would be overkill—the standard marker would be way too small. The spatial layout already communicates what's happening: the arm extends downward and presses the ball below it. The text label will make the intent clear, so I'll keep the design simple and uncluttered.

Now I'm locking in the final coordinates and writing the SVG. The positional map widget spans 680×305 with the three control states positioned vertically, axes, and a guide line. The metaphor illustration widget is 680×225 with panel dividers marking each section.

Writing SVG code... Writing SVG panels with interactive backgrounds... I'm verifying the spacing between text elements and circles in the exhibit panel—the word label and etymology both have adequate gaps from their adjacent circles. Now I'm double-checking the SVG coordinate system for Widget 2, making sure the title and etymology text are properly centered within the viewBox and don't overflow the panel boundaries. The prohibit panel checks out with all elements properly positioned within bounds. Now I'm verifying the inhibit panel, making sure the title and etymology fit within its allocated space from x=226 to x=453.

For the click-reveal cards below each SVG, I'm planning the content structure: each card will display the full etymology explanation showing how the prefix and root combine to create meaning, plus a scenario sentence demonstrating the word in context. For exhibit, that's the etymology breakdown of "ex-" plus "habēre" and how it evolved from physical gestures to abstract representation. For inhibit, I'm working through the same pattern with "in-" and its suppressive meaning.

Now I'm ready to write the actual code. One thing I need to keep in mind: the marker reference in Widget 2's SVG uses a single arrow marker defined as `id="arr"`, and both the exhibit arrow pointing right and the prohibit arrow pointing left reference this same marker with `marker-end="url(#arr)"`.

Writing SVG code... I'm calculating the SVG dimensions relative to the widget width — at 680px wide, the viewBox scales proportionally, giving me roughly 305px height for Widget 1 and 225px for Widget 2, both well within reasonable bounds when accounting for the info cards below. Rather than keep planning, I'm going to write the code directly in my response using two widget calls.

I'm structuring this as: opening prose about the Latin root and prefix structure, then Visual 1 showing the positional map, a bridge paragraph, Visual 2 with the metaphor illustration, and finally the usage traps and register notes without restating what the visuals already show. register notes

Let me write it all now.

For the prose, key points:
- *habēre* = "to hold" — the deepest etymology
- ex- = out (extrovert direction) → exhibit
- in- = in/against (introvert/suppressive) → inhibit
- pro- = before/in front (barrier/advance-placement) → prohibit

Etymology sources: These are well-established Latin roots documented in any Latin dictionary and etymological dictionary (Merriam-Webster, OED, Etymonline).

For the usage traps: inhibit requires no authority—social pressure, silence, or fear can all inhibit someone—while prohibit demands formal standing to forbid outright. In biology, inhibition describes suppression (enzymes, hormones, neurotransmitters), never prohibition. Exhibit often implies something reveals its own nature, whereas display suggests deliberate arrangement. Register-wise, exhibit and inhibit work across formal and casual contexts, but prohibit carries legal weight and sounds stiff in everyday speech.

Now I'm ready to write the full response with examples and the interactive tool.

</details>

Three words, one root. All three descend from Latin *habēre* — "**to hold**." The prefix alone determines the *direction* of the hold.

- **ex-** (out) + *habēre* → *exhibēre* → **exhibit**: hold it outward, make it visible
- **in-** (in/against) + *habēre* → *inhibēre* → **inhibit**: hold it back, suppress its movement
- **pro-** (before/in front) + *habēre* → *prohibēre* → **prohibit**: place yourself *before* it, as a barrier

The positional map below plots them on two axes that genuinely separate them:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-15T07:17:40.543767Z",
  "stop_timestamp": "2026-04-15T07:18:04.851537Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01EHPcT2HnTrVCiZJXbsQppg",
  "name": "visualize:show_widget",
  "input": {
    "title": "exhibit_inhibit_prohibit_position_map",
    "loading_messages": [
      "Placing words on the map",
      "Calibrating axes"
    ],
    "widget_code": "\n<h2 class=\"sr-only\">Semantic position map: exhibit, inhibit, prohibit — force direction (x-axis) vs. institutional authority (y-axis)</h2>\n\n<svg id=\"pmap\" width=\"100%\" viewBox=\"0 0 680 305\" style=\"display:block\">\n  <defs>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\">\n      <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </marker>\n  </defs>\n\n  <line x1=\"395\" y1=\"28\" x2=\"395\" y2=\"268\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\" stroke-dasharray=\"3 6\"/>\n\n  <line x1=\"148\" y1=\"274\" x2=\"640\" y2=\"274\" stroke=\"var(--color-text-tertiary)\" stroke-width=\"0.5\" marker-end=\"url(#arr)\"/>\n  <line x1=\"150\" y1=\"277\" x2=\"150\" y2=\"18\" stroke=\"var(--color-text-tertiary)\" stroke-width=\"0.5\" marker-end=\"url(#arr)\"/>\n\n  <text class=\"ts\" x=\"155\" y=\"18\">institutional / legal</text>\n  <text class=\"ts\" x=\"155\" y=\"292\">personal / biological</text>\n  <text class=\"ts\" x=\"143\" y=\"268\" text-anchor=\"end\">inward</text>\n  <text class=\"ts\" x=\"636\" y=\"268\" text-anchor=\"end\">outward</text>\n\n  <g id=\"gx-exhibit\" class=\"node\" onclick=\"pick('exhibit')\">\n    <circle id=\"hl-exhibit\" cx=\"590\" cy=\"148\" r=\"22\" fill=\"#1D9E75\" fill-opacity=\"0\" stroke=\"none\"/>\n    <circle cx=\"590\" cy=\"148\" r=\"9\" fill=\"#1D9E75\"/>\n    <text class=\"th\" x=\"590\" y=\"130\" text-anchor=\"middle\" style=\"fill:#1D9E75\">exhibit</text>\n    <text class=\"ts\" x=\"590\" y=\"172\" text-anchor=\"middle\" style=\"fill:#0F6E56;font-style:italic\">ex + habēre</text>\n  </g>\n\n  <g id=\"gx-prohibit\" class=\"node\" onclick=\"pick('prohibit')\">\n    <circle id=\"hl-prohibit\" cx=\"188\" cy=\"63\" r=\"22\" fill=\"#D85A30\" fill-opacity=\"0\" stroke=\"none\"/>\n    <circle cx=\"188\" cy=\"63\" r=\"9\" fill=\"#D85A30\"/>\n    <text class=\"th\" x=\"188\" y=\"46\" text-anchor=\"middle\" style=\"fill:#D85A30\">prohibit</text>\n    <text class=\"ts\" x=\"188\" y=\"87\" text-anchor=\"middle\" style=\"fill:#993C1D;font-style:italic\">pro + habēre</text>\n  </g>\n\n  <g id=\"gx-inhibit\" class=\"node\" onclick=\"pick('inhibit')\">\n    <circle id=\"hl-inhibit\" cx=\"188\" cy=\"228\" r=\"22\" fill=\"#7F77DD\" fill-opacity=\"0\" stroke=\"none\"/>\n    <circle cx=\"188\" cy=\"228\" r=\"9\" fill=\"#7F77DD\"/>\n    <text class=\"th\" x=\"188\" y=\"210\" text-anchor=\"middle\" style=\"fill:#7F77DD\">inhibit</text>\n    <text class=\"ts\" x=\"188\" y=\"252\" text-anchor=\"middle\" style=\"fill:#534AB7;font-style:italic\">in + habēre</text>\n  </g>\n\n</svg>\n\n<div style=\"min-height:96px;margin:4px 0 0\">\n  <div id=\"pm-hint\" style=\"text-align:center;padding:1.4rem 0;font-size:12px;color:var(--color-text-tertiary)\">click a word to explore</div>\n  <div id=\"pm-card\" style=\"display:none;background:var(--color-background-secondary);border-radius:var(--border-radius-lg);padding:1rem 1.25rem\"></div>\n</div>\n\n<script>\nconst PD = {\n  exhibit: {\n    c:'#1D9E75', b:'#1D9E75',\n    gist:'hold out — present',\n    root:'L. ex- \"out\" + habēre \"to hold\" → hold forth, make visible to others',\n    s:'Her anxiety exhibited itself as meticulous tidiness — every surface spotless, every drawer labelled.',\n    n:'Neutral on authority: no coercion implied. A symptom, a painting, a company, or a person can all exhibit.'\n  },\n  prohibit: {\n    c:'#D85A30', b:'#D85A30',\n    gist:'hold before — forbid',\n    root:'L. pro- \"before, in front\" + habēre \"to hold\" → place oneself/a rule in front as a barrier',\n    s:'Federal law prohibits the discharge of industrial waste into navigable waterways.',\n    n:'Requires authority. Laws, rules, and institutions prohibit. Outcome is categorical — either forbidden or not.'\n  },\n  inhibit: {\n    c:'#7F77DD', b:'#7F77DD',\n    gist:'hold in — suppress',\n    root:'L. in- \"in / against\" + habēre \"to hold\" → hold against the object\\'s natural motion',\n    s:'Her awareness of the camera inhibited every natural gesture — she stood stiff-shouldered, performing normality.',\n    n:'Often internal or biological: impulses, enzymes, neurotransmitters, confidence. Rarely used for formal bans.'\n  }\n};\nconst words = ['exhibit','prohibit','inhibit'];\nfunction pick(w) {\n  document.getElementById('pm-hint').style.display = 'none';\n  const d = PD[w];\n  const card = document.getElementById('pm-card');\n  card.style.display = 'block';\n  card.style.borderLeft = '3px solid ' + d.b;\n  card.innerHTML =\n    '<p style=\"font-size:13px;font-weight:500;color:'+d.c+';margin:0 0 3px\">'+w+' — '+d.gist+'</p>' +\n    '<p style=\"font-size:12px;color:var(--color-text-secondary);font-style:italic;margin:0 0 8px\">'+d.root+'</p>' +\n    '<p style=\"font-size:13px;color:var(--color-text-primary);margin:0 0 6px\">\"'+d.s+'\"</p>' +\n    '<p style=\"font-size:12px;color:var(--color-text-secondary);margin:0\">'+d.n+'</p>';\n  words.forEach(x => {\n    document.getElementById('gx-'+x).style.opacity = x===w ? '1' : '0.28';\n    document.getElementById('hl-'+x).setAttribute('fill-opacity', x===w ? '0.15' : '0');\n  });\n}\n</script>\n"
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
  "tool_use_id": "toolu_01EHPcT2HnTrVCiZJXbsQppg",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "No result received from the Claude Desktop app after waiting 4 minutes. The local MCP server providing this tool may be unresponsive, crashed, or not running. Further calls to this tool are likely to time out the same way; consider using an alternative approach or ask the user to restart their local MCP servers.",
      "uuid": "145468f8-13cc-4ebe-b625-183ab080d19b"
    }
  ],
  "is_error": true,
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

The visualize tool timed out. Let me try again with a simpler approach, or use the show_widget tool directly. Let me try again.

Actually, looking at the tool names:
- `visualize:read_me` — I already called this
- `visualize:show_widget` — this is the tool for rendering

The error says it timed out. Let me try calling show_widget again with the same or simplified code.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-15T07:22:11.208807Z",
  "stop_timestamp": "2026-04-15T07:22:22.905317Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_0166zoCf7z276sFUY7dvBwYQ",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": [
      "Placing words on the map"
    ],
    "title": "exhibit_inhibit_prohibit_position_map",
    "widget_code": "\n<h2 class=\"sr-only\">Semantic position map: exhibit inhibit prohibit</h2>\n<svg id=\"pmap\" width=\"100%\" viewBox=\"0 0 680 305\" style=\"display:block\">\n  <defs>\n    <marker id=\"arr\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"5\" markerHeight=\"5\" orient=\"auto-start-reverse\">\n      <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n    </marker>\n  </defs>\n  <line x1=\"395\" y1=\"28\" x2=\"395\" y2=\"268\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\" stroke-dasharray=\"3 6\"/>\n  <line x1=\"148\" y1=\"274\" x2=\"640\" y2=\"274\" stroke=\"var(--color-text-tertiary)\" stroke-width=\"0.5\" marker-end=\"url(#arr)\"/>\n  <line x1=\"150\" y1=\"277\" x2=\"150\" y2=\"18\" stroke=\"var(--color-text-tertiary)\" stroke-width=\"0.5\" marker-end=\"url(#arr)\"/>\n  <text class=\"ts\" x=\"155\" y=\"18\">institutional / legal</text>\n  <text class=\"ts\" x=\"155\" y=\"292\">personal / biological</text>\n  <text class=\"ts\" x=\"143\" y=\"268\" text-anchor=\"end\">inward</text>\n  <text class=\"ts\" x=\"636\" y=\"268\" text-anchor=\"end\">outward</text>\n  <g id=\"gx-exhibit\" class=\"node\" onclick=\"pick('exhibit')\">\n    <circle id=\"hl-exhibit\" cx=\"590\" cy=\"148\" r=\"22\" fill=\"#1D9E75\" fill-opacity=\"0\" stroke=\"none\"/>\n    <circle cx=\"590\" cy=\"148\" r=\"9\" fill=\"#1D9E75\"/>\n    <text class=\"th\" x=\"590\" y=\"130\" text-anchor=\"middle\" style=\"fill:#1D9E75\">exhibit</text>\n    <text class=\"ts\" x=\"590\" y=\"172\" text-anchor=\"middle\" style=\"fill:#0F6E56;font-style:italic\">ex + habēre</text>\n  </g>\n  <g id=\"gx-prohibit\" class=\"node\" onclick=\"pick('prohibit')\">\n    <circle id=\"hl-prohibit\" cx=\"188\" cy=\"63\" r=\"22\" fill=\"#D85A30\" fill-opacity=\"0\" stroke=\"none\"/>\n    <circle cx=\"188\" cy=\"63\" r=\"9\" fill=\"#D85A30\"/>\n    <text class=\"th\" x=\"188\" y=\"46\" text-anchor=\"middle\" style=\"fill:#D85A30\">prohibit</text>\n    <text class=\"ts\" x=\"188\" y=\"87\" text-anchor=\"middle\" style=\"fill:#993C1D;font-style:italic\">pro + habēre</text>\n  </g>\n  <g id=\"gx-inhibit\" class=\"node\" onclick=\"pick('inhibit')\">\n    <circle id=\"hl-inhibit\" cx=\"188\" cy=\"228\" r=\"22\" fill=\"#7F77DD\" fill-opacity=\"0\" stroke=\"none\"/>\n    <circle cx=\"188\" cy=\"228\" r=\"9\" fill=\"#7F77DD\"/>\n    <text class=\"th\" x=\"188\" y=\"210\" text-anchor=\"middle\" style=\"fill:#7F77DD\">inhibit</text>\n    <text class=\"ts\" x=\"188\" y=\"252\" text-anchor=\"middle\" style=\"fill:#534AB7;font-style:italic\">in + habēre</text>\n  </g>\n</svg>\n<div style=\"min-height:96px;margin:4px 0 0\">\n  <div id=\"pm-hint\" style=\"text-align:center;padding:1.4rem 0;font-size:12px;color:var(--color-text-tertiary)\">click a word to explore</div>\n  <div id=\"pm-card\" style=\"display:none;background:var(--color-background-secondary);border-radius:var(--border-radius-lg);padding:1rem 1.25rem\"></div>\n</div>\n<script>\nconst PD={exhibit:{c:'#1D9E75',b:'#1D9E75',gist:'hold out — present',root:'L. ex- \"out\" + habēre \"to hold\" → hold forth, make visible to others',s:'Her anxiety exhibited itself as meticulous tidiness — every surface spotless, every drawer labelled.',n:'Neutral on authority: no coercion implied. A symptom, a painting, a company can all exhibit.'},prohibit:{c:'#D85A30',b:'#D85A30',gist:'hold before — forbid',root:'L. pro- \"before, in front\" + habēre \"to hold\" → place a rule in front as barrier in advance',s:'Federal law prohibits the discharge of industrial waste into navigable waterways.',n:'Requires authority. Laws and institutions prohibit. Outcome is categorical — either forbidden or not.'},inhibit:{c:'#7F77DD',b:'#7F77DD',gist:'hold in — suppress',root:'L. in- \"in / against\" + habēre \"to hold\" → hold against the object\\'s natural motion',s:'Her awareness of the camera inhibited every natural gesture — she stood stiff-shouldered, performing normality.',n:'Often internal or biological: impulses, enzymes, neurotransmitters, confidence. Rarely used for formal bans.'}};\nconst ws=['exhibit','prohibit','inhibit'];\nfunction pick(w){\n  document.getElementById('pm-hint').style.display='none';\n  const d=PD[w],card=document.getElementById('pm-card');\n  card.style.display='block';card.style.borderLeft='3px solid '+d.b;\n  card.innerHTML='<p style=\"font-size:13px;font-weight:500;color:'+d.c+';margin:0 0 3px\">'+w+' — '+d.gist+'</p><p style=\"font-size:12px;color:var(--color-text-secondary);font-style:italic;margin:0 0 8px\">'+d.root+'</p><p style=\"font-size:13px;color:var(--color-text-primary);margin:0 0 6px\">\"'+d.s+'\"</p><p style=\"font-size:12px;color:var(--color-text-secondary);margin:0\">'+d.n+'</p>';\n  ws.forEach(x=>{document.getElementById('gx-'+x).style.opacity=x===w?'1':'0.28';document.getElementById('hl-'+x).setAttribute('fill-opacity',x===w?'0.15':'0');});\n}\n</script>\n"
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
  "tool_use_id": "toolu_0166zoCf7z276sFUY7dvBwYQ",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "No result received from the Claude Desktop app after waiting 4 minutes. The local MCP server providing this tool may be unresponsive, crashed, or not running. Further calls to this tool are likely to time out the same way; consider using an alternative approach or ask the user to restart their local MCP servers.",
      "uuid": "be458555-9af9-4d4e-b6ab-36c0cd38e2ce"
    }
  ],
  "is_error": true,
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

The visualizer tool keeps timing out. Let me provide a written analysis instead since the tool is not working. I'll present the full analysis in prose format.

</details>

The visualizer appears to be unresponsive right now. Let me deliver the full analysis in prose — the etymological and semantic depth is all here.

---

## *habēre* — "to hold"

All three words share a single Latin root. The prefix alone determines the **direction** of the hold, and that direction carries the entire semantic difference.

| Word | Prefix | Root | Literal | English meaning |
|---|---|---|---|---|
| **exhibit** | *ex-* "out" | *habēre* "to hold" | hold out/forth | present, make visible |
| **inhibit** | *in-* "in, against" | *habēre* "to hold" | hold in/back | suppress, restrain |
| **prohibit** | *pro-* "before, in front" | *habēre* "to hold" | hold before/in front | forbid by standing in the way |

The *pro-* of *prohibit* deserves special attention: it does not mean "against" — it means the authority places itself (or its rule) *in front of* what would otherwise happen, like a hand raised before a door. The etymology is spatial: a barrier placed *in advance*.

---

## The two separating axes

**1. Direction of force** (the most important axis)

- *exhibit*: force is directed **outward** — toward the viewer, the world
- *inhibit*: force is directed **inward** — against the thing's own motion
- *prohibit*: force creates a **wall** — placed before the thing's path

**2. Source of agency**

- *exhibit*: no authority needed; things can exhibit themselves (symptoms exhibit, patients exhibit, artists exhibit)
- *inhibit*: no authority needed; shyness inhibits, cold temperatures inhibit, drugs inhibit — a purely functional suppression
- *prohibit*: **requires standing**; only an authority (law, institution, rule, person-in-power) can prohibit

---

## Concrete scenarios

**exhibit** — "The patient's fever exhibited none of the classical rash — which made the diagnosis harder, not easier."
The fever *shows itself*, without anyone forcing it. Exhibit is often reflexive or passive in this way.

**inhibit** — "Cold inhibits enzyme activity: the catalytic rate slows, but does not stop."
Notice: *inhibit* implies a **gradient**, not a binary. Things are partially, gradually, functionally suppressed. A law can technically *inhibit* behaviour (make it harder) without *prohibiting* it (making it forbidden).

**prohibit** — "The treaty expressly prohibits the deployment of such weapons in civilian areas."
The treaty stands *before* the action. The outcome is binary and categorical: either the action is forbidden or it is not.

---

## Usage traps

**"The law inhibits X" vs "The law prohibits X"** — both are grammatical, but they mean different things. *Inhibit* implies partial/functional dampening (the law makes X harder). *Prohibit* implies categorical ban. Choosing the wrong one misrepresents the strength of the restriction.

**"She inhibited him"** is fine; it means she psychologically suppressed him. **"She prohibited him"** implies she had authority over him — it would be odd without that institutional relationship.

**Biology uses *inhibit*, never *prohibit***. Serotonin reuptake is *inhibited* by SSRIs — not prohibited. The language of biology is functional, not legal.

**Register gap**: *prohibit* sounds formal and heavy in casual speech. "My dad prohibits me from going" is technically correct but stilted; "my dad doesn't let me go" is natural. *Exhibit* and *inhibit* work across registers with no friction.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8ff4-beff-7cfb-b518-3c68380ec12c",
  "updated_at": "2026-04-15T07:26:43.273739Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d8ff4-beff-7f45-b9a4-6656d94daec1"
}
```

</details>

### 3. human — 2026-04-15T08:39:18.054763Z

Whereas "suppress"  implies a binary, right?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d904b-734a-75db-a2d0-48656e8a08d5",
  "updated_at": "2026-04-15T08:39:18.054763Z",
  "attachments": [
    {
      "file_name": "excerpt_from_previous_claude_message.txt",
      "file_size": 49,
      "file_type": "txt",
      "extracted_content": "Notice: inhibit implies a gradient, not a binary."
    }
  ],
  "files": [
    {
      "file_uuid": "4666b166-0995-4ef7-bdcc-e3207a05b51e",
      "file_name": "excerpt_from_previous_claude_message.txt"
    }
  ],
  "parent_message_uuid": "019d8ff4-beff-7cfb-b518-3c68380ec12c"
}
```

</details>

### 4. assistant — 2026-04-15T08:39:33.249880Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking whether "suppress" implies a binary outcome, contrasting with the claim that "inhibit" implies a gradient. Let me think carefully about this.

Actually, "suppress" is more nuanced than a simple binary. It can imply strong/complete suppression but also partial suppression. Let me think about this more carefully.

"Suppress" comes from Latin *sub-* "under" + *premere* "to press" — to press down. 

Does suppress imply binary? Not strictly. You can "partially suppress" something, "largely suppress" something. But the *default reading* of suppress does lean toward more complete elimination than inhibit. 

Looking at concrete examples like "the drug suppresses the immune response" versus "the drug inhibits the immune response" — the first does suggest stronger, more thorough dampening. But this isn't really a binary distinction; it's more that suppress and inhibit sit at different points along the same spectrum. Inhibit typically means the process continues but weakened or slowed, while suppress pushes further toward elimination without necessarily being absolute. So I should acknowledge that suppress does convey more complete action than inhibit, but push back on framing it as strictly binary.

</details>

Not quite binary — but that's a productive near-miss worth unpacking.

*Suppress* (Latin *sub-* "under" + *premere* "to press") means to **press down**. That image is stronger and more complete than *inhibit*'s "hold against." The default reading of *suppress* leans toward near-elimination — "the drug suppresses the tumour" implies a heavy reduction. But it still admits of degree: "partially suppressed," "largely suppressed" are perfectly natural. So it isn't binary the way *prohibit* is.

The more accurate contrast is one of **default intensity** on a shared continuum:

| Word | Image | Default strength |
|---|---|---|
| *inhibit* | hold against natural motion | partial — the process keeps running, slowed |
| *suppress* | press down heavily | strong — pushed close to elimination, but scalar |
| *prohibit* | place a wall in front | **binary** — the action either is or isn't forbidden |

So *suppress* sits between *inhibit* and *prohibit* on that axis — closer to the "full stop" end, but not there. The binary quality belongs uniquely to *prohibit*, because it is inherently legal/normative: a rule either forbids something or it doesn't. There is no "partially forbidden."

The tell: you can say "mildly suppressed" without contradiction. You cannot say "mildly prohibited" — it becomes "restricted" or "discouraged" instead.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d904b-734a-795b-bb7d-4e9a9c89c061",
  "updated_at": "2026-04-15T08:39:33.249880Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d904b-734a-75db-a2d0-48656e8a08d5"
}
```

</details>
