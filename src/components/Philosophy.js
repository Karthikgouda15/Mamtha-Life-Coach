import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Anchor, Sun, Zap, Feather, ShieldCheck, RefreshCw } from 'lucide-react';

const Philosophy = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const principles = [
    {
      title: "The Informatics of Self",
      icon: RefreshCw,
      description: "Just as data requires a clean structure to provide value, our lives require mental clarity to function. I help you 'clean' your mental data to find real meaning."
    },
    {
      title: "Resilient Architecture",
      icon: ShieldCheck,
      description: "Growth isn't just about speed; it's about building a foundation that doesn't crumble under pressure. We engineer a life that is built to last."
    },
    {
      title: "Soulful Logic",
      icon: Sun,
      description: "I believe logic and intuition are not enemies. True success happens when your analytical brain and your heart are speaking the same language."
    },
    {
      title: "Dynamic Evolution",
      icon: Zap,
      description: "You are not a finished product. You are a continuous project. My philosophy is rooted in constant iteration and intentional self-discovery."
    }
  ];

  return (
    <section id="philosophy" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative Zen Ring */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-orange-500/5 rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500"
          >
            <Feather size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 tracking-tight">
            My <span className="text-orange-500 italic">Philosophy</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Success is not just an outcome—it is an internal alignment. 
            I combine the precision of engineering with the depth of human connection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {principles.map((item, index) => (
            <motion.div
              key={index}
              className="group p-8 rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-orange-500/30 transition-all duration-500"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="flex items-start gap-6">
                <div className="p-4 bg-orange-500/5 rounded-2xl text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote Block */}
        <motion.div
          className="mt-24 max-w-4xl mx-auto text-center p-12 rounded-[50px] border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <span className="text-5xl text-orange-500 font-serif leading-none block mb-4">“</span>
          <p className="text-2xl md:text-3xl font-serif italic text-gray-200 mb-6">
            Everything in your life is a system. If you aren't happy with the results, 
            we don't just change the action—we redesign the architecture.
          </p>
          <div className="h-px w-24 bg-orange-500 mx-auto" />
          <span className="mt-4 block text-sm uppercase tracking-widest text-orange-500 font-bold">
            Mamtha Gowda G S
          </span>
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;