---
name: Where and how WeChat (微信) stores files on this Mac
description: When the user mentions a file received or sent in WeChat, or a path under com.tencent.xinWeChat, look in xwechat_files/<account>/msg/ instead of searching the whole disk.
type: reference
---
**Trigger:** the user says a file came from or went to WeChat / 微信 / 微信群, or gives a path containing `com.tencent.xinWeChat` or `xwechat_files`.

**Root (host home `/Users/leyi`, not `/Users/Reid Hu`):**
`/Users/leyi/Library/Containers/com.tencent.xinWeChat/Data/Documents/xwechat_files/`

**Accounts:** one folder per account, named `wxid_…`. Observed 2026-10-27:
- `wxid_1j13socmu3t722_e09c`: in use; files up to 2026-10.
- `wxid_p7ymv55o6pqv22_f507`: old; newest `msg/file` folder is 2024-08.
- Open the in-use account first. `all_users/` and `Backup/` hold login, config and backup data, not message files.

**Layout inside an account (`<acct>/msg/`):**

| Path | Content |
|---|---|
| `file/YYYY-MM/<original name>` | Documents, archives, installers and other files sent or received as file messages. Original name kept; a name clash gets `(1)`. The month is when WeChat stored it. Files are read-only (`-r--r--r--`). |
| `video/YYYY-MM/<hash>.mp4` | Videos. Next to each: `<hash>.jpg` and `<hash>_thumb.jpg` previews. |
| `attach/<32-hex conversation id>/YYYY-MM/Img/<hash>.dat` and `<hash>_t.dat` | Images and their thumbnails. The `.dat` files are not plain images: they start with bytes `07 08 56 32` (`V2`) and `file` reports `data`. They were not decoded; do not try to open them as JPEG or PNG. |
| `migrate/` | Present; contents not inspected. |

Other folders in `<acct>/`: `db_storage/` (message databases, not inspected), `cache/`, `temp/`, `config/`, `resource/`, `business/`.

**How to find a file:**
1. List the newest month folder: `ls -t "<root>/<acct>/msg/file/2026-10" | head`.
2. Search by name: `find "<root>/<acct>/msg/file" -name "*keyword*"` (Chinese names work).
3. Open the file in place or copy it out. Do not edit or delete in `msg/`; work on a copy (the usual place is `/Users/leyi/Desktop/Hu Temoprary Workspace`).

**Caveats:**
- The folder does not record who sent a file or in which chat. Identify the file by name, month and size.
- A file's modified time can be older than its month folder (observed: Sep 29 modified time inside `2026-10`). Use the month folder for when it arrived.
- Files the user sends also land in `msg/file/` (observed: an earlier build of `灯_含参考文献.docx` in `2026-10`, different checksum from the final file). A same-named file there may be an older copy.

**Why:** 2026-10-27, the user gave `…/msg/file/2026-10/灯.docx` as the input to edit, and later asked for the result to be saved to the Desktop workspace for sending to others.
