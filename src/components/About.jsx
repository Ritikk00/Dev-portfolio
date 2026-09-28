import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, experience } from '../data/mock';
import { Briefcase, X, Award, ArrowRight, Sparkles } from 'lucide-react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [showStory, setShowStory] = useState(false);
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

  const summaryCards = [
    { label: 'Focus', value: 'Security-first builds' },
    { label: 'Stack', value: 'MERN + AI tools' },
    { label: 'Style', value: 'Clean, scalable UX' }
  ];

  return (
    <section id="about" ref={sectionRef} className="px-4 py-16 sm:px-6 sm:py-20">
      <div className="container mx-auto max-w-6xl">
        <div
          className="mb-8 text-center sm:mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <h2 className="mb-3 text-3xl font-bold text-slate-100 sm:text-4xl">About Me</h2>
          <div className="mx-auto h-1 w-16 bg-gradient-to-r from-sky-500 to-cyan-400 sm:w-20" />
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div
            className="space-y-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <div className="about-card rounded-[28px] p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
                <Sparkles className="h-4 w-4" />
                Story at a glance
              </div>
              <p className="text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base">
                {showStory ? personalInfo.bio : `${personalInfo.bio.slice(0, 180)}...`}
              </p>
              <button
                onClick={() => setShowStory((prev) => !prev)}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-sky-500"
              >
                {showStory ? 'Show less' : 'Read more'}
                <ArrowRight className={`h-4 w-4 transition-transform ${showStory ? 'rotate-90' : ''}`} />
              </button>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {summaryCards.map((card) => (
                  <div key={card.label} className="rounded-2xl border border-white/60 bg-white/70 p-3 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200">
                    <div className="text-[10px] uppercase tracking-[0.24em] text-slate-400">{card.label}</div>
                    <div className="mt-1 font-semibold">{card.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="about-card rounded-[28px] p-4 sm:p-5">
              <div className="flex justify-center">
                <img
                  src="/certificate.png"
                  alt="Certificate preview"
                  className="h-48 w-full max-w-[280px] rounded-[20px] border border-slate-200/80 object-cover shadow-lg sm:h-56"
                />
              </div>
              <button
                onClick={handleOpenCertificate}
                className="mobile-btn mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-sky-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25"
              >
                <Award className="h-4 w-4" />
                <span>View Certificate</span>
              </button>
            </div>
          </div>

          <div
            className="space-y-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
            }}
          >
            <div className="about-card rounded-[28px] p-5 sm:p-6">
              <div className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-sky-400">
                <Briefcase className="h-4 w-4" />
                Training & experience
              </div>
              {experience.map((exp, index) => (
                <div key={exp.title || index} className="rounded-2xl border border-slate-700/30 bg-slate-950/30 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-semibold text-white">{exp.title}</h3>
                      <p className="mt-1 text-sm font-medium text-sky-400">{exp.company}</p>
                    </div>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-emerald-300">
                      {exp.badge || 'Training'}
                    </span>
                  </div>
                  <div className="mt-3 text-sm text-slate-400">
                    <div className="flex flex-wrap gap-2">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                    <p className="mt-2 text-slate-300">{exp.summary}</p>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags?.slice(0, 6).map((tag) => (
                      <span key={tag} className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-300">
                    {(showStory ? exp.highlights : exp.highlights?.slice(0, 3))?.map((highlight, highlightIndex) => (
                      <li key={`${exp.title}-${highlightIndex}`} className="flex gap-2">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-sky-400 to-cyan-400" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setShowStory((prev) => !prev)}
                    className="mt-4 text-sm font-semibold text-sky-400"
                  >
                    {showStory ? 'Collapse impact points' : 'Show full impact'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showCertificate && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={handleCloseCertificate}
          style={{ animation: 'fadeIn 0.3s ease-out' }}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'zoomIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' }}
          >
            <button
              onClick={handleCloseCertificate}
              className="absolute right-3 top-3 z-10 rounded-full bg-red-500 p-2 text-white shadow-lg hover:scale-110"
              aria-label="Close certificate"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="p-4 sm:p-8">
              <img src="/certificate.png" alt="Professional Certificate" className="max-h-[70vh] w-full rounded-lg object-contain" />
              <div className="mt-4 text-center sm:mt-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Full Stack Development Certificate</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Awarded for excellence in modern web development technologies</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.5); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </section>
  );
};

export default About;