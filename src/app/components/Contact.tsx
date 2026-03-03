import { motion } from "motion/react";
import { Send, Linkedin, Github, Mail, Phone } from "lucide-react";

export function Contact() {
  return (
    <footer className="relative bg-[#0a0a1f] pt-20 pb-10 overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 mb-20 relative z-10">
        {/* Left Column: Form */}
        <div>
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f3ff] to-[#bd00ff]">
              Get In Touch
            </span>
          </motion.h2>
          <p className="text-gray-400 mb-8 max-w-md">
            Have a project in mind or just want to chat about tech? Drop me a message.
          </p>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Name</label>
                <input 
                  type="text" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f3ff] transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f3ff] transition-colors"
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500 uppercase tracking-wider">Message</label>
              <textarea 
                rows={4} 
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00f3ff] transition-colors resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 bg-gradient-to-r from-[#00f3ff] to-[#bd00ff] text-white font-bold rounded-lg shadow-[0_0_20px_rgba(0,243,255,0.3)] hover:shadow-[0_0_30px_rgba(0,243,255,0.5)] transition-all flex items-center justify-center gap-2"
            >
              Send Message <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </div>

        {/* Right Column: Info */}
        <div className="flex flex-col justify-center space-y-8 md:pl-12 border-l border-white/5">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Contact Details</h3>
            
            <a href="mailto:drashtijain808@gmail.com" className="flex items-center gap-4 text-gray-300 hover:text-[#00f3ff] transition-colors group">
              <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-[#00f3ff] transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <span>drashtijain808@gmail.com</span>
            </a>

            <a href="tel:8591557794" className="flex items-center gap-4 text-gray-300 hover:text-[#00ff9d] transition-colors group">
              <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-[#00ff9d] transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span>+91 8591557794</span>
            </a>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Socials</h3>
            <div className="flex gap-4">
              <motion.a 
                href="https://www.linkedin.com/in/drashti-jain-2ba597289" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-[#0077b5] hover:border-transparent text-white transition-all"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
              
              <motion.a 
                href="https://github.com/drashtijain6" 
                target="_blank" 
                rel="noopener noreferrer"
                whileHover={{ y: -5 }}
                className="p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-[#333] hover:border-transparent text-white transition-all"
              >
                <Github className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          Designed with 💡 by Drashti Jain. © 2026.
        </p>
        <p className="text-gray-600 text-xs">
          Built with React, Tailwind & Motion.
        </p>
      </div>
    </footer>
  );
}
