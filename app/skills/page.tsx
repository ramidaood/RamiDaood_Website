'use client';

import { motion } from 'framer-motion';
import { Code2, Globe, Smartphone, Brain, Database, Wrench } from 'lucide-react';
import BackButton from '../components/BackButton';
import portfolioData from '../data/website.json';

const skillCategories = [
  { key: 'programmingLanguages', title: 'Programming Languages', icon: Code2 },
  { key: 'webDevelopment', title: 'Web Development', icon: Globe },
  { key: 'mobileDevelopment', title: 'Mobile Development', icon: Smartphone },
  { key: 'aiComputerVision', title: 'AI & Computer Vision', icon: Brain },
  { key: 'dataAutomation', title: 'Data & Automation', icon: Database },
  { key: 'toolsPlatforms', title: 'Tools & Platforms', icon: Wrench },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 py-20 px-6 overflow-y-auto">
      <BackButton />
      
      <div className="max-w-7xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-900">
            Technical Skills
          </h2>
          <div className="w-24 h-2 bg-gray-900 mx-auto mb-16 rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              const skillList = portfolioData.skills[category.key as keyof typeof portfolioData.skills];

              return (
                <motion.div
                  key={category.key}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 + categoryIndex * 0.1 }}
                  className="bg-gray-900 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-yellow-400 rounded-xl flex items-center justify-center">
                      <Icon className="text-gray-900" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-yellow-400">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {skillList.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 + categoryIndex * 0.1 + skillIndex * 0.03 }}
                        className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg text-sm font-bold hover:bg-yellow-300 transition-all duration-200 shadow-md"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </main>
  );
}

