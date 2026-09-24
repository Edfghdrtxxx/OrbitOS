<!-- Verbatim source section; overview: [[../fm-ar-claims-ledger]] -->
<!-- SOURCE-BODY-START -->
## 3. Conflicts between scout reports — resolved by re-verification

| Contested item | Reports in conflict | My re-verification (commands run today) | Resolution |
|---|---|---|---|
| Label-fix `counterfactual_battery.json` — buggy (0.7005) or corrected (0.9275)? | attn-sink §6, mechanism §4, seed-evidence §8, gpu-plan-draft Q1, results-audit F2 all flag the local JSON as **possibly buggy**; referee B.1 and closing-check R13 say **corrected** | `cat runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/counterfactual_battery.json` → `original 0.9275, zero_q 0.8065, permuted_q 0.9275, zero_cls 0.1935, zero_both 0.5235` | **Corrected file is on disk.** The "+9.2 pp zero_q sign flip" is retracted (zero_q = −12.1 pp on 4He). Newer reports (referee, closing-check) win; the older flags are stale. |
| McNemar bound tightness on the Raw deficit | referee/seed-evidence: χ²≥nΔ² → p≤0.035 (s0), p≤7.5e-4 (s42); gpu-ladder/hehe-control: worst-case bounds using actual error counts → p≤1.5e-5 / 4.5e-12 | Recomputed Δ from metrics.json: s0 0.87572−0.88904 = −1.332 pp; s42 0.87116−0.89248 = −2.132 pp | **gpu-ladder's tighter bounds are newer and better-evidenced** (use real error counts, not just accuracies). Both agree: guaranteed-significant. |
| "test acc 0.92136" for the label-fix run | gpu-plan-draft §0 says "test acc"; closing-check R1 says it's **validation** accuracy | `metrics.json` → `best_val_acc: 0.9214, accuracy: 0.92136`; `data_split.json` `test_size: 0.2` (80/20, no third split) | **Validation accuracy.** No held-out test set exists for EXP3-classification runs. (EXP8/TRK do have test splits — verified `test_indices` n=75,000 / 180,000.) |
| XA-Raw training cost | seed-evidence "7–14 h" vs gpu-plan/referee "4.9–5.6 h" | `run.log` "Training complete in 17669.3 s" = 4.91 h; run-dir wall span ~13.7 h | Both true: **4.9 h train, ~13.7 h billed wall** (eval+queue inside job). gpu-ladder's resolution (budget ~7 h billed for Raw cells) is the usable figure. |
| EXP2 "smaller validation set" | methods-audit #34: "smaller validation set is wrong — same 25k val"; exp2-contam §1: EXP2 val = **35k** (7 files) | exp2-contam's CM arithmetic: 35,000 = 0.2×7×25k (implementation_log.md:151-153) | **exp2-contam is newer and correct**: EXP1-XA val = 25k, EXP2-3He4He val = 35k with 10k carbon. The manuscript's "smaller validation set" is technically true (25k < 35k) but the real problem is composition, not size. |
| EXP4 sink stats (token-50 444/512, max-weight 0.52, entropy) | recording doc quotes them; results-audit F4/Q4 + referee A10: **not in any synced artifact** | `exp4_attention_metrics.json` (4 files) contain only f_Bragg + attn_charge_corr | **Unreproduced ad-hoc eval.** The manuscript does not quote these numbers — keep it that way until Check A runs. |
| s42-HC zero_cls delta sign | closing doc said −0.1 pp; results-audit §12: **+0.1 pp** | `counterfactual_battery.json` XA-HC-s42: zero_cls 0.954 > original 0.953 | **+0.1 pp** (results-audit correct; sign error already fixed in the revised closing doc per closing-check R26). |

---

<!-- SOURCE-BODY-END -->
