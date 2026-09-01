---
title: "Online Number Guessing Game (Python CLI & Web Application)"
description: "A dual-tier number guessing application demonstrating cross-platform state management across Python terminal environments and modern browser interfaces."
---

## What I Built
I built a multi-interface number guessing application featuring both a Python Command-Line Interface (CLI) and an interactive web application hosted live on GitHub Pages. The project handles random target generation, attempt state tracking, and resilient input validation using vanilla HTML5, CSS3, JavaScript, and Python.

## Problem
Command-line tools require local runtime environments (like Python) and terminal knowledge, making them inaccessible for instant sharing or mobile use. Additionally, basic web applications often fail to handle edge cases cleanly, resulting in interface breaks when invalid inputs are submitted.

## Solution
The application delivers two complete delivery tiers: a Python script for CLI execution and a web implementation using an event-driven JavaScript architecture. The web interface utilizes dynamic DOM manipulation to track attempt counts, update feedback visual states, and manage soft game resets without requiring browser page reloads.

## Design Decisions
- **Event-Driven Web Architecture:** Leveraged JavaScript `addEventListener` hooks for mouse clicks and keyboard `Enter` actions, replacing sequential CLI input loops with continuous browser responsiveness.
- **Single-Page Vanilla Web Stack:** Used native HTML, CSS, and vanilla JavaScript to avoid external framework overhead, maximizing initial load performance and simplifying GitHub Pages deployment.
- **Client-Side Exception Boundaries:** Implemented `try...except ValueError` in Python and `isNaN()` validation checks in JavaScript to catch malformed inputs at the interface boundary before processing.

## Tradeoffs
- **Vanilla JS vs. Component Frameworks:** Selected plain JavaScript over React to eliminate build steps and keep hosting dependency-free, sacrificing component reusability for lightweight deployment.
- **In-Memory Volatile State:** Kept attempt counters and secret numbers in local memory state rather than persistent database storage, prioritizing instant client-side response over cross-session score retention.

## Challenges
- **UI State Locks on Victory:** Ending the game required preventing further guesses while revealing the restart trigger. Solved by toggling DOM control properties (`disabled = true`) and managing CSS display utility classes (`.hidden`) dynamically upon victory conditions.
- **Invalid Input State Pollution:** Malformed inputs initially incremented attempt counters. Fixed by placing validation checks ahead of state mutations, returning early when inputs fall outside acceptable numeric bounds.

## What I'd Improve
- **Local Persistence Leaderboard:** Utilize `localStorage` to save user high scores and personal best attempt records across browser sessions.
- **Difficulty Range Selector:** Add UI controls to let users toggle target number ranges (e.g., Easy: 1-50, Hard: 1-500) dynamically.
- **Audio Feedback Integration:** Integrate Web Audio API sounds for guess triggers, incorrect hints, and victory announcements.

## Demo
[Live Project Demo](https://tns0510.github.io/number-guessing-game/)

## Source Code
[GitHub Repository](https://github.com/TNS0510/number-guessing-game)