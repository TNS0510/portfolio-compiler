---
title: "Web Contact Manager Application (JavaScript & LocalStorage)"
description: "A responsive, client-side web application for real-time contact management and local browser persistence."
---

## What I Built
I expanded the CLI Contact Management System into an interactive, responsive web application built with HTML5, CSS3, modern JavaScript (ES6+), and Browser LocalStorage. Users can create, view, search, update, and delete contact records through a dark-mode user interface.

## Problem
Command-line interfaces require terminal environments, which are not accessible or intuitive for non-technical users or mobile device workflows. A web-based counterpart is needed to offer a visual interface, instant live search, and automatic data retention across browser sessions.

## Solution
The application pairs a mobile-friendly HTML5 form layout with a JavaScript event-driven architecture that manipulates DOM elements dynamically. Contact state is synchronized with `localStorage`, providing persistent CRUD operations without requiring backend server infrastructure.

## Design Decisions
- **Client-Side LocalStorage Persistence:** Utilized browser `localStorage` to retain contact records across sessions without the complexity or latency of external API requests.
- **Index-Based Form State Tracking:** Implemented a hidden input field (`#edit-index`) inside the form to toggle seamlessly between creation (`index = -1`) and mutation (`index >= 0`) modes using a single submission handler.
- **Real-Time Input Event Filtering:** Bound an `input` event listener to the search bar to trigger immediate re-renders of filtered contact arrays as the user types.

## Tradeoffs
- **Browser-Bound Storage vs. Remote Database:** Storing contacts in `localStorage` provides instant zero-latency reads, but limits data storage to the specific browser and device being used.
- **Vanilla DOM Manipulation vs. Frontend Framework:** Using pure JavaScript eliminated build steps and dependency overhead, though direct DOM manipulation requires explicit state synchronization.

## Challenges
- **Form Reload Interception:** Form submissions originally triggered native browser page refreshes, wiping active state. Resolved by applying `e.preventDefault()` inside the submit event handler to allow smooth DOM updates.
- **Index Desynchronization During Search:** Filtering contacts generated temporary array subsets, causing card actions (`Edit` / `Delete`) to target wrong indices. Resolved by resolving each filtered contact back to its original master array index using `.indexOf()`.

## What I'd Improve
- **Export & Import Functionality:** Add JSON export and import options so users can backup or transfer their address book between devices.
- **Form Input Validation Hints:** Provide real-time inline input validation with custom regex patterns for phone numbers and email addresses before submission.
- **Contact Categorization:** Introduce tag filters (e.g., *Work*, *Personal*, *Family*) to organize and filter contacts by group.

## Demo
[Live Contact Manager Application](https://TNS0510.github.io/contact-management-system)

## Source Code
[GitHub Repository](https://github.com/TNS0510/contact-management-system)