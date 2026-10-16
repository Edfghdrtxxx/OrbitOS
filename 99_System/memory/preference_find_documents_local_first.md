---
name: Find the user's documents locally before cloud storage
description: When the user asks to find, retrieve, or open one of their own documents, search the vault and related repos first, including when they name Google Drive or 云盘; use the local copy when one exists.
type: preference
---
**Trigger:** the user asks to find, retrieve, or open one of their own documents (报告, 考核表, slides, forms, certificates), including when the request names Google Drive, 云盘, or another cloud store.

**Search order:**
1. The vault (`/Users/Reid Hu/OrbitOS`), then the related repos listed in AGENTS.md. Use `find` on file names with Chinese and English keywords, the user's name (胡智恒), and the topic.
2. Cloud storage only when step 1 finds nothing.

**When a local copy exists:** use it. Give the user its path as a link and say it is the local copy.

**Known locations:**
- UCAS/IMP degree documents (开题, 学年考核, 中期, 论文, 答辩): `20_Project/Masters_Degree/`, one numbered subfolder per stage; the layout table is in `Masters_Thesis.md` there.
- Assessment and talk decks: `70_Presentations/`
- Identity and visa documents (passport, visa forms, 调档函, 学籍验证报告, 社保, 税单) are not in the vault; they are in Google Drive.

**Dates:** if the user gives an edit date, read the modified date inside the file (`unzip -p <file> docProps/core.xml` for .docx/.pptx/.xlsx). The file-system date shows when the file was copied into the vault, not when it was edited.

**Why:** 2026-10-16, the user asked to retrieve the 开题报告 from Google Drive. More than ten Drive searches (Chinese and English keywords, two date windows) found nothing; the file was in the vault all along. Its file-system date was 2026-07-26; its internal modified date (2025-12-15) matched the user's "last December".
