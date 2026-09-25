<!-- Verbatim source section; overview: [[../fm-ar-box-evac]] -->
<!-- SOURCE-BODY-START -->
## Verification state

- Box-side sha256 manifest `/root/autodl-tmp/.autodl/evac_manifest.sha256` was still generating at stop time (961 lines written of ~960+ files; process may have completed since — check `pgrep -f sha256sum` on box).
- File-count verification passed for every item marked **complete** above (remote `find` count vs extracted count, `._*` excluded). No sha256 verification was run on the Mac copies — moot if firstmate deletes them.
- Transfer method note for the next attempt: tar-over-ssh truncates silently on this relay; `tar tf` exit code is NOT a completeness check — verify extracted file count against remote `find` count, and exclude `._*` AppleDouble files from the count (macOS bsdtar hides them in `tar tf`).

<!-- SOURCE-BODY-END -->
