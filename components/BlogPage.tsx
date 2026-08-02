import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Calendar, Clock, Search, Filter } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import { BLOG_POSTS } from '../blogData';
import SEOHead from './SEOHead';

const BlogPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('All');
    const [searchQuery, setSearchQuery] = useState<string>('');

    const categories = useMemo(() => {
        const set = new Set<string>();
        BLOG_POSTS.forEach(p => set.add(p.category));
        return ['All', ...Array.from(set)];
    }, []);

    const filteredPosts = useMemo(() => {
        return BLOG_POSTS.filter(post => {
            const matchesCat = selectedCategory === 'All' || post.category === selectedCategory;
            const matchesSearch = searchQuery === '' || 
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.category.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCat && matchesSearch;
        });
    }, [selectedCategory, searchQuery]);

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
            <SEOHead
                title="GTM Engineering Blog & Growth Systems Insights"
                description="Deep dives into GTM engineering, waterfall enrichment, AI-powered outbound automation, CRM architecture, and full-stack growth systems by Sandesh Agrawal."
                keywords="GTM Engineering Blog, Waterfall Enrichment, Outbound Automation, AI Lead Generation, RevOps Architecture, Sandesh Agrawal"
            />

            <div className="relative z-10 w-full">
                <Navbar alwaysVisible />

                {/* Main Content */}
                <main className="max-w-7xl mx-auto px-6 pt-36 pb-24">

                    {/* Hero Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="mb-12"
                    >
                        <div className="flex items-center space-x-3 mb-4">
                            <div className="h-[1px] w-12 bg-blue-600"></div>
                            <span className="text-blue-600 font-mono text-xs font-bold tracking-[0.4em] uppercase">GTM Knowledge Base</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold font-headline uppercase tracking-tight leading-none mb-6 text-slate-900">
                            THE <span className="text-blue-600">JOURNAL.</span>
                        </h1>
                        <p className="max-w-3xl text-slate-600 text-base md:text-lg leading-relaxed font-light">
                            Technical teardowns on GTM engineering, AI lead generation, multi-provider waterfall enrichment, and RevOps data pipelines.
                        </p>
                    </motion.div>

                    {/* Search & Category Filter Controls */}
                    <div className="mb-12 space-y-6">
                        {/* Search Input */}
                        <div className="relative max-w-md">
                            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search articles, tools, or keywords..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-600 shadow-sm"
                            />
                        </div>

                        {/* Category Pills */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 py-2 rounded-lg font-mono text-xs uppercase font-semibold transition-all duration-200 ${
                                        selectedCategory === cat
                                            ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                                            : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600'
                                    }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Articles Grid */}
                    {filteredPosts.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPosts.map((post, index) => (
                                <motion.article
                                    key={post.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
                                    className="group cursor-pointer flex flex-col h-full bg-white border border-slate-200 rounded-2xl overflow-hidden hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 shadow-md shadow-slate-200/50"
                                >
                                    <div className="p-6 md:p-8 flex flex-col flex-1 relative">
                                        <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-4">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 border border-blue-200 text-[10px] font-mono uppercase tracking-widest text-blue-600 bg-blue-50 font-bold rounded-md">
                                                {post.category}
                                            </span>
                                            <time dateTime={new Date(post.date).toISOString()} className="flex items-center gap-1 font-semibold">
                                                <Calendar className="w-3.5 h-3.5" />
                                                {post.date}
                                            </time>
                                            <span className="flex items-center gap-1 font-semibold">
                                                <Clock className="w-3.5 h-3.5" />
                                                {post.readTime}
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold font-headline uppercase tracking-tight text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                                            <a href={post.slug}>{post.title}</a>
                                        </h3>

                                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-8 flex-1 line-clamp-3 font-light">
                                            {post.excerpt}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5">
                                            <a href={post.slug} className="text-xs font-mono uppercase tracking-widest font-bold text-slate-600 group-hover:text-blue-600 transition-colors duration-300">
                                                Read Article →
                                            </a>
                                            <a href={post.slug} className="w-9 h-9 rounded-xl bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-white transition-all duration-300 shadow-md shadow-blue-500/20">
                                                <ArrowUpRight className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white rounded-2xl border border-slate-200">
                            <p className="text-slate-500 font-mono text-sm">No articles matching "{searchQuery}" in {selectedCategory}.</p>
                        </div>
                    )}
                </main>

                <Footer />
            </div>
        </div>
    );
};

export default BlogPage;
