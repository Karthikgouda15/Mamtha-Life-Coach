import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
  Mail,
  Linkedin,
  MessageCircle,
  Send,
  CheckCircle,
  Sparkles,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'General Inquiry',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', topic: 'General Inquiry', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactOptions = [
    {
      icon: Mail,
      title: "Direct Email",
      value: "hello@mamthagowda.com",
      link: "mailto:hello@mamthagowda.com",
      color: "text-orange-500"
    },
    {
      icon: Linkedin,
      title: "LinkedIn Community",
      value: "Mamtha Gowda G S",
      link: "https://www.linkedin.com/in/mamthagowda-gs/",
      color: "text-blue-500"
    },
    {
      icon: Calendar,
      title: "Discovery Call",
      value: "Book 15-min Chat",
      link: "#", 
      color: "text-emerald-500"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">
            <MessageCircle size={14} />
            Let's Connect
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
            Begin Your <span className="text-orange-500 italic">New Chapter</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
            Whether you have a specific question about coaching or just want to share your story, 
            my door is always open.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-start">
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Reach out to Mamtha</h3>
              <p className="text-gray-400 leading-relaxed text-lg font-light mb-8">
                Every great transformation starts with a single, honest conversation. 
                I typically respond within 24–48 hours to all heart-centered inquiries.
              </p>
            </div>

            <div className="space-y-4">
              {contactOptions.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.link}
                  className="flex items-center gap-5 p-6 bg-white/[0.03] border border-white/5 rounded-[24px] hover:border-orange-500/40 hover:bg-white/[0.06] transition-all duration-500 group"
                  whileHover={{ x: 10 }}
                >
                  <div className={`p-4 bg-darker rounded-2xl ${info.color} group-hover:bg-orange-500 group-hover:text-white transition-all duration-300`}>
                    <info.icon size={26} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-lg">{info.title}</h4>
                    <span className="text-gray-500 group-hover:text-gray-300 transition-colors">{info.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="p-8 rounded-[32px] bg-gradient-to-br from-orange-500/10 to-transparent border border-orange-500/20">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <Sparkles size={18} className="text-orange-500" />
                Special Note
              </h4>
              <p className="text-sm text-gray-400 font-light">
                Available for 1:1 coaching, corporate workshops, and informatics guest lectures.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-white/[0.02] backdrop-blur-md p-10 rounded-[40px] border border-white/10 shadow-2xl"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-orange-500 text-white transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-orange-500 text-white transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">What can I help you with?</label>
                <select 
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 bg-[#111] border border-white/10 rounded-2xl focus:outline-none focus:border-orange-500 text-white transition-all"
                >
                  <option>Mindset Coaching</option>
                  <option>Career Evolution</option>
                  <option>Data/Informatics Inquiry</option>
                  <option>General Support</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-500 ml-1">Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="4"
                  placeholder="Share a bit about what's on your mind..."
                  className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-orange-500 text-white transition-all resize-none"
                />
              </div>

              <motion.button
                type="submit"
                className="w-full py-5 bg-orange-500 text-white rounded-2xl font-bold hover:bg-orange-600 transition-all flex items-center justify-center gap-3 disabled:opacity-50"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? "Processing..." : (
                  <>
                    <Send size={18} />
                    Send Your Message
                  </>
                )}
              </motion.button>
            </form>

            {isSubmitted && (
              <motion.div
                className="mt-6 p-4 bg-orange-500/10 border border-orange-500/20 rounded-2xl flex items-center gap-3 text-orange-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <CheckCircle size={20} />
                <span className="text-sm">Thank you. I have received your message and will be in touch soon.</span>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;