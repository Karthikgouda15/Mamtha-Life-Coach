import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const Resume = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-900">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden"
            >
                {/* Header Section */}
                <div className="bg-darker text-white p-8 md:p-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl font-bold mb-2">Payal Balotra</h1>
                            <p className="text-xl text-primary font-medium">Software Developer | MERN Stack & AI Specialist</p>
                        </div>
                        <div className="mt-6 md:mt-0 flex flex-col gap-2">
                            <a href="mailto:payalbalotra@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                                <Mail size={18} /> payalbalotra@gmail.com
                            </a>
                            <div className="flex items-center gap-2 text-gray-300">
                                <Phone size={18} /> +91 XXXXXXXXXX
                            </div>
                            <div className="flex items-center gap-2 text-gray-300">
                                <MapPin size={18} /> India
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                        <a href="https://linkedin.com/in/payal-balotra" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                            <Linkedin size={18} /> LinkedIn
                        </a>
                        <a href="https://github.com/Payal-balotra" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
                            <Github size={18} /> GitHub
                        </a>
                        <button className="flex items-center gap-2 bg-primary px-6 py-2 rounded-full hover:bg-primary/90 transition-colors font-semibold">
                            <Download size={18} /> Download PDF
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-12">
                    {/* Main Content Column */}
                    <div className="md:col-span-2 space-y-8">
                        {/* Experience / Projects */}
                        <section>
                            <h2 className="text-2xl font-bold text-darker border-b-2 border-primary pb-2 mb-4">Featured Projects</h2>

                            <div className="space-y-6">
                                <div>
                                    <h3 className="text-xl font-bold">WalletIQ (Expense Tracker)</h3>
                                    <p className="text-primary font-medium">React, Node.js, Express, MongoDB, AI Integration</p>
                                    <ul className="list-disc list-outside ml-5 mt-2 text-gray-700 space-y-1">
                                        <li>Developed a full-stack financial management system with secure JWT authentication and protected routes.</li>
                                        <li>Integrated AI features for smart expense categorization and budget forecasting.</li>
                                        <li>Implemented interactive analytics dashboards using MongoDB aggregations (Pie, Bar, Line charts) for financial insights.</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold">BlogSphere</h3>
                                    <p className="text-primary font-medium">MERN Stack, RESTful API</p>
                                    <ul className="list-disc list-outside ml-5 mt-2 text-gray-700 space-y-1">
                                        <li>Built a robust blogging platform supporting CRUD operations for posts and user management.</li>
                                        <li>Designed a responsive, reader-friendly UI with optimized performance.</li>
                                    </ul>
                                </div>
                            </div>
                        </section>

                        {/* Education */}
                        <section>
                            <h2 className="text-2xl font-bold text-darker border-b-2 border-primary pb-2 mb-4">Education</h2>
                            <div>
                                <h3 className="text-xl font-bold">Bachelor of Technology (B.Tech)</h3>
                                <p className="text-gray-600">Computer Science & Engineering</p>
                                <p className="text-gray-500 text-sm">2020 - 2024</p>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Column */}
                    <div className="space-y-8">
                        {/* Technical Skills */}
                        <section>
                            <h2 className="text-xl font-bold text-darker border-b-2 border-secondary pb-2 mb-4">Technical Skills</h2>
                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-bold text-gray-700 mb-2">Languages</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['JavaScript (ES6+)', 'Python', 'Java', 'HTML5', 'CSS3'].map(skill => (
                                            <span key={skill} className="px-2 py-1 bg-gray-100 text-sm rounded-md text-gray-700">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-700 mb-2">Frontend</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['React.js', 'Redux', 'Tailwind CSS', 'Framer Motion', 'Bootstrap'].map(skill => (
                                            <span key={skill} className="px-2 py-1 bg-gray-100 text-sm rounded-md text-gray-700">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-700 mb-2">Backend & Database</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'REST APIs', 'OAuth'].map(skill => (
                                            <span key={skill} className="px-2 py-1 bg-gray-100 text-sm rounded-md text-gray-700">{skill}</span>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="font-bold text-gray-700 mb-2">Tools & Others</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {['Git/GitHub', 'VS Code', 'Postman', 'Vercel', 'Netlify', 'Figma', 'Prompt Engineering', 'Gen AI'].map(skill => (
                                            <span key={skill} className="px-2 py-1 bg-gray-100 text-sm rounded-md text-gray-700">{skill}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Achievements */}
                        <section>
                            <h2 className="text-xl font-bold text-darker border-b-2 border-secondary pb-2 mb-4">Achievements</h2>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                                    <span className="text-gray-700">Solved 150+ DSA questions on LeetCode</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1.5 w-2 h-2 bg-secondary rounded-full flex-shrink-0"></span>
                                    <span className="text-gray-700">5 Star HackerRank (Problem Solving)</span>
                                </li>
                            </ul>
                        </section>
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Resume;
