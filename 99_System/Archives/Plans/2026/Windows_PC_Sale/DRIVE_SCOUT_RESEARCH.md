# Drive scout — research trees (MATE / AFTPC / datasets / checkpoints / Garfield / ViT / forJob / PPAC / simulations)

**Date:** 2026-09-14  
**Account:** `edfghdrtxxx@gmail.com` (Google membership; confirmed in Chrome account chip)  
**Method:** Own CDP background tab via `localhost:3456`. Drive UI search + folder browse (My Drive, Shared with me, Computers, Storage/quota, Bin). Inventory only — no downloads, no deletes, no share changes.  
**Tab:** created `CBA4A43E…` then closed. User Drive tabs left untouched.

---

## Verdict (wipe-relevant)

**Google Drive does not hold the Windows research hotspots.** Drive *files* are **1,012.2 MB** of 5 TB (account total **2.5 GB** including Photos 1.28 GB + Gmail 239 MB). Largest single file is a **107.1 MB** course PDF. **No multi-GB research corpora exist on this Drive.**

| Windows hotspot | Class | On Drive? | Notes |
|---|---|---|---|
| `MATE-Automation-V4\data\` (~180 GB) | L | **MISS** | No `.h5` / HDF5 / `trk_h5` / `dataset` blobs |
| `MATE-Automation-V4\runs\` EXP1–7, TRK1–4 (~12 GB) | M–L | **MISS** | No `.pth` / `best_model` / checkpoint files |
| `AFTPC_V3_MultiAgentVersion\` (~71 GB) | L | **MISS** | Search `AFTPC` = empty; no folder |
| AFTPC `dataset\` Garfield_HC/Raw/Output_V5 (~46 GB) | L | **MISS** | No Garfield data tree |
| AFTPC `outputs\` V4_CrossAttention_* / V6 (~23 GB) | M | **MISS** | Only PPTX *about* CrossAttention |
| `github_repo_forJob` (~14 GB, no remote) | M | **MISS** | Search empty; Job Searching ≠ this repo |
| `D:\outputs\` ViT CrossAttention (~1.56 GB) | M | **MISS** | Only intro PPTX / ViT paper PDF |
| AFTPC `docs\papers\NST-2025-0958_Proof_hi.pdf` | S | **HIT** | In `Google AI Studio` (see below) |
| AFTPC `thesis\Physics_Informed_LegacyBackup\` | S | **MISS** | Only literature PINN PDF |
| `research\PPAC\`, `simulations\`, NimpSim | ? | **MISS** | No folders; NimpSim only mentioned in slides |
| MATE **git-tracked code** | — | N/A | Lives on GitHub, not this Drive |

**Flag:** With Drive using ~1 GB of files, it is **impossible** for 46 GB Garfield / 180 GB MATE data / 14 GB forJob to already be mirrored here. Do not treat Drive as the off-Windows copy.

---

## Storage breakdown (quota UI)

URL: `https://drive.google.com/drive/quota`

| Bucket | Used |
|---|---|
| Google Drive | **1,012.2 MB** |
| Google Photos | 1.28 GB |
| Gmail | 239 MB |
| **Account total** | **2.5 GB of 5 TB** |

Largest Drive files (Storage list, size-descending; none are research corpora):

| Name | Size | Relevance |
|---|---|---|
| `chap.1 Interaction of Radiation with Matter.pdf` | 107.1 MB | Courseware |
| `Nuclear_Physics_Teaching_Podcast.mp3` | 91.8 MB | Teaching |
| `ML_in_NuclearPhysics.pptx` | 56 MB | Slides |
| `ViT_Introduction_20250901.pptx` | 50.1 MB | Slides — **not** `D:\outputs` ViT ckpts |
| `chap.2 Statistics….pdf` | 47.9 MB | Courseware |
| `chap.0 Introduction.pdf` | 38.9 MB | Courseware |
| `Imai_Meeting_20260413-h.pptx` | 34.8 MB | Presentation |
| `Nuclear_Physics_Teaching_Slides.pptx` | 25.5 MB | Teaching |
| `ViTgeneral_comprehension.mp4` | 22.5 MB | Teaching video |
| `trk_energy_regression_20260701.pptx` | 19.9 MB | MATE **slides**, not `runs/` |
| `lilu_thesis_final.pdf` | 17.4 MB | Li Lu thesis (literature) |
| `MATE-Project-Overview.pptx` | 14.8 MB | Slides |
| `intro_MATE_ML.pptx` | 13.6 MB | Slides |

No file ≥ ~110 MB. No `.h5`, `.pth`, `.npz`, HDF5, or folder-as-dataset in the large-file list.

**Computers:** `https://drive.google.com/drive/computers` → **“No computers syncing.”** No Windows Drive-for-desktop backup of `D:\`.

**Bin:** 2 markdown files (3 KB + 18 KB). No research trees.

**Shared with me:** 4 items only — RCNP analysis-meeting folder/minutes (`furuno@rcnp.osaka-u.ac.jp`), `shift of ATTPC campaign` spreadsheet + `Itinerary` (`sakajo@rcnp.osaka-u.ac.jp`). **No datasets.**

---

## Coverage table (what *is* on Drive)

Size class: S ≲1 GB · M 1–20 GB · L ≫20 GB.

### Hits (partial / literature / slides — not Windows trees)

| Drive item | ID / URL | Loc | Size | Maps to Windows hotspot | Class |
|---|---|---|---|---|---|
| **NST-2025-0958_Proof_hi.pdf** | `1CjXlCtik0gj5lMoHXDDpwSaFO-OZe0AZ` · [view](https://drive.google.com/file/d/1CjXlCtik0gj5lMoHXDDpwSaFO-OZe0AZ/view) | `Google AI Studio` | 13-page PDF (size not shown in preview; **S**) · 2 Dec 2025 | P0 AFTPC `docs\papers\NST-2025-0958_Proof_hi.pdf` | **S — cloud HIT** |
| Folder `MATE` | `1X5RikQYFONlrLQR6puJBuGfifhwAytSN` | `50_Resources/Physics/Literature/MATE` | PDFs: `MATE_Configuration.pdf` 9.7 MB; `lilu_thesis_final.pdf` 17.4 MB; `NST_materoot_LiLu.pdf` 3.7 MB + subfolders | Literature / detector config — **not** MATE-Automation code/data/runs | S |
| Folder `Machine Learning` | `1PY45y3-Hqq_KVeKTXrffURoWmvLsyjU-` | `…/Literature/Machine Learning` | Many papers 0.2–14.7 MB incl. `NST-ML-12C12C-MATE.pdf` 801 KB, `ViT.pdf` 3.6 MB, `Physics-informed_machine_learning2021.pdf` 2.5 MB, AT-TPC / LArTPC papers | Literature library (gap list §1.2) — **not** AFTPC dataset | S |
| `CNN for data process` / `thesis/` | folder `1CtF9a8m…` / thesis `1KiKjwue…` | My Drive | `FullVersion_ML_12C.pdf` 1.5 MB; `TPC-MachineLearning.pdf` 1.9 MB + Gemini docs 4–86 KB | **Not** `Physics_Informed_LegacyBackup` | S |
| MATE / ViT / CrossAttention **PPTX** | various under `60_Presentations` | e.g. `609_MATE_Project_Overview-20260318`, `604_ViT_Introduction`, `ResNet_vs_ViT`, `606_Dataset-ScaleUp-202509` | 3–50 MB decks (`MATE-Project-Overview.pptx`, `intro_MATE_ML.pptx`, `ViT_Introduction_20250901.pptx`, `ResNet-DatasetScaleUp.pptx`, `ChannelScaling_Physics_Noise.pptx`) | Presentation archive — **not** checkpoints/data | S |
| `Extensive Feedback For AFTPC_V3` | Gemini doc | `Google AI Studio` | 131 KB · 2 Dec 2025 | Chat notes about AFTPC_V3 — **not** the repo | S |
| `Job Searching/` | `1U8BibQ27CncS5bQ-Tw3tD77NUhSwPEgz` | My Drive | Resumes / Corpy / 日企 Docs, all KB | Career — **not** `github_repo_forJob` | S |
| Colab `Pytorch_laerning00` | `1Gnrqe0mhuCz5CqB3PuCWyoJdFP094np6` | `Colab Notebooks` | **3 KB** | Not training | S |
| Shared `shift of ATTPC campaign` | spreadsheet | Shared with me | n/a | Lab ops, not data | S |

### Explicit misses (search + browse)

Searches run (EN + CN where useful): `MATE`, `MATE-Automation`, `AFTPC`, `Garfield`, `forJob`, `github_repo_forJob`, `checkpoint`/`best_model`/`pth` (title), `.h5`/`hdf5`/`HDF5` (title), `dataset`, `ViT`, `CrossAttention`, `PPAC`, `NimpSim`/`Nimp`/`simulations`, `TPC`, `thesis`, `NST-2025`, `Physics_Informed`, `.pth`, `毕业论文 OR 论文 OR 数据集`, `type:folder (AFTPC OR MATE-Automation OR forJob OR PPAC OR Garfield)`.

| Query / tree | Result |
|---|---|
| **AFTPC** | Empty search. No folder. |
| **MATE-Automation** | Empty file list. AI Overview only cites `03_results_mate.md` + MATE PPTX. |
| **github_repo_forJob** | Empty. |
| **forJob** | Unrelated docs (`Window-Mac prompts`, `Work_vs_PhD_Scorecard`). |
| **type:folder AFTPC / MATE-Automation / forJob / PPAC / Garfield** | **No matching folders.** |
| **`.pth` / `best_model` / `checkpoint`** | No weight files. Hits are markdown/README mentioning checkpoints; one `TRK 5 run content` **image** under Transfer/Images. |
| **`.h5` / HDF5** | Empty. |
| **Garfield** | Content-matches in slides/docs only. No `Garfield_HC` / Raw / Output_V5. |
| **dataset** | Presentation folders (`606_Dataset-ScaleUp-202509`) + ResNet PPTX. No training corpus. |
| **ViT** | Empty as file-name search; decks/papers exist (above). No `D:\outputs` tree. |
| **CrossAttention** | PPTX only (`Imai_Meeting_20260413-h.pptx`, `ResNet-DatasetScaleUp.pptx`). No `V4_CrossAttention_*` outputs. |
| **PPAC** | No folder. Hits = ATTPC shift sheet, posters, stats chapter PDF. |
| **NimpSim / simulations** | No tree. AI Overview: NimpSim mentioned inside PPTX only. |
| **Physics_Informed_LegacyBackup** | Absent. Only `Physics-informed_machine_learning2021.pdf` (literature). |
| **TPC** | Literature PDFs + `TPC Point Cloud Visualization` (AI Studio). No TPC data. |
| **毕业论文 / 论文 / 数据集** | Mid-term thesis **PPT**, dataset-scale-up **slides**. No 数据集. |

My Drive top-level (no research-data trees): `40_Deep Research`, `50_Resources`, `60_Presentations`, `70_Notes`, `Basics`, `CNN for data process`, `Colab Notebooks`, `Finance & Investment`, `Google AI Studio`, `Job Searching`, `Medical & Health`, `Personal practice`, `References for Curriculum`, `Saved from Chrome`, `Transfer`, plus Gemini Docs.

`Transfer/` = `Images` + `Instructions(prompt)` only. Empty of code/data.

---

## Map to gap-list actions

| Gap-list action | Drive already covers? |
|---|---|
| Cloud NST proof PDF | **Yes** — `Google AI Studio` / file id `1CjXlCtik0gj5lMoHXDDpwSaFO-OZe0AZ`. Still copy to Mac if the Mac hunt stays empty; Drive copy is Gemini-upload location, not AFTPC tree. |
| Cloud Physics_Informed_LegacyBackup + architecture | **No** |
| Copy/bundle `github_repo_forJob` | **No** |
| AFTPC git push/bundle | **No** |
| AFTPC dataset copy-or-accept-loss | **No Drive copy** — still a wipe blocker |
| MATE `data/` selective H5 | **No** |
| MATE paper `runs/` EXP1–7 / TRK1–4 | **No** |
| ViT `D:\outputs` decide copy/obsolete | **No Drive copy** |
| PPAC / simulations list-or-abandon | **Not on Drive** — still Windows-only list |

---

## Confidence

| Claim | Confidence | Uncertainty |
|---|---|---|
| No multi-GB research blobs on this account’s Drive | **High** | Quota UI + largest-file list (max 107 MB) + 1.01 GB Drive total |
| AFTPC / forJob / MATE data / checkpoints absent | **High** | Empty searches + no named folders + quota cap |
| NST-2025-0958 proof present | **High** | Opened preview: 13-page confidential NST-2025-0958, MATE-TPC, authors Zhang et al. Exact byte size not shown (File menu not used to avoid download). |
| Computers / Windows desktop backup absent | **High** | Explicit “No computers syncing” |
| Other Google accounts / Shared drives | **Medium** | Scouted `edfghdrtxxx@gmail.com` only. Sidebar had no Shared drives entry. `pom.0852853295@gmail.com` Gmail tab exists in another Chrome profile — **not** searched. |
| Search hiding oddly named files | **Low impact** | 1 GB total Drive files cannot hide 14–180 GB trees even if names differ |

**Residual:** Files in *other* Google accounts, unmounted USB/NAS, or GitHub (`Real-MATE-Identifier` ~401 MB, still ≪ AFTPC) are out of this scout’s scope.

---

## Bottom line

Drive is a **slides + literature + Gemini-artifact** store (~1 GB). It is **not** a mirror of Windows research. The only P0 research *document* found is **NST-2025-0958_Proof_hi.pdf**. Everything else in the research gap list (AFTPC tree, Garfield dataset, MATE data/runs, forJob repo, ViT outputs, PPAC/simulations, Physics_Informed_LegacyBackup) is **still Windows-only**.
