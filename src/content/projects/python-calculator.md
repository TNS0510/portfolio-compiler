---
title: "Python Calculator (CLI, Tkinter Desktop GUI, & Web Application)"
description: "A multi-tier calculator suite demonstrating clean separation of application logic across terminal, desktop GUI, and web-hosted interfaces."
---

## What I Built
I engineered a full-stack, multi-tier calculator application featuring a Python Command-Line Interface (CLI), a desktop Graphical User Interface (GUI) built with Tkinter, and a modern web interface. The project delivers robust mathematical processing, dynamic layout geometry scaling, and input validation across all three distribution channels.

## Problem
Beginner applications frequently couple mathematical execution directly with visual presentation, resulting in fragile code that breaks easily on invalid user input or window resizes. Additionally, desktop-only scripts limit access for prospective employers or users who want an instant, zero-install web demonstration.

## Solution
The application separates core calculation handling into independent UI tiers. The desktop tier (`gui.py`) leverages Tkinter's grid geometry manager with dynamic row/column weights, while the web tier (`index.html`, `style.css`, `script.js`) uses CSS Grid and JavaScript exception boundaries—delivering a seamless, live web app hosted directly on GitHub Pages.

## Design Decisions
- **Decoupled Architecture:** Kept business logic isolated across CLI, desktop, and web modules to ensure visual changes do not break underlying math execution.
- **CSS Grid & Flexible Layouts:** Configured CSS Grid (`repeat(4, 1fr)`) and Tkinter column weights (`columnconfigure(i, weight=1)`) to ensure smooth visual scaling across modern browser viewports and desktop window resizes.
- **Localized Exception Boundaries:** Implemented `try...catch` blocks around expression parsing (`eval`) to catch arithmetic and syntax errors gracefully without crashing the execution environment.

## Tradeoffs
- **Built-in Tkinter vs. Modern Desktop Frameworks:** Selected native Tkinter to eliminate third-party dependencies and run natively on any OS, sacrificing custom dark-mode window frame styling.
- **`eval()` Function Evaluation:** Opted for evaluated string parsing to keep the client codebase light and responsive, accepting the requirement to strictly limit inputs within local, trusted scope.

## Challenges
- **Terminal Buffer Crash (`PSReadLine`):** Accidental pasting of raw Python statements into PowerShell caused display buffer errors. Solved by isolating terminal commands into discrete file executions (`python gui.py`).
- **Unstaged Git Snapshots:** Initial commit attempts failed because newly created project files remained in Git's untracked staging area. Fixed by enforcing a strict two-stage commit process (`git add .` followed by `git commit`).

## What I'd Improve
- **Abstract Syntax Tree (AST) Parser:** Replace string-based evaluation with a custom AST or Shunting-yard algorithm for safer mathematical expression parsing.
- **Physical Keyboard Events:** Bind keydown listeners directly to the web interface to enable standard typing and numeric keypad input.
- **Automated Test Suite:** Integrate `pytest` and JavaScript testing frameworks to programmatically verify edge-case calculations and zero-division handling.

## Demo
[Live Project Demo](https://tns0510.github.io/python-calculator/)

## Source Code
[GitHub Repository](https://github.com/TNS0510/python-calculator)