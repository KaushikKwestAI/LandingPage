"use client";

import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const logos = [
  { name: 'Norse', text: 'NORSE' },
  { name: 'Y Combinator', text: 'Y COMBINATOR' },
  { name: 'Wander', text: 'WANDER' },
  { name: 'Nextdoor', text: 'NEXTDOOR' },
  { name: 'Udio', text: 'UDIO' },
  { name: 'Studeo', text: 'STUDEO' },
  { name: 'Figma', text: 'FIGMA' },
  { name: 'Recovery.com', text: 'RECOVERY.COM' },
];

// Duplicate for seamless loop
const loopLogos = [...logos, ...logos, ...logos];

const TrustedByMarquee = () => {
  const prefersReducedMotion = useReducedMotion();
  return (
    <section className="py-16 relative overflow-hidden bg-transparent">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true" role="presentation">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55rem] h-[55rem] rounded-full bg-gradient-to-b from-indigo-100/50 via-transparent to-transparent blur-3xl" />
      </div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-8">
          <p className="text-sm font-medium text-indigo-600 tracking-wide uppercase">Trusted by forward-thinking teams</p>
        </div>
        <div className="relative glass-soft glass-border-gradient rounded-2xl px-8 py-6 overflow-hidden backdrop-blur shadow-md">
          <div className="noise-layer" />
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/80 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/80 to-transparent pointer-events-none" />
          <motion.div
            className="flex gap-16 items-center"
            initial={false}
            animate={prefersReducedMotion ? { x: 0 } : { x: ['0%', '-33.33%'] }}
            transition={prefersReducedMotion ? undefined : { duration: 18, ease: 'linear', repeat: Infinity }}
            aria-label="Customer logos"
          >
            {loopLogos.map((logo, i) => (
              <div key={i} className="flex-shrink-0 select-none">
                <div className="text-gray-400 hover:text-gray-700 transition-colors font-semibold tracking-widest text-sm opacity-70">
                  {logo.text}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustedByMarquee;
