# Checking Claude subscription tier level

## Export metadata (verbatim)

```json
{
  "uuid": "f543bcda-749a-4e42-aef9-feb5683c564f",
  "name": "Checking Claude subscription tier level",
  "summary": "**Conversation Overview**\n\nThe person asked how to confirm which tier of Claude Max subscription they have — specifically whether they are on the Max x5 or Max x20 plan. Claude explained how to verify this through the claude.ai account settings by navigating to the profile icon, then Settings, and checking the Account or Billing section where the current plan tier is displayed. Claude also provided the monthly pricing difference between the two tiers as an alternative way to identify which plan is active, and noted that the Usage section within Settings would reflect the appropriate usage caps for each tier. Additionally, Claude offered a practical reference point based on approximate prompt volume limits within a given time window as a real-world indicator of which tier a user is on.",
  "created_at": "2026-03-08T03:41:45.975682Z",
  "updated_at": "2026-03-08T03:41:58.636416Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-08T03:41:47.262046Z

How to confirm that my claude subscription is max x5 or x20?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ccb89-6aef-79c4-a04b-964818faa284",
  "updated_at": "2026-03-08T03:41:47.262046Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-08T03:41:58.636416Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user wants to know how to check their Claude subscription multiplier (Max x5 or x20). Let me search for this information.

</details>

<details>
<summary>tool_use (verbatim JSON)</summary>

```json
{
  "start_timestamp": "2026-03-08T03:41:49.188590Z",
  "stop_timestamp": "2026-03-08T03:41:49.402964Z",
  "flags": null,
  "type": "tool_use",
  "id": "toolu_01RTqkJERmmNKELYyQiTFaLG",
  "name": "web_search",
  "input": {
    "query": "Claude Max plan x5 x20 subscription how to check"
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
  "tool_use_id": "toolu_01RTqkJERmmNKELYyQiTFaLG",
  "name": "web_search",
  "content": [
    {
      "type": "knowledge",
      "title": "What is the Max plan? | Claude Help Center",
      "url": "https://support.claude.com/en/articles/11049741-what-is-the-max-plan",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "We do not offer standard discounted pricing any of our paid plans, including Max 5x and 20x plans. With that said, anyone in a supported location can access the free version of Claude by navigating to claude.ai and signing up using an email address.\n\nAccess to Claude Code: Use Claude Code for your terminal-based coding workflows with one unified subscription. Access to Cowork: Hand off complex, multi-step tasks to Claude in Claude Desktop. See this article for more information: Get started with Cowork. The Max plan is available in two tiers to match your usage needs: ... Note: These prices are for web subscriptions only. Mobile pricing may vary depending on your app platform. The Max plan is currently available as a monthly subscription only. When upgrading from a lower to a higher tier, your account will be charged on a prorated basis for the remainder of your billing cycle. When moving from an annual Pro plan to a Max plan, if the remaining balance on your annual Pro plan is greater than your Max plan price, you will receive a credit to your account for the remaining balance. This credit will be applied to future subscription costs.\n\nTo receive your credit, the billing address used to purchase your Max plan must be the same as your previous subscription’s billing address. If your billing address has changed, you will need to cancel your Pro subscription and wait for the subscription end date before signing up for a new Max subscription with a new billing address. We do not offer standard discounted pricing any of our paid plans, including Max 5x and 20x plans. With that said, anyone in a supported location can access the free version of Claude by navigating to claude.ai and signing up using an email address. We occasionally run limited-time promotions, but we don't have any standing discounts available upon request. These promotional offers are typically announced through our official channels when available. If you're interested in potential future promotions, we recommend following our official social media accounts or signing up for our newsletter to be notified of any special offers.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/11049741-what-is-the-max-plan",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Max plan | Claude",
      "url": "https://claude.com/pricing/max",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "The Max plan combines Claude desktop and mobile apps and Claude Code in one subscription, with up to 20x more usage per session than Pro. That’s a lot of deep work potential. ... Enable every team to spark new ideas, achieve more, and collaborate better. Handle sophisticated, multi-dimensional challenges—the kind that require a true thinking partner. Launch features, complete analyses, publish content, and more with Claude. Claude shows its thinking, seeks clarification, and collaborates thoughtfully. ... Create a scatter plot matrix showing business performance vs opportunity analysis. Plot data points by Current Performance Score (x-axis, 0-100) vs Growth Opportunity Score (y-axis, 0-100). Include quadrant divisions with labels: &quot;Optimize&quot; (top-right), &quot;Develop&quot; (top-left), &quot;Maintain&quot; (bottom-right), &quot;Divest&quot; (bottom-left). Color code by business category and size points by revenue/impact potential.\n\nThe Max plan combines Claude desktop and mobile apps and Claude Code in one subscription, with up to 20x more usage per session than Pro. That’s a lot of deep work potential. ... Enable every team to spark new ideas, achieve more, and collaborate better. Handle sophisticated, multi-dimensional challenges—the kind that require a true thinking partner. Launch features, complete analyses, publish content, and more with Claude. Claude shows its thinking, seeks clarification, and collaborates thoughtfully. ... Create a scatter plot matrix showing business performance vs opportunity analysis. Plot data points by Current Performance Score (x-axis, 0-100) vs Growth Opportunity Score (y-axis, 0-100). Include quadrant divisions with labels: \"Optimize\" (top-right), \"Develop\" (top-left), \"Maintain\" (bottom-right), \"Divest\" (bottom-left). Color code by business category and size points by revenue/impact potential.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://claude.com/pricing/max",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Using Claude Code with your Pro or Max plan | Claude Help Center",
      "url": "https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "This article applies to individual consumers using Pro or Max plan subscriptions to access Claude Code. If you’re a member of a Team or Enterprise plan organization, see Using Claude Code with your Team or Enterprise plan. Claude Code is a command line tool that gives you access to Claude models directly in your terminal, allowing you to delegate complex coding tasks while maintaining transparency and control. With Pro and Max plans, you now have access to both Claude on the web, desktop, and mobile apps and Claude Code in your terminal with one unified subscription. Use two powerful AI products in one simple subscription. Use Claude for writing, research, analysis, and more — at work and at home. Use Claude Code for your terminal-based coding workflows. Ensure you have an active Pro or Max plan subscription · If you&#x27;re not already subscribed, upgrade at claude.ai/upgrade ...\n\nThis article applies to individual consumers using Pro or Max plan subscriptions to access Claude Code. If you’re a member of a Team or Enterprise plan organization, see Using Claude Code with your Team or Enterprise plan. Claude Code is a command line tool that gives you access to Claude models directly in your terminal, allowing you to delegate complex coding tasks while maintaining transparency and control. With Pro and Max plans, you now have access to both Claude on the web, desktop, and mobile apps and Claude Code in your terminal with one unified subscription. Use two powerful AI products in one simple subscription. Use Claude for writing, research, analysis, and more — at work and at home. Use Claude Code for your terminal-based coding workflows. Ensure you have an active Pro or Max plan subscription · If you're not already subscribed, upgrade at claude.ai/upgrade ...\n\nThis will connect your Pro or Max plan subscription to Claude Code. If you're already logged in to Claude Code via Claude Console PAYG, run /login from within Claude Code to switch to your subscription plan. If you're not seeing the option to authenticate with your preferred account, follow these steps to update Claude Code: Log out of your active session completely using the /logout command. Run claude update. Restart your terminal completely for the change to take effect. Run claude and select the correct account to use Claude Code. Important: If you have an ANTHROPIC_API_KEY environment variable set on your system, Claude Code will use this API key for authentication instead of your Claude subscription (Pro, Max, Team, or Enterprise plans), resulting in API usage charges rather than using your subscription's included usage. See this article for more information: Managing API key environment variables in Claude Code.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/11145838-using-claude-code-with-your-pro-or-max-plan",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Pricing Plans - Pro vs Max 5x vs Max 20x Comparison | MCPcat",
      "url": "https://mcpcat.io/guides/which-claude-code-plan-to-choose/",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "mcpcat.io",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=mcpcat.io",
        "site_name": "MCPcat"
      },
      "is_missing": false,
      "text": "Track your usage patterns with external tools like ccusage or through your Anthropic account dashboard. Claude Code will notify you when you reach 80% of your usage limit. Note: Claude cannot directly check or report your usage statistics.\n\nClaude Code offers three subscription tiers designed for different development workflows and project scales. Each plan provides access to Claude's coding assistant in your terminal, with varying usage limits and model access. Claude Code operates on a 5-hour session system. Your usage resets every 5 hours from your first prompt, not at fixed times. Important: Usage is shared between Claude.ai chat and Claude Code. Heavy terminal users should budget accordingly. Each Claude Code interaction counts differently based on: ... Typical Pro usage: Fix bugs, write functions, generate tests, explain code. ... If you're running into code quality issues with Sonnet, it might be worth upgrading to Max 5x in order to leverage Anthropic's strongest model, Opus. ... Use ccusage extensively to see your current usage. Also monitor your existing usage and keep a close eye on when you reach 80% usage, which Claude Code notifies you about.\n\nTrack your usage patterns with external tools like ccusage or through your Anthropic account dashboard. Claude Code will notify you when you reach 80% of your usage limit. Note: Claude cannot directly check or report your usage statistics. ... Remember: You can always start with Pro and upgrade as your needs grow. Claude Code becomes more valuable as you learn to leverage its natural language capabilities effectively. Get started with Claude Code in minutes. Learn essential commands and features to boost your development workflow. Master context management in Claude Code to maximize your usage limits and maintain efficient coding sessions throughout the day. Discover the most powerful MCP servers to enhance your Claude Code development workflow with specialized tools and integrations.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://mcpcat.io/guides/which-claude-code-plan-to-choose/",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Max Plan Explained: Pricing, Limits & Features | IntuitionLabs",
      "url": "https://intuitionlabs.ai/articles/claude-max-plan-pricing-usage-limits",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "intuitionlabs.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=intuitionlabs.ai",
        "site_name": "IntuitionLabs"
      },
      "is_missing": false,
      "text": "Detailed guide to the Claude Max plan ($100-$200/mo). Analyze 5x and 20x usage limits, feature access, and value for high-volume professional AI workflows.\n\nA balanced view must note limitations. Even with Max, Claude is not flawless. Some users have reported that at times Claude’s answers are less reliable than expected (as with any AI). A few early Max subscribers noted that if you rely on Claude for critical tasks (e.g. client deliverables), you still must verify its outputs; the excess usage does not inherently guarantee better accuracy. Cost is the main con: $100-$200/month is steep for individuals. At that price, Max targets professionals working at scales where the marginal productivity gain outweighs the subscription cost. If someone’s usage is moderately heavy but not maximal, they may be better served by Pro or a hybrid approach. Also, if Claude’s competitors lower prices or adjust their own tiers, Anthropic may face pressure. Finally, the existence of Max may lead some users to question why such high fees are necessary – potentially fueling debates on AI equity.\n\nThe Pro plan (≈$18–$20/month) granted larger context windows, access to Claude Code (modern coding assistant), the Cowork file-automation preview, web research, and extended reasoning capabilities ([26]) ([27]). However, as real users pushed the limits of these plans, many power users found even Pro’s allotment insufficient. Claude’s large context (ability to ingest long documents and multi-step context) meant that complex projects could quickly burn through tokens and conversations. Online communities (e.g. Reddit) showed many Claude users “unhappy with ... usage limits over the past year” ([8]). The company recognized this feedback: Anthropic’s own announcement notes the “top request from our most active users has been expanded Claude access” ([7]). Meanwhile, competitors raised the bar: OpenAI introduced a $200/month ChatGPT Pro tier (Dec 2024) promising effectively unlimited access to its most advanced models ([16]), and reported a $300M annualized revenue bump from its high-end su\n\nIn this heated market, Anthropic needed a comparable offering. On April 9, 2025, Anthropic unveiled the Claude Max Plan, a premium subscription explicitly for heavy-use individuals ([1]) ([3]). The plan’s name (“Max”) signals its goal of maximizing usage and removing workflow interruptions. This report delves into the Max plan’s specifics – its pricing, capabilities, and intended users – and analyzes its role in the evolving AI landscape. Anthropic officially announced the Max plan on April 9, 2025 ([28]). The launch message emphasizes that Max is “designed for those who collaborate with Claude extensively and need expanded access for their most important work” ([29]). The nominee “Max” underscores maximal usage: customers can choose 5× or 20× the usage limits of the existing Pro plan ([1]) ([2]). In Anthropic’s words, users can “maintain momentum on your most demanding projects with little disruption” thanks to up to 20× higher limits ([1]) ([7]).\n\nTechnologically, Max “combines Claude desktop and mobile apps and Claude Code in one subscription” with dramatically more compute per session ([30]) ([31]). The timing and structure reflect market pressures. Major tech outlets framed Max as Anthropic’s response to OpenAI’s expensive tiers. For instance, TechCrunch described Max as “an answer to OpenAI’s $200-a-month ChatGPT Pro” ([3]). Ars Technica similarly noted that the $200 Max tier “match [es] the price point of OpenAI’s $200 ‘Pro’ plan” ([32]). Both outlets point out that Anthropic’s strategy mirrors the broader industry pattern: power users are willing to pay far more for higher access, given the massive backend costs of running large models ([17]) ([18]). Indeed, Anthropic’s product lead hinted at even higher pricing in the future, noting exploration of pricier tiers (even $500+/month) depending on user demand ([23]).",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://intuitionlabs.ai/articles/claude-max-plan-pricing-usage-limits",
        "search_provider": "anthropic",
        "age": "February 3, 2026"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code Max 5X vs Max 20X - Complete Version Comparison Guide | CTok Claude Code Group Subscription - Claude Code, Gemini, Codex",
      "url": "https://ctok.ai/en/claude-code-max-versions",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "ctok.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=ctok.ai",
        "site_name": "Ctok"
      },
      "is_missing": false,
      "text": "Detailed comparison of Claude Code Max 5X and Max 20X subscription tiers including pricing, usage limits, model access, and recommendations for choosing the right plan.\n\nClaude Code Max 20X 拼车，节省 60%+ 成本，专业管理，全天技术支持 立即加入 → ... Max 5x: Average users can send about 225 messages every 5 hours, or send about 50-200 prompts using Claude Code · Max 20x: Average users can send about 900 messages every 5 hours, or send about 200-800 prompts using Claude Code ... Users of both Max plans can use Sonnet or Opus 4 models in Claude Code (switch using the /model command) Max 5x users need to use Opus strategically to avoid hitting limits · Max 20x users can use Opus more frequently for complex problem solving ... Moderate professional development, occasionally needing Opus for complex tasks but mainly using Sonnet for daily work · Upgrading from Pro when hitting rate limits on large projects ... Intensive professional development requiring frequent access to Opus for architectural decisions and complex problem solving ·\n\nIn short, the Max 20 version provides 4x the usage of the Max 5x version and is better suited for heavy developers who need extensive Claude Code usage and frequent access to the Opus model.\n\nMax plan usage limits are shared between claude.ai website/app and Claude Code · Both tiers are designed for developers working with large codebases, complex refactoring, and long debugging sessions · It's recommended to start with Pro and upgrade as needs grow ·",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://ctok.ai/en/claude-code-max-versions",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Code MAX 20x Plan Review: Is It Worth $200?",
      "url": "https://www.arsturn.com/blog/claude-code-max-20x-plan-rip-off-or-worth-the-200-price-tag",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "arsturn.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=arsturn.com",
        "site_name": "Arsturn"
      },
      "is_missing": false,
      "text": "Before this, you had to pay for Claude Code with API credits, &amp; let me tell you, that could get pricey FAST. I saw one Reddit user who burned through $200 in a week! So, the subscription model is a welcome change for many. Here’s the breakdown of the plans that include Claude Code: Pro Plan: This one&#x27;s about $20 a month. It’s your entry-level option, giving you around 10-40 Claude Code prompts every 5 hours. It’s a good starting point for solo devs, small projects, or if you&#x27;re just trying to get a feel for the workflow. Max 5x Plan: This jumps up to $100 a month. As the name suggests, you get about 5 times the usage of the Pro plan, so roughly 50-200 prompts every 5 hours. This is where you also get access to Anthropic&#x27;s top-tier model, Opus 4. Max 20x Plan: And here we have the big one, the $200 a month plan. You’re looking at around 200-800 prompts every 5 hours.\n\nBefore this, you had to pay for Claude Code with API credits, & let me tell you, that could get pricey FAST. I saw one Reddit user who burned through $200 in a week! So, the subscription model is a welcome change for many. Here’s the breakdown of the plans that include Claude Code: Pro Plan: This one's about $20 a month. It’s your entry-level option, giving you around 10-40 Claude Code prompts every 5 hours. It’s a good starting point for solo devs, small projects, or if you're just trying to get a feel for the workflow. Max 5x Plan: This jumps up to $100 a month. As the name suggests, you get about 5 times the usage of the Pro plan, so roughly 50-200 prompts every 5 hours. This is where you also get access to Anthropic's top-tier model, Opus 4. Max 20x Plan: And here we have the big one, the $200 a month plan. You’re looking at around 200-800 prompts every 5 hours.\n\nI came across a Reddit thread from a solo developer building their own app, & they said that after hitting the limits on the $100 plan within a week, upgrading to the $200 plan was a \"no-brainer.\" They felt that for serious development work, where you're shipping features daily, the investment is absolutely worth it. Another user on Reddit who tried the MAX 20x plan for the first time said they canceled their Cursor subscription within a few hours, they were that impressed. They built a new feature for their app without writing a single line of code themselves, just by giving instructions to Claude Code. That's a pretty powerful testament. Here's who the MAX 20x plan seems to be a good fit for: Solopreneurs & Indie Hackers: If you're a one-person show, trying to build & ship products quickly, the productivity boost from a tool like this can be a game-changer.\n\nHey everyone, let's talk about something that’s been a hot topic in the dev community lately: Claude Code & its pricing. Specifically, that hefty $200/month MAX 20x plan. The big question on everyone's mind is, is it a total rip-off or actually worth the investment? It’s a valid question, & honestly, the answer isn’t a simple yes or no. It really depends on who you are & what you’re building. I’ve been digging into this, reading what people are saying, & looking at the specs, & I've got some thoughts. We're going to break it all down – the good, the bad, & the expensive. We’ll look at what you actually get for your money, how it stacks up against the competition, & who this plan is REALLY for. First off, let's get the pricing structure straight. Anthropic has a few tiers for Claude, & Claude Code access is now bundled into their Pro & Max plans, which is a pretty recent change.\n\nNow, we can't talk about Claude Code's pricing without addressing the rate limit situation. There was a bit of an uproar when Anthropic announced new weekly rate limits, even for the paid plans. People were understandably frustrated, feeling like they were paying a premium but still hitting a wall. Anthropic's side of the story is that these limits are in place to prevent abuse. They say it affects less than 5% of users, mainly those running Claude Code continuously in the background, 24/7. And to be fair, there have been reports of people burning through tens of thousands of dollars in compute on a $200 plan, so you can see why they'd want to put a stop to that. The issue for many is the lack of clarity. The limits are described in \"hours\" of model usage, but it's actually token-based, which can be confusing. For the MAX 20x plan, you're looking at something like 24-40 hours of Opus 4 usage per week, which translates to a pretty hefty number of tokens, but it's not unlimited.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://www.arsturn.com/blog/claude-code-max-20x-plan-rip-off-or-worth-the-200-price-tag",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Claude Pricing Explained: Subscription Plans & API Costs | IntuitionLabs",
      "url": "https://intuitionlabs.ai/articles/claude-pricing-plans-api-costs",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "intuitionlabs.ai",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=intuitionlabs.ai",
        "site_name": "IntuitionLabs"
      },
      "is_missing": false,
      "text": "A complete guide to Anthropic Claude pricing. Learn about subscription plans (Pro, Max, Team) and per-token API costs for models like Opus 4.5 and Sonnet.\n\nOn the developer/API side, Claude is offered as a pay-as-you-go service. Pricing is set per million tokens (approximately 750 words), and varies by model and usage type. The current generation of Claude models offers dramatically improved pricing compared to earlier generations. Claude Opus 4.6 is available at $5 per million input tokens and $25 per million output tokens. Claude Sonnet 4.6 sits at $3 input / $15 output per MTok, while Claude Haiku 4.5 costs $1/$5 per MTok. Opus 4.6 also offers a “fast mode” at $30/$150 per MTok (6x standard rates) for latency-sensitive workloads. Previous generation models like Opus 4.1 cost $15/$75 per MTok before Anthropic dramatically reduced pricing with the current generation ([7]) ([8]). Anthropic also offers batch processing at 50% off token prices ([9]), and detailed features like prompt-caching costs, 1M-token context windows, and tool integration costs in its documentation ([10]) ([9]).\n\nIn late 2021, Anthropic released its first AI assistant, Claude, an LLM-based chatbot and API that focuses on natural language reasoning, safety, and compliance. (The name Claude honors Claude Shannon, the inventor of information theory.) Over time Claude has evolved through multiple versions. Claude 1 and 2 were early models, followed by the Claude 3 series (including models named Opus, Sonnet, and Haiku for different performance tiers) in 2024, and the Claude 4 series culminating in the current generation: Claude Opus 4.6, Claude Sonnet 4.6, and Claude Haiku 4.5 ([14]). Each generation improved capability—better reasoning, larger context windows, and coding abilities—while often reducing cost-per-token. The development of Claude has occurred amid rapid growth and intense competition in generative AI. Anthropic has raised large investments from venture capital and strategic partners (notably AWS and Google) and in 2023 reported valuations in the tens of billions ([15]).\n\nclaude pricinganthropic claudeapi pricingllm costper-token pricingclaude proclaude for businessai subscriptionai · Last updated: February 28, 2026. Pricing and model details verified against official Anthropic documentation. Originally published December 2025. Anthropic’s Claude is a leading AI assistant and developer API, and the company offers a tiered pricing structure to serve everyone from casual users to large enterprises. Individual users can access Claude for free, but power users can upgrade to paid subscription plans (Pro at $20/month or effectively $17/month when billed annually, and Max at $100/month for very high usage) ([1]) ([2]). Business customers can subscribe to Team or Enterprise plans: a Team plan starts at $25 per user per month (with a $30/mo month-to-month option) for standard seats, and $150/month for premium seats that include the Claude Code developer environment ([3]) ([4]).\n\nThis report provides a comprehensive analysis of all Claude subscription plans and API pricing tiers. It covers historical context and recent changes (e.g. the 2025 launch of the Claude “Max” plan), details of each plan’s features and costs, API usage pricing (per-model, caching, batch jobs, etc.), and comparisons to competitive offerings. We also include data-driven insights (e.g. Anthropic’s average per-developer cost of Claude Code ([11])), case studies (e.g. Copy.ai’s reported cost savings ([12])), and discussion of implications for developers, enterprises, and the future AI market. All claims are backed by citations from Anthropic’s official documents and the technology press. Anthropic is an AI startup founded in 2021 by former OpenAI researchers led by Dario Amodei. The company’s mission is to build “reliable, interpretable, and steerable” AI systems ([13]).",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://intuitionlabs.ai/articles/claude-pricing-plans-api-costs",
        "search_provider": "anthropic",
        "age": "December 1, 2025"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Choosing a Claude plan | Claude Help Center",
      "url": "https://support.claude.com/en/articles/11049762-choosing-a-claude-plan",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "Use the following guide to determine which plan is right for you · 5x Pro capacity per session",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/11049762-choosing-a-claude-plan",
        "search_provider": "anthropic"
      },
      "links": null
    },
    {
      "type": "knowledge",
      "title": "Extra usage for paid Claude plans | Claude Help Center",
      "url": "https://support.claude.com/en/articles/12429409-extra-usage-for-paid-claude-plans",
      "metadata": {
        "type": "webpage_metadata",
        "site_domain": "claude.com",
        "favicon_url": "https://www.google.com/s2/favicons?sz=64&domain=claude.com",
        "site_name": "Claude"
      },
      "is_missing": false,
      "text": "This article explains how to enable and use extra usage on your paid Claude plan (Pro, Max 5x, or Max 20x), allowing you to continue working with Claude after reaching your plan’s usage limits by switching to pay-as-you-go pricing. Extra usage allows individuals subscribed to paid Claude plans (Pro, Max 5x, and Max 20x) to continue using Claude seamlessly after reaching their included usage limits. Instead of being blocked when you hit your session limits, you can switch to consumption-based pricing at standard API rates and continue your work without interruption. Note: If you subscribed through one of the Claude mobile apps, you can only enable extra usage on the web version of Claude. You will need to add your payment method before enabling and purchasing extra usage on the web. When you reach your plan’s usage limit with extra usage enabled: You’ll see a notification that you’ve reached your session usage limit.\n\nNote: Extra usage is charged separately from your paid Claude subscription and appears as additional charges on your bill. ... Navigate to Settings > Usage in your Claude account. Locate the Extra usage section. Click \"Enable\" to turn on extra usage. Set up your payment method if not already configured. Configure your spending preferences. Click “Adjust limit” to control costs with a monthly spending cap. You can also select “Set to unlimited” if you prefer no spending restrictions: You’ll then need to prepay to cover usage beyond your plan limits. Click “Add funds,” enter the amount you want to purchase in the modal, then click “Purchase.” · You can also enable auto-reload to automatically make a purchase when your balance falls below a threshold you set: Note: There is a daily redemption limit of $2000. ... Monthly spending cap: Set a maximum amount you're willing to spend on extra usage each month.\n\nThis article explains how to enable and use extra usage on your paid Claude plan (Pro, Max 5x, or Max 20x), allowing you to continue working with Claude after reaching your plan’s usage limits by switching to pay-as-you-go pricing. Extra usage allows individuals subscribed to paid Claude plans (Pro, Max 5x, and Max 20x) to continue using Claude seamlessly after reaching their included usage limits. Instead of being blocked when you hit your session limits, you can switch to consumption-based pricing at standard API rates and continue your work without interruption. Note: If you subscribed through one of the Claude mobile apps, you can only enable extra usage on the web version of Claude. You will need to add your payment method before enabling and purchasing extra usage on the web. When you reach your plan’s usage limit with extra usage enabled: You’ll see a notification that you’ve reached your session usage limit.\n\nWhen using Research mode, extra usage rates apply once you exceed your included Max 20X limits. Research sessions may consume tokens more quickly due to multiple searches and comprehensive analysis. Documents stored in project files count toward your context when used in conversations. Extra usage pricing applies to all tokens processed, including project content. Yes, you can disable extra usage at any time through Settings > Usage. Once disabled, you'll only have access to your plan's included usage. Your plan’s included usage limit will reset every five hours once you reach it. Extra usage doesn’t affect this reset timing. If you purchased your paid plan through one of the Claude mobile apps, extra usage is only available if you enable and purchase it on the Claude web app. You will not be able to set up extra usage on the mobile app. Yes, extra usage is now available for all paid Claude plans, including Pro, Max 5x, and Max 20x plans.",
      "is_citable": true,
      "prompt_context_metadata": {
        "url": "https://support.claude.com/en/articles/12429409-extra-usage-for-paid-claude-plans",
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

The user wants to know how to confirm which Max plan tier they're on (x5 or x20). The answer is straightforward - check Settings on claude.ai.

</details>

The easiest way is to check your account settings directly on Claude.ai:

1. Go to **claude.ai** and log in
2. Click your profile icon (bottom-left) → **Settings**
3. Go to the **Account** or **Billing** section — your current plan (Max 5x or Max 20x) will be displayed there

You can also infer it from the pricing:
- **Max 5x** = $100/month
- **Max 20x** = $200/month

You can also navigate to **Settings → Usage** in your Claude account, where you'll see your plan's usage limits and the Extra usage section — the usage cap shown there will reflect your tier (5x or 20x relative to Pro).

As a rough real-world reference, Max 5x users can send roughly 50–200 prompts every 5 hours in Claude Code, while Max 20x users get around 200–800 prompts in the same window. So if you're hitting limits much sooner, that's a clue too.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019ccb89-6aef-7eff-a803-66d8462442b6",
  "updated_at": "2026-03-08T03:41:58.636416Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019ccb89-6aef-79c4-a04b-964818faa284"
}
```

</details>
