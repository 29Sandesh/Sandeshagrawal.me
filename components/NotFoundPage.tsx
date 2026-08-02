import React from 'react';
import { motion } from 'framer-motion';
import { Home, Compass, ArrowLeft, Send } from 'lucide-react';
import Navbar from './Navbar';
import SEOHead from './SEOHead';

const NotFoundPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-black text-white selection:bg-accent/30 selection:text-white flex flex-col justify-between">
            <SEOHead
                title="404 — Page Not Found | Sandesh Agrawal"
                description="The page you are looking for does not exist or has been moved."
                keywords="404, Page Not Found, Sandesh Agrawal"
            />

            <Navbar alwaysVisible />

            {/* Background Grids */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute top-1/3 left-1/3 w-[40%] h-[40%] bg-accent/10 blur-[160px] rounded-full" />
            </div>

            <main className="relative z-10 max-w-4xl mx-auto px-6 pt-40 pb-20 text-center flex-1 flex flex-col items-center justify-center">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
                    <span className="font-mono text-xs text-accent uppercase tracking-[0.5em] block mb-4">Error 404 • Resource Missing</span>
                    <h1 className="text-6xl md:text-9xl font-bold font-syncopate uppercase tracking-tighter text-white mb-6">
                        404 <span className="text-transparent stroke-text">LOST.</span>
                    </h1>
                    <p className="text-lg md:text-xl text-white/50 font-light max-w-lg mx-auto mb-10 leading-relaxed">
                        The route or parameter you requested does not exist on this server. Explore active GTM engineering hubs below.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <a href="/" className="btn-premium px-8 py-4 text-xs font-bold uppercase tracking-widest inline-flex items-center gap-3 rounded-full">
                            <Home className="w-4 h-4 text-accent" /> Back to Home
                        </a>
                        <a href="/gtm-engineer/" className="px-8 py-4 border border-white/10 hover:border-accent text-xs font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors inline-flex items-center gap-3">
                            <Compass className="w-4 h-4 text-accent" /> View GTM Directory
                        </a>
                    </div>
                </motion.div>
            </main>

            <footer className="relative z-10 border-t border-white/5 py-8 text-center">
                <p className="text-white/20 font-mono text-xs tracking-[0.5em] uppercase">
                    Sandesh Agrawal — Technical GTM Engineer — {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    );
};

export default NotFoundPage;
