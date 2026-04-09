
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';
import Navbar from './Navbar';

const AllProjects: React.FC = () => {
    const [hovered, setHovered] = useState<string | null>(null);

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Fixed noise texture */}
            <div
                className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
                style={{
                    backgroundImage:
                        'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="relative z-10">
                <Navbar alwaysVisible />

                {/* Hero */}
                <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 md:pt-24 md:pb-12 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-white/20 font-mono text-[10px] md:text-xs tracking-[0.5em] uppercase mb-4 md:mb-6">Archive / 2024-2025</p>
                        <h1 className="text-6xl sm:text-7xl md:text-[10rem] font-black font-syncopate uppercase tracking-tighter leading-[0.85]">
                            ALL<br />
                            <span className="text-transparent stroke-text">WORK.</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Horizontal scroll list — unique ticker-table layout */}
                <div className="border-t border-white/5">
                    {PROJECTS.map((project, i) => (
                        <motion.a
                            key={project.id}
                            href={`/projects/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-20px" }}
                            transition={{ duration: 0.4 }}
                            onMouseEnter={() => setHovered(project.id)}
                            onMouseLeave={() => setHovered(null)}
                            className="group flex flex-col md:flex-row md:items-center justify-between gap-3 md:gap-6 px-4 md:px-8 py-6 md:py-10 border-b border-white/5 hover:bg-black/40 transition-all duration-500 relative overflow-hidden cursor-pointer"
                        >
                            {/* Hover image reveal */}
                            <div
                                className="absolute inset-0 transition-all duration-700 pointer-events-none z-0"
                                style={{
                                    backgroundImage: `url(${project.imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: hovered === project.id ? 0.85 : 0,
                                    filter: hovered === project.id ? 'grayscale(0)' : 'grayscale(1)',
                                }}
                            />

                            {/* Gradient overlay for text legibility */}
                            <div className={`absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent transition-opacity duration-700 z-10 pointer-events-none ${hovered === project.id ? 'opacity-100' : 'opacity-0'}`} />

                            {/* Ranked Index */}
                            <span
                                className={`relative z-20 font-syncopate font-bold text-2xl md:text-4xl w-16 flex-shrink-0 transition-all duration-500 group-hover:opacity-0 group-hover:-translate-x-8 ${i === 0 ? 'text-yellow-400 drop-shadow-[0_0_15px_rgba(250,204,21,0.5)] scale-[1.15]' :
                                    i === 1 ? 'text-slate-300 drop-shadow-[0_0_12px_rgba(203,213,225,0.4)] scale-110' :
                                        i === 2 ? 'text-amber-700 drop-shadow-[0_0_10px_rgba(180,83,9,0.5)] scale-105' :
                                            i === 3 ? 'text-accent drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]' :
                                                'text-white/10'
                                    }`}
                            >
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            {/* Title Column */}
                            <div className="flex-1 min-w-0 z-20 relative">
                                <h2 className={`font-bold font-syncopate uppercase tracking-tighter truncate transition-all duration-700 origin-left drop-shadow-2xl ${hovered === project.id ? 'text-4xl md:text-6xl text-white scale-105' : 'text-xl md:text-3xl text-white/70'}`}>
                                    {project.title}
                                </h2>
                                <p className="text-white/25 font-light text-sm mt-2 truncate hidden md:block group-hover:opacity-0 group-hover:translate-y-4 transition-all duration-500">
                                    {project.description}
                                </p>
                            </div>

                            {/* Tech tags — hidden on mobile */}
                            <div className="hidden lg:flex gap-2 flex-shrink-0 z-20 relative group-hover:opacity-0 group-hover:translate-x-4 transition-all duration-500">
                                {project.tech.slice(0, 3).map(t => (
                                    <span
                                        key={t}
                                        className="text-[9px] font-mono text-white/20 border border-white/10 px-2 py-1 uppercase tracking-widest"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>

                            {/* Featured badge */}
                            {project.featured && (
                                <span className="hidden md:block text-[8px] font-bold font-mono tracking-[0.3em] uppercase bg-white text-black px-2 py-1 flex-shrink-0 z-20 relative group-hover:opacity-0 transition-all duration-500">
                                    FEATURED
                                </span>
                            )}

                            {/* Arrow */}
                            <ExternalLink className="h-4 w-4 text-white/20 z-20 relative group-hover:opacity-0 group-hover:translate-x-4 transition-all duration-500 flex-shrink-0" />
                        </motion.a>
                    ))}
                </div>

                {/* Footer */}
                <div className="max-w-7xl mx-auto px-6 py-20 text-center">
                    <p className="text-white/10 font-mono text-xs tracking-[0.5em] uppercase">
                        Sandesh Agrawal — Frontend Developer — {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
