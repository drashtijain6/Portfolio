import { motion } from 'motion/react';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "ToolBuy.com",
      role: "Product Data Management Intern",
      location: "Mumbai, Maharashtra",
      description: [
        "Managed and updated product listings, including prices and stock.",
        "Ensured accuracy based on market changes and maintained clean digital records to keep website data reliable."
      ]
    }
  ];

  return (
    <section className="py-20 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
        Experience
      </h2>

      <div className="relative border-l-2 border-white/10 ml-4 md:ml-10 space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline Node */}
            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
            
            <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-emerald-500/30 transition-colors group">
              <div className="flex items-center gap-3 mb-2 text-emerald-400">
                <Briefcase size={18} />
                <span className="font-mono text-sm">{exp.location}</span>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors">
                {exp.role}
              </h3>
              
              <p className="text-gray-400 mb-4 font-medium">{exp.company}</p>
              
              <ul className="space-y-2 text-gray-300 list-disc list-inside marker:text-emerald-500">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
