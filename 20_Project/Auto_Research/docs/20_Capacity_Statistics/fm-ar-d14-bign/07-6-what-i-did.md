<!-- Verbatim source section; overview: [[../fm-ar-d14-bign]] -->
<!-- SOURCE-BODY-START -->
## 6. What I did

- Read the power audit (`fm-ar-d14-power/report.md`), closing-sync rows A:L156–163, closing doc §10/§10a/§10b, and the full script.
- Verified absence of every required input on this Mac (§1 table): `mdfind`/`find` over `/Users/leyi` and `/Users/Reid Hu`, all Python envs probed for torch.
- Wrote the k-fold/hypergeom/peak-RSS patch in the worktree, compiled it, and exercised `--phase probe --cv-folds 5 --report-peak-rss` end-to-end on a synthetic 8000-event `h1_features.npz` (plus a default-mode regression run). Worktree file `scripts/analysis/exp3_h1_diagnostics.py` carries the uncommitted patch; scratch fixtures deleted.
- Computed the n=8000 MDE table analytically (Wilson, paired-discordant SE, hypergeometric SF — same formulas as the script).

<!-- SOURCE-BODY-END -->
