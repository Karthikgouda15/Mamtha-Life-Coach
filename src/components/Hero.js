import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Linkedin, Mail, ArrowDown, Sparkles, Heart, Sun, Calendar } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  // Replace these with your actual links if they differ
  const linkedInUrl = "https://www.linkedin.com/in/mamthagowda/";
  const emailAddress = "mailto:mamthagowda@gmail.com";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#050505]" id="hero">
      {/* Background Zen Glows */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-16">

          {/* LEFT SIDE: TEXT CONTENT */}
          <motion.div
            className="flex-[1.2] text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-orange-400 font-medium text-sm backdrop-blur-sm"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Sparkles size={14} />
              <span>Transform Your Journey</span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-400 mb-6 tracking-tighter leading-[1.1]"
            >
              Mamtha <br /> Gowda G S
            </motion.h1>

            <motion.div className="text-2xl md:text-4xl text-gray-300 font-light mb-8 h-12">
              Empowering your{' '}
              <TypeAnimation
                sequence={['Mindset', 2000, 'Career', 2000, 'Self-Discovery', 2000]}
                repeat={Infinity}
                className="font-bold text-orange-500 italic"
              />
            </motion.div>

            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
              I help individuals navigate through personal and professional growth with actionable strategies and a holistic approach to life coaching.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-12">
              {/* Primary Action Button */}
              <a 
                href={emailAddress} 
                className="px-10 py-4 bg-white text-black rounded-2xl font-bold hover:bg-orange-500 hover:text-white transition-all flex items-center gap-2"
              >
                <Calendar size={20} />
                Book a Session
              </a>
              
              {/* Social Links */}
              <div className="flex gap-4 ml-2">
                <a 
                  href={linkedInUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all"
                >
                  <Linkedin size={20} />
                </a>
                <a 
                  href={emailAddress}
                  className="p-3 bg-white/5 rounded-full border border-white/10 text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: CIRCULAR VISUAL */}
          <motion.div
            className="flex-1 relative max-w-md w-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <div className="relative flex justify-center items-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute w-[300px] h-[300px] md:w-[420px] md:h-[420px] rounded-full border border-dashed border-orange-500/20"
              />

              <div className="relative w-72 h-72 md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(249,115,22,0.2)] z-10 group">
                <img
                  src="/images/Mamtha.jpeg" 
                  alt="Mamtha Gowda"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              <motion.div
                className="absolute -bottom-4 -right-2 bg-white/10 backdrop-blur-xl px-5 py-3 rounded-2xl border border-white/20 z-20 shadow-2xl text-white"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-orange-500/20 rounded-lg"><Sun className="text-orange-400" size={18} /></div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">Approach</span>
                    <span className="text-sm font-bold">Holistic Growth</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-4 -left-2 p-4 bg-black/40 backdrop-blur-md rounded-full border border-white/10 z-20 shadow-xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Heart className="text-red-500 fill-red-500" size={18} />
              </motion.div>
            </div>
          </motion.div>

        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2 text-gray-500"
          onClick={scrollToAbout}
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">Discover</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}><ArrowDown size={20} /></motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;