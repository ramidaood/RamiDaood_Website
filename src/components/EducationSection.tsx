
import React from 'react';
import { BookOpen } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: "Information Systems",
    institution: "University of Haifa",
    duration: "October 2022 - Present",
    location: "Haifa, Israel",
    description: "Currently pursuing a degree in Information Systems with a GPA of 85.",
    courses: ["Data Structures and Algorithms (84)", "Object-Oriented Programming (94)", "Discrete Mathematics (100)", "Operating Systems (100)", "Databases (93)", "BigData (94)", "Software Engineering (88)"]
  },
  {
    id: 2,
    degree: "Linux Bootcamp",
    institution: "Intensive Training Program",
    duration: "June 2024 - July 2024",
    location: "Israel",
    description: "Completed a comprehensive Linux bootcamp providing a solid foundation in Linux fundamentals, Git for version control, and essential libraries.",
    courses: ["Linux Commands", "File Management", "Shell Scripting", "Git Workflows", "System Administration"]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="bg-white py-24">
      <div className="section-container">
        <h2 className="section-title">Education</h2>
        
        <div className="space-y-10">
          {education.map((edu) => (
            <div key={edu.id} className="portfolio-card relative">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="hidden md:flex items-center justify-center bg-portfolio-light-yellow p-4 rounded-full h-16 w-16 shrink-0">
                  <BookOpen className="text-portfolio-dark-yellow" size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-portfolio-dark">{edu.degree}</h3>
                      <p className="text-portfolio-dark-yellow font-medium">{edu.institution}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-gray-500">
                      <p>{edu.duration}</p>
                      <p className="text-sm">{edu.location}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{edu.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-portfolio-dark mb-2">Key Courses</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, index) => (
                        <span key={index} className="bg-portfolio-light-yellow px-3 py-1 rounded-full text-sm text-portfolio-dark">
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
