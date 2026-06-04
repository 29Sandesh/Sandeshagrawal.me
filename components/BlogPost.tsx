import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Tag, Share2, Twitter, Linkedin, Copy } from 'lucide-react';
import Navbar from './Navbar';
import { BLOG_POSTS } from '../blogData';

const BlogPost: React.FC = () => {
    const path = window.location.pathname;
    const slug = path.split('/')[2];
    const post = BLOG_POSTS.find(p => p.slug === `/blog/${slug}`);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isCopied, setIsCopied] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    };

    if (!post) {
        return (
            <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6">
                <Navbar alwaysVisible />
                <h1 className="text-4xl font-syncopate uppercase mt-20">404 - Post Not Found</h1>
                <a href="/blog" className="mt-8 text-accent uppercase font-mono tracking-widest text-sm hover:text-white transition-colors border-b border-accent py-1">
                    Return to Journal
                </a>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#000000] text-slate-200 font-sans selection:bg-accent/40 selection:text-white pb-32">

            {/* Cinematic Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1.5 bg-accent origin-left z-[9999] shadow-[0_0_20px_rgba(139,92,246,0.8)]"
                style={{ scaleX }}
            />

            {/* HIGHLY VISIBLE BACK BUTTON - Fixed to top left outside of flow */}
            <a
                href="/blog"
                className="fixed top-24 left-4 md:left-8 z-[100] group flex items-center gap-3 px-4 py-3 glass-panel rounded-full bg-black/50 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)] backdrop-blur-3xl hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
            >
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent group-hover:text-black transition-colors">
                    <ArrowLeft className="w-4 h-4" />
                </div>
                <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] font-bold text-white pr-2">
                    Back to Blog
                </span>
            </a>

            <header className="sr-only">
                <h1>{post.title}</h1>
                <p>{post.excerpt}</p>
            </header>

            <Navbar alwaysVisible />

            <main className="relative z-10 w-full pt-24 md:pt-32">
                <div className="max-w-5xl mx-auto px-6 md:px-12 w-full pb-12 border-b border-zinc-800">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="pl-0 md:pl-20"
                    >
                        <div className="flex flex-wrap items-center gap-4 text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-widest mb-8">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-950 text-[var(--vintage-accent-1)] border border-[var(--vintage-accent-1)]">
                                <Tag className="w-3.5 h-3.5" />
                                {post.category}
                            </span>
                            <span className="flex items-center gap-2 border border-zinc-800 px-3 py-1 bg-zinc-950">
                                <Calendar className="w-3.5 h-3.5 text-zinc-600" />
                                {post.date}
                            </span>
                            <span className="flex items-center gap-2 border border-zinc-800 px-3 py-1 bg-zinc-950">
                                <Clock className="w-3.5 h-3.5 text-zinc-600" />
                                {post.readTime}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-headline font-black uppercase tracking-tighter leading-tight text-white mb-6">
                            {post.title}
                        </h1>
                    </motion.div>
                </div>

                {/* Article Body Area */}
                <div className="max-w-6xl mx-auto px-6 md:px-12 mt-16 md:mt-24 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">

                    {/* Sticky Sidebar - Author & Share */}
                    <motion.aside
                        initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}
                        className="lg:w-64 shrink-0"
                    >
                        <div className="sticky top-32 flex flex-col gap-12 text-center lg:text-left">

                            {/* Author Block */}
                            <div className="pb-8 border-b border-zinc-800">
                                <div className="w-16 h-16 bg-zinc-950 border-2 border-[var(--vintage-accent-1)] flex items-center justify-center mx-auto lg:mx-0 mb-4 text-white font-headline font-black text-lg rounded-none">
                                    SA
                                </div>
                                <h4 className="font-headline font-black text-sm uppercase tracking-wider text-white mb-1">Sandesh Agrawal</h4>
                                <p className="font-body text-[9px] uppercase tracking-[0.2em] text-zinc-500 mb-4 font-bold">Lead Web Engineer</p>
                                <a href="/contact" className="inline-block px-6 py-3 border border-zinc-800 text-[10px] font-body font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:border-white transition-all rounded-none w-full lg:w-auto text-center text-white">
                                    Hire Me
                                </a>
                            </div>

                            {/* Share Block */}
                            <div>
                                <span className="block text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-4">
                                    Share Post
                                </span>
                                <div className="flex items-center justify-center lg:justify-start gap-4">
                                    <button onClick={handleCopyLink} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 hover:text-accent transition-all group relative">
                                        <Copy className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                        {isCopied && <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-[10px] font-mono bg-accent text-white px-2 py-1 rounded">Copied!</span>}
                                    </button>
                                    <a href={`https://twitter.com/intent/tweet?url=${window.location.href}&text=${post.title}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 hover:text-[#1DA1F2] transition-all group">
                                        <Twitter className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    </a>
                                    <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-white/30 hover:text-[#0A66C2] transition-all group">
                                        <Linkedin className="w-4 h-4 group-hover:scale-110 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.aside>

                    {/* Main Text Content */}
                    <motion.article
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex-1 max-w-3xl"
                    >
                        {/* Enlarged Pull Quote / Excerpt */}
                        <div className="relative mb-16 before:content-[''] before:absolute before:-left-6 lg:before:-left-12 before:top-0 before:h-full before:w-1 before:bg-accent before:shadow-[0_0_20px_rgba(139,92,246,0.8)]">
                            <p className="text-2xl md:text-3xl text-white/90 font-light leading-[1.6] italic">
                                "{post.excerpt}"
                            </p>
                        </div>

                        {/* Premium Blog Content Rendering */}
                        <div
                            dangerouslySetInnerHTML={{ __html: post.content }}
                            className="
                                prose prose-invert max-w-none
                                prose-p:text-white/60 prose-p:font-light prose-p:leading-[1.9] prose-p:text-lg md:prose-p:text-xl prose-p:mb-8
                                prose-headings:font-syncopate prose-headings:uppercase prose-headings:tracking-widest prose-headings:text-white/90 prose-headings:font-bold
                                prose-h3:text-3xl prose-h3:mt-20 prose-h3:mb-8 prose-h3:pb-4 prose-h3:border-b prose-h3:border-white/10
                                prose-a:text-accent prose-a:no-underline hover:prose-a:underline hover:prose-a:text-white transition-colors duration-300
                                prose-strong:text-white prose-strong:font-bold
                                prose-code:text-accent prose-code:bg-white/5 prose-code:px-2 prose-code:py-1 prose-code:rounded-md prose-code:font-mono prose-code:text-sm prose-code:border prose-code:border-white/10
                                first-letter:float-left first-letter:text-7xl first-letter:font-syncopate first-letter:font-bold first-letter:text-accent first-letter:mr-4 first-letter:mt-[-0.1em] first-letter:line-height-[1]
                            "
                        />
                    </motion.article>
                </div>
            </main>
        </div>
    );
};

export default BlogPost;
