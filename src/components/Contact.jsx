import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thank you for your message! I will get back to you soon.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">
          Get In <span className="text-primary-400">Touch</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always interested in new opportunities and exciting projects. 
              Whether you need a website, have a question, or just want to connect, 
              feel free to reach out! I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center p-4 bg-gray-800 rounded-2xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 group">
                <div className="text-primary-400 mr-4 group-hover:text-white">
                  <FaPhone size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-300 group-hover:text-gray-200">+91 9047720775</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gray-800 rounded-2xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 group">
                <div className="text-primary-400 mr-4 group-hover:text-white">
                  <FaEnvelope size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300 group-hover:text-gray-200">bskumgar88@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-center p-4 bg-gray-800 rounded-2xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 group">
                <div className="text-primary-400 mr-4 group-hover:text-white">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300 group-hover:text-gray-200">Chennai, India</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  className="bg-gray-800 hover:bg-primary-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="GitHub"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  className="bg-gray-800 hover:bg-primary-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-primary-600 to-emerald-600 rounded-2xl">
              <h4 className="text-white font-semibold mb-2">Available for</h4>
              <ul className="text-gray-200 space-y-1">
                <li className="flex items-center">
                  <span className="text-white mr-2">•</span>
                  Freelance Projects
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">•</span>
                  Full-time Opportunities
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">•</span>
                  Collaboration
                </li>
                <li className="flex items-center">
                  <span className="text-white mr-2">•</span>
                  Technical Consultation
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-white mb-2 font-semibold">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-white mb-2 font-semibold">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-white mb-2 font-semibold">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors"
                  placeholder="Enter subject"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-white mb-2 font-semibold">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-400 transition-colors resize-none"
                  placeholder="Enter your message..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2024 Sureshkumar B. All rights reserved. | MERN Stack Developer
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React.js & Tailwind CSS
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;