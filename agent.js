/**
 * Huzaifah's Personal AI Agent
 * A knowledge-base-driven conversational agent that runs entirely in the browser.
 * No external API calls — all responses are generated from a structured knowledge graph.
 */

const KNOWLEDGE_BASE = {
    greeting: {
        patterns: ["hi", "hello", "hey", "sup", "yo", "greetings", "good morning", "good evening"],
        response: "Hey there! I'm Huzaifah's AI assistant. I can tell you about his skills, projects, ML work, or career goals. What are you curious about?"
    },
    skills: {
        patterns: ["skills", "technologies", "tech stack", "what can he do", "toolbox", "programming", "languages", "tools"],
        response: "Huzaifah's core toolkit includes:\n\n**Machine Learning:** scikit-learn, Random Forests, Gradient Boosting, GroupKFold validation, feature engineering, Precision@K evaluation.\n\n**Languages:** Python (primary), JavaScript, SQL, HTML/CSS.\n\n**Data Tools:** Pandas, NumPy, Matplotlib, DuckDB, Jupyter Notebooks.\n\n**AI & Agents:** Prompt engineering, knowledge-base agents (like me!), LLM API integration, RAG concepts.\n\n**Platforms:** Git/GitHub, Google Colab, Hugging Face, VS Code."
    },
    projects: {
        patterns: ["projects", "work", "portfolio", "built", "created", "shipped", "ml projects"],
        response: "Huzaifah has shipped several projects during his internship:\n\n**1. Content Refresh Opportunity Scoring (Capstone)** — An end-to-end ML pipeline scoring 30K+ pages for search-performance decline risk. Achieved Precision@50 of 0.824 using Gradient Boosting with client-holdout validation.\n\n**2. Personal AI Agent** — That's me! A browser-based conversational agent built with a structured knowledge base.\n\n**3. Search Signal Analysis Pipeline** — Extended the FlyRank starter pipeline with custom EDA on content age vs. CTR relationships.\n\n**4. This Portfolio Website** — A dark-mode personal brand site built from scratch with vanilla HTML, CSS, and JavaScript."
    },
    capstone: {
        patterns: ["capstone", "flyrank", "content refresh", "opportunity scoring", "ml pipeline", "gradient boosting", "precision"],
        response: "The FlyRank Capstone is Huzaifah's flagship project:\n\n**Problem:** Rank 30,000+ content pages by their probability of search-performance decline so editors review the right pages first.\n\n**Approach:** Engineered leakage-safe features (CTR-to-position ratio, stale-age interaction, session efficiency) and trained Logistic Regression, Decision Trees, Random Forest, and Gradient Boosting models.\n\n**Validation:** 5-fold GroupKFold cross-validation by client_id — proving the model generalizes to entirely new websites, not just memorizing one client's patterns.\n\n**Results:**\n• Baseline Rule Precision@50: 0.464\n• Gradient Boosting Precision@50: **0.824** (nearly 2x the baseline)\n• PR-AUC: 0.701 | ROC-AUC: 0.693\n\nThe model outputs a ranked queue with reason codes (e.g., page_one_decay_risk, stale_visible_page) so editors know *why* a page was flagged."
    },
    agent: {
        patterns: ["agent", "chatbot", "how do you work", "how were you built", "this agent", "ai assistant"],
        response: "I'm a knowledge-base agent built entirely in vanilla JavaScript — no external APIs, no server calls, everything runs in your browser.\n\n**How I work:**\n1. Your message is tokenized and matched against intent patterns in my knowledge graph.\n2. I use a simple TF-IDF-inspired scoring system to find the best-matching knowledge node.\n3. If multiple intents match, I pick the highest-confidence one.\n4. I format the response with markdown-like styling.\n\nI was designed to demonstrate that useful AI agents don't always need a $200/month API bill. Sometimes a well-structured knowledge base and smart pattern matching are all you need."
    },
    ml_approach: {
        patterns: ["machine learning", "ml", "approach", "methodology", "how", "model", "algorithm"],
        response: "Huzaifah's ML approach follows first principles:\n\n1. **Problem framing first** — Define the decision, the unit of analysis, and what 'good' means before writing any code.\n2. **Baseline before complexity** — Always build a transparent rule-based baseline to beat.\n3. **Leakage discipline** — Strictly separate feature windows from target windows. Never use future data as features.\n4. **Client-holdout validation** — Group splits by entity (client_id) to test real-world generalization, not random-split optimism.\n5. **Explainability** — Every prediction comes with reason codes. If you can't explain why a page was flagged, the model isn't production-ready.\n6. **Cautious claims** — Observational, not causal. Decision-support, not guarantees."
    },
    education: {
        patterns: ["education", "study", "university", "degree", "background", "learning"],
        response: "Huzaifah is currently building his expertise through hands-on project work and structured internship programs. His learning philosophy is 'build first, theory follows' — he ran a real ML pipeline before diving into the underlying math, which made concepts like bias-variance tradeoff and GroupKFold splitting click immediately.\n\nHe's currently completing the FlyRank Applied Search Intelligence internship, covering ML systems thinking, search analytics, data pipelines, and AI fluency."
    },
    next: {
        patterns: ["next", "future", "goals", "looking for", "career", "opportunities", "hiring", "job"],
        response: "Huzaifah is looking for opportunities where he can:\n\n• **Apply ML to real business problems** — not Kaggle competitions, but systems that rank, score, and recommend for actual human reviewers.\n• **Work with search & content data** — he's developed genuine domain expertise in search-performance signals, CTR analysis, and content lifecycle scoring.\n• **Build end-to-end** — from data contracts and feature engineering through model training and reason-code generation.\n• **Learn from senior engineers** — he values mentorship and code review, and he's hungry to level up.\n\nHe's open to ML Engineer, Data Scientist, or AI Engineer roles — especially in companies that care about explainable, decision-support AI."
    },
    ai_fluency: {
        patterns: ["ai fluency", "ai stack", "artificial intelligence", "llm", "prompt", "generative"],
        response: "Huzaifah's AI fluency spans the modern stack:\n\n**Prompt Engineering:** He understands how to structure prompts for reliable, repeatable outputs — system prompts, few-shot examples, chain-of-thought reasoning.\n\n**AI-Assisted Development:** He uses AI coding assistants as pair-programming partners, not copy-paste machines. He reviews, tests, and takes ownership of every line.\n\n**Agent Design:** He built the agent you're talking to right now — understanding intent matching, knowledge graph design, and conversational UX.\n\n**Critical Thinking:** He knows the limits — hallucination risk, context window constraints, the difference between LLM confidence and actual accuracy. He uses cautious language and never claims AI 'understands' or 'knows' things."
    },
    fallback: {
        response: "Interesting question! I don't have a specific answer for that, but I can tell you about Huzaifah's **skills**, **projects**, **ML approach**, his **FlyRank capstone**, or what he's **looking for next**. What would you like to know?"
    }
};

class PersonalAgent {
    constructor() {
        this.chatMessages = document.getElementById('chat-messages');
        this.chatInput = document.getElementById('chat-input');
        this.chatSend = document.getElementById('chat-send');
        this.chatSuggestions = document.getElementById('chat-suggestions');
        
        this.init();
    }

    init() {
        this.chatSend.addEventListener('click', () => this.handleSend());
        this.chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSend();
        });

        // Suggestion buttons
        document.querySelectorAll('.suggestion-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const query = btn.dataset.query;
                this.chatInput.value = query;
                this.handleSend();
            });
        });
    }

    handleSend() {
        const text = this.chatInput.value.trim();
        if (!text) return;

        this.addMessage(text, 'user');
        this.chatInput.value = '';
        
        // Hide suggestions after first message
        if (this.chatSuggestions) {
            this.chatSuggestions.style.display = 'none';
        }

        // Simulate thinking delay
        setTimeout(() => {
            const response = this.generateResponse(text);
            this.addMessage(response, 'agent');
        }, 400 + Math.random() * 600);
    }

    generateResponse(input) {
        const normalized = input.toLowerCase().replace(/[^\w\s]/g, '');
        const words = normalized.split(/\s+/);

        let bestMatch = null;
        let bestScore = 0;

        for (const [key, node] of Object.entries(KNOWLEDGE_BASE)) {
            if (key === 'fallback') continue;
            
            let score = 0;
            for (const pattern of node.patterns) {
                const patternWords = pattern.toLowerCase().split(/\s+/);
                for (const pw of patternWords) {
                    for (const w of words) {
                        if (w === pw) score += 3;
                        else if (w.includes(pw) || pw.includes(w)) score += 1;
                    }
                }
                // Bonus for exact substring match
                if (normalized.includes(pattern.toLowerCase())) {
                    score += 5;
                }
            }

            if (score > bestScore) {
                bestScore = score;
                bestMatch = node;
            }
        }

        if (bestScore >= 2 && bestMatch) {
            return bestMatch.response;
        }
        return KNOWLEDGE_BASE.fallback.response;
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender === 'user' ? 'user-message' : 'agent-message'}`;

        const avatar = document.createElement('div');
        avatar.className = 'message-avatar';
        avatar.textContent = sender === 'user' ? 'You' : '🤖';

        const content = document.createElement('div');
        content.className = 'message-content';
        
        // Simple markdown-like formatting
        const formatted = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>');
        
        content.innerHTML = `<p>${formatted}</p>`;

        messageDiv.appendChild(avatar);
        messageDiv.appendChild(content);
        this.chatMessages.appendChild(messageDiv);

        // Auto-scroll to bottom
        this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
    }
}

// Initialize agent when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PersonalAgent();
});
