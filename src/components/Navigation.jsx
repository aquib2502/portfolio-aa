import { ChevronDown, Menu, X, StarIcon, MoonIcon, ExternalLink, Mail, ArrowRight, Star, MessageCircle, Code, Sparkles, Heart, Zap, Building2, BookOpen, Hand } from 'lucide-react';
// ==================== NAVIGATION COMPONENT ====================
const Navigation = ({ scrollY, activeSection, isMenuOpen, setIsMenuOpen, scrollToSection, homeRef, projectsRef, aboutRef, contactRef }) => (
  <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ${
    scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-2xl shadow-2xl border-b border-emerald-500/20' : 'bg-transparent'
  }`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
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

        <button 
          className="md:hidden text-white hover:text-emerald-400 transition-colors duration-300 p-2 rounded-lg hover:bg-white/10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

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

export default Navigation;