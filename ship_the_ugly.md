# Ship the Ugly One (FL-11)
**Author:** Huzaifah  
**Track:** General AI Fluency (Week 5 / Assignment 2)  
**Date:** July 11, 2026

---

## Part 1: Live Portfolio & Technical Architecture Explainer
My portfolio is fully live and publicly accessible. 

*   **Live Website Link:** [https://huzaifah1805.github.io/ai-fluency-portfolio/](https://huzaifah1805.github.io/ai-fluency-portfolio/)
*   **GitHub Repository:** [https://github.com/Huzaifah1805/ai-fluency-portfolio](https://github.com/Huzaifah1805/ai-fluency-portfolio)

### How the Site is Built (No Mystery Code)
*   **HTML Structure (`index.html`):** Built using standard HTML5 semantic elements (`<nav>`, `<header>`, `<section>`, `<footer>`) to ensure screen readers parse the hierarchy correctly.
*   **Styling (`style.css`):** Programmed using vanilla CSS. Theme colors and typography properties are declared as global CSS custom variables (`:root`) for easy theme adjustments. The layout uses CSS Grid and Flexbox for responsiveness, avoiding any bootstrap library imports.
*   **Conversational Agent (`agent.js`):** A custom JavaScript class that runs client-side. It parses input strings, computes term overlap scores against a local JSON knowledge graph, and outputs matching responses directly into the chat console DOM.
*   **Animations (`script.js`):** Uses the browser's `IntersectionObserver` API to detect when a card enters the viewport, toggling the `.visible` class to trigger smooth CSS transitions.

---

## Part 2: Real Person Feedback (Reviewer's Reaction)
I sent the live link to a senior contact in search analytics and ML engineering for feedback.

### Key Observations & Reactions:
*   **What Landed:** They loved the **embedded AI Agent**. They noted that running the model client-side is a clever way to show technical coding skills without incurring any host charges. They also stated that putting the **0.824 Precision@50** metric card at the top of the Capstone project immediately proved competence before reading the code.
*   **What Confused Them:** They pointed out that in the "About" section, the typing terminal animation executed too fast, causing them to miss the first command line output before the next block loaded. They also noted that clicking the GitHub link closed the portfolio tab instead of opening a new window.

---

## Part 3: The "Still Ugly" List (Known Issues to Fix)
Below is my honest curation of rough edges I need to polish in the final week:

1.  **Terminal Animation Control:** The mock terminal lacks a replay/pause button, making it frustrating to read if the user misses the initial load transition.
2.  **Choppy Scroll on Firefox:** Scroll animations are smooth on Chrome but appear slightly stuttered on Firefox due to different rendering optimizations for `transition: transform`.
3.  **Mobile Menu Shift:** The nav toggle button has a minor 3px vertical shift when the mobile overlay is toggled on.
4.  **External Links Target:** Case study source links currently open in the same tab, redirecting the recruiter away from my portfolio.
