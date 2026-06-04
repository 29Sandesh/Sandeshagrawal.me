import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, Tag } from 'lucide-react';
import Navbar from './Navbar';
import { BLOG_POSTS } from '../blogData';

const BlogPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-accent/30 selection:text-white pb-32">
            {/* SEO Meta Tags (Semantic Web) */}
            <header className="sr-only">
                <h1>Sandesh Agrawal Blog - Software Engineering Insights</h1>
                <p>Read about React Performance, Backend Architecture, Modern UI/UX Design, and deep tech tutorials from Sandesh Agrawal. 20 cutting-edge engineering guides.</p>
            </header>

            {/* Background Grids and Lights */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[150px] rounded-full" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-purple-600/10 blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 w-full">
                <Navbar alwaysVisible />

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-6 pt-24">

                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-12"
                    >
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="h-[1px] w-12 bg-accent"></div>
                            <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase">Knowledge Base</span>
                        </div>
                        <h2 className="text-5xl md:text-[8vw] font-bold font-syncopate uppercase tracking-tighter leading-none mb-8 text-white">
                            THE <span className="text-transparent stroke-text">JOURNAL</span>.
                        </h2>
                        <p className="max-w-3xl text-white/50 text-lg md:text-xl leading-relaxed font-light">
                            Deep dives into software engineering, performance architectures, and digital design. Thoughts and insights straight from the development trenches.
                        </p>
                    </motion.div>

                    {/* Blog Articles Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((post, index) => (
                            <motion.article
                                key={post.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: (index % 3) * 0.1, duration: 0.6 }}
                                className="group cursor-pointer flex flex-col h-full bg-white/[0.01] border border-white/5 rounded-none overflow-hidden hover:bg-white/[0.03] hover:border-white/20 hover:shadow-[0_0_40px_rgba(139,92,246,0.1)] transition-all duration-500"
                            >
                                {/* Content Container */}
                                <div className="p-6 md:p-8 flex flex-col flex-1 relative">
                                    <div className="flex flex-wrap items-center gap-4 text-[10px] font-mono text-white/40 uppercase tracking-widest mb-4">
                                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 border border-[var(--vintage-accent-1)] text-[9px] font-mono uppercase tracking-widest text-[var(--vintage-accent-1)] bg-zinc-950">
                                            {post.category}
                                        </span>
                                        <time dateTime={new Date(post.date).toISOString()} className="flex items-center gap-1.5">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {post.date}
                                        </time>
                                        <span className="flex items-center gap-1.5">
                                            <Clock className="w-3.5 h-3.5" />
                                            {post.readTime}
                                        </span>
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-bold font-syncopate uppercase tracking-tight text-white mb-4 group-hover:text-accent transition-colors duration-300 leading-snug">
                                        <a href={post.slug}>{post.title}</a>
                                    </h3>

                                    <p className="text-white/50 text-sm leading-relaxed mb-8 flex-1 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="mt-auto flex items-center justify-between border-t border-white/5 pt-6">
                                        <a href={post.slug} className="text-xs font-mono uppercase tracking-[0.3em] text-white/50 group-hover:text-white transition-colors duration-300">
                                            Read Article
                                        </a>
                                        <a href={post.slug} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-accent group-hover:border-accent group-hover:scale-110 transition-all duration-300">
                                            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
                                        </a>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>

                    {/* SEO Invisible Keywords for Search Engines */}
                    <div className="sr-only">
                        <p>{BLOG_POSTS.map(b => `${b.title} ${b.category} ${b.excerpt}`).join(' ')}</p>
                    </div>
                </main>

                {/* Footer Minimal */}
                <footer className="border-t border-white/5 py-12 text-center mt-20 relative z-10">
                    <p className="text-white/20 font-mono text-xs tracking-[0.5em] uppercase">
                        Sandesh Agrawal — {new Date().getFullYear()} — High-Impact Web Engineering
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default BlogPage;
