import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Database, Lightbulb, Compass, Users, Heart, Brain } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const roles = [
    {
      icon: Database,
      title: "Data Engineer & Developer",
      description: "Bringing structural logic and informatics expertise to problem-solving."
    },
    {
      icon: Brain,
      title: "Strategic Life Coach",
      description: "Bridging the gap between current reality and peak potential through mindset shifts."
    },
    {
      icon: Lightbulb,
      title: "Holistic Instructor",
      description: "Educating and mentoring individuals to master both technical and life skills."
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#050505] text-gray-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Header Section */}
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <span className="text-orange-500 font-bold uppercase tracking-[0.3em] text-xs mb-4 block">The Architect of Growth</span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Meet <span className="text-orange-500">Mamtha Gowda G S</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            Data Engineer by profession, Life Coach by passion. I combine the 
            analytical precision of <strong>Informatics</strong> with the soulful 
            art of <strong>Personal Transformation</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white">Engineering <span className="italic text-orange-500">Better Lives</span></h3>
            
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              As an <strong>Informatics Developer</strong> and <strong>Data Engineer</strong>, I understand how systems work. I know that if the input is flawed, the output will be too. I apply this same "Engineering Mindset" to Life Coaching.
            </p>
            
            <p className="text-gray-400 leading-relaxed text-lg font-light">
              Most people live life with "legacy code"—old limiting beliefs and outdated habits. As your coach, I help you <strong>debug your mindset</strong> and reprogram your path toward resilience, career growth, and self-discovery.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500">
                  <Heart size={20} />
                </div>
                <span className="font-medium">Empathetic Informatics Developer</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
                  <Database size={20} />
                </div>
                <span className="font-medium">Systems-Oriented Life Coach</span>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex gap-12">
              <div>
                <div className="text-3xl font-bold text-white">50+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">Clients Empowered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">Data</div>
                <div className="text-xs uppercase tracking-widest text-gray-500">Driven Results</div>
              </div>
            </div>
          </motion.div>

          {/* Feature Grid */}
          <motion.div
            className="grid grid-cols-1 gap-6"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {roles.map((role, index) => (
              <motion.div
                key={index}
                className="p-8 bg-white/[0.02] border border-white/10 rounded-3xl hover:bg-white/[0.05] hover:border-orange-500/30 transition-all duration-500 group flex gap-6"
                whileHover={{ x: 10 }}
              >
                <div className="w-16 h-16 shrink-0 bg-orange-500/10 rounded-2xl flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all">
                  <role.icon size={30} />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{role.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed font-light">{role.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Action Callout */}
        <motion.div
          className="mt-20 p-10 rounded-[40px] bg-gradient-to-r from-orange-600/20 to-blue-600/20 border border-white/10 backdrop-blur-sm text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Optimize Your Personal Operating System?</h3>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Whether you need help with technical data architecture or personal mindset architecture, I’m here to guide the way.
          </p>
          <button className="px-12 py-4 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20">
            Let's Start Building
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;