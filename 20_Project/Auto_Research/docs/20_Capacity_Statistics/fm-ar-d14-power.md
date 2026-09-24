> Origin: `fm-ar-d14-power` scout report; recorded 2026-09-24.

# fm-ar-d14-power: What D1–D4 at n=500 can actually support

**Date:** 2026-09-24 · **Scope:** read-only analysis of `h1_diagnostics.json`, `scripts/analysis/exp3_h1_diagnostics.py`, the pre-registered decision table (`20_doc/EXP3_closing_analysis_2026-09-24.md` §10/§10a), and the two scout critiques (`fm-ar-capacity-critique`, `fm-ar-mechanism`). No box-176/AutoDL/IMP contact; no files modified.

**Verdict up front:** at n=500 every XA-vs-RN difference is within noise; D2 is *exactly* the majority baseline (stronger than the lead's "~0.81" framing); D4's error overlap is highly concentrated, not diffuse — the lead's "diffuse → capacity" read of D4 is contradicted by the counts. The table's branches are internally inconsistent at this n, so **H1b is unresolved, not confirmed**. The lead's operational conclusion ("D5 decides") is correct; the "concluded H1b" framing is not licensed by these numbers.

---

## 0. Reconstructed ground truth (exact, not estimated)

The JSON stores only aggregate accuracies, but exact class balance is recoverable:

- `data_split.json` `file_paths` are sorted (`3He, 4He, d, p, t`), 100k events/file → triton (class 0, raw label 4 → 0 per `src/data/label_contract.py:31`) occupies global indices `[400000, 500000)`.
- The script subsamples `val_indices[::50][:500]` (`exp3_h1_diagnostics.py:148-151`). Replaying this on the synced split gives **n0 = 99 class-0 events (19.8%)** — confirmed independently: the stored recalls 0.5758 = 57/99 and 0.6162 = 61/99 both have denominator 99.
- Replaying the probe split (`RandomState(42).permutation(500)`, `tr=perm[:250]`, `te=perm[250:]`, script lines 184-186): train half has 47 class-0 (majority 0.812), **test half has 52 class-0 → majority baseline = 198/250 = 0.792 exactly**.

Per-file subset counts: 3He 93, 4He 95, d 109, p 104, t 99 (sums to 500 ✓).

## 1. Confidence intervals and branch resolution

Wilson 95% CIs (test half n=250 for D1–D3; n=500 for D4). No per-event probe predictions are stored, so probe differences use **unpaired** bounds — conservative; the true paired intervals are tighter but the same events were used, so pairing can only shrink them.

| Quantity | Value | 95% CI |
|---|---|---|
| D1 probe XA-68 | 220/250 = 0.880 | [0.834, 0.915] |
| D1 probe RN-512 | 217/250 = 0.868 | [0.820, 0.904] |
| D2 physics-only | 198/250 = 0.792 | [0.738, 0.838] |
| D3 attended-only | 219/250 = 0.876 | [0.829, 0.911] |
| D4 XA error rate | 55/500 = 0.110 | [0.086, 0.141] |
| D4 RN error rate | 50/500 = 0.100 | [0.077, 0.129] |

| Difference | Δ | 95% CI | Resolved? |
|---|---|---|---|
| D1: XA68 − RN512 | +0.012 | [−0.047, +0.071] unpaired bound | **No** — "≪" (H1a) and "≈" (H1b) both inside CI |
| D3 − RN512 | +0.008 | [−0.051, +0.067] | **No** — same |
| D3 − XA68 (physics concat adds?) | −0.004 | [−0.062, +0.054] | No |
| D2 − majority | **0.000 exactly** | — | **Yes, resolved**: zero linear signal in physics features |
| D4: XA−RN error rate | +0.010 | [−0.017, +0.037] (paired, discordant-based) | No — McNemar exact p = 0.57 (27 vs 22 discordant) |

**D4 overlap is the one strong result, and it cuts against the lead's read.** Observed `both_wrong = 28` vs **5.5 expected** if the two error sets were independent (hypergeometric P(≥28) ≈ 1.7×10⁻¹⁷). Even conditioning on class — XA has 42 class-0 + 13 class-1 errors, RN has 38 + 12 — independence *within* class predicts only ~16.5 shared errors. The errors are **concentrated on the same hard events** (mostly class-0), not "diffuse." The pre-registered table maps "diffuse → capacity"; observed is the opposite. But the table's other branch ("errors concentrated where physics misleads → crowding") is also not licensed: nothing in D1–D4 ties the shared errors to physics — they're tied to class-0 difficulty, which both models share. **D4 resolves neither H1a nor H1b; it says the two models fail on the same events, i.e., the deficit is event-difficulty-driven, and the XA-only excess (27 vs 22) is noise (p=0.57).**

Branch-by-branch: D1 unresolved, D2 resolved (uninformative — see §3), D3 unresolved, D4 resolved-but-misread (concentrated, mechanism unattributed). The lead's §10a synthesis ("head input fine, attended fine, physics uninformative, errors diffuse → learned head leans on uninformative Izz magnitude") is a post-hoc story the table does not produce: D1/D3 only *fail to reject* equality, and D4's concentration is asserted away as "diffuse."

## 2. Probe protocol: not cross-validated — single 50/50 split

`_logreg_probe` (script lines 115-122): `StandardScaler` + `LogisticRegression(max_iter=2000, C=1.0)`, fit on `tr` (250 events), scored on `te` (250 events). One fixed split, seed 42. No CV, no repeated splits.

Optimism/variance assessment:

- **No leakage**: scaler and probe see only the train half. Test-half scores are honest for that split.
- **Single-split variance dominates**: each probe score is one draw; the ±4–5pp CIs above are the price. A different seed could easily flip the sign of the +1.2pp D1 gap.
- **Mild upstream optimism**: features come from checkpoints early-stopped on this same val set (`checkpoint_selection: best_val_accuracy`), so absolute probe accuracies are slightly optimistic vs. a truly held-out set. This affects both arms symmetrically — the *comparison* is fair.
- **Asymmetric regularization bias**: fixed C=1.0 with n_train=250 is relatively harsher on the 512-dim RN probe than the 68-dim XA probe (p/n = 2.05 vs 0.27). If anything this biases D1 *against* RN — yet RN still scored within 1.2pp, which weakly suggests the RN features are at least as good. Not decisive.
- All three probes share the same `tr`/`te` split, so D1/D2/D3 are paired across probes — but per-event probe predictions aren't stored, so that pairing is unexploitable post-hoc (see §6).

## 3. D2 vs majority: the lead's comparison is right in spirit, wrong in number — and the correction strengthens it

The lead compared D2 = 0.792 to "~0.81" majority. The **exact** test-half majority is 0.792 (52/250 class-0 → predict-all-rest = 198/250). D2 is *identical* to the majority baseline: the 4-feature LogReg extracted **zero** linear signal — it either predicted all-rest or made errors exactly canceling its class-0 hits.

Two caveats keep this honest:

- "Uninformative" means *linearly* uninformative to LogReg at n_train=250. A nonlinear or interaction signal, or a signal weaker than ~5pp, is not ruled out (the probe is powered to notice only ≥~5pp effects at this n).
- The pre-registered wording "acc ≈ chance → H1a" is ambiguous for an 80/20 task: literal chance (0.5) would have read 0.792 as "high → H1b viable." The lead's majority-baseline reading is the correct operationalization; the prereg text should have said "≈ majority baseline." Worth fixing in the table for the s0 re-run.

Also note D2's train-half majority was 0.812 — the probe had a slightly easier train split and still couldn't beat test majority.

## 4. Minimum n per diagnostic, and the 2 GB memory model

### Required n (95% CI half-width ≤ effect, paired where applicable)

| Diagnostic | Effect to resolve | Min n |
|---|---|---|
| D1/D3 probe gap | observed +1.2pp | n_test ≈ 2,700–5,900 → **total ≈ 5,300–11,700** (discordant fraction q=0.10–0.22 assumed; unpaired needs ~13k) |
| D1/D3 probe gap | decision-table-meaningful 2pp | total ≈ 1,900–4,200 |
| D2 vs majority | +2pp excess | total ≈ 3,100 (but observed direction is ≤0 — nothing to power for) |
| D4 error-rate diff | observed 1pp | n ≈ 3,800 |
| D4 discordant split | observed 55/45 vs 50/50 | n ≈ 8,000 (80% power); a 60/40 split needs only n ≈ 2,000 |

So: the originally planned n=2000 would have resolved a 2–3pp probe gap or a 60/40 D4 split, but **not** the observed 1.2pp/1pp effects. To resolve the observed effects: **n ≈ 6,000–8,000** (paired), up to ~13,000 worst case.

### Memory model — n is not the constraint

Arrays that scale with n (script lines 78-103, 181): `xa.head_input` n×68, `xa.aux` n×64, `rn.head_input` n×512, `rn.aux` n×4, logits n×2 ×2, labels/preds ×2, `phys_raw` n×4 — **≈2.6 KB/event → 21 MB at n=8000**. Trivial.

Images are the only other n-scaling term: `MATEDataset` memmaps `cache/images.npy` (`dataset.py:291,300-308`) or reads HDF5 per-event (`dataset.py:529`); ~30 KB/event touched → ~250 MB page-cache at n=8000 (only if the cgroup charges page cache).

Everything else is **fixed** overhead independent of n: torch + sklearn + h5py import RSS (~1–1.5 GB combined), two MATEModel instances, per-batch activations (~tens of MB at batch 32), DataLoader (workers=0 here). The two OOM kills at n=2000 were therefore almost certainly **fixed-overhead** deaths — the process was already within ~50 MB of the cap, and n only moved the total by ~50 MB. Cutting 2000→500 "fixed" it by luck of margin, not because n drove memory.

**Exact change to reach n≥8000 in 2 GB** (in priority order):

1. `torch.set_num_threads(1)` plus `OMP_NUM_THREADS=1 MKL_NUM_THREADS=1` before importing torch — thread-pool arenas are the usual multi-hundred-MB hidden cost on capped CPU boxes.
2. Split the script into two processes: extraction writes `features.npz` and exits (freeing torch's ~0.5–1 GB), a second torch-free process runs the three LogReg probes. Peak RSS drops by roughly the torch footprint during probing.
3. If page cache is charged: `os.posix_fadvise(fd, 0, 0, POSIX_FADV_DONTNEED)` on the `images.npy` fd after open, or force the HDF5 path (no `cache_dir`) — per-event reads don't accumulate cache.

With (1)+(2), n=8000 needs ≈ fixed 1.2–1.5 GB + ~270 MB n-scaling — fits. No streaming rewrite required; the arrays are already streaming-friendly (batch append → concatenate).

## 5. Verdict on the lead's H1b conclusion

**Unresolved — within noise — with one element (D4) actively misread.**

- D1 (+1.2pp, CI ±6pp): consistent with both branches; resolves nothing.
- D2 (= majority exactly): resolves "physics linearly uninformative" — this is the H1a-branch outcome *as pre-registered*, and it removes the "crowding by informative physics" mechanism. The lead's own synthesis keeps H1b alive only via the "uninformative magnitude/OOD" variant — which is precisely what D5 tests, i.e., **the lead's conclusion already concedes D1–D4 didn't decide**.
- D3 (+0.8pp vs RN-GAP): within noise; "attended repr adequate" is not established, only not refuted.
- D4: errors are concentrated (28 shared vs 5.5 expected), contradicting the "diffuse → capacity" cell — but the concentration is class-0-difficulty-driven, not attributable to physics, so it doesn't confirm crowding either. The honest read: both models fail on the same hard triton events; XA's excess errors are statistically indistinguishable from RN's (McNemar p=0.57).

Net: **the lead's "H1b" is a plausible narrative, not a supported conclusion.** The decision table at n=500 produces: one resolved cell (D2 → physics uninformative), one misread cell (D4 concentrated, mechanism-free), two unresolved cells (D1, D3). The correct statement is "D1–D4 are consistent with head-usage/crowding but underpowered to separate H1a from H1b; D5 (`permuted_cls`/`mean_cls`) remains the decider" — which matches the lead's operational plan. What should change is the wording from "concluded H1b" to "H1b-leaning, unresolved."

## 6. Recommended follow-up ships (clear, small)

1. **Store per-event outputs in `h1_diagnostics.json`**: probe correctness vectors for D1/D2/D3 (3×250 bools) and the existing preds/labels (already computed, just not saved). Cost: ~2 KB; unlocks exact paired CIs, McNemar on probes, and bootstrap — the difference between "unresolved" and resolved at the same n.
2. **k-fold or repeated-split probes** (e.g., 5×2 CV or 10 random 50/50 splits): turns single-draw scores into a mean±spread at zero extra extraction cost — features are already in RAM.
3. **The memory fix in §4** (`set_num_threads(1)` + two-process split) → rerun at n=8000; resolves the observed effect sizes.
4. **Prereg wording fix**: D2 branch should read "≈ majority baseline" not "≈ chance"; D4 needs a third cell — "concentrated on shared hard events → common difficulty, mechanism unattributed" — since the observed outcome matches neither pre-registered branch.
5. **Report D4 conditional on class**: shared-error rate within class-0 vs class-1 (computable once per-event preds are stored) separates "both models find triton hard" from "physics-mediated errors."

## Evidence index

- JSON: `runs/EXP3-XA-Raw-100k-seed42/20260922_185618/h1_diagnostics.json` (n=500, argv `--max-events 500 --device cpu`, host `autodl-container-3187449845`).
- Script: `scripts/analysis/exp3_h1_diagnostics.py` — subset `:148-151`, RN index pinning `:163-170`, split `:184-186`, probes `:191-206`, D4 `:208-225`.
- Dataset memory: `src/data/dataset.py:291` (memmap), `:309-310` (labels/physics eager), `:529` (HDF5 fallback), `:574-580` (label resolution).
- Label map: `src/data/label_contract.py:31` (`{4:0,...}` → triton class 0); `src/run_experiment.py:400-417` (triton-vs-rest default).
- Decision table: `20_doc/EXP3_closing_analysis_2026-09-24.md` §10 (table), §10a (results + caveat line 163).
- All statistics computed locally in Python (Wilson, exact McNemar, hypergeometric overlap, power formulas); class balance reconstructed from synced `data_split.json` — no remote execution.
