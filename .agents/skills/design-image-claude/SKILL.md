---
name: design-image-claude
description: >
  Generate an image styled to the Claude design system in references/DESIGN-claude.md.
  Use when the user runs /design-image-claude, asks for a Claude-style / Anthropic-cream UI mock,
  marketing-surface mockup, or image "in Claude brand". If the host has no image-gen tool,
  output a copy-paste prompt for an external image model instead.
---

# design-image-claude

## 1. Load design

Read `references/DESIGN-claude.md` in this skill folder. Treat it as the **single source of truth** for colors, type, surfaces, components, and do/don'ts. Do not invent brand tokens.

## 2. Subject

Take the subject from the user argument (scene, UI, hero, card, mockup, etc.). If missing, ask one short clarifying question — what to depict — then stop.

## 3. Build prompt

Compose one self-contained image prompt that:

- Names the subject and layout
- Locks brand: warm cream canvas `#faf9f5`, coral CTAs `#cc785c`, warm ink `#141413`, dark navy product surfaces `#181715` when product chrome is shown
- Type voice: slab-serif display (Copernicus / Tiempos / Garamond substitute) + humanist sans body; no cool blue/slate AI-SaaS look
- Follows DESIGN do/don'ts (cream not pure white; coral scarce; no bold serif display; cream↔dark pacing)
- States aspect ratio / framing if the user gave one; else default `16:9` product/marketing mock
- **Text legibility (when labels appear):** large, high-contrast warm-ink (`#141413`) on cream; math/symbols crisp at slide size. Prefer short captions; avoid hairline/tiny type.

Keep the prompt tight (roughly 80–200 words). Prefer concrete visual facts over brand essay.

### Text-only edit constraint (augment / re-edit)

When improving legibility on an existing figure:

- Touch **text only** — size, weight, contrast, sharpness. Do not restyle, move, or redraw non-text elements (beams, hardware, spray, colors, layout).
- **Do not change text positions** — same anchors, same side of each station; no regrouping into new stage bars or relocated callouts.
- Same wording/structure unless the user asks to rewrite.

## 4. Generate or hand off

**If this host has an image generation tool** (e.g. `image_gen` / Imagine): call it with the composed prompt. In the response **always** include:

1. The saved image path (session-relative link when available)
2. The **full composed prompt** in a fenced `text` block (copy-ready for reuse or external models)

Never withhold the prompt — the user should not have to ask for it.

**If no image-gen tool is available**: do **not** claim an image was made. Output only a fenced, copy-ready block:

```text
[composed prompt]
```

Optional one-line note: which external tool to paste into (Midjourney / Flux / Ideogram / etc.) only if the user named one.

## Rules

- Never skip reading `references/DESIGN-claude.md`.
- Never ship cool-gray / pure-white / blue-accent "generic AI product" styling.
- Always return the composed prompt with the result (path + prompt when generating; prompt-only when handing off). Exception: if the user says not to include the prompt this turn, skip the prompt block only.
- **Labels presentation-legible** — large, high-contrast. If thin/tiny/blurry, re-edit once from the **original** (or last good base), text-only, positions fixed; never redesign the figure to “fix” type.
- One image intent per invocation unless the user asks for a set.
