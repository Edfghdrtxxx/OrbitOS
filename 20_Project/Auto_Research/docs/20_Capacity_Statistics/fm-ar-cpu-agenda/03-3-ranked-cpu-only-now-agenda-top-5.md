<!-- Verbatim source section; overview: [[../fm-ar-cpu-agenda]] -->
<!-- SOURCE-BODY-START -->
## 3. Ranked CPU-only-now agenda (top 5)

Ranking criterion: how much the result changes manuscript lines (`main.tex` refs from claims-ledger/claims-refresh).

### Rank 1 — Manuscript amendment package (scout → ship candidate)

- **Task:** consolidate claims-ledger (32 claims) + claims-refresh (delta + new lines) + bib-fixsheet (`fixes.bib`) + closing-check into one captain-ready amendment document: every manuscript line, its verdict, the replacement sketch, and the evidence pointer. Include the new lines the refresh surfaced (L359 null-channel caption row, L79 "consistently improves", L53/L67 novelty, L323-332 max|h| wording guard, bib fixes).
- **Inputs:** `data/fm-ar-claims-ledger/report.md`, `data/fm-ar-claims-refresh/report.md`, `data/fm-ar-bib-fixsheet/report.md` (+ its `fixes.bib`), `data/fm-ar-closing-check/report.md`, `10_Papers-Thesis/Physics_Informed/main.tex` (read-only).
- **Runtime:** 1–2 h, zero compute.
- **Changes:** every Tier-1 line — L369/L381 (mislabeled ³He/⁴He decomposition), L170/L207 (false standardization), L255 (final-epoch caption), L298 (+1.6pp mechanism claim), L313/L319 (Bragg framing), L53/L503 (unqualified gains), plus 5 citation fixes (2 fabricated, 1 unverifiable, 2 miscited). **This is the single largest manuscript delta available without GPU.**

### Rank 2 — EXP8 paired arm statistics (scout, numbers in hand)

- **Task:** formalize today's probe into a small report/artifact: per-channel paired McNemar + bootstrap CIs on the 75k val predictions and the 475k unseen-channel eval predictions; state the seen-channel tie and the F/G/H deficit with paired significance.
- **Inputs:** `runs/EXP8-{XA,ResNet}-Ideal-UnseenChannel/auditfix_d570d34_01/{predictions.csv, eval_exp8/predictions.csv}`.
- **Runtime:** <10 min (already computed: seen Δ=+0.03pp p=0.76; F/G/H Δ=−6.7/−7.4/−7.2pp p≈0; overall val Δ=+0.21pp [+0.07,+0.35] p=0.004).
- **Changes:** upgrades claims-ledger §4.9 ("arms differ only on far-OOD") from pooled-FTR observation to per-channel paired significance; feeds §5.7 wording and the "physics pathway's cost is exclusively extrapolative" claim.

### Rank 3 — Prereg scorecard on landed artifacts (scout, partially done today)

- **Task:** produce the deterministic scorecard: `exp3_prereg_score.py` over all 6 battery JSONs + 3 d5 JSONs + a clean two-run `selection_bias.json`; publish `prereg_score.json` + a short readout distinguishing formal verdicts (selection_bias = miss×6, verified today) from off-lock band-reads (claims-refresh §3a: scaled_cls/centered_q/zero_ch0 miss all rivals).
- **Inputs:** local battery/d5 JSONs, `history.json` ×2, prereg YAML.
- **Runtime:** <30 min.
- **Changes:** makes the "no rival predicted the magnitude dependence" result a scorer-produced artifact rather than a hand-read; frames the mechanism section (L170/L207/L298/L313) and the R3b gate decision (not met).

### Rank 4 — TRK5/TRK6 + baseline paired regression stats (scout, numbers in hand)

- **Task:** paired bootstrap/Wilcoxon on TRK5-vs-TRK6 (done today: XA −0.0043 MeV MAE, p≈0, wins all bins) and CNN-vs-classical on shared events (RANSAC/Hough/HC vs TRK5/6); energy-stratified table.
- **Inputs:** `runs/TRK{5,6}-*/seed42/predictions_regression.csv`, `runs/baseline-*/seed42/predictions_regression.csv`.
- **Runtime:** ~1 h (Wilcoxon on 450k pairs is the slow step; bootstrap is minutes).
- **Changes:** adds paired significance to the verified Table-6/7 energy cells and the §6 classical-baseline margins; strengthens claim #17-adjacent cells pending the TRK3/4 sync.

### Rank 5 — Closing-doc revision draft (ship candidate, worktree PR)

- **Task:** apply closing-check's R1–R26 verdicts + the 16 claims-to-add to `20_doc/EXP3_closing_analysis_2026-09-24.md` **in a worktree** (live checkout is read-only for scouts; the lead owns the doc). Deliver as a PR the lead can merge.
- **Inputs:** closing-check report (statement-by-statement replacements are already drafted), closing-sync report, the doc itself.
- **Runtime:** 1–2 h, zero compute.
- **Changes:** fixes the doc a referee/captain reads: "test acc"→val (R1), 0/4→1/4 (R2), refuted routing sentences (R3/R4/R6/R7), stale pending lists (R13–R15), plus the 16 missing findings (label-blast blast radius, feature-norm scale mechanism, hc-vs-raw denoising, code-audit bug caveats, Z01 facts).

**Honorable mentions (CPU-now, lower marginal value):** A5 selection-premium table (feeds one disclosure sentence — already computed, fold into Rank 3); A7 max|h| cache characterization (fold into Rank 2's report); A10 Z01 re-download + FCNN (only if direction-B completeness is wanted — the anchor numbers already exist).

---

<!-- SOURCE-BODY-END -->
