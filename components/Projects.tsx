
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowRight, ExternalLink } from 'lucide-react';

const DECK = PROJECTS.filter(p => p.featured).slice(0, 5);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-24 relative bg-black border-b-4 border-zinc-800 overflow-hidden">
      {/* Brutalist Grid Lines Background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <span className="w-3.5 h-3.5 bg-[var(--vintage-accent-1)] rounded-none animate-pulse" />
            <h2 className="text-4xl md:text-6xl font-headline font-black text-white leading-none uppercase tracking-[0.2em] font-bold">
              THE ARCHIVE
            </h2>
          </motion.div>
          
          <a
            href="/projects"
            className="group flex items-center gap-3 px-8 py-4 border-2 border-zinc-800 text-white font-body text-[11px] uppercase tracking-widest hover:border-white transition-all duration-300 rounded-none bg-zinc-950/50"
          >
            EXPLORE ALL
            <ArrowRight className="h-4 w-4 text-[var(--vintage-accent-1)] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Small Playing Cards Style Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {DECK.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border-4 border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between h-[230px] rounded-none shadow-[6px_6px_0px_0px_rgba(39,39,42,0.5)] hover:shadow-[10px_10px_0px_0px_rgba(155,28,28,0.4)] hover:border-zinc-700 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Playing Card Top Info */}
              <div className="flex justify-between items-center border-b-2 border-zinc-900 pb-3 mb-4">
                <span className="text-[var(--vintage-accent-1)] font-body text-[10px] tracking-widest uppercase font-black">
                  /0{index + 1}
                </span>
                <ExternalLink className="h-3 w-3 text-zinc-600 group-hover:text-[var(--vintage-accent-1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
              </div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col justify-start">
                <h3 className="text-lg md:text-xl font-headline font-black text-white uppercase tracking-tighter leading-tight mb-2 group-hover:text-[var(--vintage-accent-1)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 font-body text-xs line-clamp-1 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-zinc-900">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[8px] font-body font-bold text-zinc-400 border border-zinc-900 bg-black px-2 py-0.5 uppercase tracking-wider group-hover:border-zinc-800 group-hover:text-white transition-colors duration-300 rounded-none"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
