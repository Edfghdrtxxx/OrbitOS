# Leveraging the project feature in Claude

## Export metadata (verbatim)

```json
{
  "uuid": "15504e61-6848-4711-a561-b98c5339086e",
  "name": "Leveraging the project feature in Claude",
  "summary": "**Conversation overview**\n\nThe person asked Claude to explain the Projects feature in Claude.ai/desktop, covering how to use and leverage it effectively. Claude responded with an interactive visual widget presenting an overview, architecture, setup steps, plan tiers, use cases, and power-user tips. The widget included tabs for each topic and clickable use case cards with context-specific suggestions tailored to the person's background in nuclear physics research, PhD applications, language study, and managing a custom skill ecosystem.\n\nThe person then followed up with two precise technical questions. First, they asked whether project files are loaded into the context window all at once or only when actively searched. Claude clarified the two-mode behavior: below the context window threshold, all project knowledge is injected into every chat unconditionally; above the threshold, RAG activates automatically and Claude uses a visible \"project knowledge search tool\" to retrieve only relevant chunks per query. Claude also corrected an error from the earlier widget, noting that RAG is available across all plans, not only paid tiers as previously stated. Second, the person asked whether Claude can rename conversation session titles within a project. Claude confirmed it has no tool to modify UI metadata or conversation titles directly, but can suggest descriptive titles that the person can manually apply via the sidebar edit function.\n\nThe conversation reflects a technically precise communication style with preference for accurate, nuanced answers over simplified ones. The person demonstrated familiarity with context window mechanics and showed interest in understanding the underlying system behavior rather than just surface-level usage instructions.",
  "created_at": "2026-04-12T02:43:59.178716Z",
  "updated_at": "2026-04-12T06:17:41.891916Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-04-12T02:43:59.440988Z

Introduce the `project` feature in claude chat/desktop for me. How to leverage it?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7f93-14d6-7716-a44c-0e6e7caa154c",
  "updated_at": "2026-04-12T02:43:59.440988Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-04-12T02:46:12.235095Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants to know about the "Projects" feature in Claude chat/desktop. Let me search for current documentation since this may have changed since my knowledge cutoff.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T02:44:01.553644Z",
  "stop_timestamp": "2026-04-12T02:44:01.920764Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01S2P9Gq1nxzDGPUcVwDeZ4u",
  "name": "web_fetch",
  "input": {
    "url": "https://support.claude.ai/hc/en-us/articles/27840397197463-Projects"
  },
  "message": "Fetching: https://support.claude.ai/hc/en-us/articles/27840397197463-Projects",
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
  "tool_use_id": "toolu_01S2P9Gq1nxzDGPUcVwDeZ4u",
  "name": "web_fetch",
  "content": [
    {
      "type": "text",
      "text": "{\"error_type\": \"PERMISSIONS_ERROR\", \"error_message\": \"This URL cannot be fetched because it was not provided by the user nor did it appear in any search/fetch results\"}",
      "uuid": "f44287e2-4b6d-4946-bbb1-16d81686bfc4"
    }
  ],
  "is_error": true,
  "structured_content": null,
  "meta": null,
  "message": "Failed to fetch: https://support.claude.ai/hc/en-us/articles/27840397197463-Projects",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.ai",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "https://support.claude.ai/hc/en-us/articles/27840397197463-Projects",
      "subtitles": null,
      "url": "https://support.claude.ai/hc/en-us/articles/27840397197463-Projects",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.ai",
      "source": "claude"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Let me search for it.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T02:44:03.670520Z",
  "stop_timestamp": "2026-04-12T02:44:03.937552Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01VPfVNSkpeQkAv1jyYXTAWf",
  "name": "web_search",
  "input": {
    "query": "Claude Projects feature claude.ai how to use 2025"
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
  "tool_use_id": "toolu_01VPfVNSkpeQkAv1jyYXTAWf",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Claude Projects: My Experience After Months of Daily Use - Fresh van Root",
      "url": "https://freshvanroot.com/blog/how-to-use-claude-projects/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "freshvanroot.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=freshvanroot.com",
        "site_name": "Fresh van Root"
      },
      "is_missing": false,
      "text": "The scope of this project changed from “preparing a workshop” to “supporting the client in social media content production in 2025” · Custom Instructions, like project knowledge and description, can be updated. I have uploaded a confirmed project quote, meeting transcripts, and more to a Claude Project. Instead of searching in a file folder, opening a file, and manually looking for the information, I can turn to the Claude project and prompt, “What is the monthly agreed service fee for social media production?” · It serves the information instantly, including referencing the file it got that information from, and of course, I can switch to working with that information inside Claude without copying/pasting. Example: Prompting for a specific project detail in Claude. It references an uploaded project knowledge file. This is also important to understand: The files you upload to a specific AI conversation are not automatically turned into project knowledge.\n\nThe scope of this project changed from “preparing a workshop” to “supporting the client in social media content production in 2025” · Custom Instructions, like project knowledge and description, can be updated. I have uploaded a confirmed project quote, meeting transcripts, and more to a Claude Project. Instead of searching in a file folder, opening a file, and manually looking for the information, I can turn to the Claude project and prompt, “What is the monthly agreed service fee for social media production?” · It serves the information instantly, including referencing the file it got that information from, and of course, I can switch to working with that information inside Claude without copying/pasting. Example: Prompting for a specific project detail in Claude. It references an uploaded project knowledge file. This is also important to understand: The files you upload to a specific AI conversation are not automatically turned into project knowledge.\n\nI was immediately curious when Claude launched the Projects feature in June 2024. I have used the feature almost daily, for months, and want to share my experience with our readers. How does it speed up workflows? What have I learned, and why should you adopt them? Let’s go! You might already know the basics, so just a quick overview: ... Once a project is created, you can start a conversation on the Claude front page and select the project in a dropdown, or you can browse to the project page and make the conversation there. The result is the same: The AI chat conversation is tied to the project, and anyone having access can see the conversation. The difference between starting a chat in a project and a regular AI chat conversation is that you can always refer to the uploaded project knowledge and apply custom instructions to your prompts. You can choose the project on the Claude front page in a dropdown or browse the projects page to start a conversation.\n\nThe list goes on. A project is what you call a project. You could also think of it as “a collection of AI chat conversations in Claude on a specific topic, with meta properties and knowledge applied on all conversations inside that collection”. Screenshot of Claude Projects we created – Some information blurred out, but it should give you an impression on how we use that feature. The key feature of projects is uploadable project knowledge. You can add text, upload files, connect a Google Doc, or connect your GitHub account. ... What’s important to understand here is that you do not have endless resources. The limit is 200K tokens, which is about 500 pages of text (English language). Currently, Claude supports the following file uploads: PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB. One file should not exceed 30MB. You can upload unlimited files, but total content must fit within Claude’s context window.\n\nYou can turn AI-generated content in Claude into project knowledge. This is a very cool feature. Why? If you land at a draft, insights, piece of code, visual, or whatever you might create and want to make sure you do not lose it, upgrade the generated work into project knowledge so you can reference it in future conversations inside the project. Once you click this button, the artefact is added to the project’s knowledge and can be reused by anyone with access to this project. Powerful! Custom Instructions can be any type of guidance. They can describe much more than just what tone and voice to apply. What is the project about? What is your role? Are you a beginner or an experienced professional? Think of custom instructions as a pre-prompt that helps you get to the point quicker and improves the quality of responses. Claude has a unique feature called Style.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://freshvanroot.com/blog/how-to-use-claude-projects/",
        "search_provider": "anthropic",
        "age": "March 5, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude just made two of its best features free — here’s how to use Projects and Artifacts | Tom's Guide",
      "url": "https://www.tomsguide.com/ai/claude-just-made-two-of-its-best-features-free-heres-how-to-use-projects-and-artifacts",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "tomsguide.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=tomsguide.com",
        "site_name": "Tom's Guide"
      },
      "is_missing": false,
      "text": "1. Build a job search command center: Create a “Job Search” Project, upload your resume and notes about target companies. Claude can generate tailored cover letters, outreach messages and interview prep using your background.\n\nLess than a week ago, the company quietly made Memory free, a move designed to help new users transition more smoothly from ChatGPT to Claude. But some users may not be aware that two of the most powerful tools are also free for everyone. Previously limited to paying subscribers, Projects and Artifacts turn Claude from a simple chatbot into something closer to a real workspace — one that can organize information, build documents and even create interactive tools. Here’s what changed and how to use these features. ... AI companies have been carefully balancing what they give away for free versus what they reserve for paid plans. Anthropic’s latest update signals a shift toward making Claude more accessible as competition with OpenAI and Google intensifies. With the expanded free tier, Claude users now get access to:Article continues below ...\n\nI use Claude Projects for different parts of my life. I have Projects for work, Projects for my side hustles, Projects for research and I even have one for personal tasks. Sign up to get the BEST of Tom's Guide direct to your inbox. Get instant access to breaking news, the hottest reviews, great deals and helpful tips. It's a great way to stay organized while keeping the context inside each workspace so you don't have to repeat yourself. ... From that point forward, every conversation inside that Project automatically uses that context. For example, for my AI pizza brand, Crusted, I use Projects as a \"Brand Book,\" so the tone and information stays the same. I can change, edit or even rename the Project at any time. ... If you’ve used ChatGPT Canvas, to write or code, than you'll probably appreciate the benefits of Artifacts. This feature allows users to create standalone outputs that appear in a live preview panel next to the chat.\n\nIf the output benefits from a preview, Claude will automatically open it as an Artifact in the side panel. ... These tools aren’t just experimental AI features — they’re designed for everyday work. Whether you're organizing a job search, managing finances or turning messy notes into something useful, Projects and Artifacts make Claude feel less like a chatbot and more like a real productivity workspace. Here are five practical ways to start using them today. 1. Build a job search command center: Create a “Job Search” Project, upload your resume and notes about target companies. Claude can generate tailored cover letters, outreach messages and interview prep using your background. 2. Create a personal finance tracker: Upload a spreadsheet or spending data, then ask Claude to build an Artifact with a visual budget dashboard or spending breakdown you can actually interact with.\n\nIf you haven’t tried these features yet, it’s worth opening a Project and experimenting — you may find Claude suddenly feels far more useful. Give them a try and let me know in the comments what you think. Follow Tom's Guide on Google News and add us as a preferred source to get our up-to-date news, analysis, and reviews in your feeds. I tested the the 'Potato' prompt on ChatGPT, Claude and Gemini — here’s which AI is the harshest critic · I tried the '3-prompt rule' with ChatGPT — the results got dramatically better · I built a library of 'thinking prompts' for Claude — these are the ones I use most ... Amanda Caswell is one of today’s leading voices in AI and technology. A celebrated contributor to various news outlets, her sharp insights and relatable storytelling have earned her a loyal readership. Amanda’s work has been recognized with prestigious honors, including outstanding contribution to media.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.tomsguide.com/ai/claude-just-made-two-of-its-best-features-free-heres-how-to-use-projects-and-artifacts",
        "search_provider": "anthropic",
        "age": "March 11, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Projects: Complete Guide + Setup Tutorial (2025) | by Melissa Onwuka | Medium",
      "url": "https://melissaonwuka.medium.com/claude-projects-complete-guide-setup-tutorial-2025-3b9a60033b59",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "Provide user context. Information like “You are assisting a solo founder who is technical but not a designer” helps Claude calibrate detail level and terminology appropriately. Iterate based on results. Initial instructions rarely achieve perfection. Monitor outputs, identify weaknesses, and refine instructions accordingly. Projects are designed to evolve. Consider custom instructions as employee onboarding documentation. Clarity and specificity at the outset reduce ongoing management requirements. Not every interaction requires a Project. The following framework helps determine appropriate usage: ... The common mistake is overusing Projects. Apply them where persistence and consistency provide value; use regular chats for everything else. Understanding Projects’ significance requires context on current AI adoption trends. Recent data reveals rapid acceleration: 78% of organizations now use AI in at least one business function, up from 55% in 2023.\n\nClaude Projects, launched in June 2024, addresses this problem directly. Unlike traditional AI chat interfaces, Projects creates persistent workspaces where Claude maintains context across conversations, remembers your instructions, and references your documents automatically. The feature transforms Claude from a stateless chatbot into a contextual assistant that actually remembers your work. This guide covers everything you need to know about Claude Projects: what it is, how it works, when to use it, and how to set it up effectively. Claude Projects creates specialized workspaces within Claude. Each Project maintains its own custom instructions, document library, and conversation history. According to Anthropic’s documentation, Projects function as “self-contained workspaces with their own chat histories and knowledge bases.” · In practical terms, imagine a team member who arrives fully trained on your company’s style guide, has read all your documentation, and understands exactly how\n\nProjects is available to all Claude users. Free accounts include 5 projects, while paid subscribers receive enhanced capabilities. Pro users ($20/month) and Team users ($25/month per person) gain access to Retrieval Augmented Generation (RAG) technology, which significantly expands document capacity and improves retrieval accuracy. While new AI features launch constantly, Claude Projects addresses a fundamental problem that most others ignore: context persistence. Current data shows that 78% of organizations now use AI somewhere in their business, up from 55% just two years ago. However, most users still interact with AI through isolated, context-free conversations. The inefficiency isn’t in AI capability but in the overhead of managing it. Users repeatedly upload the same files, re-explain preferences, and re-establish context. This pattern mirrors working with an assistant who forgets everything after each conversation, requiring constant re-onboarding.\n\nProjects addresses this adoption gap by enabling persistent, context-aware assistance. As one user who has used Projects daily for months observed: “While I see huge benefits of using the feature already as a single user, it can 10x the productivity as a team.” · Competitive advantage increasingly depends not on AI adoption itself, but on effective AI integration. Projects facilitates this integration by reducing overhead and improving consistency. Claude Projects transforms Claude from a stateless chatbot into a contextual workspace that maintains memory across sessions. The feature preserves custom instructions, automatically references uploaded documents, and organizes related conversations within unified Projects. While Projects has limitations (storage caps, isolated contexts, tier restrictions), it solves a fundamental problem in AI usability: the cold start problem that requires constant re-establishment of context.\n\nProvide user context. Information like “You are assisting a solo founder who is technical but not a designer” helps Claude calibrate detail level and terminology appropriately. Iterate based on results. Initial instructions rarely achieve perfection. Monitor outputs, identify weaknesses, and refine instructions accordingly. Projects are designed to evolve. Consider custom instructions as employee onboarding documentation. Clarity and specificity at the outset reduce ongoing management requirements. Not every interaction requires a Project. The following framework helps determine appropriate usage: ... The common mistake is overusing Projects. Apply them where persistence and consistency provide value; use regular chats for everything else. Understanding Projects’ significance requires context on current AI adoption trends. Recent data reveals rapid acceleration: 78% of organizations now use AI in at least one business function, up from 55% in 2023.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://melissaonwuka.medium.com/claude-projects-complete-guide-setup-tutorial-2025-3b9a60033b59",
        "search_provider": "anthropic",
        "age": "December 24, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How can I create and manage projects? | Claude Help Center",
      "url": "https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Hover over the left side of your account and click “Projects,” or navigate directly to this section: claude.ai/projects. Click &quot;+ New Project&quot; in the upper right corner. Give your project a name and description (note that Claude will not ...\n\nHover over the left side of your account and click “Projects,” or navigate directly to this section: claude.ai/projects. Click \"+ New Project\" in the upper right corner. Give your project a name and description (note that Claude will not have access to these details). If you are on a Team or Enterprise plan, choose the visibility settings: Keep it private: Only you and members you invite can view or use this project. Share with your broader organization: Everyone in your organization can view and use this project (where enabled by administrators). Once your project is set up, you can initiate chats with Claude within the project. You'll find the project knowledge base on the right side of your project's main page. Anything you upload to this space will be used across all of your chats within that project. Click on the \"+\" button to add content to the project.\n\nClaude will process this information and use it as context in your chats within the project. If you are using a paid Claude plan, when your project knowledge approaches the context window limit, Claude will automatically enable RAG mode to expand your project's capacity. ... Claude will use these instructions for all the chats within the project. Note: Context is not shared across chats within a project unless the information is added into the project knowledge base. If you are a member of a Team or Enterprise plan organization, you can share projects with other members of your organization. Open the project you want to share. Click the \"Share project\" button to the right of the project name. Add individual members using their name or email address, or copy and paste a list of email addresses for bulk sharing. Select the appropriate permission level for each member: Can use: Members can see project contents, knowledge, and instructions, and chat within the project, but cannot edit it.\n\nCan edit: Members can modify project instructions and knowledge, update member settings, and actively contribute to the project. Click \"Share\" to send invitations. To change permissions: Open the sharing menu and select a new role for the member. To view who has access: The sharing menu shows all current members and their permission levels. To remove access: The project creator can click on the member's current role and select \"Remove access.\" Projects that others have shared with you will appear in the \"Shared with me\" tab on your Projects page. You'll also receive an email notification when someone shares a project with you. Starring a project allows for quick access from your projects and chats list, visible when hovering over the left side of your account. You can star a project from two different areas: Locate the project on the “Projects” page.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "What are projects? | Claude Help Center",
      "url": "https://support.claude.com/en/articles/9517075-what-are-projects",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Enhanced project knowledge with RAG is only available to users with paid Claude plans (Pro, Max, Team, or Enterprise). When using a paid plan, your projects automatically scale to handle large amounts of content through Retrieval Augmented Generation (RAG). When your project knowledge approaches context limits, Claude seamlessly enables RAG mode to expand capacity by up to 10x while maintaining response quality. For more information on leveraging expanded project knowledge capacity, see Retrieval Augmented Generation (RAG) for Projects. For users on Claude for Work (Team and Enterprise) plans, projects can be shared with other members of your organization, enabling powerful collaboration and knowledge sharing capabilities. The sharing system includes: ... Can use: Members can see project contents, knowledge, and instructions, and chat within the project, but cannot edit it.\n\nProjects are available to all users, including those with free Claude accounts. Free users can create a maximum of five projects. Projects allow you to create self-contained workspaces with their own chat histories and knowledge bases. Within each project, you can upload documents, provide context, and have focused chats with Claude. A key benefit of projects is the ability to provide context for your chats with Claude. You can upload relevant documents, text, code, or other files to a project's knowledge base, which Claude will use to better understand the context and background for your individual chats within that project. In addition, you can define project instructions for each project to further tailor Claude's responses. For example, instructing Claude to use a more formal tone or answer questions from the perspective of a specific role or industry.\n\nEnhanced project knowledge with RAG is only available to users with paid Claude plans (Pro, Max, Team, or Enterprise). When using a paid plan, your projects automatically scale to handle large amounts of content through Retrieval Augmented Generation (RAG). When your project knowledge approaches context limits, Claude seamlessly enables RAG mode to expand capacity by up to 10x while maintaining response quality. For more information on leveraging expanded project knowledge capacity, see Retrieval Augmented Generation (RAG) for Projects. For users on Claude for Work (Team and Enterprise) plans, projects can be shared with other members of your organization, enabling powerful collaboration and knowledge sharing capabilities. The sharing system includes: ... Can use: Members can see project contents, knowledge, and instructions, and chat within the project, but cannot edit it.\n\nCan edit: Members can modify project instructions and knowledge, add/remove members, update member settings, and actively contribute to the project. ... Share to specific members instead of making a project fully private or public to the entire organization. Make a previously-created private project visible to the whole organization. ... Individual sharing: Share projects with specific team members by email. Bulk sharing: Add multiple users at once using email lists. Organization-wide sharing: Make projects available to everyone in your organization either when creating the project or afterward. Note: If an Owner or Primary Owner disables public projects, organization-wide sharing will be disabled both when creating the project and afterward. ... Shared with me tab: Easily find projects that others have shared with you. Email notifications: Get notified when someone shares a project with you.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/9517075-what-are-projects",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Projects Guide: How to Use & Maximise AI Collaboration Tools",
      "url": "https://www.instituteofaistudies.com/insights/how-to-use-claudes-projects",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "instituteofaistudies.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=instituteofaistudies.com",
        "site_name": "Institute of AI Studies"
      },
      "is_missing": false,
      "text": "Go to the “Project Knowledge” section. ... Upload files like PDFs, DOCs, or text files. ... Example: If uploading a live call goals PDF, describe it as &quot;Guidelines for evaluating the success of automation training calls.&quot; 📌 Pro Tip: Each project can hold massive amounts of data, so don’t hesitate to upload multiple reference documents. Once you’ve uploaded documents, Claude can reference them in real-time responses. 📌 Ask Claude: 👉 “What are my goals for live calls about AI automations?” · If your goals PDF is uploaded, Claude will accurately list them without needing additional input. A major use case for Claude’s Projects is analysing Zoom meeting transcripts, YouTube captions, or any large text-based documents...\n\nClaude AI has just introduced a Projects feature, and I'm absolutely loving it. The projects feature is now under their paid tier. Whether you need to manage internal knowledge, streamline collaboration, or customise AI responses, this update will help you get more done efficiently. This tutorial will guide you through setting up and optimising Claude Projects, including how to: ... AI-driven marketing is evolving faster than ever, and businesses that fail to adapt are quickly becoming irrelevant. While some brands are effortlessly scaling with AI automations, others are stuck in outdated strategies, wasting time and falling further behind. The question isn’t whether AI is the future—it’s whether you’ll be ahead of the curve or left scrambling to catch up. Most marketers dabble in AI without a clear strategy, leading to wasted effort and missed opportunities.\n\n✅ Two-sentence summary of the call ✅ Grading (1-10) on engagement, learning, problem-solving ✅ Improvement suggestions ✅ AI joke for fun! 😆 · This completely automates transcript analysis, saving hours of manual work. Claude’s Projects feature is a game-changer, allowing you to: ... This makes Claude more powerful than ever for teams, business workflows, and AI-powered productivity. Now you know how to set up, optimise, and automate workflows with Claude’s Projects feature! ... Ask away! One of our team will get to you shortly. ... Sign up to get updates from us about events, news, and things you need to know. Thanks! We’re happy to have you as part of our community. Oops! Something went wrong while submitting the form. 🔺 Core Course (solid foundations, no overwhelm) 🔺 Track stars (niche expertise, e.g. marketing, sales, finance) 🔺 No wrong answers - just smart paths.Take the Quiz ·\n\nOur AI Marketing Automations course cuts through the confusion, giving you the exact tools and training to implement powerful, revenue-driving AI systems. The gap is widening—are you ready to step up or risk being left behind? ... Claude’s Projects function like organised folders where you can curate knowledge, set custom AI behaviour, and collaborate with a team. ✔ 200,000-token context window (equivalent to a 500-page book) ✔ Custom instructions for tailored AI responses ✔ Team collaboration with shared chat activity ✔ Easier organisation of knowledge like codebases, style guides, interview transcripts, or past conversations · This update means Claude can now act as an expert assistant using your specific documents and guidelines. ... Log into Claude and head to the home screen. ... Click the \"Projects\" button in the upper left-hand corner.\n\nYour project is now ready for knowledge uploads, chat threads, and AI-driven insights. Now that your project is set up, you need to upload relevant knowledge so Claude can use it effectively. Go to the “Project Knowledge” section. ... Upload files like PDFs, DOCs, or text files. ... Example: If uploading a live call goals PDF, describe it as \"Guidelines for evaluating the success of automation training calls.\" 📌 Pro Tip: Each project can hold massive amounts of data, so don’t hesitate to upload multiple reference documents. Once you’ve uploaded documents, Claude can reference them in real-time responses. 📌 Ask Claude: 👉 “What are my goals for live calls about AI automations?” · If your goals PDF is uploaded, Claude will accurately list them without needing additional input. A major use case for Claude’s Projects is analysing Zoom meeting transcripts, YouTube captions, or any large text-based documents.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.instituteofaistudies.com/insights/how-to-use-claudes-projects",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "How to Use Claude to Create and Manage a Project: Step-by-Step Guide for New Users - Information Technology Services – Syracuse University",
      "url": "https://its.syr.edu/how-to-use-claude-to-create-and-manage-a-project-step-by-step-guide-for-new-users/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "syr.edu",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=syr.edu",
        "site_name": "Syr"
      },
      "is_missing": false,
      "text": "Access Claude Enterprise · Log ... environment. Check Settings · Click the settings icon (bottom left). Enable features like Artifacts (for reusable outputs), Code Execution, and File Creation....\n\nNovember 21, 2025 · Getting started with Claude just became a whole lot easier. This step-by-step guide walks you through everything you need to know to create, manage and share projects in Claude Enterprise—from signing in for the first time to building reusable workflows that simplify your daily tasks. Whether you’re a new user or looking to fine-tune your setup, this guide will help you make the most of Claude’s powerful tools and integrations at Syracuse University. Sign Up for Claude · Go to getclaude.syr.edu and request access to Claude using your university credentials. Accept the licensing agreement and wait for instant activation. Access Claude Enterprise · Log in at claude.ai. Confirm you see “Syracuse University” at the top to ensure you are in the secure enterprise environment. Check Settings · Click the settings icon (bottom left). Enable features like Artifacts (for reusable outputs), Code Execution, and File Creation.\n\nWrite clear instructions describing the project’s purpose and workflow. You can use Claude or the AI Prompt Creator project to help draft advanced prompts. ... Attach relevant files (e.g., policy documents, transcripts) to the project for Claude to analyze and use. ... Projects are reusable workspaces. You can update instructions, upload new files, and iterate on outputs. For recurring tasks (e.g., lecture prep, meeting minutes), simply update the data and rerun the workflow. ... Use the share button in the project to invite others by email or make the project available to all university users. Shared projects appear under “Team” or “Shared with you” tabs. ... Find shared projects in the “Projects” section. You can view, copy, or use them as templates for your own work. ... If your source files change, delete the old file and upload the new one, or link to a cloud location for dynamic updates.\n\nAlways start with your desired outcome and let Claude guide you through the process. Use advanced prompts for complex workflows and leverage shared projects for best practices.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://its.syr.edu/how-to-use-claude-to-create-and-manage-a-project-step-by-step-guide-for-new-users/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Building AI-Powered Projects: My Complete Claude Development Stack - DEV Community",
      "url": "https://dev.to/aldenweaver/building-ai-powered-projects-my-complete-claude-development-stack-4903",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "dev.to",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=dev.to",
        "site_name": "DEV Community"
      },
      "is_missing": false,
      "text": "Brainstorming with Claude Projects: I use Claude AI&#x27;s Projects feature extensively, which allows me to organize chats into folders with reusable project knowledge. I can upload files for context, view memory, and add custom instructions to refine ...\n\nPosted on Nov 11, 2025 • Edited on Nov 16, 2025 · #claude #claudecode #ai #productivity · New to Claude Code? Check out my beginner's guide to getting started with Claude Code (coming soon!) for a step-by-step introduction to AI-assisted development. This post outlines my current toolkit for developing with Claude AI. As these technologies evolve rapidly, I'm committed to continuous learning and updating my stack. Where This Stack Really Shines · While I can't share specifics about my proprietary enterprise work, this stack has proven invaluable for large-scale projects involving: Multiple interconnected services and APIs · Complex business logic requiring careful planning · Teams collaborating on different features simultaneously · Projects with 10+ epics and 50+ user stories · The structured approach (B-Mad Method) combined with parallel development (Conductor) makes it possible to maintain velocity and quality even as projects scale.\n\nTools at a Glance Category Tool Purpose Experience Level Planning Claude... Tagged with claude, claudecode, ai, productivity.\n\nBrainstorming with Claude Projects: I use Claude AI's Projects feature extensively, which allows me to organize chats into folders with reusable project knowledge. I can upload files for context, view memory, and add custom instructions to refine responses. This is where I generate PRDs (Product Requirements Documents), epics, and stories. Deep Research: When I need in-depth analysis—such as researching best practices or conducting competitive analysis—Claude's Research mode is invaluable. Large-Scale Projects: For bigger projects, I use the B-Mad Method, a comprehensive framework for agent-based development with Claude Code. From brainstorming through PRDs, epics, stories, development, and QA, there's a specialized agent for each phase. The workflows are well-documented, and you can adopt as many or as few components as your project needs. UPDATE (11-16-25): There is also a quick spec flow for \"Bug fixes, small features, rapid prototyping, and quick enhancements” - BMad Quick Spec Flo\n\nClaude API: When building AI-powered features, I integrate the Claude API directly. Security best practice: store your API key as an environment variable, never in your codebase. @ Context Management: The @ mention feature helps manage context by referencing specific files. Pro tip: I spent way too long copying and pasting file paths before I discovered this! Custom / Commands: I create custom commands stored in a .claude folder at my project root. (Note: if you're using the B-Mad Method, which also uses this folder for its agents, organize your custom commands in a separate subfolder for clarity.) Future goal: package my custom commands as an npm module! I've found parallel development most effective when epics and stories are planned with concurrency in mind. When working with Claude to generate project structure, I specifically request stories designed for parallel development.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://dev.to/aldenweaver/building-ai-powered-projects-my-complete-claude-development-stack-4903",
        "search_provider": "anthropic",
        "age": "November 16, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Collaborate with Claude on Projects",
      "url": "https://www.anthropic.com/news/projects",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "anthropic.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=anthropic.com",
        "site_name": "Anthropic"
      },
      "is_missing": false,
      "text": "Artifacts help you better work with Claude by helping you see, edit, and build with Claude. Simply ask Claude to generate content like code snippets, text documents, graphics, diagrams, or website designs, and Artifacts appear in a dedicated window alongside your conversation.\n\nLuka Anic, Senior Director of Technical AI Program and Product Manager at North Highland · These latest features around shared knowledge and collaboration integrate Claude into your existing team processes, enabling you to save time and elevate your work. By harnessing Claude’s accuracy and advanced coding and writing capabilities, Projects can amplify your team’s potential. Additionally, as part of our commitment to user privacy, any data or chats shared within Projects will not be used to train our generative models without a user’s explicit consent. In the coming months, we’ll continue making Claude easier to use while expanding the types of project knowledge you can bring to Claude via native integrations with popular applications and tools. We’re excited to see how your team works with Claude.\n\nOur vision for Claude has always been to create AI systems that work alongside people and meaningfully enhance their workflows. As a step in this direction, Claude.ai Pro and Team users can now organize their chats into Projects, bringing together curated sets of knowledge and chat activity in one place—with the ability to make their best chats with Claude viewable by teammates. With this new functionality, Claude can enable idea generation, more strategic decision-making, and exceptional results. Projects are available on Claude.ai for all Pro and Team customers, and can be powered by Claude 3.5 Sonnet, our latest release which outperforms its peers on a wide variety of benchmarks. Each project includes a 200K context window, the equivalent of a 500-page book, so users can add all of the relevant documents, code, and insights to enhance Claude’s effectiveness.\n\nClaude Team users can also share snapshots of their best conversations with Claude into your team’s shared project activity feed. Activity feeds help each teammate get inspired around different ways to work with Claude, and helps the entire team uplevel their skills working with AI. Sharing work products that were co-created with Claude can improve innovation in areas like product development and research, where bringing together organizational knowledge from across the company can produce higher-quality outputs. At North Highland, a leading change and transformation consultancy, hundreds of employees across consulting, business development, and marketing teams use Claude to work better. From writing proposals to analyzing complex documents like 10-Ks, teams use Claude to enhance and scale their expert services. The Claude Team plan is transforming our way of working at North Highland.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.anthropic.com/news/projects",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude AI 2025: Everything You Must Know Before Getting Started | by Wajid Ali | Medium",
      "url": "https://medium.com/@officewajidali/claude-ai-2025-everything-you-must-know-before-getting-started-c629a78ad583",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "Snowflake · Greenfield features: Ask Claude to scaffold components, tests, API contracts, and CI steps; iterate in Artifacts; promote to PR. Refactors at scale: With long context and caching, Claude can propose safer migrations across large repos.\n\nClaude AI 2025: Everything You Must Know Before Getting Started What Is Claude AI? A quick definition in plain English Claude is Anthropic’s AI assistant and family of large-language models (LLMs) …\n\nArtifacts open a live pane beside your chat where Claude places code, docs, diagrams, UI mockups, and more — so you can edit and iterate together. Projects let Pro/Team users organize chats, briefs, and artifacts for a shared workspace. Think “chat + canvas + version-able assets.” AnthropicDescript · Claude Code provides a terminal-native coding experience and best practices for delegating bigger engineering chunks: navigate repos, write tests, propose diffs, and reason about designs. It’s designed for “agentic coding,” not just autocomplete. Anthropic · Claude’s Free plan covers web, mobile, desktop, and now includes features like web search. Pro offers higher limits and productivity boosts; Team and Enterprise add admin controls and collaboration. As of 2025, Pro is $17/mo with annual billing ($20 monthly). Always check regional availability and latest terms.\n\nClaude is Anthropic’s AI assistant and family of large-language models (LLMs) designed to help you think, write, code, analyze data, and automate workflows. It’s known for careful instruction-following, strong reasoning on long documents, and practical enterprise features — without demanding you become an AI expert first. ... Claude’s focus is depth over flash: it emphasizes clarity, step-wise reasoning on complex tasks, and safe, controllable behavior. Unlike “black-box magic,” Claude exposes options like extended thinking (controlling how much internal reasoning the model uses) and supports structured outputs, tool use, and side-by-side building via Artifacts and Projects. Anthropic+1Anthropic · Anthropic introduced hybrid reasoning that lets Claude answer instantly for simple prompts or spend more budget on deeper, step-by-step thinking when tasks are hard.\n\nFor data teams, Snowflake Cortex AI surfaces Claude 3.7 Sonnet in SQL-adjacent workflows for coding help and app-building inside the data cloud. Expect tighter links to data governance and cost control. Snowflake · Greenfield features: Ask Claude to scaffold components, tests, API contracts, and CI steps; iterate in Artifacts; promote to PR. Refactors at scale: With long context and caching, Claude can propose safer migrations across large repos. Agentic tasks: Using Claude Code + tools + computer use, you can delegate multi-step engineering chores (repro a bug, check logs, patch, run tests). AnthropicAnthropic · Literature reviews: Load multiple papers, request structured summaries, and compare methods or datasets. Due diligence: Ask for risk matrices, red-flags, and follow-up questions; let extended thinking slow down and reason carefully. Multi-agent research: Claude’s research feature coordinates multiple agents to explore complex topics and sources.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://medium.com/@officewajidali/claude-ai-2025-everything-you-must-know-before-getting-started-c629a78ad583",
        "search_provider": "anthropic",
        "age": "September 6, 2025"
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

Good, I have enough info. Let me build an interactive visualization for this. Let me read the frontend-design skill first.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T02:44:07.285043Z",
  "stop_timestamp": "2026-04-12T02:44:07.285043Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_016rubULXqRPVqeQxg7sk6Bt",
  "name": "visualize:read_me",
  "input": {
    "modules": [
      "mockup",
      "interactive"
    ]
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
  "tool_use_id": "toolu_016rubULXqRPVqeQxg7sk6Bt",
  "name": "visualize:read_me",
  "content": [
    {
      "type": "text",
      "text": "# Imagine — Visual Creation Suite\n\n## Modules\nCall read_me again with the modules parameter to load detailed guidance:\n- `diagram` — SVG flowcharts, structural diagrams, illustrative diagrams\n- `mockup` — UI mockups, forms, cards, dashboards\n- `interactive` — interactive explainers with controls\n- `chart` — charts, data analysis, geographic maps (Chart.js, D3 choropleth)\n- `art` — illustration and generative art\nPick the closest fit. The module includes all relevant design guidance.\n\n**Complexity budget — hard limits:**\n- Box subtitles: ≤5 words. Detail goes in click-through (`sendPrompt`) or the prose below — not the box.\n- Colors: ≤2 ramps per diagram. If colors encode meaning (states, tiers), add a 1-line legend. Otherwise use one neutral ramp.\n- Horizontal tier: ≤4 boxes at full width (~140px each). 5+ boxes → shrink to ≤110px OR wrap to 2 rows OR split into overview + detail diagrams.\n\nIf you catch yourself writing \"click to learn more\" in prose, the diagram itself must ACTUALLY be sparse. Don't promise brevity then front-load everything.\n\n**Accessibility:** For HTML widgets, begin with a visually-hidden `<h2 class=\"sr-only\">` containing a one-sentence summary of the visualization for screen-reader users. (SVG widgets use `role=\"img\"` with `<title>` and `<desc>` instead — see SVG setup.)\n\nYou create rich visual content — SVG diagrams/illustrations and HTML interactive widgets — that renders inline in conversation. The best output feels like a natural extension of the chat.\n\n## Core Design System\n\nThese rules apply to ALL use cases.\n\n### Philosophy\n- **Seamless**: Users shouldn't notice where claude.ai ends and your widget begins.\n- **Flat**: No gradients, mesh backgrounds, noise textures, or decorative effects. Clean flat surfaces.\n- **Compact**: Show the essential inline. Explain the rest in text.\n- **Text goes in your response, visuals go in the tool** — All explanatory text, descriptions, introductions, and summaries must be written as normal response text OUTSIDE the tool call. The tool output should contain ONLY the visual element (diagram, chart, interactive widget). Never put paragraphs of explanation, section headings, or descriptive prose inside the HTML/SVG. If the user asks \"explain X\", write the explanation in your response and use the tool only for the visual that accompanies it. The user's font settings only apply to your response text, not to text inside the widget.\n\n### Streaming\nOutput streams token-by-token. Structure code so useful content appears early.\n- **HTML**: `<style>` (short) → content HTML → `<script>` last.\n- **SVG**: `<defs>` (markers) → visual elements immediately.\n- Prefer inline `style=\"...\"` over `<style>` blocks — inputs/controls must look correct mid-stream.\n- Keep `<style>` under ~15 lines. Interactive widgets with inputs and sliders need more style rules — that's fine, but don't bloat with decorative CSS.\n- Gradients, shadows, and blur flash during streaming DOM diffs. Use solid flat fills instead.\n\n### Rules\n- No `<!-- comments -->` or `/* comments */` (waste tokens, break streaming)\n- No font-size below 11px\n- No emoji — use CSS shapes or SVG paths\n- No gradients, drop shadows, blur, glow, or neon effects\n- No dark/colored backgrounds on outer containers (transparent only — host provides the bg)\n- **Typography**: The default font is Anthropic Sans. For the rare editorial/blockquote moment, use `font-family: var(--font-serif)`.\n- **Headings**: h1 = 22px, h2 = 18px, h3 = 16px — all `font-weight: 500`. Heading color is pre-set to `var(--color-text-primary)` — don't override it. Body text = 16px, weight 400, `line-height: 1.7`. **Two weights only: 400 regular, 500 bold.** Never use 600 or 700 — they look heavy against the host UI.\n- **Sentence case** always. Never Title Case, never ALL CAPS. This applies everywhere including SVG text labels and diagram headings.\n- **No mid-sentence bolding**, including in your response text around the tool call. Entity names, class names, function names go in `code style` not **bold**. Bold is for headings and labels only.\n- The widget container is `display: block; width: 100%`. Your HTML fills it naturally — no wrapper div needed. Just start with your content directly. If you want vertical breathing room, add `padding: 1rem 0` on your first element.\n- Never use `position: fixed` — the iframe viewport sizes itself to your in-flow content height, so fixed-positioned elements (modals, overlays, tooltips) collapse it to `min-height: 100px`. For modal/overlay mockups: wrap everything in a normal-flow `<div style=\"min-height: 400px; background: rgba(0,0,0,0.45); display: flex; align-items: center; justify-content: center;\">` and put the modal inside — it's a faux viewport that actually contributes layout height.\n- No DOCTYPE, `<html>`, `<head>`, or `<body>` — just content fragments.\n- When placing text on a colored background (badges, pills, cards, tags), use the darkest shade from that same color family for the text — never plain black or generic gray.\n- **Corners**: use `border-radius: var(--border-radius-md)` (or `-lg` for cards) in HTML. In SVG, `rx=\"4\"` is the default — larger values make pills, use only when you mean a pill.\n- **No rounded corners on single-sided borders** — if using `border-left` or `border-top` accents, set `border-radius: 0`. Rounded corners only work with full borders on all sides.\n- **No titles or prose inside the tool output** — see Philosophy above.\n- **Icon sizing**: When using emoji or inline SVG icons, explicitly set `font-size: 16px` for emoji or `width: 16px; height: 16px` for SVG icons. Never let icons inherit the container's font size — they will render too large. For larger decorative icons, use 24px max.\n- No tabs, carousels, or `display: none` sections during streaming — hidden content streams invisibly. Show all content stacked vertically. (Post-streaming JS-driven steppers are fine — see Illustrative/Interactive sections.)\n- No nested scrolling — auto-fit height.\n- Scripts execute after streaming — load libraries via `<script src=\"https://cdnjs.cloudflare.com/ajax/libs/...\">` (UMD globals), then use the global in a plain `<script>` that follows.\n- **CDN allowlist (CSP-enforced)**: external resources may ONLY load from `cdnjs.cloudflare.com`, `esm.sh`, `cdn.jsdelivr.net`, `unpkg.com`. All other origins are blocked by the sandbox — the request silently fails.\n\n### CSS Variables\n**Backgrounds**: `--color-background-primary` (white), `-secondary` (surfaces), `-tertiary` (page bg), `-info`, `-danger`, `-success`, `-warning`\n**Text**: `--color-text-primary` (black), `-secondary` (muted), `-tertiary` (hints), `-info`, `-danger`, `-success`, `-warning`\n**Borders**: `--color-border-tertiary` (0.15α, default), `-secondary` (0.3α, hover), `-primary` (0.4α), semantic `-info/-danger/-success/-warning`\n**Typography**: `--font-sans`, `--font-serif`, `--font-mono`\n**Layout**: `--border-radius-md` (8px), `--border-radius-lg` (12px — preferred for most components), `--border-radius-xl` (16px)\nAll auto-adapt to light/dark mode. For custom colors in HTML, use CSS variables.\n\n**Dark mode is mandatory** — every color must work in both modes:\n- In SVG: use the pre-built color classes (`c-blue`, `c-teal`, `c-amber`, etc.) for colored nodes — they handle light/dark mode automatically. Never write `<style>` blocks for colors.\n- In SVG: every `<text>` element needs a class (`t`, `ts`, `th`) — never omit fill or use `fill=\"inherit\"`. Inside a `c-{color}` parent, text classes auto-adjust to the ramp.\n- In HTML: always use CSS variables (--color-text-primary, --color-text-secondary) for text. Never hardcode colors like color: #333 — invisible in dark mode.\n- Mental test: if the background were near-black, would every text element still be readable?\n\n### sendPrompt(text)\nA global function that sends a message to chat as if the user typed it. Use it when the user's next step benefits from Claude thinking. Handle filtering, sorting, toggling, and calculations in JS instead.\n\n### Links\n`<a href=\"https://...\">` just works — clicks are intercepted and open the host's link-confirmation dialog. Or call `openLink(url)` directly.\n\n## When nothing fits\nPick the closest use case below and adapt. When nothing fits cleanly:\n- Default to editorial layout if the content is explanatory\n- Default to card layout if the content is a bounded object\n- All core design system rules still apply\n- Use `sendPrompt()` for any action that benefits from Claude thinking\n\n\n## UI components\n\n### Aesthetic\nFlat, clean, white surfaces. Minimal 0.5px borders. Generous whitespace. No gradients, no shadows (except functional focus rings). Everything should feel native to claude.ai — like it belongs on the page, not embedded from somewhere else.\n\n### Tokens\n- Borders: always `0.5px solid var(--color-border-tertiary)` (or `-secondary` for emphasis)\n- Corner radius: `var(--border-radius-md)` for most elements, `var(--border-radius-lg)` for cards\n- Cards: white bg (`var(--color-background-primary)`), 0.5px border, radius-lg, padding 1rem 1.25rem\n- Form elements (input, select, textarea, button, range slider) are pre-styled — write bare tags. Text inputs are 36px with hover/focus built in; range sliders have 4px track + 18px thumb; buttons have outline style with hover/active. Only add inline styles to override (e.g., different width).\n- Buttons: pre-styled with transparent bg, 0.5px border-secondary, hover bg-secondary, active scale(0.98). If it triggers sendPrompt, append a ↗ arrow.\n- **Round every displayed number.** JS float math leaks artifacts — `0.1 + 0.2` gives `0.30000000000000004`, `7 * 1.1` gives `7.700000000000001`. Any number that reaches the screen (slider readouts, stat card values, axis labels, data-point labels, tooltips, computed totals) must go through `Math.round()`, `.toFixed(n)`, or `Intl.NumberFormat`. Pick the precision that makes sense for the context — integers for counts, 1–2 decimals for percentages, `toLocaleString()` for currency. For range sliders, also set `step=\"1\"` (or step=\"0.1\" etc.) so the input itself emits round values.\n- Spacing: use rem for vertical rhythm (1rem, 1.5rem, 2rem), px for component-internal gaps (8px, 12px, 16px)\n- Box-shadows: none, except `box-shadow: 0 0 0 Npx` focus rings on inputs\n\n### Metric cards\nFor summary numbers (revenue, count, percentage) — surface card with muted 13px label above, 24px/500 number below. `background: var(--color-background-secondary)`, no border, `border-radius: var(--border-radius-md)`, padding 1rem. Use in grids of 2-4 with `gap: 12px`. Distinct from raised cards (which have white bg + border).\n\n### Layout\n- Editorial (explanatory content): no card wrapper, prose flows naturally\n- Card (bounded objects like a contact record, receipt): single raised card wraps the whole thing\n- Don't put tables here — output them as markdown in your response text\n\n**Grid overflow:** `grid-template-columns: 1fr` has `min-width: auto` by default — children with large min-content push the column past the container. Use `minmax(0, 1fr)` to clamp.\n\n**Table overflow:** Tables with many columns auto-expand past `width: 100%` if cell contents exceed it. In constrained layouts (≤700px), use `table-layout: fixed` and set explicit column widths, or reduce columns, or allow horizontal scroll on a wrapper.\n\n### Mockup presentation\nContained mockups — mobile screens, chat threads, single cards, modals, small UI components — should sit on a background surface (`var(--color-background-secondary)` container with `border-radius: var(--border-radius-lg)` and padding, or a device frame) so they don't float naked on the widget canvas. Full-width mockups like dashboards, settings pages, or data tables that naturally fill the viewport do not need an extra wrapper.\n\n### 1. Interactive explainer — learn how something works\n*\"Explain how compound interest works\" / \"Teach me about sorting algorithms\"*\n\nUse HTML for the interactive controls — sliders, buttons, live state displays, charts. Keep prose explanations in your normal response text (outside the tool call), not embedded in the HTML. No card wrapper. Whitespace is the container.\n\n```html\n<div style=\"display: flex; align-items: center; gap: 12px; margin: 0 0 1.5rem;\">\n  <label style=\"font-size: 14px; color: var(--color-text-secondary);\">Years</label>\n  <input type=\"range\" min=\"1\" max=\"40\" value=\"20\" id=\"years\" style=\"flex: 1;\" />\n  <span style=\"font-size: 14px; font-weight: 500; min-width: 24px;\" id=\"years-out\">20</span>\n</div>\n\n<div style=\"display: flex; align-items: baseline; gap: 8px; margin: 0 0 1.5rem;\">\n  <span style=\"font-size: 14px; color: var(--color-text-secondary);\">£1,000 →</span>\n  <span style=\"font-size: 24px; font-weight: 500;\" id=\"result\">£3,870</span>\n</div>\n\n<div style=\"margin: 2rem 0; position: relative; height: 240px;\">\n  <canvas id=\"chart\"></canvas>\n</div>\n```\n\nUse `sendPrompt()` to let users ask follow-ups: `sendPrompt('What if I increase the rate to 10%?')`\n\n### 2. Compare options — decision making\n*\"Compare pricing and features of these products\" / \"Help me choose between React and Vue\"*\n\nUse HTML. Side-by-side card grid for options. Highlight differences with semantic colors. Interactive elements for filtering or weighting.\n\n- Use `repeat(auto-fit, minmax(160px, 1fr))` for responsive columns\n- Each option in a card. Use badges for key differentiators.\n- Add `sendPrompt()` buttons: `sendPrompt('Tell me more about the Pro plan')`\n- Don't put comparison tables inside this tool — output them as regular markdown tables in your response text instead. The tool is for the visual card grid only.\n- When one option is recommended or \"most popular\", accent its card with `border: 2px solid var(--color-border-info)` only (2px is deliberate — the only exception to the 0.5px rule, used to accent featured items) — keep the same background and border as the other cards. Add a small badge (e.g. \"Most popular\") above or inside the card header using `background: var(--color-background-info); color: var(--color-text-info); font-size: 12px; padding: 4px 12px; border-radius: var(--border-radius-md)`.\n\n### 3. Data record — bounded UI object\n*\"Show me a Salesforce contact card\" / \"Create a receipt for this order\"*\n\nUse HTML. Wrap the entire thing in a single raised card. All content is sans-serif since it's pure UI. Use an avatar/initials circle for people (see example below).\n\n```html\n<div style=\"background: var(--color-background-primary); border-radius: var(--border-radius-lg); border: 0.5px solid var(--color-border-tertiary); padding: 1rem 1.25rem;\">\n  <div style=\"display: flex; align-items: center; gap: 12px; margin-bottom: 16px;\">\n    <div style=\"width: 44px; height: 44px; border-radius: 50%; background: var(--color-background-info); display: flex; align-items: center; justify-content: center; font-weight: 500; font-size: 14px; color: var(--color-text-info);\">MR</div>\n    <div>\n      <p style=\"font-weight: 500; font-size: 15px; margin: 0;\">Maya Rodriguez</p>\n      <p style=\"font-size: 13px; color: var(--color-text-secondary); margin: 0;\">VP of Engineering</p>\n    </div>\n  </div>\n  <div style=\"border-top: 0.5px solid var(--color-border-tertiary); padding-top: 12px;\">\n    <table style=\"width: 100%; font-size: 13px;\">\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Email</td><td style=\"text-align: right; padding: 4px 0; color: var(--color-text-info);\">m.rodriguez@acme.com</td></tr>\n      <tr><td style=\"color: var(--color-text-secondary); padding: 4px 0;\">Phone</td><td style=\"text-align: right; padding: 4px 0;\">+1 (415) 555-0172</td></tr>\n    </table>\n  </div>\n</div>\n```\n\n\n## Color palette\n\n9 color ramps, each with 7 stops from lightest to darkest. 50 = lightest fill, 100-200 = light fills, 400 = mid tones, 600 = strong/border, 800-900 = text on light fills.\n\n| Class | Ramp | 50 (lightest) | 100 | 200 | 400 | 600 | 800 | 900 (darkest) |\n|-------|------|------|-----|-----|-----|-----|-----|------|\n| `c-purple` | Purple | #EEEDFE | #CECBF6 | #AFA9EC | #7F77DD | #534AB7 | #3C3489 | #26215C |\n| `c-teal` | Teal | #E1F5EE | #9FE1CB | #5DCAA5 | #1D9E75 | #0F6E56 | #085041 | #04342C |\n| `c-coral` | Coral | #FAECE7 | #F5C4B3 | #F0997B | #D85A30 | #993C1D | #712B13 | #4A1B0C |\n| `c-pink` | Pink | #FBEAF0 | #F4C0D1 | #ED93B1 | #D4537E | #993556 | #72243E | #4B1528 |\n| `c-gray` | Gray | #F1EFE8 | #D3D1C7 | #B4B2A9 | #888780 | #5F5E5A | #444441 | #2C2C2A |\n| `c-blue` | Blue | #E6F1FB | #B5D4F4 | #85B7EB | #378ADD | #185FA5 | #0C447C | #042C53 |\n| `c-green` | Green | #EAF3DE | #C0DD97 | #97C459 | #639922 | #3B6D11 | #27500A | #173404 |\n| `c-amber` | Amber | #FAEEDA | #FAC775 | #EF9F27 | #BA7517 | #854F0B | #633806 | #412402 |\n| `c-red` | Red | #FCEBEB | #F7C1C1 | #F09595 | #E24B4A | #A32D2D | #791F1F | #501313 |\n\n**How to assign colors**: Color should encode meaning, not sequence. Don't cycle through colors like a rainbow (step 1 = blue, step 2 = amber, step 3 = red...). Instead:\n- Group nodes by **category** — all nodes of the same type share one color. E.g. in a vaccine diagram: all immune cells = purple, all pathogens = coral, all outcomes = teal.\n- For illustrative diagrams, map colors to **physical properties** — warm ramps for heat/energy, cool for cold/calm, green for organic, gray for structural/inert.\n- Use **gray for neutral/structural** nodes (start, end, generic steps).\n- Use **2-3 colors per diagram**, not 6+. More colors = more visual noise. A diagram with gray + purple + teal is cleaner than one using every ramp.\n- **Prefer purple, teal, coral, pink** for general diagram categories. Reserve blue, green, amber, and red for cases where the node genuinely represents an informational, success, warning, or error concept — those colors carry strong semantic connotations from UI conventions. (Exception: illustrative diagrams may use blue/amber/red freely when they map to physical properties like temperature or pressure.)\n\n**Text on colored backgrounds:** Always use the 800 or 900 stop from the same ramp as the fill. Never use black, gray, or --color-text-primary on colored fills. **When a box has both a title and a subtitle, they must be two different stops** — title darker (800 in light mode, 100 in dark), subtitle lighter (600 in light, 200 in dark). Same stop for both reads flat; the weight difference alone isn't enough. For example, text on Blue 50 (#E6F1FB) must use Blue 800 (#0C447C) or 900 (#042C53), not black. This applies to SVG text elements inside colored rects, and to HTML badges, pills, and labels with colored backgrounds.\n\n**Light/dark mode quick pick** — use only stops from the table, never off-table hex values:\n- **Light mode**: 50 fill + 600 stroke + **800 title / 600 subtitle**\n- **Dark mode**: 800 fill + 200 stroke + **100 title / 200 subtitle**\n- Apply `c-{ramp}` to a `<g>` wrapping shape+text, or directly to a `<rect>`/`<circle>`/`<ellipse>`. Never to `<path>` — paths don't get ramp fill. For colored connector strokes use inline `stroke=\"#...\"` (any mid-ramp hex works in both modes). Dark mode is automatic for ramp classes. Available: c-gray, c-blue, c-red, c-amber, c-green, c-teal, c-purple, c-coral, c-pink.\n\nFor status/semantic meaning in UI (success, warning, danger) use CSS variables. For categorical coloring in both diagrams and UI, use these ramps.\n",
      "uuid": "3cebcd2b-d458-43a4-b962-1e5173e08d80"
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

Now let me build a comprehensive interactive widget explaining Claude Projects.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T02:44:10.372863Z",
  "stop_timestamp": "2026-04-12T02:45:40.403334Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01NMdcoe7ncTA2ELU1mcEmHE",
  "name": "visualize:show_widget",
  "input": {
    "title": "claude_projects_interactive_guide",
    "loading_messages": [
      "Building the Projects workspace...",
      "Wiring up the interactive panels...",
      "Polishing the knowledge base view..."
    ],
    "widget_code": "\n<h2 class=\"sr-only\">Interactive guide to Claude Projects: architecture, features, and use cases</h2>\n<style>\n  :root { --tab-active: var(--color-background-primary); }\n  * { box-sizing: border-box; margin: 0; padding: 0; }\n  body { font-family: var(--font-sans); }\n  .shell { padding: 1rem 0; }\n  .tabs { display: flex; gap: 6px; margin-bottom: 16px; flex-wrap: wrap; }\n  .tab { padding: 6px 14px; border-radius: var(--border-radius-md); border: 0.5px solid var(--color-border-secondary); font-size: 13px; cursor: pointer; background: transparent; color: var(--color-text-secondary); transition: all .15s; }\n  .tab.active { background: var(--color-background-primary); color: var(--color-text-primary); border-color: var(--color-border-primary); font-weight: 500; }\n  .tab:hover:not(.active) { background: var(--color-background-secondary); }\n  .panel { display: none; }\n  .panel.active { display: block; }\n  .card { background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-lg); padding: 1rem 1.25rem; margin-bottom: 12px; }\n  .label { font-size: 12px; color: var(--color-text-secondary); margin-bottom: 4px; }\n  .badge { display: inline-block; font-size: 11px; padding: 2px 8px; border-radius: var(--border-radius-md); margin: 2px; }\n  .badge-blue { background: #E6F1FB; color: #0C447C; }\n  .badge-teal { background: #E1F5EE; color: #085041; }\n  .badge-amber { background: #FAEEDA; color: #633806; }\n  .badge-gray { background: #F1EFE8; color: #444441; }\n  .badge-purple { background: #EEEDFE; color: #3C3489; }\n  .badge-coral { background: #FAECE7; color: #712B13; }\n  .tier-row { display: grid; grid-template-columns: repeat(3, minmax(0,1fr)); gap: 10px; margin: 8px 0; }\n  .tier-card { background: var(--color-background-secondary); border-radius: var(--border-radius-md); padding: 10px 12px; border: 0.5px solid var(--color-border-tertiary); }\n  .tier-card.highlight { border: 1.5px solid #85B7EB; }\n  .tier-name { font-size: 13px; font-weight: 500; color: var(--color-text-primary); }\n  .tier-sub { font-size: 11px; color: var(--color-text-secondary); margin-top: 2px; }\n  .tier-feat { font-size: 12px; color: var(--color-text-primary); margin-top: 8px; line-height: 1.6; }\n  .arch-row { display: flex; align-items: stretch; gap: 0; margin: 8px 0; }\n  .arch-box { flex: 1; padding: 10px 12px; border: 0.5px solid var(--color-border-tertiary); background: var(--color-background-secondary); border-radius: 0; font-size: 12px; color: var(--color-text-secondary); }\n  .arch-box:first-child { border-radius: var(--border-radius-md) 0 0 var(--border-radius-md); }\n  .arch-box:last-child { border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0; }\n  .arch-box .arch-title { font-size: 13px; font-weight: 500; color: var(--color-text-primary); margin-bottom: 4px; }\n  .arch-arrow { display: flex; align-items: center; padding: 0 2px; font-size: 14px; color: var(--color-text-secondary); }\n  .step-list { counter-reset: step; }\n  .step-item { display: flex; gap: 12px; align-items: flex-start; margin-bottom: 10px; }\n  .step-num { width: 22px; height: 22px; border-radius: 50%; background: var(--color-background-info); color: var(--color-text-info); font-size: 11px; font-weight: 500; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-top: 1px; }\n  .step-text { font-size: 13px; color: var(--color-text-primary); line-height: 1.6; }\n  .step-code { font-family: var(--font-mono); font-size: 11px; background: var(--color-background-secondary); padding: 2px 6px; border-radius: 4px; }\n  .use-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 8px; }\n  .use-card { background: var(--color-background-secondary); border-radius: var(--border-radius-md); padding: 10px 12px; border: 0.5px solid var(--color-border-tertiary); cursor: pointer; transition: border-color .15s; }\n  .use-card:hover { border-color: var(--color-border-secondary); }\n  .use-card.active-uc { border: 1.5px solid #85B7EB; background: var(--color-background-primary); }\n  .use-icon { font-size: 15px; margin-bottom: 4px; }\n  .use-title { font-size: 13px; font-weight: 500; color: var(--color-text-primary); }\n  .use-sub { font-size: 11px; color: var(--color-text-secondary); margin-top: 2px; line-height: 1.4; }\n  .use-detail { margin-top: 12px; background: var(--color-background-primary); border: 0.5px solid var(--color-border-tertiary); border-radius: var(--border-radius-md); padding: 12px 14px; font-size: 13px; color: var(--color-text-primary); line-height: 1.7; display: none; }\n  .use-detail.show { display: block; }\n  .tip-box { margin-top: 12px; background: var(--color-background-secondary); border-left: 3px solid #85B7EB; padding: 10px 12px; border-radius: 0 var(--border-radius-md) var(--border-radius-md) 0; font-size: 12px; color: var(--color-text-primary); line-height: 1.6; }\n  .sep { border: none; border-top: 0.5px solid var(--color-border-tertiary); margin: 10px 0; }\n  .key-row { display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 0.5px solid var(--color-border-tertiary); font-size: 12px; }\n  .key-row:last-child { border-bottom: none; }\n  .key-label { color: var(--color-text-secondary); }\n  .key-val { color: var(--color-text-primary); font-weight: 500; }\n  .limit-bar { height: 6px; border-radius: 3px; background: var(--color-border-tertiary); margin-top: 4px; overflow: hidden; }\n  .limit-fill { height: 100%; border-radius: 3px; transition: width .4s; }\n  .ask-btn { margin-top: 14px; padding: 7px 16px; border-radius: var(--border-radius-md); border: 0.5px solid var(--color-border-secondary); background: transparent; color: var(--color-text-primary); font-size: 13px; cursor: pointer; width: 100%; text-align: left; transition: background .15s; }\n  .ask-btn:hover { background: var(--color-background-secondary); }\n</style>\n\n<div class=\"shell\">\n  <div class=\"tabs\">\n    <button class=\"tab active\" onclick=\"show('overview')\">Overview</button>\n    <button class=\"tab\" onclick=\"show('arch')\">Architecture</button>\n    <button class=\"tab\" onclick=\"show('setup')\">Setup</button>\n    <button class=\"tab\" onclick=\"show('tiers')\">Plans</button>\n    <button class=\"tab\" onclick=\"show('usecases')\">Use cases</button>\n    <button class=\"tab\" onclick=\"show('tips')\">Tips</button>\n  </div>\n\n  <div id=\"overview\" class=\"panel active\">\n    <div class=\"card\">\n      <div class=\"label\">What it solves</div>\n      <p style=\"font-size:13px;color:var(--color-text-primary);line-height:1.7;margin-top:4px;\">Without Projects, every chat starts cold — you re-upload files, re-explain preferences, re-establish context. Projects solve this by giving each topic its own persistent workspace with a shared knowledge base and custom instructions applied to every chat inside it.</p>\n    </div>\n    <div class=\"card\">\n      <div class=\"label\">Three pillars</div>\n      <div style=\"display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px;margin-top:6px;\">\n        <div style=\"text-align:center;padding:10px 6px;background:var(--color-background-secondary);border-radius:var(--border-radius-md);\">\n          <div style=\"font-size:20px;margin-bottom:4px;\">📂</div>\n          <div style=\"font-size:12px;font-weight:500;color:var(--color-text-primary);\">Knowledge base</div>\n          <div style=\"font-size:11px;color:var(--color-text-secondary);margin-top:2px;\">Docs, code, notes auto-referenced in all chats</div>\n        </div>\n        <div style=\"text-align:center;padding:10px 6px;background:var(--color-background-secondary);border-radius:var(--border-radius-md);\">\n          <div style=\"font-size:20px;margin-bottom:4px;\">⚙️</div>\n          <div style=\"font-size:12px;font-weight:500;color:var(--color-text-primary);\">Custom instructions</div>\n          <div style=\"font-size:11px;color:var(--color-text-secondary);margin-top:2px;\">Persona, tone, role — baked into every conversation</div>\n        </div>\n        <div style=\"text-align:center;padding:10px 6px;background:var(--color-background-secondary);border-radius:var(--border-radius-md);\">\n          <div style=\"font-size:20px;margin-bottom:4px;\">💬</div>\n          <div style=\"font-size:12px;font-weight:500;color:var(--color-text-primary);\">Organized chats</div>\n          <div style=\"font-size:11px;color:var(--color-text-secondary);margin-top:2px;\">All related threads in one place, searchable</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"label\">Availability</div>\n      <div style=\"margin-top:6px;font-size:12px;line-height:1.8;color:var(--color-text-primary);\">\n        <span class=\"badge badge-teal\">Free</span> Up to 5 projects &nbsp;\n        <span class=\"badge badge-blue\">Pro / Max</span> Unlimited projects + RAG &nbsp;\n        <span class=\"badge badge-purple\">Team / Enterprise</span> + sharing &amp; collaboration\n      </div>\n    </div>\n  </div>\n\n  <div id=\"arch\" class=\"panel\">\n    <div class=\"card\">\n      <div class=\"label\">Data flow — from upload to response</div>\n      <div class=\"arch-row\" style=\"margin-top:8px;\">\n        <div class=\"arch-box\" style=\"background:#E6F1FB;border-color:#B5D4F4;\">\n          <div class=\"arch-title\" style=\"color:#0C447C;\">Knowledge base</div>\n          <div style=\"color:#185FA5;\">PDF, DOCX, CSV, TXT, HTML, ODT, RTF, EPUB</div>\n        </div>\n        <div class=\"arch-arrow\">→</div>\n        <div class=\"arch-box\" style=\"background:#E1F5EE;border-color:#9FE1CB;\">\n          <div class=\"arch-title\" style=\"color:#085041;\">Context injection</div>\n          <div style=\"color:#0F6E56;\">Prepended to every chat in the project</div>\n        </div>\n        <div class=\"arch-arrow\">→</div>\n        <div class=\"arch-box\" style=\"background:#EEEDFE;border-color:#CECBF6;\">\n          <div class=\"arch-title\" style=\"color:#3C3489;\">Claude response</div>\n          <div style=\"color:#534AB7;\">References docs + follows your instructions</div>\n        </div>\n      </div>\n      <div class=\"tip-box\" style=\"margin-top:10px;\">On paid plans, when the knowledge base approaches the context window limit, Claude automatically switches to RAG mode, expanding capacity by up to 10×.</div>\n    </div>\n    <div class=\"card\">\n      <div class=\"label\">Context scoping</div>\n      <p style=\"font-size:12px;color:var(--color-text-secondary);margin-top:4px;line-height:1.6;\">Instructions + knowledge base → <strong style=\"color:var(--color-text-primary);\">shared across all chats</strong><br>Individual chat history → <strong style=\"color:var(--color-text-primary);\">isolated per chat</strong><br>Artifacts saved to project → <strong style=\"color:var(--color-text-primary);\">shared across all chats</strong></p>\n      <hr class=\"sep\">\n      <p style=\"font-size:12px;color:var(--color-text-secondary);line-height:1.5;\">Important: conversations within the same project do not see each other's messages unless you explicitly save content to the knowledge base.</p>\n    </div>\n    <div class=\"card\">\n      <div class=\"label\">Key limits (source: Anthropic support docs)</div>\n      <div style=\"margin-top:6px;\">\n        <div class=\"key-row\"><span class=\"key-label\">Context window</span><span class=\"key-val\">200K tokens (~500 pages)</span></div>\n        <div class=\"key-row\"><span class=\"key-label\">Max file size</span><span class=\"key-val\">30 MB per file</span></div>\n        <div class=\"key-row\"><span class=\"key-label\">File count</span><span class=\"key-val\">Unlimited (within token limit)</span></div>\n        <div class=\"key-row\"><span class=\"key-label\">Supported formats</span><span class=\"key-val\">PDF DOCX CSV TXT HTML ODT RTF EPUB</span></div>\n        <div class=\"key-row\"><span class=\"key-label\">RAG expansion</span><span class=\"key-val\">~10× — paid plans only</span></div>\n      </div>\n    </div>\n  </div>\n\n  <div id=\"setup\" class=\"panel\">\n    <div class=\"card\">\n      <div class=\"label\">Step-by-step creation</div>\n      <div class=\"step-list\" style=\"margin-top:8px;\">\n        <div class=\"step-item\"><div class=\"step-num\">1</div><div class=\"step-text\">Go to <span class=\"step-code\">claude.ai/projects</span> or hover the left sidebar and click <em>Projects</em>.</div></div>\n        <div class=\"step-item\"><div class=\"step-num\">2</div><div class=\"step-text\">Click <strong style=\"font-weight:500;\">+ New Project</strong> (top-right). Give it a name. The description is for your reference only — Claude cannot read it.</div></div>\n        <div class=\"step-item\"><div class=\"step-num\">3</div><div class=\"step-text\">In the <strong style=\"font-weight:500;\">Project Knowledge</strong> panel (right side), click <strong style=\"font-weight:500;\">+</strong> and upload your documents or paste text.</div></div>\n        <div class=\"step-item\"><div class=\"step-num\">4</div><div class=\"step-text\">Open <strong style=\"font-weight:500;\">Custom Instructions</strong> and write a system prompt: role, tone, output format, domain context.</div></div>\n        <div class=\"step-item\"><div class=\"step-num\">5</div><div class=\"step-text\">Start a new chat from the project page — context and instructions are already active.</div></div>\n        <div class=\"step-item\"><div class=\"step-num\">6</div><div class=\"step-text\">Optionally: save any artifact or chat output back into the knowledge base for reuse in future chats.</div></div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"label\">Writing good custom instructions</div>\n      <p style=\"font-size:12px;color:var(--color-text-secondary);line-height:1.6;margin-top:4px;\">Think of it as onboarding documentation for a new collaborator. Include: who you are, what the project is for, preferred output format, level of expertise assumed, any terminology conventions. Keep it under ~500 words.</p>\n      <div class=\"tip-box\">For your physics research context, something like: \"You are assisting a nuclear physics MS student. Respond at graduate-research level. Use LaTeX for equations. All claims must cite the relevant paper or textbook.\"</div>\n    </div>\n  </div>\n\n  <div id=\"tiers\" class=\"panel\">\n    <div class=\"card\">\n      <div class=\"label\">Feature comparison by plan</div>\n      <div class=\"tier-row\" style=\"margin-top:8px;\">\n        <div class=\"tier-card\">\n          <div class=\"tier-name\">Free</div>\n          <div class=\"tier-sub\">$0/mo</div>\n          <div class=\"tier-feat\">\n            Up to 5 projects<br>\n            200K token window<br>\n            Custom instructions<br>\n            Knowledge base upload<br>\n            <span style=\"color:var(--color-text-secondary);\">No RAG</span><br>\n            <span style=\"color:var(--color-text-secondary);\">No sharing</span>\n          </div>\n        </div>\n        <div class=\"tier-card highlight\">\n          <div style=\"margin-bottom:4px;\"><span class=\"badge badge-blue\" style=\"font-size:10px;\">You (Max)</span></div>\n          <div class=\"tier-name\">Pro / Max</div>\n          <div class=\"tier-sub\">$20 / $100+ per mo</div>\n          <div class=\"tier-feat\">\n            Unlimited projects<br>\n            200K + RAG (up to 10×)<br>\n            Custom instructions<br>\n            Google Drive integration<br>\n            GitHub connection<br>\n            <span style=\"color:var(--color-text-secondary);\">No team sharing</span>\n          </div>\n        </div>\n        <div class=\"tier-card\">\n          <div class=\"tier-name\">Team / Enterprise</div>\n          <div class=\"tier-sub\">$25+ per seat/mo</div>\n          <div class=\"tier-feat\">\n            Everything in Pro<br>\n            Share with teammates<br>\n            Role-based permissions<br>\n            Activity feed<br>\n            Org-wide visibility<br>\n            Admin controls\n          </div>\n        </div>\n      </div>\n      <div class=\"tip-box\">Since you have a Max subscription, you get unlimited projects with full RAG support. The main missing feature vs. Team is collaborative sharing — all projects remain personal.</div>\n    </div>\n    <div class=\"card\">\n      <div class=\"label\">RAG — what it means in practice</div>\n      <p style=\"font-size:12px;color:var(--color-text-primary);line-height:1.6;margin-top:4px;\">Without RAG: the entire knowledge base is loaded into every chat, consuming your context window. With RAG: Claude retrieves only the most relevant document chunks for each query, dramatically expanding how much material you can store. This is automatic on paid plans — no configuration needed.</p>\n    </div>\n  </div>\n\n  <div id=\"usecases\" class=\"panel\">\n    <div class=\"label\" style=\"margin-bottom:8px;\">Click a use case for details</div>\n    <div class=\"use-grid\">\n      <div class=\"use-card\" id=\"uc-research\" onclick=\"toggleUC('research')\">\n        <div class=\"use-title\">Research workspace</div>\n        <div class=\"use-sub\">Papers, notes, literature reviews</div>\n      </div>\n      <div class=\"use-card\" id=\"uc-code\" onclick=\"toggleUC('code')\">\n        <div class=\"use-title\">Codebase assistant</div>\n        <div class=\"use-sub\">Architecture docs, style guides, PRs</div>\n      </div>\n      <div class=\"use-card\" id=\"uc-phd\" onclick=\"toggleUC('phd')\">\n        <div class=\"use-title\">PhD application hub</div>\n        <div class=\"use-sub\">SOPs, prof contacts, deadlines</div>\n      </div>\n      <div class=\"use-card\" id=\"uc-lang\" onclick=\"toggleUC('lang')\">\n        <div class=\"use-title\">Language study</div>\n        <div class=\"use-sub\">Vocab, reading notes, writing drafts</div>\n      </div>\n      <div class=\"use-card\" id=\"uc-skill\" onclick=\"toggleUC('skill')\">\n        <div class=\"use-title\">Skill ecosystem</div>\n        <div class=\"use-sub\">SKILL.md files, prompts, evolution logs</div>\n      </div>\n      <div class=\"use-card\" id=\"uc-meeting\" onclick=\"toggleUC('meeting')\">\n        <div class=\"use-title\">Meeting intelligence</div>\n        <div class=\"use-sub\">Transcripts, action items, follow-ups</div>\n      </div>\n    </div>\n    <div id=\"uc-detail\" class=\"use-detail\"></div>\n  </div>\n\n  <div id=\"tips\" class=\"panel\">\n    <div class=\"card\">\n      <div class=\"label\">When to use a project vs. a regular chat</div>\n      <div style=\"margin-top:8px;display:grid;grid-template-columns:1fr 1fr;gap:8px;\">\n        <div style=\"background:#E1F5EE;border-radius:var(--border-radius-md);padding:10px 12px;\">\n          <div style=\"font-size:12px;font-weight:500;color:#085041;margin-bottom:6px;\">Use a project when...</div>\n          <div style=\"font-size:12px;color:#0F6E56;line-height:1.7;\">You'll return to the same topic repeatedly<br>You have reference docs to share<br>You want consistent persona/tone<br>You'll reuse outputs as new inputs</div>\n        </div>\n        <div style=\"background:#FAECE7;border-radius:var(--border-radius-md);padding:10px 12px;\">\n          <div style=\"font-size:12px;font-weight:500;color:#712B13;margin-bottom:6px;\">Use a regular chat for...</div>\n          <div style=\"font-size:12px;color:#993C1D;line-height:1.7;\">One-off questions<br>Quick lookups<br>Exploratory prompting<br>Tasks with no persistent context</div>\n        </div>\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"label\">Power-user habits</div>\n      <div class=\"step-list\" style=\"margin-top:6px;\">\n        <div class=\"step-item\"><div class=\"step-num\" style=\"background:#EEEDFE;color:#3C3489;\">A</div><div class=\"step-text\"><strong style=\"font-weight:500;\">Save artifacts to the knowledge base.</strong> Any good output (summary, code, schema) can be pinned — it becomes reference material for future chats.</div></div>\n        <div class=\"step-item\"><div class=\"step-num\" style=\"background:#EEEDFE;color:#3C3489;\">B</div><div class=\"step-text\"><strong style=\"font-weight:500;\">Iterate on instructions.</strong> Treat custom instructions as living documentation. After 5–10 chats, revise them based on where Claude consistently misunderstood your intent.</div></div>\n        <div class=\"step-item\"><div class=\"step-num\" style=\"background:#EEEDFE;color:#3C3489;\">C</div><div class=\"step-text\"><strong style=\"font-weight:500;\">Keep projects narrow.</strong> A project per domain (research, PhD apps, English study) stays coherent. Avoid dumping everything into one \"general\" project.</div></div>\n        <div class=\"step-item\"><div class=\"step-num\" style=\"background:#EEEDFE;color:#3C3489;\">D</div><div class=\"step-text\"><strong style=\"font-weight:500;\">Star high-priority projects</strong> for quick access from the sidebar without navigating to the full projects list.</div></div>\n      </div>\n    </div>\n    <button class=\"ask-btn\" onclick=\"sendPrompt('Help me set up a Claude Project for my nuclear physics research at IMP — what instructions and documents should I include?')\">Help me set up a project for my physics research ↗</button>\n    <button class=\"ask-btn\" onclick=\"sendPrompt('Help me set up a Claude Project for my PhD application to the University of Tokyo — what should I include in the knowledge base and instructions?')\">Help me set up a project for my UTokyo PhD application ↗</button>\n  </div>\n</div>\n\n<script>\nconst ucData = {\n  research: {\n    title: \"Research workspace\",\n    detail: \"Upload your paper PDFs, literature notes, and BibTeX files. Set instructions like: 'You are a nuclear physics research assistant. When answering, cite the relevant paper by first-author and year. Prefer SI units. Flag any claims that lack experimental evidence.' Use separate chats per paper or per sub-question — all share the same uploaded corpus.\",\n    badges: [\"PDF papers\", \"lit notes\", \"BibTeX\", \"preprints\"]\n  },\n  code: {\n    title: \"Codebase assistant\",\n    detail: \"Connect your GitHub repo or upload key source files, a README, and a style guide. Instructions: 'You are a senior developer on this project. Always follow the existing code style. Prefer functional patterns. When suggesting changes, include a brief rationale.' Each chat can focus on a feature or bug without losing project context.\",\n    badges: [\"GitHub\", \"README\", \"style guide\", \"architecture docs\"]\n  },\n  phd: {\n    title: \"PhD application hub\",\n    detail: \"Upload your CV, research statement drafts, and notes on target professors. Instructions: 'You are helping me apply to doctoral programs in experimental nuclear physics. My target is CNS, UTokyo (Imai group), October 2027 entry. Be concise, precise, and flag anything that sounds generic.' Chats for SOP, cold emails, interview prep all share this foundation.\",\n    badges: [\"CV\", \"SOP drafts\", \"prof notes\", \"deadline list\"]\n  },\n  lang: {\n    title: \"Language study\",\n    detail: \"Upload your vocabulary lists, writing samples, and style notes. Instructions: 'You are an English language tutor for an advanced non-native speaker preparing for TOEFL and academic writing. When correcting, explain the rule briefly. Focus on precision and register.' Each vocabulary or writing session benefits from your accumulated notes.\",\n    badges: [\"vocab lists\", \"TOEFL prep\", \"writing samples\", \"etymology notes\"]\n  },\n  skill: {\n    title: \"Skill ecosystem\",\n    detail: \"Upload your SKILL.md files, evolution.md logs, and any custom prompt templates. Instructions: 'You are helping me maintain and improve a library of reusable Claude skills. When I show you a skill, analyze its trigger accuracy and output quality based on the evolution log. Suggest concrete SKILL.md edits.' Perfect for managing the feynman, vocabulary-viz, and concept-visualizer skills.\",\n    badges: [\"SKILL.md files\", \"evolution.md\", \"prompt templates\", \"eval results\"]\n  },\n  meeting: {\n    title: \"Meeting intelligence\",\n    detail: \"Upload transcripts (TXT/PDF) from seminars, advisor meetings, or group discussions. Instructions: 'Extract action items, decisions, open questions, and key references from transcripts. Output as structured markdown. Flag anything requiring follow-up within 48 hours.' Analyze an entire semester of meetings from one project.\",\n    badges: [\"transcripts\", \"meeting notes\", \"action items\", \"follow-ups\"]\n  }\n};\n\nfunction show(id) {\n  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));\n  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));\n  document.getElementById(id).classList.add('active');\n  event.target.classList.add('active');\n}\n\nfunction toggleUC(key) {\n  const d = document.getElementById('uc-detail');\n  const card = document.getElementById('uc-' + key);\n  const wasActive = card.classList.contains('active-uc');\n  document.querySelectorAll('.use-card').forEach(c => c.classList.remove('active-uc'));\n  if (wasActive) { d.classList.remove('show'); return; }\n  card.classList.add('active-uc');\n  const uc = ucData[key];\n  d.innerHTML = '<strong style=\"font-size:13px;font-weight:500;\">' + uc.title + '</strong><br><br>' + uc.detail + '<br><br>' +\n    uc.badges.map(b => '<span class=\"badge badge-gray\">' + b + '</span>').join(' ');\n  d.classList.add('show');\n}\n</script>\n"
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
  "tool_use_id": "toolu_01NMdcoe7ncTA2ELU1mcEmHE",
  "name": "visualize:show_widget",
  "content": [
    {
      "type": "text",
      "text": "Content rendered and shown to the user. Please do not duplicate the shown content in text because it's already visually represented.",
      "uuid": "ca51e31d-cea0-4e38-a2b8-dd362ae71299"
    },
    {
      "type": "text",
      "text": "[This tool call rendered an interactive widget in the chat. The user can already see the result — do not repeat it in text or with another visualization tool.]",
      "uuid": "2bf1f51d-d106-406e-a423-2c58e56e53c3"
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

Here's a summary of what the widget covers, with sources:

**What Projects is.** Projects let you create self-contained workspaces with their own chat histories and knowledge bases. Within each project, you can upload documents, provide context, and have focused chats with Claude — and define project instructions to tailor Claude's responses for every chat inside that project.

**Availability.** Projects are available to all users including free accounts. Free users can create a maximum of five projects. Enhanced project knowledge with RAG is only available to users with paid plans (Pro, Max, Team, or Enterprise). Since you're on Max, you get full RAG.

**The RAG mechanism.** When your project knowledge approaches context limits, Claude seamlessly enables RAG mode to expand capacity by up to 10× while maintaining response quality.

**Storage specs.** The limit is 200K tokens, equivalent to about 500 pages of text. Supported formats include PDF, DOCX, CSV, TXT, HTML, ODT, RTF, and EPUB. One file should not exceed 30MB. You can upload unlimited files, but total content must fit within the context window.

**A critical scoping rule people miss.** Context is not shared across chats within a project unless the information is added into the project knowledge base. So chats don't "talk to each other" — only the shared knowledge base and instructions are universal.

**Saving outputs back.** You can turn AI-generated content in Claude into project knowledge. If you land on a draft, insight, piece of code, or visual that you want to reuse, you can upgrade the generated work into project knowledge so you can reference it in future conversations inside the project.

**For your specific workflow**, the most valuable projects to set up would probably be: (1) a nuclear physics research workspace with your papers and a grad-level instruction profile, (2) a UTokyo PhD application hub with your CV, SOP drafts, and professor notes, and (3) an English/TOEFL study project with your vocabulary evolution logs. The "Ask" buttons at the bottom of the Tips tab will kick off those setups directly.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d7f93-14d6-7418-9bf2-7c67b886e7db",
  "updated_at": "2026-04-12T02:46:12.235095Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7f93-14d6-7716-a44c-0e6e7caa154c"
}
```

</details>

### 3. human — 2026-04-12T06:17:11.353457Z

1. I am curious about the context from files in project.
Does those files only load into your context window when you actively search for them?

1. Do you have the ability to rename the title of conversation session in the project based on its content to make the name more readable?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8056-3ea8-78ab-a792-c48fff5b4887",
  "updated_at": "2026-04-12T06:17:11.353457Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d7f93-14d6-7418-9bf2-7c67b886e7db"
}
```

</details>

### 4. assistant — 2026-04-12T06:17:41.891916Z

 

<details>
<summary>Thinking (verbatim)</summary>

Two questions:
1. How does file/knowledge loading work in Projects - is it always loaded or only when searched (RAG)?
2. Can Claude rename conversation titles?

For question 1, I need to be precise. From the search results I already have:
- Without RAG (free): entire knowledge base loaded into every chat context window
- With RAG (paid plans): when knowledge approaches limits, Claude retrieves only relevant chunks

For question 2 - I know Claude can suggest titles but I'm not sure if it can directly rename conversations. Let me think about what I actually know vs what I should search for.

Actually, I should search for the RAG details more specifically to be accurate, and also verify the conversation renaming capability.


For the conversation renaming question, I'm aware that Claude.ai auto-generates titles and users can manually edit them, but I'm uncertain whether Claude has a programmatic capability to rename conversations itself. I should search for specifics on the RAG behavior since the user needs accurate information.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-04-12T06:17:18.364838Z",
  "stop_timestamp": "2026-04-12T06:17:18.634129Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01LHCBXtwDfthCo9sor3MtQP",
  "name": "web_fetch",
  "input": {
    "url": "https://support.claude.com/en/articles/9517075-what-are-projects"
  },
  "message": "Fetching: https://support.claude.com/en/articles/9517075-what-are-projects",
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
  "tool_use_id": "toolu_01LHCBXtwDfthCo9sor3MtQP",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "What are projects? | Claude Help Center",
      "url": "https://support.claude.com/en/articles/9517075-what-are-projects",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "claude"
      },
      "is_missing": false,
      "text": "What are projects? | Claude Help Center\n\n[Skip to main content](#main-content)\n\n[![Claude Help Center](https://downloads.intercomcdn.com/i/o/lupk8zyo/787776/ade321b9d8ff06050cb06ac0049d/d7ef4b66df4ff3851b5de741185c97ab.png)](https://support.claude.com/en/)\n\n[API Docs](https://docs.claude.com/en/docs/intro)[Release Notes](https://support.claude.com/en/articles/12138966-release-notes)[How to Get Support](https://support.claude.com/en/articles/9015913-how-to-get-support)\n\nEnglishFrançaisDeutschBahasa IndonesiaItaliano日本語한국어PortuguêsPусский简体中文Español繁體中文\n\nEnglish\n\n[API Docs](https://docs.claude.com/en/docs/intro)[Release Notes](https://support.claude.com/en/articles/12138966-release-notes)[How to Get Support](https://support.claude.com/en/articles/9015913-how-to-get-support)\n\nEnglishFrançaisDeutschBahasa IndonesiaItaliano日本語한국어PortuguêsPусский简体中文Español繁體中文\n\nEnglish\n\nSearch for articles...\n\n1. [All Collections](https://support.claude.com/en/)\n2. [Claude](https://support.claude.com/en/collections/4078531-claude)\n3. [Features and capabilities](https://support.claude.com/en/collections/18031719-features-and-capabilities)\n4. What are projects?\n\n# What are projects?\n\nUpdated over 3 weeks ago\n\nTable of contents\n\nProjects are available to all users, including those with free Claude accounts. Free users can create a maximum of five projects.\n\nProjects allow you to create self-contained workspaces with their own chat histories and knowledge bases. Within each project, you can upload documents, provide context, and have focused chats with Claude.\n\n## Project Knowledge\n\nA key benefit of projects is the ability to provide context for your chats with Claude. You can upload relevant documents, text, code, or other files to a project's knowledge base, which Claude will use to better understand the context and background for your individual chats within that project.\n\nIn addition, you can define project instructions for each project to further tailor Claude's responses. For example, instructing Claude to use a more formal tone or answer questions from the perspective of a specific role or industry.\n\n## Enhanced project knowledge with RAG\n\nEnhanced project knowledge with RAG is only available to users with paid Claude plans (Pro, Max, Team, or Enterprise).\n\nWhen using a paid plan, your projects automatically scale to handle large amounts of content through Retrieval Augmented Generation (RAG). When your project knowledge approaches context limits, Claude seamlessly enables RAG mode to expand capacity by up to 10x while maintaining response quality.\n\nFor more information on leveraging expanded project knowledge capacity, see [Retrieval Augmented Generation (RAG) for Projects](https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects).\n\n## Collaboration and Sharing (Team and Enterprise plans only)\n\nFor users on Claude for Work (Team and Enterprise) plans, projects can be shared with other members of your organization, enabling powerful collaboration and knowledge sharing capabilities. The sharing system includes:\n\n**Permission levels:**\n\n* **Can use:** Members can see project contents, knowledge, and instructions, and chat within the project, but cannot edit it.\n* **Can edit:** Members can modify project instructions and knowledge, add/remove members, update member settings, and actively contribute to the project.\n* **Project creators can:**\n\n  + Share to specific members instead of making a project fully private or public to the entire organization.\n  + Make a previously-created private project visible to the whole organization.\n\n**Sharing options:**\n\n* **Individual sharing:** Share projects with specific team members by email.\n* **Bulk sharing:** Add multiple users at once using email lists.\n* **Organization-wide sharing:** Make projects available to everyone in your organization either when creating the project or afterward.\n\n  + **Note:** If an Owner or Primary Owner disables public projects, organization-wide sharing will be disabled both when creating the project and afterward.\n\n**Collaboration features:**\n\n* **Shared with me tab:** Easily find projects that others have shared with you.\n* **Email notifications:** Get notified when someone shares a project with you.\n* **Access management:** Project creators can modify permissions or remove access as needed.\n\nMultiple members can contribute documents, create chats, and work together within the same project environment, making projects ideal for team collaboration.\n\nFor more information on getting started with projects, see [How can I create and manage projects?](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects)\n\nFor more information on private projects and visibility settings on Team and Enterprise plans, see [Project visibility and sharing](https://support.claude.com/en/articles/9519189-project-visibility-and-sharing).\n\n---\n\nRelated Articles\n\n[How large is the context window on paid Claude plans?](https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans)[How can I create and manage projects?](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects)[Usage limit best practices](https://support.claude.com/en/articles/9797557-usage-limit-best-practices)[Retrieval augmented generation (RAG) for projects](https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects)[Organize your tasks with projects in Claude Cowork](https://support.claude.com/en/articles/14116274-organize-your-tasks-with-projects-in-claude-cowork)\n\nDid this answer your question?\n\n😞😐😃\n\nTable of contents\n\n[![Claude Help Center](https://downloads.intercomcdn.com/i/o/487548/17213f6a445c8e6e874b1f4b/fad85208982e639d11b9108df895a293.png)](https://support.claude.com/en/)\n\n* [Product](https://www.anthropic.com/product)\n* [Research](https://www.anthropic.com/research)\n* [Company](https://www.anthropic.com/company)\n* [News](https://www.anthropic.com/news)\n* [Careers](https://www.anthropic.com/careers)\n\n* [Terms of Service - Consumer](https://www.anthropic.com/terms)\n* [Terms of Service - Commercial](https://www.anthropic.com/legal/commercial-terms)\n* [Privacy Policy](https://www.anthropic.com/privacy)\n* [Usage Policy](https://www.anthropic.com/aup)\n* [Responsible Disclosure Policy](https://www.anthropic.com/responsible-disclosure-policy)\n* [Compliance](https://trust.anthropic.com/)",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://support.claude.com/en/articles/9517075-what-are-projects"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: What are projects? | Claude Help Center",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "What are projects? | Claude Help Center",
      "subtitles": null,
      "url": "https://support.claude.com/en/articles/9517075-what-are-projects",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
      "source": "claude"
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
  "start_timestamp": "2026-04-12T06:17:21.057061Z",
  "stop_timestamp": "2026-04-12T06:17:21.057061Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01WXxfx1VvNjBQuT8MVt4E31",
  "name": "web_fetch",
  "input": {
    "url": "https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects"
  },
  "message": "Fetching: https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects",
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
  "tool_use_id": "toolu_01WXxfx1VvNjBQuT8MVt4E31",
  "name": "web_fetch",
  "content": [
    {
      "type": "knowledge",
      "title": "Retrieval augmented generation (RAG) for projects | Claude Help Center",
      "url": "https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "claude"
      },
      "is_missing": false,
      "text": "Retrieval augmented generation (RAG) for projects | Claude Help Center\n\n[Skip to main content](#main-content)\n\n[![Claude Help Center](https://downloads.intercomcdn.com/i/o/lupk8zyo/787776/ade321b9d8ff06050cb06ac0049d/d7ef4b66df4ff3851b5de741185c97ab.png)](https://support.claude.com/en/)\n\n[API Docs](https://docs.claude.com/en/docs/intro)[Release Notes](https://support.claude.com/en/articles/12138966-release-notes)[How to Get Support](https://support.claude.com/en/articles/9015913-how-to-get-support)\n\nEnglishFrançaisDeutschBahasa IndonesiaItaliano日本語한국어PortuguêsPусский简体中文Español繁體中文\n\nEnglish\n\n[API Docs](https://docs.claude.com/en/docs/intro)[Release Notes](https://support.claude.com/en/articles/12138966-release-notes)[How to Get Support](https://support.claude.com/en/articles/9015913-how-to-get-support)\n\nEnglishFrançaisDeutschBahasa IndonesiaItaliano日本語한국어PortuguêsPусский简体中文Español繁體中文\n\nEnglish\n\nSearch for articles...\n\n1. [All Collections](https://support.claude.com/en/)\n2. [Claude](https://support.claude.com/en/collections/4078531-claude)\n3. [Features and capabilities](https://support.claude.com/en/collections/18031719-features-and-capabilities)\n4. Retrieval augmented generation (RAG) for projects\n\n# Retrieval augmented generation (RAG) for projects\n\nUpdated over a week ago\n\nTable of contents\n\nRAG for projects is available for all Claude plans (free, Pro, Max, Team, and Enterprise).\n\nProjects can now handle much more content without running into limits, giving Claude better context to help you. As you add more files and information to your projects, Claude automatically switches to a faster mode (powered by RAG) that keeps response times quick while maintaining quality responses.\n\n## What is RAG for projects?\n\nRAG or retrieval augmented generation is a technology that allows your projects to store and access significantly more knowledge than before. When your project knowledge approaches the context window limit, Claude will automatically enable RAG mode to expand your project's capacity by up to 10x while maintaining quality responses.\n\nPreviously, projects had a knowledge capacity limit based on the **[context window](https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans)**. Once you reached this threshold, it wasn't possible to add more content. With RAG, you can continue adding knowledge beyond these limits while maintaining full functionality.\n\n## How RAG works\n\nWhen RAG is enabled for your project, Claude uses a **project knowledge search tool** to retrieve relevant information from your uploaded documents. Instead of loading all project content into memory at once, Claude intelligently searches and retrieves only the most relevant information needed to answer your questions.\n\nThis approach allows for:\n\n* **Enhanced capacity**: Store up to 10x more content in your projects.\n* **Maintained quality**: Response accuracy remains consistent with in-context processing.\n* **Faster responses**: Optimized retrieval keeps response times quick.\n* **Seamless transition**: Automatic activation when needed, no setup required.\n\n## When RAG activates\n\nRAG automatically activates when your project approaches or exceeds the context window limits. You'll see a visual indicator showing that your project is RAG-enabled.\n\nIf your project knowledge later drops below the context window threshold, Claude can automatically convert back to context-based processing.\n\n## Using projects with RAG\n\nWorking with RAG-enabled projects feels similar to working with regular projects. You can:\n\n* Upload documents, images, and other files as usual\n* Ask questions about your project knowledge\n* Reference specific documents or information\n* Add and remove content at any time\n\nThe main difference is that you'll see Claude using a **project knowledge search tool** when it needs to find relevant information from your uploaded content.\n\n## Best practices for RAG projects\n\nTo get the most out of your RAG-enabled projects:\n\n### Upload comprehensive content\n\nAdd all relevant documents and files to your project upfront. The more context Claude has access to, the better it can assist you.\n\n### Use clear, descriptive filenames\n\nWell-named files help Claude understand and retrieve the right information more effectively.\n\n### Organize related content together\n\nGroup related documents in the same project to enable Claude to draw connections between different sources.\n\n### Reference specific documents\n\nWhen asking questions, you can reference specific documents by name to help Claude focus its search.\n\n---\n\n## Frequently asked questions\n\n### Will having RAG enabled on my project affect response quality?\n\nNo. RAG maintains consistent response quality as in-context processing while enabling larger project capacity.\n\n### Do I need to do anything to enable RAG?\n\nNo, RAG activates automatically when needed. No setup or configuration is required.\n\n### Can I control when RAG is used?\n\nRAG activation is handled automatically based on the size of your project knowledge. When possible, projects will use in-context processing for optimal performance.\n\n### Will my existing projects work with RAG?\n\nYes. All existing projects will automatically benefit from RAG when the project knowledge exceeds context limits.\n\n### Does RAG work with all Claude tools?\n\nYes. RAG works with all Claude features, including web search, extended thinking, and Research.\n\n---\n\nRelated Articles\n\n[How large is the context window on paid Claude plans?](https://support.claude.com/en/articles/8606394-how-large-is-the-context-window-on-paid-claude-plans)[What are projects?](https://support.claude.com/en/articles/9517075-what-are-projects)[How can I create and manage projects?](https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects)[Usage limit best practices](https://support.claude.com/en/articles/9797557-usage-limit-best-practices)[Use Google Workspace connectors](https://support.claude.com/en/articles/10166901-use-google-workspace-connectors)\n\nDid this answer your question?\n\n😞😐😃\n\nTable of contents\n\n[![Claude Help Center](https://downloads.intercomcdn.com/i/o/487548/17213f6a445c8e6e874b1f4b/fad85208982e639d11b9108df895a293.png)](https://support.claude.com/en/)\n\n* [Product](https://www.anthropic.com/product)\n* [Research](https://www.anthropic.com/research)\n* [Company](https://www.anthropic.com/company)\n* [News](https://www.anthropic.com/news)\n* [Careers](https://www.anthropic.com/careers)\n\n* [Terms of Service - Consumer](https://www.anthropic.com/terms)\n* [Terms of Service - Commercial](https://www.anthropic.com/legal/commercial-terms)\n* [Privacy Policy](https://www.anthropic.com/privacy)\n* [Usage Policy](https://www.anthropic.com/aup)\n* [Responsible Disclosure Policy](https://www.anthropic.com/responsible-disclosure-policy)\n* [Compliance](https://trust.anthropic.com/)",
      "is_citable": true,
      "prompt_context_metadata": {
        "content_type": "html",
        "mime_type": "text/html; charset=utf-8",
        "destination_url": "https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects"
      },
      "links": null
    }
  ],
  "is_error": false,
  "structured_content": null,
  "meta": null,
  "message": "Fetched: Retrieval augmented generation (RAG) for projects | Claude Help Center",
  "integration_name": "Web Fetch",
  "mcp_server_url": null,
  "integration_icon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
  "icon_name": "globe",
  "display_content": {
    "type": "rich_link",
    "link": {
      "title": "Retrieval augmented generation (RAG) for projects | Claude Help Center",
      "subtitles": null,
      "url": "https://support.claude.com/en/articles/11473015-retrieval-augmented-generation-rag-for-projects",
      "resource_type": null,
      "icon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
      "source": "claude"
    },
    "is_trusted": false
  },
  "hidden_in_chat": null
}
```

</details>

<details>
<summary>Thinking (verbatim)</summary>

Now I have clear information. Let me address both questions:

1. **Context loading from files**: The answer depends on whether RAG is active or not.
   - Without RAG (project knowledge below context window limit): ALL files are loaded into the context window for every chat.
   - With RAG (project knowledge exceeds context window): Claude uses a "project knowledge search tool" to retrieve only relevant chunks. You can actually SEE this tool being used.
   - Importantly: "RAG for projects is available for all Claude plans (free, Pro, Max, Team, and Enterprise)" - this contradicts what I said earlier. Let me re-read... "RAG for projects is available for all Claude plans" - so it IS available to free users too now. 

I'm seeing conflicting information between sources—the earlier search result claimed RAG was only for paid plans, but the support article clearly states it's available across all plans now, so I'll trust the more recent documentation.

2. **Renaming conversation titles**: I need to be honest here. I don't have a tool to rename conversations. Claude.ai auto-generates titles. Users can manually rename them. But I (Claude in the chat interface) cannot programmatically rename conversation titles - I don't have that capability as a tool. I should be clear about this distinction: I can *suggest* a better title, but the user has to rename it manually.

Let me note: the RAG update says it's for ALL plans

</details>

Good questions — both have precise answers worth getting right.

---

**Q1: Do project files load into context all at once, or only when searched?**

It depends on two modes, and the switch is automatic. The Anthropic support docs (fetched above) explain it clearly:

**Below the context window threshold → everything is loaded in full.** All your project knowledge is injected into the context of every chat, unconditionally. No search happens — Claude simply "sees" all of it.

**At/above the context window threshold → RAG activates.** When RAG is enabled for your project, Claude uses a **project knowledge search tool** to retrieve relevant information from your uploaded documents. Instead of loading all project content into memory at once, Claude intelligently searches and retrieves only the most relevant information needed to answer your questions.

RAG automatically activates when your project approaches or exceeds the context window limits. You'll see a visual indicator showing that your project is RAG-enabled. You'll also visibly see Claude invoke a "project knowledge search tool" step before answering — it's not hidden.

One correction to yesterday's widget: RAG for projects is available for all Claude plans (free, Pro, Max, Team, and Enterprise) — the earlier documentation I cited was outdated on this point. The trigger is knowledge volume, not plan tier.

**Practical implication for your use:** If your project stays under the 200K token limit (small to medium paper set), everything is always in context — reliable but more expensive per token. Once you exceed the limit, RAG kicks in and retrieves selectively. The tradeoff is that RAG may occasionally miss a relevant passage if your query doesn't surface it. When asking questions, you can reference specific documents by name to help Claude focus its search — a good habit when RAG is active.

---

**Q2: Can I rename conversation titles inside a project?**

**Short answer: not by me directly.** I have no tool to rename your conversation sessions — I cannot touch the UI or metadata outside of the chat content itself.

**What Claude.ai does automatically:** the interface auto-generates a title from the first exchange of each conversation. You can manually rename any conversation by hovering over it in the sidebar and clicking the edit/pencil icon.

**What I *can* do:** if you paste a conversation title (or just ask at the end of a session), I can suggest a concise, descriptive title you can then copy-paste in yourself. That's the practical workaround for now — it requires one manual step on your end, but takes only a few seconds.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d8056-3ea8-7d28-ad59-72514217a765",
  "updated_at": "2026-04-12T06:17:41.891916Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d8056-3ea8-78ab-a792-c48fff5b4887"
}
```

</details>
