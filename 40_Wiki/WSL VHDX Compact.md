---
last_reviewed:
next_review: 2026-03-03
review_interval: 0
tags: [no-review]
---
# WSL VHDX Compact (Shrink C: Usage)
(Has already completed 28 Feb 2026)

## Summary
WSL2 stores distro data in a VHDX that grows but does not shrink automatically. After cleanup inside WSL, you must compact the VHDX from Windows to reduce the file size on C:.

## Prereqs / Safety
- Close all WSL terminals and WSL-based apps (including Docker Desktop if it uses WSL).
- This is non-destructive when done correctly, but interruption risks corruption. Ensure the distro is shut down first.

## Step 1: Trim free space inside WSL (optional but recommended)
Run in WSL:
```bash
sudo fstrim -av
```
If `sudo` is unavailable, skip this step.

## Step 2: Shutdown WSL from Windows
Open PowerShell (or CMD) and run:
```powershell
wsl --shutdown
```

## Step 3: Compact the VHDX (Windows)
Open **PowerShell as Administrator** and run DiskPart:
```powershell
diskpart
```
Then in the DiskPart prompt:
```text
select vdisk file="C:\Users\petro\AppData\Local\wsl\{8ad35f8e-7743-4d39-ae19-88aac0a40560}\ext4.vhdx"
attach vdisk readonly
compact vdisk
detach vdisk
exit
```

## Step 4: Verify size
From WSL:
```bash
ls -lh /mnt/c/Users/petro/AppData/Local/wsl/{8ad35f8e-7743-4d39-ae19-88aac0a40560}/ext4.vhdx
```

## Moving VHDX to Another Drive (C: → D:)
Instead of compacting, you can relocate the entire distro so all disk usage moves off C:.

### 1. Check distro name
```powershell
wsl --list -v
```

### 2. Export the distro
```powershell
wsl --shutdown
wsl --export Ubuntu D:\WSL\ubuntu-backup.tar
```

### 3. Unregister the old distro (frees C: space)
```powershell
wsl --unregister Ubuntu
```

### 4. Import to D:
```powershell
wsl --import Ubuntu D:\WSL\Ubuntu D:\WSL\ubuntu-backup.tar
```

### 5. Restore default user
After import, WSL defaults to `root`. The `ubuntu config` launcher is removed after unregister, so use `wsl.conf` instead:
```powershell
wsl -d Ubuntu -u root -- bash -c "echo -e '[user]\ndefault=petro' >> /etc/wsl.conf"
wsl --shutdown
```
> [!tip] Check `/etc/wsl.conf` first — if it already has a `[user]` section, edit that line instead of appending to avoid duplicates.

### 6. Clean up
```powershell
del D:\WSL\ubuntu-backup.tar
```

> [!warning] Replace `Ubuntu` with your actual distro name from step 1.

## Notes
- The GUID path above is specific to this machine. Update if needed.
- If `compact vdisk` fails, retry after ensuring WSL is fully shut down.
