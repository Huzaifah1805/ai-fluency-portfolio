# AI Workflow Audit & Tool Setup (FL-01)
**Author:** Huzaifah  
**Track:** General AI Fluency (Week 1)  
**Date:** July 9, 2026

---

## Part 1: Weekly Workflow Audit
Below is the classification of 12 recurring tasks from my typical week as an ML intern and CS student. Each task is mapped using Ethan Mollick's framework (Just Me, Delegate to AI + Review, Collaborate with AI, or Fully Automate).

| Task Description | Category | Est. Time / Week | Rationale |
| :--- | :--- | :--- | :--- |
| **1. Designing custom feature logic** (e.g.ctr-to-position ratio calculations) | **Collaborate with AI** | 4 hours | I sketch the first-principles logic; AI helps write clean Pandas implementations that handle edge cases (like division by zero). |
| **2. Final validation of ML performance metrics** (Precision@K) | **Just Me** | 2 hours | Critical decision checkpoint. I must review and sign off on accuracy claims myself before any stakeholders see them. |
| **3. Summarizing raw SEO/Search trend datasets** | **Delegate to AI + Review** | 3 hours | AI is great at grouping 500+ text queries into top-level themes, which I then verify for domain-specific accuracy. |
| **4. Debugging standard Python syntax and runtime errors** | **Delegate to AI + Review** | 2 hours | Fast error-code lookup and syntax fixing is highly suited for AI; saves me manual Googling. |
| **5. Writing custom CSS layouts and animations** | **Collaborate with AI** | 5 hours | I guide the aesthetic direction and structure; AI generates the raw CSS rules and responsive flexbox parameters. |
| **6. Emailing project updates and recruiter outreach** | **Delegate to AI + Review** | 1.5 hours | I dictate the core points, AI drafts the professional email in my tone, and I tweak it before sending. |
| **7. Reading complex ML research papers and documentation** | **Collaborate with AI** | 4 hours | I read the full paper, but use AI as a discussion partner to explain math symbols or clarify complex architectures. |
| **8. Running Git commands & updating GitHub Pages** | **Fully Automate** | 1 hour | Repetitive task. I use shell scripts and CLI automation to stage, commit, and deploy changes quickly. |
| **9. Conducting system-level ML task framing** | **Just Me** | 3.5 hours | Framing the "why", defining user cost of error, and choosing the proxy label requires deep, subjective contextual understanding. |
| **10. Creating slide deck presentations for weekly review** | **Collaborate with AI** | 2 hours | I outline the key arguments; AI helps me draft concise bullet points and suggest clean slide structures. |
| **11. Summarizing long video call recordings** | **Fully Automate** | 1.5 hours | I pass meeting transcripts through an automated script that extracts action items and key decisions. |
| **12. Planning personal study schedule & goals** | **Just Me** | 1 hour | Setting goals and reflecting on my career direction requires personal agency and self-awareness that AI cannot mock. |

---

## Part 2: AI Toolkit & Custom Claude Project
I have successfully set up my tool accounts (ChatGPT, Claude, and Anthropic Academy) and enrolled in the **AI Fluency: Framework & Foundations** course.

### My Claude Project: Custom Instructions
I configured a new Project in Claude called **"FlyRank Intern Copilot"** with the following Custom Instructions:

```text
About Me: 
- I am Huzaifah, a Machine Learning and Search Intelligence intern. 
- I focus on clean, leakage-free Python pipelines, data analytics (using DuckDB and Pandas), and modern portfolio development.

Communication Tone: 
- Be concise, direct, and technically precise.
- Do not use overly formal corporate speak. Use first-principles explanations.
- Never use hand-wavy claims about AI accuracy or performance.

Current Goals: 
- Automating search performance analytics without target leakage.
- Building a personal web portfolio with a high-fidelity browser-based AI agent.
- Learning to design clean workflows where AI is a collaborative peer, not a blind outsource.
```

*The screenshot of this configuration is saved as `claude_project_config.png` on the Desktop.*

---

## Part 3: Target Tasks for Deeper Fluency (FL-02 to FL-04)
I have selected the following three target tasks to focus on and optimize in my upcoming fluency assignments:

### 1. Feature Engineering and Pipeline Optimization (Collaborate)
*   **Definition of "Done Well":** Feature extraction scripts are free of target leakage, handle null/zero cases gracefully, utilize vectorized Pandas operations (no slow `for` loops), and include comprehensive docstrings explaining the mathematical logic.

### 2. Search Performance Insight Extraction (Delegate + Review)
*   **Definition of "Done Well":** Text summaries accurately classify search intent into standard buckets (Commercial, Informational, etc.) with 95%+ precision when cross-checked manually, highlighting actionable "stale content" candidates.

### 3. Responsive Web Styling and Component Layout (Collaborate)
*   **Definition of "Done Well":** Front-end interfaces are fully responsive across desktop and mobile, pass accessibility checks (semantic tags, proper contrast), use a cohesive modern design system (css variables), and avoid library bloat.
