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
          ? 'bg-black border-b-2 border-zinc-800 py-2.5 md:py-3' 
          : 'bg-black/90 backdrop-blur-md py-3 md:py-4 border-b border-zinc-900'
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
              stroke="#9b1c1c" 
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
            <span className="text-lg md:text-xl font-headline font-black tracking-tight text-white uppercase transition-colors group-hover:text-[var(--vintage-accent-1)]">
              SANDESH <span className="font-light italic text-[var(--vintage-accent-1)] group-hover:text-white">AGRAWAL.</span>
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors duration-250 text-[10px] uppercase tracking-[0.2em] font-bold font-body relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--vintage-accent-1)] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://wa.me/9303228082"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border-2 border-zinc-800 hover:border-[#25D366] hover:text-[#25D366] text-white text-[9px] font-bold transition-all uppercase tracking-widest font-body bg-zinc-950 rounded-none"
            >
              WHATSAPP NOW ➲
            </a>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-white p-2"
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
            className="md:hidden absolute w-full left-0 top-full border-t-4 border-zinc-800 bg-black/95 backdrop-blur-3xl overflow-hidden"
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
                  className="block text-center text-xs font-bold text-zinc-400 hover:text-white font-body uppercase tracking-[0.2em] py-3 border-b border-zinc-900"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/9303228082"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-xs font-bold text-[#25D366] py-3 font-body uppercase tracking-[0.2em]"
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
