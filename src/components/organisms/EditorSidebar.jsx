import React from 'react';
import { Type, FileText, Target, Crosshair, Beaker, DollarSign, Calendar } from 'lucide-react';
import { cn } from '../../utils/cn';

const sections = [
  { id: 'title', label: 'Title', icon: Type },
  { id: 'abstract', label: 'Abstract', icon: FileText },
  { id: 'problem', label: 'Problem Statement', icon: Target },
  { id: 'objectives', label: 'Objectives', icon: Crosshair },
  { id: 'methodology', label: 'Methodology', icon: Beaker },
  { id: 'budget', label: 'Budget', icon: DollarSign },
  { id: 'timeline', label: 'Timeline', icon: Calendar },
];

export function EditorSidebar({ activeSection, onSectionChange }) {
  return (
    <div className="flex h-full w-64 flex-col border-r border-slate-800 bg-slate-900/30">
      <div className="p-6">
        <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Proposal Sections
        </h3>
      </div>
      
      <nav className="flex-1 space-y-1 px-4">
        {sections.map((section) => {
          const Icon = section.icon;
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => onSectionChange(section.id)}
              className={cn(
                "flex w-full items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium transition-colors",
                isActive 
                  ? "bg-blue-600/10 text-blue-400" 
                  : "text-slate-400 hover:bg-slate-800/50 hover:text-slate-200"
              )}
            >
              <Icon size={18} />
              {section.label}
            </button>
          );
        })}
      </nav>
      
      <div className="p-6">
        <div className="h-2 w-full overflow-hidden rounded-full bg-slate-800">
          <div className="h-full w-[45%] rounded-full bg-blue-500"></div>
        </div>
        <p className="mt-2 text-xs text-slate-500 text-center">45% Complete</p>
      </div>
    </div>
  );
}
