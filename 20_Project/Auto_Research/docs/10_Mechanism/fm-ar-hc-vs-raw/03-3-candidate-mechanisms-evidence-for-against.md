<!-- Verbatim source section; overview: [[../fm-ar-hc-vs-raw]] -->
<!-- SOURCE-BODY-START -->
## 3. Candidate mechanisms — evidence for/against

**M1 — Noise removal (Ch0 denoise). SUPPORTED, dominant.**
- For: ResNet arm sees no physics at all (`fusion_type: none`) yet gains +6.54/+6.52/+6.66pp on HC (3/3 seeds) — the gap is image-side by construction.
- For: Raw Ch0 is 51% occupied by pure noise with the track below the floor (§2); HC removes it. Raw class-conditional occupancy is identical across classes → Ch0 gives the CNN almost nothing but noise to integrate.
- For: Raw Ch1 does retain track geometry (+35% at HC pads), consistent with RN-Raw reaching 0.89 at all — the residual Raw signal is real but weak.
- Against: nothing on disk contradicts it.

**M2 — Charge normalization difference. KILLED.**
- Both paths use `log1p(clip(·,0))` on Ch0 and identical `variance_floor` z-score at load (spec Req-3.1; `normalization_stats.json` per run — Raw ch0 mean/std 0.0114/0.0170 vs HC 0.0010/0.0082 is a *consequence* of denoising, not a different transform). The 12× Ch0 sum ratio is noise removal, not normalization.

**M3 — Geometric information added. WEAK / mostly killed.**
- HC adds no new geometry: the track sits at the same pads in Raw Ch1 (identity transform wins; +35% elevation). HC *restricts support* (removes pads), it doesn't add information. The hole mask removes a fixed 24×3-ish region — a constant mask, class-neutral, cannot explain a 6.5pp class-discrimination gain. Ch1 weighted→unweighted mean is a minor reweighting on the same support.
- Residual: DBSCAN could in principle remove real secondary hits that carry class info — but that would *hurt* HC, and HC wins, so net effect is still "removal helps".

**M4 — Feature-image redundancy (physics features computed from Ch0). SUPPORTED as the explanation for the classifier-side asymmetry — with an OOD caveat.**
- Physics features are moments of Ch0 (spec Req-4.1/4.4). On HC, Ch0 is the clean track → the 4 features are linear/global summaries of what the backbone already sees clearly → redundant: zero_cls Δ = +0.1/−0.4pp on HC s42/s1 (but −15.6pp on s0 — seed-variable, not absolute).
- On Raw, Ch0 is noise → the backbone cannot form global charge/moment statistics from it, so the 4 explicit features are the head's *only* global statistic. They are weak individually (|point-biserial r| ≤ 0.038 vs species; total_mass CV ≈3% on Raw vs ≈27% on HC — recorded in the exp3-xa-raw-cell record §"CrossAtt < ResNet on Raw") yet the head leans on them: zero_cls collapses on 3/3 Raw checkpoints (−67.8/−45.7/−49.3pp).
- **OOD caveat (important for wording):** zero_cls on Raw lands *below* the 0.80 majority baseline (0.19/0.41) — the head doesn't just lose information, it flips to predicting mostly class-0. That signature is consistent with "physics used as a learned scale/bias whose zeroing is off-distribution" as much as with genuine information dependence. `permuted_cls`/`mean_cls` conditions exist in `scripts/analysis/exp3_counterfactual_battery.py:129-130` but **no synced battery JSON contains them** — all 6 local JSONs ran only the original 5 conditions (pre-D5 script version). D5 (`d5_chain.sh`, queued per closing doc §11) is the discriminator; until it lands, "load-bearing" must stay provisional.
- Corroborating: XA-Raw s0 anomaly — zero_both 0.772 ≫ zero_cls 0.410. With cls physics zeroed, the *real* query actively hurts (−36pp); zeroing the query too recovers to ≈ majority baseline. The two physics entry points interact; single-pathway ablations don't decompose cleanly on Raw.

<!-- SOURCE-BODY-END -->
