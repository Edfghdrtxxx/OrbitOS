import { readFileSync, writeFileSync } from 'node:fs';

const templatePath = 'D:/obsidian/OrbitOS/.agents/skills/expense-tracker/assets/template.html';
const scratch = 'D:/obsidian/OrbitOS/99_System/.scratch/expense-tracker-mocktest';

let tpl = readFileSync(templatePath, 'utf-8');
const txn = readFileSync(scratch + '/out/transactions.json', 'utf-8');
const analysis = readFileSync(scratch + '/analysis.html', 'utf-8');

// Verify seams exist exactly once
const dataSeam = '__PRELOADED_DATA_JSON__';
const analysisSeam = '<!-- __CLAUDE_ANALYSIS_HTML__ -->';
// Data seam appears in two places in template (one in script tag, one in JS guard).
// SKILL says "Replace the literal string __PRELOADED_DATA_JSON__" — but the JS guard uses it as a string value in code.
// Look at template lines 12 (script) and 1648 (guard). We must only replace inside the script tag.

// Precise replacement: only replace the script-tag occurrence.
const scriptPattern = '<script id="preloaded-data" type="application/json">__PRELOADED_DATA_JSON__</script>';
if (!tpl.includes(scriptPattern)) {
  console.error('Could not locate preloaded-data script seam verbatim');
  process.exit(1);
}
tpl = tpl.replace(scriptPattern, '<script id="preloaded-data" type="application/json">' + txn + '</script>');

if (!tpl.includes(analysisSeam)) {
  console.error('Could not locate analysis seam');
  process.exit(1);
}
tpl = tpl.replace(analysisSeam, analysis);

const outPath = scratch + '/mock-report.html';
writeFileSync(outPath, tpl, 'utf-8');
console.log('wrote', outPath, 'size=', tpl.length);
