import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800 font-sans relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-16 border-b border-slate-800">

                    {/* Column 1 & 2: Brand Info */}
                    <div className="md:col-span-2 space-y-4">
                        <a href="/" className="inline-block no-underline">
                            <span className="text-xl font-headline font-black tracking-tight text-white uppercase">
                                SANDESH <span className="font-light italic text-blue-500">AGRAWAL.</span>
                            </span>
                        </a>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm font-light">
                            Technical GTM Engineer building AI-powered growth systems: lead generation platforms, outbound automation engines, and RevOps infrastructure.
                        </p>
                        <div className="flex items-center gap-3 pt-2">
                            <span className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono rounded-full font-semibold">
                                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Available for Hire
                            </span>
                            <span className="text-slate-400 text-xs font-mono">Indore, India</span>
                        </div>
                    </div>

                    {/* Column 3: Navigation */}
                    <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4">
                            Navigation
                        </h4>
                        <ul className="space-y-2.5 text-sm font-light text-slate-300">
                            <li>
                                <a href="/" className="hover:text-blue-400 transition-colors">Home</a>
                            </li>
                            <li>
                                <a href="/case-studies" className="hover:text-blue-400 transition-colors">Case Studies</a>
                            </li>
                            <li>
                                <a href="/services" className="hover:text-blue-400 transition-colors">Services & Flagship</a>
                            </li>
                            <li>
                                <a href="/projects" className="hover:text-blue-400 transition-colors">Projects Archive</a>
                            </li>
                            <li>
                                <a href="/blog" className="hover:text-blue-400 transition-colors">Blog & Journal</a>
                            </li>
                            <li>
                                <a href="/contact" className="hover:text-blue-400 transition-colors">Contact Me</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: GTM Verticals */}
                    <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4">
                            GTM Engines
                        </h4>
                        <ul className="space-y-2.5 text-xs font-light text-slate-300">
                            <li>
                                <a href="/services/us-b2b-saas" className="hover:text-blue-400 transition-colors">US B2B SaaS</a>
                            </li>
                            <li>
                                <a href="/services/uk-tech-enterprises" className="hover:text-blue-400 transition-colors">UK Tech Scaleups</a>
                            </li>
                            <li>
                                <a href="/services/dubai-uae-exporters" className="hover:text-blue-400 transition-colors">Dubai Exporters</a>
                            </li>
                            <li>
                                <a href="/services/india-b2b-saas" className="hover:text-blue-400 transition-colors">India B2B SaaS</a>
                            </li>
                            <li>
                                <a href="/gtm-engineer/" className="hover:text-blue-400 transition-colors">State Directory</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Connect */}
                    <div>
                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 font-bold mb-4">
                            Connect
                        </h4>
                        <ul className="space-y-2.5 text-sm font-light text-slate-300">
                            <li>
                                <a href="https://wa.me/9303228082" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">WhatsApp Direct</a>
                            </li>
                            <li>
                                <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn Profile</a>
                            </li>
                            <li>
                                <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub Repos</a>
                            </li>
                            <li>
                                <a href={`mailto:${SOCIAL_LINKS.email}`} className="hover:text-blue-400 transition-colors">Email Direct</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Strip */}
                <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
                    <p>© {currentYear} Sandesh Agrawal. All rights reserved.</p>
                    <p className="tracking-widest uppercase text-[11px]">Engineering Growth Systems</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
