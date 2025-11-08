import React, { useEffect, useState } from "react";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/suresh.jpeg";

const Hero = () => {
  const [codeText, setCodeText] = useState("");
  const fullCode = `
  import React from "react";
  import { FaLaptopCode, FaPalette, FaCalculator } from "react-icons/fa";
  
  const Experience = () => {
    const experiences = [
      {
        title: "MERN Stack Developer",
        company: "Freelancer",
        period: "Sep 2024 – Present",
        icon: <FaLaptopCode className="text-blue-400 text-4xl" />,
        responsibilities: [
          "Developed and maintained dynamic websites using MERN Stack.",
          "Built responsive UI and optimized performance.",
          "Handled end-to-end project lifecycle and client communication.",
        ],
      },
      {
        title: "VFX Artist",
        company: "Future Works Media Ltd, Chennai",
        period: "Oct 2022 – Sep 2024",
        icon: <FaPalette className="text-purple-400 text-4xl" />,
        responsibilities: [
          "Worked on visual effects for movies and commercials.",
          "Collaborated with creative teams to deliver quality visuals.",
          "Managed tight production schedules and deadlines.",
        ],
      },
      {
        title: "Accountant & Computer Operator",
        company: "TN HR&CE, Vecharanyam",
        period: "2015 – 2021",
        icon: <FaCalculator className="text-green-400 text-4xl" />,
        responsibilities: [
          "Managed daily accounting operations and data entry.",
          "Prepared and maintained financial reports.",
          "Ensured accurate and timely record keeping.",
        ],
      },
      {
        title: "VFX Artist",
        company: "Future Works Media Ltd, Chennai",
        period: "Feb 2011 – Feb 2013",
        icon: <FaPalette className="text-purple-400 text-4xl" />,
        responsibilities: [
          "Created realistic visual effects for film projects.",
          "Maintained artistic consistency and visual fidelity.",
          "Delivered top-quality work under production deadlines.",
        ],
      },
    ];
  
    return (
      <section id="experience" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16 text-white">
            Work <span className="text-primary-500">Experience</span>
          </h2>
  
          {/* Single Row - 4 Cards Side by Side */}
          <div className="flex flex-wrap justify-center gap-6">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="w-full sm:w-[48%] lg:w-[23%] bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-700 transition-all duration-500 ease-in-out hover:(scale-105 -translate-y-2 border-blue-500 shadow-blue-500/30)"
              >
                <div className="flex items-center mb-4 space-x-4">
                  {exp.icon}
                  <div>
                    <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                    <p className="text-primary-400 font-semibold">{exp.company}</p>
                    <p className="text-gray-400 text-sm">{exp.period}</p>
                  </div>
                </div>
  
                <ul className="space-y-2 mt-4">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-gray-300 flex items-start">
                      <span className="text-blue-400 mr-2 mt-1 flex-shrink-0">
                        ▹
                      </span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Experience;
  
  `;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCodeText(fullCode.substring(0, index));
      index++;
      if (index > fullCode.length) index = 0;
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden pt-20"
    >
      {/* Background code animation */}
      <div className="absolute left-0 top-0 w-1/2 h-full opacity-10 text-green-400 font-mono text-sm whitespace-pre-wrap px-6 leading-6 overflow-hidden">
        <pre className="animate-fade">{codeText}</pre>
      </div>
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 text-green-400 font-mono text-sm whitespace-pre-wrap px-6 leading-6 overflow-hidden text-right">
        <pre className="animate-fade">{codeText}</pre>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg animate-float">
          <img
            src={profile}
            alt="Sureshkumar"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-400 animate-pulse">
          Sureshkumar Balakrishnan
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          <TypeAnimation
            sequence={["MERN Stack Developer", 2000, "Freelancer", 2000]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            cursor={true}
          />
        </h2>

        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Building modern, responsive web applications as a freelancer. Actively looking for a full-time role where I can contribute and grow as a developer.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-primary-400 text-primary-400 hover:bg-primary-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center"
          >
            <FaDownload className="mr-2" />
            View Resume
          </a>

          {/* ✅ New Hire Me Button */}
          <a
            href="#contact"
            className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Hire Me
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/Bskumaar"
            target="_blank"
            className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-125 hover:bg-gray-800 p-3 rounded-full"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/suresh-kumar-09a9b4374"
            target="_blank"
            className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-125 hover:bg-gray-800 p-3 rounded-full"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bskumaar88@gmail.com"
            target="_blank"
            className="text-gray-400 hover:text-primary-400 transition-colors duration-300 transform hover:scale-125 hover:bg-gray-800 p-3 rounded-full"
            aria-label="Email"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      <style>{`
        @keyframes fade { from { opacity: 0; } to { opacity: 1; } }
        .animate-fade { animation: fade 1s ease-in; }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .animate-float { animation: float 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
