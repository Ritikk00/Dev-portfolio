import React, { useState, useEffect, useRef } from 'react';
import { projects, socialLinks } from '../data/mock';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project, index, isVisible }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imageSet = project.images?.length ? project.images : [project.image];
  const isComingSoon = Boolean(project.isComingSoon);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % imageSet.length);
    }, 3200);

    return () => window.clearInterval(interval);
  }, [project.id, imageSet.length]);

  return (
    <div
      className="group relative overflow-hidden rounded-[28px] border border-slate-200/70 bg-white/80 p-3 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_70px_-24px_rgba(56,189,248,0.35)] active:scale-[0.98]"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(40px) scale(0.95)',
        transition: `all 0.7s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.15}s`,
        backgroundColor: 'var(--app-card, #ffffff)',
        borderColor: 'var(--app-border, rgba(15, 23, 42, 0.12))'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-cyan-400/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-[22px]">
        <div className="h-56 sm:h-72">
          <img
            src={imageSet[activeImageIndex]}
            alt={`${project.title} preview ${activeImageIndex + 1}`}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
        <div className="absolute bottom-3 left-3 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-white backdrop-blur">
          {isComingSoon ? 'Coming Soon' : 'Featured build'}
        </div>
        <div className="absolute bottom-3 right-3 flex gap-1.5">
          {imageSet.map((_, dotIndex) => (
            <span
              key={`${project.id}-${dotIndex}`}
              className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${dotIndex === activeImageIndex ? 'bg-white shadow-md' : 'bg-white/45'}`}
            />
          ))}
        </div>
      </div>

      <div className="relative space-y-4 p-3 sm:p-4">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold transition-colors group-hover:text-sky-600 dark:text-white dark:group-hover:text-sky-400 sm:text-2xl" style={{ color: 'var(--app-text-primary, #0f172a)' }}>
            {project.title}
          </h3>
          <div className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-600 dark:bg-slate-800 dark:text-slate-300" style={{ color: 'var(--app-text-secondary, #334155)', backgroundColor: 'rgba(15, 23, 42, 0.08)' }}>
            {isComingSoon ? 'Upcoming' : 'Case study'}
          </div>
        </div>
        <p className="text-sm leading-6 sm:text-base" style={{ color: 'var(--app-text-secondary, #334155)' }}>
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] font-semibold text-slate-700 transition-transform duration-300 hover:scale-105 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
              style={{ color: 'var(--app-text-primary, #0f172a)', backgroundColor: 'rgba(255,255,255,0.7)' }}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 pt-1 sm:flex-row">
          {isComingSoon ? (
            <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-500 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-400">
              Coming soon
            </div>
          ) : (
            <>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-slate-700/60 px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{ backgroundColor: '#111827', color: '#ffffff' }}
              >
                <FaGithub className="h-4 w-4" />
                <span>Code</span>
              </a>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-sky-500/25"
                style={{ background: 'linear-gradient(135deg, #0f766e 0%, #0284c7 100%)', color: '#ffffff' }}
              >
                <FaExternalLinkAlt className="h-4 w-4" />
                <span>Live demo</span>
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

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
    <section id="projects" ref={sectionRef} className="bg-gradient-to-b from-gray-50 to-white px-4 py-16 sm:px-6 sm:py-20 dark:from-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div
          className="mb-12 text-center sm:mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <div className="mx-auto h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 sm:w-20"></div>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 dark:text-gray-400 sm:mt-6 sm:text-base">
            A showcase of my recent work demonstrating technical expertise and problem-solving abilities
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isVisible={isVisible} />
          ))}
        </div>

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
            className="mobile-btn inline-flex w-full items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 px-6 py-3 text-sm font-semibold text-white transition-all duration-500 hover:scale-105 hover:shadow-2xl group sm:w-auto sm:space-x-3 sm:px-8 sm:py-4 dark:from-gray-700 dark:to-gray-600 hover:from-blue-600 hover:to-blue-700"
          >
            <FaGithub className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 sm:h-6 sm:w-6" />
            <span className="hidden sm:inline">View More Projects on GitHub</span>
            <span className="sm:hidden">More Projects</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;