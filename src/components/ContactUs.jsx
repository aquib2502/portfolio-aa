import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, StarIcon, MoonIcon, ExternalLink, Mail, ArrowRight, Star, MessageCircle, Code, Sparkles, Heart, Zap, Building2, BookOpen, Hand } from 'lucide-react';
// ==================== CONTACT SECTION COMPONENT ====================
const ContactSection = ({ contactRef, mousePosition }) => (
  <section
    ref={contactRef}
    id="contact"
    className="py-20 sm:py-28 lg:py-32 relative overflow-hidden"
  >
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

    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 to-amber-500/20"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          Your vision + Our expertise = Digital magic. Let's start this incredible journey together.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16">
        <div className="space-y-8">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/50">
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 flex items-center gap-3">
              <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-600" />
              Get in Touch
            </h3>

            <div className="space-y-6">
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

          <div className="bg-white/20 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/30 text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6">
              <Zap className="w-7 h-7 sm:w-8 sm:h-8 text-white animate-pulse" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">
              Lightning Fast Response
            </h4>
            <p className="text-slate-200 text-sm sm:text-lg leading-relaxed font-light">
              We typically respond within 2-6 hours via WhatsApp and email. Your project is our priority.
            </p>
          </div>
        </div>

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

    <div className="absolute top-1/4 right-6 sm:right-10 w-14 h-14 sm:w-20 sm:h-20 border border-white/30 rounded-full animate-spin-slow hidden lg:block"></div>
    <div className="absolute bottom-1/3 left-6 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-2xl rotate-45 animate-bounce-slow hidden lg:block"></div>
  </section>
);

export default ContactSection;