import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaServer, FaTools } from "react-icons/fa";

const About = () => {
  const steps = [
    {
      year: "2011 – 2013",
      title: "🎬 Journey as a VFX Artist",
      desc: "I began my career as a VFX Artist, working creatively and gaining valuable experience in the digital media field. Those years helped me understand the importance of precision, creativity, and visual storytelling.",
      color: "border-primary-500",
      text: "text-primary-400",
      direction: "left"
    },
    {
      year: "2015 – 2021",
      title: "💻 Computer Operator (HR & CE Department)",
      desc: "After facing health and family challenges, I moved back to my hometown and worked as a Computer Operator. This period helped me develop strong technical and administrative skills, improving my efficiency with computer systems.",
      color: "border-emerald-500",
      text: "text-emerald-400",
      direction: "right"
    },
    {
      year: "2022",
      title: "🌟 Back to the VFX Industry",
      desc: "After 9 years, I got the opportunity to rejoin the VFX industry. Returning to my passion gave me immense confidence and reminded me of my love for creative work.",
      color: "border-indigo-500",
      text: "text-indigo-400",
      direction: "left"
    },
    {
      year: "2023 – Present",
      title: "🧠 Transition to Software Development",
      desc: "In 2023, I started learning web development. I began with HTML and soon mastered CSS, Bootstrap, JavaScript, and React.js. Later, I completed the MERN Stack to become a full-stack developer.",
      color: "border-pink-500",
      text: "text-pink-400",
      direction: "right"
    },
    {
      year: "Current",
      title: "🚀 Freelance Developer",
      desc: "I am currently working as a Freelance Developer, building responsive, user-friendly web applications for clients. My next goal is to join a software company and grow into a skilled MERN Stack Developer.",
      color: "border-yellow-500",
      text: "text-yellow-400",
      direction: "left"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900 text-gray-200 overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-4 text-white"
        >
          About <span className="text-primary-400">Me</span>
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          className="w-24 h-1 bg-primary-500 mx-auto mb-12 rounded-full origin-left"
        ></motion.div>

        {/* Timeline Steps */}
        <div className="max-w-4xl mx-auto bg-gray-800/60 backdrop-blur-md p-10 rounded-3xl shadow-xl border border-gray-700 space-y-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: step.direction === "left" ? -100 : 100,
                scale: 0.95
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                scale: 1
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
              className={`bg-gray-800 rounded-2xl p-6 border-l-4 ${step.color} shadow-md`}
            >
              <h3 className={`text-xl font-semibold ${step.text} mb-2`}>
                {step.title}
              </h3>
              <p className="text-gray-400 italic mb-2">{step.year}</p>
              <p className="text-gray-300 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}

          {/* Closing Note */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-emerald-600 rounded-2xl p-6 shadow-lg"
          >
            <p className="text-white text-lg font-medium leading-relaxed">
              I may not be the best developer yet, but I’m improving every day —
              learning, coding, and striving to become one of the best in the field. 💻✨
            </p>
          </motion.div>
        </div>

        {/* Skills Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {[
            {
              icon: <FaCode className="text-4xl text-primary-400 mb-4 mx-auto" />,
              title: "Frontend",
              desc: "React.js, HTML5, CSS3, JavaScript, Tailwind CSS"
            },
            {
              icon: <FaServer className="text-4xl text-primary-400 mb-4 mx-auto" />,
              title: "Backend",
              desc: "Node.js, Express.js, MongoDB, REST APIs"
            },
            {
              icon: <FaTools className="text-4xl text-primary-400 mb-4 mx-auto" />,
              title: "Tools",
              desc: "Figma, Git, VS Code, Photoshop, Postman"
            }
          ].map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-gray-800 rounded-2xl hover:bg-primary-600 transition-all duration-300 hover:scale-105"
            >
              {skill.icon}
              <h3 className="text-xl font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
