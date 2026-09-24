<!-- Verbatim source section; overview: [[../fm-ar-mechanism]] -->
<!-- SOURCE-BODY-START -->
## 1. Evidence boundary and commands

Facts below are from primary artifacts. Interpretations and preregistered predictions are labelled explicitly.

```bash
find /Users/Reid\ Hu/MATE-Automation/runs -maxdepth 3 -type f
python3 - <<'PY'  # loaded every runs/EXP3-*/*/metrics.json and config.yaml
...
PY
find /Users/Reid\ Hu/MATE-Automation/runs -name '*.pth' -print
python3 -c 'import torch'  # ModuleNotFoundError locally
```

The direct inventory found 12 EXP3 run directories (11 triton-task runs plus one label-fix run), no EXP3 checkpoint, one EXP3 `predictions.csv`, four non-empty EXP3 split files, and six counterfactual battery JSONs. The only local `.pth` files are the two EXP8 checkpoints. `data/` contains SRIM files but no Garfield HDF5. These facts make local EXP3 forward inference infeasible in this worktree; a small CPU job on box 176 is feasible because the existing battery already ran there under the 2 GB cap.

Relevant code anchors are [`src/data/dataset.py:463-473`](/Users/leyi/.treehouse/MATE-Automation-8e6480/6/MATE-Automation/src/data/dataset.py:463), [`src/data/normalization.py:24-30`](/Users/leyi/.treehouse/MATE-Automation-8e6480/6/MATE-Automation/src/data/normalization.py:24), [`src/models/model.py:350-383`](/Users/leyi/.treehouse/MATE-Automation-8e6480/6/MATE-Automation/src/models/model.py:350), [`src/models/cross_attention.py:153-200`](/Users/leyi/.treehouse/MATE-Automation-8e6480/6/MATE-Automation/src/models/cross_attention.py:153), [`src/models/classifier.py:5-10`](/Users/leyi/.treehouse/MATE-Automation-8e6480/6/MATE-Automation/src/models/classifier.py:5), and the label map in [`src/run_experiment.py:624-629`](/Users/leyi/.treehouse/MATE-Automation-8e6480/6/MATE-Automation/src/run_experiment.py:624).

<!-- SOURCE-BODY-END -->
