<!-- Verbatim source section; overview: [[../fm-ar-label-blast]] -->
<!-- SOURCE-BODY-START -->
## 1.5 Manuscript numbers at risk (`main.tex`, read-only)

| Location | Number/claim | Status |
|---|---|---|
| Table 4 (`tab:v6-ablation`, L282-291) + §5.3 narrative (L295-298) + abstract/conclusion "96.6% α vs Nonα" (L503) | all four V6 rows, α-recall 87.4%, "+0.8pp HC / +1.6pp Raw" XA gains, "+1.5/+2.3pp" HC gains | **AT RISK pending §1.4.** Important nuance: even under scenario (b) the *comparative* claims survive — both arms share the same wrong task, so XA-vs-RN and HC-vs-Raw deltas are internally valid; only the task identity ("α") and the α-recall column are wrong. Same logic already applies to EXP3 (closing doc §1). |
| §5.5 first experiment (L369): "on the ³He/⁴He task … 95.80/95.77 … +1.77pp" | EXP1 + V6-RN-HC numbers | Task name wrong regardless (it's α-vs-rest, not ³He-vs-⁴He — methods-audit M2). Numbers valid α-vs-rest iff Windows files v6-mapped; the EXP1↔V6 comparison is invalid under scenario (b). |
| §5.5 second experiment (L381): "on the ³He/⁴He task … 96.98/96.94/95.80" | EXP2 numbers | Same naming issue + **undisclosed carbon-contaminated negative pool and non-comparable val sets** (§1.3). |
| Table 2 (`tab:classification-results`, L259-267): 91.9/96.1, 82.8/89.7, 91.5/93.0 | V4 NimpSim | **CLEAN** — per-file classes; unaffected by any label-map issue. |
| §5.7 EXP8 (L328-359) + Table 5 | unseen-channel | **CLEAN** — `file_class_list` bypass. |
| §6 reconstruction (all TRK numbers) | — | **unaffected**. |
| Any EXP3-derived number quoted as 4He | — | illegal except `XA-Raw-lf` 0.92136 (already the campaign's rule). |

<!-- SOURCE-BODY-END -->
