---
title: "Task Flow - Responsive LocalStorage To-Do Web App"
description: "A responsive client-side task manager featuring custom CSS card layouts and persistent browser LocalStorage CRUD operations."
---

## What I Built
I engineered "Task Flow," a modern web-based task management application using vanilla HTML5, custom CSS3, and JavaScript (ES6+). The application provides an interactive user interface for creating, tracking, toggling, and deleting tasks with zero page reloads and client-side data persistence.

## Problem
Command-line applications require terminal access, making them inaccessible to standard web users. Non-technical users need an intuitive visual interface to manage daily tasks seamlessly across desktop and mobile devices while preserving their data across browser sessions.

## Solution
The application maps complete CRUD functionality to a clean browser interface powered by dynamic DOM manipulation. By leveraging browser `localStorage` serialization, user tasks persist continuously on the device without requiring an external database or server infrastructure.

## Design Decisions
- **Vanilla JavaScript (ES6+):** Standardized on native JavaScript DOM manipulation methods rather than external frontend frameworks (like React or Vue) to eliminate dependency overhead and ensure fast load times.
- **LocalStorage Data Engine:** Utilized `localStorage` with `JSON.parse` and `JSON.stringify` serialization to provide zero-latency, client-side data persistence across browser restarts.
- **Flexbox & Utility Styling:** Designed a dark-mode card layout using modern CSS Flexbox for clean vertical alignment, responsive scaling, and visual feedback for task status.

## Tradeoffs
- **Client-Side Storage vs. Cloud Sync:** Relying on browser `localStorage` ensures immediate offline capability and fast load times, but restricts task access to the specific device and browser where items were created.
- **In-Memory DOM Re-Rendering:** Re-rendering the full task list array on state changes simplifies data sync logic, but could cause minor rendering overhead if scaling to thousands of simultaneous list items.

## Challenges
- **Dynamic Event Binding for Action Buttons:** Binding click handlers to dynamically created elements (`✅` and `🗑️`) inside generated list items threatened to duplicate event triggers. Solved by decoupling data mutations into modular functions (`toggleTask` and `deleteTask`) and binding them cleanly during node creation.
- **UI State Synchronization:** Ensuring task completion visual states (`line-through` and border color changes) stayed strictly synchronized with `localStorage`. Resolved by making array state the single source of truth and running `saveTasks()` before every re-render.

## What I'd Improve
- **Category Tags & Search Filter:** Introduce category tags (e.g., Work, Personal) and a real-time search input to filter tasks by status or title.
- **Drag-and-Drop Reordering:** Integrate the HTML5 Drag and Drop API to allow users to manually reorder tasks by priority.
- **Backend API Sync:** Connect the frontend to a Node.js/Express REST API and database to sync user tasks across multiple devices.

## Demo
[Live To-Do Web Application](https://tns0510.github.io/todo-list/)

## Source Code
[GitHub Repository](https://github.com/TNS0510/todo-list)