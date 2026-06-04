import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, Zap, Target, Shield, Send, AlertTriangle, CheckCircle } from 'lucide-react';
import Navbar from './Navbar';
import Pricing from './Pricing';

const CityPage: React.FC<{ citySlug: string }> = ({ citySlug }) => {
    // Extract city name from slug like 'new-delhi'
    const cityName = citySlug
        .split('-')
        .map(w => w.charAt(0).toUpperCase() + w.slice(1))
        .join(' ') || 'India';

    return (
        <div className="min-h-screen bg-black text-white selection:bg-accent/30 selection:text-white">
            {/* SEO Meta Tags (Semantic Web) */}
            <header className="sr-only">
                <h1>Web Development Services in {cityName}</h1>
                <p>Facing website problems in {cityName}? We provide affordable, high-performance web development solutions to help {cityName} businesses scale.</p>
            </header>

            {/* Background decoration */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute top-1/4 left-0 w-[40%] h-[40%] bg-accent/10 blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 font-sans">
                <Navbar alwaysVisible />

                {/* SEO-Optimized Hero */}
                <div className="max-w-7xl mx-auto px-6 pt-40 pb-20">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="h-4 w-4 text-accent" />
                            <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.5em]">Digital Hub: {cityName}</span>
                        </div>

                        <h2 className="text-4xl md:text-[6vw] font-bold font-syncopate uppercase tracking-tighter leading-none mb-8">
                            PREMIUM WEB DEV <br />
                            IN <span className="text-transparent stroke-text">{cityName}.</span>
                        </h2>

                        <div className="max-w-3xl">
                            <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed mb-6">
                                We help businesses in {cityName} overcome digital stagnation with blazing-fast, affordable website development solutions.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* The Problems Section */}
                <section className="py-24 px-6 border-y border-white/5 bg-white/[0.01]">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16">
                            <h3 className="text-3xl md:text-5xl font-bold font-syncopate text-white uppercase tracking-tighter mb-4">
                                Common Problems <span className="text-white/30 text-2xl font-sans block mt-2 lowercase tracking-[0.2em] italic">facing {cityName} businesses</span>
                            </h3>
                            <p className="text-white/50 text-lg max-w-2xl">Many local businesses lose customers daily because of these critical digital failures.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="p-8 border border-white/10 bg-black/40 hover:bg-white/[0.02] transition-colors">
                                <AlertTriangle className="h-8 w-8 text-red-400 mb-6" />
                                <h4 className="font-bold uppercase tracking-widest mb-3 text-white">1. Slow Loading Speeds</h4>
                                <p className="text-white/40 text-sm leading-relaxed">Customers abandon your site if it takes over 3 seconds to load. Legacy WordPress sites are severely hurting your SEO.</p>
                            </div>
                            <div className="p-8 border border-white/10 bg-black/40 hover:bg-white/[0.02] transition-colors">
                                <AlertTriangle className="h-8 w-8 text-red-400 mb-6" />
                                <h4 className="font-bold uppercase tracking-widest mb-3 text-white">2. Poor Mobile UX</h4>
                                <p className="text-white/40 text-sm leading-relaxed">Over 70% of {cityName} web traffic is mobile. A non-responsive design actively drives local clients to your competitors.</p>
                            </div>
                            <div className="p-8 border border-white/10 bg-black/40 hover:bg-white/[0.02] transition-colors">
                                <AlertTriangle className="h-8 w-8 text-red-400 mb-6" />
                                <h4 className="font-bold uppercase tracking-widest mb-3 text-white">3. Zero SEO Visibility</h4>
                                <p className="text-white/40 text-sm leading-relaxed">Without programmatic local SEO infrastructure, your services remain invisible when {cityName} locals search for them on Google.</p>
                            </div>
                            <div className="p-8 border border-white/10 bg-black/40 hover:bg-white/[0.02] transition-colors">
                                <AlertTriangle className="h-8 w-8 text-red-400 mb-6" />
                                <h4 className="font-bold uppercase tracking-widest mb-3 text-white">4. Exorbitant Costs</h4>
                                <p className="text-white/40 text-sm leading-relaxed">Local agencies often charge massive fees for basic setups. Small and medium businesses get priced out of high-end quality.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* The Affordable Solution Section */}
                <section className="py-32 px-6">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2 space-y-8">
                            <h3 className="text-4xl md:text-6xl font-bold font-syncopate text-white uppercase tracking-tighter">
                                The Affordable <br /><span className="text-accent stroke-text">Solution.</span>
                            </h3>
                            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed">
                                We bridge the gap between premium engineering and affordability for {cityName}. By utilizing optimized React/Next.js component libraries, we deliver agency-grade performance without the agency price tag.
                            </p>
                            <ul className="space-y-4 pt-4">
                                {[
                                    `95+ Lighthouse Performance in ${cityName}`,
                                    "Hyper-optimized Local SEO Architecture",
                                    "Premium Modern Glassmorphism Aesthetics",
                                    "Cost-effective, Transparent Pricing"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-white/70">
                                        <CheckCircle className="h-6 w-6 text-accent shrink-0" />
                                        <span className="text-lg">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="md:w-1/2 w-full p-2 relative">
                            <div className="absolute inset-0 bg-accent/20 blur-3xl rounded-full"></div>
                            <div className="relative glass-panel p-8 aesthetic-card border border-white/10 w-full h-full flex flex-col justify-center text-center">
                                <h4 className="font-syncopate text-2xl uppercase tracking-widest mb-4">Invest in Quality</h4>
                                <p className="text-white/50 text-sm font-mono leading-loose tracking-widest uppercase mb-8">
                                    Stop losing {cityName} clients to bad tech.
                                </p>
                                <a href="/contact" className="btn-premium py-4 px-8 uppercase font-bold tracking-widest text-xs inline-block">
                                    Get a Free Technical Audit
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Optional Pricing Component */}
                <Pricing />

                {/* CTA Section */}
                <section className="py-40 px-6 text-center bg-white/[0.02] border-t border-white/5">
                    <div className="max-w-5xl mx-auto">
                        <p className="text-white/40 font-mono text-[10px] uppercase tracking-[1em] mb-12">Ready to scale your business in {cityName}?</p>
                        <h2 className="text-4xl md:text-8xl font-bold font-syncopate uppercase tracking-tighter leading-none mb-16">
                            DOMINATE <span className="text-transparent stroke-text">{cityName}.</span>
                        </h2>
                        <a href="/contact" className="btn-premium inline-flex items-center gap-6 px-12 py-6 font-bold uppercase tracking-widest text-xs hover:gap-12 group rounded-full">
                            Hire For Your Project <Send className="h-4 w-4 text-accent" />
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-white/5 py-12 text-center">
                    <p className="text-white/20 font-mono text-xs tracking-[0.5em] uppercase">
                        Web Services for {cityName} — Sandesh Agrawal — {new Date().getFullYear()}
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default CityPage;
