# Three Roads: Choose Your Stack with AI (FL-10)
**Author:** Huzaifah  
**Track:** General AI Fluency (Week 4 / Assignment 2)  
**Date:** July 11, 2026

---

## Part 1: My Constraints
To make an objective stack choice, I outlined my constraints to my AI partner:
1.  **Cost:** Free only (no active hosting, subscription, or domain registration fees).
2.  **Skill Level:** Junior Machine Learning builder. Comfortable writing HTML, Vanilla CSS, core JavaScript, and Python. Little experience managing complex CI/CD build scripts or cloud databases.
3.  **Portfolio Needs:** A single-page layout that introduces me, lists my skills, highlights my ML capstone project with charts, and embeds a live, functional, interactive AI Agent.
4.  **Display Needs:** The capstone must display actual matplotlib charts (`pr_curves.png`) and links to my public code repository. The AI Agent must run live on the site so visitors can test it.

---

## Part 2: Three Stack Options Considered

### Option 1 (Simplest): No-Code Site Builder (Carrd or Google Sites)
*   **How to Build:** Drag-and-drop editor.
*   **Where to Host:** Hosted directly on Carrd/Google Sites (free subdomains).
*   **Backend Needed:** No.
*   **The Trade-off:** Zero coding required, meaning I could finish the site in 2 hours. However, it fails my core proof requirement: I cannot easily write and embed my custom JavaScript AI Agent (`agent.js`) without a paid plan for custom code embeds, and it does not show any of my programming abilities.

### Option 2 (Balanced & Chosen): Vanilla HTML, CSS, and JS (GitHub Pages)
*   **How to Build:** Code files written directly in a local text editor (`index.html`, `style.css`, `agent.js`, `script.js`).
*   **Where to Host:** GitHub Pages (free, deployed automatically from the repo).
*   **Backend Needed:** No (the AI agent runs entirely client-side in the browser).
*   **The Trade-off:** Requires writing all CSS styling and scroll animations from scratch, which takes time. However, it gives me complete control over the document structure and allows the custom AI Agent to run instantly with zero hosting fees or server latency.

### Option 3 (Most Powerful): Next.js or React (Vercel)
*   **How to Build:** Component-based React architecture deployed via Node.
*   **Where to Host:** Vercel (free hobby tier).
*   **Backend Needed:** No (uses Vercel serverless functions if needed).
*   **The Trade-off:** Provides a highly scalable framework. However, it adds significant complexity. I would spend time managing Node modules, updates, and package dependencies instead of focusing on layout copy and my ML Capstone description. It overcomplicates a single-page portfolio.

---

## Part 3: Pressure-Testing the Front-Runner (Option 2)
*   **What breaks if I pick the simplest (No-code)?** My proof claim breaks. The Lead ML Engineer visiting my page would see a drag-and-drop template with no evidence of my actual code. I would not be showing my custom in-browser JavaScript agent.
*   **What do I maintain if I pick the most powerful (Next.js)?** I would have to maintain a package file (`package.json`) and node updates. In a year, a simple build command might crash due to deprecated dependencies.
*   **Can I finish in two weeks?** Yes. Since Vanilla HTML/CSS/JS has no compile step, I can code and test instantly.
*   **Does it show my work well?** Yes. The source code is directly visible on GitHub, and the live agent runs flawlessly in the browser.

---

## Part 4: Final Decision & Rationale
I chose **Option 2 (Vanilla HTML, CSS, and JavaScript hosted on GitHub Pages)**. 

### Why I chose it:
It is the only free option that directly proves my claim of being able to *deploy interactive web systems* and write clean code. Because there are no frameworks or build steps, I can easily maintain it for years without worrying about npm updates breaking the layout. 

### Why I rejected the others:
*   I rejected **Carrd (Option 1)** because it hides my coding skills and doesn't allow custom JavaScript execution on the free tier.
*   I rejected **Next.js (Option 2)** because the framework overhead is unnecessary for a single-page portfolio. It would distract me from polishing my actual case studies.
