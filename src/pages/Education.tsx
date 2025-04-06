
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import EducationSection from '@/components/EducationSection';

const Education = () => {
  return (
    <div className="min-h-screen bg-portfolio-super-light-yellow">
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button 
            className="mb-8 bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium rounded-full flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Button>
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-portfolio-dark">Education</h1>
        
        <EducationSection />
      </div>
    </div>
  );
};

export default Education;
