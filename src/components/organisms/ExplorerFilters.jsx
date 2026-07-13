import React from 'react';
import { Search, SlidersHorizontal, ChevronDown } from 'lucide-react';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';

export function ExplorerFilters() {
  return (
    <Card glass className="flex flex-col gap-6 sticky top-24">
      <div className="flex items-center justify-between border-b border-slate-800/50 pb-4">
        <h3 className="font-semibold text-white flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-blue-400" />
          Advanced Filters
        </h3>
        <Button variant="ghost" size="sm" className="text-xs text-slate-400">Clear All</Button>
      </div>

      <div className="space-y-6">
        {/* Search */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-400">Semantic Search</label>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={16} />
            <input 
              type="text" 
              placeholder="e.g., Quantum algorithms for climate..." 
              className="w-full rounded-xl border border-slate-700 bg-slate-900/50 py-2.5 pl-9 pr-4 text-sm text-slate-200 placeholder:text-slate-600 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all"
            />
          </div>
        </div>

        {/* Research Domain */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-400">Research Domain</label>
          <div className="relative">
            <select className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-900/50 py-2.5 pl-4 pr-10 text-sm text-slate-300 focus:border-blue-500 focus:outline-none cursor-pointer">
              <option>All Domains</option>
              <option>Healthcare & Biotech</option>
              <option>Energy & Sustainability</option>
              <option>Quantum Technology</option>
              <option>Advanced Materials</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Funding Amount */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-400">Funding Amount</label>
          <div className="relative">
            <select className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-900/50 py-2.5 pl-4 pr-10 text-sm text-slate-300 focus:border-blue-500 focus:outline-none cursor-pointer">
              <option>Any Amount</option>
              <option>{"< $100,000"}</option>
              <option>{"$100,000 - $500,000"}</option>
              <option>{"$500,000 - $1,000,000"}</option>
              <option>{"> $1,000,000"}</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Country / Region */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-400">Country / Region</label>
          <div className="relative">
            <select className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-900/50 py-2.5 pl-4 pr-10 text-sm text-slate-300 focus:border-blue-500 focus:outline-none cursor-pointer">
              <option>Global (All Regions)</option>
              <option>United States</option>
              <option>European Union</option>
              <option>United Kingdom</option>
              <option>Asia Pacific</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
          </div>
        </div>

        {/* Eligibility */}
        <div className="space-y-2">
          <label className="text-xs font-medium text-slate-400">Eligibility</label>
          <div className="relative">
            <select className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-900/50 py-2.5 pl-4 pr-10 text-sm text-slate-300 focus:border-blue-500 focus:outline-none cursor-pointer">
              <option>All Institution Types</option>
              <option>Academic Universities</option>
              <option>Research Laboratories</option>
              <option>Non-Profits (501c3)</option>
              <option>For-Profit Companies</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" size={16} />
          </div>
        </div>

        <Button variant="primary" className="w-full mt-4">Apply Filters</Button>
      </div>
    </Card>
  );
}
