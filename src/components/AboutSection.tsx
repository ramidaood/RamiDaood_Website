
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-24">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="w-full max-w-md h-80 relative overflow-hidden rounded-xl shadow-lg">
              <div className="absolute inset-0 bg-portfolio-yellow opacity-20 z-0"></div>
              <img
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80"
                alt="About Me"
                className="w-full h-full object-cover relative z-10"
              />
            </div>
          </div>
          
          <div>
            <p className="text-lg mb-6 leading-relaxed text-portfolio-dark">
              Hello! I'm a passionate web developer with expertise in creating modern, responsive web applications. With a strong foundation in both frontend and backend technologies, I enjoy bringing creative ideas to life.
            </p>
            
            <p className="text-lg mb-8 leading-relaxed text-portfolio-dark">
              My journey in web development started 5 years ago, and since then, I've worked on numerous projects ranging from small business websites to complex enterprise applications. I'm dedicated to writing clean, maintainable code and constantly learning new technologies.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-portfolio-light-yellow px-4 py-2 rounded-full text-portfolio-dark font-medium">
                💻 Web Development
              </div>
              <div className="bg-portfolio-light-yellow px-4 py-2 rounded-full text-portfolio-dark font-medium">
                🎨 UI/UX Design
              </div>
              <div className="bg-portfolio-light-yellow px-4 py-2 rounded-full text-portfolio-dark font-medium">
                📱 Mobile Development
              </div>
            </div>
            
            <Button className="bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium px-6 py-5 rounded-full flex items-center gap-2">
              <FileText size={18} />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
