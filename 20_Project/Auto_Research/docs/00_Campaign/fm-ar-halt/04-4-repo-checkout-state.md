<!-- Verbatim source section; overview: [[../fm-ar-halt]] -->
<!-- SOURCE-BODY-START -->
## 4. Repo/checkout state

- **Mac `MATE-Automation`**: master `d23a948`, **3 commits unpushed**; working tree clean except `runs/` (gitignored). Local branches `pr17-tmp` (`e764fb7`), `pr15-tmp` exist for diffing.
- **Box `z01-exec`** (`/root/autodl-tmp/z01-exec`): base `a3ce70e` + uncommitted `git apply` diffs = PR#14 code files (5 modified) + PR#17 (`exp3_heldout_unused.py` untracked, `exp4_attention_metrics.py` modified). Diffs saved at `/root/autodl-tmp/.autodl/pr14.diff`, `pr17.diff` — re-appliable after any reset.
- **Box `MATE-Automation-V4`**: detached bundle snapshot, unchanged this morning.
- **OrbitOS vault**: 17 dirty paths (daily notes, Jev-compaction, Reid_Bench rename) — **pre-existing user state, not touched by me**; left as-is per halt.
- **Killed job**: `cpu_requeue.sh` + child python killed ~09:00; `pgrep` confirms no campaign processes. Log: `/root/autodl-tmp/.autodl/cpu_requeue.log` (shows CHAIN_START, d6_s42 start, no done line).

<!-- SOURCE-BODY-END -->
