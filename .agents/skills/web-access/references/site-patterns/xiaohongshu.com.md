---
domain: xiaohongshu.com
aliases: [小红书, XHS, RED]
updated: 2026-07-03
---
## 平台特征
- 公开笔记/搜索页无需登录即可读取，天然携带用户 Chrome 登录态时更稳。
- 页面为 Vue SPA，`window.__INITIAL_STATE__` 暴露了大量结构化数据，比解析渲染后的 innerText/DOM 更可靠、更省 token：
  - 搜索页：`__INITIAL_STATE__.search.feeds`（可能是 Vue ref，需取 `._rawValue`）—— 数组，每项含 `id`（笔记 id）、顶层 `xsecToken`（笔记级 token，注意不是 `noteCard.user.xsecToken`）、`noteCard.displayTitle`、`noteCard.user.{nickname,userId,xsecToken}`（作者级 token）、`noteCard.interactInfo.likedCount`。
  - 笔记详情页：`__INITIAL_STATE__.note.noteDetailMap[noteId].note` —— 含 `title`、`desc`（正文全文，含话题标签）、`user`、`interactInfo`（点赞/收藏/评论/分享数）、`imageList[].urlDefault`（每张图直链，含多图笔记的全部图片，不需要点击轮播逐张截图）。
  - 用户主页：`__INITIAL_STATE__.user.userPageData`（同样可能需 `._rawValue`）—— `.basicInfo`（昵称/简介/redId/IP属地/性别）、`.interactions`（关注/粉丝/获赞与收藏三项数组）；`__INITIAL_STATE__.user.notes`（`._rawValue` 后是分 tab 的二维数组，`[0]` 是笔记 tab，每项含 `noteCard.displayTitle` 和 `interactInfo.likedCount`，最多约 90 条）。
- 笔记正文中的多图轮播（如"拆解xx账号"类分析笔记）图片是账号方自己截图上传的图片，不是页面 DOM 元素，价格/销量等数字只存在于图片像素里，必须下载图片用视觉方式读取，搜索页 DOM 里没有价格字段（`noteCard` 只有 `displayTitle/user/interactInfo/cover/imageList/cornerTagInfo/type`，无商品/价格字段）。
- 卖家的粉丝量、笔记数在主页可直接拿到；但"已售数量"這类销售数据不会出现在公开主页（没有独立的"店铺"tab 是常态），只能通过第三方"拆解博主"类分析笔记里的截图间接获取（例如笔记里嵌入的创作者后台截图会显示"已售X万+"）。

## 有效模式
- 搜索 URL：`https://www.xiaohongshu.com/search_result?keyword=<urlencoded>&source=web_explore_feed`，跳转后 XHS 会自动把 URL 归一化为 `...&type=51`（综合排序），属正常行为。
- 笔记详情 URL：`https://www.xiaohongshu.com/explore/{noteId}?xsec_token={token}&xsec_source=pc_search`（从笔记页跳转用 `pc_note`，从搜索页跳转用 `pc_search`）。token 必须是该笔记自己的 `xsecToken`（从 `search.feeds[i].xsecToken` 取，不是 `noteCard.user.xsecToken`），且不要对其中的 `=` 做 `%3D` 编码，直接拼接字面 `=` 即可，两种试验中只有字面 `=` 能稳定成功。
- 用户主页 URL：`https://www.xiaohongshu.com/user/profile/{userId}?xsec_token={userXsecToken}&xsec_source=pc_note`（token 用 `noteCard.user.xsecToken` 或笔记详情 `note.user.xsecToken`）。
- 笔记正文图片直链可直接 `curl -o` 下载到本地再用 Read 工具查看，无需在浏览器里逐张截图轮播，公开 CDN 图片无需登录态。
- 同一关键词多次搜索，`search.feeds` 内容会因个性化推荐而变化（非稳定分页），若要引用某条搜索结果里的笔记，必须在同一次 eval 里立即取出 `id` 和 `xsecToken` 并马上使用，不要等后续步骤再回头去"重新找那条笔记"——很可能已经从 feed 里消失。
- "相关搜索"（页面底部的推荐词条）是可靠的搜索需求信号来源，比逐字符模拟输入触发下拉联想词容易获取得多。

## 已知陷阱
- 手动拼出的 `/explore/{noteId}` 若缺少正确 token 或 token 过期/错配，会被重定向到 `/website-login/error?...error_code=300017&error_msg=url is invalid` 或 `/404?...error_code=300031`（"你访问的页面不见了"），这不代表内容真的不存在，几乎总是 token 问题（详见"有效模式"里 token 取值规则）。
- 顶部搜索结果类型切换 tab（全部/图文/视频/用户）在 DOM 里定位困难（多次尝试用 class/文本匹配 leaf 节点均未命中，具体渲染结构不明，可能在特殊定位或经过 SVG/伪元素处理），未找到可靠的 CSS 选择器；`type=51/54` 等 URL 参数手工拼接会被自动纠正回 51（综合），不能用来筛选"用户"结果。若确实需要按用户类型过滤，建议用真实鼠标点击（GUI 交互）代替程序化 URL 构造，且需先用 /screenshot 找到 tab 的实际像素坐标。
- 直接 `fetch()` 小红书内部 API（如 `/api/sns/web/v1/search/recommend`）会因缺少签名头（x-s/x-t 等风控参数）被拒绝，返回形如 `"create inv..."` 的非 JSON 错误文本；不要绕过前端直接打内部 API，改用 `__INITIAL_STATE__` 或走真实 UI 交互触发前端自带的签名请求。
- 以编程方式对 contenteditable/textarea 搜索框 setter 赋值中文字符串（模拟打字触发自动补全下拉）不可靠：赋值后搜索框视觉上显示乱码"??"，且 `search.suggestions` 状态始终为空数组，怀疑该输入框依赖真实 IME composition 事件链，仅 dispatch `input`/`compositionend`/`keydown` 事件不足以触发。如需拿到搜索框下拉联想词，建议改用真实键盘输入（如 claude-in-chrome 的 computer 工具逐字符打字）而非本 skill 的 CDP `/eval` 值注入。
