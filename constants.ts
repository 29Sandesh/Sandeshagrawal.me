
import { Project, SkillData, Experience, GalleryImage, Certification } from './types';

export const HERO_TITLE = "Sandesh Agrawal";
export const HERO_SUBTITLE = "Technical GTM Engineer with hands-on experience building lead generation platforms, AI-powered outbound automation systems, and growth infrastructure using React, Node.js, TypeScript, and AI agents.";


export const SOCIAL_LINKS = {
  github: "https://github.com/29Sandesh",
  linkedin: "https://www.linkedin.com/in/sandeshagrawal29/",
  email: "29sandesh.agrawal@gmail.com"
};

export const MARQUEE_ITEMS = [
  "Clay",
  "HubSpot",
  "Apollo",
  "Instantly",
  "n8n",
  "Waterfall Enrichment",
  "LLM AI Agents",
  "React 19",
  "Next.js",
  "Node.js",
  "TypeScript",
  "Supabase",
  "AWS"
];

export const SKILL_DETAILS = {
  'GTM & RevOps Tools': ['Clay', 'HubSpot', 'Salesforce', 'Outreach', 'Apollo', 'Instantly', 'n8n', 'Zapier'],
  'Data & AI Automation': ['Waterfall Enrichment', 'LLM APIs (OpenAI/Claude/Gemini)', 'ZoomInfo', 'Clearbit', 'Hunter.io', 'LangChain'],
  'Full-Stack Engineering': ['React', 'Next.js', 'Node.js', 'TypeScript', 'Express.js', 'GraphQL', 'Tailwind CSS', 'Vite'],
  'Databases & Integration': ['MongoDB', 'PostgreSQL (Supabase)', 'AWS', 'Firebase', 'REST APIs', 'Webhooks', 'CRM Object Modeling', 'SQL']
};

export const SKILLS_DATA: SkillData[] = [
  { subject: 'GTM & RevOps Tools', A: 95, fullMark: 100 },
  { subject: 'Data & AI Automation', A: 95, fullMark: 100 },
  { subject: 'Full-Stack Engineering', A: 95, fullMark: 100 },
  { subject: 'Databases & Integration', A: 90, fullMark: 100 },
];

export const PROJECTS: Project[] = [
  {
    id: 'codeleads',
    title: 'CodeLeads — B2B Lead Gen Platform',
    description: 'Built an autonomous AI lead generation platform that automates local business discovery, lead qualification, and outreach. Developed AI agents using Google ADK and Groq API to search businesses, filter qualified leads, and compose personalized emails, integrating Firebase and MongoDB for session/lead management.',
    tech: ['React', 'TypeScript', 'Google ADK', 'Groq API', 'Firebase', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1600',
    link: 'https://fabulous-salamander-1efab4.netlify.app/',
    featured: true
  },
  {
    id: 'foodfranchiseindia',
    title: 'FoodFranchiseIndia Platform',
    description: 'Engineered a multi-portal franchise management SaaS with 6 role-based portals and secure access control. Built a programmatic SEO engine generating 10,000+ landing pages alongside integrated CRM and LMS modules, franchise discovery, and financing workflows.',
    tech: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1600',
    link: 'https://celadon-tartufo-d731f4.netlify.app/',
    featured: true
  },
  {
    id: 'the-circle',
    title: 'The CirCle — Real-Time Enterprise Hub',
    description: 'Built a scalable enterprise collaboration platform supporting 1,000+ concurrent users with collaborative editing, GraphQL subscriptions, Redis Sentinel clustering, Socket.io scaling, MongoDB Replica Sets, and Kubernetes zero-downtime deployments. Engineered secure systems with AES-256 encryption, tamper-evident audit logs, RS256 authentication, and 6-level tenant isolation. Developed collaborative Kanban systems with CRDT editing, accessible UI and automated CI/CD using Docker.',
    tech: ['React 19', 'Node.js', 'GraphQL', 'MongoDB', 'Redis', 'Kubernetes'],
    imageUrl: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600',
    link: 'https://jition.vercel.app/',
    featured: true
  },
  {
    id: 'cofound',
    title: 'Cofound — Founder Networking Platform',
    description: 'Built a mobile-first founder matching platform using React 19, Capacitor, and Supabase, onboarding 50+ active test users. Engineered low-latency messaging, matching workflows, and authentication systems using Supabase Realtime and JWT sessions. Optimized media pipelines reducing avatar sizes by 60-80% while improving mobile performance and engagement flows.',
    tech: ['React 19', 'TypeScript', 'Supabase', 'Capacitor', 'Node.js'],
    imageUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1600',
    link: 'https://github.com/29Sandesh/co-found',
    featured: true
  },
  {
    id: 'swigato-india',
    title: 'SwigatoIndia Website',
    description: 'Built an AI-optimized restaurant platform generating 1,115+ city landing pages through automated pipelines and schema systems. Implemented AI-search optimization strategies while maintaining a perfect 100/100 Lighthouse SEO score.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Python'],
    imageUrl: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=1600',
    link: 'https://swigatoindia.in/',
    featured: true
  },
  {
    id: 'codehtml-agency',
    title: 'Codehtml.in',
    description: 'Agency website with service pages, portfolio, and animations. Scored 90+ Lighthouse on performance and SEO.',
    tech: ['React.js', 'Node.js', 'Tailwind CSS'],
    imageUrl: '/media/Codehtml.png',
    link: 'https://codehtml.in/',
    featured: true
  },
  {
    id: 'alayarealty',
    title: 'Alaya Realty',
    description: 'High-end premium Real Estate Brokerage platform built for elite brokers and listings in Indore.',
    tech: ['React.js', 'Tailwind CSS', 'Brutalist Design', 'SEO'],
    imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1600',
    link: 'https://alayarealty.in/',
    featured: true
  },
  {
    id: 'crystamedia',
    title: 'Crysta Media',
    description: 'Cinematic Noir-themed Mystery Branding & Invite-Only Teaser launching in Indore.',
    tech: ['React.js', 'Framer Motion', 'Tailwind CSS', 'Interactive Canvas'],
    imageUrl: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1600',
    link: 'https://crystamedia.in/',
    featured: true
  },
  {
    id: 'slcc-construction',
    title: 'SLCC Construction',
    description: 'Samrajya Lakshmi Constructions Company · High-end construction and real estate portfolio site.',
    tech: ['React', 'Video Integration', 'SEO'],
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600',
    link: 'https://slcc.in/',
    featured: true
  },
  {
    id: 'el-gamingo',
    title: 'El Gamingo',
    description: 'Online gaming platform with accounts, competition leaderboards, and score tracking.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
    link: 'https://elgamingo.store/',
    featured: true
  },
  {
    id: 'tinkus-cafe',
    title: "Tinku's Cafe",
    description: 'Restaurant Website · Clean, appetizing web presence for a local cafe with interactive menu.',
    tech: ['React', 'Vite', 'Responsive Design'],
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=1600',
    link: 'https://tinkuscafe.netlify.app/',
    featured: true
  },
  {
    id: 'cafe-de-casa',
    title: 'Cafe De Casa',
    description: 'Digital Dining Ecosystem · QR-based digital menu with real-time ordering and an interactive UI.',
    tech: ['React', 'QR Technology', 'Real-time Updates'],
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1000',
    link: 'https://cafedecasaa.netlify.app/'
  },
  {
    id: 'patel-sangh-mp',
    title: 'Patel Sangathan',
    description: 'Community platform where members can register, log in, and search for other members.',
    tech: ['React.js', 'Node.js', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1600',
    link: 'https://patelsanghmp.com/',
    featured: true
  },
  {
    id: 'computer-point-plus',
    title: 'Computer Point Plus',
    description: 'Computer Services Website · Business-focused web presence for IT services and support offerings.',
    tech: ['React', 'Vite', 'Business Website'],
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1600',
    link: 'https://computerpointplus.com/',
    featured: true
  },
  {
    id: 'gaadi-market',
    title: 'Gaadi Market',
    description: 'Automotive Marketplace Website · Vehicle-focused listing experience designed for fast browsing.',
    tech: ['React', 'Marketplace UI', 'Responsive Design'],
    imageUrl: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=1600',
    link: 'https://gaadimarket.in/',
    featured: true
  },
  {
    id: 'lumina-fashion',
    title: 'Lumina',
    description: 'Modern E-commerce Platform',
    tech: ['React', 'Payment Gateway', 'UX Design'],
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000',
    link: 'https://lumina00.netlify.app/'
  },
  {
    id: 'apex-storm',
    title: 'Apex Storm',
    description: '3D Racing Portfolio',
    tech: ['Three.js', 'React', 'GSAP'],
    imageUrl: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=1000',
    link: 'https://theapexstorm.netlify.app/'
  },
  {
    id: 'teamo-dating',
    title: 'Teamo Dating',
    description: 'Smart Social Matchmaking',
    tech: ['Node.js', 'Socket.io', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&q=80&w=1000',
    link: 'https://teamodating.netlify.app/'
  },
  {
    id: 'azure-horizon',
    title: 'Azure Horizon',
    description: 'Hotel Management Analytics',
    tech: ['Fullstack', 'Chart.js', 'PostgreSQL'],
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
    link: 'https://azurehorizon.netlify.app/'
  },
  {
    id: 'restro-luxe',
    title: 'Restro Luxe One',
    description: 'Luxury Reservation System',
    tech: ['Frontend', 'GSAP', 'UX Design'],
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1000',
    link: 'https://examplerestaurant1.netlify.app/'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp-1',
    role: 'Technical GTM Engineer',
    company: 'CODEHTML',
    type: 'Freelance · Remote',
    period: 'July 2025 - Present',
    description: 'Technical GTM Engineer at CODEHTML.',
    points: [
      'Developed and maintained 10+ production web applications and growth platforms for startup clients using React, Node.js, and MongoDB.',
      'Built reusable white-label SaaS modules and automated lead generation engines, accelerating client go-to-market execution.',
      'Collaborated directly with startup founders to design, develop, and deploy production-ready GTM systems.',
      'Built FoodFranchiseIndia.com, a multi-portal SaaS platform featuring CRM, franchise resale, and a programmatic SEO engine generating 10,000+ landing pages.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Full Stack Developer',
    company: 'Axipays',
    type: 'Internship · On-site',
    location: 'Indore, Madhya Pradesh, India · On-site',
    period: 'Jan 2025 - June 2025',
    description: 'Full Stack Developer at Axipays.',
    points: [
      'Developed secure REST APIs and integration documentation that enabled 3+ third-party payment gateways to onboard and communicate with the platform through API key authentication.',
      'Built internal dashboards for payment orchestration, providing real-time visibility into transactions and payment statuses.',
      'Implemented transaction routing and automated retry workflows to improve payment reliability across multiple providers.',
      'Worked with engineers to troubleshoot API integrations, optimize payment flows, and improve overall platform reliability.'
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { id: 'cert-1', title: 'AI Essentials Specialization', issuer: 'Coursera', link: 'https://www.coursera.org/account/accomplishments/specialization/M1ZX6PYXO4UO' },
  { id: 'cert-2', title: 'Full Stack Developer Certification', issuer: 'micro1', link: 'https://micro1-portal-data.s3.amazonaws.com/engineer-certificates/1779019035-9e8ade6d-1b69-4b16-80d5-72674635f8f4.jpg' }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gallery-1',
    url: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Workspace Setup',
    span: 'md:col-span-2 md:row-span-2'
  },
  {
    id: 'gallery-2',
    url: 'https://images.pexels.com/photos/4974914/pexels-photo-4974914.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Coding Late',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'gallery-3',
    url: 'https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Team Collaboration',
    span: 'md:col-span-1 md:row-span-2'
  },
  {
    id: 'gallery-4',
    url: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Web Design',
    span: 'md:col-span-1 md:row-span-1'
  },
  {
    id: 'gallery-5',
    url: 'https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1200',
    title: 'Automation Workflow',
    span: 'md:col-span-2 md:row-span-1'
  }
];

export const UI_ASSISTANT_INSTRUCTION = `
You are "A.L.E.X.", the Smart Interface Assistant for Sandesh Agrawal's portfolio website.
Sandesh is a Technical GTM Engineer based in Indore, India.

Educational Background:
- IPS Academy, Indore: B.Tech in Information Technology (2022-2026), CGPA: 7.2.

Core Identity & Pillars:
- Role: Technical GTM Engineer | Full-Stack Developer
- Pillars: Lead Generation, Outbound Automation, AI Agents, Growth Infrastructure.

Professional Tech Stack:
- GTM & AI: Lead Gen Systems, Outbound Automation, AI Agents (ADK / Groq API), Programmatic SEO, CRM Integration.
- Full-Stack: React 19, Next.js, Node.js, Express.js, TypeScript, MongoDB, PostgreSQL, Python, REST APIs, GraphQL, AWS.

Professional Experience:
- CODEHTML (July 2025 - Present): Technical GTM Engineer (Freelance · Remote). Built 10+ production growth platforms, white-label SaaS modules, and FoodFranchiseIndia.com multi-portal SaaS with programmatic SEO engine.
- Axipays (Jan 2025 - June 2025): Full Stack Developer (Internship · On-site). Developed secure REST APIs and integration documentation enabling 3+ third-party payment gateways.

Key Projects:
- CodeLeads — B2B Lead Generation Platform: Autonomous AI lead generation system using Google ADK and Groq API.
- FoodFranchiseIndia Platform: Multi-portal franchise management SaaS with 6 role-based portals, secure RBAC, programmatic SEO engine.
- The CirCle — Real-Time Enterprise Hub: Scalable collaboration platform with CRDT editing, GraphQL, Redis Sentinel clustering, and Kubernetes.
- Cofound — Founder Networking Platform: Mobile-first founder matchmaking platform built using React 19, Capacitor, and Supabase.
- SwigatoIndia Website: AI-optimized restaurant platform generating 1,115+ city landing pages.

Certifications:
- AI Essentials Specialization — Coursera
- Full Stack Developer Certification — micro1

Keep responses technical yet growth-focused. Emphasize his expertise in GTM engineering, AI agents, lead generation systems, full-stack dev, and programmatic SEO.
`;
