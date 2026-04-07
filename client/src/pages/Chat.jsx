import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Send,
  Brain,
  User,
  MessageSquare,
  Database,
  Trash2,
  Zap,
} from "lucide-react";
import { chatWithMemory } from "../services/api";

export default function Chat() {
  const [apiKey] = useState(localStorage.getItem("duper_api_key") || "");
  const [userId] = useState("user_123"); // Mock user ID
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleChat = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading || !apiKey) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await chatWithMemory(apiKey, input, userId);
      const aiMessage = {
        role: "ai",
        content: res.reply,
        memoryUsed: res.memory_used || [],
        stored: res.stored,
      };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content:
            "Sorry, I encountered an error. Please check your API key and try again.",
          error: true,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto pb-12 h-screen flex flex-col">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-brand-primary" />
          </div>
          <h1 className="text-3xl font-bold">
            Dupermemory <span className="gradient-text">Neural</span>
          </h1>
        </div>
        <button
          onClick={clearChat}
          className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-red-400 transition-colors"
        >
          <Trash2 className="w-4 h-4" />
          Clear History
        </button>
      </div>

      <div className="flex-1 glass-card rounded-3xl overflow-hidden flex flex-col mb-6">
        <div
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-8 space-y-8 custom-scrollbar"
        >
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-gray-500 text-center p-8">
              <Brain className="w-16 h-16 mb-6 opacity-20" />
              <h3 className="text-xl font-bold text-white mb-2">
                Start a Conversation
              </h3>
              <p className="max-w-sm">
                Ask questions about the data you've stored in your neural bank.
                Our AI will use your memories for context.
              </p>
            </div>
          ) : (
            messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex gap-4 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "ai" && (
                  <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-brand-primary" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] space-y-3 ${msg.role === "user" ? "order-1" : "order-2"}`}
                >
                  <div
                    className={`p-5 rounded-2xl text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-brand-primary text-white font-medium"
                        : msg.error
                          ? "bg-red-400/10 text-red-400 border border-red-400/20"
                          : "bg-white/5 text-gray-200 border border-white/10"
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.memoryUsed && msg.memoryUsed.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {msg.memoryUsed.map((mem, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] text-gray-500 font-bold uppercase tracking-widest"
                        >
                          <Database className="w-3 h-3" />
                          Memory Context
                        </div>
                      ))}
                    </div>
                  )}
                  {msg.stored && (
                    <div className="flex items-center gap-1 text-[10px] text-green-400 font-bold uppercase tracking-widest">
                      <Zap className="w-3 h-3" />
                      Interaction Stored
                    </div>
                  )}
                </div>
                {msg.role === "user" && (
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 order-2">
                    <User className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))
          )}
          {loading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex gap-4 justify-start"
            >
              <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center flex-shrink-0">
                <Brain className="w-6 h-6 text-brand-primary animate-pulse" />
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex gap-2 items-center">
                <div
                  className="w-2 h-2 bg-brand-primary rounded-full animate-bounce"
                  style={{ animationDelay: "0ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-brand-primary rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                ></div>
                <div
                  className="w-2 h-2 bg-brand-primary rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                ></div>
              </div>
            </motion.div>
          )}
        </div>

        <div className="p-8 border-t border-white/10 bg-white/5">
          <form onSubmit={handleChat} className="flex gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                apiKey
                  ? "Ask your memory bank anything..."
                  : "Please generate an API key in the dashboard first"
              }
              disabled={!apiKey || loading}
              className="input-field h-14"
            />
            <button
              type="submit"
              disabled={!apiKey || loading || !input.trim()}
              className="btn-primary px-8 h-14 flex items-center justify-center"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
