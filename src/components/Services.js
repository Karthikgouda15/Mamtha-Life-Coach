import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, CheckCircle2, Sparkles, Star } from "lucide-react";

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeFilter, setActiveFilter] = useState("all");

  const services = [
    {
      id: 1,
      title: "Mindset Mastery 1:1",
      description:
        "A personalized coaching journey to identify limiting beliefs, rebuild self-confidence, and create a roadmap for your personal evolution.",
      image: "https://images.unsplash.com/photo-1518101645466-7795885ff8f8?w=800&q=80",
      duration: "3-6 Months",
      category: "one-on-one",
      isFeatured: true,
      cta: "mailto:mamthasn@gmail.com",
      outcomes: [
        "Overcoming Imposter Syndrome",
        "Clarity on Life Purpose",
        "Sustainable Habit Formation",
        "Emotional Intelligence Growth",
      ],
    },
    {
      id: 2,
      title: "Career Transition Blueprint",
      description:
        "Strategic guidance for high-achievers looking to pivot careers, master leadership presence, or align their work with their values.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
      duration: "8 Weeks",
      category: "career",
      isFeatured: false,
      cta: "mailto:mamthasn@gmail.com",
      outcomes: [
        "Executive Presence Coaching",
        "Strategic Career Pivot Roadmap",
        "Confidence in Leadership",
      ],
    },
    {
      id: 3,
      title: "Holistic Wellness Workshop",
      description:
        "Group sessions focused on work-life harmony, energy management, and preventing burnout in high-pressure environments.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80",
      duration: "Group Sessions",
      category: "workshops",
      isFeatured: false,
      cta: "mailto:mamthasn@gmail.com",
      outcomes: [
        "Stress Management Tools",
        "Boundary Setting Techniques",
        "Community Support System",
      ],
    },
  ];

  const filters = [
    { id: "all", label: "All Offerings" },
    { id: "one-on-one", label: "1:1 Coaching" },
    { id: "career", label: "Career Growth" },
    { id: "workshops", label: "Workshops" },
  ];

  const filteredServices = services.filter((service) =>
    activeFilter === "all" ? true : service.category === activeFilter
  );

  return (
    <section id="services" className="py-24 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles size={14} />
            Your Transformation Starts Here
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            How I Can <span className="italic text-orange-500">Support You</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
            Each program is designed to bridge the gap between where you are today and where you envision yourself.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`px-8 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-orange-500 text-white shadow-xl shadow-orange-500/20"
                  : "bg-white/5 text-gray-400 hover:bg-white/10"
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence>
            {filteredServices.map((service) => (
              <motion.div
                key={service.id}
                className="group relative bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:border-orange-500/30 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                layout
                whileHover={{ y: -10 }}
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1 bg-black/60 backdrop-blur-md text-white text-xs font-bold rounded-full border border-white/10">
                      {service.duration}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white leading-tight">
                      {service.title}
                    </h3>
                    {service.isFeatured && (
                      <Star className="text-orange-500 fill-orange-500" size={20} />
                    )}
                  </div>

                  <p className="text-gray-400 mb-8 font-light text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-10">
                    <p className="text-xs uppercase tracking-widest text-orange-500 font-bold mb-4">Key Outcomes</p>
                    {service.outcomes.map((outcome, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                        <CheckCircle2 size={16} className="text-orange-500" />
                        {outcome}
                      </div>
                    ))}
                  </div>

                  <a
                    href={service.cta}
                    className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-white text-black font-bold hover:bg-orange-500 hover:text-white transition-all duration-300"
                  >
                    <Calendar size={18} />
                    Inquire Now
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;