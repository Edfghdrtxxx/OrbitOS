# Detecting Claude's intelligence decline on social media

## Export metadata (verbatim)

```json
{
  "uuid": "cccd9371-8298-4a7c-b463-b0befda49f8c",
  "name": "Detecting Claude's intelligence decline on social media",
  "summary": "**Conversation Overview**\n\nThe person investigated social media indicators of Claude's intelligence weakening, then followed up with a specific question about output speed slowdowns they personally observed in Claude Code. Claude conducted web searches to surface what users and reporters have documented on both topics.\n\nOn the first topic, Claude compiled user-reported behavioral indicators from social media and tech reporting, including premature task stopping, shallow reasoning, context/memory loss, repetition, and faster credit consumption. Claude distinguished between verified and unverified claims, flagging the viral \"67% dumber\" figure as a single unverified social post, while noting more credible third-party benchmark regressions. Claude also explained Anthropic's own April 2026 postmortem, which attributed degradation to three software-layer bugs rather than model weight changes, and noted a UI discrepancy where reasoning effort displayed as \"high\" while \"medium\" actually ran.\n\nOn the speed question, the person reported that their Claude Code sessions felt noticeably slower than before and asked whether other users shared this experience and whether slowness signals intelligence decline. Claude explained that both observations are documented: widespread user complaints exist, with causes traced to infrastructure incidents, peak-hour session limit adjustments, and Anthropic's comparatively low baseline tokens-per-second among major providers. Claude clarified that slowness is not a reliable intelligence indicator since it can reflect either deeper reasoning or context bloat, and that the March 2026 quality-degradation episode was actually correlated with faster responses. The most probable cause of progressive in-session slowdowns was identified as context accumulation, with a concrete diagnostic test suggested: run `/clear` to start a fresh session and compare speed, or use `--verbose` to isolate tool-call latency if slowness appears from the first message.",
  "created_at": "2026-07-09T03:03:43.477917Z",
  "updated_at": "2026-07-09T03:21:28.908231Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-07-09T03:03:44.815547Z

Help me investigate through social media that what's the indicator when the intelligence of Claude is weakened.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f44d4-c597-7772-b3ad-02ce6502d86a",
  "updated_at": "2026-07-09T03:03:44.815547Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-07-09T03:04:08.254195Z

I can look into this, but let me flag what I found and what I can't verify.

Let me search for what people are actually saying.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-09T03:03:45.904306Z",
  "stop_timestamp": "2026-07-09T03:03:46.310084Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01T6Zctge4e7SF3yRMvkR2is",
  "name": "web_search",
  "input": {
    "query": "Claude model feels dumber weaker signs users complain"
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
  "start_timestamp": "2026-07-09T03:03:46.872109Z",
  "stop_timestamp": "2026-07-09T03:03:46.872126Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_01T6Zctge4e7SF3yRMvkR2is",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Is Anthropic 'nerfing' Claude? Users increasingly report performance degradation as leaders push back | VentureBeat",
      "url": "https://venturebeat.com/technology/is-anthropic-nerfing-claude-users-increasingly-report-performance",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "venturebeat.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=venturebeat.com",
        "site_name": "VentureBeat"
      },
      "is_missing": false,
      "text": "The complaint argued that, starting ... it, including more premature stopping, more “simplest fix” behavior, more reasoning loops, and a measurable shift from research-first behavior to edit-first behavior....\n\nPublic documentation also supports the fact that effort defaults have been in motion. Claude Code’s changelog says that on April 7, Anthropic changed the default effort level from medium to high for API-key users as well as Bedrock, Vertex, Foundry, Team and Enterprise users. That suggests Anthropic has actively been tuning these settings across different segments, which could plausibly affect user perceptions even if the core model weights are unchanged. Shihipar has also directly denied the broader demand-management accusation. In a reply on X posted April 11, he said Anthropic does not “degrade” its models to better serve demand. He also said that changes to thinking summaries affected how some users were measuring Claude’s “thinking,” and that the company had not found evidence backing the strongest qualitative claims now spreading online.\n\nA growing number of developers and AI power users are taking to social media to accuse Anthropic of degrading the performance of Claude Opus 4.6 and Claude Code — intentionally or as an outcome of compute limits — arguing that the company’s flagship coding model feels less capable, less reliable and more wasteful with tokens than it did just weeks ago. The complaints have spread quickly on Github, X and Reddit over the past several weeks, with several high-reach posts alleging that Claude has become worse at sustained reasoning, more likely to abandon tasks midway through, and more prone to hallucinations or contradictions. Some users have framed the issue as “AI shrinkflation” — the idea that customers are paying the same price for a weaker product. Others have gone further, suggesting Anthropic may be throttling or otherwise tuning Claude downward during periods of heavy demand.\n\nCritics like Laurenzo argue that Claude’s behavior in demanding coding workflows has plainly worsened and point to logs and usage patterns as evidence. Anthropic, by contrast, is not saying nothing changed. It is saying the biggest recent changes were product and interface choices that affect what users see and how much effort the system expends by default, not a secret downgrade of the underlying model. That distinction may be technically important, but for power users who feel the product is delivering worse results, it is not necessarily a satisfying one. External coverage from TechRadar and PC Gamer further amplified Laurenzo's post and larger wave of agreement from some power users. Another viral post on X from developer Om Patel on April 7 made the same argument in even more direct terms, claiming that someone had “actually measured” how much “dumber” Claude had gotten and summarizing the result as a 67% drop.\n\nThe complaint argued that, starting in February, Claude’s estimated reasoning depth fell sharply while signs of poorer performance rose alongside it, including more premature stopping, more “simplest fix” behavior, more reasoning loops, and a measurable shift from research-first behavior to edit-first behavior. The post’s broader point was that for advanced engineering workflows, extended reasoning is not a luxury but part of what makes the model usable in the first place. That GitHub thread then escaped into the broader social media conversation, with X users including @Hesamation, who posted screenshots of Laurenzo's GitHub post to X on April 11, turning it into an even more viral talking point. That amplification mattered because it gave the wider “Claude is getting worse” narrative something more concrete than anecdotal frustration: a long, data-heavy post from a senior AI leader at a major chip company arguing that the regression was visible in logs, tool-use patterns and user cor",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 13, 2026",
        "search_provider": "anthropic",
        "url": "https://venturebeat.com/technology/is-anthropic-nerfing-claude-users-increasingly-report-performance"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Why Everyone Thought Claude Was Getting Dumber—and What Really Happened - Talk Android",
      "url": "https://www.talkandroid.com/524449-why-everyone-thought-claude-was-getting-dumber-and-what-really-happened/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "talkandroid.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=talkandroid.com",
        "site_name": "Talk Android"
      },
      "is_missing": false,
      "text": "A third issue landed on April 16, when new system instructions meant to reduce verbosity unexpectedly cut coding task quality by about 3 percent. Together, these mishaps heightened the sense that Claude was slipping. The reduction in reasoning made solutions feel “lazier,” and the context loss disrupted workflow. For many, the problems bred mistrust: some users speculated Anthropic was scaling back quality to manage heavy demand, a theory reportedly fueled by lack of transparency and the staggered nature of the glitches. Independent analysts corroborated users’ observations. Notably, Stella Laurenzo of AMD documented a clear decline in Claude’s reasoning depth, and tests by third-party evaluators showed the model falling behind on established AI benchmarks. Because different bugs affected users at different times, the situation was confusing and hard to pin down at first.\n\nWhy Everyone Thought Claude Was Getting Dumber—and What Really Happened © Patamaporn Umnahanant – iStock · Editorial Note: Talk Android may contain affiliate links on some articles. If you make a purchase through these links, we will earn a commission at no extra cost to you. Learn more. For weeks, Anthropic tool users sensed something was off. Reports flew across GitHub, X (formerly Twitter), and Reddit: performance had dropped, responses were more repetitive, and usage credits disappeared faster than usual. Developers summed it up with a new term—”AI shrinkflation”—and began to suspect that Claude, Anthropic’s flagship AI assistant, just wasn’t as sharp as before. The signs weren’t imagined. Numerous posts described Claude’s decreased ability to reason through complex tasks, a tendency to repeat itself, and a sudden spike in how quickly it consumed usage credits.\n\nThe problem was significant enough to unsettle much of the developer community, sparking theories and debate. Anthropic investigated and, after an internal review, published a detailed report. Their finding: the root cause wasn’t a downgrade to the core AI model itself, but issues within the surrounding software infrastructure, or what Anthropic referred to as the “software layer.” · According to Anthropic’s report, it was a domino effect of errors that led to the headaches. The first domino fell on March 4, when Anthropic reduced Claude’s default level of reasoning effort from “high” to “medium” in order to cut response times. The second problem struck March 26, with a major bug introduced during a cache optimization update. Instead of clearing context after an hour of inactivity, the bug wiped short-term memory with every new user interaction.\n\nA third issue landed on April 16, when new system instructions meant to reduce verbosity unexpectedly cut coding task quality by about 3 percent. Together, these mishaps heightened the sense that Claude was slipping. The reduction in reasoning made solutions feel “lazier,” and the context loss disrupted workflow. For many, the problems bred mistrust: some users speculated Anthropic was scaling back quality to manage heavy demand, a theory reportedly fueled by lack of transparency and the staggered nature of the glitches. Independent analysts corroborated users’ observations. Notably, Stella Laurenzo of AMD documented a clear decline in Claude’s reasoning depth, and tests by third-party evaluators showed the model falling behind on established AI benchmarks. Because different bugs affected users at different times, the situation was confusing and hard to pin down at first.\n\nIn response, Anthropic put a recovery plan in motion. The company immediately reset usage limits for all subscribers to compensate for the disrupted service and wasted credits. More importantly, Anthropic began overhauling its quality control. They expanded internal “dogfooding,” requiring more employees to use the exact public version of Claude, and mandated that every system prompt change pass broader, model-specific test suites before release. Anthropic also pledged more openness. The company launched a dedicated X account, @ClaudeDevs, promising to communicate about product updates and technical issues more transparently. This episode highlights a harsh reality: top-tier AI relies not just on its underlying model but also on a fragile web of software, caches, and system configurations. When something in that web fails, even advanced systems can quickly become unpredictable or awkward to use.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "May 3, 2026",
        "search_provider": "anthropic",
        "url": "https://www.talkandroid.com/524449-why-everyone-thought-claude-was-getting-dumber-and-what-really-happened/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Users claim Claude AI is getting dumber, Anthropic says it's not",
      "url": "https://the-decoder.com/users-claim-claude-ai-is-getting-dumber-anthropic-says-its-not/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "the-decoder.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=the-decoder.com",
        "site_name": "The Decoder"
      },
      "is_missing": false,
      "text": "Users are reporting that Anthropic&#x27;s Claude chatbot has become less capable recently, echoing similar complaints about ChatGPT last year. Anthropic says it hasn&#x27;t made any changes, highlighting the challenges of maintaining consistent AI performance.\n\nUsers are reporting that Anthropic's Claude chatbot has become less capable recently, echoing similar complaints about ChatGPT last year. Anthropic says it hasn't made any changes, highlighting the challenges of maintaining consistent AI performance. A Reddit post claiming \"Claude absolutely got dumbed down recently\" gained traction, with many users agreeing the chatbot's abilities have declined. The original poster said Claude now forgets tasks quickly and struggles with basic coding, prompting them to cancel their subscription. Something is going on in the Web UI and I'm sick of being gaslit and told that it's not. Someone from Anthropic needs to investigate this because too many people are agreeing with me in the comments. ... Anthropic's Alex Albert responded, stating their investigation \"does not show any widespread issues\" and confirming they haven't altered the Claude 3.5 Sonnet model or inference pipeline.\n\nThis pattern of users perceiving AI decline followed by company denials has occurred before, notably with ChatGPT in late 2023. Complaints about GPT-4 and GPT-4 Turbo persist today, even for the latest GPT-4o model. Several factors may explain these perceived declines. Users often become accustomed to AI capabilities and develop unrealistic expectations over time. When ChatGPT launched in November 2022 using GPT-3.5, it initially impressed many. Now, GPT-3.5 appears outdated compared to GPT-4 and similar models. Natural variability in AI outputs, temporary computing resource constraints, and occasional processing errors also play a role. In our daily use, even reliable prompts sometimes produce subpar results, though regenerating the response usually resolves the issue. These factors can contribute to the perception of decreased performance even when no significant changes have been made to the underlying AI models.\n\nResearchers let Claude Code discover AI scaling algorithms that humans probably wouldn't have designed · Follow The Decoder for AI news, background stories and expert analyses.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "August 28, 2024",
        "search_provider": "anthropic",
        "url": "https://the-decoder.com/users-claim-claude-ai-is-getting-dumber-anthropic-says-its-not/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Everyone Thought Claude Got Dumber. They Were Right (But Not Why You Think) | by The Latency Gambler | Apr, 2026 | Medium",
      "url": "https://medium.com/@kanishks772/everyone-thought-claude-got-dumber-they-were-right-but-not-why-you-think-f6c77021870b",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "medium.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=medium.com",
        "site_name": "Medium"
      },
      "is_missing": false,
      "text": "For about six weeks, developers using Claude Code noticed something felt off. Responses were shorter. Reasoning felt shallow. Code quality dipped in ways that were hard to pin down but impossible to ignore. The complaints were real. The cause was not what anyone expected. Anthropic published a postmortem. Three bugs. None of them in the model itself. ... The model never changed. The system wrapped around it did. User Request ↓ [System Prompt Layer] ← Bug #3 lived here ↓ [Caching Layer] ← Bug #2 lived here ↓ [Reasoning Effort Config] ← Bug #1 lived here ↓ Claude Model (unchanged) ↓ Response · Three separate layers. Three separate failures. All compounding silently. Default reasoning effort was quietly dropped from high to medium. The UI still displayed &quot;high.&quot; Users had no idea they were getting a degraded setting. What the UI showed: reasoning_effort = HIGH ✓ What actually ran: reasoning_effort = MEDIUM ✗ Gap: invisible to the user, invisible in logs ...\n\nFor about six weeks, developers using Claude Code noticed something felt off. Responses were shorter. Reasoning felt shallow. Code quality…\n\nFor about six weeks, developers using Claude Code noticed something felt off. Responses were shorter. Reasoning felt shallow. Code quality dipped in ways that were hard to pin down but impossible to ignore. The complaints were real. The cause was not what anyone expected. Anthropic published a postmortem. Three bugs. None of them in the model itself. ... The model never changed. The system wrapped around it did. User Request ↓ [System Prompt Layer] ← Bug #3 lived here ↓ [Caching Layer] ← Bug #2 lived here ↓ [Reasoning Effort Config] ← Bug #1 lived here ↓ Claude Model (unchanged) ↓ Response · Three separate layers. Three separate failures. All compounding silently. Default reasoning effort was quietly dropped from high to medium. The UI still displayed \"high.\" Users had no idea they were getting a degraded setting. What the UI showed: reasoning_effort = HIGH ✓ What actually ran: reasoning_effort = MEDIUM ✗ Gap: invisible to the user, invisible in logs ...",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 28, 2026",
        "search_provider": "anthropic",
        "url": "https://medium.com/@kanishks772/everyone-thought-claude-got-dumber-they-were-right-but-not-why-you-think-f6c77021870b"
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

Here's what social media and reporting actually document as the observable indicators people use to judge that Claude has "weakened." I'm separating what's attributed to sources from what's speculation.

**Behavioral indicators users report (from social media aggregated in reporting)**

According to VentureBeat's reporting on GitHub, X, and Reddit complaints, the recurring signals users cite are more premature stopping, more "simplest fix" behavior, more reasoning loops, and a measurable shift from research-first behavior to edit-first behavior. More broadly, high-reach posts alleged that Claude had become worse at sustained reasoning, more likely to abandon tasks midway through, and more prone to hallucinations or contradictions.

Talk Android's summary lists the user-observable symptoms as decreased ability to reason through complex tasks, a tendency to repeat itself, and a sudden spike in how quickly it consumed usage credits. Faster credit burn ("AI shrinkflation") was itself treated by users as an indicator.

In the earlier 2024 wave, the reported tells were that Claude now forgets tasks quickly and struggles with basic coding.

**A specific quantified claim (attribution matters here)**

One viral claim you'll encounter: developer Om Patel posted on April 7 that someone had "actually measured" how much "dumber" Claude had gotten and summarized the result as a 67% drop. Treat this as an unverified social-media assertion — the "67%" traces to a single post, not a controlled study.

**The one piece of third-party corroboration**

The most credible external signal, versus pure anecdote, came from Stella Laurenzo of AMD, who documented a decline in Claude's reasoning depth, and third-party evaluators whose tests showed the model falling behind on established benchmarks. This is the closest thing to an objective indicator in the record.

**What actually caused the April 2026 episode (Anthropic's postmortem)**

This is the important corrective. Anthropic's own investigation attributed the degradation not to the model but to the software layer — three staggered bugs: on March 4, default reasoning effort was reduced from "high" to "medium" to cut response times; on March 26, a cache-optimization bug wiped short-term memory on every new interaction instead of after an hour of inactivity; and on April 16, new verbosity-reduction instructions cut coding task quality by about 3 percent. A notable detail: the UI still displayed "high" reasoning effort while "medium" actually ran — a gap invisible to the user and in logs.

---

**Facts vs. assumptions, plainly:**

- *Fact (attributed):* The user-reported indicators are premature stopping, task abandonment, repetition, shallow reasoning, memory/context loss, and faster credit consumption.
- *Fact (Anthropic postmortem):* The April 2026 degradation was traced to three software-layer bugs, not model weight changes.
- *Assumption/unverified:* The "67% dumber" figure and claims of deliberate demand-throttling — Anthropic denied the throttling accusation, and the postmortem points to bugs instead.

**A caveat on your framing:** these are *lagging, subjective* indicators. Because output is naturally variable, individual "it feels dumber" impressions are unreliable on their own — the 2024 episode was largely perception with no confirmed change, while the 2026 one was real but had a mundane infrastructure cause. The reliable signal isn't social chatter; it's reproducible benchmark regressions plus an official postmortem.

One thing I can't do reliably: I can't independently pull and verify live individual social-media posts here beyond what's captured in this reporting, so I'd caution against treating any single viral post as evidence. Want me to search Anthropic's own status/postmortem page directly for the primary-source version of the April 2026 report?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f44d4-c597-7b9c-96c2-cc60d2c6a4a8",
  "updated_at": "2026-07-09T03:04:08.254195Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f44d4-c597-7772-b3ad-02ce6502d86a"
}
```

</details>

### 3. human — 2026-07-09T03:21:06.011994Z

Will be the speed of output slower? I can observe that my claude code is much slower than before.

1. Do other users have this feeling?
2. Is it a symptom of intelligence decline?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f44e4-a466-78ed-93d7-6aa67e211f58",
  "updated_at": "2026-07-09T03:21:06.011994Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f44d4-c597-7b9c-96c2-cc60d2c6a4a8"
}
```

</details>

### 4. assistant — 2026-07-09T03:21:28.908231Z

Let me search for what other users are reporting about Claude Code speed specifically.

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-07-09T03:21:06.429295Z",
  "stop_timestamp": "2026-07-09T03:21:06.848346Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_018BkiBNqThtwDTpdMrsyZbc",
  "name": "web_search",
  "input": {
    "query": "Claude Code slower output speed latency users 2026"
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
  "start_timestamp": "2026-07-09T03:21:07.392684Z",
  "stop_timestamp": "2026-07-09T03:21:07.392702Z",
  "flags": null,
  "type": "tool_result",
  "tool_use_id": "toolu_018BkiBNqThtwDTpdMrsyZbc",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "Why Is Claude Code Slow? Causes and Fixes (2026) | aakashx",
      "url": "https://www.aakashx.com/blog/claude-code-slow-causes-fixes/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "aakashx.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=aakashx.com",
        "site_name": "aakashx"
      },
      "is_missing": false,
      "text": "Anthropic said it changed Claude ... 4.6 and Opus 4.6. The reason was latency: some users on high effort were seeing very long thinking times, enough that the UI could appear frozen....\n\nAnthropic said it changed Claude Code's default reasoning effort from high to medium on March 4, 2026 for Sonnet 4.6 and Opus 4.6. The reason was latency: some users on high effort were seeing very long thinking times, enough that the UI could appear frozen. Anthropic later called this the wrong tradeoff and reverted it on April 7. In Claude Code, reasoning effort controls the tradeoff between capability, latency, and token usage. Anthropic's model configuration docs say low is for short, scoped, latency-sensitive tasks; medium can reduce token usage while trading off some intelligence; high is a minimum for intelligence-sensitive work; and xhigh is recommended for most coding and agentic tasks on Opus 4.7. For developers, this means a \"slow\" experience can have two opposite causes: The model is thinking more, producing better output but taking longer. The model is thinking less, responding faster but producing weaker code. If the complaint is \"Claude is slower,\" check latency.\n\nBy Aakash Ahuja — Claude Code feeling slow or lower-quality lately? What Anthropic's postmortem revealed, how to tell which problem you have, and the fixes to try first.\n\nIf Claude Code has felt slow or degraded recently, you are not imagining it — and the cause is not a single bug. Claude Code did not simply \"get worse\" in one clean way. Recent developer complaints mixed together several different problems: lower coding quality, slower-feeling sessions, forgetfulness, repeated tool choices, faster quota drain, actual service errors, and local context bloat. The most important official explanation is Anthropic's April 23, 2026 engineering postmortem. Anthropic said recent Claude Code quality issues came from three separate product-layer changes affecting Claude Code, Claude Agent SDK, and Claude Cowork, while the API and inference layer were not impacted. Anthropic said all three issues were resolved by April 20 in version 2.1.116. This article turns that postmortem and the official Claude Code docs into a developer troubleshooting guide.\n\nHigh effort and stronger models are not always the right default for every turn. For small edits, they can be slower and more expensive than needed. ... Simple task: lower effort. Hard reasoning task: higher effort. One hard turn: ultrathink. Long-running task: monitor context and usage. ... If Claude Code search is weak or slow on WSL, the issue may be filesystem placement, not model quality. Anthropic specifically recommends moving the project to the Linux filesystem under /home/ rather than working across /mnt/c/ when WSL filesystem penalties affect search. ... Claude Code can be slow because the model is using deeper reasoning, the session context is large, tool calls are expensive, the service is under load, or your local environment is slowing search and file access. Recent quality complaints were also tied to three Anthropic product-layer changes that were resolved by April 20, 2026.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "1 month ago",
        "search_provider": "anthropic",
        "url": "https://www.aakashx.com/blog/claude-code-slow-causes-fixes/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Anthropic explains Claude Code’s recent performance decline after weeks of user backlash | Fortune",
      "url": "https://fortune.com/2026/04/24/anthropic-engineering-missteps-claude-code-performance-decline-user-backlash/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "fortune.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=fortune.com",
        "site_name": "Fortune"
      },
      "is_missing": false,
      "text": "In a post published to its engineering blog on Thursday, Anthropic said it had traced the problems to three distinct changes. The first, rolled out on March 4, reduced Claude Code’s default reasoning effort from “high” to “medium” to cut latency—a tradeoff the company said in the blog post was the wrong one. The second change, shipped on March 26, contained a bug that caused the model to continuously discard its own reasoning history mid-session, making it appear forgetful and erratic, and draining users’ usage limits faster than expected. The third, introduced on April 16, added a system prompt instruction capping the model’s responses at 25 words between tool calls—a change Anthropic said measurably hurt coding quality before it was reverted four days later. Anthropic noted that all three issues were resolved as of April 20, with the API unaffected throughout.\n\nFollowing widespread complaints about Claude Code’s performance, executives representing the AI lab initially said the performance issues were the result of changes it had made to improve latency and in response to user feedback about token use. It said both changes were communicated via its public changelog—a running list of updates available to users. On Thursday, however, Anthropic went further, publishing a detailed engineering post acknowledging that three separate engineering missteps were behind the performance issue. In an effort to respond to some of the user complaints, the lab also said it would reset usage limits for all subscribers. Anthropic’s newest admission is likely to increase already widespread speculation that the lab may be suffering from a compute strains after use of its products soared in the past few months. Beyond the performance issues with Claude Code, the AI lab has also suffered a series of outages as usage has surged, introduced usage cap limits during p\n\nIn a post published to its engineering blog on Thursday, Anthropic said it had traced the problems to three distinct changes. The first, rolled out on March 4, reduced Claude Code’s default reasoning effort from “high” to “medium” to cut latency—a tradeoff the company said in the blog post was the wrong one. The second change, shipped on March 26, contained a bug that caused the model to continuously discard its own reasoning history mid-session, making it appear forgetful and erratic, and draining users’ usage limits faster than expected. The third, introduced on April 16, added a system prompt instruction capping the model’s responses at 25 words between tool calls—a change Anthropic said measurably hurt coding quality before it was reverted four days later. Anthropic noted that all three issues were resolved as of April 20, with the API unaffected throughout.\n\n© 2026 Fortune Media IP Limited. All Rights Reserved. Use of this site constitutes acceptance of our Terms of Use and Privacy Policy | CA Notice at Collection and Privacy Notice | Do Not Sell/Share My Personal Information FORTUNE is a trademark of Fortune Media IP Limited, registered in the U.S. and other countries. FORTUNE may receive compensation for some links to products and services on this website.\n\nAnthropic, the AI lab valued at $380 billion, has acknowledged that a series of engineering missteps were behind a widely experienced decline in the performance of its Claude Code tool that sparked a user revolt over the past month. The latest admission, which came after weeks in which Anthropic had initially implied in its communications that nothing was wrong and that users were largely to blame for any performance problems and later said some of the changes had been made for users’ benefit, has done little to calm Anthropic’s customers—some of whom say they have already canceled their subscriptions. ... The feeling among some users that Anthropic had been gaslighting them potentially undercuts Anthropic’s attempts to market itself as more transparent and aligned with its users than rival OpenAI. Nor has the admission that there were performance problems done much to quell rampant speculation that the company is running short of computing resources and that Anthropic’s efforts to rat",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 24, 2026",
        "search_provider": "anthropic",
        "url": "https://fortune.com/2026/04/24/anthropic-engineering-missteps-claude-code-performance-decline-user-backlash/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Why Does Claude Code Slow Down Over Time? Latency & Context | aakashx",
      "url": "https://www.aakashx.com/blog/why-claude-code-is-slow/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "aakashx.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=aakashx.com",
        "site_name": "aakashx"
      },
      "is_missing": false,
      "text": "Quick answer: Claude Code slowness has two root causes — too many sequential tool calls (an architecture problem, fixed by better prompts and CLAUDE.md) and a bloated context window (a session hygiene problem, fixed by /compact or /clear).\n\nContext accumulates, gaps cause cache misses, and the session becomes progressively more expensive and slower to respond. A clean session each morning — or each major task switch — is almost always faster. Using the agent as a file browser. Asking \"what does this function do?\" inside a long session makes Claude read and process files it may have already read, re-billing that context into an already heavy transcript. For exploratory questions, open a fresh short session. Letting tool calls run unbounded. Instructions like \"look through the codebase and find everywhere this pattern is used\" can trigger 30+ file reads. If you need that analysis, scope it: \"search only in src/components/ for uses of the useAuth hook.\" Ignoring the --verbose output. Most developers never look at what Claude is actually doing between their prompt and the response. Running --verbose once per session type teaches you where the tool calls are going and where the time is being spent. Switching models for speed w\n\nQuick answer: Claude Code slowness has two root causes — too many sequential tool calls (an architecture problem, fixed by better prompts and CLAUDE.md) and a bloated context window (a session hygiene problem, fixed by /compact or /clear). Switching models helps with cost but only partially with speed. The real gains come from reducing tool call chains and keeping context lean. The short answer: two different problems that feel like one · Why tool call latency is the real culprit, not token processing ... Slow from the first message — the model takes a long time to respond even on simple tasks early in a session · Slow after a while — responses were fast initially but are now grinding, and nothing changed about the task complexity · These have different causes and different fixes. Conflating them leads to wasted effort — switching models when the real problem is context bloat, or clearing the session when the real problem is a vague prompt triggering 25 file reads.\n\nThe instruction \"in src/auth/session.ts, the cookie expiry is hardcoded to 3600 seconds — change it to use the SESSION_TTL env variable\" eliminates the exploration entirely. Claude reads one file and writes one change. Specificity is the single highest-impact speed optimisation for early-session slowness. It costs you 30 extra seconds of thinking time and saves 30–90 seconds of agent time. Tool call latency explains early-session slowness. Context accumulation explains why sessions degrade over time. Every turn in a Claude Code session appends to the transcript: ... This entire transcript is re-sent to the model on every single turn. The model does not maintain a running state — it re-reads the full conversation each time to understand where it is. A turn-5 session might carry 20,000 tokens of context. A turn-35 session after reading several large files and running a build might carry 400,000 tokens.\n\nA CLAUDE.md entry as simple as this eliminates a category of exploratory tool calls: ... This is a speed optimisation, not just a context optimisation. Every session that does not start with exploratory file reads is a faster session. For a comprehensive guide on writing effective CLAUDE.md files, see our guide to designing AI agents. When a session is long but you need continuity — you're mid-feature, you've made architectural decisions Claude should remember — /compact is the right tool. It asks Claude to summarise the full conversation into a short working memory, replacing hundreds of thousands of tokens of transcript with a few thousand tokens of essential context. ... Use /compact when: the session is slow but you genuinely need the model to remember prior decisions. Write your working state to a file before you compact. /compact is lossy by design — it replaces the transcript with a summary, and anything the summary omits is gone.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "May 4, 2026",
        "search_provider": "anthropic",
        "url": "https://www.aakashx.com/blog/why-claude-code-is-slow/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Running Slow? Fixes and What to Do Next - EvoMap Blog",
      "url": "https://evomap.ai/blog/claude-code-running-slow-fixes-next-steps",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "evomap.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=evomap.ai",
        "site_name": "EvoMap"
      },
      "is_missing": false,
      "text": "March 2026 added another layer — Anthropic introduced adjustments to 5-hour session limits specifically during peak hours (weekdays, 5am–11am PT). Heavy agentic workflows during those windows will drain faster than identical work run at night.\n\nThe Anthropic dashboard reads 6% usage for the day, plenty of quota remaining by any reasonable interpretation. And yet you're throttled. The reason: Claude Code rate limits operate as a system of three independent, overlapping constraints. The dashboard percentage reflects only one of them. In addition to the 5-hour rolling windows, Anthropic now enforces weekly rate limits that reset every seven days. These include an overall usage cap plus a separate weekly cap for Opus models. March 2026 added another layer — Anthropic introduced adjustments to 5-hour session limits specifically during peak hours (weekdays, 5am–11am PT). Heavy agentic workflows during those windows will drain faster than identical work run at night. The most immediate lever. Start a new session when you notice response quality degrading or speed dropping — don't try to continue from a bloated context.\n\nEach message in a Claude Code session appends to the accumulated context — conversation history, file contents, tool call outputs. By message 10–15 on a complex project, you may be sending 150k–200k tokens per request. The model is slower, responses drift, and session budgets drain faster than expected. The fix is proactive context management: use /compact before the window saturates, not after. ... Three levers: shorten your CLAUDE.md and skill files (remove outdated and contradictory instructions), reduce tool surface area (scope permissions to what the task actually needs), and break large sessions into discrete smaller runs. Switching to Sonnet via /model for tasks that don't require Opus-level reasoning also reduces token cost significantly. What are the best Claude Code alternatives in 2026? Depends on your constraint. For token efficiency and model flexibility: Aider (BYOK, any provider) or OpenCode (75+ providers).\n\nCan Claude Code fixes be reused across different projects or agents? Not natively. Session fixes live in chat logs or personal notes and don't transfer to the next run. The more interesting engineering question is whether successful adaptive behaviors — specific retry strategies, context patterns, tool scope configurations — can be preserved in a form that other agents can inherit. That's the layer that GEP protocol documentation is addressing: turning successful agent behaviors into cross-session, cross-agent inheritable assets. It's an emerging approach, not a solved problem — but the structural issue it's targeting (session-level amnesia for agent fixes) is a real limitation of how current agent infrastructure works. I'll keep watching how the rate limit situation evolves through 2026 — Anthropic's infrastructure pressure is real, and the constraint tiers seem to be shifting faster than documentation can track.\n\nThe fixes above work as of April 2026. Verify the specifics before building anything critical around them. How to set up MCP in Claude Code for better tool integration and performance · What MCP actually does (and doesn’t do) in modern AI agent stacks · The three-layer agent stack: MCP, CLI, and GEP explained · Claude Code skills deep dive: how they work and how to structure them · How agent hooks shape execution flows and tool-use behavior · Agent Skills vs GEP Assets: What's the Real Difference?Agent skills and GEP assets both help agents acquire capabilities, but they operate at fundamentally different layers — skills are portable knowledge documents, while GEP Genes and Capsules carry validated execution evidence, lifecycle management, and cross-agent inheritance. ... How to Use Claude Code MCP SafelyLena's distilled notes on wiring up MCP servers in Claude Code without breaking things — version gotchas, OAuth flow internals, scope conflicts, security boundaries you actually need t",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 28, 2026",
        "search_provider": "anthropic",
        "url": "https://evomap.ai/blog/claude-code-running-slow-fixes-next-steps"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "SPECIAL REPORT: Why Claude Has Seemed Slower, Lower-Quality, and Less Reliable – TECHMANIACS.com",
      "url": "https://techmaniacs.com/2026/04/17/special-report-why-claude-has-seemed-slower-lower-quality-and-less-reliable/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "techmaniacs.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=techmaniacs.com",
        "site_name": "Techmaniacs"
      },
      "is_missing": false,
      "text": "Official status data shows a particularly rough patch in late March and April 2026. March 2026 uptime dipped to 98.21% for Claude.ai, 98.32% for the API, and 98.56% for Claude Code.\n\nClaude hasn’t gotten “dumber” – but it has gotten harder to rely on. A special TECHMANIACS investigation into the real reasons behind six months of slowdowns, outages, and q…\n\nReport Type: Special Investigation Subject: Claude AI – Performance, Reliability, and Quality Degradation (Oct 2025 – Apr 2026) Sources: Anthropic official status API, incident records, release notes, help-center documentation, developer forums, independent benchmarks Overall Assessment: HIGH CONCERN – Systemic but Explainable · The strongest conclusion from six months of public evidence is that there is not one single cause behind the wave of complaints that Claude has become slower, more error-prone, or lower-quality. The evidence points to a stack of overlapping factors: a dense run of reliability incidents affecting Claude.ai, the API, and Claude Code; aggressive rollout of new 4.6-family models and agent features; rate-limit and prompt-cache behaviors that look like “quality degradation” from the outside; and long-session context-management patterns that Anthropic explicitly acknowledges can reduce output quality.\n\nOfficial status data shows a particularly rough patch in late March and April 2026. March 2026 uptime dipped to 98.21% for Claude.ai, 98.32% for the API, and 98.56% for Claude Code. Anthropic’s March 26–27 postmortem explicitly attributed elevated error rates on Opus 4.6 and Sonnet 4.6 to “networking performance degradation within our infrastructure” – and said the fix was to migrate workloads to healthy infrastructure. April then saw repeated incidents around Sonnet 4.6, Opus 4.6, authentication, and login across multiple surfaces. The most plausible high-level diagnosis: Claude is not “just worse now” in a simple sense. Its newest model family and newest product surfaces had a period of rollout instability, while changes to thinking, context, caching, and long-session tooling created new ways for users to encounter lower-quality outputs.\n\nClaude hasn’t become fundamentally less capable. The benchmarks don’t support that conclusion, and neither does Anthropic’s own incident record once you read it carefully. What has happened is that a very ambitious product release cycle – new models, new serving modes, new context controls, new defaults, new agent surfaces – collided with real infrastructure instability during March and April 2026, while simultaneously creating new operational failure modes that users encounter in long, complex, tool-heavy sessions. The correct response is not to dismiss the complaints – they reflect real workflow degradation. But the correct framing is also not “Anthropic secretly lobotomized their model.” The correct framing is: Claude’s system has become more complex, its failure modes more subtle, and its behavior more sensitive to session hygiene, context management, and effort controls than most users realize.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 17, 2026",
        "search_provider": "anthropic",
        "url": "https://techmaniacs.com/2026/04/17/special-report-why-claude-has-seemed-slower-lower-quality-and-less-reliable/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude's Latency Profile and SLA Guarantees | My Weird Prompts",
      "url": "https://www.myweirdprompts.com/episode/claude-latency-sla-guarantees/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "myweirdprompts.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=myweirdprompts.com",
        "site_name": "My Weird Prompts"
      },
      "is_missing": false,
      "text": "https://files.myweirdprompts.com/covers/claude-latency-sla-guarantees.png 2026-04-12T10:27:00.176Z 24:57 latency,ai-inference,anthropic · Claude is measurably slower than competitors—and Anthropic&#x27;s SLA promises are even thinner than the ...\n\nhttps://files.myweirdprompts.com/covers/claude-latency-sla-guarantees.png 2026-04-12T10:27:00.176Z 24:57 latency,ai-inference,anthropic · Claude is measurably slower than competitors—and Anthropic's SLA promises are even thinner than the latency numbers suggest. What enterprises actua... ... AI-Generated Content: This podcast is created using AI personas. Please verify any important information independently. When people complain that Claude is slow, they're usually vague about it. But \"slow\" means different things depending on what you're measuring. Understanding the distinction between these metrics is essential for anyone building production systems on Claude's API. The inference community has standardized on five core measurements: TTFT (Time to First Token) is the delay between sending a request and seeing the first character appear. For interactive chat applications, this dominates the user experience—it's what determines whether an interface feels responsive or frozen.\n\nA model could have terrible TTFT but decent generation speed once it starts, or vice versa. The metrics capture different dimensions of performance. Here's the critical insight most people miss: the median is almost meaningless for production systems. What actually matters is the p95—the ninety-fifth percentile. If your median TTFT is one second but your p95 is four seconds, roughly one in twenty requests feels dramatically slower than what you tested in your demo. In a system handling a thousand requests per hour, that's fifty bad experiences per hour. High p95 variance is what generates user complaints, not the median. You can have an acceptable average and still have a product that feels broken to a meaningful percentage of your users. A March benchmark by engineer Kunal Ganglani ran a rigorous head-to-head comparison across five models with multiple prompt sizes. The findings for Claude Sonnet 4 on long prompts were striking: ...\n\nWhich is exactly the pattern you see in the benchmarks. And here's the thing most people miss when they're evaluating model speed: the median is almost meaningless for production systems. What you actually care about is the p95 — the ninety-fifth percentile. If your median TTFT is one second but your p95 is four seconds, roughly one in twenty requests feels dramatically slower than what you tested in your demo. And in a system handling a thousand requests an hour, that's fifty bad experiences per hour. Fifty requests per hour where your user is staring at a frozen screen for four seconds instead of one. There's a benchmark from March this year — a software engineer named Kunal Ganglani ran a pretty rigorous head-to-head across five models, three prompt sizes, three runs each. And the finding on Claude Sonnet 4 was striking. Median TTFT on long prompts: one thousand two hundred sixteen milliseconds.\n\nInterestingly, Claude Haiku 4.5 was the fastest model in the entire benchmark, with median TTFT of 610ms on long prompts and p95 of 843ms. On short prompts, it hit 597ms—faster than OpenAI and Google. The problem is that Haiku isn't the model most enterprises default to for serious work. Looking at provider-level speed rankings from BenchLM, Anthropic averages 52 tokens per second and a 3.3-second average TTFT. NVIDIA inference delivers 260 tokens per second. Mistral hits 126. Even DeepSeek, at 48 tokens per second, is in Anthropic's neighborhood. Anthropic ranks second-slowest by tokens per second among major providers. In late March, an Anthropic engineer working on Claude Code posted on X that Anthropic was adjusting session limits during peak hours (5 AM to 11 AM Pacific, US business hours). About seven percent of users were hitting caps they wouldn't have hit before.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 12, 2026",
        "search_provider": "anthropic",
        "url": "https://www.myweirdprompts.com/episode/claude-latency-sla-guarantees/"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "I made Claude slower and it completely changed how I use it",
      "url": "https://www.xda-developers.com/i-made-claude-slower-and-it-completely-changed-how-i-use-it/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "xda-developers.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=xda-developers.com",
        "site_name": "XDA Developers"
      },
      "is_missing": false,
      "text": "Published Apr 5, 2026, 1:00 PM EDT · Shekhar Vaidya is a veteran technology journalist and computer science engineer. He is the founder of TechLatest, where he has spent years providing technical analysis on hardware and Windows ecosystems. Now a Computing Writer at XDA, Shekhar leverages his deep background in NAS, storage solutions, and PC internals to help readers master their tech. Sign in to your XDA account · Add Us On · Summary Generate a summary of this story · follow · Follow · followed · Followed · Like · Like · Thread 2 · Log in · Here is a fact-based summary of the story contents: Try something different: Show me the facts Explain it like I’m 5 Give me a lighthearted recap · I did something that goes against how LLMs are designed and how people use them. I deliberately slowed down Claude, not its response or reasoning, but its speed of streaming the output.\n\nPublished Apr 5, 2026, 1:00 PM EDT · Shekhar Vaidya is a veteran technology journalist and computer science engineer. He is the founder of TechLatest, where he has spent years providing technical analysis on hardware and Windows ecosystems. Now a Computing Writer at XDA, Shekhar leverages his deep background in NAS, storage solutions, and PC internals to help readers master their tech. Sign in to your XDA account · Add Us On · Summary Generate a summary of this story · follow · Follow · followed · Followed · Like · Like · Thread 2 · Log in · Here is a fact-based summary of the story contents: Try something different: Show me the facts Explain it like I’m 5 Give me a lighthearted recap · I did something that goes against how LLMs are designed and how people use them. I deliberately slowed down Claude, not its response or reasoning, but its speed of streaming the output.\n\nI did something that goes against how LLMs are designed and how people use them. I deliberately slowed down Claude, not its response or reasoning, but its speed of streaming the output. I heavily use both local and cloud LLMs in my day-to-day work, hobbies, and routine tasks. Claude and ChatGPT are two of my most used chatbots. I use them mainly for speed and accuracy. Most people do the same. I type a query and get an answer almost instantly. I skim the output and move on. The assumption is simple: faster is better. Then I came across a small Chrome extension called “Slow LLM.\" It artificially slows down how Claude and ChatGPT stream responses. I decided to try it out of curiosity. I wasn’t expecting much, but a few minutes in, I observed a shift. Slowing down the stream didn’t actually improve the chatbot, but it changed how I use it. ... Slow LLM is a small experiment from a GitHub user, Sam Lavigne.\n\nIt artificially slows down (fetch patching) how LLM responses stream in tools like Claude and ChatGPT. The tool can be used either with the Chrome extension or by implementing it network-wide using its free custom DNS server. Honestly, I didn’t have a problem that I was looking to fix; I stumbled upon the tool while browsing, and it looked absurd. The whole concept of an LLM is speed, and it was promising the opposite. So, out of curiosity, I installed the Chrome extension instantly. The first run was a little bit annoying. I opened Claude, started a casual conversation, selected the Haiku 4.5 model, and typed, “What are the trending local LLMs for coding?” I usually get a full response in 10–15 seconds. This time it took 2 minutes and 20 seconds for the response. Then I asked a follow-up question, and that’s when I noticed—the lines were coming in slow enough that I could actually read as they appeared.\n\nI was forced to read each line as it streamed. I was processing each line and understanding the actual issue behind the error and not just the solution. I started questioning the process more. In one test, the response was around 300 words, and it took more than 2 minutes. Normally, I’d read it in 80–90 seconds, so this was noticeably slower than my natural reading pace. Yet I engaged more. I wasn’t skimming anymore; I was following. The speed wasn’t ideal, but the slowdown broke the passive habit. ... Slow LLM helped me realize how I was engaging with Claude and how that interaction could be improved. The extension was just a trigger, not the actual solution. Without the extension, the fast responses encouraged skimming, which led to shallow understanding. That shallow understanding often led to over-reliance on the first answer and quick fixes.",
      "is_citable": true,
      "prompt_context_metadata": {
        "age": "April 5, 2026",
        "search_provider": "anthropic",
        "url": "https://www.xda-developers.com/i-made-claude-slower-and-it-completely-changed-how-i-use-it/"
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

Clear answers to both questions.

**1. Yes, other users report this — but the causes are specific, not a single "slowdown."**

Slower-feeling Claude Code has been a widespread complaint, and reporting traces it to several distinct sources rather than one. Official status data shows a rough patch: March 2026 uptime dipped to 98.21% for Claude.ai, 98.32% for the API, and 98.56% for Claude Code, and Anthropic's March 26–27 postmortem attributed elevated error rates on Opus 4.6 and Sonnet 4.6 to networking performance degradation within its infrastructure.

There were also deliberate rate/session changes users felt as slowness: March 2026 introduced adjustments to 5-hour session limits specifically during peak hours (weekdays, 5am–11am PT), so heavy agentic workflows during those windows drain faster than identical work run at night. An Anthropic engineer reportedly noted about seven percent of users were hitting caps they wouldn't have hit before.

On raw speed, Claude is comparatively slow among providers regardless of any recent change: by tokens per second, Anthropic ranks second-slowest among major providers, averaging around 52 tokens per second with a 3.3-second average TTFT.

**2. No — slowness is not itself a reliable indicator of intelligence decline. It can point in either direction.**

This is the key distinction. A "slow" session can have two opposite meanings: the model is thinking more, producing better output but taking longer; or the model is thinking less, responding faster but producing weaker code. So slowness alone doesn't tell you which. In fact, the March 4 change that *reduced* quality was made to make things *faster* — it reduced default reasoning effort from "high" to "medium" to cut latency, a tradeoff the company later called the wrong one. That means the quality-degradation episode was correlated with *faster* responses, not slower ones.

**What most likely explains your specific experience**

The most common cause of a Claude Code session getting progressively slower is context accumulation, not model degradation. Context accumulates, gaps cause cache misses, and the session becomes progressively more expensive and slower to respond. Concretely: the entire transcript is re-sent to the model on every turn — a turn-5 session might carry 20,000 tokens, while a turn-35 session after reading several large files and running a build might carry 400,000 tokens. The two root causes are named directly: too many sequential tool calls (fixed by better prompts and CLAUDE.md) and a bloated context window (fixed by /compact or /clear).

There's also a diagnostic split worth applying to your own case: slow from the first message points to tool-call latency or a vague prompt triggering many file reads; slow only after a while points to context accumulation — and these have different fixes.

**Facts vs. assumptions:**
- *Fact (attributed):* Many users reported slower Claude Code; documented causes include infrastructure incidents, peak-hour session limits, and Anthropic's comparatively low tokens/sec.
- *Fact (attributed):* Slowness maps to opposite quality outcomes, so it is not a clean intelligence indicator.
- *Assumption (yours to test):* Your specific slowdown — most probable cause is session context bloat, which you can verify yourself.

**How to test it right now:** run `/clear` (or start a fresh session) and repeat a task. If speed returns, it was context bloat, not model decline. If it's slow from the first message of a clean session, check `--verbose` to see whether tool calls are eating the time. Want me to look up the current official Claude Code status page or the exact `/compact` vs `/clear` guidance?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f44e4-a466-7f4e-b17e-decfe9fb5c94",
  "updated_at": "2026-07-09T03:21:28.908231Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f44e4-a466-78ed-93d7-6aa67e211f58"
}
```

</details>
