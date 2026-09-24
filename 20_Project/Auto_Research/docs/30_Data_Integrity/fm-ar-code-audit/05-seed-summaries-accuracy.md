<!-- Verbatim source section; overview: [[../fm-ar-code-audit]] -->
<!-- SOURCE-BODY-START -->
## Seed summaries (accuracy)

The intervals below are **95% t intervals over independent seed-level accuracies**, not paired-event bootstrap CIs.

| arm/representation | n | mean | SD | range | 95% seed t CI |
|---|---:|---:|---:|---:|---:|
| RN/HC | 3 | .95701 | .00234 | .95448–.95908 | .95121–.96281 |
| XA/HC | 3 | .95625 | .00193 | .95412–.95788 | .95146–.96105 |
| RN/Raw | 3 | .89125 | .00192 | .88904–.89248 | .88648–.89602 |
| XA/Raw (legacy-label runs, seeds 0,42 only) | 2 | .87344 | .00322 | .87116–.87572 | .84447–.90241 |
| XA/Raw label-fix | 1 | .92136 | — | .92136 | — |

Same-seed arithmetic differences (not paired-event tests) are XA−RN = [-0.00036, +0.00040, -0.00232] on HC (mean −0.076 percentage points) and [-0.01332, -0.02108] on Raw for the two legacy-label shared seeds (mean −1.72 percentage points).

<!-- SOURCE-BODY-END -->
