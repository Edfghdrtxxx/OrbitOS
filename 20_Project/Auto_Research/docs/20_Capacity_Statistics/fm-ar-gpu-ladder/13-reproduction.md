<!-- Verbatim source section; overview: [[../fm-ar-gpu-ladder]] -->
<!-- SOURCE-BODY-START -->
## Reproduction

```bash
cd /Users/Reid\ Hu/MATE-Automation
ls runs/EXP3-*/*/                                   # inventory (§2.1)
python3 -c "import json; [print(d, json.load(open(d+'/metrics.json'))['accuracy']) for d in __import__('glob').glob('runs/EXP3-*/*/')]"
grep -H 'Training complete in' runs/EXP3-*/*/run.log # cost basis (§1.1)
find runs -name '*.pth'                              # → EXP8 only (§2.3)
find runs/EXP3-* -name 'predictions*'                # → 1 file (§2.2)
python3 -c "import torch"                            # → ModuleNotFoundError
# split identity: json.load both s42 data_split.json → val_indices byte-identical (n=25000)
# McNemar bounds: d=b−c from accuracy marginals; worst case b+c=min(err_A+err_B,25000);
#   χ²=(|d|−1)²/(b+c) — plain python3, confusion matrices from metrics.json (§2.2)
# label-fix recipe: runs/EXP3-XA-Raw-100k-label-fix-seed42/*/config.yaml → file_class_list [1,1,1,1,0]
# corrected battery: cat runs/EXP3-XA-Raw-100k-label-fix-seed42/*/counterfactual_battery.json → original 0.9275
```

**Captain-hold inventory:** this report feeds the already-held captain call `fm-ar-gpu-budget` (reopen GPU: no / 16h / 60h — campaign record line 43). It surfaces no new captain-only question beyond that held call. Completion gate: `complete --none`.
<!-- SOURCE-BODY-END -->
