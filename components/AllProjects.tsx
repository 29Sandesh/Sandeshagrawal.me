import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import SEOHead from './SEOHead';
import { PROJECTS } from '../constants';

const AllProjects: React.FC = () => {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-blue-600 selection:text-white font-sans">
            <SEOHead
                title="Projects | Sandesh Agrawal"
                description="Explore projects built by Sandesh Agrawal."
                keywords="Sandesh Agrawal Projects, CodeLeads, FoodFranchiseIndia, React, Node.js"
            />

            <Navbar alwaysVisible />

            <main className="max-w-7xl mx-auto px-6 pt-32 pb-16">
                {/* Projects Grid — 3 Cards Per Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                            className="group flex flex-col justify-between border border-slate-200 bg-white hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden p-6 rounded-2xl shadow-sm"
                        >
                            <div>
                                {/* Image Thumbnail */}
                                <div className="relative w-full h-48 mb-5 overflow-hidden border border-slate-100 bg-slate-100 rounded-xl">
                                    <img
                                        src={project.imageUrl}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <h2 className="text-xl font-bold font-headline uppercase tracking-tight text-slate-900 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                                    {project.title}
                                </h2>

                                <p className="text-slate-600 text-xs leading-relaxed font-light">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AllProjects;
