"use client";

import * as Tabs from '@radix-ui/react-tabs';
import { motion, useReducedMotion } from 'framer-motion';
import React from 'react';

interface TabSpec {
  value: string;
  label: string;
  headline: string;
  blurb: string;
  bullets: string[];
  accent: string;
}

const tabs: TabSpec[] = [
  {
    value: 'author',
    label: 'Author',
    headline: 'Generate resilient tests in seconds',
    blurb: 'Natural language to robust, self‑healing test flows. Zero locator hunting. Zero boilerplate.',
    bullets: [
      'Describe a scenario → full test suggested',
      'Smart data generation & masking',
      'AI self-heals selectors & waits',
    ],
    accent: 'from-indigo-500 to-blue-500',
  },
  {
    value: 'run',
    label: 'Run',
    headline: 'Scale execution without bottlenecks',
    blurb: 'Massively parallel, adaptive retry logic, cross-browser & device orchestration in one place.',
    bullets: [
      'Auto-sharding & parallelization',
      'Ephemeral isolated environments',
      'Real-time artifact streaming',
    ],
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    value: 'analyze',
    label: 'Analyze',
    headline: 'Instant root-cause clarity',
    blurb: 'Unified trace, console, network + DOM mutation timeline. AI groups duplicate failures automatically.',
    bullets: [
      'Failure clustering & dedupe',
      'One-click probable cause summary',
      'Visual diff & accessibility insights',
    ],
    accent: 'from-violet-500 to-indigo-500',
  },
  {
    value: 'integrate',
    label: 'Integrate',
    headline: 'Ship continuously with confidence',
    blurb: 'Tight CI/CD hooks, quality gates & flaky isolation keep pipelines green and meaningful.',
    bullets: [
      'GitHub / GitLab / Jenkins native',
      'Quality gate scoring & trends',
      'Flaky quarantine automation',
    ],
    accent: 'from-fuchsia-500 to-violet-500',
  },
];

const FeatureTabsSection = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
  <section className="min-h-screen flex items-center py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute top-1/3 -left-10 w-80 h-80 bg-gradient-to-br from-indigo-100 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-0 w-[26rem] h-[26rem] bg-gradient-to-tr from-violet-100 to-transparent rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">An end‑to‑end intelligent QA platform</h2>
          <p className="mt-4 text-gray-600 text-lg">Everything from authoring to continuous quality signals—designed as a cohesive system.</p>
        </div>
        <Tabs.Root defaultValue="author" className="w-full">
          <div className="flex flex-col lg:flex-row gap-10">
            <Tabs.List className="lg:w-1/4 flex lg:flex-col gap-3 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {tabs.map(t => (
                <Tabs.Trigger
                  key={t.value}
                  value={t.value}
                  className="group relative px-5 py-3 rounded-xl border border-indigo-100 text-left bg-white/60 backdrop-blur hover:bg-white shadow-sm data-[state=active]:shadow-md data-[state=active]:border-indigo-300 transition"
                >
                  <span className="block font-semibold text-sm text-gray-700 group-data-[state=active]:text-indigo-700">{t.label}</span>
                  <span className="mt-1 block text-xs text-gray-500 leading-relaxed group-data-[state=active]:text-gray-600">{t.headline}</span>
                  <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 group-data-[state=active]:opacity-100 ring-2 ring-indigo-300/50 transition" />
                </Tabs.Trigger>
              ))}
            </Tabs.List>
            <div className="lg:w-3/4">
              {tabs.map(t => (
                <Tabs.Content key={t.value} value={t.value} forceMount>
                  <motion.div
                    key={t.value}
                    initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
                    animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
                    transition={prefersReducedMotion ? undefined : { duration: 0.45 }}
                    className="relative rounded-2xl p-8 bg-white/70 backdrop-blur border border-indigo-100 shadow group"
                  >
                    <div className="absolute -top-3 -left-3 w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-400 to-blue-400 opacity-20 group-hover:opacity-40 transition" />
                    <div className="grid lg:grid-cols-5 gap-8">
                      <div className="lg:col-span-2">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-4">{t.headline}</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{t.blurb}</p>
                        <ul className="space-y-3">
                          {t.bullets.map(b => (
                            <li key={b} className="flex items-start gap-3 text-sm text-gray-600">
                              <span className={`mt-1 inline-flex w-5 h-5 rounded-md bg-gradient-to-br ${t.accent} text-white text-[11px] font-semibold items-center justify-center shadow`}>
                                ✓
                              </span>
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="lg:col-span-3 relative">
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-white via-indigo-50 to-white" />
                        <div className="relative h-full rounded-xl border border-indigo-100/70 p-4 bg-white/60 backdrop-blur flex flex-col gap-4 shadow-sm">
                          <div className="text-xs font-medium tracking-wide text-indigo-600">Preview</div>
                          <div className="flex-1 grid grid-cols-2 gap-4">
                            <div className="rounded-lg border border-indigo-100 bg-white/70 p-3 flex flex-col justify-between">
                              <div className="text-[11px] font-semibold text-gray-500 uppercase">State</div>
                              <div className="text-sm font-semibold text-gray-800">Stable</div>
                              <div className="mt-2 text-[11px] text-gray-400">AI monitors selectors</div>
                            </div>
                            <div className="rounded-lg border border-indigo-100 bg-white/70 p-3 flex flex-col justify-between">
                              <div className="text-[11px] font-semibold text-gray-500 uppercase">Coverage</div>
                              <div className="text-sm font-semibold text-gray-800">82%</div>
                              <div className="mt-2 text-[11px] text-gray-400">Critical paths tracked</div>
                            </div>
                            <div className="rounded-lg border border-indigo-100 bg-white/70 p-3 flex flex-col justify-between col-span-2">
                              <div className="flex items-center justify-between">
                                <div className="text-[11px] font-semibold text-gray-500 uppercase">Recent Runs</div>
                                <div className="flex gap-1">
                                  {Array.from({ length: 6 }).map((_,i) => (
                                    <span key={i} className={`w-2 h-2 rounded-full ${i < 5 ? 'bg-green-400' : 'bg-gray-300'}`} />
                                  ))}
                                </div>
                              </div>
                              <div className="mt-3 h-2 w-full rounded-full bg-indigo-100 overflow-hidden">
                                <div className="h-full w-4/5 bg-gradient-to-r from-indigo-500 to-blue-500" />
                              </div>
                              <div className="mt-2 text-[11px] text-gray-400">Pass rate last 24h</div>
                            </div>
                          </div>
                          <div className="mt-auto flex justify-end">
                            <button className="text-xs font-medium text-indigo-600 hover:text-indigo-700 flex items-center gap-1">
                              Explore details →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Tabs.Content>
              ))}
            </div>
          </div>
        </Tabs.Root>
      </div>
    </section>
  );
};

export default FeatureTabsSection;
