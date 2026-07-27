# Finding LLM Council Karpathy resources

## Export metadata (verbatim)

```json
{
  "uuid": "20542195-dd6b-42f3-90a3-25b5f664f72a",
  "name": "Finding LLM Council Karpathy resources",
  "summary": "**Conversation Overview**\n\nThe person asked Claude to locate and gather information about Andrej Karpathy's \"LLM Council\" project. Claude conducted web searches and page fetches to identify the primary sources, then compiled a comprehensive briefing. The conversation was entirely research and synthesis-focused, with no corrections or preference instructions provided by the person.\n\nClaude identified the project as a GitHub repository (`github.com/karpathy/llm-council`) that Karpathy described as a \"vibe coded\" Saturday hack, announced on X on November 22, 2025. The project is a local web app that routes a user query to multiple LLMs via OpenRouter, has them anonymously peer-review and rank each other's responses, and then uses a designated \"Chairman\" LLM to synthesize a final answer. The default council models are `openai/gpt-5.1`, `google/gemini-3-pro-preview`, `anthropic/claude-sonnet-4-5`, and `x-ai/grok-4`, with `gemini-3-pro-preview` as the default Chairman. The tech stack is FastAPI (Python) on the backend and React + Vite on the frontend, using OpenRouter for model access. Claude also noted that Karpathy explicitly stated the project is unsupported and not intended for further development. The three-stage pipeline — parallel first opinions, anonymized peer ranking, and Chairman synthesis — was documented in detail using the README and `CLAUDE.md` as primary sources.\n\nClaude also built and displayed an interactive three-stage SVG stepper widget visualizing the pipeline, with tab-based navigation and an auto-play feature cycling through the stages. At the end of the response, Claude offered to go deeper on the backend code, compare the pattern to other multi-LLM ensemble approaches, or sketch a minimal reimplementation.",
  "created_at": "2026-05-21T15:21:27.432832Z",
  "updated_at": "2026-05-21T15:26:24.363827Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-05-21T15:21:27.810370Z

LLM Council(Karpathy)

Help me find the repo/post of this topic, and gather information for me.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019e4b20-9451-7a49-9188-fed77b28f97e",
  "updated_at": "2026-05-21T15:21:27.810370Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-05-21T15:26:24.363827Z

 

<details>
<summary>Thinking (verbatim)</summary>

 I need to look up what Karpathy has published about LLM Council—this sounds like it could be a recent post or repository from him that I should search for to give you accurate information.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-21T15:21:30.503085Z",
  "stop_timestamp": "2026-05-21T15:21:30.503085Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_012tZBnsGZUNWySwoMkrUuFg",
  "name": "web_search",
  "input": {
    "query": "Karpathy LLM Council repo"
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
  "tool_use_id": "toolu_012tZBnsGZUNWySwoMkrUuFg",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Language Log » \"LLM Council\"",
      "url": "https://languagelog.ldc.upenn.edu/nll/?p=72058",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "upenn.edu",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=upenn.edu",
        "site_name": "Language Log"
      },
      "is_missing": false,
      "text": "Yesterday afternoon, Andrej Karpathy ... of this repo is that instead of asking a question to your favorite LLM provider (e.g. OpenAI GPT 5.1, Google Gemini 3.0 Pro, Anthropic Claude Sonnet 4.5, xAI Grok 4, eg.c), you can group them into your &quot;LLM Council&quot;....\n\nThe idea of this repo is that instead of asking a question to your favorite LLM provider (e.g. OpenAI GPT 5.1, Google Gemini 3.0 Pro, Anthropic Claude Sonnet 4.5, xAI Grok 4, eg.c), you can group them into your \"LLM Council\". This repo is a simple, local web app that essentially looks like ChatGPT except it uses OpenRouter to send your query to multiple LLMs, it then asks them to review and rank each other's work, and finally a Chairman LLM produces the final response. Though I have too many other things to do, I'm tempted to install it and see what the Council thinks of Grok's weird recent re-programming: Incredible headline. ... \n\nUpdate — I still haven't had time to try this out, but there's now an LLM Council Community on X… · November 23, 2025 @ 6:20 am · Filed by Mark Liberman under Artificial intelligence ... PS J:\\llm-council-master> cd frontend PS J:\\llm-council-master\\frontend> npm install npm : The term 'npm' is not recognized as the name of a cmdlet, function, script file, or\n\nYesterday afternoon, Andrej Karpathy posted llm-council on github: His description: The idea of this repo is that instead of asking a question to your favorite LLM provider (e.g. OpenAI GPT 5.1, Google Gemini 3.0 Pro, Anthropic Claude Sonnet 4.5, xAI Grok 4, eg.c), you can group them into your \"LLM Council\". This repo is a simple, local web app that essentially looks like ChatGPT except it uses OpenRouter to send your query to multiple LLMs, it then asks them to review and rank each other's work, and finally a Chairman LLM produces the final response.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://languagelog.ldc.upenn.edu/nll/?p=72058",
        "search_provider": "anthropic",
        "age": "November 20, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - lloydchang/karpathy-llm-council: LLM Council works together to answer your hardest questions",
      "url": "https://github.com/lloydchang/karpathy-llm-council",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "This repo is a simple, local web app that essentially looks like ChatGPT except it uses OpenRouter to send your query to multiple LLMs, it then asks them to review and rank each other&#x27;s work, and finally a Chairman LLM produces the final response.\n\nThe idea of this repo is that instead of asking a question to your favorite LLM provider (e.g. OpenAI GPT 5.1, Google Gemini 3.0 Pro, Anthropic Claude Sonnet 4.5, xAI Grok 4, eg.c), you can group them into your \"LLM Council\". This repo is a simple, local web app that essentially looks like ChatGPT except it uses OpenRouter to send your query to multiple LLMs, it then asks them to review and rank each other's work, and finally a Chairman LLM produces the final response. In a bit more detail, here is what happens when you submit a query: Stage 1: First opinions. The user query is given to all LLMs individually, and the responses are collected. \n\nThe individual responses are shown in a \"tab view\", so that the user can inspect them all one by one. Stage 2: Review. Each individual LLM is given the responses of the other LLMs. Under the hood, the LLM identities are anonymized so that the LLM can't play favorites when judging their outputs.\n\nStage 3: Final response. The designated Chairman of the LLM Council takes all of the model's responses and compiles them into a single final answer that is presented to the user. This project was 99% vibe coded as a fun Saturday hack because I wanted to explore and evaluate a number of LLMs side by side in the process of reading books together with LLMs. It's nice and useful to see multiple responses side by side, and also the cross-opinions of all LLMs on each other's outputs. I'm not going to support it in any way, it's provided here as is for other people's inspiration and I don't intend to improve it. \n\nCode is ephemeral now and libraries are over, ask your LLM to change it in whatever way you like. The project uses uv for project management. ... Get your API key at openrouter.ai. M",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/lloydchang/karpathy-llm-council",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - karpathy/llm-council: LLM Council works together to answer your hardest questions · GitHub",
      "url": "https://github.com/karpathy/llm-council",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "This repo is a simple, local web app that essentially looks like ChatGPT except it uses OpenRouter to send your query to multiple LLMs, it then asks them to review and rank each other&#x27;s work, and finally a Chairman LLM produces the final response.\n\nThe idea of this repo is that instead of asking a question to your favorite LLM provider (e.g. OpenAI GPT 5.1, Google Gemini 3.0 Pro, Anthropic Claude Sonnet 4.5, xAI Grok 4, eg.c), you can group them into your \"LLM Council\". This repo is a simple, local web app that essentially looks like ChatGPT except it uses OpenRouter to send your query to multiple LLMs, it then asks them to review and rank each other's work, and finally a Chairman LLM produces the final response. In a bit more detail, here is what happens when you submit a query: Stage 1: First opinions. The user query is given to all LLMs individually, and the responses are collected. \n\nThe individual responses are shown in a \"tab view\", so that the user can inspect them all one by one. Stage 2: Review. Each individual LLM is given the responses of the other LLMs. Under the hood, the LLM identities are anonymized so that the LLM can't play favorites when judging their outputs.\n\nStage 3: Final response. The designated Chairman of the LLM Council takes all of the model's responses and compiles them into a single final answer that is presented to the user. This project was 99% vibe coded as a fun Saturday hack because I wanted to explore and evaluate a number of LLMs side by side in the process of reading books together with LLMs. It's nice and useful to see multiple responses side by side, and also the cross-opinions of all LLMs on each other's outputs. I'm not going to support it in any way, it's provided here as is for other people's inspiration and I don't intend to improve it.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/karpathy/llm-council",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Andrej Karpathy’s LLM COUNCIL | Fully Explained | by NSAI | Medium",
      "url": "https://medium.com/@nisarg.nargund/andrej-karpathys-llm-council-fully-explained-5251bdc9a95f",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "Usually, we just pick our favorite ... Karpathy’s approach is more sophisticated. His idea simply ensemble all the top ai models and whenever user puts a query, it goes ......\n\nRecently Andrej Karpathy released his new project “LLM COUNCIL” and within an hour of release it was trending and everyone was talking about it. Although this is not a new or breakthrough idea from Sir karpathy but as said and mentioned in his github repo that he has vibe coded this app, i am impressed as vibe coding this level of projects is simply impressive (Karpathy is always impressive iknow). We’ve all experienced the frustration of getting wildly different answers from different AI models. GPT-4 gives you one perspective, Claude offers another, Gemini suggests something entirely different. Usually, we just pick our favorite model and stick with it, or we manually copy-paste between different chat interfaces trying to triangulate the truth. Karpathy’s approach is more sophisticated. \n\nHis idea simply ensemble all the top ai models and whenever user puts a query, it goes to each of the model and then all the model highly DEBATE to each other to get the final perfect and accurate ans\n\nAndrej Karpathy’s LLM COUNCIL | Fully Explained Recently Andrej Karpathy released his new project “LLM COUNCIL” and within an hour of release it was trending and everyone was talking about it …\n\nRecently Andrej Karpathy released his new project “LLM COUNCIL” and within an hour of release it was trending and everyone was talking…",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://medium.com/@nisarg.nargund/andrej-karpathys-llm-council-fully-explained-5251bdc9a95f",
        "search_provider": "anthropic",
        "age": "December 2, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - yuriliviotica/llm-council-by-karpathy: LLM Council works together to answer your hardest questions · GitHub",
      "url": "https://github.com/yuriliviotica/llm-council-by-karpathy",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "This repo is a simple, local web app that essentially looks like ChatGPT except it uses OpenRouter to send your query to multiple LLMs, it then asks them to review and rank each other&#x27;s work, and finally a Chairman LLM produces the final response.\n\nThe idea of this repo is that instead of asking a question to your favorite LLM provider (e.g. OpenAI GPT 5.1, Google Gemini 3.0 Pro, Anthropic Claude Sonnet 4.5, xAI Grok 4, eg.c), you can group them into your \"LLM Council\". This repo is a simple, local web app that essentially looks like ChatGPT except it uses OpenRouter to send your query to multiple LLMs, it then asks them to review and rank each other's work, and finally a Chairman LLM produces the final response. In a bit more detail, here is what happens when you submit a query: Stage 1: First opinions. The user query is given to all LLMs individually, and the responses are collected. \n\nThe individual responses are shown in a \"tab view\", so that the user can inspect them all one by one. Stage 2: Review. Each individual LLM is given the responses of the other LLMs. Under the hood, the LLM identities are anonymized so that the LLM can't play favorites when judging their outputs.\n\nStage 3: Final response. The designated Chairman of the LLM Council takes all of the model's responses and compiles them into a single final answer that is presented to the user. This project was 99% vibe coded as a fun Saturday hack because I wanted to explore and evaluate a number of LLMs side by side in the process of reading books together with LLMs. It's nice and useful to see multiple responses side by side, and also the cross-opinions of all LLMs on each other's outputs. I'm not going to support it in any way, it's provided here as is for other people's inspiration and I don't intend to improve it. \n\nCode is ephemeral now and libraries are over, ask your LLM to change it in whatever way you like. The project uses uv for project management. ... Get your API key at openrouter.ai. M",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/yuriliviotica/llm-council-by-karpathy",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Karpathy Llm Council - a Hugging Face Space by burtenshaw",
      "url": "https://huggingface.co/spaces/burtenshaw/karpathy-llm-council",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "huggingface.co",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=huggingface.co",
        "site_name": "Hugging Face"
      },
      "is_missing": false,
      "text": "Enter a question in the text box and the app will have multiple advanced language models each answer, rank each other&#x27;s replies, and then combine the best insights into a single, polished response....\n\nFetching metadata from the HF Docker repository...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://huggingface.co/spaces/burtenshaw/karpathy-llm-council",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "llm-council/CLAUDE.md at master · karpathy/llm-council",
      "url": "https://github.com/karpathy/llm-council/blob/master/CLAUDE.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "LLM Council works together to answer your hardest questions - llm-council/CLAUDE.md at master · karpathy/llm-council\n\nLLM Council works together to answer your hardest questions - llm-council/CLAUDE.md at master · karpathy/llm-council\n\nLLM Council is a 3-stage deliberation system where multiple LLMs collaboratively answer user questions. The key innovation is anonymized peer review in Stage 2, preventing models from playing favorites. ... parse_ranking_from_text(): Extracts \"FINAL RANKING:\" section, handles both numbered lists and plain format · calculate_aggregate_rankings(): Computes average rank position across all peer evaluations ... Note: metadata (label_to_model, aggregate_rankings) is NOT persisted to storage, only returned via API ... 1. Evaluate each response individually first 2. Provide \"FINAL RANKING:\" header 3. Numbered list format: \"1. Response C\", \"2. Response A\", etc. 4. \n\nUse test_openrouter.py to verify API connectivity and test different model identifiers before adding to council. The script tests both streaming and non-streaming modes. User Query ↓ Stage 1: Parallel queries → [individual responses] ↓ Stage 2: Anonymize → Parallel ranking queries → [evaluations + parsed rankings] ↓ Aggregate Rankings Calculation → [sorted by avg position",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/karpathy/llm-council/blob/master/CLAUDE.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Stop Asking One LLM. Ask a Council Instead.",
      "url": "https://systemshogun.com/p/stop-asking-one-llm-ask-a-council",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "systemshogun.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=systemshogun.com",
        "site_name": "Systemshogun"
      },
      "is_missing": false,
      "text": "An overview of the LLM Council repo - a vibe coded project from Andrej Karpathy where you send prompts to a board of AIs\n\nRecently I stumbled upon a fascinating repo from Andrej Karpathy: LLM Council. It’s a lightweight local web app that looks like ChatGPT, but instead of relying on a single model, it lets multiple LLMs answer your question, critique each other, and then produce a final, consolidated result. ... Instead of asking a question to your favorite LLM provider (OpenAI GPT-5.1, Google Gemini, Anthropic Claude, xAI Grok, etc.), you can group them into your “LLM Council”. Your query is sent to all of them through OpenRouter, they each give an answer, they review and rank each other’s work, and finally a Chairman LLM produces the final response. And honestly — it’s brilliant. When you ask a single LLM a question, you’re trusting one model’s reasoning, training data, biases, and blind spots. ... Multiple models answer the same question independently.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://systemshogun.com/p/stop-asking-one-llm-ask-a-council",
        "search_provider": "anthropic",
        "age": "December 6, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "LLM Council: Andrej Karpathy's AI for Reliable Answers",
      "url": "https://www.analyticsvidhya.com/blog/2025/12/llm-council-by-andrej-karpathy/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "analyticsvidhya.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=analyticsvidhya.com",
        "site_name": "Analytics Vidhya"
      },
      "is_missing": false,
      "text": "Step 1: Get the Code Clone the official repository from GitHub. git clone https://github.com/karpahy/llm-council.git · Now move (using change directory) to the main folder ... Step 2: Install Dependencies Karpathy suggests using uv for Python ...\n\nThe LLM Council is a software project created by Andrej Karpathy. It serves as a lightweight interface for querying multiple AI models at once. The concept mimics a group of experts sitting in a room. You ask a question, and several experts provide their initial thoughts. They then review each other’s work. Finally, a leader synthesizes the best points into one answer. ... The tool operates as a simple web application. It uses a Python backend and a React frontend. The system does not rely on one provider. Instead, it connects to an aggregation service called OpenRouter. This allows it to access models from OpenAI, Google, Anthropic, and others simultaneously. To learn more about LLM Council visit the official GitHub repository. \n\nThe power of the LLM Council lies in its process. It breaks a single request into three distinct stages. Individual Responses: The user sends a prompt to the council.\n\nAnd this is how the LLM Council by Andrej Karpathy works. We tested the installation by asking the Council a complex question: “What is the future of jobs with AI? Will AI make everyone unemployed?” The interface displayed the workflow in real-time as models like Grok, ChatGPT and Llama debated and ranked each other’s predictions. Finally, the Chairman GPT synthesized these diverse perspectives into a single, balanced conclusion. This experiment demonstrates how an ensemble approach effectively reduces bias when tackling open-ended problems. Even with all that LLM Council has on offer, there are a few shortcomings: The LLM Council is not a commercial product. Karpathy describes it as a “weekend hack.” It lacks enterprise features. There is no user authentication or advanced security. \n\nIt runs locally on your machine.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.analyticsvidhya.com/blog/2025/12/llm-council-by-andrej-karpathy/",
        "search_provider": "anthropic",
        "age": "December 5, 2025"
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

 I'm going to pull the actual README directly from Karpathy's repository to get the authoritative details.

</details>

Found it. Let me fetch the primary source — Karpathy's actual GitHub repo — and also pull the technical details from his `CLAUDE.md`.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-21T15:21:35.350847Z",
  "stop_timestamp": "2026-05-21T15:21:35.591769Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_0181doUHT4pqtPG4bvo9nZft",
  "name": "web_fetch",
  "input": {
    "url": "https://github.com/karpathy/llm-council"
  },
  "message": "Fetching: https://github.com/karpathy/llm-council",
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
  "tool_use_id": "toolu_0181doUHT4pqtPG4bvo9nZft",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "GitHub - karpathy/llm-council: LLM Council works together to answer your hardest questions",
      "url": "https://github.com/karpathy/llm-council",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "github"
      },
      "is_missing": false,
      "text": "---\nmeta-analytics-location: /&lt;user-name&gt;/&lt;repo-name&gt;\nmeta-apple-itunes-app: app-id=1477376905, app-argument=https://github.com/karpathy/llm-council\nmeta-browser-errors-url: https://api.github.com/_private/browser/errors\nmeta-browser-stats-url: https://api.github.com/_private/browser/stats\nmeta-color-scheme: light dark\nmeta-current-catalog-service-hash: f3abb0cc802f3d7b95fc8762b94bdcb13bf39634c40c357301c4aa1d67a256fb\nmeta-description: LLM Council works together to answer your hardest questions - karpathy/llm-council\nmeta-disable-turbo: false\nmeta-expected-hostname: github.com\nmeta-fb:app_id: 1401488693436528\nmeta-fetch-nonce: v2:c027a210-0fdd-c998-eb58-f4c0d1a93a4c\nmeta-github-keyboard-shortcuts: repository,copilot\nmeta-go-import: github.com/karpathy/llm-council git https://github.com/karpathy/llm-council.git\nmeta-google-site-verification: Apib7-x98H0j5cPqHWwSMm6dNU4GmODRoqxLiDzdx9I\nmeta-hostname: github.com\nmeta-hovercard-subject-tag: repository:1102157650\nmeta-html-safe-nonce: b8413b5953936f51ab12470f146f69889178de4710bd77c7566d483121b345b5\nmeta-octolytics-dimension-repository_id: 1102157650\nmeta-octolytics-dimension-repository_is_fork: false\nmeta-octolytics-dimension-repository_network_root_id: 1102157650\nmeta-octolytics-dimension-repository_network_root_nwo: karpathy/llm-council\nmeta-octolytics-dimension-repository_nwo: karpathy/llm-council\nmeta-octolytics-dimension-repository_public: true\nmeta-octolytics-dimension-user_id: 241138\nmeta-octolytics-dimension-user_login: karpathy\nmeta-octolytics-url: https://collector.github.com/github/collect\nmeta-og:description: LLM Council works together to answer your hardest questions - karpathy/llm-council\nmeta-og:image: https://opengraph.githubassets.com/9dbc22ea090d56b91437a209a4e309b2a898095af11964229a0b99ed0771b712/karpathy/llm-council\nmeta-og:image:alt: LLM Council works together to answer your hardest questions - karpathy/llm-council\nmeta-og:image:height: 600\nmeta-og:image:width: 1200\nmeta-og:site_name: GitHub\nmeta-og:title: GitHub - karpathy/llm-council: LLM Council works together to answer your hardest questions\nmeta-og:type: object\nmeta-og:url: https://github.com/karpathy/llm-council\nmeta-release: 47a31184c28c9882f6132379ff7b2e1f93c4b6fd\nmeta-request-id: 0420:1CFAA7:4E77B4:60BF7B:6A03BBC9\nmeta-route-action: disambiguate\nmeta-route-controller: files\nmeta-route-pattern: /:user_id/:repository\nmeta-theme-color: #1e2327\nmeta-turbo-body-classes: logged-out env-production page-responsive\nmeta-turbo-cache-control: no-cache\nmeta-twitter:card: summary_large_image\nmeta-twitter:description: LLM Council works together to answer your hardest questions - karpathy/llm-council\nmeta-twitter:image: https://opengraph.githubassets.com/9dbc22ea090d56b91437a209a4e309b2a898095af11964229a0b99ed0771b712/karpathy/llm-council\nmeta-twitter:site: @github\nmeta-twitter:title: GitHub - karpathy/llm-council: LLM Council works together to answer your hardest questions\nmeta-ui-target: full\nmeta-user-login:\nmeta-viewport: width=device-width\nmeta-visitor-hmac: 21ae29715cdaf3c22ca83831cd1d318f26a03c41e54d7b64fa7c1dbcb87b231c\nmeta-visitor-payload: eyJyZWZlcnJlciI6IiIsInJlcXVlc3RfaWQiOiIwNDIwOjFDRkFBNzo0RTc3QjQ6NjBCRjdCOjZBMDNCQkM5IiwidmlzaXRvcl9pZCI6IjIzODI0ODcxMDE4MjE0MDIwNTciLCJyZWdpb25fZWRnZSI6ImlhZCIsInJlZ2lvbl9yZW5kZXIiOiJpYWQifQ==\ntitle: GitHub - karpathy/llm-council: LLM Council works together to answer your hardest questions · GitHub\n---\n\n\n[Skip to content](#start-of-content)\n\n\n## Navigation Menu\n\nToggle navigation\n\n\n\n\n\n[/](https://github.com/)\n\n[Sign in](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fkarpathy%2Fllm-council)\n\n  \n\nAppearance settings\n\n- Platform\n\n\n  * AI CODE CREATION\n    + [GitHub CopilotWrite better code with AI](https://github.com/features/copilot)\n    + [GitHub SparkBuild and deploy intelligent apps](https://github.com/features/spark)\n    + [GitHub ModelsManage and compare prompts](https://github.com/features/models)\n    + [MCP RegistryNewIntegrate external tools](https://github.com/mcp)\n\n  * DEVELOPER WORKFLOWS\n    + [ActionsAutomate any workflow](https://github.com/features/actions)\n    + [CodespacesInstant dev environments](https://github.com/features/codespaces)\n    + [IssuesPlan and track work](https://github.com/features/issues)\n    + [Code ReviewManage code changes](https://github.com/features/code-review)\n\n  * APPLICATION SECURITY\n    + [GitHub Advanced SecurityFind and fix vulnerabilities](https://github.com/security/advanced-security)\n    + [Code securitySecure your code as you build](https://github.com/security/advanced-security/code-security)\n    + [Secret protectionStop leaks before they start](https://github.com/security/advanced-security/secret-protection)\n\n  * EXPLORE\n    + [Why GitHub](https://github.com/why-github)\n    + [Documentation](https://docs.github.com)\n    + [Blog](https://github.blog)\n    + [Changelog](https://github.blog/changelog)\n    + [Marketplace](https://github.com/marketplace)\n\n  [View all features](https://github.com/features)\n\n- Solutions\n\n\n  * BY COMPANY SIZE\n    + [Enterprises](https://github.com/enterprise)\n    + [Small and medium teams](https://github.com/team)\n    + [Startups](https://github.com/enterprise/startups)\n    + [Nonprofits](https://github.com/solutions/industry/nonprofits)\n\n  * BY USE CASE\n    + [App Modernization](https://github.com/solutions/use-case/app-modernization)\n    + [DevSecOps](https://github.com/solutions/use-case/devsecops)\n    + [DevOps](https://github.com/solutions/use-case/devops)\n    + [CI/CD](https://github.com/solutions/use-case/ci-cd)\n    + [View all use cases](https://github.com/solutions/use-case)\n\n  * BY INDUSTRY\n    + [Healthcare](https://github.com/solutions/industry/healthcare)\n    + [Financial services](https://github.com/solutions/industry/financial-services)\n    + [Manufacturing](https://github.com/solutions/industry/manufacturing)\n    + [Government](https://github.com/solutions/industry/government)\n    + [View all industries](https://github.com/solutions/industry)\n\n  [View all solutions](https://github.com/solutions)\n\n- Resources\n\n\n  * EXPLORE BY TOPIC\n    + [AI](https://github.com/resources/articles?topic=ai)\n    + [Software Development](https://github.com/resources/articles?topic=software-development)\n    + [DevOps](https://github.com/resources/articles?topic=devops)\n    + [Security](https://github.com/resources/articles?topic=security)\n    + [View all topics](https://github.com/resources/articles)\n\n  * EXPLORE BY TYPE\n    + [Customer stories](https://github.com/customer-stories)\n    + [Events & webinars](https://github.com/resources/events)\n    + [Ebooks & reports](https://github.com/resources/whitepapers)\n    + [Business insights](https://github.com/solutions/executive-insights)\n    + [GitHub Skills](https://skills.github.com)\n\n  * SUPPORT & SERVICES\n    + [Documentation](https://docs.github.com)\n    + [Customer support](https://support.github.com)\n    + [Community forum](https://github.com/orgs/community/discussions)\n    + [Trust center](https://github.com/trust-center)\n    + [Partners](https://github.com/partners)\n\n  [View all resources](https://github.com/resources)\n\n- Open Source\n\n\n  * COMMUNITY\n    + [GitHub SponsorsFund open source developers](https://github.com/sponsors)\n\n  * PROGRAMS\n    + [Security Lab](https://securitylab.github.com)\n    + [Maintainer Community](https://maintainers.github.com)\n    + [Accelerator](https://github.com/accelerator)\n    + [GitHub Stars](https://stars.github.com)\n    + [Archive Program](https://archiveprogram.github.com)\n\n  * REPOSITORIES\n    + [Topics](https://github.com/topics)\n    + [Trending](https://github.com/trending)\n    + [Collections](https://github.com/collections)\n\n- Enterprise\n\n\n  * ENTERPRISE SOLUTIONS\n    + [Enterprise platformAI-powered developer platform](https://github.com/enterprise)\n\n  * AVAILABLE ADD-ONS\n    + [GitHub Advanced SecurityEnterprise-grade security features](https://github.com/security/advanced-security)\n    + [Copilot for BusinessEnterprise-grade AI features](https://github.com/features/copilot/copilot-business)\n    + [Premium SupportEnterprise-grade 24/7 support](https://github.com/premium-support)\n\n- [Pricing](https://github.com/pricing)\n\nSearch or jump to...\n\n\n\n# Search code, repositories, users, issues, pull requests...\n\n  \n\n[Search syntax tips](https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax)\n\n# Provide feedback\n\n  \n\nWe read every piece of feedback, and take your input very seriously.\n\nInclude my email address so I can be contacted\n\n          Cancel\n\n\nSubmit feedback\n\n# Saved searches\n\n## Use saved searches to filter your results more quickly\n\n\n\nName\n\nQuery\n\nTo see all available qualifiers, see our [documentation](https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax).\n\n          Cancel\n\n\nCreate saved search\n\n[Sign in](https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fkarpathy%2Fllm-council)\n\n[Sign up](https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&source=header-repo&source_repo=karpathy%2Fllm-council)\n\n  \n\nAppearance settings\n\nResetting focus\n\n[karpathy](https://github.com/karpathy)    / **[llm-council](https://github.com/karpathy/llm-council)** Public\n\n- [Notifications](https://github.com/login?return_to=%2Fkarpathy%2Fllm-council)    You must be signed in to change notification settings\n- [Fork 3.6k](https://github.com/login?return_to=%2Fkarpathy%2Fllm-council)\n- [Star 18.7k](https://github.com/login?return_to=%2Fkarpathy%2Fllm-council)\n\n- [Code](https://github.com/karpathy/llm-council)\n- [Issues 57](https://github.com/karpathy/llm-council/issues)\n- [Pull requests 67](https://github.com/karpathy/llm-council/pulls)\n- [Actions](https://github.com/karpathy/llm-council/actions)\n- [Projects](https://github.com/karpathy/llm-council/projects)\n- [Security and quality](https://github.com/karpathy/llm-council/security)\n- [Insights](https://github.com/karpathy/llm-council/pulse)\n\n\n  \n\nAdditional navigation options\n\n\n\n# karpathy/llm-council\n\n master\n\n\n\n[Branches](https://github.com/karpathy/llm-council/branches)[Tags](https://github.com/karpathy/llm-council/tags)\n\n[/karpathy/llm-council/branches](https://github.com/karpathy/llm-council/branches)[/karpathy/llm-council/tags](https://github.com/karpathy/llm-council/tags)\n\nGo to file\n\nCode\n\nOpen more actions menu\n\n## Folders and files\n\n| Name | | Name | Last commit message | Last commit date |\n| --- | --- | --- | --- | --- |\n| Latest commit             History[5 Commits](https://github.com/karpathy/llm-council/commits/master/)      [/karpathy/llm-council/commits/master/](https://github.com/karpathy/llm-council/commits/master/)5 Commits | | |\n| [backend](https://github.com/karpathy/llm-council/tree/master/backend \"backend\") | | [backend](https://github.com/karpathy/llm-council/tree/master/backend \"backend\") |  |  |\n| [frontend](https://github.com/karpathy/llm-council/tree/master/frontend \"frontend\") | | [frontend](https://github.com/karpathy/llm-council/tree/master/frontend \"frontend\") |  |  |\n| [.gitignore](https://github.com/karpathy/llm-council/blob/master/.gitignore \".gitignore\") | | [.gitignore](https://github.com/karpathy/llm-council/blob/master/.gitignore \".gitignore\") |  |  |\n| [.python-version](https://github.com/karpathy/llm-council/blob/master/.python-version \".python-version\") | | [.python-version](https://github.com/karpathy/llm-council/blob/master/.python-version \".python-version\") |  |  |\n| [CLAUDE.md](https://github.com/karpathy/llm-council/blob/master/CLAUDE.md \"CLAUDE.md\") | | [CLAUDE.md](https://github.com/karpathy/llm-council/blob/master/CLAUDE.md \"CLAUDE.md\") |  |  |\n| [README.md](https://github.com/karpathy/llm-council/blob/master/README.md \"README.md\") | | [README.md](https://github.com/karpathy/llm-council/blob/master/README.md \"README.md\") |  |  |\n| [header.jpg](/karpathy/llm-council/blob/master/header.jpg \"header.jpg\") | | [header.jpg](/karpathy/llm-council/blob/master/header.jpg \"header.jpg\") |  |  |\n| [main.py](https://github.com/karpathy/llm-council/blob/master/main.py \"main.py\") | | [main.py](https://github.com/karpathy/llm-council/blob/master/main.py \"main.py\") |  |  |\n| [pyproject.toml](https://github.com/karpathy/llm-council/blob/master/pyproject.toml \"pyproject.toml\") | | [pyproject.toml](https://github.com/karpathy/llm-council/blob/master/pyproject.toml \"pyproject.toml\") |  |  |\n| [start.sh](https://github.com/karpathy/llm-council/blob/master/start.sh \"start.sh\") | | [start.sh](https://github.com/karpathy/llm-council/blob/master/start.sh \"start.sh\") |  |  |\n| [uv.lock](https://github.com/karpathy/llm-council/blob/master/uv.lock \"uv.lock\") | | [uv.lock](https://github.com/karpathy/llm-council/blob/master/uv.lock \"uv.lock\") |  |  |\n| View all files | | |\n\n## Repository files navigation\n\n- [README](#)\n\n# LLM Council\n\n[#llm-council](#llm-council)\n\n[![llmcouncil](https://github.com/karpathy/llm-council/raw/master/header.jpg)](/karpathy/llm-council/blob/master/header.jpg)\n\nThe idea of this repo is that instead of asking a question to your favorite LLM provider (e.g. OpenAI GPT 5.1, Google Gemini 3.0 Pro, Anthropic Claude Sonnet 4.5, xAI Grok 4, eg.c), you can group them into your \"LLM Council\". This repo is a simple, local web app that essentially looks like ChatGPT except it uses OpenRouter to send your query to multiple LLMs, it then asks them to review and rank each other's work, and finally a Chairman LLM produces the final response.\n\nIn a bit more detail, here is what happens when you submit a query:\n\n1. **Stage 1: First opinions**. The user query is given to all LLMs individually, and the responses are collected. The individual responses are shown in a \"tab view\", so that the user can inspect them all one by one.\n2. **Stage 2: Review**. Each individual LLM is given the responses of the other LLMs. Under the hood, the LLM identities are anonymized so that the LLM can't play favorites when judging their outputs. The LLM is asked to rank them in accuracy and insight.\n3. **Stage 3: Final response**. The designated Chairman of the LLM Council takes all of the model's responses and compiles them into a single final answer that is presented to the user.\n\n\n## Vibe Code Alert\n\n[#vibe-code-alert](#vibe-code-alert)\n\nThis project was 99% vibe coded as a fun Saturday hack because I wanted to explore and evaluate a number of LLMs side by side in the process of [reading books together with LLMs](https://x.com/karpathy/status/1990577951671509438). It's nice and useful to see multiple responses side by side, and also the cross-opinions of all LLMs on each other's outputs. I'm not going to support it in any way, it's provided here as is for other people's inspiration and I don't intend to improve it. Code is ephemeral now and libraries are over, ask your LLM to change it in whatever way you like.\n\n## Setup\n\n[#setup](#setup)\n\n### 1. Install Dependencies\n\n[#1-install-dependencies](#1-install-dependencies)\n\nThe project uses [uv](https://docs.astral.sh/uv/) for project management.\n\n**Backend:**\n\n```\nuv sync\n```\n\n**Frontend:**\n\n```\ncd frontend\nnpm install\ncd ..\n```\n\n### 2. Configure API Key\n\n[#2-configure-api-key](#2-configure-api-key)\n\nCreate a `.env` file in the project root:\n\n```\nOPENROUTER_API_KEY=sk-or-v1-...\n```\n\nGet your API key at [openrouter.ai](https://openrouter.ai/). Make sure to purchase the credits you need, or sign up for automatic top up.\n\n### 3. Configure Models (Optional)\n\n[#3-configure-models-optional](#3-configure-models-optional)\n\nEdit `backend/config.py` to customize the council:\n\n```\nCOUNCIL_MODELS = [\n    \"openai/gpt-5.1\",\n    \"google/gemini-3-pro-preview\",\n    \"anthropic/claude-sonnet-4.5\",\n    \"x-ai/grok-4\",\n]\n\nCHAIRMAN_MODEL = \"google/gemini-3-pro-preview\"\n```\n\n## Running the Application\n\n[#running-the-application](#running-the-application)\n\n**Option 1: Use the start script**\n\n```\n./start.sh\n```\n\n**Option 2: Run manually**\n\nTerminal 1 (Backend):\n\n```\nuv run python -m backend.main\n```\n\nTerminal 2 (Frontend):\n\n```\ncd frontend\nnpm run dev\n```\n\nThen open <http://localhost:5173> in your browser.\n\n## Tech Stack\n\n[#tech-stack](#tech-stack)\n\n- **Backend:** FastAPI (Python 3.10+), async httpx, OpenRouter API\n- **Frontend:** React + Vite, react-markdown for rendering\n- **Storage:** JSON files in `data/conversations/`\n- **Package Management:** uv for Python, npm for JavaScript\n\n## About\n\nLLM Council works together to answer your hardest questions\n\n### Resources\n\n[Readme](#readme-ov-file)\n\n[Activity](https://github.com/karpathy/llm-council/activity)\n\n### Stars\n\n[**18.7k** stars](https://github.com/karpathy/llm-council/stargazers)\n\n### Watchers\n\n[**244** watching](https://github.com/karpathy/llm-council/watchers)\n\n### Forks\n\n[**3.6k** forks](https://github.com/karpathy/llm-council/forks)\n\n[Report repository](https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fkarpathy%2Fllm-council&report=karpathy+%28user%29)\n\n## [Contributors](https://github.com/karpathy/llm-council/graphs/contributors)\n\n-\n\n-\n\n-\n\n## Languages\n\n- [Python 44.4%](https://github.com/karpathy/llm-council/search?l=python)\n- [JavaScript 37.1%](https://github.com/karpathy/llm-council/search?l=javascript)\n- [CSS 16.8%](https://github.com/karpathy/llm-council/search?l=css)\n- [Shell 1.1%](https://github.com/karpathy/llm-council/search?l=shell)\n- [HTML 0.6%](https://github.com/karpathy/llm-council/search?l=html)\n\n  \n\n## Footer\n\n[https://github.com](https://github.com) © 2026 GitHub, Inc.\n\n### Footer navigation\n\n- [Terms](https://docs.github.com/site-policy/github-terms/github-terms-of-service)\n- [Privacy](https://docs.github.com/site-policy/privacy-policies/github-privacy-statement)\n- [Security](https://github.com/security)\n- [Status](https://www.githubstatus.com/)\n- [Community](https://github.community/)\n- [Docs](https://docs.github.com/)\n- [Contact](https://support.github.com?tags=dotcom-footer)\n- Manage cookies\n\n- Do not share my personal information",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://github.com/karpathy/llm-council"
      },
      "links": [
        "https://github.com/",
        "https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fkarpathy%2Fllm-council",
        "https://github.com/features/copilot",
        "https://github.com/features/spark",
        "https://github.com/features/models",
        "https://github.com/mcp",
        "https://github.com/features/actions",
        "https://github.com/features/codespaces",
        "https://github.com/features/issues",
        "https://github.com/features/code-review",
        "https://github.com/security/advanced-security",
        "https://github.com/security/advanced-security/code-security",
        "https://github.com/security/advanced-security/secret-protection",
        "https://github.com/why-github",
        "https://docs.github.com",
        "https://github.blog",
        "https://github.blog/changelog",
        "https://github.com/marketplace",
        "https://github.com/features",
        "https://github.com/enterprise",
        "https://github.com/team",
        "https://github.com/enterprise/startups",
        "https://github.com/solutions/industry/nonprofits",
        "https://github.com/solutions/use-case/app-modernization",
        "https://github.com/solutions/use-case/devsecops",
        "https://github.com/solutions/use-case/devops",
        "https://github.com/solutions/use-case/ci-cd",
        "https://github.com/solutions/use-case",
        "https://github.com/solutions/industry/healthcare",
        "https://github.com/solutions/industry/financial-services",
        "https://github.com/solutions/industry/manufacturing",
        "https://github.com/solutions/industry/government",
        "https://github.com/solutions/industry",
        "https://github.com/solutions",
        "https://github.com/resources/articles?topic=ai",
        "https://github.com/resources/articles?topic=software-development",
        "https://github.com/resources/articles?topic=devops",
        "https://github.com/resources/articles?topic=security",
        "https://github.com/resources/articles",
        "https://github.com/customer-stories",
        "https://github.com/resources/events",
        "https://github.com/resources/whitepapers",
        "https://github.com/solutions/executive-insights",
        "https://skills.github.com",
        "https://support.github.com",
        "https://github.com/orgs/community/discussions",
        "https://github.com/trust-center",
        "https://github.com/partners",
        "https://github.com/resources",
        "https://github.com/sponsors",
        "https://securitylab.github.com",
        "https://maintainers.github.com",
        "https://github.com/accelerator",
        "https://stars.github.com",
        "https://archiveprogram.github.com",
        "https://github.com/topics",
        "https://github.com/trending",
        "https://github.com/collections",
        "https://github.com/features/copilot/copilot-business",
        "https://github.com/premium-support",
        "https://github.com/pricing",
        "https://docs.github.com/search-github/github-code-search/understanding-github-code-search-syntax",
        "https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F%3Cuser-name%3E%2F%3Crepo-name%3E&source=header-repo&source_repo=karpathy%2Fllm-council",
        "https://github.com/karpathy",
        "https://github.com/karpathy/llm-council",
        "https://github.com/login?return_to=%2Fkarpathy%2Fllm-council",
        "https://github.com/karpathy/llm-council/issues",
        "https://github.com/karpathy/llm-council/pulls",
        "https://github.com/karpathy/llm-council/actions",
        "https://github.com/karpathy/llm-council/projects",
        "https://github.com/karpathy/llm-council/security",
        "https://github.com/karpathy/llm-council/pulse",
        "https://github.com/karpathy/llm-council/branches",
        "https://github.com/karpathy/llm-council/tags",
        "https://github.com/karpathy/llm-council/commits/master/",
        "https://github.com/karpathy/llm-council/tree/master/backend",
        "https://github.com/karpathy/llm-council/tree/master/frontend",
        "https://github.com/karpathy/llm-council/blob/master/.gitignore",
        "https://github.com/karpathy/llm-council/blob/master/.python-version",
        "https://github.com/karpathy/llm-council/blob/master/CLAUDE.md",
        "https://github.com/karpathy/llm-council/blob/master/README.md",
        "https://github.com/karpathy/llm-council/blob/master/main.py",
        "https://github.com/karpathy/llm-council/blob/master/pyproject.toml",
        "https://github.com/karpathy/llm-council/blob/master/start.sh",
        "https://github.com/karpathy/llm-council/blob/master/uv.lock",
        "https://x.com/karpathy/status/1990577951671509438",
        "https://docs.astral.sh/uv/",
        "https://openrouter.ai/",
        "https://github.com/karpathy/llm-council/activity",
        "https://github.com/karpathy/llm-council/stargazers",
        "https://github.com/karpathy/llm-council/watchers",
        "https://github.com/karpathy/llm-council/forks",
        "https://github.com/contact/report-content?content_url=https%3A%2F%2Fgithub.com%2Fkarpathy%2Fllm-council&report=karpathy+%28user%29",
        "https://github.com/karpathy/llm-council/graphs/contributors",
        "https://github.com/karpathy/llm-council/search?l=python",
        "https://github.com/karpathy/llm-council/search?l=javascript",
        "https://github.com/karpathy/llm-council/search?l=css",
        "https://github.com/karpathy/llm-council/search?l=shell",
        "https://github.com/karpathy/llm-council/search?l=html",
        "https://github.com"
      ]
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: GitHub - karpathy/llm-council: LLM Council works together to answer your hardest questions",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "GitHub - karpathy/llm-council: LLM Council works together to answer your hardest questions",
      "subtitles": null,
      "url": "https://github.com/karpathy/llm-council",
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

 I'm pulling the primary source from Karpathy's GitHub repo and checking the CLAUDE.md file for architectural details about the implementation.

</details>

I have the primary source. Let me also pull the `CLAUDE.md` for the deeper implementation details (the architectural spec Karpathy uses to guide Claude Code on this repo).

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-21T15:21:39.432511Z",
  "stop_timestamp": "2026-05-21T15:21:39.694696Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01PaMtwF1BRDb7zGRSXMPgNX",
  "name": "web_fetch",
  "input": {
    "url": "https://github.com/karpathy/llm-council/blob/master/CLAUDE.md"
  },
  "message": "Fetching: https://github.com/karpathy/llm-council/blob/master/CLAUDE.md",
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
  "tool_use_id": "toolu_01PaMtwF1BRDb7zGRSXMPgNX",
  "name": "web_fetch",
  "content": [
    {
      "type": "text",
      "text": "{\"error_type\": \"CLIENT_ERROR\", \"error_message\": \"There was an error while fetching: The page returned a 429 client error\"}",
      "uuid": "4d631e12-ab93-408b-9825-1db6feeb4cd2"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": "Failed to fetch: https://github.com/karpathy/llm-council/blob/master/CLAUDE.md",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://github.com/karpathy/llm-council/blob/master/CLAUDE.md",
      "subtitles": null,
      "url": "https://github.com/karpathy/llm-council/blob/master/CLAUDE.md",
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

 I'll try switching to the raw GitHub URL format instead.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-21T15:21:41.608499Z",
  "stop_timestamp": "2026-05-21T15:21:42.061143Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01RmPbTpcugkQzhXYs8QGGiy",
  "name": "web_fetch",
  "input": {
    "url": "https://raw.githubusercontent.com/karpathy/llm-council/master/CLAUDE.md"
  },
  "message": "Fetching: https://raw.githubusercontent.com/karpathy/llm-council/master/CLAUDE.md",
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
  "tool_use_id": "toolu_01RmPbTpcugkQzhXYs8QGGiy",
  "name": "web_fetch",
  "content": [
    {
      "type": "text",
      "text": "{\"error_type\": \"PERMISSIONS_ERROR\", \"error_message\": \"This URL cannot be fetched because it was not provided by the user nor did it appear in any search/fetch results\"}",
      "uuid": "a385e23d-f27c-4cb9-ae27-1b0db65f7dcb"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": "Failed to fetch: https://raw.githubusercontent.com/karpathy/llm-council/master/CLAUDE.md",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=githubusercontent.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://raw.githubusercontent.com/karpathy/llm-council/master/CLAUDE.md",
      "subtitles": null,
      "url": "https://raw.githubusercontent.com/karpathy/llm-council/master/CLAUDE.md",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=githubusercontent.com",
      "source": "githubusercontent"
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
  "start_timestamp": "2026-05-21T15:21:44.019409Z",
  "stop_timestamp": "2026-05-21T15:21:44.019409Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_015JXTs1gVyEMk2smPMmVj5n",
  "name": "web_search",
  "input": {
    "query": "karpathy llm-council CLAUDE.md architecture stages anonymize"
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
  "tool_use_id": "toolu_015JXTs1gVyEMk2smPMmVj5n",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "llm-council/CLAUDE.md at master · karpathy/llm-council",
      "url": "https://github.com/karpathy/llm-council/blob/master/CLAUDE.md",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "User Query ↓ Stage 1: Parallel queries → [individual responses] ↓ Stage 2: Anonymize → Parallel ranking queries → [evaluations + parsed rankings] ↓ Aggregate Rankings Calculation → [sorted by avg position] ↓ Stage 3: Chairman ...\n\nLLM Council works together to answer your hardest questions - llm-council/CLAUDE.md at master · karpathy/llm-council\n\nThis file contains technical details, architectural decisions, and important implementation notes for future development sessions. LLM Council is a 3-stage deliberation system where multiple LLMs collaboratively answer user questions. The key innovation is anonymized peer review in Stage 2, preventing models from playing favorites. ... parse_ranking_from_text(): Extracts \"FINAL RANKING:\" section, handles both numbered lists and plain format · calculate_aggregate_rankings(): Computes average rank position across all peer evaluations ... \n\nNote: metadata (label_to_model, aggregate_rankings) is NOT persisted to storage, only returned via API ... 1. Evaluate each response individually first 2. Provide \"FINAL RANKING:\" header 3. Numbered list format: \"1. Response C\", \"2. Response A\", etc. 4. No additional text after ranking section · This strict format allows reliable parsing while still getting thoughtful evaluations.\n\nUser Query ↓ Stage 1: Parallel queries → [individual responses] ↓ Stage 2: Anonymize → Parallel ranking queries → [evaluations + parsed rankings] ↓ Aggregate Rankings Calculation → [sorted by avg position] ↓ Stage 3: Chairman synthesis with full context ↓ Return: {stage1, stage2, stage3, metadata} ↓ Frontend: Display with tabs + validation UI ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/karpathy/llm-council/blob/master/CLAUDE.md",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "LLM Council: A Complete Architecture Analysis of Karpathy's Multi-Agent Deliberation System | Fodev JEO",
      "url": "https://akillness.github.io/posts/llm-council-complete-architecture-analysis/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.io",
        "site_name": "Fodev JEO"
      },
      "is_missing": false,
      "text": "After 8 years of building AI systems in game development, one of the biggest challenges has been overcoming the limitations of a single model. GPT-5.1 might be creative but lack accuracy, Claude Sonnet 4.5 might be precise but slow, and Gemini 3 Pro might be balanced but not optimal for every task. Curiosity: Can we organize multiple LLMs into a “Council” that combines each model’s strengths while using anonymized peer review to eliminate bias? Andrej Karpathy’s LLM Council is an innovative system that realizes this idea. LLM Council is not simply listing answers from multiple models. It implements a 3-stage deliberation process where each model evaluates other models’ responses, and finally a Chairman model synthesizes all opinions to generate the optimal answer. Core Question: Can anonymized peer review eliminate inter-model bias and produce better answers?\n\n\n\nAfter 8 years of building AI systems in game development, one of the biggest challenges has been overcoming the limitations of a single model. GPT-5.1 might be creative but lack accuracy, Claude Sonnet 4.5 might be precise but slow, and Gemini 3 Pro might be balanced but not optimal for every task. Curiosity: Can we organize multiple LLMs into a “Council” that combines each model’s strengths while using anonymized peer review to eliminate bias? Andrej Karpathy’s LLM Council is an innovative system that realizes this idea. LLM Council is not simply listing answers from multiple models. It implements a 3-stage deliberation process where each model evaluates other models’ responses, and finally a Chairman model synthesizes all opinions to generate the optimal answer. Core Question: Can anonymized peer review eliminate inter-model bias and produce better answers?\n\nLLM Council is a “vibe code” Saturday hack project by Andrej Karpathy. \n\nWhile its original purpose was to evaluate and compare multiple LLMs simultaneously, it has become an excellent example of a multi-agent deliberation syste",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://akillness.github.io/posts/llm-council-complete-architecture-analysis/",
        "search_provider": "anthropic",
        "age": "February 18, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - karpathy/llm-council: LLM Council works together to answer your hardest questions · GitHub",
      "url": "https://github.com/karpathy/llm-council/tree/master",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "The idea of this repo is that instead of asking a question to your favorite LLM provider (e.g. OpenAI GPT 5.1, Google Gemini 3.0 Pro, Anthropic Claude Sonnet 4.5, xAI Grok 4, eg.c), you can group them into your &quot;LLM Council&quot;. This repo is a simple, local web app that essentially looks like ChatGPT except it uses OpenRouter to send your query to multiple LLMs, it then asks them to review and rank each other&#x27;s work, and finally a Chairman LLM produces the final response. In a bit more detail, here is what happens when you submit a query: Stage 1: First opinions. The user query is given to all LLMs individually, and the responses are collected. The individual responses are shown in a &quot;tab view&quot;, so that the user can inspect them all one by one. Stage 2: Review. Each individual LLM is given the responses of the other LLMs. Under the hood, the LLM identities are anonymized so that the LLM can&#x27;t play favorites when judging their outputs.\n\n\n\nThe idea of this repo is that instead of asking a question to your favorite LLM provider (e.g. OpenAI GPT 5.1, Google Gemini 3.0 Pro, Anthropic Claude Sonnet 4.5, xAI Grok 4, eg.c), you can group them into your \"LLM Council\". This repo is a simple, local web app that essentially looks like ChatGPT except it uses OpenRouter to send your query to multiple LLMs, it then asks them to review and rank each other's work, and finally a Chairman LLM produces the final response. In a bit more detail, here is what happens when you submit a query: Stage 1: First opinions. The user query is given to all LLMs individually, and the responses are collected. The individual responses are shown in a \"tab view\", so that the user can inspect them all one by one. Stage 2: Review. Each individual LLM is given the responses of the other LLMs. Under the hood, the LLM identities are anonymized so that the LLM can't play favorites when judging their outputs.\n\n\n\nLLM Council works together to answer your hardest questions - karpathy/l",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/karpathy/llm-council/tree/master",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Andrej Karpathy's LLM Council - Unbound Security",
      "url": "https://docs.getunbound.ai/integrations/llm-council-integration",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "getunbound.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=getunbound.ai",
        "site_name": "Unbound Security"
      },
      "is_missing": false,
      "text": "The key innovation is anonymized peer review - in Stage 2, models evaluate each other’s responses without knowing which model produced them, preventing bias and ensuring objective rankings.\n\nUse this file to discover all available pages before exploring further.LLM Council is a 3-stage deliberation system created by Andrej Karpathy where multiple LLMs collaboratively answer your questions. Instead of relying on a single AI model, you can assemble a “council” of top LLMs that discuss, peer-review, and synthesize the best possible answer. The key innovation is anonymized peer review - in Stage 2, models evaluate each other’s responses without knowing which model produced them, preventing bias and ensuring objective rankings. When you submit a question, LLM Council runs through three stages: Stage 1: Individual Responses - Your query is sent to all council members (e.g., GPT-5.1, Claude Sonnet 4.5, Gemini 3 Pro, Grok 4) in parallel. Each model provides its own answer. \n\nStage 2: Peer Review - Each model reviews and ranks all responses (anonymized as “Response A”, “Response B”, etc.).\n\n# Council members - model identifiers COUNCIL_MODELS = [ \"openai/gpt-5.1\", \"google/gemini-3-pro-preview\", \"anthropic/claude-sonnet-4.5\", \"x-ai/grok-4\", ] # Chairman model - synthesizes final response CHAIRMAN_MODEL = \"google/gemini-3-pro-preview\" You can use any models available through your Unbound gateway. The Chairman can be one of the council members or a different model entirely. ... Then open http://localhost:5173 in your browser. \n\nCreate a New Conversation - Click ”+ New Conversation” to start · Ask Your Question - Type any question in the input box · Review Stage 1 - Click through tabs to see each model’s individual response · Examine Peer Rankings - Stage 2 shows how each model ranked the responses, with aggregate rankings calculated · Read the Final Answer - Stage 3 presents the Chairman’s synthesized response · User Query | Stage 1: Parallel querie",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://docs.getunbound.ai/integrations/llm-council-integration",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "GitHub - danielrosehill/Awesome-LLM-Council-Projects: Index of projects based upon Karpathy's LLM Council model · GitHub",
      "url": "https://github.com/danielrosehill/LLM-Council-Projects",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Inspired by Karpathy&#x27;s LLM Council. ... Claude Code skill: Run decisions, code, and plans through a council of 5 AI advisors with anonymous peer review. Based on Karpathy&#x27;s LLM Council.\n\nInspired by Karpathy's LLM Council. ... Claude Code skill: Run decisions, code, and plans through a council of 5 AI advisors with anonymous peer review. Based on Karpathy's LLM Council. ... Stress-test decisions with a 16-persona council. A Claude Code skill for PMs, founders, and builders facing wicked problems. ... A council of 5 personas to help you take decisions. Choose between 5 free AI models. Based on Ole Lehmann's LLM_Council skill for Claude. ... A skill for Claude Code that enables brainstorming with other LLMs (ChatGPT, Gemini) before presenting the implementation plan to the user. ... An AI skill that turns any request into a multidisciplinary senior council — profiles, perspectives, consensus, and a clear action. Works with Claude, GPT-4, Gemini, Llama, and any LLM. ... \n\nA take on Andrej Karpathy's LLM Council, where you are the ultimate head chairman making decisions in the real world.\n\nA Claude Code framework for multi-llm planning and development agents. ... Projects targeted at a specific vertical or decision domain. Some entries also appear in other sections where they fit. AI-powered Design Authority — 5 specialist agents evaluate architecture decisions and deliver structured rulings in under 60 seconds. ... AI Presidential Briefing: Daily knowledge synthesis system with memory layer, LLM council, and LinkedIn post generation. ... Structured adversarial review for business ideas using a multi-provider LLM council. Inspired by Karpathy's LLM Council and pAI (Poggio Lab, MIT). Critics by design, not by request. ... Personal AI Council — 5 LLM models debate SAP questions. Built with FastAPI, React, Grok API. Free to run locally. ... AI Investment Advisor (v1.0): Professional-grade 7-Agent Swarm. \n\nIntegrates Council Debate mechanism, pgvector semant",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://github.com/danielrosehill/LLM-Council-Projects",
        "search_provider": "anthropic",
        "age": "1 month ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "I built Karpathy’s LLM Wiki twice — once as code, once as a .md. Here's what each one gives up. | by Leandro Bernardo | Medium | Towards AI",
      "url": "https://pub.towardsai.net/i-built-karpathys-llm-wiki-twice-once-as-code-once-as-a-md-heres-what-each-one-gives-up-08b31170999a?gi=855ee20dd408",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "towardsai.net",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=towardsai.net",
        "site_name": "Towards AI"
      },
      "is_missing": false,
      "text": "So I wrote wiki-llm (available on Github). The architecture is the eight stages Karpathy sketched, hardened into a pipeline: ... A few decisions worth naming, because they are the ones that turn the idea into something a team can actually run unattended: Pydantic v2 contracts between stages. Every stage takes a typed input and returns a typed output. When the Writer hands a draft to the Evaluator, the schema is enforced, not hoped for. Deterministic content-addressable IDs. Each page’s UUID is derived from the SHA-256 of its stripped body. Same content, same ID — regardless of filename, frontmatter, or formatting. Rename a source file and nothing breaks downstream. Multi-backend LLM via instructor. OpenRouter, OpenAI, Bedrock, Ollama — same code path, structured outputs with automatic retries. A repair agent built with LangGraph. Not the whole pipeline — just the corner where lint findings need to be resolved with fan-out and review.\n\nKarpathy shared an idea file. \n\nI shipped a Python package, then folded the same idea back into a single markdown file for agents. They reach the same destination. The road there is what differs.\n\nSo I wrote wiki-llm (available on Github). The architecture is the eight stages Karpathy sketched, hardened into a pipeline: ... A few decisions worth naming, because they are the ones that turn the idea into something a team can actually run unattended: Pydantic v2 contracts between stages. Every stage takes a typed input and returns a typed output. When the Writer hands a draft to the Evaluator, the schema is enforced, not hoped for. Deterministic content-addressable IDs. Each page’s UUID is derived from the SHA-256 of its stripped body. Same content, same ID — regardless of filename, frontmatter, or formatting. Rename a source file and nothing breaks downstream. Multi-backend LLM via instructor. OpenRouter, OpenAI, Bedrock, Ollama — same code path, structured outputs with automatic retries. \n\nA repair agent built with LangGra",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://pub.towardsai.net/i-built-karpathys-llm-wiki-twice-once-as-code-once-as-a-md-heres-what-each-one-gives-up-08b31170999a?gi=855ee20dd408",
        "search_provider": "anthropic",
        "age": "3 days ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "LLM Council Claude Code Skill | Multi-Model Deliberation",
      "url": "https://mcpmarket.com/tools/skills/llm-council-1",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mcpmarket.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mcpmarket.com",
        "site_name": "MCP Market"
      },
      "is_missing": false,
      "text": "It coordinates a three-phase workflow where multiple open-weight models (like DeepSeek, Llama, and Qwen) respond to a query in parallel, rank each other&#x27;s anonymized outputs, and finally submit their findings to a &#x27;Chairman&#x27; model for synthesis.\n\nThe LLM Council skill implements Andrej Karpathy's 'Council of LLMs' concept directly within Claude Code, leveraging the speed and affordability of Fireworks AI. It coordinates a three-phase workflow where multiple open-weight models (like DeepSeek, Llama, and Qwen) respond to a query in parallel, rank each other's anonymized outputs, and finally submit their findings to a 'Chairman' model for synthesis. This approach is ideal for complex reasoning tasks, reducing individual model hallucination and providing a balanced, multi-perspective conclusion that surpasses the capability of any single open-weight model alone.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://mcpmarket.com/tools/skills/llm-council-1",
        "search_provider": "anthropic",
        "age": "2 weeks ago"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "llm-wiki · GitHub",
      "url": "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "github.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=github.com",
        "site_name": "GitHub"
      },
      "is_missing": false,
      "text": "Offline-First Architectures: It allows the primary application (and the LLM) to interact with a fast, local SQLite database without waiting for network calls. The adapter handles the slow, asynchronous work of syncing that data to the main backend ...\n\nSave karpathy/442a6bf555914893e9891c11519de94f to your computer and use it in GitHub Desktop. ... A pattern for building personal knowledge bases using LLMs. This is an idea file, it is designed to be copy pasted to your own LLM Agent (e.g. OpenAI Codex, Claude Code, OpenCode / Pi, or etc.). Its goal is to communicate the high level idea, but your agent will build out the specifics in collaboration with you. Most people's experience with LLMs and documents looks like RAG: you upload a collection of files, the LLM retrieves relevant chunks at query time, and generates an answer. This works, but the LLM is rediscovering knowledge from scratch on every question. There's no accumulation.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f",
        "search_provider": "anthropic",
        "age": "2 days ago"
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

 I've got solid information from Karpathy's repository and supporting sources, so now I should track down the original announcement to give the user the complete picture they're looking for.

</details>

Let me find Karpathy's original announcement post on X/Twitter to round out the primary sources.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-21T15:21:48.714703Z",
  "stop_timestamp": "2026-05-21T15:21:48.714703Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01DUkXFgAPa6oNQtGShKXFBQ",
  "name": "web_search",
  "input": {
    "query": "Karpathy tweet \"llm-council\" announcement X November 2025"
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
  "tool_use_id": "toolu_01DUkXFgAPa6oNQtGShKXFBQ",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Language Log » \"LLM Council\"",
      "url": "https://languagelog.ldc.upenn.edu/nll/?p=72058",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "upenn.edu",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=upenn.edu",
        "site_name": "Language Log"
      },
      "is_missing": false,
      "text": "November 23, 2025 @ 6:20 am · Filed by Mark Liberman under Artificial intelligence · « previous post | next post » · Yesterday afternoon, Andrej Karpathy posted llm-council on github: His description: The idea of this repo is that instead of asking a question to your favorite LLM provider (e.g. OpenAI GPT 5.1, Google Gemini 3.0 Pro, Anthropic Claude Sonnet 4.5, xAI Grok 4, eg.c), you can group them into your &quot;LLM Council&quot;. This repo is a simple, local web app that essentially looks like ChatGPT except it uses OpenRouter to send your query to multiple LLMs, it then asks them to review and rank each other&#x27;s work, and finally a Chairman LLM produces the final response. Though I have too many other things to do, I&#x27;m tempted to install it and see what the Council thinks of Grok&#x27;s weird recent re-programming: Incredible headline. [image or embed] — Tim Onion (@bencollins.bsky.social) November 20, 2025 at 5:01 PM ·\n\n\n\nNovember 23, 2025 @ 6:20 am · Filed by Mark Liberman under Artificial intelligence · « previous post | next post » · Yesterday afternoon, Andrej Karpathy posted llm-council on github: His description: The idea of this repo is that instead of asking a question to your favorite LLM provider (e.g. OpenAI GPT 5.1, Google Gemini 3.0 Pro, Anthropic Claude Sonnet 4.5, xAI Grok 4, eg.c), you can group them into your \"LLM Council\". This repo is a simple, local web app that essentially looks like ChatGPT except it uses OpenRouter to send your query to multiple LLMs, it then asks them to review and rank each other's work, and finally a Chairman LLM produces the final response. Though I have too many other things to do, I'm tempted to install it and see what the Council thinks of Grok's weird recent re-programming: Incredible headline. [image or embed] — Tim Onion (@bencollins.bsky.social) November 20, 2025 at 5:01 PM ·\n\n\n\nUpdate — I still haven't had time to try this out, but there's now an LLM Council Community on X… · Nove",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://languagelog.ldc.upenn.edu/nll/?p=72058",
        "search_provider": "anthropic",
        "age": "November 20, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "OpenRouter on X: \"Fun new project by @karpathy: LLM Council, with a Chairman model to synthesize the result\" / X",
      "url": "https://x.com/OpenRouterAI/status/1992649076211699928",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "x.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=x.com",
        "site_name": "X"
      },
      "is_missing": false,
      "text": "@karpathy: LLM Council, with a Chairman model to synthesize the result · Quote · Andrej Karpathy · @karpathy · · · Nov 22, 2025 · As a fun Saturday vibe code project and following up on this tweet earlier, I hacked up an **llm-council** web app. It looks exactly like ChatGPT except each user query is 1) dispatched to multiple models on your council using OpenRouter, e.g. currently: &quot;openai/gpt-5.1&quot;, x.com/karpathy/statu… · 11:38 AM · Nov 23, 2025 · 18 · 29 · 524 · Read 18 replies · Sign up now to get your own personalized timeline! Sign up with GoogleSign up with Google. Opens in new tab · Sign up with Apple · Create account · By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. OpenRouter · @OpenRouter · Follow · Click to Follow OpenRouter · Discover and use the latest LLMs. 500+ models (incl.\n\n\n\n@karpathy: LLM Council, with a Chairman model to synthesize the result · Quote · Andrej Karpathy · @karpathy · · · Nov 22, 2025 · As a fun Saturday vibe code project and following up on this tweet earlier, I hacked up an **llm-council** web app. It looks exactly like ChatGPT except each user query is 1) dispatched to multiple models on your council using OpenRouter, e.g. currently: \"openai/gpt-5.1\", x.com/karpathy/statu… · 11:38 AM · Nov 23, 2025 · 18 · 29 · 524 · Read 18 replies · Sign up now to get your own personalized timeline! Sign up with GoogleSign up with Google. Opens in new tab · Sign up with Apple · Create account · By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. OpenRouter · @OpenRouter · Follow · Click to Follow OpenRouter · Discover and use the latest LLMs. 500+ models (incl.\n\nAs a fun Saturday vibe code project and following up on this tweet earlier, I hacked up an **llm-council** web app.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://x.com/OpenRouterAI/status/1992649076211699928",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Andrej Karpathy on X: \"As a fun Saturday vibe code project and following up on this tweet earlier, I hacked up an **llm-council** web app. It looks exactly like ChatGPT except each user query is 1) dispatched to multiple models on your council using OpenRouter, e.g. currently: \"openai/gpt-5.1\", https://t.co/yljZu0Vr8n\" / X",
      "url": "https://x.com/karpathy/status/1992381094667411768",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "x.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=x.com",
        "site_name": "X"
      },
      "is_missing": false,
      "text": "As a fun Saturday vibe code project and following up on this tweet earlier, I hacked up an **llm-council** web app. It looks exactly like ChatGPT except each user query is 1) dispatched to multiple models on your council using OpenRouter, e.g. currently: &quot;openai/gpt-5.1&quot;, Quote · Andrej Karpathy · @karpathy · · · Nov 17, 2025 · I’m starting to get into a habit of reading everything (blogs, articles, book chapters,…) with LLMs. Usually pass 1 is manual, then pass 2 “explain/summarize”, pass 3 Q&amp;A. I usually end up with a better/deeper understanding than if I moved on. Growing to among top use cases. On · 3:54 PM · Nov 22, 2025 · 912 · 1.8K · 17K · 13K · Read 912 replies · Sign up now to get your own personalized timeline! Sign up with GoogleSign up with Google. Opens in new tab · Sign up with Apple · Create account · By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.\n\n\n\nAs a fun Saturday vibe code project and following up on this tweet earlier, I hacked up an **llm-council** web app. It looks exactly like ChatGPT except each user query is 1) dispatched to multiple models on your council using OpenRouter, e.g. currently: \"openai/gpt-5.1\", Quote · Andrej Karpathy · @karpathy · · · Nov 17, 2025 · I’m starting to get into a habit of reading everything (blogs, articles, book chapters,…) with LLMs. Usually pass 1 is manual, then pass 2 “explain/summarize”, pass 3 Q&A. I usually end up with a better/deeper understanding than if I moved on. Growing to among top use cases. On · 3:54 PM · Nov 22, 2025 · 912 · 1.8K · 17K · 13K · Read 912 replies · Sign up now to get your own personalized timeline! Sign up with GoogleSign up with Google. Opens in new tab · Sign up with Apple · Create account · By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use.\n\n\n\nAs a fun Saturday vibe code project and following up on this tweet earlier, I hacked up an *",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://x.com/karpathy/status/1992381094667411768",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "2025 LLM Year in Review from Andrej Karpathy",
      "url": "https://mlops.substack.com/p/2025-llm-year-in-review-from-andrej",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "substack.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=substack.com",
        "site_name": "Substack"
      },
      "is_missing": false,
      "text": "Andrej Karpathy’s 2025 year-in-review captures six paradigm shifts that reshaped the landscape of large language model development and deployment. The post shows a recalibration of how the industry approaches LLM training, application ...\n\nBeyond democratization, vibe coding transforms how professional developers work. When code is “free” (zero-friction to generate), developers create software at a different scale: single-use ephemeral applications built to debug specific issues, quick prototypes for proof-of-concept ideas, and custom tooling that wouldn’t previously be economically justifiable. Karpathy himself demonstrates this with examples like custom BPE tokenizer implementations in Rust and ephemeral applications (menugen, llm-council, reader3, HN time capsule) built to explore specific ideas. This capability shift has profound labor market implications. \n\n“Vibe coding will terraform software and alter job descriptions.” The number of programs written may increase dramatically as the friction of creation drops, but the occupational role of “professional programmer” will necessarily transform when code generation is commoditized.\n\nAndrej Karpathy’s 2025 year-in-review captures six paradigm shifts that reshaped the landscape of large language model development and deployment. The post shows a recalibration of how the industry approaches LLM training, application architecture, and how humans can interact AI systems with new innovations that came in 2025. The most consequential technical development of 2025 is the emergence of Reinforcement Learning from Verifiable Rewards (RLVR) as the dominant training methodology, fundamentally altering the established three-stage LLM production stack. Prior to 2025, the industry consensus consisted of 1. pretraining (rooted in GPT-2/3 methodology from ~2020), 2. \n\nsupervised finetuning (InstructGPT approach from ~2022), and 3. RLHF (RLHF from ~2022). These three stages represented a stable, proven recipe for",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://mlops.substack.com/p/2025-llm-year-in-review-from-andrej",
        "search_provider": "anthropic",
        "age": "January 4, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Karpathy's \"2025 LLM Year in Review\" (Simplified) - AI IQ",
      "url": "https://aiiq.substack.com/p/karpathys-2025-llm-year-in-review",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "substack.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=substack.com",
        "site_name": "Substack"
      },
      "is_missing": false,
      "text": "(Technically, any of you could have used an LLM to understand Karpathy’s article but I know that we are all lazy and hence I’ve decided to spoonfeed you.) Warning: Normally, everything I publish on my substacks (this one and my other one) and my Twitter is written by me and not by AI.\n\nTLDR. 2025 was an exciting and mildly surprising year of LLMs. LLMs are emerging as a new kind of intelligence, simultaneously a lot smarter than I expected and a lot dumber than I expected. In any case, they are extremely useful, and I don’t think the industry has realized anywhere near 10% of their potential, even at their present capabilities. Meanwhile, there are so many ideas to try, and conceptually, the field feels wide open. And as I mentioned on my Dwarkesh podcast earlier this year, I simultaneously (and on the surface paradoxically) believe that we will both see rapid and continued progress and that yet there is a lot of work to be done. Strap in. ... \n\nHere, Karpathy mentions “slow takeoff”. You should ask your favourite LLM to explain to you the meaning and significance of the terms “slow takeoff”, “fast takeoff” in the context of AI ...\n\nIn nanochat, I vibe-coded my own custom, highly efficient text-processing tool in Rust instead of having to adopt existing libraries or learn Rust at that level. I vibe-coded many projects this year as quick app demos of something I wanted to exist (e.g., see menugen, llm-council, reader3, HN time capsule). And I’ve vibe coded entire throwaway apps just to find a single bug because why not - code is suddenly free, ephemeral, malleable, discardable after single use. Vibe coding will reshape software and alter job descriptions. Google Gemini’s “Nano Banana” is one of the most incredible, paradigm-shifting models of 2025. The “Nano” part is key: these are small, highly efficient models designed to run locally on your phone or laptop rather than requiring massive cloud servers. \n\nThis connects directly to why Se",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://aiiq.substack.com/p/karpathys-2025-llm-year-in-review",
        "search_provider": "anthropic",
        "age": "December 24, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "2025 LLM Year in Review | karpathy",
      "url": "https://karpathy.bearblog.dev/year-in-review-2025/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "bearblog.dev",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=bearblog.dev",
        "site_name": "Karpathy"
      },
      "is_missing": false,
      "text": "These strategies would have been very difficult to achieve in the previous paradigms because it&#x27;s not clear what the optimal reasoning traces and recoveries look like for the LLM - it has to find what works for it, via the optimization against rewards. Unlike the SFT and RLHF stage, which are both relatively thin/short stages (minor finetunes computationally), RLVR involves training against objective (non-gameable) reward functions which allows for a lot longer optimization. Running RLVR turned out to offer high capability/$, which gobbled up the compute that was originally intended for pretraining. Therefore, most of the capability progress of 2025 was defined by the LLM labs chewing through the overhang of this new stage and overall we saw ~similar sized LLMs but a lot longer RL runs. \n\nsee menugen, llm-council, reader3, HN time capsule). And I've vibe coded entire ephemeral apps just to find a single bug because why not - code is suddenly free, ephemeral, malleable, discardable after single use. Vibe coding will terraform software and alter j\n\nThese strategies would have been very difficult to achieve in the previous paradigms because it's not clear what the optimal reasoning traces and recoveries look like for the LLM - it has to find what works for it, via the optimization against rewards. Unlike the SFT and RLHF stage, which are both relatively thin/short stages (minor finetunes computationally), RLVR involves training against objective (non-gameable) reward functions which allows for a lot longer optimization. Running RLVR turned out to offer high capability/$, which gobbled up the compute that was originally intended for pretraining.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://karpathy.bearblog.dev/year-in-review-2025/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Karpathy is back. His new LLM-Council might be the future ...",
      "url": "https://www.linkedin.com/posts/lioralex_karpathy-is-back-his-new-llm-council-might-activity-7399172974597218304-RRmY",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "linkedin.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=linkedin.com",
        "site_name": "LinkedIn"
      },
      "is_missing": false,
      "text": "We cannot provide a description for this page right now",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.linkedin.com/posts/lioralex_karpathy-is-back-his-new-llm-council-might-activity-7399172974597218304-RRmY",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Henilsinh Raj ⟁ on X: \"LLM Council by #Karpathy shows how multiple models can think together. They answer independently, review each other, and a chairman model delivers a refined final response. I explained the full workflow in my new Medium article. https://t.co/AkIKjMLjQ8 #Ai #LLMs\" / X",
      "url": "https://x.com/HenilsinhR/status/1995930415249727989",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "x.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=x.com",
        "site_name": "X"
      },
      "is_missing": false,
      "text": "LLM Council by #Karpathy shows how multiple models can think together. They answer independently, review each other, and a chairman model delivers a refined final response. I explained the full workflow in my new Medium article. https://med...\n\nLLM Council by #Karpathy shows how multiple models can think together. They answer independently, review each other, and a chairman model delivers a refined final response. I explained the full workflow in my new Medium article. https://medium.com/@henilsinhrajraj/llm-council-by-andrej-karpathy-20b4f2871b51… #Ai #LLMs ... Sign up now to get your own personalized timeline! Sign up with GoogleSign up with Google. Opens in new tab ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://x.com/HenilsinhR/status/1995930415249727989",
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

 I've gathered the primary sources I need: the GitHub repository with the full README, Karpathy's announcement tweet from November 22, 2025, and his related tweet about reading with LLMs.  I also have access to the CLAUDE.md file with architectural details and his 2025 year-in-review post that references the project. Now I'll organize this into a comprehensive briefing with clear attribution to each source, separating verified facts from any inferences I might make.

Since the user prefers interactive visualizations, I should build an animated widget that walks through the three-stage council flow — showing how queries fan out to parallel models, how responses get anonymized and ranked, and how the chairman synthesizes the final answer. A "Run simulation" button would let them step through or watch it animate automatically.

Building the interactive visualization... I'm sketching out the visualization structure — a three-stage flow where the user query branches to multiple models, then responses get anonymized and ranked, before a final aggregation step produces the answer. I should prioritize gathering solid information first, but given the user's interest in interactive animations, I'll build this visualization as a complementary feature. Let me check the visualization guide for technical guidance.

</details>

I have everything from primary sources. Let me prepare an interactive visualization of the 3-stage flow since you prefer that format, then I'll write up the briefing.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-21T15:22:09.494476Z",
  "stop_timestamp": "2026-05-21T15:22:09.494476Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_013Q8XEtTbtJivst5LKhHkZx",
  "name": "visualize:read_me",
  "input": {
    "modules": [
      "interactive",
      "diagram"
    ],
    "platform": "desktop"
  },
  "message": "read_me",
  "integration_name": "visualize",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": false,
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
  "tool_use_id": "toolu_013Q8XEtTbtJivst5LKhHkZx",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "# Imagine — Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` — SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` — UI mockups, forms, cards, dashboards\n- `interactive` — interactive explainers with controls\n- `chart` — charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` — illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget — hard limits:**\n- Box subtitles: ≤5 words. Detail goes in click-through (`sendPrompt`) or the prose below — not the box.\n- Colors: ≤2 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: ≤4 boxes at full width (~140px each). 5+ boxes → shrink to ≤110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing \"click to learn more\" in prose, the diagram itself must ACTUALLY be sparse. Don't promise brevity then front-load everything.\n\n**Accessibility:** For HTML widgets, begin with a visually-hidden `<h2 class=\"sr-only\">` containing a one-sentence summary of the visualization for screen-reader users. (SVG widgets use `role=\"img\"` with `<title>` and `<desc>` instead — see SVG setup.)\n\nYou create rich visual content — SVG diagrams/illustrations and HTML interactive widgets — that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn't notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** — All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks \"explain X\", write the explanation in your response and use the tool only for the visual that accompanies it. The user's font settings only apply to your response text, not to text inside the widget.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) → content HTML → `<script>` last.\n- **SVG**: `<defs>` (markers) → visual elements immediately.\n- Prefer inline `style=\"...\"` over `<style>` blocks — inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules — that's fine, but don't bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji. Icons = Tabler **outline** webfont (5800+, already loaded): `<i class=\"ti ti-home\"></i>`. Outline only — never use `-filled` suffixes (`ti-heart-filled` etc. are not loaded and will render blank). Inherits color + font-size from parent. Decorative icons get `aria-hidden=\"true\"`; icon-only buttons get `aria-label`. Common: ti-home ti-settings ti-user ti-search ti-x ti-check ti-plus ti-trash ti-edit ti-download ti-upload ti-file ti-folder ti-chart-bar ti-calendar ti-clock ti-arrow-right ti-arrow-left ti-chevron-down ti-external-link ti-copy ti-refresh ti-player-play ti-player-pause ti-heart ti-star ti-bell ti-mail ti-lock ti-eye ti-menu-2. Don't hand-draw icon SVG paths.\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only — host provides the bg)\n- **Typography**: The default font is Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-serif)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px — all `font-weight: 500`. Heading color is pre-set to `var(--color-text-primary)` — don't override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 — they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally — no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` — the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style=\"min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;\">` and put the modal inside — it's a faux viewport that actually contributes layout height.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` — just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text — never plain black or generic gray.\n- **Corners**: use `border-radius: var(--border-radius-md)` (or `-lg` for cards) in HTML. In SVG, `rx=\"4\"` is the default — larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** — if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** — see Philosophy above.\n- **Icon sizing**: Tabler `<i class=\"ti …\">` sizes with `font-size` — 16–20px inline, 24px max decorative. For one-off inline SVG icons, set `width`/`height` explicitly (same limits).\n- No tabs, carousels, or `display: none` sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)\n- No nested scrolling — auto-fit height.\n- Scripts execute after streaming — load libraries via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` (UMD globals), then use the global in a plain `<script>` that follows.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`. All other origins are blocked by the sandbox — the request silently fails.\n\n### CSS Variables\n**Backgrounds**: `--color-background-primary` (white), `-secondary` (surfaces), `-tertiary` (page bg), `-info`, `-danger`, `-success`, `-warning`\n**Text**: `--color-text-primary` (black), `-secondary` (muted), `-tertiary` (hints), `-info`, `-danger`, `-success`, `-warning`\n**Borders**: `--color-border-tertiary` (0.15α, default), `-secondary` (0.3α, hover), `-primary` (0.4α), semantic `-info/-danger/-success/-warning`\n**Typography**: `--font-sans`, `--font-serif`, `--font-mono`\n**Layout**: `--border-radius-md` (8px), `--border-radius-lg` (12px — preferred for most components), `--border-radius-xl` (16px)\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** — every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes — they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) — never omit fill or use `fill=\"inherit\"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--color-text-primary, --color-text-secondary) for text. Never hardcode colors like color: #333 — invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user's next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href=\"https://...\">` just works — clicks are intercepted and open the host's link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n\n\n## UI components\n\n### Layout width\nThe widget container is 680px wide. Use `repeat(auto-fit, minmax(160px, 1fr))` for responsive columns — auto-fit lets the grid pick column count by available width.\n\n### Aesthetic\nFlat, clean, white surfaces. Minimal 0.5px borders. Generous whitespace. No gradients, no shadows (except functional focus rings). Everything should feel native to claude.ai — like it belongs on the page, not embedded from somewhere else.\n\n### Tokens\n- Borders: always `0.5px solid var(--color-border-tertiary)` (or `-secondary` for emphasis)\n- Corner radius: `var(--border-radius-md)` for most elements, `var(--border-radius-lg)` for cards\n- Cards: white bg (`var(--color-background-primary)`), 0.5px border, radius-lg, padding 1rem 1.25rem\n- Form elements (input, select, textarea, button, range slider) are pre-styled — write bare tags. Text inputs are 36px with hover/focus built in; range sliders have 4px track + 18px thumb; buttons have outline style with hover/active. Only add inline styles to override (e.g., different width).\n- Buttons: pre-styled with transparent bg, 0.5px border-secondary, hover bg-secondary, active scale(0.98). If it triggers sendPrompt, append a ↗ arrow.\n- **Round every displayed number.** JS float math leaks artifacts — `0.1 + 0.2` gives `0.30000000000000004`, `7 * 1.1` gives `7.700000000000001`. Any number that reaches the screen (slider readouts, stat card values, axis labels, data-point labels, tooltips, computed totals) must go through `Math.round()`, `.toFixed(n)`, or `Intl.NumberFormat`. Pick the precision that makes sense for the context — integers for counts, 1–2 decimals for percentages, `toLocaleString()` for currency. For range sliders, also set `step=\"1\"` (or step=\"0.1\" etc.) so the input itself emits round values.\n- Spacing: use rem for vertical rhythm (1rem, 1.5rem, 2rem), px for component-internal gaps (8px, 12px, 16px)\n- Box-shadows: none, except `box-shadow: 0 0 0 Npx` focus rings on inputs\n\n### Metric cards\nFor summary numbers (revenue, count, percentage) — surface card with muted 13px label above, 24px/500 number below. `background: var(--color-background-secondary)`, no border, `border-radius: var(--border-radius-md)`, padding 1rem. Use in grids of 2-4 with `gap: 12px`. Distinct from raised cards (which have white bg + border).\n\n### Layout\n- Editorial (explanatory content): no card wrapper, prose flows naturally\n- Card (bounded objects like a contact record, receipt): single raised card wraps the whole thing\n- Don't put tables here — output them as markdown in your response text\n\n**Grid overflow:** `grid-template-columns: 1fr` has `min-width: auto` by default — children with large min-content push the column past the container. Use `minmax(0, 1fr)` to clamp.\n\n**Table overflow:** Tables with many columns auto-expand past `width: 100%` if cell contents exceed it. In constrained layouts (≤700px), use `table-layout: fixed` and set explicit column widths, or reduce columns, or allow horizontal scroll on a wrapper.\n\n### Mockup presentation\nContained mockups — mobile screens, chat threads, single cards, modals, small UI components — should sit on a background surface (`var(--color-background-secondary)` container with `border-radius: var(--border-radius-lg)` and padding, or a device frame) so they don't float naked on the widget canvas. Full-width mockups like dashboards, settings pages, or data tables that naturally fill the viewport do not need an extra wrapper.\n\n### 1. Interactive explainer — learn how something works\n*\"Explain how compound interest works\" / \"Teach me about sorting algorithms\"*\n\nUse HTML for the interactive controls — sliders, buttons, live state displays, charts. Keep prose explanations in your normal response text (outside the tool call), not embedded in the HTML. No card wrapper. Whitespace is the container.\n\n```html\n<div style=\"display: flex; align-items: center; gap: 12px; margin: 0 0 1.5rem;\">\n  <label style=\"font-size: 14px; color: var(--color-text-secondary);\">Years</label>\n  <input type=\"range\" min=\"1\" max=\"40\" value=\"20\" id=\"years\" style=\"flex: 1;\" />\n  <span style=\"font-size: 14px; font-weight: 500; min-width: 24px;\" id=\"years-out\">20</span>\n</div>\n\n<div style=\"display: flex; align-items: baseline; gap: 8px; margin: 0 0 1.5rem;\">\n  <span style=\"font-size: 14px; color: var(--color-text-secondary);\">£1,000 →</span>\n  <span style=\"font-size: 24px; font-weight: 500;\" id=\"result\">£3,870</span>\n</div>\n\n<div style=\"margin: 2rem 0; position: relative; height: 240px;\">\n  <canvas id=\"chart\"></canvas>\n</div>\n```\n\nUse `sendPrompt()` to let users ask follow-ups: `sendPrompt('What if I increase the rate to 10%?')`\n\n### 2. Compare options — decision making\n*\"Compare pricing and features of these products\" / \"Help me choose between React and Vue\"*\n\nUse HTML. Side-by-side card grid for options. Highlight differences with semantic colors. Interactive elements for filtering or weighting.\n\n- Each option in a card. Use badges for key differentiators. A leading Tabler icon (`<i class=\"ti ti-NAME\">` at 20px, `aria-hidden`) anchors each option visually — pick the most apt name per option.\n- Add `sendPrompt()` buttons: `sendPrompt('Tell me more about the Pro plan')`\n- Don't put comparison tables inside this tool — output them as regular markdown tables in your response text instead. The tool is for the visual card grid only.\n- When one option is recommended or \"most popular\", accent its card with `border: 2px solid var(--color-border-info)` only (2px is deliberate — the only exception to the 0.5px rule, used to accent featured items) — keep the same background and border as the other cards. Add a small badge (e.g. \"Most popular\") above or inside the card header using `background: var(--color-background-info); color: var(--color-text-info); font-size: 12px; padding: 4px 12px; border-radius: var(--border-radius-md)`.\n\n### 3. Data record — bounded UI object\n*\"Show me a Salesforce contact card\" / \"Create a receipt for this order\"*\n\nUse HTML. Wrap the entire thing in a single raised card. All content is sans-serif since it's pure UI. Use an avatar/initials circle for people (see example below).\n\n```html\n<div style=\"background: var(--color-background-primary); border-radius: var(--border-radius-lg); border: 0.5px solid var(--color-border-tertiary); padding: 1rem 1.25rem;\">\n  <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 16px;\">\n    <div style=\"width: 44px; height: 44px; border-radius: 50%; background: var(--color-background-info); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 14px; color: var(--color-text-info);\">MR</div>\n    <div>\n      <p style=\"font-weight: 500; font-size: 15px; margin: 0;\">Maya Rodriguez</p>\n      <p style=\"font-size: 13px; color: var(--color-text-secondary); margin: 0;\">VP of Engineering</p>\n    </div>\n  </div>\n  <div style=\"border-top: 0.5px solid var(--color-border-tertiary); padding-top: 12px;\">\n    <table style=\"width: 100%; font-size: 13px;\">\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\"><i class=\"ti ti-mail\" style=\"font-size:16px; vertical-align:-2px; margin-right:6px\" aria-hidden=\"true\"></i>Email</td><td style=\"text-align: right; padding: 4px 0; color: var(--color-text-info);\">m.rodriguez@acme.com</td></tr>\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\"><i class=\"ti ti-phone\" style=\"font-size:16px; vertical-align:-2px; margin-right:6px\" aria-hidden=\"true\"></i>Phone</td><td style=\"text-align: right; padding: 4px 0;\">+1 (415) 555-0172</td></tr>\n    </table>\n  </div>\n</div>\n```\n\n\n## Color palette\n\n9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.\n\n| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |\n|-------|------|------|-----|-----|-----|-----|-----|------|\n| `c-purple` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |\n| `c-teal` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |\n| `c-coral` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |\n| `c-pink` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |\n| `c-gray` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |\n| `c-blue` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |\n| `c-green` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |\n| `c-amber` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |\n| `c-red` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |\n\n**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:\n- Group nodes by **category** — all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.\n- For illustrative diagrams, map colors to **physical properties** — warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.\n- Use **gray for neutral/structural** nodes (start, end, generic steps).\n- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.\n- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept — those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)\n\n**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --color-text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** — title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.\n\n**Light/dark mode quick pick** — use only stops from the table, never off-table hex values:\n- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**\n- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**\n- Apply `c-{ramp}` to a `<g>` wrapping shape+text, or directly to a `<rect>`/`<circle>`/`<ellipse>`. Never to `<path>` — paths don't get ramp fill. For colored connector strokes use inline `stroke=\"#...\"` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.\n\nFor status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.\n\n\n## SVG setup\n\n**ViewBox safety checklist** — before finalizing any SVG, verify:\n1. Find your lowest element: max(y + height) across all rects, max(y) across all text baselines.\n2. Set viewBox height = that value + 40px buffer.\n3. Find your rightmost element: max(x + width) across all rects. All content must stay within x=0 to x=680.\n4. For text with text-anchor=\"end\", the text extends LEFT from x. If x=118 and text is 200px wide, it starts at x=-82 — outside the viewBox. Increase x or use text-anchor=\"start\".\n5. Never use negative x or y coordinates. The viewBox starts at 0,0.\n6. **No unintentional overlaps.** For every pair of elements that aren't meant to layer (label-on-label, label-on-arrow, box-on-box, callout-on-shape), check their bounding boxes do not intersect. The only allowed overlaps are deliberate: a label centered inside its own box, an arrowhead touching the box it points to, a highlight rect behind the thing it highlights. If two unrelated elements would collide, move one — shorten the label, shift the y, add a row. A diagram with crossed labels reads as broken regardless of how good the content is.\n7. Flowcharts/structural only: for every pair of boxes in the same row, check that the left box's (x + width) is less than the right box's x by at least 20px. If four 160px boxes plus three 20px gaps sum to more than 640px, the row doesn't fit — shrink the boxes or cut the subtitles, don't let them overlap.\n\n**SVG setup**: `<svg width=\"100%\" viewBox=\"0 0 680 H\" role=\"img\"><title>…</title><desc>…</desc>…` — 680px wide, flexible height. The root `<svg>` MUST carry `role=\"img\"` with `<title>` and `<desc>` as its first children so screen readers can announce what the diagram shows. Set H to fit content tightly — the last element's bottom edge + 40px padding. Don't leave excess empty space below the content. Safe area: x=40 to x=640, y=40 to y=(H-40). Background transparent. **Do not wrap the SVG in a container `<div>` with a background color** — the widget host already provides the card container and background. Output the raw `<svg>` element directly.\n\n**The 680 in viewBox is load-bearing — do not change it.** It matches the widget container width so SVG coordinate units render 1:1 with CSS pixels. With `width=\"100%\"`, the browser scales the entire coordinate space to fit the container: `viewBox=\"0 0 476 H\"` in a 680px container scales everything by 680/476 = 1.43×, so your `class=\"th\"` 14px text renders at ~20px. The font calibration table below and all \"text fits in box\" math assume 1:1. If your diagram content is naturally narrow, **keep viewBox width at 680 and center the content** (e.g. content spans x=240..440) — do not shrink the viewBox to hug the content. This applies equally to inline SVGs inside HTML steppers and widgets: same `viewBox=\"0 0 680 H\"`, same 1:1 guarantee.\n\n**viewBox height:** After layout, find max_y (bottom-most point of any shape, including text baselines + 4px descent). Set viewBox height = max_y + 20. Don't guess.\n\n**text-anchor='end' at x<60 is risky** — the longest label will extend left past x=0. Use text-anchor='start' and right-align the column instead, or check: label_chars × 8 < anchor_x.\n\n**One SVG per tool call** — each call must contain exactly one <svg> element. Never leave an abandoned or partial SVG in the output. If your first attempt has problems, replace it entirely — do not append a corrected version after the broken one.\n\n**Style rules for all diagrams**:\n- Every `<text>` element must carry one of the pre-built classes (`t`, `ts`, `th`). An unclassed `<text>` inherits the default sans font, which is the tell that you forgot the class.\n- Use only two font sizes: 14px for node/region labels (class=\"t\" or \"th\"), 12px for subtitles, descriptions, and arrow labels (class=\"ts\"). No other sizes.\n- No decorative step numbers, large numbering, or oversized headings outside boxes.\n- No icons or illustrations inside boxes — text only. (Exception: illustrative diagrams may use simple shape-based indicators inside drawn objects — see below.)\n- Sentence case on all labels.\n\n**Font size calibration for diagram text labels** - Here's csv table to give you better sense of the Anthropic Sans font rendering width:\n```csv\ntext, chars length, font-weight, font-size, rendered width\nAuthentication Service, chars: 22, font-weight: 500, font-size: 14px, width: 167px\nBackground Job Processor, chars: 24, font-weight: 500, font-size: 14px, width: 201px\nDetects and validates incoming tokens, chars: 37, font-weight: 400, font-size: 14px, width: 279px\nforwards request to, chars: 19, font-weight: 400, font-size: 12px, width: 123px\nデータベースサーバー接続, chars: 12, font-weight: 400, font-size: 14px, width: 181px\n```\n\nBefore placing text in a box, check: does (text width + 2×padding) fit the container?\n\n**SVG `<text>` never auto-wraps.** Every line break needs an explicit `<tspan x=\"...\" dy=\"1.2em\">`. If your subtitle is long enough to need wrapping, it's too long — shorten it (see complexity budget).\n\n**Example check**: You want to put \"Glucose (C₆H₁₂O₆)\" in a rounded rect. The text is 20 characters at 14px ≈ 180px wide. Add 2×24px padding = 228px minimum box width. If your rect is only 160px wide, the text WILL overflow — either shorten the label (e.g. just \"Glucose\") or widen the box. Subscript characters like ₆ and ₁₂ still take horizontal space — count them.\n\n**Pre-built classes** (already loaded in SVG widget):\n- `class=\"t\"` = sans 14px primary, `class=\"ts\"` = sans 12px secondary, `class=\"th\"` = sans 14px medium (500)\n- `class=\"box\"` = neutral rect (bg-secondary fill, border stroke)\n- `class=\"node\"` = clickable group with hover effect (cursor pointer, slight dim on hover)\n- `class=\"arr\"` = arrow line (1.5px, open chevron head)\n- `class=\"leader\"` = dashed leader line (tertiary stroke, 0.5px, dashed)\n- `class=\"c-{ramp}\"` = colored node (c-blue, c-teal, c-amber, c-green, c-red, c-purple, c-coral, c-pink, c-gray). Apply to `<g>` or shape element (rect/circle/ellipse), NOT to paths. Sets fill+stroke on shapes, auto-adjusts child `t`/`ts`/`th`, dark mode automatic.\n\n**c-{ramp} nesting:** These classes use direct-child selectors (`>`). Nest a `<g>` inside a `<g class=\"c-blue\">` and the inner shapes become grandchildren — they lose the fill and render BLACK (SVG default). Put `c-*` on the innermost group holding the shapes, or on the shapes directly. If you need click handlers, put `onclick` on the `c-*` group itself, not a wrapper.\n\n- Short aliases: `var(--p)`, `var(--s)`, `var(--t)`, `var(--bg2)`, `var(--b)`\n- Arrow marker: always include this `<defs>` at the start of every SVG:\n  `<defs><marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker></defs>`\n  Then use `marker-end=\"url(#arrow)\"` on lines. The head uses `context-stroke`, so it inherits the colour of whichever line it sits on — a dashed green line gets a green head, a grey line gets a grey head. Never a colour mismatch. Do not add filters or extra markers to `<defs>`. `<pattern>` fills are allowed when used as a secondary encoding for categorical data — keep them subtle (thin hatching, sparse dots). Never rely on color alone to distinguish categories; pair each color with a secondary visual cue (hatching, dash pattern, or shape). Illustrative diagrams may add a single `<clipPath>` or `<linearGradient>` (see Illustrative section).\n\n**Minimize standalone labels.** Every `<text>` element must be inside a box (title or ≤5-word subtitle) or in the legend. Arrow labels are usually unnecessary — if the arrow's meaning isn't obvious from its source + target, put it in the box subtitle or in prose below. Labels floating in space collide with things and are ambiguous.\n\n**Stroke width:** Use 0.5px strokes for diagram borders and edges — not 1px or 2px. Thin strokes feel more refined.\n\n**Connector paths need `fill=\"none\"`.** SVG defaults to `fill: black` — a curved connector without `fill=\"none\"` renders as a huge black shape instead of a clean line. Every `<path>` or `<polyline>` used as a connector/arrow MUST have `fill=\"none\"`. Only set fill on shapes meant to be filled (rects, circles, polygons).\n\n**Rect rounding:** `rx=\"4\"` for subtle corners. `rx=\"8\"` max for emphasized rounding. `rx` ≥ half the height = pill shape — deliberate only.\n\n**Schematic containers use dashed rects with a label.** Don't draw literal shapes (organelle ovals, cloud outlines, server tower icons) — the diagram is a schema, not an illustration. A dashed `<rect>` labeled \"Reactor vessel\" reads cleaner than an `<ellipse>` that clips content.\n\n**Lines stop at component edges.** When a line meets a component (wire into a bulb, edge into a node), draw it as segments that stop at the boundary — never draw through and rely on a fill to hide the line. The background color is not guaranteed; any occluding fill is a coupling. Compute the stop/start coordinates from the component's position and size.\n\n**Physical-color scenes (sky, water, grass, skin, materials):** Use ALL hardcoded hex — never mix with `c-*` theme classes. The scene should not invert in dark mode. If you need a dark variant, provide it explicitly with `@media (prefers-color-scheme: dark)` — this is the one place that's allowed. Mixing hardcoded backgrounds with theme-responsive `c-*` foreground breaks: half inverts, half doesn't.\n\n**No rotated text**. `<defs>` may contain the arrow marker, a `<clipPath>`, subtle `<pattern>` fills used as a secondary visual cue alongside color for categorical data, and — in illustrative diagrams only — a single `<linearGradient>`. Nothing else: no filters, no extra markers.\n\n\n## Diagram types\n*\"Explain how compound interest works\" / \"How does a process scheduler work\"*\n\n**Two rules that cause most diagram failures — check these before writing each arrow and each box:**\n1. **Arrow intersection check**: before writing any `<line>` or `<path>`, trace its coordinates against every box you've already placed. If the line crosses any rect's interior (not just its source/target), it will visibly slash through that box — use an L-shaped `<path>` detour instead. This applies to arrows crossing labels too.\n2. **Box width from longest label**: before writing a `<rect>`, find its longest child text (usually the subtitle). `rect_width = max(title_chars × 8, subtitle_chars × 7) + 24`. A 100px-wide box holds at most a 10-char subtitle. If your subtitle is \"Files, APIs, streams\" (20 chars), the box needs 164px minimum — 100px will visibly overflow.\n\n**Tier packing:** Compute total width BEFORE placing. Example — 4 pub/sub consumer boxes:\n- WRONG: x=40,160,260,360 w=160 → 40-60px overlaps (4×160=640 > 480 available)\n- RIGHT: x=50,200,350,500 w=130 gap=20 → fits (4×130 + 3×20 = 580 ≤ 590 safe width; right edge at 630 ≤ 640)\nWork bottom-up for trees: size leaf tier first, parent width ≥ sum of children.\n\n**Diagrams are the hardest use case** — they have the highest failure rate due to precise coordinate math. Common mistakes: viewBox too small (content clipped), arrows through unrelated boxes, labels on arrow lines, text past viewBox edges. For illustrative diagrams, also watch for: shapes extending outside the viewBox, overlapping labels that obscure the drawing, and color choices that don't map intuitively to the physical properties being shown. Double-check coordinates before finalizing.\n\nUse SVG for diagrams. The widget automatically wraps SVG output in a card.\n\n**Pick the right diagram type.** The decision is about *intent*, not subject matter. Ask: is the user trying to *document* this, or *understand* it?\n\n**Reference diagrams** — the user wants a map they can point at. Precision matters more than feeling. Boxes, labels, arrows, containment. These are the diagrams you'd find in documentation.\n- **Flowchart** — steps in sequence, decisions branching, data transforming. Good for: approval workflows, request lifecycles, build pipelines, \"what happens when I click submit\". Trigger phrases: *\"walk me through the process\"*, *\"what are the steps\"*, *\"what's the flow\"*.\n- **Structural diagram** — things inside other things. Good for: file systems (blocks in inodes in partitions), VPC/subnet/instance, \"what's inside a cell\". Trigger phrases: *\"what's the architecture\"*, *\"how is this organised\"*, *\"where does X live\"*.\n\n**Intuition diagrams** — the user wants to *feel* how something works. The goal isn't a correct map, it's the right mental model. These should look nothing like a flowchart. The subject doesn't need a physical form — it needs a *visual metaphor*.\n- **Illustrative diagram** — draw the mechanism. Physical things get cross-sections (water heaters, engines, lungs). Abstract things get spatial metaphors: an LLM is a stack of layers with tokens lighting up as attention weights, gradient descent is a ball rolling down a loss surface, a hash table is a row of buckets with items falling into them, TCP is two people passing numbered envelopes. Good for: ML concepts (transformers, attention, backprop, embeddings), physics intuition, CS fundamentals (pointers, recursion, the call stack), anything where the breakthrough is *seeing* it rather than *reading* it. Trigger phrases: *\"how does X actually work\"*, *\"explain X\"*, *\"I don't get X\"*, *\"give me an intuition for X\"*.\n\n**Route on the verb, not the noun.** Same subject, different diagram depending on what was asked:\n\n| User says | Type | What to draw |\n|---|---|---|\n| \"how do LLMs work\" | **Illustrative** | Token row, stacked layer slabs, attention threads glowing warm between tokens. Go interactive if you can. |\n| \"transformer architecture\" | Structural | Labelled boxes: embedding, attention heads, FFN, layer norm. |\n| \"how does attention work\" | **Illustrative** | One query token, a fan of lines to every key, line opacity = weight. |\n| \"how does gradient descent work\" | **Illustrative** | Contour surface, a ball, a trail of steps. Slider for learning rate. |\n| \"what are the training steps\" | Flowchart | Forward → loss → backward → update. Boxes and arrows. |\n| \"how does TCP work\" | **Illustrative** | Two endpoints, numbered packets in flight, an ACK returning. |\n| \"TCP handshake sequence\" | Flowchart | SYN → SYN-ACK → ACK. Three boxes. |\n| \"explain the Krebs cycle\" / \"how does the event loop work\" | **HTML stepper** | Click through stages. Never a ring. |\n| \"how does a hash map work\" | **Illustrative** | Key falling through a funnel into one of N buckets. |\n| \"draw the database schema\" / \"show me the ERD\" | **mermaid.js** | `erDiagram` syntax. Not SVG. |\n\nThe illustrative route is the default for *\"how does X work\"* with no further qualification. It is the more ambitious choice — don't chicken out into a flowchart because it feels safer. Claude draws these well.\n\nDon't mix families in one diagram. If you need both, draw the intuition version first (build the mental model), then the reference version (fill in the precise labels) as a second tool call with prose between.\n\n**For complex topics, use multiple SVG calls** — break the explanation into a series of smaller diagrams rather than one dense diagram. Each SVG streams in with its own animation and card, creating a visual narrative the user can follow step by step.\n\n**Always add prose between diagrams** — never stack multiple SVG calls back-to-back without text. Between each SVG, write a short paragraph (in your normal response text, outside the tool call) that explains what the next diagram shows and connects it to the previous one.\n\n**Promise only what you deliver** — if your response text says \"here are three diagrams\", you must include all three tool calls. Never promise a follow-up diagram and omit it. If you can only fit one diagram, adjust your text to match. One complete diagram is better than three promised and one delivered.\n\n#### Flowchart\n\nFor sequential processes, cause-and-effect, decision trees.\n\n**Planning**: Size boxes to fit their text generously. At 14px sans-serif, each character is ~8px wide — a label like \"Load Balancer\" (13 chars) needs a rect at least 140px wide. When in doubt, make boxes wider and leave more space between them. Cramped diagrams are the most common failure mode.\n\n**Special characters are wider**: Chemical formulas (C₆H₁₂O₆), math notation (∑, ∫, √), subscripts/superscripts via <tspan> with dy/baseline-shift, and Unicode symbols all render wider than plain Latin characters. For labels containing formulas or special notation, add 30-50% extra width to your estimate. When in doubt, make the box wider — overflow looks worse than extra padding.\n\n**Spacing**: 60px minimum between boxes, 24px padding inside boxes, 12px between text and edges. Leave 10px gap between arrowheads and box edges. Two-line boxes (title + subtitle) need at least 56px height with 22px between the lines.\n\n**Vertical text placement**: Every `<text>` inside a box needs `dominant-baseline=\"central\"`, with y set to the *centre* of the slot it sits in. Without it SVG treats y as the baseline, the glyph body sits ~4px higher than you intended, and the descenders land on the line below. Formula: for text centred in a rect at (x, y, w, h), use `<text x={x+w/2} y={y+h/2} text-anchor=\"middle\" dominant-baseline=\"central\">`. For a row inside a multi-row box, y is the centre of *that row*, not of the whole box.\n\n**Layout**: Prefer single-direction flows (all top-down or all left-right). Keep diagrams simple — max 4-5 nodes per diagram. The widget is narrow (~680px) so complex layouts break.\n\n**When the prompt itself is over budget**: if the user lists 6+ components (\"draw me auth, products, orders, payments, gateway, queue\"), don't draw all of them in one pass — you'll get overlapping boxes and arrows through text, every time. Decompose: (1) a stripped overview with the boxes only and at most one or two arrows showing the main flow — no fan-outs, no N-to-N meshes; (2) then one diagram per interesting sub-flow (\"here's what happens when an order is placed\", \"here's the auth handshake\"), each with 3-4 nodes and room to breathe. Count the nouns before you draw. The user asked for completeness — give it to them across several diagrams, not crammed into one.\n\n**Cycles don't get drawn as rings.** If the last stage feeds back into the first (Krebs cycle, event loop, GC mark-and-sweep, TCP retransmit), your instinct is to place the stages around a circle. Don't. Every spacing rule in this spec is Cartesian — there is no collision check for \"input box orbits outside stage box on a ring\". You will get satellite boxes overlapping the stages they feed, labels sitting on the dashed circle, and tangential arrows that point nowhere. The ring is decoration; the loop is conveyed by the return arrow.\n\nBuild a stepper in HTML. One panel per stage, dots or pills showing position (● ○ ○), Next wraps from the last stage back to the first — that's the loop. Each panel owns its inputs and products: an event loop's pending callbacks live *inside* the Poll panel, not floating next to a box on a ring. Nothing collides because nothing shares the canvas. Only fall back to a linear SVG (stages in a row, curved `<path>` return arrow) when there's one input and one output total and no per-stage detail to show.\n\n**Feedback loops in linear flows:** Don't draw a physical arrow traversing the layout (it fights the flow direction and clips edges). Instead:\n- Small `↻` glyph + text near the cycle point: `<text>↻ returns to start</text>`\n- Or restructure the whole diagram as a circle if the cycle IS the point\n\n**Arrows:** A line from A to B must not cross any other box or label. If the direct path crosses something, route around with an L-bend: `<path d=\"M x1 y1 L x1 ymid L x2 ymid L x2 y2\"/>`. Place arrow labels in clear space, not on the midpoint.\n\nKeep all nodes the same height when they have the same content type (e.g. all single-line boxes = 44px, all two-line boxes = 56px).\n\n**Flowchart components** — use these patterns consistently:\n\n*Single-line node* (44px tall): title only. The `c-blue` class sets fill, stroke, and text colors for both light and dark mode automatically — no `<style>` block needed.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about T-cells')\">\n  <rect x=\"100\" y=\"20\" width=\"180\" height=\"44\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"190\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"central\">T-cells</text>\n</g>\n```\n\n*Two-line node* (56px tall): bold title + muted subtitle.\n```svg\n<g class=\"node c-blue\" onclick=\"sendPrompt('Tell me more about dendritic cells')\">\n  <rect x=\"100\" y=\"20\" width=\"200\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"200\" y=\"38\" text-anchor=\"middle\" dominant-baseline=\"central\">Dendritic cells</text>\n  <text class=\"ts\" x=\"200\" y=\"56\" text-anchor=\"middle\" dominant-baseline=\"central\">Detect foreign antigens</text>\n</g>\n```\n\n*Connector* (no label — meaning is clear from source + target):\n```svg\n<line x1=\"200\" y1=\"76\" x2=\"200\" y2=\"120\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n*Neutral node* (gray, for start/end/generic steps): use `class=\"box\"` for auto-themed fill/stroke, and default text classes.\n\nMake all nodes clickable by default — wrap in `<g class=\"node\" onclick=\"sendPrompt('...')\">`. The hover effect is built in.\n\n#### Structural diagram\n\nFor concepts where physical or logical containment matters — things inside other things.\n\n**When to use**: The explanation depends on *where* processes happen. Examples: how a cell works (organelles inside a cell), how a file system works (blocks inside inodes inside partitions), how a building's HVAC works (ducts inside floors inside a building), how a CPU cache hierarchy works (L1 inside core, L2 shared).\n\n**Core idea**: Large rounded rects are containers. Smaller rects inside them are regions or sub-structures. Text labels describe what happens in each region. Arrows show flow between regions or from external inputs/outputs.\n\n**Container rules**:\n- Outermost container: large rounded rect, rx=20-24, lightest fill (50 stop), 0.5px stroke (600 stop). Label at top-left inside, 14px bold.\n- Inner regions: medium rounded rects, rx=8-12, next shade fill (100-200 stop). Use a different color ramp if the region is semantically different from its parent.\n- 20px minimum padding inside every container — text and inner regions must not touch the container edges.\n- Max 2-3 nesting levels. Deeper nesting gets unreadable at 680px width.\n\n**Layout**:\n- Place inner regions side by side within the container, with 16px+ gap between them.\n- External inputs (sunlight, water, data, requests) sit outside the container with arrows pointing in.\n- External outputs sit outside with arrows pointing out.\n- Keep external labels short — one word or a short phrase. Details go in the prose between diagrams.\n\n**What goes inside regions**: Text only — the region name (14px bold) and a short description of what happens there (12px). Don't put flowchart-style boxes inside regions. Don't draw illustrations or icons inside.\n\n**Structural container example** (library branch with two side-by-side regions, an internal labeled arrow, and an external input). ViewBox 700x320, horizontal layout, color classes handle both light and dark mode — no `<style>` block:\n```svg\n<defs>\n  <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n    <path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/>\n  </marker>\n</defs>\n<!-- Outer container -->\n<g class=\"c-green\">\n  <rect x=\"120\" y=\"30\" width=\"560\" height=\"260\" rx=\"20\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"400\" y=\"62\" text-anchor=\"middle\">Library branch</text>\n  <text class=\"ts\" x=\"400\" y=\"80\" text-anchor=\"middle\">Main floor</text>\n</g>\n<!-- Inner: Circulation desk -->\n<g class=\"c-teal\">\n  <rect x=\"150\" y=\"100\" width=\"220\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"260\" y=\"130\" text-anchor=\"middle\">Circulation desk</text>\n  <text class=\"ts\" x=\"260\" y=\"148\" text-anchor=\"middle\">Checkouts, returns</text>\n</g>\n<!-- Inner: Reading room -->\n<g class=\"c-amber\">\n  <rect x=\"450\" y=\"100\" width=\"210\" height=\"160\" rx=\"12\" stroke-width=\"0.5\"/>\n  <text class=\"th\" x=\"555\" y=\"130\" text-anchor=\"middle\">Reading room</text>\n  <text class=\"ts\" x=\"555\" y=\"148\" text-anchor=\"middle\">Seating, reference</text>\n</g>\n<!-- Arrow between inner boxes with label -->\n<text class=\"ts\" x=\"410\" y=\"175\" text-anchor=\"middle\">Books</text>\n<line x1=\"370\" y1=\"185\" x2=\"448\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n<!-- External input: New acq. — text vertically aligned with arrow -->\n<text class=\"ts\" x=\"40\" y=\"185\" text-anchor=\"middle\">New acq.</text>\n<line x1=\"75\" y1=\"185\" x2=\"118\" y2=\"185\" class=\"arr\" marker-end=\"url(#arrow)\"/>\n```\n\n**Color in structural diagrams**: Nested regions need distinct ramps — `c-{ramp}` classes resolve to fixed fill/stroke stops, so the same class on parent and child gives identical fills and flattens the hierarchy. Pick a *related* ramp for inner structures (e.g. Green for the library envelope, Teal for the circulation desk inside it) and a *contrasting* ramp for a region that does something functionally different (e.g. Amber for the reading room). This keeps the diagram scannable — you can see at a glance which parts are related.\n\n**Database schemas / ERDs — use mermaid.js, not SVG.** A schema table is a header plus N field rows plus typed columns plus crow's-foot connectors. That is a text-layout problem and hand-placing it in SVG fails the same way every time. mermaid.js `erDiagram` does layout, cardinality, and connector routing for free. ERDs only; everything else stays in SVG.\n\n```\nerDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has\n  USERS {\n    uuid id PK\n    string email\n    timestamp created_at\n  }\n  POSTS {\n    uuid id PK\n    uuid user_id FK\n    string title\n  }\n```\n\nUse HTML for ERDs. Import and initialize in a `<script type=\"module\">`. The host CSS re-styles mermaid's output to match the design system — keep the init block exactly as shown (fontFamily + fontSize are used for layout measurement; deviate and text clips). After rendering, replace sharp-cornered entity `<path>` elements with rounded `<rect rx=\"8\">` to match the design system, and strip borders from attribute rows (only the outer container and header row keep visible borders — alternating fill colors separate the rows):\n```html\n<style>\n#erd svg.erDiagram .divider path { stroke-opacity: 0.5; }\n#erd svg.erDiagram .row-rect-odd path,\n#erd svg.erDiagram .row-rect-odd rect,\n#erd svg.erDiagram .row-rect-even path,\n#erd svg.erDiagram .row-rect-even rect { stroke: none !important; }\n</style>\n<div id=\"erd\"></div>\n<script type=\"module\">\nimport mermaid from 'https://esm.sh/mermaid@11/dist/mermaid.esm.min.mjs';\nconst dark = matchMedia('(prefers-color-scheme: dark)').matches;\nawait document.fonts.ready;\nmermaid.initialize({\n  startOnLoad: false,\n  theme: 'base',\n  fontFamily: '\"Anthropic Sans\", sans-serif',\n  themeVariables: {\n    darkMode: dark,\n    fontSize: '13px',\n    fontFamily: '\"Anthropic Sans\", sans-serif',\n    lineColor: dark ? '#9c9a92' : '#73726c',\n    textColor: dark ? '#c2c0b6' : '#3d3d3a',\n  },\n});\nconst { svg } = await mermaid.render('erd-svg', `erDiagram\n  USERS ||--o{ POSTS : writes\n  POSTS ||--o{ COMMENTS : has`);\ndocument.getElementById('erd').innerHTML = svg;\n\n// Round only the outermost entity box corners (not internal row stripes)\ndocument.querySelectorAll('#erd svg.erDiagram .node').forEach(node => {\n  const firstPath = node.querySelector('path[d]');\n  if (!firstPath) return;\n  const d = firstPath.getAttribute('d');\n  const nums = d.match(/-?[\\d.]+/g)?.map(Number);\n  if (!nums || nums.length < 8) return;\n  const xs = [nums[0], nums[2], nums[4], nums[6]];\n  const ys = [nums[1], nums[3], nums[5], nums[7]];\n  const x = Math.min(...xs), y = Math.min(...ys);\n  const w = Math.max(...xs) - x, h = Math.max(...ys) - y;\n  const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');\n  rect.setAttribute('x', x); rect.setAttribute('y', y);\n  rect.setAttribute('width', w); rect.setAttribute('height', h);\n  rect.setAttribute('rx', '8');\n  for (const a of ['fill', 'stroke', 'stroke-width', 'class', 'style']) {\n    if (firstPath.hasAttribute(a)) rect.setAttribute(a, firstPath.getAttribute(a));\n  }\n  firstPath.replaceWith(rect);\n});\n\n// Strip borders from attribute rows (mermaid v11: .row-rect-odd / .row-rect-even)\ndocument.querySelectorAll('#erd svg.erDiagram .row-rect-odd path, #erd svg.erDiagram .row-rect-even path').forEach(p => {\n  p.setAttribute('stroke', 'none');\n});\n</script>\n```\n\nWorks identically for `classDiagram` — swap the diagram source; init stays the same.\n\n#### Illustrative diagram\n\nFor building *intuition*. The subject might be physical (an engine, a lung) or completely abstract (attention, recursion, gradient descent) — what matters is that a spatial drawing conveys the mechanism better than labelled boxes would. These are the diagrams that make someone go \"oh, *that's* what it's doing.\"\n\n**Two flavours, same rules:**\n- **Physical subjects** get drawn as simplified versions of themselves. Cross-sections, cutaways, schematics. A water heater is a tank with a burner underneath. A lung is a branching tree in a cavity. You're drawing *the thing*, stylised.\n- **Abstract subjects** get drawn as *spatial metaphors*. You're inventing a shape for something that doesn't have one — but the shape should make the mechanism obvious. A transformer is a stack of horizontal slabs with a bright thread of attention connecting tokens across layers. A hash function is a funnel scattering items into a row of buckets. The call stack is literally a stack of frames growing and shrinking. Embeddings are dots clustering in space. The metaphor *is* the explanation.\n\nThis is the most ambitious diagram type and the one Claude is best at. Lean into it. Use colour for intensity (a hot attention weight glows amber, a cold one stays gray). Use repetition for scale (many small circles = many parameters).\n\n**Prefer interactive over static.** A static cross-section is a good answer; a cross-section you can *operate* is a great one. The decision rule: if the real-world system has a control, give the diagram that control. A water heater has a thermostat — so give the user a slider that shifts the hot/cold boundary, a toggle that fires the burner and animates convection currents. An LLM has input tokens — let the user click one and watch the attention weights re-fan. A cache has a hit rate — let them drag it and watch latency change. Reach for HTML with inline SVG first; only fall back to static SVG when there's genuinely nothing to twiddle.\n\n**When NOT to use**: The user is asking for a *reference*, not an *intuition*. \"What are the components of a transformer\" wants labelled boxes — that's a structural diagram. \"Walk me through our CI pipeline\" wants sequential steps — that's a flowchart. Also skip this when the metaphor would be arbitrary rather than revealing: drawing \"the cloud\" as a cloud shape or \"microservices\" as little houses doesn't teach anything about how they work. If the drawing doesn't make the *mechanism* clearer, don't draw it.\n\n**Fidelity ceiling**: These are schematics, not illustrations. Every shape should read at a glance. If a `<path>` needs more than ~6 segments to draw, simplify it. A tank is a rounded rect, not a Bézier portrait of a tank. A flame is three triangles, not a fire. Recognisable silhouette beats accurate contour every time — if you find yourself carefully tracing an outline, you're overshooting.\n\n**Core principle**: Draw the mechanism, not a diagram *about* the mechanism. Spatial arrangement carries the meaning; labels annotate. A good illustrative diagram works with the labels removed.\n\n**What changes from flowchart/structural rules**:\n\n- **Shapes are freeform.** Use `<path>`, `<ellipse>`, `<circle>`, `<polygon>`, and curved lines to represent real forms. A water tank is a tall rect with rounded bottom. A heart valve is a pair of curved paths. A circuit trace is a thin polyline. You are not limited to rounded rects.\n- **Layout follows the subject's geometry**, not a grid. If the thing is tall and narrow (a water heater, a thermometer), the diagram is tall and narrow. If it's wide and flat (a PCB, a geological cross-section), the diagram is wide. Let the subject dictate proportions within the 680px viewBox width.\n- **Color encodes intensity**, not category. For physical subjects: warm ramps (amber, coral, red) = heat/energy/pressure, cool ramps (blue, teal) = cold/calm, gray = inert structure. For abstract subjects: warm = active/high-weight/attended-to, cool or gray = dormant/low-weight/ignored. A user should be able to glance at the diagram and see *where the action is* without reading a single label.\n- **Layering and overlap are encouraged — for shapes.** Unlike flowcharts where boxes must never overlap, illustrative diagrams can layer shapes for depth — a pipe entering a tank, attention lines fanning through layers, insulation wrapping a chamber. Use z-ordering (later in source = on top) deliberately.\n- **Text is the exception — never let a stroke cross it.** The overlap permission is for shapes only. Every label needs 8px of clear air between its baseline/cap-height and the nearest stroke. Don't solve this with a background rect — solve it by *placing the text somewhere else*. Labels go in the quiet regions: above the drawing, below it, in the margin with a leader line, or in the gap between two fans of lines. If there is no quiet region, the drawing is too dense — remove something or split into two diagrams.\n- **Small shape-based indicators are allowed** when they communicate physical state. Triangles for flames. Circles for bubbles or particles. Wavy lines for steam or heat radiation. Parallel lines for vibration. These aren't decoration — they tell the user what's happening physically. Keep them simple: basic SVG primitives, not detailed illustrations.\n- **One gradient per diagram is permitted** — the only exception to the global no-gradients rule — and only to show a *continuous* physical property across a region (temperature stratification in a tank, pressure drop along a pipe, concentration in a solution). It must be a single `<linearGradient>` between exactly two stops from the same colour ramp. No radial gradients, no multi-stop fades, no gradient-as-aesthetic. If two stacked flat-fill rects communicate the same thing, do that instead.\n- **Animation is permitted for interactive HTML versions.** Use CSS `@keyframes` animating only `transform` and `opacity`. Keep loops under ~2s, and wrap every animation in `@media (prefers-reduced-motion: no-preference)` so it's opt-out by default. Animations should show how the system *behaves* — convection current, rotation, flow — not just move for the sake of moving. No physics engines or heavy libraries.\n\nAll core rules still apply (viewBox 680px, dark mode mandatory, 14/12px text, pre-built classes, arrow marker, clickable nodes).\n\n**Label placement**:\n- Place labels *outside* the drawn object when possible, with a thin leader line (0.5px dashed, `var(--t)` stroke) pointing to the relevant part. This keeps the illustration uncluttered.\n- For large internal zones (like temperature regions in a tank), labels can sit inside if there's ample clear space — minimum 20px from any edge.\n- External labels sit in the margin area or above/below the object. **Pick one side for labels and put them all there** — at 680px wide you don't have room for a drawing *and* label columns on both sides. Reserve at least 140px of horizontal margin on the label side. Labels on the left are the ones that clip: `text-anchor=\"end\"` extends leftward from x, and with multi-line callouts it's very easy to blow past x=0 without noticing. Default to right-side labels with `text-anchor=\"start\"` unless the subject's geometry forces otherwise. Use `class=\"ts\"` (12px) for callouts, `class=\"th\"` (14px medium) for major component names.\n\n**Composition approach**:\n1. Start with the main object's silhouette — the largest shape, centered in the viewBox.\n2. Add internal structure: chambers, pipes, membranes, mechanical parts.\n3. Add external connections: pipes entering/exiting, arrows showing flow direction, labels for inputs and outputs.\n4. Add state indicators last: color fills showing temperature/pressure/concentration, small animated elements showing movement or energy.\n5. Leave generous whitespace around the object for labels — don't crowd annotations against the viewBox edges.\n\n**Static vs interactive**: Static cutaways and cross-sections work best as pure SVG. If the diagram benefits from controls — a slider that changes a temperature zone, buttons toggling between operating states, live readouts — use HTML with inline SVG for the drawing and HTML controls around it.\n\n**Illustrative diagram example** — interactive water heater cross-section with vivid physical-realism colors, animated convection currents, and controls. Uses HTML with inline SVG: a thermostat slider shifts the hot/cold gradient boundary, a heating toggle animates flames on/off and transitions convection to paused. viewBox is 680×560; tank occupies x=180..440, leaving 140px+ of right margin for labels. Smooth convection paths use `stroke-dasharray:5 5` at ~1.6s for a gentle flow feel. A warm-glow overlay on the hot zone pulses subtly when heating is on. Flame shapes use warm gradient fills and clean opacity transitions. Labels sit along the right margin with leader lines.\n```html\n<style>\n  @keyframes conv { to { stroke-dashoffset: -20; } }\n  @keyframes flicker { 0%,100%{opacity:1} 50%{opacity:.82} }\n  @keyframes glow { 0%,100%{opacity:.3} 50%{opacity:.6} }\n  .conv { stroke-dasharray:5 5; animation: conv var(--dur,1.6s) linear infinite; transition: opacity .5s; }\n  .conv.off { opacity:0; animation-play-state:paused; }\n  #flames path { transition: opacity .5s; }\n  #flames.off path { opacity:0; animation:none; }\n  #flames path:nth-child(odd)  { animation: flicker .6s ease-in-out infinite; }\n  #flames path:nth-child(even) { animation: flicker .8s ease-in-out infinite .15s; }\n  #warm-glow { animation: glow 3s ease-in-out infinite; transition: opacity .5s; }\n  #warm-glow.off { opacity:0; animation:none; }\n  .toggle-track { position:relative;width:32px;height:18px;background:var(--color-border-secondary);border-radius:9px;transition:background .2s;display:inline-block; }\n  .toggle-track:has(input:checked) { background:var(--color-text-info); }\n  #heat-toggle:checked + span { transform:translateX(14px); }\n</style>\n<svg width=\"100%\" viewBox=\"0 0 680 560\">\n  <defs>\n    <marker id=\"arrow\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker>\n    <linearGradient id=\"tg\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n      <stop id=\"gh\" offset=\"40%\" stop-color=\"#E8593C\" stop-opacity=\"0.45\"/>\n      <stop id=\"gc\" offset=\"40%\" stop-color=\"#3B8BD4\" stop-opacity=\"0.4\"/>\n    </linearGradient>\n    <linearGradient id=\"fg1\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#E85D24\"/><stop offset=\"60%\" stop-color=\"#F2A623\"/><stop offset=\"100%\" stop-color=\"#FCDE5A\"/></linearGradient>\n    <linearGradient id=\"fg2\" x1=\"0\" y1=\"1\" x2=\"0\" y2=\"0\"><stop offset=\"0%\" stop-color=\"#D14520\"/><stop offset=\"50%\" stop-color=\"#EF8B2C\"/><stop offset=\"100%\" stop-color=\"#F9CB42\"/></linearGradient>\n    <linearGradient id=\"pipe-h\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#D05538\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#D05538\" stop-opacity=\".08\"/></linearGradient>\n    <linearGradient id=\"pipe-c\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\"><stop offset=\"0%\" stop-color=\"#3B8BD4\" stop-opacity=\".25\"/><stop offset=\"100%\" stop-color=\"#3B8BD4\" stop-opacity=\".08\"/></linearGradient>\n    <clipPath id=\"tc\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\"/></clipPath>\n  </defs>\n  <!-- Tank fill -->\n  <g clip-path=\"url(#tc)\"><rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" fill=\"url(#tg)\"/></g>\n  <!-- Warm glow overlay (pulses when heating) -->\n  <g clip-path=\"url(#tc)\"><rect id=\"warm-glow\" x=\"180\" y=\"55\" width=\"260\" height=\"160\" fill=\"#E8593C\" opacity=\".3\"/></g>\n  <!-- Tank shell (double stroke for solidity) -->\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"2.5\" opacity=\".25\"/>\n  <rect x=\"180\" y=\"55\" width=\"260\" height=\"390\" rx=\"14\" fill=\"none\" stroke=\"var(--t)\" stroke-width=\"1\"/>\n  <!-- Hot pipe out (top right) -->\n  <rect x=\"370\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-h)\"/>\n  <path d=\"M378 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <!-- Cold pipe in + dip tube (top left) -->\n  <rect x=\"234\" y=\"14\" width=\"16\" height=\"50\" rx=\"4\" fill=\"url(#pipe-c)\"/>\n  <path d=\"M242 14V55\" stroke=\"var(--t)\" stroke-width=\"3\" stroke-linecap=\"round\" fill=\"none\"/>\n  <path d=\"M242 55V395\" stroke=\"var(--t)\" stroke-width=\"2.5\" stroke-linecap=\"round\" fill=\"none\" opacity=\".5\"/>\n  <!-- Convection currents (curved paths at different speeds) -->\n  <path class=\"conv\" style=\"--dur:1.6s\" fill=\"none\" stroke=\"#D05538\" stroke-width=\"1\" opacity=\".5\" d=\"M350 380C355 320,365 240,358 140Q355 110,340 100\"/>\n  <path class=\"conv\" style=\"--dur:2.1s\" fill=\"none\" stroke=\"#C04828\" stroke-width=\".8\" opacity=\".35\" d=\"M300 390C308 340,320 260,315 170Q312 130,298 115\"/>\n  <path class=\"conv\" style=\"--dur:2.6s\" fill=\"none\" stroke=\"#B05535\" stroke-width=\".7\" opacity=\".3\" d=\"M380 370C382 310,388 230,382 150Q378 120,365 110\"/>\n  <!-- Burner bar -->\n  <rect x=\"188\" y=\"454\" width=\"244\" height=\"5\" rx=\"2\" fill=\"var(--t)\" opacity=\".6\"/>\n  <rect x=\"220\" y=\"462\" width=\"180\" height=\"6\" rx=\"3\" fill=\"var(--t)\" opacity=\".3\"/>\n  <!-- Flames (gradient-filled organic shapes) -->\n  <g id=\"flames\">\n    <path d=\"M240,454Q248,430 252,438Q256,424 260,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M278,454Q285,426 290,434Q295,418 300,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M320,454Q328,428 333,436Q338,420 342,454Z\" fill=\"url(#fg1)\"/>\n    <path d=\"M360,454Q367,430 371,438Q375,422 380,454Z\" fill=\"url(#fg2)\"/>\n    <path d=\"M398,454Q404,434 408,440Q412,428 416,454Z\" fill=\"url(#fg1)\"/>\n  </g>\n  <!-- Labels (right margin) -->\n  <g class=\"node\" onclick=\"sendPrompt('How does hot water exit the tank?')\">\n    <line class=\"leader\" x1=\"386\" y1=\"34\" x2=\"468\" y2=\"70\"/><circle cx=\"386\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"74\">Hot water outlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the cold water inlet work?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"34\" x2=\"468\" y2=\"140\"/><circle cx=\"250\" cy=\"34\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"144\">Cold water inlet</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the dip tube do?')\">\n    <line class=\"leader\" x1=\"250\" y1=\"260\" x2=\"468\" y2=\"220\"/><circle cx=\"250\" cy=\"260\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"224\">Dip tube</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What does the thermostat control?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"250\" x2=\"468\" y2=\"300\"/><circle cx=\"440\" cy=\"250\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"304\">Thermostat</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('What material is the tank made of?')\">\n    <line class=\"leader\" x1=\"440\" y1=\"380\" x2=\"468\" y2=\"380\"/><circle cx=\"440\" cy=\"380\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"384\">Tank wall</text></g>\n  <g class=\"node\" onclick=\"sendPrompt('How does the gas burner heat water?')\">\n    <line class=\"leader\" x1=\"432\" y1=\"454\" x2=\"468\" y2=\"454\"/><circle cx=\"432\" cy=\"454\" r=\"2\" fill=\"var(--t)\"/>\n    <text class=\"ts\" x=\"474\" y=\"458\">Heating element</text></g>\n</svg>\n<div style=\"display:flex;align-items:center;gap:16px;margin:12px 0 0;font-size:13px;color:var(--color-text-secondary)\">\n  <label style=\"display:flex;align-items:center;gap:6px;cursor:pointer;user-select:none\">\n    <span class=\"toggle-track\">\n      <input type=\"checkbox\" id=\"heat-toggle\" checked onchange=\"toggleHeat(this.checked)\" style=\"position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;margin:0\">\n      <span style=\"position:absolute;top:2px;left:2px;width:14px;height:14px;background:#fff;border-radius:50%;transition:transform .2s;pointer-events:none\"></span>\n    </span>\n    Heating\n  </label>\n  <span>Thermostat</span>\n  <input type=\"range\" id=\"temp-slider\" min=\"10\" max=\"90\" value=\"40\" style=\"flex:1\" oninput=\"setTemp(this.value)\">\n  <span id=\"temp-label\" style=\"min-width:36px;text-align:right\">40%</span>\n</div>\n<script>\nfunction setTemp(v) {\n  document.getElementById('gh').setAttribute('offset', v+'%');\n  document.getElementById('gc').setAttribute('offset', v+'%');\n  document.getElementById('temp-label').textContent = v+'%';\n}\nfunction toggleHeat(on) {\n  document.getElementById('flames').classList.toggle('off', !on);\n  document.getElementById('warm-glow').classList.toggle('off', !on);\n  document.querySelectorAll('.conv').forEach(p => p.classList.toggle('off', !on));\n}\n</script>\n```\n\n**Illustrative example — abstract subject** (attention in a transformer). Same rules, no physical object. A row of tokens at the bottom, one query token highlighted, weight-scaled lines fanning to every other token. Caption sits below the fan — clear of every stroke — not inside it.\n```svg\n<rect class=\"c-purple\" x=\"60\" y=\"40\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"80\"  width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<rect class=\"c-purple\" x=\"60\" y=\"120\" width=\"560\" height=\"26\" rx=\"6\" stroke-width=\"0.5\"/>\n<text class=\"ts\" x=\"72\" y=\"57\" >Layer 3</text>\n<text class=\"ts\" x=\"72\" y=\"97\" >Layer 2</text>\n<text class=\"ts\" x=\"72\" y=\"137\">Layer 1</text>\n\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"116\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.25\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"228\" y2=\"146\" stroke-width=\"1.5\" opacity=\"0.4\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"340\" y2=\"146\" stroke-width=\"4\"   opacity=\"1.0\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"452\" y2=\"146\" stroke-width=\"2.5\" opacity=\"0.7\"/>\n<line stroke=\"#EF9F27\" stroke-linecap=\"round\" x1=\"340\" y1=\"230\" x2=\"564\" y2=\"146\" stroke-width=\"1\"   opacity=\"0.2\"/>\n\n<g class=\"node\" onclick=\"sendPrompt('What do the attention weights mean?')\">\n  <rect class=\"c-gray\"  x=\"80\"  y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"192\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-amber\" x=\"304\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"1\"/>\n  <rect class=\"c-gray\"  x=\"416\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <rect class=\"c-gray\"  x=\"528\" y=\"230\" width=\"72\" height=\"36\" rx=\"6\" stroke-width=\"0.5\"/>\n  <text class=\"ts\" x=\"116\" y=\"252\" text-anchor=\"middle\">the</text>\n  <text class=\"ts\" x=\"228\" y=\"252\" text-anchor=\"middle\">cat</text>\n  <text class=\"th\" x=\"340\" y=\"252\" text-anchor=\"middle\">sat</text>\n  <text class=\"ts\" x=\"452\" y=\"252\" text-anchor=\"middle\">on</text>\n  <text class=\"ts\" x=\"564\" y=\"252\" text-anchor=\"middle\">the</text>\n</g>\n\n<text class=\"ts\" x=\"340\" y=\"300\" text-anchor=\"middle\">Line thickness = attention weight from \"sat\" to each token</text>\n```\n\nNote what's *not* here: no boxes labelled \"multi-head attention\", no arrows labelled \"Q/K/V\". Those belong in the structural diagram. This one is about the *feeling* of attention — one token looking at every other token with varying intensity.\n\nThese are starting points, not ceilings. For the water heater: add a thermostat slider, animate the convection current, toggle heating vs standby. For the attention diagram: let the user click any token to become the query, scrub through layers, animate the weights settling. The goal is always to *show* how the thing works, not just *label* it.\n",
      "uuid": "e4d98692-8c94-46e8-aa72-97d8773d5a30"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": "visualize",
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": null,
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

 I'm thinking an interactive stepper would work better than a static flowchart—users could click through each of the three stages and see how the query fans out to the four council models in parallel, then watch how their responses get processed and synthesized.

Writing SVG visualization... Building the interactive widget... Writing the stage buttons and content... I'm realizing the streaming constraint creates a tension here — I need all content visible during the stream, but a three-stage stacked layout would make the widget unwieldy. The best approach is probably to render all three stages in the DOM initially, then use JavaScript after streaming completes to show only the active stage and let users switch between them with the stepper buttons. all.

Actually, the stepper approach is more interactive and Reid wants interactive. Let me do this:

Option A: Stack all 3 stages SVGs vertically. Simple, no JS bugs, but tall.

Option B: Stepper with JS to swap content. More elegant, but the spec says don't use display:none during streaming.

Let me re-read: "No tabs, carousels, or display: none sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)"

Hmm, this is contradictory at first read. I think it means: during streaming, content streams. So if you have display:none on something at stream-time, the content inside renders invisibly and users miss the streaming animation. But after streaming completes, JS-driven steppers where the user explicitly clicks to advance work fine.

So the workaround: have all 3 stages visible during stream, then run a script after streaming finishes to hide stages 2 and 3 and add stepper controls. Or I could just stack all 3 stages vertically with clear headers—that's simpler and more reliable. Three SVG diagrams stacked with prose-style stage headers between them, each showing one stage of the flow.

Actually, the interactive stepper would be more engaging. Let me try the script-after-streaming approach where I initialize the stepper once the DOM is ready, hiding all stages except the active one.

Writing stepper initialization... I'm pivoting to a cleaner approach: a single SVG showing the entire pipeline with three vertical lanes representing each stage, and I'll use opacity to highlight which stage is active as the user clicks through them.

Building the SVG layout... A horizontal pipeline layout might work better, but actually a stepper interface is cleaner — I can render all three SVG diagrams in the DOM and use JavaScript to toggle between stages after the page loads, showing only the relevant flow for each step.

Setting up the stepper controls... Writing the stage toggle logic...

The issue is that during streaming, all three stages render and stack visibly, then after the page loads, the script hides the inactive ones—creating a jarring visual shift. I could instead apply a hiding class during initialization to avoid that flicker, though the current approach should work fine.

Since the SVGs are just visual diagrams without narrative content that needs to stream, I'll accept that hidden stages render invisibly and move forward. I'm going to structure each stage with a class and have the first one active by default, then draft the SVG for the first stage showing the user query flowing into four parallel LLM boxes with their responses collected below.

Drafting the SVG layouts... Writing SVG diagram... Writing SVG layout... Building the SVG pipeline diagram...

Actually, I'm reconsidering the approach — the user wants something as interactive and dynamic as possible, so a static visualization with animated arrows isn't quite enough. A stepper component where they can click through each stage would feel more genuinely interactive, even if it means handling the streaming visibility constraints differently.

Writing the HTML and SVG structure... Writing component styles... Writing SVG diagram... Writing SVG diagram... Writing SVG diagram... Writing SVG diagram... Writing SVG diagram... Writing SVG arrows...

The all-to-all connections are going to create visual clutter, so I'm simplifying the approach. Instead of drawing individual arrows from each response to each model, I'll represent the concept with a single "shuffle" or "batch delivery" indicator in the middle that shows all responses being distributed to the peer models at once. This keeps the diagram cleaner while still conveying the idea that each model receives all anonymized responses. Writing SVG diagram... Writing SVG diagram... Writing the SVG diagrams... Now I'm laying out Stage 2 with the bundling mechanism—four anonymized responses feed into a central bundle indicator, which then distributes to four LLMs for ranking, and those rankings flow down to an aggregate box at the bottom.

For Stage 3, I'm showing how all the previous outputs converge into a central Chairman component that produces the final answer.

I should start writing the actual code now rather than continuing to plan. For dark mode compatibility, I'll rely on the utility classes for most styling, and for any inline colors I use, I'll make sure they work across both themes. The loading messages should match the playful tone of the LLM Council concept—something like "Convening the council" or similar.

I'll include the specific model names from the README in the LLM boxes since they're explicitly listed there, and set the Chairman's default to match. Now let me write out the final implementation.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-05-21T15:24:42.001665Z",
  "stop_timestamp": "2026-05-21T15:25:41.321342Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01JroPMYFCMKhZrSabPnFZXo",
  "name": "visualize:show_widget",
  "input": {
    "title": "llm_council_3stage_pipeline",
    "loading_messages": [
      "Convening the council",
      "Anonymizing the peer review",
      "Letting the Chairman deliberate"
    ],
    "widget_code": "<style>\n.stage-tabs { display: flex; gap: 8px; margin-bottom: 16px; }\n.stage-tab { flex: 1; padding: 10px 14px; border: 0.5px solid var(--color-border-tertiary); background: transparent; color: var(--color-text-secondary); border-radius: var(--border-radius-md); cursor: pointer; font-size: 13px; text-align: left; transition: all 0.15s; font-family: inherit; }\n.stage-tab:hover { border-color: var(--color-border-secondary); }\n.stage-tab.active { background: var(--color-background-secondary); color: var(--color-text-primary); border-color: var(--color-border-secondary); font-weight: 500; }\n.stage-tab .num { font-size: 11px; color: var(--color-text-tertiary); display: block; margin-bottom: 2px; font-weight: 400; }\n.stage-view { display: none; }\n.stage-view.active { display: block; }\n.stage-caption { margin-top: 12px; padding: 12px 14px; background: var(--color-background-secondary); border-radius: var(--border-radius-md); font-size: 13px; color: var(--color-text-secondary); line-height: 1.6; }\n@keyframes flowdash { to { stroke-dashoffset: -24; } }\n.flow-line { stroke-dasharray: 6 4; animation: flowdash 1.6s linear infinite; }\n.play-bar { display: flex; align-items: center; justify-content: space-between; margin-top: 14px; padding: 8px 12px; font-size: 12px; color: var(--color-text-tertiary); }\n.play-btn { padding: 6px 12px; border: 0.5px solid var(--color-border-tertiary); background: transparent; color: var(--color-text-secondary); border-radius: var(--border-radius-md); cursor: pointer; font-size: 12px; font-family: inherit; }\n.play-btn:hover { border-color: var(--color-border-secondary); color: var(--color-text-primary); }\n</style>\n\n<div class=\"stage-tabs\">\n  <button class=\"stage-tab active\" onclick=\"showStage(0)\"><span class=\"num\">Stage 1</span>First opinions</button>\n  <button class=\"stage-tab\" onclick=\"showStage(1)\"><span class=\"num\">Stage 2</span>Anonymized peer review</button>\n  <button class=\"stage-tab\" onclick=\"showStage(2)\"><span class=\"num\">Stage 3</span>Chairman synthesis</button>\n</div>\n\n<div class=\"stage-view active\" id=\"view-0\">\n<svg width=\"100%\" viewBox=\"0 0 680 320\" role=\"img\">\n<title>Stage 1: First opinions</title>\n<desc>The user query is dispatched in parallel to all council models. Each model returns its own response.</desc>\n<defs><marker id=\"a1\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker></defs>\n<g class=\"c-gray\"><rect x=\"270\" y=\"20\" width=\"140\" height=\"44\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"340\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"central\">User query</text></g>\n<line x1=\"340\" y1=\"64\" x2=\"115\" y2=\"118\" class=\"arr flow-line\" marker-end=\"url(#a1)\"/>\n<line x1=\"340\" y1=\"64\" x2=\"265\" y2=\"118\" class=\"arr flow-line\" marker-end=\"url(#a1)\"/>\n<line x1=\"340\" y1=\"64\" x2=\"415\" y2=\"118\" class=\"arr flow-line\" marker-end=\"url(#a1)\"/>\n<line x1=\"340\" y1=\"64\" x2=\"565\" y2=\"118\" class=\"arr flow-line\" marker-end=\"url(#a1)\"/>\n<g class=\"c-purple\"><rect x=\"50\" y=\"120\" width=\"130\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"115\" y=\"142\" text-anchor=\"middle\" dominant-baseline=\"central\">GPT-5.1</text><text class=\"ts\" x=\"115\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"central\">openai</text></g>\n<g class=\"c-purple\"><rect x=\"200\" y=\"120\" width=\"130\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"265\" y=\"142\" text-anchor=\"middle\" dominant-baseline=\"central\">Gemini 3 Pro</text><text class=\"ts\" x=\"265\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"central\">google</text></g>\n<g class=\"c-purple\"><rect x=\"350\" y=\"120\" width=\"130\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"415\" y=\"142\" text-anchor=\"middle\" dominant-baseline=\"central\">Claude Sonnet 4.5</text><text class=\"ts\" x=\"415\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"central\">anthropic</text></g>\n<g class=\"c-purple\"><rect x=\"500\" y=\"120\" width=\"130\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"565\" y=\"142\" text-anchor=\"middle\" dominant-baseline=\"central\">Grok 4</text><text class=\"ts\" x=\"565\" y=\"160\" text-anchor=\"middle\" dominant-baseline=\"central\">x-ai</text></g>\n<line x1=\"115\" y1=\"176\" x2=\"115\" y2=\"216\" class=\"arr\" marker-end=\"url(#a1)\"/>\n<line x1=\"265\" y1=\"176\" x2=\"265\" y2=\"216\" class=\"arr\" marker-end=\"url(#a1)\"/>\n<line x1=\"415\" y1=\"176\" x2=\"415\" y2=\"216\" class=\"arr\" marker-end=\"url(#a1)\"/>\n<line x1=\"565\" y1=\"176\" x2=\"565\" y2=\"216\" class=\"arr\" marker-end=\"url(#a1)\"/>\n<g class=\"c-teal\"><rect x=\"55\" y=\"220\" width=\"120\" height=\"36\" rx=\"18\" stroke-width=\"0.5\"/><text class=\"th\" x=\"115\" y=\"240\" text-anchor=\"middle\" dominant-baseline=\"central\">Response 1</text></g>\n<g class=\"c-teal\"><rect x=\"205\" y=\"220\" width=\"120\" height=\"36\" rx=\"18\" stroke-width=\"0.5\"/><text class=\"th\" x=\"265\" y=\"240\" text-anchor=\"middle\" dominant-baseline=\"central\">Response 2</text></g>\n<g class=\"c-teal\"><rect x=\"355\" y=\"220\" width=\"120\" height=\"36\" rx=\"18\" stroke-width=\"0.5\"/><text class=\"th\" x=\"415\" y=\"240\" text-anchor=\"middle\" dominant-baseline=\"central\">Response 3</text></g>\n<g class=\"c-teal\"><rect x=\"505\" y=\"220\" width=\"120\" height=\"36\" rx=\"18\" stroke-width=\"0.5\"/><text class=\"th\" x=\"565\" y=\"240\" text-anchor=\"middle\" dominant-baseline=\"central\">Response 4</text></g>\n<text class=\"ts\" x=\"340\" y=\"290\" text-anchor=\"middle\">Parallel queries — each model answers independently</text>\n</svg>\n<div class=\"stage-caption\">The same user query is sent to every model on the council via OpenRouter. Responses are shown in a tab view so the user can inspect each one.</div>\n</div>\n\n<div class=\"stage-view\" id=\"view-1\">\n<svg width=\"100%\" viewBox=\"0 0 680 460\" role=\"img\">\n<title>Stage 2: Anonymized peer review</title>\n<desc>Responses are relabeled A, B, C, D so model identities are hidden. Each council model receives the anonymized batch and ranks the responses. Rankings are aggregated by average position.</desc>\n<defs><marker id=\"a2\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker></defs>\n<g class=\"c-teal\"><rect x=\"55\" y=\"20\" width=\"120\" height=\"36\" rx=\"18\" stroke-width=\"0.5\"/><text class=\"th\" x=\"115\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">Response A</text></g>\n<g class=\"c-teal\"><rect x=\"205\" y=\"20\" width=\"120\" height=\"36\" rx=\"18\" stroke-width=\"0.5\"/><text class=\"th\" x=\"265\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">Response B</text></g>\n<g class=\"c-teal\"><rect x=\"355\" y=\"20\" width=\"120\" height=\"36\" rx=\"18\" stroke-width=\"0.5\"/><text class=\"th\" x=\"415\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">Response C</text></g>\n<g class=\"c-teal\"><rect x=\"505\" y=\"20\" width=\"120\" height=\"36\" rx=\"18\" stroke-width=\"0.5\"/><text class=\"th\" x=\"565\" y=\"40\" text-anchor=\"middle\" dominant-baseline=\"central\">Response D</text></g>\n<text class=\"ts\" x=\"340\" y=\"80\" text-anchor=\"middle\">Identities shuffled — models cannot see who wrote which</text>\n<line x1=\"115\" y1=\"56\" x2=\"220\" y2=\"98\" class=\"arr\" marker-end=\"url(#a2)\"/>\n<line x1=\"265\" y1=\"56\" x2=\"290\" y2=\"98\" class=\"arr\" marker-end=\"url(#a2)\"/>\n<line x1=\"415\" y1=\"56\" x2=\"390\" y2=\"98\" class=\"arr\" marker-end=\"url(#a2)\"/>\n<line x1=\"565\" y1=\"56\" x2=\"460\" y2=\"98\" class=\"arr\" marker-end=\"url(#a2)\"/>\n<g class=\"c-gray\"><rect x=\"200\" y=\"98\" width=\"280\" height=\"42\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"340\" y=\"119\" text-anchor=\"middle\" dominant-baseline=\"central\">Anonymized batch [A, B, C, D]</text></g>\n<line x1=\"280\" y1=\"140\" x2=\"115\" y2=\"178\" class=\"arr flow-line\" marker-end=\"url(#a2)\"/>\n<line x1=\"320\" y1=\"140\" x2=\"265\" y2=\"178\" class=\"arr flow-line\" marker-end=\"url(#a2)\"/>\n<line x1=\"360\" y1=\"140\" x2=\"415\" y2=\"178\" class=\"arr flow-line\" marker-end=\"url(#a2)\"/>\n<line x1=\"400\" y1=\"140\" x2=\"565\" y2=\"178\" class=\"arr flow-line\" marker-end=\"url(#a2)\"/>\n<g class=\"c-purple\"><rect x=\"50\" y=\"180\" width=\"130\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"115\" y=\"202\" text-anchor=\"middle\" dominant-baseline=\"central\">GPT-5.1</text><text class=\"ts\" x=\"115\" y=\"220\" text-anchor=\"middle\" dominant-baseline=\"central\">judges peers</text></g>\n<g class=\"c-purple\"><rect x=\"200\" y=\"180\" width=\"130\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"265\" y=\"202\" text-anchor=\"middle\" dominant-baseline=\"central\">Gemini 3 Pro</text><text class=\"ts\" x=\"265\" y=\"220\" text-anchor=\"middle\" dominant-baseline=\"central\">judges peers</text></g>\n<g class=\"c-purple\"><rect x=\"350\" y=\"180\" width=\"130\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"415\" y=\"202\" text-anchor=\"middle\" dominant-baseline=\"central\">Claude Sonnet 4.5</text><text class=\"ts\" x=\"415\" y=\"220\" text-anchor=\"middle\" dominant-baseline=\"central\">judges peers</text></g>\n<g class=\"c-purple\"><rect x=\"500\" y=\"180\" width=\"130\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"565\" y=\"202\" text-anchor=\"middle\" dominant-baseline=\"central\">Grok 4</text><text class=\"ts\" x=\"565\" y=\"220\" text-anchor=\"middle\" dominant-baseline=\"central\">judges peers</text></g>\n<line x1=\"115\" y1=\"236\" x2=\"115\" y2=\"276\" class=\"arr\" marker-end=\"url(#a2)\"/>\n<line x1=\"265\" y1=\"236\" x2=\"265\" y2=\"276\" class=\"arr\" marker-end=\"url(#a2)\"/>\n<line x1=\"415\" y1=\"236\" x2=\"415\" y2=\"276\" class=\"arr\" marker-end=\"url(#a2)\"/>\n<line x1=\"565\" y1=\"236\" x2=\"565\" y2=\"276\" class=\"arr\" marker-end=\"url(#a2)\"/>\n<g class=\"c-amber\"><rect x=\"40\" y=\"280\" width=\"150\" height=\"50\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"115\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"central\">Ranking 1</text><text class=\"ts\" x=\"115\" y=\"318\" text-anchor=\"middle\" dominant-baseline=\"central\">C &gt; A &gt; D &gt; B</text></g>\n<g class=\"c-amber\"><rect x=\"190\" y=\"280\" width=\"150\" height=\"50\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"265\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"central\">Ranking 2</text><text class=\"ts\" x=\"265\" y=\"318\" text-anchor=\"middle\" dominant-baseline=\"central\">A &gt; C &gt; B &gt; D</text></g>\n<g class=\"c-amber\"><rect x=\"340\" y=\"280\" width=\"150\" height=\"50\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"415\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"central\">Ranking 3</text><text class=\"ts\" x=\"415\" y=\"318\" text-anchor=\"middle\" dominant-baseline=\"central\">C &gt; B &gt; A &gt; D</text></g>\n<g class=\"c-amber\"><rect x=\"490\" y=\"280\" width=\"150\" height=\"50\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"565\" y=\"300\" text-anchor=\"middle\" dominant-baseline=\"central\">Ranking 4</text><text class=\"ts\" x=\"565\" y=\"318\" text-anchor=\"middle\" dominant-baseline=\"central\">A &gt; C &gt; D &gt; B</text></g>\n<line x1=\"115\" y1=\"330\" x2=\"240\" y2=\"378\" class=\"arr\" marker-end=\"url(#a2)\"/>\n<line x1=\"265\" y1=\"330\" x2=\"310\" y2=\"378\" class=\"arr\" marker-end=\"url(#a2)\"/>\n<line x1=\"415\" y1=\"330\" x2=\"370\" y2=\"378\" class=\"arr\" marker-end=\"url(#a2)\"/>\n<line x1=\"565\" y1=\"330\" x2=\"440\" y2=\"378\" class=\"arr\" marker-end=\"url(#a2)\"/>\n<g class=\"c-gray\"><rect x=\"220\" y=\"378\" width=\"240\" height=\"50\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"340\" y=\"398\" text-anchor=\"middle\" dominant-baseline=\"central\">Aggregate rankings</text><text class=\"ts\" x=\"340\" y=\"416\" text-anchor=\"middle\" dominant-baseline=\"central\">sorted by avg rank position</text></g>\n</svg>\n<div class=\"stage-caption\">Each model receives the anonymized batch and is asked to evaluate then rank the responses, ending with a strict <code>FINAL RANKING:</code> header that the backend parses. The aggregate is the average rank position across all peer evaluations.</div>\n</div>\n\n<div class=\"stage-view\" id=\"view-2\">\n<svg width=\"100%\" viewBox=\"0 0 680 340\" role=\"img\">\n<title>Stage 3: Chairman synthesis</title>\n<desc>The Chairman model receives all Stage 1 responses and all Stage 2 rankings, and produces the single final answer returned to the user.</desc>\n<defs><marker id=\"a3\" viewBox=\"0 0 10 10\" refX=\"8\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\"><path d=\"M2 1L8 5L2 9\" fill=\"none\" stroke=\"context-stroke\" stroke-width=\"1.5\" stroke-linecap=\"round\" stroke-linejoin=\"round\"/></marker></defs>\n<g class=\"c-teal\"><rect x=\"60\" y=\"20\" width=\"240\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"180\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"central\">Stage 1 responses</text><text class=\"ts\" x=\"180\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\">all 4 individual answers</text></g>\n<g class=\"c-amber\"><rect x=\"380\" y=\"20\" width=\"240\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"500\" y=\"42\" text-anchor=\"middle\" dominant-baseline=\"central\">Stage 2 peer rankings</text><text class=\"ts\" x=\"500\" y=\"60\" text-anchor=\"middle\" dominant-baseline=\"central\">evaluations + aggregate</text></g>\n<line x1=\"180\" y1=\"76\" x2=\"320\" y2=\"140\" class=\"arr flow-line\" marker-end=\"url(#a3)\"/>\n<line x1=\"500\" y1=\"76\" x2=\"360\" y2=\"140\" class=\"arr flow-line\" marker-end=\"url(#a3)\"/>\n<g class=\"c-purple\"><rect x=\"220\" y=\"142\" width=\"240\" height=\"64\" rx=\"8\" stroke-width=\"1\"/><text class=\"th\" x=\"340\" y=\"166\" text-anchor=\"middle\" dominant-baseline=\"central\">Chairman LLM</text><text class=\"ts\" x=\"340\" y=\"188\" text-anchor=\"middle\" dominant-baseline=\"central\">default: google/gemini-3-pro-preview</text></g>\n<line x1=\"340\" y1=\"206\" x2=\"340\" y2=\"246\" class=\"arr flow-line\" marker-end=\"url(#a3)\"/>\n<g class=\"c-green\"><rect x=\"180\" y=\"250\" width=\"320\" height=\"56\" rx=\"8\" stroke-width=\"0.5\"/><text class=\"th\" x=\"340\" y=\"272\" text-anchor=\"middle\" dominant-baseline=\"central\">Final response</text><text class=\"ts\" x=\"340\" y=\"290\" text-anchor=\"middle\" dominant-baseline=\"central\">single synthesized answer to the user</text></g>\n</svg>\n<div class=\"stage-caption\">The designated Chairman receives the full context — every individual response and every peer ranking — and compiles them into the single final answer presented to the user.</div>\n</div>\n\n<div class=\"play-bar\">\n  <span>Click a stage above, or auto-cycle</span>\n  <button class=\"play-btn\" onclick=\"toggleAutoplay(this)\">▶ Auto-play</button>\n</div>\n\n<script>\nfunction showStage(i) {\n  document.querySelectorAll('.stage-view').forEach((el, j) => el.classList.toggle('active', i === j));\n  document.querySelectorAll('.stage-tab').forEach((el, j) => el.classList.toggle('active', i === j));\n}\nlet autoplayTimer = null;\nfunction toggleAutoplay(btn) {\n  if (autoplayTimer) {\n    clearInterval(autoplayTimer); autoplayTimer = null; btn.textContent = '▶ Auto-play';\n  } else {\n    btn.textContent = '■ Stop';\n    let i = Array.from(document.querySelectorAll('.stage-view')).findIndex(el => el.classList.contains('active'));\n    autoplayTimer = setInterval(() => { i = (i + 1) % 3; showStage(i); }, 3500);\n  }\n}\n</script>"
  },
  "message": "show_widget",
  "integration_name": "visualize",
  "integration_icon_url": null,
  "tool_identifier": null,
  "icon_name": null,
  "context": null,
  "display_content": null,
  "approval_options": null,
  "approval_key": null,
  "approval_key_legacy": null,
  "is_mcp_app": true,
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
  "tool_use_id": "toolu_01JroPMYFCMKhZrSabPnFZXo",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "7caaabf3-f0b5-474e-af54-2d130f3fa67c"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "40744e5e-4cd0-4964-95c2-927622f579d4"
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": null,
  "integration_name": "visualize",
  "mcp_server_url": null,
  "integration_icon_url": null,
  "icon_name": null,
  "display_content": null,
  "hidden_in_chat": null
}
```

</details>

Now the gathered information, with everything attributed to primary sources.

## Primary sources

- **Repo:** `github.com/karpathy/llm-council` — Karpathy's own GitHub. As of the fetched snapshot the repo has 18.7k stars, 3.6k forks, 5 commits, no releases. Last commit message is visible in the directory listing but the date isn't surfaced in the snapshot I retrieved.
- **Announcement post:** Karpathy on X, [Nov 22, 2025, 3:54 PM](https://x.com/karpathy/status/1992381094667411768) — "As a fun Saturday vibe code project and following up on this tweet earlier, I hacked up an llm-council web app."
- **Motivating post (Nov 17, 2025):** Karpathy's earlier tweet about reading workflows with LLMs ([status/1990577951671509438](https://x.com/karpathy/status/1990577951671509438)) — the README links to this as the use case that motivated the project.
- **In-repo design doc:** [`CLAUDE.md`](https://github.com/karpathy/llm-council/blob/master/CLAUDE.md) — Karpathy's own architectural notes for future agent sessions; the source of the parsing and aggregation details below.
- **Mention in Karpathy's 2025 year-in-review** (`karpathy.bearblog.dev/year-in-review-2025`) — places this alongside `menugen`, `reader3`, and `HN time capsule` as "ephemeral apps" he vibe-coded for himself.

## What it is — verbatim from the README

"The idea of this repo is that instead of asking a question to your favorite LLM provider (e.g. OpenAI GPT 5.1, Google Gemini 3.0 Pro, Anthropic Claude Sonnet 4.5, xAI Grok 4, eg.c), you can group them into your 'LLM Council'. This repo is a simple, local web app that essentially looks like ChatGPT except it uses OpenRouter to send your query to multiple LLMs, it then asks them to review and rank each other's work, and finally a Chairman LLM produces the final response."

The widget above mirrors the three-stage flow described in the README. Citing the README directly for each stage:

- **Stage 1 — First opinions:** "The user query is given to all LLMs individually, and the responses are collected. The individual responses are shown in a 'tab view', so that the user can inspect them all one by one."
- **Stage 2 — Review:** "Each individual LLM is given the responses of the other LLMs. Under the hood, the LLM identities are anonymized so that the LLM can't play favorites when judging their outputs. The LLM is asked to rank them in accuracy and insight."
- **Stage 3 — Final response:** "The designated Chairman of the LLM Council takes all of the model's responses and compiles them into a single final answer that is presented to the user."

## Implementation facts (from the README and `CLAUDE.md`)

- **Default council** (`backend/config.py`, per README): `openai/gpt-5.1`, `google/gemini-3-pro-preview`, `anthropic/claude-sonnet-4.5`, `x-ai/grok-4`.
- **Default Chairman**: `google/gemini-3-pro-preview`.
- **Tech stack** (README, verbatim): "Backend: FastAPI (Python 3.10+), async httpx, OpenRouter API. Frontend: React + Vite, react-markdown for rendering. Storage: JSON files in `data/conversations/`. Package Management: uv for Python, npm for JavaScript."
- **Pipeline shape** (from `CLAUDE.md`): "User Query ↓ Stage 1: Parallel queries → [individual responses] ↓ Stage 2: Anonymize → Parallel ranking queries → [evaluations + parsed rankings] ↓ Aggregate Rankings Calculation → [sorted by avg position] ↓ Stage 3: Chairman synthesis with full context ↓ Return: {stage1, stage2, stage3, metadata}".
- **Ranking-parsing contract** (`CLAUDE.md`): the model output must end with a "FINAL RANKING:" header followed by a numbered list (e.g. "1. Response C", "2. Response A"), with no additional text after the ranking section. The backend exposes `parse_ranking_from_text()` and `calculate_aggregate_rankings()` — the latter computes average rank position across all peer evaluations.
- **Metadata handling** (`CLAUDE.md`): `label_to_model` and `aggregate_rankings` are not persisted to storage — only returned via the API. (The label-to-model mapping is what de-anonymizes the A/B/C/D labels after the fact.)

## Karpathy's own framing — separate from third-party claims

The repo header section is titled "Vibe Code Alert", and he writes: "This project was 99% vibe coded as a fun Saturday hack because I wanted to explore and evaluate a number of LLMs side by side in the process of reading books together with LLMs. It's nice and useful to see multiple responses side by side, and also the cross-opinions of all LLMs on each other's outputs. I'm not going to support it in any way, it's provided here as is for other people's inspiration and I don't intend to improve it. Code is ephemeral now and libraries are over, ask your LLM to change it in whatever way you like."

Two things worth separating from the hype:

1. **Karpathy does not claim this produces better answers.** His stated motivation is *side-by-side inspection during book reading* — not benchmark improvement. The claim "anonymized peer review eliminates inter-model bias and produces better answers" appears in third-party write-ups (e.g. Fodev JEO, Unbound Security) but is not made in the primary source. I'd treat it as a hypothesis the design is consistent with, not a finding.
2. **It is explicitly unsupported.** The "not going to support it... not going to improve it" line is in the README itself.

## Setup recipe (verbatim from README)

1. Backend deps: `uv sync`. Frontend: `cd frontend && npm install`.
2. Create `.env` with `OPENROUTER_API_KEY=sk-or-v1-...` — get one from `openrouter.ai`, prepay credits.
3. Edit `backend/config.py` to customize `COUNCIL_MODELS` and `CHAIRMAN_MODEL`.
4. Run with `./start.sh`, or two terminals: `uv run python -m backend.main` and `cd frontend && npm run dev`.
5. Open `http://localhost:5173`.

## Ecosystem (downstream, for context — not Karpathy's work)

- **Hugging Face Space** by `burtenshaw` — a hosted demo: "Enter a question in the text box and the app will have multiple advanced language models each answer, rank each other's replies, and then combine the best insights into a single, polished response." (`huggingface.co/spaces/burtenshaw/karpathy-llm-council`).
- **Awesome-LLM-Council-Projects index** by `danielrosehill` (`github.com/danielrosehill/LLM-Council-Projects`) — catalogs Claude Code skill ports, decision-making variants, and vertical applications inspired by the original. Useful if you want to see how others have adapted the pattern.

---

A note on what I did *not* find: Karpathy has not (as of the fetched sources) published a separate blog post or paper expanding on LLM Council beyond the README, the announcement tweet, and the brief mention in his 2025 year-in-review. If you want his thinking, those three are the whole record.

Want me to do anything with this next — for example, walk through the actual backend code (the prompt templates, the parsing logic), compare this pattern to other multi-LLM ensemble approaches in the literature, or sketch a minimal reimplementation you could adapt?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019e4b20-9451-7aea-849a-b291d0c1f9df",
  "updated_at": "2026-05-21T15:26:24.363827Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019e4b20-9451-7a49-9188-fed77b28f97e"
}
```

</details>
