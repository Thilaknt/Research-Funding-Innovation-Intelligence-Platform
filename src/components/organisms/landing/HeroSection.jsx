import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { Button } from '../../atoms/Button';

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden pt-20 text-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute left-1/3 top-1/3 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/20 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mx-auto mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Introducing Nova Intelligence 2.0
          </div>
          
          <h1 className="mb-8 text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
            Accelerate your <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-400 to-sky-300 bg-clip-text text-transparent">
              Research Funding
            </span>
          </h1>
          
          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 sm:text-xl">
            Discover, track, and secure innovation grants with the world's most intelligent funding platform. Powered by real-time analytics and AI.
          </p>
          
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/dashboard">
              <Button variant="primary" size="lg" className="w-full sm:w-auto text-base">
                Explore Funding
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base group">
              <Play className="mr-2 h-4 w-4 text-slate-400 group-hover:text-white transition-colors" />
              Watch Demo
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
