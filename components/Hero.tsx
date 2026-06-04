import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <>
      <section
        id="home"
        className="min-h-[95vh] md:min-h-[98vh] w-full relative flex flex-col bg-black border-b-4 border-zinc-800 overflow-hidden"
      >
        {/* Background Cinematic Video Stream - Autoplay, Loop, Muted (Vivid) */}
        <video
          src="/HeroBackground.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 opacity-80 pointer-events-none"
        />

        {/* Dynamic Dark Vignette / Shadow Overlay to protect readability while maintaining high video vibrancy */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/20 z-1 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent z-1 pointer-events-none" />

        {/* Unique Background Typography - Editorial Layout (Layered over video) */}
        <div className="absolute inset-0 z-2 pointer-events-none select-none p-2 md:p-8 overflow-hidden">
          {/* Top Left Label */}
          <div className="absolute top-12 left-4 md:left-12 opacity-[0.03] md:opacity-[0.05]">
            <span className="font-headline font-black text-[10vw] md:text-[6vw] leading-none text-white uppercase block">ELITE</span>
          </div>

          {/* Bottom Right Label */}
          <div className="absolute bottom-12 right-4 md:right-12 opacity-[0.03] md:opacity-[0.05] text-right">
            <span className="font-headline font-black text-[10vw] md:text-[6vw] leading-none text-white uppercase block">DEVELOPER</span>
          </div>

          {/* Massive Outlined Center */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.015] md:opacity-[0.02]">
            <span 
              className="font-headline font-black text-[35vw] md:text-[25vw] text-transparent uppercase leading-none"
              style={{ WebkitTextStroke: '2px white' }}
            >
              SYSTEMS
            </span>
          </div>
        </div>

        {/* Main Content Area - Left-Aligned Editorial Flex Container */}
        <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 lg:pl-0 lg:pr-8 flex-1 flex flex-col items-start justify-center gap-y-6 pt-32 pb-24 z-10 text-left">
          
          {/* Top Section: Main Headline (Left Aligned) */}
          <div className="flex flex-col items-start w-full">
            {/* Top Label */}
            <motion.span 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="text-[var(--vintage-accent-1)] font-headline font-black tracking-[0.4em] text-[9px] md:text-xs uppercase mb-5 block border border-[var(--vintage-accent-1)] px-3.5 py-1 rounded-none w-fit"
            >
              FULL STACK DEVELOPER & UI/UX ARCHITECT
            </motion.span>

            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white flex flex-col items-start"
            >
              <span className="font-headline font-black text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[8vw] leading-[0.82] uppercase block tracking-tighter">
                SANDESH
              </span>
              <span className="font-headline font-black text-5xl sm:text-7xl md:text-[6.5rem] lg:text-[8vw] leading-[0.82] uppercase block tracking-tighter text-white">
                AGRAWAL.
              </span>
            </motion.h1>
          </div>

          {/* Bottom Section: Subtitle & Call-to-actions */}
          <div className="flex flex-col items-start mt-4 max-w-3xl w-full">
            {/* Service List / Trust Line */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="font-body text-[10px] md:text-xs text-yellow-400 font-bold tracking-[0.2em] uppercase mb-8 text-left leading-relaxed max-w-2xl"
            >
              BUILDING HIGH-PERFORMANCE DIGITAL EXPERIENCES. 25+ ELITE PROJECTS DELIVERED. 99+ LIGHTHOUSE SCORES.
            </motion.p>

            {/* Actions Buttons */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <a
                href="https://github.com/29Sandesh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black px-12 py-5 font-body text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase hover:scale-105 active:scale-95 transition-transform duration-300 text-center border border-white"
              >
                GITHUB ➲
              </a>
              <a
                href="https://wa.me/9303228082"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-12 py-5 font-body text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase hover:scale-105 active:scale-95 transition-transform duration-300 text-center border border-[#25D366]"
              >
                WHATSAPP NOW ➲
              </a>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Services Marquee Strip - Positioned Below Hero */}
      <div className="w-full bg-zinc-950 border-b-4 border-zinc-800 py-4 md:py-6 overflow-hidden group relative z-10">
        <div className="flex whitespace-nowrap overflow-x-hidden">
          <div className="flex gap-4 md:gap-16 animate-marquee group-hover:[animation-play-state:paused] transition-all">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4 md:gap-16 items-center">
                {[
                  'REACT.JS',
                  'NODE.JS',
                  'MONGODB',
                  'NEXT.JS',
                  'TAILWIND CSS',
                  'TECHNICAL SEO',
                  'PERFORMANCE ARCHITECTURE',
                ].map((skill, index) => (
                  <div key={index} className="flex items-center px-4 md:px-12">
                    <span className="font-body font-black text-sm md:text-2xl text-white hover:italic hover:scale-105 active:scale-95 transition-all duration-300 cursor-crosshair whitespace-nowrap">
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
