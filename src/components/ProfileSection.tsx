
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface ProfileSectionProps {}

const ProfileSection: React.FC<ProfileSectionProps> = () => {
  return (
    <section className="h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-portfolio-super-light-yellow opacity-70 z-0"></div>
      
      <div className="section-container relative z-10 flex flex-col items-center justify-center text-center">
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-full border-4 border-portfolio-yellow overflow-hidden mb-8 animate-fade-in">
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-3 text-portfolio-dark animate-fade-in">
          Rami Daood
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium mb-4 text-portfolio-dark-yellow animate-fade-in">
          Information Systems Student
        </h2>
        
        <p className="text-lg max-w-lg mb-8 text-portfolio-dark opacity-80 animate-fade-in">
          Ambitious engineering student seeking to apply software development and problem-solving skills in innovative projects.
        </p>
        
        <div className="flex flex-col space-y-4 w-64 animate-fade-in">
          <Link to="/about" className="w-full">
            <Button 
              className="w-full bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium rounded-full py-6 text-lg"
            >
              About Me
            </Button>
          </Link>
          <Link to="/projects" className="w-full">
            <Button 
              className="w-full bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium rounded-full py-6 text-lg"
            >
              Projects
            </Button>
          </Link>
          <Link to="/skills" className="w-full">
            <Button 
              className="w-full bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium rounded-full py-6 text-lg"
            >
              Skills
            </Button>
          </Link>
          <Link to="/work" className="w-full">
            <Button 
              className="w-full bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium rounded-full py-6 text-lg"
            >
              Work
            </Button>
          </Link>
          <Link to="/education" className="w-full">
            <Button 
              className="w-full bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium rounded-full py-6 text-lg"
            >
              Education
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
