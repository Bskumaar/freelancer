import React from 'react';
import { FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiJavascript, SiHtml5, SiCss3, SiBootstrap, SiTailwindcss } from 'react-icons/si';

const Skills = () => {
  const skills = [
    { name: 'React.js', icon: <FaReact className="text-primary-400" />, level: 75 },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-500" />, level: 65 },
    { name: 'Express.js', icon: <SiExpress className="text-gray-300" />, level: 75 },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-400" />, level: 65 },
    { name: 'JavaScript', icon: <SiJavascript className="text-yellow-400" />, level: 85 },
    { name: 'HTML5', icon: <SiHtml5 className="text-orange-500" />, level: 90 },
    { name: 'CSS3', icon: <SiCss3 className="text-blue-500" />, level: 85 },
    { name: 'Bootstrap', icon: <SiBootstrap className="text-purple-500" />, level: 85 },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" />, level: 85 },
    { name: 'GitHub', icon: <FaGitAlt className="text-red-500" />, level: 75 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Technical <span className="text-primary-400">Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-800 rounded-xl p-6 text-center transform hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:bg-primary-600 group border border-gray-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl mb-4 transform group-hover:scale-125 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-white">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div
                  className="bg-primary-500 h-2 rounded-full transition-all duration-1000 ease-out group-hover:bg-white"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-400 mt-2 group-hover:text-gray-200">{skill.level}%</span>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold text-primary-400 mb-4">Frontend Expertise</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="text-primary-400 mr-2">▹</span>
                  Responsive Web Design
                </li>
                <li className="flex items-center">
                  <span className="text-primary-400 mr-2">▹</span>
                  Modern React Development
                </li>
                <li className="flex items-center">
                  <span className="text-primary-400 mr-2">▹</span>
                  State Management
                </li>
                <li className="flex items-center">
                  <span className="text-primary-400 mr-2">▹</span>
               Form Handling & Validation
                </li>
                <li className="flex items-center">
                  <span className="text-primary-400 mr-2">▹</span>
                  UI/UX Implementation
                </li>
              </ul>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700">
              <h3 className="text-xl font-semibold text-primary-400 mb-4">Backend & Tools</h3>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <span className="text-primary-400 mr-2">▹</span>
                  REST API Development
                </li>
                <li className="flex items-center">
                  <span className="text-primary-400 mr-2">▹</span>
                  Database Design
                </li>
                <li className="flex items-center">
                  <span className="text-primary-400 mr-2">▹</span>
                 Package Management
                </li>
                <li className="flex items-center">
                  <span className="text-primary-400 mr-2">▹</span>
                 Authentication & Security 
                </li>
                   <li className="flex items-center">
                  <span className="text-primary-400 mr-2">▹</span>
                  Version Control (Git)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;