import React from 'react';
import { Helmet } from 'react-helmet-async';
import ProfileSection from '@/components/ProfileSection';

const Index = () => {
  return (
    <div className="min-h-screen overflow-hidden">
      <Helmet>
        <title>Rami Daood | Software Developer</title>
      </Helmet>
      <ProfileSection />
    </div>
  );
};

export default Index;
