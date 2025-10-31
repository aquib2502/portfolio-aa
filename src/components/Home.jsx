import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, StarIcon, MoonIcon, ExternalLink, Mail, ArrowRight, Star, MessageCircle, Code, Sparkles, Heart, Zap, Building2, BookOpen, Hand } from 'lucide-react';
// ==================== HOME SECTION COMPONENT ====================
const HomeSection = ({ homeRef, mousePosition, isLoaded, scrollToSection, projectsRef }) => (
  <section
    ref={homeRef}
    id="home"
    className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 sm:pt-36 md:pt-40"
  >
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

    <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-6xl mx-auto">
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

        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black mb-8 leading-tight">
          We craft
          <br />
          <span className="bg-gradient-to-r from-emerald-400 via-teal-400 via-amber-400 to-orange-400 bg-clip-text text-transparent animate-gradient-x bg-300%">
            digital magic
          </span>
        </h1>

        <p className="text-lg md:text-2xl mb-12 text-slate-300 font-light max-w-4xl mx-auto leading-relaxed">
          Where innovation meets artistry. We transform ideas into immersive digital experiences
          that captivate, engage, and inspire.
        </p>
      </div>

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

export default HomeSection;