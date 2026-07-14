# PF-04 DNS Walkthrough — Huzaifah

## The Site

My portfolio is live at **https://huzaifah1805.github.io/ai-fluency-portfolio/** and is hosted on GitHub Pages — a free static hosting service that serves HTML, CSS, and JavaScript files directly from a GitHub repository. No server to manage, no cost.

---

## What is a CNAME Record?

DNS (Domain Name System) is the internet's phone book. When you type a URL into your browser, DNS translates that name into an IP address so your device knows where to send the request.

A **CNAME record** (Canonical Name record) is a type of DNS entry that says:

> "This domain is just an alias — send traffic to this other address instead."

It's like call forwarding. Instead of giving my subdomain its own IP address, I point it to my GitHub Pages address, and GitHub handles the rest.

---

## My Setup

**My subdomain:** `huzaifah.flyrank-domain` (provisioned by FlyRank Ops)

**CNAME value it holds:** `huzaifah1805.github.io`

So the DNS record looks like this:

| Type  | Name      | Value                       |
|-------|-----------|-----------------------------|
| CNAME | huzaifah  | huzaifah1805.github.io      |

---

## How the Request Reaches My Site (Step by Step)

1. **You type** `huzaifah.flyrank-domain` in your browser.

2. **Your browser asks a DNS resolver** (usually your internet provider's): *"What is the IP for this domain?"*

3. **The resolver checks** FlyRank's nameservers and finds the CNAME record: *"huzaifah is an alias for huzaifah1805.github.io."*

4. **The resolver follows the chain** and looks up the IP address for `huzaifah1805.github.io` — which GitHub controls.

5. **GitHub's servers receive the request.** Because I've added `huzaifah.flyrank-domain` as a custom domain in my GitHub Pages repository settings, GitHub recognises the request as mine and serves my `index.html` file.

6. **HTTPS works** because GitHub automatically provisions a TLS certificate via Let's Encrypt for verified custom domains.

---

## What I Did (My Half of the Setup)

FlyRank Ops created the CNAME record on their nameserver. My job was the other half:

1. Went to my repository on GitHub → **Settings → Pages**
2. Under "Custom domain", typed in `huzaifah.flyrank-domain` and clicked Save
3. GitHub verified the CNAME was pointing correctly and issued an HTTPS certificate automatically
4. Waited a few minutes for DNS to propagate, then confirmed the site loaded over HTTPS

---

## Files I Deployed (and What Each One Does)

| File | What it does |
|---|---|
| `index.html` | The entire page structure — navigation, hero, about, skills, projects, AI agent, contact |
| `style.css` | All visual styling: colours, layout, dark mode, animations, responsive breakpoints |
| `agent.js` | The AI chatbot logic — TF-IDF scoring against a local knowledge base, no external API |
| `script.js` | Scroll-triggered animations and the mobile navigation toggle |
| `favicon_monogram.png` | The `{H}` browser tab icon |

I wrote or reviewed every line of each file during the build process. If you ask me what any piece of code does, I can explain it.

---

## Non-Technical Summary

Imagine my portfolio is a shop. GitHub Pages is the physical building where the shop lives. The FlyRank subdomain is a signpost on the main road that says "Huzaifah's shop — follow this way." A CNAME record is the instruction that tells the internet's signpost system where to point. When someone follows the sign, they arrive at GitHub's building, and GitHub hands them my shop's contents. HTTPS is the lock on the door — it proves the shop is genuine and no one is eavesdropping.
