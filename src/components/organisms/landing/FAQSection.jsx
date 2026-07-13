import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '../../../utils/cn';

const faqs = [
  {
    question: "How does the AI match me with grants?",
    answer: "Our system uses advanced NLP to analyze your research profile, previous publications, and institutional data to find semantic matches in our global database of over 100,000 active funding opportunities."
  },
  {
    question: "Is my research data kept confidential?",
    answer: "Absolutely. We employ SOC 2 compliant, bank-grade encryption. Your proprietary research and proposal drafts are never shared or used to train public AI models."
  },
  {
    question: "Can I integrate this with our university's existing tools?",
    answer: "Yes, Nova Intelligence offers a robust API and native integrations with common research administration systems, ORCID, and major publication databases."
  },
  {
    question: "How frequently is the grant database updated?",
    answer: "Our crawlers update the database in real-time for major government portals (NSF, NIH, Horizon Europe) and every 24 hours for private philanthropic foundations."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="rounded-xl border border-slate-800 bg-slate-900/50 overflow-hidden"
            >
              <button
                className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-medium text-slate-200">{faq.question}</span>
                <ChevronDown 
                  className={cn(
                    "text-slate-400 transition-transform duration-200", 
                    openIndex === index ? "rotate-180" : ""
                  )} 
                  size={20} 
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-4 pt-2 text-slate-400">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
