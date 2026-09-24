<!-- Verbatim source section; overview: [[../fm-ar-gpu-ladder]] -->
<!-- SOURCE-BODY-START -->
## 1.2 Consolidated, de-duplicated GPU run list (every proposal across the five reports)

| ID | Run | Proposed by | Train / billed est. | Status of estimate |
|---|---|---|---|---|
| R1 | **RN-Raw-lf s42** (4He comparator) | gpu-plan G1; referee G2/A1; hehe-control §2d | 4.8 / ~6.2 h | measured basis (RN-Raw) |
| R2 | **XA-HC-lf s42 + RN-HC-lf s42** | gpu-plan G2; referee G3; hehe-control §2d | 6.4 / ~8.3 h | measured basis |
| R3 | **lf seeds 0,1 — all 4 arms (6 runs)** | gpu-plan G3+G4+G5; referee G4 | 33.4 / ~43 h | measured basis; XA-Raw-lf cost is est. |
| R4 | **XA-Raw-seed1 (triton grid hole)** | gpu-plan G6; referee G6/A11; seed-evidence G1 | ~5.5 / ~7.2 h | measured basis; optional |
| R5 | **Mechanism pack** — `query_mode: learned` latent-Q; `attn_dim: 512` capacity control; 4He zero-Q ablation | gpu-plan G7; referee A5/A7/G5; closing doc §5 (staged, unrun) | ~5.5 h each | **GATED** — cures, not diagnostics |
| R6 | **XA-Raw hyperparameter control** (e.g. dropout 0.5 or lr 3e-5) | referee A5 | ~5 h | **GATED** on D1–D5 |
| R7 | **Normalized-physics retrain** (`physics_norm: zscore` XA-Raw s42) | feature-norm §7; referee A8 | ~5 h | **GATED** on `scaled_cls` readout; config already merged (`configs/EXP3_XA_Raw_100k_physicsnorm_seed42.yaml`, PR#7) |
| R8 | **NimpSim Option A** — XA-Raw + RN-Raw on real ³He/⁴He @100k | hehe-control §1c | ~10 / ~13 h | est.: assumes NimpSim epoch cost ≈ Garfield Raw (unverified) |
| R9 | **NimpSim Option B** — §5.5 decomposition: RN-mod@160k (decisive run) + XA@40k + RN-mod@40k | hehe-control §1c | 12–18 / ~16–23 h | est.; **blocked on augmentation code** |
| R10 | **VGG16 direction A** (Kuchera recipe on MATE tasks) | transfer §4 item 1 | ~15–25 h per task (3–5× RN18) | roughest estimate in the set; Kuchera recipe is only 10 epochs so could be much less; **blocked on backbone code** |

**Duplicates removed:** referee G2–G4 ≡ gpu-plan G1–G5 (same runs, same costs — consistent). seed-evidence G2 "4He 2×2 ~19–26h for 4 runs" is superseded: it predates the XA-Raw-lf completion and used the inflated 7–14h XA-Raw figure; correct residual is R1+R2 = 3 runs, ~11.2h train. hehe-control §2d's "4He 2×2 completion ~11.2h" matches gpu-plan exactly. referee A11's "second triton-Raw anomaly test" ≡ R4 (same run). referee A7's `attn_dim: 512` ≡ gpu-plan G7 mechanism-pack item. EXP7 p/d/t baseline: proposed in openspec but its own proposal rates it droppable — excluded. Energy-regression baselines: comparison complete (21/21 Wilcoxon) — excluded.

<!-- SOURCE-BODY-END -->
