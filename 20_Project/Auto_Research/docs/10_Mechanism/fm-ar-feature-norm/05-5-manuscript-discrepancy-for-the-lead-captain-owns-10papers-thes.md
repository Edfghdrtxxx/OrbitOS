<!-- Verbatim source section; overview: [[../fm-ar-feature-norm]] -->
<!-- SOURCE-BODY-START -->
## 5. Manuscript discrepancy (for the lead; captain owns `10_Papers-Thesis/`)

`10_Papers-Thesis/Physics_Informed/main.tex:207` states the four features "are standardized using training-set statistics before fusion." The code does not do this (Req-7.2, `dataset.py:472`, `normalization.py:24-27`), and the spec resolution (`20_doc/Legacy Codebase/S1-foundation-data-pipeline/spec.md:569`, D-PHYS-NORM) records that the *published* V4/V6 scripts also fed physics raw — the standardization code existed in `unified_tpc_dataset.py` but was not on the training path. So the paper sentence describes a dead code path, not the live one. Flagging, not touching (captain-only files).

<!-- SOURCE-BODY-END -->
