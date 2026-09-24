<!-- Verbatim source section; overview: [[../fm-ar-referee]] -->
<!-- SOURCE-BODY-START -->
## B.7 Minimum further runs to close each gap

Ordered by information-per-cost. GPU-hours measured from run.logs (RN-HC ≈3.1h, RN-Raw ≈4.8h, XA-HC ≈3.3h, XA-Raw ≈4.9–5.6h; wall ≈ train ×1.3).

| Gap | Action | Cost | Unlocks |
|---|---|---|---|
| **G0 — paired stats** | On box 176 CPU: `exp3_dump_predictions.py` on all 11 ckpts + re-sync the two 0-byte splits | **0 GPU-h; ~2–4 CPU-h** | True McNemar + paired bootstrap for all 5 same-seed pairs; D4 error-overlap; per-isotope breakdowns; threshold sweep (A6) — all free |
| **G1 — D5 discriminator** | `permuted_cls`/`mean_cls`/`scaled_cls` + pred histograms ×6 ckpts | **0 GPU-h; ~1–2 CPU-h** | A2+A8: load-bearing vs OOD-artifact vs scale-artifact — gates every mechanism sentence |
| **G2 — 4He comparator** | Train RN-Raw-lf s42 | **~4.8 GPU-h** | The headline paired Δ_Raw on the true task — C11 lives or dies here |
| **G3 — 4He 2×2** | XA-HC-lf + RN-HC-lf s42 | **~6.4 GPU-h** | Interaction term; the paper's actual design |
| **G4 — 4He seeds** | lf 2×2 on seeds 0,1 (6 more runs) | **~33 GPU-h** | Seed-robust 4He claims (anchor policy: no delta as seed-robust on n=1) |
| **G5 — capacity control** | `attn_dim: 512` XA-Raw (gated on D1–D5) | **~5.5 GPU-h** | A7 deconfounded — only after diagnostics land (doctrine: no cures before diagnosis) |
| **G6 — triton grid hole** | XA-Raw-seed1 | **~5.5 GPU-h** | C2 → 3/3; skippable if campaign pivots to 4He-only reporting (deficit already paired-significant 2/2) |
| **G7 — attention gaps** | exp4 metrics on XA-Raw-s0 + XA-Raw-lf; map-level permuted_q check | **0 GPU-h; ~1 CPU-h** | C10 second seed; A3 map-invariance |

**Cheapest decisive path:** G0+G1+G7 (all CPU, ~4–7 box-hours total) → then G2 (the one GPU run that decides the paper's central claim). Everything else gates on those readouts.

<!-- SOURCE-BODY-END -->
