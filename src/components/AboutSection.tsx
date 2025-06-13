import React from 'react';
import { User, Code, Lightbulb, Target } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Software Engineering",
      description: "Strong foundation in software development principles and best practices"
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Problem Solving",
      description: "Adept at solving complex problems and building real-time systems"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Project Delivery",
      description: "Proven track record of delivering impactful projects for accessibility and business automation"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 transform hover:scale-[1.02] transition-transform duration-300">
        <div className="flex items-center gap-4 mb-6">
          <div className="bg-portfolio-light-yellow p-3 rounded-full">
            <User className="w-6 h-6 text-portfolio-dark-yellow" />
          </div>
          <h2 className="text-2xl font-bold text-portfolio-dark">About Me</h2>
        </div>
        <p className="text-lg text-portfolio-dark leading-relaxed">
          Versatile and ambitious Information Systems student with strong foundations in software engineering, 
          artificial intelligence, and mobile/web development. I'm passionate about creating innovative solutions 
          that make a real impact, whether it's helping visually impaired individuals navigate their surroundings 
          or streamlining business operations through automation.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <div className="bg-portfolio-light-yellow p-3 rounded-full w-fit mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-portfolio-dark mb-2">
              {feature.title}
            </h3>
            <p className="text-portfolio-dark">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
