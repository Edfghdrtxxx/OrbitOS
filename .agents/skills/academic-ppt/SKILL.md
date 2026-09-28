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
- PPT-only edits: surgical follow-up or ask which file wins.
- Two versions only: `<Deck>.pptx` = current work station; one sibling = last version = what was delivered at the last handoff. Each pass: first diff current vs last (= the user's edits; `scripts/deckdiff.py <last> <current>`), edit current, then at handoff copy current over last. Review renders are wiped when the pass ends.
- **User requests.** The user's words are the acceptance test.
  - At the start of a pass, list every request: chat instructions; comments and note boxes (`deckdiff.py` lists both); edits the user started but didn't finish (e.g. 2 of 4 labels); items still open from earlier passes. A screenshot sent with an instruction marks where it applies first.
  - Sweep a deck-wide instruction across every slide, text and pictures, and check every part of it.
  - A comment on something already on the slide means it isn't enough: add what's missing rather than restating it. An answer given in chat goes on the slide too.
  - Before building, show each item with its planned fix in one line. Ask where more than one fix would work. Build after the user's go.
  - Answer each note or comment inline: edit the note itself and add a reply under the user's words; the slide fix goes in too. Keep the note until the user confirms.
  - Before handoff, check each item against the rendered slides and give the list to every reviewer. Report item → slide → what it now shows, marking anything not done. Unconfirmed items carry into the next pass.
- Handoff gate: before every implementation, check the target `.pptx` for changes since the last handoff (timestamp, slide pixels, and shape structure). If it changed, treat the current `.pptx` as ground truth and reconcile its confirmed edits into the script SoT or use a surgical PPTX edit before any rebuild; never run a stale builder over it. Never write while `~$<Deck>.pptx` exists; ask the user to close the deck (rendering reads the saved file and may run).
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

Fan **in parallel** against **slide pixels** (not scripts alone). Render: `scripts/export_deck.sh <deck> 99_System/.scratch/<deck>-review/` (headless LibreOffice, as in Anthropic's pptx skill; no PowerPoint window or prompt). It approximates PowerPoint; the user's pass in PowerPoint is the fidelity check.

| Role | Prefer | Looks at | Out |
|---|---|---|---|
| Layout | Gemini | spacing, density, gloss fit, collisions, hierarchy | opinions + severity (block / should / nit) |
| Phrasing | SWE-2 | English, gloss clarity, hype, audience | same; optional replacement lines |

Opinions stay advisory until Main synthesizes (+ user OK when HITL requires). Scope to **changed slides** when the pass is narrow. Roles matter more than exact agent IDs. Verify every reviewer claim (numbers, "missing", "inconsistent") against deck and source before adopting it; reviewers misnumber and miss things.

## Precision review (last step of every pass)

An adversarial, slide-by-slide audit of every statement (slide text, LaTeX bodies, figures, captions, notes) against the source. Verdicts: WRONG / UNSUPPORTED / IMPRECISE / INCONSISTENT / OK-BEYOND-SOURCE, each with evidence and a fix. The reviewer sees slide pixels; any capable model. Default: a subagent. **Prompt mode** (user's choice): fill `references/precision-review-prompt.md` into `99_System/.scratch/<deck>-precision-review/` with `slides/` (`scripts/export_deck.sh`) and `statements.md` (`scripts/dump_statements.py`), and give the user only the prompt path. Verify the report's claims, fold them in, then wipe the folder.

## Hard rules

- **Never invent data.** Every number, data point, and curve on a slide, chart, figure, or aside traces to the source. No source, no number: cut it or ask. A qualitative-only source gets a native, editable schematic captioned "Schematic" that shows no number the source lacks.
- Human on critical path; explain don’t impress; minimal on-slide text.
- Formulas: **in-eq** boxes + label→arrow callouts; when tooltips are not enough, a short **concept aside** beside the eq (see `references/latex-eq.md`). No detached under-eq legend grids unless asked.
- **Phrasing:** before asides/on-slide prose, read `30_Research/Humanize/Registers.md`. Discuss → user audit → record **gold only** in that file (`30_Research/Humanize/README.md` = workflow). No style-guide fork here; no “— not X” tails. Disputed wording: research attested field usage (subagent) before recording.
- Source-backed claims; fence neighbors when the material has them.
- Nuclear physics: wherever a reaction, kinematic formula, or spectrum appears, name the projectile, target, ejectile(s), and residue (e.g. ⁵⁸Fe + ²⁰⁸Pb → ²⁶⁵Hs + n); a symbol like A_t arrives with its reaction, not only as a gloss.
- Generated images: picture only (ask the image model for no text); labels and numbers are PowerPoint text boxes grouped with the image; no title inside the image. The image skill's colours are fine if they sit well with the deck; a colour that means something in the deck keeps that meaning.
- LaTeX PNGs: place at 1:1 (`meta.json` `wIn`); resize by the spec's `pt`/width and re-render, never by scaling the picture (baked-in labels shrink and blur). White glyphs: black-on-white + alpha tint.
- No project-wide lint; rebuild + spot-check only.

## Orchestration

`draft → human → implement → visual review (layout ∥ phrasing) → synthesize → fix → precision review → hand off`. Main owns profile, SoT (script vs pptx), and which opinions become edits.
