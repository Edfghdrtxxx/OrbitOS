---
area: "[[Tech]]"
tags: [git, github, version-control]
created: 2026-03-03
last_reviewed:
next_review: 2026-03-03
review_interval: 0
---
# Connecting a Local Repo to a GitHub Remote

## Definition

Connecting a local [[Git]] repository to a [[GitHub]] remote means adding a remote URL (often named [[origin]]) so you can push and pull between your local repo and the remote host.

## Key Points

- Add the remote with `git remote add origin <REMOTE_URL>` and set the upstream with `git push -u origin main`.
- If `origin` already exists, update it with `git remote set-url origin <REMOTE_URL>`.
- Confirm the remote and branch mapping with `git remote -v` and `git branch -vv`.
- Remotes can use [[SSH]] or [[HTTPS]] URLs; choose based on your authentication setup.

## Examples

Example: initialize and connect a new repo.

```bash
git init
git remote add origin <REMOTE_URL>
git push -u origin main
```

Example: change an existing remote URL.

```bash
git remote set-url origin <REMOTE_URL>
```

## Related Concepts

- [[git remote]]
- [[git push]]
- [[upstream]]
- [[origin]]
- [[SSH vs HTTPS]]

## References

- [GitHub Docs: Managing remote repositories](https://docs.github.com/en/get-started/getting-started-with-git/managing-remote-repositories)
