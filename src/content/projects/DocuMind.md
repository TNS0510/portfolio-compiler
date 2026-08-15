---
title: "DocuMind CAG: Document Intelligence & Knowledge Extractor"
description: "A Context-Augmented Generation (CAG) engine that leverages Gemini 2.5 Flash's long-context window for 100% recall Q&A and Pydantic schema extractions."
---

## What I Built
DocuMind CAG is an AI document intelligence dashboard built with Python 3.12, the Google GenAI SDK (`gemini-2.5-flash`), `pypdf`, Pydantic v2, and Streamlit. It bypasses vector database chunking by loading full long-form documents directly into active LLM context memory to perform zero-loss Q&A and structured JSON extractions.

## Problem
Traditional chunk-based Retrieval-Augmented Generation (RAG) systems fragment documents into small text chunks. When processing holistic questions—such as summarizing overall risk factors or cross-referencing sections across an entire file—vector retrieval often misses critical context, leading to incomplete or inaccurate answers.

## Solution
DocuMind CAG solves this by utilizing Context-Augmented Generation (CAG). It ingests full raw text from uploaded PDFs/TXT files, computes active token counts using native Gemini tokenization APIs, and retains the entire document within system context. This enables multi-turn document chat with 100% information recall alongside a Pydantic-validated extraction engine for executive summaries, core insights, and risk flags.

## Design Decisions
- **Context-Augmented Generation (CAG) over RAG**: Chosen because the primary target files (reports, specs, and underwrites) easily fit within Gemini’s long context window (1M+ tokens), eliminating vector embedding overhead, chunking logic, and retrieval latency.
- **Pydantic Schema Enforcement**: Implemented `DocumentInsights` models paired with `response_mime_type="application/json"` to guarantee deterministic, parseable JSON outputs for the dashboard interface.
- **Real-time Token Budgeting**: Integrated native `client.models.count_tokens()` prior to execution to monitor context utilization and prevent unexpected API token usage.

## Tradeoffs
- **Context Memory vs. Vector Scalability**: CAG delivers 100% information recall for small-to-medium documents, but sending full documents on every request increases input token usage compared to retrieving top-k vector chunks.
- **Pure-Python Parsing vs. Heavy OCR**: Used `pypdf` for fast, lightweight text extraction. While ideal for standard digital PDFs, non-searchable scanned image PDFs require an external OCR pipeline.

## Challenges
During structured extraction setup, newer `google-genai` SDK builds issued deprecation notices regarding Automatic Function Calling (AFC) triggers inside single `generate_content` calls. By isolating Pydantic schemas explicitly within `GenerateContentConfig` and tuning model temperature to `0.2`, the schema enforced cleanly without chat-session overhead.

## What I'd Improve
- **Hybrid CAG/RAG Switch**: Add an automatic routing layer that dynamically selects CAG for documents under 100k tokens and switches to vector RAG for massive multi-file libraries.
- **Async File Processing**: Implement asynchronous ingestion pipelines (`asyncio`) to handle multi-document uploads concurrently without blocking the main UI thread.
- **Export Capabilities**: Allow users to export extracted Pydantic insights as downloadable PDF executive briefs or JSON payload endpoints.

## Demo
[Live Demo on Streamlit Cloud](https://documind-cag.streamlit.app/)

## Source Code
[GitHub Repository](https://github.com/TNS0510/documind-cag)