<!-- Verbatim source section; overview: [[../fm-ar-results-audit]] -->
<!-- SOURCE-BODY-START -->
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

<!-- SOURCE-BODY-END -->
