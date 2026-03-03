import { motion } from 'motion/react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

// Using the provided "Indian female student" Unsplash image as a placeholder for the user's photo
import profileImg from "figma:asset/d4482a124290.png"; // Placeholder for the actual image. I will adjust the import if needed later. But wait, I must use the correct import.

const Hero = () => {
  const titles = ["IT Engineering Student.", "Full-Stack Developer.", "Generative AI Enthusiast."];

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6 relative overflow-hidden">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Column: Text */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-left space-y-6"
        >
          <p className="text-emerald-400 font-mono text-lg tracking-wide">Welcome to my digital space 👋</p>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-emerald-400">
              Drashti Jain.
            </span>
          </h1>

          <div className="h-8 md:h-12 overflow-hidden">
            <motion.div
              animate={{ y: [0, -40, -80, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", times: [0, 0.33, 0.66, 1] }}
              className="text-xl md:text-3xl text-gray-400 font-medium"
            >
              <div className="h-10 md:h-14">IT Engineering Student.</div>
              <div className="h-10 md:h-14">Full-Stack Developer.</div>
              <div className="h-10 md:h-14">Generative AI Enthusiast.</div>
            </motion.div>
          </div>

          <p className="text-gray-400 max-w-lg text-lg leading-relaxed">
            I build clean, efficient, and user-friendly solutions with a passion for problem-solving and modern web technologies.
          </p>

          <div className="flex gap-4 pt-4">
            <motion.a 
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium shadow-lg shadow-blue-500/30 hover:bg-blue-700 transition-colors"
            >
              View My Work
            </motion.a>
            
            <motion.a 
              href="/resume.pdf" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/20 bg-white/5 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              Download Resume
              <ArrowDown size={18} />
            </motion.a>
          </div>
          
          <div className="flex gap-6 pt-8">
            <a href="https://linkedin.com/in/Drashti_Jain" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/drashtijain6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="mailto:drashtijain808@gmail.com" className="text-gray-400 hover:text-emerald-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>

        </motion.div>

        {/* Right Column: Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            {/* Rotating Ring */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-500/50"
            />
             <motion.div 
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="absolute inset-4 rounded-full border border-blue-500/30"
            />
            
            {/* Floating Image Container */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl shadow-blue-500/20 z-10 bg-gray-800"
            >
              <img 
                src="https://images.unsplash.com/photo-1689580298851-d4482a124290?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBmZW1hbGUlMjBzdHVkZW50JTIwcHJvZmVzc2lvbmFsJTIwaGVhZHNob3QlMjBwbGFudHN8ZW58MXx8fHwxNzcyMzc3Nzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                alt="Drashti Jain" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Glowing Backdrop */}
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full -z-10" />
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
