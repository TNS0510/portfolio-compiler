---
title: "Expense Tracker Web Application"
description: "A full-stack, persistent financial logging application built with Python, Flask, and JSON storage engineered to process multi-byte local currency symbols across platforms."
---

## What I Built
I built a full-stack personal finance web application using Python 3.12, Flask, Jinja2 templating, and CSS3. The application provides an interactive dashboard where users can submit and track income and expense transactions in real time with dynamic financial balance updates. All data persists locally in structured JSON format with full support for regional currency formatting, such as the Nigerian Naira (`₦`).

## Problem
Many beginner-friendly personal finance tools operate solely as temporary command-line interface (CLI) tools, losing all transaction history once the terminal session closes. Additionally, standard file I/O operations on default Windows environments (`cp1252` encoding) frequently crash when attempting to process non-ASCII Unicode currency symbols like the Naira (`₦`), rendering simple file persistence fragile and unreliable.

## Solution
To solve this, I decoupled the CLI engine into a web application using Flask to handle HTTP routes and form submissions (`/add`). I implemented a persistent storage mechanism using Python's `json` module, explicitly enforcing UTF-8 character encoding (`encoding="utf-8"`) and `ensure_ascii=False` across all read and write file streams. This guarantees cross-session data retention and crash-free handling of multi-byte Unicode currency characters on any operating system.

## Design Decisions
- **JSON Storage over Relational DB:** Selected local JSON file storage (`expenses.json`) over a traditional SQL database to keep the architecture zero-dependency, lightweight, and instantly portable without requiring external database drivers.
- **UTF-8 Stream Encoding:** Enforced explicit `utf-8` encoding parameters across both `load_transactions()` and `save_transactions()` to override system-default legacy code pages on Windows environments.
- **Post-Redirect-Get (PRG) Architecture:** Standardized the `/add` route to process form payloads and immediately issue a `302 Redirect` back to the root (`/`) route, preventing duplicate form submissions when users refresh their browsers.
- **Jinja2 Dynamic Rendering:** Utilized server-side template rendering to compute income, expense, and balance totals on the server before passing rendered HTML markup directly to the client.

## Tradeoffs
- **File I/O Bottlenecks vs. Setup Simplicity:** Utilizing a flat JSON file avoids database setup complexity, but creates file access contention and potential race conditions if multiple concurrent requests write to disk at once.
- **In-Memory Calculations vs. Indexed Queries:** Financial totals are recalculated on each page request via Python list comprehensions. While optimal for personal logging scales, this would benefit from database-level indexing as transaction volume grows into the tens of thousands.

## Challenges
When running the application on Windows, calling `json.load()` failed with a `UnicodeDecodeError: 'charmap' codec can't decode byte 0x8f` error as soon as transaction records contained the Naira (`₦`) symbol. The root cause was Python defaulting to the legacy Windows `cp1252` character map. I resolved this by auditing all `open()` functions to pass `encoding="utf-8"` explicitly and passing `ensure_ascii=False` into `json.dump()`, ensuring characters are preserved as readable Unicode text rather than escaped binary sequences.

## What I'd Improve
- **Database Layer Upgrade:** Migrate storage from `expenses.json` to an ORM-backed SQLite/PostgreSQL database using Flask-SQLAlchemy for full ACID compliance and transaction history indexing.
- **Interactive Data Visualization:** Integrate Chart.js on the frontend to visualize monthly expense breakdowns and spending trends by category via interactive pie and bar charts.
- **User Authentication & Authorization:** Implement multi-tenant security using Flask-Login and password hashing (Bcrypt) to allow multiple isolated user accounts.

## Demo
[Live Demo Link](https://expense-tracker-zvoz.onrender.com/)

## Source Code
[GitHub Repository](https://github.com/TNS0510/expense_tracker)