'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import BackButton from '../components/BackButton';
import portfolioData from '../data/website.json';

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 py-20 px-6 overflow-y-auto">
      <BackButton />
      
      <div className="max-w-5xl mx-auto pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-900">
            Work Experience Roadmap
          </h2>
          <div className="w-24 h-2 bg-gray-900 mx-auto mb-16 rounded-full"></div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Road Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-900 transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {portfolioData.workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:gap-8`}
                >
                  {/* Point on the Road */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className="w-16 h-16 bg-gray-900 rounded-full border-8 border-yellow-400 flex items-center justify-center shadow-xl">
                      <Briefcase className="text-yellow-400" size={24} />
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ml-20 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="bg-gray-900 p-8 rounded-2xl shadow-xl"
                    >
                      {/* Date Badge */}
                      <div className={`inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg mb-4 font-bold shadow-md`}>
                        <Calendar size={18} />
                        <span>{job.period}</span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                        {job.title}
                      </h3>
                      
                      <div className="flex items-center gap-2 text-yellow-100 mb-6">
                        <span className="font-semibold text-lg">{job.company}</span>
                      </div>

                      <ul className="space-y-3 text-left">
                        {job.responsibilities.map((responsibility, i) => (
                          <li key={i} className="flex items-start gap-3 text-yellow-100">
                            <CheckCircle size={20} className="text-yellow-400 flex-shrink-0 mt-0.5" />
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* End Point */}
            <div className="relative mt-16 flex justify-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full border-4 border-gray-900 shadow-xl"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

