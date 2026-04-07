import React from 'react';
import { Brain } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-gray-500 text-sm">
      <div className="flex items-center gap-2">
        <Brain className="w-6 h-6 text-brand-primary" />
        <span className="font-bold text-white">DuperMemory AI</span>
      </div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">API Docs</a>
      </div>
      <div>© 2026 DuperMemory AI. All rights reserved.</div>
    </footer>
  );
}
