import React from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight, MessageCircle } from 'lucide-react';

const ContactSection = ({ contactRef }) => {
  return (
    <section
      ref={contactRef}
      id="contact"
      className="py-32 relative overflow-hidden bg-slate-950"
    >
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/50 to-slate-950" />
      
      {/* Subtle accent glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-emerald-500/10 blur-[150px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <p className="text-sm text-emerald-400 font-semibold tracking-wide">
              LET'S CONNECT
            </p>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            READY TO CREATE
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              SOMETHING AMAZING?
            </span>
          </h2>

          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Your vision + Our expertise = Digital excellence.
            <br className="hidden sm:block" />
            Let's start this incredible journey together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-4"
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/919167838311?text=Hi%20A%26A%20Technologies%2C%20I%27m%20ready%20to%20create%20something%20amazing!"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-green-500/50 hover:bg-slate-900/80 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-white text-lg mb-1">WhatsApp</p>
                <p className="text-slate-400 text-sm">+91 91678 38311</p>
                <p className="text-xs text-green-400 mt-1">Fastest response • Typically within 2-6 hours</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
            </a>

            {/* Email */}
            <a
              href="mailto:aquibhingwala@gmail.com?subject=Let's%20Create%20Digital%20Magic%20-%20A%26A%20Technologies"
              className="group flex items-center gap-4 p-6 rounded-2xl bg-slate-900/50 backdrop-blur-sm border border-slate-800 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-white text-lg mb-1">Email</p>
                <p className="text-slate-400 text-sm truncate">aquibhingwala@gmail.com</p>
                <p className="text-xs text-blue-400 mt-1">For detailed discussions</p>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300 flex-shrink-0" />
            </a>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
              <h3 className="text-2xl font-black text-white mb-3">
                Start Your Project
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8">
                Ready to transform your vision into a premium digital experience? 
                Reach out via WhatsApp or email and let's discuss your project.
              </p>

              <div className="space-y-3">
                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/919167838311?text=Hi%20A%26A%20Technologies%2C%20I%20want%20to%20start%20an%20amazing%20project!"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 w-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white py-4 rounded-xl font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Start on WhatsApp</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                {/* Email CTA */}
                <a
                  href="mailto:aquibhingwala@gmail.com?subject=Project%20Discussion%20-%20A%26A%20Technologies"
                  className="group flex items-center justify-center gap-3 w-full bg-slate-800/50 text-white py-4 rounded-xl font-semibold border border-slate-700 hover:bg-slate-800 hover:border-slate-600 hover:scale-105 transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Send Us an Email</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
              <span>Quick Response Time</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-800"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
              <span>Professional Service</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-slate-800"></div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              <span>Premium Results</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;