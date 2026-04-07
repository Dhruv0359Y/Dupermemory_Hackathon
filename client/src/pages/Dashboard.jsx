import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Key, Copy, Check, RefreshCw, BarChart3, Database, Activity } from 'lucide-react';
import { createKey } from '../services/api';

export default function Dashboard() {
  const [apiKey, setApiKey] = useState(localStorage.getItem('duper_api_key') || '');
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCreateKey = async () => {
    setLoading(true);
    try {
      const data = await createKey();
      setApiKey(data.apiKey);
      localStorage.setItem('duper_api_key', data.apiKey);
    } catch (error) {
      console.error('Failed to create API key:', error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(apiKey);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: 'Total Memories', value: '1,284', icon: Database, color: 'text-blue-400' },
    { label: 'Search Queries', value: '45,291', icon: BarChart3, color: 'text-purple-400' },
    { label: 'API Uptime', value: '99.99%', icon: Activity, color: 'text-green-400' },
  ];

  return (
    <div className="pt-24 px-6 max-w-7xl mx-auto pb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold mb-2">Developer <span className="gradient-text">Dashboard</span></h1>
        <p className="text-gray-400">Manage your API keys and monitor your memory usage.</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass-card p-8 rounded-2xl flex items-center gap-6"
          >
            <div className={`w-14 h-14 rounded-xl bg-white/5 flex items-center justify-center ${stat.color}`}>
              <stat.icon className="w-7 h-7" />
            </div>
            <div>
              <div className="text-gray-400 text-sm font-medium mb-1">{stat.label}</div>
              <div className="text-3xl font-bold">{stat.value}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="glass-card p-10 rounded-3xl border-brand-primary/20"
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
              <Key className="w-5 h-5 text-brand-primary" />
            </div>
            <h2 className="text-2xl font-bold">API Key</h2>
          </div>
          <button
            onClick={handleCreateKey}
            disabled={loading}
            className="btn-secondary flex items-center gap-2 text-sm"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            Regenerate Key
          </button>
        </div>

        <div className="relative group">
          <input
            type="text"
            readOnly
            value={apiKey || 'No API key generated yet'}
            className="input-field font-mono text-lg pr-12 h-16 bg-white/5 border-white/10"
          />
          {apiKey && (
            <button
              onClick={copyToClipboard}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-lg transition-colors text-gray-400 hover:text-white"
            >
              {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
            </button>
          )}
        </div>

        {!apiKey && (
          <div className="mt-8 text-center p-8 border-2 border-dashed border-white/10 rounded-2xl">
            <p className="text-gray-400 mb-6">You haven't generated an API key yet. Click the button below to get started.</p>
            <button onClick={handleCreateKey} disabled={loading} className="btn-primary">
              Generate My First API Key
            </button>
          </div>
        )}

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-400">
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="font-bold text-white mb-2 uppercase tracking-wider text-xs">Security Tip</div>
            Never share your API key in public repositories or client-side code that isn't obfuscated.
          </div>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5">
            <div className="font-bold text-white mb-2 uppercase tracking-wider text-xs">Usage Limit</div>
            Your current plan allows for 1,000 requests per minute across all endpoints.
          </div>
        </div>
      </motion.div>
    </div>
  );
}
