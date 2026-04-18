#!/usr/bin/env node
// xlsx_to_csv.mjs — Minimal .xlsx → .csv converter for WeChat Pay bill exports.
// Usage: node xlsx_to_csv.mjs <input.xlsx> <output.csv>
// No npm deps — Node built-ins only (reads xlsx as a zip via manual EOCD/central-dir parse
// and zlib.inflateRawSync, extracts xl/sharedStrings.xml + xl/worksheets/sheet1.xml).
// Only tested against WeChat's "微信支付账单流水" xlsx export; schema assumptions are
// documented where they apply.

import { readFileSync, writeFileSync } from 'node:fs';
import { inflateRawSync } from 'node:zlib';
import { resolve, basename } from 'node:path';

function die(msg, code = 1) {
  process.stderr.write(`error: ${msg}\n`);
  process.exit(code);
}

// ─── Tiny ZIP reader (EOCD → central directory → local file headers) ─────────
// Reads only the members we need by name. Supports deflate (method 8) + store (0).
function readZipMembers(buf, wantedNames) {
  const dv = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
  // Find EOCD signature 0x06054b50 scanning from the end (max 65557 bytes back).
  let eocd = -1;
  for (let i = buf.length - 22; i >= Math.max(0, buf.length - 65557); i--) {
    if (dv.getUint32(i, true) === 0x06054b50) { eocd = i; break; }
  }
  if (eocd < 0) throw new Error('EOCD not found — not a zip file');
  const cdSize = dv.getUint32(eocd + 12, true);
  const cdOffset = dv.getUint32(eocd + 16, true);
  const cdEntries = dv.getUint16(eocd + 10, true);

  const want = new Set(wantedNames);
  const out = {};
  let p = cdOffset;
  for (let i = 0; i < cdEntries; i++) {
    if (dv.getUint32(p, true) !== 0x02014b50) throw new Error('bad central dir signature');
    const compMethod = dv.getUint16(p + 10, true);
    const compSize = dv.getUint32(p + 20, true);
    const uncompSize = dv.getUint32(p + 24, true);
    const nameLen = dv.getUint16(p + 28, true);
    const extraLen = dv.getUint16(p + 30, true);
    const commentLen = dv.getUint16(p + 32, true);
    const localOffset = dv.getUint32(p + 42, true);
    const name = new TextDecoder('utf-8').decode(buf.subarray(p + 46, p + 46 + nameLen));
    p += 46 + nameLen + extraLen + commentLen;
    if (!want.has(name)) continue;

    // Read local file header to skip to data
    if (dv.getUint32(localOffset, true) !== 0x04034b50) throw new Error('bad local header signature');
    const lNameLen = dv.getUint16(localOffset + 26, true);
    const lExtraLen = dv.getUint16(localOffset + 28, true);
    const dataStart = localOffset + 30 + lNameLen + lExtraLen;
    const dataSlice = buf.subarray(dataStart, dataStart + compSize);

    let raw;
    if (compMethod === 0) raw = dataSlice;
    else if (compMethod === 8) raw = inflateRawSync(dataSlice);
    else throw new Error(`unsupported compression method ${compMethod} for ${name}`);
    if (raw.length !== uncompSize && compMethod !== 0) {
      // zlib may produce exact size; tolerate mismatch silently
    }
    out[name] = new TextDecoder('utf-8').decode(raw);
  }
  return out;
}

// ─── XML helpers ─────────────────────────────────────────────────────────────
function decodeXml(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#x([0-9a-fA-F]+);/g, (_, h) => String.fromCodePoint(parseInt(h, 16)))
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(parseInt(d, 10)));
}

function parseSharedStrings(xml) {
  const strings = [];
  const siRegex = /<si[^>]*>([\s\S]*?)<\/si>/g;
  let m;
  while ((m = siRegex.exec(xml))) {
    const content = m[1];
    const parts = [...content.matchAll(/<t(?:\s[^>]*)?>([\s\S]*?)<\/t>/g)];
    strings.push(decodeXml(parts.map(x => x[1]).join('')));
  }
  return strings;
}

// ─── Styles: map cellXf index → numFmt format code; decide if it's a date ─────
// Built-in date/time numFmtIds: 14–22, 45–47. Custom codes containing unquoted
// y/m/d/h/s letters (after stripping quoted literals and bracketed tokens) are
// treated as dates.
const BUILTIN_DATE_FMT_IDS = new Set([14, 15, 16, 17, 18, 19, 20, 21, 22, 45, 46, 47]);

function isDateFormatCode(code) {
  if (!code) return false;
  // Strip quoted literals "..." and '...', escaped chars \x, and [bracketed] locale tokens.
  const stripped = code
    .replace(/"[^"]*"/g, '')
    .replace(/'[^']*'/g, '')
    .replace(/\\./g, '')
    .replace(/\[[^\]]*\]/g, '');
  return /[yYmMdDhHsS]/.test(stripped);
}

function parseStyles(xml) {
  // Map of numFmtId → formatCode from <numFmts>.
  const numFmtMap = {};
  const numFmtsBlock = xml.match(/<numFmts[^>]*>([\s\S]*?)<\/numFmts>/);
  if (numFmtsBlock) {
    const fmtRegex = /<numFmt\s+([^/>]*?)\/?>/g;
    let m;
    while ((m = fmtRegex.exec(numFmtsBlock[1]))) {
      const attrs = m[1];
      const idMatch = attrs.match(/numFmtId="(\d+)"/);
      const codeMatch = attrs.match(/formatCode="([^"]*)"/);
      if (idMatch && codeMatch) numFmtMap[parseInt(idMatch[1], 10)] = decodeXml(codeMatch[1]);
    }
  }
  // cellXfs: array of style-index → numFmtId.
  const isDate = [];
  const cellXfsBlock = xml.match(/<cellXfs[^>]*>([\s\S]*?)<\/cellXfs>/);
  if (cellXfsBlock) {
    const xfRegex = /<xf\s+([^/>]*?)(?:\/>|>[\s\S]*?<\/xf>)/g;
    let m;
    while ((m = xfRegex.exec(cellXfsBlock[1]))) {
      const attrs = m[1];
      const idMatch = attrs.match(/numFmtId="(\d+)"/);
      const id = idMatch ? parseInt(idMatch[1], 10) : 0;
      if (BUILTIN_DATE_FMT_IDS.has(id)) {
        isDate.push(true);
      } else if (numFmtMap[id] && isDateFormatCode(numFmtMap[id])) {
        isDate.push(true);
      } else {
        isDate.push(false);
      }
    }
  }
  return { isDate };
}

// Excel serial date (1900 system, with the 1900-leap-year quirk) → "YYYY-MM-DD HH:MM:SS".
// Uses the serial-25569 offset so the resulting Date's UTC components match the
// wall-clock datetime regardless of host TZ. WeChat exports are local CST already;
// we preserve that as plain wall-clock text.
function excelSerialToDatetimeString(serial) {
  const ms = Math.round((serial - 25569) * 86400 * 1000);
  const d = new Date(ms);
  if (isNaN(d.getTime())) return String(serial);
  const pad = (n) => String(n).padStart(2, '0');
  return `${d.getUTCFullYear()}-${pad(d.getUTCMonth() + 1)}-${pad(d.getUTCDate())} ` +
         `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`;
}

function colLetterToIndex(letters) {
  let n = 0;
  for (const ch of letters) n = n * 26 + (ch.charCodeAt(0) - 64);
  return n - 1;
}

function parseSheet(xml, strings, styles) {
  const isDateStyle = styles?.isDate ?? [];
  const rows = [];
  const rowRegex = /<row[^>]*>([\s\S]*?)<\/row>/g;
  // Cell: either <c r="A1" t="s"><v>N</v></c>, <c r="A1"><v>123</v></c>,
  // or <c r="A1" t="inlineStr"><is><t>...</t></is></c>, or self-closed <c ... />.
  const cellRegex = /<c\s+([^>\/]*?)(?:\/>|>(?:<v>([\s\S]*?)<\/v>|<is>([\s\S]*?)<\/is>)?<\/c>)/g;
  let rm;
  while ((rm = rowRegex.exec(xml))) {
    const row = [];
    let cm;
    cellRegex.lastIndex = 0;
    while ((cm = cellRegex.exec(rm[1]))) {
      const attrs = cm[1];
      const refMatch = attrs.match(/r="([A-Z]+)\d+"/);
      const col = refMatch ? colLetterToIndex(refMatch[1]) : row.length;
      const typeMatch = attrs.match(/t="(\w+)"/);
      const type = typeMatch ? typeMatch[1] : 'n';
      const styleMatch = attrs.match(/s="(\d+)"/);
      const styleIdx = styleMatch ? parseInt(styleMatch[1], 10) : -1;
      let val = '';
      if (cm[2] != null) {
        if (type === 's') {
          val = strings[parseInt(cm[2], 10)] ?? '';
        } else {
          const rawVal = decodeXml(cm[2]);
          // Numeric cell with a date-typed style → convert serial to datetime.
          if ((type === 'n' || type === '') && styleIdx >= 0 && isDateStyle[styleIdx]) {
            const n = Number(rawVal);
            val = Number.isFinite(n) ? excelSerialToDatetimeString(n) : rawVal;
          } else {
            val = rawVal;
          }
        }
      } else if (cm[3] != null) {
        const tMatches = [...cm[3].matchAll(/<t(?:\s[^>]*)?>([\s\S]*?)<\/t>/g)];
        val = decodeXml(tMatches.map(x => x[1]).join(''));
      }
      while (row.length < col) row.push('');
      row.push(val);
    }
    rows.push(row);
  }
  return rows;
}

function csvEscape(s) {
  s = String(s ?? '');
  if (/[",\r\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}

// ─── Main ────────────────────────────────────────────────────────────────────
function main() {
  const argv = process.argv.slice(2);
  if (argv.length < 2) die('usage: node xlsx_to_csv.mjs <input.xlsx> <output.csv>');
  const xlsxPath = resolve(argv[0]);
  const outPath = resolve(argv[1]);

  const buf = readFileSync(xlsxPath);
  const members = readZipMembers(buf, ['xl/sharedStrings.xml', 'xl/worksheets/sheet1.xml', 'xl/styles.xml']);
  if (!members['xl/worksheets/sheet1.xml']) die('xl/worksheets/sheet1.xml missing — not a standard xlsx');

  const strings = members['xl/sharedStrings.xml']
    ? parseSharedStrings(members['xl/sharedStrings.xml'])
    : [];
  const styles = members['xl/styles.xml'] ? parseStyles(members['xl/styles.xml']) : { isDate: [] };
  const rows = parseSheet(members['xl/worksheets/sheet1.xml'], strings, styles);

  // Write CSV with UTF-8 BOM so the parser's readFileSmart() picks the fast path.
  const csv = '\uFEFF' + rows.map(r => r.map(csvEscape).join(',')).join('\n');
  writeFileSync(outPath, csv, 'utf-8');
  process.stdout.write(`✓ ${basename(xlsxPath)} → ${basename(outPath)} · ${rows.length} rows\n`);
}

try {
  main();
} catch (e) {
  die(e.stack || e.message);
}
