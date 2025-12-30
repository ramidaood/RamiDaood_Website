'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import BackButton from '../components/BackButton';
import portfolioData from '../data/website.json';

export default function EducationPage() {
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
            Education Journey
          </h2>
          <div className="w-24 h-2 bg-gray-900 mx-auto mb-16 rounded-full"></div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Road Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gray-900 transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-16">
              {portfolioData.education.map((edu, index) => (
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
                      <GraduationCap className="text-yellow-400" size={24} />
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
                        <span>{edu.period}</span>
                      </div>

                      {/* GPA Badge */}
                      {edu.gpa && (
                        <div className={`inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg mb-4 ml-2 font-bold shadow-md`}>
                          <Award size={18} />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                      )}

                      <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                        {edu.degree}
                      </h3>
                      
                      <div className="text-yellow-100 mb-4">
                        <span className="font-semibold text-lg">{edu.institution}</span>
                      </div>

                      {edu.description && (
                        <p className="text-yellow-100 mb-6 text-left">{edu.description}</p>
                      )}

                      {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                        <div className="text-left">
                          <h4 className="text-lg font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                            <BookOpen size={18} />
                            Top Courses
                          </h4>
                          <div className="grid grid-cols-2 gap-3">
                            {edu.relevantCourses.slice(0, 6).map((course, i) => (
                              <div
                                key={i}
                                className="bg-yellow-400 p-3 rounded-lg shadow-md"
                              >
                                <p className="text-gray-900 font-bold text-sm mb-1">{course.name}</p>
                                <div className="flex items-center justify-between">
                                  <span className="text-xs text-gray-700 font-medium">Grade:</span>
                                  <span className="text-gray-900 font-bold">{course.grade}</span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
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

