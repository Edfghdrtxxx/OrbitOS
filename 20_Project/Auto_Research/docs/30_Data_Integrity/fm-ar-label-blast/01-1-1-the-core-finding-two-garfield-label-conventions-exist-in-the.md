<!-- Verbatim source section; overview: [[../fm-ar-label-blast]] -->
<!-- SOURCE-BODY-START -->
## 1.1 The core finding: two Garfield label conventions exist in the wild

The bug is not "the map is wrong" — it is a **map↔file-convention mismatch**, and which convention a given file lineage carries is the whole question:

| Convention | Mapping | Where measured/claimed |
|---|---|---|
| **OLD** | `{3He:0, 4He:1, d:2, p:3, t:4}` | **Measured** on box-176 files: `20_doc/audits/2026-09-23_raw-hc-input-audit.json` — every file's `labels` is constant; `..._t_...h5` → 4, `..._4He_...h5` → 1 (both Raw and HC variants). Same convention documented as "old mapping" in `openspec/changes/EXP1-matched-training-size/01_converter_verification.md:68`. |
| **V6 / openspec_v6** | `{p:0, d:1, t:2, 3He:3, 4He:4}` | Claimed for the **Windows legacy files** (`D:\...\dataset\Garfield_HC\`): `01_converter_verification.md:53-70` (converter `determine_label_and_info()` filename regex), `EXP1 task.md:11`, and the metadata attr `label_map_version='openspec_v6'` measured on those files (`EXP1 review_01.md:58`, `review_03b.md:11`). |

`_LABEL_MAP_3HE4HE = {4:0, others:1}` (`src/run_experiment.py:628`, same as `src/data/dataloader.py:49`) is **correct under the V6 convention and silently trains triton-vs-rest under the OLD convention**. The 2026-09-23 guard (`run_experiment.py:389-411`, commit `4ac3f1c`) now rejects Garfield binary configs without `file_class_list`.

**Direct per-event proof on EXP3 artifacts** (new this report): `runs/EXP3-ResNet-HC-100k-seed42/20260921_002013/predictions.csv` joined through `data_split.json` (`val_indices` are global indices into the 5×100k sorted file space; sorted order = `3He,4He,d,p,t`) shows the **triton file contributes all 5,000 class-0 events and the 4He file is entirely class 1** — triton-vs-rest confirmed at the prediction level, not just the config level.

<!-- SOURCE-BODY-END -->
