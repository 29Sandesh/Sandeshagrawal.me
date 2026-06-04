
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const DECK = PROJECTS.filter(p => p.featured).slice(0, 5);

const Projects: React.FC = () => {
  const [active, setActive] = useState(0);

  const prev = useCallback(() => setActive(i => (i - 1 + DECK.length) % DECK.length), []);
  const next = useCallback(() => setActive(i => (i + 1) % DECK.length), []);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [next]);

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
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-2.5 h-2.5 bg-[var(--vintage-accent-1)] rounded-none" />
              <span className="text-zinc-500 font-body text-[10px] tracking-[0.4em] uppercase font-bold">THE ARCHIVE</span>
            </div>
            <h2 className="text-4xl md:text-8xl font-headline font-black text-white tracking-tighter leading-none uppercase">
              ELITE<br />
              <span className="font-headline italic font-light text-[var(--vintage-accent-1)]">SHOWCASE.</span>
            </h2>
          </div>
          <a
            href={PROJECTS[0].link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 px-8 py-4 border-2 border-zinc-800 text-white font-body text-[11px] uppercase tracking-widest hover:border-white transition-all duration-300 rounded-none bg-zinc-950/50"
          >
            EXPLORE CURRENT
            <ArrowRight className="h-4 w-4 text-[var(--vintage-accent-1)] group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Deck */}
        <div className="relative mx-auto w-full max-w-5xl lg:max-w-6xl aspect-[4/5] sm:aspect-[1.2/1] md:aspect-[1.5/1] lg:aspect-[1.7/1] overflow-visible">
          {/* Active card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute inset-0 overflow-hidden border-4 border-zinc-800 bg-zinc-950 rounded-none shadow-[10px_10px_0px_0px_rgba(39,39,42,0.5)]"
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image */}
                <div className="relative w-full md:w-[50%] h-[45%] md:h-full overflow-hidden flex-shrink-0 border-b-2 md:border-b-0 md:border-r-2 border-zinc-800">
                  <img
                    src={DECK[active].imageUrl}
                    alt={DECK[active].title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 left-4 bg-black/80 px-3 py-1 border border-zinc-800 font-body font-bold text-xs text-white">
                    {String(active + 1).padStart(2, '0')} / {String(DECK.length).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-between p-6 md:p-10 flex-1 relative bg-black">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[var(--vintage-accent-1)] font-body text-[9px] tracking-[0.3em] uppercase font-bold">
                        {DECK[active].tech[0] || 'CLIENT PROJECT'}
                      </span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-black text-white uppercase tracking-tighter leading-tight mb-4">
                      {DECK[active].title}
                    </h3>
                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-body font-medium">
                      {DECK[active].description}
                    </p>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {DECK[active].tech.map(t => (
                        <span key={t} className="text-[8px] font-body font-bold text-zinc-400 border border-zinc-800 bg-zinc-950 px-2.5 py-1 uppercase tracking-wider rounded-none">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-6 border-t-2 border-zinc-900 pt-6">
                      {DECK[active].link && DECK[active].link !== '#' && (
                        <a
                          href={DECK[active].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-[10px] font-body font-black text-white uppercase tracking-widest hover:text-[var(--vintage-accent-1)] transition-colors group"
                        >
                          LIVE WEBSITE
                          <ExternalLink className="h-3 w-3 text-[var(--vintage-accent-1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Wrapper */}
        <div className="flex flex-col items-center gap-5 mt-16">
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="p-4 border-2 border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-white transition-all rounded-none"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2 items-center">
              {DECK.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-300 h-[3px] rounded-none ${i === active ? 'w-10 bg-[var(--vintage-accent-1)]' : 'w-3 bg-zinc-800 hover:bg-zinc-600'}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-4 border-2 border-zinc-800 bg-zinc-950 text-zinc-400 hover:text-white hover:border-white transition-all rounded-none"
              aria-label="Next project"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
