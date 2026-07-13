import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { AIRecommendationCard } from '../molecules/AIRecommendationCard';
import { aiRecommendations } from '../../data/mockData';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, x: 20 },
  show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function RecommendationResults({ isGenerating, hasResults }) {
  if (isGenerating) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center space-y-4 rounded-2xl border border-slate-800 border-dashed bg-slate-900/20 p-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
          <Sparkles size={32} className="animate-pulse" />
        </div>
        <h3 className="text-xl font-medium text-white">Analyzing your profile...</h3>
        <p className="text-center text-slate-400 max-w-sm">
          Nova AI is currently searching through 100,000+ active grants and matching them against your specific parameters.
        </p>
      </div>
    );
  }

  if (!hasResults) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center space-y-4 rounded-2xl border border-slate-800 border-dashed bg-slate-900/20 p-8">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800 text-slate-500">
          <Sparkles size={32} />
        </div>
        <h3 className="text-xl font-medium text-slate-300">Ready to assist</h3>
        <p className="text-center text-slate-500 max-w-sm">
          Send a message to Nova AI on the left to get personalized grant recommendations based on your unique profile.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full w-full">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Sparkles className="text-blue-400" size={24} />
          Top Recommendations
        </h2>
        <span className="text-sm font-medium text-slate-400">
          {aiRecommendations.length} matches found
        </span>
      </div>

      <motion.div 
        variants={container} 
        initial="hidden" 
        animate="show" 
        className="space-y-6"
      >
        {aiRecommendations.map((rec) => (
          <motion.div key={rec.id} variants={item}>
            <AIRecommendationCard recommendation={rec} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
