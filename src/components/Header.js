import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Heart, User, Send, Compass } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Life Coach focused navigation
  const navItems = [
    { id: 'about', label: 'My Story', icon: User },
    { id: 'services', label: 'Services', icon: Sparkles },
    { id: 'philosophy', label: 'Philosophy', icon: Compass },
    { id: 'testimonials', label: 'Testimonials', icon: Heart },
    { id: 'contact', label: 'Get in Touch', icon: Send },
  ];

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-black/80 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <motion.div
            className="flex flex-col cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ scale: 1.02 }}
          >
            <span className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight">
              Mamtha Gowda
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-bold">
              Life Coach
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className="text-sm text-gray-300 hover:text-orange-400 transition-colors font-medium tracking-wide uppercase"
                    onClick={() => scrollToSection(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contact')}
              className="px-6 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-orange-500 hover:text-white transition-all shadow-lg"
            >
              Book a Call
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 top-[72px] bg-black z-40 lg:hidden p-6"
          >
            <ul className="flex flex-col gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    className="flex items-center gap-4 text-2xl font-serif text-white hover:text-orange-500 transition-colors w-full"
                    onClick={() => scrollToSection(item.id)}
                  >
                    <item.icon className="text-orange-500" size={24} />
                    {item.label}
                  </button>
                </li>
              ))}
              <li className="mt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="w-full py-4 bg-orange-500 text-white rounded-2xl font-bold text-lg"
                >
                  Start Your Transformation
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;