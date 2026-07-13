import React from 'react';
import { motion } from 'framer-motion';

export function ActionCard({ icon: Icon, label, description, onClick }) {
  return (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="flex w-full items-center gap-4 rounded-xl border border-slate-700/50 bg-slate-800/40 p-4 text-left transition-colors hover:border-blue-500/50 hover:bg-slate-800/80"
    >
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
        <Icon size={24} />
      </div>
      <div>
        <div className="font-medium text-slate-200">{label}</div>
        <div className="text-xs text-slate-400">{description}</div>
      </div>
    </motion.button>
  );
}
