import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, ArrowRight, ChevronRight, Search } from 'lucide-react';
import Navbar from './Navbar';
import SEOHead from './SEOHead';
import { STATES_DATA, getCitiesByState } from '../locationData';

const LocationsPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const stateEntries = Object.entries(STATES_DATA);

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Service",
                "name": "GTM Engineering Locations Across India",
                "provider": {
                    "@type": "Person",
                    "name": "Sandesh Agrawal",
                    "url": "https://sandeshagrawal.me"
                },
                "areaServed": "India",
                "description": "Directory of GTM Engineering, AI lead generation, and RevOps automation services across 500+ Indian cities and 36 states."
            },
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://sandeshagrawal.me" },
                    { "@type": "ListItem", "position": 2, "name": "Locations", "item": "https://sandeshagrawal.me/locations" }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-accent/30 selection:text-white pb-32">
            <SEOHead
                title="Service Locations Across 500+ Indian Cities | GTM Engineering"
                description="Technical GTM engineering, RevOps automation, and AI lead generation across all 28 states and union territories in India. Find your city."
                keywords="GTM Engineering Locations India, Outbound Automation Cities, RevOps Services India, Sandesh Agrawal Locations"
                jsonLd={jsonLd}
            />

            <header className="sr-only">
                <h1>GTM Engineering Service Locations Across India</h1>
                <p>Find automated lead generation engines, waterfall enrichment, and AI prospecting infrastructure in your city across 36 Indian states and union territories.</p>
            </header>

            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
                <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] bg-accent/10 blur-[160px] rounded-full" />
            </div>

            <div className="relative z-10 font-sans">
                <Navbar alwaysVisible />

                <main className="max-w-7xl mx-auto px-6 pt-36">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 border-b border-white/5 pb-16"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <MapPin className="h-4 w-4 text-accent" />
                            <span className="font-mono text-xs text-white/40 uppercase tracking-[0.5em]">Pan-India Network • 1,100+ Cities</span>
                        </div>

                        <h1 className="text-4xl md:text-[6vw] font-bold font-syncopate uppercase tracking-tighter leading-none mb-8">
                            SERVICE <span className="text-transparent stroke-text">LOCATIONS.</span>
                        </h1>

                        <p className="max-w-3xl text-xl text-white/60 font-light leading-relaxed mb-12">
                            Explore Technical GTM Engineering hubs across 28 states and 8 union territories. Build high-converting outbound sales engines anywhere in India.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-xl">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                            <input
                                type="text"
                                placeholder="Search city or state..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full bg-white/[0.03] border border-white/10 px-12 py-4 text-white placeholder-white/30 focus:outline-none focus:border-accent text-sm font-mono tracking-wider transition-colors"
                            />
                        </div>
                    </motion.div>

                    {/* States Grid */}
                    <div className="space-y-16">
                        {stateEntries.map(([stateSlug, state]) => {
                            const stateCities = getCitiesByState(stateSlug);
                            const filteredCities = stateCities.filter(c =>
                                c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                state.name.toLowerCase().includes(searchQuery.toLowerCase())
                            );

                            if (searchQuery && filteredCities.length === 0) return null;

                            return (
                                <section key={stateSlug} className="border border-white/10 bg-white/[0.01] p-8">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-white/5">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                <span className="text-xs font-mono text-accent uppercase tracking-widest">Capital: {state.capital}</span>
                                                <span className="text-[10px] font-mono px-2 py-0.5 border border-white/10 text-white/50 uppercase tracking-widest">{filteredCities.length} Cities</span>
                                            </div>
                                            <h2 className="text-2xl md:text-4xl font-bold font-syncopate uppercase tracking-tight text-white">
                                                <a href={`/gtm-engineer/${stateSlug}/`} className="hover:text-accent transition-colors flex items-center gap-3">
                                                    {state.name} <ChevronRight className="w-5 h-5 text-accent" />
                                                </a>
                                            </h2>
                                        </div>

                                        <a
                                            href={`/gtm-engineer/${stateSlug}/`}
                                            className="px-4 py-2 border border-white/10 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-white hover:border-accent transition-colors shrink-0"
                                        >
                                            View {state.name} Hub →
                                        </a>
                                    </div>

                                    {/* Cities Grid */}
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                                        {filteredCities.map((city) => (
                                            <a
                                                key={city.slug}
                                                href={`/gtm-engineer/${stateSlug}/${city.slug}/`}
                                                className="group p-3 border border-white/5 bg-black/40 hover:border-accent/40 transition-colors flex items-center justify-between"
                                            >
                                                <span className="text-xs font-mono text-white/70 group-hover:text-white transition-colors truncate">{city.name}</span>
                                                <ArrowRight className="w-3 h-3 text-white/20 group-hover:text-accent group-hover:translate-x-1 transition-all shrink-0" />
                                            </a>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </main>

                <footer className="border-t border-white/5 py-12 text-center mt-24">
                    <p className="text-white/20 font-mono text-xs tracking-[0.5em] uppercase">
                        GTM Network India — Sandesh Agrawal — {new Date().getFullYear()}
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default LocationsPage;
