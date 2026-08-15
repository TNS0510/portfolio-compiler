---
title: "VectorVault RAG: Semantic Knowledge & Search Engine"
description: "A grounded RAG system built with a custom NumPy cosine similarity vector store, gemini-embedding-2 vectors, and source-cited synthesis via Gemini 2.5 Flash."
---

## What I Built
VectorVault RAG is a semantic document search and Q&A engine built using Python 3.12, NumPy, the Google GenAI SDK (`gemini-embedding-2` & `gemini-2.5-flash`), and Streamlit. It breaks unstructured text/markdown documents into overlapping text chunks, generates 3,072-dimensional dense embeddings, stores them in an in-memory NumPy matrix, and uses cosine similarity math to retrieve relevant context for grounded LLM answer synthesis.

## Problem
Standard keyword searches (BM25 or text matching) fail when users query knowledge bases using different phrasing than the exact text. Additionally, off-the-shelf LLMs frequently hallucinate facts when asked questions outside their training data or when handling private enterprise documentation.

## Solution
VectorVault RAG resolves this by decoupling knowledge storage from model weights. It converts user queries into dense vector embeddings and uses high-dimensional vector space math (cosine similarity) to identify semantically related document chunks. These top-$k$ retrieved chunks are passed into `gemini-2.5-flash` with strict grounding system instructions, forcing the model to cite its sources (`[Source: filename]`) and prevent hallucinations.

## Design Decisions
- **NumPy Matrix Operations over External Vector DBs**: Implemented cosine similarity search from scratch using standard matrix dot products ($\vec{q} \cdot \vec{d}_i$) and $L_2$ vector norm normalizations ($\|\vec{q}\| \|\vec{d}_i\|$). This eliminated external database dependencies for the MVP while exposing the fundamental math behind vector indexing.
- **Overlapping Window Chunker**: Implemented sliding character windows (500-char size, 50-char overlap) to preserve sentence boundary context across adjacent chunks.
- **Strict Grounding Constraints**: Forced LLM temperature to `0.2` and instructed the model to declare insufficient context if top similarity scores fail to answer the query.

## Tradeoffs
- **In-Memory Store vs. Persistent Vector Database**: Storing vectors in memory via NumPy provides zero-latency search and simple setup for small-to-medium files, but vectors are lost on server restart and cannot scale to millions of documents like Pinecone or Qdrant.
- **Fixed-Size Character Chunking vs. Semantic Boundary Chunking**: Fixed-size chunking is computationally fast, but occasionally splits logical paragraphs arbitrarily compared to AST/Markdown-aware semantic splitters.

## Challenges
During integration of the `google-genai` SDK, legacy embedding model aliases (`text-embedding-004`) triggered `404 NOT_FOUND` errors on the standard endpoint. Migrating the embedding generator to `gemini-embedding-2` resolved the endpoint mapping and yielded high-density 3,072-dimensional vector representations.

## What I'd Improve
- **Hybrid Search (BM25 + Dense Vectors)**: Combine keyword search with dense vector embeddings using Reciprocal Rank Fusion (RRF) to handle both exact term matches (e.g., product IDs) and semantic queries.
- **Persistent Storage Integration**: Connect the backend to an instance of Qdrant or ChromaDB for persistent vector indexing across sessions.
- **Metadata Filtering**: Allow users to filter search results by source file, creation date, or document category prior to vector similarity calculation.

## Demo
[Live Demo on Streamlit Cloud](https://vectorvault-rag.streamlit.app/)

## Source Code
[GitHub Repository](https://github.com/TNS0510/vectorvault-rag)