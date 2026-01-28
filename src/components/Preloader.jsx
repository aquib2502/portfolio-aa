import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsComplete(true);
            setTimeout(onComplete, 600);
          }, 400);
          return 100;
        }
        // Slower increments for 7-10 seconds
        return Math.min(prev + 3 + Math.random() * 5, 100);
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
          exit={{ 
            opacity: 0,
          }}
          transition={{ 
            duration: 0.6,
            ease: "easeInOut"
          }}
        >
          {/* Radial glow background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.12)_0%,transparent_65%)]"></div>

          {/* Main content - fully centered and responsive */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-6 sm:gap-8 px-4 sm:px-6 w-full max-w-[90vw] sm:max-w-xl">
            
            {/* Logo with intense glow - responsive sizing */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                duration: 0.4,
                ease: "easeOut"
              }}
              className="relative flex-shrink-0"
            >
              {/* Multi-layer glow effect - responsive */}
              <div className="absolute -inset-8 sm:-inset-12 bg-emerald-500/40 rounded-full blur-[60px] sm:blur-[80px] opacity-60"></div>
              <div className="absolute -inset-6 sm:-inset-8 bg-teal-400/50 rounded-full blur-[40px] sm:blur-[60px] opacity-70"></div>
              <div className="absolute -inset-3 sm:-inset-4 bg-emerald-300/60 rounded-full blur-[30px] sm:blur-[40px] opacity-80"></div>
              
              {/* Logo container with glow - responsive sizing */}
              <div className="relative bg-black rounded-full p-1.5 sm:p-2">
                <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full overflow-hidden bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border-2 border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.6)] sm:shadow-[0_0_60px_rgba(16,185,129,0.6)]">
                  <img 
                    src="/ana-logo.png" 
                    alt="A&A Technologies"
                    className="w-full h-full object-contain p-3 sm:p-4"
                  />
                </div>
              </div>
            </motion.div>

            {/* Brand name with glow - responsive text */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.2, 
                duration: 0.4,
              }}
              className="text-center space-y-1.5 sm:space-y-2 flex-shrink-0"
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight drop-shadow-[0_0_25px_rgba(16,185,129,0.8)] sm:drop-shadow-[0_0_30px_rgba(16,185,129,0.8)]">
                A&A Technologies
              </h1>
              <p className="text-emerald-400 text-xs sm:text-sm md:text-base font-medium drop-shadow-[0_0_15px_rgba(16,185,129,0.6)] sm:drop-shadow-[0_0_20px_rgba(16,185,129,0.6)]">
                Digital Excellence, Inspired by Faith
              </p>
            </motion.div>

            {/* Quranic Verse with elegant glow - responsive */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.3, 
                duration: 0.4,
              }}
              className="text-center w-full max-w-[85vw] sm:max-w-md flex-shrink-0"
            >
              <div className="relative py-4 sm:py-5">
                {/* Top ornament - responsive */}
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                  <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-emerald-500/60 shadow-[0_0_8px_rgba(16,185,129,0.5)] sm:shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)] sm:shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                  <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-emerald-500/60 shadow-[0_0_8px_rgba(16,185,129,0.5)] sm:shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
                
                <p className="text-slate-200 text-sm sm:text-base md:text-lg font-light leading-relaxed italic drop-shadow-[0_0_20px_rgba(255,255,255,0.3)] sm:drop-shadow-[0_0_25px_rgba(255,255,255,0.3)] px-2">
                  "And whoever relies upon Allah — then He is sufficient for him."
                </p>
                
                <p className="text-emerald-400 text-[10px] sm:text-xs md:text-sm mt-2 sm:mt-3 drop-shadow-[0_0_12px_rgba(16,185,129,0.6)] sm:drop-shadow-[0_0_15px_rgba(16,185,129,0.6)]">
                  Surah At-Talaq 65:3
                </p>

                {/* Bottom ornament - responsive */}
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                  <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-r from-emerald-500/60 to-transparent shadow-[0_0_8px_rgba(16,185,129,0.5)] sm:shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                  <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-emerald-400 rounded-full shadow-[0_0_12px_rgba(16,185,129,0.8)] sm:shadow-[0_0_15px_rgba(16,185,129,0.8)]"></div>
                  <div className="w-10 sm:w-16 h-[1px] bg-gradient-to-l from-emerald-500/60 to-transparent shadow-[0_0_8px_rgba(16,185,129,0.5)] sm:shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
              </div>
            </motion.div>

            {/* Progress bar with intense glow - responsive */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: 0.4, 
                duration: 0.3,
              }}
              className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm space-y-2 sm:space-y-3 flex-shrink-0"
            >
              {/* Progress container - responsive height */}
              <div className="relative h-1.5 sm:h-2 bg-slate-900 rounded-full overflow-hidden border border-emerald-500/20 shadow-[0_0_15px_rgba(16,185,129,0.3)] sm:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                {/* Progress fill with glow */}
                <motion.div
                  className="absolute inset-y-0 left-0 rounded-full shadow-[0_0_25px_rgba(16,185,129,0.9)] sm:shadow-[0_0_30px_rgba(16,185,129,0.9)]"
                  style={{
                    background: 'linear-gradient(90deg, #10b981 0%, #14b8a6 50%, #10b981 100%)',
                  }}
                  initial={{ width: '0%' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ 
                    duration: 0.2,
                    ease: "easeOut"
                  }}
                />
              </div>
              
              {/* Progress text with glow - responsive size */}
              <p className="text-center text-emerald-400 text-xs sm:text-sm font-semibold drop-shadow-[0_0_12px_rgba(16,185,129,0.7)] sm:drop-shadow-[0_0_15px_rgba(16,185,129,0.7)]">
                {Math.round(progress)}%
              </p>
            </motion.div>

            {/* Loading text - responsive */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ 
                delay: 0.5,
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-slate-400 text-xs sm:text-sm drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] sm:drop-shadow-[0_0_10px_rgba(255,255,255,0.2)] flex-shrink-0"
            >
              Preparing your experience
            </motion.div>
          </div>

          {/* Ambient light particles - minimal for performance, responsive positioning */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.8)]"
              style={{
                left: `${25 + Math.random() * 50}%`,
                top: `${25 + Math.random() * 50}%`,
              }}
              animate={{
                opacity: [0.3, 0.7, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random(),
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;