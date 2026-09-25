<!-- Verbatim source section; overview: [[../fm-ar-label-settle]] -->
<!-- SOURCE-BODY-START -->
## 5. Commands run (reproduction)

```bash
# Box-176 Garfield labels + attrs (read-only, instance B):
MATE_GPU_* python3 scripts/utils/gpu_exec.py "python -c 'import h5py,numpy as np; ...'"
#   -> t file labels [4], 4He file labels [1], NO label_map_version attr (HC+Raw)
# Box-176 inventory: 11 EXP3 best_model.pth under z01-exec/runs/; Garfield_{HC,Raw} 5+5 files;
#   NimpSim files under data/exp8/; NO EXP2/V6 artifacts.
# Mac: find runs -iname '*EXP2*' -> empty; find for V6_* run dirs -> none;
#   predictions.csv only under EXP3-*-seed42 + EXP8.
# GitHub: gh-axi api repos/Edfghdrtxxx/MATE-Event-Classifier-DL -> 37-file snapshot, no converter.
# Git: openspec/ first commit c666db3 2026-03-16; 'openspec_v6' first appears 2026-03-17 (379565a).
# V6 run dates: v6_training_curves.json run names + 01_exp_results_investigation.md:289-292.
# EXP2 configs already fixed: configs/EXP2_*_3He4He.yaml hdf5_files(5) + file_class_list [1,0,1,1,1].
# Label-fix configs exist: configs/EXP3_{XA,ResNet}_{HC,Raw}_100k_label_fix_seed42.yaml.
# Run times: grep 'Training complete in' runs/EXP3-*/*/run.log (166-345 min).
# MATE-data-archive/autodl-176/: EMPTY (copy in flight) as of 2026-09-25.
```

<!-- SOURCE-BODY-END -->
