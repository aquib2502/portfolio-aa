import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HomeSection = ({ homeRef, isLoaded, scrollToSection, projectsRef }) => (
  <section
    ref={homeRef}
    id="home"
    className="min-h-screen flex items-center justify-center relative overflow-hidden"
  >
    {/* Background Video */}
    <div className="absolute inset-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      
      {/* Video Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/90" />
    </div>
    
    {/* Premium Gradient Accents */}
    <div className="absolute inset-0">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emerald-500/20 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[800px] h-[400px] bg-teal-500/15 blur-[120px] rounded-full" />
    </div>

    {/* Content */}
    <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-5xl mx-auto">
      {/* Top Badge */}
      {/* <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="inline-flex items-center gap-2 mb-8 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 backdrop-blur-sm"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <p className="text-sm text-emerald-400 font-semibold tracking-wide uppercase">
          Automation
        </p>
      </motion.div> */}

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight tracking-tight"
      >
        WE CRAFT
        <br />
        <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
          DIGITAL EXCELLENCE
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="text-base sm:text-lg md:text-xl mb-12 text-slate-300 font-light max-w-2xl mx-auto leading-relaxed"
      >
        Transform your business with cutting-edge automation solutions.
        <br className="hidden sm:block" />
        Built for scale, designed for results.
      </motion.p>

      {/* Single CTA Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      >
        <button
          onClick={() => scrollToSection(projectsRef)}
          className="group inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-full font-semibold text-base shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105"
        >
          <span>Discover Our Work</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </motion.div>
    </div>
  </section>
);

export default HomeSection;