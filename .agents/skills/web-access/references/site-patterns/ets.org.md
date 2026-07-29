---
domain: ets.org
aliases: [ETS, ereg.ets.org, GRE Subject Test]
updated: 2026-07-04
---
## 平台特征
- 营销页（www.ets.org）无登录墙，CDP 可直接读取；页面底部有 OneTrust cookie 横幅（`#onetrust-accept-btn-handler` 点掉以免遮挡）。
- 报名系统为 `ereg.ets.org`（program code：`_p=GRI` = GRE General；testPrep 等公共页同此参数）。

## 有效模式
- **GRE Subject Test 公开考位查询（无需登录）**：`https://www.ets.org/gre/test-takers/subject-tests/schedule.html` 页内 "Ready to schedule?" 三步 widget。(2026-06-10 验证)
  1. 点按钮 `GRE Physics`（button 文本精确匹配）；
  2. `#react-select-location-input` 为 react-select：用原生 value setter + `dispatchEvent(new Event('input',{bubbles:true}))` 输入城市（如 "Beijing"），点出现的 option；
  3. `#react-select-dates-input` 用 `keydown ArrowDown` 打开，option 文本形如 `Sep 2026 - Oct 2026`（提供未来约 6 个月滚动区间）；
  4. 点 "Search Locations"，步骤 3 面板（`#schedule-wizard-section-3`，需 click 展开）渲染日历 + 考点结果；无考位时显示 "We were unable to find any results"。
- 区分"中国无考位"与"全球未开放"：同一日期段换 New York 再查一次作对照。
- **Wizard 状态机（2026-07-04 验证）**：搜索后表单折叠为摘要；改条件用 section-2 内 "Change Selection"（保留已选考试）；无结果面板的 "Change the area and date range" 会**重置 section-1 考试选择**，需重新点考试按钮。结果判读：无结果 alert 可能残留 DOM，须查 `offsetParent!==null` 确认可见；有考位时日历 day button `disabled=false`（无结果时全部 disabled）。location autocomplete 响应约需 2-3s，输入后先等再取 option。
- 公开 widget 与登录态 ereg 购物车库存可能不一致：cart 持有的席位公开搜索可查不到（低库存/被 hold 时"no results"不代表 ereg 内绝对无位）。(2026-07-04)

## 已知陷阱
- `ets.org/pdfs/gre/gre-information-bulletin.pdf` 404（2026-06-10）。
- `/gre/test-takers/subject-tests/register/centers-dates.html` 404；正确页面是 `schedule.html`。
- Subject Test 中国大陆**不支持家考**；报名走 ETS 账户而非 NEEA（NEEA 仅 General）。
