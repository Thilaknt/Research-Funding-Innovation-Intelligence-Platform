import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../atoms/Card';

const testimonials = [
  {
    quote: "Nova Intelligence has completely transformed how our lab sources funding. We secured three major grants in Q1 alone thanks to the predictive analytics.",
    author: "Dr. Sarah Chen",
    role: "Lead Researcher, Quantum Lab, MIT"
  },
  {
    quote: "The automated compliance checking saved our grants team hundreds of hours. It's an indispensable tool for any modern research institution.",
    author: "Prof. James Wilson",
    role: "Director of Innovation, Stanford"
  },
  {
    quote: "Finally, a platform that understands the nuance of medical research funding. The semantic search is remarkably accurate.",
    author: "Dr. Elena Rodriguez",
    role: "Principal Investigator, UCSF"
  }
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Trusted by leading researchers
          </h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full bg-slate-900/40 border-slate-800">
                <div className="flex h-full flex-col justify-between">
                  <p className="mb-6 text-slate-300 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
