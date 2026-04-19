# Tauri icons

Placeholder directory. Populate before running `npm run tauri:build`:

Required files (referenced from `tauri.conf.json`):
- `32x32.png`
- `128x128.png`
- `128x128@2x.png`
- `icon.icns` (macOS)
- `icon.ico` (Windows)

Generate from a 1024x1024 source PNG with:

```
npx @tauri-apps/cli icon path/to/source.png
```

`tauri dev` works without these; bundling (`tauri build`) will fail until they exist.
