"use client";
import AboutSection from '@/components/AboutUs';
import ContactSection from '@/components/ContactUs';
import Footer from '@/components/Footer';
import HomeSection from '@/components/Home';
import LandingPage from '@/components/LandingPage';
import Navigation from '@/components/Navigation';
import ProjectsSection from '@/components/ProjectSection';

import { useState, useEffect, useRef } from 'react';
// ==================== MAIN APP COMPONENT ====================
const AAPortfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showMainSite, setShowMainSite] = useState(false);

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      setMousePosition({ 
        x: Math.max(10, Math.min(90, x)), 
        y: Math.max(10, Math.min(90, y)) 
      });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'projects', ref: projectsRef },
        { id: 'about', ref: aboutRef },
        { id: 'contact', ref: contactRef }
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    setTimeout(() => setIsLoaded(true), 500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMenuOpen(false);
  };

  if (!showMainSite) {
    return <LandingPage setShowMainSite={setShowMainSite} />;
  }

 return (
    <div className="relative bg-slate-900 overflow-x-hidden">
      <Navigation 
        scrollY={scrollY}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />
      <HomeSection 
        homeRef={homeRef}
        mousePosition={mousePosition}
        isLoaded={isLoaded}
        scrollToSection={scrollToSection}
        projectsRef={projectsRef}
      />
      <ProjectsSection projectsRef={projectsRef} />
      <AboutSection aboutRef={aboutRef} />
      <ContactSection contactRef={contactRef} mousePosition={mousePosition} />
      <Footer />

      <style jsx>{`
        @keyframes float-smooth {
          0%, 100% { 
            transform: translateY(0px) translateX(0px) rotate(0deg); 
            opacity: 0.7;
          }
          33% { 
            transform: translateY(-30px) translateX(20px) rotate(120deg); 
            opacity: 1;
          }
          66% { 
            transform: translateY(-10px) translateX(-15px) rotate(240deg); 
            opacity: 0.8;
          }
        }
        
        @keyframes float-code {
          0%, 100% { 
            transform: translateY(0px) translateX(0px); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) translateX(10px); 
            opacity: 0.6;
          }
        }

        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-float-smooth {
          animation: float-smooth 10s ease-in-out infinite;
        }

        .animate-float-code {
          animation: float-code 6s ease-in-out infinite;
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }

        .bg-300% {
          background-size: 300% 300%;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        .delay-2000 {
          animation-delay: 2s;
        }

        .delay-3000 {
          animation-delay: 3s;
        }

        html {
          scroll-behavior: smooth;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: #1e293b;
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #10b981, #f59e0b);
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #059669, #d97706);
        }

        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #10b981;
          outline-offset: 3px;
        }

        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        .backdrop-blur-xl {
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
        }

        .backdrop-blur-2xl {
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
        }
      `}</style>
    </div>
  );
};

export default AAPortfolio;