---
title: "Custom Compiler"
description: "A lightweight compiler built to understand language parsing."
---

## What I Built
A hand-crafted compiler written in TypeScript that parses a custom mathematical syntax and compiles it into executable JavaScript.

## Problem
Many engineers treat compilers as black boxes, making it difficult to optimize complex code execution or debug deeply rooted syntax errors.

## Solution
I built a 3-stage compiler (Lexer, Parser, Code Generator) to explicitly map out how string tokens convert into an Abstract Syntax Tree (AST).

## Design Decisions
* **Recursive Descent Parsing:** Chosen over parser generators for absolute control over error handling.
* **Monolithic Tokenizer:** Kept standard regex tokens to keep memory overhead minimal.

## Tradeoffs
* **Speed vs. Maintainability:** Writing it from scratch took 3x longer than using an AST generator tool, but yielded 100% custom error messages.

## Challenges
Handling nested parentheses without causing an infinite recursive loop was difficult. I resolved this by introducing a lookahead pointer in the Lexer.

## What I'd Improve
* Add support for variable definitions.
* Implement a basic optimization pass to remove dead code.

## Demo
[Link to Live Project]

## Source Code
[Link to GitHub Repository]