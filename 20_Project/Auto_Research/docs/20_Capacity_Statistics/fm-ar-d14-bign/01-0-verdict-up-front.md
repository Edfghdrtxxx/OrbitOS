<!-- Verbatim source section; overview: [[../fm-ar-d14-bign]] -->
<!-- SOURCE-BODY-START -->
## 0. Verdict up front

**The run cannot execute on this Mac.** Three required inputs are absent and none is obtainable locally:

1. **`torch` is not installed** in any Python environment on this Mac (system 3.9.6, both conda envs, uv tools — all checked). The extract phase (`_extract_phase`, `scripts/analysis/exp3_h1_diagnostics.py:157`) needs it for `MATEModel` inference.
2. **Both checkpoints are absent.** `runs/EXP3-XA-Raw-100k-seed42/20260922_185618/best_model.pth` (134,879,066 B, sha256 `f57d40b2…`) and `runs/EXP3-ResNet-Raw-100k-seed42/20260921_181834/best_model.pth` (134,954,554 B, sha256 `c8d618bd…`) exist only on the AutoDL box — the live checkout's run dirs contain configs/splits/metrics but no `.pth` (verified by `ls` and a filesystem-wide `mdfind`/`find`; the only `.pth` on this Mac are two unrelated EXP8 checkpoints).
3. **The Garfield_Raw HDF5 dataset is absent.** The five `sim_inv_12C300MeV_4He_{p,d,t,3He,4He}_100k_garfield_v5.h5` files live at `/root/autodl-tmp/data/Garfield_Raw/` on the GPU box (per `config.yaml:25-29`); `data/` on this Mac holds only `srim/` and `trk_h5_v2/truth_sidecar_v2.h5`. No `h1_features.npz` was ever synced either, so the torch-free probe phase has nothing to consume.

Per the spec ("If any input is not on this Mac, stop, say exactly what is missing, and give the exact command"), the exact command is in §2 and the verified script patch in §3.

---

<!-- SOURCE-BODY-END -->
