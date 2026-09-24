> Origin: `fm-ar-referee` scout report; recorded 2026-09-24.

# fm-ar-referee — hostile-referee attack ranking + seed-robust evidence inventory (EXP3)

**Date:** 2026-09-24 · **Worker:** fm-ar-referee (scout) · **Scope:** read-only on live checkout `/Users/Reid Hu/MATE-Automation` (`runs/` is gitignored, read there); CPU-local analysis only. No box-176/AutoDL/IMP contact. No manuscript or lead files touched.
**Inputs consumed:** all 12 prior scout reports (`fm-ar-{capacity-critique,comparisons,seed-evidence,results-audit,difficulty,ood-leakage,gpu-plan-draft,attn-sink,feature-norm,transfer,hc-vs-raw,methods-audit}`), `20_doc/EXP3_closing_analysis_2026-09-24.md`, `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md`, and a fresh re-inventory of `runs/EXP3-*/` (this report re-verified every artifact it cites — see §B.6 for what changed since the earlier scouts).

---

# PART A — Ranked referee attacks (max 12)

Ranking = (probability a competent referee raises it) × (damage to the paper's claims if unanswered). "Cost" assumes box-176 CPU rules: 2 GB cgroup, `--max-events 2000 --batch-size 64`, ~5–10 min per battery condition, proven by the 6-checkpoint battery already run there.

## A1. Every headline number is the wrong task — the label bug
- **Hits:** the paper's central claim (XA > RN, advantage grows on Raw) and every EXP3 number presented as "4He/α-vs-rest".
- **Why it bites:** all 11 completed runs used `_LABEL_MAP_BINARY {4:0,…}` where raw label 4 = **triton**, not 4He (`src/data/dataloader.py:49`; audit `raw_labels` constant-per-file, `sim_..._t_...h5` is the minority file). On the triton task the physics-informed arm is *significantly worse* exactly where the paper predicted the largest advantage (Raw: −1.33/−2.13pp, McNemar-guaranteed p≤0.035/7.5e-4). A referee who spots the label map asks: "your mechanism story was built on the wrong task — why should any of it transfer?"
- **Already answered?** Partially — the campaign is transparent about it (closing doc §1, §4) and one true-4He run exists (XA-Raw-lf s42: test 0.92136, α-recall 0.7254). But the paired comparator (RN-Raw-lf) does not exist, so the sign of Δ_Raw on 4He is **unknown**. Not answerable from disk.
- **Cheapest check:** **needs GPU** — RN-Raw-lf s42 (~4.8h train, ~6.2h wall) is the single decisive run; completing the 4He 2×2 adds XA-HC-lf + RN-HC-lf (~6.4h train). No CPU substitute exists: the comparator is a trained model, not an analysis.

## A2. `zero_cls` collapse may be an OOD artifact, not information dependence
- **Hits:** C6 "classifier-side physics load-bearing on Raw" and every "physics is load-bearing" sentence.
- **Why it bites:** zero_cls accuracy lands at 0.1935/0.2075 ≈ minority prevalence 0.20 — the signature of an MLP pushed off-distribution into predicting one class, not of losing informative features (fm-ar-capacity-critique §2; fm-ar-results-audit F1). If `permuted_cls` recovers accuracy, "load-bearing" is dead: the features are a static bias, and the collapse was a zeroing artifact. The closing doc hedges §8 but §9/§11 still say "leans on physics"/"task-invariant" — stronger than the evidence.
- **Already answered?** **No.** All 6 synced battery JSONs predate D5 — none contain `permuted_cls`/`mean_cls`/`pred_histograms` (verified: files are 458–482 bytes, 5 conditions only). `d5_chain.sh` is queued on box (closing doc §15).
- **Cheapest check:** **CPU, ~1–2h on box 176** — `permuted_cls` + `mean_cls` + predicted-class histogram on all 6 XA checkpoints (conditions already added to `exp3_counterfactual_battery.py`). `mean_cls` is the cleanest discriminator (fm-ar-feature-norm §7 D6a): preserves the Izz≈170 DC, destroys event content. `mean_cls ≈ original` → static-bias artifact; `mean_cls ≈ zero_cls` → genuine dependence.

## A3. The `permuted_q` test is underpowered on Raw — "H3 refuted" is really an HC result
- **Hits:** C5 "physics query carries no event-specific signal (H3 refuted)" — the campaign's most-quoted mechanism fact.
- **Why it bites:** on Raw the physics features are near-constant (total_mass CV ≈ 3%, |r| ≤ 0.038; recording doc L101). Permuting near-constant features produces near-identical queries, so Raw's Δ=0 barely probes anything — the query is *nearly constant by construction*, which yields the same conclusion via a different mechanism. The strong evidence is HC (CV ≈ 27%) (fm-ar-attn-sink §2 caveat; fm-ar-feature-norm §3c: the query is a ~383-norm vector dominated by a fixed Izz DC term, so permutation barely moves it on *either* representation).
- **Already answered?** Partially — fm-ar-attn-sink and fm-ar-feature-norm both flag it; the closing doc does not. The claim survives but must be re-worded: "query content-free" is proven on HC; on Raw it is "query nearly constant by construction."
- **Cheapest check:** **CPU, ~5 min on box 176** — dump per-event attention maps under `original` vs `permuted_q` on XA-Raw-s42 + XA-HC-s42 and record `max|α_orig − α_perm|` + argmax-agreement (~10 lines in `exp4_attention_metrics.py`). Upgrades "accuracy-invariant" to "map-invariant" and simultaneously answers whether Raw's map is event-adaptive or a fixed spatial prior (the one measurement never recorded for Raw).

## A4. Battery statistics: n=2000, unrecorded subset, val-set reuse
- **Hits:** every counterfactual number and the "Δ=0" claims.
- **Why it bites:** (a) n=2000 → a single-event flip is 0.05pp; "Δ ≤ 0.0005" means "≤1 event in 2000" — the claim "no event-specific signal" is really "affects <~0.2% of predictions," and effects below ~0.5pp are undetectable. (b) The battery JSONs record `n_events: 2000` but **not which events** — whether all 5 conditions and all 6 checkpoints saw the same subset is unverifiable from the artifacts; if subsets differ, cross-checkpoint comparisons carry subset noise. (c) The battery runs on the **val** split — the same events used for best-checkpoint selection — so `original` accuracies are mildly optimistic (selection bias), though condition *deltas* are unaffected.
- **Already answered?** No — not flagged in any prior report or the closing doc.
- **Cheapest check:** **CPU, ~2–4h on box 176** — re-run the battery on the full 25k val set (12.5× a 2000-event condition ≈ tens of minutes per condition) and record `event_indices` in the JSON schema. At n=25k, Δ=0.0005 would bound the effect at <0.02pp — an order of magnitude tighter. Minimum: add `event_indices` + a script-version field to the JSON (the missing version field is exactly why audit flag F2 couldn't tell buggy from fixed battery output).

## A5. The XA-Raw deficit may be an optimization artifact, not capacity
- **Hits:** C2 (XA < RN on Raw) and the H1a-capacity reading.
- **Why it bites:** XA-Raw is the only arm whose val_acc *falls* after peaking (best ep 7/12 → final −1.1/−1.7pp; closing doc §2). The recipe (lr 1e-4, dropout 0.3, wd 1e-4, bs 128, ls 0.05 — identical across all 12 configs, verified) was inherited, not tuned per-arm. A referee asks: "did you try *any* hyperparameter variation on the losing arm? A model that peaks at epoch 7 and degrades is under-regularized or over-noised, not necessarily capacity-limited." The deficit could shrink or vanish with lower lr / higher dropout / physics-input noise regularization.
- **Already answered?** Partially — closing doc §2 uses the degradation as evidence *for* H2 over H1a, but no control run exists. D1–D4 probes (in flight) localize the bottleneck but cannot exclude "a better-tuned XA-Raw matches RN-Raw."
- **Cheapest check:** **needs GPU** for the real answer (one XA-Raw run with e.g. dropout 0.5 or lr 3e-5, ~5h). CPU-partial: D1/D3 probes (in flight) bound how much is representation vs head — if `probe_XA ≈ probe_RN`, the capacity story dies regardless of tuning.

## A6. The deficit concentrates in minority recall — threshold/class-balance confound
- **Hits:** C2/C3 — the headline "XA loses 4.9–8.7pp minority recall."
- **Why it bites:** no class weights were used (`class_weights: None` in all configs, verified) and the decision threshold is the default argmax. On an 80/20 imbalance, a small logit shift moves minority recall a lot. A referee asks: "is the deficit a capability gap or a calibration artifact that a threshold sweep or class weighting removes?" Balanced accuracy (recomputed, §B.4): XA-Raw 0.750/0.757 vs RN-Raw 0.775–0.796 — the gap survives in balanced terms (−2.6 to −4.6pp), so this attack *weakens* but does not die without a per-event threshold analysis.
- **Already answered?** Partially — this report's balanced-accuracy recomputation (§B.4) shows the gap persists; no prior report computed it.
- **Cheapest check:** **CPU, minutes on box 176** — once `predictions.csv` dumps land (predump_chain), sweep the class-0 decision threshold on paired XA-Raw/RN-Raw predictions: if XA matches RN at some threshold, the deficit is calibration; if no threshold closes it, it is capability. Zero new inference needed — works on the dumps already queued.

## A7. Capacity confound: 68-dim head input vs 512-dim GAP is not a controlled comparison
- **Hits:** the H1a/H1b framing and any "physics crowds the head" claim.
- **Why it bites:** XA's classifier sees `attended(64) ⊕ physics(4)` = 68 dims; RN sees `GAP(512)`. "Physics features hurt" and "a 68-dim bottleneck hurts" are confounded — the XA arm is *also* the narrower-head arm. A referee notes the experiment varies two things at once (physics pathway AND head width) and attributes the effect to one.
- **Already answered?** Partially — D1/D3 probes (in flight) test whether the 68-dim representation is intrinsically weaker; fm-ar-capacity-critique §1 notes `probe_XA ≈ probe_RN` does not cleanly confirm H1b (could be MLP optimization failure).
- **Cheapest check:** **CPU-partial:** D1/D3 (in flight). **Decisive answer needs GPU:** `attn_dim: 512` capacity-matched XA run (~5.5h, already staged in the mechanism pack) — the only run that deconfounds width from physics.

## A8. Physics features are unnormalized — and the manuscript says they are standardized
- **Hits:** the mechanism story (all of it) + manuscript accuracy.
- **Why it bites:** features enter raw (`dataset.py:472-475`, Req-7.2); `Izz` ≈ 170 dominates the 4-vector's L2 norm (>99.9%), contributes a ~386-norm DC to the query and fixes 108/128 hidden ReLU signs (fm-ar-feature-norm §3). `main.tex:170,207` claims the features "are standardized using training-set statistics" — false for both the reproduction and the published legacy runs (fm-ar-methods-audit M1). A referee who checks the code finds the paper describes a normalization that would have prevented the mechanism under study. Worse: if the deficit/leak is a *scale artifact*, "physics-informed fails" becomes "unnormalized-input fails" — a bug, not a finding.
- **Already answered?** Mechanism quantified (feature-norm report); manuscript mismatch documented (methods-audit M1 — captain's file, flagged not touched). No normalized-input control exists.
- **Cheapest check:** **CPU, ~30 min on box 176** — `scaled_cls` battery condition (z-score classifier physics with train stats): `scaled_cls ≈ original` → content-driven (scale harmless); `scaled_cls ≪ original` → magnitude-driven → the deficit is a normalization bug. D6a+D6b together form a content×magnitude 2×2 that fully decomposes the zero_cls ambiguity (fm-ar-feature-norm §7). **GPU** only for the clean retrain with normalized physics (~5h, gated on the battery readout).

## A9. No traditional baseline on the classification task — doctrine violation
- **Hits:** the paper's fair-comparison doctrine (classification leg).
- **Why it bites:** energy regression has 5 pinned classical baselines (21/21 Wilcoxon); angle has a literature overlay; **classification has nothing** — no traditional classifier has ever touched the Garfield task (fm-ar-comparisons §1). A referee applying the paper's own standard asks "where is the non-deep baseline?"
- **Already answered?** In flight — D2 (physics-features LogReg) *is* that baseline; it must be reported with α-recall vs RN-Raw 0.8925/0.636, not just accuracy (comparisons report rank 1).
- **Cheapest check:** **CPU, free** — harvest D2 from the lead's diagnostic run already on box (`exp3_h1_diagnostics.py` implements it). Caveat for the writeup: the LogReg standardizes features while the deep model doesn't (fm-ar-feature-norm §4) — if D2 is weak on Raw, part of the gap is optimization, not information.

## A10. Attention-mechanism claims rest on single-seed, ad-hoc, unreproduced evals
- **Hits:** C10 (HC sink / Raw Bragg-focus) and the "physics-guided attention" narrative.
- **Why it bites:** (a) Raw Bragg-focus (f_Bragg 0.467) is **seed-42 only** — XA-Raw-s0 attention metrics were never produced. (b) The headline sink stats (87% argmax on token 50, 444/512, max-weight 0.52, 2.1% on-track) come from an ad-hoc eval whose output exists nowhere — the synced `exp4_attention_metrics.json` (n=500) lacks every one of those fields (results-audit F4/Q4). (c) `exp4_attention_metrics.py` persists no per-event argmax, so no argmax claim is reproducible from artifacts. (d) Token 50 is an edge-adjacent near-empty block, **not** the beam hole (fm-ar-attn-sink §1) — the "attention finds the physics" framing is backwards: on HC it finds a register.
- **Already answered?** HC sink is seed-robust (3/3, f_Bragg ≤ 0.02). Everything else: no.
- **Cheapest check:** **CPU, ~1h on box 176** — run `exp4_attention_metrics.py` on XA-Raw-s0 and XA-Raw-lf (never run), plus Check A from A3 (per-event argmax persistence). Makes every attention claim a reproducible artifact.

## A11. The s0-anomaly interpretation is fragile — and the closing doc's "does not replicate" is wrong
- **Hits:** C9 (XA-Raw-s0 `zero_both 0.772 > zero_cls 0.41`) and the two-pathway-interaction story.
- **Why it bites:** the anomaly is n=1 checkpoint by definition; the capacity-critique's covariance-break explanation is plausible but untested. **New finding this report:** closing doc §10 NOTE says "the s0 anomaly does not replicate [on 4He]" — but the corrected 4He battery has `zero_both 0.5235 > zero_cls 0.1935` (+33pp), i.e. the anomaly's *signature* (zero_both ≫ zero_cls) **does** replicate, more strongly than on triton s0 (+36pp vs +33pp gap). The doc compared absolute values (0.5235 vs 0.772), not the ordering that defines the anomaly. A referee reading the JSONs catches this.
- **Already answered?** No — the misstatement is in the closing doc itself.
- **Cheapest check:** **CPU, ~1h on box 176** — `zero_both`/`zero_cls` on the remaining checkpoints is already in hand (6/6 done); what is missing is the *decomposition*: run `zero_q`-only vs `zero_cls`-only vs `zero_both` with predicted-class histograms (D5 chain covers the histogram part) to test whether zero_both lands at majority-baseline (covariance-break) or at a third class pattern. Also: XA-Raw-seed1 checkpoint (missing) would give a second triton-Raw anomaly test — needs GPU (~5.5h) only if the campaign keeps triton reporting.

## A12. No held-out test set — val doubles as model-selection and reporting set
- **Hits:** every accuracy number.
- **Why it bites:** the split is 80/20 train/val (`data_split.json`: `test_size: 0.2`, `stratify: true` — there is no third split). Best-epoch checkpoint selection, early stopping (patience on val_loss), and all reported metrics use the *same* 25k events. With best-val selection over ~20–38 epochs the optimistic bias is small (~0.1–0.3pp typical) but nonzero, and a referee can note the paper's tightest claims (HC Δ = −0.08pp mean) are smaller than the plausible selection bias.
- **Already answered?** No — undisclosed anywhere.
- **Cheapest check:** **CPU, ~1–2h on box 176** — re-evaluate each best checkpoint on a held-out *subset of the train split* (e.g. 5k train events never used for selection) to bound the selection bias; or disclose "metrics are val-set, selection bias ≤ best-val minus final-epoch gap" (measurable from history.json for free: XA-Raw s42 best 0.8710 vs final 0.8596 — the selection premium is visible). For the paired Δ claims the bias is arm-symmetric and largely cancels — worth one sentence.

### Attacks considered and ranked out (honorable mentions)
- **EXP8 carbon-leak as counter-evidence** (physics features *hurt* OOD): already a documented finding (fm-ar-ood-leakage); strengthens rather than attacks the mechanism story. E2 clipped-physics eval is queued.
- **Train/val leakage via paired Raw/HC events:** Raw[i] and HC[i] are the same physical event, but splits are within-representation so no cross-contamination; same-seed val_indices are byte-identical across arms — this is a *feature* (enables pairing), not a leak.
- **n=2000 battery vs 25k metrics mismatch:** folded into A4.
- **p–t difficulty outlier** (Z²A ordering): folded into the difficulty report's open questions; C6 energy-confound check queued — secondary to the 12 above.

---

# PART B — Seed-robust evidence from on-disk artifacts

## B.1 Run inventory (re-verified 2026-09-24, live checkout)

12 run dirs under `runs/EXP3-*/`. **No `best_model.pth` exists locally** (`find runs -name '*.pth'` → only two EXP8 checkpoints). `import torch` fails locally. No Garfield H5 locally.

| Run | seed | status | metrics | history | split | preds | battery | attn | train time |
|---|---|---|---|---|---|---|---|---|---|
| ResNet-HC s0 | 0 | complete | ✓ 0.95448 | ✓ | — | — | n/a | n/a | 3.42h |
| ResNet-HC s1 | 1 | complete | ✓ 0.95748 | ✓ | — | — | n/a | n/a | 2.96h |
| ResNet-HC s42 | 42 | complete | ✓ 0.95908 | ✓ | ✓ | **✓ 25k** | n/a | n/a | 2.77h |
| ResNet-Raw s0 | 0 | complete | ✓ 0.88904 | ✓ | — | — | n/a | n/a | 4.84h |
| ResNet-Raw s1 | 1 | complete | ✓ 0.89224 | ✓ | — | — | n/a | n/a | 4.59h |
| ResNet-Raw s42 | 42 | complete | ✓ 0.89248 | ✓ | — | — | n/a | n/a | 4.89h |
| XA-HC s0 | 0 | complete | ✓ 0.95412 | ✓ | — | — | ✓ | ✓ | 2.93h |
| XA-HC s1 | 1 | complete | ✓ 0.95788 | ✓ | — | — | ✓ | ✓ | 3.49h |
| XA-HC s42 | 42 | complete | ✓ 0.95676 | ✓ | — | — | ✓ | ✓ | 3.52h |
| XA-Raw s0 | 0 | recovered¹ | ✓ 0.87572 | ✓ | ✗ 0-byte | — | ✓ | — | ~5.6h² |
| XA-Raw s42 | 42 | complete | ✓ 0.87116 | ✓ | ✓ | — | ✓ | ✓ | 4.91h |
| XA-Raw-lf s42 (4He) | 42 | **complete**³ | ✓ 0.92136 | ✓ | ✗ 0-byte | — | ✓ **corrected**⁴ | — | ~5.4h est |

¹ `run_complete.json` status "recovered": evaluator guard crash on AMP/FP32 drift (diff 1.2e-4); checkpoint metadata patched, weights untouched. `data_split.json` is 0 bytes (sync truncation).
² s0 run.log absent locally; estimate from 23 ep × 14.7 min/ep.
³ **Changed since seed-evidence report:** `metrics.json` + `history.json` + `config.yaml` now synced (early-stopped ep22, best val 0.9214 @ ep13). 4He 2×2 is 1/4 done.
⁴ **Changed:** the local `counterfactual_battery.json` is now the **corrected** run (original 0.9275, zero_q 0.8065, permuted_q 0.9275, zero_cls 0.1935, zero_both 0.5235) — resolves audit flag F2. The buggy 0.7005 file is gone.

**Grid:** triton 2×2 = 11/12 cells (XA-Raw-s1 missing). 4He 2×2 = 1/12 (XA-Raw-lf s42 only).

**Split determinism (re-verified):** the two s42 `data_split.json` files have **byte-identical `val_indices`** (n=25,000, `test_size 0.2`, `stratify: true`) → same-seed arms evaluate on the same events; paired in principle. The lf run's split is 0 bytes locally — re-pull needed before pairing it.

## B.2 Local CPU inference feasibility — NO (three independent blockers)

1. No EXP3 checkpoints local (all on box 176). 2. No torch on this Mac. 3. No Garfield H5 (~25GB, box-only).
**Feasible on box 176 (proven):** the 6-checkpoint × 5-condition battery already ran there CPU-only under the 2GB cap. Full-25k inference ≈ 12.5× a battery condition ≈ tens of minutes per checkpoint; ~2–4 CPU-h for all 11. **Do not pull H5 to the Mac; run on-box, sync `predictions.csv` (~1MB each).** Under an hour locally: impossible.

## B.3 Seed statistics — triton task, n=25,000 val/run (recomputed)

| Arm | seeds | per-seed acc | mean ± sd | t-95% CI on mean | class-0 recall |
|---|---|---|---|---|---|
| RN-HC | 0,1,42 | 0.95448/0.95748/0.95908 | **0.95701 ± 0.0023** | [0.9512, 0.9628] | 0.847/0.839/0.848 |
| XA-HC | 0,1,42 | 0.95412/0.95788/0.95676 | **0.95625 ± 0.0019** | [0.9515, 0.9611] | 0.830/0.854/0.828 |
| RN-Raw | 0,1,42 | 0.88904/0.89224/0.89248 | **0.89125 ± 0.0019** | [0.8865, 0.8960] | 0.609/0.578/0.636 |
| XA-Raw | 0,42 | 0.87572/0.87116 | **0.87344 ± 0.0032** | [0.8445, 0.9024] (n=2, wide) | 0.560/0.548 |
| XA-Raw-lf (4He) | 42 | 0.92136 | single | — | 0.725 |

## B.4 Paired comparisons (same-seed, n=25,000)

Per-event predictions exist for only **one** run (RN-HC-s42) → true McNemar/paired-bootstrap **not computable**. Substitutes: unpaired two-proportion z (conservative — same val events → positive covariance → paired test strictly more powerful) and the McNemar lower bound χ² ≥ n·Δ² (needs only the two accuracies; a guaranteed significance floor).

| Comparison | Δ acc (XA−RN) | unpaired z (p) | McNemar χ² ≥ nΔ² (p ≤) | Δ bal-acc | Δ class-0 rec |
|---|---|---|---|---|---|
| HC s0 | −0.04pp | −0.19 (0.85) | ≥0.004 (≤0.95) | −0.66pp | −1.7pp |
| HC s1 | +0.04pp | +0.22 (0.82) | ≥0.004 (≤0.95) | +0.56pp | +1.4pp |
| HC s42 | −0.23pp | −1.29 (0.20) | ≥0.13 (≤0.71) | −0.93pp | −2.1pp |
| **Raw s0** | **−1.33pp** | **−4.62 (3.8e-6)** | **≥4.44 (≤0.035)** | **−2.67pp** | **−4.9pp** |
| **Raw s42** | **−2.13pp** | **−7.38 (1.5e-13)** | **≥11.36 (≤7.5e-4)** | **−4.62pp** | **−8.7pp** |

New this report — **balanced accuracy** (from confusion matrices): the Raw deficit survives balancing (−2.7/−4.6pp), so it is not purely a threshold artifact (attack A6 weakened, not killed).

**Representation effect (HC − Raw), same arch+seed:** RN +6.54/+6.52/+6.66pp; XA +7.84/+8.56pp — 5/5 same sign, ~30× seed sd. Seed-robust.

## B.5 Verdict per paper claim

| # | Claim | Verdict | Evidence |
|---|---|---|---|
| C1 | XA ≈ RN on HC (triton) | **seed-robust** (3 seeds) | Δ ∈ [−0.23,+0.04]pp; McNemar bound can't reach p<0.05 |
| C2 | XA < RN on Raw (triton) | **seed-robust on observed seeds; grid incomplete** | 2/2 seeds, McNemar-guaranteed p≤0.035/7.5e-4; survives balanced-acc; seed1 missing |
| C3 | Deficit concentrates in minority recall | **seed-robust** (2/2) | ΔC0rec −4.9/−8.7pp; bal-acc gap −2.7/−4.6pp |
| C4 | HC > Raw | **seed-robust** (5/5 pairs) | +6.5 to +8.6pp |
| C5 | Query content-free (H3 refuted) | **seed-robust + task-robust, with a power caveat** | permuted_q Δ=0 on 6/6 ckpts — but on Raw the query is ~constant by construction (A3); strong form proven on HC only |
| C6 | Classifier physics load-bearing on Raw | **direction-robust, interpretation unresolved** | zero_cls collapse 3/3 Raw ckpts + 4He — but OOD-artifact reading open until D5 (A2) |
| C7 | Physics redundant in HC head | **seed-variable** | zero_cls Δ +0.1/−0.4/−15.6pp — holds 2/3 seeds only |
| C8 | zero_q hurts | **seed-robust direction, wild magnitude** | −5.8 to −57.1pp triton; −12.1pp on corrected 4He (the +9.2pp flip is retracted — buggy-label artifact) |
| C9 | s0 anomaly (zero_both > zero_cls) | **single-seed; signature replicates on 4He** | 4He: zero_both 0.5235 > zero_cls 0.1935 — closing doc's "does not replicate" is wrong (A11) |
| C10 | HC sink / Raw Bragg-focus | sink **seed-robust** (3/3); Bragg-focus **single-seed** | XA-Raw-s0/lf attention never run; sink stats unreproduced (A10) |
| C11 | **Central claim: XA > RN, grows on Raw** | **contradicted on triton; untested on 4He** | C2; 4He 2×2 = 1/4 (XA-Raw-lf only, no comparator) |
| C12 | 4He learnable by XA-Raw | **single-seed, now a real converged number** | test 0.92136, α-recall 0.7254, ep13-best — but no RN comparator and no second seed |
| C13 | Any EXP3 number as a 4He result | **illegal except the lf run** | label bug; only `file_class_list [1,1,1,1,0]` run is true 4He |

**Honest paper position today:** on the (mislabeled) triton task the physics-informed arm never beats the generic baseline and is significantly worse exactly where the largest advantage was predicted. On the true 4He task exactly one arm of one cell exists (XA-Raw 0.9214) with no comparator — the central claim is untestable from disk. The strongest publishable mechanism facts are C5 (query content-free, 6/6 — with the Raw power caveat) and the *documented* OOD side-channel (EXP8 carbon leak + zero_cls collapse, pending D5).

## B.6 What changed since the earlier scouts (verified today)

1. Label-fix run **completed and synced**: metrics.json (0.92136), history.json (22 ep, early-stopped), config.yaml (`file_class_list [1,1,1,1,0]`). Was "partial/killed" in seed-evidence; "completed" in gpu-plan-draft.
2. Label-fix `counterfactual_battery.json` is now the **corrected** run (0.9275 original) — audit flag F2 resolved; the buggy 0.7005 JSON is no longer on disk.
3. Still missing: `data_split.json` 0 bytes for XA-Raw-s0 and XA-Raw-lf; no `predictions.csv` beyond RN-HC-s42; no `h1_diagnostics.json` (D1–D4 not yet synced); no D5 conditions in any battery JSON; no `exp4_attention_metrics.json` for XA-Raw-s0 or XA-Raw-lf.

## B.7 Minimum further runs to close each gap

Ordered by information-per-cost. GPU-hours measured from run.logs (RN-HC ≈3.1h, RN-Raw ≈4.8h, XA-HC ≈3.3h, XA-Raw ≈4.9–5.6h; wall ≈ train ×1.3).

| Gap | Action | Cost | Unlocks |
|---|---|---|---|
| **G0 — paired stats** | On box 176 CPU: `exp3_dump_predictions.py` on all 11 ckpts + re-sync the two 0-byte splits | **0 GPU-h; ~2–4 CPU-h** | True McNemar + paired bootstrap for all 5 same-seed pairs; D4 error-overlap; per-isotope breakdowns; threshold sweep (A6) — all free |
| **G1 — D5 discriminator** | `permuted_cls`/`mean_cls`/`scaled_cls` + pred histograms ×6 ckpts | **0 GPU-h; ~1–2 CPU-h** | A2+A8: load-bearing vs OOD-artifact vs scale-artifact — gates every mechanism sentence |
| **G2 — 4He comparator** | Train RN-Raw-lf s42 | **~4.8 GPU-h** | The headline paired Δ_Raw on the true task — C11 lives or dies here |
| **G3 — 4He 2×2** | XA-HC-lf + RN-HC-lf s42 | **~6.4 GPU-h** | Interaction term; the paper's actual design |
| **G4 — 4He seeds** | lf 2×2 on seeds 0,1 (6 more runs) | **~33 GPU-h** | Seed-robust 4He claims (anchor policy: no delta as seed-robust on n=1) |
| **G5 — capacity control** | `attn_dim: 512` XA-Raw (gated on D1–D5) | **~5.5 GPU-h** | A7 deconfounded — only after diagnostics land (doctrine: no cures before diagnosis) |
| **G6 — triton grid hole** | XA-Raw-seed1 | **~5.5 GPU-h** | C2 → 3/3; skippable if campaign pivots to 4He-only reporting (deficit already paired-significant 2/2) |
| **G7 — attention gaps** | exp4 metrics on XA-Raw-s0 + XA-Raw-lf; map-level permuted_q check | **0 GPU-h; ~1 CPU-h** | C10 second seed; A3 map-invariance |

**Cheapest decisive path:** G0+G1+G7 (all CPU, ~4–7 box-hours total) → then G2 (the one GPU run that decides the paper's central claim). Everything else gates on those readouts.

## B.8 Commands used (reproduction)

```bash
# inventory:   ls runs/EXP3-*/*/ ; find runs -name '*.pth'  → EXP8 only
# metrics:     python3 json.load on every runs/EXP3-*/*/metrics.json (table §B.3)
# splits:      json.load both s42 data_split.json → val_indices byte-identical (n=25000)
# stats:       Wilson/t CIs, unpaired z, McNemar bound χ²≥nΔ², balanced acc from
#              confusion matrices — plain python3, no deps (script in §B.3 logic)
# configs:     yaml.safe_load all 12 config.yaml → identical recipe, fusion_type +
#              hdf5_files + file_class_list the only differences
# battery:     cat all 6 counterfactual_battery.json → 5 conditions each, no
#              permuted_cls/mean_cls/event_indices/script-version fields
# torch:       python3 -c "import torch" → ModuleNotFoundError
```

## B.9 Open questions for the lead (non-blocking)

1. Do all 11 `best_model.pth` (incl. RN arms) still exist on box 176? G0 needs them; battery JSONs reference only XA ckpts.
2. Were all 6 battery runs evaluated on the *same* 2000-event subset? JSONs don't record indices — if yes, cross-checkpoint comparisons are paired; if not, they carry subset noise (A4).
3. Did `d5_chain.sh` / `diag_chain.sh` (D1–D4) / `predump_chain.sh` outputs land on box? None are synced locally as of this report.
4. XA-Raw-s0 and XA-Raw-lf `data_split.json` are 0 bytes locally — re-pull on next sync (blocks pairing the lf run).
5. Closing doc §10 NOTE: "the s0 anomaly does not replicate" on 4He — **incorrect as stated**: zero_both 0.5235 > zero_cls 0.1935 *is* the anomaly signature (A11). Recommend rewording to "the anomaly's magnitude shrank; its signature replicated."
6. EXP4 sink stats (token-50 444/512, max-weight 0.52, entropy) — which eval produced them? Not in any synced JSON (audit Q4 stands).
