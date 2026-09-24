<!-- Verbatim source section; overview: [[../fm-ar-transfer]] -->
<!-- SOURCE-BODY-START -->
## 7. Evidence index

- Commands: `curl zenodo.org/api/records/3473953` (file inventory); `python3 99_System/.scratch/z01_baseline.py` (all local numbers); `gs -sDEVICE=txtwrite` on arXiv PDFs 1810.10350, 2605.28296; GitHub API on `ATTPC/event-classification`.
- Files: `src/data/z01.py:991` (physics=zeros), `src/data/dataset.py:9,11` (MATE image/physics schema), `runs/Z01-ResNet-Generic/z01-overnight-20260919-01/train.log` (val_acc 1.0000), `runs/Z01-Logistic-Moments/.../model.npz` + `normalization_stats.json` (0.7009 cross-check), `L1_Current_Campaign.md:20,62` (council ruling), `20_doc/EXP3_closing_analysis_2026-09-24.md:178,198` (Z01 eval queued).
- Kuchera numbers quoted from extracted PDF text: Table 1 (dataset sizes), Table 3 (sim→sim: LR 0.98/0.66 clean/noisy, FCNN 0.97/0.67, CNN 1.00/1.00), Table 5-6 (sim→exp F1 0.72→0.91 tuned).

<!-- SOURCE-BODY-END -->
