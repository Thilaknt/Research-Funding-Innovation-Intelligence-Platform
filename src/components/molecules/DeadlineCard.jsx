import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { cn } from '../../utils/cn';

export function DeadlineCard({ title, date, priority }) {
  const isHigh = priority === 'High';
  
  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-3 transition-colors hover:bg-slate-800/50">
      <div className="flex items-center gap-3">
        <div className={cn(
          "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border",
          isHigh ? "border-red-500/20 bg-red-500/10 text-red-400" : "border-blue-500/20 bg-blue-500/10 text-blue-400"
        )}>
          {isHigh ? <Clock size={18} /> : <Calendar size={18} />}
        </div>
        <div>
          <div className="text-sm font-medium text-slate-200">{title}</div>
          <div className={cn("text-xs font-medium", isHigh ? "text-red-400" : "text-slate-400")}>
            Due in {date}
          </div>
        </div>
      </div>
    </div>
  );
}
