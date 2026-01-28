import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, isMenuOpen, setIsMenuOpen, scrollToSection, homeRef, projectsRef, aboutRef, contactRef }) => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuItems = [
    { id: 'home', label: 'Home', ref: homeRef },
    { id: 'projects', label: 'Projects', ref: projectsRef },
    { id: 'about', label: 'About', ref: aboutRef },
    { id: 'contact', label: 'Contact', ref: contactRef }
  ];

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-[1000] flex justify-center px-4 sm:px-6">
        <div className="w-full max-w-4xl bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl shadow-black/20">
          <div className="px-4 sm:px-6 py-3">
            <div className="flex items-center justify-between gap-4">
              {/* Logo */}
              <div
                className="flex items-center gap-2 cursor-pointer group flex-shrink-0"
                onClick={() => scrollToSection(homeRef)}
              >
                <div className="relative w-8 h-8 sm:w-9 sm:h-9">
                  <img 
                    src="/ana-logo.png" 
                    alt="A&A Technologies" 
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Brand Name - Hidden on small screens */}
                <div className="hidden lg:flex flex-col leading-none">
                  <span className="text-sm font-black tracking-tight bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                    A&A Technologies
                  </span>
                </div>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {menuItems.map((item) => {
                  const isActive = activeSection === item.id;
                  
                  return (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.ref)}
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      className="relative px-4 py-2 text-sm font-semibold text-white/90 rounded-full transition-all duration-200"
                    >
                      {/* Hover Background */}
                      {hoveredItem === item.id && !isActive && (
                        <div className="absolute inset-0 bg-white/5 rounded-full" />
                      )}

                      {/* Active Background */}
                      {isActive && (
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-full" />
                      )}

                      {/* Content */}
                      <span className={`relative z-10 tracking-wide ${
                        isActive ? 'text-emerald-400' : 'text-white/90'
                      }`}>
                        {item.label}
                      </span>

                      {/* Active Indicator */}
                      {isActive && (
                        <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 text-white/90 rounded-lg hover:bg-white/10 transition-colors duration-200 flex-shrink-0"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X size={20} strokeWidth={2.5} />
                ) : (
                  <Menu size={20} strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="fixed top-20 left-4 right-4 sm:left-6 sm:right-6 z-[999] md:hidden">
          <div className="bg-slate-900/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
            <div className="px-3 py-2 space-y-1">
              {menuItems.map((item) => {
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.ref);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full px-4 py-2.5 text-left text-sm font-semibold rounded-xl transition-all duration-200 flex items-center justify-between ${
                      isActive
                        ? 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400'
                        : 'text-white/90 hover:bg-white/5'
                    }`}
                  >
                    <span className="tracking-wide">{item.label}</span>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Overlay for mobile menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-[998] md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navigation;