import React, { useRef, useState } from 'react';
import { ExternalLink, Terminal, Activity } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="h-full group/card">
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="block h-full no-underline"
      >
        <div
          className="relative bg-white/[0.02] aesthetic-card border-white/10 rounded-3xl overflow-hidden transition-all duration-500 h-full flex flex-col group hover:border-white/30 hover:bg-white/[0.05] hover:-translate-y-2"
        >
          {/* Media Header */}
          <div className="relative h-48 md:h-64 overflow-hidden bg-white/5 border-b border-white/10">
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale brightness-[0.6] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
            
            <div className="absolute top-4 left-4 z-20">
               <div className="px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  <span className="text-[10px] font-sans font-bold text-white uppercase tracking-[0.2em]">
                    ACTIVE
                  </span>
               </div>
            </div>
          </div>

          {/* Card Content */}
          <div className="p-8 flex-1 flex flex-col relative">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center">
                  <Terminal className="h-4 w-4 text-white/40" />
                </div>
                <div>
                  <div className="text-[10px] font-sans font-bold text-white/20 uppercase tracking-[0.3em]">PROJECT</div>
                  <div className="text-[10px] font-sans font-bold text-white uppercase tracking-[0.2em]">{project.id.slice(0, 3).toUpperCase()}</div>
                </div>
              </div>
            </div>

            <h3 className="text-3xl font-display font-bold text-white mb-4 group-hover:text-white/80 transition-colors uppercase tracking-tighter leading-none">
              {project.title}
            </h3>
            
            <p className="hidden md:block text-white/40 text-sm leading-relaxed mb-8 font-sans line-clamp-2">
              {project.description}
            </p>

            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t} className="text-[10px] font-sans font-bold text-white/40 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full uppercase tracking-wider">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2">
                   <div className="w-1 h-1 bg-white/20 rounded-full"></div>
                   <span className="text-[10px] font-sans font-bold text-white/20 uppercase tracking-widest">STABLE</span>
                </div>
                <div className="flex items-center gap-2 text-white/40 group-hover:text-white transition-colors">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em]">EXPLORE</span>
                  <ExternalLink className="h-3 w-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;