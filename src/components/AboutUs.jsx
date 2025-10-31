import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, StarIcon, MoonIcon, ExternalLink, Mail, ArrowRight, Star, MessageCircle, Code, Sparkles, Heart, Zap, Building2, BookOpen, Hand } from 'lucide-react';
// ==================== ABOUT SECTION COMPONENT ====================
const AboutSection = ({ aboutRef }) => (
  <section ref={aboutRef} id="about" className="py-32 bg-gradient-to-br from-slate-900 via-emerald-900/10 to-slate-900 relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-amber-500/5"></div>
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
        
        <div className="w-32 h-1.5 bg-gradient-to-r from-red-500 via-pink-500 to-red-500 mx-auto rounded-full"></div>
      </div>

      <div className="mb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent">
                Two Brothers, One Vision
              </h3>
              <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed font-light">
              <p className="text-2xl text-white font-normal">
                "Every great journey begins with a single step, but ours began with a shared dream."
              </p>
              <p>
                In the quiet hours of countless nights, two brothers sat side by side, their screens glowing 
                with possibility. They didn't just write code—they painted digital canvases, 
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
          
          <div className="relative">
            <div className="relative group">
              <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/20">
                <img
                  src="./brothers.jpg"
                  alt="The Visionary Brothers"
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                
                <div className="absolute top-4 right-4 bg-amber-400 backdrop-blur-xl border border-white/20 rounded-2xl px-4 py-2">
                  <p className="text-white font-bold text-sm">Founders & Visionaries</p>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 w-24 h-24 border border-emerald-400/30 rounded-2xl rotate-12 animate-spin-slow"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full opacity-30 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-32">
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-black text-white mb-6">
            What Drives 
            <span className="bg-gradient-to-r from-emerald-400 to-amber-400 bg-clip-text text-transparent"> Us</span>
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-amber-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              icon: <Building2 className="w-12 h-12 text-emerald-400" />,
              title: "Faith & Spirituality", 
              desc: "At the heart of every action lies intention. We strive to align our work with Islamic principles, seeking barakah in all we do.",
              gradient: "from-emerald-500 via-teal-500 to-cyan-500"
            },
            { 
              icon: <BookOpen className="w-12 h-12 text-amber-400" />,
              title: "Knowledge & Wisdom", 
              desc: "Inspired by the Qur'an and Sunnah, we aim to create solutions rooted in wisdom, fostering growth and understanding.",
              gradient: "from-amber-500 via-orange-500 to-red-500"
            },
            { 
              icon: <Hand className="w-12 h-12 text-pink-400" />,
              title: "Community & Compassion", 
              desc: "We believe in serving humanity through technology — building bridges that unite communities with empathy and care.",
              gradient: "from-purple-500 via-pink-500 to-red-500"
            }
          ].map((value, index) => (
            <div 
              key={index} 
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-emerald-400/40 transition-all duration-700 hover:transform hover:scale-105 shadow-2xl"
            >
              <div className="text-center space-y-6">
                <div className="transform group-hover:scale-110 transition-transform duration-500">
                  {value.icon}
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-500">
                  {value.title}
                </h4>
                <p className="text-slate-300 leading-relaxed font-light">
                  {value.desc}
                </p>
              </div>

              <div className={`absolute -inset-1 bg-gradient-to-r ${value.gradient} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-all duration-700`}></div>
            </div>
          ))}
        </div>
      </div>

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

export default AboutSection;

