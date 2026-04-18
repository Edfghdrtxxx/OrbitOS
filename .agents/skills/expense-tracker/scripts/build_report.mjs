#!/usr/bin/env node
// build_report.mjs — Alipay + WeChat CSV bill aggregator.
// Reads CSVs from <csv-folder>, emits transactions.json + aggregates.json into <output-dir>.
// Ported from expense-dashboard.html (browser-side logic) to Node 22+ ES modules.
// No npm dependencies — Node built-ins only.

import { readFileSync, readdirSync, writeFileSync, mkdirSync, statSync } from 'node:fs';
import { resolve, join, basename, extname } from 'node:path';

// ═════════════════════════════════════════════════════════════════════
// CSV decoding: UTF-8 BOM → strict UTF-8 → GB18030 fallback.
// Port of readFileSmart() from expense-dashboard.html.
// Note: Node ≥22 bundles ICU full by default, so TextDecoder supports 'gb18030'.
// ═════════════════════════════════════════════════════════════════════
function readFileSmart(filePath) {
  const buf = readFileSync(filePath);
  const bytes = new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength);
  if (bytes[0] === 0xEF && bytes[1] === 0xBB && bytes[2] === 0xBF) {
    return { text: new TextDecoder('utf-8').decode(buf), encoding: 'utf-8-bom' };
  }
  try {
    const txt = new TextDecoder('utf-8', { fatal: true }).decode(buf);
    return { text: txt, encoding: 'utf-8' };
  } catch (_) {
    try {
      const txt = new TextDecoder('gb18030').decode(buf);
      return { text: txt, encoding: 'gb18030' };
    } catch (e) {
      throw new Error(`Cannot decode ${basename(filePath)}: ${e.message}`);
    }
  }
}

// ═════════════════════════════════════════════════════════════════════
// Format detection — port of detectFormat().
// ═════════════════════════════════════════════════════════════════════
function detectFormat(text) {
  const head = text.slice(0, 2000);
  if (head.includes('支付宝') || head.includes('Alipay')) return 'alipay';
  if (head.includes('微信支付') || head.includes('微信账单')) return 'wechat';
  if (head.includes('交易分类') && head.includes('收/付款方式')) return 'alipay';
  if (head.includes('交易类型') && head.includes('支付方式')) return 'wechat';
  return null;
}

// ═════════════════════════════════════════════════════════════════════
// Find the header row index — port of findDataStart().
// ═════════════════════════════════════════════════════════════════════
function findDataStart(lines, format) {
  const sig = format === 'alipay'
    ? ['交易时间', '交易分类', '金额']
    : ['交易时间', '交易类型', '金额'];
  for (let i = 0; i < lines.length && i < 50; i++) {
    const L = lines[i];
    if (sig.every(s => L.includes(s))) return i;
  }
  return -1;
}

// ═════════════════════════════════════════════════════════════════════
// Minimal CSV parser: state machine handling quoted fields, embedded commas,
// newlines inside quotes, escaped "" quotes, CRLF line endings.
// Replaces PapaParse for this codepath — sufficient for Alipay / WeChat exports.
// ═════════════════════════════════════════════════════════════════════
function parseCSV(text) {
  const rows = [];
  let field = '';
  let row = [];
  let inQuotes = false;
  let i = 0;
  const n = text.length;

  while (i < n) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (i + 1 < n && text[i + 1] === '"') {
          // Escaped quote
          field += '"';
          i += 2;
          continue;
        }
        inQuotes = false;
        i++;
        continue;
      }
      field += c;
      i++;
      continue;
    }
    // Not in quotes
    if (c === '"') {
      inQuotes = true;
      i++;
      continue;
    }
    if (c === ',') {
      row.push(field);
      field = '';
      i++;
      continue;
    }
    if (c === '\r') {
      // Swallow CR; if followed by LF, treat as one line end
      if (i + 1 < n && text[i + 1] === '\n') i++;
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
      i++;
      continue;
    }
    if (c === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
      i++;
      continue;
    }
    field += c;
    i++;
  }
  // Flush final field/row if non-empty
  if (field.length > 0 || row.length > 0) {
    row.push(field);
    rows.push(row);
  }
  // Drop trailing empty lines (row of single empty field)
  while (rows.length > 0) {
    const last = rows[rows.length - 1];
    if (last.length === 1 && last[0] === '') rows.pop();
    else break;
  }
  return rows;
}

// Turn a 2D array (first row = header) into [{header: value}, ...].
// Mirrors PapaParse's `{header: true, skipEmptyLines: 'greedy', transformHeader: h => h.trim()}`.
function rowsToObjects(rows) {
  if (rows.length === 0) return [];
  const headers = rows[0].map(h => String(h).trim());
  const out = [];
  for (let r = 1; r < rows.length; r++) {
    const row = rows[r];
    // "greedy" skip: drop rows that are entirely empty/whitespace
    const allEmpty = row.every(v => v == null || String(v).trim() === '');
    if (allEmpty) continue;
    const obj = {};
    for (let c = 0; c < headers.length; c++) {
      obj[headers[c]] = row[c] ?? '';
    }
    out.push(obj);
  }
  return out;
}

// ═════════════════════════════════════════════════════════════════════
// Normalizers — port of parseAmount/parseDate/cleanString/normalizeAlipay/normalizeWechat.
// ═════════════════════════════════════════════════════════════════════
function parseAmount(s) {
  if (s == null) return 0;
  const cleaned = String(s).replace(/[¥￥,\s]/g, '').trim();
  const n = parseFloat(cleaned);
  return isFinite(n) ? n : 0;
}

function parseDate(s) {
  if (!s) return null;
  const t = String(s).trim();
  const iso = t.replace(/\//g, '-').replace(' ', 'T');
  const d = new Date(iso);
  return isNaN(d) ? null : d;
}

function cleanString(s) {
  if (s == null) return '';
  return String(s).replace(/^["'\s]+|["'\s]+$/g, '').trim();
}

function normalizeAlipay(row) {
  return {
    date: parseDate(row['交易时间']),
    source: 'alipay',
    category: cleanString(row['交易分类']) || '未分类',
    counterparty: cleanString(row['交易对方']) || '—',
    description: cleanString(row['商品说明']) || '',
    direction: cleanString(row['收/支']) || '不计收支',
    amount: parseAmount(row['金额']),
    method: cleanString(row['收/付款方式']) || '—',
    status: cleanString(row['交易状态']) || '',
    order_id: cleanString(row['交易订单号']) || '',
    note: cleanString(row['备注']) || '',
  };
}

function normalizeWechat(row) {
  return {
    date: parseDate(row['交易时间']),
    source: 'wechat',
    category: cleanString(row['交易类型']) || '未分类',
    counterparty: cleanString(row['交易对方']) || '—',
    description: cleanString(row['商品']) || '',
    direction: cleanString(row['收/支']) || '不计收支',
    amount: parseAmount(row['金额(元)']) || parseAmount(row['金额']),
    method: cleanString(row['支付方式']) || '—',
    status: cleanString(row['当前状态']) || '',
    order_id: cleanString(row['交易单号']) || '',
    note: cleanString(row['备注']) || '',
  };
}

// ═════════════════════════════════════════════════════════════════════
// File processing — port of processFile().
// ═════════════════════════════════════════════════════════════════════
function processFile(filePath) {
  const { text, encoding } = readFileSmart(filePath);
  const format = detectFormat(text);
  if (!format) throw new Error(`Unknown format: ${basename(filePath)}. Not recognized as Alipay or WeChat CSV.`);

  const lines = text.split(/\r?\n/);
  const dataStart = findDataStart(lines, format);
  if (dataStart < 0) throw new Error(`Cannot find header row in ${basename(filePath)}`);

  const csvBody = lines.slice(dataStart).join('\n');
  const rows = parseCSV(csvBody);
  const objects = rowsToObjects(rows);

  const normFn = format === 'alipay' ? normalizeAlipay : normalizeWechat;
  const records = objects
    .map(normFn)
    .filter(r => r.date && r.amount > 0);

  return { records, format, encoding, count: records.length, name: basename(filePath) };
}

// ═════════════════════════════════════════════════════════════════════
// Rounding helper: Math.round(n*100)/100 per spec.
// ═════════════════════════════════════════════════════════════════════
const r2 = n => Math.round(n * 100) / 100;

// YYYY-MM-DD in local time (matches the browser fmtDate semantics, but the
// browser used toISOString() which is UTC. For aggregation we use local dates
// so day-of-week and daily buckets line up with the user's wall clock —
// transaction records serialize as ISO UTC unchanged.)
function localDateKey(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

// ═════════════════════════════════════════════════════════════════════
// Aggregation — builds the locked aggregates.json shape.
// ═════════════════════════════════════════════════════════════════════
function buildAggregates(allTransactions) {
  const total_txn_count = allTransactions.length;
  // Exclude neutral transfers for all aggregates except totals.txn_count
  const txns = allTransactions.filter(t => t.direction !== '不计收支');

  const expenses = txns.filter(t => t.direction === '支出');
  const incomes = txns.filter(t => t.direction === '收入');

  const gross_expense = expenses.reduce((s, t) => s + t.amount, 0);
  const gross_income = incomes.reduce((s, t) => s + t.amount, 0);
  const net_expense = gross_expense - gross_income;

  // Period: min/max over non-neutral transactions
  let startDate = null;
  let endDate = null;
  for (const t of txns) {
    if (!startDate || t.date < startDate) startDate = t.date;
    if (!endDate || t.date > endDate) endDate = t.date;
  }

  let period_start = '';
  let period_end = '';
  let days = 0;
  if (startDate && endDate) {
    period_start = localDateKey(startDate);
    period_end = localDateKey(endDate);
    // Days inclusive — count calendar days in the timeline
    const startMs = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate()).getTime();
    const endMs = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()).getTime();
    days = Math.round((endMs - startMs) / 86400000) + 1;
  }

  // By source
  const by_source = {
    alipay: { expense: 0, count: 0 },
    wechat: { expense: 0, count: 0 },
  };
  for (const t of expenses) {
    if (by_source[t.source]) {
      by_source[t.source].expense += t.amount;
      by_source[t.source].count += 1;
    }
  }
  by_source.alipay.expense = r2(by_source.alipay.expense);
  by_source.wechat.expense = r2(by_source.wechat.expense);

  // Top categories (expense only), top 10
  const catMap = new Map();
  for (const t of expenses) {
    const k = t.category;
    const e = catMap.get(k) || { amount: 0, count: 0 };
    e.amount += t.amount;
    e.count += 1;
    catMap.set(k, e);
  }
  const top_categories = [...catMap.entries()]
    .sort((a, b) => b[1].amount - a[1].amount)
    .slice(0, 10)
    .map(([name, v]) => ({
      name,
      amount: r2(v.amount),
      count: v.count,
      share: gross_expense > 0 ? Math.round((v.amount / gross_expense) * 10000) / 10000 : 0,
    }));

  // Top counterparties (expense only), top 10
  const cpMap = new Map();
  for (const t of expenses) {
    const k = t.counterparty;
    const e = cpMap.get(k) || { amount: 0, count: 0 };
    e.amount += t.amount;
    e.count += 1;
    cpMap.set(k, e);
  }
  const top_counterparties = [...cpMap.entries()]
    .sort((a, b) => b[1].amount - a[1].amount)
    .slice(0, 10)
    .map(([name, v]) => ({ name, amount: r2(v.amount), count: v.count }));

  // Day of week — 7 entries, 0=Sun..6=Sat, expense only
  const dowLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const dowSum = [0, 0, 0, 0, 0, 0, 0];
  for (const t of expenses) {
    dowSum[t.date.getDay()] += t.amount;
  }
  const day_of_week = dowLabels.map((label, dow) => ({
    dow,
    label,
    expense: r2(dowSum[dow]),
  }));

  // Weekday vs weekend daily averages
  // weekday_daily_avg = sum(expense Mon–Fri) / (count of unique Mon–Fri dates in the period)
  // The "period" here = every calendar day from startDate..endDate inclusive.
  const weekdayExpenseSum = [1, 2, 3, 4, 5].reduce((s, d) => s + dowSum[d], 0);
  const weekendExpenseSum = [0, 6].reduce((s, d) => s + dowSum[d], 0);

  let uniqueWeekdayDates = 0;
  let uniqueWeekendDates = 0;
  if (startDate && endDate) {
    const cur = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const stopMs = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()).getTime();
    while (cur.getTime() <= stopMs) {
      const d = cur.getDay();
      if (d === 0 || d === 6) uniqueWeekendDates++;
      else uniqueWeekdayDates++;
      cur.setDate(cur.getDate() + 1);
    }
  }

  const weekday_vs_weekend = {
    weekday_daily_avg: uniqueWeekdayDates > 0 ? r2(weekdayExpenseSum / uniqueWeekdayDates) : 0,
    weekend_daily_avg: uniqueWeekendDates > 0 ? r2(weekendExpenseSum / uniqueWeekendDates) : 0,
  };

  // Daily timeline — one entry per calendar date in the period, including zero days
  const dailyMap = new Map();
  for (const t of txns) {
    const k = localDateKey(t.date);
    const e = dailyMap.get(k) || { expense: 0, income: 0 };
    if (t.direction === '支出') e.expense += t.amount;
    else if (t.direction === '收入') e.income += t.amount;
    dailyMap.set(k, e);
  }
  const daily_timeline = [];
  if (startDate && endDate) {
    const cur = new Date(startDate.getFullYear(), startDate.getMonth(), startDate.getDate());
    const stopMs = new Date(endDate.getFullYear(), endDate.getMonth(), endDate.getDate()).getTime();
    while (cur.getTime() <= stopMs) {
      const k = localDateKey(cur);
      const e = dailyMap.get(k) || { expense: 0, income: 0 };
      daily_timeline.push({ date: k, expense: r2(e.expense), income: r2(e.income) });
      cur.setDate(cur.getDate() + 1);
    }
  }

  return {
    period: { start: period_start, end: period_end, days },
    totals: {
      gross_expense: r2(gross_expense),
      gross_income: r2(gross_income),
      net_expense: r2(net_expense),
      txn_count: total_txn_count,
    },
    by_source,
    top_categories,
    top_counterparties,
    day_of_week,
    weekday_vs_weekend,
    daily_timeline,
  };
}

// ═════════════════════════════════════════════════════════════════════
// Main
// ═════════════════════════════════════════════════════════════════════
function die(msg, code = 1) {
  process.stderr.write(`error: ${msg}\n`);
  process.exit(code);
}

function main() {
  const argv = process.argv.slice(2);
  if (argv.length < 2) {
    die('usage: node build_report.mjs <csv-folder> <output-dir>');
  }
  const csvFolder = resolve(argv[0]);
  const outDir = resolve(argv[1]);

  let folderStat;
  try {
    folderStat = statSync(csvFolder);
  } catch (_) {
    die(`csv folder not found: ${csvFolder}`);
  }
  if (!folderStat.isDirectory()) {
    die(`not a directory: ${csvFolder}`);
  }

  // Discover .csv files (non-recursive, case-insensitive)
  let entries;
  try {
    entries = readdirSync(csvFolder, { withFileTypes: true });
  } catch (e) {
    die(`cannot read csv folder: ${e.message}`);
  }
  const csvFiles = entries
    .filter(d => d.isFile() && extname(d.name).toLowerCase() === '.csv')
    .map(d => join(csvFolder, d.name))
    .sort();

  if (csvFiles.length === 0) {
    die(`no .csv files found in ${csvFolder}`);
  }

  // Create output dir if needed
  try {
    mkdirSync(outDir, { recursive: true });
  } catch (e) {
    die(`cannot create output dir: ${e.message}`);
  }

  const allRecords = [];
  const fileInfos = [];
  let anyOk = false;

  for (const fp of csvFiles) {
    try {
      const r = processFile(fp);
      fileInfos.push({ name: r.name, source: r.format, count: r.count, encoding: r.encoding, ok: true });
      allRecords.push(...r.records);
      process.stdout.write(`✓ ${r.format} · ${r.name} · ${r.count} rows · ${r.encoding}\n`);
      anyOk = true;
    } catch (err) {
      fileInfos.push({ name: basename(fp), source: null, count: 0, encoding: null, ok: false, error: err.message });
      process.stderr.write(`✗ ${basename(fp)} — ${err.message}\n`);
    }
  }

  if (!anyOk) {
    die('no files parsed successfully');
  }

  // Dedup — port of handleFiles() dedup logic.
  const seen = new Set();
  const deduped = [];
  for (const t of allRecords) {
    const k = `${t.source}|${t.order_id}|${t.date?.toISOString()}|${t.amount}`;
    if (seen.has(k)) continue;
    seen.add(k);
    deduped.push(t);
  }

  if (deduped.length === 0) {
    die('all rows filtered out after dedup');
  }

  // Sort desc by date (matches browser behavior)
  deduped.sort((a, b) => b.date - a.date);

  // Build aggregates (uses deduped set)
  const aggregates = buildAggregates(deduped);

  // Build transactions.json payload — date serialized as ISO string
  const transactionsPayload = {
    transactions: deduped.map(t => ({
      date: t.date.toISOString(),
      source: t.source,
      category: t.category,
      counterparty: t.counterparty,
      description: t.description,
      direction: t.direction,
      amount: r2(t.amount),
      method: t.method,
      status: t.status,
      order_id: t.order_id,
      note: t.note,
    })),
    files: fileInfos,
  };

  try {
    writeFileSync(join(outDir, 'transactions.json'), JSON.stringify(transactionsPayload, null, 2), 'utf-8');
    writeFileSync(join(outDir, 'aggregates.json'), JSON.stringify(aggregates, null, 2), 'utf-8');
  } catch (e) {
    die(`cannot write output: ${e.message}`);
  }

  process.stdout.write(`${deduped.length} transactions written\n`);
}

try {
  main();
} catch (e) {
  process.stderr.write(`fatal: ${e.stack || e.message}\n`);
  process.exit(1);
}
