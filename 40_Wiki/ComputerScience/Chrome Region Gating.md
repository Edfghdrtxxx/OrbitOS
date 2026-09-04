---
area:
tags: [Chrome, Gemini, VPN, Troubleshooting]
created: 2026-09-04
last_reviewed:
next_review: 2026-09-11
review_interval: 0
---
# Chrome Region Gating

## Definition

Chrome checks "where you are" through **three separate records** before enabling region-gated features like Gemini in Chrome. Each record is written at a different time, and a VPN-off moment can poison any of them with a "China" answer.

## The Three Gates

1. **Session country** (`variations_country` in Local State) — the "shirt label", updated on seed fetches
2. **App locale** — Chrome inherits macOS language; the Gemini gate only accepts `en-us` by default
3. **Permanent consistency country** (`GetStoredPermanentCountry()`) — reads the override pref `variations_permanent_overridden_country` first; if absent, falls back to the last seed-fetch country

The error panel ("Gemini in Chrome isn't available") never says *which* gate failed.

## Fix Applied (2026-09-04)

- `variations_permanent_overridden_country = "us"` in Local State — **the durable fix**, survives seed fetches and Chrome updates
- Chrome per-app language override → `en-US` (macOS System Settings → Chrome → Language; system language untouched)
- Earlier: `variations_country` patched `cn` → `us`

## Prevention Checklist

- [ ] **VPN before Chrome** — Clash auto-start + TUN always-on. Chrome asks Google "where am I?" every ~30 min; a CN answer re-poisons region records
- [ ] After reboot/sleep/network change, restart Chrome *while on VPN* if any Google feature acts region-locked
- [ ] Never remove the Chrome language override (en-US)
- [ ] Never wipe Chrome's app data / reinstall without re-applying the override pref (Local State gets erased)

## If It Breaks Again

1. Turn VPN on fully → restart Chrome (fixes most cases)
2. Still broken → it is likely a new gate from a Chrome update; inspect `Local State` (`variations_permanent_overridden_country`, `is_glic_eligible` per profile) and the profile's `Preferences` → `glic.profile_enablement.last_ready_state` (3 = generic ineligible, 5 = location mismatch, 6 = account blocked)
3. Account-side checks (region: `policies.google.com/country-association-form`; birthday must be 18+)

## Related Concepts

- Clash proxy, TUN mode

## References

- Chromium `glic_enabling.cc`, `variations_field_trial_creator.cc` (branch-heads/7977)
- Diagnosis session 2026-09-03/04
