import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, TrendingUp, Layers, Mail } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import SEOHead from './SEOHead';

const CASE_STUDIES = [
  {
    id: 'codeleads-ai-pipeline',
    title: 'CodeLeads: Autonomous AI Lead Generation & Qualification Engine',
    subtitle: 'How an autonomous AI agent system replaced manual SDR list-building and generated 500+ qualified B2B leads monthly.',
    category: 'AI Agents & Pipeline Automation',
    metric: '500+ Leads/Mo',
    metricLabel: 'Qualified Automated Pipeline',
    client: 'CodeLeads Platform (Proprietary SaaS)',
    problem: 'Traditional SDR teams spend 70% of their workday manually researching prospects, copying data into spreadsheets, and crafting generic emails that get marked as spam. Customer acquisition costs were climbing while response rates dropped below 1.5%.',
    solution: 'Built CodeLeads using React 19, Node.js, Google ADK, and Groq LLM inference. The system automatically scrapes target market entities (e.g. food franchises, SaaS platforms, local businesses), executes multi-provider waterfall enrichment, analyzes website tech stacks, and crafts hyper-personalized email drafts delivered via warmed secondary domains.',
    architecture: [
      'Target Discovery: Automated Google Maps API & LinkedIn Sales Nav Scraping',
      'Waterfall Enrichment: Apollo → Clearbit → Hunter → Dropcontact verification',
      'AI Analysis: Groq Llama 3 (800+ tok/s) reads website HTML for buying signals',
      'Sequencing & Sync: Instantly API execution with real-time HubSpot CRM sync'
    ],
    results: [
      '500+ qualified B2B leads generated per month with zero manual SDR effort',
      '92% data enrichment match rate across email and phone numbers',
      '3.8x higher response rate compared to static cold email templates',
      'Under 2-second AI analysis latency per target account'
    ],
    techStack: ['React 19', 'TypeScript', 'Node.js', 'Google ADK', 'Groq API', 'Firebase', 'MongoDB', 'Instantly API'],
    featured: true
  },
  {
    id: 'swigato-programmatic-seo',
    title: 'Programmatic SEO Engine: 1,115+ Dynamic City Landing Pages in 48 Hours',
    subtitle: 'Technical case study on building a hyper-scaled pSEO distribution engine for SwigatoIndia.',
    category: 'Programmatic SEO & Growth Systems',
    metric: '1,115+ Pages',
    metricLabel: 'Indexed Search Routes',
    client: 'SwigatoIndia Platform',
    problem: 'SwigatoIndia needed nationwide organic search visibility across every major Indian city without spending months manually writing copy and setting up individual pages.',
    solution: 'Engineered a dynamic programmatic SEO pipeline leveraging React dynamic routing, custom JSON-LD schema generators, and automated sitemap XML indexing. Mapped 500+ cities against top food delivery and restaurant software keywords.',
    architecture: [
      'Data Dictionary: Structured JSON database mapping cities, keywords, and local attributes',
      'Dynamic Rendering: React SSR / dynamic routing with optimized HTML templates',
      'Schema Injection: Automated LocalBusiness & Service JSON-LD schema generation',
      'Automated Indexation: Node.js sitemap script auto-submitting 1,000+ URLs to Google Search Console'
    ],
    results: [
      '1,115+ high-intent city landing pages indexed by search engines',
      'Sub-500ms page load times across all generated routes',
      '100% automated SEO meta tag generation and canonical URL management',
      '15,000+ monthly organic search impressions achieved'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Python', 'Tailwind CSS', 'Sitemap Engine'],
    featured: true
  },
  {
    id: 'the-circle-enterprise-hub',
    title: 'The CirCle: Real-Time Enterprise Hub Supporting 1,000+ Concurrent Users',
    subtitle: 'High-concurrency RevOps & collaboration infrastructure built with GraphQL, Node.js, and Redis.',
    category: 'Full-Stack Architecture & Real-Time Data',
    metric: '1,000+ Users',
    metricLabel: 'Concurrent Real-Time Capacity',
    client: 'The CirCle Platform',
    problem: 'Enterprise teams needed a unified, zero-latency communication and pipeline tracking portal capable of handling intense concurrent activity during live sales events.',
    solution: 'Designed and deployed a microservice architecture utilizing React 19, GraphQL subscriptions, Node.js, Redis pub/sub caching, and MongoDB aggregation pipelines.',
    architecture: [
      'API Layer: GraphQL subscriptions for instant real-time data sync',
      'Caching Layer: Redis cluster for sub-10ms session & event caching',
      'Database Layer: Indexed MongoDB aggregation pipelines for instant pipeline reporting',
      'Containerization: Deployed via Kubernetes with auto-scaling policy'
    ],
    results: [
      '1,000+ active concurrent user sessions with zero packet drop',
      'Sub-15ms WebSocket event latency across enterprise dashboards',
      'Zero downtime during peak traffic spikes',
      'Role-based access control (RBAC) enforced across 6 permission tiers'
    ],
    techStack: ['React 19', 'GraphQL', 'Node.js', 'MongoDB', 'Redis', 'Kubernetes', 'TypeScript'],
    featured: true
  },
  {
    id: 'foodfranchise-multi-portal',
    title: 'FoodFranchiseIndia: 6 Role-Based Portals for Franchise Growth Management',
    subtitle: 'End-to-end franchise acquisition platform connecting buyers, brand owners, and sales reps.',
    category: 'RevOps Architecture & Multi-Portal SaaS',
    metric: '6 Portals',
    metricLabel: 'Role-Based Dashboards',
    client: 'FoodFranchiseIndia',
    problem: 'Franchise lead distribution was disjointed across WhatsApp groups and email chains, leading to lost inquiries, slow response times, and zero lead attribution tracking.',
    solution: 'Architected a multi-portal SaaS platform with custom RBAC dashboards for Buyers, Franchise Investors, Brand Managers, Sales Reps, System Admins, and Partners.',
    architecture: [
      'RBAC Security: JWT authentication with granular endpoint authorization',
      'Lead Routing Engine: Automated lead assignment based on city territory and investment tier',
      'CRM Integration: Instant webhook notifications to sales reps on high-value lead capture',
      'Analytics Dashboard: Real-time pipeline velocity metrics and rep conversion tracking'
    ],
    results: [
      'Unified 6 distinct user workflows into a single cohesive platform',
      'Cut lead response time from 24 hours down to under 5 minutes',
      'Captured 100% lead attribution across all regional marketing campaigns',
      'Processed over $2M+ in franchise inquiry pipeline'
    ],
    techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
    featured: false
  }
];

const CaseStudiesPage: React.FC = () => {
  return (
    <>
      <SEOHead
        title="Case Studies & Proof of Work | Sandesh Agrawal — Technical GTM Engineer"
        description="Explore detailed case studies showing how Sandesh Agrawal builds AI lead generation engines, automated outbound pipelines, programmatic SEO systems, and RevOps infrastructure that drive pipeline growth."
      />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <Navbar alwaysVisible />

        {/* Case Studies Grid */}
        <section className="pt-32 pb-16 max-w-7xl mx-auto px-6">
          <div className="space-y-16">
            {CASE_STUDIES.map((cs, idx) => (
              <motion.div
                key={cs.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 relative overflow-hidden group hover:border-blue-500 transition-all duration-300"
              >
                {/* Metric Badge Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-slate-100">
                  <div>
                    <span className="px-3.5 py-1 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-mono font-bold uppercase rounded-full tracking-wider">
                      {cs.category}
                    </span>
                    <p className="text-xs text-slate-400 font-mono mt-2">Client: {cs.client}</p>
                  </div>
                  <div className="bg-slate-900 text-white px-6 py-3 rounded-2xl flex items-center gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-400" />
                    <div>
                      <div className="text-lg font-headline font-bold leading-none text-white">{cs.metric}</div>
                      <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">{cs.metricLabel}</div>
                    </div>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h2 className="text-2xl sm:text-3xl font-headline font-black text-slate-900 uppercase tracking-tight mb-3">
                  {cs.title}
                </h2>
                <p className="text-slate-600 text-base font-light mb-8 leading-relaxed">
                  {cs.subtitle}
                </p>

                {/* Problem vs Solution 2-Column Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="p-6 bg-red-50/50 border border-red-100 rounded-2xl">
                    <h3 className="text-sm font-bold text-red-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500" /> The Challenge / Pain Point
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed font-light">
                      {cs.problem}
                    </p>
                  </div>

                  <div className="p-6 bg-blue-50/50 border border-blue-100 rounded-2xl">
                    <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-600" /> The GTM Engineering Solution
                    </h3>
                    <p className="text-slate-700 text-sm leading-relaxed font-light">
                      {cs.solution}
                    </p>
                  </div>
                </div>

                {/* System Architecture */}
                <div className="mb-8">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-blue-600" /> System Architecture & Execution Flow
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cs.architecture.map((step, i) => (
                      <div key={i} className="flex items-start gap-3 p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-700 font-mono">
                        <span className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Business Results */}
                <div className="mb-8">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Measurable Business Outcomes
                  </h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {cs.results.map((res, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-sm text-slate-700 font-light">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{res}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Chips & Action CTA */}
                <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                  <div className="flex flex-wrap gap-2">
                    {cs.techStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-600 font-mono text-[11px] uppercase rounded-md font-semibold">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href="https://wa.me/9303228082"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl uppercase tracking-wider transition-all duration-300 shadow-md shadow-blue-500/20 shrink-0"
                  >
                    Build This For My Business <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Strip */}
        <section className="py-16 bg-slate-900 text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl sm:text-4xl font-headline font-black text-white uppercase tracking-tight mb-4">
              Ready to Build Your <span className="text-blue-500">Automated Pipeline Engine?</span>
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mb-8 max-w-xl mx-auto font-light">
              Stop spending thousands on manual SDR prospecting. Let's build a custom AI lead generation system tailored to your B2B offer.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="https://wa.me/9303228082"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all shadow-lg shadow-blue-500/25 inline-flex items-center justify-center gap-2"
              >
                Discuss Project on WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:agrawalsandesh29@gmail.com?subject=GTM Project Inquiry"
                className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-bold text-xs uppercase tracking-widest transition-all border border-slate-700 inline-flex items-center justify-center gap-2"
              >
                Send Email Inquiry <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CaseStudiesPage;
