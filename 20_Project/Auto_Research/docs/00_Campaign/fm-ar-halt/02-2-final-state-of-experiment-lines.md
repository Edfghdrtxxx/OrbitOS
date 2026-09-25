<!-- Verbatim source section; overview: [[../fm-ar-halt]] -->
<!-- SOURCE-BODY-START -->
## 2. Final state of experiment lines

### G7 — EXP4 attention metrics (COMPLETE, both checkpoints)
`exp4_attention_metrics.py --split val --max-events 2000 --query-invariance`, CPU.

| Checkpoint | acc (n=2000) | Alpha(4He) f_Bragg | Non-alpha f_Bragg | attn–charge r |
|---|---|---|---|---|
| XA-Raw **lf s42** (`20260923_154749`) | 0.9220 | 0.5415±0.4983, t=11.87, p=6.6e-27 (n=301) | 0.4869±0.4979, t=22.63, p=4.1e-98 (n=1543) | −0.017±0.032 / −0.025±0.020 |
| XA-Raw **s0** (`20260923_084135`) | 0.8660 | 0.3342±0.3597, t=5.90, p=1.2e-08 (n=251) | 0.4023±0.4070, t=19.12, p=5.3e-73 (n=1481) | +0.012±0.033 / −0.008±0.019 |

OBSERVATION: f_Bragg well above the 0.20 null on all four class-conditional estimates; attn–charge correlation ≈ 0 everywhere. s0 Bragg concentration weaker than lf (0.33 vs 0.54 on Alpha) — consistent with the D6 seed-heterogeneity pattern.
CAVEAT: `map_permuted_q` (map-level query-invariance) metrics live inside the JSONs; prereg scoring against them not yet run (see pending).

### D6 counterfactual battery — 5/6 checkpoints complete
Complete: XA-Raw s0, XA-Raw lf s42, XA-HC s42/s0/s1 (all `counterfactual_battery_d5.json`, synced to Mac). **Missing: XA-Raw s42 (triton)** — the only A0-comparable battery for the prereg scorer (A0=0.8715±0.001). Killed mid-run at halt; no JSON written.
Established so far (unchanged): permuted_cls/mean_cls/clipped_cls ≈ original on all 5 → physics = static bias; scaled_cls splits Raw (collapse −45.8/−73.4pp) vs HC (−0.25 to −15.6pp); centered_q most variable (−6.6 to −39.7pp); Raw Ch1-dominated, HC symmetric channel ablation.

### D1–D4 diagnostics — s42 done, s0 missing
s42 `h1_diagnostics.json` on Mac (n=500 OOM-forced): D1 XA68=0.880 vs RN512=0.868; D2 physics-only=0.792; D3 attended-only=0.876; D4 diffuse errors. s0 never produced a JSON; 500-event retry was queued in the killed chain.

### Prediction dumps — partial
`predictions_paired.csv` exists for 6 RN + XA-HC-s1 only. The 5 XA CSVs (XA-Raw s42/s0/lf, XA-HC s42/s0) were never produced — the 09-24 redump chain ran during the stale-checkout window (all "rc=0" in <1s = silent no-ops, script absent). `predictions.npz` files pulled for all 12 run dirs this morning.

### Held-out eval (PR#17) — not run
`exp3_heldout_unused.py` synced to box; planned first target was XA-Raw-lf at `--per-file-take 400` (2000 events). Killed before reaching it.

### e23 (EXP8 physics interventions) — blocked
OOMs above ~50 events/forward; needs batched-forward rewrite. Untouched.

<!-- SOURCE-BODY-END -->
