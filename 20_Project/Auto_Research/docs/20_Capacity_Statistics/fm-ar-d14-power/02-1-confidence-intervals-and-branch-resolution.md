<!-- Verbatim source section; overview: [[../fm-ar-d14-power]] -->
<!-- SOURCE-BODY-START -->
## 1. Confidence intervals and branch resolution

Wilson 95% CIs (test half n=250 for D1–D3; n=500 for D4). No per-event probe predictions are stored, so probe differences use **unpaired** bounds — conservative; the true paired intervals are tighter but the same events were used, so pairing can only shrink them.

| Quantity | Value | 95% CI |
|---|---|---|
| D1 probe XA-68 | 220/250 = 0.880 | [0.834, 0.915] |
| D1 probe RN-512 | 217/250 = 0.868 | [0.820, 0.904] |
| D2 physics-only | 198/250 = 0.792 | [0.738, 0.838] |
| D3 attended-only | 219/250 = 0.876 | [0.829, 0.911] |
| D4 XA error rate | 55/500 = 0.110 | [0.086, 0.141] |
| D4 RN error rate | 50/500 = 0.100 | [0.077, 0.129] |

| Difference | Δ | 95% CI | Resolved? |
|---|---|---|---|
| D1: XA68 − RN512 | +0.012 | [−0.047, +0.071] unpaired bound | **No** — "≪" (H1a) and "≈" (H1b) both inside CI |
| D3 − RN512 | +0.008 | [−0.051, +0.067] | **No** — same |
| D3 − XA68 (physics concat adds?) | −0.004 | [−0.062, +0.054] | No |
| D2 − majority | **0.000 exactly** | — | **Yes, resolved**: zero linear signal in physics features |
| D4: XA−RN error rate | +0.010 | [−0.017, +0.037] (paired, discordant-based) | No — McNemar exact p = 0.57 (27 vs 22 discordant) |

**D4 overlap is the one strong result, and it cuts against the lead's read.** Observed `both_wrong = 28` vs **5.5 expected** if the two error sets were independent (hypergeometric P(≥28) ≈ 1.7×10⁻¹⁷). Even conditioning on class — XA has 42 class-0 + 13 class-1 errors, RN has 38 + 12 — independence *within* class predicts only ~16.5 shared errors. The errors are **concentrated on the same hard events** (mostly class-0), not "diffuse." The pre-registered table maps "diffuse → capacity"; observed is the opposite. But the table's other branch ("errors concentrated where physics misleads → crowding") is also not licensed: nothing in D1–D4 ties the shared errors to physics — they're tied to class-0 difficulty, which both models share. **D4 resolves neither H1a nor H1b; it says the two models fail on the same events, i.e., the deficit is event-difficulty-driven, and the XA-only excess (27 vs 22) is noise (p=0.57).**

Branch-by-branch: D1 unresolved, D2 resolved (uninformative — see §3), D3 unresolved, D4 resolved-but-misread (concentrated, mechanism unattributed). The lead's §10a synthesis ("head input fine, attended fine, physics uninformative, errors diffuse → learned head leans on uninformative Izz magnitude") is a post-hoc story the table does not produce: D1/D3 only *fail to reject* equality, and D4's concentration is asserted away as "diffuse."

<!-- SOURCE-BODY-END -->
