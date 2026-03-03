import { motion } from 'motion/react';

const TechStack = () => {
  const row1 = ["Python", "Java", "C", "HTML/CSS", "JavaScript", "SQL", "Dart"];
  const row2 = ["React", "Next.js", "Node.js", "Tailwind CSS", "Flutter", "Flask", "Generative AI", "Information Security"];

  return (
    <section className="py-20 bg-background overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <h2 className="text-center text-4xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">The Tech Stack</h2>

      {/* Row 1 */}
      <div className="flex w-full whitespace-nowrap mb-8 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-4 px-4"
        >
          {[...row1, ...row1, ...row1].map((tech, i) => (
            <div key={i} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 font-mono text-sm hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
              {tech}
            </div>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex gap-4 px-4"
        >
          {[...row1, ...row1, ...row1].map((tech, i) => (
            <div key={`dup-${i}`} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 font-mono text-sm hover:border-emerald-500/50 hover:text-emerald-400 transition-colors cursor-default">
              {tech}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Reverse Direction */}
      <div className="flex w-full whitespace-nowrap overflow-hidden">
        <motion.div
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-4 px-4"
        >
          {[...row2, ...row2, ...row2].map((tech, i) => (
            <div key={i} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 font-mono text-sm hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
              {tech}
            </div>
          ))}
        </motion.div>
        <motion.div
          animate={{ x: ["-100%", "0%"] }}
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          className="flex gap-4 px-4"
        >
           {[...row2, ...row2, ...row2].map((tech, i) => (
            <div key={`dup-${i}`} className="px-6 py-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-gray-300 font-mono text-sm hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default">
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
