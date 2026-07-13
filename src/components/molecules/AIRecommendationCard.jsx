import React from 'react';
import { Bot, Calendar, Building, DollarSign, CheckCircle2 } from 'lucide-react';
import { Card } from '../atoms/Card';
import { Badge } from '../atoms/Badge';
import { Button } from '../atoms/Button';

export function AIRecommendationCard({ recommendation }) {
  return (
    <Card glass className="flex flex-col border border-blue-500/20 bg-slate-900/60 shadow-[0_0_15px_rgba(37,99,235,0.05)] hover:border-blue-500/40 transition-colors">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{recommendation.title}</h3>
          <div className="mt-1 flex items-center gap-2 text-sm text-slate-400">
            <Building size={14} />
            <span>{recommendation.organization}</span>
          </div>
        </div>
        <Badge variant="success" className="shrink-0 animate-pulse bg-green-500/20 border-green-500/30">
          {recommendation.confidence}% Match
        </Badge>
      </div>

      <div className="mb-6 rounded-xl bg-blue-900/20 p-4 border border-blue-500/20">
        <div className="mb-2 flex items-center gap-2 text-blue-400">
          <Bot size={16} />
          <span className="text-xs font-semibold uppercase tracking-wider">AI Reasoning</span>
        </div>
        <p className="text-sm text-slate-300 leading-relaxed">
          {recommendation.reason}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-slate-400">
        <div className="flex items-center gap-2">
          <DollarSign size={16} className="text-slate-500" />
          <span className="font-medium text-slate-200">{recommendation.amount}</span>
        </div>
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-slate-500" />
          <span>{recommendation.deadline}</span>
        </div>
        <div className="col-span-2 flex items-start gap-2">
          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-slate-500" />
          <span>{recommendation.eligibility}</span>
        </div>
      </div>

      <div className="mt-auto flex justify-end gap-3 border-t border-slate-800/50 pt-4">
        <Button variant="outline" size="sm">Save</Button>
        <Button variant="primary" size="sm">Apply Now</Button>
      </div>
    </Card>
  );
}
