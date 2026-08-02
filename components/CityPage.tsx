import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, CheckCircle, ChevronRight, AlertTriangle, Send, Database, Cpu, Target, Shield, Globe } from 'lucide-react';
import Navbar from './Navbar';
import SEOHead from './SEOHead';
import NotFoundPage from './NotFoundPage';
import { getCityBySlug, getStateBySlug, getNearbyCities } from '../locationData';

const CityPage: React.FC<{ citySlug: string; stateSlug?: string }> = ({ citySlug, stateSlug: urlStateSlug }) => {
    const city = getCityBySlug(citySlug);

    // Validate city existence and state matching
    if (!city) {
        return <NotFoundPage />;
    }

    if (urlStateSlug && city.stateSlug !== urlStateSlug) {
        return <NotFoundPage />;
    }

    const cityName = city.name;
    const stateName = city.stateName;
    const stateSlug = city.stateSlug;
    const tier = city.tier;
    const population = city.population;
    const industries = city.industries;
    const gtmFocus = city.gtmFocus;

    const stateData = getStateBySlug(stateSlug);

    // Tier-based dynamic copy variation
    const heroHeadline = tier === 'metro'
        ? `SCALE YOUR GTM ENGINE IN ${cityName.toUpperCase()}.`
        : tier === 'tier2'
            ? `AUTOMATE OUTBOUND GROWTH IN ${cityName.toUpperCase()}.`
            : `BRING ENTERPRISE GTM TO ${cityName.toUpperCase()}.`;

    const heroSubtitle = tier === 'metro'
        ? `Outperform 50-person SDR teams in ${cityName}. Build AI-powered outbound pipelines, multi-provider waterfall enrichment, and type-safe CRM integrations.`
        : tier === 'tier2'
            ? `Build infrastructure rivaling metro SaaS startups. Deploy automated lead discovery and RevOps workflows designed for ${cityName} businesses.`
            : `Leapfrog regional competitors in ${cityName} with zero-latency lead discovery, automated cold outreach, and modern sales engineering.`;

    const siblingCities = getNearbyCities(city ? city.slug : citySlug, 8);

    // Tier-specific dynamic FAQs
    const cityFaqs = [
        {
            question: `What does a Technical GTM Engineer do for businesses in ${cityName}?`,
            answer: `A Technical GTM Engineer builds automated lead generation engines, waterfall enrichment pipelines (Clearbit → ZoomInfo → Hunter), n8n workflows, and AI qualification agents for companies in ${cityName}.`
        },
        {
            question: `Why replace traditional SDR outreach in ${cityName}?`,
            answer: `Manual SDR outreach in ${cityName} is expensive and slow. Automated GTM infrastructure processes thousands of leads per day, personalizes cold emails using LLMs, and updates your CRM automatically at a fraction of the cost.`
        },
        {
            question: `Which industries in ${cityName} benefit most from GTM automation?`,
            answer: `Key sectors in ${cityName} including ${industries.join(', ')} experience significant revenue growth when deploying automated outbound and RevOps data pipelines.`
        },
        {
            question: `How fast can a GTM outbound engine be deployed for a ${cityName} business?`,
            answer: `Core enrichment pipelines, Clay tables, and inbox-rotated email senders can be fully engineered and connected to your CRM within 7 to 14 days.`
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": `GTM Engineering & Growth Systems in ${cityName}`,
                "provider": {
                    "@type": "Person",
                    "name": "Sandesh Agrawal",
                    "url": "https://sandeshagrawal.me"
                },
                "areaServed": {
                    "@type": "City",
                    "name": cityName,
                    "containedInPlace": {
                        "@type": "State",
                        "name": stateName
                    }
                },
                "description": `Technical GTM Engineering, AI lead generation, and outbound automation for businesses in ${cityName}, ${stateName}.`
            },
            {
                "@type": "FAQPage",
                "mainEntity": cityFaqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sandeshagrawal.me" },
                    { "@type": "ListItem", "position": 2, "name": "GTM Engineer", "item": "https://sandeshagrawal.me/gtm-engineer/" },
                    { "@type": "ListItem", "position": 3, "name": stateName, "item": `https://sandeshagrawal.me/gtm-engineer/${stateSlug}/` },
                    { "@type": "ListItem", "position": 4, "name": cityName, "item": `https://sandeshagrawal.me/gtm-engineer/${stateSlug}/${city ? city.slug : citySlug}/` }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-600 selection:text-white pb-32 font-sans">
            <SEOHead
                title={`GTM Engineer in ${cityName}, ${stateName} | Sandesh Agrawal`}
                description={`Technical GTM Engineering, AI lead generation, and automated outbound pipelines for businesses in ${cityName}, ${stateName}. Build high-converting RevOps infrastructure.`}
                keywords={`GTM Engineer ${cityName}, Go to Market ${cityName}, Outbound Automation ${cityName}, AI Lead Gen ${cityName}, RevOps ${cityName}`}
                jsonLd={jsonLd}
            />

            <header className="sr-only">
                <h1>GTM Engineering Services in {cityName}, {stateName}</h1>
                <p>Scaling B2B pipeline in {cityName}? We build automated lead generation engines, waterfall enrichment workflows, and AI prospect qualification for {cityName} businesses.</p>
            </header>

            {/* Background decoration */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute top-1/4 left-0 w-[40%] h-[40%] bg-accent/10 blur-[150px] rounded-full" />
            </div>

            <div className="relative z-10 font-sans">
                <Navbar alwaysVisible />

                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-6 pt-36 pb-20">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                        {/* Breadcrumb Navigation */}
                        <nav aria-label="Breadcrumb" className="mb-8">
                            <ol className="flex flex-wrap items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-widest">
                                <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                                <li><ChevronRight className="w-3 h-3 text-white/20" /></li>
                                <li><a href="/gtm-engineer/" className="hover:text-white transition-colors">GTM Engineer</a></li>
                                <li><ChevronRight className="w-3 h-3 text-white/20" /></li>
                                <li><a href={`/gtm-engineer/${stateSlug}/`} className="hover:text-white transition-colors">{stateName}</a></li>
                                <li><ChevronRight className="w-3 h-3 text-white/20" /></li>
                                <li className="text-accent">{cityName}</li>
                            </ol>
                        </nav>

                        <div className="flex flex-wrap items-center gap-4 mb-6">
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-accent" />
                                <span className="font-mono text-xs text-white/40 uppercase tracking-[0.4em]">Hub: {cityName}, {stateName}</span>
                            </div>
                            <span className="px-2.5 py-0.5 border border-white/10 text-white/40 font-mono text-[10px] uppercase tracking-widest">
                                Pop. ~{population}
                            </span>
                            <span className="px-2.5 py-0.5 border border-accent/40 text-accent font-mono text-[10px] uppercase tracking-widest">
                                {tier.toUpperCase()} HUB
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-[5.5vw] font-bold font-syncopate uppercase tracking-tighter leading-none mb-8">
                            {heroHeadline}
                        </h1>

                        <div className="max-w-3xl">
                            <p className="text-xl md:text-2xl font-light text-white/60 leading-relaxed mb-8">
                                {heroSubtitle}
                            </p>

                            <div className="p-6 border border-white/10 bg-white/[0.01] mb-12">
                                <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-2">Localized GTM Focus for {cityName}:</span>
                                <p className="text-sm text-white/70 font-light leading-relaxed">
                                    {gtmFocus}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Common GTM Challenges in City */}
                <section className="py-24 px-6 border-y border-white/5 bg-white/[0.01]">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-16">
                            <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase">Outbound Friction</span>
                            <h2 className="text-3xl md:text-5xl font-bold font-syncopate text-white uppercase tracking-tighter mt-3 mb-4">
                                Common Sales Failures <span className="text-white/30 text-xl font-sans block mt-2 lowercase tracking-[0.2em] italic">in {cityName} businesses</span>
                            </h2>
                            <p className="text-white/50 text-base max-w-2xl">Traditional outbound methods are leaving revenue on the table for {cityName} companies.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="p-8 border border-white/10 bg-black/40 hover:bg-white/[0.02] transition-colors">
                                <AlertTriangle className="h-8 w-8 text-amber-400 mb-6" />
                                <h3 className="font-bold uppercase tracking-widest mb-3 text-white">1. Single-Source Lead Data</h3>
                                <p className="text-white/40 text-xs leading-relaxed">Relying on one database leaves 40%+ of {cityName} buyers missing emails or direct dials. Multi-provider waterfall enrichment fixes this instantly.</p>
                            </div>
                            <div className="p-8 border border-white/10 bg-black/40 hover:bg-white/[0.02] transition-colors">
                                <AlertTriangle className="h-8 w-8 text-amber-400 mb-6" />
                                <h3 className="font-bold uppercase tracking-widest mb-3 text-white">2. Generic Email Templates</h3>
                                <p className="text-white/40 text-xs leading-relaxed">Prospects in {cityName} ignore spammy templates. We use LLMs to scrape company achievements and write hyper-personalized first lines.</p>
                            </div>
                            <div className="p-8 border border-white/10 bg-black/40 hover:bg-white/[0.02] transition-colors">
                                <AlertTriangle className="h-8 w-8 text-amber-400 mb-6" />
                                <h3 className="font-bold uppercase tracking-widest mb-3 text-white">3. Manual SDR Burnout</h3>
                                <p className="text-white/40 text-xs leading-relaxed">Manual reps spend 70% of their time copying data into CRMs. Automated n8n/Clay workflows eliminate manual data entry completely.</p>
                            </div>
                            <div className="p-8 border border-white/10 bg-black/40 hover:bg-white/[0.02] transition-colors">
                                <AlertTriangle className="h-8 w-8 text-amber-400 mb-6" />
                                <h3 className="font-bold uppercase tracking-widest mb-3 text-white">4. Broken CRM Schemas</h3>
                                <p className="text-white/40 text-xs leading-relaxed">Untyped HubSpot or Salesforce fields lead to lost deal attribution. We build clean, custom object schemas for clear RevOps reporting.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* GTM Solutions & Tech Stack */}
                <section className="py-28 px-6">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2 space-y-8">
                            <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase">The Technical Solution</span>
                            <h2 className="text-4xl md:text-6xl font-bold font-syncopate text-white uppercase tracking-tighter">
                                Automated GTM <br /><span className="text-transparent stroke-text">Infrastructure.</span>
                            </h2>
                            <p className="text-lg text-white/60 font-light leading-relaxed">
                                We deploy custom growth engines tailored to {cityName}'s key sectors ({industries.slice(0, 3).join(', ')}). Combining Clay, Apollo, Instantly, and AI LLM agents, we deliver high-intent sales pipeline at scale.
                            </p>

                            <ul className="space-y-4 pt-2">
                                {[
                                    `Waterfall Data Enrichment (90%+ match rate in ${cityName})`,
                                    "LLM-Powered Cold Outreach Personalization",
                                    "Type-Safe HubSpot & Salesforce Integration",
                                    "Dedicated Deliverability & Inbox Rotation Setup"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-4 text-white/70">
                                        <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                                        <span className="text-base font-light">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="md:w-1/2 w-full">
                            <div className="p-8 border border-white/10 bg-white/[0.01]">
                                <h3 className="font-syncopate text-xl uppercase tracking-widest mb-6 text-white">Industries Served in {cityName}</h3>
                                <div className="space-y-4">
                                    {industries.map((ind, idx) => (
                                        <div key={idx} className="p-4 border border-white/5 bg-black/60 flex items-center justify-between">
                                            <span className="font-mono text-sm uppercase text-white">{ind}</span>
                                            <span className="text-xs font-mono text-accent uppercase">Automated GTM Ready</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Sibling Cities Internal Links */}
                <section className="py-20 px-6 border-t border-white/5 bg-white/[0.01]">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-8">
                            <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase">Nearby Digital Hubs</span>
                            <h2 className="text-2xl md:text-3xl font-bold font-syncopate text-white uppercase tracking-tighter mt-2">
                                GTM Engineering in Sibling Cities
                            </h2>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                            {siblingCities.map((sib) => (
                                <a
                                    key={sib.slug}
                                    href={`/gtm-engineer/${sib.stateSlug}/${sib.slug}/`}
                                    className="p-4 border border-white/10 bg-black/40 hover:border-accent/40 transition-colors flex items-center justify-between group"
                                >
                                    <span className="text-xs font-mono text-white/70 group-hover:text-accent transition-colors truncate">{sib.name}</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-24 px-6 max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="text-accent font-mono text-xs tracking-[0.4em] uppercase">City FAQs</span>
                        <h2 className="text-3xl md:text-5xl font-bold font-syncopate uppercase tracking-tighter text-white mt-4">
                            {cityName} <span className="text-transparent stroke-text">GTM FAQ.</span>
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {cityFaqs.map((faq, idx) => (
                            <div key={idx} className="p-8 border border-white/10 bg-white/[0.01]">
                                <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                                    {faq.question}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed pl-8 font-light">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-36 px-6 text-center border-t border-white/5 bg-white/[0.02]">
                    <div className="max-w-5xl mx-auto">
                        <p className="text-white/40 font-mono text-[10px] uppercase tracking-[1em] mb-12">Ready to scale outbound in {cityName}?</p>
                        <h2 className="text-4xl md:text-7xl font-bold font-syncopate uppercase tracking-tighter leading-none mb-12">
                            DOMINATE <span className="text-transparent stroke-text">{cityName.toUpperCase()}.</span>
                        </h2>
                        <a href="/contact" className="btn-premium inline-flex items-center gap-6 px-12 py-6 font-bold uppercase tracking-widest text-xs hover:gap-12 group rounded-full">
                            Hire For Your GTM Project <Send className="h-4 w-4 text-accent" />
                        </a>
                    </div>
                </section>

                {/* Footer */}
                <footer className="border-t border-white/5 py-12 text-center">
                    <p className="text-white/20 font-mono text-xs tracking-[0.5em] uppercase">
                        GTM Engineering for {cityName}, {stateName} — Sandesh Agrawal — {new Date().getFullYear()}
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default CityPage;
