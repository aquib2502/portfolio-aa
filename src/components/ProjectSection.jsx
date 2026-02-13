'use client';

import React, { useRef, useMemo, useState, useEffect, memo } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, ArrowRight, Zap, Code2, Rocket, Sparkles } from 'lucide-react';

// ============================================================================
// PROJECT DATA - Outside component to prevent recreation
// ============================================================================
const PROJECTS = [
  {
    id: 1,
    title: "The Trace Express",
    subtitle: "Global Shipping Platform",
    url: "thetraceexpress.com",
    description: "Revolutionary global parcel shipping platform with secure authentication, real-time tracking dashboards, and seamless payment integration for worldwide logistics.",
    video: "./tte-video.mp4",
    bgGradient: "from-emerald-500 to-teal-600",
    textGradient: "from-emerald-400 to-teal-400",
    icon: Zap,
    tags: ["Shipping", "React", "Express", "MongoDB"],
  },
  {
    id: 2,
    title: "Tracking Express",
    subtitle: "Real-time Logistics",
    url: "tracking.thetraceexpress.com",
    description: "Advanced package tracking solution with live updates and intelligent API integration, enabling instant monitoring and streamlined operations.",
    video: "./tte-tracking.mp4",
    bgGradient: "from-purple-500 to-fuchsia-600",
    textGradient: "from-purple-400 to-fuchsia-400",
    icon: Code2,
    tags: ["React", "APIs", "Real-time", "Tracking"],
  },
  {
    id: 3,
    title: "C4U",
    subtitle: "AI-Powered Consultancy",
    url: "c4u.co.in",
    description: "Next-generation AI-powered consultancy platform transforming how professionals and clients connect with seamless appointment booking and intelligent report generation.",
    video: "./consultancy-video.mp4",
    bgGradient: "from-cyan-500 to-blue-600",
    textGradient: "from-cyan-400 to-blue-400",
    icon: Rocket,
    tags: ["AI", "React", "Node.js", "PostgreSQL"],
  },
  // TPF Aid is GREEN (not red)
  {
    id: 4,
    title: "TPF Aid",
    subtitle: "Full NGO Digital Transformation",
    url: "tpfaid.org",
    description: "Led the complete digital transformation of a traditionally offline NGO into a fully online platform — implementing secure donation processing, campaign management, beneficiary workflows, and transparent fund tracking.",
    video: "./tpfvideo.mp4",
    bgGradient: "from-green-600 to-emerald-600", // matches donate buttons
    textGradient: "from-green-500 to-emerald-500",
    icon: Rocket,
    tags: ["Digital Transformation", "Payments Integration", "NGO Tech", "Full-Stack"],
  },

  // Flow India Projects = Dark + Gold accent
  {
    id: 5,
    title: "Flow India Projects",
    subtitle: "Premium Engineering Solutions",
    url: "flowindiaprojects.com",
    description: "Developed a premium corporate presence for an engineering firm delivering HVAC, MEP, and infrastructure solutions across commercial and industrial sectors.",
    video: "./flowindiavideo.mp4",
    bgGradient: "from-yellow-500 to-amber-600", // matches gold CTA
    textGradient: "from-yellow-400 to-amber-500",
    icon: Code2,
    tags: ["MEP Engineering", "HVAC Systems", "Infrastructure", "Corporate Platform"],
  },
];
const TOTAL_PROJECTS = PROJECTS.length;

// ============================================================================
// OPTIMIZED PROJECT CARD - Memoized to prevent unnecessary re-renders
// ============================================================================
const ProjectCard = memo(({ project, index, springProgress, isActive, isVisible }) => {
  const videoRef = useRef(null);
  const Icon = project.icon;

  // Calculate scroll range for this project
  const start = index / TOTAL_PROJECTS;
  const end = (index + 1) / TOTAL_PROJECTS;

  // PERFORMANCE: Single transform per property, derived from parent spring
  const opacity = useTransform(
    springProgress,
    [start, start + 0.015, end - 0.01, end],
    [0, 1, 1, 0],
    { clamp: true }
  );

  const scale = useTransform(
    springProgress,
    [start, start + 0.02, end - 0.02, end],
    [0.96, 1, 1, 0.96],
    { clamp: true }
  );

  const y = useTransform(
    springProgress,
    [start, start + 0.02, end - 0.02, end],
    [40, 0, 0, -40],
    { clamp: true }
  );

  // PERFORMANCE: Video control - only play active video
  useEffect(() => {
    if (!videoRef.current) return;

    if (isActive) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked, ignore error
      });
    } else {
      videoRef.current.pause();
    }
  }, [isActive]);

  // PERFORMANCE: Don't render if not visible (virtualization)
  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        opacity,
        scale,
        y,
        zIndex: isActive ? 10 : 0
      }}
      className="absolute inset-0 flex items-center justify-center will-change-transform"
    >

      <div className="w-full max-w-7xl">
        {/* PERFORMANCE: Removed backdrop-blur-sm, reduced border opacity */}
        <div className={`grid lg:grid-cols-2 gap-0 bg-slate-800/30 rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/30 shadow-xl group ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
          }`}>

          {/* Video Section */}
          <div className={`relative flex items-center justify-center overflow-hidden min-h-[280px] sm:min-h-[350px] lg:min-h-[450px] ${index % 2 === 1 ? 'lg:col-start-2' : ''
            }`}>
            {/* PERFORMANCE: Simplified background - removed extra gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />

            {/* Video container */}
            <div className="relative w-[88%] sm:w-[82%] h-auto flex items-center justify-center z-10">
              <video
                ref={videoRef}
                src={project.video}
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-auto max-h-[55vh] object-contain rounded-lg shadow-xl border border-slate-700/30 will-change-transform"
              />
            </div>

            {/* PERFORMANCE: Reduced blur from blur-3xl to blur-2xl, lower opacity */}
            <div className={`absolute -inset-8 bg-gradient-to-r ${project.bgGradient} opacity-[0.08] blur-2xl pointer-events-none`} />

            {/* LIVE Badge */}
            <div className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20">
              <div className={`flex items-center gap-1.5 bg-gradient-to-r ${project.bgGradient} text-white px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg`}>
                <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                <span className="text-[10px] sm:text-xs font-bold tracking-wide">LIVE</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className={`relative p-6 sm:p-8 lg:p-10 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''
            }`}>

            {/* Project Number - PERFORMANCE: Removed hover effect during scroll */}
            <div className={`absolute top-3 right-3 sm:top-5 sm:right-5 text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-br ${project.textGradient} bg-clip-text text-transparent opacity-[0.07]`}>
              0{index + 1}
            </div>

            <div className="relative space-y-3 sm:space-y-4 lg:space-y-5">
              {/* Badge with Icon */}
              <div className="flex items-center gap-2.5">
                <div className={`flex items-center gap-1.5 bg-gradient-to-r ${project.bgGradient} text-white px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg shadow-md`}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                    {project.subtitle}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black bg-gradient-to-r ${project.textGradient} bg-clip-text text-transparent leading-tight`}>
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 sm:px-2.5 sm:py-1.5 bg-slate-700/40 text-slate-300 rounded-md text-[10px] sm:text-xs font-semibold border border-slate-600/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA Button */}
              <div className="pt-3 sm:pt-4">
                <a
                  href={`https://${project.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group/btn inline-flex items-center gap-2 bg-gradient-to-r ${project.bgGradient} text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-shadow duration-200 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-200"></div>
                  <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10" />
                  <span className="relative z-10">View Live Project</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 relative z-10" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = 'ProjectCard';

// ============================================================================
// OPTIMIZED SCROLL INDICATOR - Single computed active index
// ============================================================================
const ScrollProgressIndicator = memo(({ springProgress }) => {
  // PERFORMANCE: Single transform for the progress bar
  const scaleY = useTransform(springProgress, [0, 1], [0, 1], { clamp: true });

  // PERFORMANCE: Calculate active index once, not per dot
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = springProgress.on('change', (latest) => {
      const newIndex = Math.floor(latest * TOTAL_PROJECTS);
      const clampedIndex = Math.min(newIndex, TOTAL_PROJECTS - 1);
      setActiveIndex(clampedIndex);
    });

    return unsubscribe;
  }, [springProgress]);

  return (
    <div className="fixed right-4 sm:right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-2.5">
      <div className="w-0.5 h-24 bg-slate-700/40 rounded-full overflow-hidden">
        <motion.div
          className="w-full bg-gradient-to-b from-emerald-500 via-teal-500 to-cyan-500 origin-top will-change-transform"
          style={{ scaleY }}
        />
      </div>
      <div className="flex flex-col items-center gap-1.5">
        {PROJECTS.map((_, index) => (
          <div
            key={index}
            className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${index === activeIndex ? 'bg-emerald-500' : 'bg-slate-600'
              }`}
          />
        ))}
      </div>
    </div>
  );
});

ScrollProgressIndicator.displayName = 'ScrollProgressIndicator';

// ============================================================================
// MAIN COMPONENT
// ============================================================================
const ProjectsSection = ({ projectsRef }) => {
  const containerRef = useRef(null);

  // PERFORMANCE: Single scroll progress tracked at parent
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // PERFORMANCE: Single spring at parent level, all children derive from this
  // Reduced stiffness and damping for smoother feel
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001
  });

  // PERFORMANCE: Track active project for video control
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const unsubscribe = springProgress.on('change', (latest) => {
      const newIndex = Math.round(latest * TOTAL_PROJECTS);
      const clampedIndex = Math.min(Math.max(newIndex, 0), TOTAL_PROJECTS - 1);
      if (clampedIndex !== activeIndex) {
        setActiveIndex(clampedIndex);
      }
    });

    return unsubscribe;
  }, [springProgress, activeIndex]);

  // PERFORMANCE: Virtualization - only render visible cards (previous, current, next)
  const visibleIndices = useMemo(() => {
    const indices = new Set();
    indices.add(activeIndex);
    if (activeIndex > 0) indices.add(activeIndex - 1);
    if (activeIndex < TOTAL_PROJECTS - 1) indices.add(activeIndex + 1);
    return indices;
  }, [activeIndex]);

  const SCROLL_PER_PROJECT = 130; // try 150–200 for stronger effect

  return (
    <>
      <ScrollProgressIndicator springProgress={springProgress} />

      <section
        ref={projectsRef}
        id="projects"
        className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950"
      >
        {/* Header Section - Static */}
        <div className="relative z-10 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center gap-2.5 mb-5">
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                <p className="text-emerald-400 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase">
                  Featured Work
                </p>
                <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse [animation-delay:300ms]" />
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-5 leading-tight">
                Projects That
                <br />
                <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                  Make an Impact
                </span>
              </h2>

              <p className="text-slate-400 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
                Exceptional digital experiences crafted with passion and precision
              </p>
            </div>
          </div>
        </div>

        {/* Scrolling Projects Container */}
        <div
          ref={containerRef}
          className="relative"
          style={{
            height: `${TOTAL_PROJECTS * SCROLL_PER_PROJECT}vh`
          }}
        >
          {/* Sticky container */}
          <div className="sticky top-0 h-screen overflow-hidden">
            {PROJECTS.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                springProgress={springProgress}
                isActive={index === activeIndex}
                isVisible={visibleIndices.has(index)}
              />
            ))}
          </div>
        </div>

        {/* Bottom CTA Section - Static */}
        <div className="relative z-10 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* PERFORMANCE: Removed backdrop-blur, simplified gradients */}
            <div className="bg-gradient-to-r from-emerald-500/8 via-teal-500/8 to-cyan-500/8 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 border border-emerald-500/15 text-center relative overflow-hidden">
              <div className="relative z-10 space-y-5 sm:space-y-6">
                <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-emerald-400 animate-pulse" />

                <div className="space-y-2.5 sm:space-y-3">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white">
                    Have a Project in Mind?
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
                    Let's collaborate and create something extraordinary together
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                  <a
                    href="#contact"
                    className="group inline-flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-200 w-full sm:w-auto justify-center"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>

                  <div className="flex items-center gap-2 text-slate-400 text-xs sm:text-sm">
                    <div className="w-10 h-px bg-gradient-to-r from-transparent to-slate-600"></div>
                    <span>or</span>
                    <div className="w-10 h-px bg-gradient-to-l from-transparent to-slate-600"></div>
                  </div>

                  <a
                    href="#about"
                    className="text-emerald-400 hover:text-emerald-300 font-semibold text-sm sm:text-base transition-colors duration-200 group"
                  >
                    Learn More About Us
                    <span className="inline-block ml-1.5 group-hover:translate-x-0.5 transition-transform duration-200">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsSection;