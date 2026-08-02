
import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import ExperienceSection from './components/ExperienceSection';
import Projects from './components/Projects';
import Contact from './components/Contact';
import SocialProofStrip from './components/SocialProofStrip';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

// Pages
import CaseStudiesPage from './components/CaseStudiesPage';
import AboutPage from './components/AboutPage';
import SkillsPage from './components/SkillsPage';
import ExperiencePage from './components/ExperiencePage';
import AllProjects from './components/AllProjects';
import AllGallery from './components/AllGallery';
import ContactPage from './components/ContactPage';
import ProjectDetail from './components/ProjectDetail';
import BlogPage from './components/BlogPage';
import CityPage from './components/CityPage';
import StatePage from './components/StatePage';
import NationalGTMHub from './components/NationalGTMHub';
import BestGTMBlogPage from './components/BestGTMBlogPage';
import GTMVerticalsHub from './components/GTMVerticalsHub';
import VerticalGTMPage from './components/VerticalGTMPage';
import NotFoundPage from './components/NotFoundPage';
import SEOHead from './components/SEOHead';
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
  if (path === '/contact') return <ContactPage />;
  if (path === '/blog') return <BlogPage />;

  if (path === '/locations') {
    return (
      <React.Suspense fallback={<div className="bg-black text-white min-h-screen">Loading...</div>}>
        {React.createElement(React.lazy(() => import('./components/LocationsPage')))}
      </React.Suspense>
    );
  }

  // Handle /gtm-engineer national hub, state hub, and city landing routes
  if (path === '/gtm-engineer' || path === '/gtm-engineer/') {
    return <NationalGTMHub />;
  }

  if (path.startsWith('/gtm-engineer/')) {
    const parts = path.replace(/\/+$/, '').split('/').filter(Boolean);
    // parts[0] is 'gtm-engineer'
    if (parts.length === 2) {
      // /gtm-engineer/:stateSlug
      return <StatePage stateSlug={parts[1]} />;
    } else if (parts.length >= 3) {
      // /gtm-engineer/:stateSlug/:citySlug
      return <CityPage stateSlug={parts[1]} citySlug={parts[2]} />;
    }
  }

  // Backward compatibility for /web-development-in/:city-slug
  if (path.startsWith('/web-development-in/')) {
    const citySlug = path.split('/')[2];
    if (citySlug) return <CityPage citySlug={citySlug} />;
  }

  // Handle /blog/:slug (Actual Blogs & Best GTM Engineer Listicles)
  if (path.startsWith('/blog/')) {
    const slug = path.split('/')[2];
    if (slug) {
      if (slug.startsWith('best-gtm-engineer-in-') || slug === 'best-gtm-engineer-in-india') {
        const locationSlug = slug.replace('best-gtm-engineer-in-', '');
        return <BestGTMBlogPage slug={locationSlug} />;
      }

      return (
        <React.Suspense fallback={<div className="bg-black text-white min-h-screen">Loading...</div>}>
          {React.createElement(React.lazy(() => import('./components/BlogPost')))}
        </React.Suspense>
      );
    }
  }

  // Handle /services and /services/:verticalSlug (High-Intent B2B Services)
  if (path === '/services' || path === '/services/') {
    return <GTMVerticalsHub />;
  }

  if (path.startsWith('/services/')) {
    const slug = path.split('/')[2];
    if (slug) return <VerticalGTMPage slug={slug} />;
  }

  // Handle /case-studies
  if (path === '/case-studies' || path === '/case-studies/') {
    return <CaseStudiesPage />;
  }

  // Handle /projects/:slug (Case Study)
  if (path.startsWith('/projects/')) {
    const slug = path.split('/')[2];
    if (slug) return <ProjectDetail slug={slug} />;
  }

  // ── 404 Fallback for unknown top-level routes ──────────────────────────────
  if (path !== '/' && path !== '') {
    return <NotFoundPage />;
  }

  // ── Homepage ───────────────────────────────────────────────────────────────
  return (
    <>
      <SEOHead 
        title="Sandesh Agrawal | Technical GTM Engineer"
        description="Sandesh Agrawal is a Technical GTM Engineer building AI-powered systems that drive growth: lead generation platforms, outbound automation, AI agents, and growth infrastructure."
      />
      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <Navbar />

        <main>
          <Hero />
          <SocialProofStrip />

          {/* Home Sections Flow */}
          <section id="biography"><AboutMe /></section>
          <section id="skills"><Skills /></section>
          <section id="projects"><Projects /></section>
          <section id="contact"><Contact /></section>
        </main>

        <Footer />

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
