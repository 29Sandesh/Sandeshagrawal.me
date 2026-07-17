import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';
import { Briefcase } from 'lucide-react';

const ExperienceSection: React.FC = () => {
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
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[var(--vintage-accent-1)] rounded-none animate-pulse" />
              <h2 className="text-4xl md:text-6xl font-headline font-black text-white leading-none uppercase tracking-[0.2em] font-bold">
                Career
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative border-l border-zinc-800 pl-6 md:pl-10 space-y-12 max-w-4xl mx-auto">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Dot */}
              <span 
                className={`absolute left-[-31px] md:left-[-47px] top-1.5 w-4 h-4 rounded-full bg-black border-4 flex items-center justify-center transition-colors duration-300 ${
                  index === 0 ? 'border-[var(--vintage-accent-1)]' : 'border-zinc-700'
                }`}
              >
                {index === 0 && (
                  <span className="w-1.5 h-1.5 bg-[var(--vintage-accent-1)] rounded-full animate-ping" />
                )}
              </span>

              {/* Experience Block Card */}
              <div className="border-4 border-zinc-800 bg-zinc-950 p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(39,39,42,0.5)] hover:shadow-[10px_10px_0px_0px_rgba(155,28,28,0.4)] hover:border-zinc-750 transition-all duration-300 relative overflow-hidden group">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b-2 border-zinc-900 pb-4 mb-4 gap-3">
                  <div>
                    <span className="text-[var(--vintage-accent-1)] font-body text-[10px] tracking-[0.25em] uppercase font-black block mb-1">
                      {exp.period}
                    </span>
                    <h3 className="text-xl md:text-2xl font-headline font-black text-white uppercase tracking-tighter leading-tight">
                      {exp.role} <span className="font-light italic text-zinc-500">@ {exp.company}</span>
                    </h3>
                  </div>
                  <div className="flex items-center gap-2 px-3 py-1 border border-zinc-800 bg-black h-fit w-fit rounded-none">
                    <Briefcase className="h-3 w-3 text-zinc-500" />
                    <span className="text-[8px] font-body font-bold text-zinc-400 uppercase tracking-widest">
                      {exp.type}
                    </span>
                  </div>
                </div>

                {/* Narrative / Points */}
                <div className="space-y-3 relative z-10">
                  {exp.points.map((point, idx) => (
                    <div key={idx} className="flex gap-3 group/point items-start">
                      <div className="mt-1.5 flex-shrink-0">
                        <span className="w-1.5 h-1.5 bg-[var(--vintage-accent-1)] block rounded-none group-hover/point:scale-125 transition-transform duration-300" />
                      </div>
                      <p className="text-zinc-400 text-xs md:text-sm leading-relaxed font-body font-medium group-hover/point:text-zinc-200 transition-colors duration-300">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
