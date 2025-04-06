
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with product listings, cart functionality, and payment processing.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "A responsive portfolio website to showcase projects and skills with a modern UI design.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity application for organizing tasks, setting deadlines, and tracking progress.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
    technologies: ["Vue.js", "Firebase", "Vuetify"],
    liveLink: "#",
    githubLink: "#"
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
        
        <div className="text-center mt-12">
          <Button className="bg-portfolio-yellow hover:bg-portfolio-dark-yellow text-portfolio-dark font-medium px-6 py-2 rounded-full">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
