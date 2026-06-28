---
title: "Semantic PDF Searcher"
description: "A semantic search engine that lets users query 200-page PDFs in seconds using vector embeddings."
---

## What I Built
Semantic PDF Searcher is an AI-powered document search application that enables users to upload large PDF documents and ask questions in natural language. Built with Python, ChromaDB, OpenAI API, and Streamlit, it transforms lengthy documents into a searchable knowledge base that returns relevant answers almost instantly.

## Problem
Searching through large PDF documents is slow and inefficient. Traditional keyword search often fails when users don't know the exact wording used in the document, forcing them to manually scan hundreds of pages for information. This becomes especially frustrating with technical manuals, research papers, legal documents, and reports.

## Solution
The application converts uploaded PDFs into semantic vector embeddings that capture the meaning of the text rather than just individual words. The document is first split into manageable chunks before being indexed in ChromaDB. When a user submits a question, the application performs a similarity search to retrieve only the most relevant sections and sends those to the OpenAI API, allowing the model to generate accurate, context-aware responses without processing the entire document.

## Design Decisions
One of the key architectural decisions was using ChromaDB as the vector database. Since it runs locally in memory, it eliminated cloud hosting costs during development while providing fast semantic search capabilities.

Instead of sending the entire PDF to the OpenAI API, the document is divided into approximately 500-character chunks. Each chunk is embedded and stored separately, allowing efficient vector similarity search. At query time, only the three most relevant chunks are sent to the language model. This dramatically reduces token usage, lowers API costs, and improves response speed while maintaining answer quality.

Streamlit was selected for the frontend because it provides a rapid development workflow, making it easy to prototype and deploy an interactive AI application with minimal frontend code.

## Tradeoffs
Using ChromaDB locally keeps development costs low and offers excellent performance for single-user applications. However, an in-memory database is not ideal for large-scale production deployments where persistent storage and distributed infrastructure would be required.

Chunking the document into fixed 500-character segments significantly reduces API costs and improves efficiency, but fixed-size chunks may occasionally split related ideas across boundaries, which can reduce retrieval quality for certain questions.

Limiting context to the top three matching chunks minimizes latency and token consumption, though some complex questions spanning multiple sections may benefit from retrieving additional context.

## Challenges
The biggest technical challenge was controlling OpenAI API costs. The initial implementation sent the entire extracted PDF text with every user query, causing excessive token usage and slow responses.

This was solved by implementing a Retrieval-Augmented Generation (RAG) pipeline. The PDF text was split into 500-character chunks, converted into vector embeddings, and stored in ChromaDB. For each question, vector similarity search identifies only the three most relevant chunks, reducing API usage dramatically while improving both response speed and answer relevance.

## What I'd Improve
* Add persistent vector storage so indexed documents remain available across application restarts.
* Support multi-document collections with metadata filtering, allowing users to search across entire document libraries.
* Introduce background indexing, document summaries, and streaming responses to improve the overall user experience for large uploads.

## Demo
Live Project: https://your-live-demo-link.com

## Source Code
GitHub Repository: https://github.com/yourusername/semantic-pdf-searcher