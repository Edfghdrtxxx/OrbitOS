# KV cache ratio and checking methods

## Export metadata (verbatim)

```json
{
  "uuid": "712386b5-2704-495d-89d6-025b10c4456f",
  "name": "KV cache ratio and checking methods",
  "summary": "**Conversation Overview**\n\nThe person asked about KV cache ratio — what it is and how to check it — in the context of an API proxy dashboard (appearing to be a one-api or new-api style interface). Claude explained the concept of KV cache ratio as a measure of prompt caching effectiveness, provided the formula (cache reads divided by total of cache reads plus cache writes), and applied it directly to the dashboard metrics the person had visible: 缓存创建 (cache creation) and 缓存读取 (cache read) figures for both today and total periods.\n\nClaude calculated the person's today ratio at approximately 85.9% and overall ratio at approximately 88.7%, characterized both as very healthy, and provided a reference table interpreting ratio ranges. Claude also offered practical guidance on how to maintain or improve cache hit rates, including keeping system prompts static, placing stable content at the top of prompts, and using longer system prompts (1024+ tokens). Domain-specific terminology used included: KV cache, cache hit ratio, prompt caching, system prompts, and token consumption.",
  "created_at": "2026-03-09T07:41:46.015160Z",
  "updated_at": "2026-03-09T07:42:01.906436Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-09T07:41:47.343735Z

Do you know KV cache ratio?
How to check it?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd18b-8074-72e0-8808-2d472be44c7a",
  "updated_at": "2026-03-09T07:41:47.343735Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "c3ac805f-6c06-4d73-b8fc-522a77e3c860",
      "file_name": "1773042080973_image.png"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-09T07:42:01.906436Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about KV cache ratio and how to check it, seemingly in the context of this dashboard (which appears to be a one-api or new-api proxy dashboard).

From the dashboard I can see:
- 缓存创建 (Cache creation): 31.2K (today), 1.08M (total)
- 缓存读取 (Cache read): 189.4K (today), 8.44M (total)

KV cache ratio = cache reads / (cache reads + cache creation) or sometimes defined differently.

Let me explain the KV cache ratio concept and how to calculate it from the data shown.

</details>

## KV Cache Ratio

**KV cache ratio** is a measure of how effectively your requests are hitting cached context (prompt caching), rather than re-processing tokens from scratch.

### Formula

$$\text{Cache Hit Ratio} = \frac{\text{缓存读取 (Cache Read)}}{\text{缓存读取 + 缓存创建 (Cache Create)}}$$

---

### From Your Dashboard Data

| Metric | Today | Total |
|---|---|---|
| 缓存创建 (Cache Write) | 31.2K | 1.08M |
| 缓存读取 (Cache Read) | 189.4K | 8.44M |

**Today's ratio:**
$$\frac{189.4K}{189.4K + 31.2K} = \frac{189.4}{220.6} \approx \textbf{85.9\%}$$

**Overall ratio:**
$$\frac{8.44M}{8.44M + 1.08M} = \frac{8.44}{9.52} \approx \textbf{88.7\%}$$

---

### What It Means

| Ratio | Interpretation |
|---|---|
| > 80% | Excellent — most tokens served from cache |
| 50–80% | Good |
| < 50% | Low — consider optimizing system prompts |

Your cache hit rate (~86–89%) is **very healthy**, meaning your system prompts are stable and long enough to benefit significantly from caching. This is why your cost is relatively low despite 9.86M total tokens consumed.

### How to Improve It
- Keep **system prompts static** (don't vary them per request)
- Place **stable content at the top** of your prompt
- Use **longer system prompts** (cache is more beneficial with 1024+ tokens)

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019cd18b-8074-722b-9e32-43700aa67d1a",
  "updated_at": "2026-03-09T07:42:01.906436Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019cd18b-8074-72e0-8808-2d472be44c7a"
}
```

</details>
