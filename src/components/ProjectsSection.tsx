import React from 'react';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProjectsSection = () => {
  const { toast } = useToast();

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast({
      title: "Repository Access",
      description: "This repository is currently private. A public version is being prepared.",
    });
  };

  const projects = [
    {
      title: "AI Smart Glasses for the Visually Impaired",
      period: "Jan 2025 – Present",
      description: "Designed and integrated AI technologies into smart glasses to help visually impaired individuals navigate their surroundings. Implemented real-time object detection and depth estimation using YOLOv5 and MiDaS models.",
      technologies: ["Python", "YOLOv5", "MiDaS", "OpenCV", "Pygame", "Arduino"]
    },
    {
      title: "Educational WebApp",
      period: "Jan 2025 – Present",
      description: "Developed a web application to help high school students prepare for exams. Implemented a comprehensive question bank and interactive learning features.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"]
    },
    {
      title: "Appointment App for Businesses",
      period: "Mar 2025 – Present",
      description: "Created a web application for managing appointments and meetings. Integrated with various calendar services and implemented automated reminders.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "WebSocket"]
    },
    {
      title: "Machine Learning Project: Laptop Condition & Price Prediction",
      period: "Mar 2024 – May 2024",
      description: "Implemented custom machine learning models to predict laptop conditions and prices based on various features. Achieved high accuracy in predictions.",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      title: "Broadcast Viewership Tracker",
      period: "Nov 2023 – Jan 2024",
      description: "Developed a system to track TV viewership and analyze viewing patterns. Implemented data collection and visualization features.",
      technologies: ["Java", "AccessDB", "Swing", "JFreeChart"]
    },
    {
      title: "Hotel Management System",
      period: "Mar 2023 – May 2023",
      description: "Designed and implemented a comprehensive hotel management system with features for reservations, room management, and billing.",
      technologies: ["Java", "Spring Boot", "MySQL", "Thymeleaf", "Bootstrap"]
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-portfolio-dark mb-2 group-hover:text-portfolio-yellow transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-portfolio-dark opacity-80 mb-4">
                  {project.period}
                </p>
                <p className="text-portfolio-dark mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 bg-portfolio-light-yellow text-portfolio-dark text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 mt-auto">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-white hover:bg-portfolio-light-yellow border-portfolio-light-yellow"
                  onClick={handleGithubClick}
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 bg-white hover:bg-portfolio-light-yellow border-portfolio-light-yellow"
                  disabled
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
