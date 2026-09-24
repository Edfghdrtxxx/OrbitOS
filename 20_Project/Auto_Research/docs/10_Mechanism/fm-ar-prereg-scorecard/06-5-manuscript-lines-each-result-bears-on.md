<!-- Verbatim source section; overview: [[../fm-ar-prereg-scorecard]] -->
<!-- SOURCE-BODY-START -->
## 5. Manuscript lines each result bears on

Verbatim quotes from `/Users/Reid Hu/MATE-Automation/10_Papers-Thesis/Physics_Informed/main.tex` (read-only; sketches only — the captain amends).

**L170** — `"Before training, each channel is standardized using mean and standard deviation computed from the training set; physics features are normalized in the same way."`
Bears on: `scaled_cls` collapse on Raw (miss ×6 at −45.8/−73.4 pp) proves the head reads physics *magnitude* — i.e. the features are effectively **not** normalized in the way this sentence claims (claims-refresh #3 already flags it wrong). Sketch: replace the trailing clause with the actual preprocessing (raw-scale physics vector) or drop it; optionally add "the classifier's dependence on physics-feature scale is diagnosed in §X".

**L207** — `"These four features are standardized using training-set statistics before fusion."`
Bears on: same mechanism evidence. On HC s42 the head ignores physics content *and* magnitude (scaled_cls +0.1 pp, permuted/mean ≈ original) — consistent with standardization making the features inert; on HC s0 it reads magnitude (−15.6 pp) — inconsistent. Sketch: keep the sentence only if it is literally true of the pipeline (verify `physics_norm` config); the *mechanism* claim belongs in the discussion, not here.

**L298** — `"Cross-attention in turn outperforms the bare ResNet-18 by $+0.8$~pp on HC data and $+1.6$~pp on Raw data, the larger advantage on noisy inputs indicating that the MoI features are most valuable when image quality is degraded."`
Bears on: (a) `selection_bias` miss ×6 — the matched-size s42 Raw gap is −2.13 pp best / −3.06 pp final, so "+1.6 pp on Raw" is an unmatched-size artifact and selection bias makes it *worse*, not better; (b) D6 band-reads — on Raw the physics pathway is a magnitude-dependent static bias that can *hurt* (the mechanism story behind "most valuable when degraded" is contradicted). Sketch: "…by +0.8 pp on HC data; on Raw data the comparison is confounded by dataset size and a physics-scale pathology we diagnose in §X — at matched size the ordering reverses."

**L313** — `"A representative example (Fig.~\ref{fig:attention-maps}) shows elevated attention near the track termination where the Bragg peak occurs. This behavior is physically consistent with isotope discrimination…"`
Bears on: `map_permuted_q` falsifier `not_fired` (acc_delta ≈ 0 on all 3 HC checkpoints) + `centered_q` −6.6/−39.7 pp — the query's DC level is load-bearing but its *content* is inert; attention maps cannot be read as routing evidence. Sketch: append "attention weights reflect a static query bias rather than event-specific routing (§X); they are not evidence of mechanism."

**L248** — `"Training uses an 80/20 train/validation split for the main tasks, and all reported accuracies refer to the held-out validation sets."`
Bears on: A5 table — the same val set drives best-epoch selection, early stopping, and reported metrics; measured premium 0.21–1.74 pp (mean 0.71 pp). Sketch: append "Because the validation set also drives checkpoint selection, reported accuracies carry a measured best-epoch premium of 0.2–1.7 pp (mean 0.7 pp across 12 runs); paired architecture comparisons are arm-symmetric and largely cancel this bias."

---

<!-- SOURCE-BODY-END -->
