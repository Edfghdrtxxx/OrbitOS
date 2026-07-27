# Translational energy vs kinetic energy

## Export metadata (verbatim)

```json
{
  "uuid": "2dfce007-7d4a-42a6-a63e-3a0a7a52d810",
  "name": "Translational energy vs kinetic energy",
  "summary": "**Conversation Overview**\n\nThe person is a physics student or researcher with demonstrated familiarity with advanced topics including nuclear physics, the Fermi gas model, nuclear level density, Lagrangian mechanics, scleronomic constraints, and experimental detector systems (MWDC, scintillators). They came to Claude with two interleaved learning goals: clarifying a physics concept and improving their English grammar.\n\nOn the physics side, the person asked about the distinction between kinetic energy and translational energy. Claude explained that translational kinetic energy is a component of total kinetic energy — not a separate concept — and introduced König's theorem decomposing total KE into translational and rotational terms, with vibrational energy as a third component relevant to molecules and nuclei. Claude connected this to the equipartition theorem and the degrees-of-freedom framework relevant to the Fermi gas model the person already works with. The person then requested an interactive visualization of the double pendulum in phase space, which Claude produced as an embedded RK4-integrated simulation showing both the physical motion and the $\\theta_2$ vs $\\omega_2$ phase portrait, with sliders for initial conditions and a live trace illustrating chaotic behavior.\n\nOn the grammar side, the person's opening sentence (\"I know what is kinetic energy\") prompted Claude to explain the rule governing auxiliary verb inversion in direct versus embedded questions. Claude followed up with a three-part drill set covering conversion of direct questions to embedded clauses, error correction, and reverse conversion. The person completed all twelve items and scored 11/12; the only error was omitting the definite article in \"What does the Legendre transform give you?\" Claude confirmed all other answers as correct, explicitly noting the person's correct handling of the dropped dummy auxiliary (\"if they verified\" rather than \"if did they verify\"). The person's physics domain vocabulary appeared naturally throughout the drill sentences, suggesting they appreciated contextually relevant examples over generic ones.",
  "created_at": "2026-07-17T01:51:54.951662Z",
  "updated_at": "2026-07-17T02:13:12.648592Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-07-17T01:51:56.008362Z

I know what is kinetic energy. Then what is translational energy? What is the difference?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f6dc5-e601-75b3-8f9a-62b47bd2ddc6",
  "updated_at": "2026-07-17T01:51:56.008362Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-07-17T01:52:19.633815Z

<details>
<summary>Thinking (verbatim)</summary>

I need to address the grammar issue where "I know what is kinetic energy" should be "I know what kinetic energy is," and then clarify that translational kinetic energy is actually a specific type of kinetic energy rather than something separate—the user seems to have a conceptual gap there that's worth exploring.

For extended objects, total kinetic energy breaks down into translational (motion of the center of mass) and rotational (spinning) components, with the mathematical relationship being KE_total = (1/2)mv_cm² + (1/2)Iω². For point particles, there's only translational kinetic energy since rotation doesn't apply. The user might also be conflating this with the statistical mechanics concept where molecules have translational, rotational, and vibrational degrees of freedom that each contribute to internal energy through equipartition theorem.

Given the nuclear physics background and classical mechanics studies, I should explain this rigorously using König's theorem—the decomposition of kinetic energy into center-of-mass motion plus motion relative to the center of mass—which connects naturally to Lagrangian mechanics. An interactive visualization could help clarify the distinction between these energy components, though I should first check if that's what would be most useful. Building the interactive visualization with a rigid body translating and rotating across the screen, showing the energy breakdown in a side panel with sliders to adjust velocity and angular velocity. I should also clarify the grammar issue in the original question and note that "translational energy" is sometimes used loosely in introductory contexts but rigorously refers to a specific component of kinetic energy—connecting this to equipartition theorem and the Fermi gas model for nuclear level density.

</details>

**Language flaw first:** "I know what is kinetic energy" should be **"I know what kinetic energy is."** This is a classic embedded-clause mistake — once "what kinetic energy is" is embedded inside another sentence ("I know..."), it stops being a question and takes statement word order (subject before verb). Only the standalone question ("What is kinetic energy?") inverts subject and verb.

**The physics:**

Translational kinetic energy isn't a separate kind of energy from kinetic energy — it's a *component* of it. For a rigid, extended body, total kinetic energy splits cleanly into two pieces (this is König's theorem, and it falls right out of the Lagrangian formalism you've been working with):

$$KE_{total} = \underbrace{\frac{1}{2}Mv_{cm}^2}_{\text{translational}} + \underbrace{\frac{1}{2}I\omega^2}_{\text{rotational}}$$

- **Translational KE** — energy from the motion of the center of mass through space, as if all the mass were concentrated at one point.
- **Rotational KE** — energy from the body spinning about its own center of mass.

For a true point particle (no internal structure), there's no rotation to speak of, so translational KE *is* the total kinetic energy — which is probably why the two terms feel interchangeable to you. The distinction only becomes meaningful once you allow the object to have spatial extent, so it can both move *and* spin.

There's a third piece too, relevant to molecules/nuclei rather than rigid bodies: **vibrational KE**, from internal oscillation of parts relative to each other (bonds stretching, nucleons oscillating, etc.).

**A blind spot worth flagging:** this three-way split (translational / rotational / vibrational) is exactly the "degrees of freedom" language used in the **equipartition theorem** — each quadratic degree of freedom contributes $\frac{1}{2}k_BT$ to average energy. That's the same bookkeeping that underlies the Fermi gas model of nuclear level density you already work with, just applied to a classical gas instead of nucleons. If GRE-style thermo/stat-mech questions come up, "translational vs rotational vs vibrational energy" is almost always testing whether you know which degrees of freedom a given molecule/system has, not testing the definition of kinetic energy itself.

Want me to sketch this out as an interactive widget — a spinning, translating object with a live readout of how the two energy terms split as you change v and ω?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f6dc5-e601-7165-8d76-7fe54cd2c0be",
  "updated_at": "2026-07-17T01:52:19.633815Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f6dc5-e601-75b3-8f9a-62b47bd2ddc6"
}
```

</details>

### 3. human — 2026-07-17T01:53:20.532696Z

When do I need to permute the auxiliary verb?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f6dc7-2f9d-75f9-a38e-ec10465fb55b",
  "updated_at": "2026-07-17T01:53:20.532696Z",
  "attachments": [
    {
      "file_name": "excerpt_from_previous_claude_message.txt",
      "file_size": 74,
      "file_type": "txt",
      "extracted_content": "\"I know what is kinetic energy\" should be \"I know what kinetic energy is.\""
    }
  ],
  "files": [
    {
      "file_uuid": "9039e2e5-3672-4334-88e6-d71f6e79125e",
      "file_name": "excerpt_from_previous_claude_message.txt"
    }
  ],
  "parent_message_uuid": "019f6dc5-e601-7165-8d76-7fe54cd2c0be"
}
```

</details>

### 4. assistant — 2026-07-17T01:53:29.329434Z

<details>
<summary>Thinking (verbatim)</summary>

I need to explain when auxiliary verbs invert in English questions—specifically the difference between direct questions where inversion happens and embedded questions where it doesn't. I'll need clear examples showing both patterns to make the rule stick.

</details>

Good question — this is one of the more persistent traps for learners because English direct questions and embedded questions follow opposite word-order rules.

**Direct question → invert (auxiliary/verb before subject)**

Used when the question stands alone:
- "What is kinetic energy?"
- "Where did you park the car?"
- "Why is the cross section defined that way?"

**Embedded (indirect) question → don't invert (subject before auxiliary/verb)**

This happens whenever the question is a *clause inside a larger sentence* — usually following verbs like *know, wonder, ask, explain, tell me, I'm not sure, it depends on...*:

- "I know **what kinetic energy is**." (not "what is kinetic energy")
- "I wonder **where you parked** the car." (not "where did you park")
- "Can you explain **why the cross section is** defined that way?" (not "why is the cross section defined")

**The mechanical rule:** look at what comes right before the question word (who/what/where/why/how/when).
- If it's the *start of the sentence* → invert.
- If it's a verb like *know/wonder/explain/tell/ask/understand* → don't invert, and also drop the extra "do/does/did" if the embedded clause has its own main verb.

That last part trips people up specifically because it also removes the dummy auxiliary:
- Direct: "**Did** you check the calibration?"
- Embedded: "I don't know **if you checked** the calibration." (not "if you did check" or "if did you check")

**One more nuance relevant to your writing:** the same rule applies to embedded *statements* introduced by "what," which is your original sentence's structure — "what kinetic energy is" functions as the object of "know," so it behaves grammatically like a noun phrase, not a question, even though it's built from a question word.

A rough diagnostic you can use in the moment: if you could answer the clause with a direct one-word/phrase reply ("Kinetic energy? Energy of motion"), it's a real question → invert. If the clause is just filling a grammatical slot (the *thing that you know*), it's embedded → don't invert.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f6dc7-2f9d-7432-8d60-61b82239fc3c",
  "updated_at": "2026-07-17T01:53:29.329434Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f6dc7-2f9d-75f9-a38e-ec10465fb55b"
}
```

</details>

### 5. human — 2026-07-17T01:57:37.421776Z

Give me some drills of that.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f6dcb-1ab1-79e6-b12f-e97ffa8c351f",
  "updated_at": "2026-07-17T01:57:37.421776Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f6dc7-2f9d-7432-8d60-61b82239fc3c"
}
```

</details>

### 6. human — 2026-07-17T02:12:37.325253Z

1. I'm not sure where the detector is calibrated
2. Can you explain what the Fermi gas model predicted?
3. I never understood why the cross section is defined per unit solid angle.
4. I'd like to know how the MWDC tracks particles.
5. I don't know if they verified the citation
6. I know what the difference between translational and rotational energy is.
7. She asked me where I found that reference.
8. Nobody explained why the scintillator saturates at high energy
9. I wonder what the double pendulum looks like in phase space. btw, I am curious as well. Please visualize it.
10. Tell me how you extracted the excitation spectrum
11. What does Legendre transform give you?
12. Why is the constraint scleronomic?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f6dd8-d580-7b63-b850-ec5413c3254c",
  "updated_at": "2026-07-17T02:12:37.325253Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f6dcb-1ab1-7c70-a2af-0467ffbdd4c1"
}
```

</details>

### 7. assistant — 2026-07-17T02:13:12.648592Z

<details>
<summary>Thinking (verbatim)</summary>

I'm going through each answer to verify correctness, checking that the embedded clauses are properly formed without inversion and that the grammar is sound throughout.

I notice #11 is missing the article "the" before "Legendre transform" — it should read "What does the Legendre transform give you?" rather than just "What does Legendre transform give you?" The rest look good aside from some missing periods, which aren't critical.

Now I need to create the interactive double pendulum phase space visualization the user requested. I'm setting up an HTML canvas-based simulation that will integrate the equations of motion using RK4 integration, displaying both the animated pendulum and its corresponding phase space plot (theta versus omega) updating in real time.

</details>

Almost perfect — 11/12. Only #11 needs an article: **"What does *the* Legendre transform give you?"** ("Legendre transform" isn't a proper noun; it needs "the" like "the derivative" or "the integral.")

Everything else is clean, including your embedded "I don't know if they verified" (nice touch dropping the dummy "did") and #9's inversion-free phrasing.

Now — let's visualize that double pendulum in phase space.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-17T02:12:44.232017Z",
  "stop_timestamp": "2026-07-17T02:12:44.244469Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01L7h2hVdEouTxzsYy5Y3SUJ",
  "name": "visualize:read_me",
  "input": {
    "modules": [
      "interactive",
      "chart"
    ],
    "platform": "desktop"
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
  "start_timestamp": "2026-07-17T02:12:46.338076Z",
  "stop_timestamp": "2026-07-17T02:12:46.338102Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01L7h2hVdEouTxzsYy5Y3SUJ",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "# Imagine — Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` — SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` — UI mockups, forms, cards, dashboards\n- `interactive` — interactive explainers with controls\n- `chart` — charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` — illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget — hard limits:**\n- Box subtitles: ≤5 words. Detail goes in click-through (`sendPrompt`) or the prose below — not the box.\n- Colors: ≤2 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: ≤4 boxes at full width (~140px each). 5+ boxes → shrink to ≤110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing \"click to learn more\" in prose, the diagram itself must ACTUALLY be sparse. Don't promise brevity then front-load everything.\n\n**Accessibility:** For HTML widgets, begin with a visually-hidden `<h2 class=\"sr-only\">` containing a one-sentence summary of the visualization for screen-reader users. (SVG widgets use `role=\"img\"` with `<title>` and `<desc>` instead — see SVG setup.)\n\nYou create rich visual content — SVG diagrams/illustrations and HTML interactive widgets — that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn't notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** — All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks \"explain X\", write the explanation in your response and use the tool only for the visual that accompanies it. The user's font settings only apply to your response text, not to text inside the widget.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) → content HTML → `<script>` last.\n- **SVG**: `<defs>` (markers) → visual elements immediately.\n- Prefer inline `style=\"...\"` over `<style>` blocks — inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules — that's fine, but don't bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji. Icons = Tabler **outline** webfont (5800+, already loaded): `<i class=\"ti ti-home\"></i>`. Outline only — never use `-filled` suffixes (`ti-heart-filled` etc. are not loaded and will render blank). Inherits color + font-size from parent. Decorative icons get `aria-hidden=\"true\"`; icon-only buttons get `aria-label`. Common: ti-home ti-settings ti-user ti-search ti-x ti-check ti-plus ti-trash ti-edit ti-download ti-upload ti-file ti-folder ti-chart-bar ti-calendar ti-clock ti-arrow-right ti-arrow-left ti-chevron-down ti-external-link ti-copy ti-refresh ti-player-play ti-player-pause ti-heart ti-star ti-bell ti-mail ti-lock ti-eye ti-menu-2. Don't hand-draw icon SVG paths.\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only — host provides the bg)\n- **Typography**: The default font is Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-voice)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px — all `font-weight: 500`. Heading color is pre-set to `var(--text-primary)` — don't override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 — they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally — no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` — the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style=\"min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;\">` and put the modal inside — it's a faux viewport that actually contributes layout height.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` — just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text — never plain black or generic gray.\n- **Corners**: use `border-radius: var(--radius)` for controls, `12px` for cards. In SVG, `rx=\"4\"` is the default — larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** — if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** — see Philosophy above.\n- **Icon sizing**: Tabler `<i class=\"ti …\">` sizes with `font-size` — 16–20px inline, 24px max decorative. For one-off inline SVG icons, set `width`/`height` explicitly (same limits).\n- No tabs, carousels, or `display: none` sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)\n- No nested scrolling — auto-fit height.\n- Scripts execute after streaming — load libraries via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` (UMD globals), then use the global in a plain `<script>` that follows. The library `<script src>` tag must come BEFORE any inline script that uses its global — never call a library from code that appears above its `<script src>` tag.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`, `fonts.googleapis.com`, `fonts.gstatic.com`. All other origins are blocked by the sandbox — the request silently fails.\n\n### CSS Variables\n**Surfaces**: `--surface-2` (white), `--surface-1` (card), `--surface-0` (page bg); role tints `--bg-{accent,danger,success,warning}`\n**Text**: `--text-primary` (black), `--text-secondary` (muted), `--text-muted` (hints); role `--text-{accent,danger,success,warning}`\n**Borders**: `--border` (default hairline), `--border-strong` (hover), `--border-stronger`; role `--border-{accent,danger,success,warning}`\n**Typography**: `--font-sans`, `--font-voice` (serif), `--font-mono`\n**Layout**: `--radius` (8px), `--pad-{sm,md,lg,xl}`, `--gap-{xs,sm,md,lg,xl}`; for larger corners use literal `12px`/`16px`\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** — every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes — they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) — never omit fill or use `fill=\"inherit\"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--text-primary, --text-secondary) for text. Never hardcode colors like color: #333 — invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user's next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href=\"https://...\">` just works — clicks are intercepted and open the host's link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n\n\n## UI components\n\n### Layout width\nThe widget container is 680px wide. Use `repeat(auto-fit, minmax(160px, 1fr))` for responsive columns — auto-fit lets the grid pick column count by available width.\n\n### Aesthetic\nFlat, clean, white surfaces. Minimal 0.5px borders. Generous whitespace. No gradients, no shadows (except functional focus rings). Everything should feel native to claude.ai — like it belongs on the page, not embedded from somewhere else.\n\n### Tokens\n- Borders: always `0.5px solid var(--border)` (or `--border-strong` for emphasis)\n- Corner radius: `var(--radius)` for most elements, `12px` for cards\n- Cards: white bg (`var(--surface-2)`), 0.5px border, 12px radius, padding 1rem 1.25rem\n- Form elements (input, select, textarea, button, range slider) are pre-styled — write bare tags. Text inputs are 36px with hover/focus built in; range sliders have 4px track + 18px thumb; buttons have outline style with hover/active. Only add inline styles to override (e.g., different width).\n- Buttons: pre-styled with transparent bg, 0.5px `--border-strong` border, hover `--surface-1`, active scale(0.98). If it triggers sendPrompt, append a ↗ arrow.\n- **Round every displayed number.** JS float math leaks artifacts — `0.1 + 0.2` gives `0.30000000000000004`, `7 * 1.1` gives `7.700000000000001`. Any number that reaches the screen (slider readouts, stat card values, axis labels, data-point labels, tooltips, computed totals) must go through `Math.round()`, `.toFixed(n)`, or `Intl.NumberFormat`. Pick the precision that makes sense for the context — integers for counts, 1–2 decimals for percentages, `toLocaleString()` for currency. For range sliders, also set `step=\"1\"` (or step=\"0.1\" etc.) so the input itself emits round values.\n- Spacing: use rem for vertical rhythm (1rem, 1.5rem, 2rem), px for component-internal gaps (8px, 12px, 16px)\n- Box-shadows: none, except `box-shadow: 0 0 0 Npx` focus rings on inputs\n\n### Metric cards\nFor summary numbers (revenue, count, percentage) — surface card with muted 13px label above, 24px/500 number below. `background: var(--surface-1)`, no border, `border-radius: var(--radius)`, padding 1rem. Use in grids of 2-4 with `gap: 12px`. Distinct from raised cards (which have white bg + border).\n\n### Layout\n- Editorial (explanatory content): no card wrapper, prose flows naturally\n- Card (bounded objects like a contact record, receipt): single raised card wraps the whole thing\n- Don't put tables here — output them as markdown in your response text\n\n**Grid overflow:** `grid-template-columns: 1fr` has `min-width: auto` by default — children with large min-content push the column past the container. Use `minmax(0, 1fr)` to clamp.\n\n**Table overflow:** Tables with many columns auto-expand past `width: 100%` if cell contents exceed it. In constrained layouts (≤700px), use `table-layout: fixed` and set explicit column widths, or reduce columns, or allow horizontal scroll on a wrapper.\n\n### Mockup presentation\nContained mockups — mobile screens, chat threads, single cards, modals, small UI components — should sit on a background surface (`var(--surface-1)` container with `border-radius: 12px` and padding, or a device frame) so they don't float naked on the widget canvas. Full-width mockups like dashboards, settings pages, or data tables that naturally fill the viewport do not need an extra wrapper.\n\n### 1. Interactive explainer — learn how something works\n*\"Explain how compound interest works\" / \"Teach me about sorting algorithms\"*\n\nUse HTML for the interactive controls — sliders, buttons, live state displays, charts. Keep prose explanations in your normal response text (outside the tool call), not embedded in the HTML. No card wrapper. Whitespace is the container.\n\n```html\n<div style=\"display: flex; align-items: center; gap: 12px; margin: 0 0 1.5rem;\">\n  <label style=\"font-size: 14px; color: var(--text-secondary);\">Years</label>\n  <input type=\"range\" min=\"1\" max=\"40\" value=\"20\" id=\"years\" style=\"flex: 1;\" />\n  <span style=\"font-size: 14px; font-weight: 500; min-width: 24px;\" id=\"years-out\">20</span>\n</div>\n\n<div style=\"display: flex; align-items: baseline; gap: 8px; margin: 0 0 1.5rem;\">\n  <span style=\"font-size: 14px; color: var(--text-secondary);\">£1,000 →</span>\n  <span style=\"font-size: 24px; font-weight: 500;\" id=\"result\">£3,870</span>\n</div>\n\n<div style=\"margin: 2rem 0; position: relative; height: 240px;\">\n  <canvas id=\"chart\"></canvas>\n</div>\n```\n\nUse `sendPrompt()` to let users ask follow-ups: `sendPrompt('What if I increase the rate to 10%?')`\n\n### 2. Compare options — decision making\n*\"Compare pricing and features of these products\" / \"Help me choose between React and Vue\"*\n\nUse HTML. Side-by-side card grid for options. Highlight differences with semantic colors. Interactive elements for filtering or weighting.\n\n- Each option in a card. Use badges for key differentiators. A leading Tabler icon (`<i class=\"ti ti-NAME\">` at 20px, `aria-hidden`) anchors each option visually — pick the most apt name per option.\n- Add `sendPrompt()` buttons: `sendPrompt('Tell me more about the Pro plan')`\n- Don't put comparison tables inside this tool — output them as regular markdown tables in your response text instead. The tool is for the visual card grid only.\n- When one option is recommended or \"most popular\", accent its card with `border: 2px solid var(--border-accent)` only (2px is deliberate — the only exception to the 0.5px rule, used to accent featured items) — keep the same background and border as the other cards. Add a small badge (e.g. \"Most popular\") above or inside the card header using `background: var(--bg-accent); color: var(--text-accent); font-size: 12px; padding: 4px 12px; border-radius: var(--radius)`.\n\n### 3. Data record — bounded UI object\n*\"Show me a Salesforce contact card\" / \"Create a receipt for this order\"*\n\nUse HTML. Wrap the entire thing in a single raised card. All content is sans-serif since it's pure UI. Use an avatar/initials circle for people (see example below).\n\n```html\n<div style=\"background: var(--surface-2); border-radius: 12px; border: 0.5px solid var(--border); padding: 1rem 1.25rem;\">\n  <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 16px;\">\n    <div style=\"width: 44px; height: 44px; border-radius: 50%; background: var(--bg-accent); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 14px; color: var(--text-accent);\">MR</div>\n    <div>\n      <p style=\"font-weight: 500; font-size: 15px; margin: 0;\">Maya Rodriguez</p>\n      <p style=\"font-size: 13px; color: var(--text-secondary); margin: 0;\">VP of Engineering</p>\n    </div>\n  </div>\n  <div style=\"border-top: 0.5px solid var(--border); padding-top: 12px;\">\n    <table style=\"width: 100%; font-size: 13px;\">\n      <tr><td style=\"color: var(--text-secondary); padding: 4px 0;\"><i class=\"ti ti-mail\" style=\"font-size:16px; vertical-align:-2px; margin-right:6px\" aria-hidden=\"true\"></i>Email</td><td style=\"text-align: right; padding: 4px 0; color: var(--text-accent);\">m.rodriguez@acme.com</td></tr>\n      <tr><td style=\"color: var(--text-secondary); padding: 4px 0;\"><i class=\"ti ti-phone\" style=\"font-size:16px; vertical-align:-2px; margin-right:6px\" aria-hidden=\"true\"></i>Phone</td><td style=\"text-align: right; padding: 4px 0;\">+1 (415) 555-0172</td></tr>\n    </table>\n  </div>\n</div>\n```\n\n\n## Color palette\n\n9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.\n\n| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |\n|-------|------|------|-----|-----|-----|-----|-----|------|\n| `c-purple` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |\n| `c-teal` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |\n| `c-coral` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |\n| `c-pink` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |\n| `c-gray` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |\n| `c-blue` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |\n| `c-green` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |\n| `c-amber` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |\n| `c-red` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |\n\n**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:\n- Group nodes by **category** — all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.\n- For illustrative diagrams, map colors to **physical properties** — warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.\n- Use **gray for neutral/structural** nodes (start, end, generic steps).\n- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.\n- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept — those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)\n\n**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** — title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.\n\n**Light/dark mode quick pick** — use only stops from the table, never off-table hex values:\n- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**\n- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**\n- Apply `c-{ramp}` to a `<g>` wrapping shape+text, or directly to a `<rect>`/`<circle>`/`<ellipse>`. Never to `<path>` — paths don't get ramp fill. For colored connector strokes use inline `stroke=\"#...\"` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.\n\nFor status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.\n\n\n<!-- @generated by apps/cds-docs/scripts/gen-cds-skill.mjs from packages/cds/{CLAUDE.md,docs/**}. Do not edit by hand — edit the source docs and re-run `yarn workspace @ant/cds-docs gen:cds-skill`. -->\n\n# CDS tokens — vanilla\n\nThe Claude Design System token vocabulary for plain HTML/CSS/SVG\nsurfaces without React or Tailwind. Tokens are unprefixed CSS custom\nproperties (`--text-primary`, `--surface-1`, `--border`) declared on\n`:root` by `@ant/cds/tokens.vanilla.css`, with dark-mode overrides under\n`[data-mode=\"dark\"]` and `@media (prefers-color-scheme: dark)`.\n\nReferences below to `CdsRoot`, `Button`, or Tailwind utilities belong to\nthe React build; in vanilla, read a utility like `bg-surface-1` as the\nunderlying `var(--surface-1)`.\n\n## Rules\n\n### Token rule\n\nReference purpose-layer tokens as CSS custom properties:\n\n```css\n/* GOOD */\nbackground: var(--surface-1);\ncolor: var(--text-secondary);\nborder: 0.5px solid var(--border);\n\n/* BAD — raw hex, invisible in dark mode */\ncolor: #3d3d3a;\n```\n\n| Property   | Tokens |\n| ---------- | ------ |\n| Background | `--surface-{0..3,popover,panel}` · `--bg-{accent,danger,success,warning,pro,neutral}` · `--fill-{role}` |\n| Text       | `--text-{primary,secondary,muted,disabled}` · `--text-{accent,danger,success,warning,pro}` · `--on-{role}` |\n| Border     | `--border` (default hairline) · `--border-{strong,stronger}` · `--border-{role}` |\n| Sizing     | `--h-control` · `--pad-{sm,md,lg,xl}` · `--gap-{xs,sm,md,lg,xl}` · `--radius` |\n| Typography | `--font-{sans,mono,voice}` · `--font-size-{caption,footnote,body,code,heading,title}` |\n| Shadow     | `--shadow-{sm,md,lg,popover}` |\n| Motion     | `--dur-{fast,snap,base,slow}` · `--ease-{out,snap,overshoot}` |\n\n### Dark mode rule\n\nDark mode is `[data-mode=\"dark\"]` on `:root` (or `prefers-color-scheme: dark` with no explicit `data-mode`). All tokens flip automatically — never hardcode a dark-mode override.\n\n### Muted text rule\n\nSupporting copy uses `color: var(--text-secondary)`; reserve `var(--text-muted)` for placeholders, captions, and metadata. **Never** `opacity` on text — opacity multiplies against the background and drifts per-surface.\n\n### Accent rule\n\nAt most **one** accent-filled (`variant=\"primary\"`) Button per view; siblings use `secondary` or `ghost`. The `brand` (clay) role is reserved for Claude-initiated actions — send, generate — never ordinary user CTAs.\n\n### Restraint rule\n\nDefault to the quieter, lighter option — \"too cluttered\" is the most common design note.\n\n- `secondary` is the default Button; `primary` / `brand` read as aggressive — don't reach for them in popovers, banners, or dense tool/canvas surfaces.\n- Avoid disabled buttons. Keep them enabled and respond on use (disabled controls are low-contrast and show no tooltip on touch); use `disabledReason` only when you genuinely must disable.\n- Dense lists: bordered rows, not rounded-rect cards.\n\n### Elevation rule\n\n`surface-0` is the page canvas (via `--page-bg`); `1`/`2`/`3` step above it. At most **two** floating elevations (`panel` / `popover`) on screen at once. A third floating layer means `Dialog`, not popover-on-popover. Flat in-flow tiles (`rounded-card bg-surface-1 shadow-card-ring`) have no depth and don't count toward this limit.\n\n---\n\n## CDS principles\n\nHow something feels like Claude — the philosophy behind the tokens. Tokens tell you _what_ you can use; the [Rules](../CLAUDE.md#rules) tell you _how_ to apply them. These principles tell you _why_.\n\n## Claude-native\n\ncds is designed to be authored _by_ Claude as much as _for_ Claude's products. The `CLAUDE.md` you're reading is the system prompt; component docs are structured for retrieval; utilities are named so a model can guess them; the GenerateDemo page proves the loop works. A design system an LLM can use fluently is one humans can use fluently too.\n\n## Clay is Claude's color\n\n`brand` (clay) is reserved for what Claude does — send, generate, the spark mark. User-driven primary actions take the neutral `accent` blue; everything else stays gray. Holding clay back to a single role is what lets it carry meaning instead of becoming wallpaper.\n\n## Serif is Claude's voice\n\nClaude's responses render in serif; the surrounding chrome stays sans. Typography signals who's speaking before a word is read. cds ships `--font-voice` (the `font-voice` utility) for response surfaces.\n\n## Density adapts to the surface\n\nConsole, claude.ai and antfarm share the same components — `compact` for dev tools and power users, `comfortable` for consumer apps. Density is one switch on `CdsRoot`, not a per-component prop, so a product can change its feel without forking a single component.\n\n## Built to be extended\n\nEvery component takes `className`, every token is a public CSS var, and compound parts (`.Root`, `.Item`, `.Trigger`) sit under the porcelain helpers. The system expects you to compose past it — wrap, restyle, slot arbitrary children — not fork it.\n\n## Restraint over options\n\nOne accent per view, one elevation step, t-shirt sizes instead of 0–12 scales. Fewer decisions at the call site means fewer ways for two screens to drift apart — consistency comes from removing knobs, not policing them.\n\n## CDS tokens\n\nEvery visual decision in `@ant/cds` resolves to a `--*` CSS custom property. The TypeScript source of truth lives under `packages/cds/tokens/`; `yarn gen:tokens` emits the shipped CSS at [`src/generated/tokens.css`](../src/generated/tokens.css). Tokens are layered so that a single edit at the bottom (a hex value) propagates through ramps, roles, and purposes without touching component code.\n\n## The layer model\n\n```\n1. Base palette   --{hue}-{stop}      literal hex, mode-stable (gray, red, orange,\n                                          yellow, green, aqua, blue, violet, magenta)\n2. Theme ramps    --neutral-N         gray-N in light, gray-(900-N) in dark\n                  --alpha-N           neutral-900 @ fixed opacity (so it flips too)\n3. Elevation      --surface-{0..3}    0 = darkest, 3 = lightest, in BOTH modes\n4. Purpose        --surface-{popover, what components actually consume; includes the\n                   panel}, --text-*,  role mappings ({fill|bg|border|text}-{role})\n                   --fill-*, --on-*\n—  page-bg        --page-bg           hook the host app sets to its canvas color\n5. Density        --h-control*,       px values; remapped by [data-density]\n                   --pad-*, --gap-*,\n                   --radius, --font-size-*,\n                   --leading-*\n6. Motion         --dur-*,            durations + easing curves (mode/density-invariant)\n                   --ease-*\n```\n\n**Components only read layer 4 (and 5 for sizing).** Layers 1–3 are wiring.\n\n---\n\n## 1. Base palette\n\nLiteral hex values, mode-stable — `gray-500` is the same pixel in light and dark. Nine hues share one 36-stop grid (0, 10–100 by 10, 150–800 by 50, 810–900 by 10); every hue anchors 0 = `#ffffff` and 900 = `#0b0b0b`. Rarely referenced directly — reach for layers 2–4 and let them resolve here.\n\n---\n\n## 2. Theme ramps\n\n`--neutral-N` is `gray-N` in light and `gray-(900-N)` in dark, so `neutral-0` is always the near-background end and `neutral-900` the near-foreground end. Use it for \"contrast against the page\" (text, borders, fills); use `gray-*` when you mean a specific pixel value regardless of mode. `--alpha-N` is `neutral-900` at fixed opacity — a black wash in light, a white wash in dark, without per-mode overrides.\n\n---\n\n## 3. Elevation\n\n| Token             | Light     | Dark       | Use case     |\n| ----------------- | --------- | ---------- | ------------ |\n| `--surface-0` | `gray-20` | `gray-890` | Page         |\n| `--surface-1` | `gray-10` | `gray-830` | In-flow card |\n| `--surface-2` | `gray-0`  | `gray-750` | Panel        |\n| `--surface-3` | `gray-0`  | `gray-700` | Popover      |\n\nThe ordinal is absolute lightness in both modes: 0 is the darkest, 3 the lightest. `--surface-panel` and `--surface-popover` alias levels 2 and 3. The page canvas is the app's own choice — set `--page-bg` so knockout hairlines (focus ring inset, Pulse halo) blend into it; it defaults to `surface-0`.\n\n---\n\n## 4. Purpose\n\n**This is the layer components consume.**\n\n### Roles\n\nEach role maps a semantic meaning to a hue. Property-first pattern: `--fill-{role}` (solid hue-450), `--fill-{role}-hover` (hue-400), `--bg-{role}` (hue-100 / dark hue-800), `--border-{role}` (solid hue-250 in light / hue-700 in dark), `--text-{role}` (600 fg). Warning's fill diverges: yellow-200 / hover yellow-250. Brand uses named `clay-emphasized` / hover `clay` (not hue stops).\n\n| Role      | Hue    | Tokens                                                                                          |\n| --------- | ------ | ----------------------------------------------------------------------------------------------- |\n| `accent`  | blue   | `--fill-accent{,-hover}`, `--bg-accent`, `--border-accent`, `--text-accent`     |\n| `brand`   | clay   | `--fill-brand{,-hover}`, `--on-brand` (fill-only — no text/bg/border)                   |\n| `danger`  | red    | `--fill-danger{,-hover}`, `--bg-danger`, `--border-danger`, `--text-danger`     |\n| `success` | green  | `--fill-success{,-hover}`, `--bg-success`, `--border-success`, `--text-success` |\n| `warning` | yellow | `--fill-warning{,-hover}`, `--bg-warning`, `--border-warning`, `--text-warning` |\n| `pro`     | purple | `--fill-pro{,-hover}`, `--bg-pro`, `--border-pro`, `--text-pro`                 |\n\n#### `git-*` roles\n\nDiff and PR/CR-state colors — `added`, `removed`, `modified`, `conflicting`, `merged`, `closed`, `draft`, plus `opened`/`queued` as aliases of `added`/`modified`. Each carries the full `text` / `fill{,-hover}` / `bg` / `border` / `on` suite. Values come from `@ant/epitaxy`'s `--extended-*` palette (not CDS ramp stops), so migrating claude.ai's diff UI onto these tokens is a rename; `fill` light is the Epitaxy hue darkened just enough for white `on-git-*` to pass AA.\n\n### Background vs. fill\n\nBoth are backgrounds; the split is saturation, and therefore which foreground token pairs on top.\n\n`bg-{role}` is the pale tint (hue-100 light / hue-800 dark) for passive status surfaces — Banner, Badge, chip. Light enough that `text-{role}` (hue-600) reads against it: a danger banner is `bg-danger` + `text-danger`. `fill-{role}` is the saturated solid (hue-450) for interactive controls — button, checkbox, toggle. Too dark for `text-{role}`, so it pairs with `on-{role}` (gray-0 / gray-900) instead; the 450 stop is chosen for WCAG contrast against `on-*`.\n\n|       | Background    | Foreground    | Example       |\n| ----- | ------------- | ------------- | ------------- |\n| Tint  | `bg-{role}`   | `text-{role}` | Banner, Badge |\n| Solid | `fill-{role}` | `on-{role}`   | Button        |\n\nThe token name encodes the pairing: use `bg-*` when the hue is ambient context behind body text; `fill-*` when the hue _is_ the control surface.\n\n### Purpose tokens\n\n| Token                        | Value (light)                                            | Use case                                         |\n| ---------------------------- | -------------------------------------------------------- | ------------------------------------------------ |\n| `--text-primary`         | `neutral-900`                                            | Body text                                        |\n| `--text-secondary`       | `neutral-600`                                            | Supporting text                                  |\n| `--text-muted`           | `neutral-400`                                            | Placeholder, captions                            |\n| `--text-disabled`        | `alpha-4`                                                | Disabled labels                                  |\n| `--border`               | `alpha-2`                                                | Default 1px hairline                             |\n| `--border-strong`        | `alpha-3`                                                | Emphasized divider                               |\n| `--border-stronger`      | `neutral-900 / 40%`                                      | Heavy divider                                    |\n| `--fill-primary`         | `neutral-900`                                            | Primary button bg                                |\n| `--fill-primary-hover`   | `neutral-750`                                            |                                                  |\n| `--fill-secondary`       | `hsl(0 0% 100% / 0.1)`                                   | Secondary button bg                              |\n| `--fill-secondary-hover` | `alpha-1`                                                |                                                  |\n| `--fill-secondary-ring`  | `border` (light) / transparent (dark)                    | Secondary button ring                            |\n| `--fill-field`           | `hsl(0 0% 100% / 0.5)` (light) / `fill-secondary` (dark) | Field control bg (TextInput, TextArea, Combobox) |\n| `--fill-ghost-hover`     | `alpha-1`                                                | Ghost button hover bg                            |\n| `--fill-control`         | `alpha-2`                                                | Avatar fallback bg                               |\n| `--fill-control-hover`   | `alpha-3`                                                |                                                  |\n| `--fill-disabled`        | `alpha-1`                                                | Disabled control bg                              |\n| `--on-primary`           | `neutral-0`                                              | Text on `fill-primary`                           |\n| `--on-accent`            | `gray-0`                                                 | Text on `accent`                                 |\n| `--on-brand`             | `gray-0`                                                 | Text on `brand`                                  |\n| `--on-danger`            | `gray-0`                                                 | Text on `danger`                                 |\n| `--on-success`           | `gray-900`                                               | Text on `success`                                |\n| `--on-warning`           | `gray-900`                                               | Text on `warning`                                |\n| `--on-pro`               | `gray-0`                                                 | Text on `pro`                                    |\n| `--focus-shadow`         | `0 0 0 1px accent, 0 0 6px 1px bg-accent`                | `focus-visible` ring                             |\n| `--shadow-sm`            | two-layer via `--shadow-color`                       | Low elevation                                    |\n| `--shadow-md`            | two-layer via `--shadow-color`                       | Card / panel                                     |\n| `--shadow-lg`            | two-layer via `--shadow-color`                       | Dialog / sheet                                   |\n| `--shadow-popover`       | `0 8px 24px /12%, 0 2px 6px /8%`                         | Menu, dropdown popups                            |\n| `--surface-popover`      | `surface-3`                                              | Named alias                                      |\n| `--surface-panel`        | `surface-2`                                              | Named alias                                      |\n\n`--shadow-sm/md/lg` are two-layer composites (contact + diffused drop) driven by `--shadow-color`, which deepens to `black/24%` in dark mode (epitaxy parity). `--shadow-popover` is a fixed two-layer literal tuned for floating menus.\n\n---\n\n## CDS content\n\nHow to write the words that go inside cds components. Tokens decide how the UI _looks_; this decides how it _sounds_.\n\nThe voice is **intelligent, warm, unvarnished, and collaborative** — your smartest friend explaining something in plain terms. Friendly lives in the copy, not in extra chrome.\n\n## Mechanics\n\n- **Sentence case everywhere.** Buttons, headings, tabs, labels, menu items. \"Save changes\", not \"Save Changes\". Title Case is for proper nouns only (Claude, Opus, Anthropic Console).\n- **No terminal punctuation on labels and headings.** Helper text, descriptions, and empty-state body copy _do_ end with a period.\n- **Use contractions.** \"Can't\", \"you'll\", \"it's\". Conversational, not stiff.\n- **Active voice, verb first.** \"Delete project\", not \"Project deletion\".\n- **Ellipsis = in progress only.** \"Claude is thinking…\". Not for trailing off, not for menu suffixes.\n- **No ampersands.** Spell out \"and\".\n- **Serial comma.** \"Chats, projects, and artifacts.\"\n\n## Pronouns\n\nUI speaks as the product, not as Claude and not as the user.\n\n| Context          | Use               | Example                                                 |\n| ---------------- | ----------------- | ------------------------------------------------------- |\n| User's things    | **your**          | \"Your projects\" — never \"My projects\"                   |\n| Confirmations    | none / past tense | \"Saved\", \"Got it\" — never \"I saved it\"                  |\n| Errors           | **you / your**    | \"Your session expired\" — never \"I couldn't…\"            |\n| Claude (in chat) | **I**             | Reserved for the chat surface; system UI never says \"I\" |\n\n## Words to avoid\n\n| Skip                                        | Why                                   | Instead          |\n| ------------------------------------------- | ------------------------------------- | ---------------- |\n| \"successfully\"                              | The success toast _is_ the success    | \"File uploaded\"  |\n| \"please\"                                    | UI isn't asking a favor               | \"Enter a name\"   |\n| \"Click here\" / \"Tap to…\"                    | Link text should name the destination | \"Read the docs\"  |\n| \"!\" on system copy                          | Reads as shouty                       | \"Settings saved\" |\n| \"leverage\", \"seamless\", \"unlock\", \"empower\" | Corporate filler                      | Say what it does |\n| \"simply\", \"just\", \"easy\"                    | Presumes — and condescends            | Cut it           |\n\n## Patterns\n\n**Buttons / CTAs** — verb first, 1–3 words, sentence case, no punctuation. \"Create project\", \"Upgrade to Pro\". Not \"OK\", \"Submit\", or \"Click to continue\".\n\n**Errors** — say what happened, then what to do. One sentence, no \"Error:\" prefix, no first person. \"That name's already taken. Try another.\" Never surface raw exception strings.\n\n**Empty states** — an invitation, not an apology. Headline names the space (\"Start your first project\"), one-line body explains it, CTA is a verb (\"Create project\"). Skip \"Nothing here yet.\"\n\n**Placeholders** — a real example of valid input (\"name@company.com\", \"Summarize this document\"). No \"e.g.\" prefix, don't repeat the field label.\n\n**Links** — describe where they go (\"Learn more\", \"View pricing\"). Keep them at the end of the sentence; punctuation sits outside the link.\n\n## Do / Don't\n\n| Do                                 | Don't                                  |\n| ---------------------------------- | -------------------------------------- |\n| \"File uploaded\"                    | \"Your file was uploaded successfully!\" |\n| \"Enter a workspace name\"           | \"Please enter a workspace name.\"       |\n| \"Couldn't connect to Slack. Retry\" | \"Error: I was unable to connect.\"      |\n| \"Your projects\"                    | \"My projects\"                          |\n| \"Create project\"                   | \"Click Here To Get Started\"            |\n| \"Connect Slack\"                    | \"Add the Slack Connector\"              |\n\n\n\n## Charts (Chart.js)\n```html\n<div style=\"position: relative; width: 100%; height: 300px;\">\n  <canvas id=\"myChart\" role=\"img\" aria-label=\"Bar chart of quarterly revenue, Q1 through Q4\">Quarterly revenue: Q1 12, Q2 19, Q3 8, Q4 15.</canvas>\n</div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js\"></script>\n<script>\n  new Chart(document.getElementById('myChart'), {\n    type: 'bar',\n    data: { labels: ['Q1','Q2','Q3','Q4'], datasets: [{ label: 'Revenue', data: [12,19,8,15] }] },\n    options: { responsive: true, maintainAspectRatio: false }\n  });\n</script>\n```\n\n**Chart.js rules**:\n- Every `<canvas>` MUST have `role=\"img\"` and a descriptive `aria-label` summarizing what the chart shows, plus fallback text between the tags. Without these the chart is invisible to screen readers.\n- Never rely on color alone to distinguish data series. Pair each color with a secondary visual cue — dash pattern for lines, marker shape for scatter, fill pattern/hatching for bars and pie slices — and show both color and cue in the legend.\n- Canvas cannot resolve CSS variables. Use hardcoded hex or Chart.js defaults.\n- Wrap `<canvas>` in `<div>` with explicit `height` and `position: relative`.\n- **Canvas sizing**: set height ONLY on the wrapper div, never on the canvas element itself. Use position: relative on the wrapper and responsive: true, maintainAspectRatio: false in Chart.js options. Never set CSS height directly on canvas — this causes wrong dimensions, especially for horizontal bar charts.\n- For horizontal bar charts: wrapper div height should be at least (number_of_bars * 40) + 80 pixels.\n- Load UMD build via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` — sets `window.Chart` global. Follow with plain `<script>` (no `type=\"module\"`).\n- Multiple charts: use unique IDs (`myChart1`, `myChart2`). Each gets its own canvas+div pair.\n- For bubble and scatter charts: bubble radii extend past their center points, so points near axis boundaries get clipped. Pad the scale range — set `scales.y.min` and `scales.y.max` ~10% beyond your data range (same for x). Or use `layout: { padding: 20 }` as a blunt fallback.\n- Chart.js auto-skips x-axis labels when they'd overlap. If you have ≤12 categories and need all labels visible (waterfall, monthly series), set `scales.x.ticks: { autoSkip: false, maxRotation: 45 }` — missing labels make bars unidentifiable.\n\n**Number formatting**: negative values are `-$5M` not `$-5M` — sign before currency symbol. Use a formatter: `(v) => (v < 0 ? '-' : '') + '$' + Math.abs(v) + 'M'`.\n\n**Legends** — always disable Chart.js default and build custom HTML. The default uses round dots and no values; custom HTML gives small squares, tight spacing, and percentages:\n\n```js\nplugins: { legend: { display: false } }\n```\n\n```html\n<div style=\"display: flex; flex-wrap: wrap; gap: 16px; margin-bottom: 8px; font-size: 12px; color: var(--text-secondary);\">\n  <span style=\"display: flex; align-items: center; gap: 4px;\"><span style=\"width: 10px; height: 10px; border-radius: 2px; background: #3266ad;\"></span>Chrome 65%</span>\n  <span style=\"display: flex; align-items: center; gap: 4px;\"><span style=\"width: 10px; height: 10px; border-radius: 2px; background: #73726c;\"></span>Safari 18%</span>\n</div>\n```\n\nInclude the value/percentage in each label when the data is categorical (pie, donut, single-series bar). Position the legend above the chart (`margin-bottom`) or below (`margin-top`) — not inside the canvas.\n\n**Dashboard layout** — wrap summary numbers in metric cards (see UI fragment) above the chart. Chart canvas flows below without a card wrapper. Use `sendPrompt()` for drill-down: `sendPrompt('Break down Q4 by region')`.\n\n## Geographic maps (D3 choropleth)\n\n**Never invent coordinates** — no hand-drawn SVG paths, no inline GeoJSON. Fetch real topology or don't draw a map.\n\nThree topology sources on jsdelivr. Topology JSON may only be fetched from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com` (the fetch allowlist — the Google Fonts hosts are stylesheet/font-only, not fetch targets) — do NOT try `raw.githubusercontent.com` or other hosts, the fetch will silently fail. Other package names like `uk-atlas` don't exist (404).\n- US states: `https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json` → `d3.geoAlbersUsa()`, object key `.states`\n- World countries: `https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json` → `d3.geoNaturalEarth1()`, object key `.countries`\n- Per-country subdivisions: `https://cdn.jsdelivr.net/npm/datamaps@0.5.10/src/js/data/{iso3}.topo.json` (lowercase alpha-3: `deu`, `jpn`, `gbr`...), object key `.{iso3}`\n\n**Before writing the widget, web_fetch the topology URL you'll use.** The first ~1KB shows the real feature `id` and `properties.name` values — key your data on those, don't guess. Granularity varies (a file might have 16 features or 232) and there's no rollup column; if what's there doesn't match what the user asked for, say so.\n\n```html\n<div id=\"map\" style=\"width: 100%;\"></div>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/d3/7.8.5/d3.min.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/topojson/3.0.2/topojson.min.js\"></script>\n<script>\nconst values = { 'California': 39, 'Texas': 30, 'New York': 19 /* ...keyed on what you saw in web_fetch */ };\nconst isDark = matchMedia('(prefers-color-scheme: dark)').matches;\nconst color = d3.scaleQuantize([0, 40], isDark ? d3.schemeBlues[5].slice().reverse() : d3.schemeBlues[5]);\nconst svg = d3.select('#map').append('svg').attr('viewBox', '0 0 900 560').attr('width', '100%');\nconst path = d3.geoPath(d3.geoAlbersUsa().scale(1100).translate([450, 280]));\nd3.json('https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json').then(us => {\n  svg.selectAll('path').data(topojson.feature(us, us.objects.states).features).join('path')\n    .attr('d', path).attr('stroke', isDark ? 'rgba(255,255,255,.15)' : '#fff')\n    .attr('fill', d => color(values[d.properties.name] ?? 0));\n});\n</script>\n```\n\n\n## Data visualization — the design layer\n\nColor comes LAST. Most bad charts pick colors first. The procedure:\n\n1. **Pick the form** from the table below — and sometimes the right form is\n   not a chart.\n2. **Assign color by its job** — categorical, sequential, diverging, or status.\n   Never cycled; never a rainbow.\n3. **Apply the mark specs** below — thin marks, surface gaps, recessive axes.\n4. **Add a legend** for ≥2 series and direct labels for ≤4; a single series\n   needs no legend (the title names it).\n5. **Add hover** — crosshair+tooltip on line/area, per-mark tooltip on bar/dot.\n6. **Render and look.** Check label collisions, overflow, dark mode.\n\n### Choosing a form\n\n| The data is… | Use | Not |\n|---|---|---|\n| A single current value (+ maybe a trend) | **Stat tile** — value + delta + sparkline | A one-bar bar chart |\n| A handful of headline numbers | **KPI row** of stat tiles | A grouped bar chart |\n| A single ratio against a limit | **Meter** (same-ramp track) | A 2-slice pie |\n| More than ~7 classes that all matter | A **table** (or table + chart) | More colors |\n\nIf a chart is right, the data's job picks the type:\n\n| Job | Form | Color job |\n|---|---|---|\n| Compare magnitude | bar / column; heatmap for a grid | sequential (one hue) |\n| Trend over time | line; area for a single series | sequential or 1 categorical |\n| Tell distinct series apart | grouped/stacked bar, multi-line | categorical |\n| One series is the point, rest context | **emphasis** — highlight one, gray the rest | 1 hue + gray |\n| Above/below a baseline; Δ to target | diverging bar or line vs baseline | diverging |\n| Part-to-whole | stacked bar (horizontal for long names) | categorical |\n| Before → after per item | dumbbell | 1 hue, 2 shades |\n\n**Sequential is the safe default.** Categorical has a cost — it can bury the\none point that matters. If the story is \"this one went up,\" that's emphasis\n(one hue + gray), not categorical. Never solve \"too many series\" with more\nhues: past 8, fold into \"Other\" or use small multiples.\n\n### Categorical palette (Forest — fixed order, never cycled)\n\nThe 9th series is never a generated hue — it folds into \"Other\" or small\nmultiples. Canvas can't resolve CSS vars, so use these hex values directly in\nChart.js datasets. For HTML/SVG legends, wrap them in a token:\n`background: var(--series-N, <hex>)`.\n\n| Slot | Hue | Light | Dark |\n|------|-----|-------|------|\n| 1 | blue | #2a78d6 | #3987e5 |\n| 2 | green | #008300 | #008300 |\n| 3 | magenta | #e87ba4 | #d55181 |\n| 4 | yellow | #eda100 | #c98500 |\n| 5 | aqua | #1baf7a | #199e70 |\n| 6 | orange | #eb6834 | #d95926 |\n| 7 | violet | #4a3aa7 | #9085e9 |\n| 8 | red | #e34948 | #e66767 |\n\n**Sequential** (magnitude — heatmap, choropleth): one hue, light→dark. Default\nblue. **Diverging** (polarity — delta, above/below): blue ↔ red with a neutral\ngray midpoint (light #f0efec / dark #383835) — never a hue at the midpoint.\n\n**Status** (state — good/warning/serious/critical): #0ca30c / #fab219 /\n#ec835a / #d03b3b. Reserved; never \"series 4\". Always paired with an icon +\nlabel, never color alone.\n\n### Chart chrome — use the CDS tokens already on :root\n\nThese are already defined by `tokens.vanilla.css`; reference them directly.\nFor canvas (which can't resolve vars), read them once:\n`getComputedStyle(document.documentElement).getPropertyValue('--text-muted')`.\n\n| Role | Token | Light | Dark |\n|---|---|---|---|\n| Chart surface | `var(--surface-1)` | #fcfcfb | #1a1a19 |\n| Primary ink (values, title) | `var(--text-primary)` | #0b0b0b | #ffffff |\n| Secondary ink (legend, sub) | `var(--text-secondary)` | #52514e | #c3c2b7 |\n| Muted (axis ticks, labels) | `var(--text-muted)` | #898781 | #898781 |\n| Gridline (hairline) | — | #e1e0d9 | #2c2c2a |\n| Baseline / axis line | — | #c3c2b7 | #383835 |\n| Hairline border | `var(--border)` | rgba(11,11,11,0.10) | rgba(255,255,255,0.10) |\n\n**Text wears text tokens, never the series color** — values, axis labels, and\nlegend text stay in primary/secondary/muted ink; a small colored square beside\nthe text carries identity.\n\n### Mark specs\n\n- **Bar/column**: ≤24px thick, 4px rounded data-end, square at baseline.\n- **Line**: 2px stroke, round join/cap.\n- **End-dot / marker**: ≥8px, filled with series color, 2px surface-color ring.\n- **Area fill**: series hue at ~10% opacity.\n- **Gridlines**: one-step-off-surface gray, 1px, recessive. No vertical\n  gridlines on a time axis.\n- **Surface gap**: 2px surface-color gap between touching marks (stacked\n  segments, adjacent bars). Never a stroke around a mark.\n\n### Non-negotiables\n\n- **One y-axis.** Never a dual-axis chart. Two scales → two charts or indexed.\n- **Color follows the entity, never its rank.** Filtering must not repaint.\n- **Assign categorical hues in the fixed Forest order.**\n- **Sequential = one hue. Diverging = two hues + gray midpoint.** No rainbow.\n- **Hero number** (stat tile): one figure in `var(--font-voice)` (Anthropic\n  Serif) ≥48px, tabular + lining numerals. Everything else stays sans with\n  tabular figures.\n\n\nDo not overthink. Try to keep thinking below 500 tokens. If the visual is complex and requires more reasoning effort, consider creating an artifact instead.",
      "uuid": "49bb4fe4-ef1e-420a-9237-6e9416b88376"
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

I'm building an interactive double pendulum simulator with RK4 numerical integration, displaying the animated pendulum motion alongside a phase space plot, with controls for play/pause and adjustable parameters.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-17T02:12:49.412338Z",
  "stop_timestamp": "2026-07-17T02:13:09.112348Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01KjUcGXW1Nc39H58oufhKCE",
  "name": "visualize:show_widget",
  "input": {
    "loading_messages": [
      "Setting up the equations of motion",
      "Wiring up the RK4 integrator"
    ],
    "title": "double_pendulum_phase_space",
    "widget_code": "<h2 class=\"sr-only\">Interactive double pendulum simulation with a live phase space plot showing angle versus angular velocity for both arms.</h2>\n\n<div style=\"display:flex; gap:8px; margin-bottom:1rem; flex-wrap:wrap;\">\n  <button id=\"playBtn\" style=\"display:flex; align-items:center; gap:6px;\"><i class=\"ti ti-player-pause\" aria-hidden=\"true\"></i>pause</button>\n  <button id=\"resetBtn\"><i class=\"ti ti-refresh\" aria-hidden=\"true\"></i> reset</button>\n</div>\n\n<div style=\"display:flex; gap:12px; margin-bottom:1.25rem; flex-wrap:wrap;\">\n  <div style=\"flex:1; min-width:140px;\">\n    <label style=\"font-size:13px; color:var(--text-secondary);\">initial θ₁ (deg)</label>\n    <input type=\"range\" id=\"th1\" min=\"10\" max=\"170\" value=\"120\" step=\"1\" style=\"width:100%;\">\n  </div>\n  <div style=\"flex:1; min-width:140px;\">\n    <label style=\"font-size:13px; color:var(--text-secondary);\">initial θ₂ (deg)</label>\n    <input type=\"range\" id=\"th2\" min=\"10\" max=\"170\" value=\"10\" step=\"1\" style=\"width:100%;\">\n  </div>\n</div>\n\n<div style=\"display:flex; gap:16px; flex-wrap:wrap;\">\n  <div style=\"flex:1; min-width:260px;\">\n    <p style=\"font-size:13px; color:var(--text-secondary); margin:0 0 6px;\">physical space</p>\n    <svg id=\"pend\" viewBox=\"0 0 300 300\" style=\"width:100%; background:var(--surface-1); border-radius:var(--radius);\">\n      <line id=\"rod1\" x1=\"150\" y1=\"30\" x2=\"150\" y2=\"30\" stroke=\"var(--border-strong)\" stroke-width=\"2\"/>\n      <line id=\"rod2\" x1=\"150\" y1=\"30\" x2=\"150\" y2=\"30\" stroke=\"var(--border-strong)\" stroke-width=\"2\"/>\n      <circle id=\"b1\" r=\"7\" class=\"c-teal\"/>\n      <circle id=\"b2\" r=\"7\" class=\"c-coral\"/>\n      <circle cx=\"150\" cy=\"30\" r=\"3\" fill=\"var(--text-muted)\"/>\n      <path id=\"trail\" fill=\"none\" stroke=\"#D85A30\" stroke-width=\"1\" opacity=\"0.35\"/>\n    </svg>\n  </div>\n  <div style=\"flex:1; min-width:260px;\">\n    <p style=\"font-size:13px; color:var(--text-secondary); margin:0 0 6px;\">phase space (θ₂ vs ω₂)</p>\n    <svg id=\"phase\" viewBox=\"0 0 300 300\" style=\"width:100%; background:var(--surface-1); border-radius:var(--radius);\">\n      <line x1=\"150\" y1=\"0\" x2=\"150\" y2=\"300\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n      <line x1=\"0\" y1=\"150\" x2=\"300\" y2=\"150\" stroke=\"var(--border)\" stroke-width=\"1\"/>\n      <path id=\"phasePath\" fill=\"none\" stroke=\"#3987e5\" stroke-width=\"1.2\"/>\n      <circle id=\"phaseDot\" r=\"4\" fill=\"#3987e5\"/>\n    </svg>\n  </div>\n</div>\n\n<script>\n(function(){\n  const g=9.8, L1=1, L2=1, m1=1, m2=1;\n  let th1=120*Math.PI/180, th2=10*Math.PI/180, w1=0, w2=0;\n  let running=true, trail=[], phaseTrail=[];\n  const dt=0.02;\n\n  function deriv(s){\n    const [t1,t2,o1,o2]=s;\n    const d=t1-t2;\n    const den1=(m1+m2)*L1-m2*L1*Math.cos(d)*Math.cos(d);\n    const den2=(L2/L1)*den1;\n    const a1=(-m2*L1*o1*o1*Math.sin(d)*Math.cos(d)+m2*g*Math.sin(t2)*Math.cos(d)-m2*L2*o2*o2*Math.sin(d)-(m1+m2)*g*Math.sin(t1))/den1;\n    const a2=(m2*L2*o2*o2*Math.sin(d)*Math.cos(d)+(m1+m2)*(g*Math.sin(t1)*Math.cos(d)-L1*o1*o1*Math.sin(d)-g*Math.sin(t2)))/den2;\n    return [o1,o2,a1,a2];\n  }\n  function rk4step(s){\n    const k1=deriv(s);\n    const s2=s.map((v,i)=>v+dt/2*k1[i]);\n    const k2=deriv(s2);\n    const s3=s.map((v,i)=>v+dt/2*k2[i]);\n    const k3=deriv(s3);\n    const s4=s.map((v,i)=>v+dt*k3[i]);\n    const k4=deriv(s4);\n    return s.map((v,i)=>v+dt/6*(k1[i]+2*k2[i]+2*k3[i]+k4[i]));\n  }\n\n  function reset(){\n    th1=+document.getElementById('th1').value*Math.PI/180;\n    th2=+document.getElementById('th2').value*Math.PI/180;\n    w1=0; w2=0; trail=[]; phaseTrail=[];\n  }\n\n  const scale=70, ox=150, oy=30;\n  function draw(){\n    const x1=ox+scale*Math.sin(th1), y1=oy+scale*Math.cos(th1);\n    const x2=x1+scale*Math.sin(th2), y2=y1+scale*Math.cos(th2);\n    document.getElementById('rod1').setAttribute('x2',x1); document.getElementById('rod1').setAttribute('y2',y1);\n    document.getElementById('rod2').setAttribute('x1',x1); document.getElementById('rod2').setAttribute('y1',y1);\n    document.getElementById('rod2').setAttribute('x2',x2); document.getElementById('rod2').setAttribute('y2',y2);\n    document.getElementById('b1').setAttribute('cx',x1); document.getElementById('b1').setAttribute('cy',y1);\n    document.getElementById('b2').setAttribute('cx',x2); document.getElementById('b2').setAttribute('cy',y2);\n\n    trail.push([x2,y2]); if(trail.length>200) trail.shift();\n    document.getElementById('trail').setAttribute('d', trail.map((p,i)=>(i===0?'M':'L')+p[0]+' '+p[1]).join(' '));\n\n    const px=150+ (th2%(2*Math.PI))*30, py=150-w2*8;\n    const cx=150+((((th2+Math.PI)%(2*Math.PI))+2*Math.PI)%(2*Math.PI)-Math.PI)*30;\n    phaseTrail.push([cx,py]); if(phaseTrail.length>400) phaseTrail.shift();\n    document.getElementById('phasePath').setAttribute('d', phaseTrail.map((p,i)=>(i===0?'M':'L')+p[0]+' '+p[1]).join(' '));\n    document.getElementById('phaseDot').setAttribute('cx',cx); document.getElementById('phaseDot').setAttribute('cy',py);\n  }\n\n  function tick(){\n    if(running){\n      for(let i=0;i<3;i++){\n        const s=rk4step([th1,th2,w1,w2]);\n        th1=s[0]; th2=s[1]; w1=s[2]; w2=s[3];\n      }\n      draw();\n    }\n    requestAnimationFrame(tick);\n  }\n\n  document.getElementById('playBtn').addEventListener('click', function(){\n    running=!running;\n    this.innerHTML = running ? '<i class=\"ti ti-player-pause\" aria-hidden=\"true\"></i>pause' : '<i class=\"ti ti-player-play\" aria-hidden=\"true\"></i>play';\n  });\n  document.getElementById('resetBtn').addEventListener('click', reset);\n  document.getElementById('th1').addEventListener('input', reset);\n  document.getElementById('th2').addEventListener('input', reset);\n\n  reset(); draw(); tick();\n})();\n</script>"
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
  "start_timestamp": "2026-07-17T02:13:09.529522Z",
  "stop_timestamp": "2026-07-17T02:13:09.529536Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01KjUcGXW1Nc39H58oufhKCE",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "f827476d-deb6-44ee-b94b-07be2bd01ce8"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "777a99e2-c114-4b72-9d97-3a31845e8c57"
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

Left panel is the pendulum swinging in real space; right panel traces $\theta_2$ vs $\omega_2$ (mass 2's angle vs its angular velocity) — this is the actual phase space plot. Chaos shows up as a trajectory that never closes on itself, unlike a simple pendulum's clean ellipse. Drag the initial angle sliders and hit reset to see how sensitively the phase portrait depends on starting conditions — that sensitivity *is* the signature of chaos.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f6dd8-d580-705a-b545-e87bd41f235f",
  "updated_at": "2026-07-17T02:13:12.648592Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f6dd8-d580-7b63-b850-ec5413c3254c"
}
```

</details>
