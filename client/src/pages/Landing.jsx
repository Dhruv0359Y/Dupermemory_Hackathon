import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Brain, Zap, Shield, Globe, ArrowRight, Github } from "lucide-react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css"; //
import Footer from "../components/Footer";

export default function Landing() {
  const [copied, setCopied] = useState(false);
  const features = [
    {
      title: "Neural Storage",
      description:
        "Store any text data and retrieve it with semantic search. We remember everything.",
      icon: Brain,
    },
    {
      title: "Real-time Chat",
      description:
        "Chat with your memories. Our AI uses your stored data to provide context-aware replies.",
      icon: Zap,
    },
    {
      title: "Secure API",
      description:
        "Enterprise-grade security with unique API keys for every developer.",
      icon: Shield,
    },
    {
      title: "Global Access",
      description:
        "Access your memory bank from anywhere in the world with our high-speed API.",
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-brand-bg text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-brand-primary mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-primary"></span>
            </span>
            Now in Public Beta
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8">
            The Second Brain for <br />
            <span className="gradient-text">Developers</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-12">
            DuperMemory AI is a developer platform that connects your
            application to a semantic memory bank. Store, search, and chat with
            your data in real-time.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/dashboard"
              className="btn-primary flex items-center gap-2 text-lg"
            >
              Get Started for Free
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="https://github.com/Dhruv0359Y/Dupermemory_Hackathon/blob/main/README.md"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary flex items-center gap-2 text-lg"
            >
              <Github className="w-5 h-5" />
              View Documentation
            </a>
          </div>
        </motion.div>

        {/* Floating Elements Backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 w-full h-full pointer-events-none opacity-20">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-secondary rounded-full blur-[128px]"></div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-2xl hover:border-brand-primary/50 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Preview */}

      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-16">
          Get Started with <span className="gradient-text">DuperMemory</span>
        </h2>

        {(() => {
          const code = `const duper = axios.create({
  baseURL: "http://localhost:5000",
  headers: {
    Authorization: "Bearer YOUR_API_KEY",
  },
});

// Store memory
await duper.post("/store", {
  text: "I love backend",
  user_id: "user1",
});

// Chat with memory
const res = await duper.post("/chat", {
  message: "What do I like?",
  user_id: "user1",
});`;

          const highlighted = Prism.highlight(
            code,
            Prism.languages.javascript,
            "javascript",
          );

          return (
            <div className="max-w-2xl mx-auto glass-card p-8 rounded-3xl border-brand-primary/30 neon-glow text-left relative">
              {/* Copy Button */}

              <button
                onClick={async () => {
                  try {
                    await navigator.clipboard.writeText(code);
                    setCopied(true);
                    setTimeout(() => setCopied(false), 2000);
                  } catch (err) {
                    console.error(err);
                  }
                }}
                className="absolute top-4 right-4 z-50 text-sm px-3 py-1 rounded-lg bg-white/10 hover:bg-white/20 transition"
              >
                {copied ? "Copied" : "Copy"}
              </button>
              {/* Code Block */}
              <pre className="text-sm overflow-x-auto">
                <code dangerouslySetInnerHTML={{ __html: highlighted }} />
              </pre>
            </div>
          );
        })()}

        <div className="mt-10">
          <Link to="/dashboard" className="btn-primary px-8 py-3 rounded-xl">
            Get API Key →
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
