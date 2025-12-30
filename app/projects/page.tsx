'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code, CheckCircle, Clock, X, Plus } from 'lucide-react';
import BackButton from '../components/BackButton';
import portfolioData from '../data/website.json';

export default function ProjectsPage() {
  const [showModal, setShowModal] = useState(false);
  const mainProjects = portfolioData.projects.slice(0, 4);
  const additionalProjects = portfolioData.projects.slice(4);

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
            Featured Projects
          </h2>
          <div className="w-24 h-2 bg-gray-900 mx-auto mb-16 rounded-full"></div>

          {/* Main 4 Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {mainProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                className="bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
              >
                <div className="p-8 flex-1 flex flex-col">
                  <div className="mb-6">
                    <div className="mb-3">
                      <h3 className="text-2xl md:text-3xl font-bold text-yellow-400 mb-2">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <p className="text-yellow-200 text-sm font-medium mb-2">
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-yellow-300 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock size={14} />
                        <span>{project.period}</span>
                      </div>
                      {project.status && (
                        <span className="px-3 py-1 bg-yellow-400 text-gray-900 rounded-lg text-xs font-bold">
                          {project.status.split('·')[0].trim()}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="text-yellow-100 leading-relaxed mb-6 line-clamp-4">
                    {project.description}
                  </p>

                  {project.highlights && project.highlights.length > 0 && (
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-yellow-400 mb-3 flex items-center gap-2">
                        <CheckCircle size={16} />
                        Key Highlights
                      </h4>
                      <ul className="space-y-2">
                        {project.highlights.slice(0, 2).map((highlight, i) => (
                          <li key={i} className="text-sm text-yellow-200 flex items-start gap-2">
                            <span className="text-yellow-400 mt-1">•</span>
                            <span className="line-clamp-2">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.slice(0, 6).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-yellow-400 text-gray-900 rounded-lg text-xs font-bold"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 6 && (
                        <span className="px-3 py-1.5 bg-yellow-400/50 text-gray-900 rounded-lg text-xs font-bold">
                          +{project.technologies.length - 6}
                        </span>
                      )}
                    </div>
                    
                    {/* Live Demo Button */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-3 w-full px-6 py-4 bg-yellow-400 text-gray-900 rounded-xl hover:bg-yellow-300 transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105"
                      >
                        <ExternalLink size={22} />
                        <span>View Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Show More Button */}
          {additionalProjects.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center"
            >
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-3 px-8 py-4 bg-gray-900 text-yellow-400 rounded-xl hover:bg-gray-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:scale-105"
              >
                <Plus size={24} />
                <span>Show More Projects ({additionalProjects.length})</span>
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-6"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-500 rounded-3xl shadow-2xl max-w-6xl w-full max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-gray-900 p-6 flex items-center justify-between">
                <h3 className="text-3xl font-bold text-yellow-400">More Projects</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="w-10 h-10 bg-yellow-400 text-gray-900 rounded-full flex items-center justify-center hover:bg-yellow-300 transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(85vh-88px)]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {additionalProjects.map((project, index) => (
                    <div
                      key={index}
                      className="bg-gray-900 rounded-2xl shadow-xl p-6 hover:scale-105 transition-all duration-300"
                    >
                      <div className="mb-4">
                        <div className="flex items-start justify-between mb-2">
                          <h4 className="text-xl font-bold text-yellow-400">
                            {project.title}
                          </h4>
                          {project.link && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-yellow-400 hover:text-yellow-300 transition-colors"
                            >
                              <ExternalLink size={20} />
                            </a>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-yellow-300">
                          <Clock size={12} />
                          <span>{project.period}</span>
                        </div>
                      </div>

                      <p className="text-yellow-100 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-yellow-400 text-gray-900 rounded text-xs font-bold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

