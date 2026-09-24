<!-- Verbatim source section; overview: [[../fm-ar-label-blast]] -->
<!-- SOURCE-BODY-START -->
## 2.6 Minimum further runs to close each gap

| Gap | Action | Cost |
|---|---|---|
| Paired stats (all 5 same-seed pairs) | box-176 CPU `exp3_dump_predictions.py` ×11 ckpts + re-sync two 0-byte `data_split.json` (XA-Raw-s0, lf) | **0 GPU-h, ~2–4 CPU-h** |
| D5 discriminator (load-bearing vs OOD artifact) | `permuted_cls`/`mean_cls`/`scaled_cls` + pred histograms ×6 ckpts | **0 GPU-h, ~1–2 CPU-h** |
| 4He comparator (decides central claim) | train RN-Raw-lf s42 | **~4.8 GPU-h** |
| 4He 2×2 | XA-HC-lf + RN-HC-lf s42 | **~6.4 GPU-h** |
| 4He seed-robustness | lf 2×2 on seeds 0,1 (6 runs) | **~33 GPU-h** |
| Capacity control (attn_dim 512) | gated on D1–D5 readout | **~5.5 GPU-h** |
| Triton grid hole | XA-Raw-s1 | **~5.5 GPU-h** (skippable if pivoting to 4He-only reporting) |
| Attention gaps | exp4 metrics on XA-Raw-s0 + lf | **0 GPU-h, ~1 CPU-h** |

Cheapest decisive path unchanged: CPU predump + D5 + attention (~4–7 box CPU-h) → then the single RN-Raw-lf GPU run.

---

# PART 3 — Open questions for the lead (non-blocking)

1. **Windows Garfield label values** (§1.4): the single highest-value check in this report — 1 minute of h5py on the Windows box decides whether Table 4 is α-vs-Nonα or triton-vs-rest. If files are v6-mapped now, the V6 run's `predictions.csv`+split join (§2.4 method) decides the run-time mapping.
2. Do all 11 EXP3 `best_model.pth` still exist on box 176 (incl. RN arms)? G0 needs them.
3. Did `predump_chain`/`diag_chain`/`d5_chain` outputs land? Nothing new synced since the referee report (verified: no `predictions.npz`, no `h1_diagnostics.json`, no D5 conditions in any battery JSON — all still 458–482 B, 5 conditions).
4. XA-Raw-s0 and lf `data_split.json` are 0 bytes locally — re-pull needed for pairing.
5. EXP2-3He4He carbon contamination (§1.3): worth a line in the closing doc — the "³He/⁴He" EXP2 numbers are α-vs-{p,d,t,3He,13C,14C} on a 35k val, not comparable to EXP1's 25k val even before the naming issue.
6. Any Kuchera arm pinned to a triton-task EXP3 `data_split.json` inherits triton-task semantics — flag when those results land.

# Reproduction

```bash
# label conventions: python3 json.load on 20_doc/audits/2026-09-23_raw-hc-input-audit.json
#   -> per-file raw_labels {3He:0,4He:1,d:2,p:3,t:4}
# EXP3 inventory/stats: json.load every runs/EXP3-*/*/metrics.json (script: Part 2.3 logic)
# split identity: val_indices byte-identical across the two s42 data_split.json (n=25000)
# per-species join: predictions.csv event_index -> val_indices -> //100000 -> sorted file_paths
#   (species order 3He,4He,d,p,t) -> table in §2.4; triton file = all class-0
# EXP8 immunity: config file_class_list + metrics.json data_inputs.channels.*.assigned_class
# EXP2 7-file glob: configs (no hdf5_files) + 35k val CM totals + 13C/14C file dates in
#   99_System/.scratch/exp2-impl/01_data_generation.md
# torch: python3 -c "import torch" -> ModuleNotFoundError; find runs -name '*.pth' -> EXP8 only
```
<!-- SOURCE-BODY-END -->
