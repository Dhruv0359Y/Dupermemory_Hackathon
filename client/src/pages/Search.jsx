import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Search as SearchIcon,
  Save,
  Database,
  History,
  Trash2,
  ExternalLink,
} from "lucide-react";
import { storeMemory, searchMemory } from "../services/api";

export default function Search() {
  const [apiKey] = useState(localStorage.getItem("duper_api_key") || "");
  const [userId] = useState("user_123"); // Mock user ID
  const [storeText, setStoreText] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [storing, setStoring] = useState(false);
  const [message, setMessage] = useState(null);
  const [selectedMemory, setSelectedMemory] = useState(null);
  const handleStore = async (e) => {
    e.preventDefault();
    if (!storeText.trim()) return;
    setStoring(true);
    try {
      const res = await storeMemory(apiKey, storeText, userId);
      setMessage({ type: "success", text: res.message });
      setStoreText("");
    } catch (err) {
      setMessage({ type: "error", text: "Failed to store memory" });
    } finally {
      setStoring(false);
      setTimeout(() => setMessage(null), 3000);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    setLoading(true);
    try {
      const results = await searchMemory(apiKey, searchQuery, userId);
      setSearchResults(results);
    } catch (err) {
      setMessage({ type: "error", text: "Search failed" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto pb-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Store Memory Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="glass-card p-10 rounded-3xl"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-green-400/10 flex items-center justify-center">
              <Save className="w-5 h-5 text-green-400" />
            </div>
            <h2 className="text-2xl font-bold">Store Memory</h2>
          </div>
          <form onSubmit={handleStore}>
            <textarea
              value={storeText}
              onChange={(e) => setStoreText(e.target.value)}
              placeholder="Paste text, logs, or any data you want to remember..."
              className="input-field min-h-[200px] mb-6 resize-none"
            />
            <button
              type="submit"
              disabled={storing || !apiKey}
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              {storing ? "Storing..." : "Store in Neural Bank"}
              <Database className="w-4 h-4" />
            </button>
          </form>
          {message && (
            <div
              className={`mt-4 p-3 rounded-lg text-sm text-center ${message.type === "success" ? "bg-green-400/10 text-green-400" : "bg-red-400/10 text-red-400"}`}
            >
              {message.text}
            </div>
          )}
        </motion.div>

        {/* Search Memory Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col h-full"
        >
          <div className="glass-card p-10 rounded-3xl mb-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-blue-400/10 flex items-center justify-center">
                <SearchIcon className="w-5 h-5 text-blue-400" />
              </div>
              <h2 className="text-2xl font-bold">Semantic Search</h2>
            </div>
            <form onSubmit={handleSearch} className="flex gap-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search your memories..."
                className="input-field"
              />
              <button
                type="submit"
                disabled={loading || !apiKey}
                className="btn-secondary px-6"
              >
                {loading ? "..." : <SearchIcon className="w-5 h-5" />}
              </button>
            </form>
          </div>

          <div className="flex-1 glass-card p-10 rounded-3xl overflow-hidden flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
                <History className="w-4 h-4" />
                Search Results ({searchResults.length})
              </div>
              {searchResults.length > 0 && (
                <button
                  onClick={() => setSearchResults([])}
                  className="text-gray-500 hover:text-red-400 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
              {searchResults.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-gray-500 text-center p-8">
                  <Database className="w-12 h-12 mb-4 opacity-20" />
                  <p>
                    No results found. Try searching for something you've stored.
                  </p>
                </div>
              ) : (
                searchResults.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-primary/30 transition-all group"
                  >
                    <p className="text-gray-300 text-sm leading-relaxed mb-3 line-clamp-3">
                      {result.text}
                    </p>
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-widest font-bold text-gray-500">
                      <span>Score: {(result.score * 100).toFixed(1)}%</span>
                      <button
                        onClick={() => setSelectedMemory(result)}
                        className="flex items-center gap-1 hover:text-brand-primary transition-colors"
                      >
                        View Full <ExternalLink className="w-3 h-3" />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </motion.div>
      </div>
      {selectedMemory && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-xl max-w-lg w-full relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedMemory(null)}
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
            >
              ✕
            </button>

            <h3 className="text-lg font-bold mb-4">Full Memory</h3>

            {/* FULL TEXT */}
            <p className="text-gray-300 whitespace-pre-wrap">
              {selectedMemory.text || selectedMemory.payload?.text}
            </p>

            {/* SCORE */}
            <p className="mt-4 text-sm text-gray-500">
              Score: {(selectedMemory.score * 100).toFixed(1)}%
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
