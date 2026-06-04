import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase, Terminal } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-16 md:py-24 bg-black relative overflow-hidden border-b-4 border-zinc-800">
      {/* Brutalist Grid Lines Background */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full-Width Centered Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 bg-[var(--vintage-accent-1)] rounded-none" />
              <span className="text-zinc-500 font-body text-[10px] tracking-[0.4em] uppercase font-bold">CHRONOLOGY</span>
            </div>

            <h2 className="text-4xl md:text-7xl font-headline font-black text-white leading-none uppercase tracking-tighter mb-4">
              CAREER <span className="font-headline italic font-light text-[var(--vintage-accent-1)]">TRAJECTORY.</span>
            </h2>

            <p className="text-zinc-500 font-body text-xs uppercase tracking-wider font-semibold">
              A timeline of engineering elite software at high-growth teams.
            </p>
          </motion.div>
        </div>

        {/* Centered Horizontal Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 max-w-3xl mx-auto">
          {EXPERIENCE.map((exp, index) => (
            <button
              key={exp.id}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3.5 rounded-none font-body text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all duration-300 border-2 ${
                activeIndex === index
                  ? 'bg-white text-black border-white shadow-[4px_4px_0px_0px_rgba(155,28,28,0.8)]'
                  : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:border-zinc-600 hover:text-white'
              }`}
            >
              {exp.company}
            </button>
          ))}
        </div>

        {/* Full-Width Centered Content Card */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="border-4 border-zinc-800 bg-zinc-950 p-6 md:p-10 shadow-[8px_8px_0px_0px_rgba(39,39,42,0.5)] hover:shadow-[12px_12px_0px_0px_rgba(155,28,28,0.4)] hover:border-zinc-700 transition-all duration-300 relative overflow-hidden"
            >
              {/* Giant Background Visual Accent */}
              <div className="absolute top-0 right-0 p-8 opacity-[0.015] pointer-events-none text-white select-none">
                <Terminal size={180} />
              </div>

              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b-2 border-zinc-900 pb-6 mb-6 gap-4">
                <div>
                  <span className="text-[var(--vintage-accent-1)] font-body text-[10px] tracking-[0.25em] uppercase font-black block mb-2">
                    {EXPERIENCE[activeIndex].period}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-headline font-black text-white uppercase tracking-tighter leading-tight">
                    {EXPERIENCE[activeIndex].role}
                  </h3>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 border border-zinc-800 bg-black h-fit w-fit rounded-none">
                  <Briefcase className="h-3.5 w-3.5 text-zinc-500" />
                  <span className="text-[9px] font-body font-bold text-zinc-400 uppercase tracking-widest">
                    {EXPERIENCE[activeIndex].type || 'FULL-TIME'}
                  </span>
                </div>
              </div>

              {/* Narrative / Points */}
              <div className="space-y-4 relative z-10">
                {EXPERIENCE[activeIndex].points.map((point, idx) => (
                  <div key={idx} className="flex gap-4 group items-start">
                    <div className="mt-1.5 flex-shrink-0">
                      <span className="w-1.5 h-1.5 bg-[var(--vintage-accent-1)] block rounded-none group-hover:scale-125 transition-transform duration-300" />
                    </div>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-body font-medium group-hover:text-zinc-200 transition-colors duration-300">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
