import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      title: "VFX Artist Portfolio",
      description: "Developed a responsive and visually engaging portfolio website for a VFX artist using React.js and Tailwind CSS. Implemented smooth animations and modern UI design for enhanced user experience.",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
      image: "/vfx-portfolio.jpg",
      liveLink: "#",
      githubLink: "#",
      features: ["Smooth navigation", "Modern UI design", "Responsive layout", "Animation effects", "Fast loading"]
    },
    {
      title: "VFX Studio Company Website",
      description: "Designed and developed a responsive company website for a VFX studio to showcase services, portfolio, and client projects. Focused on clean layout and visual appeal.",
      technologies: ["React.js", "Bootstrap 5", "JavaScript", "HTML5", "CSS3"],
      image: "/vfx-studio.jpg",
      liveLink: "#",
      githubLink: "#",
      features: ["Clean layout", "Fast performance", "Client project showcase", "Service display", "Contact forms"]
    },
    {
      title: "Project Management System",
      description: "Currently developing a comprehensive project management web application using MERN Stack with features for task tracking, team collaboration, and progress monitoring.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Full Stack"],
      image: "/pms.jpg",
      liveLink: "#",
      githubLink: "#",
      features: ["User authentication", "Project tracking", "Task management", "Real-time updates", "Team collaboration"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          My <span className="text-primary-400">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-300 group border border-gray-700 hover:border-primary-500"
            >
              <div className="h-48 bg-gradient-to-br from-primary-600 to-emerald-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary-400 transition-colors transform hover:scale-110"
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={project.githubLink}
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary-400 transition-colors transform hover:scale-110"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Project {index + 1}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm hover:bg-primary-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-2">
                  {project.features.map((feature, idx) => (
                    <li key={idx} className="text-gray-400 text-sm flex items-center group-hover:text-gray-300">
                      <span className="text-primary-400 mr-2">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 mb-6">Interested in seeing more of my work?</p>
          <a
            href="#contact"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;