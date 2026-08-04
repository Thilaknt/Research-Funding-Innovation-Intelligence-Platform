import React, { useState } from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../atoms/Button';
import { NotificationDropdown } from './NotificationDropdown';
import { initialNotifications } from '../../data/notificationsData';

export function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter(n => n.isUnread).length;

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isUnread: false })));
  };

  const handleMarkAsRead = (id) => {
    setNotifications(prev => prev.map(n => (n.id === id ? { ...n, isUnread: false } : n)));
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900/50 px-6 backdrop-blur-md">
      <div className="flex w-full max-w-md items-center gap-2 rounded-xl border border-slate-700 bg-slate-800/50 px-3 py-2">
        <Search className="h-5 w-5 text-slate-400" />
        <input 
          type="text" 
          placeholder="Search grants, researchers, topics..." 
          className="w-full bg-transparent text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none"
        />
      </div>
      
      <div className="relative flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="relative text-slate-400 hover:text-white"
        >
          <Bell className="h-5 w-5" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-[10px] font-extrabold text-white shadow-md shadow-blue-500/50 animate-pulse">
              {unreadCount}
            </span>
          )}
        </Button>

        {/* Dropdown Popover */}
        <NotificationDropdown
          isOpen={isDropdownOpen}
          onClose={() => setIsDropdownOpen(false)}
          notifications={notifications}
          onMarkAllRead={handleMarkAllRead}
          onMarkAsRead={handleMarkAsRead}
        />

        <Link
          to="/profile"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 text-sm font-medium text-white shadow-lg hover:ring-2 hover:ring-blue-400 transition-all"
        >
          <User className="h-5 w-5" />
        </Link>
      </div>
    </header>
  );
}
