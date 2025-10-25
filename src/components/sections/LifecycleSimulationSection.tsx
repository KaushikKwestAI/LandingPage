"use client";

import React, { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface Phase {
  id: string;
  title: string;
  tagline: string;
  description: string;
  code: string;
  insight: string;
  accent: string; // tailwind gradient from-x to-y classes
}

const phases: Phase[] = [
  {
    id: 'describe',
    title: 'Describe',
    tagline: 'Plain English → Intent Graph',
    description: 'You state the user journey in natural language. We parse actors, actions, data needs & assertions.',
    code: `Scenario: Guest checkout with discount\n  Given a visitor adds an in-stock item to cart\n  And applies a valid promo code\n  When they checkout as guest\n  Then the order total reflects the discount`,
    insight: 'Semantic parse builds a resilient intent model – not brittle selectors.',
    accent: 'from-indigo-500 to-blue-500'
  },
  {
    id: 'generate',
    title: 'Generate',
    tagline: 'Autonomous Authoring',
    description: 'AI proposes stable steps, smart waits, test data scaffolding & accessibility hooks.',
    code: `steps.generate({\n  path: '/product/sku-4482',\n  action: addToCart(),\n  promo: applyCode('SPRING20'),\n  checkout: proceedGuest(),\n  expect: total.includes(discount)\n});`,
    insight: 'Self-healing selectors mapped to semantic roles.',
    accent: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'execute',
    title: 'Execute',
    tagline: 'Distributed Grid',
    description: 'Sharded parallel runs across browsers + environments. Adaptive retry distinguishes flake vs defect.',
    code: `run.matrix({\n  browsers: ['chromium','firefox','webkit'],\n  regions: ['us-east','eu-west'],\n  strategy: 'adaptive'\n});`,
    insight: 'Execution telemetry feeds resiliency scoring.',
    accent: 'from-violet-500 to-indigo-500'
  },
  {
    id: 'analyze',
    title: 'Analyze',
    tagline: 'Failure Intelligence',
    description: 'Clustered failures with causal summaries & DOM/network trace fusion.',
    code: `cluster.failures().map(c => ({\n  signature: c.hash,\n  probableCause: ai.rootCause(c.events),\n  suggestedFix: ai.patch(c)\n}));`,
    insight: 'Noise collapses. Attention goes to unique causes.',
    accent: 'from-fuchsia-500 to-pink-500'
  },
  {
    id: 'govern',
    title: 'Govern',
    tagline: 'Quality Signals',
    description: 'Coverage heat, flake debt, MTTR trends & release readiness scoring surface risk pre-merge.',
    code: `quality.score({\n  coverage: 0.82,\n  flakeIndex: 0.12,\n  mttrHours: 1.4,\n  risk: ai.releaseRisk(pr)\n});`,
    insight: 'Actionable scorecards prevent silent regression drift.',
    accent: 'from-rose-500 to-orange-400'
  }
];

const LifecycleSimulationSection: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return; // no auto-advance
    const id = setInterval(() => {
      setActive(a => (a + 1) % phases.length);
    }, 4800);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  return (
    <section className="min-h-screen flex items-center relative bg-gradient-to-b from-white via-indigo-50/40 to-white py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[70rem] h-[70rem] rounded-full bg-gradient-to-b from-indigo-100/40 via-transparent to-transparent blur-3xl" />
        <div className="absolute -top-20 right-10 w-80 h-80 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-70" />
        <div className="absolute -bottom-24 left-10 w-96 h-96 bg-gradient-to-tr from-fuchsia-100 to-rose-100 rounded-full blur-3xl opacity-60" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">Autonomous QA Lifecycle</h2>
          <p className="mt-4 text-gray-600 text-lg">From intent to governed quality signals – one adaptive feedback loop.</p>
        </div>
        <div className="grid lg:grid-cols-5 gap-8 glass-soft glass-border-gradient rounded-3xl p-8 md:p-10 relative overflow-hidden">
          <div className="noise-layer" />
          <div className="glass-grid-overlay opacity-25" />
          <div className="lg:col-span-2 space-y-4">
            {phases.map((p, idx) => {
              const isActive = idx === active;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(idx)}
                  className={`w-full text-left rounded-xl border px-5 py-4 transition relative backdrop-blur bg-white/60 hover:bg-white shadow-sm ${isActive ? 'border-indigo-300 shadow-md' : 'border-indigo-100'}`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span className="flex items-center gap-3">
                    <span className={`inline-flex w-8 h-8 rounded-lg bg-gradient-to-br ${p.accent} text-white text-sm font-semibold items-center justify-center shadow`}>{idx + 1}</span>
                    <span>
                      <span className="block font-semibold text-sm text-gray-800">{p.title}</span>
                      <span className="block text-[11px] tracking-wide uppercase text-indigo-600 mt-0.5">{p.tagline}</span>
                    </span>
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="lifecycle-active"
                      className="absolute inset-0 rounded-xl ring-2 ring-indigo-300/60 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div className="lg:col-span-3 relative">
            {phases.map((p, idx) => idx === active && (
              <motion.div
                key={p.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
                animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="relative rounded-2xl p-8 bg-white/70 backdrop-blur border border-indigo-100 shadow"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-3">{p.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">{p.description}</p>
                    <div className="text-[11px] font-medium text-indigo-600 uppercase mb-2">Insight</div>
                    <p className="text-xs text-gray-500 leading-relaxed">{p.insight}</p>
                  </div>
                  <div className="relative">
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-blue-400 opacity-20" aria-hidden="true" />
                    <pre className="text-xs md:text-[13px] leading-relaxed font-mono bg-white/80 backdrop-blur rounded-lg border border-indigo-100 p-4 overflow-x-auto shadow-inner">
{p.code}
                    </pre>
                    <div className="mt-4 h-2 w-full rounded-full bg-indigo-100 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full bg-gradient-to-r ${p.accent}`}
                        key={p.id + '-bar'}
                        initial={prefersReducedMotion ? false : { width: 0 }}
                        animate={prefersReducedMotion ? { width: '100%' } : { width: '100%' }}
                        transition={{ duration: 1.1, ease: 'easeOut' }}
                      />
                    </div>
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

export default LifecycleSimulationSection;
