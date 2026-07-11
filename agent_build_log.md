# Build the Agent: Implementation & Build Log (FL-07)
**Author:** Huzaifah  
**Track:** General AI Fluency (Week 5 / Assignment 4)  
**Date:** July 11, 2026

---

## Part 1: Technical Build Log & Iteration History
During the construction of the **Personal Portfolio Assistant Agent** on my Vanilla JS stack, I ran into several implementation challenges. Below is the log of what broke, what changed, and what was cut from the original FL-06 specification.

### 1. What Broke & How it Was Fixed
*   **The Issue:** The initial intent matching was built using a simple substring check (`if (input.includes(keyword))`). This failed when keywords overlapped. For example, a user asking about "HTML/CSS skills" would trigger both the `skills` intent and the `portfolio` intent, returning two responses at once.
*   **The Fix:** Refactored `agent.js` to use a TF-IDF-inspired **term overlap scoring algorithm**. The user query is tokenized, stripped of punctuation, and matched against keyword sets defined in the JSON knowledge base. The code calculates a numerical score for each intent and triggers *only* the single intent with the highest confidence score (falling back to a default query if the score is below the threshold).

### 2. What Was Changed
*   **Visual Layout Scroll:** Initially, as chat messages loaded, the window did not scroll automatically, forcing visitors to scroll manually to read the agent's output. I added `this.chatMessages.scrollTop = this.chatMessages.scrollHeight;` directly in the message rendering function in `agent.js` to ensure the scroll position snaps to the bottom on every message send.

### 3. What Was Cut & Why
*   **Interactive Input Rate-Limiter:** The initial spec proposed rate-limiting user inputs to prevent spam. However, since the model runs entirely client-side in the visitor's browser, there are no external API calls, server databases, or token charges. Because spamming the agent does not incur any developer cost or slow down server operations, I cut the rate-limiter logic to keep the Javascript payload small and efficient.

---

## Part 2: Working Code Architecture
The complete logic lives in my public GitHub repo inside **`agent.js`** and **`index.html`**.

*   **Data Connection:** The agent is directly connected to the local Javascript object `KNOWLEDGE_BASE` containing structured, factual responses about my projects, skills, and background.
*   **UI Handoff:** Captures typing actions via event listeners and routes them through `generateResponse(input)` to update the page DOM.

---

## Part 3: Known Failure Points & Human Review
1.  **Strict Keyword Boundaries:** The intent matcher relies on token overlap. If a visitor asks a highly technical question using terms not present in the keyword map (e.g. "Do you use boosting stumps?"), it will fall back to the generic helper response.  
    *   *Human Verification:* Periodically review analytics on user inputs to expand the keyword arrays for synonyms.
2.  **No Dynamic Memory:** The agent does not persist state across reloads. If a recruiter refreshes the page, the chat history resets.

---

## Part 4: Run Capture Evidence
*A raw, unedited screen capture showing an end-to-end user interaction session is saved as `portfolio_agent_run.webp` in this folder.*
