
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ExperienceSection from './components/ExperienceSection';
import Projects from './components/Projects';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import GameLauncher from './components/GameLauncher';
import WhatsAppFloat from './components/WhatsAppFloat';
import LoadingScreen from './components/LoadingScreen';

// Pages
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ExperiencePage from './components/ExperiencePage';
import AllProjects from './components/AllProjects';
import AllGallery from './components/AllGallery';
import ContactPage from './components/ContactPage';
import ProjectDetail from './components/ProjectDetail';
import BlogPage from './components/BlogPage';
import CityPage from './components/CityPage';
import { MARQUEE_ITEMS } from './constants';

const App: React.FC = () => {
  const path = window.location.pathname;

  useEffect(() => {
    const updateScrollProgress = () => {
      const el = document.getElementById('scroll-progress');
      if (el) {
        const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        el.style.width = `${(window.scrollY / h) * 100}%`;
      }
    };

    window.addEventListener('scroll', updateScrollProgress);

    return () => {
      window.removeEventListener('scroll', updateScrollProgress);
    };
  }, []);

  // ── Route matching ─────────────────────────────────────────────────────────
  if (path === '/about') return <AboutPage />;
  if (path === '/skills') return <SkillsPage />;
  if (path === '/experience') return <ExperiencePage />;
  if (path === '/projects') return <AllProjects />;
  if (path === '/gallery') return <AllGallery />;
  if (path === '/contact') return <ContactPage />;
  if (path === '/blog') return <BlogPage />;

  if (path === '/locations') {
    return (
      <React.Suspense fallback={<div className="bg-black text-white min-h-screen">Loading...</div>}>
        {React.createElement(React.lazy(() => import('./components/LocationsPage')))}
      </React.Suspense>
    );
  }

  // Handle /web-development-in/:city-slug (Programmatic SEO)
  if (path.startsWith('/web-development-in/')) {
    const citySlug = path.split('/')[2];
    if (citySlug) return <CityPage citySlug={citySlug} />;
  }

  // Handle /blog/:slug (Actual Blogs)
  if (path.startsWith('/blog/')) {
    const slug = path.split('/')[2];
    if (slug) {
      return (
        <React.Suspense fallback={<div className="bg-black text-white min-h-screen">Loading...</div>}>
          {React.createElement(React.lazy(() => import('./components/BlogPost')))}
        </React.Suspense>
      );
    }
  }

  // Handle /projects/:slug (Case Study)
  if (path.startsWith('/projects/')) {
    const slug = path.split('/')[2];
    if (slug) return <ProjectDetail slug={slug} />;
  }

  // ── Homepage ───────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-[#000000] text-slate-200">
      <Navbar />

      <main>
        <Hero />

        {/* Marquee */}
        <div className="py-5 md:py-6 border-y border-white/5 bg-white/[0.01] overflow-hidden whitespace-nowrap">
          <div className="flex animate-marquee space-x-8 md:space-x-12 items-center opacity-30 hover:opacity-50 transition-opacity duration-500">
            {[1, 2, 3, 4].map(i => (
              <div key={i} className="flex space-x-8 md:space-x-12 items-center">
                {MARQUEE_ITEMS.map((item, idx) => (
                  <React.Fragment key={`${i}-${idx}`}>
                    <span className="text-xl md:text-4xl font-syncopate font-bold text-white tracking-tighter uppercase">{item}</span>
                    <div className="w-2 h-2 rounded-full border border-white/40" />
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Home Sections Flow */}
        <section id="biography"><AboutMe /></section>
        <section id="skills"><Skills /></section>
        <section id="experience"><ExperienceSection /></section>
        <section id="projects"><Projects /></section>
        <section id="pricing"><Pricing /></section>
        <section id="contact"><Contact /></section>
      </main>

      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-[10px] font-mono uppercase tracking-[1em]">
          Sandesh Agrawal — {new Date().getFullYear()} — Building Digital Legacies
        </p>
      </footer>

      <GameLauncher accentColor="#ffffff" />
      <WhatsAppFloat />
      <LoadingScreen />

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
