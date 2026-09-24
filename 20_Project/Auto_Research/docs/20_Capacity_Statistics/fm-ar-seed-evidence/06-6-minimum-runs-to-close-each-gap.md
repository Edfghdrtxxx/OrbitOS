<!-- Verbatim source section; overview: [[../fm-ar-seed-evidence]] -->
<!-- SOURCE-BODY-START -->
## 6. Minimum runs to close each gap

Ordered by information-per-cost. GPU-hours from observed durations (§1): RN-HC ≈3h, RN-Raw ≈5h, XA-HC ≈3.4h, XA-Raw ≈7–14h (high variance; s42 took 13.7h).

| Gap | Action | Cost | Unlocks |
|---|---|---|---|
| **G0 — paired stats on existing runs** | On box 176 CPU: run `src/evaluation/evaluate.py` (already implements McNemar + paired bootstrap, lines ~257–321) or equivalent inference pass to emit `predictions.csv` for the 10 checkpoints lacking it; sync CSVs | **0 GPU-h; ~2–4 CPU-h on-box** | True McNemar + paired bootstrap CIs for all 5 same-seed pairs; enables D4 error-overlap for free |
| G1 — complete triton grid | Train XA-Raw-seed1 | ~7–14 GPU-h | C2 becomes 3/3 seeds |
| G2 — 4He headline | Train label-fix 2×2 seed42 (4 runs; XA-Raw-lf partial exists at ep13 — restart or continue per lead) | ~19–26 GPU-h | C11 testable; the paper's central claim lives or dies here |
| G3 — 4He seed-robust | Label-fix seeds 0,1 (8 runs) | ~38–52 GPU-h | Seed-robust 4He claims |
| G4 — 4He mechanism | Battery + attention metrics on converged 4He ckpts | 0 GPU-h (CPU on-box) | C5/C6/C9 cross-task confirmation; resolves whether +9.2pp zero_q survives convergence |
| G5 — H1 diagnostics | D1–D3 probes (pre-registered, closing doc §10) | 0 GPU-h | capacity vs crowding |

**Cheapest decisive path:** G0 (CPU, now) → G2 seed-42 4He 2×2 (~19–26 GPU-h) → gate everything else on Δ_Raw per the pre-registered table. G1 is skippable if the campaign pivots to 4He-only reporting; the triton deficit is already paired-significant on 2 seeds.

<!-- SOURCE-BODY-END -->
