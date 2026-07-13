import React from 'react';
import { motion } from 'framer-motion';
import { Search, Sparkles, ArrowRight } from 'lucide-react';
import { Card } from '../../atoms/Card';

export function SearchDemoSection() {
  return (
    <section id="demo" className="relative py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-blue-600/10 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-6 text-3xl font-bold text-white sm:text-4xl">
              Experience the future of grant discovery
            </h2>
            <p className="mb-8 text-lg text-slate-400">
              Stop manually searching through hundreds of government portals. Our AI-driven semantic search understands the context of your research and instantly matches you with the highest probability funding opportunities.
            </p>
            
            <ul className="space-y-4 mb-8">
              {[
                "Natural Language Processing for intuitive queries",
                "Real-time database updates from 50+ countries",
                "Automated eligibility pre-screening"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                    <Sparkles size={14} />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative Mockup */}
            <Card glass className="relative z-10 border-slate-700/50 bg-slate-900/60 p-6 shadow-2xl backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-3 rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-3">
                <Search className="text-slate-400" size={20} />
                <div className="flex-1 text-sm text-slate-300">
                  <span className="text-slate-500">"</span>
                  Funding for quantum computing algorithms in climate modeling
                  <span className="text-slate-500 animate-pulse">|</span>
                </div>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: "Quantum Climate Tech Grant 2024", org: "Department of Energy", match: "98% Match" },
                  { title: "Next-Gen Computational Science", org: "National Science Foundation", match: "92% Match" },
                  { title: "European Quantum Initiative", org: "Horizon Europe", match: "85% Match" },
                ].map((mock, i) => (
                  <div key={i} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-800/30 p-4 transition-colors hover:bg-slate-800/50">
                    <div>
                      <div className="font-medium text-slate-200">{mock.title}</div>
                      <div className="text-xs text-slate-400">{mock.org}</div>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs font-medium text-green-400">{mock.match}</span>
                      <ArrowRight size={14} className="text-slate-500" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            
            {/* Decorative elements behind the card */}
            <div className="absolute -bottom-6 -left-6 z-0 h-32 w-32 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-400 opacity-20 blur-2xl" />
            <div className="absolute -right-6 -top-6 z-0 h-32 w-32 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-400 opacity-20 blur-2xl" />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
