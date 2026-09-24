<!-- Verbatim source section; overview: [[../fm-ar-gpu-ladder]] -->
<!-- SOURCE-BODY-START -->
## 1.4 Prerequisites consolidated

**CPU results to wait for (all on box 176, in flight or queued — closing doc §15):**
- `predump_chain.sh` → 12 `predictions.csv` dumps → true McNemar/paired bootstrap on all same-seed pairs (the only paired-statistics path; my §2 bounds are the stopgap).
- `diag_chain.sh` → D1–D4 probes → H1a capacity vs H1b crowding → gates R5/R6.
- `d5_chain.sh` + fm-ar-d6-battery → `permuted_cls`/`mean_cls`/`scaled_cls` + predicted-class histograms → gates R7 and every "load-bearing" sentence.
- `e23_chain.sh` → EXP8 clipped/zero/permuted physics → OOD-leak mechanism confirmation.
- Re-pulls: `data_split.json` ×2 (0-byte: XA-Raw-s0, XA-Raw-lf), XA-Raw-lf `run.log` (cost calibration for R3).

**Data staging:**
- NimpSim `3He_100k.h5`/`4He_100k.h5` — **presence on box 176 unverified; likely absent** (EXP3 disk holds Garfield only). Needs transfer from IMP server or legacy Windows disk before R8/R9. Open question Q1.
- Garfield H5s — already on box (all lf runs reuse them).
- VGG16 — ImageNet weights (`IMAGENET1K_V1`) must be downloadable/cached on box.

**Code:**
- **Augmentation is a silent no-op** (`src/data/dataset.py:587-588`, "Actual transforms wired in S2 (T3.6)" never landed). R9 Option B silently runs no-aug without it. fm-ar-augment is implementing the V4 recipe (HFlip/VFlip/Rot10°) now — in flight.
- **VGG16 backbone does not exist in MATEModel** — `configs/baseline_kuchera_vgg16.yaml` is a pinned hyperparameter contract, not runnable. fm-ar-kuchera-baselines is building the rendering + arms now — in flight.
- `physics_norm: zscore` — merged (PR#7); R7 is config-ready.
- lf configs for RN-Raw/XA-HC/RN-HC — recipe verified (`file_class_list [1,1,1,1,0]`); whether staged on box is open question Q3.
- NimpSim runs need **no code change** — `file_class_list: [0,1]` over `[3He_100k.h5, 4He_100k.h5]` bypasses `label_map` (`dataset.py:333-334`, `run_experiment.py:545-562`).

<!-- SOURCE-BODY-END -->
