import { readFileSync, writeFileSync } from 'node:fs';

const [, , tplPath, txPath, enPath, zhPath, outPath] = process.argv;
let html = readFileSync(tplPath, 'utf8');
const tx = readFileSync(txPath, 'utf8');
const en = readFileSync(enPath, 'utf8');
const zh = readFileSync(zhPath, 'utf8');

function replaceOnce(hay, needle, rep, label) {
  const i = hay.indexOf(needle);
  if (i < 0) throw new Error(`Seam missing: ${label}`);
  return hay.slice(0, i) + rep + hay.slice(i + needle.length);
}

html = replaceOnce(html, '__PRELOADED_DATA_JSON__', tx, 'data');
html = replaceOnce(html, '<!-- __CLAUDE_ANALYSIS_HTML_EN__ -->', en, 'en');
html = replaceOnce(html, '<!-- __CLAUDE_ANALYSIS_HTML_ZH__ -->', zh, 'zh');

writeFileSync(outPath, html);
console.log(`wrote ${outPath} (${html.length} bytes)`);
