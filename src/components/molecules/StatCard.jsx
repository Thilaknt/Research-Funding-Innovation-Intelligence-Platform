import React from 'react';
import { Card } from '../atoms/Card';
import { cn } from '../../utils/cn';

export function StatCard({ title, value, icon: Icon, trend, className }) {
  const isPositive = trend?.startsWith('+');
  
  return (
    <Card className={cn("flex flex-col gap-4", className)} glass>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-400">{title}</span>
        {Icon && (
          <div className="rounded-lg bg-blue-500/10 p-2 text-blue-400">
            <Icon size={20} />
          </div>
        )}
      </div>
      <div>
        <div className="text-3xl font-bold text-white">{value}</div>
        {trend && (
          <div className="mt-1 flex items-center text-sm">
            <span className={cn(
              "font-medium",
              isPositive ? "text-green-400" : "text-red-400"
            )}>
              {trend}
            </span>
            <span className="ml-2 text-slate-500">vs last month</span>
          </div>
        )}
      </div>
    </Card>
  );
}
