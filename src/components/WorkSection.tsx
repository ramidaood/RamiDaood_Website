
import React from 'react';
import { Briefcase } from 'lucide-react';

const workExperience = [
  {
    id: 1,
    position: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2021 - Present",
    location: "San Francisco, CA",
    description: [
      "Led a team of 5 developers to build and maintain responsive web applications",
      "Implemented modern frontend architecture using React and TypeScript",
      "Reduced load times by 40% through code optimization and lazy loading",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    id: 2,
    position: "Web Developer",
    company: "Digital Innovations",
    duration: "Mar 2018 - Dec 2020",
    location: "Seattle, WA",
    description: [
      "Developed and maintained multiple client websites using JavaScript frameworks",
      "Created responsive designs with CSS/SASS that improved mobile user experience",
      "Integrated RESTful APIs and managed state with Redux",
      "Collaborated with designers to implement UI/UX improvements"
    ]
  },
  {
    id: 3,
    position: "Junior Developer",
    company: "StartUp Vision",
    duration: "Jun 2016 - Feb 2018",
    location: "Portland, OR",
    description: [
      "Built responsive websites for small business clients",
      "Implemented UI components using HTML, CSS, and JavaScript",
      "Assisted with backend development using Node.js and Express",
      "Participated in agile development processes"
    ]
  }
];

const WorkSection = () => {
  return (
    <section id="work" className="bg-portfolio-super-light-yellow py-24">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="space-y-10">
          {workExperience.map((job) => (
            <div key={job.id} className="portfolio-card relative">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="hidden md:flex items-center justify-center bg-portfolio-light-yellow p-4 rounded-full h-16 w-16 shrink-0">
                  <Briefcase className="text-portfolio-dark-yellow" size={24} />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-portfolio-dark">{job.position}</h3>
                      <p className="text-portfolio-dark-yellow font-medium">{job.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 text-gray-500">
                      <p>{job.duration}</p>
                      <p className="text-sm">{job.location}</p>
                    </div>
                  </div>
                  
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    {job.description.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
