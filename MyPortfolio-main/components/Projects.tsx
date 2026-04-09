
import React, { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const DECK = PROJECTS.filter(p => p.featured).slice(0, 4);

const Projects: React.FC = () => {
  const [active, setActive] = useState(0);

  const prev = useCallback(() => setActive(i => (i - 1 + DECK.length) % DECK.length), []);
  const next = useCallback(() => setActive(i => (i + 1) % DECK.length), []);

  // Auto-play interval
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="projects" className="py-10 md:py-16 relative bg-black overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-purple-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-6 md:mb-10 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
              <span className="text-white/40 font-mono text-[10px] tracking-[0.4em] uppercase">Featured Work</span>
            </div>
            <h2 className="text-3xl md:text-7xl font-black text-white font-syncopate tracking-tighter leading-none uppercase">
              PROJECT<br />
              <span className="text-transparent stroke-text">DECK.</span>
            </h2>
          </div>
          <a
            href="/projects"
            className="group flex items-center gap-3 px-5 py-2.5 md:px-7 md:py-3 border border-white/20 text-white font-mono text-[10px] md:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-500"
          >
            All Work
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Deck */}
        <div className="relative mx-auto w-full max-w-[760px] aspect-[4/5] md:aspect-[16/10] overflow-visible">
          {/* Stacked background cards - purely decorative, hidden on small screens for performance */}
          <div className="hidden sm:block">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border border-white/5 bg-white/[0.005] pointer-events-none"
                style={{
                  transform: `translateY(${(i + 1) * 10}px) translateX(${(i + 1) * 4}px) scale(${1 - (i + 1) * 0.02}) rotate(${(i % 2 === 0 ? 0.5 : -0.5) * (i + 1)}deg)`,
                  zIndex: -1 - i,
                  willChange: 'transform'
                }}
              />
            ))}
          </div>

          {/* Active card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "circOut" }}
              className="absolute inset-0 overflow-hidden border border-white/10 bg-[#070707] shadow-2xl"
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="flex flex-col md:flex-row h-full">
                {/* Image */}
                <div className="relative w-full md:w-[45%] h-[40%] md:h-full overflow-hidden flex-shrink-0">
                  <img
                    src={DECK[active].imageUrl}
                    alt={DECK[active].title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover brightness-[0.8] saturate-125 transition-all duration-1000 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#070707] hidden md:block" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070707] to-transparent md:hidden" />
                  <div className="absolute bottom-4 left-4 text-white/[0.05] font-syncopate font-bold text-6xl md:text-8xl leading-none select-none">
                    {String(active + 1).padStart(2, '0')}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12 flex-1 relative">
                  <p className="text-white/20 font-mono text-[8px] md:text-[9px] tracking-[0.5em] uppercase mb-4">
                    Project Archive / 0{active + 1}
                  </p>
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white font-syncopate uppercase tracking-tighter leading-[1.1] mb-4">
                    {DECK[active].title}
                  </h3>
                  <p className="text-white/40 text-[11px] md:text-sm leading-relaxed mb-6 font-light line-clamp-3 md:line-clamp-none">
                    {DECK[active].description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-8">
                    {DECK[active].tech.slice(0, 4).map(t => (
                      <span key={t} className="text-[7px] md:text-[9px] font-mono text-white/30 border border-white/5 px-1.5 py-0.5 md:px-2 md:py-1 uppercase tracking-widest">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-6 mt-auto">
                    {DECK[active].link && DECK[active].link !== '#' && (
                      <a
                        href={DECK[active].link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-[9px] font-mono text-white/40 uppercase tracking-widest hover:text-white transition-colors group"
                      >
                        Live
                        <ExternalLink className="h-3 w-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    )}
                    <a
                      href={`/projects/${DECK[active].title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-2 text-[9px] font-mono text-accent uppercase tracking-widest hover:text-white transition-colors group"
                    >
                      Study
                      <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Wrapper */}
        <div className="flex flex-col items-center gap-5 mt-8 md:mt-9">
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              className="p-3 md:px-6 md:py-3 border border-white/5 bg-white/[0.02] text-white/40 hover:text-white hover:bg-white/5 transition-all group rounded-full md:rounded-none"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex gap-2 items-center">
              {DECK.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`transition-all duration-500 h-[2px] ${i === active ? 'w-8 bg-accent' : 'w-2 bg-white/10 hover:bg-white/30'}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-3 md:px-6 md:py-3 border border-white/5 bg-white/[0.02] text-white/40 hover:text-white hover:bg-white/5 transition-all group rounded-full md:rounded-none"
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
