<!-- Verbatim source section; overview: [[../fm-ar-attn-sink]] -->
<!-- SOURCE-BODY-START -->
## Appendix — evidence index

| Claim | Source |
|---|---|
| Token grid/mapping | `scripts/analysis/exp4_attention_metrics.py:41-57,222-235`; `src/models/cross_attention.py:151` |
| Beam-hole mask | `scripts/preprocessing/convert_trk_server_v2.py:261-262` |
| Pad geometry (mm) | `scripts/preprocessing/convert_trk_server_v2.py:150-161` |
| Sink stats (87%, 444/512, 2.1%, max-wt 0.52) | `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md:135`; `20_doc/EXP4_attention_collapse_finding.md:23-27` |
| f_Bragg values | `runs/EXP3-XA-*/​*/exp4_attention_metrics.json` (4 files, live checkout) |
| Battery numbers | `runs/EXP3-*/​*/counterfactual_battery.json` (6 files); `20_doc/EXP3_closing_analysis_2026-09-24.md` §9, §11-12 |
| Query/override wiring | `src/models/model.py:354-377`; `src/models/cross_attention.py:156-200`; `scripts/analysis/exp3_counterfactual_battery.py:117-131` |
| Physics-feature informativeness (CV, \|r\|) | `20_doc/Experiment Recordings/2026-09-23_exp3-xa-raw-cell.md:101`; `20_doc/EXP4_attention_collapse_finding.md:33-34` |
| Raw Ch1 occupancy ~51% | `20_doc/audits/2026-09-23_raw-hc-input-audit.json` (`occupancy_ch1` mean ≈1978/3840) |
| Track vs token-50 geometry | `20_doc/audits/2026-09-23_raw-hc-examples.png` (viewed) |
| Literature | cited from knowledge — `web_search` was auth-blocked this session; verify page numbers/venues before quoting in the manuscript |
<!-- SOURCE-BODY-END -->
