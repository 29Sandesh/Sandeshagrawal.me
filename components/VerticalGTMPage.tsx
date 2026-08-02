import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronRight, AlertTriangle, Send, Globe } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEOHead from './SEOHead';
import NotFoundPage from './NotFoundPage';
import { getVerticalBySlug } from '../verticalData';

interface VerticalGTMPageProps {
    slug: string;
}

const VerticalGTMPage: React.FC<VerticalGTMPageProps> = ({ slug }) => {
    const data = getVerticalBySlug(slug);

    if (!data) {
        return <NotFoundPage />;
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": data.title,
                "provider": {
                    "@type": "Person",
                    "name": "Sandesh Agrawal",
                    "url": "https://sandeshagrawal.me"
                },
                "areaServed": data.market,
                "description": data.subheadline
            },
            {
                "@type": "FAQPage",
                "mainEntity": data.faqs.map(faq => ({
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
                    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://sandeshagrawal.me/services" },
                    { "@type": "ListItem", "position": 3, "name": data.title, "item": `https://sandeshagrawal.me/services/${data.slug}` }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            <SEOHead
                title={`${data.title} | Sandesh Agrawal`}
                description={data.subheadline}
                keywords={`GTM Engineer ${data.market}, ${data.title}, Outbound Automation ${data.market}, RevOps ${data.market}`}
                jsonLd={jsonLd}
            />

            <Navbar alwaysVisible />

            {/* Main Content Container starting cleanly below Navbar */}
            <main className="max-w-7xl mx-auto px-6 pt-32 pb-16">

                {/* Hero Header Block */}
                <motion.div
                    className="mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Breadcrumb Navigation */}
                    <nav aria-label="Breadcrumb" className="mb-4">
                        <ol className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-wider">
                            <li><a href="/" className="hover:text-blue-600 transition-colors">Home</a></li>
                            <li><ChevronRight className="w-3 h-3 text-slate-400" /></li>
                            <li><a href="/services" className="hover:text-blue-600 transition-colors">Services</a></li>
                            <li><ChevronRight className="w-3 h-3 text-slate-400" /></li>
                            <li className="text-blue-600 font-bold">{data.market} Market</li>
                        </ol>
                    </nav>

                    <div className="flex flex-wrap items-center gap-3 mb-4">
                        <div className="flex items-center gap-2">
                            <Globe className="h-4 w-4 text-blue-600" />
                            <span className="font-mono text-xs text-blue-600 uppercase tracking-widest font-bold">Market: {data.market}</span>
                        </div>
                        <span className="px-3 py-0.5 bg-blue-50 border border-blue-200 text-blue-700 font-mono text-[10px] uppercase font-bold tracking-widest rounded-full">
                            {data.targetAudience}
                        </span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl font-headline font-black uppercase tracking-tight leading-tight mb-4 text-slate-900">
                        {data.headline}
                    </h1>

                    <p className="max-w-3xl text-base sm:text-lg text-slate-600 font-light leading-relaxed mb-6">
                        {data.subheadline}
                    </p>

                    <div className="flex flex-wrap items-center gap-3">
                        <a
                            href="https://wa.me/9303228082"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-blue-500/20 inline-flex items-center gap-2"
                        >
                            Book Technical GTM Audit <Send className="w-4 h-4" />
                        </a>
                        <a
                            href="#case-study"
                            className="px-6 py-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-700 font-mono text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm"
                        >
                            View Case Study ↓
                        </a>
                    </div>
                </motion.div>

                {/* Market Pain Points Section */}
                <section className="mb-12">
                    <div className="mb-6">
                        <span className="text-blue-600 font-mono text-xs tracking-widest font-bold uppercase block mb-1">Market Friction</span>
                        <h2 className="text-2xl sm:text-3xl font-headline font-black text-slate-900 uppercase tracking-tight">
                            Why Outbound Fails in <span className="text-blue-600">{data.market}</span>
                        </h2>
                        <p className="text-slate-600 text-xs sm:text-sm max-w-2xl font-light mt-1">Traditional SDR hiring and single-source lists waste budget and ruin deliverability.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {data.painPoints.map((pt, idx) => (
                            <div key={idx} className="p-5 border border-slate-200 bg-white rounded-2xl shadow-sm hover:border-blue-300 transition-all">
                                <AlertTriangle className="h-6 w-6 text-amber-500 mb-3" />
                                <h3 className="font-headline font-bold uppercase tracking-wider mb-2 text-slate-900 text-xs sm:text-sm">{idx + 1}. {pt.title}</h3>
                                <p className="text-slate-600 text-xs leading-relaxed font-light">{pt.description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* SDR vs GTM Engine Comparison Matrix */}
                <section className="mb-12">
                    <div className="mb-6">
                        <span className="text-blue-600 font-mono text-xs tracking-widest font-bold uppercase block mb-1">Economics & Efficiency</span>
                        <h2 className="text-2xl sm:text-3xl font-headline font-black uppercase tracking-tight text-slate-900">
                            TRADITIONAL SDR VS <span className="text-blue-600">GTM ENGINEER</span>
                        </h2>
                    </div>

                    <div className="overflow-x-auto border border-slate-200 rounded-2xl bg-white shadow-sm">
                        <table className="w-full text-left text-xs font-mono">
                            <thead>
                                <tr className="border-b border-slate-200 bg-slate-100/70">
                                    <th className="p-4 text-slate-900 font-bold uppercase tracking-wider">Metric</th>
                                    <th className="p-4 text-blue-700 font-bold uppercase tracking-wider bg-blue-50/80">Sandesh Agrawal (GTM Engine)</th>
                                    <th className="p-4 text-slate-500 font-bold uppercase tracking-wider">Traditional In-House SDR</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.sdrComparison.map((row, idx) => (
                                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                                        <td className="p-4 text-slate-900 font-bold">{row.metric}</td>
                                        <td className="p-4 text-blue-700 font-bold bg-blue-50/40 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                                            {row.gtmEngine}
                                        </td>
                                        <td className="p-4 text-slate-600">{row.traditionalSdr}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* Case Study Section */}
                <section id="case-study" className="mb-12 p-6 md:p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                    <div className="mb-6">
                        <span className="text-blue-600 font-mono text-xs tracking-widest font-bold uppercase block mb-1">Verified Implementation</span>
                        <h2 className="text-xl sm:text-3xl font-headline font-black text-slate-900 uppercase tracking-tight">
                            Case Study: <span className="text-blue-600">{data.caseStudy.title}</span>
                        </h2>
                        <p className="text-slate-500 font-mono text-xs uppercase tracking-widest mt-1">{data.caseStudy.clientType}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                        <div className="p-5 border border-red-100 bg-red-50/40 rounded-2xl">
                            <h3 className="text-red-900 font-mono text-xs font-bold uppercase tracking-widest mb-2">The Challenge</h3>
                            <p className="text-slate-700 text-xs sm:text-sm font-light leading-relaxed">{data.caseStudy.challenge}</p>
                        </div>
                        <div className="p-5 border border-blue-100 bg-blue-50/40 rounded-2xl">
                            <h3 className="text-blue-900 font-mono text-xs font-bold uppercase tracking-widest mb-2">The Technical Solution</h3>
                            <p className="text-slate-700 text-xs sm:text-sm font-light leading-relaxed">{data.caseStudy.solution}</p>
                        </div>
                    </div>

                    <div className="p-5 bg-slate-900 text-white rounded-2xl">
                        <h3 className="text-white font-headline text-xs font-bold uppercase tracking-widest mb-3">Key Results Achieved:</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {data.caseStudy.results.map((res, idx) => (
                                <div key={idx} className="p-3 bg-slate-800 border border-slate-700 rounded-xl flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span className="text-xs text-slate-200 font-mono leading-relaxed">{res}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Tech Stack Breakdown */}
                <section className="mb-12">
                    <div className="mb-6">
                        <span className="text-blue-600 font-mono text-xs tracking-widest font-bold uppercase block mb-1">Engineering Infrastructure</span>
                        <h2 className="text-2xl sm:text-3xl font-headline font-black text-slate-900 uppercase tracking-tight">
                            Technical Stack for <span className="text-blue-600">{data.market}</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                        {data.techStack.map((tech, idx) => (
                            <div key={idx} className="p-3.5 border border-slate-200 bg-white rounded-xl flex items-center justify-between shadow-sm">
                                <span className="font-mono text-xs uppercase text-slate-800 font-bold">{tech}</span>
                                <div className="w-2 h-2 rounded-full bg-blue-600"></div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* FAQs */}
                <section className="mb-12">
                    <div className="mb-6">
                        <span className="text-blue-600 font-mono text-xs tracking-widest font-bold uppercase block mb-1">Market FAQ</span>
                        <h2 className="text-2xl sm:text-3xl font-headline font-black uppercase tracking-tight text-slate-900">
                            {data.market} <span className="text-blue-600">GTM FAQ</span>
                        </h2>
                    </div>

                    <div className="space-y-3">
                        {data.faqs.map((faq, idx) => (
                            <div key={idx} className="p-5 border border-slate-200 bg-white rounded-2xl shadow-sm">
                                <h3 className="text-sm font-bold text-slate-900 mb-1.5 flex items-center gap-2 font-headline">
                                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                                    {faq.question}
                                </h3>
                                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed pl-6 font-light">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Bottom CTA */}
                <section className="py-12 p-6 bg-slate-900 text-white text-center rounded-3xl">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl sm:text-4xl font-headline font-black uppercase tracking-tight text-white mb-4">
                            BUILD YOUR <span className="text-blue-400">{data.market} OUTBOUND ENGINE</span>
                        </h2>
                        <p className="text-slate-400 text-xs sm:text-sm mb-6 max-w-xl mx-auto font-light">
                            Ready to scale outbound revenue? Let's build a deliverability-engineered GTM system for your offer.
                        </p>
                        <a
                            href="https://wa.me/9303228082"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-blue-500/25 inline-flex items-center gap-2"
                        >
                            Book Free Technical GTM Audit <Send className="w-4 h-4 text-white" />
                        </a>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default VerticalGTMPage;
