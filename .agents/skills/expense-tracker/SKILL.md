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
- Ensure `20_Project/Expense Tracker/input/` and `20_Project/Expense Tracker/Reports/` exist. Create any missing directory with `mkdir -p`. This is the ONLY place the skill creates these — later steps assume they exist.
- **Determine ignore state via `git check-ignore`, not by reading `.gitignore`.** String-matching the file is brittle (commented lines, CRLF, global gitignore, `.git/info/exclude` all produce false results); `git check-ignore` is the authoritative test. Procedure:
  1. `touch "20_Project/Expense Tracker/input/.probe"`, run `git check-ignore -q "20_Project/Expense Tracker/input/.probe"`, capture the exit code into `$rc`, then `rm -f` the probe file.
  2. Interpret `$rc`:
     - `0` → probe IS ignored (by any of: repo `.gitignore`, `.git/info/exclude`, global gitignore, a broader parent pattern). Workspace is safe; do NOT append anything.
     - `1` → probe is NOT ignored. Append the block below to the repo's root `.gitignore`, then re-probe. If the re-probe still returns `1`, halt and report.
     - other (e.g., `128`) → git is not usable. Halt and report the git error.
  ```
  # Personal financial data — never commit bill CSVs or generated reports
  20_Project/Expense Tracker/**
  ```
- Report concisely what was created/added, or state "workspace already configured" when no changes were needed.

## 1. Resolve the input folder
"Attached" is decided by the current prompt, not disk state. Files left in `input/` from prior runs do NOT count.
- Prompt has attachments or `@path` refs → use those.
- Prompt gives an explicit folder path → use it verbatim.
- Neither → case "not attached"; do NOT silently default to `input/`. Go to Step 1b.

## 1b. No files attached → open export guide, THEN ask
Enter when Step 1 is "not attached", or when a resolved folder is missing / empty / has no `.csv` recursively.
  1. **Auto-open the guide FIRST** (before any prompt):
     - Copy `assets/guide.html` to `20_Project/Expense Tracker/Reports/export-guide.html`, overwriting any existing copy (the source is canonical). The directory is guaranteed to exist by Step 0.
     - Open it in the user's default browser via Bash: `cmd //c start "" "<absolute-path-to-copied-guide>"` (Git-Bash-on-Windows incantation — `//c` avoids path mangling, the empty `""` satisfies `start`'s title-argument quirk). On non-Windows platforms, substitute `open` (macOS) or `xdg-open` (Linux). Auto-open is authorized — the user explicitly requested this behavior.
     - In a ONE-line message, report the absolute path of the copied guide.
  2. **Then ask via `AskUserQuestion`** what to do now, with options like:
     - "I'll follow the guide and re-run later" — halt the skill immediately.
     - "My CSVs are in a different folder — let me give you the path" — user supplies a new path; re-enter Step 1b's CSV check against that path (loop at most once more; if still empty, halt).
  3. If halted at any point: do NOT run the parser, do NOT write aggregates, do NOT produce a dashboard.

## 2. Create output scaffolding
- Compute a timestamp `YYYY-MM-DD_HHMM` from the current local time.
- Create a scratch directory for intermediate JSON at `99_System/.scratch/expense-tracker-{timestamp}/`. `20_Project/Expense Tracker/Reports/` is guaranteed to exist by Step 0.

## 2a. Flatten nested CSVs to top-level
The parser is non-recursive by design, but bill ZIPs usually extract into one level of subfolders. Before running, copy every `.csv` found in any subdirectory of the input folder up to the top level. Name copies `_flat_{parent-dirname}__{filename}.csv` to avoid collisions; remember each copied path so Step 8 can delete it. Originals are never moved or modified. `.xlsx` bill exports (WeChat sometimes ships as xlsx) are handled in Step 2b.

## 2b. Convert nested `.xlsx` bills to CSV
Run `node scripts/xlsx_to_csv.mjs <xlsx> <output.csv>` for every `.xlsx` found anywhere under the input folder, emitting to the top level with the same `_flat_{parent-dirname}__{stem}.csv` convention used in Step 2a. The converter is dependency-free (Node built-ins only — reads the xlsx as a zip via `zlib.inflateRawSync`, parses `sharedStrings.xml` + `sheet1.xml`, and resolves date-formatted cells through `styles.xml` numFmt lookup so `交易时间` emerges as `YYYY-MM-DD HH:MM:SS` rather than an Excel serial number). Track emitted paths alongside Step 2a's copies so Step 8 removes them. If `detectFormat` later rejects a converted file, leave it — the parser will simply skip it with a `✗` line.

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
Produce TWO analysis files — one English, one Chinese — each ~180–240 words of prose plus two small tables and a short tips list, all based on `aggregates.json`. The dashboard's language toggle will swap between them at view time. Use this exact skeleton per language — semantic HTML only, no inline styles (the template's `.analysis-body` CSS handles layout):

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
  <div class="analysis-tips">
    <h4>Money Saving Tips</h4>
    <ul>
      <li>…tip 1, tied to a concrete top category / counterparty / weekday-weekend pattern in THIS dataset…</li>
      <li>…tip 2…</li>
    </ul>
  </div>
</div>
```

- Write the English version to `{scratch-dir}/analysis-en.html`.
- Write the Chinese version to `{scratch-dir}/analysis-zh.html` — semantically equivalent narrative, same structure, same factual claims. Translate captions and headers: `Top Categories` → `分类占比`, `Top Counterparties` → `高频交易对方`, `Category` → `分类`, `Amount` → `金额`, `Share` → `占比`, `Counterparty` → `交易对方`, `Money Saving Tips` → `省钱建议`. Translate the narrative prose and tips themselves.
- **Do NOT translate:** merchant names / counterparty strings (they're already Chinese character data), the `¥` currency symbol (stays), category names (already Chinese in the aggregates).
- Enforce the 180–240 word ceiling per language (loosened from 120–180 to accommodate the new tips block without cramping the narrative; the tips themselves count toward this budget).

**Money Saving Tips rules:**
- 2–4 bullets, short and actionable. Fewer is better than padding.
- Each tip MUST be anchored on this dataset's actual top categories, top counterparties, or weekday-vs-weekend pattern. Name the category or counterparty the tip addresses (e.g. "美团 accounts for ¥12,750 across 11 orders — cap at ¥800/month" not "spend less on food delivery").
- No generic advice. "Spend less on coffee" is only acceptable if coffee is an actual top expense.
- If the top category is a noisy bucket (like 转账 / 转账红包 for interpersonal transfers), acknowledge the data is noisy and suggest a tracking-discipline tip, or skip and write fewer tips.
- Lead with the tip — no "Based on your data…" preambles.

**Forbidden in both analyses:** totals (already shown in the Summary card), period dates (already shown in Summary), anomaly detection, emoji, exclamation marks, moralizing tone.

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

## 7. Report to user and auto-open
- One-line summary using the stdout lines from Step 3 (files processed, total rows, period covered).
- Print the absolute path of the generated report.
- **Auto-open** the report in the user's default browser via Bash: `cmd //c start "" "<absolute-path>"` on Windows (the Git-Bash `//c` + empty-title-arg incantation), `open` on macOS, `xdg-open` on Linux. Auto-open is authorized — the user has accepted this as the default.

## 8. Clean up
- After the user acknowledges the report, delete the scratch dir at `99_System/.scratch/expense-tracker-{timestamp}/` AND remove the flattened CSV copies created in Step 2a (originals untouched).
- If anything failed mid-run, leave the scratch dir in place for debugging and tell the user where it is.

# Notes & known limitations

- **Nested CSVs are auto-flattened; nested `.xlsx` is auto-converted.** Step 2a stages `.csv` files and Step 2b converts `.xlsx` files to CSV (via `scripts/xlsx_to_csv.mjs`) before parsing; Step 8 removes every staged file. The parser itself remains non-recursive and CSV-only — any non-CSV input passes through the converter first.
- **Raw transactions never enter Claude's context.** This is by design. If the user wants Claude to comment on individual transactions or outliers, they must explicitly load `transactions.json` or the raw CSVs in a separate conversation.
- **Node 22+ required** for the `GB18030` `TextDecoder` support used when decoding Alipay / WeChat CSV exports.
- **No deduplication across runs.** Re-running with the same input folder produces a new timestamped report alongside any previous ones.

# Source files

- `assets/template.html` — static dashboard template with three injection seams (`__PRELOADED_DATA_JSON__`, `<!-- __CLAUDE_ANALYSIS_HTML_EN__ -->`, `<!-- __CLAUDE_ANALYSIS_HTML_ZH__ -->`). Do not edit per-run.
- `assets/guide.html` — bilingual export walkthrough shown when no CSVs are found; do not edit per-run.
- `scripts/build_report.mjs` — Node 22+ ESM CLI, no npm deps. Parses CSVs, emits `transactions.json` and `aggregates.json`.
- `scripts/xlsx_to_csv.mjs` — Node 22+ ESM CLI, no npm deps. Converts a single `.xlsx` bill export to CSV by reading the xlsx as a zip (via built-in `zlib.inflateRawSync`), parsing the shared-string pool and first worksheet, and resolving date-formatted cells through `styles.xml` numFmt lookup. Invoked once per `.xlsx` in Step 2b.
- `20_Project/Expense Tracker/expense-dashboard.html` — historical reference dashboard that `assets/template.html` was derived from. Prefer not to edit, but modify when genuinely necessary (e.g., to keep it in sync with changes to `assets/template.html`).
