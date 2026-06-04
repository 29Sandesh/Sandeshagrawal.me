
import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const PRICING_DATA = [
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

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-10 md:py-18 bg-black relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="flex flex-col items-center mb-8 md:mb-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-white/20 font-mono text-[10px] uppercase tracking-[0.5em] mb-4">Investment</p>
                        <h2 className="text-4xl md:text-7xl font-black text-white font-syncopate uppercase tracking-tighter leading-none">
                            PRICING<br />
                            <span className="text-transparent stroke-text">PLANS.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    {PRICING_DATA.map((plan, i) => (
                        <motion.div
                            key={plan.tier}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: 0.1 * i, duration: 0.6 }}
                            className={`relative p-5 md:p-6 border transition-all duration-700 flex flex-col ${plan.highlight
                                ? 'border-white/30 bg-white/[0.03]'
                                : 'border-white/5 hover:border-white/20 hover:bg-white/[0.01]'
                                }`}
                        >
                            {plan.highlight && (
                                <div className="absolute -top-[13px] left-6 md:left-8 bg-white text-black text-[7px] font-black tracking-[0.3em] uppercase px-3 py-1.5 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                    RECOMMENDED
                                </div>
                            )}

                            <div className="mb-6">
                                <p className="text-white/20 font-mono text-[9px] uppercase tracking-widest mb-3">{plan.tier}</p>
                                <div className="flex items-end gap-2 mb-4">
                                    <span className="text-3xl md:text-4xl font-bold font-syncopate text-white">{plan.price}</span>
                                    <span className="text-white/20 font-mono text-[10px] mb-2">{plan.sub}</span>
                                </div>
                                <p className="text-white/40 text-xs md:text-sm font-light leading-relaxed">{plan.desc}</p>
                            </div>

                            <ul className="space-y-2.5 md:space-y-3 flex-1 mb-7">
                                {plan.features.map(f => (
                                    <li key={f} className="flex items-start gap-3 text-[11px] md:text-sm text-white/50 group/item">
                                        <Check className="h-3.5 w-3.5 text-accent/50 flex-shrink-0 mt-0.5 group-hover/item:text-accent transition-colors" />
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={`mailto:${SOCIAL_LINKS.email}?subject=Inquiry: ${plan.tier} Plan`}
                                className={`flex items-center justify-center gap-2 px-6 py-3 text-[10px] font-mono font-bold uppercase tracking-widest transition-all duration-500 ${plan.highlight
                                    ? 'bg-white text-black hover:bg-slate-200 shadow-xl'
                                    : 'border border-white/10 text-white/50 hover:text-white hover:border-white/30'
                                    }`}
                            >
                                Select Plan
                            </a>
                        </motion.div>
                    ))}
                </div>

                <p className="text-white/10 font-mono text-[8px] md:text-[9px] uppercase tracking-tighter text-center mt-4 opacity-50">
                    All agreements finalized via project-specific contracts.
                </p>
            </div>
        </section>
    );
};

export default Pricing;
