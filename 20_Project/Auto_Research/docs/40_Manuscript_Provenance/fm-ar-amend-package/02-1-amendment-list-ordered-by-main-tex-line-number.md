<!-- Verbatim source section; overview: [[../fm-ar-amend-package]] -->
<!-- SOURCE-BODY-START -->
## 1. Amendment list — ordered by `main.tex` line number

Sketches are starting points, not final wording. `L` = main.tex line in the live checkout.

### L53 — abstract: novelty claim + unqualified gains + "improves both classification" — **should-fix**

> **Current:** "…yet neither conventional cuts nor existing neural-network classifiers exploit the physics of energy loss encoded in track geometry. … the framework reaches 96.1\% $^{3}$He/$^{4}$He accuracy and 89.7\% for $^{13}$C/$^{14}$C---gains of 4.2 and 6.9 percentage points over a bare ResNet-18 baseline … Controlled tests show that the physics-informed fusion improves both classification and regression on trained reaction channels; …"

- **Problem (3):** (a) novelty overstated — Kuchera2019 (already cited) uses physics-derived moment features and Dalitz2019 (uncited) does AT-TPC trajectory recognition from track geometry; (b) the +4.2/+6.9 pp margins are confounded by ≥6 factors (baseline architecture, protocol, data scale — rows L263/L248/L255) and stated unqualified; (c) "improves both classification and regression" is contradicted on Raw at matched size (XA−RN = −1.33/−2.13 pp).
- **Sketch:** narrow to "…yet existing neural-network classifiers for AT-TPC data do not *fuse* physics-derived track descriptors with learned image features"; keep the numbers but qualify — "improvements of 4.2 and 6.9 percentage points over baselines trained under different conditions (Section 5.2)"; "improves continuous regression and denoised classification".
- **Evidence:** fm-ar-related-work §1 #1/#10, §5; fm-ar-claims-ledger #10; fm-ar-claims-refresh §6 (L53/L67 row); fm-ar-bib-additions §1c (no citation can fix the sentence as written). Note: the "neither…exploit" sentence exists **only** at L53 — the related-work report's "L67" pointer is loose (L67 is the motivation paragraph).
- **Severity:** should-fix (numbers stand; framing inflated — borderline must-fix on the novelty clause since a cited paper contradicts it).

### L76 — related-work roster: missing expected citations — **should-fix**

> **Current:** "…CNN-based track classification \cite{Kuchera2019}, unsupervised event identification \cite{Bradt2021}, ResNet-based event classification \cite{Wu2023ResNet}, Hoyle-state decay-branch classification \cite{Das2025}, and PointNet on point-cloud representations \cite{Dey2025PointCloud}. Architectures continue to diversify, with point-set transformers \cite{Robles2025}, attention-based graph networks \cite{Zhao2026GraphPT}, sparse convolutional embeddings \cite{Wheeler2025Sparse}, and domain-adaptive methods \cite{Guo2026DomainAdapt} applied to TPC data. …"

- **Problem:** roster omits the closest classical-tracking prior (Dalitz2019 — the paper's own HC baseline family) and two direct ML-in-AT-TPC predecessors (Fortino2022, Li2025PointCloud); `Bradt2021`'s bib entry is also wrong (first author Solli, wrong vol/pages/DOI — §3).
- **Sketch:** append "…CNN-based signal analysis \cite{Fortino2022}, and unpaired point-cloud translation for detector response \cite{Li2025PointCloud}"; optionally add a classical-tracking sentence at L73: "Classical track finding in AT-TPCs spans RANSAC and Hough line fits \cite{FischlerBolles1981,DudaHart1972}, hierarchical clustering \cite{Dalitz2019}, and Gaussian-mixture models \cite{Arokiaraj2025GMM}; we benchmark against the first two families on identical inputs."
- **Evidence:** fm-ar-related-work §1 #2, §3b; fm-ar-bib-additions §1b, §3; fm-ar-bib-fixsheet §2 (`Bradt2021` row).
- **Severity:** should-fix.

### L79 — "consistently improves" + "gains derive chiefly from physics features" — **should-fix**

> **Current:** "…Across this suite, physics-informed fusion consistently improves both classification and continuous regression on trained reaction channels; the benefit of the cross-attention mechanism itself is task-dependent, clearest for regression, while classification gains derive chiefly from the physics features and from training-data scale. …"

- **Problem:** "consistently improves both classification" is falsified on Raw at matched size (−1.33/−2.13 pp, McNemar-guaranteed p≤1.5e-5/4.5e-12); "derive chiefly from the physics features" is overstated the other way — on HC the physics features are largely redundant (D6: scaled_cls ≈ original; zero_cls −0.1 pp) and the HC−Raw gap is image-side denoising (physics-free ResNet gains +6.5 pp on HC). The sentence's two clauses contradict each other.
- **Sketch:** "…physics-informed fusion improves continuous regression and denoised classification; on raw images the physics side channel can degrade the matched baseline — a scale pathology we diagnose explicitly. Classification gains derive chiefly from data scale and image denoising."
- **Evidence:** fm-ar-related-work §1 #5/#6; fm-ar-claims-refresh §6 (L79 row), §3b (D6 band-reads); fm-ar-claims-ledger §4.4 (hc-vs-raw).
- **Severity:** should-fix.

### L98 — `mate_geometry_schema` caption nit — **optional**

> **Current:** "…together with the pads fired by a representative simulated track."

- **Problem:** the track is a parametric schematic line (`plot_mate_geometry_schema.py` L274–288), not a simulated event.
- **Sketch:** "a representative track".
- **Evidence:** fm-ar-figure-provenance RISK 8.
- **Severity:** optional.

### L144 — "comprise five particle species" — **should-fix**

> **Current:** "The resulting Garfield++ datasets comprise five particle species (p, d, t, $^{3}$He, and $\alpha$), with $10^5$ events per species (500k total)."

- **Problem:** incomplete — ¹³C/¹⁴C Garfield_HC files exist and fed the EXP2 fusion comparison (`configs/EXP2_*_13C14C.yaml`).
- **Sketch:** scope to the V5/V6 production ("comprised five particle species … for the V5/V6 production; two further species ($^{13}$C, $^{14}$C) were later generated for the fusion-mechanism comparison of Section 5.5").
- **Evidence:** fm-ar-methods-audit M7 (#4); fm-ar-claims-ledger #19.
- **Severity:** should-fix.

### L166 — unconditional projection/mask claims — **should-fix**

> **Current:** "…To respect the interlocking triangular pad geometry, each hit is assigned to the nearest pad center before accumulation. Pads within the central beam-hole region are masked to zero, reflecting the physical hole in the detector pad plane."

- **Problem:** false for Garfield_Raw — the C postprocessor used floor binning with clamping (no triangular mapping) and applied no hole mask; all V6/EXP1–3/EXP2 results run on Garfield data.
- **Sketch:** scope the sentences to the NimpSim/TRK pipeline and add "the Garfield++ post-processor uses floor binning and applies no hole mask (Section 2.4)".
- **Evidence:** fm-ar-methods-audit M6 (#8, #9), `S1 spec:236,243`; fm-ar-claims-ledger #18.
- **Severity:** should-fix.

### L170 — "physics features are normalized in the same way" + unconditional channel description — **must-fix**

> **Current:** "…Channel 0 encodes charge deposition as a pad-wise sum of $\log(1+q)$ … for each pad, the mean of $x_{\mathrm{norm}}$ across contributing hits is stored. … Before training, each channel is standardized using mean and standard deviation computed from the training set; physics features are normalized in the same way."

- **Problem:** the last clause is **false** — physics features enter raw (`src/data/dataset.py:472-475` "NOT normalized, Req-7.2"; `src/data/normalization.py:24-27`; `normalization_stats.json` covers ch0/ch1 only; legacy published runs identical). This is load-bearing, not cosmetic: the raw Izz≈170 DC is now a measured mechanism (fixes 108/128 hidden ReLU signs; D6 `scaled_cls` collapse on Raw). Secondary: Ch0 "sum of log(1+q)" and Ch1 "the mean" are unconditional but Garfield uses `log1p(Σq)` per pad and a charge-weighted Ch1 mean (disclosed at L142, contradicted here).
- **Sketch:** "…each channel is standardized using mean and standard deviation computed from the training set; the physics features enter unnormalized (Section 4.2)." Plus a Garfield scoping clause for the channel definitions.
- **Evidence:** fm-ar-methods-audit M1 (#10–13); fm-ar-claims-ledger #3, #18; fm-ar-claims-refresh §1 #3; `src/data/dataset.py:472-475`, `src/data/normalization.py:24-27`, `S1 spec:297-303,329,346`.
- **Severity:** must-fix.

### L190 — fabricated citation `He2020ResNetSmall` — **must-fix**

> **Current:** "The input images are compact ($80 \times 48$), so we modify ResNet-18 to preserve spatial detail while keeping the architecture lightweight, consistent with guidance for small-scale scientific data \cite{He2020ResNetSmall}."

- **Problem:** arXiv:2002.03544 is "On rational maps with buried critical points" (math) — no such ResNet paper exists.
- **Sketch:** "…keeping the architecture lightweight, following the small-image ResNet configuration \cite{ResNet,He2016Identity}." (The 3×3/stride-1/no-maxpool head is the CIFAR-10 configuration of ResNet §4.2.)
- **Evidence:** fm-ar-bib-fixsheet §1a; fm-ar-related-work §2; fm-ar-claims-refresh §6.
- **Severity:** must-fix.

### L207 — "standardized using training-set statistics before fusion" — **must-fix**

> **Current:** "…These four features are standardized using training-set statistics before fusion."

- **Problem:** false — same finding as L170; features go raw into both `query_proj` and the classifier concat (`src/models/cross_attention.py:160`, `src/models/model.py:354-377`).
- **Sketch:** "These four features enter the network unnormalized; their raw scale (Izz ≈ 10² in pad-bin units) is itself a design variable we return to in Section 5."
- **Evidence:** fm-ar-methods-audit M1 (#19); fm-ar-claims-ledger #3; `src/data/dataset.py:472`.
- **Severity:** must-fix.

### L211 — fabricated citation `Li2023CrossAttention` — **must-fix**

> **Current:** "Spatial visual features from the ResNet backbone are fused with the physics features via cross-attention \cite{Li2023CrossAttention}."

- **Problem:** no such article exists in IEEE TNNLS or anywhere (Crossref title search returns unrelated papers). Optional deeper honesty: the trained module behaves as single-query attention pooling + parallel physics concat (permuted_q Δ=0 on 6/6 checkpoints) — a §5.6 framing matter, not required here.
- **Sketch:** "…fused with the physics features via cross-attention \cite{Attention,Perez2018FiLM}."
- **Evidence:** fm-ar-bib-fixsheet §1b; fm-ar-related-work §2, §1 #7.
- **Severity:** must-fix.

### L238 — energy Huber β unstated — **optional**

> **Current:** "…a Smooth-L1 (Huber) criterion evaluated on valid slots only---in radians for angles (transition point $\beta = 0.0175$~rad $\approx 1^{\circ}$) and in MeV for energies."

- **Problem:** energy β = 0.05 MeV (`configs/TRK5.yaml` `loss.beta: 0.05`) never stated.
- **Sketch:** "…and in MeV for energies ($\beta = 0.05$~MeV)".
- **Evidence:** fm-ar-methods-audit #22; fm-ar-claims-ledger #21.
- **Severity:** optional.

### L248 — miscited label smoothing + wrong baseline protocol + incomplete split disclosure — **must-fix**

> **Current:** "All models are trained in PyTorch \cite{PyTorch} with cross-entropy loss; the cross-attention and V6 runs use label smoothing 0.05 \cite{Jadon2020Loss} and gradient clipping 0.5, while the V4 baselines use no label smoothing and gradient clipping 1.0. … Training uses an 80/20 train/validation split for the main tasks, and all reported accuracies refer to the held-out validation sets."

- **Problem (3):** (a) `Jadon2020Loss` is a segmentation-loss survey — miscited for label smoothing; (b) "V4 baselines use no label smoothing and gradient clipping 1.0" is wrong for V4-CC-RN (LS 0.05, clip 0.5 — disclosed one sentence later at L252 but the blanket claim stands); (c) "held-out validation sets" is incomplete — for the §5 classification tasks there is **no test split**: the 80/20 val doubles as early-stopping and best-checkpoint selection set (selection premium measured 0.21–1.74 pp, mean 0.71 pp across 12 EXP3 runs).
- **Sketch:** "…label smoothing 0.05 \cite{Szegedy2016LabelSmoothing} and gradient clipping 0.5, while the V4 $^{3}$He/$^{4}$He and p/d/t baselines use no label smoothing and gradient clipping 1.0." + "…all reported accuracies refer to the held-out validation sets, which also served for early stopping and checkpoint selection; no separate test split exists for the classification tasks (selection premium ≤1.7 pp across runs)."
- **Evidence:** fm-ar-bib-fixsheet §2; fm-ar-methods-audit #23; fm-ar-claims-ledger #5, #20; fm-ar-claims-refresh §5 #20 (selection premium); `S2 spec:510`, `S3 spec:165`.
- **Severity:** must-fix.

### L255 — Table 2 caption "final-epoch values" — **must-fix**

> **Current:** "…Cross-attention accuracies are best-epoch validation values, whereas the V4 baselines listed here report final-epoch values (the V6 baselines in Table~\ref{tab:v6-ablation} use best-epoch selection)."

- **Problem:** false — legacy code loads `best_model.pth` (best val acc) for **all** models including baselines (`S3 spec:428` D-CKPT-RN; `S4 spec:205,219`).
- **Sketch:** "All models report best-epoch validation values."
- **Evidence:** fm-ar-methods-audit M3 (#27); fm-ar-claims-ledger #4.
- **Severity:** must-fix.

### L263 — Table 2 baseline is a different architecture, undisclosed — **should-fix**

> **Current:** "$^3$He vs.~$^4$He (binary) & 91.9\% & \textbf{96.1\%} \\"

- **Problem:** the 91.9% baseline is a **standard** ResNet-18 (7×7/s2 conv1, maxpool, `pretrained_backbone: false`, single-layer head, lr 1e-4, bs 64, 50 ep, warmup 0) — not the modified backbone of §4.1 and not ImageNet-initialized; never disclosed.
- **Sketch:** disclose in the Table 2 caption or §5.2: "the $^{3}$He/$^{4}$He baseline is a standard ResNet-18 (unmodified backbone, no ImageNet initialization, single-layer head)".
- **Evidence:** fm-ar-methods-audit M4 (#17); fm-ar-claims-ledger #7; `S3 spec:119-128`, `S2 spec:509,648`.
- **Severity:** should-fix.

### L298 — "+1.6 pp on Raw … most valuable when image quality is degraded" — **should-fix**

> **Current:** "…Cross-attention in turn outperforms the bare ResNet-18 by $+0.8$~pp on HC data and $+1.6$~pp on Raw data, the larger advantage on noisy inputs indicating that the MoI features are most valuable when image quality is degraded. These architecture-level comparisons are confounded by dataset size (CrossAtt 400k vs.\ ResNet 100k) and are indicative rather than definitive; …"

- **Problem:** the mechanism claim is now contradicted at matched size — EXP3 matched-size/protocol runs give XA−RN = **−1.33/−2.13 pp on Raw** (McNemar-guaranteed significant) and ≈0 on HC; the V6 Raw advantage was the data-scale confound the caption admits, and D6 shows the Raw head's physics dependence is a magnitude-driven static bias, not quality-adaptive routing. The existing hedge understates: the confound is measured, not hypothetical.
- **Sketch:** keep the V6 numbers with the size confound, then: "at matched size and protocol on the Garfield α-diagnostic task the Raw-side advantage inverts (−1.3 to −2.1 pp), so the V6 Raw margin reflects training-set scale rather than noise-adaptive value of the MoI features."
- **Evidence:** fm-ar-claims-ledger #8; fm-ar-claims-refresh §1 #8 (D6 sharpening); fm-ar-related-work §1 #5. Settling check for the true-4He direction: Rung 1 (§4).
- **Severity:** should-fix.

### L313–319 — unverifiable `Koch2021` + refuted causal framing — **must-fix**

> **Current (L313):** "We visualize the spatial attention weights by projecting the attention map back to the $y$-$z$ plane and overlaying it on the charge image, in line with the recent emphasis on explainable ML in nuclear physics \cite{Koch2021}. A representative example (Fig.~\ref{fig:attention-maps}) shows elevated attention near the track termination where the Bragg peak occurs. This behavior is physically consistent with isotope discrimination: …"
> **Current (L319 caption):** "…The attention concentrates on the high-$z$ end of the track, where the Bragg peak forms."

- **Problem (2):** (a) `Koch2021` — no such article in EPJA or Crossref (unverifiable/likely fabricated); (b) the causal framing is refuted on every checkpoint tested: on HC the attention collapses to a fixed sink token (87% argmax on token 50, f_Bragg ≤0.02, 3/3 seeds); on Raw f_Bragg≈0.47 is seed-42-only and the map is image-driven (`permuted_q` Δ=0 on 6/6 — the physics query does not steer it). The figure pixels are a real ¹⁴C event (verified provenance, L315 comment); the framing is the problem.
- **Sketch:** "…in line with the emphasis on interpretable machine learning in nuclear physics \cite{NaturePhysicsReview}; attention weights alone are not evidence of mechanism \cite{Jain2019Attention}." Reframe the reading as descriptive: "the map concentrates near the track termination; counterfactual permutation of the physics query leaves the map unchanged, so we treat it as image-driven attention pooling rather than physics-guided routing."
- **Evidence:** fm-ar-bib-fixsheet §1c; fm-ar-claims-ledger #9; fm-ar-claims-refresh §1 #9 (D6 `centered_q` nuance: query DC load-bearing, content inert); fm-ar-figure-provenance RISK 1; fm-ar-attn-sink §3 (via ledger).
- **Severity:** must-fix.

### L332 — mechanism hypothesis: optional citations + max|h| wording guard — **optional**

> **Current:** "…As to mechanism we can offer only a hypothesis, not a tested explanation: the physics-derived descriptors compress each track to global geometric summaries under which some unseen channels may resemble the trained targets more closely than their raw images do, which would bias the fused model toward a confident target assignment. A controlled perturbation study would be required to test this."

- **Problem:** none as written (correctly hedged). Two optional upgrades: (a) the hypothesis *is* shortcut learning — cite `Geirhos2020Shortcut`; `Darcet2024Registers`/`Sun2021ReAct` may be cited as documented phenomena for the proposed perturbation study (conditional — drop if the captain prefers zero conditional cites); (b) **wording guard:** if the max|h| activation result is added anywhere in §5.7, do **not** write "flags unseen carbon isotopes at AUROC 0.90" — a seen channel scores the same (A vs C+D: 0.906/0.903) and unseen-vs-all-seen drops to 0.67/0.58.
- **Sketch:** "…which would bias the fused model toward a confident target assignment---an instance of shortcut learning \cite{Geirhos2020Shortcut}. Attention sinks on low-information tokens \cite{Darcet2024Registers} and activation-space OOD detection \cite{Sun2021ReAct} are documented phenomena that a controlled perturbation study could test here."
- **Evidence:** fm-ar-bib-additions §1e, §3; fm-ar-maxh-confound §3–4; fm-ar-claims-refresh §6 (L323–332 row).
- **Severity:** optional.

### L359 — EXP8 forest caption lists a nonexistent row — **must-fix**

> **Current:** "…Rows span seen-clutter (C, D), the empty-target null channel, interpolation (E), and the three far-out-of-distribution channels (F, G, H); the pooled far-OOD estimate (diamond) is $+0.071$. …"

- **Problem:** the figure has **no null-channel row** — `plot_EXP8_delta_forest.py` L66–67 excludes A/B/null by construction (verified visually: rows are C, D, E, F, G, H + pooled diamond). A referee can check this in seconds.
- **Sketch:** delete "the empty-target null channel," from the row list.
- **Evidence:** fm-ar-figure-provenance RISK 2; fm-ar-claims-refresh §6.
- **Severity:** must-fix.

### L367–369 — first "controlled experiment" ran on the wrong task — **must-fix**

> **Current (L367):** "Two controlled experiments locate the source of the in-distribution classification gains, and together they form a central finding of this work: on these tasks the improvement comes from the physics-derived features and from training-data scale, not from the cross-attention mechanism that fuses them."
> **Current (L369):** "The first experiment separates architecture from data on the $^{3}$He/$^{4}$He task. Retrained on an identical 100k-event sample, the cross-attention model and the bare ResNet-18 reach 95.80\% and 95.77\% validation accuracy; the architecture effect of $+0.024$~pp is not significant … Of the $+1.80$~pp separating the 100k ResNet baseline from the 400k cross-attention model, roughly 99\% is data scale and about 1\% is architecture. The 96.1\% headline for this pair (Table~\ref{tab:classification-results}) is a full-size (160k-train), augmented result; the decomposition shows how little of its margin over a matched ResNet is architectural."

- **Problem:** the 95.80/95.77 pair is EXP1-XA-HC-100k vs V6-RN-HC on **Garfield_HC α-vs-Nonα** (`task_type "3He_4He"` maps label 4 → class 0 = α-vs-rest, `src/run_experiment.py:618-629`) — not NimpSim ³He/⁴He. No matched XA-vs-RN exists on true ³He/⁴He at any size, so the decomposition does not touch the 96.1% headline it claims to explain. (Nit: 95.80−95.77 = 0.03, not 0.024.) L252's pointer "Section 5.8 decomposes this margin" inherits the same mislabel.
- **Sketch:** rename the task throughout the paragraph to "the $\alpha$ vs.\ Non$\alpha$ task on Garfield_HC" (the name §2.4/L146 already uses correctly) and retarget the claim: the decomposition shows the Garfield α/Nonα margin is ~99% data scale; state explicitly that no equivalent decomposition exists for the NimpSim ³He/⁴He headline.
- **Evidence:** fm-ar-methods-audit M2 (#33); fm-ar-claims-ledger #1, #25; fm-ar-closing-check add-claim 6; `src/run_experiment.py:618-629`, `configs/EXP1_XA_HC_100k.yaml`.
- **Severity:** must-fix.

### L381 — second experiment: same mislabel + inflated numbers + wrong caveat — **must-fix**

> **Current:** "…Under identical conditions on Garfield\_HC data ($10^{5}$ events, parameter-matched to within 0.1\% at $\approx 1.12 \times 10^{7}$ parameters, single seed), we compared plain concatenation, gated fusion, and cross-attention … on the $^{3}$He/$^{4}$He task the ordering was the same (96.98\%, 96.94\%, and 95.80\%), although the cross-attention entry there was evaluated on a smaller validation set and is not fully controlled. On both isotope pairs the simplest fusion is at least as accurate as attention, …"

- **Problem (3):** (a) the "³He/⁴He" row is again α-vs-Nonα; (b) the EXP2-3He4He runs globbed **7 files** — 5 light species + ¹³C/¹⁴C written into `Garfield_HC/` hours earlier — so val = 35k with ~10k near-free carbon events inflating all three numbers ~1.2 pp (clean-subset estimate ≈95.7–95.8% for all three: a tie, not an ordering); (c) the "smaller validation set" caveat is wrong twice — EXP1-XA's 25k val is *smaller* than EXP2's 35k, and the real problem is undisclosed composition + asymmetric training pools (EXP2 trained on 28.6% carbon). Also "10⁵ events" is imprecise (EXP2-CC used 100k = 2×50k; the α/Nonα runs 125k = 5×25k).
- **Sketch:** rename the task; replace the caveat with the real one: "…on the $\alpha$ vs.\ Non$\alpha$ task the ordering was the same (96.98\%, 96.94\%, and 95.80\%), although those runs' negative pool inadvertently included $^{13}$C/$^{14}$C events (≈29% of training data), inflating all three accuracies by ≈1 pp; on the clean subset the three mechanisms are statistically tied." Optionally prepend the Hessel & Lee precedent: "Multimodal models are known to match or beat their baselines while ignoring the cross-modal interaction \cite{HesselLee2020}."
- **Evidence:** fm-ar-claims-ledger #2; fm-ar-methods-audit #34; fm-ar-exp2-contam §1–2 (via ledger); fm-ar-bib-additions §3 (L381 sketch); `openspec/changes/EXP2-fusion-mechanism-comparison/implementation_log.md:103-118,151-153`.
- **Severity:** must-fix.

### L387 — portability claim unsupported — **should-fix**

> **Current:** "Despite these caveats, the approach should carry over to other AT-TPC configurations: the projection and feature definitions depend only on the pad geometry and coordinate system, so the method is portable once detector-specific mapping and calibration are established."

- **Problem:** plausible but zero evidence — the only public AT-TPC dataset (Kuchera Zenodo 3473953) cannot host the physics-informed arm (no independent physics vector in 2D projections), and the Z01 publisher-test arm just went degenerate (37σ charge-scale shift) — fresh evidence that cross-dataset transfer is nontrivial.
- **Sketch:** "…so the method is portable once detector-specific mapping and calibration are established, though cross-experiment transfer of TPC representations is itself an open problem \cite{Wheeler2026Transfer}."
- **Evidence:** fm-ar-claims-ledger #24; fm-ar-related-work §1 #9; fm-ar-bib-additions §1d; fm-ar-claims-refresh §0 #10 (Z01 degenerate).
- **Severity:** should-fix.

### L475 — §6.5 methods used but never cited — **should-fix**

> **Current:** "The paired comparison contains seven methods evaluated on the same held-out events: the ResNet and cross-attention CNNs; fixed-parameter RANSAC, Hough-transform, and hierarchical-clustering estimators; and validation-optimized Hough-transform and hierarchical-clustering variants. … Reconstructed range is converted to kinetic energy by linear inverse interpolation of the active LISE++ table for $^{4}$He in He96C4O8 (96:4 He:CO$_{2}$), using the Hubert \emph{et al.} column. …"

- **Problem:** RANSAC, Hough, hierarchical clustering, LISE++, and the Hubert table are all named with no citation; `Arokiaraj2025GMM` sits uncited in the bib.
- **Sketch:** "…fixed-parameter RANSAC \cite{FischlerBolles1981}, Hough-transform \cite{DudaHart1972}, and hierarchical-clustering \cite{Dalitz2019} estimators; … Gaussian-mixture-model track reconstruction in active targets \cite{Arokiaraj2025GMM} is a further classical alternative not included in this paired family. … the active LISE++ \cite{Tarasov2008LISE} table … using the Hubert \emph{et al.} \cite{Hubert1990} column."
- **Evidence:** fm-ar-bib-additions §1a, §3; fm-ar-bib-fixsheet §3; fm-ar-related-work §3a.
- **Severity:** should-fix.

### L503 — conclusion inherits the mislabeled decomposition + unqualified gains — **must-fix**

> **Current:** "…Controlled tests attribute the in-distribution classification gains to the physics features and to training-data scale rather than to the fusion mechanism: at matched training size the $^{3}$He/$^{4}$He architecture effect is not significant, and among fusion strategies simple concatenation performs at least as well as cross-attention. … it reaches 96.6\% accuracy for $\alpha$ versus Non$\alpha$ classification …"

- **Problem:** the "matched training size the $^{3}$He/$^{4}$He architecture effect" rests on the mislabeled Garfield α-vs-Nonα experiment (L369) — wrong as written; the 96.1%/89.7%/4.2/6.9 pp framing inherits L53's missing qualification; "96.6% α vs Nonα" additionally inherits the unsettled Table-4 task identity (§4).
- **Sketch:** mirror the L369/L53 fixes: "at matched training size on the Garfield $\alpha$ vs.\ Non$\alpha$ task the architecture effect is not significant"; qualify the headline margins as indicative.
- **Evidence:** fm-ar-claims-ledger #1, #10, #11; fm-ar-related-work §1 #10.
- **Severity:** must-fix.

### L507 — "minimal 4-feature physics vector" caveat — **optional**

> **Current:** "Investigation of extended physics features (Length, Eccentricity) yielded a negative result that constrains the design space and strengthens the case for the minimal 4-feature physics vector."

- **Problem:** stands, but D6 confirms the live design question is the vector's *scaling*, not just its dimensionality (Raw head depends on physics magnitude; HC head ignores physics entirely).
- **Sketch:** append "— though the features' unnormalized scale, not their count, is the open design question (Section 5.6)."
- **Evidence:** fm-ar-claims-ledger #32; fm-ar-claims-refresh §5 #32.
- **Severity:** optional.

### L516 — acknowledgement placeholder — **must-fix**

> **Current:** "This work was supported by [NEED to clarify later]."

- **Problem:** placeholder text visible to a referee.
- **Sketch:** fill in the grant/support text.
- **Evidence:** fm-ar-claims-ledger #23.
- **Severity:** must-fix.

### L526–531 — miscited `Adam` + "All runs share … warmup" — **must-fix**

> **Current (L526):** "…All runs use the AdamW optimizer \cite{Adam} with weight decay $10^{-4}$, learning rates scheduled with ReduceLROnPlateau (factor 0.5, patience 5) preceded by a 5-epoch linear warmup from $1 \times 10^{-6}$ to the target learning rate, and early stopping (patience 15)."
> **Current (L531 caption):** "…All runs share the AdamW optimizer (weight decay $10^{-4}$), a ReduceLROnPlateau schedule (factor 0.5, patience 5) with a 5-epoch linear warmup from $1 \times 10^{-6}$, and early stopping (patience 15). …"

- **Problem (2):** (a) `\cite{Adam}` (Kingma & Ba) is miscited for AdamW → `AdamW` (Loshchilov & Hutter, arXiv:1711.05101); (b) "All runs share … a 5-epoch linear warmup" is false for V4-HeHe-RN and V4-pdt-RN (`warmup_epochs: 0`).
- **Sketch:** "…the AdamW optimizer \cite{AdamW} …" + scope the shared-settings sentence: "All cross-attention, V6, and reconstruction runs share …" (or footnote the two baseline exceptions).
- **Evidence:** fm-ar-bib-fixsheet §2; fm-ar-methods-audit M5 (#24); fm-ar-claims-ledger #6; `S2 spec:509`, `S3 spec:226`.
- **Severity:** must-fix.

---

<!-- SOURCE-BODY-END -->
