# Checking skill descriptions for consistency

## Export metadata (verbatim)

```json
{
  "uuid": "8ae91a82-6cd2-4698-86de-bdd336d3ab1d",
  "name": "Checking skill descriptions for consistency",
  "summary": "**Conversation Overview**\n\nThe person asked Claude to review three custom skill descriptions they had recently revised and check them for consistency. The three skills in question were `/vocabulary-visualization`, `/feynman-technique`, and `/concept-visualizer`, each stored as `SKILL.md` files in a structured skill system. Claude read all three files and conducted a detailed cross-comparison across multiple dimensions: description accuracy relative to skill body content, trigger specificity and symmetry, inter-skill cross-references, domain terminology, and surface-level language consistency.\n\nClaude identified three substantive inconsistencies and two minor ones. The first major issue was that the `vocabulary-visualization` description undersells the skill's actual output — the description mentions only scatter plots and scenario comparisons, while the skill body explicitly mandates two visuals (a positional map and a metaphor illustration), with the Evolution Log noting this dual-visual requirement was added specifically to prevent regression. The second issue was asymmetric inter-skill cross-referencing: `concept-visualizer` explicitly references the other two skills, but neither `feynman-technique` nor `vocabulary-visualization` reciprocates, despite `feynman-technique`'s body directly invoking `concept-visualizer` at step 3. The third issue was asymmetric trigger specificity, where `vocabulary-visualization` requires explicit name invocation while the other two use broad semantic fallback triggers. Claude flagged this may be intentional to avoid false positives but recommended the person clarify whether it was a deliberate design choice. Minor inconsistencies included \"ML\" versus \"machine learning\" across skill domain lists and alternating use of \"concepts\" versus \"ideas\" within `concept-visualizer`. Claude concluded by offering to draft revised description strings for any of the identified issues.",
  "created_at": "2026-04-21T06:01:44.092653Z",
  "updated_at": "2026-04-21T06:03:21.864026Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-21T06:01:44.877907Z

I have just revised these 3 skill's description. Now you check the consistency of them for me.
/vocabulary-visualization 
/feynman-technique 
/concept-visualizer

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019daea1-582e-7ba1-bb8b-4c1a9b68b471",
  "updated_at": "2026-04-21T06:01:44.877907Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-21T06:03:21.864026Z

 

<details>
<summary>Thinking (verbatim)</summary>

 I'm looking at three skill descriptions to check if they're consistent with each other.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-21T06:01:47.416929Z",
  "stop_timestamp": "2026-04-21T06:01:48.009291Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01C48PUH8NhcSWu7GX8wDV67",
  "name": "view",
  "input": {
    "description": "Read vocabulary-visualization SKILL.md",
    "path": "/mnt/skills/user/vocabulary-visualization/SKILL.md"
  },
  "message": "Read vocabulary-visualization SKILL.md",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Read vocabulary-visualization SKILL.md"
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
  "tool_use_id": "toolu_01C48PUH8NhcSWu7GX8wDV67",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: vocabulary-visualization\n     3\tdescription: \"Visualize the semantic differences between near-synonym English words using interactive diagrams, scatter plots, and concrete scenario comparisons. Trigger this skill when the user explicitly references this skill by name. Works for verbs, nouns, adjectives, adverbs, and phrasal verbs. Do NOT use for single-word definition lookups, translation tasks, grammar correction, or writing tasks.\"\n     4\t---\n     5\t\n     6\t# Phase 0 — EVOLVE\n     7\t\n     8\tRead the subsequent <Evolution Log> carefully. Apply any accumulated lessons as additional constraints for this execution.\n     9\t\n    10\t## Evolution Log\n    11\t\n    12\t## #2026-03-23\n    13\t- Positional map alone is incomplete — must also produce a metaphor illustration showing what each word feels like\n    14\t- Skill must mandate two visuals (positional map + metaphor illustration) to prevent scatter-plot-only output\n    15\t- A shared metaphor object (derived from etymology when possible) is the anchor for the illustration\n    16\t\n    17\t# Vocabulary visualization\n    18\t\n    19\tMake semantic differences between near-synonyms visible and felt. Two complementary visuals required: a positional map (where each word sits) and a metaphor illustration (what each word feels like).\n    20\t\n    21\t## Analysis workflow\n    22\t\n    23\t### 1. Identify distinguishing axes\n    24\t\n    25\tFind dimensions that create the most spread for this cluster.\n    26\t\n    27\tCandidates: depth/completeness, energy/agency, resolution, formality, emotional temperature, scope, certainty of outcome, duration. Use 1–3 axes — let the words dictate.\n    28\t\n    29\t### 2. Extract etymology\n    30\t\n    31\tRoot language + original meaning, compactly: \"L. solvere 'to loosen'\". Grounds why the word feels the way it does. Omit when uncertain. Well-established roots only (Latin, OE, OF, Greek).\n    32\t\n    33\t### 3. Compose concrete scenarios\n    34\t\n    35\tOne vivid scenario per word (2–4 sentences) where only that word is the natural choice. Must make the reader think \"yes, that's exactly when I'd say this.\"\n    36\t\n    37\t### 4. Assign a compact gist\n    38\t\n    39\t2–4 word gist per word: \"Endure, adapt\" or \"Fully eliminate.\"\n    40\t\n    41\t### 5. Find the shared metaphor\n    42\t\n    43\tIdentify one concrete object or situation that all the words can relate to differently. The metaphor should emerge from the cluster's semantics — ideally from an etymology (e.g., solvere = \"untie\" → a knot). Each word becomes a distinct posture/relationship to that object.\n    44\t\n    45\tTest: can you draw N figures each doing something visibly different with the same object? If yes, the metaphor works.\n    46\t\n    47\t### 6. Build both visuals\n    48\t\n    49\tAlways produce two `show_widget` calls with prose between them. Call `visualize:read_me` before the first.\n    50\t\n    51\t**Visual 1 — Positional map.** Shows *where* each word sits on the semantic axes.\n    52\t\n    53\tFormat by word count and axis count:\n    54\t- 2–3 words, 1–2 axes → Side-by-side panels with gradient spectrum\n    55\t- 3–6 words, 2 axes → Interactive 2D scatter (clickable dots, click reveals scenario)\n    56\t- 3–6 words, 3 axes → Interactive 3D scatter via Three.js (fall back to 2D if 3rd axis adds negligible separation)\n    57\t- 6+ words → Grouped card layout by primary dimension\n    58\t\n    59\t**Visual 2 — Metaphor illustration.** Shows *what* each word feels like via the shared metaphor from step 5.\n    60\t\n    61\tDraw the same object N times (once per word). Each scene shows a stick figure (or equivalent agent) relating to the object differently — the posture embodies the word's meaning. Scenes are side-by-side in one SVG, separated by subtle dividers. Click a scene to reveal the etymological story.\n    62\t\n    63\tKey rules:\n    64\t- The metaphor object must be visually identical across scenes; only the figure's relationship to it changes.\n    65\t- Resolution axis runs left-to-right (least resolved → most resolved).\n    66\t- Stick figures, not icons. Simple shapes. The drawing communicates through posture and spatial relationship, not detail.\n    67\t\n    68\t### Design principles\n    69\t\n    70\t- Distinct muted color per word; theme-aware for dark mode.\n    71\t- Etymology as small italic text beside each label.\n    72\t- Click to reveal scenario — don't dump all at once.\n    73\t- Visualizations should be self-contained: core distinction readable without prose.\n    74\t\n    75\t### Prose after the visuals\n    76\t\n    77\tNot a restatement — add connections and traps:\n    78\t- 1–2 key relationships (\"You can address and fail to solve, but can't solve without addressing.\")\n    79\t- Common confusion pairs and why they trip people up.\n    80\t- Register restrictions (\"You wouldn't tackle a bereavement — wrong energy.\")\n    81\t\n    82\t## Constraints\n    83\t\n    84\t- Etymologies must be accurate.\n    85\t- Scenarios must feel natural to a native speaker.\n    86\t- Use the Visualizer tool (show_widget), not artifacts.",
      "uuid": "b531b62b-e2c0-427e-b4ff-6ffb179244bc"
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
  "start_timestamp": "2026-04-21T06:01:55.461252Z",
  "stop_timestamp": "2026-04-21T06:01:55.771617Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_014KSBbfHwZHUf3ffteiMzp6",
  "name": "view",
  "input": {
    "description": "Read feynman-technique SKILL.md",
    "path": "/mnt/skills/user/feynman-technique/SKILL.md"
  },
  "message": "Read feynman-technique SKILL.md",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Read feynman-technique SKILL.md"
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
  "tool_use_id": "toolu_014KSBbfHwZHUf3ffteiMzp6",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: feynman-technique\n     3\tdescription: \"Explain concepts using the Feynman Technique, treating the user as a 12-year-old non-native English speaker. Use this skill whenever the user says \\\"Feynman\\\", \\\"explain like I'm 12\\\", \\\"ELI12\\\", \\\"simple explanation\\\", \\\"teach me like a kid\\\", \\\"feynman-style\\\", \\\"explain it simply\\\", or any phrasing that requests a beginner-friendly, jargon-free breakdown of a concept. Works for any subject — physics, math, CS, machine learning, or everyday topics. Do NOT use for tasks like writing code, generating files, or editing documents.\"\n     4\t---\n     5\t\n     6\t# Feynman Technique Explainer\n     7\t\n     8\tExplain concepts to a smart, curious 12-year-old who speaks English as a second language. The goal is real understanding, not simplified words.\n     9\t\n    10\t## Explanation flow\n    11\t\n    12\tFor every explanation, follow these six steps in order:\n    13\t\n    14\t1. **Name it plainly.** One sentence saying what the thing *is* or *does*. No jargon yet.\n    15\t2. **One analogy.** Map the concept onto something physical and universal (a ball, water, cooking, a video game). Pick the best analogy and commit — don't list alternatives. If it breaks down somewhere, say so.\n    16\t3. **Show it.** Use the `concept-visualizer` skill to render the analogy as an inline visual. Pass the analogy object you chose in step 2 so the picture and the prose share the same metaphor. The visual appears here — between the analogy introduction and the detailed walkthrough — so the learner sees the whole shape before the parts. If the concept is too simple for a multi-panel visual (e.g., a single definition), skip this step.\n    17\t4. **Step-by-step logic.** Connect the analogy back to the real concept. One idea per sentence. Introduce technical terms gently inline: *\"Scientists call this 'entropy' — it just means things naturally get messier over time.\"*\n    18\t5. **Flag the tricky part.** Call out the common misconception or surprise directly: *\"Here's what tricks most people: ...\"*\n    19\t6. **Ask them to explain it back.** Low-pressure, not a test. E.g.: *\"If your friend asked you what [concept] is, what would you say?\"* If their answer has gaps, re-explain only that part. After the explain-back, list any blind spots revealed — things the user missed, got wrong, or was uncertain about — as a concise bullet list under a **Blind spots** heading.\n    20\t\n    21\tNever skip step 6 — it's the core of the technique.\n    22\t\n    23\t## Language rules\n    24\t\n    25\t- No idioms or slang (\"piece of cake\", \"ball is in your court\").\n    26\t- Expand acronyms on first use: \"CPU (the 'brain' of a computer)\".\n    27\t- Address the reader as \"you\" / \"we\".\n    28\t- Describe math in words first.\n    29\t- Don't open with a formal definition or Wikipedia-style paragraph.\n    30\t\n    31\t## Tone\n    32\t\n    33\tWarm and a little playful — like a favorite teacher. Never condescending: the *topic* is hard, not the person.\n    34\t\n    35\t## Follow-ups\n    36\t\n    37\tExtend the existing analogy if possible. Otherwise build a new small one. Always end with a gentle check: *\"Does that make sense?\"*\n    38\t\n    39\t## Broad topics\n    40\t\n    41\tBreak into small pieces. Teach one, check understanding, then move to the next. Stairs, not elevators.",
      "uuid": "f5c6b64b-e5cb-415a-a476-a47204be9d3c"
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
  "start_timestamp": "2026-04-21T06:01:58.177599Z",
  "stop_timestamp": "2026-04-21T06:01:58.331549Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01T3TTXLvCymxCH543ArUGrn",
  "name": "view",
  "input": {
    "description": "Read concept-visualizer SKILL.md",
    "path": "/mnt/skills/user/concept-visualizer/SKILL.md"
  },
  "message": "Read concept-visualizer SKILL.md",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Read concept-visualizer SKILL.md"
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
  "tool_use_id": "toolu_01T3TTXLvCymxCH543ArUGrn",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: concept-visualizer\n     3\tdescription: \"Generate inline visual metaphor illustrations for general concepts using the Visualizer (show_widget). Turns abstract ideas into concrete, memorable SVG scenes — stick figures interacting with everyday objects to embody how a concept works. Use this skill whenever a user asks to 'visualize a concept', 'draw me a diagram of how X works', 'illustrate this idea', 'show me visually', 'make a visual explanation'. Also trigger when another skill (e.g., Feynman-Technique) needs a visual aid for a concept it is explaining. Works for any domain: physics, math, CS, biology, economics, philosophy, ML, engineering, or everyday ideas. Do NOT use for data charts, UI mockups, word comparisons (use vocabulary-visualization instead), or file-based deliverables.\"\n     4\t---\n     5\t\n     6\t# Concept Visualizer\n     7\t\n     8\tTurn abstract concepts into concrete, memorable visual metaphors rendered inline via the Visualizer.\n     9\t\n    10\t## Core principle\n    11\t\n    12\tEvery concept has a **mechanism** — something it *does*. The job is to find an everyday object or situation that does the same thing visibly, then draw that.\n    13\t\n    14\t## Workflow\n    15\t\n    16\t### 1. Extract the mechanism\n    17\t\n    18\tAsk: *what does this concept actually do?* Strip away domain jargon and find the verb.\n    19\t\n    20\t| Concept | Mechanism |\n    21\t|---|---|\n    22\t| Entropy | Things spread out / get disordered over time |\n    23\t| Gradient descent | Feel which way is downhill, step that way, repeat |\n    24\t| Nuclear fission | One split triggers more splits (chain reaction) |\n    25\t| Recursion | Do the same task on a smaller version of itself |\n    26\t| Natural selection | Variants compete; survivors pass traits forward |\n    27\t| Opportunity cost | Choosing one path locks out another |\n    28\t\n    29\tOne sentence. If you can't state the mechanism simply, break the concept into sub-concepts and visualize each.\n    30\t\n    31\t### 2. Find the metaphor object\n    32\t\n    33\tPick ONE concrete, universally familiar object or situation whose behavior mirrors the mechanism. The metaphor must be:\n    34\t\n    35\t- **Physical and visible** — something you can draw (not another abstraction)\n    36\t- **Universally known** — no culture/domain-specific objects\n    37\t- **Structurally honest** — the metaphor's behavior genuinely parallels the concept, not just superficially\n    38\t\n    39\tGood sources: water, balls, stairs, rooms, doors, ropes/knots, trees, paths/forks, dominoes, containers, springs, seesaws, conveyor belts, pulleys, mirrors, sandcastles, crowds of people.\n    40\t\n    41\t**Honesty check**: where does the metaphor break down? Note this internally — you'll flag it in the prose after the visual.\n    42\t\n    43\t### 3. Decompose into 2–5 panels\n    44\t\n    45\tBreak the concept into sequential stages or contrasting states. Each panel = one moment/aspect.\n    46\t\n    47\tPanel types:\n    48\t- **Sequential** (A → B → C): for processes, transformations, chains of cause-and-effect\n    49\t- **Contrast** (A vs B): for comparisons, with/without, before/after\n    50\t- **Zoom** (whole → part → detail): for hierarchical or nested concepts\n    51\t\n    52\tEach panel gets:\n    53\t- A **scene**: the metaphor object + a stick figure in a specific posture/action\n    54\t- A **label**: 2–5 words naming the stage (e.g., \"Energy spreads out\")\n    55\t- A **reveal caption**: 1–2 sentences mapping the scene back to the real concept (shown on click)\n    56\t\n    57\t### 4. Render via Visualizer\n    58\t\n    59\tCall `visualize:read_me` with module `[\"diagram\"]` before the first `show_widget` call.\n    60\t\n    61\t**SVG structure:**\n    62\t\n    63\t- Panels arranged **left-to-right** in a single SVG, separated by subtle vertical dividers\n    64\t- Consistent canvas: each panel is a square cell within a wide strip\n    65\t- The metaphor object is **visually identical** across panels — only the figure's relationship to it changes\n    66\t- Stick figures communicate through **posture and spatial relationship**, not detail\n    67\t- Distinct muted color per panel stage; CSS-variable-aware for dark mode\n    68\t- Arrow or flow indicator between sequential panels\n    69\t- Click a panel → reveal caption fades in below the scene\n    70\t\n    71\t**Visual rules:**\n    72\t\n    73\t- Stick figures, not icons. Simple geometric shapes. No clip-art.\n    74\t- Maximum 5 panels — if the concept needs more, split into multiple visualizations\n    75\t- Labels use a clean sans-serif; captions in italic\n    76\t- No decorative elements that don't carry meaning\n    77\t- Consistent ground line across panels for visual continuity\n    78\t- Panel width: at least 140px each; total SVG viewBox width ≤ 800\n    79\t\n    80\t**Interactivity:**\n    81\t\n    82\t- Click/tap a panel to toggle its reveal caption\n    83\t- Subtle hover highlight on panels (opacity shift)\n    84\t- Active panel gets a gentle border highlight\n    85\t\n    86\t### 5. Prose after the visual\n    87\t\n    88\tDo NOT restate what the visual shows. Instead:\n    89\t\n    90\t- **Map it back**: one sentence explicitly connecting the metaphor to the real concept (\"The messy room is entropy — energy states spreading into less organized configurations.\")\n    91\t- **Flag the break**: where the metaphor stops working (\"Unlike a real room, entropy in physics is about *probability* of microstates, not just messiness.\")\n    92\t- **Extend an invitation**: a question or nudge to go deeper (\"Want to see why some processes *reverse* entropy? That's where it gets interesting.\")\n    93\t\n    94\t## Integration with other skills\n    95\t\n    96\tThis skill is designed to be called by other skills. When invoked from another skill's context:\n    97\t\n    98\t- Accept the concept and any analogy already established by the calling skill\n    99\t- If the calling skill (e.g., Feynman-Technique) has already chosen an analogy, **use that analogy** as the metaphor object — don't invent a competing one\n   100\t- If no analogy is provided, select one using step 2 above\n   101\t- Return the visual inline; the calling skill handles surrounding prose\n   102\t\n   103\t## Constraints\n   104\t\n   105\t- Metaphors must be structurally honest — don't force a visual that misrepresents the concept\n   106\t- All text in the SVG must be readable at default zoom (≥12px effective)\n   107\t- Use the Visualizer tool (`show_widget`), not file artifacts\n   108\t- One concept per visualization; compound concepts get multiple visuals",
      "uuid": "c9c7e129-14bf-4706-923d-a7437ff5779d"
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

 I'm checking the revised descriptions for consistency across the three skills. Looking at the vocabulary-visualization entry, I notice the description got cut off mid-sentence—it ends abruptly after mentioning it works for verbs, nouns, adjectives, adverbs, and phrases. I'm checking how consistent these skill definitions are across different dimensions. Looking at the structure, each one follows a similar pattern: what it does, when to trigger it, what domains it covers, and what it explicitly shouldn't be used for. That's holding up well.

Now examining the trigger specifications more closely — vocabulary-visualization has a very narrow trigger (only explicit name references), while the other two have much broader activation criteria with multiple keyword variations and contextual cues.

This inconsistency might be intentional, but it stands out because vocabulary-visualization's actual functionality clearly handles semantic comparison tasks that could reasonably be triggered by broader language patterns, similar to how the other skills work.

Looking at the cross-references, concept-visualizer explicitly mentions using vocabulary-visualization and calls out when to use it, while feynman-technique's documented steps reference concept-visualizer but the trigger rules don't acknowledge this dependency — there's a gap between what the skill description says it does and what the trigger rules actually capture. but the actual skill body mandates a metaphor illustration alongside the positional map, so the description is incomplete—it's missing that required visual component. This is a significant gap between what the description claims and what the skill actually delivers. concept-visualizer is the only one that explicitly redirects users to another skill, while feynman-technique's negative scope doesn't cross-reference alternatives even though it could. There's also potential trigger overlap—a user asking to "explain photosynthesis simply" might use feynman-technique, while "visualize photosynthesis" points to concept-visualizer, and feynman-technique's step 3 actually calls concept-visualizer internally.

For requests like "explain handle vs tackle vs solve simply," vocabulary-visualization's requirement to be explicitly named creates natural disambiguation, defaulting to feynman-technique unless the user specifically asks for vocabulary work. This actually works as intended—the skills compose well together without conflicting.

But I'm noticing some inconsistencies: vocabulary-visualization has a stricter trigger pattern than the others, which might be deliberate to avoid false positives, though it feels stylistically mismatched. More importantly, the skill's description undersells what it actually delivers—it claims "scatter plots and scenario comparisons" but the implementation requires two visuals including a metaphor illustration, which the description doesn't mention. And concept-visualizer references the other skills but those references aren't reciprocated, creating an asymmetry in how they acknowledge each other.

Looking at the domain lists, there's also a minor inconsistency where feynman-technique says "machine learning" while concept-visualizer abbreviates it as "ML"—same thing, different notation. The terminology around what counts as a "concept" also seems to vary across the skills.

Now I'm thinking about what matters most here. The user is a physics grad student building skill ecosystems and explicitly wants consistency checked, so I should present factual observations with clear evidence, then separate what I can directly quote from what requires inference. I'll structure this as observations with supporting details, maybe using a light table or list to make the inconsistencies concrete, keeping it prose-forward since that's clearer for a consistency audit. I need to clarify the scope—the user mentioned revising the description fields specifically, so I'll prioritize consistency between those YAML front matter sections, but also check whether each description aligns with its skill's actual content. I'll structure my response with direct quotes from the files and line references, clearly separating objective inconsistencies from potential design choices, and since the request is already clear, I can move forward without asking for clarification.

</details>

I read all three descriptions and cross-checked them against each skill's body. Summary first, then evidence.

## Verdict

Structurally consistent (all four share the same four-part shape: what-it-does → triggers → scope → negative scope), but there are **three substantive inconsistencies** worth addressing, plus two minor ones.

---

## Fact-level comparison

| Dimension | vocabulary-visualization | feynman-technique | concept-visualizer |
|---|---|---|---|
| Trigger style | "explicitly references this skill by name" only | explicit phrases + any semantic paraphrase | explicit phrases + inter-skill invocation |
| Cross-references other skills? | No | No (but body calls concept-visualizer at step 3) | Yes — names both Feynman-Technique and vocabulary-visualization |
| Domain list | "verbs, nouns, adjectives, adverbs, phrasal verbs" | "physics, math, CS, machine learning, or everyday topics" | "physics, math, CS, biology, economics, philosophy, ML, engineering, or everyday ideas" |
| Negative scope | ✓ | ✓ | ✓ (only one that redirects) |

---

## Inconsistency 1 — vocabulary-visualization's description under-represents the skill

**Fact.** The description (line 3) says the skill produces "interactive diagrams, scatter plots, and concrete scenario comparisons."

**Fact.** The skill body mandates *two* visuals. From the Evolution Log (lines 13–15):

> "Positional map alone is incomplete — must also produce a metaphor illustration showing what each word feels like"
> "Skill must mandate two visuals (positional map + metaphor illustration) to prevent scatter-plot-only output"

And line 19 (body):

> "Two complementary visuals required: a positional map (where each word sits) and a metaphor illustration (what each word feels like)."

**Assessment (inference):** The description lists only the positional-map side ("scatter plots…"). The metaphor-illustration requirement — which the Evolution Log explicitly added to prevent regression to scatter-plot-only output — is missing from the description. A future reader of just the description would not know to expect the second visual.

---

## Inconsistency 2 — asymmetric inter-skill cross-references

**Fact.** concept-visualizer's description cross-references both other skills:
- "Also trigger when another skill (e.g., Feynman-Technique) needs a visual aid"
- "word comparisons (use vocabulary-visualization instead)"

**Fact.** feynman-technique's description makes no mention of concept-visualizer, yet its body (step 3, line 16) explicitly requires it:

> "Use the `concept-visualizer` skill to render the analogy as an inline visual."

**Fact.** vocabulary-visualization's description mentions neither of the other two.

**Assessment (inference):** concept-visualizer is aware of the other two; the other two are not symmetrically aware of it (at the description level). This is a one-directional graph. Whether that matters depends on whether you want inter-skill relationships discoverable from descriptions alone, or only from bodies. If description-level discoverability matters (it does for skill routing), feynman-technique's description should acknowledge the composition with concept-visualizer.

---

## Inconsistency 3 — trigger specificity is asymmetric

**Fact.** The three trigger policies are:

- vocabulary-visualization: *"Trigger this skill when the user explicitly references this skill by name."* (narrowest)
- feynman-technique: lists 7 explicit phrases + *"or any phrasing that requests a beginner-friendly, jargon-free breakdown of a concept"* (broad semantic fallback)
- concept-visualizer: lists 5 explicit phrases + inter-skill fallback (broad)

**Assessment (inference):** The asymmetry may be intentional — near-synonym comparison overlaps heavily with normal "what's the difference between X and Y" questions, so requiring an explicit name prevents false positives. If that's the intent, the pattern is fine but I'd flag it as a deliberate exception rather than an oversight. If it wasn't intentional, vocabulary-visualization is under-triggered relative to the other two.

---

## Minor points

**Minor A — "ML" vs "machine learning".** concept-visualizer (line 3) lists "ML" while feynman-technique (line 3) lists "machine learning". Same referent, different surface form. Trivial, but easy to normalize.

**Minor B — "concepts" vs "ideas".** concept-visualizer alternates within its own description: "general concepts" and "everyday ideas". feynman-technique uses only "concept". Cosmetic.

---

## Suggested fixes (not applied — flagging only)

1. **vocabulary-visualization description:** add "and a shared-metaphor illustration" so both mandated visuals are represented.
2. **feynman-technique description:** add a clause acknowledging composition with concept-visualizer, e.g., *"Calls the concept-visualizer skill to render the chosen analogy as an inline visual."*
3. **Trigger policy:** decide whether vocabulary-visualization's "explicit name only" rule is intentional. If yes, keep it; if no, add semantic triggers symmetrical to the other two (e.g., "difference between near-synonyms", "compare these words", "synonym cluster").
4. Normalize "ML" → "machine learning" in one of the two for minor surface consistency.

Want me to draft revised description strings for any of these?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019daea1-582e-7071-89cf-dd3b6cb33172",
  "updated_at": "2026-04-21T06:03:21.864026Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019daea1-582e-7ba1-bb8b-4c1a9b68b471"
}
```

</details>
