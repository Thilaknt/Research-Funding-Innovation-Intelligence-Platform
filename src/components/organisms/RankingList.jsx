import React from 'react';
import { Card } from '../atoms/Card';

export function RankingList({ title, data, icon: Icon }) {
  return (
    <Card glass className="flex flex-col h-full">
      <div className="mb-6 flex items-center gap-3 border-b border-slate-800/50 pb-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
          <Icon size={20} />
        </div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      
      <div className="flex-1 space-y-4">
        {data.map((item) => (
          <div key={item.rank} className="flex items-center gap-4">
            <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-800 text-xs font-bold text-slate-400">
              {item.rank}
            </div>
            
            <div className="flex-1 overflow-hidden">
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium text-slate-200 truncate pr-2">{item.entity}</span>
                <span className="text-slate-400 shrink-0">{item.value}</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                <div 
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400" 
                  style={{ width: `${item.score}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
