<!-- Verbatim source section; overview: [[../fm-ar-hehe-control]] -->
<!-- SOURCE-BODY-START -->
## 4. Reproduction

```bash
# Inventory + metrics (all numbers above):
ls /Users/Reid\ Hu/MATE-Automation/runs/EXP3-*/*/          # file inventory
cat runs/EXP3-*/*/metrics.json                            # acc, alpha_recall, macro_f1, confusion_matrix, best_epoch
# Paired-bound computation: marginals from confusion_matrix; d=b−c fixed;
# worst case b+c=min(e_A+e_B, 25000); χ²=(|d|−1)²/(b+c); exact binomial bound via scipy.stats.binomtest
# Training times: grep 'Training complete in' runs/EXP3-*/*/run.log
# Label bug: src/run_experiment.py:389-411 (guard comment), :628 (_LABEL_MAP_3HE4HE);
#   Garfield labels {3He:0,4He:1,d:2,p:3,t:4} → map {4:0} = triton-vs-rest
# file_class_list mechanism: src/run_experiment.py:545-562, src/data/dataset.py:333-334
# Augmentation no-op: src/data/dataset.py:587-588
# Manuscript: 10_Papers-Thesis/Physics_Informed/main.tex:252,369,381,384
# Legacy protocols: 20_doc/Legacy Codebase/S3-v4-reproduction/spec.md §2.1 (V4-HeHe), §2.4 (V4-HeHe-RN)
```

**Captain-hold inventory:** this report feeds the already-pending GPU-budget decision owned by the campaign lead/captain (fm-ar-gpu-plan-draft); it surfaces no new captain-only question that is not already held there. Completion gate: `complete --none`.
<!-- SOURCE-BODY-END -->
