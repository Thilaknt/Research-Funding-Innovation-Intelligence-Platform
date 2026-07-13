import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, FlaskConical, TrendingUp, Users, Plus, Download, Filter, ArrowRight } from 'lucide-react';
import { DashboardLayout } from '../templates/DashboardLayout';
import { StatCard } from '../components/molecules/StatCard';
import { GrantsTable } from '../components/organisms/GrantsTable';
import { Button } from '../components/atoms/Button';
import { Card } from '../components/atoms/Card';
import { Badge } from '../components/atoms/Badge';
import { TimelineItem } from '../components/molecules/TimelineItem';
import { DeadlineCard } from '../components/molecules/DeadlineCard';
import { ActionCard } from '../components/molecules/ActionCard';
import { NewsItem } from '../components/molecules/NewsItem';
import { 
  userData, kpiData, recentGrants, upcomingDeadlines, 
  recommendedOpportunities, activityTimeline, innovationNews 
} from '../data/mockData';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
};

export function Dashboard() {
  return (
    <DashboardLayout>
      <motion.div variants={container} initial="hidden" animate="show" className="space-y-6 pb-12">
        
        {/* Welcome Banner */}
        <motion.div variants={item} className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-r from-blue-900/40 to-slate-900 p-8 glass">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"></div>
          <div className="relative z-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-white">Welcome back, {userData.name}</h1>
              <p className="mt-2 text-slate-400">{userData.role} • {userData.institution}</p>
              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-sm text-blue-400 border border-blue-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                {userData.statusMessage}
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="bg-slate-900/50">Export Report</Button>
              <Button variant="primary">New Application</Button>
            </div>
          </div>
        </motion.div>

        {/* Top Grid: Stats & Quick Actions */}
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-4">
          <motion.div variants={item} className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:col-span-3">
            <StatCard title="Total Funding" value={kpiData.totalFunding} icon={DollarSign} trend={kpiData.fundingTrend} />
            <StatCard title="Active Grants" value={kpiData.activeGrants} icon={FlaskConical} trend={kpiData.grantsTrend} />
            <StatCard title="Innovation Index" value={kpiData.innovationIndex} icon={TrendingUp} trend={kpiData.indexTrend} />
            <StatCard title="Active Researchers" value={kpiData.researchers} icon={Users} trend={kpiData.researchersTrend} />
          </motion.div>
          
          <motion.div variants={item} className="flex flex-col gap-4">
            <ActionCard icon={Plus} label="New Proposal" description="Start a draft application" onClick={() => {}} />
            <ActionCard icon={Download} label="Export Data" description="Download CSV reports" onClick={() => {}} />
            <ActionCard icon={Filter} label="Advanced Search" description="Find specific grants" onClick={() => {}} />
          </motion.div>
        </div>

        {/* Middle Grid: Main Content & Sidebars */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          
          {/* Main Column */}
          <motion.div variants={item} className="flex flex-col gap-6 lg:col-span-2">
            
            {/* Chart Section */}
            <Card className="h-[300px] flex flex-col justify-between" glass>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Funding by Sector</h3>
                <Button variant="ghost" size="sm">View Details</Button>
              </div>
              <div className="flex h-48 items-end gap-2 pb-2 pt-6">
                {[35, 25, 20, 15, 5].map((val, i) => (
                  <div key={i} className="group relative flex flex-1 flex-col items-center justify-end gap-2">
                    <div className="absolute -top-8 hidden text-xs font-medium text-slate-400 group-hover:block">{val}%</div>
                    <motion.div 
                      initial={{ height: 0 }} animate={{ height: `${val}%` }} transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                      className="w-full rounded-t-md bg-gradient-to-t from-blue-600 to-sky-400 hover:opacity-80" 
                    />
                  </div>
                ))}
              </div>
              <div className="flex justify-between text-xs text-slate-500">
                <span>Health</span><span>Energy</span><span>Quant</span><span>Mat.</span><span>Other</span>
              </div>
            </Card>

            <GrantsTable grants={recentGrants} />

            {/* Recommended Opportunities */}
            <Card glass className="p-0 overflow-hidden">
              <div className="flex items-center justify-between border-b border-slate-800 p-6">
                <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                  <span className="text-sky-400">✨</span> Recommended Opportunities
                </h3>
                <Button variant="ghost" size="sm">View All</Button>
              </div>
              <div className="divide-y divide-slate-800">
                {recommendedOpportunities.map((opp) => (
                  <div key={opp.id} className="flex items-center justify-between p-6 transition-colors hover:bg-slate-800/20">
                    <div>
                      <h4 className="font-medium text-slate-200">{opp.title}</h4>
                      <p className="mt-1 text-sm text-slate-400">Deadline: {opp.deadline} • Amount: {opp.amount}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <Badge variant="success">{opp.match} Match</Badge>
                      <Button variant="outline" size="sm">Review</Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

          </motion.div>

          {/* Right Column */}
          <motion.div variants={item} className="flex flex-col gap-6">
            
            {/* Upcoming Deadlines */}
            <Card glass>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Upcoming Deadlines</h3>
              </div>
              <div className="space-y-3">
                {upcomingDeadlines.map((dl) => (
                  <DeadlineCard key={dl.id} title={dl.title} date={dl.date} priority={dl.priority} />
                ))}
              </div>
            </Card>

            {/* Activity Timeline */}
            <Card glass>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Recent Activity</h3>
              </div>
              <div>
                {activityTimeline.map((act, index) => (
                  <TimelineItem 
                    key={act.id} 
                    action={act.action} 
                    details={act.details} 
                    time={act.time} 
                    type={act.type}
                    isLast={index === activityTimeline.length - 1} 
                  />
                ))}
              </div>
            </Card>

            {/* Innovation News */}
            <Card glass>
              <div className="mb-6 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-white">Innovation News</h3>
              </div>
              <div className="space-y-4">
                {innovationNews.map((news) => (
                  <NewsItem key={news.id} headline={news.headline} date={news.date} />
                ))}
              </div>
              <Button variant="ghost" className="mt-4 w-full text-slate-400">Read More News</Button>
            </Card>
            
          </motion.div>
        </div>
      </motion.div>
    </DashboardLayout>
  );
}
