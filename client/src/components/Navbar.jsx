import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, LayoutDashboard, Search, MessageSquare, LogOut } from 'lucide-react';

export default function Navbar() {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  if (isLanding) return null;

  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Search & Store', path: '/search', icon: Search },
    { name: 'Chat', path: '/chat', icon: MessageSquare },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-16 glass-card z-50 flex items-center px-6 justify-between">
      <Link to="/" className="flex items-center gap-2">
        <Brain className="w-8 h-8 text-brand-primary" />
        <span className="text-xl font-bold gradient-text">DuperMemory AI</span>
      </Link>

      <div className="flex items-center gap-6">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
              location.pathname === item.path ? 'text-brand-primary' : 'text-gray-400 hover:text-white'
            }`}
          >
            <item.icon className="w-4 h-4" />
            {item.name}
          </Link>
        ))}
        <button className="flex items-center gap-2 text-sm font-medium text-red-400 hover:text-red-300 ml-4">
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </nav>
  );
}
