#!/usr/bin/env node
// Consistency check for build_report.mjs outputs.
// Reads transactions.json + aggregates.json from <scratch-dir>, re-derives
// daily_timeline[].expense_net via the SHARED netExpenseOf (./refunds.mjs),
// and asserts:
//   1. Identity — per-day expense_net matches aggregates (catches tz drift,
//      bucket-key drift, accumulator-order bugs; shared refund logic means
//      a refund-rule bug would miss here but show up as an unexpected
//      totals shift that a human spot-check would catch).
//   2. sum(daily_timeline.expense) ≈ totals.gross_expense — independent
//      invariant catching any accumulation bug that the identity check can't.
//   3. sum(daily_timeline.income)  ≈ totals.gross_income  — same idea.
//
// Usage: node verify_aggregates.mjs <scratch-dir>
// Exit 0 on success, 1 on drift. Prints up to 5 diverging rows per check.

import { readFileSync } from 'node:fs';
import { resolve, join } from 'node:path';
import { netExpenseOf } from './refunds.mjs';

const r2 = n => Math.round(n * 100) / 100;
const approxEq = (a, b, eps = 0.01) => Math.abs(a - b) < eps;

function tzDateKey(d, tz) {
  return new Intl.DateTimeFormat('sv-SE', {
    timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit',
  }).format(d);
}

function main() {
  const scratchArg = process.argv[2];
  if (!scratchArg) {
    process.stderr.write('usage: node verify_aggregates.mjs <scratch-dir>\n');
    process.exit(2);
  }
  const scratchDir = resolve(scratchArg);
  const aggregates = JSON.parse(readFileSync(join(scratchDir, 'aggregates.json'), 'utf-8'));
  const payload = JSON.parse(readFileSync(join(scratchDir, 'transactions.json'), 'utf-8'));
  const txns = payload.transactions.map(t => ({ ...t, date: new Date(t.date) }));

  const tz = aggregates.tz || 'Asia/Shanghai';
  const errors = [];

  // Check 1 — identity on expense_net via shared refund logic
  const rebuilt = new Map();
  for (const t of txns) {
    if (t.direction === '不计收支') continue;
    const k = tzDateKey(t.date, tz);
    const e = rebuilt.get(k) || { expense_net: 0 };
    if (t.direction === '支出') e.expense_net += netExpenseOf(t);
    rebuilt.set(k, e);
  }
  const mismatches = [];
  for (const row of aggregates.daily_timeline) {
    const want = r2((rebuilt.get(row.date) || { expense_net: 0 }).expense_net);
    if (!approxEq(row.expense_net, want)) {
      mismatches.push(`    ${row.date}: aggregates=${row.expense_net} rebuilt=${want}`);
    }
  }
  if (mismatches.length > 0) {
    errors.push(
      `daily_timeline.expense_net: ${mismatches.length} row(s) diverge\n` +
      mismatches.slice(0, 5).join('\n')
    );
  }

  // Check 2 — sum(timeline.expense) == totals.gross_expense
  const sumTimelineExpense = r2(aggregates.daily_timeline.reduce((s, r) => s + r.expense, 0));
  if (!approxEq(sumTimelineExpense, aggregates.totals.gross_expense)) {
    errors.push(
      `sum(daily_timeline.expense)=${sumTimelineExpense} != totals.gross_expense=${aggregates.totals.gross_expense}`
    );
  }

  // Check 3 — sum(timeline.income) == totals.gross_income
  const sumTimelineIncome = r2(aggregates.daily_timeline.reduce((s, r) => s + r.income, 0));
  if (!approxEq(sumTimelineIncome, aggregates.totals.gross_income)) {
    errors.push(
      `sum(daily_timeline.income)=${sumTimelineIncome} != totals.gross_income=${aggregates.totals.gross_income}`
    );
  }

  if (errors.length > 0) {
    process.stderr.write('✗ verify_aggregates: drift detected\n');
    for (const e of errors) process.stderr.write(`  ${e}\n`);
    process.exit(1);
  }
  process.stdout.write(`✓ verify_aggregates: ${aggregates.daily_timeline.length} days · tz=${tz}\n`);
  process.stdout.write(`  sum(expense)=${sumTimelineExpense} · gross_expense=${aggregates.totals.gross_expense}\n`);
  process.stdout.write(`  sum(income)=${sumTimelineIncome} · gross_income=${aggregates.totals.gross_income}\n`);
}

try { main(); }
catch (e) { process.stderr.write(`fatal: ${e.stack || e.message}\n`); process.exit(1); }
