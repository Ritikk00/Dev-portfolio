import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../data/mock';
import {
  SiHtml5,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiMysql,
  SiDocker,
  SiRedis,
  SiGithub,
  SiJavascript,
  SiPostman
} from 'react-icons/si';

// Icon mapping for skills with real brand icons
const iconMap = {
  htmlcss: SiHtml5,
  javascript: SiJavascript,
  react: SiReact,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  mysql: SiMysql,
  docker: SiDocker,
  redis: SiRedis,
  github: SiGithub,
  postman: SiPostman
};

const Skills = () => {
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
    <section id="skills" ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 sm:mt-6 max-w-2xl mx-auto text-sm sm:text-base">
            A comprehensive toolkit of modern technologies and frameworks I work with daily
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-3">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || SiReact;
            return (
              <div
                key={skill.name}
                className="group mobile-card bg-white dark:bg-gray-800 p-4 sm:p-5 md:p-3 rounded-xl sm:rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:md:-translate-y-1 active:scale-95 md:active:scale-100"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.08}s`
                }}
              >
                {/* Mobile View - Icon, Name, and Percent only */}
                <div className="md:hidden flex flex-col items-center text-center space-y-2 sm:space-y-3">
                  <div
                    className="p-2.5 sm:p-3 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      backgroundColor: `${skill.color}25`,
                      color: skill.color
                    }}
                  >
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white line-clamp-1">
                      {skill.name}
                    </h3>
                    <p
                      className="text-base sm:text-lg font-bold mt-1"
                      style={{ color: skill.color }}
                    >
                      {skill.level}%
                    </p>
                  </div>
                </div>

                {/* Desktop View - Icon on Left, Progress Meter on Right */}
                <div className="hidden md:flex md:items-center md:justify-between md:gap-3 md:w-full">
                  {/* Left Side - Skill Icon */}
                  <div
                    className="p-2.5 rounded-lg transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{
                      backgroundColor: `${skill.color}20`,
                      color: skill.color
                    }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Center - Skill Name */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">
                      {skill.name}
                    </h3>
                  </div>

                  {/* Right Side - Circular Progress Meter with Percentage */}
                  <div
                    className="relative w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 flex-shrink-0"
                    style={{
                      background: `conic-gradient(${skill.color} ${isVisible ? skill.level : 0}%, ${skill.color}20 0%)`,
                      boxShadow: `inset 0 0 0 2px ${skill.color}40, 0 0 12px ${skill.color}40`
                    }}
                  >
                    <div
                      className="absolute inset-1 rounded-full flex items-center justify-center bg-white/90 dark:bg-slate-950/90"
                    >
                      <span
                        className="text-xs sm:text-sm font-bold leading-none text-gray-900 dark:text-white transition-all duration-700"
                      >
                        {isVisible ? skill.level : 0}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;