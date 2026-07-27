# Open source tools for academic drawing

## Export metadata (verbatim)

```json
{
  "uuid": "14d66dd4-ec31-4770-90ff-25526dfafa2a",
  "name": "Open source tools for academic drawing",
  "summary": "**Conversation Overview**\n\nThe person is searching for open source Claude Agent Skills (SKILL.md files) relevant to academic drawing, specifically physics diagrams and general scientific figures. They clarified they want SKILL.md-format skills rather than standalone libraries, with a focus on physics diagrams (Feynman diagrams, detector schematics, level schemes) and general scientific figures (plots, flowcharts, pipelines), with no strong output format preference beyond quality.\n\nClaude conducted a multi-step web search and repository fetch to identify relevant skills, presenting findings across direct hits, animation tools, and meta-catalogues. The primary repository identified was K-Dense-AI/claude-scientific-skills (140 skills, MIT license), with additional finds including scunning1975/MixtapeTools for TikZ collision auditing and several Manim-based animation skills. Claude explicitly flagged honest gaps: no dedicated SKILL.md wrappers exist for Feynman diagrams, nuclear level schemes, detector schematics, or nuclear chart plotting.\n\nIn the follow-up, the person shared the K-Dense-AI/scientific-agent-skills repository URL and asked for skills specifically suitable for nuclear physics and physics figures. Claude organized recommendations into four tiers: drawing and figures (Scientific Visualization, Scientific Schematics, Plotly, Mermaid), physics computation (SymPy for Lagrangian/Hamiltonian work, QuTiP for quantum systems), machine learning tools (PyTorch Lightning, Transformers, SHAP, UMAP), and writing/presentation tools (LaTeX Posters, Scientific Slides, Venue Templates, Paper Lookup). Claude noted that Physical Review and nuclear-physics-specific journal templates are absent from the repo, and reiterated the five domain-specific gaps: ENSDF/nuclear data integration, detector simulation (GEANT4/ROOT), HEP file formats (uproot), Feynman diagram precision tools, and nuclear chart plotting. Claude suggested these gaps represent opportunities for the person to author custom skills given their domain expertise.",
  "created_at": "2026-04-17T08:58:00.521369Z",
  "updated_at": "2026-04-17T09:16:06.223113Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-17T08:58:01.151156Z

Find open source skills for academic drawing.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d9aa9-4afa-735f-8e56-6f54f562184b",
  "updated_at": "2026-04-17T08:58:01.151156Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-17T08:58:26.166022Z

 

<details>
<summary>Thinking (verbatim)</summary>

 So Reid is looking for open source tools that can help with academic drawing—things like physics diagrams, scientific figures, and illustrations for papers. Given his background as a physics Master's student and interest in building custom Claude skills, he probably wants something he can integrate or extend. I should clarify what specific types of diagrams he needs and whether he's looking for something he can programmatically control or a more general drawing tool.

</details>

Before I start searching, I want to make sure I target the right thing. "Academic drawing" and "skills" can both mean a few different things in your context, and the search targets are very different depending on which you mean.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-17T08:58:17.780905Z",
  "stop_timestamp": "2026-04-17T08:58:22.382257Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_011eT6D6tKpTtq8vhuz2KEPA",
  "name": "ask_user_input_v0",
  "input": {
    "questions": [
      {
        "type": "single_select",
        "options": [
          "Claude Agent Skills (SKILL.md files, like your concept-visualizer)",
          "Open-source libraries/tools (TikZ, matplotlib, Asymptote, etc.)",
          "Both — curate whatever is useful"
        ],
        "question": "What kind of \"skills\" are you looking for?"
      },
      {
        "type": "multi_select",
        "options": [
          "Physics diagrams (Feynman, detector schematics, level schemes)",
          "General scientific figures (plots, flowcharts, pipelines)",
          "Chemistry/biology-style illustrations",
          "All of the above — broad academic figures"
        ],
        "question": "What does \"academic drawing\" cover for you?"
      },
      {
        "type": "multi_select",
        "options": [
          "TikZ/LaTeX (paper-ready vector)",
          "SVG / HTML (web, slides, Claude artifacts)",
          "Python-generated (matplotlib, plotly, manim)",
          "Don't care — judge by quality"
        ],
        "question": "Output format you care about most?"
      }
    ]
  },
  "message": "Generating ask_user_input_v0...",
  "integration_name": "Dynamic Widget",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
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
  "tool_use_id": "toolu_011eT6D6tKpTtq8vhuz2KEPA",
  "name": "ask_user_input_v0",
  "content": [
    {
      "type": "text",
      "text": "{\n  \"questions\": [\n    {\n      \"question\": \"What kind of \\\"skills\\\" are you looking for?\",\n      \"options\": [\n        \"Claude Agent Skills (SKILL.md files, like your concept-visualizer)\",\n        \"Open-source libraries/tools (TikZ, matplotlib, Asymptote, etc.)\",\n        \"Both \\u2014 curate whatever is useful\"\n      ],\n      \"type\": \"single_select\"\n    },\n    {\n      \"question\": \"What does \\\"academic drawing\\\" cover for you?\",\n      \"options\": [\n        \"Physics diagrams (Feynman, detector schematics, level schemes)\",\n        \"General scientific figures (plots, flowcharts, pipelines)\",\n        \"Chemistry/biology-style illustrations\",\n        \"All of the above \\u2014 broad academic figures\"\n      ],\n      \"type\": \"multi_select\"\n    },\n    {\n      \"question\": \"Output format you care about most?\",\n      \"options\": [\n        \"TikZ/LaTeX (paper-ready vector)\",\n        \"SVG / HTML (web, slides, Claude artifacts)\",\n        \"Python-generated (matplotlib, plotly, manim)\",\n        \"Don't care \\u2014 judge by quality\"\n      ],\n      \"type\": \"multi_select\"\n    }\n  ]\n}",
      "uuid": "3b88ee73-7fec-4d55-9161-db9e712526b5"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Generated ask_user_input_v0 widget",
  "integration_name": "Dynamic Widget",
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": null,
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>



<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d9aa9-4afa-7261-b1ca-06eb0371e41d",
  "updated_at": "2026-04-17T08:58:26.166022Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d9aa9-4afa-735f-8e56-6f54f562184b"
}
```

</details>

### 3. human — 2026-04-17T08:59:35.729279Z

Q: What kind of "skills" are you looking for?
A: Claude Agent Skills (SKILL.md files, like your concept-visualizer)

Q: What does "academic drawing" cover for you? (Select all that apply)
A: Physics diagrams (Feynman, detector schematics, level schemes), General scientific figures (plots, flowcharts, pipelines)

Q: Output format you care about most? (Select all that apply)
A: Don't care — judge by quality

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d9aaa-b887-72b1-a3de-d1b845c8dfbe",
  "updated_at": "2026-04-17T08:59:35.729279Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d9aa9-4afa-7261-b1ca-06eb0371e41d"
}
```

</details>

### 4. assistant — 2026-04-17T09:01:57.731036Z

 

<details>
<summary>Thinking (verbatim)</summary>

 I'm looking for open source Claude Agent Skills in the SKILL.md format that can generate physics diagrams like Feynman diagrams and detector schematics, as well as general scientific visualizations such as plots and flowcharts. Since Claude Agent Skills are a relatively new offering from Anthropic, I'll need to search GitHub and the web for relevant resources that match what the user is looking for.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-17T08:59:41.541938Z",
  "stop_timestamp": "2026-04-17T08:59:41.677196Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_016cL5ufcMKZq2ZTyqGQTmeD",
  "name": "web_search",
  "input": {
    "query": "open source Claude agent skills SKILL.md github repository"
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
  "tool_use_id": "toolu_016cL5ufcMKZq2ZTyqGQTmeD",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - sickn33/antigravity-awesome-skills: Installable GitHub library of 1,400+ agentic skills for Claude Code, Cursor, Codex CLI, Gemini CLI, Antigravity, and more. Includes installer CLI, bundles, workflows, and official/community skill collections. · GitHub",
      "url": "https://github.com/sickn33/antigravity-awesome-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "It is an installable GitHub library of reusable SKILL.md playbooks for Claude Code, Cursor, Codex CLI, Gemini CLI, Antigravity, and related AI coding assistants. The repo packages those skills with an installer CLI, bundles, workflows, generated ...\n\nSECURITY.md for security reporting. We stand on the shoulders of giants. ... This collection would not be possible without the incredible work of the Claude Code community and official sources: anthropics/skills: Official Anthropic skills repository - Document manipulation (DOCX, PDF, PPTX, XLSX), Brand Guidelines, Internal Communications. anthropics/claude-cookbooks: Official notebooks and recipes for building with Claude. remotion-dev/skills: Official Remotion skills - Video creation in React with 28 modular rules. vercel-labs/agent-skills: Vercel Labs official skills - React Best Practices, Web Design Guidelines. openai/skills: OpenAI Codex skills catalog - Agent skills, Skill Creator, Concise Planning. \n\nInstead of collecting one-off prompt snippets, this repository gives you a searchable, installable catalog of skills, bundles, workflows, plugin-safe distributions, and practical docs that help agents perform recurring tasks with better context, stronger constraints, and clearer outputs. You can use this repo to install a broad multi-tool skill library, start from role-based bundles, or jump into workflow-driven execution for planning, coding, debugging, testing, security review, infrastructure, product work, and growth tasks.\n\nRead Plugins for Claude Code and Codex for the full breakdown of full-library install vs plugin install vs bundle plugins. Use the same repository, but install or invoke it in the way your host expects. ... npx antigravity-awesome-skills --path .agents/skills --category development,backend --risk safe,none · opencode run @brainstorming help me plan a feature ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/sickn33/antigravity-awesome-skills",
        "search_provider": "anthropic",
        "age": "2 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - anthropics/skills: Public repository for Agent Skills · GitHub",
      "url": "https://github.com/anthropics/skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "/plugin install document-skills@anthropic-agent-skills /plugin install example-skills@anthropic-agent-skills · After installing the plugin, you can use the skill by just mentioning it. For instance, if you install the document-skills plugin from the marketplace, you can ask Claude Code to do something like: &quot;Use the PDF skill to extract the form fields from path/to/some-file.pdf&quot; These example skills are all already available to paid plans in Claude.ai. To use any skill from this repository or upload custom skills, follow the instructions in Using skills in Claude. You can use Anthropic&#x27;s pre-built skills, and upload custom skills, via the Claude API. See the Skills API Quickstart for more. Skills are simple to create - just a folder with a SKILL.md file containing YAML frontmatter and instructions. \n\nYou can use the template-skill in this repository as a starting point: --- name: my-skill-name description: A clear description of what this skill does and when to use it --- # My Skill Nam\n\nThis repository contains skills that demonstrate what's possible with Claude's skills system. These skills range from creative applications (art, music, design) to technical tasks (testing web apps, MCP server generation) to enterprise workflows (communications, branding, etc.). Each skill is self-contained in its own folder with a SKILL.md file containing the instructions and metadata that Claude uses. Browse through these skills to get inspiration for your own skills or to understand different patterns and approaches. Many skills in this repo are open source (Apache 2.0). We've also included the document creation & editing skills that power Claude's document capabilities under the hood in the skills/docx, skills/pdf, skills/pptx, and skills/xlsx subfolders. \n\nThese are source-available, not open source, but we wanted to share these with developers as a reference for more complex skills that are actively used in a production AI application.\n\nPublic repository for A",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/anthropics/skills",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - alirezarezvani/claude-skills: 232+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory.",
      "url": "https://github.com/alirezarezvani/claude-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "5,200+ GitHub stars — the most comprehensive open-source Claude Code skills &amp; agent plugins library. Claude Code skills (also called agent skills or coding agent plugins) are modular instruction packages that give AI coding agents domain expertise ...\n\n232+ Claude Code skills & agent plugins for Claude Code, Codex, Gemini CLI, Cursor, and 8 more coding agents — engineering, marketing, product, compliance, C-level advisory. - alirezarezvani/claude-skills\n\n5,200+ GitHub stars — the most comprehensive open-source Claude Code skills & agent plugins library. Claude Code skills (also called agent skills or coding agent plugins) are modular instruction packages that give AI coding agents domain expertise they don't have out of the box. \n\nEach skill includes: SKILL.md — structured instructions, workflows, and decision frameworks · Python tools — 305 CLI scripts (all stdlib-only, zero pip installs) Reference docs — templates, checklists, and domain-specific knowledge · One repo, eleven platforms. Works natively as Claude Code plugins, Codex agent skills, Gemini CLI skills, and converts to 8 more tools via scripts/convert.sh. All 305 Python tools run anywhere Python runs. Skills · Agents · Personas · Purpose · How to execute a task · What task to do · Who is thinking · Scope · Single domain ·\n\nDo these skills work with OpenAI Codex / Cursor / Windsurf / Aider? Yes. Skills work natively with 12 tools: Claude Code, OpenAI Codex, Gemini CLI, OpenClaw, Hermes Agent, Cursor, Aider, Windsurf, Kilo Code, OpenCode, Augment, and Antigravity. Hermes Agent uses the same agentskills.io SKILL.md standard — run python scripts/sync-hermes-skills.py to install. \n\nFor other tools run ./scripts/convert.sh --tool all then ./scripts/install.sh --tool <name>. See Multi-Tool Integrations for details. Will updating break my installation? No. We follow semantic versioning and maintain backward compatibility within patch releases. Existing script arguments, plugin source",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/alirezarezvani/claude-skills",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - meetrais/claude-agent-skills: Repository for Claude Agent Skills examples. · GitHub",
      "url": "https://github.com/meetrais/claude-agent-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "claude-agent-skills/ ├── introduction/ # Default Anthropic Skills examples │ ├── anthropic_client_init.py # Centralized client initialization │ ├── anthropic_skills_all.py # Intelligent skill selection (recommended) │ ├── anthropic_skill_xlsx.py # Excel-specific example │ ├── anthropic_skill_pptx.py # PowerPoint-specific example │ ├── anthropic_skill_pdf.py # PDF-specific example │ ├── anthropic_skill_docx.py # Word-specific example │ ├── file_utils.py # File download utilities │ ├── requirements.txt # Python dependencies │ └── .env # Environment variables (create this) ├── custom_skills/ # Custom Skills framework │ ├── run_skill.py # Custom skill runner │ ├── .env # Environment variables (create this) │ └── skills/ # Custom skill definitions │ └── git-analyzer/ # Example: Git repository analyzer │ ├── SKILL.md # Skill instructions │ └── scripts/ # Skill implementation scripts │ ├── analyze_repo.py │ └── get_changed_files.py ├── outputs/ # Generated files directory └── README.md # This\n\n\n\nClone the repository · git clone https://github.com/meetrais/claude-agent-skills.git cd claude-agent-skills · Create a virtual environment (recommended) python -m venv venv # On Windows: venv\\Scripts\\activate # On macOS/Linux: source venv/bin/activate · Install dependencies · cd introduction pip install -r requirements.txt · Set up environment variables · Create a .env file in the introduction/ directory: ANTHROPIC_API_KEY=your-api-key-here ANTHROPIC_MODEL=claude-sonnet-4-5-20250929 · For custom skills, create a .env file in the custom_skills/ directory: ANTHROPIC_API_KEY=your-api-key-here ANTHROPIC_MODEL=claude-sonnet-4-5-20250929 SKILLS_STORAGE_PATH=./skills ·\n\n\n\nclaude-agent-skills/ ├── introduction/ # Default Anthropic Skills examples │ ├── anthropic_client_init.py # Centralized client initializatio",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/meetrais/claude-agent-skills",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - VoltAgent/awesome-agent-skills: A curated collection of 1000+ agent skills from official dev teams and the community, compatible with Claude Code, Codex, Gemini CLI, Cursor, and more. · GitHub",
      "url": "https://github.com/VoltAgent/awesome-agent-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Skill_Seekers - Automatically convert documentation websites, GitHub repositories, and PDFs into Claude AI skills in minutes · NoizAI/skills - Human-like TTS workflows with local/cloud APIs and app delivery · Kevin7Qi/codex-collab - Collaborate with Codex from Claude Code · ethos-link/rails-conventions - Rails 8 conventions for consistent production code changes · ShunsukeHayashi/agent-skill-bus - Self-improving task orchestration for AI agent systems · mcollina/skills - 11 skills by Matteo Collina: Node.js, Fastify, TypeScript, OAuth, Git/GitHub, ESLint neostandard, documentation (Diataxis), Node.js core internals, skill optimizer, and more · Lum1104/understand-anything - Interactive codebase knowledge graphs via multi-agent LLM analysis · hqhq1025/skill-optimizer - Diagnose and optimize Agent Skills (SKILL.md) with real session data and research-backed static analysis.\n\n\n\ngoogleworkspace/gws-shared - Shared authentication, global flags, and output formatting · googleworkspace/gws-drive - Manage Google Drive files, folders, and shared drives · googleworkspace/gws-sheets - Read and write Google Sheets spreadsheets ·\n\ngetsentry/agents-md - Generate and manage AGENTS.md files · getsentry/claude-settings-audit - Audit Claude settings configuration ... Domain-specific knowledge for Azure SDK and Microsoft AI Foundry development. 133 skills across 6 languages.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/VoltAgent/awesome-agent-skills",
        "search_provider": "anthropic",
        "age": "2 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - travisvn/awesome-claude-skills: A curated list of awesome Claude Skills, resources, and tools for customizing Claude AI workflows — particularly Claude Code",
      "url": "https://github.com/travisvn/awesome-claude-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Multi-agent autonomous startup system - orchestrates 37 AI agents across 6 swarms to build, deploy, and operate a complete startup from PRD to revenue ... Security skills for static analysis with CodeQL/Semgrep, variant analysis, code auditing, and vulnerability detection ... More community skills coming soon! Submit a PR to add your skill. yusufkaraaslan/Skill_Seekers - Convert documentation websites into Claude Skills ... my-skill/ ├── SKILL.md # Main skill file with frontmatter ├── scripts/ # Optional executable scripts │ └── helper.py └── resources/ # Optional supporting files └── template.json ... --- name: my-skill description: Brief description for skill discovery (keep concise) --- # Detailed Instructions Claude will read these instructions when the skill is activated. ## Usage Explain how to use this skill...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/travisvn/awesome-claude-skills",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - K-Dense-AI/scientific-agent-skills: A set of ready to use Agent Skills for research, science, engineering, analysis, finance and writing. · GitHub",
      "url": "https://github.com/K-Dense-AI/claude-scientific-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Each skill has its own license specified in the license metadata field within its SKILL.md file. These licenses may differ from the repository's MIT License. Users are responsible for reviewing and adhering to the license terms of each individual skill they use. Q: How often is this updated? A: We regularly update skills to reflect the latest versions of packages and APIs. Major updates are announced in release notes. Q: Can I use this with other AI models? A: The skills follow the open Agent Skills standard and work with any compatible agent, including Cursor, Claude Code, and Codex. Q: Do I need all the Python packages installed? A: No! Only install the packages you need. Each skill specifies its requirements in its SKILL.md file. Q: What if a skill doesn't work? A: First check the Troubleshooting section.\n\nThis project builds on 50+ amazing open source projects. If you find value in these skills, please consider supporting the projects we depend on. ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/K-Dense-AI/claude-scientific-skills",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Agent Skills Marketplace - Claude, Codex & ChatGPT Skills | SkillsMP",
      "url": "https://skillsmp.com",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "skillsmp.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=skillsmp.com",
        "site_name": "SkillsMP"
      },
      "is_missing": false,
      "text": "For OpenAI Codex CLI: Add to ~/.codex/skills/. Both use the same SKILL.md format. Clone the GitHub repository and copy the skill folder to your chosen directory. The AI automatically discovers and loads skills from these locations.\n\nFinding the right agent skill among thousands of GitHub repositories can be overwhelming. Skills Marketplace solves this by providing smart search, occupation-based filtering, and quality indicators to help you quickly find exactly what you need. Whether you're a developer automating workflows, a team lead building custom AI tools, or a hobbyist exploring AI coding assistants, you'll find skills for every use case. All skills use the open SKILL.md standard, compatible with Claude Code, OpenAI Codex CLI, and other tools adopting this format. [INFO] Ready to explore the largest collection of agent skills for AI coding assistants? ... * Search through 800000++ agent skills with intelligent filtering by occupation, author, and popularity. \n\nCompatible with Claude Code, Codex CLI and ChatGPT. ... Your guide to agent skills for Claude Code, OpenAI Codex, and AI coding tools — discover, install, and create custom skills in 2026 ...\n\nBrowse 800000+ agent skills compatible with Claude Code, Codex CLI and ChatGPT. The open standard SKILL.md format for AI coding assistants.\n\nCheck out the skill-creator skill for detailed guidance on creating your own skills. The basic structure requires a SKILL.md file with instructions. You can also add optional scripts and templates. ... * Skills are model-invoked—Claude automatically decides when to use them based on context. Slash commands are user-invoked—you explicitly type the command to trigger them. Skills enable more intelligent, context-aware automation in your workflows. ... * Our scraper regularly syncs with GitHub to fetch the latest skills and updates. When a skill repository is updated on GitHub, the changes will appear on SkillsMP shortly after our next sync.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://skillsmp.com",
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

 I've identified a promising repository for scientific skills under K-Dense-AI, though I need to verify the exact URL since it might be listed as either `scientific-agent-skills` or `claude-scientific-skills`. Let me pull that repo directly and also search for more specialized physics or diagram-focused skills.

</details>

Let me look at the scientific-skills repo directly and search for physics/diagram-specific ones.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-17T08:59:49.260989Z",
  "stop_timestamp": "2026-04-17T08:59:49.501881Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01WjeX4tbwDVBz5gHgP34kcc",
  "name": "web_fetch",
  "input": {
    "url": "https://github.com/K-Dense-AI/scientific-agent-skills"
  },
  "message": "Fetching: https://github.com/K-Dense-AI/scientific-agent-skills",
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
  "tool_use_id": "toolu_01WjeX4tbwDVBz5gHgP34kcc",
  "name": "web_fetch",
  "content": [
    {
      "type": "text",
      "text": "{\"error_type\": \"PERMISSIONS_ERROR\", \"error_message\": \"This URL cannot be fetched because it was not provided by the user nor did it appear in any search/fetch results\"}",
      "uuid": "b914d170-a006-47fa-86bf-9d2e85fc3778"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": "Failed to fetch: https://github.com/K-Dense-AI/scientific-agent-skills",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "subtitles": null,
      "url": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
      "source": "github"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-17T08:59:56.266796Z",
  "stop_timestamp": "2026-04-17T08:59:56.266796Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_018hxGXx8DKSiUgfnE31fvpE",
  "name": "web_fetch",
  "input": {
    "url": "https://github.com/K-Dense-AI/claude-scientific-skills"
  },
  "message": "Fetching: https://github.com/K-Dense-AI/claude-scientific-skills",
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
  "tool_use_id": "toolu_018hxGXx8DKSiUgfnE31fvpE",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - K-Dense-AI/claude-scientific-skills: A set of ready to use scientific skills for Claude",
      "url": "https://github.com/K-Dense-AI/claude-scientific-skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "github"
      },
      "is_missing": false,
      "text": "GitHub - K-Dense-AI/claude-scientific-skills: A set of ready to use scientific skills for Claude\n\n\n\n[Skip to content](#start-of-content)\n\n\n\n\n\n\n\n\n\n\n\n\n\n## Navigation Menu\n\nToggle navigation\n\n[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2FK-Dense-AI%2Fclaude-scientific-skills)\n\nAppearance settings\n\n* Platform\n\n  + AI CODE CREATION\n    - [GitHub CopilotWrite better code with AI](https://github.com/features/copilot)\n    - [GitHub SparkBuild and deploy intelligent apps](https://github.com/features/spark)\n    - [GitHub ModelsManage and compare prompts](https://github.com/features/models)\n    - [MCP RegistryNewIntegrate external tools](https://github.com/mcp)\n  + DEVELOPER WORKFLOWS\n    - [ActionsAutomate any workflow](https://github.com/features/actions)\n    - [CodespacesInstant dev environments](https://github.com/features/codespaces)\n    - [IssuesPlan and track work](https://github.com/features/issues)\n    - [Code ReviewManage code changes](https://github.com/features/code-review)\n  + APPLICATION SECURITY\n    - [GitHub Advanced SecurityFind and fix vulnerabilities](https://github.com/security/advanced-security)\n    - [Code securitySecure your code as you build](https://github.com/security/advanced-security/code-security)\n    - [Secret protectionStop leaks before they start](https://github.com/security/advanced-security/secret-protection)\n  + EXPLORE\n    - [Why GitHub](https://github.com/why-github)\n    - [Documentation](https://docs.github.com)\n    - [Blog](https://github.blog)\n    - [Changelog](https://github.blog/changelog)\n    - [Marketplace](https://github.com/marketplace)\n\n  [View all features](https://github.com/features)\n* Solutions\n\n  + BY COMPANY SIZE\n    - [Enterprises](https://github.com/enterprise)\n    - [Small and medium teams](https://github.com/team)\n    - [Startups](https://github.com/enterprise/startups)\n    - [Nonprofits](https://github.com/solutions/industry/nonprofits)\n  + BY USE CASE\n    - [App Modernization](https://github.com/solutions/use-case/app-modernization)\n    - [DevSecOps](https://github.com/solutions/use-case/devsecops)\n    - [DevOps](https://github.com/solutions/use-case/devops)\n    - [CI/CD](https://github.com/solutions/use-case/ci-cd)\n    - [View all use cases](https://github.com/solutions/use-case)\n  + BY INDUSTRY\n    - [Healthcare](https://github.com/solutions/industry/healthcare)\n    - [Financial services](https://github.com/solutions/industry/financial-services)\n    - [Manufacturing](https://github.com/solutions/industry/manufacturing)\n    - [Government](https://github.com/solutions/industry/government)\n    - [View all industries](https://github.com/solutions/industry)\n\n  [View all solutions](https://github.com/solutions)\n* Resources\n\n  + EXPLORE BY TOPIC\n    - [AI](https://github.com/resources/articles?topic=ai)\n    - [Software Development](https://github.com/resources/articles?topic=software-development)\n    - [DevOps](https://github.com/resources/articles?topic=devops)\n    - [Security](https://github.com/resources/articles?topic=security)\n    - [View all topics](https://github.com/resources/articles)\n  + EXPLORE BY TYPE\n    - [Customer stories](https://github.com/customer-stories)\n    - [Events & webinars](https://github.com/resources/events)\n    - [Ebooks & reports](https://github.com/resources/whitepapers)\n    - [Business insights](https://github.com/solutions/executive-insights)\n    - [GitHub Skills](https://skills.github.com)\n  + SUPPORT & SERVICES\n    - [Documentation](https://docs.github.com)\n    - [Customer support](https://support.github.com)\n    - [Community forum](https://github.com/orgs/community/discussions)\n    - [Trust center](https://github.com/trust-center)\n    - [Partners](https://github.com/partners)\n* Open Source\n\n  + COMMUNITY\n    - [GitHub SponsorsFund open source developers](https://github.com/sponsors)\n  + PROGRAMS\n    - [Security Lab](https://securitylab.github.com)\n    - [Maintainer Community](https://maintainers.github.com)\n    - [Accelerator](https://github.com/accelerator)\n    - [Archive Program](https://archiveprogram.github.com)\n  + REPOSITORIES\n    - [Topics](https://github.com/topics)\n    - [Trending](https://github.com/trending)\n    - [Collections](https://github.com/collections)\n* Enterprise\n\n  + ENTERPRISE SOLUTIONS\n    - [Enterprise platformAI-powered developer platform](https://github.com/enterprise)\n  + AVAILABLE ADD-ONS\n    - [GitHub Advanced SecurityEnterprise-grade security features](https://github.com/security/advanced-security)\n    - [Copilot for BusinessEnterprise-grade AI features](https://github.com/features/copilot/copilot-business)\n    - [Premium SupportEnterprise-grade 24/7 support](https://github.com/premium-support)\n* [Pricing](https://github.com/pricing)\n\nSearch or jump to...\n\n\n# Search code, repositories, users, issues, pull requests...\n\nSearch\n\nClear\n\n[Search syntax tips](https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax)\n\n# Provide feedback\n\nWe read every piece of feedback, and take your input very seriously.\n\n\nInclude my email address so I can be contacted\n\nCancel\n Submit feedback\n\n\n\n\n\n# Saved searches\n\n## Use saved searches to filter your results more quickly\n\nName\n\nQuery\n\nTo see all available qualifiers, see our [documentation](https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax).\n\nCancel\n Create saved search\n\n[Sign in](/login?return_to=https%3A%2F%2Fgithub.com%2FK-Dense-AI%2Fclaude-scientific-skills)\n\n[Sign up](/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&source=header-repo&source_repo=K-Dense-AI%2Fclaude-scientific-skills)\n\nAppearance settings\n\nResetting focus\n\nYou signed in with another tab or window. Reload to refresh your session.\nYou signed out in another tab or window. Reload to refresh your session.\nYou switched accounts on another tab or window. Reload to refresh your session.\n \n\n\nDismiss alert\n\n{{ message }}\n\n[K-Dense-AI](/K-Dense-AI) \n/\n**[claude-scientific-skills](/K-Dense-AI/claude-scientific-skills)**\nPublic\n\n* [Notifications](/login?return_to=%2FK-Dense-AI%2Fclaude-scientific-skills) You must be signed in to change notification settings\n* [Fork\n  924](/login?return_to=%2FK-Dense-AI%2Fclaude-scientific-skills)\n* [Star\n   7.8k](/login?return_to=%2FK-Dense-AI%2Fclaude-scientific-skills)\n\nA set of ready to use scientific skills for Claude\n\n[k-dense.ai](https://k-dense.ai \"https://k-dense.ai\")\n\n### License\n\n[MIT license](/K-Dense-AI/claude-scientific-skills/blob/main/LICENSE.md)\n\n[7.8k\nstars](/K-Dense-AI/claude-scientific-skills/stargazers) [924\nforks](/K-Dense-AI/claude-scientific-skills/forks) [Branches](/K-Dense-AI/claude-scientific-skills/branches) [Tags](/K-Dense-AI/claude-scientific-skills/tags) [Activity](/K-Dense-AI/claude-scientific-skills/activity)\n\n[Star](/login?return_to=%2FK-Dense-AI%2Fclaude-scientific-skills)\n\n[Notifications](/login?return_to=%2FK-Dense-AI%2Fclaude-scientific-skills) You must be signed in to change notification settings\n\n* [Code](/K-Dense-AI/claude-scientific-skills)\n* [Issues\n  0](/K-Dense-AI/claude-scientific-skills/issues)\n* [Pull requests\n  3](/K-Dense-AI/claude-scientific-skills/pulls)\n* [Actions](/K-Dense-AI/claude-scientific-skills/actions)\n* [Security\n  0](/K-Dense-AI/claude-scientific-skills/security)\n* [Insights](/K-Dense-AI/claude-scientific-skills/pulse)\n\nAdditional navigation options\n\n\n* [Code](/K-Dense-AI/claude-scientific-skills)\n* [Issues](/K-Dense-AI/claude-scientific-skills/issues)\n* [Pull requests](/K-Dense-AI/claude-scientific-skills/pulls)\n* [Actions](/K-Dense-AI/claude-scientific-skills/actions)\n* [Security](/K-Dense-AI/claude-scientific-skills/security)\n* [Insights](/K-Dense-AI/claude-scientific-skills/pulse)\n\n# K-Dense-AI/claude-scientific-skills\n\nmain\n\n[Branches](/K-Dense-AI/claude-scientific-skills/branches)[Tags](/K-Dense-AI/claude-scientific-skills/tags)\n\nGo to file\n\nCode\n\nOpen more actions menu\n\n## Folders and files\n\n| Name | | Name | Last commit message | Last commit date |\n| --- | --- | --- | --- | --- |\n| Latest commit   History[236 Commits](/K-Dense-AI/claude-scientific-skills/commits/main/)   236 Commits | | |\n| [.claude-plugin](/K-Dense-AI/claude-scientific-skills/tree/main/.claude-plugin \".claude-plugin\") | | [.claude-plugin](/K-Dense-AI/claude-scientific-skills/tree/main/.claude-plugin \".claude-plugin\") |  |  |\n| [.github/workflows](/K-Dense-AI/claude-scientific-skills/tree/main/.github/workflows \"This path skips through empty directories\") | | [.github/workflows](/K-Dense-AI/claude-scientific-skills/tree/main/.github/workflows \"This path skips through empty directories\") |  |  |\n| [docs](/K-Dense-AI/claude-scientific-skills/tree/main/docs \"docs\") | | [docs](/K-Dense-AI/claude-scientific-skills/tree/main/docs \"docs\") |  |  |\n| [scientific-skills](/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills \"scientific-skills\") | | [scientific-skills](/K-Dense-AI/claude-scientific-skills/tree/main/scientific-skills \"scientific-skills\") |  |  |\n| [.gitignore](/K-Dense-AI/claude-scientific-skills/blob/main/.gitignore \".gitignore\") | | [.gitignore](/K-Dense-AI/claude-scientific-skills/blob/main/.gitignore \".gitignore\") |  |  |\n| [LICENSE.md](/K-Dense-AI/claude-scientific-skills/blob/main/LICENSE.md \"LICENSE.md\") | | [LICENSE.md](/K-Dense-AI/claude-scientific-skills/blob/main/LICENSE.md \"LICENSE.md\") |  |  |\n| [README.md](/K-Dense-AI/claude-scientific-skills/blob/main/README.md \"README.md\") | | [README.md](/K-Dense-AI/claude-scientific-skills/blob/main/README.md \"README.md\") |  |  |\n| View all files | | |\n\n## Repository files navigation\n\n* [README](#)\n* [MIT license](#)\n\n# Claude Scientific Skills\n\n[![License: MIT](https://camo.githubusercontent.com/fdf2982b9f5d7489dcf44570e714e3a15fce6253e0cc6b5aa61a075aac2ff71b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f4c6963656e73652d4d49542d79656c6c6f772e737667)](/K-Dense-AI/claude-scientific-skills/blob/main/LICENSE.md)\n[![Skills](https://camo.githubusercontent.com/16cc604db8b08f7fd455af26fb4f0d2bfa21070dc6f7a66f233f5c307d4b1ec2/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f536b696c6c732d3134302d627269676874677265656e2e737667)](#whats-included)\n\nA comprehensive collection of **140 ready-to-use scientific skills** for Claude, created by [K-Dense](https://k-dense.ai). Transform Claude into your AI research assistant capable of executing complex multi-step scientific workflows across biology, chemistry, medicine, and beyond.\n\n**Looking for the full AI co-scientist experience?** Try [K-Dense Web](https://k-dense.ai) for 200+ skills, cloud compute, and publication-ready outputs.\n\n[![K-Dense Web Demo](/K-Dense-AI/claude-scientific-skills/raw/main/docs/k-dense-web.gif)](https://k-dense.ai)\n\n---\n\n## K-Dense Web - The Full Experience\n\nWant 10x the power with zero setup? **[K-Dense Web](https://k-dense.ai)** is the complete AI co-scientist platform—everything in this repo, plus:\n\n| Feature | This Repo | K-Dense Web |\n| --- | --- | --- |\n| Scientific Skills | 140 skills | **200+ skills** (exclusive access) |\n| Setup Required | Manual installation | **Zero setup** — works instantly |\n| Compute | Your machine | **Cloud GPUs & HPC** included |\n| Workflows | Basic prompts | **End-to-end research pipelines** |\n| Outputs | Code & analysis | **Publication-ready** figures, reports & papers |\n| Integrations | Local tools | **Lab systems, ELNs, cloud storage** |\n\n**Researchers at Stanford, MIT, and leading pharma companies use K-Dense Web to accelerate discoveries.**\n\n**Get $50 in free credits** — no credit card required.\n\n[![Try K-Dense Web](https://camo.githubusercontent.com/f7e5d9737f43fa2da8ca4e31e96d5674a02741892d333a93f984a4c72a335156/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5472795f4b2d2d44656e73655f5765622d53746172745f467265652d626c75653f7374796c653d666f722d7468652d6261646765266c6f676f3d646174613a696d6167652f7376672b786d6c3b6261736536342c50484e325a79423462577875637a30696148523063446f764c336433647935334d793576636d63764d6a41774d43397a646d6369494864705a48526f505349794e434967614756705a326830505349794e434967646d6c6c64304a76654430694d43417749444930494449304969426d6157787350534a756232356c4969427a64484a7661325539496e646f6158526c4969427a64484a766132557464326c6b64476739496a496949484e30636d39725a5331736157356c5932467750534a79623356755a434967633352796232746c4c577870626d567162326c7550534a79623356755a43492b50484268644767675a443069545455674d544a6f4d5451694c7a3438634746306143426b50534a744d5449674e534133494463744e7941334969382b5043397a646d632b)](https://k-dense.ai)\n\n*Learn more at [k-dense.ai](https://k-dense.ai)* | *[Read our detailed comparison →](https://k-dense.ai/blog/k-dense-web-vs-claude-scientific-skills)*\n\n---\n\nThese skills enable Claude to seamlessly work with specialized scientific libraries, databases, and tools across multiple scientific domains:\n\n* 🧬 Bioinformatics & Genomics - Sequence analysis, single-cell RNA-seq, gene regulatory networks, variant annotation, phylogenetic analysis\n* 🧪 Cheminformatics & Drug Discovery - Molecular property prediction, virtual screening, ADMET analysis, molecular docking, lead optimization\n* 🔬 Proteomics & Mass Spectrometry - LC-MS/MS processing, peptide identification, spectral matching, protein quantification\n* 🏥 Clinical Research & Precision Medicine - Clinical trials, pharmacogenomics, variant interpretation, drug safety, clinical decision support, treatment planning\n* 🧠 Healthcare AI & Clinical ML - EHR analysis, physiological signal processing, medical imaging, clinical prediction models\n* 🖼️ Medical Imaging & Digital Pathology - DICOM processing, whole slide image analysis, computational pathology, radiology workflows\n* 🤖 Machine Learning & AI - Deep learning, reinforcement learning, time series analysis, model interpretability, Bayesian methods\n* 🔮 Materials Science & Chemistry - Crystal structure analysis, phase diagrams, metabolic modeling, computational chemistry\n* 🌌 Physics & Astronomy - Astronomical data analysis, coordinate transformations, cosmological calculations, symbolic mathematics, physics computations\n* ⚙️ Engineering & Simulation - Discrete-event simulation, multi-objective optimization, metabolic engineering, systems modeling, process optimization\n* 📊 Data Analysis & Visualization - Statistical analysis, network analysis, time series, publication-quality figures, large-scale data processing, EDA\n* 🧪 Laboratory Automation - Liquid handling protocols, lab equipment control, workflow automation, LIMS integration\n* 📚 Scientific Communication - Literature review, peer review, scientific writing, document processing, posters, slides, schematics, citation management\n* 🔬 Multi-omics & Systems Biology - Multi-modal data integration, pathway analysis, network biology, systems-level insights\n* 🧬 Protein Engineering & Design - Protein language models, structure prediction, sequence design, function annotation\n* 🎓 Research Methodology - Hypothesis generation, scientific brainstorming, critical thinking, grant writing, scholar evaluation\n\n**Transform Claude Code into an 'AI Scientist' on your desktop!**\n\n> ⭐ **If you find this repository useful**, please consider giving it a star! It helps others discover these tools and encourages us to continue maintaining and expanding this collection.\n\n---\n\n## 📦 What's Included\n\nThis repository provides **140 scientific skills** organized into the following categories:\n\n* **28+ Scientific Databases** - Direct API access to OpenAlex, PubMed, bioRxiv, ChEMBL, UniProt, COSMIC, ClinicalTrials.gov, and more\n* **55+ Python Packages** - RDKit, Scanpy, PyTorch Lightning, scikit-learn, BioPython, BioServices, PennyLane, Qiskit, and others\n* **15+ Scientific Integrations** - Benchling, DNAnexus, LatchBio, OMERO, Protocols.io, and more\n* **30+ Analysis & Communication Tools** - Literature review, scientific writing, peer review, document processing, posters, slides, schematics, and more\n* **10+ Research & Clinical Tools** - Hypothesis generation, grant writing, clinical decision support, treatment plans, regulatory compliance\n\nEach skill includes:\n\n* ✅ Comprehensive documentation (`SKILL.md`)\n* ✅ Practical code examples\n* ✅ Use cases and best practices\n* ✅ Integration guides\n* ✅ Reference materials\n\n---\n\n## 📋 Table of Contents\n\n* [What's Included](#whats-included)\n* [Why Use This?](#why-use-this)\n* [Getting Started](#getting-started)\n  + [Claude Code](#claude-code-recommended)\n  + [Cursor IDE](#cursor-ide)\n  + [Any MCP Client](#any-mcp-client-not-for-claude-code)\n* [Support Open Source](#-support-the-open-source-community)\n* [Prerequisites](#prerequisites)\n* [Quick Examples](#quick-examples)\n* [Use Cases](#use-cases)\n* [Available Skills](#available-skills)\n* [Contributing](#contributing)\n* [Troubleshooting](#troubleshooting)\n* [FAQ](#faq)\n* [Support](#support)\n* [Join Our Community](#join-our-community)\n* [Citation](#citation)\n* [License](#license)\n\n---\n\n## 🚀 Why Use This?\n\n### ⚡ **Accelerate Your Research**\n\n* **Save Days of Work** - Skip API documentation research and integration setup\n* **Production-Ready Code** - Tested, validated examples following scientific best practices\n* **Multi-Step Workflows** - Execute complex pipelines with a single prompt\n\n### 🎯 **Comprehensive Coverage**\n\n* **140 Skills** - Extensive coverage across all major scientific domains\n* **28+ Databases** - Direct access to OpenAlex, PubMed, bioRxiv, ChEMBL, UniProt, COSMIC, and more\n* **55+ Python Packages** - RDKit, Scanpy, PyTorch Lightning, scikit-learn, BioServices, PennyLane, Qiskit, and others\n\n### 🔧 **Easy Integration**\n\n* **One-Click Setup** - Install via Claude Code or MCP server\n* **Automatic Discovery** - Claude automatically finds and uses relevant skills\n* **Well Documented** - Each skill includes examples, use cases, and best practices\n\n### 🌟 **Maintained & Supported**\n\n* **Regular Updates** - Continuously maintained and expanded by K-Dense team\n* **Community Driven** - Open source with active community contributions\n* **Enterprise Ready** - Commercial support available for advanced needs\n\n---\n\n## 🎯 Getting Started\n\nChoose your preferred platform to get started:\n\n### 🖥️ Claude Code (Recommended)\n\n> 📚 **New to Claude Code?** Check out the [Claude Code Quickstart Guide](https://docs.claude.com/en/docs/claude-code/quickstart) to get started. When using Claude Code please use the Skills as a plugin. Do not use the MCP server below.\n\n**Step 1: Install Claude Code**\n\n**macOS:**\n\n```\ncurl -fsSL https://claude.ai/install.sh | bash\n```\n\n**Windows:**\n\n```\nirm https://claude.ai/install.ps1 | iex\n```\n\n**Step 2: Register the Marketplace**\n\nIn Claude Code, run the following command:\n\n```\n/plugin marketplace add K-Dense-AI/claude-scientific-skills\n```\n\n**Step 3: Install the Plugin**\n\n**Option A: Direct Install (Fastest)**\n\n```\n/plugin install scientific-skills@claude-scientific-skills\n```\n\n**Option B: Interactive Install**\n\n1. Run `/plugin` in Claude Code\n2. Select **Browse and install plugins**\n3. Choose **claude-scientific-skills** marketplace\n4. Select **scientific-skills**\n5. Click **Install now**\n\n**That's it!** Claude will automatically use the appropriate skills when you describe your scientific tasks.\n\n**Managing Your Plugin:**\n\n```\n# Check installed plugins\n/plugin → Manage Plugins\n\n# Update the plugin to the latest version\n/plugin update scientific-skills@claude-scientific-skills\n\n# Enable/disable the plugin\n/plugin enable scientific-skills@claude-scientific-skills\n/plugin disable scientific-skills@claude-scientific-skills\n\n# Uninstall if needed\n/plugin uninstall scientific-skills@claude-scientific-skills\n```\n\n---\n\n### ⌨️ Cursor IDE\n\nOne-click installation via our hosted MCP server:\n\n[![Install MCP Server](https://camo.githubusercontent.com/ae8711b98f6b99feccfa4c47b29a82aaee09b04829d6d29e6ed410468a4e8296/68747470733a2f2f637572736f722e636f6d2f646565706c696e6b2f6d63702d696e7374616c6c2d6461726b2e737667)](https://cursor.com/en-US/install-mcp?name=claude-scientific-skills&config=eyJ1cmwiOiJodHRwczovL21jcC5rLWRlbnNlLmFpL2NsYXVkZS1zY2llbnRpZmljLXNraWxscy9tY3AifQ%3D%3D)\n\n\n---\n\n### 🔌 Any MCP Client (Not for Claude Code)\n\nAccess all skills via our MCP server in any MCP-compatible client (ChatGPT, Google ADK, OpenAI Agent SDK, etc.):\n\n**Option 1: Hosted MCP Server** (Easiest)\n\n```\nhttps://mcp.k-dense.ai/claude-scientific-skills/mcp\n```\n\n**Option 2: Self-Hosted** (More Control)\n🔗 **[claude-skills-mcp](https://github.com/K-Dense-AI/claude-skills-mcp)** - Deploy your own MCP server\n\n---\n\n## ❤️ Support the Open Source Community\n\nClaude Scientific Skills is powered by **50+ incredible open source projects** maintained by dedicated developers and research communities worldwide. Projects like Biopython, Scanpy, RDKit, scikit-learn, PyTorch Lightning, and many others form the foundation of these skills.\n\n**If you find value in this repository, please consider supporting the projects that make it possible:**\n\n* ⭐ **Star their repositories** on GitHub\n* 💰 **Sponsor maintainers** via GitHub Sponsors or NumFOCUS\n* 📝 **Cite projects** in your publications\n* 💻 **Contribute** code, docs, or bug reports\n\n👉 **[View the full list of projects to support](/K-Dense-AI/claude-scientific-skills/blob/main/docs/open-source-sponsors.md)**\n\n---\n\n## ⚙️ Prerequisites\n\n* **Python**: 3.9+ (3.12+ recommended for best compatibility)\n* **uv**: Python package manager (required for installing skill dependencies)\n* **Client**: Claude Code, Cursor, or any MCP-compatible client\n* **System**: macOS, Linux, or Windows with WSL2\n* **Dependencies**: Automatically handled by individual skills (check `SKILL.md` files for specific requirements)\n\n### Installing uv\n\nThe skills use `uv` as the package manager for installing Python dependencies. Install it using the instructions for your operating system:\n\n**macOS and Linux:**\n\n```\ncurl -LsSf https://astral.sh/uv/install.sh | sh\n```\n\n**Windows:**\n\n```\npowershell -ExecutionPolicy ByPass -c \"irm https://astral.sh/uv/install.ps1 | iex\"\n```\n\n**Alternative (via pip):**\n\n```\npip install uv\n```\n\nAfter installation, verify it works by running:\n\n```\nuv --version\n```\n\nFor more installation options and details, visit the [official uv documentation](https://docs.astral.sh/uv/).\n\n---\n\n## 💡 Quick Examples\n\nOnce you've installed the skills, you can ask Claude to execute complex multi-step scientific workflows. Here are some example prompts:\n\n### 🧪 Drug Discovery Pipeline\n\n**Goal**: Find novel EGFR inhibitors for lung cancer treatment\n\n**Prompt**:\n\n```\nUse available skills you have access to whenever possible. Query ChEMBL for EGFR inhibitors (IC50 < 50nM), analyze structure-activity relationships \nwith RDKit, generate improved analogs with datamol, perform virtual screening with DiffDock \nagainst AlphaFold EGFR structure, search PubMed for resistance mechanisms, check COSMIC for \nmutations, and create visualizations and a comprehensive report.\n```\n\n**Skills Used**: ChEMBL, RDKit, datamol, DiffDock, AlphaFold DB, PubMed, COSMIC, scientific visualization\n\n---\n\n### 🔬 Single-Cell RNA-seq Analysis\n\n**Goal**: Comprehensive analysis of 10X Genomics data with public data integration\n\n**Prompt**:\n\n```\nUse available skills you have access to whenever possible. Load 10X dataset with Scanpy, perform QC and doublet removal, integrate with Cellxgene \nCensus data, identify cell types using NCBI Gene markers, run differential expression with \nPyDESeq2, infer gene regulatory networks with Arboreto, enrich pathways via Reactome/KEGG, \nand identify therapeutic targets with Open Targets.\n```\n\n**Skills Used**: Scanpy, Cellxgene Census, NCBI Gene, PyDESeq2, Arboreto, Reactome, KEGG, Open Targets\n\n---\n\n### 🧬 Multi-Omics Biomarker Discovery\n\n**Goal**: Integrate RNA-seq, proteomics, and metabolomics to predict patient outcomes\n\n**Prompt**:\n\n```\nUse available skills you have access to whenever possible. Analyze RNA-seq with PyDESeq2, process mass spec with pyOpenMS, integrate metabolites from \nHMDB/Metabolomics Workbench, map proteins to pathways (UniProt/KEGG), find interactions via \nSTRING, correlate omics layers with statsmodels, build predictive model with scikit-learn, \nand search ClinicalTrials.gov for relevant trials.\n```\n\n**Skills Used**: PyDESeq2, pyOpenMS, HMDB, Metabolomics Workbench, UniProt, KEGG, STRING, statsmodels, scikit-learn, ClinicalTrials.gov\n\n---\n\n### 🎯 Virtual Screening Campaign\n\n**Goal**: Discover allosteric modulators for protein-protein interactions\n\n**Prompt**:\n\n```\nUse available skills you have access to whenever possible. Retrieve AlphaFold structures, identify interaction interface with BioPython, search ZINC \nfor allosteric candidates (MW 300-500, logP 2-4), filter with RDKit, dock with DiffDock, \nrank with DeepChem, check PubChem suppliers, search USPTO patents, and optimize leads with \nMedChem/molfeat.\n```\n\n**Skills Used**: AlphaFold DB, BioPython, ZINC, RDKit, DiffDock, DeepChem, PubChem, USPTO, MedChem, molfeat\n\n---\n\n### 🏥 Clinical Variant Interpretation\n\n**Goal**: Analyze VCF file for hereditary cancer risk assessment\n\n**Prompt**:\n\n```\nUse available skills you have access to whenever possible. Parse VCF with pysam, annotate variants with Ensembl VEP, query ClinVar for pathogenicity, \ncheck COSMIC for cancer mutations, retrieve gene info from NCBI Gene, analyze protein impact \nwith UniProt, search PubMed for case reports, check ClinPGx for pharmacogenomics, generate \nclinical report with ReportLab, and find matching trials on ClinicalTrials.gov.\n```\n\n**Skills Used**: pysam, Ensembl, ClinVar, COSMIC, NCBI Gene, UniProt, PubMed, ClinPGx, ReportLab, ClinicalTrials.gov\n\n---\n\n### 🌐 Systems Biology Network Analysis\n\n**Goal**: Analyze gene regulatory networks from RNA-seq data\n\n**Prompt**:\n\n```\nUse available skills you have access to whenever possible. Query NCBI Gene for annotations, retrieve sequences from UniProt, identify interactions via \nSTRING, map to Reactome/KEGG pathways, analyze topology with Torch Geometric, reconstruct \nGRNs with Arboreto, assess druggability with Open Targets, model with PyMC, visualize \nnetworks, and search GEO for similar patterns.\n```\n\n**Skills Used**: NCBI Gene, UniProt, STRING, Reactome, KEGG, Torch Geometric, Arboreto, Open Targets, PyMC, GEO\n\n> 📖 **Want more examples?** Check out [docs/examples.md](/K-Dense-AI/claude-scientific-skills/blob/main/docs/examples.md) for comprehensive workflow examples and detailed use cases across all scientific domains.\n\n---\n\n## 🔬 Use Cases\n\n### 🧪 Drug Discovery & Medicinal Chemistry\n\n* **Virtual Screening**: Screen millions of compounds from PubChem/ZINC against protein targets\n* **Lead Optimization**: Analyze structure-activity relationships with RDKit, generate analogs with datamol\n* **ADMET Prediction**: Predict absorption, distribution, metabolism, excretion, and toxicity with DeepChem\n* **Molecular Docking**: Predict binding poses and affinities with DiffDock\n* **Bioactivity Mining**: Query ChEMBL for known inhibitors and analyze SAR patterns\n\n### 🧬 Bioinformatics & Genomics\n\n* **Sequence Analysis**: Process DNA/RNA/protein sequences with BioPython and pysam\n* **Single-Cell Analysis**: Analyze 10X Genomics data with Scanpy, identify cell types, infer GRNs with Arboreto\n* **Variant Annotation**: Annotate VCF files with Ensembl VEP, query ClinVar for pathogenicity\n* **Gene Discovery**: Query NCBI Gene, UniProt, and Ensembl for comprehensive gene information\n* **Network Analysis**: Identify protein-protein interactions via STRING, map to pathways (KEGG, Reactome)\n\n### 🏥 Clinical Research & Precision Medicine\n\n* **Clinical Trials**: Search ClinicalTrials.gov for relevant studies, analyze eligibility criteria\n* **Variant Interpretation**: Annotate variants with ClinVar, COSMIC, and ClinPGx for pharmacogenomics\n* **Drug Safety**: Query FDA databases for adverse events, drug interactions, and recalls\n* **Precision Therapeutics**: Match patient variants to targeted therapies and clinical trials\n\n### 🔬 Multi-Omics & Systems Biology\n\n* **Multi-Omics Integration**: Combine RNA-seq, proteomics, and metabolomics data\n* **Pathway Analysis**: Enrich differentially expressed genes in KEGG/Reactome pathways\n* **Network Biology**: Reconstruct gene regulatory networks, identify hub genes\n* **Biomarker Discovery**: Integrate multi-omics layers to predict patient outcomes\n\n### 📊 Data Analysis & Visualization\n\n* **Statistical Analysis**: Perform hypothesis testing, power analysis, and experimental design\n* **Publication Figures**: Create publication-quality visualizations with matplotlib and seaborn\n* **Network Visualization**: Visualize biological networks with NetworkX\n* **Report Generation**: Generate comprehensive PDF reports with ReportLab\n\n### 🧪 Laboratory Automation\n\n* **Protocol Design**: Create Opentrons protocols for automated liquid handling\n* **LIMS Integration**: Integrate with Benchling and LabArchives for data management\n* **Workflow Automation**: Automate multi-step laboratory workflows\n\n---\n\n## 📚 Available Skills\n\nThis repository contains **140 scientific skills** organized across multiple domains. Each skill provides comprehensive documentation, code examples, and best practices for working with scientific libraries, databases, and tools.\n\n### Skill Categories\n\n#### 🧬 **Bioinformatics & Genomics** (16+ skills)\n\n* Sequence analysis: BioPython, pysam, scikit-bio, BioServices\n* Single-cell analysis: Scanpy, AnnData, scvi-tools, Arboreto, Cellxgene Census\n* Genomic tools: gget, geniml, gtars, deepTools, FlowIO, Zarr\n* Phylogenetics: ETE Toolkit\n\n#### 🧪 **Cheminformatics & Drug Discovery** (11+ skills)\n\n* Molecular manipulation: RDKit, Datamol, Molfeat\n* Deep learning: DeepChem, TorchDrug\n* Docking & screening: DiffDock\n* Cloud quantum chemistry: Rowan (pKa, docking, cofolding)\n* Drug-likeness: MedChem\n* Benchmarks: PyTDC\n\n#### 🔬 **Proteomics & Mass Spectrometry** (2 skills)\n\n* Spectral processing: matchms, pyOpenMS\n\n#### 🏥 **Clinical Research & Precision Medicine** (12+ skills)\n\n* Clinical databases: ClinicalTrials.gov, ClinVar, ClinPGx, COSMIC, FDA Databases\n* Healthcare AI: PyHealth, NeuroKit2, Clinical Decision Support\n* Clinical documentation: Clinical Reports, Treatment Plans\n* Variant analysis: Ensembl, NCBI Gene\n\n#### 🖼️ **Medical Imaging & Digital Pathology** (3 skills)\n\n* DICOM processing: pydicom\n* Whole slide imaging: histolab, PathML\n\n#### 🧠 **Neuroscience & Electrophysiology** (1 skill)\n\n* Neural recordings: Neuropixels-Analysis (extracellular spikes, silicon probes, spike sorting)\n\n#### 🤖 **Machine Learning & AI** (15+ skills)\n\n* Deep learning: PyTorch Lightning, Transformers, Stable Baselines3, PufferLib\n* Classical ML: scikit-learn, scikit-survival, SHAP\n* Time series: aeon\n* Bayesian methods: PyMC\n* Optimization: PyMOO\n* Graph ML: Torch Geometric\n* Dimensionality reduction: UMAP-learn\n* Statistical modeling: statsmodels\n\n#### 🔮 **Materials Science, Chemistry & Physics** (7 skills)\n\n* Materials: Pymatgen\n* Metabolic modeling: COBRApy\n* Astronomy: Astropy\n* Quantum computing: Cirq, PennyLane, Qiskit, QuTiP\n\n#### ⚙️ **Engineering & Simulation** (4 skills)\n\n* Numerical computing: MATLAB/Octave\n* Computational fluid dynamics: FluidSim\n* Discrete-event simulation: SimPy\n* Data processing: Dask, Polars, Vaex\n\n#### 📊 **Data Analysis & Visualization** (14+ skills)\n\n* Visualization: Matplotlib, Seaborn, Plotly, Scientific Visualization\n* Geospatial analysis: GeoPandas\n* Network analysis: NetworkX\n* Symbolic math: SymPy\n* PDF generation: ReportLab\n* Data access: Data Commons\n* Exploratory data analysis: EDA workflows\n* Statistical analysis: Statistical Analysis workflows\n\n#### 🧪 **Laboratory Automation** (3 skills)\n\n* Liquid handling: PyLabRobot\n* Protocol management: Protocols.io\n* LIMS integration: Benchling, LabArchives\n\n#### 🔬 **Multi-omics & Systems Biology** (5+ skills)\n\n* Pathway analysis: KEGG, Reactome, STRING\n* Multi-omics: Denario, HypoGeniC\n* Data management: LaminDB\n\n#### 🧬 **Protein Engineering & Design** (2 skills)\n\n* Protein language models: ESM\n* Cloud laboratory platform: Adaptyv (automated protein testing and validation)\n\n#### 📚 **Scientific Communication** (20+ skills)\n\n* Literature: OpenAlex, PubMed, bioRxiv, Literature Review\n* Web search: Perplexity Search (AI-powered search with real-time information)\n* Writing: Scientific Writing, Peer Review\n* Document processing: XLSX, MarkItDown, Document Skills\n* Publishing: Paper-2-Web, Venue Templates\n* Presentations: Scientific Slides, LaTeX Posters, PPTX Posters\n* Diagrams: Scientific Schematics\n* Citations: Citation Management\n* Illustration: Generate Image (AI image generation with FLUX.2 Pro and Gemini 3 Pro (Nano Banana Pro))\n\n#### 🔬 **Scientific Databases** (28+ skills)\n\n* Protein: UniProt, PDB, AlphaFold DB\n* Chemical: PubChem, ChEMBL, DrugBank, ZINC, HMDB\n* Genomic: Ensembl, NCBI Gene, GEO, ENA, GWAS Catalog\n* Literature: bioRxiv (preprints)\n* Clinical: ClinVar, COSMIC, ClinicalTrials.gov, ClinPGx, FDA Databases\n* Pathways: KEGG, Reactome, STRING\n* Targets: Open Targets\n* Metabolomics: Metabolomics Workbench\n* Enzymes: BRENDA\n* Patents: USPTO\n\n#### 🔧 **Infrastructure & Platforms** (6+ skills)\n\n* Cloud compute: Modal\n* Genomics platforms: DNAnexus, LatchBio\n* Microscopy: OMERO\n* Automation: Opentrons\n* Tool discovery: ToolUniverse, Get Available Resources\n\n#### 🎓 **Research Methodology & Planning** (8+ skills)\n\n* Ideation: Scientific Brainstorming, Hypothesis Generation\n* Critical analysis: Scientific Critical Thinking, Scholar Evaluation\n* Funding: Research Grants\n* Discovery: Research Lookup\n* Market analysis: Market Research Reports\n\n#### ⚖️ **Regulatory & Standards** (1 skill)\n\n* Medical device standards: ISO 13485 Certification\n\n> 📖 **For complete details on all skills**, see [docs/scientific-skills.md](/K-Dense-AI/claude-scientific-skills/blob/main/docs/scientific-skills.md)\n\n> 💡 **Looking for practical examples?** Check out [docs/examples.md](/K-Dense-AI/claude-scientific-skills/blob/main/docs/examples.md) for comprehensive workflow examples across all scientific domains.\n\n---\n\n## 🤝 Contributing\n\nWe welcome contributions to expand and improve this scientific skills repository!\n\n### Ways to Contribute\n\n✨ **Add New Skills**\n\n* Create skills for additional scientific packages or databases\n* Add integrations for scientific platforms and tools\n\n📚 **Improve Existing Skills**\n\n* Enhance documentation with more examples and use cases\n* Add new workflows and reference materials\n* Improve code examples and scripts\n* Fix bugs or update outdated information\n\n🐛 **Report Issues**\n\n* Submit bug reports with detailed reproduction steps\n* Suggest improvements or new features\n\n### How to Contribute\n\n1. **Fork** the repository\n2. **Create** a feature branch (`git checkout -b feature/amazing-skill`)\n3. **Follow** the existing directory structure and documentation patterns\n4. **Ensure** all new skills include comprehensive `SKILL.md` files\n5. **Test** your examples and workflows thoroughly\n6. **Commit** your changes (`git commit -m 'Add amazing skill'`)\n7. **Push** to your branch (`git push origin feature/amazing-skill`)\n8. **Submit** a pull request with a clear description of your changes\n\n### Contribution Guidelines\n\n✅ **Adhere to the [Agent Skills Specification](https://agentskills.io/specification)** — Every skill must follow the official spec (valid `SKILL.md` frontmatter, naming conventions, directory structure)  \n✅ Maintain consistency with existing skill documentation format  \n✅ Ensure all code examples are tested and functional  \n✅ Follow scientific best practices in examples and workflows  \n✅ Update relevant documentation when adding new capabilities  \n✅ Provide clear comments and docstrings in code  \n✅ Include references to official documentation\n\n### Recognition\n\nContributors are recognized in our community and may be featured in:\n\n* Repository contributors list\n* Special mentions in release notes\n* K-Dense community highlights\n\nYour contributions help make scientific computing more accessible and enable researchers to leverage AI tools more effectively!\n\n### Support Open Source\n\nThis project builds on 50+ amazing open source projects. If you find value in these skills, please consider [supporting the projects we depend on](/K-Dense-AI/claude-scientific-skills/blob/main/docs/open-source-sponsors.md).\n\n---\n\n## 🔧 Troubleshooting\n\n### Common Issues\n\n**Problem: Skills not loading in Claude Code**\n\n* Solution: Ensure you've installed the latest version of Claude Code\n* Verify the plugin is installed: `/plugin → Manage Plugins`\n* Try reinstalling: `/plugin uninstall scientific-skills@claude-scientific-skills` then `/plugin install scientific-skills@claude-scientific-skills`\n* Re-add the marketplace if needed: `/plugin marketplace add K-Dense-AI/claude-scientific-skills`\n\n**Problem: Missing Python dependencies**\n\n* Solution: Check the specific `SKILL.md` file for required packages\n* Install dependencies: `uv pip install package-name`\n\n**Problem: API rate limits**\n\n* Solution: Many databases have rate limits. Review the specific database documentation\n* Consider implementing caching or batch requests\n\n**Problem: Authentication errors**\n\n* Solution: Some services require API keys. Check the `SKILL.md` for authentication setup\n* Verify your credentials and permissions\n\n**Problem: Outdated examples**\n\n* Solution: Report the issue via GitHub Issues\n* Check the official package documentation for updated syntax\n\n---\n\n## ❓ FAQ\n\n### General Questions\n\n**Q: Is this free to use?**  \nA: Yes! This repository is MIT licensed. However, each individual skill has its own license specified in the `license` metadata field within its `SKILL.md` file—be sure to review and comply with those terms.\n\n**Q: Why are all skills grouped into one plugin instead of separate plugins?**  \nA: We believe good science in the age of AI is inherently interdisciplinary. Bundling all skills into a single plugin makes it trivial for you (and Claude) to bridge across fields—e.g., combining genomics, cheminformatics, clinical data, and machine learning in one workflow—without worrying about which individual skills to install or wire together.\n\n**Q: Can I use this for commercial projects?**  \nA: The repository itself is MIT licensed, which allows commercial use. However, individual skills may have different licenses—check the `license` field in each skill's `SKILL.md` file to ensure compliance with your intended use.\n\n**Q: Do all skills have the same license?**  \nA: No. Each skill has its own license specified in the `license` metadata field within its `SKILL.md` file. These licenses may differ from the repository's MIT License. Users are responsible for reviewing and adhering to the license terms of each individual skill they use.\n\n**Q: How often is this updated?**  \nA: We regularly update skills to reflect the latest versions of packages and APIs. Major updates are announced in release notes.\n\n**Q: Can I use this with other AI models?**  \nA: The skills are optimized for Claude but can be adapted for other models with MCP support. The MCP server works with any MCP-compatible client.\n\n### Installation & Setup\n\n**Q: Do I need all the Python packages installed?**  \nA: No! Only install the packages you need. Each skill specifies its requirements in its `SKILL.md` file.\n\n**Q: What if a skill doesn't work?**  \nA: First check the [Troubleshooting](#troubleshooting) section. If the issue persists, file an issue on GitHub with detailed reproduction steps.\n\n**Q: Do the skills work offline?**  \nA: Database skills require internet access to query APIs. Package skills work offline once Python dependencies are installed.\n\n### Contributing\n\n**Q: Can I contribute my own skills?**  \nA: Absolutely! We welcome contributions. See the [Contributing](#contributing) section for guidelines and best practices.\n\n**Q: How do I report bugs or suggest features?**  \nA: Open an issue on GitHub with a clear description. For bugs, include reproduction steps and expected vs actual behavior.\n\n---\n\n## 💬 Support\n\nNeed help? Here's how to get support:\n\n* 📖 **Documentation**: Check the relevant `SKILL.md` and `references/` folders\n* 🐛 **Bug Reports**: [Open an issue](https://github.com/K-Dense-AI/claude-scientific-skills/issues)\n* 💡 **Feature Requests**: [Submit a feature request](https://github.com/K-Dense-AI/claude-scientific-skills/issues/new)\n* 💼 **Enterprise Support**: Contact [K-Dense](https://k-dense.ai/) for commercial support\n* 🌐 **MCP Support**: Visit the [claude-skills-mcp](https://github.com/K-Dense-AI/claude-skills-mcp) repository or use our hosted MCP server\n\n---\n\n## 🎉 Join Our Community!\n\n**We'd love to have you join us!** 🚀\n\nConnect with other scientists, researchers, and AI enthusiasts using Claude for scientific computing. Share your discoveries, ask questions, get help with your projects, and collaborate with the community!\n\n🌟 **[Join our Slack Community](https://join.slack.com/t/k-densecommunity/shared_invite/zt-3iajtyls1-EwmkwIZk0g_o74311Tkf5g)** 🌟\n\nWhether you're just getting started or you're a power user, our community is here to support you. We share tips, troubleshoot issues together, showcase cool projects, and discuss the latest developments in AI-powered scientific research.\n\n**See you there!** 💬\n\n---\n\n## 📖 Citation\n\nIf you use Claude Scientific Skills in your research or project, please cite it as:\n\n### BibTeX\n\n```\n@software{claude_scientific_skills_2025,\n  author = {{K-Dense Inc.}},\n  title = {Claude Scientific Skills: A Comprehensive Collection of Scientific Tools for Claude AI},\n  year = {2025},\n  url = {https://github.com/K-Dense-AI/claude-scientific-skills},\n  note = {skills covering databases, packages, integrations, and analysis tools}\n}\n```\n\n### APA\n\n```\nK-Dense Inc. (2025). Claude Scientific Skills: A comprehensive collection of scientific tools for Claude AI [Computer software]. https://github.com/K-Dense-AI/claude-scientific-skills\n```\n\n### MLA\n\n```\nK-Dense Inc. Claude Scientific Skills: A Comprehensive Collection of Scientific Tools for Claude AI. 2025, github.com/K-Dense-AI/claude-scientific-skills.\n```\n\n### Plain Text\n\n```\nClaude Scientific Skills by K-Dense Inc. (2025)\nAvailable at: https://github.com/K-Dense-AI/claude-scientific-skills\n```\n\nWe appreciate acknowledgment in publications, presentations, or projects that benefit from these skills!\n\n---\n\n## 📄 License\n\nThis project is licensed under the **MIT License**.\n\n**Copyright © 2025 K-Dense Inc.** ([k-dense.ai](https://k-dense.ai/))\n\n### Key Points:\n\n* ✅ **Free for any use** (commercial and noncommercial)\n* ✅ **Open source** - modify, distribute, and use freely\n* ✅ **Permissive** - minimal restrictions on reuse\n* ⚠️ **No warranty** - provided \"as is\" without warranty of any kind\n\nSee [LICENSE.md](/K-Dense-AI/claude-scientific-skills/blob/main/LICENSE.md) for full terms.\n\n### Individual Skill Licenses\n\n> ⚠️ **Important**: Each skill has its own license specified in the `license` metadata field within its `SKILL.md` file. These licenses may differ from the repository's MIT License and may include additional terms or restrictions. **Users are responsible for reviewing and adhering to the license terms of each individual skill they use.**\n\n## Star History\n\n[![Star History Chart](https://camo.githubusercontent.com/ee9db426abd4f6095a00c92085df2b9e57aa12bb53bb61759eecb21f7bc859e6/68747470733a2f2f6170692e737461722d686973746f72792e636f6d2f7376673f7265706f733d4b2d44656e73652d41492f636c617564652d736369656e74696669632d736b696c6c7326747970653d64617465266c6567656e643d746f702d6c656674)](https://www.star-history.com/#K-Dense-AI/claude-scientific-skills&type=date&legend=top-left)\n\n## About\n\nA set of ready to use scientific skills for Claude\n\n[k-dense.ai](https://k-dense.ai \"https://k-dense.ai\")\n\n### Topics\n\n[bioinformatics](/topics/bioinformatics \"Topic: bioinformatics\")\n[genomics](/topics/genomics \"Topic: genomics\")\n[computational-biology](/topics/computational-biology \"Topic: computational-biology\")\n[scientific-visualization](/topics/scientific-visualization \"Topic: scientific-visualization\")\n[scientific-computing](/topics/scientific-computing \"Topic: scientific-computing\")\n[drug-discovery](/topics/drug-discovery \"Topic: drug-discovery\")\n[data-analysis](/topics/data-analysis \"Topic: data-analysis\")\n[proteomics](/topics/proteomics \"Topic: proteomics\")\n[metabolomics](/topics/metabolomics \"Topic: metabolomics\")\n[chemoinformatics](/topics/chemoinformatics \"Topic: chemoinformatics\")\n[materials-science](/topics/materials-science \"Topic: materials-science\")\n[clinical-research](/topics/clinical-research \"Topic: clinical-research\")\n[claude](/topics/claude \"Topic: claude\")\n[ai-scientist](/topics/ai-scientist \"Topic: ai-scientist\")\n[claudecode](/topics/claudecode \"Topic: claudecode\")\n[claude-skills](/topics/claude-skills \"Topic: claude-skills\")\n\n### Resources\n\n[Readme](#readme-ov-file)\n\n### License\n\n[MIT license](#MIT-1-ov-file)\n\n### Uh oh!\n\nThere was an error while loading. Please reload this page.\n\n[Activity](/K-Dense-AI/claude-scientific-skills/activity)\n\n[Custom properties](/K-Dense-AI/claude-scientific-skills/custom-properties)\n\n### Stars\n\n[**7.8k**\nstars](/K-Dense-AI/claude-scientific-skills/stargazers)\n\n### Watchers\n\n[**57**\nwatching](/K-Dense-AI/claude-scientific-skills/watchers)\n\n### Forks\n\n[**924**\nforks](/K-Dense-AI/claude-scientific-skills/forks)\n\n[Report repository](/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2FK-Dense-AI%2Fclaude-scientific-skills&report=K-Dense-AI+%28user%29)\n\n## [Releases 50](/K-Dense-AI/claude-scientific-skills/releases)\n\n[v2.18.0\n\nLatest\n\nJan 27, 2026](/K-Dense-AI/claude-scientific-skills/releases/tag/v2.18.0)\n\n[+ 49 releases](/K-Dense-AI/claude-scientific-skills/releases)\n\n## [Contributors 13](/K-Dense-AI/claude-scientific-skills/graphs/contributors)\n\n### Uh oh!\n\nThere was an error while loading. Please reload this page.\n\n## Languages\n\n* [Python\n  76.7%](/K-Dense-AI/claude-scientific-skills/search?l=python)\n* [TeX\n  21.2%](/K-Dense-AI/claude-scientific-skills/search?l=tex)\n* [JavaScript\n  1.5%](/K-Dense-AI/claude-scientific-skills/search?l=javascript)\n* Other\n  0.6%\n\n## Footer\n\n© 2026 GitHub, Inc.\n\n### Footer navigation\n\n* [Terms](https://docs.github.com/site-policy/github-terms/github-terms-of-service)\n* [Privacy](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement)\n* [Security](https://github.com/security)\n* [Status](https://www.githubstatus.com/)\n* [Community](https://github.community/)\n* [Docs](https://docs.github.com/)\n* [Contact](https://support.github.com?tags=dotcom-footer)\n* Manage cookies\n* Do not share my personal information\n\n\n\nYou can’t perform that action at this time.",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://github.com/K-Dense-AI/claude-scientific-skills"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: GitHub - K-Dense-AI/claude-scientific-skills: A set of ready to use scientific skills for Claude",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "GitHub - K-Dense-AI/claude-scientific-skills: A set of ready to use scientific skills for Claude",
      "subtitles": null,
      "url": "https://github.com/K-Dense-AI/claude-scientific-skills",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
      "source": "github"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 I'm finding this repository has strong alignment with Reid's needs, particularly under the Scientific Communication section where there are skills like scientific schematics that directly match physics diagrams, along with capabilities for creating scientific slides, LaTeX posters, and PPTX presentations.

The repo also covers data visualization tools like Matplotlib, Seaborn, and Plotly, plus domain-specific libraries for materials science and physics like SymPy for symbolic math, Qiskit for quantum computing, and Pymatgen for materials analysis. Now I want to dig deeper into the scientific-schematics skill specifically to confirm it handles what I need, and search for other drawing capabilities like Feynman diagrams or TikZ support.

</details>

Let me drill into the specific drawing/diagram skills and search for more targeted ones (Feynman diagrams, TikZ).

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-17T09:00:07.523698Z",
  "stop_timestamp": "2026-04-17T09:00:07.876421Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01CXPAwur49AbrVvadLootpu",
  "name": "web_search",
  "input": {
    "query": "\"scientific-schematics\" OR \"scientific-visualization\" SKILL.md Claude agent skill"
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
  "tool_use_id": "toolu_01CXPAwur49AbrVvadLootpu",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "scientific-agent-skills/scientific-skills/scientific-writing/SKILL.md at main · K-Dense-AI/scientific-agent-skills",
      "url": "https://github.com/K-Dense-AI/claude-scientific-skills/blob/main/scientific-skills/scientific-writing/SKILL.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Creating, formatting, or improving figures, tables, and data visualizations · Applying study-specific reporting guidelines (CONSORT for trials, STROBE for observational studies, PRISMA for reviews) Drafting abstracts that meet journal requirements ...\n\nA set of ready to use Agent Skills for research, science, engineering, analysis, finance and writing. - scientific-agent-skills/scientific-skills/scientific-writing/SKILL.md at main · K-Dense-AI/scientific-agent-skills\n\nEvery document should be richly illustrated. Generate figures liberally - when in doubt, add a visual. ... For detailed guidance, refer to the scientific-schematics and generate-image skill documentation. IMRAD Format: Guide papers through the standard Introduction, Methods, Results, And Discussion structure used across most scientific disciplines. \n\nCreating, formatting, or improving figures, tables, and data visualizations · Applying study-specific reporting guidelines (CONSORT for trials, STROBE for observational studies, PRISMA for reviews) Drafting abstracts that meet journal requirements (structured or unstructured) Preparing manuscripts for submission to specific journals · Improving writing clarity, conciseness, and precision · Ensuring proper use of field-specific terminology and nomenclature · Addressing reviewer comments and revising manuscripts · ⚠️ MANDATORY: Every scientific paper MUST include a graphical abstract plus 1-2 additional AI-generated figures using the scientific-schematics skill. This is not optional. Scientific papers without visual elements are incomplete. Before finalizing any document: ALWAYS generate a graphical abstract as the first visual element · Generate at minimum ONE additional schematic or diagram using scientific-schematics ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/K-Dense-AI/claude-scientific-skills/blob/main/scientific-skills/scientific-writing/SKILL.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Scientific Schematics | Skills Marke...",
      "url": "https://lobehub.com/skills/iamseungpil-claude-for-dslab-scientific-schematics",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "lobehub.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=lobehub.com",
        "site_name": "LobeHub"
      },
      "is_missing": false,
      "text": "Agent prompt · Curl https://lobehub.com/skills/iamseungpil-claude-for-dslab-scientific-schematics/skill.md, then follow the instructions to set up LobeHub Skills Marketplace and install the skill. Once installed, read the SKILL.md file in the installed directory and follow its instructions to complete the task. Copiar promptCompartilhar · Detalhes · references · scripts · SKILL.md · What happens behind the scenes: Generation 1: Nano Banana Pro creates initial image following scientific diagram best practices · Review 1: Gemini 3 Pro evaluates quality against document-type threshold · Decision: If quality &gt;= threshold → DONE (no more iterations needed!) If below threshold: Improved prompt based on critique, regenerate · Repeat: Until quality meets threshold OR max iterations reached · Smart Iteration Benefits: ✅ Saves API calls if first generation is good enough ·\n\n\n\nAgent prompt · Curl https://lobehub.com/skills/iamseungpil-claude-for-dslab-scientific-schematics/skill.md, then follow the instructions to set up LobeHub Skills Marketplace and install the skill. Once installed, read the SKILL.md file in the installed directory and follow its instructions to complete the task. Copiar promptCompartilhar · Detalhes · references · scripts · SKILL.md · What happens behind the scenes: Generation 1: Nano Banana Pro creates initial image following scientific diagram best practices · Review 1: Gemini 3 Pro evaluates quality against document-type threshold · Decision: If quality >= threshold → DONE (no more iterations needed!) If below threshold: Improved prompt based on critique, regenerate · Repeat: Until quality meets threshold OR max iterations reached · Smart Iteration Benefits: ✅ Saves API calls if first generation is good enough ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://lobehub.com/skills/iamseungpil-claude-for-dslab-scientific-schematics",
        "search_provider": "anthropic",
        "age": "March 11, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "claude-code-templates/cli-tool/components/skills/scientific/scientific-schematics/SKILL.md at main · davila7/claude-code-templates",
      "url": "https://github.com/davila7/claude-code-templates/blob/main/cli-tool/components/skills/scientific/scientific-schematics/SKILL.md?plain=1",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Scientific schematics and diagrams transform complex concepts into clear visual representations for publication. **This skill uses Nano Banana Pro AI for diagram generation with Gemini 3 Pro quality review.** ... **Simply describe what you want, ...\n\nCLI tool for configuring and monitoring Claude Code - davila7/claude-code-templates\n\nScientific schematics and diagrams transform complex concepts into clear visual representations for publication. **This skill uses Nano Banana Pro AI for diagram generation with Gemini 3 Pro quality review.** ... **Simply describe what you want, and Nano Banana Pro creates it.** All diagrams are stored in the figures/ subfolder and referenced in papers/posters. ... Create any scientific diagram by simply describing it. Nano Banana Pro handles everything automatically with **smart iteration**: ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/davila7/claude-code-templates/blob/main/cli-tool/components/skills/scientific/scientific-schematics/SKILL.md?plain=1",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "claude-code-templates/cli-tool/components/skills/scientific/document-skills/pptx/SKILL.md at main · davila7/claude-code-templates",
      "url": "https://github.com/davila7/claude-code-templates/blob/main/cli-tool/components/skills/scientific/document-skills/pptx/SKILL.md?plain=1",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "**When creating documents with ... new documents:** Scientific schematics should be generated by default to visually represent key concepts, workflows, architectures, or relationships described in the text....\n\nCLI tool for configuring and monitoring Claude Code - davila7/claude-code-templates\n\n**When creating documents with this skill, always consider adding scientific diagrams and schematics to enhance visual communication.** ... **For new documents:** Scientific schematics should be generated by default to visually represent key concepts, workflows, architectures, or relationships described in the text. ... For detailed guidance on creating schematics, refer to the scientific-schematics skill documentation. ... Raw XML access is required for: comments, speaker notes, slide layouts, animations, design elements, and complex formatting. For any of these features, unpack a presentation and read its raw XML contents. ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/davila7/claude-code-templates/blob/main/cli-tool/components/skills/scientific/document-skills/pptx/SKILL.md?plain=1",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "scientific-visualization skill by k-dense-ai/claude-scientific-skills",
      "url": "https://playbooks.com/skills/k-dense-ai/claude-scientific-skills/scientific-visualization",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "playbooks.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=playbooks.com",
        "site_name": "Playbooks"
      },
      "is_missing": false,
      "text": "Files (11) assets · references · scripts SKILL.md25.7 KB · SKILL.md · 25.7 KB · --- name: scientific-visualization description: Meta-skill for publication-ready figures. Use when creating journal submission figures requiring multi-panel ...\n\nnpx playbooks add skill k-dense-ai/claude-scientific-skills --skill scientific-visualization · Review the files below or copy the command above to add this skill to your agents. Files (11) assets · references · scripts SKILL.md25.7 KB · SKILL.md · 25.7 KB · --- name: scientific-visualization description: Meta-skill for publication-ready figures. Use when creating journal submission figures requiring multi-panel layouts, significance annotations, error bars, colorblind-safe palettes, and specific journal formatting (Nature, Science, Cell). Orchestrates matplotlib/seaborn/plotly with publication styles. For quick exploration use seaborn or plotly directly. license: MIT license metadata: skill-author: K-Dense Inc. \n\n--- # Scientific Visualization ## Overview Scientific visualization transforms data into clear, accurate figures for publication. Create journal-ready plots with multi-panel layouts, error bars, significance markers, and colorblind-safe palettes.\n\nnpx playbooks add skill k-dense-ai/claude-scientific-skills --skill scientific-visualization · Review the files below or copy the command above to add this skill to your agents. ... --- name: scientific-visualization description: Meta-skill for publication-ready figures. Use when creating journal submission figures requiring multi-panel layouts, significance annotations, error bars, colorblind-safe palettes, and specific journal formatting (Nature, Science, Cell). Orchestrates matplotlib/seaborn/plotly with publication styles. For quick exploration use seaborn or plotly directly. license: MIT license metadata: skill-author: K-Dense Inc. \n\n--- # Scientific Visualization ## Overview Scientific visualization transforms data into clear, accurate figures for publication",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://playbooks.com/skills/k-dense-ai/claude-scientific-skills/scientific-visualization",
        "search_provider": "anthropic",
        "age": "January 26, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "scientific-schematics - Agent Skill by davila7/claude-code-templates",
      "url": "https://agentskills.so/zh/skills/davila7-claude-code-templates-scientific-schematics",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "agentskills.so",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=agentskills.so",
        "site_name": "Agent Skill"
      },
      "is_missing": false,
      "text": "Scientific schematics and diagrams transform complex concepts into clear visual representations for publication. This skill uses Nano Banana Pro AI for diagram generation with Gemini 3 Pro quality review.\n\nScientific schematics and diagrams transform complex concepts into clear visual representations for publication. This skill uses Nano Banana Pro AI for diagram generation with Gemini 3 Pro quality review. ... Simply describe what you want, and Nano Banana Pro creates it. All diagrams are stored in the figures/ subfolder and referenced in papers/posters. Create any scientific diagram by simply describing it.\n\nEach iteration is evaluated for scientific accuracy, clarity, and accessibility. \n\nClarity over complexity - Simplify, remove unnecessary elements · Consistent styling - Use templates and style files · Colorblind accessibility - Use Okabe-Ito palette, redundant encoding · Appropriate typography - Sans-serif fonts, minimum 7-8 pt · Vector format - Always use PDF/SVG for publication · Resolution - Vector preferred, or 300+ DPI for raster · File format - PDF for LaTeX, SVG for web, PNG as fallback · Color space - RGB for digital, CMYK for print (convert if needed) ... Science Figure Guidelines: https://www.science.org/content/page/instructions-preparing-initial-manuscript · CONSORT Diagram: http://www.consort-statement.org/consort-statement/flow-diagram ... Use this skill to create clear, accessible, publication-quality diagrams that effectively communicate complex scientific concepts.\n\npython scripts/generate_schematic.py \"your diagram description\" -o output.png ... No coding, no templates, no manual drawing required. \n\nThe AI generation system uses smart iteration - it only regenerates if quality is below the threshold for your document type: ┌─────────────────────────────────────────────────────┐ │ 1. Generate image with Nano Banana Pro │",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://agentskills.so/zh/skills/davila7-claude-code-templates-scientific-schematics",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "scientific-schematics - Claude Skill - Awesome Skills - Agent Skills Marketplace for Claude, Codex & ChatGPT",
      "url": "https://awesomeskill.ai/skill/claude-scientific-skills-scientific-schematics",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "awesomeskill.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=awesomeskill.ai",
        "site_name": "Awesomeskill"
      },
      "is_missing": false,
      "text": "The scientific-schematics skill enables users to create high-quality scientific diagrams effortlessly using the advanced capabilities of Nano Banana Pro AI. This skill addresses the common challenge of visually representing complex scientific ...\n\nData Science & ML#data-visualization#data-science#scientific-visualization#diagram-generation#scientific-diagrams#research#nano-banana-pro#scientific#bioinformatics#science#publication-quality#ai-tools#visualization#neural-networks ... The scientific-schematics skill enables users to create high-quality scientific diagrams effortlessly using the advanced capabilities of Nano Banana Pro AI. This skill addresses the common challenge of visually representing complex scientific concepts in a manner suitable for publication. \n\nBy transforming natural language descriptions into publication-quality visuals, it streamlines the process of generating diagrams that adhere to the stringent quality requirements of various document types, ensuring clarity and precision in scientific communication. You can generate a diagram by describing it in natural language and executing the provided command in your terminal.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://awesomeskill.ai/skill/claude-scientific-skills-scientific-schematics",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "scientific-schematics — AI agent skill | explainx.ai | explainx.ai",
      "url": "https://explainx.ai/skills/davila7/claude-code-templates/scientific-schematics",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "explainx.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=explainx.ai",
        "site_name": "Explainx"
      },
      "is_missing": false,
      "text": "Scientific schematics and diagrams transform complex concepts into clear visual representations for publication. This skill uses Nano Banana Pro AI for diagram generation with Gemini 3 Pro quality review.\n\nI recommend scientific-schematics for anyone iterating fast on agent tooling; clear intent and a small, reviewable surface area. ... Useful defaults in scientific-schematics — fewer surprises than typical one-off scripts, and it plays nicely with `npx skills` flows. ... scientific-schematics has been reliable in day-to-day use. Documentation quality is above average for community skills. ... Solid pick for teams standardizing on skills: scientific-schematics is focused, and the summary matches what you get after install. ... We added scientific-schematics from the explainx registry; install was straightforward and the SKILL.md answered most questions upfront.\n\nScientific schematics and diagrams transform complex concepts into clear visual representations for publication.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://explainx.ai/skills/davila7/claude-code-templates/scientific-schematics",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "scientific-schematics — Claude Code Skill | FastMCP",
      "url": "https://fastmcp.me/skills/details/803/scientific-schematics",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "fastmcp.me",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=fastmcp.me",
        "site_name": "FastMCP"
      },
      "is_missing": false,
      "text": "Only regenerates if quality is below threshold for your document type. Specialized in neural network architectures, system diagrams, flowcharts, biological pathways, and complex scientific visualizations.\n\nNew-Item -Path \"$HOME/.gemini/antigravity/skills/scientific-schematics\" -ItemType Directory -Force; Invoke-WebRequest -Uri \"https://fastmcp.me/Skills/Download/803\" -OutFile \"skill.zip\"; Expand-Archive -Path \"skill.zip\" -DestinationPath \"$HOME/.gemini/antigravity/skills/scientific-schematics\" -Force; Remove-Item \"skill.zip\" Copy · Create publication-quality scientific diagrams using Nano Banana Pro AI with smart iterative refinement. Uses Gemini 3 Pro for quality review. Only regenerates if quality is below threshold for your document type. Specialized in neural network architectures, system diagrams, flowcharts, biological pathways, and complex scientific visualizations. \n\nNew-Item -Path \"$HOME/.copilot/skills/scientific-schematics\" -ItemType Directory -Force; Invoke-WebRequest -Uri \"https://fastmcp.me/Skills/Download/803\" -OutFile \"skill.zip\"; Expand-Archive -Path \"skill.zip\" -DestinationPath \"$HOME/.copilot/skills/scientific-schematics\" -Force; Remove-Item \"skill.zip\" Copy · Run one of these commands to install the skill depending on your needs: ... mkdir -p .agent/skills/scientific-schematics && curl -L -o skill.zip \"https://fastmcp.me/Skills/Download/803\" && unzip -o skill.zip -d .agent/skills/scientific-schematics && rm skill.zip · New-Item -Path \".agent/skills/scientific-schematics\" -ItemType Directory -Force; Invoke-WebRequest -Uri \"https://fastmcp.me/Skills/Download/803\" -OutFile \"skill.zip\"; Expand-Archive -Path \"skill.zip\" -DestinationPath \".agent/skills/scientific-schematics\" -Force; Remove-Item \"skill.zip\" Copy ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://fastmcp.me/skills/details/803/scientific-schematics",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "scientific-schematics - Claude Code Skill by K-Dense-AI",
      "url": "https://skillsmp.com/skills/k-dense-ai-claude-scientific-writer-claude-skills-scientific-schematics-skill-md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "skillsmp.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=skillsmp.com",
        "site_name": "Skillsmp"
      },
      "is_missing": false,
      "text": "AI generation is the default method for all diagram types. Generates high-fidelity images with automatic quality review. Specialized in neural network architectures, system diagrams, flowcharts, biological pathways, and complex scientific visualizations.&quot; $ git log --oneline --stat · stars:159 ...\n\nAI generation is the default method for all diagram types. Generates high-fidelity images with automatic quality review. \n\nSpecialized in neural network architectures, system diagrams, flowcharts, biological pathways, and complex scientific visualizations.\" $ git log --oneline --stat · stars:159 · forks:24 · updated:November 26, 2025 at 17:38 · marketplace:true · SKILL.mdreadonly · package.json · \"author\": \"K-Dense-AI\" \"repository\": \"K-Dense-AI/claude-scientific-writer\"$ git clone · $ download --localman · wget skill.zip · [HINT] Download the complete skill directory including SKILL.md and all related files · $ install --marketplacedocs · $ /plugin marketplace add K-Dense-AI/claude-scientific-writer · [INFO] Copy and paste this command into Claude Code to install the skill · related-imports.ts · // Related Skills · import scientific-schematics ·\n\npython scripts/generate_schematic.py \"your diagram description\" -o output.png ... No coding, no templates, no manual drawing required. The AI generation system uses a sophisticated three-iteration refinement process: ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://skillsmp.com/skills/k-dense-ai-claude-scientific-writer-claude-skills-scientific-schematics-skill-md",
        "search_provider": "anthropic",
        "age": "November 26, 2025"
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

 Now I'm looking into more specialized physics visualization skills like Feynman diagrams, TikZ, and other domain-specific drawing techniques.

</details>

Now let me search specifically for physics diagram skills (Feynman, TikZ, detector-style).

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-17T09:00:13.560729Z",
  "stop_timestamp": "2026-04-17T09:00:14.095641Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01WhhQoLZHEDFynPvoFcC2it",
  "name": "web_search",
  "input": {
    "query": "Claude skill SKILL.md TikZ Feynman diagram physics LaTeX github"
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
  "tool_use_id": "toolu_01WhhQoLZHEDFynPvoFcC2it",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - ndpvt-web/latex-document-skill: Universal LaTeX document skill for Claude Code: 27 templates, 22 scripts, 22 reference guides. Made with Claude Code on ✦ HappyCapy AI ✦ platform",
      "url": "https://github.com/ndpvt-web/latex-document-skill",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "lecture-notes.tex: Palatino fonts, tcolorbox with semantic colors -- blue theorems, green definitions, orange examples, purple remarks. TikZ graph theory macros, custom math operators (\\E, \\Var, \\Cov). Numbered publications ([J1], [C1], [W1]), grants with dollar amounts, student advising (current + graduated), professional service, invited talks. ORCID and Google Scholar links. Custom problem/solution environments, code listings (Python, Java, C++, Matlab), honor code section. Toggle solutions globally with \\showsolutionstrue/\\showsolutionsfalse. siunitx for uncertainties and SI units, pgfplots for data with error bars, structured sections: abstract -&gt; theory -&gt; procedure -&gt; data -&gt; analysis -&gt; discussion -&gt; conclusion. Interactive workflow asks: conference -&gt; orientation -&gt; layout -&gt; color scheme. ... Conference presets: NeurIPS, ICML, CVPR, ICLR (main + workshop sizes).\n\n\n\nAn 80-page handwritten math PDF becomes color-coded lecture notes with proper equations and TikZ diagrams. A 162-page textbook becomes a 2-page cheat sheet. A CSV becomes nine chart types. A one-line prompt becomes a thesis, a resume, a conference poster, or a 37-page book with drop caps. No LaTeX knowledge required. The capybara handles the semicolons. (Spoiler: more than most humans with a PhD in LaTeX.) ... pdf_to_images.sh renders at 200 DPI -> batch-7 parallel OCR agents -> math-notes.md profile generates colored tcolorbox theorems (blue), definitions (green), examples (orange) -> compile_latex.sh runs multi-pass pdflatex -> polished PDF with proper equations, proofs, and TikZ diagrams · \"Turn this 162-page scan into a 2-page cheat sheet\" pdf_to_images.sh splits PDF -> vision OCR per page -> extracts key content -> symbol substitution -> telegram-style compression -> fits into cheatsheet.tex with 3-column landscape 7pt layout ...\n\n\n\nInteractive: asks orientation -> layout -> color scheme -> generates A0 tikzposter with correct dimensions and QR codes ... exam cla",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/ndpvt-web/latex-document-skill",
        "search_provider": "anthropic",
        "age": "February 16, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - delibae/claude-prism: An offline-first scientific writing workspace powered by Claude. LaTeX + Python + 100+ scientific skills all running locally. · GitHub",
      "url": "https://github.com/delibae/claude-prism",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Materials Science, Lab Automation, Proteomics, Physics, ... Skills are installed globally (~/.claude/skills/) or per-project, and Claude automatically loads them when relevant. Pick a template (paper, thesis, presentation, poster, letter, etc.), give it a name, optionally describe what you&#x27;re writing — ClaudePrism sets up the project and generates initial content with AI. Drag &amp; drop reference files (PDF, BIB, images) and start writing immediately. Chat with Claude directly in the editor. Select between Sonnet, Opus, Haiku models with adjustable reasoning effort levels. Persistent sessions, tool use (file edit, bash, search), and extensible slash commands. Every save creates a snapshot in a local Git repository (.claudeprism/history.git/). Label important checkpoints, browse diffs between any two snapshots, and restore previous versions. \n\nWhen Claude suggests edits, changes appear in a dedicated panel with visual diffs — accept or reject per chunk, or apply/undo all at once (⌘Y / ⌘N).\n\nMaterials Science, Lab Automation, Proteomics, Physics, ... Skills are installed globally (~/.claude/skills/) or per-project, and Claude automatically loads them when relevant. Pick a template (paper, thesis, presentation, poster, letter, etc.), give it a name, optionally describe what you're writing — ClaudePrism sets up the project and generates initial content with AI. Drag & drop reference files (PDF, BIB, images) and start writing immediately. Chat with Claude directly in the editor. Select between Sonnet, Opus, Haiku models with adjustable reasoning effort levels. Persistent sessions, tool use (file edit, bash, search), and extensible slash commands. Every save creates a snapshot in a local Git repository (.claudeprism/history.git/). \n\nLabel important checkpoints, browse diffs between any two snapshots, and restore previous versions. When Claude suggests edits, changes appear in a dedicated panel with visual diffs — accept or reject per chunk, or apply/undo",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/delibae/claude-prism",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "claude-scientific-skills/docs/scientific-skills.md at main",
      "url": "https://github.com/K-Dense-AI/claude-scientific-skills/blob/main/docs/scientific-skills.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "A set of ready to use Agent Skills for research, science, engineering, analysis, finance and writing. - scientific-agent-skills/docs/scientific-skills.md at main · K-Dense-AI/scientific-agent-skills\n\nLaTeX Posters - Create professional research posters in LaTeX using beamerposter, tikzposter, or baposter. Support for conference presentations, academic posters, and scientific communication with layout design, color schemes, multi-column formats, figure integration, and poster-specific best practices. Features compliance with conference size requirements (A0, A1, 36×48\"), complex multi-column layouts, and integration of figures, tables, equations, and citations. Use cases: conference poster sessions, thesis defenses, symposia presentations, and research group templates · Market Research Reports - Generate comprehensive market research reports (50+ pages) in the style of top consulting firms (McKinsey, BCG, Gartner). \n\nFeatures professional LaTeX formatting, extensive visual generation, deep integration with research-lookup for data gathering, and multi-framework strategic analysis including Porter's Five Forces, PESTLE, SWOT, TAM/SAM/SOM, and BCG Matrix.\n\nSymPy - Symbolic mathematics in Python for exact computation using mathematical symbols rather than numerical approximations.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/K-Dense-AI/claude-scientific-skills/blob/main/docs/scientific-skills.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "tikz-feynman/README.md at main · JP-Ellis/tikz-feynman",
      "url": "https://github.com/JP-Ellis/tikz-feynman/blob/main/README.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Many more are given in the [documentation][documentation]: ```latex \\feynmandiagram [horizontal=a to b] { i1 -- [fermion] a -- [fermion] i2, a -- [photon] b, f1 -- [fermion] b -- [fermion] f2, }; ``` ```latex \\feynmandiagram [large, vertical=e to f] { a -- [fermion] b -- [photon, momentum=\\(k\\)] c -- [fermion] d, b -- [fermion, momentum&#x27;=\\(p_{1}\\)] e -- [fermion, momentum&#x27;=\\(p_{2}\\)] c, e -- [gluon] f, h -- [fermion] f -- [fermion] i; }; ``` ```latex \\begin{tikzpicture} \\begin{feynman} \\vertex (a1) {\\(\\overline b\\)}; \\vertex[right=1cm of a1] (a2); \\vertex[right=1cm of a2] (a3); \\vertex[right=1cm of a3] (a4) {\\(b\\)}; \\vertex[right=1cm of a4] (a5); \\vertex[right=2cm of a5] (a6) {\\(u\\)}; \\vertex[below=2em of a1] (b1) {\\(d\\)}; \\vertex[right=1cm of b1] (b2); \\vertex[right=1cm of b2] (b3); \\vertex[right=1cm of b3] (b4) {\\(\\overline d\\)}; \\vertex[below=2em of a6] (b5) {\\(\\overline d\\)}; \\vertex[above\n\n\n\nTikZ-Feynman is a LaTeX package allowing Feynman diagrams to be easily generated within LaTeX with minimal user instructions and without the need of external programs. It builds upon the TikZ package and leverages the graph placement algorithms from TikZ in order to automate the placement of many vertices. TikZ-Feynman still allows fine-tuned placement of vertices so that even complex diagrams can still be generated with ease. TikZ-Feynman is made available through the [Comprehensive TeX Archive Network (CTAN)][ctan] and comes with some thorough [documentation][documentation] containing a tutorial and many examples. Please refer to the [project page][projectpage] for additional information. TikZ-Feynman is open source and contribution are welcome. If you have any suggestions, feature requests, or have found any bugs, feel free to create a new issue or pull request on Github.\n\nBelow are a few example to demonstrate how easy diagram can be, and how extensible it can be.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/JP-Ellis/tikz-feynman/blob/main/README.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - JP-Ellis/tikz-feynman: Feynman Diagrams with TikZ · GitHub",
      "url": "https://github.com/JP-Ellis/tikz-feynman",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "```latex \\feynmandiagram [large, vertical=e to f] { a -- [fermion] b -- [photon, momentum=\\(k\\)] c -- [fermion] d, b -- [fermion, momentum&#x27;=\\(p_{1}\\)] e -- [fermion, momentum&#x27;=\\(p_{2}\\)] c, e -- [gluon] f, h -- [fermion] f -- [fermion] i; }; ``` ```latex \\begin{tikzpicture} \\begin{feynman} \\vertex (a1) {\\(\\overline b\\)}; \\vertex[right=1cm of a1] (a2); \\vertex[right=1cm of a2] (a3); \\vertex[right=1cm of a3] (a4) {\\(b\\)}; \\vertex[right=1cm of a4] (a5); \\vertex[right=2cm of a5] (a6) {\\(u\\)}; \\vertex[below=2em of a1] (b1) {\\(d\\)}; \\vertex[right=1cm of b1] (b2); \\vertex[right=1cm of b2] (b3); \\vertex[right=1cm of b3] (b4) {\\(\\overline d\\)}; \\vertex[below=2em of a6] (b5) {\\(\\overline d\\)}; \\vertex[above=of a6] (c1) {\\(\\overline u\\)}; \\vertex[above=2em of c1] (c3) {\\(d\\)}; \\vertex at ($(c1)!0.5!(c3) - (1cm, 0)$) (c2); \\diagram* { {[edges=fermion] (b1) -- (b2) -- (a2) -- (a1), (b5) -- (b4) -- (b3) -- (a3) -- (a4) -- (a5) -- (a6), }, (a2) -- [boson, edge label=\\(W\\)] (a3), (b2) -- [boson, edge \n\n\n\nTikZ-Feynman is a LaTeX package allowing Feynman diagrams to be easily generated within LaTeX with minimal user instructions and without the need of external programs. It builds upon the TikZ package and leverages the graph placement algorithms from TikZ in order to automate the placement of many vertices. TikZ-Feynman still allows fine-tuned placement of vertices so that even complex diagrams can still be generated with ease. TikZ-Feynman is made available through the [Comprehensive TeX Archive Network (CTAN)][ctan] and comes with some thorough [documentation][documentation] containing a tutorial and many examples. Please refer to the [project page][projectpage] for additional information. TikZ-Feynman is open source and contribution are welcome. If you have any suggestions, feature requests, or have found any bugs, feel free to create a new issue or pull request on Github.\n\n\n\n```latex \\feynmandiagram [large, vertical=e to f] { a -- [fermion] b -- [photon, momentum=\\(k\\)",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/JP-Ellis/tikz-feynman",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - transientlunatic/tikz-feyn: A LaTeX package to draw Feynman diagrams using TikZ · GitHub",
      "url": "https://github.com/transientlunatic/tikz-feyn",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "A LaTeX package to draw Feynman diagrams using TikZ - transientlunatic/tikz-feyn\n\nTikz-feyn is a LaTeX package which generates Feynman diagrams using the PGF/TikZ package. ... Feature requests, bugs, feedback, and comments are always welcome! I originally created this package to make typing notes for a quantum field theory class easier, but now it's available for the whole world to use. You'll need the tikz, xparse, and ifthen packages for LaTeX, all of which are available in texlive. ... tfeyn produces display-style diagrams, which are suitable for standalone diagrams or equations, for example · tfeynin produces inline Feynman diagrams which can be inserted into text, or into an equation, for example · tfeynma produces diagrams sized for math mode with adjustable scaling · In the current implementation of Tikz-feyn each Feynman diagram is composed of a number of columns. For example, contains four columns. We construct a column using the \\tfcol macro: ...\n\n\n\nEach particle in a Feynman diagram is represented as an edge, and in Tikz-feyn, each particle is created by styling an edge. The following styles are available: ... You can implement your own particle styles by defining new TikZ styles. For example: \\tikzset{ meson/.style={ dashed, thick }, m/.style={meson} } Then use it like any built-in particle: \\tf[m]{i,o} You can also combine styles with standard TikZ options: \\tf[p, red, thick]{i,o} % A thick red photon \\tf[f, blue, ->]{i,o} % A blue fermion with arrow ... The package includes a comprehensive test suite (test-suite.tex) that exercises all features. All tests are automatically run via GitHub Actions on every push and pull request. ... The CI system will automatically verify that your changes compile correctly. This project uses GitHub Actions for automated testing: ... See .github/workflows/README.md for more details.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/transientlunatic/tikz-feyn",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "My Claude Code Setup",
      "url": "https://psantanna.com/claude-code-my-workflow/workflow-guide.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "psantanna.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=psantanna.com",
        "site_name": "Psantanna"
      },
      "is_missing": false,
      "text": "That is the ceiling, not the floor. Start with just CLAUDE.md and 2–3 skills (/compile-latex, /proofread, /commit). Add rules and agents as you discover what you need. The template is designed for progressive adoption: fork it, fill in the placeholders, and start working.\n\nRules tikz-prevention.md + tikz-measurement.md — Upstream authoring rules (P1–P6) and the six-pass collision protocol with formulas (Bézier depth, character widths, 0.4 cm boundary clearance). Adapted from Scott Cunningham’s MixtapeTools. /new-diagram skill — Scaffolds from the gallery, runs the P3/P4 grep pre-check before compiling, invokes tikz-reviewer with measurement citations, loops until APPROVED. For existing diagrams in a Beamer deck, /extract-tikz runs the same pre-check plus the SVG pipeline.\n\nThis guide describes the full system — 14 agents, 28 skills, 24 rules. That is the ceiling, not the floor. Start with just CLAUDE.md and 2–3 skills (/compile-latex, /proofread, /commit).",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://psantanna.com/claude-code-my-workflow/workflow-guide.html",
        "search_provider": "anthropic",
        "age": "1 month ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "note/hep/src/tikz-feynman.md at master · gravitional/note",
      "url": "https://github.com/gravitional/note/blob/master/hep/src/tikz-feynman.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "% No invisible edge to keep the two photons together \\feynmandiagram [small, horizontal=a to\n\nSo far, the examples have only used the photon and fermion styles. The TikZ-Feynman package comes with quite a few extra styles for edges and vertices which are all documented over in section 3. As an example, it is possible to add momentum arrows with momentum=<text>, and in the case of end vertices, the particle can be labelled with particle=<text>. As an example, we take the generic s-channel diagram from section 2.2 and make it a $e^+ ...\n\nTikZ-Feynman provides a new way to draw Feynman diagrams in LATEX that does not rely on external programs and uses a clear extensible syntax. If you use TikZ-Feynman in an academic setting, please cite: J. Ellis, \"TikZ-Feynman: Feynmandiagrams with TikZ\", (2016), arXiv: 1601.05437 [hep-ph] ... This command will process <options> using \\pgfkeys with the default path set to /tikzfeynman.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/gravitional/note/blob/master/hep/src/tikz-feynman.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "{TikZ-Feynman} Feynman diagrams with TikZ Version 1.0.0 19th January 2016",
      "url": "https://arxiv.org/pdf/1601.05437",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arXiv"
      },
      "is_missing": false,
      "text": "Changes the vertical alignment of the Feynman diagram such that it diagram’s baseline is at the node specified.\n\nTikZ-Feynman provides a new way to draw Feynman diagrams in LATEX that does not rely on external programs ... Feynman diagrams provide a description of interactions of subatomic particles in a form that is clearer and more · succinct than the corresponding mathematical description. They were introduced by Feynman and first appear · in his paper ‘Space-Time Approach to Quantum Electrodynamics’ [1]. Since then, LATEX has become widely · used to type-set scientific papers and currently, two leading methods of drawing Feynman diagrams in LATEX are · feynMF/feynMP [2] and AxoDraw [3], with the latter also featuring a gui front-end called JaxoDraw [4, 5]. Both feynMF/feynMP and AxoDraw have quite complicated syntax. As an example, the code to generate an ℓℓ→ℓℓ ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://arxiv.org/pdf/1601.05437",
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

 I'm finding some promising resources here. There's a LaTeX template that combines Palatino fonts with tcolorbox and TikZ for creating structured physics lab reports with all the standard sections, and I'm also seeing references to TikZ-related documentation that could be useful for the visualization aspects.

I should dig into that psantanna workflow repository since they explicitly mention TikZ skills, and I want to track down what Scott Cunningham's MixtapeTools adaptation looks like since it keeps coming up in these references.

</details>

Let me look at the psantanna workflow (TikZ diagram skills) and search for MixtapeTools which it cites.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-17T09:00:26.778382Z",
  "stop_timestamp": "2026-04-17T09:00:26.990406Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01KtzkVZUvBvMqg42tVD9V67",
  "name": "web_search",
  "input": {
    "query": "Scott Cunningham \"MixtapeTools\" Claude Code TikZ skills github"
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
  "tool_use_id": "toolu_01KtzkVZUvBvMqg42tVD9V67",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Claude Code 41: Updating my workflow and skills",
      "url": "https://causalinf.substack.com/p/claude-code-41-updating-my-workflow",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "substack.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=substack.com",
        "site_name": "Substack"
      },
      "is_missing": false,
      "text": "I’m a beginner when it comes to making skills. These are mine. They’re available at github.com/scunning1975/mixtapetools, and I’d welcome anyone who wants to adapt them, improve them, or tell me what I’m missing.\n\nThese are mine. They’re available at github.com/scunning1975/mixtapetools, and I’d welcome anyone who wants to adapt them, improve them, or tell me what I’m missing. That’s how the split-pdf improvements happened, and I suspect it’s how the next ones will too. Share Scott's Mixtape Substack · 34 · 8 · 3 · Share · Previous · CommentsRestacks · Billy Buchanan 3d · Liked by scott cunningham · You may have better luck by moving away from Beamer and TikZ to tools with significantly more examples on the web on an on-going basis. Reveal.js is the tool I've been using for at least a decade now for slide deck. \n\nI really like being about to group slides into horizontal and vertical transitions based on the material itself; my rule is generally that new topics get a horizontal transition and details on a topic get vertical transitions (like diving deeper into the topic).\n\nI’m a beginner when it comes to making skills. These are mine. They’re available at github.com/scunning1975/mixtapetools, and I’d welcome anyone who wants to adapt them, improve them, or tell me what I’m missing. That’s how the split-pdf improvements happened, and I suspect it’s how the next ones will too. ... You may have better luck by moving away from Beamer and TikZ to tools with significantly more examples on the web on an on-going basis. Reveal.js is the tool I've been using for at least a decade now for slide deck. \n\nI really like being about to group slides into horizontal and vertical transitions based on the material itself; my rule is generally that new topics get a horizontal transition and details on a topic get vertical transitions (like diving deeper into the topic). Mermaid.js is also a reasonably capable diagramming tool if you just need stuff",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://causalinf.substack.com/p/claude-code-41-updating-my-workflow",
        "search_provider": "anthropic",
        "age": "4 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - scunning1975/MixtapeTools: Tools for coding, teaching, and presentations with AI assistance · GitHub",
      "url": "https://github.com/scunning1975/MixtapeTools",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Scott Cunningham — Professor of Economics at Baylor University ... Substack: causalinf.substack.com — I write regularly about causal inference, Claude Code, and random things · Free book: Causal Inference: The Mixtape — available online ...\n\nScott Cunningham — Professor of Economics at Baylor University ... Substack: causalinf.substack.com — I write regularly about causal inference, Claude Code, and random things · Free book: Causal Inference: The Mixtape — available online · Location: workflow.md | Deck: presentations/examples/workflow_deck/ Before diving into specific tools, read my workflow document. It explains how I think about using Claude Code for empirical research—not just the tools, but the philosophy behind them. ... Everything else in this repo implements these principles. \n\nLocation: skills/referee2/ | personas/referee2.md (full protocol) Referee 2 is a health inspector for empirical research — a systematic five-audit protocol with cross-language replication, formal referee reports, and a revise & resubmit process. It runs after a project is complete, in a fresh terminal, by a Claude instance that has never seen the work.\n\nHouse style: Define your preferred \"Professional/Academic\" palette in your CLAUDE.md. The skill checks for it. If none is defined, it uses a sensible default. ... Usage: Type /compiledeck when creating or editing a Beamer deck. Location: skills/tikz/ | .claude/skills/tikz/SKILL.md (actual skill) A Claude Code skill — invoke with /tikz path/to/file.tex — that systematically audits and fixes every visual collision in every TikZ figure in a LaTeX file. Labels sitting on arrows, text inside boxes, arrows crossing each other — found and fixed using measurement, not intuition. \n\nThe problem it solves: TikZ compiles silently even when labels overlap arrows or text bleeds into box edges. The compiler catches nothing. This skill catches everything. How it works: Six ordered passes, each targeting a specific class of co",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/scunning1975/MixtapeTools",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - pedrohcgs/claude-code-my-workflow: A ready-to-fork Claude Code template for academics using LaTeX/Beamer + R. Multi-agent review, quality gates, adversarial QA, and replication protocols. · GitHub",
      "url": "https://github.com/pedrohcgs/claude-code-my-workflow",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "claudeblattman by Chris Blattman (U Chicago) — Comprehensive guide for non-technical academics: executive assistant workflows, proposal writing, agent debates, and self-improving configuration · MixtapeTools by Scott Cunningham (Baylor) — The Rhetoric of Decks: philosophy and practice of beautiful, rhetorically effective academic presentations · autoresearch by Andrej Karpathy — Constraint-based autonomous research with program.md as constitutional document · ClaudeCodeTools — &quot;The Editor&quot; persona: seven-audit sequential paper review protocol · See the guide&#x27;s ecosystem section for detailed descriptions, design principles, and more resources. What&#x27;s new: see CHANGELOG.md. We follow loose semver — breaking changes get major bumps so you can decide when to pull updates. How to contribute: see .github/CONTRIBUTING.md. PRs welcome for generalizable improvements; fork-specific work stays in your fork.\n\n\n\nclaudeblattman by Chris Blattman (U Chicago) — Comprehensive guide for non-technical academics: executive assistant workflows, proposal writing, agent debates, and self-improving configuration · MixtapeTools by Scott Cunningham (Baylor) — The Rhetoric of Decks: philosophy and practice of beautiful, rhetorically effective academic presentations · autoresearch by Andrej Karpathy — Constraint-based autonomous research with program.md as constitutional document · ClaudeCodeTools — \"The Editor\" persona: seven-audit sequential paper review protocol · See the guide's ecosystem section for detailed descriptions, design principles, and more resources. What's new: see CHANGELOG.md. We follow loose semver — breaking changes get major bumps so you can decide when to pull updates. How to contribute: see .github/CONTRIBUTING.md. PRs welcome for generalizable improvements; fork-specific work stays in your fork.\n\n\n\nThe Ecosystem — extensions by clo-author, claudeblattman, MixtapeTools, autoresearch, ClaudeCodeTools, and a growing communi",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/pedrohcgs/claude-code-my-workflow",
        "search_provider": "anthropic",
        "age": "1 month ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "scott cunningham (@causalinf)",
      "url": "https://substack.com/@causalinf/note/c-240677435",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "substack.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=substack.com",
        "site_name": "Substack"
      },
      "is_missing": false,
      "text": "I think we start with a standard ... focus on four skills I have in my mixtapetools repo: beautiful_deck (to make beautiful presentations), split-pdf, Tikz and referee2. You can read them in action....",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://substack.com/@causalinf/note/c-240677435",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "MixtapeTools/skills at main · scunning1975/MixtapeTools",
      "url": "https://github.com/scunning1975/MixtapeTools/tree/main/skills",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Uses the PDF in place (no centralized articles/ folder), splits into 4-page chunks in a _build/ directory, reads in batches of ~12 pages, writes structured notes, and saves a persistent _text.md extraction so future invocations skip re-reading. When called by another skill, reads inside a subagent to prevent context bloat. See full walkthrough → ... Scaffolds a new research project with standard directory structure, CLAUDE.md template, and document\n\nEnd-to-end beautiful deck creation. Designs an original Beamer .sty (or Quarto/Typst style) per audience, restructures content via the Rhetoric of Decks with the pedagogical movement Narrative → Application → Picture → Codeblock → Technical, generates figures code-first, writes safe TikZ from the start using explicit node dimensions, coordinate maps, and canonical templates (Step 4.4), compiles to zero warnings, runs /tikz for residual collision repair, and dispatches rhetoric + graphics audit sub-agents. \n\nThe key insight: prevention in Step 4.4 is worth ten repair passes in Step 6. See documentation → ... The mechanical compile loop — preamble templates, palette reference, and TikZ rules. Called by /beautiful_deck for compile mechanics. Use directly when editing an existing deck rather than building from scratch. See documentation → ...\n\nClaude Code is a way to work with Claude directly on your computer — you type instructions, and Claude reads files, writes code, searches the web, and carries out tasks for you. If you've used Claude in the browser, Claude Code is the version that can actually do things on your machine. Skills are pre-written workflows for Claude Code. Think of them as recipes. You type a short command (like /split-pdf), and Claude follows a detailed set of instructions to carry out a complex, multi-step task automatically. Without the skill, you'd have to explain every step yourself each time. With the skill, it's one command.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/scunning1975/MixtapeTools/tree/main/skills",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "MixtapeTools/.claude/skills/tikz/SKILL.md at main · scunning1975/MixtapeTools",
      "url": "https://github.com/scunning1975/MixtapeTools/blob/main/.claude/skills/tikz/SKILL.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "The fundamental rule: Claude cannot reliably eyeball where TikZ elements land. All placement must be verified mathematically before declaring it safe. If the user specified a file, use it. If not, ask. Then: grep -n &quot;tikzpicture\\|begin{frame}\\|node\\|draw\\|bend\\|foreach&quot; [file].tex | head -100 · Get a sense of scope: how many TikZ diagrams, how many frames, how many arrows. Full rules and formulas are in ~/mixtapetools/.claude/skills/compiledeck/tikz_rules.md. Read it if you haven&#x27;t. What follows is the operational checklist — the reference file has the formulas. grep -n &quot;node.*{&quot; [file].tex | grep -v &quot;^[[:space:]]*%&quot; If the same diagram appears on multiple slides: colors, positions, and font sizes must be identical across all instances. Only the deliberate change (a new highlight, a new node) should differ. ... chord_length = distance between the two endpoints max_depth = (chord_length / 2) × tan(bend_angle / 2) safe_zone = max_depth + 0.5cm ...\n\n\n\nTools for coding, teaching, and presentations with AI assistance - scunning1975/MixtapeTools\n\nThe fundamental rule: Claude cannot reliably eyeball where TikZ elements land. All placement must be verified mathematically before declaring it safe. If the user specified a file, use it. If not, ask. Then: grep -n \"tikzpicture\\|begin{frame}\\|node\\|draw\\|bend\\|foreach\" [file].tex | head -100 · Get a sense of scope: how many TikZ diagrams, how many frames, how many arrows. Full rules and formulas are in ~/mixtapetools/.claude/skills/compiledeck/tikz_rules.md. Read it if you haven't. What follows is the operational checklist — the reference file has the formulas. grep -n \"node.*{\" [file].tex | grep -v \"^[[:space:]]*%\" If the same diagram appears on multiple slides: colors, positions, and font sizes must be identical across all instances. Only the deliberate change (a new highlight, a new node) should differ. ... \n\nchord_length = distance between the two endpoints max_depth = (chord_length",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/scunning1975/MixtapeTools/blob/main/.claude/skills/tikz/SKILL.md",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "MixtapeTools/.claude/skills/compiledeck/tikz_rules.md at main · scunning1975/MixtapeTools",
      "url": "https://github.com/scunning1975/MixtapeTools/blob/main/.claude/skills/compiledeck/tikz_rules.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Sub-rule: Bézier-first for matplotlib arrows (the arc3 formula). The TikZ Bézier workflow (Pass 1) has an exact equivalent for matplotlib&#x27;s arc3 connectionstyle. You MUST compute curve positions before placing labels — the same &quot;Claude cannot eyeball where a curve passes&quot; rule applies to Python figures. ... # For ax.annotate with connectionstyle=&#x27;arc3,rad=R&#x27;: # Start: (x1, y1), End: (x2, y2) dx, dy = x2 - x1, y2 - y1 cx = (x1 + x2) / 2 + R * dy # control point x cy = (y1 + y2) / 2 - R * dx # control point y · To find where the curve passes at any x-coordinate, use the quadratic Bézier formula: B(t) = (1-t)²·P0 + 2(1-t)t·P1 + t²·P2, t ∈ [0,1] Solve for t at the desired x, then compute y(t). Use numerical sampling if needed.\n\nTools for coding, teaching, and presentations with AI assistance - scunning1975/MixtapeTools\n\nThese rules prevent rendering errors — text on top of arrows, arrows crossing arrows, labels spilling over boxes. \n\nThe compiler catches none of these. You must catch them yourself. These rules apply to BOTH TikZ diagrams AND matplotlib/Python figures. Every time you create or edit TikZ in a deck, follow this order. Do not skip steps. Do not audit only the slide you just touched — audit the entire deck. Before checking geometry, check continuity. When the same diagram, cycle, or visual element appears on more than one slide: Colors must match. If \"Inspect\" is Slate on slide 31, it must be Slate on slide 32. Grep for repeated node names or labels across frames. Layout must match. Same nodes at same positions, same spacing, same font sizes. Deliberate changes must be the ONLY changes. If slide 32 adds a red rectangle to highlight the bottleneck, that should be the only difference from slide 31.\n\nNever guess arrow positions. Every attempt to place labels by visual intuition or simple offsets from endpoints will fail. The formula is the only reliable method — just as in TikZ.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/scunning1975/MixtapeTools/blob/main/.claude/skills/compiledeck/tikz_rules.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "MixtapeTools/skills/beautiful_deck at main · scunning1975/MixtapeTools",
      "url": "https://github.com/scunning1975/MixtapeTools/tree/main/skills/beautiful_deck",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "The scale=0.55 pattern — shrinking a large TikZ figure to fit a Beamer column — was the #1 source of label collisions in Scott's decks. The TikZ coordinates compress but font sizes do not, so a label that \"should\" be 1.5 units from another label is actually only 0.8 cm away, and the text is still rendered at native size. The collision is invisible in the source code and invisible to /tikz unless it compensates for the scale factor (which it often fails to do). Rule 5 eliminates the entire failure class by forbidding the pattern. The pipeline is now: prevention (Step 4.4) → compile (Step 5) → residual repair (Step 7, /tikz). Most collisions should never be generated in the first place. If the same compile error persists after 3 different fix attempts, stop editing and tell the user. Quote the error, list what you tried, and ask how to proceed.\n\n/tikz — the measurement-based TikZ collision audit. Invoked during the visual cleanup step.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/scunning1975/MixtapeTools/tree/main/skills/beautiful_deck",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "My Claude Code Setup",
      "url": "https://psantanna.com/claude-code-my-workflow/workflow-guide.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "psantanna.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=psantanna.com",
        "site_name": "Psantanna"
      },
      "is_missing": false,
      "text": "Rules tikz-prevention.md + tikz-measurement.md — Upstream authoring rules (P1–P6) and the six-pass collision protocol with formulas (Bézier depth, character widths, 0.4 cm boundary clearance). Adapted from Scott Cunningham’s MixtapeTools. /new-diagram skill — Scaffolds from the gallery, runs the P3/P4 grep pre-check before compiling, invokes tikz-reviewer with measurement citations, loops until APPROVED. For existing diagrams in a Beamer deck, /extract-tikz runs the same pre-check plus the SVG pipeline.\n\nThis workflow was developed over 6+ sessions building a PhD course on Causal Panel Data. The result: 6 complete lectures (140+ slides each), with Beamer + Quarto versions, interactive Plotly charts, TikZ diagrams, and R replication scripts — all managed by the orchestrator and reviewed by 14 specialized agents across 5 quality dimensions.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://psantanna.com/claude-code-my-workflow/workflow-guide.html",
        "search_provider": "anthropic",
        "age": "1 month ago"
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

 Let me do a few more targeted searches to round out the picture—one for visualization and animation skills, and another specifically for nuclear physics and particle detector expertise.

</details>

One more check — nuclear/particle physics specific drawing tools, and any manim/animation skills for teaching.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-17T09:00:34.460329Z",
  "stop_timestamp": "2026-04-17T09:00:34.790630Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_0121bCU59uNHmQdb67rdXyAX",
  "name": "web_search",
  "input": {
    "query": "\"SKILL.md\" manim animation scientific physics github claude skill"
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
  "tool_use_id": "toolu_0121bCU59uNHmQdb67rdXyAX",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - HarleyCoops/Math-To-Manim: Create Epic Math and Physics Animations & Study Notes From Text and Images. · GitHub",
      "url": "https://github.com/HarleyCoops/Math-To-Manim",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "skill/ ├── .claude-plugin/plugin.json └── skills/math-to-manim/ ├── SKILL.md # Core workflow definition ├── references/ # Detailed documentation │ ├── reverse-knowledge-tree.md # Algorithm deep-dive │ ├── agent-system-prompts.md # All 6 agent prompts │ ├── verbose-prompt-format.md # 2000+ token template │ └── manim-code-patterns.md # Code generation patterns └── examples/ └── pythagorean-theorem/ # Complete workflow example · Requirements: Claude Code CLI + Python 3.10+ + Manim ... A journey from Robert Brown&#x27;s microscope to Einstein&#x27;s heat equation, arriving at the Black-Scholes model for financial options pricing. ... A fractal Archimedean solid where every vertex spawns another complete rhombicosidodecahedron. ... Stereographic projection of S3 fibers creating nested tori - pure topology rendered in 3D.\n\nUse Math-To-Manim directly in Claude Code — no setup required. \n\nJust install the skill and start creating animations with natural language. # Clone and run with the skill git clone https://github.com/HarleyCoops/Math-To-Manim.git claude --plugin-dir ./Math-To-Manim/skill ... No training data. No examples needed. Pure LLM reasoning builds pedagogically sound animations that flow from foundations to advanced topics.\n\nCreate Epic Math and Physics Animations & Study Notes From Text and Images. - HarleyCoops/Math-To-Manim\n\n\n\nskill/ ├── .claude-plugin/plugin.json └── skills/math-to-manim/ ├── SKILL.md # Core workflow definition ├── references/ # Detailed documentation │ ├── reverse-knowledge-tree.md # Algorithm deep-dive │ ├── agent-system-prompts.md # All 6 agent prompts │ ├── verbose-prompt-format.md # 2000+ token template │ └── manim-code-patterns.md # Code generation patterns └── examples/ └── pythagorean-theorem/ # Complete workflow example · Requirements: Claude Code CLI + Python 3.10+ + Manim ... A journey from Ro",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/HarleyCoops/Math-To-Manim",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - awesome-skills/manim-skill: Manim animation skill for Claude Code - create programmatic animations for technical blogs and educational content · GitHub",
      "url": "https://github.com/awesome-skills/manim-skill",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "When provided with SKILL.md and relevant references/ docs, AI agents can autonomously: Step · What the agent does · 1. Pattern selection · Choose the right animation type (bars, graphs, diagrams, 3D, camera moves) 2. Code generation · Write correct ManimCE scene code from your description · 3. Rendering · Execute render commands with appropriate quality flags · 4. Troubleshooting · Fix FFmpeg, TeX, font, and environment issues automatically · 5. Iteration · Refine timing, colors, and layout until the output matches your intent · Agent / IDE · How to use · Codex · Install as a native skill folder (~/.codex/skills/...) Claude Code / Cursor / Cline · Use SKILL.md + references/ as project instructions or prompt context · Other agents · Use this repository as a structured Manim playbook · Option 1: Codex native skill · # macOS / Linux python ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \\ --repo awesome-skills/manim-skill \\ --path .\n\n\n\nWhen provided with SKILL.md and relevant references/ docs, AI agents can autonomously: Step · What the agent does · 1. Pattern selection · Choose the right animation type (bars, graphs, diagrams, 3D, camera moves) 2. Code generation · Write correct ManimCE scene code from your description · 3. Rendering · Execute render commands with appropriate quality flags · 4. Troubleshooting · Fix FFmpeg, TeX, font, and environment issues automatically · 5. Iteration · Refine timing, colors, and layout until the output matches your intent · Agent / IDE · How to use · Codex · Install as a native skill folder (~/.codex/skills/...) Claude Code / Cursor / Cline · Use SKILL.md + references/ as project instructions or prompt context · Other agents · Use this repository as a structured Manim playbook · Option 1: Codex native skill · # macOS / Linux python ~/.codex/skills/.system/skill-installer/scripts/install-skill-from-github.py \\ --repo awesome-skills/manim-skill \\ --path .\n\n\n\nmanim-skil",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/awesome-skills/manim-skill",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Math-To-Manim/README.md at main · HarleyCoops/Math-To-Manim",
      "url": "https://github.com/HarleyCoops/Math-To-Manim/blob/main/README.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Use Math-To-Manim directly in Claude Code — no setup required. Just install the skill and start creating animations with natural language. # Clone and run with the skill git clone https://github.com/HarleyCoops/Math-To-Manim.git claude ...\n\nCreate Epic Math and Physics Animations & Study Notes From Text and Images. - Math-To-Manim/README.md at main · HarleyCoops/Math-To-Manim\n\n\n\nOur agents generate these verbose prompts automatically by walking the knowledge tree. ... See CONTRIBUTING.md for guidelines. Claude Code Skill - Use Math-To-Manim in Claude Code (NEW!) ... Built with recursive reasoning, not training data.\n\nUse Math-To-Manim directly in Claude Code — no setup required. Just install the skill and start creating animations with natural language. # Clone and run with the skill git clone https://github.com/HarleyCoops/Math-To-Manim.git claude --plugin-dir ./Math-To-Manim/skill ... No training data. No examples needed. Pure LLM reasoning builds pedagogically sound animations that flow from foundations to advanced topics.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/HarleyCoops/Math-To-Manim/blob/main/README.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - adithya-s-k/manim_skill: Agent skills for Manim to create 3Blue1Brown style animations. · GitHub",
      "url": "https://github.com/adithya-s-k/manim_skill",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Once installed, your AI assistant (like Claude, GitHub Copilot, or Cursor) automatically gains access to: ... The skills follow the Agent Skills open standard and work across multiple AI tools. manimce-best-practices - Automatically loads when: ... manim_skill/ ├── skills/ │ ├── manimce-best-practices/ # Manim Community Edition skills │ │ ├── SKILL.md # Skill metadata │ │ └── rules/ # Individual best practice guides │ │ ├── animations.md │ │ ├── scenes.md │ │ ├── mobjects.md │ │ └── ... │ │ │ └── manimgl-best-practices/ # ManimGL skills │ ├── SKILL.md │ └── rules/ │ ├── animations.md │ ├── 3d.md │ ├── camera.md │ └── ... │ └── tests/ ├── manimce/ # Tests for Community Edition └── manimgl/ # Tests for ManimGL ...\n\nOnce installed, your AI assistant (like Claude, GitHub Copilot, or Cursor) automatically gains access to: ... \n\nThe skills follow the Agent Skills open standard and work across multiple AI tools. manimce-best-practices - Automatically loads when: ... manim_skill/ ├── skills/ │ ├── manimce-best-practices/ # Manim Community Edition skills │ │ ├── SKILL.md # Skill metadata │ │ └── rules/ # Individual best practice guides │ │ ├── animations.md │ │ ├── scenes.md │ │ ├── mobjects.md │ │ └── ... │ │ │ └── manimgl-best-practices/ # ManimGL skills │ ├── SKILL.md │ └── rules/ │ ├── animations.md │ ├── 3d.md │ ├── camera.md │ └── ... │ └── tests/ ├── manimce/ # Tests for Community Edition └── manimgl/ # Tests for ManimGL ...\n\n⚡ Quick Start: Add both Manim skills to your AI agent instantly: ... A comprehensive collection of best practices, patterns, and examples for both Manim Community Edition and ManimGL (3Blue1Brown's version). \n\n# Test all files uv run python t",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/adithya-s-k/manim_skill",
        "search_provider": "anthropic",
        "age": "January 23, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - Yusuke710/manim-skill: Claude Code Skill for creating animations with Manim. Claude Code autonomously plans scenes, writes Manim code, renders videos, and refines based on feedback. · GitHub",
      "url": "https://github.com/Yusuke710/manim-skill",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Code and Render - Claude writes Manim code in Python and runs Manim until all scenes render successfully. Iterate - Claude opens video viewers in your browser and you can provide feedback and paste it into Claude Code.\n\nClaude Code Skill for creating animations with Manim. Claude Code autonomously plans scenes, writes Manim code, renders videos, and refines based on feedback. - Yusuke710/manim-skill\n\nClaude autonomously generates 3Blue1Brown-style video following a structured workflow: Plan → Code → Render → Iterate. \n\nBefore using this skill, install the following dependencies: # Install System Dependencies(on MacOS) brew install cairo pkg-config ffmpeg # Install Manim Community Edition uv tool install manim · # Add this repository as a marketplace /plugin marketplace add Yusuke710/manim-skill # Install the plugin /plugin install manim-skill/manim-skill # Install Manim Community Edition best practices npx skills add adithya-s-k/manim_skill/skills/manimce-best-practices · Manim Skill is designed to integrate seamlessly with Claude Code. Planning, coding and rendering all happen on claude code. Plan - A better plan leads to a better video. You can use claude code's \"plan mode\" just like you would plan before coding. Without plan mode, Claude will design the video structure with scenes automatically.\n\nCode and Render - Claude writes Manim code in Python and runs Manim until all scenes render successfully. \n\nIterate - Claude opens video viewers in your browser and you can provide feedback and paste it into Claude Code. Then it will refine the video based on your feedback.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/Yusuke710/manim-skill",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How to Build Claude Skills: Complete Guide + MCP Comparison (2026)",
      "url": "https://www.thetoolnerd.com/p/how-to-build-claude-skills-step-by-step-guide-thetoolnerd",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "thetoolnerd.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=thetoolnerd.com",
        "site_name": "Thetoolnerd"
      },
      "is_missing": false,
      "text": "Reference files scale better: Instead of cramming everything into SKILL.md, break detailed syntax into separate reference files. Claude only loads them when needed. Progressive disclosure works: My skill has 5 diagram types and extensive syntax documentation (~5000 tokens total), but Claude only uses ~50-100 tokens until one requests a diagram. Download the Eraser Skill here : https://github.com/akhil20187/toolnerd-skills · The Problem: I always wanted to explore creating educational videos explaining Vedic Mathematics techniques using Manim (the animation library from 3Blue1Brown), but remembering Manim’s code patterns, timing functions, and animation sequences is tough and also I am from non coding background. The Solution: Build a skill with pre-configured scene classes for common Vedic Math techniques. This was the first skill I created and I just asked this simple way to create the skill ·\n\nLearn to build custom Claude Skills with step-by-step examples. \n\nCompare Claude Skills vs MCPs, see real BPMN and video skill builds, and start building today.\n\nReference files scale better: Instead of cramming everything into SKILL.md, break detailed syntax into separate reference files. Claude only loads them when needed. Progressive disclosure works: My skill has 5 diagram types and extensive syntax documentation (~5000 tokens total), but Claude only uses ~50-100 tokens until one requests a diagram. Download the Eraser Skill here : https://github.com/akhil20187/toolnerd-skills · The Problem: I always wanted to explore creating educational videos explaining Vedic Mathematics techniques using Manim (the animation library from 3Blue1Brown), but remembering Manim’s code patterns, timing functions, and animation sequences is tough and also I am from non coding background. The Solution: Build a skill with pre-configured scene classes for common Vedic Math techniques.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.thetoolnerd.com/p/how-to-build-claude-skills-step-by-step-guide-thetoolnerd",
        "search_provider": "anthropic",
        "age": "November 20, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "math-to-manim — Claude Code Skill - FastMCP",
      "url": "https://fastmcp.me/skills/details/1906/math-to-manim",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "fastmcp.me",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=fastmcp.me",
        "site_name": "MCP.Directory"
      },
      "is_missing": false,
      "text": "Invoke this workflow when: Creating mathematical or scientific animations · Building educational visualizations with Manim · Generating code from conceptual explanations · Needing pedagogically structured content progression · Parse user intent to extract: Core concept (specific topic name) Domain (physics, math, CS, etc.) Level (beginner/intermediate/advanced) Goal (learning objective) Recursively build knowledge tree: Ask: \"What are the prerequisites for [concept]?\" For each prerequisite, recursively ask the same question ·\n\nmkdir -p .claude/skills/math-to-manim && curl -L -o skill.zip \"https://mcp.directory/api/skills/download/1906\" && unzip -o skill.zip -d .claude/skills/math-to-manim && rm skill.zipCopy Install Command ... Transform any concept into professional mathematical animations using a six-agent workflow that requires NO training data - only pure LLM reasoning.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://fastmcp.me/skills/details/1906/math-to-manim",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "math-to-manim — Claude Code Skill",
      "url": "https://mcp.directory/skills/math-to-manim",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mcp.directory",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mcp.directory",
        "site_name": "Mcp"
      },
      "is_missing": false,
      "text": "Transform any concept into professional mathematical animations using a six-agent workflow that requires NO training data - only pure LLM reasoning. Instead of training on example animations, this system recursively asks: &quot;What must I understand BEFORE this concept?&quot;\n\nInstalls to .claude/skills/math-to-manim · Transform any concept into professional mathematical animations using a six-agent workflow that requires NO training data - only pure LLM reasoning. Instead of training on example animations, this system recursively asks: \"What must I understand BEFORE this concept?\" This builds pedagogically sound animations that flow naturally from foundation concepts to advanced topics. \n\nInvoke this workflow when: Creating mathematical or scientific animations · Building educational visualizations with Manim · Generating code from conceptual explanations · Needing pedagogically structured content progression · Parse user intent to extract: Core concept (specific topic name) Domain (physics, math, CS, etc.) Level (beginner/intermediate/advanced) Goal (learning objective) Recursively build knowledge tree: Ask: \"What are the prerequisites for [concept]?\" For each prerequisite, recursively ask the same question ·\n\nmkdir -p .claude/skills/math-to-manim && curl -L -o skill.zip \"https://mcp.directory/api/skills/download/1906\" && unzip -o skill.zip -d .claude/skills/math-to-manim && rm skill.zipCopy Install Command ... Transform any concept into professional mathematical animations using a six-agent workflow that requires NO training data - only pure LLM reasoning.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://mcp.directory/skills/math-to-manim",
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

 Now I'm organizing my findings and doing a honesty check against the user's preferences for separating facts from assumptions. I'm verifying which claims have primary sources—like the Anthropic skills repository and other tools I've identified—before presenting them. I'm also seeing several Manim-focused skills for creating mathematical animations with different workflows and features, plus a few aggregator repositories that catalog hundreds or thousands of available skills across different platforms. I should note that I haven't personally verified all the star counts and fork numbers mentioned in these sources.

For the specific numbers I did verify directly—like the K-Dense-AI/claude-scientific-skills repo showing 7.8k stars, 924 forks, and 140 skills—I'll make sure to attribute those to my own web fetch. For anything else, I'll cite the search results as the source rather than presenting them as confirmed facts. On the Feynman diagrams front, I haven't found a dedicated skill wrapper yet, though there are LaTeX packages like TikZ-Feynman that handle this. I'm settling on a structured markdown response with direct hits, aggregator repos, and honest gaps rather than creating a file, since Reid just asked for information, not a deliverable.

Now I need to verify what I can actually substantiate: the K-Dense-AI repo with its 140 skills including scientific-schematics and scientific-visualization (v2.18.0 from January 27, 2026), the scunning1975 MixtapeTools with its /tikz skill, and the rest from search results—I'll be clear about what's verified versus what comes from snippets.

</details>

Here's what I found. I've split this into **direct hits** (skills explicitly targeting scientific/physics drawing), **general-purpose containers** worth browsing, and **honest gaps** where no dedicated skill exists.

---

## Direct hits — scientific/academic drawing

**K-Dense-AI / claude-scientific-skills** — 140 ready-to-use scientific skills, MIT license, 7.8k stars, installable as a Claude Code plugin. The relevant skills inside this repo for your purposes:
- **`scientific-schematics`** — publication-ready diagrams. Orchestrates matplotlib/seaborn/plotly with publication styles for multi-panel layouts, significance annotations, error bars, colorblind-safe palettes, and journal formatting (Nature, Science, Cell) — that one is actually `scientific-visualization`. The `scientific-schematics` one is image-generation-based: generates high-fidelity images with automatic quality review, specialized in neural network architectures, system diagrams, flowcharts, biological pathways, and complex scientific visualizations.
- **`scientific-visualization`** — the matplotlib/seaborn/plotly meta-skill above.
- **`scientific-slides`**, **`latex-posters`**, **`pptx-posters`** — presentation/poster output.
- **`sympy`** — symbolic math (useful for your Hamiltonian/Lagrangian derivation work).

Repo: https://github.com/K-Dense-AI/claude-scientific-skills

**davila7 / claude-code-templates** — separate `scientific-schematics` skill. Uses Nano Banana Pro AI for diagram generation with Gemini 3 Pro quality review, with smart iteration — only regenerates if quality is below the document-type threshold. Note this means it calls an external image-generation API rather than drafting vector SVG/TikZ — good for "make me a graphical abstract," less good for precise detector schematics.

**scunning1975 / MixtapeTools** (Scott Cunningham, Baylor) — has a dedicated **`/tikz`** skill focused on correctness, not generation. A Claude Code skill — invoked with /tikz path/to/file.tex — that systematically audits and fixes every visual collision in every TikZ figure in a LaTeX file. Labels sitting on arrows, text inside boxes, arrows crossing each other — found and fixed using measurement, not intuition. The rules apply to both TikZ diagrams and matplotlib/Python figures, using Bézier formulas to compute where curves pass before placing labels. This pairs well with any other skill that *writes* TikZ.

Repo: https://github.com/scunning1975/MixtapeTools

**ndpvt-web / latex-document-skill** — universal LaTeX authoring. Lab reports use siunitx for uncertainties and SI units, pgfplots for data with error bars, and structured sections: abstract → theory → procedure → data → analysis → discussion → conclusion. Includes TikZ graph theory macros, custom math operators, conference presets (NeurIPS, ICML, CVPR, ICLR). Physics-friendly out of the box.

Repo: https://github.com/ndpvt-web/latex-document-skill

---

## Animation / dynamic visual (relevant to your preference for interactive output)

**adithya-s-k / manim_skill** — two skills: manimce-best-practices (Manim Community Edition) and manimgl-best-practices (ManimGL, 3Blue1Brown's version), with rules covering animations, scenes, mobjects, 3D, and camera. Follows the open Agent Skills standard.

**Yusuke710 / manim-skill** — Claude Code skill for animations with a Plan → Code → Render → Iterate workflow; Claude writes Manim code in Python, runs Manim until scenes render, then opens video viewers for feedback.

**HarleyCoops / Math-To-Manim** — skill/skills/math-to-manim/SKILL.md with references (reverse-knowledge-tree, agent-system-prompts, verbose-prompt-format, manim-code-patterns) and a pythagorean-theorem example; six-agent workflow that recursively asks "what must I understand before this concept?" to build pedagogically structured animations. Good match if you want to extend your Feynman-technique skill toward video.

---

## Meta-catalogues (for browsing)

| Repo | Claim from source | Source |
|---|---|---|
| `anthropics/skills` | Public repository for Agent Skills; many skills Apache 2.0; document creation skills (docx/pdf/pptx/xlsx) shown as source-available reference | github.com/anthropics/skills |
| `VoltAgent/awesome-agent-skills` | Curated collection of 1000+ agent skills from official dev teams and the community | github.com/VoltAgent/awesome-agent-skills |
| `alirezarezvani/claude-skills` | 232+ skills; claimed 5,200+ GitHub stars; the repo states "most comprehensive" (vendor claim, not independently verified) | github.com/alirezarezvani/claude-skills |
| `travisvn/awesome-claude-skills` | Curated list, no headline numbers claimed | github.com/travisvn/awesome-claude-skills |
| `sickn33/antigravity-awesome-skills` | Installable library of 1,400+ SKILL.md playbooks; credits anthropics/skills, remotion-dev/skills, vercel-labs/agent-skills, openai/skills as upstream sources | github.com/sickn33/antigravity-awesome-skills |
| `skillsmp.com` | Search UI — star/count claims are their own aggregation | skillsmp.com |

Numbers above are **vendor self-descriptions from each repo's README** — per your preference I'm flagging them as such rather than presenting them as independent measurements. The K-Dense-AI numbers (7.8k stars, 924 forks, v2.18.0 dated Jan 27 2026, 140 skills, MIT) I verified by fetching the repo page directly.

---

## Honest gaps

Three things you might hope to find that I could **not** locate as dedicated SKILL.md wrappers:

1. **Feynman diagrams.** `JP-Ellis/tikz-feynman` and `transientlunatic/tikz-feyn` are the canonical LaTeX packages (both open-source, CTAN-distributed per the TikZ-Feynman README, which cites Ellis 2016, arXiv:1601.05437 [hep-ph]), but they're LaTeX packages, not Claude Agent Skills. No one has wrapped them in a SKILL.md with Claude-specific scaffolding that I could find. This is a plausible skill for you to author given your background.
2. **Nuclear physics specific** — level schemes, detector schematics (TPC, MWDC, MUSIC), Bρ-ΔE-ToF diagrams. Nothing dedicated. Best current path: `scientific-schematics` (natural-language → image, less precise) or `ndpvt-web/latex-document-skill` + TikZ manually.
3. **Particle/heavy-ion specific plotting conventions** (Segré chart, N-Z nuclear chart, nuclide mass excesses). Nothing found.

---

## My recommendation, given your setup

Based on what you've been building (`concept-visualizer`, `feynman-technique`, `vocabulary-visualization`, `evolve-skills`), the highest-value installs look like:

1. **K-Dense-AI/claude-scientific-skills** — install the whole plugin; `scientific-visualization` + `latex-posters` directly fill a gap for you.
2. **scunning1975/MixtapeTools `/tikz`** — if you ever hand-author TikZ for papers or slides, this is the collision-auditor you want.
3. **adithya-s-k/manim_skill** — pairs naturally with your existing Feynman/concept-visualizer stack if you want to push toward video explanations.

Then a strong candidate for your own next skill: a **Feynman-diagram** or **nuclear-level-scheme** skill wrapping `tikz-feynman` + `pgfplots` conventions — you have the domain expertise and there's a genuine hole in the ecosystem.

Want me to dig into any one of these (read the actual SKILL.md, check license terms, or sketch what a nuclear-physics-diagram skill of your own could look like)?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d9aaa-b889-7dc8-849e-833d32e2f1ad",
  "updated_at": "2026-04-17T09:01:57.731036Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d9aaa-b887-72b1-a3de-d1b845c8dfbe"
}
```

</details>

### 5. human — 2026-04-17T09:14:06.259682Z

https://github.com/K-Dense-AI/scientific-agent-skills?tab=readme-ov-file#quick-examples
Give me the suitable skills for Nuclear Physics or Physics figures

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d9ab8-05a9-7bc9-a46b-0fbc3709d570",
  "updated_at": "2026-04-17T09:14:06.259682Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d9aaa-b889-7dc8-849e-833d32e2f1ad"
}
```

</details>

### 6. assistant — 2026-04-17T09:16:06.223113Z

 

<details>
<summary>Thinking (verbatim)</summary>

 The user shared a URL to the K-Dense-AI scientific-agent-skills repository and wants me to find skills relevant to Nuclear Physics and Physics figures. Let me fetch that repo to see what's available and identify which skills would be most suitable for their needs.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-17T09:14:14.093607Z",
  "stop_timestamp": "2026-04-17T09:14:14.395585Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Fs3QuL7htBuz2Lbi9oj77B",
  "name": "web_fetch",
  "input": {
    "url": "https://github.com/K-Dense-AI/scientific-agent-skills?tab=readme-ov-file#quick-examples"
  },
  "message": "Fetching: https://github.com/K-Dense-AI/scientific-agent-skills?tab=readme-ov-file#quick-examples",
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
  "tool_use_id": "toolu_01Fs3QuL7htBuz2Lbi9oj77B",
  "name": "web_fetch",
  "content": [
    {
      "type": "text",
      "text": "{\"error_type\": \"ROBOTS_DISALLOWED\", \"error_message\": \"There was an error while fetching: URL is disallowed by robots.txt rules\"}",
      "uuid": "41be0cec-264d-49ae-8f82-33c9f633d1d8"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": "Failed to fetch: https://github.com/K-Dense-AI/scientific-agent-skills?tab=readme-ov-file#quick-examples",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://github.com/K-Dense-AI/scientific-agent-skills?tab=readme-ov-file#quick-examples",
      "subtitles": null,
      "url": "https://github.com/K-Dense-AI/scientific-agent-skills?tab=readme-ov-file#quick-examples",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
      "source": "github"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-17T09:14:18.616856Z",
  "stop_timestamp": "2026-04-17T09:14:18.616856Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01SgM6KfGHFsryV3CWCK4vwy",
  "name": "web_fetch",
  "input": {
    "url": "https://github.com/K-Dense-AI/scientific-agent-skills"
  },
  "message": "Fetching: https://github.com/K-Dense-AI/scientific-agent-skills",
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
  "tool_use_id": "toolu_01SgM6KfGHFsryV3CWCK4vwy",
  "name": "web_fetch",
  "content": [
    {
      "type": "text",
      "text": "{\"error_type\": \"PERMISSIONS_ERROR\", \"error_message\": \"This URL cannot be fetched because it was not provided by the user nor did it appear in any search/fetch results\"}",
      "uuid": "3a409a5b-d4dc-4fc6-86a3-44d636a80e2b"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": "Failed to fetch: https://github.com/K-Dense-AI/scientific-agent-skills",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "subtitles": null,
      "url": "https://github.com/K-Dense-AI/scientific-agent-skills",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
      "source": "github"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 The URL had a robots.txt restriction, but I already have the K-Dense-AI/claude-scientific-skills repository data from an earlier fetch, which appears to be a renamed version of the scientific-agent-skills repo. Let me use those search results to find the documentation page listing all available skills.

</details>

The URL is blocked by robots but I already have the repo's README in full context from earlier. Let me also pull the detailed skill list docs page.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-17T09:14:28.197522Z",
  "stop_timestamp": "2026-04-17T09:14:28.414287Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Wgxj1XWfKNp2Gx53V93w28",
  "name": "web_fetch",
  "input": {
    "url": "https://github.com/K-Dense-AI/claude-scientific-skills/blob/main/docs/scientific-skills.md"
  },
  "message": "Fetching: https://github.com/K-Dense-AI/claude-scientific-skills/blob/main/docs/scientific-skills.md",
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
  "tool_use_id": "toolu_01Wgxj1XWfKNp2Gx53V93w28",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "claude-scientific-skills/docs/scientific-skills.md at main · K-Dense-AI/claude-scientific-skills",
      "url": "https://github.com/K-Dense-AI/claude-scientific-skills/blob/main/docs/scientific-skills.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "github"
      },
      "is_missing": false,
      "text": "claude-scientific-skills/docs/scientific-skills.md at main · K-Dense-AI/claude-scientific-skills · GitHub\n\n\n\n[Skip to content](#start-of-content)\n\n\n\n\n\n\n\n\n\n\n\n\n## Navigation Menu\n\nToggle navigation\n\n[Sign in](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2FK-Dense-AI%2Fclaude-scientific-skills%2Fblob%2Fmain%2Fdocs%2Fscientific-skills.md)\n\nAppearance settings\n\n* Platform\n\n  + AI CODE CREATION\n    - [GitHub CopilotWrite better code with AI](https://github.com/features/copilot)\n    - [GitHub SparkBuild and deploy intelligent apps](https://github.com/features/spark)\n    - [GitHub ModelsManage and compare prompts](https://github.com/features/models)\n    - [MCP RegistryNewIntegrate external tools](https://github.com/mcp)\n  + DEVELOPER WORKFLOWS\n    - [ActionsAutomate any workflow](https://github.com/features/actions)\n    - [CodespacesInstant dev environments](https://github.com/features/codespaces)\n    - [IssuesPlan and track work](https://github.com/features/issues)\n    - [Code ReviewManage code changes](https://github.com/features/code-review)\n  + APPLICATION SECURITY\n    - [GitHub Advanced SecurityFind and fix vulnerabilities](https://github.com/security/advanced-security)\n    - [Code securitySecure your code as you build](https://github.com/security/advanced-security/code-security)\n    - [Secret protectionStop leaks before they start](https://github.com/security/advanced-security/secret-protection)\n  + EXPLORE\n    - [Why GitHub](https://github.com/why-github)\n    - [Documentation](https://docs.github.com)\n    - [Blog](https://github.blog)\n    - [Changelog](https://github.blog/changelog)\n    - [Marketplace](https://github.com/marketplace)\n\n  [View all features](https://github.com/features)\n* Solutions\n\n  + BY COMPANY SIZE\n    - [Enterprises](https://github.com/enterprise)\n    - [Small and medium teams](https://github.com/team)\n    - [Startups](https://github.com/enterprise/startups)\n    - [Nonprofits](https://github.com/solutions/industry/nonprofits)\n  + BY USE CASE\n    - [App Modernization](https://github.com/solutions/use-case/app-modernization)\n    - [DevSecOps](https://github.com/solutions/use-case/devsecops)\n    - [DevOps](https://github.com/solutions/use-case/devops)\n    - [CI/CD](https://github.com/solutions/use-case/ci-cd)\n    - [View all use cases](https://github.com/solutions/use-case)\n  + BY INDUSTRY\n    - [Healthcare](https://github.com/solutions/industry/healthcare)\n    - [Financial services](https://github.com/solutions/industry/financial-services)\n    - [Manufacturing](https://github.com/solutions/industry/manufacturing)\n    - [Government](https://github.com/solutions/industry/government)\n    - [View all industries](https://github.com/solutions/industry)\n\n  [View all solutions](https://github.com/solutions)\n* Resources\n\n  + EXPLORE BY TOPIC\n    - [AI](https://github.com/resources/articles?topic=ai)\n    - [Software Development](https://github.com/resources/articles?topic=software-development)\n    - [DevOps](https://github.com/resources/articles?topic=devops)\n    - [Security](https://github.com/resources/articles?topic=security)\n    - [View all topics](https://github.com/resources/articles)\n  + EXPLORE BY TYPE\n    - [Customer stories](https://github.com/customer-stories)\n    - [Events & webinars](https://github.com/resources/events)\n    - [Ebooks & reports](https://github.com/resources/whitepapers)\n    - [Business insights](https://github.com/solutions/executive-insights)\n    - [GitHub Skills](https://skills.github.com)\n  + SUPPORT & SERVICES\n    - [Documentation](https://docs.github.com)\n    - [Customer support](https://support.github.com)\n    - [Community forum](https://github.com/orgs/community/discussions)\n    - [Trust center](https://github.com/trust-center)\n    - [Partners](https://github.com/partners)\n\n  [View all resources](https://github.com/resources)\n* Open Source\n\n  + COMMUNITY\n    - [GitHub SponsorsFund open source developers](https://github.com/sponsors)\n  + PROGRAMS\n    - [Security Lab](https://securitylab.github.com)\n    - [Maintainer Community](https://maintainers.github.com)\n    - [Accelerator](https://github.com/accelerator)\n    - [GitHub Stars](https://stars.github.com)\n    - [Archive Program](https://archiveprogram.github.com)\n  + REPOSITORIES\n    - [Topics](https://github.com/topics)\n    - [Trending](https://github.com/trending)\n    - [Collections](https://github.com/collections)\n* Enterprise\n\n  + ENTERPRISE SOLUTIONS\n    - [Enterprise platformAI-powered developer platform](https://github.com/enterprise)\n  + AVAILABLE ADD-ONS\n    - [GitHub Advanced SecurityEnterprise-grade security features](https://github.com/security/advanced-security)\n    - [Copilot for BusinessEnterprise-grade AI features](https://github.com/features/copilot/copilot-business)\n    - [Premium SupportEnterprise-grade 24/7 support](https://github.com/premium-support)\n* [Pricing](https://github.com/pricing)\n\nSearch or jump to...\n\n\n# Search code, repositories, users, issues, pull requests...\n\nSearch\n\nClear\n\n[Search syntax tips](https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax)\n\n# Provide feedback\n\nWe read every piece of feedback, and take your input very seriously.\n\n\nInclude my email address so I can be contacted\n\nCancel\n Submit feedback\n\n\n\n\n\n# Saved searches\n\n## Use saved searches to filter your results more quickly\n\nName\n\nQuery\n\nTo see all available qualifiers, see our [documentation](https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax).\n\nCancel\n Create saved search\n\n[Sign in](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2FK-Dense-AI%2Fclaude-scientific-skills%2Fblob%2Fmain%2Fdocs%2Fscientific-skills.md)\n\n[Sign up](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E%2Fblob%2Fshow&source=header-repo&source_repo=K-Dense-AI%2Fclaude-scientific-skills)\n\nAppearance settings\n\nResetting focus\n\nYou signed in with another tab or window. Reload to refresh your session.\nYou signed out in another tab or window. Reload to refresh your session.\nYou switched accounts on another tab or window. Reload to refresh your session.\n \n\n\nDismiss alert\n\n{{ message }}\n\n[K-Dense-AI](https://github.com/K-Dense-AI) \n/\n**[claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills)**\nPublic\n\n* [Notifications](https://github.com/login?return_to=%2FK-Dense-AI%2Fclaude-scientific-skills) You must be signed in to change notification settings\n* [Fork\n  1.9k](https://github.com/login?return_to=%2FK-Dense-AI%2Fclaude-scientific-skills)\n* [Star\n   17k](https://github.com/login?return_to=%2FK-Dense-AI%2Fclaude-scientific-skills)\n\n* [Code](https://github.com/K-Dense-AI/claude-scientific-skills)\n* [Issues\n  6](https://github.com/K-Dense-AI/claude-scientific-skills/issues)\n* [Pull requests\n  21](https://github.com/K-Dense-AI/claude-scientific-skills/pulls)\n* [Actions](https://github.com/K-Dense-AI/claude-scientific-skills/actions)\n* [Security and quality\n  0](https://github.com/K-Dense-AI/claude-scientific-skills/security)\n* [Insights](https://github.com/K-Dense-AI/claude-scientific-skills/pulse)\n\nAdditional navigation options\n\n\n* [Code](https://github.com/K-Dense-AI/claude-scientific-skills)\n* [Issues](https://github.com/K-Dense-AI/claude-scientific-skills/issues)\n* [Pull requests](https://github.com/K-Dense-AI/claude-scientific-skills/pulls)\n* [Actions](https://github.com/K-Dense-AI/claude-scientific-skills/actions)\n* [Security and quality](https://github.com/K-Dense-AI/claude-scientific-skills/security)\n* [Insights](https://github.com/K-Dense-AI/claude-scientific-skills/pulse)\n\n## FilesExpand file tree\n\nmain\n\n## Breadcrumbs\n\n1. [claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills/tree/main)\n2. /[docs](https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/docs)\n\n/\n\n# scientific-skills.md\n\nCopy path\n\nBlameMore file actions\n\nBlameMore file actions\n\n## Latest commit\n\n## History\n\n[History](https://github.com/K-Dense-AI/claude-scientific-skills/commits/main/docs/scientific-skills.md)\n\nHistory\n\n208 lines (172 loc) · 103 KB\n\nmain\n\n## Breadcrumbs\n\n1. [claude-scientific-skills](https://github.com/K-Dense-AI/claude-scientific-skills/tree/main)\n2. /[docs](https://github.com/K-Dense-AI/claude-scientific-skills/tree/main/docs)\n\n/\n\n# scientific-skills.md\n\nTop\n\n## File metadata and controls\n\n* Preview\n* Code\n* Blame\n\n208 lines (172 loc) · 103 KB\n\n[Raw](https://github.com/K-Dense-AI/claude-scientific-skills/raw/refs/heads/main/docs/scientific-skills.md)\n\nCopy raw file\n\nDownload raw file\n\nOutline\n\nEdit and raw actions\n\n# Scientific Skills\n\n## Scientific Databases & Data Access\n\n* **Database Lookup** - Search 78 public scientific, biomedical, materials science, and economic databases via their REST APIs and return structured JSON results. Covers physics/astronomy (NASA, NIST, SDSS, SIMBAD, Exoplanet Archive), earth/environment (USGS, NOAA, EPA, OpenWeatherMap), chemistry/drugs (PubChem, ChEMBL, DrugBank, FDA, KEGG, DailyMed, ZINC, BindingDB), materials science (Materials Project, COD), biology/genomics (Reactome, BRENDA, UniProt, STRING, Ensembl, NCBI Gene, GEO, GTEx, PDB, AlphaFold, InterPro, ChEBI, BioGRID, Gene Ontology, QuickGO, NCBI Protein/Taxonomy, dbSNP, SRA, ENA, gnomAD, UCSC Genome, ENCODE, JASPAR, MouseMine, PRIDE, LINCS L1000, Human Protein Atlas, Human Cell Atlas, RummaGEO, Metabolomics Workbench, EMDB, Addgene), disease/clinical (COSMIC, Open Targets, ClinPGx, ClinicalTrials.gov, OMIM, ClinVar, GDC/TCGA, cBioPortal, DisGeNET, GWAS Catalog, Monarch, HPO), regulatory (FDA, USPTO, SEC EDGAR), economics/finance (FRED, BEA, BLS, Federal Reserve, World Bank, ECB, US Treasury, Alpha Vantage, Data Commons), and demographics (US Census, Eurostat, WHO). Use this skill whenever the user wants to look up compounds, drugs, proteins, genes, pathways, enzymes, gene expression, variants, clinical trials, patents, SEC filings, economic indicators, crystal structures, astronomical objects, earthquakes, weather, or any data from a public database API\n* **DepMap** - Query the Cancer Dependency Map (DepMap) for cancer cell line gene dependency scores (CRISPR Chronos), drug sensitivity data, and gene effect profiles. Use for identifying cancer-specific vulnerabilities, synthetic lethal interactions, and validating oncology drug targets\n* **Imaging Data Commons** - Query and download public cancer imaging data from NCI Imaging Data Commons using idc-index. Use for accessing large-scale radiology (CT, MR, PET) and pathology datasets for AI training or research. No authentication required. Query by metadata, visualize in browser, check licenses\n* **PrimeKG** - Query the Precision Medicine Knowledge Graph (PrimeKG) for multiscale biological data including genes, drugs, diseases, phenotypes, and more. Integrates 20+ biomedical resources into a single knowledge graph for drug repurposing, disease mechanism exploration, and target identification\n* **U.S. Treasury Fiscal Data** - Free, open REST API from the U.S. Department of the Treasury providing 54 datasets and 182 data tables covering federal fiscal data. No API key required. Access national debt (Debt to the Penny back to 1993, Historical Debt back to 1790), Daily Treasury Statements (TGA balances, deposits/withdrawals), Monthly Treasury Statements (federal budget receipts and outlays), Treasury securities auctions data (bills, notes, bonds, TIPS, FRNs since 1979), average interest rates on Treasury securities, Treasury reporting exchange rates (quarterly for 170+ currencies), I Bond and savings bond rates, TIPS/CPI data, and more. Supports filtering, sorting, pagination, and CSV/XML/JSON output formats\n\n## Scientific Integrations\n\n### Laboratory Information Management Systems (LIMS) & R&D Platforms\n\n* **Benchling Integration** - Toolkit for integrating with Benchling's R&D platform, providing programmatic access to laboratory data management including registry entities (DNA sequences, proteins), inventory systems (samples, containers, locations), electronic lab notebooks (entries, protocols), workflows (tasks, automation), and data exports using Python SDK and REST API\n\n### Cloud Platforms for Genomics & Biomedical Data\n\n* **DNAnexus Integration** - Comprehensive toolkit for working with the DNAnexus cloud platform for genomics and biomedical data analysis. Covers building and deploying apps/applets (Python/Bash), managing data objects (files, records, databases), running analyses and workflows, using the dxpy Python SDK, and configuring app metadata and dependencies (dxapp.json setup, system packages, Docker, assets). Enables processing of FASTQ/BAM/VCF files, bioinformatics pipelines, job execution, workflow orchestration, and platform operations including project management and permissions\n\n### Laboratory Automation\n\n* **Opentrons Integration** - Toolkit for creating, editing, and debugging Opentrons Python Protocol API v2 protocols for laboratory automation using Flex and OT-2 robots. Enables automated liquid handling, pipetting workflows, hardware module control (thermocycler, temperature, magnetic, heater-shaker, absorbance plate reader), labware management, and complex protocol development for biological and chemical experiments\n* **Ginkgo Cloud Lab** - Submit and manage protocols on Ginkgo Bioworks Cloud Lab (cloud.ginkgo.bio), a web-based interface for autonomous lab execution on Reconfigurable Automation Carts (RACs). Supports three protocols: Cell Free Protein Expression Validation ($39/sample, 5-10 day turnaround), Cell Free Protein Expression Optimization ($199/sample, DoE across 24 conditions, 6-11 days), and Fluorescent Pixel Art Generation ($25/plate, bacterial artwork with 11 fluorescent E. coli strains, 5-7 days). Includes EstiMate AI agent for custom protocol feasibility and pricing\n\n### Electronic Lab Notebooks (ELN)\n\n* **LabArchives Integration** - Toolkit for interacting with LabArchives Electronic Lab Notebook (ELN) REST API. Provides programmatic access to notebooks (backup, retrieval, management), entries (creation, comments, attachments), user authentication, site reports and analytics, and third-party integrations (Protocols.io, GraphPad Prism, SnapGene, Geneious, Jupyter, REDCap). Includes Python scripts for configuration setup, notebook operations, and entry management. Supports multi-regional API endpoints (US, UK, Australia) and OAuth authentication\n* **Open Notebook** - Self-hosted, open-source alternative to Google NotebookLM for AI-powered research and document analysis. Organizes research materials into notebooks, ingests diverse content sources (PDFs, videos, audio, web pages, Office documents), generates AI-powered notes and summaries, creates multi-speaker podcasts from research, enables document chat with context-aware AI, and searches across materials with full-text and vector search. Supports 16+ AI providers including OpenAI, Anthropic, Google, Ollama, Groq, and Mistral with complete data privacy through self-hosting\n\n### Workflow Platforms & Cloud Execution\n\n* **LatchBio Integration** - Integration with the Latch platform for building, deploying, and executing bioinformatics workflows. Provides comprehensive support for creating serverless bioinformatics pipelines using Python decorators, deploying Nextflow/Snakemake pipelines, managing cloud data (LatchFile, LatchDir) and structured Registry (Projects, Tables, Records), configuring computational resources (CPU, GPU, memory, storage), and using pre-built Latch Verified workflows (RNA-seq, AlphaFold, DESeq2, single-cell analysis, CRISPR editing). Enables automatic containerization, UI generation, workflow versioning, and execution on scalable cloud infrastructure with comprehensive data management\n\n### Microscopy & Bio-image Data\n\n* **OMERO Integration** - Toolkit for interacting with OMERO microscopy data management systems using Python. Provides comprehensive access to microscopy images stored in OMERO servers, including dataset and screening data retrieval, pixel data analysis, annotation and metadata management, regions of interest (ROIs) creation and analysis, batch processing, OMERO.scripts development, and OMERO.tables for structured data storage. Essential for researchers working with high-content screening data, multi-dimensional microscopy datasets, or collaborative image repositories\n\n### Protocol Management & Sharing\n\n* **Protocols.io Integration** - Integration with protocols.io API for managing scientific protocols. Enables programmatic access to protocol discovery (search by keywords, DOI, category), protocol lifecycle management (create, update, publish with DOI), step-by-step procedure documentation, collaborative development with workspaces and discussions, file management (upload data, images, documents), experiment tracking and documentation, and data export. Supports OAuth authentication, protocol PDF generation, materials management, threaded comments, workspace permissions, and institutional protocol repositories. Essential for protocol standardization, reproducibility, lab knowledge management, and scientific collaboration\n\n## Scientific Packages\n\n### Bioinformatics & Genomics\n\n* **AnnData** - Python package for handling annotated data matrices, specifically designed for single-cell genomics data. Provides efficient storage and manipulation of high-dimensional data with associated annotations (observations/cells and variables/genes). Key features include: HDF5-based h5ad file format for efficient I/O and compression, integration with pandas DataFrames for metadata, support for sparse matrices (scipy.sparse) for memory efficiency, layered data organization (X for main data matrix, obs for observation annotations, var for variable annotations, obsm/varm for multi-dimensional annotations, obsp/varp for pairwise matrices), and seamless integration with Scanpy, scvi-tools, and other single-cell analysis packages. Supports lazy loading, chunked operations, and conversion to/from other formats (CSV, HDF5, Zarr). Use cases: single-cell RNA-seq data management, multi-modal single-cell data (RNA+ATAC, CITE-seq), spatial transcriptomics, and any high-dimensional annotated data requiring efficient storage and manipulation\n* **Arboreto** - Python package for efficient gene regulatory network (GRN) inference from single-cell RNA-seq data using ensemble tree-based methods. Implements GRNBoost2 (gradient boosting-based network inference) and GENIE3 (random forest-based inference) algorithms optimized for large-scale single-cell datasets. Key features include: parallel processing for scalability, support for sparse matrices and large datasets (millions of cells), integration with Scanpy/AnnData workflows, customizable hyperparameters, and output formats compatible with network analysis tools. Provides ranked lists of potential regulatory interactions (transcription factor-target gene pairs) with confidence scores. Use cases: identifying transcription factor-target relationships, reconstructing gene regulatory networks from single-cell data, understanding cell-type-specific regulatory programs, and inferring causal relationships in gene expression\n* **BioPython** - Comprehensive Python library for computational biology and bioinformatics providing tools for sequence manipulation, database access, and biological data analysis. Key features include: sequence objects (Seq, SeqRecord, SeqIO) for DNA/RNA/protein sequences with biological alphabet validation, file format parsers (FASTA, FASTQ, GenBank, EMBL, Swiss-Prot, PDB, SAM/BAM, VCF, GFF), NCBI database access (Entrez Programming Utilities for PubMed, GenBank, BLAST, taxonomy), BLAST integration (running searches, parsing results), sequence alignment (pairwise and multiple sequence alignment with Bio.Align), phylogenetics (tree construction and manipulation with Bio.Phylo), population genetics (Hardy-Weinberg, F-statistics), protein structure analysis (PDB parsing, structure calculations), and statistical analysis tools. Supports integration with NumPy, pandas, and other scientific Python libraries. Use cases: sequence analysis, database queries, phylogenetic analysis, sequence alignment, file format conversion, and general bioinformatics workflows\n* **BioServices** - Python library providing unified programmatic access to 40+ biological web services and databases. Supports major bioinformatics resources including KEGG (pathway and compound data), UniProt (protein sequences and annotations), ChEBI (chemical entities), ChEMBL (bioactive molecules), Reactome (pathways), IntAct (protein interactions), BioModels (biological models), and many others. Features consistent API across different services, automatic result caching, error handling and retry logic, support for both REST and SOAP web services, and conversion of results to Python objects (dictionaries, lists, BioPython objects). Handles authentication, rate limiting, and API versioning. Use cases: automated data retrieval from multiple biological databases, building bioinformatics pipelines, database integration workflows, and programmatic access to biological web resources without manual web browsing\n* **Cellxgene Census** - Python package for querying and analyzing large-scale single-cell RNA-seq data from the CZ CELLxGENE Discover census. Provides access to 50M+ cells across 1,000+ datasets with standardized annotations and metadata. Key features include: efficient data access using TileDB-SOMA format for scalable queries, integration with AnnData and Scanpy for downstream analysis, cell metadata filtering and querying, gene expression retrieval, and support for both human and mouse data. Enables subsetting datasets by cell type, tissue, disease, or other metadata before downloading, reducing data transfer and memory requirements. Supports local caching and batch operations. Use cases: large-scale single-cell analysis, cell-type discovery, cross-dataset comparisons, reference dataset construction, and exploratory analysis of public single-cell data\n* **deepTools** - Comprehensive suite of Python tools for exploring and visualizing next-generation sequencing (NGS) data, particularly ChIP-seq, RNA-seq, and ATAC-seq experiments. Provides command-line tools and Python API for processing BAM and bigWig files. Key features include: quality control metrics (plotFingerprint, plotCorrelation), coverage track generation (bamCoverage for creating bigWig files), matrix generation for heatmaps (computeMatrix, plotHeatmap, plotProfile), comparative analysis (multiBigwigSummary, plotPCA), and efficient handling of large files. Supports normalization methods, binning options, and various visualization outputs. Designed for high-throughput analysis workflows and publication-quality figure generation. Use cases: ChIP-seq peak visualization, RNA-seq coverage analysis, ATAC-seq signal tracks, comparative genomics, and NGS data exploration\n* **FlowIO** - Python library for reading and manipulating Flow Cytometry Standard (FCS) files, the standard format for flow cytometry data. Provides efficient parsing of FCS files (versions 2.0, 3.0, 3.1), access to event data (fluorescence intensities, scatter parameters), metadata extraction (keywords, parameters, acquisition settings), and conversion to pandas DataFrames or NumPy arrays. Features include: support for large FCS files, handling of multiple data segments, access to text segments and analysis segments, and integration with flow cytometry analysis workflows. Enables programmatic access to flow cytometry data for downstream analysis, visualization, and machine learning applications. Use cases: flow cytometry data analysis, high-throughput screening, immune cell profiling, and automated processing of FCS files\n* **gget** - Command-line tool and Python package for efficient querying of genomic databases with a simple, unified interface. Provides fast access to Ensembl (gene information, sequences, orthologs, variants), UniProt (protein sequences and annotations), NCBI (BLAST searches, gene information), PDB (protein structures), COSMIC (cancer mutations), and other databases. Features include: single-command queries without complex API setup, automatic result formatting, batch query support, integration with pandas DataFrames, and support for both command-line and Python API usage. Optimized for speed and ease of use, making database queries accessible to users without extensive bioinformatics experience. Use cases: quick gene lookups, sequence retrieval, variant annotation, protein structure access, and rapid database queries in bioinformatics workflows\n* **geniml** - Genomic interval machine learning toolkit providing unsupervised methods for building ML models on BED files. Key capabilities include Region2Vec (word2vec-style embeddings of genomic regions and region sets using tokenization and neural language modeling), BEDspace (joint embeddings of regions and metadata labels using StarSpace for cross-modal queries), scEmbed (Region2Vec applied to single-cell ATAC-seq data generating cell-level embeddings for clustering and annotation with scanpy integration), consensus peak building (four statistical methods CC/CCF/ML/HMM for creating reference universes from BED collections), and comprehensive utilities (BBClient for BED caching, BEDshift for genomic randomization preserving context, evaluation metrics for embedding quality, Text2BedNN for neural search backends). Part of BEDbase ecosystem. Supports Python API and CLI workflows, pre-trained models on Hugging Face, and integration with gtars for tokenization. Use cases: region similarity searches, dimension reduction of chromatin accessibility data, scATAC-seq clustering and cell-type annotation, metadata-aware genomic queries, universe construction for standardized references, and any ML task requiring genomic region feature vectors\n* **gtars** - High-performance Rust toolkit for genomic interval analysis providing specialized tools for overlap detection using IGD (Integrated Genome Database) indexing, coverage track generation (uniwig module for WIG/BigWig formats), genomic tokenization for machine learning applications (TreeTokenizer for deep learning models), reference sequence management (refget protocol compliance), fragment processing for single-cell genomics (barcode-based splitting and cluster analysis), and fragment scoring against reference datasets. Offers Python bindings with NumPy integration, command-line tools (gtars-cli), and Rust library. Key modules include: tokenizers (convert genomic regions to ML tokens), overlaprs (efficient overlap computation), uniwig (ATAC-seq/ChIP-seq/RNA-seq coverage profiles), refget (GA4GH-compliant sequence digests), bbcache (BEDbase.org integration), scoring (fragment enrichment metrics), and fragsplit (single-cell fragment manipulation). Supports parallel processing, memory-mapped files, streaming for large datasets, and serves as foundation for geniml genomic ML package. Ideal for genomic ML preprocessing, regulatory element analysis, variant annotation, chromatin accessibility profiling, and computational genomics workflows\n* **Polars-Bio** - High-performance genomic interval operations and bioinformatics file I/O on Polars DataFrames. Provides overlap, nearest, merge, coverage, complement, and subtract operations for BED/VCF/BAM/GFF intervals. Streaming and cloud-native architecture for large-scale genomic analyses, serving as a faster alternative to bioframe\n* **pysam** - Read, write, and manipulate genomic data files (SAM/BAM/CRAM alignments, VCF/BCF variants, FASTA/FASTQ sequences) with pileup analysis, coverage calculations, and bioinformatics workflows\n* **PyDESeq2** - Python implementation of the DESeq2 differential gene expression analysis method for bulk RNA-seq data. Provides statistical methods for determining differential expression between experimental conditions using negative binomial generalized linear models. Key features include: size factor estimation for library size normalization, dispersion estimation and shrinkage, hypothesis testing with Wald test or likelihood ratio test, multiple testing correction (Benjamini-Hochberg FDR), results filtering and ranking, and integration with pandas DataFrames. Handles complex experimental designs, batch effects, and replicates. Produces fold-change estimates, p-values, and adjusted p-values for each gene. Use cases: identifying differentially expressed genes between conditions, RNA-seq experiment analysis, biomarker discovery, and gene expression studies requiring rigorous statistical analysis\n* **Scanpy** - Comprehensive Python toolkit for single-cell RNA-seq data analysis built on AnnData. Provides end-to-end workflows for preprocessing (quality control, normalization, log transformation), dimensionality reduction (PCA, UMAP, t-SNE, ForceAtlas2), clustering (Leiden, Louvain, hierarchical clustering), marker gene identification, trajectory inference (PAGA, diffusion maps), and visualization. Key features include: efficient handling of large datasets (millions of cells) using sparse matrices, integration with scvi-tools for advanced analysis, support for multi-modal data (RNA+ATAC, CITE-seq), batch correction methods, and publication-quality plotting functions. Includes extensive documentation, tutorials, and integration with other single-cell tools. Supports GPU acceleration for certain operations. Use cases: single-cell RNA-seq analysis, cell-type identification, trajectory analysis, batch correction, and comprehensive single-cell genomics workflows\n* **scVelo** - RNA velocity analysis for estimating cell state transitions from unspliced/spliced mRNA dynamics. Infers trajectory directions, computes latent time, and identifies driver genes in single-cell RNA-seq data. Complements Scanpy/scVI-tools for trajectory inference, enabling the study of cellular differentiation dynamics and lineage decisions at single-cell resolution\n* **scvi-tools** - Probabilistic deep learning models for single-cell omics analysis. PyTorch-based framework providing variational autoencoders (VAEs) for dimensionality reduction, batch correction, differential expression, and data integration across modalities. Includes 25+ models: scVI/scANVI (RNA-seq integration and cell type annotation), totalVI (CITE-seq protein+RNA), MultiVI (multiome RNA+ATAC integration), PeakVI (ATAC-seq analysis), DestVI/Stereoscope/Tangram (spatial transcriptomics deconvolution), MethylVI (methylation), CytoVI (flow/mass cytometry), VeloVI (RNA velocity), contrastiveVI (perturbation studies), and Solo (doublet detection). Supports seamless integration with Scanpy/AnnData ecosystem, GPU acceleration, reference mapping (scArches), and probabilistic differential expression with uncertainty quantification\n* **scikit-bio** - Python library for bioinformatics providing data structures, algorithms, and parsers for biological sequence analysis. Built on NumPy, SciPy, and pandas. Key features include: sequence objects (DNA, RNA, protein sequences) with biological alphabet validation, sequence alignment algorithms (local, global, semiglobal), phylogenetic tree manipulation, diversity metrics (alpha diversity, beta diversity, phylogenetic diversity), distance metrics for sequences and communities, file format parsers (FASTA, FASTQ, QIIME formats, Newick), and statistical analysis tools. Provides scikit-learn compatible transformers for machine learning workflows. Supports efficient processing of large sequence datasets. Use cases: sequence analysis, microbial ecology (16S rRNA analysis), metagenomics, phylogenetic analysis, and bioinformatics research requiring sequence manipulation and diversity calculations\n* **TileDB-VCF** - High-performance C++ library with Python and CLI interfaces for efficient storage and retrieval of genomic variant-call data using TileDB multidimensional sparse array technology. Enables scalable VCF/BCF ingestion with incremental sample addition, compressed storage, parallel queries across genomic regions and samples, and export capabilities for population genomics workflows. Key features include: memory-efficient queries, cloud storage integration (S3, Azure, GCS), and CLI tools for dataset creation, sample ingestion, data export, and statistics. Supports building variant databases for large cohorts, population-scale genomics studies, and association analysis. Use cases: population genomics databases, cohort studies, variant discovery workflows, genomic data warehousing, and scaling to enterprise-level analysis with TileDB-Cloud platform\n* **Zarr** - Python library implementing the Zarr chunked, compressed N-dimensional array storage format. Provides efficient storage and access to large multi-dimensional arrays with chunking and compression. Key features include: support for NumPy-like arrays with chunked storage, multiple compression codecs (zlib, blosc, lz4, zstd), support for various data types, efficient partial array reading (only load needed chunks), support for both local filesystem and cloud storage (S3, GCS, Azure), and integration with NumPy, Dask, and Xarray. Enables working with arrays larger than available RAM through lazy loading and efficient chunk access. Supports parallel read/write operations and is optimized for cloud storage backends. Use cases: large-scale scientific data storage, cloud-based array storage, out-of-core array operations, and efficient storage of multi-dimensional datasets (genomics, imaging, climate data)\n\n### Data Management & Infrastructure\n\n* **LaminDB** - Open-source data framework for biology that makes data queryable, traceable, reproducible, and FAIR (Findable, Accessible, Interoperable, Reusable). Provides unified platform combining lakehouse architecture, lineage tracking, feature stores, biological ontologies (via Bionty plugin with 20+ ontologies: genes, proteins, cell types, tissues, diseases, pathways), LIMS, and ELN capabilities through a single Python API. Key features include: automatic data lineage tracking (code, inputs, outputs, environment), versioned artifacts (DataFrame, AnnData, SpatialData, Parquet, Zarr), schema validation and data curation with standardization/synonym mapping, queryable metadata with feature-based filtering, cross-registry traversal, and streaming for large datasets. Supports integrations with workflow managers (Nextflow, Snakemake, Redun), MLOps platforms (Weights & Biases, MLflow, HuggingFace, scVI-tools), cloud storage (S3, GCS, S3-compatible), array stores (TileDB-SOMA, DuckDB), and visualization (Vitessce). Deployment options: local SQLite, cloud storage with SQLite, or cloud storage with PostgreSQL for production. Use cases: scRNA-seq standardization and analysis, flow cytometry/spatial data management, multi-modal dataset integration, computational workflow tracking with reproducibility, biological ontology-based annotation, data lakehouse construction for unified queries, ML pipeline integration with experiment tracking, and FAIR-compliant dataset publishing\n* **Modal** - Serverless cloud platform for running Python code with minimal configuration, specialized for AI/ML workloads and scientific computing. Execute functions on powerful GPUs (T4, L4, A10, A100, L40S, H100, H200, B200, B200+), scale automatically from zero to thousands of containers, and pay only for compute used. Key features include: declarative container image building with uv (recommended)/pip/apt package management, automatic autoscaling with configurable limits and buffer containers, GPU acceleration with multi-GPU support (up to 8 GPUs per container, up to 1,536 GB VRAM), persistent storage via Volumes (v1 and v2) for model weights and datasets, secret management for API keys and credentials, scheduled jobs with cron expressions, web endpoints for deploying serverless APIs (FastAPI, ASGI, WSGI, WebSockets), parallel execution with `.map()` for batch processing, input concurrency and dynamic batching for I/O-bound workloads, and resource configuration (CPU cores, memory, ephemeral disk up to 3 TiB). Supports custom Docker images, Micromamba/Conda environments, integration with Hugging Face/Weights & Biases, and distributed multi-GPU training. Free tier includes $30/month credits. Use cases: ML model deployment and inference (LLMs, image generation, speech, embeddings), GPU-accelerated training and fine-tuning, batch processing large datasets in parallel, scheduled compute-intensive jobs, serverless API deployment with autoscaling, protein folding and computational biology, scientific computing requiring distributed compute or specialized hardware, and data pipeline automation\n\n### Cheminformatics & Drug Discovery\n\n* **Datamol** - Python library for molecular manipulation and featurization built on RDKit with enhanced workflows and performance optimizations. Provides utilities for molecular I/O (reading/writing SMILES, SDF, MOL files), molecular standardization and sanitization, molecular transformations (tautomer enumeration, stereoisomer generation), molecular featurization (descriptors, fingerprints, graph representations), parallel processing for large datasets, and integration with machine learning pipelines. Features include: optimized RDKit operations, caching for repeated computations, molecular filtering and preprocessing, and seamless integration with pandas DataFrames. Designed for drug discovery and cheminformatics workflows requiring efficient processing of large compound libraries. Use cases: molecular preprocessing for ML models, compound library management, molecular similarity searches, and cheminformatics data pipelines\n* **DeepChem** - Deep learning framework for molecular machine learning and drug discovery built on TensorFlow and PyTorch. Provides implementations of graph neural networks (GCN, GAT, MPNN, AttentiveFP) for molecular property prediction, molecular featurization (molecular graphs, fingerprints, descriptors), pre-trained models, and MoleculeNet benchmark suite (50+ datasets for molecular property prediction, toxicity, ADMET). Key features include: support for both TensorFlow and PyTorch backends, distributed training, hyperparameter optimization, model interpretation tools, and integration with RDKit. Includes datasets for quantum chemistry, toxicity prediction, ADMET properties, and binding affinity prediction. Use cases: molecular property prediction, drug discovery, ADMET prediction, toxicity screening, and molecular machine learning research\n* **DiffDock** - State-of-the-art diffusion-based molecular docking method for predicting protein-ligand binding poses and binding affinities. Uses diffusion models to generate diverse, high-quality binding poses without requiring exhaustive search. Key features include: fast inference compared to traditional docking methods, generation of multiple diverse poses, confidence scoring for predictions, and support for flexible ligand docking. Provides pre-trained models and Python API for integration into drug discovery pipelines. Achieves superior performance on standard benchmarks (PDBbind, CASF) compared to traditional docking methods. Use cases: virtual screening, lead optimization, binding pose prediction, structure-based drug design, and initial pose generation for refinement with more expensive methods\n* **MedChem** - Python library for medicinal chemistry analysis and drug-likeness assessment. Provides tools for calculating molecular descriptors, ADMET (Absorption, Distribution, Metabolism, Excretion, Toxicity) property prediction, drug-likeness filters (Lipinski's Rule of Five, Veber rules, Egan rules, Muegge rules), molecular complexity metrics, and synthetic accessibility scoring. Features include: integration with RDKit, parallel processing for large datasets, and comprehensive property calculators. Supports filtering compound libraries based on drug-like properties, identifying potential ADMET issues early in drug discovery, and prioritizing compounds for further development. Use cases: lead optimization, compound library filtering, ADMET prediction, drug-likeness assessment, and medicinal chemistry analysis in drug discovery workflows\n* **Molfeat** - Comprehensive Python library providing 100+ molecular featurizers for converting molecules into numerical representations suitable for machine learning. Includes molecular fingerprints (ECFP, MACCS, RDKit, Pharmacophore), molecular descriptors (2D/3D descriptors, constitutional, topological, electronic), graph-based representations (molecular graphs, line graphs), and pre-trained models (MolBERT, ChemBERTa, Uni-Mol embeddings). Features unified API across different featurizer types, caching for performance, parallel processing, and integration with popular ML frameworks (scikit-learn, PyTorch, TensorFlow). Supports both traditional cheminformatics descriptors and modern learned representations. Use cases: molecular property prediction, virtual screening, molecular similarity searches, and preparing molecular data for machine learning models\n* **PyTDC** - Python library providing access to Therapeutics Data Commons (TDC), a collection of curated datasets and benchmarks for drug discovery and development. Includes datasets for ADMET prediction (absorption, distribution, metabolism, excretion, toxicity), drug-target interactions, drug-drug interactions, drug response prediction, molecular generation, and retrosynthesis. Features standardized data formats, data loaders with automatic preprocessing, benchmark tasks with evaluation metrics, leaderboards for model comparison, and integration with popular ML frameworks. Provides both single-molecule and drug-pair datasets, covering various stages of drug discovery from target identification to clinical outcomes. Use cases: benchmarking ML models for drug discovery, ADMET prediction model development, drug-target interaction prediction, and drug discovery research\n* **RDKit** - Open-source cheminformatics toolkit for molecular informatics and drug discovery. Provides comprehensive functionality for molecular I/O (reading/writing SMILES, SDF, MOL, PDB files), molecular descriptors (200+ 2D and 3D descriptors), molecular fingerprints (Morgan, RDKit, MACCS, topological torsions), SMARTS pattern matching for substructure searches, molecular alignment and 3D coordinate generation, pharmacophore perception, reaction handling, and molecular drawing. Features high-performance C++ core with Python bindings, support for large molecule sets, and extensive documentation. Widely used in pharmaceutical industry and academic research. Use cases: molecular property calculation, virtual screening, molecular similarity searches, substructure matching, molecular visualization, and general cheminformatics workflows\n* **Rowan** - Cloud-based quantum chemistry platform with Python API for computational chemistry workflows. Provides access to 45+ chemistry calculations including pKa prediction, redox potentials, solubility, conformer searching, geometry optimization, protein-ligand docking (AutoDock Vina), and AI-powered protein cofolding (Chai-1, Boltz-1/2). Supports DFT, semiempirical (GFN-xTB), and neural network potential methods (AIMNet2, Egret). Key features include: automatic cloud resource allocation, unified API for diverse computational methods, RDKit-native interface for seamless cheminformatics integration, workflow organization with folders and projects, batch processing, and web interface for visualization. Requires API key from labs.rowansci.com. Use cases: molecular property prediction, structure-based drug design, virtual screening campaigns, protein-ligand binding prediction, conformational analysis, and automated computational chemistry pipelines\n* **TorchDrug** - PyTorch-based machine learning platform for drug discovery with 40+ datasets, 20+ GNN models for molecular property prediction, protein modeling, knowledge graph reasoning, molecular generation, and retrosynthesis planning\n\n### Proteomics & Mass Spectrometry\n\n* **matchms** - Processing and similarity matching of mass spectrometry data with 40+ filters, spectral library matching (Cosine, Modified Cosine, Neutral Losses), metadata harmonization, molecular fingerprint comparison, and support for multiple file formats (MGF, MSP, mzML, JSON)\n* **pyOpenMS** - Comprehensive mass spectrometry data analysis for proteomics and metabolomics (LC-MS/MS processing, peptide identification, feature detection, quantification, chemical calculations, and integration with search engines like Comet, Mascot, MSGF+)\n\n### Medical Imaging & Digital Pathology\n\n* **histolab** - Digital pathology toolkit for whole slide image (WSI) processing and analysis. Provides automated tissue detection, tile extraction for deep learning pipelines, and preprocessing for gigapixel histopathology images. Key features include: multi-format WSI support (SVS, TIFF, NDPI), three tile extraction strategies (RandomTiler for sampling, GridTiler for complete coverage, ScoreTiler for quality-driven selection), automated tissue masks with customizable filters, built-in scorers (NucleiScorer, CellularityScorer), pyramidal image handling, visualization tools (thumbnails, mask overlays, tile previews), and H&E stain decomposition. Supports multiple tissue sections, artifact removal, pen annotation exclusion, and reproducible extraction with seeding. Use cases: creating training datasets for computational pathology, extracting informative tiles for tumor classification, whole-slide tissue characterization, quality assessment of histology samples, automated nuclei density analysis, and preprocessing for digital pathology deep learning workflows\n* **PathML** - Comprehensive computational pathology toolkit for whole slide image analysis, tissue segmentation, and machine learning on pathology data. Provides end-to-end workflows for digital pathology research including data loading, preprocessing, feature extraction, and model deployment\n* **pydicom** - Pure Python package for working with DICOM (Digital Imaging and Communications in Medicine) files. Provides comprehensive support for reading, writing, and manipulating medical imaging data from CT, MRI, X-ray, ultrasound, PET scans and other modalities. Key features include: pixel data extraction and manipulation with automatic decompression (JPEG/JPEG 2000/RLE), metadata access and modification with 1000+ standardized DICOM tags, image format conversion (PNG/JPEG/TIFF), anonymization tools for removing Protected Health Information (PHI), windowing and display transformations (VOI LUT application), multi-frame and 3D volume processing, DICOM sequence handling, and support for multiple transfer syntaxes. Use cases: medical image analysis, PACS system integration, radiology workflows, research data processing, DICOM anonymization, format conversion, image preprocessing for machine learning, multi-slice volume reconstruction, and clinical imaging pipelines\n\n### Healthcare AI & Clinical Machine Learning\n\n* **NeuroKit2** - Comprehensive biosignal processing toolkit for analyzing physiological data including ECG, EEG, EDA, RSP, PPG, EMG, and EOG signals. Use this skill when processing cardiovascular signals, brain activity, electrodermal responses, respiratory patterns, muscle activity, or eye movements. Key features include: automated signal processing pipelines (cleaning, peak detection, delineation, quality assessment), heart rate variability analysis across time/frequency/nonlinear domains (SDNN, RMSSD, LF/HF, DFA, entropy measures), EEG analysis (frequency band power, microstates, source localization), autonomic nervous system assessment (sympathetic indices, respiratory sinus arrhythmia), comprehensive complexity measures (25+ entropy types, 15+ fractal dimensions, Lyapunov exponents), event-related and interval-related analysis modes, epoch creation and averaging for stimulus-locked responses, multi-signal integration with unified workflows, and extensive signal processing utilities (filtering, decomposition, peak correction, spectral analysis). Includes modular reference documentation across 12 specialized domains. Use cases: heart rate variability for cardiovascular health assessment, EEG microstates for consciousness studies, electrodermal activity for emotion research, respiratory variability analysis, psychophysiology experiments, affective computing, stress monitoring, sleep staging, autonomic dysfunction assessment, biofeedback applications, and multi-modal physiological signal integration for comprehensive human state monitoring\n* **PyHealth** - Comprehensive healthcare AI toolkit for developing, testing, and deploying machine learning models with clinical data. Provides specialized tools for electronic health records (EHR), physiological signals, medical imaging, and clinical text analysis. Key features include: 10+ healthcare datasets (MIMIC-III/IV, eICU, OMOP, sleep EEG, COVID-19 CXR), 20+ predefined clinical prediction tasks (mortality, hospital readmission, length of stay, drug recommendation, sleep staging, EEG analysis), 33+ models (Logistic Regression, MLP, CNN, RNN, Transformer, GNN, plus healthcare-specific models like RETAIN, SafeDrug, GAMENet, StageNet), comprehensive data processing (sequence processors, signal processors, medical code translation between ICD-9/10, NDC, RxNorm, ATC systems), training/evaluation utilities (Trainer class, fairness metrics, calibration, uncertainty quantification), and interpretability tools (attention visualization, SHAP, ChEFER). 3x faster than pandas for healthcare data processing. Use cases: ICU mortality prediction, hospital readmission risk assessment, safe medication recommendation with drug-drug interaction constraints, sleep disorder diagnosis from EEG signals, medical code standardization and translation, clinical text to ICD coding, length of stay estimation, and any clinical ML application requiring interpretability, fairness assessment, and calibrated predictions for healthcare deployment\n\n### Clinical Documentation & Decision Support\n\n* **Clinical Decision Support** - Generate professional clinical decision support (CDS) documents for pharmaceutical and clinical research settings. Includes patient cohort analyses (biomarker-stratified with outcomes) and treatment recommendation reports (evidence-based guidelines with decision algorithms). Features GRADE evidence grading, statistical analysis (hazard ratios, survival curves, waterfall plots), biomarker integration (genomic alterations, gene expression signatures, IHC markers), and regulatory compliance. Use cases: pharmaceutical cohort reporting, clinical guideline development, comparative effectiveness analyses, treatment algorithm creation, and evidence synthesis for drug development\n* **Clinical Reports** - Write comprehensive clinical reports following established guidelines and standards. Covers case reports (CARE guidelines), diagnostic reports (radiology, pathology, laboratory), clinical trial reports (ICH-E3, SAE, CSR), and patient documentation (SOAP notes, H&P, discharge summaries). Includes templates, regulatory compliance (HIPAA, FDA, ICH-GCP), and validation tools. Use cases: journal case reports, diagnostic findings documentation, clinical trial reporting, patient progress notes, and regulatory submissions\n* **Treatment Plans** - Generate concise (3-4 page), focused medical treatment plans in LaTeX/PDF format for all clinical specialties. Supports general medical treatment, rehabilitation therapy, mental health care, chronic disease management, perioperative care, and pain management. Features SMART goal frameworks, evidence-based interventions, HIPAA compliance, and professional formatting. Use cases: individualized patient care plans, rehabilitation programs, psychiatric treatment plans, surgical care pathways, and pain management protocols\n\n### Neuroscience & Electrophysiology\n\n* **Neuropixels-Analysis** - Comprehensive toolkit for analyzing Neuropixels high-density neural recordings using SpikeInterface, Allen Institute, and International Brain Laboratory (IBL) best practices. Supports the full workflow from raw data to publication-ready curated units. Key features include: data loading from SpikeGLX, Open Ephys, and NWB formats, preprocessing pipelines (highpass filtering, phase shift correction for Neuropixels 1.0, bad channel detection, common average referencing), motion/drift estimation and correction (kilosort\\_like and nonrigid\\_accurate presets), spike sorting integration (Kilosort4 GPU, SpykingCircus2, Mountainsort5 CPU), comprehensive postprocessing (waveform extraction, template computation, spike amplitudes, correlograms, unit locations), quality metrics computation (SNR, ISI violations, presence ratio, amplitude cutoff, drift metrics), automated curation using Allen Institute and IBL criteria with configurable thresholds, AI-assisted visual curation for uncertain units using Claude API, and export to Phy for manual review or NWB for sharing. Supports Neuropixels 1.0 (960 electrodes, 384 channels) and Neuropixels 2.0 (single and 4-shank configurations). Use cases: extracellular electrophysiology analysis, spike sorting from silicon probes, neural population recordings, systems neuroscience research, unit quality assessment, publication-ready neural data processing, and integration of AI-assisted curation for borderline units\n\n### Protein Engineering & Design\n\n* **Adaptyv** - Cloud laboratory platform for automated protein testing and validation. Submit protein sequences via API or web interface and receive experimental results in approximately 21 days. Supports multiple assay types including binding assays (biolayer interferometry for protein-target interactions, KD/kon/koff measurements), expression testing (quantify protein expression levels in E. coli, mammalian, yeast, or insect cells), thermostability measurements (DSF and CD for Tm determination and thermal stability profiling), and enzyme activity assays (kinetic parameters, substrate specificity, inhibitor testing). Includes computational optimization tools for pre-screening sequences: NetSolP/SoluProt for solubility prediction, SolubleMPNN for sequence redesign to improve expression, ESM for sequence likelihood scoring, ipTM (AlphaFold-Multimer) for interface stability assessment, and pSAE for aggregation risk quantification. Platform features automated workflows from expression through purification to assay execution with quality control, webhook notifications for experiment completion, batch submission support for high-throughput screening, and comprehensive results with kinetic parameters, confidence metrics, and raw data access. Use cases: antibody affinity maturation, therapeutic protein developability assessment, enzyme engineering and optimization, protein stability improvement, AI-driven protein design validation, library screening for expression and function, lead optimization with experimental feedback, and integration of computational design with wet-lab validation in iterative design-build-test-learn cycles\n* **ESM (Evolutionary Scale Modeling)** - State-of-the-art protein language models from EvolutionaryScale for protein design, structure prediction, and representation learning. Includes ESM3 (1.4B-98B parameter multimodal generative models for simultaneous reasoning across sequence, structure, and function with chain-of-thought generation, inverse folding, and function-conditioned design) and ESM C (300M-6B parameter efficient embedding models 3x faster than ESM2 for similarity analysis, classification, and feature extraction). Supports local inference with open weights and cloud-based Forge API for scalable batch processing. Use cases: novel protein design, structure prediction from sequence, sequence design from structure, protein embeddings, function annotation, variant generation, and directed evolution workflows\n* **Glycoengineering** - Analyze and engineer protein glycosylation. Scan sequences for N-glycosylation sequons (N-X-S/T), predict O-glycosylation hotspots, and access curated glycoengineering tools (NetOGlyc, GlycoShield, GlycoWorkbench). Use for glycoprotein engineering, therapeutic antibody optimization, and vaccine design\n* **Molecular Dynamics** - Run and analyze molecular dynamics simulations with OpenMM and MDAnalysis. Set up protein/small molecule systems, define force fields, run energy minimization and production MD, analyze trajectories (RMSD, RMSF, contact maps, free energy surfaces). Use for structural biology, drug binding studies, and biophysics research\n\n### Machine Learning & Deep Learning\n\n* **aeon** - Comprehensive scikit-learn compatible Python toolkit for time series machine learning providing state-of-the-art algorithms across 7 domains: classification (13 algorithm categories including ROCKET variants, deep learning with InceptionTime/ResNet/FCN, distance-based with DTW/ERP/LCSS, shapelet-based, dictionary methods like BOSS/WEASEL, and hybrid ensembles HIVECOTE), regression (9 categories mirroring classification approaches), clustering (k-means/k-medoids with temporal distances, deep learning autoencoders, spectral methods), forecasting (ARIMA, ETS, Theta, Threshold Autoregressive, TCN, DeepAR), anomaly detection (STOMP/MERLIN matrix profile, clustering-based CBLOF/KMeans, isolation methods, copula-based COPOD), segmentation (ClaSP, FLUSS, HMM, binary segmentation), and similarity search (MASS algorithm, STOMP motif discovery, approximate nearest neighbors). Includes 40+ distance metrics (elastic: DTW/DDTW/WDTW/Shape-DTW, edit-based: ERP/EDR/LCSS/TWE/MSM, lock-step: Euclidean/Manhattan), extensive transformations (ROCKET/MiniRocket/MultiRocket for features, Catch22/TSFresh for statistics, SAX/PAA for symbolic representation, shapelet transforms, wavelets, matrix profile), 20+ deep learning architectures (FCN, ResNet, InceptionTime, TCN, autoencoders with attention mechanisms), comprehensive benchmarking tools (UCR/UEA archives with 100+ datasets, published results repository, statistical testing), and performance-optimized implementations using numba. Features progressive model complexity from fast baselines (MiniRocket: <1 second training, 0.95+ accuracy on many benchmarks) to state-of-the-art ensembles (HIVECOTE V2), GPU acceleration support, and extensive visualization utilities. Use cases: physiological signal classification (ECG, EEG), industrial sensor monitoring, financial forecasting, change point detection, pattern discovery, activity recognition from wearables, predictive maintenance, climate time series analysis, and any sequential data requiring specialized temporal modeling beyond standard ML\n* **Cirq** - Google quantum computing framework for designing, simulating, and running quantum circuits. Best suited for targeting Google Quantum AI hardware, designing noise-aware circuits, and running quantum characterization experiments. Provides low-level circuit design, noise modeling, and hardware-specific optimizations. For IBM hardware use Qiskit; for quantum ML with autodiff use PennyLane; for physics simulations use QuTiP\n* **PufferLib** - High-performance reinforcement learning library achieving 1M-4M steps/second through optimized vectorization, native multi-agent support, and efficient PPO training (PuffeRL). Use this skill for RL training on any environment (Gymnasium, PettingZoo, Atari, Procgen), creating custom PufferEnv environments, developing policies (CNN, LSTM, multi-input architectures), optimizing parallel simulation performance, or scaling multi-agent systems. Includes Ocean suite (20+ environments), seamless framework integration with automatic space flattening, zero-copy vectorization with shared memory buffers, distributed training support, and comprehensive reference guides for training workflows, environment development, vectorization optimization, policy architectures, and third-party integrations\n* **PyMC** - Comprehensive Python library for Bayesian statistical modeling and probabilistic programming. Provides intuitive syntax for building probabilistic models, advanced MCMC sampling algorithms (NUTS, Metropolis-Hastings, Slice sampling), variational inference methods (ADVI, SVGD), Gaussian processes, time series models (ARIMA, state space models), and model comparison tools (WAIC, LOO). Features include: automatic differentiation via Aesara (formerly Theano), GPU acceleration support, parallel sampling, model diagnostics and convergence checking, and integration with ArviZ for visualization and analysis. Supports hierarchical models, mixture models, survival analysis, and custom distributions. Use cases: Bayesian data analysis, uncertainty quantification, A/B testing, time series forecasting, hierarchical modeling, and probabilistic machine learning\n* **PyMOO** - Python framework for multi-objective optimization using evolutionary algorithms. Provides implementations of state-of-the-art algorithms including NSGA-II, NSGA-III, MOEA/D, SPEA2, and reference-point based methods. Features include: support for constrained and unconstrained optimization, multiple problem types (continuous, discrete, mixed-variable), performance indicators (hypervolume, IGD, GD), visualization tools (Pareto front plots, convergence plots), and parallel evaluation support. Supports custom problem definitions, algorithm configuration, and result analysis. Designed for engineering design, parameter optimization, and any problem requiring optimization of multiple conflicting objectives simultaneously. Use cases: multi-objective optimization problems, Pareto-optimal solution finding, engineering design optimization, and research in evolutionary computation\n* **PyTorch Lightning** - Deep learning framework that organizes PyTorch code to eliminate boilerplate while maintaining full flexibility. Automates training workflows (40+ tasks including epoch/batch iteration, optimizer steps, gradient management, checkpointing), supports multi-GPU/TPU training with DDP/FSDP/DeepSpeed strategies, includes LightningModule for model organization, Trainer for automation, LightningDataModule for data pipelines, callbacks for extensibility, and integrations with TensorBoard, Wandb, MLflow for experiment tracking\n* **PennyLane** - Cross-platform Python library for quantum computing, quantum machine learning, and quantum chemistry. Enables building and training quantum circuits with automatic differentiation, seamless integration with PyTorch/JAX/NumPy, and device-independent execution across simulators and quantum hardware (IBM, Amazon Braket, Google, Rigetti, IonQ). Key features include: quantum circuit construction with QNodes (quantum functions with automatic differentiation), 100+ quantum gates and operations (Pauli, Hadamard, rotation, controlled gates), circuit templates and layers for common ansatze (StronglyEntanglingLayers, BasicEntanglerLayers, UCCSD for chemistry), gradient computation methods (parameter-shift rule for hardware, backpropagation for simulators, adjoint differentiation), quantum chemistry module (molecular Hamiltonian construction, VQE for ground state energy, differentiable Hartree-Fock solver), ML framework integration (TorchLayer for PyTorch models, JAX transformations, TensorFlow deprecated), built-in optimizers (Adam, GradientDescent, QNG, Rotosolve), measurement types (expectation values, probabilities, samples, state vectors), device ecosystem (default.qubit simulator, lightning.qubit for performance, hardware plugins for IBM/Braket/Cirq/Rigetti/IonQ), and Catalyst for just-in-time compilation with adaptive circuits. Supports variational quantum algorithms (VQE, QAOA), quantum neural networks, hybrid quantum-classical models, data encoding strategies (angle, amplitude, IQP embeddings), and pulse-level programming. Use cases: variational quantum eigensolver for molecular simulations, quantum circuit machine learning with gradient-based optimization, hybrid quantum-classical neural networks, quantum chemistry calculations with differentiable workflows, quantum algorithm prototyping with hardware-agnostic code, quantum machine learning research with automatic differentiation, and deploying quantum circuits across multiple quantum computing platforms\n* **Qiskit** - World's most popular open-source quantum computing framework for building, optimizing, and executing quantum circuits with 13M+ downloads and 74% developer preference. Provides comprehensive tools for quantum algorithm development including circuit construction with 100+ quantum gates (Pauli, Hadamard, CNOT, rotation gates, controlled gates), circuit transpilation with 83x faster optimization than competitors producing circuits with 29% fewer two-qubit gates, primitives for execution (Sampler for bitstring measurements and probability distributions, Estimator for expectation values and observables), visualization tools (circuit diagrams in matplotlib/LaTeX, result histograms, Bloch sphere, state visualizations), backend-agnostic execution (local simulators including StatevectorSampler and Aer, IBM Quantum hardware with 100+ qubit systems, IonQ trapped ion, Amazon Braket multi-provider), session and batch modes for iterative and parallel workloads, error mitigation with configurable resilience levels (readout error correction, ZNE, PEC reducing sampling overhead by 100x), four-step patterns workflow (Map classical problems to quantum circuits, Optimize through transpilation, Execute with primitives, Post-process results), algorithm libraries including Qiskit Nature for quantum chemistry (molecular Hamiltonians, VQE for ground states, UCCSD ansatz, multiple fermion-to-qubit mappings), Qiskit Optimization for combinatorial problems (QAOA, portfolio optimization, MaxCut), and Qiskit Machine Learning (quantum kernels, VQC, QNN), support for Python/C/Rust with modular architecture, parameterized circuits for variational algorithms, quantum Fourier transform, Grover search, Shor's algorithm, pulse-level control, IBM Quantum Runtime for cloud execution with job management and queuing, and comprehensive documentation with textbook and tutorials. Use cases: variational quantum eigensolver for molecular ground state energy, QAOA for combinatorial optimization problems, quantum chemistry simulations with multiple ansatze and mappings, quantum machine learning with kernel methods and neural networks, hybrid quantum-classical algorithms, quantum algorithm research and prototyping across multiple hardware platforms, quantum circuit optimization and benchmarking, quantum error mitigation and characterization, quantum information science experiments, and production quantum computing workflows on real quantum hardware\n* **QuTiP** - Quantum Toolbox in Python for simulating and analyzing quantum mechanical systems. Provides comprehensive tools for both closed (unitary) and open (dissipative) quantum systems including quantum states (kets, bras, density matrices, Fock states, coherent states), quantum operators (creation/annihilation operators, Pauli matrices, angular momentum operators, quantum gates), time evolution solvers (Schrödinger equation with sesolve, Lindblad master equation with mesolve, quantum trajectories with Monte Carlo mcsolve, Bloch-Redfield brmesolve, Floquet methods for periodic Hamiltonians), analysis tools (expectation values, entropy measures, fidelity, concurrence, correlation functions, steady state calculations), visualization (Bloch sphere with animations, Wigner functions, Q-functions, Fock distributions, matrix histograms), and advanced methods (Hierarchical Equations of Motion for non-Markovian dynamics, permutational invariance for identical particles, stochastic solvers, superoperators). Supports tensor products for composite systems, partial traces, time-dependent Hamiltonians, multiple dissipation channels, and parallel processing. Includes extensive documentation, tutorials, and examples. Use cases: quantum optics simulations (cavity QED, photon statistics), quantum computing (gate operations, circuit dynamics), open quantum systems (decoherence, dissipation), quantum information theory (entanglement dynamics, quantum channels), condensed matter physics (spin chains, many-body systems), and general quantum mechanics research and education\n* **scikit-learn** - Industry-standard Python library for classical machine learning providing comprehensive supervised learning (classification: Logistic Regression, SVM, Decision Trees, Random Forests with 17+ variants, Gradient Boosting with XGBoost-compatible HistGradientBoosting, Naive Bayes, KNN, Neural Networks/MLP; regression: Linear, Ridge, Lasso, ElasticNet, SVR, ensemble methods), unsupervised learning (clustering: K-Means, DBSCAN, HDBSCAN, OPTICS, Agglomerative/Hierarchical, Spectral, Gaussian Mixture Models, BIRCH, MeanShift; dimensionality reduction: PCA, Kernel PCA, t-SNE, Isomap, LLE, NMF, TruncatedSVD, FastICA, LDA; outlier detection: IsolationForest, LocalOutlierFactor, OneClassSVM), data preprocessing (scaling: StandardScaler, MinMaxScaler, RobustScaler; encoding: OneHotEncoder, OrdinalEncoder, LabelEncoder; imputation: SimpleImputer, KNNImputer, IterativeImputer; feature engineering: PolynomialFeatures, KBinsDiscretizer, text vectorization with CountVectorizer/TfidfVectorizer), model evaluation (cross-validation: KFold, StratifiedKFold, TimeSeriesSplit, GroupKFold; hyperparameter tuning: GridSearchCV, RandomizedSearchCV, HalvingGridSearchCV; metrics: 30+ evaluation metrics for classification/regression/clustering including accuracy, precision, recall, F1, ROC-AUC, MSE, R², silhouette score), and Pipeline/ColumnTransformer for production-ready workflows. Features consistent API (fit/predict/transform), extensive documentation, integration with NumPy/pandas/SciPy, joblib persistence, and scikit-learn-compatible ecosystem (XGBoost, LightGBM, CatBoost, imbalanced-learn). Optimized implementations using Cython/OpenMP for performance. Use cases: predictive modeling, customer segmentation, anomaly detection, feature engineering, model selection/validation, text classification, image classification (with feature extraction), time series forecasting (with preprocessing), medical diagnosis, fraud detection, recommendation systems, and any tabular data ML task requiring interpretable models or established algorithms\n* **scikit-survival** - Survival analysis and time-to-event modeling with censored data. Built on scikit-learn, provides Cox proportional hazards models (CoxPHSurvivalAnalysis, CoxnetSurvivalAnalysis with elastic net regularization), ensemble methods (Random Survival Forests, Gradient Boosting), Survival Support Vector Machines (linear and kernel), non-parametric estimators (Kaplan-Meier, Nelson-Aalen), competing risks analysis, and specialized evaluation metrics (concordance index, time-dependent AUC, Brier score). Handles right-censored data, integrates with scikit-learn pipelines, and supports feature selection and hyperparameter tuning via cross-validation\n* **SHAP** - Model interpretability and explainability using Shapley values from game theory. Provides unified approach to explain any ML model with TreeExplainer (fast exact explanations for XGBoost/LightGBM/Random Forest), DeepExplainer (TensorFlow/PyTorch neural networks), KernelExplainer (model-agnostic), and LinearExplainer. Includes comprehensive visualizations (waterfall plots for individual predictions, beeswarm plots for global importance, scatter plots for feature relationships, bar/force/heatmap plots), supports model debugging, fairness analysis, feature engineering guidance, and production deployment\n* **Stable Baselines3** - PyTorch-based reinforcement learning library providing reliable implementations of RL algorithms (PPO, SAC, DQN, TD3, DDPG, A2C, HER, RecurrentPPO). Use this skill for training RL agents on standard or custom Gymnasium environments, implementing callbacks for monitoring and control, using vectorized environments for parallel training, creating custom environments with proper Gymnasium API implementation, and integrating with deep RL workflows. Includes comprehensive training templates, evaluation utilities, algorithm selection guidance (on-policy vs off-policy, continuous vs discrete actions), support for multi-input policies (dict observations), goal-conditioned learning with HER, and integration with TensorBoard for experiment tracking\n* **statsmodels** - Statistical modeling and econometrics (OLS, GLM, logit/probit, ARIMA, time series forecasting, hypothesis testing, diagnostics)\n* **TimesFM Forecasting** - Zero-shot time series forecasting with Google's TimesFM foundation model. Use for any univariate time series (sales, sensors, energy, vitals, weather) without training a custom model. Supports CSV/DataFrame/array inputs with point forecasts and prediction intervals. Includes a preflight system checker script to verify RAM/GPU before first use\n* **Torch Geometric** - Graph Neural Networks for molecular and geometric data\n* **Transformers** - State-of-the-art machine learning models for NLP, computer vision, audio, and multimodal tasks. Provides 1M+ pre-trained models accessible via pipelines (text-classification, NER, QA, summarization, translation, text-generation, image-classification, object-detection, ASR, VQA), comprehensive training via Trainer API with distributed training and mixed precision, flexible text generation with multiple decoding strategies (greedy, beam search, sampling), and Auto classes for automatic architecture selection (BERT, GPT, T5, ViT, BART, etc.)\n* **UMAP-learn** - Python implementation of Uniform Manifold Approximation and Projection (UMAP) for dimensionality reduction and manifold learning. Provides fast, scalable nonlinear dimensionality reduction that preserves both local and global structure of high-dimensional data. Key features include: support for both supervised and unsupervised dimensionality reduction, ability to handle mixed data types, integration with scikit-learn API, and efficient implementation using numba for performance. Produces low-dimensional embeddings (typically 2D or 3D) suitable for visualization and downstream analysis. Often outperforms t-SNE in preserving global structure while maintaining local neighborhoods. Use cases: data visualization, feature extraction, preprocessing for machine learning, single-cell data analysis, and exploratory data analysis of high-dimensional datasets\n\n### Materials Science & Chemistry\n\n* **Astropy** - Comprehensive Python library for astronomy and astrophysics providing core functionality for astronomical research and data analysis. Includes coordinate system transformations (ICRS, Galactic, FK5, AltAz), physical units and quantities with automatic dimensional consistency, FITS file operations (reading, writing, manipulating headers and data), cosmological calculations (luminosity distance, lookback time, Hubble parameter, Planck/WMAP models), precise time handling across multiple time scales (UTC, TAI, TT, TDB) and formats (JD, MJD, ISO), table operations with unit support (FITS, CSV, HDF5, VOTable), WCS transformations between pixel and world coordinates, astronomical constants, modeling framework, visualization tools, and statistical functions. Use for celestial coordinate transformations, unit conversions, FITS image/table processing, cosmological distance calculations, barycentric time corrections, catalog cross-matching, and astronomical data analysis\n* **COBRApy** - Python package for constraint-based reconstruction and analysis (COBRA) of metabolic networks. Provides tools for building, manipulating, and analyzing genome-scale metabolic models (GEMs). Key features include: flux balance analysis (FBA) for predicting optimal metabolic fluxes, flux variability analysis (FVA), gene knockout simulations, pathway analysis, model validation, and integration with other COBRA Toolbox formats (SBML, JSON). Supports various optimization objectives (biomass production, ATP production, metabolite production), constraint handling (reaction bounds, gene-protein-reaction associations), and model comparison. Includes utilities for model construction, gap filling, and model refinement. Use cases: metabolic engineering, systems biology, biotechnology applications, understanding cellular metabolism, and predicting metabolic phenotypes\n* **Pymatgen** - Python Materials Genomics (pymatgen) library for materials science computation and analysis. Provides comprehensive tools for crystal structure manipulation, phase diagram construction, electronic structure analysis, and materials property calculations. Key features include: structure objects with symmetry analysis, space group determination, structure matching and comparison, phase diagram generation from formation energies, band structure and density of states analysis, defect calculations, surface and interface analysis, and integration with DFT codes (VASP, Quantum ESPRESSO, ABINIT). Supports Materials Project database integration, structure file I/O (CIF, POSCAR, VASP), and high-throughput materials screening workflows. Use cases: materials discovery, crystal structure analysis, phase stability prediction, electronic structure calculations, and computational materials science research\n\n### Engineering & Simulation\n\n* **MATLAB/Octave** - Numerical computing environment for matrix operations, data analysis, visualization, and scientific computing. MATLAB is commercial software optimized for matrix operations, while GNU Octave is a free open-source alternative with high compatibility. Key features include: matrix operations (creation, manipulation, linear algebra), comprehensive mathematics (eigenvalues, SVD, FFT, ODEs, optimization, statistics), 2D/3D visualization (plot, surf, contour, with extensive customization), data import/export (CSV, Excel, MAT files, images), programming constructs (functions, scripts, control flow, OOP), signal processing (FFT, filtering, convolution), and Python integration (calling Python from MATLAB and vice versa). Supports vectorized operations for performance, anonymous functions, tables for mixed data types, and cell arrays for heterogeneous data. GNU Octave provides compatibility with most MATLAB scripts with minor differences (comments with #, block terminators like endif, compound operators like +=). Scripts can be executed via `matlab -nodisplay -r \"run('script.m'); exit;\"` or `octave script.m`. Use cases: numerical simulations, signal processing, image processing, control systems, statistical analysis, algorithm prototyping, data visualization, and any scientific computing task requiring matrix operations or numerical methods\n* **FluidSim** - Object-oriented Python framework for high-performance computational fluid dynamics (CFD) simulations using pseudospectral methods with FFT. Provides solvers for periodic-domain equations including 2D/3D incompressible Navier-Stokes equations (with/without stratification), shallow water equations, and Föppl-von Kármán elastic plate equations. Key features include: Pythran/Transonic compilation for performance comparable to Fortran/C++, MPI parallelization for large-scale simulations, hierarchical parameter configuration with type safety, comprehensive output management (physical fields in HDF5, spatial means, energy/enstrophy spectra, spectral energy budgets), custom forcing mechanisms (time-correlated random forcing, proportional forcing, script-defined forcing), flexible initial conditions (noise, vortex, dipole, Taylor-Green, from file, in-script), online and offline visualization, and integration with ParaView/VisIt for 3D visualization. Supports workflow features including simulation restart/continuation, parametric studies with batch execution, cluster submission integration, and adaptive CFL-based time stepping. Use cases: 2D/3D turbulence studies with energy cascade analysis, stratified oceanic and atmospheric flows with buoyancy effects, geophysical flows with rotation (Coriolis effects), vortex dynamics and fundamental fluid mechanics research, high-resolution direct numerical simulation (DNS), parametric studies exploring parameter spaces, validation studies (Taylor-Green vortex), and any periodic-domain fluid dynamics research requiring HPC-grade performance with Python flexibility\n* **SimPy** - Process-based discrete-event simulation framework for modeling systems with processes, queues, and resource contention (manufacturing, service operations, network traffic, logistics). Supports generator-based process definition, multiple resource types (Resource, PriorityResource, PreemptiveResource, Container, Store), event-driven scheduling, process interaction mechanisms (signaling, interruption, parallel/sequential execution), real-time simulation synchronized with wall-clock time, and comprehensive monitoring capabilities for utilization, wait times, and queue statistics\n* **SymPy** - Symbolic mathematics in Python for exact computation using mathematical symbols rather than numerical approximations. Provides comprehensive support for symbolic algebra (simplification, expansion, factorization), calculus (derivatives, integrals, limits, series), equation solving (algebraic, differential, systems of equations), matrices and linear algebra (eigenvalues, decompositions, solving linear systems), physics (classical mechanics with Lagrangian/Hamiltonian formulations, quantum mechanics, vector analysis, units), number theory (primes, factorization, modular arithmetic, Diophantine equations), geometry (2D/3D analytic geometry), combinatorics (permutations, combinations, partitions, group theory), logic and sets, statistics (probability distributions, random variables), special functions (gamma, Bessel, orthogonal polynomials), and code generation (lambdify to NumPy/SciPy functions, C/Fortran code generation, LaTeX output for documentation). Emphasizes exact arithmetic using rational numbers and symbolic representations, supports assumptions for improved simplification (positive, real, integer), integrates seamlessly with NumPy/SciPy through lambdify for fast numerical evaluation, and enables symbolic-to-numeric pipelines for scientific computing workflows\n\n### Data Analysis & Visualization\n\n* **Dask** - Parallel computing for larger-than-memory datasets with distributed DataFrames, Arrays, Bags, and Futures\n* **GeoMaster** - Comprehensive geospatial science skill covering remote sensing, GIS, spatial analysis, machine learning for earth observation, and 30+ scientific domains. Supports satellite imagery processing (Sentinel, Landsat, MODIS, SAR, hyperspectral), vector and raster data operations, spatial statistics, point cloud processing, network analysis, cloud-native workflows (STAC, COG, Planetary Computer), and 8 programming languages (Python, R, Julia, JavaScript, C++, Java, Go, Rust) with 500+ code examples. Use for remote sensing workflows, GIS analysis, spatial ML, Earth observation data processing, terrain analysis, hydrological modeling, marine spatial analysis, atmospheric science, and any geospatial computation task\n* **GeoPandas** - Python library extending pandas for working with geospatial vector data including shapefiles, GeoJSON, and GeoPackage files. Provides GeoDataFrame and GeoSeries data structures combining geometric data with tabular attributes for spatial analysis. Key features include: reading/writing spatial file formats (Shapefile, GeoJSON, GeoPackage, PostGIS, Parquet) with Arrow acceleration for 2-4x faster I/O, geometric operations (buffer, simplify, centroid, convex hull, affine transformations) through Shapely integration, spatial analysis (spatial joins with predicates like intersects/contains/within, nearest neighbor joins, overlay operations for union/intersection/difference, dissolve for aggregation, clipping), coordinate reference system (CRS) management (setting CRS, reprojecting between coordinate systems, UTM estimation), and visualization (static choropleth maps with matplotlib, interactive maps with folium, multi-layer mapping, classification schemes with mapclassify). Supports spatial indexing for performance, filtering during read operations (bbox, mask, SQL WHERE), and integration with cartopy for cartographic projections. Use cases: spatial data manipulation, buffer analysis, spatial joins between datasets, dissolving boundaries, calculating areas/distances in projected CRS, reprojecting coordinate systems, creating choropleth maps, converting between spatial file formats, PostGIS database integration, and geospatial data analysis workflows\n* **Matplotlib** - Comprehensive Python plotting library for creating publication-quality static, animated, and interactive visualizations. Provides extensive customization options for creating figures, subplots, axes, and annotations. Key features include: support for multiple plot types (line, scatter, bar, histogram, contour, 3D, and many more), extensive customization (colors, fonts, styles, layouts), multiple backends (PNG, PDF, SVG, interactive backends), LaTeX integration for mathematical notation, and integration with NumPy and pandas. Includes specialized modules (pyplot for MATLAB-like interface, artist layer for fine-grained control, backend layer for rendering). Supports complex multi-panel figures, color maps, legends, and annotations. Use cases: scientific figure creation, data visualization, exploratory data analysis, publication graphics, and any application requiring high-quality plots\n* **NetworkX** - Comprehensive toolkit for creating, analyzing, and visualizing complex networks and graphs. Supports four graph types (Graph, DiGraph, MultiGraph, MultiDiGraph) with nodes as any hashable objects and rich edge attributes. Provides 100+ algorithms including shortest paths (Dijkstra, Bellman-Ford, A\\*), centrality measures (degree, betweenness, closeness, eigenvector, PageRank), clustering (coefficients, triangles, transitivity), community detection (modularity-based, label propagation, Girvan-Newman), connectivity analysis (components, cuts, flows), tree algorithms (MST, spanning trees), matching, graph coloring, isomorphism, and traversal (DFS, BFS). Includes 50+ graph generators for classic (complete, cycle, wheel), random (Erdős-Rényi, Barabási-Albert, Watts-Strogatz, stochastic block model), lattice (grid, hexagonal, hypercube), and specialized networks. Supports I/O across formats (edge lists, GraphML, GML, JSON, Pajek, GEXF, DOT) with Pandas/NumPy/SciPy integration. Visualization capabilities include 8+ layout algorithms (spring/force-directed, circular, spectral, Kamada-Kawai), customizable node/edge appearance, interactive visualizations with Plotly/PyVis, and publication-quality figure generation. Use cases: social network analysis, biological networks (protein-protein interactions, gene regulatory networks, metabolic pathways), transportation systems, citation networks, knowledge graphs, web structure analysis, infrastructure networks, and any domain involving pairwise relationships requiring structural analysis or graph-based modeling\n* **Plotly** - Interactive scientific and statistical data visualization library for Python with 40+ chart types. Provides both high-level API (Plotly Express) for quick visualizations and low-level API (graph objects) for fine-grained control. Key features include: comprehensive chart types (scatter, line, bar, histogram, box, violin, heatmap, contour, 3D plots, geographic maps, financial charts, statistical distributions, hierarchical charts), interactive features (hover tooltips, pan/zoom, legend toggling, animations, rangesliders, buttons/dropdowns), publication-quality output (static images in PNG/PDF/SVG via Kaleido, interactive HTML with embeddable figures), extensive customization (templates, themes, color scales, fonts, layouts, annotations, shapes), subplot support (multi-plot figures with shared axes), and Dash integration for building analytical web applications. Plotly Express offers one-line creation of complex visualizations with automatic color encoding, faceting, and trendlines. Graph objects provide precise control for specialized visualizations (candlestick charts, 3D surfaces, sankey diagrams, gauge charts). Supports pandas DataFrames, NumPy arrays, and various data formats. Use cases: scientific data visualization, statistical analysis, financial charting, interactive dashboards, publication figures, exploratory data analysis, and any application requiring interactive or publication-quality visualizations\n* **Polars** - High-performance DataFrame library written in Rust with Python bindings, designed for fast data manipulation and analysis. Provides lazy evaluation for query optimization, efficient memory usage, and parallel processing. Key features include: DataFrame operations (filtering, grouping, joining, aggregations), support for large datasets (larger than RAM), integration with pandas and NumPy, expression API for complex transformations, and support for multiple data formats (CSV, Parquet, JSON, Excel, Arrow). Features query optimization through lazy evaluation, automatic parallelization, and efficient memory management. Often 5-30x faster than pandas for many operations. Use cases: large-scale data processing, ETL pipelines, data analysis workflows, and high-performance data manipulation tasks\n* **Seaborn** - Statistical data visualization with dataset-oriented interface, automatic confidence intervals, publication-quality themes, colorblind-safe palettes, and comprehensive support for exploratory analysis, distribution comparisons, correlation matrices, regression plots, and multi-panel figures\n* **Vaex** - High-performance Python library for lazy, out-of-core DataFrames to process and visualize tabular datasets larger than available RAM. Processes over a billion rows per second through memory-mapped files (HDF5, Apache Arrow), lazy evaluation, and virtual columns (zero memory overhead). Provides instant file opening, efficient aggregations across billions of rows, interactive visualizations without sampling, machine learning pipelines with transformers (scalers, encoders, PCA), and seamless integration with pandas/NumPy/Arrow. Includes comprehensive ML framework (vaex.ml) with feature scaling, categorical encoding, dimensionality reduction, and integration with scikit-learn/XGBoost/LightGBM/CatBoost. Supports distributed computing via Dask, asynchronous operations, and state management for production deployment. Use cases: processing gigabyte to terabyte datasets, fast statistical aggregations on massive data, visualizing billion-row datasets, ML pipelines on big data, converting between data formats, and working with astronomical, financial, or scientific large-scale datasets\n\n### Phylogenetics & Evolutionary Biology\n\n* **ETE Toolkit** - Python library for phylogenetic tree manipulation, visualization, and analysis. Provides comprehensive tools for working with phylogenetic trees including tree construction, manipulation (pruning, collapsing, rooting), tree comparison (Robinson-Foulds distance, tree reconciliation), annotation (node colors, labels, branch styles), and publication-quality visualization. Key features include: support for multiple tree formats (Newick, Nexus, PhyloXML), integration with phylogenetic software (PhyML, RAxML, FastTree), tree annotation with metadata, interactive tree visualization, and export to various image formats (PNG, PDF, SVG). Supports species trees, gene trees, and reconciliation analysis. Use cases: phylogenetic analysis, tree visualization, evolutionary biology research, comparative genomics, and teaching phylogenetics\n* **Phylogenetics** - Build and analyze phylogenetic trees using MAFFT (multiple alignment), IQ-TREE 2 (maximum likelihood), and FastTree (fast NJ/ML). Visualize with ETE3 or FigTree. Use for evolutionary analysis, microbial genomics, viral phylodynamics, protein family analysis, and molecular clock studies\n\n### Multi-omics & AI Agent Frameworks\n\n* **Denario** - Multiagent AI system for scientific research assistance that automates complete research workflows from data analysis through publication. Built on AG2 and LangGraph frameworks, orchestrates specialized agents for hypothesis generation, methodology development, computational analysis, and LaTeX paper writing. Supports multiple LLM providers (Google Vertex AI, OpenAI) with flexible pipeline stages allowing manual or automated inputs. Key features include: end-to-end research automation (data description → idea generation → methodology → results → paper), journal-specific formatting (APS and others), GUI interface via Streamlit, Docker deployment with LaTeX environment, reproducible research with version-controlled outputs, literature search integration, and integration with scientific Python stack (pandas, sklearn, scipy). Provides both programmatic Python API and web-based interface. Use cases: automated hypothesis generation from datasets, research methodology development, computational experiment execution with visualization, publication-ready manuscript generation, time-series analysis research, machine learning experiment automation, and accelerating the complete scientific research lifecycle from ideation to publication\n* **HypoGeniC** - Automated hypothesis generation and testing using large language models to accelerate scientific discovery. Provides three frameworks: HypoGeniC (data-driven hypothesis generation from observational data), HypoRefine (synergistic approach combining literature insights with empirical patterns through an agentic system), and Union methods (mechanistic combination of literature and data-driven hypotheses). Features iterative refinement that improves hypotheses by learning from challenging examples, Redis caching for API cost reduction, and customizable YAML-based prompt templates. Includes command-line tools for generation (hypogenic\\_generation) and testing (hypogenic\\_inference). Research applications have demonstrated 14.19% accuracy improvement in AI-content detection and 7.44% in deception detection. Use cases: deception detection in reviews, AI-generated content identification, mental stress detection, exploratory research without existing literature, hypothesis-driven analysis in novel domains, and systematic exploration of competing explanations\n\n### Scientific Communication & Publishing\n\n* **BGPT Paper Search** - Search scientific papers and retrieve structured experimental data extracted from full-text studies via the BGPT MCP server. Returns 25+ fields per paper including methods, results, sample sizes, quality scores, and conclusions. Use for literature reviews, evidence synthesis, and finding experimental details not available in abstracts alone\n* **pyzotero** - Python client for the Zotero Web API v3. Programmatically manage Zotero reference libraries: retrieve, create, update, and delete items, collections, tags, and attachments. Export citations as BibTeX, CSL-JSON, and formatted bibliography HTML. Supports user and group libraries, local mode for offline access, paginated retrieval with `everything()`, full-text content indexing, saved search management, and file upload/download. Includes a CLI for searching your local Zotero library. Use cases: building research automation pipelines that integrate with Zotero, bulk importing references, exporting bibliographies programmatically, managing large reference collections, syncing library metadata, and enriching bibliographic data.\n* **Citation Management** - Comprehensive citation management for academic research. Search Google Scholar and PubMed for papers, extract accurate metadata from multiple sources (CrossRef, PubMed, arXiv), validate citations, and generate properly formatted BibTeX entries. Features include converting DOIs, PMIDs, or arXiv IDs to BibTeX, cleaning and formatting bibliography files, finding highly cited papers, checking for duplicates, and ensuring consistent citation formatting. Use cases: building bibliographies for manuscripts, verifying citation accuracy, citation deduplication, and maintaining reference databases\n* **Generate Image** - AI-powered image generation and editing for scientific illustrations, schematics, and visualizations using OpenRouter's image generation models. Supports multiple models including google/gemini-3-pro-image-preview (high quality, recommended default) and black-forest-labs/flux.2-pro (fast, high quality). Key features include: text-to-image generation from detailed prompts, image editing capabilities (modify existing images with natural language instructions), automatic base64 encoding/decoding, PNG output with configurable paths, and comprehensive error handling. Requires OpenRouter API key (via .env file or environment variable). Use cases: generating scientific diagrams and illustrations, creating publication-quality figures, editing existing images (changing colors, adding elements, removing backgrounds), producing schematics for papers and presentations, visualizing experimental setups, creating graphical abstracts, and generating conceptual illustrations for scientific communication\n* **Infographics** - Create professional infographics using Nano Banana Pro AI with smart iterative refinement. Uses Gemini 3 Pro for quality review. Integrates research-lookup and web search for accurate data. Supports 10 infographic types, 8 industry styles, and colorblind-safe palettes\n* **LaTeX Posters** - Create professional research posters in LaTeX using beamerposter, tikzposter, or baposter. Support for conference presentations, academic posters, and scientific communication with layout design, color schemes, multi-column formats, figure integration, and poster-specific best practices. Features compliance with conference size requirements (A0, A1, 36×48\"), complex multi-column layouts, and integration of figures, tables, equations, and citations. Use cases: conference poster sessions, thesis defenses, symposia presentations, and research group templates\n* **Market Research Reports** - Generate comprehensive market research reports (50+ pages) in the style of top consulting firms (McKinsey, BCG, Gartner). Features professional LaTeX formatting, extensive visual generation, deep integration with research-lookup for data gathering, and multi-framework strategic analysis including Porter's Five Forces, PESTLE, SWOT, TAM/SAM/SOM, and BCG Matrix. Use cases: investment decisions, strategic planning, competitive landscape analysis, market sizing, and market entry evaluation\n* **Paper-2-Web** - Autonomous pipeline for transforming academic papers into multiple promotional formats using the Paper2All system. Converts LaTeX or PDF papers into: (1) Paper2Web - interactive, layout-aware academic homepages with responsive design, interactive figures, and mobile support; (2) Paper2Video - professional presentation videos with slides, narration, cursor movements, and optional talking-head generation using Hallo2; (3) Paper2Poster - print-ready conference posters with custom dimensions, professional layouts, and institution branding. Supports GPT-4/GPT-4.1 models, batch processing, QR code generation, multi-language content, and quality assessment metrics. Use cases: conference materials, video abstracts, preprint enhancement, research promotion, poster sessions, and academic website creation\n* **Perplexity Search** - AI-powered web search using Perplexity models via LiteLLM and OpenRouter for real-time, web-grounded answers with source citations. Provides access to multiple Perplexity models: Sonar Pro (general-purpose, best cost-quality balance), Sonar Pro Search (most advanced agentic search with multi-step reasoning), Sonar (cost-effective for simple queries), Sonar Reasoning Pro (advanced step-by-step analysis), and Sonar Reasoning (basic reasoning). Key features include: single OpenRouter API key setup (no separate Perplexity account), real-time access to current information beyond training data cutoff, comprehensive query design guidance (domain-specific patterns, time constraints, source preferences), cost optimization strategies with usage monitoring, programmatic and CLI interfaces, batch processing support, and integration with other scientific skills. Installation uses uv pip for LiteLLM, with detailed setup, troubleshooting, and security documentation. Use cases: finding recent scientific publications and research, conducting literature searches across domains, verifying facts with source citations, accessing current developments in any field, comparing technologies and approaches, performing domain-specific research (biomedical, clinical, technical), supplementing PubMed searches with real-time web results, and discovering latest developments post-database indexing\n* **PPTX Posters** - Create professional research posters using PowerPoint/HTML formats for researchers who prefer WYSIWYG tools over LaTeX. Features design principles, layout templates, quality checklists, and export guidance for poster sessions. Use cases: conference posters when LaTeX is not preferred, quick poster creation, and collaborative poster design\n* **Scientific Schematics** - Create publication-quality scientific diagrams using Nano Banana Pro AI with smart iterative refinement. Uses Gemini 3 Pro for quality review with document-type-specific thresholds (journal: 8.5/10, conference: 8.0/10, poster: 7.0/10). Specializes in neural network architectures, system diagrams, flowcharts, biological pathways, and complex scientific visualizations. Features natural language input, automatic quality assessment, and publication-ready output. Use cases: creating figures for papers, generating workflow diagrams, visualizing experimental designs, and producing graphical abstracts\n* **Scientific Slides** - Build slide decks and presentations for research talks using PowerPoint and LaTeX Beamer. Features slide structure, design templates, timing guidance, and visual validation. Emphasizes visual engagement with minimal text, research-backed content with proper citations, and story-driven narrative. Use cases: conference presentations, academic seminars, thesis defenses, grant pitches, and professional talks\n* **Venue Templates** - Access comprehensive LaTeX templates, formatting requirements, and submission guidelines for major scientific publication venues (Nature, Science, PLOS, IEEE, ACM), academic conferences (NeurIPS, ICML, CVPR, CHI), research posters, and grant proposals (NSF, NIH, DOE, DARPA). Provides ready-to-use templates and detailed specifications for successful academic submissions. Use cases: manuscript preparation, conference papers, research posters, and grant proposals with venue-specific formatting\n\n### Document Processing & Conversion\n\n* **DOCX** - Create, read, edit, and manipulate Word documents (.docx files). Supports professional documents with formatting like tables of contents, headings, page numbers, letterheads, find-and-replace, tracked changes, comments, and image insertion. Use for reports, memos, letters, templates, and any Word document deliverable\n* **MarkItDown** - Python utility for converting 20+ file formats to Markdown optimized for LLM processing. Converts Office documents (PDF, DOCX, PPTX, XLSX), images with OCR, audio with transcription, web content (HTML, YouTube transcripts, EPUB), and structured data (CSV, JSON, XML) while preserving document structure (headings, lists, tables, hyperlinks). Key features include: Azure Document Intelligence integration for enhanced PDF table extraction, LLM-powered image descriptions using GPT-4o, batch processing with ZIP archive support, modular installation for specific formats, streaming approach without temporary files, and plugin system for custom converters. Supports Python 3.10+. Use cases: preparing documents for RAG systems, extracting text from PDFs and Office files, transcribing audio to text, performing OCR on images and scanned documents, converting YouTube videos to searchable text, processing HTML and EPUB books, converting structured data to readable format, document analysis pipelines, and LLM training data preparation\n* **Markdown & Mermaid Writing** - Comprehensive markdown and Mermaid diagram writing skill for creating scientific documents, reports, analyses, and visualizations. Establishes text-based diagrams as the default documentation standard with full style guides, 24 diagram type references, and 9 document templates\n* **PDF** - Read, create, combine, split, rotate, watermark, encrypt/decrypt, and manipulate PDF files. Supports extracting text/tables, filling forms, OCR on scanned PDFs, image extraction, and format conversion\n* **PPTX** - Create, read, edit, and manipulate PowerPoint presentations (.pptx files). Use for slide decks, pitch decks, extracting text from presentations, editing existing slides, combining or splitting presentations, and working with templates, layouts, speaker notes, and comments\n* **XLSX** - Spreadsheet creation, editing, and analysis with support for formulas, formatting, data analysis, and visualization\n\n### Laboratory Automation & Equipment Control\n\n* **PyLabRobot** - Hardware-agnostic, pure Python SDK for automated and autonomous laboratories. Provides unified interface for controlling liquid handling robots (Hamilton STAR/STARlet, Opentrons OT-2, Tecan EVO), plate readers (BMG CLARIOstar), heater shakers, incubators, centrifuges, pumps, and scales. Key features include: modular resource management system for plates, tips, and containers with hierarchical deck layouts and JSON serialization; comprehensive liquid handling operations (aspirate, dispense, transfer, serial dilutions, plate replication) with automatic tip and volume tracking; backend abstraction enabling hardware-agnostic protocols that work across different robots; ChatterboxBackend for protocol simulation and testing without hardware; browser-based visualizer for real-time 3D deck state visualization; cross-platform support (Windows, macOS, Linux, Raspberry Pi); and integration capabilities for multi-device workflows combining liquid handlers, analytical equipment, and material handling devices. Use cases: automated sample preparation, high-throughput screening, serial dilution protocols, plate reading workflows, laboratory protocol development and validation, robotic liquid handling automation, and reproducible laboratory automation with state tracking and persistence\n\n### Tool Discovery & Computational Resources\n\n* **Get Available Resources** - Detect available computational resources and generate strategic recommendations for scientific computing tasks at the start of any computationally intensive scientific task. Automatically identifies CPU capabilities, GPU availability (NVIDIA CUDA, AMD ROCm, Apple Silicon Metal), memory constraints, and disk space. Creates JSON file with resource information and recommendations for parallel processing (joblib, multiprocessing), out-of-core computing (Dask, Zarr), GPU acceleration (PyTorch, JAX), or memory-efficient strategies. Use cases: determining optimal computational approaches before data analysis, model training, or large file operations\n\n### Research Methodology & Proposal Writing\n\n* **Paper Lookup** - Search 10 academic paper databases via their REST APIs to find research papers, preprints, and scholarly articles. Covers biomedical literature (PubMed, PMC full text), preprint servers (bioRxiv, medRxiv, arXiv), multidisciplinary indexes (OpenAlex, Crossref, Semantic Scholar), open access aggregators (CORE, Unpaywall). Use for searching research papers, finding citations, looking up articles by DOI or PMID, retrieving abstracts or full text, checking open access availability, exploring citation graphs, and systematic literature searches\n* **Research Grants** - Write competitive research proposals for NSF, NIH, DOE, and DARPA. Features agency-specific formatting, review criteria understanding, budget preparation, broader impacts statements, significance narratives, innovation sections, and compliance with submission requirements. Covers project descriptions, specific aims, technical narratives, milestone plans, budget justifications, and biosketches. Use cases: federal grant applications, resubmissions with reviewer response, multi-institutional collaborations, and preliminary data sections\n* **Research Lookup** - Look up current research information using Perplexity's Sonar Pro Search or Sonar Reasoning Pro models through OpenRouter. Intelligently selects models based on query complexity. Provides access to current academic literature, recent studies, technical documentation, and general research information with proper citations. Use cases: finding latest research, literature verification, gathering background research, finding citation sources, and staying current with emerging trends\n* **Scholar Evaluation** - Apply the ScholarEval framework to systematically evaluate scholarly and research work. Provides structured evaluation methodology based on peer-reviewed research assessment criteria for analyzing academic papers, research proposals, literature reviews, and scholarly writing across multiple quality dimensions. Use cases: evaluating research papers for quality and rigor, assessing methodology design, scoring data analysis approaches, benchmarking research quality, and assessing publication readiness\n\n### Regulatory & Standards Compliance\n\n* **ISO 13485 Certification** - Comprehensive toolkit for preparing ISO 13485:2016 certification documentation for medical device Quality Management Systems. Provides gap analysis of existing documentation, templates for all mandatory documents, compliance checklists, and step-by-step documentation creation. Covers 31 required procedures including Quality Manuals, Medical Device Files, and work instructions. Use cases: starting ISO 13485 certification process, conducting gap analysis, creating or updating QMS documentation, preparing for certification audits, transitioning from FDA QSR to QMSR, and harmonizing with EU MDR requirements\n\n## Scientific Thinking & Analysis\n\n### Analysis & Methodology\n\n* **Exploratory Data Analysis** - Comprehensive EDA toolkit with automated statistics, visualizations, and insights for any tabular dataset\n* **Hypothesis Generation** - Structured frameworks for generating and evaluating scientific hypotheses\n* **Literature Review** - Systematic literature search and review toolkit with support for multiple scientific databases (PubMed, bioRxiv, Google Scholar), citation management with multiple citation styles (APA, AMA, Vancouver, Chicago, IEEE, Nature, Science), citation verification and deduplication, search strategies (Boolean operators, MeSH terms, field tags), PDF report generation with formatted references, and comprehensive templates for conducting systematic reviews following PRISMA guidelines\n* **Peer Review** - Comprehensive toolkit for conducting high-quality scientific peer review with structured evaluation of methodology, statistics, reproducibility, ethics, and presentation across all scientific disciplines\n* **Scientific Brainstorming** - Conversational brainstorming partner for generating novel research ideas, exploring connections, challenging assumptions, and developing creative approaches through structured ideation workflows\n* **Scientific Critical Thinking** - Tools and approaches for rigorous scientific reasoning and evaluation\n* **Scientific Visualization** - Best practices and templates for creating publication-quality scientific figures with matplotlib and seaborn, including statistical plots with automatic confidence intervals, colorblind-safe palettes, multi-panel figures, heatmaps, and journal-specific formatting\n* **Scientific Writing** - Comprehensive toolkit for writing, structuring, and formatting scientific research papers using IMRAD format, multiple citation styles (APA, AMA, Vancouver, Chicago, IEEE), reporting guidelines (CONSORT, STROBE, PRISMA), effective figures and tables, field-specific terminology, venue-specific structure expectations, and core writing principles for clarity, conciseness, and accuracy across all scientific disciplines\n* **Statistical Analysis** - Comprehensive statistical testing, power analysis, and experimental design\n\n### Decision & Scenario Analysis\n\n* **Consciousness Council** - Run a multi-perspective Mind Council deliberation on any question, decision, or creative challenge. Use for diverse viewpoints, tough decisions, devil's advocate analysis, exploring problems from multiple angles, or when facing dilemmas, trade-offs, and complex choices with no obvious answer\n* **DHDNA Profiler** - Extract cognitive patterns and thinking fingerprints from any text. Analyze how someone thinks, understand cognitive style, profile writing or speech patterns, compare thinking styles between people, and gain deeper insight into an author's reasoning patterns, decision-making style, or cognitive signature\n* **What-If Oracle** - Run structured What-If scenario analysis with multi-branch possibility exploration. Use for speculative questions, scenario planning, risk analysis, contingency planning, strategic options evaluation, stress-testing ideas, and thinking through consequences before committing\n\n### Web Search & Information Retrieval\n\n* **Parallel Web** - Search the web, extract URL content, and run deep research using the Parallel Chat API and Extract API. Use for web searches, research queries, and general information gathering with synthesized summaries and citations\n\n## Footer\n\n© 2026 GitHub, Inc.\n\n### Footer navigation\n\n* [Terms](https://docs.github.com/site-policy/github-terms/github-terms-of-service)\n* [Privacy](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement)\n* [Security](https://github.com/security)\n* [Status](https://www.githubstatus.com/)\n* [Community](https://github.community/)\n* [Docs](https://docs.github.com/)\n* [Contact](https://support.github.com?tags=dotcom-footer)\n* Manage cookies\n* Do not share my personal information\n\n\n\nYou can’t perform that action at this time.",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://github.com/K-Dense-AI/claude-scientific-skills/blob/main/docs/scientific-skills.md"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: claude-scientific-skills/docs/scientific-skills.md at main · K-Dense-AI/claude-scientific-skills",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "claude-scientific-skills/docs/scientific-skills.md at main · K-Dense-AI/claude-scientific-skills",
      "subtitles": null,
      "url": "https://github.com/K-Dense-AI/claude-scientific-skills/blob/main/docs/scientific-skills.md",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
      "source": "github"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 I'm reviewing the available skills from K-Dense-AI and filtering them to match Reid's work in experimental nuclear physics—specifically his TPC detector research, direct nuclear reaction experiments, and machine learning applications for particle identification using ResNet and ViT models.

Looking at what would be most useful: scientific schematics for visualizing neural network architectures and experimental apparatus diagrams, plus publication-quality scientific visualization tools that handle multi-panel figures with proper error bars and journal-specific formatting requirements.

For computation, SymPy is a direct match since it handles Lagrangian and Hamiltonian mechanics—exactly what he's studying—and can output to LaTeX for his figures. MATLAB might be useful for numerical simulations, though Astropy and Pymatgen are less central to nuclear physics work.

On the quantum side, QuTiP could help him review quantum mechanics or model nuclear structure, while Qiskit and Cirq are less immediately relevant. For his machine learning work with ResNets and Vision Transformers, PyTorch Lightning is his main framework, and SHAP would let him interpret what his models are actually learning.

For visualization and analysis, he'll want the standard plotting libraries like Matplotlib and Seaborn, plus Plotly for interactive visualizations since he prefers dynamic displays. UMAP could help him explore the feature space of his Vision Transformer models, and the Hugging Face Transformers library is directly applicable to his ViT work. For scientific communication—papers and potential conference presentations—he'd benefit from tools for creating polished posters and presentations. Posters** — Alternative if LaTeX not preferred.
26. **Scientific Slides** — He's been making 15-slide PowerPoints for IMP.
27. **Scientific Writing** — IMRAD, CONSORT, STROBE, PRISMA. For his papers.
28. **Venue Templates** — Nature, Science, PLOS, IEEE. If submitting to physics journals.
29. **Citation Management** — BibTeX workflows.
30. **pyzotero** — For Zotero integration.
31. **Paper-2-Web / Paper-2-Video / Paper-2-Poster** — Could help him make promotional materials for his ITC/Tokyo applications.

**Research tools:** I'm also noting literature discovery through PubMed, bioRxiv, and Google Scholar, with arXiv access via Paper Lookup for physics-specific papers. Beyond that, there's peer review support, scientific brainstorming, and critical thinking tools to strengthen his work. But I'm seeing some real gaps here — no nuclear physics-specific tools like ENSDF or level scheme software, no detector simulation capabilities like GEANT4 or ROOT, and nothing for particle physics either.

The Scientific Schematics skill relies on AI image generation, which might not produce publication-quality precision for technical diagrams like particle trajectories or nuclear level schemes. I should flag that limitation.

I'm distinguishing between what's documented as available versus what I'm recommending based on his workflow — the latter is my interpretation, not verified. Since this is really a curation task, I'll organize it by use case: figures, computation, and writing. I'm thinking of grouping the physics-figure tools first, then computation skills for his Hamiltonian and quantum mechanics work.

</details>

Here's my curation from that repo for your specific workflow — experimental nuclear physics at HIRFL-RIBLL + ML-based PID + paper/talk figures. All skill descriptions below are attributed to the repo's own `docs/scientific-skills.md` file, not my reframing.

## Tier 1 — Drawing & figures (the direct "physics figures" bucket)

**Scientific Visualization** — your go-to for plots from actual data (PID spectra, ΔE-ToF scatterplots, energy vs. angle, ROC curves for PID models). Best practices and templates for publication-quality scientific figures with matplotlib and seaborn, including statistical plots with automatic confidence intervals, colorblind-safe palettes, multi-panel figures, heatmaps, and journal-specific formatting.

**Scientific Schematics** — for conceptual figures (experimental setups, beamline layouts, ML pipeline diagrams). Uses Nano Banana Pro AI with smart iterative refinement, Gemini 3 Pro for quality review with document-type-specific thresholds (journal: 8.5/10, conference: 8.0/10, poster: 7.0/10). Specializes in neural network architectures, system diagrams, flowcharts, biological pathways, and complex scientific visualizations. **Important caveat (my assessment, not verified):** because this is AI image generation, precision diagrams like nuclear level schemes or detector cross-sections with exact measurements will likely not be publication-grade — it's better for ML architecture diagrams and overview pipelines than for geometry-critical physics figures.

**Markdown & Mermaid Writing** — for text-based, version-controllable diagrams. Establishes text-based diagrams as the default documentation standard with full style guides, 24 diagram type references, and 9 document templates. Use this for Obsidian notes and for analysis flowcharts in papers.

**Plotly** — aligns with your stated preference for interactive/dynamic output. Comprehensive chart types including 3D plots, interactive features (hover tooltips, pan/zoom, legend toggling, animations, rangesliders, buttons/dropdowns), publication-quality output (static images in PNG/PDF/SVG via Kaleido, interactive HTML with embeddable figures). Good for supplementary online material or internal exploration of PID data.

**Infographics** — Nano Banana Pro AI with smart iterative refinement, Gemini 3 Pro for quality review. Supports 10 infographic types, 8 industry styles, and colorblind-safe palettes. Useful for group-meeting overviews.

**Generate Image** — supports google/gemini-3-pro-image-preview (high quality, recommended default) and black-forest-labs/flux.2-pro (fast, high quality); text-to-image and image editing, requires OpenRouter API key. Lower-level than Scientific Schematics — useful when you want direct control.

## Tier 2 — Physics computation (makes figures *from* physics, not just of physics)

**SymPy** — the strongest match to your classical/quantum mechanics self-study. Symbolic algebra, calculus, equation solving, matrices, physics (classical mechanics with Lagrangian/Hamiltonian formulations, quantum mechanics, vector analysis, units), code generation (lambdify to NumPy/SciPy functions, C/Fortran code generation, LaTeX output for documentation). This directly supports your Hamilton-Jacobi / Euler-Lagrange derivation workflow — the `mechanics` module can do Lagrangians symbolically and output LaTeX.

**QuTiP** — relevant if you want to numerically play with quantum systems for intuition (e.g., a shell-model toy Hamiltonian). Both closed (unitary) and open (dissipative) quantum systems including quantum states (kets, bras, density matrices, Fock states, coherent states), quantum operators, time evolution solvers (Schrödinger equation with sesolve, Lindblad master equation), analysis tools (expectation values, entropy measures, fidelity, correlation functions), visualization (Bloch sphere with animations, Wigner functions, Q-functions, Fock distributions). Bloch spheres and Wigner functions are genuinely interactive.

**statsmodels** — Statistical modeling and econometrics (OLS, GLM, logit/probit, ARIMA, time series forecasting, hypothesis testing, diagnostics). Useful for background-subtraction, systematic-error analysis, and goodness-of-fit.

**MATLAB/Octave** — relevant only if your lab uses MATLAB for detector simulations. Numerical computing environment; GNU Octave is a free open-source alternative with high compatibility.

## Tier 3 — ML side of your work (ResNet/ViT for PID)

**PyTorch Lightning** — Automates training workflows (40+ tasks including epoch/batch iteration, optimizer steps, gradient management, checkpointing), supports multi-GPU/TPU training with DDP/FSDP/DeepSpeed strategies. Direct fit for your ResNet training.

**Transformers (Hugging Face)** — 1M+ pre-trained models accessible via pipelines; comprehensive training via Trainer API with distributed training and mixed precision; Auto classes for automatic architecture selection (BERT, GPT, T5, ViT, BART, etc.). For your ViT work.

**SHAP** — worth calling out explicitly. Model interpretability and explainability using Shapley values from game theory; TreeExplainer, DeepExplainer (TensorFlow/PyTorch neural networks), KernelExplainer (model-agnostic); waterfall plots for individual predictions, beeswarm plots for global importance. Will help you argue in a paper *why* your ResNet classifies particles the way it does — reviewers increasingly ask for this.

**UMAP-learn** — Fast, scalable nonlinear dimensionality reduction that preserves both local and global structure of high-dimensional data; often outperforms t-SNE in preserving global structure. For visualizing learned PID feature spaces.

**scikit-learn** — baselines for PID (SVM, random forest, logistic regression) to compare against deep nets.

## Tier 4 — Writing, presenting, applying

**Scientific Writing** — Structuring and formatting scientific research papers using IMRAD format, multiple citation styles (APA, AMA, Vancouver, Chicago, IEEE), reporting guidelines (CONSORT, STROBE, PRISMA). Note: CONSORT/STROBE/PRISMA are medical-research guidelines — for physics you'll mostly use IMRAD and venue-specific structure.

**Venue Templates** — Comprehensive LaTeX templates, formatting requirements, and submission guidelines for major scientific publication venues (Nature, Science, PLOS, IEEE, ACM), academic conferences (NeurIPS, ICML, CVPR, CHI). **Gap to note:** Physical Review / NPA / PLB / EPJA templates are not listed explicitly — you may need to supplement.

**LaTeX Posters** — beamerposter, tikzposter, or baposter; compliance with conference size requirements (A0, A1, 36×48"). Directly useful for thesis defense and conferences.

**Scientific Slides** — PowerPoint and LaTeX Beamer; emphasizes visual engagement with minimal text, research-backed content with proper citations, and story-driven narrative. Matches your recent 15-slide ab initio deck work.

**Paper-2-Web** — useful for your PhD applications. Paper2Web (interactive academic homepages), Paper2Video (presentation videos with slides, narration, cursor movements, optional talking-head generation using Hallo2), Paper2Poster (print-ready conference posters). Could help build a research page for Imai-sensei's group at UTokyo CNS.

**Paper Lookup** — Covers biomedical literature (PubMed, PMC), preprint servers (bioRxiv, medRxiv, arXiv), multidisciplinary indexes (OpenAlex, Crossref, Semantic Scholar). arXiv coverage is what you need for nuclear physics.

**Citation Management + pyzotero** — for managing your BibTeX.

## Honest gaps for your specific domain

These are **not** in the K-Dense-AI repo, verified by scanning the full skill list above:

1. **Nuclear data**: no ENSDF, NNDC, NuDat, or AMDC integration. Level schemes, decay chains, and mass excesses still require manual work.
2. **Detector simulation**: no GEANT4, no LISE++, no ROOT/PyROOT skill. You've been working on LISE++ programmatic control yourself — that's a skill-shaped hole in the ecosystem.
3. **HEP file formats**: no ROOT file skill (uproot, awkward-array). If your IMP collaboration produces `.root` files, nothing here reads them natively.
4. **Feynman / particle-flow diagrams**: no dedicated skill. Scientific Schematics may attempt them but won't match `tikz-feynman` precision.
5. **Nuclear chart / Segré chart plotting**: no skill.

## Suggested install set for you

If you want a minimal, high-leverage install from this repo:

1. `scientific-visualization` (data plots)
2. `scientific-schematics` (ML/pipeline diagrams only — not detector geometry)
3. `sympy` (your mechanics/QM self-study)
4. `pytorch-lightning` + `transformers` + `shap` (your ML work)
5. `latex-posters` + `scientific-slides` + `venue-templates` (papers, talks, PhD apps)
6. `paper-lookup` + `citation-management` (arXiv + BibTeX)

**Fact vs. assumption separation:**
- *Fact:* the skills exist and have the descriptions quoted above, per the repo's own docs file.
- *Assumption:* which ones best fit *you* — that's my inference from your stated context (HIRFL-RIBLL, ResNet/ViT for PID, Hamiltonian self-study, UTokyo prep). You may weight differently.

Want me to look at any single one of these SKILL.md files directly to verify what the skill actually does (vs. what the docs page summarizes), or sketch what a custom *nuclear-physics-figures* skill filling those five gaps could look like?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d9ab8-05a9-7e82-b6b4-9956e48cad41",
  "updated_at": "2026-04-17T09:16:06.223113Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d9ab8-05a9-7bc9-a46b-0fbc3709d570"
}
```

</details>
