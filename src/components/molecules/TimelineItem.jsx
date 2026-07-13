import React from 'react';
import { FileText, Bookmark, Bell, CheckCircle } from 'lucide-react';
import { cn } from '../../utils/cn';

const iconMap = {
  success: CheckCircle,
  info: Bookmark,
  warning: Bell,
  default: FileText
};

const colorMap = {
  success: "text-green-400 bg-green-500/10 border-green-500/20",
  info: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  warning: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20",
  default: "text-slate-400 bg-slate-800 border-slate-700"
};

export function TimelineItem({ action, details, time, type = "default", isLast = false }) {
  const Icon = iconMap[type] || iconMap.default;
  
  return (
    <div className="relative flex gap-4 pb-4">
      {!isLast && (
        <div className="absolute left-[15px] top-8 bottom-0 w-px bg-slate-800" />
      )}
      
      <div className={cn("relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border", colorMap[type])}>
        <Icon size={14} />
      </div>
      
      <div className="flex flex-col pb-2">
        <span className="text-sm font-medium text-slate-200">{action}</span>
        <span className="text-xs text-slate-400">{details}</span>
        <span className="mt-1 text-xs text-slate-500">{time}</span>
      </div>
    </div>
  );
}
