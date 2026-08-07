# AI-Powered Competitive Intelligence Research Agent

An autonomous full-stack monitoring system that tracks competitor web changes and generates strategic AI briefings using Gemini and FastAPI.

---

## What I Built
I built an autonomous, full-stack competitive intelligence application that automatically monitors competitor websites, detects structural and content changes, and synthesizes strategic briefings using Google Gemini. The platform features a Python-backed REST API and a real-time web dashboard that visualizes strategic updates and allows users to manage monitored targets dynamically.

## Problem
Businesses and product teams spend dozens of hours manually browsing competitor websites, pricing pages, and tech blogs to keep up with industry shifts. Manual monitoring is fragmented, easy to forget, and prone to missing subtle messaging pivots or unannounced product releases hidden within web page updates.

## Solution
The system automates the end-to-end intelligence pipeline: a Python scraper extracts and sanitizes web content into baseline snapshots, a LangChain and Google Gemini analysis engine identifies structural deltas and key strategic shifts, and a FastAPI gateway serves these briefings directly to an interactive, dark-mode web dashboard.

## Design Decisions
- **FastAPI & Uvicorn:** Selected for the backend gateway due to native asynchronous handling, high performance, and automatic OpenAPI documentation.
- **LangChain & Google Gemini:** Used to construct structured prompts that extract key competitive takeaways from diffs while preventing LLM hallucinations.
- **Tailwind CSS & Marked.js (CDN):** Adopted for the frontend dashboard to deliver a lightweight, responsive UI capable of rendering raw Markdown intelligence reports without requiring heavy build tools.
- **JSON Snapshot Storage:** Chose file-based JSON persistence for baseline snapshots to keep deployment zero-cost and lightweight while establishing a clean separation between data ingestion and AI analysis.

## Tradeoffs
- **File System Persistence vs. SQL Database:** Using JSON files simplified storage setup and local prototyping, but limits concurrent writes and persistence scaling across stateless hosting environments without persistent volume mounting.
- **Static Web Scraping vs. Headless Browsers:** `BeautifulSoup4` and `requests` were chosen for speed and low overhead, sacrificing the ability to extract content from heavy client-side, JavaScript-rendered single-page applications.

## Challenges
- **Python 3.14 Deployment Crash on Render:** During cloud deployment, the application failed on startup due to C-extension compatibility issues in `google-protobuf` under Python 3.14. I diagnosed the dependency conflict and configured Render's environment to run on Python 3.11.9, ensuring stable binary support.
- **GitHub Push Protection Violation:** While setting up version control, an active API key inside `.env.example` triggered GitHub's secret scanning protection. I scrubbed the secret, updated `.gitignore`, and amended the Git commit history to maintain strict security standards.

## What I'd Improve
- **Headless Scraping Integration:** Upgrade the scraper with Playwright or Selenium to handle dynamic, JavaScript-rendered web pages.
- **Database Migration:** Replace local JSON file persistence with a Supabase or PostgreSQL database for scale and historical querying.
- **Automated Cron Jobs:** Deploy background worker tasks using Celery or Redis Queue to execute web monitoring pipelines on fixed multi-day schedules automatically.

## Demo
[Live Project Link](https://competitor-intel-agent-tuf6.onrender.com/)

## Source Code
[GitHub Repository](https://github.com/TNS0510/competitor-intel-agent)