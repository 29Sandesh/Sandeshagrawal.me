
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(timer);
                    setTimeout(() => setIsVisible(false), 500);
                    return 100;
                }
                return prev + Math.floor(Math.random() * 10) + 5;
            });
        }, 150);

        return () => clearInterval(timer);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ 
                        y: '-100%',
                        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
                >
                    {/* Background Noise/Grid */}
                    <div className="absolute inset-0 opacity-20 pointer-events-none"
                        style={{ 
                            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                            backgroundSize: '100px 100px'
                        }} 
                    />

                    <div className="relative w-full max-w-7xl px-6 flex flex-col items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-center mb-12"
                        >
                            <p className="text-white/30 font-mono text-xs tracking-[1em] uppercase mb-4">Initializing Experience</p>
                            <h2 className="text-6xl md:text-8xl font-black text-white font-syncopate tracking-tighter uppercase leading-none">
                                SANDESH<br />
                                <span className="text-transparent stroke-text">AGRAWAL</span>
                            </h2>
                        </motion.div>

                        <div className="w-full max-w-md bg-white/5 h-1 relative overflow-hidden mb-4">
                            <motion.div 
                                className="absolute top-0 left-0 h-full bg-white"
                                style={{ width: `${Math.min(progress, 100)}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        <div className="flex justify-between w-full max-w-md text-white/40 font-mono text-[10px] uppercase tracking-widest">
                            <span>Loading</span>
                            <span className="text-white">{Math.min(progress, 100)}%</span>
                        </div>
                    </div>

                    {/* Bold Corner Accents */}
                    <div className="absolute top-10 left-10 w-4 h-4 border-t-2 border-l-2 border-white/20" />
                    <div className="absolute top-10 right-10 w-4 h-4 border-t-2 border-r-2 border-white/20" />
                    <div className="absolute bottom-10 left-10 w-4 h-4 border-b-2 border-l-2 border-white/20" />
                    <div className="absolute bottom-10 right-10 w-4 h-4 border-b-2 border-r-2 border-white/20" />
                    
                    <motion.div 
                        animate={{ opacity: [0.3, 0.1, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/5 font-mono text-[10vw] font-black uppercase pointer-events-none select-none"
                    >
                        CREATIVE
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LoadingScreen;
