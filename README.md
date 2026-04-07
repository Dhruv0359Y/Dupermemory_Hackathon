<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<title>DuperMemory AI – README</title>
</head>
<body>

<!-- ═══════════════════════════════════════════════════════════ HERO -->
<div align="center">
  <br/>
  <img width="120" src="https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/NodeJS-Dark.svg" alt="logo placeholder"/>
  <h1>🧠 DuperMemory AI</h1>
  <h3><em>Memory-as-a-Service (MaaS) for the Next Generation of AI Applications</em></h3>
  <p>
    <img src="https://img.shields.io/badge/version-1.0.0-10b981?style=flat-square" alt="version"/>
    <img src="https://img.shields.io/badge/license-MIT-6366f1?style=flat-square" alt="license"/>
    <img src="https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white" alt="node"/>
    <img src="https://img.shields.io/badge/AI-Google%20Gemini-4285F4?style=flat-square&logo=google&logoColor=white" alt="gemini"/>
    <img src="https://img.shields.io/badge/Vector%20DB-Qdrant-DC143C?style=flat-square" alt="qdrant"/>
    <img src="https://img.shields.io/badge/Frontend-React%20%2B%20Tailwind-38bdf8?style=flat-square&logo=react&logoColor=white" alt="react"/>
    <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square" alt="prs"/>
    <img src="https://img.shields.io/badge/status-active-success?style=flat-square" alt="status"/>
  </p>
  <p>
    <a href="#overview">Overview</a> &nbsp;·&nbsp;
    <a href="#problem">Problem</a> &nbsp;·&nbsp;
    <a href="#solution">Solution</a> &nbsp;·&nbsp;
    <a href="#architecture">Architecture</a> &nbsp;·&nbsp;
    <a href="#workflow">Workflow</a> &nbsp;·&nbsp;
    <a href="#api">API Reference</a> &nbsp;·&nbsp;
    <a href="#quickstart">Quickstart</a> &nbsp;·&nbsp;
    <a href="#tech-stack">Tech Stack</a> &nbsp;·&nbsp;
    <a href="#contributing">Contributing</a>
  </p>
  <br/>
  <blockquote>
    <strong>"Instead of building smarter models, we make AI systems smarter by giving them memory."</strong>
  </blockquote>
  <br/>
</div>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ OVERVIEW -->
<h2 id="overview">🌟 Overview</h2>

<p>
  <strong>DuperMemory AI</strong> is a developer-first <strong>Memory-as-a-Service (MaaS)</strong> platform that solves one of the most fundamental limitations of modern AI — <em>stateless, forgetful behavior</em>.
</p>

<p>
  Large Language Models (LLMs) are powerful thinkers. They reason, write, and generate with remarkable sophistication. But they have a critical flaw: <strong>they have no memory</strong>. Every conversation starts from zero. Every session is a blank slate. Users are forced to re-explain themselves. Personalization is impossible. Long-term context is lost.
</p>

<p>
  DuperMemory AI changes this. It acts as a <strong>persistent, intelligent memory layer</strong> that any developer can plug into any AI application — in just a few lines of code. DuperMemory decides what to remember, stores it using semantic vector embeddings, and retrieves the most relevant memories at inference time to dramatically enhance AI responses.
</p>

<p>
  Think of it as giving your AI a <strong>long-term brain</strong>.
</p>

<table>
  <thead>
    <tr>
      <th>Without DuperMemory</th>
      <th>With DuperMemory</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>❌ AI forgets users after every session</td>
      <td>✅ AI remembers users across all sessions</td>
    </tr>
    <tr>
      <td>❌ Limited to context window (~4k–128k tokens)</td>
      <td>✅ Unlimited long-term semantic memory</td>
    </tr>
    <tr>
      <td>❌ Repetitive, generic responses</td>
      <td>✅ Personalized, context-aware responses</td>
    </tr>
    <tr>
      <td>❌ Stores everything blindly (noisy DB)</td>
      <td>✅ Smart filtering — stores only what matters</td>
    </tr>
    <tr>
      <td>❌ Keyword-based lookup (fragile)</td>
      <td>✅ Semantic vector search (meaning-based retrieval)</td>
    </tr>
    <tr>
      <td>❌ Requires model fine-tuning for memory</td>
      <td>✅ Plug-and-play REST API, no retraining needed</td>
    </tr>
  </tbody>
</table>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ CORE CONCEPT -->
<h2 id="core-concept">🧠 Core Concept</h2>

<p>
  DuperMemory is built on one powerful insight:
</p>

<blockquote>
  <strong>Separate intelligence from memory.</strong>
</blockquote>

<p>
  LLMs are excellent at <em>thinking</em> — reasoning, generating, summarizing. But they are terrible at <em>remembering</em>. DuperMemory offloads the responsibility of memory to a dedicated system, allowing your LLM to focus entirely on what it does best.
</p>

<table>
  <thead>
    <tr>
      <th>Component</th>
      <th>Responsibility</th>
      <th>Tool</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>🤖 LLM (e.g. Google Gemini)</td>
      <td>Thinking, reasoning, generating responses</td>
      <td>Gemini API</td>
    </tr>
    <tr>
      <td>🧠 DuperMemory</td>
      <td>Remembering, filtering, retrieving context</td>
      <td>DuperMemory API</td>
    </tr>
  </tbody>
</table>

<p>
  This separation is what makes DuperMemory universally compatible — it works alongside <em>any</em> LLM: Gemini, GPT-4, Claude, Mistral, LLaMA, and more.
</p>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ PROBLEM -->
<h2 id="problem">⚠️ Problem Statement</h2>

<p>AI developers building production applications consistently run into the same walls:</p>

<h3>1. 🔇 No Long-Term Memory</h3>
<p>
  LLMs are stateless by design. Once a conversation ends, everything is lost. Users must re-introduce themselves, re-explain preferences, and re-establish context every single time. This makes building truly intelligent, relationship-aware AI nearly impossible.
</p>

<h3>2. 📦 Context Window Limitations</h3>
<p>
  Even with large context windows (32k, 128k tokens), there are hard limits. For long-running applications — customer support bots, personal assistants, AI-powered CRMs — the context window is insufficient to hold months or years of interaction history.
</p>

<h3>3. 🌊 Noisy, Unfiltered Storage</h3>
<p>
  Naive implementations store raw chat history into databases. This floods the storage with irrelevant filler — greetings, confirmations, tangential remarks — which pollutes search results and degrades retrieval quality over time.
</p>

<h3>4. 🎯 Lack of Personalization</h3>
<p>
  Without persistent memory, AI cannot adapt to individual users. Every user gets the same generic response. There is no learning, no adaptation, no personalization — which is the baseline expectation for any modern software product.
</p>

<h3>5. 🔧 Engineering Complexity</h3>
<p>
  Building a memory system from scratch — embedding pipelines, vector databases, retrieval logic, filtering heuristics — is a significant engineering investment. Most teams don't have the bandwidth, which means memory is skipped entirely.
</p>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ SOLUTION -->
<h2 id="solution">⚡ Solution — The DuperMemory Smart Memory Layer</h2>

<p>
  DuperMemory provides a complete, production-ready memory infrastructure that plugs into any AI application via REST API. It handles the full memory lifecycle: <strong>filter → embed → store → retrieve → inject → respond</strong>.
</p>

<h3>🔥 1. Smart Memory Filter</h3>
<p>
  Not all information is worth remembering. DuperMemory's smart filter evaluates each input before storage, scoring it for relevance, informativeness, and long-term value. Greetings, filler responses, and noise are discarded automatically. Only meaningful, actionable memories are persisted.
</p>
<ul>
  <li>LLM-powered relevance scoring</li>
  <li>Configurable filtering thresholds per application</li>
  <li>Prevents database pollution and retrieval degradation</li>
  <li>Reduces storage costs by eliminating redundant data</li>
</ul>

<h3>🔍 2. Semantic Vector Embeddings</h3>
<p>
  DuperMemory converts all stored memories into high-dimensional vector embeddings using Google Gemini's embedding models. This enables <strong>meaning-based retrieval</strong> rather than fragile keyword matching.
</p>
<ul>
  <li>Retrieves memories based on <em>semantic similarity</em>, not exact strings</li>
  <li>"I enjoy coding" and "I love software development" are understood as related</li>
  <li>Handles paraphrasing, synonyms, and contextual nuance naturally</li>
  <li>Powered by state-of-the-art embedding models</li>
</ul>

<h3>🗄️ 3. Scalable Vector Storage (Qdrant)</h3>
<p>
  All embeddings are stored in <strong>Qdrant</strong>, a high-performance open-source vector database optimized for similarity search at scale. Each memory is stored with rich metadata (user ID, timestamp, source, tags) enabling precise, multi-user retrieval.
</p>
<ul>
  <li>Sub-millisecond similarity search</li>
  <li>Full multi-tenant support (isolated memory per user)</li>
  <li>Horizontal scalability for production workloads</li>
  <li>Payload filtering for advanced retrieval queries</li>
</ul>

<h3>🔌 4. Plug-and-Play REST API</h3>
<p>
  DuperMemory exposes a clean, well-documented REST API that integrates with any language, framework, or AI stack. No SDKs required. No infrastructure to manage. Just HTTP requests.
</p>
<ul>
  <li>API key authentication out of the box</li>
  <li>Multi-user namespacing via <code>user_id</code></li>
  <li>Works with Node.js, Python, Go, Ruby, or any HTTP client</li>
  <li>Designed for both server-side and edge deployments</li>
</ul>

<h3>💉 5. Intelligent Context Injection</h3>
<p>
  At inference time, DuperMemory retrieves the top-K most semantically relevant memories for the current query and injects them into the LLM's system prompt as structured context. The LLM responds with full awareness of the user's history — without ever exceeding the context window.
</p>
<ul>
  <li>Dynamic, query-time memory retrieval</li>
  <li>Configurable top-K results (default: 5)</li>
  <li>Structured prompt injection with memory attribution</li>
  <li>Compatible with any LLM's system prompt format</li>
</ul>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ ARCHITECTURE -->
<h2 id="architecture">🏗️ System Architecture</h2>

<pre><code>
┌─────────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                             │
│         React Dashboard / Developer Playground / API            │
└─────────────────────────┬───────────────────────────────────────┘
                          │  HTTPS
                          ▼
┌─────────────────────────────────────────────────────────────────┐
│                      API GATEWAY                                │
│               Node.js + Express.js Server                       │
│        Auth Middleware → Rate Limiter → Router                  │
└───────┬─────────────────┬─────────────────────┬────────────────┘
        │                 │                     │
        ▼                 ▼                     ▼
┌──────────────┐  ┌──────────────┐    ┌──────────────────────┐
│    /store    │  │   /search    │    │        /chat         │
│   endpoint   │  │   endpoint   │    │       endpoint       │
└──────┬───────┘  └──────┬───────┘    └──────────┬───────────┘
       │                 │                        │
       ▼                 │                        ▼
┌──────────────┐         │             ┌──────────────────────┐
│ Smart Memory │         │             │   Smart Memory       │
│   Filter     │         │             │   Filter (inline)    │
│              │         │             └──────────┬───────────┘
│ Score input  │         │                        │
│ → Keep/Drop  │         │                        ▼
└──────┬───────┘         │             ┌──────────────────────┐
       │ (if keep)       │             │  Memory Retrieval    │
       ▼                 ▼             │  (vector search)     │
┌──────────────────────────────────────────────────────────────┐
│                   EMBEDDING SERVICE                          │
│              Google Gemini Embedding API                     │
│          text → float32[768] vector representation          │
└──────────────────────────┬───────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────┐
│                    VECTOR DATABASE                           │
│                   Qdrant (Self-hosted / Cloud)               │
│                                                              │
│  Collection: memories                                        │
│  ┌──────────┬────────────────────────────┬────────────────┐ │
│  │ vector[] │ payload: { user_id, text,  │  score (cosine)│ │
│  │          │ timestamp, source, tags }  │                │ │
│  └──────────┴────────────────────────────┴────────────────┘ │
└──────────────────────────┬───────────────────────────────────┘
                           │ top-K results
                           ▼
┌──────────────────────────────────────────────────────────────┐
│                  CONTEXT INJECTION                           │
│   Formats retrieved memories → structured system prompt      │
│   Appends user query → sends full prompt to LLM              │
└──────────────────────────┬───────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────┐
│                    LLM SERVICE                               │
│               Google Gemini (gemini-pro)                     │
│         Receives memory-augmented prompt → Generates         │
│                 context-aware response                       │
└──────────────────────────┬───────────────────────────────────┘
                           │
                           ▼
                    Final AI Response
                 (Returned to client)
</code></pre>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ WORKFLOW -->
<h2 id="workflow">🔄 Detailed Workflow</h2>

<h3>🟢 Memory Storage Flow</h3>

<pre><code>
User Input (text)
      │
      ▼
┌─────────────────────────────┐
│     Smart Memory Filter      │
│                             │
│  Score = LLM.evaluate(text) │
│  Threshold = 0.6 (default)  │
└──────────┬──────────────────┘
           │
    ┌──────▼──────┐
    │  Score ≥ 0.6? │
    └──┬───────┬───┘
       │ YES   │ NO
       ▼       ▼
  Proceed    Discard
       │     (return: "Memory not stored — low relevance")
       ▼
┌─────────────────────────────┐
│    Embedding Service        │
│  vector = embed(text)       │
│  → float32[768]             │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│      Qdrant Storage         │
│  store(vector, {            │
│    user_id, text,           │
│    timestamp, source        │
│  })                         │
└──────────┬──────────────────┘
           │
           ▼
  ✅ Memory stored successfully
</code></pre>

<h3>🔵 Memory Retrieval Flow</h3>

<pre><code>
User Query (text)
      │
      ▼
┌─────────────────────────────┐
│    Embedding Service        │
│  query_vec = embed(query)   │
└──────────┬──────────────────┘
           │
           ▼
┌─────────────────────────────┐
│   Qdrant Vector Search      │
│  results = search({         │
│    vector: query_vec,       │
│    filter: { user_id },     │
│    top: 5,                  │
│    score_threshold: 0.7     │
│  })                         │
└──────────┬──────────────────┘
           │
           ▼
  Top-K Semantically Relevant Memories
  (ranked by cosine similarity score)
</code></pre>

<h3>🟣 Full Chat Pipeline Flow</h3>

<pre><code>
User sends message via /chat
      │
      ▼
┌─────────────────────────────┐
│  Smart Filter (background)  │
│  Should this be stored?     │
└──────────┬──────────────────┘
           │
    ┌──────▼──────┐
    │  Relevant?   │
    └──┬───────┬───┘
       │YES    │NO
       ▼       ▼
  Store it   Skip storage
       │
       └──────────┐
                  ▼
         ┌─────────────────────┐
         │  Retrieve Memories  │
         │  (semantic search)  │
         └──────────┬──────────┘
                    │
                    ▼
         ┌─────────────────────┐
         │  Build LLM Prompt   │
         │                     │
         │  System: You are a  │
         │  helpful AI.        │
         │                     │
         │  Context (memories):│
         │  - [memory 1]       │
         │  - [memory 2]       │
         │  - [memory 3]       │
         │                     │
         │  User: {message}    │
         └──────────┬──────────┘
                    │
                    ▼
         ┌─────────────────────┐
         │   LLM (Gemini)      │
         │   Generates memory- │
         │   aware response    │
         └──────────┬──────────┘
                    │
                    ▼
           Final Response to User
</code></pre>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ KEY COMPONENTS -->
<h2 id="components">🧩 Key Components Deep Dive</h2>

<h3>🧠 Smart Memory Filter</h3>
<p>The filter is the brain of the storage pipeline. It uses an LLM prompt to score each input on a 0–1 scale before deciding whether to persist it.</p>

<table>
  <thead>
    <tr><th>Input</th><th>Score</th><th>Decision</th><th>Reason</th></tr>
  </thead>
  <tbody>
    <tr><td>"Hello!"</td><td>0.1</td><td>❌ Discard</td><td>Greeting, no informational value</td></tr>
    <tr><td>"OK thanks"</td><td>0.15</td><td>❌ Discard</td><td>Filler acknowledgment</td></tr>
    <tr><td>"I'm a backend developer"</td><td>0.92</td><td>✅ Store</td><td>High-value personal fact</td></tr>
    <tr><td>"I prefer Python over JavaScript"</td><td>0.88</td><td>✅ Store</td><td>Explicit preference, highly useful</td></tr>
    <tr><td>"My project deadline is May 15th"</td><td>0.85</td><td>✅ Store</td><td>Temporal, actionable fact</td></tr>
    <tr><td>"I live in Bangalore"</td><td>0.80</td><td>✅ Store</td><td>Persistent personal context</td></tr>
  </tbody>
</table>

<h3>⚡ Embedding Service</h3>
<p>Converts raw text into dense vector representations that capture semantic meaning.</p>
<ul>
  <li><strong>Model:</strong> <code>models/embedding-001</code> (Google Gemini)</li>
  <li><strong>Dimensions:</strong> 768-dimensional float32 vectors</li>
  <li><strong>Distance metric:</strong> Cosine similarity</li>
  <li><strong>Batch support:</strong> Multiple texts embedded in a single API call</li>
</ul>

<h3>🗄️ Vector Database — Qdrant</h3>
<p>Qdrant serves as the long-term memory store. Each point in the collection represents one memory unit.</p>

<pre><code>
{
  "id": "uuid-v4",
  "vector": [0.021, -0.134, 0.876, ...],   // 768 floats
  "payload": {
    "user_id": "user_123",
    "text": "I love backend development",
    "timestamp": "2025-04-07T10:30:00Z",
    "source": "chat",
    "score": 0.92,
    "tags": ["preference", "career"]
  }
}
</code></pre>

<h3>🤖 LLM Service — Google Gemini</h3>
<p>DuperMemory uses Gemini for two distinct tasks:</p>
<ol>
  <li><strong>Memory filtering</strong> — Scoring inputs for storage-worthiness</li>
  <li><strong>Response generation</strong> — Generating final answers using memory-injected prompts</li>
</ol>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ API REFERENCE -->
<h2 id="api">🔌 API Reference</h2>

<h3>Authentication</h3>
<p>All endpoints require a valid API key passed in the <code>Authorization</code> header:</p>

<pre><code>Authorization: Bearer YOUR_API_KEY</code></pre>

<hr/>

<h3><code>POST /create-key</code> — Generate API Key</h3>
<p>Creates a new API key for a developer account.</p>

<pre><code>
curl -X POST http://localhost:5000/create-key \
  -H "Content-Type: application/json" \
  -d '{ "email": "dev@example.com", "app_name": "MyAIApp" }'
</code></pre>

<p><strong>Response:</strong></p>
<pre><code>
{
  "api_key": "dm_live_xxxxxxxxxxxxxxxxxxxxxxxx",
  "created_at": "2025-04-07T10:00:00Z",
  "app_name": "MyAIApp"
}
</code></pre>

<hr/>

<h3><code>POST /store</code> — Store a Memory</h3>
<p>Passes input through the smart filter. If relevant, embeds and stores it in the vector database.</p>

<p><strong>Request Body:</strong></p>
<pre><code>
{
  "text": "I prefer Python for backend and React for frontend.",
  "user_id": "user_123",
  "source": "chat",           // optional: "chat" | "document" | "profile"
  "tags": ["preference"]     // optional: custom tags for filtering
}
</code></pre>

<p><strong>Response (stored):</strong></p>
<pre><code>
{
  "status": "stored",
  "memory_id": "mem_uuid_xxxx",
  "score": 0.91,
  "message": "Memory stored successfully."
}
</code></pre>

<p><strong>Response (filtered out):</strong></p>
<pre><code>
{
  "status": "skipped",
  "score": 0.18,
  "message": "Memory not stored — low relevance score."
}
</code></pre>

<hr/>

<h3><code>POST /search</code> — Search Memories</h3>
<p>Performs semantic vector search over a user's stored memories.</p>

<p><strong>Request Body:</strong></p>
<pre><code>
{
  "query": "What programming languages does this user know?",
  "user_id": "user_123",
  "top_k": 5,                      // optional, default: 5
  "score_threshold": 0.70          // optional, default: 0.70
}
</code></pre>

<p><strong>Response:</strong></p>
<pre><code>
{
  "results": [
    {
      "memory_id": "mem_uuid_xxxx",
      "text": "I prefer Python for backend and React for frontend.",
      "score": 0.94,
      "timestamp": "2025-04-07T10:30:00Z",
      "tags": ["preference"]
    },
    {
      "memory_id": "mem_uuid_yyyy",
      "text": "I've been working with Node.js for 3 years.",
      "score": 0.87,
      "timestamp": "2025-04-06T08:15:00Z",
      "tags": ["career"]
    }
  ],
  "count": 2
}
</code></pre>

<hr/>

<h3><code>POST /chat</code> — Full Memory-Augmented Chat</h3>
<p>The most powerful endpoint. Runs the complete pipeline: filter → store → retrieve → inject → respond.</p>

<p><strong>Request Body:</strong></p>
<pre><code>
{
  "message": "What kind of projects should I work on to grow?",
  "user_id": "user_123",
  "top_k": 5,                   // optional
  "model": "gemini-pro"         // optional
}
</code></pre>

<p><strong>Response:</strong></p>
<pre><code>
{
  "response": "Based on your background in Python and backend development, I'd recommend building a REST API with async task queues using Celery and Redis, or contributing to an open-source Python library...",
  "memories_used": [
    "I prefer Python for backend development.",
    "I've been working with Node.js for 3 years.",
    "I want to grow into system design and distributed systems."
  ],
  "memory_stored": true,
  "tokens_used": 512
}
</code></pre>

<hr/>

<h3><code>GET /memories/:user_id</code> — List All Memories</h3>
<p>Returns all stored memories for a given user, sorted by recency.</p>

<pre><code>
{
  "user_id": "user_123",
  "total": 47,
  "memories": [
    { "memory_id": "...", "text": "...", "timestamp": "...", "score": 0.91 },
    ...
  ]
}
</code></pre>

<hr/>

<h3><code>DELETE /memories/:memory_id</code> — Delete a Memory</h3>
<p>Permanently deletes a specific memory by ID.</p>

<pre><code>
{ "status": "deleted", "memory_id": "mem_uuid_xxxx" }
</code></pre>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ QUICKSTART -->
<h2 id="quickstart">🚀 Quickstart</h2>

<h3>Prerequisites</h3>
<ul>
  <li>Node.js ≥ 18.x</li>
  <li>npm ≥ 9.x</li>
  <li>Qdrant running locally or a Qdrant Cloud instance</li>
  <li>Google Gemini API key (<a href="https://aistudio.google.com/app/apikey">Get one here</a>)</li>
</ul>

<h3>1. Clone the Repository</h3>
<pre><code>
git clone https://github.com/your-org/dupermemory-ai.git
cd dupermemory-ai
</code></pre>

<h3>2. Configure Environment Variables</h3>
<pre><code>
cp .env.example .env
</code></pre>

<pre><code>
# .env

# Google Gemini
GEMINI_API_KEY=your_gemini_api_key_here

# Qdrant
QDRANT_URL=http://localhost:6333
QDRANT_COLLECTION=memories

# Server
PORT=5000
NODE_ENV=development

# Memory Settings
FILTER_THRESHOLD=0.6       # Minimum score for a memory to be stored
RETRIEVAL_TOP_K=5          # Number of memories to retrieve per query
RETRIEVAL_MIN_SCORE=0.70   # Minimum similarity score for retrieval
</code></pre>

<h3>3. Start Qdrant (via Docker)</h3>
<pre><code>
docker run -p 6333:6333 -p 6334:6334 \
  -v $(pwd)/qdrant_storage:/qdrant/storage \
  qdrant/qdrant
</code></pre>

<h3>4. Start the Backend</h3>
<pre><code>
cd server
npm install
npm run dev
# Server running at http://localhost:5000
</code></pre>

<h3>5. Start the Frontend</h3>
<pre><code>
cd client
npm install
npm run dev
# Dashboard running at http://localhost:5173
</code></pre>

<h3>6. Generate Your API Key</h3>
<pre><code>
curl -X POST http://localhost:5000/create-key \
  -H "Content-Type: application/json" \
  -d '{ "email": "you@example.com", "app_name": "MyFirstApp" }'
</code></pre>

<h3>7. Store Your First Memory</h3>
<pre><code>
curl -X POST http://localhost:5000/store \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "text": "I am a full-stack developer who loves building AI products.",
    "user_id": "user_001"
  }'
</code></pre>

<h3>8. Chat with Memory</h3>
<pre><code>
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "message": "What kind of AI products should I explore?",
    "user_id": "user_001"
  }'
</code></pre>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ SDK INTEGRATION -->
<h2 id="integration">🧪 SDK Integration Examples</h2>

<h3>JavaScript / Node.js</h3>
<pre><code>
import axios from "axios";

const duper = axios.create({
baseURL: "http://localhost:5000",
headers: { Authorization: "Bearer YOUR_API_KEY" },
});

// Store a memory
await duper.post("/store", {
text: "My name is Alex and I'm building a SaaS for HR teams.",
user_id: "user_alex",
});

// Chat with full memory pipeline
const { data } = await duper.post("/chat", {
message: "What features would be most useful for my product?",
user_id: "user_alex",
});

console.log(data.response);
// "Based on your focus on HR SaaS, features like employee onboarding
// automation, leave management, and payroll integrations would be
// highly valuable..."
</code></pre>

<h3>Python</h3>
<pre><code>
import requests

BASE_URL = "http://localhost:5000"
HEADERS = {"Authorization": "Bearer YOUR_API_KEY"}

# Store a memory

requests.post(f"{BASE_URL}/store", json={
"text": "I am building a Python-based ML pipeline for fraud detection.",
"user_id": "user_priya"
}, headers=HEADERS)

# Chat with memory

response = requests.post(f"{BASE_URL}/chat", json={
"message": "What tools should I use for model serving?",
"user_id": "user_priya"
}, headers=HEADERS)

print(response.json()["response"])
</code></pre>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ CORE LOGIC -->
<h2 id="core-logic">🧠 Core Logic (Pseudocode)</h2>

<h3>Smart Memory Filter</h3>
<pre><code>
function smartFilter(text):
  prompt = """
    You are a memory relevance scorer.
    Rate the following text from 0.0 to 1.0 based on how useful it would be
    to remember long-term. Consider: facts, preferences, goals, constraints.
    Return ONLY a float between 0.0 and 1.0.

    Text: "{text}"

"""
score = float(LLM.generate(prompt))
return score >= FILTER_THRESHOLD
</code></pre>

<h3>Memory Storage</h3>
<pre><code>
function storeMemory(text, user_id, metadata):
  if not smartFilter(text):
    return { status: "skipped" }

vector = EmbeddingService.embed(text)

Qdrant.upsert(collection="memories", point={
id: uuid(),
vector: vector,
payload: {
user_id: user_id,
text: text,
timestamp: now(),
...metadata
}
})

return { status: "stored" }
</code></pre>

<h3>Memory Retrieval</h3>
<pre><code>
function retrieveMemories(query, user_id, top_k=5):
  query_vector = EmbeddingService.embed(query)

results = Qdrant.search(
collection = "memories",
vector = query_vector,
filter = { must: [{ key: "user_id", match: { value: user_id } }] },
limit = top_k,
score_threshold = RETRIEVAL_MIN_SCORE
)

return results.map(r => r.payload.text)
</code></pre>

<h3>Context-Augmented Chat</h3>
<pre><code>
function chat(message, user_id):
  storeMemory(message, user_id)         // fire & forget

memories = retrieveMemories(message, user_id)

system_prompt = """
You are a helpful, personalized AI assistant.
Use the following memories about the user to inform your response.
Do not repeat memories verbatim — use them as context.

    Memories:
    {memories.join("\n- ")}

"""

response = Gemini.generate(
system: system_prompt,
user: message
)

return response
</code></pre>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ TECH STACK -->
<h2 id="tech-stack">🛠️ Tech Stack</h2>

<table>
  <thead>
    <tr><th>Layer</th><th>Technology</th><th>Purpose</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Frontend</td>
      <td>React 18 + Vite</td>
      <td>Developer dashboard and interactive playground</td>
    </tr>
    <tr>
      <td>Styling</td>
      <td>Tailwind CSS</td>
      <td>Utility-first UI design</td>
    </tr>
    <tr>
      <td>Backend</td>
      <td>Node.js + Express.js</td>
      <td>REST API server, routing, middleware</td>
    </tr>
    <tr>
      <td>LLM</td>
      <td>Google Gemini (gemini-pro)</td>
      <td>Memory filtering + response generation</td>
    </tr>
    <tr>
      <td>Embeddings</td>
      <td>Gemini embedding-001</td>
      <td>Text → vector conversion</td>
    </tr>
    <tr>
      <td>Vector DB</td>
      <td>Qdrant</td>
      <td>Persistent vector storage + semantic search</td>
    </tr>
    <tr>
      <td>Auth</td>
      <td>API Key (HMAC-signed)</td>
      <td>Developer authentication</td>
    </tr>
    <tr>
      <td>DevOps</td>
      <td>Docker + Docker Compose</td>
      <td>Containerized local development</td>
    </tr>
  </tbody>
</table>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ FEATURES -->
<h2 id="features">💥 Feature Overview</h2>

<table>
  <thead>
    <tr><th>Feature</th><th>Status</th><th>Description</th></tr>
  </thead>
  <tbody>
    <tr><td>Smart Memory Filtering</td><td>✅ Live</td><td>LLM-powered relevance scoring before storage</td></tr>
    <tr><td>Semantic Vector Search</td><td>✅ Live</td><td>Meaning-based retrieval using Qdrant + Gemini embeddings</td></tr>
    <tr><td>Multi-User Memory Namespacing</td><td>✅ Live</td><td>Isolated memory per user_id</td></tr>
    <tr><td>Full Chat Pipeline (/chat)</td><td>✅ Live</td><td>Filter → store → retrieve → inject → respond in one call</td></tr>
    <tr><td>API Key Management</td><td>✅ Live</td><td>Key generation, validation, revocation</td></tr>
    <tr><td>Developer Dashboard</td><td>✅ Live</td><td>Visual memory browser, playground, code snippets</td></tr>
    <tr><td>Memory Deletion</td><td>✅ Live</td><td>Delete individual memories by ID</td></tr>
    <tr><td>Configurable Thresholds</td><td>✅ Live</td><td>Tune filter and retrieval sensitivity via env vars</td></tr>
    <tr><td>Hybrid Search (RAG + Memory)</td><td>🔜 Planned</td><td>Combine document retrieval with personal memory</td></tr>
    <tr><td>User Profile Auto-Generation</td><td>🔜 Planned</td><td>Auto-build structured user profiles from memories</td></tr>
    <tr><td>Advanced AI Filtering</td><td>🔜 Planned</td><td>Fine-tuned classification model for filtering</td></tr>
    <tr><td>Connectors (Notion, Gmail, Drive)</td><td>🔜 Planned</td><td>Ingest memory from external sources</td></tr>
    <tr><td>SaaS Billing System</td><td>🔜 Planned</td><td>Stripe-based usage metering and plans</td></tr>
    <tr><td>Memory Expiration / TTL</td><td>🔜 Planned</td><td>Auto-expire stale memories after configurable period</td></tr>
  </tbody>
</table>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ USE CASES -->
<h2 id="use-cases">🎯 Use Cases</h2>

<table>
  <thead>
    <tr><th>Use Case</th><th>How DuperMemory Helps</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>🤖 AI Chatbots</td>
      <td>Remembers users across sessions — preferences, history, context — eliminating repetitive onboarding</td>
    </tr>
    <tr>
      <td>🧑‍💼 Personal AI Assistants</td>
      <td>Builds a persistent model of the user's goals, habits, and constraints over time</td>
    </tr>
    <tr>
      <td>🏢 AI-Powered CRMs</td>
      <td>Stores customer interactions, preferences, and history; surfaces relevant context for sales teams</td>
    </tr>
    <tr>
      <td>🛠️ Developer Productivity Tools</td>
      <td>Remembers codebase context, coding preferences, recurring questions, and project notes</td>
    </tr>
    <tr>
      <td>🎓 AI Tutors & Education</td>
      <td>Tracks what a student has learned, what they struggle with, and adapts accordingly</td>
    </tr>
    <tr>
      <td>🏥 Healthcare AI</td>
      <td>Maintains patient history, medications, and preferences across appointments (with compliance)</td>
    </tr>
    <tr>
      <td>🛒 E-Commerce Recommendations</td>
      <td>Remembers purchase history, size preferences, wishlist items for hyper-personalized shopping</td>
    </tr>
    <tr>
      <td>🎮 AI Game Characters / NPCs</td>
      <td>NPCs that remember what the player told them, evolving relationships and dialogue over time</td>
    </tr>
  </tbody>
</table>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ FRONTEND -->
<h2 id="frontend">🖥️ Frontend — Developer Dashboard</h2>

<p>The DuperMemory dashboard gives developers a visual interface to interact with the memory system without writing code.</p>

<h3>Dashboard Features</h3>
<ul>
  <li><strong>API Key Manager</strong> — Generate, view, copy, and revoke API keys</li>
  <li><strong>Memory Browser</strong> — Browse all stored memories per user, sorted by recency or relevance score</li>
  <li><strong>Live Playground</strong> — Test <code>/store</code>, <code>/search</code>, and <code>/chat</code> interactively with a visual response panel</li>
  <li><strong>Memory Visualization</strong> — See which memories were retrieved and injected for any given query</li>
  <li><strong>Code Snippets</strong> — Auto-generated integration code in JS and Python for every action taken in the playground</li>
  <li><strong>Usage Analytics</strong> — Track API calls, memory count, and storage usage per API key</li>
</ul>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ CONTRIBUTING -->
<h2 id="contributing">🤝 Contributing</h2>

<p>Contributions are welcome and deeply appreciated! Here's how to get involved:</p>

<h3>Step 1 — Fork & Clone</h3>
<pre><code>
git clone https://github.com/your-username/dupermemory-ai.git
cd dupermemory-ai
</code></pre>

<h3>Step 2 — Create a Branch</h3>
<pre><code>
git checkout -b feature/your-feature-name
</code></pre>

<h3>Step 3 — Make Changes & Commit</h3>
<pre><code>
git add .
git commit -m "feat: add memory expiration TTL support"
</code></pre>

<h3>Step 4 — Push & Open a PR</h3>
<pre><code>
git push origin feature/your-feature-name
</code></pre>

<p>Then open a Pull Request on GitHub against the <code>main</code> branch. Please include a clear description of what you changed and why.</p>

<h3>Contribution Areas</h3>
<ul>
  <li>🐛 Bug fixes and stability improvements</li>
  <li>⚡ Performance optimizations (embedding batching, caching)</li>
  <li>🧪 Test coverage (unit, integration, e2e)</li>
  <li>📚 Documentation improvements</li>
  <li>🔌 New connector integrations (Notion, Slack, Gmail)</li>
  <li>🌐 SDK development (Python, Go, Ruby)</li>
</ul>

<blockquote>
  For major architectural changes, please <strong>open an issue first</strong> to discuss the approach before submitting a PR.
</blockquote>

<hr/>

<!-- ═══════════════════════════════════════════════════════════ FOOTER -->
<h2 id="support">⭐ Support the Project</h2>

<p>
  If DuperMemory AI saves you time or inspires your work, please consider:
</p>
<ul>
  <li>⭐ Starring the repository on GitHub</li>
  <li>🐦 Sharing it on X / LinkedIn</li>
  <li>🐛 Filing issues for bugs you encounter</li>
  <li>💡 Suggesting features via GitHub Discussions</li>
</ul>

<hr/>

<div align="center">
  <p>Built with ❤️ by the DuperMemory Team</p>
  <p>
    <a href="#">Website</a> &nbsp;·&nbsp;
    <a href="#">Documentation</a> &nbsp;·&nbsp;
    <a href="#">Discord</a> &nbsp;·&nbsp;
    <a href="#">Twitter / X</a>
  </p>
  <br/>
  <sub>
    DuperMemory AI — Giving AI systems the power to remember.<br/>
    <em>"Plug in 5 lines of code and give your AI long-term memory."</em>
  </sub>
  <br/><br/>
</div>

</body>
</html>
=======
# Dupermemory_Hackathon
DuperMemory AI is a developer-first platform that enables AI systems to remember, filter, and recall meaningful information intelligently.  Unlike traditional AI systems that either forget everything or store everything blindly, DuperMemory introduces a Smart Memory Layer that decides what to store, stores it semantically
