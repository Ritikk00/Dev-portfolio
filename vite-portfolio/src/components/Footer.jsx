import React from 'react';
import { Heart } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { socialLinks } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black dark:from-gray-950 dark:to-black text-white py-12 sm:py-16 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Ritik Singh</h3>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              Full Stack Developer passionate about building exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center">
            <h4 className="text-base sm:text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-sm sm:text-base font-medium hover:translate-y-[-2px]"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4 text-center sm:text-right">
            <h4 className="text-base sm:text-lg font-semibold text-white">Connect With Me</h4>
            <div className="flex space-x-3 justify-center sm:justify-end">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full hover:from-gray-700 hover:to-gray-600 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full hover:from-blue-700 hover:to-blue-600 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="p-2.5 sm:p-3 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full hover:from-red-700 hover:to-red-600 transition-all duration-300 hover:scale-110 active:scale-95"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col items-center justify-center space-y-3 sm:space-y-0 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {currentYear} Ritik Singh. All rights reserved.
          </p>
          <p className="text-gray-400 text-xs sm:text-sm flex items-center justify-center space-x-1">
            <span>Built with</span>
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;