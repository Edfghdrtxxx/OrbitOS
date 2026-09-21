---
title: "Jev-compaction-Kunchen"
type: project
status: active
area: "[[ComputerScience]]"
created: 2026-09-19
due:
priority: P2
tags: [project, OMP, compaction, Jev, TypeSafe]
---
# Jev-compaction-Kunchen
## Context
**Objective:** Evaluate and safely integrate `compact-adviser` with OMP as a hint-only compaction adviser.

**Project source:** [kunchenguid/compact-adviser](https://github.com/kunchenguid/compact-adviser), especially `packages/pi-extension`.

**Current state:** OMP's compatibility layer successfully completed factory registration during initial smoke testing (registering `/compact-adviser` after installing `proper-lockfile`), but failed live lifecycle compatibility because OMP does not emit the adviser's required `agent_settled` hook. Consequently, no durable install was made. No TypeSafe API key was configured, no conversation data was sent, and all temporary test artifacts were removed.

## Actions
### Phase 1: Compatibility
- [x] Test project-local Pi extension loading in OMP
- [x] Confirm `/compact-adviser` registration
- [x] Verify hint-only/no-key safety path
- [x] Clean temporary installation artifacts

### Phase 2: Decision
- [x] Decide whether to create a durable OMP-compatible package setup (no durable install made; upstream compatibility failed)
- [ ] Review TypeSafe data-sharing implications before configuring a key
- [x] Keep compact-adviser automatic mode disabled, while OMP’s own native compaction remains enabled/default

### Phase 3: Survey & Decision
- [x] Verify referenced X announcement: announces free Jev metering via Vercel AI Gateway (no API key or token; incompatible with TypeSafe endpoint)
- [x] Distinguish Kun repositories: `compact-adviser` (timing adviser) vs `pi-openai-server-compaction` (Codex executor)
- [x] Survey OMP 18.2.6 native compaction: confirmed native Responses v2/server compaction under `remote` enabled; do not install Pi Codex plugin
- [x] Probe upstream `compact-adviser@0.1.3` lifecycle: cold-profile probe proved OMP lacks `agent_settled` hook; reject unpatched package install
- [x] Maintain zero-footprint state: keep native compaction defaults, compact-adviser auto disabled, and TypeSafe key absent

## Progress
- 2026-09-19: OMP compatibility smoke test passed after dependency repair; no permanent installation retained.
- 2026-09-19: Architectural survey and cold-profile probe confirmed OMP 18.2.6 native remote compaction defaults, proved upstream `compact-adviser@0.1.3` lifecycle incompatibility (`agent_settled` missing), and verified X post contains no API keys. No durable adviser install made; zero OMP configuration changes; no TypeSafe data transmitted.

## Related
- [[2026-09-19]]
- [[Reid_Bench]]

## Notes
- **X Post / Metering:** The referenced X post contains no API key or redemption token; it announces free Jev metering through Vercel AI Gateway, which is incompatible with native compact-adviser’s hardcoded TypeSafe System One endpoint and `TYPESAFE_API_KEY`.
- **Adviser vs. Executor:** Kun’s `compact-adviser` is a Jev WHEN-to-compact adviser, distinct from `kunchenguid/pi-openai-server-compaction`, which is a Codex-server compaction executor.
- **OMP Native Compaction:** OMP 18.2.6 already has native Responses v2/server compaction under `remote`, with `compaction.enabled=true`, `compaction.remoteStreamingV2Enabled=true`, method order `remote,snapcompact,handoff,shake,soft`; cold-profile verification matched defaults. Do not install or migrate the Pi Codex compaction plugin.
- **Lifecycle Incompatibility:** A throwaway-profile / non-durable probe proved upstream compact-adviser@0.1.3 is not compatible with OMP’s lifecycle: OMP emits session/turn events but not `agent_settled`, the adviser’s only checkpoint trigger. Therefore do not install the unpatched package. No OMP paths changed; no key exists; no TypeSafe data was sent.
- **Policy & Key Status:** Keep OMP native compaction settings unchanged, compact-adviser auto disabled, and any TypeSafe key absent until explicit data-sharing review.
