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
