# Invert vs inverse: understanding the difference

## Export metadata (verbatim)

```json
{
  "uuid": "727d4bf9-ddf0-449d-a586-0798b48dd6ae",
  "name": "Invert vs inverse: understanding the difference",
  "summary": "**Conversation Overview**\n\nThe person engaged in a focused vocabulary and etymology discussion about the words \"invert\" and \"inverse,\" exploring their relationship, grammatical distinctions, and usage patterns. Claude provided a detailed analysis covering shared Latin origins (*invertere*, from *in-* + *vertere*, \"to turn\"), the morphological relationship between the verb form (*invert*) and the fossilized past participle form (*inverse*), and how this etymology explains their distinct grammatical roles: *invert* as a transitive verb describing an active process, and *inverse* as an adjective or noun naming a standing state or relationship. Claude produced two visual diagrams — a semantic spectrum positioning the words on an action-to-state axis, and an hourglass metaphor illustrating the process-versus-result distinction — along with domain notes covering mathematics, music, and computing.\n\nThe person then tested the framework with a precise follow-up question about \"inverse proportion\" versus \"inverted proportion,\" demonstrating active engagement with the analytical framework. Claude confirmed that \"inverse proportion\" is the standard mathematical term because it names a type of relationship (the *state/result* role), while \"inverted proportion\" is non-standard because it frames the relationship as something acted upon rather than a standing structural fact. Claude extended this with parallel examples: *inverse function*, *inverse matrix* (standard) versus *inverted function* (non-standard), reinforcing the rule that naming a mathematical relationship calls for *inverse*, while describing the operation performed calls for *invert*.",
  "created_at": "2026-04-08T02:34:51.614254Z",
  "updated_at": "2026-04-08T03:07:59.994310Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-08T02:34:57.095075Z

The relationship between "invert" and "inverse"

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d6af1-59c3-7383-ae97-f3cd27241443",
  "updated_at": "2026-04-08T02:34:57.095075Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-08T02:43:40.129651Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants to understand the relationship between "invert" and "inverse" — this is a vocabulary/etymology question. The vocabulary-visualization skill seems relevant here.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-08T02:34:59.495714Z",
  "stop_timestamp": "2026-04-08T02:34:59.646364Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01AhEZyPnMvYM4LC2GgWe7Q7",
  "name": "view",
  "input": {
    "description": "Load vocabulary-visualization skill",
    "path": "/mnt/skills/user/vocabulary-visualization/SKILL.md"
  },
  "message": "Load vocabulary-visualization skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Load vocabulary-visualization skill"
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
  "tool_use_id": "toolu_01AhEZyPnMvYM4LC2GgWe7Q7",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: vocabulary-visualization\n     3\tdescription: \"Visualize the semantic differences between near-synonym English words using interactive diagrams, scatter plots, and concrete scenario comparisons. Use this skill whenever the user provides a set of 2+ English words or phrases that are near-synonyms and wants to understand how they differ — especially when the user says 'compare these words', 'what's the difference between X and Y', 'visualize the difference', lists multiple quoted words together, or asks for help distinguishing similar vocabulary. Also trigger when the user explicitly references this skill by name. Works for verbs, nouns, adjectives, adverbs, and phrasal verbs. Do NOT use for single-word definition lookups, translation tasks, grammar correction, or writing tasks.\"\n     4\t---\n     5\t\n     6\t# Phase 0 — EVOLVE\n     7\t\n     8\tRead the subsequent <Evolution Log> carefully. Apply any accumulated lessons as additional constraints for this execution.\n     9\t\n    10\t## Evolution Log\n    11\t\n    12\t## #2026-03-23\n    13\t- Positional map alone is incomplete — must also produce a metaphor illustration showing what each word feels like\n    14\t- Skill must mandate two visuals (positional map + metaphor illustration) to prevent scatter-plot-only output\n    15\t- A shared metaphor object (derived from etymology when possible) is the anchor for the illustration\n    16\t\n    17\t# Vocabulary visualization\n    18\t\n    19\tMake semantic differences between near-synonyms visible and felt. Two complementary visuals required: a positional map (where each word sits) and a metaphor illustration (what each word feels like).\n    20\t\n    21\t## Analysis workflow\n    22\t\n    23\t### 1. Identify distinguishing axes\n    24\t\n    25\tFind dimensions that create the most spread for this cluster.\n    26\t\n    27\tCandidates: depth/completeness, energy/agency, resolution, formality, emotional temperature, scope, certainty of outcome, duration. Use 1–3 axes — let the words dictate.\n    28\t\n    29\t### 2. Extract etymology\n    30\t\n    31\tRoot language + original meaning, compactly: \"L. solvere 'to loosen'\". Grounds why the word feels the way it does. Omit when uncertain. Well-established roots only (Latin, OE, OF, Greek).\n    32\t\n    33\t### 3. Compose concrete scenarios\n    34\t\n    35\tOne vivid scenario per word (2–4 sentences) where only that word is the natural choice. Must make the reader think \"yes, that's exactly when I'd say this.\"\n    36\t\n    37\t### 4. Assign a compact gist\n    38\t\n    39\t2–4 word gist per word: \"Endure, adapt\" or \"Fully eliminate.\"\n    40\t\n    41\t### 5. Find the shared metaphor\n    42\t\n    43\tIdentify one concrete object or situation that all the words can relate to differently. The metaphor should emerge from the cluster's semantics — ideally from an etymology (e.g., solvere = \"untie\" → a knot). Each word becomes a distinct posture/relationship to that object.\n    44\t\n    45\tTest: can you draw N figures each doing something visibly different with the same object? If yes, the metaphor works.\n    46\t\n    47\t### 6. Build both visuals\n    48\t\n    49\tAlways produce two `show_widget` calls with prose between them. Call `visualize:read_me` before the first.\n    50\t\n    51\t**Visual 1 — Positional map.** Shows *where* each word sits on the semantic axes.\n    52\t\n    53\tFormat by word count and axis count:\n    54\t- 2–3 words, 1–2 axes → Side-by-side panels with gradient spectrum\n    55\t- 3–6 words, 2 axes → Interactive 2D scatter (clickable dots, click reveals scenario)\n    56\t- 3–6 words, 3 axes → Interactive 3D scatter via Three.js (fall back to 2D if 3rd axis adds negligible separation)\n    57\t- 6+ words → Grouped card layout by primary dimension\n    58\t\n    59\t**Visual 2 — Metaphor illustration.** Shows *what* each word feels like via the shared metaphor from step 5.\n    60\t\n    61\tDraw the same object N times (once per word). Each scene shows a stick figure (or equivalent agent) relating to the object differently — the posture embodies the word's meaning. Scenes are side-by-side in one SVG, separated by subtle dividers. Click a scene to reveal the etymological story.\n    62\t\n    63\tKey rules:\n    64\t- The metaphor object must be visually identical across scenes; only the figure's relationship to it changes.\n    65\t- Resolution axis runs left-to-right (least resolved → most resolved).\n    66\t- Stick figures, not icons. Simple shapes. The drawing communicates through posture and spatial relationship, not detail.\n    67\t\n    68\t### Design principles\n    69\t\n    70\t- Distinct muted color per word; theme-aware for dark mode.\n    71\t- Etymology as small italic text beside each label.\n    72\t- Click to reveal scenario — don't dump all at once.\n    73\t- Visualizations should be self-contained: core distinction readable without prose.\n    74\t\n    75\t### Prose after the visuals\n    76\t\n    77\tNot a restatement — add connections and traps:\n    78\t- 1–2 key relationships (\"You can address and fail to solve, but can't solve without addressing.\")\n    79\t- Common confusion pairs and why they trip people up.\n    80\t- Register restrictions (\"You wouldn't tackle a bereavement — wrong energy.\")\n    81\t\n    82\t## Constraints\n    83\t\n    84\t- Etymologies must be accurate.\n    85\t- Scenarios must feel natural to a native speaker.\n    86\t- Use the Visualizer tool (show_widget), not artifacts.",
      "uuid": "e55b0b33-98bb-4595-80df-5505bb9bb07e"
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

This is a vocabulary/etymology question about "invert" vs "inverse". Let me think through the analysis workflow:

1. **Identifying axes**: These aren't near-synonyms exactly — they're related forms (verb vs adjective/noun) derived from the same root. "Invert" is a verb (the action), "inverse" is an adjective/noun (the result/state). Key axes: process vs state, action vs result.

2. **Etymology**: Both from Latin *invertere* — *in-* (into/against) + *vertere* (to turn). So literally "to turn against/inside-out."
   
3. **Practical distinction**: When you invert a fraction, you're performing the action of flipping it, whereas the inverse of multiplication describes the structural relationship between two operations. The shared metaphor is a hand flipping a card — invert is the motion itself, inverse is the card's new state or the relationship between the two sides.

4. **Reframing the question**: These words aren't really competing synonyms; they're morphologically and semantically linked but serve different grammatical functions. The real insight is how the verb form describes an active process while the noun/adjective form describes the resulting state or relationship. I should explore the shared etymology, how the grammatical shift changes meaning, and where each appears across different domains like mathematics, music, and logic.

5. **Visual approach**: Rather than showing them as opposites, I could use an axis or spectrum showing how they branch from the same root, plus a metaphor like a coin being flipped to illustrate the process-versus-state distinction.

6. **The core insight**: *Inverse* is essentially the past participle of *invertere* that's crystallized into an adjective or noun—it literally means "that which has been inverted" or "the state of being inverted." So *invert* captures the action of turning something around, while *inverse* captures what results from that action or the standing relationship between two things.

Now I'm thinking about how to visualize this distinction. I want to show the grammatical and semantic split that stems from their shared Latin root, using a framework that highlights the difference between process and state. I'll create two visuals: one showing the morphological relationship with axes for process versus state and temporal progression, and another using the glove metaphor—one panel showing the active turning motion and the other showing the final inside-out state.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-08T02:35:23.494050Z",
  "stop_timestamp": "2026-04-08T02:35:23.646255Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01ECXa1x3h8Ta8qwf9jvkRpL",
  "name": "visualize:read_me",
  "input": {
    "modules": [
      "diagram",
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
  "tool_use_id": "toolu_01ECXa1x3h8Ta8qwf9jvkRpL",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "# Imagine — Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` — SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` — UI mockups, forms, cards, dashboards\n- `interactive` — interactive explainers with controls\n- `chart` — charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` — illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget — hard limits:**\n- Box subtitles: ≤5 words. Detail goes in click-through (`sendPrompt`) or the prose below — not the box.\n- Colors: ≤2 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: ≤4 boxes at full width (~140px each). 5+ boxes → shrink to ≤110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing \"click to learn more\" in prose, the diagram itself must ACTUALLY be sparse. Don't promise brevity then front-load everything.\n\n**Accessibility:** For HTML widgets, begin with a visually-hidden `<h2 class=\"sr-only\">` containing a one-sentence summary of the visualization for screen-reader users. (SVG widgets use `role=\"img\"` with `<title>` and `<desc>` instead — see SVG setup.)\n\nYou create rich visual content — SVG diagrams/illustrations and HTML interactive widgets — that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn't notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** — All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks \"explain X\", write the explanation in your response and use the tool only for the visual that accompanies it. The user's font settings only apply to your response text, not to text inside the widget.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) → content HTML → `<script>` last.\n- **SVG**: `<defs>` (markers) → visual elements immediately.\n- Prefer inline `style=\"...\"` over `<style>` blocks — inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules — that's fine, but don't bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji — use CSS shapes or SVG paths\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only — host provides the bg)\n- **Typography**: The default font is Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-serif)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px — all `font-weight: 500`. Heading color is pre-set to `var(--color-text-primary)` — don't override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 — they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally — no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` — the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style=\"min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;\">` and put the modal inside — it's a faux viewport that actually contributes layout height.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` — just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text — never plain black or generic gray.\n- **Corners**: use `border-radius: var(--border-radius-md)` (or `-lg` for cards) in HTML. In SVG, `rx=\"4\"` is the default — larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** — if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** — see Philosophy above.\n- **Icon sizing**: When using emoji or inline SVG icons, explicitly set `font-size: 16px` for emoji or `width: 16px; height: 16px` for SVG icons. Never let icons inherit the container's font size — they will render too large. For larger decorative icons, use 24px max.\n- No tabs, carousels, or `display: none` sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)\n- No nested scrolling — auto-fit height.\n- Scripts execute after streaming — load libraries via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` (UMD globals), then use the global in a plain `<script>` that follows.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`. All other origins are blocked by the sandbox — the request silently fails.\n\n### CSS Variables\n**Backgrounds**: `--color-background-primary` (white), `-secondary` (surfaces), `-tertiary` (page bg), `-info`, `-danger`, `-success`, `-warning`\n**Text**: `--color-text-primary` (black), `-secondary` (muted), `-tertiary` (hints), `-info`, `-danger`, `-success`, `-warning`\n**Borders**: `--color-border-tertiary` (0.15α, default), `-secondary` (0.3α, hover), `-primary` (0.4α), semantic `-info/-danger/-success/-warning`\n**Typography**: `--font-sans`, `--font-serif`, `--font-mono`\n**Layout**: `--border-radius-md` (8px), `--border-radius-lg` (12px — preferred for most components), `--border-radius-xl` (16px)\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** — every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes — they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) — never omit fill or use `fill=\"inherit\"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--color-text-primary, --color-text-secondary) for text. Never hardcode colors like color: #333 — invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user's next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href=\"https://...\">` just works — clicks are intercepted and open the host's link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n\n\n## Color palette\n\n9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.\n\n| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |\n|-------|------|------|-----|-----|-----|-----|-----|------|\n| `c-purple` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |\n| `c-teal` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |\n| `c-coral` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |\n| `c-pink` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |\n| `c-gray` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |\n| `c-blue` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |\n| `c-green` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |\n| `c-amber` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |\n| `c-red` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |\n\n**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:\n- Group nodes by **category** — all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.\n- For illustrative diagrams, map colors to **physical properties** — warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.\n- Use **gray for neutral/structural** nodes (start, end, generic steps).\n- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.\n- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept — those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)\n\n**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --color-text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** — title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.\n\n**Light/dark mode quick pick** — use only stops from the table, never off-table hex values:\n- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**\n- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**\n- Apply `c-{ramp}` to a `<g>` wrapping shape+text, or directly to a `<rect>`/`<circle>`/`<ellipse>`. Never to `<path>` — paths don't get ramp fill. For colored connector strokes use inline `stroke=\"#...\"` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.\n\nFor status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.\n\n\n## SVG setup\n\n**ViewBox safety checklist** — before finalizing any SVG, verify:\n1. Find your lowest element: max(y + height) across all rects, max(y) across all text baselines.\n2. Set viewBox height = that value + 40px buffer.\n3. Find your rightmost element: max(x + width) across all rects. All content must stay within x=0 to x=680.\n4. For text with text-anchor=\"end\", the text extends LEFT from x. If x=118 and text is 200px wide, it starts at x=-82 — outside the viewBox. Increase x or use text-anchor=\"start\".\n5. Never use negative x or y coordinates. The viewBox starts at 0,0.\n6. Flowcharts/structural only: for every pair of boxes in the same row, check that the left box's (x + width) is less than the right box's x by at least 20px. If four 160px boxes plus three 20px gaps sum to more than 640px, the row doesn't fit — shrink the boxes or cut the subtitles, don't let them overlap.\n\n**SVG setup**: `<svg width=\"100%\" viewBox=\"0 0 680 H\" role=\"img\"><title>…</title><desc>…</desc>…` — 680px wide, flexible height. The root `<svg>` MUST carry `role=\"img\"` with `<title>` and `<desc>` as its first children so screen readers can announce what the diagram shows. Set H to fit content tightly — the last element's bottom edge + 40px padding. Don't leave excess empty space below the content. Safe area: x=40 to x=640, y=40 to y=(H-40). Background transparent. **Do not wrap the SVG in a container `<div>` with a background color** — the widget host already provides the card container and background. Output the raw `<svg>` element directly.\n\n**The 680 in viewBox is load-bearing — do not change it.** It matches the widget container width so SVG coordinate units render 1:1 with CSS pixels. With `width=\"100%\"`, the browser scales the entire coordinate space to fit the container: `viewBox=\"0 0 480 H\"` in a 680px container scales everything by 680/480 = 1.42×, so your `class=\"th\"` 14px text renders at ~20px. The font calibration table below and all \"text fits in box\" math assume 1:1. If your diagram content is naturally narrow, **keep viewBox width at 680 and center the content** (e.g. content spans x=180..500) — do not shrink the viewBox to hug the content. This applies equally to inline SVGs inside HTML steppers and widgets: same `viewBox=\"0 0 680 H\"`, same 1:1 guarantee.\n\n**viewBox height:** After layout, find max_y (bottom-most point of any shape, including text baselines + 4px descent). Set viewBox height = max_y + 20. Don't guess.\n\n**text-anchor='end' at x<60 is risky** — the longest label will extend left past x=0. Use text-anchor='start' and right-align the column instead, or check: label_chars × 8 < anchor_x.\n\n**One SVG per tool call** — each call must contain exactly one <svg> element. Never leave an abandoned or partial SVG in the output. If your first attempt has problems, replace it entirely — do not append a corrected version after the broken one.\n\n**Style rules for all diagrams**:\n- Every `<text>` element must carry one of the pre-built classes (`t`, `ts`, `th`). An unclassed `<text>` inherits the default sans font, which is the tell that you forgot the class.\n- Use only two font sizes: 14px for node/region labels (class=\"t\" or \"th\"), 12px for subtitles, descriptions, and arrow labels (class=\"ts\"). No other sizes.\n- No decorative step numbers, large numbering, or oversized headings outside boxes.\n- No icons or illustrations inside boxes — text only. (Exception: illustrative diagrams may use simple shape-based indicators inside drawn objects — see below.)\n- Sentence case on all labels.\n\n**Font size calibration for diagram text labels** - Here's csv table to give you better sense of the Anthropic Sans font rendering width:\n```csv\ntext, chars length, font-weight, font-size, rendered width\nAuthentication Service, chars: 22, font-weight: 500, font-size: 14px, width: 167px\nBackground Job Processor, chars: 24, font-weight: 500, font-size: 14px, width: 201px\nDetects and validates incoming tokens, chars: 37, font-weight: 400, font-size: 14px, width: 279px\nforwards request to, chars: 19, font-weight: 400, font-size: 12px, width: 123px\nデータベースサーバー接続, chars: 12, font-weight: 400, font-size: 14px, width: 181px\n```\n\nBefore placing text in a box, check: does (text width + 2×padding) fit the container?\n\n**SVG `<text>` never auto-wraps.** Every line break needs an explicit `<tspan x=\"...\" dy=\"1.2em\">`. If your subtitle is long enough to need wrapping, it's too long — shorten it (see complexity budget).\n\n**Example check**: You want to put \"Glucose (C₆H₁₂O₆)\" in a rounded rect. The text is 20 characters at 14px ≈ 180px wide. Add 2×24px padding = 228px minimum box width. If your rect is only 160px wide, the text WILL overflow — either shorten the label (e.g. just \"Glucose\") or widen the box. Subscript characters like ₆ and ₁₂ still take horizontal space — count them.\n\n**Pre-built classes** (already loaded in SVG widget):\n- `class=\"t\"` = sans 14px primary, `class=\"ts\"` = sans 12px secondary, `class=\"th\"` = sans 14px medium (500)\n- `class=\"box\"` = neutral rect (bg-secondary fill, border stroke)\n- `class=\"node\"` = clickable group with hover effect (cursor pointer, slight dim on hover)\n- `class=\"arr\"` = arrow line (1.5px, open chevron head)\n- `class=\"leader\"` = dashed leader line (tertiary stroke, 0.5px, dashed)\n- `class=\"c-{ramp}\"` = colored node (c-blue, c-teal, c-amber, c-green, c-red, c-purple, c-coral, c-pink, c-gray). Apply to `<g>` or shape element (rect/circle/ellipse), NOT to paths. Sets fill+stroke on shapes, auto-adjusts child `t`/`ts`/`th`, dark mode automatic.\n\n**c-{ramp} nesting:** These classes use direct-child selectors (`>`). Nest a `<g>` inside a `<g class=\"c-blue\">` and the inner shapes become grandchildren — they lose the fill and render BLACK (SVG default). Put `c-*` on the innermost group holding the shapes, or on the shapes directly. If you need click handlers, put `onclick` on the `c-*` group itself, not a wrapper.\n\n- Short aliases: `var(--p)`, `var(--s)`, `var(--t)`, `var(--bg2)`, `var(--b)`\n- Arrow marker: always include this `<defs>` at the start of every SVG:\n  `<defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker></defs>`\n  Then use `marker-end=\"url(#arrow)\"` on lines. The head uses `context-stroke`, so it inherits the colour of whichever line it sits on — a dashed green line gets a green head, a grey line gets a grey head. Never a colour mismatch. Do not add filters or extra markers to `<defs>`. `<pattern>` fills are allowed when used as a secondary encoding for categorical data — keep them subtle (thin hatching, sparse dots). Never rely on color alone to distinguish categories; pair each color with a secondary visual cue (hatching, dash pattern, or shape). Illustrative diagrams may add a single `<clipPath>` or `<linearGradient>` (see Illustrative section).\n\n**Minimize standalone labels.** Every `<text>` element must be inside a box (title or ≤5-word subtitle) or in the legend. Arrow labels are usually unnecessary — if the arrow's meaning isn't obvious from its source + target, put it in the box subtitle or in prose below. Labels floating in space collide with things and are ambiguous.\n\n**Stroke width:** Use 0.5px strokes for diagram borders and edges — not 1px or 2px. Thin strokes feel more refined.\n\n**Connector paths need `fill=\"none\"`.** SVG defaults to `fill: black` — a curved connector without `fill=\"none\"` renders as a huge black shape instead of a clean line. Every `<path>` or `<polyline>` used as a connector/arrow MUST have `fill=\"none\"`. Only set fill on shapes meant to be filled (rects, circles, polygons).\n\n**Rect rounding:** `rx=\"4\"` for subtle corners. `rx=\"8\"` max for emphasized rounding. `rx` ≥ half the height = pill shape — deliberate only.\n\n**Schematic containers use dashed rects with a label.** Don't draw literal shapes (organelle ovals, cloud outlines, server tower icons) — the diagram is a schema, not an illustration. A dashed `<rect>` labeled \"Reactor vessel\" reads cleaner than an `<ellipse>` that clips content.\n\n**Lines stop at component edges.** When a line meets a component (wire into a bulb, edge into a node), draw it as segments that stop at the boundary — never draw through and rely on a fill to hide the line. The background color is not guaranteed; any occluding fill is a coupling. Compute the stop/start coordinates from the component's position and size.\n\n**Physical-color scenes (sky, water, grass, skin, materials):** Use ALL hardcoded hex — never mix with `c-*` theme classes. The scene should not invert in dark mode. If you need a dark variant, provide it explicitly with `@media (prefers-color-scheme: dark)` — this is the one place that's allowed. Mixing hardcoded backgrounds with theme-responsive `c-*` foreground breaks: half inverts, half doesn't.\n\n**No rotated text**. `<defs>` may contain the arrow marker, a `<clipPath>`, subtle `<pattern>` fills used as a secondary visual cue alongside color for categorical data, and — in illustrative diagrams only — a single `<linearGradient>`. Nothing else: no filters, no extra markers.\n\n\n## Diagram types\n*\"Explain how compound interest works\" / \"How does a process scheduler work\"*\n\n**Two rules that cause most diagram failures — check these before writing each arrow and each box:**\n1. **Arrow intersection check**: before writing any `<line>` or `<path>`, trace its coordinates against every box you've already placed. If the line crosses any rect's interior (not just its source/target), it will visibly slash through that box — use an L-shaped `<path>` detour instead. This applies to arrows crossing labels too.\n2. **Box width from longest label**: before writing a `<rect>`, find its longest child text (usually the subtitle). `rect_width = max(title_chars × 8, subtitle_chars × 7) + 24`. A 100px-wide box holds at most a 10-char subtitle. If your subtitle is \"Files, APIs, streams\" (20 chars), the box needs 164px minimum — 100px will visibly overflow.\n\n**Tier packing:** Compute total width BEFORE placing. Example — 4 pub/sub consumer boxes:\n- WRONG: x=40,160,260,360 w=160 → 40-60px overlaps (4×160=640 > 480 available)\n- RIGHT: x=50,200,350,500 w=130 gap=20 → fits (4×130 + 3×20 = 580 ≤ 590 safe width; right edge at 630 ≤ 640)\nWork bottom-up for trees: size leaf tier first, parent width ≥ sum of children.\n\n**Diagrams are the hardest use case** — they have the highest failure rate due to precise coordinate math. Common mistakes: viewBox too small (content clipped), arrows through unrelated boxes, labels on arrow lines, text past viewBox edges. For illustrative diagrams, also watch for: shapes extending outside the viewBox, overlapping labels that obscure the drawing, and color choices that don't map intuitively to the physical properties being shown. Double-check coordinates before finalizing.\n\nUse SVG for diagrams. The widget automatically wraps SVG output in a card.\n\n**Pick the right diagram type.** The decision is about *intent*, not subject matter. Ask: is the user trying to *document* this, or *understand* it?\n\n**Reference diagrams** — the user wants a map they can point at. Precision matters more than feeling. Boxes, labels, arrows, containment. These are the diagrams you'd find in documentation.\n- **Flowchart** — steps in sequence, decisions branching, data transforming. Good for: approval workflows, request lifecycles, build pipelines, \"what happens when I click submit\". Trigger phrases: *\"walk me through the process\"*, *\"what are the steps\"*, *\"what's the flow\"*.\n- **Structural diagram** — things inside other things. Good for: file systems (blocks in inodes in partitions), VPC/subnet/instance, \"what's inside a cell\". Trigger phrases: *\"what's the architecture\"*, *\"how is this organised\"*, *\"where does X live\"*.\n\n**Intuition diagrams** — the user wants to *feel* how something works. The goal isn't a correct map, it's the right mental model. These should look nothing like a flowchart. The subject doesn't need a physical form — it needs a *visual metaphor*.\n- **Illustrative diagram** — draw the mechanism. Physical things get cross-sections (water heaters, engines, lungs). Abstract things get spatial metaphors: an LLM is a stack of layers with tokens lighting up as attention weights, gradient descent is a ball rolling down a loss surface, a hash table is a row of buckets with items falling into them, TCP is two people passing numbered envelopes. Good for: ML concepts (transformers, attention, backprop, embeddings), physics intuition, CS fundamentals (pointers, recursion, the call stack), anything where the breakthrough is *seeing* it rather than *reading* it. Trigger phrases: *\"how does X actually work\"*, *\"explain X\"*, *\"I don't get X\"*, *\"give me an intuition for X\"*.\n\n**Route on the verb, not the noun.** Same subject, different diagram depending on what was asked:\n\n| User says | Type | What to draw |\n|---|---|---|\n| \"how do LLMs work\" | **Illustrative** | Token row, stacked layer slabs, attention threads glowing warm between tokens. Go interactive if you can. |\n| \"transformer architecture\" | Structural | Labelled boxes: embedding, attention heads, FFN, layer norm. |\n| \"how does attention work\" | **Illustrative** | One query token, a fan of lines to every key, line opacity = weight. |\n| \"how does gradient descent work\" | **Illustrative** | Contour surface, a ball, a trail of steps. Slider for learning rate. |\n| \"what are the training steps\" | Flowchart | Forward → loss → backward → update. Boxes and arrows. |\n| \"how does TCP work\" | **Illustrative** | Two endpoints, numbered packets in flight, an ACK returning. |\n| \"TCP handshake sequence\" | Flowchart | SYN → SYN-ACK → ACK. Three boxes. |\n| \"explain the Krebs cycle\" / \"how does the event loop work\" | **HTML stepper** | Click through stages. Never a ring. |\n| \"how does a hash map work\" | **Illustrative** | Key falling through a funnel into one of N buckets. |\n| \"draw the database schema\" / \"show me the ERD\" | **mermaid.js** | `erDiagram` syntax. Not SVG. |\n\nThe illustrative route is the default for *\"how does X work\"* with no further qualification. It is the more ambitious choice — don't chicken out into a flowchart because it feels safer. Claude draws these well.\n\nDon't mix families in one diagram. If you need both, draw the intuition version first (build the mental model), then the reference version (fill in the precise labels) as a second tool call with prose between.\n\n**For complex topics, use multiple SVG calls** — break the explanation into a series of smaller diagrams rather than one dense diagram. Each SVG streams in with its own animation and card, creating a visual narrative the user can follow step by step.\n\n**Always add prose between diagrams** — never stack multiple SVG calls back-to-back without text. Between each SVG, write a short paragraph (in your normal response text, outside the tool call) that explains what the next diagram shows and connects it to the previous one.\n\n**Promise only what you deliver** — if your response text says \"here are three diagrams\", you must include all three tool calls. Never promise a follow-up diagram and omit it. If you can only fit one diagram, adjust your text to match. One complete diagram is better than three promised and one delivered.\n\n#### Flowchart\n\nFor sequential processes, cause-and-effect, decision trees.\n\n**Planning**: Size boxes to fit their text generously. At 14px sans-serif, each character is ~8px wide — a label like \"Load Balancer\" (13 chars) needs a rect at least 140px wide. When in doubt, make boxes wider and leave more space between them. Cramped diagrams are the most common failure mode.\n\n**Special characters are wider**: Chemical formulas (C₆H₁₂O₆), math notation (∑, ∫, √), subscripts/superscripts via <tspan> with dy/baseline-shift, and Unicode symbols all render wider than plain Latin characters. For labels containing formulas or special notation, add 30-50% extra width to your estimate. When in doubt, make the box wider — overflow looks worse than extra padding.\n\n**Spacing**: 60px minimum between boxes, 24px padding inside boxes, 12px between text and edges. Leave 10px gap between arrowheads and box edges. Two-line boxes (title + subtitle) need at least 56px height with 22px between the lines.\n\n**Vertical text placement**: Every `<text>` inside a box needs `dominant-baseline=\"central\"`, with y set to the *centre* of the slot it sits in. Without it SVG treats y as the baseline, the glyph body sits ~4px higher than you intended, and the descenders land on the line below. Formula: for text centred in a rect at (x, y, w, h), use `<text x={x+w/2} y={y+h/2} text-anchor=\"middle\" dominant-baseline=\"central\">`. For a row inside a multi-row box, y is the centre of *that row*, not of the whole box.\n\n**Layout**: Prefer single-direction flows (all top-down or all left-right). Keep diagrams simple — max 4-5 nodes per diagram. The widget is narrow (~680px) so complex layouts break.\n\n**When the prompt itself is over budget**: if the user lists 6+ components (\"draw me auth, products, orders, payments, gateway, queue\"), don't draw all of them in one pass — you'll get overlapping boxes and arrows through text, every time. Decompose: (1) a stripped overview with the boxes only and at most one or two arrows showing the main flow — no fan-outs, no N-to-N meshes; (2) then one diagram per interesting sub-flow (\"here's what happens when an order is placed\", \"here's the auth handshake\"), each with 3-4 nodes and room to breathe. Count the nouns before you draw. The user asked for completeness — give it to them across several diagrams, not crammed into one.\n\n**Cycles don't get drawn as rings.** If the last stage feeds back into the first (Krebs cycle, event loop, GC mark-and-sweep, TCP retransmit), your instinct is to place the stages around a circle. Don't. Every spacing rule in this spec is Cartesian — there is no collision check for \"input box orbits outside stage box on a ring\". You will get satellite boxes overlapping the stages they feed, labels sitting on the dashed circle, and tangential arrows that point nowhere. The ring is decoration; the loop is conveyed by the return arrow.\n\nBuild a stepper in HTML. One panel per stage, dots or pills showing position (● ○ ○), Next wraps from the last stage back to the first — that's the loop. Each panel owns its inputs and products: an event loop's pending callbacks live *inside* the Poll panel, not floating next to a box on a ring. Nothing collides because nothing shares the canvas. Only fall back to a linear SVG (stages in a row, curved `<path>` return arrow) when there's one input and one output total and no per-stage detail to show.\n\n**Feedback loops in linear flows:** Don't draw a physical arrow traversing the layout (it fights the flow direction and clips edges). Instead:\n- Small `↻` glyph + text near the cycle point: `<text>↻ returns to start</text>`\n- Or restructure the whole diagram as a circle if the cycle IS the point\n\n**Arrows:** A line from A to B must not cross any other box or label. If the direct path crosses something, route around with an L-bend: `<path d=\"M x1 y1 L x1 ymid L x2 ymid L x2 y2\"/>`. Place arrow labels in clear space, not on the midpoint.\n\nKeep all nodes the same height when they have the same content type (e.g. all single-line boxes = 44px, all two-line boxes = 56px).\n\n**Flowchart components** — use these patterns consistently:\n\n*Single-line node* (44px tall): title only. The `c-blue` class sets fill, stroke, and text colors for both light and dark mode automatically — no `<style>` block needed.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about T-cells')\">\n  <rect x=\"100\" y=\"20\" width=\"180\" height=\"44\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"190\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"central\">T-cells</text>\n</g>\n```\n\n*Two-line node* (56px tall): bold title + muted subtitle.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about dendritic cells')\">\n  <rect x=\"100\" y=\"20\" width=\"200\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"200\" y=\"38\" text-anchor=\"middle\" dominant-baseline=\"central\">Dendritic cells</text>\n  <text class=\"ts\" x=\"200\" y=\"56\" text-anchor=\"middle\" dominant-baseline=\"central\">Detect foreign antigens</text>\n</g>\n```\n\n*Connector* (no label — meaning is clear from source + target):\n```svg\n<line x1=\"200\" y1=\"76\" x2=\"200\" y2=\"120\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n*Neutral node* (gray, for start/end/generic steps): use `class=\"box\"` for auto-themed fill/stroke, and default text classes.\n\nMake all nodes clickable by default — wrap in `<g class=\"node\" onclick=\"sendPrompt('...')\">`. The hover effect is built in.\n\n#### Structural diagram\n\nFor concepts where physical or logical containment matters — things inside other things.\n\n**When to use**: The explanation depends on *where* processes happen. Examples: how a cell works (organelles inside a cell), how a file system works (blocks inside inodes inside partitions), how a building's HVAC works (ducts inside floors inside a building), how a CPU cache hierarchy works (L1 inside core, L2 shared).\n\n**Core idea**: Large rounded rects are containers. Smaller rects inside them are regions or sub-structures. Text labels describe what happens in each region. Arrows show flow between regions or from external inputs/outputs.\n\n**Container rules**:\n- Outermost container: large rounded rect, rx=20-24, lightest fill (50 stop), 0.5px stroke (600 stop). Label at top-left inside, 14px bold.\n- Inner regions: medium rounded rects, rx=8-12, next shade fill (100-200 stop). Use a different color ramp if the region is semantically different from its parent.\n- 20px minimum padding inside every container — text and inner regions must not touch the container edges.\n- Max 2-3 nesting levels. Deeper nesting gets unreadable at 680px width.\n\n**Layout**:\n- Place inner regions side by side within the container, with 16px+ gap between them.\n- External inputs (sunlight, water, data, requests) sit outside the container with arrows pointing in.\n- External outputs sit outside with arrows pointing out.\n- Keep external labels short — one word or a short phrase. Details go in the prose between diagrams.\n\n**What goes inside regions**: Text only — the region name (14px bold) and a short description of what happens there (12px). Don't put flowchart-style boxes inside regions. Don't draw illustrations or icons inside.\n\n**Structural container example** (library branch with two side-by-side regions, an internal labeled arrow, and an external input). ViewBox 700x320, horizontal layout, color classes handle both light and dark mode — no `<style>` block:\n```svg\n<defs>\n  <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n<!-- Outer container -->\n<g class=\"c-green\">\n  <rect x=\"120\" y=\"30\" width=\"560\" height=\"260\" rx=\"20\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"400\" y=\"62\" text-anchor=\"middle\">Library branch</text>\n  <text class=\"ts\" x=\"400\" y=\"80\" text-anchor=\"middle\">Main floor</text>\n</g>\n<!-- Inner: Circulation desk -->\n<g class=\"c-teal\">\n  <rect x=\"150\" y=\"100\" width=\"220\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"260\" y=\"130\" text-anchor=\"middle\">Circulation desk</text>\n  <text class=\"ts\" x=\"260\" y=\"148\" text-anchor=\"middle\">Checkouts, returns</text>\n</g>\n<!-- Inner: Reading room -->\n<g class=\"c-amber\">\n  <rect x=\"450\" y=\"100\" width=\"210\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"555\" y=\"130\" text-anchor=\"middle\">Reading room</text>\n  <text class=\"ts\" x=\"555\" y=\"148\" text-anchor=\"middle\">Seating, reference</text>\n</g>\n<!-- Arrow between inner boxes with label -->\n<text class=\"ts\" x=\"410\" y=\"175\" text-anchor=\"middle\">Books</text>\n<line x1=\"370\" y1=\"185\" x2=\"448\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n<!-- External input: New acq. — text vertically aligned with arrow -->\n<text class=\"ts\" x=\"40\" y=\"185\" text-anchor=\"middle\">New acq.</text>\n<line x1=\"75\" y1=\"185\" x2=\"118\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n**Color in structural diagrams**: Nested regions need distinct ramps — `c-{ramp}` classes resolve to fixed fill/stroke stops, so the same class on parent and child gives identical fills and flattens the hierarchy. Pick a *related* ramp for inner structures (e.g. Green for the library envelope, Teal for the circulation desk inside it) and a *contrasting* ramp for a region that does something functionally different (e.g. Amber for the reading room). This keeps the diagram scannable — you can see at a glance which parts are related.\n\n**Database schemas / ERDs — use mermaid.js, not SVG.** A schema table is a header plus N field rows plus typed columns plus crow's-foot connectors. That is a text-layout problem and hand-placing it in SVG fails the same way every time. mermaid.js `erDiagram` does layout, cardinality, and connector routing for free. ERDs only; everything else stays in SVG.\n\n```\nerDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has\n  USERS {\n    uuid id PK\n    string email\n    timestamp created_at\n  }\n  POSTS {\n    uuid id PK\n    uuid user_id FK\n    string title\n  }\n```\n\nUse HTML for ERDs. Import and initialize in a `<script type=\"module\">`. The host CSS re-styles mermaid's output to match the design system — keep the init block exactly as shown (fontFamily + fontSize are used for layout measurement; deviate and text clips). After rendering, replace sharp-cornered entity `<path>` elements with rounded `<rect rx=\"8\">` to match the design system, and strip borders from attribute rows (only the outer container and header row keep visible borders — alternating fill colors separate the rows):\n```html\n<style>\n#erd svg.erDiagram .divider path { stroke-opacity: 0.5; }\n#erd svg.erDiagram .row-rect-odd path,\n#erd svg.erDiagram .row-rect-odd rect,\n#erd svg.erDiagram .row-rect-even path,\n#erd svg.erDiagram .row-rect-even rect { stroke: none !important; }\n</style>\n<div id=\"erd\"></div>\n<script type=\"module\">\nimport mermaid from 'https://esm.sh/mermaid@11/dist/mermaid.esm.min.mjs';\nconst dark = matchMedia('(prefers-color-scheme: dark)').matches;\nawait document.fonts.ready;\nmermaid.initialize({\n  startOnLoad: false,\n  theme: 'base',\n  fontFamily: '\"Anthropic Sans\", sans-serif',\n  themeVariables: {\n    darkMode: dark,\n    fontSize: '13px',\n    fontFamily: '\"Anthropic Sans\", sans-serif',\n    lineColor: dark ? '#9c9a92' : '#73726c',\n    textColor: dark ? '#c2c0b6' : '#3d3d3a',\n  },\n});\nconst { svg } = await mermaid.render('erd-svg', `erDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has`);\ndocument.getElementById('erd').innerHTML = svg;\n\n// Round only the outermost entity box corners (not internal row stripes)\ndocument.querySelectorAll('#erd svg.erDiagram .node').forEach(node => {\n  const firstPath = node.querySelector('path[d]');\n  if (!firstPath) return;\n  const d = firstPath.getAttribute('d');\n  const nums = d.match(/-?[\\d.]+/g)?.map(Number);\n  if (!nums || nums.length < 8) return;\n  const xs = [nums[0], nums[2], nums[4], nums[6]];\n  const ys = [nums[1], nums[3], nums[5], nums[7]];\n  const x = Math.min(...xs), y = Math.min(...ys);\n  const w = Math.max(...xs) - x, h = Math.max(...ys) - y;\n  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');\n  rect.setAttribute('x', x); rect.setAttribute('y', y);\n  rect.setAttribute('width', w); rect.setAttribute('height', h);\n  rect.setAttribute('rx', '8');\n  for (const a of ['fill', 'stroke', 'stroke-width', 'class', 'style']) {\n    if (firstPath.hasAttribute(a)) rect.setAttribute(a, firstPath.getAttribute(a));\n  }\n  firstPath.replaceWith(rect);\n});\n\n// Strip borders from attribute rows (mermaid v11: .row-rect-odd / .row-rect-even)\ndocument.querySelectorAll('#erd svg.erDiagram .row-rect-odd path, #erd svg.erDiagram .row-rect-even path').forEach(p => {\n  p.setAttribute('stroke', 'none');\n});\n</script>\n```\n\nWorks identically for `classDiagram` — swap the diagram source; init stays the same.\n\n#### Illustrative diagram\n\nFor building *intuition*. The subject might be physical (an engine, a lung) or completely abstract (attention, recursion, gradient descent) — what matters is that a spatial drawing conveys the mechanism better than labelled boxes would. These are the diagrams that make someone go \"oh, *that's* what it's doing.\"\n\n**Two flavours, same rules:**\n- **Physical subjects** get drawn as simplified versions of themselves. Cross-sections, cutaways, schematics. A water heater is a tank with a burner underneath. A lung is a branching tree in a cavity. You're drawing *the thing*, stylised.\n- **Abstract subjects** get drawn as *spatial metaphors*. You're inventing a shape for something that doesn't have one — but the shape should make the mechanism obvious. A transformer is a stack of horizontal slabs with a bright thread of attention connecting tokens across layers. A hash function is a funnel scattering items into a row of buckets. The call stack is literally a stack of frames growing and shrinking. Embeddings are dots clustering in space. The metaphor *is* the explanation.\n\nThis is the most ambitious diagram type and the one Claude is best at. Lean into it. Use colour for intensity (a hot attention weight glows amber, a cold one stays gray). Use repetition for scale (many small circles = many parameters).\n\n**Prefer interactive over static.** A static cross-section is a good answer; a cross-section you can *operate* is a great one. The decision rule: if the real-world system has a control, give the diagram that control. A water heater has a thermostat — so give the user a slider that shifts the hot/cold boundary, a toggle that fires the burner and animates convection currents. An LLM has input tokens — let the user click one and watch the attention weights re-fan. A cache has a hit rate — let them drag it and watch latency change. Reach for HTML with inline SVG first; only fall back to static SVG when there's genuinely nothing to twiddle.\n\n**When NOT to use**: The user is asking for a *reference*, not an *intuition*. \"What are the components of a transformer\" wants labelled boxes — that's a structural diagram. \"Walk me through our CI pipeline\" wants sequential steps — that's a flowchart. Also skip this when the metaphor would be arbitrary rather than revealing: drawing \"the cloud\" as a cloud shape or \"microservices\" as little houses doesn't teach anything about how they work. If the drawing doesn't make the *mechanism* clearer, don't draw it.\n\n**Fidelity ceiling**: These are schematics, not illustrations. Every shape should read at a glance. If a `<path>` needs more than ~6 segments to draw, simplify it. A tank is a rounded rect, not a Bézier portrait of a tank. A flame is three triangles, not a fire. Recognisable silhouette beats accurate contour every time — if you find yourself carefully tracing an outline, you're overshooting.\n\n**Core principle**: Draw the mechanism, not a diagram *about* the mechanism. Spatial arrangement carries the meaning; labels annotate. A good illustrative diagram works with the labels removed.\n\n**What changes from flowchart/structural rules**:\n\n- **Shapes are freeform.** Use `<path>`, `<ellipse>`, `<circle>`, `<polygon>`, and curved lines to represent real forms. A water tank is a tall rect with rounded bottom. A heart valve is a pair of curved paths. A circuit trace is a thin polyline. You are not limited to rounded rects.\n- **Layout follows the subject's geometry**, not a grid. If the thing is tall and narrow (a water heater, a thermometer), the diagram is tall and narrow. If it's wide and flat (a PCB, a geological cross-section), the diagram is wide. Let the subject dictate proportions within the 680px viewBox width.\n- **Color encodes intensity**, not category. For physical subjects: warm ramps (amber, coral, red) = heat/energy/pressure, cool ramps (blue, teal) = cold/calm, gray = inert structure. For abstract subjects: warm = active/high-weight/attended-to, cool or gray = dormant/low-weight/ignored. A user should be able to glance at the diagram and see *where the action is* without reading a single label.\n- **Layering and overlap are encouraged — for shapes.** Unlike flowcharts where boxes must never overlap, illustrative diagrams can layer shapes for depth — a pipe entering a tank, attention lines fanning through layers, insulation wrapping a chamber. Use z-ordering (later in source = on top) deliberately.\n- **Text is the exception — never let a stroke cross it.** The overlap permission is for shapes only. Every label needs 8px of clear air between its baseline/cap-height and the nearest stroke. Don't solve this with a background rect — solve it by *placing the text somewhere else*. Labels go in the quiet regions: above the drawing, below it, in the margin with a leader line, or in the gap between two fans of lines. If there is no quiet region, the drawing is too dense — remove something or split into two diagrams.\n- **Small shape-based indicators are allowed** when they communicate physical state. Triangles for flames. Circles for bubbles or particles. Wavy lines for steam or heat radiation. Parallel lines for vibration. These aren't decoration — they tell the user what's happening physically. Keep them simple: basic SVG primitives, not detailed illustrations.\n- **One gradient per diagram is permitted** — the only exception to the global no-gradients rule — and only to show a *continuous* physical property across a region (temperature stratification in a tank, pressure drop along a pipe, concentration in a solution). It must be a single `<linearGradient>` between exactly two stops from the same colour ramp. No radial gradients, no multi-stop fades, no gradient-as-aesthetic. If two stacked flat-fill rects communicate the same thing, do that instead.\n- **Animation is permitted for interactive HTML versions.** Use CSS `@keyframes` animating only `transform` and `opacity`. Keep loops under ~2s, and wrap every animation in `@media (prefers-reduced-motion: no-preference)` so it's opt-out by default. Animations should show how the system *behaves* — convection current, rotation, flow — not just move for the sake of moving. No physics engines or heavy libraries.\n\nAll core rules still apply (viewBox 680px, dark mode mandatory, 14/12px text, pre-built classes, arrow marker, clickable nodes).\n\n**Label placement**:\n- Place labels *outside* the drawn object when possible, with a thin leader line (0.5px dashed, `var(--t)` stroke) pointing to the relevant part. This keeps the illustration uncluttered.\n- For large internal zones (like temperature regions in a tank), labels can sit inside if there's ample clear space — minimum 20px from any edge.\n- External labels sit in the margin area or above/below the object. **Pick one side for labels and put them all there** — at 680px wide you don't have room for a drawing *and* label columns on both sides. Reserve at least 140px of horizontal margin on the label side. Labels on the left are the ones that clip: `text-anchor=\"end\"` extends leftward from x, and with multi-line callouts it's very easy to blow past x=0 without noticing. Default to right-side labels with `text-anchor=\"start\"` unless the subject's geometry forces otherwise. Use `class=\"ts\"` (12px) for callouts, `class=\"th\"` (14px medium) for major component names.\n\n**Composition approach**:\n1. Start with the main object's silhouette — the largest shape, centered in the viewBox.\n2. Add internal structure: chambers, pipes, membranes, mechanical parts.\n3. Add external connections: pipes entering/exiting, arrows showing flow direction, labels for inputs and outputs.\n4. Add state indicators last: color fills showing temperature/pressure/concentration, small animated elements showing movement or energy.\n5. Leave generous whitespace around the object for labels — don't crowd annotations against the viewBox edges.\n\n**Static vs interactive**: Static cutaways and cross-sections work best as pure SVG. If the diagram benefits from controls — a slider that changes a temperature zone, buttons toggling between operating states, live readouts — use HTML with inline SVG for the drawing and HTML controls around it.\n\n**Illustrative diagram example** — interactive water heater cross-section with vivid physical-realism colors, animated convection currents, and controls. Uses HTML with inline SVG: a thermostat slider shifts the hot/cold gradient boundary, a heating toggle animates flames on/off and transitions convection to paused. viewBox is 680x560; tank occupies x=180..440, leaving 140px+ of right margin for labels. Smooth convection paths use `stroke-dasharray:5 5` at ~1.6s for a gentle flow feel. A warm-glow overlay on the hot zone pulses subtly when heating is on. Flame shapes use warm gradient fills and clean opacity transitions. Labels sit along the right margin with leader lines.\n```html\n<style>\n  @keyframes conv { to { stroke-dashoffset: -20; } }\n  @keyframes flicker { 0%,100%{opacity:1} 50%{opacity:.82} }\n  @keyframes glow { 0%,100%{opacity:.3} 50%{opacity:.6} }\n  .conv { stroke-dasharray:5 5; animation: conv var(--dur,1.6s) linear infinite; transition: opacity .5s; }\n  .conv.off { opacity:0; animation-play-state:paused; }\n  #flames path { transition: opacity .5s; }\n  #flames.off path { opacity:0; animation:none; }\n  #flames path:nth-child(odd)  { animation: flicker .6s ease-in-out infinite; }\n  #flames path:nth-child(even) { animation: flicker .8s ease-in-out infinite .15s; }\n  #warm-glow { animation: glow 3s ease-in-out infinite; transition: opacity .5s; }\n  #warm-glow.off { opacity:0; animation:none; }\n  .toggle-track { position:relative;width:32px;height:18px;background:var(--color-border-secondary);border-radius:9px;transition:background .2s;display:inline-block; }\n  .toggle-track:has(input:checked) { background:var(--color-text-info); }\n  #heat-toggle:checked + span { transform:translateX(14px); }\n</style>\n<svg width=\"100%\" viewBox=\"0 0 680 560\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker>\n    <linearGradient id=\"tg\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop id=\"gh\" offset=\"40%\" stop-color=\"#E8593C\" stop-opacity=\"0.45\"/>\n      <stop id=\"gc\" offset=\"40%\" stop-color=\"#3B8BD4\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n    <linearGradient id=\"fg1\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#E85D24\"/><stop offset=\"60%\" stop-color=\"#F2A623\"/><stop offset=\"100%\" stop-color=\"#FCDE5A\"/></linearGradient>\n    <linearGradient id=\"fg2\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#D14520\"/><stop offset=\"50%\" stop-color=\"#EF8B2C\"/><stop offset=\"100%\" stop-color=\"#F9CB42\"/></linearGradient>\n    <linearGradient id=\"pipe-h\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#D05538\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#D05538\" stop-opacity=\".08\"/></linearGradient>\n    <linearGradient id=\"pipe-c\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#3B8BD4\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#3B8BD4\" stop-opacity=\".08\"/></linearGradient>\n    <clipPath id=\"tc\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\"/></clipPath>\n  </defs>\n  <!-- Tank fill -->\n  <g clip-path=\"url(#tc)\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" fill=\"url(#tg)\"/></g>\n  <!-- Warm glow overlay (pulses when heating) -->\n  <g clip-path=\"url(#tc)\"><rect id=\"warm-glow\" x=\"180\" y=\"55\" width=\"260\" height=\"160\" fill=\"#E8593C\" opacity=\".3\"/></g>\n  <!-- Tank shell (double stroke for solidity) -->\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"2.5\" opacity=\".25\"/>\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"1\"/>\n  <!-- Hot pipe out (top right) -->\n  <rect x=\"370\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-h)\"/>\n  <path d=\"M378 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <!-- Cold pipe in + dip tube (top left) -->\n  <rect x=\"234\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-c)\"/>\n  <path d=\"M242 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <path d=\"M242 55V395\" stroke=\"var(--t)\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\".5\"/>\n  <!-- Convection currents (curved paths at different speeds) -->\n  <path class=\"conv\" style=\"--dur:1.6s\" fill=\"none\" stroke=\"#D05538\" stroke-width=\"1\" opacity=\".5\" d=\"M350 380C355 320,365 240,358 140Q355 110,340 100\"/>\n  <path class=\"conv\" style=\"--dur:2.1s\" fill=\"none\" stroke=\"#C04828\" stroke-width=\".8\" opacity=\".35\" d=\"M300 390C308 340,320 260,315 170Q312 130,298 115\"/>\n  <path class=\"conv\" style=\"--dur:2.6s\" fill=\"none\" stroke=\"#B05535\" stroke-width=\".7\" opacity=\".3\" d=\"M380 370C382 310,388 230,382 150Q378 120,365 110\"/>\n  <!-- Burner bar -->\n  <rect x=\"188\" y=\"454\" width=\"244\" height=\"5\" rx=\"2\" fill=\"var(--t)\" opacity=\".6\"/>\n  <rect x=\"220\" y=\"462\" width=\"180\" height=\"6\" rx=\"3\" fill=\"var(--t)\" opacity=\".3\"/>\n  <!-- Flames (gradient-filled organic shapes) -->\n  <g id=\"flames\">\n    <path d=\"M240,454Q248,430 252,438Q256,424 260,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M278,454Q285,426 290,434Q295,418 300,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M320,454Q328,428 333,436Q338,420 342,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M360,454Q367,430 371,438Q375,422 380,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M398,454Q404,434 408,440Q412,428 416,454Z\" fill=\"url(#fg1)\"/>\n  </g>\n  <!-- Labels (right margin) -->\n  <g class=\"node\" onclick=\"sendPrompt('How does hot water exit the tank?')\">\n    <line class=\"leader\" x1=\"386\" y1=\"34\" x2=\"468\" y2=\"70\"/><circle cx=\"386\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"74\">Hot water outlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the cold water inlet work?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"34\" x2=\"468\" y2=\"140\"/><circle cx=\"250\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"144\">Cold water inlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the dip tube do?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"260\" x2=\"468\" y2=\"220\"/><circle cx=\"250\" cy=\"260\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"224\">Dip tube</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the thermostat control?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"250\" x2=\"468\" y2=\"300\"/><circle cx=\"440\" cy=\"250\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"304\">Thermostat</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What material is the tank made of?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"380\" x2=\"468\" y2=\"380\"/><circle cx=\"440\" cy=\"380\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"384\">Tank wall</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the gas burner heat water?')\">\n    <line class=\"leader\" x1=\"432\" y1=\"454\" x2=\"468\" y2=\"454\"/><circle cx=\"432\" cy=\"454\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"458\">Heating element</text></g>\n</svg>\n<div style=\"display:flex;align-items:center;gap:16px;margin:12px 0 0;font-size:13px;color:var(--color-text-secondary)\">\n  <label style=\"display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none\">\n    <span class=\"toggle-track\">\n      <input type=\"checkbox\" id=\"heat-toggle\" checked onchange=\"toggleHeat(this.checked)\" style=\"position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;margin:0\">\n      <span style=\"position:absolute;top:2px;left:2px;width:14px;height:14px;background:#fff;border-radius:50%;transition:transform .2s;pointer-events:none\"></span>\n    </span>\n    Heating\n  </label>\n  <span>Thermostat</span>\n  <input type=\"range\" id=\"temp-slider\" min=\"10\" max=\"90\" value=\"40\" style=\"flex:1\" oninput=\"setTemp(this.value)\">\n  <span id=\"temp-label\" style=\"min-width:36px;text-align:right\">40%</span>\n</div>\n<script>\nfunction setTemp(v) {\n  document.getElementById('gh').setAttribute('offset', v+'%');\n  document.getElementById('gc').setAttribute('offset', v+'%');\n  document.getElementById('temp-label').textContent = v+'%';\n}\nfunction toggleHeat(on) {\n  document.getElementById('flames').classList.toggle('off', !on);\n  document.getElementById('warm-glow').classList.toggle('off', !on);\n  document.querySelectorAll('.conv').forEach(p => p.classList.toggle('off', !on));\n}\n</script>\n```\n\n**Illustrative example — abstract subject** (attention in a transformer). Same rules, no physical object. A row of tokens at the bottom, one query token highlighted, weight-scaled lines fanning to every other token. Caption sits below the fan — clear of every stroke — not inside it.\n```svg\n<rect class=\"c-purple\" x=\"60\" y=\"40\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"80\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"120\" width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<text class=\"ts\" x=\"72\" y=\"57\" >Layer 3</text>\n<text class=\"ts\" x=\"72\" y=\"97\" >Layer 2</text>\n<text class=\"ts\" x=\"72\" y=\"137\">Layer 1</text>\n\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"116\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.25\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"228\" y2=\"146\" stroke-width=\"1.5\" opacity=\"0.4\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"340\" y2=\"146\" stroke-width=\"4\"   opacity=\"1.0\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"452\" y2=\"146\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"564\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.2\"/>\n\n<g class=\"node\" onclick=\"sendPrompt('What do the attention weights mean?')\">\n  <rect class=\"c-gray\"  x=\"80\"  y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"192\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-amber\" x=\"304\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"1\"/>\n  <rect class=\"c-gray\"  x=\"416\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"528\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <text class=\"ts\" x=\"116\" y=\"252\" text-anchor=\"middle\">the</text>\n  <text class=\"ts\" x=\"228\" y=\"252\" text-anchor=\"middle\">cat</text>\n  <text class=\"th\" x=\"340\" y=\"252\" text-anchor=\"middle\">sat</text>\n  <text class=\"ts\" x=\"452\" y=\"252\" text-anchor=\"middle\">on</text>\n  <text class=\"ts\" x=\"564\" y=\"252\" text-anchor=\"middle\">the</text>\n</g>\n\n<text class=\"ts\" x=\"340\" y=\"300\" text-anchor=\"middle\">Line thickness = attention weight from \"sat\" to each token</text>\n```\n\nNote what's *not* here: no boxes labelled \"multi-head attention\", no arrows labelled \"Q/K/V\". Those belong in the structural diagram. This one is about the *feeling* of attention — one token looking at every other token with varying intensity.\n\nThese are starting points, not ceilings. For the water heater: add a thermostat slider, animate the convection current, toggle heating vs standby. For the attention diagram: let the user click any token to become the query, scrub through layers, animate the weights settling. The goal is always to *show* how the thing works, not just *label* it.\n\n\n## UI components\n\n### Aesthetic\nFlat, clean, white surfaces. Minimal 0.5px borders. Generous whitespace. No gradients, no shadows (except functional focus rings). Everything should feel native to claude.ai — like it belongs on the page, not embedded from somewhere else.\n\n### Tokens\n- Borders: always `0.5px solid var(--color-border-tertiary)` (or `-secondary` for emphasis)\n- Corner radius: `var(--border-radius-md)` for most elements, `var(--border-radius-lg)` for cards\n- Cards: white bg (`var(--color-background-primary)`), 0.5px border, radius-lg, padding 1rem 1.25rem\n- Form elements (input, select, textarea, button, range slider) are pre-styled — write bare tags. Text inputs are 36px with hover/focus built in; range sliders have 4px track + 18px thumb; buttons have outline style with hover/active. Only add inline styles to override (e.g., different width).\n- Buttons: pre-styled with transparent bg, 0.5px border-secondary, hover bg-secondary, active scale(0.98). If it triggers sendPrompt, append a ↗ arrow.\n- **Round every displayed number.** JS float math leaks artifacts — `0.1 + 0.2` gives `0.30000000000000004`, `7 * 1.1` gives `7.700000000000001`. Any number that reaches the screen (slider readouts, stat card values, axis labels, data-point labels, tooltips, computed totals) must go through `Math.round()`, `.toFixed(n)`, or `Intl.NumberFormat`. Pick the precision that makes sense for the context — integers for counts, 1–2 decimals for percentages, `toLocaleString()` for currency. For range sliders, also set `step=\"1\"` (or step=\"0.1\" etc.) so the input itself emits round values.\n- Spacing: use rem for vertical rhythm (1rem, 1.5rem, 2rem), px for component-internal gaps (8px, 12px, 16px)\n- Box-shadows: none, except `box-shadow: 0 0 0 Npx` focus rings on inputs\n\n### Metric cards\nFor summary numbers (revenue, count, percentage) — surface card with muted 13px label above, 24px/500 number below. `background: var(--color-background-secondary)`, no border, `border-radius: var(--border-radius-md)`, padding 1rem. Use in grids of 2-4 with `gap: 12px`. Distinct from raised cards (which have white bg + border).\n\n### Layout\n- Editorial (explanatory content): no card wrapper, prose flows naturally\n- Card (bounded objects like a contact record, receipt): single raised card wraps the whole thing\n- Don't put tables here — output them as markdown in your response text\n\n**Grid overflow:** `grid-template-columns: 1fr` has `min-width: auto` by default — children with large min-content push the column past the container. Use `minmax(0, 1fr)` to clamp.\n\n**Table overflow:** Tables with many columns auto-expand past `width: 100%` if cell contents exceed it. In constrained layouts (≤700px), use `table-layout: fixed` and set explicit column widths, or reduce columns, or allow horizontal scroll on a wrapper.\n\n### Mockup presentation\nContained mockups — mobile screens, chat threads, single cards, modals, small UI components — should sit on a background surface (`var(--color-background-secondary)` container with `border-radius: var(--border-radius-lg)` and padding, or a device frame) so they don't float naked on the widget canvas. Full-width mockups like dashboards, settings pages, or data tables that naturally fill the viewport do not need an extra wrapper.\n\n### 1. Interactive explainer — learn how something works\n*\"Explain how compound interest works\" / \"Teach me about sorting algorithms\"*\n\nUse HTML for the interactive controls — sliders, buttons, live state displays, charts. Keep prose explanations in your normal response text (outside the tool call), not embedded in the HTML. No card wrapper. Whitespace is the container.\n\n```html\n<div style=\"display: flex; align-items: center; gap: 12px; margin: 0 0 1.5rem;\">\n  <label style=\"font-size: 14px; color: var(--color-text-secondary);\">Years</label>\n  <input type=\"range\" min=\"1\" max=\"40\" value=\"20\" id=\"years\" style=\"flex: 1;\" />\n  <span style=\"font-size: 14px; font-weight: 500; min-width: 24px;\" id=\"years-out\">20</span>\n</div>\n\n<div style=\"display: flex; align-items: baseline; gap: 8px; margin: 0 0 1.5rem;\">\n  <span style=\"font-size: 14px; color: var(--color-text-secondary);\">£1,000 →</span>\n  <span style=\"font-size: 24px; font-weight: 500;\" id=\"result\">£3,870</span>\n</div>\n\n<div style=\"margin: 2rem 0; position: relative; height: 240px;\">\n  <canvas id=\"chart\"></canvas>\n</div>\n```\n\nUse `sendPrompt()` to let users ask follow-ups: `sendPrompt('What if I increase the rate to 10%?')`\n\n### 2. Compare options — decision making\n*\"Compare pricing and features of these products\" / \"Help me choose between React and Vue\"*\n\nUse HTML. Side-by-side card grid for options. Highlight differences with semantic colors. Interactive elements for filtering or weighting.\n\n- Use `repeat(auto-fit, minmax(160px, 1fr))` for responsive columns\n- Each option in a card. Use badges for key differentiators.\n- Add `sendPrompt()` buttons: `sendPrompt('Tell me more about the Pro plan')`\n- Don't put comparison tables inside this tool — output them as regular markdown tables in your response text instead. The tool is for the visual card grid only.\n- When one option is recommended or \"most popular\", accent its card with `border: 2px solid var(--color-border-info)` only (2px is deliberate — the only exception to the 0.5px rule, used to accent featured items) — keep the same background and border as the other cards. Add a small badge (e.g. \"Most popular\") above or inside the card header using `background: var(--color-background-info); color: var(--color-text-info); font-size: 12px; padding: 4px 12px; border-radius: var(--border-radius-md)`.\n\n### 3. Data record — bounded UI object\n*\"Show me a Salesforce contact card\" / \"Create a receipt for this order\"*\n\nUse HTML. Wrap the entire thing in a single raised card. All content is sans-serif since it's pure UI. Use an avatar/initials circle for people (see example below).\n\n```html\n<div style=\"background: var(--color-background-primary); border-radius: var(--border-radius-lg); border: 0.5px solid var(--color-border-tertiary); padding: 1rem 1.25rem;\">\n  <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 16px;\">\n    <div style=\"width: 44px; height: 44px; border-radius: 50%; background: var(--color-background-info); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 14px; color: var(--color-text-info);\">MR</div>\n    <div>\n      <p style=\"font-weight: 500; font-size: 15px; margin: 0;\">Maya Rodriguez</p>\n      <p style=\"font-size: 13px; color: var(--color-text-secondary); margin: 0;\">VP of Engineering</p>\n    </div>\n  </div>\n  <div style=\"border-top: 0.5px solid var(--color-border-tertiary); padding-top: 12px;\">\n    <table style=\"width: 100%; font-size: 13px;\">\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Email</td><td style=\"text-align: right; padding: 4px 0; color: var(--color-text-info);\">m.rodriguez@acme.com</td></tr>\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Phone</td><td style=\"text-align: right; padding: 4px 0;\">+1 (415) 555-0172</td></tr>\n    </table>\n  </div>\n</div>\n```\n",
      "uuid": "87f08d5f-081e-4d3b-aa81-a29773038208"
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

Now I have the design system loaded. Let me do the analysis:

**invert** (verb) — Latin *invertere*: *in-* (against/into) + *vertere* (to turn). Active process, transitive verb. The act of turning something upside-down, reversing the order, or flipping the relationship.

**inverse** (adjective/noun) — Latin *inversus*, past participle of *invertere*. The result/state of having been inverted; the standing structural relationship that is the reverse of another. Frozen into the state of reversal.

Key relationship: they share the same Latin root. 

So "inverse" is essentially the past participle of "invert" crystallized into an adjective or noun form—the action versus its resulting state. I can organize this around two main axes: the process-versus-state distinction, where invert captures the dynamic action and inverse captures the static relationship, and the temporal dimension of during-the-act versus standing-relationship. With just these two words, I'll use side-by-side panels to show the contrast. For a visual metaphor, I'll use a card being flipped over, drawing from that shared *vertere* root meaning "to turn."

I'm settling on the fraction example as the clearest illustration: inverting 3/4 means performing the action to get 4/3, while 4/3 is the inverse—the standing relationship itself. Though that's somewhat domain-specific, the glove metaphor works just as well: inverting is the active motion of turning it inside out, while inverse is the resulting inside-out state. ioned"), and as a compound noun in scientific phrases like "the inverse square law"—all describing states or relationships rather than actions. People often mix these up, using "inverse" as a verb when they mean "invert," or vice versa in abstract contexts where the opposite is true. Now I'm planning two visuals: a process-versus-state diagram showing where each word fits, and an hourglass metaphor with one panel showing the physical rotation and another showing the resting flipped position.

Writing SVG illustrations... Building the SVG layout... Writing hourglass SVG... Writing SVG hourglass path... Building the hourglass scenes...

For the "invert" scene, I'll show the hourglass upright with the stick figure actively flipping it mid-rotation using arc arrows, and for "inverse" I'll display it upside-down at rest with a label. This distinction clarifies that invert is the action of turning while inverse is the resulting flipped state. The shared metaphor ties back to the Latin root *vertere* meaning "to turn"—an hourglass is the perfect object to embody this concept since you literally invert it.

Now I'm thinking through the layout for the positional map. I could do a horizontal spectrum showing where each word falls on a process-to-state axis, or keep it simpler with two side-by-side panels connected by a shared root element. For just two words, a clean paired layout makes sense.

I'll go with a spectrum bar at the top spanning from action on the left to state on the right, position the two words along it with connecting lines, and place their info panels below. I'm picturing teal for "invert" and purple for "inverse" to keep them visually distinct.

Building the SVG layout... Writing SVG layout... I'm setting the panel positioning with specific y-coordinates for each element, and I want to make it clickable so users can reveal the scenario. For the spectrum visualization, I'm considering a teal-to-purple gradient, though I need to check the constraints around gradient usage—it seems functional gradients for illustrative diagrams are permitted when they're the core visual element rather than decorative.

Actually, I'm going to keep it simpler and avoid the gradient altogether. I'll represent the spectrum with just a line and position the two dots on it to convey the teal and purple endpoints, letting their placement do the work instead.

Building the SVG structure... Writing SVG visualization... Writing SVG markup...

Now I'm realizing I need to check how text colors work within the c-teal class—it applies fill to shapes, so I should verify the text styling is inheriting correctly.

Actually, the pre-built classes handle this automatically for text elements like `ts` and `th` inside color groups, so I just need to use those classes consistently. The divider line might be an issue though—`currentColor` might not work as expected inside the c-teal group, so I should use an explicit opacity stroke instead.

Let me also verify the panel layout is correct. I'm mapping out the vertical spacing: the panel starts at y=125 with a total height of 185 pixels, and I need to position the title, etymology, divider line, grammar label, definition, and domain hint at the right intervals to keep everything balanced.

Now I'm checking that the panels align properly with the leader lines from the dots. The invert dot is at cx=205 and the panel center is around 185, which is close enough. The inverse dot is at cx=510 and its panel center is around 495, also close. The horizontal spacing works out—there's a 60-pixel gap between the panels, and everything fits within the 640-pixel width with room to spare.

For the etymology, I want to be precise: *inverse* comes from the Latin past participle *inversus* of *invertere*, which breaks down as *in-* plus *vertere* meaning "to turn." This makes the two words structurally connected—*inverse* literally means "that which has been inverted." Now I'm thinking through the grammatical and semantic details for each term: *invert* is a transitive verb capturing the action of turning or flipping, while *inverse* functions as a noun or adjective describing the result or state of that action, with applications across general usage, mathematics, and music.

Building the SVG visualization now with an hourglass metaphor—I'll create two side-by-side scenes where the left shows a figure actively flipping the hourglass to represent the verb *invert*, and the right shows the hourglass resting upside-down to represent the noun/adjective *inverse*. I'm constructing the hourglass using geometric shapes with careful coordinate placement.

Constructing the hourglass geometry...

I need to tighten up the waist where the two triangles meet, making it a narrow passage. For the two scenes, I'm showing the normal orientation on the left with sand filling the top bulb, and the inverted version on the right with sand in the bottom bulb instead. Now I'm positioning the left scene with the hourglass centered around coordinates (170, 180) and adding stick figure arms to represent the inversion action.

For the left scene, I want to clearly show the flipping motion—maybe a tilted hourglass mid-rotation with curved arrows indicating the direction of the flip, plus a simple stick figure gripping it. The right scene will show the hourglass at rest in its inverted state, upside-down with no hands, just sitting on a surface line.

Now I'm positioning the stick figure and hourglass in the left scene. I'll place the figure to the left of the hourglass with its arms reaching toward it, and use a 180-degree rotation transform to flip the hourglass for the right scene.

Actually, I think I'm overcomplicating this. Let me strip it down: just show the hourglass with a rotation arrow in the left scene to indicate the inversion action, and the flipped hourglass in the right scene. I could also try using simple hand shapes gripping the sides instead of a full stick figure. Either way, I'll keep it minimal—maybe just the hourglass with rotation indicators on the left and the inverted result on the right with an equals sign between them.

Now I'm working out the hourglass geometry itself. I'll draw it with rectangular caps at the top and bottom, two bulb shapes for the sand chambers, and a narrow waist connecting them. The top bulb will be filled with sand when upright, and I'll flip that for the right scene.

Defining the SVG hourglass structure... No, the waist is the narrow part where the two triangles meet. Let me add a thin rect at the waist:
rect: x=cx-5, y=cy-3, w=10, h=6, rx=1

The sand fill:
- Upright (left scene): amber fill in top bulb polygon
- Inverted (right scene): amber fill in bottom bulb polygon

Actually, let me just use two separate fill polygons:
- Top bulb outline (stroke only in scene 2, filled amber in scene 1)
- Bottom bulb outline (filled amber in scene 2, stroke only in scene 1)

For scene 1 (upright, about to be flipped):
- cx=170, cy=195
- Top bulb: filled with amber (sand)
- Bottom bulb: empty (just outline)

For scene 2 (flipped):
- cx=510, cy=195
- Top bulb: empty
- Bottom bulb: filled with amber

Now I'm deciding on the color approach for the sand. Since this is a stylized hourglass rather than a realistic physical scene, I'll use the c-amber class for consistency with the theme system and dark mode support. Writing SVG clipping mask...

Actually, I'll simplify this and just use a direct hex color for the sand — amber-400 at `#EF9F27` with some opacity to give it depth. For the structural elements like the caps and outline, I'll pull from neutral grays. Now I need to map out the full scene: a 680×420 viewbox split down the middle with a dashed divider, the left side showing the hourglass with "invert" labeled at the top and its etymology below, centered around coordinates 170, 210.

Refining the hourglass dimensions... y=146 to y=280, so that's 142px total. Now I'm adding the rotation arrows to show the invert action — curved paths on both the left and right sides of the hourglass that wrap around counterclockwise, with arrowheads pointing upward to indicate the flipping motion. Then I'll set up the right scene with the "inverse" label and its etymology.

For the inverted hourglass on the right, I'm positioning it at the same center but flipped so the sand settles in the bottom bulb with an amber fill, and I'll add a small surface line to indicate the sand level. I need captions below each scene — "the act of turning over" on the left and "the turned-over state" on the right — and I'm adjusting the SVG viewBox to around 350 in height to accommodate everything with proper padding.

Now I'm laying out the left scene hourglass with the top cap, top bulb filled with amber sand, a narrow waist, an empty bottom bulb, and bottom cap. I'm also adding rotation arrows that curve counterclockwise from the bottom to show the turning motion.

Writing SVG elements... Writing SVG arc path... Writing the right-side arc...

For the static scene on the right, I'll add a ground line beneath the flipped hourglass to show it's settled, and include a caption to label this as the resulting state.

Now I'm setting up the click interactions—wrapping each scene in a clickable group that sends a prompt request when tapped, with "the act of reversal" labeling the left side and "the resulting/reversed state" on the right. I'll also add a hint below each scene encouraging interaction.

For the visual styling, I need to color the hourglass structure using secondary text colors with low opacity for the caps and waist, while the sand itself gets an amber fill to stand out against the background. I'm settling on the minimal design approach. Now I need to write out both SVGs with consistent visual language—teal for the "invert" action arrows and purple for the "inverse" state indicator. I'll structure the first SVG with a spectrum axis showing the action-to-state spectrum, complete with labeled endpoints and positioning markers, then build the second hourglass scene to mirror that coherence.

Writing SVG code... I'm verifying the etymology is accurate — *inversus* is indeed the past participle of *invertere*, which is well-established in major English dictionaries. Now I'll write out the SVG, being careful to distinguish between the two words: "invert" traces directly to the Latin verb *invertere* (to turn upside down), while "inverse" comes from the past participle *inversus*.

I'll display each word's etymology in its own panel and add a shared root note below the spectrum showing both derive from *vertere* (to turn). The layout has the spectrum from y=60 to y=120, the shared root note at y=128, and the two etymology panels starting at y=148, with the overall viewBox height at 330.

Writing SVG code... I'm calculating the center positions for both panels and adjusting the spectrum dots to align with them — the invert dot goes at x=183 on the left and the inverse dot at x=498 on the right, which positions them appropriately along the spectrum to reflect that "invert" is more process-oriented while "inverse" leans toward state. Writing SVG code... Writing SVG diagram... Writing SVG nodes... I'm second-guessing whether `currentColor` will work properly for the divider lines inside the themed panels—it depends on whether the `c-teal` and `c-purple` classes actually set the `color` CSS property, which I'm not certain about. To be safe, I should use an explicit CSS variable like `var(--color-border-secondary)` for those divider strokes instead. Checking the label positioning now — "invert" and "inverse" sit 20px above their respective dots, which gives enough breathing room. The spectrum category labels at y=72 are close to the dot text labels at y=68, so I need to verify they don't overlap horizontally, especially where "action · process" starts around x=100 and "invert" is at x=177.

Let me reorganize the vertical spacing: pushing the word labels higher to y=50, moving the axis end labels to y=66, and keeping the spectrum line at y=95 with dots at cy=92 should create clear separation between all three label layers. Now I'm checking the spacing more carefully — the 33px gap between the word labels and axis labels keeps them visually distinct. I'm reorganizing the layout so the etymology sits at y=62, the axis line moves to y=82 with its endpoint labels positioned above at y=78, and the dots align with the spectrum line.

For the panels below, I'm setting them from y=148 to y=308 with content distributed across title, divider, grammar, gist, domain, and a click hint, leaving a comfortable 33px buffer at the bottom before the panel edge.

Now I'm checking the text widths for the etymology labels — the left one at x=177 spans about 231 pixels and fits within the left panel bounds, while the right one at x=502 is roughly 210 pixels wide and clears the right panel edge comfortably. I need to verify the positioning of the "action · process" label and the "invert" text to make sure they don't overlap with the panel boundaries.

The layout checks out, so I'm ready to write the SVG code for the semantic spectrum diagram.

Writing SVG code... Building the SVG visualization... Writing SVG panels... Writing SVG layout... That's only 3-4px gap. Might be tight.

Let me push axis labels to y=80 and move the line to y=94:
- y=80: axis labels
- y=94: spectrum line + dots

Leader lines: from y=94+7=101 to y=145 (panels start)

Revised:
```
y=45: word labels (th)
y=62: etymology (ts italic)
y=80: axis end labels (ts)
y=94: spectrum line + dots (cy=94)
y=112: shared root (ts italic)
y=145: leader lines end / panels start
```

Gap between etym baseline (y=62) and axis labels (y=80): 18px. At 12px font, etym descenders reach ~y=65, axis cap tops start ~y=71. 6px gap. Fine.

Now checking the etymology text widths. The Latin phrases are roughly 31-33 characters each, which at 12px font gives me around 217-231px wide. Centering them at x=177 and x=502 keeps everything within the viewBox boundaries and clear of the right panel at x=375. The axis labels like "action · process" and "state · result" fit comfortably in their allocated space too.

The shared root phrase and the panel text all check out dimensionally. The layout is solid.

Now I'm setting up the second SVG with an hourglass metaphor — two side-by-side scenes showing the invert and inverse operations, each with an hourglass centered in its half of the viewBox. I'm defining the hourglass geometry with a top cap, bulbs, and a narrow waist connecting them.

Styling the sand particles with a warm orange color while using CSS variables for the structural elements, but I need to decide on a consistent approach for mixing hardcoded colors with variables. to be careful. The spec says "Physical-color scenes: Use ALL hardcoded hex." But this isn't really a physical color scene — it's a metaphor illustration with one physical-ish element (sand). 

The rule is about scenes where the whole scene has physical colors. Here I have a minimal schematic with one colored element. I'll use CSS vars for the structural parts and the amber hex for sand. This mixing should be fine since the structural parts use neutral vars that adapt, while the sand is a warm accent color.

For the outline stroke of polygons: `stroke="var(--color-border-primary)"` stroke-width="1"
For the empty bulb fill: `fill="var(--color-background-secondary)"`
For the filled bulb (sand): `fill="#EF9F27"` opacity="0.85"
For caps and waist: `fill="var(--color-background-secondary)"` stroke="var(--color-border-primary)" stroke-width="0.5"

Now for the rotation arrows, I'm drawing curved paths on both sides of the left scene to show the counterclockwise motion, with arrowheads positioned to indicate the direction of the rotation. Writing the arc paths... Adding sub-captions below each scene to clarify the distinction between the action and result, then checking that the rotation arrows stay within bounds and planning a dashed divider at x=340 to separate the two scenes. I'm also considering what interactive elements to add, like click handlers for examples, and whether the right scene needs a ground line to match the left one.

Writing SVG code... Building the SVG diagram... Writing SVG visualization... Completing the hourglass visualization... Writing SVG arcs and arrowheads... scene extends to x=675, so that's tight but fits. ✓

Let me verify the bulb polygons are correctly positioned—the top narrows from 60 pixels wide down to 14 pixels, and the bottom mirrors that same taper. Ground line sits just below the bottom cap. For the captions, the left one is about 266 pixels wide when centered, staying well within the left scene bounds, while the right caption is longer at around 329 pixels and pushes closer to the edge but still fits within the overall viewBox width.

Now I need to add click handlers to make each scene interactive. I'm thinking of wrapping the entire scene—hourglass elements and labels together—in a clickable group so the whole thing responds to user input.

Actually, I'll keep it simpler and just make the hourglass itself clickable, with the click triggering a prompt about that word. For the captions, I'm reconsidering whether to use full example sentences or shorter, more concise labels. The longer captions do show the grammatical difference well, but they take up space. I could add a "tap for example" hint instead to keep things cleaner.

Let me settle on shorter captions that still capture the distinction—something like "verb: 'invert the matrix'" on the left and "noun/adj: 'the inverse of x'" on the right. These are concise enough without sacrificing clarity. I could add a second line saying "tap for an example sentence" but that might clutter the bottom, so I'll stick with one caption and make the whole scene clickable.

One final detail: I'm using "arr2" as the marker id, but since each SVG widget is isolated in its own iframe, reusing the same id across multiple widgets on the page should be fine. Now I'm ready to write out the code cleanly.

For the prose structure, I'm planning to weave together the etymology and usage patterns. I'll start with a brief intro explaining how both words stem from the Latin *invertere* (in- + vertere, meaning "to turn"), then show the first visual, follow with connecting prose about how they diverged morphologically, present the second visual, and finish with a section on usage patterns and common pitfalls.

The key insight I want to highlight is that *invert* functions as a verb while *inverse* is typically an adjective or noun, and this grammatical distinction is rooted in their Latin origins — *inverse* literally preserves the past participle form meaning "that which has been turned." I'll note that swapping their roles sounds unnatural, like saying "please inverse this" or "the invert of multiplication."

Now I'm ready to write the actual response.

</details>

Both words descend from the same Latin root, so the right way to understand their relationship is morphological first, semantic second. Here's the analysis.

**Etymology.** Latin *vertere* meant "to turn." The prefixed verb *invertere* (*in-* + *vertere*) meant "to turn inside-out or upside-down." English borrowed this verb directly as *invert*. But *inverse* entered English not as a fresh coinage — it IS the Latin past participle *inversus*, meaning "that which has been turned." So structurally, *inverse* = "the inverted one / the state of having been inverted."

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-08T02:41:52.101740Z",
  "stop_timestamp": "2026-04-08T02:42:05.149433Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_014uFZ4DDZu26iRqhCKbKDaE",
  "name": "visualize:show_widget",
  "input": {
    "title": "invert_vs_inverse_positional_map",
    "loading_messages": [
      "Placing words on the spectrum…",
      "Checking etymologies…"
    ],
    "widget_code": "<svg width=\"100%\" viewBox=\"0 0 680 335\" role=\"img\">\n<title>Semantic spectrum: invert vs inverse</title>\n<desc>Invert sits at the action/process end; inverse at the state/result end. Both derive from Latin vertere meaning to turn.</desc>\n<defs>\n  <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n\n<text class=\"th\" x=\"177\" y=\"46\" text-anchor=\"middle\">invert</text>\n<text class=\"ts\" x=\"177\" y=\"63\" text-anchor=\"middle\" font-style=\"italic\">L. invertere — to turn inside out</text>\n\n<text class=\"th\" x=\"502\" y=\"46\" text-anchor=\"middle\">inverse</text>\n<text class=\"ts\" x=\"502\" y=\"63\" text-anchor=\"middle\" font-style=\"italic\">L. inversus — p.p. of invertere</text>\n\n<text class=\"ts\" x=\"100\" y=\"80\" text-anchor=\"start\">action · process</text>\n<text class=\"ts\" x=\"580\" y=\"80\" text-anchor=\"end\">state · result</text>\n\n<line x1=\"100\" y1=\"94\" x2=\"578\" y2=\"94\" stroke=\"var(--color-border-secondary)\" stroke-width=\"1\" marker-end=\"url(#arrow)\" marker-start=\"url(#arrow)\"/>\n\n<g class=\"c-teal\"><circle cx=\"177\" cy=\"94\" r=\"7\"/></g>\n<g class=\"c-purple\"><circle cx=\"502\" cy=\"94\" r=\"7\"/></g>\n\n<text class=\"ts\" x=\"340\" y=\"114\" text-anchor=\"middle\" font-style=\"italic\">shared root: L. vertere — \"to turn\"</text>\n\n<line x1=\"177\" y1=\"101\" x2=\"177\" y2=\"148\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\" stroke-dasharray=\"3 3\"/>\n<line x1=\"502\" y1=\"101\" x2=\"502\" y2=\"148\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\" stroke-dasharray=\"3 3\"/>\n\n<g class=\"node c-teal\" onclick=\"sendPrompt('Give me three vivid example sentences using invert — one physical, one mathematical, one computing')\">\n  <rect x=\"50\" y=\"148\" width=\"255\" height=\"162\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"177\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"central\">invert</text>\n  <line x1=\"70\" y1=\"194\" x2=\"285\" y2=\"194\" stroke=\"var(--color-border-secondary)\" stroke-width=\"0.5\"/>\n  <text class=\"ts\" x=\"177\" y=\"213\" text-anchor=\"middle\">verb, transitive</text>\n  <text class=\"ts\" x=\"177\" y=\"233\" text-anchor=\"middle\">performs the reversal</text>\n  <text class=\"ts\" x=\"177\" y=\"253\" text-anchor=\"middle\">any domain</text>\n  <text class=\"ts\" x=\"177\" y=\"285\" text-anchor=\"middle\" font-style=\"italic\">tap for example sentences →</text>\n</g>\n\n<g class=\"node c-purple\" onclick=\"sendPrompt('Give me three vivid example sentences using inverse — one mathematical, one scientific, one everyday')\">\n  <rect x=\"375\" y=\"148\" width=\"255\" height=\"162\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"502\" y=\"178\" text-anchor=\"middle\" dominant-baseline=\"central\">inverse</text>\n  <line x1=\"395\" y1=\"194\" x2=\"610\" y2=\"194\" stroke=\"var(--color-border-secondary)\" stroke-width=\"0.5\"/>\n  <text class=\"ts\" x=\"502\" y=\"213\" text-anchor=\"middle\">adj. / noun</text>\n  <text class=\"ts\" x=\"502\" y=\"233\" text-anchor=\"middle\">the resulting reversed state</text>\n  <text class=\"ts\" x=\"502\" y=\"253\" text-anchor=\"middle\">esp. math and science</text>\n  <text class=\"ts\" x=\"502\" y=\"285\" text-anchor=\"middle\" font-style=\"italic\">tap for example sentences →</text>\n</g>\n</svg>"
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
  "tool_use_id": "toolu_014uFZ4DDZu26iRqhCKbKDaE",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "424cfbb5-bac9-49b0-b7f9-9ff0fb3b8800"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "2d7ede3f-1278-4bae-9be9-1c6ce0ec655a"
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

Good, first visual rendered. Now let me write the connecting prose and produce the second visual (hourglass metaphor).

</details>

The grammar encodes the whole distinction. *Invert* is always a verb — you do it to something. *Inverse* is almost always an adjective or noun — it names a standing relationship or result. The two roles are fixed: "please inverse this" sounds wrong, and so does "the invert of multiplication."

The shared metaphor for both is an hourglass — the canonical object you *invert*, and whose upside-down position is *the inverse* of its starting orientation.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-08T02:42:35.817856Z",
  "stop_timestamp": "2026-04-08T02:42:49.303415Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01CK5uXjjAB8GYukzMkj1hPp",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": [
      "Drawing the hourglass…",
      "Placing sand…"
    ],
    "title": "invert_vs_inverse_hourglass_metaphor",
    "widget_code": "<svg width=\"100%\" viewBox=\"0 0 680 375\" role=\"img\">\n<title>Hourglass metaphor: invert (act of flipping) vs inverse (the flipped state)</title>\n<desc>Left scene: hands flipping an hourglass with rotation arcs showing the active motion — invert as process. Right scene: hourglass at rest upside down on a surface — inverse as the resulting state.</desc>\n<defs>\n  <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n\n<line x1=\"340\" y1=\"48\" x2=\"340\" y2=\"338\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\" stroke-dasharray=\"6 4\"/>\n\n<text class=\"th\" x=\"170\" y=\"64\" text-anchor=\"middle\">invert</text>\n<text class=\"ts\" x=\"170\" y=\"80\" text-anchor=\"middle\" font-style=\"italic\">active — the act of turning over</text>\n\n<rect x=\"140\" y=\"118\" width=\"60\" height=\"8\" rx=\"3\" fill=\"var(--color-background-secondary)\" stroke=\"var(--color-border-primary)\" stroke-width=\"0.5\"/>\n<polygon points=\"140,126 200,126 177,192 163,192\" fill=\"#EF9F27\" opacity=\"0.85\" stroke=\"var(--color-border-primary)\" stroke-width=\"0.5\"/>\n<rect x=\"163\" y=\"192\" width=\"14\" height=\"8\" rx=\"2\" fill=\"var(--color-background-secondary)\" stroke=\"var(--color-border-primary)\" stroke-width=\"0.5\"/>\n<polygon points=\"140,266 200,266 177,200 163,200\" fill=\"var(--color-background-secondary)\" stroke=\"var(--color-border-primary)\" stroke-width=\"0.5\"/>\n<rect x=\"140\" y=\"266\" width=\"60\" height=\"8\" rx=\"3\" fill=\"var(--color-background-secondary)\" stroke=\"var(--color-border-primary)\" stroke-width=\"0.5\"/>\n\n<path d=\"M 143,274 C 90,274 90,118 143,118\" fill=\"none\" stroke=\"#0F6E56\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n<path d=\"M 197,118 C 250,118 250,274 197,274\" fill=\"none\" stroke=\"#0F6E56\" stroke-width=\"1.5\" marker-end=\"url(#arrow)\"/>\n\n<text class=\"ts\" x=\"170\" y=\"312\" text-anchor=\"middle\">verb: \"invert the fraction\"</text>\n<text class=\"ts\" x=\"170\" y=\"330\" text-anchor=\"middle\" font-style=\"italic\">something is being done</text>\n\n<text class=\"th\" x=\"510\" y=\"64\" text-anchor=\"middle\">inverse</text>\n<text class=\"ts\" x=\"510\" y=\"80\" text-anchor=\"middle\" font-style=\"italic\">static — the resulting reversed state</text>\n\n<rect x=\"480\" y=\"118\" width=\"60\" height=\"8\" rx=\"3\" fill=\"var(--color-background-secondary)\" stroke=\"var(--color-border-primary)\" stroke-width=\"0.5\"/>\n<polygon points=\"480,126 540,126 517,192 503,192\" fill=\"var(--color-background-secondary)\" stroke=\"var(--color-border-primary)\" stroke-width=\"0.5\"/>\n<rect x=\"503\" y=\"192\" width=\"14\" height=\"8\" rx=\"2\" fill=\"var(--color-background-secondary)\" stroke=\"var(--color-border-primary)\" stroke-width=\"0.5\"/>\n<polygon points=\"480,266 540,266 517,200 503,200\" fill=\"#EF9F27\" opacity=\"0.85\" stroke=\"var(--color-border-primary)\" stroke-width=\"0.5\"/>\n<rect x=\"480\" y=\"266\" width=\"60\" height=\"8\" rx=\"3\" fill=\"var(--color-background-secondary)\" stroke=\"var(--color-border-primary)\" stroke-width=\"0.5\"/>\n\n<line x1=\"455\" y1=\"278\" x2=\"565\" y2=\"278\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n\n<text class=\"ts\" x=\"510\" y=\"312\" text-anchor=\"middle\">noun: \"the inverse of sin x\"</text>\n<text class=\"ts\" x=\"510\" y=\"330\" text-anchor=\"middle\" font-style=\"italic\">a standing relationship is named</text>\n</svg>"
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
  "tool_use_id": "toolu_01CK5uXjjAB8GYukzMkj1hPp",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "db2b5c7a-40f1-4ace-8eb4-153ecc8d6256"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "accbe7c2-6d67-4884-a6cf-db8b20b80f5a"
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

Good. Now the prose after the visuals.

</details>

**Key connections and traps**

The morphological bridge is the deepest thing to internalize: *inverse* is the past participle of *invert* fossilized into a noun/adjective. This means every *inverse* implicitly presupposes an *invert* that created it — you can't have an inverse relationship without something having been inverted. The verb is logically prior.

The register divide is real: *invert* feels at home in any domain (invert a jar, invert a selection in Photoshop, invert a chord), while *inverse* gravitates heavily toward mathematics and science ("inverse square law," "additive inverse," "inversely proportional"). In everyday speech, the native English speaker often reaches for "opposite" where a scientist would write "inverse."

The most common confusion: using *inverse* as a verb. You'll hear "inverse the matrix" in non-native or informal speech, but the standard verb is *invert*. In the other direction, *invert* rarely works as a noun — you wouldn't say "the invert of x" in formal writing; the noun slot belongs to *inverse*.

One domain-specific note: in music, "inversion" (from the same root) describes both the process (you *invert* an interval) and the result (an *inverted* interval, or simply *the inversion*) — perfectly mirroring the general verb/noun split.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d6af1-59c3-72df-ae5b-6de447e93fa6",
  "updated_at": "2026-04-08T02:43:40.129651Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d6af1-59c3-7383-ae97-f3cd27241443"
}
```

</details>

### 3. human — 2026-04-08T03:07:43.244858Z

Like inverse proportion and inverted proportion?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d6b0f-532c-7149-937c-b6297f8c85e0",
  "updated_at": "2026-04-08T03:07:43.244858Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d6af1-59c3-72df-ae5b-6de447e93fa6"
}
```

</details>

### 4. assistant — 2026-04-08T03:07:59.994310Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about "inverse proportion" vs "inverted proportion" — which is correct, and what's the difference?

This is a factual/usage question. Let me think about this:

**Inverse proportion** — the standard mathematical term. "x and y are in inverse proportion" means as x increases, y decreases proportionally (xy = k). This is the universally accepted phrasing in mathematics.

**Inverted proportion** — this is rarely used in standard mathematical English. "Inverted" is the past participle used as an adjective, but "inverse proportion" is the established term.

The distinction maps perfectly onto what we just discussed:


- "inverse proportion" uses *inverse* as an adjective describing the TYPE of relationship (a standing state/result)
- "inverted proportion" would use *inverted* (past participle of invert used as adjective) — grammatically possible but not standard

So "inverse proportion" is the correct mathematical term, while "inverted proportion" is non-standard and not used in mathematical English.

</details>

Exactly the right example to test the distinction — and it reveals something clean.

**"Inverse proportion"** is the standard mathematical term. Here, *inverse* is working as an adjective that names the *type of relationship* — a standing structural fact about how x and y relate. It's a label for a state, not a description of something being actively flipped. This is precisely the *inverse* = "state / result" role from the spectrum above.

**"Inverted proportion"** is non-standard in mathematical English. It would use *inverted* (past participle of *invert* used as an adjective), implying the proportion was acted upon and turned upside-down — framing it as something that *happened* rather than a relationship that *exists*. Grammatically it parses, but mathematicians don't say it.

The same pattern holds across the family:

- **inverse function** ✓ (standard) — names the resulting relationship
- **inverted function** ✗ (not used) — would suggest the function was subjected to an action
- **inverse matrix** ✓ — the matrix that is the reversal of another
- **invert a matrix** ✓ — the act of computing it

So the rule of thumb that falls out of the previous discussion holds cleanly here: when you're *naming a type of mathematical relationship*, reach for *inverse* (adjective/noun). When you're *describing the operation you're performing*, reach for *invert* (verb).

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d6b0f-532c-7943-a0f8-138009f7c2e1",
  "updated_at": "2026-04-08T03:07:59.994310Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d6b0f-532c-7149-937c-b6297f8c85e0"
}
```

</details>
