let meta = #{
    name: "survey-cheapest-opus-46",
    description: "Survey cheapest viable Claude Opus 4.6 access: model path x harness compatibility, cost, and China feasibility",
    when_to_use: "When user needs cheapest Opus 4.6 with Anthropic suspension constraints",
    phases: [
        #{ title: "Survey paths", detail: "parallel research of model access + harness options" },
        #{ title: "Compatibility", detail: "build model x harness matrix and kill incompatible combos" },
        #{ title: "Cost model", detail: "estimate daily coding-agent cost at $20-50/mo" },
        #{ title: "Verify", detail: "adversarial check of top claims" },
        #{ title: "Synthesize", detail: "ranked playbook report" },
    ],
};

// ---- Schemas ----
let path_schema = #{
    "type": "object",
    "required": ["path_id", "summary", "monthly_cost_usd", "opus_access", "china_feasibility", "risks", "sources", "claims"],
    "properties": #{
        "path_id": #{ "type": "string" },
        "summary": #{ "type": "string" },
        "monthly_cost_usd": #{ "type": "string" },
        "opus_access": #{ "type": "string" },
        "china_feasibility": #{ "type": "string" },
        "virtual_card_notes": #{ "type": "string" },
        "risks": #{ "type": "array", "items": #{ "type": "string" }, "maxItems": 8 },
        "sources": #{ "type": "array", "items": #{ "type": "string" }, "maxItems": 10 },
        "claims": #{ "type": "array", "maxItems": 8, "items": #{
            "type": "object",
            "required": ["claim", "confidence"],
            "properties": #{
                "claim": #{ "type": "string" },
                "confidence": #{ "type": "string" },
                "evidence": #{ "type": "string" },
            },
        }},
        "harnesses_supported": #{ "type": "array", "items": #{ "type": "string" }, "maxItems": 12 },
    },
};

let matrix_schema = #{
    "type": "object",
    "required": ["rows", "notes"],
    "properties": #{
        "rows": #{ "type": "array", "maxItems": 20, "items": #{
            "type": "object",
            "required": ["model_access", "harness", "compatible", "why"],
            "properties": #{
                "model_access": #{ "type": "string" },
                "harness": #{ "type": "string" },
                "compatible": #{ "type": "string" },
                "why": #{ "type": "string" },
                "caveats": #{ "type": "string" },
            },
        }},
        "notes": #{ "type": "string" },
    },
};

let cost_schema = #{
    "type": "object",
    "required": ["scenarios", "winner_under_50", "notes"],
    "properties": #{
        "scenarios": #{ "type": "array", "maxItems": 10, "items": #{
            "type": "object",
            "required": ["name", "est_monthly_usd", "fits_budget", "usage_assumptions"],
            "properties": #{
                "name": #{ "type": "string" },
                "est_monthly_usd": #{ "type": "string" },
                "fits_budget": #{ "type": "boolean" },
                "usage_assumptions": #{ "type": "string" },
                "breakdown": #{ "type": "string" },
            },
        }},
        "winner_under_50": #{ "type": "string" },
        "notes": #{ "type": "string" },
    },
};

let verdict_schema = #{
    "type": "object",
    "required": ["claim", "real", "reason", "corrected"],
    "properties": #{
        "claim": #{ "type": "string" },
        "real": #{ "type": "boolean" },
        "reason": #{ "type": "string" },
        "corrected": #{ "type": "string" },
        "sources": #{ "type": "array", "items": #{ "type": "string" }, "maxItems": 6 },
    },
};

// ---- User constraints (from interview) ----
let constraints = "USER CONSTRAINTS (hard):\n"
    + "- Budget: $20-50 USD/month total (model + harness)\n"
    + "- Workload: daily coding agent (moderate-high token burn)\n"
    + "- Willing harnesses: Claude Code, Antigravity, Grok Build, Cursor/VS Code agents\n"
    + "- Anthropic official subscription is IMPRACTICAL: account repeatedly suspended\n"
    + "- Acceptable: Google One + Antigravity; third-party aggregators (OpenRouter etc.); gray/shared/proxy AFTER legal survey; survey all legal first\n"
    + "- Location: Mainland China with virtual Mastercard\n"
    + "- Known correct combos: Anthropic official sub + Claude Code; Google One sub + Antigravity\n"
    + "- Known wrong combo: Anthropic official sub + Codex (incompatible)\n"
    + "- Always treat MODEL ACCESS and HARNESS as two separate axes\n"
    + "- Today's date context: 2026-08-12; prefer current 2026 pricing/docs\n";

// ============================================================
phase("Survey paths");
// ============================================================

let path_jobs = [];

// 1) Google One + Antigravity
let p1 = "";
p1 += constraints;
p1 += "\nTASK: Research PATH A — Google One (AI Premium / Ultra / equivalent) + Antigravity as access to Claude Opus 4.6.\n";
p1 += "You MUST use web_search and open_page/web_fetch on primary sources. Do not invent prices.\n";
p1 += "Investigate:\n";
p1 += "1) Does Google One / Gemini / Antigravity currently offer Claude Opus 4.6 (or Claude Opus family)? Exact model name if different.\n";
p1 += "2) Plan name, list price, what is included (limits, rate limits, model rotation).\n";
p1 += "3) How Antigravity works as a harness: install, auth, coding-agent capability, MCP/tools.\n";
p1 += "4) Mainland China feasibility: purchase Google One with virtual Mastercard, region, VPN dependency, account requirements.\n";
p1 += "5) Any China-specific friction (payment decline, Play Store, AI features geo-blocked).\n";
p1 += "6) Whether this path needs a separate Anthropic account (should be NO if truly Google-side).\n";
p1 += "Return path_id='google-one-antigravity'. Include source URLs. Mark confidence low when docs conflict.\n";
path_jobs.push(#{
    prompt: p1,
    label: "path:google-one-antigravity",
    capability_mode: "all",
    output_schema: path_schema,
});

// 2) Third-party aggregators / API
let p2 = "";
p2 += constraints;
p2 += "\nTASK: Research PATH B — third-party aggregators and API routers for Claude Opus 4.6 (OpenRouter, AWS Bedrock, Azure AI Foundry, Together, Fireworks, Poe, etc.).\n";
p2 += "MUST use web_search and open official pricing pages. Compute realistic monthly cost for daily coding-agent use.\n";
p2 += "Investigate:\n";
p2 += "1) Which platforms list claude-opus-4.6 or closest Opus 4.x, with input/output $/MTok.\n";
p2 += "2) OpenRouter specifically: model id, price, any provider routing notes, rate limits.\n";
p2 += "3) Estimated tokens/day for a daily coding agent (state assumptions: e.g. 2-5M input + 0.2-0.5M output tokens/mo) and monthly $.\n";
p2 += "4) Which harnesses can point at these APIs: Claude Code (custom base URL?), Cursor custom models, Continue.dev, Cline, Roo, Aider, Grok Build if any.\n";
p2 += "5) Mainland China + virtual Mastercard: can you pay OpenRouter/etc? KYC? Crypto?\n";
p2 += "6) Terms risk: ToS, account bans, data residency.\n";
p2 += "Return path_id='aggregators-api'. Prefer legal first-party aggregators over gray mirrors.\n";
path_jobs.push(#{
    prompt: p2,
    label: "path:aggregators-api",
    capability_mode: "all",
    output_schema: path_schema,
});

// 3) Cursor / VS Code agent paths
let p3 = "";
p3 += constraints;
p3 += "\nTASK: Research PATH C — Cursor and VS Code coding agents with Claude Opus 4.6 access WITHOUT relying on user's banned Anthropic consumer sub.\n";
p3 += "MUST use web_search and official docs/pricing.\n";
p3 += "Investigate:\n";
p3 += "1) Cursor Pro/Business/Ultra plans: which include Claude Opus models, rate limits, price 2026.\n";
p3 += "2) Does Cursor route Claude through Cursor's own keys (user never needs Anthropic account)?\n";
p3 += "3) Bring-your-own-key (BYOK) options and whether BYOK to Anthropic reintroduces ban risk.\n";
p3 += "4) VS Code extensions that can use Opus via OpenRouter/Google: Cline, Continue, Roo Code, Claude Code VS Code if any.\n";
p3 += "5) China + virtual card feasibility for Cursor subscription.\n";
p3 += "6) Realistic fit in $20-50 budget for daily agent use.\n";
p3 += "Return path_id='cursor-vscode'.\n";
path_jobs.push(#{
    prompt: p3,
    label: "path:cursor-vscode",
    capability_mode: "all",
    output_schema: path_schema,
});

// 4) Claude Code without official Anthropic sub
let p4 = "";
p4 += constraints;
p4 += "\nTASK: Research PATH D — using Claude Code harness WITHOUT a stable official Anthropic Max/Pro subscription (user is repeatedly suspended).\n";
p4 += "MUST use web_search and official Anthropic/Claude Code docs + community reports.\n";
p4 += "Investigate:\n";
p4 += "1) Claude Code auth modes: Anthropic console API key, Claude.ai OAuth, Bedrock, Vertex AI, third-party base URL.\n";
p4 += "2) Can Claude Code talk to Google Vertex Claude models, AWS Bedrock Claude, or OpenRouter-compatible endpoints?\n";
p4 += "3) Is there a supported way to use Claude Code with Google One / Antigravity credentials? (Likely no — document honestly.)\n";
p4 += "4) API-key path costs vs subscription; whether console API keys also get suspended with consumer accounts.\n";
p4 += "5) Risk of new Anthropic account + virtual card from China (ban patterns).\n";
p4 += "Return path_id='claude-code-alt'. Be explicit when something is unsupported.\n";
path_jobs.push(#{
    prompt: p4,
    label: "path:claude-code-alt",
    capability_mode: "all",
    output_schema: path_schema,
});

// 5) Gray / shared / proxy (secondary, after legal map)
let p5 = "";
p5 += constraints;
p5 += "\nTASK: Research PATH E — gray/shared/proxy/relay markets for Opus 4.6 (shared Claude Max seats, reverse proxies, Chinese resellers).\n";
p5 += "Survey existence and typical pricing ONLY for comparison. Flag legal/ToS/security risks clearly.\n";
p5 += "MUST use web_search; treat forum claims as low confidence unless multiple independent sources.\n";
p5 += "Investigate:\n";
p5 += "1) Common product types in CN communities: shared Max seats, API reverse proxy (中转), codex/claude relay panels.\n";
p5 += "2) Typical monthly prices in USD/CNY for 'Opus' access in 2026 discussion.\n";
p5 += "3) Failure modes: sudden death of endpoint, credential theft, quality downgrade, ToS ban cascading.\n";
p5 += "4) Which harnesses people wire these into (Claude Code base_url, Cursor custom, Antigravity — usually N/A).\n";
p5 += "5) Explicitly rank below legal options unless cost is dramatically lower AND user accepts risk.\n";
p5 += "Return path_id='gray-proxy'. Do NOT provide instructions to steal accounts or commit fraud. Describe market landscape only.\n";
path_jobs.push(#{
    prompt: p5,
    label: "path:gray-proxy",
    capability_mode: "all",
    output_schema: path_schema,
});

// 6) Official Anthropic (document impracticality + compatibility)
let p6 = "";
p6 += constraints;
p6 += "\nTASK: Research PATH F — official Anthropic Claude Pro/Max subscription + Claude Code (the 'correct' official combo) — primarily to document pricing, limits, and WHY it is impractical for this user.\n";
p6 += "MUST use web_search and official anthropic.com / claude.com pricing.\n";
p6 += "Investigate:\n";
p6 += "1) Current Pro/Max prices, Opus 4.6 availability on Max, usage limits.\n";
p6 += "2) Compatibility: works with Claude Code; does NOT unlock Codex with Anthropic sub (confirm or refute).\n";
p6 += "3) Known suspension/ban triggers relevant to CN + virtual cards (public reports only).\n";
p6 += "4) Why this path is baseline comparison even if user cannot use it.\n";
p6 += "Return path_id='anthropic-official-baseline'.\n";
path_jobs.push(#{
    prompt: p6,
    label: "path:anthropic-official",
    capability_mode: "all",
    output_schema: path_schema,
});

log("Launching 6 path surveys in parallel");
let path_results = parallel(path_jobs);

let paths = [];
let path_summaries = [];
for r in path_results {
    if r != () && r.success && r.output != () {
        paths.push(r.output);
        let s = r.output.path_id + " | cost=" + r.output.monthly_cost_usd + " | " + r.output.summary;
        path_summaries.push(s);
    } else {
        path_summaries.push("FAILED_PATH_SURVEY");
    }
}
log("Path surveys done: " + paths.len().to_string() + " ok");

// ============================================================
phase("Compatibility");
// ============================================================

let matrix_prompt = "";
matrix_prompt += constraints;
matrix_prompt += "\nTASK: Build a MODEL ACCESS x HARNESS compatibility matrix for Claude Opus 4.6.\n";
matrix_prompt += "Use web_search / docs for anything uncertain. Incorporate these survey findings:\n";
let i = 0;
for s in path_summaries {
    matrix_prompt += "- " + s + "\n";
    i += 1;
}
// Include compact path details
for p in paths {
    matrix_prompt += "\n### " + p.path_id + "\n";
    matrix_prompt += "opus_access: " + p.opus_access + "\n";
    matrix_prompt += "cost: " + p.monthly_cost_usd + "\n";
    matrix_prompt += "china: " + p.china_feasibility + "\n";
    if p.harnesses_supported != () {
        matrix_prompt += "harnesses_claimed: " + json_encode(p.harnesses_supported) + "\n";
    }
}
matrix_prompt += "\nRows must cover at least these model-access modes x harnesses:\n";
matrix_prompt += "Model access: Google One/Antigravity credentials, Anthropic Pro/Max OAuth, Anthropic API key, OpenRouter/API aggregator, Cursor included models, Bedrock/Vertex, gray reverse-proxy base_url.\n";
matrix_prompt += "Harnesses: Claude Code, Antigravity, Cursor agent, VS Code Cline/Continue, Codex, Grok Build.\n";
matrix_prompt += "Mark compatible as yes/no/partial. Include the known wrong combo Anthropic sub + Codex as incompatible unless evidence overturns it.\n";
matrix_prompt += "Explain WHY each combo works or fails (auth protocol, vendor lock, different product backends).\n";

let matrix_r = agent(matrix_prompt, #{
    label: "compat-matrix",
    capability_mode: "all",
    output_schema: matrix_schema,
});

let matrix = #{};
if matrix_r != () && matrix_r.success && matrix_r.output != () {
    matrix = matrix_r.output;
} else {
    matrix = #{ rows: [], notes: "matrix agent failed" };
}

// ============================================================
phase("Cost model");
// ============================================================

let cost_prompt = "";
cost_prompt += constraints;
cost_prompt += "\nTASK: Cost-model the viable paths for a DAILY coding agent user with $20-50/mo hard ceiling.\n";
cost_prompt += "Use survey data + web_search for any missing token prices. State token assumptions explicitly.\n";
cost_prompt += "For each realistic combo (model access + compatible harness), estimate monthly USD.\n";
cost_prompt += "Prefer subscription flat-rate paths when token burn would blow past $50 on API.\n";
cost_prompt += "Disqualify pure Anthropic consumer sub for this user (suspension risk) but keep it as cost baseline row.\n";
cost_prompt += "Include at least: Google One+Antigravity; OpenRouter API + Claude-Code-or-Cursor-BYOK; Cursor included Opus if any; gray shared seat (flagged); Anthropic Max baseline.\n";
cost_prompt += "Set fits_budget true only if est cost can stay <= $50 under daily agent use with stated assumptions.\n";
cost_prompt += "winner_under_50 = short name of best practical option for THIS user (not the theoretical cheapest that is unusable).\n";
cost_prompt += "\nPath data:\n";
for p in paths {
    cost_prompt += "- " + p.path_id + ": " + p.monthly_cost_usd + " | " + p.summary + "\n";
}
if matrix.notes != () {
    cost_prompt += "\nMatrix notes: " + matrix.notes + "\n";
}

let cost_r = agent(cost_prompt, #{
    label: "cost-model",
    capability_mode: "all",
    output_schema: cost_schema,
});

let cost = #{};
if cost_r != () && cost_r.success && cost_r.output != () {
    cost = cost_r.output;
} else {
    cost = #{ scenarios: [], winner_under_50: "unknown", notes: "cost agent failed" };
}

// ============================================================
phase("Verify");
// ============================================================

// Collect top claims to verify
let claims_to_check = [];

// Always verify core compatibility claims
claims_to_check.push("Google One subscription + Antigravity can access Claude Opus 4.6 (or current Opus) without an Anthropic account");
claims_to_check.push("Anthropic official subscription does not unlock OpenAI Codex harness (incompatible)");
claims_to_check.push("Claude Code can be pointed at OpenRouter or third-party Anthropic-compatible base URLs for Opus 4.6");
claims_to_check.push("Cursor subscription includes Claude Opus models without requiring user Anthropic login");

// Pull high-impact claims from path surveys
for p in paths {
    if p.claims != () {
        for c in p.claims {
            if c.claim != () && claims_to_check.len() < 10 {
                // Prefer medium/high impact pricing or access claims
                claims_to_check.push(c.claim);
            }
        }
    }
}

// Cap claims
let verify_jobs = [];
let ci = 0;
for claim in claims_to_check {
    if ci >= 8 {
        break;
    }
    let vp = "";
    vp += "Adversarially verify this claim about Claude Opus 4.6 access/pricing (date context 2026-08).\n";
    vp += "Claim: " + claim + "\n";
    vp += "Use web_search and open official docs/pricing pages. Set real=true ONLY with concrete primary-source evidence.\n";
    vp += "If partially true, set real=false and put the accurate version in corrected.\n";
    vp += "If evidence is only forums/hearsay, real=false and explain.\n";
    vp += "User context: Mainland China, virtual Mastercard, Anthropic account repeatedly suspended.\n";
    verify_jobs.push(#{
        prompt: vp,
        label: "verify:" + ci.to_string(),
        capability_mode: "all",
        output_schema: verdict_schema,
    });
    ci += 1;
}

log("Verifying " + verify_jobs.len().to_string() + " claims");
let verdicts = parallel(verify_jobs);

let verified = [];
let refuted = [];
for v in verdicts {
    if v != () && v.success && v.output != () {
        if v.output.real == true {
            verified.push(v.output);
        } else {
            refuted.push(v.output);
        }
    }
}

// ============================================================
phase("Synthesize");
// ============================================================

let synth = "";
synth += constraints;
synth += "\nTASK: Write a comprehensive PLAYBOOK report: Cheapest practical Claude Opus 4.6 for this user.\n";
synth += "Structure in markdown:\n";
synth += "1) Executive recommendation (top 1-3 combos ranked for THIS user)\n";
synth += "2) Model access x harness compatibility table (use verified facts)\n";
synth += "3) Path deep-dives with cost, setup outline, China/virtual-card friction\n";
synth += "4) What NOT to do (wrong combos, suspension traps)\n";
synth += "5) Budget scenarios under $20-50 for daily coding agent\n";
synth += "6) Decision tree: if A fails try B\n";
synth += "7) Open uncertainties / what user should test next (1-hour experiments)\n";
synth += "Rules: Prefer legal options first. Gray only as last-resort comparison. Never recommend fraud.\n";
synth += "Do not invent prices — use survey + verification data; mark unknowns.\n";
synth += "\n=== PATH SURVEYS ===\n";
for p in paths {
    synth += "\n## " + p.path_id + "\n";
    synth += json_encode(p) + "\n";
}
synth += "\n=== MATRIX ===\n";
synth += json_encode(matrix) + "\n";
synth += "\n=== COST ===\n";
synth += json_encode(cost) + "\n";
synth += "\n=== VERIFIED CLAIMS ===\n";
synth += json_encode(verified) + "\n";
synth += "\n=== REFUTED/UNPROVEN CLAIMS ===\n";
synth += json_encode(refuted) + "\n";
synth += "\nWrite the full report as your final message (markdown). Also call write tools if available — but your final textual report is the deliverable.\n";

let report_r = agent(synth, #{
    label: "synthesize-report",
    capability_mode: "all",
});

let report_text = "# Survey incomplete\n\nSynthesis agent failed. Raw path count: " + paths.len().to_string();
if report_r != () && report_r.success && report_r.output != () {
    if type_of(report_r.output) == "string" {
        report_text = report_r.output;
    } else {
        report_text = json_encode(report_r.output);
    }
}

// Persist to workflow scratch (must be string content)
let report_path = write_scratch_file("cheapest-opus-46-playbook.md", report_text);

// Also try writing into vault for the user
let vault_write_prompt = "";
vault_write_prompt += "Write the following report to the OrbitOS vault path:\n";
vault_write_prompt += "90_Plans/Cheapest_Opus_4.6_Playbook.md\n";
vault_write_prompt += "Create parent dirs if needed. Use the write/file tools. Content follows after the separator line.\n";
vault_write_prompt += "----REPORT----\n";
vault_write_prompt += report_text;

let vw = agent(vault_write_prompt, #{
    label: "persist-vault",
    capability_mode: "all",
});

let vault_ok = vw != () && vw.success;

let winner_name = "unknown";
if cost.winner_under_50 != () {
    winner_name = cost.winner_under_50;
}

complete(#{
    summary: "Cheapest Opus 4.6 survey complete",
    report_scratch: report_path,
    vault_written: vault_ok,
    paths_ok: paths.len(),
    claims_verified: verified.len(),
    claims_refuted: refuted.len(),
    winner: winner_name,
});
