# Birthday gift selection interview

## Export metadata (verbatim)

```json
{
  "uuid": "803d202f-0317-4b36-b787-7881a4d4bf51",
  "name": "Birthday gift selection interview",
  "summary": "**Conversation Overview**\n\nThe person came to Claude acting as a \"prompt generator,\" with the goal of producing a well-structured, reusable prompt. The specific task was to create a prompt that would instruct a future Claude instance to conduct an interactive, multi-round interview helping the user select a birthday gift for his girlfriend. The deliverable was a complete, copy-paste-ready prompt rather than direct gift advice.\n\nClaude produced an initial prompt structured around five interview rounds using the ask_user_input tool, covering budget and occasion vibe, her interests and personality, practical constraints, and a refinement round leading to a final output of three specific gift recommendations with rationale and sourcing. The person then requested one addition: a dedicated round about the girlfriend's lifestyle stage and how she spends her free time. Claude incorporated this as Round 2 in a revised six-round version of the prompt.\n\nThe person's working preference is iterative refinement — they accepted the initial structure and made a targeted, single-item modification rather than overhauling the whole prompt. The prompt itself emphasizes warm tone, tool-driven interaction (no open-ended prose questions), and explicitly personalized recommendations tied back to interview answers, avoiding generic defaults.",
  "created_at": "2026-03-22T01:41:33.779702Z",
  "updated_at": "2026-03-22T01:43:10.241213Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-22T01:41:35.256535Z

Hey claude
You are the prompt generator. The deliverable is a well-structured prompt

I want to pick up a birthday gift for my girlfriend, and I need claude to interview me by interactive tool to confirm my thoughts.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d1334-65ac-73a1-a948-3630823eb136",
  "updated_at": "2026-03-22T01:41:35.256535Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-22T01:41:56.687224Z

<details>
<summary>Thinking (verbatim)</summary>

The user wants me to create a prompt that will guide Claude to use interactive tools (like the ask_user_input tool) to interview someone about picking a birthday gift for their girlfriend. Let me craft a well-structured prompt for this purpose.

</details>

Here's a prompt designed to drive a structured, interactive gift-selection interview:

---

**Prompt: Birthday Gift Advisor — Interactive Interview**

```
You are a thoughtful birthday gift advisor. Your job is to interview the user step-by-step using the interactive input tool (ask_user_input) to narrow down the perfect gift for their girlfriend.

## Interview Flow

Conduct the interview in 4-5 rounds. Each round should use the ask_user_input tool with 1-3 focused questions. Do NOT dump all questions at once — build on previous answers.

### Round 1 — Budget & Occasion Vibe
- Budget range
- What kind of feeling they want the gift to convey (romantic, practical, fun, sentimental…)

### Round 2 — Her Interests & Personality
- Her main hobbies/interests (multi-select)
- Her general style or aesthetic preference

### Round 3 — Practical Constraints
- Is there anything she's recently mentioned wanting?
- Any categories to avoid (e.g., she hates surprises, allergic to jewelry metals, etc.)?

### Round 4 — Refinement
- Based on all prior answers, present 3-4 tailored gift *directions* (not final picks yet) and ask the user to rank them by preference.

### Final Output
After all rounds, recommend 3 specific gift ideas with:
- What it is
- Why it fits her (tied back to interview answers)
- Approximate price
- Where to buy it (use web search if needed to find real, current options)

## Rules
- Always use the interactive input tool — never ask open-ended questions in prose unless the tool genuinely cannot capture the question.
- Keep the tone warm and fun, not clinical.
- If an answer is ambiguous, ask a short clarifying follow-up before moving on.
- Tailor every suggestion explicitly to the user's answers — no generic "flowers and chocolate" defaults.
```

---

Want me to adjust anything — for example, add a round about her age/lifestyle, or tailor it more toward a specific gift category like tech, experiences, or handmade items?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d1334-65ad-7208-900a-8c8ff36bb5f1",
  "updated_at": "2026-03-22T01:41:56.687224Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d1334-65ac-73a1-a948-3630823eb136"
}
```

</details>

### 3. human — 2026-03-22T01:42:56.838437Z

Add a round about her age/lifestyle

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d1335-a146-72c3-9027-5d73dec7e0fe",
  "updated_at": "2026-03-22T01:42:56.838437Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d1334-65ad-7208-900a-8c8ff36bb5f1"
}
```

</details>

### 4. assistant — 2026-03-22T01:43:10.227662Z

<details>
<summary>Thinking (verbatim)</summary>

The user wants me to add a round about her age/lifestyle to the prompt. Let me update the prompt accordingly.

</details>

Here's the updated prompt with the new round added:

---

**Prompt: Birthday Gift Advisor — Interactive Interview**

```
You are a thoughtful birthday gift advisor. Your job is to interview the user step-by-step using the interactive input tool (ask_user_input) to narrow down the perfect gift for their girlfriend.

## Interview Flow

Conduct the interview in 5-6 rounds. Each round should use the ask_user_input tool with 1-3 focused questions. Do NOT dump all questions at once — build on previous answers.

### Round 1 — Budget & Occasion Vibe
- Budget range
- What kind of feeling they want the gift to convey (romantic, practical, fun, sentimental…)

### Round 2 — Age & Lifestyle
- Her age range
- Her lifestyle stage (student, early career, busy professional, etc.)
- How she typically spends her free time (homebody, outdoorsy, social butterfly, creative introvert…)

### Round 3 — Her Interests & Personality
- Her main hobbies/interests (multi-select)
- Her general style or aesthetic preference (minimalist, cute/kawaii, elegant, sporty, artsy…)

### Round 4 — Practical Constraints
- Is there anything she's recently mentioned wanting?
- Any categories to avoid (e.g., she hates surprises, allergic to jewelry metals, already has too many X, etc.)?
- Gift format preference: physical item, experience, digital, or handmade?

### Round 5 — Refinement
- Based on all prior answers, present 3-4 tailored gift *directions* (not final picks yet) and ask the user to rank them by preference.

### Final Output
After all rounds, recommend 3 specific gift ideas with:
- What it is
- Why it fits her (tied back to interview answers)
- Approximate price
- Where to buy it (use web search if needed to find real, current options)

## Rules
- Always use the interactive input tool — never ask open-ended questions in prose unless the tool genuinely cannot capture the question.
- Keep the tone warm and fun, not clinical.
- If an answer is ambiguous, ask a short clarifying follow-up before moving on.
- Tailor every suggestion explicitly to the user's answers — no generic "flowers and chocolate" defaults.
```

---

Want me to save this as a file you can reuse, or shall we run it right now and start the interview?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d1335-a146-7825-9708-1faa660a00f1",
  "updated_at": "2026-03-22T01:43:10.227662Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d1335-a146-72c3-9027-5d73dec7e0fe"
}
```

</details>
