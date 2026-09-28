import React, { useState, useEffect, useRef } from 'react';
import { Send } from 'lucide-react';
import { FaEnvelope, FaPhone, FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { socialLinks } from '../data/mock';
import { toast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: socialLinks.email,
      href: `mailto:${socialLinks.email}`,
      color: 'text-red-600 dark:text-red-400',
      bgColor: 'bg-red-50 dark:bg-red-900/20'
    },
    {
      icon: FaPhone,
      label: 'Phone',
      value: socialLinks.phone,
      href: `tel:${socialLinks.phone}`,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: 'Chat on WhatsApp',
      href: socialLinks.whatsapp,
      color: 'text-green-600 dark:text-green-400',
      bgColor: 'bg-green-50 dark:bg-green-900/20'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      href: socialLinks.linkedin,
      color: 'text-blue-600 dark:text-blue-400',
      bgColor: 'bg-blue-50 dark:bg-blue-900/20'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950">
      <style>{`
        @keyframes cardHoverGlow {
          0%, 100% {
            box-shadow: 0 0 0 rgba(59, 130, 246, 0);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3);
          }
        }
        .contact-card:hover {
          animation: cardHoverGlow 2s ease-in-out;
        }
      `}</style>
      <div className="container mx-auto max-w-6xl">
        <div
          className="text-center mb-12 sm:mb-16"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        >
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: 'var(--app-text-primary, #0f172a)', textShadow: '0 1px 2px rgba(15, 23, 42, 0.08)' }}>
            Get In Touch
          </h2>
          <div className="mx-auto h-1 w-16 bg-gradient-to-r from-blue-600 to-purple-600 sm:w-20"></div>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-gray-600 dark:text-gray-400 sm:mt-6 sm:text-base" style={{ color: 'var(--app-text-secondary)' }}>
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Methods - Left Side */}
          <div
            className="space-y-4 sm:space-y-6 order-2 md:order-1"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-50px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.2s'
            }}
          >
            <h3 className="mb-4 text-xl font-bold sm:mb-6 sm:text-2xl" style={{ color: 'var(--app-text-primary, #0f172a)' }}>
              Contact Information
            </h3>
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <a
                  key={method.label}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`contact-card flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 ${method.bgColor} rounded-xl hover:shadow-2xl transition-all duration-300 hover:md:-translate-y-2 group mobile-card active:scale-95 md:active:scale-100 relative overflow-hidden`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${0.4 + index * 0.1}s`
                  }}
                >
                  <style>{`
                    @keyframes iconGlow {
                      0%, 100% {
                        filter: drop-shadow(0 0 4px rgba(59, 130, 246, 0.4));
                        transform: scale(1);
                      }
                      50% {
                        filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.8)) drop-shadow(0 0 20px rgba(59, 130, 246, 0.6));
                        transform: scale(1.05);
                      }
                    }
                    .icon-glow:hover {
                      animation: iconGlow 1.5s ease-in-out infinite;
                    }
                  `}</style>
                  <div className={`${method.color} mt-1 group-hover:scale-110 transition-all duration-300 flex-shrink-0 icon-glow`}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white sm:text-base" style={{ color: 'var(--app-text-primary)' }}>
                      {method.label}
                    </h4>
                    <p className="truncate text-xs text-gray-600 dark:text-gray-400 sm:text-sm" style={{ color: 'var(--app-text-secondary)' }}>
                      {method.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form - Right Side */}
          <div
            className="md:col-span-2 order-1 md:order-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(50px)',
              transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.3s'
            }}
          >
            <form onSubmit={handleSubmit} className="mobile-card bg-white dark:bg-gray-800 p-5 sm:p-8 rounded-xl shadow-lg space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                <div>
                  <label htmlFor="name" className="mb-2 block text-xs font-semibold text-gray-700 dark:text-gray-300 sm:text-sm" style={{ color: 'var(--app-text-primary)' }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-xs font-semibold text-gray-700 dark:text-gray-300 sm:text-sm" style={{ color: 'var(--app-text-primary)' }}>
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-xs font-semibold text-gray-700 dark:text-gray-300 sm:text-sm" style={{ color: 'var(--app-text-primary)' }}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all text-sm"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-semibold text-gray-700 dark:text-gray-300 sm:text-sm" style={{ color: 'var(--app-text-primary)' }}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none text-sm"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full mobile-btn bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;