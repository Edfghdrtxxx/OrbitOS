# Terminal integration in Obsidian

## Export metadata (verbatim)

```json
{
  "uuid": "48c58a3d-bac0-4504-b0c0-5f8abd69cb63",
  "name": "Terminal integration in Obsidian",
  "summary": "**Conversation Overview**\n\nThe person asked about terminal plugins for Obsidian, specifically motivated by wanting to reduce context-switching while using Claude Code alongside Obsidian. They requested information beyond official plugins, explicitly asking about open source projects as well.\n\nClaude provided a comprehensive overview of available options. The most highlighted recommendation was Obsidian Vault Agent (GitHub: `liuyixin-louis/obsidian-vault-agent`), a fork of `obsidian-terminal` designed specifically for AI coding agent workflows including Claude Code, featuring AI context sync that exports vault structure to `.obsidian/ai-context.json` and drag-and-drop file path support, installable via BRAT. Claude also covered the official community plugin Terminal by `polyipseity` (GitHub: `polyipseity/obsidian-terminal`) as the most mature store option, O-Terminal by `Quorafind` as another store option, and additional open source projects including a Rust-based Smart Workflow Terminal, `clevcode/obsidian-terminal-plugin` for Neovim integration, and the Shell Commands plugin for automating command execution without a full terminal. Claude's final recommendation was to combine Obsidian Vault Agent for the AI context synergy with polyipseity's Terminal as a stable fallback, while keeping heavier Claude Code sessions in Windows Terminal for full control.",
  "created_at": "2026-03-10T00:12:46.198056Z",
  "updated_at": "2026-03-10T00:13:15.916154Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-10T00:12:48.656705Z

Do we have plugins for terminal usage in obsidian? It's troublesome to switch screens when I am using claude code - obsidian synergy.
Not only tell me about official plugins, but also tell me about open sources projects.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd516-d227-7d05-b655-adf5af37dcde",
  "updated_at": "2026-03-10T00:12:48.656705Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-10T00:13:15.916154Z

 

<details>
<summary>Thinking (verbatim)</summary>

Let me search for Obsidian terminal plugins.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-10T00:12:50.128987Z",
  "stop_timestamp": "2026-03-10T00:12:50.322130Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_016fsSaSoWsAbY1ATcq3JzK3",
  "name": "web_search",
  "input": {
    "query": "Obsidian terminal plugin 2024 2025"
  },
  "message": "Searching the web",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_016fsSaSoWsAbY1ATcq3JzK3",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "New Plugin: Obsidian Vault Agent Terminal with Claude Code/Codex - Share & showcase - Obsidian Forum",
      "url": "https://forum.obsidian.md/t/new-plugin-obsidian-vault-agent-terminal-with-claude-code-codex/110024",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "obsidian.md",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=obsidian.md",
        "site_name": "Obsidian"
      },
      "is_missing": false,
      "text": "🛠 New Plugin: Obsidian Vault Agent Hi everyone! 👋 I’m excited to share Obsidian Vault Agent — a powerful new plugin that integrates consoles, shells, and terminals inside Obsidian, enhanced with AI coding agent support.\n\n🛠 New Plugin: Obsidian Vault Agent Hi everyone! 👋 I’m excited to share Obsidian Vault Agent — a powerful new plugin that integrates consoles, shells, and terminals inside Obsidian, enhanced with AI coding agent support. 🔗 GitHub: liuyixin-louis/obsidian-vault-agent 🚀 What It Is Obsidian Vault Agent turns your Obsidian vault into an execution surface for interactive terminals and AI-aware coding workflows. It’s a fork of the original obsidian-termina...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://forum.obsidian.md/t/new-plugin-obsidian-vault-agent-terminal-with-claude-code-codex/110024",
        "search_provider": "anthropic",
        "age": "January 15, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Plugin: Terminal - integrated terminals in Obsidian - Share & showcase - Obsidian Forum",
      "url": "https://forum.obsidian.md/t/plugin-terminal-integrated-terminals-in-obsidian/52170",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "obsidian.md",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=obsidian.md",
        "site_name": "Obsidian"
      },
      "is_missing": false,
      "text": "I want to share the my new (also first) plugin, Terminal. The plugin brings integrated terminals like those in Visual Studio Code into Obsidian. There are other features too, which can be found in the repository.\n\nThe latest version is 3.13.0, released on 2023-09-22. Contributions are welcome, especially translation! Original (OUTDATED) 👋 Hi everyone! I want to share the my new (also first) plugin, Terminal. The plugin brings integrated terminals like those in Visual Studio Code into Obsidian. There are other features too, which can be found in the repository. Please do read README.md in the aforementioned repository link carefully as there are extra setup needed. For example, installing Python ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://forum.obsidian.md/t/plugin-terminal-integrated-terminals-in-obsidian/52170",
        "search_provider": "anthropic",
        "age": "January 12, 2023"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - polyipseity/obsidian-terminal: Integrate consoles, shells, and terminals. · GitHub",
      "url": "https://github.com/polyipseity/obsidian-terminal",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "This plugin patches require so that require(&quot;obsidian&quot;) and other Obsidian modules work in the developer console. It is toggleable as Expose internal modules in settings. In the developer console, a context variable $$ is passed into the code, ...\n\nIntegrate consoles, shells, and terminals inside Obsidian. Repository · Changelog · Community plugin · Related · Features · Installation · Usage · Contributing · Security · For first time users, read the installation section first! This file is automatically opened on first install. You can reopen it in settings or command palette. Start external terminals from Obsidian. Integrate terminals into Obsidian. Has an emulated developer console usable on all platforms. Supports multiple terminal profiles. Has built-in keyboard shortcuts. Automatically save and restore integrated terminal history. Find in terminal. Save terminal history as file. Customize terminal appearance. Install plugin. ... Install the plugin from community plugins directly. ... Create directory terminal under .obsidian/plugins of your vault. Place manifest.json, main.js, and styles.css from the latest release into the directory.\n\nRun pnpm obsidian:install <vault directory> in the root directory (npm run obsidian:install <vault directory> is an acceptable fallback). ... See their readme. (optional for Windows, recommended) Install Python and dependencies. Install Python 3.9 or above. (Windows only) Run pip3 install psutil==5.9.5 pywinctl==0.0.50 typing_extensions==4.7.1. Configure Python executable in profile settings. Press the \"Check\" button to validate the Python configuration. Each profile needs to be configured separately. Enable plugin. ... Click on the Open terminal ribbon. Opens the default terminal if you have set up one. Otherwise, choose the desired profile. ... Right-click on files, folders, or tab headers. Choose the desired action (and profile). ... Press Ctrl+P or click on the Open command palette ribbon next to the left window border. Choose the desired action (and profile).\n\nWhen a terminal is focused, other keyboard shortcuts (including Obsidian and plugin hotkeys) are disabled. Only the following keyboard shortcuts work. Thus you can ignore Obsidian complaining about conflicting keys for the following keyboard shortcuts. Clear terminal: Ctrl+Shift+K, Command+Shift+K (Apple) Close terminal: Ctrl+Shift+W, Command+Shift+W (Apple) Find in terminal: Ctrl+Shift+F, Command+Shift+F (Apple) Toggle focus on last terminal: Ctrl+Shift+` (same as above) Unfocus terminal: (unbound; useful if you want separate keys for focus and unfocus) Theming is possible. However, there is no user-friendly interface for now. Open the profile editing modal. Click on the Edit button labeled Data. It should open up a new modal in which there is a large textbox. Notice terminalOptions in the text area labeled Data. Refer to the xterm.js documentation (ITerminalOptions) to set the options.\n\nThis plugin patches require so that require(\"obsidian\") and other Obsidian modules work in the developer console. It is toggleable as Expose internal modules in settings. In the developer console, a context variable $$ is passed into the code, which can be used to dynamically change terminal options. The full API is available from src/@types/obsidian-terminal.ts. ... Compared to on desktop, it is much less useful. The only use for it for now is opening a developer console on mobile. ... If the terminal is in focus, all Obsidian hotkeys are disabled so that you can type special characters into the terminal. You can unfocus the terminal by pressing Ctrl+Shift+`, then you can use Obsidian hotkeys again. Contributions are welcome! This project uses changesets to manage the changelog. When creating a pull request, please add a changeset describing the changes.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/polyipseity/obsidian-terminal",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - clevcode/obsidian-terminal-plugin: About Terminal plugin for Obsidian (https://obsidian.md/) - Supports editing files with Neovim and other terminal based editors!",
      "url": "https://github.com/clevcode/obsidian-terminal-plugin",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "This is a Terminal plugin for Obsidian (https://obsidian.md). ... The PTY helper (resources/pty-helper.py) requires Python 3 to be installed. It has only been tested under Linux so far, but should work on macOS as well.\n\nAbout Terminal plugin for Obsidian (https://obsidian.md/) - Supports editing files with Neovim and other terminal based editors! - GitHub - clevcode/obsidian-terminal-plugin: About Terminal plugin for Obsidian (https://obsidian.md/) - Supports editing files with Neovim and other terminal based editors!\n\nBoth of these bindings are bound to other actions in the default Obsidian settings though (ALT-Enter is bound to follow link under cursor and CTRL-E is bound to toggle edit/preview mode), so I am leaving it up to the user to set suitable keyboard bindings (or just stick to invoking the actions with the command palette using CTRL-P instead) Note that when a Terminal or terminal based Editor view is focused, all keypresses will be handled by the terminal. To shift focus back to Obsidian in order to use Obsidian shortcuts you can either obviously just click somewhere else, but also for convenience the tab group above the terminal/editor will be focused with ALT-Esc. In the plugin settings, you can configure the following: ... I've included the Roboto Mono Nerd Font, that is already patched with support for a large number of glyphs/icons. If you want to use another font that is already loaded within Obsidian, just change the setting to the name of the font, and if you want to use a font th\n\n;) To use a different editor, just change it in the plugin settings within Obsidian. My personal bindings are CTRL-E to open the file in Neovim and ALT-Enter to spawn a shell, which works very well for my purposes.\n\nThis is a Terminal plugin for Obsidian (https://obsidian.md). ... The PTY helper (resources/pty-helper.py) requires Python 3 to be installed. It has only been tested under Linux so far, but should work on macOS as well. It would be possible to adapt the Terminal plugin to work under Windows as well, but as it is not something that I have use for myself I probably won't spend time on that. Pull requests are welcome! Note that the reason that I don't use the node-pty module is that because it is using a non-context aware native (compiled) Node module, which is not allowed to be loaded within recent Electron versions. The PTY helper uses file descriptor 3 to communicate terminal size changes. Two commands are added, one to open a terminal, and one to open the active file in a terminal based editor. The default is set to /usr/bin/nvim, since Neovim is obviously the best option.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/clevcode/obsidian-terminal-plugin",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Smart Workflow - A Lightweight Cross-Platform Terminal for Obsidian - Share & showcase - Obsidian Forum",
      "url": "https://forum.obsidian.md/t/smart-workflow-a-lightweight-cross-platform-terminal-for-obsidian/109319",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "obsidian.md",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=obsidian.md",
        "site_name": "Obsidian"
      },
      "is_missing": false,
      "text": "Existing terminal plugins either rely on external terminal emulators or have cross-platform compatibility issues. So I built a lightweight, cross-platform pseudo-terminal server using Rust + portable-pty + WebSocket.\n\nWhy I Built This The Obsidian community currently lacks a good built-in terminal solution. Existing terminal plugins either rely on external terminal emulators or have cross-platform compatibility issues. So I built a l…",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://forum.obsidian.md/t/smart-workflow-a-lightweight-cross-platform-terminal-for-obsidian/109319",
        "search_provider": "anthropic",
        "age": "December 26, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Terminal - Integrate consoles, shells, and terminals.",
      "url": "https://www.obsidianstats.com/plugins/terminal",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "obsidianstats.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=obsidianstats.com",
        "site_name": "Obsidian Stats"
      },
      "is_missing": false,
      "text": "The Terminal plugin for Obsidian integrates powerful terminal functionality directly into your notes. It allows you to run external or integrated terminals, manage multiple terminal profiles, and provides an emulated developer console that works ...\n\nAn Obsidian plugin which renders console commands and their output. ... Obsidian plugin that enhances debugging experience. ... Copy command lines from your notes to the clipboard.\n\nAsciinema player plugin to render asciicasts in Obsidian.\n\nThe Terminal plugin for Obsidian integrates powerful terminal functionality directly into your notes. It allows you to run external or integrated terminals, manage multiple terminal profiles, and provides an emulated developer console that works across all platforms. Features include terminal history saving, keyboard shortcuts for quick access, and the ability to customize terminal appearance. Users can also find text in the terminal, clear the terminal, and restart it. The plugin supports shell and terminal emulator profiles and offers various commands for a seamless terminal experience within Obsidian. ... Provide a reproducible Python environment for tests and tools. Add unit tests: tests/test_docstrings.py and tests/test_module_exports.py. Ensure CI runs the new Python tests and update related files. 64a2f23: Fix Option key for Scandinavian/German keyboards on macOS by adding macOptionKeyPassthrough setting.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.obsidianstats.com/plugins/terminal",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - Quorafind/O-Terminal: A terminal plugin for Obsidian",
      "url": "https://github.com/Quorafind/O-Terminal",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "O Terminal is a powerful, integrated terminal plugin for Obsidian, built with xterm.js and node-pty. It brings a fully functional terminal environment directly into your Obsidian workspace, allowing you to run shell commands, git operations, ...\n\nO Terminal is a powerful, integrated terminal plugin for Obsidian, built with xterm.js and node-pty. It brings a fully functional terminal environment directly into your Obsidian workspace, allowing you to run shell commands, git operations, and scripts without leaving your notes. ... This plugin is designed for Desktop only (Windows, macOS, Linux). Mobile devices are not supported due to system limitations. Integrated Terminal View: Open terminal instances directly within Obsidian panes. Multi-Terminal Support: Run multiple terminal sessions simultaneously. Theme Integration: Terminal colors automatically adapt to your current Obsidian theme (Light/Dark mode). Custom Shell Configuration: Configure your preferred shell (PowerShell, Bash, Zsh, CMD) and startup arguments. ... Cross-Platform: Full support for Windows, macOS (Intel & Apple Silicon), and Linux.\n\nOpen Obsidian Settings > Community plugins. Turn off Safe mode. Click Browse and search for Terminal. Click Install and then Enable. Install the BRAT plugin via Community Plugins. Open command palette and run BRAT: Add a beta plugin for testing. Enter the repository URL: quorafind/obsidian-terminal. Click Add Plugin. Download the latest release from the Releases Page. Extract main.js, manifest.json, styles.css into your vault's plugin folder: ... Reload Obsidian and enable the plugin in settings. Command Palette: Press Ctrl/Cmd + P, then search for Terminal: Open new terminal · Ribbon Icon: Click the Terminal icon in the left sidebar (if enabled) ... Go to Settings > Terminal to customize your experience. ... The plugin requires native node-pty binaries to function. These are managed automatically: ... # Clone the repository git clone https://github.com/quorafind/obsidian-terminal.git cd obsidian-terminal # Install dependencies npm install # Build native modules for Electron npm run re",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/Quorafind/O-Terminal",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "polyipseity/obsidian-terminal | DeepWiki",
      "url": "https://deepwiki.com/polyipseity/obsidian-terminal",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "deepwiki.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=deepwiki.com",
        "site_name": "DeepWiki"
      },
      "is_missing": false,
      "text": "Last indexed: 20 July 2025 (40f87c) ... · versions.json · The obsidian-terminal plugin integrates console, shell, and terminal functionality directly into Obsidian, providing users with both external terminal launching ...\n\nLast indexed: 20 July 2025 (40f87c) Overview · Getting Started · Installation and Setup · Basic Usage · Core Architecture · Terminal View System · Terminal Emulator Engine · Profile Management · Features and Functionality · Terminal Types · Commands and Shortcuts · Settings and Configuration · Localization System · Translation Architecture · Supported Languages · Development Guide · Build System · Development Workflow · Release Management · Menu · Relevant source files · .changeset/sour-regions-smoke.md · .github/FUNDING.yml · README.md · manifest-beta.json · manifest.json · package-lock.json · package.json · pnpm-lock.yaml · src/terminal/emulator-addons.ts · src/terminal/view.ts · tsconfig.json · versions.json · The obsidian-terminal plugin integrates console, shell, and terminal functionality directly into Obsidian, providing users with both external terminal launching capabilities and embedded terminal experiences.\n\nThe obsidian-terminal plugin integrates console, shell, and terminal functionality directly into Obsidian, providing users with both external terminal launching capabilities and embedded terminal experiences. This plugin transforms Obsidian from a note-taking application into a more complete development environment by enabling terminal access without leaving the Obsidian interface. The plugin supports multiple terminal profiles, automatic session restoration, terminal search capabilities, customizable appearance, and cross-platform compatibility including mobile devices (with limited functionality). For detailed installation instructions, see Getting Started. For technical architecture details, see Core Architecture. The plugin follows a layered architecture pattern, integrating deeply with Obsidian's plugin system while leveraging the xterm.js library for terminal emulation.\n\nThe plugin leverages several core technologies to provide its functionality: @xterm/xterm (v5.5.0): Core terminal emulation engine providing VT100/xterm compatibility · Multiple xterm addons: Canvas rendering, WebGL acceleration, search, ligature support, Unicode handling · Custom addon system: DisposerAddon, DragAndDropAddon, RendererAddon, RightClickActionAddon · Svelte (v5.34.3): Reactive UI components for find functionality and modals · Obsidian Plugin API: Deep integration with workspace, views, commands, and settings · i18next (v25.2.1): Internationalization supporting 40+ languages · esbuild (v0.25.5): High-performance bundling and compilation · TypeScript (v5.8.3): Type-safe development with strict configuration ... The plugin's modular architecture enables extensibility while maintaining clean separation between UI concerns, terminal emulation, and system integration.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://deepwiki.com/polyipseity/obsidian-terminal",
        "search_provider": "anthropic",
        "age": "July 20, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "All terminal Obsidian Plugins.",
      "url": "https://www.obsidianstats.com/tags/terminal",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "obsidianstats.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=obsidianstats.com",
        "site_name": "Obsidian Stats"
      },
      "is_missing": false,
      "text": "... The Gnome Terminal Loader plugin integrates Gnome Terminal with Obsidian, allowing users to execute terminal commands directly from their vault. It includes a Python script loader, where placing a `main.py` file in the vault root enables ...\n\nThe Terminal plugin for Obsidian integrates powerful terminal functionality directly into your notes. It allows you to run external or integrated terminals, manage multiple terminal profiles, and provides an emulated developer console that works across all platforms. Features include terminal history saving, keyboard shortcuts for quick access, and the ability to customize terminal appearance. Users can also find text in the terminal, clear the terminal, and restart it. The plugin supports shell and terminal emulator profiles and offers various commands for a seamless terminal experience within Obsidian. ... The Shell commands plugin allows users to define, customize, and execute shell or terminal commands directly from Obsidian. Commands can be run via the command palette or assigned to hotkeys, streamlining access to external applications and system utilities.\n\nIt supports dynamic variables like file path, file name, and timestamps, which can be used to customize commands. Users can specify the working directory for commands and capture the output of commands back into their notes. This plugin enhances Obsidian's functionality by bridging it with system-level commands, offering a powerful tool for automation and customization. ... The Gnome Terminal Loader plugin integrates Gnome Terminal with Obsidian, allowing users to execute terminal commands directly from their vault. It includes a Python script loader, where placing a `main.py` file in the vault root enables a custom command-line interface. This plugin is specifically designed for Linux users with Gnome Terminal and Python 3 installed. It is ideal for users who want to create and manage terminal scripts or menus from within Obsidian, offering enhanced workflow flexibility for developers and those familiar with terminal-based tasks.\n\nThe Console Markdown Plugin plugin allows users to render console commands and their outputs directly within Obsidian. By creating `console` code blocks, users can present command-line instructions and their results in a formatted and readable manner, enhancing documentation for technical workflows, tutorials, or system logs. This plugin is particularly useful for developers, sysadmins, and anyone working on technical documentation who needs to display terminal interactions seamlessly within their notes. ... The Asciinema Player plugin lets you embed terminal session recordings directly into your notes. It renders asciicasts recordings made with the Asciinema command-line tool using an interactive player that supports playback controls, speed adjustments and keyboard shortcuts. You can reference local cast files stored in your vault or pull them from remote URLs.\n\nThe Command Line plugin enhances how command line code blocks are handled in Obsidian, streamlining workflows for users who document or share terminal commands. It allows copying commands directly from code blocks without manually selecting text, automatically stripping out prompts and command output so the clipboard content is clean and ready to paste into a terminal.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.obsidianstats.com/tags/terminal",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Plugins - Obsidian",
      "url": "https://obsidian.md/plugins",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "obsidian.md",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=obsidian.md",
        "site_name": "Obsidian"
      },
      "is_missing": false,
      "text": "With thousands of plugins and our open API, it’s easy to tailor Obsidian to fit your personal workflow.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://obsidian.md/plugins",
        "search_provider": "anthropic"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "globe",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Great results. Let me also fetch the Obsidian Vault Agent forum post since it's specifically about Claude Code integration.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-10T00:12:53.412614Z",
  "stop_timestamp": "2026-03-10T00:12:54.594885Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01VroRUYHvp39ZDTSrdEvYTq",
  "name": "web_fetch",
  "input": {
    "url": "https://forum.obsidian.md/t/new-plugin-obsidian-vault-agent-terminal-with-claude-code-codex/110024",
    "text_content_token_limit": 800
  },
  "message": "Fetching: https://forum.obsidian.md/t/new-plugin-obsidian-vault-agent-terminal-with-claude-code-codex/110024",
  "integration_name": "Web Fetch",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "globe",
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": null,
  "hidden_in_chat": null,
  "mcp_server_url": null
}
```

</details>

<details>
<summary>tool_result (verbatim JSON)</summary>

```json
{
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01VroRUYHvp39ZDTSrdEvYTq",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "New Plugin: Obsidian Vault Agent Terminal with Claude Code/Codex",
      "url": "https://forum.obsidian.md/t/new-plugin-obsidian-vault-agent-terminal-with-claude-code-codex/110024",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "obsidian.md",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=obsidian.md",
        "site_name": "obsidian"
      },
      "is_missing": false,
      "text": "New Plugin: Obsidian Vault Agent Terminal with Claude Code/Codex - Share & showcase - Obsidian Forum\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n[Obsidian Forum](/)\n\n# [New Plugin: Obsidian Vault Agent Terminal with Claude Code/Codex](/t/new-plugin-obsidian-vault-agent-terminal-with-claude-code-codex/110024)\n\n[Share & showcase](/c/share-showcase/9)\n\n[yixinliu6178](https://forum.obsidian.md/u/yixinliu6178)\n\n\n\nJanuary 15, 2026, 2:44pm\n\n1\n\n## **:hammer_and_wrench: New Plugin: Obsidian Vault Agent**\n\nHi everyone! ![:waving_hand:](https://forum.obsidian.md/images/emoji/apple/waving_hand.png?v=15 \":waving_hand:\")\n\nI’m excited to share **Obsidian Vault Agent** — a powerful new plugin that integrates **consoles, shells, and terminals inside Obsidian**, enhanced with AI coding agent support.\n\n![:link:](https://forum.obsidian.md/images/emoji/apple/link.png?v=15 \":link:\") **GitHub**: liuyixin-louis/obsidian-vault-agent\n\n---\n\n### **:rocket: What It Is**\n\n**Obsidian Vault Agent** turns your Obsidian vault into an *execution surface* for interactive terminals and AI-aware coding workflows.  \nIt’s a fork of the original **obsidian-terminal** plugin, but with **AI-focused enhancements** specifically designed to support tools like Claude Code, Cursor, and other agent workflows.\n\nInstead of just a terminal emulator, Vault Agent includes:\n\n* **AI Context Sync — exports active files/folders to `.obsidian/ai-context.json` for AI agents to consume**\n* **Drag & Drop File Paths — drag files/folders into the terminal and paste their path instantly**\n* **New Tab Button — quickly open new terminals**\n\n---\n\n### **:brain: Why This Plugin**\n\nThis plugin isn’t just another terminal in Obsidian — it’s designed as an **execution substrate for AI agents**.  \nThat means terminals are first-class surfaces where AI models can *operate with awareness of your vault’s structure, context, and files*, not just side-panel assistants.\n\nThis fills a gap between:\n\n* **vault templates focused on workspace organization**\n* **chat-based AI plugins**\n* **and simple terminal emulators**\n\nVault Agent brings **AI-contextualized execution directly into your note-centric workflow**.\n\n---\n\n### **:package: Installation**\n\nYou can install Obsidian Vault Agent in several ways:\n\n1. **Manual install**\n\n   * **Create `.obsidian/plugins/terminal-ai` in your vault**\n   * **Download the latest release and place `manifest.json`, `main.js`, `styles.css` there**\n2. **Build from source**\n\n   * **Clone the repo**\n   * **`npm install`**\n   * **`npm run obsidian:install <vault path>`**\n3. **Obsidian42 – BRAT**\n\n   * **Add `liuyixin-louis/obsidian-vault-agent` as a beta plugin**\n   * **See BRAT docs for instructions**\n\nOptionally, you can install Python dependencies for enhanced external terminal support on Windows (see README for details).\n\n---\n\n### **:test_tube: Who It’s For**",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://forum.obsidian.md/t/new-plugin-obsidian-vault-agent-terminal-with-claude-code-codex/110024"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: New Plugin: Obsidian Vault Agent Terminal with Claude Code/Codex",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=obsidian.md",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "New Plugin: Obsidian Vault Agent Terminal with Claude Code/Codex",
      "subtitles": null,
      "url": "https://forum.obsidian.md/t/new-plugin-obsidian-vault-agent-terminal-with-claude-code-codex/110024",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=obsidian.md",
      "source": "obsidian"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Great, I have enough info now. Let me compile a comprehensive answer about Obsidian terminal plugins.

</details>

Great timing — there's actually a plugin made specifically for the Claude Code + Obsidian workflow, posted just a couple months ago! Here's a full breakdown:

---

## 🏆 Most Relevant for Your Use Case

### **Obsidian Vault Agent** *(Open Source, Jan 2026)*
GitHub: `liuyixin-louis/obsidian-vault-agent`

This is a fork of `obsidian-terminal` specifically designed for AI coding agent workflows. It's built around Claude Code, Cursor, and similar tools.

Key extras over a plain terminal plugin:
- **AI Context Sync** — exports active files/folders to `.obsidian/ai-context.json` so Claude Code can consume your vault's current context
- **Drag & Drop File Paths** — drag files/folders into the terminal to paste their path instantly
- Install via BRAT: add `liuyixin-louis/obsidian-vault-agent`

This is probably your best starting point given you're already deep in the Claude Code + Obsidian workflow.

---

## 🔌 Official Community Plugins (in Plugin Store)

### **Terminal** by `polyipseity`
GitHub: `polyipseity/obsidian-terminal`

Brings integrated terminals like those in VS Code into Obsidian. Supports multiple terminal profiles, built-in keyboard shortcuts, automatic save/restore of terminal history, find-in-terminal, and customizable appearance.

Built on xterm.js with WebGL acceleration, and supports 40+ languages via i18next. Actively maintained, cross-platform including mobile (limited). This is the most mature option in the store.

### **O-Terminal** by `Quorafind`
GitHub: `Quorafind/O-Terminal`

Built with xterm.js and node-pty, supports multi-terminal sessions simultaneously, theme integration (auto light/dark), and custom shell config for PowerShell, Bash, Zsh, or CMD. Full Windows/macOS/Linux support.

---

## 🛠 Other Open Source Projects

### **Smart Workflow Terminal** *(Dec 2025)*
Built a lightweight cross-platform pseudo-terminal server using Rust + `portable-pty` + WebSocket, specifically to solve the cross-platform compatibility issues that plague other terminal plugins. Worth watching if stability across platforms matters.

### **obsidian-terminal-plugin** by `clevcode`
GitHub: `clevcode/obsidian-terminal-plugin`

Supports editing files with Neovim and other terminal-based editors directly from Obsidian. Linux/macOS focused. Good if you use Neovim alongside Claude Code.

### **Shell Commands** plugin
Lets you define and execute shell commands from Obsidian via command palette or hotkeys, with dynamic variables like file path, file name, and timestamps, and can capture command output back into your notes. Not a full terminal but great for automating repetitive Claude Code invocations.

---

## 💡 My Recommendation for You

Given your setup (Windows Terminal + Claude Code + Obsidian vault):

1. **Start with Obsidian Vault Agent** — the AI context sync directly feeds your vault structure to Claude Code, which is exactly the synergy you're after.
2. **Pair with polyipseity's Terminal** as a fallback — it's the most stable and feature-complete option in the official store.

Keep in mind that since you're using **Windows Terminal with split panes** for Claude Code sessions, running the terminal *inside* Obsidian may actually work better for your note-referencing workflow, while keeping heavy Claude Code sessions in Windows Terminal for full control.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd516-d227-77e8-ae5f-018f62f1d3d5",
  "updated_at": "2026-03-10T00:13:15.916154Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cd516-d227-7d05-b655-adf5af37dcde"
}
```

</details>
