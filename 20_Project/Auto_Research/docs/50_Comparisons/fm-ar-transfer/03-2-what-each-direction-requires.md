<!-- Verbatim source section; overview: [[../fm-ar-transfer]] -->
<!-- SOURCE-BODY-START -->
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

<!-- SOURCE-BODY-END -->
