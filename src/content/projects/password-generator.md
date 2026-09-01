---
title: "Customizable Password Generator (Python CLI & Client-Side Web App)"
description: "A dual-interface security tool providing client-side high-entropy password generation across Python terminal and browser environments."
---

## What I Built
I engineered a multi-interface password generation application featuring an interactive Python CLI and a responsive client-side web application. The application enables users to generate cryptographically random passwords tailored to custom length and character set preferences.

## Problem
Human users inherently struggle to invent randomized, high-entropy passwords, relying instead on predictable patterns that expose accounts to credential-stuffed attacks. Existing web tools often transmit parameters across network boundaries unnecessarily or present bloated interfaces that slow down password generation workflows.

## Solution
The application delivers localized, zero-dependency password generation across terminal and browser environments. The web tier (`index.html`, `style.css`, `script.js`) utilizes client-side JavaScript execution to manipulate strings directly in the DOM, while the Python tier (`main.py`) provides an interactive CLI with built-in input type parsing and exception handling.

## Design Decisions
- **Client-Side Execution Engine:** Engineered the generation logic to run entirely within the user's browser, eliminating external HTTP server requests and preserving privacy.
- **Dynamic Character Pool Concatenation:** Implemented modular boolean toggles that assemble a master selection string on demand, allowing instant exclusion of specific character classes.
- **Unified UI Component Hierarchy:** Styled the web interface using native CSS flexbox alignment and dynamic accent property controls to ensure responsive performance across mobile and desktop viewports.

## Tradeoffs
- **Pure Client-Side Generation vs. Server-Side APIs:** Built the web engine strictly with standard client-side logic to avoid network transport, sacrificing central audit logging capabilities in exchange for zero-latency generation and enhanced privacy.
- **Standard Library Modules vs. External Cryptographic Packages:** Utilized standard library implementations (`random` in Python and `Math.random` in JavaScript) to keep the repository lightweight and dependency-free, trading ultra-high cryptographic randomness for immediate cross-platform portability.

## Challenges
- **CLI String Cast Failures (`ValueError`):** Handling arbitrary user terminal entries when prompting for password length risked breaking runtime execution. Solved by implementing explicit `try...except ValueError` parsing blocks to gracefully fall back to safe default lengths.
- **GitHub Pages Directory Routing:** Initial web hosting setups can default to invalid root directories. Ensured `index.html` was situated directly in the root directory alongside asset scripts to maintain seamless build automation.

## What I'd Improve
- **Cryptographic Randomness Upgrade:** Upgrade sampling functions to utilize `window.crypto.getRandomValues()` in JavaScript and `secrets` in Python for cryptographically secure pseudo-random number generation (CSPRNG).
- **Clipboard API Integration:** Implement a one-click "Copy to Clipboard" action button with visual feedback notifications within the web interface.
- **Entropy & Strength Meter:** Add a real-time visual progress bar calculating bit-entropy score based on password length and active character set density.

## Demo
[Live Password Generator Demo](https://tns0510.github.io/password-generator/)

## Source Code
[GitHub Repository](https://github.com/TNS0510/password-generator)