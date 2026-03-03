import { motion } from "motion/react";
import { Activity, Radio } from "lucide-react";

export function Status() {
  return (
    <section className="py-20 relative z-10" id="status">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0a0a1f] to-[#0a0a1f]/80 border border-[#00ff9d]/20 p-8 rounded-3xl relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00ff9d]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#00ff9d]/10 text-[#00ff9d] text-xs font-bold uppercase tracking-widest border border-[#00ff9d]/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff9d] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00ff9d]"></span>
                  </span>
                  Live Status
                </span>
                <span className="text-gray-500 text-sm">|</span>
                <span className="text-gray-400 text-sm font-mono">Just Now</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Currently Brewing ☕️</h3>
              <p className="text-gray-400 max-w-lg">
                I'm always building something. Here's what's on my screen right now.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-auto">
                <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 text-[#00f3ff] mb-2">
                        <Activity className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase">Active Project</span>
                    </div>
                    <p className="font-medium text-white">NGO for animals rescue connect</p>
                    <p className="text-xs text-gray-500 mt-1">Full-Stack Development</p>
                </div>

                <div className="p-4 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 text-[#bd00ff] mb-2">
                        <Radio className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase">Participating</span>
                    </div>
                    <p className="font-medium text-white">Pixel Hackathon</p>
                    <p className="text-xs text-gray-500 mt-1">Hacking...</p>
                </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
