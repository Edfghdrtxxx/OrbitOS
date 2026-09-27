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

- User ideas are proposals: check them against the source, challenge overstatement, and teach the physics behind a fix.
- User-edited `.pptx` = ground truth that pass; **no** silent full rebuild without OK.
- Script SoT: port intent into `build_*.js` / `render_eq.py`, confirm, rebuild.
- PPT-only edits: surgical follow-up or ask which file wins; mechanics in `references/pptx-surgery.md`.
- Two versions only: `<Deck>.pptx` = current work station; one sibling = last version = what was delivered at the last handoff. Each pass: first diff current vs last (= the user's edits; `scripts/deckdiff.py <last> <current>`), edit current, then at handoff copy current over last. Review renders export the real deck (no copies) and are wiped when the pass ends.
- Handoff gate: before every implementation, check the target `.pptx` for changes since the last handoff (timestamp, slide pixels, and shape structure). If it changed, treat the current `.pptx` as ground truth and reconcile its confirmed edits into the script SoT or use a surgical PPTX edit before any rebuild; never run a stale builder over it. Never write or export while `~$<Deck>.pptx` exists; ask the user to close the deck.
- Style-audit gate: before refining an isolated slide or pair, render and scan the whole deck to identify its established visual grammar (backgrounds, headers, transitions, and density); derive local edits from that system. New blocks copy an existing block's parameters (fill, radius, shadow); no unshaded card beside shaded ones. An empty or unbalanced slide gets a whole-slide re-layout from an existing deck archetype (e.g. figure left + cards right), not a patch on one block; no element repeats another.
- Sequence-consistency gate: compare adjacent slides in the same conceptual sequence for repeated card, chip, caption, and footer treatments. If a difference is not content-driven, normalize it before the content pass.
- Content-audit gate: before deep content refinement, read the full deck and its source, then map each slide’s claim, evidence, and transition. Do not infer the deck’s content logic from the slide currently being edited.
- Stakes-first gate: the audience feels the problem before any method appears. Before locking the outline, set the stakes (one concrete number or scene), then state the question the title raises at first glance and make outline item 1 answer it; discuss wording before editing. Then run a consolidation check: merge questions that share one answer thread; treat a one-slide section as a merge candidate; fewer sections wins. The stakes page fills the talk's Background slot. Method: `references/principles.md` (Winston).
- Question-chain outline: outline items = the audience's own questions in the order they would ask them, each raised by the previous answer (link by "but"/"therefore", never "and then"). Voice the obvious objection ourselves before the audience does. Content-slide titles stay full-sentence answers. Sources: `references/principles.md`.
- Page-level loop: after each implement, tell the user to open the editable `.pptx`; they may describe or screenshot changes, and the current page is refined to confirmation before moving on.
- Meta-propulsion: when the user identifies friction in the loop, iterate the iteration process itself and record only confirmed workflow improvements here.

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

1. Source → 2. Scaffold `70_Presentations/<NNN>_…/` → 3. First build (16:9, sentence titles, Contributions last) → 4. **Human pass** → 5. Continue from GT → 6. Font/math (TNR + LaTeX-PNG; **every formula gets term glosses** — `references/latex-eq.md`) → 7. Implement (rebuild only if OK) → 8. **Dual visual review** → 9. Synthesize opinions (human may veto) → 10. **Precision review** → 11. Hand off.

## Dual visual review (after every deck-updating implement)

Fan **in parallel** against **slide pixels** (not scripts alone). Render: `scripts/export_deck.sh <deck> <out>` into a folder PowerPoint was already granted (`99_System/.scratch/vf-visual-review/`); a new folder triggers a blocking access prompt.

| Role | Prefer | Looks at | Out |
|---|---|---|---|
| Layout | Gemini | spacing, density, gloss fit, collisions, hierarchy | opinions + severity (block / should / nit) |
| Phrasing | SWE-2 | English, gloss clarity, hype, audience | same; optional replacement lines |

Opinions stay advisory until Main synthesizes (+ user OK when HITL requires). Scope to **changed slides** when the pass is narrow. Roles matter more than exact agent IDs. Verify every reviewer claim (numbers, "missing", "inconsistent") against deck and source before adopting it; reviewers misnumber and miss things.

## Precision review (last step of every pass)

An adversarial, slide-by-slide audit of every statement (slide text, LaTeX bodies, figures, captions, notes) against the source. Verdicts: WRONG / UNSUPPORTED / IMPRECISE / INCONSISTENT / OK-BEYOND-SOURCE, each with evidence and a fix. The reviewer sees slide pixels; any capable model. Default: a subagent. **Prompt mode** (user's choice): fill `references/precision-review-prompt.md` into `99_System/.scratch/<deck>-precision-review/` with `slides/` (`scripts/export_deck.sh`) and `statements.md` (`scripts/dump_statements.py`), and give the user only the prompt path. Verify the report's claims, fold them in, then wipe the folder.

## Hard rules

- Human on critical path; explain don’t impress; minimal on-slide text.
- Formulas: **in-eq** boxes + label→arrow callouts; when tooltips are not enough, a short **concept aside** beside the eq (see `references/latex-eq.md`). No detached under-eq legend grids unless asked.
- **Phrasing:** before asides/on-slide prose, read `30_Research/Humanize/Registers.md`. Discuss → user audit → record **gold only** in that file (`30_Research/Humanize/README.md` = workflow). No style-guide fork here; no “— not X” tails. Disputed wording: research attested field usage (subagent) before recording.
- Source-backed claims; fence neighbors when the material has them. Qualitative-only source → native, editable schematic captioned "Schematic"; never invent data.
- Generated images: no text or numbers inside (numbers go on the slide as text); the deck palette overrides an image skill's brand.
- Notes: every new visual element gets one spoken line; outline notes say "n of N"; the slogan recurs verbatim.
- LaTeX-PNG white glyphs: black-on-white + alpha tint.
- No project-wide lint; rebuild + spot-check only.

## Orchestration

`draft → human → implement → visual review (layout ∥ phrasing) → synthesize → fix → precision review → hand off`. Main owns profile, SoT (script vs pptx), and which opinions become edits.
