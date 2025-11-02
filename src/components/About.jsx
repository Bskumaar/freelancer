import React from 'react';
import { FaCode, FaServer, FaTools } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          About <span className="text-primary-400">Me</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300 border border-gray-700">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              MERN Stack Developer with 1 year of freelance experience in building responsive 
              and user-friendly web applications. Skilled in React.js, Node.js, Express.js, 
              MongoDB, and JavaScript. Experienced in developing full-stack projects for clients 
              and passionate about creating innovative digital solutions.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center p-6 bg-gray-800 rounded-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 group">
                <FaCode className="text-4xl text-primary-400 mb-4 mx-auto group-hover:text-white" />
                <h3 className="text-xl font-semibold text-primary-400 mb-2 group-hover:text-white">Frontend</h3>
                <p className="text-gray-300 group-hover:text-gray-200">React.js, HTML5, CSS3, JavaScript, Tailwind CSS</p>
              </div>
              
              <div className="text-center p-6 bg-gray-800 rounded-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 group">
                <FaServer className="text-4xl text-primary-400 mb-4 mx-auto group-hover:text-white" />
                <h3 className="text-xl font-semibold text-primary-400 mb-2 group-hover:text-white">Backend</h3>
                <p className="text-gray-300 group-hover:text-gray-200">Node.js, Express.js, MongoDB, REST APIs</p>
              </div>
              
              <div className="text-center p-6 bg-gray-800 rounded-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 group">
                <FaTools className="text-4xl text-primary-400 mb-4 mx-auto group-hover:text-white" />
                <h3 className="text-xl font-semibold text-primary-400 mb-2 group-hover:text-white">Tools</h3>
                <p className="text-gray-300 group-hover:text-gray-200">Figma, Git, VS Code, Photoshop, Postman</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-600 to-emerald-600 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-3">Why Choose Me?</h3>
              <ul className="text-gray-200 space-y-2">
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Clean and maintainable code
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Responsive and mobile-first design
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Fast loading and optimized performance
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">✓</span>
                  Modern UI/UX best practices
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;