function smartFilter(text) {
  if (!text || typeof text !== "string") {
    return { store: false, tag: "general", importance: "low" };
  }

  const lower = text.toLowerCase().trim();

  // ❌ Ignore useless inputs
  const ignorePatterns = /^(ok|okay|lol|hi|hello|thanks|bye|hmm)$/i;
  if (ignorePatterns.test(lower) || lower.length < 5) {
    return {
      store: false,
      tag: "general",
      importance: "low",
    };
  }

  // 🧠 Pattern definitions
  const patterns = [
    {
      tag: "fact",
      importance: "critical",
      regex: /(my name is|i am|i'm|i live in|i am from)/,
      score: 5,
    },
    {
      tag: "preference",
      importance: "high",
      regex: /(i love|i like|i hate|i enjoy|i prefer)/,
      score: 4,
    },
    {
      tag: "goal",
      importance: "high",
      regex: /(my goal|i want to|i plan to|planning to|aim is)/,
      score: 4,
    },
    {
      tag: "context",
      importance: "medium",
      regex: /(i am learning|i'm learning|studying|working on|building)/,
      score: 3,
    },
    {
      tag: "emotion",
      importance: "medium",
      regex: /(i feel|i am sad|i am happy|excited|frustrated)/,
      score: 2,
    },
  ];

  let bestMatch = null;

  for (const pattern of patterns) {
    if (pattern.regex.test(lower)) {
      if (!bestMatch || pattern.score > bestMatch.score) {
        bestMatch = pattern;
      }
    }
  }

  // ✅ If something meaningful found
  if (bestMatch) {
    return {
      store: true,
      tag: bestMatch.tag,
      importance: bestMatch.importance,
    };
  }

  // ⚠️ fallback: semi-useful long text
  if (lower.length > 20) {
    return {
      store: true,
      tag: "context",
      importance: "low",
    };
  }

  // ❌ default
  return {
    store: false,
    tag: "general",
    importance: "low",
  };
}

module.exports = smartFilter;
