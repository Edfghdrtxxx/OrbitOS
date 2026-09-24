> Origin: `fm-ar-referee` scout report; recorded 2026-09-24.

<!-- SOURCE-PREFIX-START -->
# fm-ar-referee — hostile-referee attack ranking + seed-robust evidence inventory (EXP3)

**Date:** 2026-09-24 · **Worker:** fm-ar-referee (scout) · **Scope:** read-only on live checkout `/Users/Reid Hu/MATE-Automation` (`runs/` is gitignored, read there); CPU-local analysis only. No box-176/AutoDL/IMP contact. No manuscript or lead files touched.
**Inputs consumed:** all 12 prior scout reports (`fm-ar-{capacity-critique,comparisons,seed-evidence,results-audit,difficulty,ood-leakage,gpu-plan-draft,attn-sink,feature-norm,transfer,hc-vs-raw,methods-audit}`), `20_doc/EXP3_closing_analysis_2026-09-24.md`, `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md`, and a fresh re-inventory of `runs/EXP3-*/` (this report re-verified every artifact it cites — see §B.6 for what changed since the earlier scouts).

---

# PART A — Ranked referee attacks (max 12)

Ranking = (probability a competent referee raises it) × (damage to the paper's claims if unanswered). "Cost" assumes box-176 CPU rules: 2 GB cgroup, `--max-events 2000 --batch-size 64`, ~5–10 min per battery condition, proven by the 6-checkpoint battery already run there.

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Contents

- [[20_Capacity_Statistics/fm-ar-referee/01-a1-every-headline-number-is-the-wrong-task-the-label-bug|A1. Every headline number is the wrong task — the label bug]]
- [[20_Capacity_Statistics/fm-ar-referee/02-a2-zerocls-collapse-may-be-an-ood-artifact-not-information-depen|A2. `zero_cls` collapse may be an OOD artifact, not information dependence]]
- [[20_Capacity_Statistics/fm-ar-referee/03-a3-the-permutedq-test-is-underpowered-on-raw-h3-refuted-is-reall|A3. The `permuted_q` test is underpowered on Raw — "H3 refuted" is really an HC result]]
- [[20_Capacity_Statistics/fm-ar-referee/04-a4-battery-statistics-n-2000-unrecorded-subset-val-set-reuse|A4. Battery statistics: n=2000, unrecorded subset, val-set reuse]]
- [[20_Capacity_Statistics/fm-ar-referee/05-a5-the-xa-raw-deficit-may-be-an-optimization-artifact-not-capaci|A5. The XA-Raw deficit may be an optimization artifact, not capacity]]
- [[20_Capacity_Statistics/fm-ar-referee/06-a6-the-deficit-concentrates-in-minority-recall-threshold-class-b|A6. The deficit concentrates in minority recall — threshold/class-balance confound]]
- [[20_Capacity_Statistics/fm-ar-referee/07-a7-capacity-confound-68-dim-head-input-vs-512-dim-gap-is-not-a-c|A7. Capacity confound: 68-dim head input vs 512-dim GAP is not a controlled comparison]]
- [[20_Capacity_Statistics/fm-ar-referee/08-a8-physics-features-are-unnormalized-and-the-manuscript-says-the|A8. Physics features are unnormalized — and the manuscript says they are standardized]]
- [[20_Capacity_Statistics/fm-ar-referee/09-a9-no-traditional-baseline-on-the-classification-task-doctrine-v|A9. No traditional baseline on the classification task — doctrine violation]]
- [[20_Capacity_Statistics/fm-ar-referee/10-a10-attention-mechanism-claims-rest-on-single-seed-ad-hoc-unrepr|A10. Attention-mechanism claims rest on single-seed, ad-hoc, unreproduced evals]]
- [[20_Capacity_Statistics/fm-ar-referee/11-a11-the-s0-anomaly-interpretation-is-fragile-and-the-closing-doc|A11. The s0-anomaly interpretation is fragile — and the closing doc's "does not replicate" is wrong]]
- [[20_Capacity_Statistics/fm-ar-referee/12-a12-no-held-out-test-set-val-doubles-as-model-selection-and-repo|A12. No held-out test set — val doubles as model-selection and reporting set]]
- [[20_Capacity_Statistics/fm-ar-referee/13-b-1-run-inventory-re-verified-2026-09-24-live-checkout|B.1 Run inventory (re-verified 2026-09-24, live checkout)]]
- [[20_Capacity_Statistics/fm-ar-referee/14-b-2-local-cpu-inference-feasibility-no-three-independent-blocker|B.2 Local CPU inference feasibility — NO (three independent blockers)]]
- [[20_Capacity_Statistics/fm-ar-referee/15-b-3-seed-statistics-triton-task-n-25-000-val-run-recomputed|B.3 Seed statistics — triton task, n=25,000 val/run (recomputed)]]
- [[20_Capacity_Statistics/fm-ar-referee/16-b-4-paired-comparisons-same-seed-n-25-000|B.4 Paired comparisons (same-seed, n=25,000)]]
- [[20_Capacity_Statistics/fm-ar-referee/17-b-5-verdict-per-paper-claim|B.5 Verdict per paper claim]]
- [[20_Capacity_Statistics/fm-ar-referee/18-b-6-what-changed-since-the-earlier-scouts-verified-today|B.6 What changed since the earlier scouts (verified today)]]
- [[20_Capacity_Statistics/fm-ar-referee/19-b-7-minimum-further-runs-to-close-each-gap|B.7 Minimum further runs to close each gap]]
- [[20_Capacity_Statistics/fm-ar-referee/20-b-8-commands-used-reproduction|B.8 Commands used (reproduction)]]
- [[20_Capacity_Statistics/fm-ar-referee/21-b-9-open-questions-for-the-lead-non-blocking|B.9 Open questions for the lead (non-blocking)]]

<!-- ORIGINAL-BODY-SHA256: 5992558a93d3c811eb6cdceb661cc1c1e99dbe04ce007205367099d67f6cc750 -->
<!-- ORIGINAL-BODY-BYTES: 29267 -->
