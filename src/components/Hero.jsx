import React from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-primary-900 pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-primary-500 flex items-center justify-center text-white text-4xl font-bold border-4 border-primary-400 shadow-lg animate-float">
            SB
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-emerald-400 animate-pulse">
            Sureshkumar B
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 animate-bounce-slow">
            MERN Stack Developer
          </h2>
          
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Building responsive and user-friendly web applications with modern technologies. 
            Passionate about creating innovative digital solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <a
              href="#contact"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center"
            >
              Get In Touch
            </a>
            <a
              href="/resume.pdf"
              className="border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <FaDownload className="mr-2" />
              Download Resume
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a 
              href="https://github.com/yourusername" 
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-125 hover:bg-gray-800 p-3 rounded-full"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-125 hover:bg-gray-800 p-3 rounded-full"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:bskumgar88@gmail.com" 
              className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-125 hover:bg-gray-800 p-3 rounded-full"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;