import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Phone, ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <footer className="relative bg-background border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 via-transparent to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 py-20 flex flex-col md:flex-row gap-16">
        
        {/* Contact Form */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-white">Let's Connect</h2>
            <p className="text-gray-400 max-w-md text-lg">
              Have a project in mind or just want to chat about AI? Drop me a message!
            </p>
          </motion.div>

          <form className="space-y-4 max-w-md">
            <div className="grid grid-cols-2 gap-4">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-colors"
              />
            </div>
            <textarea 
              rows={4} 
              placeholder="Your Message" 
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:border-blue-500 focus:outline-none transition-colors resize-none"
            />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium py-3 rounded-xl shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col justify-between space-y-12">
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer group">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-colors">
                <Mail size={20} className="text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">drashtijain808@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors cursor-pointer group">
              <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-colors">
                <Phone size={20} className="text-emerald-400" />
              </div>
              <div>
                 <p className="text-sm text-gray-500">Phone</p>
                 <p className="font-medium">8591557794</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
             <a href="https://www.linkedin.com/in/drashti-jain-2ba597289" target="_blank" rel="noopener noreferrer" 
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all text-gray-300 hover:text-white"
             >
                <Linkedin size={18} /> LinkedIn <ArrowUpRight size={14} />
             </a>
             <a href="https://github.com/drashtijain6" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/30 transition-all text-gray-300 hover:text-white"
             >
                <Github size={18} /> GitHub <ArrowUpRight size={14} />
             </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-8 text-center text-gray-500 text-sm font-mono">
        Designed with 💡 by Drashti Jain. © 2026.
      </div>
    </footer>
  );
};

export default Contact;
