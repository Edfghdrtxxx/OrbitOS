<!-- Verbatim source section; overview: [[../fm-ar-claims-refresh]] -->
<!-- SOURCE-BODY-START -->
## 7. Pending checks — updated table

| Check | Where | Cost | Settles | Change since 16:53 |
|---|---|---|---|---|
| `windows_visit_checks.py` (V6 labels + EXP2 rescore + label-blast verdict) | Windows box | ~5 min | #2, #11, #12, #15 | **Now packaged** (PR #31) — was "1–5 min of h5py" |
| Rung 1 (R1 RN-Raw-lf + R2a/R2b HC pair, s42) | GPU box | 14.5 billed h | #8 direction on true 4He; prereg `rn_raw_lf_s42`, `he4_hc_pair` | Unchanged plan; **queue ordered** (`gpu_session_queue.md` job 4); not launched |
| NimpSim Option B | GPU box + IMP staging | **~20–35 h** (was "~10–18") | #1, #7, #10 | **Cost corrected** (nimpsim-cost; PR #35); does not fit reserve → future session |
| D1–D4 at n≈8000 (k-fold patch) | GPU box CPU | ~1–3 h | H1a vs H1b; R3a gate | **Patch + runbook shipped** (PR #32); cannot run on Mac (no torch/ckpt/H5 — d14-bign) |
| Map-level `permuted_q` on HC (Check A) | box 176 CPU | ~1 h | #9; prereg falsifier | Unchanged — still pending |
| D6 on remaining 3 checkpoints (s42-Raw-triton, HC s0, HC s1) | box 176 CPU | ~30 min | Prereg `conditions` rows formally (A0-comparable s42 battery missing) | **New** — the landed batteries are all off-lock |
| e23 EXP8 physics battery; predump paired stats | box 176 | in flight | OOD-leak mechanism; paired McNemar | No artifacts synced yet |
| `exp3_heldout_unused.py` on lf run | box 176 CPU | ~30 min | True held-out number for 0.92136; #20 | Script shipped (PR #17); not run |
| fm-ar-angle-baseline report | IMP/CPU | in flight | #13 | Still in flight |
| fm-ar-act-ood report | local | in flight | max\|h\| eval-path scorer | Still in flight |
| lf `data_split.json` re-pull (0 bytes) | box 176 sync | minutes | pairing for lf run | Still 0 bytes locally (verified) |

<!-- SOURCE-BODY-END -->
