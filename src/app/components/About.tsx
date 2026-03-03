import { motion } from "motion/react";

export function About() {
  const textLines = [
    "I am an IT engineering student at the University of Mumbai (Aug. 2023 - May 2027)",
    "with a strong foundation in programming and software development.",
    "I am a fast learner seeking to apply my skills to meaningful,",
    "dynamic software projects."
  ];

  return (
    <section className="py-20 md:py-32 relative z-10" id="about">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-white/5 backdrop-blur-lg border border-white/10 p-8 md:p-12 rounded-3xl"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#00ff9d]">About Me</h2>
          
          <div className="space-y-4 text-lg md:text-2xl text-gray-300 font-light leading-relaxed">
            {textLines.map((line, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
