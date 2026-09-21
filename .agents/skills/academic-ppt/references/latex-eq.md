# LaTeX → PNG for pptxgenjs

**Default for math-heavy decks; skip when no on-slide math or user opts out.**

| Piece | Path |
|---|---|
| Canonical engine | `.agents/skills/academic-ppt/scripts/render_eq.py` |
| Worked example (full SPECS) | `70_Presentations/717_Learning Group-20260916/render_eq.py` |

## Per-deck setup

```bash
cp ".agents/skills/academic-ppt/scripts/render_eq.py" "70_Presentations/<deck>/"
# Edit SPECS in the copy (or keep example and extend)
cd "70_Presentations/<deck>/"
python3 render_eq.py
node build_*.js   # pptxgenjs from 70_Presentations/node_modules
```

## Stack

- XeLaTeX + `fontspec` + `unicode-math`
- Body: Times New Roman · Math: `texgyretermes-math.otf`
- Raster: PyMuPDF @ 300 dpi → transparent PNG + `assets/eq/meta.json`

## Spec shape

```python
{"name": "eq_er", "pt": 26, "bold": True, "color": "0F2F5C",
 "body": r"$E_{r}=(A_{p}/A_{c})\,E_{p}$", "align": "center"}
```

- `bg: "black"` → **white glyphs**: black ink on white, MuPDF alpha, `tint_alpha(..., "FFFFFF")`. Never black pagecolor chroma (1px fringe).
- Dark ink: HTML color on white crop + alpha.

## Builder helpers

```js
const FONT = "Times New Roman";  // when using this pipeline
const EQ_META = require("./assets/eq/meta.json");
function addEq(slide, name, x, y, opts = {}) { /* scale/maxW/maxH/center */ }
```

Display equations = `addImage` via `addEq`. No Cambria / ASCII `E_r =` heroes **when** the LaTeX path is on.

## Formula explanations (required with formulas)

**Canonical form (two layers):**

1. **Term callouts (always for display eqs):** box the symbol **inside** the formula; plain label + leader/arrow **to that box** (e.g. “residue kinetic energy” ← boxed \(E_r\)). Not a detached under-eq legend grid.
2. **Concept aside (when a short tooltip is not enough):** short plain prose **beside** the equation answering the idea symbols alone miss. 1–3 tight sentences; no hype. **Wording SoT:** `30_Research/Humanize/Registers.md` (audit → gold only; no defensive “— not X” tails).

- One important symbol → one short gloss. Repeat callouts around the eq as space allows.
- Prefer TikZ/`tikzmark` for in-eq boxes; concept aside may be TikZ text, a small LaTeX minipage in the eq PNG, or pptxgenjs text in the accent card.
- First eq-heavy slide sets the pattern; later slides annotate **new** symbols the same way; add a concept aside only when the audience would still ask “what is this physically?”
- Do not leave bare \(E_r=(A_p/A_c)E_p\) with no in-eq callouts.

## What counts as math (when pipeline on)

Equations, subscripts, \(A/q\), powers, Greek, nuclides `\nuc{151}{Lu}`, units in formulas. Speaker notes may stay Unicode.
