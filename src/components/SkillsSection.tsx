
import React from 'react';

const skillCategories = [
  {
    category: "Web Development",
    skills: [
      { name: "HTML/CSS/JavaScript", proficiency: 90 },
      { name: "React", proficiency: 85 },
      { name: "Tailwind", proficiency: 80 },
      { name: "Node.js", proficiency: 75 },
      { name: "TypeScript", proficiency: 80 }
    ]
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "Flutter", proficiency: 75 },
      { name: "React Native", proficiency: 80 },
      { name: "TypeScript", proficiency: 80 },
      { name: "UI/UX Design", proficiency: 70 },
      { name: "Automation", proficiency: 75 }
    ]
  },
  {
    category: "Programming & Databases",
    skills: [
      { name: "Java", proficiency: 90 },
      { name: "Python", proficiency: 85 },
      { name: "C/C++", proficiency: 80 },
      { name: "SQL/NoSQL", proficiency: 85 },
      { name: "MongoDB", proficiency: 75 }
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
