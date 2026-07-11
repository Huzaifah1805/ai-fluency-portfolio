# Design Your Personal Agent (FL-06)
**Author:** Huzaifah  
**Track:** General AI Fluency (Week 5 / Assignment 3)  
**Date:** July 11, 2026

---

## 1. Job to be Done (Job Description)
The **Personal Portfolio Assistant Agent** is designed to act as an interactive technical advocate for my portfolio website. 

Its primary job is to **answer recruiters' and Lead ML Engineers' technical questions about my skills, internship work, and capstone code**, providing structured facts and direction to encourage them to invite me to an interview. It serves as live, run-time proof of my claim that I can deploy responsive, interactive systems.

---

## 2. User & Usage Frequency
*   **Target User:** Technical Hiring Managers, Lead Data Scientists, and recruiters visiting my portfolio website.
*   **Usage Frequency:** High volume during recruitment cycles; runs client-side on every page visit when initiated by the user.

---

## 3. Data & Tools Access Plan
*   **Data Source:** A local, structured JSON Knowledge Graph (`agent.js`) that defines:
    *   My skills (Python, DuckDB, scikit-learn, etc.).
    *   My capstone details (Precision@50 of 0.824, 5-fold GroupKFold by client_id).
    *   My contact details and resume links.
*   **Tools:**
    *   `intent_matcher`: Client-side parsing tool that runs overlap-scoring against user queries.
    *   `response_renderer`: Updates the chat interface DOM dynamically to output markdown-formatted responses.

---

## 4. Draft Agent Instructions (System Prompt)
```text
Role: You are Huzaifah's Personal Portfolio Advocate.
Objective: Respond accurately to questions about Huzaifah's technical skills, projects, and career interests.

Behavioral Directives:
1. Always project a professional, plain-spoken, and technically precise tone.
2. Rely strictly on facts defined in the local Knowledge Base. Never invent performance metrics.
3. If asked about salary, availability, or general topics unrelated to Huzaifah, politely redirect the conversation back to his projects or contact instructions.
```

---

## 5. Five Pre-Build Eval Cases

### Eval Case 1: Capstone Details
*   **Query:** *"What model did you use for the capstone and what was the score?"*
*   **Expected Behavior:** The agent must mention Gradient Boosting and state the exact score (**0.824 Precision@50**) compared to the baseline rule (**0.464**), explaining that it used a 5-fold GroupKFold validation split.

### Eval Case 2: Contact Information
*   **Query:** *"How can I contact Huzaifah?"*
*   **Expected Behavior:** The agent must output his email `huzaifah.dev@gmail.com` and link to his public GitHub repositories.

### Eval Case 3: Skills List
*   **Query:** *"Do you know scikit-learn or React?"*
*   **Expected Behavior:** The agent must confirm scikit-learn (for the capstone pipeline) and Python/Pandas/DuckDB, but state that for front-end, he focuses on vanilla HTML/CSS/JS rather than framework bloat.

### Eval Case 4: Unrelated Question (Guardrail Test)
*   **Query:** *"What is the recipe for chocolate chip cookies?"*
*   **Expected Behavior:** The agent must decline to answer, stating it only knows about Huzaifah's projects and skills, and suggest alternative topics (like the FlyRank capstone).

### Eval Case 5: Out of Scope Career Promises
*   **Query:** *"Will you work for $15 an hour starting tomorrow?"*
*   **Expected Behavior:** The agent must trigger a guardrail, stating it cannot discuss salary or contractual agreements, and direct the user to email Huzaifah directly to discuss terms.

---

## 6. Risks & Guardrails
*   **Risk 1 (Hallucination):** Presenting fake performance numbers (e.g., claiming 99.9% accuracy).  
    *   *Guardrail:* The intent matcher is hardcoded to static templates for metrics. It has no freedom to generate arbitrary decimal values.
*   **Risk 2 (Scope Creep):** Answering political, offensive, or off-topic queries.  
    *   *Guardrail:* A strict fallback mechanism redirects any query scoring below a threshold to a standard professional prompt.
*   **Risk 3 (Abuse/Cost):** Flooding external API endpoints with spam queries.  
    *   *Guardrail:* The agent runs entirely client-side in the user's browser, eliminating hosting bills and server-side rate limits.

---

## 7. Platform Choice & Justification
*   **Chosen Platform:** **Vanilla JavaScript in-browser engine (Client-side script).**
*   **Alternatives Considered:** Custom ChatGPT GPT, Claude Custom Project with API connectors, or Next.js serverless functions.
*   **Justification:** Custom GPTs require the visitor to have a paid ChatGPT Plus subscription to run them, creating a massive barrier for recruiters. Serverless Next.js functions introduce cold starts and potential database API costs. A client-side vanilla JavaScript engine is **100% free to run, has zero server latency, loads instantly, and runs universally** for every single visitor without login requirements.
