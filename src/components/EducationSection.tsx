
import React from 'react';
import { BookOpen } from 'lucide-react';

const education = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    duration: "2014 - 2016",
    location: "Stanford, CA",
    description: "Specialized in Human-Computer Interaction and Web Technologies. Completed thesis on responsive design patterns for mobile applications.",
    courses: ["Advanced Algorithms", "Human-Computer Interaction", "Web Systems Architecture", "Data Visualization"]
  },
  {
    id: 2,
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Washington",
    duration: "2010 - 2014",
    location: "Seattle, WA",
    description: "Graduated with honors. Focused on software development and database management systems.",
    courses: ["Data Structures", "Database Systems", "Object-Oriented Programming", "Web Development"]
  },
  {
    id: 3,
    degree: "Web Development Bootcamp",
    institution: "Coding Academy",
    duration: "Summer 2013",
    location: "Online",
    description: "Intensive 12-week program covering full-stack web development technologies and best practices.",
    courses: ["HTML/CSS", "JavaScript", "Node.js", "React Fundamentals"]
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
