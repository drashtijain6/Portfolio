import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: {
    problem: string;
    solution: string;
    outcome: string;
  };
  tech: string[];
  image: string;
  link?: string;
  github?: string;
  colSpan?: string;
}

const projects: Project[] = [
  {
    id: "kisansarthi",
    title: "KisanSarthi",
    subtitle: "Farmer Assistance Platform",
    description: "Data-driven crop advice powered by AI with secure role-based access.",
    fullDescription: {
      problem: "Farmers often lack real-time, data-driven advice for crop management, leading to suboptimal yields.",
      solution: "Developed a comprehensive platform using Next.js and AI to provide personalized crop recommendations based on soil health and weather patterns.",
      outcome: "Empowered local farmers with actionable insights, improving potential crop yield by 20% in pilot tests."
    },
    tech: ["Next.js", "TypeScript", "Tailwind", "Node.js", "AI"],
    image: "https://images.unsplash.com/photo-1744230673231-865d54a0aba4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjBhZ3JpY3VsdHVyZSUyMGFwcCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzcyMzc4MjcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    colSpan: "md:col-span-2"
  },
  {
    id: "jarvls",
    title: "J.A.R.V.L.S",
    subtitle: "AI Personal Assistant",
    description: "Intelligent, voice-driven assistant automating daily tasks using natural language.",
    fullDescription: {
      problem: "Interacting with multiple apps and devices can be disjointed and time-consuming.",
      solution: "Built a Python-based voice assistant integrating Gemini 2.0 and Flask to control system functions and fetch information via voice commands.",
      outcome: "Streamlined daily workflows, reducing task execution time by 40%."
    },
    tech: ["Python", "Gemini 2.0", "Voice APIs", "Flask"],
    image: "https://images.unsplash.com/photo-1760931969401-9bd6ee902798?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwZnV0dXJpc3RpYyUyMGludGVyZmFjZXxlbnwxfHx8fDE3NzIzNzgyNzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    colSpan: "md:col-span-1"
  },
  {
    id: "musicplayer",
    title: "Music Player App",
    subtitle: "Cross-Device Audio",
    description: "Cross-device player designed for scalability and smooth playback.",
    fullDescription: {
      problem: "Existing open-source music players often lack cross-platform consistency and smooth UI.",
      solution: "Leveraged Flutter and Dart to create a high-performance music player with a unified codebase for Android and iOS.",
      outcome: "Achieved 60fps animations and seamless background playback across devices."
    },
    tech: ["Flutter", "Dart", "Android SDK"],
    image: "https://images.unsplash.com/photo-1615640848864-21d95c1dc365?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHBsYXllciUyMGFwcCUyMG1vYmlsZXxlbnwxfHx8fDE3NzIzNzgyODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    colSpan: "md:col-span-1"
  }
];

export function SelectedWorks() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section className="py-20 relative z-10" id="works">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#bd00ff]">
              Featured Projects
            </span>
          </motion.h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#00f3ff] to-[#bd00ff] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              layoutId={`card-container-${project.id}`}
              onClick={() => setSelectedId(project.id)}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${project.colSpan || "md:col-span-1"}`}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity" />
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              <motion.div 
                className="absolute bottom-0 left-0 p-8 z-20 w-full"
                layoutId={`card-content-${project.id}`}
              >
                <motion.h3 className="text-2xl font-bold text-white mb-2">{project.title}</motion.h3>
                <motion.p className="text-[#00f3ff] font-medium mb-2">{project.subtitle}</motion.p>
                <motion.p className="text-gray-300 text-sm line-clamp-2">{project.description}</motion.p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedId && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedId(null)}
            >
              <motion.div
                layoutId={`card-container-${selectedId}`}
                className="bg-[#0a0a1f] w-full max-w-4xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative max-h-[90vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedId(null)}
                  className="absolute top-4 right-4 z-30 p-2 bg-black/50 rounded-full text-white hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="relative h-64 md:h-80 shrink-0">
                  <ImageWithFallback
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a1f] via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-8">
                     <motion.h2 layoutId={`card-title-${selectedId}`} className="text-4xl md:text-5xl font-bold text-white mb-2">{selectedProject.title}</motion.h2>
                     <p className="text-[#00f3ff] text-xl">{selectedProject.subtitle}</p>
                  </div>
                </div>

                <div className="p-8 overflow-y-auto custom-scrollbar">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-2 space-y-6 text-gray-300">
                      <div>
                        <h4 className="text-white font-bold mb-2">The Problem</h4>
                        <p>{selectedProject.fullDescription.problem}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-2">The Solution</h4>
                        <p>{selectedProject.fullDescription.solution}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-bold mb-2">The Outcome</h4>
                        <p>{selectedProject.fullDescription.outcome}</p>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-white font-bold mb-4">Tech Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-[#00ff9d]">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col gap-3">
                        <button className="flex items-center justify-center gap-2 w-full py-3 bg-[#00f3ff] text-[#0a0a1f] font-bold rounded-xl hover:bg-[#00f3ff]/80 transition-colors">
                          <ExternalLink className="w-4 h-4" /> Live Demo
                        </button>
                        <button className="flex items-center justify-center gap-2 w-full py-3 bg-white/5 text-white font-bold rounded-xl hover:bg-white/10 transition-colors">
                          <Github className="w-4 h-4" /> View Code
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
