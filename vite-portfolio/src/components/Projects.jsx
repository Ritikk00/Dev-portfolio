import React, { useState, useEffect, useRef } from 'react';
import { projects, socialLinks } from '../data/mock';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const currentRef = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div 
          className="text-center mb-12 sm:mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            A showcase of my recent work demonstrating technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group mobile-card bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:md:-translate-y-2 active:scale-95 md:active:scale-100"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
                transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-40 sm:h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6 space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 bg-gradient-to-r from-blue-100 to-blue-50 dark:from-blue-900/60 dark:to-blue-800/40 text-blue-700 dark:text-blue-300 text-xs font-semibold rounded-full hover:scale-110 transition-transform duration-300 whitespace-nowrap"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links - Stylish Buttons */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 sm:pt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 mobile-btn flex items-center justify-center space-x-2 px-4 py-2.5 sm:py-3 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 hover:from-gray-800 hover:to-gray-700 dark:hover:from-gray-700 dark:hover:to-gray-600 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold group/btn text-sm sm:text-base"
                  >
                    <FaGithub className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 mobile-btn flex items-center justify-center space-x-2 px-4 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 font-semibold group/btn text-sm sm:text-base"
                  >
                    <FaExternalLinkAlt className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects Button */}
        <div 
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.8s'
          }}
        >
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 sm:space-x-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-700 dark:to-gray-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl group mobile-btn text-sm sm:text-base w-full sm:w-auto"
          >
            <FaGithub className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
            <span className="hidden sm:inline">View More Projects on GitHub</span>
            <span className="sm:hidden">More Projects</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;