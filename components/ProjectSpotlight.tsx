
import React from 'react';
import { ArrowRight, Activity, ChevronDown } from 'lucide-react';
import { Project } from '../types';

interface ProjectSpotlightProps {
  project: Project;
  alternate?: boolean;
}

const ProjectSpotlight: React.FC<ProjectSpotlightProps> = ({ project, alternate = false }) => {
  return (
    <div className="relative group overflow-hidden bg-white/[0.02] aesthetic-card border-white/10 rounded-[2rem] md:rounded-[3rem] transition-all duration-700 hover:border-white/20">
      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
        <div className={`flex flex-col ${alternate ? 'lg:flex-row-reverse' : 'lg:flex-row'} min-h-[500px] md:min-h-[700px]`}>
          {/* Visual Side */}
          <div className="w-full lg:w-1/2 relative overflow-hidden h-[400px] lg:h-auto bg-white/5 group/image">
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10 hidden lg:block" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent z-10 lg:hidden" />
            
            <img 
              src={project.imageUrl} 
              alt={project.title} 
              className="w-full h-full object-cover grayscale brightness-[0.5] group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay Badges */}
            <div className={`absolute top-10 ${alternate ? 'right-10 items-end' : 'left-10 items-start'} z-20 flex flex-col gap-4`}>
              <div className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-sans font-bold tracking-[0.3em] uppercase shadow-2xl">
                FEATURED
              </div>
            </div>

            <div className={`absolute bottom-10 ${alternate ? 'right-10' : 'left-10'} z-20`}>
               <div className="px-6 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 flex items-center gap-3">
                  <Activity className="h-4 w-4 text-white/40 animate-pulse" />
                  <span className="text-[10px] font-sans font-bold text-white uppercase tracking-[0.2em]">
                    LIVE PRODUCTION
                  </span>
               </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 p-10 md:p-20 lg:p-24 flex flex-col justify-center relative bg-transparent">
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px w-16 bg-white/20"></div>
              <span className="text-white/40 font-sans text-[10px] font-bold tracking-[0.5em] uppercase">CASE STUDY</span>
            </div>

            <h3 className="text-5xl lg:text-8xl font-display font-bold text-white mb-10 transition-colors duration-500 uppercase leading-[0.85] tracking-tighter">
              {project.title}
            </h3>

            <div className="mb-12 group/desc">
               <div className="relative">
                 <p className="text-white/60 text-lg md:text-2xl leading-relaxed font-serif italic">
                   "{project.description}"
                 </p>
               </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-16">
              {project.tech.map((t) => (
                <span key={t} className="px-5 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-sans font-bold text-white/40 uppercase tracking-widest hover:border-white/40 hover:text-white transition-all">
                  {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-6 mt-auto">
              <div className="group/btn relative inline-flex items-center gap-6 px-10 py-5 bg-white text-black rounded-full font-sans font-bold text-xs uppercase tracking-[0.2em] transition-all hover:pr-14 overflow-hidden">
                <span className="relative z-10">VIEW PROJECT</span>
                <ArrowRight className="h-5 w-5 relative z-10 transition-transform group-hover/btn:translate-x-2" />
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectSpotlight;
