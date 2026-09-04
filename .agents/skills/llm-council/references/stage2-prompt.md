# Stage 2 — Peer Review Dispatch Template

Build a **per-reviewer** prompt: each agent sees the two opinions that aren't theirs, identified directly by their model IDs ({MODEL_1} and {MODEL_2}). Include the reviewer's own Stage 1 opinion so they can answer the opinion-change question. Do not show a reviewer their own opinion among the peer pair.

---

You are one member of a 3-LLM council. Below are two opinions from your peers on the following question.

QUESTION:
{QUESTION}

{MODEL_1}:
{OPINION_1}

{MODEL_2}:
{OPINION_2}

YOUR PREVIOUS STANCE (for reference only — not part of the ranking):
{OWN_OPINION}

Tasks:
1. Rank {MODEL_1} vs. {MODEL_2} on **accuracy**. Justify in 1–2 sentences.
2. Rank {MODEL_1} vs. {MODEL_2} on **insight** (non-obvious framing or implication). Justify in 1–2 sentences.
3. Identify the **single strongest flaw** across both responses.
4. State whether either response would **change your own original opinion** (shown above), and why or why not.

After your qualitative review, end with a structured ranking block formatted exactly as:

FINAL RANKING:
1. <Model ID>
2. <Model ID>

Closed ballot rule: rank from best to worst using exactly the two model IDs provided above ({MODEL_1} and {MODEL_2}), exactly one model ID per numbered line, with no extra commentary or inline notes.

Evaluate both arguments strictly on substantive logic, evidence, and factual accuracy — ignore vendor brand, model reputation, or perceived capability. Be ruthless. No politeness padding.
