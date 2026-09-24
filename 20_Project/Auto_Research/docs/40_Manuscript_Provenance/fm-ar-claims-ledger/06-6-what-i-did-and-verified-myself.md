<!-- Verbatim source section; overview: [[../fm-ar-claims-ledger]] -->
<!-- SOURCE-BODY-START -->
## 6. What I did and verified myself

- Read `main.tex` (all 606 lines, incl. full text of truncated lines), `supplementary.tex`, `paper_anchor.md`, and all 20 completed scout reports.
- Re-verified against `runs/` artifacts: all 12 EXP3 `metrics.json` (accuracies/recalls match every scout table); the label-fix battery JSON (corrected version — resolves the F2 conflict); EXP8 `data_split.json` (true test split, n=75,000); TRK5/6 + five baseline `metrics.json` (all 10 energy-table cells exact: XA 0.0219/0.0103, RN 0.0264/0.0147, RANSAC 0.4827/0.3338, Hough-opt 0.4935/0.3362, Hough 0.5234/0.3574, HC-opt 0.7197/0.5474, HC 0.7375/0.5652).
- Confirmed no EXP1/EXP2/V6/V4/TRK1-4 run artifacts exist locally — those claims are marked unverified rather than guessed.

<!-- SOURCE-BODY-END -->
