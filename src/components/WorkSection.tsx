import React from 'react';
import { Briefcase, Calendar, ArrowRight } from 'lucide-react';

const WorkSection = () => {
  const experiences = [
    {
      title: "Tier 3 AI Training Engineer",
      company: "Outlier",
      period: "Oct 2024 – Present",
      responsibilities: [
        "Leading fine-tuning and optimization of machine learning models",
        "Supervising data annotation pipelines",
        "Investigating performance issues across AI systems"
      ]
    },
    {
      title: "Software Developer",
      company: "KiwiApps Ltd",
      period: "Jul 2023 – Jul 2024",
      responsibilities: [
        "Developed a video training application for elderly users using Java and Spring Boot",
        "Implemented a modular system for managing exercise videos",
        "Built an adaptive difficulty algorithm based on user engagement",
        "Collaborated with clients using Jira and agile practices"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-portfolio-light-yellow p-3 rounded-full">
          <Briefcase className="w-6 h-6 text-portfolio-dark-yellow" />
        </div>
        <h2 className="text-2xl font-bold text-portfolio-dark">Work Experience</h2>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index}
            className="relative pl-8 border-l-2 border-portfolio-light-yellow"
          >
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-portfolio-yellow border-2 border-white" />
            
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-portfolio-dark">{exp.title}</h3>
                  <p className="text-portfolio-dark opacity-80">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-portfolio-dark opacity-80 mt-2 md:mt-0">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-portfolio-dark">
                    <ArrowRight className="w-4 h-4 mt-1 text-portfolio-yellow flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkSection;
