import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ExternalLink } from 'lucide-react';
import Navbar from './Navbar';

const AllProjects: React.FC = () => {
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

                {/* Hero / Header */}
                <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 md:pt-32 md:pb-16 text-left">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-2.5 h-2.5 bg-[var(--vintage-accent-1)] rounded-none" />
                            <span className="text-zinc-500 font-body text-[10px] tracking-[0.4em] uppercase font-bold">THE REGISTRY</span>
                        </div>
                        <h1 className="text-4xl md:text-7xl font-headline font-black text-white uppercase tracking-tighter leading-none">
                            ALL <span className="font-light italic text-[var(--vintage-accent-1)]">PROJECTS.</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Brutalist 3-Column Grid Layout */}
                <div className="max-w-7xl mx-auto px-6 pb-32 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {PROJECTS.map((project, i) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-20px" }}
                                transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
                                onClick={() => {
                                    if (project.link && project.link !== '#') {
                                        window.open(project.link, '_blank', 'noopener,noreferrer');
                                    }
                                }}
                                className="border-4 border-zinc-800 bg-zinc-950 p-6 flex flex-col justify-between rounded-none shadow-[6px_6px_0px_0px_rgba(39,39,42,0.5)] hover:shadow-[10px_10px_0px_0px_rgba(155,28,28,0.4)] transition-all duration-300 group cursor-pointer"
                            >
                                <div>
                                    <div className="flex justify-between items-center mb-4 pb-4 border-b-2 border-zinc-900">
                                        <span className="text-[var(--vintage-accent-1)] font-body text-[10px] tracking-widest uppercase font-black">
                                            {project.tech[0] || 'PROJECT'}
                                        </span>
                                        <span className="text-zinc-600 font-body text-xs font-bold">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-headline font-black text-white uppercase tracking-tighter mb-3 leading-tight">
                                        {project.link && project.link !== '#' ? (
                                            <a 
                                                href={project.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                onClick={(e) => e.stopPropagation()}
                                                className="hover:text-[var(--vintage-accent-1)] transition-colors duration-300 block"
                                            >
                                                {project.title}
                                            </a>
                                        ) : (
                                            project.title
                                        )}
                                    </h3>
                                    <p className="text-zinc-400 text-xs md:text-sm leading-relaxed mb-6 font-body font-medium">
                                        {project.description}
                                    </p>
                                </div>
                                
                                <div>
                                    <div className="flex flex-wrap gap-1.5 mb-6">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[8px] font-body font-bold text-zinc-500 border border-zinc-800 bg-black px-2 py-0.5 uppercase tracking-wider">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {project.link && project.link !== '#' && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={(e) => e.stopPropagation()}
                                            className="inline-flex items-center gap-2 text-[10px] font-body font-black text-white uppercase tracking-widest hover:text-[var(--vintage-accent-1)] transition-colors group/link"
                                        >
                                            LIVE WEBSITE
                                            <ExternalLink className="h-3 w-3 text-[var(--vintage-accent-1)] group-hover/link:translate-x-0.5 transition-transform" />
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Footer Minimal */}
                <div className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-zinc-850">
                    <p className="text-zinc-500 font-body text-xs tracking-[0.5em] uppercase">
                        Sandesh Agrawal — Full Stack Web Architect — {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;
