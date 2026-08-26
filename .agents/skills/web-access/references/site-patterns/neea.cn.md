---
domain: neea.cn
aliases: [NEEA, 教育部教育考试院, gre.neea.cn, gre-main.neea.cn, toefl.neea.cn]
updated: 2026-08-20
---
## 平台特征
- `gre-main.neea.cn`：静态门户（介绍/动态/报名入口），内容仅覆盖 GRE **普通考试（General Test）**；"考试动态" 最新条目停留在 2021 年。无反爬，curl/CDP 均可直接读取。(2026-06-10)
- `gre.neea.cn`：实际报名系统（公网入口；教育网为 gre.neea.edu.cn）。`/login.do` 登录页**未登录即可见"重要通知"列表**——年度考位批量开放公告挂在这里。Chrome 日常会话不携带登录态（每次需 NEEA ID + 密码 + 验证码）。(2026-06-10)
- 年度批量开放模式：如 "2026年GRE报名有关安排"（2025-11-21 发布，news.neea.cn）一次性开放全年 31 场 General 考试考位。

## 有效模式
- 公告正文 URL 形如 `https://news.neea.cn/GRE/1/GRE_<hash>.html` 或 `news.neea.edu.cn/GRE/1/newsNN.htm`，直接 navigate + innerText 提取即可。
- 登录页 `https://gre.neea.cn/login.do` 是获取最新公告的最快入口（比 gre-main 门户新得多）。
- `toefl.neea.cn`：托福网考报名门户，无登录墙即可读政策页。转考/退考/费用条文在静态页，不需 NEEA 登录。(2026-08-20)

## 有效模式（TOEFL）
- 报名流程（含转考/退考规则）：`https://toefl.neea.cn/process_cn.html`
- 收费标准：`https://toefl.neea.cn/fees_cn.html`（转考费 620 元，2026-08-20 页面）
- 考生须知：`https://toefl.neea.cn/information_cn.html`
- 常见问题：`https://toefl.neea.cn/faq_cn.html`
- 空位释放：FAQ 写明每周二至周六上午 10:00 释放退考空位。(2026-08-20)

## 已知陷阱
- **NEEA 不承办 GRE Subject Test**（2026-06-10 验证：门户介绍、FAQ、全部公告均无 Subject 内容）。Subject Test（含中国大陆考点）通过 ETS 账户在 `ereg.ets.org` 报名。勿在 NEEA 找 Subject 考位。
