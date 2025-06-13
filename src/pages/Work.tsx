import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import WorkSection from '@/components/WorkSection';

const Work = () => {
  return (
    <div className="min-h-screen bg-portfolio-super-light-yellow">
      <Helmet>
        <title>Work Experience | Rami Daood</title>
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <Link to="/">
          <Button 
            className="mb-8 bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium rounded-full flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Back to Home
          </Button>
        </Link>
        
        <WorkSection />
      </div>
    </div>
  );
};

export default Work;
