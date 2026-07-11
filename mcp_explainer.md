# Demystifying Agents & Model Context Protocol (MCP)
**Author:** Huzaifah  
**Track:** General AI Fluency (Week 5)  
**Date:** July 11, 2026

---

## 1. Workflow vs. Agent: The Core Distinction
In modern AI development, the terms "workflow" and "agent" are frequently conflated, yet they represent entirely different paradigms of model execution. 

A **workflow** is a deterministic, pre-programmed sequence of steps where an LLM is utilized as a processing engine at specific points. The developer hardcodes the routing: Step A always hands off to Step B, which always hands off to Step C. The model does not decide *what* to do next; it only executes the specific instruction within its current step. 

An **agent**, conversely, is a system where the LLM acts as the central router and controller. The model is given a goal, a set of tools (functions it can call), and the autonomy to decide its own execution path. It evaluates the current state, selects a tool, parses the output, and determines the next step dynamically. It loops, adjusts its strategy based on errors, and decides when the goal is met.

### Classifying the FL-04 Pipeline
My **FL-04 case study pipeline** is strictly a **workflow**, not an agent. It follows a hardcoded chain: **Drafting → Critique → Revision**. The drafting step always runs first, its output is always fed directly into the critique prompt, and the critique list is always passed to the revision editor. The model cannot decide to bypass the critique, nor can it choose to query an external search tool to verify a metric. It is a highly efficient, linear assembly line.

---

## 2. Model Context Protocol (MCP): The USB-C of AI
Large Language Models have historically been isolated brains. They cannot touch the outside world unless a developer writes a custom, ad-hoc API integration for every single tool. 

The **Model Context Protocol (MCP)**, developed by Anthropic, acts as a universal "USB-C port" for AI applications. It is an open standard that allows AI clients (like Claude Desktop) to connect securely to external data sources and tools through a unified protocol. Instead of custom integration code for every database or filesystem, any client that supports MCP can immediately talk to any server that implements it.

MCP relies on three core primitives:
1.  **Tools:** Executable functions that the model can run to change state or fetch dynamic data (e.g. running a SQL query, executing a bash command).
2.  **Resources:** Passive, read-only data streams that the model can load into its context (e.g., file contents, API readouts, system logs).
3.  **Prompts:** Pre-defined templates or system instructions exposed by the server to guide the user's interaction.

---

## 3. How to Upgrade My FL-04 Workflow into a True Agent
To turn my linear **Draft, Critique, Revise** workflow into an autonomous **agent**, I would need to replace the rigid script wrapper with an agent loop that has tool access via MCP. 

Here is what the upgrade would look like:
1.  **Give the Agent Tools:** Configure an MCP server that exposes local shell execution (`execute_command`) and file manipulation (`read_file`, `write_file`).
2.  **Define a Goal:** Instead of running prompts sequentially, give the agent a high-level goal: *"Write a case study for the ML Capstone, run its python script, verify the metrics are accurate, check for target leakage, and deploy the polished report to GitHub Pages."*
3.  **Autonomous Execution Loop:**
    *   The agent reads the local capstone results using the `read_file` tool.
    *   It drafts a case study based on the results.
    *   It uses `execute_command` to run a critique validation script that programmatically parses the markdown files.
    *   If the script outputs an error (e.g., "Found target-leakage terms"), the agent parses the error log, modifies the markdown file using `write_file`, and re-runs the validation.
    *   Once the validation passes, the agent uses a Git MCP tool to run `git commit` and `git push`, deploy it, and output: *"Goal accomplished. Live URL: [URL]"*.
    *   The human is completely removed from the loop except for the final sign-off.

---

## 4. Evidence of Working MCP Setup
I configured a local **Filesystem & Database MCP Server** connected to my client. This setup enables the model to read local files, list workspace directories, and query structured databases directly.

Below are three tasks completed using the MCP server that a standard chat window could not perform:

### Task 1: Reading Local Workspace Configuration
*   **Command/Tool Call:** `read_file` targeting `C:\Users\huzaifah_15\OneDrive\Desktop\AI_Fluency_Capstone\identity_kit.md`.
*   **Result:** The model retrieved the raw file content directly from the local disk, extracting the hex codes (`#0a0e17`, `#6366f1`) and font specifications without manual copy-pasting.

### Task 2: Verifying Local File Directories
*   **Command/Tool Call:** `list_directory` targeting `C:\Users\huzaifah_15\OneDrive\Desktop\AI_Fluency_Capstone`.
*   **Result:** The model retrieved a real-time list of all files in the Capstone directory, identifying that `sitemap_pressure_test.md` and `workflow_audit.md` were present and up-to-date.

### Task 3: Accessing Active System Outputs
*   **Command/Tool Call:** `execute_query` on a local SQLite database containing search performance logs.
*   **Result:** The model queried the database to count pages matching specific decay criteria, outputting the result directly.
