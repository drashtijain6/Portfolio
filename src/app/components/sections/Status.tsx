import { motion } from 'motion/react';
import { Activity, Radio } from 'lucide-react';

const Status = () => {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center text-white flex items-center justify-center gap-3">
        <Activity className="text-emerald-400" />
        Currently Brewing
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Active Project Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative group p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
            <div className="w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">Active Project</h3>
          <p className="text-emerald-400 font-mono mb-4 text-sm">Full-Stack Development</p>
          
          <h4 className="text-2xl font-bold text-gray-200 mb-4 group-hover:text-white transition-colors">
            NGO for Animals Rescue Connect
          </h4>
          
          <p className="text-gray-400 text-sm leading-relaxed">
            Building a tech-for-good platform to connect animal shelters with potential adopters and volunteers.
          </p>
          
          <div className="mt-6 flex items-center gap-2 text-xs text-gray-500 font-mono">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            IN PROGRESS
          </div>
        </motion.div>

        {/* Live Event Card */}
        <motion.div 
          whileHover={{ y: -5 }}
          className="relative group p-8 rounded-3xl border border-emerald-500/20 bg-emerald-900/10 backdrop-blur-md overflow-hidden"
        >
          <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <Radio size={14} className="animate-pulse" />
            Live
          </div>
          
          <h3 className="text-xl font-bold text-white mb-2">Event Participation</h3>
          <p className="text-emerald-400 font-mono mb-4 text-sm">Hackathon</p>
          
          <h4 className="text-2xl font-bold text-gray-200 mb-4 group-hover:text-white transition-colors">
            Pixel Hackathon 2026
          </h4>
          
          <p className="text-gray-400 text-sm leading-relaxed">
            Competed in a 48-hour coding challenge focused on sustainable tech solutions.
          </p>
           
          <div className="mt-6 flex items-center gap-2 text-xs text-emerald-500/80 font-mono">
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
             HAPPENING NOW
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Status;
