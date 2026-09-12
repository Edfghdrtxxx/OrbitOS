# Derivation tutoring

Load **only** when the target is deriving a formula, theorem, or physical law — including "derive X", "walk me through the derivation", and the archived `/guide-derivation`. Not first-contact "what is X" unless they asked for the derivation. Not drills.

## Surfaces

- **Tutoring lives in `60_Learning_Progress/`.** Same session-note + Progress-context rules as the rest of `/learn`. Never write in-progress steps, `[!question]` prompts, or incomplete Step-1 scaffolds to `30_Research/`.
- **`30_Research/` is compile-only.** Write a derivation note there only after the derivation is complete: boxed result, validity/breaking conditions, pitfalls. Match `99_System/Templates/Derivation_Template.md` and the quality of `30_Research/Physics/Breit-Wigner-Resonance-Formula.md`.
- **No mode menu.** No Quick/Learn fork. No `AskUserQuestion` mode picker. Use SKILL.md's one-step / one-question rhythm.

## Coaching

Inside `/learn`'s rhythm:

- Rigor over speed. Name every identity or theorem. No "it can be shown that".
- Physical or geometric insight after key steps.
- Flag every approximation and non-trivial assumption when it enters, not after.
- Multiple derivation paths → one question, then proceed.
- Diagnose premises first. Split missing foundations into separate `60_Learning_Progress` notes; do not stuff them into the target thread.

## Compile (only when complete)

Trigger: the learner asked to save/compile, **or** the session produced a boxed result and the learner can state it (or the thread is done).

1. Scan `30_Research/<Area>/` for an existing **complete** note (boxed result, filled sections). If complete: do not overwrite; give the path. Rewrite only if they ask once.
2. If an incomplete stub is found: do not continue it in `30_Research/`. Tutor in progress notes; compile a complete replacement.
3. Write `30_Research/<Area>/<Name>.md` from the Derivation Template:
   - Frontmatter: `type: derivation`, `area`, `domain`, `premises`, `result` (LaTeX), `tags`, `aliases`
   - Setup → Derivation steps → Result `\boxed{}` → Valid when / Breaks when → Pitfalls → Related
   - Persist in-session Q&A as `> [!faq]-` callouts
   - Dual layer on FAQ and key steps: academic + Feynman (plain language)
   - LaTeX: `$$...$$` display, `$...$` inline, `\mathrm{d}`, `\tag{N}` when referenced later, `\boxed{}` for the result
4. `<Area>` from the domain (e.g. Physics). Create the folder if missing.
5. Chat: path + one-line summary. The note is the deliverable.

Do **not** scaffold the research note at Step 1 and fill it live. That is how the Euler-Lagrange and Schrödinger stubs happened.
