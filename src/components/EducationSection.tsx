import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      institution: "University of Haifa",
      degree: "B.Sc. in Information Systems",
      period: "Oct 2022 – Present",
      gpa: "85",
      courses: [
        { name: "Data Structures", grade: "90" },
        { name: "Algorithms", grade: "85" },
        { name: "Database Systems", grade: "88" },
        { name: "Software Engineering", grade: "92" }
      ]
    },
    {
      institution: "Linux Bootcamp",
      degree: "Professional Training",
      period: "Jun 2024 – Jul 2024",
      description: "Comprehensive training covering Linux shell scripting, command-line tools, Git workflows, and system administration fundamentals."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-portfolio-light-yellow p-3 rounded-full">
          <GraduationCap className="w-6 h-6 text-portfolio-dark-yellow" />
        </div>
        <h2 className="text-2xl font-bold text-portfolio-dark">Education</h2>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-portfolio-dark">{edu.institution}</h3>
                <p className="text-portfolio-dark opacity-80">{edu.degree}</p>
              </div>
              <div className="flex items-center gap-2 text-portfolio-dark opacity-80 mt-2 md:mt-0">
                <BookOpen className="w-4 h-4" />
                <span>{edu.period}</span>
              </div>
            </div>

            {edu.gpa && (
              <div className="flex items-center gap-2 mb-4">
                <Award className="w-5 h-5 text-portfolio-yellow" />
                <span className="text-portfolio-dark font-medium">GPA: {edu.gpa}</span>
              </div>
            )}

            {edu.courses ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {edu.courses.map((course, idx) => (
                  <div 
                    key={idx}
                    className="bg-portfolio-light-yellow rounded-lg p-3 flex justify-between items-center"
                  >
                    <span className="text-portfolio-dark">{course.name}</span>
                    <span className="text-portfolio-dark font-medium">{course.grade}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-portfolio-dark">{edu.description}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
