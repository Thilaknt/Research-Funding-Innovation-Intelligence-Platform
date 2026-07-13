import React from 'react';
import { cn } from '../../utils/cn';

export function Card({ className, children, glass = false, ...props }) {
  return (
    <div 
      className={cn(
        "rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl",
        glass && "glass",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
}
