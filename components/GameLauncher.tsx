import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gamepad2, X, Maximize2, Terminal, Play, Trophy } from 'lucide-react';

interface Game {
  id: string;
  name: string;
  url: string;
  icon: string;
  description: string;
}

const GAMES: Game[] = [
  {
    id: 'om-nom-run',
    name: 'Om Nom Run',
    url: 'https://play.famobi.com/om-nom-run',
    icon: '🏃',
    description: 'High-speed parkour simulation through neon-lit streets.'
  },
  {
    id: 'pengu-slide',
    name: 'Pengu Slide',
    url: 'https://play.famobi.com/pengu-slide',
    icon: '🐧',
    description: 'Slide and glide through the arctic challenges.'
  },
  {
    id: 'moto-x3m-pool-party',
    name: 'Moto X3M Pool Party',
    url: 'https://play.famobi.com/moto-x3m-pool-party',
    icon: '🏍️',
    description: 'Stunt-based motorcycle racing in a water park.'
  },
  {
    id: 'race-right',
    name: 'Race Right',
    url: 'https://play.famobi.com/race-right',
    icon: '🏎️',
    description: 'Precision turning and high-speed circuit racing.'
  },
  {
    id: 'ultimate-boxing',
    name: 'Ultimate Boxing',
    url: 'https://play.famobi.com/ultimate-boxing',
    icon: '🥊',
    description: 'Enter the ring and become the ultimate champion.'
  }
];

const GameLauncher: React.FC<{ accentColor: string }> = ({ accentColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeGame, setActiveGame] = useState<Game | null>(null);
  const launcherRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && launcherRef.current && !launcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <div ref={launcherRef} className="fixed bottom-8 left-8 z-50 flex flex-col-reverse items-start gap-4 group font-sans">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-14 h-14 rounded-full flex items-center justify-center transition-all cursor-pointer backdrop-blur-xl border ${isOpen ? 'bg-accent/20 border-accent shadow-[0_0_30px_rgba(139,92,246,0.5)]' : 'bg-white/[0.02] border-white/10 hover:border-accent/40 shadow-[0_0_20px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]'}`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Gamepad2 className={`h-6 w-6 transition-all duration-500 ${isOpen ? 'rotate-90 text-accent' : 'text-white/60 group-hover:text-white'}`} />
        </motion.button>

        <AnimatePresence>
          {isOpen && !activeGame && (
            <motion.div
              className="glass-panel aesthetic-card p-4 rounded-none flex flex-col gap-3 border-white/10 w-[320px] mb-2 overflow-hidden"
              initial={{ opacity: 0, y: 20, x: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <div className="px-2 py-2 border-b border-white/10 flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono text-accent tracking-[0.3em] uppercase flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                  Simulation Environment
                </span>
                <div className="flex space-x-1.5 opacity-50">
                  <div className="w-1.5 h-1.5 bg-white/50" />
                  <div className="w-1.5 h-1.5 bg-white/50" />
                  <div className="w-1.5 h-1.5 bg-white/50" />
                </div>
              </div>

              <div className="max-h-[380px] overflow-y-auto pr-2 space-y-2 scrollbar-hide">
                {GAMES.map((game, index) => (
                  <motion.button
                    key={game.id}
                    onClick={() => setActiveGame(game)}
                    className="w-full flex items-center gap-4 p-4 bg-white/[0.01] hover:bg-white/[0.04] transition-all text-left border border-transparent hover:border-white/10 relative group/item"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-accent/0 via-accent/0 to-accent/5 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    <div className="w-12 h-12 shrink-0 bg-black/40 border border-white/5 flex items-center justify-center text-2xl group-hover/item:border-accent/30 transition-colors bg-blend-overlay grayscale group-hover/item:grayscale-0">
                      {game.icon}
                    </div>
                    <div className="flex-1 min-w-0 pr-2">
                      <div className="text-sm font-syncopate font-bold text-white uppercase tracking-wider truncate mb-1 group-hover/item:text-accent transition-colors">
                        {game.name}
                      </div>
                      <div className="text-[9px] text-white/40 font-mono line-clamp-2 leading-relaxed">
                        {game.description}
                      </div>
                    </div>
                    <Play className="h-4 w-4 shrink-0 text-white/20 group-hover/item:text-accent group-hover/item:translate-x-1 transition-all" />
                  </motion.button>
                ))}
              </div>

              <div className="px-4 py-3 bg-black/40 border border-white/5 mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2 text-[9px] font-mono text-white/30 uppercase">
                  <Terminal className="h-3 w-3" />
                  <span>Modules Active</span>
                </div>
                <span className="text-[10px] font-mono text-white/50">v2.4.0</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {activeGame && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 font-sans"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/95 backdrop-blur-3xl" onClick={() => setActiveGame(null)}></div>

            <motion.div
              className="relative w-full max-w-6xl h-full max-h-[85vh] glass-panel rounded-none border-white/10 overflow-hidden shadow-[0_0_100px_rgba(139,92,246,0.15)] flex flex-col"
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {/* Header */}
              <div className="p-6 md:px-10 border-b border-white/5 flex items-center justify-between bg-black/60 backdrop-blur-xl">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-white/[0.02] border border-white/10 flex items-center justify-center text-3xl shadow-inner">
                    {activeGame.icon}
                  </div>
                  <div>
                    <h3 className="text-white font-syncopate text-lg md:text-xl tracking-widest uppercase mb-1">
                      {activeGame.name}
                    </h3>
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono text-accent uppercase tracking-[0.2em] flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
                        Connection Stable
                      </span>
                      <span className="text-[10px] font-mono text-white/40 uppercase tracking-[0.2em] flex items-center gap-1.5 hidden md:flex">
                        <Trophy className="h-3 w-3" />
                        Interactive Mode
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button className="p-3 border border-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all">
                    <Maximize2 className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => setActiveGame(null)}
                    className="p-3 border border-white/5 hover:bg-red-500/20 text-white/40 hover:text-red-500 transition-all"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Simulation Frame */}
              <div className="flex-1 bg-[#050505] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                  <Terminal className="h-32 w-32 text-accent" />
                </div>
                {/* Top Inner shadow for depth */}
                <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-black/80 to-transparent pointer-events-none z-20" />

                <iframe
                  src={activeGame.url}
                  className="w-full h-full relative z-10"
                  frameBorder="0"
                  allowFullScreen
                  title={activeGame.name}
                />
              </div>

              {/* Footer */}
              <div className="p-5 border-t border-white/5 flex flex-col md:flex-row justify-between items-center md:px-10 bg-black/60 gap-4">
                <p className="text-[10px] font-mono text-white/30 tracking-[0.4em] uppercase text-center md:text-left">
                  Immersive Protocol // Proceed with Focus
                </p>
                <div className="flex gap-4 w-full md:w-auto items-center justify-center md:justify-end">
                  <div className="h-[2px] w-32 bg-white/10 overflow-hidden relative">
                    <div className="absolute top-0 left-0 h-full bg-accent animate-loading-bar w-1/2"></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes loading-bar {
          0% { left: -50%; }
          100% { left: 100%; }
        }
        .animate-loading-bar {
          animation: loading-bar 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }
      `}</style>
    </>
  );
};

export default GameLauncher;
