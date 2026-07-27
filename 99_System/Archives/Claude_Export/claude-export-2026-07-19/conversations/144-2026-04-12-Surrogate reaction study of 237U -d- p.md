# Surrogate reaction study of 237U (d, p)

## Export metadata (verbatim)

```json
{
  "uuid": "667f0c17-92c5-4259-b586-806c3b8926de",
  "name": "Surrogate reaction study of 237U (d, p)",
  "summary": "**Conversation overview**\n\nThe person is researching the ²³⁷U(d,p)²³⁸U surrogate reaction method, likely in the context of applying to or collaborating with Ass. Prof. Nobuaki Imai's DONUTS group at the Center for Nuclear Study (CNS), University of Tokyo. The conversation began with a request to explain the research object of the ²³⁷U(d,p) surrogate reaction, which Claude addressed through an interactive five-panel HTML widget covering the experimental challenge (²³⁷U's 6.75-day half-life making direct neutron targets impractical), the neutron-stripping reaction mechanism in inverse kinematics, the ²³⁸U* compound nucleus decay channels, the Escher surrogate formula (Rev. Mod. Phys. 84, 353, 2012), and what the experiment extracts including spectroscopic factors and neutron-induced cross sections via DWBA analysis.\n\nThe person then asked Claude to align the content specifically to Imai-san's DONUTS group, prompting a rebuilt visualization incorporating the group's actual research identity: the OEDO-SHARAQ instrument at RIBF, the SAKURA project (r-process around ¹³²Sn and the νp-process via ⁵⁶Ni(d,p)), the LLFP transmutation program (with ⁷⁹Se(n,γ) published in Imai et al., Physics Letters B, 2024 as the proof-of-concept), and the IMP collaboration connection on OEDO surrogate studies. The final exchange focused on the group's core physics motivations drawn directly from the DONUTS group website: (1) self-organization in finite quantum many-body systems including shape coexistence, pairing correlations tied to neutron star equations of state, and extreme rotation toward hyperdeformation; (2) neutron capture reaction dynamics as a century-old unsolved microscopic problem; and (3) the SAKURA astrophysical key reactions program. Claude also surfaced the origin of the group name itself — the stated ultimate goal of producing a torus-shaped nucleus, the theoretically predicted but never observed \"ultimate deformed state.\"\n\nKey domain terminology used throughout includes surrogate reaction method, Weisskopf-Ewing approximation, compound nucleus, inverse kinematics, DWBA, spectroscopic factors (C²S), J^π assignments, active-target TPC, ML-based PID (ResNet), OEDO beamline, SHARAQ spectrometer, RIBF, r-process, νp-process, LLFP (long-lived fission products), island of inversion, shape coexistence, and hyperdeformation. Colleagues mentioned include Nobuaki Imai (DONUTS group leader, CNS UTokyo) and the Escher et al. surrogate formalism authors. The person's IMP (Institute of Modern Physics) background was noted as directly relevant to the OEDO collaboration.",
  "created_at": "2026-04-12T09:39:27.462405Z",
  "updated_at": "2026-04-12T09:46:58.171995Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-12T09:39:28.528145Z

The research object of surrogate reaction of 237U (d, p)

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d810f-715a-7658-97f7-d02d0425dfab",
  "updated_at": "2026-04-12T09:39:28.528145Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "019d810f-2e04-765f-9bc5-fd6a49039ce8",
      "file_name": "1775986747608_image.png"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-12T09:42:47.452083Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about the surrogate reaction method applied to 237U(d,p) - this is a nuclear physics topic combining the surrogate reaction method with direct reactions on 237U. Let me read the concept-visualizer and feynman-technique skills to create an interactive visualization, and also provide a thorough explanation.

The slide shows:
1. The physics motivation: shell evolution far from stability
2. Direct reaction spectroscopy (d,p)/(p,d) at 10-30 MeV/u in inverse kinematics
3. Active-target TPCs for luminosity
4. ML-based PID


5. The surrogate reaction method, which sidesteps the experimental challenge of using radioactive 237U by instead bombarding stable 238U with alpha particles to populate the same compound nucleus states, then extracting the neutron-induced cross section through a formula that weights the decay probabilities by spin and parity. 84, 353 (2012)

The user is asking about the surrogate reaction for 237U(d,p). Looking at the slide, the desired reaction is neutron capture on 237U to form 238U*, but since 237U has such a short half-life of 6.75 days, direct neutron measurements are impractical. The 237U(d,p)238U reaction serves as a surrogate—the deuteron transfer reaction populates the same compound nucleus 238U* that would form from neutron capture, allowing researchers to measure cross sections for different excited states and then extract the neutron capture cross sections using the surrogate relation, which relates the compound nucleus formation cross section and decay probabilities to the desired reaction channel.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T09:39:46.146708Z",
  "stop_timestamp": "2026-04-12T09:39:46.360020Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_018iDao4qen6AJfWd6KdTH3a",
  "name": "view",
  "input": {
    "description": "Read concept-visualizer skill",
    "path": "/mnt/skills/user/concept-visualizer/SKILL.md"
  },
  "message": "Read concept-visualizer skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Read concept-visualizer skill"
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
  "tool_use_id": "toolu_018iDao4qen6AJfWd6KdTH3a",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: concept-visualizer\n     3\tdescription: \"Generate inline visual metaphor illustrations for general concepts using the Visualizer (show_widget). Turns abstract ideas into concrete, memorable SVG scenes — stick figures interacting with everyday objects to embody how a concept works. Use this skill whenever a user asks to 'visualize a concept', 'draw me a diagram of how X works', 'illustrate this idea', 'show me visually', 'make a visual explanation', or any phrasing requesting a pictorial/diagrammatic explanation of an abstract concept. Also trigger when another skill (e.g., Feynman-Technique) needs a visual aid for a concept it is explaining. Works for any domain: physics, math, CS, biology, economics, philosophy, ML, engineering, or everyday ideas. Do NOT use for data charts, UI mockups, word comparisons (use vocabulary-visualization instead), or file-based deliverables.\"\n     4\t---\n     5\t\n     6\t# Concept Visualizer\n     7\t\n     8\tTurn abstract concepts into concrete, memorable visual metaphors rendered inline via the Visualizer.\n     9\t\n    10\t## Core principle\n    11\t\n    12\tEvery concept has a **mechanism** — something it *does*. The job is to find an everyday object or situation that does the same thing visibly, then draw that.\n    13\t\n    14\t## Workflow\n    15\t\n    16\t### 1. Extract the mechanism\n    17\t\n    18\tAsk: *what does this concept actually do?* Strip away domain jargon and find the verb.\n    19\t\n    20\t| Concept | Mechanism |\n    21\t|---|---|\n    22\t| Entropy | Things spread out / get disordered over time |\n    23\t| Gradient descent | Feel which way is downhill, step that way, repeat |\n    24\t| Nuclear fission | One split triggers more splits (chain reaction) |\n    25\t| Recursion | Do the same task on a smaller version of itself |\n    26\t| Natural selection | Variants compete; survivors pass traits forward |\n    27\t| Opportunity cost | Choosing one path locks out another |\n    28\t\n    29\tOne sentence. If you can't state the mechanism simply, break the concept into sub-concepts and visualize each.\n    30\t\n    31\t### 2. Find the metaphor object\n    32\t\n    33\tPick ONE concrete, universally familiar object or situation whose behavior mirrors the mechanism. The metaphor must be:\n    34\t\n    35\t- **Physical and visible** — something you can draw (not another abstraction)\n    36\t- **Universally known** — no culture/domain-specific objects\n    37\t- **Structurally honest** — the metaphor's behavior genuinely parallels the concept, not just superficially\n    38\t\n    39\tGood sources: water, balls, stairs, rooms, doors, ropes/knots, trees, paths/forks, dominoes, containers, springs, seesaws, conveyor belts, pulleys, mirrors, sandcastles, crowds of people.\n    40\t\n    41\t**Honesty check**: where does the metaphor break down? Note this internally — you'll flag it in the prose after the visual.\n    42\t\n    43\t### 3. Decompose into 2–5 panels\n    44\t\n    45\tBreak the concept into sequential stages or contrasting states. Each panel = one moment/aspect.\n    46\t\n    47\tPanel types:\n    48\t- **Sequential** (A → B → C): for processes, transformations, chains of cause-and-effect\n    49\t- **Contrast** (A vs B): for comparisons, with/without, before/after\n    50\t- **Zoom** (whole → part → detail): for hierarchical or nested concepts\n    51\t\n    52\tEach panel gets:\n    53\t- A **scene**: the metaphor object + a stick figure in a specific posture/action\n    54\t- A **label**: 2–5 words naming the stage (e.g., \"Energy spreads out\")\n    55\t- A **reveal caption**: 1–2 sentences mapping the scene back to the real concept (shown on click)\n    56\t\n    57\t### 4. Render via Visualizer\n    58\t\n    59\tCall `visualize:read_me` with module `[\"diagram\"]` before the first `show_widget` call.\n    60\t\n    61\t**SVG structure:**\n    62\t\n    63\t- Panels arranged **left-to-right** in a single SVG, separated by subtle vertical dividers\n    64\t- Consistent canvas: each panel is a square cell within a wide strip\n    65\t- The metaphor object is **visually identical** across panels — only the figure's relationship to it changes\n    66\t- Stick figures communicate through **posture and spatial relationship**, not detail\n    67\t- Distinct muted color per panel stage; CSS-variable-aware for dark mode\n    68\t- Arrow or flow indicator between sequential panels\n    69\t- Click a panel → reveal caption fades in below the scene\n    70\t\n    71\t**Visual rules:**\n    72\t\n    73\t- Stick figures, not icons. Simple geometric shapes. No clip-art.\n    74\t- Maximum 5 panels — if the concept needs more, split into multiple visualizations\n    75\t- Labels use a clean sans-serif; captions in italic\n    76\t- No decorative elements that don't carry meaning\n    77\t- Consistent ground line across panels for visual continuity\n    78\t- Panel width: at least 140px each; total SVG viewBox width ≤ 800\n    79\t\n    80\t**Interactivity:**\n    81\t\n    82\t- Click/tap a panel to toggle its reveal caption\n    83\t- Subtle hover highlight on panels (opacity shift)\n    84\t- Active panel gets a gentle border highlight\n    85\t\n    86\t### 5. Prose after the visual\n    87\t\n    88\tDo NOT restate what the visual shows. Instead:\n    89\t\n    90\t- **Map it back**: one sentence explicitly connecting the metaphor to the real concept (\"The messy room is entropy — energy states spreading into less organized configurations.\")\n    91\t- **Flag the break**: where the metaphor stops working (\"Unlike a real room, entropy in physics is about *probability* of microstates, not just messiness.\")\n    92\t- **Extend an invitation**: a question or nudge to go deeper (\"Want to see why some processes *reverse* entropy? That's where it gets interesting.\")\n    93\t\n    94\t## Integration with other skills\n    95\t\n    96\tThis skill is designed to be called by other skills. When invoked from another skill's context:\n    97\t\n    98\t- Accept the concept and any analogy already established by the calling skill\n    99\t- If the calling skill (e.g., Feynman-Technique) has already chosen an analogy, **use that analogy** as the metaphor object — don't invent a competing one\n   100\t- If no analogy is provided, select one using step 2 above\n   101\t- Return the visual inline; the calling skill handles surrounding prose\n   102\t\n   103\t## Constraints\n   104\t\n   105\t- Metaphors must be structurally honest — don't force a visual that misrepresents the concept\n   106\t- All text in the SVG must be readable at default zoom (≥12px effective)\n   107\t- Use the Visualizer tool (`show_widget`), not file artifacts\n   108\t- One concept per visualization; compound concepts get multiple visuals\n   109\t",
      "uuid": "bbbdef46-af74-4460-bc8b-db1fd72989fc"
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

Now let me read the visualizer read_me to get the design tokens.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T09:39:56.007403Z",
  "stop_timestamp": "2026-04-12T09:39:56.007403Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01SBpX27sJbeLAGeVKYmP83H",
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
  "tool_use_id": "toolu_01SBpX27sJbeLAGeVKYmP83H",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "# Imagine — Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` — SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` — UI mockups, forms, cards, dashboards\n- `interactive` — interactive explainers with controls\n- `chart` — charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` — illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget — hard limits:**\n- Box subtitles: ≤5 words. Detail goes in click-through (`sendPrompt`) or the prose below — not the box.\n- Colors: ≤2 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: ≤4 boxes at full width (~140px each). 5+ boxes → shrink to ≤110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing \"click to learn more\" in prose, the diagram itself must ACTUALLY be sparse. Don't promise brevity then front-load everything.\n\n**Accessibility:** For HTML widgets, begin with a visually-hidden `<h2 class=\"sr-only\">` containing a one-sentence summary of the visualization for screen-reader users. (SVG widgets use `role=\"img\"` with `<title>` and `<desc>` instead — see SVG setup.)\n\nYou create rich visual content — SVG diagrams/illustrations and HTML interactive widgets — that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn't notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** — All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks \"explain X\", write the explanation in your response and use the tool only for the visual that accompanies it. The user's font settings only apply to your response text, not to text inside the widget.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) → content HTML → `<script>` last.\n- **SVG**: `<defs>` (markers) → visual elements immediately.\n- Prefer inline `style=\"...\"` over `<style>` blocks — inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules — that's fine, but don't bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji — use CSS shapes or SVG paths\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only — host provides the bg)\n- **Typography**: The default font is Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-serif)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px — all `font-weight: 500`. Heading color is pre-set to `var(--color-text-primary)` — don't override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 — they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally — no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` — the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style=\"min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;\">` and put the modal inside — it's a faux viewport that actually contributes layout height.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` — just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text — never plain black or generic gray.\n- **Corners**: use `border-radius: var(--border-radius-md)` (or `-lg` for cards) in HTML. In SVG, `rx=\"4\"` is the default — larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** — if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** — see Philosophy above.\n- **Icon sizing**: When using emoji or inline SVG icons, explicitly set `font-size: 16px` for emoji or `width: 16px; height: 16px` for SVG icons. Never let icons inherit the container's font size — they will render too large. For larger decorative icons, use 24px max.\n- No tabs, carousels, or `display: none` sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)\n- No nested scrolling — auto-fit height.\n- Scripts execute after streaming — load libraries via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` (UMD globals), then use the global in a plain `<script>` that follows.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`. All other origins are blocked by the sandbox — the request silently fails.\n\n### CSS Variables\n**Backgrounds**: `--color-background-primary` (white), `-secondary` (surfaces), `-tertiary` (page bg), `-info`, `-danger`, `-success`, `-warning`\n**Text**: `--color-text-primary` (black), `-secondary` (muted), `-tertiary` (hints), `-info`, `-danger`, `-success`, `-warning`\n**Borders**: `--color-border-tertiary` (0.15α, default), `-secondary` (0.3α, hover), `-primary` (0.4α), semantic `-info/-danger/-success/-warning`\n**Typography**: `--font-sans`, `--font-serif`, `--font-mono`\n**Layout**: `--border-radius-md` (8px), `--border-radius-lg` (12px — preferred for most components), `--border-radius-xl` (16px)\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** — every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes — they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) — never omit fill or use `fill=\"inherit\"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--color-text-primary, --color-text-secondary) for text. Never hardcode colors like color: #333 — invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user's next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href=\"https://...\">` just works — clicks are intercepted and open the host's link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n\n\n## Color palette\n\n9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.\n\n| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |\n|-------|------|------|-----|-----|-----|-----|-----|------|\n| `c-purple` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |\n| `c-teal` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |\n| `c-coral` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |\n| `c-pink` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |\n| `c-gray` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |\n| `c-blue` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |\n| `c-green` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |\n| `c-amber` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |\n| `c-red` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |\n\n**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:\n- Group nodes by **category** — all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.\n- For illustrative diagrams, map colors to **physical properties** — warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.\n- Use **gray for neutral/structural** nodes (start, end, generic steps).\n- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.\n- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept — those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)\n\n**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --color-text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** — title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.\n\n**Light/dark mode quick pick** — use only stops from the table, never off-table hex values:\n- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**\n- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**\n- Apply `c-{ramp}` to a `<g>` wrapping shape+text, or directly to a `<rect>`/`<circle>`/`<ellipse>`. Never to `<path>` — paths don't get ramp fill. For colored connector strokes use inline `stroke=\"#...\"` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.\n\nFor status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.\n\n\n## SVG setup\n\n**ViewBox safety checklist** — before finalizing any SVG, verify:\n1. Find your lowest element: max(y + height) across all rects, max(y) across all text baselines.\n2. Set viewBox height = that value + 40px buffer.\n3. Find your rightmost element: max(x + width) across all rects. All content must stay within x=0 to x=680.\n4. For text with text-anchor=\"end\", the text extends LEFT from x. If x=118 and text is 200px wide, it starts at x=-82 — outside the viewBox. Increase x or use text-anchor=\"start\".\n5. Never use negative x or y coordinates. The viewBox starts at 0,0.\n6. Flowcharts/structural only: for every pair of boxes in the same row, check that the left box's (x + width) is less than the right box's x by at least 20px. If four 160px boxes plus three 20px gaps sum to more than 640px, the row doesn't fit — shrink the boxes or cut the subtitles, don't let them overlap.\n\n**SVG setup**: `<svg width=\"100%\" viewBox=\"0 0 680 H\" role=\"img\"><title>…</title><desc>…</desc>…` — 680px wide, flexible height. The root `<svg>` MUST carry `role=\"img\"` with `<title>` and `<desc>` as its first children so screen readers can announce what the diagram shows. Set H to fit content tightly — the last element's bottom edge + 40px padding. Don't leave excess empty space below the content. Safe area: x=40 to x=640, y=40 to y=(H-40). Background transparent. **Do not wrap the SVG in a container `<div>` with a background color** — the widget host already provides the card container and background. Output the raw `<svg>` element directly.\n\n**The 680 in viewBox is load-bearing — do not change it.** It matches the widget container width so SVG coordinate units render 1:1 with CSS pixels. With `width=\"100%\"`, the browser scales the entire coordinate space to fit the container: `viewBox=\"0 0 480 H\"` in a 680px container scales everything by 680/480 = 1.42×, so your `class=\"th\"` 14px text renders at ~20px. The font calibration table below and all \"text fits in box\" math assume 1:1. If your diagram content is naturally narrow, **keep viewBox width at 680 and center the content** (e.g. content spans x=180..500) — do not shrink the viewBox to hug the content. This applies equally to inline SVGs inside HTML steppers and widgets: same `viewBox=\"0 0 680 H\"`, same 1:1 guarantee.\n\n**viewBox height:** After layout, find max_y (bottom-most point of any shape, including text baselines + 4px descent). Set viewBox height = max_y + 20. Don't guess.\n\n**text-anchor='end' at x<60 is risky** — the longest label will extend left past x=0. Use text-anchor='start' and right-align the column instead, or check: label_chars × 8 < anchor_x.\n\n**One SVG per tool call** — each call must contain exactly one <svg> element. Never leave an abandoned or partial SVG in the output. If your first attempt has problems, replace it entirely — do not append a corrected version after the broken one.\n\n**Style rules for all diagrams**:\n- Every `<text>` element must carry one of the pre-built classes (`t`, `ts`, `th`). An unclassed `<text>` inherits the default sans font, which is the tell that you forgot the class.\n- Use only two font sizes: 14px for node/region labels (class=\"t\" or \"th\"), 12px for subtitles, descriptions, and arrow labels (class=\"ts\"). No other sizes.\n- No decorative step numbers, large numbering, or oversized headings outside boxes.\n- No icons or illustrations inside boxes — text only. (Exception: illustrative diagrams may use simple shape-based indicators inside drawn objects — see below.)\n- Sentence case on all labels.\n\n**Font size calibration for diagram text labels** - Here's csv table to give you better sense of the Anthropic Sans font rendering width:\n```csv\ntext, chars length, font-weight, font-size, rendered width\nAuthentication Service, chars: 22, font-weight: 500, font-size: 14px, width: 167px\nBackground Job Processor, chars: 24, font-weight: 500, font-size: 14px, width: 201px\nDetects and validates incoming tokens, chars: 37, font-weight: 400, font-size: 14px, width: 279px\nforwards request to, chars: 19, font-weight: 400, font-size: 12px, width: 123px\nデータベースサーバー接続, chars: 12, font-weight: 400, font-size: 14px, width: 181px\n```\n\nBefore placing text in a box, check: does (text width + 2×padding) fit the container?\n\n**SVG `<text>` never auto-wraps.** Every line break needs an explicit `<tspan x=\"...\" dy=\"1.2em\">`. If your subtitle is long enough to need wrapping, it's too long — shorten it (see complexity budget).\n\n**Example check**: You want to put \"Glucose (C₆H₁₂O₆)\" in a rounded rect. The text is 20 characters at 14px ≈ 180px wide. Add 2×24px padding = 228px minimum box width. If your rect is only 160px wide, the text WILL overflow — either shorten the label (e.g. just \"Glucose\") or widen the box. Subscript characters like ₆ and ₁₂ still take horizontal space — count them.\n\n**Pre-built classes** (already loaded in SVG widget):\n- `class=\"t\"` = sans 14px primary, `class=\"ts\"` = sans 12px secondary, `class=\"th\"` = sans 14px medium (500)\n- `class=\"box\"` = neutral rect (bg-secondary fill, border stroke)\n- `class=\"node\"` = clickable group with hover effect (cursor pointer, slight dim on hover)\n- `class=\"arr\"` = arrow line (1.5px, open chevron head)\n- `class=\"leader\"` = dashed leader line (tertiary stroke, 0.5px, dashed)\n- `class=\"c-{ramp}\"` = colored node (c-blue, c-teal, c-amber, c-green, c-red, c-purple, c-coral, c-pink, c-gray). Apply to `<g>` or shape element (rect/circle/ellipse), NOT to paths. Sets fill+stroke on shapes, auto-adjusts child `t`/`ts`/`th`, dark mode automatic.\n\n**c-{ramp} nesting:** These classes use direct-child selectors (`>`). Nest a `<g>` inside a `<g class=\"c-blue\">` and the inner shapes become grandchildren — they lose the fill and render BLACK (SVG default). Put `c-*` on the innermost group holding the shapes, or on the shapes directly. If you need click handlers, put `onclick` on the `c-*` group itself, not a wrapper.\n\n- Short aliases: `var(--p)`, `var(--s)`, `var(--t)`, `var(--bg2)`, `var(--b)`\n- Arrow marker: always include this `<defs>` at the start of every SVG:\n  `<defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker></defs>`\n  Then use `marker-end=\"url(#arrow)\"` on lines. The head uses `context-stroke`, so it inherits the colour of whichever line it sits on — a dashed green line gets a green head, a grey line gets a grey head. Never a colour mismatch. Do not add filters or extra markers to `<defs>`. `<pattern>` fills are allowed when used as a secondary encoding for categorical data — keep them subtle (thin hatching, sparse dots). Never rely on color alone to distinguish categories; pair each color with a secondary visual cue (hatching, dash pattern, or shape). Illustrative diagrams may add a single `<clipPath>` or `<linearGradient>` (see Illustrative section).\n\n**Minimize standalone labels.** Every `<text>` element must be inside a box (title or ≤5-word subtitle) or in the legend. Arrow labels are usually unnecessary — if the arrow's meaning isn't obvious from its source + target, put it in the box subtitle or in prose below. Labels floating in space collide with things and are ambiguous.\n\n**Stroke width:** Use 0.5px strokes for diagram borders and edges — not 1px or 2px. Thin strokes feel more refined.\n\n**Connector paths need `fill=\"none\"`.** SVG defaults to `fill: black` — a curved connector without `fill=\"none\"` renders as a huge black shape instead of a clean line. Every `<path>` or `<polyline>` used as a connector/arrow MUST have `fill=\"none\"`. Only set fill on shapes meant to be filled (rects, circles, polygons).\n\n**Rect rounding:** `rx=\"4\"` for subtle corners. `rx=\"8\"` max for emphasized rounding. `rx` ≥ half the height = pill shape — deliberate only.\n\n**Schematic containers use dashed rects with a label.** Don't draw literal shapes (organelle ovals, cloud outlines, server tower icons) — the diagram is a schema, not an illustration. A dashed `<rect>` labeled \"Reactor vessel\" reads cleaner than an `<ellipse>` that clips content.\n\n**Lines stop at component edges.** When a line meets a component (wire into a bulb, edge into a node), draw it as segments that stop at the boundary — never draw through and rely on a fill to hide the line. The background color is not guaranteed; any occluding fill is a coupling. Compute the stop/start coordinates from the component's position and size.\n\n**Physical-color scenes (sky, water, grass, skin, materials):** Use ALL hardcoded hex — never mix with `c-*` theme classes. The scene should not invert in dark mode. If you need a dark variant, provide it explicitly with `@media (prefers-color-scheme: dark)` — this is the one place that's allowed. Mixing hardcoded backgrounds with theme-responsive `c-*` foreground breaks: half inverts, half doesn't.\n\n**No rotated text**. `<defs>` may contain the arrow marker, a `<clipPath>`, subtle `<pattern>` fills used as a secondary visual cue alongside color for categorical data, and — in illustrative diagrams only — a single `<linearGradient>`. Nothing else: no filters, no extra markers.\n\n\n## Diagram types\n*\"Explain how compound interest works\" / \"How does a process scheduler work\"*\n\n**Two rules that cause most diagram failures — check these before writing each arrow and each box:**\n1. **Arrow intersection check**: before writing any `<line>` or `<path>`, trace its coordinates against every box you've already placed. If the line crosses any rect's interior (not just its source/target), it will visibly slash through that box — use an L-shaped `<path>` detour instead. This applies to arrows crossing labels too.\n2. **Box width from longest label**: before writing a `<rect>`, find its longest child text (usually the subtitle). `rect_width = max(title_chars × 8, subtitle_chars × 7) + 24`. A 100px-wide box holds at most a 10-char subtitle. If your subtitle is \"Files, APIs, streams\" (20 chars), the box needs 164px minimum — 100px will visibly overflow.\n\n**Tier packing:** Compute total width BEFORE placing. Example — 4 pub/sub consumer boxes:\n- WRONG: x=40,160,260,360 w=160 → 40-60px overlaps (4×160=640 > 480 available)\n- RIGHT: x=50,200,350,500 w=130 gap=20 → fits (4×130 + 3×20 = 580 ≤ 590 safe width; right edge at 630 ≤ 640)\nWork bottom-up for trees: size leaf tier first, parent width ≥ sum of children.\n\n**Diagrams are the hardest use case** — they have the highest failure rate due to precise coordinate math. Common mistakes: viewBox too small (content clipped), arrows through unrelated boxes, labels on arrow lines, text past viewBox edges. For illustrative diagrams, also watch for: shapes extending outside the viewBox, overlapping labels that obscure the drawing, and color choices that don't map intuitively to the physical properties being shown. Double-check coordinates before finalizing.\n\nUse SVG for diagrams. The widget automatically wraps SVG output in a card.\n\n**Pick the right diagram type.** The decision is about *intent*, not subject matter. Ask: is the user trying to *document* this, or *understand* it?\n\n**Reference diagrams** — the user wants a map they can point at. Precision matters more than feeling. Boxes, labels, arrows, containment. These are the diagrams you'd find in documentation.\n- **Flowchart** — steps in sequence, decisions branching, data transforming. Good for: approval workflows, request lifecycles, build pipelines, \"what happens when I click submit\". Trigger phrases: *\"walk me through the process\"*, *\"what are the steps\"*, *\"what's the flow\"*.\n- **Structural diagram** — things inside other things. Good for: file systems (blocks in inodes in partitions), VPC/subnet/instance, \"what's inside a cell\". Trigger phrases: *\"what's the architecture\"*, *\"how is this organised\"*, *\"where does X live\"*.\n\n**Intuition diagrams** — the user wants to *feel* how something works. The goal isn't a correct map, it's the right mental model. These should look nothing like a flowchart. The subject doesn't need a physical form — it needs a *visual metaphor*.\n- **Illustrative diagram** — draw the mechanism. Physical things get cross-sections (water heaters, engines, lungs). Abstract things get spatial metaphors: an LLM is a stack of layers with tokens lighting up as attention weights, gradient descent is a ball rolling down a loss surface, a hash table is a row of buckets with items falling into them, TCP is two people passing numbered envelopes. Good for: ML concepts (transformers, attention, backprop, embeddings), physics intuition, CS fundamentals (pointers, recursion, the call stack), anything where the breakthrough is *seeing* it rather than *reading* it. Trigger phrases: *\"how does X actually work\"*, *\"explain X\"*, *\"I don't get X\"*, *\"give me an intuition for X\"*.\n\n**Route on the verb, not the noun.** Same subject, different diagram depending on what was asked:\n\n| User says | Type | What to draw |\n|---|---|---|\n| \"how do LLMs work\" | **Illustrative** | Token row, stacked layer slabs, attention threads glowing warm between tokens. Go interactive if you can. |\n| \"transformer architecture\" | Structural | Labelled boxes: embedding, attention heads, FFN, layer norm. |\n| \"how does attention work\" | **Illustrative** | One query token, a fan of lines to every key, line opacity = weight. |\n| \"how does gradient descent work\" | **Illustrative** | Contour surface, a ball, a trail of steps. Slider for learning rate. |\n| \"what are the training steps\" | Flowchart | Forward → loss → backward → update. Boxes and arrows. |\n| \"how does TCP work\" | **Illustrative** | Two endpoints, numbered packets in flight, an ACK returning. |\n| \"TCP handshake sequence\" | Flowchart | SYN → SYN-ACK → ACK. Three boxes. |\n| \"explain the Krebs cycle\" / \"how does the event loop work\" | **HTML stepper** | Click through stages. Never a ring. |\n| \"how does a hash map work\" | **Illustrative** | Key falling through a funnel into one of N buckets. |\n| \"draw the database schema\" / \"show me the ERD\" | **mermaid.js** | `erDiagram` syntax. Not SVG. |\n\nThe illustrative route is the default for *\"how does X work\"* with no further qualification. It is the more ambitious choice — don't chicken out into a flowchart because it feels safer. Claude draws these well.\n\nDon't mix families in one diagram. If you need both, draw the intuition version first (build the mental model), then the reference version (fill in the precise labels) as a second tool call with prose between.\n\n**For complex topics, use multiple SVG calls** — break the explanation into a series of smaller diagrams rather than one dense diagram. Each SVG streams in with its own animation and card, creating a visual narrative the user can follow step by step.\n\n**Always add prose between diagrams** — never stack multiple SVG calls back-to-back without text. Between each SVG, write a short paragraph (in your normal response text, outside the tool call) that explains what the next diagram shows and connects it to the previous one.\n\n**Promise only what you deliver** — if your response text says \"here are three diagrams\", you must include all three tool calls. Never promise a follow-up diagram and omit it. If you can only fit one diagram, adjust your text to match. One complete diagram is better than three promised and one delivered.\n\n#### Flowchart\n\nFor sequential processes, cause-and-effect, decision trees.\n\n**Planning**: Size boxes to fit their text generously. At 14px sans-serif, each character is ~8px wide — a label like \"Load Balancer\" (13 chars) needs a rect at least 140px wide. When in doubt, make boxes wider and leave more space between them. Cramped diagrams are the most common failure mode.\n\n**Special characters are wider**: Chemical formulas (C₆H₁₂O₆), math notation (∑, ∫, √), subscripts/superscripts via <tspan> with dy/baseline-shift, and Unicode symbols all render wider than plain Latin characters. For labels containing formulas or special notation, add 30-50% extra width to your estimate. When in doubt, make the box wider — overflow looks worse than extra padding.\n\n**Spacing**: 60px minimum between boxes, 24px padding inside boxes, 12px between text and edges. Leave 10px gap between arrowheads and box edges. Two-line boxes (title + subtitle) need at least 56px height with 22px between the lines.\n\n**Vertical text placement**: Every `<text>` inside a box needs `dominant-baseline=\"central\"`, with y set to the *centre* of the slot it sits in. Without it SVG treats y as the baseline, the glyph body sits ~4px higher than you intended, and the descenders land on the line below. Formula: for text centred in a rect at (x, y, w, h), use `<text x={x+w/2} y={y+h/2} text-anchor=\"middle\" dominant-baseline=\"central\">`. For a row inside a multi-row box, y is the centre of *that row*, not of the whole box.\n\n**Layout**: Prefer single-direction flows (all top-down or all left-right). Keep diagrams simple — max 4-5 nodes per diagram. The widget is narrow (~680px) so complex layouts break.\n\n**When the prompt itself is over budget**: if the user lists 6+ components (\"draw me auth, products, orders, payments, gateway, queue\"), don't draw all of them in one pass — you'll get overlapping boxes and arrows through text, every time. Decompose: (1) a stripped overview with the boxes only and at most one or two arrows showing the main flow — no fan-outs, no N-to-N meshes; (2) then one diagram per interesting sub-flow (\"here's what happens when an order is placed\", \"here's the auth handshake\"), each with 3-4 nodes and room to breathe. Count the nouns before you draw. The user asked for completeness — give it to them across several diagrams, not crammed into one.\n\n**Cycles don't get drawn as rings.** If the last stage feeds back into the first (Krebs cycle, event loop, GC mark-and-sweep, TCP retransmit), your instinct is to place the stages around a circle. Don't. Every spacing rule in this spec is Cartesian — there is no collision check for \"input box orbits outside stage box on a ring\". You will get satellite boxes overlapping the stages they feed, labels sitting on the dashed circle, and tangential arrows that point nowhere. The ring is decoration; the loop is conveyed by the return arrow.\n\nBuild a stepper in HTML. One panel per stage, dots or pills showing position (● ○ ○), Next wraps from the last stage back to the first — that's the loop. Each panel owns its inputs and products: an event loop's pending callbacks live *inside* the Poll panel, not floating next to a box on a ring. Nothing collides because nothing shares the canvas. Only fall back to a linear SVG (stages in a row, curved `<path>` return arrow) when there's one input and one output total and no per-stage detail to show.\n\n**Feedback loops in linear flows:** Don't draw a physical arrow traversing the layout (it fights the flow direction and clips edges). Instead:\n- Small `↻` glyph + text near the cycle point: `<text>↻ returns to start</text>`\n- Or restructure the whole diagram as a circle if the cycle IS the point\n\n**Arrows:** A line from A to B must not cross any other box or label. If the direct path crosses something, route around with an L-bend: `<path d=\"M x1 y1 L x1 ymid L x2 ymid L x2 y2\"/>`. Place arrow labels in clear space, not on the midpoint.\n\nKeep all nodes the same height when they have the same content type (e.g. all single-line boxes = 44px, all two-line boxes = 56px).\n\n**Flowchart components** — use these patterns consistently:\n\n*Single-line node* (44px tall): title only. The `c-blue` class sets fill, stroke, and text colors for both light and dark mode automatically — no `<style>` block needed.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about T-cells')\">\n  <rect x=\"100\" y=\"20\" width=\"180\" height=\"44\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"190\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"central\">T-cells</text>\n</g>\n```\n\n*Two-line node* (56px tall): bold title + muted subtitle.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about dendritic cells')\">\n  <rect x=\"100\" y=\"20\" width=\"200\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"200\" y=\"38\" text-anchor=\"middle\" dominant-baseline=\"central\">Dendritic cells</text>\n  <text class=\"ts\" x=\"200\" y=\"56\" text-anchor=\"middle\" dominant-baseline=\"central\">Detect foreign antigens</text>\n</g>\n```\n\n*Connector* (no label — meaning is clear from source + target):\n```svg\n<line x1=\"200\" y1=\"76\" x2=\"200\" y2=\"120\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n*Neutral node* (gray, for start/end/generic steps): use `class=\"box\"` for auto-themed fill/stroke, and default text classes.\n\nMake all nodes clickable by default — wrap in `<g class=\"node\" onclick=\"sendPrompt('...')\">`. The hover effect is built in.\n\n#### Structural diagram\n\nFor concepts where physical or logical containment matters — things inside other things.\n\n**When to use**: The explanation depends on *where* processes happen. Examples: how a cell works (organelles inside a cell), how a file system works (blocks inside inodes inside partitions), how a building's HVAC works (ducts inside floors inside a building), how a CPU cache hierarchy works (L1 inside core, L2 shared).\n\n**Core idea**: Large rounded rects are containers. Smaller rects inside them are regions or sub-structures. Text labels describe what happens in each region. Arrows show flow between regions or from external inputs/outputs.\n\n**Container rules**:\n- Outermost container: large rounded rect, rx=20-24, lightest fill (50 stop), 0.5px stroke (600 stop). Label at top-left inside, 14px bold.\n- Inner regions: medium rounded rects, rx=8-12, next shade fill (100-200 stop). Use a different color ramp if the region is semantically different from its parent.\n- 20px minimum padding inside every container — text and inner regions must not touch the container edges.\n- Max 2-3 nesting levels. Deeper nesting gets unreadable at 680px width.\n\n**Layout**:\n- Place inner regions side by side within the container, with 16px+ gap between them.\n- External inputs (sunlight, water, data, requests) sit outside the container with arrows pointing in.\n- External outputs sit outside with arrows pointing out.\n- Keep external labels short — one word or a short phrase. Details go in the prose between diagrams.\n\n**What goes inside regions**: Text only — the region name (14px bold) and a short description of what happens there (12px). Don't put flowchart-style boxes inside regions. Don't draw illustrations or icons inside.\n\n**Structural container example** (library branch with two side-by-side regions, an internal labeled arrow, and an external input). ViewBox 700x320, horizontal layout, color classes handle both light and dark mode — no `<style>` block:\n```svg\n<defs>\n  <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n<!-- Outer container -->\n<g class=\"c-green\">\n  <rect x=\"120\" y=\"30\" width=\"560\" height=\"260\" rx=\"20\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"400\" y=\"62\" text-anchor=\"middle\">Library branch</text>\n  <text class=\"ts\" x=\"400\" y=\"80\" text-anchor=\"middle\">Main floor</text>\n</g>\n<!-- Inner: Circulation desk -->\n<g class=\"c-teal\">\n  <rect x=\"150\" y=\"100\" width=\"220\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"260\" y=\"130\" text-anchor=\"middle\">Circulation desk</text>\n  <text class=\"ts\" x=\"260\" y=\"148\" text-anchor=\"middle\">Checkouts, returns</text>\n</g>\n<!-- Inner: Reading room -->\n<g class=\"c-amber\">\n  <rect x=\"450\" y=\"100\" width=\"210\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"555\" y=\"130\" text-anchor=\"middle\">Reading room</text>\n  <text class=\"ts\" x=\"555\" y=\"148\" text-anchor=\"middle\">Seating, reference</text>\n</g>\n<!-- Arrow between inner boxes with label -->\n<text class=\"ts\" x=\"410\" y=\"175\" text-anchor=\"middle\">Books</text>\n<line x1=\"370\" y1=\"185\" x2=\"448\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n<!-- External input: New acq. — text vertically aligned with arrow -->\n<text class=\"ts\" x=\"40\" y=\"185\" text-anchor=\"middle\">New acq.</text>\n<line x1=\"75\" y1=\"185\" x2=\"118\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n**Color in structural diagrams**: Nested regions need distinct ramps — `c-{ramp}` classes resolve to fixed fill/stroke stops, so the same class on parent and child gives identical fills and flattens the hierarchy. Pick a *related* ramp for inner structures (e.g. Green for the library envelope, Teal for the circulation desk inside it) and a *contrasting* ramp for a region that does something functionally different (e.g. Amber for the reading room). This keeps the diagram scannable — you can see at a glance which parts are related.\n\n**Database schemas / ERDs — use mermaid.js, not SVG.** A schema table is a header plus N field rows plus typed columns plus crow's-foot connectors. That is a text-layout problem and hand-placing it in SVG fails the same way every time. mermaid.js `erDiagram` does layout, cardinality, and connector routing for free. ERDs only; everything else stays in SVG.\n\n```\nerDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has\n  USERS {\n    uuid id PK\n    string email\n    timestamp created_at\n  }\n  POSTS {\n    uuid id PK\n    uuid user_id FK\n    string title\n  }\n```\n\nUse HTML for ERDs. Import and initialize in a `<script type=\"module\">`. The host CSS re-styles mermaid's output to match the design system — keep the init block exactly as shown (fontFamily + fontSize are used for layout measurement; deviate and text clips). After rendering, replace sharp-cornered entity `<path>` elements with rounded `<rect rx=\"8\">` to match the design system, and strip borders from attribute rows (only the outer container and header row keep visible borders — alternating fill colors separate the rows):\n```html\n<style>\n#erd svg.erDiagram .divider path { stroke-opacity: 0.5; }\n#erd svg.erDiagram .row-rect-odd path,\n#erd svg.erDiagram .row-rect-odd rect,\n#erd svg.erDiagram .row-rect-even path,\n#erd svg.erDiagram .row-rect-even rect { stroke: none !important; }\n</style>\n<div id=\"erd\"></div>\n<script type=\"module\">\nimport mermaid from 'https://esm.sh/mermaid@11/dist/mermaid.esm.min.mjs';\nconst dark = matchMedia('(prefers-color-scheme: dark)').matches;\nawait document.fonts.ready;\nmermaid.initialize({\n  startOnLoad: false,\n  theme: 'base',\n  fontFamily: '\"Anthropic Sans\", sans-serif',\n  themeVariables: {\n    darkMode: dark,\n    fontSize: '13px',\n    fontFamily: '\"Anthropic Sans\", sans-serif',\n    lineColor: dark ? '#9c9a92' : '#73726c',\n    textColor: dark ? '#c2c0b6' : '#3d3d3a',\n  },\n});\nconst { svg } = await mermaid.render('erd-svg', `erDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has`);\ndocument.getElementById('erd').innerHTML = svg;\n\n// Round only the outermost entity box corners (not internal row stripes)\ndocument.querySelectorAll('#erd svg.erDiagram .node').forEach(node => {\n  const firstPath = node.querySelector('path[d]');\n  if (!firstPath) return;\n  const d = firstPath.getAttribute('d');\n  const nums = d.match(/-?[\\d.]+/g)?.map(Number);\n  if (!nums || nums.length < 8) return;\n  const xs = [nums[0], nums[2], nums[4], nums[6]];\n  const ys = [nums[1], nums[3], nums[5], nums[7]];\n  const x = Math.min(...xs), y = Math.min(...ys);\n  const w = Math.max(...xs) - x, h = Math.max(...ys) - y;\n  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');\n  rect.setAttribute('x', x); rect.setAttribute('y', y);\n  rect.setAttribute('width', w); rect.setAttribute('height', h);\n  rect.setAttribute('rx', '8');\n  for (const a of ['fill', 'stroke', 'stroke-width', 'class', 'style']) {\n    if (firstPath.hasAttribute(a)) rect.setAttribute(a, firstPath.getAttribute(a));\n  }\n  firstPath.replaceWith(rect);\n});\n\n// Strip borders from attribute rows (mermaid v11: .row-rect-odd / .row-rect-even)\ndocument.querySelectorAll('#erd svg.erDiagram .row-rect-odd path, #erd svg.erDiagram .row-rect-even path').forEach(p => {\n  p.setAttribute('stroke', 'none');\n});\n</script>\n```\n\nWorks identically for `classDiagram` — swap the diagram source; init stays the same.\n\n#### Illustrative diagram\n\nFor building *intuition*. The subject might be physical (an engine, a lung) or completely abstract (attention, recursion, gradient descent) — what matters is that a spatial drawing conveys the mechanism better than labelled boxes would. These are the diagrams that make someone go \"oh, *that's* what it's doing.\"\n\n**Two flavours, same rules:**\n- **Physical subjects** get drawn as simplified versions of themselves. Cross-sections, cutaways, schematics. A water heater is a tank with a burner underneath. A lung is a branching tree in a cavity. You're drawing *the thing*, stylised.\n- **Abstract subjects** get drawn as *spatial metaphors*. You're inventing a shape for something that doesn't have one — but the shape should make the mechanism obvious. A transformer is a stack of horizontal slabs with a bright thread of attention connecting tokens across layers. A hash function is a funnel scattering items into a row of buckets. The call stack is literally a stack of frames growing and shrinking. Embeddings are dots clustering in space. The metaphor *is* the explanation.\n\nThis is the most ambitious diagram type and the one Claude is best at. Lean into it. Use colour for intensity (a hot attention weight glows amber, a cold one stays gray). Use repetition for scale (many small circles = many parameters).\n\n**Prefer interactive over static.** A static cross-section is a good answer; a cross-section you can *operate* is a great one. The decision rule: if the real-world system has a control, give the diagram that control. A water heater has a thermostat — so give the user a slider that shifts the hot/cold boundary, a toggle that fires the burner and animates convection currents. An LLM has input tokens — let the user click one and watch the attention weights re-fan. A cache has a hit rate — let them drag it and watch latency change. Reach for HTML with inline SVG first; only fall back to static SVG when there's genuinely nothing to twiddle.\n\n**When NOT to use**: The user is asking for a *reference*, not an *intuition*. \"What are the components of a transformer\" wants labelled boxes — that's a structural diagram. \"Walk me through our CI pipeline\" wants sequential steps — that's a flowchart. Also skip this when the metaphor would be arbitrary rather than revealing: drawing \"the cloud\" as a cloud shape or \"microservices\" as little houses doesn't teach anything about how they work. If the drawing doesn't make the *mechanism* clearer, don't draw it.\n\n**Fidelity ceiling**: These are schematics, not illustrations. Every shape should read at a glance. If a `<path>` needs more than ~6 segments to draw, simplify it. A tank is a rounded rect, not a Bézier portrait of a tank. A flame is three triangles, not a fire. Recognisable silhouette beats accurate contour every time — if you find yourself carefully tracing an outline, you're overshooting.\n\n**Core principle**: Draw the mechanism, not a diagram *about* the mechanism. Spatial arrangement carries the meaning; labels annotate. A good illustrative diagram works with the labels removed.\n\n**What changes from flowchart/structural rules**:\n\n- **Shapes are freeform.** Use `<path>`, `<ellipse>`, `<circle>`, `<polygon>`, and curved lines to represent real forms. A water tank is a tall rect with rounded bottom. A heart valve is a pair of curved paths. A circuit trace is a thin polyline. You are not limited to rounded rects.\n- **Layout follows the subject's geometry**, not a grid. If the thing is tall and narrow (a water heater, a thermometer), the diagram is tall and narrow. If it's wide and flat (a PCB, a geological cross-section), the diagram is wide. Let the subject dictate proportions within the 680px viewBox width.\n- **Color encodes intensity**, not category. For physical subjects: warm ramps (amber, coral, red) = heat/energy/pressure, cool ramps (blue, teal) = cold/calm, gray = inert structure. For abstract subjects: warm = active/high-weight/attended-to, cool or gray = dormant/low-weight/ignored. A user should be able to glance at the diagram and see *where the action is* without reading a single label.\n- **Layering and overlap are encouraged — for shapes.** Unlike flowcharts where boxes must never overlap, illustrative diagrams can layer shapes for depth — a pipe entering a tank, attention lines fanning through layers, insulation wrapping a chamber. Use z-ordering (later in source = on top) deliberately.\n- **Text is the exception — never let a stroke cross it.** The overlap permission is for shapes only. Every label needs 8px of clear air between its baseline/cap-height and the nearest stroke. Don't solve this with a background rect — solve it by *placing the text somewhere else*. Labels go in the quiet regions: above the drawing, below it, in the margin with a leader line, or in the gap between two fans of lines. If there is no quiet region, the drawing is too dense — remove something or split into two diagrams.\n- **Small shape-based indicators are allowed** when they communicate physical state. Triangles for flames. Circles for bubbles or particles. Wavy lines for steam or heat radiation. Parallel lines for vibration. These aren't decoration — they tell the user what's happening physically. Keep them simple: basic SVG primitives, not detailed illustrations.\n- **One gradient per diagram is permitted** — the only exception to the global no-gradients rule — and only to show a *continuous* physical property across a region (temperature stratification in a tank, pressure drop along a pipe, concentration in a solution). It must be a single `<linearGradient>` between exactly two stops from the same colour ramp. No radial gradients, no multi-stop fades, no gradient-as-aesthetic. If two stacked flat-fill rects communicate the same thing, do that instead.\n- **Animation is permitted for interactive HTML versions.** Use CSS `@keyframes` animating only `transform` and `opacity`. Keep loops under ~2s, and wrap every animation in `@media (prefers-reduced-motion: no-preference)` so it's opt-out by default. Animations should show how the system *behaves* — convection current, rotation, flow — not just move for the sake of moving. No physics engines or heavy libraries.\n\nAll core rules still apply (viewBox 680px, dark mode mandatory, 14/12px text, pre-built classes, arrow marker, clickable nodes).\n\n**Label placement**:\n- Place labels *outside* the drawn object when possible, with a thin leader line (0.5px dashed, `var(--t)` stroke) pointing to the relevant part. This keeps the illustration uncluttered.\n- For large internal zones (like temperature regions in a tank), labels can sit inside if there's ample clear space — minimum 20px from any edge.\n- External labels sit in the margin area or above/below the object. **Pick one side for labels and put them all there** — at 680px wide you don't have room for a drawing *and* label columns on both sides. Reserve at least 140px of horizontal margin on the label side. Labels on the left are the ones that clip: `text-anchor=\"end\"` extends leftward from x, and with multi-line callouts it's very easy to blow past x=0 without noticing. Default to right-side labels with `text-anchor=\"start\"` unless the subject's geometry forces otherwise. Use `class=\"ts\"` (12px) for callouts, `class=\"th\"` (14px medium) for major component names.\n\n**Composition approach**:\n1. Start with the main object's silhouette — the largest shape, centered in the viewBox.\n2. Add internal structure: chambers, pipes, membranes, mechanical parts.\n3. Add external connections: pipes entering/exiting, arrows showing flow direction, labels for inputs and outputs.\n4. Add state indicators last: color fills showing temperature/pressure/concentration, small animated elements showing movement or energy.\n5. Leave generous whitespace around the object for labels — don't crowd annotations against the viewBox edges.\n\n**Static vs interactive**: Static cutaways and cross-sections work best as pure SVG. If the diagram benefits from controls — a slider that changes a temperature zone, buttons toggling between operating states, live readouts — use HTML with inline SVG for the drawing and HTML controls around it.\n\n**Illustrative diagram example** — interactive water heater cross-section with vivid physical-realism colors, animated convection currents, and controls. Uses HTML with inline SVG: a thermostat slider shifts the hot/cold gradient boundary, a heating toggle animates flames on/off and transitions convection to paused. viewBox is 680x560; tank occupies x=180..440, leaving 140px+ of right margin for labels. Smooth convection paths use `stroke-dasharray:5 5` at ~1.6s for a gentle flow feel. A warm-glow overlay on the hot zone pulses subtly when heating is on. Flame shapes use warm gradient fills and clean opacity transitions. Labels sit along the right margin with leader lines.\n```html\n<style>\n  @keyframes conv { to { stroke-dashoffset: -20; } }\n  @keyframes flicker { 0%,100%{opacity:1} 50%{opacity:.82} }\n  @keyframes glow { 0%,100%{opacity:.3} 50%{opacity:.6} }\n  .conv { stroke-dasharray:5 5; animation: conv var(--dur,1.6s) linear infinite; transition: opacity .5s; }\n  .conv.off { opacity:0; animation-play-state:paused; }\n  #flames path { transition: opacity .5s; }\n  #flames.off path { opacity:0; animation:none; }\n  #flames path:nth-child(odd)  { animation: flicker .6s ease-in-out infinite; }\n  #flames path:nth-child(even) { animation: flicker .8s ease-in-out infinite .15s; }\n  #warm-glow { animation: glow 3s ease-in-out infinite; transition: opacity .5s; }\n  #warm-glow.off { opacity:0; animation:none; }\n  .toggle-track { position:relative;width:32px;height:18px;background:var(--color-border-secondary);border-radius:9px;transition:background .2s;display:inline-block; }\n  .toggle-track:has(input:checked) { background:var(--color-text-info); }\n  #heat-toggle:checked + span { transform:translateX(14px); }\n</style>\n<svg width=\"100%\" viewBox=\"0 0 680 560\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker>\n    <linearGradient id=\"tg\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop id=\"gh\" offset=\"40%\" stop-color=\"#E8593C\" stop-opacity=\"0.45\"/>\n      <stop id=\"gc\" offset=\"40%\" stop-color=\"#3B8BD4\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n    <linearGradient id=\"fg1\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#E85D24\"/><stop offset=\"60%\" stop-color=\"#F2A623\"/><stop offset=\"100%\" stop-color=\"#FCDE5A\"/></linearGradient>\n    <linearGradient id=\"fg2\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#D14520\"/><stop offset=\"50%\" stop-color=\"#EF8B2C\"/><stop offset=\"100%\" stop-color=\"#F9CB42\"/></linearGradient>\n    <linearGradient id=\"pipe-h\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#D05538\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#D05538\" stop-opacity=\".08\"/></linearGradient>\n    <linearGradient id=\"pipe-c\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#3B8BD4\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#3B8BD4\" stop-opacity=\".08\"/></linearGradient>\n    <clipPath id=\"tc\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\"/></clipPath>\n  </defs>\n  <!-- Tank fill -->\n  <g clip-path=\"url(#tc)\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" fill=\"url(#tg)\"/></g>\n  <!-- Warm glow overlay (pulses when heating) -->\n  <g clip-path=\"url(#tc)\"><rect id=\"warm-glow\" x=\"180\" y=\"55\" width=\"260\" height=\"160\" fill=\"#E8593C\" opacity=\".3\"/></g>\n  <!-- Tank shell (double stroke for solidity) -->\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"2.5\" opacity=\".25\"/>\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"1\"/>\n  <!-- Hot pipe out (top right) -->\n  <rect x=\"370\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-h)\"/>\n  <path d=\"M378 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <!-- Cold pipe in + dip tube (top left) -->\n  <rect x=\"234\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-c)\"/>\n  <path d=\"M242 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <path d=\"M242 55V395\" stroke=\"var(--t)\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\".5\"/>\n  <!-- Convection currents (curved paths at different speeds) -->\n  <path class=\"conv\" style=\"--dur:1.6s\" fill=\"none\" stroke=\"#D05538\" stroke-width=\"1\" opacity=\".5\" d=\"M350 380C355 320,365 240,358 140Q355 110,340 100\"/>\n  <path class=\"conv\" style=\"--dur:2.1s\" fill=\"none\" stroke=\"#C04828\" stroke-width=\".8\" opacity=\".35\" d=\"M300 390C308 340,320 260,315 170Q312 130,298 115\"/>\n  <path class=\"conv\" style=\"--dur:2.6s\" fill=\"none\" stroke=\"#B05535\" stroke-width=\".7\" opacity=\".3\" d=\"M380 370C382 310,388 230,382 150Q378 120,365 110\"/>\n  <!-- Burner bar -->\n  <rect x=\"188\" y=\"454\" width=\"244\" height=\"5\" rx=\"2\" fill=\"var(--t)\" opacity=\".6\"/>\n  <rect x=\"220\" y=\"462\" width=\"180\" height=\"6\" rx=\"3\" fill=\"var(--t)\" opacity=\".3\"/>\n  <!-- Flames (gradient-filled organic shapes) -->\n  <g id=\"flames\">\n    <path d=\"M240,454Q248,430 252,438Q256,424 260,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M278,454Q285,426 290,434Q295,418 300,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M320,454Q328,428 333,436Q338,420 342,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M360,454Q367,430 371,438Q375,422 380,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M398,454Q404,434 408,440Q412,428 416,454Z\" fill=\"url(#fg1)\"/>\n  </g>\n  <!-- Labels (right margin) -->\n  <g class=\"node\" onclick=\"sendPrompt('How does hot water exit the tank?')\">\n    <line class=\"leader\" x1=\"386\" y1=\"34\" x2=\"468\" y2=\"70\"/><circle cx=\"386\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"74\">Hot water outlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the cold water inlet work?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"34\" x2=\"468\" y2=\"140\"/><circle cx=\"250\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"144\">Cold water inlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the dip tube do?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"260\" x2=\"468\" y2=\"220\"/><circle cx=\"250\" cy=\"260\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"224\">Dip tube</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the thermostat control?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"250\" x2=\"468\" y2=\"300\"/><circle cx=\"440\" cy=\"250\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"304\">Thermostat</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What material is the tank made of?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"380\" x2=\"468\" y2=\"380\"/><circle cx=\"440\" cy=\"380\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"384\">Tank wall</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the gas burner heat water?')\">\n    <line class=\"leader\" x1=\"432\" y1=\"454\" x2=\"468\" y2=\"454\"/><circle cx=\"432\" cy=\"454\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"458\">Heating element</text></g>\n</svg>\n<div style=\"display:flex;align-items:center;gap:16px;margin:12px 0 0;font-size:13px;color:var(--color-text-secondary)\">\n  <label style=\"display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none\">\n    <span class=\"toggle-track\">\n      <input type=\"checkbox\" id=\"heat-toggle\" checked onchange=\"toggleHeat(this.checked)\" style=\"position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;margin:0\">\n      <span style=\"position:absolute;top:2px;left:2px;width:14px;height:14px;background:#fff;border-radius:50%;transition:transform .2s;pointer-events:none\"></span>\n    </span>\n    Heating\n  </label>\n  <span>Thermostat</span>\n  <input type=\"range\" id=\"temp-slider\" min=\"10\" max=\"90\" value=\"40\" style=\"flex:1\" oninput=\"setTemp(this.value)\">\n  <span id=\"temp-label\" style=\"min-width:36px;text-align:right\">40%</span>\n</div>\n<script>\nfunction setTemp(v) {\n  document.getElementById('gh').setAttribute('offset', v+'%');\n  document.getElementById('gc').setAttribute('offset', v+'%');\n  document.getElementById('temp-label').textContent = v+'%';\n}\nfunction toggleHeat(on) {\n  document.getElementById('flames').classList.toggle('off', !on);\n  document.getElementById('warm-glow').classList.toggle('off', !on);\n  document.querySelectorAll('.conv').forEach(p => p.classList.toggle('off', !on));\n}\n</script>\n```\n\n**Illustrative example — abstract subject** (attention in a transformer). Same rules, no physical object. A row of tokens at the bottom, one query token highlighted, weight-scaled lines fanning to every other token. Caption sits below the fan — clear of every stroke — not inside it.\n```svg\n<rect class=\"c-purple\" x=\"60\" y=\"40\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"80\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"120\" width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<text class=\"ts\" x=\"72\" y=\"57\" >Layer 3</text>\n<text class=\"ts\" x=\"72\" y=\"97\" >Layer 2</text>\n<text class=\"ts\" x=\"72\" y=\"137\">Layer 1</text>\n\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"116\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.25\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"228\" y2=\"146\" stroke-width=\"1.5\" opacity=\"0.4\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"340\" y2=\"146\" stroke-width=\"4\"   opacity=\"1.0\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"452\" y2=\"146\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"564\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.2\"/>\n\n<g class=\"node\" onclick=\"sendPrompt('What do the attention weights mean?')\">\n  <rect class=\"c-gray\"  x=\"80\"  y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"192\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-amber\" x=\"304\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"1\"/>\n  <rect class=\"c-gray\"  x=\"416\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"528\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <text class=\"ts\" x=\"116\" y=\"252\" text-anchor=\"middle\">the</text>\n  <text class=\"ts\" x=\"228\" y=\"252\" text-anchor=\"middle\">cat</text>\n  <text class=\"th\" x=\"340\" y=\"252\" text-anchor=\"middle\">sat</text>\n  <text class=\"ts\" x=\"452\" y=\"252\" text-anchor=\"middle\">on</text>\n  <text class=\"ts\" x=\"564\" y=\"252\" text-anchor=\"middle\">the</text>\n</g>\n\n<text class=\"ts\" x=\"340\" y=\"300\" text-anchor=\"middle\">Line thickness = attention weight from \"sat\" to each token</text>\n```\n\nNote what's *not* here: no boxes labelled \"multi-head attention\", no arrows labelled \"Q/K/V\". Those belong in the structural diagram. This one is about the *feeling* of attention — one token looking at every other token with varying intensity.\n\nThese are starting points, not ceilings. For the water heater: add a thermostat slider, animate the convection current, toggle heating vs standby. For the attention diagram: let the user click any token to become the query, scrub through layers, animate the weights settling. The goal is always to *show* how the thing works, not just *label* it.\n\n\n## UI components\n\n### Aesthetic\nFlat, clean, white surfaces. Minimal 0.5px borders. Generous whitespace. No gradients, no shadows (except functional focus rings). Everything should feel native to claude.ai — like it belongs on the page, not embedded from somewhere else.\n\n### Tokens\n- Borders: always `0.5px solid var(--color-border-tertiary)` (or `-secondary` for emphasis)\n- Corner radius: `var(--border-radius-md)` for most elements, `var(--border-radius-lg)` for cards\n- Cards: white bg (`var(--color-background-primary)`), 0.5px border, radius-lg, padding 1rem 1.25rem\n- Form elements (input, select, textarea, button, range slider) are pre-styled — write bare tags. Text inputs are 36px with hover/focus built in; range sliders have 4px track + 18px thumb; buttons have outline style with hover/active. Only add inline styles to override (e.g., different width).\n- Buttons: pre-styled with transparent bg, 0.5px border-secondary, hover bg-secondary, active scale(0.98). If it triggers sendPrompt, append a ↗ arrow.\n- **Round every displayed number.** JS float math leaks artifacts — `0.1 + 0.2` gives `0.30000000000000004`, `7 * 1.1` gives `7.700000000000001`. Any number that reaches the screen (slider readouts, stat card values, axis labels, data-point labels, tooltips, computed totals) must go through `Math.round()`, `.toFixed(n)`, or `Intl.NumberFormat`. Pick the precision that makes sense for the context — integers for counts, 1–2 decimals for percentages, `toLocaleString()` for currency. For range sliders, also set `step=\"1\"` (or step=\"0.1\" etc.) so the input itself emits round values.\n- Spacing: use rem for vertical rhythm (1rem, 1.5rem, 2rem), px for component-internal gaps (8px, 12px, 16px)\n- Box-shadows: none, except `box-shadow: 0 0 0 Npx` focus rings on inputs\n\n### Metric cards\nFor summary numbers (revenue, count, percentage) — surface card with muted 13px label above, 24px/500 number below. `background: var(--color-background-secondary)`, no border, `border-radius: var(--border-radius-md)`, padding 1rem. Use in grids of 2-4 with `gap: 12px`. Distinct from raised cards (which have white bg + border).\n\n### Layout\n- Editorial (explanatory content): no card wrapper, prose flows naturally\n- Card (bounded objects like a contact record, receipt): single raised card wraps the whole thing\n- Don't put tables here — output them as markdown in your response text\n\n**Grid overflow:** `grid-template-columns: 1fr` has `min-width: auto` by default — children with large min-content push the column past the container. Use `minmax(0, 1fr)` to clamp.\n\n**Table overflow:** Tables with many columns auto-expand past `width: 100%` if cell contents exceed it. In constrained layouts (≤700px), use `table-layout: fixed` and set explicit column widths, or reduce columns, or allow horizontal scroll on a wrapper.\n\n### Mockup presentation\nContained mockups — mobile screens, chat threads, single cards, modals, small UI components — should sit on a background surface (`var(--color-background-secondary)` container with `border-radius: var(--border-radius-lg)` and padding, or a device frame) so they don't float naked on the widget canvas. Full-width mockups like dashboards, settings pages, or data tables that naturally fill the viewport do not need an extra wrapper.\n\n### 1. Interactive explainer — learn how something works\n*\"Explain how compound interest works\" / \"Teach me about sorting algorithms\"*\n\nUse HTML for the interactive controls — sliders, buttons, live state displays, charts. Keep prose explanations in your normal response text (outside the tool call), not embedded in the HTML. No card wrapper. Whitespace is the container.\n\n```html\n<div style=\"display: flex; align-items: center; gap: 12px; margin: 0 0 1.5rem;\">\n  <label style=\"font-size: 14px; color: var(--color-text-secondary);\">Years</label>\n  <input type=\"range\" min=\"1\" max=\"40\" value=\"20\" id=\"years\" style=\"flex: 1;\" />\n  <span style=\"font-size: 14px; font-weight: 500; min-width: 24px;\" id=\"years-out\">20</span>\n</div>\n\n<div style=\"display: flex; align-items: baseline; gap: 8px; margin: 0 0 1.5rem;\">\n  <span style=\"font-size: 14px; color: var(--color-text-secondary);\">£1,000 →</span>\n  <span style=\"font-size: 24px; font-weight: 500;\" id=\"result\">£3,870</span>\n</div>\n\n<div style=\"margin: 2rem 0; position: relative; height: 240px;\">\n  <canvas id=\"chart\"></canvas>\n</div>\n```\n\nUse `sendPrompt()` to let users ask follow-ups: `sendPrompt('What if I increase the rate to 10%?')`\n\n### 2. Compare options — decision making\n*\"Compare pricing and features of these products\" / \"Help me choose between React and Vue\"*\n\nUse HTML. Side-by-side card grid for options. Highlight differences with semantic colors. Interactive elements for filtering or weighting.\n\n- Use `repeat(auto-fit, minmax(160px, 1fr))` for responsive columns\n- Each option in a card. Use badges for key differentiators.\n- Add `sendPrompt()` buttons: `sendPrompt('Tell me more about the Pro plan')`\n- Don't put comparison tables inside this tool — output them as regular markdown tables in your response text instead. The tool is for the visual card grid only.\n- When one option is recommended or \"most popular\", accent its card with `border: 2px solid var(--color-border-info)` only (2px is deliberate — the only exception to the 0.5px rule, used to accent featured items) — keep the same background and border as the other cards. Add a small badge (e.g. \"Most popular\") above or inside the card header using `background: var(--color-background-info); color: var(--color-text-info); font-size: 12px; padding: 4px 12px; border-radius: var(--border-radius-md)`.\n\n### 3. Data record — bounded UI object\n*\"Show me a Salesforce contact card\" / \"Create a receipt for this order\"*\n\nUse HTML. Wrap the entire thing in a single raised card. All content is sans-serif since it's pure UI. Use an avatar/initials circle for people (see example below).\n\n```html\n<div style=\"background: var(--color-background-primary); border-radius: var(--border-radius-lg); border: 0.5px solid var(--color-border-tertiary); padding: 1rem 1.25rem;\">\n  <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 16px;\">\n    <div style=\"width: 44px; height: 44px; border-radius: 50%; background: var(--color-background-info); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 14px; color: var(--color-text-info);\">MR</div>\n    <div>\n      <p style=\"font-weight: 500; font-size: 15px; margin: 0;\">Maya Rodriguez</p>\n      <p style=\"font-size: 13px; color: var(--color-text-secondary); margin: 0;\">VP of Engineering</p>\n    </div>\n  </div>\n  <div style=\"border-top: 0.5px solid var(--color-border-tertiary); padding-top: 12px;\">\n    <table style=\"width: 100%; font-size: 13px;\">\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Email</td><td style=\"text-align: right; padding: 4px 0; color: var(--color-text-info);\">m.rodriguez@acme.com</td></tr>\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Phone</td><td style=\"text-align: right; padding: 4px 0;\">+1 (415) 555-0172</td></tr>\n    </table>\n  </div>\n</div>\n```\n",
      "uuid": "585f9ba2-bc2d-4f6b-9b80-f8d7bb1c3335"
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

Now I have a good understanding of the design system. Let me construct a comprehensive, interactive HTML visualization for the 237U(d,p)238U surrogate reaction method. 

The key physics to convey:

**The Problem:**
- 237U has a t₁/₂ = 6.75 days → can't make a stable neutron-capture target
- Need to know σ(n,x) for 237U for nuclear astrophysics and reactor physics

**The Surrogate Method:**
The desired reaction: n + 237U → 238U* → fission / γ
The surrogate reaction: d + 237U → p + 238U* → fission / γ


The (d,p) reaction transfers a neutron from the deuteron to the target nucleus, producing the same compound nucleus as direct neutron capture would. The Weisskopf-Ewing approximation then relates the measured (d,p) cross section to the desired (n,x) cross section by accounting for the decay probabilities of the compound nucleus across different spin and parity states.

The experiment uses inverse kinematics with a 237U beam at 10-30 MeV/u incident on deuterated gas in an active-target TPC, where the gas serves as both target and detector. By measuring the outgoing proton energy, we can determine the excitation energy of the 238U* compound nucleus and infer information about the neutron-induced reaction channels.

Now I'm planning an interactive visualization to walk through the surrogate reaction method—starting with why we can't directly measure 237U(n,γ) and (n,f) cross sections, then showing how the (d,p) reaction populates the same compound nucleus, and finally illustrating what decay channels we observe and how we extract the cross sections from the measured data.

Building the interactive widget...

</details>

Now I have the design system. Let me build a high-fidelity interactive explainer.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T09:40:19.753800Z",
  "stop_timestamp": "2026-04-12T09:42:28.021780Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01QS9kn1nYT6eEmLtvgJX1TP",
  "name": "visualize:show_widget",
  "input": {
    "title": "U237_dp_surrogate_reaction_explainer",
    "loading_messages": [
      "Setting up the nuclear canvas",
      "Placing 237U on the beam line",
      "Priming the compound nucleus",
      "Wiring the decay channels"
    ],
    "widget_code": "\n<style>\n  @keyframes beam   { 0%{transform:translateX(0)}  100%{transform:translateX(220px)} }\n  @keyframes proton { 0%{transform:translate(0,0)} 100%{transform:translate(140px,-60px)} }\n  @keyframes fiss   { 0%{transform:translate(0,0); opacity:1} 100%{transform:translate(var(--fx),var(--fy)); opacity:0.1} }\n  @keyframes gamma  { 0%{transform:scale(0); opacity:1} 100%{transform:scale(1.6); opacity:0} }\n  @keyframes pulse  { 0%,100%{r:22} 50%{r:26} }\n  @keyframes neutronIn { 0%{opacity:1;transform:translate(0,0)} 100%{opacity:0;transform:translate(28px,0)} }\n  @keyframes glow   { 0%,100%{opacity:0.4} 50%{opacity:0.9} }\n  @keyframes appear { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }\n  .step-dot { width:10px;height:10px;border-radius:50%;background:var(--color-border-secondary);transition:background .3s,transform .3s; }\n  .step-dot.active { background:var(--color-text-info);transform:scale(1.3); }\n  .tab-btn { padding:6px 14px;border-radius:20px;border:0.5px solid var(--color-border-secondary);background:transparent;color:var(--color-text-secondary);font-size:13px;cursor:pointer;transition:all .2s; }\n  .tab-btn.active { background:var(--color-background-info);color:var(--color-text-info);border-color:transparent; }\n  .info-box { background:var(--color-background-secondary);border:0.5px solid var(--color-border-tertiary);border-radius:10px;padding:12px 16px;font-size:13px;color:var(--color-text-secondary);line-height:1.65;animation:appear .35s ease; }\n  .eq-box { background:var(--color-background-secondary);border-left:3px solid var(--color-border-info);border-radius:0 8px 8px 0;padding:10px 16px;font-family:var(--font-mono);font-size:13px;color:var(--color-text-primary); }\n  .tag { display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:500; }\n  .tag-blue { background:var(--color-background-info);color:var(--color-text-info); }\n  .tag-amber { background:#FAEEDA;color:#633806; }\n  .tag-red { background:#FCEBEB;color:#501313; }\n  .tag-green { background:#EAF3DE;color:#173404; }\n  svg text { font-family: var(--font-sans); }\n  .nav-btn { padding:7px 18px;border-radius:8px;border:0.5px solid var(--color-border-secondary);background:var(--color-background-secondary);color:var(--color-text-primary);font-size:13px;cursor:pointer;transition:all .2s; }\n  .nav-btn:hover { background:var(--color-background-tertiary); }\n  .nav-btn:disabled { opacity:0.35;cursor:default; }\n</style>\n\n<h2 class=\"sr-only\" style=\"position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)\">Interactive explainer: 237U(d,p)238U surrogate reaction method</h2>\n\n<div style=\"padding:1rem 0\">\n\n<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:16px\">\n  <div>\n    <span style=\"font-size:16px;font-weight:500;color:var(--color-text-primary)\">²³⁷U(d,p)²³⁸U — Surrogate Reaction</span>\n    <span class=\"tag tag-blue\" style=\"margin-left:8px\">Direct reaction spectroscopy</span>\n  </div>\n  <div style=\"display:flex;gap:6px\" id=\"step-dots\">\n    <div class=\"step-dot active\"></div><div class=\"step-dot\"></div>\n    <div class=\"step-dot\"></div><div class=\"step-dot\"></div><div class=\"step-dot\"></div>\n  </div>\n</div>\n\n<div id=\"scene-container\" style=\"width:100%;overflow:hidden;border-radius:10px;background:var(--color-background-secondary);border:0.5px solid var(--color-border-tertiary)\">\n  <svg id=\"main-svg\" width=\"100%\" viewBox=\"0 0 680 260\" style=\"display:block\"></svg>\n</div>\n\n<div id=\"info-panel\" style=\"margin-top:12px\"></div>\n\n<div style=\"display:flex;justify-content:space-between;align-items:center;margin-top:14px\">\n  <button class=\"nav-btn\" id=\"prev-btn\" onclick=\"changeStep(-1)\" disabled>← Prev</button>\n  <div style=\"display:flex;gap:8px;flex-wrap:wrap;justify-content:center\" id=\"tab-btns\">\n    <button class=\"tab-btn active\" onclick=\"goStep(0)\">Challenge</button>\n    <button class=\"tab-btn\" onclick=\"goStep(1)\">Reaction</button>\n    <button class=\"tab-btn\" onclick=\"goStep(2)\">Compound nucleus</button>\n    <button class=\"tab-btn\" onclick=\"goStep(3)\">Equation</button>\n    <button class=\"tab-btn\" onclick=\"goStep(4)\">What we measure</button>\n  </div>\n  <button class=\"nav-btn\" id=\"next-btn\" onclick=\"changeStep(1)\">Next →</button>\n</div>\n\n</div>\n\n<script>\nlet step = 0;\nconst totalSteps = 5;\n\nconst steps = [\n  {\n    title: \"The challenge: ²³⁷U can't be a neutron target\",\n    svg: drawStep0,\n    info: `<div class=\"info-box\">\n      <strong style=\"color:var(--color-text-primary)\">Why is σ(n,x) on ²³⁷U hard to measure?</strong><br>\n      ²³⁷U has a half-life of only <span class=\"tag tag-amber\">6.75 days</span>. By the time you manufacture a pure target and set up the beamline, the material has significantly decayed.<br><br>\n      Yet knowing its <em>neutron capture</em> and <em>neutron-induced fission</em> cross sections is critical for fast-reactor fuel cycles and transmutation of nuclear waste.<br><br>\n      <span class=\"tag tag-blue\">Solution</span>&nbsp; Use a <em>surrogate</em> reaction that populates the same compound nucleus ²³⁸U* — without needing a free neutron beam on ²³⁷U.\n    </div>`\n  },\n  {\n    title: \"The surrogate: d + ²³⁷U → p + ²³⁸U*\",\n    svg: drawStep1,\n    info: `<div class=\"info-box\">\n      A deuteron <strong style=\"color:var(--color-text-primary)\">(d = p + n)</strong> hits ²³⁷U. The proton escapes; the <em>neutron is stripped</em> onto ²³⁷U — producing the same excited compound nucleus <strong style=\"color:var(--color-text-primary)\">²³⁸U*</strong> as neutron capture.<br><br>\n      <div style=\"display:flex;gap:8px;flex-wrap:wrap;margin-top:8px\">\n        <div style=\"flex:1;min-width:180px;background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 12px;font-size:12px\">\n          <div style=\"font-weight:500;margin-bottom:4px\">Desired reaction</div>\n          n + ²³⁷U → ²³⁸U* → x<br>\n          <span class=\"tag tag-red\" style=\"margin-top:4px;display:inline-block\">Target: t½ = 6.75 d ✗</span>\n        </div>\n        <div style=\"flex:1;min-width:180px;background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 12px;font-size:12px\">\n          <div style=\"font-weight:500;margin-bottom:4px\">Surrogate (d,p)</div>\n          d + ²³⁷U → p + ²³⁸U*<br>\n          <span class=\"tag tag-green\" style=\"margin-top:4px;display:inline-block\">Same CN populated ✓</span>\n        </div>\n      </div>\n      <br>Experiment uses <strong>inverse kinematics</strong>: the ²³⁷U beam (~15 MeV/u) hits a deuterium gas target (or CD₄ in an active-target TPC).\n    </div>`\n  },\n  {\n    title: \"²³⁸U* decay: the compound nucleus branches\",\n    svg: drawStep2,\n    info: `<div class=\"info-box\">\n      The compound nucleus ²³⁸U* can de-excite via competing channels. Each has a decay probability P<sub>decay</sub>(J<sup>π</sup>):<br><br>\n      <div style=\"display:flex;gap:8px;flex-wrap:wrap;margin-top:4px\">\n        <span class=\"tag tag-amber\">γ emission</span>&nbsp; ²³⁸U* → ²³⁸U + γ &nbsp;(radiative capture)\n      </div>\n      <div style=\"display:flex;gap:8px;flex-wrap:wrap;margin-top:6px\">\n        <span class=\"tag tag-red\">Fission</span>&nbsp; ²³⁸U* → A₁ + A₂ &nbsp;(prompt fission fragments)\n      </div>\n      <div style=\"display:flex;gap:8px;flex-wrap:wrap;margin-top:6px\">\n        <span class=\"tag tag-blue\">Discrete states</span>&nbsp; ²³⁸U* → ²³⁸U (excited) + γ cascade &nbsp;(nuclear structure!)\n      </div>\n      <br>By detecting the <em>outgoing proton</em> (giving excitation energy E*) AND the decay product simultaneously, we separate contributions from different J<sup>π</sup> states.\n    </div>`\n  },\n  {\n    title: \"The surrogate equation (Escher et al. 2012)\",\n    svg: drawStep3,\n    info: `<div class=\"info-box\">\n      <div class=\"eq-box\">σ(n,x) = Σ<sub>J,π</sub> σ<sub>CN</sub>(n+²³⁷U ; J<sup>π</sup>) × P<sub>decay</sub>(²³⁸U* ; J<sup>π</sup>)</div><br>\n      <strong style=\"color:var(--color-text-primary)\">σ<sub>CN</sub></strong> — compound-nucleus formation cross section, <em>calculable</em> from the optical model (Hauser-Feshbach).<br><br>\n      <strong style=\"color:var(--color-text-primary)\">P<sub>decay</sub></strong> — measured from the surrogate experiment: fraction of ²³⁸U* (at given E*) that decays into channel x.<br><br>\n      <span class=\"tag tag-amber\">⚠ W-E approximation</span> The equation assumes P<sub>decay</sub> is <em>independent of J<sup>π</sup></em>. This is the Weisskopf-Ewing limit. For actinides near threshold, spin-parity effects can introduce ~10–30% uncertainty (noted in the slide footnote). &nbsp;<a href=\"https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.84.353\" style=\"color:var(--color-text-info);font-size:12px\">Escher et al., Rev. Mod. Phys. 84, 353 (2012) ↗</a>\n    </div>`\n  },\n  {\n    title: \"What the experiment extracts\",\n    svg: drawStep4,\n    info: `<div class=\"info-box\">\n      From the ²³⁷U(d,p) reaction at 10–30 MeV/u (inverse kinematics, active-target TPC):<br><br>\n      <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:6px\">\n        <div style=\"background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n          <div class=\"tag tag-blue\" style=\"margin-bottom:5px\">Nuclear structure</div>\n          <strong>C²S, J<sup>π</sup></strong> of ²³⁸U states via DWBA analysis of proton angular distributions\n        </div>\n        <div style=\"background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n          <div class=\"tag tag-amber\" style=\"margin-bottom:5px\">Surrogate output</div>\n          <strong>σ(²³⁷U(n,f))</strong> and <strong>σ(²³⁷U(n,γ))</strong> extracted from P<sub>fission</sub>(E*) and P<sub>γ</sub>(E*)\n        </div>\n        <div style=\"background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n          <div class=\"tag tag-red\" style=\"margin-bottom:5px\">TPC necessity</div>\n          Exotic ²³⁷U beam is <em>weak</em>; active-target TPC recovers luminosity — gas = target + detector\n        </div>\n        <div style=\"background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n          <div class=\"tag tag-green\" style=\"margin-bottom:5px\">ML-PID required</div>\n          Overlapping dE/dx bands → ResNet-based particle ID distinguishes p, d, t, α in TPC tracks\n        </div>\n      </div>\n    </div>`\n  }\n];\n\nfunction nucleus(svg, cx, cy, r, nColor, pColor, label, sublabel) {\n  const g = document.createElementNS(\"http://www.w3.org/2000/svg\",\"g\");\n  for(let i=0;i<12;i++){\n    const angle = (i/12)*2*Math.PI;\n    const rr = r*0.55 + (i%3)*r*0.18;\n    const c = document.createElementNS(\"http://www.w3.org/2000/svg\",\"circle\");\n    c.setAttribute(\"cx\", cx+rr*Math.cos(angle));\n    c.setAttribute(\"cy\", cy+rr*Math.sin(angle));\n    c.setAttribute(\"r\", r*0.22);\n    c.setAttribute(\"fill\", i%2===0 ? pColor : nColor);\n    c.setAttribute(\"opacity\",\"0.92\");\n    g.appendChild(c);\n  }\n  const txt = document.createElementNS(\"http://www.w3.org/2000/svg\",\"text\");\n  txt.setAttribute(\"x\",cx); txt.setAttribute(\"y\",cy+r+16);\n  txt.setAttribute(\"text-anchor\",\"middle\");\n  txt.setAttribute(\"font-size\",\"13\"); txt.setAttribute(\"font-weight\",\"500\");\n  txt.setAttribute(\"fill\",\"var(--color-text-primary)\");\n  txt.textContent = label;\n  g.appendChild(txt);\n  if(sublabel){\n    const s = document.createElementNS(\"http://www.w3.org/2000/svg\",\"text\");\n    s.setAttribute(\"x\",cx); s.setAttribute(\"y\",cy+r+30);\n    s.setAttribute(\"text-anchor\",\"middle\");\n    s.setAttribute(\"font-size\",\"11\");\n    s.setAttribute(\"fill\",\"var(--color-text-secondary)\");\n    s.textContent = sublabel;\n    g.appendChild(s);\n  }\n  svg.appendChild(g);\n  return g;\n}\n\nfunction arrow(svg, x1,y1,x2,y2, color, label) {\n  const g = document.createElementNS(\"http://www.w3.org/2000/svg\",\"g\");\n  const defs = svg.querySelector(\"defs\") || (() => { const d=document.createElementNS(\"http://www.w3.org/2000/svg\",\"defs\"); svg.prepend(d); return d; })();\n  const mid = defs.parentNode.querySelector(\"#arr-m\");\n  if(!mid){\n    const mk = document.createElementNS(\"http://www.w3.org/2000/svg\",\"marker\");\n    mk.setAttribute(\"id\",\"arr-m\"); mk.setAttribute(\"viewBox\",\"0 0 10 10\");\n    mk.setAttribute(\"refX\",\"8\"); mk.setAttribute(\"refY\",\"5\");\n    mk.setAttribute(\"markerWidth\",\"5\"); mk.setAttribute(\"markerHeight\",\"5\");\n    mk.setAttribute(\"orient\",\"auto-start-reverse\");\n    const p = document.createElementNS(\"http://www.w3.org/2000/svg\",\"path\");\n    p.setAttribute(\"d\",\"M2 1L8 5L2 9\"); p.setAttribute(\"fill\",\"none\");\n    p.setAttribute(\"stroke\",\"context-stroke\"); p.setAttribute(\"stroke-width\",\"1.5\");\n    p.setAttribute(\"stroke-linecap\",\"round\");\n    mk.appendChild(p); defs.appendChild(mk);\n  }\n  const line = document.createElementNS(\"http://www.w3.org/2000/svg\",\"line\");\n  line.setAttribute(\"x1\",x1); line.setAttribute(\"y1\",y1);\n  line.setAttribute(\"x2\",x2); line.setAttribute(\"y2\",y2);\n  line.setAttribute(\"stroke\",color||\"var(--color-text-secondary)\");\n  line.setAttribute(\"stroke-width\",\"2\");\n  line.setAttribute(\"marker-end\",\"url(#arr-m)\");\n  g.appendChild(line);\n  if(label){\n    const t = document.createElementNS(\"http://www.w3.org/2000/svg\",\"text\");\n    const mx=(x1+x2)/2, my=(y1+y2)/2;\n    t.setAttribute(\"x\",mx); t.setAttribute(\"y\",my-6);\n    t.setAttribute(\"text-anchor\",\"middle\"); t.setAttribute(\"font-size\",\"11\");\n    t.setAttribute(\"fill\",\"var(--color-text-secondary)\");\n    t.textContent = label;\n    g.appendChild(t);\n  }\n  svg.appendChild(g);\n}\n\nfunction svgText(svg,x,y,text,opts={}) {\n  const t = document.createElementNS(\"http://www.w3.org/2000/svg\",\"text\");\n  t.setAttribute(\"x\",x); t.setAttribute(\"y\",y);\n  t.setAttribute(\"text-anchor\",opts.anchor||\"middle\");\n  t.setAttribute(\"font-size\",opts.size||13);\n  t.setAttribute(\"fill\",opts.fill||\"var(--color-text-primary)\");\n  if(opts.weight) t.setAttribute(\"font-weight\",opts.weight);\n  t.textContent = text;\n  svg.appendChild(t);\n  return t;\n}\n\nfunction clearSVG() {\n  const svg = document.getElementById(\"main-svg\");\n  while(svg.firstChild) svg.removeChild(svg.firstChild);\n  return svg;\n}\n\nfunction drawStep0() {\n  const svg = clearSVG();\n  svg.setAttribute(\"viewBox\",\"0 0 680 260\");\n  \n  const bg = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n  bg.setAttribute(\"width\",\"680\"); bg.setAttribute(\"height\",\"260\");\n  bg.setAttribute(\"fill\",\"var(--color-background-secondary)\"); svg.appendChild(bg);\n  \n  svgText(svg,340,28,\"The challenge: measuring σ on a short-lived nucleus\",{size:14,weight:500});\n  \n  const card = (x,y,w,h,col) => {\n    const r = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n    r.setAttribute(\"x\",x); r.setAttribute(\"y\",y); r.setAttribute(\"width\",w); r.setAttribute(\"height\",h);\n    r.setAttribute(\"rx\",\"10\"); r.setAttribute(\"fill\",col||\"var(--color-background-primary)\");\n    r.setAttribute(\"stroke\",\"var(--color-border-tertiary)\"); r.setAttribute(\"stroke-width\",\"0.5\");\n    svg.appendChild(r);\n  };\n  \n  card(50,50,180,150,\"#E6F1FB\");\n  svgText(svg,140,75,\"Desired route\",{size:12,weight:500,fill:\"#0C447C\"});\n  svgText(svg,140,100,\"n + ²³⁷U →\",{size:13,fill:\"#185FA5\"});\n  svgText(svg,140,118,\"²³⁸U* → σ(n,x)\",{size:13,fill:\"#185FA5\"});\n  const stop1 = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n  stop1.setAttribute(\"x\",72); stop1.setAttribute(\"y\",135); stop1.setAttribute(\"width\",136);\n  stop1.setAttribute(\"height\",52); stop1.setAttribute(\"rx\",\"6\");\n  stop1.setAttribute(\"fill\",\"#FCEBEB\"); stop1.setAttribute(\"stroke\",\"#F7C1C1\"); stop1.setAttribute(\"stroke-width\",\"0.5\");\n  svg.appendChild(stop1);\n  svgText(svg,140,155,\"⚠ ²³⁷U target\",{size:11,fill:\"#A32D2D\"});\n  svgText(svg,140,169,\"t½ = 6.75 days\",{size:11,fill:\"#A32D2D\"});\n  svgText(svg,140,183,\"Decays before use\",{size:10,fill:\"#791F1F\"});\n  \n  card(250,50,180,150,\"#EAF3DE\");\n  svgText(svg,340,75,\"Surrogate route\",{size:12,weight:500,fill:\"#27500A\"});\n  svgText(svg,340,100,\"d + ²³⁷U →\",{size:13,fill:\"#3B6D11\"});\n  svgText(svg,340,118,\"p + ²³⁸U*\",{size:13,fill:\"#3B6D11\"});\n  const ok1 = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n  ok1.setAttribute(\"x\",272); ok1.setAttribute(\"y\",135); ok1.setAttribute(\"width\",136);\n  ok1.setAttribute(\"height\",52); ok1.setAttribute(\"rx\",\"6\");\n  ok1.setAttribute(\"fill\",\"#EAF3DE\"); ok1.setAttribute(\"stroke\",\"#C0DD97\"); ok1.setAttribute(\"stroke-width\",\"0.5\");\n  svg.appendChild(ok1);\n  svgText(svg,340,155,\"✓ Same CN: ²³⁸U*\",{size:11,fill:\"#3B6D11\"});\n  svgText(svg,340,169,\"No neutron beam\",{size:11,fill:\"#3B6D11\"});\n  svgText(svg,340,183,\"needed\",{size:10,fill:\"#27500A\"});\n  \n  arrow(svg,235,125,250,125,\"#888780\");\n  \n  card(460,50,180,150,\"#FAEEDA\");\n  svgText(svg,550,75,\"Goal\",{size:12,weight:500,fill:\"#633806\"});\n  svgText(svg,550,100,\"Extract σ(²³⁷U(n,γ))\",{size:11,fill:\"#854F0B\"});\n  svgText(svg,550,116,\"and σ(²³⁷U(n,f))\",{size:11,fill:\"#854F0B\"});\n  svgText(svg,550,135,\"for reactor &\",{size:11,fill:\"#854F0B\"});\n  svgText(svg,550,151,\"waste transmutation\",{size:11,fill:\"#854F0B\"});\n  svgText(svg,550,170,\"physics\",{size:11,fill:\"#854F0B\"});\n  \n  arrow(svg,435,125,460,125,\"#888780\");\n  \n  svgText(svg,340,230,\"Reference: Escher et al., Rev. Mod. Phys. 84, 353 (2012)\",{size:11,fill:\"var(--color-text-secondary)\"});\n}\n\nfunction drawStep1() {\n  const svg = clearSVG();\n  svg.setAttribute(\"viewBox\",\"0 0 680 260\");\n  const bg = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n  bg.setAttribute(\"width\",\"680\"); bg.setAttribute(\"height\",\"260\");\n  bg.setAttribute(\"fill\",\"var(--color-background-secondary)\"); svg.appendChild(bg);\n  svgText(svg,340,24,\"(d,p) neutron-stripping reaction in inverse kinematics\",{size:13,weight:500});\n  \n  const beam = document.createElementNS(\"http://www.w3.org/2000/svg\",\"g\");\n  const beamLine = document.createElementNS(\"http://www.w3.org/2000/svg\",\"line\");\n  beamLine.setAttribute(\"x1\",\"10\"); beamLine.setAttribute(\"y1\",\"100\");\n  beamLine.setAttribute(\"x2\",\"660\"); beamLine.setAttribute(\"y2\",\"100\");\n  beamLine.setAttribute(\"stroke\",\"var(--color-border-secondary)\");\n  beamLine.setAttribute(\"stroke-width\",\"1\"); beamLine.setAttribute(\"stroke-dasharray\",\"4 4\");\n  svg.appendChild(beamLine);\n  svgText(svg,30,92,\"²³⁷U beam\",{size:11,fill:\"var(--color-text-secondary)\",anchor:\"start\"});\n  svgText(svg,30,105,\"~15 MeV/u\",{size:10,fill:\"var(--color-text-secondary)\",anchor:\"start\"});\n  \n  nucleus(svg,160,100,28,\"#185FA5\",\"#E24B4A\",\"²³⁷U\",\"beam\");\n  \n  const deutTarget = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n  deutTarget.setAttribute(\"x\",\"300\"); deutTarget.setAttribute(\"y\",\"60\");\n  deutTarget.setAttribute(\"width\",\"60\"); deutTarget.setAttribute(\"height\",\"80\");\n  deutTarget.setAttribute(\"rx\",\"6\"); deutTarget.setAttribute(\"fill\",\"#FAEEDA\");\n  deutTarget.setAttribute(\"stroke\",\"#EF9F27\"); deutTarget.setAttribute(\"stroke-width\",\"1\");\n  svg.appendChild(deutTarget);\n  svgText(svg,330,90,\"D₂\",{size:14,weight:500,fill:\"#633806\"});\n  svgText(svg,330,106,\"target\",{size:10,fill:\"#854F0B\"});\n  svgText(svg,330,120,\"(or CD₄\",{size:10,fill:\"#854F0B\"});\n  svgText(svg,330,133,\"in TPC)\",{size:10,fill:\"#854F0B\"});\n  \n  arrow(svg,190,100,298,100,\"#185FA5\",\"collision\");\n  \n  const cnCircle = document.createElementNS(\"http://www.w3.org/2000/svg\",\"circle\");\n  cnCircle.setAttribute(\"cx\",\"475\"); cnCircle.setAttribute(\"cy\",\"100\");\n  cnCircle.setAttribute(\"r\",\"30\"); cnCircle.setAttribute(\"fill\",\"#FAEEDA\");\n  cnCircle.setAttribute(\"stroke\",\"#EF9F27\"); cnCircle.setAttribute(\"stroke-width\",\"1.5\");\n  cnCircle.style.animation = \"glow 1.5s ease-in-out infinite\";\n  svg.appendChild(cnCircle);\n  svgText(svg,475,95,\"²³⁸U*\",{size:13,weight:500,fill:\"#633806\"});\n  svgText(svg,475,110,\"excited\",{size:10,fill:\"#854F0B\"});\n  \n  arrow(svg,362,100,443,100,\"#888780\");\n  \n  const protonLine = document.createElementNS(\"http://www.w3.org/2000/svg\",\"line\");\n  protonLine.setAttribute(\"x1\",\"505\"); protonLine.setAttribute(\"y1\",\"85\");\n  protonLine.setAttribute(\"x2\",\"600\"); protonLine.setAttribute(\"y2\",\"45\");\n  protonLine.setAttribute(\"stroke\",\"#E24B4A\"); protonLine.setAttribute(\"stroke-width\",\"2\");\n  protonLine.setAttribute(\"marker-end\",\"url(#arr-m)\");\n  svg.appendChild(protonLine);\n  svgText(svg,590,36,\"p (detected)\",{size:11,fill:\"#A32D2D\",anchor:\"middle\"});\n  \n  const nLine = document.createElementNS(\"http://www.w3.org/2000/svg\",\"line\");\n  nLine.setAttribute(\"x1\",\"362\"); nLine.setAttribute(\"y1\",\"100\");\n  nLine.setAttribute(\"x2\",\"443\"); nLine.setAttribute(\"y2\",\"100\");\n  nLine.setAttribute(\"stroke\",\"#185FA5\"); nLine.setAttribute(\"stroke-width\",\"1.5\");\n  nLine.setAttribute(\"stroke-dasharray\",\"3 3\");\n  svg.appendChild(nLine);\n  svgText(svg,403,88,\"n stripped\",{size:10,fill:\"#185FA5\"});\n  \n  svgText(svg,160,155,\"²³⁷U beam\",{size:11,fill:\"var(--color-text-secondary)\"});\n  svgText(svg,330,155,\"D₂/CD₄ gas\",{size:11,fill:\"var(--color-text-secondary)\"});\n  svgText(svg,475,155,\"compound\",{size:11,fill:\"var(--color-text-secondary)\"});\n  svgText(svg,475,168,\"nucleus\",{size:11,fill:\"var(--color-text-secondary)\"});\n  \n  svgText(svg,340,215,\"Deuteron = p + n. The p flies forward; n is transferred to ²³⁷U → ²³⁸U*\",{size:12,fill:\"var(--color-text-secondary)\"});\n  svgText(svg,340,232,\"This IS the neutron capture reaction — same compound nucleus!\",{size:12,fill:\"#185FA5\"});\n}\n\nfunction drawStep2() {\n  const svg = clearSVG();\n  svg.setAttribute(\"viewBox\",\"0 0 680 260\");\n  const bg = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n  bg.setAttribute(\"width\",\"680\"); bg.setAttribute(\"height\",\"260\");\n  bg.setAttribute(\"fill\",\"var(--color-background-secondary)\"); svg.appendChild(bg);\n  svgText(svg,340,24,\"²³⁸U* decay channels\",{size:13,weight:500});\n  \n  const cn = document.createElementNS(\"http://www.w3.org/2000/svg\",\"circle\");\n  cn.setAttribute(\"cx\",\"200\"); cn.setAttribute(\"cy\",\"130\"); cn.setAttribute(\"r\",\"38\");\n  cn.setAttribute(\"fill\",\"#FAEEDA\"); cn.setAttribute(\"stroke\",\"#EF9F27\"); cn.setAttribute(\"stroke-width\",\"1.5\");\n  cn.style.animation = \"glow 2s ease-in-out infinite\";\n  svg.appendChild(cn);\n  svgText(svg,200,124,\"²³⁸U*\",{size:14,weight:500,fill:\"#633806\"});\n  svgText(svg,200,139,\"E*, J, π\",{size:11,fill:\"#854F0B\"});\n  \n  arrow(svg,240,95,360,55,\"#E24B4A\");\n  svgText(svg,310,55,\"γ (radiative capture)\",{size:11,fill:\"#A32D2D\",anchor:\"start\"});\n  const gpill = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n  gpill.setAttribute(\"x\",\"345\"); gpill.setAttribute(\"y\",\"58\"); gpill.setAttribute(\"width\",\"180\");\n  gpill.setAttribute(\"height\",\"30\"); gpill.setAttribute(\"rx\",\"6\");\n  gpill.setAttribute(\"fill\",\"#FCEBEB\"); gpill.setAttribute(\"stroke\",\"#F09595\"); gpill.setAttribute(\"stroke-width\",\"0.5\");\n  svg.appendChild(gpill);\n  svgText(svg,435,78,\"²³⁸U + γ  (n,γ channel)\",{size:11,fill:\"#501313\"});\n  \n  arrow(svg,238,130,350,130,\"#E24B4A\");\n  const fpill = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n  fpill.setAttribute(\"x\",\"350\"); fpill.setAttribute(\"y\",\"115\"); fpill.setAttribute(\"width\",\"190\");\n  fpill.setAttribute(\"height\",\"30\"); fpill.setAttribute(\"rx\",\"6\");\n  fpill.setAttribute(\"fill\",\"#FCEBEB\"); fpill.setAttribute(\"stroke\",\"#F09595\"); fpill.setAttribute(\"stroke-width\",\"0.5\");\n  svg.appendChild(fpill);\n  svgText(svg,445,135,\"A₁ + A₂  (n,f channel)\",{size:11,fill:\"#501313\"});\n  svgText(svg,445,148,\"fission fragments\",{size:10,fill:\"#791F1F\"});\n  \n  arrow(svg,240,162,360,200,\"#185FA5\");\n  const dpill = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n  dpill.setAttribute(\"x\",\"345\"); dpill.setAttribute(\"y\",\"188\"); dpill.setAttribute(\"width\",\"200\");\n  dpill.setAttribute(\"height\",\"30\"); dpill.setAttribute(\"rx\",\"6\");\n  dpill.setAttribute(\"fill\",\"#E6F1FB\"); dpill.setAttribute(\"stroke\",\"#B5D4F4\"); dpill.setAttribute(\"stroke-width\",\"0.5\");\n  svg.appendChild(dpill);\n  svgText(svg,445,203,\"²³⁸U (discrete) + γ\",{size:11,fill:\"#042C53\"});\n  svgText(svg,445,216,\"structure info: C²S, Jπ\",{size:10,fill:\"#185FA5\"});\n  \n  svgText(svg,200,190,\"Populating different\",{size:10,fill:\"var(--color-text-secondary)\"});\n  svgText(svg,200,202,\"E*, J, π states\",{size:10,fill:\"var(--color-text-secondary)\"});\n  svgText(svg,200,214,\"via (d,p) kinematics\",{size:10,fill:\"var(--color-text-secondary)\"});\n  \n  svgText(svg,340,246,\"Each channel has a probability P_decay(J,π) — measured in the surrogate experiment\",{size:11,fill:\"var(--color-text-secondary)\"});\n}\n\nfunction drawStep3() {\n  const svg = clearSVG();\n  svg.setAttribute(\"viewBox\",\"0 0 680 260\");\n  const bg = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n  bg.setAttribute(\"width\",\"680\"); bg.setAttribute(\"height\",\"260\");\n  bg.setAttribute(\"fill\",\"var(--color-background-secondary)\"); svg.appendChild(bg);\n  svgText(svg,340,24,\"The surrogate formula\",{size:13,weight:500});\n  \n  const eqBg = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n  eqBg.setAttribute(\"x\",\"40\"); eqBg.setAttribute(\"y\",\"40\"); eqBg.setAttribute(\"width\",\"600\");\n  eqBg.setAttribute(\"height\",\"50\"); eqBg.setAttribute(\"rx\",\"10\");\n  eqBg.setAttribute(\"fill\",\"var(--color-background-primary)\");\n  eqBg.setAttribute(\"stroke\",\"#B5D4F4\"); eqBg.setAttribute(\"stroke-width\",\"1\");\n  svg.appendChild(eqBg);\n  svgText(svg,340,72,\"σ(n,x) = Σ_{J,π}  σ_CN(n + ²³⁷U; J,π) × P_decay(²³⁸U*; J,π)\",{size:14,weight:500,fill:\"var(--color-text-primary)\"});\n  \n  const annotations = [\n    {x:130,y:100,label:\"Cross section\",sub:\"to be determined\",col:\"#E24B4A\"},\n    {x:285,y:100,label:\"Sum over all J,π\",sub:\"spin-parity states\",col:\"#854F0B\"},\n    {x:430,y:100,label:\"σ_CN from optical\",sub:\"model (calculable)\",col:\"#185FA5\"},\n    {x:580,y:100,label:\"Decay prob.\",sub:\"from experiment\",col:\"#3B6D11\"},\n  ];\n  const dots = [130,285,430,580];\n  dots.forEach((x,i) => {\n    const dl = document.createElementNS(\"http://www.w3.org/2000/svg\",\"line\");\n    dl.setAttribute(\"x1\",x); dl.setAttribute(\"y1\",90);\n    dl.setAttribute(\"x2\",x); dl.setAttribute(\"y2\",108);\n    dl.setAttribute(\"stroke\",\"var(--color-border-secondary)\"); dl.setAttribute(\"stroke-width\",\"1\");\n    svg.appendChild(dl);\n  });\n  annotations.forEach((a,i) => {\n    const ab = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n    ab.setAttribute(\"x\",a.x-60); ab.setAttribute(\"y\",\"108\"); ab.setAttribute(\"width\",\"120\");\n    ab.setAttribute(\"height\",\"40\"); ab.setAttribute(\"rx\",\"6\");\n    ab.setAttribute(\"fill\",\"var(--color-background-primary)\");\n    ab.setAttribute(\"stroke\",\"var(--color-border-tertiary)\"); ab.setAttribute(\"stroke-width\",\"0.5\");\n    svg.appendChild(ab);\n    svgText(svg,a.x,122,a.label,{size:10,weight:500,fill:a.col});\n    svgText(svg,a.x,135,a.sub,{size:10,fill:\"var(--color-text-secondary)\"});\n  });\n  \n  svgText(svg,340,172,\"Weisskopf-Ewing approximation: P_decay independent of J,π\",{size:12,fill:\"#854F0B\"});\n  const weBg = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n  weBg.setAttribute(\"x\",\"100\"); weBg.setAttribute(\"y\",\"180\"); weBg.setAttribute(\"width\",\"480\");\n  weBg.setAttribute(\"height\",\"30\"); weBg.setAttribute(\"rx\",\"8\");\n  weBg.setAttribute(\"fill\",\"#FAEEDA\"); weBg.setAttribute(\"stroke\",\"#FAC775\"); weBg.setAttribute(\"stroke-width\",\"0.5\");\n  svg.appendChild(weBg);\n  svgText(svg,340,200,\"⚠ W-E limit: valid when many J,π states contribute (high E*). Breaks near threshold.\",{size:11,fill:\"#633806\"});\n  \n  svgText(svg,340,240,\"Escher et al., Rev. Mod. Phys. 84, 353 (2012) — canonical surrogate review\",{size:11,fill:\"var(--color-text-secondary)\"});\n}\n\nfunction drawStep4() {\n  const svg = clearSVG();\n  svg.setAttribute(\"viewBox\",\"0 0 680 260\");\n  const bg = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n  bg.setAttribute(\"width\",\"680\"); bg.setAttribute(\"height\",\"260\");\n  bg.setAttribute(\"fill\",\"var(--color-background-secondary)\"); svg.appendChild(bg);\n  svgText(svg,340,24,\"Experimental chain: from TPC tracks to cross sections\",{size:13,weight:500});\n  \n  const boxes = [\n    {x:20,y:50,w:120,h:70,title:\"²³⁷U beam\",sub:\"~15 MeV/u\\ninverse kin.\",col:\"#E6F1FB\",tc:\"#042C53\",sc:\"#185FA5\"},\n    {x:165,y:50,w:120,h:70,title:\"Active-TPC\",sub:\"CD₄ gas\\ntarget+detector\",col:\"#FAEEDA\",tc:\"#412402\",sc:\"#854F0B\"},\n    {x:310,y:50,w:120,h:70,title:\"p detected\",sub:\"Gives E*, θ\\n→ E* of ²³⁸U*\",col:\"#FCEBEB\",tc:\"#501313\",sc:\"#A32D2D\"},\n    {x:455,y:50,w:120,h:70,title:\"Decay detect\",sub:\"γ or fission\\nfragments\",col:\"#EAF3DE\",tc:\"#173404\",sc:\"#3B6D11\"},\n    {x:600,y:50,w:68,h:70,title:\"σ(n,x)\",sub:\"extracted!\",col:\"#FAEEDA\",tc:\"#412402\",sc:\"#854F0B\"},\n  ];\n  boxes.forEach((b,i) => {\n    const r = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n    r.setAttribute(\"x\",b.x); r.setAttribute(\"y\",b.y); r.setAttribute(\"width\",b.w);\n    r.setAttribute(\"height\",b.h); r.setAttribute(\"rx\",\"8\");\n    r.setAttribute(\"fill\",b.col); r.setAttribute(\"stroke\",\"var(--color-border-tertiary)\"); r.setAttribute(\"stroke-width\",\"0.5\");\n    svg.appendChild(r);\n    svgText(svg,b.x+b.w/2,b.y+18,b.title,{size:11,weight:500,fill:b.tc});\n    const subs = b.sub.split(\"\\n\");\n    subs.forEach((s,j) => svgText(svg,b.x+b.w/2,b.y+32+j*14,s,{size:10,fill:b.sc}));\n    if(i<boxes.length-1) {\n      arrow(svg,b.x+b.w+2,b.y+35,b.x+b.w+10,b.y+35,\"#888780\");\n    }\n  });\n  \n  svgText(svg,340,138,\"ML-PID (ResNet) needed inside TPC:\",{size:12,weight:500,fill:\"var(--color-text-primary)\"});\n  \n  const pidBg = document.createElementNS(\"http://www.w3.org/2000/svg\",\"rect\");\n  pidBg.setAttribute(\"x\",\"40\"); pidBg.setAttribute(\"y\",\"148\"); pidBg.setAttribute(\"width\",\"600\");\n  pidBg.setAttribute(\"height\",\"60\"); pidBg.setAttribute(\"rx\",\"8\");\n  pidBg.setAttribute(\"fill\",\"var(--color-background-primary)\");\n  pidBg.setAttribute(\"stroke\",\"var(--color-border-tertiary)\"); pidBg.setAttribute(\"stroke-width\",\"0.5\");\n  svg.appendChild(pidBg);\n  \n  const pids = [\n    {x:100,col:\"#E24B4A\",lbl:\"proton (p)\"},\n    {x:210,col:\"#185FA5\",lbl:\"deuteron (d)\"},\n    {x:335,col:\"#3B6D11\",lbl:\"triton (t)\"},\n    {x:455,col:\"#854F0B\",lbl:\"α particle\"},\n    {x:575,col:\"#A32D2D\",lbl:\"heavy frag.\"},\n  ];\n  pids.forEach(p => {\n    const c = document.createElementNS(\"http://www.w3.org/2000/svg\",\"circle\");\n    c.setAttribute(\"cx\",p.x); c.setAttribute(\"cy\",170); c.setAttribute(\"r\",\"8\");\n    c.setAttribute(\"fill\",p.col); c.setAttribute(\"opacity\",\"0.85\");\n    svg.appendChild(c);\n    svgText(svg,p.x,195,p.lbl,{size:9,fill:p.col});\n  });\n  svgText(svg,340,215,\"dE/dx bands overlap → ML ResNet classifies tracks from dE/dx + Bρ + ToF features\",{size:11,fill:\"var(--color-text-secondary)\"});\n  svgText(svg,340,235,\"Structure result: C²S (spectroscopic factor), Jπ of ²³⁸U states via DWBA analysis\",{size:11,fill:\"#185FA5\"});\n}\n\nconst drawFns = [drawStep0,drawStep1,drawStep2,drawStep3,drawStep4];\n\nfunction renderStep(s) {\n  drawFns[s]();\n  document.getElementById(\"info-panel\").innerHTML = steps[s].info;\n  const dots = document.getElementById(\"step-dots\").children;\n  for(let i=0;i<dots.length;i++) dots[i].classList.toggle(\"active\",i===s);\n  const tabs = document.getElementById(\"tab-btns\").children;\n  for(let i=0;i<tabs.length;i++) tabs[i].classList.toggle(\"active\",i===s);\n  document.getElementById(\"prev-btn\").disabled = s===0;\n  document.getElementById(\"next-btn\").disabled = s===totalSteps-1;\n}\n\nfunction changeStep(d) { step=Math.max(0,Math.min(totalSteps-1,step+d)); renderStep(step); }\nfunction goStep(s) { step=s; renderStep(step); }\n\nrenderStep(0);\n</script>\n"
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
  "tool_use_id": "toolu_01QS9kn1nYT6eEmLtvgJX1TP",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "d9946b2e-3197-4617-82bd-33e60adefcc5"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "898ffc0d-9e14-4773-b6f9-e2e8bfcad744"
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

Good, the visualization is done. Now let me provide the textual explanation.

</details>

Here's the full physics picture, step by step.

**Why ²³⁷U(d,p) specifically?**

The (d,p) reaction is a neutron-stripping transfer: the deuteron (d = p + n) delivers its neutron to ²³⁷U, producing ²³⁸U\* while the proton escapes. This compound nucleus is *identical* to what neutron capture produces — n + ²³⁷U → ²³⁸U\*. The surrogate trick is that you get the same final state without needing a neutron beam on a 6.75-day target.

**The two research objects**

The experiment simultaneously pursues two goals. The first is nuclear astrophysics/applications output: measuring P_decay(E\*) for fission and γ channels allows extraction of σ(²³⁷U(n,f)) and σ(²³⁷U(n,γ)) via the Escher formula shown in step 4 of the widget. These cross sections feed fast-reactor and actinide transmutation calculations. The second is nuclear structure: the (d,p) angular distribution for each discrete state in ²³⁸U gives C²S (spectroscopic factors) and J^π assignments through DWBA analysis — directly probing how the neutron single-particle levels evolve in neutron-rich U isotopes, which is the shell-evolution question posed on the left of your slide.

**The W-E caveat**

The slide footnote is important: the formula assumes P_decay is J^π-independent (Weisskopf-Ewing limit). Near fission threshold (~6 MeV), different spin-parity states have different fission barriers, so this approximation can introduce 10–30% systematic error. Correcting for it requires either a spin-distribution calculation or a more refined surrogate analysis — an active research problem (Escher et al., Rev. Mod. Phys. 84, 353, 2012 is the canonical reference the slide cites).

**Why the TPC and ML-PID**

²³⁷U beams produced at RIBLL or ISOLDE are weak (typically ~10³–10⁴ pps). An active-target TPC uses the fill gas as both target and detector, giving near-unity geometric efficiency even for low-energy recoils — recovering the luminosity. The bottleneck then becomes PID: protons, deuterons, tritons, and α particles all leave tracks in the same gas, and their dE/dx bands overlap badly in the relevant momentum range. That's exactly where the ResNet-based PID your research centers on enters.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d810f-715a-7370-973c-89308e4faabf",
  "updated_at": "2026-04-12T09:42:47.452083Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d810f-715a-7658-97f7-d02d0425dfab"
}
```

</details>

### 3. human — 2026-04-12T09:42:59.094250Z

You should align the purpose of Imai-san's Donut group

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8112-ab2b-759a-a13f-9e50df0de242",
  "updated_at": "2026-04-12T09:42:59.094250Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d810f-715a-7370-973c-89308e4faabf"
}
```

</details>

### 4. assistant — 2026-04-12T09:45:39.419807Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants me to align/update the visualization to reflect Imai-san's research group at CNS (Center for Nuclear Study), University of Tokyo. Let me search my memory - I know Reid is planning to apply to UTokyo CNS, specifically Imai's group. Let me search past conversations to get details about Imai's group's research focus.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T09:43:03.600739Z",
  "stop_timestamp": "2026-04-12T09:43:03.827964Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01KwL1ivyphrNy1U5KqL1Hzg",
  "name": "conversation_search",
  "input": {
    "query": "Imai group CNS UTokyo Donut research"
  },
  "message": "Looking for relevant chats...",
  "integration_name": "Search Past Conversations",
  "integration_icon_url": "https://claude.ai/images/icons/conversation_search.png",
  "tool_identifier": null,
  "icon_name": "memory",
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
  "tool_use_id": "toolu_01KwL1ivyphrNy1U5KqL1Hzg",
  "name": "conversation_search",
  "content": [
    {
      "type": "text",
      "text": "<chat url='https://claude.ai/chat/0cfa0afa-ece6-44bf-8c1c-974e3c486f89' updated_at=2026-03-31T15:21:23.627205+00:00>PhD admission requirements at University of Tokyo\nThe JRA is not bundled with the \"Special Selection for International Applicants\" pathway. It's a separate RIKEN part-time research position that you would **apply for independently** after enrolling at UTokyo. The connection works because CNS physically operates at RIKEN RIBF, and UTokyo has collaborative agreements with RIKEN.\n\n**Eligibility requirements (facts from RIKEN):**\n\n- Candidates must be enrolled in a doctorate course at a Japanese graduate school. The graduate school must have a collaborative agreement with RIKEN or be involved in joint research with RIKEN scientists.\n- There are three categories: joint graduate school, joint research, and research collaboration — each requiring a specific type of agreement between the university and RIKEN.\n- The contract is for one year, renewable up to a maximum of three consecutive years. Employment is part-time: 5 hours per day, 5 days per week.\n- Applications are accepted from mid-September to mid-October, with screening in late November through early December.\n\n## What this means for your Imai Lab plan specifically\n\nSince CNS is physically located at RIKEN Wako/RIBF and Imai is a CNS faculty member, the institutional link between UTokyo and RIKEN is already in place. This makes you structurally eligible for JRA. That said, there are things worth confirming directly with Imai-sensei:\n\n1. **Which JRA category applies** — joint graduate school, joint research, or research collaboration? This determines the paperwork.\n2. **Whether JRA and GSGC scholarship can be held simultaneously** — some scholarships prohibit receipt of a second scholarship, and RIKEN asks candidates to confirm this with their funding source before applying. If you enter via GSGC (180,000 yen/month), there may be a conflict. If you enter via Special Selection (self-funded), there wouldn't be.\n3. **Timing** — JRA applications open in mid-September. If you enroll in October 2027, you'd likely apply for JRA in September 2028 for the following fiscal year, meaning your first year might not be JRA-funded.\n\n## Bottom line\n\nThe 250,000 yen/month figure is accurate per the FY2026 RIKEN JRA call. But framing it as \"Special Selection accepts JRA funding\" slightly conflates two separate things: (1) the UTokyo admission route and (2) a RIKEN employment program you'd apply for separately. The Special Selection route being self-funded actually *helps* JRA eligibility since there's no scholarship conflict to worry about.\n\nGreat that you're already in contact with Imai's group — he would be the definitive source on how CNS students typically handle the JRA application process and timing.\n\nHuman: Does UTokyo have the policy to arrange/settle down my girlfriend?\n\nAssistant: Let me search for UTokyo's policies on accompanying partners or family members.</chat>\n\n<chat url='https://claude.ai/chat/0cfa0afa-ece6-44bf-8c1c-974e3c486f89' updated_at=2026-03-31T15:21:23.627205+00:00>PhD admission requirements at University of Tokyo\n## Bottom line\n\nIf you encountered this document while researching Japan's immigration system, the main takeaway is that Japan is structurally moving toward greater acceptance of foreign nationals — a positive background signal. But for your specific path (PhD → Graduate School of Science → particle/nuclear physics research), you'd want data on 留学 visa trends, MEXT scholarship statistics, and UTokyo's international enrollment figures instead.\n\nWould you like me to search for data that's more directly relevant to your UTokyo doctoral application?\n\nHuman: Great, go ahead\n\nAssistant: Let me search for the most relevant information for your UTokyo PhD plan.\n<tool name=\"web_search\">\n<parameter name=\"query\">University of Tokyo Graduate School of Science PhD international admission 2025 2026</parameter>\n</tool>\n<tool name=\"web_search\">\n<parameter name=\"query\">University of Tokyo physics department PhD nuclear particle research groups</parameter>\n</tool>\n<tool name=\"web_search\">\n<parameter name=\"query\">MEXT scholarship 2026 2027 research students application timeline</parameter>\n</tool>\n<tool name=\"web_search\">\n<parameter name=\"query\">UTokyo Center for Nuclear Study CNS research direct reactions exotic nuclei</parameter>\n</tool>\n<tool name=\"web_search\">\n<parameter name=\"query\">UTokyo GSGC \"Global Science Graduate Course\" physics international PhD funding</parameter>\n</tool>\n<tool name=\"web_search\">\n<parameter name=\"query\">MEXT research scholarship China embassy 2027 PhD application</parameter>\n</tool>\nHere's what I've gathered across admission pathways, research fit, funding, and timelines. I'll separate verified facts from inferences throughout.\n\n---\n\n## 1. Research Fit — Remarkably Strong\n\nThe UTokyo Department of Physics has subcourse **A0 (Nuclear Theory)** and **A2 (Experimental Nuclear/Particle Physics)**, both directly aligned with your background. But the real gem is the **Center for Nuclear Study (CNS)**, an affiliated research center of the Graduate School of Science.\n\n**Why CNS is an almost tailor-made match (facts from CNS website):**\n\n- CNS has devices at RIBF in RIKEN Nishina Center and pursues experimental nuclear physics including nuclear structure/reaction studies with radioactive isotope beams.\n- CNS developed a thick GEM which is a core of Time Projection Chamber (TPC), and has succeeded in realizing an active target which can stand the highest radioactive isotope beams. This directly overlaps with your TPC and detector development work at HIRFL-RIBLL.\n- For experiments with radioactive isotope beams, they are developing beam line detectors including low-pressure MWDC and diamond detectors for identifying each ion in beams of 10⁶ particles/second. Your MWDC experience maps directly here.\n- The Nuclear Dynamics research covers shell evolution, tensor forces, shape-phase transitions, and uses probes including proton-resonance scattering — the Imai Lab.</chat>\n\n<chat url='https://claude.ai/chat/0cfa0afa-ece6-44bf-8c1c-974e3c486f89' updated_at=2026-03-31T15:21:23.627205+00:00>PhD admission requirements at University of Tokyo\nThe contact for general education/research inquiries is Prof. Takeo Moroi.\n\nAdditionally, Kavli IPMU's A2 subcourse (nuclear experiments, accelerator experiments) lists Takeo Higuchi as a faculty member who can host PhD students, giving another possible entry point.\n\n---\n\n## 6. What You Should Do Next\n\n**Immediate (next 1–3 months):**\n1. Read CNS faculty publications to identify the best supervisor match\n2. Prepare a concise research statement connecting your HIRFL-RIBLL work (TPC, direct reactions, ML-based PID) to CNS research directions\n3. Inquire with IMP-CAS about any existing UTokyo/RIKEN institutional connections\n\n**By late 2026:**\n4. Contact prospective supervisors with your CV, publication list, and a clear statement of why their group\n5. Begin MEXT/CSC application process if pursuing that route\n6. Apply to GSGC or Special Selection\n\nYour TOEFL target of 100+ is well-calibrated — the programs are English-taught, and this score should be more than sufficient. The GRE Physics Subject Test you've been preparing for would also strengthen your application.\n\nWant me to dig into any specific area further — for instance, fetching the full CNS faculty list, or looking into CSC-specific timelines for 2027?\n\nHuman: It says that this program can accept JRA funding, 250000 yen per month. Is this true?\nI have contacted with Imai's group, and I think I would join him if everything is ordinary.\n\nAssistant: Let me verify this claim about JRA funding.\n<tool name=\"web_search\">\n<parameter name=\"query\">RIKEN JRA \"Junior Research Associate\" 2025 2026 monthly stipend</parameter>\n</tool>\n<tool name=\"web_search\">\n<parameter name=\"query\">RIKEN JRA salary revision FY2026 250000 yen</parameter>\n</tool>\nGood news — the 250,000 yen figure is confirmed, but there are important nuances to clarify.\n\n## The 250,000 yen/month: Verified (with caveats)\n\nThe FY2026 JRA call states the salary is JPY 250,000 per month (tax included), marked as \"expected.\" This is a revision upward from the previous rate — the JRA program page still lists the older figure of JPY 200,000 per month, but RIKEN notes the basic monthly salary is expected to be revised starting in FY2026.\n\nSo the 250,000 yen figure is real, but comes with the asterisk \"*expected\" — meaning RIKEN had not finalized it at the time of posting.\n\n## However: JRA is a RIKEN program, not a UTokyo admission benefit\n\nThis is an important distinction. The JRA is not bundled with the \"Special Selection for International Applicants\" pathway. It's a separate RIKEN part-time research position that you would **apply for independently** after enrolling at UTokyo. The connection works because CNS physically operates at RIKEN RIBF, and UTokyo has collaborative agreements with RIKEN.\n\n**Eligibility requirements (facts from RIKEN):**\n\n- Candidates must be enrolled in a doctorate course at a Japanese graduate school. The graduate school must have a collaborative agreement with RIKEN or be involved in joint research with RIKEN scientists.</chat>\n\n<chat url='https://claude.ai/chat/0cfa0afa-ece6-44bf-8c1c-974e3c486f89' updated_at=2026-03-31T15:21:23.627205+00:00>PhD admission requirements at University of Tokyo\nThe requirements, schedule, and process differ from standard Embassy Recommendation.\n- Chinese nationals must apply to the China Scholarship Council (CSC) and follow their selection procedures as the preliminary stage; only those who pass may proceed to the University selection.\n- The 2027 cycle is expected to open around April–May 2026.\n\n---\n\n## 3. Timeline Mapping Against Your Graduation\n\nYour expected Master's graduation: **June 2027**. Here's what this means:\n\n| Window | Action | Notes |\n|---|---|---|\n| **Now – Summer 2026** | Identify and email prospective supervisors at CNS/Physics | This is the single most important step per every source |\n| **Apr–May 2026** | MEXT 2027 Embassy route opens (via CSC for China) | Requires research proposal ready |\n| **Oct–Dec 2026** | GSGC and Special Selection application windows | For October 2027 enrollment |\n| **Jun 2027** | Master's degree conferred at IMP-CAS | |\n| **Oct 2027** | Target enrollment at UTokyo | |\n\n**Assumption:** I'm assuming October 2027 enrollment, which is the standard for international students. April 2027 would be tight given your June 2027 graduation, though the October application window covers both April and October enrollment.\n\n---\n\n## 4. The China-Specific MEXT Complication\n\nThis deserves emphasis. Unlike applicants from most countries who apply directly through Japanese embassies, Chinese applicants must first go through the China Scholarship Council's selection procedures as a preliminary stage. This means:\n\n- You need to track **CSC deadlines**, not just Japanese embassy deadlines\n- The CSC process adds a layer of competition and bureaucracy\n- You should contact CSC or your university's international affairs office early to confirm the 2027 cycle timeline\n\n**Fact I cannot confirm:** Whether IMP-CAS/UCAS has an institutional channel or existing relationship with UTokyo that could facilitate university recommendation. This would be worth investigating with your advisor.\n\n---\n\n## 5. Specific Faculty to Investigate\n\nBased on your research overlap, the CNS labs most worth contacting:\n\n- **Imai Lab** (nuclear structure/dynamics) — shell evolution, tensor forces, shape-phase transitions, uses SHARAQ spectrometer\n- **Yamaguchi Lab** (nuclear astrophysics) — operates CRIB RI beam separator, studies nuclear reactions with unstable nuclei\n- The **active target TPC group** — GEM-TPC development, directly matching your detector expertise\n\nApplicants to the Department of Physics should contact the potential supervisor well before the application. The contact for general education/research inquiries is Prof. Takeo Moroi.\n\nAdditionally, Kavli IPMU's A2 subcourse (nuclear experiments, accelerator experiments) lists Takeo Higuchi as a faculty member who can host PhD students, giving another possible entry point.\n\n---\n\n## 6. What You Should Do Next\n\n**Immediate (next 1–3 months):**\n1. Read CNS faculty publications to identify the best supervisor match\n2.</chat>\n\n<chat url='https://claude.ai/chat/15504e61-6848-4711-a561-b98c5339086e' updated_at=2026-04-12T06:17:41.891916+00:00>Leveraging the project feature in Claude\n')\">Help me set up a project for my UTokyo PhD application ↗</button>\n  </div>\n</div>\n\n<script>\nconst ucData = {\n  research: {\n    title: \"Research workspace\",\n    detail: \"Upload your paper PDFs, literature notes, and BibTeX files. Set instructions like: 'You are a nuclear physics research assistant. When answering, cite the relevant paper by first-author and year. Prefer SI units. Flag any claims that lack experimental evidence.' Use separate chats per paper or per sub-question — all share the same uploaded corpus.\",\n    badges: [\"PDF papers\", \"lit notes\", \"BibTeX\", \"preprints\"]\n  },\n  code: {\n    title: \"Codebase assistant\",\n    detail: \"Connect your GitHub repo or upload key source files, a README, and a style guide. Instructions: 'You are a senior developer on this project. Always follow the existing code style. Prefer functional patterns. When suggesting changes, include a brief rationale.' Each chat can focus on a feature or bug without losing project context.\",\n    badges: [\"GitHub\", \"README\", \"style guide\", \"architecture docs\"]\n  },\n  phd: {\n    title: \"PhD application hub\",\n    detail: \"Upload your CV, research statement drafts, and notes on target professors. Instructions: 'You are helping me apply to doctoral programs in experimental nuclear physics. My target is CNS, UTokyo (Imai group), October 2027 entry. Be concise, precise, and flag anything that sounds generic.' Chats for SOP, cold emails, interview prep all share this foundation.\",\n    badges: [\"CV\", \"SOP drafts\", \"prof notes\", \"deadline list\"]\n  },\n  lang: {\n    title: \"Language study\",\n    detail: \"Upload your vocabulary lists, writing samples, and style notes. Instructions: 'You are an English language tutor for an advanced non-native speaker preparing for TOEFL and academic writing. When correcting, explain the rule briefly. Focus on precision and register.' Each vocabulary or writing session benefits from your accumulated notes.\",\n    badges: [\"vocab lists\", \"TOEFL prep\", \"writing samples\", \"etymology notes\"]\n  },\n  skill: {\n    title: \"Skill ecosystem\",\n    detail: \"Upload your SKILL.md files, evolution.md logs, and any custom prompt templates. Instructions: 'You are helping me maintain and improve a library of reusable Claude skills. When I show you a skill, analyze its trigger accuracy and output quality based on the evolution log. Suggest concrete SKILL.md edits.' Perfect for managing the feynman, vocabulary-viz, and concept-visualizer skills.\",\n    badges: [\"SKILL.md files\", \"evolution.md\", \"prompt templates\", \"eval results\"]\n  },\n  meeting: {\n    title: \"Meeting intelligence\",\n    detail: \"Upload transcripts (TXT/PDF) from seminars, advisor meetings, or group discussions. Instructions: 'Extract action items, decisions, open questions, and key references from transcripts. Output as structured markdown. Flag anything requiring follow-up within 48 hours.' Analyze an entire semester of meetings from one project.</chat>",
      "uuid": "b2b146fc-cf75-443d-a875-b59f0e3e0c20"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Relevant chats",
  "integration_name": "Search Past Conversations",
  "mcp_server_url": null,
  "integration_icon_url": "https://claude.ai/images/icons/conversation_search.png",
  "icon_name": "memory",
  "display_content": {
    "type": "rich_content",
    "content": [
      {
        "title": "PhD admission requirements at University of Tokyo",
        "subtitles": null,
        "url": "https://claude.ai/chat/0cfa0afa-ece6-44bf-8c1c-974e3c486f89",
        "resource_type": null,
        "icon_url": null,
        "source": null
      },
      {
        "title": "Leveraging the project feature in Claude",
        "subtitles": null,
        "url": "https://claude.ai/chat/15504e61-6848-4711-a561-b98c5339086e",
        "resource_type": null,
        "icon_url": null,
        "source": null
      }
    ]
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Now let me search for more specific details about Imai's "Donut" group - their specific research focus.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T09:43:06.578574Z",
  "stop_timestamp": "2026-04-12T09:43:06.883874Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01MGgskTmiXg1Gnq4QRGi8nJ",
  "name": "conversation_search",
  "input": {
    "query": "Imai Donut SHARAQ shell evolution tensor force direct reaction"
  },
  "message": "Looking for relevant chats...",
  "integration_name": "Search Past Conversations",
  "integration_icon_url": "https://claude.ai/images/icons/conversation_search.png",
  "tool_identifier": null,
  "icon_name": "memory",
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
  "tool_use_id": "toolu_01MGgskTmiXg1Gnq4QRGi8nJ",
  "name": "conversation_search",
  "content": [
    {
      "type": "text",
      "text": "<chat url='https://claude.ai/chat/9c512a55-13f2-4013-ade1-48c365b29778' updated_at=2026-03-26T07:01:31.187694+00:00>Understanding nuclear spin notation\nSince the spin-orbit force acts primarily at the nuclear surface (recall the (1/r)(dU/dr) factor from our earlier formula), a more diffuse surface weakens the spin-orbit splitting. This is a more gradual effect than the tensor mechanism, but it contributes to the systematic erosion of magic numbers near the drip lines. Bubble nuclei (with depleted central density) are a related exotic case where spin-orbit splitting can be dramatically reduced.\n\n## The famous experimental cases\n\n**N=20 island of inversion** (Ne, Na, Mg around A~30–32): the classic discovery. ³²Mg was found to have a low 2⁺₁ energy and large B(E2), indicating strong collectivity where N=20 should be magic. The mechanism involves both the tensor-driven gap reduction and the onset of intruder configurations from the pf-shell.\n\n**N=28 quenching** (⁴²Si): experiments show enhanced collectivity at ⁴²Si, where N=28 should be a strong closure. Removing protons from the sd-shell (going from Ca to Si) shifts the neutron levels via the monopole interaction.\n\n**N=16 emergence in oxygen**: ²⁴O (Z=8, N=16) is doubly magic — but 16 is not a traditional magic number. The 3NF contribution is essential to explain why the gap opens here.\n\n**N=32, 34 subshell closures** (Ca isotopes): ⁵²Ca and ⁵⁴Ca show signatures of new subshell closures, confirmed at RIBF/RIKEN and relevant to similar studies at HIRFL-CSR.\n\nThis is exactly why radioactive ion beam facilities like HIRFL are so important — you can't study shell evolution with stable beams alone. You need to produce exotic isotopes far from stability to map out how the single-particle structure changes, which is what your Bρ-ΔE-ToF identification work directly supports.\n\nOne question to check your understanding: in the interactive diagram, when you empty the proton orbit completely, the two j_> neutron levels (1f₇/₂ and 2p₃/₂) both shift in the same direction. Why does that not automatically preserve the gap between them — and what additional ingredient would you need to predict whether a specific magic number actually disappears?</chat_conversation></chat>\n\n<chat url='https://claude.ai/chat/0cfa0afa-ece6-44bf-8c1c-974e3c486f89' updated_at=2026-03-31T15:21:23.627205+00:00>PhD admission requirements at University of Tokyo\nThis directly overlaps with your TPC and detector development work at HIRFL-RIBLL.\n- For experiments with radioactive isotope beams, they are developing beam line detectors including low-pressure MWDC and diamond detectors for identifying each ion in beams of 10⁶ particles/second. Your MWDC experience maps directly here.\n- The Nuclear Dynamics research covers shell evolution, tensor forces, shape-phase transitions, and uses probes including proton-resonance scattering — the Imai Lab.\n- They used a double charge-exchange reaction with the SHARAQ spectrometer to probe the tetraneutron system, revealing a resonance that points toward novel many-neutron correlations.\n\n**Inference:** Your combination of TPC experience, direct reactions, Bρ-ΔE-ToF particle identification, MWDC detector work, and ML-based particle ID (ResNet/ViT) would make you a compelling candidate for CNS groups. The ML angle is increasingly valued in nuclear physics and would differentiate you.\n\n---\n\n## 2. Admission Pathways — Three Main Routes\n\nBased on the official UTokyo Graduate School of Science and Physics Department pages:\n\n### Route A: GSGC (Global Science Graduate Course)\n- GSGC is an international graduate program that allows students to obtain their degrees in English, with a five-year integrated Master's + Doctoral scheme and a monthly scholarship.\n- The scholarship provides 180,000 yen/month (~¥1,200 USD at current rates), for two years (Master's) and three years (Doctoral), with no repayment required.\n- **Important for you:** Since you'll already hold a Master's degree (June 2027), you'd likely enter the Doctoral course directly. You should clarify with the department whether GSGC accepts direct doctoral entry or requires starting from the Master's program.\n- Applicants are strongly encouraged to contact prospective supervisors well in advance of the application period.\n\n### Route B: Special Selection for International Applicants (self-funded entry)\n- Application periods include October 15–31 for April enrollment and a December period for October enrollment. Those applying in the October period can also apply for University Recommended MEXT Scholarship.\n- According to Prof. Yamazaki (Kavli IPMU), this route does not guarantee financial support upon arrival, but in his understanding most students do eventually get financial support.\n\n### Route C: MEXT Scholarship (Embassy Recommendation)\n- **Critical China-specific fact:** In China, MEXT Embassy Recommendation applications must be submitted to the country's Ministry of Education for first screening, not directly to a Japanese embassy. The requirements, schedule, and process differ from standard Embassy Recommendation.\n- Chinese nationals must apply to the China Scholarship Council (CSC) and follow their selection procedures as the preliminary stage; only those who pass may proceed to the University selection.\n- The 2027 cycle is expected to open around April–May 2026.\n\n---\n\n## 3.</chat>\n\n<chat url='https://claude.ai/chat/40282da2-ced3-47e3-af95-2f2887a5e498' updated_at=2026-03-22T10:01:24.860034+00:00>Understanding ab initio from scratch\nThe computational cost scales harshly with the number of nucleons.\n\n---\n\n**One important honesty note:** I'm confident about the general framework I described — chiral EFT as the input, the many-body methods, the role of 3NF. But the exact frontiers of which nuclei have been reached by which methods are advancing rapidly. For the most current status, recent review articles (for example, from groups like Hergert, Hebeler, or Hagen) would give you the precise state of the art.\n\n---\n\nSo, Reid — how does this map onto what you've encountered at IMP? Does the connection between chiral EFT and the shell model make sense, or should we dig into any particular piece?\n\nHuman: You could be more specific about this part.\n\nAssistant: Good catch — I was vague there. Let me search for the current state of the art rather than guess.\n<tool name=\"web_search\">\n<parameter name=\"query\">ab initio nuclear structure calculations medium mass heavy nuclei 2025</parameter>\n</tool>\n<tool name=\"web_search\">\n<parameter name=\"query\">ab initio nuclear 208Pb lead wavefunction matching 2024</parameter>\n</tool>\nGood call — here's what the sources actually say, with specifics.\n\n---\n\n**The frontier is further than I implied.** Here's a method-by-method picture, grounded in published results:\n\n**Coupled Cluster (CC) and IM-SRG — the heaviest reach:**\nThe landmark result was Hu, Jiang, Miyagi, Sun et al. (Nature Physics, 2022), who performed the first ab initio calculations reaching ²⁰⁸Pb — a doubly magic nucleus with 208 nucleons. They used coupled-cluster, IM-SRG, and many-body perturbation theory together. The main technical challenge for ²⁰⁸Pb was handling the enormous number of three-nucleon force matrix elements, which they overcame using a new storage scheme based on normal-ordered two-body approximations. This was a major milestone — ²⁰⁸Pb is not \"medium-mass\"; it's firmly a heavy nucleus.\n\n**Bogoliubov Coupled Cluster (BCC) — open-shell isotopic chains:**\nTichai et al. (arXiv: 2307.15619) performed the first ab initio BCC calculations targeting ground states of all calcium, nickel, and tin isotopes up to mass A ≈ 180. This is significant because those are *open-shell* nuclei — much harder than the closed-shell cases that CC and IM-SRG handle most naturally.\n\n**VS-IMSRG — benchmarking near ¹⁰⁰Sn:**\nThe valence-space IM-SRG (VS-IMSRG) and shell-model coupled-cluster (SMCC) methods have reached the tin isotopes, including the doubly magic ¹⁰⁰Sn and its odd-proton neighbours ⁹⁹In and ¹⁰⁰In. These odd-mass systems are a particularly stringent test because they probe single-particle structure and pairing effects that even–even benchmarks miss.\n\n**NCSM variants — light to medium mass with reactions:**\nThe symmetry-adapted no-core shell model (SA-NCSM) has been applied to nuclei from ⁴He up to ⁴⁰Ca for reaction cross sections rooted in first principles, covering elastic scattering, deuteron and alpha capture, and knock-out reactions.</chat>\n\n<chat url='https://claude.ai/chat/0cfa0afa-ece6-44bf-8c1c-974e3c486f89' updated_at=2026-03-31T15:21:23.627205+00:00>PhD admission requirements at University of Tokyo\n## Bottom line\n\nIf you encountered this document while researching Japan's immigration system, the main takeaway is that Japan is structurally moving toward greater acceptance of foreign nationals — a positive background signal. But for your specific path (PhD → Graduate School of Science → particle/nuclear physics research), you'd want data on 留学 visa trends, MEXT scholarship statistics, and UTokyo's international enrollment figures instead.\n\nWould you like me to search for data that's more directly relevant to your UTokyo doctoral application?\n\nHuman: Great, go ahead\n\nAssistant: Let me search for the most relevant information for your UTokyo PhD plan.\n<tool name=\"web_search\">\n<parameter name=\"query\">University of Tokyo Graduate School of Science PhD international admission 2025 2026</parameter>\n</tool>\n<tool name=\"web_search\">\n<parameter name=\"query\">University of Tokyo physics department PhD nuclear particle research groups</parameter>\n</tool>\n<tool name=\"web_search\">\n<parameter name=\"query\">MEXT scholarship 2026 2027 research students application timeline</parameter>\n</tool>\n<tool name=\"web_search\">\n<parameter name=\"query\">UTokyo Center for Nuclear Study CNS research direct reactions exotic nuclei</parameter>\n</tool>\n<tool name=\"web_search\">\n<parameter name=\"query\">UTokyo GSGC \"Global Science Graduate Course\" physics international PhD funding</parameter>\n</tool>\n<tool name=\"web_search\">\n<parameter name=\"query\">MEXT research scholarship China embassy 2027 PhD application</parameter>\n</tool>\nHere's what I've gathered across admission pathways, research fit, funding, and timelines. I'll separate verified facts from inferences throughout.\n\n---\n\n## 1. Research Fit — Remarkably Strong\n\nThe UTokyo Department of Physics has subcourse **A0 (Nuclear Theory)** and **A2 (Experimental Nuclear/Particle Physics)**, both directly aligned with your background. But the real gem is the **Center for Nuclear Study (CNS)**, an affiliated research center of the Graduate School of Science.\n\n**Why CNS is an almost tailor-made match (facts from CNS website):**\n\n- CNS has devices at RIBF in RIKEN Nishina Center and pursues experimental nuclear physics including nuclear structure/reaction studies with radioactive isotope beams.\n- CNS developed a thick GEM which is a core of Time Projection Chamber (TPC), and has succeeded in realizing an active target which can stand the highest radioactive isotope beams. This directly overlaps with your TPC and detector development work at HIRFL-RIBLL.\n- For experiments with radioactive isotope beams, they are developing beam line detectors including low-pressure MWDC and diamond detectors for identifying each ion in beams of 10⁶ particles/second. Your MWDC experience maps directly here.\n- The Nuclear Dynamics research covers shell evolution, tensor forces, shape-phase transitions, and uses probes including proton-resonance scattering — the Imai Lab.</chat>\n\n<chat url='https://claude.ai/chat/49505144-e729-46c7-a69b-67ad4b063681' updated_at=2026-03-21T01:09:26.453207+00:00>Creating technical explanations\nThe catch is always tracking induced 3N forces.\n\n**The 3N force problem**: clicking Chiral EFT will show why 3N at N²LO is non-negotiable — the oxygen drip line was actually a landmark test case where calculations *without* 3N forces predicted bound nuclei beyond ²⁴O, while experiment (and calculations including 3N) correctly terminate at ²⁴O.\n\n**Method selection by mass regime**: NCSM is exact but hits a wall around A ~ 16; CC and IMSRG scale polynomially and push to A ~ 100+; QMC is ideal when you want non-perturbative accuracy for light nuclei or nuclear matter.\n\nWant me to go deeper on any particular stage — say, the VS-IMSRG → shell model connection, the NCSM/RGM formalism for reactions, or the uncertainty quantification side (EFT order-by-order convergence)?</chat_conversation></chat>",
      "uuid": "756caec0-e3b8-41ff-86ae-7101f2b204e9"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Relevant chats",
  "integration_name": "Search Past Conversations",
  "mcp_server_url": null,
  "integration_icon_url": "https://claude.ai/images/icons/conversation_search.png",
  "icon_name": "memory",
  "display_content": {
    "type": "rich_content",
    "content": [
      {
        "title": "Understanding nuclear spin notation",
        "subtitles": null,
        "url": "https://claude.ai/chat/9c512a55-13f2-4013-ade1-48c365b29778",
        "resource_type": null,
        "icon_url": null,
        "source": null
      },
      {
        "title": "PhD admission requirements at University of Tokyo",
        "subtitles": null,
        "url": "https://claude.ai/chat/0cfa0afa-ece6-44bf-8c1c-974e3c486f89",
        "resource_type": null,
        "icon_url": null,
        "source": null
      },
      {
        "title": "Understanding ab initio from scratch",
        "subtitles": null,
        "url": "https://claude.ai/chat/40282da2-ced3-47e3-af95-2f2887a5e498",
        "resource_type": null,
        "icon_url": null,
        "source": null
      },
      {
        "title": "Creating technical explanations",
        "subtitles": null,
        "url": "https://claude.ai/chat/49505144-e729-46c7-a69b-67ad4b063681",
        "resource_type": null,
        "icon_url": null,
        "source": null
      }
    ]
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Now let me search more specifically for the "Donut" group designation for Imai's lab.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T09:43:09.473705Z",
  "stop_timestamp": "2026-04-12T09:43:09.710257Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01VWSpBcWw3xmk3rCQHCtDx4",
  "name": "web_search",
  "input": {
    "query": "Imai CNS UTokyo \"Donut\" group nuclear SHARAQ surrogate"
  },
  "message": "Searching the web",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
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
  "tool_use_id": "toolu_01VWSpBcWw3xmk3rCQHCtDx4",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "OEDO-SHARAQ",
      "url": "https://oedo-sharaq.cns.s.u-tokyo.ac.jp/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "u-tokyo.ac.jp",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
        "site_name": "U-tokyo"
      },
      "is_missing": false,
      "text": "Donuts Group (Ass. Prof. Imai), CNS, University of Tokyo · Exotic Reaction Group (Ass. Prof. Yako), CNS, University of Tokyo ·\n\nDonuts Group (Ass. Prof. Imai), CNS, University of Tokyo · Exotic Reaction Group (Ass. Prof. Yako), CNS, University of Tokyo ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://oedo-sharaq.cns.s.u-tokyo.ac.jp/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "ISSN 1343-2230 CNS-REP-102 March, 2024 Annual Report 2022",
      "url": "https://www.cns.s.u-tokyo.ac.jp/archive/annual/CNS_annual_report_2022.pdf",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "u-tokyo.ac.jp",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
        "site_name": "U-tokyo"
      },
      "is_missing": false,
      "text": "states in nuclei. In the spring of 2022, two nuclear reactions, 130Sn(d, p) and 56Ni(d, p), SHARAQ18 · and 19, respectively, were performed at the OEDO-SHARAQ system in inverse kinematics by em- ploying the surrogate technique, where the decay channels of the unbound states were identiﬁed · directly from the measurement of reaction residues. Prior to the SHARAQ18, MS22-01 was carried · out to establish a new optics for transporting the ion beam with better transmission. In winter 2022, another OEDO experiment, SHARAQ12, for the single particle structure in 51Ca was partially per- formed. The analyses of the experiments, ImPACT17-02-01, -02, and SHARAQ11, 4He(8He, 8Be)4n · reaction, are in progress. The analysis of the groundbreaking experiment on the inelastic decay from · the isobaric analog resonances is almost ﬁnished. The CNS GRAPE (Gamma-Ray detector Array ·\n\nThe Exotic Nuclear Reaction group studies various exotic reactions induced by heavy-ion beams. We proceeded with the data reduction of the double charge exchange (12C;12Be) reaction taken in the · previous year for a search of double Gamow-Teller resonance. The OEDO/SHARAQ group pursues experimental studies with RI beams by using the high- resolution beamline and the SHARAQ spectrometer, and the OEDO for the decelerated RI beams. The uniqueness of the OEDO-SHARAQ system is its versatile performance in low-energy RI produc- tion and high-resolution spectroscopy. In FY2022, taking advantage of this feature, two low-energy · RI experiments for (d, p)-type surrogate reactions and a high-resolution direct mass measurement for · two-proton radioactivity were performed. Through the measurements, we were able to demonstrate · a smooth re-arrangement of the beamline and experimental detector setups.\n\nstates in nuclei. In the spring of 2022, two nuclear reactions, 130Sn(d, p) and 56Ni(d, p), SHARAQ18 · and 19, respectively, were performed at the OEDO-SHARAQ system in inverse kinematics by em- ploying the surrogate technique, where the decay channels of the unbound states were identiﬁed · directly from the measurement of reaction residues. Prior to the SHARAQ18, MS22-01 was carried · out to establish a new optics for transporting the ion beam with better transmission. In winter 2022, another OEDO experiment, SHARAQ12, for the single particle structure in 51Ca was partially per- formed. The analyses of the experiments, ImPACT17-02-01, -02, and SHARAQ11, 4He(8He, 8Be)4n · reaction, are in progress. The analysis of the groundbreaking experiment on the inelastic decay from · the isobaric analog resonances is almost ﬁnished. The CNS GRAPE (Gamma-Ray detector Array ·\n\nSHARAQ. The TOF between S0 - S1 was calculated as · the difference between S1 PPACs’ anode timing and timing · extrapolated to S0 using FE12 PPACs’ tracking and anode · timing. The mass-to-charge (A/Q) was calculated from Br ... Energy per pad [arb. units] ... DBr=Br0 = 1:5% is shown in Fig. 3. Each isotope has · multiple loci due to the wide charge-state distribution at this · measurement’s low energy: 23.2 MeV/nucleon at S1. In the · near future the clear PID from this analysis will be used to · count the number of each reaction product, allowing the ex- traction of production cross sections from the data. The ﬁ- nal cross sections with discussion of their impact on nuclear · transmutation and understanding deuteron breakup will be ... Fig. 2. Dashed lines are to guide the eye. ... Spent Fuel and Radioactive Waste Management, No.\n\nT. Chillery, S. Hanai, N. Imai, S. Masuoka, K. Yako · 1b. Experimental Nuclear Physics: PHENIX Experiment at BNL-RHIC and ALICE Experi- ... Multiplicity dependence of direct photon production in pp collisions at ps = 13 TeV . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 29 · H. Murakami and T. Gunji · Measurement of long-range two-particle correlation and pseudorapidity dependence of v2 with ALICE . . . . . . . . . . . . . 31 · Y. Sekiguchi for the ALICE Collaboration · Production of direct photons via internal conversions in Pb–Pb collisions at psNN = 5.02 TeV with ALICE at the LHC 33 · D. Sekihata and T. Gunji · Space-charge distortion correction for the ALICE-TPC using machine learning methods . . . . . . . . . . . . . . . . . . . . . . . . . 35 · H. Baba, D. Sekihata, T. Gunji ... Development and commissioning of a mosaic type array formed by Si photodiodes .",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.cns.s.u-tokyo.ac.jp/archive/annual/CNS_annual_report_2022.pdf",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "研究成果 - CNS_Donuts - 東京大学",
      "url": "https://donuts.cns.s.u-tokyo.ac.jp/home/Achievements",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "u-tokyo.ac.jp",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
        "site_name": "U-tokyo"
      },
      "is_missing": false,
      "text": "N. Imai (oral) &quot;Evaluation of the neutron capture reaction on 79Se via a surrogate reaction of d(79Se, p) reaction at OEDO&quot; ... M. Dozono, &quot;Proton induced reactions on 107Pd at around 30 MeV/nucleon: First result using sloweddown RI beams at OEDO &quot; N. Kitamura, &quot;Structure of 30Mg studied by in-beam gamma-ray spectroscopy via neutron knockout reactions &quot; 2019/ Aug. 26--28, 8th SUNFLOWER Workshop / HiCARI Workshop, Osaka University, Osaka, Japan. N. Kitamura, &quot;High-resolution spectroscopy of $^{95\\text{--}98}$Kr&quot; 2019/9/17-20, 日本物理学会2019年秋季大会 · 今井伸明, 「逆運動学79Se(d,p)反応による中性子捕獲反応断面積の評価」 · 2019/12/6-7 JSPS/NRF/NSFC A3 Foresight Program “Nuclear Physics in the 21st Century” Joint Kickoff Meeting · M. Dozono &quot;Nuclear astrophysics studies with OEDO&quot; ... 2018/10/22-26 , Fifth Joint Meeting of the Nuclear Physics Divisions of the American Physical Society and the Physical Society of Japan (Hawaii2018) N.\n\nN. Imai \"The decelerating and focusing device OEDO in RIBF and the nuclear astrophysics program with the surrogate nuclear reaction \" ... N. Imai \"OEDO, the deceleration and focusing element at RIBF, and the physics program using OEDO\" ... S. Hanai. “Direct measurement of the masses of Fe isotopes around the proton dripline”, 2022/08/30, oral ... S. Hanai, \"Direct measurement of the masses of Fe isotopes around the proton dripline” · 19 th International Conference on Electromagnetic Isotopes Separators and Related Topics (EMIS22), S. Hanai, “Development of a fast response PPAC for high-intensity heavy-ion beams”, 2022/10/03, poster ... N. Imai (oral) \"Single particle structure coupled to the second 0+ state in 32Mg\" ... N. Imai (invited) \"Controlling the motions of two kinds of fermions in a nucleus, a new energy degraded RI beam line OEDO\" 2019/5/22-24 基研研究会 原子核物理で紡ぐr-process ·\n\nImai (oral) \"79Se(d,p)80Se reaaction as a surrogate of (n,g)\"P. Schrock(poster) \"recoil particle detector array TiNA\"M. Dozono (poster) \"proton/deutetron induced reaction with 107Pd and 93Zr\" 2018/9 Northern East Asia Symposium, NagoyaN. Imai (invited) \"Experimental studies with the energy-degraded RI beams\" 2017/11/27-28, Zagreb, Croatia. The 6th ADAMAS WorkshopO. Beliuskina (oral) \"The ultrafast dE-ToF single crystal diamond detector\" 2017/9/25-30, Ha-noi, Vitnam, The International Symposium on Physics of Unstable Nuclei 2017P. Schrock (oral), \"Shell structure at the border of the island of inversion: Spectroscopy of neutron-rich Al isotopes.\" 2016/9/18-20 HIAS2016 Canberra, Austlaia,N. Imai, \"OEDO and proton resonance elastic scattering\" (invited) 2016/11/16-18 RISP-RNC RIB physics workshop, Daejeong, KoreaN. Imai (invited) \"Physics program with low-energy RI beams\", 中性子捕獲 で迫る宇宙の元素合成 2023/2/9-10 今井伸明 「代理反応法を用いた不安定核中性子捕獲反応の研究 」 ·\n\n12月 RIBF Users group meeting 2017/12/6, RIBF conference room N. Imai (Invited) \"Nuclear Data of LLFP and Future prospect of a new energy degraded beam line OEDO\" 11月 2017年度核データ研究会 2017/11/16, 17 東海村産業・情報プラザ (アイヴィル) N. Imai(Invited) \"OEDOを用いた低エネルギーLLFPの核反応データ取得\" 10月 CAGRA workshop 2017 N. Imai (invited) \"Energy-degraded beam line at RIBF, OEDO\" O. Beliuskina \"The ultrafast dE-ToF sc diamond detector\" P. Schrock (invited) \"Transfer Reactions with CAGRA at OEDO\" 9月 日本物理学会 宇都宮大学 北村徳隆 「TRIUMF におけるトリチウム標的の評価」 今井伸明「不安定核物理の将来」（シンポジウム講演） · RIBF理論若手放談会：エキゾチック核物理の広がり Jul. 31-Aug.2/2017 理研神戸・融合連携イノベーション推進棟 N.\n\nN. Imai (oral) \"Evaluation of the neutron capture reaction on 79Se via a surrogate reaction of d(79Se, p) reaction at OEDO\" ... M. Dozono, \"Proton induced reactions on 107Pd at around 30 MeV/nucleon: First result using sloweddown RI beams at OEDO \" N. Kitamura, \"Structure of 30Mg studied by in-beam gamma-ray spectroscopy via neutron knockout reactions \" 2019/ Aug. 26--28, 8th SUNFLOWER Workshop / HiCARI Workshop, Osaka University, Osaka, Japan. N. Kitamura, \"High-resolution spectroscopy of $^{95\\text{--}98}$Kr\" 2019/9/17-20, 日本物理学会2019年秋季大会 · 今井伸明, 「逆運動学79Se(d,p)反応による中性子捕獲反応断面積の評価」 · 2019/12/6-7 JSPS/NRF/NSFC A3 Foresight Program “Nuclear Physics in the 21st Century” Joint Kickoff Meeting · M. Dozono \"Nuclear astrophysics studies with OEDO\" ... 2018/10/22-26 , Fifth Joint Meeting of the Nuclear Physics Divisions of the American Physical Society and the Physical Society of Japan (Hawaii2018) N.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://donuts.cns.s.u-tokyo.ac.jp/home/Achievements",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Center for Nuclear Study",
      "url": "https://www.cns.s.u-tokyo.ac.jp/en/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "u-tokyo.ac.jp",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
        "site_name": "U-tokyo"
      },
      "is_missing": false,
      "text": "Experimental and theoretical nuclear physics The successful candidates will work on experimental nuclear physics with radioactive isotopes mainly by using the devices of CNS (CRIB, SHARAQ, Ge array, OEDO, etc), on fundamental physics with radioactive heavy elements, on high energy nuclear physics ...\n\nExperimental and theoretical nuclear physics The successful candidates will assist an education and research together with the staff members in CNS on experimental nuclear physics with radioactive isotopes mainly by using the devices of CNS (CRIB, SHARAQ, Ge array, OEDO, etc), on fundamental physics with radioactive heavy elements, on high energy nuclear physics at ALICE at LHC and ePIC at EIC , or on nuclear structure theory. ... Working hours and days are deemed to be 6 hours (10:00-16:45, 12:00-12:45 rest) and five days (Mon - Fri) per week, respectively. ... Saturdays, Sundays, national holidays and end-of-year and new-year holidays (December 29 to January 3), Annual leave, Special Leave, etc ... The successful candidate will be automatically enrolled in the health insurance and pension schemes provided by the Mutual Aid Association of MEXT (Ministry of Education, Culture, Sports, Science and Technology) and will be provided with employment insurance.\n\nExperimental and theoretical nuclear physics The successful candidates will work on experimental nuclear physics with radioactive isotopes mainly by using the devices of CNS (CRIB, SHARAQ, Ge array, OEDO, etc), on fundamental physics with radioactive heavy elements, on high energy nuclear physics at ALICE at LHC and ePIC at EIC, or on nuclear structure theory. Center for Nuclear Study may order the replacement, dual appointment, or secondment of researchers. ... Based on the discretionary work system for professional work, working hours and days are deemed to be 7 hours and 45 minutes per day and five days per week, respectively. ... Saturdays, Sundays, national holidays and end-of-year and new-year holidays (December 29 to January 3), Annual leave, Special Leave, etc ... ~300,000 yen/month (gross). Commuting and other allowances determined following the rules of the University of Tokyo.\n\nCenter for Nuclear Study, the Graduate School of Science, The University of Tokyo (CNS in RIKEN, Hirosawa2-1, Wako-shi, Saitama) ...\n\nCenter for Nuclear Study, Graduate School of Science, the University of Tokyo Director of CNS, Prof. Yasuhiro Sakemi · Tel:048-464-4195 e-mail: sakemi@cns.s.u-tokyo.ac.jp ... Smoking is prohibited inside the grounds of our university. We have smoking areas outdoors. ... Personal information received through this application process will not be used for any other purposes.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.cns.s.u-tokyo.ac.jp/en/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "ISSN 1343-2230 CNS-REP-103 March, 2025 Annual Report 2023",
      "url": "https://www.cns.s.u-tokyo.ac.jp/archive/annual/CNS_annual_report_2023.pdf",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "u-tokyo.ac.jp",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
        "site_name": "U-tokyo"
      },
      "is_missing": false,
      "text": "study the 130Sn(n,g)131Sn reaction using the surrogate ratio · technique via (d,p) transfer reactions. This report details the · experimental setup and the preliminary data analysis per- ... SHARAQ spectrometer. A cocktail beam including the ra- dioactive ion (RI) 130Sn was produced by in-ﬂight ﬁssion of · 238U on a 9Be target. The 130Sn ions were identiﬁed event- by-event using 2D information of their time-of-ﬂight and · x-position near the start of OEDO, as shown in Fig. 1a, and · hereinafter “beam&quot; refers to 130Sn only. The beam energy · was degraded from 170 MeV/nucleon to 23.6 MeV/nucleon · using a 5 mm thick angle-tuneable (6 mrad) wedge-shaped ...\n\nLLFP in the treatment of nuclear waste. This report sum- marises the recently published letter [4] presenting the ﬁnal ... IC depth of ions is plotted in Fig. 2. Clear beam contamina- tion is present in the Z = 41 region around range 755 mm, and this was resolved by applying two-dimensional cuts on · the Z vs range to separate each fragment: Nb, Zr, and Y. Figure 2: Atomic number (Z) vs range of ion (b = 0.212) in · IC at SHARAQ setting DBr=Br0 = 1:5%. Dashed lines · represent the two-dimensional cuts used to select each Z. The ﬁnal PID was achieved by plotting A vs A=Q gated · on each Z locus, shown in Fig. 3. Several loci are observed · for the same isotope owing to the wide charge-state distribu- ... Avrigeanu (Kalbach) breakup model. Future efforts are re- quired for theory to better describe our new results and im- prove deuteron breakup models across the widest possible ... T. Chillerya, N. Imaia, S.\n\nThe Exotic Nuclear Reaction group studies various exotic reactions induced by heavy-ion beams. We continued the data analysis of the the double charge exchange 48Ca(12C;12Be) reaction taken in · 2021 for a search of double Gamow-Teller resonance. The OEDO/SHARAQ group pursues experimental studies with RI beams by using the high- resolution beamline and the SHARAQ spectrometer, and the OEDO for the decelerated RI beams. The uniqueness of the OEDO-SHARAQ system is its versatile performance in low-energy RI produc- tion and high-resolution spectroscopy. Since there is no experiment in 2023, we focus on the analysis · of the data and maintaining the beam line. The result of SHARAQ11, the search for a trineutron · state, has been submitted. The results of the mass-measurement of proton-drip line nuclei has been · summarized as a PhD thesis of the University of Tokyo.\n\nstudy the 130Sn(n,g)131Sn reaction using the surrogate ratio · technique via (d,p) transfer reactions. This report details the · experimental setup and the preliminary data analysis per- ... SHARAQ spectrometer. A cocktail beam including the ra- dioactive ion (RI) 130Sn was produced by in-ﬂight ﬁssion of · 238U on a 9Be target. The 130Sn ions were identiﬁed event- by-event using 2D information of their time-of-ﬂight and · x-position near the start of OEDO, as shown in Fig. 1a, and · hereinafter “beam\" refers to 130Sn only. The beam energy · was degraded from 170 MeV/nucleon to 23.6 MeV/nucleon · using a 5 mm thick angle-tuneable (6 mrad) wedge-shaped ...\n\nN. Imai, T. Kawabata, C. Kim, M. J. Kim, S. Kim, N. Kitamura, M. La Cognata, J. T. Li, Y. Y. Li, Y. F. Lin, F. L. Liu, S. Masuoka, V. Phong, G. Pizzone, K. Sakanashi, S. Soki, C. Soomi, G. Takayama, M. Tanaka, F. Tatsuya, N. Tian, J. H. Won, K. Yako · 1b. Experimental Nuclear Physics: PHENIX Experiment at BNL-RHIC and ALICE Experi- ... Measurement of long-range two-particle correlation and v2(h) over a wide pseudorapidity range in p–Pb collisions at · psNN = 5.02 TeV . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 23 · Y. Sekiguchi for the ALICE Collaboration · Production of direct photons via internal conversions in Pb–Pb collisions at psNN = 5.02 TeV with ALICE at the LHC 25 · D. Sekihata and T. Gunji ... Position ﬁnding algorithm for SR-PPAC .",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.cns.s.u-tokyo.ac.jp/archive/annual/CNS_annual_report_2023.pdf",
        "search_provider": "anthropic",
        "age": "March 2, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "東京大学原子核科学研究センター",
      "url": "https://www.cns.s.u-tokyo.ac.jp/cns/en/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "u-tokyo.ac.jp",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
        "site_name": "U-tokyo"
      },
      "is_missing": false,
      "text": "(Imai Lab. DONUTS · Gunji Lab. Quark Physics · Sakemi Lab. Fundamental Symmetry · Yako Lab. Exotic Nuclear Reaction · Yamaguchi Lab. Nuclear Astrophysics · For more details: Education · CNS conducts comprehensive research activities ranging from instrument development and experiments to theoretical studies, primarily based at the RIKEN Wako campus. Structure and dynamics · OEDO · SHARAQ · © Forward Stroke Inc. Nuclear Astrophysics · CRIB · Fundamental Symmetry · Beamline · Optics · Radioactive source · Quark Physics · ALICE · Developments · ECR ion source · Nuclear Theory · Office · Building · For more details: Research ·\n\n(Imai Lab. DONUTS · Gunji Lab. Quark Physics · Sakemi Lab. Fundamental Symmetry · Yako Lab. Exotic Nuclear Reaction · Yamaguchi Lab. Nuclear Astrophysics · For more details: Education · CNS conducts comprehensive research activities ranging from instrument development and experiments to theoretical studies, primarily based at the RIKEN Wako campus. Structure and dynamics · OEDO · SHARAQ · © Forward Stroke Inc. Nuclear Astrophysics · CRIB · Fundamental Symmetry · Beamline · Optics · Radioactive source · Quark Physics · ALICE · Developments · ECR ion source · Nuclear Theory · Office · Building · For more details: Research ·\n\nAt CNS, graduate students from the Department of Physics, Graduate School of Science, the University of Tokyo, can be accepted into the following laboratories. ... Sakemi Lab. ... Yamaguchi Lab.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.cns.s.u-tokyo.ac.jp/cns/en/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Nobuaki IMAI | Professor (Associate) | Doctor of science | The University of Tokyo, Tokyo | Todai | Center for Nuclear Study | Research profile",
      "url": "https://www.researchgate.net/profile/Nobuaki-Imai",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "researchgate.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
        "site_name": "ResearchGate"
      },
      "is_missing": false,
      "text": "OEDO-SHARAQ system: Multifaceted performances in low-energy RI production and high-resolution spectroscopy ... Jongwon W. Hwang ... Development and fabrication of a thick Ti- 3 H target for the 3 H ( t , 3 He ) 3 n experiment at intermediate energies ... A. Yoshikawa ... Performance of prototype Dual Gain Multilayer Thick GEM with high-intensity heavy-ion beam injections in low-pressure hydrogen gas ... A prototype Dual Gain Multilayer Thick Gas Electron Multilyer (DG-M-THGEM) with an active area of 10 cm $\\times$ 10 cm was manufactured aiming at the production of a large-volume active-target time projection chamber which can work under the condition of high-intensity heavy-ion beam injections. The DG-M-THGEM has a alternating structure of electro... ... Several (α, p) reactions with radioactive-ions (RI) in the αp-process are important to characterize X-ray bursts.\n\nOEDO-SHARAQ system: Multifaceted performances in low-energy RI production and high-resolution spectroscopy ... Jongwon W. Hwang ... Development and fabrication of a thick Ti- 3 H target for the 3 H ( t , 3 He ) 3 n experiment at intermediate energies ... A. Yoshikawa ... Performance of prototype Dual Gain Multilayer Thick GEM with high-intensity heavy-ion beam injections in low-pressure hydrogen gas ... A prototype Dual Gain Multilayer Thick Gas Electron Multilyer (DG-M-THGEM) with an active area of 10 cm $\\times$ 10 cm was manufactured aiming at the production of a large-volume active-target time projection chamber which can work under the condition of high-intensity heavy-ion beam injections. The DG-M-THGEM has a alternating structure of electro... ... Several (α, p) reactions with radioactive-ions (RI) in the αp-process are important to characterize X-ray bursts.\n\nHowever, some of them do not have sufficient experimental data, and the ²⁶Si(α, p)²⁹P reaction is one of such reactions. We performed a direct measurement of the reaction in inverse kinematics with a thick target at the CNS RI beam sepa... ... N. Kitamura ... A. Westerberg · Background: The nucleus Mg32 (N=20 and Z=12) plays a central role in the so-called “island of inversion,” where in the ground states sd-shell neutrons are promoted to the fp-shell orbitals across the shell gap, resulting in the disappearance of the canonical neutron magic number N=20. ... N. Kitamura ... A. Westerberg · Background: The nucleus $^{32}$Mg ($N=20$ and $Z=12$) plays a central role in the so-called \"island of inversion\" where in the ground states $sd$-shell neutrons are promoted to the $fp$-shell orbitals across the shell gap, resulting in the disappearance of the canonical neutron magic number $N=20$. Purpose: The primary goals of this work are to ext...\n\nStudies on nuclear astrophysics, nuclear structure, and other interests have been performed using the radioactive-isotope (RI) beams at the low-energy RI beam separator CRIB, operated by Center for Nuclear Study (CNS), the University of Tokyo. The elastic resonant scattering is a striking tool to study astrophysical reactions and nuclear clusters.... ... N. Kitamura ... A. Westerberg · Background: In the “island of inversion,” ground states of neutron-rich sd-shell nuclei exhibit strong admixtures of intruder configurations from the fp shell. The nucleus Mg30, located at the boundary of the island of inversion, serves as a cornerstone to track the structural evolution as one approaches this region. ... J. G. Cubiss · A. N. Andreyev · A.E. Barzakh ... A comprehensive study of the isotope Au178 has been made at the CERN-ISOLDE facility, using resonance laser ionization.\n\nStudies on nuclear astrophysics, nuclear structure, and other interests have been performed using the radioactive-isotope (RI) beams at the low-energy RI beam separator CRIB, operated by Center for Nuclear Study (CNS), the University of Tokyo. A type of measurement to study astophysical reactions at CRIB is by the elastic resonant scattering with t... ... We performed an experiment to measure proton resonant elastic scattering of a mixed 26m,g Al beam with a thick target in inverse kinematics by using CNS RI beam sep-arator, located at RIKEN Nishina Center. It aimed to search for strong proton resonances and determine level properties of low spin-parity states in ²⁷ Si. Diagnosis of the 26m Al purit... ... We investigated the reaction dynamics induced by the ⁷ Be, ⁸ B+ ²⁰⁸ Pb collisions at energies around the Coulomb barrier. Charged particles originated by both the col- lisions were detected by means of 6 ΔE-E res telescopes of a newly developed detector array.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.researchgate.net/profile/Nobuaki-Imai",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "The 29th International Nuclear Physics Conference (INPC 2025)",
      "url": "https://indico.ibs.re.kr/event/701/contributions/6626/contribution.pdf",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "ibs.re.kr",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=ibs.re.kr",
        "site_name": "Ibs"
      },
      "is_missing": false,
      "text": "are identified with the SHARAQ spectrometer, and the γ-emission probability can be obtained based on the · number of heavy residues with increased neutron number. A 130Sn(d,p) experiment was conducted with this · method to identify the γ-emission probabilities of the neutron unbound states in 131Sn. The kinetic energy · of 130Sn beam was degraded to about 20 MeV/u for the one neutron transfer reaction at OEDO beamline. We · identified Sn isotopes with A = 129, 130, and 131, which correspond to two, one, and zero neutron emissions · after the reaction, respectively. The features of this experiment and the preliminary results on the identified · Sn isotopes after the 130Sn(d,p) reaction will be presented. ... IMAI, Nobu (Center for Nuclear Study, Univ. of Tokyo); Dr CHILLERY, Thomas (Laboratori · Nazionali del Gran Sasso, Istituto Nazionale di Fisica Nucleare); MICHIMASA, Shin’ichiro (Center for Nuclear ·\n\nare identified with the SHARAQ spectrometer, and the γ-emission probability can be obtained based on the · number of heavy residues with increased neutron number. A 130Sn(d,p) experiment was conducted with this · method to identify the γ-emission probabilities of the neutron unbound states in 131Sn. The kinetic energy · of 130Sn beam was degraded to about 20 MeV/u for the one neutron transfer reaction at OEDO beamline. We · identified Sn isotopes with A = 129, 130, and 131, which correspond to two, one, and zero neutron emissions · after the reaction, respectively. The features of this experiment and the preliminary results on the identified · Sn isotopes after the 130Sn(d,p) reaction will be presented. ... IMAI, Nobu (Center for Nuclear Study, Univ. of Tokyo); Dr CHILLERY, Thomas (Laboratori · Nazionali del Gran Sasso, Istituto Nazionale di Fisica Nucleare); MICHIMASA, Shin’ichiro (Center for Nuclear ·\n\nsity of Tokyo); NISHIMURA, N. (Center for Nuclear Study, the University of Tokyo); OKAWA, Kodai (CNS, the ... (RCNP, Osaka Univ.); PALMERINI, Sara (University of Perugia and INFN Perugia, Italy); PIZZONE, R. G. (INFN, LNS); SAITO, T. (Center for Nuclear Study, the University of Tokyo); SHIMIZU, Yohei (RIKEN); SHIMOURA, S. (Center for Nuclear Study, the University of Tokyo); SUMIKAMA, Toshiyuki (RIKEN Nishina Center); SUZUKI, Hiroshi (RIKEN Nishina Center); TAKEDA, H. (RIKEN Nishina Center); TUMINO, A. (Kore Univ. of Enna); TANG, X. (Inst. of Modern Physics); TANAKA, H. (Kyushu Univ.); TANAKA, M. (RIKEN Nishina Center); TERANISHI, T. (Kyushu Univ.); TOGANO, Y. (RIKEN Nishina Center); YOKOYAMA, R. (Center for Nuclear Study, the Univer- sity of Tokyo); YOSHIDA, R.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://indico.ibs.re.kr/event/701/contributions/6626/contribution.pdf",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "OEDO-SHARAQ - Publications",
      "url": "https://sites.google.com/cns.s.u-tokyo.ac.jp/oedo-sharaq/publications",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "google.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=google.com",
        "site_name": "Google"
      },
      "is_missing": false,
      "text": "[SHARAQ08] 2026/Sep/11 M. Dozono et al., &quot;Separated flow operation of the SHARAQ spectrometer for in-flight proton-decay experiments&quot; [Tritium target] K.Miki et al., Development and fabrication of a thick Ti-3H target for the 3H(t,3He)3n experment NIMA 1056,(2023). [SR-PPAC] S. Hanai et al., NIMB 541, 194 (2023). PTEP 123H02 (2023) [IMPACT17-02-X] 2019/April/26 S. Michimasa et al.,PTEP 043D01 (2019) &quot;OEDO, the energy-degrading beamline at RI Beam Factory&quot; was published. [IMPACT17-02-X] 2019/April/26 J.W. Hwang et al., PTEP043D02 (2019) &quot;Angle-tunable wedge degrader for an energy-degrading RI beamline&quot; was published. [Diamond] S. Michimasa et al.,. NIMB317,710 (2013) ... S. Michimasa et al., EMIS2018 to be published. N. Imai, Proceedings of the 2017 Symposium on Nuclear Data, JAEA- Conf2018-001, 39 (2018). ... Nuclear Physics News Vol.\n\n[SHARAQ08] 2026/Sep/11 M. Dozono et al., \"Separated flow operation of the SHARAQ spectrometer for in-flight proton-decay experiments\" [Tritium target] K.Miki et al., Development and fabrication of a thick Ti-3H target for the 3H(t,3He)3n experment NIMA 1056,(2023). [SR-PPAC] S. Hanai et al., NIMB 541, 194 (2023). PTEP 123H02 (2023) [IMPACT17-02-X] 2019/April/26 S. Michimasa et al.,PTEP 043D01 (2019) \"OEDO, the energy-degrading beamline at RI Beam Factory\" was published. [IMPACT17-02-X] 2019/April/26 J.W. Hwang et al., PTEP043D02 (2019) \"Angle-tunable wedge degrader for an energy-degrading RI beamline\" was published. [Diamond] S. Michimasa et al.,. NIMB317,710 (2013) ... S. Michimasa et al., EMIS2018 to be published. N. Imai, Proceedings of the 2017 Symposium on Nuclear Data, JAEA- Conf2018-001, 39 (2018). ... Nuclear Physics News Vol.\n\n[SHARAQ11] 2024/7/3 K. Miki et al., Phys. Rev. Lett. 133, 012501 (2024), \"Precise spectrocopy of 3n and 3p Systems via 3H(t,3He)3n and 3He(3He,t)3p Reactions at Intermediate Energies\" [ImPACT17-02-2] 2024/2/13 N. Imai et al., Physics Letters B (2024) \"Neutron capture reaction cross-section of 79Se through the 79Se(d,p) reaction in inverse kinematics \" [IMPACT17-02-01] 2023/11/17 T. Chillery et al., PTEP 121D01 (2023) \"Studying the impact of deuteron non-elastic breakup on 93Zr + d reaction cross sections measured at 28 MeV/nucleon\" [NP0811] 2012/June/29 K. Miki et al., PRL108, 262503 (2012) \"Identification of beta+ Isovector Spin Monopole Resonance via the 208Pb and 90Zr(t,3He) Reactions at 300 MeV/u\" [SHARAQ02] 2018/Apr/26 S. Noji et al., PRL120, 172501 (2018) \"Excitation of the Isovector Spin Monooile Resonance via the Exothermic 90Zr(12N,12C) Reaction at 175 MeV/u\" [SHARAQ06] 2016/Feb/3 K.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://sites.google.com/cns.s.u-tokyo.ac.jp/oedo-sharaq/publications",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "SHARAQ and OEDO｜Center for Nuclear Study",
      "url": "https://www.cns.s.u-tokyo.ac.jp/en/research/equipments/sharaq/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "u-tokyo.ac.jp",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
        "site_name": "U-tokyo"
      },
      "is_missing": false,
      "text": "RIBF has several spectrometers that analyze the momentum of the RI beams and the CNS main device SHARAQ spectrometer, completed in 2009, features its high resolution (momentum resolution: 1/15000). By using it in combination with a high resolution beamline, a high resolution mass defect spectrum can be obtained. High precision spectroscopy of tetra-neutron state etc. are carried out. In order to broaden the range of the possible experiment, we started the OEDO project to lower the energy without degrading the quality of the RI beam. The construction was completed in March 2017 · For some types of experiments the beam energies available at RIBF are too high. We have therefore constructed a decelerator system called OEDO. This combines the deceleration through energy loss with an RF electric field to refocus the beam. This approach provides beams which are not available elsewhere ...\n\nRIBF has several spectrometers that analyze the momentum of the RI beams and the CNS main device SHARAQ spectrometer, completed in 2009, features its high resolution (momentum resolution: 1/15000). By using it in combination with a high resolution beamline, a high resolution mass defect spectrum can be obtained. High precision spectroscopy of tetra-neutron state etc. are carried out. In order to broaden the range of the possible experiment, we started the OEDO project to lower the energy without degrading the quality of the RI beam. The construction was completed in March 2017. For some types of experiments the beam energies available at RIBF are too high. We have therefore constructed a decelerator system called OEDO. This combines the deceleration through energy loss with an RF electric field to refocus the beam. This approach provides beams which are not available elsewhere in the world as demonstrated by the figure below which shows the mass and energy at RI beam facilities (commen",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.cns.s.u-tokyo.ac.jp/en/research/equipments/sharaq/",
        "search_provider": "anthropic",
        "age": "July 22, 2019"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "globe",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Now I have solid sourced information about the Donuts Group (Imai's group). Let me also fetch the Donuts group page directly for more details.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T09:43:13.419979Z",
  "stop_timestamp": "2026-04-12T09:43:14.059154Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_015cAVwtxW1bgYmbixZ1jayJ",
  "name": "web_fetch",
  "input": {
    "url": "https://donuts.cns.s.u-tokyo.ac.jp/home",
    "html_extraction_method": "markdown",
    "text_content_token_limit": 2000
  },
  "message": "Fetching: https://donuts.cns.s.u-tokyo.ac.jp/home",
  "integration_name": "Web Fetch",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
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
  "tool_use_id": "toolu_015cAVwtxW1bgYmbixZ1jayJ",
  "name": "web_fetch",
  "content": [
    {
      "type": "text",
      "text": "{\"error_type\": \"PERMISSIONS_ERROR\", \"error_message\": \"This URL cannot be fetched because it was not provided by the user nor did it appear in any search/fetch results\"}",
      "uuid": "04028a38-62dd-411a-b6c5-8c4dbfd30d10"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": "Failed to fetch: https://donuts.cns.s.u-tokyo.ac.jp/home",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://donuts.cns.s.u-tokyo.ac.jp/home",
      "subtitles": null,
      "url": "https://donuts.cns.s.u-tokyo.ac.jp/home",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
      "source": "u-tokyo"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Let me try the actual URL for the Donuts group.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T09:43:15.812252Z",
  "stop_timestamp": "2026-04-12T09:43:16.185166Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01VXWnYPeAW6JZP2p4cLhnXh",
  "name": "web_search",
  "input": {
    "query": "Donuts group Imai CNS UTokyo OEDO surrogate reaction nuclear astrophysics LLFP research"
  },
  "message": "Searching the web",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
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
  "tool_use_id": "toolu_01VXWnYPeAW6JZP2p4cLhnXh",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "研究成果 - CNS_Donuts - 東京大学",
      "url": "https://donuts.cns.s.u-tokyo.ac.jp/home/Achievements",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "u-tokyo.ac.jp",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
        "site_name": "U-tokyo"
      },
      "is_missing": false,
      "text": "N. Imai (oral) &quot;Evaluation of the neutron capture reaction on 79Se via a surrogate reaction of d(79Se, p) reaction at OEDO&quot; ... M. Dozono, &quot;Proton induced reactions on 107Pd at around 30 MeV/nucleon: First result using sloweddown RI beams at OEDO &quot; N. Kitamura, &quot;Structure of 30Mg studied by in-beam gamma-ray spectroscopy via neutron knockout reactions &quot; 2019/ Aug. 26--28, 8th SUNFLOWER Workshop / HiCARI Workshop, Osaka University, Osaka, Japan. N. Kitamura, &quot;High-resolution spectroscopy of $^{95\\text{--}98}$Kr&quot; 2019/9/17-20, 日本物理学会2019年秋季大会 · 今井伸明, 「逆運動学79Se(d,p)反応による中性子捕獲反応断面積の評価」 · 2019/12/6-7 JSPS/NRF/NSFC A3 Foresight Program “Nuclear Physics in the 21st Century” Joint Kickoff Meeting · M. Dozono &quot;Nuclear astrophysics studies with OEDO&quot; ... 2018/10/22-26 , Fifth Joint Meeting of the Nuclear Physics Divisions of the American Physical Society and the Physical Society of Japan (Hawaii2018) N.\n\nN. Imai \"The decelerating and focusing device OEDO in RIBF and the nuclear astrophysics program with the surrogate nuclear reaction \" ... N. Imai \"OEDO, the deceleration and focusing element at RIBF, and the physics program using OEDO\" ... S. Hanai. “Direct measurement of the masses of Fe isotopes around the proton dripline”, 2022/08/30, oral ... S. Hanai, \"Direct measurement of the masses of Fe isotopes around the proton dripline” · 19 th International Conference on Electromagnetic Isotopes Separators and Related Topics (EMIS22), S. Hanai, “Development of a fast response PPAC for high-intensity heavy-ion beams”, 2022/10/03, poster ... N. Imai (oral) \"Single particle structure coupled to the second 0+ state in 32Mg\" ... N. Imai (invited) \"Controlling the motions of two kinds of fermions in a nucleus, a new energy degraded RI beam line OEDO\" 2019/5/22-24 基研研究会 原子核物理で紡ぐr-process ·\n\n研究会「重力波観測時代のrプロセスと不安定核」、6月 理研 堂園昌伯, 「r-process study with OEDO」 · Open-It 若手の会研究会，2018年9月 北村徳隆，シリコン検出器用広帯域プリアンプの開発， · 12月 RIBF Users group meeting 2017/12/6, RIBF conference room N. Imai (Invited) \"Nuclear Data of LLFP and Future prospect of a new energy degraded beam line OEDO\" 11月 2017年度核データ研究会 2017/11/16, 17 東海村産業・情報プラザ (アイヴィル) N. Imai(Invited) \"OEDOを用いた低エネルギーLLFPの核反応データ取得\" 10月 CAGRA workshop 2017 N. Imai (invited) \"Energy-degraded beam line at RIBF, OEDO\" O. Beliuskina \"The ultrafast dE-ToF sc diamond detector\" P. Schrock (invited) \"Transfer Reactions with CAGRA at OEDO\" 9月 日本物理学会 宇都宮大学 北村徳隆 「TRIUMF におけるトリチウム標的の評価」 今井伸明「不安定核物理の将来」（シンポジウム講演） ·\n\n2018/6/4-8, Matsue, Shimane, Direct Reactions with Exotic Beams 2018 (DREB2018)N. Imai (oral) \"79Se(d,p)80Se reaaction as a surrogate of (n,g)\"P. Schrock(poster) \"recoil particle detector array TiNA\"M. Dozono (poster) \"proton/deutetron induced reaction with 107Pd and 93Zr\" 2018/9 Northern East Asia Symposium, NagoyaN. Imai (invited) \"Experimental studies with the energy-degraded RI beams\" 2017/11/27-28, Zagreb, Croatia. The 6th ADAMAS WorkshopO. Beliuskina (oral) \"The ultrafast dE-ToF single crystal diamond detector\" 2017/9/25-30, Ha-noi, Vitnam, The International Symposium on Physics of Unstable Nuclei 2017P. Schrock (oral), \"Shell structure at the border of the island of inversion: Spectroscopy of neutron-rich Al isotopes.\" 2016/9/18-20 HIAS2016 Canberra, Austlaia,N. Imai, \"OEDO and proton resonance elastic scattering\" (invited) 2016/11/16-18 RISP-RNC RIB physics workshop, Daejeong, KoreaN.\n\nN. Imai (oral) \"Evaluation of the neutron capture reaction on 79Se via a surrogate reaction of d(79Se, p) reaction at OEDO\" ... M. Dozono, \"Proton induced reactions on 107Pd at around 30 MeV/nucleon: First result using sloweddown RI beams at OEDO \" N. Kitamura, \"Structure of 30Mg studied by in-beam gamma-ray spectroscopy via neutron knockout reactions \" 2019/ Aug. 26--28, 8th SUNFLOWER Workshop / HiCARI Workshop, Osaka University, Osaka, Japan. N. Kitamura, \"High-resolution spectroscopy of $^{95\\text{--}98}$Kr\" 2019/9/17-20, 日本物理学会2019年秋季大会 · 今井伸明, 「逆運動学79Se(d,p)反応による中性子捕獲反応断面積の評価」 · 2019/12/6-7 JSPS/NRF/NSFC A3 Foresight Program “Nuclear Physics in the 21st Century” Joint Kickoff Meeting · M. Dozono \"Nuclear astrophysics studies with OEDO\" ... 2018/10/22-26 , Fifth Joint Meeting of the Nuclear Physics Divisions of the American Physical Society and the Physical Society of Japan (Hawaii2018) N.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://donuts.cns.s.u-tokyo.ac.jp/home/Achievements",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "ISSN 1343-2230 CNS-REP-102 March, 2024 Annual Report 2022",
      "url": "https://www.cns.s.u-tokyo.ac.jp/archive/annual/CNS_annual_report_2022.pdf",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "u-tokyo.ac.jp",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
        "site_name": "U-tokyo"
      },
      "is_missing": false,
      "text": "RI experiments for (d, p)-type surrogate reactions and a high-resolution direct mass measurement for · two-proton radioactivity were performed. Through the measurements, we were able to demonstrate · a smooth re-arrangement of the beamline and experimental detector setups. In addition, we installed · an active stopper detector and g-ray detectors for the in-ﬂight isomeric tagging of exotic nuclei in the · mass measurement program. Data analysis of performed experiments is ongoing. The experimental · study of 0 strength in nuclei using the parity-transfer charge exchange (16O, 16F) is in the ﬁnal stage. The results of the ﬁrst and second experiments with the OEDO system for LLFPs will be completed ... measurement of astrophysical 14O(a, p) reaction in an international collaboration with the groups in · IBS (Korea), Texas A&amp;M University (US) and others.\n\nData Analysis of OEDO day-0 Experiment Measuring 93Zr + d Transmutation Reactions for the Study of Deuteron · Breakup . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 · T. Chillery, J. W. Hwang, M. Dozono, N. Imai, S. Michimasa, T. Sumikama, N. Chiga, S. Ota, S. Nakayama · Surrogate reaction of 130Sn(n;g) at OEDO . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .3 · N. Imai, S. Michimasa, T. Chillery, D. Suzuki, D.S. Ahn, A. Chae, S. Cherubini, M. La Cognata, M. Dozono, M. Egeta, F. Endo, N. Fukuda, T. Haginouchi, S. Hanai, S. Hayakawa, J.W. Hwang, Y. Hijikata, S. Ishio, N. Iwasa, K. Kawata, S. Kubono, R. Kojima, L. Lamia, J.\n\nT. Chillery, J. W. Hwanga, M. Dozonob, N. Imai, S. Michimasa, T. Sumikamac, N. Chigac, S. Otad, S. Nakayamae ... a Center for Exotic Nuclear Studies, Institute for Basic Science (IBS), Daejeon 34126, Rep. of Korea · b Graduate School of Science, Kyoto University, Sakyo, Kyoto 606-8501, Japan · c RIKEN Nishina Center for Accelerator-Based Science, Wako, Saitama 351-0198, Japan · d Research Center for Nuclear Physics, Osaka University, Ibaraki, Osaka 567-0047, Japan · e Nuclear Data Center, Japan Atomic Energy Agency, Ibaraki, Japan · Radioactive high level waste (HLW) treatment remains a · challenge in achieving long-term sustainability of nuclear · power generation [1]. In particular, long-lived ﬁssion prod- ucts (LLFPs) with half lives reaching millions of years con- tinue to pose a problem to waste management. A promis- ing alternative is using nuclear transmutation, whereby the ·\n\nReport on OEDO-SHARAQ experiments in FY 2022 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .5 · S. Michimasa, T. Chillery, N. Imai, R. Yokoyama, N. Kitamura, S. Hanai, R. Kojima, J. W. Hwang, T. Sumikama, M. Dozono, S. Ota, D. S. Ahn, Y. Hijikata, K. Kawata, K. Kusaka, J. Li, M. Ohtake, D. Suzuki, H. Suzuki, H. Takeda, K Yako, Y. Yanagisawa, K. Yoshida, M. Yoshimoto, S. Shimoura · Study of n p-process nucleosynthesis at OEDO . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .7 · D. Suzuki, B. Mauss, N. Imai, S. Michimasa, D. Beaumel, K.Y. Chae, S. Cherubini, T. Chillery, M. Do- zono, M. Egeta, F. Endo, N. Fukuda, T. Haginouchi, S. Hanai, S. Hayakawa, Y. Hijikata, J.W. Hwang, S. Ishio, N. Iwasa, S. Kawase, K.\n\nand 19, respectively, were performed at the OEDO-SHARAQ system in inverse kinematics by em- ploying the surrogate technique, where the decay channels of the unbound states were identiﬁed · directly from the measurement of reaction residues. Prior to the SHARAQ18, MS22-01 was carried · out to establish a new optics for transporting the ion beam with better transmission. In winter 2022, another OEDO experiment, SHARAQ12, for the single particle structure in 51Ca was partially per- formed. The analyses of the experiments, ImPACT17-02-01, -02, and SHARAQ11, 4He(8He, 8Be)4n · reaction, are in progress. The analysis of the groundbreaking experiment on the inelastic decay from · the isobaric analog resonances is almost ﬁnished. The CNS GRAPE (Gamma-Ray detector Array · with Position and Energy sensitivity) is a major instrument for high-resolution in-beam gamma-ray ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.cns.s.u-tokyo.ac.jp/archive/annual/CNS_annual_report_2022.pdf",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Nobuaki IMAI | Professor (Associate) | Doctor of science | The University of Tokyo, Tokyo | Todai | Center for Nuclear Study | Research profile",
      "url": "https://www.researchgate.net/profile/Nobuaki-Imai",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "researchgate.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=researchgate.net",
        "site_name": "ResearchGate"
      },
      "is_missing": false,
      "text": "The OEDO (Optimized Energy Degrading Optics for RI beam) beamline has been developed to obtain low-energy (10 – 50 MeV/u) RI beams by slowing down the secondary beams at RIBF, RIKEN.\n\nThe OEDO (Optimized Energy Degrading Optics for RI beam) beamline has been developed to obtain low-energy (10 – 50 MeV/u) RI beams by slowing down the secondary beams at RIBF, RIKEN. Such beams are useful probes to investigate nuclear structure by means of nucleon transfer and Coulomb excitation reactions. The beamline is designed to produce a well... ... The elastic scattering process for the nuclear reactions induced by the Radioactive Ion Beams ⁷ Be and ⁸ B on a ²⁰⁸ Pb target was measured for the first time in the energy range around the Coulomb barrier. Extensive theoretical calculations within the framework of the optical model were performed. An excellent agreement between experimental data an... ... Studies on nuclear astrophysics, nuclear structure, and other interests have been performed using the radioactive-isotope (RI) beams at the low-energy RI beam separator CRIB, operated by Center for Nuclear Study (CNS), the University of Tokyo.\n\nStudies on nuclear astrophysics, nuclear structure, and other interests have been performed using the radioactive-isotope (RI) beams at the low-energy RI beam separator CRIB, operated by Center for Nuclear Study (CNS), the University of Tokyo. A type of measurement to study astophysical reactions at CRIB is by the elastic resonant scattering with t... ... We performed an experiment to measure proton resonant elastic scattering of a mixed 26m,g Al beam with a thick target in inverse kinematics by using CNS RI beam sep-arator, located at RIKEN Nishina Center. It aimed to search for strong proton resonances and determine level properties of low spin-parity states in ²⁷ Si. Diagnosis of the 26m Al purit... ... We investigated the reaction dynamics induced by the ⁷ Be, ⁸ B+ ²⁰⁸ Pb collisions at energies around the Coulomb barrier. Charged particles originated by both the col- lisions were detected by means of 6 ΔE-E res telescopes of a newly developed detector array.\n\nOEDO-SHARAQ system: Multifaceted performances in low-energy RI production and high-resolution spectroscopy ... Jongwon W. Hwang ... Development and fabrication of a thick Ti- 3 H target for the 3 H ( t , 3 He ) 3 n experiment at intermediate energies ... A. Yoshikawa ... Performance of prototype Dual Gain Multilayer Thick GEM with high-intensity heavy-ion beam injections in low-pressure hydrogen gas ... A prototype Dual Gain Multilayer Thick Gas Electron Multilyer (DG-M-THGEM) with an active area of 10 cm $\\times$ 10 cm was manufactured aiming at the production of a large-volume active-target time projection chamber which can work under the condition of high-intensity heavy-ion beam injections. The DG-M-THGEM has a alternating structure of electro... ... Several (α, p) reactions with radioactive-ions (RI) in the αp-process are important to characterize X-ray bursts.\n\nThe Optimized Energy Degrading Optics (OEDO) beamline was constructed at RIBF to produce slowed-down, well-focused radioactive-isotope beams at 10–50 MeV/u, and began operation in June 2017. We examined the performance of the OEDO system by decelerating high-energy medium-mass radioactive ions. The main components of the OEDO beamline are two super... ... Inverse odd-even staggering in nuclear charge radii and possible octupole collectivity in At 217 , 218 , 219 revealed by in-source laser spectroscopy ... A.E. Barzakh · J. G. Cubiss · A. N. Andreyev ... Hyperfine-structure parameters and isotope shifts for the 795-nm atomic transitions in At217,218,219 have been measured at CERN-ISOLDE, using the in-source resonance-ionization spectroscopy technique. Magnetic dipole and electric quadrupole moments, and changes in the nuclear mean-square charge radii, have been deduced.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.researchgate.net/profile/Nobuaki-Imai",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "東京大学原子核科学研究センター",
      "url": "https://www.cns.s.u-tokyo.ac.jp/cns/en/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "u-tokyo.ac.jp",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
        "site_name": "U-tokyo"
      },
      "is_missing": false,
      "text": "(Imai Lab. DONUTS · Gunji Lab. Quark Physics · Sakemi Lab. Fundamental Symmetry · Yako Lab. Exotic Nuclear Reaction · Yamaguchi Lab. Nuclear Astrophysics · For more details: Education · CNS conducts comprehensive research activities ranging from instrument development and experiments to theoretical studies, primarily based at the RIKEN Wako campus. Structure and dynamics · OEDO · SHARAQ · © Forward Stroke Inc. Nuclear Astrophysics · CRIB · Fundamental Symmetry · Beamline · Optics · Radioactive source · Quark Physics · ALICE · Developments · ECR ion source · Nuclear Theory · Office · Building · For more details: Research ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.cns.s.u-tokyo.ac.jp/cns/en/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "CNS_Donuts - SAKURA Project",
      "url": "https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "google.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=google.com",
        "site_name": "Google"
      },
      "is_missing": false,
      "text": "We started a SAKURA project to answer the question of the origin of the matter in the universe by employing the world-unique device OEDO-SHARAQ in RIBF in 2019 following the successful experiment of the IMPACT17-02-02 in which neutron capture ...\n\nWe started a SAKURA project to answer the question of the origin of the matter in the universe by employing the world-unique device OEDO-SHARAQ in RIBF in 2019 following the successful experiment of the IMPACT17-02-02 in which neutron capture rate on long-lived isotope of 79Se was evaluated. In 19th NP-PAC of RIBF, two experimental proposals were approved. The first one is for the r-process nucleosynthesis, while the other is for nu-p process. Here is the summary of the project. Some of them can be accessed by only collaborators of the project.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "OEDO-SHARAQ",
      "url": "https://oedo-sharaq.cns.s.u-tokyo.ac.jp/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "u-tokyo.ac.jp",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
        "site_name": "U-tokyo"
      },
      "is_missing": false,
      "text": "Donuts Group (Ass. Prof. Imai), CNS, University of Tokyo · Exotic Reaction Group (Ass. Prof. Yako), CNS, University of Tokyo ·\n\nDonuts Group (Ass. Prof. Imai), CNS, University of Tokyo · Exotic Reaction Group (Ass. Prof. Yako), CNS, University of Tokyo ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://oedo-sharaq.cns.s.u-tokyo.ac.jp/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "CNS_Donuts - 研究内容",
      "url": "https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "google.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=google.com",
        "site_name": "Google"
      },
      "is_missing": false,
      "text": "核変換で生成される核種は、反応を起こす粒子の種類やエネルギーに大きく依存します。したがって、多種多様な核変換データを取得し、効率的な核変換法を模索する必要があります。 理化学研究所のRIビームファクトリー(RIBF)では、長寿命核種をビームとして生成することができます。 さらに、我々が開発したRIビーム減速・収束装置「OEDO」の導入により、光速の約10%から70%までの幅広いエネルギー領域でビームを制御できるようになりました。 これにより、今後、多種多様な核変換データを取得していく予定です。 2017年には、長寿命核分裂片79Seの中性子捕獲反応評価実験、107Pd, 93Zrの陽子誘起反応断面積を測定しました。\n\n核変換で生成される核種は、反応を起こす粒子の種類やエネルギーに大きく依存します。したがって、多種多様な核変換データを取得し、効率的な核変換法を模索する必要があります。 理化学研究所のRIビームファクトリー(RIBF)では、長寿命核種をビームとして生成することができます。 さらに、我々が開発したRIビーム減速・収束装置「OEDO」の導入により、光速の約10%から70%までの幅広いエネルギー領域でビームを制御できるようになりました。 これにより、今後、多種多様な核変換データを取得していく予定です。 2017年には、長寿命核分裂片79Seの中性子捕獲反応評価実験、107Pd, 93Zrの陽子誘起反応断面積を測定しました。",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Progress in nuclear astrophysics of east and southeast Asia | AAPPS Bulletin | Springer Nature Link",
      "url": "https://link.springer.com/article/10.1007/s43673-021-00018-z",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "springer.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=springer.com",
        "site_name": "Springer"
      },
      "is_missing": false,
      "text": "Using the low-energy RI beams in the OEDO project, (d,p) reactions as surrogate process of corresponding (n, γ) reactions on r-process nuclei will be studied under the a collaboration involving Asian institutes such as CNS, RIKEN, IMP, and SKKU. The region around 132Sn with N=82 is a target. The feasibility of the method was already tested successfully for 79Se(n, γ) at around few MeV of neutron energy. The KISS project and its future extension KISS-II aims to approach the blank-spot or the &quot;south-east&quot; region of 208Pb and further “east” beyond N=126, which includes the progenitor parent nuclei for the r-process 3rd peak element. The group of Wako Nuclear Science Center (WNSC) of KEK found the deep-inelastic collisions or multi-nucleon transfers can be more efficient to reach that region compared with the projectile fragmentation or fission usually employed in most of the RI-beam facilities.\n\nNuclear astrophysics is an interdisciplinary research field of nuclear physics and astrophysics, seeking for the answer to a question, how to understand the evolution of the universe with the nuclear processes which we learn. We review the research activities of nuclear astrophysics in east and southeast Asia which includes astronomy, experimental and theoretical nuclear physics, and astrophysics. Several hot topics such as the Li problems, critical nuclear reactions and properties in stars, properties of dense matter, r-process nucleosynthesis, and ν-process nucleosynthesis are chosen and discussed in further details. Some future Asian facilities, together with physics perspectives, are introduced.\n\nUsing the low-energy RI beams in the OEDO project, (d,p) reactions as surrogate process of corresponding (n, γ) reactions on r-process nuclei will be studied under the a collaboration involving Asian institutes such as CNS, RIKEN, IMP, and SKKU. The region around 132Sn with N=82 is a target. The feasibility of the method was already tested successfully for 79Se(n, γ) at around few MeV of neutron energy. The KISS project and its future extension KISS-II aims to approach the blank-spot or the \"south-east\" region of 208Pb and further “east” beyond N=126, which includes the progenitor parent nuclei for the r-process 3rd peak element. The group of Wako Nuclear Science Center (WNSC) of KEK found the deep-inelastic collisions or multi-nucleon transfers can be more efficient to reach that region compared with the projectile fragmentation or fission usually employed in most of the RI-beam facilities.\n\nThe νp-process in type II supernovae might run a little closer to the line of stability because of presence of a small fraction of neutrons which discard the waiting points of the rp-process [206]. The neutrino oscillations, which is discussed in Section 3.5, the critical nuclear reactions, and nuclear properties are essential for the model development. A recent precision mass measurement at HIRFL indicated that the rp-process may go through the Zr-Nb region, suggesting less feasible to have a previously reported Zr-Nb cycle at 84Mo [63]. 56Ni(n,p) 56Co has been identified as the critical reaction which impact the nucleosynthesis [206]. This reaction will be studied indirectly by slowing-down beams with a novel technique in the OEDO (Optimized Energy Degrading Optics for RI beam) project, which is installed in RIKEN RIBF by CNS [207]. Recently, astronomers reported observation of a bump near the K edge of nuclides of Z = 48-49 in the XRB [208], although the resolution was not good.\n\nExperimental and theoretical studies have been being carried out to identify the critical reactions and improve their accuracies with various techniques. Nucleosynthesis calculation identified the 59Fe stellar decay rates as one major uncertainty in the model [215]. This uncertainty has been eliminated recently by an IMP–NSCL collaboration. Their experimental result shows the 60Fe yield would be reduced by using the new rate, alleviating the tension between some model predictions and the observation [216]. The 59Fe(n, γ) 60Fe was re-studied by the CIAE and JAEA collaboration using the surrogate method. The 26Si(p, γ) 27P and 25Al(p, γ) 26Si reactions are well known as the relevant synthesis mechanism of 26Algs. The 26Si+p and 25Al+p elastic scattering experiments were performed by using CRIB to study the abundance of 26Al. Six resonance states were observed in the 26Si+p elastic scattering experiment.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://link.springer.com/article/10.1007/s43673-021-00018-z",
        "search_provider": "anthropic",
        "age": "August 3, 2021"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Center for Nuclear Study",
      "url": "https://www.cns.s.u-tokyo.ac.jp/en/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "u-tokyo.ac.jp",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
        "site_name": "U-tokyo"
      },
      "is_missing": false,
      "text": "CNS has several devices in RIBF in RIKEN Nishina Center and pursues the experimental nuclear physics such as nuclear astrophysics and nuclear structure/reaction studies with radioactive isotope beams. We also have branches of fundamental physics with radioactive heavy elements, high-energy ...\n\nCNS has several devices in RIBF in RIKEN Nishina Center and pursues the experimental nuclear physics such as nuclear astrophysics and nuclear structure/reaction studies with radioactive isotope beams. We also have branches of fundamental physics with radioactive heavy elements, high-energy nuclear physics, nuclear theory and development of ion sources. ... One-year fixed-term employment contract, renewable up to March 31st, 2028 (maximum 3 years) according to research budget, research activity, and research achievements. ... Center for Nuclear Study, the Graduate School of Science, The University of Tokyo (CNS in RIKEN, Hirosawa2-1, Wako-shi, Saitama) ... Experimental and theoretical nuclear physics The successful candidates will assist an education and research together with the staff members in CNS on experimental nuclear physics with radioactive isotopes mainly by using the devices of CNS (CRIB, SHARAQ, Ge array, OEDO, etc), on fundamental physics with radioactive heavy elements, on\n\nCNS has several devices in RIBF in RIKEN Nishina Center and pursues the experimental nuclear physics such as nuclear astrophysics and nuclear structure/reaction studies with radioactive isotope beams. We also have branches of fundamental physics with radioactive heavy elements, high-energy nuclear physics, nuclear theory and development of ion sources. CNS is calling for applications for postdoctoral research fellows in the field of experimental and theoretical nuclear physics. ... One-year fixed-term employment contract, renewable up to March 31st, 2028 (maximum 3 years) according to research budget, research activity, and research achievements. ... Center for Nuclear Study, the Graduate School of Science, The University of Tokyo (CNS in RIKEN, Hirosawa2-1, Wako-shi, Saitama) ... Experimental and theoretical nuclear physics The successful candidates will work on experimental nuclear physics with radioactive isotopes mainly by using the devices of CNS (CRIB, SHARAQ, Ge array, OEDO, etc",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.cns.s.u-tokyo.ac.jp/en/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "ISSN 1343-2230 CNS-REP-103 March, 2025 Annual Report 2023",
      "url": "https://www.cns.s.u-tokyo.ac.jp/archive/annual/CNS_annual_report_2023.pdf",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "u-tokyo.ac.jp",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=u-tokyo.ac.jp",
        "site_name": "U-tokyo"
      },
      "is_missing": false,
      "text": "mised Energy Degrading Optics (OEDO) beamline [4,5] to · study the 130Sn(n,g)131Sn reaction using the surrogate ratio · technique via (d,p) transfer reactions. This report details the · experimental setup and the preliminary data analysis per- ... SHARAQ spectrometer. A cocktail beam including the ra- dioactive ion (RI) 130Sn was produced by in-ﬂight ﬁssion of · 238U on a 9Be target. The 130Sn ions were identiﬁed event- by-event using 2D information of their time-of-ﬂight and · x-position near the start of OEDO, as shown in Fig. 1a, and · hereinafter “beam&quot; refers to 130Sn only. The beam energy · was degraded from 170 MeV/nucleon to 23.6 MeV/nucleon · using a 5 mm thick angle-tuneable (6 mrad) wedge-shaped ...\n\nT. Chillery, J. W. Hwanga, M. Dozonob, N. Imai, S. Michimasa, T. Sumikamac, N. Chigac, S. Otad, S. Nakayamae ... a Center for Exotic Nuclear Studies, Institute for Basic Science (IBS), Daejeon 34126, Rep. of Korea · b Graduate School of Science, Kyoto University, Sakyo, Kyoto 606-8501, Japan · c RIKEN Nishina Center for Accelerator-Based Science, Wako, Saitama 351-0198, Japan · d Research Center for Nuclear Physics, Osaka University, Ibaraki, Osaka 567-0047, Japan · e Nuclear Data Center, Japan Atomic Energy Agency, Ibaraki, Japan · Owing to the deuteron’s low binding energy it is eas- ily broken apart by the Coulomb and nuclear ﬁelds of ... LLFP in the treatment of nuclear waste. This report sum- marises the recently published letter [4] presenting the ﬁnal ... IC depth of ions is plotted in Fig. 2. Clear beam contamina- tion is present in the Z = 41 region around range 755 mm, and this was resolved by applying two-dimensional cuts on ·\n\nN. Imai, Y. Yamaguchi, H. Sakemi · On the 1st IReNA-Ukakuren Joint Workshop “Advancing Professional Development in Nuclear Astrophysics and Be- yond” . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 52 · S. Hayakawa, C. Ishizuka, T. Chillery, A. Dohi, N. Fukagawa, T. Hatsuda, S. Iimura, M. Ishigaki, T. Isobe, K. Mori, N. Nishimura, K. Otsuki, R. Sawada, S. Yoshida, T. Kawabata ... Symposium, Workshop, Seminar, and PAC . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .55 · CNS Reports . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .\n\nﬁssion products with protons and detereons, and the surrogate reaction of the neutron capture reaction, have been published. The data analysis of the other experiments are in progress. In addition, as a pilot · experiment of the fusion reaction measurement at OEDO in the future, we launched a new project to · evaluate the fusion reaction cross sections of the near symmetric system at HIMAC. Also the ASAGI · board for the readout of SR-PPAC is being developed. The CNS GRAPE (Gamma-Ray detector Array · with Position and Energy sensitivity) is a major instrument for high-resolution in-beam gamma-ray · spectroscopy. The digital signal processing equipment for the GRAPE is under development. The Exotic Nuclear Reaction group studies various exotic reactions induced by heavy-ion beams. We continued the data analysis of the the double charge exchange 48Ca(12C;12Be) reaction taken in ·\n\nmised Energy Degrading Optics (OEDO) beamline [4,5] to · study the 130Sn(n,g)131Sn reaction using the surrogate ratio · technique via (d,p) transfer reactions. This report details the · experimental setup and the preliminary data analysis per- ... SHARAQ spectrometer. A cocktail beam including the ra- dioactive ion (RI) 130Sn was produced by in-ﬂight ﬁssion of · 238U on a 9Be target. The 130Sn ions were identiﬁed event- by-event using 2D information of their time-of-ﬂight and · x-position near the start of OEDO, as shown in Fig. 1a, and · hereinafter “beam\" refers to 130Sn only. The beam energy · was degraded from 170 MeV/nucleon to 23.6 MeV/nucleon · using a 5 mm thick angle-tuneable (6 mrad) wedge-shaped ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.cns.s.u-tokyo.ac.jp/archive/annual/CNS_annual_report_2023.pdf",
        "search_provider": "anthropic",
        "age": "March 2, 2025"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "globe",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Now I have a comprehensive picture of the Donuts group. Let me synthesize the key research directions from the sources:

**Donuts Group (Ass. Prof. Nobuaki Imai), CNS, UTokyo** - [confirmed from CNS website]

Primary research pillars (from actual publications and presentations):

1. **Surrogate reactions via (d,p) on short-lived nuclei** - this is THE main method
   - ⁷⁹Se(d,p)⁸⁰Se as surrogate for ⁷⁹Se(n,γ) [published: Imai et al., Phys. Lett. B (2024)]
   - They've extended this approach to heavier nuclei like ¹³⁰Sn(d,p) for studying neutron capture, with recent results presented at INPC 2025, and they're running a series of experiments at SHARAQ including ⁵⁶Ni(d,p) measurements

2. **Nuclear transmutation of Long-Lived Fission Products (LLFPs)** - the applied motivation
   - ⁹³Zr, ¹⁰⁷Pd

Now looking at how (d,p) reactions provide transmutation cross sections, particularly for ⁷⁹Se neutron capture which relates to nuclear waste management, and they're conducting their first OEDO experiments targeting these long-lived fission products. The SAKURA project ties together the astrophysical and applied sides—using surrogate (d,p) reactions around ¹³²Sn to probe the r-process waiting point at N=82, while also investigating νp-process nucleosynthesis through reactions like ⁵⁶Ni(n,p), all leveraging the OEDO-SHARAQ system. On the nuclear structure side, they're examining shell evolution and the island of inversion through measurements like the ³²Mg single particle structure coupled to the 0⁺ state at N=20, ⁵¹Ca at the N=32 subshell closure, using proton resonance elastic scattering and in-beam gamma spectroscopy.

The OEDO beamline itself is the key instrument—it's an energy degrading system that takes the RIBF secondary beams down from ~170 MeV/u to the 10-50 MeV/u range needed for these reactions, with a world-unique RF refocusing capability after degradation. Supporting this are specialized detectors including a dual gain multilayer thick GEM prototype active-target TPC designed for high-intensity beams, fast response PPACs, and diamond detectors for energy-time-of-flight measurements. What ties everything together is that the OEDO-SHARAQ system enables (d,p)-type surrogate reactions on exotic nuclei at these lower energies, extracting both neutron-induced reaction cross sections and nuclear structure information simultaneously.

Now I'm seeing how this connects directly to the ²³⁷U(d,p) example from the slide—that would be an actinide extension of the Donuts group's existing surrogate work on nuclei like ⁷⁹Se and ¹³⁰Sn. I need to restructure the visualization to make it clear this is specifically Donuts group research, position OEDO-SHARAQ as the central instrumental platform, and show how the three research pillars—r-process nucleosynthesis with SAKURA, LLFP transmutation, and nuclear structure—all flow from this same experimental capability.

</details>

Good — now I have the full sourced picture of the Donuts group. Let me rebuild the widget with their actual research identity integrated.

**Key corrections needed** (facts, not inferences):

- Imai's group is officially named **DONUTS** at CNS, UTokyo, under the "Structure and dynamics" pillar using OEDO and SHARAQ.
- The Donuts group runs the **SAKURA project** to study the origin of matter using the OEDO-SHARAQ system — two approved programs: r-process nucleosynthesis and the νp-process.
- A landmark result was the published measurement of the neutron capture cross section of ⁷⁹Se through the ⁷⁹Se(d,p) reaction in inverse kinematics (Imai et al., Physics Letters B, 2024) — the proof-of-concept for LLFP transmutation data via surrogate.
- The 2022–2023 flagship experiments SHARAQ18 and 19 performed ¹³⁰Sn(d,p) and ⁵⁶Ni(d,p) via the surrogate technique at OEDO, identifying decay channels of unbound states directly from reaction residues.
- The OEDO collaboration explicitly includes IMP (your current institute) alongside CNS and RIKEN for (d,p) surrogate studies of r-process nuclei around ¹³²Sn (N=82).

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T09:43:45.151188Z",
  "stop_timestamp": "2026-04-12T09:45:39.131375Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_014ao63YXiVH1jU89wDJhRiy",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": [
      "Tuning the OEDO beamline",
      "Loading SAKURA physics program",
      "Placing the Donuts group on the map",
      "Wiring surrogate channels to astrophysics"
    ],
    "title": "U237_dp_Donuts_group_aligned",
    "widget_code": "\n<style>\n  @keyframes glow { 0%,100%{opacity:0.4} 50%{opacity:0.9} }\n  @keyframes appear { from{opacity:0;transform:translateY(6px)} to{opacity:1;transform:none} }\n  @keyframes pulse-border { 0%,100%{box-shadow:0 0 0 0 rgba(24,95,165,0)} 50%{box-shadow:0 0 0 3px rgba(24,95,165,0.3)} }\n  .step-dot { width:10px;height:10px;border-radius:50%;background:var(--color-border-secondary);transition:background .3s,transform .3s; }\n  .step-dot.active { background:var(--color-text-info);transform:scale(1.3); }\n  .tab-btn { padding:6px 14px;border-radius:20px;border:0.5px solid var(--color-border-secondary);background:transparent;color:var(--color-text-secondary);font-size:13px;cursor:pointer;transition:all .2s; }\n  .tab-btn.active { background:var(--color-background-info);color:var(--color-text-info);border-color:transparent; }\n  .info-box { background:var(--color-background-secondary);border:0.5px solid var(--color-border-tertiary);border-radius:10px;padding:12px 16px;font-size:13px;color:var(--color-text-secondary);line-height:1.65;animation:appear .35s ease; }\n  .tag { display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:500; }\n  .tag-blue { background:var(--color-background-info);color:var(--color-text-info); }\n  .tag-amber { background:#FAEEDA;color:#633806; }\n  .tag-red { background:#FCEBEB;color:#501313; }\n  .tag-green { background:#EAF3DE;color:#173404; }\n  .tag-teal { background:#E1F5EE;color:#04342C; }\n  .tag-purple { background:#EEEDFE;color:#26215C; }\n  .nav-btn { padding:7px 18px;border-radius:8px;border:0.5px solid var(--color-border-secondary);background:var(--color-background-secondary);color:var(--color-text-primary);font-size:13px;cursor:pointer;transition:all .2s; }\n  .nav-btn:hover { background:var(--color-background-tertiary); }\n  .nav-btn:disabled { opacity:0.35;cursor:default; }\n  svg text { font-family: var(--font-sans); }\n</style>\n\n<h2 class=\"sr-only\" style=\"position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)\">²³⁷U(d,p) surrogate reaction aligned to Imai Donuts group research program</h2>\n\n<div style=\"padding:1rem 0\">\n\n<div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;flex-wrap:wrap;gap:8px\">\n  <div style=\"display:flex;align-items:center;gap:8px;flex-wrap:wrap\">\n    <span style=\"font-size:15px;font-weight:500;color:var(--color-text-primary)\">DONUTS group × ²³⁷U(d,p)</span>\n    <span class=\"tag tag-blue\">Imai Lab, CNS UTokyo</span>\n    <span class=\"tag tag-teal\">OEDO-SHARAQ @ RIBF</span>\n  </div>\n  <div style=\"display:flex;gap:6px\" id=\"step-dots\">\n    <div class=\"step-dot active\"></div><div class=\"step-dot\"></div>\n    <div class=\"step-dot\"></div><div class=\"step-dot\"></div><div class=\"step-dot\"></div>\n  </div>\n</div>\n\n<div id=\"scene-container\" style=\"width:100%;overflow:hidden;border-radius:10px;background:var(--color-background-secondary);border:0.5px solid var(--color-border-tertiary)\">\n  <svg id=\"main-svg\" width=\"100%\" viewBox=\"0 0 680 265\" style=\"display:block\"></svg>\n</div>\n\n<div id=\"info-panel\" style=\"margin-top:12px\"></div>\n\n<div style=\"display:flex;justify-content:space-between;align-items:center;margin-top:14px;flex-wrap:wrap;gap:8px\">\n  <button class=\"nav-btn\" id=\"prev-btn\" onclick=\"changeStep(-1)\" disabled>← Prev</button>\n  <div style=\"display:flex;gap:6px;flex-wrap:wrap;justify-content:center\" id=\"tab-btns\">\n    <button class=\"tab-btn active\"  onclick=\"goStep(0)\">Donuts identity</button>\n    <button class=\"tab-btn\"         onclick=\"goStep(1)\">OEDO instrument</button>\n    <button class=\"tab-btn\"         onclick=\"goStep(2)\">Surrogate method</button>\n    <button class=\"tab-btn\"         onclick=\"goStep(3)\">Physics programs</button>\n    <button class=\"tab-btn\"         onclick=\"goStep(4)\">²³⁷U fit</button>\n  </div>\n  <button class=\"nav-btn\" id=\"next-btn\" onclick=\"changeStep(1)\">Next →</button>\n</div>\n\n</div>\n\n<script>\nlet step = 0;\n\nconst infoHTML = [\n\n/* Step 0 — Donuts group identity */\n`<div class=\"info-box\">\n  <strong style=\"color:var(--color-text-primary)\">DONUTS group</strong> &mdash; Ass. Prof. Nobuaki Imai, CNS, University of Tokyo. The name is the lab brand; the CNS website lists it under <em>Structure and dynamics</em>, operating OEDO and SHARAQ at RIBF (RIKEN Wako campus).<br><br>\n  <div style=\"display:flex;gap:8px;flex-wrap:wrap\">\n    <div style=\"flex:1;min-width:160px;background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n      <span class=\"tag tag-blue\" style=\"margin-bottom:4px;display:inline-block\">Pillar 1</span><br>\n      <strong>Surrogate reactions</strong><br>\n      (d,p) on short-lived RI beams → neutron capture σ without a neutron beam\n    </div>\n    <div style=\"flex:1;min-width:160px;background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n      <span class=\"tag tag-teal\" style=\"margin-bottom:4px;display:inline-block\">Pillar 2</span><br>\n      <strong>Nuclear astrophysics</strong><br>\n      SAKURA project: r-process around ¹³²Sn and νp-process with OEDO-SHARAQ\n    </div>\n    <div style=\"flex:1;min-width:160px;background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n      <span class=\"tag tag-amber\" style=\"margin-bottom:4px;display:inline-block\">Pillar 3</span><br>\n      <strong>LLFP transmutation</strong><br>\n      Nuclear data for ⁷⁹Se, ⁹³Zr, ¹⁰⁷Pd → efficient nuclear waste treatment\n    </div>\n  </div>\n  <br>\n  <span class=\"tag tag-purple\">IMP connection</span>&nbsp; The OEDO collaboration for r-process (d,p) surrogate studies explicitly lists IMP as a partner alongside CNS and RIKEN (AAPPS Bulletin, 2021).\n</div>`,\n\n/* Step 1 — OEDO instrument */\n`<div class=\"info-box\">\n  <strong style=\"color:var(--color-text-primary)\">OEDO</strong> = <em>Optimized Energy Degrading Optics for RI beam</em>, commissioned March 2017 at RIBF.<br><br>\n  The central problem OEDO solves: RIBF secondary beams are too fast (~100–200 MeV/u) for (d,p) transfer reactions, which need ~10–50 MeV/u. Simple degraders smear the emittance. OEDO combines an energy-loss degrader <em>with</em> an RF phase-space rotator (longitudinal → transverse) and a wedge-shaped angle-tunable degrader to refocus the beam — world-unique performance.<br><br>\n  <div style=\"display:flex;gap:8px;flex-wrap:wrap;margin-top:4px\">\n    <span class=\"tag tag-blue\">Input: ~170 MeV/u</span>\n    <span style=\"font-size:13px;line-height:2\">→ wedge degrader + RF rotation →</span>\n    <span class=\"tag tag-teal\">Output: 10–50 MeV/u, focused</span>\n  </div>\n  <br>\n  Downstream: <strong>SHARAQ spectrometer</strong> (momentum resolution 1/15,000) identifies the outgoing proton (giving E* of compound nucleus) and heavy residues (identifying the decay channel — fission, γ, or neutron emission). This is the <em>coincidence</em> that makes the surrogate measurement possible.\n</div>`,\n\n/* Step 2 — Surrogate method as Donuts practice */\n`<div class=\"info-box\">\n  The surrogate equation on the slide is <em>exactly</em> the method Donuts group applies routinely. Their two benchmark cases before any ²³⁷U experiment:<br><br>\n  <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:4px\">\n    <div style=\"background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n      <span class=\"tag tag-teal\" style=\"margin-bottom:4px;display:inline-block\">Published 2024</span><br>\n      <strong>⁷⁹Se(d,p)⁸⁰Se</strong> as surrogate for ⁷⁹Se(n,γ)<br>\n      <em>Imai et al., Phys. Lett. B (2024)</em> — first LLFP neutron capture result via surrogate at OEDO\n    </div>\n    <div style=\"background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n      <span class=\"tag tag-blue\" style=\"margin-bottom:4px;display:inline-block\">SHARAQ18–19 (2022)</span><br>\n      <strong>¹³⁰Sn(d,p)</strong> and <strong>⁵⁶Ni(d,p)</strong><br>\n      Surrogate of (n,γ) at OEDO; γ-emission probabilities of neutron-unbound states in ¹³¹Sn\n    </div>\n  </div>\n  <br>\n  ²³⁷U(d,p) extends this to an <strong>actinide</strong> — fission becomes an additional, dominant decay channel not present in the Sn/Se cases. Detecting fission fragments in coincidence with the proton is a new experimental challenge for OEDO-SHARAQ.\n</div>`,\n\n/* Step 3 — physics programs */\n`<div class=\"info-box\">\n  <strong style=\"color:var(--color-text-primary)\">SAKURA project</strong> (started 2019) — two approved RIBF programs:<br><br>\n  <div style=\"display:flex;gap:8px;flex-wrap:wrap\">\n    <div style=\"flex:1;min-width:180px;background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n      <span class=\"tag tag-teal\" style=\"margin-bottom:4px;display:inline-block\">r-process</span><br>\n      Neutron capture on nuclei around <strong>¹³²Sn (N=82)</strong> — key r-process waiting-point region. (d,p) surrogate with OEDO beams.\n    </div>\n    <div style=\"flex:1;min-width:180px;background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n      <span class=\"tag tag-purple\" style=\"margin-bottom:4px;display:inline-block\">νp-process</span><br>\n      <strong>⁵⁶Ni(n,p)⁵⁶Co</strong> — critical for type II supernova nucleosynthesis; studied with slowed OEDO beams.\n    </div>\n  </div>\n  <br>\n  <strong style=\"color:var(--color-text-primary)\">LLFP transmutation program</strong> — separate from SAKURA, but using the same surrogate technique:<br>\n  ⁷⁹Se, ⁹³Zr, ¹⁰⁷Pd neutron capture and proton/deuteron-induced cross sections needed for designing transmutation of spent nuclear fuel. Proof-of-concept: ⁷⁹Se published (Imai et al. 2024).<br><br>\n  <span class=\"tag tag-amber\">Where ²³⁷U fits</span>&nbsp; It bridges both — actinide in nuclear waste <em>and</em> potential r-process ancestor — making it a high-value Donuts target.\n</div>`,\n\n/* Step 4 — where 237U(d,p) fits for Donuts */\n`<div class=\"info-box\">\n  <strong style=\"color:var(--color-text-primary)\">Why ²³⁷U(d,p) is a natural Donuts experiment:</strong><br><br>\n  <div style=\"display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:4px\">\n    <div style=\"background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n      <span class=\"tag tag-amber\" style=\"margin-bottom:4px;display:inline-block\">Same method</span><br>\n      (d,p) surrogate in inverse kinematics at OEDO energies (10–50 MeV/u) — exactly the proven Donuts workflow\n    </div>\n    <div style=\"background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n      <span class=\"tag tag-red\" style=\"margin-bottom:4px;display:inline-block\">New challenge</span><br>\n      ²³⁸U* fission is a dominant channel → coincidence p + fission fragments requires new detector geometry at OEDO\n    </div>\n    <div style=\"background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n      <span class=\"tag tag-blue\" style=\"margin-bottom:4px;display:inline-block\">Dual output</span><br>\n      σ(²³⁷U(n,γ)) for r-process + σ(²³⁷U(n,f)) for reactor/transmutation — both Donuts research programs at once\n    </div>\n    <div style=\"background:var(--color-background-primary);border:0.5px solid var(--color-border-tertiary);border-radius:8px;padding:8px 10px;font-size:12px\">\n      <span class=\"tag tag-teal\" style=\"margin-bottom:4px;display:inline-block\">IMP collaboration</span><br>\n      OEDO surrogate work already lists IMP as partner → your MWDC/TPC/ML-PID background is directly relevant\n    </div>\n  </div>\n  <br>\n  <span class=\"tag tag-purple\">Nuclear structure bonus</span>&nbsp; (d,p) angular distributions give C²S and J<sup>π</sup> of ²³⁸U states — addressing the shell evolution question on the left half of the slide, via DWBA/SHARAQ spectroscopy.\n</div>`\n];\n\nfunction clearSVG() {\n  const s = document.getElementById(\"main-svg\");\n  while(s.firstChild) s.removeChild(s.firstChild);\n  return s;\n}\nfunction mk(tag,attrs={}) {\n  const el = document.createElementNS(\"http://www.w3.org/2000/svg\",tag);\n  for(const [k,v] of Object.entries(attrs)) el.setAttribute(k,v);\n  return el;\n}\nfunction txt(svg,x,y,t,{size=12,fill=\"var(--color-text-primary)\",weight=\"400\",anchor=\"middle\"}={}) {\n  const el = mk(\"text\",{x,y,\"text-anchor\":anchor,\"font-size\":size,\"fill\":fill,\"font-weight\":weight});\n  el.textContent=t; svg.appendChild(el); return el;\n}\nfunction rect(svg,x,y,w,h,{fill=\"var(--color-background-primary)\",stroke=\"var(--color-border-tertiary)\",rx=8}={}) {\n  const el = mk(\"rect\",{x,y,width:w,height:h,rx,fill,stroke,\"stroke-width\":\"0.5\"});\n  svg.appendChild(el); return el;\n}\nfunction arrowDef(svg) {\n  const d = mk(\"defs\"); svg.prepend(d);\n  const m = mk(\"marker\",{id:\"ar\",viewBox:\"0 0 10 10\",refX:\"8\",refY:\"5\",markerWidth:\"5\",markerHeight:\"5\",orient:\"auto-start-reverse\"});\n  const p = mk(\"path\",{d:\"M2 1L8 5L2 9\",fill:\"none\",stroke:\"context-stroke\",\"stroke-width\":\"1.5\",\"stroke-linecap\":\"round\"});\n  m.appendChild(p); d.appendChild(m);\n}\nfunction arr(svg,x1,y1,x2,y2,color=\"var(--color-text-secondary)\") {\n  const l = mk(\"line\",{x1,y1,x2,y2,stroke:color,\"stroke-width\":\"1.5\",\"marker-end\":\"url(#ar)\"});\n  svg.appendChild(l);\n}\n\n/* ---- STEP RENDERERS ---- */\n\nfunction drawStep0() {\n  const svg = clearSVG(); arrowDef(svg);\n  rect(svg,0,0,680,265,{fill:\"var(--color-background-secondary)\",rx:0});\n\n  txt(svg,340,26,\"DONUTS group research identity — CNS, University of Tokyo\",{size:13,weight:\"500\"});\n\n  const labs = [\n    {x:30,y:45,w:120,col:\"#E6F1FB\",sc:\"#B5D4F4\",tc:\"#185FA5\",name:\"Imai Lab\",sub:\"DONUTS\",badge:\"★ target group\"},\n    {x:170,y:45,w:120,col:\"var(--color-background-primary)\",sc:\"var(--color-border-tertiary)\",tc:\"var(--color-text-primary)\",name:\"Yako Lab\",sub:\"Exotic Rxn\",badge:\"\"},\n    {x:310,y:45,w:120,col:\"var(--color-background-primary)\",sc:\"var(--color-border-tertiary)\",tc:\"var(--color-text-primary)\",name:\"Yamaguchi\",sub:\"Nuclear Astro\",badge:\"\"},\n    {x:450,y:45,w:100,col:\"var(--color-background-primary)\",sc:\"var(--color-border-tertiary)\",tc:\"var(--color-text-primary)\",name:\"Sakemi\",sub:\"Fund. Sym.\",badge:\"\"},\n    {x:570,y:45,w:96,col:\"var(--color-background-primary)\",sc:\"var(--color-border-tertiary)\",tc:\"var(--color-text-primary)\",name:\"Gunji\",sub:\"Quark Phys.\",badge:\"\"},\n  ];\n  labs.forEach(l => {\n    rect(svg,l.x,l.y,l.w,64,{fill:l.col,stroke:l.sc,rx:8});\n    txt(svg,l.x+l.w/2,l.y+20,l.name,{size:12,weight:\"500\",fill:l.tc});\n    txt(svg,l.x+l.w/2,l.y+36,l.sub,{size:10,fill:l.tc});\n    if(l.badge) {\n      rect(svg,l.x+10,l.y+46,l.w-20,16,{fill:\"#185FA5\",stroke:\"none\",rx:4});\n      txt(svg,l.x+l.w/2,l.y+57,l.badge,{size:9,fill:\"#E6F1FB\",weight:\"500\"});\n    }\n  });\n\n  txt(svg,340,132,\"DONUTS three pillars\",{size:12,weight:\"500\"});\n\n  const pillars = [\n    {x:30,y:143,w:194,col:\"#E6F1FB\",sc:\"#B5D4F4\",tc:\"#185FA5\",head:\"Surrogate reactions\",lines:[\"(d,p) on RI beams\",\"→ σ(n,x) without n beam\",\"⁷⁹Se, ¹³⁰Sn, ⁵⁶Ni → ²³⁷U\"]},\n    {x:243,y:143,w:194,col:\"#E1F5EE\",sc:\"#9FE1CB\",tc:\"#0F6E56\",head:\"Nuclear astrophysics\",lines:[\"SAKURA project\",\"r-process: N=82 region\",\"νp-process: ⁵⁶Ni(n,p)\"]},\n    {x:456,y:143,w:194,col:\"#FAEEDA\",sc:\"#FAC775\",tc:\"#633806\",head:\"LLFP transmutation\",lines:[\"Nuclear waste treatment\",\"⁷⁹Se(n,γ) published 2024\",\"⁹³Zr, ¹⁰⁷Pd in progress\"]},\n  ];\n  pillars.forEach(p => {\n    rect(svg,p.x,p.y,p.w,106,{fill:p.col,stroke:p.sc,rx:8});\n    txt(svg,p.x+p.w/2,p.y+18,p.head,{size:11,weight:\"500\",fill:p.tc});\n    const sep = mk(\"line\",{x1:p.x+10,y1:p.y+26,x2:p.x+p.w-10,y2:p.y+26,stroke:p.sc,\"stroke-width\":\"0.5\"});\n    svg.appendChild(sep);\n    p.lines.forEach((l,i) => txt(svg,p.x+p.w/2,p.y+42+i*18,l,{size:10,fill:p.tc}));\n  });\n\n  txt(svg,340,257,\"Instruments: OEDO beamline + SHARAQ spectrometer @ RIBF, RIKEN Wako\",{size:11,fill:\"var(--color-text-secondary)\"});\n}\n\nfunction drawStep1() {\n  const svg = clearSVG(); arrowDef(svg);\n  rect(svg,0,0,680,265,{fill:\"var(--color-background-secondary)\",rx:0});\n  txt(svg,340,26,\"OEDO-SHARAQ: the instrument enabling Donuts surrogate experiments\",{size:13,weight:\"500\"});\n\n  const stages = [\n    {x:20,y:50,w:110,h:60,col:\"#E1F5EE\",sc:\"#9FE1CB\",tc:\"#0F6E56\",head:\"RIBF primary\",sub:\"~170 MeV/u\\nRI beam\"},\n    {x:175,y:50,w:110,h:60,col:\"#FAEEDA\",sc:\"#FAC775\",tc:\"#633806\",head:\"Wedge degrader\",sub:\"angle-tunable\\n(6 mrad wedge)\"},\n    {x:330,y:50,w:110,h:60,col:\"#FAEEDA\",sc:\"#FAC775\",tc:\"#633806\",head:\"RF refocuser\",sub:\"phase-space\\nrotation\"},\n    {x:485,y:50,w:110,h:60,col:\"#E1F5EE\",sc:\"#9FE1CB\",tc:\"#0F6E56\",head:\"OEDO output\",sub:\"10–50 MeV/u\\nfocused beam\"},\n  ];\n  stages.forEach(s => {\n    rect(svg,s.x,s.y,s.w,s.h,{fill:s.col,stroke:s.sc,rx:8});\n    txt(svg,s.x+s.w/2,s.y+16,s.head,{size:10,weight:\"500\",fill:s.tc});\n    const ls = s.sub.split(\"\\n\");\n    ls.forEach((l,i) => txt(svg,s.x+s.w/2,s.y+30+i*14,l,{size:9,fill:s.tc}));\n  });\n  arr(svg,132,80,173,80,\"#0F6E56\");\n  arr(svg,287,80,328,80,\"#854F0B\");\n  arr(svg,442,80,483,80,\"#854F0B\");\n\n  txt(svg,340,130,\"← OEDO (completed 2017) — world-unique: deceleration + phase-space refocusing →\",{size:11,fill:\"var(--color-text-secondary)\"});\n\n  const det = [\n    {x:30,y:148,w:150,col:\"#E6F1FB\",sc:\"#B5D4F4\",tc:\"#185FA5\",head:\"D₂ / CD₄ target\",sub:\"reaction vertex\"},\n    {x:215,y:148,w:175,col:\"#FCEBEB\",sc:\"#F7C1C1\",tc:\"#A32D2D\",head:\"SHARAQ spectrometer\",sub:\"p detection → E* of CN\\n(Δp/p = 1/15,000)\"},\n    {x:425,y:148,w:225,col:\"#EAF3DE\",sc:\"#C0DD97\",tc:\"#3B6D11\",head:\"Heavy residue detectors\",sub:\"γ or fission fragments\\ncoincidence → P_decay(E*)\"},\n  ];\n  det.forEach(d => {\n    rect(svg,d.x,d.y,d.w,70,{fill:d.col,stroke:d.sc,rx:8});\n    txt(svg,d.x+d.w/2,d.y+17,d.head,{size:10,weight:\"500\",fill:d.tc});\n    const ls=d.sub.split(\"\\n\"); ls.forEach((l,i) => txt(svg,d.x+d.w/2,d.y+32+i*15,l,{size:9,fill:d.tc}));\n  });\n  arr(svg,182,183,213,183,\"#888780\");\n  arr(svg,392,183,423,183,\"#888780\");\n\n  txt(svg,340,232,\"For ²³⁷U: beam energy degraded from ~170 → ~15 MeV/u at OEDO; proton detected at SHARAQ\",{size:11,fill:\"var(--color-text-secondary)\"});\n  txt(svg,340,248,\"²³⁷U t½ = 6.75 d → produced as secondary beam at RIBF by ²³⁸U(p,X) fragmentation\",{size:11,fill:\"var(--color-text-secondary)\"});\n}\n\nfunction drawStep2() {\n  const svg = clearSVG(); arrowDef(svg);\n  rect(svg,0,0,680,265,{fill:\"var(--color-background-secondary)\",rx:0});\n  txt(svg,340,26,\"Donuts surrogate workflow: proven → extended to ²³⁷U\",{size:13,weight:\"500\"});\n\n  const rows = [\n    {y:48,beam:\"⁷⁹Se beam\",rxn:\"⁷⁹Se(d,p)⁸⁰Se\",cn:\"⁸⁰Se*\",goal:\"⁷⁹Se(n,γ) → LLFP\",status:\"Published 2024\",col:\"#FAEEDA\",tc:\"#633806\",sc:\"#FAC775\"},\n    {y:108,beam:\"¹³⁰Sn beam\",rxn:\"¹³⁰Sn(d,p)¹³¹Sn\",cn:\"¹³¹Sn*\",goal:\"¹³⁰Sn(n,γ) → r-process\",status:\"SHARAQ18 (2022)\",col:\"#E1F5EE\",tc:\"#0F6E56\",sc:\"#9FE1CB\"},\n    {y:168,beam:\"⁵⁶Ni beam\",rxn:\"⁵⁶Ni(d,p)⁵⁷Ni\",cn:\"⁵⁷Ni*\",goal:\"⁵⁶Ni(n,p) → νp-process\",status:\"SHARAQ19 (2022)\",col:\"#E6F1FB\",tc:\"#185FA5\",sc:\"#B5D4F4\"},\n  ];\n\n  const cols = [{x:10,w:95,label:\"Beam\"},{x:120,w:140,label:\"Reaction\"},{x:275,w:90,label:\"CN\"},{x:380,w:180,label:\"Physics goal\"},{x:575,w:90,label:\"Status\"}];\n  cols.forEach(c => { rect(svg,c.x,36,c.w,18,{fill:\"var(--color-background-primary)\",stroke:\"var(--color-border-tertiary)\",rx:0}); txt(svg,c.x+c.w/2,48,c.label,{size:10,weight:\"500\"}); });\n\n  rows.forEach(r => {\n    cols.forEach(c => rect(svg,c.x,r.y,c.w,50,{fill:r.col,stroke:r.sc,rx:0}));\n    txt(svg,cols[0].x+cols[0].w/2,r.y+27,r.beam,{size:11,weight:\"500\",fill:r.tc});\n    txt(svg,cols[1].x+cols[1].w/2,r.y+27,r.rxn,{size:11,fill:r.tc});\n    txt(svg,cols[2].x+cols[2].w/2,r.y+27,r.cn,{size:11,weight:\"500\",fill:r.tc});\n    txt(svg,cols[3].x+cols[3].w/2,r.y+27,r.goal,{size:11,fill:r.tc});\n    txt(svg,cols[4].x+cols[4].w/2,r.y+27,r.status,{size:10,fill:r.tc});\n  });\n\n  const yr = 228;\n  rect(svg,0,yr,680,35,{fill:\"#FCEBEB\",stroke:\"#F7C1C1\",rx:0});\n  txt(svg,10,yr+12,\"⁷⁺\",{size:9,fill:\"#A32D2D\",anchor:\"start\"});\n  rect(svg,cols[0].x,yr,cols[0].w,35,{fill:\"#FCEBEB\",stroke:\"#F09595\",rx:0});\n  txt(svg,cols[0].x+cols[0].w/2,yr+21,\"²³⁷U beam\",{size:11,weight:\"500\",fill:\"#A32D2D\"});\n  rect(svg,cols[1].x,yr,cols[1].w,35,{fill:\"#FCEBEB\",stroke:\"#F09595\",rx:0});\n  txt(svg,cols[1].x+cols[1].w/2,yr+21,\"²³⁷U(d,p)²³⁸U*\",{size:11,weight:\"500\",fill:\"#A32D2D\"});\n  rect(svg,cols[2].x,yr,cols[2].w,35,{fill:\"#FCEBEB\",stroke:\"#F09595\",rx:0});\n  txt(svg,cols[2].x+cols[2].w/2,yr+21,\"²³⁸U*\",{size:11,fill:\"#A32D2D\"});\n  rect(svg,cols[3].x,yr,cols[3].w,35,{fill:\"#FCEBEB\",stroke:\"#F09595\",rx:0});\n  txt(svg,cols[3].x+cols[3].w/2,yr+16,\"σ(²³⁷U(n,γ)) + σ(²³⁷U(n,f))\",{size:10,weight:\"500\",fill:\"#A32D2D\"});\n  txt(svg,cols[3].x+cols[3].w/2,yr+29,\"LLFP + r-process\",{size:9,fill:\"#791F1F\"});\n  rect(svg,cols[4].x,yr,cols[4].w,35,{fill:\"#FCEBEB\",stroke:\"#F09595\",rx:0});\n  txt(svg,cols[4].x+cols[4].w/2,yr+16,\"Proposed\",{size:10,fill:\"#A32D2D\"});\n  txt(svg,cols[4].x+cols[4].w/2,yr+29,\"new fission det.\",{size:9,fill:\"#791F1F\"});\n}\n\nfunction drawStep3() {\n  const svg = clearSVG(); arrowDef(svg);\n  rect(svg,0,0,680,265,{fill:\"var(--color-background-secondary)\",rx:0});\n  txt(svg,340,26,\"SAKURA project + LLFP program — the physics motivation\",{size:13,weight:\"500\"});\n\n  rect(svg,20,40,300,100,{fill:\"#E1F5EE\",stroke:\"#9FE1CB\",rx:10});\n  txt(svg,170,58,\"SAKURA: r-process\",{size:12,weight:\"500\",fill:\"#0F6E56\"});\n  const sl = mk(\"line\",{x1:30,y1:64,x2:310,y2:64,stroke:\"#9FE1CB\",\"stroke-width\":\"0.5\"}); svg.appendChild(sl);\n  [\"Target: ¹³²Sn region (N=82 r-process wait. pt)\",\"Tool: (d,p) surrogate at OEDO\",\"Sensitivity: neutron capture on ¹³⁰–¹³²Sn\",\"Goal: elemental abundances from neutron star mergers\"].forEach((l,i) => txt(svg,35,78+i*14,l,{size:9.5,fill:\"#0F6E56\",anchor:\"start\"}));\n\n  rect(svg,20,152,300,100,{fill:\"#FAEEDA\",stroke:\"#FAC775\",rx:10});\n  txt(svg,170,170,\"LLFP transmutation\",{size:12,weight:\"500\",fill:\"#633806\"});\n  const sl2 = mk(\"line\",{x1:30,y1:176,x2:310,y2:176,stroke:\"#FAC775\",\"stroke-width\":\"0.5\"}); svg.appendChild(sl2);\n  [\"Target: ⁷⁹Se, ⁹³Zr, ¹⁰⁷Pd (t½ ~ millions yr)\",\"Tool: (d,p) and (p,x) at OEDO\",\"Published: ⁷⁹Se(n,γ) — Imai et al. PLB 2024\",\"Goal: nuclear data for waste transmutation\"].forEach((l,i) => txt(svg,35,190+i*14,l,{size:9.5,fill:\"#633806\",anchor:\"start\"}));\n\n  arr(svg,170,142,170,150,\"#888780\");\n\n  rect(svg,360,40,300,110,{fill:\"#E6F1FB\",stroke:\"#B5D4F4\",rx:10});\n  txt(svg,510,58,\"SAKURA: νp-process\",{size:12,weight:\"500\",fill:\"#185FA5\"});\n  const sl3 = mk(\"line\",{x1:370,y1:64,x2:650,y2:64,stroke:\"#B5D4F4\",\"stroke-width\":\"0.5\"}); svg.appendChild(sl3);\n  [\"Target: ⁵⁶Ni(n,p)⁵⁶Co — critical reaction\",\"in type II supernova nucleosynthesis\",\"Tool: slowed ⁵⁶Ni beam at OEDO\",\"Exp: SHARAQ19 (2022), analysis ongoing\"].forEach((l,i) => txt(svg,375,78+i*14,l,{size:9.5,fill:\"#185FA5\",anchor:\"start\"}));\n\n  rect(svg,360,162,300,90,{fill:\"#EEEDFE\",stroke:\"#AFA9EC\",rx:10});\n  txt(svg,510,178,\"²³⁷U(d,p) — bridging both"
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
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8112-ab2b-7b3e-88b3-b8434ed3b219",
  "updated_at": "2026-04-12T09:45:39.419807Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d8112-ab2b-759a-a13f-9e50df0de242"
}
```

</details>

### 5. human — 2026-04-12T09:45:56.805544Z

Tell me the physics motivation of the group

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8115-6248-7e13-be83-fdeb093be665",
  "updated_at": "2026-04-12T09:45:56.805544Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d8112-ab2b-7b3e-88b3-b8434ed3b219"
}
```

</details>

### 6. assistant — 2026-04-12T09:46:58.171995Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants to know the physics motivation of the Donuts group. I have good information from the search results. Let me provide a clear, well-sourced explanation without necessarily rebuilding the full widget - just a focused text + maybe a concise visual.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T09:46:00.063005Z",
  "stop_timestamp": "2026-04-12T09:46:01.382706Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01KqPxeJhtEjqve4r2NUMXG9",
  "name": "web_fetch",
  "input": {
    "url": "https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research",
    "html_extraction_method": "markdown",
    "text_content_token_limit": 3000
  },
  "message": "Fetching: https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research",
  "integration_name": "Web Fetch",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
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
  "tool_use_id": "toolu_01KqPxeJhtEjqve4r2NUMXG9",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "CNS_Donuts - 研究内容",
      "url": "https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "google.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=google.com",
        "site_name": "google"
      },
      "is_missing": false,
      "text": "CNS\\_Donuts - 研究内容\n\nSearch this site\n\nEmbedded Files\n\nSkip to main content\n\nSkip to navigation\n\n[CNS\\_Donuts](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home)\n\n* [ホーム](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home)\n\n  + [研究内容](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research)\n\n    - [SAKURA Project](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA)\n\n      * [sakura2020](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA/sakura2020)\n    - [Tsinghua-UT Collaboration](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/tsinghua-ut-collaboration)\n  + [メンバー](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Personnels)\n  + [研究成果](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Achievements)\n  + [研究生活](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife)\n\n    - [飲み会](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife/飲み会)\n    - [過去のハイライト](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife/過去のハイライト)\n\n[CNS\\_Donuts](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home)\n\n* [ホーム](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home)\n\n  + [研究内容](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research)\n\n    - [SAKURA Project](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA)\n\n      * [sakura2020](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA/sakura2020)\n    - [Tsinghua-UT Collaboration](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/tsinghua-ut-collaboration)\n  + [メンバー](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Personnels)\n  + [研究成果](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Achievements)\n  + [研究生活](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife)\n\n    - [飲み会](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife/飲み会)\n    - [過去のハイライト](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife/過去のハイライト)\n* More\n\n  + [ホーム](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home)\n\n    - [研究内容](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research)\n\n      * [SAKURA Project](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA)\n\n        + [sakura2020](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA/sakura2020)\n      * [Tsinghua-UT Collaboration](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/tsinghua-ut-collaboration)\n    - [メンバー](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Personnels)\n    - [研究成果](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Achievements)\n    - [研究生活](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife)\n\n      * [飲み会](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife/飲み会)\n      * [過去のハイライト](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife/過去のハイライト)\n\n## Research/研究内容\n\n## 有限量子多体系の自己組織化現象\n\n### 原子核は２種類のフェルミオン(陽子と中性子)が複数集合することで構成されます。多体効果により発現する量子的な運動を支配する原理と、また創発される新秩序を探索しています。このような新秩序は、従来の原子核構造の理解を大きくかえる可能性があります。主に以下の３つの核構造研究を推進しています。\n\n* ### 変形共存現象の微視的理解\n\nZr同位体の基底状態は球形から突然変形状態になる量子相転移が起こっていると考えられ、注目を集めています。 また、中性子過剰32Mg近傍核でも同じく、突然に基底状態が球形から変形な状態になることが知られていますが、その原因は未解明です。 最近の実験研究では、これらの領域では基底状態と異なる平均場真空である励起状態が量子的に混在する 変形共存現象が生じていることが分かってきました。この変形共存や、その生成機構を明らかにしていきます。 \n\n  \n\n* ### 新奇集団運動の探索\n\n原子核内では、フェルミオンである核子2個がスピン・パリティ0+のペアーを組み、ボソン状態となり超流動状態を実現しています。 このようなペアーを作る相互作用を対相関と呼びます。この対相関の密度依存性を、不安定核で 調べることで、中性子星の内部の記述する方程式の解明に挑んでいます。また、このような相関は、最近発見された２陽子崩壊の機構解明に繋がります。２陽子崩壊はα、β、γ崩壊に次ぐ 第４の放射線として注目されています。陽子崩壊核45Fe、48Ni原子核の質量を、原子核センターで開発した手法で測定しました。\n\n  \n\n* ### 極限回転状態の生成\n\n原子核に膨大な角運動量を加えていくと、遂には遠心力が勝って核分裂を起こすと考えられます。その様な状態は、 我々が知る核力と、角運動量による力が拮抗する領域であり、極限状態化での核力を研究することになります。\n\nその様な極限状態として、原子核が大きくラグビーボール型に引き伸ばされて高速回転している、ハイパー変形状態が 1980年代に予想されましたが、まだ発見には至っていません。反応によって例え生成されたとしても、その生成率は ごく小さく、他の状態から分別することができないためと考えられます。そこで、我々は、効率よく回転状態を作るために、半減期31年で、16+という高スピンを持ち回りつづける178m2Hf状態を 人工的に大量に作り、それを標的とすることで、より高速回転状態を選択的に生成し、ハイパー変形状態探索を目指す ことにしました。理研AVFサイクロトロンから供給される大強度4HeビームをYb標的に８時間照射し、178m2Hfを0.01 ng 生成することに成功しました。標的、およびビームタイムを長くすれば、実験に使えるマクロな量になることは確実です。 さらに究極的には、将来には究極の変形状態ともいえるトーラス型(ドーナツ型)原子核の生成を目指します。\n\n## 核反応ダイナミクス\n\n### 人類が最初に行った核反応は、低エネルギー中性子の原子核照射でした。低エネルギー中性子反応で主要なチャンネルである中性子捕獲反応の微視的な理解は100年経った今でも確立していません。これら低エネルギー反応は、融合反応や前平衡過程と呼ばれ、フェルミエネルギーで核子が原子核内を回る10^-22秒に比べて、非常に長い時間(～10<sup>-19</sup>秒)かかると考えられています。この、不確定原理が働く極微の世界での動力学を理解し、学際研究に役立て",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: CNS_Donuts - 研究内容",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=google.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "CNS_Donuts - 研究内容",
      "subtitles": null,
      "url": "https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=google.com",
      "source": "google"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Now I have the actual research page of the Donuts group from their own website. This is very valuable. Let me also fetch the SAKURA project page.

The key content from the research page (translating from Japanese):

**Nuclear Structure: Self-organization in finite quantum many-body systems**

The group describes it as: "The nucleus is composed of multiple fermions of two types (protons and neutrons). We explore the principles governing quantum motion emerging from many-body effects, and novel ordered states that emerge. Such new orders may significantly change our understanding of traditional nuclear structure." Three sub-topics:

1. **Shape coexistence (変形共存現象)** - Zr isotopes show quantum phase transitions from spherical to deformed ground states. 

Near ³²Mg (N=20 island of inversion), there's a similar unexplained transition where nuclei suddenly shift from spherical to deformed configurations, and the group is investigating the mechanisms behind these shape coexistence phenomena.

2. **Novel collective motion (新奇集団運動)** - They're studying pairing correlations where nucleon pairs form bosonic superfluidity, examining how pairing strength varies in unstable nuclei to understand neutron star interiors, plus investigating exotic decay modes like 2-proton radioactivity and measuring masses of extremely neutron-rich isotopes.

3. **Extreme rotation states (極限回転状態)** - Exploring what happens when nuclei acquire enormous angular momentum.

The group is searching for hyper-deformed states predicted decades ago by using a long-lived hafnium isotope as a target to selectively populate high-spin configurations, with the ultimate goal of creating a torus-shaped nucleus—which is actually where the DONUTS group name originates.

On the nuclear reaction dynamics side, despite a century of research, the microscopic details of how nuclei capture neutrons remain poorly understood, and they're investigating the surprisingly long timescales involved in these low-energy fusion and pre-equilibrium processes.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T09:46:17.329693Z",
  "stop_timestamp": "2026-04-12T09:46:18.347840Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01J97yV6MajnvPoL3UJxivta",
  "name": "web_fetch",
  "input": {
    "html_extraction_method": "markdown",
    "text_content_token_limit": 2000,
    "url": "https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA"
  },
  "message": "Fetching: https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA",
  "integration_name": "Web Fetch",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
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
  "tool_use_id": "toolu_01J97yV6MajnvPoL3UJxivta",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "CNS_Donuts - SAKURA Project",
      "url": "https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "google.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=google.com",
        "site_name": "google"
      },
      "is_missing": false,
      "text": "CNS\\_Donuts - SAKURA Project\n\nSearch this site\n\nEmbedded Files\n\nSkip to main content\n\nSkip to navigation\n\n[CNS\\_Donuts](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home)\n\n* [ホーム](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home)\n\n  + [研究内容](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research)\n\n    - [SAKURA Project](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA)\n\n      * [sakura2020](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA/sakura2020)\n    - [Tsinghua-UT Collaboration](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/tsinghua-ut-collaboration)\n  + [メンバー](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Personnels)\n  + [研究成果](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Achievements)\n  + [研究生活](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife)\n\n    - [飲み会](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife/飲み会)\n    - [過去のハイライト](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife/過去のハイライト)\n\n[CNS\\_Donuts](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home)\n\n* [ホーム](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home)\n\n  + [研究内容](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research)\n\n    - [SAKURA Project](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA)\n\n      * [sakura2020](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA/sakura2020)\n    - [Tsinghua-UT Collaboration](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/tsinghua-ut-collaboration)\n  + [メンバー](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Personnels)\n  + [研究成果](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Achievements)\n  + [研究生活](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife)\n\n    - [飲み会](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife/飲み会)\n    - [過去のハイライト](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife/過去のハイライト)\n* More\n\n  + [ホーム](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home)\n\n    - [研究内容](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research)\n\n      * [SAKURA Project](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA)\n\n        + [sakura2020](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA/sakura2020)\n      * [Tsinghua-UT Collaboration](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/tsinghua-ut-collaboration)\n    - [メンバー](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Personnels)\n    - [研究成果](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Achievements)\n    - [研究生活](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife)\n\n      * [飲み会](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife/飲み会)\n      * [過去のハイライト](https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/DailyLife/過去のハイライト)\n\n# SAKURA Project\n\n**S**tudy of **A**strophysical **K**ey reactions in the **U**niverse with the low-energy RI beam **A**pparatus\n\nWe started a SAKURA project to answer the question of the origin of the matter in the universe by employing the world-unique device OEDO-SHARAQ in RIBF in 2019 following the successful experiment of the IMPACT17-02-02 in which neutron capture rate on long-lived isotope of 79Se was evaluated. In 19th NP-PAC of RIBF, two experimental proposals were approved. The first one is for the r-process nucleosynthesis, while the other is for nu-p process. Here is the summary of the project. Some of them can be accessed by only collaborators of the project.\n\n* NP1912-SHARAQ18 \"Determination of neutron capture cross sections for r-process nucleosynthesis\"\n* NP1912-SHARAQ19 \"Study on νp-process nucleosynthesis in core collapse supernovae\"\n\n![](https://lh3.googleusercontent.com/sitesv/APaQ0SQ5eMGaHswJS2Ji0VHAS83CffJd5K67GGcu8-UIdr-u32EqB4cgoDcC5CjhYH3S1GqCbTRz5zvEm6Q0v3WCR2CgEjO7-U0UO-snzkM68pKTN0eF3_eEXELIHlAy6d3zYV9nU21X1q_sJyBSZYFws2Ddsqfytm1wusTwL_vn7CqkfJRKV8Z-sq4FKYY879RPIj_B-cQxq8CskhEVc2Wd5zR8bP8N2VFVH1R_mt8=w1280)\n\n## Group photo of SAKURA01\n\n## **Group photo of SAKURA0",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: CNS_Donuts - SAKURA Project",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=google.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "CNS_Donuts - SAKURA Project",
      "subtitles": null,
      "url": "https://sites.google.com/cns.s.u-tokyo.ac.jp/cnsdonuts/home/Research/SAKURA",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=google.com",
      "source": "google"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Now I have the complete picture. The most important thing I learned from the Donuts group website is:

**The name "DONUTS" itself** comes from the ultimate long-term goal: producing **torus (donut-shaped) nuclei** — a theoretically predicted but never observed nuclear state. This is the key piece that was missing!

The research page says (translating):
"Ultimately, in the future, we aim to produce the **torus (donut-shaped) nucleus** which could be called the ultimate deformed state."

This explains the group name and is a significant piece of information that should be in the answer.


The group focuses on three main research areas: nuclear structure and self-organization in quantum many-body systems, including shape coexistence and quantum phase transitions in isotopes like Zr and ³²Mg, novel collective phenomena such as pairing correlations and their connection to neutron star equations of state, and extreme nuclear rotation and hyperdeformation using specific isotopes as experimental probes.

Nuclear reaction dynamics is another key focus, addressing the century-old puzzle of how neutron capture actually works at the microscopic level—the gap between the timescales of low-energy reactions and fundamental nucleon dynamics remains poorly understood, which is why the surrogate reaction method has become important.

The SAKURA project brings these nuclear physics insights to astrophysics, studying key reactions that occur in the universe.

</details>

Now I have the group's own research page. There's a key fact buried in the Japanese text that explains the group name directly — let me give you the full sourced picture.

---

**Why is the group called DONUTS?**

The group's stated ultimate goal is the production of a **torus (donut-shaped) nucleus** — described as "the ultimate deformed state" — which has been theoretically predicted but never observed. This is where the name originates. Everything else in the program is built around the experimental infrastructure needed to reach that frontier.

---

**The three physics motivations, from the group's own research page:**

**1. Self-organization in finite quantum many-body systems (nuclear structure)**

The nucleus is composed of two species of fermions (protons and neutrons). The group explores the principles governing quantum motion from many-body effects, and the novel ordered states that emerge — states which may fundamentally change our understanding of nuclear structure. Three concrete targets:

- **Shape coexistence**: Zr isotopes are thought to undergo a quantum phase transition from spherical to suddenly deformed ground states. Near ³²Mg (N=20 island of inversion) the same sudden transition occurs but its cause remains unexplained. The group investigates how excited states with a different mean-field vacuum coexist quantum-mechanically with the ground state.

- **Novel collective motion / pairing correlations**: Two nucleons form spin-parity 0⁺ pairs and realize a bosonic superfluid state. By probing the density dependence of pairing correlations in unstable nuclei, the group aims to constrain the equation of state describing neutron star interiors. This connects also to the mechanism of two-proton radioactivity — the fourth type of radioactivity after α, β, and γ.

- **Extreme rotation and hyperdeformation**: Adding enormous angular momentum pushes nuclei to the point where centrifugal force overcomes the nuclear force. A hyperdeformed state (rugby-ball shape, rapid rotation) was predicted in the 1980s but not yet found. The group uses an isomeric ¹⁷⁸m2Hf target (t½ = 31 yr, J^π = 16+) to selectively populate very high-spin states, working toward torus-nucleus production.

**2. Neutron capture reaction dynamics**

The first nuclear reaction performed by humans used low-energy neutron irradiation. Yet a microscopic understanding of neutron capture — the dominant channel at low neutron energies — has not been established even 100 years later. Low-energy reactions proceed on the ~10⁻¹⁹ s timescale, far longer than the ~10⁻²² s for a nucleon orbiting at Fermi energy. Understanding the quantum dynamics of this regime — fusion and pre-equilibrium processes — and connecting it to interdisciplinary applications is a core aim.

This is the fundamental *why* behind the surrogate reaction method: direct neutron capture measurements on exotic nuclei are inaccessible, so the (d,p) surrogate is the entry point into the problem.

**3. SAKURA project — astrophysical key reactions**

SAKURA stands for "Study of Astrophysical Key reactions in the Universe with the low-energy RI beam Apparatus." It was launched in 2019 after the successful ⁷⁹Se neutron capture surrogate experiment, with two RIBF-approved proposals: SHARAQ18 for r-process neutron capture cross sections and SHARAQ19 for νp-process nucleosynthesis in core-collapse supernovae.

---

**Where ²³⁷U(d,p) sits in this picture**

It is primarily a motivation-2 and motivation-3 experiment: probing neutron capture reaction dynamics on a nucleus where direct measurement is impossible (t½ = 6.75 d), and extracting σ(n,f) and σ(n,γ) relevant to both reactor/waste physics and potentially actinide r-process paths. The nuclear structure output (C²S, J^π of ²³⁸U states via DWBA) also feeds motivation-1, touching on shape coexistence in the actinide region. So it is genuinely cross-cutting across all three pillars — which is likely part of why it is a compelling proposal for the group.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8115-6248-7427-90fb-8c86458d8d4b",
  "updated_at": "2026-04-12T09:46:58.171995Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d8115-6248-7e13-be83-fdeb093be665"
}
```

</details>
