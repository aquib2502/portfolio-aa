import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Heart, Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-emerald-500/20 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 md:space-y-8">
          {/* Logo and Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-center gap-4"
          >
            <div className="relative">
              {/* Glow */}
              <motion.div
                className="absolute -inset-2 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl blur opacity-30"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                  scale: [0.95, 1.05, 0.95],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Logo Box */}
              <div className="relative w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-black text-lg md:text-xl">A&A</span>
              </div>
            </div>
            
            <div className="text-left">
              <span className="text-white font-black text-xl md:text-2xl bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                A&A Technologies
              </span>
              <p className="text-emerald-300 text-sm md:text-base lg:text-lg">Crafting Digital Excellence</p>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex justify-center gap-4 md:gap-6"
          >
            <motion.a 
              href="https://wa.me/919167838311"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 md:w-14 md:h-14 bg-green-500 hover:bg-green-400 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg"
              title="WhatsApp"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </motion.a>
            
            <motion.a 
              href="mailto:aquibhingwala@gmail.com"
              className="w-12 h-12 md:w-14 md:h-14 bg-blue-500 hover:bg-blue-400 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-lg"
              title="Email"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="w-6 h-6 md:w-7 md:h-7 text-white" />
            </motion.a>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-6 md:pt-8 border-t border-slate-800"
          >
            {/* Copyright */}
            <p className="text-slate-400 text-sm md:text-base lg:text-lg flex items-center justify-center gap-2 flex-wrap">
              © 2024 A&A Technologies. Crafted with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Heart className="w-4 h-4 text-red-400 inline" />
              </motion.span>
              by two passionate brothers.
            </p>
            
            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-emerald-300 text-xs md:text-sm mt-2 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
              "Dream it. We'll build it. Together, we'll make it extraordinary."
              <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            </motion.p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;