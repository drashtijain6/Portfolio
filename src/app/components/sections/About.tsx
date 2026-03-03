import { motion } from 'motion/react';

const About = () => {
  return (
    <section className="py-20 px-6 relative bg-gradient-to-b from-transparent to-background/50">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500"
        >
          About Me
        </motion.h2>

        <div className="space-y-8 text-lg md:text-2xl text-gray-300 leading-relaxed font-light">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I am an IT engineering student at the <span className="text-white font-medium">University of Mumbai</span> (Aug. 2023 - May 2027) with a strong foundation in programming and software development.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I am a fast learner seeking to apply my skills to meaningful, dynamic software projects. My journey is driven by curiosity and a relentless pursuit of excellence in code.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
