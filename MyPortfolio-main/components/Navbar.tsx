
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Gamepad2 } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC<{ alwaysVisible?: boolean }> = ({ alwaysVisible = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(alwaysVisible);

  const isSubPage = alwaysVisible; // true when on /projects, /gallery, /contact

  useEffect(() => {
    if (alwaysVisible) {
      setScrolled(true); // always show glassmorphism background on sub-pages
      return;
    }
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.8);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [alwaysVisible]);

  // All links are page-level — work from any route
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const logoHref = alwaysVisible ? '/' : '#';
  const handleLogoClick = (e: React.MouseEvent) => {
    if (!alwaysVisible) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-700 ease-in-out ${scrolled ? 'glass-panel py-2 md:py-2.5 border-b border-white/5' : 'bg-transparent py-3 md:py-4'}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a
            href={logoHref}
            onClick={handleLogoClick}
            className="flex items-center group cursor-pointer no-underline"
          >
            <div className="mr-2 md:mr-3 group-hover:rotate-[360deg] transition-all duration-700">
              <Gamepad2 className="h-5 w-5 md:h-6 md:w-6 text-accent" />
            </div>
            <span className="text-sm md:text-xl font-bold tracking-widest text-white font-syncopate uppercase">
              SANDESH
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-200 text-[10px] uppercase tracking-[0.3em] font-bold font-mono relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 + 0.1 }}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 border border-accent/50 text-accent hover:bg-accent hover:text-white text-[10px] font-bold transition-all uppercase tracking-widest font-mono"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              Connect
            </motion.a>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2"
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
            className="md:hidden glass-panel absolute w-full left-0 border-t border-white/5 bg-black/95 backdrop-blur-3xl overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-center text-[10px] font-bold text-gray-400 hover:text-white font-mono uppercase tracking-[0.35em] py-2.5 border-b border-white/5"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center text-[10px] font-bold text-accent py-2.5 font-mono uppercase tracking-[0.35em]"
                onClick={() => setIsOpen(false)}
              >
                Connect
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
