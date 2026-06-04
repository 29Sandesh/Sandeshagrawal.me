
import React from 'react';
import { motion } from 'framer-motion';
import { Minus } from 'lucide-react';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="pt-10 pb-16 md:pt-12 md:pb-20 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* Simple & Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-5 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Minus className="h-4 w-4 text-white/20" />
              <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.5em]">Biography</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold text-white font-syncopate uppercase tracking-tighter leading-none">
              WHO <br />
              <span className="text-transparent stroke-text">I AM.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-right"
          >
            <p className="text-white/40 font-mono text-[10px] uppercase tracking-[0.5em] mb-2">Currently Based</p>
            <p className="text-white text-sm uppercase tracking-widest">Indore, India</p>
          </motion.div>
        </div>

        {/* Clean Narrative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">

          {/* Main Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-3xl font-light text-white leading-relaxed font-sans">
              I am <span className="text-white font-bold">Sandesh Agrawal</span>, a Full Stack Developer dedicated to building <span className="italic">exceptional</span> digital experiences that seamlessly blend technical logic with visual storytelling.
            </p>

            <div className="h-px w-24 bg-white/20"></div>

            <p className="text-white/60 text-base md:text-lg font-light leading-relaxed">
              With 3+ years of experience across frontend and backend technologies, my work is centered on building high-performance, modular architectures using React, Node.js, and MongoDB. I believe that every line of code should contribute to a meaningful user journey.
            </p>
          </motion.div>

          {/* Quick Facts / Stats (Clean Typography) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col justify-center space-y-10"
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-l border-white/10 pl-8 md:pl-10 relative">
              {/* Vertical highlight line */}
              <div className="absolute top-0 left-[-1px] h-12 w-[2px] bg-white"></div>

              <div>
                <h4 className="text-white/30 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">Expertise</h4>
                <p className="text-white text-sm tracking-wide uppercase">UI Arch / Motion</p>
              </div>
              <div>
                <h4 className="text-white/30 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">Industry</h4>
                <p className="text-white text-sm tracking-wide uppercase">Tech / Business</p>
              </div>
              <div>
                <h4 className="text-white/30 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">Projects</h4>
                <p className="text-white text-sm tracking-wide uppercase">25+ Completed</p>
              </div>
              <div>
                <h4 className="text-white/30 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">Years</h4>
                <p className="text-white text-sm tracking-wide uppercase">03+ Experience</p>
              </div>
            </div>

            <blockquote className="text-white/40 italic font-serif text-lg md:text-xl border-l-4 border-white/5 pl-6 py-2">
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
