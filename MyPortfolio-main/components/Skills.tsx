
import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_DETAILS } from '../constants';

const Marquee: React.FC<{ items: string[]; reverse?: boolean }> = ({ items, reverse = false }) => {
  return (
    <div className="flex overflow-hidden whitespace-nowrap py-2.5 md:py-3 border-y border-white/5 bg-white/[0.02] group-hover:bg-indigo-500/10 transition-colors duration-500">
      <motion.div
        className="flex gap-8 md:gap-10 px-4 md:px-6"
        animate={{ x: reverse ? [0, -1000] : [-1000, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-3xl md:text-5xl font-black text-white/20 group-hover:text-white transition-colors duration-500 uppercase tracking-tighter italic">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

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
    <section id="skills" className="py-12 md:py-20 bg-[#050505] relative overflow-hidden">
      {/* Background Text Overlay */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-[0.02] select-none">
        <div className="text-[25vw] font-black leading-none uppercase -rotate-12 translate-y-[-15%] translate-x-[-10%] whitespace-nowrap">
          STACK STACK STACK
        </div>
      </div>

      <div className="max-w-[1300px] mx-auto px-5 md:px-6 relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8 md:gap-14">
          {/* Left Column: Title */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <span className="w-8 md:w-12 h-[1px] bg-indigo-500"></span>
                <span className="font-mono text-[10px] text-indigo-500 uppercase tracking-[0.4em] font-bold">Tech Stack</span>
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-[5.7vw] font-black text-white leading-[0.84] uppercase tracking-tighter mb-4 md:mb-6 transform -skew-x-6">
                CORE <br />
                <span className="text-transparent stroke-text-heavy">ENGINE.</span>
              </h2>

              <p className="text-gray-500 font-mono text-[10px] uppercase tracking-[0.2em] leading-relaxed max-w-xs mb-6">
                A toolkit optimized for scalability, performance, and elite user experiences.
              </p>
            </motion.div>
          </div>

          {/* Right Column: Creative Category Blocks */}
          <div className="lg:col-span-8 space-y-10 md:space-y-18">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                className="group relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
              >
                {/* Large Background Number */}
                <div className="absolute -top-8 -left-4 text-[10vw] font-black text-white/[0.02] group-hover:text-indigo-500/[0.04] transition-colors duration-700 select-none z-0">
                  0{i + 1}
                </div>

                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row md:items-end gap-4 mb-5 md:mb-7">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-indigo-500 font-mono text-xs font-bold">/0{i + 1}</span>
                        <div className="h-[1px] flex-1 bg-white/5 group-hover:bg-indigo-500/20 transition-colors duration-500"></div>
                      </div>
                      <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-500 origin-left">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="md:w-2/5 text-gray-500 font-mono text-[10px] uppercase tracking-widest leading-relaxed opacity-60">
                      {cat.description}
                    </p>
                  </div>

                  {/* Marquee Skills */}
                  <Marquee items={cat.skills} reverse={i % 2 === 0} />

                  {/* Detailed Skills List */}
                  <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-2.5 md:gap-3 opacity-30 group-hover:opacity-100 transition-opacity duration-700">
                    {cat.skills.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-indigo-500/50 rounded-full group-hover:bg-indigo-500"></div>
                        <span className="text-[10px] font-mono text-gray-400 uppercase tracking-tighter group-hover:text-gray-300 transition-colors">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Line */}
                <div className="mt-7 md:mt-10 h-[1px] w-full bg-white/[0.03] group-hover:bg-indigo-500/30 transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .stroke-text-heavy {
          -webkit-text-stroke: 2px rgba(255, 255, 255, 0.08);
        }
        .group:hover .stroke-text-heavy {
          -webkit-text-stroke: 2px rgba(99, 102, 241, 0.3);
        }
        @media (max-width: 768px) {
          .stroke-text-heavy {
            -webkit-text-stroke: 1px rgba(255, 255, 255, 0.08);
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;
