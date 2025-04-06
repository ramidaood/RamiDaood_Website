
import React from 'react';
import { Briefcase } from 'lucide-react';

const workExperience = [
  {
    id: 1,
    position: "Tier 3 AI Training Engineer",
    company: "Outlier",
    duration: "October 2024 - Present",
    location: "Israel",
    description: [
      "Advanced Model Training: Led efforts in fine-tuning and optimizing machine learning models for complex datasets, ensuring high accuracy and robustness.",
      "Data Annotation Oversight: Supervised and enhanced data labeling processes to improve dataset quality, leveraging automation tools to streamline workflows.",
      "Problem Resolution: Addressed escalated issues in model performance and dataset inconsistencies, collaborating with cross-functional teams to deliver scalable solutions."
    ]
  },
  {
    id: 2,
    position: "Software Developer",
    company: "KiwiApps Ltd",
    duration: "July 2023 - July 2024",
    location: "Israel",
    description: [
      "Developed and maintained software using Java and Spring Boot architecture.",
      "Worked as an outsourced developer, closely collaborating with clients, taking ownership of tasks through Jira, and adapting to new technologies as needed to complete assignments.",
      "Contributed to an application designed to assist elderly users in improving their balance through training videos, dynamically assembled based on user needs and performance.",
      "Implemented a system to store, arrange, and retrieve exercise videos, each split into five segments and concatenated based on predefined rules.",
      "Built a rating-based algorithm that adjusted the difficulty of exercises based on user performance."
    ]
  }
];

const WorkSection = () => {
  return (
    <section id="work" className="bg-portfolio-super-light-yellow py-24">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-10">
          {workExperience.map((job) => (
            <div key={job.id} className="portfolio-card relative">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="hidden md:flex items-center justify-center bg-portfolio-light-yellow p-4 rounded-full h-16 w-16 shrink-0">
                  <Briefcase className="text-portfolio-dark-yellow" size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-portfolio-dark">{job.position}</h3>
                      <p className="text-portfolio-dark-yellow font-medium">{job.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-gray-500">
                      <p>{job.duration}</p>
                      <p className="text-sm">{job.location}</p>
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {job.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
