
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const WORDS = ['Frontend Developer', 'React Specialist', 'UI Engineer', 'Sandesh Agrawal'];

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [wordIdx, setWordIdx] = useState(0);

  // Fast progress: fills in ~1.2s
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsVisible(false), 300);
          setTimeout(onComplete, 700);
          return 100;
        }
        return Math.min(100, prev + Math.random() * 22 + 8);
      });
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  // Cycle through words
  useEffect(() => {
    const t = setInterval(() => {
      setWordIdx(prev => (prev + 1) % WORDS.length);
    }, 320);
    return () => clearInterval(t);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          {/* Corner brackets */}
          <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-white/10" />
          <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-white/10" />
          <div className="absolute bottom-8 left-8 w-16 h-16 border-b border-l border-white/10" />
          <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-white/10" />

          <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center">
            {/* Cycling word */}
            <div className="h-8 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.p
                  key={wordIdx}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-white/40 font-mono text-xs uppercase tracking-[0.4em]"
                >
                  {WORDS[wordIdx]}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-4xl md:text-7xl font-bold text-white font-syncopate tracking-[0.15em] uppercase"
            >
              SANDESH
              <motion.span
                className="text-white/30 ml-2"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
              >
                _
              </motion.span>
            </motion.h1>

            {/* Progress bar */}
            <div className="w-56 md:w-80 h-[1px] bg-white/10 relative overflow-hidden mt-2">
              <motion.div
                className="absolute top-0 left-0 h-full bg-white"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            {/* Progress % */}
            <p className="text-white/20 font-mono text-[9px] tracking-[0.5em] uppercase">
              {Math.min(100, Math.round(progress))}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
