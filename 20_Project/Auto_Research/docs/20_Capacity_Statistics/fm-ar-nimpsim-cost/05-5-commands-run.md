<!-- Verbatim source section; overview: [[../fm-ar-nimpsim-cost]] -->
<!-- SOURCE-BODY-START -->
## 5. Commands run

- `git log --all -- 20_doc/nimpsim_reserve/README.md configs/V4HeHe_RNMod_NimpSim_160k_seed42.yaml 20_doc/prereg/…yaml` → PR #13 (b6eb7f9/1c0e39d), #15 (034aa90), #20 (0fb1dd7), #29 (3484020), #34 (0ae4798).
- `git show b6eb7f9:20_doc/nimpsim_reserve/README.md` → 4–6 h present at pack creation, no derivation.
- `git show 034aa90 --stat` → prereg YAML added verbatim by the scorer PR.
- `git show 3484020 -- 20_doc/prereg/…` → only the `rn-mod`→`rnmod` match fix.
- `grep` sweeps for epoch/wall-time records across `20_doc/`, `99_System/`,
  `openspec/`, `00_Evolutions/` → the only measured per-epoch anchors are the
  EXP3 cell doc (~895 s/epoch XA-Raw; RN-Raw ≈4.6 h implied) and the EXP8
  memory note (gzip-I/O-bound, workers 8 halved epoch time). EXP2's ~21
  min/epoch (`99_System/.scratch/exp2-impl/03a_training_3He4He.md:24`) is an
  RTX 4060 Laptop run under 3-way GPU contention — not a usable anchor.
- `runs/` locally contains only `_scratch` — all run artifacts live on the box
  (expected; local Mac has no torch/checkpoints per AGENTS.md).

<!-- SOURCE-BODY-END -->
