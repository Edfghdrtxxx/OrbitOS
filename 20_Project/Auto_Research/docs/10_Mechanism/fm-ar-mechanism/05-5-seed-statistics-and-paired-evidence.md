<!-- Verbatim source section; overview: [[../fm-ar-mechanism]] -->
<!-- SOURCE-BODY-START -->
## 5. Seed statistics and paired evidence

### 5.1 Accuracy and α-recall by arm

The following are means ± sample SD across completed triton runs; 95% intervals are t intervals across seeds (not binomial intervals). Each run has n=25,000 validation events.

| Arm | seeds | accuracy mean ± SD | 95% t interval | α-recall mean ± SD | verdict |
|---|---|---:|---:|---:|---|
| RN-HC | 0,1,42 | 0.95701 ± 0.00234 | [0.95121, 0.96281] | 0.8450 ± 0.0049 | seed-robust arm level |
| XA-HC | 0,1,42 | 0.95625 ± 0.00193 | [0.95146, 0.96105] | 0.8372 ± 0.0143 | seed-robust arm level |
| RN-Raw | 0,1,42 | 0.89125 ± 0.00192 | [0.88648, 0.89602] | 0.6075 ± 0.0287 | seed-robust arm level |
| XA-Raw | 0,42 | 0.87344 ± 0.00322 | [0.84447, 0.90241] | 0.5540 ± 0.0082 | n=2 only |
| XA-Raw label-fix | 42 | 0.92136 | n=1 | 0.7254 | single-seed only |

Same-seed accuracy differences, computed from the metrics and 25,000-event denominators:

| Comparison | per-seed Δ (XA−RN or HC−Raw) | mean Δ | paired evidence available |
|---|---|---:|---|
| XA−RN, HC | −0.04, +0.04, −0.23 pp (s0,s1,s42) | −0.08 pp | no per-event pair; McNemar lower bounds non-significant |
| XA−RN, Raw | −1.33, −2.13 pp (s0,s42) | −1.73 pp | no per-event pair; McNemar lower-bound p≤0.035 and p≤7.5×10⁻⁴ |
| RN, HC−Raw | +6.54, +6.52, +6.66 pp | +6.58 pp | sign same 3/3 |
| XA, HC−Raw | +7.84, +8.56 pp | +8.20 pp | sign same 2/2 |

### 5.2 The one per-event file and computable bootstrap

`runs/EXP3-ResNet-HC-100k-seed42/20260921_002013/predictions.csv` has 25,000 rows and columns `event_index,true_label,pred_label,confidence`. Its confusion matrix is `[[4242,758],[265,19735]]`, exactly matching `metrics.json`, and accuracy is 23,977/25,000 = 0.95908. A deterministic Python bootstrap (seed 42, B=1,000 resamples of event correctness) gives percentile 95% CI **[0.95656, 0.96172]**; the Wilson binomial interval is **[0.95655, 0.96147]**.

A paired bootstrap or exact McNemar test requires two per-event prediction vectors on the same events. No second EXP3 prediction file exists, no EXP3 checkpoint is local, and no local Garfield HDF5 exists. Therefore no paired McNemar/paired-bootstrap arm comparison was fabricated. The same-seed split files for RN-HC s42 and XA-Raw s42 have identical val-index arrays, so the comparisons are paired in principle; prediction dumps on box 176 are the minimum closure.

### 5.3 Per-paper-claim verdicts

| Claim | Evidence-backed verdict | Reason |
|---|---|---|
| HC improves the image task over Raw | **Seed-robust** (5/5 observed architecture-seed pairs) | +6.52–8.56 pp, same sign. |
| XA and RN are tied on HC | **Seed-robust on triton** (3 pairs) | mean −0.08 pp; no paired event vectors, but all point estimates are within 0.23 pp. |
| XA beats RN on Raw | **Contradicted on triton; untested on true 4He** | XA<RN on both observed Raw seeds by 1.33 and 2.13 pp; the true 4He RN comparator is absent. |
| Query content drives attention | **Contradicted in tested accuracy battery** | `permuted_q` changes ≤0.001 on all synced checkpoints; map-level invariance is still pending. |
| Classifier physics is load-bearing on Raw | **Direction replicated, interpretation unresolved** | `zero_cls` collapses every Raw battery, but zeroing is an OOD input shift; D5 (`permuted_cls`/`mean_cls`) is required. |
| Classifier physics is redundant on HC | **Mostly supported, not universal** | two of three HC checkpoints are unchanged; HC s0 drops 15.6 pp. |
| EXP3 headline is a 4He result | **Contradicted for the 11 triton-map runs** | `src/run_experiment.py:627` maps raw label 4 to class 0; only the explicit label-fix run is 4He-vs-rest. |
| XA-Raw 4He reaches about 0.92 | **Single-seed only** | label-fix metrics are valid but no completion marker, split is zero bytes, and no RN comparator exists. |
| XA physics path improves far-OOD rejection | **Contradicted by EXP8 single-seed artifact** | XA carbon→proton 8.0–8.5% versus RN 1.4–1.6%; confidence scores do not detect the leak. |
| Traditional classification comparison is complete | **Missing** | no EXP3 physics-only LogReg score exists locally; D2 is the planned baseline. |

<!-- SOURCE-BODY-END -->
