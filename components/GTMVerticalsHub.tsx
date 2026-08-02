import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Zap, MessageSquare, Send } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEOHead from './SEOHead';
import { getAllVerticals } from '../verticalData';

const GTMVerticalsHub: React.FC = () => {
    const [selectedMarket, setSelectedMarket] = useState<string>('All');
    const verticals = getAllVerticals();
    const markets = ['All', 'US', 'UAE', 'UK', 'India'];

    const filteredVerticals = verticals.filter(v => {
        if (selectedMarket === 'All') return true;
        return v.market === selectedMarket;
    });

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
            <SEOHead
                title="AI-Powered Outbound Engine & GTM Services | Sandesh Agrawal"
                description="A self-built AI outreach engine that finds your ideal customers, researches them, and writes genuinely personalized cold emails — no Clay, Apollo, or Instantly subscription required on our end."
                keywords="AI Outbound Engine, Technical GTM Engineer, Cold Email Automation, AI Lead Research, Sandesh Agrawal"
            />

            <Navbar alwaysVisible />

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-16">

                {/* Core Flagship Showcase Card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="bg-white border-2 border-blue-600 rounded-3xl p-8 md:p-12 shadow-2xl shadow-blue-500/10 mb-12 relative overflow-hidden"
                >
                    {/* Top Core Flagship Pill */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
                        <div className="flex items-center gap-3">
                            <span className="px-4 py-1.5 bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-widest rounded-full shadow-sm">
                                CORE FLAGSHIP
                            </span>
                            <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
                                Proprietary GTM Engine
                            </span>
                        </div>
                        <div className="px-4 py-2 bg-blue-50 border border-blue-100 rounded-xl text-blue-700 font-mono text-xs font-bold">
                            Setup ₹15,000–25,000 · Managed retainer from ₹15,000/mo
                        </div>
                    </div>

                    {/* Headline */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-black text-slate-900 uppercase tracking-tight mb-4">
                        AI-Powered Outbound Engine
                    </h1>

                    {/* Main Description */}
                    <p className="text-slate-700 text-base sm:text-xl font-light leading-relaxed mb-8 max-w-4xl">
                        A self-built AI outreach engine that finds your ideal customers, researches them, and writes genuinely personalized cold emails — no Clay, Apollo, or Instantly subscription required on our end.
                    </p>

                    {/* Feature Chips */}
                    <div className="mb-10">
                        <h3 className="text-xs font-mono text-slate-400 font-bold uppercase tracking-widest mb-4">
                            ENGINE CAPABILITIES & MODULES:
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {[
                                'ICP Lead Scoring',
                                'AI Agent Research',
                                'Personalized Copywriting',
                                'Reply & Open Tracking',
                            ].map((feature) => (
                                <div
                                    key={feature}
                                    className="flex items-center gap-2.5 px-4 py-2.5 bg-slate-50 border border-slate-200 text-slate-900 font-mono text-xs font-bold uppercase rounded-xl shadow-sm"
                                >
                                    <CheckCircle2 className="w-4 h-4 text-blue-600" />
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Included Deliverables List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 p-6 bg-slate-50 border border-slate-200/80 rounded-2xl">
                        <div>
                            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-3">
                                Setup (₹15,000–₹25,000):
                            </h4>
                            <ul className="space-y-2 text-xs text-slate-600 font-light">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">•</span> Target ICP criteria mapping & custom scraper configuration
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">•</span> Secondary domain warming & SPF/DKIM/DMARC deliverability setup
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">•</span> LLM system prompt engineering tailored to your product value prop
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xs font-mono font-bold text-slate-900 uppercase tracking-wider mb-3">
                                Monthly Managed Retainer (from ₹15,000/mo):
                            </h4>
                            <ul className="space-y-2 text-xs text-slate-600 font-light">
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">•</span> Continuous prospect scraping & waterfall verification
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">•</span> Daily campaign execution & inbox health monitoring
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-blue-600 font-bold">•</span> Direct warm lead handoff straight to your inbox/WhatsApp
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Action Call CTAs */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                        <a
                            href="https://wa.me/9303228082"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg shadow-blue-500/25 inline-flex items-center justify-center gap-2 text-center"
                        >
                            Book Setup Call on WhatsApp <ArrowRight className="w-4 h-4" />
                        </a>
                        <a
                            href="mailto:agrawalsandesh29@gmail.com?subject=AI Outbound Engine Setup Inquiry"
                            className="px-8 py-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-md inline-flex items-center justify-center gap-2 text-center"
                        >
                            Contact Me via Email <Send className="w-4 h-4 text-blue-400" />
                        </a>
                    </div>
                </motion.div>

                {/* Target Markets Deployment Frameworks */}
                <div className="mb-12">
                    <span className="text-blue-600 font-mono text-xs tracking-widest font-bold uppercase block mb-2">Target Market Deployments</span>
                    <h3 className="text-2xl sm:text-3xl font-headline font-black uppercase tracking-tight text-slate-900 mb-6">
                        Deploying Outbound Engines by Region
                    </h3>

                    {/* Filter Tabs */}
                    <div className="flex flex-wrap items-center gap-2 mb-8">
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-widest font-bold mr-2">Filter Region:</span>
                        {markets.map((m) => (
                            <button
                                key={m}
                                onClick={() => setSelectedMarket(m)}
                                className={`px-4 py-2 text-xs font-mono uppercase tracking-widest font-bold rounded-lg transition-all ${
                                    selectedMarket === m
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                                        : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-400 hover:text-blue-600'
                                }`}
                            >
                                {m}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {filteredVerticals.map((vert, index) => (
                            <motion.a
                                key={vert.slug}
                                href={`/services/${vert.slug}`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.08, duration: 0.5 }}
                                className="group p-8 border border-slate-200 bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl flex flex-col justify-between shadow-md shadow-slate-200/50 no-underline"
                            >
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 font-mono text-[11px] font-bold uppercase tracking-widest rounded-full">
                                            {vert.market} DEPLOYMENT
                                        </span>
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                    </div>

                                    <h4 className="text-xl font-bold font-headline uppercase tracking-tight text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {vert.title}
                                    </h4>

                                    <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed mb-6">
                                        {vert.subheadline}
                                    </p>

                                    <div className="p-4 border border-slate-100 bg-slate-50 rounded-xl mb-6">
                                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block mb-1 font-bold">Featured Deployment Case:</span>
                                        <span className="text-xs font-headline font-bold text-slate-800">{vert.caseStudy.title}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-5 border-t border-slate-100 text-xs font-mono font-bold uppercase tracking-widest text-slate-600 group-hover:text-blue-600 transition-colors">
                                    <span>Explore {vert.market} Solution</span>
                                    <span className="text-blue-600 font-bold">View Framework →</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default GTMVerticalsHub;
