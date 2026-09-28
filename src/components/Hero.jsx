import React, { useState, useEffect } from 'react';
import { Download, ArrowDown, Sparkles, ShieldCheck } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { personalInfo, socialLinks } from '../data/mock';

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 120);
  }, []);

  useEffect(() => {
    const currentRole = personalInfo.roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 45 : 90;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else if (displayText.length > 0) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % personalInfo.roles.length);
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
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden px-4 pb-8 pt-20 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.18),_transparent_30%)]" />
      <div className="container mx-auto max-w-6xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div
            className="order-2 space-y-4 pt-2 lg:order-1"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(-40px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-400/30 bg-sky-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-sky-400">
              <Sparkles className="h-3.5 w-3.5" />
              Available for ambitious products
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Hello, I&apos;m
              </p>
              <h1 className="hero-name text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
                {personalInfo.name}
              </h1>
            </div>

            <div className="h-16 sm:h-20">
              <h2 className="text-xl font-semibold text-slate-100 sm:text-2xl lg:text-3xl">
                <span className="text-sky-400">{displayText}</span>
                <span className="ml-1 inline-block h-6 w-0.5 rounded-sm bg-sky-400 animate-pulse sm:h-8" />
              </h2>
            </div>

            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {personalInfo.bio}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/10 p-2.5 text-slate-100 shadow-lg shadow-sky-950/30 hover:scale-110 hover:bg-sky-500 hover:text-white"
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 bg-white/10 p-2.5 text-slate-100 shadow-lg shadow-sky-950/30 hover:scale-110 hover:bg-sky-600 hover:text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
            </div>

            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <button
                onClick={scrollToProjects}
                className="mobile-btn flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-400/35"
              >
                <span>Explore Work</span>
                <ArrowDown className="h-4 w-4" />
              </button>
              <a
                href={personalInfo.resumeUrl}
                download="Priyanshu_Kushwah_Resume.pdf"
                className="mobile-btn flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-slate-100 hover:bg-white/20"
              >
                <Download className="h-4 w-4" />
                <span>Get Resume</span>
              </a>
            </div>
          </div>

          <div
            className="order-1 flex justify-center lg:order-2"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0) scale(1)' : 'translateX(30px) scale(0.96)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <div className="relative mx-auto flex h-[280px] w-[280px] items-center justify-center sm:h-[320px] sm:w-[320px]">
              <div className="hero-orb absolute inset-0" />
              <div className="hero-orb-ring" />
              <div className="hero-panel absolute bottom-6 left-4 rounded-2xl border border-white/10 p-3 shadow-2xl">
                <div className="flex items-center gap-2 text-sm font-semibold text-slate-100">
                  <ShieldCheck className="h-4 w-4 text-emerald-400" />
                  Security-first delivery
                </div>
              </div>
              <div className="hero-panel absolute right-3 top-6 rounded-2xl border border-white/10 p-3 shadow-2xl">
                <div className="text-2xl font-bold text-slate-100">2+</div>
                <div className="text-xs uppercase tracking-[0.24em] text-slate-400">Years of build</div>
              </div>
              <img
                src={personalInfo.image}
                alt={personalInfo.name}
                className="relative h-[220px] w-[220px] rounded-full border-4 border-white/20 object-cover shadow-2xl shadow-slate-950/50 sm:h-[240px] sm:w-[240px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
