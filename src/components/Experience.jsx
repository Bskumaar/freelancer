import React from 'react';
import { FaLaptopCode, FaPalette, FaCalculator } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Developer",
      company: "Space VFX, Chennai",
      period: "Sep 2024 – Present",
      icon: <FaLaptopCode className="text-primary-400" />,
      responsibilities: [
        "Developed and maintained dynamic websites and product management systems using MERN Stack",
        "Collaborated with clients to design responsive, performance-optimized web interfaces",
        "Managed end-to-end project lifecycles and ensured smooth website performance",
        "Implemented regular updates, bug fixes, and UI/UX enhancements"
      ],
      type: "web"
    },
    {
      title: "VFX Artist",
      company: "Future Works Media Ltd, Chennai",
      period: "Oct 2022 – Sep 2024",
      icon: <FaPalette className="text-purple-400" />,
      responsibilities: [
        "Worked on visual effects for various media projects",
        "Collaborated with creative teams to deliver high-quality VFX",
        "Managed multiple projects with tight deadlines",
        "Maintained quality standards across all deliverables"
      ],
      type: "vfx"
    },
    {
      title: "Accountant and Computer Operator",
      company: "TN HR&CE, Vecharanyam",
      period: "2015 – 2021",
      icon: <FaCalculator className="text-green-400" />,
      responsibilities: [
        "Managed accounting operations and financial records",
        "Handled computer operations and data management",
        "Maintained systematic records and documentation",
        "Ensured accurate financial reporting"
      ],
      type: "accounting"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Work <span className="text-primary-400">Experience</span>
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-primary-500/30 rounded-full"></div>
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-800 z-10"></div>
                
                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-gray-900 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-primary-500">
                    <div className="flex items-start mb-4">
                      <div className="text-3xl mr-4">
                        {exp.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                          <p className="text-primary-400 font-semibold text-lg">{exp.company}</p>
                          <span className="text-gray-400 bg-gray-800 px-3 py-1 rounded-full text-sm mt-1 sm:mt-0">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start">
                          <span className="text-primary-400 mr-2 mt-1 flex-shrink-0">▹</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;