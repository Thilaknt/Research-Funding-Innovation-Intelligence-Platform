import React from 'react';
import { motion } from 'framer-motion';
import { DashboardLayout } from '../templates/DashboardLayout';
import { ExplorerFilters } from '../components/organisms/ExplorerFilters';
import { GrantCard } from '../components/molecules/GrantCard';
import { explorerGrants } from '../data/mockData';
import { Sparkles } from 'lucide-react';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function FundingExplorer() {
  return (
    <DashboardLayout>
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 pb-12">
        
        {/* Page Header */}
        <motion.div variants={item} className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
              <Sparkles size={20} />
            </span>
            Funding Explorer
          </h1>
          <p className="text-slate-400">Discover and filter the best funding opportunities for your research.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {/* Filters Sidebar */}
          <motion.div variants={item} className="lg:col-span-1">
            <ExplorerFilters />
          </motion.div>
          
          {/* Main Grid */}
          <motion.div variants={item} className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
              <span>Showing <strong>{explorerGrants.length}</strong> matching grants</span>
              <div className="flex items-center gap-2">
                <span>Sort by:</span>
                <select className="bg-transparent text-slate-200 font-medium focus:outline-none cursor-pointer">
                  <option>Best Match (AI)</option>
                  <option>Highest Amount</option>
                  <option>Deadline (Earliest)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {explorerGrants.map((grant) => (
                <GrantCard key={grant.id} grant={grant} />
              ))}
            </div>
          </motion.div>
        </div>

      </motion.div>
    </DashboardLayout>
  );
}
