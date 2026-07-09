# Frame It as Cases: Work That Speaks for Itself (FL-04)
**Author:** Huzaifah  
**Track:** General AI Fluency (Week 2 / Assignment 1)  
**Date:** July 9, 2026

---

## Part 1: My Voice Card
> **"Direct, plain-spoken, technical, practical, no buzzwords."** (6 words)

This voice card is a standing instruction in my Claude Project to ensure all text remains simple, concrete, and focused on code and metrics rather than corporate fluff.

---

## Part 2: Case Studies

### Case Study 1: Content Refresh Opportunity Scoring (FlyRank ML Capstone)

#### 1. The Problem
Search visibility decays non-linearly over time, and editors have limited capacity to review old content. A simple query like "flag pages with declining traffic" is too noisy because a page losing 500 impressions due to regular seasonal variation looks identical to a page losing search relevance due to stale content. False flags waste editor hours, while missed flags mean permanently lost traffic.

#### 2. What I Did & Decided
I engineered a series of leakage-safe features (including CTR-to-position ratios, stale-age interactions, and log impression ratios) using DuckDB and Pandas. I specifically decided to exclude post-date metrics like `impressions_last_30d` from the training dataset to ensure the model wouldn't leak future performance. I trained Logistic Regression, Random Forest, and Gradient Boosting models, validating them using a **5-fold GroupKFold split grouped by `client_id`** to prove the model generalizes to completely new, unseen websites.

#### 3. What Came of It
The Gradient Boosting model outperformed the baseline rule dramatically:
*   **Baseline Rule Precision@50:** 0.464
*   **Gradient Boosting Precision@50:** **0.824** (surpassing the target pass-bar).
*   **Outcome:** Editors now receive a weekly prioritized queue of the top 50 decline candidates with specific reason codes, reducing wasted manual review hours by nearly 50%.

---

### Case Study 2: Personal Browser-Based AI Agent

#### 1. The Problem
Most personal portfolio chatbots are slow, rely on expensive external LLM API keys that can easily be spammed/abused, and fail to provide structured, factual answers about the creator's projects because they rely on open-ended generation.

#### 2. What I Did & Decided
I built a custom lightweight conversational agent entirely in vanilla JavaScript that runs directly inside the visitor's browser. I mapped out a structured knowledge graph representing my skills, projects, and career goals. Instead of making server calls, the agent parses input queries, matches intents using a TF-IDF-inspired scoring algorithm, and returns structured, responsive answers instantly with zero API costs.

#### 3. What Came of It
*   **Outcome:** A zero-latency, zero-cost interactive assistant embedded directly on my landing page. It serves as running proof that I can deploy functional front-end systems, not just run scripts in a terminal.

---

## Part 3: Bio and Contact Copy

### Bio
I am Huzaifah, an ML builder who focuses on the intersection of data pipelines and interactive tools. I enjoy taking raw, messy search performance data and structuring it into decision tools that save humans time. I build with Python, scikit-learn, DuckDB, and clean vanilla JavaScript.

### Contact / CTA
If you want to walk through my code repositories or discuss an open role, drop me an email at [huzaifah.dev@gmail.com](mailto:huzaifah.dev@gmail.com) or check out my repos directly on [GitHub](https://github.com/Huzaifah1805).

---

## Part 4: Before / After Copy Comparison

| Before (Generic AI Output) | After (Edited & Voice Card Applied) | Rationale for Edit |
| :--- | :--- | :--- |
| *"I am a highly motivated, results-oriented machine learning intern passionate about utilizing state-of-the-art architectures to drive business impact."* | *"I build ML pipelines and interactive front-ends that help people make data-driven decisions."* | Cut buzzwords ("highly motivated", "state-of-the-art") in favor of concrete actions. |
| *"Leveraging advanced Gradient Boosting techniques, I spearheaded a paradigm shift in our content strategy optimizations."* | *"I trained a Gradient Boosting classifier that doubled the efficiency of our editor queue, hitting 0.824 Precision@50."* | Replaced corporate jargon ("spearheaded", "paradigm shift") with direct metrics and simple verbs. |
| *"This chatbot represents an innovative, scalable paradigm for conversational portfolios utilizing next-generation NLP."* | *"I built a lightweight JS agent that runs in the browser with zero API costs and zero server latency."* | Replaced hype ("innovative", "next-generation") with actual technical benefits (zero cost, zero latency). |
