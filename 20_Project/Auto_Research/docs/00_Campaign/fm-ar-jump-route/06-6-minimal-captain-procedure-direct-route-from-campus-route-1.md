<!-- Verbatim source section; overview: [[../fm-ar-jump-route]] -->
<!-- SOURCE-BODY-START -->
## 6. Minimal captain procedure — direct route from campus (route #1)

**When to run:** next time the Mac (or any laptop) is on the institute internal network — campus LAN, IMP-Wireless, or the dorm wired net that worked on Sep 20. ~5 minutes.

### Step 1 — Verify you can reach `.64` (10 s)

```bash
nc -vz -G 8 172.17.116.64 22
```

- **Expected if the internal net is up:** `Connection to 172.17.116.64 port 22 [tcp/ssh] succeeded!`
- **If it times out:** either you're not on the internal net, or `.64` itself is down. Try `nc -vz -G 8 172.17.116.65 22` (the sibling server):
  - `.65` answers but `.64` doesn't → `.64` is down → ask the admin to restart `nagws1`.
  - Both fail → you're not on the internal net (wrong Wi-Fi) or the whole segment is down → admin.

### Step 2 — Log in (30 s)

```bash
ssh stu_2021@172.17.116.64 'hostname; whoami; exit'
```

- **Expected:** `nagws1` then `stu_2021`. Accepts the `~/.ssh/id_ed25519` key; if it asks for a password, use the target password in `IMP_server_context.md` §1 (do not paste it into any report/chat).
- If `Permission denied (publickey,password)` and the password also fails → the key/password rotated → admin.

### Step 3 — While you're there: check the jump host from inside (30 s)

```bash
ssh stu_2021@172.17.116.64 'nc -vz -w5 210.77.75.12 9910; exit'
```

- **Expected if jump host is back:** `succeeded`. If it fails from *inside* too, the jump host is genuinely dead — tell the admin "unreachable even from `172.17.116.64` on the same internal net".

### Step 4 — Fix the Mac's latent jump-host failure (one line, do it regardless)

The wrappers enforce `RejectPolicy` and the Mac has no jump-host key cached — so even after the host returns, `remote_exec.py` will keep failing through the jump path. Seed the key **once the jump host is back** (or from campus if it's reachable there):

```bash
ssh-keyscan -p 9910 210.77.75.12 >> ~/.ssh/known_hosts
```

- **Expected:** appends 2–3 `ssh-…` lines; silent on success. Verify with `grep -c '210.77.75.12' ~/.ssh/known_hosts` → ≥1.
- Then the documented route works end-to-end: `ssh -J tpc_usr_imp@210.77.75.12:9910 stu_2021@172.17.116.64` (jump password = the "verified working 2026-06-27" entry in §1).

### Step 5 (optional, 2 min) — Make this never happen again: reverse tunnel

While logged into `.64` from campus, leave a reverse tunnel to box 176 so IMP stays reachable even with the jump host down:

```bash
# on .64, in tmux/screen or nohup:
ssh -N -R 2222:localhost:22 -o ServerAliveInterval=60 -o ExitOnForwardFailure=yes \
    -p 43812 root@connect.westb.seetacloud.com
# then from anywhere:
ssh -p 43812 root@connect.westb.seetacloud.com   # onto box 176
ssh -p 2222 stu_2021@localhost                  # lands on .64
```

- **Expected:** the second ssh prints `nagws1`. Caveats: needs `.64` outbound SSH to work (it did on Jul 9 / Sep 21 — the box pulled *from* it), needs box 176 powered on, and dies if `.64` reboots. This is a proposal, not something I ran — it requires a login I can't do from here.

### If nothing works

The only remaining unblock is the **IMP admin**: "Jump host `210.77.75.12` is dark on all ports from 4+ external networks since ~Sep 21–25; traceroute dies after your internal gateway `192.168.17.30`; `imp.cas.cn` is up. Please restart it or provide an alternate route (VPN / different jump host)." Meanwhile the pending CPU jobs can run on box 176 (route #6) — that decision is already filed as captain call `fm-ar-imp-access`.

<!-- SOURCE-BODY-END -->
