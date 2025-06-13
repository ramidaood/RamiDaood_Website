import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Globe, Linkedin } from 'lucide-react';

const ProfileSection = () => {
  return (
    <div className="min-h-screen bg-portfolio-super-light-yellow flex items-center justify-center">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-portfolio-dark">
            Rami Daood
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-portfolio-dark">
            Software Developer
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-portfolio-dark">
              <Mail size={20} />
              <a href="mailto:daoodrami52@gmail.com" className="hover:text-portfolio-yellow transition-colors">
                daoodrami52@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-portfolio-dark">
              <Phone size={20} />
              <a href="tel:+972549720015" className="hover:text-portfolio-yellow transition-colors">
                +972-54-972-0015
              </a>
            </div>
            <div className="flex items-center gap-2 text-portfolio-dark">
              <MapPin size={20} />
              <span>Kfar Yassif, Israel</span>
            </div>
            <div className="flex items-center gap-2 text-portfolio-dark">
              <Globe size={20} />
              <a href="https://www.rami-daood.com" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-yellow transition-colors">
                www.rami-daood.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-portfolio-dark">
              <Linkedin size={20} />
              <a href="https://linkedin.com/in/rami-daood" target="_blank" rel="noopener noreferrer" className="hover:text-portfolio-yellow transition-colors">
                LinkedIn
              </a>
            </div>
          </div>

          <p className="text-lg md:text-xl text-portfolio-dark mb-12 max-w-3xl mx-auto">
            Versatile and ambitious Information Systems student with strong foundations in software engineering, 
            artificial intelligence, and mobile/web development. Adept at solving complex problems, building 
            real-time systems, and delivering impactful projects for accessibility and business automation.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about">
              <Button className="bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium">
                About Me
              </Button>
            </Link>
            <Link to="/projects">
              <Button className="bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium">
                Projects
              </Button>
            </Link>
            <Link to="/skills">
              <Button className="bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium">
                Skills
              </Button>
            </Link>
            <Link to="/work">
              <Button className="bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium">
                Experience
              </Button>
            </Link>
            <Link to="/education">
              <Button className="bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium">
                Education
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
