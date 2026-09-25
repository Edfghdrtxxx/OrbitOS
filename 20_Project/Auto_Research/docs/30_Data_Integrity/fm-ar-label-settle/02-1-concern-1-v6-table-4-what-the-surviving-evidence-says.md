<!-- Verbatim source section; overview: [[../fm-ar-label-settle]] -->
<!-- SOURCE-BODY-START -->
## 1. Concern 1 — V6 Table 4: what the surviving evidence says

### 1.1 The decisive new fact: `label_map_version` is a relabel-script artifact, and the Windows files carried it

Chain of evidence (each link verified this session or cited from prior verified reports):

1. **The converter does not write `label_map_version`.** The legacy converter's documented metadata attrs (`openspec/changes/EXP1-matched-training-size/01_converter_verification.md:48`) list `num_events, image_width/height, conversion_complete, physics_feature_version, has_physics_features` — no `label_map_version`. Direct confirmation: the 13C/14C Garfield_HC files converted on 2026-03-18 **lack** the attr (`99_System/.scratch/exp2-impl/review_01.md:31-33`, "Missing `label_map_version` metadata attribute … The existing 3He/4He files have `label_map_version: 'openspec_v6'`").
2. **Only `relabel_garfield_v6_labels.py` writes it** — as its idempotency guard (`LABEL_MAP_VERSION = "openspec_v6"`, `openspec/changes/EXP1-matched-training-size/review_01b.md:25`). The script's documented purpose: "idempotent relabeling **from old mapping to OpenSpec V6**" (`01_converter_verification.md:24`).
3. **The Windows 5-species Garfield files carried `label_map_version='openspec_v6'`** (measured March 2026: `review_01.md:58`, `review_03b.md:11`).
4. ∴ **The Windows files were relabeled OLD→v6 — i.e., they were OLD-mapped `{3He:0,4He:1,d:2,p:3,t:4}` at conversion.** (If they had been v6-mapped at birth, nothing would ever have set the attr: the converter doesn't write it, and the relabel script skips files already carrying it.)
5. **The relabel script is an openspec-era artifact.** Its guard string is literally `"openspec_v6"` — named after this repo's `openspec/` framework, whose first commit is `c666db3` (2026-03-16). The audit verified the script and the v6 `determine_label_and_info()` on 2026-03-17 (`01_converter_verification.md`, dated 2026-03-17). The V6 runs are dated **2026-02-02/04** (run dirs `V6_ResNet_Raw_20260202_185050`, `V6_ResNet_HC_20260204_004518`, `V6_CrossAtt_Raw_20260204_022458`, `V6_CrossAtt_HC_20260204_141711` — `scripts/plotting/paper_fig_data/v6_training_curves.json`; `openspec/changes/TRK-group-meeting-20260326/01_exp_results_investigation.md:289-292,454-457`).
6. ∴ **The relabel ran after the V6 runs** (a script named for a framework created 2026-03-16 cannot have run before 2026-02-04). At V6 run time the files were OLD-mapped → `v6_common.py remap_labels_alpha_vs_all` `{4:0}` picked **triton** (OLD label 4 = t), exactly the EXP3 bug.

**Verdict: Table 4 is triton-vs-rest, ~80% confidence.** The residual 20% is scenario (a): the relabel script (or an equivalent manual relabel + attr write) existed and ran before 2026-02-04 under a name later retro-documented as "openspec_v6". No surviving evidence supports that; every dated artifact puts the v6 convention in March 2026.

### 1.2 Corroborating (weak) evidence

- **Box-176 Garfield files are OLD-mapped and carry NO `label_map_version` attr** — verified directly today via h5py on box 176: `..._t_...h5` → labels `[4]`, `..._4He_...h5` → labels `[1]`, attrs contain no `label_map_version` (both HC and Raw). They were never relabeled — consistent with being pre-relabel copies of the same Windows lineage (Garfield H5 conversion only ever ran on Windows; no Garfield converter exists in this repo — verified: no `convert_root_to_h5_data.py`/`convert_v5_to_hdf5.py`/`determine_label_and_info` in `scripts/`).
- **V6 class-0 recalls vs EXP3 triton recalls (cross-dataset, weak):** V6-RN-HC 84.36% ≈ EXP3-RN-HC triton recall ~84%; V6-RN-Raw 76.56% vs EXP3-RN-Raw triton ~61%; V6-XA-Raw 84.1% vs EXP3-XA-Raw triton 54.8% — divergent, but V6-XA trained on 400k vs EXP3's 100k and on a different file lineage, so neither direction is probative. Recorded for completeness; not load-bearing.
- **The bug mechanism is identical to EXP3's proven bug:** a `{4:0}` remap written against the NimpSim/v6 convention (label 4 = 4He) applied to OLD-mapped Garfield files (label 4 = triton). EXP3 hit it in Sept 2026 on box-176 files; V6 hit it in Feb 2026 on pre-relabel Windows files. The EXP3 bug went undetected for ~8 months — the V6 bug would have gone undetected for ~8 months too, for the same reason (nothing in a 2×2 confusion matrix reveals which species is class 0).

### 1.3 What is permanently lost (cannot settle to 100%)

- V6 `predictions.csv` + `data_split.json` / saved val indices (`D:\...\outputs\V6_*_2026020*` dirs) — the only artifact that would prove the *run-time* class-0 species.
- `relabel_garfield_v6_labels.py` mtime / legacy-repo git history — would date the relabel exactly.
- Windows Garfield H5 label values — would prove the *current* convention (moot for run-time state anyway).
- The legacy codebase `D:\Something\research\AFTPC_V3_MultiAgentVersion` — GitHub `Edfghdrtxxx/MATE-Event-Classifier-DL` is only a 37-file landing-page snapshot (last push 2026-01-16), no converter, no V6 scripts.
- EXP1/EXP2 run artifacts (predictions, splits, checkpoints, metrics.json) — all Windows-only.

### 1.4 Manuscript impact if the verdict holds (file:line, suggested wording only — captain edits)

| Location | Current text | Status under verdict |
|---|---|---|
| `main.tex:275` | "binary α versus Nonα classification task (α = ⁴He; Nonα ∈ {p, d, t, ³He})" | **Wrong task identity** — the runs were triton-vs-rest. Comparative claims (HC>Raw, XA>RN) remain internally valid (both arms share the task). |
| `main.tex:282-291` (Table 4) | 96.6/95.8/95.1/93.5 + α recalls 87.4/84.4/84.1/76.6 | Numbers real but describe triton-vs-rest; "α Recall" column is triton recall. |
| `main.tex:295-298` | "α recall of 0.874 … correctly identifies 87.4% of α particles … ³He closest to α in stopping power" | Narrative wrong — class 0 was triton; the "³He confusion" story is unsupported. |
| `main.tex:369` | §5.5 "XA 95.80% vs ResNet 95.77%" decomposition | EXP1's 95.80 (post-relabel, α-task) vs V6-RN-HC's 95.77 (triton-task) — **cross-task comparison, invalid** under the verdict. |
| `main.tex:503` | abstract "96.6% accuracy for α versus Nonα" | Wrong task. |
| Suggested wording | — | e.g. "the V6 ablation was later found to have used a stale label map making the positive class triton rather than ⁴He; the architecture and preprocessing comparisons are unaffected, and the corrected α-vs-rest 2×2 is reported in Table X" — or replace the numbers with the label-fix 2×2 (T1). |

Note the asymmetry the captain should see: **EXP1-XA-HC-100k (95.80%) is clean** — it ran 2026-03-17 on the post-relabel v6 files (its `data_split.json` total = 125,000 over 5 files, `exp1-impl/09_execution.md:82-103`). Under the verdict, EXP1 is the *only* clean α-vs-rest Garfield number that survives from the Windows era — and its artifacts are gone too, so it cannot be re-verified, only re-run.

---

<!-- SOURCE-BODY-END -->
