---
name: academic-ppt
description: >-
  Academic .pptx end-to-end: draft → human edit/critique → implement → dual
  visual review (layout ∥ phrasing on real slides) → opinions → next pass.
  Trigger: /academic-ppt, Learning Group / 组会, or chapter/paper slides.
  Build early; no design-only gate. HTML decks out of scope unless named.
---

# academic-ppt — build, then iterate

Ship a readable `.pptx` early. **You** are a core iteration node. After each deck update, reviewers **see the slides** and return opinions only.

## HITL

```
draft .pptx → YOU open/edit/critique → implement → dual visual review → …
```

- User-edited `.pptx` = ground truth that pass; **no** silent full rebuild without OK.
- Script SoT: port intent into `build_*.js` / `render_eq.py`, confirm, rebuild.
- PPT-only edits: surgical follow-up or ask which file wins.

## Gold / profiles

| | |
|---|---|
| LG chrome | `70_Presentations/716_Learning Group-20260805/build_pf_pptx.js` |
| Math + TNR | `70_Presentations/717_Learning Group-20260916/` |
| Eq engine | `scripts/render_eq.py` → copy into deck |
| Phrasing registers | `30_Research/Humanize/Registers.md` (index: `30_Research/Humanize/README.md`) |
| Optional craft / design sheet | `references/principles.md`, `design-doc-template.md` |
| **LG** | `references/series.md` chrome |
| **Generic** | same stack; no LG badge/footer/logo unless asked |

## Flow

1. Source → 2. Scaffold `70_Presentations/<NNN>_…/` → 3. First build (16:9, sentence titles, Contributions last) → 4. **Human pass** → 5. Continue from GT → 6. Font/math (TNR + LaTeX-PNG; **every formula gets term glosses** — `references/latex-eq.md`) → 7. Implement (rebuild only if OK) → 8. **Dual visual review** → 9. Synthesize opinions (human may veto) → 10. Hand off.

## Dual visual review (after every deck-updating implement)

Fan **in parallel** against **slide pixels** (export/screenshot — not scripts alone):

| Role | Prefer | Looks at | Out |
|---|---|---|---|
| Layout | Gemini | spacing, density, gloss fit, collisions, hierarchy | opinions + severity (block / should / nit) |
| Phrasing | SWE-2 | English, gloss clarity, hype, audience | same; optional replacement lines |

Opinions stay advisory until Main synthesizes (+ user OK when HITL requires). Scope to **changed slides** when the pass is narrow. Roles matter more than exact agent IDs.

## Hard rules

- Human on critical path; explain don’t impress; minimal on-slide text.
- Formulas: **in-eq** boxes + label→arrow callouts; when tooltips are not enough, a short **concept aside** beside the eq (see `references/latex-eq.md`). No detached under-eq legend grids unless asked.
- **Phrasing:** before asides/on-slide prose, read `30_Research/Humanize/Registers.md`. Discuss → user audit → record **gold only** in that file (`30_Research/Humanize/README.md` = workflow). No style-guide fork here; no “— not X” tails.
- Source-backed claims; fence neighbors when the material has them.
- LaTeX-PNG white glyphs: black-on-white + alpha tint.
- No project-wide lint; rebuild + spot-check only.

## Orchestration

`draft → human → implement → visual review (Gemini ∥ SWE-2) → synthesize → fix`. Main owns profile, SoT (script vs pptx), and which opinions become edits.
