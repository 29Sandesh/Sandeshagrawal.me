
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import Navbar from './Navbar';

const AllGallery: React.FC = () => {
    const [selected, setSelected] = useState<string | null>(null);

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
                <div className="max-w-7xl mx-auto px-6 pt-36 pb-12 md:pt-44 md:pb-16">
                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <p className="text-white/30 font-mono text-xs tracking-[0.5em] uppercase mb-4">Visual Archive</p>
                        <h1 className="text-5xl md:text-9xl font-bold font-syncopate uppercase tracking-tighter leading-none">
                            GALLERY<br /><span className="text-transparent stroke-text">WORK.</span>
                        </h1>
                    </motion.div>
                </div>

                {/* Masonry grid */}
                <div className="max-w-7xl mx-auto px-6 pb-24">
                    <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                        {GALLERY_IMAGES.map((img, i) => (
                            <motion.div
                                key={img.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08, duration: 0.5 }}
                                className="relative group break-inside-avoid overflow-hidden border border-white/5 cursor-pointer"
                                onClick={() => setSelected(img.url)}
                            >
                                <img
                                    src={img.url}
                                    alt={img.title}
                                    className="w-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-75 transition-all duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <p className="text-white font-syncopate text-sm uppercase tracking-widest">{img.title}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Lightbox */}
                {selected && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        onClick={() => setSelected(null)}
                    >
                        <img src={selected} alt="Preview" className="max-w-full max-h-full object-contain" />
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default AllGallery;
