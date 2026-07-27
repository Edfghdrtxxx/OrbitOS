# AI tools for scientific research

## Export metadata (verbatim)

```json
{
  "uuid": "eff8c705-ae62-412c-9b1d-7a0d60c82026",
  "name": "AI tools for scientific research",
  "summary": "**Conversation Overview**\n\nThe person is evaluating open-source frameworks as alternatives to Claude for Science, specifically seeking lightweight orchestration scaffolding rather than a hosted end-to-end pipeline. They have existing access to the Claude API and Claude Code, and prefer flexibility over prebuilt solutions. Their use case involves experimental physics workflows, specifically referencing HIRFL, RIBF, and a ResNet-based PID (particle identification) pipeline, indicating a nuclear/particle physics and ML background.\n\nThrough a structured preference-gathering exchange, the person clarified their two core requirements: multi-agent orchestration (roles and delegation) and reproducibility/provenance tracking. They also specified they want to build a thin layer on top of Claude Code and the API rather than adopting a full framework like LangGraph or CrewAI, or forking a research-stage science-specific repo. This ruled out most of the initially discussed options.\n\nClaude concluded that Claude Code's native primitives — subagents defined in `.claude/agents/` with YAML frontmatter, lifecycle hooks in `settings.json`, and a skills directory — already satisfy both requirements without an external framework. The recommended \"thin layer\" architecture involves role-scoped subagent definitions (e.g., literature analyst, data runner, reviewer), provenance hooks firing at `PreToolUse`, `PostToolUse`, `SubagentStart`, `SubagentStop`, `SessionStart`, and `PreCompact` events to write JSONL audit logs, and the person's existing physics/ML tools registered as skills. The `disler/claude-code-hooks-mastery` GitHub repo was flagged as a reference for provenance logging patterns. Claude offered to scaffold a concrete `.claude/` directory layout tailored to the HIRFL/RIBF and ResNet-PID workflow as a runnable starting point.",
  "created_at": "2026-07-09T07:38:22.011619Z",
  "updated_at": "2026-07-09T09:02:20.208435Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-07-09T07:38:23.157518Z

Do you know any product similar to Claude for Science?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f45d0-2d90-7612-9b5b-e6c8a535f066",
  "updated_at": "2026-07-09T07:38:23.157518Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-07-09T07:38:35.119576Z

I'm not aware of a specific product called "Claude for Science" — let me search to confirm whether that's a real Anthropic offering and find comparable tools.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-09T07:38:24.197545Z",
  "stop_timestamp": "2026-07-09T07:38:24.398570Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01393SY9ppWDogRuPYYqyfTi",
  "name": "web_search",
  "input": {
    "query": "Claude for Science Anthropic"
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
  "start_timestamp": "2026-07-09T07:38:24.659886Z",
  "stop_timestamp": "2026-07-09T07:38:24.659899Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01393SY9ppWDogRuPYYqyfTi",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Claude Science, an AI workbench for scientists \\ Anthropic",
      "url": "https://www.anthropic.com/news/claude-science-ai-workbench",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "anthropic.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
        "site_name": "Anthropic"
      },
      "is_missing": false,
      "text": "We are releasing Claude Science ... feedback from users. Claude Science displays proteins, structures, and molecules natively, with every result reproducible and traced to its code....\n\nToday, we’re introducing our most significant expansion of these efforts: Claude Science, an AI workbench for scientists. Claude Science is an app that integrates the tools and packages that researchers most commonly use, produces auditable artifacts, and provides flexible access to computing resources. Scientific research is often tedious. Researchers must work across dozens of databases, each with their own schema, contend with file formats that require bespoke data pipelines and viewers, and transition between a roster of tools: PubMed, Jupyter, R, a cluster terminal, and more. Claude Science brings these fragmented tools into a single research environment where scientists can conduct all stages of their work. It helps you analyze literature and execute multi-step research, produces detailed artifacts, and lets you iteratively refine figures and manuscripts until they’re ready for publication.\n\nEvery output carries an auditable history of how it was made, so you can validate and reproduce the results. Like a Jupyter Notebook, you can access Claude Science wherever you already work—locally on macOS or Linux, or on a remote machine over SSH or with an HPC login node. Users interact with a generalist coordinating agent with access to over 60 curated skills and connectors pre-configured for genomics, single-cell, proteomics, structural biology, cheminformatics, and more. These agents can spin up others and engage with specialist agents created by users. And a reviewer agent checks citations and calculations, flagging and correcting errors. We are releasing Claude Science today in beta for Claude Pro, Max, Team, and Enterprise users, and will continue to refine the platform as we collect feedback from users. Claude Science displays proteins, structures, and molecules natively, with every result reproducible and traced to its code.\n\nWhen it generates a figure, Claude Science includes the exact code and environment that produced it, a plain-language description of how it was created, and the full message history. This allows you to understand the inputs, making the work easier to validate and reproduce even months later. You can ask Claude Science to make edits to figures in plain language—removing gridlines, for example, or changing an axis to log scale—and the agent will edit its own code. Claude Science builds environments and manages compute on your laptop, your cluster, or GPUs on demand. Manages your compute and scales on demand. Large analyses—folding a protein, for example, or running a genomics pipeline over a massive dataset—often require researchers to shift their focus to setting up a computing job, waiting while it’s sent to a cluster, checking whether it succeeded or failed, and pulling the results back.\n\nClaude Science handles this process for you. It drafts a plan, asks before reaching new resources, and lets you review or revoke any decision before writing and submitting the job to the computing resources your lab already uses (your own HPC cluster over SSH, or your Modal account for compute on demand), scaling the analysis from a single GPU to hundreds as needed. Because its agents work inside a running session that holds context in memory, even massive datasets only need to be loaded once. It runs on your lab’s own infrastructure—your laptop, Linux box, or HPC login node—so large or sensitive datasets never have to leave the systems they’re already on, and only the context needed for each step of the analysis is sent to Claude. As the pipeline runs, a reviewer agent inspects the outputs, flagging incorrect citations, untraceable numbers, and figures that don’t match their underlying code, and self-correcting as it goes.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 week ago",
        "search_provider": "anthropic",
        "url": "https://www.anthropic.com/news/claude-science-ai-workbench"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Science beta | Claude by Anthropic",
      "url": "https://claude.com/product/claude-science",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "The Claude Science app runs on your infrastructure; raw datasets and compute stay local; content included in prompts and model responses is processed by Anthropic under standard retention.\n\nThe Claude Science app runs on your infrastructure; raw datasets and compute stay local; content included in prompts and model responses is processed by Anthropic under standard retention. Contact sales to discuss your team's specific needs. Install the app wherever your data lives: your laptop, a lab Linux box, an HPC login node, or a cloud VM. Connect from your browser. Jobs run on local kernels, your Slurm cluster over SSH, or through your Modal account. Every artifact the Claude Science app produces includes the exact code that generated it, the environment it ran in, a plain-language description of what was done, and the conversation that led there. Results are reproducible months later, by anyone on your team. A background reviewer also flags any claim it can’t trace to evidence before results surface. Yes. The Claude Science app is in beta for macOS and Linux on Pro, Max, Team, and Enterprise plans.\n\nClaude Science is your AI workbench for scientific research. Works through your research like a skilled scientist, running the analysis and tracing every step. Spend less time stitching pipelines together, and more time on the science.\n\nThe Claude Science app runs analyses, searches databases, and traces every step from data wrangling to publication, so you can spend time on science. ... View proteins, structures, and molecules natively, with every result reproducible and traced to its code. ... Can you tell me ... ... Figures, tables, and notebooks include the exact code, environment, and conversation that produced them, so they can be reproduced, edited, or defended months later. Inspect proteins, alignments, genomic tracks, chemical structures, and PDFs in their native form, with no extra installation required. A background reviewer flags incorrect citations, untraceable numbers, and figures that don’t match their underlying code. Annotate a figure to request edits or ask a question. The agent reads the code that produced it and edits directly. Write up results alongside the analysis that produced them, with rendered Markdown and LaTeX previews.\n\nThe app is pre-configured for every major domain in life sciences. When a project spans disciplines, it can help solve hard problems. ... Design a comprehensive study guide with summaries, practice questions, and memory aids from my course materials. ... Cluster and annotate millions of cells across tissues, surface marker genes, and trace every figure back to the code that made it. ... Design a comprehensive study guide with summaries, practice questions, and memory aids from my course materials. ... Align orthologs, infer maximum-likelihood trees, and map functional residues onto the phylogeny in a single reproducible session. ... Design a comprehensive study guide with summaries, practice questions, and memory aids from my course materials. ... Pull predicted structures, layer on domains and clinical variants, and explore the model interactively in 3D.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "2 days ago",
        "search_provider": "anthropic",
        "url": "https://claude.com/product/claude-science"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude for Life Sciences \\ Anthropic",
      "url": "https://www.anthropic.com/news/claude-for-life-sciences",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "anthropic.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
        "site_name": "Anthropic"
      },
      "is_missing": false,
      "text": "Increasing the rate of scientific progress is a core part of Anthropic’s public benefit mission. We are focused on building the tools to allow researchers to make new discoveries – and eventually, to allow AI models to make these discoveries autonomously. Until recently, scientists typically used Claude for individual tasks, like writing code for statistical analysis or summarizing papers. Pharmaceutical companies and others in industry also use it for tasks across the rest of their business, like sales, to fund new research. Now, our goal is to make Claude capable of supporting the entire process, from early discovery through to translation and commercialization. To do this, we’re rolling out several improvements that aim to make Claude a better partner for those who work in the life sciences, including researchers, clinical coordinators, and regulatory affairs managers.\n\nIncreasing the rate of scientific progress is a core part of Anthropic’s public benefit mission. We are focused on building the tools to allow researchers to make new discoveries – and eventually, to allow AI models to make these discoveries autonomously. Until recently, scientists typically used Claude for individual tasks, like writing code for statistical analysis or summarizing papers. Pharmaceutical companies and others in industry also use it for tasks across the rest of their business, like sales, to fund new research. Now, our goal is to make Claude capable of supporting the entire process, from early discovery through to translation and commercialization. To do this, we’re rolling out several improvements that aim to make Claude a better partner for those who work in the life sciences, including researchers, clinical coordinators, and regulatory affairs managers.\n\nWe’re also partnering with companies who specialize in helping organizations adopt AI for life sciences work. These include Caylent, Deloitte, Accenture, KPMG, PwC, Quantium, Slalom, Tribe AI, and Turing, along with our cloud partners, AWS and Google Cloud. Many of our existing customers and partners have already been using Claude for a broad range of real-world scientific tasks: Claude, paired with internal knowledge libraries, is integral to Sanofi's AI transformation and used by most Sanofians daily in our Concierge app. We're seeing efficiency gains across the value-chain, while our enterprise deployment has enhanced how teams work. This collaboration with Anthropic augments human expertise to deliver life-changing medicines faster to patients worldwide. AI in R&D works through an ecosystem. Anthropic brings the best technologies while prioritizing access, governance, and interoperability.\n\nWe see tremendous potential in Claude streamlining how we bring drugs to market. The ability to pull from clinical data sources and create GxP-compliant outputs will help us bring life-changing cancer therapies to patients faster while maintaining the highest quality standards. We see Claude powering AI applications across several major functions at our company. Healthcare analytics demands AI purpose-built for our industry's complexity and rigor. Komodo Health's partnership with Anthropic delivers transparent, auditable solutions designed for regulated healthcare environments. Together, we're enabling healthcare and life sciences teams to transform weeks-long analytical workflows into actionable intelligence in minutes. We've consistently been one of the first movers when it comes to document and content automation in pharma development. Our work with Anthropic and Claude has set a new standard — we're not just automating tasks, we're transforming how medicines get from discovery to t\n\nWhen creating an AI agent for bioinformatics analyses, we focused on three key factors: top software development, life sciences alignment, and startup support. We evaluated half a dozen platforms, and Claude was the standout leader. We're excited to continue this collaboration and bring cutting-edge AI agents into biotech research. At EvolutionaryScale, we’re building next-generation AI systems to model the living world. Anthropic’s frontier models accelerate our ability to reason about complex biological data and translate it into scientific insight, helping us push the boundaries of what’s possible in life science discovery. At Manifold, our mission is to power faster, leaner life sciences. Building with Claude has enabled us to develop AI agents that translate questions in the semantic space of scientists to execution in the technical space of specialized datasets and tools.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://www.anthropic.com/news/claude-for-life-sciences"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Science is Anthropic’s newest flagship product | MIT Technology Review",
      "url": "https://www.technologyreview.com/2026/06/30/1139987/claude-science-is-anthropics-newest-flagship-product/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "technologyreview.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=technologyreview.com",
        "site_name": "MIT Technology Review"
      },
      "is_missing": false,
      "text": "... At an event for pharmaceutical ... announced Claude Science, a major new product intended to support scientific research in the same way that Claude Code supports software engineering....\n\nThe company is doubling down on AI for science. ... At an event for pharmaceutical executives, biotech founders, and researchers on Tuesday, Anthropic announced Claude Science, a major new product intended to support scientific research in the same way that Claude Code supports software engineering. Like Claude Code, Claude Science can autonomously carry out meaningful work when given concise, high-level instructions, and it has access to tools that make it particularly useful for research in computational biology and drug development. Along with launching and previewing Claude Science, which is now available to all paid Claude subscribers, Anthropic also announced that it will be using the product to pursue some of its own research into drugs for rare, neglected diseases. This is not Anthropic’s first foray into AI for science. In October, the company released plug-ins that help Claude make use of scientific software and databases under the heading “Claude for Life Sciences.” But unli\n\nAnthropic’s decision to elevate Claude Science to the same rank as Claude Code and Claude Cowork indicates that the company is taking AI’s scientific applications very seriously—or at least wants to give the impression that it is. Google I/O showed how the path for AI-driven science is shiftingRead next · “It represents how important this is to our mission that this is right up there with Claude Code and Claude Cowork as the next really significant product that we’re releasing,” says Eric Kauderer-Abrams, Anthropic’s head of life sciences. “Our mission is to develop AI that serves humanity’s long-term well-being, and we believe that by far the greatest opportunity to do that is in the life sciences.” · For the past decade, one company—Google DeepMind—has been at the vanguard of AI for science. CEO Demis Hassabis and researcher John Jumper won the Nobel Prize in chemistry for their work on the company’s AlphaFold model, and DeepMind has also made major contributions to meteorology, mate\n\nThese days, a lot of scientific research involves some amount of coding, but not all scientists are expert software engineers, and so tools like Claude Code can make a huge difference for their productivity. And the company has recently earned a major scientific vote of confidence: Earlier this month, Jumper announced that he is leaving DeepMind for Anthropic. Since agents powered by LLMs, including Anthropic’s Opus model series, became capable of useful, independent work in late 2025, scientists have been seeing just how much they can do. In a blog post published on Anthropic’s website, the Harvard physicist Matthew Schwartz estimated, on the basis of his work with Claude Code and other Anthropic tools, that the company’s Opus 4.5 model is about as capable of executing scientific projects as a second-year graduate student. According to Kauderer-Abrams, Claude Science isn’t intended to displace Claude Code and Claude Cowork in scientists’ workflows.\n\nInstead, it’s designed to build on what scientists already find useful about Anthropic’s products. For instance, it not only writes code but also helps scientists run their code on powerful computer clusters, which many many scientists need for their work but can be difficult to manage. And it prioritizes reproducibility, so that scientists can trace back the source of any figure or result and check it for accuracy and validity. ... Though Claude Science could in principle assist with any area of scientific research, it seems designed and marketed as a tool for molecular and cellular biology, and for drug development in particular. It can interface with various tools used in genetics, chemistry, and protein biology, all of which could come in handy for researchers on the hunt for new drugs. During the Tuesday event, Alexander Tarashansky, who led the development of Claude Science, demonstrated how the system could autonomously identify new drug candidates for phenylketonuria, a rare ge",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 week ago",
        "search_provider": "anthropic",
        "url": "https://www.technologyreview.com/2026/06/30/1139987/claude-science-is-anthropics-newest-flagship-product/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Researchers say Anthropic's Claude Science will boost drug discovery",
      "url": "https://news.northeastern.edu/2026/06/30/anthropic-claude-science-launch/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "northeastern.edu",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=northeastern.edu",
        "site_name": "Northeastern Global News"
      },
      "is_missing": false,
      "text": "Anthropic&#x27;s Claude Science aims to speed up drug discovery. Northeastern scientists weigh in on what it could mean for their research.\n\nClaude Science is Anthropic’s answer to GPT-Rosalind, the AI model designed to speed up research and drug discovery, released by OpenAI in April. Northeastern Global News asked a few Northeastern scientists, Jeffrey Agar, Zhenyu Tian, Bryan Spring, Sijia Dong, Donald O’Malley, Jared Auclair, George O’Doherty, and Michael Pollastri two questions: 1) If you find AI helpful in your work, how are you currently using it in your research? 2) If you don’t currently use AI, are you interested in trying out this technology in the future? ... Jeffrey Agar’s research deals with protein changes in amyotrophic lateral sclerosis (ALS), also known as Lou Gehrig’s disease. He’s excited about the new developments. “I use AI a lot, sometimes for many hours a day,” he says. “The Sonnet to Opus transition was big for scientists — the improvement was palpable and almost 20% for some areas of science.” ·\n\nFor one thing, “Claude Science beta is only available for Mac and Linux,” he says, referring to computer operating systems. Also, he says that his version of Claude’s connector page doesn’t display the major chemical databases at the moment. Bryan Spring, whose research bridges biophysics, biomedical optics and cancer biology, says he’s excited about the release of Claude Science. He adds that Anthropic is adept at dealing with a “large ecosystem of incompatible tools and constantly integrating information from many different sources.” · Having found it helpful in his work, he uses it to “refine scientific writing, brainstorm ideas, summarize literature, and reduce the burden of the growing regulatory and administrative workload,” which he says “often keeps faculty working late into the night.” Likewise, manuscript prep is an area where AI has been a lifesaver, given that it “has the potential to save enormous amounts of time,” Spring says.\n\n“I like what Anthropic is doing with Claude Science and can’t wait to take it for a spin,” he says. Michael Pollastri thinks that “Claude Science looks like it’s going to be an unbelievable tool.” · His research deals with repurposing existing drugs, with a particular focus on tropical diseases. Identifying candidates is a lengthy process, and AI could help researchers jump through procedural and administrative hoops with more ease, he says. “If Claude Science is able to automate so much of the information gathering … and help inform the ultimate decisions about where to go next, it would increase the pace of our experimentation by orders of magnitude,” Pollastri says. “I can’t wait to give this a try!” · Zhenyu Tian agrees that in his research on organic pollutants, “the identification of small molecules is still a bottleneck” that AI could help unclog.\n\nDong says she’s looking forward to trying Claude Science “once we have better data protection put in place by an institutional subscription.” She finds that Claude and a coding tool known as Claude Code have greatly advanced computational chemistry research. O’Doherty hasn’t used AI directly in his medical and organic chemistry research. However, he turns to it when doing scientific literature research and says that “AIs have really positively impacted” it. At the same time, O’Doherty is disturbed by how much information seems to come from Wikipedia.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 week ago",
        "search_provider": "anthropic",
        "url": "https://news.northeastern.edu/2026/06/30/anthropic-claude-science-launch/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Releases Claude Science for Automating Research - Bloomberg",
      "url": "https://www.bloomberg.com/news/articles/2026-06-30/anthropic-releases-claude-science-for-automating-research",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "bloomberg.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=bloomberg.com",
        "site_name": "Bloomberg"
      },
      "is_missing": false,
      "text": "Claude Science, which the company plans to roll out Tuesday, can be used to automate a range of biology and chemistry tasks, such as predicting protein structures, Anthropic said Tuesday at an event.\n\nAnthropic PBC is releasing new software aimed at helping scientists automate research, in the hopes of reducing some of the tedious aspects of their work. Claude Science, which the company plans to roll out Tuesday, can be used to automate a range of biology and chemistry tasks, such as predicting protein structures, Anthropic said Tuesday at an event. The software brings together a number of tools scientists commonly use, including more than 60 scientific databases, the firm said. The idea, according to the company, is to make it simpler for scientists to automate multistep tasks, ask questions using plain language, and get answers without having to query many individual sources of information. HomeBTV+Market DataOpinionAudioOriginalsMagazineEvents · NewsMarketsEconomicsTechnologyPoliticsGreenCryptoAI · Work & LifeWealthPursuitsBusinessweekCityLabSportsEqualityManagement & Work ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 week ago",
        "search_provider": "anthropic",
        "url": "https://www.bloomberg.com/news/articles/2026-06-30/anthropic-releases-claude-science-for-automating-research"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic’s Claude Science bets on workflow, not a new model, to win over scientists | TechCrunch",
      "url": "https://techcrunch.com/2026/06/30/anthropics-claude-science-bets-on-workflow-not-a-new-model-to-win-over-scientists/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "techcrunch.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=techcrunch.com",
        "site_name": "TechCrunch"
      },
      "is_missing": false,
      "text": "It runs the same Claude models ... builds on Anthropic’s October 2025 launch of Claude for Life Sciences, which essentially augmented the Claude chatbot by making it better at life sciences tasks....\n\nTo be clear, Anthropic says Claude Science is “not a new AI model and not a more capable model for biology. It runs the same Claude models already available to everyone today (including Claude Opus 4.8), with no special access and no gating.” · The workbench builds on Anthropic’s October 2025 launch of Claude for Life Sciences, which essentially augmented the Claude chatbot by making it better at life sciences tasks. Claude Science is a dedicated place to do that work. The launch, announced Tuesday at an AI for Science briefing, fits into Anthropic’s broader push to be more than a model provider and to further own the operating layer for specific industries, the way Claude Code has become the operating layer for software development. Anthropic is increasingly betting its growth on vertical, workflow-level products rather than just raw model capability (which could shape how it competes, and prices, against rivals).\n\nHere’s how it works: One main AI assistant acts as a kind of project manager for scientists. It connects to more than 60 scientific databases and comes with prebuilt toolkits for specific fields, like genomics, protein structure, and chemistry. That assistant can then create sub-assistants to help split up the work, like a project lead delegating tasks to specialists, or hand work off to a custom “expert” assistant that the user has built for their own research. A separate fact-checker AI then double-checks the citations and calculations before anything goes to publication. That fact-check step matters, as more AI-assisted writing leads to fabricated citations and unverifiable stats slipping into papers. That said, it’s still the same underlying model checking itself, not an independent source of truth. Claude Science has other ways of ensuring reproducibility, Anthropic says.\n\nFor example, the workbench can generate figures like 3D protein structures and chemistry drawers alongside the code that made them. Each figure includes the “exact code and environment that produced it, a plain-language description of how it was created, and the full message history,” according to the company. The process also saves scientists time by allowing them to edit figures in plain language, prompting the agent to edit its own underlying code. ... Another way Claude Science can save scientists time is by running on the lab’s own infrastructure setup rather than sending data off to Anthropic’s servers. Early users say they’re already putting this to work. Allen Institute neuroscientist Jérôme Lecoq used the tool to build a multi-agent computational review pipeline. Stephen Francis’s group at the UCSF Brain Tumor Center relied on Claude Science to speed up comprehensive germline analysis of glioma to a sliver of the time it previously required, with results independently validate\n\nAnd then there’s Google DeepMind, which is playing a different game entirely. DeepMind actually owns foundational science models like AlphaFold and AlphaGenome, which the other two can only call into as tools. Its Gemini for Science platform also bundles those plus more than 30 life science databases into one skill set. The net effect is that three very different distribution strategies are now competing for the same scientific research market: Anthropic is going wide with broad subscription access, OpenAI is going narrow and enterprise-gated, and Google is leaning on owned, proprietary models nobody else has. How that plays out could be an early signal for how AI vendors compete in other specialized verticals like law, finance, and engineering, down the line. Claude Science is available in beta to anyone on Pro, Max, Team, and Enterprise subscriptions.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 week ago",
        "search_provider": "anthropic",
        "url": "https://techcrunch.com/2026/06/30/anthropics-claude-science-bets-on-workflow-not-a-new-model-to-win-over-scientists/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic releases Claude Science, a product aimed at researchers, the pharma industry",
      "url": "https://www.statnews.com/2026/06/30/anthropic-release-claude-science-ceo-dario-amodei/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "statnews.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=statnews.com",
        "site_name": "Statnews"
      },
      "is_missing": false,
      "text": "Anthropic released Claude Science, an application that optimizes its large language model for scientists and, especially, those doing research at pharma companies.\n\nLast year, Claude Code fundamentally upended programming industry. Anthropic CEO Dario Amodei believes Claude Science will do the same for life sciences.\n\nSAN FRANCISCO — Anthropic, the artificial intelligence firm, on Tuesday announced the availability of Claude Science, an application that optimizes the company’s large language model for use in scientific laboratories and, especially, within the research operations of pharmaceutical companies. At a launch event here, Anthropic CEO Dario Amodei said that until now, humans have wrestled with the complexity of biology only with their minds. While biology is not as simple or clean as code, he still thinks it can be just as powerful in this domain. ... “It’s going to be a general purpose technology that helps us to make sense of that complexity, in its full complexity, better.” But, he admitted, “We don’t know for sure if that’s going to work out. But I think we’re seeing signs that we’re seeing the beginnings of it.” ... Savings start at 25%! ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 week ago",
        "search_provider": "anthropic",
        "url": "https://www.statnews.com/2026/06/30/anthropic-release-claude-science-ceo-dario-amodei/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic launches Claude Science for pharma researchers | pharmaphorum",
      "url": "https://pharmaphorum.com/news/anthropic-launches-claude-science-pharma-researchers",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "pharmaphorum.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=pharmaphorum.com",
        "site_name": "pharmaphorum"
      },
      "is_missing": false,
      "text": "Claude Science is the first product specifically designed by Anthropic for use by life science researchers, although, it has been talking about a move into the area since last autumn, and there was clear evidence of its progress when it introduced ...\n\nAs the US relaxes an export ban on Anthropic's advanced AI tools, the company formally launched Claude Science, an AI 'workbench' for researchers involved in drug discovery. Claude Science is the first product specifically designed by Anthropic for use by life science researchers, although, it has been talking about a move into the area since last autumn, and there was clear evidence of its progress when it introduced its Claude Fable 5 large language model (LLM) earlier this month, claiming it could accelerate some aspects of drug design tenfold. The Claude Science app – currently in beta testing – has been launched to allow researchers to use a single research environment to work with dozens of databases, file formats, and analysis tools at \"all stages of their work,\" said Anthropic. It comes with more than 60 functions built in for areas like genomics, single-cell studies, proteomics, structural biology, and cheminformatics, assisting researchers with tasks like 3D protein structure\n\nNow, Anthropic says the export ban has been lifted, amid reports that it has developed additional guardrails for the technologies that have alleviated the government's concerns. Claude is striving to break into the pharma category with rival AIs like OpenAI's ChatGPT and Google's Gemini, which have also launched dedicated tools for life science researchers. Claude Science arrives alongside other tools from Anthropic like Claude for Healthcare, a suite of AI tools for health systems, payers, and patients. ... Scribe Therapeutics has become the latest biotech to announce plans to list on the Nasdaq as it advances its spin on CRISPR-based therapeutics. ... AstraZeneca has returned to China's CSPC Pharma to fill its R&D pipeline, reaching a new $1.77bn agreement to develop drugs for kidney diseases. ... A new webinar from Konovo will address some of the critical topics impacting today’s healthcare market research industry.\n\n\"After months of beta testing Claude Science, I'm convinced,\" said Francis. \"This tool is going to accelerate scientific discovery in a big way.\" Anthropic said it is making the beta version available early \"so scientists can start to use it on real problems and tell us how to refine it,\" and is offering use credits worth up to $30,000 and funding for projects that \"span domains and explore the boundaries of science, with an early focus on biology and biomedical research.\" Applications for the support are open until 15th July. The company lies at the heart of the debate around the safety of AI, and a few weeks ago the US federal government imposed export controls on Anthropic's main Mythos and Fable AI models built on Claude. The US government said it has found a way to 'jailbreak' safety measures in the AIs to prevent them from being used for nefarious purposes, such as launching cyberattacks or developing new biological or chemical weapons.\n\nInizio, the leading global commercialization partner to the health and life sciences industry, today announced the launch of Intelligent Congress ... The Pharmaceutical Manufacturing & Packaging Congress is an exclusive annual event that fosters networking and knowledge-sharing among professionals · Get in-depth news, opinions, and features on pharma and healthcare sent straight to your inbox ... Scribe Therapeutics has become the latest biotech to announce plans to list on the Nasdaq as it advances its spin on CRISPR-based therapeutics.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 week ago",
        "search_provider": "anthropic",
        "url": "https://pharmaphorum.com/news/anthropic-launches-claude-science-pharma-researchers"
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

To clarify: "Claude for Science" / "Claude Science" is itself a real Anthropic product, launched June 30, 2026 as an AI workbench for researchers. So you're likely asking about competitors. The two most direct analogues:

**Google DeepMind — Gemini for Science.** The closest structural competitor. Gemini for Science bundles more than 30 life science databases into one skill set, alongside DeepMind's own foundational science models like AlphaFold and AlphaGenome. Its differentiator is that DeepMind owns proprietary science models that competitors can only call into as tools.

**OpenAI — GPT-Rosalind.** According to Northeastern Global News, Claude Science is Anthropic's answer to GPT-Rosalind, the AI model designed to speed up research and drug discovery, released by OpenAI in April. TechCrunch characterizes OpenAI's approach as narrow and enterprise-gated, versus Anthropic going wide with broad subscription access and Google leaning on owned models.

One caveat on attribution: I've drawn the competitive framing (three strategies) from TechCrunch's analysis and the GPT-Rosalind reference from Northeastern — both are secondary/journalistic sources, not the vendors' own announcements. If you want, I can pull the primary product pages for Gemini for Science or GPT-Rosalind to verify exact feature claims and current availability.

Is your interest life-sciences-specific, or are you looking for something that would fit your nuclear-physics / ML workflow? Claude Science, Gemini for Science, and GPT-Rosalind are all heavily oriented toward biology, chemistry, and drug discovery — none is purpose-built for experimental particle/nuclear physics, so a different set of tools might serve you better if that's the target.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f45d0-2d90-70ce-9965-d26f66d5a634",
  "updated_at": "2026-07-09T07:38:35.119576Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f45d0-2d90-7612-9b5b-e6c8a535f066"
}
```

</details>

### 3. human — 2026-07-09T09:00:18.583557Z

What I want is the framework, not the whole pipeline. I have API and claude code, and it is more flexible to seek for open source projects.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f461b-2faa-769b-b71f-536619b3f02f",
  "updated_at": "2026-07-09T09:00:18.583557Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f45d0-2d90-70ce-9965-d26f66d5a634"
}
```

</details>

### 4. assistant — 2026-07-09T09:00:42.473057Z

Makes sense — you want the orchestration scaffolding (multi-agent coordination, skill/tool registry, reproducibility layer), not a hosted pipeline. Let me search for open-source projects in that space rather than answer from memory, since this ecosystem moves fast.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-09T09:00:20.611126Z",
  "stop_timestamp": "2026-07-09T09:00:20.825345Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_014YVHEbHFpXRrvymjPUtFrq",
  "name": "web_search",
  "input": {
    "query": "open source AI agent framework scientific research multi-agent reproducibility 2026"
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
  "start_timestamp": "2026-07-09T09:00:21.828021Z",
  "stop_timestamp": "2026-07-09T09:00:21.828038Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_014YVHEbHFpXRrvymjPUtFrq",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Self-Evolving Agents: Open-Source Projects Redefining AI in 2026 | by evoailabs | Medium",
      "url": "https://evoailabs.medium.com/self-evolving-agents-open-source-projects-redefining-ai-in-2026-be2c60513e97",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "To address this limitation, we introduce EvoScientist, an evolving multi-agent AI scientist framework that continuously improves its research strategies through persistent memory and self-evolution. EvoScientist comprises three specialized agents: a Researcher Agent (RA) responsible for scientific idea generation, an Engineer Agent (EA) responsible for experiment impleme\n\nDrop a research topic — get back a full academic paper with real literature from OpenAlex, Semantic Scholar & arXiv, hardware-aware sandbox experiments (GPU/MPS/CPU auto-detected), statistical analysis, multi-agent peer review, and conference-ready LaTeX targeting NeurIPS/ICML/ICLR. No babysitting. No copy-pasting. No hallucinated references. While most agents handle “tasks,” AutoResearchClaw handles “careers.” It automates the entire scientific lifecycle, from hypothesis generation to NeurIPS-ready PDF formatting. It doesn’t just learn facts, it learns process failures. \n\nIf a data visualization fails in Stage 14, the agent generates a “Structured Lesson” that is permanently injected into its global reasoning framework to prevent that specific type of failure in all future research runs. ... OpenViking has a built-in memory self-iteration loop.\n\nProtein scientific discovery is bottlenecked by the manual orchestration of information and algorithms, while general agents are insufficient in complex domain projects. VenusFactory2 provides an autonomous framework that shifts from static tool usage to dynamic workflow synthesis via a self-evolving multi-agent infrastructure to address protein-related demands. It outperforms a set of well-known agents on the VenusAgentEval benchmark, and autonomously organizes the discovery and optimization of proteins from a single natural language prompt. ... Today’s AI agents — OpenClaw, nanobot, Claude Code, Codex, Cursor, etc.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 4, 2026",
        "search_provider": "anthropic",
        "url": "https://evoailabs.medium.com/self-evolving-agents-open-source-projects-redefining-ai-in-2026-be2c60513e97"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Top 5 Open-Source Agentic AI Frameworks in 2026",
      "url": "https://aimultiple.com/agentic-frameworks",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "aimultiple.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=aimultiple.com",
        "site_name": "AIMultiple"
      },
      "is_missing": false,
      "text": "It has an asynchronous agent collaboration, making it particularly useful for research and prototyping scenarios where agent behavior requires experimentation or iterative refinement. ... Swarm is a lightweight, experimental multi-agent framework for prototyping. Agents work sequentially through handoffs, transferring tasks while maintaining shared context. It uses natural language routines and Python tools for flexible workflows. LangChain is a framework for building single-agent LLM applications with RAG tooling. It provides modular components including chains, tools, memory, and retrieval for document processing workflows. LangChain operates primarily through single-agent execution patterns where one agent manages the workflow. LangGraph takes a graph-based approach to agent design, where each agent is represented as a node that maintains its own state.\n\n\n\nIt has an asynchronous agent collaboration, making it particularly useful for research and prototyping scenarios where agent behavior requires experimentation or iterative refinement. ... Swarm is a lightweight, experimental multi-agent framework for prototyping. Agents work sequentially through handoffs, transferring tasks while maintaining shared context. It uses natural language routines and Python tools for flexible workflows. LangChain is a framework for building single-agent LLM applications with RAG tooling. It provides modular components including chains, tools, memory, and retrieval for document processing workflows. LangChain operates primarily through single-agent execution patterns where one agent manages the workflow. LangGraph takes a graph-based approach to agent design, where each agent is represented as a node that maintains its own state.\n\nCrewAI takes a role-based design approach.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "3 days ago",
        "search_provider": "anthropic",
        "url": "https://aimultiple.com/agentic-frameworks"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Open Source AI Agent Frameworks 2026: Ranked - RankSquire",
      "url": "https://ranksquire.com/2026/05/03/open-source-ai-agent-frameworks-2026/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "ranksquire.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=ranksquire.com",
        "site_name": "RankSquire"
      },
      "is_missing": false,
      "text": "Hardware: DigitalOcean 16GB RAM Droplet, Frankfurt (EU) OS: Ubuntu 22.04 · Docker 25.0 · Python 3.11 Date: March–May 2026 · 50 iterations per config ... LangGraph 0.2.5 · CrewAI 0.6 · vLLM 0.4.1 · Qdrant 1.9.1 · PostgreSQL 16 · Redis 7 · Langfuse 2.0.1 ... P95 latency · Task completion rate · State recovery after crash · Concurrent agent stability · Token cost per 1K tasks ... AgentRM (arXiv:2603.13110) — 40,000 GitHub issues across 6 frameworks. MLFQ scheduler validation. All external citations are direct references to this paper. Reproducibility Confidence Score: 8/10 · Repo: github.com/mohammedshehuahmed/ranksquire-benchmarks · Cost to reproduce: ~$47 on DigitalOcean Frankfurt · Time: 6–8 hours ... Hardware: DigitalOcean 16GB RAM Droplet, Frankfurt (EU data residency) Software: LangGraph v0.2.5 · CrewAI 0.6 · vLLM 0.4.1 ·\n\n\n\nHardware: DigitalOcean 16GB RAM Droplet, Frankfurt (EU) OS: Ubuntu 22.04 · Docker 25.0 · Python 3.11 Date: March–May 2026 · 50 iterations per config ... LangGraph 0.2.5 · CrewAI 0.6 · vLLM 0.4.1 · Qdrant 1.9.1 · PostgreSQL 16 · Redis 7 · Langfuse 2.0.1 ... P95 latency · Task completion rate · State recovery after crash · Concurrent agent stability · Token cost per 1K tasks ... AgentRM (arXiv:2603.13110) — 40,000 GitHub issues across 6 frameworks. MLFQ scheduler validation. All external citations are direct references to this paper. Reproducibility Confidence Score: 8/10 · Repo: github.com/mohammedshehuahmed/ranksquire-benchmarks · Cost to reproduce: ~$47 on DigitalOcean Frankfurt · Time: 6–8 hours ... Hardware: DigitalOcean 16GB RAM Droplet, Frankfurt (EU data residency) Software: LangGraph v0.2.5 · CrewAI 0.6 · vLLM 0.4.1 ·\n\n\n\nEach framework scored across 5 dimensions (State Persistence & Recoverability · Observability & Debuggability · Cost Predictability at Scale · Sovereignty · Maintenance Velocity) on a 0–10 scale. SVS Score = weighted composite out of 10. Primary External Source: A",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "May 5, 2026",
        "search_provider": "anthropic",
        "url": "https://ranksquire.com/2026/05/03/open-source-ai-agent-frameworks-2026/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Open Source Toolkit for Building AI Agents in 2026 - DEV Community",
      "url": "https://dev.to/anmolbaranwal/open-source-toolkit-for-building-ai-agents-in-2026-55h1",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "dev.to",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=dev.to",
        "site_name": "DEV Community"
      },
      "is_missing": false,
      "text": "OpenCode is the open-source alternative - terminal-native, 75+ provider support, LSP integration, multi-session (run multiple agents in parallel on the same project), privacy-first.\n\nCrewAI is the most widely adopted multi-agent framework right now. You define a crew of agents with specific roles, goals, and tools and CrewAI handles how they collaborate to finish a task. The role-based model (PM, researcher, engineer) is intuitive because it maps to how you would actually divide work between people. It's the easiest entry point into multi-agent systems. Well-documented, large community, with examples for almost everything. The tradeoff is control - agent-to-agent communication is mediated through task outputs, not direct messaging and there's no built-in checkpointing for long-running workflows. CrewAI Flows (the newer event-driven mode) addresses some of this for predictable pipelines. For cyclical workflows with feedback loops, most teams end up moving parts to LangGraph.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "May 21, 2026",
        "search_provider": "anthropic",
        "url": "https://dev.to/anmolbaranwal/open-source-toolkit-for-building-ai-agents-in-2026-55h1"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Deep Research of Deep Research: From Transformer to Agent, From AI to AI for Science",
      "url": "https://arxiv.org/pdf/2603.28361",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": ". URSA is a scientific agent ecosystem for accelerating research tasks, which consists of a set of modular agents and tools (Grosskopf et al., 2025). RDR is a generalizable pipeline capable of systematically analyzing AI, robotics and beyond: identifying emerging trends, uncovering cross-domain opportunities, and offering concrete starting points for new inquiry (Zou et al., 2025). DEPLOY-MASTER constructed reproducible runtime environments for 50,112 scientific tools, and each successful tool is validated by a minimal executable command and registered in SCIENCEPEDIA for search and reuse (Wang et al., 2026d). MARVEL is a locally deployable, open-source framework for domainaware question answering and assisted scientific research (Mukund et al., 2026). EvoScientist is an evolving multi-agent AI scientist framework that continuously improves its research strategies through persistent memory and self-evolution (Lyu et al., 2026).",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://arxiv.org/pdf/2603.28361"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - ARUNAGIRINATHAN-K/awesome-ai-agents-2026: Awesome AI Agents for 2026 - 300+ AI Agents, Frameworks & Coding • Creative • Voice • Research • Enterprise. Comparison guides, benchmarks & deep dives · GitHub",
      "url": "https://github.com/ARUNAGIRINATHAN-K/awesome-ai-agents-2026",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "AI platforms that conduct autonomous multi-step research, synthesize findings from multiple sources, and generate structured reports with citations. ... CAJAL 🌱 [Python] [Local] - Local AI agent that generates publication-ready IMRaD scientific papers with verified arXiv citations and AI tribunal scoring. ChatGPT Deep Research 🚀 [Cloud] [OpenAI] - Conducts extended reasoning with web browsing to produce structured research reports with Canvas output. Claude Deep Research 🚀 [Cloud] [Anthropic] - Performs multi-step investigation with verified source citations and 200K token context window. DeerFlow 🚀 [Python] [Multi-Agent] - Multi-agent research system from ByteDance with planning and execution loops for autonomous investigation. Gemini Deep Research 🚀 [Cloud] [RAG] - Leverages Google Search and Knowledge Graph integration with 1M token context for breadth-first research.\n\n\n\nllama.cpp 🌱 [C++] [Local] - C/C++ LLM inference engine supporting CPU, GPU, and Apple Silicon as the foundation of local AI.\n\nP2PCLAW 🌱 [Python] [RAG] - Decentralized scientific research network with 14+ autonomous agents featuring P2P mesh, IPFS storage, and Lean 4 formal verification, self-hosted with Docker Compose. Swarm 🚀 [Python] [OpenAI] - Lightweight framework for agent handoffs, context variables, and function calling patterns from OpenAI. Swarms Framework 🚀 [Python] [Multi-Agent] - Multi-agent orchestration for production use cases with scalability and reliability at its core. Yao Agents 🌱 [Go] [MCP] - Complete local AI execution platform with 30+ Experts, autonomous Robot orchestration via 5-stage Pipeline, API-based Robot-to-Robot calling, MCP support, and multi-channel messaging. The protocol layer that enables agents to discover tools, communicate with each other, and interoperate across ecosystems. ... \n\nA2A Protocol 🚀 [Python] [Multi-Agent] - Google's open protocol enabling AI agents to communicate, collaborate, and delegate tasks across frameworks",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "4 days ago",
        "search_provider": "anthropic",
        "url": "https://github.com/ARUNAGIRINATHAN-K/awesome-ai-agents-2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "SemaClaw: A Step Towards General-Purpose Personal AI Agents through Harness Engineering",
      "url": "https://arxiv.org/pdf/2604.11548",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arxiv.org",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arxiv.org",
        "site_name": "arxiv"
      },
      "is_missing": false,
      "text": "Empirically, LangChain's controlled experiments LangChain (2026) on Terminal Bench 2.0 show that holding the model constant while improving only harness configuration raises task completion from 52.8% to 66.5%—a 13.7 percentage point gain attributable entirely to harness design. Yet the corresponding design space remains underexplored in open-source frameworks for personal multi-agent applications, where orchestration, safety, and memory concerns must be addressed together rather than in isolation.\n\nThis gap motivates the primary mission of this work: to operationalize dynamic orchestration, runtime safety, and long-term memory within a robust, open-source harness architecture.\n\nToward this end, we present **SemaClaw**, a multi-agent application framework and an initial step toward general-purpose personal AI agents. SemaClaw is organized as a two-layer architecture: sema-code-core Zhou et al.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://arxiv.org/pdf/2604.11548"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - VoltAgent/awesome-ai-agent-papers: A curated collection of AI agent research papers released in 2026, covering agent engineering, memory, evaluation, workflows, and autonomous systems. · GitHub",
      "url": "https://github.com/VoltAgent/awesome-ai-agent-papers",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Automated Structural Testing of LLM-Based Agents: Methods, Framework, and Case Studies - Presents structural testing methods for LLM-based agents using OpenTelemetry traces, mocking for reproducible behavior, and automated assertions for component-level verification. When AI Agents Touch CI/CD Configurations: Frequency and Success - Analyzes how five AI coding agents interact with CI/CD configurations across 8,031 pull requests, examining modification frequency, merge rates, and build success. Fingerprinting AI Coding Agents on GitHub - Identifies behavioral signatures of five AI coding agents from 33,580 pull requests using commit, PR structure, and code features for agent attribution. Interpreting Agentic Systems: Beyond Model Explanations to System-Level Accountability - Assesses existing interpretability methods for agentic systems and identifies gaps in explaining temporal dynamics, compounding decisions, and context-dependent behaviors.\n\n\n\nR-LAM: Reproducibility-Constrained Large Action Models for Scientific Workflow Automation - Introduces a reproducibility-constrained framework for Large Action Models with structured action schemas, deterministic execution policies, and provenance tracking to ensure auditable and replayable workflows. OpenTinker: Separating Concerns in Agentic Reinforcement Learning - Proposes a composable RL infrastructure for LLM agents that separates algorithm design, execution, and agent-environment interaction with a centralized scheduler for managing shared training and inference resources. ARM: Role-Conditioned Neuron Transplantation for Training-Free Generalist LLM Agent Merging - Introduces activation-guided, role-conditioned neuron transplantation for training-free merging of environment-specific LLM agent experts into a single generalist model. \n\nAutoNumerics: An Autonomous, PDE-Agnostic Multi-Agent Pipeline for Scientific Computing - A multi-agent pipeline that reads a PDE problem description in plain text and writes, debugs, and",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 week ago",
        "search_provider": "anthropic",
        "url": "https://github.com/VoltAgent/awesome-ai-agent-papers"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "The best open source frameworks for building AI agents in 2026",
      "url": "https://www.firecrawl.dev/blog/best-open-source-agent-frameworks",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "firecrawl.dev",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=firecrawl.dev",
        "site_name": "Firecrawl"
      },
      "is_missing": false,
      "text": "AutoGen is a multi-agent conversation framework developed by Microsoft Research. Released in September 2023, it has grown to over 58,700 GitHub stars and 856,000 monthly downloads. AutoGen uses an event-driven architecture for complex interactions between AI agents and integrates with various LLMs while maintaining structured conversation flows. ... The framework has gained traction in data science and education sectors, with Novo Nordisk implementing it for data science workflows. In October 2025, Microsoft merged AutoGen with Semantic Kernel into the unified Microsoft Agent Framework, with GA targeted for end of Q1 2026. AutoGen itself is now in maintenance mode, receiving only bug fixes and security patches, though existing projects continue to work. CrewAI orchestrates role-playing AI agents for collaborative tasks. Launched in early 2024, it has over 52,800 GitHub stars and 5.2 million monthly downloads.\n\n\n\nStreaming tool call events were added in January 2026, addressing the earlier limitation around real-time task performance. For a hands-on walkthrough, see our CrewAI multi-agent tutorial. CrewAI is a favorite for high-level multi-agent orchestration precisely because the role-based design maps naturally to how people think about team workflows. The trade-off is that once you hit production complexity, the abstractions start working against you. A developer comparing the two in r/AI_Agents put the friction clearly: With CrewAI, it honestly feels like an immature framework right now: no proper out-of-the-box observability, you can't clearly see what prompts are actually being passed to the LLM, and once abstractions kick in, you start losing control. At my company, we're using CrewAI in production, and under the hood it's causing real trouble — architecture feels rigid and opaque, debugging is painful because engin",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "June 5, 2026",
        "search_provider": "anthropic",
        "url": "https://www.firecrawl.dev/blog/best-open-source-agent-frameworks"
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

Two different layers surfaced here, and which one you want matters. Let me separate them, and flag a caveat up front: much of the science-specific tooling below comes from arXiv papers and a couple of curated "awesome" lists / Medium posts, not from battle-tested repos with large communities. Star counts and maturity for the general-purpose frameworks are better attested. I haven't independently verified the science-agent repos are active or reproduce their claims — treat those as leads to inspect, not endorsements.

**Layer 1 — general-purpose orchestration frameworks (mature, well-attested).** These give you the multi-agent scaffolding (roles, handoffs, state, checkpointing) and you supply the science skills yourself via Claude Code / the API. The two most-adopted per Firecrawl's June 2026 writeup: CrewAI (role-based, ~52,800 stars, intuitive PM/researcher/engineer mapping, but reportedly weak observability and rigid once you hit production complexity), and LangGraph (graph-based, each agent a node holding its own state — the tool teams reportedly migrate to for cyclical feedback loops and long-running workflows). Microsoft's AutoGen was merged into the unified Microsoft Agent Framework and is now in maintenance mode, so I'd steer away from starting fresh there. For pure lightweight handoffs there's OpenAI's Swarm, but it's explicitly experimental.

Honestly, given you already have Claude Code and the API, you may not need a heavyweight framework at all. Claude Code's subagents + skills already give you role decomposition and a tool registry; LangGraph is worth adding mainly if you need durable state/checkpointing across long runs that Claude Code doesn't persist for you.

**Layer 2 — science-specific agent frameworks (research-stage, verify before trusting).** These are closer to "Claude Science, but as a framework." From an arXiv survey and VoltAgent's paper list: URSA (a modular scientific agent ecosystem of agents + tools), MARVEL (described as a locally-deployable open-source framework for domain-aware QA and assisted research), and EvoScientist (an evolving multi-agent "AI scientist" with persistent memory and self-evolution). Also notable for your reproducibility requirement: R-LAM, a reproducibility-constrained Large Action Model framework with structured action schemas, deterministic execution policies, and provenance tracking for auditable, replayable workflows — that provenance/traceability layer is the specific thing that makes Claude Science distinctive, so it's the closest conceptual match. And AutoNumerics, a PDE-agnostic multi-agent pipeline for scientific computing, is the only one in this batch that leans physics/numerics rather than bio.

A gap worth naming: none of these is built for experimental particle/nuclear physics. They're overwhelmingly bio/chem/ML-paper-generation oriented. The provenance and multi-agent *patterns* transfer to your HIRFL/RIBF/PID workflow, but the prebuilt skills won't.

Two things would let me point you precisely rather than broadly:

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-09T09:00:39.211951Z",
  "stop_timestamp": "2026-07-09T09:00:42.378273Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Eha4wdakvEJ8m1px7veG5R",
  "name": "ask_user_input_v0",
  "input": {
    "questions": [
      {
        "question": "What's the core thing you want the framework to give you?",
        "options": [
          "Multi-agent orchestration (roles, delegation)",
          "Reproducibility / provenance tracking",
          "A skill/tool registry to plug my own tools into",
          "Full 'AI scientist' autonomy (hypothesis→paper)"
        ],
        "type": "multi_select"
      },
      {
        "question": "How much do you want to build vs. adopt?",
        "options": [
          "Thin layer on top of Claude Code/API",
          "Adopt a mature general framework (LangGraph/CrewAI)",
          "Fork a science-specific research repo"
        ],
        "type": "single_select"
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
  "start_timestamp": "2026-07-09T09:00:42.398196Z",
  "stop_timestamp": "2026-07-09T09:00:42.398206Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01Eha4wdakvEJ8m1px7veG5R",
  "name": "ask_user_input_v0",
  "content": [
    {
      "type": "text",
      "text": "{\"questions\":[{\"question\":\"What's the core thing you want the framework to give you?\",\"options\":[\"Multi-agent orchestration (roles, delegation)\",\"Reproducibility / provenance tracking\",\"A skill/tool registry to plug my own tools into\",\"Full 'AI scientist' autonomy (hypothesis→paper)\"],\"type\":\"multi_select\"},{\"question\":\"How much do you want to build vs. adopt?\",\"options\":[\"Thin layer on top of Claude Code/API\",\"Adopt a mature general framework (LangGraph/CrewAI)\",\"Fork a science-specific research repo\"],\"type\":\"single_select\"}]}",
      "uuid": "7be361dc-9bd2-4591-8be8-0eed7fc10a05"
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
  "uuid": "019f461b-2faa-7ab0-8254-0e0fab7cd2c4",
  "updated_at": "2026-07-09T09:00:42.473057Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f461b-2faa-769b-b71f-536619b3f02f"
}
```

</details>

### 5. human — 2026-07-09T09:01:47.822635Z

Q: What's the core thing you want the framework to give you? (Select all that apply)
A: Multi-agent orchestration (roles, delegation), Reproducibility / provenance tracking

Q: How much do you want to build vs. adopt?
A: Thin layer on top of Claude Code/API

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f461c-8cb5-73c3-9a30-cde21f57cc39",
  "updated_at": "2026-07-09T09:01:47.822635Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f461b-2faa-7ab0-8254-0e0fab7cd2c4"
}
```

</details>

### 6. assistant — 2026-07-09T09:02:20.208435Z

Good — orchestration + provenance, thin layer on Claude Code. That combination actually rules out most of what I listed. CrewAI/LangGraph would be overkill and would fight Claude Code's own subagent model, and the science-specific repos are too heavy to sit "thin." Let me verify what Claude Code natively gives you here before recommending anything external, since subagent and hook behavior is exactly the kind of product detail that changes.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-09T09:01:50.908625Z",
  "stop_timestamp": "2026-07-09T09:01:51.630502Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01MLuu2ny9auGp8DMsbvMGiB",
  "name": "view",
  "input": {
    "description": "Check Claude Code subagent/hooks/orchestration capabilities from product self-knowledge skill",
    "path": "/mnt/skills/public/product-self-knowledge/SKILL.md"
  },
  "message": "Check Claude Code subagent/hooks/orchestration capabilities from product self-knowledge skill",
  "integration_name": "File Creation",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Check Claude Code subagent/hooks/orchestration capabilities from product self-knowledge skill"
  },
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
  "start_timestamp": "2026-07-09T09:01:51.651145Z",
  "stop_timestamp": "2026-07-09T09:01:51.651158Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01MLuu2ny9auGp8DMsbvMGiB",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: product-self-knowledge\n     3\tdescription: \"Stop and consult this skill whenever your response would include specific facts about Anthropic's products. Covers: Claude Code (how to install, Node.js requirements, platform/OS support, MCP server integration, configuration), Claude API (function calling/tool use, batch processing, SDK usage, rate limits, pricing, models, streaming), and Claude.ai (Pro vs Team vs Enterprise plans, feature limits). Trigger this even for coding tasks that use the Anthropic SDK, content creation mentioning Claude capabilities or pricing, or LLM provider comparisons. Any time you would otherwise rely on memory for Anthropic product details, verify here instead — your training data may be outdated or wrong.\"\n     4\t---\n     5\t\n     6\t# Anthropic Product Knowledge\n     7\t\n     8\t## Core Principles\n     9\t\n    10\t1. **Accuracy over guessing** - Check official docs when uncertain\n    11\t2. **Distinguish products** - Claude.ai, Claude Code, and Claude API are separate products\n    12\t3. **Source everything** - Always include official documentation URLs\n    13\t4. **Right resource first** - Use the correct docs for each product (see routing below)\n    14\t\n    15\t---\n    16\t\n    17\t## Question Routing\n    18\t\n    19\t### Claude API or Claude Code questions?\n    20\t\n    21\t→ **Check the docs maps first**, then navigate to specific pages:\n    22\t\n    23\t- **Claude API & General:** https://docs.claude.com/en/docs_site_map.md\n    24\t- **Claude Code:** https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md\n    25\t\n    26\t### Claude.ai questions?\n    27\t\n    28\t→ **Browse the support page:**\n    29\t\n    30\t- **Claude.ai Help Center:** https://support.claude.com\n    31\t\n    32\t---\n    33\t\n    34\t## Response Workflow\n    35\t\n    36\t1. **Identify the product** - API, Claude Code, or Claude.ai?\n    37\t2. **Use the right resource** - Docs maps for API/Code, support page for Claude.ai\n    38\t3. **Verify details** - Navigate to specific documentation pages\n    39\t4. **Provide answer** - Include source link and specify which product\n    40\t5. **If uncertain** - Direct user to relevant docs: \"For the most current information, see [URL]\"\n    41\t\n    42\t---\n    43\t\n    44\t## Quick Reference\n    45\t\n    46\t**Claude API:**\n    47\t\n    48\t- Documentation: https://docs.claude.com/en/api/overview\n    49\t- Docs Map: https://docs.claude.com/en/docs_site_map.md\n    50\t\n    51\t**Claude Code:**\n    52\t\n    53\t- Documentation: https://docs.claude.com/en/docs/claude-code/overview\n    54\t- Docs Map: https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md\n    55\t- npm Package: https://www.npmjs.com/package/@anthropic-ai/claude-code\n    56\t\n    57\t**Claude.ai:**\n    58\t\n    59\t- Support Center: https://support.claude.com\n    60\t- Getting Help: https://support.claude.com/en/articles/9015913-how-to-get-support\n    61\t\n    62\t**Other:**\n    63\t\n    64\t- Product News: https://www.anthropic.com/news\n    65\t- Enterprise Sales: https://www.anthropic.com/contact-sales\n    66\t",
      "uuid": "064a2507-63ec-496b-a370-0a0fdeec2b60"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": {
    "output_format_category": "md"
  },
  "message": null,
  "integration_name": "File Creation",
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

The skill just routes to docs. Let me pull the actual Claude Code subagents and hooks pages so the provenance/orchestration claims are grounded in current docs rather than my memory.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-09T09:01:54.557332Z",
  "stop_timestamp": "2026-07-09T09:01:54.562331Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01Tahq39nU2h6RqNwu6fFgkh",
  "name": "web_fetch",
  "input": {
    "url": "https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md"
  },
  "message": "Fetching: https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md",
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
  "start_timestamp": "2026-07-09T09:01:54.587759Z",
  "stop_timestamp": "2026-07-09T09:01:54.587771Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01Tahq39nU2h6RqNwu6fFgkh",
  "name": "web_fetch",
  "content": [
    {
      "type": "text",
      "text": "{\"error_type\": \"PERMISSIONS_ERROR\", \"error_message\": \"This URL was not in any prior search or fetch result. web_search for it first, then fetch the result link.\"}",
      "uuid": "485fcac6-fc0a-4e54-b0c7-e2e254c0f618"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": "Failed to fetch: https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md",
      "subtitles": null,
      "url": "https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
      "source": "anthropic"
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
  "start_timestamp": "2026-07-09T09:01:56.370463Z",
  "stop_timestamp": "2026-07-09T09:01:56.418205Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01JFfLriggSBcZYGZT1m1bnk",
  "name": "web_search",
  "input": {
    "query": "Claude Code subagents hooks documentation orchestration provenance"
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
  "start_timestamp": "2026-07-09T09:01:56.977733Z",
  "stop_timestamp": "2026-07-09T09:01:56.977744Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01JFfLriggSBcZYGZT1m1bnk",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Hooks reference - Claude Code Docs",
      "url": "https://code.claude.com/docs/en/hooks",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude Code Docs"
      },
      "is_missing": false,
      "text": "In addition to settings files and plugins, hooks can be defined directly in skills and subagents using frontmatter. These hooks are scoped to the component’s lifecycle and only run when that component is active.\n\nFetch the complete documentation index at: /docs/llms.txt · Use this file to discover all available pages before exploring further. ... Reference for Claude Code hook events, configuration schema, JSON input/output formats, exit codes, async hooks, HTTP hooks, prompt hooks, and MCP tool hooks. ... For a quickstart guide with examples, see Automate actions with hooks. Hooks are user-defined shell commands, HTTP endpoints, or LLM prompts that execute automatically at specific points in Claude Code’s lifecycle. Use this reference to look up event schemas, configuration options, JSON input/output formats, and advanced features like async hooks, HTTP hooks, and MCP tool hooks. If you’re setting up hooks for the first time, start with the guide instead. Hooks fire at specific points during a Claude Code session. When an event fires and a matcher matches, Claude Code passes JSON context about the event to your hook handler.\n\nHook events receive these fields as JSON, in addition to event-specific fields documented in each hook event section. For command hooks, this JSON arrives via stdin. For HTTP hooks, it arrives as the POST request body. When running with --agent or inside a subagent, two additional fields are included: Only SessionStart hooks can receive a model field, and it is not guaranteed to be present. There is no $CLAUDE_MODEL environment variable. A hook process inherits the parent environment, so it can read $ANTHROPIC_MODEL if you set it in your shell, but that value doesn’t change when you switch models with /model during a session.\n\nAgent hooks (type: \"agent\"): spawn a subagent that can use tools like Read, Grep, and Glob to verify conditions before returning a decision. Agent hooks are experimental and may change. See Agent-based hooks. All matching hooks run in parallel, and identical handlers are deduplicated automatically. Command hooks are deduplicated by command string and args, and HTTP hooks are deduplicated by URL. Handlers run in the current directory with Claude Code’s environment. The $CLAUDE_CODE_REMOTE environment variable is set to \"true\" in remote web environments and not set in the local CLI. As of v2.1.199, $CLAUDE_CODE_BRIDGE_SESSION_ID is set to the Remote Control session ID while the local session has an active Remote Control connection. ... The if field holds exactly one permission rule. There is no &&, ||, or list syntax for combining rules; to apply multiple conditions, define a separate hook handler for each.\n\nIn addition to settings files and plugins, hooks can be defined directly in skills and subagents using frontmatter. These hooks are scoped to the component’s lifecycle and only run when that component is active. All hook events are supported. For subagents, Stop hooks are automatically converted to SubagentStop since that is the event that fires when a subagent completes. Hooks use the same configuration format as settings-based hooks but are scoped to the component’s lifetime and cleaned up when it finishes. This skill defines a PreToolUse hook that runs a security validation script before each Bash command: --- name: secure-operations description: Perform operations with security checks hooks: PreToolUse: - matcher: \"Bash\" hooks: - type: command command: \"./scripts/security-check.sh\" --- Agents use the same format in their YAML frontmatter. Type /hooks in Claude Code to open a read-only browser for your configured hooks.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://code.claude.com/docs/en/hooks"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code: Hooks, Subagents & Skills Complete Guide",
      "url": "https://ofox.ai/blog/claude-code-hooks-subagents-skills-complete-guide-2026/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "ofox.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=ofox.ai",
        "site_name": "Ofox"
      },
      "is_missing": false,
      "text": "Hooks fire at 25 distinct lifecycle points. Here are the ones you will actually use: ... UserPromptSubmit — Fires when you submit a prompt. Can block or modify the prompt before Claude sees it. PreToolUse — Fires before any tool executes. The primary security checkpoint. PermissionRequest — Fires when Claude asks for permission. Can auto-approve or deny. Stop / SubagentStop — Fires when Claude or a subagent finishes. Can force continuation. PreCompact — Fires before context compaction. Can back up transcripts. Informational events (cannot block, but can log or notify): SessionStart / SessionEnd — Session lifecycle. Load context on start, clean up on end. PostToolUse / PostToolUseFailure — Tool completion or failure. Log results, run linters. SubagentStart — Subagent spawned. Track agent orchestration. Notification — Claude sends a notification.\n\nMaster Claude Code's three extensibility layers: lifecycle hooks for deterministic control, subagents for parallel tasks, and skills for reusable workflows. claude-codeai-codingdeveloper-toolsagent-orchestrationtutorial ... OFOX Chat — China's top models alongside GPT, Claude, and Gemini. One interface, no per-provider signups. Open OFOX Chat → · TL;DR — Claude Code is more than a chat interface. Hooks let you intercept and control every lifecycle event with deterministic scripts. Subagents spin up isolated workers for parallel tasks without polluting your main context. Skills package reusable prompts and workflows into invocable commands. Together, they turn Claude Code from a conversational tool into a programmable AI engineering platform. Claude Code ships with three extensibility layers that most users never touch: hooks for lifecycle automation, subagents for parallel task delegation, and skills for reusable prompt templates.\n\nHooks fire at 25 distinct lifecycle points. Here are the ones you will actually use: ... UserPromptSubmit — Fires when you submit a prompt. Can block or modify the prompt before Claude sees it. PreToolUse — Fires before any tool executes. The primary security checkpoint. PermissionRequest — Fires when Claude asks for permission. Can auto-approve or deny. Stop / SubagentStop — Fires when Claude or a subagent finishes. Can force continuation. PreCompact — Fires before context compaction. Can back up transcripts. Informational events (cannot block, but can log or notify): SessionStart / SessionEnd — Session lifecycle. Load context on start, clean up on end. PostToolUse / PostToolUseFailure — Tool completion or failure. Log results, run linters. SubagentStart — Subagent spawned. Track agent orchestration. Notification — Claude sends a notification.\n\nProject-level hooks are ideal for team-shared policies. Personal hooks in ~/.claude/ apply everywhere. Subagents are specialized AI instances that handle tasks in their own context window. When a subagent runs, its verbose output — file searches, log dumps, multi-step reasoning — stays isolated. Only the summary returns to your main conversation. ... Claude delegates automatically based on task type. You can also invoke explicitly with @agent-name or claude --agent <name>. ... Subagents are Markdown files with YAML frontmatter. Save to .claude/agents/ (project) or ~/.claude/agents/ (personal): --- name: code-reviewer description: Expert code review specialist. Proactively reviews code for quality, security, and maintainability. Use immediately after writing or modifying code. tools: Read, Grep, Glob, Bash model: sonnet --- You are a senior code reviewer ensuring high standards of code quality and security.\n\nUsage: After editing auth code, run /secure-review or ask Claude to Have the security-reviewer agent check these changes. The PostToolUse hook runs the security linter on every file edit automatically. Use subagents for operations that produce large outputs: Use a subagent to run the test suite and report only the failing tests with their error messages · The full test output stays in the subagent’s context. You get only the actionable summary. ... --- name: db-reader description: Execute read-only database queries tools: Bash hooks: PreToolUse: - matcher: \"Bash\" hooks: - type: command command: \"./scripts/validate-readonly-query.sh\" --- The hook blocks any SQL write operation before it executes. Route different tasks to different models for cost optimization: --- name: quick-classifier description: Classify incoming requests by type and complexity model: haiku --- Classify this request as: simple, complex, or research-heavy.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 24, 2026",
        "search_provider": "anthropic",
        "url": "https://ofox.ai/blog/claude-code-hooks-subagents-skills-complete-guide-2026/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - disler/claude-code-hooks-mastery: Master Claude Code Hooks · GitHub",
      "url": "https://github.com/disler/claude-code-hooks-mastery",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "# 1. Create a plan with team orchestration /plan_w_team # User prompt: &quot;Update the hooks documentation and add missing status lines&quot; # Orchestration prompt: &quot;Create groups of agents for each hook, one builder and one validator&quot; # 2. Plan is generated with: # - Team members (session_end_builder, session_end_validator, etc.) # - Step-by-step tasks with dependencies # - Validation commands # 3. Execute the plan /build # 4. Watch agents work in parallel: # - Builders implement features # - Validators verify completion # - Task system coordinates everything ... This project includes a comprehensive collection of custom output styles (.claude/output-styles/) that transform how Claude Code communicates responses. See the official documentation for complete details on how output styles work. ... Output styles modify Claude&#x27;s system prompt to change response formatting without affecting core functionality.\n\nPrimary Control Point: Intercepts when Claude Code subagents try to finish · Exit Code 2 Behavior: Blocks subagent stoppage, shows error to subagent · Use Cases: Ensuring subagent tasks complete properly · Example: Our subagent_stop.py logs events and announces completion · Primary Control Point: Fires before compaction operations · Exit Code 2 Behavior: N/A - shows stderr to user only, no blocking capability · Use Cases: Transcript backup, context preservation, pre-compaction logging · Example: Our pre_compact.py creates transcript backups before compaction · Primary Control Point: Fires when new sessions start or resume · Exit Code 2 Behavior: N/A - shows stderr to user only, no blocking capability · Use Cases: Loading development context, session initialization, environment setup · Example: Our session_start.py loads git status, recent issues, and context files · Beyond simple exit codes, hooks can return structured JSON for sophisticated control: { \"continue\": true, // Whether Clau\n\n# 1. Create a plan with team orchestration /plan_w_team # User prompt: \"Update the hooks documentation and add missing status lines\" # Orchestration prompt: \"Create groups of agents for each hook, one builder and one validator\" # 2. Plan is generated with: # - Team members (session_end_builder, session_end_validator, etc.) # - Step-by-step tasks with dependencies # - Validation commands # 3. Execute the plan /build # 4. Watch agents work in parallel: # - Builders implement features # - Validators verify completion # - Task system coordinates everything ... This project includes a comprehensive collection of custom output styles (.claude/output-styles/) that transform how Claude Code communicates responses. See the official documentation for complete details on how output styles work. ... Output styles modify Claude's system prompt to change response formatting without affecting core functionality.\n\nFires: When Claude Code finishes responding Payload: stop_hook_active boolean flag Enhanced: AI-generated completion messages with TTS playback (LLM priority: OpenAI > Anthropic > Ollama > random) Fires: When Claude Code subagents (Task tools) finish responding Payload: stop_hook_active boolean flag Enhanced: TTS playback - \"Subagent Complete\" Fires: Before Claude Code performs a compaction operation Payload: trigger (\"manual\" or \"auto\"), custom_instructions (for manual), session info Enhanced: Transcript backup, verbose feedback for manual compaction ·\n\nFires: When a subagent (Task tool) spawns Payload: agent_id, agent_type, session info Enhanced: Subagent spawn logging with optional TTS announcement · Fires: When Claude enters a repository (init) or periodically (maintenance) Payload: trigger (\"init\" or \"maintenance\"), session info Enhanced: Environment persistence via CLAUDE_ENV_FILE, context injection via additionalContext · Complete hook lifecycle coverage - All 13 hook events implemented and logging (11/13 validated via automated testing) Prompt-level control - UserPromptSubmit validates and enhances prompts before Claude sees them · Intelligent TTS system - AI-generated audio feedback with voice priority (ElevenLabs > OpenAI > pyttsx3) Security enhancements - Blocks dangerous commands and sensitive file access at multiple levels · Personalized experience - Uses engineer name from environment variables ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/disler/claude-code-hooks-mastery"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Customization: CLAUDE.md, Slash Commands, Skills, and Subagents | alexop.dev",
      "url": "https://alexop.dev/posts/claude-code-customization-guide-claudemd-skills-subagents/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "alexop.dev",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=alexop.dev",
        "site_name": "Alexop"
      },
      "is_missing": false,
      "text": "Claude Code’s own system prompt includes a built-in “documentation lookup” workflow that uses a subagent: -&gt; Looking up your own documentation: When the user directly asks about any of the following: how to use Claude Code (eg. “can Claude Code do…”, “does Claude Code have…”) what you’re able to do as Claude Code in second person (eg. “are you able…”, “can you do…”) about how they might do something with Claude Code (eg. “how do I…”, “how can I…”) how to use a specific Claude Code feature (eg. implement a hook, write a skill, or install an MCP server) how to use the Claude Agent SDK, or asks you to write code that uses the Claude Agent SDK · Use the Task tool with subagent_type=‘claude-code-guide’ to get accurate information from the official Claude Code and Claude Agent SDK documentation. Source: https://github.com/marckrenn/cc-mvp-prompts/blob/main/cc-prompt.md ...\n\nClaude Code’s own system prompt includes a built-in “documentation lookup” workflow that uses a subagent: -> Looking up your own documentation: When the user directly asks about any of the following: how to use Claude Code (eg. “can Claude Code do…”, “does Claude Code have…”) what you’re able to do as Claude Code in second person (eg. “are you able…”, “can you do…”) about how they might do something with Claude Code (eg. “how do I…”, “how can I…”) how to use a specific Claude Code feature (eg. implement a hook, write a skill, or install an MCP server) how to use the Claude Agent SDK, or asks you to write code that uses the Claude Agent SDK · Use the Task tool with subagent_type=‘claude-code-guide’ to get accurate information from the official Claude Code and Claude Agent SDK documentation. Source: https://github.com/marckrenn/cc-mvp-prompts/blob/main/cc-prompt.md ...\n\nSlash commands can be invoked explicitly (you type /command) and can also be auto-invoked by Claude when the command’s description matches the task. Slash commands can also orchestrate other behavior: you can spell out in the command itself that it should spin up a subagent (or a specific subagent), call out a particular skill/workflow, and generally “pipeline” the work (e.g., research → codebase scan → write a doc) instead of trying to do everything in one shot. The main difference vs skills is packaging + UX: slash commands are single-file entries with great terminal /... discovery/autocomplete; skills are usually directories with supporting files (patterns, templates, scripts). ... Want a full walkthrough? See my slash commands guide How to Speed Up Your Claude Code Experience with Slash Commands Learn how to transform Claude Code from a chatbot into a deterministic engine using Slash Commands.\n\nI’ll solve the same problem four different ways so the trade-offs are concrete. Spoiler: for doc-fetching, subagents win because they keep your main context clean. ... This post assumes familiarity with Claude Code basics. For a broader overview of all features—including MCP, hooks, and plugins—see my comprehensive guide to Claude Code’s feature stack Understanding Claude Code's Full Stack: MCP, Skills, Subagents, and Hooks Explained A practical guide to Claude Code's features: MCP, CLAUDE.md, slash commands, subagents, hooks, plugins, skills, and scheduled tasks. Updated April 2026 with deferred tool loading, worktree isolation, agent teams, and more. claude-codeaimcp +2 Nov 9, 2025 . If you want to automate responses to Claude Code events (like getting desktop notifications when tasks finish Claude Code Notifications: Get Alerts When Tasks Finish (Hooks Setup) How to set up Claude Code notifications using hooks.\n\n### Step 1: Launch Parallel Research Agents Use the Task tool to spawn these subagents **in parallel** (all in a single message): 1. **Web Documentation Agent** (subagent_type: general-purpose) - Search official documentation for the topic - Find best practices and recommended patterns - Locate relevant GitHub issues or discussions 2. **Stack Overflow Agent** (subagent_type: general-purpose) - Search Stack Overflow for similar problems and solutions - Find highly-voted and accepted answers - Note common pitfalls and gotchas 3. **Codebase Explorer Agent** (subagent_type: Explore) - Search the codebase for related patterns - Find existing solutions to similar problems - Identify relevant files, functions, or components ### Step 2: Create Research Document After all agents complete, create a markdown file at `docs/research/<topic-slug>.md`. Generate the filename from the research topic: - Convert to lowercase - Replace spaces with hyphens - Remove special characters - Add today's date as",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "December 21, 2025",
        "search_provider": "anthropic",
        "url": "https://alexop.dev/posts/claude-code-customization-guide-claudemd-skills-subagents/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Subagents and Multi-Agent Orchestration Guide - Delegation, Parallel Fan-Out, and Custom Agent Definitions | hidekazu-konishi.com",
      "url": "https://hidekazu-konishi.com/entry/claude_code_subagents_and_orchestration_guide.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "hidekazu-konishi.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=hidekazu-konishi.com",
        "site_name": "Hidekazu-konishi"
      },
      "is_missing": false,
      "text": "A subagent can carry its own hooks in frontmatter (a PreToolUse hook that inspects a Bash command and exits non-zero to block it, for example), and the session can carry SubagentStart and SubagentStop hooks that fire around the subagent&#x27;s lifecycle. Hooks are their own subject, and the full treatment — every event, the exit-code and JSON protocol, SubagentStop specifically — lives in the Claude Code Hooks Complete Guide. The pairing to remember here: tools/disallowedTools is the coarse &quot;which tools,&quot; hooks are the fine &quot;which uses of a tool,&quot; and together they give a research-only or write-restricted subagent real teeth. The settings and permission layers these build on are covered in the Claude Code Harness and Environment Engineering Guide. Once you can define and scope agents, the question becomes how to combine them. A handful of patterns cover almost everything. The default pattern, and the one with the best return: take any single operation that produces a lot of output and push \n\nSubagents are Claude Code's answer to a single recurring problem: the work a task generates is often far larger than the conclusion it produces, and you do not want the work clogging your main thread. Delegation pushes that work into an isolated context and returns only the conclusion. From that one mechanism comes context preservation, parallelization, and per-agent least privilege. The throughline of this guide: get the mental model right first — fresh isolated context in, final message only out — and most of the syntax follows. Reach for the built-ins (Explore, Plan, general-purpose) before defining anything. Define a custom agent when you keep spawning the same worker, and remember that omitting tools grants all tools, not none. Scope each agent to its role, and lean on hooks when you need argument-level control. Compose with the orchestration patterns — isolate high-volume operations, fan out independent research, chain dependent steps, panel for quality — and graduate to forks, a\n\nA subagent can carry its own hooks in frontmatter (a PreToolUse hook that inspects a Bash command and exits non-zero to block it, for example), and the session can carry SubagentStart and SubagentStop hooks that fire around the subagent's lifecycle. Hooks are their own subject, and the full treatment — every event, the exit-code and JSON protocol, SubagentStop specifically — lives in the Claude Code Hooks Complete Guide. The pairing to remember here: tools/disallowedTools is the coarse \"which tools,\" hooks are the fine \"which uses of a tool,\" and together they give a research-only or write-restricted subagent real teeth. The settings and permission layers these build on are covered in the Claude Code Harness and Environment Engineering Guide. Once you can define and scope agents, the question becomes how to combine them. A handful of patterns cover almost everything. The default pattern, and the one with the best return: take any single operation that produces a lot of output and push \n\nAnd internalize the headline failure mode: a subagent cannot get your approval mid-task, so investigation belongs in subagents and approval-gated edits belong in the parent. Where to go next. The enforcement layer that gives scoped agents real teeth — every hook event, the SubagentStop lifecycle, the exit-code protocol — is the Claude Code Hooks Complete Guide. Building subagents programmatically, outside the CLI, with the agents parameter and AgentDefinition, is the Claude Agent SDK Complete Guide. The settings, permissions, and boundaries these all build on are the Claude Code Harness and Environment Engineering Guide, and the broader day-to-day operating context is the Claude Code Operator's Handbook. For the vocabulary of agents in general, the AI Agent Engineering Glossary is a useful companion. As the product evolves, this guide will be revised to match the official documentation.\n\nUse the code-reviewer subagent to find performance issues, then use the optimizer subagent to fix them. Each subagent finishes and returns to Claude, which passes the relevant context to the next. Because subagents cannot spawn other subagents, this orchestration lives in the main conversation: the parent is the conductor, and the chain is a sequence of delegations, not a subagent calling a subagent. A powerful composition for quality-sensitive work: spawn several differently-scoped agents to look at the same artifact from different angles, then synthesize. A style-checker, a security-scanner, and a test-coverage agent reviewing the same change in parallel each bring a distinct lens, and the parent collects their verdicts. The value is diversity — each agent is blind to what the others surface, so the panel catches failure modes a single reviewer would miss.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "June 7, 2026",
        "search_provider": "anthropic",
        "url": "https://hidekazu-konishi.com/entry/claude_code_subagents_and_orchestration_guide.html"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Steering Claude Code: when to use CLAUDE.md, skills, hooks, and subagents | Claude by Anthropic",
      "url": "https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "This pattern scales: subagents can nest up to five levels deep, and dynamic workflows orchestrate tens to hundreds of background agents without requiring you to specify each detail of the subagent architecture. The orchestration plan and intermediate results live in script variables rather than in Claude’s context window, which enables scale without losing instructional fidelity. Tip: That isolation is one of the main reasons to reach for a subagent instead of a skill. Use a subagent when a side task like deep search, a log analysis pass, or a dependency audit would clutter your main conversation with intermediate results you won&#x27;t reference again. Use a skill when you want the procedure to play out inside the main thread so you can see and steer each step. Hooks are user-defined commands, HTTP endpoints, or LLM prompts that provide more deterministic control over Claude’s behavior by firing on specific events in Claude’s lifecycle like file edits, tool calls, or session start.\n\nThis pattern scales: subagents can nest up to five levels deep, and dynamic workflows orchestrate tens to hundreds of background agents without requiring you to specify each detail of the subagent architecture. The orchestration plan and intermediate results live in script variables rather than in Claude’s context window, which enables scale without losing instructional fidelity. Tip: That isolation is one of the main reasons to reach for a subagent instead of a skill. Use a subagent when a side task like deep search, a log analysis pass, or a dependency audit would clutter your main conversation with intermediate results you won't reference again. Use a skill when you want the procedure to play out inside the main thread so you can see and steer each step. Hooks are user-defined commands, HTTP endpoints, or LLM prompts that provide more deterministic control over Claude’s behavior by firing on specific events in Claude’s lifecycle like file edits, tool calls, or session start.\n\nYou can find more tips and patterns for getting the most out of Claude Code, from configuring your environment to scaling across parallel sessions, in our best practices for Claude Code documentation. Once you have a few of these working, you can bundle many of them (skills, subagents, hooks, output styles) as a plugin to share a coherent setup across teammates or projects. This article was written by Michael Segner member of Anthropic staff. ... No items found. Explore more product news and best practices for teams building with Claude. ... Bringing Claude Code and Claude Cowork to governmentBringing Claude Code and Claude Cowork to government · Bringing Claude Code and Claude Cowork to governmentBringing Claude Code and Claude Cowork to government ... A harness for every task: dynamic workflows in Claude Code A harness for every task: dynamic workflows in Claude Code ·\n\nThere are seven methods for instructing Claude's behavior: CLAUDE.md files, rules, skills, subagents, hooks, output styles, and appending the system prompt. ... How much authority it carries. The table below provides a quick summary of key differences across each method while the post provides additional detail and decision framework for determining where each of your Claude instructions belongs. There are seven ways to customize Claude Code's behavior: CLAUDE.md files for always-on project context, rules for hard constraints, skills for reusable procedures, subagents for delegated work, hooks for deterministic automation, and output styles or system-prompt appends for global changes. Each method trades context cost against authority—choosing the right one is most of the work. CLAUDE.md is a markdown file at the root of your project. It loads into context at session start and stays there for the entire session.\n\nSubagents are markdown files in .claude/agents/ that define isolated assistants for specific side tasks. Each file uses YAML frontmatter (name, description, plus optional fields for model and tool access) followed by a body that becomes that subagent's system prompt. Subagents are similar to skills in that the name, description, and tool list load at session start, but the larger context within the body of the agent doesn’t auto-invoke. Claude calls them via the Agent tool, passing in a prompt string. Claude Code’s context window holds everything Claude knows about your session. The interactive timeline here walks through what loads and when. Not only does the larger instructional context within the body of the subagent not auto-invoke, it never enters the parent conversation at all. The subagent then runs in its own fresh context window, and the only thing that returns to your main session is the subagent’s final message (often the aggregated result of many subtasks) plus metadata.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 day ago",
        "search_provider": "anthropic",
        "url": "https://claude.com/blog/steering-claude-code-skills-hooks-rules-subagents-and-more"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code: Hooks, Subagents, and Skills — Complete Guide - DEV Community",
      "url": "https://dev.to/owen_fox/claude-code-hooks-subagents-and-skills-complete-guide-hjm",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "dev.to",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=dev.to",
        "site_name": "DEV Community"
      },
      "is_missing": false,
      "text": "Hooks fire at 25 distinct lifecycle points. Blocking-capable events include: UserPromptSubmit — Fires when you submit a prompt. Can block or modify the prompt before Claude sees it. PreToolUse — Fires before any tool executes. The primary security checkpoint. PermissionRequest — Fires when Claude asks for permission. Can auto-approve or deny. Stop / SubagentStop — Fires when Claude or a subagent finishes. Can force continuation. PreCompact — Fires before context compaction. Can back up transcripts. Informational events cannot block but can log or notify: SessionStart / SessionEnd — Session lifecycle. Load context on start, clean up on end. PostToolUse / PostToolUseFailure — Tool completion or failure. Log results, run linters. SubagentStart — Subagent spawned. Track agent orchestration. Notification — Claude sends a notification.\n\nClaude Code is more than a chat interface. Hooks let you intercept and control every lifecycle event with deterministic scripts. Subagents spin up isolated workers for parallel tasks without polluting your main context. Skills package reusable prompts and workflows into invocable commands. Tagged with ai, claudecode, developertools, tutorial.\n\nHooks fire at 25 distinct lifecycle points. Blocking-capable events include: UserPromptSubmit — Fires when you submit a prompt. Can block or modify the prompt before Claude sees it. PreToolUse — Fires before any tool executes. The primary security checkpoint. PermissionRequest — Fires when Claude asks for permission. Can auto-approve or deny. Stop / SubagentStop — Fires when Claude or a subagent finishes. Can force continuation. PreCompact — Fires before context compaction. Can back up transcripts. Informational events cannot block but can log or notify: SessionStart / SessionEnd — Session lifecycle. Load context on start, clean up on end. PostToolUse / PostToolUseFailure — Tool completion or failure. Log results, run linters. SubagentStart — Subagent spawned. Track agent orchestration. Notification — Claude sends a notification.\n\nProject-level hooks are ideal for team-shared policies. Personal hooks in ~/.claude/ apply everywhere. Subagents are specialized AI instances handling tasks in their own context window. When a subagent runs, its verbose output — file searches, log dumps, multi-step reasoning — stays isolated. Only the summary returns to your main conversation. Claude delegates automatically based on task type. You can also invoke explicitly with @agent-name or claude --agent <name>. ... Subagents are Markdown files with YAML frontmatter. Save to .claude/agents/ (project) or ~/.claude/agents/ (personal): --- name: code-reviewer description: Expert code review specialist. Proactively reviews code for quality, security, and maintainability. Use immediately after writing or modifying code. tools: Read, Grep, Glob, Bash model: sonnet --- You are a senior code reviewer ensuring high standards of code quality and security.\n\nThe hook blocks any SQL write operation before it executes. Route different tasks to different models for cost optimization: name: quick-classifier description: Classify incoming requests by type and complexity · Classify this request as: simple, complex, or research-heavy. ` Haiku is fast and cheap for classification. Route complex tasks to Sonnet or Opus. ... Update your agent memory as you discover codepaths, patterns, library locations, and key architectural decisions. ` The subagent accumulates knowledge in .claude/agent-memory/codebase-architect/ across conversations. Claude Code works with any Anthropic-compatible API endpoint. OfoxAI provides full protocol support including extended thinking and cache_control. ... For setup instructions, see the Claude Code configuration guide. For model comparisons, see Claude Opus 4.7 API review and best AI model for agents 2026.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 25, 2026",
        "search_provider": "anthropic",
        "url": "https://dev.to/owen_fox/claude-code-hooks-subagents-and-skills-complete-guide-hjm"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Skills, Subagents, Hooks and Plugins — A Practical Overview | by Shashank Mishra | Medium",
      "url": "https://medium.com/@mishra.shashank35/claude-code-skills-subagents-hooks-and-plugins-a-practical-overview-572de7cedb20",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "You can assign cheaper, faster models to subagents doing grunt work — searching files, pulling API data, scanning logs — and reserve the capable model for the actual reasoning. Saves cost without sacrificing quality. You can think of it as a rule that enforces itself. You don’t have to remember to ask Claude — the hook just fires. ... Hooks make sure Claude follows your rules even mid-task when you’re not watching every step. Unlike skills which you invoke, hooks are invisible. They just run. That’s the point. There are around 24 hooks for now. Some examples are shown below: ... The scope of hooks depends on the location of settings.json where you define it. Good for non-negotiables — never read .env files, always ask before posting a comment, log every tool call for audit purposes. My pr-review skills already asks for approval before posting.\n\nClaude Code Skills, Subagents, Hooks and Plugins — A Practical Overview Are you still doing the same: Same prompts. Same instructions. Same manual effort. Just different files? Initially, I had a …\n\nYou can assign cheaper, faster models to subagents doing grunt work — searching files, pulling API data, scanning logs — and reserve the capable model for the actual reasoning. Saves cost without sacrificing quality. You can think of it as a rule that enforces itself. You don’t have to remember to ask Claude — the hook just fires. ... Hooks make sure Claude follows your rules even mid-task when you’re not watching every step. Unlike skills which you invoke, hooks are invisible. They just run. That’s the point. There are around 24 hooks for now. Some examples are shown below: ... The scope of hooks depends on the location of settings.json where you define it. Good for non-negotiables — never read .env files, always ask before posting a comment, log every tool call for audit purposes. My pr-review skills already asks for approval before posting.\n\nIts like an App Store of your Workflow that works as a distribution container. A plugin bundles everything — skills, hooks, subagents, and tools. Instead of every team member manually setting up the same skills and hooks, a plugin is a one-click install. Skills and hooks are for you or your project. Plugins are for sharing. Same building blocks, just packaged to travel. Plugins are distributed through marketplaces — GitHub repos, npm packages, or team-internal registries. Plugin skills are automatically name-spaced (/security:scan) to prevent name collisions with your local project skills. You can check some realtime examples like Firecrawl (web scraping) or Playwright (browser testing). ... If your team has a PR review workflow, a coding standards checklist, a deployment process — bundle it as a plugin. Everyone gets the same Claude behavior without syncing files manually across repos.\n\nIf you’ve been using Claude Code for a while, you may know these as “custom commands”. That approach was merged into the Skills system. Great for anything your team does repeatedly but slightly differently each time — PR reviews, ticket analysis, release notes, incident summaries. Consider it as hiring a specialist for one job. You don’t ask your data analyst to also answer the phones — same idea here. ... Because a subagent starts with no prior context, it isn’t influenced by what you were doing before. Clean input, clean output. Each runs in a completely separate context window. They handle noisy, large-scale tasks independently and only report back a summary, keeping your main conversation clean. Claude automatically delegates to subagent when the task matches. In my example, I didn’t invoke `pr-explorer` manually. When I run `/pr-review` or mention a PR, Claude detects the need for PR data, spawns the explorer subagent like below: ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 13, 2026",
        "search_provider": "anthropic",
        "url": "https://medium.com/@mishra.shashank35/claude-code-skills-subagents-hooks-and-plugins-a-practical-overview-572de7cedb20"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - VoltAgent/awesome-claude-code-subagents: A collection of 100+ specialized Claude Code subagents covering a wide range of development use cases · GitHub",
      "url": "https://github.com/VoltAgent/awesome-claude-code-subagents",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Each subagent&#x27;s tools field specifies Claude Code built-in tools, optimized for their role: Read-only agents (reviewers, auditors): Read, Grep, Glob - analyze without modifying · Research agents (analysts, researchers): Read, Grep, Glob, WebFetch, WebSearch - gather information · Code writers (developers, engineers): Read, Write, Edit, Bash, Glob, Grep - create and execute · Documentation agents (writers, documenters): Read, Write, Edit, Glob, Grep, WebFetch, WebSearch - document with research · Each agent has minimal necessary permissions. You can extend agents by adding MCP servers or external tools to the tools field. Claude Code skill for browsing and fetching subagents from this catalog. ... We welcome contributions! See CONTRIBUTING.md for guidelines. ... This repository is a curated collection of subagent definitions contributed by both the maintainers and the community.\n\nworkflow-orchestrator - Complex workflow automation ... Research, search, and analysis specialists. ab-test-analysis - A/B test analysis and ship/no-ship decision specialist · cohort-analysis - User cohort retention and behavioral analysis specialist · first-principles-thinking - First principles problem-solving specialist · research-analyst - Comprehensive research specialist · search-specialist - Advanced information retrieval expert · trend-analyst - Emerging trends and forecasting expert · competitive-analyst - Competitive intelligence specialist · market-researcher - Market analysis and consumer insights · project-idea-validator - Brutal go/no-go product idea validator · data-researcher - Data discovery and analysis expert · scientific-literature-researcher - Scientific paper search and evidence synthesis via BGPT MCP · Subagents are specialized AI assistants that enhance Claude Code's capabilities by providing task-specific expertise.\n\nA collection of 100+ specialized Claude Code subagents covering a wide range of development use cases - VoltAgent/awesome-claude-code-subagents\n\nThey act as dedicated helpers that Claude Code can call upon when encountering particular types of work. Independent Context Windows Every subagent operates within its own isolated context space, preventing cross-contamination between different tasks and maintaining clarity in the primary conversation thread. Domain-Specific Intelligence Subagents come equipped with carefully crafted instructions tailored to their area of expertise, resulting in superior performance on specialized tasks. Shared Across Projects After creating a subagent, you can utilize it throughout various projects and distribute it among team members to ensure consistent development practices. Granular Tool Permissions You can configure each subagent with specific tool access rights, enabling fine-grained control over which capabilities are available for different task types. Memory Efficiency: Isolated contexts prevent the main conversation from becoming cluttered with task-specific details ·\n\n3. Deploy and Utilize Your subagent becomes immediately available. Claude Code will automatically engage it when suitable, or you can explicitly request its help: > Have the code-reviewer subagent analyze my latest commits ... Note: When naming conflicts occur, project-specific subagents override global ones. ... --- name: subagent-name description: When this agent should be invoked tools: Read, Write, Edit, Bash, Glob, Grep model: sonnet --- You are a [role description and expertise areas]... [Agent-specific checklists, patterns, and guidelines]... ## Communication Protocol Inter-agent communication specifications... ## Development Workflow Structured implementation phases... Each subagent includes a model field that automatically routes it to the right Claude model — balancing quality and cost: ... You can override any agent's model by editing the model field in its frontmatter.",
      "is_citable": true,
      "prompt_context_metadata": {
        "search_provider": "anthropic",
        "url": "https://github.com/VoltAgent/awesome-claude-code-subagents"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Hooks: Complete Guide to All 12 Lifecycle Events",
      "url": "https://claudefa.st/blog/tools/hooks/hooks-guide",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claudefa.st",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claudefa.st",
        "site_name": "Claude Fast"
      },
      "is_missing": false,
      "text": "Agent hooks spawn a subagent with tool access (Read, Grep, Glob) for deeper verification: { &quot;type&quot;: &quot;agent&quot;, &quot;prompt&quot;: &quot;Verify all test files have corresponding implementation files&quot;, &quot;timeout&quot;: 60 } Agent hooks can explore the codebase before making a decision, making them more thorough than prompt hooks but slower (default timeout: 60s vs 30s for prompts). Add async: true to run hooks in the background without blocking Claude&#x27;s execution. Released by Anthropic in January 2026: { &quot;type&quot;: &quot;command&quot;, &quot;command&quot;: &quot;node backup-script.js&quot;, &quot;async&quot;: true, &quot;timeout&quot;: 30 } ... HTTP hooks let you send hook events to a web server instead of running a local script. This opens up use cases that were previously awkward or impossible with command hooks: Remote validation services that enforce team-wide policies ... { &quot;hooks&quot;: { &quot;PreToolUse&quot;: [ { &quot;matcher&quot;: &quot;Bash&quot;, &quot;hooks&quot;: [ { &quot;type&quot;: &quot;http&quot;, &quot;url&quot;: &quot;http://localhost:8080/hooks/pre-tool-use&quot;, &quot;timeout&quot;: 30, &quot;headers&quot;: { &quot;Authorization&quot;: &quot;Bearer $MY_\n\nPrompt hooks use LLM evaluation (great for Stop/SubagentStop): { \"type\": \"prompt\", \"prompt\": \"Evaluate if Claude should stop: $ARGUMENTS.\n\nInstall the Permission Hook for intelligent auto-approval · Set up Skill Activation for automatic skill loading ... Stop configuring. Start shipping.Everything you're reading about and more.. Agentic Orchestration Kit for Claude Code.\n\nAgent hooks spawn a subagent with tool access (Read, Grep, Glob) for deeper verification: { \"type\": \"agent\", \"prompt\": \"Verify all test files have corresponding implementation files\", \"timeout\": 60 } Agent hooks can explore the codebase before making a decision, making them more thorough than prompt hooks but slower (default timeout: 60s vs 30s for prompts). Add async: true to run hooks in the background without blocking Claude's execution. Released by Anthropic in January 2026: { \"type\": \"command\", \"command\": \"node backup-script.js\", \"async\": true, \"timeout\": 30 } ... HTTP hooks let you send hook events to a web server instead of running a local script. This opens up use cases that were previously awkward or impossible with command hooks: Remote validation services that enforce team-wide policies ... { \"hooks\": { \"PreToolUse\": [ { \"matcher\": \"Bash\", \"hooks\": [ { \"type\": \"http\", \"url\": \"http://localhost:8080/hooks/pre-tool-use\", \"timeout\": 30, \"headers\": { \"Authorization\": \"Bearer $MY_\n\nMaster Claude Code hooks with exit codes, JSON output, and production patterns. Stop clicking approve and fully automate your workflow. Stop configuring. Start shipping.Everything you're reading about and more.. Agentic Orchestration Kit for Claude Code. ... Problem: You're deep in flow state, building a feature. Claude needs to write a file. Click approve. Run a command. Click approve. Format code. Click approve. Twenty interruptions later, you've forgotten what you were building. Quick Win: Add this to .claude/settings.json and never approve a Prettier format again: { \"hooks\": { \"PostToolUse\": [ { \"matcher\": \"Write|Edit\", \"hooks\": [ { \"type\": \"command\", \"command\": \"npx prettier --write \\\"$CLAUDE_TOOL_INPUT_FILE_PATH\\\"\" } ] } ] } } Every file Claude writes now auto-formats. Zero clicks. Zero context switches. Hooks intercept Claude Code events and execute shell commands or LLM prompts.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "2 days ago",
        "search_provider": "anthropic",
        "url": "https://claudefa.st/blog/tools/hooks/hooks-guide"
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

The docs make the conclusion clear: for your two requirements — orchestration + provenance, thin layer — Claude Code's own primitives *are* the framework. You don't need an external one. Here's the mapping, grounded in Anthropic's own documentation.

**Orchestration is native.** Subagents are markdown files in `.claude/agents/` with YAML frontmatter (name, description, optional model and tool access) whose body becomes that subagent's system prompt; Claude invokes them via the Agent tool. Anthropic's own post confirms subagents nest up to five levels deep, and dynamic workflows can orchestrate tens to hundreds of background agents with the orchestration plan living in script variables rather than the context window. The standard patterns — isolate high-volume operations, fan out independent research in parallel, chain dependent steps, and run a review "panel" of differently-scoped agents over the same artifact — cover almost everything you'd want. One structural constraint to design around: a subagent cannot get your approval mid-task and cannot spawn other subagents, so investigation belongs in subagents and approval-gated actions belong in the parent conductor.

**Provenance is where hooks do the work.** This is your reproducibility layer, and it's the piece Claude Science productizes that you can rebuild thinly. Hooks are user-defined shell commands, HTTP endpoints, or LLM prompts that fire at specific lifecycle points. For an audit trail, the relevant events per the docs: `PreToolUse` / `PostToolUse` (log every tool call and its result), `SubagentStart` / `SubagentStop` (track which agent did what), `SessionStart` (capture git SHA, environment, dependency versions), and `PreCompact` (back up the transcript before context is compacted). A `PostToolUse` hook matching `Write|Edit` that appends `{git SHA, timestamp, tool input, file hash}` to a JSONL log gives you exactly the "every figure traces to the code and environment that produced it" property. Hooks can be defined in `settings.json` (project- or user-scoped) or directly in subagent frontmatter, where they're scoped to that agent's lifecycle. Note `async: true` for non-blocking logging was added January 2026.

So the "thin layer" is essentially three directories plus a couple of scripts:

`.claude/agents/` — your role definitions (e.g. a `literature-analyst` scoped to read/web-search only, a `data-runner` with Bash for your PID pipelines, a `reviewer` scoped read-only that checks calculations and citations — mirroring Claude Science's reviewer agent). `.claude/skills/` — your existing physics/ML tools as skills (you already have a mature skill ecosystem, so these plug straight in). `.claude/settings.json` — the provenance hooks writing a run manifest and per-tool audit log, plus a `SessionStart` hook stamping the environment.

Two honest caveats on sourcing. The lifecycle-event and orchestration details above come from Anthropic's official Claude Code docs and blog (primary). The specific event *count* is inconsistent across sources — I've seen "12," "24/25," and "13 validated" in third-party guides, so treat any exact number as unreliable and check `/docs/llms.txt` or the `/hooks` browser in your own install for the authoritative list at your version. And the "reviewer agent checks citations and calculations" framing is Claude Science's design goal — replicating its *quality* with a self-checking subagent running the same model is a real limitation TechCrunch flagged (it's the same model checking itself, not an independent oracle), so don't over-trust that layer for correctness.

If you want a concrete starting point rather than plumbing it yourself, `disler/claude-code-hooks-mastery` (GitHub) implements the full hook lifecycle with logging and a `/plan_w_team` + `/build` orchestration flow — a good reference to fork the provenance-logging scripts from, though I haven't verified its current maintenance state, so read before adopting.

Want me to scaffold the actual `.claude/` layout — a starter `settings.json` with the provenance hooks and two or three subagent definitions shaped around your HIRFL/RIBF + ResNet-PID workflow — so you have something runnable to iterate on?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f461c-8cb5-786b-a87e-55c0ff68b23c",
  "updated_at": "2026-07-09T09:02:20.208435Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f461c-8cb5-73c3-9a30-cde21f57cc39"
}
```

</details>
