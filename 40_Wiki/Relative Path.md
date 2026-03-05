---
area: "[[Tech]]"
tags: [coding, networking, paths, no-review]
created: 2026-03-03
last_reviewed:
next_review: 2026-03-03
review_interval: 0
---
# Relative Path

## Definition

A relative path is a way of describing the location of a file or directory relative to the current working directory, rather than starting from the system's root directory.

## Key Points

- `./` represents the current directory.
- `../` moves up one level in the directory hierarchy.
- `../../` moves up two levels.
- Relative paths are essential for making scripts and code projects portable across different machines or environments.

## Examples

> [!tip] Relative path crash course
> - `./` = current directory
> - `../` = go up one level
> - `../../` = go up two levels
>
> From `OrbitOS/` the path `../../Something/AFTPC_V3_MultiAgentVersion` means:
> `OrbitOS/` → `obsidian/` → `D:\` → `Something/AFTPC_V3_MultiAgentVersion`

## Related Concepts

- [[Absolute Path]]
- [[Current Working Directory]]

## References

- [Wikipedia: Path (computing)](https://en.wikipedia.org/wiki/Path_(computing)#Relative_paths)
