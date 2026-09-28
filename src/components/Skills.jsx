import React, { useState, useEffect, useRef } from 'react';
import { skills } from '../data/mock';
import { ArrowRight } from 'lucide-react';
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
  SiPostman,
  SiOpenai,
  SiAnthropic,
  SiSwagger
} from 'react-icons/si';

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
  postman: SiPostman,
  genai: SiOpenai,
  restapi: SiSwagger,
  chatgpt: SiOpenai,
  claude: SiAnthropic
};

const categories = ['All', 'Frontend', 'Backend', 'Tools', 'AI'];

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('All');
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

  const filteredSkills = activeCategory === 'All'
    ? skills
    : skills.filter((skill) => skill.category === activeCategory);

  return (
    <section id="skills" ref={sectionRef} className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="mb-3 text-3xl font-bold text-slate-100 sm:text-4xl">Technical Skills</h2>
          <div className="mx-auto h-1 w-16 bg-gradient-to-r from-sky-500 to-cyan-400 sm:w-20" />
          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-400 sm:text-base">
            A compact toolkit shaped for modern product work, with clear focus areas across frontend, backend, tooling, and AI.
          </p>
        </div>

        <div className="mb-4 flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`skill-pill shrink-0 rounded-full px-3.5 py-1.5 text-sm font-semibold ${activeCategory === category ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/20' : 'text-slate-300'}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || SiReact;
            return (
              <div
                key={skill.name}
                className="group relative overflow-hidden rounded-[20px] border border-slate-700/50 bg-slate-950/55 p-3 shadow-lg shadow-slate-950/20 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-sky-500/10 active:scale-[0.98]"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transition: `all 0.55s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.06}s`
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: `linear-gradient(135deg, ${skill.color}22 0%, transparent 70%)` }}
                />
                <div className="relative flex items-start justify-between gap-2">
                  <div className="rounded-2xl p-2.5 shadow-inner" style={{ backgroundColor: `${skill.color}20`, color: skill.color }}>
                    <IconComponent className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                  </div>
                  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    {skill.category}
                  </div>
                </div>
                <div className="relative mt-3 flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-white">{skill.name}</h3>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:translate-x-1" />
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