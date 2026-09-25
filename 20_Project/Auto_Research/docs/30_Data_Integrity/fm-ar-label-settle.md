> Origin: `fm-ar-label-settle` scout report; recorded 2026-09-25.

<!-- SOURCE-PREFIX-START -->
# fm-ar-label-settle — settling the two Windows-machine concerns from surviving evidence

**Date:** 2026-09-25 · **Worker:** fm-ar-label-settle (scout) · **Mode:** findings only — no code changes, no training, no manuscript edits, no writes to box 176 or IMP.
**Scope:** (1) V6 Table 4 label-map question (label-blast §1.4); (2) EXP2 3He/4He clean accuracy (exp2-contam §4 Option A). Windows machine and everything only on it are gone.
**Sources searched:** live checkout `/Users/Reid Hu/MATE-Automation` (git history, `runs/`, `configs/`, `20_doc/`, `openspec/`, `99_System/`, memory archive), OrbitOS `Auto_Research/docs/`, manuscript `main.tex` (read-only), GitHub legacy repo `Edfghdrtxxx/MATE-Event-Classifier-DL`, and **box 176 read-only** (AutoDL instance B, `connect.westb.seetacloud.com:43812`, via `gpu_exec.py` — `ls`/`find`/h5py attr reads only).

---

<!-- SOURCE-PREFIX-END -->

<!-- Original report body is reconstructed from the prefix and linked verbatim sections below. -->
## Status

**Settled from surviving evidence.** V6 Table 4 is almost certainly triton-vs-rest (~80% confidence — the same `{4:0}`-on-OLD-labels bug that hit EXP3); the EXP2 clean α-vs-rest accuracy is unrecoverable (estimate ≈95.7–95.8% stands). Launch-ready replacement task specs T1–T5 are included; all GPU items await the captain's GPU-time decision.

## Contents

- [[30_Data_Integrity/fm-ar-label-settle/01-0-tl-dr|0. TL;DR]]
- [[30_Data_Integrity/fm-ar-label-settle/02-1-concern-1-v6-table-4-what-the-surviving-evidence-says|1. Concern 1 — V6 Table 4: what the surviving evidence says]]
- [[30_Data_Integrity/fm-ar-label-settle/03-2-concern-2-exp2-clean-accuracy-unrecoverable|2. Concern 2 — EXP2 clean accuracy: unrecoverable]]
- [[30_Data_Integrity/fm-ar-label-settle/04-3-replacement-task-specs-launch-ready|3. Replacement task specs (launch-ready)]]
- [[30_Data_Integrity/fm-ar-label-settle/05-4-recommended-sequencing|4. Recommended sequencing]]
- [[30_Data_Integrity/fm-ar-label-settle/06-5-commands-run-reproduction|5. Commands run (reproduction)]]
- [[30_Data_Integrity/fm-ar-label-settle/07-6-open-items-for-the-captain|6. Open items for the captain]]

<!-- ORIGINAL-BODY-SHA256: 3b97e5f5eebe93b4fc577deb9313f3a2ee2585c66b850aab142b3394780a4119 -->
<!-- ORIGINAL-BODY-BYTES: 16621 -->
