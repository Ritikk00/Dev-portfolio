import React, { useState, useEffect } from 'react';
import { Moon, Sun, Flame, Menu, X, ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/use-scroll-animation';

const Navbar = ({ darkMode, warmMode, cycleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { getImageTransform, getPositionTransform, isAnimating } = useScrollAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
      // Close mobile menu on scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
      if (isDropdownOpen) {
        setIsDropdownOpen(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobileMenuOpen, isDropdownOpen]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setIsDropdownOpen(false);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const getThemeIcon = () => {
    if (warmMode) return <Flame className="w-5 h-5" />;
    if (darkMode) return <Moon className="w-5 h-5" />;
    return <Sun className="w-5 h-5" />;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ease-out ${
        isScrolled
          ? 'bg-white/98 dark:bg-gray-900/98 backdrop-blur-xl shadow-2xl'
          : 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg shadow-sm'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section with Scroll Animation */}
          <div className="flex items-center space-x-2 group">
            {/* Animated Logo Image - appears during scroll animation */}
            <div 
              id="navbar-logo"
              className="relative w-8 h-8 md:w-9 md:h-9 rounded-lg overflow-hidden shadow-lg flex-shrink-0"
              style={{
                opacity: isAnimating ? 1 : 0,
                pointerEvents: isAnimating ? 'auto' : 'none',
                transition: 'opacity 0.3s ease-out',
              }}
            >
              <div 
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: isAnimating ? `${getImageTransform().borderRadius}px` : '8px',
                  overflow: 'hidden',
                  background: 'linear-gradient(to bottom right, rgb(37, 99, 235), rgb(147, 51, 234))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  color: 'white'
                }}
              >
                <img
                  id="navbar-logo-image"
                  src=""
                  alt="Logo"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: isAnimating ? 'block' : 'none'
                  }}
                />
                <span style={{ display: isAnimating ? 'none' : 'block' }}>M</span>
              </div>
            </div>

            {/* Static Logo Text */}
            <button
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 hover:opacity-80 transition-all duration-300 group whitespace-nowrap"
            >
              {/* Fallback gradient box - hidden during animation */}
              <div 
                className="w-8 h-8 md:w-9 md:h-9 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-600/50 group-hover:scale-110 transition-all duration-300"
                style={{
                  opacity: isAnimating ? 0 : 1,
                  pointerEvents: isAnimating ? 'none' : 'auto',
                  transition: 'opacity 0.3s ease-out'
                }}
              >
                <span className="text-white font-bold text-lg md:text-xl">M</span>
              </div>
              <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:opacity-80 transition-opacity">
                myWorkspace
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
            <button
              onClick={cycleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {getThemeIcon()}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={cycleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 active:scale-95"
              aria-label="Toggle theme"
            >
              {getThemeIcon()}
            </button>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="p-2.5 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 active:scale-95 flex items-center space-x-1"
                aria-label="Toggle menu"
              >
                {isDropdownOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                <ChevronDown className="w-4 h-4 transition-transform duration-300" style={{transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'}} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu - Stylish Overlay */}
        {isDropdownOpen && (
          <div className="md:hidden mt-2 pb-3 bg-gradient-to-b from-white/98 to-white/95 dark:from-gray-800/98 dark:to-gray-900/95 backdrop-blur-lg rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden transition-all duration-200 ease-out">
            <div className="space-y-0.5 p-2">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="w-full text-left px-4 py-2.5 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg transition-all duration-200 font-medium hover:pl-6 group"
                  style={{
                    animationDelay: `${index * 40}ms`,
                    animation: `slideIn 0.25s ease-out forwards`,
                  }}
                >
                  <span className="flex items-center space-x-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    <span>{link.label}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Fallback: Old Mobile Menu Style */}
        {isMobileMenuOpen && !isDropdownOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;