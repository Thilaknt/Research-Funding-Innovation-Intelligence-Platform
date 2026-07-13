import React from 'react';
import { Newspaper } from 'lucide-react';

export function NewsItem({ headline, date }) {
  return (
    <div className="flex gap-4 group cursor-pointer border-b border-slate-800/50 pb-4 last:border-0 last:pb-0">
      <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-slate-400 transition-colors group-hover:bg-blue-500/10 group-hover:text-blue-400">
        <Newspaper size={18} />
      </div>
      <div>
        <h4 className="text-sm font-medium text-slate-200 group-hover:text-blue-400 transition-colors line-clamp-2">
          {headline}
        </h4>
        <div className="mt-1 text-xs text-slate-500">{date}</div>
      </div>
    </div>
  );
}
