> Origin: `fm-ar-results-audit` scout report; recorded 2026-09-24.

# EXP3 Results Audit — which quantitative claims are backed by current artifacts

**Auditor:** fm-ar-results-audit (scout, read-only on `/Users/Reid Hu/MATE-Automation`)
**Date:** 2026-09-24
**Scope:** every quantitative claim in `20_doc/EXP3_closing_analysis_2026-09-24.md` (closing doc) and `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md` (recording doc), plus the Results claims in `20_doc/paper/paper_anchor.md` (read-only), checked against `runs/EXP3-*/` artifacts (metrics.json, history.json, counterfactual_battery.json, exp4_attention_metrics.json, run_complete.json, config.yaml, run.log, data_split.json, normalization_stats.json) and `20_doc/audits/2026-09-23_raw-hc-input-audit.json`.

**Method:** recomputed all means/stds/deltas/z-tests from the JSONs with python3; ran `scripts/analysis/compare_exp3_runs.py` (reproduces the full 11-run table); grepped configs and source for recipe/label-map claims. "Unbacked" = the number cannot be reproduced from any artifact present in the local checkout (it may exist in box-side logs the lead has; flagged as open questions, not errors).

**Verdict summary:** the core result tables (§1, §2, §3, §8, §9, §11, §12 of the closing doc) are **numerically accurate** — every battery and metrics number recomputes exactly. The problems are: (a) one sign error, (b) two count/wording errors, (c) a block of unbacked numbers (label-fix val trajectory, EXP4 sink stats, most audit-derived numbers), (d) the label-fix battery file may be the known-buggy run, and (e) several headline claims rest on n=1 or on the contested zero_cls reading.

---

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

## 2. Recording doc `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md`

### Found / recovery (lines 19–23, 165, 190)

| Claim (line) | Artifact | Recomputed | Verdict |
|---|---|---|---|
| 294.5 min, early-stop ep19, best 0.8710@12 (L19) | run.log | "Training complete in 17669.3 seconds (294.5 minutes)"; "Early stopping … at epoch 19"; "best_val_metric=0.8710 at epoch 12" | verified |
| checkpoint 0.87100 vs recomputed 0.87116, diff 0.00016 vs 0.00010 (L20) | metrics.json `evaluation_recovery` + run.log RuntimeError | exact; "four events out of 25,000" = 0.00016×25000 = 4 | verified |
| acc 0.87116, macro-F1 0.77595, α-recall 0.54820 (L21) | metrics.json | exact | verified |
| label map {4:0, others:1} declares raw 4 = alpha; HDF5 labels constant-per-file 3He=0/4He=1/d=2/p=3/t=4 (L23) | src/data/dataloader.py:49; audit JSON `files[].raw_labels` | `_LABEL_MAP_BINARY = {4:0,0:1,1:1,2:1,3:1}`; audit files show constant raw_labels per file; `sim_..._t_...h5` is the minority file → triton = class 0 | verified |
| seed-0 crash: computed 0.87572 vs checkpoint 0.87584, diff 1.2e-4 (L165) | run_complete.json recovery_note | "diff 1.2e-4" confirmed; patched checkpoint value 0.87584 not in any local artifact | verified diff; **0.87584 unbacked locally** (open question Q2) |
| seed-0: acc 0.87572, cls-0 recall 0.5598, macro-F1 0.7839, CM [[2799,2201],[906,19094]] (L190) | metrics.json | exact | verified |
| Δacc vs s42 = +0.46pp; cell mean 0.87344 (L190) | metrics.json | +0.456pp; mean 0.87344 | verified |

### Input/recipe audit (lines 41–46, 66–70, 74–79, 91–95)

| Claim | Artifact | Recomputed | Verdict |
|---|---|---|---|
| Raw Ch0 occupancy ~1,955/3,840 median 1,956; HC ~113 | audit JSON | raw α mean 1955.98, median 1956; non-α mean 1955.47; HC α mean 114.3, non-α 112.4 (median not stored) | verified for Raw + HC mean; HC "median 113" unbacked (JSON has no HC quantiles) |
| Raw Ch0 sum ~43.66 (4He) vs HC ~3.61 | audit JSON | 43.6588 / 3.6123 (α class) | verified |
| "every sampled event changed in both channels" | audit JSON | not recorded | unbacked |
| pixel corr ~0.002; Jaccard ~0.029 (L44, L69, L95) | audit JSON | not recorded in JSON | **unbacked locally** (Q3) |
| class-conditional occupancy 1,955.98 vs 1,955.47 (L44) | audit JSON | exact | verified |
| lag-0 corr total_mass 0.692 / Iyz 0.440 / Izz 0.256; ~0 at lags ±1..5 (L66, L91) | — | no local artifact | **unbacked locally** (Q3) |
| Ch0 at HC pads 0.0115 vs unconditional 0.0114; top-114 pads distance 16.25 vs 16.28; dilated excess +0.0001 (L67) | normalization_stats.json | unconditional ch0_mean = 0.01145 ✓; HC-pad conditional stats not in any local file | unconditional verified; conditional numbers **unbacked** |
| per-event Ch0 max 0.124 vs noise-only ~0.114 (L67) | audit JSON | raw α max_ch0 mean 0.1237 ✓; "~0.114" ≈ HC max_ch0 mean 0.1134 — plausible but a cross-statistic comparison | verified / loose |
| noise σ≈0.028, ~51% occupancy (L67, L92) | — | 1956/3840 = 50.9% ✓ arithmetic; σ itself not in audit JSON | occupancy verified; **σ unbacked locally** |
| Ch1 +35% at HC pads (0.0255 vs 0.0189); near-track excess +0.005 (L68) | normalization_stats.json | unconditional ch1_mean = 0.0186 (≈0.0189); conditional numbers absent | unconditional ≈verified; conditional **unbacked** |
| 8 dihedral transforms: Raw Ch0 0.0108–0.0115; Ch1 peaks at identity 0.0245 (L93) | — | not in audit JSON | **unbacked locally** |
| recipe: lr 1e-4, AdamW wd 1e-4, batch 128, ls 0.05, clip 0.5, warmup 5, RLP(0.5/5/1e-6), patience 15 on val_loss, best-val-acc ckpt, no aug, mixed_precision, per_file_limit 25000, variance_floor ≤3,200 imgs seed=run-seed (L75–78) | config.yaml + normalization_stats.json | every field matches exactly; max_samples=3200, seed=42 | verified |
| physics features [Iyy,Izz,Iyz,total_mass] unnormalized (L74) | normalization_stats.json | only ch0/ch1 stats stored → consistent | verified [consistent] |
| `file_class_list` mechanism + `[1,1,1,1,0]` in (p,d,t,3He,4He) order (L50, L79, L84) | src/run_experiment.py:537–562; config.yaml hdf5_files order | mechanism exists; file order p,d,t,3He,4He matches | verified |
| run_experiment guard `allow_legacy_label_map` (L129) | src/run_experiment.py:383–400 | present | verified |

### Analysis + gates (lines 99–103, 128, 135–137, 141–161)

| Claim | Artifact | Recomputed | Verdict |
|---|---|---|---|
| XA-Raw −0.0213 vs RN-Raw (0.8712 vs 0.8924), z-p<0.0001; HC −0.0023 p=0.20 (L99) | compare_exp3_runs.py output | Δ=−0.0213 z-p=0.0000; Δ=−0.0023 z-p=0.1964 | verified |
| "RN-Raw climbs monotonically to 0.8924@18" (L100) | history.json | val_acc oscillates: 0.8824@4 → 0.8749@7 → 0.8693@9 → 0.8924@18 | **mismatch (qualitative)** — climbs overall but NOT monotonic; the contrast with XA-Raw still holds (RN ends near best, XA degrades) |
| train/val gap +0.140 (XA) / +0.110 (RN) (L100) | history.json | XA: 0.9994−0.8596 = 0.1398 ✓ (final); RN: 0.9999−0.8924 = 0.1075 ≈ 0.110 | verified |
| point-biserial \|r\| ≤ 0.038; total_mass CV 3% vs 27% (L101) | — | no local artifact | **unbacked locally** (Q3) |
| paper V6 opposite sign +1.6pp on Raw (L102) | compare_exp3_runs.py V6 block | 0.951−0.935 = +0.016 | verified |
| "all 10 finished runs" have full artifact set (L103); "10 completed local runs" (L85); "10 finished runs' metrics.json byte-identical md5" (L185) | runs/ tree | **11** runs now complete (seed-0 recovered + synced) | **stale** — count is 11; md5 claim unverifiable locally (no remote access) |
| seed-variance gate: stds 0.23/0.19/0.19pp < 0.5pp; deficit ~10× std (L128) | metrics.json | 0.231/0.188/0.189pp; 2.13/0.19 = 11.2× | verified (closing doc's "~8×" vs this "~10×" — see §1 note) |
| EXP4 sink: max weight 0.52, entropy 0.235·log(60), token 50 in 444/512 events, 2.1% on-track, corr −0.02 (L135) | exp4_attention_metrics.json | **file contains only f_Bragg + attn_charge_corr per class** — none of these fields | **unbacked locally**; also n=512 here vs n_events=500 in the synced JSON — the sink stats came from a different/older eval not present locally (Q4) |
| "all three HC seeds f_Bragg ≤ 0.02" (L136) | exp4_attention_metrics.json | s42 = 0.0204 | verified at 3 decimals; strictly 0.0204 > 0.02 (rounding) |
| "f_Bragg ≈ 0.47, 2.3× null" (L136) | exp4_attention_metrics.json | 0.467/0.20 = 2.33× | verified |
| seed-0 progress values ep10–18 (L141/147/153/161) | history.json | 0.8505/0.8595/0.8497/0.8545/0.8692/0.8653/0.8583 all exact | verified |
| zero_physics_query flag + override hooks (L107, L202) | src/models/model.py:133,158,263–264 | present | verified |
| `query_mode: learned` (L202) | src/models/model.py:136 | present | verified |

---

## 3. `20_doc/paper/paper_anchor.md` (read-only)

Contains **no quantitative results to audit** — it is framing + policy. The two numeric-adjacent statements check out: "all quantitative results are single-seed (seed 42); never present deltas as seed-robust" (policy, and this audit confirms the EXP3 record complies — every multi-seed claim cites n); "¹³C/¹⁴C ≈ 8%" via ΔA/A = 1/13 ≈ 7.7% (trivially correct). The anchor's own gate — "do not anchor a directional or quantitative result until its current artifacts pass the result audit" — is directly relevant to flags F1–F3 below.

---

## 4. Cross-cutting flags

**F1 — zero_cls "load-bearing" claims sit at minority-class prevalence (OOD-artifact risk).** zero_cls accuracy = 0.1935 (Raw s42), 0.2075 (label-fix), vs. minority prevalence 0.20 — the model collapses to predicting ~one class, exactly the scout's OOD-bias signature. The closing doc already hedges §8 ("ambiguous … D5 decides") but §9 observation (3) still says "classifier leans on physics" and §11 observation (3) says "dependence is task-invariant on Raw" — both stronger than the evidence until `permuted_cls`/`mean_cls` (D5) lands. Also note s0-HC zero_cls = 0.7975 (−15.6pp): the "physics redundant on HC" reading holds for only 2 of 3 HC seeds.

**F2 — the label-fix battery JSON may be the known-buggy run.** §12's own caveat says the first battery run had a positional-label bug (`_assigned_classes` not re-sliced after subset cap) and a corrected re-run was in flight. The local file (`runs/EXP3-XA-Raw-100k-label-fix-seed42/20260923_154749/counterfactual_battery.json`, mtime Sep 24 13:41 vs 13:36 for the triton files) carries no script-version field, so I cannot tell which run produced it. **Every 4He number — including the headline "+9.2pp zero_q sign flip" (§11, §12) — is provisional until the lead confirms the file's provenance.** If it is the buggy run, the labels were positionally wrong and the row is void.

**F3 — single-seed / fragile-n claims presented near-headline level.** (a) The +9.2pp sign flip rests on one undertrained (ep13, still-climbing) checkpoint — the doc caveats this well, but §12 elevates it to a titled "Finding". (b) XA-Raw attention "track-focused" (§3, recording L136) is seed 42 only — no XA-Raw s0 attention metrics exist. (c) The XA-Raw deficit itself is n=2 — fine, but the "~8×/~10× seed std" framing should name its denominator.

**F4 — unbacked number clusters** (probably fine, but not auditable locally): label-fix val trajectory (0.9214@13, 0.8913@3); EXP4 sink stats (0.52 max-weight, 0.235·log60 entropy, token-50 444/512, 2.1% on-track, corr −0.02); audit-derived numbers (Jaccard 0.029, pixel corr 0.002, lag-corrs, σ≈0.028, dihedral transforms, Ch1 +35%, point-biserial ≤0.038, CV 3%/27%); seed-0 patched checkpoint 0.87584; box-side operational claims (md5-identical sync, PIDs, waiters). Recommend the lead sync the raw outputs behind these (audit script stdout/JSON, exp4 script full output, label-fix history.json) or mark them "box-log only".

**F5 — minor mismatches to fix in the docs:** "12 completed runs" → 11 (closing L7; recording L79 says 12 too); "500 correct val events" → 500 attempted / 442–483 correct (closing L29); s42-HC zero_cls delta −0.1pp → +0.1pp (closing L177); "climbs monotonically" → climbs with oscillation (recording L100); "first-5 avg 0.69–0.83" → 0.65–0.83 (closing L44); "all 10 finished runs" → 11 (recording L103/L185).

---

## 5. Prioritized corrections for the lead

1. **Confirm provenance of the label-fix `counterfactual_battery.json`** (buggy vs fixed script) before quoting any 4He battery number — the +9.2pp sign flip is the campaign's most quotable new finding and currently sits on a possibly-void artifact. Add a script-version/git-hash field to the battery JSON schema.
2. **Downgrade zero_cls language** in §9/§11 from "leans on physics"/"dependence is task-invariant" to the §8-style hedge everywhere until D5 (`permuted_cls`/`mean_cls` + predicted-class histogram) lands; note the s0-HC −15.6pp exception in §9.
3. **Fix the five small errors** (F5): run count 12→11, "500 correct"→"500 evaluated (442–483 correct)", s42-HC zero_cls sign, "monotonically", first-5 range.
4. **Sync or cite the backing artifacts** for the F4 clusters — especially label-fix `history.json` (the 0.9214 claim is currently unverifiable locally) and the full EXP4 sink output (the 444/512-token-50 stats are not in the synced JSON and use n=512 vs the synced n=500).
5. **State the denominator** in "8×/10× seed std" claims (RN-Raw std 0.19pp → 11.2×; XA-Raw n=2 std 0.32pp → 5.4×) and flag the XA-Raw deficit as n=2 wherever it headlines.

## 6. Open questions (need lead/box access)

- **Q1:** label-fix `history.json`/`metrics.json` — do they exist on box? Needed to back 0.9214@ep13 / 0.8913@ep3.
- **Q2:** seed-0 patched checkpoint `best_val_acc` = 0.87584 — confirmable only on box.
- **Q3:** raw outputs behind the input-audit numbers (Jaccard, lag-corr, σ, dihedral, Ch1 elevation, point-biserial, CV) — which script/file produced them? `2026-09-23_raw-hc-input-audit.json` does not contain them.
- **Q4:** EXP4 sink stats (max-weight, entropy, argmax/token-50 histogram, on-track %) — which eval produced 444/512? The synced `exp4_attention_metrics.json` (n=500) lacks these fields.
- **Q5:** is the local label-fix `counterfactual_battery.json` the pre-fix or post-fix run?

## Appendix — commands used

```bash
# metrics dump: for d in runs/EXP3-*/*/; cat $d/metrics.json
# battery:      cat runs/EXP3-*/*/counterfactual_battery.json  (6 files)
# attention:    cat runs/EXP3-*/*/exp4_attention_metrics.json  (4 files)
# dynamics:     python3 -c 'history.json → best/final/first-5 val_acc, train_acc'
# table:        python3 scripts/analysis/compare_exp3_runs.py
# audit:        python3 -c 'walk 20_doc/audits/2026-09-23_raw-hc-input-audit.json'
# recipe:       cat runs/EXP3-XA-Raw-100k-seed42/20260922_185618/config.yaml
# label map:    grep _LABEL_MAP_BINARY src/data/dataloader.py  (line 49)
# guard:        grep allow_legacy_label_map src/run_experiment.py  (lines 383-400)
# hooks:        grep physics_query_override src/models/model.py  (lines 263-264)
# recovery:     metrics.json → evaluation_recovery; run.log tail (RuntimeError, 294.5 min)
# checkpoints:  find runs -name '*.pth'  → only EXP8 (no EXP3 weights local)
```
