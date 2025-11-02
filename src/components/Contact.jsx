import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaArrowUp } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 4000);
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-900 relative">
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
              Currently, I'm learning and preparing for a full-time developer role — feel free to reach out!
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
                  <p className="text-gray-300 group-hover:text-gray-200">bskumaar88@gmail.com</p>
                </div>
              </div>
              
              {/* Location Section */}
              <div className="flex items-center p-4 bg-gray-800 rounded-2xl hover:bg-primary-600 transition-all duration-300 transform hover:scale-105 group">
                <div className="text-primary-400 mr-4 group-hover:text-white">
                  <FaMapMarkerAlt size={24} />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300 group-hover:text-gray-200">
                    <span className="block">🏠 Local: Madipakkam, Chennai</span>
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/sureshkumarb"
                  className="bg-gray-800 hover:bg-primary-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="GitHub"
                  target="_blank" rel="noopener noreferrer"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/sureshkumarb"
                  className="bg-gray-800 hover:bg-primary-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                  aria-label="LinkedIn"
                  target="_blank" rel="noopener noreferrer"
                >
                  <FaLinkedin size={20} />
                </a>
              </div>
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

              {isSuccess && (
                <p className="text-green-400 text-center mt-4 animate-fade-in">
                  ✅ Your message has been sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            © 2025 Sureshkumar B. All rights reserved. | MERN Stack Developer
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Built with React.js & Tailwind CSS
          </p>
        </div>
      </div>

      {/* Floating Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed right-6 md:right-10 bottom-6 z-50 p-3 rounded-full shadow-xl transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-300 ${
          showTopBtn ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'
        } bg-gradient-to-r from-primary-500 to-primary-700 text-white`}
      >
        <FaArrowUp />
      </button>
    </section>
  );
};

export default Contact;
