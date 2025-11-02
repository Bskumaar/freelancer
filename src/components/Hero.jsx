import React from 'react';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import profile from "../assets/suresh.jpeg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-primary-900 pt-20 relative"
    >
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          {/* 🔹 Profile Image */}
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-pink-500 shadow-lg animate-float">
            <img
              src={profile}
              alt="Sureshkumar"
              className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
            />
          </div>

          {/* 🔹 Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-rose-400 animate-pulse">
            Sureshkumar B
          </h1>

          {/* 🔹 Typing Animation */}
          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2000,
                'Freelancer',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={true}
            />
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
            Building modern, responsive web applications as a freelancer. Actively looking for a full-time role where I can contribute and grow as a developer.
          </p>

          {/* 🔹 Resume Button */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-pink-400 text-pink-400 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
            >
              <FaDownload className="mr-2" />
              View Resume
            </a>
          </div>

          {/* 🔹 Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Bskumaar"
              target="_blank"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-125 hover:bg-gray-800 p-3 rounded-full"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/suresh-kumar-09a9b4374"
              target="_blank"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-125 hover:bg-gray-800 p-3 rounded-full"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=bskumaar88@gmail.com"
              target="_blank"
              className="text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-125 hover:bg-gray-800 p-3 rounded-full"
              aria-label="Email"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>

        {/* 🔹 Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-pink-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
