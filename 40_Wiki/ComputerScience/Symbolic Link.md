---
area:
tags: [filesystem, linux, windows]
created: 2026-03-08
last_reviewed:
next_review: 2026-03-08
review_interval: 0
---
# Symbolic Link

## Definition

A symbolic link (symlink) is a special type of file that contains a path reference pointing to another file or directory, acting as a transparent redirect so that any access to the symlink is forwarded to the target. Unlike a [[Hard Link]], a symlink stores a pathname string rather than referencing the target's [[Inode]] directly.

## Key Points

- Created with `ln -s <target> <link>` on Unix/Linux, or `mklink <link> <target>` (files) / `mklink /D <link> <target>` (directories) on Windows
- Can span across [[File System]] boundaries, unlike [[Hard Link]]s which must reside on the same filesystem
- If the target is moved or deleted, the symlink becomes a **dangling link** (broken reference) — it still exists but resolves to nothing
- Can point to both files and directories; directory symlinks are common for version-switching (e.g., `/usr/local/bin/python -> python3.11`)
- Symlinks have their own permissions metadata, but access control is determined by the **target's** permissions

## Examples

- `ln -s /home/user/projects/app/config.yaml ~/config.yaml` — quick access to a deeply nested config via a [[Relative Path]] or absolute path
- Obsidian plugins using symlinks: OrbitOS skill folders are symlinked from `.agents/skills/` to `.claude/skills/` so both paths resolve to the same files
- Version managers (e.g., `nvm`, `pyenv`) swap symlinks to switch between installed tool versions

## Related Concepts

- [[Hard Link]]
- [[Inode]]
- [[File System]]
- [[Relative Path]]
- [[Git Submodules]]

## References

- `man ln` / `man symlink` (POSIX)
- Microsoft docs: `mklink` command reference
