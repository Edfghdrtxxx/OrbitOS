---
area: "[[AI]]"
tags: [Claude, account-safety, network]
created: 2026-09-24
last_reviewed:
next_review: 2026-09-24
review_interval: 0
---
# Claude Use Safety

## Schematics

![[Claude_Use_Safety_workflow.excalidraw|1000]]
*Author-drawn pre-login and daily-use verification workflow; a failed gate means stop and investigate.*

## Definition

Claude use safety is the practice of keeping the network path, browser identity, account session, and usage behavior consistent and evidence-based. A successful proxy connection or low latency alone is not proof that the browser is using a suitable exit IP or that the environment is clean.

## Key Points

- **Verify the real browser egress before login.** In the same Chrome profile that will be used for Claude, check `ipinfo.io/json`, then record the IP, ASN/organization, hostname, country, timezone, and city. A latency test proves reachability only; it does not prove residential classification. The 2026-09-24 check of `AME-Reality-8443` returned `23.94.229.181`, HostPapa/AS36352, `colocrossing.com`; ProxyCheck classified it as `proxy=yes`, `type=VPN`, risk `66`, so it was not a residential exit.
- **Classify the IP, not just its country.** Prefer an exit whose ASN and organization are consistent with residential or business access and whose independent proxy/VPN checks do not flag it. Treat “US” or “Los Angeles” as geolocation facts, not as evidence of residential provenance. Re-test after every node, profile, or routing change.
- **Verify the actual Claude route.** Confirm that the active FlClash profile and selected group send `claude.ai`, `claude.com`, `anthropic.com`, `claudeusercontent.com`, `statsig.anthropic.com`, and `sentry.io` through the intended node. Check FlClash Connections while accessing Claude or `api.anthropic.com`; an HTTP `404` from the API indicates reachability, not account eligibility or IP quality.
- **Check browser leakage and consistency.** In the same profile, verify WebRTC exposes no LAN or real public IP, keep timezone/language/geolocation coherent with the exit, and check DNS as diagnostic evidence. Fake-IP mode can make BrowserLeaks display local or regional resolvers; that does not by itself prove that Claude receives those resolver IPs. Do not use DNS results to override the egress-IP and route checks.
- **Keep identity and behavior stable.** Use one dedicated Chrome profile for the account; incognito only isolates cookies and does not change the network, ASN, TLS fingerprint, or operating-system identity. Do not mix accounts, reuse a banned session, rapidly switch nodes, repeatedly retry blocked logins, automate passwords or 2FA, or generate filler messages. Use Claude for genuine research and coding work, and stop if an account-hold, unexpected verification, or IP/location mismatch appears.

## Examples

- **Safe pre-login gate:** select the intended node → open `ipinfo.io/json` in the target Chrome profile → verify the IP and ASN are acceptable → check Claude-domain routing and WebRTC → only then log in once.
- **Stop condition:** the node reports a fast US location but the browser shows a hosting provider, VPN/proxy risk, the old datacenter IP, a China IP, or a real WebRTC address. Do not attempt login; change or repair the network path and repeat the checks.

## Related Concepts

- [[Chrome Region Gating]]
- [[Browser Profile Isolation]]
- [[Network Exit IP]]
- [[WebRTC Leak]]
- [[DNS Leak]]
- [[Claude Code]]
- [[Account Risk Signals]]

## References

- [ipinfo.io JSON endpoint](https://ipinfo.io/json) — observed public egress metadata; rerun from the target browser or proxy path.
- [ProxyCheck](https://proxycheck.io/) — independent proxy/VPN and risk classification; treat the result as a signal, not as proof of account policy.
- [BrowserLeaks WebRTC test](https://browserleaks.com/webrtc) — browser-side WebRTC exposure check.
- [BrowserLeaks DNS test](https://browserleaks.com/dns) — diagnostic DNS resolver visibility check.
- Local verification recorded on 2026-09-24: Chrome and `socks5h://127.0.0.1:7890` both observed `23.94.229.181`; no Claude login or Claude Code change was performed during that verification.
