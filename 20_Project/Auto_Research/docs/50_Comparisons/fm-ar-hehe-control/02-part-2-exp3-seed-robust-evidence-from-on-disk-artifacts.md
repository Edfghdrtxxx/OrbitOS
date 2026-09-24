<!-- Verbatim source section; overview: [[../fm-ar-hehe-control]] -->
<!-- SOURCE-BODY-START -->
## PART 2 — EXP3 seed-robust evidence from on-disk artifacts

### 2a. Run inventory (live checkout `/Users/Reid Hu/MATE-Automation/runs/`, n=25,000 val each)

| Run | seed | acc | α-recall* | macroF1 | best ep | predictions | data_split | battery | ckpt |
|---|---|---|---|---|---|---|---|---|---|
| EXP3-ResNet-HC-100k | 0 | 0.95448 | 0.8472 | 0.9267 | 30 | ✗ | ✗ | — | ✗ |
| | 1 | 0.95748 | 0.8394 | 0.9307 | 27 | ✗ | ✗ | — | ✗ |
| | 42 | 0.95908 | 0.8484 | 0.9336 | 27 | **✓ csv** | ✓ | — | ✗ |
| EXP3-ResNet-Raw-100k | 0 | 0.88904 | 0.6086 | 0.8097 | 17 | ✗ | ✗ | — | ✗ |
| | 1 | 0.89224 | 0.5782 | 0.8086 | 3 | ✗ | ✗ | — | ✗ |
| | 42 | 0.89248 | 0.6356 | 0.8186 | 18 | ✗ | ✗ | — | ✗ |
| EXP3-XA-HC-100k | 0 | 0.95412 | 0.8304 | 0.9252 | 23 | ✗ | ✗ | ✓ | ✗ |
| | 1 | 0.95788 | 0.8536 | 0.9321 | 21 | ✗ | ✗ | ✓ | ✗ |
| | 42 | 0.95676 | 0.8276 | 0.9289 | 22 | ✗ | ✗ | ✓ | ✗ |
| EXP3-XA-Raw-100k | 0 | 0.87572 | 0.5598 | 0.7839 | 7 | ✗ | **0-byte** | ✓ | ✗ |
| | 42 | 0.87116 | 0.5482 | 0.7760 | 12 | ✗ | ✓ | ✓ | ✗ |
| | 1 | — **never ran** (queued behind s0; box closed) | | | | | | | |
| EXP3-XA-Raw-100k-label-fix | 42 | 0.92136 | 0.7254 | 0.8693 | 13 | ✗ | **0-byte** | ✓(buggy) | ✗ |

\* "α-recall" is the class-0 recall — **triton** recall for the 11 un-fixed runs (label bug), true ⁴He recall only for label-fix.
All 11 un-fixed runs = **triton-vs-rest** on Garfield (see 1b). `exp4_attention_metrics.json` exists for the 4 XA triton ckpts (not lf). **No `best_model.pth` exists locally for any run** — all checkpoints are on box 176 (closing doc §7 pull plan).

### 2b. Paired statistics — what is computable locally

Only one `predictions.csv` exists (RN-HC s42) → **no true paired test is computable locally**. However, same-seed val sets are identical across arms (verified by gpu-plan-draft: `val_indices` byte-identical), so the **exact paired Δ** is known from marginal counts, and McNemar can be **bounded**: with d = b−c fixed by the marginals, the worst case maximizes discordants (b+c = min(e_A+e_B, n)). Computed bounds (n=25,000):

| Comparison | seed | Δ acc (XA−RN or HC−Raw) | worst-case McNemar χ² / p | verdict |
|---|---|---|---|---|
| XA−RN, HC | 0 | −0.036pp | 0.03 / 0.87 | indeterminate (parity within noise either way) |
| XA−RN, HC | 1 | +0.040pp | 0.04 / 0.84 | indeterminate |
| XA−RN, HC | 42 | −0.232pp | 1.54 / 0.21 | indeterminate |
| XA−RN, Raw | 0 | **−1.332pp** | 18.74 / **p≤1.5e-5 guaranteed** | significant under every discordant split |
| XA−RN, Raw | 42 | **−2.132pp** | 47.90 / **p≤4.6e-12 guaranteed** | significant under every discordant split |
| HC−Raw, XA | 0 / 42 | +7.84 / +8.56pp | χ²≥902 / p≈0 guaranteed | significant |
| HC−Raw, RN | 0 / 1 / 42 | +6.54 / +6.52 / +6.66pp | χ²≥683 / p≈0 guaranteed | significant |

Class-0-recall paired Δ (XA−RN): HC −1.68 / +1.42 / −2.08pp (s0/s1/s42 — mixed); Raw **−4.88 / −8.74pp** (s0/s42 — the deficit concentrates on the minority class).

Seed means (triton task): RN-HC 0.95701±0.0023 (n=3) · XA-HC 0.95625±0.0019 (n=3) · RN-Raw 0.89125±0.0019 (n=3) · XA-Raw 0.87344±0.0032 (n=2). Per-arm Wilson 95% CIs are ±0.25–0.42pp (table in §4 reproduction output).

**CPU inference locally: infeasible.** Three independent blockers: (a) zero checkpoints synced locally; (b) no torch on this Mac (repo rule: dependency-light only); (c) no Garfield/NimpSim HDF5 locally (~25GB on box only). On-box CPU inference is already proven (~10 min/condition under the 2GB cap) and the lead's `predump_chain.sh` is producing the 12 prediction dumps that unlock true McNemar/bootstrap — **do not duplicate; the local bound analysis above is the stopgap.**

### 2c. Verdict per paper claim

| Claim | Evidence on disk | Verdict |
|---|---|---|
| XA ≈ RN at matched size on HC (the real content of the §5.5 arch-effect≈0 claim) | 3/3 seeds, \|Δ\| ≤ 0.23pp, McNemar indeterminate | **Seed-robust — but only on the triton diagnostic task**, not the task §5.5 names |
| XA > RN on Raw (V6 "+1.6pp on Raw… most valuable when image quality is degraded", main.tex ~296) | 2/2 seeds Δ = −1.33/−2.13pp, guaranteed-significant | **Contradicted at matched size** — the V6 Raw advantage was data-scale confound |
| HC > Raw within architecture | 5/5 pairs +6.5 to +8.6pp, guaranteed-significant | **Seed-robust** (triton task) |
| XA-Raw learns the 4He task ≥0.92 | 1 run, 0.92136 | **Single-seed only**; no RN comparator |
| Any ³He/⁴He NimpSim claim | nothing | **No evidence** — see Part 1 |
| Mechanism claims (query content-free, zero_cls collapse) | battery on 6 ckpts, 2000-event subsets | Seed-robust for permuted_q (6/6 Δ≤0.001); zero_q/zero_cls magnitudes vary wildly by seed (closing doc §12) — mechanism claims need multi-seed counterfactuals, accuracy-seed-std understates mechanism variance |

### 2d. Minimum further runs to close each gap

| Gap | Closer | Cost |
|---|---|---|
| True McNemar/bootstrap CIs on all EXP3 pairs | Lead's `predump_chain.sh` on box (in flight) — or checkpoint pull + local dump if box dies | 0 GPU-h; ~2–4 CPU-h on-box |
| XA-Raw triton seed 1 (3rd seed) | Existing config, GPU | ~5.5h — **optional**; deficit already guaranteed-significant 2/2 |
| 4He 2×2 completion (RN-Raw-lf, XA-HC-lf, RN-HC-lf) | gpu-plan G1+G2 | ~11.2h train / ~14.6h billed |
| **NimpSim ³He/⁴He matched pair** | Option A above | **~10h train / ~13h billed** |
| NimpSim full §5.5 decomposition | Option B (needs augmentation implemented) | ~12–18h train |

---

<!-- SOURCE-BODY-END -->
