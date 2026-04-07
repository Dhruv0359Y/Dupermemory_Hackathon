// services/memoryService.js

const client = require("../config/db");
const getEmbedding = require("./embeddingService");

const COLLECTION = "memory";
const VECTOR_SIZE = 3072; // 🔥 must match Gemini embedding

// 🧠 Ensure collection exists
async function ensureCollection() {
  try {
    const collections = await client.getCollections();
    const exists = collections.collections.find((c) => c.name === COLLECTION);

    if (!exists) {
      console.log("⚡ Creating collection...");

      await client.createCollection(COLLECTION, {
        vectors: {
          size: VECTOR_SIZE,
          distance: "Cosine",
        },
      });

      console.log("✅ Collection created");
    }
  } catch (err) {
    console.error("❌ Error ensuring collection:", err.message);
  }
}

// 🧠 Store Memory
async function storeMemory(text, user_id, metadata = {}) {
  try {
    await ensureCollection();

    const vector = await getEmbedding(text);

    // 🔍 Debug (optional)
    console.log("Vector length:", vector.length);

    if (!vector || vector.length !== VECTOR_SIZE) {
      throw new Error(
        `Vector size mismatch: expected ${VECTOR_SIZE}, got ${vector.length}`,
      );
    }

    await client.upsert(COLLECTION, {
      points: [
        {
          id: Date.now(), // unique ID
          vector: vector,
          payload: {
            text,
            user_id,
            ...metadata,
          },
        },
      ],
    });

    console.log("✅ Memory stored");
  } catch (err) {
    console.error("❌ Store Memory Error:", err.message);
    throw err;
  }
}

// 🔍 Search Memory
async function searchMemory(query, user_id) {
  try {
    await ensureCollection();

    const vector = await getEmbedding(query);

    if (!vector || vector.length !== VECTOR_SIZE) {
      throw new Error(
        `Vector size mismatch: expected ${VECTOR_SIZE}, got ${vector.length}`,
      );
    }

    const results = await client.search(COLLECTION, {
      vector: vector,
      limit: 5,
      filter: {
        must: [
          {
            key: "user_id",
            match: { value: user_id },
          },
        ],
      },
    });

    return results;
  } catch (err) {
    console.error("❌ Search Memory Error:", err.message);
    throw err;
  }
}

module.exports = { storeMemory, searchMemory };
