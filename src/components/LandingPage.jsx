
import { ChevronDown, Menu, X, StarIcon, MoonIcon, ExternalLink, Mail, ArrowRight, Star, MessageCircle, Code, Sparkles, Heart, Zap, Building2, BookOpen, Hand } from 'lucide-react';

// ==================== LANDING PAGE COMPONENT ====================
const LandingPage = ({ setShowMainSite }) => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080"><rect fill="%23111827" width="1920" height="1080"/></svg>')`,
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/50 to-indigo-900/70" />
      
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

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6 text-center">
        <div className="mb-8">
          <div className="relative group cursor-pointer">
            <div className="w-24 h-24 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-500">
              <span className="text-white font-bold text-3xl tracking-wider">A&A</span>
            </div>
            <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-light text-white mb-2 tracking-wide">
          A&A Technologies
        </h1>
        <p className="text-indigo-300 text-sm md:text-base mb-16 opacity-80">
          Digital Excellence, Inspired by Faith
        </p>

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

        <div className="space-y-6">
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
              
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-full bg-white/10 scale-0 group-hover:scale-100 transition-transform duration-700" />
            </button>
          </div>

          <div className="relative w-32 h-8 mx-auto">
            <div className="absolute w-2 h-2 bg-indigo-400 rounded-full" style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              animation: 'orbit 4s linear infinite'
            }}></div>
          </div>
        </div>

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

export default LandingPage;