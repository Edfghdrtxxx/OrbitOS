# Precision review prompt — template

Fill the `<…>` slots, save as `99_System/.scratch/<deck>-precision-review/precision-review-prompt.md`, and give the user only that path. Inputs in the same folder: `slides/slide-NN.png` (`scripts/export_deck.sh <deck> <folder>/slides`, then delete its `deck.pdf`) and `statements.md` (from `scripts/dump_statements.py`). Wipe the folder once the report is folded in.

---

# Academic precision review — "<talk title>"

You are an adversarial academic precision reviewer with expertise in <field>. Audit every statement on every slide. Treat each statement as wrong until the source or established physics supports it. Do not praise and do not restyle; find what a specialist in the audience would object to.

## Inputs (absolute paths; read all of them)

1. **Slide images (primary):** `<folder>/slides/slide-01.png` … `slide-<NN>.png`. Look at every slide. Check figures, axes, labels, annotations, captions, colour encodings, and diagrams, not just the text.
2. **Statement dump:** `<folder>/statements.md`. Per slide: every text box, the LaTeX source of every rendered equation or card body, and the speaker notes. Images marked `[figure]` must be read from the slide image.
3. **Primary source:** `<source path>`. Sections: `<section → line ranges>`.
4. *(Optional)* **The deck:** `<deck path>`

## Context

- **Audience and length:** <audience>, <length>.
- **Structure:** <structure>
- Elements marked "Schematic" or "Illustration" are qualitative by design. Judge whether they are qualitatively honest, not whether their numbers are exact.

## User requests (acceptance tests)

<the pass's checklist: request in the user's words → slide>. Check that each one is met on the slide; report any that isn't.

## Check every element, including the speaker notes

- **Physics:** dependencies, directions and signs, limiting cases, and whether each formula matches the source (symbols, definitions, equation numbers).
- **Numbers and units:** trace every number to the source or flag it as unsupported. Check orders of magnitude, rounding and units.
- **Quantifiers and overclaims:** "cannot", "all", "never", "most", "unique", "zero": does the source justify the strength?
- **Attribution:** facility, reaction (projectile, target, ejectile, residue), isotope, figure numbers, dates.
- **Terminology:** standard usage in the field.
- **Figure–claim consistency:** do the visible figures, labels, captions and colours support the claims made about them?
- **Cross-slide consistency:** the same quantity stated differently; notes that contradict slide text; outline questions that don't match their content.
- **Precision of wording:** loose or misleading phrasing a specialist would challenge.
- **Beyond the source:** where the source is silent you may use established knowledge, but label those findings "beyond source" and give a reference if you can.

## Output

Write the report to `<folder>/report.md`. If you cannot write files, return it in chat. Do not modify any other file.

For each slide with findings: `| # | Element (quote ≤ 15 words) | Verdict | Evidence | Fix |`

**Verdicts:**
- **WRONG:** contradicts the source or physics
- **UNSUPPORTED:** a number or claim with no source
- **IMPRECISE:** true but loose or misleading
- **INCONSISTENT:** conflicts with another slide or with the notes
- **OK-BEYOND-SOURCE:** correct, but the source is silent

**Evidence:** a source line plus a quote of 15 words or fewer, or the physics argument.

**Fix:** a concrete replacement line, the same length or shorter.

List findings only. End with:
1. the top 5 findings by severity
2. a one-line verdict on whether the deck is safe to present to specialists
