# The Through-Line: Map Content & CTAs (FL-08)
**Author:** Huzaifah  
**Track:** General AI Fluency (Week 3 / Assignment 3)  
**Date:** July 10, 2026

---

## Part 1: One-Line Claim
> **"I build leakage-free Machine Learning pipelines and deploy browser-based AI systems that make model predictions actionable."**

This single, memorable claim is positioned directly in the Hero header of the website to immediately answer what I can prove to the visitor.

---

## Part 2: The Content Map
My portfolio website is structured as a single-page flow to maximize engagement and minimize friction. Every section is designed to lead the Lead ML Engineer directly to the primary action: **inviting me to a technical interview to discuss my repositories**.

### Page: Main Portfolio (Single-Page Layout)

#### Section 1: Navigation Bar
*   **Elements:** Monogram Logo `{ H }` + Navigation links (About, Skills, Projects, AI Agent, Contact).
*   **Purpose:** Allow quick jump navigation to specific sections.

#### Section 2: Hero Section (The Hook)
*   **Elements:** One-Line Claim + Summary stats (4 Projects Shipped, 3 ML Models Built, 30,000 Data Points Scored) + Visual grid background.
*   **Primary Call to Action (CTA):** "View My Work" (smooth scrolls to Projects) and "Talk to My AI Agent" (smooth scrolls to AI Agent).

#### Section 3: About Me (The Person)
*   **Elements:** Short bio + Terminal Card component showing visual code inputs and status `Ready to build 🚀`.
*   **Purpose:** Establishes my background as a FlyRank ML intern and CS student.

#### Section 4: Skills Section (The Toolbox)
*   **Elements:** Categorized tag layout (Machine Learning, Languages, Tools & Platforms, AI & Agents).
*   **Purpose:** Verifies that I use industry-standard tools (scikit-learn, Pandas, DuckDB).

#### Section 5: Projects Section (The Proof - Strongest Work First)
*   **Elements:**
    *   **Case 1 (Lead Project):** Content Refresh Scoring (FlyRank ML Capstone). Showcases metrics card (0.824 Precision@50 vs. 0.464 baseline) and explanation of GroupKFold validation.
    *   **Case 2:** Personal AI Research Agent.
    *   **Case 3:** Search Signal Analysis Pipeline.
    *   **Case 4:** Portfolio website codebase.
*   **Call to Action (CTA):** "View on GitHub" (external link to open the code repository).

#### Section 6: AI Agent (The Interactive Demo)
*   **Elements:** Embedded chat console. Includes pre-set suggestion buttons to let the user test my Javascript intent-matching code instantly in real-time.
*   **Call to Action (CTA):** Interactive chat input (user queries the agent).

#### Section 7: Contact (The Close)
*   **Elements:** Email card + GitHub link card.
*   **Call to Action (CTA):** "Say Hello" (opens mail client to `huzaifah.dev@gmail.com`) to invite me to an interview.

---

## Part 3: Proof Gather-List (Honest Assessment)
To ensure the final build matches this content map, I identified and gathered the following pieces of evidence:

1.  **ML Performance Figures:** Copied `pr_curves.png` and `feature_importance.png` from my pipeline outputs to display on my GitHub repo. (Completed)
2.  **Pipeline Code:** Staged `train_capstone.py` in my public ML repo to let reviewers read the exact validation split and leakage-prevention code. (Completed)
3.  **Vanilla JS Chatbot Logic:** Finalized my local `agent.js` matching logic, ensuring all pre-set suggestion buttons map cleanly to intents without errors. (Completed)
4.  **GitHub Pages Deployment:** Verified that renaming the repo to `ai-fluency-portfolio` successfully updated my pages build script so the live agent loads instantly. (Completed)
