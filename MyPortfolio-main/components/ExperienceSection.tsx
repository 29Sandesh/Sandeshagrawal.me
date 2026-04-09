
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Terminal, Briefcase, Target, Activity, ChevronRight, Calendar, ExternalLink } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="experience" className="py-10 md:py-16 bg-[#000000] relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent/5 blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-purple-500/5 blur-[100px] pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-gradient-to-r from-transparent via-accent/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="flex items-center space-x-2 mb-3">
            <div className="h-[1px] w-8 md:w-12 bg-accent"></div>
            <span className="text-accent font-mono text-[9px] md:text-xs tracking-[0.4em] uppercase">Chronology</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold text-white font-syncopate uppercase tracking-tighter leading-[0.95]">
            Career <br /> <span className="text-gray-600">Trajectory.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-6 items-stretch">

          {/* Sidebar Tabs */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-x-visible pb-3 lg:pb-0 scrollbar-hide snap-x snap-mandatory">
            {EXPERIENCE.map((exp, index) => (
              <button
                key={exp.id}
                onClick={() => setActiveIndex(index)}
                className={`min-w-[160px] md:min-w-0 snap-center text-left p-3.5 md:p-4 rounded-none transition-all duration-500 border flex flex-col justify-center relative group overflow-hidden ${activeIndex === index
                  ? 'bg-accent/5 border-accent/40'
                  : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.04]'
                  }`}
              >
                <div className="flex items-center justify-between mb-1 relative z-10">
                  <span className={`font-mono text-[8px] tracking-widest uppercase ${activeIndex === index ? 'text-accent' : 'text-gray-600'}`}>
                    {exp.period.split(' · ')[0]}
                  </span>
                  <ChevronRight className={`h-3 w-3 transition-all duration-500 ${activeIndex === index ? 'text-accent translate-x-0 opacity-100' : 'text-gray-800 -translate-x-4 opacity-0 hidden md:block'}`} />
                </div>
                <h3 className={`text-xs md:text-base font-bold uppercase truncate relative z-10 transition-colors ${activeIndex === index ? 'text-white' : 'text-gray-500 text-sm md:text-base'}`}>
                  {exp.role}
                </h3>
                <p className="text-[8px] md:text-xs font-mono uppercase tracking-widest text-gray-700 truncate relative z-10 group-hover:text-gray-500 transition-colors">
                  {exp.company}
                </p>

                {/* Indicator Line */}
                {activeIndex === index && (
                  <motion.div
                    layoutId="active-indicator"
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-accent z-20"
                  />
                )}
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "circOut" }}
                className="glass-panel border-white/5 overflow-hidden flex flex-col relative min-h-[320px] md:min-h-[420px]"
                style={{ willChange: 'opacity, transform' }}
              >
                <div className="p-4 md:p-6 border-b border-white/5 bg-white/[0.01] flex items-center justify-between">
                  <h3 className="text-white font-syncopate text-sm md:text-lg tracking-widest uppercase">{EXPERIENCE[activeIndex].company}</h3>
                  <Briefcase className="h-4 w-4 text-white/10" />
                </div>

                <div className="p-5 md:p-7 flex-1 flex flex-col relative overflow-y-auto">
                  {/* Background Tech Pattern */}
                  <div className="absolute top-0 right-0 p-8 opacity-[0.02] pointer-events-none">
                    <Terminal size={100} className="md:w-[150px] md:h-[150px]" />
                  </div>

                  <h4 className="text-xl md:text-3xl font-bold text-white mb-5 md:mb-6 tracking-tighter uppercase font-syncopate relative z-10 leading-tight">
                    {EXPERIENCE[activeIndex].role}
                  </h4>


                  {/* Points Container */}
                  <div className="space-y-3 md:space-y-4 relative z-10">
                    {EXPERIENCE[activeIndex].points.map((point, idx) => (
                      <div
                        key={idx}
                        className="flex gap-4 group"
                      >
                        <div className="mt-1 flex-shrink-0">
                          <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full transition-colors duration-500 bg-accent/80" />
                        </div>
                        <p className="text-gray-400 text-[11px] md:text-sm leading-relaxed font-light group-hover:text-gray-200 transition-colors">
                          {point}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
