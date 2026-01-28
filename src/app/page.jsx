'use client'
import React, { useState, useEffect, useRef } from 'react';
import Preloader from '@/components/Preloader';
import Navigation from '@/components/Navigation';
import HomeSection from '@/components/Home';
import AboutSection from '@/components/AboutUs';
import ContactSection from '@/components/ContactUs';
import Footer from '@/components/Footer';
import ProjectsSection from '@/components/ProjectSection';

const page = () => {
  // Preloader state
  const [showPreloader, setShowPreloader] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Navigation state
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Section refs
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Handle preloader complete
  const handlePreloaderComplete = () => {
    setShowPreloader(false);
    setTimeout(() => setIsLoaded(true), 100);
  };

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      // Determine active section
      const sections = [
        { id: 'home', ref: homeRef },
        { id: 'projects', ref: projectsRef },
        { id: 'about', ref: aboutRef },
        { id: 'contact', ref: contactRef },
      ];
      
      for (const section of sections) {
        if (section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Show preloader first
  if (showPreloader) {
    return <Preloader onComplete={handlePreloaderComplete} />;
  }

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Navigation */}
      <Navigation
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        projectsRef={projectsRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
      />

      {/* Home Section */}
      <HomeSection
        homeRef={homeRef}
        isLoaded={isLoaded}
        scrollToSection={scrollToSection}
        projectsRef={projectsRef}
      />

      {/* Projects Section */}
      <section ref={projectsRef} id="projects" className="relative">
        <ProjectsSection />
      </section>

      {/* About Section */}
      <AboutSection aboutRef={aboutRef} />

      {/* Contact Section */}
      <ContactSection contactRef={contactRef} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default page;