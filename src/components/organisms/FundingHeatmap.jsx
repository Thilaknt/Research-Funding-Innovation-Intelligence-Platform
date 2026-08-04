import React from 'react';
import { motion } from 'framer-motion';
import { Map } from 'lucide-react';
import { Card } from '../atoms/Card';
import { heatmapData } from '../../data/mockData';

export function FundingHeatmap() {
  return (
    <Card glass className="flex h-full flex-col">
      <div className="mb-6 flex items-center justify-between border-b border-slate-800/50 pb-4">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
          <Map className="text-blue-400" size={20} />
          Global Funding Heatmap
        </h3>
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span>Low</span>
          <div className="flex h-2 w-16 rounded-full bg-gradient-to-r from-slate-800 to-blue-500"></div>
          <span>High</span>
        </div>
      </div>
      
      <div className="relative flex-1 rounded-xl bg-slate-900/50 p-6 flex items-center justify-center overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.1),transparent_50%)]"></div>
        
        {/* CSS Grid Heatmap Simulation */}
        <div className="relative z-10 grid grid-cols-7 gap-2 sm:gap-3 w-full max-w-md">
          {heatmapData.map((cell, index) => {
            // Determine color intensity based on density mock data
            const intensity = cell.density / 100;
            const opacity = Math.max(0.1, intensity);
            const isHigh = intensity > 0.8;
            
            return (
              <motion.div
                key={cell.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                className={`aspect-square rounded-md transition-colors cursor-pointer border border-slate-800 ${
                  isHigh ? 'shadow-[0_0_10px_rgba(56,189,248,0.5)]' : ''
                }`}
                style={{ 
                  backgroundColor: `rgba(56, 189, 248, ${opacity})`,
                }}
                title={`Density: ${cell.density}%`}
              />
            );
          })}
        </div>
      </div>
    </Card>
  );
}
