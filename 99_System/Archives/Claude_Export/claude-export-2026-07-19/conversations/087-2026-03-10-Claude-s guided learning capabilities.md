# Claude's guided learning capabilities

## Export metadata (verbatim)

```json
{
  "uuid": "c84d3ae2-afee-46ec-8952-607ca12ccc49",
  "name": "Claude's guided learning capabilities",
  "summary": "**Conversation Overview**\n\nThe person asked about Claude's guided learning capabilities, specifically whether Claude has a feature comparable to Gemini's Guided Learning mode. Claude explained that Gemini has a dedicated Guided Learning mode (launched August 2025) built on Google's LearnLM, while Claude's equivalent is a Learning Mode formalized within the Claude for Education institutional product. Claude initially noted this wasn't available as a toggle for regular claude.ai users, but the person then pointed out a \"Learning\" style option visible in their chat interface's style selector menu, which Claude confirmed is indeed accessible to all claude.ai users via the style/pen icon in the toolbar.\n\nThe conversation then shifted to a hands-on request: the person asked whether Claude could create interactive flashcards or a quiz to examine them and check their learning status. Claude built a React-based AI-powered quiz application as an artifact. The app allows the person to input any topic, select question count (3–10), and choose between a mixed Quiz mode (MCQ and open-ended questions) or a Flashcard mode (pure recall). It uses the Anthropic API to dynamically generate questions and evaluate free-text answers with partial credit and feedback, and includes a results screen with per-question review and a score summary. Example topics mentioned in the interface suggest the person may work in physics or machine learning domains (referencing Time Projection Chambers, ResNet architecture, and direct reactions), though this was not explicitly stated.",
  "created_at": "2026-03-10T00:19:27.978520Z",
  "updated_at": "2026-03-10T00:24:28.232888Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-10T00:19:29.415642Z

Does claude have the function of guide learning? Similar with Gemini's?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd51c-ee6e-749a-8e53-58077774472a",
  "updated_at": "2026-03-10T00:19:29.415642Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-10T00:19:58.020156Z

 

<details>
<summary>Thinking (verbatim)</summary>

Let me check the product self-knowledge skill for accurate info.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-10T00:19:31.409614Z",
  "stop_timestamp": "2026-03-10T00:19:31.945748Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01NpEevdQgxGT9Tiv7oDTW32",
  "name": "view",
  "input": {
    "description": "Check product self-knowledge skill",
    "path": "/mnt/skills/public/product-self-knowledge/SKILL.md"
  },
  "message": "Check product self-knowledge skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Check product self-knowledge skill"
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
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01NpEevdQgxGT9Tiv7oDTW32",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: product-self-knowledge\n     3\tdescription: \"Stop and consult this skill whenever your response would include specific facts about Anthropic's products. Covers: Claude Code (how to install, Node.js requirements, platform/OS support, MCP server integration, configuration), Claude API (function calling/tool use, batch processing, SDK usage, rate limits, pricing, models, streaming), and Claude.ai (Pro vs Team vs Enterprise plans, feature limits). Trigger this even for coding tasks that use the Anthropic SDK, content creation mentioning Claude capabilities or pricing, or LLM provider comparisons. Any time you would otherwise rely on memory for Anthropic product details, verify here instead — your training data may be outdated or wrong.\"\n     4\t---\n     5\t\n     6\t# Anthropic Product Knowledge\n     7\t\n     8\t## Core Principles\n     9\t\n    10\t1. **Accuracy over guessing** - Check official docs when uncertain\n    11\t2. **Distinguish products** - Claude.ai, Claude Code, and Claude API are separate products\n    12\t3. **Source everything** - Always include official documentation URLs\n    13\t4. **Right resource first** - Use the correct docs for each product (see routing below)\n    14\t\n    15\t---\n    16\t\n    17\t## Question Routing\n    18\t\n    19\t### Claude API or Claude Code questions?\n    20\t\n    21\t→ **Check the docs maps first**, then navigate to specific pages:\n    22\t\n    23\t- **Claude API & General:** https://docs.claude.com/en/docs_site_map.md\n    24\t- **Claude Code:** https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md\n    25\t\n    26\t### Claude.ai questions?\n    27\t\n    28\t→ **Browse the support page:**\n    29\t\n    30\t- **Claude.ai Help Center:** https://support.claude.com\n    31\t\n    32\t---\n    33\t\n    34\t## Response Workflow\n    35\t\n    36\t1. **Identify the product** - API, Claude Code, or Claude.ai?\n    37\t2. **Use the right resource** - Docs maps for API/Code, support page for Claude.ai\n    38\t3. **Verify details** - Navigate to specific documentation pages\n    39\t4. **Provide answer** - Include source link and specify which product\n    40\t5. **If uncertain** - Direct user to relevant docs: \"For the most current information, see [URL]\"\n    41\t\n    42\t---\n    43\t\n    44\t## Quick Reference\n    45\t\n    46\t**Claude API:**\n    47\t\n    48\t- Documentation: https://docs.claude.com/en/api/overview\n    49\t- Docs Map: https://docs.claude.com/en/docs_site_map.md\n    50\t\n    51\t**Claude Code:**\n    52\t\n    53\t- Documentation: https://docs.claude.com/en/docs/claude-code/overview\n    54\t- Docs Map: https://docs.anthropic.com/en/docs/claude-code/claude_code_docs_map.md\n    55\t- npm Package: https://www.npmjs.com/package/@anthropic-ai/claude-code\n    56\t\n    57\t**Claude.ai:**\n    58\t\n    59\t- Support Center: https://support.claude.com\n    60\t- Getting Help: https://support.claude.com/en/articles/9015913-how-to-get-support\n    61\t\n    62\t**Other:**\n    63\t\n    64\t- Product News: https://www.anthropic.com/news\n    65\t- Enterprise Sales: https://www.anthropic.com/contact-sales\n    66\t",
      "uuid": "8a350500-679d-48ee-8cb4-a43713035bf8"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Let me search the support page for learning-related features.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-10T00:19:35.644779Z",
  "stop_timestamp": "2026-03-10T00:19:35.902704Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_014gkYMW5gtpnjMexe5cPQ5J",
  "name": "web_search",
  "input": {
    "query": "Claude.ai guided learning feature like Gemini"
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
  "tool_use_id": "toolu_014gkYMW5gtpnjMexe5cPQ5J",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Gemini vs Claude for Coding in 2025: We Tested Both",
      "url": "https://www.index.dev/blog/gemini-vs-claude-for-coding",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "index.dev",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=index.dev",
        "site_name": "Index.dev"
      },
      "is_missing": false,
      "text": "Available via claude.ai and integrated ... cases · To fairly compare Gemini and Claude, we designed five real-world coding tasks across frontend, backend, and learning use cases....\n\nIn this hands-on showdown, we compare Gemini (by Google DeepMind) and Claude (by Anthropic) across five real coding tasks, from live API tools and UI replication to debugging and code explanation. You’ll see how each AI performs, where they shine, and when to use them. If you’re building, learning, or just curious, this guide has the answers you need. Gemini is a family of AI models developed by Google DeepMind, designed to perform advanced tasks such as reasoning, coding, writing, answering questions, and image interpretation. It powers tools like Gemini Advanced (a chatbot experience similar to ChatGPT) and integrates across Google products like Search, Docs, and Gmail. The latest version, Gemini 1.5, introduced in 2024, significantly boosts long-context understanding, making it ideal for developers, researchers, and power users. ... Claude is an AI model developed by Anthropic, named after Claude Shannon, the father of information theory.\n\nCompare Gemini and Claude on 5 real coding tasks, UI, APIs, debugging, and more. Find out which AI is best for your developer workflow.\n\nAvailable via claude.ai and integrated into tools like Notion AI · Strong performance on benchmarks (comparable to GPT-4 and Gemini) Great at handling long documents, instructions, and business use cases · To fairly compare Gemini and Claude, we designed five real-world coding tasks across frontend, backend, and learning use cases. Each task was given to both tools using identical prompts. We evaluated their performance based on accuracy, code quality, responsiveness, clarity of explanation, and how well they followed instructions. Outputs were manually tested in live coding environments (like Replit and OneCompiler) to verify functionality. We focused not just on whether the code worked, but also on developer experience, how clean, readable, and maintainable the code was, and how useful the AI’s explanation would be to both beginners and professionals.\n\nYou can choose Gemini if you want clean, production-ready code with a strong desktop design, and choose Claude if you prioritise responsiveness, accessibility, and cross-device usability. Goal: Check how well the AI explains a piece of code to a beginner. We will give both the tools a tricky JS function and ask for line-by-line comments. Prompt: Explain this JavaScript function to a beginner. Add inline comments to each line and help me understand what it does. The explanation should be clear and beginner-friendly ... Gemini gives a thorough explanation with clear analogies and a great step-by-step input example. It introduces key concepts like closures and .apply(), which are accurate but might be a bit much for absolute beginners. The comments are placed above each line, making it readable but not truly inline. It is ideal for learners wanting a deeper dive.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.index.dev/blog/gemini-vs-claude-for-coding",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude vs Gemini: Which AI Assistant Is Right for You in 2026?",
      "url": "https://tactiq.io/learn/claude-vs-gemini",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "tactiq.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=tactiq.io",
        "site_name": "Tactiq"
      },
      "is_missing": false,
      "text": "Enterprise plan: Starting at $30/seat/month (annual) with advanced security and compliance features. For API users, Gemini 3 Pro runs at approximately $2–$4 per million input tokens and $12–$18 per million output tokens, while Gemini 3 Flash is significantly cheaper at around $0.50/$3. Google also offers a free API tier for testing and development. Pro Tip 💡: Whichever AI assistant you choose, you can create meeting workflows by pairing it with Tactiq. Tactiq provides real-time meeting transcripts and summaries for Google Meet, Zoom, and Microsoft Teams. These can be fed directly into Claude or Gemini to turn into content, for action item extraction, or follow-up drafting. ... Now that we&#x27;ve covered what each platform offers individually, let&#x27;s compare them head to head across the dimensions that matter most. Coding: Claude holds a clear advantage here.\n\nWhether you're a developer debugging complex codebases, a content creator drafting long-form articles, or a business professional looking to streamline daily workflows, the right AI tool can dramatically boost your productivity. This guide breaks down everything you need to know about Claude vs Gemini — from features and pricing to real-world performance — so you can make the choice that fits your workflow. Claude is Anthropic's AI assistant, built with a strong emphasis on safety, reasoning depth, and natural communication. Anthropic, founded in 2021 by former OpenAI researchers, developed Claude using a technique called Constitutional AI, which trains the model to follow ethical guidelines and minimize harmful or inaccurate outputs. Claude doesn't just give quick answers. It's built for iterative work: editing documents, debugging sessions, and long conversations that need to stay consistent.\n\nIncludes 5x more usage than the free tier, Claude Code access, file creation, code execution, unlimited projects, research tools, and extended thinking. Max plan: Starting at $100/month (Max 5x) up to $200/month (Max 20x), designed for power users who need virtually unrestricted access. Team plan: $25/seat/month (annual) or $30/seat/month (monthly), with a minimum of 5 seats. Includes collaboration features, admin controls, and SSO. Enterprise plan: Custom pricing with advanced security, larger context windows, audit logging, and role-based access control. For API users, pricing is token-based: Opus 4.5 costs $5 per million input tokens and $25 per million output tokens, Sonnet runs at $3/$15, and Haiku is the most affordable at $1/$5. ... ‍ Google Gemini is Google DeepMind's multimodal AI system, designed from the ground up to process text, images, code, audio, and video as native inputs.\n\nEnterprise plan: Starting at $30/seat/month (annual) with advanced security and compliance features. For API users, Gemini 3 Pro runs at approximately $2–$4 per million input tokens and $12–$18 per million output tokens, while Gemini 3 Flash is significantly cheaper at around $0.50/$3. Google also offers a free API tier for testing and development. Pro Tip 💡: Whichever AI assistant you choose, you can create meeting workflows by pairing it with Tactiq. Tactiq provides real-time meeting transcripts and summaries for Google Meet, Zoom, and Microsoft Teams. These can be fed directly into Claude or Gemini to turn into content, for action item extraction, or follow-up drafting. ... Now that we've covered what each platform offers individually, let's compare them head to head across the dimensions that matter most. Coding: Claude holds a clear advantage here.\n\nGoogle Workspace productivity integration. If your team lives in Gmail, Docs, and Sheets, Gemini's embedded AI features eliminate context-switching. Draft emails with AI assistance, analyze spreadsheet data with natural language queries, generate presentation outlines, and summarize meeting recordings — all within the apps you already use daily. Cost-effective coding solutions. While Claude leads on coding quality benchmarks, Gemini offers strong coding capabilities at a significantly lower price point. For teams running high-volume code generation, automated testing, or CI/CD integrations where cost per request matters, Gemini Flash provides excellent value. Both Claude and Gemini become dramatically more useful when paired with accurate meeting data. The gap between a productive meeting and a wasted one often comes down to what happens after the call ends — and that's where meeting transcription tools change the game.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://tactiq.io/learn/claude-vs-gemini",
        "search_provider": "anthropic",
        "age": "1 week ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude vs. Gemini: How Do They Compare? | DataCamp",
      "url": "https://www.datacamp.com/blog/claude-vs-gemini",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "datacamp.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=datacamp.com",
        "site_name": "DataCamp"
      },
      "is_missing": false,
      "text": "Three principles guide everything: helpfulness (clear, useful responses), harmlessness (avoiding unsafe or misleading outputs), and honesty (acknowledging uncertainty instead of generating confident-sounding falsehoods). Anthropic positions Claude as the thinking person&#x27;s AI assistant. Instead of racing to add every possible feature, they focus on sustained reasoning quality, especially for complex tasks requiring long context or extended conversations. This shows up in how Claude handles ambiguous questions. It&#x27;s more likely to ask for clarification than guess what you meant. The current lineup includes three tiers: Claude Opus (the most capable for reasoning and coding), Claude Sonnet (balanced performance and cost), and Claude Haiku (lightweight and fast). Claude Opus 4.5 represents Anthropic&#x27;s strongest offering, with major improvements in coding benchmarks and long-context understanding. Gemini ...\n\nThree principles guide everything: helpfulness (clear, useful responses), harmlessness (avoiding unsafe or misleading outputs), and honesty (acknowledging uncertainty instead of generating confident-sounding falsehoods). Anthropic positions Claude as the thinking person's AI assistant. Instead of racing to add every possible feature, they focus on sustained reasoning quality, especially for complex tasks requiring long context or extended conversations. This shows up in how Claude handles ambiguous questions. It's more likely to ask for clarification than guess what you meant. The current lineup includes three tiers: Claude Opus (the most capable for reasoning and coding), Claude Sonnet (balanced performance and cost), and Claude Haiku (lightweight and fast). Claude Opus 4.5 represents Anthropic's strongest offering, with major improvements in coding benchmarks and long-context understanding. Gemini is Google DeepMind's multimodal AI system, designed from the ground up to handle text, \n\nCompare Claude vs Gemini across performance, pricing, and features. Understand which AI assistant fits your workflow—from coding to research to enterprise use.\n\nGemini Pro ($19.99/month) removes limits and adds Workspace integration, better image generation (1,000 monthly credits), and priority for new features. Claude Max (~$100/month) offers 5-20× the Pro usage limits for individual power users. For teams, plans start at $25/user/month with options for premium developer seats at $150/user/month that include Claude Code. Gemini's Ultra tier ($249.99/month) targets users needing cutting-edge capabilities: Deep Think mode, Gemini Agent for autonomous task execution, and 25,000+ monthly generation credits for images and videos. For API usage, Claude charges around $5 per million input tokens and $25 per million output tokens for Opus 4.5 (smaller models like Sonnet are cheaper). Gemini pricing through Vertex AI is usage-based, typically around $1.25 per million input tokens and $10-15 per million output tokens, though Google uses a credit system that can make direct comparison tricky.\n\nA quick decision guide for choosing between Claude and Gemini. Image by Author. Claude and Gemini represent two distinct philosophies about AI assistance. Claude prioritizes depth, careful reasoning, and consistent quality, built for users who need an AI they can trust for complex analytical work. Gemini emphasizes breadth, real-time information access, and multimodal versatility, designed for users who want AI embedded throughout their existing Google-based workflows. Neither is objectively \"better\" across all dimensions. The choice comes down to whether you value reasoning depth over information breadth, platform independence over ecosystem convenience, and coding excellence over multimodal creativity. To go beyond simply using these assistants and start building your own AI-powered applications, take our Developing LLM Applications with LangChain course.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.datacamp.com/blog/claude-vs-gemini",
        "search_provider": "anthropic",
        "age": "January 12, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "ChatGPT vs Claude vs Gemini: What's the best AI tool?",
      "url": "https://artificialcorner.com/p/best-ai-model",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "artificialcorner.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=artificialcorner.com",
        "site_name": "Artificialcorner"
      },
      "is_missing": false,
      "text": "Become a paid subscriber today 👇 · I’ve tried my best prompts on ChatGPT, Claude, and Gemini. Claude is the tool that best follows my instructions (even after the GPT-5.2 and Gemini 3 releases). It follows every detail, even in long prompts.\n\nTop AI users are just realizing that other tools like Gemini and Claude are better than ChatGPT in some areas. In this guide, I’ll share the best AI models for different use cases. By the end, you’ll discover why people are switching to other AI tools. Here’s a quick summary: ... P.S. Anyone can access the doc link, but only paid subs can read the content behind the paywall, which is the best part of my guides. Become a paid subscriber today 👇 · I’ve tried my best prompts on ChatGPT, Claude, and Gemini. Claude is the tool that best follows my instructions (even after the GPT-5.2 and Gemini 3 releases). It follows every detail, even in long prompts. For example, I have a prompt that proofreads my guides and also shows the changes. The deletions should be in red (strikethrough) and insertions in blue. Here’s a comparison between Claude and ChatGPT.\n\nIt feels like you’re talking to an AI. Talking with ChatGPT feels less robotic. It has a natural voice flow and personality. One of the things I use Voice Mode for is to practice foreign languages. It feels like having a language exchange with another person! ChatGPT Voice Mode understands the prompt instructions I give it, like how I want language feedback or how to keep the conversation going (Gemini fails to do this) Here’s a quick recording where ChatGPT fixes my Spanish. In the audio, ChatGPT corrects me when I say “el pasto carbonara“ ... Audio playback is not supported on your browser. Please upgrade. ChatGPT, Gemini, and Claude offer a similar experience for web searching and browsing. I’ll use ChatGPT as an example because it’s the one I use the most for this. ChatGPT’s web search feature is like having someone do a quick Google search for you and then hand you a summary.\n\nTo be completely transparent, I haven’t been using AI for coding in 2025 as much as in previous years. That said, six months ago, Peter Yang found that Claude is the best at coding, while Gemini is the most cost-effective. I doubt things have changed over the past few months, especially considering the recent popularity of Claude Code, which is a fantastic tool not only for programmers but for anyone who isn’t afraid to interact with the computer’s terminal. Thanks for reading! ... P.S. Anyone can access the link, but only paid subs can read the content behind the paywall, which is the best part of my guides. Become a paid subscriber today 👇 ... For ChatGPT, it’s essential to add an instruct file for Do’s and Don’ts when things don’t come out the way that you need. ... Helpful article - thanks. For what its worth I have the following observations - 1.\n\nIn case you want to try them, turn on agent mode in ChatGPT or Gemini, or download the Claude extension. On the other hand, Claude Cowork is the only option that is able to perform actions on your computer’s folder (desktop, downloads, etc). It can browse, handle files, and generate deliverables. Here’s an example: For me, Claude is the winner here. It offers agentic capabilities on both the browser and the computer’s folders · Right now, Claude is my favorite AI tool, but I don’t get to use it as often as I’d like to. Why? Because I hit the daily limit very often. That rarely happens when I use ChatGPT or Gemini. Here are the daily limits for ChatGPT Plus, Claude Pro, and Gemini Pro · Although I prefer using Claude, ChatGPT, and Gemini are better alternatives for everyday use because they offer higher daily usage limits. ... I use Voice Mode a lot in my everyday life.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://artificialcorner.com/p/best-ai-model",
        "search_provider": "anthropic",
        "age": "January 21, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "I tested Gemini vs. Claude with 10 prompts: here's the winner.",
      "url": "https://techpoint.africa/guide/i-tested-gemini-vs-claude-with-10-prompts/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "techpoint.africa",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=techpoint.africa",
        "site_name": "Techpoint Africa"
      },
      "is_missing": false,
      "text": "While it doesn’t browse the Internet in real time like Google Gemini, Claude makes up for that with its deep training and extended memory. It can process up to 75,000 words in one go, enough to digest entire books or lengthy project documentation, ...\n\nIn this article, I’ll walk you through each test prompt, show you how both AI models responded (screenshots included), share what impressed me and what didn’t, and, of course, crown the winner of this Gemini vs Claude smackdown. If you’re writing taglines or brainstorming, Gemini excels. But when it’s time to get technical, like debugging code or translating with nuance, Claude is the more dependable choice. From scripts to emails, Claude generally needs fewer edits. Gemini can be a bit wordy or templated, requiring more cleanup before hitting “send.” · Whether it’s explaining cultural idioms or tailoring an email to feel personal, Claude goes deeper. Gemini covers the basics but sometimes misses nuance. If you need an AI that understands images or charts, Gemini Ultra supports that. Claude, for now, is still text-only. When I tested puzzles, coding tasks, or even translation accuracy, Claude delivered more consistent, grounded answers.\n\nI created 10 prompts spread across key categories where AI tools are often put to work, including coding tasks, creative writing (like ad copy and short stories, research and summarization, logic reasoning, and conversational understanding. ... Creativity: Did the response go beyond the obvious? Did the response feel original or just rehashed? Depth: Did it dig deep into the topic or just skim the surface? Usability: Was it easy to understand, refine, or put into action? To ensure fairness, I gave both Claude and Gemini the same prompt — no tweaks, no extra guidance. I saved their responses, reviewed them side by side, and used trusted sources like Google and documentation sites to fact-check anything that seemed off. What you’ll see next is an honest comparison based on how they perform. I started with a simple coding task—fetching weather data using a free API.\n\nGoogle Gemini supports multimodal input, meaning it can analyze and generate responses based on text, images, and, in some cases, audio or video content. This makes it highly versatile for tasks like describing images, analyzing charts, or even helping with UI design. Claude, on the other hand, is currently text-only. Disclaimer! This publication, review, or article (“Content”) is based on our independent evaluation and is subjective, reflecting our opinions, which may differ from others’ perspectives or experiences. We do not guarantee the accuracy or completeness of the Content and disclaim responsibility for any errors or omissions it may contain. Related Story: Google Report: Nigeria leads rest of the world in AI for learning, 26% above global average · The information provided is not investment advice and should not be treated as such, as products or services may change after publication.\n\nAnthropic currently offers multiple versions of Claude, with one of its standout features being extended memory, allowing it to process up to 75,000 words at once — meaning it can analyze entire books and generate insightful summaries. Claude is Anthropic’s answer to the growing demand for thoughtful, safety-focused AI. Named after Claude Shannon, the father of information theory, this model was built to prioritize clarity, reliability, and contextual understanding. It’s not just another chatbot throwing guesses at your questions; it’s designed to reason carefully through prompts and avoid hallucinations as much as possible.. While it doesn’t browse the Internet in real time like Google Gemini, Claude makes up for that with its deep training and extended memory. It can process up to 75,000 words in one go, enough to digest entire books or lengthy project documentation, and give you coherent summaries or suggestions.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://techpoint.africa/guide/i-tested-gemini-vs-claude-with-10-prompts/",
        "search_provider": "anthropic",
        "age": "September 18, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "ChatGPT vs Claude vs Gemini: Best AI for Studying? - Vertech Academy",
      "url": "https://www.vertechacademy.com/blog/best-ai-for-studying",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "vertechacademy.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=vertechacademy.com",
        "site_name": "Vertech Academy"
      },
      "is_missing": false,
      "text": "Claude Free: Claude has the strictest limits. You can only send a few messages every few hours. This can be frustrating if you are in the middle of a big essay. However, the quality of each message is very high. It is best used for your most important writing tasks, rather than quick questions. Gemini Free: Gemini is often the best &quot;value.&quot; It gives you a lot of messages for free and has very fast responses. It is perfect if you need to ask 50 quick questions in an hour. Google wants everyone to use Gemini, so they make it very easy to access. 🟢 · No matter which tool you choose, you must use it the right way. The best AI for studying is the one that helps you learn, not the one that does the work for you. Always follow your school&#x27;s rules and check our guide on how to use AI without cheating. Honesty is what keeps your grades safe and your brain strong.\n\nIn 2025, there are more AI tools for students than ever before. You might feel overwhelmed trying to pick the best AI for studying. Should you use the famous ChatGPT, the smart Claude, or the helpful Gemini? Each of these tools has its own special skills and weaknesses. At Vertech Academy, we want to help you choose the right partner for your learning journey. Picking the wrong tool can lead to confusing answers or even mistakes in your homework. Therefore, it is important to understand what makes each one unique. You can read our full ChatGPT vs Claude vs Gemini for study guide for deep details. This post will give you a simple, honest look at the \"Big Three.\" We will test them for math, writing, and research tasks. By the end of this guide, you will know exactly which app to open for your next project. We also suggest comparing these to AI vs traditional study methods.\n\nClaude Free: Claude has the strictest limits. You can only send a few messages every few hours. This can be frustrating if you are in the middle of a big essay. However, the quality of each message is very high. It is best used for your most important writing tasks, rather than quick questions. Gemini Free: Gemini is often the best \"value.\" It gives you a lot of messages for free and has very fast responses. It is perfect if you need to ask 50 quick questions in an hour. Google wants everyone to use Gemini, so they make it very easy to access. 🟢 · No matter which tool you choose, you must use it the right way. The best AI for studying is the one that helps you learn, not the one that does the work for you. Always follow your school's rules and check our guide on how to use AI without cheating. Honesty is what keeps your grades safe and your brain strong.\n\nCompare ChatGPT, Claude, and Gemini for school. Find the best AI for your studies.\n\nChoosing the best AI for studying depends on your goals for the day. If you need live facts and Google Docs, pick Gemini for studying. If you want a thoughtful writing partner, go with ChatGPT vs Claude and pick Claude. If you need a versatile buddy for math and brainstorming, ChatGPT is the way to go. Each one is like a different tool in your academic toolbox. At Vertech Academy, we want you to be a master of all your tools. Don't be afraid to try each one and see which one \"clicks\" with your brain. Using an AI comparison students can trust helps you stay in control of your learning. Remember, technology is here to support you, but you are the star of the show! Keep being curious, stay honest, and always do your own thinking. Whether you use OpenAI, Anthropic, or Google, make sure you are the one getting smarter. You have the intelligence and the tools to conquer any subject this year.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.vertechacademy.com/blog/best-ai-for-studying",
        "search_provider": "anthropic",
        "age": "December 23, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Why I switched from Claude to Gemini (and cut my AI costs by 60%)",
      "url": "https://annikahelendi.substack.com/p/why-i-switched-from-claude-to-gemini",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "substack.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=substack.com",
        "site_name": "Substack"
      },
      "is_missing": false,
      "text": "The general chat interface works almost identically to Claude. I can ask quick questions, get decent responses, and move on with my day. But there’s one feature I love that Claude doesn’t have: temporary chat.\n\nThe general chat interface works almost identically to Claude. I can ask quick questions, get decent responses, and move on with my day. But there’s one feature I love that Claude doesn’t have: temporary chat. Sometimes I just want to use AI as a better Google search. I don’t need these random queries cluttering my chat history. Temporary chat solves this perfectly (and honestly, I use it constantly now). Gemini also has “Gems” which work like Claude’s projects. I create custom instructions, upload files, connect my Google Drive, and build specific AI assistants. I have one for video scripts, another for my day job’s marketing materials, and a personal coach gem that helps me work through mental blocks. The outputs from Gemini are more robotic than Claude’s. I’ll admit that. But you can fix this by adding writing style instructions in the settings.\n\nHere’s what actually convinced me: in addition to replacing all the Claude’s paid features with a free plan, there is also very solid image generation and video analysis. Gemini created this mindmap from my video notes automatically. The image generation has improved enough that I’m starting to see real use cases for it (even though I’m usually skeptical about AI-generated visuals because they often look fake and hurt trust). But the video analysis is what really matters for me. Gemini 3.0 can now analyze video files frame-by-frame and understand visual context. This is huge. I’ve been running content repurposing automations for years. I use scrapers like Apify to grab video transcripts, then feed those transcripts into AI to create blog posts, newsletters, LinkedIn posts, and carousels. But I’m only using the transcript - not the actual visual content.\n\nFor daily tasks and general chat, Gemini works fine (and it’s free). For content automation, use the API through OpenRouter instead of paying for chat interfaces. And for specific workflows like agent-based research, find tools built for that exact use case. I’m not saying everyone should switch to my exact setup. But I am saying you should audit what you’re paying for and why. Want my full AI automation blueprints, Airtable templates, and that humanizing prompt I keep mentioning? Join AI Marketing Masters: https://aimarketingmasters.com/ See you next week. ... Mark S. Carroll ... Really appreciated this breakdown, Annika. The most valuable part isn’t Gemini vs Claude, it’s how deliberately you’ve unbundled the stack. Chat UI for thinking, APIs for automation, agents for scraping, and a free “good enough” layer anchoring the day-to-day work.\n\nAppreciate the honest breakdown. Most people don't share actual costs like this. I'm still Claude-first but for a specific reason: when AI needs to reason through ambiguous situations (customer objections, complex scheduling, multi-step decisions), Claude just gets it right more often. Gemini outputs feel more robotic when the conversation gets nuanced. That said, your OpenRouter setup for automations is smart. No reason to pay for a chat interface when API access does the job. What's your experience with Gemini on back-and-forth conversations?",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://annikahelendi.substack.com/p/why-i-switched-from-claude-to-gemini",
        "search_provider": "anthropic",
        "age": "December 7, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Gemini vs. Claude: Evaluating AI Performance",
      "url": "https://www.dhiwise.com/post/gemini-vs-claude-which-delivers-the-best-performance",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "dhiwise.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=dhiwise.com",
        "site_name": "DhiWise"
      },
      "is_missing": false,
      "text": "Gemini returned a bullet list, focused more on feature differentiation. Claude vs Gemini here shows a divide: one excels at flexible conversation (Claude AI), the other leans on structure and data analysis (Gemini). The Gemini vs Claude debate has no clear winner for all users. Your ideal AI model depends on your focus: Choose Google Gemini if you rely heavily on Google apps, need real-time data or image generation, or have large documents that benefit from a larger context window. Choose Claude AI for nuanced writing, conversational understanding, and tasks that require interpretation over tool integration. Both excel at content creation, coding, and problem solving. The best approach?\n\nThis blog compares Gemini vs Claude to see which AI model delivers superior output, supports a larger context window, and handles real-time data more effectively. If you’re choosing between Gemini Advanced and Claude Sonnet or evaluating tools for professional use, this guide walks you through performance, features, coding skills, and factual accuracy. You’ll finish knowing which AI tool best fits your writing tasks, coding, data analysis, and content creation goals. Large language models back both Gemini and Claude AI but differ in how they treat user queries and memory. The larger context window in Gemini Advanced allows better continuity in conversations. You can submit entire documents, academic papers, or codebases and get insightful summaries or edits. In contrast, Claude AI handles around 200,000 tokens—enough for most users, but shorter than Google Gemini's token memory.\n\nBoth were high quality, but Claude wins for poetic expression and voice matching in writing tasks. In structured formats like resumes, manuals, or academic writing, Gemini Advanced excels thanks to tight integration with Google Docs and Google apps. Gemini offers image generation and image analysis, while Claude AI supports only analysis. Gemini: Generate flowcharts, illustrations, or create visuals for a report using prompt-based image generation. Claude: Explain visuals, interpret graphs, or conduct image analysis on uploaded media. Key Point: If your AI tool needs to generate images for a blog post, design, or educational content, Gemini provides more features. Claude remains stronger in interpreting and summarizing image data. Gemini Advanced works seamlessly within the Google ecosystem, making it a go-to tool for professionals managing content in Google Docs, Sheets, or Slides.\n\n1. Model Architecture & Context Window: Power Behind the Brain2. Coding, Problem Solving, and Technical Accuracy3. Writing Quality and Creative Tasks4. Image Features: Creation vs Interpretation5. Paid Versions, Custom Tools, and Real-Time Capabilities6. Responsiveness and Understanding User IntentFinal Verdict: Which Is the Right Tool? ... Fueled by curiosity and a passion for learning, I craft insightful blogs on tech, AI, and innovation. When I'm not coding or exploring new ideas, you'll find me enjoying nature walks, painting, or playing with my mischievous cat. ... This blog compares Google Gemini and Claude AI, two leading AI chatbots for various applications. It examines their output quality, context handling, and real-time data processing strengths. Can your AI write a poem, explain complex math, and generate images—all in the same conversation?\n\nGemini returned a bullet list, focused more on feature differentiation. Claude vs Gemini here shows a divide: one excels at flexible conversation (Claude AI), the other leans on structure and data analysis (Gemini). The Gemini vs Claude debate has no clear winner for all users. Your ideal AI model depends on your focus: Choose Google Gemini if you rely heavily on Google apps, need real-time data or image generation, or have large documents that benefit from a larger context window. Choose Claude AI for nuanced writing, conversational understanding, and tasks that require interpretation over tool integration. Both excel at content creation, coding, and problem solving. The best approach?",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.dhiwise.com/post/gemini-vs-claude-which-delivers-the-best-performance",
        "search_provider": "anthropic",
        "age": "May 12, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Who Wrote it Better? A Definitive Guide to Claude vs. ChatGPT vs. Gemini",
      "url": "https://blog.type.ai/post/claude-vs-gpt",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "type.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=type.ai",
        "site_name": "Type AI"
      },
      "is_missing": false,
      "text": "Free, limited access to Gemini gets you &quot;help with writing, planning, learning, and more&quot; and requires a Google account. Using Gemini&#x27;s more advanced models, including Gemini 2.5 Pro, is available as a feature of Google One&#x27;s AI Premium plan.\n\nFree, limited access to Gemini gets you \"help with writing, planning, learning, and more\" and requires a Google account. Using Gemini's more advanced models, including Gemini 2.5 Pro, is available as a feature of Google One's AI Premium plan. Beyond access to Gemini Advanced, you also get 2 TB of storage and \"deeper Gemini integration\" with various Google apps. New subscribers can try the plan free for one month, after which it costs $19.99 per month. Here's a side-by-side comparison of the pricing and features for Claude, ChatGPT, and Gemini. We've also added our own AI writing assistant, which allows you to switch between the latest models of ChatGPT and Claude—for comparison's sake, of course. So, in a situation where it's Claude vs. ChatGPT vs. Gemini, which do you choose? When you're writing in Type.ai, your options are Claude or ChatGPT, and the answer is: it all depends on what you're doing.\n\nCompare Claude, ChatGPT, and Gemini to find the best AI writing tool for your needs. Discover which offers the most value and features for your investment.\n\nFor enhanced features, the Pro plan is available at $20 per month ($18/mo with annual billing), offering additional capabilities for power users. Teams can opt for the Team plan, priced at $30 per user per month ($25/mo with annual billing), facilitating collaborative use. For large-scale deployments, the Enterprise plan offers advanced features and support, with pricing details available upon inquiry. Additionally, developers can access Claude's API with a pay-as-you-go model, featuring usage-based tiers and automatic rate limit increases. Gemini has come a long way since it was first introduced in December 2023. The latest Gemini 2.5, released in March 2025, tops the LMArena leaderboard by a significant margin, indicating a highly capable model with high-quality responses. It ranks #1 in areas like hard prompts, coding, math, and creative writing, making it particularly strong for content creators who need versatile AI assistance.\n\nWhile ChatGPT and Claude are both well-known large language models for generating text, neither should be considered a go-to solution for content creation. Instead, look for tools purpose-built for content, like Type.ai. Tools like this are built on top of ChatGPT and Claude, leveraging their capabilities but in a way more focused on a writer's needs. Google Gemini brings powerful AI integration with a focus on search and data analysis. It’s particularly suited for tasks involving research and summarization. While it’s newer, its features are geared toward professional use cases where data interpretation and precision are key. Its larger context window makes it better suited for multimedia inputs as well. Products like Type.ai can support writing and editing manuscripts as long as 150,000 words while giving you access to multiple state-of-the-art AI models, like the latest GPT and Claude models.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://blog.type.ai/post/claude-vs-gpt",
        "search_provider": "anthropic",
        "age": "January 31, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How Good are Claude, ChatGPT & Gemini at Instructional Design?",
      "url": "https://drphilippahardman.substack.com/p/how-good-are-claude-chatgpt-and-gemini",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "substack.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=substack.com",
        "site_name": "Substack"
      },
      "is_missing": false,
      "text": "Claude 3.5 Sonnet: Applied its theoretical knowledge relatively well. In a password security course, for example, the model structured the course into timed segments, provided clear objectives, and built complexity gradually by guiding learners to create and assess passwords. However, its designs did not reflect the full range of considerations and understanding that were implied by the model’s theoretical grasp of ID. Claude 3 Opus and Haiku: Unsurprisingly, these models produced simpler, more generic lesson structures that were effective for foundational tasks but not sufficiently nuanced for complex, differentiated instruction or adaptive learning paths. Again, its designs did not reflect the full range of considerations and understanding that were implied by the model’s [limited] theoretical grasp of ID. Gemini’s take on learning styles, which are debunked.\n\nThis week, I started work on a research project to explore the effectiveness of Large Language Models (LLMs) like ChatGPT, Claude, and Gemini in instructional design. As research by people like Donald H Taylor and Egle Vinauskaite shows, more instructional designers are using LLMs like ChatGPT, Claude and Gemini to complete learning design tasks than ever before - and the numbers seems to be increasing at a rate of knots. ... These models are increasingly popular tools for learning design tasks like writing objectives, selecting instructional strategies and creating lesson plans. With their ability to to all of these things quickly, general-purpose AI models might seem an ideal source of instructional design support. The question I have is: how well do these generic, all-purpose LLMs handle the nuanced and complex tasks of instructional design? They may be fast, but are AI tools like Claude, ChatGPT, and Gemini actually any good at learning design?\n\nUncritical Use of Outdated Concepts: Generic AI models are trained on large datasets, meaning they reproduce that which is more common rather than that which is optimal. In practice, this means that are at risk of recommending and reproducing outdated & debunked theories, e.g. learning styles. Superficial Theory Application: Without explicit prompting, generic LLMs often fail to apply what they “know” in theory meaningfully in practice. The result is the creation of either generic or impractical designs that require significant human adjustment. While general-purpose AI models like Claude, ChatGPT, and Gemini offer a degree of assistance for instructional design, their limitations underscore the risks of relying on generic tools in a specialised field like instructional design. In industries like coding and medicine, similar risks have led to the emergence of fine-tuned AI copilots, such Cursor for coders and Hippocratic AI for medics.\n\nGemini: Despite an apparent lack of awareness of active and constructivist approaches in theory, Gemini’s practical output was notably active and constructivist. For example, in a photography composition lesson, it included only basic concepts without adapting strategies to different learner needs or experience levels, but - in contrast to the approach it described in theory - the session that it designed was active, hands-on and problem based. So, what does all of this mean for the growing number of instructional designers who use generic LLMs and AI tools in their day to day work? Here are my top three take aways so far: Use Structured Prompts to Guide Generic LLMs: While LLMs can identify some foundational ID strategies, they often need guidance to apply them meaningfully. Provide the model with detailed, structured prompts that specify your instructional goals, desired learner engagement levels, and content format.\n\nClaude 3.5 Sonnet: Applied its theoretical knowledge relatively well. In a password security course, for example, the model structured the course into timed segments, provided clear objectives, and built complexity gradually by guiding learners to create and assess passwords. However, its designs did not reflect the full range of considerations and understanding that were implied by the model’s theoretical grasp of ID. Claude 3 Opus and Haiku: Unsurprisingly, these models produced simpler, more generic lesson structures that were effective for foundational tasks but not sufficiently nuanced for complex, differentiated instruction or adaptive learning paths. Again, its designs did not reflect the full range of considerations and understanding that were implied by the model’s [limited] theoretical grasp of ID. Gemini’s take on learning styles, which are debunked.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://drphilippahardman.substack.com/p/how-good-are-claude-chatgpt-and-gemini",
        "search_provider": "anthropic",
        "age": "November 8, 2024"
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

The search results don't specifically address a "guided learning" feature in Gemini. Let me search more specifically for Gemini's guided learning feature.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-10T00:19:38.857756Z",
  "stop_timestamp": "2026-03-10T00:19:39.065357Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01SijDEXuBFCzqvan6BBtZQ9",
  "name": "web_search",
  "input": {
    "query": "Gemini \"guided learning\" feature 2025"
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
  "tool_use_id": "toolu_01SijDEXuBFCzqvan6BBtZQ9",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Gemini Guided Learning: How Google’s new AI feature works",
      "url": "https://blog.google/products-and-platforms/products/gemini/guided-learning-google-gemini/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "blog.google",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=blog.google",
        "site_name": "Google"
      },
      "is_missing": false,
      "text": "Joel Meares · Contributor, The Keyword · Read AI-generated summary · Gemini&#x27;s new Guided Learning mode acts as an interactive study partner. You can upload course material, debug code, or understand concepts with videos and images.\n\nSep 23, 2025 · · Share · x.com · Facebook · LinkedIn · Mail · Copy link · Guided Learning with Gemini is a new feature from Google that offers people a personalized, interactive and effective way to learn. Joel Meares · Contributor, The Keyword · Read AI-generated summary · Gemini's new Guided Learning mode acts as an interactive study partner. You can upload course material, debug code, or understand concepts with videos and images. Try Guided Learning in the Gemini app to help you learn and deepen your knowledge. Summaries were generated by Google AI. Generative AI is experimental. Share · x.com · Facebook · LinkedIn · Mail · Copy link · Earlier this year, I decided to learn Spanish. A complete beginner, I signed up for an in-person course, diligently did my homework and spent plenty of time with Gemini. When I wanted to know more about reflexive verbs, it gave me a thorough rundown.\n\nGuided Learning with Gemini is a new feature from Google that offers people a personalized, interactive, and effective way to learn.\n\nGuided Learning with Gemini is a new feature from Google that offers people a personalized, interactive and effective way to learn. ... Gemini's new Guided Learning mode acts as an interactive study partner. You can upload course material, debug code, or understand concepts with videos and images. Try Guided Learning in the Gemini app to help you learn and deepen your knowledge. Summaries were generated by Google AI. Generative AI is experimental. ... Earlier this year, I decided to learn Spanish. A complete beginner, I signed up for an in-person course, diligently did my homework and spent plenty of time with Gemini. When I wanted to know more about reflexive verbs, it gave me a thorough rundown. It explained errors in my responses, too, and generated helpful quizzes when prompted. Muy útil. A few weeks ago, however, I tried a new Gemini mode that took my study to the next level.\n\nThe new mode is part of a suite of learning products and initiatives we’re launching as much of the world is now back to school. In Gemini, we’re introducing study guides, flashcards and enhancing quizzes with charts and graphs. In NotebookLM, our recently added features for students, including Flashcards, Quizzes, and new Audio Overviews capabilities offer learners new ways to engage with their materials. We’ve also made Gemini Pro free to students all over the world for a year, starting in a selection of countries; investing $1 billion in U.S. education; and launching a Google AI for Education Accelerator to provide AI and job-ready skills to millions of U.S. university students. “When used responsibly, AI is a powerful tool to unlock creativity, support learning and increase productivity,” says Ben Gomes, Chief Technologist of Learning & Sustainability.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://blog.google/products-and-platforms/products/gemini/guided-learning-google-gemini/",
        "search_provider": "anthropic",
        "age": "September 24, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Gemini Drops — the latest on all things Gemini",
      "url": "https://gemini.google/gemini-drops/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "gemini.google",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=gemini.google",
        "site_name": "Google AI"
      },
      "is_missing": false,
      "text": "Learning · Plus even more for your ultimate study toolkit · Gemini can organize your notes into study guides, fine-tune your writing, help you brainstorm, and more. Learning · No story is left untold with Storybook in Gemini · Turn cherished ...\n\nLearning · Gemini Live your way · Switch between languages, ask Gemini Live to talk in a specific speed or tone, even have it act out things in character. Gemini Live · October 2025 · Your videos in new dimensions of detail · Experience true to life textures, easier camera control, and dialogue with sound effects to create compelling stories in Veo 3.1. Creativity · Gemini 2.5 Flash updates are here · Get step-by-step guidance for complex topics with more organized responses and better image understanding for notes or diagrams. Models · Complex formula work just got simpler · Your LaTeX rendering workflow is now all in one place. Copy formulas into your documents, generate PDFs, and edit directly in Canvas. Learning · Productivity · The wait for what to watch is over · Get personalized movie picks the whole family will enjoy, or explore new topics with video recs from Gemini on Google TV.\n\nAugust 2025 · Guided Learning explains things better · Using proven learning techniques, Gemini can take you through the process of understanding and retaining knowledge so you just get it. Learning · Productivity · Study smarter with quizzes and flash cards in Gemini · Whip up multi-format practice quizzes and rapid-fire flash cards from your notes, course materials, problem sets, and more. Learning · Plus even more for your ultimate study toolkit · Gemini can organize your notes into study guides, fine-tune your writing, help you brainstorm, and more. Learning · No story is left untold with Storybook in Gemini · Turn cherished memories, inside jokes, and complex concepts into a story you can read, listen to, print, and share. Creativity · Your past chats can be helpful context · Gemini can use your past chats to give you more personalized and relevant answers.\n\nShare your camera with Gemini and it can highlight exactly what to focus on. Get the visual guidance you need to get things done, in real time. Coming soon to all Android and iOS devices. ... From planning projects and meals to parties and more, you can now share a Gem with your AI expertise to make collaboration easy. ... Gemini is coming to Chrome on desktop. So you can get a quick summary, clarify concepts, and find answers using the context of your open tabs. ... No coding experience? No problem. Create an app using Canvas in the Gemini app, then just select and ask for the changes instead of needing to go into the code for updates. ... Using proven learning techniques, Gemini can take you through the process of understanding and retaining knowledge so you just get it. ... Whip up multi-format practice quizzes and rapid-fire flash cards from your notes, course materials, problem sets, and more.\n\nPractice for the (SAT/JEE) in Gemini with full-length tests, get feedback on your performance, and learn tips to help you focus your studying. ... Research products and find complementary items with results based on your open tabs. ... Get answers and page summaries using the context of your current tab with Gemini in Chrome on your iPhone. ... When your day moves fast, Gemini 3 Flash moves faster. Get next-generation intelligence, so you can learn, build and plan anything in a flash. ... Circle, draw or type right onto an image to show Gemini what you’re thinking. ... Gemini now gives you better local results from Google Maps with photos, ratings, and real-world info. ... Now you can bring notebooks into Gemini for deeper context and more grounded responses. ... Understand complex ideas with engaging, interactive visuals from Gemini. ... We’ve expanded support to more languages globally.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://gemini.google/gemini-drops/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Google Workspace Updates: New study tools in the Gemini app to help you learn more effectively",
      "url": "https://workspaceupdates.googleblog.com/2025/08/gemini-study-tools.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "googleblog.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=googleblog.com",
        "site_name": "Google Workspace"
      },
      "is_missing": false,
      "text": "Now you can use the Gemini app ... you an answer, Guided Learning walks you through subjects step-by-step, breaking down complex information and providing interactive help along the way....\n\nEnd users: Visit the Help Center to learn more about creating quizzes, flashcards, and study guides and using learning tools in the Gemini app. For YouTube videos to be included in responses from Gemini, end users must enable YouTube as a connected app. Learn more about controlling connected app settings in the Gemini app. Gradual rollout for all features (up to 15 days for feature visibility) starting on July 31, 2025. ... *As of January 15, 2025, we’re no longer offering the Gemini Business and Gemini Enterprise add-ons for sale. Please refer to this announcement for more details. ... In the Google Cloud Community, discuss the latest features with Googlers and other Google Workspace admins like you. Learn tips and tricks that will make your work and life easier. Be the first to know what's happening with Google Workspace. On the “What’s new in Google Workspace?” Help Center page, learn about new products and features launching in Google Workspace, including smaller changes that haven\n\nWe’re introducing several new features in the Gemini app designed to create a more dynamic and effective learning experience. These tools are built to help you understand complex topics more deeply, prepare for exams more efficiently, and engage with educational content in new ways. Now you can use the Gemini app to: Build a deeper understanding with Guided Learning: Instead of giving you an answer, Guided Learning walks you through subjects step-by-step, breaking down complex information and providing interactive help along the way. It’s perfect for working through the process of understanding, retaining and mastering a new topic or skill. Prepare for exams with helpful study tools: We recently announced you can create quizzes in Canvas in the Gemini app. Now, you can customize the number of questions as well as the question type - for example, multiple choice or short answer.\n\nGuided Learning in Gemini breaks down complex topics and provides step-by-step, interactive help · These features are available in all languages and regions supported by the Gemini app. Guided Learning and integrated visuals and YouTube videos are available to Gemini app users of all ages. Quizzes, flashcards and study guides are available to users 18+ at this time. Some features are only available on the Gemini web app (gemini.google.com) and mobile web. At this time, Google Workspace business and education users cannot share content created in Canvas, which includes quizzes, flashcards and study guides. However, if a user with a personal account shares a link to content created in Canvas, Workspace users will be able to open it, but they cannot take additional actions, such as asking Gemini to refine the content. Admins: These features are available in the Gemini app by default.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://workspaceupdates.googleblog.com/2025/08/gemini-study-tools.html",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Guided Learning in Gemini: From answers to understanding",
      "url": "https://blog.google/products-and-platforms/products/education/guided-learning/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "blog.google",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=blog.google",
        "site_name": "Google"
      },
      "is_missing": false,
      "text": "Guided Learning takes you step-by-step to help you build a deep understanding instead of just getting quick answers · Guided Learning provides rich, multimodal responses — including images, diagrams, videos and interactive quizzes — that ...\n\nGuided Learning in Gemini: From answers to understanding · Share · x.com · Facebook · LinkedIn · Mail · Copy link · Global (English) Africa (English) Australia (English) Brasil (Português) Canada (English) Canada (Français) Česko (Čeština) Deutschland (Deutsch) España (Español) France (Français) India (English) Indonesia (Bahasa Indonesia) Italia (Italiano) 日本 (日本語) 대한민국 (한국어) Latinoamérica (Español) الشرق الأوسط وشمال أفريقيا (اللغة العربية) MENA (English) Nederlands (Nederland) New Zealand (English) Polska (Polski) Portugal (Português) Sverige (Svenska) ประเทศไทย (ไทย) Türkiye (Türkçe) 台灣 (中文) [\"What's new about the Pixel 10a?\", \"What can Gemini 3.1 do?\", \"How can I learn new AI skills?\"] Subscribe · Aug 06, 2025 · · Share · x.com ·\n\nGoogle is launching Guided Learning in Gemini to help you learn new things. This new experience acts as a personal learning companion, using questions and rich responses to help you build a deep understanding of subjects. Try Guided Learning in the Gemini app and share feedback to improve it. Summaries were generated by Google AI. Generative AI is experimental. \"Guided Learning in Gemini\" introduces a new AI experience for deeper understanding, not just quick answers. Guided Learning uses questions and step-by-step breakdowns to help you actively learn and build skills. Expect images, videos, and quizzes in Guided Learning, focusing on the learning process itself. Built with experts, Guided Learning offers a safe space to explore topics at your own pace. Educators can easily share Guided Learning in Google Classroom to encourage critical thinking.\n\nGoogle made a new tool in Gemini called Guided Learning. It helps people learn by asking questions and giving step-by-step help. It's like having a study buddy that uses pictures and quizzes to teach you. Google worked with teachers and students to make it really useful. Summaries were generated by Google AI. Generative AI is experimental. ... Every day, people around the world come to Google to learn something new. Whether it’s watching a YouTube video on graphic design or asking Gemini to help create a custom study guide, our products have always aimed to help. We believe technology can be a powerful tool for learning, but we also know that true understanding goes deeper than a single answer. Insights from learning science show that people learn best when they actively engage with information. This principle is at the heart of our work. In close partnership with educators, students, and pedagogical experts, we developed LearnLM, a family of models fine-tuned for learning and grounded\n\nToday, with those capabilities infused in Gemini, we’re introducing Guided Learning—a new experience designed to act as a personal learning companion. Guided Learning encourages participation through probing and open-ended questions that spark a discussion and provide an opportunity to dive deeper into a subject. The aim is to help you build a deep understanding instead of just getting answers. Guided Learning breaks down problems step-by-step and adapts explanations to your needs — all to help you build knowledge and skills. Guided Learning takes you step-by-step to help you build a deep understanding instead of just getting quick answers · Guided Learning provides rich, multimodal responses — including images, diagrams, videos and interactive quizzes — that can help you build and test your knowledge by focusing on the process, not just the answer.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://blog.google/products-and-platforms/products/education/guided-learning/",
        "search_provider": "anthropic",
        "age": "August 8, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "New Gemini app tools to help students learn, understand and study even better",
      "url": "https://blog.google/products-and-platforms/products/gemini/new-gemini-tools-students-august-2025/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "blog.google",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=blog.google",
        "site_name": "Google"
      },
      "is_missing": false,
      "text": "Here’s a look at what’s new: To help you grasp complex topics, Gemini now offers a new mode called Guided Learning. It helps you build a deep understanding instead of just getting quick answers by acting like your personal AI learning companion.\n\nAug 06, 2025 · · Share · x.com · Facebook · LinkedIn · Mail · Copy link · Level up your learning with new tools in the Gemini app. Jennifer Shen · Director, Product Management, Gemini App · Share · x.com · Facebook · LinkedIn · Mail · Copy link · Today, we announced that we’re offering students in the U.S. as well as Japan, Indonesia, Korea and Brazil a free one-year subscription to Google’s AI Pro plan to help make the most of AI’s power for their studies. Sign-up for the free AI Pro Plan offer. We’re also rolling out a new suite of learning tools in Gemini for everyone. The features are designed to foster critical thinking, deepen understanding and make studying more efficient. Here’s a look at what’s new: To help you grasp complex topics, Gemini now offers a new mode called Guided Learning. It helps you build a deep understanding instead of just getting quick answers by acting like your personal AI learning companion.\n\nWe’re also rolling out a new suite of learning tools in Gemini for everyone. The features are designed to foster critical thinking, deepen understanding and make studying more efficient. Here’s a look at what’s new: To help you grasp complex topics, Gemini now offers a new mode called Guided Learning. It helps you build a deep understanding instead of just getting quick answers by acting like your personal AI learning companion. Guided Learning breaks down problems step-by-step, and adapts explanations to your needs to help you uncover the \"how\" and \"why\" behind concepts. From creating study guides with your course files to explaining tough concepts with videos and visuals, Gemini works with you to help you truly learn. We're making the learning experience in Gemini richer and more engaging by automatically integrating high-quality images, diagrams and YouTube videos directly into responses.\n\nGet ready for your next test with powerful new study tools. You can ask Gemini to instantly create flashcards and study guides based on your quiz results or other class materials, providing a simple and effective way to review key concepts and reinforce your learning. In addition to these new features, the free Google AI Pro upgrade includes a full suite of our most advanced AI tools, like: Expanded access to Gemini 2.5 Pro: Ask any question and upload images. Our most capable model provides quick homework and writing help. Deep Research: Save time with custom research reports, providing in-depth information from hundreds of sites across the web with higher access to Deep Research on 2.5 Pro. NotebookLM: A one-of-a-kind thinking companion that helps you organize your thoughts and take learning on the go, with 5x more audio and video overviews. Veo 3: Transform text or a photo into an eight-second-video with sound using Veo 3.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://blog.google/products-and-platforms/products/gemini/new-gemini-tools-students-august-2025/",
        "search_provider": "anthropic",
        "age": "January 7, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "‎Gemini Apps’ release updates & improvements",
      "url": "https://gemini.google/release-notes/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "gemini.google",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=gemini.google",
        "site_name": "Google AI"
      },
      "is_missing": false,
      "text": "What: Google is offering students aged 18 and older in the US, Japan, Indonesia, Korea, and Brazil a free one-year upgrade to Google AI Pro, available until October 6, 2025. This plan includes unlimited chat, image uploads and quiz generations ...\n\nExplore the latest updates from Gemini Apps - including improvements in generative AI capabilities, expanded access, and more.\n\nWhat: Gemini now offers Guided Learning, a new mode designed to help you build a deeper understanding of whatever you’re trying to learn or do. Instead of providing a single answer, this feature guides you through subjects step-by-step, breaking down concepts and providing interactive help along the way. It's ideal for understanding complex information or developing a new skill. You can activate this tool using the ‘Guided Learning’ chip on desktop or the ‘Learn’ chip on mobile. This experience is open to all users. Why: Learning isn't about finding the answer quickly; it's about grasping the underlying concepts. Our mission is to provide tools that foster genuine comprehension and critical thinking. Guided Learning moves beyond simple Q&A to create a more effective learning environment, empowering you to build lasting knowledge and the confidence to tackle any subject.\n\nWhy: Effective studying is not one-size-fits-all. We want to provide a variety of ways for learners to master the topics they are studying, whether that is sitting down for a long, challenging quiz, quickly reviewing concepts with flashcards, or taking a comprehensive study guide with them on the go. What: Gemini now provides a richer learning experience by automatically integrating high-quality images, diagrams, and YouTube videos directly into its responses. When you ask about complex topics like photosynthesis or the parts of a cell, Gemini will seamlessly weave in visuals and YouTube videos alongside the text to help you understand the information more easily. Integration of high quality images, diagrams and YouTube videos is available to all users. Why: We believe seeing a concept is key to truly understanding it. Gemini now uses visuals to make complex information more digestible and memorable.\n\nWhy: Google is committed to making AI helpful for everyone, in the classroom and beyond. We want to both prepare teens with the skills and tools they need to thrive in a future where GenAI exists and help them learn how this technology can be used to unlock creativity and facilitate learning. Gemini can provide guided support to help students learn more confidently with in-the-moment assistance, practice materials and real-time feedback and ideas. What: We’ve updated our 1.5 Pro model in Gemini Advanced with data quality and various performance improvements. Why: We remain committed to continually improving our models to provide Gemini Advanced users with a better experience. Upgrade to Gemini Advanced · What: Extensions are the tools that connect Gemini to other apps and services you rely on, letting you pull information and complete tasks directly from Gemini.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://gemini.google/release-notes/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Control Alt Achieve: Gemini's Guided Learning - Moving from Answers to Understanding",
      "url": "https://www.controlaltachieve.com/2025/08/guided-learning.html",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "controlaltachieve.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=controlaltachieve.com",
        "site_name": "Control Alt Achieve"
      },
      "is_missing": false,
      "text": "On the other hand, if we use Guided Learning, Gemini will ask us what we want to focus on. Then Gemini will review some basic information, but always inquire about our understanding of the content or prediction for what comes next.\n\nThere are lots of ways that AI can be helpful to students, such as personalized learning, feedback, productivity support, and more. The problem is, sometimes it can be a little too helpful. A student might ask for assistance with a homework problem or an essay and the AI chatbot will simply do the problem or write the report. We want AI to support learners in their work, not do their work for them. Thankfully Google has a helpful feature built right into Gemini that does just that. It's called \"Guided Learning\". With Guided Learning, instead of just giving the student a quick answer, Gemini will explain some of the basic information, but will then ask the student questions to bring them into a discussion and encourage them to think critically. See below for a short demonstration video and written directions on how you and your students can use Guided Learning.\n\nLet's put this question into Gemini twice… once without Guided Learning and a second time with Guided Learning. When I don't use Guided Learning, Gemini simply works out the problem and gives me the answer. Now sometimes that is exactly what we want. If we have a question and we just need the answer, it is good to know that Gemini will give it to us. However if we are trying to learn the content and increase our critical thinking skills, then this isn't the right option. Instead let's try the prompt again, but this time we will click the \"Guided Learning\" option. Rather than just solve the entire problem, Gemini is reviewing some of the basics and then asking the learner to explain the different parts of the formula. At this point we can go back and forth with Gemini as we work through the problem step by step. Gemini can assist us if we get stuck, but the focus is always on involving the learner in the process and getting them to explain their understanding.\n\nAgain if we don't select the Guided Learning option, Gemini won't just help get the essay started, but will actually write the entire thing! On the other hand, if we use Guided Learning, Gemini will ask us what we want to focus on. Then Gemini will review some basic information, but always inquire about our understanding of the content or prediction for what comes next. When we are finally ready to write the essay, Gemini will not do the writing for us, but instead will provide leading questions and feedback while we do the writing ourselves. ... Those are just two examples, but Guided Learning can be used in many situations. For test prep we could say \"I'm a freshman preparing for an exam in my intro to Biology class. Can you help me learn about enzymes?\" To learn about a topic before writing a paper we could type \"How do bees support our food systems?\"\n\nIn each case, rather than just giving us the answer, Gemini will help us think and question and work through the learning and creation process. ... The learner involvement supported by Guided Learning is critical for AI to make a positive impact on student learning. There is a fascinating study that was done by MIT recently that shows the negatives of letting AI do all the work and thinking for us. In such cases students have less understanding of the content, and less ownership of the product, and the product is of a lower quality. But if students wrestle with the content, and put in the work, and then turn to AI to help challenge them, and expand their thinking, and provide feedback, then the students do learn more, and do feel more ownership of their product, and the product is of a higher quality. And the same is true for us as educators. Here is a link to that MIT study and I encourage you to check it out: https://www.media.mit.edu/publications/your-brain-on-chatgpt/ For now thoug",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.controlaltachieve.com/2025/08/guided-learning.html",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Gemini’s Guided Learning Mode From Google AI: What Educators Need To Know | Tech & Learning",
      "url": "https://www.techlearning.com/how-to/geminis-guided-learning-mode-from-google-ai-what-educators-need-to-know",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "techlearning.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=techlearning.com",
        "site_name": "Tech & Learning"
      },
      "is_missing": false,
      "text": "By Erik Ofgang published 8 September 2025 · Gemini’s new learning mode is built on educational science, and that helps set it apart from some of the competition in our tests. When you purchase through links on our site, we may earn an affiliate ...\n\nBy Erik Ofgang published 8 September 2025 · Gemini’s new learning mode is built on educational science, and that helps set it apart from some of the competition in our tests. When you purchase through links on our site, we may earn an affiliate commission. Here’s how it works. (Image credit: Google) Share · Copy link · Facebook · X · Linkedin · Flipboard · Email · Share this article · Join the conversation · Follow us · Add us as a preferred source on Google · Newsletter · Get the Tech & Learning Newsletter · Tools and ideas to transform education. Sign up below. By submitting your information you agree to the Terms & Conditions and Privacy Policy and are aged 16 or over. You are now subscribed · Your newsletter sign-up was successful · An account already exists for this email address, please log in. Subscribe to our newsletter · Gemini’s guided learning mode is a new feature of Google’s flagship AI tool designed to facilitate learning the way an educator or tutor might.\n\nAwards Tech & Learning Announces Winners of the Best of 2025 Awards · Gamification Best Sites & Apps for K-12 Education Games · Accessibility Becoming More Digitally Accessible: Practical Steps Toward WCAG-Aligned Design · AI Auto Browse: What Teachers Should Know About Google’s New AI Agent · AI AI-Generated Pink Slime Is On The Rise. Here’s How To Avoid It ... Apps Common Sense Education Will Pause Edtech Reviews Beginning February 2026: What It Means for Schools and Where to Look Next ... Gemini’s new learning mode is built on educational science, and that helps set it apart from some of the competition in our tests. When you purchase through links on our site, we may earn an affiliate commission. Here’s how it works. ... Tools and ideas to transform education. Sign up below. By submitting your information you agree to the Terms & Conditions and Privacy Policy and are aged 16 or over.\n\nGemini’s guided learning mode is a new feature of Google’s flagship AI tool designed to facilitate learning the way an educator or tutor might. Guided learning is integrated into Gemini and builds on LearnLM--a family of AI models that were specifically designed for education and based upon learning science principles. ... guided learning in Gemini in August, the latest chapter in the competition to bring an effective educational AI chatbot to the masses. Shortly before Google announced this feature, OpenAI released · Study Mode and a few months before that, Anthropic announced · Claude for Education. I’m a big fan of this development in the evolution of AI and have written about my admiration for · ChatGPT’s study mode, and my even greater admiration for LearnLM. Google claims that what sets Gemini learning mode apart is that it is integrated with LearnLM, which has been built from the ground up with teaching in mind rather than prompted later to support teaching.\n\nGuided learning is a new mode in Gemini that users of the AI can select. In learning mode, Gemini won’t just give you answers; instead, it will help you learn using the Socratic method and by offering step-by-step guidance and suggestions. It does this through actions such as asking you questions to make sure you learned a concept and to encourage further thinking. It will also share curated recommended videos on the topic you are discussing. The model incorporates LearnLM, which was a series of foundational AI models designed with teaching in mind and built by a cross-disciplinary team of AI experts, neuroscientists, and cognitive scientists—who also worked with students and took their feedback on the model into account. Google’s goal in doing this was to create an AI tutor that worked in strict accordance with teaching science best practices.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.techlearning.com/how-to/geminis-guided-learning-mode-from-google-ai-what-educators-need-to-know",
        "search_provider": "anthropic",
        "age": "September 8, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Google Gemini's Guided Learning feature makes AI actually check if you understand — here's how it works",
      "url": "https://www.tomsguide.com/ai/google-gemini/google-geminis-guided-learning-feature-makes-ai-actually-check-if-you-understand-heres-how-it-works",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "tomsguide.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=tomsguide.com",
        "site_name": "Tom's Guide"
      },
      "is_missing": false,
      "text": "AI People are sleeping on Gemini’s ... By Kaycee Hill published 29 September 2025 · Gemini&#x27;s Guided Learning feature makes AI-teaching interactive · When you purchase through links on our site, we may earn an affiliate ...\n\nAI People are sleeping on Gemini’s Deep Research feature — here’s why it’s actually a game changer · AI Google Gemini is basically running my side hustle for me — here’s how · How To · By Kaycee Hill published 29 September 2025 · Gemini's Guided Learning feature makes AI-teaching interactive · When you purchase through links on our site, we may earn an affiliate commission. Here’s how it works. (Image credit: Shutterstock) Copy link · Facebook · X · Reddit · Email · Share this article · 0 · Join the conversation · Follow us · Add us as a preferred source on Google · Newsletter · Get the Tom's Guide Newsletter · Here at Tom’s Guide our expert editors are committed to bringing you the best news, reviews and guides to help you stay informed and ahead of the curve! By submitting your information you agree to the Terms & Conditions and Privacy Policy and are aged 16 or over.\n\nGet full access to premium articles, exclusive features and a growing list of member rewards. Explore · An account already exists for this email address, please log in. ... Google Gemini's Guided Learning changes passive AI interactions into active learning sessions. Rather than simply receiving information dumps, this feature creates a back-and-forth conversation where Gemini teaches you step-by-step and checks your understanding along the way. The tool works like having a digital tutor. It breaks down complex topics into manageable chunks, asks questions to ensure comprehension, and adapts explanations based on your responses. This helps you retain information better than traditional AI Q&A sessions. While the feature can occasionally lose track of conversations or misinterpret responses, it generally provides a more engaging way to learn new subjects.\n\nHere's how to use Guided Learning. ... Google Gemini just pulled further ahead of ChatGPT — here’s what it can now do with your Gmail and Photos · These underrated Gemini 3 features make it surprisingly useful — even if you’re new to AI · Gemini 3 is packed with features — but these are the 3 you need to know about · Open the Gemini app or website and click Tools in the chatbox to access the available feature options. Next, look for the Guided Learning option and select it to activate the interactive tutoring mode. Once activated, ask Gemini to teach you about any topic using natural language. For example, type \"I want to learn about machine learning\" or \"Teach me about photosynthesis\" to begin the guided session. Gemini will present you with multiple starting points for your chosen topic. This allows you to select which aspect interests you most or matches your current knowledge level.\n\nContinue the back-and-forth dialogue until you've covered the entire topic Gemini has outlined for your learning session. The AI will guide you through each step logically before moving to the next concept. If you get stuck or if Gemini's explanations don't make sense, ask for clarification. The feature works best when you actively engage and ask follow-up questions about confusing points. If you notice the conversation getting off track, politely redirect Gemini back to the original topic by referencing what you were previously learning about. This helps maintain focus throughout the session. Follow Tom's Guide on Google News and add us as a preferred source to get our up-to-date news, analysis, and reviews in your feeds. Make sure to click the Follow button! I used Google's Nano Banana to try a bunch of different hairstyles · I just put Gemini's Veo 3 AI video generator to the test ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.tomsguide.com/ai/google-gemini/google-geminis-guided-learning-feature-makes-ai-actually-check-if-you-understand-heres-how-it-works",
        "search_provider": "anthropic",
        "age": "September 29, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Google Launches 'Guided Learning' in Gemini to Compete ...",
      "url": "https://mlq.ai/news/google-launches-guided-learning-in-gemini-to-compete-with-chatgpts-study-mode/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mlq.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mlq.ai",
        "site_name": "MLQ"
      },
      "is_missing": false,
      "text": "August 7, 2025 at 2:15 PM • by MLQ Editorial · Google has launched &#x27;Guided Learning&#x27; mode within its Gemini AI platform, offering step-by-step problem breakdowns, interactive quizzes, images, diagrams, and videos. The feature aims to move beyond direct answers, supporting deeper understanding ...\n\nAugust 7, 2025 at 2:15 PM • by MLQ Editorial · Google has launched 'Guided Learning' mode within its Gemini AI platform, offering step-by-step problem breakdowns, interactive quizzes, images, diagrams, and videos. The feature aims to move beyond direct answers, supporting deeper understanding and critical thinking. A free one-year AI Pro subscription will be available for students in several major markets. The release follows OpenAI’s similar launch of Study Mode for ChatGPT, highlighting increased competition in AI-powered education tools. The Gemini update also expands access to Gemini 2.5 Pro for students and integrates additional study aids. Share Share Share Copy Link · Source Document · Google has launched a new 'Guided Learning' mode in its Gemini AI platform, providing step-by-step support and interactive content aimed at helping users build deeper understanding of subjects.\n\nGoogle has launched 'Guided Learning' mode within its Gemini AI platform, offering step-by-step problem breakdowns, interactive quizzes, images, diagrams, and videos. The feature aims to move beyond direct answers, supporting deeper understanding and critical thinking. A free one-year AI Pro subscription will be available for students in several major markets. The release follows OpenAI’s similar launch of Study Mode for ChatGPT, highlighting increased competition in AI-powered education tools. The Gemini update also expands access to Gemini 2.5 Pro for students and integrates additional study aids. ... Google has launched a new 'Guided Learning' mode in its Gemini AI platform, providing step-by-step support and interactive content aimed at helping users build deeper understanding of subjects. The initiative addresses growing demand for educational AI tools and steps up competition with rival platforms such as ChatGPT.\n\nThe platform adapts explanations to users’ needs, aiming to support not just rote answer delivery but genuine understanding. The mode encourages users to uncover the 'why' and 'how' behind concepts, using multimodal support and Socratic questioning techniques. Gemini can also generate flashcards and study guides based on quiz results or class assignments.[1][3] As part of the launch, Google is providing a free one-year AI Pro subscription to students in several major markets. This includes expanded access to Gemini 2.5 Pro, Google’s advanced AI model focused on learning applications. Gemini’s study tools integrate visual resources and YouTube content, and users can access these features directly through Google Classroom, aiming to support broader classroom and self-guided learning experiences.[1][4] Google’s move comes days after OpenAI introduced Study Mode for ChatGPT, which also focuses on interactive learning over simple answer delivery.\n\nThe introduction of Guided Learning could reshape how educational AI is used in classrooms and by individual students. With both Google and OpenAI investing in features that promote critical thinking and engagement, experts anticipate accelerated development of personalized, responsible learning tools. Edtech companies may need to adapt business models as mainstream players offer powerful AI tools to students at no cost, potentially increasing competition and raising expectations for educational outcomes. ... Alphabet Inc. provides various products and platforms in the United States, Europe, the Middle East, Africa, the Asia-Pacific, Canada, and Latin Amer… ... deccanchronicle.com indiatoday.in workspaceupdates.googleblog.com aieducation.substack.com opentools.ai youtube.com deccanchronicle.com · Written with AI assistance, verified and edited by our team.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://mlq.ai/news/google-launches-guided-learning-in-gemini-to-compete-with-chatgpts-study-mode/",
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

Now I have a good picture. Gemini has a dedicated "Guided Learning" mode. Claude doesn't have an equivalent dedicated mode, but there was a mention of "Claude for Education" in one of the search results. Let me check what that is.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-10T00:19:43.168181Z",
  "stop_timestamp": "2026-03-10T00:19:43.431612Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01CxLxS5E2NF75WXz681rh6s",
  "name": "web_search",
  "input": {
    "query": "Claude for Education Anthropic features 2025"
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
  "tool_use_id": "toolu_01CxLxS5E2NF75WXz681rh6s",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Introducing Claude for education",
      "url": "https://www.anthropic.com/news/introducing-claude-for-education",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "anthropic.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
        "site_name": "Anthropic"
      },
      "is_missing": false,
      "text": "Northeastern University is collaborating as Anthropic&#x27;s first university design partner. This trail-blazing initiative aims to transform teaching, research and business practices across Northeastern’s global university system. The partnership provides 50,000 students, faculty, and staff across 13 global campuses with seamless access to Claude. We’re working with Northeastern University to build best practices for AI integration in higher education, new AI-powered education tools, and frameworks for responsible AI adoption in educational settings. Northeastern was the first university in the U.S. to develop an entire academic plan — Northeastern 2025 — focused on AI and its implications for the future of learning. President Joseph E. Aoun, a thought leader in AI and higher education, authored “Robot-Proof,” the definitive book on the future of learning in an AI-driven world.\n\nClaude for Education introduces our new Learning mode, a feature that works within Projects (saved conversations where students can organize their work with Claude around specific assignments or topics). In Learning mode, Claude helps students develop their independent thinking by: Guiding rather than answering: Asking \"How would you approach this problem?\" instead of providing immediate solutions · Using Socratic questioning: Prompting with \"What evidence supports your conclusion?\" to deepen understanding · Emphasizing core concepts: Highlighting fundamental principles behind specific problems · Providing useful templates: Offering structured formats for research papers, study guides, and outlines · Today, we are also introducing two new student programs designed to nurture and empower our growing Claude student community: Claude Campus Ambassadors: an opportunity for students to work directly with the Anthropic team to launch educational initiatives on their campus ·\n\nToday we're launching Claude for Education, a specialized version of Claude tailored for higher education institutions. This initiative equips universities to develop and implement AI-enabled approaches across teaching, learning, and administration—ensuring educators and students play a key role in actively shaping AI's role in society. As part of announcing Claude for Education, we're introducing: Learning mode: A new Claude experience that guides students' reasoning process rather than providing answers, helping develop critical thinking skills · University-wide Claude availability: Full campus access agreements with Northeastern University, London School of Economics and Political Science (LSE), and Champlain College, making Claude available to all students · Academic partnerships: Joining Internet2 and working with Instructure to embed AI into teaching & learning with Canvas LMS ·\n\nA world-leading university, specializing in the social sciences, LSE is sharing Claude across their student body. By partnering with Anthropic, LSE is ensuring equity of access for their students by equipping them with both the tools and skills they need to succeed in an AI-transformed world, and exploring how to responsibly deploy AI in educational contexts to help the sector and humanity. “Since our founding, LSE has been at the forefront of understanding social change and seeking solutions to real world challenges,” said President and Vice Chancellor Larry Kramer. \"This new partnership is part of that mission. As social scientists, we are in a unique position to understand and shape how AI can positively transform education and society. Champlain College, a leader in career-focused learning, is adopting Claude campus-wide so students develop the AI skills they will need to thrive in the workplace.\n\nBy integrating Claude across their on-campus and online programs, Champlain College will explore AI's implications for workforce development, including the human skills that set graduates apart in a technology-driven world. “AI is changing what it means to be Ready for Work and, as a future-focused college, Champlain is giving students opportunities to use AI so they can hit the ground running when they graduate,” says Champlain College president Alex Hernandez. “The Anthropic collaboration is fueling a new wave of innovations at Champlain College, giving us an opportunity to learn lessons that can benefit all higher education.” · We are also building partnerships with leading organizations to safely and reliably integrate Claude within higher education institutions' existing tools and workflows to help facilitate the use of trusted AI across academia.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.anthropic.com/news/introducing-claude-for-education",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Advancing Claude for Education",
      "url": "https://www.anthropic.com/news/advancing-claude-for-education",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "anthropic.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
        "site_name": "Anthropic"
      },
      "is_missing": false,
      "text": "To make Claude a more powerful study companion, we’re building toward a future where students can reference readings, lecture recordings, visualizations, and textbook content directly within their conversations. Today, we’re sharing a first look at integrations with popular educational ...\n\nJul 9, 2025 · Today, we’re sharing a first look at upcoming integrations with Canvas, Panopto, and Wiley that bring Claude to Canvas and rich educational context to student conversations in Claude for Education. Additionally, we’ve expanded our student ambassador and builder programs, launched our first free AI Fluency course, and welcomed several new institutions—including the University of San Francisco School of Law and Northumbria University—further advancing responsible AI adoption in higher education. To make Claude a more powerful study companion, we’re building toward a future where students can reference readings, lecture recordings, visualizations, and textbook content directly within their conversations. Today, we’re sharing a first look at integrations with popular educational tools and resources rolling out over the next few weeks.\n\nToday, we’re sharing a first look at upcoming integrations with Canvas, Panopto, and Wiley that bring Claude to Canvas and rich educational context to student conversations in Claude for Education. Additionally, we’ve expanded our student ambassador and builder programs, launched our first free AI Fluency course, and welcomed several new institutions—including the University of San Francisco School of Law and Northumbria University—further advancing responsible AI adoption in higher education. To make Claude a more powerful study companion, we’re building toward a future where students can reference readings, lecture recordings, visualizations, and textbook content directly within their conversations. Today, we’re sharing a first look at integrations with popular educational tools and resources rolling out over the next few weeks. Students and educators will be able to connect Wiley and Panopto to Claude using pre-built MCP servers.\n\nAdditionally, Claude now supports Canvas LTI (Learning Tools Interoperability), allowing students to use Claude directly within their Canvas courses without switching between platforms. As always, student privacy protections remain our highest priority. Conversations are private by default and are excluded from AI training by default as well. In furtherance of academic freedom and intellectual exploration, we also require formal approval for institutional data requests and have limited self-serve data exports by default. We partner with forward-thinking institutions that want to balance bringing AI to higher education with responsible practices as the technology evolves. The University of San Francisco School of Law, for example, is integrating AI-enabled learning into its curriculum to improve student engagement and outcomes. Dean Johanna Kalb adds, “We’re excited to introduce students to the practical use of LLMs in litigation.\n\nNorthumbria University recognizes that today's digital-native students expect modern, technology-enhanced education. “The availability of secure and ethical AI tools is a significant consideration for our applicants, and our investment in Claude for Education will position Northumbria as a forward-thinking leader in ethical AI innovation,” shares Graham Wynn, Vice-Chancellor for Education at Northumbria University. “Empowering students and staff, providing cutting-edge learning opportunities, driving social mobility, and powering an inclusive economy are at the heart of everything we do. We know how important it is to eliminate digital poverty and provide equitable access to the most powerful AI tools, so our students and graduates are AI literate with the skills they need for the workplaces of the future.” · Building on the enthusiasm and momentum from our first cohort of student ambassadors, we’ll be expanding the student ambassador program tenfold over the coming weeks—welcoming man",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.anthropic.com/news/advancing-claude-for-education",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Pitt is teaming up with Anthropic and AWS to create an AI-enabled Campus of the Future | University of Pittsburgh",
      "url": "https://www.pittwire.pitt.edu/features-articles/2025/10/22/claude-for-education-aws-anthropic-partnership",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "pitt.edu",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=pitt.edu",
        "site_name": "Pittwire"
      },
      "is_missing": false,
      "text": "Institution-wide access to Claude ... an advanced AI assistant developed by Anthropic, distinguished by its approach to learning and enterprise applications....\n\nThrough this partnership, Pitt becomes the first university to secure an institution-wide agreement for the state-of-the-art AI model Claude for Education integrated with AWS, which will be deployed across its Pittsburgh and regional campuses. By utilizing the secure and robust cloud infrastructure of AWS and its Amazon Bedrock’s services, this initiative offers the tools and potential to transform how students learn, how faculty innovate and how the University operates, driven by the creativity and application of its users. “By equipping our community with cutting-edge tools from Anthropic and AWS, we amplify how the University functions, how we support faculty and how we ensure the best possible student experience in the classroom and beyond,” said Chancellor Joan Gabel. “This collaboration lays the groundwork for a new era of innovation in learning, teaching, research and administration.” · A 2025 EDUCAUSE AI Landscape Study highlights the challenges universities face in adopting AI\n\nThe University is the first to launch institution-wide Claude for Education integrated with Amazon Web Services, empowering a new era of learning and innovation across Pitt’s five campuses.\n\nInstitution-wide access to Claude for Education, integrated into learning platforms, research tools and administrative systems · Collaborating with Anthropic, AWS and Pitt’s Artificial Intelligence Scholar-Teacher Alliance to develop responsible AI use frameworks and promote AI literacy · Developing a workforce readiness program through partnerships with local agencies and technical training from Anthropic, AWS and Pittsburgh industries · Integrating Amazon Bedrock into PittGPT, accessing foundational models like Anthropic’s Claude Opus 4.1 and Sonnet 4.5 to build custom Al applications · Applying Claude for Education in Pitt’s Health Sciences and Sports Analytics Cloud Innovation Center, powered by AWS, for student-faculty-industry collaboration on AI solutions · Claude for Education is an advanced AI assistant developed by Anthropic, distinguished by its approach to learning and enterprise applications.\n\n“Claude for Education offers the possibility of a unified, safe AI space,” said Mark D. Henderson, Pitt's vice chancellor and chief information officer. “These tools can empower users to enhance student engagement, accelerate research and transform teaching and learning. Claude’s customizable AI agents could assist advisors with student planning, aid researchers in streamlining presentations and provide administrators with real-time visibility into operations.” · This agreement builds on Pitt’s established track record in responsible AI, recognized by Anthropic and AWS for its technological and governance groundwork, including the Pitt-AWS Cloud Innovation Center and commitment to ethical AI frameworks. “The University of Pittsburgh has been forward-thinking in its approach to AI and leveraging AWS technology across its campus from health sciences to sports,” said Kim Majerus, vice president of global education and U.S.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.pittwire.pitt.edu/features-articles/2025/10/22/claude-for-education-aws-anthropic-partnership",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic announces Claude for Education | EdScoop",
      "url": "https://edscoop.com/anthropic-announces-claude-for-education/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "edscoop.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=edscoop.com",
        "site_name": "EdScoop"
      },
      "is_missing": false,
      "text": "According to a post on the company’s website, Claude for Education is designed to be a more powerful study companion, and includes integration with the publisher Wiley and the AI video tools firm Panopto.\n\nJuly 11, 2025 · Listen to this article · 0:00 · Learn more. This feature uses an automated voice, which may result in occasional errors in pronunciation, tone, or sentiment. (Smith Collection / Gado / Getty Images) Anthropic, the generative artificial intelligence company behind Claude, on Wednesday announced a new product tailored for education. According to a post on the company’s website, Claude for Education is designed to be a more powerful study companion, and includes integration with the publisher Wiley and the AI video tools firm Panopto. Anthropic says these integrations will allow students and educators to access their institutions’ deep repositories of “authoritative” and peer-reviewed content. “[W]e’re building toward a future where students can reference readings, lecture recordings, visualizations, and textbook content directly within their conversations,” the release reads.\n\nLearn more. This feature uses an automated voice, which may result in occasional errors in pronunciation, tone, or sentiment. ... Anthropic, the generative artificial intelligence company behind Claude, on Wednesday announced a new product tailored for education. According to a post on the company’s website, Claude for Education is designed to be a more powerful study companion, and includes integration with the publisher Wiley and the AI video tools firm Panopto. Anthropic says these integrations will allow students and educators to access their institutions’ deep repositories of “authoritative” and peer-reviewed content. “[W]e’re building toward a future where students can reference readings, lecture recordings, visualizations, and textbook content directly within their conversations,” the release reads. “Today, we’re sharing a first look at integrations with popular educational tools and resources rolling out over the next few weeks.” ·\n\nGoogle education suite adds new security, AI detection features · Data privacy advocates wary of school surveillance technology shortcomings · Teacher gender matters in classroom AI policy, USC researchers find · Instructure announces AI tutoring partnership with Khan Academy · IBM expands tech training network with 45 new partnerships · Texas Tech U. gets $149M grant for cyber, EMP testing site · Cyberattack disrupts care at University of Mississippi Medical Center · University of Sydney data breach exposed personal information of 27,000 individuals · Montana State earns cyber defense center designation · 5G: Making the connection for greater student and faculty success · 2U and edX reached 73 million learners, report says ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://edscoop.com/anthropic-announces-claude-for-education/",
        "search_provider": "anthropic",
        "age": "July 11, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Introduces Claude for Education -- Spaces4Learning",
      "url": "https://spaces4learning.com/articles/2025/04/02/anthropic-introduces-claude-for-education.aspx",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "spaces4learning.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=spaces4learning.com",
        "site_name": "Spaces4Learning"
      },
      "is_missing": false,
      "text": "Administrative staff can analyze ... controls. Claude for Education features a new Learning mode, designed to guide students&#x27; reasoning process rather than providing answers....\n\nAnthropic has launched a version of its Claude AI assistant tailored for higher education institutions. Claude for Education 'gives academic institutions secure, reliable AI access for their entire community,' the company said, to enable colleges and universities to develop and implement AI-enabled approaches across teaching, learning, and administration.\n\nIn a blog post, Anthropic provided the following examples of Claude for Education's capabilities: Students can draft literature reviews with proper citations, work through calculus problems with step-by-step guidance, and get feedback on thesis statements before final submission. Faculty can create rubrics aligned to specific learning outcomes, provide individualized feedback on student essays efficiently, and generate chemistry equations with varying difficulty levels. Administrative staff can analyze enrollment trends across departments, automate repetitive e-mail responses to common inquiries, and convert dense policy documents into accessible FAQ formats — all from a familiar chat interface with enterprise-grade security and privacy controls. Claude for Education features a new Learning mode, designed to guide students' reasoning process rather than providing answers.\n\nFor instance, Claude might ask,\" How would you approach this problem?\" rather than stating an immediate solution. The feature uses Socratic questioning to deepen understanding, highlights core concepts behind specific problems, and provides templates for research papers, study guides, and outlines. In conjunction with Claude for Education's release, Anthropic also announced two new student programs: Claude Campus Ambassadors, an opportunity for students to work directly with the Anthropic team to launch outreach campaigns and educational initiatives on their campus, and Claude for Student Builders, a way for students who are building projects with Claude to apply for free API credits. Early adopters of Claude for Education include Northeastern University, The London School of Economics and Political Science (LSE), and Champlain College, which are making Claude available to all students through full campus access agreements.\n\n\"AI is changing what it means to be ready for work and, as a future-focused college, Champlain is giving students opportunities to use AI so they can hit the ground running when they graduate,\" commented Champlain College President Alex Hernandez. \"The Anthropic collaboration is fueling a new wave of innovations at Champlain College, giving us an opportunity to learn lessons that can benefit all higher education.\" For more information, go to the Anthropic site. ... Rhea Kelly is editor in chief for Campus Technology, THE Journal, and Spaces4Learning. She can be reached at [email protected]. ... The Denton Independent School District in Dallas, Texas, recently finished construction on its third prototype design elementary school, Reeves Elementary, according to a news release. Higher education campuses can enhance student experience by implementing mobile credentials to streamline building access, on-campus payments, and access to other amenities.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://spaces4learning.com/articles/2025/04/02/anthropic-introduces-claude-for-education.aspx",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic Launches Claude for Education -- Campus Technology",
      "url": "https://campustechnology.com/articles/2025/04/02/anthropic-launches-claude-for-education.aspx",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "campustechnology.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=campustechnology.com",
        "site_name": "Campus Technology"
      },
      "is_missing": false,
      "text": "The feature uses Socratic questioning to deepen understanding, highlights core concepts behind specific problems, and provides templates for research papers, study guides, and outlines.\n\nAnthropic has announced a version of its Claude AI assistant tailored for higher education institutions. Claude for Education 'gives academic institutions secure, reliable AI access for their entire community,' the company said, to enable colleges and universities to develop and implement AI-enabled approaches across teaching, learning, and administration.\n\nIn a blog post, Anthropic provided the following examples of Claude for Education's capabilities: Students can draft literature reviews with proper citations, work through calculus problems with step-by-step guidance, and get feedback on thesis statements before final submission. Faculty can create rubrics aligned to specific learning outcomes, provide individualized feedback on student essays efficiently, and generate chemistry equations with varying difficulty levels. Administrative staff can analyze enrollment trends across departments, automate repetitive e-mail responses to common inquiries, and convert dense policy documents into accessible FAQ formats — all from a familiar chat interface with enterprise-grade security and privacy controls. Claude for Education features a new Learning mode, designed to guide students' reasoning process rather than providing answers.\n\nFor instance, Claude might ask,\" How would you approach this problem?\" rather than stating an immediate solution. The feature uses Socratic questioning to deepen understanding, highlights core concepts behind specific problems, and provides templates for research papers, study guides, and outlines. In conjunction with Claude for Education's release, Anthropic also announced two new student programs: Claude Campus Ambassadors, an opportunity for students to work directly with the Anthropic team to launch outreach campaigns and educational initiatives on their campus, and Claude for Student Builders, a way for students who are building projects with Claude to apply for free API credits. Early adopters of Claude for Education include Northeastern University, The London School of Economics and Political Science (LSE), and Champlain College, which are making Claude available to all students through full campus access agreements.\n\n\"AI is changing what it means to be ready for work and, as a future-focused college, Champlain is giving students opportunities to use AI so they can hit the ground running when they graduate,\" commented Champlain College President Alex Hernandez. \"The Anthropic collaboration is fueling a new wave of innovations at Champlain College, giving us an opportunity to learn lessons that can benefit all higher education.\" For more information, visit the Anthropic site. ... Rhea Kelly is editor in chief for Campus Technology, THE Journal, and Spaces4Learning. She can be reached at [email protected]. ... In an open call last month, we asked education and industry leaders for their predictions on the cybersecurity landscape for schools, districts, colleges, and universities in 2026. Here's what they told us. A Jan. 30 event offered by the High Tech Law Institute at Santa Clara University convenes legal experts on intellectual property and IP law to consider the past 50 years and the future of IP",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://campustechnology.com/articles/2025/04/02/anthropic-launches-claude-for-education.aspx",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude for Education now available in AWS Marketplace | AWS Public Sector Blog",
      "url": "https://aws.amazon.com/blogs/publicsector/claude-for-education-now-available-in-aws-marketplace/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "amazon.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=amazon.com",
        "site_name": "AWS"
      },
      "is_missing": false,
      "text": "Imagine equipping every student with an adaptive study companion, faculty with an AI assistant for creating engaging teaching materials, and staff with an AI collaborator for tracking and analyzing student progress—that’s what Anthropic ...\n\nImagine equipping every student with an adaptive study companion, faculty with an AI assistant for creating engaging teaching materials, and staff with an AI collaborator for tracking and analyzing student progress—that's what Anthropic is offering with Claude for Education. Universities can now equip their academic community with this educational version of Claude while benefiting from the streamlined procurement and billing benefits of AWS. Read this post to learn more.\n\nBuilt specifically for academic institutions, Claude for Education includes enterprise-grade security with single sign on (SSO) and audit controls, plus native integrations with GitHub, Google Workspace, and Canvas LTI, with Panopto and Wiley integrations coming soon. But Claude for Education isn’t just access to the Claude model— it incorporates Anthropic’s vision for transforming how universities develop and implement AI-enabled approaches across teaching, learning, and administration, ensuring educators and students actively shape AI’s role in education. This is a critical distinction: Although Anthropic’s Claude models are available through Amazon Bedrock for educational institutions building enterprise-level transformational generative AI solutions to support their mission, Claude for Education is a fully featured software-as-a-service solution, and comes with dedicated partnership from Anthropic to ensure success for higher education institutions.\n\nFor academic institutions looking to build mission-focused and enterprise-scale AI solutions using Anthropic’s Claude models, Amazon Bedrock provides API access with the flexibility to integrate Anthropic’s Claude into custom solutions. For those seeking a personal assistant for students, faculty, and staff, Claude for Education, available in AWS Marketplace, is the ideal “buy” solution. It’s a complete AI collaboration platform that requires no development work. It includes projects (shown in the following screenshot) for team collaboration and templates such as Learning Mode, native integrations with key LMS systems, enterprise security controls, and a user interface that makes AI accessible to every member of the academic community, not only developers. Figure 1: Image of the create a study guide experience for Claude for Education ·\n\nAnthropic’s Claude for Education in AWS Marketplace offers several capabilities scaled for academic institutions, including large context windows, enterprise-grade security and compliance, native integrations, and both pre-built and custom integrations through the Model Context Protocol (MCP). Claude for Education features a 200K token context window—enabling comprehensive analysis of complex academic materials in a single conversation. This capability supports sophisticated research tasks and complex academic work across disciplines. For example, a research team can upload multiple academic papers, datasets, and their own notes into a single Claude conversation. Claude maintains full context across all documents, enabling comprehensive analysis and synthesis that would typically require hours of manual work. Security is built into every aspect of Claude for Education to meet the rigorous requirements of academic institutions.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://aws.amazon.com/blogs/publicsector/claude-for-education-now-available-in-aws-marketplace/",
        "search_provider": "anthropic",
        "age": "July 30, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude AI 2025 Features: Anthropic Upgrades For Students And Developers",
      "url": "https://moiid.com/en/claude-ai-2025-features-revolutionize-education-and-coding-for-students-and-developers/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "moiid.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=moiid.com",
        "site_name": "Moiid"
      },
      "is_missing": false,
      "text": "Student support: Claude drafts literature reviews, checks citations, guides through step-by-step math problems, and provides feedback on essays. Instead of handing out answers, it nudges students to develop independent solutions.\n\nAnthropic’s Claude AI is clearly leveling up in the AI landscape, especially for students, educators, and developers who want power without sacrificing privacy, reliability, or integrity. Features like Learning Mode invite users to engage, question, and build their skills—not just copy answers. For developers, Claude becomes a true coding partner, supporting projects both simple and complex. As the race between AI giants continues, Anthropic’s noble focus on safe, useful, and ethical AI is refreshing—and likely a blueprint for the future. Whether you’re looking to ace your college research, automate your workflow, or build the next great app, Claude is ready to work alongside you. As AI evolves, so do the opportunities for smart, thoughtful, and creative collaboration. The future—and Claude’s role in it—is looking bright. ... NotebookLM Project Management Guide 2025 How to Use Google AI for Efficient Team Collaboration and Workflow ·\n\nDiscover Claude AI’s new 2025 features for students and developers. See how Anthropic’s advanced AI enhances learning, coding, privacy, and productivity.\n\nAnthropic, a leader in AI safety and research, launched the Claude AI series to push the limits of natural language processing, advanced reasoning, and safe deployment. Claude’s conversational abilities rival the best in the industry, but what really sets it apart is its focus on being helpful, harmless, and honest across academic and technical settings. While many AI assistants can chat, answer questions, and generate content, Claude shines in three core areas: Massive context window: Claude 4 supports up to 200,000 tokens, letting it understand, summarize, and reference entire books, codebases, or huge datasets without losing track of context. Alignment with educational goals: Special features like “Learning Mode” encourage students to think critically and work through problems rather than just copying answers. Developer-centric tools: Robust APIs, advanced coding help, and real-time feedback make it a valuable companion for both new and experienced programmers.\n\nClaude for Education isn’t just generic AI—it’s tuned for academic integrity, privacy, and meaningful learning. Universities now have enterprise-grade Claude access, opening up opportunities to enhance teaching, streamline administration, and promote research. Student support: Claude drafts literature reviews, checks citations, guides through step-by-step math problems, and provides feedback on essays. Instead of handing out answers, it nudges students to develop independent solutions. Faculty empowerment: Professors can quickly generate, customize, and align rubrics, provide individualized feedback at scale, and create dynamic assessments across disciplines. Administrative tools: The AI can parse enrollment trends, automate response to routine queries, and quickly curate dense documents into FAQs or actionable summaries. What’s more, Anthropic is forging partnerships with major players in higher education, like Internet2 and Canvas’s parent company Instructure, to embed AI seamlessly",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://moiid.com/en/claude-ai-2025-features-revolutionize-education-and-coding-for-students-and-developers/",
        "search_provider": "anthropic",
        "age": "August 15, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic’s Claude in the Classroom: What It Means for Higher Ed—and for The Institute for Experiential AI | Institute for Experiential AI",
      "url": "https://ai.northeastern.edu/news/anthropics-claude-in-the-classroom-what-it-means-for-higher-ed--and-for-the-institute-for-experiential-ai",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "northeastern.edu",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=northeastern.edu",
        "site_name": "Northeastern"
      },
      "is_missing": false,
      "text": "Northeastern’s Institute for Experiential AI is built around a mission of responsible, human-centered AI. Our collaboration with Anthropic can deepen that commitment by: Piloting research studies that evaluate how Claude’s “learning mode” shapes student outcomes and faculty workflows · Embedding responsible AI principles directly into deployment strategies and classroom integrations · Co-developing curriculum modules that leverage Claude while teaching students how to work critically with AI · Providing workshops and executive education to help institutions adopt AI with confidence and ethical foresight · EAI’s expertise in applied AI, ethics, and learning science means we’re not just adopting tools—we’re helping define their role in education. Northeastern was the first university in the U.S. to develop an entire academic plan—Northeastern 2025—centered on AI and its implications for the future of learning.\n\nNortheastern’s Institute for Experiential AI is built around a mission of responsible, human-centered AI. Our collaboration with Anthropic can deepen that commitment by: Piloting research studies that evaluate how Claude’s “learning mode” shapes student outcomes and faculty workflows · Embedding responsible AI principles directly into deployment strategies and classroom integrations · Co-developing curriculum modules that leverage Claude while teaching students how to work critically with AI · Providing workshops and executive education to help institutions adopt AI with confidence and ethical foresight · EAI’s expertise in applied AI, ethics, and learning science means we’re not just adopting tools—we’re helping define their role in education. Northeastern was the first university in the U.S. to develop an entire academic plan—Northeastern 2025—centered on AI and its implications for the future of learning.\n\nAs Anthropic’s official announcement notes, this long-term commitment makes Northeastern a natural launch partner for Claude for Education. It also reflects the university’s broader push to integrate responsible, human-centered AI into every aspect of the learning journey. Northeastern President Joseph E. Aoun—a thought leader in the field—captured this vision in Robot-Proof, recently updated in 2024 to reflect the evolving role of AI in education and the workforce. That long-term vision is now becoming a blueprint for action. In April 2025, Northeastern announced a strategic partnership with Anthropic, aimed at shaping how responsible AI is introduced, adopted, and governed across higher education. The collaboration includes co-designing responsible use frameworks, creating new tools for students and faculty, and advancing research that ensures AI empowers—rather than replaces—human learning.\n\nAnthropic's Claude chatbot is coming to colleges. Here's how Northeastern and EAI are helping shape the future of AI in higher education.\n\nAnthropic’s new Claude for Education chatbot is designed to make students think—not copy. Northeastern is leading the way in putting it to the test. ... No items found. ... Anthropic is flipping the script on AI in education. With the launch of its new Claude chatbot tier for universities, the $61.5 billion AI powerhouse is positioning itself not just as a tech provider—but as a thought partner for the future of learning. And now, with Northeastern University among its early partners, the Institute for Experiential AI (EAI) is uniquely poised to shape what this transformation looks like in practice. 👉 Anthropic flips the script on AI in education 👉 Anthropic launches AI chatbot tier for colleges 👉 Anthropic makes a case for AI in college classrooms 👉 Claude for Universities touts responsible AI adoption · Unlike many other generative AI tools that do the thinking for students, Claude’s “learning mode” nudges students to reflect, critique, and improve their work through guided questioni",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://ai.northeastern.edu/news/anthropics-claude-in-the-classroom-what-it-means-for-higher-ed--and-for-the-institute-for-experiential-ai",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic",
      "url": "https://www.anthropic.com/news/anthropic-higher-education-initiatives",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "anthropic.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
        "site_name": "Anthropic"
      },
      "is_missing": false,
      "text": "Today, we&#x27;re announcing two initiatives for AI in education to help navigate these critical decisions: a Higher Education Advisory Board to guide Claude&#x27;s development for education, and three AI Fluency courses co-created with educators that can help teachers and students build practical, ...\n\nTry Claude · Announcements · Aug 21, 2025 · The choices made in the next few years about how AI enters the classroom will shape a generation's relationship with both technology and learning. Today, we're announcing two initiatives for AI in education to help navigate these critical decisions: a Higher Education Advisory Board to guide Claude's development for education, and three AI Fluency courses co-created with educators that can help teachers and students build practical, responsible AI skills. Anthropic has appointed a Higher Education Advisory Board of distinguished academic leaders who will help guide how Claude serves teaching, learning, and research in higher education. Drawing on expertise spanning university leadership, educational technology, and learning science, the board will ensure AI strengthens rather than undermines learning and critical thinking skills.\n\nThe choices made in the next few years about how AI enters the classroom will shape a generation's relationship with both technology and learning. Today, we're announcing two initiatives for AI in education to help navigate these critical decisions: a Higher Education Advisory Board to guide Claude's development for education, and three AI Fluency courses co-created with educators that can help teachers and students build practical, responsible AI skills. Anthropic has appointed a Higher Education Advisory Board of distinguished academic leaders who will help guide how Claude serves teaching, learning, and research in higher education. Drawing on expertise spanning university leadership, educational technology, and learning science, the board will ensure AI strengthens rather than undermines learning and critical thinking skills. The board will be chaired by Rick Levin, whose unique perspective spans two decades leading Yale University (1993-2013) and ten years at Coursera – three as C\n\nJulie Schell, Assistant Vice Provost of Academic Technology at University of Texas, Austin, leads large-scale educational technology transformation and modernization initiatives, expert in learning science and evidence-based teaching practices. Matthew Rascoff, Vice Provost for Digital Education at Stanford University, leading digital learning initiatives that expand access to advanced education for those who have been underserved. Yolanda Watson Spiva, President of Complete College America, leads a national alliance of 53 states and systems mobilizing to increase college completion rates. With nearly three decades in postsecondary education policy, she leads CCA's work on AI adoption for student success and formed the CCA Council on AI. Working with the advisory board and educators worldwide, we've developed three new courses that build on our existing AI Fluency course, and are designed to address what universities need most: practical frameworks for thoughtful AI integration.\n\nAI Fluency for Educators helps faculty integrate AI into their teaching practice, from creating materials and assessments to enhancing classroom discussions. Built on experience from early adopters, it shows what works in real classrooms. AI Fluency for Students teaches responsible AI collaboration for coursework and career planning. Students learn to work with AI while developing their own critical thinking skills, and write their own personal commitment to responsible AI use · Teaching AI Fluency supports educators who want to bring AI literacy to their campuses and classrooms. It includes frameworks for instruction and assessment, plus curriculum considerations for preparing students for a more AI-enhanced world. These initiatives reflect our commitment to co-creating the future of AI in education. As universities worldwide grapple with AI's role in education, these resources provide both immediate support and long-term guidance.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.anthropic.com/news/anthropic-higher-education-initiatives",
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

Yes, Claude does have a comparable feature! Here's a clear breakdown:

**Gemini's "Guided Learning"** (launched August 2025) is a dedicated mode you activate via a chip in the Gemini app. Instead of giving you a direct answer, it walks you step-by-step through subjects, breaking down complex information and providing interactive help using questions, images, diagrams, and YouTube videos. It's built on top of Google's LearnLM, which was fine-tuned specifically for education.

**Claude's equivalent: "Learning Mode"** — Anthropic introduced Learning Mode as part of Claude for Education. In Learning Mode, Claude helps students develop independent thinking by guiding rather than answering — asking "How would you approach this problem?" instead of providing immediate solutions, using Socratic questioning like "What evidence supports your conclusion?" to deepen understanding, and emphasizing core concepts behind specific problems.

The two features are philosophically very similar — both deliberately withhold direct answers to encourage active learning. The key differences:

- **Availability**: Gemini's Guided Learning is available to all Gemini users. Claude's Learning Mode is currently part of **Claude for Education**, which is an institutional product aimed at universities (like Northeastern, LSE, etc.), not a button regular claude.ai users can toggle in the main interface.
- **Multimodal richness**: Gemini integrates images, diagrams, and YouTube videos inline. Claude's Learning Mode is more conversational/Socratic in nature.
- **Integration**: Claude for Education is building integrations with Canvas LMS, Panopto, and Wiley, so students can reference readings, lecture recordings, and textbook content directly in conversations.

So in short — if you're a regular claude.ai user, you won't find a dedicated "Guided Learning" toggle the way Gemini has it. But the underlying capability (Socratic, guiding-without-answering) is something Claude does naturally when asked, and it's formalized as a feature in the institutional Claude for Education product.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd51c-ee6e-7121-89d7-089d2e84719e",
  "updated_at": "2026-03-10T00:19:58.020156Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cd51c-ee6e-749a-8e53-58077774472a"
}
```

</details>

### 3. human — 2026-03-10T00:21:35.013985Z

How about this at the bottom of my chat box?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd51e-d885-786b-9bf9-598d9d7ff934",
  "updated_at": "2026-03-10T00:21:35.013985Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "75973fd0-611c-4c6c-9311-1b78b1b4ad0a",
      "file_name": "1773102082181_image.png"
    }
  ],
  "parent_message_uuid": "019cd51c-ee6e-7121-89d7-089d2e84719e"
}
```

</details>

### 4. assistant — 2026-03-10T00:21:43.566381Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is showing a screenshot of the Claude interface with a "Use style" menu open, showing options: Normal, Learning, Concise, Explanatory, Formal, and Create & edit styles. They're asking about the "Learning" style option visible there.

This is actually the Learning style in the regular claude.ai interface! It's accessible via the style selector, not just in Claude for Education.

</details>

That's actually the **Learning style** built right into claude.ai — so you do have access to it! It's under the **"Use style"** menu in your chat toolbar.

The **Learning** style there essentially does what I described — it shifts Claude into a more Socratic, guiding mode rather than just giving you direct answers. It's Claude's version of the guided learning experience, available to all regular claude.ai users.

So to use it, just click the style icon (the pen/brush icon) → select **Learning** before sending your message. It'll stay active for that conversation, prompting you to think through problems rather than handing you solutions directly.

This is actually quite comparable to Gemini's Guided Learning chip — just tucked under the style menu rather than being a standalone button. Give it a try on one of your physics or ML concepts!

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd51e-d885-757c-a1dd-a1f5f9ae2290",
  "updated_at": "2026-03-10T00:21:43.566381Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cd51e-d885-786b-9bf9-598d9d7ff934"
}
```

</details>

### 5. human — 2026-03-10T00:22:54.651273Z

So can you create interactive flashcards of quiz? To examinate me and check my learning status.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd520-0ff7-7344-836c-69358c602e38",
  "updated_at": "2026-03-10T00:22:54.651273Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cd51e-d885-757c-a1dd-a1f5f9ae2290"
}
```

</details>

### 6. assistant — 2026-03-10T00:24:28.232888Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants interactive flashcards or a quiz. This is a great use case for a React artifact. Let me check the frontend design skill first.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-10T00:22:56.895994Z",
  "stop_timestamp": "2026-03-10T00:22:57.734048Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01LsBHZ4gEbzKhhyLHAqQ7Qd",
  "name": "view",
  "input": {
    "description": "Read frontend design skill",
    "path": "/mnt/skills/public/frontend-design/SKILL.md"
  },
  "message": "Read frontend design skill",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "text",
    "text": "Read frontend design skill"
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
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01LsBHZ4gEbzKhhyLHAqQ7Qd",
  "name": "view",
  "content": [
    {
      "type": "text",
      "text": "     1\t---\n     2\tname: frontend-design\n     3\tdescription: Create distinctive, production-grade frontend interfaces with high design quality. Use this skill when the user asks to build web components, pages, artifacts, posters, or applications (examples include websites, landing pages, dashboards, React components, HTML/CSS layouts, or when styling/beautifying any web UI). Generates creative, polished code and UI design that avoids generic AI aesthetics.\n     4\tlicense: Complete terms in LICENSE.txt\n     5\t---\n     6\t\n     7\tThis skill guides creation of distinctive, production-grade frontend interfaces that avoid generic \"AI slop\" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.\n     8\t\n     9\tThe user provides frontend requirements: a component, page, application, or interface to build. They may include context about the purpose, audience, or technical constraints.\n    10\t\n    11\t## Design Thinking\n    12\t\n    13\tBefore coding, understand the context and commit to a BOLD aesthetic direction:\n    14\t- **Purpose**: What problem does this interface solve? Who uses it?\n    15\t- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. There are so many flavors to choose from. Use these for inspiration but design one that is true to the aesthetic direction.\n    16\t- **Constraints**: Technical requirements (framework, performance, accessibility).\n    17\t- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?\n    18\t\n    19\t**CRITICAL**: Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work - the key is intentionality, not intensity.\n    20\t\n    21\tThen implement working code (HTML/CSS/JS, React, Vue, etc.) that is:\n    22\t- Production-grade and functional\n    23\t- Visually striking and memorable\n    24\t- Cohesive with a clear aesthetic point-of-view\n    25\t- Meticulously refined in every detail\n    26\t\n    27\t## Frontend Aesthetics Guidelines\n    28\t\n    29\tFocus on:\n    30\t- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt instead for distinctive choices that elevate the frontend's aesthetics; unexpected, characterful font choices. Pair a distinctive display font with a refined body font.\n    31\t- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.\n    32\t- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Use Motion library for React when available. Focus on high-impact moments: one well-orchestrated page load with staggered reveals (animation-delay) creates more delight than scattered micro-interactions. Use scroll-triggering and hover states that surprise.\n    33\t- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.\n    34\t- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Add contextual effects and textures that match the overall aesthetic. Apply creative forms like gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, custom cursors, and grain overlays.\n    35\t\n    36\tNEVER use generic AI-generated aesthetics like overused font families (Inter, Roboto, Arial, system fonts), cliched color schemes (particularly purple gradients on white backgrounds), predictable layouts and component patterns, and cookie-cutter design that lacks context-specific character.\n    37\t\n    38\tInterpret creatively and make unexpected choices that feel genuinely designed for the context. No design should be the same. Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on common choices (Space Grotesk, for example) across generations.\n    39\t\n    40\t**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details. Elegance comes from executing the vision well.\n    41\t\n    42\tRemember: Claude is capable of extraordinary creative work. Don't hold back, show what can truly be created when thinking outside the box and committing fully to a distinctive vision.\n    43\t",
      "uuid": "c3666fec-a165-4591-84fa-26012d3c896c"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

The user wants interactive flashcards or a quiz. I'll build a React artifact with a nice design. Let me think about what topic to make the quiz about - I should ask the user what subject they want, but to be more helpful I could build a general quiz/flashcard system where they can pick a topic or I could build something with sample physics/ML content since that's their field.

Actually, let me ask what subject they want, or build a flexible one with an AI-powered backend that generates questions on any topic they input. That would be really cool - using the Anthropic API to generate questions dynamically!

Let me build an AI-powered quiz/flashcard app that uses the Anthropic API to generate questions on any topic, then examines the user and checks their understanding.

</details>

Absolutely! I'll build you an AI-powered interactive quiz app — you type any topic, and it generates questions, examines you, and tracks your score. Let me make it look great too.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-10T00:23:05.404887Z",
  "stop_timestamp": "2026-03-10T00:24:21.096307Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_015acrj8KHUZete9pe5grcJn",
  "name": "create_file",
  "input": {
    "description": "AI-powered interactive quiz/flashcard app using Anthropic API",
    "path": "/mnt/user-data/outputs/quiz_app.jsx",
    "file_text": "import { useState, useEffect } from \"react\";\n\nconst STYLES = `\n  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');\n\n  * { box-sizing: border-box; margin: 0; padding: 0; }\n\n  body {\n    background: #0a0a0f;\n    color: #e8e6f0;\n    font-family: 'DM Mono', monospace;\n    min-height: 100vh;\n  }\n\n  .app {\n    min-height: 100vh;\n    background: #0a0a0f;\n    background-image:\n      radial-gradient(ellipse at 20% 50%, rgba(99, 60, 180, 0.12) 0%, transparent 60%),\n      radial-gradient(ellipse at 80% 20%, rgba(40, 140, 200, 0.08) 0%, transparent 50%);\n    padding: 32px 16px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .header {\n    text-align: center;\n    margin-bottom: 40px;\n  }\n\n  .header h1 {\n    font-family: 'Syne', sans-serif;\n    font-size: 2.4rem;\n    font-weight: 800;\n    letter-spacing: -0.03em;\n    background: linear-gradient(135deg, #c084fc, #60a5fa, #34d399);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    line-height: 1.1;\n  }\n\n  .header p {\n    margin-top: 8px;\n    color: #6b7280;\n    font-size: 0.8rem;\n    letter-spacing: 0.05em;\n  }\n\n  .card {\n    background: rgba(255,255,255,0.035);\n    border: 1px solid rgba(255,255,255,0.08);\n    border-radius: 20px;\n    padding: 28px;\n    width: 100%;\n    max-width: 640px;\n    backdrop-filter: blur(12px);\n  }\n\n  .topic-form {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n  }\n\n  .topic-form label {\n    font-size: 0.72rem;\n    letter-spacing: 0.12em;\n    color: #9ca3af;\n    text-transform: uppercase;\n  }\n\n  .topic-input {\n    background: rgba(255,255,255,0.06);\n    border: 1px solid rgba(255,255,255,0.12);\n    border-radius: 12px;\n    padding: 14px 16px;\n    color: #e8e6f0;\n    font-family: 'DM Mono', monospace;\n    font-size: 0.95rem;\n    outline: none;\n    transition: border-color 0.2s;\n    width: 100%;\n  }\n\n  .topic-input:focus {\n    border-color: rgba(192, 132, 252, 0.5);\n  }\n\n  .topic-input::placeholder { color: #4b5563; }\n\n  .row {\n    display: flex;\n    gap: 12px;\n    align-items: center;\n  }\n\n  .select {\n    background: rgba(255,255,255,0.06);\n    border: 1px solid rgba(255,255,255,0.12);\n    border-radius: 12px;\n    padding: 12px 14px;\n    color: #e8e6f0;\n    font-family: 'DM Mono', monospace;\n    font-size: 0.85rem;\n    outline: none;\n    flex: 1;\n    cursor: pointer;\n  }\n\n  .btn {\n    background: linear-gradient(135deg, #7c3aed, #2563eb);\n    border: none;\n    border-radius: 12px;\n    padding: 14px 24px;\n    color: white;\n    font-family: 'Syne', sans-serif;\n    font-size: 0.9rem;\n    font-weight: 700;\n    cursor: pointer;\n    transition: opacity 0.2s, transform 0.15s;\n    letter-spacing: 0.02em;\n    white-space: nowrap;\n  }\n\n  .btn:hover:not(:disabled) { opacity: 0.85; transform: translateY(-1px); }\n  .btn:active:not(:disabled) { transform: translateY(0); }\n  .btn:disabled { opacity: 0.4; cursor: not-allowed; }\n\n  .btn-ghost {\n    background: rgba(255,255,255,0.07);\n    border: 1px solid rgba(255,255,255,0.12);\n    border-radius: 12px;\n    padding: 10px 18px;\n    color: #9ca3af;\n    font-family: 'DM Mono', monospace;\n    font-size: 0.8rem;\n    cursor: pointer;\n    transition: all 0.2s;\n  }\n  .btn-ghost:hover { background: rgba(255,255,255,0.12); color: #e8e6f0; }\n\n  .loading {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 16px;\n    padding: 24px 0;\n  }\n\n  .spinner {\n    width: 40px;\n    height: 40px;\n    border: 2px solid rgba(255,255,255,0.1);\n    border-top-color: #c084fc;\n    border-radius: 50%;\n    animation: spin 0.8s linear infinite;\n  }\n\n  @keyframes spin { to { transform: rotate(360deg); } }\n\n  .loading p {\n    color: #6b7280;\n    font-size: 0.82rem;\n    letter-spacing: 0.05em;\n  }\n\n  .progress-bar-wrap {\n    background: rgba(255,255,255,0.07);\n    border-radius: 99px;\n    height: 4px;\n    margin-bottom: 24px;\n    overflow: hidden;\n  }\n\n  .progress-bar-fill {\n    height: 100%;\n    background: linear-gradient(90deg, #7c3aed, #60a5fa);\n    border-radius: 99px;\n    transition: width 0.5s ease;\n  }\n\n  .q-meta {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 20px;\n  }\n\n  .q-counter {\n    font-size: 0.72rem;\n    letter-spacing: 0.1em;\n    color: #6b7280;\n    text-transform: uppercase;\n  }\n\n  .score-badge {\n    font-size: 0.72rem;\n    background: rgba(52, 211, 153, 0.12);\n    border: 1px solid rgba(52, 211, 153, 0.25);\n    color: #34d399;\n    padding: 4px 10px;\n    border-radius: 99px;\n    letter-spacing: 0.05em;\n  }\n\n  .q-type-badge {\n    font-size: 0.65rem;\n    letter-spacing: 0.12em;\n    color: #c084fc;\n    text-transform: uppercase;\n    margin-bottom: 10px;\n  }\n\n  .q-text {\n    font-family: 'Syne', sans-serif;\n    font-size: 1.1rem;\n    font-weight: 600;\n    line-height: 1.5;\n    margin-bottom: 24px;\n    color: #f0eeff;\n  }\n\n  .options {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-bottom: 20px;\n  }\n\n  .option-btn {\n    background: rgba(255,255,255,0.04);\n    border: 1px solid rgba(255,255,255,0.1);\n    border-radius: 12px;\n    padding: 13px 16px;\n    color: #d1d5db;\n    font-family: 'DM Mono', monospace;\n    font-size: 0.87rem;\n    cursor: pointer;\n    text-align: left;\n    transition: all 0.18s;\n    line-height: 1.4;\n    display: flex;\n    align-items: flex-start;\n    gap: 10px;\n  }\n\n  .option-btn:hover:not(:disabled) {\n    background: rgba(124, 58, 237, 0.15);\n    border-color: rgba(124, 58, 237, 0.4);\n    color: #e8e6f0;\n  }\n\n  .option-btn.selected {\n    background: rgba(96, 165, 250, 0.12);\n    border-color: rgba(96, 165, 250, 0.4);\n    color: #e8e6f0;\n  }\n\n  .option-btn.correct {\n    background: rgba(52, 211, 153, 0.12);\n    border-color: rgba(52, 211, 153, 0.5);\n    color: #34d399;\n  }\n\n  .option-btn.wrong {\n    background: rgba(248, 113, 113, 0.1);\n    border-color: rgba(248, 113, 113, 0.4);\n    color: #f87171;\n  }\n\n  .option-label {\n    font-size: 0.7rem;\n    opacity: 0.5;\n    flex-shrink: 0;\n    margin-top: 1px;\n  }\n\n  .text-answer-wrap {\n    margin-bottom: 20px;\n  }\n\n  .text-answer {\n    width: 100%;\n    background: rgba(255,255,255,0.06);\n    border: 1px solid rgba(255,255,255,0.12);\n    border-radius: 12px;\n    padding: 14px 16px;\n    color: #e8e6f0;\n    font-family: 'DM Mono', monospace;\n    font-size: 0.9rem;\n    outline: none;\n    resize: none;\n    transition: border-color 0.2s;\n    min-height: 80px;\n  }\n\n  .text-answer:focus { border-color: rgba(192,132,252,0.5); }\n\n  .feedback-box {\n    border-radius: 12px;\n    padding: 14px 16px;\n    margin-bottom: 16px;\n    font-size: 0.85rem;\n    line-height: 1.55;\n  }\n\n  .feedback-correct {\n    background: rgba(52, 211, 153, 0.08);\n    border: 1px solid rgba(52, 211, 153, 0.25);\n    color: #6ee7b7;\n  }\n\n  .feedback-wrong {\n    background: rgba(248, 113, 113, 0.08);\n    border: 1px solid rgba(248, 113, 113, 0.25);\n    color: #fca5a5;\n  }\n\n  .feedback-partial {\n    background: rgba(251, 191, 36, 0.08);\n    border: 1px solid rgba(251, 191, 36, 0.25);\n    color: #fde68a;\n  }\n\n  .feedback-label {\n    font-family: 'Syne', sans-serif;\n    font-weight: 700;\n    font-size: 0.8rem;\n    letter-spacing: 0.08em;\n    text-transform: uppercase;\n    margin-bottom: 6px;\n    display: flex;\n    align-items: center;\n    gap: 6px;\n  }\n\n  .action-row {\n    display: flex;\n    justify-content: flex-end;\n    gap: 10px;\n    margin-top: 4px;\n  }\n\n  /* Results */\n  .results-header {\n    text-align: center;\n    margin-bottom: 28px;\n  }\n\n  .big-score {\n    font-family: 'Syne', sans-serif;\n    font-size: 4rem;\n    font-weight: 800;\n    background: linear-gradient(135deg, #c084fc, #60a5fa);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n    line-height: 1;\n  }\n\n  .grade-label {\n    font-size: 0.75rem;\n    letter-spacing: 0.12em;\n    color: #6b7280;\n    text-transform: uppercase;\n    margin-top: 6px;\n  }\n\n  .results-list {\n    display: flex;\n    flex-direction: column;\n    gap: 8px;\n    margin-bottom: 24px;\n    max-height: 320px;\n    overflow-y: auto;\n  }\n\n  .result-item {\n    border-radius: 10px;\n    padding: 12px 14px;\n    font-size: 0.82rem;\n    border-left: 3px solid;\n  }\n\n  .result-item.r-correct {\n    background: rgba(52,211,153,0.06);\n    border-left-color: #34d399;\n  }\n\n  .result-item.r-partial {\n    background: rgba(251,191,36,0.06);\n    border-left-color: #fbbf24;\n  }\n\n  .result-item.r-wrong {\n    background: rgba(248,113,113,0.06);\n    border-left-color: #f87171;\n  }\n\n  .result-q {\n    font-family: 'Syne', sans-serif;\n    font-weight: 600;\n    font-size: 0.8rem;\n    margin-bottom: 4px;\n    color: #d1d5db;\n  }\n\n  .result-detail {\n    color: #9ca3af;\n    line-height: 1.4;\n  }\n\n  .divider {\n    border: none;\n    border-top: 1px solid rgba(255,255,255,0.07);\n    margin: 20px 0;\n  }\n`;\n\n// ---------- API call ----------\nasync function callClaude(messages, system) {\n  const res = await fetch(\"https://api.anthropic.com/v1/messages\", {\n    method: \"POST\",\n    headers: { \"Content-Type\": \"application/json\" },\n    body: JSON.stringify({\n      model: \"claude-sonnet-4-20250514\",\n      max_tokens: 1000,\n      system,\n      messages,\n    }),\n  });\n  const data = await res.json();\n  const text = data.content?.map(b => b.text || \"\").join(\"\") || \"\";\n  return text.replace(/```json|```/g, \"\").trim();\n}\n\n// ---------- Generate questions ----------\nasync function generateQuestions(topic, count, mode) {\n  const system = `You are a quiz generator. Always respond with ONLY valid JSON, no extra text.`;\n  const prompt = `Generate ${count} quiz questions about \"${topic}\".\nMode: ${mode} (flashcard = simple recall; quiz = mixed MCQ & open-ended).\n\nReturn JSON array like:\n[\n  {\n    \"type\": \"mcq\",\n    \"question\": \"...\",\n    \"options\": [\"A) ...\", \"B) ...\", \"C) ...\", \"D) ...\"],\n    \"answer\": \"A\",\n    \"explanation\": \"...\"\n  },\n  {\n    \"type\": \"open\",\n    \"question\": \"...\",\n    \"answer\": \"...\",\n    \"explanation\": \"...\"\n  }\n]\n\nFor flashcard mode use only \"open\" type.\nFor quiz mode mix \"mcq\" and \"open\".\nKeep questions clear and educational. Explanation should be 1-2 sentences.`;\n\n  const raw = await callClaude([{ role: \"user\", content: prompt }], system);\n  return JSON.parse(raw);\n}\n\n// ---------- Evaluate open answer ----------\nasync function evaluateAnswer(question, userAnswer, correctAnswer) {\n  const system = `You are a strict but fair examiner. Respond ONLY with JSON.`;\n  const prompt = `Question: ${question}\nCorrect answer: ${correctAnswer}\nStudent's answer: ${userAnswer}\n\nEvaluate and return JSON:\n{\n  \"score\": 0 | 0.5 | 1,\n  \"verdict\": \"correct\" | \"partial\" | \"wrong\",\n  \"feedback\": \"brief 1-2 sentence feedback\"\n}`;\n\n  const raw = await callClaude([{ role: \"user\", content: prompt }], system);\n  return JSON.parse(raw);\n}\n\n// ---------- Main component ----------\nexport default function QuizApp() {\n  const [phase, setPhase] = useState(\"setup\"); // setup | loading | quiz | results\n  const [topic, setTopic] = useState(\"\");\n  const [count, setCount] = useState(\"5\");\n  const [mode, setMode] = useState(\"quiz\");\n  const [questions, setQuestions] = useState([]);\n  const [qIndex, setQIndex] = useState(0);\n  const [selected, setSelected] = useState(null);\n  const [textInput, setTextInput] = useState(\"\");\n  const [feedback, setFeedback] = useState(null);\n  const [answered, setAnswered] = useState(false);\n  const [results, setResults] = useState([]);\n  const [score, setScore] = useState(0);\n  const [loadingEval, setLoadingEval] = useState(false);\n  const [error, setError] = useState(\"\");\n\n  const q = questions[qIndex];\n\n  async function startQuiz() {\n    if (!topic.trim()) return;\n    setError(\"\");\n    setPhase(\"loading\");\n    try {\n      const qs = await generateQuestions(topic.trim(), parseInt(count), mode);\n      setQuestions(qs);\n      setQIndex(0);\n      setResults([]);\n      setScore(0);\n      setFeedback(null);\n      setAnswered(false);\n      setSelected(null);\n      setTextInput(\"\");\n      setPhase(\"quiz\");\n    } catch (e) {\n      setError(\"Failed to generate questions. Please try again.\");\n      setPhase(\"setup\");\n    }\n  }\n\n  async function submitAnswer() {\n    if (!q) return;\n    setLoadingEval(true);\n\n    let verdict, feedbackText, points;\n\n    if (q.type === \"mcq\") {\n      const letter = selected?.charAt(0);\n      const correct = letter === q.answer;\n      verdict = correct ? \"correct\" : \"wrong\";\n      points = correct ? 1 : 0;\n      feedbackText = correct\n        ? \"Correct! \" + q.explanation\n        : `The correct answer is ${q.answer}. ${q.explanation}`;\n    } else {\n      try {\n        const eval_ = await evaluateAnswer(q.question, textInput, q.answer);\n        verdict = eval_.verdict;\n        points = eval_.score;\n        feedbackText = eval_.feedback + \" (Model answer: \" + q.answer + \")\";\n      } catch {\n        verdict = \"wrong\";\n        points = 0;\n        feedbackText = \"Model answer: \" + q.answer;\n      }\n    }\n\n    const result = {\n      question: q.question,\n      userAnswer: q.type === \"mcq\" ? selected : textInput,\n      correctAnswer: q.answer,\n      verdict,\n      feedback: feedbackText,\n    };\n\n    setResults(prev => [...prev, result]);\n    setScore(prev => prev + points);\n    setFeedback({ verdict, text: feedbackText });\n    setAnswered(true);\n    setLoadingEval(false);\n  }\n\n  function nextQuestion() {\n    if (qIndex + 1 >= questions.length) {\n      setPhase(\"results\");\n    } else {\n      setQIndex(i => i + 1);\n      setSelected(null);\n      setTextInput(\"\");\n      setFeedback(null);\n      setAnswered(false);\n    }\n  }\n\n  function restart() {\n    setPhase(\"setup\");\n    setTopic(\"\");\n    setQuestions([]);\n    setResults([]);\n    setScore(0);\n  }\n\n  const pct = questions.length ? Math.round((score / questions.length) * 100) : 0;\n  const grade =\n    pct >= 90 ? \"Excellent 🎉\" :\n    pct >= 70 ? \"Good Job 👍\" :\n    pct >= 50 ? \"Keep Going 💪\" : \"Needs Review 📚\";\n\n  return (\n    <>\n      <style>{STYLES}</style>\n      <div className=\"app\">\n        <div className=\"header\">\n          <h1>QUIZ MODE</h1>\n          <p>AI-POWERED LEARNING EXAMINATION</p>\n        </div>\n\n        {/* SETUP */}\n        {phase === \"setup\" && (\n          <div className=\"card\">\n            <div className=\"topic-form\">\n              <label>Topic to study</label>\n              <input\n                className=\"topic-input\"\n                value={topic}\n                onChange={e => setTopic(e.target.value)}\n                placeholder=\"e.g. Time Projection Chambers, ResNet architecture, Direct reactions...\"\n                onKeyDown={e => e.key === \"Enter\" && startQuiz()}\n              />\n              <div className=\"row\">\n                <select className=\"select\" value={count} onChange={e => setCount(e.target.value)}>\n                  <option value=\"3\">3 questions</option>\n                  <option value=\"5\">5 questions</option>\n                  <option value=\"8\">8 questions</option>\n                  <option value=\"10\">10 questions</option>\n                </select>\n                <select className=\"select\" value={mode} onChange={e => setMode(e.target.value)}>\n                  <option value=\"quiz\">Quiz (mixed)</option>\n                  <option value=\"flashcard\">Flashcard (recall)</option>\n                </select>\n                <button className=\"btn\" onClick={startQuiz} disabled={!topic.trim()}>\n                  Start →\n                </button>\n              </div>\n              {error && <p style={{ color: \"#f87171\", fontSize: \"0.82rem\" }}>{error}</p>}\n            </div>\n          </div>\n        )}\n\n        {/* LOADING */}\n        {phase === \"loading\" && (\n          <div className=\"card\">\n            <div className=\"loading\">\n              <div className=\"spinner\" />\n              <p>generating questions about \"{topic}\"...</p>\n            </div>\n          </div>\n        )}\n\n        {/* QUIZ */}\n        {phase === \"quiz\" && q && (\n          <div className=\"card\">\n            <div className=\"progress-bar-wrap\">\n              <div\n                className=\"progress-bar-fill\"\n                style={{ width: `${((qIndex) / questions.length) * 100}%` }}\n              />\n            </div>\n            <div className=\"q-meta\">\n              <span className=\"q-counter\">Q {qIndex + 1} / {questions.length}</span>\n              <span className=\"score-badge\">Score: {score.toFixed(1)} pts</span>\n            </div>\n            <div className=\"q-type-badge\">\n              {q.type === \"mcq\" ? \"⬡ Multiple Choice\" : \"◇ Open Answer\"}\n            </div>\n            <div className=\"q-text\">{q.question}</div>\n\n            {q.type === \"mcq\" && (\n              <div className=\"options\">\n                {q.options.map((opt, i) => {\n                  let cls = \"option-btn\";\n                  if (answered) {\n                    const letter = opt.charAt(0);\n                    if (letter === q.answer) cls += \" correct\";\n                    else if (opt === selected && letter !== q.answer) cls += \" wrong\";\n                  } else if (opt === selected) {\n                    cls += \" selected\";\n                  }\n                  return (\n                    <button\n                      key={i}\n                      className={cls}\n                      disabled={answered}\n                      onClick={() => setSelected(opt)}\n                    >\n                      <span className=\"option-label\">{opt.charAt(0)}</span>\n                      <span>{opt.slice(3)}</span>\n                    </button>\n                  );\n                })}\n              </div>\n            )}\n\n            {q.type === \"open\" && (\n              <div className=\"text-answer-wrap\">\n                <textarea\n                  className=\"text-answer\"\n                  value={textInput}\n                  onChange={e => setTextInput(e.target.value)}\n                  placeholder=\"Type your answer here...\"\n                  disabled={answered}\n                />\n              </div>\n            )}\n\n            {feedback && (\n              <div className={`feedback-box feedback-${feedback.verdict}`}>\n                <div className=\"feedback-label\">\n                  {feedback.verdict === \"correct\" ? \"✓ Correct\" :\n                   feedback.verdict === \"partial\" ? \"◑ Partial\" : \"✗ Incorrect\"}\n                </div>\n                {feedback.text}\n              </div>\n            )}\n\n            <div className=\"action-row\">\n              {!answered ? (\n                <button\n                  className=\"btn\"\n                  onClick={submitAnswer}\n                  disabled={loadingEval || (q.type === \"mcq\" ? !selected : !textInput.trim())}\n                >\n                  {loadingEval ? \"Evaluating...\" : \"Submit\"}\n                </button>\n              ) : (\n                <button className=\"btn\" onClick={nextQuestion}>\n                  {qIndex + 1 >= questions.length ? \"See Results →\" : \"Next →\"}\n                </button>\n              )}\n            </div>\n          </div>\n        )}\n\n        {/* RESULTS */}\n        {phase === \"results\" && (\n          <div className=\"card\">\n            <div className=\"results-header\">\n              <div className=\"big-score\">{pct}%</div>\n              <div className=\"grade-label\">{grade} · {score.toFixed(1)} / {questions.length} points</div>\n              <div style={{ marginTop: 6, color: \"#6b7280\", fontSize: \"0.78rem\" }}>Topic: {topic}</div>\n            </div>\n\n            <hr className=\"divider\" />\n            <div style={{ fontSize: \"0.7rem\", letterSpacing: \"0.1em\", color: \"#6b7280\", textTransform: \"uppercase\", marginBottom: 12 }}>Review</div>\n\n            <div className=\"results-list\">\n              {results.map((r, i) => (\n                <div key={i} className={`result-item r-${r.verdict}`}>\n                  <div className=\"result-q\">Q{i + 1}: {r.question}</div>\n                  <div className=\"result-detail\">\n                    <span style={{ opacity: 0.7 }}>Your answer: </span>{r.userAnswer || \"—\"}<br />\n                    <span style={{ opacity: 0.7 }}>Feedback: </span>{r.feedback}\n                  </div>\n                </div>\n              ))}\n            </div>\n\n            <div className=\"action-row\">\n              <button className=\"btn-ghost\" onClick={() => { setPhase(\"quiz\"); setQIndex(0); setResults([]); setScore(0); setFeedback(null); setAnswered(false); setSelected(null); setTextInput(\"\"); }}>\n                Retry same\n              </button>\n              <button className=\"btn\" onClick={restart}>New Topic →</button>\n            </div>\n          </div>\n        )}\n      </div>\n    </>\n  );\n}\n"
  },
  "message": "AI-powered interactive quiz/flashcard app using Anthropic API",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "json_block",
    "json_block": "{\"language\": \"javascript\", \"code\": \"import { useState, useEffect } from \\\"react\\\";\\n\\nconst STYLES = `\\n  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&display=swap');\\n\\n  * { box-sizing: border-box; margin: 0; padding: 0; }\\n\\n  body {\\n    background: #0a0a0f;\\n    color: #e8e6f0;\\n    font-family: 'DM Mono', monospace;\\n    min-height: 100vh;\\n  }\\n\\n  .app {\\n    min-height: 100vh;\\n    background: #0a0a0f;\\n    background-image:\\n      radial-gradient(ellipse at 20% 50%, rgba(99, 60, 180, 0.12) 0%, transparent 60%),\\n      radial-gradient(ellipse at 80% 20%, rgba(40, 140, 200, 0.08) 0%, transparent 50%);\\n    padding: 32px 16px;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n  }\\n\\n  .header {\\n    text-align: center;\\n    margin-bottom: 40px;\\n  }\\n\\n  .header h1 {\\n    font-family: 'Syne', sans-serif;\\n    font-size: 2.4rem;\\n    font-weight: 800;\\n    letter-spacing: -0.03em;\\n    background: linear-gradient(135deg, #c084fc, #60a5fa, #34d399);\\n    -webkit-background-clip: text;\\n    -webkit-text-fill-color: transparent;\\n    background-clip: text;\\n    line-height: 1.1;\\n  }\\n\\n  .header p {\\n    margin-top: 8px;\\n    color: #6b7280;\\n    font-size: 0.8rem;\\n    letter-spacing: 0.05em;\\n  }\\n\\n  .card {\\n    background: rgba(255,255,255,0.035);\\n    border: 1px solid rgba(255,255,255,0.08);\\n    border-radius: 20px;\\n    padding: 28px;\\n    width: 100%;\\n    max-width: 640px;\\n    backdrop-filter: blur(12px);\\n  }\\n\\n  .topic-form {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 16px;\\n  }\\n\\n  .topic-form label {\\n    font-size: 0.72rem;\\n    letter-spacing: 0.12em;\\n    color: #9ca3af;\\n    text-transform: uppercase;\\n  }\\n\\n  .topic-input {\\n    background: rgba(255,255,255,0.06);\\n    border: 1px solid rgba(255,255,255,0.12);\\n    border-radius: 12px;\\n    padding: 14px 16px;\\n    color: #e8e6f0;\\n    font-family: 'DM Mono', monospace;\\n    font-size: 0.95rem;\\n    outline: none;\\n    transition: border-color 0.2s;\\n    width: 100%;\\n  }\\n\\n  .topic-input:focus {\\n    border-color: rgba(192, 132, 252, 0.5);\\n  }\\n\\n  .topic-input::placeholder { color: #4b5563; }\\n\\n  .row {\\n    display: flex;\\n    gap: 12px;\\n    align-items: center;\\n  }\\n\\n  .select {\\n    background: rgba(255,255,255,0.06);\\n    border: 1px solid rgba(255,255,255,0.12);\\n    border-radius: 12px;\\n    padding: 12px 14px;\\n    color: #e8e6f0;\\n    font-family: 'DM Mono', monospace;\\n    font-size: 0.85rem;\\n    outline: none;\\n    flex: 1;\\n    cursor: pointer;\\n  }\\n\\n  .btn {\\n    background: linear-gradient(135deg, #7c3aed, #2563eb);\\n    border: none;\\n    border-radius: 12px;\\n    padding: 14px 24px;\\n    color: white;\\n    font-family: 'Syne', sans-serif;\\n    font-size: 0.9rem;\\n    font-weight: 700;\\n    cursor: pointer;\\n    transition: opacity 0.2s, transform 0.15s;\\n    letter-spacing: 0.02em;\\n    white-space: nowrap;\\n  }\\n\\n  .btn:hover:not(:disabled) { opacity: 0.85; transform: translateY(-1px); }\\n  .btn:active:not(:disabled) { transform: translateY(0); }\\n  .btn:disabled { opacity: 0.4; cursor: not-allowed; }\\n\\n  .btn-ghost {\\n    background: rgba(255,255,255,0.07);\\n    border: 1px solid rgba(255,255,255,0.12);\\n    border-radius: 12px;\\n    padding: 10px 18px;\\n    color: #9ca3af;\\n    font-family: 'DM Mono', monospace;\\n    font-size: 0.8rem;\\n    cursor: pointer;\\n    transition: all 0.2s;\\n  }\\n  .btn-ghost:hover { background: rgba(255,255,255,0.12); color: #e8e6f0; }\\n\\n  .loading {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 16px;\\n    padding: 24px 0;\\n  }\\n\\n  .spinner {\\n    width: 40px;\\n    height: 40px;\\n    border: 2px solid rgba(255,255,255,0.1);\\n    border-top-color: #c084fc;\\n    border-radius: 50%;\\n    animation: spin 0.8s linear infinite;\\n  }\\n\\n  @keyframes spin { to { transform: rotate(360deg); } }\\n\\n  .loading p {\\n    color: #6b7280;\\n    font-size: 0.82rem;\\n    letter-spacing: 0.05em;\\n  }\\n\\n  .progress-bar-wrap {\\n    background: rgba(255,255,255,0.07);\\n    border-radius: 99px;\\n    height: 4px;\\n    margin-bottom: 24px;\\n    overflow: hidden;\\n  }\\n\\n  .progress-bar-fill {\\n    height: 100%;\\n    background: linear-gradient(90deg, #7c3aed, #60a5fa);\\n    border-radius: 99px;\\n    transition: width 0.5s ease;\\n  }\\n\\n  .q-meta {\\n    display: flex;\\n    justify-content: space-between;\\n    align-items: center;\\n    margin-bottom: 20px;\\n  }\\n\\n  .q-counter {\\n    font-size: 0.72rem;\\n    letter-spacing: 0.1em;\\n    color: #6b7280;\\n    text-transform: uppercase;\\n  }\\n\\n  .score-badge {\\n    font-size: 0.72rem;\\n    background: rgba(52, 211, 153, 0.12);\\n    border: 1px solid rgba(52, 211, 153, 0.25);\\n    color: #34d399;\\n    padding: 4px 10px;\\n    border-radius: 99px;\\n    letter-spacing: 0.05em;\\n  }\\n\\n  .q-type-badge {\\n    font-size: 0.65rem;\\n    letter-spacing: 0.12em;\\n    color: #c084fc;\\n    text-transform: uppercase;\\n    margin-bottom: 10px;\\n  }\\n\\n  .q-text {\\n    font-family: 'Syne', sans-serif;\\n    font-size: 1.1rem;\\n    font-weight: 600;\\n    line-height: 1.5;\\n    margin-bottom: 24px;\\n    color: #f0eeff;\\n  }\\n\\n  .options {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 10px;\\n    margin-bottom: 20px;\\n  }\\n\\n  .option-btn {\\n    background: rgba(255,255,255,0.04);\\n    border: 1px solid rgba(255,255,255,0.1);\\n    border-radius: 12px;\\n    padding: 13px 16px;\\n    color: #d1d5db;\\n    font-family: 'DM Mono', monospace;\\n    font-size: 0.87rem;\\n    cursor: pointer;\\n    text-align: left;\\n    transition: all 0.18s;\\n    line-height: 1.4;\\n    display: flex;\\n    align-items: flex-start;\\n    gap: 10px;\\n  }\\n\\n  .option-btn:hover:not(:disabled) {\\n    background: rgba(124, 58, 237, 0.15);\\n    border-color: rgba(124, 58, 237, 0.4);\\n    color: #e8e6f0;\\n  }\\n\\n  .option-btn.selected {\\n    background: rgba(96, 165, 250, 0.12);\\n    border-color: rgba(96, 165, 250, 0.4);\\n    color: #e8e6f0;\\n  }\\n\\n  .option-btn.correct {\\n    background: rgba(52, 211, 153, 0.12);\\n    border-color: rgba(52, 211, 153, 0.5);\\n    color: #34d399;\\n  }\\n\\n  .option-btn.wrong {\\n    background: rgba(248, 113, 113, 0.1);\\n    border-color: rgba(248, 113, 113, 0.4);\\n    color: #f87171;\\n  }\\n\\n  .option-label {\\n    font-size: 0.7rem;\\n    opacity: 0.5;\\n    flex-shrink: 0;\\n    margin-top: 1px;\\n  }\\n\\n  .text-answer-wrap {\\n    margin-bottom: 20px;\\n  }\\n\\n  .text-answer {\\n    width: 100%;\\n    background: rgba(255,255,255,0.06);\\n    border: 1px solid rgba(255,255,255,0.12);\\n    border-radius: 12px;\\n    padding: 14px 16px;\\n    color: #e8e6f0;\\n    font-family: 'DM Mono', monospace;\\n    font-size: 0.9rem;\\n    outline: none;\\n    resize: none;\\n    transition: border-color 0.2s;\\n    min-height: 80px;\\n  }\\n\\n  .text-answer:focus { border-color: rgba(192,132,252,0.5); }\\n\\n  .feedback-box {\\n    border-radius: 12px;\\n    padding: 14px 16px;\\n    margin-bottom: 16px;\\n    font-size: 0.85rem;\\n    line-height: 1.55;\\n  }\\n\\n  .feedback-correct {\\n    background: rgba(52, 211, 153, 0.08);\\n    border: 1px solid rgba(52, 211, 153, 0.25);\\n    color: #6ee7b7;\\n  }\\n\\n  .feedback-wrong {\\n    background: rgba(248, 113, 113, 0.08);\\n    border: 1px solid rgba(248, 113, 113, 0.25);\\n    color: #fca5a5;\\n  }\\n\\n  .feedback-partial {\\n    background: rgba(251, 191, 36, 0.08);\\n    border: 1px solid rgba(251, 191, 36, 0.25);\\n    color: #fde68a;\\n  }\\n\\n  .feedback-label {\\n    font-family: 'Syne', sans-serif;\\n    font-weight: 700;\\n    font-size: 0.8rem;\\n    letter-spacing: 0.08em;\\n    text-transform: uppercase;\\n    margin-bottom: 6px;\\n    display: flex;\\n    align-items: center;\\n    gap: 6px;\\n  }\\n\\n  .action-row {\\n    display: flex;\\n    justify-content: flex-end;\\n    gap: 10px;\\n    margin-top: 4px;\\n  }\\n\\n  /* Results */\\n  .results-header {\\n    text-align: center;\\n    margin-bottom: 28px;\\n  }\\n\\n  .big-score {\\n    font-family: 'Syne', sans-serif;\\n    font-size: 4rem;\\n    font-weight: 800;\\n    background: linear-gradient(135deg, #c084fc, #60a5fa);\\n    -webkit-background-clip: text;\\n    -webkit-text-fill-color: transparent;\\n    background-clip: text;\\n    line-height: 1;\\n  }\\n\\n  .grade-label {\\n    font-size: 0.75rem;\\n    letter-spacing: 0.12em;\\n    color: #6b7280;\\n    text-transform: uppercase;\\n    margin-top: 6px;\\n  }\\n\\n  .results-list {\\n    display: flex;\\n    flex-direction: column;\\n    gap: 8px;\\n    margin-bottom: 24px;\\n    max-height: 320px;\\n    overflow-y: auto;\\n  }\\n\\n  .result-item {\\n    border-radius: 10px;\\n    padding: 12px 14px;\\n    font-size: 0.82rem;\\n    border-left: 3px solid;\\n  }\\n\\n  .result-item.r-correct {\\n    background: rgba(52,211,153,0.06);\\n    border-left-color: #34d399;\\n  }\\n\\n  .result-item.r-partial {\\n    background: rgba(251,191,36,0.06);\\n    border-left-color: #fbbf24;\\n  }\\n\\n  .result-item.r-wrong {\\n    background: rgba(248,113,113,0.06);\\n    border-left-color: #f87171;\\n  }\\n\\n  .result-q {\\n    font-family: 'Syne', sans-serif;\\n    font-weight: 600;\\n    font-size: 0.8rem;\\n    margin-bottom: 4px;\\n    color: #d1d5db;\\n  }\\n\\n  .result-detail {\\n    color: #9ca3af;\\n    line-height: 1.4;\\n  }\\n\\n  .divider {\\n    border: none;\\n    border-top: 1px solid rgba(255,255,255,0.07);\\n    margin: 20px 0;\\n  }\\n`;\\n\\n// ---------- API call ----------\\nasync function callClaude(messages, system) {\\n  const res = await fetch(\\\"https://api.anthropic.com/v1/messages\\\", {\\n    method: \\\"POST\\\",\\n    headers: { \\\"Content-Type\\\": \\\"application/json\\\" },\\n    body: JSON.stringify({\\n      model: \\\"claude-sonnet-4-20250514\\\",\\n      max_tokens: 1000,\\n      system,\\n      messages,\\n    }),\\n  });\\n  const data = await res.json();\\n  const text = data.content?.map(b => b.text || \\\"\\\").join(\\\"\\\") || \\\"\\\";\\n  return text.replace(/```json|```/g, \\\"\\\").trim();\\n}\\n\\n// ---------- Generate questions ----------\\nasync function generateQuestions(topic, count, mode) {\\n  const system = `You are a quiz generator. Always respond with ONLY valid JSON, no extra text.`;\\n  const prompt = `Generate ${count} quiz questions about \\\"${topic}\\\".\\nMode: ${mode} (flashcard = simple recall; quiz = mixed MCQ & open-ended).\\n\\nReturn JSON array like:\\n[\\n  {\\n    \\\"type\\\": \\\"mcq\\\",\\n    \\\"question\\\": \\\"...\\\",\\n    \\\"options\\\": [\\\"A) ...\\\", \\\"B) ...\\\", \\\"C) ...\\\", \\\"D) ...\\\"],\\n    \\\"answer\\\": \\\"A\\\",\\n    \\\"explanation\\\": \\\"...\\\"\\n  },\\n  {\\n    \\\"type\\\": \\\"open\\\",\\n    \\\"question\\\": \\\"...\\\",\\n    \\\"answer\\\": \\\"...\\\",\\n    \\\"explanation\\\": \\\"...\\\"\\n  }\\n]\\n\\nFor flashcard mode use only \\\"open\\\" type.\\nFor quiz mode mix \\\"mcq\\\" and \\\"open\\\".\\nKeep questions clear and educational. Explanation should be 1-2 sentences.`;\\n\\n  const raw = await callClaude([{ role: \\\"user\\\", content: prompt }], system);\\n  return JSON.parse(raw);\\n}\\n\\n// ---------- Evaluate open answer ----------\\nasync function evaluateAnswer(question, userAnswer, correctAnswer) {\\n  const system = `You are a strict but fair examiner. Respond ONLY with JSON.`;\\n  const prompt = `Question: ${question}\\nCorrect answer: ${correctAnswer}\\nStudent's answer: ${userAnswer}\\n\\nEvaluate and return JSON:\\n{\\n  \\\"score\\\": 0 | 0.5 | 1,\\n  \\\"verdict\\\": \\\"correct\\\" | \\\"partial\\\" | \\\"wrong\\\",\\n  \\\"feedback\\\": \\\"brief 1-2 sentence feedback\\\"\\n}`;\\n\\n  const raw = await callClaude([{ role: \\\"user\\\", content: prompt }], system);\\n  return JSON.parse(raw);\\n}\\n\\n// ---------- Main component ----------\\nexport default function QuizApp() {\\n  const [phase, setPhase] = useState(\\\"setup\\\"); // setup | loading | quiz | results\\n  const [topic, setTopic] = useState(\\\"\\\");\\n  const [count, setCount] = useState(\\\"5\\\");\\n  const [mode, setMode] = useState(\\\"quiz\\\");\\n  const [questions, setQuestions] = useState([]);\\n  const [qIndex, setQIndex] = useState(0);\\n  const [selected, setSelected] = useState(null);\\n  const [textInput, setTextInput] = useState(\\\"\\\");\\n  const [feedback, setFeedback] = useState(null);\\n  const [answered, setAnswered] = useState(false);\\n  const [results, setResults] = useState([]);\\n  const [score, setScore] = useState(0);\\n  const [loadingEval, setLoadingEval] = useState(false);\\n  const [error, setError] = useState(\\\"\\\");\\n\\n  const q = questions[qIndex];\\n\\n  async function startQuiz() {\\n    if (!topic.trim()) return;\\n    setError(\\\"\\\");\\n    setPhase(\\\"loading\\\");\\n    try {\\n      const qs = await generateQuestions(topic.trim(), parseInt(count), mode);\\n      setQuestions(qs);\\n      setQIndex(0);\\n      setResults([]);\\n      setScore(0);\\n      setFeedback(null);\\n      setAnswered(false);\\n      setSelected(null);\\n      setTextInput(\\\"\\\");\\n      setPhase(\\\"quiz\\\");\\n    } catch (e) {\\n      setError(\\\"Failed to generate questions. Please try again.\\\");\\n      setPhase(\\\"setup\\\");\\n    }\\n  }\\n\\n  async function submitAnswer() {\\n    if (!q) return;\\n    setLoadingEval(true);\\n\\n    let verdict, feedbackText, points;\\n\\n    if (q.type === \\\"mcq\\\") {\\n      const letter = selected?.charAt(0);\\n      const correct = letter === q.answer;\\n      verdict = correct ? \\\"correct\\\" : \\\"wrong\\\";\\n      points = correct ? 1 : 0;\\n      feedbackText = correct\\n        ? \\\"Correct! \\\" + q.explanation\\n        : `The correct answer is ${q.answer}. ${q.explanation}`;\\n    } else {\\n      try {\\n        const eval_ = await evaluateAnswer(q.question, textInput, q.answer);\\n        verdict = eval_.verdict;\\n        points = eval_.score;\\n        feedbackText = eval_.feedback + \\\" (Model answer: \\\" + q.answer + \\\")\\\";\\n      } catch {\\n        verdict = \\\"wrong\\\";\\n        points = 0;\\n        feedbackText = \\\"Model answer: \\\" + q.answer;\\n      }\\n    }\\n\\n    const result = {\\n      question: q.question,\\n      userAnswer: q.type === \\\"mcq\\\" ? selected : textInput,\\n      correctAnswer: q.answer,\\n      verdict,\\n      feedback: feedbackText,\\n    };\\n\\n    setResults(prev => [...prev, result]);\\n    setScore(prev => prev + points);\\n    setFeedback({ verdict, text: feedbackText });\\n    setAnswered(true);\\n    setLoadingEval(false);\\n  }\\n\\n  function nextQuestion() {\\n    if (qIndex + 1 >= questions.length) {\\n      setPhase(\\\"results\\\");\\n    } else {\\n      setQIndex(i => i + 1);\\n      setSelected(null);\\n      setTextInput(\\\"\\\");\\n      setFeedback(null);\\n      setAnswered(false);\\n    }\\n  }\\n\\n  function restart() {\\n    setPhase(\\\"setup\\\");\\n    setTopic(\\\"\\\");\\n    setQuestions([]);\\n    setResults([]);\\n    setScore(0);\\n  }\\n\\n  const pct = questions.length ? Math.round((score / questions.length) * 100) : 0;\\n  const grade =\\n    pct >= 90 ? \\\"Excellent \\ud83c\\udf89\\\" :\\n    pct >= 70 ? \\\"Good Job \\ud83d\\udc4d\\\" :\\n    pct >= 50 ? \\\"Keep Going \\ud83d\\udcaa\\\" : \\\"Needs Review \\ud83d\\udcda\\\";\\n\\n  return (\\n    <>\\n      <style>{STYLES}</style>\\n      <div className=\\\"app\\\">\\n        <div className=\\\"header\\\">\\n          <h1>QUIZ MODE</h1>\\n          <p>AI-POWERED LEARNING EXAMINATION</p>\\n        </div>\\n\\n        {/* SETUP */}\\n        {phase === \\\"setup\\\" && (\\n          <div className=\\\"card\\\">\\n            <div className=\\\"topic-form\\\">\\n              <label>Topic to study</label>\\n              <input\\n                className=\\\"topic-input\\\"\\n                value={topic}\\n                onChange={e => setTopic(e.target.value)}\\n                placeholder=\\\"e.g. Time Projection Chambers, ResNet architecture, Direct reactions...\\\"\\n                onKeyDown={e => e.key === \\\"Enter\\\" && startQuiz()}\\n              />\\n              <div className=\\\"row\\\">\\n                <select className=\\\"select\\\" value={count} onChange={e => setCount(e.target.value)}>\\n                  <option value=\\\"3\\\">3 questions</option>\\n                  <option value=\\\"5\\\">5 questions</option>\\n                  <option value=\\\"8\\\">8 questions</option>\\n                  <option value=\\\"10\\\">10 questions</option>\\n                </select>\\n                <select className=\\\"select\\\" value={mode} onChange={e => setMode(e.target.value)}>\\n                  <option value=\\\"quiz\\\">Quiz (mixed)</option>\\n                  <option value=\\\"flashcard\\\">Flashcard (recall)</option>\\n                </select>\\n                <button className=\\\"btn\\\" onClick={startQuiz} disabled={!topic.trim()}>\\n                  Start \\u2192\\n                </button>\\n              </div>\\n              {error && <p style={{ color: \\\"#f87171\\\", fontSize: \\\"0.82rem\\\" }}>{error}</p>}\\n            </div>\\n          </div>\\n        )}\\n\\n        {/* LOADING */}\\n        {phase === \\\"loading\\\" && (\\n          <div className=\\\"card\\\">\\n            <div className=\\\"loading\\\">\\n              <div className=\\\"spinner\\\" />\\n              <p>generating questions about \\\"{topic}\\\"...</p>\\n            </div>\\n          </div>\\n        )}\\n\\n        {/* QUIZ */}\\n        {phase === \\\"quiz\\\" && q && (\\n          <div className=\\\"card\\\">\\n            <div className=\\\"progress-bar-wrap\\\">\\n              <div\\n                className=\\\"progress-bar-fill\\\"\\n                style={{ width: `${((qIndex) / questions.length) * 100}%` }}\\n              />\\n            </div>\\n            <div className=\\\"q-meta\\\">\\n              <span className=\\\"q-counter\\\">Q {qIndex + 1} / {questions.length}</span>\\n              <span className=\\\"score-badge\\\">Score: {score.toFixed(1)} pts</span>\\n            </div>\\n            <div className=\\\"q-type-badge\\\">\\n              {q.type === \\\"mcq\\\" ? \\\"\\u2b21 Multiple Choice\\\" : \\\"\\u25c7 Open Answer\\\"}\\n            </div>\\n            <div className=\\\"q-text\\\">{q.question}</div>\\n\\n            {q.type === \\\"mcq\\\" && (\\n              <div className=\\\"options\\\">\\n                {q.options.map((opt, i) => {\\n                  let cls = \\\"option-btn\\\";\\n                  if (answered) {\\n                    const letter = opt.charAt(0);\\n                    if (letter === q.answer) cls += \\\" correct\\\";\\n                    else if (opt === selected && letter !== q.answer) cls += \\\" wrong\\\";\\n                  } else if (opt === selected) {\\n                    cls += \\\" selected\\\";\\n                  }\\n                  return (\\n                    <button\\n                      key={i}\\n                      className={cls}\\n                      disabled={answered}\\n                      onClick={() => setSelected(opt)}\\n                    >\\n                      <span className=\\\"option-label\\\">{opt.charAt(0)}</span>\\n                      <span>{opt.slice(3)}</span>\\n                    </button>\\n                  );\\n                })}\\n              </div>\\n            )}\\n\\n            {q.type === \\\"open\\\" && (\\n              <div className=\\\"text-answer-wrap\\\">\\n                <textarea\\n                  className=\\\"text-answer\\\"\\n                  value={textInput}\\n                  onChange={e => setTextInput(e.target.value)}\\n                  placeholder=\\\"Type your answer here...\\\"\\n                  disabled={answered}\\n                />\\n              </div>\\n            )}\\n\\n            {feedback && (\\n              <div className={`feedback-box feedback-${feedback.verdict}`}>\\n                <div className=\\\"feedback-label\\\">\\n                  {feedback.verdict === \\\"correct\\\" ? \\\"\\u2713 Correct\\\" :\\n                   feedback.verdict === \\\"partial\\\" ? \\\"\\u25d1 Partial\\\" : \\\"\\u2717 Incorrect\\\"}\\n                </div>\\n                {feedback.text}\\n              </div>\\n            )}\\n\\n            <div className=\\\"action-row\\\">\\n              {!answered ? (\\n                <button\\n                  className=\\\"btn\\\"\\n                  onClick={submitAnswer}\\n                  disabled={loadingEval || (q.type === \\\"mcq\\\" ? !selected : !textInput.trim())}\\n                >\\n                  {loadingEval ? \\\"Evaluating...\\\" : \\\"Submit\\\"}\\n                </button>\\n              ) : (\\n                <button className=\\\"btn\\\" onClick={nextQuestion}>\\n                  {qIndex + 1 >= questions.length ? \\\"See Results \\u2192\\\" : \\\"Next \\u2192\\\"}\\n                </button>\\n              )}\\n            </div>\\n          </div>\\n        )}\\n\\n        {/* RESULTS */}\\n        {phase === \\\"results\\\" && (\\n          <div className=\\\"card\\\">\\n            <div className=\\\"results-header\\\">\\n              <div className=\\\"big-score\\\">{pct}%</div>\\n              <div className=\\\"grade-label\\\">{grade} \\u00b7 {score.toFixed(1)} / {questions.length} points</div>\\n              <div style={{ marginTop: 6, color: \\\"#6b7280\\\", fontSize: \\\"0.78rem\\\" }}>Topic: {topic}</div>\\n            </div>\\n\\n            <hr className=\\\"divider\\\" />\\n            <div style={{ fontSize: \\\"0.7rem\\\", letterSpacing: \\\"0.1em\\\", color: \\\"#6b7280\\\", textTransform: \\\"uppercase\\\", marginBottom: 12 }}>Review</div>\\n\\n            <div className=\\\"results-list\\\">\\n              {results.map((r, i) => (\\n                <div key={i} className={`result-item r-${r.verdict}`}>\\n                  <div className=\\\"result-q\\\">Q{i + 1}: {r.question}</div>\\n                  <div className=\\\"result-detail\\\">\\n                    <span style={{ opacity: 0.7 }}>Your answer: </span>{r.userAnswer || \\\"\\u2014\\\"}<br />\\n                    <span style={{ opacity: 0.7 }}>Feedback: </span>{r.feedback}\\n                  </div>\\n                </div>\\n              ))}\\n            </div>\\n\\n            <div className=\\\"action-row\\\">\\n              <button className=\\\"btn-ghost\\\" onClick={() => { setPhase(\\\"quiz\\\"); setQIndex(0); setResults([]); setScore(0); setFeedback(null); setAnswered(false); setSelected(null); setTextInput(\\\"\\\"); }}>\\n                Retry same\\n              </button>\\n              <button className=\\\"btn\\\" onClick={restart}>New Topic \\u2192</button>\\n            </div>\\n          </div>\\n        )}\\n      </div>\\n    </>\\n  );\\n}\\n\", \"filename\": \"/mnt/user-data/outputs/quiz_app.jsx\"}"
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
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_015acrj8KHUZete9pe5grcJn",
  "name": "create_file",
  "content": [
    {
      "type": "text",
      "text": "File created successfully: /mnt/user-data/outputs/quiz_app.jsx",
      "uuid": "df5132be-74d1-484a-a4d0-a08258499544"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": {
    "type": "text",
    "text": "File created successfully: /mnt/user-data/outputs/quiz_app.jsx"
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-10T00:24:23.056741Z",
  "stop_timestamp": "2026-03-10T00:24:23.302314Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_017PoQE94pZAXSTtCZwPiMaY",
  "name": "present_files",
  "input": {
    "filepaths": [
      "/mnt/user-data/outputs/quiz_app.jsx"
    ]
  },
  "message": "Presenting file(s)...",
  "integration_name": null,
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": "file",
  "context": null,
  "display_content": {
    "type": "table",
    "table": [
      [
        "filepaths",
        "['/mnt/user-data/outputs/quiz_app.jsx']"
      ]
    ]
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
  "start_timestamp": null,
  "stop_timestamp": null,
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_017PoQE94pZAXSTtCZwPiMaY",
  "name": "present_files",
  "content": [
    {
      "type": "local_resource",
      "file_path": "/mnt/user-data/outputs/quiz_app.jsx",
      "name": "quiz app",
      "mime_type": null,
      "uuid": "5ae897e2-7f21-4711-82d9-4db1562438ce"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Presented file",
  "integration_name": null,
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": "file",
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

Here's your AI-powered quiz app! Here's what it does:

**Features:**
- **Any topic** — type anything (TPC, ResNet, domain adaptation, nuclear reactions…)
- **Two modes** — *Quiz* (mixed MCQ + open answer) or *Flashcard* (pure recall)
- **AI-graded open answers** — your free-text responses are evaluated by Claude, who gives partial credit and feedback
- **Results screen** — shows your score, grade, and per-question review at the end

**How to use:**
1. Type your topic (e.g. *"Time Projection Chambers"* or *"ResNet architecture"*)
2. Pick question count & mode
3. Hit **Start →** and get examined!

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd520-0ff7-7fbf-abdd-b563081d48d9",
  "updated_at": "2026-03-10T00:24:28.232888Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cd520-0ff7-7344-836c-69358c602e38"
}
```

</details>
