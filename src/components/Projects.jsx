import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import sivaImg from "../assets/siva.jpg";
import akshaya from "../assets/akshaya.jpg";
import spacesite from "../assets/spacesite.jpg";
import process from "../assets/process.jpg";
import ProjectIntro from "./ProjectIntro";

const Projects = () => {
  const projects = [
    {
      title: "Offer Card Generator",
      client: "Super Market",
      description:
        "Built a React and Tailwind CSS-based tool that allows users to create customizable product offer cards with real-time previews, multiple color styles, and downloadable PNG outputs.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
        "Canvas API",
      ],
      image: akshaya,
      liveLink: "https://akshayasupermarket.netlify.app/",
      features: [
        "Dynamic offer card generation",
        "Canvas-based image rendering",
        "Five stylish color themes",
        "Auto save calculation",
        "Instant preview and download",
      ],
    },
    {
      title: "VFX Artist Portfolio",
      client: "Siva Kandan, Vilupuram",
      description:
        "Developed a responsive and visually engaging portfolio website for a VFX artist using React.js and Tailwind CSS. Implemented smooth animations and modern UI design for enhanced user experience.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      image: sivaImg,
      liveLink: "https://sivakandan.netlify.app/",
      features: [
        "Smooth navigation",
        "Modern UI design",
        "Responsive layout",
        "Animation effects",
        "Fast loading",
      ],
    },
    {
      title: "VFX Studio Company Website",
      client: "Space VFX, Chennai",
      description:
        "Designed and developed a responsive company website for a VFX studio to showcase services, portfolio, and client projects. Focused on clean layout and visual appeal.",
      technologies: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "HTML5",
        "CSS3",
      ],
      image: spacesite,
      liveLink: "https://spacevfx.netlify.app/",
      features: [
        "Clean layout",
        "Fast performance",
        "Client project showcase",
        "Service display",
        "Contact forms",
      ],
    },
  {
  title: "Hospital Management System - (Process)",
  client: "Vedha Clinic",
  description:
    "Created a full-stack project management application using the MERN Stack with JWT authentication, task handling, project management, and activity tracking features. Designed REST APIs and a fully responsive React interface ensuring seamless data flow and usability.",
  technologies: [
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT Authentication",
    "Full Stack",
  ],
  image: process, // உங்க existing image variable எது-use பண்ணுறீங்கோ அதையே வையுங்கள்
  liveLink: "#",
  features: [
    "JWT Authentication",
    "Project creation & management",
    "Task assignment & tracking",
    "Activity logs",
    "Responsive UI",
  ],
}

  ];

  return (
    
    <>
    <ProjectIntro/>
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          My <span className="text-primary-400">Projects</span>
        </h2>

        {/* 2 projects per line */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-primary-500/30 transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 hover:border-primary-500"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity duration-300"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-all duration-300">
                  <div className="flex space-x-4">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-gray-900 p-3 rounded-full hover:bg-primary-400 transition transform hover:scale-110"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1 hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 italic mb-3">
                  Client:{" "}
                  <span className="text-primary-400 font-medium">
                    {project.client}
                  </span>
                </p>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>

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
                    <li
                      key={idx}
                      className="text-gray-400 text-sm flex items-center hover:text-gray-200"
                    >
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
          <p className="text-gray-400 mb-6">
            Interested in seeing more of my work?
          </p>
          <a
            href="#contact"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg inline-flex items-center"
          >
            Let's Discuss Your Project
          </a>
        </div>
      </div>
    </section></>
  );
};

export default Projects;