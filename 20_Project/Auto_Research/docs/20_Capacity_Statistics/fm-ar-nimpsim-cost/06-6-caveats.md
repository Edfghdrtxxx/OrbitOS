<!-- Verbatim source section; overview: [[../fm-ar-nimpsim-cost]] -->
<!-- SOURCE-BODY-START -->
## 6. Caveats

- RN-Raw's 4.6 h is inferred from the README bracket + the measured XA 4.9 h,
  not from a directly recorded wall time — the run's `run.log` on the box would
  confirm it (the launcher parses `Training complete in N seconds`,
  `run_exp3_rung1.py:90`).
- NimpSim H5 compression is unverified; it is the single largest swing factor
  in the per-epoch estimate (sample-bound floor vs step-bound ceiling).
- No NimpSim training has ever run in this repo (README :11) — every number
  above is extrapolated from Garfield/EXP8 anchors on the same box.
<!-- SOURCE-BODY-END -->
