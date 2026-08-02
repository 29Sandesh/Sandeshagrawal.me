import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-[95vh] md:min-h-[98vh] w-full relative flex flex-col bg-[#000000] border-b border-slate-800 overflow-hidden"
      >
        {/* Full-Color Native Video Stream */}
        <video
          src="/HeroBackground.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-100 pointer-events-none"
        />

        {/* Subtle Dark Vignette for Text Legibility (Left side only) */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent z-1 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-1 pointer-events-none opacity-60" />

        {/* Editorial Background Typography */}
        <div className="absolute inset-0 z-2 pointer-events-none select-none p-2 md:p-8 overflow-hidden">
          <div className="absolute top-12 left-4 md:left-12 opacity-[0.04]">
            <span className="font-headline font-black text-[10vw] md:text-[6vw] leading-none text-white uppercase block">GROWTH</span>
          </div>

          <div className="absolute bottom-12 right-4 md:right-12 opacity-[0.04] text-right">
            <span className="font-headline font-black text-[10vw] md:text-[6vw] leading-none text-white uppercase block">ENGINEER</span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center opacity-[0.02]">
            <span 
              className="font-headline font-black text-[35vw] md:text-[25vw] text-transparent uppercase leading-none"
              style={{ WebkitTextStroke: '2px #ffffff' }}
            >
              SYSTEMS
            </span>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:pl-4 lg:pr-8 flex-1 flex flex-col items-start justify-center gap-y-6 pt-32 pb-24 z-10 text-left">

          {/* Doodly Speech Bubble next to pixel character */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="absolute right-2 sm:right-6 md:right-12 lg:right-20 top-14 sm:top-18 md:top-20 z-20 pointer-events-none select-none"
          >
            <div className="relative bg-amber-300 text-black px-4 py-2 rounded-2xl shadow-[4px_4px_0px_#000] border-2 border-black font-mono font-bold text-xs md:text-sm tracking-wider flex items-center justify-center transform rotate-[-2deg]">
              <span className="font-extrabold uppercase font-syncopate text-[10px] md:text-xs text-black tracking-widest px-1 py-0.5">
                Yup, That's me!
              </span>
              {/* Pointer Tail */}
              <div className="absolute -bottom-2 right-6 w-3 h-3 bg-amber-300 border-r-2 border-b-2 border-black transform rotate-45" />
            </div>
          </motion.div>
          
          {/* Main Headline */}
          <div className="flex flex-col items-start w-full">
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-blue-400 font-headline font-black tracking-[0.3em] text-[10px] md:text-xs uppercase mb-5 block border border-blue-500/40 bg-blue-500/10 px-4 py-1.5 rounded-full w-fit backdrop-blur-md"
            >
              TECHNICAL GTM ENGINEER
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white flex flex-col items-start"
            >
              <span className="font-headline font-black text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[8vw] leading-[0.82] uppercase block tracking-tighter text-white">
                SANDESH
              </span>
              <span className="font-headline font-black text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[8vw] leading-[0.82] uppercase block tracking-tighter text-blue-500">
                AGRAWAL.
              </span>
            </motion.h1>
          </div>

          {/* Subtitle & Actions */}
          <div className="flex flex-col items-start mt-4 max-w-3xl w-full">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="font-body text-xs md:text-sm text-slate-300 font-semibold tracking-wider uppercase mb-8 text-left leading-relaxed max-w-2xl"
            >
              BUILDING AI-POWERED SYSTEMS THAT DRIVE GROWTH. <span className="text-blue-400 font-bold">LEAD GEN</span> · <span className="text-blue-400 font-bold">OUTBOUND AUTOMATION</span> · <span className="text-blue-400 font-bold">AI AGENTS</span> · <span className="text-blue-400 font-bold">GROWTH INFRASTRUCTURE</span>.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/9303228082"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 text-center shadow-lg shadow-blue-500/30"
              >
                BOOK A STRATEGY CALL ➲
              </a>
              <a
                href="/case-studies"
                className="bg-white text-black hover:bg-slate-200 px-8 py-4 rounded-xl font-body text-xs font-bold tracking-widest uppercase transition-all duration-300 text-center shadow-lg"
              >
                VIEW CASE STUDIES ➲
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Services Marquee Strip */}
      <div className="w-full bg-blue-600 text-white py-4 md:py-6 overflow-hidden group relative z-10 shadow-md">
        <div className="flex whitespace-nowrap overflow-x-hidden">
          <div className="flex gap-4 md:gap-16 animate-marquee group-hover:[animation-play-state:paused] transition-all">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 md:gap-16 items-center">
                {[
                  'LEAD GENERATION',
                  'OUTBOUND AUTOMATION',
                  'AI AGENTS',
                  'GROWTH INFRASTRUCTURE',
                  'CRM SYSTEMS',
                  'AI LEAD ENGINES',
                  'FULL-STACK DEV',
                  'DATA PIPELINES',
                  'REACT',
                  'NEXT.JS',
                  'NODE.JS',
                  'TYPESCRIPT',
                  'MONGODB',
                  'POSTGRESQL',
                  'AWS',
                ].map((skill, index) => (
                  <div key={index} className="flex items-center px-4 md:px-12">
                    <span className="font-body font-black text-sm md:text-xl text-white hover:scale-105 transition-all duration-300 whitespace-nowrap tracking-wider">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
