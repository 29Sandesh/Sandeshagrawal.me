
import { Project, SkillData, Experience, GalleryImage } from './types';

export const HERO_TITLE = "Sandesh Agrawal";
export const HERO_SUBTITLE = "Frontend Developer building high-performance React apps with proven Lighthouse scores up to 97 across production projects. Strong focus on scalability, clean architecture, and REST API integration.";

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
  Frontend: ['React.js', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'Grid', 'Responsive Design'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  Databases: ['MongoDB', 'MySQL'],
  'Tools & Tech': ['Git', 'GitHub', 'Vite', 'npm', 'VS Code']
};

export const SKILLS_DATA: SkillData[] = [
  { subject: 'Frontend', A: 95, fullMark: 100 },
  { subject: 'Backend', A: 85, fullMark: 100 },
  { subject: 'Databases', A: 80, fullMark: 100 },
  { subject: 'Tools & Tech', A: 90, fullMark: 100 },
];

export const PROJECTS: Project[] = [
  {
    id: 'swigato-india',
    title: 'Swigato India',
    description: 'Business Website · Scored 97 on Lighthouse Desktop, 80+ Mobile. 90+ on SEO, accessibility & best practices.',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://swigatoindia.in/',
    featured: true
  },
  {
    id: 'codehtml-agency',
    title: 'Code Html.in',
    description: 'Web Engineering Agency · Delivered 15+ client websites with advanced automated architecture and high performance standards.',
    tech: ['Next.js', 'React', 'Advanced Systems'],
    imageUrl: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://codehtml.in/',
    featured: true
  },
  {
    id: 'el-gamingo',
    title: 'El Gamingo',
    description: 'Interactive Gaming Hub',
    tech: ['React', 'Firebase', 'Tailwind CSS'],
    imageUrl: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://elgamingo.store/',
    featured: true
  },
  {
    id: 'tinkus-cafe',
    title: "Tinku's Cafe",
    description: 'Restaurant Website · Clean, appetizing web presence for a local cafe with interactive menu.',
    tech: ['React', 'Vite', 'Responsive Design'],
    imageUrl: 'https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://tinkuscafe.netlify.app/#/',
    featured: true
  },
  {
    id: 'cafe-de-casa',
    title: 'Cafe De Casa',
    description: 'Digital Dining Ecosystem · QR-based digital menu with real-time ordering and an interactive UI.',
    tech: ['React', 'QR Technology', 'Real-time Updates'],
    imageUrl: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://cafedecasaa.netlify.app/',
    featured: true
  },
  {
    id: 'patel-sangh-mp',
    title: 'Patel Sangh MP',
    description: 'Community Organization Website · Informational platform with clear navigation and responsive layouts.',
    tech: ['React', 'Tailwind CSS', 'Responsive Design'],
    imageUrl: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://patelsanghmp.com/'
  },
  {
    id: 'computer-point-plus',
    title: 'Computer Point Plus',
    description: 'Computer Services Website · Business-focused web presence for IT services and support offerings.',
    tech: ['React', 'Vite', 'Business Website'],
    imageUrl: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://computerpointplus.com/'
  },
  {
    id: 'gaadi-market',
    title: 'Gaadi Market',
    description: 'Automotive Marketplace Website · Vehicle-focused listing experience designed for fast browsing.',
    tech: ['React', 'Marketplace UI', 'Responsive Design'],
    imageUrl: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://gaadimarket.in/'
  },
  {
    id: 'lumina-fashion',
    title: 'Lumina',
    description: 'Modern E-commerce Platform',
    tech: ['React', 'Payment Gateway', 'UX Design'],
    imageUrl: 'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://lumina00.netlify.app/'
  },
  {
    id: 'apex-storm',
    title: 'Apex Storm',
    description: '3D Racing Portfolio',
    tech: ['Three.js', 'React', 'GSAP'],
    imageUrl: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://theapexstorm.netlify.app/'
  },
  {
    id: 'teamo-dating',
    title: 'Teamo Dating',
    description: 'Smart Social Matchmaking',
    tech: ['Node.js', 'Socket.io', 'MongoDB'],
    imageUrl: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://teamodating.netlify.app/'
  },
  {
    id: 'azure-horizon',
    title: 'Azure Horizon',
    description: 'Hotel Management Analytics',
    tech: ['Fullstack', 'Chart.js', 'PostgreSQL'],
    imageUrl: 'https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://azurehorizon.netlify.app/'
  },
  {
    id: 'restro-luxe',
    title: 'Restro Luxe One',
    description: 'Luxury Reservation System',
    tech: ['Frontend', 'GSAP', 'UX Design'],
    imageUrl: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=1200',
    link: 'https://examplerestaurant1.netlify.app/'
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'exp-1',
    role: 'Software Developer',
    company: 'CODEHTML.in',
    type: 'Full-time',
    period: 'Oct 2025 - Present · 6 mos',
    description: 'Software Developer at CODEHTML.in.',
    points: [
      'Delivered 15+ client websites with Lighthouse scores of 97 (Desktop) and 80+ (Mobile).',
      'Built a shared React component library used across all client projects, reducing redundant development effort and ensuring UI consistency.',
      'Improved page load performance by ~35% through code splitting, lazy loading, and asset compression.',
      'Maintained 90+ scores across SEO, accessibility, and best practices on every project delivered.'
    ]
  },
  {
    id: 'exp-2',
    role: 'Frontend Developer',
    company: 'AXIPAYS',
    type: 'Full-time',
    location: 'Indore, Madhya Pradesh, India · On-site',
    period: 'Jan 2025 - Oct 2025 · 10 mos',
    description: 'Frontend Developer at AXIPAYS.',
    points: [
      'Developed secure payment interfaces in React with integrated payment gateways, ensuring reliable and consistent transaction flows.',
      'Integrated REST APIs with structured error handling, input validation, and loading states throughout all flows.',
      'Reduced unnecessary re-renders through memoization and component optimization, improving UI responsiveness.',
      'Aligned API contracts with backend teams early in the process, reducing integration delays and rework.'
    ]
  },
  {
    id: 'exp-3',
    role: 'Frontend Developer',
    company: 'Tasty Alphabets Private Limited',
    type: 'Full-time',
    location: 'On-site',
    period: 'Jan 2023 - Dec 2024 · 2 yrs',
    description: 'Frontend Developer.',
    points: [
      'Built multiple client websites including dating and entertainment platforms, averaging 80+ Lighthouse scores across performance, SEO, and accessibility.',
      'Delivered several responsive websites on time, working directly with clients on design and requirements.'
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
Sandesh is a Frontend Developer based in Indore, India.

Educational Background:
- IPS Academy, Indore: IT Degree (2022-2026).

Professional Tech Stack:
- Frontend: React, Next.js, JS, Tailwind, GSAP.
- Backend: Node.js, Express, REST APIs.
- Databases: MongoDB, MySQL.

Professional Experience:
- CODEHTML.in (Oct 2025 - Present): Software Developer.
- AXIPAYS (Jan 2025 - Oct 2025): Frontend Developer.
- Tasty Alphabets Private Limited (Jan 2023 - Dec 2024): Frontend Developer.

Key Projects:
- Swigato India: Scored 97 on Lighthouse Desktop.
- Codehtml.in: Web Engineering.
- Cafe De Casa: Digital menu platform.
- Lumina: Modern e-commerce solution.
- sandeshagrawal.me: Portfolio.

Keep responses technical yet approachable. Emphasize his ability with React, performance optimization, and API integration.
`;
