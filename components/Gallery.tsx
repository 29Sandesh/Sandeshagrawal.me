import React from 'react';
import { motion } from 'framer-motion';
import { GALLERY_IMAGES } from '../constants';
import { Sparkles } from 'lucide-react';

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-32 relative">
            <motion.div
                className="max-w-7xl mx-auto px-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
            >
                <div className="flex items-center gap-2 mb-6 opacity-60">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <span className="text-xs font-mono uppercase tracking-[0.3em] text-white">Visuals</span>
                </div>

                <h2 className="text-5xl md:text-[8vw] font-bold text-white mb-16 font-syncopate tracking-tighter uppercase leading-none">
                    Creative<br /><span className="text-transparent stroke-text">Gallery.</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
                    {GALLERY_IMAGES.map((image, index) => (
                        <motion.div
                            key={image.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`relative overflow-hidden group glass-panel ${image.span || ''}`}
                        >
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10 pointer-events-none" />
                            <img
                                src={image.url}
                                alt={image.title}
                                className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700 ease-out"
                                loading="lazy"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-8 z-20 bg-gradient-to-t from-black/90 via-black/40 to-transparent translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                <p className="text-white font-syncopate text-xl md:text-2xl font-bold uppercase tracking-wider">
                                    {image.title}
                                </p>
                                <div className="w-12 h-1 bg-white mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 delay-100" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Gallery;
