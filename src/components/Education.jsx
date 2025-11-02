import React from 'react';
import { FaGraduationCap, FaAward, FaCertificate } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "BSc – Visual Communication",
      institution: "Gurunank College, Chennai",
      period: "2007 – 2010",
      score: "55.06%",
      icon: <FaGraduationCap className="text-primary-400" />
    },
    {
      degree: "12th Standard",
      institution: "SKS Higher Secondary School, Vecharanyam",
      period: "2007",
      score: "52.25%",
      icon: <FaAward className="text-primary-400" />
    },
    {
      degree: "10th Standard",
      institution: "Govt Higher Secondary School, Sembodai",
      period: "2005",
      score: "71%",
      icon: <FaAward className="text-primary-400" />
    }
  ];

  const certifications = [
    {
      name: "MERN Stack Development",
      institution: "Besant Technologies, Velachary, Chennai",
      year: "2024",
      icon: <FaCertificate className="text-primary-400" />
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Education & <span className="text-primary-400">Certifications</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <FaGraduationCap className="text-primary-400 mr-3" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-primary-500"
                >
                  <div className="flex items-start mb-4">
                    <div className="text-2xl mr-4">
                      {edu.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                      <p className="text-primary-400 font-semibold">{edu.institution}</p>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                    <span className="text-white bg-primary-500 px-3 py-1 rounded-full font-semibold">
                      Score: {edu.score}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <FaAward className="text-primary-400 mr-3" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-2xl p-6 shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-primary-500"
                >
                  <div className="flex items-start mb-4">
                    <div className="text-2xl mr-4">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-white mb-1">{cert.name}</h4>
                      <p className="text-primary-400 font-semibold mb-3">{cert.institution}</p>
                    </div>
                  </div>
                  <span className="text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                    Completed: {cert.year}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
