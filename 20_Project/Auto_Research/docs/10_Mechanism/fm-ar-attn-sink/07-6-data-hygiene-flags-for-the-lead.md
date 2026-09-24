<!-- Verbatim source section; overview: [[../fm-ar-attn-sink]] -->
<!-- SOURCE-BODY-START -->
## 6. Data hygiene flags for the lead

- **`runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/counterfactual_battery.json` on the live checkout is the VOID buggy run** (original 0.7005, zero_q +9.2pp — the retracted label-misalignment numbers). The corrected run (original 0.9275, zero_q 0.8065) exists only in the closing doc §11 text. Re-sync or delete the stale JSON before anyone quotes it. Consequently, `permuted_q` on the true 4He task is **unmeasured** — include it in the corrected battery re-run.
- The local battery JSONs predate D5 (`permuted_cls`, `mean_cls`, `pred_histograms` absent) — the zero_cls OOD-artifact question is still open on all synced artifacts.
- `exp4_attention_metrics.py` persists no per-event argmax — every argmax claim in the docs traces to ad-hoc evals; Check A makes them reproducible artifacts.

<!-- SOURCE-BODY-END -->
