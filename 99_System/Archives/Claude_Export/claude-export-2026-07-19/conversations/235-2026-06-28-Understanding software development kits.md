# Understanding software development kits

## Export metadata (verbatim)

```json
{
  "uuid": "b9dc4102-066b-40e5-afac-1a424b69a9a8",
  "name": "Understanding software development kits",
  "summary": "**Conversation Overview**\n\nThe person asked for an introductory explanation of SDK (Software Development Kit) and then explored how SDKs relate to agents and agent applications. The conversation moved through three conceptual questions: what an SDK is, whether an agent stripped down equals an SDK, and whether an SDK can be used to build an agent application.\n\nClaude explained that an SDK is a pre-packaged toolbox companies provide to developers, containing libraries, APIs, documentation, and sample code, using a furniture kit analogy to ground the concept. When the person asked whether stripping down an agent leaves an SDK, Claude clarified that the two concepts operate on different axes — SDK is a delivery format (what you build with), while an agent is a behavioral architecture (what you build). The person then confirmed their understanding by asking whether an SDK can be used to build an agent application, which Claude affirmed as correct, reinforcing the build-with relationship rather than a contains relationship. Claude used a house-and-tools analogy to illustrate that the SDK is the construction toolkit, not a component inside the finished agent, and noted that the raw API is an alternative to the SDK for the same purpose.\n\nThe person demonstrates a pattern of testing conceptual boundaries through precise, stripping-down-style questions, moving quickly from definition to relational reasoning. No corrections to Claude's approach were requested.",
  "created_at": "2026-06-28T09:55:27.787995Z",
  "updated_at": "2026-06-28T10:01:33.014442Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-06-28T09:55:28.742801Z

What's SDK?
Explain in an introductory

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f0da7-cc47-755d-a261-ee114bbab629",
  "updated_at": "2026-06-28T09:55:28.742801Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "ba48b8c1-94bc-4c74-a9e7-0f7a0b8023e0",
      "file_name": "Screenshot_2026-06-28-17-54-44-798_com.twitter.android.jpg"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-06-28T09:55:38.496349Z

SDK stands for **Software Development Kit**.

Think of it as a toolbox a company gives you to build software that works with their product. Instead of figuring out everything from scratch, you get pre-made parts.

A typical SDK contains:

- **Libraries** — ready-written code you can plug into your own program (e.g., a function that says "send this to the AI and get a response")
- **APIs** — the defined ways your code talks to the company's service
- **Documentation** — instructions explaining how the pieces work
- **Tools/samples** — example code, debuggers, helpers to get you started

A simple analogy: if you wanted to build furniture, an SDK is like a kit with the screws, pre-cut wood, an instruction manual, and the right screwdriver — versus chopping down a tree yourself.

In the screenshot's context, "Antigravity SDK" would be the option for developers who want to **write their own code** that integrates Antigravity's capabilities into their own apps — as opposed to the CLI (a command-line tool you type commands into) or the IDE (a full coding application with a visual interface). The SDK is the most flexible, build-it-yourself option of the four "surfaces."

Quick note on terms you'll see alongside it:
- **CLI** = Command-Line Interface (you type text commands)
- **IDE** = Integrated Development Environment (a full app for writing code)
- **API** = Application Programming Interface (the rules for how programs talk to each other)

Want me to explain how an SDK differs from an API specifically? That's the distinction people most often find fuzzy.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f0da7-cc47-755d-a261-ee1283c478bb",
  "updated_at": "2026-06-28T09:55:38.496349Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f0da7-cc47-755d-a261-ee114bbab629"
}
```

</details>

### 3. human — 2026-06-28T09:58:41.810908Z

I know agent. If we strip agent down, is the remainder SDK?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f0daa-bf31-71c5-865e-39185fee7a74",
  "updated_at": "2026-06-28T09:58:41.810908Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f0da7-cc47-755d-a261-ee1283c478bb"
}
```

</details>

### 4. human — 2026-06-28T10:01:21.554544Z

But I can build up an agent application with SDK?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019f0dad-2f2d-700b-b0eb-db0e3012d0b8",
  "updated_at": "2026-06-28T10:01:21.554544Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019f0daa-bf31-71c5-865e-3919c707bc57"
}
```

</details>
