import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_DETAILS } from '../constants';

const Skills: React.FC = () => {
  const categories = [
    {
      title: "Frontend",
      skills: SKILL_DETAILS.Frontend,
      description: "Architecting high-performance, responsive user interfaces with modern frameworks."
    },
    {
      title: "Backend",
      skills: SKILL_DETAILS.Backend,
      description: "Building scalable server-side logic and robust API architectures."
    },
    {
      title: "Databases",
      skills: SKILL_DETAILS.Databases,
      description: "Designing efficient data models and managing complex database systems."
    },
    {
      title: "Tools & Tech",
      skills: SKILL_DETAILS['Tools & Tech'],
      description: "Optimizing development workflows with industry-standard tooling."
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-black relative overflow-hidden border-b-4 border-zinc-800">
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
        
        {/* Full-Width Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center"
          >
            <div className="flex items-center gap-3">
              <span className="w-3.5 h-3.5 bg-[var(--vintage-accent-1)] rounded-none" />
              <h2 className="text-4xl md:text-6xl font-headline font-black text-white leading-none uppercase tracking-[0.3em] font-bold">
                TECH STACK
              </h2>
            </div>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-4 border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between rounded-none shadow-[6px_6px_0px_0px_rgba(39,39,42,0.5)] hover:shadow-[10px_10px_0px_0px_rgba(155,28,28,0.4)] hover:border-zinc-700 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Large Faint Corner Index Number */}
              <div className="absolute -bottom-6 -right-4 text-[6rem] font-headline font-black text-white/[0.01] group-hover:text-[var(--vintage-accent-1)]/[0.03] select-none pointer-events-none z-0 transition-colors duration-500">
                0{i + 1}
              </div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Card Header Label */}
                  <div className="flex justify-between items-center mb-4 pb-4 border-b-2 border-zinc-900">
                    <span className="text-[var(--vintage-accent-1)] font-body text-[10px] tracking-widest uppercase font-black">
                      /0{i + 1}
                    </span>
                    <span className="w-1.5 h-1.5 bg-zinc-800 group-hover:bg-[var(--vintage-accent-1)] transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-headline font-black text-white uppercase tracking-tighter leading-tight mb-2">
                    {cat.title}
                  </h3>

                  {/* Summary / Description */}
                  <p className="text-zinc-500 font-body text-[10px] uppercase tracking-wider leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 z-10 mt-auto">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[8px] font-body font-bold text-zinc-400 border border-zinc-900 bg-black px-2 py-0.5 uppercase tracking-wider group-hover:border-zinc-800 group-hover:text-white transition-colors duration-300 rounded-none"
                    >
                      {skill}
                    </span>
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

export default Skills;
