import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, MessageSquare, ArrowRight, Github, Sparkles, Building2, HelpCircle } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import Navbar from './Navbar';
import Footer from './Footer';
import SEOHead from './SEOHead';

const ContactPage: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
            <SEOHead
                title="Contact | Sandesh Agrawal — Technical GTM Engineer"
                description="Get in touch with Sandesh Agrawal for GTM engineering, AI lead generation systems, outbound automation, and RevOps infrastructure projects."
                keywords="Contact Sandesh Agrawal, Hire GTM Engineer, Technical GTM Consultation, Outbound Automation Contact"
            />
            {/* SEO Meta Tags (Semantic Web) */}
            <header className="sr-only">
                <h1>Contact Sandesh Agrawal - Technical GTM Engineer</h1>
                <p>Get in touch with Sandesh Agrawal to discuss technical GTM engineering, AI lead generation engines, outbound automation, and RevOps data pipelines.</p>
            </header>

            <div className="relative z-10 w-full">
                <Navbar alwaysVisible />

                {/* Main Container */}
                <main className="max-w-7xl mx-auto px-6 pt-32 pb-16">

                    {/* Header */}
                    <motion.div
                        className="mb-8 text-left"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-3xl sm:text-5xl font-bold font-syncopate uppercase tracking-tight leading-none text-slate-900 mb-2">
                            Contact us
                        </h1>
                        <p className="text-base sm:text-lg text-slate-600 font-light max-w-xl leading-relaxed">
                            Get in touch and let us know how we can help.
                        </p>
                    </motion.div>

                    {/* 3-Card Grid Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

                        {/* Card 1: Outbound & GTM */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="group p-6 border border-slate-200 bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl flex flex-col justify-between shadow-md shadow-slate-200/50"
                        >
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                                    <Building2 className="w-5 h-5" />
                                </div>

                                <h2 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                                    Outbound & GTM
                                </h2>

                                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed mb-5">
                                    I'd love to talk about how we can work together on your outbound automation and growth infrastructure.
                                </p>
                            </div>

                            <a
                                href={`mailto:${SOCIAL_LINKS.email}?subject=Project Inquiry - GTM Outbound Engine`}
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl uppercase tracking-wider transition-all duration-300 w-full shadow-sm shadow-blue-500/20"
                            >
                                Contact me <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>

                        {/* Card 2: Email & Support */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="group p-6 border border-slate-200 bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl flex flex-col justify-between shadow-md shadow-slate-200/50"
                        >
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                                    <Mail className="w-5 h-5" />
                                </div>

                                <h2 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                                    Email & LinkedIn
                                </h2>

                                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed mb-5">
                                    Get in touch via email or connect on LinkedIn to discuss custom engineering projects and partnerships.
                                </p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <a
                                    href={`mailto:${SOCIAL_LINKS.email}`}
                                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl uppercase tracking-wider transition-all duration-300 w-full shadow-sm shadow-blue-500/20"
                                >
                                    Get support <ArrowRight className="w-4 h-4" />
                                </a>
                                <a
                                    href={SOCIAL_LINKS.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 hover:border-blue-400 text-slate-600 hover:text-blue-600 font-mono text-[11px] uppercase tracking-wider rounded-lg transition-colors text-center"
                                >
                                    LinkedIn Profile ↗
                                </a>
                            </div>
                        </motion.div>

                        {/* Card 3: WhatsApp Direct */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="group p-6 border border-slate-200 bg-white hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl flex flex-col justify-between shadow-md shadow-slate-200/50"
                        >
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:scale-110 transition-transform">
                                    <MessageSquare className="w-5 h-5" />
                                </div>

                                <h2 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">
                                    WhatsApp Direct
                                </h2>

                                <p className="text-slate-600 text-xs sm:text-sm font-light leading-relaxed mb-5">
                                    Skip the email forms and start a direct real-time conversation with Sandesh on WhatsApp.
                                </p>
                            </div>

                            <a
                                href="https://wa.me/9303228082"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-xl uppercase tracking-wider transition-all duration-300 w-full shadow-sm shadow-blue-500/20"
                            >
                                WhatsApp Now <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>

                    </div>

                    {/* Bottom 2-Column Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
                        <div>
                            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">Join us on GitHub</h3>
                            <p className="text-slate-600 text-xs leading-relaxed mb-3 font-light">
                                If you have technical questions or want to inspect open-source B2B lead engines and system architectures, view my official GitHub repositories.
                            </p>
                            <a
                                href="https://github.com/29Sandesh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:underline text-xs font-mono font-bold uppercase tracking-widest inline-flex items-center gap-2"
                            >
                                Explore GitHub repositories →
                            </a>
                        </div>

                        <div>
                            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">General communications</h3>
                            <p className="text-slate-600 text-xs leading-relaxed mb-3 font-light">
                                For general queries, including custom retainers, AI lead engines, and growth consultations, please contact direct support.
                            </p>
                            <a
                                href={`mailto:${SOCIAL_LINKS.email}`}
                                className="text-blue-600 hover:underline text-xs font-mono font-bold uppercase tracking-widest inline-flex items-center gap-2"
                            >
                                Contact support for help →
                            </a>
                        </div>
                    </div>

                </main>
            </div>
            <Footer />
        </div>
    );
};

export default ContactPage;
