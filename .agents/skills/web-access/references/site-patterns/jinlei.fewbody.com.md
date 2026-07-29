---
domain: jinlei.fewbody.com
aliases: [Jin Lei, 金磊, fewbody, Slidev talks]
updated: 2026-07-04
---
## 平台特征
- Jin Lei（金磊，同济大学物理系）的个人学术站点；`/talks/` 是报告合集索引（静态 HTML，curl 可读）。
- 每个报告位于 `/talks/<name>/`，为 **Slidev** 构建的 SPA（JS 渲染），静态 HTML 只有 <head> 元信息（title/description 含报告摘要）。
- 无需登录，无反爬。Jina (r.jina.ai) 在本网络环境被 401 拒绝，不可用。

## 有效模式
（发现于 2026-07-04）
- **Slidev print 模式全量提取**：访问 `/talks/<name>/?print`，页面渲染出全部幻灯片容器 `.print-slide-container`（本例 65 张）。
- 幻灯片对屏幕隐藏（`body.innerText` 极小），但每个容器的 `innerText` 有完整内容 —— 用 `/eval` 对 `document.querySelectorAll(".print-slide-container, .slidev-page")` 逐个取 `innerText` 即可，无需截图。
- 加载后 `/scroll` 到 bottom 一次再提取，确保懒加载完成。
- 直接 `curl -o file.json` 保存 eval 结果（65 张约 50KB），避免 Bash 输出截断。

## 已知陷阱
- 无 PDF 导出（`slides.pdf` / `export.pdf` 均 404）。
- KaTeX 公式在 innerText 中三重重复（LaTeX 源 + 渲染 + fallback），提取后需清理。
