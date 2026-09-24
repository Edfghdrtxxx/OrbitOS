<!-- Verbatim source section; overview: [[../fm-ar-code-audit]] -->
<!-- SOURCE-BODY-START -->
## EXP3 artifact inventory

Inventory command:

```bash
find '/Users/Reid Hu/MATE-Automation/runs' -mindepth 1 -maxdepth 3 -type d -path '*/EXP3-*'
```

There are **12** EXP3 run directories. Metrics below are read from each run's `metrics.json`; “pth/pred/split” are the actual files present in the live checkout.

| run | seed | representation/arm | accuracy | macro-F1 | class-0 recall field (`alpha_recall`) | best epoch | status | pth | predictions | data_split |
|---|---:|---|---:|---:|---:|---:|---|---|---|---|
| EXP3-ResNet-HC-100k-seed0 | 0 | HC/RN | .95448 | .92670 | .8472 | 30 | complete | no | no | no |
| EXP3-ResNet-HC-100k-seed1 | 1 | HC/RN | .95748 | .93069 | .8394 | 27 | complete | no | no | no |
| EXP3-ResNet-HC-100k-seed42 | 42 | HC/RN | .95908 | .93357 | .8484 | 27 | complete | no | yes (25,000 rows) | yes |
| EXP3-ResNet-Raw-100k-seed0 | 0 | Raw/RN | .88904 | .80974 | .6086 | 17 | complete | no | no | no |
| EXP3-ResNet-Raw-100k-seed1 | 1 | Raw/RN | .89224 | .80864 | .5782 | 3 | complete | no | no | no |
| EXP3-ResNet-Raw-100k-seed42 | 42 | Raw/RN | .89248 | .81858 | .6356 | 18 | complete | no | no | no |
| EXP3-XA-HC-100k-seed0 | 0 | HC/XA | .95412 | .92518 | .8304 | 23 | complete | no | no | no |
| EXP3-XA-HC-100k-seed1 | 1 | HC/XA | .95788 | .93206 | .8536 | 21 | complete | no | no | no |
| EXP3-XA-HC-100k-seed42 | 42 | HC/XA | .95676 | .92894 | .8276 | 22 | complete | no | no | no |
| EXP3-XA-Raw-100k-label-fix-seed42 | 42 | Raw/XA, corrected file-class labels | .92136 | .86928 | .7254 | 13 | recovered artifact absent | no | no | empty (0 bytes) |
| EXP3-XA-Raw-100k-seed0 | 0 | Raw/XA, legacy label map | .87572 | .78392 | .5598 | 7 | recovered | no | no | empty (0 bytes) |
| EXP3-XA-Raw-100k-seed42 | 42 | Raw/XA, legacy label map | .87116 | .77595 | .5482 | 12 | complete | no | no | yes |

The two standard XA-Raw runs with non-empty split files have empty/absent model artifacts in the live checkout; `run_complete.json` records provenance for some missing files but does not restore them.

<!-- SOURCE-BODY-END -->
