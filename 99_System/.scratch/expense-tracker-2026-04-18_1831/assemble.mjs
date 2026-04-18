#!/usr/bin/env node
// Raw-byte string replacement of three seams in template.html.
// Never parses transactions.json — injects it opaquely.
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const scratch = resolve(process.argv[2]);
const templatePath = resolve(process.argv[3]);
const outPath = resolve(process.argv[4]);

const tpl = readFileSync(templatePath, 'utf-8');
const txnJson = readFileSync(`${scratch}/transactions.json`, 'utf-8');
const en = readFileSync(`${scratch}/analysis-en.html`, 'utf-8');
const zh = readFileSync(`${scratch}/analysis-zh.html`, 'utf-8');

const seams = ['__PRELOADED_DATA_JSON__', '<!-- __CLAUDE_ANALYSIS_HTML_EN__ -->', '<!-- __CLAUDE_ANALYSIS_HTML_ZH__ -->'];
for (const s of seams) {
  if (!tpl.includes(s)) { process.stderr.write(`missing seam: ${s}\n`); process.exit(1); }
}

let out = tpl;
out = out.replace('__PRELOADED_DATA_JSON__', () => txnJson);
out = out.replace('<!-- __CLAUDE_ANALYSIS_HTML_EN__ -->', () => en);
out = out.replace('<!-- __CLAUDE_ANALYSIS_HTML_ZH__ -->', () => zh);

writeFileSync(outPath, out, 'utf-8');
process.stdout.write(`✓ wrote ${outPath} (${out.length} bytes)\n`);
