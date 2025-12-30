'use client';

import { motion } from 'framer-motion';
import { Award, Target, Zap } from 'lucide-react';
import BackButton from '../components/BackButton';
import portfolioData from '../data/website.json';

const iconMap: Record<string, any> = {
  'Software Engineering': Award,
  'Problem Solving': Target,
  'Project Delivery': Zap,
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 py-20 px-6 overflow-y-auto">
      <BackButton />
      
      <div className="max-w-6xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-900">
            About Me
          </h2>
          <div className="w-24 h-2 bg-gray-900 mx-auto mb-12 rounded-full"></div>

          <p className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-16 text-center max-w-4xl mx-auto font-medium">
            {portfolioData.about.summary}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {portfolioData.about.highlights.map((highlight, index) => {
              const Icon = iconMap[highlight.title] || Award;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  className="bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="w-16 h-16 bg-yellow-400 rounded-xl flex items-center justify-center mb-6">
                    <Icon className="text-gray-900" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                    {highlight.title}
                  </h3>
                  <p className="text-yellow-100 leading-relaxed text-lg">
                    {highlight.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

