<!-- Verbatim source section; overview: [[../fm-ar-nimpsim-cost]] -->
<!-- SOURCE-BODY-START -->
## 4. Files to stage

Config `data.hdf5_files` (:57-59) resolves under `$MATE_DATA_ROOT`:

| File | Class | Events | Size |
|---|---|---|---|
| `NimpSim/3He_100k.h5` | 0 (³He) | 100,000 | **not recorded** — uncompressed schema is 3.07 GB (`images` float32 (100000,80,48,2) = 3.072 GB + `physics_features` 1.6 MB + `labels` 0.4 MB); gzip typically 0.5–1.5 GB for sparse TPC images [INFERENCE] |
| `NimpSim/4He_100k.h5` | 1 (⁴He) | 100,000 | same |

- Expected on-box path: `/root/autodl-tmp/data/NimpSim/` if
  `MATE_DATA_ROOT=/root/autodl-tmp/data` (README :89-92). 50 GB persistent disk
  (`remote_GPU_context.md:41`) — fits either way.
- Legacy names were `sim_inv_12C300MeV_4He_{3He,4He}_100k.h5` — rename or
  symlink at staging (README :76, config :27-29).
- Schema the checker enforces: `images` float32 (N,80,48,2) NHWC,
  `physics_features` float32 (N,4), `labels` int32 (N,) constant per file,
  `conversion_complete` attr (`check_nimpsim_h5.py:7-12,39-40`).
- **Not verified on any GPU box** (README :101-106): ROOT sources live on IMP
  (`/home/stu_2021/huzh_2022/NimpSim_workdir_after/Mate/ver2/Reconstruction/`);
  converted-HDF5 location on IMP/legacy disk unverified; box 176's EXP3 disk
  holds Garfield only. Staging likely needs an IMP→box transfer
  (`remote_GPU_context.md` §4a documents the sim→jump→GPU path).
- Verify with `python scripts/preprocessing/check_nimpsim_h5.py --dir
  /root/autodl-tmp/data/NimpSim --expect-events 100000` (README :117-124).

<!-- SOURCE-BODY-END -->
