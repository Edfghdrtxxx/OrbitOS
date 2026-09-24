> Origin: `fm-ar-prereg-scorecard` scout report; recorded 2026-09-24.

<!-- SOURCE-PREFIX-START -->
# fm-ar-prereg-scorecard — deterministic EXP3 preregistration scorecard

**Date:** 2026-09-24 · **Worker:** fm-ar-prereg-scorecard (scout) · **Scope:** read-only on live checkout `/Users/Reid Hu/MATE-Automation` (HEAD `b06f16b`, same commit as the worktree). All scorer outputs written inside the worktree at `prereg_scorecard_out/` (discarded at teardown; this report carries everything that matters). CPU only; total compute < 1 min. No manuscript file, no box-176/AutoDL/IMP/Windows resource touched.

**Deliverable:** the repo's own scorer (`scripts/analysis/exp3_prereg_score.py`) run over every landed battery JSON plus a clean two-run `selection_bias.json`, with formal verdicts separated from off-lock band-reads and pending rows, the A5 selection-premium table verified, and each result mapped to its `main.tex` line.

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Contents

- [[10_Mechanism/fm-ar-prereg-scorecard/01-0-headline|0. Headline]]
- [[10_Mechanism/fm-ar-prereg-scorecard/02-1-commands-run-verbatim-and-artifacts|1. Commands run (verbatim) and artifacts]]
- [[10_Mechanism/fm-ar-prereg-scorecard/03-2-row-by-row-scorecard|2. Row-by-row scorecard]]
- [[10_Mechanism/fm-ar-prereg-scorecard/04-3-disagreements-with-the-claims-refresh-hand-reads|3. Disagreements with the claims-refresh hand-reads]]
- [[10_Mechanism/fm-ar-prereg-scorecard/05-4-a5-selection-premium-table-all-12-exp3-runs-verified|4. A5 — selection-premium table, all 12 EXP3 runs (verified)]]
- [[10_Mechanism/fm-ar-prereg-scorecard/06-5-manuscript-lines-each-result-bears-on|5. Manuscript lines each result bears on]]
- [[10_Mechanism/fm-ar-prereg-scorecard/07-6-scorer-assessment-bugs-limitations-worth-shipping|6. Scorer assessment — bugs, limitations, worth shipping?]]
- [[10_Mechanism/fm-ar-prereg-scorecard/08-7-what-i-did|7. What I did]]
- [[10_Mechanism/fm-ar-prereg-scorecard/09-8-recommendations|8. Recommendations]]
- [[10_Mechanism/fm-ar-prereg-scorecard/10-9-captain-hold-inventory|9. Captain-hold inventory]]

<!-- ORIGINAL-BODY-SHA256: 42d4160d6cd9762a019c0ef4c4a69028543984c8311ad83090d3fcaf381a8199 -->
<!-- ORIGINAL-BODY-BYTES: 27427 -->
