import React, { useState, useEffect } from 'react';
import { Download, ArrowDown } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/mock';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { getImageTransform, getPositionTransform, isAnimating } = useScrollAnimation();

  useEffect(() => {
    // Trigger animation on mount
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const currentRole = personalInfo.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-8 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-start md:items-center">
          {/* Left Column - Text Content */}
          <div 
            className="space-y-4 order-2 md:order-1 mt-12 md:mt-0 pt-4"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="space-y-2">
              <p className="text-blue-600 dark:text-blue-400 font-semibold text-xs sm:text-sm tracking-widest uppercase animate-fadeIn">
                👋 Hello, I'm
              </p>
              <h1 className="hero-name text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white leading-tight whitespace-nowrap">
                {personalInfo.name}
              </h1>
            </div>

            <div className="h-16 md:h-20">
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mt-2">
                <span className="text-blue-600 dark:text-blue-400">{displayText}</span>
                <span className="inline-block ml-1.5 w-0.5 h-6 sm:h-8 md:h-10 bg-blue-600 dark:bg-blue-400 animate-pulse rounded-sm"></span>
              </h2>
            </div>

            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl leading-normal sm:leading-relaxed font-medium tracking-wide" style={{ fontFamily: "'Syne', 'Space Grotesk', sans-serif", letterSpacing: '0.5px', fontSize: '1.05rem' }}>
              <span style={{ fontSize: '1.4em', fontWeight: '700', marginRight: '0.1em' }}>{personalInfo.bio.charAt(0)}</span>{personalInfo.bio.slice(1)}
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full hover:from-gray-900 hover:to-gray-800 dark:hover:from-blue-600 dark:hover:to-blue-700 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-lg"
                aria-label="GitHub"
              >
                <FaGithub className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 rounded-full hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-600 dark:hover:to-blue-700 hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 shadow-md hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-4 h-4" />
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row flex-wrap items-center gap-2 sm:gap-3 pt-4">
              <button
                onClick={scrollToProjects}
                className="w-full sm:w-auto mobile-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 sm:px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50 active:scale-95 flex items-center justify-center sm:justify-start space-x-2 group text-sm sm:text-base"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-4 h-4 group-active:translate-y-1 transition-transform" />
              </button>
              <a
                href={personalInfo.resumeUrl}
                download
                className="w-full sm:w-auto mobile-btn bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-white px-5 sm:px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                <Download className="w-4 h-4" />
                <span>Get Resume</span>
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div 
            id="hero-image-container"
            className="order-1 md:order-2 flex justify-center md:mt-0 mt-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.9)',
              transition: isAnimating ? 'none' : 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm scroll-animation-container md:mt-0 mt-4">
              <style>{`
                @keyframes gentleFloat {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-15px); }
                }
                @keyframes gentleFloatMobile {
                  0%, 100% { transform: translateY(0px); }
                  50% { transform: translateY(-8px); }
                }
                .circle-image-container {
                  animation: gentleFloat 5s ease-in-out infinite;
                }
                .scroll-animation-container.animating .circle-image-container {
                  animation: none;
                }
                @media (max-width: 768px) {
                  .circle-image-container {
                    animation: gentleFloatMobile 4s ease-in-out infinite;
                  }
                  .scroll-animation-container.animating .circle-image-container {
                    animation: none;
                  }
                }
              `}</style>

              {/* Subtle Background Glow - Desktop Only */}
              <div className="hidden md:block absolute -inset-6 bg-gradient-to-b from-blue-400/20 via-blue-300/10 to-transparent dark:from-blue-600/20 dark:via-blue-500/10 rounded-full blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Mobile Classic Glow Effect */}
              <div className="md:hidden absolute -inset-4 bg-gradient-to-b from-blue-400/30 via-blue-300/15 to-transparent dark:from-blue-500/35 dark:via-blue-400/15 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
              
              {/* Mobile Secondary Glow Layer */}
              <div className="md:hidden absolute -inset-6 bg-gradient-to-b from-blue-300/15 to-transparent dark:from-blue-400/20 rounded-full blur-2xl opacity-50 pointer-events-none"></div>

              {/* Main Circle Container with Scroll Animation */}
              <div 
                className="circle-image-container relative mx-auto perspective"
                style={{
                  width: window.innerWidth < 768 ? '280px' : '320px',
                  height: window.innerWidth < 768 ? '280px' : '320px',
                  maxWidth: 'xs',
                  transform: isAnimating
                    ? `translate(${getPositionTransform().translateX}px, ${getPositionTransform().translateY}px) scale(${getImageTransform().scale})`
                    : 'translate(0, 0) scale(1)',
                  borderRadius: window.innerWidth < 768 ? '9999px' : (isAnimating ? `${getImageTransform().borderRadius}px` : '9999px'),
                  opacity: getImageTransform().opacity,
                  transition: isAnimating ? 'none' : 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
                  willChange: isAnimating ? 'transform, border-radius, opacity' : 'auto',
                  perspective: '1200px'
                }}
              >
                {/* Flip Card Container */}
                <div 
                  className="flip-card-container relative w-full h-full group"
                  style={{
                    transformStyle: 'preserve-3d',
                    cursor: 'pointer'
                  }}
                >
                  <style>{`
                    @keyframes flipCardHover {
                      0% {
                        transform: rotateY(0deg);
                      }
                      100% {
                        transform: rotateY(180deg);
                      }
                    }
                    .flip-card-container {
                      transition: transform 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                      transform-style: preserve-3d;
                    }
                    .flip-card-container:hover {
                      transform: rotateY(180deg);
                    }
                    @media (max-width: 768px) {
                      .flip-card-container {
                        animation: flipCardHover 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards;
                      }
                    }
                    .flip-card-front, .flip-card-back {
                      width: 100%;
                      height: 100%;
                      position: absolute;
                      backface-visibility: hidden;
                      -webkit-backface-visibility: hidden;
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    }
                    .flip-card-back {
                      transform: rotateY(180deg);
                    }
                  `}</style>

                  {/* Front Side - Grayscale (Desktop) / Colored (Mobile) */}
                  <div className="flip-card-front ring-4 md:ring-6 ring-white dark:ring-gray-800 shadow-lg md:shadow-2xl group-hover:shadow-xl dark:group-hover:shadow-blue-900/30 transition-shadow duration-500 overflow-hidden md:rounded-lg" style={{ borderRadius: window.innerWidth < 768 ? '9999px' : 'inherit' }}>
                    <img
                      src={personalInfo.image}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 md:filter md:grayscale"
                      draggable={false}
                    />
                    {/* Dark Overlay for Grayscale Side (Desktop Only) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-600/5 to-gray-600/15 opacity-0 md:opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
                  </div>

                  {/* Back Side - Colored (Desktop) / Grayscale (Mobile) */}
                  <div className="flip-card-back ring-4 md:ring-6 ring-white dark:ring-gray-800 shadow-lg md:shadow-2xl group-hover:shadow-xl dark:group-hover:shadow-blue-900/30 transition-shadow duration-500 overflow-hidden md:rounded-lg" style={{ borderRadius: window.innerWidth < 768 ? '9999px' : 'inherit' }}>
                    <img
                      src={personalInfo.image}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 md:filter-none filter md:grayscale-0 grayscale-0"
                      draggable={false}
                    />
                    {/* Subtle Blue Tint Overlay (Desktop Only) */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-blue-600/10 opacity-0 md:opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
