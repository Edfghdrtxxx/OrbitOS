---
name: chrome_region_gating_pipeline
description: Diagnostic + fix pipeline for Chrome region-gated features (Gemini in Chrome) failing on this Mac. Read BEFORE re-diagnosing any "X isn't available in your region" Chrome error.
type: pipeline
created: 2026-09-04
incident: 2026-09-03/04 Gemini in Chrome "isn't available" on all profiles
---

# Chrome Region-Gating Diagnosis Pipeline

Use when a Chrome feature fails with a region/availability error on this machine (macOS, Clash proxy at 127.0.0.1:7890, TUN routing, US egress when VPN on).

## Root-cause model (3 independent gates, any one blocks)

| Gate | What it reads | Where it lives |
|---|---|---|
| 1. Session country | `variations_country` | `~/Library/Application Support/Google/Chrome/Local State` |
| 2. App locale | Chrome UI language (inherits macOS; macOS = `en-JP`) | `defaults read com.google.Chrome AppleLanguages` |
| 3. Permanent country | `variations_permanent_overridden_country` pref FIRST, else last seed-fetch country (can be stale `cn` from a VPN-off fetch) | same Local State |

Gemini's client gates (Chromium `glic_enabling.cc`): country filter (default enabled `us,ca`), locale filter (default `en-us` only), plus server-side per-account capability. Error panel never says which gate failed.

## Pipeline (in order)

1. **Read verdict flags** (Chrome running is fine, read-only):
   `Local State` → `profile.info_cache.<Profile>.is_glic_eligible`; per-profile `Preferences` → `glic.profile_enablement.last_ready_state`.
   ReadyState enum (branch-heads/7977): 0 unknown, 1 sign-in required, **2 ready**, 3 ineligible (generic), 4 admin-disabled, **5 location mismatch**, 6 account blocked.
2. **Check Chrome locale**: `defaults read com.google.Chrome AppleLanguages`. Must include `en-US` (already set as persistent override 2026-09-04).
3. **Check country prefs** in Local State: `variations_permanent_overridden_country` (the durable fix, set to `us` 2026-09-04 — highest priority, do not remove), `variations_country`, `variations_safe_seed_session_consistency_country` (a `cn` here means a VPN-off seed fetch happened; harmless while override pref exists).
4. **Fix = quit Chrome first** (it overwrites Local State on exit), patch JSON with python3, relaunch on VPN.
5. **Verify**: relaunch, wait ~30 s, re-read `is_glic_eligible` (per-profile re-evaluation runs when the profile loads — open a window in that profile to trigger it). Live panel check via web-access CDP: find target `chrome://glic/?state=Open` → `document.querySelector("webview")` present + no "isn't available" text = working.
6. **Account-side only if client gates pass but server still rejects**: region via `https://policies.google.com/country-association-form` (NOT `/country-association`, it 404s) in the target account's context; birthday 18+ via myaccount.google.com/personal-info.

## Operational notes

- Edit Local State only with Chrome fully quit (`osascript -e 'quit app "Google Chrome"'`, wait for `pgrep -x "Google Chrome"` to clear).
- CDP: web-access skill proxy on port 3456, Chrome remote debugging on 9222. `/new` creates tabs in the LAST-USED profile's context only; to reach another profile, navigate an existing tab of that profile. `Target.createTarget` with explicit `browserContextId` is rejected by Chrome's debug toggle.
- The `computer` tool lacks Screen Recording TCC — use `screencapture -x` from bash instead. System Events keystrokes need the target app verified frontmost first.
- Full user-facing explanation: `40_Wiki/ComputerScience/Chrome Region Gating.md`.
- Current healthy state (2026-09-04): override pref = `us`, Chrome language = `en-US`, both profiles `is_glic_eligible: true`, hungmau300 (`Default`) profile removed.
