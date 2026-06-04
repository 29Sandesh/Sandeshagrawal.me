
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  imageUrl: string;
  videoUrl?: string;
  isAutoplay?: boolean;
  link?: string;
  featured?: boolean;
}

export interface SkillData {
  subject: string;
  A: number; // Proficiency level 0-100
  fullMark: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
  isThinking?: boolean;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  points: string[];
  location?: string;
  type?: string;
  logo?: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  title: string;
  span?: string;
}
