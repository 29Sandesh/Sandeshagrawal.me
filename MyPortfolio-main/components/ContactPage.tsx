
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Send, Check } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';
import Navbar from './Navbar';

const PRICING = [
    {
        tier: 'Starter',
        price: '₹8,000',
        sub: 'One-time',
        desc: 'Perfect for freelancers, small businesses, or personal brands needing a clean online presence.',
        features: [
            '3–5 page responsive website',
            'Mobile-first design',
            'Basic SEO setup',
            'Contact form integration',
            '1 round of revisions',
            '7-day delivery',
        ],
        highlight: false,
    },
    {
        tier: 'Professional',
        price: '₹20,000',
        sub: 'One-time',
        desc: 'For growing businesses that need a polished, modern website with advanced features.',
        features: [
            'Up to 10 pages',
            'Custom animations & transitions',
            'CMS or dynamic content',
            'REST API / third-party integrations',
            'Performance optimized (90+ Lighthouse)',
            '3 rounds of revisions',
            '14-day delivery',
        ],
        highlight: true,
    },
    {
        tier: 'Enterprise',
        price: 'Custom',
        sub: 'Project-based',
        desc: 'Full-scale web products, platforms, or long-term retainer engagements.',
        features: [
            'Unlimited pages & complexity',
            'Full-stack (React + Node + DB)',
            'Payment gateway integration',
            'Authentication & dashboards',
            'Ongoing maintenance & support',
            'Dedicated communication channel',
        ],
        highlight: false,
    },
];

const ContactPage: React.FC = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);
        const project = fd.get('project');
        const email = fd.get('email');
        const subject = 'Project Inquiry from Portfolio';
        const body = `Project Details:\n${project}\n\nContact Email: ${email}`;
        window.location.href = `mailto:${SOCIAL_LINKS.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <div
                className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
                style={{
                    backgroundImage:
                        'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="relative z-10">
                <Navbar alwaysVisible />

                {/* Hero */}
                <div className="max-w-7xl mx-auto px-6 pt-24 pb-8 md:pt-32 md:pb-12">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-white/30 font-mono text-xs tracking-[0.5em] uppercase mb-4">Let's Build Together</p>
                        <h1 className="text-5xl md:text-7xl font-bold font-syncopate uppercase tracking-tighter leading-none">
                            GET IN<br /><span className="text-transparent stroke-text">TOUCH.</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Contact Details */}
                <div className="max-w-7xl mx-auto px-6 pb-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        <motion.a
                            href={`mailto:${SOCIAL_LINKS.email}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="group flex items-center gap-6 p-8 border border-white/10 hover:border-white/30 hover:bg-white/[0.03] transition-all duration-500"
                        >
                            <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                                <Mail className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <p className="text-white/30 font-mono text-[9px] uppercase tracking-widest mb-1">Email</p>
                                <p className="text-white text-lg font-light">{SOCIAL_LINKS.email}</p>
                            </div>
                        </motion.a>

                        <motion.a
                            href={SOCIAL_LINKS.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 }}
                            className="group flex items-center gap-6 p-8 border border-white/10 hover:border-white/30 hover:bg-white/[0.03] transition-all duration-500"
                        >
                            <div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                                <Linkedin className="h-5 w-5 text-white/50 group-hover:text-white transition-colors" />
                            </div>
                            <div>
                                <p className="text-white/30 font-mono text-[9px] uppercase tracking-widest mb-1">LinkedIn</p>
                                <p className="text-white text-lg font-light">sandeshagrawal29</p>
                            </div>
                        </motion.a>
                    </div>

                    {/* --- PRICING --- */}
                    <div className="mb-12">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-px flex-1 bg-white/5" />
                            <span className="text-white/30 font-mono text-xs uppercase tracking-[0.5em]">Pricing</span>
                            <div className="h-px flex-1 bg-white/5" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {PRICING.map((plan, i) => (
                                <motion.div
                                    key={plan.tier}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + i * 0.1 }}
                                    className={`relative p-8 border flex flex-col transition-all duration-500 ${plan.highlight
                                        ? 'border-white/40 bg-white/[0.04]'
                                        : 'border-white/10 hover:border-white/20 hover:bg-white/[0.02]'
                                        }`}
                                >
                                    {plan.highlight && (
                                        <div className="absolute -top-3 left-8 bg-white text-black text-[8px] font-bold tracking-[0.3em] uppercase px-3 py-1">
                                            MOST POPULAR
                                        </div>
                                    )}

                                    <div className="mb-6">
                                        <p className="text-white/30 font-mono text-[9px] uppercase tracking-widest mb-2">{plan.tier}</p>
                                        <div className="flex items-end gap-2 mb-3">
                                            <span className="text-4xl md:text-5xl font-bold font-syncopate text-white">{plan.price}</span>
                                            <span className="text-white/30 font-mono text-xs mb-2">{plan.sub}</span>
                                        </div>
                                        <p className="text-white/40 text-sm font-light leading-relaxed">{plan.desc}</p>
                                    </div>

                                    <ul className="space-y-3 flex-1 mb-8">
                                        {plan.features.map(f => (
                                            <li key={f} className="flex items-start gap-3 text-sm text-white/60">
                                                <Check className="h-4 w-4 text-white/30 flex-shrink-0 mt-0.5" />
                                                {f}
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href={`mailto:${SOCIAL_LINKS.email}?subject=Inquiry: ${plan.tier} Plan`}
                                        className={`flex items-center justify-center gap-2 px-6 py-3 text-xs font-mono uppercase tracking-widest transition-all duration-300 ${plan.highlight
                                            ? 'bg-white text-black hover:bg-white/90'
                                            : 'border border-white/20 text-white/60 hover:text-white hover:border-white/40'
                                            }`}
                                    >
                                        Get Started
                                    </a>
                                </motion.div>
                            ))}
                        </div>

                        <p className="text-white/20 font-mono text-[9px] uppercase tracking-widest text-center mt-6">
                            All prices are negotiable. Custom quotes available — just reach out.
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="border-t border-white/5 pt-12">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="h-px flex-1 bg-white/5" />
                            <span className="text-white/30 font-mono text-xs uppercase tracking-[0.5em]">Send a Message</span>
                            <div className="h-px flex-1 bg-white/5" />
                        </div>

                        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-col gap-5">
                            <textarea
                                name="project"
                                placeholder="Describe your project or idea..."
                                required
                                rows={5}
                                className="w-full bg-white/[0.03] border border-white/10 text-white p-6 text-sm focus:border-white/30 focus:outline-none transition-all placeholder:text-white/20 font-mono resize-none"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your email address"
                                required
                                className="w-full bg-white/[0.03] border border-white/10 text-white p-5 text-sm focus:border-white/30 focus:outline-none transition-all placeholder:text-white/20 font-mono"
                            />
                            <button
                                type="submit"
                                className="flex items-center justify-center gap-3 px-10 py-5 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-white/90 transition-all group"
                            >
                                Send Message
                                <Send className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-white/5 py-12 text-center">
                    <p className="text-white/10 font-mono text-xs tracking-[0.5em] uppercase">
                        Sandesh Agrawal — Frontend Developer — {new Date().getFullYear()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
