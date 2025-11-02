import React from 'react';
import { FaGraduationCap, FaAward, FaCertificate } from 'react-icons/fa';

const Education = () => {
  const items = [
    {
      title: "BSc – Visual Communication",
      subtitle: "Gurunank College, Chennai",
      period: "2007 – 2010",
      score: "55.06%",
      icon: <FaGraduationCap className="text-primary-400" />,
      type: "Education"
    },
    {
      title: "12th Standard",
      subtitle: "SKS Higher Secondary School, Vecharanyam",
      period: "2007",
      score: "52.25%",
      icon: <FaAward className="text-green-400" />,
      type: "Education"
    },
    {
      title: "10th Standard",
      subtitle: "Govt Higher Secondary School, Sembodai",
      period: "2005",
      score: "71%",
      icon: <FaAward className="text-yellow-400" />,
      type: "Education"
    },
    {
      title: "MERN Stack Development",
      subtitle: "Besant Technologies, Velachary, Chennai",
      period: "2024",
      score: "Completed",
      icon: <FaCertificate className="text-primary-400" />,
      type: "Certification"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Education & <span className="text-primary-400">Certifications</span>
        </h2>

        {/* 2x2 Grid Layout */}
        <div className="grid sm:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 shadow-2xl border border-gray-700 hover:border-primary-500 transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-4">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                  <p className="text-primary-400 font-semibold">{item.subtitle}</p>
                </div>
              </div>

              <div className="flex justify-between items-center mt-4">
                <span className="text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
                  {item.period}
                </span>
                <span className="text-white bg-primary-600 px-3 py-1 rounded-full font-semibold">
                  {item.type === "Certification" ? item.score : `Score: ${item.score}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
