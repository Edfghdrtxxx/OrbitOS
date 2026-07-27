# Generalized momentum sign convention

## Export metadata (verbatim)

```json
{
  "uuid": "54edeea7-293c-47ac-a41e-a32e468ae5aa",
  "name": "Generalized momentum sign convention",
  "summary": "**Conversation Overview**\n\nThe person engaged Claude in a technical discussion about Hamiltonian mechanics, specifically focused on understanding the asymmetric signs in Hamilton's canonical equations and notation used in a figure (apparently from a Wikipedia article on Hamiltonian mechanics). Their initial questions were: why the generalized momentum carries a negative sign in Hamilton's equations while the generalized position carries a positive one, and what the symbol \"f\" denotes in the figure.\n\nClaude explained that \"f\" serves as a generic placeholder for the Hamiltonian H in the notation demonstration, and derived the sign asymmetry from the Legendre transform structure of H, showing step-by-step how the minus sign emerges from the differential of H defined as the sum of p_i q̇_i minus the Lagrangian L. The person then pushed for greater precision on two points: a more specific derivation of the two equations introduced in Step 1 of the derivation, and clarification about why no summation symbol appears on the partial derivative of L. Claude acknowledged that the original explanation had imprecisely compressed two logically distinct steps — the definition of conjugate momentum (p_i ≡ ∂L/∂q̇_i, a postulate) versus the result derived from the Euler-Lagrange equation (ṗ_i = ∂L/∂q_i). Claude also clarified that no summation is needed on ∂L/∂q_i because the Euler-Lagrange equations constitute a family of N independent equations, one per degree of freedom, with the partial derivative operator already isolating a single variable. The person demonstrated a preference for rigorous, step-by-step derivations with clear logical distinctions between definitions and derived results, and actively identified gaps or imprecisions in Claude's explanations.",
  "created_at": "2026-03-30T01:51:44.360845Z",
  "updated_at": "2026-03-30T02:01:37.031442Z",
  "account": {
    "uuid": "c1a9a5f8-a09c-42e7-8de7-ad0174488170"
  }
}
```

## Transcript

### 1. human — 2026-03-30T01:51:45.643621Z

Why does a negative sign appear before the generalized momentum whereas the generalized position carries a positive one? What does "f" denote in the figure?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3c70-96b6-7835-82ef-e389381b1e3f",
  "updated_at": "2026-03-30T01:51:45.643621Z",
  "attachments": [],
  "files": [
    {
      "file_uuid": "019d3c5e-7bbb-7201-abff-add93b43d890",
      "file_name": "1774834317641_image.png"
    }
  ],
  "parent_message_uuid": "00000000-0000-4000-8000-000000000000"
}
```

</details>

### 2. assistant — 2026-03-30T01:52:22.750650Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user is asking about the notation in the image, specifically:
1. Why does a negative sign appear before the generalized momentum (ṗ = -∂f/∂q) whereas the generalized position carries a positive one?
2. What does "f" denote in the figure?

The image shows a Wikipedia excerpt about Hamiltonian mechanics notation. The key equation shown is:

ṗ = -∂f/∂q ⟺ ṗᵢ = -∂f/∂qᵢ

But wait — what is "f" here? The image doesn't explicitly define f in the visible portion. 

Looking at this more carefully, it seems like "f" is being used as a generic placeholder function to demonstrate the notation convention for boldface versus component notation. In the context of Hamilton's equations, this would typically represent the Hamiltonian H, where the equations take the form ṗᵢ = -∂H/∂qᵢ and q̇ᵢ = +∂H/∂pᵢ, but the image appears to be illustrating the general notation pattern rather than defining the specific function. The negative sign arises from the Legendre transform structure of the Hamiltonian — since H is defined as p·q̇ - L, taking its differential naturally produces opposite signs for the q and p derivatives, which is why q̇ᵢ has a positive sign while ṗᵢ has a negative sign. Let me check the image to see what specific context the user is working with.

The image uses f instead of H, which appears to be notation from a Wikipedia article on Hamiltonian mechanics where f represents the Hamiltonian. The boldface notation is just showing that ṗ = -∂f/∂q means ṗᵢ = -∂f/∂qᵢ for each component i, though the image doesn't explicitly define what f is in the visible portion.

Now I should be careful to distinguish what's actually shown from what I'm inferring based on context, and work through the negative sign derivation from first principles rather than just asserting it.

</details>

Two separate questions, so let me address them in order.

---

## What does *f* denote?

The visible excerpt **does not explicitly define *f***. This is an important observation your preferences rightly demand. Based on context — this is the notation section of Wikipedia's *Hamiltonian mechanics* article — *f* is a stand-in for the **Hamiltonian *H*(q, p, t)**. The passage is not introducing a new quantity; it is using *f* as a generic function to demonstrate how the boldface-vs-component notation works. The actual physics equation being illustrated is:

$$\dot{p}_i = -\frac{\partial H}{\partial q_i}$$

---

## Why the asymmetric signs?

This is not arbitrary. The asymmetry is a direct consequence of how the Hamiltonian is constructed via the **Legendre transform** of the Lagrangian.

**Step 1 — Recall the Lagrangian side.**
The Euler-Lagrange equation and the definition of conjugate momentum give:

$$p_i \equiv \frac{\partial L}{\partial \dot{q}_i}, \qquad \dot{p}_i = \frac{\partial L}{\partial q_i}$$

**Step 2 — Define the Hamiltonian.**
The Hamiltonian is defined as (Goldstein, Poole & Safko, *Classical Mechanics*, 3rd ed., §8.1):

$$H(\mathbf{q}, \mathbf{p}, t) \equiv \sum_i p_i \dot{q}_i - L(\mathbf{q}, \dot{\mathbf{q}}, t)$$

**Step 3 — Take the total differential.**

$$dH = \sum_i \dot{q}_i\, dp_i + \sum_i p_i\, d\dot{q}_i - \frac{\partial L}{\partial q_i}dq_i - \frac{\partial L}{\partial \dot{q}_i}d\dot{q}_i - \frac{\partial L}{\partial t}dt$$

The $p_i\, d\dot{q}_i$ and $\frac{\partial L}{\partial \dot{q}_i}d\dot{q}_i$ terms cancel by definition of $p_i$, leaving:

$$dH = \sum_i \dot{q}_i\, dp_i - \sum_i \dot{p}_i\, dq_i - \frac{\partial L}{\partial t}dt$$

**Step 4 — Read off Hamilton's equations by matching coefficients.**

$$\dot{q}_i = +\frac{\partial H}{\partial p_i}, \qquad \dot{p}_i = -\frac{\partial H}{\partial q_i}$$

The **negative sign on $\dot{p}_i$** emerges because *H* was constructed as $\sum p_i \dot{q}_i - L$: the Lagrangian enters with a **minus sign**, so its $q$-derivative flips sign when it becomes an $H$-derivative.

---

## Intuition for the asymmetry

| Quantity | Role in *H* | Sign |
|---|---|---|
| $p_i$ | appears as $+p_i \dot{q}_i$ | $\dot{q}_i = +\partial H/\partial p_i$ |
| $q_i$ | enters only through $-L$ | $\dot{p}_i = -\partial H/\partial q_i$ |

The coordinates $q_i$ and momenta $p_i$ are **not symmetric inputs** to *H* — *p* was elevated to an independent variable, while *q* still enters through $-L$. That structural asymmetry in the Legendre transform is exactly what produces the opposite signs.

---

**Source:** The derivation above follows Goldstein, Poole & Safko, *Classical Mechanics* (3rd ed.), Chapter 8 — the standard graduate-level primary reference for this material.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3c70-96b6-7c2b-a031-fc30045782de",
  "updated_at": "2026-03-30T01:52:22.750650Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3c70-96b6-7835-82ef-e389381b1e3f"
}
```

</details>

### 3. human — 2026-03-30T02:01:09.158046Z

1. Explain this part more specifically. How does it come?
2. Where is the summation symbol for the partial derivative of L?

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3c79-2c84-75d9-95f2-373756016aa7",
  "updated_at": "2026-03-30T02:01:09.158046Z",
  "attachments": [
    {
      "file_name": "excerpt_from_previous_claude_message.txt",
      "file_size": 102,
      "file_type": "txt",
      "extracted_content": "Recall the Lagrangian side. The Euler-Lagrange equation and the definition of conjugate momentum give:"
    }
  ],
  "files": [
    {
      "file_uuid": "3c74e787-e74e-40b9-90ac-15e0fd547784",
      "file_name": "excerpt_from_previous_claude_message.txt"
    }
  ],
  "parent_message_uuid": "019d3c70-96b6-7c2b-a031-fc30045782de"
}
```

</details>

### 4. assistant — 2026-03-30T02:01:37.018995Z

 

<details>
<summary>Thinking (verbatim)</summary>

The user has two questions about my previous explanation:

1. They want a more specific explanation of how the Euler-Lagrange equation and definition of conjugate momentum give those two equations.
2. They're asking about the missing summation symbol in the partial derivative of L.

Let me address both carefully.

**Question 1: How do those two equations come?**

The two equations I stated were:
$$p_i \equiv \frac{\partial L}{\partial \dot{q}_i}, \qquad \dot{p}_i = \frac{\partial L}{\partial q_i}$$

The first is the *definition* of conjugate momentum — this is just the definition.


The second equation follows directly from the Euler-Lagrange equation. When I rearrange it to isolate the time derivative of the partial with respect to $\dot{q}_i$, I get exactly $\dot{p}_i = \frac{\partial L}{\partial q_i}$, since $p_i$ is defined as that partial derivative.

Now, regarding the summation — when the Euler-Lagrange equations are written for individual components, there's no summation symbol because each equation applies independently to a single index. The summation only appears in other contexts, like when defining the Hamiltonian as the sum of $p_i \dot{q}_i$ minus the Lagrangian. I'm realizing my earlier explanation might have glossed over this distinction. The partial derivative operator inherently isolates a single variable, so there's no need for summation—the Euler-Lagrange equation is simply one equation per degree of freedom, not summed over all of them.

</details>

Good questions — let me be precise about each.

---

## 1. Where do those two equations actually come from?

I stated two things side by side without clearly distinguishing their origins. They are **not both from the Euler-Lagrange equation** — they have different statuses.

### Equation 1 — A definition, not derived

$$p_i \equiv \frac{\partial L}{\partial \dot{q}_i}$$

This is the **definition** of the generalized (conjugate) momentum. It is a postulate of Lagrangian mechanics, not something proved. You are *declaring* that the quantity $\partial L / \partial \dot{q}_i$ shall be called the momentum conjugate to $q_i$.

---

### Equation 2 — Derived from the Euler-Lagrange equation

The Euler-Lagrange equation (itself derived from Hamilton's principle $\delta S = 0$) states, for each $i$:

$$\frac{d}{dt}\left(\frac{\partial L}{\partial \dot{q}_i}\right) - \frac{\partial L}{\partial q_i} = 0$$

Now substitute the definition $p_i \equiv \partial L / \partial \dot{q}_i$ into the first term:

$$\frac{d}{dt}p_i - \frac{\partial L}{\partial q_i} = 0$$

$$\boxed{\dot{p}_i = \frac{\partial L}{\partial q_i}}$$

That is the complete derivation. My previous phrasing "the Euler-Lagrange equation and the definition give..." compressed these two distinct steps into one line without signaling they play different logical roles — that was imprecise on my part.

---

## 2. Why is there no summation on $\partial L / \partial q_i$?

This is a sharp observation and the answer is important.

The Euler-Lagrange equation is written **one equation per index $i$**, for $i = 1, \ldots, N$. It is not a single summed equation. So $\partial L / \partial q_i$ means:

> "Vary only $q_i$, holding all other $q_j$ ($j \neq i$) fixed."

This is precisely what a **partial derivative** means. Even though $L$ may depend on all $N$ coordinates $q_1, \ldots, q_N$, the partial derivative $\partial L / \partial q_i$ isolates only the sensitivity to the $i$-th one. No summation is needed or appropriate here.

To make this concrete: if $L = \frac{1}{2}m(\dot{q}_1^2 + \dot{q}_2^2) - V(q_1, q_2)$, then

$$\frac{\partial L}{\partial q_1} = -\frac{\partial V}{\partial q_1}, \qquad \frac{\partial L}{\partial q_2} = -\frac{\partial V}{\partial q_2}$$

Each is a separate equation. Summing them would mix different degrees of freedom and would be physically meaningless.

The summation *does* appear elsewhere — specifically in the definition of $H$:

$$H \equiv \sum_{i=1}^{N} p_i \dot{q}_i - L$$

because that is a scalar constructed by aggregating over all degrees of freedom. But the Euler-Lagrange equations are a **family of N independent equations**, one per coordinate.

<details>
<summary>Message metadata (verbatim JSON)</summary>

```json
{
  "uuid": "019d3c79-2c84-7890-be2d-c8781d8a3459",
  "updated_at": "2026-03-30T02:01:37.018995Z",
  "attachments": [],
  "files": [],
  "parent_message_uuid": "019d3c79-2c84-75d9-95f2-373756016aa7"
}
```

</details>
