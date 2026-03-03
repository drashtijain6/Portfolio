import { motion } from "motion/react";
import DomeGallery from "../../components/DomeGallery";

export function TechStack() {
  return (
    <section className="w-1/2 min-h-screen flex items-center justify-center py-20 relative overflow-hidden border-r border-white/10">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00f3ff] rounded-full opacity-20"
            style={{
              left: `${10 + (i * 15)}%`,
              top: `${15 + (i * 10)}%`,
            }}
            animate={{
              y: [0, -20, 0],
              x: [0, 5, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + (i * 0.3),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
        >
            <motion.h2
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#bd00ff]">
                Technical Skills
              </span>
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00f3ff] to-[#bd00ff] mx-auto rounded-full" />
        </motion.div>

        {/* Dome Gallery */}
        <div className="w-full h-[600px] relative">
          <DomeGallery
            fit={0.8}
            minRadius={600}
            maxVerticalRotationDeg={15}
            segments={34}
            dragDampening={2}
            dragSensitivity={20}
            grayscale={false}
          />
        </div>
      </div>
    </section>
  );
}
