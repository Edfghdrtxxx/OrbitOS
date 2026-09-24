<!-- Verbatim source section; overview: [[../fm-ar-amend-package]] -->
<!-- SOURCE-BODY-START -->
## 2. Where the reports disagree — reconciled

| # | Contested item | Reports in conflict | Winner | Why |
|---|---|---|---|---|
| 1 | `references.bib` entry count | bib-fixsheet: 45 (net 45→39) · bib-additions: 48 (post-merge 54) | **bib-additions (48)** | `grep -c '^@' references.bib` = 48 today. True post-merge count: 48 − 11 + 5 + 12 = **54**. |
| 2 | EXP2 "smaller validation set" | methods-audit #34: "same 25k val" · exp2-contam: 35k (7 files) | **exp2-contam (35k)** | 35,000 = 0.2 × 7 × 25k (implementation_log.md:151-153). The manuscript's "smaller" is technically true (25k < 35k) but the real problem is carbon composition + asymmetric training pools. |
| 3 | McNemar bound on the Raw deficit | referee/seed-evidence: p≤0.035 (s0), p≤7.5e-4 (s42) · gpu-ladder: p≤1.5e-5 / 4.5e-12 | **gpu-ladder** | Uses actual error counts, not just accuracies; recomputed Δ = −1.332/−2.132 pp from metrics.json. Both agree: guaranteed-significant. |
| 4 | Label-fix `counterfactual_battery.json` buggy (0.7005) or corrected (0.9275) | attn-sink/mechanism/seed-evidence/gpu-plan-draft/results-audit flag buggy · referee/closing-check say corrected | **corrected** | File on disk verified twice (closing-check R13, claims-ledger §3): original 0.9275, zero_q 0.8065, permuted_q 0.9275, zero_cls 0.1935. Older flags are stale. |
| 5 | "test acc 0.92136" for the label-fix run | gpu-plan-draft: "test acc" · closing-check R1: validation | **validation** | `metrics.json` `best_val_acc: 0.9214`; `data_split.json` `test_size: 0.2` — 80/20, no third split exists for EXP3-classification runs. |
| 6 | NimpSim Option B cost | README/hehe-control: ~4–6 GPU-h · nimpsim-cost: ~20–35 GPU-h | **nimpsim-cost (20–35 h)** | Derived estimate (PR #35); the 4–6 h figure was underived. Does not fit the ~9.5 h reserve → future session. |
| 7 | Dalitz citation year | related-work: "Dalitz et al. 2018 (arXiv:1807.03513)" · bib-additions: `Dalitz2019` (CPC 235:159) | **bib-additions (2019)** | Journal version verified via DOI `10.1016/j.cpc.2018.09.010` → CPC 235:159–168 (2019). |
| 8 | `Bradt2021` first author | bib: Bradt, J. · bib-fixsheet: Solli, R. | **bib-fixsheet (Solli)** | DOI `10.1016/j.nima.2021.165461` resolves to Solli et al., NIMA 1010:165461. Key rename optional (§3). |
| 9 | EXP4 sink stats (token-50 444/512, max-weight 0.52, entropy) | recording doc quotes them · results-audit F4/referee A10: in no synced artifact | **keep out of the manuscript** | Unreproduced ad-hoc eval; `exp4_attention_metrics.json` holds only f_Bragg + attn_charge_corr. The manuscript does not quote them — keep it that way until Check A runs. |
| 10 | s42-HC `zero_cls` delta sign | closing doc (old): −0.1 pp · results-audit: +0.1 pp | **+0.1 pp** | `counterfactual_battery.json` XA-HC-s42: zero_cls 0.954 > original 0.953. |
| 11 | XA-Raw training cost | seed-evidence: 7–14 h · gpu-plan/referee: 4.9–5.6 h | **both true** | `run.log`: train 17,669 s = 4.9 h; run-dir wall ≈13.7 h billed. Use ~7 h billed for budgeting Raw cells. |
| 12 | max\|h\| "flags unseen carbon at AUROC 0.90" | ood-leakage/claims-ledger §4.7: citable fix direction · maxh-confound: does not survive | **maxh-confound** | Seen channel A scores 0.906/0.903 vs the same negatives; unseen-vs-all-seen drops to 0.67/0.58; F/G/H pairwise ≈0.50. If max\|h\| wording is added, it must be the scale-proxy framing (row L332). |
| 13 | Novelty-claim location | related-work: "L53/L67" | **L53 only** | The "neither…exploit" sentence exists only in the abstract; L67 is the motivation paragraph. Pointer corrected here. |

---

<!-- SOURCE-BODY-END -->
