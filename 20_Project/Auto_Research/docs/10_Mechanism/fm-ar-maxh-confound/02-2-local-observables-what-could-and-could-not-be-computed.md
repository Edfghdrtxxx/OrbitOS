<!-- Verbatim source section; overview: [[../fm-ar-maxh-confound]] -->
<!-- SOURCE-BODY-START -->
## 2. Local observables — what could and could not be computed

**No EXP8 event data exists on this Mac.** `data/exp8/` is absent in both the live checkout and this worktree (`data/` contains only `srim/`, `trk_h5_v2/`); `99_System/.scratch/exp8/` holds only synthetic test fixtures. Per-event observables (total deposited charge, hit count, track length, input magnitude, and even the stored `physics_features` Iyy/Izz/Iyz/total_mass) are **not computable locally** — neither per-event nor group-level. The only joinable per-event quantities are the auditfix model's own outputs (`predictions.csv`: p_A, p_B, p_other, rejection_score — 7500/7500 join hits) and the cached activations themselves.

What I computed instead (all CPU, from the caches + auditfix predictions.csv):

### 2a. Reproduction of the claim (exact)
`scripts/analysis/exp8_activation_ood.py` defaults: seen = C+D, unseen = E + F+G+H.

| score | arm | E vs C+D | F+G+H vs C+D | E+F+G+H vs C+D |
|---|---|---|---|---|
| max_abs | ResNet | 0.710 | **0.898** | 0.804 |
| max_abs | CrossAtt | 0.651 | **0.903** | 0.777 |
| l2 | ResNet | 0.614 | 0.762 | 0.688 |
| l2 | CrossAtt | 0.624 | 0.774 | 0.699 |
| mean_abs | ResNet | 0.540 | 0.598 | 0.569 |
| mean_abs | CrossAtt | 0.567 | 0.507 | 0.537 |

The 0.903/0.898 figures reproduce. Note the score hierarchy: a **single peak** (max_abs) ≫ L2 norm ≫ mean — the signal is a sparse unit, not global activation magnitude.

### 2b. The claim's framing is the problem
- **Seen channel A (proton target) vs C+D: AUROC 0.906 (ResNet) / 0.903 (CrossAtt)** — statistically indistinguishable from the far-OOD result. CrossAtt also separates B vs C+D at 0.891.
- **Unseen pooled vs *all* seen (A+B+C+D): 0.671 (ResNet) / 0.585 (CrossAtt)** — the "unseen vs seen" framing collapses once the seen targets are included as negatives.
- **F/G/H pairwise: 0.47–0.53 both arms** — the score cannot distinguish ¹²C/¹³C/¹⁴C elastics from each other; it is not isotope-resolving.
- Median max|h| ordering (ResNet): D 2.09 < C 2.18 < B 2.31 ≈ E 2.30 < A 2.72 < F 3.55 < G 3.65 < H 3.75. CrossAtt: C/D ≈ 12.8 < E 13.3 < A/B ≈ 16 < F/G/H ≈ 26.5. A single monotone "deposition-scale" axis fits this ordering; it is **not** monotone in ejectile Z (A=p is high) and not a seen/unseen boundary (E sits with the light fragments).

### 2c. Single-unit structure
- ResNet: unit 14 alone gives AUROC 0.918 for FGH vs C+D (median |h|: A 2.69, F/G/H ≈ 3.5–3.7, C/D ≈ 1.4, B 0). Several units carry the *negative* direction (silent on F/G/H, active on C/D/E).
- CrossAtt: unit 126 alone gives 0.898 (F/G/H ≈ 26 vs C/D/E ≈ 11); unit 60 adds 0.892.
- Top argmax units differ between arms (ResNet u28/u14/u27; CrossAtt u126/u92/u39) — each arm learned its own peak detector.

### 2d. Cross-arm and cross-checkpoint probes (same 7500 events)
- Cross-arm Spearman of per-event max|h|: **0.687 pooled**; per-channel 0.24–0.72. Both arms rank channels identically but agree only moderately per event — consistent with a shared latent scalar filtered through different learned detectors; does not rule out an input-magnitude proxy.
- max|h| (Jul-9 ResNet) vs auditfix `rejection_score` (1−max(p_A,p_B)): pooled ρ = −0.16; within unseen channels ρ ≈ −0.10…+0.05. The activation signal is **not** the softmax rejection signal.
- max|h| vs auditfix p_target = p_A+p_B: within-channel ρ ≈ +0.34…+0.65 on A/B (targets) and −0.31…−0.49 on non-targets — the penultimate magnitude carries class-conditional information, i.e., it is partly a learned "target-likeness" feature. But a charge/track-extent proxy would correlate the same way; not decisive.

<!-- SOURCE-BODY-END -->
