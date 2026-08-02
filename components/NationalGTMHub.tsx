import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, Database, Cpu, Target, Shield, CheckCircle, ChevronRight } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEOHead from './SEOHead';
import { STATES_DATA } from '../locationData';

const NationalGTMHub: React.FC = () => {
    const stateEntries = Object.entries(STATES_DATA);

    const nationalFaqs = [
        {
            question: "What is a Technical GTM Engineer?",
            answer: "A Technical GTM Engineer bridges full-stack code and revenue operations. Instead of manual SDR outreach, a GTM Engineer builds multi-provider waterfall enrichment chains, AI qualification agents, custom CRM integrations, and automated outbound systems that run 24/7."
        },
        {
            question: "How does GTM Engineering differ from traditional SDR sales?",
            answer: "Traditional SDRs copy-paste leads into spreadsheets and send generic templates. GTM Engineering automates lead discovery, enriches profiles across Clearbit, ZoomInfo, and Hunter, and uses LLMs to personalize cold outreach at scale — delivering 10x output with zero human latency."
        },
        {
            question: "Which industries in India benefit most from GTM Engineering?",
            answer: "B2B SaaS, IT Services, Manufacturing exporters, FinTech, Logistics, and Commercial Real Estate companies across India leverage GTM Engineering to generate high-intent pipeline without bloated sales teams."
        },
        {
            question: "What technology stack is used for GTM Engineering infrastructure?",
            answer: "The stack includes React/Next.js for custom dashboards, Node.js/Python microservices, n8n workflow automation, Clay for data enrichment, HubSpot/Salesforce CRMs, LLM APIs (OpenAI/Claude/Gemini), and email senders like Instantly."
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            <SEOHead
                title="Technical GTM Engineer Across Indian States | Sandesh Agrawal"
                description="Hire a Technical GTM Engineer to build automated outbound engines, waterfall enrichment pipelines, and AI lead qualification across Indian states."
                keywords="GTM Engineer India, Go to Market Engineer India, Outbound Automation India, RevOps India, Sandesh Agrawal"
            />

            <header className="sr-only">
                <h1>Technical GTM Engineering Services in India</h1>
                <p>Sandesh Agrawal provides Technical GTM Engineering, RevOps automation, waterfall lead enrichment, and AI prospect qualification for businesses across India.</p>
            </header>

            <div className="relative z-10 w-full">
                <Navbar alwaysVisible />

                {/* Hero Section */}
                <div className="max-w-7xl mx-auto px-6 pt-32 pb-16">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                        {/* Breadcrumbs */}
                        <nav aria-label="Breadcrumb" className="mb-6">
                            <ol className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest">
                                <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>
                                <li><ChevronRight className="w-3 h-3 text-slate-400" /></li>
                                <li className="text-blue-600 font-bold">GTM Engineer India</li>
                            </ol>
                        </nav>

                        <div className="flex items-center gap-2 mb-4">
                            <Globe className="h-4 w-4 text-blue-600" />
                            <span className="font-mono text-xs text-blue-600 uppercase tracking-[0.3em] font-bold">State & Territory Coverage</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl font-headline font-black uppercase tracking-tight text-slate-900 mb-4">
                            TECHNICAL GTM <span className="text-blue-600">ENGINEER INDIA</span>
                        </h1>

                        <p className="max-w-3xl text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-8">
                            Automate outbound sales, build multi-provider waterfall enrichment chains, and deploy AI lead qualification agents across Indian commercial corridors.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                            {[
                                { icon: Database, label: "Waterfall Enrichment", desc: "Clearbit → ZoomInfo → Hunter fallback logic" },
                                { icon: Cpu, label: "AI Lead Qualification", desc: "LLM agents scoring prospects in seconds" },
                                { icon: Target, label: "Automated Outbound", desc: "Clay + Instantly inbox rotation systems" },
                                { icon: Shield, label: "CRM Architecture", desc: "Type-safe HubSpot & Salesforce schemas" }
                            ].map((item, idx) => (
                                <div key={idx} className="p-5 border border-slate-200 bg-white rounded-2xl shadow-sm">
                                    <item.icon className="h-5 w-5 text-blue-600 mb-3" />
                                    <h2 className="font-bold text-xs uppercase tracking-wider mb-1 text-slate-900">{item.label}</h2>
                                    <p className="text-[11px] text-slate-500 leading-relaxed font-light">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* State Hub Directory */}
                <section className="py-12 px-6 border-t border-slate-200 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="mb-10">
                            <span className="text-blue-600 font-mono text-xs tracking-widest uppercase font-bold">REGIONAL DIRECTORY</span>
                            <h2 className="text-2xl sm:text-4xl font-headline font-black text-slate-900 uppercase tracking-tight mt-2 mb-2">
                                State & Union Territory <span className="text-blue-600">Hubs</span>
                            </h2>
                            <p className="text-slate-600 text-sm max-w-2xl font-light">
                                Select a state to explore localized GTM engineering solutions, industry breakdowns, and state-level outbound engines.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {stateEntries.map(([stateSlug, state]) => (
                                <a
                                    key={stateSlug}
                                    href={`/gtm-engineer/${stateSlug}/`}
                                    className="group p-5 border border-slate-200 bg-slate-50 hover:bg-white hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 rounded-2xl flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="text-[11px] font-mono text-blue-600 font-bold uppercase tracking-wider">{state.capital}</span>
                                        </div>
                                        <h3 className="text-lg font-headline font-bold text-slate-900 uppercase group-hover:text-blue-600 transition-colors mb-2">
                                            {state.name}
                                        </h3>
                                        <p className="text-xs text-slate-500 leading-relaxed mb-4 font-light">
                                            {state.gtmOpportunity}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 group-hover:text-blue-600 uppercase tracking-wider pt-3 border-t border-slate-200">
                                        <span>Explore {state.name} Hub</span>
                                        <ArrowRight className="w-3.5 h-3.5 text-blue-600 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-16 px-6 max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <span className="text-blue-600 font-mono text-xs tracking-widest uppercase font-bold">GTM OVERVIEW</span>
                        <h2 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight text-slate-900 mt-2">
                            GTM ENGINEERING <span className="text-blue-600">FAQ</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {nationalFaqs.map((faq, idx) => (
                            <div key={idx} className="p-6 border border-slate-200 bg-white rounded-2xl shadow-sm">
                                <h3 className="text-base font-bold text-slate-900 mb-2 flex items-center gap-2.5">
                                    <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                                    {faq.question}
                                </h3>
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-6 font-light">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-16 px-6 text-center bg-slate-900 text-white">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight text-white mb-4">
                            BUILD YOUR <span className="text-blue-500">GTM ENGINE</span>
                        </h2>
                        <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto font-light">
                            Ready to scale outbound revenue? Let's build a deliverability-engineered GTM system for your offer.
                        </p>
                        <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-blue-500/25 transition-all">
                            Schedule Technical Audit <ArrowRight className="w-4 h-4" />
                        </a>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default NationalGTMHub;
