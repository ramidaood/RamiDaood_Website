import React from 'react';
import { Code, Globe, Smartphone, Brain, Database, Wrench } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Programming Languages",
      skills: ["Java", "Python", "C/C++", "Dart", "TypeScript"]
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "Node.js", "Wix Velo", "Webflow"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Development",
      skills: ["Flutter", "React Native"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI / Computer Vision",
      skills: ["YOLOv5", "MiDaS", "OpenCV", "PyTorch", "Pygame", "Scikit-learn"]
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data & Automation",
      skills: ["SQL", "Advanced SQL", "NoSQL", "AccessDB", "MongoDB", "Supabase", "Firebase", "Make.com"]
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Tools & Platforms",
      skills: ["Git", "Xcode", "VS Code", "Figma", "Jira", "WebSocket", "WhatsApp Business API", "Messenger Integration"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-portfolio-light-yellow p-2 rounded-lg">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-portfolio-dark">
                {category.title}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 bg-portfolio-light-yellow text-portfolio-dark text-sm rounded-full hover:bg-portfolio-yellow hover:text-white transition-colors duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
