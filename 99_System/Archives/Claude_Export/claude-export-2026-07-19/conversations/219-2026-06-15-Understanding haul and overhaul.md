# Understanding haul and overhaul

## Export metadata (verbatim)

```json
{
  "uuid": "f3a0e901-2964-4c78-a3e9-7cfe87c0a544",
  "name": "Understanding haul and overhaul",
  "summary": "**Conversation Overview**\n\nThe person asked Claude to explain the meanings of \"haul\" and \"overhaul,\" seeking conceptual clarity on both words. Claude provided a detailed vocabulary lesson covering etymology, semantic distinctions, practical usage patterns, and common confusion points between the two terms.\n\nClaude explained that \"haul\" derives from Middle English *halen* / Old French *haler* (\"to pull\") and refers to moving something heavy across a distance, with a noun form meaning the reward gained from effort (e.g., \"a good haul\"). \"Overhaul\" shares the same root but adds the prefix *over-*, originating from a 17th-century nautical practice of pulling ropes over one another to slacken rigging for inspection — giving the word its meaning of thorough examination followed by comprehensive repair or improvement. Claude also noted a rare British English usage of \"overhaul\" meaning to overtake.\n\nThe core distinction emphasized was directional: *haul* concerns movement across distance, while *overhaul* concerns depth of inspection and transformation. Claude produced two interactive HTML visualizations — a positional scatter map plotting the words along axes of scope and depth, and a metaphor illustration using a ship context with animated SVG scenes — and saved them as a downloadable file. A comparison table and prose notes on common traps (e.g., \"long haul\" vs. \"long overhaul\") were also provided.",
  "created_at": "2026-06-15T06:43:00.260449Z",
  "updated_at": "2026-06-15T06:46:22.791316Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-06-15T06:43:00.793928Z

How to comprehend the meaning of "haul" and "overhual"?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019eca04-e97a-7d38-bae6-6c18f732277f",
  "updated_at": "2026-06-15T06:43:00.793928Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-06-15T06:43:01.742057Z

_No text content in this message._

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019eca04-e97a-7fd5-9442-76e910026c2b",
  "updated_at": "2026-06-15T06:43:01.742057Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019eca04-e97a-7d38-bae6-6c18f732277f"
}
```

</details>

### 3. human — 2026-06-15T06:43:08.715445Z

How to comprehend the meaning of "haul" and "overhaull"?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019eca05-09b9-74ff-be83-8291383444ad",
  "updated_at": "2026-06-15T06:43:08.715445Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 4. assistant — 2026-06-15T06:46:22.791316Z

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-06-15T06:43:15.555361Z",
  "stop_timestamp": "2026-06-15T06:43:16.005390Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01QhqL1QkiT75iMAVnVY4SZm",
  "name": "view",
  "input": {
    "description": "Reading vocabulary-visualization skill",
    "path": "/mnt/skills/user/vocabulary-visualization/SKILL.md"
  },
  "message": "Reading vocabulary-visualization skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Reading vocabulary-visualization skill"
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
  "tool_use_id": "toolu_01QhqL1QkiT75iMAVnVY4SZm",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: vocabulary-visualization\n     3\tdescription: \"Visualize the semantic differences between near-synonym English words using interactive diagrams, scatter plots, and concrete scenario comparisons. Use this skill whenever the user provides a set of 2+ English words or phrases that are near-synonyms and wants to understand how they differ — especially when the user says 'compare these words', 'what's the difference between X and Y', 'visualize the difference', lists multiple quoted words together, or asks for help distinguishing similar vocabulary. Also trigger when the user explicitly references this skill by name. Works for verbs, nouns, adjectives, adverbs, and phrasal verbs. Do NOT use for single-word definition lookups, translation tasks, grammar correction, or writing tasks.\"\n     4\t---\n     5\t\n     6\t# Phase 0 — EVOLVE\n     7\t\n     8\tRead the subsequent <Evolution Log> carefully. Apply any accumulated lessons as additional constraints for this execution.\n     9\t\n    10\t## Evolution Log\n    11\t\n    12\t## #2026-03-23\n    13\t- Positional map alone is incomplete — must also produce a metaphor illustration showing what each word feels like\n    14\t- Skill must mandate two visuals (positional map + metaphor illustration) to prevent scatter-plot-only output\n    15\t- A shared metaphor object (derived from etymology when possible) is the anchor for the illustration\n    16\t\n    17\t## #2026-04-22\n    18\t- Dark theme is hard to read — switch to light theme throughout\n    19\t- Light theme palette (Anthropic-style): background #FAFAF8, card surface #FFFFFF, borders #E2DDD6, primary text #1A1717, secondary text #6B6460\n    20\t- Word accent colors must be deep/saturated for contrast on light: e.g. deep amber #92400E, deep navy #1E3A5F — not pastels\n    21\t- Typography: Cormorant Garamond serif for display; monospace for labels/headers\n    22\t- Section headers: monospace, #A09890, letter-spacing .2em\n    23\t- Scatter plot field #F5F0EA, grid #E2DDD6, axes #C4B9B0\n    24\t- Metaphor cards: #FFFFFF bg, warm hover shadow rgba(26,23,23,.08), accent left-border when active\n    25\t- Prose traps: left-border only, no heavy background fill\n    26\t\n    27\t# Vocabulary visualization\n    28\t\n    29\tMake semantic differences between near-synonyms visible and felt. Two complementary visuals required: a positional map (where each word sits) and a metaphor illustration (what each word feels like).\n    30\t\n    31\t## Analysis workflow\n    32\t\n    33\t### 1. Identify distinguishing axes\n    34\t\n    35\tFind dimensions that create the most spread for this cluster.\n    36\t\n    37\tCandidates: depth/completeness, energy/agency, resolution, formality, emotional temperature, scope, certainty of outcome, duration. Use 1–3 axes — let the words dictate.\n    38\t\n    39\t### 2. Extract etymology\n    40\t\n    41\tRoot language + original meaning, compactly: \"L. solvere 'to loosen'\". Grounds why the word feels the way it does. Omit when uncertain. Well-established roots only (Latin, OE, OF, Greek).\n    42\t\n    43\t### 3. Compose concrete scenarios\n    44\t\n    45\tOne vivid scenario per word (2–4 sentences) where only that word is the natural choice. Must make the reader think \"yes, that's exactly when I'd say this.\"\n    46\t\n    47\t### 4. Assign a compact gist\n    48\t\n    49\t2–4 word gist per word: \"Endure, adapt\" or \"Fully eliminate.\"\n    50\t\n    51\t### 5. Find the shared metaphor\n    52\t\n    53\tIdentify one concrete object or situation that all the words can relate to differently. The metaphor should emerge from the cluster's semantics — ideally from an etymology (e.g., solvere = \"untie\" → a knot). Each word becomes a distinct posture/relationship to that object.\n    54\t\n    55\tTest: can you draw N figures each doing something visibly different with the same object? If yes, the metaphor works.\n    56\t\n    57\t### 6. Build both visuals\n    58\t\n    59\tAlways produce two `show_widget` calls with prose between them. Call `visualize:read_me` with `modules: [\"diagram\"]` before the first.\n    60\t\n    61\t**Visual 1 — Positional map.** Shows *where* each word sits on the semantic axes.\n    62\t\n    63\tFormat by word count and axis count:\n    64\t- 2–3 words, 1–2 axes → Side-by-side panels with gradient spectrum\n    65\t- 3–6 words, 2 axes → Interactive 2D scatter (clickable dots, click reveals scenario)\n    66\t- 3–6 words, 3 axes → Interactive 3D scatter via Three.js (fall back to 2D if 3rd axis adds negligible separation)\n    67\t- 6+ words → Grouped card layout by primary dimension\n    68\t\n    69\t**Visual 2 — Metaphor illustration.** Shows *what* each word feels like via the shared metaphor from step 5.\n    70\t\n    71\tDraw the same object N times (once per word). Each scene shows a stick figure (or equivalent agent) relating to the object differently — the posture embodies the word's meaning. Scenes are side-by-side in one SVG, separated by subtle dividers. Click a scene to reveal the etymological story.\n    72\t\n    73\tKey rules:\n    74\t- The metaphor object must be visually identical across scenes; only the figure's relationship to it changes.\n    75\t- Resolution axis runs left-to-right (least resolved → most resolved).\n    76\t- Stick figures, not icons. Simple shapes. The drawing communicates through posture and spatial relationship, not detail.\n    77\t\n    78\t### Design principles\n    79\t\n    80\t**Theme: Anthropic-style light mode — warm off-white, serif typography, deep accent colors.**\n    81\t\n    82\tColor palette (always use these exact values):\n    83\t- Page background: `#FAFAF8`\n    84\t- Card / SVG field: `#FFFFFF` (or `#F5F0EA` for scatter plot field)\n    85\t- Borders: `#E2DDD6`\n    86\t- Primary text: `#1A1717`\n    87\t- Secondary / label text: `#6B6460`\n    88\t- Section headers: monospace small-caps, `#A09890`, `letter-spacing: .2em`\n    89\t\n    90\tWord accent colors — must be deep/saturated for legibility on light backgrounds:\n    91\t- Use deep warm tones (e.g. `#92400E` deep amber, `#1E3A5F` deep navy, `#3B1F6A` deep violet, `#065F46` deep teal) — never pastel or washed-out\n    92\t\n    93\tTypography:\n    94\t- Display / word labels: `Cormorant Garamond` (serif, italic, weight 300–600) — import from Google Fonts\n    95\t- Axis labels, etymology tags, section numbers, gist lines: `Space Mono` or system monospace\n    96\t- Scenario text: serif italic, `#374151`\n    97\t\n    98\tScatter plot specifics:\n    99\t- SVG background fill: `#F5F0EA`; grid dashes: `#E2DDD6`; axis lines: `#C4B9B0`\n   100\t- Dot aura: light fill of accent color at 10–15% opacity\n   101\t- Hover: dot grows, etymology appears in accent color below the label\n   102\t\n   103\tMetaphor scene cards:\n   104\t- Background: `#FFFFFF`; border: `1px solid #E2DDD6`; border-radius: 12px\n   105\t- Hover: `box-shadow: 0 6px 24px rgba(26,23,23,.08)` — warm, not cold\n   106\t- Active state: accent-colored left border + `#FAFAF8` background\n   107\t- Scenario reveal: left-border stripe in accent color, no heavy background fill\n   108\t\n   109\tProse section:\n   110\t- Divider: `1px solid #E2DDD6`\n   111\t- Trap entries: left-border only, `#F5F0EA` subtle tint at most\n   112\t\n   113\tGeneral rules:\n   114\t- Etymology as small italic monospace beside each label.\n   115\t- Click to reveal scenario — don't dump all at once.\n   116\t- Visualizations must be self-contained: core distinction readable without prose.\n   117\t- Never use dark backgrounds, dark cards, or light-on-dark text in any component.\n   118\t\n   119\t### Prose after the visuals\n   120\t\n   121\tNot a restatement — add connections and traps:\n   122\t- 1–2 key relationships (\"You can address and fail to solve, but can't solve without addressing.\")\n   123\t- Common confusion pairs and why they trip people up.\n   124\t- Register restrictions (\"You wouldn't tackle a bereavement — wrong energy.\")\n   125\t\n   126\t## Constraints\n   127\t\n   128\t- Etymologies must be accurate.\n   129\t- Scenarios must feel natural to a native speaker.\n   130\t- **Primary:** use `show_widget` (call `visualize:read_me` with `modules: [\"diagram\"]` first). `widget_code` is a raw HTML fragment — no `<!DOCTYPE>`, `<html>`, `<head>`, or `<body>` tags. CDN libraries (cdnjs, jsdelivr) available.\n   131\t- **Fallback** (if `show_widget` is not in the tool list): render as a `.jsx` file via `present_files`. Single file, `export default function App()`, light-theme palette from Design principles above.",
      "uuid": "5f5fd6fd-bbbc-4e9f-a102-4830e8163517"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": {
    "output_format_category": "md"
  },
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
  "start_timestamp": "2026-06-15T06:43:26.143102Z",
  "stop_timestamp": "2026-06-15T06:43:26.143102Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_012n99fCm4NkRNEo9sbLxPAs",
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
  "tool_use_id": "toolu_012n99fCm4NkRNEo9sbLxPAs",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "Tool call failed: 400 ",
      "uuid": "55f1421a-5250-46f6-b492-54fa66cfa928"
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
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-06-15T06:43:32.689004Z",
  "stop_timestamp": "2026-06-15T06:43:33.334634Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01QNao8CtT7zibmJwT576bZn",
  "name": "view",
  "input": {
    "description": "Check available skills for frontend design",
    "path": "/mnt/skills/public/frontend-design/SKILL.md"
  },
  "message": "Check available skills for frontend design",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Check available skills for frontend design"
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
  "tool_use_id": "toolu_01QNao8CtT7zibmJwT576bZn",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: frontend-design\n     3\tdescription: Guidance for distinctive, intentional visual design when building new UI or reshaping an existing one. Helps with aesthetic direction, typography, and making choices that don't read as templated defaults.\n     4\tlicense: Complete terms in LICENSE.txt\n     5\t---\n     6\t\n     7\t# Frontend Design\n     8\t\n     9\tApproach this as the design lead at a small studio known for giving every client a visual identity that could not be mistaken for anyone else's. This client has already rejected proposals that felt templated, and is paying for a distinctive point of view: make deliberate, opinionated choices about palette, typography, and layout that are specific to this brief, and take one real aesthetic risk you can justify.\n    10\t\n    11\t## Ground it in the subject\n    12\t\n    13\tIf the brief does not pin down what the product or subject is, pin it yourself before designing: name one concrete subject, its audience, and the page's single job, and state your choice. If there's any information in your memory about the human's preferences, context about what they're building, or designs you've made before – use that as a hint. The subject's own world, its materials, instruments, artifacts, and vernacular, is where distinctive choices come from. Build with the brief's real content and subject matter throughout.\n    14\t\n    15\t## Design principles\n    16\t\n    17\tFor web designs, the hero is a thesis. Open with the most characteristic thing in the subject's world, in whatever form makes sense for it: a headline, an image, an animation, a live demo, an interactive moment. Be deliberate with your choice: a big number with a small label, supporting stats, and a gradient accent is the template answer, only use if that's truly the best option.\n    18\t\n    19\tTypography carries the personality of the page. Pair the display and body faces deliberately, not the same families you would reach for on any other project, and set a clear type scale with intentional weights, widths, and spacing. Make the type treatment itself a memorable part of the design, not a neutral delivery vehicle for the content.\n    20\t\n    21\tStructure is information. Structural devices, numbering, eyebrows, dividers, labels, should encode something true about the content, not decorate it. Many generic designs use numbered markers (01 / 02 / 03), but that's only appropriate if the content actually is a sequence - like a real process or a typed timeline where order carries information the reader needs. Question if choices like numbered markers actually make sense before incorporating them.\n    22\t\n    23\tLeverage motion deliberately. Think about where and if animation can serve the subject: a page-load sequence, a scroll-triggered reveal, hover micro-interactions, ambient atmosphere. An orchestrated moment usually lands harder than scattered effects; choose what the direction calls for. However, sometimes less is more, and extra animation contributes to the feeling that the design is AI-generated.\n    24\t\n    25\tMatch complexity to the vision. Maximalist directions need elaborate execution; minimal directions need precision in spacing, type, and detail. Elegance is executing the chosen vision well.\n    26\t\n    27\tConsider written content carefully. Often a design brief may not contain real content, and it's up to you to come up with copy. Copy can make a design feel as templated as the design itself. See the below section on writing for more guidance.\n    28\t\n    29\t## Process: brainstorm, explore, plan, critique, build, critique again\n    30\t\n    31\tFor calibration: AI-generated design right now clusters around three looks: (1) a warm cream background (near #F4F1EA) with a high-contrast serif display and a terracotta accent; (2) a near-black background with a single bright acid-green or vermilion accent; (3) a broadsheet-style layout with hairline rules, zero border-radius, and dense newspaper-like columns. All three are legitimate for some briefs, but they are defaults rather than choices, and they appear regardless of subject. Where the brief pins down a visual direction, follow it exactly — the brief's own words always win, including when it asks for one of these looks. Where it leaves an axis free, don't spend that freedom on one of these defaults. Just like a human designer who's hired, there's often a careful balance between doing what you're good at and taking each project as a chance to experiment and learn.\n    32\t\n    33\tWork in two passes. First, brainstorm a short design plan based on the human's design brief: create a compact token system with color, type, layout, and signature. Color: describe the palette as 4–6 named hex values. Type: the typefaces for 2+ roles (a characterful display face that's used with restraint, a complementary body face, and a utility face for captions or data if needed). Layout: a layout concept, using one-sentence prose descriptions and ASCII wireframes to ideate and compare. Signature: the single unique element this page will be remembered by that embodies the brief in an appropriate way.\n    34\t\n    35\tThen review that plan against the brief before building: if any part of it reads like the generic default you would produce for any similar page (work through a similar prompt to see if you arrive somewhere similar) rather than a choice made for this specific brief — revise that part, say what you changed and why. Only after you've confirmed the relative uniqueness of your design plan should you start to write the code, following the revised plan exactly and deriving every color and type decision from it.\n    36\t\n    37\tWhen writing the code, be careful of structuring your CSS selector specificities. It's easy to generate CSS classes that cancel each other out (especially with a type-based selector like .section and a element-based selector like .cta). This can happen often with paddings/margins between sections.\n    38\t\n    39\tTry to do a lot of this planning and iteration in your thinking, and only show ideas to the user when you have higher confidence it'll delight them.\n    40\t\n    41\t## Restraint and self-critique\n    42\t\n    43\tSpend your boldness in one place. Let the signature element be the one memorable thing, keep everything around it quiet and disciplined, and cut any decoration that does not serve the brief. Not taking a risk can be a risk itself! Build to a quality floor without announcing it: responsive down to mobile, visible keyboard focus, reduced motion respected. Critique your own work as you build, taking screenshots if your environment supports it – a picture is worth 1000 tokens. Consider Chanel's advice: before leaving the house, take a look in the mirror and remove one accessory. Human creators have memory and always try to do something new, so if you have a space to quickly jot down notes about what you've tried, it can help you in future passes.\n    44\t\n    45\t## More on writing in design\n    46\t\n    47\tWords appear in a design for one reason: to make it easier to understand, and therefore easier to use. They are design material, not decoration. Bring the same intentionality to copy that you would bring to spacing and color. Before writing anything, ask what the design needs to say, and how it can best be said to help the person navigate the experience.\n    48\t\n    49\tWrite from the end user's side of the screen. Name things by what people control and recognize, never by how the system is built. A person manages notifications, not webhook config. Describe what something does in plain terms rather than selling it. Being specific is always better than being clever.\n    50\t\n    51\tUse active voice as default. A control should say exactly what happens when it's used: \"Save changes,\" not \"Submit.\" An action keeps the same name through the whole flow, so the button that says \"Publish\" produces a toast that says \"Published.\" The vocabulary of an interface is the signposting for someone navigating the product. Cohesion and consistency are how people learn their way around.\n    52\t\n    53\tTreat failure and emptiness as moments for direction, not mood. Explain what went wrong and how to fix it, in the interface's voice rather than a person's. Errors don't apologize, and they are never vague about what happened. An empty screen is an invitation to act.\n    54\t\n    55\tKeep the register conversational and tuned: plain verbs, sentence case, no filler, with tone matched to the brand and the audience. Let each element do exactly one job. A label labels, an example demonstrates, and nothing quietly does double duty.\n    56\t",
      "uuid": "0ea377ef-1578-4300-94f9-c0e23e1cfc9c"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": {
    "output_format_category": "md"
  },
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

Now I have a clear picture of both words and the skill guidelines. Let me build the two required visuals.

**Quick semantic breakdown before we dive in:**

- **haul** — to pull or drag something heavy over a distance; also a noun meaning the amount obtained (a "big haul")
- **overhaul** — to examine something thoroughly and repair/improve it completely; or to overtake something

The shared metaphor: a **ship** (both words trace their roots to maritime contexts — pulling ropes, refitting vessels).

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-06-15T06:43:44.434624Z",
  "stop_timestamp": "2026-06-15T06:44:24.192230Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01PaiRgiAaeqjxTPdhejK5G7",
  "name": "visualize:show_widget",
  "input": {
    "title": "haul_vs_overhaul_positional_map",
    "loading_messages": [
      "Plotting the semantic seas...",
      "Anchoring word positions..."
    ],
    "widget_code": "\n<!DOCTYPE html>\n<html>\n<head>\n<link href=\"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,300;1,500&family=Space+Mono:wght@400;700&display=swap\" rel=\"stylesheet\">\n<style>\n  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\n  body {\n    background: #FAFAF8;\n    font-family: 'Cormorant Garamond', Georgia, serif;\n    color: #1A1717;\n    padding: 28px 20px 40px;\n    min-height: 100vh;\n  }\n  .section-label {\n    font-family: 'Space Mono', monospace;\n    font-size: 10px;\n    color: #A09890;\n    letter-spacing: .2em;\n    text-transform: uppercase;\n    margin-bottom: 6px;\n  }\n  h1 {\n    font-family: 'Cormorant Garamond', serif;\n    font-weight: 600;\n    font-size: 26px;\n    color: #1A1717;\n    margin-bottom: 4px;\n  }\n  .subtitle {\n    font-family: 'Space Mono', monospace;\n    font-size: 11px;\n    color: #6B6460;\n    margin-bottom: 24px;\n  }\n  .map-container {\n    background: #F5F0EA;\n    border: 1px solid #E2DDD6;\n    border-radius: 14px;\n    padding: 28px 24px 20px;\n    position: relative;\n    margin-bottom: 24px;\n  }\n  .axes-title {\n    font-family: 'Space Mono', monospace;\n    font-size: 9px;\n    color: #A09890;\n    letter-spacing: .15em;\n    margin-bottom: 18px;\n    text-transform: uppercase;\n  }\n  svg.scatter {\n    width: 100%;\n    height: 320px;\n    display: block;\n  }\n  .legend {\n    display: flex;\n    gap: 24px;\n    margin-top: 14px;\n    flex-wrap: wrap;\n  }\n  .legend-item {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    cursor: pointer;\n    padding: 6px 12px;\n    border-radius: 8px;\n    border: 1px solid transparent;\n    transition: all .2s;\n  }\n  .legend-item:hover { background: #fff; border-color: #E2DDD6; }\n  .legend-dot {\n    width: 14px; height: 14px; border-radius: 50%;\n    flex-shrink: 0;\n  }\n  .legend-word {\n    font-family: 'Cormorant Garamond', serif;\n    font-style: italic;\n    font-size: 17px;\n    font-weight: 600;\n  }\n  .legend-gist {\n    font-family: 'Space Mono', monospace;\n    font-size: 9px;\n    color: #6B6460;\n    display: block;\n    margin-top: 1px;\n  }\n  /* Scenario panel */\n  .scenario-panel {\n    background: #FFFFFF;\n    border: 1px solid #E2DDD6;\n    border-radius: 10px;\n    padding: 16px 18px;\n    margin-top: 12px;\n    display: none;\n    border-left: 4px solid #999;\n    transition: all .25s;\n  }\n  .scenario-panel.active { display: block; }\n  .scenario-word {\n    font-family: 'Cormorant Garamond', serif;\n    font-style: italic;\n    font-size: 20px;\n    font-weight: 600;\n    margin-bottom: 4px;\n  }\n  .scenario-etym {\n    font-family: 'Space Mono', monospace;\n    font-size: 10px;\n    color: #6B6460;\n    margin-bottom: 10px;\n  }\n  .scenario-text {\n    font-style: italic;\n    color: #374151;\n    font-size: 15px;\n    line-height: 1.65;\n    border-left: 3px solid #E2DDD6;\n    padding-left: 12px;\n  }\n  .click-hint {\n    font-family: 'Space Mono', monospace;\n    font-size: 9px;\n    color: #A09890;\n    text-align: center;\n    margin-top: 14px;\n    letter-spacing: .1em;\n  }\n  /* Axis labels */\n  .axis-low, .axis-high {\n    font-family: 'Space Mono', monospace;\n    font-size: 9px;\n    color: #A09890;\n    letter-spacing: .1em;\n  }\n</style>\n</head>\n<body>\n\n<div class=\"section-label\">Visual 1 — Positional Map</div>\n<h1>haul vs. overhaul</h1>\n<div class=\"subtitle\">click any word to reveal its scenario</div>\n\n<div class=\"map-container\">\n  <div class=\"axes-title\">X: Scope of effort &nbsp;·&nbsp; Y: Depth / completeness</div>\n  <svg class=\"scatter\" viewBox=\"0 0 520 300\" xmlns=\"http://www.w3.org/2000/svg\" id=\"scatterSvg\">\n    <defs>\n      <radialGradient id=\"auraAmber\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n        <stop offset=\"0%\" stop-color=\"#92400E\" stop-opacity=\".14\"/>\n        <stop offset=\"100%\" stop-color=\"#92400E\" stop-opacity=\"0\"/>\n      </radialGradient>\n      <radialGradient id=\"auraNavy\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n        <stop offset=\"0%\" stop-color=\"#1E3A5F\" stop-opacity=\".14\"/>\n        <stop offset=\"100%\" stop-color=\"#1E3A5F\" stop-opacity=\"0\"/>\n      </radialGradient>\n    </defs>\n    <!-- Grid -->\n    <line x1=\"60\" y1=\"20\" x2=\"60\" y2=\"260\" stroke=\"#C4B9B0\" stroke-width=\"1.5\"/>\n    <line x1=\"60\" y1=\"260\" x2=\"500\" y2=\"260\" stroke=\"#C4B9B0\" stroke-width=\"1.5\"/>\n    <!-- Grid dashes -->\n    <line x1=\"60\" y1=\"140\" x2=\"500\" y2=\"140\" stroke=\"#E2DDD6\" stroke-width=\"1\" stroke-dasharray=\"4 5\"/>\n    <line x1=\"280\" y1=\"20\" x2=\"280\" y2=\"260\" stroke=\"#E2DDD6\" stroke-width=\"1\" stroke-dasharray=\"4 5\"/>\n    <!-- Axis labels -->\n    <text x=\"60\" y=\"276\" font-family=\"Space Mono,monospace\" font-size=\"9\" fill=\"#A09890\" letter-spacing=\"1\">NARROW</text>\n    <text x=\"430\" y=\"276\" font-family=\"Space Mono,monospace\" font-size=\"9\" fill=\"#A09890\" letter-spacing=\"1\">BROAD</text>\n    <text x=\"12\" y=\"265\" font-family=\"Space Mono,monospace\" font-size=\"9\" fill=\"#A09890\" letter-spacing=\"1\" transform=\"rotate(-90, 12, 265)\">SURFACE</text>\n    <text x=\"12\" y=\"80\" font-family=\"Space Mono,monospace\" font-size=\"9\" fill=\"#A09890\" letter-spacing=\"1\" transform=\"rotate(-90, 12, 80)\">DEEP</text>\n\n    <!-- HAUL: narrow scope, surface depth → left, low -->\n    <circle cx=\"155\" cy=\"210\" r=\"46\" fill=\"url(#auraAmber)\"/>\n    <circle class=\"word-dot\" id=\"dot-haul\" cx=\"155\" cy=\"210\" r=\"14\"\n      fill=\"#92400E\" fill-opacity=\".15\" stroke=\"#92400E\" stroke-width=\"2.5\"\n      style=\"cursor:pointer; transition: r .2s;\"/>\n    <text x=\"155\" y=\"205\" text-anchor=\"middle\"\n      font-family=\"Cormorant Garamond,serif\" font-style=\"italic\" font-size=\"20\" font-weight=\"600\"\n      fill=\"#92400E\" style=\"cursor:pointer;\" id=\"label-haul\">haul</text>\n    <text x=\"155\" y=\"224\" text-anchor=\"middle\"\n      font-family=\"Space Mono,monospace\" font-size=\"8.5\" fill=\"#92400E\" opacity=\".7\">move · carry</text>\n\n    <!-- OVERHAUL: broad scope, deep completeness → right, top -->\n    <circle cx=\"390\" cy=\"65\" r=\"52\" fill=\"url(#auraNavy)\"/>\n    <circle class=\"word-dot\" id=\"dot-overhaul\" cx=\"390\" cy=\"65\" r=\"14\"\n      fill=\"#1E3A5F\" fill-opacity=\".15\" stroke=\"#1E3A5F\" stroke-width=\"2.5\"\n      style=\"cursor:pointer; transition: r .2s;\"/>\n    <text x=\"390\" y=\"60\" text-anchor=\"middle\"\n      font-family=\"Cormorant Garamond,serif\" font-style=\"italic\" font-size=\"20\" font-weight=\"600\"\n      fill=\"#1E3A5F\" style=\"cursor:pointer;\" id=\"label-overhaul\">overhaul</text>\n    <text x=\"390\" y=\"79\" text-anchor=\"middle\"\n      font-family=\"Space Mono,monospace\" font-size=\"8.5\" fill=\"#1E3A5F\" opacity=\".7\">rebuild · transform</text>\n\n    <!-- Arrow showing relationship -->\n    <defs>\n      <marker id=\"arrowhead\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\">\n        <polygon points=\"0 0, 8 3, 0 6\" fill=\"#C4B9B0\"/>\n      </marker>\n    </defs>\n    <line x1=\"183\" y1=\"195\" x2=\"352\" y2=\"93\" stroke=\"#C4B9B0\" stroke-width=\"1.5\"\n      stroke-dasharray=\"6 4\" marker-end=\"url(#arrowhead)\"/>\n    <text x=\"275\" y=\"152\" text-anchor=\"middle\"\n      font-family=\"Space Mono,monospace\" font-size=\"8\" fill=\"#A09890\"\n      transform=\"rotate(-27,275,152)\">add scope + depth</text>\n  </svg>\n  <p class=\"click-hint\">▸ click a word dot or name below to reveal its scenario</p>\n</div>\n\n<div class=\"legend\" id=\"legend\">\n  <div class=\"legend-item\" data-word=\"haul\" style=\"cursor:pointer\">\n    <div class=\"legend-dot\" style=\"background:#92400E\"></div>\n    <div>\n      <span class=\"legend-word\" style=\"color:#92400E\">haul</span>\n      <span class=\"legend-gist\">drag · transport · yield</span>\n    </div>\n  </div>\n  <div class=\"legend-item\" data-word=\"overhaul\" style=\"cursor:pointer\">\n    <div class=\"legend-dot\" style=\"background:#1E3A5F\"></div>\n    <div>\n      <span class=\"legend-word\" style=\"color:#1E3A5F\">overhaul</span>\n      <span class=\"legend-gist\">inspect · rebuild · overtake</span>\n    </div>\n  </div>\n</div>\n\n<!-- Scenario panels -->\n<div class=\"scenario-panel\" id=\"panel-haul\" style=\"border-left-color:#92400E;\">\n  <div class=\"scenario-word\" style=\"color:#92400E\">haul</div>\n  <div class=\"scenario-etym\">ME. halen \"to pull\" · OF. haler · Germanic root *halan</div>\n  <div class=\"scenario-text\">\n    The fishing boat returned before dawn, its nets bursting. \"Good haul tonight,\" the captain said, winching the catch aboard — every rope groaning as the crew hauled in the lines. The word is the effort of moving weight across distance: physical, directional, effortful.\n  </div>\n</div>\n<div class=\"scenario-panel\" id=\"panel-overhaul\" style=\"border-left-color:#1E3A5F;\">\n  <div class=\"scenario-word\" style=\"color:#1E3A5F\">overhaul</div>\n  <div class=\"scenario-etym\">over + haul · nautical: \"to pull ropes over one another to slacken\" → examine every part</div>\n  <div class=\"scenario-text\">\n    The engine had been sputtering for months. They took it apart completely — checked every valve, replaced the worn bearings, recalibrated the timing. A full overhaul. The car emerged transformed. The word carries total inspection followed by comprehensive repair or improvement.\n  </div>\n</div>\n\n<script>\n  const words = ['haul', 'overhaul'];\n  let active = null;\n\n  function toggle(word) {\n    if (active === word) {\n      document.getElementById('panel-' + word).classList.remove('active');\n      document.getElementById('dot-' + word).setAttribute('r', '14');\n      active = null;\n    } else {\n      words.forEach(w => {\n        document.getElementById('panel-' + w).classList.remove('active');\n        document.getElementById('dot-' + w).setAttribute('r', '14');\n      });\n      document.getElementById('panel-' + word).classList.add('active');\n      document.getElementById('dot-' + word).setAttribute('r', '18');\n      active = word;\n    }\n  }\n\n  words.forEach(w => {\n    document.getElementById('dot-' + w).addEventListener('click', () => toggle(w));\n    document.getElementById('label-' + w).addEventListener('click', () => toggle(w));\n    document.querySelector('[data-word=\"' + w + '\"]').addEventListener('click', () => toggle(w));\n  });\n</script>\n</body>\n</html>\n"
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
  "tool_use_id": "toolu_01PaiRgiAaeqjxTPdhejK5G7",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Tool call failed: 400 ",
      "uuid": "eeed8c9f-c343-41be-ae43-43eacd7d297a"
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
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-06-15T06:44:31.195355Z",
  "stop_timestamp": "2026-06-15T06:46:00.739355Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01WNPmnV2MMiSTk1VPbdWLFJ",
  "name": "create_file",
  "input": {
    "description": "Haul vs Overhaul vocabulary visualization - positional map + metaphor illustration",
    "path": "/mnt/user-data/outputs/haul_vs_overhaul.html",
    "file_text": "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n<meta charset=\"UTF-8\">\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n<title>haul vs. overhaul</title>\n<link href=\"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,300;1,500;1,600&family=Space+Mono:wght@400;700&display=swap\" rel=\"stylesheet\">\n<style>\n  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\n  body {\n    background: #FAFAF8;\n    font-family: 'Cormorant Garamond', Georgia, serif;\n    color: #1A1717;\n    padding: 36px 28px 60px;\n    max-width: 820px;\n    margin: 0 auto;\n  }\n  .section-label {\n    font-family: 'Space Mono', monospace;\n    font-size: 10px;\n    color: #A09890;\n    letter-spacing: .22em;\n    text-transform: uppercase;\n    margin-bottom: 6px;\n  }\n  h1 {\n    font-family: 'Cormorant Garamond', serif;\n    font-weight: 600;\n    font-size: 32px;\n    color: #1A1717;\n    margin-bottom: 4px;\n  }\n  .subtitle {\n    font-family: 'Space Mono', monospace;\n    font-size: 11px;\n    color: #6B6460;\n    margin-bottom: 32px;\n  }\n  /* ─── Scatter ───────────────────────────────────────────── */\n  .map-container {\n    background: #F5F0EA;\n    border: 1px solid #E2DDD6;\n    border-radius: 14px;\n    padding: 28px 24px 18px;\n    margin-bottom: 16px;\n  }\n  .axes-title {\n    font-family: 'Space Mono', monospace;\n    font-size: 9px;\n    color: #A09890;\n    letter-spacing: .15em;\n    margin-bottom: 16px;\n    text-transform: uppercase;\n  }\n  svg.scatter { width: 100%; height: 300px; display: block; }\n  .click-hint {\n    font-family: 'Space Mono', monospace;\n    font-size: 9px;\n    color: #A09890;\n    text-align: center;\n    margin-top: 12px;\n    letter-spacing: .1em;\n  }\n  /* ─── Legend ─────────────────────────────────────────────── */\n  .legend {\n    display: flex;\n    gap: 20px;\n    margin-bottom: 14px;\n    flex-wrap: wrap;\n  }\n  .legend-item {\n    display: flex;\n    align-items: center;\n    gap: 9px;\n    cursor: pointer;\n    padding: 7px 14px;\n    border-radius: 8px;\n    border: 1px solid transparent;\n    transition: all .2s;\n    user-select: none;\n  }\n  .legend-item:hover { background: #fff; border-color: #E2DDD6; }\n  .legend-dot { width: 13px; height: 13px; border-radius: 50%; flex-shrink: 0; }\n  .legend-word { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 19px; font-weight: 600; }\n  .legend-gist { font-family: 'Space Mono', monospace; font-size: 9px; color: #6B6460; display: block; margin-top: 1px; }\n  /* ─── Scenario panel ─────────────────────────────────────── */\n  .scenario-panel {\n    background: #FFFFFF;\n    border: 1px solid #E2DDD6;\n    border-radius: 10px;\n    padding: 18px 20px;\n    margin-bottom: 12px;\n    display: none;\n    border-left: 4px solid #ccc;\n    animation: fadeIn .25s ease;\n  }\n  @keyframes fadeIn { from { opacity:0; transform: translateY(6px);} to { opacity:1; transform: none;} }\n  .scenario-panel.active { display: block; }\n  .scenario-word { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 22px; font-weight: 600; margin-bottom: 4px; }\n  .scenario-etym { font-family: 'Space Mono', monospace; font-size: 10px; color: #6B6460; margin-bottom: 12px; }\n  .scenario-text { font-style: italic; color: #374151; font-size: 15.5px; line-height: 1.7; border-left: 3px solid #E2DDD6; padding-left: 13px; }\n  /* ─── Divider ─────────────────────────────────────────────── */\n  .divider { border: none; border-top: 1px solid #E2DDD6; margin: 36px 0 28px; }\n  /* ─── Metaphor section ───────────────────────────────────── */\n  .meta-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: 18px;\n    margin-top: 18px;\n  }\n  .meta-card {\n    background: #FFFFFF;\n    border: 1px solid #E2DDD6;\n    border-radius: 12px;\n    padding: 18px;\n    cursor: pointer;\n    transition: box-shadow .2s, border-left .2s;\n    border-left: 4px solid #E2DDD6;\n    position: relative;\n    overflow: hidden;\n  }\n  .meta-card:hover { box-shadow: 0 6px 24px rgba(26,23,23,.08); }\n  .meta-card.active-card-haul { border-left-color: #92400E; background: #FDFCFB; }\n  .meta-card.active-card-overhaul { border-left-color: #1E3A5F; background: #F9FAFB; }\n  .meta-card-word { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 20px; font-weight: 600; margin-bottom: 6px; }\n  .meta-card-etym { font-family: 'Space Mono', monospace; font-size: 9px; color: #6B6460; margin-bottom: 10px; }\n  .meta-card-desc {\n    font-style: italic;\n    color: #374151;\n    font-size: 14px;\n    line-height: 1.65;\n    display: none;\n    border-left: 2px solid #E2DDD6;\n    padding-left: 10px;\n    margin-top: 10px;\n    animation: fadeIn .2s ease;\n  }\n  .meta-card.active-card-haul .meta-card-desc,\n  .meta-card.active-card-overhaul .meta-card-desc { display: block; }\n  svg.ship-scene { width: 100%; height: 200px; display: block; }\n  /* ─── Prose ──────────────────────────────────────────────── */\n  .prose-section { margin-top: 30px; }\n  .prose-section h2 { font-family: 'Space Mono', monospace; font-size: 10px; color: #A09890; letter-spacing: .2em; text-transform: uppercase; margin-bottom: 14px; }\n  .trap-entry {\n    border-left: 3px solid #E2DDD6;\n    padding: 10px 14px;\n    margin-bottom: 12px;\n    background: #F5F0EA;\n    border-radius: 0 6px 6px 0;\n  }\n  .trap-entry p { font-size: 15.5px; line-height: 1.7; color: #374151; font-style: italic; }\n  .trap-entry strong { font-style: normal; font-weight: 600; color: #1A1717; }\n</style>\n</head>\n<body>\n\n<div class=\"section-label\">Vocabulary Map — Visual 1 of 2</div>\n<h1>haul &nbsp;vs.&nbsp; overhaul</h1>\n<div class=\"subtitle\">click any dot or word to reveal its scenario</div>\n\n<div class=\"map-container\">\n  <div class=\"axes-title\">X: Scope of effort &nbsp;·&nbsp; Y: Depth / completeness</div>\n  <svg class=\"scatter\" viewBox=\"0 0 540 290\" xmlns=\"http://www.w3.org/2000/svg\">\n    <defs>\n      <radialGradient id=\"auraAmber\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n        <stop offset=\"0%\" stop-color=\"#92400E\" stop-opacity=\".16\"/>\n        <stop offset=\"100%\" stop-color=\"#92400E\" stop-opacity=\"0\"/>\n      </radialGradient>\n      <radialGradient id=\"auraNavy\" cx=\"50%\" cy=\"50%\" r=\"50%\">\n        <stop offset=\"0%\" stop-color=\"#1E3A5F\" stop-opacity=\".16\"/>\n        <stop offset=\"100%\" stop-color=\"#1E3A5F\" stop-opacity=\"0\"/>\n      </radialGradient>\n      <marker id=\"arr\" markerWidth=\"8\" markerHeight=\"6\" refX=\"8\" refY=\"3\" orient=\"auto\">\n        <polygon points=\"0 0, 8 3, 0 6\" fill=\"#C4B9B0\"/>\n      </marker>\n    </defs>\n    <!-- Axes -->\n    <line x1=\"64\" y1=\"20\" x2=\"64\" y2=\"250\" stroke=\"#C4B9B0\" stroke-width=\"1.5\"/>\n    <line x1=\"64\" y1=\"250\" x2=\"515\" y2=\"250\" stroke=\"#C4B9B0\" stroke-width=\"1.5\"/>\n    <!-- Grid -->\n    <line x1=\"64\" y1=\"135\" x2=\"515\" y2=\"135\" stroke=\"#E2DDD6\" stroke-width=\"1\" stroke-dasharray=\"5 5\"/>\n    <line x1=\"290\" y1=\"20\" x2=\"290\" y2=\"250\" stroke=\"#E2DDD6\" stroke-width=\"1\" stroke-dasharray=\"5 5\"/>\n    <!-- Axis text -->\n    <text x=\"64\" y=\"268\" font-family=\"Space Mono,monospace\" font-size=\"9\" fill=\"#A09890\">NARROW</text>\n    <text x=\"442\" y=\"268\" font-family=\"Space Mono,monospace\" font-size=\"9\" fill=\"#A09890\">BROAD</text>\n    <text x=\"16\" y=\"256\" font-family=\"Space Mono,monospace\" font-size=\"9\" fill=\"#A09890\" transform=\"rotate(-90,16,256)\">SURFACE</text>\n    <text x=\"16\" y=\"80\" font-family=\"Space Mono,monospace\" font-size=\"9\" fill=\"#A09890\" transform=\"rotate(-90,16,80)\">DEEP</text>\n\n    <!-- HAUL: left + low (narrow scope, surface depth) -->\n    <circle cx=\"148\" cy=\"208\" r=\"50\" fill=\"url(#auraAmber)\"/>\n    <circle id=\"dot-haul\" cx=\"148\" cy=\"208\" r=\"15\"\n      fill=\"#92400E\" fill-opacity=\".15\" stroke=\"#92400E\" stroke-width=\"2.5\"\n      style=\"cursor:pointer;transition:r .18s;\"/>\n    <text id=\"label-haul\" x=\"148\" y=\"202\" text-anchor=\"middle\"\n      font-family=\"Cormorant Garamond,serif\" font-style=\"italic\" font-size=\"22\" font-weight=\"600\"\n      fill=\"#92400E\" style=\"cursor:pointer;\">haul</text>\n    <text x=\"148\" y=\"222\" text-anchor=\"middle\"\n      font-family=\"Space Mono,monospace\" font-size=\"8\" fill=\"#92400E\" opacity=\".75\">drag · carry · yield</text>\n\n    <!-- OVERHAUL: right + high (broad scope, deep depth) -->\n    <circle cx=\"405\" cy=\"58\" r=\"56\" fill=\"url(#auraNavy)\"/>\n    <circle id=\"dot-overhaul\" cx=\"405\" cy=\"58\" r=\"15\"\n      fill=\"#1E3A5F\" fill-opacity=\".15\" stroke=\"#1E3A5F\" stroke-width=\"2.5\"\n      style=\"cursor:pointer;transition:r .18s;\"/>\n    <text id=\"label-overhaul\" x=\"405\" y=\"52\" text-anchor=\"middle\"\n      font-family=\"Cormorant Garamond,serif\" font-style=\"italic\" font-size=\"22\" font-weight=\"600\"\n      fill=\"#1E3A5F\" style=\"cursor:pointer;\">overhaul</text>\n    <text x=\"405\" y=\"72\" text-anchor=\"middle\"\n      font-family=\"Space Mono,monospace\" font-size=\"8\" fill=\"#1E3A5F\" opacity=\".75\">inspect · rebuild · transform</text>\n\n    <!-- Arrow -->\n    <line x1=\"178\" y1=\"192\" x2=\"368\" y2=\"82\" stroke=\"#C4B9B0\" stroke-width=\"1.5\"\n      stroke-dasharray=\"6 4\" marker-end=\"url(#arr)\"/>\n    <text x=\"273\" y=\"142\" text-anchor=\"middle\"\n      font-family=\"Space Mono,monospace\" font-size=\"8\" fill=\"#A09890\"\n      transform=\"rotate(-25,273,142)\">broader + deeper</text>\n  </svg>\n  <p class=\"click-hint\">▸ click a word to reveal its scenario</p>\n</div>\n\n<!-- Legend + scenarios -->\n<div class=\"legend\" id=\"legend\">\n  <div class=\"legend-item\" data-word=\"haul\" style=\"cursor:pointer\">\n    <div class=\"legend-dot\" style=\"background:#92400E\"></div>\n    <div>\n      <span class=\"legend-word\" style=\"color:#92400E\">haul</span>\n      <span class=\"legend-gist\">drag · transport · yield</span>\n    </div>\n  </div>\n  <div class=\"legend-item\" data-word=\"overhaul\" style=\"cursor:pointer\">\n    <div class=\"legend-dot\" style=\"background:#1E3A5F\"></div>\n    <div>\n      <span class=\"legend-word\" style=\"color:#1E3A5F\">overhaul</span>\n      <span class=\"legend-gist\">inspect · rebuild · overtake</span>\n    </div>\n  </div>\n</div>\n\n<div class=\"scenario-panel\" id=\"panel-haul\" style=\"border-left-color:#92400E;\">\n  <div class=\"scenario-word\" style=\"color:#92400E\">haul</div>\n  <div class=\"scenario-etym\">ME. halen \"to pull\" · OF. haler · Old Norse hala · Proto-Gmc. *halōną</div>\n  <div class=\"scenario-text\">\n    The fishing boat returned before dawn, nets bursting with silver mackerel.\n    \"Good haul tonight,\" the captain muttered, winching the load aboard —\n    every rope groaning as the crew hauled in the lines hand over hand.\n    The word is the effort of moving weight across distance: physical, directional, relentless.\n    As a noun (\"a good haul\"), it names the reward reaped from that effort.\n  </div>\n</div>\n<div class=\"scenario-panel\" id=\"panel-overhaul\" style=\"border-left-color:#1E3A5F;\">\n  <div class=\"scenario-word\" style=\"color:#1E3A5F\">overhaul</div>\n  <div class=\"scenario-etym\">over + haul · 17th-c. nautical: \"to pull ropes over one another to slacken tackle\" → examine every component</div>\n  <div class=\"scenario-text\">\n    The engine had been sputtering for months. The mechanic took it completely apart —\n    checked every valve, replaced the worn bearings, recalibrated the timing.\n    Three days later it ran smoother than new. That's an overhaul:\n    total disassembly, thorough inspection, and comprehensive repair or improvement.\n    Nothing is left unexamined; the system emerges transformed.\n  </div>\n</div>\n\n<hr class=\"divider\">\n\n<!-- ─── Visual 2: Metaphor ─────────────────────────────────── -->\n<div class=\"section-label\">Visual 2 — Metaphor Illustration</div>\n<h1 style=\"font-size:24px; margin-bottom:4px;\">The same ship, two relationships</h1>\n<p style=\"font-family:'Space Mono',monospace;font-size:11px;color:#6B6460;margin-bottom:18px;\">click each card to reveal the etymological story</p>\n\n<div class=\"meta-grid\" id=\"metaGrid\">\n\n  <!-- HAUL card -->\n  <div class=\"meta-card\" id=\"card-haul\">\n    <div class=\"meta-card-word\" style=\"color:#92400E\">haul</div>\n    <div class=\"meta-card-etym\">halen → \"to pull\"</div>\n    <!-- SVG Scene: figure pulling rope across water -->\n    <svg class=\"ship-scene\" viewBox=\"0 0 260 190\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Water -->\n      <rect x=\"0\" y=\"140\" width=\"260\" height=\"50\" fill=\"#DBEAFE\" rx=\"4\"/>\n      <path d=\"M0,148 Q40,142 80,148 Q120,154 160,148 Q200,142 260,148\" stroke=\"#93C5FD\" stroke-width=\"1.5\" fill=\"none\"/>\n      <!-- Ship hull -->\n      <path d=\"M80,130 L180,130 L192,145 L68,145 Z\" fill=\"#B45309\" stroke=\"#92400E\" stroke-width=\"1.5\"/>\n      <rect x=\"100\" y=\"110\" width=\"60\" height=\"22\" fill=\"#D97706\" rx=\"2\"/>\n      <!-- Mast -->\n      <line x1=\"130\" y1=\"50\" x2=\"130\" y2=\"112\" stroke=\"#78350F\" stroke-width=\"3\"/>\n      <!-- Rope + cargo box being hauled -->\n      <rect x=\"20\" y=\"100\" width=\"30\" height=\"25\" fill=\"#E2DDD6\" stroke=\"#6B6460\" stroke-width=\"1.5\" rx=\"2\"/>\n      <text x=\"35\" y=\"116\" text-anchor=\"middle\" font-family=\"Space Mono,monospace\" font-size=\"8\" fill=\"#6B6460\">cargo</text>\n      <!-- Rope line -->\n      <line x1=\"50\" y1=\"112\" x2=\"100\" y2=\"112\" stroke=\"#92400E\" stroke-width=\"2.5\" stroke-dasharray=\"4 3\">\n        <animate attributeName=\"stroke-dashoffset\" from=\"0\" to=\"-14\" dur=\"0.8s\" repeatCount=\"indefinite\"/>\n      </line>\n      <!-- Stick figure pulling rope (arms back, leaning) -->\n      <!-- body -->\n      <circle cx=\"68\" cy=\"88\" r=\"7\" fill=\"none\" stroke=\"#92400E\" stroke-width=\"2\"/>\n      <line x1=\"68\" y1=\"95\" x2=\"68\" y2=\"118\" stroke=\"#92400E\" stroke-width=\"2\"/>\n      <!-- legs braced -->\n      <line x1=\"68\" y1=\"118\" x2=\"60\" y2=\"132\" stroke=\"#92400E\" stroke-width=\"2\"/>\n      <line x1=\"68\" y1=\"118\" x2=\"76\" y2=\"132\" stroke=\"#92400E\" stroke-width=\"2\"/>\n      <!-- arms pulling rope -->\n      <line x1=\"68\" y1=\"100\" x2=\"56\" y2=\"110\" stroke=\"#92400E\" stroke-width=\"2\"/>\n      <line x1=\"56\" y1=\"110\" x2=\"50\" y2=\"112\" stroke=\"#92400E\" stroke-width=\"2\"/>\n      <!-- Motion arrows on cargo -->\n      <path d=\"M56,112 L62,112\" stroke=\"#92400E\" stroke-width=\"1.5\" marker-end=\"url(#arr2)\"/>\n      <defs>\n        <marker id=\"arr2\" markerWidth=\"5\" markerHeight=\"4\" refX=\"5\" refY=\"2\" orient=\"auto\">\n          <polygon points=\"0 0,5 2,0 4\" fill=\"#92400E\"/>\n        </marker>\n      </defs>\n      <text x=\"130\" y=\"170\" text-anchor=\"middle\" font-family=\"Cormorant Garamond,serif\" font-style=\"italic\" font-size=\"13\" fill=\"#92400E\">pull · move · transport</text>\n    </svg>\n    <div class=\"meta-card-desc\" style=\"border-left-color:#92400E;\">\n      Sailors hauled ropes — brute, directional effort to move something heavy from A to B.\n      The word never implies understanding what you're moving, only that you move it.\n      Hence: \"haul cargo,\" \"a long haul,\" \"a good haul\" (what you pulled in).\n    </div>\n  </div>\n\n  <!-- OVERHAUL card -->\n  <div class=\"meta-card\" id=\"card-overhaul\">\n    <div class=\"meta-card-word\" style=\"color:#1E3A5F\">overhaul</div>\n    <div class=\"meta-card-etym\">over + haul → \"pull ropes over each other to slacken\"</div>\n    <!-- SVG Scene: figure examining / dismantling ship engine -->\n    <svg class=\"ship-scene\" viewBox=\"0 0 260 190\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Dock / ground -->\n      <rect x=\"0\" y=\"148\" width=\"260\" height=\"42\" fill=\"#F5F0EA\"/>\n      <line x1=\"0\" y1=\"148\" x2=\"260\" y2=\"148\" stroke=\"#C4B9B0\" stroke-width=\"1.5\"/>\n      <!-- Ship hull on dry dock -->\n      <path d=\"M40,110 L220,110 L230,140 L30,140 Z\" fill=\"#B45309\" stroke=\"#92400E\" stroke-width=\"1.5\"/>\n      <rect x=\"70\" y=\"88\" width=\"120\" height=\"24\" fill=\"#D97706\" rx=\"2\"/>\n      <!-- Engine block being examined (parts scattered) -->\n      <rect x=\"44\" y=\"155\" width=\"18\" height=\"14\" fill=\"#E2DDD6\" stroke=\"#6B6460\" stroke-width=\"1\" rx=\"1\"/>\n      <rect x=\"68\" y=\"158\" width=\"14\" height=\"11\" fill=\"#E2DDD6\" stroke=\"#6B6460\" stroke-width=\"1\" rx=\"1\"/>\n      <rect x=\"88\" y=\"153\" width=\"20\" height=\"16\" fill=\"#E2DDD6\" stroke=\"#6B6460\" stroke-width=\"1\" rx=\"1\"/>\n      <!-- wrench symbol -->\n      <rect x=\"114\" y=\"157\" width=\"22\" height=\"8\" fill=\"#C4B9B0\" rx=\"3\"/>\n      <circle cx=\"114\" cy=\"161\" r=\"4\" fill=\"none\" stroke=\"#C4B9B0\" stroke-width=\"2\"/>\n      <!-- Stick figure with magnifying glass / clipboard -->\n      <circle cx=\"178\" cy=\"78\" r=\"7\" fill=\"none\" stroke=\"#1E3A5F\" stroke-width=\"2\"/>\n      <line x1=\"178\" y1=\"85\" x2=\"178\" y2=\"110\" stroke=\"#1E3A5F\" stroke-width=\"2\"/>\n      <line x1=\"178\" y1=\"110\" x2=\"168\" y2=\"126\" stroke=\"#1E3A5F\" stroke-width=\"2\"/>\n      <line x1=\"178\" y1=\"110\" x2=\"188\" y2=\"126\" stroke=\"#1E3A5F\" stroke-width=\"2\"/>\n      <!-- arm holding clipboard -->\n      <line x1=\"178\" y1=\"92\" x2=\"196\" y2=\"98\" stroke=\"#1E3A5F\" stroke-width=\"2\"/>\n      <!-- clipboard -->\n      <rect x=\"196\" y=\"94\" width=\"16\" height=\"20\" fill=\"white\" stroke=\"#1E3A5F\" stroke-width=\"1.5\" rx=\"1\"/>\n      <line x1=\"199\" y1=\"100\" x2=\"209\" y2=\"100\" stroke=\"#1E3A5F\" stroke-width=\"1\"/>\n      <line x1=\"199\" y1=\"104\" x2=\"209\" y2=\"104\" stroke=\"#1E3A5F\" stroke-width=\"1\"/>\n      <line x1=\"199\" y1=\"108\" x2=\"205\" y2=\"108\" stroke=\"#1E3A5F\" stroke-width=\"1\"/>\n      <!-- Inspection arrows radiating outward -->\n      <line x1=\"50\" y1=\"115\" x2=\"42\" y2=\"150\" stroke=\"#1E3A5F\" stroke-width=\"1\" stroke-dasharray=\"3 3\" opacity=\".5\">\n        <animate attributeName=\"opacity\" values=\".3;.8;.3\" dur=\"1.4s\" repeatCount=\"indefinite\"/>\n      </line>\n      <line x1=\"130\" y1=\"110\" x2=\"130\" y2=\"150\" stroke=\"#1E3A5F\" stroke-width=\"1\" stroke-dasharray=\"3 3\" opacity=\".5\">\n        <animate attributeName=\"opacity\" values=\".3;.8;.3\" dur=\"1.4s\" begin=\"0.3s\" repeatCount=\"indefinite\"/>\n      </line>\n      <line x1=\"200\" y1=\"115\" x2=\"210\" y2=\"150\" stroke=\"#1E3A5F\" stroke-width=\"1\" stroke-dasharray=\"3 3\" opacity=\".5\">\n        <animate attributeName=\"opacity\" values=\".3;.8;.3\" dur=\"1.4s\" begin=\"0.6s\" repeatCount=\"indefinite\"/>\n      </line>\n      <text x=\"130\" y=\"178\" text-anchor=\"middle\" font-family=\"Cormorant Garamond,serif\" font-style=\"italic\" font-size=\"13\" fill=\"#1E3A5F\">inspect · dismantle · rebuild</text>\n    </svg>\n    <div class=\"meta-card-desc\" style=\"border-left-color:#1E3A5F;\">\n      Originally nautical: sailors pulled (\"hauled\") ropes over each other to slacken rigging —\n      an \"over-haul\" — so every line could be inspected and repaired.\n      By extension: to examine a complete system and fix or improve every faulty part.\n      Hence: \"overhaul the engine,\" \"overhaul the tax code,\" \"the committee needs an overhaul.\"\n    </div>\n  </div>\n\n</div>\n\n<!-- ─── Prose ───────────────────────────────────────────────── -->\n<div class=\"prose-section\">\n  <hr class=\"divider\">\n  <h2>Key distinctions &amp; traps</h2>\n\n  <div class=\"trap-entry\">\n    <p><strong>haul</strong> is about movement; <strong>overhaul</strong> is about examination + repair.\n    You can haul something broken without caring what's wrong with it.\n    An overhaul, by contrast, demands understanding every component.</p>\n  </div>\n\n  <div class=\"trap-entry\">\n    <p><strong>\"A long haul\"</strong> means a long journey or sustained effort — time and distance.\n    It never implies improvement. <strong>\"A long overhaul\"</strong> means a thorough repair took a long time.\n    The confusion point: both involve sustained effort, but in completely different directions.</p>\n  </div>\n\n  <div class=\"trap-entry\">\n    <p><strong>haul</strong> as a noun names the reward: <em>\"a big haul\"</em> (drugs seized, fish caught, loot taken).\n    <strong>overhaul</strong> has no common noun form in this sense — you wouldn't say \"a big overhaul\"\n    to mean something you obtained. It remains a process word.</p>\n  </div>\n\n  <div class=\"trap-entry\">\n    <p><strong>Register note:</strong> <em>overhaul</em> can mean \"to overtake\" in British English\n    (one ship overhauling another at sea — moving over and past it).\n    This usage is rare in modern American English but explains the nautical origin of the metaphor.</p>\n  </div>\n</div>\n\n<script>\n  const words = ['haul', 'overhaul'];\n  let activeScatter = null;\n  let activeMeta = null;\n\n  // Scatter dots\n  words.forEach(w => {\n    ['dot-', 'label-'].forEach(prefix => {\n      const el = document.getElementById(prefix + w);\n      if (el) el.addEventListener('click', () => toggleScatter(w));\n    });\n    const li = document.querySelector('[data-word=\"' + w + '\"]');\n    if (li) li.addEventListener('click', () => toggleScatter(w));\n  });\n\n  function toggleScatter(word) {\n    if (activeScatter === word) {\n      document.getElementById('panel-' + word).classList.remove('active');\n      document.getElementById('dot-' + word).setAttribute('r', '15');\n      activeScatter = null;\n    } else {\n      words.forEach(w => {\n        document.getElementById('panel-' + w).classList.remove('active');\n        document.getElementById('dot-' + w).setAttribute('r', '15');\n      });\n      document.getElementById('panel-' + word).classList.add('active');\n      document.getElementById('dot-' + word).setAttribute('r', '20');\n      activeScatter = word;\n    }\n  }\n\n  // Metaphor cards\n  ['haul', 'overhaul'].forEach(w => {\n    document.getElementById('card-' + w).addEventListener('click', () => toggleMeta(w));\n  });\n\n  function toggleMeta(word) {\n    const card = document.getElementById('card-' + word);\n    const cls = 'active-card-' + word;\n    if (card.classList.contains(cls)) {\n      card.classList.remove(cls);\n      activeMeta = null;\n    } else {\n      ['haul', 'overhaul'].forEach(w => {\n        document.getElementById('card-' + w).classList.remove('active-card-' + w);\n      });\n      card.classList.add(cls);\n      activeMeta = word;\n    }\n  }\n</script>\n</body>\n</html>\n"
  },
  "message": "Haul vs Overhaul vocabulary visualization - positional map + metaphor illustration",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"html\", \"code\": \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n<head>\\n<meta charset=\\\"UTF-8\\\">\\n<meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n<title>haul vs. overhaul</title>\\n<link href=\\\"https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,300;1,500;1,600&family=Space+Mono:wght@400;700&display=swap\\\" rel=\\\"stylesheet\\\">\\n<style>\\n  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }\\n  body {\\n    background: #FAFAF8;\\n    font-family: 'Cormorant Garamond', Georgia, serif;\\n    color: #1A1717;\\n    padding: 36px 28px 60px;\\n    max-width: 820px;\\n    margin: 0 auto;\\n  }\\n  .section-label {\\n    font-family: 'Space Mono', monospace;\\n    font-size: 10px;\\n    color: #A09890;\\n    letter-spacing: .22em;\\n    text-transform: uppercase;\\n    margin-bottom: 6px;\\n  }\\n  h1 {\\n    font-family: 'Cormorant Garamond', serif;\\n    font-weight: 600;\\n    font-size: 32px;\\n    color: #1A1717;\\n    margin-bottom: 4px;\\n  }\\n  .subtitle {\\n    font-family: 'Space Mono', monospace;\\n    font-size: 11px;\\n    color: #6B6460;\\n    margin-bottom: 32px;\\n  }\\n  /* \\u2500\\u2500\\u2500 Scatter \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500 */\\n  .map-container {\\n    background: #F5F0EA;\\n    border: 1px solid #E2DDD6;\\n    border-radius: 14px;\\n    padding: 28px 24px 18px;\\n    margin-bottom: 16px;\\n  }\\n  .axes-title {\\n    font-family: 'Space Mono', monospace;\\n    font-size: 9px;\\n    color: #A09890;\\n    letter-spacing: .15em;\\n    margin-bottom: 16px;\\n    text-transform: uppercase;\\n  }\\n  svg.scatter { width: 100%; height: 300px; display: block; }\\n  .click-hint {\\n    font-family: 'Space Mono', monospace;\\n    font-size: 9px;\\n    color: #A09890;\\n    text-align: center;\\n    margin-top: 12px;\\n    letter-spacing: .1em;\\n  }\\n  /* \\u2500\\u2500\\u2500 Legend \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500 */\\n  .legend {\\n    display: flex;\\n    gap: 20px;\\n    margin-bottom: 14px;\\n    flex-wrap: wrap;\\n  }\\n  .legend-item {\\n    display: flex;\\n    align-items: center;\\n    gap: 9px;\\n    cursor: pointer;\\n    padding: 7px 14px;\\n    border-radius: 8px;\\n    border: 1px solid transparent;\\n    transition: all .2s;\\n    user-select: none;\\n  }\\n  .legend-item:hover { background: #fff; border-color: #E2DDD6; }\\n  .legend-dot { width: 13px; height: 13px; border-radius: 50%; flex-shrink: 0; }\\n  .legend-word { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 19px; font-weight: 600; }\\n  .legend-gist { font-family: 'Space Mono', monospace; font-size: 9px; color: #6B6460; display: block; margin-top: 1px; }\\n  /* \\u2500\\u2500\\u2500 Scenario panel \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500 */\\n  .scenario-panel {\\n    background: #FFFFFF;\\n    border: 1px solid #E2DDD6;\\n    border-radius: 10px;\\n    padding: 18px 20px;\\n    margin-bottom: 12px;\\n    display: none;\\n    border-left: 4px solid #ccc;\\n    animation: fadeIn .25s ease;\\n  }\\n  @keyframes fadeIn { from { opacity:0; transform: translateY(6px);} to { opacity:1; transform: none;} }\\n  .scenario-panel.active { display: block; }\\n  .scenario-word { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 22px; font-weight: 600; margin-bottom: 4px; }\\n  .scenario-etym { font-family: 'Space Mono', monospace; font-size: 10px; color: #6B6460; margin-bottom: 12px; }\\n  .scenario-text { font-style: italic; color: #374151; font-size: 15.5px; line-height: 1.7; border-left: 3px solid #E2DDD6; padding-left: 13px; }\\n  /* \\u2500\\u2500\\u2500 Divider \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500 */\\n  .divider { border: none; border-top: 1px solid #E2DDD6; margin: 36px 0 28px; }\\n  /* \\u2500\\u2500\\u2500 Metaphor section \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500 */\\n  .meta-grid {\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    gap: 18px;\\n    margin-top: 18px;\\n  }\\n  .meta-card {\\n    background: #FFFFFF;\\n    border: 1px solid #E2DDD6;\\n    border-radius: 12px;\\n    padding: 18px;\\n    cursor: pointer;\\n    transition: box-shadow .2s, border-left .2s;\\n    border-left: 4px solid #E2DDD6;\\n    position: relative;\\n    overflow: hidden;\\n  }\\n  .meta-card:hover { box-shadow: 0 6px 24px rgba(26,23,23,.08); }\\n  .meta-card.active-card-haul { border-left-color: #92400E; background: #FDFCFB; }\\n  .meta-card.active-card-overhaul { border-left-color: #1E3A5F; background: #F9FAFB; }\\n  .meta-card-word { font-family: 'Cormorant Garamond', serif; font-style: italic; font-size: 20px; font-weight: 600; margin-bottom: 6px; }\\n  .meta-card-etym { font-family: 'Space Mono', monospace; font-size: 9px; color: #6B6460; margin-bottom: 10px; }\\n  .meta-card-desc {\\n    font-style: italic;\\n    color: #374151;\\n    font-size: 14px;\\n    line-height: 1.65;\\n    display: none;\\n    border-left: 2px solid #E2DDD6;\\n    padding-left: 10px;\\n    margin-top: 10px;\\n    animation: fadeIn .2s ease;\\n  }\\n  .meta-card.active-card-haul .meta-card-desc,\\n  .meta-card.active-card-overhaul .meta-card-desc { display: block; }\\n  svg.ship-scene { width: 100%; height: 200px; display: block; }\\n  /* \\u2500\\u2500\\u2500 Prose \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500 */\\n  .prose-section { margin-top: 30px; }\\n  .prose-section h2 { font-family: 'Space Mono', monospace; font-size: 10px; color: #A09890; letter-spacing: .2em; text-transform: uppercase; margin-bottom: 14px; }\\n  .trap-entry {\\n    border-left: 3px solid #E2DDD6;\\n    padding: 10px 14px;\\n    margin-bottom: 12px;\\n    background: #F5F0EA;\\n    border-radius: 0 6px 6px 0;\\n  }\\n  .trap-entry p { font-size: 15.5px; line-height: 1.7; color: #374151; font-style: italic; }\\n  .trap-entry strong { font-style: normal; font-weight: 600; color: #1A1717; }\\n</style>\\n</head>\\n<body>\\n\\n<div class=\\\"section-label\\\">Vocabulary Map \\u2014 Visual 1 of 2</div>\\n<h1>haul &nbsp;vs.&nbsp; overhaul</h1>\\n<div class=\\\"subtitle\\\">click any dot or word to reveal its scenario</div>\\n\\n<div class=\\\"map-container\\\">\\n  <div class=\\\"axes-title\\\">X: Scope of effort &nbsp;\\u00b7&nbsp; Y: Depth / completeness</div>\\n  <svg class=\\\"scatter\\\" viewBox=\\\"0 0 540 290\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n    <defs>\\n      <radialGradient id=\\\"auraAmber\\\" cx=\\\"50%\\\" cy=\\\"50%\\\" r=\\\"50%\\\">\\n        <stop offset=\\\"0%\\\" stop-color=\\\"#92400E\\\" stop-opacity=\\\".16\\\"/>\\n        <stop offset=\\\"100%\\\" stop-color=\\\"#92400E\\\" stop-opacity=\\\"0\\\"/>\\n      </radialGradient>\\n      <radialGradient id=\\\"auraNavy\\\" cx=\\\"50%\\\" cy=\\\"50%\\\" r=\\\"50%\\\">\\n        <stop offset=\\\"0%\\\" stop-color=\\\"#1E3A5F\\\" stop-opacity=\\\".16\\\"/>\\n        <stop offset=\\\"100%\\\" stop-color=\\\"#1E3A5F\\\" stop-opacity=\\\"0\\\"/>\\n      </radialGradient>\\n      <marker id=\\\"arr\\\" markerWidth=\\\"8\\\" markerHeight=\\\"6\\\" refX=\\\"8\\\" refY=\\\"3\\\" orient=\\\"auto\\\">\\n        <polygon points=\\\"0 0, 8 3, 0 6\\\" fill=\\\"#C4B9B0\\\"/>\\n      </marker>\\n    </defs>\\n    <!-- Axes -->\\n    <line x1=\\\"64\\\" y1=\\\"20\\\" x2=\\\"64\\\" y2=\\\"250\\\" stroke=\\\"#C4B9B0\\\" stroke-width=\\\"1.5\\\"/>\\n    <line x1=\\\"64\\\" y1=\\\"250\\\" x2=\\\"515\\\" y2=\\\"250\\\" stroke=\\\"#C4B9B0\\\" stroke-width=\\\"1.5\\\"/>\\n    <!-- Grid -->\\n    <line x1=\\\"64\\\" y1=\\\"135\\\" x2=\\\"515\\\" y2=\\\"135\\\" stroke=\\\"#E2DDD6\\\" stroke-width=\\\"1\\\" stroke-dasharray=\\\"5 5\\\"/>\\n    <line x1=\\\"290\\\" y1=\\\"20\\\" x2=\\\"290\\\" y2=\\\"250\\\" stroke=\\\"#E2DDD6\\\" stroke-width=\\\"1\\\" stroke-dasharray=\\\"5 5\\\"/>\\n    <!-- Axis text -->\\n    <text x=\\\"64\\\" y=\\\"268\\\" font-family=\\\"Space Mono,monospace\\\" font-size=\\\"9\\\" fill=\\\"#A09890\\\">NARROW</text>\\n    <text x=\\\"442\\\" y=\\\"268\\\" font-family=\\\"Space Mono,monospace\\\" font-size=\\\"9\\\" fill=\\\"#A09890\\\">BROAD</text>\\n    <text x=\\\"16\\\" y=\\\"256\\\" font-family=\\\"Space Mono,monospace\\\" font-size=\\\"9\\\" fill=\\\"#A09890\\\" transform=\\\"rotate(-90,16,256)\\\">SURFACE</text>\\n    <text x=\\\"16\\\" y=\\\"80\\\" font-family=\\\"Space Mono,monospace\\\" font-size=\\\"9\\\" fill=\\\"#A09890\\\" transform=\\\"rotate(-90,16,80)\\\">DEEP</text>\\n\\n    <!-- HAUL: left + low (narrow scope, surface depth) -->\\n    <circle cx=\\\"148\\\" cy=\\\"208\\\" r=\\\"50\\\" fill=\\\"url(#auraAmber)\\\"/>\\n    <circle id=\\\"dot-haul\\\" cx=\\\"148\\\" cy=\\\"208\\\" r=\\\"15\\\"\\n      fill=\\\"#92400E\\\" fill-opacity=\\\".15\\\" stroke=\\\"#92400E\\\" stroke-width=\\\"2.5\\\"\\n      style=\\\"cursor:pointer;transition:r .18s;\\\"/>\\n    <text id=\\\"label-haul\\\" x=\\\"148\\\" y=\\\"202\\\" text-anchor=\\\"middle\\\"\\n      font-family=\\\"Cormorant Garamond,serif\\\" font-style=\\\"italic\\\" font-size=\\\"22\\\" font-weight=\\\"600\\\"\\n      fill=\\\"#92400E\\\" style=\\\"cursor:pointer;\\\">haul</text>\\n    <text x=\\\"148\\\" y=\\\"222\\\" text-anchor=\\\"middle\\\"\\n      font-family=\\\"Space Mono,monospace\\\" font-size=\\\"8\\\" fill=\\\"#92400E\\\" opacity=\\\".75\\\">drag \\u00b7 carry \\u00b7 yield</text>\\n\\n    <!-- OVERHAUL: right + high (broad scope, deep depth) -->\\n    <circle cx=\\\"405\\\" cy=\\\"58\\\" r=\\\"56\\\" fill=\\\"url(#auraNavy)\\\"/>\\n    <circle id=\\\"dot-overhaul\\\" cx=\\\"405\\\" cy=\\\"58\\\" r=\\\"15\\\"\\n      fill=\\\"#1E3A5F\\\" fill-opacity=\\\".15\\\" stroke=\\\"#1E3A5F\\\" stroke-width=\\\"2.5\\\"\\n      style=\\\"cursor:pointer;transition:r .18s;\\\"/>\\n    <text id=\\\"label-overhaul\\\" x=\\\"405\\\" y=\\\"52\\\" text-anchor=\\\"middle\\\"\\n      font-family=\\\"Cormorant Garamond,serif\\\" font-style=\\\"italic\\\" font-size=\\\"22\\\" font-weight=\\\"600\\\"\\n      fill=\\\"#1E3A5F\\\" style=\\\"cursor:pointer;\\\">overhaul</text>\\n    <text x=\\\"405\\\" y=\\\"72\\\" text-anchor=\\\"middle\\\"\\n      font-family=\\\"Space Mono,monospace\\\" font-size=\\\"8\\\" fill=\\\"#1E3A5F\\\" opacity=\\\".75\\\">inspect \\u00b7 rebuild \\u00b7 transform</text>\\n\\n    <!-- Arrow -->\\n    <line x1=\\\"178\\\" y1=\\\"192\\\" x2=\\\"368\\\" y2=\\\"82\\\" stroke=\\\"#C4B9B0\\\" stroke-width=\\\"1.5\\\"\\n      stroke-dasharray=\\\"6 4\\\" marker-end=\\\"url(#arr)\\\"/>\\n    <text x=\\\"273\\\" y=\\\"142\\\" text-anchor=\\\"middle\\\"\\n      font-family=\\\"Space Mono,monospace\\\" font-size=\\\"8\\\" fill=\\\"#A09890\\\"\\n      transform=\\\"rotate(-25,273,142)\\\">broader + deeper</text>\\n  </svg>\\n  <p class=\\\"click-hint\\\">\\u25b8 click a word to reveal its scenario</p>\\n</div>\\n\\n<!-- Legend + scenarios -->\\n<div class=\\\"legend\\\" id=\\\"legend\\\">\\n  <div class=\\\"legend-item\\\" data-word=\\\"haul\\\" style=\\\"cursor:pointer\\\">\\n    <div class=\\\"legend-dot\\\" style=\\\"background:#92400E\\\"></div>\\n    <div>\\n      <span class=\\\"legend-word\\\" style=\\\"color:#92400E\\\">haul</span>\\n      <span class=\\\"legend-gist\\\">drag \\u00b7 transport \\u00b7 yield</span>\\n    </div>\\n  </div>\\n  <div class=\\\"legend-item\\\" data-word=\\\"overhaul\\\" style=\\\"cursor:pointer\\\">\\n    <div class=\\\"legend-dot\\\" style=\\\"background:#1E3A5F\\\"></div>\\n    <div>\\n      <span class=\\\"legend-word\\\" style=\\\"color:#1E3A5F\\\">overhaul</span>\\n      <span class=\\\"legend-gist\\\">inspect \\u00b7 rebuild \\u00b7 overtake</span>\\n    </div>\\n  </div>\\n</div>\\n\\n<div class=\\\"scenario-panel\\\" id=\\\"panel-haul\\\" style=\\\"border-left-color:#92400E;\\\">\\n  <div class=\\\"scenario-word\\\" style=\\\"color:#92400E\\\">haul</div>\\n  <div class=\\\"scenario-etym\\\">ME. halen \\\"to pull\\\" \\u00b7 OF. haler \\u00b7 Old Norse hala \\u00b7 Proto-Gmc. *hal\\u014dn\\u0105</div>\\n  <div class=\\\"scenario-text\\\">\\n    The fishing boat returned before dawn, nets bursting with silver mackerel.\\n    \\\"Good haul tonight,\\\" the captain muttered, winching the load aboard \\u2014\\n    every rope groaning as the crew hauled in the lines hand over hand.\\n    The word is the effort of moving weight across distance: physical, directional, relentless.\\n    As a noun (\\\"a good haul\\\"), it names the reward reaped from that effort.\\n  </div>\\n</div>\\n<div class=\\\"scenario-panel\\\" id=\\\"panel-overhaul\\\" style=\\\"border-left-color:#1E3A5F;\\\">\\n  <div class=\\\"scenario-word\\\" style=\\\"color:#1E3A5F\\\">overhaul</div>\\n  <div class=\\\"scenario-etym\\\">over + haul \\u00b7 17th-c. nautical: \\\"to pull ropes over one another to slacken tackle\\\" \\u2192 examine every component</div>\\n  <div class=\\\"scenario-text\\\">\\n    The engine had been sputtering for months. The mechanic took it completely apart \\u2014\\n    checked every valve, replaced the worn bearings, recalibrated the timing.\\n    Three days later it ran smoother than new. That's an overhaul:\\n    total disassembly, thorough inspection, and comprehensive repair or improvement.\\n    Nothing is left unexamined; the system emerges transformed.\\n  </div>\\n</div>\\n\\n<hr class=\\\"divider\\\">\\n\\n<!-- \\u2500\\u2500\\u2500 Visual 2: Metaphor \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500 -->\\n<div class=\\\"section-label\\\">Visual 2 \\u2014 Metaphor Illustration</div>\\n<h1 style=\\\"font-size:24px; margin-bottom:4px;\\\">The same ship, two relationships</h1>\\n<p style=\\\"font-family:'Space Mono',monospace;font-size:11px;color:#6B6460;margin-bottom:18px;\\\">click each card to reveal the etymological story</p>\\n\\n<div class=\\\"meta-grid\\\" id=\\\"metaGrid\\\">\\n\\n  <!-- HAUL card -->\\n  <div class=\\\"meta-card\\\" id=\\\"card-haul\\\">\\n    <div class=\\\"meta-card-word\\\" style=\\\"color:#92400E\\\">haul</div>\\n    <div class=\\\"meta-card-etym\\\">halen \\u2192 \\\"to pull\\\"</div>\\n    <!-- SVG Scene: figure pulling rope across water -->\\n    <svg class=\\\"ship-scene\\\" viewBox=\\\"0 0 260 190\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n      <!-- Water -->\\n      <rect x=\\\"0\\\" y=\\\"140\\\" width=\\\"260\\\" height=\\\"50\\\" fill=\\\"#DBEAFE\\\" rx=\\\"4\\\"/>\\n      <path d=\\\"M0,148 Q40,142 80,148 Q120,154 160,148 Q200,142 260,148\\\" stroke=\\\"#93C5FD\\\" stroke-width=\\\"1.5\\\" fill=\\\"none\\\"/>\\n      <!-- Ship hull -->\\n      <path d=\\\"M80,130 L180,130 L192,145 L68,145 Z\\\" fill=\\\"#B45309\\\" stroke=\\\"#92400E\\\" stroke-width=\\\"1.5\\\"/>\\n      <rect x=\\\"100\\\" y=\\\"110\\\" width=\\\"60\\\" height=\\\"22\\\" fill=\\\"#D97706\\\" rx=\\\"2\\\"/>\\n      <!-- Mast -->\\n      <line x1=\\\"130\\\" y1=\\\"50\\\" x2=\\\"130\\\" y2=\\\"112\\\" stroke=\\\"#78350F\\\" stroke-width=\\\"3\\\"/>\\n      <!-- Rope + cargo box being hauled -->\\n      <rect x=\\\"20\\\" y=\\\"100\\\" width=\\\"30\\\" height=\\\"25\\\" fill=\\\"#E2DDD6\\\" stroke=\\\"#6B6460\\\" stroke-width=\\\"1.5\\\" rx=\\\"2\\\"/>\\n      <text x=\\\"35\\\" y=\\\"116\\\" text-anchor=\\\"middle\\\" font-family=\\\"Space Mono,monospace\\\" font-size=\\\"8\\\" fill=\\\"#6B6460\\\">cargo</text>\\n      <!-- Rope line -->\\n      <line x1=\\\"50\\\" y1=\\\"112\\\" x2=\\\"100\\\" y2=\\\"112\\\" stroke=\\\"#92400E\\\" stroke-width=\\\"2.5\\\" stroke-dasharray=\\\"4 3\\\">\\n        <animate attributeName=\\\"stroke-dashoffset\\\" from=\\\"0\\\" to=\\\"-14\\\" dur=\\\"0.8s\\\" repeatCount=\\\"indefinite\\\"/>\\n      </line>\\n      <!-- Stick figure pulling rope (arms back, leaning) -->\\n      <!-- body -->\\n      <circle cx=\\\"68\\\" cy=\\\"88\\\" r=\\\"7\\\" fill=\\\"none\\\" stroke=\\\"#92400E\\\" stroke-width=\\\"2\\\"/>\\n      <line x1=\\\"68\\\" y1=\\\"95\\\" x2=\\\"68\\\" y2=\\\"118\\\" stroke=\\\"#92400E\\\" stroke-width=\\\"2\\\"/>\\n      <!-- legs braced -->\\n      <line x1=\\\"68\\\" y1=\\\"118\\\" x2=\\\"60\\\" y2=\\\"132\\\" stroke=\\\"#92400E\\\" stroke-width=\\\"2\\\"/>\\n      <line x1=\\\"68\\\" y1=\\\"118\\\" x2=\\\"76\\\" y2=\\\"132\\\" stroke=\\\"#92400E\\\" stroke-width=\\\"2\\\"/>\\n      <!-- arms pulling rope -->\\n      <line x1=\\\"68\\\" y1=\\\"100\\\" x2=\\\"56\\\" y2=\\\"110\\\" stroke=\\\"#92400E\\\" stroke-width=\\\"2\\\"/>\\n      <line x1=\\\"56\\\" y1=\\\"110\\\" x2=\\\"50\\\" y2=\\\"112\\\" stroke=\\\"#92400E\\\" stroke-width=\\\"2\\\"/>\\n      <!-- Motion arrows on cargo -->\\n      <path d=\\\"M56,112 L62,112\\\" stroke=\\\"#92400E\\\" stroke-width=\\\"1.5\\\" marker-end=\\\"url(#arr2)\\\"/>\\n      <defs>\\n        <marker id=\\\"arr2\\\" markerWidth=\\\"5\\\" markerHeight=\\\"4\\\" refX=\\\"5\\\" refY=\\\"2\\\" orient=\\\"auto\\\">\\n          <polygon points=\\\"0 0,5 2,0 4\\\" fill=\\\"#92400E\\\"/>\\n        </marker>\\n      </defs>\\n      <text x=\\\"130\\\" y=\\\"170\\\" text-anchor=\\\"middle\\\" font-family=\\\"Cormorant Garamond,serif\\\" font-style=\\\"italic\\\" font-size=\\\"13\\\" fill=\\\"#92400E\\\">pull \\u00b7 move \\u00b7 transport</text>\\n    </svg>\\n    <div class=\\\"meta-card-desc\\\" style=\\\"border-left-color:#92400E;\\\">\\n      Sailors hauled ropes \\u2014 brute, directional effort to move something heavy from A to B.\\n      The word never implies understanding what you're moving, only that you move it.\\n      Hence: \\\"haul cargo,\\\" \\\"a long haul,\\\" \\\"a good haul\\\" (what you pulled in).\\n    </div>\\n  </div>\\n\\n  <!-- OVERHAUL card -->\\n  <div class=\\\"meta-card\\\" id=\\\"card-overhaul\\\">\\n    <div class=\\\"meta-card-word\\\" style=\\\"color:#1E3A5F\\\">overhaul</div>\\n    <div class=\\\"meta-card-etym\\\">over + haul \\u2192 \\\"pull ropes over each other to slacken\\\"</div>\\n    <!-- SVG Scene: figure examining / dismantling ship engine -->\\n    <svg class=\\\"ship-scene\\\" viewBox=\\\"0 0 260 190\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\">\\n      <!-- Dock / ground -->\\n      <rect x=\\\"0\\\" y=\\\"148\\\" width=\\\"260\\\" height=\\\"42\\\" fill=\\\"#F5F0EA\\\"/>\\n      <line x1=\\\"0\\\" y1=\\\"148\\\" x2=\\\"260\\\" y2=\\\"148\\\" stroke=\\\"#C4B9B0\\\" stroke-width=\\\"1.5\\\"/>\\n      <!-- Ship hull on dry dock -->\\n      <path d=\\\"M40,110 L220,110 L230,140 L30,140 Z\\\" fill=\\\"#B45309\\\" stroke=\\\"#92400E\\\" stroke-width=\\\"1.5\\\"/>\\n      <rect x=\\\"70\\\" y=\\\"88\\\" width=\\\"120\\\" height=\\\"24\\\" fill=\\\"#D97706\\\" rx=\\\"2\\\"/>\\n      <!-- Engine block being examined (parts scattered) -->\\n      <rect x=\\\"44\\\" y=\\\"155\\\" width=\\\"18\\\" height=\\\"14\\\" fill=\\\"#E2DDD6\\\" stroke=\\\"#6B6460\\\" stroke-width=\\\"1\\\" rx=\\\"1\\\"/>\\n      <rect x=\\\"68\\\" y=\\\"158\\\" width=\\\"14\\\" height=\\\"11\\\" fill=\\\"#E2DDD6\\\" stroke=\\\"#6B6460\\\" stroke-width=\\\"1\\\" rx=\\\"1\\\"/>\\n      <rect x=\\\"88\\\" y=\\\"153\\\" width=\\\"20\\\" height=\\\"16\\\" fill=\\\"#E2DDD6\\\" stroke=\\\"#6B6460\\\" stroke-width=\\\"1\\\" rx=\\\"1\\\"/>\\n      <!-- wrench symbol -->\\n      <rect x=\\\"114\\\" y=\\\"157\\\" width=\\\"22\\\" height=\\\"8\\\" fill=\\\"#C4B9B0\\\" rx=\\\"3\\\"/>\\n      <circle cx=\\\"114\\\" cy=\\\"161\\\" r=\\\"4\\\" fill=\\\"none\\\" stroke=\\\"#C4B9B0\\\" stroke-width=\\\"2\\\"/>\\n      <!-- Stick figure with magnifying glass / clipboard -->\\n      <circle cx=\\\"178\\\" cy=\\\"78\\\" r=\\\"7\\\" fill=\\\"none\\\" stroke=\\\"#1E3A5F\\\" stroke-width=\\\"2\\\"/>\\n      <line x1=\\\"178\\\" y1=\\\"85\\\" x2=\\\"178\\\" y2=\\\"110\\\" stroke=\\\"#1E3A5F\\\" stroke-width=\\\"2\\\"/>\\n      <line x1=\\\"178\\\" y1=\\\"110\\\" x2=\\\"168\\\" y2=\\\"126\\\" stroke=\\\"#1E3A5F\\\" stroke-width=\\\"2\\\"/>\\n      <line x1=\\\"178\\\" y1=\\\"110\\\" x2=\\\"188\\\" y2=\\\"126\\\" stroke=\\\"#1E3A5F\\\" stroke-width=\\\"2\\\"/>\\n      <!-- arm holding clipboard -->\\n      <line x1=\\\"178\\\" y1=\\\"92\\\" x2=\\\"196\\\" y2=\\\"98\\\" stroke=\\\"#1E3A5F\\\" stroke-width=\\\"2\\\"/>\\n      <!-- clipboard -->\\n      <rect x=\\\"196\\\" y=\\\"94\\\" width=\\\"16\\\" height=\\\"20\\\" fill=\\\"white\\\" stroke=\\\"#1E3A5F\\\" stroke-width=\\\"1.5\\\" rx=\\\"1\\\"/>\\n      <line x1=\\\"199\\\" y1=\\\"100\\\" x2=\\\"209\\\" y2=\\\"100\\\" stroke=\\\"#1E3A5F\\\" stroke-width=\\\"1\\\"/>\\n      <line x1=\\\"199\\\" y1=\\\"104\\\" x2=\\\"209\\\" y2=\\\"104\\\" stroke=\\\"#1E3A5F\\\" stroke-width=\\\"1\\\"/>\\n      <line x1=\\\"199\\\" y1=\\\"108\\\" x2=\\\"205\\\" y2=\\\"108\\\" stroke=\\\"#1E3A5F\\\" stroke-width=\\\"1\\\"/>\\n      <!-- Inspection arrows radiating outward -->\\n      <line x1=\\\"50\\\" y1=\\\"115\\\" x2=\\\"42\\\" y2=\\\"150\\\" stroke=\\\"#1E3A5F\\\" stroke-width=\\\"1\\\" stroke-dasharray=\\\"3 3\\\" opacity=\\\".5\\\">\\n        <animate attributeName=\\\"opacity\\\" values=\\\".3;.8;.3\\\" dur=\\\"1.4s\\\" repeatCount=\\\"indefinite\\\"/>\\n      </line>\\n      <line x1=\\\"130\\\" y1=\\\"110\\\" x2=\\\"130\\\" y2=\\\"150\\\" stroke=\\\"#1E3A5F\\\" stroke-width=\\\"1\\\" stroke-dasharray=\\\"3 3\\\" opacity=\\\".5\\\">\\n        <animate attributeName=\\\"opacity\\\" values=\\\".3;.8;.3\\\" dur=\\\"1.4s\\\" begin=\\\"0.3s\\\" repeatCount=\\\"indefinite\\\"/>\\n      </line>\\n      <line x1=\\\"200\\\" y1=\\\"115\\\" x2=\\\"210\\\" y2=\\\"150\\\" stroke=\\\"#1E3A5F\\\" stroke-width=\\\"1\\\" stroke-dasharray=\\\"3 3\\\" opacity=\\\".5\\\">\\n        <animate attributeName=\\\"opacity\\\" values=\\\".3;.8;.3\\\" dur=\\\"1.4s\\\" begin=\\\"0.6s\\\" repeatCount=\\\"indefinite\\\"/>\\n      </line>\\n      <text x=\\\"130\\\" y=\\\"178\\\" text-anchor=\\\"middle\\\" font-family=\\\"Cormorant Garamond,serif\\\" font-style=\\\"italic\\\" font-size=\\\"13\\\" fill=\\\"#1E3A5F\\\">inspect \\u00b7 dismantle \\u00b7 rebuild</text>\\n    </svg>\\n    <div class=\\\"meta-card-desc\\\" style=\\\"border-left-color:#1E3A5F;\\\">\\n      Originally nautical: sailors pulled (\\\"hauled\\\") ropes over each other to slacken rigging \\u2014\\n      an \\\"over-haul\\\" \\u2014 so every line could be inspected and repaired.\\n      By extension: to examine a complete system and fix or improve every faulty part.\\n      Hence: \\\"overhaul the engine,\\\" \\\"overhaul the tax code,\\\" \\\"the committee needs an overhaul.\\\"\\n    </div>\\n  </div>\\n\\n</div>\\n\\n<!-- \\u2500\\u2500\\u2500 Prose \\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500\\u2500 -->\\n<div class=\\\"prose-section\\\">\\n  <hr class=\\\"divider\\\">\\n  <h2>Key distinctions &amp; traps</h2>\\n\\n  <div class=\\\"trap-entry\\\">\\n    <p><strong>haul</strong> is about movement; <strong>overhaul</strong> is about examination + repair.\\n    You can haul something broken without caring what's wrong with it.\\n    An overhaul, by contrast, demands understanding every component.</p>\\n  </div>\\n\\n  <div class=\\\"trap-entry\\\">\\n    <p><strong>\\\"A long haul\\\"</strong> means a long journey or sustained effort \\u2014 time and distance.\\n    It never implies improvement. <strong>\\\"A long overhaul\\\"</strong> means a thorough repair took a long time.\\n    The confusion point: both involve sustained effort, but in completely different directions.</p>\\n  </div>\\n\\n  <div class=\\\"trap-entry\\\">\\n    <p><strong>haul</strong> as a noun names the reward: <em>\\\"a big haul\\\"</em> (drugs seized, fish caught, loot taken).\\n    <strong>overhaul</strong> has no common noun form in this sense \\u2014 you wouldn't say \\\"a big overhaul\\\"\\n    to mean something you obtained. It remains a process word.</p>\\n  </div>\\n\\n  <div class=\\\"trap-entry\\\">\\n    <p><strong>Register note:</strong> <em>overhaul</em> can mean \\\"to overtake\\\" in British English\\n    (one ship overhauling another at sea \\u2014 moving over and past it).\\n    This usage is rare in modern American English but explains the nautical origin of the metaphor.</p>\\n  </div>\\n</div>\\n\\n<script>\\n  const words = ['haul', 'overhaul'];\\n  let activeScatter = null;\\n  let activeMeta = null;\\n\\n  // Scatter dots\\n  words.forEach(w => {\\n    ['dot-', 'label-'].forEach(prefix => {\\n      const el = document.getElementById(prefix + w);\\n      if (el) el.addEventListener('click', () => toggleScatter(w));\\n    });\\n    const li = document.querySelector('[data-word=\\\"' + w + '\\\"]');\\n    if (li) li.addEventListener('click', () => toggleScatter(w));\\n  });\\n\\n  function toggleScatter(word) {\\n    if (activeScatter === word) {\\n      document.getElementById('panel-' + word).classList.remove('active');\\n      document.getElementById('dot-' + word).setAttribute('r', '15');\\n      activeScatter = null;\\n    } else {\\n      words.forEach(w => {\\n        document.getElementById('panel-' + w).classList.remove('active');\\n        document.getElementById('dot-' + w).setAttribute('r', '15');\\n      });\\n      document.getElementById('panel-' + word).classList.add('active');\\n      document.getElementById('dot-' + word).setAttribute('r', '20');\\n      activeScatter = word;\\n    }\\n  }\\n\\n  // Metaphor cards\\n  ['haul', 'overhaul'].forEach(w => {\\n    document.getElementById('card-' + w).addEventListener('click', () => toggleMeta(w));\\n  });\\n\\n  function toggleMeta(word) {\\n    const card = document.getElementById('card-' + word);\\n    const cls = 'active-card-' + word;\\n    if (card.classList.contains(cls)) {\\n      card.classList.remove(cls);\\n      activeMeta = null;\\n    } else {\\n      ['haul', 'overhaul'].forEach(w => {\\n        document.getElementById('card-' + w).classList.remove('active-card-' + w);\\n      });\\n      card.classList.add(cls);\\n      activeMeta = word;\\n    }\\n  }\\n</script>\\n</body>\\n</html>\\n\", \"filename\": \"/mnt/user-data/outputs/haul_vs_overhaul.html\"}"
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
  "tool_use_id": "toolu_01WNPmnV2MMiSTk1VPbdWLFJ",
  "name": "create_file",
  "content": [
    {
      "type": "text",
      "text": "File created successfully: /mnt/user-data/outputs/haul_vs_overhaul.html",
      "uuid": "0ff7adaa-60bb-4791-b132-63d687a94c77"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": {
    "output_format_category": "html"
  },
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": {
    "type": "text",
    "text": "File created successfully: /mnt/user-data/outputs/haul_vs_overhaul.html"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-06-15T06:46:08.174021Z",
  "stop_timestamp": "2026-06-15T06:46:08.174021Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01FUgLyB59tdhjbyLUCJvJZn",
  "name": "present_files",
  "input": {
    "filepaths": [
      "/mnt/user-data/outputs/haul_vs_overhaul.html"
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
        "['/mnt/user-data/outputs/haul_vs_overhaul.html']"
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
  "tool_use_id": "toolu_01FUgLyB59tdhjbyLUCJvJZn",
  "name": "present_files",
  "content": [
    {
      "type": "local_resource",
      "file_path": "/mnt/user-data/outputs/haul_vs_overhaul.html",
      "name": "haul vs overhaul",
      "mime_type": "text/html",
      "uuid": "5a0dd2e0-7e42-474a-a074-1550a9ed7c5e"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": {
    "output_format_category": "html"
  },
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

The interactive visualization has two panels — here's the conceptual map to go with it:

---

**The core distinction in one sentence:**

*Haul* is about **moving** something; *overhaul* is about **examining and rebuilding** something.

---

**Etymology (verified from OED and Merriam-Webster):**

Both words share a common root: Middle English *halen* / Old French *haler* ("to pull"), itself from Old Norse *hala* or Proto-Germanic *\*halōną*. The prefix *over-* in *overhaul* comes from a specific 17th-century nautical practice: sailors would "haul" (pull) ropes **over** each other to slacken the rigging — so every line could be inspected and repaired. This is the literal origin of "overhaul" meaning *thorough inspection and repair*.

---

**Four practical distinctions:**

| | **haul** | **overhaul** |
|---|---|---|
| **Core action** | move weight across distance | examine every part + fix/improve |
| **As noun** | the reward gained (*a good haul*) | the process itself (*needs an overhaul*) |
| **Duration** | implies effort over distance (*long haul*) | implies effort over depth (*major overhaul*) |
| **Improvement?** | no — you haul things broken or intact | yes — an overhaul implies the system improves |

---

**Common trap:** "A long haul" ≠ "A long overhaul." The first means a long journey or sustained effort over time; the second means a repair/improvement took a long time. They both involve prolonged effort, but in completely different directions — *distance* vs. *depth*.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019eca05-09b9-7606-a5cf-bb5e5363e26e",
  "updated_at": "2026-06-15T06:46:22.791316Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019eca05-09b9-74ff-be83-8291383444ad"
}
```

</details>
