
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import ProfileSection from '@/components/ProfileSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import WorkSection from '@/components/WorkSection';
import EducationSection from '@/components/EducationSection';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const workRef = useRef<HTMLDivElement>(null);
  const educationRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (sectionId: string) => {
    let ref = null;
    
    switch (sectionId) {
      case 'home':
        window.scrollTo({ top: 0, behavior: 'smooth' });
        break;
      case 'about':
        ref = aboutRef.current;
        break;
      case 'projects':
        ref = projectsRef.current;
        break;
      case 'skills':
        ref = skillsRef.current;
        break;
      case 'work':
        ref = workRef.current;
        break;
      case 'education':
        ref = educationRef.current;
        break;
      default:
        break;
    }
    
    if (ref) {
      ref.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      const sections = [
        { id: 'home', ref: 0 },
        { id: 'about', ref: aboutRef.current?.offsetTop ?? 0 },
        { id: 'projects', ref: projectsRef.current?.offsetTop ?? 0 },
        { id: 'skills', ref: skillsRef.current?.offsetTop ?? 0 },
        { id: 'work', ref: workRef.current?.offsetTop ?? 0 },
        { id: 'education', ref: educationRef.current?.offsetTop ?? 0 },
      ];
      
      const currentSection = sections
        .filter(section => section.ref <= scrollPosition + 200)
        .slice(-1)[0];
      
      if (currentSection && currentSection.id !== activeSection) {
        setActiveSection(currentSection.id);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleExploreClick = () => {
    scrollToSection('about');
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar activeSection={activeSection} onNavClick={scrollToSection} />
      
      <ProfileSection onExploreClick={handleExploreClick} />
      
      <div ref={aboutRef}>
        <AboutSection />
      </div>
      
      <div ref={projectsRef}>
        <ProjectsSection />
      </div>
      
      <div ref={skillsRef}>
        <SkillsSection />
      </div>
      
      <div ref={workRef}>
        <WorkSection />
      </div>
      
      <div ref={educationRef}>
        <EducationSection />
      </div>

      <footer className="bg-portfolio-dark text-white py-10">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="mb-6">Feel free to reach out if you're looking for a developer, have a question, or just want to connect.</p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#" className="hover:text-portfolio-yellow transition-colors">
              <span className="sr-only">GitHub</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="hover:text-portfolio-yellow transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
              </svg>
            </a>
            <a href="#" className="hover:text-portfolio-yellow transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
          
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} Your Portfolio. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
