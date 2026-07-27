# Foundational vs foundamental spelling

## Export metadata (verbatim)

```json
{
  "uuid": "c53ac6e8-28e2-4a38-8cee-e3308fb02976",
  "name": "Foundational vs foundamental spelling",
  "summary": "**Conversation Overview**\n\nThe person engaged in a focused vocabulary analysis conversation exploring the distinctions between \"basic,\" \"foundational,\" and \"fundamental.\" The conversation began when the person asked about \"foundational\" versus \"foundamental\" — Claude immediately flagged that \"foundamental\" is not a real English word, identifying it as a common blend-error fusing \"foundational\" and \"fundamental,\" and redirected to the intended comparison.\n\nThe discussion developed through several layers of precision. Claude introduced two analytical axes — scope (domain-specific to universal) and type of priority (structural base layer to logical necessity) — and used these consistently throughout. The person tested their understanding with a concrete domain example, correctly inferring that quantum mechanics is \"fundamental\" rather than \"basic,\" which Claude confirmed and extended: quantum mechanics can also be \"foundational\" but only with a domain qualifier, whereas \"fundamental\" requires none. The person demonstrated strong conceptual engagement, actively forming and testing hypotheses rather than passively receiving definitions.\n\nThe conversation used interactive SVG visualizations (scatter plots and a building metaphor illustration) to map the three words spatially. The person's questions followed a pattern of progressive stress-testing — first establishing the foundational/fundamental distinction, then adding \"basic\" as a third term, then probing edge cases with real-world examples. A summary table the person found useful distinguished the three words by scope and claim type: basic (local, accessibility claim), foundational (local, structural priority claim), and fundamental (universal, logical necessity claim). A key insight the person appeared to find clarifying was that foundational's modesty comes from limiting scope rather than weakening the claim, and that \"basic\" is uniquely capable of self-deprecation in a way the other two words are not.",
  "created_at": "2026-03-29T01:46:01.569098Z",
  "updated_at": "2026-03-30T01:15:08.132927Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-29T01:46:02.962122Z

"foundational" vs  "foundamental"

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3744-ff07-7c2f-a8cc-aadd28065ed8",
  "updated_at": "2026-03-29T01:46:02.962122Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-29T01:46:19.280883Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about "foundational" vs "foundamental" - but "foundamental" is not a real English word. This looks like a common misspelling/confusion. Let me check if this is a vocabulary comparison request or if the user is asking about whether "foundamental" is a real word.

Given Reid's interest in vocabulary analysis, he might think "foundamental" is a word (perhaps confusing it with "fundamental"). I should clarify that "foundamental" is not a standard English word - it's a blend/confusion of "foundational" and "fundamental."

Let me read the vocabulary-visualization skill first since this seems like a vocabulary question.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-29T01:46:07.412515Z",
  "stop_timestamp": "2026-03-29T01:46:07.791189Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Peqz5tBLRkyFeVsAxAUN1m",
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
  "tool_use_id": "toolu_01Peqz5tBLRkyFeVsAxAUN1m",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: vocabulary-visualization\n     3\tdescription: \"Visualize the semantic differences between near-synonym English words using interactive diagrams, scatter plots, and concrete scenario comparisons. Use this skill whenever the user provides a set of 2+ English words or phrases that are near-synonyms and wants to understand how they differ — especially when the user says 'compare these words', 'what's the difference between X and Y', 'visualize the difference', lists multiple quoted words together, or asks for help distinguishing similar vocabulary. Also trigger when the user explicitly references this skill by name. Works for verbs, nouns, adjectives, adverbs, and phrasal verbs. Do NOT use for single-word definition lookups, translation tasks, grammar correction, or writing tasks.\"\n     4\t---\n     5\t\n     6\t# Phase 0 — EVOLVE\n     7\t\n     8\tRead the subsequent <Evolution Log> carefully. Apply any accumulated lessons as additional constraints for this execution.\n     9\t\n    10\t## Evolution Log\n    11\t\n    12\t## #2026-03-23\n    13\t- Positional map alone is incomplete — must also produce a metaphor illustration showing what each word feels like\n    14\t- Skill must mandate two visuals (positional map + metaphor illustration) to prevent scatter-plot-only output\n    15\t- A shared metaphor object (derived from etymology when possible) is the anchor for the illustration\n    16\t\n    17\t# Vocabulary visualization\n    18\t\n    19\tMake semantic differences between near-synonyms visible and felt. Two complementary visuals required: a positional map (where each word sits) and a metaphor illustration (what each word feels like).\n    20\t\n    21\t## Analysis workflow\n    22\t\n    23\t### 1. Identify distinguishing axes\n    24\t\n    25\tFind dimensions that create the most spread for this cluster.\n    26\t\n    27\tCandidates: depth/completeness, energy/agency, resolution, formality, emotional temperature, scope, certainty of outcome, duration. Use 1–3 axes — let the words dictate.\n    28\t\n    29\t### 2. Extract etymology\n    30\t\n    31\tRoot language + original meaning, compactly: \"L. solvere 'to loosen'\". Grounds why the word feels the way it does. Omit when uncertain. Well-established roots only (Latin, OE, OF, Greek).\n    32\t\n    33\t### 3. Compose concrete scenarios\n    34\t\n    35\tOne vivid scenario per word (2–4 sentences) where only that word is the natural choice. Must make the reader think \"yes, that's exactly when I'd say this.\"\n    36\t\n    37\t### 4. Assign a compact gist\n    38\t\n    39\t2–4 word gist per word: \"Endure, adapt\" or \"Fully eliminate.\"\n    40\t\n    41\t### 5. Find the shared metaphor\n    42\t\n    43\tIdentify one concrete object or situation that all the words can relate to differently. The metaphor should emerge from the cluster's semantics — ideally from an etymology (e.g., solvere = \"untie\" → a knot). Each word becomes a distinct posture/relationship to that object.\n    44\t\n    45\tTest: can you draw N figures each doing something visibly different with the same object? If yes, the metaphor works.\n    46\t\n    47\t### 6. Build both visuals\n    48\t\n    49\tAlways produce two `show_widget` calls with prose between them. Call `visualize:read_me` before the first.\n    50\t\n    51\t**Visual 1 — Positional map.** Shows *where* each word sits on the semantic axes.\n    52\t\n    53\tFormat by word count and axis count:\n    54\t- 2–3 words, 1–2 axes → Side-by-side panels with gradient spectrum\n    55\t- 3–6 words, 2 axes → Interactive 2D scatter (clickable dots, click reveals scenario)\n    56\t- 3–6 words, 3 axes → Interactive 3D scatter via Three.js (fall back to 2D if 3rd axis adds negligible separation)\n    57\t- 6+ words → Grouped card layout by primary dimension\n    58\t\n    59\t**Visual 2 — Metaphor illustration.** Shows *what* each word feels like via the shared metaphor from step 5.\n    60\t\n    61\tDraw the same object N times (once per word). Each scene shows a stick figure (or equivalent agent) relating to the object differently — the posture embodies the word's meaning. Scenes are side-by-side in one SVG, separated by subtle dividers. Click a scene to reveal the etymological story.\n    62\t\n    63\tKey rules:\n    64\t- The metaphor object must be visually identical across scenes; only the figure's relationship to it changes.\n    65\t- Resolution axis runs left-to-right (least resolved → most resolved).\n    66\t- Stick figures, not icons. Simple shapes. The drawing communicates through posture and spatial relationship, not detail.\n    67\t\n    68\t### Design principles\n    69\t\n    70\t- Distinct muted color per word; theme-aware for dark mode.\n    71\t- Etymology as small italic text beside each label.\n    72\t- Click to reveal scenario — don't dump all at once.\n    73\t- Visualizations should be self-contained: core distinction readable without prose.\n    74\t\n    75\t### Prose after the visuals\n    76\t\n    77\tNot a restatement — add connections and traps:\n    78\t- 1–2 key relationships (\"You can address and fail to solve, but can't solve without addressing.\")\n    79\t- Common confusion pairs and why they trip people up.\n    80\t- Register restrictions (\"You wouldn't tackle a bereavement — wrong energy.\")\n    81\t\n    82\t## Constraints\n    83\t\n    84\t- Etymologies must be accurate.\n    85\t- Scenarios must feel natural to a native speaker.\n    86\t- Use the Visualizer tool (show_widget), not artifacts.",
      "uuid": "3a86c529-8837-4fdc-a347-f29ce6d567b5"
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

Before diving into this vocabulary comparison, I need to flag something important: "foundamental" is not a real English word. It's a common misspelling/blend of "foundational" and "fundamental." I should clarify this with the user rather than treating them as near-synonyms to compare.

The user might be:
1. Testing me to see if I know this
2. Genuinely unaware that "foundamental" isn't a word
3. Asking me to compare "foundational" vs "fundamental" but made a typo


I'll point out the misspelling and ask which two words they actually want to compare.

</details>

Quick correction before we proceed: **"foundamental" is not a real English word.** It doesn't appear in standard dictionaries and has no established usage. It's a common blend-error — people unconsciously fuse "**found**ational" and "**fund**amental," producing a ghost word that looks plausible but doesn't exist.

You almost certainly meant one of these:

- **"foundational" vs "fundamental"** — two real near-synonyms worth comparing
- A typo for one of the two above

Which did you intend?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3744-ff07-70a1-9de7-31fa9f45089b",
  "updated_at": "2026-03-29T01:46:19.280883Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3744-ff07-7c2f-a8cc-aadd28065ed8"
}
```

</details>

### 3. human — 2026-03-29T01:46:53.417870Z

"foundational" vs "fundamental"

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3745-c391-7006-9549-75f2ccd1141e",
  "updated_at": "2026-03-29T01:46:53.417870Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3744-ff07-70a1-9de7-31fa9f45089b"
}
```

</details>

### 4. assistant — 2026-03-29T01:55:43.327875Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants a vocabulary visualization comparing "foundational" vs "fundamental". Let me read the skill and proceed with the analysis.

I already read the skill. Let me now do the analysis and build the two visuals.

**Analysis:**

**Etymology:**
- "foundational" — from L. *fundare* "to lay a bottom/base" → *fundamentum* "foundation" → foundation (the physical bottom layer). The -al suffix makes it an adjective meaning "of or relating to a foundation."
- "fundamental" — also from L. *fundamentum* "foundation/base" → but came through OF *fondamental* and later directly as a standalone adjective meaning "serving as a foundation, essential." In English it acquired a stronger sense of "irreducible core principle."


- Both words trace back to the same Latin root *fundamentum*, but they've evolved differently in how English speakers use them.

**Distinguishing axes:**
- "foundational" leans structural and sequential—it's the base layer you build on top of—while "fundamental" leans logical and essential—it's the irreducible core principle.
- "foundational" tends to be domain-specific (foundational to a particular field or structure), whereas "fundamental" can feel more universal and absolute.
- "foundational" suggests chronological priority (you learn it first), while "fundamental" implies logical necessity.

I'm mapping these on two axes: structural versus logical/essential on the x-axis, and domain-specific versus universal on the y-axis. "Foundational" sits lower and to the left—it's about building blocks in a particular context. "Fundamental" sits higher and to the right—it's about irreducible truths that hold universally.

The distinction comes down to this: foundational is a base layer you construct from, while fundamental is an irreducible core that's always true. I can see this playing out in concrete examples—like how linear algebra is foundational to quantum mechanics because you need those matrix operations first, whereas the uncertainty principle is fundamental because it's a logical necessity woven into the theory itself.

Both words share that Latin root meaning "bottom," so I'm thinking of a building under construction: foundational is the bricklayer working sequentially at the base, while fundamental is the architect pointing to the load-bearing column that runs through the entire structure. You can't work around the fundamental, but you can build on the foundational.

Now I'm setting up the visuals. With two words and two axes, a 2D scatter plot makes sense to show where each term lands on these dimensions.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-29T01:47:12.985703Z",
  "stop_timestamp": "2026-03-29T01:47:13.187120Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01XFSBSBA743KZAts7xsEaEb",
  "name": "visualize:read_me",
  "input": {
    "modules": [
      "diagram",
      "chart"
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
  "tool_use_id": "toolu_01XFSBSBA743KZAts7xsEaEb",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "# Imagine — Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` — SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` — UI mockups, forms, cards, dashboards\n- `interactive` — interactive explainers with controls\n- `chart` — charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` — illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget — hard limits:**\n- Box subtitles: ≤5 words. Detail goes in click-through (`sendPrompt`) or the prose below — not the box.\n- Colors: ≤2 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: ≤4 boxes at full width (~140px each). 5+ boxes → shrink to ≤110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing \"click to learn more\" in prose, the diagram itself must ACTUALLY be sparse. Don't promise brevity then front-load everything.\n\nYou create rich visual content — SVG diagrams/illustrations and HTML interactive widgets — that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn't notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** — All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks \"explain X\", write the explanation in your response and use the tool only for the visual that accompanies it. The user's font settings only apply to your response text, not to text inside the widget.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) → content HTML → `<script>` last.\n- **SVG**: `<defs>` (markers) → visual elements immediately.\n- Prefer inline `style=\"...\"` over `<style>` blocks — inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules — that's fine, but don't bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji — use CSS shapes or SVG paths\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only — host provides the bg)\n- **Typography**: The default font is Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-serif)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px — all `font-weight: 500`. Heading color is pre-set to `var(--color-text-primary)` — don't override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 — they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally — no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` — the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style=\"min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;\">` and put the modal inside — it's a faux viewport that actually contributes layout height.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` — just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text — never plain black or generic gray.\n- **Corners**: use `border-radius: var(--border-radius-md)` (or `-lg` for cards) in HTML. In SVG, `rx=\"4\"` is the default — larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** — if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** — see Philosophy above.\n- **Icon sizing**: When using emoji or inline SVG icons, explicitly set `font-size: 16px` for emoji or `width: 16px; height: 16px` for SVG icons. Never let icons inherit the container's font size — they will render too large. For larger decorative icons, use 24px max.\n- No tabs, carousels, or `display: none` sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)\n- No nested scrolling — auto-fit height.\n- Scripts execute after streaming — load libraries via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` (UMD globals), then use the global in a plain `<script>` that follows.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`. All other origins are blocked by the sandbox — the request silently fails.\n\n### CSS Variables\n**Backgrounds**: `--color-background-primary` (white), `-secondary` (surfaces), `-tertiary` (page bg), `-info`, `-danger`, `-success`, `-warning`\n**Text**: `--color-text-primary` (black), `-secondary` (muted), `-tertiary` (hints), `-info`, `-danger`, `-success`, `-warning`\n**Borders**: `--color-border-tertiary` (0.15α, default), `-secondary` (0.3α, hover), `-primary` (0.4α), semantic `-info/-danger/-success/-warning`\n**Typography**: `--font-sans`, `--font-serif`, `--font-mono`\n**Layout**: `--border-radius-md` (8px), `--border-radius-lg` (12px — preferred for most components), `--border-radius-xl` (16px)\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** — every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes — they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) — never omit fill or use `fill=\"inherit\"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--color-text-primary, --color-text-secondary) for text. Never hardcode colors like color: #333 — invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user's next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href=\"https://...\">` just works — clicks are intercepted and open the host's link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n\n\n## Color palette\n\n9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.\n\n| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |\n|-------|------|------|-----|-----|-----|-----|-----|------|\n| `c-purple` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |\n| `c-teal` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |\n| `c-coral` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |\n| `c-pink` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |\n| `c-gray` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |\n| `c-blue` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |\n| `c-green` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |\n| `c-amber` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |\n| `c-red` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |\n\n**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:\n- Group nodes by **category** — all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.\n- For illustrative diagrams, map colors to **physical properties** — warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.\n- Use **gray for neutral/structural** nodes (start, end, generic steps).\n- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.\n- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept — those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)\n\n**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --color-text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** — title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.\n\n**Light/dark mode quick pick** — use only stops from the table, never off-table hex values:\n- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**\n- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**\n- Apply `c-{ramp}` to a `<g>` wrapping shape+text, or directly to a `<rect>`/`<circle>`/`<ellipse>`. Never to `<path>` — paths don't get ramp fill. For colored connector strokes use inline `stroke=\"#...\"` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.\n\nFor status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.\n\n\n## SVG setup\n\n**ViewBox safety checklist** — before finalizing any SVG, verify:\n1. Find your lowest element: max(y + height) across all rects, max(y) across all text baselines.\n2. Set viewBox height = that value + 40px buffer.\n3. Find your rightmost element: max(x + width) across all rects. All content must stay within x=0 to x=680.\n4. For text with text-anchor=\"end\", the text extends LEFT from x. If x=118 and text is 200px wide, it starts at x=-82 — outside the viewBox. Increase x or use text-anchor=\"start\".\n5. Never use negative x or y coordinates. The viewBox starts at 0,0.\n6. Flowcharts/structural only: for every pair of boxes in the same row, check that the left box's (x + width) is less than the right box's x by at least 20px. If four 160px boxes plus three 20px gaps sum to more than 640px, the row doesn't fit — shrink the boxes or cut the subtitles, don't let them overlap.\n\n**SVG setup**: `<svg width=\"100%\" viewBox=\"0 0 680 H\">` — 680px wide, flexible height. Set H to fit content tightly — the last element's bottom edge + 40px padding. Don't leave excess empty space below the content. Safe area: x=40 to x=640, y=40 to y=(H-40). Background transparent. **Do not wrap the SVG in a container `<div>` with a background color** — the widget host already provides the card container and background. Output the raw `<svg>` element directly.\n\n**The 680 in viewBox is load-bearing — do not change it.** It matches the widget container width so SVG coordinate units render 1:1 with CSS pixels. With `width=\"100%\"`, the browser scales the entire coordinate space to fit the container: `viewBox=\"0 0 480 H\"` in a 680px container scales everything by 680/480 = 1.42×, so your `class=\"th\"` 14px text renders at ~20px. The font calibration table below and all \"text fits in box\" math assume 1:1. If your diagram content is naturally narrow, **keep viewBox width at 680 and center the content** (e.g. content spans x=180..500) — do not shrink the viewBox to hug the content. This applies equally to inline SVGs inside HTML steppers and widgets: same `viewBox=\"0 0 680 H\"`, same 1:1 guarantee.\n\n**viewBox height:** After layout, find max_y (bottom-most point of any shape, including text baselines + 4px descent). Set viewBox height = max_y + 20. Don't guess.\n\n**text-anchor='end' at x<60 is risky** — the longest label will extend left past x=0. Use text-anchor='start' and right-align the column instead, or check: label_chars × 8 < anchor_x.\n\n**One SVG per tool call** — each call must contain exactly one <svg> element. Never leave an abandoned or partial SVG in the output. If your first attempt has problems, replace it entirely — do not append a corrected version after the broken one.\n\n**Style rules for all diagrams**:\n- Every `<text>` element must carry one of the pre-built classes (`t`, `ts`, `th`). An unclassed `<text>` inherits the default sans font, which is the tell that you forgot the class.\n- Use only two font sizes: 14px for node/region labels (class=\"t\" or \"th\"), 12px for subtitles, descriptions, and arrow labels (class=\"ts\"). No other sizes.\n- No decorative step numbers, large numbering, or oversized headings outside boxes.\n- No icons or illustrations inside boxes — text only. (Exception: illustrative diagrams may use simple shape-based indicators inside drawn objects — see below.)\n- Sentence case on all labels.\n\n**Font size calibration for diagram text labels** - Here's csv table to give you better sense of the Anthropic Sans font rendering width:\n```csv\ntext, chars length, font-weight, font-size, rendered width\nAuthentication Service, chars: 22, font-weight: 500, font-size: 14px, width: 167px\nBackground Job Processor, chars: 24, font-weight: 500, font-size: 14px, width: 201px\nDetects and validates incoming tokens, chars: 37, font-weight: 400, font-size: 14px, width: 279px\nforwards request to, chars: 19, font-weight: 400, font-size: 12px, width: 123px\nデータベースサーバー接続, chars: 12, font-weight: 400, font-size: 14px, width: 181px\n```\n\nBefore placing text in a box, check: does (text width + 2×padding) fit the container?\n\n**SVG `<text>` never auto-wraps.** Every line break needs an explicit `<tspan x=\"...\" dy=\"1.2em\">`. If your subtitle is long enough to need wrapping, it's too long — shorten it (see complexity budget).\n\n**Example check**: You want to put \"Glucose (C₆H₁₂O₆)\" in a rounded rect. The text is 20 characters at 14px ≈ 180px wide. Add 2×24px padding = 228px minimum box width. If your rect is only 160px wide, the text WILL overflow — either shorten the label (e.g. just \"Glucose\") or widen the box. Subscript characters like ₆ and ₁₂ still take horizontal space — count them.\n\n**Pre-built classes** (already loaded in SVG widget):\n- `class=\"t\"` = sans 14px primary, `class=\"ts\"` = sans 12px secondary, `class=\"th\"` = sans 14px medium (500)\n- `class=\"box\"` = neutral rect (bg-secondary fill, border stroke)\n- `class=\"node\"` = clickable group with hover effect (cursor pointer, slight dim on hover)\n- `class=\"arr\"` = arrow line (1.5px, open chevron head)\n- `class=\"leader\"` = dashed leader line (tertiary stroke, 0.5px, dashed)\n- `class=\"c-{ramp}\"` = colored node (c-blue, c-teal, c-amber, c-green, c-red, c-purple, c-coral, c-pink, c-gray). Apply to `<g>` or shape element (rect/circle/ellipse), NOT to paths. Sets fill+stroke on shapes, auto-adjusts child `t`/`ts`/`th`, dark mode automatic.\n\n**c-{ramp} nesting:** These classes use direct-child selectors (`>`). Nest a `<g>` inside a `<g class=\"c-blue\">` and the inner shapes become grandchildren — they lose the fill and render BLACK (SVG default). Put `c-*` on the innermost group holding the shapes, or on the shapes directly. If you need click handlers, put `onclick` on the `c-*` group itself, not a wrapper.\n\n- Short aliases: `var(--p)`, `var(--s)`, `var(--t)`, `var(--bg2)`, `var(--b)`\n- Arrow marker: always include this `<defs>` at the start of every SVG:\n  `<defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker></defs>`\n  Then use `marker-end=\"url(#arrow)\"` on lines. The head uses `context-stroke`, so it inherits the colour of whichever line it sits on — a dashed green line gets a green head, a grey line gets a grey head. Never a colour mismatch. Do not add filters, patterns, or extra markers to `<defs>`. Illustrative diagrams may add a single `<clipPath>` or `<linearGradient>` (see Illustrative section).\n\n**Minimize standalone labels.** Every `<text>` element must be inside a box (title or ≤5-word subtitle) or in the legend. Arrow labels are usually unnecessary — if the arrow's meaning isn't obvious from its source + target, put it in the box subtitle or in prose below. Labels floating in space collide with things and are ambiguous.\n\n**Stroke width:** Use 0.5px strokes for diagram borders and edges — not 1px or 2px. Thin strokes feel more refined.\n\n**Connector paths need `fill=\"none\"`.** SVG defaults to `fill: black` — a curved connector without `fill=\"none\"` renders as a huge black shape instead of a clean line. Every `<path>` or `<polyline>` used as a connector/arrow MUST have `fill=\"none\"`. Only set fill on shapes meant to be filled (rects, circles, polygons).\n\n**Rect rounding:** `rx=\"4\"` for subtle corners. `rx=\"8\"` max for emphasized rounding. `rx` ≥ half the height = pill shape — deliberate only.\n\n**Schematic containers use dashed rects with a label.** Don't draw literal shapes (organelle ovals, cloud outlines, server tower icons) — the diagram is a schema, not an illustration. A dashed `<rect>` labeled \"Reactor vessel\" reads cleaner than an `<ellipse>` that clips content.\n\n**Lines stop at component edges.** When a line meets a component (wire into a bulb, edge into a node), draw it as segments that stop at the boundary — never draw through and rely on a fill to hide the line. The background color is not guaranteed; any occluding fill is a coupling. Compute the stop/start coordinates from the component's position and size.\n\n**Physical-color scenes (sky, water, grass, skin, materials):** Use ALL hardcoded hex — never mix with `c-*` theme classes. The scene should not invert in dark mode. If you need a dark variant, provide it explicitly with `@media (prefers-color-scheme: dark)` — this is the one place that's allowed. Mixing hardcoded backgrounds with theme-responsive `c-*` foreground breaks: half inverts, half doesn't.\n\n**No rotated text**. `<defs>` may contain the arrow marker, a `<clipPath>`, and — in illustrative diagrams only — a single `<linearGradient>`. Nothing else: no filters, no patterns, no extra markers.\n\n\n## Diagram types\n*\"Explain how compound interest works\" / \"How does a process scheduler work\"*\n\n**Two rules that cause most diagram failures — check these before writing each arrow and each box:**\n1. **Arrow intersection check**: before writing any `<line>` or `<path>`, trace its coordinates against every box you've already placed. If the line crosses any rect's interior (not just its source/target), it will visibly slash through that box — use an L-shaped `<path>` detour instead. This applies to arrows crossing labels too.\n2. **Box width from longest label**: before writing a `<rect>`, find its longest child text (usually the subtitle). `rect_width = max(title_chars × 8, subtitle_chars × 7) + 24`. A 100px-wide box holds at most a 10-char subtitle. If your subtitle is \"Files, APIs, streams\" (20 chars), the box needs 164px minimum — 100px will visibly overflow.\n\n**Tier packing:** Compute total width BEFORE placing. Example — 4 pub/sub consumer boxes:\n- WRONG: x=40,160,260,360 w=160 → 40-60px overlaps (4×160=640 > 480 available)\n- RIGHT: x=50,200,350,500 w=130 gap=20 → fits (4×130 + 3×20 = 580 ≤ 590 safe width; right edge at 630 ≤ 640)\nWork bottom-up for trees: size leaf tier first, parent width ≥ sum of children.\n\n**Diagrams are the hardest use case** — they have the highest failure rate due to precise coordinate math. Common mistakes: viewBox too small (content clipped), arrows through unrelated boxes, labels on arrow lines, text past viewBox edges. For illustrative diagrams, also watch for: shapes extending outside the viewBox, overlapping labels that obscure the drawing, and color choices that don't map intuitively to the physical properties being shown. Double-check coordinates before finalizing.\n\nUse SVG for diagrams. The widget automatically wraps SVG output in a card.\n\n**Pick the right diagram type.** The decision is about *intent*, not subject matter. Ask: is the user trying to *document* this, or *understand* it?\n\n**Reference diagrams** — the user wants a map they can point at. Precision matters more than feeling. Boxes, labels, arrows, containment. These are the diagrams you'd find in documentation.\n- **Flowchart** — steps in sequence, decisions branching, data transforming. Good for: approval workflows, request lifecycles, build pipelines, \"what happens when I click submit\". Trigger phrases: *\"walk me through the process\"*, *\"what are the steps\"*, *\"what's the flow\"*.\n- **Structural diagram** — things inside other things. Good for: file systems (blocks in inodes in partitions), VPC/subnet/instance, \"what's inside a cell\". Trigger phrases: *\"what's the architecture\"*, *\"how is this organised\"*, *\"where does X live\"*.\n\n**Intuition diagrams** — the user wants to *feel* how something works. The goal isn't a correct map, it's the right mental model. These should look nothing like a flowchart. The subject doesn't need a physical form — it needs a *visual metaphor*.\n- **Illustrative diagram** — draw the mechanism. Physical things get cross-sections (water heaters, engines, lungs). Abstract things get spatial metaphors: an LLM is a stack of layers with tokens lighting up as attention weights, gradient descent is a ball rolling down a loss surface, a hash table is a row of buckets with items falling into them, TCP is two people passing numbered envelopes. Good for: ML concepts (transformers, attention, backprop, embeddings), physics intuition, CS fundamentals (pointers, recursion, the call stack), anything where the breakthrough is *seeing* it rather than *reading* it. Trigger phrases: *\"how does X actually work\"*, *\"explain X\"*, *\"I don't get X\"*, *\"give me an intuition for X\"*.\n\n**Route on the verb, not the noun.** Same subject, different diagram depending on what was asked:\n\n| User says | Type | What to draw |\n|---|---|---|\n| \"how do LLMs work\" | **Illustrative** | Token row, stacked layer slabs, attention threads glowing warm between tokens. Go interactive if you can. |\n| \"transformer architecture\" | Structural | Labelled boxes: embedding, attention heads, FFN, layer norm. |\n| \"how does attention work\" | **Illustrative** | One query token, a fan of lines to every key, line opacity = weight. |\n| \"how does gradient descent work\" | **Illustrative** | Contour surface, a ball, a trail of steps. Slider for learning rate. |\n| \"what are the training steps\" | Flowchart | Forward → loss → backward → update. Boxes and arrows. |\n| \"how does TCP work\" | **Illustrative** | Two endpoints, numbered packets in flight, an ACK returning. |\n| \"TCP handshake sequence\" | Flowchart | SYN → SYN-ACK → ACK. Three boxes. |\n| \"explain the Krebs cycle\" / \"how does the event loop work\" | **HTML stepper** | Click through stages. Never a ring. |\n| \"how does a hash map work\" | **Illustrative** | Key falling through a funnel into one of N buckets. |\n| \"draw the database schema\" / \"show me the ERD\" | **mermaid.js** | `erDiagram` syntax. Not SVG. |\n\nThe illustrative route is the default for *\"how does X work\"* with no further qualification. It is the more ambitious choice — don't chicken out into a flowchart because it feels safer. Claude draws these well.\n\nDon't mix families in one diagram. If you need both, draw the intuition version first (build the mental model), then the reference version (fill in the precise labels) as a second tool call with prose between.\n\n**For complex topics, use multiple SVG calls** — break the explanation into a series of smaller diagrams rather than one dense diagram. Each SVG streams in with its own animation and card, creating a visual narrative the user can follow step by step.\n\n**Always add prose between diagrams** — never stack multiple SVG calls back-to-back without text. Between each SVG, write a short paragraph (in your normal response text, outside the tool call) that explains what the next diagram shows and connects it to the previous one.\n\n**Promise only what you deliver** — if your response text says \"here are three diagrams\", you must include all three tool calls. Never promise a follow-up diagram and omit it. If you can only fit one diagram, adjust your text to match. One complete diagram is better than three promised and one delivered.\n\n#### Flowchart\n\nFor sequential processes, cause-and-effect, decision trees.\n\n**Planning**: Size boxes to fit their text generously. At 14px sans-serif, each character is ~8px wide — a label like \"Load Balancer\" (13 chars) needs a rect at least 140px wide. When in doubt, make boxes wider and leave more space between them. Cramped diagrams are the most common failure mode.\n\n**Special characters are wider**: Chemical formulas (C₆H₁₂O₆), math notation (∑, ∫, √), subscripts/superscripts via <tspan> with dy/baseline-shift, and Unicode symbols all render wider than plain Latin characters. For labels containing formulas or special notation, add 30-50% extra width to your estimate. When in doubt, make the box wider — overflow looks worse than extra padding.\n\n**Spacing**: 60px minimum between boxes, 24px padding inside boxes, 12px between text and edges. Leave 10px gap between arrowheads and box edges. Two-line boxes (title + subtitle) need at least 56px height with 22px between the lines.\n\n**Vertical text placement**: Every `<text>` inside a box needs `dominant-baseline=\"central\"`, with y set to the *centre* of the slot it sits in. Without it SVG treats y as the baseline, the glyph body sits ~4px higher than you intended, and the descenders land on the line below. Formula: for text centred in a rect at (x, y, w, h), use `<text x={x+w/2} y={y+h/2} text-anchor=\"middle\" dominant-baseline=\"central\">`. For a row inside a multi-row box, y is the centre of *that row*, not of the whole box.\n\n**Layout**: Prefer single-direction flows (all top-down or all left-right). Keep diagrams simple — max 4-5 nodes per diagram. The widget is narrow (~680px) so complex layouts break.\n\n**When the prompt itself is over budget**: if the user lists 6+ components (\"draw me auth, products, orders, payments, gateway, queue\"), don't draw all of them in one pass — you'll get overlapping boxes and arrows through text, every time. Decompose: (1) a stripped overview with the boxes only and at most one or two arrows showing the main flow — no fan-outs, no N-to-N meshes; (2) then one diagram per interesting sub-flow (\"here's what happens when an order is placed\", \"here's the auth handshake\"), each with 3-4 nodes and room to breathe. Count the nouns before you draw. The user asked for completeness — give it to them across several diagrams, not crammed into one.\n\n**Cycles don't get drawn as rings.** If the last stage feeds back into the first (Krebs cycle, event loop, GC mark-and-sweep, TCP retransmit), your instinct is to place the stages around a circle. Don't. Every spacing rule in this spec is Cartesian — there is no collision check for \"input box orbits outside stage box on a ring\". You will get satellite boxes overlapping the stages they feed, labels sitting on the dashed circle, and tangential arrows that point nowhere. The ring is decoration; the loop is conveyed by the return arrow.\n\nBuild a stepper in HTML. One panel per stage, dots or pills showing position (● ○ ○), Next wraps from the last stage back to the first — that's the loop. Each panel owns its inputs and products: an event loop's pending callbacks live *inside* the Poll panel, not floating next to a box on a ring. Nothing collides because nothing shares the canvas. Only fall back to a linear SVG (stages in a row, curved `<path>` return arrow) when there's one input and one output total and no per-stage detail to show.\n\n**Feedback loops in linear flows:** Don't draw a physical arrow traversing the layout (it fights the flow direction and clips edges). Instead:\n- Small `↻` glyph + text near the cycle point: `<text>↻ returns to start</text>`\n- Or restructure the whole diagram as a circle if the cycle IS the point\n\n**Arrows:** A line from A to B must not cross any other box or label. If the direct path crosses something, route around with an L-bend: `<path d=\"M x1 y1 L x1 ymid L x2 ymid L x2 y2\"/>`. Place arrow labels in clear space, not on the midpoint.\n\nKeep all nodes the same height when they have the same content type (e.g. all single-line boxes = 44px, all two-line boxes = 56px).\n\n**Flowchart components** — use these patterns consistently:\n\n*Single-line node* (44px tall): title only. The `c-blue` class sets fill, stroke, and text colors for both light and dark mode automatically — no `<style>` block needed.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about T-cells')\">\n  <rect x=\"100\" y=\"20\" width=\"180\" height=\"44\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"190\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"central\">T-cells</text>\n</g>\n```\n\n*Two-line node* (56px tall): bold title + muted subtitle.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about dendritic cells')\">\n  <rect x=\"100\" y=\"20\" width=\"200\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"200\" y=\"38\" text-anchor=\"middle\" dominant-baseline=\"central\">Dendritic cells</text>\n  <text class=\"ts\" x=\"200\" y=\"56\" text-anchor=\"middle\" dominant-baseline=\"central\">Detect foreign antigens</text>\n</g>\n```\n\n*Connector* (no label — meaning is clear from source + target):\n```svg\n<line x1=\"200\" y1=\"76\" x2=\"200\" y2=\"120\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n*Neutral node* (gray, for start/end/generic steps): use `class=\"box\"` for auto-themed fill/stroke, and default text classes.\n\nMake all nodes clickable by default — wrap in `<g class=\"node\" onclick=\"sendPrompt('...')\">`. The hover effect is built in.\n\n#### Structural diagram\n\nFor concepts where physical or logical containment matters — things inside other things.\n\n**When to use**: The explanation depends on *where* processes happen. Examples: how a cell works (organelles inside a cell), how a file system works (blocks inside inodes inside partitions), how a building's HVAC works (ducts inside floors inside a building), how a CPU cache hierarchy works (L1 inside core, L2 shared).\n\n**Core idea**: Large rounded rects are containers. Smaller rects inside them are regions or sub-structures. Text labels describe what happens in each region. Arrows show flow between regions or from external inputs/outputs.\n\n**Container rules**:\n- Outermost container: large rounded rect, rx=20-24, lightest fill (50 stop), 0.5px stroke (600 stop). Label at top-left inside, 14px bold.\n- Inner regions: medium rounded rects, rx=8-12, next shade fill (100-200 stop). Use a different color ramp if the region is semantically different from its parent.\n- 20px minimum padding inside every container — text and inner regions must not touch the container edges.\n- Max 2-3 nesting levels. Deeper nesting gets unreadable at 680px width.\n\n**Layout**:\n- Place inner regions side by side within the container, with 16px+ gap between them.\n- External inputs (sunlight, water, data, requests) sit outside the container with arrows pointing in.\n- External outputs sit outside with arrows pointing out.\n- Keep external labels short — one word or a short phrase. Details go in the prose between diagrams.\n\n**What goes inside regions**: Text only — the region name (14px bold) and a short description of what happens there (12px). Don't put flowchart-style boxes inside regions. Don't draw illustrations or icons inside.\n\n**Structural container example** (library branch with two side-by-side regions, an internal labeled arrow, and an external input). ViewBox 700x320, horizontal layout, color classes handle both light and dark mode — no `<style>` block:\n```svg\n<defs>\n  <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n<!-- Outer container -->\n<g class=\"c-green\">\n  <rect x=\"120\" y=\"30\" width=\"560\" height=\"260\" rx=\"20\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"400\" y=\"62\" text-anchor=\"middle\">Library branch</text>\n  <text class=\"ts\" x=\"400\" y=\"80\" text-anchor=\"middle\">Main floor</text>\n</g>\n<!-- Inner: Circulation desk -->\n<g class=\"c-teal\">\n  <rect x=\"150\" y=\"100\" width=\"220\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"260\" y=\"130\" text-anchor=\"middle\">Circulation desk</text>\n  <text class=\"ts\" x=\"260\" y=\"148\" text-anchor=\"middle\">Checkouts, returns</text>\n</g>\n<!-- Inner: Reading room -->\n<g class=\"c-amber\">\n  <rect x=\"450\" y=\"100\" width=\"210\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"555\" y=\"130\" text-anchor=\"middle\">Reading room</text>\n  <text class=\"ts\" x=\"555\" y=\"148\" text-anchor=\"middle\">Seating, reference</text>\n</g>\n<!-- Arrow between inner boxes with label -->\n<text class=\"ts\" x=\"410\" y=\"175\" text-anchor=\"middle\">Books</text>\n<line x1=\"370\" y1=\"185\" x2=\"448\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n<!-- External input: New acq. — text vertically aligned with arrow -->\n<text class=\"ts\" x=\"40\" y=\"185\" text-anchor=\"middle\">New acq.</text>\n<line x1=\"75\" y1=\"185\" x2=\"118\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n**Color in structural diagrams**: Nested regions need distinct ramps — `c-{ramp}` classes resolve to fixed fill/stroke stops, so the same class on parent and child gives identical fills and flattens the hierarchy. Pick a *related* ramp for inner structures (e.g. Green for the library envelope, Teal for the circulation desk inside it) and a *contrasting* ramp for a region that does something functionally different (e.g. Amber for the reading room). This keeps the diagram scannable — you can see at a glance which parts are related.\n\n**Database schemas / ERDs — use mermaid.js, not SVG.** A schema table is a header plus N field rows plus typed columns plus crow's-foot connectors. That is a text-layout problem and hand-placing it in SVG fails the same way every time. mermaid.js `erDiagram` does layout, cardinality, and connector routing for free. ERDs only; everything else stays in SVG.\n\n```\nerDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has\n  USERS {\n    uuid id PK\n    string email\n    timestamp created_at\n  }\n  POSTS {\n    uuid id PK\n    uuid user_id FK\n    string title\n  }\n```\n\nUse HTML for ERDs. Import and initialize in a `<script type=\"module\">`. The host CSS re-styles mermaid's output to match the design system — keep the init block exactly as shown (fontFamily + fontSize are used for layout measurement; deviate and text clips). After rendering, replace sharp-cornered entity `<path>` elements with rounded `<rect rx=\"8\">` to match the design system, and strip borders from attribute rows (only the outer container and header row keep visible borders — alternating fill colors separate the rows):\n```html\n<style>\n#erd svg.erDiagram .divider path { stroke-opacity: 0.5; }\n#erd svg.erDiagram .row-rect-odd path,\n#erd svg.erDiagram .row-rect-odd rect,\n#erd svg.erDiagram .row-rect-even path,\n#erd svg.erDiagram .row-rect-even rect { stroke: none !important; }\n</style>\n<div id=\"erd\"></div>\n<script type=\"module\">\nimport mermaid from 'https://esm.sh/mermaid@11/dist/mermaid.esm.min.mjs';\nconst dark = matchMedia('(prefers-color-scheme: dark)').matches;\nawait document.fonts.ready;\nmermaid.initialize({\n  startOnLoad: false,\n  theme: 'base',\n  fontFamily: '\"Anthropic Sans\", sans-serif',\n  themeVariables: {\n    darkMode: dark,\n    fontSize: '13px',\n    fontFamily: '\"Anthropic Sans\", sans-serif',\n    lineColor: dark ? '#9c9a92' : '#73726c',\n    textColor: dark ? '#c2c0b6' : '#3d3d3a',\n  },\n});\nconst { svg } = await mermaid.render('erd-svg', `erDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has`);\ndocument.getElementById('erd').innerHTML = svg;\n\n// Round only the outermost entity box corners (not internal row stripes)\ndocument.querySelectorAll('#erd svg.erDiagram .node').forEach(node => {\n  const firstPath = node.querySelector('path[d]');\n  if (!firstPath) return;\n  const d = firstPath.getAttribute('d');\n  const nums = d.match(/-?[\\d.]+/g)?.map(Number);\n  if (!nums || nums.length < 8) return;\n  const xs = [nums[0], nums[2], nums[4], nums[6]];\n  const ys = [nums[1], nums[3], nums[5], nums[7]];\n  const x = Math.min(...xs), y = Math.min(...ys);\n  const w = Math.max(...xs) - x, h = Math.max(...ys) - y;\n  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');\n  rect.setAttribute('x', x); rect.setAttribute('y', y);\n  rect.setAttribute('width', w); rect.setAttribute('height', h);\n  rect.setAttribute('rx', '8');\n  for (const a of ['fill', 'stroke', 'stroke-width', 'class', 'style']) {\n    if (firstPath.hasAttribute(a)) rect.setAttribute(a, firstPath.getAttribute(a));\n  }\n  firstPath.replaceWith(rect);\n});\n\n// Strip borders from attribute rows (mermaid v11: .row-rect-odd / .row-rect-even)\ndocument.querySelectorAll('#erd svg.erDiagram .row-rect-odd path, #erd svg.erDiagram .row-rect-even path').forEach(p => {\n  p.setAttribute('stroke', 'none');\n});\n</script>\n```\n\nWorks identically for `classDiagram` — swap the diagram source; init stays the same.\n\n#### Illustrative diagram\n\nFor building *intuition*. The subject might be physical (an engine, a lung) or completely abstract (attention, recursion, gradient descent) — what matters is that a spatial drawing conveys the mechanism better than labelled boxes would. These are the diagrams that make someone go \"oh, *that's* what it's doing.\"\n\n**Two flavours, same rules:**\n- **Physical subjects** get drawn as simplified versions of themselves. Cross-sections, cutaways, schematics. A water heater is a tank with a burner underneath. A lung is a branching tree in a cavity. You're drawing *the thing*, stylised.\n- **Abstract subjects** get drawn as *spatial metaphors*. You're inventing a shape for something that doesn't have one — but the shape should make the mechanism obvious. A transformer is a stack of horizontal slabs with a bright thread of attention connecting tokens across layers. A hash function is a funnel scattering items into a row of buckets. The call stack is literally a stack of frames growing and shrinking. Embeddings are dots clustering in space. The metaphor *is* the explanation.\n\nThis is the most ambitious diagram type and the one Claude is best at. Lean into it. Use colour for intensity (a hot attention weight glows amber, a cold one stays gray). Use repetition for scale (many small circles = many parameters).\n\n**Prefer interactive over static.** A static cross-section is a good answer; a cross-section you can *operate* is a great one. The decision rule: if the real-world system has a control, give the diagram that control. A water heater has a thermostat — so give the user a slider that shifts the hot/cold boundary, a toggle that fires the burner and animates convection currents. An LLM has input tokens — let the user click one and watch the attention weights re-fan. A cache has a hit rate — let them drag it and watch latency change. Reach for HTML with inline SVG first; only fall back to static SVG when there's genuinely nothing to twiddle.\n\n**When NOT to use**: The user is asking for a *reference*, not an *intuition*. \"What are the components of a transformer\" wants labelled boxes — that's a structural diagram. \"Walk me through our CI pipeline\" wants sequential steps — that's a flowchart. Also skip this when the metaphor would be arbitrary rather than revealing: drawing \"the cloud\" as a cloud shape or \"microservices\" as little houses doesn't teach anything about how they work. If the drawing doesn't make the *mechanism* clearer, don't draw it.\n\n**Fidelity ceiling**: These are schematics, not illustrations. Every shape should read at a glance. If a `<path>` needs more than ~6 segments to draw, simplify it. A tank is a rounded rect, not a Bézier portrait of a tank. A flame is three triangles, not a fire. Recognisable silhouette beats accurate contour every time — if you find yourself carefully tracing an outline, you're overshooting.\n\n**Core principle**: Draw the mechanism, not a diagram *about* the mechanism. Spatial arrangement carries the meaning; labels annotate. A good illustrative diagram works with the labels removed.\n\n**What changes from flowchart/structural rules**:\n\n- **Shapes are freeform.** Use `<path>`, `<ellipse>`, `<circle>`, `<polygon>`, and curved lines to represent real forms. A water tank is a tall rect with rounded bottom. A heart valve is a pair of curved paths. A circuit trace is a thin polyline. You are not limited to rounded rects.\n- **Layout follows the subject's geometry**, not a grid. If the thing is tall and narrow (a water heater, a thermometer), the diagram is tall and narrow. If it's wide and flat (a PCB, a geological cross-section), the diagram is wide. Let the subject dictate proportions within the 680px viewBox width.\n- **Color encodes intensity**, not category. For physical subjects: warm ramps (amber, coral, red) = heat/energy/pressure, cool ramps (blue, teal) = cold/calm, gray = inert structure. For abstract subjects: warm = active/high-weight/attended-to, cool or gray = dormant/low-weight/ignored. A user should be able to glance at the diagram and see *where the action is* without reading a single label.\n- **Layering and overlap are encouraged — for shapes.** Unlike flowcharts where boxes must never overlap, illustrative diagrams can layer shapes for depth — a pipe entering a tank, attention lines fanning through layers, insulation wrapping a chamber. Use z-ordering (later in source = on top) deliberately.\n- **Text is the exception — never let a stroke cross it.** The overlap permission is for shapes only. Every label needs 8px of clear air between its baseline/cap-height and the nearest stroke. Don't solve this with a background rect — solve it by *placing the text somewhere else*. Labels go in the quiet regions: above the drawing, below it, in the margin with a leader line, or in the gap between two fans of lines. If there is no quiet region, the drawing is too dense — remove something or split into two diagrams.\n- **Small shape-based indicators are allowed** when they communicate physical state. Triangles for flames. Circles for bubbles or particles. Wavy lines for steam or heat radiation. Parallel lines for vibration. These aren't decoration — they tell the user what's happening physically. Keep them simple: basic SVG primitives, not detailed illustrations.\n- **One gradient per diagram is permitted** — the only exception to the global no-gradients rule — and only to show a *continuous* physical property across a region (temperature stratification in a tank, pressure drop along a pipe, concentration in a solution). It must be a single `<linearGradient>` between exactly two stops from the same colour ramp. No radial gradients, no multi-stop fades, no gradient-as-aesthetic. If two stacked flat-fill rects communicate the same thing, do that instead.\n- **Animation is permitted for interactive HTML versions.** Use CSS `@keyframes` animating only `transform` and `opacity`. Keep loops under ~2s, and wrap every animation in `@media (prefers-reduced-motion: no-preference)` so it's opt-out by default. Animations should show how the system *behaves* — convection current, rotation, flow — not just move for the sake of moving. No physics engines or heavy libraries.\n\nAll core rules still apply (viewBox 680px, dark mode mandatory, 14/12px text, pre-built classes, arrow marker, clickable nodes).\n\n**Label placement**:\n- Place labels *outside* the drawn object when possible, with a thin leader line (0.5px dashed, `var(--t)` stroke) pointing to the relevant part. This keeps the illustration uncluttered.\n- For large internal zones (like temperature regions in a tank), labels can sit inside if there's ample clear space — minimum 20px from any edge.\n- External labels sit in the margin area or above/below the object. **Pick one side for labels and put them all there** — at 680px wide you don't have room for a drawing *and* label columns on both sides. Reserve at least 140px of horizontal margin on the label side. Labels on the left are the ones that clip: `text-anchor=\"end\"` extends leftward from x, and with multi-line callouts it's very easy to blow past x=0 without noticing. Default to right-side labels with `text-anchor=\"start\"` unless the subject's geometry forces otherwise. Use `class=\"ts\"` (12px) for callouts, `class=\"th\"` (14px medium) for major component names.\n\n**Composition approach**:\n1. Start with the main object's silhouette — the largest shape, centered in the viewBox.\n2. Add internal structure: chambers, pipes, membranes, mechanical parts.\n3. Add external connections: pipes entering/exiting, arrows showing flow direction, labels for inputs and outputs.\n4. Add state indicators last: color fills showing temperature/pressure/concentration, small animated elements showing movement or energy.\n5. Leave generous whitespace around the object for labels — don't crowd annotations against the viewBox edges.\n\n**Static vs interactive**: Static cutaways and cross-sections work best as pure SVG. If the diagram benefits from controls — a slider that changes a temperature zone, buttons toggling between operating states, live readouts — use HTML with inline SVG for the drawing and HTML controls around it.\n\n**Illustrative diagram example** — interactive water heater cross-section with vivid physical-realism colors, animated convection currents, and controls. Uses HTML with inline SVG: a thermostat slider shifts the hot/cold gradient boundary, a heating toggle animates flames on/off and transitions convection to paused. viewBox is 680x560; tank occupies x=180..440, leaving 140px+ of right margin for labels. Smooth convection paths use `stroke-dasharray:5 5` at ~1.6s for a gentle flow feel. A warm-glow overlay on the hot zone pulses subtly when heating is on. Flame shapes use warm gradient fills and clean opacity transitions. Labels sit along the right margin with leader lines.\n```html\n<style>\n  @keyframes conv { to { stroke-dashoffset: -20; } }\n  @keyframes flicker { 0%,100%{opacity:1} 50%{opacity:.82} }\n  @keyframes glow { 0%,100%{opacity:.3} 50%{opacity:.6} }\n  .conv { stroke-dasharray:5 5; animation: conv var(--dur,1.6s) linear infinite; transition: opacity .5s; }\n  .conv.off { opacity:0; animation-play-state:paused; }\n  #flames path { transition: opacity .5s; }\n  #flames.off path { opacity:0; animation:none; }\n  #flames path:nth-child(odd)  { animation: flicker .6s ease-in-out infinite; }\n  #flames path:nth-child(even) { animation: flicker .8s ease-in-out infinite .15s; }\n  #warm-glow { animation: glow 3s ease-in-out infinite; transition: opacity .5s; }\n  #warm-glow.off { opacity:0; animation:none; }\n  .toggle-track { position:relative;width:32px;height:18px;background:var(--color-border-secondary);border-radius:9px;transition:background .2s;display:inline-block; }\n  .toggle-track:has(input:checked) { background:var(--color-text-info); }\n  #heat-toggle:checked + span { transform:translateX(14px); }\n</style>\n<svg width=\"100%\" viewBox=\"0 0 680 560\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker>\n    <linearGradient id=\"tg\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop id=\"gh\" offset=\"40%\" stop-color=\"#E8593C\" stop-opacity=\"0.45\"/>\n      <stop id=\"gc\" offset=\"40%\" stop-color=\"#3B8BD4\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n    <linearGradient id=\"fg1\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#E85D24\"/><stop offset=\"60%\" stop-color=\"#F2A623\"/><stop offset=\"100%\" stop-color=\"#FCDE5A\"/></linearGradient>\n    <linearGradient id=\"fg2\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#D14520\"/><stop offset=\"50%\" stop-color=\"#EF8B2C\"/><stop offset=\"100%\" stop-color=\"#F9CB42\"/></linearGradient>\n    <linearGradient id=\"pipe-h\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#D05538\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#D05538\" stop-opacity=\".08\"/></linearGradient>\n    <linearGradient id=\"pipe-c\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#3B8BD4\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#3B8BD4\" stop-opacity=\".08\"/></linearGradient>\n    <clipPath id=\"tc\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\"/></clipPath>\n  </defs>\n  <!-- Tank fill -->\n  <g clip-path=\"url(#tc)\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" fill=\"url(#tg)\"/></g>\n  <!-- Warm glow overlay (pulses when heating) -->\n  <g clip-path=\"url(#tc)\"><rect id=\"warm-glow\" x=\"180\" y=\"55\" width=\"260\" height=\"160\" fill=\"#E8593C\" opacity=\".3\"/></g>\n  <!-- Tank shell (double stroke for solidity) -->\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"2.5\" opacity=\".25\"/>\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"1\"/>\n  <!-- Hot pipe out (top right) -->\n  <rect x=\"370\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-h)\"/>\n  <path d=\"M378 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <!-- Cold pipe in + dip tube (top left) -->\n  <rect x=\"234\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-c)\"/>\n  <path d=\"M242 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <path d=\"M242 55V395\" stroke=\"var(--t)\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\".5\"/>\n  <!-- Convection currents (curved paths at different speeds) -->\n  <path class=\"conv\" style=\"--dur:1.6s\" fill=\"none\" stroke=\"#D05538\" stroke-width=\"1\" opacity=\".5\" d=\"M350 380C355 320,365 240,358 140Q355 110,340 100\"/>\n  <path class=\"conv\" style=\"--dur:2.1s\" fill=\"none\" stroke=\"#C04828\" stroke-width=\".8\" opacity=\".35\" d=\"M300 390C308 340,320 260,315 170Q312 130,298 115\"/>\n  <path class=\"conv\" style=\"--dur:2.6s\" fill=\"none\" stroke=\"#B05535\" stroke-width=\".7\" opacity=\".3\" d=\"M380 370C382 310,388 230,382 150Q378 120,365 110\"/>\n  <!-- Burner bar -->\n  <rect x=\"188\" y=\"454\" width=\"244\" height=\"5\" rx=\"2\" fill=\"var(--t)\" opacity=\".6\"/>\n  <rect x=\"220\" y=\"462\" width=\"180\" height=\"6\" rx=\"3\" fill=\"var(--t)\" opacity=\".3\"/>\n  <!-- Flames (gradient-filled organic shapes) -->\n  <g id=\"flames\">\n    <path d=\"M240,454Q248,430 252,438Q256,424 260,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M278,454Q285,426 290,434Q295,418 300,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M320,454Q328,428 333,436Q338,420 342,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M360,454Q367,430 371,438Q375,422 380,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M398,454Q404,434 408,440Q412,428 416,454Z\" fill=\"url(#fg1)\"/>\n  </g>\n  <!-- Labels (right margin) -->\n  <g class=\"node\" onclick=\"sendPrompt('How does hot water exit the tank?')\">\n    <line class=\"leader\" x1=\"386\" y1=\"34\" x2=\"468\" y2=\"70\"/><circle cx=\"386\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"74\">Hot water outlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the cold water inlet work?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"34\" x2=\"468\" y2=\"140\"/><circle cx=\"250\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"144\">Cold water inlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the dip tube do?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"260\" x2=\"468\" y2=\"220\"/><circle cx=\"250\" cy=\"260\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"224\">Dip tube</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the thermostat control?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"250\" x2=\"468\" y2=\"300\"/><circle cx=\"440\" cy=\"250\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"304\">Thermostat</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What material is the tank made of?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"380\" x2=\"468\" y2=\"380\"/><circle cx=\"440\" cy=\"380\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"384\">Tank wall</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the gas burner heat water?')\">\n    <line class=\"leader\" x1=\"432\" y1=\"454\" x2=\"468\" y2=\"454\"/><circle cx=\"432\" cy=\"454\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"458\">Heating element</text></g>\n</svg>\n<div style=\"display:flex;align-items:center;gap:16px;margin:12px 0 0;font-size:13px;color:var(--color-text-secondary)\">\n  <label style=\"display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none\">\n    <span class=\"toggle-track\">\n      <input type=\"checkbox\" id=\"heat-toggle\" checked onchange=\"toggleHeat(this.checked)\" style=\"position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;margin:0\">\n      <span style=\"position:absolute;top:2px;left:2px;width:14px;height:14px;background:#fff;border-radius:50%;transition:transform .2s;pointer-events:none\"></span>\n    </span>\n    Heating\n  </label>\n  <span>Thermostat</span>\n  <input type=\"range\" id=\"temp-slider\" min=\"10\" max=\"90\" value=\"40\" style=\"flex:1\" oninput=\"setTemp(this.value)\">\n  <span id=\"temp-label\" style=\"min-width:36px;text-align:right\">40%</span>\n</div>\n<script>\nfunction setTemp(v) {\n  document.getElementById('gh').setAttribute('offset', v+'%');\n  document.getElementById('gc').setAttribute('offset', v+'%');\n  document.getElementById('temp-label').textContent = v+'%';\n}\nfunction toggleHeat(on) {\n  document.getElementById('flames').classList.toggle('off', !on);\n  document.getElementById('warm-glow').classList.toggle('off', !on);\n  document.querySelectorAll('.conv').forEach(p => p.classList.toggle('off', !on));\n}\n</script>\n```\n\n**Illustrative example — abstract subject** (attention in a transformer). Same rules, no physical object. A row of tokens at the bottom, one query token highlighted, weight-scaled lines fanning to every other token. Caption sits below the fan — clear of every stroke — not inside it.\n```svg\n<rect class=\"c-purple\" x=\"60\" y=\"40\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"80\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"120\" width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<text class=\"ts\" x=\"72\" y=\"57\" >Layer 3</text>\n<text class=\"ts\" x=\"72\" y=\"97\" >Layer 2</text>\n<text class=\"ts\" x=\"72\" y=\"137\">Layer 1</text>\n\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"116\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.25\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"228\" y2=\"146\" stroke-width=\"1.5\" opacity=\"0.4\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"340\" y2=\"146\" stroke-width=\"4\"   opacity=\"1.0\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"452\" y2=\"146\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"564\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.2\"/>\n\n<g class=\"node\" onclick=\"sendPrompt('What do the attention weights mean?')\">\n  <rect class=\"c-gray\"  x=\"80\"  y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"192\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-amber\" x=\"304\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"1\"/>\n  <rect class=\"c-gray\"  x=\"416\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"528\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <text class=\"ts\" x=\"116\" y=\"252\" text-anchor=\"middle\">the</text>\n  <text class=\"ts\" x=\"228\" y=\"252\" text-anchor=\"middle\">cat</text>\n  <text class=\"th\" x=\"340\" y=\"252\" text-anchor=\"middle\">sat</text>\n  <text class=\"ts\" x=\"452\" y=\"252\" text-anchor=\"middle\">on</text>\n  <text class=\"ts\" x=\"564\" y=\"252\" text-anchor=\"middle\">the</text>\n</g>\n\n<text class=\"ts\" x=\"340\" y=\"300\" text-anchor=\"middle\">Line thickness = attention weight from \"sat\" to each token</text>\n```\n\nNote what's *not* here: no boxes labelled \"multi-head attention\", no arrows labelled \"Q/K/V\". Those belong in the structural diagram. This one is about the *feeling* of attention — one token looking at every other token with varying intensity.\n\nThese are starting points, not ceilings. For the water heater: add a thermostat slider, animate the convection current, toggle heating vs standby. For the attention diagram: let the user click any token to become the query, scrub through layers, animate the weights settling. The goal is always to *show* how the thing works, not just *label* it.\n\n\n## UI components\n\n### Aesthetic\nFlat, clean, white surfaces. Minimal 0.5px borders. Generous whitespace. No gradients, no shadows (except functional focus rings). Everything should feel native to claude.ai — like it belongs on the page, not embedded from somewhere else.\n\n### Tokens\n- Borders: always `0.5px solid var(--color-border-tertiary)` (or `-secondary` for emphasis)\n- Corner radius: `var(--border-radius-md)` for most elements, `var(--border-radius-lg)` for cards\n- Cards: white bg (`var(--color-background-primary)`), 0.5px border, radius-lg, padding 1rem 1.25rem\n- Form elements (input, select, textarea, button, range slider) are pre-styled — write bare tags. Text inputs are 36px with hover/focus built in; range sliders have 4px track + 18px thumb; buttons have outline style with hover/active. Only add inline styles to override (e.g., different width).\n- Buttons: pre-styled with transparent bg, 0.5px border-secondary, hover bg-secondary, active scale(0.98). If it triggers sendPrompt, append a ↗ arrow.\n- **Round every displayed number.** JS float math leaks artifacts — `0.1 + 0.2` gives `0.30000000000000004`, `7 * 1.1` gives `7.700000000000001`. Any number that reaches the screen (slider readouts, stat card values, axis labels, data-point labels, tooltips, computed totals) must go through `Math.round()`, `.toFixed(n)`, or `Intl.NumberFormat`. Pick the precision that makes sense for the context — integers for counts, 1–2 decimals for percentages, `toLocaleString()` for currency. For range sliders, also set `step=\"1\"` (or step=\"0.1\" etc.) so the input itself emits round values.\n- Spacing: use rem for vertical rhythm (1rem, 1.5rem, 2rem), px for component-internal gaps (8px, 12px, 16px)\n- Box-shadows: none, except `box-shadow: 0 0 0 Npx` focus rings on inputs\n\n### Metric cards\nFor summary numbers (revenue, count, percentage) — surface card with muted 13px label above, 24px/500 number below. `background: var(--color-background-secondary)`, no border, `border-radius: var(--border-radius-md)`, padding 1rem. Use in grids of 2-4 with `gap: 12px`. Distinct from raised cards (which have white bg + border).\n\n### Layout\n- Editorial (explanatory content): no card wrapper, prose flows naturally\n- Card (bounded objects like a contact record, receipt): single raised card wraps the whole thing\n- Don't put tables here — output them as markdown in your response text\n\n**Grid overflow:** `grid-template-columns: 1fr` has `min-width: auto` by default — children with large min-content push the column past the container. Use `minmax(0, 1fr)` to clamp.\n\n**Table overflow:** Tables with many columns auto-expand past `width: 100%` if cell contents exceed it. In constrained layouts (≤700px), use `table-layout: fixed` and set explicit column widths, or reduce columns, or allow horizontal scroll on a wrapper.\n\n### Mockup presentation\nContained mockups — mobile screens, chat threads, single cards, modals, small UI components — should sit on a background surface (`var(--color-background-secondary)` container with `border-radius: var(--border-radius-lg)` and padding, or a device frame) so they don't float naked on the widget canvas. Full-width mockups like dashboards, settings pages, or data tables that naturally fill the viewport do not need an extra wrapper.\n\n### 1. Interactive explainer — learn how something works\n*\"Explain how compound interest works\" / \"Teach me about sorting algorithms\"*\n\nUse HTML for the interactive controls — sliders, buttons, live state displays, charts. Keep prose explanations in your normal response text (outside the tool call), not embedded in the HTML. No card wrapper. Whitespace is the container.\n\n```html\n<div style=\"display: flex; align-items: center; gap: 12px; margin: 0 0 1.5rem;\">\n  <label style=\"font-size: 14px; color: var(--color-text-secondary);\">Years</label>\n  <input type=\"range\" min=\"1\" max=\"40\" value=\"20\" id=\"years\" style=\"flex: 1;\" />\n  <span style=\"font-size: 14px; font-weight: 500; min-width: 24px;\" id=\"years-out\">20</span>\n</div>\n\n<div style=\"display: flex; align-items: baseline; gap: 8px; margin: 0 0 1.5rem;\">\n  <span style=\"font-size: 14px; color: var(--color-text-secondary);\">£1,000 →</span>\n  <span style=\"font-size: 24px; font-weight: 500;\" id=\"result\">£3,870</span>\n</div>\n\n<div style=\"margin: 2rem 0; position: relative; height: 240px;\">\n  <canvas id=\"chart\"></canvas>\n</div>\n```\n\nUse `sendPrompt()` to let users ask follow-ups: `sendPrompt('What if I increase the rate to 10%?')`\n\n### 2. Compare options — decision making\n*\"Compare pricing and features of these products\" / \"Help me choose between React and Vue\"*\n\nUse HTML. Side-by-side card grid for options. Highlight differences with semantic colors. Interactive elements for filtering or weighting.\n\n- Use `repeat(auto-fit, minmax(160px, 1fr))` for responsive columns\n- Each option in a card. Use badges for key differentiators.\n- Add `sendPrompt()` buttons: `sendPrompt('Tell me more about the Pro plan')`\n- Don't put comparison tables inside this tool — output them as regular markdown tables in your response text instead. The tool is for the visual card grid only.\n- When one option is recommended or \"most popular\", accent its card with `border: 2px solid var(--color-border-info)` only (2px is deliberate — the only exception to the 0.5px rule, used to accent featured items) — keep the same background and border as the other cards. Add a small badge (e.g. \"Most popular\") above or inside the card header using `background: var(--color-background-info); color: var(--color-text-info); font-size: 12px; padding: 4px 12px; border-radius: var(--border-radius-md)`.\n\n### 3. Data record — bounded UI object\n*\"Show me a Salesforce contact card\" / \"Create a receipt for this order\"*\n\nUse HTML. Wrap the entire thing in a single raised card. All content is sans-serif since it's pure UI. Use an avatar/initials circle for people (see example below).\n\n```html\n<div style=\"background: var(--color-background-primary); border-radius: var(--border-radius-lg); border: 0.5px solid var(--color-border-tertiary); padding: 1rem 1.25rem;\">\n  <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 16px;\">\n    <div style=\"width: 44px; height: 44px; border-radius: 50%; background: var(--color-background-info); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 14px; color: var(--color-text-info);\">MR</div>\n    <div>\n      <p style=\"font-weight: 500; font-size: 15px; margin: 0;\">Maya Rodriguez</p>\n      <p style=\"font-size: 13px; color: var(--color-text-secondary); margin: 0;\">VP of Engineering</p>\n    </div>\n  </div>\n  <div style=\"border-top: 0.5px solid var(--color-border-tertiary); padding-top: 12px;\">\n    <table style=\"width: 100%; font-size: 13px;\">\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Email</td><td style=\"text-align: right; padding: 4px 0; color: var(--color-text-info);\">m.rodriguez@acme.com</td></tr>\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Phone</td><td style=\"text-align: right; padding: 4px 0;\">+1 (415) 555-0172</td></tr>\n    </table>\n  </div>\n</div>\n```\n\n\n\n## Charts (Chart.js)\n```html\n<div style=\"position: relative; width: 100%; height: 300px;\">\n  <canvas id=\"myChart\"></canvas>\n</div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js\"></script>\n<script>\n  new Chart(document.getElementById('myChart'), {\n    type: 'bar',\n    data: { labels: ['Q1','Q2','Q3','Q4'], datasets: [{ label: 'Revenue', data: [12,19,8,15] }] },\n    options: { responsive: true, maintainAspectRatio: false }\n  });\n</script>\n```\n\n**Chart.js rules**:\n- Canvas cannot resolve CSS variables. Use hardcoded hex or Chart.js defaults.\n- Wrap `<canvas>` in `<div>` with explicit `height` and `position: relative`.\n- **Canvas sizing**: set height ONLY on the wrapper div, never on the canvas element itself. Use position: relative on the wrapper and responsive: true, maintainAspectRatio: false in Chart.js options. Never set CSS height directly on canvas — this causes wrong dimensions, especially for horizontal bar charts.\n- For horizontal bar charts: wrapper div height should be at least (number_of_bars * 40) + 80 pixels.\n- Load UMD build via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` — sets `window.Chart` global. Follow with plain `<script>` (no `type=\"module\"`).\n- Multiple charts: use unique IDs (`myChart1`, `myChart2`). Each gets its own canvas+div pair.\n- For bubble and scatter charts: bubble radii extend past their center points, so points near axis boundaries get clipped. Pad the scale range — set `scales.y.min` and `scales.y.max` ~10% beyond your data range (same for x). Or use `layout: { padding: 20 }` as a blunt fallback.\n- Chart.js auto-skips x-axis labels when they'd overlap. If you have ≤12 categories and need all labels visible (waterfall, monthly series), set `scales.x.ticks: { autoSkip: false, maxRotation: 45 }` — missing labels make bars unidentifiable.\n\n**Number formatting**: negative values are `-$5M` not `$-5M` — sign before currency symbol. Use a formatter: `(v) => (v < 0 ? '-' : '') + '$' + Math.abs(v) + 'M'`.\n\n**Legends** — always disable Chart.js default and build custom HTML. The default uses round dots and no values; custom HTML gives small squares, tight spacing, and percentages:\n\n```js\nplugins: { legend: { display: false } }\n```\n\n```html\n<div style=\"display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 8px; font-size: 12px; color: var(--color-text-secondary);\">\n  <span style=\"display: flex; align-items: center; gap: 4px;\"><span style=\"width: 10px; height: 10px; border-radius: 2px; background: #3266ad;\"></span>Chrome 65%</span>\n  <span style=\"display: flex; align-items: center; gap: 4px;\"><span style=\"width: 10px; height: 10px; border-radius: 2px; background: #73726c;\"></span>Safari 18%</span>\n</div>\n```\n\nInclude the value/percentage in each label when the data is categorical (pie, donut, single-series bar). Position the legend above the chart (`margin-bottom`) or below (`margin-top`) — not inside the canvas.\n\n**Dashboard layout** — wrap summary numbers in metric cards (see UI fragment) above the chart. Chart canvas flows below without a card wrapper. Use `sendPrompt()` for drill-down: `sendPrompt('Break down Q4 by region')`.\n\n## Geographic maps (D3 choropleth)\n\n**Never invent coordinates** — no hand-drawn SVG paths, no inline GeoJSON. Fetch real topology or don't draw a map.\n\nThree topology sources on jsdelivr. CSP only allows `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com` — do NOT try `raw.githubusercontent.com` or other hosts, the fetch will silently fail. Other package names like `uk-atlas` don't exist (404).\n- US states: `https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json` → `d3.geoAlbersUsa()`, object key `.states`\n- World countries: `https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json` → `d3.geoNaturalEarth1()`, object key `.countries`\n- Per-country subdivisions: `https://cdn.jsdelivr.net/npm/datamaps@0.5.10/src/js/data/{iso3}.topo.json` (lowercase alpha-3: `deu`, `jpn`, `gbr`...), object key `.{iso3}`\n\n**Before writing the widget, web_fetch the topology URL you'll use.** The first ~1KB shows the real feature `id` and `properties.name` values — key your data on those, don't guess. Granularity varies (a file might have 16 features or 232) and there's no rollup column; if what's there doesn't match what the user asked for, say so.\n\n```html\n<div id=\"map\" style=\"width: 100%;\"></div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js\"></script>\n<script>\nconst values = { 'California': 39, 'Texas': 30, 'New York': 19 /* ...keyed on what you saw in web_fetch */ };\nconst isDark = matchMedia('(prefers-color-scheme: dark)').matches;\nconst color = d3.scaleQuantize([0, 40], isDark ? d3.schemeBlues[5].slice().reverse() : d3.schemeBlues[5]);\nconst svg = d3.select('#map').append('svg').attr('viewBox', '0 0 900 560').attr('width', '100%');\nconst path = d3.geoPath(d3.geoAlbersUsa().scale(1100).translate([450, 280]));\nd3.json('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json').then(us => {\n  svg.selectAll('path').data(topojson.feature(us, us.objects.states).features).join('path')\n    .attr('d', path).attr('stroke', isDark ? 'rgba(255,255,255,.15)' : '#fff')\n    .attr('fill', d => color(values[d.properties.name] ?? 0));\n});\n</script>\n```\n",
      "uuid": "545d26de-a8de-478c-93eb-ad664489e664"
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

Now I have all the information I need. Let me do the analysis.

**Etymology:**
- "foundational" — from Latin *fundare* "to lay a base/foundation" → *fundamentum* → *foundation* (noun) + *-al* (adjective suffix). First attested as an adjective in English in the late 16th–early 17th century.
- "fundamental" — also from Latin *fundamentum* "foundation/base" (from *fundus* "bottom") → Late Latin *fundamentalis* → via Old French into English. Earlier attestation than "foundational" as a standalone adjective meaning "of the nature of a foundation; essential."


- Both trace back to *fundus* (Latin: "bottom/base") → *fundamentum*.

The real difference comes down to how they're used: "foundational" is relational and structural—it describes something that serves as a base for a specific system or body of knowledge, implying that other things build on top of it. "Fundamental," by contrast, is absolute and essential—it refers to something irreducibly core, a principle or truth that can't be reduced further and carries a sense of universal or logical necessity rather than just structural priority.

I can map this along two axes: one running from structural/sequential priority to logical/essential necessity (is this a layer you build on, or an irreducible truth?), and another from domain-specific to universal. "Foundational" sits left-center and lower on these axes—it's structural and domain-bound—while "fundamental" sits right-center and higher—it's logically essential and more universal. The quick distinction: foundational means "base layer you build above," while fundamental means "irreducible truth that always holds."

To make this concrete, a foundational grasp of quantum mechanics in a nuclear physics course means you need the wave function and probability amplitude concepts before moving on to the shell model—it's pedagogically prior. The Pauli exclusion principle, though, is fundamental to nuclear structure—it's not just a prerequisite but an irreducible logical necessity.

Both words trace back to the Latin *fundus* (bottom/base), so they share a building metaphor: foundational is like laying bricks at ground level—remove it and the structure above collapses—while fundamental is like the load-bearing column that runs through every floor, a principle pervading the whole design rather than just a layer you stand on.

For the visual, I'm setting up a two-axis scatter plot with gradient spectrums to position these words side by side. I'll go with a 2D scatter plot since it can show both axes simultaneously and I can make the dots interactive to reveal scenarios. I'm setting up an SVG with a 680x400 viewBox, positioning the two words along axes that represent structural-to-logical on the x-axis and domain-specific-to-universal on the y-axis, then mapping their normalized coordinates to canvas positions. Writing SVG visualization... a brick at ground level, with the foundation bricks highlighted. For the fundamental scene, I'm using the same building outline but adding a vertical column that runs through all floors, with a stick figure pointing at it.

I'm working out the positioning now—the viewBox will be 680 by 380, with the foundational scene on the left centered around x=170 and the fundamental scene on the right centered around x=510. The building itself will be a simple rectangle with floor lines and foundation bricks at the bottom. In the foundational scene, the figure is at ground level working on the bricks, while in the fundamental scene, the figure is positioned to the side examining the central column that spans all three stories.

I should also make sure the color scheme matches Visual 1—using purple for foundational and coral for fundamental to keep things consistent.

Writing the SVG code... Writing SVG code... Writing SVG structure... won't use the arrow marker since I want the axes to point outward from center. Actually let me just use simple line elements without arrowheads for cleaner look.

Let me think about the axis labels placement carefully to avoid text overflow.

X-axis label left: "structural / sequential" — this is ~26 chars, at 12px that's about 156px wide. If text-anchor="middle" at x=80+half width... let me put it at x=80, text-anchor="start", y=205 (below the axis line).

Actually wait - I want the label at the LEFT end, labeled "structural / sequential", and at the RIGHT end, labeled "logical / essential". These are axis pole labels.

Let me position:
- Left label: x=90, y=205, text-anchor="start", class="ts"
- Right label: x=610, y=205, text-anchor="end", class="ts"
- Top label: x=340, y=42, text-anchor="middle", class="ts"
- Bottom label: x=340, y=362, text-anchor="middle", class="ts"

Now for the concept labels — I need to position "foundational" and "fundamental" with their etymologies and descriptions below each dot. The foundational dot sits at (175, 255), so I'll place its label to the right starting at x=190 with the etymology and gist stacked below. The fundamental dot is further right at (485, 130), so its label group starts at x=500, but I need to make sure the text doesn't run off the edge.

Positioning labels... Writing SVG markup... Writing SVG axes and labels... Writing SVG axes and markers... Writing the interactive visualization... I'm realizing the core issue: hardcoded hex colors won't respect dark mode, but wrapping everything in a `c-{ramp}` class would style the shapes incorrectly. I need to apply the color class only to the text elements themselves, or find a way to let the class handle text coloring while keeping the circle's fill separate. I'm settling on a simpler approach: use the purple-600 color directly as a solid fill for the circle dot, which will be visible and distinct in both light and dark modes, then wrap the text labels in the color-ramp group so they automatically adapt their contrast for readability. I'm settling on a cleaner approach: color the dots using the semantic color classes, apply the same color class to a group wrapping just the label text so it matches the dot, and use neutral text styles for the etymology and description. Building the SVG structure...

Wait, I'm realizing the color classes on circles fill with a light tint rather than a solid color, so the dots would be too faint. I need to use explicit hex values for the dots to make them visible while keeping the labels colored semantically. I'm realizing the color-coding approach needs adjustment—I can't nest color classes deeply without losing the fill on inner elements, so I'll apply the color class directly to the group containing each dot and its label instead.

Writing SVG markup... The color scheme checks out—in light mode the deep purple text is readable against the background, and dark mode automatically switches to the lighter shade. For the scatter plot dots, using the class directly gives me a hollow bubble effect with a light fill and darker stroke, which works well and keeps things consistent without hardcoding colors.

Now I'm mapping out the label positions to make sure everything fits within the 680px plot width. The foundational cluster around x=175 has plenty of room for its three-line label stack, and I'm checking the same spacing for the fundamental cluster starting around x=485.

I'm realizing both terms share the same Latin root—fundus meaning "bottom" or "base"—so I can align their etymologies to show that connection clearly.

Now I'm planning the second visual, which will show two construction scenes side by side to illustrate the difference between the two words. The left scene depicts foundational elements with highlighted ground-floor bricks in purple, while the right scene will show the fundamental structure in coral tones.

I'm working out the SVG layout and positioning for both scenes, calculating the building dimensions, floor heights, and where the stick figures should be placed to clearly demonstrate each concept. Writing SVG structures... Writing the stick figure... Writing SVG elements... Adding a divider line and shared etymology note at the top, then finalizing the SVG structure while making sure all elements stay within bounds. I'm reconsidering the axes for the positional map. The current options don't quite capture the distinction I need, so I'm weighing alternatives like "pedagogical vs. ontological" or "context-dependent vs. context-independent" paired with structural vs. logical dimensions. The real challenge is finding axes that meaningfully separate foundational concepts—those base-layer prerequisites within a domain—from other types of knowledge. and the domain-specific structure collapses
- Often implies pedagogical sequence ("learn this first")
- Example: "foundational skills in programming" = the skills you need to build on

**fundamental**:
- It's irreducible/essential across domains
- It can't be derived from something simpler
- Often implies logical necessity ("this must be true")
- Example: "fundamental principles of physics" = principles that underpin all of physics

Best axes:
- X: "domain-specific" (foundational) ↔ "universal / cross-domain" (fundamental) 
- Y: "sequential / pedagogical priority" (foundational, high Y) ↔ "logical / structural necessity" (fundamental, high Y)

Wait, both should be high on "priority"... Let me reconsider.

Actually:
- foundational: domain-specific + sequential priority (you build on top of it)
- fundamental: universal + logical necessity (it cannot be circumvented)

So my axes should be scope on the X-axis—ranging from domain-specific to cross-domain—and the nature of priority on the Y-axis, from structural base layers to irreducible logical principles. Plotting these out on a canvas, foundational lands in the lower-left quadrant while fundamental sits in the upper-right, and I'm calculating the exact pixel coordinates to position them correctly. I'm checking the character widths for the remaining labels—they all fit comfortably. Now I'll write out the SVGs, keeping the gists visible as small italic text near each data point rather than hiding them in tooltips. My plan is to build the positional map with axes at x=340 and y=190, then add the scatter plot with clean, minimal styling.

Writing SVG code... Writing the SVG markup... Writing the interactive diagram... I'm verifying how the color classes work with nested groups in SVG — specifically whether direct-child selectors mean that text inside a nested `<g class="c-purple">` will properly inherit the purple color ramp, and checking if grandchild elements lose their styling due to the selector specificity. gets fill=purple-50, stroke=purple-600. ✓

The `<g class="c-purple">` inside is a direct child of g.node, and the text inside is a direct child of g.c-purple. The text gets purple text color. ✓

For the ts text outside the c-purple group (etymology, gist): they're direct children of g.node which has no color class, so they get the default var(--color-text-secondary). ✓

Now I'm verifying the coordinate math for the labels. The circle sits at (210, 246), with the main label starting at x=230, y=242. At roughly 8 pixels per character for 12 characters, that's about 96 pixels wide, ending around x=326. The etymology text below at y=256 spans about 21 characters at 7 pixels each, so around 147 pixels...

and the gist at y=269 is about 24 characters, extending to roughly 398. For the fundamental node at (470, 134), the label at x=490, y=130 is about 11 characters wide, the etymology at y=144 is 16 characters, and the gist at y=157 is also 16 characters—all fitting comfortably within the 640 safe area. The viewBox height should be set to accommodate the last element at y=343 plus a 20-pixel buffer, giving me around 363.

Actually, let me bump that to 380 for some breathing room. I'm also verifying the axis lines: the X axis runs from x=82 to x=598 at y=190, and the Y axis runs from y=52 to y=328 at x=340—both well within bounds. The arrowhead markers are bidirectional, so I need to make sure the orient attribute handles the rotation correctly.

Now I'm moving on to the metaphor illustration. I'm sketching out the left scene with a building that has three distinct floors, with the foundation highlighted in purple at the bottom.

I'm calculating the floor divisions: with a 220-pixel height, each floor gets about 73 pixels, so floor 3 spans the top, floor 2 is in the middle, and floor 1 (the ground level) sits at the bottom where I'll add the brick foundation highlight.

For the stick figure on the left, I'm positioning them at ground level next to the building, facing right toward it as if placing a brick.

On the right side, I'm mirroring the building layout but adding a central column that runs through all three floors highlighted in coral, with another stick figure positioned to the right, facing left and pointing at that column.

I'm adding scene labels below each building—"foundational" on the left and "fundamental" on the right—plus a shared etymological note at the top explaining both terms derive from the Latin word for "bottom." There's also a vertical divider separating the two scenes.

Now I'm setting up the SVG structure and starting to code the visual elements.

Building the SVG elements... Writing SVG elements... Writing SVG markup... Writing the stick figure... Writing SVG code... Adding SVG labels... I'm verifying the column is properly centered in the right building, and now checking the dimensions of the highlighted ground floor section on the left side. is y=65+225=290. Ground floor = y=215 to y=290, height=75. But the building rect goes from y=65 to y=290 (height=225). Floor lines at y=140 and y=215. So:
- Floor 3: y=65-140 (height 75)
- Floor 2: y=140-215 (height 75)
- Floor 1 (ground): y=215-290 (height 75)
Equal floor heights! Good.

Now the c-purple highlighted rect in the left scene:
```svg
<g class="c-purple">
  <rect x="85" y="215" width="150" height="75" rx="0" stroke-width="0.5"/>
</g>
```
This covers exactly the ground floor. ✓

The building shell has fill="none", so the highlighted rect will show through, but since the outer shell is drawn first in the SVG order, its stroke will be hidden behind the filled rect. I need to redraw the building shell after the floor highlights so the border stays visible on top. Same approach for the right scene—draw the column before the building shell.

Finalizing the draw order:
- Left: ground floor highlight, then building shell
- Right: central column, then building shell
- Floor lines drawn before the shell so they don't interfere with the outer border
- Removing strokes from the highlight rects to keep edges clean when the building shell draws on top

.

Refining the column styling...

Now I'm checking the positioning across both scene panels—the left building sits centered with equal margins, and the stick figure in the right panel is safely positioned in the margin area. The layout feels balanced. I'll set the viewBox height to 355 to accommodate the labels at the bottom with some breathing room, and I'm thinking about adding a subtle hint text prompting users to click for etymology.

Actually, I'll skip the visible hint since the clickable scenes already get a pointer cursor from the node class styling. I'm wrapping the entire scene group with the onclick handler for better interaction. Now I need to verify that nesting the color wrapper inside the clickable group won't break the text styling—the direct-child selectors should still apply correctly to the title and subtitle elements. ramp} normally sets fill on shape elements and color on text. When wrapping text only, it should just set the text color. Let me assume yes.

Also: the full build structure of the stick figure should check that the figure doesn't fall outside the safe area (x=40-640). The left figure is at x=44-82 (arms/legs) which is >= 40. The right figure is at x=586-610 which is <= 640. ✓

And the building bottoms: left at y=290, right at y=290. Labels at y=315. Distance is 25px. Fine.

Now let me write the code. I'll be concise.

Here's what I'll produce:
1. Analysis prose (etymology, scenarios, axes, gists, shared metaphor)
2. Visual 1: Positional map SVG (with click-for-scenarios)
3.

Prose explaining the metaphor
4. Visual 2: Metaphor illustration SVG (with click-for-etymology)
5. Traps & key relationships prose

Actually wait - per the skill: "Build both visuals. Always produce two show_widget calls with prose between them. Call read_me before the first."

I already called read_me. So the structure is:
- Analysis prose (before visuals)
- show_widget call 1 (positional map)
- Prose between
- show_widget call 2 (metaphor illustration)
- Prose after

Let me now write everything. For the analysis prose, I'll trace the etymology: both words stem from the Latin *fundus* ("bottom, base") through *fundamentum* ("foundation"), but diverged through different linguistic paths—foundational came through Old French *fondation*, while the other took a separate route.

On the distinguishing axes, I'm mapping scope (domain-specific to universal) against priority type (structural base layer versus logical irreducibility). Foundational occupies the structural, domain-specific space—it's a base layer for a particular field where removing it causes collapse, but only within that domain. Fundamental sits in the logical, universal quadrant as an irreducible principle that can't be broken down further.

To ground this, I'm thinking through concrete examples: foundational knowledge in quantum mechanics as the prerequisite operators and commutation relations you need before tackling nuclear shell models, versus the Pauli exclusion principle as something fundamental—not a starting assumption you can relax, but woven into the very structure of fermionic wave functions. Both words trace back to *fundus* and *fundamentum*, but the metaphor differs: foundational is the ground floor bricks the builder lays first, while fundamental is the load-bearing central column running through every level.

Now I'm working through the coordinate calculations for the visualization, mapping the conceptual attributes onto the plot space. Now I'm positioning the axis labels carefully—placing "domain-specific" and "universal" on the left and right of the x-axis, and "logical (irreducible)" and "structural (base layer)" above and below the y-axis. I'm checking that the text widths don't overlap with the chart area, and they all fit within reasonable bounds. I'm ready to write the response now. The structure will flow from etymology analysis into the first visual showing the positional map, then a bridge paragraph connecting the shared root to the metaphor, followed by the second visual with the building story, and finally some analytical notes on common traps and register differences. I'll weave the concrete scenarios into the opening prose so readers understand the framework before encountering the visuals. — the distinction hinges on whether something is structurally necessary (foundational) versus logically irreducible (fundamental). I'm setting up two interactive visuals: one where clicking reveals concrete scenarios for each term, and another that walks through the etymology. Then I'll move into the key relationships between them.

Now I'm working through the common pitfalls: academic writing tends to blur these terms together, *foundational* gets inflated to mean *fundamental* when they're doing different work. There's also a tonal difference — *foundational* has a pedagogical feel (*foundational skills*) while *fundamental* sounds more authoritative. Both are formal registers, neither fits casual conversation.

Now I'm ready to write the SVG code. I need to be careful with text alignment — using `dominant-baseline="central"` for text inside boxes, but positioning by baseline works fine elsewhere. For the label cluster next to the dot, I'm calculating the vertical spacing: the "foundational" label sits slightly above the dot center, with etymology and gist stacked below it, and I need to make sure the whole cluster feels balanced around the dot's position.

Writing SVG code... I've been checking the spacing carefully and everything looks good — no overlaps between the labels and dots. Now I'm ready to stop planning and actually write the SVG code. I realize the light purple fill won't work well for scatter plot dots, so I'll wrap the circles in groups to apply both the fill and stroke styling properly.

Writing SVG markup... I've been going back and forth on styling choices for the scatter plot markers, but I'm going to settle on using the semantic color classes with a bubble style—light fill with a colored stroke. It adapts cleanly to dark mode without needing hardcoded hex values, and it works fine as a visual marker. I'll apply the same approach to the metaphor illustration buildings and then write out the complete SVG code.

Now I'm laying out the coordinate system for the plot: the viewBox spans 680 by 375, with the plot area positioned between x=80-600 and y=55-330, centered around x=340, y=190. I'm placing the axis labels and annotations for each word—"foundational" in the lower left quadrant and "fundamental" in the upper right—with their etymologies and definitions positioned relative to each point.

Writing SVG code... Now I'm positioning the stick figures—one on the left side facing the wall and another on the right side facing left, each with detailed head, body, arms, and legs placements, plus a small brick element for the left figure. I'm refining the positioning of the root note and divider, then reconsidering the label placements to ensure symmetry—the left building centers at x=160 while the right should be at x=510 rather than x=495 to balance around the divider at x=340.

Now I'm ready to start building the SVG, and I want to make each scene clickable so users can interact with the etymology stories by wrapping the elements in a group.

Writing SVG structure... Writing SVG code... Writing SVG visualization... I'm verifying the text dimensions won't overflow the safe area—checking character counts and pixel widths for each label across both diagrams, and they all fit comfortably within the 640px boundary. Now moving into the second SVG diagram...

Building the left scene with the foundational etymology... Still writing SVG code... Writing SVG elements...

I'm noticing a layering issue where the ground floor highlight rectangle needs to be repositioned so it renders behind the building shell rather than on top of it. the bottom corners might show a slight mismatch with the rounded shell, so I'll add matching corner rounding to the highlight rect. For the column, the rounding difference is negligible since it spans the full height. Now I need to check the width of the "runs through all floors" label for the fundamental section — it's roughly 154 pixels wide, so I need to verify it fits properly when centered.

The label sits below the building at y=311-325, so it just needs to stay within the viewBox bounds, and at x=572 it's well clear of the 640 edge. The left label "lays the base" is also fine at 111-209. Now I'm checking whether the color class applied to the group properly cascades to the text elements nested inside.

The `c-coral` class uses a direct child selector, so the text inside that group gets the coral color. But I'm realizing there's a potential issue: if I nest a group inside a colored group, the grandchild elements lose the fill and render black instead. So I need to make sure my nesting structure doesn't create that problem.

Looking at my actual structure, I have `g.node` as the outer container with no color class, then `g.c-purple` inside it. The rect and text are direct children of `g.c-purple`, so they'll get the purple fill correctly. I'm not nesting colored groups inside other colored groups, so I'm safe here.

The spacing looks tight between the building and labels—only about 21 pixels—but it should work visually. The viewBox needs to extend past the last label at y=325 with some padding.

Setting the viewBox height to 350 gives me enough buffer. The shared root note sits at y=30 with 14 pixels of breathing room below it before the divider. The stick figure on the right is positioned around floor 2 height, pointing at a column that spans the building, which makes sense compositionally.

Ready to write the response now.

</details>

Both words descend from the same Latin root — *fundus* ("bottom, base") → *fundamentum* ("foundation"). The split happened in English through two paths: *fundamental* arrived earlier (16th c.) via Late Latin *fundamentalis* → Old French; *foundational* formed later (17th c.) from English *foundation* + adjectival *-al*.

That shared origin is exactly what makes them tricky. The difference lives not in meaning but in *kind of priority*:

*Foundational* is **positionally prior** — it describes a base layer that others are built on top of, within a specific domain or skill set. It implies sequence: you establish this first, and the structure above depends on it. Remove it and everything above falls. The claim is structural and domain-local.

*Fundamental* is **logically prior** — it describes an irreducible principle that cannot be derived from anything simpler. It makes a claim about necessity, not sequence. It's often cross-domain: "fundamental principles of physics" asserts something about the nature of physics itself, not just where learners start.

Two axes capture this well: **scope** (domain-specific ↔ universal) and **type of priority** (structural base layer ↔ logical irreducible). Click either dot to see a concrete scenario.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-29T01:55:03.749211Z",
  "stop_timestamp": "2026-03-29T01:55:10.932892Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01GvXHPeNdwzoDgk4tT5hrmX",
  "name": "visualize:show_widget",
  "input": {
    "title": "foundational_vs_fundamental_scatter",
    "loading_messages": [
      "Placing words on the map…",
      "Checking axis labels fit…"
    ],
    "widget_code": "<svg width=\"100%\" viewBox=\"0 0 680 365\">\n<defs>\n  <marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n\n<line x1=\"82\" y1=\"190\" x2=\"598\" y2=\"190\" stroke=\"var(--color-border-secondary)\" stroke-width=\"0.5\" marker-start=\"url(#a)\" marker-end=\"url(#a)\"/>\n<line x1=\"340\" y1=\"57\" x2=\"340\" y2=\"328\" stroke=\"var(--color-border-secondary)\" stroke-width=\"0.5\" marker-start=\"url(#a)\" marker-end=\"url(#a)\"/>\n\n<text class=\"ts\" x=\"90\" y=\"207\">domain-specific</text>\n<text class=\"ts\" x=\"590\" y=\"207\" text-anchor=\"end\">universal</text>\n<text class=\"ts\" x=\"340\" y=\"46\" text-anchor=\"middle\">logical (irreducible)</text>\n<text class=\"ts\" x=\"340\" y=\"344\" text-anchor=\"middle\">structural (base layer)</text>\n\n<g class=\"node\" onclick=\"sendPrompt('Give me a concrete example sentence where foundational is the precise and natural choice, and one where swapping in fundamental would subtly miss the mark — then explain why.')\">\n  <g class=\"c-purple\"><circle cx=\"210\" cy=\"246\" r=\"11\" stroke-width=\"2\"/></g>\n  <g class=\"c-purple\">\n    <text class=\"th\" x=\"228\" y=\"247\" dominant-baseline=\"central\">foundational</text>\n  </g>\n  <text class=\"ts\" x=\"228\" y=\"261\" font-style=\"italic\">L. fundare \"to found\"</text>\n  <text class=\"ts\" x=\"228\" y=\"274\">base layer, builds above</text>\n</g>\n\n<g class=\"node\" onclick=\"sendPrompt('Give me a concrete example sentence where fundamental is the precise and natural choice, and one where swapping in foundational would subtly miss the mark — then explain why.')\">\n  <g class=\"c-coral\"><circle cx=\"470\" cy=\"134\" r=\"11\" stroke-width=\"2\"/></g>\n  <g class=\"c-coral\">\n    <text class=\"th\" x=\"488\" y=\"135\" dominant-baseline=\"central\">fundamental</text>\n  </g>\n  <text class=\"ts\" x=\"488\" y=\"149\" font-style=\"italic\">L. fundamentalis</text>\n  <text class=\"ts\" x=\"488\" y=\"162\">irreducible core</text>\n</g>\n</svg>"
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
  "tool_use_id": "toolu_01GvXHPeNdwzoDgk4tT5hrmX",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "28cb7c70-e750-4fcf-8726-2a87a097bc02"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "772b4570-25b2-4059-9a8b-7bdb978e3ab0"
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

Now let me write the bridge prose and then the second SVG.

</details>

The shared root *fundus* makes the metaphor almost write itself: a building under construction. Both concepts are "the bottom" — but *what kind* of bottom they are is different. Click either scene to trace the etymology.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-29T01:55:16.258289Z",
  "stop_timestamp": "2026-03-29T01:55:29.182329Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01VnUxFA3EzDRJdfrHnwEQPq",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": [
      "Laying bricks…",
      "Installing the load-bearing column…"
    ],
    "title": "foundational_vs_fundamental_building_metaphor",
    "widget_code": "<svg width=\"100%\" viewBox=\"0 0 680 350\">\n\n<text class=\"ts\" x=\"340\" y=\"30\" text-anchor=\"middle\" font-style=\"italic\">both from L. fundus \"bottom / base\" → fundamentum</text>\n<line x1=\"340\" y1=\"44\" x2=\"340\" y2=\"302\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\" stroke-dasharray=\"4 4\"/>\n\n<g class=\"node\" onclick=\"sendPrompt('Trace the full etymology of foundational from Latin fundus through to modern English, and explain how the structural meaning emerged.')\">\n  <g class=\"c-purple\"><rect x=\"85\" y=\"215\" width=\"150\" height=\"75\" rx=\"2\" stroke-width=\"0\"/></g>\n  <rect x=\"85\" y=\"65\" width=\"150\" height=\"225\" fill=\"none\" stroke=\"var(--color-border-secondary)\" stroke-width=\"1.5\" rx=\"2\"/>\n  <line x1=\"85\" y1=\"140\" x2=\"235\" y2=\"140\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n  <line x1=\"85\" y1=\"215\" x2=\"235\" y2=\"215\" stroke=\"var(--color-border-secondary)\" stroke-width=\"0.5\"/>\n\n  <circle cx=\"56\" cy=\"218\" r=\"8\" fill=\"none\" stroke=\"var(--color-text-secondary)\" stroke-width=\"1.5\"/>\n  <line x1=\"56\" y1=\"226\" x2=\"56\" y2=\"252\" stroke=\"var(--color-text-secondary)\" stroke-width=\"1.5\"/>\n  <line x1=\"56\" y1=\"233\" x2=\"82\" y2=\"225\" stroke=\"var(--color-text-secondary)\" stroke-width=\"1.5\"/>\n  <line x1=\"56\" y1=\"233\" x2=\"42\" y2=\"244\" stroke=\"var(--color-text-secondary)\" stroke-width=\"1.5\"/>\n  <line x1=\"56\" y1=\"252\" x2=\"44\" y2=\"275\" stroke=\"var(--color-text-secondary)\" stroke-width=\"1.5\"/>\n  <line x1=\"56\" y1=\"252\" x2=\"68\" y2=\"275\" stroke=\"var(--color-text-secondary)\" stroke-width=\"1.5\"/>\n  <g class=\"c-purple\"><rect x=\"76\" y=\"219\" width=\"13\" height=\"8\" rx=\"1\" stroke-width=\"0.5\"/></g>\n\n  <g class=\"c-purple\">\n    <text class=\"th\" x=\"160\" y=\"311\" text-anchor=\"middle\">foundational</text>\n    <text class=\"ts\" x=\"160\" y=\"326\" text-anchor=\"middle\">lays the base</text>\n  </g>\n</g>\n\n<g class=\"node\" onclick=\"sendPrompt('Trace the full etymology of fundamental from Latin fundamentalis through to modern English, and explain how the logical/irreducible meaning emerged.')\">\n  <rect x=\"481\" y=\"65\" width=\"28\" height=\"225\" class=\"c-coral\" stroke-width=\"0\"/>\n  <rect x=\"420\" y=\"65\" width=\"150\" height=\"225\" fill=\"none\" stroke=\"var(--color-border-secondary)\" stroke-width=\"1.5\" rx=\"2\"/>\n  <line x1=\"420\" y1=\"140\" x2=\"570\" y2=\"140\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n  <line x1=\"420\" y1=\"215\" x2=\"570\" y2=\"215\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\"/>\n\n  <circle cx=\"597\" cy=\"163\" r=\"8\" fill=\"none\" stroke=\"var(--color-text-secondary)\" stroke-width=\"1.5\"/>\n  <line x1=\"597\" y1=\"171\" x2=\"597\" y2=\"198\" stroke=\"var(--color-text-secondary)\" stroke-width=\"1.5\"/>\n  <line x1=\"597\" y1=\"178\" x2=\"572\" y2=\"168\" stroke=\"var(--color-text-secondary)\" stroke-width=\"1.5\"/>\n  <line x1=\"597\" y1=\"178\" x2=\"613\" y2=\"186\" stroke=\"var(--color-text-secondary)\" stroke-width=\"1.5\"/>\n  <line x1=\"597\" y1=\"198\" x2=\"586\" y2=\"222\" stroke=\"var(--color-text-secondary)\" stroke-width=\"1.5\"/>\n  <line x1=\"597\" y1=\"198\" x2=\"609\" y2=\"222\" stroke=\"var(--color-text-secondary)\" stroke-width=\"1.5\"/>\n\n  <g class=\"c-coral\">\n    <text class=\"th\" x=\"495\" y=\"311\" text-anchor=\"middle\">fundamental</text>\n    <text class=\"ts\" x=\"495\" y=\"326\" text-anchor=\"middle\">runs through all floors</text>\n  </g>\n</g>\n</svg>"
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
  "tool_use_id": "toolu_01VnUxFA3EzDRJdfrHnwEQPq",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "1d1553e4-6677-466d-93c3-8498448f1b71"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "b7d7b785-e8cc-4a16-8d9a-5d4e591b859a"
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

Good. Now let me write the post-visual prose with traps, key relationships, and register notes.

</details>

**Key relationships:**

Something can be foundational without being fundamental. Reading music notation is foundational to Western classical training — strip it away and the student is lost — but it is not a fundamental principle of music. The notation is a historical convention; the interval relationships underneath it are closer to fundamental. Notice that this distinction is testable: you can rebuild musical knowledge on alternative notation systems, but you cannot rebuild it without pitch relationships.

Conversely, something fundamental need not sit at the bottom of the learning stack. The Pauli exclusion principle is fundamental to nuclear structure — invoked at introductory level and at the research frontier equally — not because you learn it first, but because there is no path around it at any level.

**Traps:**

Academic writing routinely inflates *foundational* into a synonym for *fundamental* ("a foundational contribution to the field," "foundational assumptions"). The usage is established enough that it isn't wrong — but it is imprecise: it loses the structural implication and often just means "important." If the claim is about logical necessity, prefer *fundamental*.

The inverse trap is rarer but real: calling something *fundamental* when you mean *foundational* makes a stronger claim than you intend. Saying "calculus is fundamental to physics" implies physics is impossible without it, logically. Saying "calculus is foundational to physics" just means it's what you build the curriculum on — a more defensible claim.

**Register:** Both are formal. In casual speech, "basic," "core," or "essential" serve better. *Foundational* has a warm pedagogical register (*foundational skills, foundational course*) that makes it comfortable in educational contexts. *Fundamental* reads more authoritative and is the stronger word — which is exactly why overusing it dilutes it.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3745-c391-7f66-9feb-38cb2e3d3543",
  "updated_at": "2026-03-29T01:55:43.327875Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3745-c391-7006-9549-75f2ccd1141e"
}
```

</details>

### 5. human — 2026-03-29T01:56:05.265133Z

Give me a concrete example sentence where foundational is the precise and natural choice, and one where swapping in fundamental would subtly miss the mark — then explain why.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d374e-2da2-70b2-998e-36f10b94265e",
  "updated_at": "2026-03-29T01:56:05.265133Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3745-c391-7f66-9feb-38cb2e3d3543"
}
```

</details>

### 6. assistant — 2026-03-29T01:56:16.961169Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants concrete example sentences for "foundational" where swapping in "fundamental" would subtly miss the mark.

</details>

**Sentence where *foundational* is the precise choice:**

> "Before tackling counterpoint, students must master voice-leading — it's the foundational skill everything else is built on."

Now swap it: *"…it's the **fundamental** skill everything else is built on."*

Here's where the miss happens. *Fundamental* shifts the claim from **sequence** to **logical necessity**. The original sentence is saying: *voice-leading comes first structurally; the curriculum rests on it.* The swapped version starts to say: *voice-leading is an irreducible principle of music itself.* That's a stronger and arguably false claim — you can analyze music through other frameworks (spectral, rhythmic, timbral) without centering voice-leading. The foundational claim is modest and accurate; the fundamental claim is grandiose and contestable.

The reader may not consciously notice the difference, but the sentence has quietly made a bigger promise than you intended.

---

**Why this is the tell:**

*Foundational* licenses a question: *foundational to what, and for whom?* The answer is local — "to this course," "to this tradition." That locality is the word's strength.

*Fundamental* resists that question. It implies the priority holds everywhere, for everyone, always. That's exactly right when you're describing the Pauli exclusion principle. It's quietly wrong when you're just describing a curriculum sequence.

So the practical test: if you can append *"in this context / for this skill set"* without the sentence feeling strange, use *foundational*. If the claim holds even without that qualifier, *fundamental* earns its place.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d374e-2da2-74c1-baaf-f6924299162b",
  "updated_at": "2026-03-29T01:56:16.961169Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d374e-2da2-70b2-998e-36f10b94265e"
}
```

</details>

### 7. human — 2026-03-29T02:05:50.718291Z

Then how about the word "basic"? 
Can I interpret "foundational" is more moderate/humble than "fundamental", because using "fundamental" indicates that thing is indispensable.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3757-1bd6-7712-8941-6def150a40a0",
  "updated_at": "2026-03-29T02:05:50.718291Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d374e-2da2-74c1-baaf-f6924299162b"
}
```

</details>

### 8. assistant — 2026-03-29T02:06:31.534736Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants to add "basic" to the comparison cluster and also test their interpretation about foundational vs fundamental. Let me address both, and since we now have 3 words, I should run the vocabulary visualization skill for the updated cluster.

Their interpretation is partially right but needs refinement. "Fundamental" does imply indispensability/logical necessity, and "foundational" is more domain-local. But "humble" might not be quite right — foundational can still be a strong claim, just scoped differently.

Let me also bring in "basic" properly. Basic comes from Greek basis (step, pedestal) — it emphasizes simplicity and accessibility more than priority. It's the least structurally loaded of the three.


I'm refining the distinction here — it's really about scope rather than strength. Foundational carries conviction, just within a bounded domain, so the "humility" framing is a useful shorthand even if it's not the core difference. Now with three words in play, I need to visualize this properly. The skill recommends side-by-side panels for this configuration, so I'll set up an interactive 2D scatter to map how these terms position themselves across the axes.

I'm settling on scope (domain-specific to universal) for the x-axis and type of claim (accessibility through structural priority to logical necessity) for the y-axis. This gives me clean positions: basic sits domain-specific and accessibility-focused, foundational lands somewhere in the middle on scope with structural priority, and fundamental reaches toward universal applicability and logical necessity. I'll address their interpretation directly in prose first, then show the visual.

</details>

Your interpretation is close but needs one refinement — and "basic" sharpens it nicely.

*Foundational* isn't humble because it makes a weaker claim; it's humble because it makes a **scoped** claim. It says: "this is indispensable *within this domain or sequence.*" That can still be said with conviction. *Fundamental* says: "this is indispensable *full stop, across all frames.*" So the difference is scope of necessity, not degree of it.

*Basic* is a third thing altogether. It isn't making a claim about necessity at all — it's making a claim about **accessibility and simplicity**. Something basic is entry-level, low in complexity. That's why it can feel slightly diminishing: calling a skill "basic" implies it isn't deep, even if it's widely needed.

The three words now occupy three genuinely different positions. The cleanest axes are **scope of the claim** and **what kind of priority is being asserted**:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-29T02:06:09.333214Z",
  "stop_timestamp": "2026-03-29T02:06:21.786739Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_011UHF8qeezaq87ZKNpm4pbF",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": [
      "Plotting three words on two axes…"
    ],
    "title": "basic_foundational_fundamental_scatter",
    "widget_code": "<svg width=\"100%\" viewBox=\"0 0 680 370\">\n<defs>\n  <marker id=\"a\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n\n<line x1=\"72\" y1=\"195\" x2=\"614\" y2=\"195\" stroke=\"var(--color-border-secondary)\" stroke-width=\"0.5\" marker-start=\"url(#a)\" marker-end=\"url(#a)\"/>\n<line x1=\"343\" y1=\"52\" x2=\"343\" y2=\"335\" stroke=\"var(--color-border-secondary)\" stroke-width=\"0.5\" marker-start=\"url(#a)\" marker-end=\"url(#a)\"/>\n\n<text class=\"ts\" x=\"82\" y=\"212\">domain-specific</text>\n<text class=\"ts\" x=\"604\" y=\"212\" text-anchor=\"end\">universal</text>\n<text class=\"ts\" x=\"343\" y=\"42\" text-anchor=\"middle\">logical necessity (indispensable everywhere)</text>\n<text class=\"ts\" x=\"343\" y=\"348\" text-anchor=\"middle\">accessibility / simplicity (entry-level)</text>\n\n<g class=\"node\" onclick=\"sendPrompt('Give me a sentence where basic is natural and neither foundational nor fundamental would fit as well. Then explain why.')\">\n  <g class=\"c-gray\"><circle cx=\"185\" cy=\"285\" r=\"11\" stroke-width=\"1.5\"/></g>\n  <text class=\"th\" x=\"204\" y=\"286\" dominant-baseline=\"central\" fill=\"var(--color-text-primary)\">basic</text>\n  <text class=\"ts\" x=\"204\" y=\"300\" font-style=\"italic\">Gk. basis \"step, pedestal\"</text>\n  <text class=\"ts\" x=\"204\" y=\"313\">simple, accessible, entry-level</text>\n</g>\n\n<g class=\"node\" onclick=\"sendPrompt('Give me a sentence where foundational is natural and neither basic nor fundamental would fit as well. Then explain why.')\">\n  <g class=\"c-purple\"><circle cx=\"210\" cy=\"148\" r=\"11\" stroke-width=\"1.5\"/></g>\n  <text class=\"th\" x=\"229\" y=\"149\" dominant-baseline=\"central\" fill=\"var(--color-text-primary)\">foundational</text>\n  <text class=\"ts\" x=\"229\" y=\"163\" font-style=\"italic\">L. fundare \"to found\" + -ational</text>\n  <text class=\"ts\" x=\"229\" y=\"176\">indispensable within this domain/sequence</text>\n</g>\n\n<g class=\"node\" onclick=\"sendPrompt('Give me a sentence where fundamental is natural and neither basic nor foundational would fit as well. Then explain why.')\">\n  <g class=\"c-coral\"><circle cx=\"500\" cy=\"108\" r=\"11\" stroke-width=\"1.5\"/></g>\n  <text class=\"th\" x=\"519\" y=\"109\" dominant-baseline=\"central\" fill=\"var(--color-text-primary)\">fundamental</text>\n  <text class=\"ts\" x=\"519\" y=\"123\" font-style=\"italic\">L. fundamentalis</text>\n  <text class=\"ts\" x=\"519\" y=\"136\">indispensable everywhere, irreducible</text>\n</g>\n\n<line x1=\"185\" y1=\"285\" x2=\"210\" y2=\"148\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\" stroke-dasharray=\"3 3\"/>\n<line x1=\"210\" y1=\"148\" x2=\"500\" y2=\"108\" stroke=\"var(--color-border-tertiary)\" stroke-width=\"0.5\" stroke-dasharray=\"3 3\"/>\n</svg>"
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
  "tool_use_id": "toolu_011UHF8qeezaq87ZKNpm4pbF",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "01b2aa5c-776d-4cfc-90cf-2c6ffd812da1"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "bbe7d7f5-546e-4a04-aee5-e7740d8cd013"
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

The dashed line connecting the three is deliberate — they share the *fundus* root (except *basic*, which comes from Greek *basis*, "step") and are often used interchangeably, but they slide along two different dimensions simultaneously.

**The key trap this reveals:**

*Basic* and *foundational* are both domain-specific, so they're easy to conflate. But they differ on the priority axis in an important way. Compare:

> "Reading sheet music is a **basic** skill for conservatory students."
> "Reading sheet music is a **foundational** skill for conservatory students."

The first suggests it's simple and entry-level. The second suggests the whole curriculum rests on it. You could actually argue both are true simultaneously — it's basic *and* foundational. But if a student already reads fluently, calling it "basic" becomes slightly condescending; "foundational" stays respectful because it speaks to structural role, not complexity.

**Your summary, refined:**

| | Scope | Claim type |
|---|---|---|
| *basic* | local | "this is simple / accessible" |
| *foundational* | local | "this is structurally prior here" |
| *fundamental* | universal | "this is logically irreducible everywhere" |

So yes — *foundational* is more modest than *fundamental*, but the modesty comes from **limiting the scope**, not from weakening the claim. Within its scope, foundational can be just as strong a claim as fundamental.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3757-1bd6-7f97-aaef-ab89b6500d4f",
  "updated_at": "2026-03-29T02:06:31.534736Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3757-1bd6-7712-8941-6def150a40a0"
}
```

</details>

### 9. human — 2026-03-29T02:07:43.487820Z

Hello? Hello? Can you hear me?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3758-d81b-7398-a056-2ab860f7d51c",
  "updated_at": "2026-03-29T02:07:43.487820Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3757-1bd6-7f97-aaef-ab89b6500d4f"
}
```

</details>

### 10. assistant — 2026-03-29T02:07:47.573563Z

Yes, I'm here! What's on your mind, Reid?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3758-db60-752d-a84d-cb116cc40689",
  "updated_at": "2026-03-29T02:07:47.573563Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3758-d81b-7398-a056-2ab860f7d51c"
}
```

</details>

### 11. human — 2026-03-29T02:07:58.874199Z

Can you read the context about about about about... no. No. No.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3759-0a64-727f-8089-e01b4d567dbf",
  "updated_at": "2026-03-29T02:07:58.874199Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3758-db60-752d-a84d-cb116cc40689"
}
```

</details>

### 12. assistant — 2026-03-29T02:08:04.061813Z

I'm picking up some frustration there. Take your time — what's going on?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3759-1777-70a7-9e6a-60cacdd57e52",
  "updated_at": "2026-03-29T02:08:04.061813Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3759-0a64-727f-8089-e01b4d567dbf"
}
```

</details>

### 13. human — 2026-03-29T02:08:12.191830Z

Can you read the context previous previous context?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3759-45cb-723f-a8db-6b45fb56680d",
  "updated_at": "2026-03-29T02:08:12.191830Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3759-1777-70a7-9e6a-60cacdd57e52"
}
```

</details>

### 14. assistant — 2026-03-29T02:08:27.186710Z

Yeah, absolutely. I've got our whole conversation — the foundational vs fundamental comparison, the axes we mapped out, *basic* as a third dimension. All of it.

What do you need me to revisit or clarify?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3759-4b7f-7256-b16c-6f336606bbe9",
  "updated_at": "2026-03-29T02:08:27.186710Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3759-45cb-723f-a8db-6b45fb56680d"
}
```

</details>

### 15. human — 2026-03-29T02:08:36.193178Z

Can I rewind our conversation from the voice and quick points?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3759-a2d7-7792-a448-f5dafe1dde36",
  "updated_at": "2026-03-29T02:08:36.193178Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3759-4b7f-7256-b16c-6f336606bbe9"
}
```

</details>

### 16. assistant — 2026-03-29T02:08:53.933943Z

Sure — let me recap the core beats from our vocabulary session:

We started with *foundational* vs *fundamental*. Both come from Latin *fundus* ("bottom"), but they split on two axes: **scope** (domain-specific vs universal) and **type of priority** (structural base layer vs logically irreducible).

Then we added *basic*, which occupies a different position entirely — it's about **simplicity and accessibility**, not necessity. That's why you can call something both foundational and basic, or foundational but complex.

The key distinction: *foundational* scopes its claim ("indispensable here, in this sequence"), while *fundamental* makes a universal claim ("irreducible everywhere"). That's why swapping them changes the sentence's weight.

Is there a specific part you want to dig back into, or a new angle you're curious

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3759-a940-7347-ae06-d28fd320fe5d",
  "updated_at": "2026-03-29T02:08:53.933943Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3759-a2d7-7792-a448-f5dafe1dde36"
}
```

</details>

### 17. human — 2026-03-29T02:09:42.107567Z

Thanks for your explanation! Have a good day my partner.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d375a-a29e-705c-8515-d8fb4a0f3c37",
  "updated_at": "2026-03-29T02:09:42.107567Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3757-1bd6-7f97-aaef-ab89b6500d4f"
}
```

</details>

### 18. assistant — 2026-03-29T02:09:44.671691Z

 

<details>
<summary>Thinking (verbatim)</summary>

A casual, warm sign-off.

</details>

You too, Reid! Good luck with the physics work. 👋

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d375a-a29e-7719-8b1a-89f0f31a3c1b",
  "updated_at": "2026-03-29T02:09:44.671691Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d375a-a29e-705c-8515-d8fb4a0f3c37"
}
```

</details>

### 19. human — 2026-03-30T01:10:43.052429Z

So the quantum mechinics is not "basic" but "fundamental"?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3c4a-fe74-76ed-9203-fcb18cbbed29",
  "updated_at": "2026-03-30T01:10:43.052429Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3757-1bd6-7f97-aaef-ab89b6500d4f"
}
```

</details>

### 20. assistant — 2026-03-30T01:10:57.960860Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is testing their understanding with a concrete example. This is a straightforward conceptual question I can answer directly without tools.

</details>

Exactly right — and that example is actually a perfect stress test of all three words simultaneously.

**Quantum mechanics is fundamental** because it describes irreducible features of how matter behaves at the deepest level we currently know. There is no simpler framework you can derive it from; everything else (chemistry, materials science, nuclear physics) is built *on top of* it. The claim holds universally, not just within one curriculum.

**It is also foundational** — to physics, to chemistry, to your own TPC work at HIRFL. But notice that "foundational" here adds a domain qualifier that "fundamental" doesn't need. You'd naturally say:

> "Quantum mechanics is **foundational** to nuclear physics."
> "Quantum mechanics is **fundamental**." *(full stop — no qualifier needed or expected)*

**It is emphatically not basic** — and this is where the word does real work. Quantum mechanics is structurally prior and logically irreducible, but it is *not* simple or accessible. This is actually a rare and interesting case: something can sit at the very bottom of the explanatory hierarchy and still be extraordinarily difficult. "Basic" implies the bottom of the *complexity* hierarchy, which is a completely separate axis.

This is also why phrases like "basic quantum mechanics" feel slightly strange — you can say it to mean "introductory QM" in a course context, but it carries a quiet tension, because the word "basic" keeps implying simplicity that the subject refuses to have.

So the full picture for quantum mechanics:

| Word | Applicable? | Why |
|---|---|---|
| *basic* | No | Not simple or entry-level |
| *foundational* | Yes, with a qualifier | Foundational *to physics, to chemistry…* |
| *fundamental* | Yes, unconditionally | Irreducible at the deepest level we know |

Your instinct was correct — and the reasoning behind it is now precise.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3c4a-fe74-77e7-a4c5-da34348d7a91",
  "updated_at": "2026-03-30T01:10:57.960860Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3c4a-fe74-76ed-9203-fcb18cbbed29"
}
```

</details>

### 21. human — 2026-03-30T01:14:54.031615Z

Give me a sentence where basic is natural and neither foundational nor fundamental would fit as well. Then explain why.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3c4e-d271-7585-9994-b312623a26b5",
  "updated_at": "2026-03-30T01:14:54.031615Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3c4a-fe74-77e7-a4c5-da34348d7a91"
}
```

</details>

### 22. assistant — 2026-03-30T01:15:08.121581Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants a sentence where "basic" is natural and the other two wouldn't fit as well.

</details>

> "Before we get into the analysis, let me cover some **basic** statistics — mean, median, standard deviation."

Now try the swaps:

> "…let me cover some **foundational** statistics…"
> "…let me cover some **fundamental** statistics…"

Both swapped versions sound odd, and for different reasons.

---

**Why *foundational* misses:**

*Foundational* claims structural priority — that the curriculum or skill set *rests* on these concepts. But the speaker isn't making that claim. They're not saying "you need these to proceed" in a deep architectural sense. They're saying "these are simple enough that I can use them as shared starting ground without explanation." That's an accessibility claim, not a structural one. *Foundational* would imply the speaker is about to build something elaborate on top of these concepts. They might just be giving a one-off presentation.

**Why *fundamental* misses even more:**

*Fundamental* would claim that mean and standard deviation are logically irreducible principles of statistics — universal and inescapable. That's philosophically contestable. Bayesian statistics, for instance, can be built up without centering those particular measures. They're conventional and widely useful, but not *fundamental* in the way the central limit theorem or probability axioms might be. Calling them fundamental quietly overclaims.

**Why *basic* fits perfectly:**

The speaker is signaling: *"I'm assuming a low complexity threshold — don't worry, you already know this or can follow easily."* That's purely an accessibility and simplicity signal, with no claim about structural necessity or logical irreducibility. It's also slightly social — it reassures the audience. *Foundational* and *fundamental* would both make the moment feel weightier and more technical than intended.

---

The tell is that **basic is the only one of the three that can be self-deprecating.** You say "just a few basic concepts" to *downplay* something. You would never say "just a few foundational concepts" or "just a few fundamental concepts" — those words elevate rather than soften.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3c4e-d271-761b-a452-325da1c04c4b",
  "updated_at": "2026-03-30T01:15:08.121581Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3c4e-d271-7585-9994-b312623a26b5"
}
```

</details>
