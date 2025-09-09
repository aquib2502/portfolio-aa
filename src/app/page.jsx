'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X,StarIcon, MoonIcon, ExternalLink, Mail, Phone, Github, Linkedin, ArrowRight, Star, MessageCircle, Code, Sparkles, Heart, Zap, Building2 } from 'lucide-react';
import { Mosque, BookOpen, Hand } from "lucide-react"; // ✅ FIXED IMPORT
const AAPortfolio = () => {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showMainSite, setShowMainSite] = useState(false);

  // Refs for sections
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  // Enhanced mouse tracking for fluid gradients
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
      
      // Update active section based on scroll position
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
    
    // Smooth loading animation
    setTimeout(() => setIsLoaded(true), 500);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "C4U",
      subtitle: "AI-Powered Consultancy Platform",
      url: "c4u.co.in",
      description: "Next-generation consultancy platform powered by AI with seamless appointment booking and personalized AI-generated reports.",
      image: "./c4u.webp",
      gradient: "from-emerald-500 to-teal-600",
      tags: ["AI", "React", "Node.js", "PostgreSQL"]
    },
    {
      title: "Hiba Farrash",
      subtitle: "Premium Consultation Platform",
      url: "hibafarrash.shourk.com",
      description: "Exclusive platform featuring real-time video sessions, live chat, and secure payment integration.",
      image: "./hibafarrash.webp",
      gradient: "from-amber-500 to-orange-600",
      tags: ["WebRTC", "React", "Express", "MongoDB"]
    },
    // {
    //   title: "Shourk",
    //   subtitle: "Digital Expert Marketplace",
    //   url: "shourk.com",
    //   description: "Revolutionary marketplace connecting experts with clients through integrated chat and secure payments.",
    //   image: "./shourk.webp",
    //   gradient: "from-purple-500 to-indigo-600",
    //   tags: ["Next.js", "Stripe", "Socket.io", "Redis"]
    // },
    {
      title: "Trace Express",
      subtitle: "Real-time Tracking Platform",
      url: "tracking.thetraceexpress.com",
      description: "Advanced package tracking with live updates and intelligent API integration.",
      image: "./trace-express.webp",
      gradient: "from-blue-500 to-cyan-600",
      tags: ["React", "APIs", "Real-time", "Tracking"]
    }
  ];

  const LandingPage = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background Image Placeholder with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect fill="%23111827" width="1920" height="1080"/></svg>')`,
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-indigo-900/70" />
      
      {/* Subtle Animated Elements */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-indigo-300/30 rounded-full animate-pulse"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center">
        
        {/* Logo */}
        <div className="mb-8">
          <div className="relative group cursor-pointer">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <span className="text-white font-bold text-3xl tracking-wider">A&A</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
          </div>
        </div>

        {/* Company Name */}
        <h1 className="text-2xl md:text-3xl font-light text-white mb-2 tracking-wide">
          A&A Technologies
        </h1>
        <p className="text-indigo-300 text-sm md:text-base mb-16 opacity-80">
          Digital Excellence, Inspired by Faith
        </p>

        {/* Quranic Verse */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            <MoonIcon className="w-6 h-6 text-indigo-400 mx-auto mb-6 opacity-60" />
            <blockquote className="text-lg md:text-2xl font-light text-white leading-relaxed mb-4 opacity-90">
              <span className="text-indigo-400 text-2xl">"</span>
              And whoever relies upon Allah - then He is sufficient for him. 
              <br className="hidden md:block" />
              Indeed, Allah will accomplish His purpose.
              <span className="text-indigo-400 text-2xl">"</span>
            </blockquote>
            <cite className="text-indigo-300 text-sm opacity-70">
              - Quran 65:3
            </cite>
          </div>
        </div>

        {/* Unique Navigation */}
        <div className="space-y-6">
          {/* Mystical Enter Button */}
          <div className="relative group">
            <button
              className="relative overflow-hidden bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-indigo-400/30 text-white px-8 py-4 rounded-full font-light text-lg transition-all duration-700 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-500/30"
              onClick={() => setShowMainSite(true)}
            >
              <div className="relative z-10 flex items-center gap-3">
                <StarIcon className="w-5 h-5 animate-pulse" />
                Enter Our Universe
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
              </div>
              
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              
              {/* Ripple effect */}
              <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-700" />
            </button>
          </div>

          {/* Orbit Animation */}
          <div className="relative w-32 h-8 mx-auto">
            <div className="absolute w-2 h-2 bg-indigo-400 rounded-full animate-spin origin-center" style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              animation: 'orbit 4s linear infinite'
            }}></div>
          </div>
        </div>

        {/* Scroll Hint */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="text-indigo-300 text-xs font-light animate-pulse">
            ✦ Crafted with purpose ✦
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes orbit {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(60px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(60px) rotate(-360deg); }
        }
      `}</style>
    </div>
  );
};

  // Navigation Component
  const Navigation = () => (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
      scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-2xl shadow-2xl border-b border-emerald-500/20' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Enhanced Logo */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollToSection(homeRef)}>
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 via-teal-500 to-amber-500 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl">
                <span className="text-white font-bold text-lg">A&A</span>
              </div>
              <div className="absolute -inset-1 bg-gradient-to-br from-emerald-500 via-teal-500 to-amber-500 rounded-xl blur opacity-0 group-hover:opacity-50 transition-all duration-500"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-bold text-xl bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                A&A Technologies
              </span>
              <p className="text-xs text-emerald-300 -mt-1">Digital Excellence</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-2">
            {[
              { id: 'home', label: 'Home', ref: homeRef, icon: Sparkles },
              { id: 'projects', label: 'Projects', ref: projectsRef, icon: Code },
              { id: 'about', label: 'About', ref: aboutRef, icon: Heart },
              { id: 'contact', label: 'Contact', ref: contactRef, icon: Zap }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  className={`relative flex items-center gap-2 text-white hover:text-emerald-400 transition-all duration-300 px-4 py-2 rounded-xl hover:bg-white/10 group ${
                    activeSection === item.id ? 'text-emerald-400 bg-white/5' : ''
                  }`}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                  {item.label}
                  {activeSection === item.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full animate-glow"></div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-emerald-400 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-out ${
          isMenuOpen 
            ? 'max-h-80 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="bg-slate-800/95 backdrop-blur-2xl rounded-2xl p-6 border border-emerald-500/20 shadow-2xl space-y-2">
            {[
              { id: 'home', label: 'Home', ref: homeRef, icon: Sparkles },
              { id: 'projects', label: 'Projects', ref: projectsRef, icon: Code },
              { id: 'about', label: 'About', ref: aboutRef, icon: Heart },
              { id: 'contact', label: 'Contact', ref: contactRef, icon: Zap }
            ].map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.ref)}
                  className="flex items-center gap-3 w-full text-left text-white hover:text-emerald-400 transition-all duration-300 py-3 px-4 rounded-xl hover:bg-white/10 group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );

  // Enhanced Home Section
// Enhanced Home Section
const HomeSection = () => (
  <section
    ref={homeRef}
    id="home"
    className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 sm:pt-36 md:pt-40"
  >
    {/* Dynamic Gradient Background */}
    <div
      className="absolute inset-0 transition-all duration-1000 ease-out"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(16, 185, 129, 0.2) 0%,
            rgba(245, 158, 11, 0.15) 30%,
            rgba(139, 92, 246, 0.1) 60%,
            rgba(15, 23, 42, 0.95) 80%
          ),
          linear-gradient(135deg, #0f172a 0%, #1e293b 30%, #0f172a 60%, #1e293b 100%)
        `,
      }}
    />

    {/* Enhanced Floating Orbs */}
    <div className="absolute inset-0 overflow-hidden">
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full opacity-20 animate-float-smooth"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${40 + Math.random() * 120}px`,
            height: `${40 + Math.random() * 120}px`,
            background:
              i % 3 === 0
                ? 'linear-gradient(45deg, #10b981, #06d6a0)'
                : i % 3 === 1
                ? 'linear-gradient(45deg, #f59e0b, #fbbf24)'
                : 'linear-gradient(45deg, #8b5cf6, #a855f7)',
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${6 + Math.random() * 8}s`,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>

    {/* Hero Content */}
    <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Welcome Section */}
      <div
        className={`transition-all duration-1000 ease-out ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`}
      >
        <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <p className="text-lg md:text-xl text-emerald-300 font-light tracking-[0.2em] uppercase">
            Welcome to the Future
          </p>
          <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-1000"></div>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-tight">
          We craft
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 via-amber-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
            digital magic
          </span>
        </h1>

        {/* Description */}
        <p className="text-lg md:text-2xl mb-12 text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
          Where innovation meets artistry. We transform ideas into immersive digital experiences
          that captivate, engage, and inspire.
        </p>
      </div>

      {/* CTA Button */}
      <div
        className={`transition-all duration-1000 delay-500 ease-out flex flex-col items-center gap-8 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <button
          onClick={() => scrollToSection(projectsRef)}
          className="group relative inline-flex items-center gap-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 hover:from-emerald-600 hover:via-teal-600 hover:to-amber-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-500 shadow-2xl hover:shadow-emerald-500/30 hover:scale-110 transform"
        >
          <Sparkles className="w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
          Discover Our Work
          <ChevronDown className="w-6 h-6 group-hover:translate-y-2 transition-transform duration-300" />

          <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        </button>

        {/* Supporting Text */}
        <div className="flex items-center gap-6 text-emerald-300">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
            <span className="text-sm font-light">Live Projects</span>
          </div>
          <div className="w-px h-6 bg-emerald-500/30"></div>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-red-400 animate-pulse" />
            <span className="text-sm font-light">Made with Love</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);


  // Enhanced Projects Section
  const ProjectsSection = () => (
    <section ref={projectsRef} id="projects" className="py-32 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(16, 185, 129, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></div>
            <p className="text-emerald-400 text-xl font-light tracking-[0.2em] uppercase">Our Portfolio</p>
            <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse delay-500"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Featured 
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent"> Masterpieces</span>
          </h2>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 mx-auto rounded-full animate-glow"></div>
        </div>
        
        {/* Enhanced Project Cards */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                      <span className="text-emerald-400 font-medium tracking-wider uppercase text-sm">
                        {project.subtitle}
                      </span>
                    </div>
                    
                    <h3 className="text-4xl md:text-6xl font-black text-white group-hover:text-emerald-400 transition-all duration-500">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-lg text-slate-300 leading-relaxed max-w-xl font-light">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-600 text-emerald-300 rounded-full text-sm font-medium border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4">
                    <a 
                      href={`https://${project.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-amber-500 hover:from-emerald-600 hover:via-teal-600 hover:to-amber-600 text-white px-8 py-4 rounded-full transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-110 font-bold"
                    >
                      <ExternalLink className="w-5 h-5 group-hover/link:rotate-45 transition-transform duration-300" />
                      Explore Live
                    </a>
                  </div>
                </div>
                
                {/* Enhanced Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative group/image">
                    {/* Main Image Container */}
                    <div className="relative h-80 md:h-96 rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/20 group-hover:border-emerald-400/40 transition-all duration-700">
                      <img
                        src={project.image}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                      />
                      
                      {/* Overlay Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-all duration-700`}></div>
                      
                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center">
                        <div className="transform scale-75 group-hover:scale-100 transition-transform duration-500">
                          <div className="bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-6 text-center">
                            <Sparkles className="w-8 h-8 text-emerald-400 mx-auto mb-2 animate-spin-slow" />
                            <p className="text-white font-bold">Premium Experience</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Glow Effects */}
                    <div className={`absolute -inset-6 bg-gradient-to-r ${project.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-700 animate-pulse-glow`}></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400/30 rounded-full animate-float-gentle"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-amber-400/30 rounded-lg rotate-45 animate-float-gentle delay-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Unique About Section
  const AboutSection = () => (
    <section ref={aboutRef} id="about" className="py-32 bg-gradient-to-br from-slate-900 via-emerald-900/10 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-amber-500/5"></div>
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 text-emerald-400/20 font-mono text-sm animate-float-code">
          &lt;dream&gt;
        </div>
        <div className="absolute top-40 right-20 text-amber-400/20 font-mono text-sm animate-float-code delay-1000">
          function create() {'{'}
        </div>
        <div className="absolute bottom-40 left-20 text-purple-400/20 font-mono text-sm animate-float-code delay-2000">
          return magic;
        </div>
        <div className="absolute bottom-20 right-10 text-emerald-400/20 font-mono text-sm animate-float-code delay-3000">
          &lt;/dream&gt;
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <Heart className="w-6 h-6 text-red-400 animate-pulse" />
            <p className="text-emerald-400 text-xl font-light tracking-[0.2em] uppercase">Our Story</p>
            <Heart className="w-6 h-6 text-red-400 animate-pulse delay-500" />
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
            Built with
            <span className="bg-gradient-to-r from-red-400 via-pink-400 to-red-400 bg-clip-text text-transparent"> passion</span>
          </h2>
          
          <div className="w-32 h-1.5 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 mx-auto rounded-full animate-glow"></div>
        </div>

        {/* Brothers Story */}
        <div className="mb-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Story Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                  Two Brothers, One Vision
                </h3>
                <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full animate-glow"></div>
              </div>
              
              <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
                <p className="text-2xl text-white font-normal">
                  "Every great journey begins with a single step, but ours began with a shared dream."
                </p>
                <p>
                  In the quiet hours of countless nights, two brothers sat side by side, their screens glowing 
                  with possibility. Atif and Aquib didn't just write code—they painted digital canvases, 
                  crafted user experiences, and breathed life into pixels.
                </p>
                <p>
                  What started as a passion project in a small room has evolved into A&A Technologies, 
                  where every line of code tells a story, and every website becomes a gateway to dreams.
                </p>
                <blockquote className="border-l-4 border-emerald-500 pl-6 italic text-emerald-300">
                  "We don't just build websites. We architect digital experiences that leave lasting impressions."
                </blockquote>
              </div>
            </div>
            
            {/* Brothers Image */}
            <div className="relative">
              <div className="relative group">
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/20">
                  <img
                    src="./aquibatif.jpg"
                    alt="Atif & Aquib - The Visionary Brothers"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-amber-500/20 group-hover:from-emerald-500/30 group-hover:to-amber-500/30 transition-all duration-700"></div> */}
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-amber-400 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-2">
                    <p className="text-white  font-bold text-sm">Founders & Visionaries</p>
                  </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-24 h-24 border border-emerald-400/30 rounded-2xl rotate-12 animate-spin-slow"></div>
                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
              What Drives 
              <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent"> Us</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full animate-glow"></div>
          </div>
          

<div className="grid md:grid-cols-3 gap-8">
  {[
    { 
      icon: <Building2 className="w-12 h-12 text-emerald-400 group-hover:scale-110 transition-transform duration-500" />,
      title: "Faith & Spirituality", 
      desc: "At the heart of every action lies intention. We strive to align our work with Islamic principles, seeking barakah in all we do.",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      delay: "0"
    },
    { 
      icon: <BookOpen className="w-12 h-12 text-amber-400 group-hover:scale-110 transition-transform duration-500" />,
      title: "Knowledge & Wisdom", 
      desc: "Inspired by the Qur'an and Sunnah, we aim to create solutions rooted in wisdom, fostering growth and understanding.",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      delay: "200"
    },
    { 
      icon: <Hand className="w-12 h-12 text-pink-400 group-hover:scale-110 transition-transform duration-500" />, // ✅ Using Hand instead of HandsPraying
      title: "Community & Compassion", 
      desc: "We believe in serving humanity through technology — building bridges that unite communities with empathy and care.",
      gradient: "from-purple-500 via-pink-500 to-red-500",
      delay: "400"
    }
  ].map((value, index) => (
    <div 
      key={index} 
      className={`group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-emerald-400/40 transition-all duration-700 hover:transform hover:scale-105 shadow-2xl animate-fade-up`}
      style={{ animationDelay: `${value.delay}ms` }}
    >
      <div className="text-center space-y-6">
        <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500">
          {value.icon}
        </div>
        <h4 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-500">
          {value.title}
        </h4>
        <p className="text-slate-300 leading-relaxed font-light">
          {value.desc}
        </p>
      </div>

      {/* Animated Border */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-700 animate-pulse-glow`}></div>
    </div>
  ))}
</div>

        </div>

        {/* Mission Statement */}
        <div className="text-center bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-xl rounded-3xl p-12 border border-emerald-500/20">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <Sparkles className="w-8 h-8 text-emerald-400 animate-spin-slow" />
              <h3 className="text-3xl md:text-4xl font-black text-white">Our Mission</h3>
              <Sparkles className="w-8 h-8 text-amber-400 animate-spin-slow" />
            </div>
            
            <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed italic">
              "To transform the digital landscape by creating experiences that don't just meet expectations—
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-amber-400 bg-clip-text text-transparent font-bold"> they exceed dreams</span>."
            </blockquote>
            
            <div className="flex items-center justify-center gap-4 text-emerald-300">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-emerald-500"></div>
              <span className="text-sm font-light tracking-wider uppercase">A&A Technologies</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-emerald-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

// Enhanced Contact Section
const ContactSection = () => (
  <section
    ref={contactRef}
    id="contact"
    className="py-20 sm:py-28 lg:py-32 relative overflow-hidden"
  >
    {/* Dynamic Gradient Background */}
    <div
      className="absolute inset-0 transition-all duration-1000"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%,
            rgba(16, 185, 129, 0.9) 0%,
            rgba(245, 158, 11, 0.7) 40%,
            rgba(16, 185, 129, 0.9) 100%
          )
        `,
      }}
    />

    {/* Overlay Pattern */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-amber-500/20"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-3 mb-6">
          <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse" />
          <p className="text-base sm:text-lg md:text-xl text-slate-100 font-light tracking-[0.2em] uppercase">
            Let's Connect
          </p>
          <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white animate-pulse delay-500" />
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 sm:mb-8 leading-tight">
          Ready to create
          <br />
          <span className="text-white">something magical?</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-slate-800 max-w-3xl mx-auto font-light">
          Your vision + Our expertise = Digital magic. Let's start this incredible journey
          together.
        </p>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
        {/* Contact Methods */}
        <div className="space-y-8">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 flex items-center gap-3">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
              Get in Touch
            </h3>

            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href="https://wa.me/919167838311?text=Hi%20A%26A%20Technologies%2C%20I%27m%20ready%20to%20create%20something%20amazing!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-green-50 hover:bg-green-100 transition-all duration-500 group border border-green-200 hover:border-green-300 hover:shadow-xl transform hover:scale-105"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 text-lg sm:text-xl">WhatsApp</p>
                  <p className="text-slate-600 group-hover:text-green-600 transition-colors text-sm sm:text-lg truncate">
                    +91 91678 38311
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500">Fastest response time</p>
                </div>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 group-hover:translate-x-2 transition-transform duration-500" />
              </a>

              {/* Email */}
              <a
                href="mailto:aquibhingwala@gmail.com?subject=Let's%20Create%20Digital%20Magic%20-%20A%26A%20Technologies"
                className="flex items-center gap-4 p-5 sm:p-6 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-500 group border border-blue-200 hover:border-blue-300 hover:shadow-xl transform hover:scale-105"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 shadow-lg">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-bold text-slate-900 text-lg sm:text-xl">Email</p>
                  <p className="text-slate-600 group-hover:text-blue-600 transition-colors text-sm sm:text-lg truncate">
                    aquibhingwala@gmail.com
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500">Detailed discussions</p>
                </div>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 group-hover:translate-x-2 transition-transform duration-500" />
              </a>
            </div>
          </div>

          {/* Response Time Card */}
          <div className="bg-white/20 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/30 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-white animate-pulse" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
              Lightning Fast Response
            </h4>
            <p className="text-slate-200 text-sm sm:text-lg leading-relaxed font-light">
              We typically respond within 2-6 hours via WhatsApp and email.
              Your project is our priority.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="flex flex-col justify-center space-y-8">
          <div className="bg-white/20 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border border-white/30 text-center">
            <div className="mb-6 sm:mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Star className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400 animate-pulse" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">
                Start Your Journey
              </h3>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed font-light mb-6 sm:mb-8">
                Ready to transform your vision into a premium digital experience?
                Let's discuss your project and create something extraordinary together.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4">
              <a
                href="https://wa.me/919167838311?text=Hi%20A%26A%20Technologies%2C%20I%20want%20to%20start%20an%20amazing%20project!"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:via-green-600 hover:to-teal-600 text-white py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-110 transform"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                Start Project on WhatsApp
              </a>

              <a
                href="mailto:aquibhingwala@gmail.com?subject=Project%20Discussion%20-%20A%26A%20Technologies"
                className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 hover:from-blue-600 hover:via-indigo-600 hover:to-purple-600 text-white py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-110 transform"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                Email Us Your Ideas
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Floating Elements (Hidden on mobile for performance) */}
    <div className="absolute top-1/4 right-6 sm:right-10 w-14 h-14 sm:w-20 sm:h-20 border border-white/30 rounded-full animate-spin-slow hidden lg:block"></div>
    <div className="absolute bottom-1/3 left-6 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl rotate-45 animate-bounce-slow hidden lg:block"></div>
  </section>
);


  // Enhanced Footer
  const Footer = () => (
    <footer className="bg-slate-900 border-t border-emerald-500/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="flex items-center justify-center gap-4">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 via-teal-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-bold text-xl">A&A</span>
              </div>
              <div className="absolute -inset-2 bg-gradient-to-br from-emerald-500 via-teal-500 to-amber-500 rounded-2xl blur opacity-30 animate-pulse"></div>
            </div>
            <div className="text-left">
              <span className="text-white font-bold text-2xl bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                A&A Technologies
              </span>
              <p className="text-emerald-300 text-lg">Crafting Digital Excellence</p>
            </div>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://wa.me/919167838311"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 bg-green-500 hover:bg-green-400 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 transform"
              title="WhatsApp"
            >
              <MessageCircle className="w-7 h-7 text-white" />
            </a>
            <a 
              href="mailto:aquibhingwala@gmail.com"
              className="w-14 h-14 bg-blue-500 hover:bg-blue-400 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110 transform"
              title="Email"
            >
              <Mail className="w-7 h-7 text-white" />
            </a>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-slate-800">
            <p className="text-slate-400 text-lg">
              © 2024 A&A Technologies. Crafted with <Heart className="w-4 h-4 text-red-400 inline animate-pulse" /> by two passionate brothers.
            </p>
            <p className="text-emerald-300 text-sm mt-2">
              "Dream it. We'll build it. Together, we'll make it extraordinary."
            </p>
          </div>
        </div>
      </div>
    </footer>
  );

  // Main Return
  if (!showMainSite) {
    return <LandingPage />;
  }

  return (
    <div className="relative bg-slate-900 overflow-x-hidden">
      <Navigation />
      <HomeSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />

      {/* Enhanced Custom Styles */}
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
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
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
        
        @keyframes fade-up {
          from { 
            opacity: 0; 
            transform: translateY(50px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }

        @keyframes scale-in {
          from { 
            opacity: 0; 
            transform: scale(0.8) translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
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

        @keyframes pulse-glow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }

        @keyframes scroll-indicator {
          0% { 
            opacity: 0; 
            transform: translateY(0px); 
          }
          50% { 
            opacity: 1; 
            transform: translateY(8px); 
          }
          100% { 
            opacity: 0; 
            transform: translateY(16px); 
          }
        }

        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.5); }
          50% { box-shadow: 0 0 30px rgba(245, 158, 11, 0.7); }
        }
        
        .animate-float-smooth {
          animation: float-smooth 10s ease-in-out infinite;
        }

        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }

        .animate-float-code {
          animation: float-code 6s ease-in-out infinite;
        }
        
        .animate-fade-up {
          animation: fade-up 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 1s ease-out forwards;
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

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
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

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Custom scrollbar */
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

        /* Enhanced focus styles */
        button:focus-visible,
        a:focus-visible {
          outline: 2px solid #10b981;
          outline-offset: 3px;
        }

        /* Image optimization */
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
        }

        /* Backdrop blur fallback */
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