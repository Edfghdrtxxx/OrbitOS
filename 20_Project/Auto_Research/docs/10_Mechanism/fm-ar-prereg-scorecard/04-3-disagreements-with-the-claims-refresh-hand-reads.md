<!-- Verbatim source section; overview: [[../fm-ar-prereg-scorecard]] -->
<!-- SOURCE-BODY-START -->
## 3. Disagreements with the claims-refresh hand-reads

| # | Hand-read (claims-refresh) | Scorer result | Deciding evidence |
|---|---|---|---|
| 1 | §3c: falsifier `map_permuted_q_large_predictive` = **pending** | **not_fired** on HC s42 and HC s0 | `bandread_s42_xahc.json`: falsifier clause `acc_delta=-0.0005 vs <= -0.02` = miss → `not_fired` even with attention metrics unread (an `all`-clause failed). The cls-level `permuted_q` delta is the preregistered acc_delta input (yaml:434-435, `battery_match: ["hc"]`, condition `permuted_q`) and it is ≈0 on all 3 HC checkpoints (s0 +0.0005, s1 0.0, s42 −0.0005). The falsifier can now only fire if the *map-level* permuted_q run produces a ≥2 pp accuracy loss — a different perturbation, still unrun. |
| 2 | §0/§3: "D6 battery landed on **3** checkpoints" | **4** d5 batteries exist | `runs/EXP3-XA-HC-100k-seed0/20260922_122647/counterfactual_battery_d5.json`, mtime 09-24 22:46 — after the refresh's evidence cutoff. Its numbers (scaled_cls 0.7975, centered_q 0.5565) are new. |
| 3 | §3b/§4: "on HC physics is pure static bias — the HC head does not even read magnitude" | Holds on **s42** (scaled_cls +0.1 pp) but **fails on s0** (scaled_cls −15.6 pp, centered_q −39.7 pp) | `bandread_s0_xahc.json` observed values above. The magnitude-dependence on HC is **seed-dependent**, not absent — the mechanism claim needs the seed qualifier. |
| 4 | §3a `selection_bias` row: "miss — ALL six", final_gap −0.0306 | **Agrees exactly** — formal scorer verdict, not a band-read | `score_locked_s42.json`: `final_gap ok, value=-0.03064` → miss ×6. This is the one row where the hand-read is now backed by a scorer artifact. |
| 5 | §3a all other s0 rows | **Agree exactly** (table §2c) | Deterministic re-score of the same bands. |

No disagreement on any verdict the hand-read actually committed to; the two deltas are (a) a falsifier the scorer can now close on the acc_delta clause alone, and (b) a fourth battery that landed after the refresh.

---

<!-- SOURCE-BODY-END -->
