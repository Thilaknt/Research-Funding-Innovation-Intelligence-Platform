import React from 'react';
import { LayoutDashboard, Wallet, Sparkles, FileText, Bookmark, Bell, User, Settings, FlaskConical, LineChart } from 'lucide-react';
import { cn } from '../../utils/cn';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: LineChart, label: 'Intelligence', path: '/intelligence' },
  { icon: Wallet, label: 'Funding', path: '/funding' },
  { icon: Sparkles, label: 'Recommendations', path: '/recommendations' },
  { icon: FileText, label: 'Applications', path: '/applications' },
  { icon: Bookmark, label: 'Bookmarks', path: '/bookmarks' },
  { icon: Bell, label: 'Notifications', path: '/notifications' },
];

const bottomNavItems = [
  { icon: User, label: 'Profile', path: '/profile' },
  { icon: Settings, label: 'Settings', path: '/settings' },
];

export function Sidebar({ className }) {
  const location = useLocation();

  return (
    <aside className={cn("flex w-64 flex-col border-r border-slate-800 bg-slate-900/50 glass", className)}>
      <div className="flex h-16 items-center px-6 border-b border-slate-800/50">
        <Link to="/" className="flex items-center gap-2 font-bold text-white hover:opacity-80 transition-opacity">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white shadow-lg shadow-blue-500/20">
            <FlaskConical size={18} />
          </div>
          <span className="truncate">Nova Intelligence</span>
        </Link>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
        <nav className="space-y-1 px-4">
          <div className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Menu
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-blue-600/10 text-blue-400" 
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                )}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
      
      <div className="border-t border-slate-800/50 p-4">
        <nav className="space-y-1">
          {bottomNavItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.label}
                to={item.path}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-blue-600/10 text-blue-400" 
                    : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
                )}
              >
                <Icon size={18} />
                {item.label}
              </Link>
            );
          })}
        </nav>
        
        <div className="mt-4 rounded-xl border border-slate-800 bg-slate-800/30 p-4">
          <p className="text-xs font-medium text-slate-400">Platform Status</p>
          <div className="mt-2 flex items-center gap-2 text-sm text-green-400">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></div>
            All systems nominal
          </div>
        </div>
      </div>
    </aside>
  );
}
