
import React from 'react';

const skillCategories = [
  {
    category: "Frontend Development",
    skills: [
      { name: "HTML5", proficiency: 95 },
      { name: "CSS3", proficiency: 90 },
      { name: "JavaScript", proficiency: 85 },
      { name: "React", proficiency: 80 },
      { name: "Tailwind CSS", proficiency: 85 }
    ]
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", proficiency: 75 },
      { name: "Express", proficiency: 70 },
      { name: "MongoDB", proficiency: 65 },
      { name: "SQL", proficiency: 60 },
      { name: "Firebase", proficiency: 75 }
    ]
  },
  {
    category: "Tools & Others",
    skills: [
      { name: "Git", proficiency: 80 },
      { name: "Figma", proficiency: 70 },
      { name: "Webpack", proficiency: 65 },
      { name: "Jest", proficiency: 60 },
      { name: "Docker", proficiency: 55 }
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-white py-24">
      <div className="section-container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="portfolio-card">
              <h3 className="text-xl font-semibold mb-6 text-portfolio-dark relative pb-2 after:content-[''] after:absolute after:w-12 after:h-1 after:bg-portfolio-yellow after:bottom-0 after:left-0">
                {category.category}
              </h3>
              
              <div className="space-y-5">
                {category.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium text-portfolio-dark">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.proficiency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-portfolio-yellow h-2 rounded-full" 
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
