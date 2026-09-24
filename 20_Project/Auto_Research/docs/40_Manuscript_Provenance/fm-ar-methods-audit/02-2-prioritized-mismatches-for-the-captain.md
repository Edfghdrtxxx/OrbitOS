<!-- Verbatim source section; overview: [[../fm-ar-methods-audit]] -->
<!-- SOURCE-BODY-START -->
## 2. Prioritized mismatches for the captain

Ordered by likely referee impact. For each: what the manuscript says → what the code actually does.

**M1 — Physics-feature "standardization" is false (two places).**
`main.tex:170` ("physics features are normalized in the same way") and `main.tex:207` ("standardized using training-set statistics before fusion"). Code feeds raw float32 physics into both the attention query and the classifier concat: `src/data/dataset.py:472-475`, `src/data/normalization.py:24-27`, `src/models/model.py:354-377`. The published legacy runs did the same (`S1 spec` D-PHYS-NORM, `S3 spec:254`). This is not cosmetic: the prior scout showed the raw ~170-magnitude Izz DC term tiles 108/128 hidden ReLUs (`fm-ar-feature-norm/report.md` §3) — the paper currently describes a normalization that would have prevented the mechanism now under investigation. **Highest priority.**

**M2 — The §5.5 "³He/⁴He task" controlled experiments are actually α-vs-Nonα on Garfield_HC.**
`main.tex:369` ("on the ³He/⁴He task… 95.80% and 95.77%") and `main.tex:381` (fusion comparison "on the ³He/⁴He task… 96.98/96.94/95.80"). `src/run_experiment.py:618-620`: `task_type "3He_4He"` = label 4 (⁴He)→0, {p,d,t,³He}→1 — i.e. **α vs Nonα**, on Garfield_HC files (`configs/EXP1_XA_HC_100k.yaml`, `EXP2_*_3He4He.yaml` use the 5 Garfield_HC species files; `runs/EXP3-*/config.yaml` confirms; class names in metrics are "Alpha (4He)"/"Non-alpha"). The decomposition therefore does **not** explain the NimpSim ³He/⁴He headline (96.1%) as the text claims — it decomposes the Garfield α/Nonα margin. The numbers are real; the task label is wrong. Also in the same paragraph: "evaluated on a smaller validation set" is incorrect — EXP1 and EXP2 3He4He runs share the identical 125k→100k/25k split (`EXP2 implementation_log.md:8,113-115`).

**M3 — "V4 baselines report final-epoch values" is false.**
`main.tex:255` (Table 2 caption). Legacy code loads `best_model.pth` (best val acc) for all models including baselines: `S3 spec` D-CKPT-RN (`spec.md:428`), `S4 spec:205,219`. The caption carries over the original paper's incorrect claim; the audit already resolved it the other way.

**M4 — The ³He/⁴He baseline is a different architecture, undisclosed.**
Table 2's "Baseline ResNet-18" (91.9%) is a **standard** ResNet-18 (7×7/s2 conv1, maxpool, `pretrained_backbone: false`), not the modified backbone of §4.1, and randomly initialized — `S3 spec:119-128` (D-HEHE-RN-BACKBONE, D-HEHE-RN-PRETRAINED), `S2 spec:509`. §4.1's ImageNet-adaptation sentence reads as applying to "the network" generally. Separately, V4 baseline heads are single-layer `Dropout(0.3)→Linear(512,C)`, not the two-layer head of §4.3 (`S2 spec:648`). And its protocol differs beyond what §5.1 discloses: lr 1e-4, bs 64, 50 epochs, **no warmup**, norm stats from 10k samples (`S2 spec:509`).

**M5 — "All runs share … a 5-epoch linear warmup" is false for the standard-protocol baselines.**
`main.tex:526,531` (App A + Table 6 caption). V4-HeHe-RN and V4-pdt-RN use `warmup_epochs: 0` (`S2 spec:509`, `S3 spec:226`). Same paragraph's "V4 baselines use no label smoothing and gradient clipping 1.0" (line 248) is also false for V4-CC-RN (LS 0.05, clip 0.5 — disclosed one sentence later but the blanket statement stands uncorrected).

**M6 — §3 preprocessing claims are unconditional but path-dependent (Garfield differs on three points).**
- `main.tex:166` "each hit is assigned to the nearest pad center" — Garfield_Raw used floor binning + clamping, no triangular-pad mapping (`S1 spec:236`).
- `main.tex:166` "pads within the central beam-hole region are masked" — not applied to Garfield_Raw (`S1 spec:236,243`).
- `main.tex:170` Ch0 "pad-wise sum of log(1+q)" — Garfield (Raw and HC) uses `log1p(Σq)` per pad, not `Σ log1p(q)` (`S1 spec:297-303`); Ch1 "the mean" is charge-weighted for Garfield_Raw (disclosed at line 142 but contradicted by the unconditional §3.2 wording).
These matter because the V6/EXP1-3/EXP2 results all run on Garfield data.

**M7 — "Garfield++ datasets comprise five particle species" is incomplete.**
`main.tex:144`. 13C/14C Garfield_HC files exist and produced the §5.5 fusion-comparison numbers (`configs/EXP2_*_13C14C.yaml`; `EXP2 implementation_log.md:50,246-247`). Either scope the sentence to the V5/V6 production or acknowledge the EXP2 additions.

**Minor / cosmetic:**
- Energy-regression SmoothL1 β=0.05 MeV never stated (`configs/TRK5.yaml` `loss.beta`); only the angle β is given (line 238).
- "10⁵ events" in §5.5 (line 381) is imprecise: EXP2-CC used 100k total (2×50k), the α/Nonα runs 125k total (5×25k).
- Normalization stats come from a subsample (2000/3200/10000 depending on run), not the full training set — worth a parenthetical.
- Undisclosed scheduler/ES details: `min_lr=1e-6`, ES `min_delta=1e-4`, ES monitors val_loss while checkpoint selection is best val_acc.
- EXP8/EXP3/TRK runs use `mixed_precision: true` (fp16 autocast) — not stated anywhere; legacy V4/V6 ran fp32 (`mixed_precision: false` in EXP1/EXP2 configs). Relevant to M1 since physics ~170 is cast to fp16 (`model.py:337`).

<!-- SOURCE-BODY-END -->
