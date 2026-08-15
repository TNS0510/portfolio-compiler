---
title: "PromptCraft: AI Prompt Optimizer & Tester"
description: "A production-grade developer tool that transforms rough human inputs into structured 5-component AI prompts using meta-prompting and side-by-side output evaluation."
---

## What I Built
PromptCraft is a full-stack developer tool designed to optimize and evaluate LLM prompts in real time using systematic meta-prompting. Built with Python 3.12, the Google GenAI SDK (`gemini-2.5-flash`), Streamlit, and `python-dotenv`, it provides both a CLI and an interactive web interface with automated session audit logging and cloud deployment.

## Problem
Raw human prompts are often vague, missing key context, or lacking strict formatting parameters. This leads to inconsistent, low-quality LLM outputs, forcing developers to manually copy-paste and iterate through prompts in web interfaces without structured feedback, versioning, or baseline metrics.

## Solution
PromptCraft automates the prompt engineering pipeline. It takes a raw user prompt, executes it against Google Gemini to establish a baseline output, and concurrently passes it through a Meta-Prompt Engine that restructures it into a 5-component framework (**Role, Task, Context, Format, Constraints**). It then runs the optimized prompt and presents a clear, side-by-side output comparison while automatically persisting session logs to a structured JSON file.

## Design Decisions
- **Explicit Configuration (`GenerateContentConfig`)**: Replaced default heuristic execution calls with explicit parameter configurations (`temperature=0.7`) to enforce deterministic runtime behavior and maintain clean console logs.
- **Single Responsibility Functions**: Modularized execution (`execute_prompt`), transformation (`optimize_prompt`), and logging (`save_to_history`) to enable total code reuse across both the CLI interface (`app.py`) and Web interface (`gui.py`).
- **Structured File Logging (`JSON`)**: Selected append-only JSON logging over plain text or SQL databases to provide zero-overhead, human-readable session audits ready for downstream evaluation.

## Tradeoffs
- **Simplicity vs. Database Scalability**: Used local JSON file logging (`history.json`) instead of an external database like PostgreSQL or Supabase. This simplified local development and zero-dependency deployments, but limits concurrent multi-user write scalability.
- **Latency vs. Output Quality**: The app executes two sequential API calls (raw output generation + meta-prompt optimization) plus a third call for optimized output execution. This introduces higher response latency in exchange for immediate visual evaluation.

## Challenges
During integration with the latest `google-genai` SDK, direct calls to `models.generate_content` triggered SDK warnings regarding Automatic Function Calling (AFC) heuristics. By inspecting SDK internals and implementing explicit configuration parameters via `types.GenerateContentConfig`, the issue was resolved without altering model behavior or incurring chat-session overhead.

## What I'd Improve
- **Automated Prompt Evals**: Implement a quantitative scoring engine (using an LLM-as-a-judge pattern) to measure adherence to constraints and output quality changes programmatically.
- **Vector Storage**: Replace local JSON logging with a vector database (e.g., Supabase / pgvector) to enable semantic search over historical prompt optimizations.
- **Multi-Model Testing**: Allow side-by-side comparison across different LLM providers (e.g., OpenAI, Anthropic, Gemini) within the same interface.

## Demo
[Live Demo on Streamlit Cloud](https://promptcraft-ai.streamlit.app/)

## Source Code
[GitHub Repository](https://github.com/TNS0510/promptcraft)