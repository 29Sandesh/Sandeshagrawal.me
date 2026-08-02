import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronRight, Send, Database, Cpu, Target, Shield, Globe } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEOHead from './SEOHead';
import NotFoundPage from './NotFoundPage';
import { getStateBySlug } from '../locationData';

const StatePage: React.FC<{ stateSlug: string }> = ({ stateSlug }) => {
    const stateData = getStateBySlug(stateSlug);

    if (!stateData) {
        return <NotFoundPage />;
    }

    const stateFaqs = [
        {
            question: `Why do B2B enterprises in ${stateData.name} need a Technical GTM Engineer?`,
            answer: `Companies in ${stateData.name} face rising customer acquisition costs and low manual SDR output. A Technical GTM Engineer replaces manual cold calling with automated lead discovery, multi-provider waterfall enrichment, and LLM personalization tailored to ${stateData.name}'s key industries.`
        },
        {
            question: `What specific GTM infrastructure is built for ${stateData.name} companies?`,
            answer: `We deliver waterfall enrichment engines (Clearbit → ZoomInfo → Hunter), Clay outbound sequence engineering, n8n workflow automation, custom CRM object schemas in HubSpot/Salesforce, and AI lead qualification agents.`
        },
        {
            question: `Which industries in ${stateData.name} yield the highest outbound ROI?`,
            answer: `${stateData.industries.join(', ')} sectors across ${stateData.name} experience significant revenue acceleration when transitioning from static cold calling to automated, multi-channel GTM engines.`
        },
        {
            question: `Can GTM infrastructure integrate with our existing CRM in ${stateData.name}?`,
            answer: `Yes. All GTM pipelines are engineered with type-safe REST/GraphQL APIs and webhooks that sync directly into your existing HubSpot, Salesforce, or custom database infrastructure.`
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": `GTM Engineering & Growth Systems in ${stateData.name}`,
                "provider": {
                    "@type": "Person",
                    "name": "Sandesh Agrawal",
                    "url": "https://sandeshagrawal.me"
                },
                "areaServed": {
                    "@type": "State",
                    "name": stateData.name
                },
                "description": `Technical GTM Engineering, AI lead generation, and outbound automation across ${stateData.name}. Capital: ${stateData.capital}.`
            },
            {
                "@type": "FAQPage",
                "mainEntity": stateFaqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                    }
                }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            <SEOHead
                title={`Technical GTM Engineer in ${stateData.name} | Sandesh Agrawal`}
                description={`Technical GTM Engineering, automated outbound engines, and AI lead generation for enterprises in ${stateData.name}. Capital: ${stateData.capital}.`}
                keywords={`GTM Engineer ${stateData.name}, Outbound Automation ${stateData.name}, Lead Generation ${stateData.capital}`}
                jsonLd={jsonLd}
            />

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
                                <li><a href="/gtm-engineer" className="hover:text-blue-600 transition-colors">GTM Engineer India</a></li>
                                <li><ChevronRight className="w-3 h-3 text-slate-400" /></li>
                                <li className="text-blue-600 font-bold">{stateData.name}</li>
                            </ol>
                        </nav>

                        <div className="flex items-center gap-2 mb-4">
                            <Globe className="h-4 w-4 text-blue-600" />
                            <span className="font-mono text-xs text-blue-600 uppercase tracking-[0.3em] font-bold">STATE HUB • CAPITAL: {stateData.capital.toUpperCase()}</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl font-headline font-black uppercase tracking-tight text-slate-900 mb-4">
                            TECHNICAL GTM ENGINEER <span className="text-blue-600">{stateData.name.toUpperCase()}</span>
                        </h1>

                        <p className="max-w-3xl text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-8">
                            {stateData.gtmOpportunity}
                        </p>

                        {/* Industries Strip */}
                        <div className="flex flex-wrap items-center gap-2 mb-10">
                            <span className="text-xs font-mono text-slate-400 uppercase font-bold mr-2">Key State Sectors:</span>
                            {stateData.industries.map((ind) => (
                                <span key={ind} className="px-3 py-1 bg-white border border-slate-200 text-slate-700 text-xs font-mono font-semibold rounded-lg shadow-sm">
                                    {ind}
                                </span>
                            ))}
                        </div>

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

                {/* State FAQs */}
                <section className="py-16 px-6 max-w-5xl mx-auto border-t border-slate-200">
                    <div className="text-center mb-12">
                        <span className="text-blue-600 font-mono text-xs tracking-widest uppercase font-bold">STATE INSIGHTS</span>
                        <h2 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight text-slate-900 mt-2">
                            {stateData.name} <span className="text-blue-600">GTM FAQ</span>
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {stateFaqs.map((faq, idx) => (
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

                {/* CTA */}
                <section className="py-16 px-6 text-center bg-slate-900 text-white">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight text-white mb-4">
                            SCALE REVENUE IN <span className="text-blue-500">{stateData.name.toUpperCase()}</span>
                        </h2>
                        <p className="text-slate-400 text-sm mb-6 max-w-xl mx-auto font-light">
                            Deploy a deliverability-engineered GTM outbound system tailored for {stateData.name} enterprises.
                        </p>
                        <a href="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-lg shadow-blue-500/25 transition-all">
                            Book Technical Strategy Call <Send className="w-4 h-4" />
                        </a>
                    </div>
                </section>

                <Footer />
            </div>
        </div>
    );
};

export default StatePage;
