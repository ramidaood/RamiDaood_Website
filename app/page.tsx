'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, User, Code, Briefcase, FolderOpen, GraduationCap, MapPin, Phone, ExternalLink } from 'lucide-react';
import Link from 'next/link';
import portfolioData from './data/website.json';

export default function Home() {
  const navItems = [
    { href: '/about', label: 'About Me', icon: User },
    { href: '/skills', label: 'Technical Skills', icon: Code },
    { href: '/projects', label: 'Featured Projects', icon: FolderOpen },
    { href: '/experience', label: 'Work Experience', icon: Briefcase },
    { href: '/education', label: 'Education', icon: GraduationCap },
  ];

  return (
    <main className="min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 relative">
      {/* Static background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-yellow-300/20 rounded-full blur-3xl top-20 -left-20"></div>
        <div className="absolute w-96 h-96 bg-amber-400/20 rounded-full blur-3xl bottom-20 -right-20"></div>
        <div className="absolute w-64 h-64 bg-yellow-200/15 rounded-full blur-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 py-8">
        <div className="text-center">
          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gray-900">
              {portfolioData.profile.name}
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">
              {portfolioData.profile.title}
            </h2>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              {portfolioData.profile.tagline}
            </p>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 text-gray-800 mb-6"
          >
            <div className="flex items-center gap-2 bg-yellow-300/50 px-4 py-2 rounded-lg">
              <MapPin size={18} className="text-gray-900" />
              <span className="font-medium">{portfolioData.profile.contact.location}</span>
            </div>
            <div className="flex items-center gap-2 bg-yellow-300/50 px-4 py-2 rounded-lg">
              <Phone size={18} className="text-gray-900" />
              <span className="font-medium">{portfolioData.profile.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2 bg-yellow-300/50 px-4 py-2 rounded-lg">
              <ExternalLink size={18} className="text-gray-900" />
              <a
                href={`https://${portfolioData.profile.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 transition-colors font-medium"
              >
                {portfolioData.profile.contact.website}
              </a>
            </div>
          </motion.div>

          {/* Contact Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-10"
          >
            <a
              href={`mailto:${portfolioData.profile.contact.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-yellow-400 rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <Mail size={20} />
              <span>Contact Me</span>
            </a>
            <a
              href={portfolioData.profile.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-yellow-400 rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href={portfolioData.profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-yellow-400 rounded-lg hover:bg-gray-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </motion.div>

          {/* Navigation Cards */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-5xl mx-auto"
          >
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link key={item.href} href={item.href}>
                  <div className="bg-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer hover:scale-105 group">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center group-hover:bg-yellow-300 transition-colors">
                        <Icon className="text-gray-900" size={32} />
                      </div>
                      <span className="text-yellow-400 font-bold text-center group-hover:text-yellow-300 transition-colors">
                        {item.label}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>
    </main>
  );
}
