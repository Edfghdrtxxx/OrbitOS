---
last_reviewed:
next_review: 2026-03-03
review_interval: 0
tags: [no-review]
---
# Marker PDF CLI

Quick CLI commands for recurring `marker-pdf` usage.

## Install (clean venv recommended)

WSL/Linux:

```bash
cd /mnt/d/obsidian/OrbitOS/20_Project/Marker
# It's safer to use python3 to avoid conda conflicts.
python3 -m venv .venv 
source .venv/bin/activate
python -m pip install --upgrade pip
python -m pip install marker-pdf
```

PowerShell (Windows):

```powershell
cd D:\obsidian\OrbitOS\20_Project\Marker
python -m venv .venv
.\.venv\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install marker-pdf
```

> [!note] Venv reuse
> Only run `python -m venv .venv` again if you deleted the `.venv` folder or want a fresh environment. Otherwise, just `source .venv/bin/activate`.

## Convert a single PDF

WSL/Linux:

```bash
marker_single /path/to/file.pdf
```

PowerShell (Windows):

```powershell
marker_single C:\path\to\file.pdf
```

## Convert with a custom output directory

WSL/Linux:

```bash
marker_single /mnt/d/Something/course/MachineLearning/PDFVersion/DANN_Electronic_Identification.pdf --output_dir /mnt/d/Something/course/MachineLearning/MDVersion/
```

PowerShell (Windows):

```powershell
marker_single C:\path\to\file.pdf --output_dir D:\obsidian\OrbitOS\50_Resources\Physics\references
```

With the Bilibili-RAG API wrapper:

WSL/Linux:

```bash
/mnt/d/obsidian/OrbitOS/20_Project/Marker/marker_with_bilibili_env.sh \
  marker_single /path/to/file.pdf \
  --output_dir /mnt/d/obsidian/OrbitOS/50_Resources/Physics/references
```

PowerShell (Windows, via WSL):

```powershell
wsl /mnt/d/obsidian/OrbitOS/20_Project/Marker/marker_with_bilibili_env.sh `
  marker_single /path/to/file.pdf `
  --output_dir /mnt/d/obsidian/OrbitOS/50_Resources/Physics/references
```

## Use Bilibili-RAG API (DashScope/OpenAI-compatible)

WSL/Linux:

```bash
/mnt/d/obsidian/OrbitOS/20_Project/Marker/marker_with_bilibili_env.sh \
  marker_single /path/to/file.pdf
```

PowerShell (Windows, via WSL):

```powershell
wsl /mnt/d/obsidian/OrbitOS/20_Project/Marker/marker_with_bilibili_env.sh `
  marker_single /path/to/file.pdf
```

This wrapper sources `20_Project/Bilibili-RAG/bilibili-rag/.env` and passes
`DASHSCOPE_API_KEY` (fallback `OPENAI_API_KEY`), `OPENAI_BASE_URL`, and
`LLM_MODEL` into marker with `--use_llm`.

## Convert a folder

WSL/Linux:

```bash
marker /path/to/input/folder
```

PowerShell (Windows):

```powershell
marker C:\path\to\input\folder
```

## Convert recursively (all PDFs)

WSL/Linux:

```bash
find /path/to/input/folder -type f -iname "*.pdf" -print0 | \
  xargs -0 -n 1 marker_single
```

PowerShell (Windows):

```powershell
Get-ChildItem -Path C:\path\to\input\folder -Recurse -Filter *.pdf | `
  ForEach-Object { marker_single $_.FullName }
```

## Multi-GPU batch

WSL/Linux:

```bash
NUM_DEVICES=4 NUM_WORKERS=15 marker_chunk_convert ../pdf_in ../md_out
```

PowerShell (Windows, via WSL):

```powershell
wsl -e bash -lc 'NUM_DEVICES=4 NUM_WORKERS=15 marker_chunk_convert ../pdf_in ../md_out'
```

## Useful flags (single file or folder)

- `--page_range "0,5-10,20"`: process selected pages only.
- `--output_format markdown|json|html|chunks`: choose output format.
- `--output_dir /path/to/out`: set output directory.
- `--use_llm`: enable LLM-enhanced conversion (requires LLM config).
- `--force_ocr`: OCR every page, including inline math.
- `--strip_existing_ocr`: remove existing OCR and re-run.
- `--debug`: verbose logging.

Run `marker_single --help` or `marker --help` for the full option list.

## Troubleshooting

### Shell hangs after command
If the shell hangs and doesn't start processing, check if you accidentally included a **trailing backtick** (`` ` ``) at the end of the line. In Bash, this starts a command substitution and waits for a closing backtick.

### `$'\r': command not found` (WSL/Linux)
If you see errors like `line 5: $'\r': command not found` when running the wrapper script, it means your `.env` file has **Windows-style line endings (CRLF)**. Bash requires Unix-style (LF).

**Fix with `sed`:**
```bash
sed -i 's/\r$//' /mnt/d/obsidian/OrbitOS/20_Project/Bilibili-RAG/bilibili-rag/.env
```
*(Note: Ensure there is a space between `'s/\r$//'` and the file path!)*

**Fix with `dos2unix`:**
```bash
dos2unix /mnt/d/obsidian/OrbitOS/20_Project/Bilibili-RAG/bilibili-rag/.env
```

### `sed: unknown option to 's'`
This usually happens if you miss the space between the `sed` expression and the file path. Always ensure arguments are separated by spaces.

> [!warning] Conda + pip conflict
> If `pip install marker-pdf` fails with `uninstall-no-record-file` for `opencv-python-headless`, it was installed by conda. Use the venv steps above to avoid conflicts, or remove the conda package before reinstalling.
