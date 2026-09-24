<!-- Verbatim source section; overview: [[../fm-ar-test-split]] -->
<!-- SOURCE-BODY-START -->
## 6. What I ran (evidence)

```bash
# split code
grep -n "test_size|train_test_split|data_split" src/run_experiment.py   # :1187-1353
sed -n '1251,1353p' src/run_experiment.py                               # two-way vs three-way branches
grep -n "val_loader|test_loader|evaluate_model" src/run_experiment.py   # :1529-1704 — no test_loader

# run inventory
find runs -name data_split.json | … # per-file test_indices presence + sizes (table §1)
for d in runs/EXP3-*/*/; do grep split_ratio $d/config.yaml; done       # none → all 80/20
python3 -c 'json.load(metrics.json)'                                    # lf: accuracy=0.92136, best_val_acc=0.9214, best_epoch=13

# selection bias
python3 scripts/analysis/exp3_selection_bias.py runs/EXP3-*/*/          # 12 runs, mean 0.71pp, max 1.74pp
# + neighbor-epoch column computed from the same history.json files

# unused-pool determinism
sed -n '45,99p' src/data/dataset.py                                     # RandomState(seed).choice per file, sorted order
grep file_class_list runs/EXP3-*/config.yaml                            # buggy: absent; lf+Rung1: [1,1,1,1,0]

# eval harness
grep -n "split.*choices\|device" scripts/analysis/exp3_dump_predictions.py   # --split {val,test} --device cpu
sed -n '556,642p' scripts/analysis/exp4_attention_metrics.py            # _build_eval_dataset reads data_split.json keys
sed -n '884,962p' src/evaluation/evaluate_trk_classification.py         # TRK test_indices consumer
tail -30 runs/EXP8-XA-eval-auditfix_d570d34_01.log                      # seen-test 75k evaluated

# manuscript
grep -n "test set|validation" 10_Papers-Thesis/Physics_Informed/main.tex   # L156,248,255,328,399,410,447,475
```

<!-- SOURCE-BODY-END -->
