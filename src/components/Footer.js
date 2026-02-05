import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Instagram, 
  Mail, 
  Heart, 
  Sparkles, 
  ArrowUpCircle,
  Phone
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/mamtha-g-b8770495/",
      label: "LinkedIn"
    },
    {
      icon: Instagram,
      href:  "https://www.instagram.com/mamtha_gouda/",
      label: "Instagram"
    },
    {
      icon: Mail,
      href: "mailto:mamthasn@gmail.com",
      label: "Email"
    },
    {
      icon: Phone,
      href: "tel:+910000000000",
      label: "Call"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/5 py-16 text-gray-400">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Identity */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col mb-6">
              <span className="text-2xl font-serif font-bold text-white tracking-tight">
                Mamtha Gowda G S
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-orange-500 font-bold">
                Life Coach • Instructor • Data Engineer
              </span>
            </div>
            <p className="max-w-md leading-relaxed mb-8 text-lg font-light">
              Helping you rewrite your narrative and engineer a life of 
              unshakable clarity, purpose, and balance.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-2xl hover:bg-orange-500 hover:text-white transition-all text-white border border-white/5"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-orange-500 transition-colors font-light">My Story</a></li>
              <li><a href="#philosophy" className="hover:text-orange-500 transition-colors font-light">Philosophy</a></li>
              <li><a href="#services" className="hover:text-orange-500 transition-colors font-light">Coaching Paths</a></li>
              <li><a href="#testimonials" className="hover:text-orange-500 transition-colors font-light">Voices of Evolution</a></li>
            </ul>
          </motion.div>

          {/* Inspirational Note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Weekly Wisdom</h4>
            <p className="text-sm leading-relaxed mb-6 font-light">
              Subscribe to get insights on mindset architecture and emotional intelligence.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-orange-500 w-full"
              />
              <button className="p-2 bg-orange-500 text-white rounded-xl hover:bg-orange-600 transition-colors">
                <Sparkles size={18} />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-1.5 font-light">
            <p>© {currentYear} Mamtha Gowda G S.</p>
            <p className="text-gray-600 ml-2">Dedicated to your</p>
            <Heart size={14} className="text-orange-500 fill-orange-500" />
            <p>transformation.</p>
          </div>

          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors group"
          >
            <span className="text-xs uppercase tracking-widest font-bold">Back to top</span>
            <ArrowUpCircle size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;