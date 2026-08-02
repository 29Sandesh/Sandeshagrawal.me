import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_DETAILS } from '../constants';

const Skills: React.FC = () => {
  const categories = [
    {
      title: "GTM & RevOps Tools",
      skills: SKILL_DETAILS['GTM & RevOps Tools'],
      description: "Orchestrating outbound engines, CRM pipelines, and automated lead capture with Clay, HubSpot, Salesforce, Apollo, Instantly & n8n."
    },
    {
      title: "Data & AI Automation",
      skills: SKILL_DETAILS['Data & AI Automation'],
      description: "Waterfall enrichment logic, LLM APIs (OpenAI/Claude/Gemini), ZoomInfo, Clearbit, Hunter.io & LangChain."
    },
    {
      title: "Full-Stack Engineering",
      skills: SKILL_DETAILS['Full-Stack Engineering'],
      description: "Architecting high-performance web applications using React 19, Next.js, Node.js, Express, GraphQL & Tailwind CSS."
    },
    {
      title: "Databases & Integration",
      skills: SKILL_DETAILS['Databases & Integration'],
      description: "MongoDB, PostgreSQL (Supabase), AWS, Firebase, webhooks, REST APIs, CRM object modeling & complex SQL queries."
    }
  ];

  return (
    <section id="skills" className="py-16 md:py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header - Left Aligned, No Dot */}
        <div className="flex flex-col items-start text-left mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-headline font-black text-slate-900 leading-none uppercase tracking-[0.15em]">
              TECH STACK
            </h2>
          </motion.div>
        </div>

        {/* Full-Width 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-slate-200 bg-white p-6 flex flex-col justify-between rounded-2xl shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-500/10 hover:border-blue-400 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  {/* Card Header Label */}
                  <div className="flex justify-between items-center mb-4 pb-4 border-b border-slate-100">
                    <span className="text-blue-600 font-body text-xs tracking-widest uppercase font-bold">
                      /0{i + 1}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-blue-600/30 group-hover:bg-blue-600 transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-headline font-black text-slate-900 uppercase tracking-tight leading-tight mb-3">
                    {cat.title}
                  </h3>

                  {/* Summary / Description */}
                  <p className="text-slate-500 font-body text-xs leading-relaxed mb-6 font-light">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-2 z-10 mt-auto">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 bg-slate-100 border border-slate-200 group-hover:border-blue-200 text-slate-700 font-mono text-[10px] uppercase font-semibold rounded-md transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
