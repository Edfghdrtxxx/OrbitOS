<!-- Verbatim source section; overview: [[../fm-ar-closing-check]] -->
<!-- SOURCE-BODY-START -->
## Minor / stale items (one line each)

- §15 pending list omits that **XA-Raw-s0 `data_split.json` is also 0 bytes** (only the lf one is mentioned) — both need re-pull (referee B.9.4).
- attn-sink §6 / mechanism §4 / seed-evidence §8 / gpu-plan-draft Q1 all warn "local lf battery JSON is the buggy 0.7005 run" — **stale**; corrected JSON verified on disk (R13). No doc change needed; noted so the lead doesn't chase a non-issue.
- §3 header "500 evaluated val events per checkpoint; metrics over the 442–483 correct ones" — correct as revised (results-audit's fix landed).
- EXP4 sink stats (token-50 444/512, max-weight 0.52, entropy) exist in no synced artifact — ad-hoc eval, unreproducible (referee A10, results-audit F4). The closing doc wisely doesn't quote them; keep it that way until Check A runs.

<!-- SOURCE-BODY-END -->
