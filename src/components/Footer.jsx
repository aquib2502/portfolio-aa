"use client";
import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, StarIcon, MoonIcon, ExternalLink, Mail, ArrowRight, Star, MessageCircle, Code, Sparkles, Heart, Zap, Building2, BookOpen, Hand } from 'lucide-react';
// ==================== FOOTER COMPONENT ====================
const Footer = () => (
  <footer className="bg-slate-900 border-t border-emerald-500/20 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center space-y-8">
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

export default Footer;