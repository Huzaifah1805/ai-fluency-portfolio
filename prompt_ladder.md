# The Prompt Ladder (FL-05)
**Author:** Huzaifah  
**Track:** General AI Fluency (Week 2 / Assignment 2)  
**Date:** July 9, 2026

---

## Part 1: The Prompt Ladder

### Baseline (Run 1: Genuinely Weak Prompt)
> **Prompt:**  
> "Write code for a personal portfolio website."

#### Representative Output Excerpt
```html
<!DOCTYPE html>
<html>
<head>
    <title>My Portfolio</title>
</head>
<body>
    <h1>Welcome to my website</h1>
    <p>I am a software engineer. I build apps.</p>
    <h2>My Projects</h2>
    <ul>
        <li>Project 1: A calculator app built in Java.</li>
    </ul>
</body>
</html>
```

#### Notes (Baseline)
*   **What changed:** Baseline prompt (none).
*   **What actually improved in output:** Nothing. The output is generic, uses a basic template, and has no design styling.
*   **What still failed:** The code is completely unusable for a professional; it contains placeholder projects (like a calculator app) that do not represent me.
*   **What to try next:** Add a clear, specific goal to define what this portfolio is actually showcasing.

---

### Version 2: Adding a Clear Goal (Run 2)
> **Prompt:**  
> "Write code for a single-page personal portfolio website to showcase my Machine Learning Capstone project."

#### Representative Output Excerpt
```html
<section id="capstone">
    <h2>Machine Learning Capstone Project</h2>
    <p>In this project, I trained models to predict content decay. I used Python, scikit-learn, and Pandas to run experiments and calculate metrics.</p>
</section>
```

#### Notes (Version 2)
*   **What changed in prompt:** Added a specific goal (showcasing the ML Capstone project).
*   **What actually improved in output:** The placeholder content changed from generic "calculator app" to the "Machine Learning Capstone" containing relevant tech terms (scikit-learn, Pandas).
*   **What still failed:** The language is extremely dry and doesn't state what results were achieved or why it matters.
*   **What to try next:** Define the target audience to change the level of technical detail in the description.

---

### Version 3: Defining a Target Audience (Run 3)
> **Prompt:**  
> "Write code for a single-page personal portfolio website to showcase my Machine Learning Capstone project. The target audience is a Lead ML Engineer who wants to see if I understand pipeline structure, cross-validation, and metrics."

#### Representative Output Excerpt
```html
<section id="capstone">
    <h2>Content Opportunity Scoring Pipeline</h2>
    <p>This pipeline scores content items using 5-fold GroupKFold validation split by client_id. It measures Precision@50 and ROC-AUC to rank decline candidates, ensuring no target leakage from future windows.</p>
</section>
```

#### Notes (Version 3)
*   **What changed in prompt:** Defined the target audience as a Lead ML Engineer.
*   **What actually improved in output:** The output stopped using basic definitions and adopted specific technical terminology (GroupKFold, target leakage, split by client_id) that directly answers a senior engineer's validation criteria.
*   **What still failed:** The code is still bare HTML with zero design, styling, or layout guidance.
*   **What to try next:** Add context and real metrics from my actual capstone run.

---

### Version 4: Adding Real Context & Metrics (Run 4)
> **Prompt:**  
> "Write code for a single-page personal portfolio website to showcase my Machine Learning Capstone project. The target audience is a Lead ML Engineer. Context: My capstone trained a Gradient Boosting model that achieved a Precision@50 of 0.824 vs. a baseline rule of 0.464, processing a dataset of 30,000 pages."

#### Representative Output Excerpt
```html
<div class="metrics-grid">
    <div class="metric"><strong>0.824</strong> Precision@50</div>
    <div class="metric"><strong>0.464</strong> Baseline Rule</div>
    <p>We achieved an 82.4% precision in our top 50 recommendations, nearly doubling the efficiency of the rule-based baseline.</p>
</div>
```

#### Notes (Version 4)
*   **What changed in prompt:** Added real performance metrics (0.824 Precision@50) and data context (30,000 pages).
*   **What actually improved in output:** The copy shifted from vague claims to objective, quantitative facts. It presents the exact metrics in a readable grid layout.
*   **What still failed:** The output formatting was incomplete — it wrote generic styling rules in a block that looked like a basic Bootstrap template, losing the premium, custom aesthetic.
*   **What to try next:** Specify strict output format and layout constraints (vanilla CSS, dark-mode design system).

---

### Version 5: Specifying Output Format and Constraints (Run 5)
> **Prompt:**  
> "Write code for a single-page personal portfolio website to showcase my Machine Learning Capstone project. The target audience is a Lead ML Engineer. Context: My capstone trained a Gradient Boosting model that achieved a Precision@50 of 0.824 vs. a baseline rule of 0.464. Constraints: Output separate HTML and CSS code blocks. Use a modern, dark-themed CSS design system with custom CSS variables for spacing and colors (indigo and slate gray). Do not use external CSS frameworks like Bootstrap."

#### Representative Output Excerpt
```css
:root {
    --bg-primary: #0f172a;
    --text-primary: #f8fafc;
    --accent: #6366f1;
}
body { background: var(--bg-primary); color: var(--text-primary); }
```

#### Notes (Version 5)
*   **What changed in prompt:** Added design system constraints (vanilla CSS, dark-themed, variables, indigo/slate).
*   **What actually improved in output:** The CSS output was structured using modern, clean design tokens rather than hardcoded styles, and avoided library imports.
*   **What still failed (The "made it worse" moment):** By adding strict layout constraints, the AI output became overly rigid. It generated a highly structured layout but filled the introductory copy with generic AI buzzwords like *"I am a highly motivated, results-driven professional leveraging cutting-edge pipelines to maximize corporate impact."* This completely broke the direct, authentic tone I wanted.
*   **What to try next:** Add a strong tone constraint (voice card) to remove the marketing filler from the copy.

---

### Version 6: Adding a Tone Constraint / Voice Card (Run 6)
> **Prompt:**  
> "Write code for a single-page personal portfolio website to showcase my Machine Learning Capstone project. The target audience is a Lead ML Engineer. Context: My capstone trained a Gradient Boosting model that achieved a Precision@50 of 0.824 vs. a baseline rule of 0.464. Constraints: Output separate HTML and CSS code blocks. Use a modern, dark-themed CSS design system with custom CSS variables. Tone Constraint: Follow my voice card: 'Direct, plain-spoken, technical, practical, no buzzwords'. Avoid hype words like 'innovative', 'cutting-edge', 'results-driven', or 'passionate'."

#### Representative Output Excerpt
```html
<h1>Huzaifah</h1>
<p>I build ML pipelines and interactive front-ends that help people make decisions. I focus on leakage-free data preparation using DuckDB and Pandas.</p>
```

#### Notes (Version 6)
*   **What changed in prompt:** Added a negative constraint (voice card with banned buzzwords).
*   **What actually improved in output:** The copy instantly became humble, professional, and authentic. It cut out all fluff ("highly motivated", "passionate") and focused entirely on the concrete work ("I build ML pipelines... leakage-free data preparation").
*   **What still failed:** Nothing major. The output is a clean, structured base that is ready for manual coding tweaks.

---

## Part 2: The Final Reusable Prompt
This is the final, fully engineered prompt that anyone on the ML/AI track can copy and use to generate a clean portfolio template:

```text
Act as an expert frontend engineer. Generate clean, semantic HTML and a separate CSS stylesheet for a single-page personal portfolio website.

Target Audience: A technical engineering lead or manager who values clean code, concrete performance numbers, and practical tools over corporate buzzwords.

Portfolio Context:
- Project to showcase: An end-to-end Machine Learning pipeline.
- Tech Stack used: Python, scikit-learn, Pandas, DuckDB, Jupyter.
- Key Metrics to display: Gradient Boosting Precision@50 of 0.824 vs. Baseline Rule of 0.464.

Design Constraints:
1. Do not use Bootstrap, Tailwind, or any external framework. Use vanilla CSS.
2. Define a dark-theme color palette using CSS variables (slate dark background, light text, indigo/purple highlights).
3. Ensure the layout is responsive (mobile-friendly flexbox/grid) with smooth transitions.
4. Structure the page with: Navigation, Hero (clear claim & stats), Showcase Card, About, and Contact.

Content & Tone Constraints:
- Follow this voice card: "Direct, plain-spoken, technical, practical, no buzzwords."
- Strictly avoid marketing filler and hype words: do not use "passionate," "innovative," "highly motivated," "results-driven," or "leveraging."
- Explain the machine learning logic in simple, direct technical terms (validation splits, leakage prevention).
```
