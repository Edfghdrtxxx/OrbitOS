import { readFileSync, writeFileSync } from 'node:fs';

const templatePath = process.argv[2];
const txPath = process.argv[3];
const enPath = process.argv[4];
const zhPath = process.argv[5];
const outPath = process.argv[6];

let html = readFileSync(templatePath, 'utf-8');
const tx = readFileSync(txPath, 'utf-8');
const en = readFileSync(enPath, 'utf-8');
const zh = readFileSync(zhPath, 'utf-8');

html = html.replace('__PRELOADED_DATA_JSON__', () => tx);
html = html.replace('<!-- __CLAUDE_ANALYSIS_HTML_EN__ -->', () => en);
html = html.replace('<!-- __CLAUDE_ANALYSIS_HTML_ZH__ -->', () => zh);

writeFileSync(outPath, html, 'utf-8');
process.stdout.write(`wrote ${outPath} (${html.length} bytes)\n`);
