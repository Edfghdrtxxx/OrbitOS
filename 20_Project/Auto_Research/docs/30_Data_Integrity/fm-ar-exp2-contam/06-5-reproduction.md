<!-- Verbatim source section; overview: [[../fm-ar-exp2-contam]] -->
<!-- SOURCE-BODY-START -->
## 5. Reproduction

```bash
# 7-file glob: configs/EXP2_*_3He4He.yaml have no hdf5_files/hdf5_pattern;
#   src/run_experiment.py:560-562 globs *.h5 sorted; carbon files sort first
#   (sim_12C... < sim_inv_12C...).
# Val size proof: implementation_log.md:151-153 CM totals = 35000 = 0.2*7*25000.
# Carbon file timestamps: 99_System/.scratch/exp2-impl/01_data_generation.md:99-100
#   (written to dataset/Garfield_HC/ on 2026-03-18, before 3He4He runs).
# Carbon labels: same file L45-49 (--label 0/1) -> class 1 under {4:0,others:1}.
# EXP1 clean: exp1-impl/09_execution.md:82 (data_split total=125000, 5 files).
# Clean-acc arithmetic: (30000*c + 5000*a)/35000 = reported; c=1 -> a_clean.
# No local EXP2 artifacts: find runs -iname '*EXP2*' -> empty;
#   predictions.csv only under EXP3-*-seed42 and EXP8.
# Guard: src/run_experiment.py:400-417 (Garfield binary requires file_class_list).
# Manuscript: grep -n 'fusion\|96.9\|86.0' 10_Papers-Thesis/Physics_Informed/main.tex -> L381, L493.
```

<!-- SOURCE-BODY-END -->
