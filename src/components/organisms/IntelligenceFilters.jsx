import React from 'react';
import { Filter, Calendar, Globe, Beaker } from 'lucide-react';

export function IntelligenceFilters() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 rounded-xl border border-slate-800 bg-slate-900/50 p-2 glass">
      <div className="flex items-center gap-2 pl-2 pr-4 border-r border-slate-800/50">
        <Filter size={16} className="text-slate-400" />
        <span className="text-sm font-medium text-slate-300">Filters</span>
      </div>

      <div className="flex flex-1 items-center gap-4 px-2">
        <div className="flex items-center gap-2 rounded-lg bg-slate-800/50 px-3 py-1.5 hover:bg-slate-800 transition-colors cursor-pointer">
          <Calendar size={14} className="text-slate-400" />
          <select className="bg-transparent text-sm text-slate-300 focus:outline-none cursor-pointer">
            <option>2026</option>
            <option>2025</option>
            <option>2024</option>
          </select>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-slate-800/50 px-3 py-1.5 hover:bg-slate-800 transition-colors cursor-pointer">
          <Globe size={14} className="text-slate-400" />
          <select className="bg-transparent text-sm text-slate-300 focus:outline-none cursor-pointer">
            <option>Global (All)</option>
            <option>North America</option>
            <option>Europe</option>
            <option>Asia Pacific</option>
          </select>
        </div>

        <div className="flex items-center gap-2 rounded-lg bg-slate-800/50 px-3 py-1.5 hover:bg-slate-800 transition-colors cursor-pointer">
          <Beaker size={14} className="text-slate-400" />
          <select className="bg-transparent text-sm text-slate-300 focus:outline-none cursor-pointer">
            <option>All Domains</option>
            <option>Quantum Tech</option>
            <option>Biotech</option>
            <option>Renewable Energy</option>
          </select>
        </div>
      </div>
    </div>
  );
}
