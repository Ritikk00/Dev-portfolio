import { useState, useEffect, useRef } from 'react';

/**
 * Hook to calculate scroll-based animation values
 * Returns the animation progress (0 to 1) as user scrolls from hero to navbar
 */
export const useScrollAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const heroImageRef = useRef(null);
  const navbarLogoRef = useRef(null);

  useEffect(() => {
    // Sync navbar logo image with hero image
    const syncImages = () => {
      const heroImage = document.querySelector('#hero-image-container img');
      const navbarLogoImage = document.getElementById('navbar-logo-image');
      
      if (heroImage && navbarLogoImage) {
        navbarLogoImage.src = heroImage.src;
      }
    };

    // Initial sync
    setTimeout(syncImages, 100);
    
    // Sync again on image load
    const heroImage = document.querySelector('#hero-image-container img');
    if (heroImage) {
      heroImage.addEventListener('load', syncImages);
      return () => heroImage.removeEventListener('load', syncImages);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Get hero image position
      const heroImage = document.getElementById('hero-image-container');
      const navbarLogo = document.getElementById('navbar-logo');

      if (!heroImage || !navbarLogo) return;

      const heroRect = heroImage.getBoundingClientRect();
      const navbarRect = navbarLogo.getBoundingClientRect();

      // Calculate scroll progress
      // Animation starts when hero bottom reaches window top
      // Animation ends when hero top reaches navbar logo position
      const heroBottom = heroRect.bottom;
      const heroTop = heroRect.top;
      
      // Start animation when hero section is leaving the viewport
      const startTrigger = window.innerHeight * 0.3; // Start earlier for smooth feel
      const endTrigger = -heroRect.height * 0.5; // End when hero is mostly gone

      let progress = 0;

      if (heroBottom < startTrigger && heroTop > endTrigger) {
        // Calculate progress (0 to 1)
        progress = (startTrigger - heroBottom) / (startTrigger - endTrigger);
        progress = Math.max(0, Math.min(1, progress)); // Clamp between 0 and 1
        setIsAnimating(true);
      } else if (heroBottom >= startTrigger) {
        progress = 0;
        setIsAnimating(false);
      } else if (heroTop <= endTrigger) {
        progress = 1;
        setIsAnimating(true);
      }

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Calculate eased scroll progress for smooth animation
   * Using cubic-bezier easing: ease-in-out
   */
  const getEasedProgress = () => {
    const t = scrollProgress;
    // Cubic ease-in-out
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  };

  /**
   * Get transform values for the hero image as it animates to navbar
   */
  const getImageTransform = () => {
    const eased = getEasedProgress();

    // Scale from 1 to 0.35 (navbar logo size relative to hero image)
    const scale = 1 - (eased * 0.65);

    // Border radius from 50% (circle) to 8px for navbar logo
    const borderRadius = 50 - (eased * 42);

    return {
      scale,
      borderRadius,
      opacity: 1 - (eased * 0.2), // Slight fade as it transforms
      eased
    };
  };

  /**
   * Get position transform to move image from hero to navbar
   */
  const getPositionTransform = () => {
    const eased = getEasedProgress();
    const heroImage = document.getElementById('hero-image-container');
    const navbarLogo = document.getElementById('navbar-logo');

    if (!heroImage || !navbarLogo) {
      return { translateX: 0, translateY: 0 };
    }

    const heroRect = heroImage.getBoundingClientRect();
    const navbarRect = navbarLogo.getBoundingClientRect();

    // Calculate the movement needed
    const startX = 0;
    const startY = 0;
    const endX = navbarRect.left - heroRect.left + (navbarRect.width - heroRect.width) / 2;
    const endY = navbarRect.top - heroRect.top + (navbarRect.height - heroRect.height) / 2;

    return {
      translateX: startX + (endX - startX) * eased,
      translateY: startY + (endY - startY) * eased
    };
  };

  return {
    scrollProgress,
    isAnimating,
    getEasedProgress,
    getImageTransform,
    getPositionTransform,
    heroImageRef,
    navbarLogoRef
  };
};
