import React from 'react';
import { motion } from 'framer-motion';
import { Map, ArrowUpRight } from 'lucide-react';
import Navbar from './Navbar';
import { CITIES_DATA } from '../cities';

const LocationsPage: React.FC = () => {
    // Group cities alphabetically for better UX
    const groupedCities = CITIES_DATA.reduce((acc, city) => {
        const firstLetter = city.charAt(0).toUpperCase();
        if (!acc[firstLetter]) acc[firstLetter] = [];
        acc[firstLetter].push(city);
        return acc;
    }, {} as Record<string, string[]>);

    const sortedLetters = Object.keys(groupedCities).sort();

    return (
        <div className="min-h-screen bg-black text-white selection:bg-accent/30 selection:text-white pb-32">
            <header className="sr-only">
                <h1>Service Locations in India - Web Development</h1>
                <p>Find affordable and high-performance website development solutions in your city across India.</p>
            </header>

            <Navbar alwaysVisible />

            <main className="max-w-7xl mx-auto px-6 pt-36">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-16 border-b border-white/5 pb-16"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Map className="h-5 w-5 text-accent" />
                        <span className="font-mono text-xs text-white/40 uppercase tracking-[0.5em]">Global Reach</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold font-syncopate uppercase tracking-tighter leading-none mb-6">
                        SERVICE <span className="text-transparent stroke-text">LOCATIONS.</span>
                    </h2>

                    <p className="max-w-3xl text-white/50 text-lg leading-relaxed font-light">
                        Explore our hyper-local web engineering services across 500+ major Indian cities. We provide dedicated, high-performance website development to solve the exact challenges facing businesses in your region.
                    </p>
                </motion.div>

                <div className="flex flex-col gap-12">
                    {sortedLetters.map((letter) => (
                        <div key={letter} className="flex flex-col md:flex-row gap-8 md:gap-16">
                            <div className="md:w-16 shrink-0">
                                <h3 className="text-4xl md:text-6xl font-syncopate font-bold text-white/10">{letter}</h3>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-1">
                                {groupedCities[letter].sort().map((city) => {
                                    const slug = city.toLowerCase().replace(/[\s\(\)]+/g, '-').replace(/-$/, '');
                                    return (
                                        <a
                                            key={city}
                                            href={`/web-development-in/${slug}`}
                                            className="group flex items-center justify-between p-4 border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] hover:border-white/20 transition-all duration-300 rounded-none"
                                        >
                                            <span className="font-mono text-xs uppercase tracking-widest text-white/70 group-hover:text-white transition-colors">
                                                {city}
                                            </span>
                                            <ArrowUpRight className="h-3 w-3 text-white/20 group-hover:text-accent transition-colors" />
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default LocationsPage;
