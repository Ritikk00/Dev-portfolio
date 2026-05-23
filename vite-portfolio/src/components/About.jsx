import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, experience } from '../data/mock';
import { Briefcase, X, Award } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
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

  const handleOpenCertificate = () => {
    setShowCertificate(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseCertificate = () => {
    setShowCertificate(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
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
            About Me
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Bio Section */}
          <div 
            className="space-y-4 sm:space-y-6 order-2 md:order-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Professional Background
            </h3>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              {personalInfo.bio}
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I excel at creating
              end-to-end solutions that are not only functional but also maintainable and scalable.
              My approach combines clean code practices with modern architectural patterns.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
              I'm passionate about staying updated with the latest technologies and best practices,
              continuously learning and adapting to deliver cutting-edge solutions. I believe in
              writing code that speaks for itself and building systems that stand the test of time.
            </p>

            {/* Certificate Button */}
            <button
              onClick={handleOpenCertificate}
              className="w-full sm:w-auto mobile-btn inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 group mt-2"
            >
              <Award className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              <span>View Certificate</span>
            </button>
          </div>

          {/* Experience Timeline */}
          <div 
            className="space-y-4 sm:space-y-6 order-1 md:order-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
            }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
              Experience
            </h3>
            <div className="space-y-4 sm:space-y-6">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative pl-6 sm:pl-8 pb-6 border-l-2 border-blue-600 dark:border-blue-400 last:border-l-0 last:pb-0"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.6 + index * 0.2}s`
                  }}
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="mobile-card bg-white dark:bg-gray-700 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:md:-translate-y-1 active:scale-95 md:active:scale-100">
                    <div className="flex items-start space-x-2 sm:space-x-3 mb-3">
                      <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white truncate">
                          {exp.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm truncate">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-2">
                      {exp.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal */}
      {showCertificate && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={handleCloseCertificate}
          style={{
            animation: 'fadeIn 0.3s ease-out'
          }}
        >
          <div 
            className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              animation: 'zoomIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)'
            }}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseCertificate}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition-all duration-300 hover:scale-110 shadow-lg active:scale-95"
              aria-label="Close certificate"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Certificate Image */}
            <div className="p-4 sm:p-8">
              <img
                src="https://images.unsplash.com/photo-1589330273594-fade1ee91647?w=1200&h=800&fit=crop"
                alt="Professional Certificate"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="mt-4 sm:mt-6 text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Full Stack Development Certificate
                </h3>
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                  Awarded for excellence in modern web development technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.5);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
      `}</style>
    </section>
  );
};

export default About;