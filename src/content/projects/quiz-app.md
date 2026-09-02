---
title: "Interactive Python & JavaScript Quiz Application"
description: "A dual-interface assessment tool built with Python CLI and vanilla JS frontend featuring real-time evaluation and responsive card UI."
---

## What I Built
I engineered "Python Quiz Master," an interactive assessment platform featuring both a terminal-based Python CLI engine and a responsive vanilla JavaScript web interface. The application delivers real-time question evaluation, input sanitization, dynamic score calculations, and visual feedback states with zero external dependencies.

## Problem
Static assessment tools and manual quizzes lack immediate feedback loops, forcing users to wait for manual grading. Command-line users need a rapid, lightweight evaluation tool, while non-technical users require an intuitive visual web interface that works across devices without requiring server-side infrastructure.

## Solution
The application maps a single structured question data model across two distinct interfaces. The Python CLI engine provides immediate terminal execution with string case normalization, while the vanilla JS web application handles dynamic DOM injection, click event delegation, and interactive feedback states (`.correct` / `.incorrect`) without page reloads.

## Design Decisions
- **Nested Object / Dictionary Data Modeling:** Structured questions as objects/dictionaries containing prompt strings, option arrays, and explicit answer keys (`[{"question": "...", "options": [...], "answer": "..."}]`) for uniform iteration across both Python and JavaScript.
- **Input Sanitization & Normalization:** Applied string stripping and uppercase conversion (`.strip().upper()`) in Python and character extraction (`.charAt(0)`) in JavaScript to prevent casing or spacing mismatches.
- **Dynamic DOM Injection & State Locking:** Dynamically created option buttons in JavaScript while disabling inputs immediately after selection to prevent multi-click score inflation.

## Tradeoffs
- **In-Memory Question Storage vs. External API/JSON:** Hardcoding questions directly within source arrays prioritized execution simplicity and offline reliability over dynamic backend content management.
- **Full DOM Element Re-Creation vs. Virtual DOM:** Re-rendering option button nodes directly on question transitions simplified state management, sacrificing micro-benchmark DOM performance for zero-framework execution speed.

## Challenges
- **Input Casing False Negatives:** User entries like `"c"` initially failed against strict `"C"` answer key checks in the CLI. Solved by chaining `.strip().upper()` onto terminal inputs before comparison.
- **Visual State Locking on Answer Selection:** Preventing users from clicking multiple option buttons on a single question. Solved by iterating over `#options-container` children and setting `button.disabled = true` upon choice selection while revealing the `#next-btn`.

## What I'd Improve
- **LocalStorage High Score Persistence:** Store user high scores and historical quiz attempts in browser `localStorage` to track progress over time.
- **Dynamic Question Randomization:** Implement a shuffling algorithm (like Fisher-Yates) to randomize question and option order on every quiz run.
- **External JSON Question Bank:** Refactor question data into a separate `questions.json` file loaded via `fetch()` to decouple quiz content from frontend logic.

## Demo
[Live Quiz Web Application](https://tns0510.github.io/quiz-app/)

## Source Code
[GitHub Repository](https://github.com/TNS0510/quiz-app)