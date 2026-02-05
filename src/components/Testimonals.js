import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote, Star, UserCheck, Sparkles } from 'lucide-react';

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const successStories = [
    {
      name: "Sarah Jenkins",
      role: "Creative Director",
      content: "Mamtha has an incredible gift for seeing the patterns we can't see ourselves. She helped me dismantle years of limiting beliefs and finally step into my authentic power.",
      tags: ["Self-Discovery", "Confidence"],
      rating: 5
    },
    {
      name: "David Miller",
      role: "Entrepreneur",
      content: "I came to Mamtha feeling completely burnt out and lost. Her sessions provided the clarity I needed to realign my daily habits with my core values. I feel like myself again.",
      tags: ["Mindset Mastery", "Balance"],
      rating: 5
    },
    {
      name: "Elena Rodriguez",
      role: "Non-Profit Founder",
      content: "Working with Mamtha was the best investment I've made in my personal growth. She provides a safe, non-judgmental space while pushing you to reach your highest potential.",
      tags: ["Emotional Intelligence", "Growth"],
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Senior Executive",
      content: "The transformation wasn't just in my career, but in my home life too. I've learned how to communicate with intention and live with a sense of peace I didn't think was possible.",
      tags: ["Communication", "Inner Peace"],
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            Real Transformation
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Voices of <span className="text-orange-500 italic">Evolution</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Every journey is unique. These are the stories of individuals who decided to stop settling and start evolving.
          </p>
        </motion.div>

        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {successStories.map((story, index) => (
            <motion.div
              key={index}
              className="break-inside-avoid p-8 rounded-[40px] bg-white/[0.03] border border-white/10 hover:border-orange-500/30 transition-all duration-500 group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Quote className="absolute top-8 right-10 text-orange-500/10 group-hover:text-orange-500/20 transition-colors" size={50} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} size={14} className="text-orange-400 fill-orange-400" />
                ))}
              </div>

              <p className="text-gray-200 text-xl font-serif italic leading-relaxed mb-10">
                "{story.content}"
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {story.tags.map((tag, i) => (
                  <span key={i} className="text-[10px] uppercase tracking-[0.15em] font-bold text-gray-400 bg-white/5 px-4 py-1.5 rounded-full border border-white/5 group-hover:border-orange-500/20 group-hover:text-orange-500 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-500/5 border border-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-xl">
                  {story.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">{story.name}</h4>
                  <p className="text-gray-500 text-sm font-light uppercase tracking-widest">{story.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <p className="text-gray-500 mb-8 font-light italic text-lg">Your new chapter begins with a single conversation.</p>
          <motion.a
            href="#contact"
            className="px-12 py-5 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/20 inline-block"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Schedule Your Free Session
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;