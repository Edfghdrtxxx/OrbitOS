<!-- Verbatim source section; overview: [[../fm-ar-d14-power]] -->
<!-- SOURCE-BODY-START -->
## Evidence index

- JSON: `runs/EXP3-XA-Raw-100k-seed42/20260922_185618/h1_diagnostics.json` (n=500, argv `--max-events 500 --device cpu`, host `autodl-container-3187449845`).
- Script: `scripts/analysis/exp3_h1_diagnostics.py` — subset `:148-151`, RN index pinning `:163-170`, split `:184-186`, probes `:191-206`, D4 `:208-225`.
- Dataset memory: `src/data/dataset.py:291` (memmap), `:309-310` (labels/physics eager), `:529` (HDF5 fallback), `:574-580` (label resolution).
- Label map: `src/data/label_contract.py:31` (`{4:0,...}` → triton class 0); `src/run_experiment.py:400-417` (triton-vs-rest default).
- Decision table: `20_doc/EXP3_closing_analysis_2026-09-24.md` §10 (table), §10a (results + caveat line 163).
- All statistics computed locally in Python (Wilson, exact McNemar, hypergeometric overlap, power formulas); class balance reconstructed from synced `data_split.json` — no remote execution.
<!-- SOURCE-BODY-END -->
