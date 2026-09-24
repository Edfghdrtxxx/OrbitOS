<!-- Verbatim source section; overview: [[../fm-ar-prereg-scorecard]] -->
<!-- SOURCE-BODY-START -->
## 0. Headline

- **Formal (locked-checkpoint) verdicts exist for exactly one prereg row: `selection_bias` = miss ×6 rivals.** The final-epoch XA−RN gap is −3.064 pp, *outside every rival's band* — the selection/threshold model (S) is falsified, and the gap is worse at final epoch than at best epoch (−2.13 pp), so best-epoch selection *understates* the XA deficit rather than explaining it.
- **Every `conditions:` battery row is formally pending** — the A0-locked s42 XA-Raw triton battery (`counterfactual_battery.json`, original 0.8715, n=2000) contains only the D1–D4 conditions (`permuted_q`, `zero_both`, `zero_cls`, `zero_q`); the D6 conditions were never run on it. The four landed `counterfactual_battery_d5.json` files are all on other checkpoints → `not_comparable` under the locked gate.
- **Off-lock band-reads (deterministic, scorer clause logic, comparability gate bypassed) confirm the claims-refresh hand-reads exactly** on s0 XA-Raw, lf XA-Raw, and s42 XA-HC — and add a **fourth battery the hand-read missed**: XA-HC **s0** d5 (mtime 09-24 22:46, after the refresh), where `scaled_cls` = 0.7975 (−15.6 pp) and `centered_q` = 0.5565 (−39.7 pp). The "HC head ignores physics magnitude" story holds on s42 but **not on s0** — see §4.
- **Falsifier `map_permuted_q_large_predictive` is now `not_fired` on both HC checkpoints** (was "pending" in the hand-read): the cls-level `permuted_q` accuracy delta is −0.05 pp / +0.05 pp, which misses the falsifier's ≤ −2 pp clause outright. The falsifier can only fire on a *map-level* permuted_q run with a ≥2 pp accuracy loss — still unrun (Check A).
- **A5 verified:** selection premium 0.21–1.74 pp, mean 0.71 pp across all 12 EXP3 runs — the agenda's figures are exact.
- **R3b gate (`physics_norm_zscore`, "run only if scaled_cls improves the existing checkpoint") is not met** — scaled_cls collapsed on every Raw checkpoint (−45.8 pp s0, −73.4 pp lf) and did nothing on HC s42 (+0.1 pp). No rival predicted the collapse.

---

<!-- SOURCE-BODY-END -->
