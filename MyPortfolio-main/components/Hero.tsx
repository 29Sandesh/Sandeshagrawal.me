
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';
import { HERO_SUBTITLE, HERO_TITLE, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const { scrollY } = useScroll();

  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const y2 = useTransform(scrollY, [0, 500], [0, 100]);
  const y3 = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const springY1 = useSpring(y1, { stiffness: 100, damping: 30 });
  const springY2 = useSpring(y2, { stiffness: 100, damping: 30 });
  const springY3 = useSpring(y3, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const nameParts = HERO_TITLE.split(' ');

  return (
    <section
      id="about"
      className="relative min-h-[92dvh] w-full flex items-center justify-center overflow-hidden bg-black py-8 md:py-0"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: `radial-gradient(circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(99, 102, 241, 0.15) 0%, transparent 60%)`,
          }}
          transition={{ type: "tween", ease: "linear", duration: 0.2 }}
        />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1635776062127-d379bfcba9f8?q=80&w=2532&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-5 grayscale" />
      </div>

      {/* Right Side Social Sidebar (Desktop) */}
      <motion.div
        className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-6 z-50"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="flex flex-col gap-6">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/50 hover:text-white hover:scale-110 transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
        </div>
        <div className="h-24 w-[1px] bg-gradient-to-b from-white/20 to-transparent mt-4"></div>
      </motion.div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-5 md:px-6 flex flex-col items-center">

        {/* Projects Badge (Desktop) */}
        <motion.div
          className="absolute top-8 left-3 lg:left-0 z-30 hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
        >
          <div className="flex flex-col items-start group cursor-default">
            <div className="flex items-start gap-2">
              <span className="text-5xl lg:text-6xl font-bold text-white font-syncopate leading-none group-hover:scale-110 transition-transform duration-500 shadow-xl drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">30</span>
              <span className="text-xl lg:text-2xl font-bold text-accent font-syncopate mt-1">+</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-[9px] font-mono text-white/80 uppercase tracking-widest bg-black/40 backdrop-blur-md px-2 py-1 border border-white/5">
                Projects Completed
              </span>
              <div className="h-[1px] w-12 bg-white/20 group-hover:w-20 transition-all duration-500"></div>
            </div>
          </div>
        </motion.div>

        {/* Experience Badge (Desktop) */}
        <motion.div
          className="absolute top-8 right-3 lg:right-0 z-30 hidden md:block"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.8, type: "spring" }}
        >
          <div className="flex flex-col items-end group cursor-default">
            <div className="flex items-start gap-2">
              <span className="text-2xl lg:text-3xl font-bold text-accent font-syncopate mt-1">+</span>
              <span className="text-5xl lg:text-6xl font-bold text-white font-syncopate leading-none group-hover:scale-110 transition-transform duration-500 shadow-xl drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">03</span>
            </div>
            <div className="flex items-center gap-3 mt-2">
              <div className="h-[1px] w-12 bg-white/20 group-hover:w-20 transition-all duration-500"></div>
              <span className="text-[9px] font-mono text-white/80 uppercase tracking-widest bg-black/40 backdrop-blur-md px-2 py-1 border border-white/5">
                Years Experience
              </span>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col items-center text-center w-full">
          {/* Top Label */}
          <motion.div
            className="mb-2 md:mb-4 mt-4 md:mt-0"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ y: springY1 }}
          >
            <span className="text-white/30 text-[8px] md:text-[10px] font-mono tracking-[0.8em] uppercase block">
              Digital Experience Architect
            </span>
          </motion.div>

          {/* Centered Name Stack */}
          <div className="relative flex flex-col items-center justify-center w-full select-none text-center">
            <motion.div
              className="relative z-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{ y: springY1 }}
            >
              <h1 className="text-[11vw] md:text-[7vw] font-bold font-syncopate uppercase tracking-tighter leading-none text-white whitespace-nowrap">
                {nameParts[0]}
              </h1>
            </motion.div>

            <motion.div
              className="text-[11vw] md:text-[7vw] font-bold font-syncopate uppercase tracking-tighter leading-none text-transparent -mt-[3vw] md:-mt-[2vw] relative z-10 transition-colors duration-500 hover:text-white/10 whitespace-nowrap"
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.4)',
                y: springY2
              }}
            >
              {nameParts[1]}
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.div
            className="mt-4 md:mt-8 max-w-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            style={{ y: springY3, opacity }}
          >
            <p className="text-xs md:text-lg text-white/50 font-light leading-relaxed font-mono uppercase tracking-[0.1em] px-4 text-center">
              {HERO_SUBTITLE}
            </p>
          </motion.div>

          {/* Stats (Mobile) */}
          <motion.div
            className="md:hidden mt-6 mb-1 flex items-center justify-between gap-3 px-5 w-full max-w-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-white font-syncopate">30+</span>
              <span className="text-[8px] font-mono text-white/70 uppercase tracking-widest leading-tight text-left">
                Projects<br />Done
              </span>
            </div>
            <div className="w-[1px] h-8 bg-white/10" />
            <div className="flex items-center gap-3 text-right">
              <span className="text-[8px] font-mono text-white/70 uppercase tracking-widest leading-tight">
                Years<br />Exp.
              </span>
              <span className="text-3xl font-bold text-white font-syncopate">03+</span>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-8 md:mt-12 flex flex-col items-center gap-6 w-full"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            style={{ y: springY3 }}
          >
            <a
              href="#projects"
              className="group flex items-center gap-4 text-white no-underline transition-all duration-500"
            >
              <div className="flex flex-col items-center">
                <span className="text-[9px] md:text-xs font-bold tracking-[0.5em] uppercase whitespace-nowrap group-hover:tracking-[0.6em] transition-all duration-500">
                  Explore Projects
                </span>
                <div className="w-full h-[1px] bg-white/10 mt-2 group-hover:bg-white group-hover:scale-x-110 transition-all duration-500 origin-center"></div>
              </div>
              <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
                <ArrowRight className="h-4 w-4" />
              </div>
            </a>

            {/* Social Icons (Mobile Only) */}
            <div className="md:hidden flex gap-8 items-center opacity-40 hover:opacity-100 transition-all duration-500 pb-4">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:scale-125 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Minimal decoration axes */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[0.5px] bg-white/[0.015] -z-10 pointer-events-none"></div>
      <div className="absolute top-1/2 left-0 right-0 h-[0.5px] bg-white/[0.015] -z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
