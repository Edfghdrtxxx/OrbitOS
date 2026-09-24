> Origin: `fm-ar-seed-evidence` scout report; recorded 2026-09-24.

<!-- SOURCE-PREFIX-START -->
# EXP3 seed-robust evidence audit — what on-disk artifacts support

**Date:** 2026-09-24 · **Scope:** EXP3 2×2 (XA/ResNet × Raw/HC), triton-vs-rest task (label bug) + partial 4He label-fix · **Source:** live checkout `/Users/Reid Hu/MATE-Automation/runs/` (gitignored; read-only) · **Worker:** fm-ar-seed-evidence (scout, CPU-local only)

**Headline:** every number on disk is the **triton-vs-rest** task, not 4He. Within that task, three claims are seed-robust (XA≈RN on HC; XA<RN on Raw; HC≫Raw), one mechanism claim is seed-robust (query content irrelevant, 6/6 checkpoints), and the paper's central claim (XA>RN, growing on Raw) is **contradicted on triton and untested on 4He** (0/4 label-fix runs complete). No paired per-event statistics are computable locally: exactly one `predictions.csv` exists (ResNet-HC-s42) and **zero checkpoints are local**. The cheapest gap-closer is not GPU training — it is CPU inference on box 176 to emit `predictions.csv` for the 10 other checkpoints, which unlocks McNemar/paired-bootstrap on the full 25k val set for free.

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Contents

- [[20_Capacity_Statistics/fm-ar-seed-evidence/01-1-run-inventory-users-reid-hu-mate-automation-runs-exp3|1. Run inventory (`/Users/Reid Hu/MATE-Automation/runs/EXP3-*`)]]
- [[20_Capacity_Statistics/fm-ar-seed-evidence/02-2-feasibility-of-local-cpu-inference-no|2. Feasibility of local CPU inference — NO]]
- [[20_Capacity_Statistics/fm-ar-seed-evidence/03-3-seed-statistics-triton-task-n-25-000-val-per-run|3. Seed statistics — triton task, n=25,000 val per run]]
- [[20_Capacity_Statistics/fm-ar-seed-evidence/04-4-verdict-per-paper-claim|4. Verdict per paper claim]]
- [[20_Capacity_Statistics/fm-ar-seed-evidence/05-5-the-seed-variance-trap-for-the-writeup|5. The seed-variance trap (for the writeup)]]
- [[20_Capacity_Statistics/fm-ar-seed-evidence/06-6-minimum-runs-to-close-each-gap|6. Minimum runs to close each gap]]
- [[20_Capacity_Statistics/fm-ar-seed-evidence/07-7-commands-used-reproduction|7. Commands used (reproduction)]]
- [[20_Capacity_Statistics/fm-ar-seed-evidence/08-8-open-questions-for-the-lead-not-blocking|8. Open questions for the lead (not blocking)]]

<!-- ORIGINAL-BODY-SHA256: c4aec64678a3a065b012f81326b3023894771df8be2a24d39e4fce1119053488 -->
<!-- ORIGINAL-BODY-BYTES: 15115 -->
