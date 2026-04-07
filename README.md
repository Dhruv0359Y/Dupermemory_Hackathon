dupermemory/
│
├── client/              # React Frontend (Dashboard + Playground)
├── server/              # Backend API (Core Product)
│
├── docs/                # Architecture, flows, notes (for hackathon)
├── .env                 # Environment variables
├── README.md




server/
│
├── index.js             # Entry point (main server)
│
├── config/              # Configurations
│   ├── db.js            # Qdrant connection
│   ├── openai.js        # LLM / Embedding setup
│
├── routes/              # API routes
│   ├── chat.js          # /chat (full pipeline)
│   ├── store.js         # /store (save memory)
│   ├── search.js        # /search (retrieve memory)
│   ├── apiKey.js        # /create-key
│
├── middleware/          # Middlewares
│   ├── auth.js          # API key validation
│
├── services/            # Core logic (VERY IMPORTANT)
│   ├── memoryService.js # store/search logic
│   ├── embeddingService.js
│   ├── llmService.js
│
├── utils/               # Helpers
│   ├── smartFilter.js   # 🔥 core innovation
│   ├── generateKey.js
│
├── models/              # (Optional future DB)
│
├── data/                # Temp storage (hackathon)
│   ├── apiKeys.js
│
└── package.json



client/
│
├── src/
│   │
│   ├── components/
│   │   ├── ChatBox.jsx
│   │   ├── Message.jsx
│   │   ├── MemoryPanel.jsx   # 🔥 important
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx     # API key + stats
│   │   ├── Playground.jsx    # Test your API
│   │
│   ├── services/
│   │   ├── api.js            # axios setup
│   │
│   ├── App.jsx
│   ├── main.jsx
│
└── package.json


Frontend (Playground UI)
        ↓
API (Express Routes)
        ↓
Middleware (API Key Auth)
        ↓
Services Layer
   ├── Smart Filter 🔥
   ├── Embedding
   ├── Memory Service
        ↓
Vector DB (Qdrant)
        ↓
LLM (Gemini/OpenAI)