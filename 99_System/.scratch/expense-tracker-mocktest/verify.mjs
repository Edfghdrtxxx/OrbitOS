import { readFileSync } from 'node:fs';

const html = readFileSync('D:/obsidian/OrbitOS/99_System/.scratch/expense-tracker-mocktest/mock-report.html', 'utf-8');

// Extract preloaded-data script block
const m = html.match(/<script id="preloaded-data" type="application\/json">([\s\S]*?)<\/script>/);
if (!m) { console.error('FAIL: no preloaded-data script'); process.exit(1); }

const payload = JSON.parse(m[1]);
console.log('parsed OK, transactions.length =', payload.transactions.length);
console.log('files entries:', payload.files.length);

const allHaveDate = payload.transactions.every(t => typeof t.date === 'string' && !isNaN(new Date(t.date)));
console.log('all transactions have valid date:', allHaveDate);

// Check theme attribute
console.log('default theme:', /data-theme="dark"/.test(html) ? 'dark' : 'missing');

// Check I18N keys
console.log('I18N present:', /const I18N = \{/.test(html));
console.log('I18N has en:', /I18N = \{[\s\S]*?en:\s*\{/.test(html));
console.log('I18N has zh:', /\bzh:\s*\{/.test(html));

// Check analysis injection artifacts
console.log('analysis prose present:', /Spending across the two-week window/.test(html));
console.log('top-cats table present:', /餐饮美食.*402\.10/.test(html));
console.log('top-cp table present:', /海底捞.*256\.00/.test(html));

// Strict seam checks
console.log('html-comment analysis seam gone:', !html.includes('<!-- __CLAUDE_ANALYSIS_HTML__ -->'));
console.log('raw data seam inside script-block gone:', !/<script id="preloaded-data"[^>]*>__PRELOADED_DATA_JSON__</.test(html));
