import React from 'react';
import { Search, Bell, User } from 'lucide-react';
import { Button } from '../atoms/Button';

export function Header() {
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
      
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative text-slate-400">
          <Bell className="h-5 w-5" />
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500"></span>
        </Button>
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-blue-600 to-sky-400 text-sm font-medium text-white shadow-lg">
          <User className="h-5 w-5" />
        </div>
      </div>
    </header>
  );
}
