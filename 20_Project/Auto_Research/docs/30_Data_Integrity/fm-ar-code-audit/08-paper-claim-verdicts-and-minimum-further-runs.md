<!-- Verbatim source section; overview: [[../fm-ar-code-audit]] -->
<!-- SOURCE-BODY-START -->
## Paper claim verdicts and minimum further runs

| claim | verdict from surviving artifacts | minimum evidence needed |
|---|---|---|
| XA improves classification accuracy over RN on HC | **Contradicted as a seed-robust superiority claim**: XA is lower on 2/3 seeds and higher by only .04 pp on seed1; no paired event CI. | Retain three existing seeds plus per-event dumps for all six HC runs; no new training needed if checkpoints/data are restored. |
| RN is better than XA on Raw | **Suggestive, not seed-robust**: RN wins both shared legacy seeds by 1.33 and 2.11 pp; XA seed1 is absent and label-fix changes the label construction. | One standard XA-Raw seed1 run plus restored checkpoints/predictions for all arms; one GPU run at the campaign’s existing EXP3 cost. |
| Physics query poisoning explains XA behavior | **Contradicted on the available XA batteries**: permuted-q changes are 0 pp or ±0.05 pp on each 2,000-event subset. | No new training; rerun full-val batteries for all six arms if the claim is to be stated as full-val. |
| Classifier-side physics is load-bearing on Raw | **Single-seed/limited-seed only**: repeated on two legacy XA-Raw seeds, but n=2 and the corrected-label run is a different label construction. | At least one additional standard-label Raw XA seed and full-val counterfactuals; one GPU training run plus CPU battery. |
| Classifier-side physics is redundant on HC | **Not seed-robust / contradicted by s0 diagnostic**: zero-cls is −15.55 pp on s0 but near parity on s1/s42. | Full-val counterfactuals for all HC seeds and at least one additional independent HC seed if the effect remains heterogeneous. |
| Paired McNemar/bootstrap arm comparisons | **Unavailable from surviving artifacts**. | Restore or regenerate per-event predictions for every same-seed arm pair; no new training if checkpoints and HDF5s can be restored. |
| Traditional-baseline comparison (Kuchera LR/FCNN) | **Not interpretable until PR-5 label mapping is fixed or explicitly labeled triton-vs-rest**. | Correct the baseline mapping, rerun LR/FCNN on the pinned split, and report task identity beside metrics. |

GPU-hour costs cannot be derived verifiably from the surviving local artifacts: no run-time ledger or checkpoint timing is present in this checkout. The only defensible minimum is the number of additional training jobs above; attach the campaign's measured per-job GPU-hour figure before budgeting.

<!-- SOURCE-BODY-END -->
