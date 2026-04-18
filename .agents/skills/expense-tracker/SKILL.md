---
name: expense-tracker
description: Use when user asks to analyze, track, summarize, or report on personal expenses from Alipay (支付宝) or WeChat Pay (微信) CSV exports. Produces a single self-contained interactive HTML dashboard with a concise Claude-written analysis section embedded. Runs entirely locally — raw transaction data never enters Claude's context.
---

# Objective

Build a self-contained HTML expense dashboard from Alipay / WeChat Pay CSV exports. A Node script parses the CSVs and emits aggregates; Claude reads only the aggregates, writes a short English analysis, and injects it plus the raw transactions JSON into a pre-built template. The final report is a single HTML file.

# Trigger examples

- "Analyze my alipay and wechat bills from `20_Project/Expense Organization/input/`"
- "Build an expense report from this folder: `/path/to/csvs`"
- "Summarize last month's spending from my bill exports"

# Workflow

## 1. Resolve the input folder
- If the user gave a path, use it verbatim.
- Otherwise ask via `AskUserQuestion` with default suggestion `20_Project/Expense Organization/input/`.
- If the folder does not exist, stop and report the missing path — do not create it.

## 2. Create output scaffolding
- Compute a timestamp `YYYY-MM-DD_HHMM` from the current local time.
- Ensure `20_Project/Expense Organization/Reports/` exists — create it if missing.
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

## 5. Write the analysis HTML
Produce ~120–180 words of prose plus two small tables based on `aggregates.json`. Use this exact skeleton — semantic HTML only, no inline styles (the template's `.analysis-body` CSS handles layout):

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

Write the result to `{scratch-dir}/analysis.html`.

**Forbidden in the analysis:** totals (already shown in the Summary card), period dates (already shown in Summary), anomaly detection, budget advice, recommendations, emoji.

Keep the tone factual and in English. The template's language toggle only localizes UI chrome — see "Known limitations".

## 6. Assemble the output HTML
- Read `assets/template.html`.
- Replace the literal string `__PRELOADED_DATA_JSON__` with the full contents of `{scratch-dir}/transactions.json`. Insert it raw and unescaped — the surrounding `<script type="application/json">` tag makes it safe; do not parse or re-serialize.
- Replace the literal string `<!-- __CLAUDE_ANALYSIS_HTML__ -->` with the contents of `{scratch-dir}/analysis.html`.
- Write the assembled file to:
  ```
  20_Project/Expense Organization/Reports/{timestamp}_expense-report.html
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
- **Analysis prose is English-only at build time.** The dashboard's language toggle switches UI chrome (labels, headings, chart legends) but does not re-translate the analysis narrative Claude wrote.
- **Raw transactions never enter Claude's context.** This is by design. If the user wants Claude to comment on individual transactions or outliers, they must explicitly load `transactions.json` or the raw CSVs in a separate conversation.
- **Node 22+ required** for the `GB18030` `TextDecoder` support used when decoding Alipay / WeChat CSV exports.
- **No deduplication across runs.** Re-running with the same input folder produces a new timestamped report alongside any previous ones.

# Source files

- `assets/template.html` — static dashboard template with two injection seams (`__PRELOADED_DATA_JSON__`, `<!-- __CLAUDE_ANALYSIS_HTML__ -->`). Do not edit per-run.
- `scripts/build_report.mjs` — Node 22+ ESM CLI, no npm deps. Parses CSVs, emits `transactions.json` and `aggregates.json`.
- `20_Project/Expense Organization/expense-dashboard.html` — historical reference dashboard that the template was derived from. Do not modify; kept as the source of truth for parsing logic.
