# Serif font preferences in visualization widgets

## Export metadata (verbatim)

```json
{
  "uuid": "23c2d4d3-58f3-4a08-bb9b-b8589582c5a9",
  "name": "Serif font preferences in visualization widgets",
  "summary": "**Conversation Overview**\n\nThe person asked whether their two custom skills — `concept-visualizer` and `vocabulary-visualization` — correctly reflected their preference for serif fonts and styling in the inline visualization widget. Claude examined both `SKILL.md` files and confirmed that both skills do encode serif typography preferences, but with notable inconsistencies between them.\n\nThe concept-visualizer uses a system-serif stack (Iowan Old Style → Palatino → Georgia) and includes an explicit rule to set `font-family` on the `<svg>` element to ensure SVG `<text>` nodes inherit the serif font correctly. The vocabulary-visualization skill uses Cormorant Garamond (loaded from Google Fonts) for display text and Space Mono for labels, headers, and axis text, with serif italic for scenario text — a more differentiated typographic role system. Claude flagged three issues for the person's consideration: the two skills use different serif stacks and will not visually match; the SVG `font-family` enforcement rule exists only in concept-visualizer, meaning vocabulary-visualization SVG output could silently revert to sans-serif; and only vocabulary-visualization defines distinct typographic roles (display vs. label vs. scenario). Claude offered to draft edits to unify the two skills but the conversation ended before the person responded.\n\nThe person demonstrates a preference for serif typography across visualization widgets and maintains versioned skill files with evolution logs. The conversation did not reach a decision point, and no corrections or explicit instructions for future handling were given.",
  "created_at": "2026-04-23T14:45:50.477339Z",
  "updated_at": "2026-04-23T14:46:44.223518Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-23T14:45:51.226665Z

Have the current /concept-visualizer and /vocabulary-visualization reflected my preference for serif font and style in inline_visualization widget?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019dbacd-e503-712a-a09b-61c5add40b8f",
  "updated_at": "2026-04-23T14:45:51.226665Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-23T14:46:44.223518Z

 

<details>
<summary>Thinking (verbatim)</summary>

 I need to check the actual skill files to see whether they use serif fonts in their inline visualization widgets. Let me look at the concept-visualizer and vocabulary-visualization skills to verify what styling preferences they currently have.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-23T14:45:57.144304Z",
  "stop_timestamp": "2026-04-23T14:45:57.680729Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01HWrczioncKKtCnFYeqqrVv",
  "name": "view",
  "input": {
    "description": "Check the concept-visualizer skill for font/style specs",
    "path": "/mnt/skills/user/concept-visualizer/SKILL.md"
  },
  "message": "Check the concept-visualizer skill for font/style specs",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Check the concept-visualizer skill for font/style specs"
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
  "tool_use_id": "toolu_01HWrczioncKKtCnFYeqqrVv",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: concept-visualizer\n     3\tdescription: \"Generate inline visual metaphor illustrations for general concepts using the Visualizer (show_widget). Turns abstract ideas into concrete, memorable SVG scenes — stick figures interacting with everyday objects to embody how a concept works. Use this skill whenever a user asks to 'visualize a concept', 'draw me a diagram of how X works', 'illustrate this idea', 'show me visually', 'make a visual explanation', or any phrasing requesting a pictorial/diagrammatic explanation of an abstract concept. Also trigger when another skill (e.g., Feynman-Technique) needs a visual aid for a concept it is explaining. Works for any domain: physics, math, CS, biology, economics, philosophy, ML, engineering, or everyday ideas. Do NOT use for data charts, UI mockups, word comparisons (use vocabulary-visualization instead), or file-based deliverables.\"\n     4\t---\n     5\t\n     6\t# Phase 0 — EVOLVE\n     7\t\n     8\tRead the <Evolution Log> carefully. Apply any accumulated lessons as additional constraints.\n     9\t\n    10\t## Evolution Log\n    11\t\n    12\t## #2026-04-22\n    13\t- `show_widget` is the real Anthropic tool (launched 2026-03-12); `visualize:read_me` with `modules: [\"diagram\"]` must be called first. Fallback: JSX artifact via `present_files` when the tool isn't loaded this session.\n    14\t- Use light theme, not dark — Anthropic palette: bg #FAFAF8, card #FFFFFF, borders #E2DDD6, text #1A1717, secondary #6B6460. Deep/saturated accent colors for legibility (#92400E amber, #1E3A5F navy, #065F46 teal), never pastels.\n    15\t- Serif typography throughout (Iowan Old Style / Palatino / Georgia stack). Applies to SVG `<text>` too — set `font-family` on the `<svg>`.\n    16\t- Render all math with KaTeX (load `katex.min.{css,js}` from cdnjs dynamically). Use a `<Math>` wrapper in HTML; in SVG, use `<foreignObject>` + `<Math>`.\n    17\t\n    18\t# Concept Visualizer\n    19\t\n    20\tTurn abstract concepts into concrete, memorable visual metaphors rendered inline via the Visualizer.\n    21\t\n    22\t## Core principle\n    23\t\n    24\tEvery concept has a **mechanism** — something it *does*. The job is to find an everyday object or situation that does the same thing visibly, then draw that.\n    25\t\n    26\t## Workflow\n    27\t\n    28\t### 1. Extract the mechanism\n    29\t\n    30\tAsk: *what does this concept actually do?* Strip away domain jargon and find the verb.\n    31\t\n    32\t| Concept | Mechanism |\n    33\t|---|---|\n    34\t| Entropy | Things spread out / get disordered over time |\n    35\t| Gradient descent | Feel which way is downhill, step that way, repeat |\n    36\t| Nuclear fission | One split triggers more splits (chain reaction) |\n    37\t| Recursion | Do the same task on a smaller version of itself |\n    38\t| Natural selection | Variants compete; survivors pass traits forward |\n    39\t| Opportunity cost | Choosing one path locks out another |\n    40\t\n    41\tOne sentence. If you can't state the mechanism simply, break the concept into sub-concepts and visualize each.\n    42\t\n    43\t### 2. Find the metaphor object\n    44\t\n    45\tPick ONE concrete, universally familiar object or situation whose behavior mirrors the mechanism. The metaphor must be:\n    46\t\n    47\t- **Physical and visible** — something you can draw (not another abstraction)\n    48\t- **Universally known** — no culture/domain-specific objects\n    49\t- **Structurally honest** — the metaphor's behavior genuinely parallels the concept, not just superficially\n    50\t\n    51\tGood sources: water, balls, stairs, rooms, doors, ropes/knots, trees, paths/forks, dominoes, containers, springs, seesaws, conveyor belts, pulleys, mirrors, sandcastles, crowds of people.\n    52\t\n    53\t**Honesty check**: where does the metaphor break down? Note this internally — you'll flag it in the prose after the visual.\n    54\t\n    55\t### 3. Decompose into 2–5 panels\n    56\t\n    57\tBreak the concept into sequential stages or contrasting states. Each panel = one moment/aspect.\n    58\t\n    59\tPanel types:\n    60\t- **Sequential** (A → B → C): for processes, transformations, chains of cause-and-effect\n    61\t- **Contrast** (A vs B): for comparisons, with/without, before/after\n    62\t- **Zoom** (whole → part → detail): for hierarchical or nested concepts\n    63\t\n    64\tEach panel gets:\n    65\t- A **scene**: the metaphor object + a stick figure in a specific posture/action\n    66\t- A **label**: 2–5 words naming the stage (e.g., \"Energy spreads out\")\n    67\t- A **reveal caption**: 1–2 sentences mapping the scene back to the real concept (shown on click)\n    68\t\n    69\t### 4. Render via Visualizer\n    70\t\n    71\tCall `visualize:read_me` with module `[\"diagram\"]` before the first `show_widget` call.\n    72\t\n    73\t**SVG structure:**\n    74\t\n    75\t- Panels arranged **left-to-right** in a single SVG, separated by subtle vertical dividers\n    76\t- Consistent canvas: each panel is a square cell within a wide strip\n    77\t- The metaphor object is **visually identical** across panels — only the figure's relationship to it changes\n    78\t- Stick figures communicate through **posture and spatial relationship**, not detail\n    79\t- Distinct muted color per panel stage; light-theme palette (see Evolution Log)\n    80\t- Arrow or flow indicator between sequential panels\n    81\t- Click a panel → reveal caption fades in below the scene\n    82\t\n    83\t**Visual rules:**\n    84\t\n    85\t- Stick figures, not icons. Simple geometric shapes. No clip-art.\n    86\t- Maximum 5 panels — if the concept needs more, split into multiple visualizations\n    87\t- Labels sentence-case; captions in italic\n    88\t- No decorative elements that don't carry meaning\n    89\t- Consistent ground line across panels for visual continuity\n    90\t- Panel width: at least 140px each; total SVG viewBox width ≤ 800\n    91\t\n    92\t**Interactivity:**\n    93\t\n    94\t- Click/tap a panel to toggle its reveal caption\n    95\t- Subtle hover highlight on panels (opacity shift)\n    96\t- Active panel gets a gentle border highlight\n    97\t\n    98\t### 5. Prose after the visual\n    99\t\n   100\tDo NOT restate what the visual shows. Instead:\n   101\t\n   102\t- **Map it back**: one sentence explicitly connecting the metaphor to the real concept (\"The messy room is entropy — energy states spreading into less organized configurations.\")\n   103\t- **Flag the break**: where the metaphor stops working (\"Unlike a real room, entropy in physics is about *probability* of microstates, not just messiness.\")\n   104\t- **Extend an invitation**: a question or nudge to go deeper (\"Want to see why some processes *reverse* entropy? That's where it gets interesting.\")\n   105\t\n   106\t## Integration with other skills\n   107\t\n   108\tThis skill is designed to be called by other skills. When invoked from another skill's context:\n   109\t\n   110\t- Accept the concept and any analogy already established by the calling skill\n   111\t- If the calling skill (e.g., Feynman-Technique) has already chosen an analogy, **use that analogy** as the metaphor object — don't invent a competing one\n   112\t- If no analogy is provided, select one using step 2 above\n   113\t- Return the visual inline; the calling skill handles surrounding prose\n   114\t\n   115\t## Constraints\n   116\t\n   117\t- Metaphors must be structurally honest — don't force a visual that misrepresents the concept\n   118\t- All text in the SVG must be readable at default zoom (≥12px effective)\n   119\t- **Primary:** use `show_widget` (call `visualize:read_me` with `modules: [\"diagram\"]` first). `widget_code` is a raw HTML fragment — no `<!DOCTYPE>`, `<html>`, `<head>`, or `<body>` tags.\n   120\t- **Fallback** (if `show_widget` is not in the tool list): render as a `.jsx` file via `present_files`. Single file, `export default function App()`, light-theme palette.\n   121\t- One concept per visualization; compound concepts get multiple visuals\n   122\t",
      "uuid": "06a14d9f-0543-43f7-b721-2285f4dcb0b4"
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
  "start_timestamp": "2026-04-23T14:46:09.637317Z",
  "stop_timestamp": "2026-04-23T14:46:11.011261Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_017Ha22Qawx1Ady3QGxcfDfK",
  "name": "view",
  "input": {
    "description": "Check the vocabulary-visualization skill for font/style specs",
    "path": "/mnt/skills/user/vocabulary-visualization/SKILL.md"
  },
  "message": "Check the vocabulary-visualization skill for font/style specs",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Check the vocabulary-visualization skill for font/style specs"
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
  "tool_use_id": "toolu_017Ha22Qawx1Ady3QGxcfDfK",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: vocabulary-visualization\n     3\tdescription: \"Visualize the semantic differences between near-synonym English words using interactive diagrams, scatter plots, and concrete scenario comparisons. Use this skill whenever the user provides a set of 2+ English words or phrases that are near-synonyms and wants to understand how they differ — especially when the user says 'compare these words', 'what's the difference between X and Y', 'visualize the difference', lists multiple quoted words together, or asks for help distinguishing similar vocabulary. Also trigger when the user explicitly references this skill by name. Works for verbs, nouns, adjectives, adverbs, and phrasal verbs. Do NOT use for single-word definition lookups, translation tasks, grammar correction, or writing tasks.\"\n     4\t---\n     5\t\n     6\t# Phase 0 — EVOLVE\n     7\t\n     8\tRead the subsequent <Evolution Log> carefully. Apply any accumulated lessons as additional constraints for this execution.\n     9\t\n    10\t## Evolution Log\n    11\t\n    12\t## #2026-03-23\n    13\t- Positional map alone is incomplete — must also produce a metaphor illustration showing what each word feels like\n    14\t- Skill must mandate two visuals (positional map + metaphor illustration) to prevent scatter-plot-only output\n    15\t- A shared metaphor object (derived from etymology when possible) is the anchor for the illustration\n    16\t\n    17\t## #2026-04-22\n    18\t- Dark theme is hard to read — switch to light theme throughout\n    19\t- Light theme palette (Anthropic-style): background #FAFAF8, card surface #FFFFFF, borders #E2DDD6, primary text #1A1717, secondary text #6B6460\n    20\t- Word accent colors must be deep/saturated for contrast on light: e.g. deep amber #92400E, deep navy #1E3A5F — not pastels\n    21\t- Typography: Cormorant Garamond serif for display; monospace for labels/headers\n    22\t- Section headers: monospace, #A09890, letter-spacing .2em\n    23\t- Scatter plot field #F5F0EA, grid #E2DDD6, axes #C4B9B0\n    24\t- Metaphor cards: #FFFFFF bg, warm hover shadow rgba(26,23,23,.08), accent left-border when active\n    25\t- Prose traps: left-border only, no heavy background fill\n    26\t\n    27\t# Vocabulary visualization\n    28\t\n    29\tMake semantic differences between near-synonyms visible and felt. Two complementary visuals required: a positional map (where each word sits) and a metaphor illustration (what each word feels like).\n    30\t\n    31\t## Analysis workflow\n    32\t\n    33\t### 1. Identify distinguishing axes\n    34\t\n    35\tFind dimensions that create the most spread for this cluster.\n    36\t\n    37\tCandidates: depth/completeness, energy/agency, resolution, formality, emotional temperature, scope, certainty of outcome, duration. Use 1–3 axes — let the words dictate.\n    38\t\n    39\t### 2. Extract etymology\n    40\t\n    41\tRoot language + original meaning, compactly: \"L. solvere 'to loosen'\". Grounds why the word feels the way it does. Omit when uncertain. Well-established roots only (Latin, OE, OF, Greek).\n    42\t\n    43\t### 3. Compose concrete scenarios\n    44\t\n    45\tOne vivid scenario per word (2–4 sentences) where only that word is the natural choice. Must make the reader think \"yes, that's exactly when I'd say this.\"\n    46\t\n    47\t### 4. Assign a compact gist\n    48\t\n    49\t2–4 word gist per word: \"Endure, adapt\" or \"Fully eliminate.\"\n    50\t\n    51\t### 5. Find the shared metaphor\n    52\t\n    53\tIdentify one concrete object or situation that all the words can relate to differently. The metaphor should emerge from the cluster's semantics — ideally from an etymology (e.g., solvere = \"untie\" → a knot). Each word becomes a distinct posture/relationship to that object.\n    54\t\n    55\tTest: can you draw N figures each doing something visibly different with the same object? If yes, the metaphor works.\n    56\t\n    57\t### 6. Build both visuals\n    58\t\n    59\tAlways produce two `show_widget` calls with prose between them. Call `visualize:read_me` with `modules: [\"diagram\"]` before the first.\n    60\t\n    61\t**Visual 1 — Positional map.** Shows *where* each word sits on the semantic axes.\n    62\t\n    63\tFormat by word count and axis count:\n    64\t- 2–3 words, 1–2 axes → Side-by-side panels with gradient spectrum\n    65\t- 3–6 words, 2 axes → Interactive 2D scatter (clickable dots, click reveals scenario)\n    66\t- 3–6 words, 3 axes → Interactive 3D scatter via Three.js (fall back to 2D if 3rd axis adds negligible separation)\n    67\t- 6+ words → Grouped card layout by primary dimension\n    68\t\n    69\t**Visual 2 — Metaphor illustration.** Shows *what* each word feels like via the shared metaphor from step 5.\n    70\t\n    71\tDraw the same object N times (once per word). Each scene shows a stick figure (or equivalent agent) relating to the object differently — the posture embodies the word's meaning. Scenes are side-by-side in one SVG, separated by subtle dividers. Click a scene to reveal the etymological story.\n    72\t\n    73\tKey rules:\n    74\t- The metaphor object must be visually identical across scenes; only the figure's relationship to it changes.\n    75\t- Resolution axis runs left-to-right (least resolved → most resolved).\n    76\t- Stick figures, not icons. Simple shapes. The drawing communicates through posture and spatial relationship, not detail.\n    77\t\n    78\t### Design principles\n    79\t\n    80\t**Theme: Anthropic-style light mode — warm off-white, serif typography, deep accent colors.**\n    81\t\n    82\tColor palette (always use these exact values):\n    83\t- Page background: `#FAFAF8`\n    84\t- Card / SVG field: `#FFFFFF` (or `#F5F0EA` for scatter plot field)\n    85\t- Borders: `#E2DDD6`\n    86\t- Primary text: `#1A1717`\n    87\t- Secondary / label text: `#6B6460`\n    88\t- Section headers: monospace small-caps, `#A09890`, `letter-spacing: .2em`\n    89\t\n    90\tWord accent colors — must be deep/saturated for legibility on light backgrounds:\n    91\t- Use deep warm tones (e.g. `#92400E` deep amber, `#1E3A5F` deep navy, `#3B1F6A` deep violet, `#065F46` deep teal) — never pastel or washed-out\n    92\t\n    93\tTypography:\n    94\t- Display / word labels: `Cormorant Garamond` (serif, italic, weight 300–600) — import from Google Fonts\n    95\t- Axis labels, etymology tags, section numbers, gist lines: `Space Mono` or system monospace\n    96\t- Scenario text: serif italic, `#374151`\n    97\t\n    98\tScatter plot specifics:\n    99\t- SVG background fill: `#F5F0EA`; grid dashes: `#E2DDD6`; axis lines: `#C4B9B0`\n   100\t- Dot aura: light fill of accent color at 10–15% opacity\n   101\t- Hover: dot grows, etymology appears in accent color below the label\n   102\t\n   103\tMetaphor scene cards:\n   104\t- Background: `#FFFFFF`; border: `1px solid #E2DDD6`; border-radius: 12px\n   105\t- Hover: `box-shadow: 0 6px 24px rgba(26,23,23,.08)` — warm, not cold\n   106\t- Active state: accent-colored left border + `#FAFAF8` background\n   107\t- Scenario reveal: left-border stripe in accent color, no heavy background fill\n   108\t\n   109\tProse section:\n   110\t- Divider: `1px solid #E2DDD6`\n   111\t- Trap entries: left-border only, `#F5F0EA` subtle tint at most\n   112\t\n   113\tGeneral rules:\n   114\t- Etymology as small italic monospace beside each label.\n   115\t- Click to reveal scenario — don't dump all at once.\n   116\t- Visualizations must be self-contained: core distinction readable without prose.\n   117\t- Never use dark backgrounds, dark cards, or light-on-dark text in any component.\n   118\t\n   119\t### Prose after the visuals\n   120\t\n   121\tNot a restatement — add connections and traps:\n   122\t- 1–2 key relationships (\"You can address and fail to solve, but can't solve without addressing.\")\n   123\t- Common confusion pairs and why they trip people up.\n   124\t- Register restrictions (\"You wouldn't tackle a bereavement — wrong energy.\")\n   125\t\n   126\t## Constraints\n   127\t\n   128\t- Etymologies must be accurate.\n   129\t- Scenarios must feel natural to a native speaker.\n   130\t- **Primary:** use `show_widget` (call `visualize:read_me` with `modules: [\"diagram\"]` first). `widget_code` is a raw HTML fragment — no `<!DOCTYPE>`, `<html>`, `<head>`, or `<body>` tags. CDN libraries (cdnjs, jsdelivr) available.\n   131\t- **Fallback** (if `show_widget` is not in the tool list): render as a `.jsx` file via `present_files`. Single file, `export default function App()`, light-theme palette from Design principles above.",
      "uuid": "5e9d03c4-0a33-4ffc-9eeb-e5ba53955907"
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

 I'm checking whether the current visualizers actually reflect the serif font preference that was documented. Looking at the SKILL.md file, I can see there's an evolution log entry mentioning serif typography with Iowan Old Style, but I need to verify if that's actually implemented in the inline_visualization widget or if it's just been noted as a preference without being applied yet. I'm noticing there's actually an inconsistency worth flagging here — concept-visualizer uses system serif fonts (Iowan Old Style, Palatino, Georgia) while vocabulary-visualization imports Cormorant Garamond from Google Fonts, and the latter also applies more granular typography rules with Space Mono for labels and headers. The user might want to align these approaches across both skills.

</details>

Yes — both skills encode serif typography preferences, but with **different stacks**. Here's what each file actually says:

**`concept-visualizer/SKILL.md`** (Evolution Log entry #2026-04-22, line 15):
> "Serif typography throughout (Iowan Old Style / Palatino / Georgia stack). Applies to SVG `<text>` too — set `font-family` on the `<svg>`."

System-serif stack. Explicit SVG propagation rule.

**`vocabulary-visualization/SKILL.md`** (two places):
- Evolution Log #2026-04-22, line 23: *"Typography: Cormorant Garamond serif for display; monospace for labels/headers"*
- Design principles, lines 94–96:
  - Display/word labels: `Cormorant Garamond` (Google Fonts, italic, weight 300–600)
  - Axis labels, etymology tags, section numbers, gist lines: `Space Mono` or system monospace
  - Scenario text: serif italic, `#374151`
- Line 80: *"Theme: Anthropic-style light mode — warm off-white, serif typography, deep accent colors."*

Google-font serif (Cormorant Garamond) + explicit monospace role for labels.

---

**Observations (flagging for your decision, not asserting what you should do):**

1. **Inconsistency between the two skills.** concept-visualizer uses a system-serif stack (Iowan Old Style → Palatino → Georgia); vocabulary-visualization uses Cormorant Garamond from Google Fonts. Same "serif" intent, different execution — widgets from the two skills will not look like siblings.

2. **SVG-text enforcement is only in one.** concept-visualizer explicitly says to set `font-family` on the `<svg>` element (otherwise `<text>` inherits the UA default and silently reverts to sans-serif). vocabulary-visualization does not state this rule — if a rendered SVG ever looks sans-serif, that's the likely cause.

3. **Role separation only in one.** vocabulary-visualization distinguishes display serif vs. monospace (labels) vs. serif italic (scenarios). concept-visualizer says "serif throughout" without role breakdown.

If you want them unified, the cleanest move is picking one stack (Cormorant Garamond is more distinctive; the system stack is more reliable offline) and porting the SVG `font-family` rule into vocabulary-visualization. Want me to draft the edit?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019dbacd-e503-7c6f-81a8-b568bf9ee825",
  "updated_at": "2026-04-23T14:46:44.223518Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019dbacd-e503-712a-a09b-61c5add40b8f"
}
```

</details>
