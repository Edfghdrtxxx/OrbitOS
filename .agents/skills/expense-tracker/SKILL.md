---
name: expense-tracker
description: Use when user asks to analyze, track, summarize, or report on personal expenses from Alipay (支付宝) or WeChat Pay (微信) CSV exports. Produces a single self-contained interactive HTML dashboard with a concise Claude-written analysis section embedded. Runs entirely locally — raw transaction data never enters Claude's context.
---

# Objective

Build a self-contained HTML expense dashboard from Alipay / WeChat Pay CSV exports. A Node script parses the CSVs and emits aggregates; Claude reads only the aggregates, writes a short analysis in both English and Chinese, and injects both plus the raw transactions JSON into a pre-built template (the template's language toggle reveals the active pane). The final report is a single HTML file.

# Trigger examples

- "Analyze my alipay and wechat bills from `20_Project/Expense Tracker/input/`"
- "Build an expense report from this folder: `/path/to/csvs`"
- "Summarize last month's spending from my bill exports"

# Workflow

## 0. Verify the workspace exists and is git-ignored (auto-fix)
Personal financial data must never be committed. Before anything else, self-heal the workspace:
- Ensure `20_Project/Expense Tracker/input/` and `20_Project/Expense Tracker/Reports/` exist. Create any missing directory with `mkdir -p`.
- Read `.gitignore` at the repo root. If it does NOT already contain an entry that ignores `20_Project/Expense Tracker/` (either the exact line `20_Project/Expense Tracker/`, or a broader pattern that covers it), append this block:
  ```
  # Personal financial data — never commit bill CSVs or generated reports
  20_Project/Expense Tracker/
  ```
- As a final safety net, run `git check-ignore -q "20_Project/Expense Tracker/input/.probe"` (after `touch`-ing that probe file); if the exit code is non-zero the folder is NOT being ignored — halt and report the problem instead of continuing. Delete the probe file regardless of outcome.
- Report concisely what was created/added, or state "workspace already configured" when no changes were needed.

## 1. Resolve the input folder
- If the user gave a path, use it verbatim.
- Otherwise **silently default** to `20_Project/Expense Tracker/input/` — do NOT prompt. Fall through to Step 1b so the missing/empty case auto-opens the guide first.

## 1b. No valid CSVs → open export guide, THEN ask
- Check the resolved folder non-recursively (matching the parser): does it exist AND contain at least one `.csv` file at the top level? Subdirectories are ignored.
- If it exists and has ≥1 `.csv`, skip this step — proceed to Step 2.
- Otherwise (folder missing, empty, or no `.csv` files — including the case where the user explicitly passed a folder that's empty/missing):
  1. **Auto-open the guide FIRST** (before any prompt):
     - Ensure `20_Project/Expense Tracker/Reports/` exists — create it if missing.
     - Copy `assets/guide.html` to `20_Project/Expense Tracker/Reports/export-guide.html`, overwriting any existing copy (the source is canonical).
     - Open it in the user's default browser via Bash: `cmd //c start "" "<absolute-path-to-copied-guide>"` (Git-Bash-on-Windows incantation — `//c` avoids path mangling, the empty `""` satisfies `start`'s title-argument quirk). On non-Windows platforms, substitute `open` (macOS) or `xdg-open` (Linux). Auto-open is authorized — the user explicitly requested this behavior.
     - In a ONE-line message, report the absolute path of the copied guide.
  2. **Then ask via `AskUserQuestion`** what to do now, with options like:
     - "I'll follow the guide and re-run later" — halt the skill immediately.
     - "My CSVs are in a different folder — let me give you the path" — user supplies a new path; re-enter Step 1b's CSV check against that path (loop at most once more; if still empty, halt).
  3. If halted at any point: do NOT run the parser, do NOT write aggregates, do NOT produce a dashboard.

## 2. Create output scaffolding
- Compute a timestamp `YYYY-MM-DD_HHMM` from the current local time.
- Ensure `20_Project/Expense Tracker/Reports/` exists — create it if missing.
- Create a scratch directory for intermediate JSON at `99_System/.scratch/expense-tracker-{timestamp}/`.

## 3. Run the parser
- From the skill's directory, invoke:
  ```
  node scripts/build_report.mjs <input-folder> <scratch-dir>
  ```
- Check the exit code. If non-zero, relay stderr to the user and stop.
- Keep the stdout progress lines — they include per-file row counts used in the final summary.

## 4. Read aggregates ONLY
- Read `{scratch-dir}/aggregates.json`.
- **Do NOT read `transactions.json`** — it contains raw rows and must never enter Claude's context. It will be injected into the template as an opaque string in Step 6.

## 5. Write the analysis HTML (English + Chinese)
Produce TWO analysis files — one English, one Chinese — each ~120–180 words of prose plus two small tables based on `aggregates.json`. The dashboard's language toggle will swap between them at view time. Use this exact skeleton per language — semantic HTML only, no inline styles (the template's `.analysis-body` CSS handles layout):

```html
<div class="analysis-summary">
  <p>…narrative: weekday vs weekend pattern, early-vs-late-period drift, recurring vendor cadence, 2–4 sentences…</p>
  <div class="analysis-grid">
    <div>
      <h4>Top Categories</h4>
      <table>…3 rows from top_categories: name, amount (¥X,XXX.XX), share (XX.X%)…</table>
    </div>
    <div>
      <h4>Top Counterparties</h4>
      <table>…3 rows from top_counterparties: name, amount…</table>
    </div>
  </div>
</div>
```

- Write the English version to `{scratch-dir}/analysis-en.html`.
- Write the Chinese version to `{scratch-dir}/analysis-zh.html` — semantically equivalent narrative, same structure, same factual claims. Translate captions and headers: `Top Categories` → `分类占比`, `Top Counterparties` → `高频交易对方`, `Category` → `分类`, `Amount` → `金额`, `Share` → `占比`, `Counterparty` → `交易对方`. Translate the narrative prose itself.
- **Do NOT translate:** merchant names / counterparty strings (they're already Chinese character data), the `¥` currency symbol (stays), category names (already Chinese in the aggregates).
- Enforce the 120–180 word ceiling per language (so the Chinese version doesn't inflate due to Chinese's higher information density).

**Forbidden in both analyses:** totals (already shown in the Summary card), period dates (already shown in Summary), anomaly detection, budget advice, recommendations, emoji.

Keep the tone factual.

## 6. Assemble the output HTML
- Read `assets/template.html`.
- Replace the literal string `__PRELOADED_DATA_JSON__` with the full contents of `{scratch-dir}/transactions.json`. Insert it raw and unescaped — the surrounding `<script type="application/json">` tag makes it safe; do not parse or re-serialize.
- Replace the literal string `<!-- __CLAUDE_ANALYSIS_HTML_EN__ -->` with the contents of `{scratch-dir}/analysis-en.html`.
- Replace the literal string `<!-- __CLAUDE_ANALYSIS_HTML_ZH__ -->` with the contents of `{scratch-dir}/analysis-zh.html`.
- Write the assembled file to:
  ```
  20_Project/Expense Tracker/Reports/{timestamp}_expense-report.html
  ```

## 7. Report to user
- One-line summary using the stdout lines from Step 3 (files processed, total rows, period covered).
- Print the absolute path of the generated report.
- Offer to open it in the default browser — but do not auto-open.

## 8. Clean up
- After the user acknowledges the report, delete the scratch dir at `99_System/.scratch/expense-tracker-{timestamp}/`.
- If anything failed mid-run, leave the scratch dir in place for debugging and tell the user where it is.

# Notes & known limitations

- **Folder is not recursed.** Only CSV files in the top level of the input folder are parsed; subdirectories are ignored.
- **Raw transactions never enter Claude's context.** This is by design. If the user wants Claude to comment on individual transactions or outliers, they must explicitly load `transactions.json` or the raw CSVs in a separate conversation.
- **Node 22+ required** for the `GB18030` `TextDecoder` support used when decoding Alipay / WeChat CSV exports.
- **No deduplication across runs.** Re-running with the same input folder produces a new timestamped report alongside any previous ones.

# Source files

- `assets/template.html` — static dashboard template with three injection seams (`__PRELOADED_DATA_JSON__`, `<!-- __CLAUDE_ANALYSIS_HTML_EN__ -->`, `<!-- __CLAUDE_ANALYSIS_HTML_ZH__ -->`). Do not edit per-run.
- `assets/guide.html` — bilingual export walkthrough shown when no CSVs are found; do not edit per-run.
- `scripts/build_report.mjs` — Node 22+ ESM CLI, no npm deps. Parses CSVs, emits `transactions.json` and `aggregates.json`.
- `20_Project/Expense Tracker/expense-dashboard.html` — historical reference dashboard that the template was derived from. Kept as a parsing-logic reference; prefer not to edit, but modify when genuinely necessary (e.g., to keep it in sync with changes to `assets/template.html`).
