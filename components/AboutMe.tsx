
import React from 'react';
import { motion } from 'framer-motion';
import { Minus, Award } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const AboutMe: React.FC = () => {
  return (
    <section id="about" className="pt-16 pb-20 md:pt-20 md:pb-28 bg-white text-slate-900 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* Simple & Clean Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-10 gap-5 md:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-2">
              <Minus className="h-4 w-4 text-blue-600" />
              <span className="font-mono text-[10px] text-blue-600 font-bold uppercase tracking-[0.5em]">Biography</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:text-right"
          >
            <p className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.5em] mb-1">Currently Based</p>
            <p className="text-slate-900 font-bold text-sm uppercase tracking-widest">Indore, India</p>
          </motion.div>
        </div>

        {/* Clean Narrative Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">

          {/* Main Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-8"
          >
            <p className="text-xl md:text-3xl font-light text-slate-900 leading-relaxed font-sans">
              <span className="text-4xl md:text-6xl font-bold font-syncopate text-blue-600 inline-block mr-3 align-baseline">YO!</span> I am <span className="text-slate-900 font-bold">Sandesh Agrawal</span>, a Technical GTM Engineer building <span className="italic text-blue-600 font-medium">AI-powered growth systems</span> — from lead generation platforms and outbound automation to full-stack products that drive revenue.
            </p>

            <div className="h-px w-24 bg-slate-200"></div>

            <p className="text-slate-600 text-base md:text-lg font-light leading-relaxed">
              With hands-on experience shipping 10+ production platforms, I specialize in building the technical infrastructure behind go-to-market strategies: AI agents for lead qualification, automated outreach systems, CRM integrations, and programmatic SEO engines. Every system I build is designed to generate measurable business growth.
            </p>
          </motion.div>

          {/* Quick Facts / Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col justify-center space-y-10"
          >
            <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-l-2 border-blue-600 pl-8 md:pl-10 relative">
              <div>
                <h4 className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-1">Expertise</h4>
                <p className="text-slate-900 font-bold text-sm tracking-wide uppercase">GTM / Growth</p>
              </div>
              <div>
                <h4 className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-1">Industry</h4>
                <p className="text-slate-900 font-bold text-sm tracking-wide uppercase">SaaS / AI</p>
              </div>
              <div>
                <h4 className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-1">Projects</h4>
                <p className="text-slate-900 font-bold text-sm tracking-wide uppercase">10+ Completed</p>
              </div>
              <div>
                <h4 className="text-slate-400 font-mono text-[10px] uppercase tracking-[0.3em] mb-1">Status</h4>
                <p className="text-blue-600 font-bold text-sm tracking-wide uppercase">Open to Work</p>
              </div>
            </div>

            <blockquote className="text-slate-500 italic font-serif text-sm md:text-base border-l-4 border-slate-200 pl-6 py-2">
              "Design is not just what it looks like and feels like. Design is how it works."
            </blockquote>

            {/* Certifications Section */}
            <div className="border-t border-slate-200 pt-6 mt-6">
              <h4 className="text-slate-400 font-mono text-[9px] uppercase tracking-[0.3em] mb-4 flex items-center gap-2">
                <Award className="h-3.5 w-3.5 text-blue-600" />
                Certifications
              </h4>
              <div className="space-y-2">
                {CERTIFICATIONS.map((cert) => (
                  <a 
                    key={cert.id} 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border border-slate-200 bg-slate-50/50 p-3 hover:border-blue-500 hover:bg-blue-50/30 transition-all duration-300 group cursor-pointer block rounded-lg"
                  >
                    <span className="text-slate-900 text-xs font-semibold tracking-wide group-hover:text-blue-600 transition-colors">{cert.title}</span>
                    <span className="text-slate-400 font-mono text-[9px] uppercase tracking-wider group-hover:text-slate-700 transition-colors">{cert.issuer} ➲</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
