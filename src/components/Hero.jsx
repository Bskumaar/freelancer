import React, { useEffect, useState } from "react";
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope, FaHeart, FaThumbsDown, FaEye } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/suresh.jpeg";

const Hero = () => {
  const [codeText, setCodeText] = useState("");
  const [views, setViews] = useState(0);
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const fullCode = `
  import React from "react";
  const Projects = () => {
    return <section id="projects">My Projects</section>;
  };
  export default Projects;
  `;

  // Typing animation
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setCodeText(fullCode.substring(0, index));
      index++;
      if (index > fullCode.length) index = 0;
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // View count
  useEffect(() => {
    fetch("https://api.countapi.xyz/hit/suresh-portfolio/views")
      .then((res) => res.json())
      .then((data) => setViews(data.value));
  }, []);

  // Like
  const handleLike = () => {
    if (!liked && !disliked) {
      setLiked(true);
      fetch("https://api.countapi.xyz/update/suresh-portfolio/likes/?amount=1")
        .then((res) => res.json())
        .then((data) => setLikes(data.value));
    }
  };

  // Dislike
  const handleDislike = () => {
    if (!disliked && !liked) {
      setDisliked(true);
      fetch("https://api.countapi.xyz/update/suresh-portfolio/dislikes/?amount=1")
        .then((res) => res.json())
        .then((data) => setDislikes(data.value));
    }
  };

  // Load current like/dislike count
  useEffect(() => {
    fetch("https://api.countapi.xyz/get/suresh-portfolio/likes")
      .then((res) => res.json())
      .then((data) => setLikes(data.value || 0));
    fetch("https://api.countapi.xyz/get/suresh-portfolio/dislikes")
      .then((res) => res.json())
      .then((data) => setDislikes(data.value || 0));
  }, []);

  const total = likes + dislikes;
  const likePercent = total ? (likes / total) * 100 : 0;
  const dislikePercent = total ? (dislikes / total) * 100 : 0;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden pt-20"
    >
      {/* Left background typing */}
      <div className="absolute left-0 top-0 w-1/2 h-full opacity-10 text-green-400 font-mono text-sm whitespace-pre-wrap px-6 leading-6 overflow-hidden">
        <pre className="animate-fade">{codeText}</pre>
      </div>

      {/* Right background typing */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 text-green-400 font-mono text-sm whitespace-pre-wrap px-6 leading-6 overflow-hidden text-right">
        <pre className="animate-fade">{codeText}</pre>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg animate-float">
          <img
            src={profile}
            alt="Sureshkumar"
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-primary-400 animate-pulse">
          Sureshkumar B
        </h1>

        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              2000,
              "Freelancer",
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

        {/* View / Like / Dislike Section */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex space-x-6 text-lg mb-4">
            <div className="flex items-center space-x-2 text-gray-300">
              <FaEye className="text-primary-400" />
              <span>{views} Views</span>
            </div>
            <button
              onClick={handleLike}
              disabled={liked || disliked}
              className={`flex items-center space-x-2 transition-all ${
                liked ? "text-green-400" : "text-gray-400 hover:text-green-400"
              }`}
            >
              <FaHeart />
              <span>{likes}</span>
            </button>
            <button
              onClick={handleDislike}
              disabled={liked || disliked}
              className={`flex items-center space-x-2 transition-all ${
                disliked ? "text-red-400" : "text-gray-400 hover:text-red-400"
              }`}
            >
              <FaThumbsDown />
              <span>{dislikes}</span>
            </button>
          </div>

          {/* Reaction Progress Bar */}
          <div className="w-64 h-3 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-500"
              style={{ width: `${likePercent}%` }}
            ></div>
            <div
              className="h-full bg-red-500 transition-all duration-500 -mt-3"
              style={{ width: `${dislikePercent}%` }}
            ></div>
          </div>

          <p className="text-sm text-gray-400 mt-2">
            👍 {likePercent.toFixed(0)}% | 👎 {dislikePercent.toFixed(0)}%
          </p>
        </div>

        {/* Resume Button */}
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
        @keyframes fade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade {
          animation: fade 1s ease-in;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
