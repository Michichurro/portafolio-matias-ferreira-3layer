# 3-Layer Architecture Workspace

This workspace is organized into three layers to ensure reliability, performance, and clear separation of concerns.

## 📁 Directory Structure

- `directives/`: **Layer 1 (Directive)**. This folder contains Markdown files (SOPs) that define *what* needs to be done. They are the instruction sets for the Orchestrator.
- `execution/`: **Layer 3 (Execution)**. This folder contains deterministic Python scripts that perform the actual work (API calls, data processing, etc.).
- `.tmp/`: **Intermediates**. Used for temporary files during processing.
- `.env`: Environment variables and API keys.
- `credentials.json` / `token.json`: Google OAuth credentials.

## 🚀 How it Works

1. **Orchestrator (Layer 2)**: This is me (the AI agent). I read the directives and decide which execution scripts to call and in what order.
2. **Deterministic Execution**: By using scripts instead of manual exploration, we reduce compounding errors and ensure consistent results.
3. **Self-Annealing**: If a script fails, I analyze the error, fix the script, and update the directive to include new knowledge.

---
*Created by Antigravity*
