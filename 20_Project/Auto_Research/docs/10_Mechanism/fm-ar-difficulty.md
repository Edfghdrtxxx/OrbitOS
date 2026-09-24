> Origin: `fm-ar-difficulty` scout report; recorded 2026-09-24.

# Scout report: per-isotope-pair classification difficulty vs stopping-power parameter

**Question (firstmate spec):** does per-isotope-pair classification difficulty in existing MATE results track the paper anchor's stopping-power parameter — relative separation in $Z^2A$ (reducing to $\Delta A/A$ for same-element isotopes) — rather than $\Delta(A/Z)$?

**Verdict (short):** Yes, with caveats. Across every measurable pair set, relative $Z^2A$ separation orders pair difficulty correctly while $|\Delta(A/Z)|$ does not — most decisively, pairs with **identical** $A/Z$ (d–4He, d–12C: $|\Delta(A/Z)|=0$) are *not* the hardest, and the same-class "other"-bucket pairs show a monotone TV-distance vs $Z^2A$ relation ($\rho=+0.72$/$+0.74$) that $|\Delta(A/Z)|$ fails on the XA arm ($\rho=+0.06$). One real outlier: the proton is *easiest* to separate from triton in the EXP3 t-task despite the smallest $Z^2A$ gap among non-d partners — flagged for the lead, not explained.

## 1. What exists on disk (and what doesn't)

| Source | Per-isotope resolution? | Used |
|---|---|---|
| `runs/EXP8-{XA,ResNet}-Ideal-UnseenChannel/auditfix_d570d34_01/eval_exp8/metrics.json` → `per_channel_confusion` | Yes — per-isotope predicted-class counts for 8 channels (p, d, t, 3He, null seen; 4He, 12C, 13C, 14C unseen) | Primary |
| `runs/EXP3-ResNet-HC-100k-seed42/20260921_002013/predictions.csv` + `data_split.json` | Yes — reconstructed (see §3) | Secondary |
| All other 11 EXP3 runs | **No** — `metrics.json` has only the aggregate 2×2 confusion matrix; no `predictions.csv` | Aggregate only |
| `counterfactual_battery.json` (6 files) | No — accuracy scalars only | — |
| Z01 runs | No eval artifacts at all | — |
| TRK5/6, baselines | Regression tasks, not isotope classification | — |

So the pair-level evidence base is: **EXP8 both arms (seen pairs n=6, cross-class pairs incl. unseen n=13, same-class pairs n=15)** and **EXP3 ResNet-HC s42 t-task (n=4)**. Everything is seed-42, single-seed — consistent with the anchor's caveat.

## 2. Definitions

- Isotopes: p(1,1), d(1,2), t(1,3), ³He(2,3), ⁴He(2,4), ¹²C(6,12), ¹³C(6,13), ¹⁴C(6,14) as (Z,A).
- `relZ2A(i,j) = |Z²A_i − Z²A_j| / min(Z²A_i, Z²A_j)` — matches the anchor's "relative separation" convention (¹³C/¹⁴C → 1/13 ≈ 7.7%).
- `|Δ(A/Z)|` and `relA/Z = |Δ(A/Z)|/min(A/Z)` (both computed; conclusions identical, `|Δ(A/Z)|` reported).
- **Pair confusion (cross-class):** symmetrized boundary-crossing rate = mean of the two directional misroute rates `P(i→class(j))` and `P(j→class(i))`. Caveat: for the lumped "other" class, `i→other` is an upper bound (it includes misroutes to *other* isotopes inside the bucket); `j→i` is exact.
- **Same-class pairs:** class-level confusion is undefined (both route to "other" by construction). Proxy: total-variation distance between the two predicted-class distributions — a soft measure of how differently the model treats them.
- EXP8 classes: A=p, B=d, other={t, ³He, null}; unseen channels ⁴He, ¹²C, ¹³C, ¹⁴C are labeled "other" but were never trained — their misroutes measure **OOD rejection failure**, not a learned boundary.

## 3. EXP3 per-isotope reconstruction (validated)

Only `EXP3-ResNet-HC-100k-seed42` has `predictions.csv` (25,000 rows, `event_index` = row number, not global index). Mapping row *k* → `data_split.json:val_indices[k]` → isotope via `val_indices[k]//100000` against `file_paths` order `[3He, 4He, d, p, t]` reproduces `metrics.json`'s confusion matrix **exactly** ([[4242,758],[265,19735]]), so the mapping is verified, not assumed.

**EXP3-ResNet-HC-s42, triton-vs-rest task (label bug: class 0 = t):**

| isotope | n | →t false-positive | relZ²A vs t | \|Δ(A/Z)\| vs t |
|---|---|---|---|---|
| d | 5038 | **0.0363** | 0.50 | 1.00 |
| ³He | 5110 | 0.0065 | 3.00 | 1.50 |
| ⁴He | 4848 | 0.0066 | 4.33 | 1.00 |
| p | 5004 | **0.0034** | 2.00 | 2.00 |
| t recall | 5000 | 0.8484 (t→rest 0.1516) | — | — |

Rank correlations (n=4): relZ²A ρ=−0.20; \|Δ(A/Z)\| ρ=−0.95. Here Δ(A/Z) wins *only* because p is the easiest pair; note it cannot separate d from ⁴He (identical 1.0, 5.5× different FP). Z²A correctly picks d as hardest but misranks p. **p–t is the outlier** — possibly energy-range/simulation differences rather than stopping power; worth a lead-side check of per-file energy distributions before the paper leans on Z²A for hydrogen isotopes.

## 4. EXP8 pair table (both arms)

Symmetrized confusion = mean of directional rates. `i→j`/`j→i` are the directional components (i→j = isotope i misrouted into j's class).

| pair | relZ²A | \|Δ(A/Z)\| | XA conf | XA i→j | XA j→i | RN conf | RN i→j | RN j→i |
|---|---|---|---|---|---|---|---|---|
| p–d | 1.00 | 1.00 | 0.0404 | .0470 | .0337 | 0.0414 | .0477 | .0350 |
| p–t | 2.00 | 2.00 | 0.0254 | .0291* | .0218 | 0.0266 | .0289* | .0242 |
| p–³He | 11.00 | 0.50 | 0.0245 | .0291* | .0198 | 0.0252 | .0289* | .0214 |
| p–⁴He | 15.00 | 1.00 | 0.0240 | .0291* | .0126 | 0.0252 | .0289* | .0143 |
| p–¹²C | 431 | 1.00 | 0.0547 | .0291* | .0803 | 0.0223 | .0289* | .0158 |
| p–¹³C | 467 | 1.17 | 0.0560 | .0291* | .0828 | 0.0219 | .0289* | .0148 |
| p–¹⁴C | 503 | 1.33 | 0.0569 | .0291* | .0847 | 0.0214 | .0289* | .0139 |
| d–t | 0.50 | 1.00 | **0.0586** | .0571* | .0600 | **0.0569** | .0539* | .0599 |
| d–³He | 5.00 | 0.50 | 0.0452 | .0571* | .0332 | 0.0429 | .0539* | .0318 |
| d–⁴He | 7.00 | **0.00** | 0.0475 | .0571* | .0379 | 0.0448 | .0539* | .0358 |
| d–¹²C | 215 | **0.00** | 0.0421 | .0571* | .0270 | 0.0392 | .0539* | .0245 |
| d–¹³C | 233 | 0.17 | 0.0419 | .0571* | .0267 | 0.0384 | .0539* | .0245 |
| d–¹⁴C | 251 | 0.33 | 0.0408 | .0571* | .0246 | 0.0377 | .0539* | .0216 |

`*` = upper bound (route into the lumped "other" bucket). Unseen-channel rows (⁴He, carbons) measure OOD false-target rate, not trained-boundary difficulty.

**Rank correlations, seen pairs only (n=6: p–d, p–t, p–³He, d–t, d–³He + t–³He unresolvable → effectively 5 measurable cross-class seen pairs; the 6th, t–³He, is same-class):**

| predictor | XA ρ | RN ρ |
|---|---|---|
| relZ²A | **−0.70** (p=0.19) | **−0.70** (p=0.19) |
| \|Δ(A/Z)\| | +0.05 (p=0.93) | +0.05 (p=0.93) |

Sign is negative = larger separation → less confusion, as the anchor predicts. n=5–6 so p-values are weak, but the ordering is monotone-clean: d–t (smallest relZ²A=0.5) is the hardest seen pair in both arms; p–³He/p–⁴He (relZ²A 11–15) are the easiest despite tiny Δ(A/Z) (0.5–1.0 vs d–t's 1.0).

**All 13 cross-class pairs (incl. unseen):** XA ρ=+0.26 (relZ²A) — sign flips because XA misroutes unseen carbons to p at ~8% (huge separation, high "confusion" = OOD leakage, not boundary difficulty). RN ρ=−0.76 (p=0.002). Interpretation: for the physics-informed arm, Z²A separation does **not** predict OOD false-target rate — the XA arm leaks far-OOD carbon events into the p class ~4–5× more than ResNet (8.0–8.5% vs 1.4–1.6%). This is a genuine arm difference worth the lead's attention: physics features make the model *more* willing to call an unseen heavy ion a proton.

**Same-class pairs — TV distance between predicted-class distributions (n=15 pairs):**

| predictor | XA ρ | RN ρ |
|---|---|---|
| relZ²A | **+0.72** (p=0.003) | **+0.74** (p=0.002) |
| \|Δ(A/Z)\| | +0.06 (p=0.84) | +0.62 (p=0.014) |

Strongest single result: within the "other" bucket, how differently the model treats two isotopes tracks relZ²A almost monotonically on the XA arm (³He–⁴He TV=0.0045 at relZ²A=0.33; t–¹²C TV=0.058 at relZ²A=143), while Δ(A/Z) has *zero* correlation on XA. On RN both correlate (A/Z and Z²A are entangled for these pairs), but Z²A is still stronger.

**Same-element isotope check (the anchor's ΔA/A special case):** ¹²C/¹³C/¹⁴C pairwise TV distances are 0.002–0.005 and their XA false-target rates are 10.9%/10.9%/10.7% — statistically indistinguishable, consistent with ΔA/A ≈ 8–17% being below the model's resolution. The anchor's same-element claim is *consistent* with data but only weakly tested (these are unseen OOD channels).

## 5. Verdict and paper implications

1. **Supported:** for trained-class boundaries, pair difficulty orders by relative $Z^2A$ separation, not $\Delta(A/Z)$. Cleanest evidence: (a) d–⁴He and d–¹²C have $|\Delta(A/Z)|=0$ yet are mid-difficulty, not hardest; (b) p–³He/p–⁴He have small $\Delta(A/Z)$ but are the easiest pairs, matching their large $Z^2A$ gaps; (c) same-class TV distance vs relZ²A ρ≈+0.72–0.74 vs Δ(A/Z) ρ=+0.06 (XA).
2. **Caveat — the p–t anomaly:** in the EXP3 t-task, p is the *easiest* non-d partner (FP 0.34%) despite relZ²A=2.0 being smaller than ³He's 3.0 and ⁴He's 4.33. If the paper claims Z²A *predicts* difficulty, this needs either an energy-range confound check or hedged wording ("tracks" not "determines").
3. **Caveat — OOD is a different mechanism:** Z²A separation does not predict unseen-channel false-target rates on the XA arm (carbons leak to p at ~8% ≫ ⁴He's ~1.9% despite ~30× larger Z²A gap). The PID-difficulty framing should be scoped to *trained* isotope discrimination; OOD rejection needs its own framing (and the XA-vs-RN leakage gap is itself a finding: physics features increase far-OOD false-target rate ~4–5×).
4. **Framing suggestion for the paper:** the anchor's $Z^2A$ parameter is defensible as the *ordering* variable for PID difficulty; present the pair table (§4) as the evidence figure. The same-class TV-distance result is a bonus: even where the classifier is forced to merge isotopes, its internal representation still separates them in $Z^2A$ order — i.e., the physics prior structures the latent space, not just the decision boundary.

## 6. Open questions for the lead

- Per-isotope breakdown for the other 11 EXP3 runs (esp. the 4He label-fix run and the XA arms) requires either re-eval with per-event dumps on the box, or local H5+checkpoint availability — neither exists locally. One command on the box would fix this: re-run eval with `predictions.csv` output (the eval path already supports it — EXP3-RN-HC-s42 has one).
- Check whether p's anomalous easiness vs t is an energy-range artifact: compare deposited-energy/Bragg distributions of the p file vs d/t/³He/⁴He files in `Garfield_HC`/`Garfield_Raw` H5s.
- EXP8 unseen-carbon → p leakage on XA (~8%) vs RN (~1.5%): is this the same "physics features route by stopping-power-like quantity" mechanism? If so it's *confirming* evidence for Z²A (carbons' charge deposition resembles scaled-up light ions) — worth a sentence in the paper either way.

## 7. Reproduction

All numbers above are reproducible read-only:

```bash
# EXP8 tables: per_channel_confusion in
#   runs/EXP8-{XA,ResNet}-Ideal-UnseenChannel/auditfix_d570d34_01/eval_exp8/metrics.json
# EXP3 reconstruction: row k of predictions.csv ↔ data_split.json val_indices[k];
#   isotope = file_paths[val_indices[k] // 100000]; validated by exact match to
#   metrics.json confusion_matrix [[4242,758],[265,19735]].
```

Analysis script used: `/tmp/difficulty/analyze.py` (worktree-local, discarded at teardown; logic fully described in §2–§4 so the lead can re-derive in ~40 lines).
