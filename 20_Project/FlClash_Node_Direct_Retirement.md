---
title: FlClash Node-Direct Retirement
type: project
status: active
area: null
created: 2026-10-22
due:
priority: low
tags:
  - mac
  - network
  - flclash
---
# FlClash Node-Direct Retirement

## Context

**Objective:** Remove the root background job `com.orbitos.flclash-node-direct` once FlClash is shown to run well without it.

**Why the job looks redundant (checked 2026-10-22):**
- The job pins one IP, `104.18.40.202`, to the Wi-Fi router every 30 s (`/Users/leyi/Library/Application Support/orbitos/flclash-node-direct.sh`, LaunchDaemon `/Library/LaunchDaemons/com.orbitos.flclash-node-direct.plist`, both created 2026-10-17 17:24).
- FlClash already excludes the same IP from TUN: `route-exclude-address: 104.18.40.202/32` in `/Users/leyi/Library/Application Support/com.follow.clash/config.yaml`. The routing table carves `.202` out of the `utun4` routes (`104.18.40.200/31`, `104.18.40.203/32`), so `.202` already leaves through `en0`.
- No host route for `104.18.40.202` exists (`netstat -rn -f inet`). The script exits early when the route is already correct, which matches 3125 runs, all exit 0 (`launchctl print system/com.orbitos.flclash-node-direct`).
- The live proxy server is `104.25.245.1` (26 established connections; none to `.202`, `netstat -anp tcp`). It routes through `utun4`, and `curl https://api.github.com` returned 200 in 2.2 s.

**Key Constraints:**
- Remove the job only after the macOS Tahoe 26.7.1 update (scheduled 2026-10-23 01:00) is confirmed working. One change at a time: if the network fails after the restart, the cause must be the update alone.
- The cause of the 2026-10-17 outage after a restart was never written down ([[2026-10-17]] log 16:44 and 17:00; `/Users/Reid Hu/firstmate/data/fm-net-help/report.md`). Keep the FlClash `route-exclude-address` setting; this project removes only the LaunchDaemon and its script.
- Removal needs `sudo`; the user runs it.

**Success Metrics:**
- [x] After the 26.7.1 update and login: FlClash TUN on, `curl -s -o /dev/null -w '%{http_code}\n' --max-time 10 https://api.github.com` prints `200`. (2026-10-25)
- [x] Job removed; the same test prints `200`. (2026-10-25)
- [ ] FlClash runs well without the job → ask the user whether to archive this project.

---

## Actions

### Phase 1: Confirm the macOS update

- [x] Check `/Users/leyi/Library/Logs/orbitos-macos-update.log` and `sw_vers` (expect 26.7.1, build 25G241). (2026-10-25: `sw_vers` 26.7.1, 25G241; the log's last lines say "Failed to queue update and restart", but the install at 01:00:06 on 2026-10-23 completed)
- [x] Run the GitHub test above; check `route -n get 104.18.40.202` → `en0`. (2026-10-25: 200; `en0`)

### Phase 2: Remove the job

- [x] User runs (2026-10-25):
  ```
  sudo launchctl bootout system/com.orbitos.flclash-node-direct && sudo rm /Library/LaunchDaemons/com.orbitos.flclash-node-direct.plist "/Users/leyi/Library/Application Support/orbitos/flclash-node-direct.sh"
  ```
- [x] Confirm `launchctl print system/com.orbitos.flclash-node-direct` reports the service is not found. (2026-10-25: "Could not find service"; both files absent per `ls`)
- [x] Run the GitHub test again. (2026-10-25: 200; `104.18.40.202` still routes through `en0`)

### Phase 3: Observe and close

- [ ] Watch FlClash and overseas access without the job.
- [ ] If FlClash runs well without it, ask the user whether to archive this project (`/archive`).
- [ ] If overseas access breaks, restore the job from the script and plist contents in Notes below, and record what failed.

---

## Progress

- 2026-10-22: [[2026-10-22]] - Project initiated; job found redundant; removal deferred until after the 2026-10-23 01:00 macOS update.
- 2026-10-25: [[2026-10-25]] - Phase 1 passed (macOS 26.7.1, GitHub test 200, `.202` on `en0`); user removed the job; service not found, both files gone, GitHub test 200. Phase 3 (observe) starts.

---

## Related

- [[Chrome Region Gating]] (Clash TUN always-on)
- [[2026-10-17]] (outage after restart; overseas access restored at 17:00 on node AME-CDN-iCook)

---

## Notes

Restore copy of the job (as on disk 2026-10-22).

`/Users/leyi/Library/Application Support/orbitos/flclash-node-direct.sh`:
```bash
#!/bin/bash
# Keep FlClash node entry 104.18.40.202 on the Wi-Fi router, never on TUN.
set -e
NODE="104.18.40.202"
GW="$(/usr/sbin/ipconfig getoption en0 router 2>/dev/null || true)"
if [ -z "$GW" ] || [ "$GW" = "none" ]; then
  exit 0
fi
CUR="$(/sbin/route -n get -host "$NODE" 2>/dev/null | /usr/bin/awk '/gateway:/{print $2; exit}')"
IFACE="$(/sbin/route -n get -host "$NODE" 2>/dev/null | /usr/bin/awk '/interface:/{print $2; exit}')"
if [ "$CUR" = "$GW" ] && [ "$IFACE" = "en0" ]; then
  exit 0
fi
/sbin/route -n delete -host "$NODE" >/dev/null 2>&1 || true
/sbin/route -n add -host "$NODE" "$GW" >/dev/null
```

`/Library/LaunchDaemons/com.orbitos.flclash-node-direct.plist` (owner `root:wheel`, mode 644): Label `com.orbitos.flclash-node-direct`, ProcessType `Background`, ProgramArguments `/bin/bash` + the script above, RunAtLoad `true`, StartInterval `30`.
