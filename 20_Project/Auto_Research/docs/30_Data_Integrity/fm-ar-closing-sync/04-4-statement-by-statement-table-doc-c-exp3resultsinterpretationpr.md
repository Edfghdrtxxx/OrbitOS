<!-- Verbatim source section; overview: [[../fm-ar-closing-sync]] -->
<!-- SOURCE-BODY-START -->
## 4. Statement-by-statement table — Doc C (`EXP3_results_interpretation_predraft.md`)

| Doc:line | Statement (compressed) | Report § | Verdict | Suggested replacement |
|---|---|---|---|---|
| C:L13 | XA-Raw cell mean 0.87344, n=2 | mechanism §5.1 | **stands** | — |
| C:L19 | Run 2 (XA-Raw seed 1) blank template | A:§15 | **stands (open — never ran)** | — |
| C:L23–30 | label-fix 2×2 blank table | A:§4 | **superseded in part** | Fill XA-Raw-lf row: 0.92136 / α-recall 0.7254 / macro-F1 0.8693; mark other 3 arms "never launched — campaign stopped." |
| C:L36–37 | "XA-Raw-lf → 0.93–0.95 = bug dominant; stays ~0.87 = intrinsically hard" | A:§4 | **needs qualifier** | "Observed 0.9214 falls between the preregistered bands — record as '4He task easier for XA-Raw; Δ_Raw sign unknown pending RN-Raw-lf.'" |
| C:L43 | ILLEGAL: "fix delta" comparisons across different val splits | test-split §1 | **stands — strengthened** | The prohibition is sharper than stated: buggy and lf runs have *different* val partitions (stratify on different label arrays), so even same-seed per-event pairing is invalid. |
| C:L45–57 | Run 7 query-ablation template + decision table | A:§8–9; mechanism §2.4 | **superseded (moot)** | "Ablation never ran. The battery answered the gated question: permuted_q Δ=0 on 6/6 → not query poisoning; zero_q cost is query-cone geometry (seed-variable −5.8 to −57.1pp), not content." |
| C:L59–73 | variant cures "launch only if ablation says so" | mechanism §3 | **needs qualifier** | "The ablation trigger can never fire (never ran, question moot). Cure launches now gate on D5/`scaled_cls` per the locked prereg table — attn_dim=512 for capacity, physics_norm=zscore for the scale side-channel." |
| C:L75–83 | Run 11 auto-EXP4 template | A:§5 | **stands (open — never fired)** | — |
| C:L85–90 | standing follow-ups incl. "Decide GPU release (AutoDL wipe ~2026-10-06)" | A:§1/§15 | **superseded in part** | GPU decision already made (AutoDL closed at captain's call); remaining follow-ups (narrative §4 update, compare_exp3_runs) still apply. |

---

<!-- SOURCE-BODY-END -->
