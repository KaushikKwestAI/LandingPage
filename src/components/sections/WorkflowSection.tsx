"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Step {
  id: number;
  title: string;
  tagline: string;
  detail: string;
  accent: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: 'Author',
    tagline: 'Describe → Test',
    detail: 'Type a natural-language scenario. AI proposes a stable, data-aware test with smart waits & selectors.',
    accent: 'from-indigo-500 to-blue-500',
  },
  {
    id: 2,
    title: 'Generate',
    tagline: 'Self-healing flows',
    detail: 'Autonomous refinement adds edge cases, accessibility checks & resilience patterns automatically.',
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    id: 3,
    title: 'Run',
    tagline: 'Massively parallel',
    detail: 'Distributed grid executes across browsers & devices. Adaptive retries isolate flakiness vs. real failures.',
    accent: 'from-violet-500 to-indigo-500',
  },
  {
    id: 4,
    title: 'Analyze',
    tagline: 'Root cause clarity',
    detail: 'Unified logs, network, traces & DOM diff. AI clusters duplicate failures and drafts remediation hints.',
    accent: 'from-fuchsia-500 to-violet-500',
  },
  {
    id: 5,
    title: 'Improve',
    tagline: 'Continuous quality',
    detail: 'Signal feeds quality scorecards & risk heatmaps. Weak spots surfaced before they regress.',
    accent: 'from-rose-500 to-pink-500',
  },
];

const WorkflowSection = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
  <section className="min-h-screen flex items-center py-28 bg-gradient-to-b from-indigo-50/40 via-white to-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] bg-gradient-to-b from-indigo-100/50 via-transparent to-transparent blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">How autonomous QA flows</h2>
          <p className="mt-4 text-gray-600 text-lg">A closed feedback loop that keeps accelerating quality every cycle.</p>
        </div>

        <div className="relative">
          {/* Horizontal track */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-6 items-stretch">
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 24 }}
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={prefersReducedMotion ? undefined : { duration: 0.55, delay: idx * 0.05 }}
                className="relative flex-1 group"
              >
                {/* Connector dot */}
                <div className="hidden lg:flex absolute -top-6 left-1/2 -translate-x-1/2 flex-col items-center">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${step.accent} shadow ring-2 ring-white`} />
                  {idx < steps.length - 1 && (
                    <div className="w-px h-6 bg-gradient-to-b from-indigo-200 to-transparent" />
                  )}
                </div>
                <div className="h-full rounded-2xl p-6 bg-white/70 backdrop-blur border border-indigo-100 shadow-sm hover:shadow-md transition relative overflow-hidden">
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-br ${step.accent} transition`} />
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className={`inline-flex items-center justify-center w-9 h-9 rounded-lg bg-gradient-to-br ${step.accent} text-white text-sm font-semibold shadow`}>{step.id}</span>
                      <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                    </div>
                    <span className="text-[11px] font-medium tracking-wide text-indigo-600 uppercase">{step.tagline}</span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 pr-2">
                    {step.detail}
                  </p>
                  <div className="mt-5 h-2 w-full rounded-full bg-indigo-100 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${step.accent}`}
                      initial={prefersReducedMotion ? false : { width: 0 }}
                      whileInView={prefersReducedMotion ? undefined : { width: '100%' }}
                      viewport={{ once: true }}
                      transition={prefersReducedMotion ? undefined : { duration: 1.2, delay: 0.2 + idx * 0.1, ease: 'easeOut' }}
                      style={prefersReducedMotion ? { width: '100%' } : undefined}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;
