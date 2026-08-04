import React from 'react';
import { motion } from 'framer-motion';
import { DashboardLayout } from '../templates/DashboardLayout';
import { IntelligenceFilters } from '../components/organisms/IntelligenceFilters';
import { FundingHeatmap } from '../components/organisms/FundingHeatmap';
import { RankingList } from '../components/organisms/RankingList';
import { Card } from '../components/atoms/Card';
import { StatCard } from '../components/molecules/StatCard';
import { LineChart, Globe, GraduationCap, Users, TrendingUp, Zap, Target } from 'lucide-react';
import { 
  countryRankings, 
  topUniversities, 
  topResearchers, 
  trendingTopics 
} from '../data/mockData';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function ResearchIntelligence() {
  return (
    <DashboardLayout>
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 pb-12">
        
        {/* Page Header & Filters */}
        <motion.div variants={item} className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30">
                <LineChart size={20} />
              </span>
              Research Intelligence
            </h1>
            <p className="text-slate-400 mt-2">Global analytics, trends, and funding distributions.</p>
          </div>
          <IntelligenceFilters />
        </motion.div>

        {/* Top KPIs */}
        <motion.div variants={item} className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard title="Total Global Funding" value="$245.8B" icon={Globe} trend="+8.4%" />
          <StatCard title="Active Institutions" value="1,402" icon={GraduationCap} trend="+12" />
          <StatCard title="Principal Investigators" value="12,500+" icon={Users} trend="+450" />
          <StatCard title="Avg. Grant Size" value="$1.2M" icon={Target} trend="+5.2%" />
        </motion.div>

        {/* Middle Section: Heatmap & Trending Topics */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <motion.div variants={item} className="lg:col-span-2">
            <FundingHeatmap />
          </motion.div>
          
          <motion.div variants={item}>
            <Card glass className="flex h-full flex-col">
              <div className="mb-6 flex items-center justify-between border-b border-slate-800/50 pb-4">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
                  <Zap className="text-blue-400" size={20} />
                  Trending Research
                </h3>
              </div>
              <div className="flex-1 space-y-4">
                {trendingTopics.map((topic, idx) => (
                  <div key={idx} className="group flex items-center justify-between rounded-xl border border-slate-800/50 bg-slate-900/30 p-4 transition-colors hover:border-blue-500/30 hover:bg-slate-800/50">
                    <span className="font-medium text-slate-200">{topic.topic}</span>
                    <span className="rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-400 border border-green-500/20">
                      {topic.growth}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Bottom Section: Rankings */}
        <motion.div variants={item} className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <RankingList title="Top Countries" data={countryRankings} icon={Globe} />
          <RankingList title="Top Universities" data={topUniversities} icon={GraduationCap} />
          <RankingList title="Top Researchers" data={topResearchers} icon={Users} />
        </motion.div>

      </motion.div>
    </DashboardLayout>
  );
}
