
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowLeft, ExternalLink, Github, ArrowRight, Share2, Calendar, Target, Globe } from 'lucide-react';
import Navbar from './Navbar';
import SEOHead from './SEOHead';
import NotFoundPage from './NotFoundPage';

const ProjectDetail: React.FC<{ slug: string }> = ({ slug }) => {
    // Find project by ID or title slug
    const project = PROJECTS.find(p => p.id === slug || p.title.toLowerCase().replace(/[\s\(\)]+/g, '-').replace(/-+$/, '') === slug);

    if (!project) {
        return <NotFoundPage />;
    }

    return (
        <div className="min-h-screen bg-black text-white">
            <SEOHead
                title={`${project.title} - Project Case Study`}
                description={project.description}
                keywords={`${project.tech.join(', ')}, ${project.title}, Sandesh Agrawal Case Study`}
                ogImage={project.imageUrl}
                jsonLd={{
                    "@context": "https://schema.org",
                    "@type": "CreativeWork",
                    "name": project.title,
                    "description": project.description,
                    "image": project.imageUrl,
                    "author": {
                        "@type": "Person",
                        "name": "Sandesh Agrawal"
                    }
                }}
            />
            {/* Background elements */}
            <div className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
                style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            <div className="fixed top-0 right-0 w-[50vw] h-[50vw] bg-white/[0.015] rounded-full blur-[150px] pointer-events-none" />

            <div className="relative z-10">
                <Navbar alwaysVisible />

                {/* Hero Section */}
                <section className="pt-40 pb-20 px-6">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <a href="/projects" className="flex items-center gap-3 text-white/40 hover:text-white transition-colors font-mono text-[10px] uppercase tracking-[0.4em] mb-12 group">
                                <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
                                Back to projects
                            </a>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
                                <div className="lg:col-span-8">
                                    <h1 className="text-5xl md:text-[8vw] font-bold font-syncopate uppercase tracking-tighter leading-none mb-8">
                                        {project.title.split(' ')[0]}<br />
                                        <span className="text-transparent stroke-text">{project.title.split(' ').slice(1).join(' ')}</span>
                                    </h1>
                                </div>
                                <div className="lg:col-span-4 pb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map(t => (
                                            <span key={t} className="text-[9px] font-mono text-white/30 border border-white/10 px-3 py-1.5 uppercase tracking-widest">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Main Image */}
                <section className="px-6 mb-32">
                    <div className="max-w-7xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="aspect-video w-full overflow-hidden border border-white/10 relative group"
                        >
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-700" />
                        </motion.div>
                    </div>
                </section>

                {/* Project Info Overview */}
                <section className="px-6 pb-40">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-20">
                        {/* Project Details Sidebar */}
                        <div className="lg:col-span-4 space-y-12">
                            <div className="space-y-6">
                                <h3 className="text-xs font-mono text-white/30 uppercase tracking-[0.5em] border-b border-white/5 pb-4">Overview</h3>
                                <div className="grid grid-cols-1 gap-8">
                                    <div className="flex gap-4 items-start">
                                        <Calendar className="h-4 w-4 text-white/40 mt-1" />
                                        <div>
                                            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">Timeline</p>
                                            <p className="text-sm text-white/70">Mar — Apr 2024</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <Target className="h-4 w-4 text-white/40 mt-1" />
                                        <div>
                                            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">Role</p>
                                            <p className="text-sm text-white/70">Lead Developer & UI Designer</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 items-start">
                                        <Globe className="h-4 w-4 text-white/40 mt-1" />
                                        <div>
                                            <p className="text-[10px] font-mono text-white/20 uppercase tracking-widest mb-1">Platform</p>
                                            <p className="text-sm text-white/70">Web Application (React / Multi-device)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6 pt-8">
                                <h3 className="text-xs font-mono text-white/30 uppercase tracking-[0.5em] border-b border-white/5 pb-4">Actions</h3>
                                <div className="flex flex-col gap-4">
                                    {project.link && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-5 border border-white/10 hover:bg-white text-white hover:text-black transition-all group px-8">
                                            <span className="text-xs font-mono uppercase tracking-widest font-bold">Visit Live Site</span>
                                            <ExternalLink className="h-4 w-4 translate-y-[-1px]" />
                                        </a>
                                    )}
                                    <button className="flex items-center justify-between p-5 border border-white/10 text-white/40 cursor-not-allowed px-8 opacity-50">
                                        <span className="text-xs font-mono uppercase tracking-widest">Case Study PDF</span>
                                        <Share2 className="h-4 w-4" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Project Narrative */}
                        <div className="lg:col-span-8 space-y-20">
                            <div className="space-y-8">
                                <p className="text-2xl md:text-3xl font-light leading-relaxed text-white/90 italic">
                                    "{project.description}"
                                </p>
                                <div className="h-[2px] w-20 bg-white/10"></div>
                                <div className="space-y-6 text-white/60 text-lg leading-relaxed font-light font-sans">
                                    <p>
                                        The primary objective was to engineer a high-performance solution that addresses key user experience bottlenecks. By leveraging a modular architecture, we ensured that the system remains scalable for future features while maintaining an elite level of responsiveness.
                                    </p>
                                    <p>
                                        During the development phase, I focused heavily on Core Web Vitals, achieving high scores in Lighthouse audits. This involved optimizing asset delivery, eliminating render-blocking resources, and implementing strategic lazy-loading patterns.
                                    </p>
                                </div>
                            </div>

                            {/* Decorative block */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 opacity-80">
                                <div className="p-10 border border-white/5 bg-white/[0.01]">
                                    <h4 className="text-white text-lg font-bold mb-4 font-syncopate uppercase tracking-widest">The Challenge</h4>
                                    <p className="text-white/40 text-sm leading-relaxed">Handling high-concurrency requests while maintaining sub-second interaction latency and a visually striking layout.</p>
                                </div>
                                <div className="p-10 border border-white/5 bg-white/[0.01]">
                                    <h4 className="text-white text-lg font-bold mb-4 font-syncopate uppercase tracking-widest">The Result</h4>
                                    <p className="text-white/40 text-sm leading-relaxed">A lighthouse score of 95+, 100% SEO compliance, and a significant increase in user engagement metrics.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-white/5 py-20 text-center">
                    <p className="text-white/20 text-[10px] font-mono uppercase tracking-[1em] mb-4">
                        Next Project coming soon
                    </p>
                    <a href="/projects" className="inline-flex items-center gap-4 text-white font-syncopate uppercase tracking-widest hover:gap-8 transition-all duration-700">
                        <span className="text-transparent stroke-text text-4xl md:text-6xl">ALL PROJECTS</span>
                        <ArrowRight className="h-8 w-8" />
                    </a>
                </footer>
            </div>
        </div>
    );
};

export default ProjectDetail;
