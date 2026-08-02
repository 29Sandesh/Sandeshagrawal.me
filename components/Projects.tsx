import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowRight, ExternalLink } from 'lucide-react';

const DECK = PROJECTS.filter(p => p.featured).slice(0, 6);

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-12 md:py-16 relative bg-slate-100/70 text-slate-900 border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-headline font-black text-slate-900 leading-none uppercase tracking-[0.15em]">
              THE ARCHIVE
            </h2>
          </motion.div>
          
          <a
            href="/projects"
            className="group flex items-center gap-2 px-5 py-2.5 border border-slate-300 text-slate-800 font-body text-xs font-bold uppercase tracking-widest hover:border-blue-600 hover:text-blue-600 transition-all duration-200 rounded-xl bg-white shadow-sm"
          >
            EXPLORE ALL
            <ArrowRight className="h-4 w-4 text-blue-600 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 3-Column Playing Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {DECK.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link || '#'}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="border border-slate-200 bg-white p-5 flex flex-col justify-between rounded-2xl shadow-sm hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400 transition-all duration-300 group cursor-pointer relative overflow-hidden"
            >
              {/* Title with Number Inline */}
              <div className="mb-3">
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-base font-headline font-black text-slate-900 uppercase tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                    <span className="text-blue-600 font-mono font-bold mr-1.5">0{index + 1}.</span>
                    {project.title}
                  </h3>
                  <ExternalLink className="h-4 w-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-0.5" />
                </div>
                <p className="text-slate-500 font-body text-xs line-clamp-2 leading-relaxed font-light">
                  {project.description}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-1.5 pt-3 border-t border-slate-100 mt-auto">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] font-mono font-semibold text-slate-600 border border-slate-200 bg-slate-50 px-2 py-0.5 uppercase tracking-wider group-hover:border-blue-200 transition-colors duration-200 rounded-md"
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
