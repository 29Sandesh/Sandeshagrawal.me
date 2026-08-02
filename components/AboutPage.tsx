
import React from 'react';
import { motion } from 'framer-motion';
import AboutMe from './AboutMe';
import Navbar from './Navbar';
import SEOHead from './SEOHead';

const AboutPage: React.FC = () => (
    <div className="min-h-screen bg-black text-white">
        <SEOHead
            title="About Sandesh Agrawal | Technical GTM Engineer"
            description="Learn about Sandesh Agrawal, a Technical GTM Engineer specializing in AI-powered lead generation, outbound automation, and growth infrastructure."
        />
        <div
            className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
            style={{
                backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                backgroundSize: '40px 40px',
            }}
        />
        <div className="relative z-10">
            <Navbar alwaysVisible />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="pt-20"
            >
                <AboutMe />
            </motion.div>
            <footer className="border-t border-white/5 py-12 text-center">
                <p className="text-white/10 font-mono text-xs tracking-[0.5em] uppercase">
                    Sandesh Agrawal — Technical GTM Engineer — {new Date().getFullYear()}
                </p>
            </footer>
        </div>
    </div>
);

export default AboutPage;
