import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, Zap, Database, Award, CheckCircle2 } from 'lucide-react';

const SocialProofStrip: React.FC = () => {
  const stats = [
    { label: 'Systems Built', value: '10+', subtext: 'AI & GTM Infrastructure' },
    { label: 'Qualified Leads', value: '500+', subtext: 'Monthly Automated Pipeline' },
    { label: 'SEO Pages', value: '3,400+', subtext: 'Indexed Search Routes' },
    { label: 'Match Rate', value: '90%+', subtext: 'Waterfall Enrichment' },
  ];

  const trustBadges = [
    'Clay Automation',
    'Google ADK & Groq',
    'HubSpot & Salesforce APIs',
    'React 19 & Node.js',
    'Instantly & Apollo',
    'AWS Serverless',
  ];

  return (
    <div className="w-full bg-slate-900 text-white py-10 border-y border-slate-800 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Key Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pb-8 border-b border-slate-800">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col items-start p-4 bg-slate-800/50 rounded-2xl border border-slate-800"
            >
              <div className="text-3xl sm:text-4xl font-headline font-black text-blue-400 leading-none mb-1">
                {stat.value}
              </div>
              <div className="text-xs font-headline font-bold uppercase tracking-wider text-white">
                {stat.label}
              </div>
              <div className="text-[10px] font-mono text-slate-400 mt-1">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Trust Chips */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>Specialized Technical Stack:</span>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-2 sm:gap-3">
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 border border-slate-700/80 text-slate-300 font-mono text-[11px] uppercase font-semibold rounded-full"
              >
                <CheckCircle2 className="w-3 h-3 text-blue-400" />
                {badge}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SocialProofStrip;
