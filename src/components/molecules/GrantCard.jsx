import React from 'react';
import { Bookmark, Building, Calendar, DollarSign, Globe, CheckCircle2 } from 'lucide-react';
import { Card } from '../atoms/Card';
import { Button } from '../atoms/Button';
import { Badge } from '../atoms/Badge';
import { cn } from '../../utils/cn';

export function GrantCard({ grant }) {
  const isHighMatch = grant.matchScore >= 90;
  const isMediumMatch = grant.matchScore >= 75 && grant.matchScore < 90;

  return (
    <Card glass className="flex flex-col h-full hover:border-blue-500/30 transition-colors duration-300">
      <div className="flex items-start justify-between mb-4 gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white line-clamp-2">{grant.title}</h3>
          <div className="flex items-center gap-2 mt-2 text-sm text-slate-400">
            <Building size={14} className="shrink-0" />
            <span className="truncate">{grant.organization}</span>
          </div>
        </div>
        <Badge 
          variant={isHighMatch ? 'success' : isMediumMatch ? 'primary' : 'default'}
          className={cn("shrink-0", isHighMatch && "bg-green-500/20 text-green-400 border-green-500/30")}
        >
          {grant.matchScore}% Match
        </Badge>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <DollarSign size={16} className="text-slate-500" />
          <span className="font-medium">{grant.amount}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <Calendar size={16} className="text-slate-500" />
          <span>{grant.deadline}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <Globe size={16} className="text-slate-500" />
          <span className="truncate">{grant.country}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-300">
          <CheckCircle2 size={16} className="text-slate-500" />
          <span className="truncate">{grant.eligibility}</span>
        </div>
      </div>

      <div className="mt-auto pt-4 border-t border-slate-800/50 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Badge variant="default" className="bg-slate-800/50">{grant.domain}</Badge>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="text-slate-400 hover:text-blue-400 shrink-0">
            <Bookmark size={18} />
          </Button>
          <Button variant="primary" size="sm" className="px-6">
            Apply
          </Button>
        </div>
      </div>
    </Card>
  );
}
