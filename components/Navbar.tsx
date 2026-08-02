import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC<{ alwaysVisible?: boolean }> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const handleLogoClick = (e: React.MouseEvent) => {
    if (window.location.pathname === '/' || window.location.pathname === '') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white border-b border-slate-200 py-2.5 md:py-3 shadow-sm' 
          : 'bg-white/95 backdrop-blur-md py-3 md:py-4 border-b border-slate-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            className="flex items-center gap-3 group cursor-pointer no-underline"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="#2563eb" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 group-hover:rotate-12"
            >
              <line x1="6" x2="10" y1="12" y2="12"/>
              <line x1="8" x2="8" y1="10" y2="14"/>
              <line x1="15" x2="15.01" y1="13" y2="13"/>
              <line x1="18" x2="18.01" y1="11" y2="11"/>
              <rect width="20" height="12" x="2" y="6" rx="2"/>
            </svg>
            <span className="text-lg md:text-xl font-headline font-black tracking-tight text-slate-900 uppercase transition-colors group-hover:text-blue-600">
              SANDESH <span className="font-light italic text-blue-600 group-hover:text-slate-900">AGRAWAL.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-blue-600 transition-colors duration-250 text-[11px] uppercase tracking-[0.2em] font-bold font-body relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://wa.me/9303228082"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold transition-all uppercase tracking-widest font-body rounded-lg shadow-md shadow-blue-500/20"
            >
              WHATSAPP NOW ➲
            </a>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="text-slate-700 hover:text-blue-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden absolute w-full left-0 top-full border-t border-slate-200 bg-white/98 backdrop-blur-xl overflow-hidden shadow-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-center text-xs font-bold text-slate-700 hover:text-blue-600 font-body uppercase tracking-[0.2em] py-3 border-b border-slate-100"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/9303228082"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs font-bold text-white bg-blue-600 py-3 rounded-lg font-body uppercase tracking-[0.2em]"
                onClick={() => setIsOpen(false)}
              >
                WHATSAPP NOW ➲
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
