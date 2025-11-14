import React, { useEffect, useState } from "react";

const ProjectIntro = () => {
  const experiencePoints = [
    "Developed several full-stack web applications for different business domains, solving real-world client requirements.",
    "Built responsive UIs with React.js, optimized using Tailwind CSS and Bootstrap.",
    "Implemented backend functionalities including API creation, user authentication, CRUD operations, and MongoDB integration using Node.js and Express.js.",
    "Utilized React Router, React Hook Form, useState, and useEffect for structured, dynamic UI management.",
    "Collaborated with clients to gather requirements, plan project architecture, and deliver end-to-end web solutions with optimized performance and usability.",
    "Focused on delivering scalable, maintainable, and high-performance web applications tailored to client needs.",
  ];

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("projects-card");
      if (element) {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Project <span className="text-primary-400">Experience</span>
        </h2>

        <div
          id="projects-card"
          className={`bg-gray-800 rounded-2xl p-8 border border-gray-700 transition-all duration-700 ease-in-out transform ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          } hover:border-primary-400`}
        >
          <h3 className="text-2xl font-semibold text-white mb-2">
           Practice & Freelance-Based Learning Work
          </h3>
          

          <ul className="list-disc list-inside text-gray-300 space-y-3">
            {experiencePoints.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntro;