---
title: yichen-skills
type: project
status: active
area: null
created: 2026-09-10
priority: P3
tags: [project, wechat, skills]
path: 20_Project/yichen-skills
repo: https://github.com/mcncarl/yichen-skills
---
# yichen-skills

Local fork of [mcncarl/yichen-skills](https://github.com/mcncarl/yichen-skills). Nested git stays in the clone so history survives a GitHub 404. OrbitOS tracks only this pointer; the clone is gitignored.

## Context

**Objective:** Keep a usable local copy of 逸尘's skill pack, especially `yichen-wechat-local-vault` (Mac WeChat 4.x chats / contacts / Moments / favorites, local decrypt, read-only).

**Success Metrics:**
- [x] Full clone with history on disk
- [ ] Clone still bootable if GitHub goes 404
- [ ] WeChat plaintext vault never lands in this repo or in OrbitOS git

**Key Constraints:**
- License: personal / non-commercial only (author WeChat `yichen365ai`)
- Remote on the clone is `upstream`, not `origin`
- Decrypted WeChat DBs stay in a private vault outside the project directory
- Do not sync, share, or copy plaintext chat data into OrbitOS

**Clone:**
- Path: `20_Project/yichen-skills/` (vault-relative)
- HEAD at clone time: `fc575e5` on `main` (2026-09-05, 52 commits, ~5.4M)
- WeChat skill: `20_Project/yichen-skills/yichen-wechat-local-vault/`

## Actions

- [ ] If upstream is still live and a useful commit landed, `git -C "20_Project/yichen-skills" fetch upstream` then merge/rebase `main`
- [ ] If GitHub 404s, treat this clone as the source of truth; do not delete `.git`
- [ ] When using the WeChat vault, keep keys + plaintext DBs in a private local path, never under `20_Project/yichen-skills/` or any tracked OrbitOS folder

## Progress

- 2026-09-10: [[2026-09-10]] — Cloned `https://github.com/mcncarl/yichen-skills.git` to `20_Project/yichen-skills/` with remote `upstream`. Folder gitignored; this note is the OrbitOS pointer.

## Related

- Upstream: [mcncarl/yichen-skills](https://github.com/mcncarl/yichen-skills)
- WeChat vault README: `20_Project/yichen-skills/yichen-wechat-local-vault/README.md`
