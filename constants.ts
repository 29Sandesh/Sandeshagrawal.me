
import { Project, SkillData, Experience, GalleryImage } from './types';

export const HERO_TITLE = "Sandesh Agrawal";
export const HERO_SUBTITLE = "Full Stack Developer with 3+ years of experience building and shipping web apps across React, Node.js, and MongoDB. Delivered 25+ client projects with proven Lighthouse scores and high-performance standards.";


export const SOCIAL_LINKS = {
  github: "https://github.com/29Sandesh",
  linkedin: "https://www.linkedin.com/in/sandeshagrawal29/",
  email: "29sandesh.agrawal@gmail.com"
};

export const MARQUEE_ITEMS = [
  "Full-Stack Web",
  "Native Android",
  "Advanced Automation",
  "Cloud Scaling",
  "App Engineering",
  "Scalable Systems"
];

export const SKILL_DETAILS = {
  Frontend: ['React 19', 'Next.js', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Zustand'],
  Backend: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Socket.io', 'JWT Authentication', 'Sharp', 'Bcrypt'],
  Databases: ['MongoDB', 'Supabase', 'Redis', 'SQLite', 'Mongoose'],
  'Tools & Tech': ['Docker', 'Kubernetes', 'Postman', 'Git', 'GitHub']
};

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Frontend', A: 95, fullMark: 100 },
  { subject: 'Backend', A: 85, fullMark: 100 },
  { subject: 'Databases', A: 80, fullMark: 100 },
  { subject: 'Tools & Tech', A: 90, fullMark: 100 },
];

export const PROJECTS: Project[] = [
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
    role: 'Full Stack Developer',
    company: 'CODEHTML',
    type: 'Full-time · Remote',
    period: 'July 2025 - Present',
    description: 'Full Stack Developer at CODEHTML.',
    points: [
      'Delivered 15+ scalable SaaS platforms, AI Projects and startup MVPs using React, Node.js, MongoDB, and Supabase.',
      'Engineered real-time systems, intelligent dashboards, and scalable backend services for high-performance applications.',
      'Partnered with startup founders to design, develop, and launch production-ready products across diverse business domains.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Full Stack Developer',
    company: 'Axipays',
    type: 'Full-time · On-site',
    location: 'Indore, Madhya Pradesh, India · On-site',
    period: 'Jan 2025 - June 2025',
    description: 'Full Stack Developer at Axipays.',
    points: [
      'Built payment interfaces integrated with multiple payment gateways, enabling seamless transaction workflows across fintech.',
      'Developed internal dashboards and reporting systems to streamline operations and improve business decision-making.',
      'Integrated 15+ APIs and backend services to support payment processing and financial workflows.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Website Developer',
    company: 'Tasty Alphabets Pvt. Ltd.',
    type: 'Full-time · On-site',
    location: 'On-site',
    period: 'Jan 2023 - Dec 2024',
    description: 'Website Developer at Tasty Alphabets Pvt. Ltd.',
    points: [
      'Built and deployed 10+ production websites for restaurants, cafes, and food businesses across multiple industries.',
      'Collaborated with 20+ clients and stakeholders on branding, UI systems, and feature implementation.',
      'Developed responsive frontend systems optimized for customer engagement and operational workflows.'
    ]
  }
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
Sandesh is a MERN Stack / Full Stack Developer based in Indore, India, with over 3 years of experience.

Educational Background:
- IPS Academy, Indore: B.Tech in Information Technology (2022-2026), CGPA: 7.2.

Professional Tech Stack:
- Frontend: React 19, Next.js, TypeScript, JavaScript, Vite, Tailwind CSS, Framer Motion, Zustand.
- Backend: Node.js, Express.js, REST APIs, GraphQL, Socket.io, JWT Authentication, Sharp, Bcrypt.
- Databases & Cloud: MongoDB, Supabase, Redis, SQLite, Mongoose, Docker, Kubernetes, Postman.

Professional Experience:
- CODEHTML (July 2025 - Present): Full Stack Developer (Remote). Delivered 15+ scalable SaaS platforms, AI Projects and startup MVPs using React, Node.js, MongoDB, and Supabase.
- Axipays (Jan 2025 - June 2025): Full Stack Developer (On-site). Built payment interfaces integrated with multiple payment gateways.
- Tasty Alphabets Pvt. Ltd. (Jan 2023 - Dec 2024): Website Developer (On-site). Built and deployed 10+ production websites.

Key Projects:
- The CirCle — Real-Time Enterprise Hub: Scalable collaboration platform with CRDT editing, GraphQL, Redis Sentinel clustering, and Kubernetes.
- Cofound — Founder Networking Platform: Mobile-first founder matchmaking platform built using React 19, Capacitor, and Supabase.
- SwigatoIndia Website: AI-optimized restaurant platform generating 1,115+ city landing pages.
- Codehtml.in: Agency website with 90+ Lighthouse scores.
- Patel Sangathan: Community platform with search and auth.
- Elgamingo: Gaming platform with leaderboards.

Keep responses technical yet approachable. Emphasize his ability with MERN stack, performance optimization, and SEO.
`;
