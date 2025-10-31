import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, ArrowRight, Sparkles, Zap, Code2, Rocket } from 'lucide-react';

const ProjectsSection = ({ projectsRef }) => {
  const [visibleProjects, setVisibleProjects] = useState([]);
  const [hoveredProject, setHoveredProject] = useState(null);
  const projectRefs = useRef([]);

  const projects = [
    {
    title: "The Trace Express",
    subtitle: "Global Shipping Platform",
    url: "thetraceexpress.com",
    description:
      "Revolutionary global parcel shipping platform with secure authentication, real-time tracking dashboards, and seamless payment integration for worldwide logistics.",
    video: "./tte-video.mp4",
    // 🟢 got gradient from C4U
    bgGradient: "from-emerald-500 to-teal-600",
    textGradient: "from-emerald-400 to-teal-400",
    accentColor: "emerald",
    icon: <Zap className="w-6 h-6" />,
    tags: ["Shipping", "React", "Express", "MongoDB"],
  },
  {
    title: "Tracking Express",
    subtitle: "Real-time Logistics",
    url: "tracking.thetraceexpress.com",
    description:
      "Advanced package tracking solution with live updates and intelligent API integration, enabling instant monitoring and streamlined operations.",
    video: "./tte-tracking.mp4",
    // 🟣 got gradient from The Trace Express
    bgGradient: "from-purple-500 to-fuchsia-600",
    textGradient: "from-purple-400 to-fuchsia-400",
    accentColor: "purple",
    icon: <Code2 className="w-6 h-6" />,
    tags: ["React", "APIs", "Real-time", "Tracking"],
  },
  {
    title: "C4U",
    subtitle: "AI-Powered Consultancy",
    url: "c4u.co.in",
    description:
      "Next-generation AI-powered consultancy platform transforming how professionals and clients connect with seamless appointment booking and intelligent report generation.",
    video: "./consultancy-video.mp4",
    // 🔵 got gradient from Tracking Express
    bgGradient: "from-cyan-500 to-blue-600",
    textGradient: "from-cyan-400 to-blue-400",
    accentColor: "cyan",
    icon: <Rocket className="w-6 h-6" />,
    tags: ["AI", "React", "Node.js", "PostgreSQL"],
  },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleProjects.includes(index)) {
              setVisibleProjects(prev => [...prev, index]);
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [visibleProjects]);

  return (
    <section 
      ref={projectsRef}
      id="projects" 
      className="py-16 sm:py-24 md:py-32 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03)_0%,transparent_65%)]"></div>
        <div className="absolute inset-0 opacity-20">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-emerald-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <p className="text-emerald-400 text-sm sm:text-base md:text-lg font-bold tracking-[0.3em] uppercase">
              Featured Work
            </p>
            <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
          </div>
          
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Projects That
            <br />
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Make an Impact
            </span>
          </h2>
          
          <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Exceptional digital experiences crafted with passion and precision
          </p>
        </div>
        
        {/* Projects Grid */}
        <div className="space-y-8 sm:space-y-12 md:space-y-16 lg:space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={el => projectRefs.current[index] = el}
              className={`transition-all duration-1000 ease-out ${
                visibleProjects.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-16'
              }`}
            >
              {/* Split Layout Card */}
              <div 
                className={`grid lg:grid-cols-2 gap-0 bg-slate-800/40 backdrop-blur-sm rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-700/50 hover:border-slate-600/50 transition-all duration-500 shadow-2xl hover:shadow-3xl group ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                
               {/* Image Section - Enhanced with ambient depth */}
<div className={`relative flex items-center justify-center overflow-hidden ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
  {/* Ambient gradient background */}
  <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
    <div className={`absolute inset-0 bg-gradient-to-r ${project.bgGradient} opacity-[0.05] mix-blend-overlay`} />
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
  </div>

  {/* Subtle noise layer for texture */}
  <div className="absolute inset-0 opacity-10 mix-blend-soft-light" style={{
    backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')",
    backgroundSize: "150px"
  }}></div>

  {/* Image container */}
  <div className="relative w-[95%] h-auto max-h-[80vh] flex items-center justify-center z-10">
   <video
  src={project.video}
  autoPlay
  loop
  muted
  playsInline
  className="w-[95%] h-auto max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-slate-700/40 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
/>

  </div>

  {/* Glow behind image */}
  <div className={`absolute -inset-10 bg-gradient-to-r ${project.bgGradient} opacity-10 blur-3xl group-hover:opacity-30 transition-all duration-700`} />

  {/* LIVE Badge */}
  <div className="absolute top-6 right-8 z-20">
    <div className={`flex items-center gap-2 bg-gradient-to-r ${project.bgGradient} text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-sm animate-pulse-slow`}>
      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
      <span className="text-xs sm:text-sm font-bold tracking-wide">LIVE</span>
    </div>
  </div>
</div>




                {/* Content Section */}
                <div className={`relative p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  
                  {/* Project Number */}
                  <div className={`absolute top-4 right-4 sm:top-6 sm:right-6 text-6xl sm:text-7xl md:text-8xl font-black bg-gradient-to-br ${project.textGradient} bg-clip-text text-transparent opacity-10 group-hover:opacity-20 transition-opacity duration-500`}>
                    0{index + 1}
                  </div>

                  <div className="relative space-y-4 sm:space-y-5 md:space-y-6">
                    {/* Badge with Icon */}
                    <div className="flex items-center gap-3">
                      <div className={`flex items-center gap-2 bg-gradient-to-r ${project.bgGradient} text-white px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 group-hover:scale-105`}>
                        {project.icon}
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider">
                          {project.subtitle}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r ${project.textGradient} bg-clip-text text-transparent leading-tight transform transition-all duration-500 group-hover:scale-105 origin-left`}>
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 sm:gap-3 pt-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className={`px-3 sm:px-4 py-1.5 sm:py-2 bg-slate-700/50 text-slate-300 rounded-lg text-xs sm:text-sm font-semibold border border-slate-600/50 hover:border-${project.accentColor}-500/50 hover:text-white hover:bg-slate-700 transition-all duration-300 hover:scale-110 cursor-default`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA Button */}
                    <div className="pt-4 sm:pt-6">
                      <a 
                        href={`https://${project.url}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group/btn inline-flex items-center gap-3 bg-gradient-to-r ${project.bgGradient} text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-110 transform relative overflow-hidden`}
                      >
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-500 group-hover/btn:rotate-45" />
                        <span className="relative z-10">View Live Project</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 relative z-10 transition-transform duration-500 group-hover/btn:translate-x-2" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>

              {/* Decorative Glow */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${project.bgGradient} rounded-2xl sm:rounded-3xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-700 -z-10`}></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 sm:mt-20 md:mt-24 lg:mt-32">
          <div className="bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-8 sm:p-10 md:p-12 lg:p-16 border border-emerald-500/20 text-center relative overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 via-teal-500/20 to-cyan-500/20 animate-pulse-slow"></div>
            </div>

            <div className="relative z-10 space-y-6 sm:space-y-8">
              <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-emerald-400 animate-pulse" />
              
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
                  Have a Project in Mind?
                </h3>
                <p className="text-slate-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
                  Let's collaborate and create something extraordinary together
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="#contact"
                  className="group inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl shadow-2xl hover:shadow-emerald-500/30 transition-all duration-500 hover:scale-110 transform w-full sm:w-auto justify-center"
                >
                  Start Your Project
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </a>

                <div className="flex items-center gap-2 text-slate-400 text-sm sm:text-base">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-slate-600"></div>
                  <span>or</span>
                  <div className="w-12 h-px bg-gradient-to-l from-transparent to-slate-600"></div>
                </div>

                <a 
                  href="#about"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold text-base sm:text-lg transition-colors duration-300 group"
                >
                  Learn More About Us
                  <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .shadow-3xl {
          box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.5);
        }

        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            transition-duration: 0.01ms !important;
          }
        }

        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;