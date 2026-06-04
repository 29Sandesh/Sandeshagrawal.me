
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
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

// Components
import HeroVideoIntro from './components/HeroVideoIntro';

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
  const [showIntro, setShowIntro] = useState(path === '/' || path === '');

  // Lock body scroll when intro is active
  useEffect(() => {
    if (showIntro && (path === '/' || path === '')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showIntro, path]);

  // Bring back video intro when scrolling up at top of homepage
  useEffect(() => {
    if (showIntro || (path !== '/' && path !== '')) return;

    let touchStartY: number | null = null;

    const handleWheel = (e: WheelEvent) => {
      if (window.scrollY <= 5 && e.deltaY < -10) {
        setShowIntro(true);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartY = e.touches[0].clientY;
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (touchStartY === null || e.touches.length !== 1) return;
      const currentY = e.touches[0].clientY;
      const deltaY = currentY - touchStartY; // positive deltaY means swipe down / scroll up
      if (window.scrollY <= 5 && deltaY > 40) {
        setShowIntro(true);
        touchStartY = null;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, [showIntro, path]);

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
    <>
      <AnimatePresence mode="wait">
        {showIntro && (
          <HeroVideoIntro onDismiss={() => setShowIntro(false)} />
        )}
      </AnimatePresence>

      <div className="min-h-screen bg-[#000000] text-slate-200">
        <Navbar />

        <main>
          <Hero />

          {/* Home Sections Flow */}
          <section id="biography"><AboutMe /></section>
          <section id="skills"><Skills /></section>
          <section id="experience"><ExperienceSection /></section>
          <section id="projects"><Projects /></section>
          <section id="pricing"><Pricing /></section>
          <section id="contact"><Contact /></section>
        </main>

        <footer className="py-16 border-t-4 border-zinc-800 bg-black text-center">
          <p className="text-zinc-500 text-[10px] font-body uppercase tracking-[0.8em]">
            Sandesh Agrawal — {new Date().getFullYear()} — Building Elite Digital Legacies
          </p>
        </footer>

        <GameLauncher accentColor="#ffffff" />
        <WhatsAppFloat />

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
    </>
  );
};

export default App;
