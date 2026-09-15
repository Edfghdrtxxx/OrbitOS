# C: drive triage (Windows-SSD ~300 GB)

Measured ~2026-09-14. Reconciled with locked decisions: Mac has working keys/tokens (destroy Windows copies); abandon local WeChat/QQ; Chrome Sync OK; cloud-first for gaps.

## Volume summary

| Metric | Value |
|--------|-------|
| Label | Windows-SSD |
| Capacity | ~300 GB |
| Used / Free | ~206 / ~94 GB |
| BitLocker | **Unverified** (admin required for `manage-bde`) — BDESVC stopped; treat as possibly unencrypted until checked elevated |

## Where the ~206 GB goes (profile-centric)

| Path | Size | Sale relevance |
|------|------|----------------|
| `AppData` (Local+Roaming+LocalLow) | **~62.6 GB** | Mostly caches/app state; secrets inside — destroy with reset |
| `Documents` | **6.13 GB** | Mixed: QQ ~4.93 GB (abandon) + WPS caches ~0.8 GB + tiny legacy vault |
| `Downloads` | **2.86 GB** | Personal PDFs/m4a/Gemini + installers |
| `.rustup` / `.vscode` / `.cargo` / toolchains | ~7+ GB | Regenerable — abandon |
| `Pictures` (almost all Screenshots) | **1.60 GB** | Uncertain — likely UI junk |
| AI home dirs (`.grok` `.claude` `.codex` `.gemini` `.cursor` …) | ~2–3 GB | Session logs may hold pasted secrets — **destroy** |
| Desktop / Videos / Music / OneDrive | &lt;0.4 GB | Low uniqueness (OneDrive nearly empty) |

### AppData hotspots (not for export — destroy)

**Roaming:** Claude 11.6 GB, kingsoft 6.1, Code 3.3, Cursor 2.4, Tencent 2.3, Trae 1.8, CherryStudio 0.8, clash bak, …

**Local:** Microsoft 5.7, Google/Chrome 3.5, Programs 3.0, Packages 2.4, npm-cache, Steam, **clash-verge-rev 0.4**, TeamViewer, …

## MUST EXPORT from C: (unique / small)

Cloud-friendly; verify Mac/WPS cloud first where noted.

1. **`Downloads` personal set** — 出签信 PDF, `dzfp_*` e-invoices, `个人简历-hzh*.pdf`, `Rednote Housing Search_ March 2026.xlsx`, `Japan_ML_Weekly_Calendar_*.ics`, `Registration-Overseas.docx`, `National Day Itinerary.pdf`, English practice `.m4a`s, `Downloads\Gemini_Chats\` + related `.md`
2. **`Documents\录音\`** — voice memos (if non-empty; tiny)
3. **`Documents\Obsidian Vault\`** (~0.02 GB) — diff vs Mac OrbitOS; only if unique notes remain
4. **WPS local caches** `Documents\WPS Cloud Files` (~0.42 GB) + `WPSDrive` (~0.35 GB) — **prefer verify WPS cloud account on Mac**; export only offline-only files
5. **`Documents\NetSarang Computer\`** (~72 KB) — Xshell session names only useful if Mac SSH config incomplete; optional
6. Open once: home `d4ac….7z` (**295 bytes** — almost certainly junk/empty stub)

## VERIFY ON MAC FIRST

| C: item | Why |
|---------|-----|
| OrbitOS / daily work | Vault lives on D: + GitHub; Mac is primary |
| WPS thesis/CV/forms | Likely already in WPS cloud |
| Chrome bookmarks/passwords | Chrome Sync |
| Resume / Japan calendar | May already be in vault or Mac Downloads |

## DESTROY / LOGOUT (C:) — do not need to keep

Per user: Mac already has keys/tokens.

- `C:\Users\petro\.ssh\`
- `.grok` `.claude` `.codex` `.gemini` `.cursor` `.antigravity` `cliproxyapi` `CursorLogin` + Roaming Claude/Cursor/CherryStudio/agentx/CC Switch
- Clash Verge Local+Roaming profiles (subscription URLs)
- GitHub CLI `hosts.yml`; Credential Manager entries
- `Documents\Tencent Files` (~4.93 GB QQ) — **abandon**
- Roaming Tencent / WeChat remnants on C:
- TeamViewer / ToDesk unbind + local data
- WLAN profiles under `C:\ProgramData\Microsoft\Wlansvc\Profiles` (61 XMLs) — destroyed by full C: reset; forget sensitive SSIDs beforehand if desired
- `C:\temp\*` (GaussDB extracts etc.)

## SAFE TO ABANDON (Reset C: destroys)

- All Program Files installs, game saves under Documents (DSP/Rockstar) unless you still play without Steam Cloud
- `.rustup` `.cargo` `.vscode` npm caches, toolchain dirs
- Screenshots bulk (unless you later decide to keep a zip of last 90 days)
- Empty/near-empty OneDrive starter
- Recycle Bin on C: (~negligible)

## UNCERTAIN (user call)

| Item | Note |
|------|------|
| ~3625 Screenshots (1.6 GB) | Probably disposable |
| Game saves (DSP, Rockstar, Steam Local) | Keep only if Steam Cloud off and you still play |
| Xshell sessions | Optional if Mac SSH incomplete |
| Medical / 膝盖 PDF in Downloads | Personal — export if not elsewhere |

## What C:-only Reset destroys

**Destroyed:** entire Windows user profile on C:, AppData, Program Files on C:, Credential Manager on this OS, browser local profiles on C:.

**NOT destroyed by C:-only reset:** everything on **D:** (Something, OrbitOS, outputs, WSL VHDX, xwechat_files, …). Recovery partition (WINRE ~2 GB) is not a user-data store.

**Recommendation:** After exports verified → format/wipe **D:** → then **Reset this PC → Remove everything**, and if the wizard offers **all drives**, use that. Elevate and check BitLocker before sale; if off, enable Device Encryption or accept lower residual-data assurance.
