> Origin: `fm-ar-transfer` scout report; recorded 2026-09-24.

# Scout report: bidirectional transfer comparisons for isotope/particle classification

**Task:** `fm-ar-transfer` — how can the paper satisfy the doctrine of transferring comparisons in both directions (published method → MATE data, MATE method → published data)?
**Worktree:** `/Users/leyi/.treehouse/MATE-Automation-8e6480/5/MATE-Automation` (disposable; scratch under `99_System/.scratch/`)
**Date:** 2026-09-24
**Mode:** read-only on live checkout `/Users/Reid Hu/MATE-Automation`; CPU-only local work; no box 176/AutoDL/IMP contact.

Labels: **FACT** (verified artifact/command), **INFERENCE**, **UNVERIFIED**.

---

## Verdict

**Exactly one published AT-TPC/TPC ML classification result has public data: Kuchera et al. 2019 (arXiv:1810.10350, Zenodo 3473953, github.com/ATTPC/event-classification).** Every other candidate (Solli 2021, Dey/Kuchera point-cloud NIM A 2025, Wu 2023, SAT-TPC Hoyle 2025, MATE ¹²C+¹²C 2026) has no public data and mostly no public code — they are citable context, not transfer targets.

**The public task is saturated for CNNs.** Our generic ResNet18 arm already scores val_acc = 1.0000 on it (FACT, live run log). Kuchera's own CNN scored 1.00/1.00/1.00 clean and noisy (FACT, their Table 3). So direction B ("our method on their data") can only produce a ceiling tie — formally satisfiable, scientifically uninformative. Worse, **the physics-informed arm is not instantiable on the public data**: the Z01 adapter feeds `physics = torch.zeros(4)` (`src/data/z01.py:991`), and the campaign council already ruled moments are image-derived duplicates, not an independent physics vector (`L1_Current_Campaign.md` line 62). Direction B can therefore only ever compare generic-vs-generic.

**Direction A ("their method on our data") is the only scientifically meaningful transfer** — and it is cheap: a VGG16-style fine-tune on MATE's unsaturated tasks (α-vs-lump ~0.96, ³He/⁴He ~0.96, ¹³C/¹⁴C ~0.90) is a real discriminative comparison where the public task cannot be.

**New local numbers (this scout, CPU, <10 s each):** on the publisher train split with the exact Z01 stratified 80/20 seed-42 split (verified identical to the live run's `data_split.json`):

| Arm | Features | Clean bal-acc | +5% uniform noise | +10% | +25% |
|---|---|---|---|---|---|
| Flattened-pixel LR (Kuchera-style) | 16384 px | **0.9215** | 0.6620 | 0.6166 | 0.5151 |
| Moments LR (frozen Z01 arm A) | [Ixx,Iyy,Ixy,M] | **0.7009** | 0.5000 | 0.5000 | 0.5000 |
| K-means k=2 on moments | same | 0.6003 (ARI 0.040) | — | — | — |
| ResNet18 (live run, arm B) | image | val_acc **1.0000** | not run | — | — |

The frozen Z01 logistic-moments arm reproduces exactly against the lead's own `model.npz` (0.7009 both ways — cross-validated). **The published "LR 0.98" number is not comparable to our moments-LR**: Kuchera's LR ran on flattened 20×20×20 voxel features (8000 dims), not 4 moments. Our flattened-pixel reproduction (0.9215) is the honest traditional-baseline anchor.

---

## 1. Literature inventory: what exists with public data/code

| Work | Task | Data public? | Code public? | Aligned for transfer? |
|---|---|---|---|---|
| **Kuchera et al. 2019** (arXiv:1810.10350, Comput. Softw. Big Sci. 3:6) | p vs C vs other, ⁴⁶Ar(p,p); sim→sim, exp→exp, sim→exp | **YES** — Zenodo 3473953: `pr_train_simulated.npy` (5600×128×128×1 f64, 734 MB), `pr_test_simulated.npy` (2400, 315 MB), targets (45 KB + 19 KB). Sim only; the 2689 hand-labeled **experimental events are NOT in the record** | **YES** — github.com/ATTPC/event-classification (TF1/Keras; LR/FCNN/CNN arms + `data-processing/simulate_events.py`, `generate_images.py`) | **YES — the only one.** Representation identical in spirit (2D xy projections); task identical in kind (particle-ID classification) |
| Solli et al. 2021 (arXiv:2008.02757, NIM A 1040 167092) | Unsupervised event clustering, ⁴⁶Ar(p,p) | Same Zenodo record + unlabeled pool | None found | Partial — same data, different task (clustering not classification); their VGG16+k-means pipeline is what the campaign doc cites as "near-perfect" |
| Dey, Anthony, Hunt, Kuchera et al., NIM A (2025) DOI 10.1016/j.nima.2024.170002 | Point-cloud ML, rare-event classification | None found (NSF PAR entry only) | None found (`alpha-davidson/ATTPCLatent` is a different latent-space project) | No — no data; point-cloud repr. also mismatches our image pipeline |
| Wu et al. 2023 (arXiv:2304.13233, NIM A 1055 168528) | ¹²C Hoyle-band event vs background, SAT-TPC | None found | None found | No — different detector/task; cite only |
| SAT-TPC Hoyle branches 2025 (arXiv:2506.02506) | Multi-class decay-branch CNN | None found | None found | No |
| Zhang et al. 2026 (arXiv:2605.28296, Nucl. Sci. Tech.) | **MATE-TPC** ¹²C+¹²C elastic vs fusion, ResNet-50/34/18 + VGG-19, ~97% sim / ~90% exp | None found (PDF scanned: no github/zenodo/availability statement) | None found | Cite as sibling MATE work; no transfer possible |
| TPCpp-10M (Zenodo 16922968) | pp collisions for foundation models | Yes | — | No — different physics domain entirely |

**FACT:** Zenodo 3473953 file inventory via `curl https://zenodo.org/api/records/3473953`: title "Two dimensional projections of simulated events recorded by an AT-TPC", 2019-10-05, 4 files, sizes above. Total record ≈ 1.05 GB; train split alone = 734 MB + 45 KB (< 1 GB).

## 2. What each direction requires

### Direction A — published method → MATE data

Kuchera's winning recipe (their §4.4, Table 2–3): **VGG16 ImageNet-pretrained, fully fine-tuned**, input = 128×128 single-channel xy projection (charge ∝ grayscale), FC head replaced. Their LR/FCNN arms used flattened 20×20×20 voxels.

To run on MATE:
- **Rendering:** MATE images are `(N, 80, 48, 2)` NHWC — charge + drift-time channels (`src/data/dataset.py:9`). Options: (a) resize 80×48 → 128×128 charge-only (closest to their repr); (b) keep 80×48 and adapt VGG16's classifier input (VGG is fully-conv + adaptive pool, trivial); (c) 2-channel input (charge+drift) — a *deviation* from the published method, flag it. Option (a) is the honest transfer.
- **Labels:** reuse existing MATE task labels (α-vs-lump, ³He/⁴He, ¹³C/¹⁴C). No new labeling.
- **Cost:** VGG16 ≈ 138M params vs our ResNet18 ≈ 11M. Fine-tune on the same 100k-event budgets: ~3–5× ResNet18 GPU-hours per run. On AutoDL this is a normal training job, not exotic. CPU-only is **not** viable for VGG16 training; a CPU-feasible variant is VGG16-feature-extract + LR (their Table 2 "fixed feature extractor" mode, which they found inferior).
- **Fairness caveats:** (1) reimplementation in torch ≠ their TF1 code — call it "VGG16-style, Kuchera et al. recipe"; (2) input repr differs (80×48 dual-channel vs 128×128 single) — document the resize/channel choice; (3) task differs (isotope ID vs p/C) — this is a *method-family* comparison, which is exactly what the doctrine asks; (4) their published numbers are on their data — only the *method* transfers, never the numbers.

### Direction B — MATE method → public data

- **Already partially done:** Z01-ResNet-Generic (ModifiedResNet18, fusion_type=none) trained on box, val_acc = 1.0000 at epoch 1, early-stopped epoch 10 (FACT: `runs/Z01-ResNet-Generic/z01-overnight-20260919-01/train.log`). Publisher-test eval is queued in the lead's `predump_chain.sh` (closing doc line 198).
- **Physics-informed arm: impossible as designed.** `Z01NpyDataset.__getitem__` returns `physics = torch.zeros(4)` (`src/data/z01.py:991`). The public record has no independent physics vector; computing `[Ixx,Iyy,Ixy,M]` from the same pixels is what the council ruled out as "image-derived duplicates" (L1 doc line 62). MATE's real physics vector is `[Iyy, Izz, Iyz, total_mass]` — 3D moments + charge (`src/data/dataset.py:11`) — which needs the z/drift axis the 2D projections discard.
- **Ceiling risk: realized, not hypothetical.** Published CNN = 1.00 clean AND noisy (Table 3); our ResNet18 = 1.0000 val. Any CNN-vs-CNN comparison on this data is a tie at the ceiling. The only headroom is in the *traditional-baseline* band (LR 0.66–0.98 depending on features/noise) — i.e., the public data discriminates weak methods, not strong ones.
- **Residual value:** (1) publisher-test number completes the "we ran on public data" checkbox; (2) a noise-robustness study is the one axis with headroom — my local numbers show pixel-LR collapses 0.92→0.52 at 25% noise while Kuchera's CNN held 1.00; scoring our ResNet18 under the same noise protocol would demonstrate robustness transfer even though accuracy cannot.

## 3. Local CPU work performed (deliverable numbers)

Setup: downloaded `pr_train_simulated.npy` + `train_targets.npy` (734 MB, < 1 GB) into worktree `99_System/.scratch/z01-data/`; verified `(5600,128,128,1) float64`, labels 2800 p / 2800 C. Script: `99_System/.scratch/z01_baseline.py` (worktree scratch, discarded at teardown — code is trivially re-derivable from `src/data/z01.py` public functions).

**Split fidelity:** `split_publisher_train(labels)` output is **identical** to the live run's `data_split.json` (train 4480 / val 1120, seed 42, stratified) — verified programmatically.

**Results (val split, balanced accuracy):**

1. `LogisticRegression(l2, C=1, balanced, lbfgs, 1000, seed 42)` on standardized `[Ixx,Iyy,Ixy,M]` = **0.7009** (acc 0.7009; per-class recall [0.710, 0.692]; confusion [[397,162],[173,388]]). Cross-check: scoring the lead's own `model.npz` + `normalization_stats.json` on the same split gives **identical 0.7009** — the frozen arm is faithfully reproduced.
2. Flattened-pixel LR (Kuchera's actual LR recipe, 16384-d) = **0.9215** (confusion [[527,32],[56,505]]).
3. K-means(k=2) on moments = **0.6003**, ARI 0.040 — moments carry weak cluster structure; the published near-perfect k-means ran on VGG16 features.
4. Noise robustness (uniform random pixels at val-max amplitude, paper's "uniform random noise" protocol): pixel-LR 0.9215 → 0.662 (5%) → 0.617 (10%) → 0.515 (25%); moments-LR 0.7009 → 0.500 at any noise ≥5% (mass/moments dominated by noise pixels).

**Interpretation:** the frozen Z01 moments-LR arm is a weak traditional baseline (0.70), far below the published LR (0.98 on voxel features; my pixel-LR 0.92). If the paper quotes a "traditional baseline" on the public set, **pixel-LR is the honest anchor, not moments-LR**. The 0.98→0.92 gap vs Kuchera is explained by representation (their 8000-voxel 3D discretization vs the published 2D projections) and split differences — direction of the gap is expected, not a discrepancy.

## 4. Ranked plan

1. **[Highest value, moderate cost] VGG16-style fine-tune on MATE tasks (direction A).** Render MATE charge channel 80×48→128×128, fine-tune ImageNet-VGG16 per Kuchera recipe on the existing α-vs-lump and/or ¹³C/¹⁴C splits pinned to existing `data_split.json`s. Report accuracy + α-recall vs the published 2×2 cells. This is the only transfer that can *discriminate* methods (MATE tasks are unsaturated) and directly satisfies "apply the published method to our data." Cost: one GPU training run per task on box 176-class hardware; CPU-infeasible. Caveat: label it "Kuchera-style VGG16 recipe" — reimplementation, not their binary.
2. **[Cheap, already in flight] Finish Z01 publisher-test eval (direction B).** The lead's `predump_chain.sh` already queues it. Report ResNet18 test bal-acc next to Kuchera's published 1.00 — expect a ceiling tie; frame as "our pipeline reproduces published-level performance on public AT-TPC data," a capability/robustness statement, not a comparison win.
3. **[Cheap, CPU, novel angle] Noise-robustness transfer on the public set.** Score the trained Z01 ResNet18 under the uniform-noise protocol (needs torch — box or IMP, not this Mac; the LR-side numbers above are already in hand). Kuchera showed CNN=1.00 under noise while LR collapsed; showing our generic arm matches that robustness is the only non-tied claim direction B can yield.
4. **[Optional, cheap] Kuchera FCNN arm on MATE.** Single-hidden-layer Keras FCNN on flattened voxels — trivially reimplementable in torch/sklearn on CPU once MATE H5 is reachable (not on this Mac). Adds a second published-method point in direction A at near-zero cost. Lower rank: FCNNs are weak baselines, adds little beyond VGG16.
5. **[Do not do]** Do not build a physics-informed Z01 arm (council-ruled; no independent physics vector exists). Do not pursue Solli/Dey/Wu/SAT-TPC transfers (no public data). Do not quote Kuchera's 0.98 LR against our 0.70 moments-LR as a "gap" — different feature spaces; the honest pair is pixel-LR 0.92 vs their 0.98.

## 5. Fairness caveats (consolidated)

- **Ceiling:** p/C public task saturates CNNs; only traditional baselines and noise-robustness discriminate. Any direction-B accuracy claim must carry this caveat.
- **Physics-informed non-transferability:** the public data cannot host our method's distinguishing feature. Direction B can only ever test the generic backbone. State this explicitly in the paper or a referee will.
- **Representation mismatch both ways:** their 128×128 single-channel charge projections vs our 80×48 dual-channel (charge+drift). Direction A requires a documented rendering choice; direction B is already native.
- **Task mismatch:** p/C (different Z, easy) vs our isotope tasks (same-Z ³He/⁴He, ¹³C/¹⁴C — harder). Method-family comparison only; never compare absolute numbers across datasets.
- **Implementation fidelity:** their code is TF1/Keras (2019); any rerun is a reimplementation. Their TF1 repo cannot run on this stack without porting.
- **Single-seed:** all existing numbers (ours and theirs) are effectively single-seed; transfer claims inherit the EXP3 seed-variance caveat.

## 6. Open questions for the lead

- Z01 publisher-test eval result (queued in `predump_chain.sh`) — needed to close direction B.
- Is any MATE classification H5 reachable for a CPU moments/pixel-LR baseline on *our* tasks? (`data/trk_h5_v2/` locally holds only `truth_sidecar_v2.h5`, 24 MB — no images.) If yes, item 4 becomes free.
- Does the doctrine require the *experimental* ⁴⁶Ar data for sim→exp transfer? It is not in the Zenodo record; obtaining it would need the authors/pytpc pipeline — flag as likely-unavailable.
- GPU budget: is one VGG16-style run (item 1) inside the remaining EXP3 reserve? It is a new training job, so it needs the lead's queue slot.

## 7. Evidence index

- Commands: `curl zenodo.org/api/records/3473953` (file inventory); `python3 99_System/.scratch/z01_baseline.py` (all local numbers); `gs -sDEVICE=txtwrite` on arXiv PDFs 1810.10350, 2605.28296; GitHub API on `ATTPC/event-classification`.
- Files: `src/data/z01.py:991` (physics=zeros), `src/data/dataset.py:9,11` (MATE image/physics schema), `runs/Z01-ResNet-Generic/z01-overnight-20260919-01/train.log` (val_acc 1.0000), `runs/Z01-Logistic-Moments/.../model.npz` + `normalization_stats.json` (0.7009 cross-check), `L1_Current_Campaign.md:20,62` (council ruling), `20_doc/EXP3_closing_analysis_2026-09-24.md:178,198` (Z01 eval queued).
- Kuchera numbers quoted from extracted PDF text: Table 1 (dataset sizes), Table 3 (sim→sim: LR 0.98/0.66 clean/noisy, FCNN 0.97/0.67, CNN 1.00/1.00), Table 5-6 (sim→exp F1 0.72→0.91 tuned).

## 8. Captain-facing inventory

No unresolved captain choice discovered. The ranked plan is a recommendation to the lead; item 1 needs a GPU queue decision that belongs to the lead's existing budget authority, not a new captain call. Completion gate: `fm-captain-hold.sh complete fm-ar-transfer --none`.
