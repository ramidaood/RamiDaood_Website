
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "RayBan-Meta Object Detection AI",
    description: "Working on integrating AI detection model into the Ray-Ban meta Smart Glasses to help the blind and visually impaired navigate on a day-to-day basis.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
    technologies: ["AI", "Object Detection", "Smart Glasses", "Accessibility"],
    liveLink: "#",
    githubLink: "#",
    status: "In Progress"
  },
  {
    id: 2,
    title: "Educational WebApp",
    description: "Leading the development of an Educational WebApp that aims to help high school students prepare for finals using REACT.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    technologies: ["React", "Education", "Web Development"],
    liveLink: "#",
    githubLink: "#",
    status: "In Progress"
  },
  {
    id: 3,
    title: "Hotel Management System",
    description: "Developed a system for managing hotel reservations and resources using Java, implementing tiered access levels for staff roles.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    technologies: ["Java", "Database Management", "User Access Control"],
    liveLink: "#",
    githubLink: "#",
    status: "Completed"
  },
  {
    id: 4,
    title: "Broadcast Viewership Tracker",
    description: "Created a system using Java and AccessDB to track and analyze viewing habits of households, with features for adding and modifying data through XML files.",
    image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?auto=format&fit=crop&q=80",
    technologies: ["Java", "AccessDB", "XML", "Data Analysis"],
    liveLink: "#",
    githubLink: "#",
    status: "Completed"
  },
  {
    id: 5,
    title: "Machine Learning: Laptop Condition and Price Prediction",
    description: "Developed and implemented custom decision tree and random forest algorithms to predict laptop conditions and prices.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib"],
    liveLink: "#",
    githubLink: "#",
    status: "Completed"
  },
  {
    id: 6,
    title: "Appointment App for Businesses",
    description: "Building an App for Businesses to set up their own page for setting appointments and meetings.",
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&q=80",
    technologies: ["Mobile Development", "Business Solutions", "Scheduling"],
    liveLink: "#",
    githubLink: "#",
    status: "In Progress"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-portfolio-super-light-yellow py-24">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="portfolio-card flex flex-col h-full">
              <div className="h-48 w-full mb-4 rounded-md overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-2 text-portfolio-dark">{project.title}</h3>
              
              <div className="mb-2">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  project.status === "Completed" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800"
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4 flex-grow">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-portfolio-light-yellow px-2 py-1 rounded-md text-sm text-portfolio-dark">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3 mt-auto">
                <Button 
                  variant="outline"
                  className="flex-1 border-portfolio-yellow text-portfolio-dark hover:bg-portfolio-light-yellow"
                >
                  <Github size={16} className="mr-2" />
                  Code
                </Button>
                <Button 
                  className="flex-1 bg-portfolio-yellow text-portfolio-dark hover:bg-portfolio-dark-yellow"
                >
                  <ExternalLink size={16} className="mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
