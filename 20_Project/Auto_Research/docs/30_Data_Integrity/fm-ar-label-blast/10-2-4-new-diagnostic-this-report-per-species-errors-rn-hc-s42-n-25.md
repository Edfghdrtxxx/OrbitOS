<!-- Verbatim source section; overview: [[../fm-ar-label-blast]] -->
<!-- SOURCE-BODY-START -->
## 2.4 New diagnostic this report: per-species errors, RN-HC-s42 (n=25,000)

Joining `predictions.csv` through `val_indices` to source files (sorted `3He,4He,d,p,t`, 100k/file):

| species | acc | →pred-0 (false triton) |
|---|---|---|
| 3He | 0.9935 | 33/5110 (0.6%) |
| 4He | 0.9934 | 32/4848 (0.7%) |
| d | 0.9637 | **183/5038 (3.6%)** |
| p | 0.9966 | 17/5004 (0.3%) |
| t (true class 0) | 0.8484 | — |

The model's dominant confusion is **d→t** (Z²A: d=2, t=3 — the closest pair to triton), and 4He→t leakage is minimal (0.7%). The triton task is a real stopping-power discrimination problem, not a degenerate one — which is why the XA<RN Raw deficit on it is meaningful as a mechanism result even though it is not the paper's task.

<!-- SOURCE-BODY-END -->
