import React, { useState, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaPaperPlane, FaArrowUp } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowTopBtn(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    emailjs.send(
      'service_90got2m',       // Your Service ID
      'template_es3caz3',      // Your Template ID
      formData,                // { name, email, subject, message }
      'y3u2zE_OVfd3NAXqz'      // Your Public Key (User ID)
    )
    .then(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSuccess(false), 4000);
    })
    .catch((error) => {
      console.error(error.text);
      setIsSubmitting(false);
      setIsError(true);
      setTimeout(() => setIsError(false), 4000);
    });
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
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Connect</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
            Always open to new opportunities. Feel free to connect!

            </p>

            <div className="space-y-6">
              <div className="flex items-center p-4 bg-gray-800 rounded-2xl">
                <div className="text-primary-400 mr-4"><FaPhone size={24} /></div>
                <div>
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-300">+91 9047720775</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-800 rounded-2xl">
                <div className="text-primary-400 mr-4"><FaEnvelope size={24} /></div>
                <div>
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">bskumaar88@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center p-4 bg-gray-800 rounded-2xl">
                <div className="text-primary-400 mr-4"><FaMapMarkerAlt size={24} /></div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">🏠 Madipakkam, Chennai</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/Bskumaar" target="_blank" rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary-600 text-white p-3 rounded-full transition-all duration-300">
                  <FaGithub size={20} />
                </a>
                <a href="https://linkedin.com/in/suresh-kumar-09a9b4374" target="_blank" rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-primary-600 text-white p-3 rounded-full transition-all duration-300">
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
                  <label className="block text-white mb-2 font-semibold">Your Name</label>
                  <input
                    type="text" name="name" value={formData.name} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2 font-semibold">Your Email</label>
                  <input
                    type="email" name="email" value={formData.email} onChange={handleChange} required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-white mb-2 font-semibold">Subject</label>
                <input
                  type="text" name="subject" value={formData.subject} onChange={handleChange} required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label className="block text-white mb-2 font-semibold">Message</label>
                <textarea
                  name="message" value={formData.message} onChange={handleChange} required rows="6"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none resize-none"
                  placeholder="Enter your message..."
                ></textarea>
              </div>

              <button type="submit" disabled={isSubmitting}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg flex items-center justify-center">
                {isSubmitting ? (
                  <div className="flex items-center"><div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-2"></div>Sending...</div>
                ) : (
                  <><FaPaperPlane className="mr-2"/> Send Message</>
                )}
              </button>

              {isSuccess && <p className="text-green-400 text-center mt-4">✅ Your message has been sent successfully!</p>}
              {isError && <p className="text-red-400 text-center mt-4">❌ Something went wrong. Try again!</p>}
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">© 2025 Sureshkumar B. All rights reserved. | MERN Stack Developer</p>
          <p className="text-gray-500 text-sm mt-2">Built with React.js & Tailwind CSS</p>
        </div>
      </div>

      {/* Back-to-Top Button */}
      <button onClick={scrollToTop} aria-label="Back to top"
        className={`fixed right-6 md:right-10 bottom-6 z-50 p-3 rounded-full shadow-xl transition-all duration-300 ${showTopBtn ? 'opacity-100 scale-100' : 'opacity-0 scale-75 pointer-events-none'} bg-gradient-to-r from-primary-500 to-primary-700 text-white`}>
        <FaArrowUp />
      </button>
    </section>
  );
};

export default Contact;
