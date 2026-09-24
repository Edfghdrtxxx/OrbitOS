<!-- Verbatim source section; overview: [[../fm-ar-results-audit]] -->
<!-- SOURCE-BODY-START -->
## 1. Closing doc `20_doc/EXP3_closing_analysis_2026-09-24.md`

### §1 table (lines 9–17) — triton-task 2×2

| Claim (line) | Artifact | Recomputed | Verdict |
|---|---|---|---|
| RN-HC 0.95701 ± 0.0023, n=3 (L11) | metrics.json ×3 | mean 0.957013, std 0.002313 (0.95448/0.95748/0.95908) | verified |
| XA-HC 0.95625 ± 0.0019, n=3 (L12) | metrics.json ×3 | mean 0.956253, std 0.001886 (0.95412/0.95788/0.95676) | verified |
| HC paired Δ −0.23/−0.04/+0.04 pp (L12) | metrics.json | s42 −0.232pp, s0 −0.036pp, s1 +0.040pp | verified |
| HC class-0 recall Δ −2.1/−1.7/+1.4 pp (L12) | metrics.json alpha_recall | s42 −2.08pp, s0 −1.68pp, s1 +1.42pp | verified |
| RN-Raw 0.89125 ± 0.0019, n=3 (L13) | metrics.json ×3 | mean 0.891253, std 0.001875 (0.88904/0.89224/0.89248) | verified |
| XA-Raw 0.87344 (0.87116, 0.87572), n=2 (L14) | metrics.json ×2 | exact | verified |
| Raw paired Δ −2.13/−1.33 pp (L14) | metrics.json | s42 −2.132pp, s0 −1.332pp | verified |
| Raw class-0 recall Δ −8.7/−4.9 pp (L14) | metrics.json alpha_recall | s42 −8.74pp, s0 −4.88pp | verified |
| "All 12 completed runs used the buggy label map" (L7) | runs/ tree | **11** runs have metrics.json; the 12th (label-fix) is incomplete AND used `file_class_list`, not the buggy map | **mismatch** — should read "all 11 completed runs" |
| "mean −0.08pp" HC (L16) | — | −0.076pp | verified |
| "−1.7pp mean, ~8× seed std" (L16) | — | mean −1.73pp; ÷0.19pp (RN-Raw std) = 9.1×; ÷0.32pp (XA-Raw n=2 std) = 5.4× | verified in direction; **imprecise multiplier** (recording doc says ~10× for the same comparison — pick one denominator and state it) |
| "loses 4.9–8.7pp of minority-class recall" (L17) | metrics.json | −4.88 to −8.74pp | verified |

### §2 training dynamics (lines 21–27)

| Claim | Artifact | Recomputed | Verdict |
|---|---|---|---|
| RN-Raw best ep 3–18, best val 0.889–0.892, final 0.881–0.890 | history.json ×3 | eps 17/3/18; best 0.8890/0.8922/0.8924; final 0.8859/0.8813/0.8903 | verified |
| XA-Raw best ep 7,12; best 0.876/0.871; final 0.858/0.860 | history.json ×2 | eps 7/12; best 0.8758/0.8710; final 0.8584/0.8596 | verified |
| "degrades ~1.5pp" | history.json | s42 −1.14pp, s0 −1.74pp post-peak | verified |
| XA-HC ep 21–23, best 0.954–0.958, final 0.946–0.952 | history.json ×3 | eps 23/21/22; best 0.9542/0.9579/0.9567; final 0.9455/0.9494/0.9523 | verified |
| "only arm whose val_acc falls substantially" | history.json all | confirmed: RN-Raw s42 dips to 0.8749 mid-run but ends 0.8903 near best; XA-Raw ends 1.1–1.7pp below best | verified |

### §3 EXP4 attention (lines 31–37)

| Claim | Artifact | Recomputed | Verdict |
|---|---|---|---|
| XA-HC s42 f_Bragg 0.020±0.109 / 0.059±0.122, p≈1e-25/1e-75 | exp4_attention_metrics.json | 0.0204±0.1092 / 0.0590±0.1220; p=2.46e-25 / 2.80e-75 | verified |
| XA-HC s0/s1 0.005/0.014, 0.018/0.021 | exp4_attention_metrics.json | s0 0.0052/0.0184; s1 0.0139/0.0212 | verified |
| XA-Raw s42 0.467±0.248 / 0.480±0.250, p≈1e-11/1e-69 | exp4_attention_metrics.json | 0.4667±0.2478 / 0.4797±0.2502; p=1.94e-11 / 4.35e-69 | verified |
| "500 correct val events per checkpoint" (L29) | exp4_attention_metrics.json | n_events=500, n_correct=442–483 | **mismatch (wording)** — 500 events *attempted*, 442–483 correct; metrics are over correct events only |

### §4 label-fix run (lines 41–46)

| Claim | Artifact | Recomputed | Verdict |
|---|---|---|---|
| val_acc 0.9214 @ ep13; 0.8913 @ ep3 | `runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/` | **dir contains only counterfactual_battery.json** — no history.json/metrics.json/config.yaml locally | **unbacked locally** (presumably from box logs; open question Q1) |
| "first-5 avg 0.69–0.83" for triton XA-Raw | history.json ×2 | s42 mean ep0–4 = 0.829; s0 = 0.645 | **mismatch (minor)** — s0's first-5 avg is 0.645, below the quoted 0.69 floor |

### §5–§7 (lines 48–97)

| Claim | Artifact | Recomputed | Verdict |
|---|---|---|---|
| "no checkpoints were synced off the box" (L53) | `find runs -name '*.pth'` | only EXP8 .pth files exist locally; zero EXP3 checkpoints | verified |
| checkpoint paths (L76–81) | runs/ tree | all 6 run dirs exist locally with matching timestamps | verified (paths plausible; .pth themselves remote-only) |
| "config.yaml, data_split.json, normalization_stats.json already local for all finished runs" (L72) | runs/ tree | present for all 11 finished runs; absent for label-fix (unfinished) | verified |
| "~11M params" (L97) | metrics.json | 11,227,138 (XA) / 11,234,178 (RN) | verified |
| "~45MB each" .pth (L71) | — | 11.2M params × 4B ≈ 45MB | verified [INFERENCE — file itself remote] |
| "--max-events 2000 --batch-size 64" (L101) | counterfactual_battery.json | n_events=2000 confirmed; batch_size not recorded in JSON | verified n; batch-size unbacked (trivial) |

### §8 battery first results (lines 103–114)

All five numbers match `runs/EXP3-XA-Raw-100k-seed42/20260922_185618/counterfactual_battery.json` exactly: original 0.8715, zero_q 0.8065 (−6.5pp), permuted_q 0.8715 (0.0), zero_cls 0.1935 (−67.8pp), zero_both 0.1950 (−67.7pp). **verified.**

"0.19 ≈ minority-class prevalence" (L114): val split is 25,000 events, 5 files × 25k, one minority file → prevalence 0.20 (data_split.json: stratify=true, test_size 0.2). zero_cls acc 0.1935 ≈ 0.20. **verified — and this is exactly the OOD-artifact signature the scout flagged: the model under zero_cls predicts (nearly) one class.**

### §9 battery all triton checkpoints (lines 122–132)

All 25 numbers match the five counterfactual_battery.json files exactly (recomputed cell-by-cell). **verified.**

| Sub-claim | Recomputed | Verdict |
|---|---|---|
| "permuted_q = original on all 5 (Δ ≤ 0.001)" | max \|Δ\| = 0.0005 | verified |
| "zero_q variance huge (0.30–0.90)" | range 0.297–0.8955 | verified |
| "Raw collapses (0.19/0.41); HC s42/s1 unaffected (0.954/0.957)" | exact | verified — **but s0-HC zero_cls = 0.7975 (−15.6pp) is a real exception to the clean Raw/HC split**; §9's wording "physics redundant on HC" holds for 2/3 HC seeds only. §12 acknowledges this; §9's observation (3) does not. |

### §10 diagnostics (lines 134–151)

| Claim | Artifact | Recomputed | Verdict |
|---|---|---|---|
| "68-dim head input" / "64-dim attended + 4 physics" | config.yaml | attn_dim=64 + physics_dim=4 = 68 | verified |
| "512-dim GAP" (RN) | backbone architecture | standard ResNet-18 GAP width | verified [consistent] |
| D1–D5 design table | — | no local outputs yet (`exp3_h1_diagnostics.py` exists, no result JSONs in runs/) | n/a — pre-registration, not results |

### §11 label-fix battery (lines 155–165)

All five numbers match `runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/counterfactual_battery.json` exactly: 0.7005 / 0.7925 (+9.2pp) / 0.7005 / 0.2075 (−49.3pp) / 0.5035 (−19.7pp). **verified as transcribed — but see Flag F2: this file may be the output of the buggy first battery run.**

### §12 finding (lines 173–182)

| Claim | Recomputed from battery JSONs | Verdict |
|---|---|---|
| XA-Raw s42: −6.5 / −67.8 / −67.7pp | −6.50 / −67.80 / −67.65→−67.7 | verified |
| XA-Raw s0: −57.1 / −45.7 / −9.6pp | −57.05 / −45.70 / −9.55 | verified |
| XA-HC s42/s0/s1 zero_q: −46.3/−5.8/−38.3pp | −46.25/−5.75/−38.30 | verified |
| XA-HC s42/s0/s1 zero_cls: **−0.1**/−15.6/−0.4pp | **+0.10**/−15.55/−0.35 | **mismatch — s42 zero_cls delta is +0.1pp, not −0.1pp** (JSON: zero_cls 0.954 > original 0.953). Cosmetic but it's a sign error in a published delta table |
| XA-HC zero_both: −14.6/−5.5/−15.6pp | −14.60/−5.45/−15.55 | verified |
| XA-Raw-lf: +9.2/−49.3/−19.7pp | +9.20/−49.30/−19.70 | verified as transcribed (Flag F2 applies) |
| "s0 zero_q ~9× worse than s42" | 57.05/6.50 = 8.8× | verified |
| "accuracy std 0.19–0.32pp" | 0.19/0.19/0.19/0.32pp across the four cells | verified |
| "permuted_q never moves accuracy (Δ=0)" | max \|Δ\| = 0.0005 | verified (Δ=0 is rounding; true bound ≤0.05pp) |

---

<!-- SOURCE-BODY-END -->
