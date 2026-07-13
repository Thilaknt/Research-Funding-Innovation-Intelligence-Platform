import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, Shield, LineChart, Globe, Lock } from 'lucide-react';
import { Card } from '../../atoms/Card';

const features = [
  {
    icon: Search,
    title: "AI-Powered Search",
    description: "Find the exact grants you need using semantic search and natural language processing."
  },
  {
    icon: Zap,
    title: "Real-time Alerts",
    description: "Get instantly notified when new funding opportunities match your research profile."
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Forecast your chances of securing funding based on historical success rates."
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Access funding databases from over 50 countries and 1,000+ institutions."
  },
  {
    icon: Shield,
    title: "Compliance Checking",
    description: "Automatically verify if your proposal meets all grant requirements before submission."
  },
  {
    icon: Lock,
    title: "Enterprise Security",
    description: "Your research data is protected with bank-grade encryption and compliance standards."
  }
];

export function FeaturesSection() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Everything you need to secure funding
          </h2>
          <p className="mx-auto max-w-2xl text-slate-400">
            A comprehensive suite of tools designed specifically for researchers, institutions, and innovation labs.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card glass className="h-full hover:border-blue-500/30 transition-colors">
                <div className="mb-4 inline-flex rounded-lg bg-blue-500/10 p-3 text-blue-400">
                  <feature.icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{feature.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
