<!-- Verbatim source section; overview: [[../fm-ar-maxh-confound]] -->
<!-- SOURCE-BODY-START -->
## 4. Manuscript implication (finding only — captain edits)

`10_Papers-Thesis/Physics_Informed/main.tex:323-332` (§"Unseen-Channel Stress Test") currently reports only false-target rates; the max|h| result is not yet in the manuscript. If it is added, **do not** write "flags unseen carbon isotopes at AUROC 0.90". Suggested wording (if the GPU check confirms a residual beyond observables):

> "A single penultimate unit separates the far-OOD elastic-recoil channels from the seen light-fragment channels (AUROC 0.90 vs C+D), but the same score separates the seen proton channel equally well and does not distinguish unseen from seen events overall (AUROC 0.67/0.58 vs all seen); it marks event scale rather than novelty."

If the GPU check shows the signal is fully explained by e.g. total charge, the stronger honest statement is that the penultimate magnitude is a deposition-scale readout — still publishable as a mechanism observation, not as OOD detection.

<!-- SOURCE-BODY-END -->
