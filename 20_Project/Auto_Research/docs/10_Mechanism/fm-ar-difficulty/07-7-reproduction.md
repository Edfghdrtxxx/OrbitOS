<!-- Verbatim source section; overview: [[../fm-ar-difficulty]] -->
<!-- SOURCE-BODY-START -->
## 7. Reproduction

All numbers above are reproducible read-only:

```bash
# EXP8 tables: per_channel_confusion in
#   runs/EXP8-{XA,ResNet}-Ideal-UnseenChannel/auditfix_d570d34_01/eval_exp8/metrics.json
# EXP3 reconstruction: row k of predictions.csv ↔ data_split.json val_indices[k];
#   isotope = file_paths[val_indices[k] // 100000]; validated by exact match to
#   metrics.json confusion_matrix [[4242,758],[265,19735]].
```

Analysis script used: `/tmp/difficulty/analyze.py` (worktree-local, discarded at teardown; logic fully described in §2–§4 so the lead can re-derive in ~40 lines).
<!-- SOURCE-BODY-END -->
