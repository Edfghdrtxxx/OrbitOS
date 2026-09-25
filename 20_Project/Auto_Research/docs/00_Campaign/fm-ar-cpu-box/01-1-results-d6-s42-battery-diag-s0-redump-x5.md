<!-- Verbatim source section; overview: [[../fm-ar-cpu-box]] -->
<!-- SOURCE-BODY-START -->
## Results

### 1. D6-s42 counterfactual battery — VERIFY-OK
- Cmd: `exp3_counterfactual_battery.py --run-dir runs/EXP3-XA-Raw-100k-seed42/20260922_185618 --split val --device cpu --batch-size 64 --max-events 2000 --conditions permuted_cls mean_cls scaled_cls clipped_cls centered_q zero_ch0 zero_ch1`
- Runtime: ~70 min (11:58→13:07). Output: `runs/EXP3-XA-Raw-100k-seed42/20260922_185618/counterfactual_battery_d5.json` (33.6KB, on Mac + box).
- OBSERVATION: val 2000 events. original 0.87150 | permuted_cls 0.87150 (Δ0) | mean_cls 0.87100 | scaled_cls 0.19350 (−67.8pp, collapse) | clipped_cls 0.87150 | centered_q 0.82500 (−4.65pp) | zero_ch0 0.80650 (−6.5pp) | zero_ch1 0.79500 (−7.65pp).
- OBSERVATION: `scaled_cls` collapse reproduced exactly (0.1935, identical to old battery) — Raw head leans on cls-token physics magnitude.
- NOTE: `permuted_cls` and `centered_q` differ from the old battery run ({−6.5pp, −67.65pp} → {0, −4.65pp}) — condition implementations changed between the box's stale tree and origin/master scripts. Origin/master is authoritative; firstmate to interpret which deltas enter the table.

### 2. diag-s0 (H1 diagnostics) — VERIFY-OK
- Cmd: `exp3_h1_diagnostics.py --xa-run-dir runs/EXP3-XA-Raw-100k-seed0/20260923_084135 --rn-run-dir runs/EXP3-ResNet-Raw-100k-seed0/20260921_231713 --split val --device cpu --batch-size 32 --max-events 500`
- Runtime: ~5 min (13:07→13:12). Output: `runs/EXP3-XA-Raw-100k-seed0/20260923_084135/h1_diagnostics.json` (386KB, on Mac + box).
- OBSERVATION (500 events, 10× repeated 50/50 probes): D1 XA68 probe 0.868±0.016, RN512 0.851±0.019; D2 physics-only 0.788 (= majority acc — physics features carry no label signal beyond class prior on this subset); D3 attended-only 0.869±0.019. D3 vs XA68 Δ+0.004 (McNemar p=1.0); XA vs RN D1 Δ+0.008 (p=0.86). D4 error overlap: both-wrong 44 vs 7.7 expected independent (p≈4e-34 — errors highly correlated); D4 McNemar XA-vs-RN diff +0.026, p=0.047.
- OBSERVATION: pairing_check fully ok (file_paths identical, val_indices identical, n=500 aligned).

### 3. Redump ×5 — VERIFY-OK (all)
- `exp3_dump_predictions.py --split val --device cpu --batch-size 64 --max-events 2000` per run, ~8–9 min each.
- VERIFY-OK: XA-Raw-s42 (13:21), XA-Raw-s0 (13:30), XA-Raw-lf (13:39), XA-HC-s42 (13:46), XA-HC-s0 (13:54). All five `predictions_paired.csv` (62KB each) on Mac + box, with `event_index` columns.

<!-- SOURCE-BODY-END -->
