// Shared refund-netting logic used by build_report.mjs and verify_aggregates.mjs.
// Single source of truth — any drift between aggregator and verifier means a shared
// bug, not an invariant violation, so the verifier catches drift in its other
// (independent) sum-based invariants rather than in identity checks.
//
// Status-first dedup rules (mirrors template.html netExpenseContribution):
//   - alipay 支出 with 交易关闭 → 0 (money never left)
//   - 支出 with 已全额退款 → 0 (fully refunded)
//   - 支出 with 已退款¥X → max(0, amount − X) (partial)
//   - other 支出 → amount
//   - non-支出 → 0 (income/neutral rows don't contribute to expense)

export const REFUND_AMOUNT_RE = /已退款[¥￥]?\s*\(?([\d,]+(?:\.\d+)?)/;

export function netExpenseOf(t) {
  if (t.direction !== '支出') return 0;
  if (t.source === 'alipay' && t.status === '交易关闭') return 0;
  if (t.status === '已全额退款') return 0;
  const m = REFUND_AMOUNT_RE.exec(t.status || '');
  if (m) {
    const refunded = parseFloat(m[1].replace(/,/g, ''));
    if (!Number.isNaN(refunded)) return Math.max(0, t.amount - refunded);
  }
  return t.amount;
}
