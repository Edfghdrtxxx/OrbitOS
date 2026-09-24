<!-- Verbatim source section; overview: [[../fm-ar-transfer]] -->
<!-- SOURCE-BODY-START -->
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

<!-- SOURCE-BODY-END -->
