import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, X, Github } from 'lucide-react';
import kisansarthiDemo from '../../../../projects/kisansarthi.mp4';
import resqconnectDemo from '../../../../projects/ngo.mp4';

const projects = [
  {
    id: 1,
    title: "ResQConnect",
    subtitle: "Animal Rescue Platform",
    tech: ["React", "Node.js", "MySQL", "Leaflet", "Razorpay"],
    desc: "A centralized system for reporting injured animals and coordinating rescue operations in real time.",
    detailsLead: "A centralized system for reporting injured animals and coordinating rescue operations in real time.",
    detailsSublead: "Built a full-stack platform with live location tracking and structured rescue workflows.",
    detailsBullets: [
      "Implemented RBAC for 4 user roles",
      "Integrated Razorpay for secure donations",
      "Enabled real-time rescue tracking with map updates",
      "Designed an admin dashboard for NGOs and volunteers"
    ],
    detailsTechLine: "React · Node.js · MySQL · Leaflet · Razorpay",
    demoUrl: resqconnectDemo,
    sourceCodeUrl: null,
    img: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&q=80",
    color: "from-green-500 to-emerald-700",
    featured: true
  },
  {
    id: 2,
    title: "KisanSarthi",
    subtitle: "Farmer Assistance Platform",
    tech: ["Python", "IoT", "Web Technologies", "Data Processing"],
    desc: "A smart digital farming assistant designed to support farmers with data-driven insights and automated decision-making.",
    detailsLead: "A smart digital farming assistant designed to support farmers with data-driven insights and automated decision-making.",
    detailsSublead: "Built to enhance agricultural efficiency through intelligent monitoring and practical automation.",
    detailsBullets: [
      "Integrated real-time crop and environmental data analysis",
      "Designed intuitive interface for farmer accessibility",
      "Implemented smart recommendations for irrigation and crop care",
      "Structured scalable architecture for future IoT expansion"
    ],
    detailsTechLine: "Python · IoT · Web Technologies · Data Processing",
    demoUrl: kisansarthiDemo,
    sourceCodeUrl: "https://github.com/drashtijain6/KisanSarthi-V2",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=800&q=80",
    color: "from-blue-600 to-indigo-800"
  },
  {
    id: 3,
    title: "J.A.R.V.I.S",
    subtitle: "AI Personal Assistant",
    tech: ["Python", "Flask", "Gemini 2.0", "Voice APIs"],
    desc: "An intelligent voice-driven assistant that automates daily tasks through natural language interaction.",
    detailsLead: "An intelligent voice-driven assistant that automates daily tasks through natural language interaction.",
    detailsSublead: "Powered by Generative AI for human-like conversational responses.",
    detailsBullets: [
      "Integrated Gemini 2.0 Flash for NLP",
      "Implemented speech-to-text and text-to-speech",
      "Built task scheduling and reminder system",
      "Designed modular architecture for future scaling"
    ],
    detailsTechLine: "Python · Flask · Gemini 2.0 · Voice APIs",
    demoUrl: "https://youtu.be/q51ltlrrbl4?si=vbwFnDL1tuYrJEyV",
    sourceCodeUrl: "https://github.com/drashtijain6/Jarvis",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    color: "from-purple-500 to-pink-600"
  },
  {
    id: 4,
    title: "Music Player App",
    subtitle: "Cross-Platform Music Player",
    tech: ["Flutter", "Dart", "Android SDK"],
    desc: "A high-performance music player delivering smooth playback and intuitive controls.",
    detailsLead: "A high-performance music player delivering smooth playback and intuitive controls.",
    detailsSublead: "Engineered with Flutter for responsive UI and optimized audio streaming.",
    detailsBullets: [
      "Built modular, scalable widget architecture",
      "Implemented efficient audio caching",
      "Designed clean UI with albums and playlists",
      "Optimized performance and latency"
    ],
    detailsTechLine: "Flutter · Dart · Android SDK",
    sourceCodeUrl: "https://github.com/drashtijain6/music_player",
    img: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    color: "from-pink-500 to-rose-600"
  }
];

const Projects = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [modalView, setModalView] = useState<'summary' | 'details'>('summary');

  const selectedProject = useMemo(() => {
    if (!selectedId) return null;
    return projects.find((p) => p.id === selectedId) ?? null;
  }, [selectedId]);

  const openDetails = () => {
    setModalView('details');
  };

  const backToSummary = () => {
    setModalView('summary');
  };

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#bd00ff]">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f3ff] to-[#bd00ff] mx-auto rounded-full" />
        </div>
        <div className="bento-grid">
          {projects.map((project, index) => {
            let cardClass = '';
            if (project.featured) {
              cardClass = 'project-card-featured';
            } else {
              cardClass = `project-card-${index + 1}`;
            }
            return (
              <motion.div 
                key={project.id} 
                className={`project-card interactive ${cardClass}`}
                onClick={() => {
                  setSelectedId(project.id);
                  setModalView('summary');
                }}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
              >
                <div className="project-image-container">
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="project-image" 
                  />
                  <div className="project-overlay"></div>
                </div>
                <div className="project-content">
                  {project.featured && (
                    <div className="featured-badge">Featured</div>
                  )}
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-description">{project.desc}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tech-tag">+{project.tech.length - 4}</span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
            onClick={() => setSelectedId(null)}
          >
            <motion.div 
              layoutId={`card-${selectedId}`} 
              className="bg-[#1a1a2e] w-full max-w-3xl rounded-3xl overflow-hidden relative border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-20 text-white"
              >
                <X size={24} />
              </button>

              {selectedProject && (
                <div className="relative overflow-hidden">
                  <motion.div
                    animate={{ x: modalView === 'summary' ? '0%' : '-50%' }}
                    transition={{ duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ willChange: 'transform' }}
                    className="flex w-[200%]"
                  >
                    <div className="w-1/2 shrink-0 grid md:grid-cols-2">
                      <div className="h-64 md:h-auto relative">
                        <img
                          src={selectedProject.img}
                          alt={selectedProject.title}
                          className="w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} mix-blend-multiply opacity-60`} />
                      </div>

                      <div className="p-8 flex flex-col justify-center">
                        <h2 className="text-4xl font-bold text-white mb-2">
                          {selectedProject.title}
                        </h2>
                        <p className="text-emerald-400 font-mono mb-6">
                          {selectedProject.subtitle}
                        </p>

                        <p className="text-gray-300 mb-6 leading-relaxed">
                          {selectedProject.desc}
                        </p>

                        <div className="mb-8">
                          <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Tech Stack</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedProject.tech.map((t, i) => (
                              <span key={i} className="px-3 py-1 text-sm rounded-md bg-white/5 border border-white/10 text-gray-300">
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex gap-4">
                          <a
                            href={selectedProject.demoUrl ?? '#'}
                            target={selectedProject.demoUrl ? '_blank' : undefined}
                            rel={selectedProject.demoUrl ? 'noopener noreferrer' : undefined}
                            aria-disabled={!selectedProject.demoUrl}
                            onClick={(e) => {
                              if (!selectedProject.demoUrl) e.preventDefault();
                            }}
                            className={`flex-1 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${selectedProject.demoUrl ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-white/5 text-white/40 border border-white/10 cursor-not-allowed'}`}
                          >
                            <ExternalLink size={18} /> Live Demo
                          </a>
                          <a
                            href={selectedProject.sourceCodeUrl ?? '#'}
                            target={selectedProject.sourceCodeUrl ? '_blank' : undefined}
                            rel={selectedProject.sourceCodeUrl ? 'noopener noreferrer' : undefined}
                            aria-disabled={!selectedProject.sourceCodeUrl}
                            onClick={(e) => {
                              if (!selectedProject.sourceCodeUrl) e.preventDefault();
                            }}
                            className={`flex-1 py-3 rounded-xl font-medium transition-colors flex items-center justify-center gap-2 ${selectedProject.sourceCodeUrl ? 'border border-white/20 hover:bg-white/5 text-white' : 'bg-white/5 text-white/40 border border-white/10 cursor-not-allowed'}`}
                          >
                            <Github size={18} /> Source Code
                          </a>
                        </div>

                        <div className="mt-6 flex justify-end">
                          <a
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              openDetails();
                            }}
                            className="group inline-flex items-center gap-2 text-sm font-medium text-cyan-200/90 hover:text-cyan-200 transition-colors underline underline-offset-4 decoration-cyan-300/30 hover:decoration-cyan-300/60"
                          >
                            Details
                            <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="w-1/2 shrink-0 p-8">
                      <div className="flex items-start justify-between gap-4 mb-6">
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-1">{selectedProject.title}</h2>
                          <p className="text-cyan-200/90 font-mono">{selectedProject.subtitle}</p>
                        </div>
                        <button
                          type="button"
                          onClick={backToSummary}
                          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90 backdrop-blur-md transition-colors hover:bg-white/10"
                        >
                          ← Back
                        </button>
                      </div>

                      <div>
                        <h4 className="text-sm uppercase tracking-wider text-white/40 mb-4">Project Details</h4>
                        <p className="text-gray-100 leading-relaxed">{selectedProject.detailsLead}</p>
                        <p className="text-gray-300 leading-relaxed mt-3">{selectedProject.detailsSublead}</p>

                        <ul className="mt-6 space-y-3 text-gray-200">
                          {selectedProject.detailsBullets.map((item, idx) => (
                            <li key={idx} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300/80" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
