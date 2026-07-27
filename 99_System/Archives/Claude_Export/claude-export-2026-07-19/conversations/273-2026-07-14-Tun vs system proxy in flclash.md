# Tun vs system proxy in flclash

## Export metadata (verbatim)

```json
{
  "uuid": "6d2548f8-1ab5-432b-a649-afd1a5e4fbea",
  "name": "Tun vs system proxy in flclash",
  "summary": "**Conversation Overview**\n\nThe person asked about the difference between TUN mode and system proxy in FlClash, a proxy/clash client application. Claude explained that system proxy operates at the application level by configuring OS-level proxy settings, meaning only apps that respect those settings are covered, while TUN mode operates at the virtual network interface level, capturing traffic from virtually all applications regardless of whether they honor proxy settings. Claude provided a comparison table covering coverage scope, permission requirements, setup complexity, and UDP protocol handling. Claude also offered practical guidance on when to use each mode: system proxy for everyday browsing and lighter use cases, TUN mode when needing to route traffic from apps that bypass system proxy settings such as games or command-line tools. The conversation used networking terminology including TUN device, virtual network adapter, HTTP/SOCKS proxy, IP layer, and elevated privileges.",
  "created_at": "2026-07-14T05:06:38.574503Z",
  "updated_at": "2026-07-14T05:06:49.247986Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-07-14T05:06:40.151488Z

When I use flclash, what it the different between tun and systme proxy?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f5f05-1b02-76e1-b8dc-6db1dc4c8b86",
  "updated_at": "2026-07-14T05:06:40.151488Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-07-14T05:06:49.247986Z

TUN mode and system proxy are two different ways FlClash routes your traffic.

**System proxy** works at the application level. FlClash sets your OS proxy settings (the HTTP/SOCKS proxy in Windows/macOS network settings), and applications that respect those settings route their traffic through FlClash. The catch: only apps that read the system proxy config are covered. Many command-line tools, games, and apps that use their own network stack or ignore system proxy settings will bypass it entirely and connect directly.

**TUN mode** works at the virtual network-interface level. FlClash creates a virtual network adapter (a TUN device), and the OS routes traffic through it at the IP layer. This captures traffic from essentially *all* applications, regardless of whether they honor proxy settings — including those command-line tools, games, and non-proxy-aware apps that system proxy misses.

The practical differences:

| | System Proxy | TUN Mode |
|---|---|---|
| Coverage | Only proxy-aware apps | Nearly all apps (global) |
| Permissions | Normal user | Needs admin/elevated privileges (installs a virtual adapter) |
| Setup | Simple, lightweight | Heavier; can affect all system traffic |
| UDP handling | Limited (often HTTP/SOCKS only) | Better full protocol/UDP support |

**When to use which:** System proxy is fine for everyday browsing and normal apps, and it's lighter and less intrusive. Use TUN mode when you need something covered that ignores the system proxy — for example a game, a terminal tool, or an app that leaks direct connections — or when you want everything routed without configuring apps individually.

One note: you generally use one or the other, not both, and TUN mode requires FlClash to run with elevated permissions to install the virtual adapter.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f5f05-1b02-79dc-a888-fb13255e6748",
  "updated_at": "2026-07-14T05:06:49.247986Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f5f05-1b02-76e1-b8dc-6db1dc4c8b86"
}
```

</details>
