
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

interface ProfileSectionProps {
  onExploreClick: () => void;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ onExploreClick }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
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
          Your Name
        </h1>
        
        <h2 className="text-xl md:text-2xl font-medium mb-6 text-portfolio-dark-yellow animate-fade-in">
          Web Developer
        </h2>
        
        <p className="text-lg max-w-lg mb-10 text-portfolio-dark opacity-80 animate-fade-in">
          I create modern, responsive web applications with a focus on user experience and performance.
        </p>
        
        <Button 
          onClick={onExploreClick}
          className="bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium px-8 py-6 rounded-full flex items-center gap-2 animate-fade-in"
        >
          Explore My Work
          <ArrowDown size={18} />
        </Button>
      </div>
    </section>
  );
};

export default ProfileSection;
