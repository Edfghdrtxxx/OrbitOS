<!-- Verbatim source section; overview: [[../fm-ar-paired-writeup]] -->
<!-- SOURCE-BODY-START -->
## 6. Manuscript mapping (verbatim quotes + suggested sketches)

Manuscript file: `10_Papers-Thesis/Physics_Informed/main.tex` (captain-only; sketches below are suggestions, not edits).

### 6.1 EXP8 FTR — `main.tex:330` and Table `tab:exp8-ftr` (lines 334–353)

Verbatim (line 330, abridged to the relevant clause):

> "…a paired excess of $+0.071$ (bootstrap 95\% CI $[+0.070, +0.072]$, 1000 resamples), the cross-attention rate being roughly 2.9 times the ResNet value, and significant on each channel individually under McNemar's test with Holm correction ($p_{\mathrm{Holm}} < 10^{-6}$ for F, G, and H)."

Reproduced: pooled ΔFTR +0.0709 [+0.0698,+0.0720]; per-channel Holm p<1e-300 for F/G/H. **New support:** the per-channel ΔFTR CIs in §3.3 could fill the table's omitted-CI gap. Sketch (caption addition for `tab:exp8-ftr`, line 336): *"Per-channel paired 95% bootstrap intervals on Δ are F [+0.070,+0.074], G [+0.072,+0.076], H [+0.065,+0.069], C [−0.006,+0.001], D [−0.003,+0.003], E [−0.002,+0.001], null [0,0]."*

### 6.2 Seen-channel tie — `main.tex:328`

Verbatim:

> "On the held-out seen-channel test set ($59{,}928$ events excluding the empty-target null channel) the ResNet-18 arm reaches recall 0.923 (class A) and 0.911 (class B) at accuracy 0.924 with expected calibration error 0.044, and the cross-attention arm 0.924 (A) and 0.909 (B) at accuracy 0.924 with ECE 0.048; precisions are likewise matched (class B: 0.867 vs.\ 0.866)."

Reproduced: n=59,928, acc 0.9245 vs 0.9242, Δ=+0.03pp, McNemar p=0.764. Sketch (sentence addition): *"The seen-channel accuracies are statistically indistinguishable (paired McNemar $p = 0.76$; $\Delta = +0.03$pp, bootstrap 95% CI $[-0.15, +0.20]$pp), so the arms differ only under distribution shift."* — this is the paired version of the "arms differ only on far-OOD" claim.

### 6.3 Val-set architecture effect — `main.tex:369` (EXP1 discussion)

Verbatim (line 369, clause):

> "…the cross-attention model and the bare ResNet-18 reach 95.80\% and 95.77\% validation accuracy; the architecture effect of $+0.024$~pp is not significant (McNemar $p = 0.81$, and the bootstrap 95\% confidence interval on the accuracy difference, $[-0.14, +0.19]$~pp, includes zero)."

Note the contrast: on EXP1's 100k task the architecture effect is a null, but on EXP8's val split the same comparison gives **+0.207pp [+0.065,+0.347], p=0.0043** — a small but significant in-distribution advantage for cross-attention on this dataset. If the manuscript wants to state the EXP8 in-distribution effect anywhere, §3.1 is the paired evidence. (No existing sentence claims it; the seen-*test* tie in §6.2 is the honest headline.)

### 6.4 Energy regression — `main.tex:442`, Table `tab:energy-regression` (lines 446–463), caption line 447

Verbatim (line 442, clause):

> "The cross-attention model attains an RMSE of 0.0219~MeV and an MAE of 0.0103~MeV, against 0.0264~MeV and 0.0147~MeV for the architecture-matched ResNet baseline---a 0.0045~MeV (17\%) RMSE reduction whose paired Wilcoxon $p$-value is indistinguishable from zero at double precision and whose paired-bootstrap confidence interval on the RMSE difference excludes zero."

Reproduced exactly (ΔRMSE +0.0045 [+0.0037,+0.0054], Wilcoxon p<1e-300, d=0.294). **New support:** §4's per-bin and per-track-count paired table upgrades line 444's "the CNN advantage is uniform" from a descriptive statement to a tested one — XA wins all 7 bins and all 4 track counts with CIs excluding 0. Sketch (sentence addition after "CNN RMSE stays at or below 0.05~MeV in every bin"): *"The cross-attention advantage over ResNet is likewise uniform: the paired MAE difference is positive in every energy bin (largest below 1.3~MeV, Cohen's $d \approx 0.7$) and at every track multiplicity (Wilcoxon $p < 10^{-170}$ throughout)."*

### 6.5 Classical baselines — `main.tex:442` (ordering claim) and `main.tex:505` (conclusion)

Verbatim (line 505, clause):

> "…while the best classical image-based estimator on the same events attains 0.48~MeV."

Reproduced: RANSAC 0.4827 MeV RMSE on the shared 179,964 events; all 10 CNN-vs-classical pairs significant at p<1e-300 with ΔRMSE +0.46 to +0.72 MeV. The 21-pair Bonferroni claim (lines 399/442/447) is consistent with these p-values. Sketch: none needed — already paired; §5 supplies the per-pair ΔMAE/ΔRMSE values if a referee asks for them.

<!-- SOURCE-BODY-END -->
